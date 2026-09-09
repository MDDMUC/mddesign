# Session Handoff

> Rewrite this whole file at session end. Next session reads this first after the protocol.

**Last updated:** 2026-09-10  
**Session:** Cover logos (Keller / Byte / CC), YCA @1:20, Manwë band removed, CV stamp test

---

## Current focus

1. **Homepage Selected work overlays** — Keller K mark; Byte real wordmark PNG @ 0.85 scale; Creative Consortium SVG viewBox fixed; YCA Vimeo `#t=80s`.
2. **Client marquee** — Byte uses same packaging PNG as overlay.
3. **Manwë** — Homepage band removed. High Council preview still at `/preview/high-council.html`. Local CV stamp test PDF not in git (see Open).
4. **Chrome / mobile hero / resume URL** — unchanged from prior session; production resume still `MartinDrexler-Resume.pdf`.

---

## Blockers / watchouts

- Do **not** commit `videos/yca/yca-impact.mp4` (~198MB); YCA uses Vimeo.
- Soft PDF station/Keller rasters — need native masters.
- Photography pipeline open (BRIEF §6).
- `design/exports/` gitignored.
- Local only: `MartinDrexler-Resume-manwe-test.pdf` (Manwë full-height right, pedestal clipped) — decide keep/kill before shipping.

---

## Exact next steps (next session)

1. Visual QA after deploy: Byte sharpness, CC logo visible on cover, Keller K, YCA starts at 1:20
2. Decide Manwë-on-CV test (promote into real resume vs delete local PDF)
3. Native photography masters when ready
4. Referrals / essays still wait on real content

---

## Key paths

| Need | Path |
|------|------|
| Work data / covers | `site/data/work.ts` |
| Homepage | `site/app/page.tsx`, `page.module.css` |
| Client logos | `site/public/images/clients/` (`byte.png`, `keller-sports.png`, `creative-consortium.svg`) |
| Resume (production) | `site/public/documents/MartinDrexler-Resume.pdf` |
| High Council preview | `site/public/preview/high-council.html` + `high-council/*.stl` |
| Locks | `logs/DECISIONS.md` |

---

## Do not forget

- Inter + Plex Mono locked
- NDA: D&AD Yellow Pencil / BMW / Red Bull — no case studies
- Do not remount NavRail / ChromeStrip / fluid unasked
- Spline remains the only 3D object on `/`
- Dual-write memory; session end = log + handoff
- Push `main` only when asked
