import * as THREE from "three";
import { GLTFLoader } from "https://unpkg.com/three@0.170.0/examples/jsm/loaders/GLTFLoader.js";
import { landRings } from "./assets/land.js";

const D = Math.PI / 180;
// End-on yaw. 45° of this turn is the three-quarter view; the section rings sit as a circle at 90°.
const endOn = Math.PI / 2;
// Winding spin leans about 10° off vertical. A full turn around this axis lands on the start pose.
const windAxis = new THREE.Vector3(0.14, 1, 0.11).normalize();
const beats = [
  { t: 0, pos: [0.12, 0, 7.1], wire: 1, face: 0, form: 0, spin: 0, seat: 1, spread: 0, vshow: 0, vseat: 0, weld: 0, wrap: 0, yaw: 0, boss: 0, beat: "01 · Blueprint", line: "The vessel, in a few lines." },
  { t: 0.01188, pos: [0.12, 0, 7.1], wire: 1, face: 0, form: 0, spin: 0, seat: 1, spread: 0, vshow: 0, vseat: 0, weld: 0, wrap: 0, yaw: 0, boss: 0, beat: "01 · Blueprint", line: "The vessel, in a few lines." },
  { t: 0.08907, pos: [0.12, 0, 6.7], wire: 1, face: endOn, form: 0, spin: 0, seat: 1, spread: 0, vshow: 0, vseat: 0, weld: 0, wrap: 0, yaw: 0, boss: 0, beat: "01 · Blueprint", line: "A circle of lines." },
  { t: 0.12371, pos: [0.12, 0, 6.7], wire: 1, face: endOn, form: 0, spin: Math.PI, seat: 1, spread: 0, vshow: 0, vseat: 0, weld: 0, wrap: 0, yaw: 0, boss: 0, beat: "01 · Blueprint", line: "A circle of lines." },
  { t: 0.15835, pos: [0.12, 0, 6.7], wire: 0, face: endOn, form: 0, spin: Math.PI * 2, seat: 1, spread: 0, vshow: 0, vseat: 0, weld: 0, wrap: 0, yaw: 0, boss: 0, beat: "02 · Spin-forming", line: "A disc of metal, set spinning." },
  { t: 0.1826, pos: [0.12, 0, 6.7], wire: 0, face: endOn, form: 0, spin: Math.PI * 4, seat: 1, spread: 0, vshow: 0, vseat: 0, weld: 0, wrap: 0, yaw: 0, boss: 0, beat: "02 · Spin-forming", line: "A disc of metal, set spinning." },
  { t: 0.20684, pos: [0.12, 0, 6.7], wire: 0, face: endOn, form: 0, spin: Math.PI * 6, seat: 1, spread: 0, vshow: 0, vseat: 0, weld: 0, wrap: 0, yaw: 0, boss: 0, beat: "02 · Spin-forming", line: "A disc of metal, set spinning." },
  { t: 0.41368, pos: [0.12, 0, 6.9], wire: 0, face: endOn, form: 1, spin: Math.PI * 6, seat: 1, spread: 1, vshow: 0, vseat: 0, weld: 0, wrap: 0, yaw: 0, boss: 0, beat: "02 · Spin-forming", line: "Formed into two halves." },
  { t: 0.47306, pos: [0.12, 0, 6.9], wire: 0, face: endOn, form: 1, spin: Math.PI * 6, seat: 1, spread: 1, vshow: 0, vseat: 0, weld: 0, wrap: 0, yaw: 0, boss: 0, beat: "02 · Spin-forming", line: "Formed into two halves." },
  { t: 0.57202, pos: [0.12, 0, 7.4], wire: 0, face: endOn, form: 1, spin: Math.PI * 6, seat: 1, spread: 1, vshow: 1, vseat: 0, weld: 0, wrap: 0, yaw: 0, boss: 0, beat: "03 · Welding", line: "The cylinders come in." },
  { t: 0.69078, pos: [0.12, 0, 7.15], wire: 0, face: endOn, form: 1, spin: Math.PI * 6, seat: 1, spread: 0, vshow: 1, vseat: 1, weld: 0, wrap: 0, yaw: 0, boss: 0, beat: "03 · Welding", line: "The joints are welded." },
  { t: 0.78974, pos: [0.12, 0, 7.15], wire: 0, face: endOn, form: 1, spin: Math.PI * 6, seat: 1, spread: 0, vshow: 1, vseat: 1, weld: 1, wrap: 0, yaw: 0, boss: 0, beat: "03 · Welding", line: "The joints are welded." },
  { t: 0.79609, pos: [0.12, 0, 6.9], wire: 0, face: endOn, form: 1, spin: Math.PI * 6, seat: 1, spread: 0, vshow: 1, vseat: 1, weld: 1, wrap: 0, yaw: 0, boss: 1, beat: "04 · Winding", line: "The first strand is set." },
  { t: 0.88247, pos: [0.12, 0, 6.05], wire: 0, face: endOn, form: 1, spin: Math.PI * 6, seat: 1, spread: 0, vshow: 1, vseat: 1, weld: 1, wrap: 0.3, yaw: 0, boss: 1, beat: "04 · Winding", line: "One strand after another." },
  { t: 0.91949, pos: [0.12, 0, 6.05], wire: 0, face: endOn, form: 1, spin: Math.PI * 6, seat: 1, spread: 0, vshow: 1, vseat: 1, weld: 1, wrap: 0.7, yaw: Math.PI * 8 / 7, boss: 1, beat: "04 · Winding", line: "One strand after another." },
  { t: 0.94363, pos: [0.12, 0, 6.05], wire: 0, face: endOn, form: 1, spin: Math.PI * 6, seat: 1, spread: 0, vshow: 1, vseat: 1, weld: 1, wrap: 1, yaw: Math.PI * 2, boss: 1, beat: "04 · Winding", line: "One strand after another." },
  { t: 0.95844, pos: [0.12, 0, 7.1], wire: 0, face: endOn, form: 1, spin: Math.PI * 6, seat: 1, spread: 0, vshow: 1, vseat: 1, weld: 1, wrap: 1, yaw: Math.PI * 2, boss: 1, beat: "05 · Together", line: "All of it, together." }
];

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const canvas = document.getElementById("view");
const beatEl = document.getElementById("beat");
const lineEl = document.getElementById("line");

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.localClippingEnabled = true;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.08;

const scene = new THREE.Scene();
const bgCanvas = document.createElement("canvas");
const bgCtx = bgCanvas.getContext("2d");
const bgTex = new THREE.CanvasTexture(bgCanvas);
bgTex.colorSpace = THREE.SRGBColorSpace;
scene.background = bgTex;
let bgGlow = -1;
let bgDrop = -1;
let bgShift = -1;
let bgWash = -1;

function paintBackground(glow, drop, shift, wash) {
  const nudge = shift || 0;
  const white = wash || 0;
  const aspect = Math.max(0.5, window.innerWidth / Math.max(1, window.innerHeight));
  const w = 1280;
  const h = Math.max(2, Math.round(w / aspect));
  if (bgCanvas.width !== w || bgCanvas.height !== h) {
    bgCanvas.width = w;
    bgCanvas.height = h;
    bgGlow = -1;
    bgDrop = -1;
    bgShift = -1;
  }
  if (Math.abs(glow - bgGlow) < 0.004 && Math.abs(drop - bgDrop) < 0.01 && Math.abs(nudge - bgShift) < 0.004 && Math.abs((arguments[3] || 0) - bgWash) < 0.004) return;
  bgGlow = glow;
  bgDrop = drop;
  bgShift = nudge;
  bgWash = white;
  const g = bgCtx;
  g.globalAlpha = 1;
  g.fillStyle = "#010101";
  g.fillRect(0, 0, w, h);
  if (glow > 0.001) {
    const cx = w * 0.5;
    const floorY = h * (0.66 + 0.07 * drop + nudge);
    g.save();
    g.globalAlpha = glow;
    g.translate(cx, floorY);
    g.scale(1, 0.16);
    const floor = g.createRadialGradient(0, 0, w * 0.02, 0, 0, w * 0.36);
    floor.addColorStop(0, "#3e3e3e");
    floor.addColorStop(0.42, "#1a1a1a");
    floor.addColorStop(0.78, "#090909");
    floor.addColorStop(1, "#010101");
    g.fillStyle = floor;
    g.beginPath();
    g.arc(0, 0, w * 0.36, 0, Math.PI * 2);
    g.fill();
    g.restore();
    // Wall wash sits on the floor oval and stops on the oval's horizontal center.
    g.save();
    g.beginPath();
    g.rect(0, 0, w, floorY);
    g.clip();
    g.globalAlpha = glow;
    const cy = h * (0.46 + 0.07 * drop + nudge);
    const pool = g.createRadialGradient(cx, cy, w * 0.04, cx, cy, w * 0.46);
    pool.addColorStop(0, "rgba(69,69,69,0.5)");
    pool.addColorStop(0.32, "rgba(42,42,42,0.35)");
    pool.addColorStop(0.68, "rgba(18,18,18,0.14)");
    pool.addColorStop(1, "rgba(1,1,1,0)");
    g.fillStyle = pool;
    g.fillRect(0, 0, w, floorY);
    g.restore();
    g.globalAlpha = 1;
  }
  if (white > 0.001) {
    g.globalAlpha = white;
    g.fillStyle = "#ffffff";
    g.fillRect(0, 0, w, h);
    g.globalAlpha = 1;
  }
  bgTex.needsUpdate = true;
}
const camera = new THREE.PerspectiveCamera(32, window.innerWidth / window.innerHeight, 0.1, 40);

scene.add(new THREE.AmbientLight("#ffffff", 0.4));
const key = new THREE.DirectionalLight("#ffffff", 2.4);
key.position.set(3, 5, 6);
scene.add(key);
const rim = new THREE.DirectionalLight("#d8d8d4", 0.55);
const backFill = new THREE.DirectionalLight("#ffffff", 0);
backFill.position.set(-4, 3, -6);
rim.position.set(-4, 1, -2);
scene.add(rim);
scene.add(backFill);

const R = 0.52;
const BODY = 1.815;
const BOSS = 0.2;

function loadTow(url) {
  const tex = new THREE.TextureLoader().load(url);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(1, 1);
  tex.anisotropy = 8;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

const towBottom = loadTow("assets/carbon-bottom.png?v=20");
const towTop = loadTow("assets/carbon-top.png?v=20");

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
      for (let s = 0; s <= 44; s++) {
        const a = (s / 44) * Math.PI * 2;
        pts.push(new THREE.Vector3(x, Math.cos(a) * rr, Math.sin(a) * rr));
      }
      g.add(lineOf(pts));
    }
  }
  domeRings(-1);
  domeRings(1);
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
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
  const ports = new THREE.Group();
  function portLines(sign) {
    const crown = sign * (half + r);
    const tip = crown + sign * BOSS;
    const h = 0.1;
    ports.add(lineOf([
      new THREE.Vector3(crown, h, 0.04),
      new THREE.Vector3(tip, h, 0.04),
      new THREE.Vector3(tip, -h, 0.04),
      new THREE.Vector3(crown, -h, 0.04)
    ]));
  }
  portLines(1);
  portLines(-1);
  g.add(ports);
  g.userData.ports = ports;
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
const valveCut = { value: 100 };

// Straps are 45° in the texture. Bottom runs one way (across = px - py, pitch 64).
// Top runs the other way, every third strap (across = px + py, pitch 192).
// 1.5× the previous strap count. Each strap is 15% narrower. Reveal still steps strap by strap.
function addWrap(material, layer) {
  const layerU = { value: layer };
  const signU = { value: layer === 0 ? -1 : 1 };
  const pitchU = { value: layer === 0 ? 64 : 192 };
  const countU = { value: layer === 0 ? 48 : 16 };
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uWrap = wrapUniform;
    shader.uniforms.uLayer = layerU;
    shader.uniforms.uSign = signU;
    shader.uniforms.uPitch = pitchU;
    shader.uniforms.uCount = countU;
    shader.uniforms.uValve = valveCut;
    shader.vertexShader = shader.vertexShader
      .replace("#include <common>", "#include <common>\nvarying float vValveX;\n")
      .replace("#include <begin_vertex>", "#include <begin_vertex>\n vValveX = position.x;\n");
    shader.fragmentShader = shader.fragmentShader
      .replace("#include <common>", `#include <common>
uniform float uWrap;
uniform float uLayer;
uniform float uSign;
uniform float uPitch;
uniform float uCount;
uniform float uValve;
varying float vValveX;
`)
      .replace("#include <dithering_fragment>", `
        if (abs(vValveX) > uValve) discard;
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
        float origin = uLayer > 0.5 ? 3.0 : 22.0;
        float ordered = mod(band - origin + uCount, uCount);
        if (ordered > idx) discard;
        if (uLayer < 0.5 && ordered == idx && idx < uCount) {
          float alongRaw = px - uSign * py;
          float aCenter = (band + 0.5) * uPitch - shift;
          float sMin = abs(aCenter);
          float sMax = min(4096.0 - aCenter, 2048.0 + aCenter);
          float sU = clamp((alongRaw - sMin) / max(sMax - sMin, 1.0), 0.0, 1.0);
          if (sU > head - idx) discard;
        }
        #include <dithering_fragment>
      `);
  };
  const previous = material.customProgramCacheKey;
  material.customProgramCacheKey = () => (previous ? previous.call(material) : "") + "-strand10-" + layer;
}

