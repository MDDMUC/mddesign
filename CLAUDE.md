# CLAUDE.md

Guidance for Claude Code and Grok working in this repository.

Grok session protocol, skills, and in-repo memory: [`AGENTS.md`](AGENTS.md) + [`memory/SESSION_PROTOCOL.md`](memory/SESSION_PROTOCOL.md).

## Project

Martin Drexler is a freelance graphic designer (hello@martindrexler.com). This repo is his portfolio site — the ambition is **a world-class design-focused website for a freelance graphic design business**.

**Current state (2026-09-04):** Homepage is a long persuasion spine (structure after christoph-gey.de): hero with full-viewport Spline (gated &lt;720px) → client logo marquee → case teasers → news → competence → connect → footer map. Chrome: floating Work / Studio / Contact (no typesetter bar); ⌘K command menu still mounted. `/work` is a display-scale typographic ledger. Six case studies share the 8-section spine; type covers until photography. Contact H1 is the email.

`ChromeStrip` and the WebGL2 fluid sim (`FluidCanvas.tsx` / `fluid.ts` / `shaders.ts`) still exist on disk but are **not mounted**. BRIEF / SYSTEM.md §14 still describe them as signature moves — treat **live `site/` as what ships**; do not restore retired chrome to match the spec.

**Current routes:**
- `/` — long spine over full-viewport Spline (`page.tsx` + `SplineBackground`).
- `/contact` — form, posts to `/api/contact`. H1 = email.
- `/work` — display-scale typographic ledger.
- `/work/cepres` — case study #1 (UX flagship, fintech, $45T platform).
- `/work/keller-sports` — case study #2 (commerce + brand + product, 13 awards, in-house tenure).
- `/work/yca` — case study #3 (Olympic Movement program, Goodvoice CD).
- `/work/planetarie` — case study #4 (CBDa brand → Tanasi acquisition).
- `/work/byte` — case study #5 (consumer dental packaging + 3D, Haimish).
- `/work/space-for-curiosity` — case study #6 (Space Force / Air Force brand + film, Haimish).
- `/work/creative-consortium` — case study #7 (brand / 3D motion, Haimish).
- `/work/usa-ultimate` — case study #8 (USA Ultimate digital system, Haimish).
- `/work/creative-consortium` — case study #7 (brand + 3D flag motion + web, Haimish).
- `/studio` — about page. H1 = Martin Drexler, positioning paragraph as lede, Spline portrait, Practice / Teaching / Clients / Recognition / Index.
- `/colophon` — Plex Mono table of how the site is built. Noindex. (Rendering row still mentions the fluid sim — stale.)
- `/system` — internal design-system reference. Noindex.
- `/api/contact` — serverless POST handler, sends via Google Workspace SMTP (nodemailer). Six SMTP env vars must be set in Vercel (`SMTP_HOST/PORT/USER/PASS`, `MAIL_FROM`, `MAIL_TO`).

**Locked direction:** `design/BRIEF.md` + `design/SYSTEM.md §14`. Live signature moves: full-viewport Spline on `/`, View Transitions on `/work` ↔ `/work/[slug]`, ⌘K command menu, floating Work / Studio / Contact (NavRail typesetter bar retired). Homepage section order locked 2026-09-04. Case-study template is the 8-section spine with per-case type covers (`CaseStudy.module.css`). Locked six case studies + studio attribution + NDA blocklist: `design/BRIEF.md §7` and `memory/PROJECT_MEMORY.md`.

**Expansion is intentional and incremental.** Don't rebuild the whole site in one pass. Each new page or section should be designed and shipped to the quality bar set in `design/BRIEF.md`. If a page would look like it could come from a generic agency template, it isn't ready.

## Commands

All commands run from `site/`:

```bash
cd site
npm run dev        # Dev server, port 3000
npm run build      # Production build (Next.js → site/.next/)
npm run typecheck  # tsc --noEmit
npm run start      # Serve production build
```

No ESLint (Next 16 / ESLint 9 / `eslint-config-next` interplay is broken). `tsc` + `next build` are the checks that matter.

## Tech Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** CSS Modules + tokens in `site/styles/tokens.css`
- **Fonts:** Inter variable (`opsz`) + IBM Plex Mono via `next/font/google`. No third family without a BRIEF lock.
- **3D:** Spline (`@splinetool/react-spline`) on `/` and `/studio` portrait; skip mount at `max-width: 720px`.
- **Build:** Next.js on Vercel (static pages + one serverless function at `/api/contact`). Was static export until 2026-06-08; switched to add the contact form mailer.
- **Deployment:** Vercel — Project Root Directory must be set to `site/` in the Vercel dashboard. Static pages still serve from the edge; only `/api/contact` invokes a serverless function.

## Architecture

