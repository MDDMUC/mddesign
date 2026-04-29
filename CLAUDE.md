# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Holding page for Martin Drexler. The site is intentionally minimal: a centered crest on a white background with a button to a contact form. That's it. Everything else has been scrapped.

**Current site map:**
- `/` — white background, centered crest image (`public/images/hero/familycrest.png`), single Contact button.
- `/contact` — functional contact form on a white background.

If you're tempted to add a portfolio, services page, about page, case study, or any "rich" portfolio content — stop and confirm with the user first. The previous expansive structure was deliberately removed.

## Commands

All commands run from the `site/` directory:

```bash
cd site
npm run dev      # Start development server (port 3000)
npm run build    # Production build (static export)
npm run lint     # ESLint (note: `next lint` is broken in Next 16; run eslint directly if needed)
npm run start    # Serve production build
```

## Tech Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** CSS Modules + a small set of CSS custom properties in `site/styles/tokens.css`
- **Fonts:** Inter only, loaded via `next/font/google`
- **Build:** Static export (`output: 'export'` in `next.config.ts`)
- **Deployment:** Vercel (builds from `/site` directory — see root `vercel.json`)

## Architecture

```
site/
├── app/
│   ├── layout.tsx         # Minimal: html/body wrapper, loads Inter
│   ├── page.tsx           # Holding page: crest + Contact button
│   ├── page.module.css
│   └── contact/
│       ├── layout.tsx     # SEO metadata
│       ├── page.tsx       # Contact form (client component)
│       └── page.module.css
├── styles/
│   ├── tokens.css         # Small token set (color, spacing, type, motion)
│   ├── reset.css          # Modern reset
│   └── globals.css        # Global styles, imports tokens + reset
└── public/
    ├── icons/sprite.svg
    └── images/hero/familycrest.png
```

Notably absent (deliberately): no shared component library, no design-system component specs in code, no portfolio/about/services pages, no Tamagui (was unused), no scroll animations, no hand-drawn SVG primitives.

## Design

Pure white background. Black text. Inter throughout. No accent color. No decorative SVG marks. No serif. The crest image is the only visual flourish.

Anything more elaborate than that needs explicit user buy-in. Earlier directions (Anduril, Shadow Trader, Zion, hand-drawn) are in `docs/archive/` for history; do not pattern-match from them.

## Governance

1. **Single source of truth per concern.** Tokens → `site/styles/tokens.css`. Project state → this file. Decisions → `logs/DECISIONS.md`.
2. **CLAUDE.md must match the running site.** If the site grows beyond holding-page + contact-form, update this file in the same commit.
3. **No new root-level `.md` files.** Pivots go straight to `docs/archive/`.
4. **Don't pattern-match from `docs/archive/`.** It's history, not spec.
5. **Workflow / agents / tickets scaffolding** at the repo root is unused; don't try to populate it without explicit instruction.

## Quality Standards

- WCAG AA accessibility minimum (the page is simple enough this should be trivial).
- Static export must produce all routes cleanly.
- No console warnings on `/` or `/contact`.
- Image optimization: the crest PNG is 2.2 MB — consider compressing or converting to AVIF/WebP if LCP becomes an issue.