addWrap(helicalMat, 0);
addWrap(topMat, 1);
const silverMat = new THREE.MeshStandardMaterial({
  color: "#e6e6e1",
  metalness: 0.94,
  roughness: 0.2,
  side: THREE.DoubleSide
});
const bossMat = new THREE.MeshStandardMaterial({
  color: "#e6e6e1",
  metalness: 0.94,
  roughness: 0.2
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
helical.material.polygonOffset = true;
helical.material.polygonOffsetFactor = -2;
helical.material.polygonOffsetUnits = -2;
topMat.polygonOffset = true;
topMat.polygonOffsetFactor = -3;
topMat.polygonOffsetUnits = -3;
shell.add(gray, helical, helicalTop);
const bossHome = BODY / 2 + R * 0.72;
const boss = port(bossMat);
boss.position.x = bossHome;
const drawing = buildDrawing();
const drawingTurn = new THREE.Group();
const drawingFlat = new THREE.Group();
drawingTurn.add(drawing);
drawingFlat.add(drawingTurn);
const drawingSpin = new THREE.Group();
const hubMat = new THREE.MeshBasicMaterial({ color: "#ffffff", transparent: true });
const hub = new THREE.Mesh(new THREE.BoxGeometry(R * 2.9, 0.016, 0.018), hubMat);
hub.position.z = 0.05;
drawingSpin.add(drawingFlat, hub);
const drawingAlign = new THREE.Group();
drawingAlign.add(drawingSpin);

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
gray.frustumCulled = false;
const sideAttr = new Float32Array(formedPos.length / 3);
for (let i = 0; i < sideAttr.length; i++) sideAttr[i] = formedPos[i * 3] >= 0 ? 1 : -1;
gray.geometry.setAttribute("aSide", new THREE.BufferAttribute(sideAttr, 1));

function halfMat(keep) {
  const mat = grayMat.clone();
  mat.customProgramCacheKey = () => "form-half-" + keep;
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uKeep = { value: keep };
    shader.vertexShader = shader.vertexShader
      .replace("#include <common>", "#include <common>\nattribute float aSide;\nvarying float vSide;\n")
      .replace("#include <begin_vertex>", "#include <begin_vertex>\n vSide = aSide;\n");
    shader.fragmentShader = shader.fragmentShader
      .replace("#include <common>", "#include <common>\nvarying float vSide;\nuniform float uKeep;\n")
      .replace("#include <dithering_fragment>", "if (abs(abs(vSide) - 1.0) > 0.02) discard;\nif (uKeep < 0.0 && vSide > 0.0) discard;\nif (uKeep > 0.0 && vSide < 0.0) discard;\n #include <dithering_fragment>");
  };
  return mat;
}

const leftMat = halfMat(-1);
const rightMat = halfMat(1);
const leftForm = new THREE.Group();
const rightForm = new THREE.Group();
const leftMesh = new THREE.Mesh(gray.geometry, leftMat);
const rightMesh = new THREE.Mesh(gray.geometry, rightMat);
leftMesh.frustumCulled = rightMesh.frustumCulled = false;
const cutGeo = new THREE.CircleGeometry(R * 0.99, 56);
const capMat = grayMat.clone();
const leftCut = new THREE.Mesh(cutGeo, capMat);
const rightCut = new THREE.Mesh(cutGeo, capMat);
leftCut.rotation.y = Math.PI / 2;
rightCut.rotation.y = -Math.PI / 2;
leftForm.add(leftMesh, leftCut);
rightForm.add(rightMesh, rightCut);
const faceGeo = new THREE.CircleGeometry(1, 72);
const faceFront = new THREE.Mesh(faceGeo, grayMat);
const faceBack = new THREE.Mesh(faceGeo, grayMat);
faceFront.visible = faceBack.visible = false;
root.add(faceFront, faceBack);

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
drawingSpin.add(mark, blankRim);
root.add(liner, shell, parts, leftForm, rightForm);

function seamLine(x, radius) {
  const pts = [];
  for (let i = 0; i <= 96; i++) {
    const a = (i / 96) * Math.PI * 2;
    pts.push(new THREE.Vector3(x, Math.cos(a) * radius, Math.sin(a) * radius));
  }
  const line = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(pts),
    new THREE.LineBasicMaterial({ color: "#fff4e6", transparent: true, opacity: 0 })
  );
  line.geometry.setDrawRange(0, 0);
  return line;
}
let valveX = 1.4;
let valveRad = 0.18;
const seamMid = seamLine(0, R * 1.01);
const seamLeft = seamLine(-valveX, valveRad);
const seamRight = seamLine(valveX, valveRad);
const laserMat = new THREE.MeshBasicMaterial({ color: "#fff8f0" });
const laserMid = new THREE.Mesh(new THREE.SphereGeometry(0.032, 16, 12), laserMat);
const laserLeft = new THREE.Mesh(new THREE.SphereGeometry(0.028, 16, 12), laserMat);
const laserRight = new THREE.Mesh(new THREE.SphereGeometry(0.028, 16, 12), laserMat);
const weldLight = new THREE.PointLight("#fff1df", 0, 1.8);
root.add(seamMid, seamLeft, seamRight, laserMid, laserLeft, laserRight, weldLight, boss, drawingAlign);

// Rise: one cap, seen from a three-quarter angle. Reveal: the view comes
// around as the second cap forms. Settle: the pair turns onto the vessel axis.
function domePhase(form) {
  const rise = Math.min(1, form / 0.40);
  const reveal = form <= 0.40 ? 0 : smooth(Math.min(1, (form - 0.40) / 0.26));
  const settle = form <= 0.66 ? 0 : smooth(Math.min(1, (form - 0.66) / 0.16));
  const grow = form <= 0.82 ? 0 : smooth(Math.min(1, (form - 0.82) / 0.18));
  return { rise, reveal, settle, grow };
}

function shapeMetal(form, spin) {
  const pos = gray.geometry.attributes.position.array;
  const c = Math.cos(spin);
  const s = Math.sin(spin);
  const shellR = R * 0.99;
  const discR = shellR * 1.7;
  const phase = domePhase(form);
  const yaw = phase.settle * Math.PI / 2;
  const cyaw = Math.cos(yaw);
  const syaw = Math.sin(yaw);
  const gap = phase.reveal * discR * 0.62;
  for (let i = 0; i < pos.length; i += 3) {
    const dx = discPos[i] * c - discPos[i + 1] * s;
    const dy = discPos[i] * s + discPos[i + 1] * c;
    const span = Math.hypot(dx, dy);
    const rho = Math.min(discR, span);
    const fit = span > rho && span > 1e-6 ? rho / span : 1;
    const front = formedPos[i] >= 0;
    const h = (front ? phase.rise : phase.reveal) * discR;
    let x = dx * fit;
    let y = dy * fit;
    let z = 0;
    if (h > 1e-5) {
      const Rs = (discR * discR + h * h) / (2 * h);
      const zCap = h - Rs + Math.sqrt(Math.max(0, Rs * Rs - rho * rho));
      z = (front ? 1 : -1) * zCap;
      if (!front) z -= gap;
      else z += gap;
    }
    const xr = x * cyaw + z * syaw;
    const zr = -x * syaw + z * cyaw;
    const fx = formedPos[i];
    const fy = formedPos[i + 1];
    const fz = formedPos[i + 2];
    const g = phase.grow;
    pos[i] = xr + (fx - xr) * g;
    pos[i + 1] = y + (fy - y) * g;
    pos[i + 2] = zr + (fz - zr) * g;
  }
  gray.geometry.attributes.position.needsUpdate = true;
  gray.geometry.computeVertexNormals();
  if (phase.rise < 0.18) {
    const n = gray.geometry.attributes.normal.array;
    const k = 1 - phase.rise / 0.18;
    for (let i = 0; i < n.length; i += 3) {
      n[i] *= 1 - k;
      n[i + 1] *= 1 - k;
      n[i + 2] = n[i + 2] * (1 - k) + k;
    }
    gray.geometry.attributes.normal.needsUpdate = true;
  }
  gray.geometry.computeBoundingSphere();
  return discR + (shellR - discR) * phase.grow;
}

function matchGray(mat) {
  mat.opacity = grayMat.opacity;
  mat.transparent = grayMat.transparent;
  mat.depthWrite = grayMat.depthWrite;
  mat.metalness = grayMat.metalness;
  mat.roughness = grayMat.roughness;
}

let cadReady = false;
let bodyL = null;
let bodyR = null;
let valveL = null;
let valveR = null;
let bodyLG = null;
let bodyRG = null;
let valveLG = null;
let valveRG = null;
let valveCenter = 1.52;
let cadBody = null;
let cadWhole = null;
let cadWrap = null;
let cadWrapTop = null;
const cadGroup = new THREE.Group();
const cadCapGeo = new THREE.CircleGeometry(R * 0.998, 48);
const cadCapL = new THREE.Mesh(cadCapGeo, grayMat.clone());
const cadCapR = new THREE.Mesh(cadCapGeo, grayMat.clone());
cadCapL.rotation.y = -Math.PI / 2;
cadCapR.rotation.y = Math.PI / 2;
cadGroup.add(cadCapL, cadCapR);
const sealMat = silverMat.clone();
sealMat.opacity = 1;
sealMat.transparent = false;
sealMat.depthWrite = true;
const sealGeo = new THREE.CircleGeometry(1, 72);
sealGeo.rotateY(Math.PI / 2);
const sealL = new THREE.Mesh(sealGeo, sealMat);
const sealR = new THREE.Mesh(sealGeo, sealMat);
sealL.visible = sealR.visible = false;
sealL.frustumCulled = sealR.frustumCulled = false;
cadGroup.add(sealL, sealR);
root.add(cadGroup);

new GLTFLoader().load("assets/copv-15l.glb", (gltf) => {
  let geo = null;
  gltf.scene.traverse((obj) => {
    if (!geo && obj.isMesh) geo = obj.geometry;
  });
  if (!geo) return;
  geo.computeVertexNormals();
  geo.computeBoundingSphere();
  const pos = geo.attributes.position;
  let tip = 0;
  for (let i = 0; i < pos.count; i++) tip = Math.max(tip, pos.getX(i));
  function radiusNear(x) {
    let best = 0;
    for (let i = 0; i < pos.count; i++) {
      if (Math.abs(pos.getX(i) - x) > 0.035) continue;
      best = Math.max(best, Math.hypot(pos.getY(i), pos.getZ(i)));
    }
    return best;
  }
  for (let x = tip - 0.04; x > 0.9; x -= 0.02) {
    if (radiusNear(x) > 0.26) {
      valveX = x + 0.04;
      valveRad = Math.max(0.08, radiusNear(valveX));
      break;
    }
  }
  seamLeft.geometry.dispose();
  seamRight.geometry.dispose();
  seamLeft.geometry = seamLine(-valveX, valveRad * 1.04).geometry;
  seamRight.geometry = seamLine(valveX, valveRad * 1.04).geometry;
  function slice(name, minX, maxX, source) {
    const mat = (source || grayMat).clone();
    mat.opacity = 1;
    mat.transparent = false;
    mat.depthWrite = true;
    mat.side = THREE.DoubleSide;
    mat.customProgramCacheKey = () => "slice-" + name;
    mat.onBeforeCompile = (shader) => {
      shader.uniforms.uMin = { value: minX };
      shader.uniforms.uMax = { value: maxX };
      shader.vertexShader = shader.vertexShader
        .replace("#include <common>", "#include <common>\nvarying float vCut;\n")
        .replace("#include <begin_vertex>", "#include <begin_vertex>\n vCut = position.x;\n");
      shader.fragmentShader = shader.fragmentShader
        .replace("#include <common>", "#include <common>\nvarying float vCut;\nuniform float uMin;\nuniform float uMax;\n")
        .replace("#include <dithering_fragment>", "if (vCut < uMin || vCut > uMax) discard;\n #include <dithering_fragment>");
    };
    const mesh = new THREE.Mesh(geo, mat);
    mesh.frustumCulled = false;
    return mesh;
  }
  const overlap = 0.012;
  valveCut.value = Math.max(0.2, valveX - 0.02);
  const mouthR = Math.max(0.22, radiusNear(valveCut.value)) * 1.03;
  const joint = valveCut.value * 0.94;
  sealL.scale.set(1, mouthR, mouthR);
  sealR.scale.set(1, mouthR, mouthR);
  sealL.position.x = -joint;
  sealR.position.x = joint;
  valveL = slice("vl", -10, -valveX + overlap, silverMat);
  bodyL = slice("bl", -valveX - overlap, overlap);
  bodyR = slice("br", -overlap, valveX + overlap);
  valveR = slice("vr", valveX - overlap, 10, silverMat);
  cadBody = slice("shell", -valveX + overlap, valveX - overlap);
  valveCenter = (valveX + tip) * 0.5;
  function mount(mesh, center) {
    const group = new THREE.Group();
    mesh.position.x = -center;
    group.add(mesh);
    group.visible = false;
    cadGroup.add(group);
    return group;
  }
  bodyLG = mount(bodyL, -valveX * 0.5);
  bodyRG = mount(bodyR, valveX * 0.5);
  valveLG = mount(valveL, -valveCenter);
  valveRG = mount(valveR, valveCenter);
  const wholeMat = grayMat.clone();
  wholeMat.opacity = 1;
  wholeMat.transparent = false;
  wholeMat.depthWrite = true;
  wholeMat.customProgramCacheKey = () => "cad-body-only";
  wholeMat.onBeforeCompile = (shader) => {
    shader.uniforms.uValve = valveCut;
    shader.vertexShader = shader.vertexShader
      .replace("#include <common>", "#include <common>\nvarying float vValveX;\n")
      .replace("#include <begin_vertex>", "#include <begin_vertex>\n vValveX = position.x;\n");
    shader.fragmentShader = shader.fragmentShader
      .replace("#include <common>", "#include <common>\nvarying float vValveX;\nuniform float uValve;\n")
      .replace("#include <dithering_fragment>", "if (abs(vValveX) > uValve) discard;\n #include <dithering_fragment>");
  };
  cadWhole = new THREE.Mesh(geo, wholeMat);
  cadWhole.frustumCulled = false;
  cadWrap = new THREE.Mesh(geo, helicalMat);
  cadWrapTop = new THREE.Mesh(geo, topMat);
  cadWrap.renderOrder = 2;
  cadWrapTop.renderOrder = 3;
  cadWrap.scale.setScalar(1.012);
  cadWrapTop.scale.setScalar(1.02);
  cadWrap.frustumCulled = cadWrapTop.frustumCulled = false;
  cadGroup.add(cadBody, cadWhole, cadWrap, cadWrapTop);
  cadReady = true;
});

function smooth(u) {
  return u * u * (3 - 2 * u);
}

const mixKeys = ["wire", "face", "form", "spin", "seat", "spread", "vshow", "vseat", "weld", "wrap", "yaw", "boss"];
const linearKeys = { spin: 1, wrap: 1, weld: 1, yaw: 1 };

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

const sheetEl = document.getElementById("sheet");
const sheetImg = document.querySelector(".sheet__page");
// Side view on the 15 L printout, measured on the raster (boss tip to boss tip, crown to belly).
const sideView = { x0: 1366 / 2858, y0: 101 / 2021, x1: 2726 / 2858, y1: 686 / 2021 };
const alignHalf = { x: BODY / 2 + R + BOSS, y: R };
const _align = new THREE.Vector3();

