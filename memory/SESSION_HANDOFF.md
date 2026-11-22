# Session Handoff

> Rewrite this whole file at session end. Next session reads this first after the protocol.

**Last updated:** 2026-11-22  
**Session:** Hero copy, studio Index years, and Blackwave visit tracking are on `main`. Latest commit `8c379f8`.

---

## Current focus

1. **Blackwave visits** — any open of `/blackwave` is stored. `?ref=name` is only the label on the row. The list is `/blackwave/visits`, unlocked with `BLACKWAVE_READ_KEY` (Vercel Production and Development, and `site/.env.local`). Store is Upstash `blackwave-visits`, free, Frankfurt, auto-upgrade off. The first open in a browser session emails `MAIL_TO`. Later chapters do not send more mail. Sample rows were deleted. Preview does not have the read key.
2. **Homepage hero** — H1 is `Designer`. Subline is `brand · product · systems · UI/UX` in `site/data/home.ts`. The browser tab title still says `Designer · UI/UX, brand, product systems`.
3. **`/studio` Index** — award name and repeated marks. Years stay in the data and are not rendered. Red Dot, German Digital Innovation, and CO Cup still have no logo file.
4. **Positioning sentence** — brand before UI/UX. CEPRES is `$65T+`. Keller Sports in that sentence is “a global e-commerce business”. Some case pages still say €100m and $45T.

---

## Blockers / watchouts

- Do **not** commit `videos/yca/yca-impact.mp4` (~198MB); YCA uses Vimeo.
- Soft PDF station/Keller rasters — need native masters.
- Photography pipeline open (BRIEF §6).
- `design/exports/` gitignored.
- Local only: `MartinDrexler-Resume-manwe-test.pdf` (Manwë full-height right, pedestal clipped) — decide keep/kill before shipping.
- Do not commit `.env.local` or print `BLACKWAVE_READ_KEY` into the repo.

---

## Exact next steps (next session)

1. After the `8c379f8` deploy, open `/blackwave` once and confirm the email and a single row on `/blackwave/visits`.
2. Visual QA of `/` and `/studio`. Match the tab title to the hero only if Martin asks.
3. Decide the Manwë-on-CV test (promote into the real resume or delete the local PDF).
4. Native photography masters when ready.
5. Referrals / essays still wait on real content.
6. Do not republish `/blackwave` unless Martin asks. Tracking changes are allowed.

---

## Key paths

| Need | Path |
|------|------|
| Work data / covers | `site/data/work.ts` |
| Homepage copy | `site/data/home.ts` |
| Blackwave page | `site/app/blackwave/page.tsx` |
| Blackwave scroll | `site/public/blackwave-static/index.html`, `track.js` |
| Visit API and mail | `site/app/api/blackwave/route.ts` |
| Visit list | `site/app/blackwave/visits/page.tsx` |
| Visit store | `site/lib/blackwave-visits.ts` |
| Client logos | `site/public/images/clients/` |
| Resume (production) | `site/public/documents/MartinDrexler-Resume.pdf` |
| Locks | `logs/DECISIONS.md` |

---

## Do not forget

- Inter + Plex Mono locked
- NDA: D&AD Yellow Pencil / BMW / Red Bull — no case studies
- Do not remount NavRail / ChromeStrip / fluid unasked
- Spline remains the only 3D object on `/`
- Dual-write memory; session end = log + handoff
- Push `main` only when asked
