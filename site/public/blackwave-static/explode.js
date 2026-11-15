import * as THREE from "https://unpkg.com/three@0.170.0/build/three.module.js";

const D = Math.PI / 180;
const beats = [
  { t: 0, pos: [0.12, 0, 6.55], wire: 1, form: 0, spin: 0, seat: 1, weld: 0, wrap: 0, yaw: 0, boss: 0, beat: "01 · Blueprint", line: "The vessel, in a few lines." },
  { t: 0.1, pos: [0.12, 0, 6.55], wire: 1, form: 0, spin: 0, seat: 1, weld: 0, wrap: 0, yaw: 0, boss: 0, beat: "01 · Blueprint", line: "The vessel, in a few lines." },
  { t: 0.2, pos: [0.12, 0, 6.15], wire: 0, form: 0, spin: Math.PI * 6, seat: 1, weld: 0, wrap: 0, yaw: 0, boss: 0, beat: "02 · Spin-forming", line: "A disc of metal, set spinning." },
  { t: 0.3, pos: [0.12, 0, 6.15], wire: 0, form: 0, spin: Math.PI * 6, seat: 1, weld: 0, wrap: 0, yaw: 0, boss: 0, beat: "02 · Spin-forming", line: "A disc of metal, set spinning." },
  { t: 0.46, pos: [0.12, 0, 6.35], wire: 0, form: 1, spin: Math.PI * 6, seat: 1, weld: 0, wrap: 0, yaw: 0, boss: 0, beat: "02 · Spin-forming", line: "Formed into the vessel." },
  { t: 0.52, pos: [0.12, 0, 6.35], wire: 0, form: 1, spin: Math.PI * 6, seat: 1, weld: 0, wrap: 0, yaw: 0, boss: 0, beat: "02 · Spin-forming", line: "Formed into the vessel." },
  { t: 0.545, pos: [0.12, 0, 6.35], wire: 0, form: 1, spin: Math.PI * 6, seat: 0, weld: 0, wrap: 0, yaw: 0, boss: 0, beat: "03 · Welding", line: "The cylinder is welded on." },
  { t: 0.61, pos: [0.12, 0, 6.35], wire: 0, form: 1, spin: Math.PI * 6, seat: 1, weld: 0.2, wrap: 0, yaw: 0, boss: 0, beat: "03 · Welding", line: "The cylinder is welded on." },
  { t: 0.68, pos: [0.12, 0, 6.35], wire: 0, form: 1, spin: Math.PI * 6, seat: 1, weld: 1, wrap: 0, yaw: 0, boss: 0, beat: "03 · Welding", line: "The cylinder is welded on." },
  { t: 0.73, pos: [0.12, 0, 6.4], wire: 0, form: 1, spin: Math.PI * 6, seat: 1, weld: 1, wrap: 0, yaw: 0, boss: 1, beat: "04 · Winding", line: "The first strand is set." },
  { t: 0.9, pos: [0.12, 0, 6.4], wire: 0, form: 1, spin: Math.PI * 6, seat: 1, weld: 1, wrap: 1, yaw: 0, boss: 1, beat: "04 · Winding", line: "One strand after another." },
  { t: 0.94, pos: [0.12, 0, 6.5], wire: 0, form: 1, spin: Math.PI * 6, seat: 1, weld: 1, wrap: 1, yaw: 0, boss: 1, beat: "05 · Together", line: "All of it, together." },
  { t: 1, pos: [0.12, 0, 6.55], wire: 0, form: 1, spin: Math.PI * 6, seat: 1, weld: 1, wrap: 1, yaw: 16 * D, boss: 1, beat: "05 · Together", line: "All of it, together." }
];

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const canvas = document.getElementById("view");
const beatEl = document.getElementById("beat");
const lineEl = document.getElementById("line");

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.08;

const scene = new THREE.Scene();
scene.background = new THREE.Color("#010101");
const camera = new THREE.PerspectiveCamera(32, window.innerWidth / window.innerHeight, 0.1, 40);

