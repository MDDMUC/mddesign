import {
  VERT,
  SPLAT,
  ADVECT,
  DIVERGENCE,
  CURL,
  VORTICITY,
  PRESSURE,
  GRADIENT,
  CLEAR,
  DISPLAY,
} from './shaders'

type FBO = {
  fbo: WebGLFramebuffer
  texture: WebGLTexture
  width: number
  height: number
  texelX: number
  texelY: number
  attach(unit: number): number
}

type DoubleFBO = {
  width: number
  height: number
  texelX: number
  texelY: number
  read: FBO
  write: FBO
  swap(): void
}

type Pointer = {
  id: number
  x: number
  y: number
  dx: number
  dy: number
  down: boolean
  moved: boolean
}

type Config = {
  simRes: number
  dyeRes: number
  densityDissipation: number
  velocityDissipation: number
  pressureIterations: number
  curl: number
  splatRadius: number
  splatForce: number
  logoSrc: string
  logoSizePx: number
  logoMaxVw: number
  logoDisplaceStrength: number
}

const DEFAULTS: Config = {
  simRes: 128,
  dyeRes: 512,
  densityDissipation: 1.6,
  velocityDissipation: 0.4,
  pressureIterations: 20,
  curl: 22,
  splatRadius: 0.22,
  splatForce: 5800,
  logoSrc: '/images/hero/familycrest.png',
  logoSizePx: 360,
  logoMaxVw: 0.7,
  logoDisplaceStrength: 0.0025,
}

export type FluidController = {
  dispose(): void
  resize(): void
}

function compile(gl: WebGL2RenderingContext, type: number, src: string) {
  const sh = gl.createShader(type)!
  gl.shaderSource(sh, src)
  gl.compileShader(sh)
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(sh)
    gl.deleteShader(sh)
    throw new Error('shader compile: ' + log)
  }
  return sh
}

function program(gl: WebGL2RenderingContext, vertSrc: string, fragSrc: string) {
  const v = compile(gl, gl.VERTEX_SHADER, vertSrc)
  const f = compile(gl, gl.FRAGMENT_SHADER, fragSrc)
  const p = gl.createProgram()!
  gl.attachShader(p, v)
  gl.attachShader(p, f)
  gl.linkProgram(p)
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
    const log = gl.getProgramInfoLog(p)
    gl.deleteProgram(p)
    throw new Error('program link: ' + log)
  }
  gl.deleteShader(v)
  gl.deleteShader(f)
  const uniforms = new Map<string, WebGLUniformLocation>()
  const n = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS)
  for (let i = 0; i < n; i++) {
    const info = gl.getActiveUniform(p, i)!
    const loc = gl.getUniformLocation(p, info.name)
    if (loc) uniforms.set(info.name, loc)
  }
  return { program: p, uniforms }
}

function createFBO(
  gl: WebGL2RenderingContext,
  w: number,
  h: number,
  internalFormat: number,
  format: number,
  type: number,
  filter: number,
): FBO {
  gl.activeTexture(gl.TEXTURE0)
  const tex = gl.createTexture()!
  gl.bindTexture(gl.TEXTURE_2D, tex)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null)

  const fbo = gl.createFramebuffer()!
  gl.bindFramebuffer(gl.FRAMEBUFFER, fbo)
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0)
  gl.viewport(0, 0, w, h)
  gl.clear(gl.COLOR_BUFFER_BIT)

  const texelX = 1 / w
  const texelY = 1 / h
  return {
    fbo,
    texture: tex,
    width: w,
    height: h,
    texelX,
    texelY,
    attach(unit: number) {
      gl.activeTexture(gl.TEXTURE0 + unit)
      gl.bindTexture(gl.TEXTURE_2D, tex)
      return unit
    },
  }
}

