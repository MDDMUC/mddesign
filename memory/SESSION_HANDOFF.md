# Session Handoff

> Rewrite this whole file at session end. Next session reads this first after the protocol.

**Last updated:** 2026-11-22  
**Session:** Homepage hero reads Designer / brand · product · systems · UI/UX. Studio Index no longer shows years.

---

## Current focus

1. **Homepage hero** — H1 is `Designer`. Subline is `brand · product · systems · UI/UX` in `site/data/home.ts`. Tab title still says `Designer · UI/UX, brand, product systems`.
2. **`/studio` Index** — award name + repeated marks. Years stay in the data and are not rendered. Red Dot, German Digital Innovation, and CO Cup still have no logo file.
3. **Positioning sentence** — brand before UI/UX. CEPRES is `$65T+` (their 15 June 2026 SuperReturn note). Keller Sports in that sentence is “a global e-commerce business”. Case-study pages still say €100m and $45T where those lines were not part of this sentence.

---

## Blockers / watchouts

- Do **not** commit `videos/yca/yca-impact.mp4` (~198MB); YCA uses Vimeo.
- Soft PDF station/Keller rasters — need native masters.
- Photography pipeline open (BRIEF §6).
- `design/exports/` gitignored.
- Local only: `MartinDrexler-Resume-manwe-test.pdf` (Manwë full-height right, pedestal clipped) — decide keep/kill before shipping.

---

## Exact next steps (next session)

1. Visual QA of `/` and `/studio` after this deploy. Tab title still leads with UI/UX if Martin wants that matched to the hero.
2. Decide Manwë-on-CV test (promote into real resume vs delete local PDF)
3. Native photography masters when ready
4. Referrals / essays still wait on real content
5. `/blackwave` is live from `18bef07`. Do not republish it unless Martin asks.

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