scene.add(new THREE.AmbientLight("#ffffff", 0.4));
const key = new THREE.DirectionalLight("#ffffff", 2.4);
key.position.set(3, 5, 6);
scene.add(key);
const rim = new THREE.DirectionalLight("#d8d8d4", 0.55);
rim.position.set(-4, 1, -2);
scene.add(rim);

const R = 0.52;
const BODY = 1.85;

function loadTow(url) {
  const tex = new THREE.TextureLoader().load(url);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(1, 1);
  tex.anisotropy = 8;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

const towBottom = loadTow("assets/carbon-bottom.png?v=17");
const towTop = loadTow("assets/carbon-top.png?v=18");

function shellMaterial(map) {
  return new THREE.MeshPhysicalMaterial({
    color: "#cfcfcf",
    map,
    metalness: 0.08,
    roughness: 0.48,
    clearcoat: 0.22,
    clearcoatRoughness: 0.4
  });
}

const lineMat = new THREE.LineBasicMaterial({ color: "#ffffff", transparent: true });

function lineOf(points) {
  return new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), lineMat);
}

function buildDrawing() {
  const g = new THREE.Group();
  const r = R;
  const half = BODY / 2;
  const outline = [];
  for (let s = 0; s <= 18; s++) {
    const t = -Math.PI / 2 + (s / 18) * Math.PI;
    outline.push(new THREE.Vector3(-half - Math.cos(t) * r, Math.sin(t) * r, 0));
  }
  outline.push(new THREE.Vector3(half, r, 0));
  for (let s = 0; s <= 18; s++) {
    const t = Math.PI / 2 - (s / 18) * Math.PI;
    outline.push(new THREE.Vector3(half + Math.cos(t) * r, Math.sin(t) * r, 0));
  }
  outline.push(new THREE.Vector3(-half, -r, 0));
  g.add(lineOf(outline));
  g.add(lineOf([
    new THREE.Vector3(-half, r, 0.02),
    new THREE.Vector3(-half, -r, 0.02)
  ]));
  g.add(lineOf([
    new THREE.Vector3(half, r, 0.02),
    new THREE.Vector3(half, -r, 0.02)
  ]));
  for (const u of [0.5]) {
    const x = -half + BODY * u;
    const pts = [];
    for (let s = 0; s <= 36; s++) {
      const a = (s / 36) * Math.PI * 2;
      pts.push(new THREE.Vector3(x, Math.cos(a) * r, Math.sin(a) * r));
    }
    g.add(lineOf(pts));
  }
  function domeRings(sign) {
    for (const t of [0.28, 0.48, 0.66, 0.82]) {
      const rr = Math.cos(t) * r;
      const x = sign > 0 ? half + Math.sin(t) * r : -half - Math.sin(t) * r;
      const pts = [];
      for (let s = 0; s <= 22; s++) {
        const a = (s / 22) * Math.PI;
        pts.push(new THREE.Vector3(x, Math.cos(a) * rr, Math.sin(a) * rr));
      }
      g.add(lineOf(pts));
    }
  }
  domeRings(-1);
  domeRings(1);
  for (let i = 1; i <= 5; i++) {
    const a = (i / 6) * Math.PI;
    const pts = [];
    for (let s = 0; s <= 10; s++) {
      const t = (s / 10) * (Math.PI / 2);
      const rr = Math.sin(t) * r;
      pts.push(new THREE.Vector3(-half - Math.cos(t) * r, Math.cos(a) * rr, Math.sin(a) * rr));
    }
    pts.push(new THREE.Vector3(half, Math.cos(a) * r, Math.sin(a) * r));
    for (let s = 1; s <= 10; s++) {
      const t = (s / 10) * (Math.PI / 2);
      const rr = Math.cos(t) * r;
      pts.push(new THREE.Vector3(half + Math.sin(t) * r, Math.cos(a) * rr, Math.sin(a) * rr));
    }
    g.add(lineOf(pts));
  }
  const neck = half + r * 0.35;
  g.add(lineOf([
    new THREE.Vector3(neck, 0.09, 0.04),
    new THREE.Vector3(neck + 0.32, 0.09, 0.04),
    new THREE.Vector3(neck + 0.32, -0.09, 0.04),
    new THREE.Vector3(neck, -0.09, 0.04)
  ]));
  return g;
}

