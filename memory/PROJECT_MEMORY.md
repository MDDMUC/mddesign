# Project Memory — mddesign

Durable state. Update when facts change; do not put ephemeral chat noise here.

## Identity

| Field | Value |
|-------|-------|
| Project path | `C:\Users\heyma\mddesign` |
| Purpose | World-class portfolio site for Martin Drexler's freelance design practice |
| Owner | Martin Drexler — hello@martindrexler.com |
| Live | https://martindrexler.com |
| Git | `origin` `MDDMUC/mddesign.git` · `main` (Vercel auto-deploy; root directory = `site/`) |
| Assistant | Grok (design + development), installed 2026-08-31 |

## Stack

- Next.js 16 App Router, React 19, TypeScript
- CSS Modules + `site/styles/tokens.css` (Zion v2: pure white, ink hairlines, no chroma, no radius)
- Inter variable (`opsz`) + IBM Plex Mono via `next/font/google`
- Hybrid Vercel deploy: static pages + one serverless function `/api/contact` (nodemailer, Google Workspace SMTP)
- Spline (`@splinetool/react-spline` + runtime) on `/` and `/studio` portrait; gated below 720px
- View Transitions API (`experimental.viewTransition` + `@view-transition { navigation: auto }`)
- No ESLint. Checks: `tsc` + `next build` from `site/`

## Live routes (as of 2026-08-31)

| Route | What it is |
|-------|------------|
| `/` | Typographic landing (cities eyebrow → Martin Drexler / Design Studio → awards strip → BRIEF §3 paragraph → WORK/ABOUT/CONTACT) over a full-viewport Spline scene |
| `/work` | Six-row typographic ledger. Logo cells are still `LOGO` placeholders |
| `/work/cepres` | Case 01 — fintech UX flagship. Copy shipped; images placeholders |
| `/work/keller-sports` | Case 02 — commerce + brand, in-house HoD. Copy shipped; images placeholders |
| `/work/yca` | Case 03 — Olympic Movement program. Copy shipped; images placeholders |
| `/work/planetarie` | Case 04 — CBDa brand → Tanasi acquisition. Copy shipped; images placeholders |
| `/work/byte` | Case 05 — consumer dental packaging + 3D. Copy shipped; images placeholders |
| `/work/space-for-curiosity` | Case 06 — Space Force / Air Force brand + film. Copy shipped; images placeholders |
| `/studio` | About. H1 = Martin Drexler. Spline portrait. Practice / Teaching / Clients / Recognition / Index |
| `/contact` | Form → `POST /api/contact`. Wireframe-grid background |
| `/colophon` | Plex Mono table (noindex). Still mentions WebGL2 fluid — stale vs live landing |
| `/system` | Design-system reference (noindex) |

Chrome: 44px Plex Mono **typesetter bar** (MDDS / Work / Studio / Contact / ⌘K) + **CommandMenu**. `ChromeStrip` exists on disk but is **not mounted**. Fluid sim files exist (`FluidCanvas.tsx`, `fluid.ts`, `shaders.ts`) but landing no longer uses them.

**Composition (2026-08-31, lane 2):** `/` is a title card (cities + name + Work) over Spline. `/work` is display-scale names with dates, no logo cells. Case studies keep the 8-section spine; each has a distinct type cover; vignette frames hidden until photography.

## Locks (do not reopen without Martin)

- Positioning: UI/UX-led, brand-fluent, "design as business strategy." Studio lede is the BRIEF §3 paragraph, verbatim.
- Six case studies + display order + studio-attribution rule (`STUDIO — [name]`). See BRIEF §7.
- NDA blocklist: D&AD Yellow Pencil project, BMW, Red Bull — named in `/studio`, no case studies.
- Type: Inter (display + body, variable opsz) + IBM Plex Mono (data/chrome). No third family without a lock.
- Palette: pure white + ink hairlines. Greyscale ramp for hierarchy. No accent. Landing crest colour is an explicit Martin override (chroma on `/` only, via retired fluid path; Spline scene is its own colour).
- Case-study template: SYSTEM.md §14.9 eight sections. Vignettes load-bearing. Every vignette leads with text (no mechanical image/text alternation). Drop cap is case-study Context only.
- Photography treatment: option C — 1px ink hairline frame, no greyscale, no tint, no shadow.
- Loading language: mono `[STATE]` labels. No spinners.
- Confirm before: new page, type-system change, new dependency, `docs/archive/`, changing a locked signature move.

## Spec vs live (known drift)

BRIEF / SYSTEM.md §14 still describe four signature moves as fluid sim + View Transitions + ⌘K + ChromeStrip. Live site (rebuild `3065884`, 2026-06-10):

- Move A on `/` is a **Spline scene**, not the WebGL2 fluid
- Chrome is **NavRail + ⌘K**, not the bottom ChromeStrip (built, then retired from `layout.tsx`)
- All six case studies have pages (BRIEF inventory still says CEPRES "next")
- Colophon "Rendering" row still says WebGL2 fluid

Treat **live `site/` as what ships**. Update BRIEF/SYSTEM/CLAUDE/colophon when a task touches that surface — do not silently re-implement the retired fluid or ChromeStrip to "match the spec."

## Open product work

1. **Photography pipeline** — still open in BRIEF §6. AVIF/WebP/PNG sizes; manual vs build-step. Blocks real case-study images.
2. **Case-study images** — every hero + vignette is `data-status="placeholder"`.
3. **`/work` logos** — six `LOGO` placeholder cells.
4. **Doc reconciliation** — BRIEF §7 inventory, SYSTEM §14 moves, colophon Rendering row, CLAUDE.md (updated 2026-08-31 for Grok).
5. **`/work/archive`** — phase 3, text-only ledger of older work. Do not start without Martin.
6. **`/journal`** — optional; only if there is writing to ship.

## Design process (installed 2026-08-31)

In-repo memory + Grok workspace dual-write. Skills in `.grok/skills/`. Design critic at `.grok/agents/design-critic.md` (Claude copy also at `.claude/agents/design-critic.md`).

Do not populate root `agents/`, `tickets/`, `workflow/`, `content/` unless Martin asks. Prior multi-agent flow got in the way.
