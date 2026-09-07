# Session Handoff

> Rewrite this whole file at session end. Next session reads this first after the protocol.

**Last updated:** 2026-09-08  
**Session:** Keller case images, SiteNav rails, /work covers, studio portrait, 3D preview experiment

---

## Current focus

1. **Chrome (SiteNav):**
   - `/` + `/contact` → horizontal top bar (aligned to content + `pad-page`)
   - `/studio` + `/work/[slug]` → **left vertical rail** (large type, scroll hide/show)
   - `/work` index → **top-right** horizontal (no left rail)
2. **`/work` ledger** — landscape **16:9** cover column on the right (tags above); videos/`contain` + type fallback; `planetarie` title lowercase.
3. **Keller Sports** — CoverVideo pegasus hero; PDF-derived vignette images live (soft PDF res — native masters still needed).
4. **`/studio`** — Spline portrait **replaced** by white-bg still `martin-portrait-upright.jpg`; left rail nav.
5. **Homepage** — optional hero portrait plate behind Spline (separate z-layer); Return-to-Top pill (home only); awards copy softened.
6. **3D experiment (preview only)** — coarse wireframe + photo wrap at `/preview/martin-3d.html` (noindex). Mesh in `site/public/preview/`; full exports gitignored under `design/exports/`.

---

## Blockers / watchouts

- Keller (and other) vignette rasters from portfolio PDF are soft — swap for native masters when available.
- 3D preview UV/zoom still tunable; mesh shape restored to original TripoSR coarse wire — do not regenerate without asking.
- Portrait orientation: use **`martin-portrait-upright.jpg`** for studio; keep head-up.
- Photography pipeline still open (BRIEF §6).
- `design/exports/` is gitignored — local 3D masters live there only.

---

## Exact next steps (next session)

1. Martin visual QA after pull: `/studio` rail + portrait, `/work` covers, Keller case, `/preview/martin-3d.html`
2. Native photography masters for Keller (and others) when ready
3. Decide whether homepage hero portrait plate stays / how it sits under opaque Spline
4. Optional: promote or drop the 3D wire preview; if keep, tune UV zoom with Martin
5. Referrals / essays still wait on real content

---

## Key paths

| Need | Path |
|------|------|
| SiteNav | `site/components/SiteNav/` |
| Return to Top | `site/components/ReturnToTop/` |
| Work ledger | `site/app/work/page.tsx` + `page.module.css` |
| Keller case | `site/app/work/keller-sports/` + `public/images/work/keller-sports/` |
| Studio | `site/app/studio/` + `public/images/hero/martin-portrait-upright.jpg` |
| 3D preview | `site/public/preview/martin-3d.html` |
| Locks | `logs/DECISIONS.md` |
| Brief | `design/BRIEF.md` |

---

## Do not forget

- Inter + Plex Mono locked
- NDA: D&AD Yellow Pencil / BMW / Red Bull — no case studies
- Do not remount NavRail / ChromeStrip / fluid unasked
- Dual-write memory; session end = log + handoff
- Push `main` only when asked (this session: asked)