const linerMat = new THREE.MeshStandardMaterial({
  color: "#c4c4be",
  metalness: 0.78,
  roughness: 0.3
});
const helicalMat = shellMaterial(towBottom);
const topMat = shellMaterial(towTop);
topMat.transparent = true;
topMat.depthWrite = false;
topMat.alphaTest = 0.15;
const grayMat = new THREE.MeshStandardMaterial({
  color: "#7a7a7a",
  metalness: 0.45,
  roughness: 0.42,
  side: THREE.DoubleSide
});
const wrapUniform = { value: 0 };

// Straps are 45° in the texture. Bottom runs one way (across = px - py, pitch 96).
// Top runs the other way, every third strap (across = px + py, pitch 288).
// Reveal grows along the strap, then steps to the next parallel strap.
function addWrap(material, layer) {
  const layerU = { value: layer };
  const signU = { value: layer === 0 ? -1 : 1 };
  const pitchU = { value: layer === 0 ? 96 : 288 };
  const countU = { value: layer === 0 ? 33 : 11 };
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uWrap = wrapUniform;
    shader.uniforms.uLayer = layerU;
    shader.uniforms.uSign = signU;
    shader.uniforms.uPitch = pitchU;
    shader.uniforms.uCount = countU;
    shader.fragmentShader = shader.fragmentShader
      .replace("#include <common>", `#include <common>
uniform float uWrap;
uniform float uLayer;
uniform float uSign;
uniform float uPitch;
uniform float uCount;
`)
      .replace("#include <dithering_fragment>", `
        float px = vMapUv.x * 2048.0;
        float py = vMapUv.y * 1024.0;
        float across = px + uSign * py;
        float shift = uSign < 0.0 ? 1024.0 : 0.0;
        float band = floor((across + shift) / uPitch);

        float start = uLayer > 0.5 ? 0.7 : 0.0;
        float span = uLayer > 0.5 ? 0.3 : 0.7;
        float local = clamp((uWrap - start) / span, 0.0, 1.0);
        if (local <= 0.0001) discard;

        float head = local * uCount;
        float idx = head >= uCount - 0.0001 ? uCount : floor(head);
        float origin = uLayer > 0.5 ? 2.0 : 15.0;
        float ordered = mod(band - origin + uCount, uCount);
        if (ordered > idx) discard;
        #include <dithering_fragment>
      `);
  };
  const previous = material.customProgramCacheKey;
  material.customProgramCacheKey = () => (previous ? previous.call(material) : "") + "-strand7-" + layer;
}

addWrap(helicalMat, 0);
addWrap(topMat, 1);
const bossMat = new THREE.MeshStandardMaterial({
  color: "#e4e4de",
  metalness: 0.92,
  roughness: 0.18
});


