# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio website for Martin Drexler, a freelance graphic design business. The aesthetic is "Zion Virtual Control" from Matrix Reloaded: clinical, precise, blueprint-like with a retro amber terminal design system.

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

- **Framework**: Next.js 16 with App Router, TypeScript
- **Styling**: CSS Modules + Tamagui, CSS custom properties for design tokens
- **Fonts**: Share Tech Mono (monospace terminal aesthetic)
- **Build**: Static export (`output: 'export'` in next.config.ts)
- **Deployment**: Vercel (builds from `/site` directory)

## Architecture

```
site/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with Navigation, scanlines overlay
│   ├── page.tsx            # Homepage
│   ├── work/               # Portfolio case studies
│   │   ├── cepres/
│   │   ├── keller-sports/
│   │   └── yca/
│   ├── about/
│   ├── contact/
│   ├── services/
│   └── components/         # Page-specific components (case-study/)
├── components/             # Shared components
│   ├── Navigation/
│   ├── Button/
│   ├── FormInput/
│   ├── Terminal/           # Terminal-style UI primitives (Card, Frame, Text, Typewriter)
│   └── homepage/           # Homepage sections (Hero, Services, FeaturedWork, etc.)
└── styles/
    ├── tokens.css          # Design tokens (colors, spacing, typography, motion)
    ├── typography.css      # Type scale
    ├── reset.css           # CSS reset
    └── globals.css         # Global styles, imports other CSS
```

## Design System

Design tokens are defined in `design-system/DESIGN_TOKENS.md` and implemented in `site/styles/tokens.css`.

Key principles:
- **Monochrome palette**: Cool greys on dark background (#1a1b1d), amber accent (#d4a574)
- **Sharp corners**: No border-radius; use chamfered corners via clip-path for CTAs
- **Thin strokes**: 1-2px lines
- **Large negative space**: Section margins 64-128px
- **Performance**: 60fps target, GPU-accelerated transforms only
- **Reduced motion**: Always respect `prefers-reduced-motion`

## Workflow

This project uses a multi-agent workflow documented in `workflow/`:

1. **Project Strategy Agent** - Brief, sitemap, backlog
2. **Design Agent** - Visual system and page comps
3. **Implementation Engineer** - Build to spec
4. **QA Agent** - Cross-device, accessibility validation

Tickets are tracked in `tickets/INDEX.md` using templates from `tickets/templates/`.

## Key Files

- `PROJECT_START.md` - Shared context for all agents
- `design-system/BRIEF.md` - Design system direction and constraints
- `design-system/DESIGN_TOKENS.md` - Full token specification
- `workflow/WORKFLOW_CONTRACT.md` - Gates, budgets, quality checks
- `logs/DECISIONS.md` - Decision log for deviations from brief

## Quality Standards

- WCAG AA accessibility baseline
- LCP < 2.0s, CLS < 0.1, TBT < 200ms
- "Mean client" review: if it looks like a Bootstrap template, redo it
- Whitespace is an active design element