function createDoubleFBO(
  gl: WebGL2RenderingContext,
  w: number,
  h: number,
  internalFormat: number,
  format: number,
  type: number,
  filter: number,
): DoubleFBO {
  let read = createFBO(gl, w, h, internalFormat, format, type, filter)
  let write = createFBO(gl, w, h, internalFormat, format, type, filter)
  return {
    width: w,
    height: h,
    texelX: 1 / w,
    texelY: 1 / h,
    get read() {
      return read
    },
    get write() {
      return write
    },
    swap() {
      const t = read
      read = write
      write = t
    },
  }
}

export function createFluid(
  canvas: HTMLCanvasElement,
  config: Partial<Config> = {},
): FluidController | null {
  const cfg: Config = { ...DEFAULTS, ...config }
  const gl = canvas.getContext('webgl2', {
    alpha: false,
    depth: false,
    stencil: false,
    antialias: false,
    premultipliedAlpha: false,
    preserveDrawingBuffer: false,
  })
  if (!gl) return null

  const halfFloatExt = gl.getExtension('EXT_color_buffer_half_float')
  const floatExt = gl.getExtension('EXT_color_buffer_float')
  const linearExt = gl.getExtension('OES_texture_float_linear')
  void linearExt

  const useHalf = !!halfFloatExt || !!floatExt
  const internalRG = useHalf ? gl.RG16F : gl.RG8
  const internalR = useHalf ? gl.R16F : gl.R8
  const internalRGBA = useHalf ? gl.RGBA16F : gl.RGBA8
  const texType = useHalf ? gl.HALF_FLOAT : gl.UNSIGNED_BYTE
  const filter = gl.LINEAR

  // Programs
  const splatP = program(gl, VERT, SPLAT)
  const advectP = program(gl, VERT, ADVECT)
  const divP = program(gl, VERT, DIVERGENCE)
  const curlP = program(gl, VERT, CURL)
  const vortP = program(gl, VERT, VORTICITY)
  const pressP = program(gl, VERT, PRESSURE)
  const gradP = program(gl, VERT, GRADIENT)
  const clearP = program(gl, VERT, CLEAR)
  const displayP = program(gl, VERT, DISPLAY)

  // Fullscreen triangle
  const vao = gl.createVertexArray()!
  gl.bindVertexArray(vao)
  const buf = gl.createBuffer()!
  gl.bindBuffer(gl.ARRAY_BUFFER, buf)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
  gl.enableVertexAttribArray(0)
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0)

  // FBOs (sized below)
  let velocity: DoubleFBO
  let density: DoubleFBO
  let divergence: FBO
  let curl: FBO
  let pressure: DoubleFBO

  let simW = 0
  let simH = 0
  let dyeW = 0
  let dyeH = 0

  function getSize(target: number) {
    const aspect = canvas.width / canvas.height
    let w: number
    let h: number
    if (aspect > 1) {
      w = Math.round(target * aspect)
      h = target
    } else {
      w = target
      h = Math.round(target / aspect)
    }
    return [Math.max(2, w), Math.max(2, h)]
  }

  function buildBuffers() {
    ;[simW, simH] = getSize(cfg.simRes)
    ;[dyeW, dyeH] = getSize(cfg.dyeRes)
    velocity = createDoubleFBO(gl!, simW, simH, internalRG, gl!.RG, texType, filter)
    density = createDoubleFBO(gl!, dyeW, dyeH, internalR, gl!.RED, texType, filter)
    divergence = createFBO(gl!, simW, simH, internalR, gl!.RED, texType, gl!.NEAREST)
    curl = createFBO(gl!, simW, simH, internalR, gl!.RED, texType, gl!.NEAREST)
    pressure = createDoubleFBO(gl!, simW, simH, internalR, gl!.RED, texType, gl!.NEAREST)
    void internalRGBA
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const w = Math.max(2, Math.floor(canvas.clientWidth * dpr))
    const h = Math.max(2, Math.floor(canvas.clientHeight * dpr))
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w
      canvas.height = h
      buildBuffers()
    }
  }

  resize()

  // Crest texture — loaded async. Shader guards on uLogoEnabled.
  let logoTex: WebGLTexture | null = gl.createTexture()
  let logoReady = false
  {
    gl.bindTexture(gl.TEXTURE_2D, logoTex)
    // 1×1 transparent placeholder so the sampler is valid before load.
    gl.texImage2D(
      gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE,
      new Uint8Array([0, 0, 0, 0]),
    )
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)

    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.decoding = 'async'
    img.src = cfg.logoSrc
    img.onload = () => {
      gl!.bindTexture(gl!.TEXTURE_2D, logoTex)
      gl!.pixelStorei(gl!.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false)
      gl!.texImage2D(
        gl!.TEXTURE_2D, 0, gl!.RGBA, gl!.RGBA, gl!.UNSIGNED_BYTE, img,
      )
      logoReady = true
    }
  }

  function logoUvBox() {
    // Target the same on-screen footprint as the CSS crest:
    // min(logoSizePx, logoMaxVw * cssWidth). Convert to UV.
    const dpr = canvas.width / Math.max(1, canvas.clientWidth)
    const cssW = canvas.clientWidth || canvas.width / dpr
    const targetCss = Math.min(cfg.logoSizePx, cfg.logoMaxVw * cssW)
    const targetPx = targetCss * dpr
    const halfX = targetPx / canvas.width / 2
    const halfY = targetPx / canvas.height / 2
    return { cx: 0.5, cy: 0.5, hx: halfX, hy: halfY }
  }

  function blit(target: FBO | null) {
    if (target) {
      gl!.viewport(0, 0, target.width, target.height)
      gl!.bindFramebuffer(gl!.FRAMEBUFFER, target.fbo)
    } else {
      gl!.viewport(0, 0, canvas.width, canvas.height)
      gl!.bindFramebuffer(gl!.FRAMEBUFFER, null)
    }
    gl!.drawArrays(gl!.TRIANGLES, 0, 3)
  }

  function setTexel(uniforms: Map<string, WebGLUniformLocation>, x: number, y: number) {
    const u = uniforms.get('uTexel')
    if (u) gl!.uniform2f(u, x, y)
  }

  const pointers = new Map<number, Pointer>()

  // Crest warp envelope. 1.0 at boot (so ambient splats can wobble it once),
  // exponentially decays to 0 unless a pointer move lands inside the crest box.
  // Half-life chosen so the field reads as settled at ~3–4s.
  let logoActivity = 1.0
  const LOGO_HALF_LIFE = 1.0 // seconds

  function splat(x: number, y: number, dx: number, dy: number) {
    gl!.useProgram(splatP.program)
    setTexel(splatP.uniforms, velocity.texelX, velocity.texelY)
    gl!.uniform1i(splatP.uniforms.get('uTarget')!, velocity.read.attach(0))
    gl!.uniform1f(splatP.uniforms.get('uAspect')!, canvas.width / canvas.height)
    gl!.uniform2f(splatP.uniforms.get('uPoint')!, x, y)
    gl!.uniform3f(splatP.uniforms.get('uColor')!, dx, dy, 0)
    gl!.uniform1f(splatP.uniforms.get('uRadius')!, splatRadiusValue())
    blit(velocity.write)
    velocity.swap()

    gl!.useProgram(splatP.program)
    setTexel(splatP.uniforms, density.texelX, density.texelY)
    gl!.uniform1i(splatP.uniforms.get('uTarget')!, density.read.attach(0))
    gl!.uniform1f(splatP.uniforms.get('uAspect')!, canvas.width / canvas.height)
    gl!.uniform2f(splatP.uniforms.get('uPoint')!, x, y)
    // Dye intensity (greyscale = single channel R; we still send vec3 to reuse splat shader).
    gl!.uniform3f(splatP.uniforms.get('uColor')!, 1.0, 0.0, 0.0)
    gl!.uniform1f(splatP.uniforms.get('uRadius')!, splatRadiusValue())
    blit(density.write)
    density.swap()
  }

  function splatRadiusValue() {
    return cfg.splatRadius / 100.0
  }

  function applyPointers() {
    for (const p of pointers.values()) {
      if (p.moved) {
        p.moved = false
        const dx = p.dx * cfg.splatForce
        const dy = p.dy * cfg.splatForce
        splat(p.x, p.y, dx, dy)
        // Only real pointer activity inside the crest reactivates the warp.
        // Ambient splats do not — that's why this lives here, not in splat().
        const box = logoUvBox()
        if (
          Math.abs(p.x - box.cx) <= box.hx &&
          Math.abs(p.y - box.cy) <= box.hy
        ) {
          logoActivity = 1
        }
      }
    }
  }

  let last = performance.now()
  let raf = 0

  function step(dt: number) {
    // Curl
    gl!.useProgram(curlP.program)
    setTexel(curlP.uniforms, velocity.texelX, velocity.texelY)
    gl!.uniform1i(curlP.uniforms.get('uVelocity')!, velocity.read.attach(0))
    blit(curl)

    // Vorticity confinement
    gl!.useProgram(vortP.program)
    setTexel(vortP.uniforms, velocity.texelX, velocity.texelY)
    gl!.uniform1i(vortP.uniforms.get('uVelocity')!, velocity.read.attach(0))
    gl!.uniform1i(vortP.uniforms.get('uCurl')!, curl.attach(1))
    gl!.uniform1f(vortP.uniforms.get('uCurlStrength')!, cfg.curl)
    gl!.uniform1f(vortP.uniforms.get('uDt')!, dt)
    blit(velocity.write)
    velocity.swap()

    // Divergence
    gl!.useProgram(divP.program)
    setTexel(divP.uniforms, velocity.texelX, velocity.texelY)
    gl!.uniform1i(divP.uniforms.get('uVelocity')!, velocity.read.attach(0))
    blit(divergence)

    // Clear pressure (decay)
    gl!.useProgram(clearP.program)
    setTexel(clearP.uniforms, pressure.texelX, pressure.texelY)
    gl!.uniform1i(clearP.uniforms.get('uTarget')!, pressure.read.attach(0))
    gl!.uniform1f(clearP.uniforms.get('uValue')!, 0.8)
    blit(pressure.write)
    pressure.swap()

    // Pressure Jacobi
    gl!.useProgram(pressP.program)
    setTexel(pressP.uniforms, pressure.texelX, pressure.texelY)
    gl!.uniform1i(pressP.uniforms.get('uDivergence')!, divergence.attach(0))
    for (let i = 0; i < cfg.pressureIterations; i++) {
      gl!.uniform1i(pressP.uniforms.get('uPressure')!, pressure.read.attach(1))
      blit(pressure.write)
      pressure.swap()
    }

    // Gradient subtract
    gl!.useProgram(gradP.program)
    setTexel(gradP.uniforms, velocity.texelX, velocity.texelY)
    gl!.uniform1i(gradP.uniforms.get('uPressure')!, pressure.read.attach(0))
    gl!.uniform1i(gradP.uniforms.get('uVelocity')!, velocity.read.attach(1))
    blit(velocity.write)
    velocity.swap()

    // Advect velocity
    gl!.useProgram(advectP.program)
    setTexel(advectP.uniforms, velocity.texelX, velocity.texelY)
    gl!.uniform1i(advectP.uniforms.get('uVelocity')!, velocity.read.attach(0))
    gl!.uniform1i(advectP.uniforms.get('uSource')!, velocity.read.attach(0))
    gl!.uniform1f(advectP.uniforms.get('uDt')!, dt)
    gl!.uniform1f(advectP.uniforms.get('uDissipation')!, cfg.velocityDissipation)
    blit(velocity.write)
    velocity.swap()

    // Advect density
    setTexel(advectP.uniforms, density.texelX, density.texelY)
    gl!.uniform1i(advectP.uniforms.get('uVelocity')!, velocity.read.attach(0))
    gl!.uniform1i(advectP.uniforms.get('uSource')!, density.read.attach(1))
    gl!.uniform1f(advectP.uniforms.get('uDissipation')!, cfg.densityDissipation)
    blit(density.write)
    density.swap()
  }

  function render() {
    gl!.useProgram(displayP.program)
    gl!.uniform1i(displayP.uniforms.get('uDensity')!, density.read.attach(0))
    gl!.uniform1i(displayP.uniforms.get('uVelocity')!, velocity.read.attach(1))

    gl!.activeTexture(gl!.TEXTURE2)
    gl!.bindTexture(gl!.TEXTURE_2D, logoTex)
    gl!.uniform1i(displayP.uniforms.get('uLogo')!, 2)

    const box = logoUvBox()
    gl!.uniform2f(displayP.uniforms.get('uLogoCenter')!, box.cx, box.cy)
    gl!.uniform2f(displayP.uniforms.get('uLogoHalf')!, box.hx, box.hy)
    gl!.uniform1f(displayP.uniforms.get('uLogoEnabled')!, logoReady ? 1 : 0)
    gl!.uniform1f(
      displayP.uniforms.get('uDispStrength')!,
      cfg.logoDisplaceStrength * logoActivity,
    )
    blit(null)
  }

  function tick() {
    const now = performance.now()
    let dt = (now - last) / 1000
    if (dt > 0.0166) dt = 0.0166
    last = now
    resize()
    applyPointers()
    step(dt)
    logoActivity *= Math.exp(-dt / LOGO_HALF_LIFE)
    if (logoActivity < 0.001) logoActivity = 0
    render()
    raf = requestAnimationFrame(tick)
  }

  // Pointer wiring
  function getPointer(id: number) {
    let p = pointers.get(id)
    if (!p) {
      p = { id, x: 0.5, y: 0.5, dx: 0, dy: 0, down: false, moved: false }
      pointers.set(id, p)
    }
    return p
  }

  function correctDeltaX(delta: number) {
    const aspect = canvas.width / canvas.height
    return aspect < 1 ? delta * aspect : delta
  }
  function correctDeltaY(delta: number) {
    const aspect = canvas.width / canvas.height
    return aspect > 1 ? delta / aspect : delta
  }

  function onMove(e: PointerEvent) {
    const rect = canvas.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = 1 - (e.clientY - rect.top) / rect.height
    const p = getPointer(e.pointerId)
    p.dx = correctDeltaX(x - p.x)
    p.dy = correctDeltaY(y - p.y)
    p.x = x
    p.y = y
    p.moved = Math.abs(p.dx) > 0 || Math.abs(p.dy) > 0
  }
  function onDown(e: PointerEvent) {
    const p = getPointer(e.pointerId)
    p.down = true
    onMove(e)
  }
  function onUp(e: PointerEvent) {
    pointers.delete(e.pointerId)
  }

  window.addEventListener('pointermove', onMove, { passive: true })
  window.addEventListener('pointerdown', onDown, { passive: true })
  window.addEventListener('pointerup', onUp, { passive: true })
  window.addEventListener('pointercancel', onUp, { passive: true })

  // Idle ambient: gently breathe a couple of splats in until the user moves.
  // Keeps the page from looking dead on first paint.
  let ambient = 0
  let ambientId = window.setInterval(() => {
    if (pointers.size > 0) return
    ambient++
    if (ambient > 6) return
    const x = 0.35 + Math.random() * 0.3
    const y = 0.35 + Math.random() * 0.3
    splat(x, y, (Math.random() - 0.5) * 800, (Math.random() - 0.5) * 800)
  }, 900)

  raf = requestAnimationFrame(tick)

  return {
    resize,
    dispose() {
      cancelAnimationFrame(raf)
      window.clearInterval(ambientId)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('pointercancel', onUp)
      if (logoTex) gl!.deleteTexture(logoTex)
      logoTex = null
      const loseCtx = gl!.getExtension('WEBGL_lose_context')
      loseCtx?.loseContext()
    },
  }
}
