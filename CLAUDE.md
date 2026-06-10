# CLAUDE.md

Guidance for Claude Code working in this repository.

## Project

Martin Drexler is a freelance graphic designer (hello@martindrexler.com). This repo is his portfolio site — the ambition is **a world-class design-focused website for a freelance graphic design business**.

**Current state (2026-06-10):** Site has expanded from holding page to a full portfolio. Landing is the WebGL2 Dobryakov fluid sim with the crest sampled in-shader and warped by the velocity field. Four-corner chrome on `/` only. Every other route carries the persistent mono chrome strip (wordmark / version / commit / build date / scroll progress / ⌘K hint) at the bottom of the viewport. ⌘K (Mac) or Ctrl K (Win/Linux) opens a command menu with cross-page navigation + copy email. Cross-document View Transitions wire `/work` ↔ case-study pages.

**Current routes:**
- `/` — WebGL2 fluid landing (`page.tsx` + `FluidCanvas.tsx` + `fluid.ts` + `shaders.ts`, ~510 lines total).
- `/contact` — functional contact form, posts to `/api/contact`.
- `/work` — six-row typographic ledger of selected work.
- `/work/cepres` — case study #1 (UX flagship, fintech, $45T platform).
- `/work/keller-sports` — case study #2 (commerce + brand + product, 13 awards, in-house tenure).
- `/studio` — about page. H1 = Martin Drexler, positioning paragraph as lede, Practice / Teaching / Clients / Recognition sections.
- `/colophon` — Plex Mono table of how the site is built. Noindex.
- `/system` — internal design-system reference. Noindex.
- `/api/contact` — serverless POST handler, sends via Google Workspace SMTP (nodemailer). Six SMTP env vars must be set in Vercel (`SMTP_HOST/PORT/USER/PASS`, `MAIL_FROM`, `MAIL_TO`).

**Locked direction:** `design/BRIEF.md` + `design/SYSTEM.md §14` define "personal-site-as-software" with four signature moves (fluid sim, View Transitions, ⌘K menu, mono chrome strip). The case-study template (`SYSTEM.md §14.9`) is the canonical 8-section structure; its shared CSS lives at `site/components/CaseStudy/CaseStudy.module.css`. The locked six case studies + studio attribution + NDA blocklist are in memory (`project_case_studies_v1.md`).

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
- **Fonts:** Inter via `next/font/google` (more may be added — coordinate via the BRIEF)
- **Build:** Next.js on Vercel (static pages + one serverless function at `/api/contact`). Was static export until 2026-06-08; switched to add the contact form mailer.
- **Deployment:** Vercel — Project Root Directory must be set to `site/` in the Vercel dashboard. Static pages still serve from the edge; only `/api/contact` invokes a serverless function.

## Architecture

```
site/
├── app/
│   ├── layout.tsx         # html/body wrapper, font loading (Inter variable opsz + IBM Plex Mono), mounts ChromeStrip + CommandMenu
│   ├── page.tsx           # Landing — mounts FluidCanvas + four-corner chrome
│   ├── page.module.css
│   ├── FluidCanvas.tsx    # React shell for the WebGL2 sim
│   ├── fluid.ts           # Sim engine (advection, jacobi, projection, crest sampling)
│   ├── shaders.ts         # GLSL programs
│   ├── contact/           # /contact form
│   ├── api/contact/       # Serverless POST handler (nodemailer)
│   ├── system/            # /system — design system reference (noindex)
│   ├── studio/            # /studio — about page (positioning, teaching, clients, recognition)
│   ├── colophon/          # /colophon — how the site is built (noindex)
│   ├── work/              # /work — typographic ledger of selected work
│   │   ├── cepres/        # case study #1
│   │   └── keller-sports/ # case study #2
│   ├── icon.jpg           # Favicons
│   ├── apple-icon.jpg
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── CaseStudy/         # Shared CSS module for /work/[slug] pages (SYSTEM §14.9)
│   ├── ChromeStrip/       # Persistent mono chrome strip (SYSTEM §14.4)
│   └── CommandMenu/       # ⌘K command palette (SYSTEM §14.3)
├── styles/
│   ├── tokens.css         # Single token source — extend, don't fork (Zion v2)
│   ├── animations.css     # 5 reveal/stagger utilities
│   ├── reset.css
│   └── globals.css        # @view-transition wiring, hanging-punctuation, OT defaults, drop cap class
└── public/
    ├── icons/sprite.svg
    └── images/hero/familycrest.{png,webp}

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
   - Project state / how-we-work → this file
   - Decisions → `logs/DECISIONS.md`
2. **CLAUDE.md must match the running site.** If the site grows beyond what's documented here, update this file in the same commit.
3. **No new root-level `.md` files.** Pivots go straight to `docs/archive/`.
4. **Don't pattern-match from `docs/archive/`.** It's history. Anduril, Shadow Trader, Zion, and hand-drawn directions all live there and were all rejected.
5. **Workflow / agents / tickets scaffolding** at the repo root (`agents/`, `tickets/`, `workflow/`, `content/`) is currently unused. Don't populate it without explicit user direction — the prior multi-agent flow was aspirational and got in the way.

## Working with the Design Critic

A project-scoped subagent lives at `.claude/agents/design-critic.md`. Invoke it (via the `Agent` tool) when:
- You've finished a meaningful visual change and want a second pass before claiming done.
- You're unsure whether a design choice clears the bar set by the brief.
- The user asks for a design review.

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