function projectAlign(x, y, rect) {
  _align.set(x, y, 0).applyMatrix4(drawingAlign.matrixWorld);
  _align.project(camera);
  return {
    x: rect.left + (_align.x * 0.5 + 0.5) * rect.width,
    y: rect.top + (-_align.y * 0.5 + 0.5) * rect.height
  };
}

function alignBlueprint(t) {
  const release = beats[1].t;
  const done = beats[2].t;
  let hold = 1;
  if (reduced || t >= done) hold = 0;
  else if (t > release) {
    const u = (t - release) / (done - release);
    hold = 1 - u * u * (3 - 2 * u);
  }
  if (hold <= 0.0001 || !sheetImg || !canvas) {
    drawingAlign.position.set(0, 0, 0);
    drawingAlign.scale.set(1, 1, 1);
    return;
  }
  const sheet = sheetImg.getBoundingClientRect();
  if (sheet.width < 20 || sheet.height < 20) {
    drawingAlign.position.set(0, 0, 0);
    drawingAlign.scale.set(1, 1, 1);
    return;
  }
  const view = canvas.getBoundingClientRect();
  drawingAlign.position.set(0, 0, 0);
  drawingAlign.scale.set(1, 1, 1);
  drawingAlign.updateMatrixWorld(true);
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  for (const x of [-alignHalf.x, alignHalf.x]) {
    for (const y of [-alignHalf.y, alignHalf.y]) {
      const p = projectAlign(x, y, view);
      minX = Math.min(minX, p.x);
      maxX = Math.max(maxX, p.x);
      minY = Math.min(minY, p.y);
      maxY = Math.max(maxY, p.y);
    }
  }
  const origin = projectAlign(0, 0, view);
  const unitX = projectAlign(1, 0, view);
  const unitY = projectAlign(0, 1, view);
  const ppuX = unitX.x - origin.x;
  const ppuY = unitY.y - origin.y;
  const curW = Math.max(1, maxX - minX);
  const curH = Math.max(1, maxY - minY);
  const targetW = (sideView.x1 - sideView.x0) * sheet.width;
  const targetH = (sideView.y1 - sideView.y0) * sheet.height;
  const sx = targetW / curW;
  const sy = targetH / curH;
  const dx = (((sideView.x0 + sideView.x1) * 0.5) * sheet.width + sheet.left - (minX + maxX) * 0.5) / ppuX;
  const dy = (((sideView.y0 + sideView.y1) * 0.5) * sheet.height + sheet.top - (minY + maxY) * 0.5) / ppuY;
  drawingAlign.scale.set(1 + (sx - 1) * hold, 1 + (sy - 1) * hold, 1);
  drawingAlign.position.set(dx * hold, dy * hold, 0);
}

// Hero first. The print fades in after that screen, holds, then the last
// stretch before chapter 02 crossfades it into the white mesh.
function blueprintPhase() {
  const open = document.getElementById("open");
  const next = document.getElementById("audiences");
  if (!next || reduced) return { show: reduced ? 0 : 0, mesh: reduced ? 1 : 0 };
  const vh = window.innerHeight;
  const heroEnd = (open ? open.offsetTop : 0) + vh;
  const shown = heroEnd + vh * 0.35;
  const meshStart = next.offsetTop - vh * 0.8;
  const y = window.scrollY;
  const reveal = y <= heroEnd ? 0 : Math.min(1, (y - heroEnd) / Math.max(1, shown - heroEnd));
  const show = reveal * reveal * (3 - 2 * reveal);
  const u = Math.min(1, Math.max(0, (y - meshStart) / Math.max(1, next.offsetTop - meshStart)));
  const mesh = u * u * (3 - 2 * u);
  return { show, mesh };
}

function paintSheet(t) {
  if (!sheetEl) return reduced ? 1 : 0;
  const phase = blueprintPhase();
  const mesh = phase.mesh;
  const opacity = reduced ? 0 : phase.show * (1 - mesh);
  sheetEl.style.opacity = opacity.toFixed(3);
  sheetEl.style.visibility = opacity > 0.004 ? "visible" : "hidden";
  return reduced ? 1 : mesh;
}

function progress() {
  const film = document.getElementById("audiences");
  const story = document.getElementById("story");
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (max <= 0) return 0;
  if (!film) return Math.min(1, Math.max(0, window.scrollY / max));
  const start = film.offsetTop;
  const mesh = blueprintPhase().mesh;
  if (canvas) {
    canvas.style.visibility = mesh > 0.004 ? "visible" : "hidden";
    canvas.style.opacity = String(mesh);
  }
  const rest = document.getElementById("rest");
  const end = rest
    ? rest.offsetTop
    : story
      ? story.offsetTop + story.offsetHeight - window.innerHeight
      : max;
  const span = Math.max(1, end - start);
  return Math.min(1, Math.max(0, (window.scrollY - start) / span));
}

function codaDrop() {
  const rest = document.getElementById("rest");
  const story = document.getElementById("story");
  if (!rest || !story) return 0;
  const start = rest.offsetTop;
  const outlook = document.getElementById("outlook-sat");
  const release = outlook
    ? outlook.offsetTop - window.innerHeight
    : story.offsetTop + story.offsetHeight - window.innerHeight;
  const span = Math.max(1, release - start);
  const u = Math.min(1, Math.max(0, (window.scrollY - start) / span));
  return Math.min(1, u / 0.38);
}

function apply(state) {
  const blueprint = state.wire > 0.985;
  lineMat.opacity = state.wire;
  drawingFlat.visible = state.wire > 0.02;
  const face = state.face || 0;
  drawingTurn.rotation.y = face;
  const faceU = Math.min(1, Math.max(0, face / endOn));
  drawingTurn.scale.setScalar(1 + 0.68 * faceU);
  drawingFlat.scale.z = Math.max(0.001, 1 - faceU * faceU * faceU);
  if (drawing.userData.ports) drawing.userData.ports.visible = faceU < 0.92;
  drawingSpin.rotation.z = state.spin || 0;
  hub.visible = faceU > 0.92 && state.wire > 0.02;
  hubMat.opacity = state.wire;
  liner.visible = false;
  const metal = 1 - state.wire;
  const formed = state.form > 0.992;
  const useCad = cadReady && formed;
  const showGray = !useCad && !formed && metal > 0.02;
  const phaseNow = domePhase(state.form || 0);
  const openU = state.form <= 0.86 ? 0 : smooth(Math.min(1, (state.form - 0.86) / 0.14));
  const useHalves = showGray && phaseNow.rise > 0.05;
  gray.visible = showGray && !useHalves;
  leftForm.visible = rightForm.visible = useHalves;
  parts.visible = formed && !cadReady && metal > 0.02;
  cadGroup.visible = useCad;
  const spread = state.spread || 0;
  const vshow = state.vshow || 0;
  const vseat = state.vseat || 0;
  leftCap.visible = rightCap.visible = false;
  cadCapL.visible = false;
  cadCapR.visible = false;
  const camZ = Math.max(1, state.pos[2]);
  const halfW = Math.tan((camera.fov * Math.PI / 180) / 2) * camZ * camera.aspect;
  const edge = halfW * 0.9;
  const bodyShift = spread * Math.min(1.15, halfW * 0.3);
  const turn = spread * 0.7;
  vesselSide.position.x = -bodyShift;
  cylinderSide.position.x = bodyShift;
  if (bodyLG) {
    bodyLG.position.x = -valveX * 0.5 - bodyShift;
    bodyRG.position.x = valveX * 0.5 + bodyShift;
    bodyLG.rotation.y = turn;
    bodyRG.rotation.y = -turn;
    valveLG.position.x = -edge + (-valveCenter + edge) * vseat;
    valveRG.position.x = edge + (valveCenter - edge) * vseat;
    valveLG.rotation.y = turn * 1.2;
    valveRG.rotation.y = -turn * 1.2;
    const moving = spread > 0.03 || (vshow > 0.03 && vseat < 0.985);
    const valvesSeated = useCad && vseat > 0.985 && spread < 0.04;
    bodyLG.visible = bodyRG.visible = useCad && moving;
    valveLG.visible = valveRG.visible = useCad && vshow > 0.02 && (vseat < 0.985 || valvesSeated);
    valveL.material.opacity = vshow;
    valveR.material.opacity = vshow;
    valveL.material.transparent = valveR.material.transparent = vshow < 0.98;
    valveL.material.depthWrite = valveR.material.depthWrite = vshow > 0.85;
  }
  if (cadBody) {
    cadBody.visible = useCad && spread < 0.98 && vseat < 0.05;
    cadBody.material.opacity = 1 - spread;
    cadBody.material.transparent = spread > 0.02;
    cadBody.material.depthWrite = spread < 0.4;
  }
  // Finished wrap is a solid shell. The liner stays so the strap gaps and the
  // dome ends are not see-through when the vessel starts its spin.
  const solidShell = (state.wrap || 0) >= 0.98 && state.wire <= 0.02;
  helicalMat.transparent = !solidShell;
  helicalMat.depthWrite = solidShell;
  helicalMat.opacity = 1;
  topMat.depthWrite = solidShell;
  if (cadWhole) cadWhole.visible = useCad && vseat > 0.985 && spread < 0.04;
  sealL.visible = sealR.visible = !!(cadWhole && cadWhole.visible);
  grayMat.opacity = metal;
  grayMat.transparent = state.wire > 0.02;
  grayMat.depthWrite = state.wire <= 0.02;
  grayMat.metalness = 0.38;
  grayMat.roughness = 0.46;
  matchGray(leftMat);
  matchGray(rightMat);
  matchGray(capMat);
  const mouthR = shapeMetal(state.form, state.spin);
  const leftCenter = -valveX * 0.5;
  const rightCenter = valveX * 0.5;
  const yawU = state.form <= 0.88 ? 0 : smooth(Math.min(1, (state.form - 0.88) / 0.12));
  const formYaw = turn * yawU;
  const shiftNow = bodyShift * openU;
  leftMesh.position.x = -leftCenter;
  rightMesh.position.x = -rightCenter;
  leftForm.position.set(leftCenter - shiftNow, 0, 0);
  rightForm.position.set(rightCenter + shiftNow, 0, 0);
  leftForm.rotation.y = formYaw;
  rightForm.rotation.y = -formYaw;
  const capScale = mouthR / (R * 0.99);
  leftCut.scale.set(capScale, capScale, 1);
  rightCut.scale.set(capScale, capScale, 1);
  leftCut.position.set(-leftCenter, 0, 0);
  rightCut.position.set(-rightCenter, 0, 0);
  leftCut.visible = rightCut.visible = false;
  const faceR = R * 0.99 * 1.7;
  const faceGap = phaseNow.reveal * faceR * 0.62;
  const showFaces = useHalves && phaseNow.reveal > 0.12 && phaseNow.settle < 0.2;
  faceFront.visible = faceBack.visible = showFaces;
  faceFront.scale.set(faceR, faceR, 1);
  faceBack.scale.set(faceR, faceR, 1);
  faceFront.position.set(0, 0, faceGap);
  faceBack.position.set(0, 0, -faceGap);

  const showBlank = phaseNow.rise < 0.08 && metal > 0.08;
  mark.visible = blankRim.visible = showBlank;
  markMat.opacity = metal * Math.max(0, 1 - state.form / 0.28);

  const welding = state.weld > 0.001 && state.weld < 0.999 && (state.vseat || 0) > 0.96 && (state.spread || 0) < 0.08;
  const hot = welding ? 1 : 0;
  const ang = state.weld * Math.PI * 2;
  const count = Math.max(0, Math.min(97, Math.ceil(state.weld * 97)));
  const beads = [
    [laserMid, seamMid, 0, R * 1.02],
    [laserLeft, seamLeft, -valveX, valveRad * 1.05],
    [laserRight, seamRight, valveX, valveRad * 1.05]
  ];
  for (let i = 0; i < beads.length; i++) {
    const dot = beads[i][0];
    const seam = beads[i][1];
    const x = beads[i][2];
    const rad = beads[i][3];
    dot.visible = hot > 0;
    dot.position.set(x, Math.cos(ang) * rad, Math.sin(ang) * rad);
    seam.geometry.setDrawRange(0, count);
    seam.material.opacity = hot * 0.95;
  }
  weldLight.intensity = hot * 7;
  weldLight.position.copy(laserMid.position);

  boss.visible = !useCad && state.boss > 0.04 && !blueprint;
  bossMat.opacity = state.boss * metal;
  bossMat.transparent = state.boss < 0.98 || state.wire > 0.02;
  bossMat.depthWrite = state.boss > 0.98 && state.wire <= 0.02;

  const wrapped = !blueprint && state.form > 0.98 && state.seat > 0.98 && state.wrap > 0.001;
  helical.visible = helicalTop.visible = wrapped && !cadReady;
  if (cadWrap) cadWrap.visible = cadWrapTop.visible = wrapped && useCad;
  wrapUniform.value = state.wrap;
  root.quaternion.setFromAxisAngle(windAxis, state.yaw || 0);
  if (state.idle) root.rotateY(state.idle);
  const lift = beatEl ? 0 : 0.35 + (state.spread || 0) * 0.45;
  const dist = state.pos[2] + lift;
  const phase = domePhase(state.form || 0);
  backFill.intensity = phase.reveal > 0.08 && phase.grow < 0.35 ? 1.6 : 0;
  const tilt = smooth(Math.min(1, Math.max(0, (phase.rise - 0.18) / 0.82)));
  const shown = phase.reveal > 0 ? 1.02 + phase.reveal * 0.55 : tilt * 1.02;
  const camPhi = shown * (1 - phase.settle);
  camera.position.set(
    Math.sin(camPhi) * dist + state.pos[0] * Math.cos(camPhi),
    state.pos[1],
    Math.cos(camPhi) * dist
  );
  camera.lookAt(0, (state.drop || 0) * 0.46 + (state.nudge || 0), 0);
  if (beatEl) beatEl.textContent = state.beat;
  if (lineEl) lineEl.textContent = state.line;
}

linerMat.transparent = helicalMat.transparent = topMat.transparent = bossMat.transparent = grayMat.transparent = true;

let idleSpin = 0;
let glowTime = 0;
let lastFrame = performance.now();

