# Session Handoff

> Rewrite this whole file at session end. Next session reads this first after the protocol.

**Last updated:** 2026-09-09  
**Session:** Hero motion + SiteNav align; /studio Stations; Space for Curiosity film; work order sync

---

## Current focus

1. **Homepage hero** — Spline on white (portrait plate removed). Cascaded entrance: primary → secondary → five summary lines → awards → SiteNav fade (`--hero-delay-*` / `--dur-hero`). Primary optical `-2px`. SiteNav bar = centered `container-wide` + `pad-page` shell.
2. **`/studio` Stations** — Asymmetric hairline mosaic under first fold; **6 sharp** teaching/studio masters only. Soft Portfolio26 plate crops deferred.
3. **Space for Curiosity** — Homepage/`/work` covers: self-hosted muted loop (`public/videos/space-for-curiosity/cover.{webm,mp4}`). Case page: compact 16:9 YouTube embed + AF description copy; credit lists Mari Moxley (YT) — confirm Murray vs Mari with Martin if needed.
4. **Work order** — Ledger and homepage featured share: SFC → byte → Creative Consortium → USA Ultimate → CEPRES → Keller → YCA → Planetarie.
5. **Chrome** — Bar `/`+`/contact`; left rail `/studio`+cases; top-right `/work` index. Unchanged otherwise.
6. **3D preview** — Still at `/preview/martin-3d.html` (noindex); optional promote/drop.

---

## Blockers / watchouts

- Soft PDF station/Keller rasters — need native masters.
- YouTube on case page still has player chrome (intentional for watch); covers must stay self-hosted muted.
- Photography pipeline open (BRIEF §6).
- `design/exports/` gitignored.

---

## Exact next steps (next session)

1. Martin visual QA after pull: hero timing/align, Stations, SFC covers + case embed, `/work` order
2. Native photography masters when ready (Keller + career stations)
3. Optional: longer/different SFC cover loop excerpt; confirm Moxley credit name
4. Optional: promote or drop 3D wire preview
5. Referrals / essays still wait on real content

---

## Key paths

| Need | Path |
|------|------|
| Hero motion tokens | `site/styles/tokens.css` (`--hero-delay-*`, `--dur-hero`) |
| SiteNav | `site/components/SiteNav/` |
| Studio Stations | `site/app/studio/` + `public/images/studio/collage/` |
| SFC cover video | `site/public/videos/space-for-curiosity/` |
| Work data / order | `site/data/work.ts` |
| SFC case | `site/app/work/space-for-curiosity/` |
| Locks | `logs/DECISIONS.md` |
| Brief | `design/BRIEF.md` |

---

## Do not forget

- Inter + Plex Mono locked
- NDA: D&AD Yellow Pencil / BMW / Red Bull — no case studies
- Do not remount NavRail / ChromeStrip / fluid unasked
- Dual-write memory; session end = log + handoff
- Push `main` only when asked (this session: asked)