```
site/
├── app/
│   ├── layout.tsx         # fonts; mounts typesetter NavRail + CommandMenu
│   ├── page.tsx           # Landing — typographic stack + SplineBackground
│   ├── page.module.css
│   ├── FluidCanvas.tsx    # Unmounted WebGL2 sim (retired from /)
│   ├── fluid.ts           # Unmounted sim engine
│   ├── shaders.ts         # Unmounted GLSL
│   ├── contact/           # /contact form
│   ├── api/contact/       # Serverless POST handler (nodemailer)
│   ├── system/            # /system — design system reference (noindex)
│   ├── studio/            # /studio — about + SplinePortrait
│   ├── colophon/          # /colophon — how the site is built (noindex)
│   ├── work/              # /work — typographic ledger
│   │   ├── cepres/        # case study #1
│   │   ├── keller-sports/ # case study #2
│   │   ├── yca/           # case study #3
│   │   ├── planetarie/    # case study #4
│   │   ├── byte/          # case study #5
│   │   └── space-for-curiosity/ # case study #6
│   ├── icon.jpg           # Favicons
│   ├── apple-icon.jpg
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── CaseStudy/         # Shared CSS module for /work/[slug] (SYSTEM §14.9)
│   ├── NavRail/           # Sticky top chrome (live)
│   ├── CommandMenu/       # ⌘K command palette (SYSTEM §14.3)
│   ├── SplineBackground/  # Full-viewport Spline on / (gated <720px)
│   ├── SplinePortrait/    # Contained Spline on /studio (gated <720px)
│   └── ChromeStrip/       # Built, then retired from layout — do not remount unasked
├── styles/
│   ├── tokens.css         # Single token source — extend, don't fork (Zion v2)
│   ├── animations.css     # Reveal/stagger utilities (incl. line-rise + weight morph)
│   ├── reset.css
│   └── globals.css        # @view-transition wiring, hanging-punctuation, OT defaults, drop cap class
└── public/
    ├── icons/sprite.svg
    └── images/hero/{familycrest,awards-horizontal-black}.*

design/
├── BRIEF.md               # North-star: principles, sitemap, open questions
├── moodboards/            # Visual references collected by the user
├── references/            # Inspiration sites + analysis notes
├── research/              # Discovery / strategy notes
├── comps/                 # Static comps (image exports from design tools)
├── wireframes/            # Layout sketches
├── prototypes/            # Working prototypes (HTML/code experiments)
└── exports/               # Final design assets to ship

docs/
└── archive/               # Historical design directions — DO NOT pattern-match

logs/
└── DECISIONS.md           # Append a line when a design or scope decision is made
```

**Deliberately absent:** no shared component library, no Tamagui, no design-system meta-folder. The brief lives in `design/`, the tokens live in `site/styles/`. One source of truth per concern.

## Design Direction

The aesthetic direction is owned by `design/BRIEF.md`. Read it before any visual work. If you find yourself making a visual decision that isn't covered by the brief or the tokens, **flag it** rather than guessing — and update the brief once it's resolved.

**Non-negotiable principles** (these live above the brief because they don't change between aesthetic directions):

- Whitespace is an active design element. Use it aggressively.
- Type is the primary visual language. Choose pairings deliberately; never use system stacks as a fallback that ships.
- Show the work; don't talk about it. Case studies are evidence, not marketing copy.
- If it looks like a Bootstrap template, a Tailwind UI kit, or a generic agency landing page, delete it and start over.
- Performance is a design constraint. Animations hold 60fps; LCP image is optimized; total weight per page stays lean.

## Governance

1. **Single source of truth per concern.**
   - Tokens → `site/styles/tokens.css`
   - Design direction → `design/BRIEF.md`
   - Project state / how-we-work → this file (Claude) and `AGENTS.md` (Grok)
   - Session / durable memory → `memory/`
   - Decisions → `logs/DECISIONS.md`
2. **CLAUDE.md must match the running site.** If the site grows beyond what's documented here, update this file in the same commit.
3. **No new root-level `.md` files** except operational counterparts (`AGENTS.md`). Design pivots go straight to `docs/archive/`.
4. **Don't pattern-match from `docs/archive/`.** It's history. Anduril, Shadow Trader, Zion, and hand-drawn directions all live there and were all rejected.
5. **Workflow / agents / tickets scaffolding** at the repo root (`agents/`, `tickets/`, `workflow/`, `content/`) is currently unused. Don't populate it without explicit user direction — the prior multi-agent flow was aspirational and got in the way. Grok skills live in `.grok/skills/`; that is the supported process.

## Working with the Design Critic

Project-scoped critic: `.claude/agents/design-critic.md` (Claude) and `.grok/agents/design-critic.md` (Grok). Invoke after meaningful visual work, or when the user asks for a design review. Grok: spawn `design-critic` or run `/mddesign-critique`.

Don't invoke it for trivial changes (copy edits, dependency bumps, typo fixes).

## Quality Standards

- WCAG AA accessibility minimum. Visible focus states everywhere. Color contrast meets AA on all text.
- `npm run build` must complete cleanly with all routes rendering.
- No console warnings on any page.
- Image strategy: AVIF/WebP with PNG fallback; explicit `width`/`height`; `loading="lazy"` except for LCP image which gets `fetchPriority="high"`.
- Reduced motion is respected. The `prefers-reduced-motion` block in `tokens.css` already zeroes durations — extend it if you add new motion.

## When in Doubt

Confirm with the user before:
- Adding a new page or major section.
- Changing the type system (adding/removing fonts, restructuring the scale).
- Introducing a library or dependency.
- Touching anything in `docs/archive/` — those files are frozen history.
- Changing a locked signature move (Spline on `/`, View Transitions on `/work`, ⌘K, NavRail), or remounting ChromeStrip / the fluid sim.