const aboutPanels = document.querySelectorAll(".about-panel");
const aboutSteps = document.querySelectorAll("[data-about]");
const teachEl = document.getElementById("teaching");
const quotesEl = document.getElementById("quotes");
const quotesHold = document.getElementById("quotes-hold");
const quotesType = document.getElementById("quotes-type");
const quotesCaret = document.getElementById("quotes-caret");
const quotesBy = document.getElementById("quotes-by");
const quotesMark = document.getElementById("quotes-mark");
const QUOTES = [
  { text: "Martin brings a unique combination of strategic thinking and creative vision to everything he touches. His diverse experience enables him to create tailored solutions for any business challenge.", by: "Ryan Cobb, Moon Mission Design Engineer, NASA" },
  { text: "Martin brings thoughtful empathy and unbridled creativity to every challenge. His ability to listen deeply and craft innovative solutions makes him exceptional to work with.", by: "Dr. Tyler Phillips, JetBlue Pilot, USAF Retired" },
  { text: "Martin's process delivers superior results that not only meet but exceed expectations. Strategic, thorough, and always focused on what the organization actually needs.", by: "Joe Murray, Strategic Development, Newmont Mining" }
];
const portraitEl = document.getElementById("portrait");
const awardsEl = document.getElementById("awards");
const citySceneEl = document.querySelector(".city-scene");
const teachHold = teachEl && teachEl.querySelector(".teach-hold");
const teachScatter = teachEl && teachEl.querySelector(".teach-scatter");
const teachPanel = document.querySelector('.about-panel[data-panel="teaching"]');
const lifeEl = document.getElementById("life");
const lifeOrbit = document.getElementById("life-orbit");
const lifeRing = document.getElementById("life-ring");
const lifeShots = lifeOrbit ? Array.from(lifeOrbit.querySelectorAll(".life-shot")) : [];
const portraitHold = portraitEl && portraitEl.querySelector(".atlas-hold");
const helloA = document.getElementById("hello-a");
const helloB = document.getElementById("hello-b");
const helloGreet = document.getElementById("hello-greet");
const helloGreetCaret = document.getElementById("hello-greet-caret");
const helloType = document.getElementById("hello-type");
const helloCaret = document.getElementById("hello-caret");
const portraitPhoto = document.getElementById("portrait-photo");
const aboutKicker = portraitEl && portraitEl.querySelector(".frame__num");
const AWARDS_LINE = "The marks\nare on\nthe work.";
const END_LINE = "Let's talk.";
const endEl = document.getElementById("together");
const endType = document.getElementById("end-type");
const endCaret = document.getElementById("end-caret");
let endCount = 0;
let endStarted = 0;
const awardsType = document.getElementById("awards-type");
const awardsCaret = document.getElementById("awards-caret");
const TEACH_LINE = "I have\ntaught this.";
const teachType = document.getElementById("teach-type");
const teachCaret = document.getElementById("teach-caret");
const GREET_LINE = "Hello,\nI'm Martin";
const HELLO_LINE = "I have over\n15\u00a0years of experience as an award-winning brand designer";
const cityBldgs = Array.from(document.querySelectorAll(".city-scene .bldg")).sort(
  (a, b) => Number(a.style.getPropertyValue("--i")) - Number(b.style.getPropertyValue("--i"))
);
const cityLines = Array.from(document.querySelectorAll(".city-scene .grid-line"));
const cityPins = Array.from(document.querySelectorAll(".city-scene .pin")).map((pin) => ({
  order: Number(pin.style.getPropertyValue("--p")) || 0,
  line: pin.querySelector(".pin-line"),
  dot: pin.querySelector(".pin-dot"),
  label: pin.querySelector(".pin-label"),
  logo: pin.querySelector(".pin-logo"),
})).sort((a, b) => a.order - b.order);

function clamp01(v) {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

function easeOut(t) {
  return 1 - Math.pow(1 - t, 3);
}

function teachProgress() {
  if (!teachEl) return 0;
  const top = teachEl.getBoundingClientRect().top;
  const vh = window.innerHeight;
  return clamp01((0 - top) / (vh * 1.15));
}

function staggerEase(index, count, p) {
  const dropEnd = 0.72;
  const span = 0.05;
  const last = Math.max(1, count - 1);
  const start = (index / last) * (dropEnd - span);
  return easeOut(clamp01((p - start) / span));
}

function paintCity() {
  if (!cityBldgs.length && !cityLines.length) return;
  const p = reduced ? 1 : teachProgress();
  const n = cityBldgs.length;
  for (let i = 0; i < n; i++) {
    const e = staggerEase(i, n, p);
    const node = cityBldgs[i];
    node.style.opacity = e.toFixed(3);
    node.style.transform = e >= 0.999 ? "none" : "translateY(" + ((1 - e) * -220).toFixed(1) + "px)";
  }
  for (let i = 0; i < cityLines.length; i++) {
    const e = staggerEase(i, cityLines.length, p);
    cityLines[i].style.strokeDashoffset = (1 - e).toFixed(3);
  }
  for (let i = 0; i < cityPins.length; i++) {
    const pin = cityPins[i];
    const start = 0.74 + pin.order * 0.06;
    const e = easeOut(clamp01((p - start) / 0.12));
    const fade = clamp01((e - 0.7) / 0.3);
    if (pin.line) pin.line.style.strokeDashoffset = (1 - e).toFixed(3);
    if (pin.dot) {
      if (!reduced && fade > 0.92) {
        pin.dot.style.opacity = "";
        pin.dot.classList.add("is-lit");
      } else {
        pin.dot.classList.remove("is-lit");
        pin.dot.style.opacity = (reduced ? 1 : fade).toFixed(3);
      }
    }
    if (pin.label) pin.label.style.opacity = fade.toFixed(3);
    if (pin.logo) pin.logo.style.opacity = fade.toFixed(3);
  }
  const exit = reduced ? 0 : teachExit();
  const disperse = easeOut(exit);
  const fade = (1 - easeOut(clamp01((exit - 0.12) / 0.88))).toFixed(4);
  if (citySceneEl) {
    citySceneEl.style.setProperty("--city-out", "1");
    citySceneEl.style.opacity = fade;
  }
  if (teachPanel) teachPanel.style.setProperty("--disperse", disperse.toFixed(4));
  if (teachScatter) teachScatter.style.setProperty("--disperse", disperse.toFixed(4));
  if (teachHold) teachHold.style.opacity = fade;
}

function teachExit() {
  if (!teachEl) return 0;
  const vh = window.innerHeight;
  const span = teachEl.offsetHeight - vh;
  if (span <= 0) return 0;
  const through = clamp01(-teachEl.getBoundingClientRect().top / span);
  return clamp01((through - 0.78) / 0.22);
}

const atlasCanvas = document.getElementById("atlas");
const atlasLabelRoot = document.getElementById("atlas-labels");
const atlasRenderer = atlasCanvas
  ? new THREE.WebGLRenderer({ canvas: atlasCanvas, antialias: true, alpha: true })
  : null;
if (atlasRenderer) {
  atlasRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  atlasRenderer.setClearColor(0x000000, 0);
  atlasRenderer.outputColorSpace = THREE.SRGBColorSpace;
}
const atlasScene = new THREE.Scene();
const atlasCam = new THREE.PerspectiveCamera(32, 1, 0.02, 40);
const bust = new THREE.Group();
const globe = new THREE.Group();
atlasScene.add(bust);
atlasScene.add(globe);
globe.visible = false;

const drawUniforms = {
  uDraw: { value: 0 },
  uOpacity: { value: 1 },
};
const meshMat = new THREE.ShaderMaterial({
  glslVersion: THREE.GLSL1,
  transparent: true,
  depthTest: true,
  depthWrite: false,
  uniforms: drawUniforms,
  vertexShader: [
    "attribute float aAlong;",
    "attribute float aBirth;",
    "varying float vAlong;",
    "varying float vBirth;",
    "void main() {",
    "  vAlong = aAlong;",
    "  vBirth = aBirth;",
    "  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);",
    "}",
  ].join("\n"),
  fragmentShader: [
    "uniform float uDraw;",
    "uniform float uOpacity;",
    "varying float vAlong;",
    "varying float vBirth;",
    "void main() {",
    "  float reveal = clamp((uDraw - vBirth) / 0.58, 0.0, 1.0);",
    "  if (uDraw <= 0.001 || vAlong > reveal) discard;",
    "  gl_FragColor = vec4(0.102, 0.102, 0.102, uOpacity);",
    "}",
  ].join("\n"),
});
const globeMat = new THREE.LineBasicMaterial({ color: 0xd0d0d0, transparent: true, depthTest: true, depthWrite: false });
const landMat = new THREE.LineBasicMaterial({ color: 0x1a1a1a, transparent: true, depthTest: true, depthWrite: false });
const globeFillMat = new THREE.MeshBasicMaterial({ color: 0xfafafa, transparent: true, depthWrite: true });
const EYE_GLOBE = 0.04;
const eyeLocal = new THREE.Vector3(0.0402, 0.2450, 0.1937);
const eyeCamLocal = new THREE.Vector3(0.0522, 0.2530, 0.3337);
const headLocal = new THREE.Vector3(0.04, 0.30, 0.11);
let headRadius = 0.2;
const eyeW = new THREE.Vector3();
const eyeCamW = new THREE.Vector3();
const headW = new THREE.Vector3();
const headCamW = new THREE.Vector3();
const wideCam = new THREE.Vector3();
const wideLook = new THREE.Vector3();
const origin = new THREE.Vector3();
const camRest = new THREE.Vector3(0.15, 0.18, 2.15);
const lookRest = new THREE.Vector3(-0.05, 0.04, 0);
const atlasCamPos = new THREE.Vector3();
const atlasLook = new THREE.Vector3();
const atlasTmp = new THREE.Vector3();
const atlasFace = new THREE.Vector3();
const atlasCamN = new THREE.Vector3();
const atlasOut = new THREE.Vector3();
const atlasCityW = new THREE.Vector3();
const atlasTipW = new THREE.Vector3();
const globeLight = new THREE.DirectionalLight(0xffffff, 0.62);
const globeAmbient = new THREE.AmbientLight(0xffffff, 0.7);
atlasScene.add(globeAmbient);
atlasScene.add(globeLight);
let bustReady = false;
let globeSpin = 0;
bust.position.set(0.55, -0.06, 0);
bust.renderOrder = 0;
globe.renderOrder = 2;

function setLL(v, lat, lon, r) {
  const phi = lat * Math.PI / 180;
  const lam = lon * Math.PI / 180;
  const c = Math.cos(phi);
  v.set(r * c * Math.sin(lam), r * Math.sin(phi), r * c * Math.cos(lam));
  return v;
}

function latLon(lat, lon, r) {
  return setLL(new THREE.Vector3(), lat, lon, r);
}

// Page pins only. Barcelona is a place on this globe, not a job.
// Germany is pinned on Munich. New York is a CEPRES office.
// Denver and Philadelphia are where he worked.
const atlasPlaces = [
  { name: "London", lat: 51.51, lon: -0.13 },
  { name: "Germany", lat: 48.14, lon: 11.58 },
  { name: "Barcelona", lat: 41.39, lon: 2.17 },
  { name: "New York", lat: 40.71, lon: -74.01 },
  { name: "Philadelphia", lat: 39.95, lon: -75.17 },
  { name: "Denver", lat: 39.74, lon: -104.99 },
];

const atlasPins = atlasPlaces.map((place) => {
  const mat = new THREE.LineBasicMaterial({ color: 0x111111, transparent: true, depthTest: true, depthWrite: false });
  const city = latLon(place.lat, place.lon, 1.02);
  const bias = place.name === "New York" ? 9 : place.name === "Philadelphia" ? -9 : place.name === "London" ? 6 : place.name === "Germany" ? -12 : place.name === "Barcelona" ? -14 : 0;
  const tip = latLon(place.lat + bias, place.lon, 1.3);
  const line = new THREE.Line(new THREE.BufferGeometry(), mat);
  line.geometry.setFromPoints([city, tip]);
  line.renderOrder = 3;
  line.frustumCulled = false;
  globe.add(line);
  const el = document.createElement("p");
  el.className = "atlas-label";
  el.textContent = place.name;
  const dot = document.createElement("span");
  dot.className = "atlas-dot";
  const core = document.createElement("span");
  core.className = "atlas-dot__core";
  dot.appendChild(core);
  if (atlasLabelRoot) {
    atlasLabelRoot.appendChild(dot);
    atlasLabelRoot.appendChild(el);
  }
  const closeLat = place.name === "Germany" ? place.lat + 10 : place.name === "London" ? place.lat + 14 : place.lat + bias;
  return {
    place, line, mat, el, dot, city, tip,
    dir: tip.clone().normalize(),
    dirClose: latLon(closeLat, place.lon, 1).normalize(),
  };
});

function addLandRings(rings) {
  for (let i = 0; i < rings.length; i++) {
    const ring = rings[i];
    if (!ring || ring.length < 2) continue;
    const pts = [];
    for (let j = 0; j < ring.length; j++) pts.push(latLon(ring[j][1], ring[j][0], 1.008));
    const a = ring[0];
    const b = ring[ring.length - 1];
    if (a[0] !== b[0] || a[1] !== b[1]) pts.push(pts[0].clone());
    const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), landMat);
    line.renderOrder = 3;
    line.frustumCulled = false;
    globe.add(line);
  }
}

(function buildGlobe() {
  for (let lon = -180; lon < 180; lon += 20) {
    const pts = [];
    for (let lat = -90; lat <= 90; lat += 3) pts.push(latLon(lat, lon, 1));
    const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), globeMat);
    line.renderOrder = 3;
    globe.add(line);
  }
  for (let lat = -80; lat <= 80; lat += 20) {
    const pts = [];
    for (let lon = -180; lon <= 180; lon += 3) pts.push(latLon(lat, lon, 1));
    const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), globeMat);
    line.renderOrder = 3;
    globe.add(line);
  }
  addLandRings(landRings.europe);
  addLandRings(landRings.us);
  const fill = new THREE.Mesh(new THREE.SphereGeometry(0.99, 48, 32), globeFillMat);
  fill.renderOrder = 2;
  globe.add(fill);
})();

setLL(wideCam, 32, -28, 4.7);
setLL(wideLook, 18, -16, 0);

