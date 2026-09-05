# Session Handoff

> Rewrite this whole file at session end. Next session reads this first after the protocol.

**Last updated:** 2026-09-05  
**Session:** Homepage spine + chrome + cases (christoph-gey structure)

---

## Current focus

1. **`/` is a long persuasion spine** — hero (full-viewport Spline) → client logo marquee → selected work grid → news → competence → connect → footer map. Referrals/essays omit until real content.
2. **Chrome:** floating Work / Studio / Contact (`SiteNav`) — no typesetter bar. Hides on scroll down; returns on scroll up with white pill. ⌘K still mounted.
3. **Eight cases** in display order: byte → Creative Consortium → USA Ultimate → Space for Curiosity → CEPRES → Keller Sports → YCA → Planetarie. Shared data: `site/data/work.ts`, `site/data/home.ts`.
4. USA Ultimate cover uses Vimeo background embed `1151639550` (CoverVimeo).

---

## Blockers / watchouts

- Referrals and essays: omit until real quotes / writing (`site/data/home.ts`).
- Photography pipeline still open (BRIEF §6). Many covers are video or type; vignettes still placeholders.
- `NavRail` still on disk but **unmounted** — do not remount unasked. `ChromeStrip` / FluidCanvas also unmounted.
- Planetarie marquee logo is black PNG (`planetarie.png`); white SVG sources were invisible on white.
- USA Ultimate GVG SVG was recolored black; size uses `xxl` in the marquee.

---

## Exact next steps (next session)

1. Martin visual pass on `/` (desktop + mobile) after pull — Spline scene, marquee, nav pill
2. Photography pipeline lock, then real artifacts on flagship cases
3. Referral quotes → `home.ts` `referrals` when available
4. Optional: self-host USA Ultimate video (webm/mp4) instead of Vimeo if performance/privacy matters
5. Do not start `/work/archive` or `/journal` unprompted

---

## Key paths

| Need | Path |
|------|------|
| Homepage | `site/app/page.tsx` + `page.module.css` |
| Home / work data | `site/data/home.ts`, `site/data/work.ts` |
| Floating nav | `site/components/SiteNav/` |
| Cover video / Vimeo | `site/components/CoverVideo/`, `CoverVimeo/` |
| Client logos | `site/public/images/clients/` |
| Research | `design/research/christoph-gey-homepage.md` |
| Locks | `logs/DECISIONS.md` |
| Brief | `design/BRIEF.md` |

---

## Do not forget

- Inter + Plex Mono locked
- Omit empty referrals/essays shells
- NDA: D&AD Yellow Pencil / BMW / Red Bull — no case studies
- Dual-write memory; session end = log + handoff
- Do not push `main` unless asked (this session: asked)

---

## Day achievement (one line)

Shipped christoph-gey homepage structure, floating scroll-aware nav, client marquee, eight cases (incl. USA Ultimate + Vimeo), full-bleed Spline.
