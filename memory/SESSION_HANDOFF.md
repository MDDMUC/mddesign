# Session Handoff

> Rewrite this whole file at session end. Next session reads this first after the protocol.

**Last updated:** 2026-09-09  
**Session:** Homepage covers/chrome, mobile hero, Keller/YCA video, resume PDF

---

## Current focus

1. **Homepage Selected work** — Full eight cases; muted cover videos + centered white client marks (PE Analyzer mark-only; YCA edited `yca-mark.svg` @ 0.68 scale; letterbox crop + Vimeo `#t=45s`).
2. **Client marquee** — Includes Neurohope, Everhold, Bella smiley, YCA; USA Wrestling mono.
3. **Chrome on `/`** — Horizontal Work/Studio/Contact absolute in hero (scrolls away). Past `#clients`, case-style left rail fades in on scroll-up only (desktop ≥720px).
4. **Mobile hero (≤720px)** — `martin-portrait-upright.jpg` fills field ending at awards top; short 2-line copy; hero nav hidden; white awards container below image.
5. **Keller** — Homepage/case cover = City Clash `videos/keller-sports/cover.{mp4,webm}` (replaces pegasus).
6. **Resume** — `public/documents/MartinDrexler-Resume.pdf` → `/documents/MartinDrexler-Resume.pdf` after deploy.
7. **byte** — Case page filled with Haimish photography.

---

## Blockers / watchouts

- Soft PDF station/Keller rasters — need native masters.
- Do not commit `videos/yca/yca-impact.mp4` (~198MB); YCA uses Vimeo embed.
- Photography pipeline open (BRIEF §6).
- `design/exports/` gitignored.

---

## Exact next steps (next session)

1. Confirm Vercel deploy: resume URL + visual QA of covers/chrome/mobile hero
2. Native photography masters when ready
3. Referrals / essays still wait on real content
4. Optional: promote or drop 3D wire preview

---

## Key paths

| Need | Path |
|------|------|
| Work data / covers | `site/data/work.ts` |
| Homepage hero + covers CSS | `site/app/page.tsx`, `page.module.css` |
| SiteNav | `site/components/SiteNav/` |
| Client logos | `site/public/images/clients/` |
| Resume PDF | `site/public/documents/MartinDrexler-Resume.pdf` |
| Keller cover | `site/public/videos/keller-sports/cover.*` |
| Locks | `logs/DECISIONS.md` |

---

## Do not forget

- Inter + Plex Mono locked
- NDA: D&AD Yellow Pencil / BMW / Red Bull — no case studies
- Do not remount NavRail / ChromeStrip / fluid unasked
- Dual-write memory; session end = log + handoff
- Push `main` only when asked
