# CLAUDE.md

Guidance for Claude Code working in this repository.

## Project

Martin Drexler is a freelance graphic designer (hello@martindrexler.com). This repo is his portfolio site — the ambition is **a world-class design-focused website for a freelance graphic design business**.

**Current state (2026-06-08):** Holding page only. Has been deliberately scrapped back to crest + Contact button after several aesthetic pivots that drifted into generic territory. Expansion to a full portfolio is now authorized.

**Current routes:**
- `/` — white background, centered crest (`public/images/hero/familycrest.png`), single Contact button.
- `/contact` — functional contact form.

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
│   ├── layout.tsx         # html/body wrapper, font loading
│   ├── page.tsx           # Holding page: crest + Contact button
│   ├── page.module.css
│   ├── contact/
│   ├── icon.png           # Favicons
│   ├── apple-icon.png
│   ├── robots.ts
│   └── sitemap.ts
├── styles/
│   ├── tokens.css         # Single token source — extend, don't fork
│   ├── reset.css
│   └── globals.css
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
