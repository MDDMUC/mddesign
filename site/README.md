# Martin Drexler Portfolio Website

> Strategic design partner for ambitious companies
> Zion Virtual Control aesthetic (Matrix Reloaded)

## Project Overview

Award-winning portfolio website for Martin Drexler, featuring:
- 25+ international design awards
- 3 hero case studies (CEPRES, YCA, Keller Sports)
- Premium positioning ($200-300/hr)
- Monochrome Zion aesthetic with technical precision

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules + CSS Variables
- **Fonts:** Helvetica Neue (system font stack)
- **Package Manager:** npm
- **Deploy Target:** Static export (Vercel/Netlify)

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:3000

# Build for production
npm run build

# Preview production build
npm run start
```

## Project Structure

```
site/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with fonts
│   ├── page.tsx             # Homepage
│   ├── work/                # Case studies
│   ├── about/               # About page
│   ├── services/            # Services page
│   └── contact/             # Contact page
├── components/
│   ├── Button/              # Button component (all variants)
│   ├── Navigation/          # Global nav (TBD)
│   ├── Footer/              # Global footer (TBD)
│   └── ...                  # More components
├── styles/
│   ├── tokens.css           # Design tokens (colors, spacing, etc.)
│   ├── typography.css       # Type scale system
│   ├── reset.css            # CSS reset
│   └── globals.css          # Global styles
└── public/
    ├── icons/               # Icon sprite
    ├── images/              # Portfolio images
    └── fonts/               # Self-hosted fonts (if needed)
```

## Design System

All design specifications are in `/design-system/`:

- `DESIGN_TOKENS.md` - Colors, typography, spacing, motion
- `HOMEPAGE_COMPONENTS.md` - Hero, proof, services, work cards
- `GLOBAL_COMPONENTS.md` - Nav, footer, buttons, forms
- `CASE_STUDY_COMPONENTS.md` - Case study layouts
- `SVG_PRIMITIVES.md` - Icons, decorative elements

## Phase 1 Complete ✅

**Foundation Setup:**
- [x] Next.js project initialized
- [x] Fonts configured (Helvetica Neue system stack)
- [x] Design tokens as CSS variables
- [x] Typography system
- [x] Button component (all variants + states)
- [x] Icon sprite (essential icons)
- [x] Dev server running
- [x] Git commit

## Next Phase

**Phase 2: Global Components**
- [ ] Navigation (desktop + mobile hamburger)
- [ ] Footer
- [ ] Form inputs (text, textarea, states)
- [ ] Loading states

**Phase 3: Homepage (PRIORITY)**
- [ ] Hero section
- [ ] Proof section (awards + logos)
- [ ] Services preview cards
- [ ] Featured work cards
- [ ] About teaser
- [ ] Contact CTA

## Design Principles

**Zion Virtual Control Aesthetic:**
- Pure monochrome (no accent colors)
- Thin 1-2px strokes throughout
- Sharp corners (0px radius) or chamfered via clip-path
- Generous whitespace (96-128px section padding)
- Very smooth, slow, elegant animations (60fps)
- Technical typography with monospace labels
- Grayscale images (color on hover)

**Accessibility:**
- WCAG AA minimum
- Keyboard navigation
- Screen reader support
- Focus indicators
- Respect prefers-reduced-motion

**Performance:**
- 60fps animation target
- Static generation
- Image optimization
- Font subsetting
- Lighthouse score > 90

---

Built with Claude Code
