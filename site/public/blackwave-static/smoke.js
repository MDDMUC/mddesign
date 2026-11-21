/* Hero atmosphere: Pavel Dobryakov's WebGL fluid (MIT), via webgl-fluid. */
import WebGLFluid from "./assets/webgl-fluid.mjs?v=2";

const hero = document.querySelector(".frame--hero");
const stage = document.querySelector(".hero__stage");
if (hero && stage && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const canvas = document.createElement("canvas");
  canvas.className = "hero__smoke";
  canvas.setAttribute("aria-hidden", "true");
  stage.appendChild(canvas);

  WebGLFluid(canvas, {
    TRIGGER: "hover",
    IMMEDIATE: true,
    AUTO: true,
    INTERVAL: 90,
    SIM_RESOLUTION: 128,
    DYE_RESOLUTION: 1024,
    DENSITY_DISSIPATION: 0.995,
    VELOCITY_DISSIPATION: 0.99,
    PRESSURE: 0.8,
    PRESSURE_ITERATIONS: 20,
    CURL: 28,
    SPLAT_RADIUS: 0.11,
    SPLAT_FORCE: 1600,
    SPLAT_COUNT: 1,
    SPLAT_COLOR: { r: 0.2, g: 0.22, b: 0.24 },
    SHADING: true,
    COLORFUL: false,
    BLOOM: true,
    BLOOM_INTENSITY: 0.12,
    BLOOM_THRESHOLD: 0.5,
    SUNRAYS: false,
    BACK_COLOR: { r: 0, g: 0, b: 0 },
    TRANSPARENT: false
  });
}

const headline = document.querySelector(".h-hero");
if (headline && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const sequence = [];
  headline.querySelectorAll(".h-line__in").forEach(function (line) {
    const text = line.textContent || "";
    line.textContent = "";
    line.style.opacity = "1";
    Array.from(text).forEach(function (ch) {
      const span = document.createElement("span");
      span.textContent = ch === " " ? "\u00a0" : ch;
      span.style.visibility = "hidden";
      line.appendChild(span);
      sequence.push(span);
    });
  });
  const caret = document.createElement("span");
  caret.className = "hello__caret";
  caret.setAttribute("aria-hidden", "true");
  const typeStart = performance.now() + 4000;
  const perChar = 110;
  let shown = 0;
  function typeFrame(now) {
    const due = Math.max(0, Math.min(sequence.length, Math.floor((now - typeStart) / perChar)));
    while (shown < due) {
      sequence[shown].style.visibility = "visible";
      sequence[shown].after(caret);
      shown += 1;
    }
    if (shown >= sequence.length) {
      caret.remove();
      const hint = document.querySelector(".hero__hint");
      const mouse = document.querySelector(".frame--hero .scroll-mouse");
      if (hint) hint.classList.add("is-in");
      window.setTimeout(function () {
        if (mouse) mouse.classList.add("is-in");
      }, 850);
      return;
    }
    requestAnimationFrame(typeFrame);
  }
  requestAnimationFrame(typeFrame);
}