const globeKeys = [
  { u: 0.56, lat: 32, lon: -28, dist: 4.7, lookLat: 18, lookLon: -16, lookR: 0 },
  { u: 0.60, lat: 32, lon: -28, dist: 4.7, lookLat: 18, lookLon: -16, lookR: 0 },
  { u: 0.64, lat: 51, lon: 18, dist: 2.65, lookLat: 40, lookLon: -6, lookR: 0 },
  { u: 0.72, lat: 51, lon: 18, dist: 2.65, lookLat: 40, lookLon: -6, lookR: 0 },
  { u: 0.80, lat: 32, lon: -28, dist: 4.7, lookLat: 16, lookLon: -18, lookR: 0 },
  { u: 0.90, lat: 43, lon: -90, dist: 2.35, lookLat: 40, lookLon: -92, lookR: 0.12 },
  { u: 1.00, lat: 39.74, lon: -104.99, dist: 1.62, lookLat: 39.74, lookLon: -104.99, lookR: 0.35 },
];

function blendSpan(keys, u) {
  let i = 0;
  while (i < keys.length - 2 && keys[i + 1].u <= u) i++;
  const a = keys[i];
  const b = keys[Math.min(i + 1, keys.length - 1)];
  const t = a === b ? 1 : smooth(clamp01((u - a.u) / (b.u - a.u)));
  return { a, b, t };
}

function atlasProgress() {
  if (!portraitEl || !teachEl) return 0;
  const vh = window.innerHeight;
  const pTop = portraitEl.getBoundingClientRect().top + window.scrollY;
  const tTop = teachEl.getBoundingClientRect().top + window.scrollY;
  const u0 = pTop - vh * 0.2;
  const u1 = tTop - vh * 0.22;
  return clamp01((window.scrollY - u0) / (u1 - u0 || 1));
}

function placeAllowed(place, dist) {
  if (place.name === "London" || place.name === "Germany" || place.name === "Barcelona") return dist > 2.2;
  if (place.name === "New York" || place.name === "Philadelphia") return dist > 3.3 || dist < 2.45;
  return true;
}

function syncEnd(now) {
  if (!endType || !endEl) return;
  if (reduced) {
    endType.textContent = END_LINE;
    if (endCaret) endCaret.style.visibility = "hidden";
    return;
  }
  const top = endEl.getBoundingClientRect().top;
  if (!endStarted && top < window.innerHeight * 0.55) endStarted = now || performance.now();
  if (!endStarted) {
    endType.textContent = "";
    if (endCaret) endCaret.style.visibility = "hidden";
    return;
  }
  const perLetter = 280;
  endCount = Math.min(END_LINE.length, Math.floor((now - endStarted) / perLetter));
  endType.textContent = END_LINE.slice(0, endCount);
  if (endCaret) endCaret.style.visibility = endCount > 0 && endCount < END_LINE.length ? "visible" : "hidden";
}

function syncAwards() {
  if (!awardsType || !awardsEl) return;
  if (reduced) {
    awardsType.textContent = AWARDS_LINE;
    if (awardsCaret) awardsCaret.style.visibility = "hidden";
    return;
  }
  const top = awardsEl.getBoundingClientRect().top;
  const vh = window.innerHeight;
  const typeT = clamp01((vh * 0.92 - top) / (vh * 0.38));
  const n = typeT >= 1 ? AWARDS_LINE.length : Math.floor(typeT * AWARDS_LINE.length);
  awardsType.textContent = AWARDS_LINE.slice(0, n);
  if (awardsCaret) awardsCaret.style.visibility = n > 0 && n < AWARDS_LINE.length ? "visible" : "hidden";
}

function syncTeach() {
  if (!teachType || !teachEl) return;
  if (reduced) {
    teachType.textContent = TEACH_LINE;
    if (teachCaret) teachCaret.style.visibility = "hidden";
    return;
  }
  const top = teachEl.getBoundingClientRect().top;
  const vh = window.innerHeight;
  const typeT = clamp01((vh * 0.92 - top) / (vh * 0.38));
  const n = typeT >= 1 ? TEACH_LINE.length : Math.floor(typeT * TEACH_LINE.length);
  teachType.textContent = TEACH_LINE.slice(0, n);
  if (teachCaret) teachCaret.style.visibility = n > 0 && n < TEACH_LINE.length ? "visible" : "hidden";
}

function syncQuotes() {
  if (!quotesEl || !quotesType) return;
  if (reduced) {
    quotesType.textContent = QUOTES.map(function (q) { return q.text; }).join("\n\n");
    if (quotesBy) quotesBy.textContent = QUOTES.map(function (q) { return q.by; }).join(" · ");
    if (quotesCaret) quotesCaret.style.visibility = "hidden";
    if (quotesHold) quotesHold.style.opacity = "1";
    if (quotesMark) {
      quotesMark.style.opacity = "1";
      const marks = quotesMark.querySelectorAll("img");
      for (let n = 0; n < marks.length; n++) marks[n].classList.add("is-on");
    }
    return;
  }
  const span = Math.max(1, quotesEl.offsetHeight - window.innerHeight);
  const p = clamp01(-quotesEl.getBoundingClientRect().top / span);
  const scaled = p * QUOTES.length;
  const i = Math.min(QUOTES.length - 1, Math.floor(scaled));
  const local = scaled - i;
  const quote = QUOTES[i];
  const typeT = clamp01(local / 0.62);
  const n = typeT >= 1 ? quote.text.length : Math.floor(typeT * quote.text.length);
  quotesType.textContent = quote.text.slice(0, n);
  if (quotesCaret) quotesCaret.style.visibility = n > 0 && n < quote.text.length ? "visible" : "hidden";
  if (quotesBy) {
    quotesBy.textContent = typeT >= 1 ? quote.by : "";
    quotesBy.style.opacity = typeT >= 1 ? "1" : "0";
  }
  const leaving = i < QUOTES.length - 1 ? 1 - smooth(clamp01((local - 0.84) / 0.16)) : 1;
  if (quotesHold) quotesHold.style.opacity = leaving.toFixed(3);
  if (quotesMark) {
    const marks = quotesMark.querySelectorAll("img");
    for (let n = 0; n < marks.length; n++) {
      marks[n].classList.toggle("is-on", Number(marks[n].dataset.quote) === i);
    }
    quotesMark.style.opacity = (clamp01(local / 0.14) * leaving).toFixed(3);
  }
}

function syncHello(u) {
  if (!helloA || !helloType) return;
  if (reduced) {
    if (helloGreet) helloGreet.textContent = GREET_LINE;
    helloA.style.opacity = "0";
    helloType.textContent = HELLO_LINE;
    if (helloB) helloB.style.opacity = "1";
    if (helloGreetCaret) helloGreetCaret.style.visibility = "hidden";
    if (helloCaret) helloCaret.style.visibility = "hidden";
    if (aboutKicker) aboutKicker.style.opacity = "1";
    return;
  }
  const greetT = clamp01(u / 0.07);
  const gn = greetT >= 1 ? GREET_LINE.length : Math.floor(greetT * GREET_LINE.length);
  const helloOut = smooth(clamp01((u - 0.145) / 0.055));
  const typeT = clamp01((u - 0.17) / 0.10);
  const n = typeT >= 1 ? HELLO_LINE.length : Math.floor(typeT * HELLO_LINE.length);
  const lineFade = 1 - smooth(clamp01((u - 0.32) / 0.05));
  if (helloGreet) helloGreet.textContent = GREET_LINE.slice(0, gn);
  helloType.textContent = HELLO_LINE.slice(0, n);
  helloA.style.opacity = (1 - helloOut).toFixed(3);
  if (helloB) helloB.style.opacity = (Math.min(1, helloOut * 1.6) * lineFade).toFixed(3);
  if (helloGreetCaret) helloGreetCaret.style.visibility = gn > 0 && gn < GREET_LINE.length && helloOut < 0.2 ? "visible" : "hidden";
  if (helloCaret) helloCaret.style.visibility = n > 0 && n < HELLO_LINE.length && lineFade > 0.8 ? "visible" : "hidden";
  if (aboutKicker) aboutKicker.style.opacity = (1 - smooth(clamp01((u - 0.26) / 0.10))).toFixed(3);
}

const matchCam = new THREE.Vector3();
const matchLook = new THREE.Vector3();
const bustMin = new THREE.Vector3(-0.47639, -0.5, -0.16793);
const bustMax = new THREE.Vector3(0.47639, 0.5, 0.21373);
const bustCorner = new THREE.Vector3();
const PHOTO_W = 1144;
const PHOTO_H = 1198;
const PHOTO_TOP = 128;
const PHOTO_HEAD_CX = 562;
const PHOTO_SUB_H = 1070;
let portraitShift = 0;

function matchFrame() {
  const aspect = Math.max(0.45, atlasCam.aspect || 1.6);
  const tanV = Math.tan((32 * Math.PI / 180) / 2);
  const tanH = tanV * aspect;
  const halfW = 0.473;
  const halfH = 0.5;
  const dist = Math.max(halfH / (tanV * 0.76), halfW / (tanH * 0.42));
  const ndcHalf = halfW / (dist * tanH);
  const limit = Math.max(0, 1 - 0.04 - ndcHalf);
  let centerNdc = aspect > 1.05 ? 0.3 : 0;
  centerNdc = Math.max(-limit, Math.min(limit, centerNdc));
  const x = centerNdc * dist * tanH;
  // Drop the bust so the front of the torso meets the bottom of the screen.
  // The portrait is locked to this box, so it sits on the same edge.
  const footY = 0.5 - (dist - bustMax.z) * tanV;
  // The bust stays on the right of the frame, and the camera looks straight
  // down the nose so the mirrored sides read as a mirror.
  bust.position.set(x, footY, 0);
  matchCam.set(x, 0, dist);
  matchLook.set(x, 0, 0);
  portraitShift = centerNdc;
}

function bustPose(turn) {
  bust.rotation.set(0.12 * turn, 0.52 * turn, 0.06 * turn);
  bust.updateMatrixWorld(true);
  eyeW.copy(eyeLocal).applyMatrix4(bust.matrixWorld);
  eyeCamW.copy(eyeCamLocal).applyMatrix4(bust.matrixWorld);
  headW.copy(headLocal).applyMatrix4(bust.matrixWorld);
  const aim = eyeCamW.clone().sub(eyeW);
  if (aim.lengthSq() < 1e-6) aim.set(0, 0, 1);
  const fit = headRadius / Math.tan((32 * Math.PI / 180) / 2) / 0.62;
  headCamW.copy(headW).add(aim.normalize().multiplyScalar(fit));
}

