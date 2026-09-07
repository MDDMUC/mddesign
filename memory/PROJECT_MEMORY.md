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
- Spline (`@splinetool/react-spline` + runtime) on `/` only; gated below 720px. `/studio` uses static upright portrait still.
- View Transitions API (`experimental.viewTransition` + `@view-transition { navigation: auto }`)
- No ESLint. Checks: `tsc` + `next build` from `site/`

## Live routes (as of 2026-09-05)

| Route | What it is |
|-------|------------|
| `/` | Long persuasion spine: hero (full-viewport Spline) → client marquee → eight case teasers → news → competence → connect → footer map. Floating SiteNav (no bar). |
| `/work` | Display-scale typographic ledger; shared data in `site/data/work.ts` (order: byte → Creative Consortium → USA Ultimate → Space for Curiosity → CEPRES → Keller → YCA → Planetarie) |
| `/work/cepres` | Case 01 — fintech UX flagship. Copy shipped; images placeholders |
| `/work/keller-sports` | Case 02 — commerce + brand, in-house HoD. CoverVideo + PDF vignette images (soft; masters pending) |
| `/work/yca` | Case 03 — Olympic Movement program. Copy shipped; images placeholders |
| `/work/planetarie` | Case 04 — CBDa brand → Tanasi acquisition. Copy shipped; images placeholders |
| `/work/byte` | Case 05 — consumer dental packaging + 3D. Copy shipped; images placeholders |
| `/work/space-for-curiosity` | Case 06 — Space Force / Air Force brand + film. Copy shipped; images placeholders |
| `/studio` | About. H1 = Martin Drexler. White-bg portrait still + left SiteNav rail. Practice / Teaching / Clients / Recognition / Index |
| `/contact` | Form → `POST /api/contact`. Wireframe-grid background |
| `/colophon` | Plex Mono table (noindex). Still mentions WebGL2 fluid — stale vs live landing |
| `/system` | Design-system reference (noindex) |

Chrome: floating **SiteNav** (bar on `/`+`/contact`; left rail on `/studio`+cases; top-right on `/work`) + **CommandMenu** + homepage **ReturnToTop**. NavRail/ChromeStrip/Fluid unmounted.

**Composition (2026-09-04):** `/` is a long homepage spine (structure after christoph-gey.de; craft stays Zion). Hero keeps MARTIN DREXLER / Design Studio lockup + Spline (contained). `/work` is display-scale names with dates. Case studies keep the 8-section spine; type covers until photography.

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

1. **Photography pipeline** — still open in BRIEF §6. AVIF/WebP/PNG sizes; manual vs build-step. Blocks real case-study images / homepage visual teasers.
2. **Case-study images** — Keller has live PDF rasters (soft). Others still type/video covers; photography pipeline open.
3. **Homepage referrals** — section mounts when Martin supplies publishable quotes (`site/data/home.ts`).
4. **Homepage essays / `/journal`** — only when writing exists.
5. **Doc reconciliation** — SYSTEM §14 / colophon still mention fluid / ChromeStrip in places.
6. **`/work/archive`** — phase 3. Do not start without Martin.

## Design process (installed 2026-08-31)

In-repo memory + Grok workspace dual-write. Skills in `.grok/skills/`. Design critic at `.grok/agents/design-critic.md` (Claude copy also at `.claude/agents/design-critic.md`).

Do not populate root `agents/`, `tickets/`, `workflow/`, `content/` unless Martin asks. Prior multi-agent flow got in the way.
