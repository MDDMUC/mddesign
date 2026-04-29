# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio website for Martin Drexler, a freelance graphic design business.

**Visual direction:** Minimalist + hand-drawn. A disciplined grid on warm paper, with restrained handwritten marks (underlines, arrows, marginalia) used sparingly for personality. Designer's-sketchbook feel without doodle kitsch. Full brief in `design-system/BRIEF.md`.

## Commands

All commands run from the `site/` directory:

```bash
cd site
npm run dev      # Start development server
npm run build    # Production build (static export)
npm run lint     # Run ESLint
npm run start    # Serve production build
```

## Tech Stack

- **Framework**: Next.js 16 with App Router, TypeScript, React 19
- **Styling**: CSS Modules, CSS custom properties for tokens. (Tamagui is installed but not currently used; safe to remove if no component imports it.)
- **Fonts**: Fraunces (serif display + body), Inter (UI/sans), Caveat (handwritten accents). Loaded via `next/font/google`.
- **Build**: Static export (`output: 'export'` in `next.config.ts`)
- **Deployment**: Vercel (builds from `/site` directory)

## Architecture

```
site/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout, font wiring, Navigation, paper background
│   ├── page.tsx            # Homepage
│   ├── work/{cepres,keller-sports,yca}/  # Case studies (currently template stubs)
│   ├── about/ contact/ services/
│   └── components/         # Page-scoped components (case-study/)
├── components/             # Shared components
│   ├── Navigation/ Button/ FormInput/ Footer/
│   ├── HandMark/           # Inline SVG hand-drawn marks (underline, arrow, circle, bracket)
│   ├── PaperBackground/    # Subtle paper-grain background
│   └── homepage/           # Homepage sections (Hero, Services, FeaturedWork, …)
├── styles/
│   ├── tokens.css          # Design tokens — single source of truth for CSS values
│   ├── typography.css      # Type scale
│   ├── reset.css           # CSS reset
│   └── globals.css         # Global styles, imports other CSS
└── public/
```

(Older components from prior directions — `Terminal/`, `ZionBackground/` — are removed during the current redesign. Don't reintroduce them.)

## Design System

Single source of truth for design values:

- **Tokens (CSS):** `site/styles/tokens.css` — authoritative.
- **Token intent (docs):** `design-system/DESIGN_TOKENS.md` — narrative, must mirror the CSS.
- **Direction:** `design-system/BRIEF.md` — tone, primitives, what this isn't.

Key principles:
- **Warm paper palette** (`--paper` background, `--ink` text, single `--accent` terracotta for hand marks).
- **No border-radius** unless it's drawn imperfectly as part of a hand mark. Hairline rules over heavy borders.
- **Hand marks are seasoning.** One per visual unit, max. SVG only, never raster.
- **Whitespace is structural.** Section padding stays generous (96–128px desktop). Don't tighten.
- **Performance:** 60fps target, GPU-accelerated transforms only.
- **Reduced motion:** Always respect `prefers-reduced-motion`.

## Governance — keep this codebase from drifting again

This site has been redesigned more than once. To prevent doc thrash:

1. **Single source of truth per concern.** Tokens → `site/styles/tokens.css`. Design intent → `design-system/`. Decisions → `logs/DECISIONS.md`. Project state → this file.
2. **CLAUDE.md must match the running site.** If you change the aesthetic, update CLAUDE.md *in the same commit*.
3. **No new root-level `.md` files** unless they replace something. Pivots go straight to `docs/archive/`, not "pending cleanup."
4. **Don't pattern-match from `docs/archive/`.** Those files describe abandoned directions (Anduril, Shadow Trader, Zion). They're history, not spec.

## Workflow

The repo contains scaffolding for a multi-agent workflow (`workflow/`, `agents/`, `tickets/`) that **is not currently in active use**. Don't try to populate tickets or follow agent role docs unless the user explicitly asks. Work directly in `site/` and log notable decisions in `logs/DECISIONS.md`.

## Key Files

- `design-system/BRIEF.md` — design direction
- `design-system/DESIGN_TOKENS.md` — token spec
- `site/styles/tokens.css` — token implementation (authoritative)
- `logs/DECISIONS.md` — decision log
- `docs/archive/` — superseded docs, do not pattern-match

## Quality Standards

- WCAG AA accessibility baseline
- LCP < 2.0s, CLS < 0.1, TBT < 200ms
- "Mean client" review: if it looks like a Bootstrap template, redo it
- Whitespace is an active design element