function placePortrait(op) {
  if (!portraitPhoto) return;
  portraitPhoto.style.opacity = op.toFixed(3);
  if (op <= 0.01 || !bustReady || !atlasCanvas) return;
  const w = atlasCanvas.clientWidth || 1;
  const h = atlasCanvas.clientHeight || 1;
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  for (let xi = 0; xi < 2; xi++) {
    for (let yi = 0; yi < 2; yi++) {
      for (let zi = 0; zi < 2; zi++) {
        bustCorner.set(xi ? bustMax.x : bustMin.x, yi ? bustMax.y : bustMin.y, zi ? bustMax.z : bustMin.z);
        bustCorner.applyMatrix4(bust.matrixWorld);
        bustCorner.project(atlasCam);
        const x = (bustCorner.x * 0.5 + 0.5) * w;
        const y = (-bustCorner.y * 0.5 + 0.5) * h;
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  const meshH = Math.max(1, maxY - minY);
  const scale = meshH / PHOTO_SUB_H;
  const left = (minX + maxX) * 0.5 - PHOTO_HEAD_CX * scale;
  const top = minY - PHOTO_TOP * scale;
  portraitPhoto.style.width = (PHOTO_W * scale).toFixed(2) + "px";
  portraitPhoto.style.height = (PHOTO_H * scale).toFixed(2) + "px";
  portraitPhoto.style.transform = "translate(" + left.toFixed(2) + "px," + top.toFixed(2) + "px)";
}

function resizeAtlas() {
  if (!atlasRenderer || !atlasCanvas) return;
  const w = atlasCanvas.clientWidth;
  const h = atlasCanvas.clientHeight;
  if (!w || !h) return;
  atlasCam.aspect = w / h;
  atlasCam.updateProjectionMatrix();
  atlasRenderer.setSize(w, h, false);
}

function paintAtlas(dt) {
  if (!atlasRenderer || !portraitEl || !teachEl) return;
  const vh = window.innerHeight;
  const top = portraitEl.getBoundingClientRect().top;
  const teachTop = teachEl.getBoundingClientRect().top;
  const enter = clamp01((vh * 0.92 - top) / (vh * 0.4));
  const leave = clamp01(teachTop / (vh * 0.4));
  const veil = enter * leave;
  atlasCanvas.style.opacity = veil.toFixed(3);
  if (atlasLabelRoot) atlasLabelRoot.style.opacity = veil.toFixed(3);
  let u = atlasProgress();
  if (reduced) {
    const awardsTop = awardsEl ? awardsEl.getBoundingClientRect().top : vh;
    if (teachTop < vh * 0.85) u = 1;
    else if (awardsTop < vh * 0.55) u = 0.83;
    else u = 0.68;
  }
  syncHello(u);
  const drawT = reduced ? 1 : smooth(clamp01((u - 0.03) / 0.18));
  const morph = reduced ? 1 : drawT;
  if (veil <= 0.001) {
    if (portraitPhoto) portraitPhoto.style.opacity = "0";
    return;
  }
  const meshFade = 1 - smooth(clamp01((u - 0.36) / 0.08));
  const globeOp = reduced ? 1 : smooth(clamp01((u - 0.36) / 0.08));
  const labelOp = reduced ? 1 : smooth(clamp01((u - 0.54) / 0.06));
  drawUniforms.uDraw.value = reduced ? 1 : drawT;
  drawUniforms.uOpacity.value = reduced ? 0 : meshFade;
  bust.visible = !reduced && meshFade > 0.01 && bustReady;
  globe.visible = globeOp > 0.01;
  globeMat.opacity = globeOp;
  globeMat.color.setRGB(0.82, 0.82, 0.82);
  landMat.opacity = globeOp;
  globeFillMat.opacity = globeOp;
  globeFillMat.depthWrite = globeOp > 0.15;
  const turn = reduced ? 0 : smooth(clamp01((u - 0.26) / 0.10));
  matchFrame();
  bustPose(turn);
  if (!reduced && u < 0.56) {
    // Zoom onto the eye, hold the globe there, then open out to the wide shot.
    if (u < 0.44) {
      atlasCamPos.lerpVectors(matchCam, eyeCamW, turn);
      atlasLook.lerpVectors(matchLook, eyeW, turn);
      globe.position.copy(eyeW);
      globe.scale.setScalar(EYE_GLOBE);
    } else {
      const o = smooth(clamp01((u - 0.44) / 0.12));
      atlasCamPos.lerpVectors(eyeCamW, wideCam, o);
      atlasLook.lerpVectors(eyeW, wideLook, o);
      globe.position.lerpVectors(eyeW, origin, o);
      globe.scale.setScalar(EYE_GLOBE + (1 - EYE_GLOBE) * o);
    }
  } else {
    const { a, b, t } = blendSpan(globeKeys, Math.max(u, 0.56));
    // The wide shot spins the globe. The zoom has to follow that spin,
    // or it lands west of the Denver dot.
    const follow = smooth(clamp01((u - 0.8) / 0.2));
    const spinDeg = globeSpin * 180 / Math.PI * follow;
    setLL(atlasCamPos, a.lat + (b.lat - a.lat) * t, a.lon + (b.lon - a.lon) * t + spinDeg, a.dist + (b.dist - a.dist) * t);
    setLL(atlasLook, a.lookLat + (b.lookLat - a.lookLat) * t, a.lookLon + (b.lookLon - a.lookLon) * t + spinDeg, a.lookR + (b.lookR - a.lookR) * t);
    globe.position.copy(origin);
    globe.scale.setScalar(1);
  }
  atlasCam.position.copy(atlasCamPos);
  atlasCam.lookAt(atlasLook);
  atlasCam.updateMatrixWorld();
  const shift = reduced ? 0 : portraitShift * (u < 0.44 ? 1 - turn : 0);
  atlasCam.updateProjectionMatrix();
  atlasCam.projectionMatrix.elements[8] = -shift;
  atlasCam.projectionMatrixInverse.copy(atlasCam.projectionMatrix).invert();
  placePortrait((1 - morph) * veil);
  const dist = atlasCam.position.length();
  if (u < 0.56) globeSpin = 0;
  else if (!reduced && u < 0.8 && dist > 3.2) globeSpin += (dt || 0) * 0.09;
  globe.rotation.y = globeSpin;
  globe.updateMatrixWorld(true);
  globeLight.position.copy(atlasCam.position);
  atlasCam.updateMatrixWorld();
  atlasCam.getWorldDirection(atlasCamN);
  atlasOut.copy(atlasCam.position).normalize();
  const w = atlasCanvas.clientWidth || 1;
  const h = atlasCanvas.clientHeight || 1;
  for (let i = 0; i < atlasPins.length; i++) {
    const pin = atlasPins[i];
    atlasCityW.copy(pin.city).applyMatrix4(globe.matrixWorld);
    atlasTmp.copy(atlasCityW).project(atlasCam);
    const csx = (atlasTmp.x * 0.5 + 0.5) * w;
    const csy = (-atlasTmp.y * 0.5 + 0.5) * h;
    let loR = 1.04;
    let hiR = 2.5;
    let tipR = 1.3;
    for (let k = 0; k < 7; k++) {
      const mid = (loR + hiR) * 0.5;
      const aim = dist < 3.1 ? pin.dirClose : pin.dir;
      atlasFace.copy(aim).multiplyScalar(mid).applyMatrix4(globe.matrixWorld);
      atlasTmp.copy(atlasFace).project(atlasCam);
      const px = (atlasTmp.x * 0.5 + 0.5) * w;
      const py = (-atlasTmp.y * 0.5 + 0.5) * h;
      if (Math.hypot(px - csx, py - csy) < (dist < 3.1 ? 52 : 76)) loR = mid;
      else hiR = mid;
      tipR = mid;
    }
    atlasFace.copy(dist < 3.1 ? pin.dirClose : pin.dir).multiplyScalar(tipR);
    const tipAttr = pin.line.geometry.attributes.position;
    tipAttr.setXYZ(0, pin.city.x, pin.city.y, pin.city.z);
    tipAttr.setXYZ(1, atlasFace.x, atlasFace.y, atlasFace.z);
    tipAttr.needsUpdate = true;
    atlasTipW.copy(atlasFace).applyMatrix4(globe.matrixWorld);
    atlasFace.copy(atlasCityW).sub(atlasCam.position).normalize();
    const inFront = atlasFace.dot(atlasCamN) > 0.2;
    const facing = atlasTmp.copy(atlasCityW).normalize().dot(atlasOut);
    const allowed = globeOp > 0.35 && labelOp > 0.01 && placeAllowed(pin.place, dist) && globe.scale.x > 0.92;
    atlasTmp.copy(atlasTipW).project(atlasCam);
    const x = (atlasTmp.x * 0.5 + 0.5) * w;
    const y = (-atlasTmp.y * 0.5 + 0.5) * h;
    const onScreen = atlasTmp.z < 1 && x > 8 && x < w - 8 && y > 8 && y < h - 8;
    const show = allowed && inFront && facing > 0.12 && onScreen;
    pin.mat.opacity = show ? globeOp * labelOp : 0;
    pin.line.visible = show;
    const alpha = show ? (labelOp * Math.min(1, (facing - 0.12) / 0.35)).toFixed(3) : "0";
    if (pin.el) {
      atlasTmp.copy(atlasCityW).project(atlasCam);
      const cx = (atlasTmp.x * 0.5 + 0.5) * w;
      const cy = (-atlasTmp.y * 0.5 + 0.5) * h;
      const sx = x - cx;
      const sy = y - cy;
      const sl = Math.hypot(sx, sy) || 1;
      const ax = x + (sx / sl) * 14;
      const ay = y + (sy / sl) * 14;
      const flip = sx < -0.5 || ax > w - 150;
      pin.el.style.transform = flip
        ? "translate(" + ax.toFixed(1) + "px," + ay.toFixed(1) + "px) translate(-100%,-50%)"
        : "translate(" + ax.toFixed(1) + "px," + ay.toFixed(1) + "px) translate(0,-50%)";
      pin.el.style.opacity = alpha;
    }
    if (pin.dot) {
      atlasTmp.copy(atlasCityW).project(atlasCam);
      const dx = (atlasTmp.x * 0.5 + 0.5) * w;
      const dy = (-atlasTmp.y * 0.5 + 0.5) * h;
      pin.dot.style.transform = "translate(" + dx.toFixed(1) + "px," + dy.toFixed(1) + "px)";
      pin.dot.style.opacity = alpha;
    }
  }
  atlasRenderer.render(atlasScene, atlasCam);
}

function wireDrawn(geo) {
  const wire = new THREE.WireframeGeometry(geo);
  const pos = wire.getAttribute("position");
  const n = pos.count;
  const along = new Float32Array(n);
  const birth = new Float32Array(n);
  const ox = 0;
  const oy = 0.08;
  const oz = 0;
  for (let i = 0; i < n; i += 2) {
    const ax = pos.getX(i);
    const ay = pos.getY(i);
    const az = pos.getZ(i);
    const bx = pos.getX(i + 1);
    const by = pos.getY(i + 1);
    const bz = pos.getZ(i + 1);
    const da = (ax - ox) * (ax - ox) + (ay - oy) * (ay - oy) + (az - oz) * (az - oz);
    const db = (bx - ox) * (bx - ox) + (by - oy) * (by - oy) + (bz - oz) * (bz - oz);
    // Grow outward, from the end nearer the chest to the end farther away.
    if (da <= db) {
      along[i] = 0;
      along[i + 1] = 1;
    } else {
      along[i] = 1;
      along[i + 1] = 0;
    }
    const h = Math.sin(ax * 127.1 + ay * 311.7 + az * 74.7 + bx * 19.19) * 43758.5453;
    const birthN = h - Math.floor(h);
    birth[i] = birth[i + 1] = birthN * 0.34;
  }
  wire.setAttribute("aAlong", new THREE.BufferAttribute(along, 1));
  wire.setAttribute("aBirth", new THREE.BufferAttribute(birth, 1));
  return wire;
}

function dressLines(geo) {
  const pos = geo.getAttribute("position");
  const n = pos.count;
  const along = new Float32Array(n);
  const birth = new Float32Array(n);
  const oy = 0.08;
  for (let i = 0; i < n; i += 2) {
    const ax = pos.getX(i);
    const ay = pos.getY(i);
    const az = pos.getZ(i);
    const bx = pos.getX(i + 1);
    const by = pos.getY(i + 1);
    const bz = pos.getZ(i + 1);
    const da = ax * ax + (ay - oy) * (ay - oy) + az * az;
    const db = bx * bx + (by - oy) * (by - oy) + bz * bz;
    if (da <= db) {
      along[i] = 0;
      along[i + 1] = 1;
    } else {
      along[i] = 1;
      along[i + 1] = 0;
    }
    const h = Math.sin(ax * 127.1 + ay * 311.7 + az * 74.7 + bx * 19.19) * 43758.5453;
    birth[i] = birth[i + 1] = (h - Math.floor(h)) * 0.34;
  }
  geo.setAttribute("aAlong", new THREE.BufferAttribute(along, 1));
  geo.setAttribute("aBirth", new THREE.BufferAttribute(birth, 1));
  return geo;
}

if (atlasRenderer) {
  new GLTFLoader().load("assets/martin-portrait-wire-fit.glb?v=132", (gltf) => {
    const root = gltf.scene;
    // This file is already in the bust's unit space, and it hangs below the
    // original box so the sweater can reach the photograph. Centering it
    // again would shrink that extension and shift the eye.
    let fitted = false;
    root.traverse((obj) => {
      if (obj.name === "martin-portrait-wire-fit") fitted = true;
    });
    if (!fitted) {
      const box = new THREE.Box3().setFromObject(root);
      const size = new THREE.Vector3();
      const center = new THREE.Vector3();
      box.getSize(size);
      box.getCenter(center);
      root.position.sub(center);
      root.scale.setScalar(1 / (Math.max(size.x, size.y, size.z) || 1));
    }
    root.updateMatrixWorld(true);
    root.traverse((obj) => {
      if (!obj.geometry) return;
      const geo = obj.geometry.clone();
      geo.applyMatrix4(obj.matrixWorld);
      let drawn = null;
      if (obj.isMesh) drawn = wireDrawn(geo);
      else if (obj.isLineSegments || obj.isLine) drawn = dressLines(geo);
      else return;
      const lines = new THREE.LineSegments(drawn, meshMat);
      lines.frustumCulled = false;
      lines.renderOrder = 1;
      bust.add(lines);
    });
    const acc = new THREE.Vector3();
    const sample = [];
    bust.updateMatrixWorld(true);
    bust.traverse((obj) => {
      const pos = obj.geometry && obj.geometry.attributes.position;
      if (!pos) return;
      for (let i = 0; i < pos.count; i += 6) {
        const y = pos.getY(i);
        if (y < 0.14) continue;
        sample.push(pos.getX(i), y, pos.getZ(i));
        acc.x += pos.getX(i);
        acc.y += y;
        acc.z += pos.getZ(i);
      }
    });
    const n = sample.length / 3;
    if (n > 8) {
      acc.multiplyScalar(1 / n);
      const dist = [];
      for (let i = 0; i < n; i++) {
        const dx = sample[i * 3] - acc.x;
        const dy = sample[i * 3 + 1] - acc.y;
        const dz = sample[i * 3 + 2] - acc.z;
        dist.push(Math.hypot(dx, dy, dz));
      }
      dist.sort((a, b) => a - b);
      headLocal.copy(acc);
      headRadius = dist[Math.floor(dist.length * 0.72)] || headRadius;
    }
    bustReady = true;
  });
  resizeAtlas();
}

const caseFilms = Array.from(document.querySelectorAll(".frame--case")).map((el) => ({
  el,
  zoom: el.querySelector(".case__zoom"),
  wrap: el.querySelector(".case__tile-wrap"),
  tile: el.querySelector(".case__tile"),
  logo: el.querySelector(".case__logo"),
  scrim: el.querySelector(".case__scrim"),
  beats: Array.from(el.querySelectorAll(".case__beat")),
  video: el.querySelector("video"),
  frame: el.querySelector("iframe"),
}));

function syncLifeCollage() {
  const el = document.getElementById("life");
  const img = el && el.querySelector(".life-collage img");
  if (!img) return;
  if (reduced) {
    img.style.setProperty("--reveal", "130%");
    return;
  }
  const box = el.getBoundingClientRect();
  const vh = window.innerHeight;
  const start = vh * 0.98;
  const end = vh - box.height;
  const travel = Math.max(1, start - end);
  const p = smooth(clamp01((start - box.top) / travel));
  img.style.setProperty("--reveal", (p * 130).toFixed(1) + "%");
}

function paintLife() {
  if (!lifeEl || !lifeOrbit || !lifeShots.length || reduced) return;
  const span = lifeEl.offsetHeight - window.innerHeight;
  const p = span <= 0 ? 0 : clamp01(-lifeEl.getBoundingClientRect().top / span);
  const enter = easeOut(clamp01(p / 0.1));
  const leave = smooth(clamp01((p - 0.84) / 0.16));
  const spin = clamp01((p - 0.1) / 0.72);
  const yaw = spin * 360;
  const presence = enter * (1 - leave);
  lifeOrbit.style.opacity = presence.toFixed(3);
  lifeOrbit.style.transform = "rotateY(" + yaw.toFixed(2) + "deg)";
  if (lifeRing) lifeRing.style.transform = "scale(" + (0.9 + 0.1 * presence).toFixed(3) + ")";
  const step = 360 / lifeShots.length;
  for (let i = 0; i < lifeShots.length; i++) {
    let ang = yaw - i * step;
    ang = ((ang % 360) + 360) % 360;
    if (ang > 180) ang -= 360;
    const face = Math.cos((ang * Math.PI) / 180);
    lifeShots[i].style.opacity = clamp01((face - 0.62) / 0.28).toFixed(3);
  }
}

function caseProgress(el) {
  const span = el.offsetHeight - window.innerHeight;
  if (span <= 0) return 0;
  return clamp01(-el.getBoundingClientRect().top / span);
}

function syncCaseVideo(video, p, scrub) {
  if (!video) return;
  video.muted = true;
  video.playsInline = true;
  if (scrub && scrub.play) {
    video.controls = false;
    video.playbackRate = 1;
    const at = scrub.at || 0;
    video.loop = at <= 0;
    video.dataset.at = String(at);
    const beforeCue = at > 0.2 && (video.currentTime || 0) < at - 0.35;
    if (!video.dataset.bound) {
      video.dataset.bound = "1";
      video.addEventListener("loadedmetadata", function () {
        const cue = Number(video.dataset.at || 0);
        if (cue > 0.2 && (video.currentTime || 0) < cue - 0.35) {
          try { video.currentTime = cue; } catch (err) { /* seek before the range is ready */ }
        }
      });
      video.addEventListener("ended", function () {
        const restart = Number(video.dataset.at || 0);
        try { video.currentTime = restart; } catch (err) { /* seek before metadata */ }
        if (restart <= 0.2) {
          const again = video.play();
          if (again && again.catch) again.catch(function () {});
        }
      });
    }
    if (!scrub.visible) {
      if (!video.paused) video.pause();
      return;
    }
    if (beforeCue) {
      if (!video.paused) video.pause();
      if (video.seeking || video.dataset.cueing === "1") return;
      if (video.readyState < 1) return;
      video.dataset.cued = "0";
      video.dataset.cueing = "1";
      const onSeeked = function () {
        video.removeEventListener("seeked", onSeeked);
        video.dataset.cueing = "0";
        const cue = Number(video.dataset.at || 0);
        if ((video.currentTime || 0) >= cue - 0.35) {
          video.dataset.cued = "1";
          if (scrub.visible) {
            const pending = video.play();
            if (pending && pending.catch) pending.catch(function () {});
          }
        }
      };
      video.addEventListener("seeked", onSeeked);
      try { video.currentTime = at; } catch (err) {
        video.dataset.cueing = "0";
        video.removeEventListener("seeked", onSeeked);
      }
      return;
    }
    if (video.paused && !video.seeking) {
      const pending = video.play();
      if (pending && pending.catch) pending.catch(function () {});
    }
    return;
  }
  video.loop = false;
  if (scrub) {
    const dur = video.duration;
    const known = dur && isFinite(dur) ? dur : 0;
    if ((scrub.start || 0) > 0.2 && !known) {
      if (video.readyState < 1) {
        try { video.load(); } catch (err) { /* already loading */ }
      }
      return;
    }
    const start = known ? Math.min(scrub.start || 0, Math.max(0, known - 0.2)) : 0;
    const length = scrub.length || 5;
    const endAt = known ? Math.min(start + length, Math.max(start, known - 0.04)) : start + length;
    const u = clamp01((p - scrub.p0) / Math.max(0.01, scrub.p1 - scrub.p0));
    const t = start + u * Math.max(0, endAt - start);
    if (p < scrub.p0 || p > scrub.p1) {
      if (!video.paused) video.pause();
      return;
    }
    const end = video.seekable && video.seekable.length ? video.seekable.end(video.seekable.length - 1) : 0;
    if (end >= t - 0.05 && !video.seeking && Math.abs((video.currentTime || 0) - t) > 0.07) {
      try { video.currentTime = t; } catch (err) { /* seek before metadata */ }
    } else if ((video.currentTime || 0) + 0.15 < t && video.paused) {
      const pending = video.play();
      if (pending && pending.catch) pending.catch(function () {});
    }
    return;
  }
  const visible = p > 0.18 && p < 0.86;
  if (!visible) {
    if (!video.paused) video.pause();
    if (p <= 0.16 && video.currentTime > 0.05) {
      try { video.currentTime = 0; } catch (err) { /* seek before metadata */ }
    }
    return;
  }
  const dur = video.duration;
  const limit = Math.min(3.2, (dur && isFinite(dur) ? dur : 3.2) - 0.04);
  if (video.currentTime >= limit) {
    if (!video.paused) video.pause();
    return;
  }
  if (video.paused) {
    const pending = video.play();
    if (pending && pending.catch) pending.catch(function () {});
  }
}

const practicesEl = document.getElementById("practices");
const practiceCards = practicesEl ? Array.from(practicesEl.querySelectorAll(".practice")) : [];

const STARS_LINE = "When I am\nnot working\nI love to train\nand to climb";
const starsEl = document.getElementById("stars");
const starsType = document.getElementById("stars-type");
const starsCaret = document.getElementById("stars-caret");

function syncStars() {
  if (!starsEl || !starsType) return;
  const imgs = starsEl.querySelectorAll(".stars__row img");
  if (reduced) {
    starsType.textContent = STARS_LINE;
    if (starsCaret) starsCaret.style.visibility = "hidden";
    for (let i = 0; i < imgs.length; i++) imgs[i].style.opacity = "1";
    return;
  }
  const span = Math.max(1, starsEl.offsetHeight - window.innerHeight);
  const p = clamp01(-starsEl.getBoundingClientRect().top / span);
  const typeT = clamp01(p / 0.34);
  const n = typeT >= 1 ? STARS_LINE.length : Math.floor(typeT * STARS_LINE.length);
  starsType.textContent = STARS_LINE.slice(0, n);
  if (starsCaret) starsCaret.style.visibility = n > 0 && n < STARS_LINE.length ? "visible" : "hidden";
  for (let i = 0; i < imgs.length; i++) {
    const start = 0.38 + i * 0.09;
    imgs[i].style.opacity = smooth(clamp01((p - start) / 0.1)).toFixed(3);
  }
}

function paintPractices() {
  if (!practicesEl || !practiceCards.length) return;
  const show = function (card, plate, ink) {
    card.style.setProperty("--plate", plate.toFixed(3));
    card.style.setProperty("--shade", (plate * 0.1).toFixed(3));
    card.style.setProperty("--ink", ink.toFixed(3));
    const lines = card.querySelectorAll(".h-line");
    for (let n = 0; n < lines.length; n++) lines[n].style.setProperty("--rise", ink.toFixed(3));
  };
  if (reduced || window.innerWidth <= 900) {
    for (let i = 0; i < practiceCards.length; i++) show(practiceCards[i], 1, 1);
    return;
  }
  const span = Math.max(1, practicesEl.offsetHeight - window.innerHeight);
  const p = clamp01(-practicesEl.getBoundingClientRect().top / span);
  const windows = [
    [0.02, 0.14, 0.14, 0.32],
    [0.34, 0.46, 0.46, 0.64],
    [0.66, 0.78, 0.78, 0.94]
  ];
  for (let i = 0; i < practiceCards.length; i++) {
    const w = windows[i];
    const plate = smooth(clamp01((p - w[0]) / (w[1] - w[0])));
    const ink = smooth(clamp01((p - w[2]) / (w[3] - w[2])));
    show(practiceCards[i], plate, ink);
  }
}

function paintCases() {
  if (!caseFilms.length) return;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  for (let i = 0; i < caseFilms.length; i++) {
    const film = caseFilms[i];
    const p = caseProgress(film.el);
    if (reduced) {
      syncCaseVideo(film.video, 0.4, film.el.id === "yca"
        ? { play: true, visible: true, at: 0 }
        : null);
      continue;
    }
    const space = film.el.id === "space";
    const yca = film.el.id === "yca";
    const cepres = film.el.id === "cepres";
    const parked = space || yca || cepres;
    const logoIn = easeOut(clamp01(p / (space || cepres ? 0.08 : 0.12)));
    const videoIn = easeOut(clamp01((p - (space || cepres ? 0.1 : 0.16)) / (space || cepres ? 0.1 : 0.14)));
    const logoOut = parked ? 0 : smooth(clamp01((p - 0.32) / 0.1));
    const zoomT = smooth(clamp01((p - (space || cepres ? 0.46 : 0.38)) / (space || cepres ? 0.2 : 0.18)));
    const narrow = vw <= 1100;
    const textA = easeOut(clamp01((p - (narrow ? 0.06 : (space || cepres ? 0.68 : 0.58))) / 0.1));
    const out = smooth(clamp01((p - (space || cepres ? 0.88 : 0.84)) / 0.12));
    const tileW = film.tile.offsetWidth || 1;
    const tileH = film.tile.offsetHeight || 1;
    const fill = Math.max(vw / tileW, vh / tileH) * 1.06;
    const scale = 1 + (fill - 1) * zoomT;
    if (film.frame && !film.frame.getAttribute("src")) {
      const top = film.el.getBoundingClientRect().top;
      if (top < vh * 1.25 && top > -film.el.offsetHeight) film.frame.src = film.frame.dataset.src;
    }
    const lift = film.logo.classList.contains("case__logo--suite") ? 0 : videoIn * (1 - zoomT) * 24;
    const drop = (1 - videoIn) * 10 + videoIn * (1 - zoomT) * 10;
    const shown = logoIn * (1 - logoOut);
    film.logo.style.opacity = shown.toFixed(3);
    if (yca) {
      const mark = film.logo.querySelector(".case__suite-mark");
      const partners = film.logo.querySelector(".case__suite-partners");
      const markIn = easeOut(clamp01(p / 0.14));
      film.logo.style.opacity = "1";
      if (mark) mark.style.opacity = markIn.toFixed(3);
      if (partners) {
        const logos = partners.querySelectorAll("img");
        for (let n = 0; n < logos.length; n++) {
          const inn = easeOut(clamp01((p - 0.05 - n * 0.028) / 0.07));
          logos[n].style.opacity = (inn * (1 - videoIn)).toFixed(3);
        }
      }
    }
    if (parked) {
      const park = (space || cepres) ? smooth(clamp01((p - 0.1) / 0.22)) : videoIn;
      const shift = -50 * (1 - park);
      const intro = yca ? easeOut(clamp01(p / 0.14)) : logoIn;
      const sc = (0.94 + 0.06 * intro) * (1 - 0.2 * park);
      const topPct = yca ? 50 : 42;
      film.logo.style.transformOrigin = "top left";
      film.logo.style.setProperty("--park", park.toFixed(3));
      const edge = yca ? park * 1.15 : 0;
      film.logo.style.left = "calc(" + (50 * (1 - park)).toFixed(3) + "% + " + edge.toFixed(2) + "rem)";
      if (window.innerWidth <= 1100) {
        const root = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
        film.logo.style.top = ((topPct / 100) * (1 - park) * vh + edge * root) + "px";
      } else {
        film.logo.style.top = "calc(" + (topPct * (1 - park)).toFixed(3) + "% + " + edge.toFixed(2) + "rem)";
      }
      if (yca) {
        const plate = film.logo.querySelector(".case__suite-plate");
        const markH = plate ? plate.offsetHeight : 0;
        const inset = plate ? Math.max(0, (film.logo.offsetWidth - plate.offsetWidth) / 2) : 0;
        const yPx = (1 - park) * -(markH / 2);
        film.logo.style.transformOrigin = (inset * park).toFixed(2) + "px 0";
        film.logo.style.transform = "translate(calc(" + shift.toFixed(2) + "% - " + (inset * park).toFixed(2) + "px), " + yPx.toFixed(2) + "px) scale(" + sc.toFixed(3) + ")";
      } else {
        film.logo.style.transform = "translate(" + shift.toFixed(2) + "%, " + shift.toFixed(2) + "%) scale(" + sc.toFixed(3) + ")";
      }
    } else {
      film.logo.style.transform = "translate(-50%, calc(-50% - " + lift.toFixed(2) + "vh)) scale(" + (0.94 + 0.06 * logoIn).toFixed(3) + ")";
    }
    film.wrap.style.opacity = videoIn.toFixed(3);
    if (narrow) {
      film.wrap.style.transform = "none";
      film.tile.style.transform = "none";
      film.beats[0].style.transform = "none";
      film.zoom.style.transform = "none";
      const stage = film.el.querySelector(".case");
      if (stage) stage.style.top = Math.min(0, vh - stage.offsetHeight) + "px";
    } else {
      film.wrap.style.transform = "translate(-50%, calc(-50% + " + drop.toFixed(2) + "vh))";
      film.tile.style.transform = "scale(" + scale.toFixed(4) + ")";
      film.beats[0].style.transform = "translateY(" + ((1 - textA) * 28).toFixed(2) + "vh)";
      film.zoom.style.transform = "scale(" + (1 - out * 0.94).toFixed(4) + ")";
    }
    film.tile.style.borderColor = "rgba(1,1,1," + (0.16 * (1 - zoomT)).toFixed(3) + ")";
    film.scrim.style.opacity = textA.toFixed(3);
    film.beats[0].style.opacity = textA.toFixed(3);
    film.zoom.style.opacity = (1 - smooth(clamp01((out - 0.45) / 0.55))).toFixed(3);
    const box = film.el.getBoundingClientRect();
    const onScreen = box.top < vh * 0.92 && box.bottom > vh * 0.08;
    syncCaseVideo(film.video, p, (space || yca || cepres)
      ? { play: true, visible: onScreen, at: 0 }
      : null);
  }
}

function syncAbout() {
  if (!aboutSteps.length) return;
  const mark = window.scrollY + window.innerHeight * 0.46;
  let current = aboutSteps[0].dataset.about;
  for (let i = 0; i < aboutSteps.length; i++) {
    const top = aboutSteps[i].getBoundingClientRect().top + window.scrollY;
    if (top <= mark) current = aboutSteps[i].dataset.about;
  }
  for (let i = 0; i < aboutPanels.length; i++) {
    aboutPanels[i].classList.toggle("is-on", aboutPanels[i].dataset.panel === current);
  }
}

const satGroup = new THREE.Group();
const satBay = new THREE.Object3D();
satGroup.visible = false;
scene.add(satGroup);
const satWire = new THREE.MeshBasicMaterial({ color: "#ffffff", wireframe: true, transparent: true });
const satDark = new THREE.MeshStandardMaterial({ color: "#141618", metalness: 0.25, roughness: 0.62, transparent: true });
(function buildSatellite() {
  const bus = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.85, 1.05, 2, 2, 2), satWire);
  bus.position.y = 0.2;
  const core = new THREE.Mesh(new THREE.BoxGeometry(0.92, 1.15, 0.64, 2, 2, 2), satWire);
  core.position.y = 0.16;
  const rib = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.04, 0.72, 2, 1, 2), satWire);
  rib.position.y = 0.2;
  const panelGeo = new THREE.BoxGeometry(2.5, 1.15, 0.04);
  const panelL = new THREE.Mesh(panelGeo, satDark);
  panelL.position.set(-2.15, 0.35, 0);
  const panelR = panelL.clone();
  panelR.position.x = 2.15;
  const yokeL = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.05, 0.08), satWire);
  yokeL.position.set(-1.0, 0.42, 0);
  const yokeR = yokeL.clone();
  yokeR.position.x = 1.0;
  const lip = new THREE.Mesh(new THREE.BoxGeometry(0.92, 1.05, 0.06, 2, 2, 1), satWire);
  lip.position.set(0, 0.02, 0.2);
  satGroup.add(bus, core, rib, panelL, panelR, yokeL, yokeR, lip);
  satBay.position.set(0, 0.05, 0);
  satGroup.add(satBay);
  satGroup.scale.setScalar(0.8);
})();