function woundShell(radius, length, material) {
  const around = 96;
  const domeSteps = 28;
  const bodySteps = 40;
  const total = domeSteps * 2 + bodySteps;
  const half = length / 2;
  const positions = [];
  const uvs = [];
  const indices = [];
  const rings = [];
  function addRing(x, rad, v) {
    const start = positions.length / 3;
    for (let i = 0; i <= around; i++) {
      const a = (i / around) * Math.PI * 2 + Math.PI;
      positions.push(x, Math.cos(a) * rad, Math.sin(a) * rad);
      uvs.push(i / around, v);
    }
    rings.push(start);
  }
  for (let s = 0; s <= domeSteps; s++) {
    const t = (s / domeSteps) * (Math.PI / 2);
    addRing(-half - Math.cos(t) * radius, Math.max(Math.sin(t) * radius, 0.001), s / total);
  }
  for (let s = 1; s <= bodySteps; s++) {
    addRing(-half + (s / bodySteps) * length, radius, (domeSteps + s) / total);
  }
  for (let s = 1; s <= domeSteps; s++) {
    const t = (s / domeSteps) * (Math.PI / 2);
    addRing(half + Math.sin(t) * radius, Math.max(Math.cos(t) * radius, 0.001), (domeSteps + bodySteps + s) / total);
  }
  for (let r = 0; r < rings.length - 1; r++) {
    const a = rings[r];
    const b = rings[r + 1];
    for (let i = 0; i < around; i++) {
      indices.push(a + i, a + i + 1, b + i, a + i + 1, b + i + 1, b + i);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return new THREE.Mesh(geo, material);
}

function bottle(radius, length, material) {
  const group = new THREE.Group();
  const body = new THREE.Mesh(
    new THREE.CylinderGeometry(radius, radius, length, 80, 1, true),
    material
  );
  body.rotation.z = Math.PI / 2;
  const hemi = new THREE.SphereGeometry(radius, 56, 28, 0, Math.PI * 2, 0, Math.PI / 2);
  const left = new THREE.Mesh(hemi, material);
  left.rotation.z = Math.PI / 2;
  left.position.x = -length / 2;
  const right = new THREE.Mesh(hemi, material);
  right.rotation.z = -Math.PI / 2;
  right.position.x = length / 2;
  group.add(body, left, right);
  return group;
}

function port(material) {
  const group = new THREE.Group();
  const flange = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.05, 40), material);
  flange.rotation.z = Math.PI / 2;
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.26, 32), material);
  neck.rotation.z = Math.PI / 2;
  neck.position.x = 0.14;
  group.add(flange, neck);
  return group;
}

const root = new THREE.Group();
scene.add(root);

const liner = bottle(R * 0.86, BODY * 0.92, linerMat);
const shell = new THREE.Group();
const gray = woundShell(R * 0.99, BODY, grayMat);
const helical = woundShell(R, BODY, helicalMat);
const helicalTop = woundShell(R * 1.012, BODY * 1.004, topMat);
gray.renderOrder = 0;
helical.renderOrder = 1;
helicalTop.renderOrder = 2;
helical.material.depthWrite = false;
shell.add(gray, helical, helicalTop);
const bossHome = BODY / 2 + R * 0.72;
const boss = port(bossMat);
boss.position.x = bossHome;
const drawing = buildDrawing();

const formedPos = gray.geometry.attributes.position.array.slice();
const discPos = new Float32Array(formedPos.length);
for (let i = 0; i < formedPos.length; i += 3) {
  const y = formedPos[i + 1];
  const z = formedPos[i + 2];
  const a = Math.atan2(z, y);
  const rad = Math.max(Math.hypot(y, z) * 1.7, 0.004);
  discPos[i] = Math.cos(a) * rad;
  discPos[i + 1] = Math.sin(a) * rad;
  discPos[i + 2] = 0;
}

