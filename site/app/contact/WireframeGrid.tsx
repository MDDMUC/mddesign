'use client'

import { useEffect, useRef } from 'react'

type Props = { className?: string }

// 3D lattice cube rendered as 1px CSS-pixel lines via Canvas 2D.
// Slow camera drift, depth-based opacity, reduced-motion freezes the frame.
export function WireframeGrid({ className }: Props) {
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    let animate = !mq.matches

    let raf = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = canvas!.clientWidth
      const h = canvas!.clientHeight
      canvas!.width = Math.max(2, Math.floor(w * dpr))
      canvas!.height = Math.max(2, Math.floor(h * dpr))
    }
    resize()

    const onResize = () => resize()
    window.addEventListener('resize', onResize)

    // ─ Lattice geometry ────────────────────────────────────────────────
    // N divisions per axis → (N+1)^3 vertices, ~3·N·(N+1)^2 edges.
    const N = 4
    const VERTS: Array<[number, number, number]> = []
    for (let z = 0; z <= N; z++) {
      for (let y = 0; y <= N; y++) {
        for (let x = 0; x <= N; x++) {
          VERTS.push([(x / N) * 2 - 1, (y / N) * 2 - 1, (z / N) * 2 - 1])
        }
      }
    }
    const idx = (x: number, y: number, z: number) =>
      z * (N + 1) * (N + 1) + y * (N + 1) + x

    const EDGES: Array<[number, number]> = []
    for (let z = 0; z <= N; z++) {
      for (let y = 0; y <= N; y++) {
        for (let x = 0; x < N; x++) EDGES.push([idx(x, y, z), idx(x + 1, y, z)])
      }
    }
    for (let z = 0; z <= N; z++) {
      for (let y = 0; y < N; y++) {
        for (let x = 0; x <= N; x++) EDGES.push([idx(x, y, z), idx(x, y + 1, z)])
      }
    }
    for (let z = 0; z < N; z++) {
      for (let y = 0; y <= N; y++) {
        for (let x = 0; x <= N; x++) EDGES.push([idx(x, y, z), idx(x, y, z + 1)])
      }
    }

    // ─ Reusable projection buffer ──────────────────────────────────────
    const proj = new Float32Array(VERTS.length * 3) // x, y, depth

    function projectAll(rotY: number, rotX: number, w: number, h: number) {
      const cy = Math.cos(rotY)
      const sy = Math.sin(rotY)
      const cx = Math.cos(rotX)
      const sx = Math.sin(rotX)
      // factor 1.2 → ~93% of min(viewport) — near top/bottom on desktop, still
      // fits horizontally on mobile portrait at the rotation extremes.
      const scale = Math.min(w, h) * 1.2
      const d = 3.6
      for (let i = 0; i < VERTS.length; i++) {
        const v = VERTS[i]
        const x0 = v[0]
        const y0 = v[1]
        const z0 = v[2]
        // Rotate around Y, then X.
        const x1 = cy * x0 + sy * z0
        const z1 = -sy * x0 + cy * z0
        const y2 = cx * y0 - sx * z1
        const z2 = sx * y0 + cx * z1
        const k = scale / (d + z2)
        const o = i * 3
        proj[o] = w * 0.5 + x1 * k
        proj[o + 1] = h * 0.5 + y2 * k
        proj[o + 2] = z2
      }
    }

    let t0 = performance.now()

    function draw() {
      const w = canvas!.width
      const h = canvas!.height
      ctx!.clearRect(0, 0, w, h)

      const now = performance.now()
      const t = (now - t0) / 1000
      const rotY = t * 0.08
      const rotX = -0.35 + Math.sin(t * 0.05) * 0.08

      projectAll(rotY, rotX, w, h)

      ctx!.lineWidth = dpr
      ctx!.strokeStyle = '#000'
      ctx!.lineCap = 'butt'

      for (let i = 0; i < EDGES.length; i++) {
        const [a, b] = EDGES[i]
        const ao = a * 3
        const bo = b * 3
        const depth = (proj[ao + 2] + proj[bo + 2]) * 0.5
        // Barely-there ink so the cube can fill the viewport without
        // competing with the form copy.
        let alpha = 0.05 - depth * 0.02
        if (alpha < 0.02) alpha = 0.02
        if (alpha > 0.08) alpha = 0.08
        ctx!.globalAlpha = alpha
        ctx!.beginPath()
        ctx!.moveTo(proj[ao], proj[ao + 1])
        ctx!.lineTo(proj[bo], proj[bo + 1])
        ctx!.stroke()
      }
      ctx!.globalAlpha = 1

      if (animate) raf = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      animate = false
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={ref} className={className} aria-hidden="true" />
}