const padGroup = new THREE.Group();
padGroup.visible = false;
scene.add(padGroup);
function padFadeMap(kind) {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const g = canvas.getContext("2d");
  const shade = kind === "tower"
    ? g.createLinearGradient(0, 256, 0, 0)
    : g.createRadialGradient(128, 128, 8, 128, 128, 128);
  shade.addColorStop(0, "rgba(36,36,36,0.85)");
  shade.addColorStop(0.42, "rgba(14,14,14,0.28)");
  shade.addColorStop(1, "rgba(1,1,1,0)");
  g.fillStyle = shade;
  g.fillRect(0, 0, 256, 256);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
function padMat(kind) {
  return new THREE.MeshBasicMaterial({
    map: padFadeMap(kind),
    transparent: true,
    depthWrite: false,
    toneMapped: false
  });
}
const padDeckMat = padMat("deck");
const padTankMat = padMat("tank");
const padHoldMat = padMat("tower");
(function buildPad() {
  const deck = new THREE.Mesh(new THREE.BoxGeometry(48, 0.6, 30), padDeckMat);
  deck.position.y = -0.3;
  padGroup.add(deck);
  const spine = new THREE.Mesh(new THREE.BoxGeometry(1.1, 58, 1.4), padHoldMat);
  spine.position.set(-5.4, 29, -1.2);
  const cradle = new THREE.Mesh(new THREE.BoxGeometry(0.35, 48, 0.35), padHoldMat);
  cradle.position.set(-3.6, 26, -0.4);
  cradle.rotation.z = 0.08;
  padGroup.add(spine, cradle);
  for (let i = 0; i < 3; i++) {
    const tank = new THREE.Mesh(new THREE.SphereGeometry(2.2, 28, 18), padTankMat);
    tank.position.set(14, 2.2, -7 + i * 5.5);
    padGroup.add(tank);
  }
})();

const falconRig = new THREE.Group();
falconRig.visible = false;
scene.add(falconRig);
const falconClip = new THREE.Plane(new THREE.Vector3(0, 0, -1), 0.35);
const falconWireMat = new THREE.MeshBasicMaterial({ color: "#ffffff", wireframe: true, transparent: true });
let falconStarted = false;
let falconReady = false;
let falconWire = null;
let rocketLoop = 0;
let spinLatch = null;
const falconSolidMats = [];
const outlookTmp = new THREE.Vector3();
const outlookCam = new THREE.Vector3();

function loadFalcon() {
  if (falconStarted) return;
  falconStarted = true;
  new GLTFLoader().load("assets/falcon.glb", (gltf) => {
    const model = gltf.scene;
    model.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(model);
    model.position.y -= box.min.y;
    falconWireMat.clippingPlanes = [falconClip];
    model.traverse((node) => {
      if (!node.isMesh) return;
      const list = Array.isArray(node.material) ? node.material : [node.material];
      list.forEach((mat) => {
        mat.transparent = true;
        mat.opacity = 0;
        mat.side = THREE.DoubleSide;
        mat.clippingPlanes = [falconClip];
        falconSolidMats.push(mat);
      });
    });
    // These two parts sit on the vessel centerline and cut through the dome.
    model.traverse((node) => {
      if (node.name === "Interstage_Engine_holder" || node.name === "Interstage_Engine_holder_extra") node.visible = false;
    });
    const lines = model.clone();
    lines.traverse((node) => {
      if (node.isMesh) node.material = falconWireMat;
    });
    falconWire = lines;
    falconRig.add(model, lines);
    falconReady = true;
  });
}

function outlookProgress() {
  const sat = document.getElementById("outlook-sat");
  const pad = document.getElementById("outlook-pad");
  const out = document.getElementById("outlook-out");
  if (!sat || !pad) return -1;
  if (reduced) {
    const padTop = pad.getBoundingClientRect().top;
    const satTop = sat.getBoundingClientRect().top;
    if (out && out.getBoundingClientRect().top < window.innerHeight * 0.4) return 1;
    if (padTop < window.innerHeight * 0.72) return 0.7;
    if (satTop < window.innerHeight * 0.72) return 0.2;
    return -1;
  }
  const tail = out || pad;
  const start = sat.offsetTop;
  const end = tail.offsetTop + tail.offsetHeight - window.innerHeight;
  return (window.scrollY - start) / Math.max(1, end - start);
}

function poseOutlook(u) {
  if (u > -0.35) loadFalcon();
  const active = u >= 0;
  const padCopy = document.getElementById("outlook-pad");
  if (!active) {
    satGroup.visible = false;
    padGroup.visible = false;
    falconRig.visible = false;
    padGroup.rotation.y = 0;
    falconRig.rotation.y = 0;
    root.position.set(0, 0, 0);
    root.scale.setScalar(1);
    rocketLoop = 0;
    spinLatch = null;
    const satCopy = document.querySelector("#outlook-sat .sat-copy");
    if (satCopy) satCopy.style.setProperty("--sat", "0");
    if (padCopy) {
      padCopy.style.setProperty("--copy", "0");
      delete padCopy.dataset.copyReady;
      padCopy.querySelectorAll(".h-line").forEach((line) => line.classList.remove("is-in"));
    }
    document.body.style.background = "";
    if (camera.far !== 40) {
      camera.far = 40;
      camera.updateProjectionMatrix();
    }
    return 0;
  }
  const pose = Math.min(u, 1);
  if (spinLatch == null) spinLatch = idleSpin;
  const tau = Math.PI * 2;
  const rem = ((spinLatch % tau) + tau) % tau;
  const spinGoal = spinLatch + (rem < 0.03 ? 0 : tau - rem);
  const settle = smooth(clamp01(pose / 0.07));
  const yawNow = spinLatch + (spinGoal - spinLatch) * settle;
  const rise = smooth(clamp01((pose - 0.07) / 0.05));
  const stand = smooth(clamp01((pose - 0.13) / 0.06));
  const marry = smooth(clamp01((pose - 0.20) / 0.18));
  const zoom = smooth(clamp01((pose - 0.42) / 0.06));
  const cross = smooth(clamp01((pose - 0.48) / 0.22));
  const wideLinear = clamp01((pose - 0.72) / 0.14);
  const wide = Math.pow(smooth(wideLinear), 1.7);
  const filled = smooth(clamp01((wide - 0.15) / 0.85));
  const deckIn = smooth(clamp01((wide - 0.62) / 0.38));
  const holdIn = smooth(clamp01((wide - 0.94) / 0.06));
  const scripted = clamp01((pose - 0.86) / 0.08) * Math.PI * 2;
  const looping = pose >= 0.94;
  const spin = looping ? scripted + rocketLoop : scripted;
  const wash = smooth(clamp01((pose - 0.94) / 0.06));
  const satYaw = 0.32;
  const satOpacity = marry * (1 - smooth(clamp01(cross / 0.28)));
  satWire.opacity = satOpacity;
  satDark.opacity = satOpacity;
  satGroup.visible = satOpacity > 0.02;
  satGroup.position.set(0, 0.05, 0);
  satGroup.rotation.order = "YXZ";
  satGroup.rotation.set((1 - marry) * -0.22, satYaw + (1 - marry) * (Math.PI / 2), (1 - marry) * 0.4);
  satGroup.updateMatrix();
  satBay.updateWorldMatrix(true, false);
  satBay.getWorldPosition(outlookTmp);
  const centerY = 1.18;
  const rocketMount = new THREE.Vector3(0, 45.6, 0);
  rocketMount.applyAxisAngle(new THREE.Vector3(0, 1, 0), spin);
  const climb = smooth(clamp01((cross - 0.16) / 0.84));
  const here = new THREE.Vector3(0, centerY * rise, 0).lerp(outlookTmp, marry).lerp(rocketMount, climb);
  root.position.copy(here);
  const satScale = 0.29;
  const rocketScale = 0.34;
  root.scale.setScalar(1 + (satScale - 1) * marry + (rocketScale - satScale) * climb);
  root.rotation.order = "XYZ";
  const upright = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, Math.PI / 2));
  if (marry <= 0) {
    root.rotation.set(0, 0, stand * Math.PI / 2);
    if (settle < 1) root.rotateY(yawNow);
  } else if (cross <= 0) {
    root.quaternion.copy(upright).slerp(satGroup.quaternion, marry);
  } else {
    root.quaternion.copy(satGroup.quaternion).slerp(upright, climb);
  }
  root.quaternion.premultiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), spin));
  const rocketIn = smooth(clamp01(cross / 0.2)) * (1 - wash);
  const skin = filled > 0.98;
  falconClip.constant = 0.7 + wide * 0.55;
  falconWireMat.clippingPlanes = skin ? [] : [falconClip];
  falconWireMat.opacity = (1 - filled) * rocketIn;
  falconWireMat.depthWrite = filled < 0.04;
  falconSolidMats.forEach((mat) => {
    mat.clippingPlanes = skin ? [] : [falconClip];
    mat.opacity = filled * rocketIn;
  });
  if (falconWire) falconWire.visible = filled < 0.98 && rocketIn > 0.02;
  falconRig.visible = rocketIn > 0.02 && falconReady;
  falconRig.rotation.y = spin;
  padGroup.visible = (deckIn > 0.02 || holdIn > 0.02) && falconReady && wash < 0.98;
  padGroup.rotation.y = spin;
  const padFade = 1 - wash;
  padDeckMat.opacity = deckIn * padFade * 0.52;
  padTankMat.opacity = deckIn * padFade * 0.44;
  padHoldMat.opacity = holdIn * padFade * 0.4;
  if (camera.far !== 500) {
    camera.far = 500;
    camera.updateProjectionMatrix();
  }
  const look = new THREE.Vector3(0, centerY, 0).lerp(here, Math.max(rise, marry, zoom));
  // Pad bottom sits on the background seam. That seam is 85% down the frame
  // once the floor wash has settled (0.66 + 0.07 + 0.12).
  if (wide > 0) look.lerp(new THREE.Vector3(0, 33.6, 0), wide);
  const satCam = new THREE.Vector3(2.4, 0.55, 5.6);
  const level = smooth(clamp01((climb - 0.58) / 0.42));
  const followOff = new THREE.Vector3(0.25, -1.7, 0.7).lerp(new THREE.Vector3(0.75, 0.05, 2.7), level);
  const followCam = here.clone().add(followOff);
  const wideCamPos = new THREE.Vector3(102, 18, 136);
  outlookCam.copy(new THREE.Vector3(0, 0, 7.1)).lerp(satCam, marry);
  if (zoom > 0) outlookCam.lerp(followCam, zoom);
  if (wide > 0) outlookCam.lerp(wideCamPos, wide);
  camera.position.copy(outlookCam);
  camera.lookAt(look);
  const satCopy = document.querySelector("#outlook-sat .sat-copy");
  if (satCopy) {
    const seated = reduced ? 1 : smooth(clamp01((marry - 0.9) / 0.1));
    const satOut = reduced ? 0 : smooth(clamp01((pose - 0.43) / 0.05));
    satCopy.style.setProperty("--sat", String(seated * (1 - satOut)));
  }
  if (padCopy) {
    const copyIn = smooth(clamp01((cross - 0.02) / 0.05));
    const copyOut = smooth(clamp01((pose - 0.9) / 0.08));
    padCopy.style.setProperty("--copy", String(copyIn * (1 - copyOut)));
    const words = padCopy.querySelectorAll(".stack-word");
    words.forEach((line, i) => {
      line.classList.toggle("is-on", climb >= (i + 1) / (words.length + 0.4));
    });
    const stacked = climb >= words.length / (words.length + 0.4);
    padCopy.style.setProperty("--subs", String((stacked ? smooth(clamp01((climb - 0.9) / 0.1)) : 0) * (1 - copyOut)));
  }
  document.body.style.background = wash > 0.02 ? "#ffffff" : "";
  return wash;
}