const markMat = new THREE.MeshStandardMaterial({
  color: "#d4d4ce",
  metalness: 0.9,
  roughness: 0.22,
  transparent: true
});
const mark = new THREE.Mesh(new THREE.BoxGeometry(R * 2.9, 0.016, 0.018), markMat);
mark.position.z = 0.03;
const blankRim = new THREE.Mesh(new THREE.TorusGeometry(R * 1.69, 0.012, 8, 96), markMat);
function cutFace(facing) {
  const cap = new THREE.Mesh(new THREE.CircleGeometry(R * 0.99, 56), grayMat);
  cap.rotation.y = facing;
  return cap;
}
function halfTube(sign) {
  const length = BODY / 2;
  const geo = new THREE.CylinderGeometry(R * 0.99, R * 0.99, length, 64, 1, true);
  geo.rotateZ(Math.PI / 2);
  const mesh = new THREE.Mesh(geo, grayMat);
  mesh.position.x = sign * length / 2;
  return mesh;
}
const leftDome = new THREE.Mesh(
  new THREE.SphereGeometry(R * 0.99, 56, 28, 0, Math.PI * 2, 0, Math.PI / 2),
  grayMat
);
leftDome.rotation.z = Math.PI / 2;
leftDome.position.x = -BODY / 2;
const rightDome = new THREE.Mesh(
  new THREE.SphereGeometry(R * 0.99, 56, 28, 0, Math.PI * 2, 0, Math.PI / 2),
  grayMat
);
rightDome.rotation.z = -Math.PI / 2;
rightDome.position.x = BODY / 2;
const leftTube = halfTube(-1);
const rightTube = halfTube(1);
const leftCap = cutFace(-Math.PI / 2);
const rightCap = cutFace(Math.PI / 2);
const cylinderSide = new THREE.Group();
cylinderSide.add(rightTube, rightDome, rightCap);
const vesselSide = new THREE.Group();
vesselSide.add(leftDome, leftTube, leftCap);
const parts = new THREE.Group();
parts.add(vesselSide, cylinderSide);
parts.visible = false;
root.add(liner, shell, parts, mark, blankRim);

function seamLine(x) {
  const pts = [];
  for (let i = 0; i <= 96; i++) {
    const a = (i / 96) * Math.PI * 2;
    pts.push(new THREE.Vector3(x, Math.cos(a) * R * 1.008, Math.sin(a) * R * 1.008));
  }
  const line = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(pts),
    new THREE.LineBasicMaterial({ color: "#fff4e6", transparent: true, opacity: 0 })
  );
  line.geometry.setDrawRange(0, 0);
  return line;
}
const seamA = seamLine(-BODY / 2);
const seamB = seamLine(BODY / 2);
const laserMat = new THREE.MeshBasicMaterial({ color: "#fff8f0" });
const laserA = new THREE.Mesh(new THREE.SphereGeometry(0.032, 16, 12), laserMat);
const laserB = new THREE.Mesh(new THREE.SphereGeometry(0.032, 16, 12), laserMat);
const weldLight = new THREE.PointLight("#fff1df", 0, 1.8);
root.add(seamA, seamB, laserA, laserB, weldLight, boss, drawing);

function shapeMetal(form, spin, seat) {
  const pos = gray.geometry.attributes.position.array;
  const c = Math.cos(spin);
  const s = Math.sin(spin);
  for (let i = 0; i < pos.length; i += 3) {
    const dx = discPos[i] * c - discPos[i + 1] * s;
    const dy = discPos[i] * s + discPos[i + 1] * c;
    pos[i] = dx + (formedPos[i] - dx) * form;
    pos[i + 1] = dy + (formedPos[i + 1] - dy) * form;
    pos[i + 2] = discPos[i + 2] + (formedPos[i + 2] - discPos[i + 2]) * form;
  }
  gray.geometry.attributes.position.needsUpdate = true;
  gray.geometry.computeVertexNormals();
  if (form < 0.5) {
    const n = gray.geometry.attributes.normal.array;
    const k = 1 - form / 0.5;
    for (let i = 0; i < n.length; i += 3) {
      n[i] *= 1 - k;
      n[i + 1] *= 1 - k;
      n[i + 2] = n[i + 2] * (1 - k) + k;
    }
  }
  gray.geometry.attributes.normal.needsUpdate = true;
  gray.geometry.computeBoundingSphere();
}

function smooth(u) {
  return u * u * (3 - 2 * u);
}

const mixKeys = ["wire", "form", "spin", "seat", "weld", "wrap", "yaw", "boss"];
const linearKeys = { spin: 1, wrap: 1, weld: 1, seat: 1 };

function poseAt(t) {
  if (t <= beats[0].t) return { ...beats[0], pos: beats[0].pos.slice() };
  const last = beats[beats.length - 1];
  if (t >= last.t) return { ...last, pos: last.pos.slice() };
  for (let i = 0; i < beats.length - 1; i++) {
    const a = beats[i];
    const b = beats[i + 1];
    if (t < a.t || t > b.t) continue;
    const raw = (t - a.t) / (b.t - a.t);
    const u = smooth(raw);
    const state = {
      pos: a.pos.map((v, k) => v + (b.pos[k] - v) * u),
      beat: raw < 0.55 ? a.beat : b.beat,
      line: raw < 0.55 ? a.line : b.line
    };
    for (let k = 0; k < mixKeys.length; k++) {
      const key = mixKeys[k];
      const f = linearKeys[key] ? raw : u;
      state[key] = a[key] + (b[key] - a[key]) * f;
    }
    return state;
  }
  return { ...beats[0], pos: beats[0].pos.slice() };
}

function progress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (max <= 0) return 0;
  return Math.min(1, Math.max(0, window.scrollY / max));
}

function apply(state) {
  const blueprint = state.wire > 0.985;
  lineMat.opacity = state.wire;
  drawing.visible = state.wire > 0.02;
  liner.visible = false;
  const metal = 1 - state.wire;
  const formed = state.form > 0.992;
  gray.visible = !formed && metal > 0.02;
  parts.visible = formed && metal > 0.02;
  const gap = formed ? (1 - state.seat) * 0.78 : 0;
  cylinderSide.position.x = gap;
  leftCap.visible = rightCap.visible = gap > 0.03;
  grayMat.opacity = metal;
  grayMat.transparent = state.wire > 0.02;
  grayMat.depthWrite = state.wire <= 0.02;
  grayMat.metalness = 0.38;
  grayMat.roughness = 0.46;
  shapeMetal(state.form, state.spin, state.seat);

  const showBlank = state.form < 0.28 && metal > 0.08;
  mark.visible = blankRim.visible = showBlank;
  mark.rotation.z = blankRim.rotation.z = state.spin;
  markMat.opacity = metal * Math.max(0, 1 - state.form / 0.28);

  const welding = state.weld > 0.001 && state.weld < 0.999;
  const hot = welding ? 1 : 0;
  laserA.visible = laserB.visible = hot > 0;
  const ang = state.weld * Math.PI * 2;
  laserA.position.set(gap, Math.cos(ang) * R * 1.02, Math.sin(ang) * R * 1.02);
  laserB.position.set(BODY / 2 + gap, Math.cos(ang + Math.PI) * R * 1.02, Math.sin(ang + Math.PI) * R * 1.02);
  weldLight.intensity = hot * 7;
  weldLight.position.copy(laserA.position);
  const count = Math.max(0, Math.min(97, Math.ceil(state.weld * 97)));
  seamA.geometry.setDrawRange(0, count);
  seamB.geometry.setDrawRange(0, count);
  seamB.position.x = gap;
  seamA.material.opacity = seamB.material.opacity = state.seat > 0.98 ? hot * 0.95 : 0;

  boss.visible = state.boss > 0.04 && !blueprint;
  bossMat.opacity = state.boss * metal;
  bossMat.transparent = state.boss < 0.98 || state.wire > 0.02;
  bossMat.depthWrite = state.boss > 0.98 && state.wire <= 0.02;

  helical.visible = helicalTop.visible = !blueprint && state.form > 0.98 && state.seat > 0.98 && state.wrap > 0.001;
  wrapUniform.value = state.wrap;
  root.rotation.y = state.yaw;
  camera.position.set(state.pos[0], state.pos[1], state.pos[2]);
  camera.lookAt(0.12, 0, 0);
  beatEl.textContent = state.beat;
  lineEl.textContent = state.line;
}

linerMat.transparent = helicalMat.transparent = topMat.transparent = bossMat.transparent = grayMat.transparent = true;

function frame() {
  const state = reduced
    ? { pos: [0.12, 0, 6.5], wire: 0, form: 1, spin: 0, seat: 1, weld: 1, wrap: 1, yaw: 0, boss: 1, beat: "05 · Together", line: "All of it, together." }
    : poseAt(progress());
  apply(state);
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

frame();