function frame(now) {
  const dt = Math.min(0.05, (now - lastFrame) / 1000);
  lastFrame = now;
  const t = progress();
  const state = reduced
    ? { pos: [0.12, 0, 7.1], wire: 0, face: 0, form: 1, spin: 0, seat: 1, spread: 0, vshow: 1, vseat: 1, weld: 1, wrap: 1, yaw: 0, boss: 1, beat: "05 · Together", line: "All of it, together." }
    : poseAt(t);
  const atEnd = !reduced && t >= 0.999;
  const outlookU = outlookProgress();
  const outlookOn = outlookU >= 0;
  if (outlookU >= 0.94) rocketLoop += dt * (Math.PI * 2 / 42);
  else rocketLoop = 0;
  if (atEnd && !outlookOn) {
    idleSpin += dt * (Math.PI * 2 / 24);
    glowTime = Math.min(3, glowTime + dt);
  } else if (!outlookOn) {
    idleSpin = 0;
    if (!atEnd) glowTime = 0;
  }
  if ((atEnd || reduced) && document.documentElement.dataset.spin !== "1") {
    document.documentElement.dataset.spin = "1";
    window.dispatchEvent(new Event("vesselspin"));
  }
  state.idle = idleSpin;
  state.drop = codaDrop();
  // End hold only. Clears the centered culmination line. Earlier beats stay put.
  state.nudge = (atEnd || reduced ? 0.72 : 0) * (reduced ? 1 : state.drop);
  const glow = reduced ? 1 : glowTime / 3;
  syncAbout();
  syncAwards();
  syncEnd(now);
  syncTeach();
  syncQuotes();
  paintCity();
  paintAtlas(dt);
  paintCases();
  paintPractices();
  syncStars();
  syncLifeCollage();
  paintLife();
  apply(state);
  const wireIn = paintSheet(t);
  if (!reduced) {
    lineMat.opacity = state.wire * wireIn;
    drawingFlat.visible = state.wire * wireIn > 0.02;
  }
  alignBlueprint(t);
  const wash = poseOutlook(outlookU);
  paintBackground(glow, atEnd || reduced ? state.drop : 0, (atEnd || reduced ? 0.12 : 0) * (reduced ? 1 : state.drop), wash || 0);
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  resizeAtlas();
});

frame();
