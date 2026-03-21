# Complete Visual Audit - Martin Drexler Portfolio

**Date:** 2026-03-21
**Purpose:** Full visual teardown before Anduril-style redesign

---

## CURRENT STATE: "Shadow Trader" Retro Terminal Theme

The current site uses a **retro 80s amber terminal aesthetic** that is completely incompatible with the Anduril direction. Here's the full breakdown:

### Current Color Palette
| Token | Current Value | Issue |
|-------|---------------|-------|
| Background | `#1a1b1d` (dark gray) | Should be pure black or cream |
| Primary Text | `#ffb000` (amber) | Should be white on dark, black on light |
| Secondary Text | `#9a8f6d` (olive) | Wrong color family entirely |
| Accent | `#ffb000` (amber) | Should be neon yellow-green `#dff140` |
| Borders | `#3a3b3d` (gray) | Should be `#010101` or `#b0b0a9` |
| Panel BG | `rgba(35,36,38,0.4)` | Should be solid, no transparency |

### Current Typography
| Element | Current | Issue |
|---------|---------|-------|
| Font Family | Share Tech Mono | Should be Helvetica Neue / clean sans |
| Text Transform | ALL UPPERCASE | Should be mixed case |
| Letter Spacing | Wide (0.05em+) | Should be tight (negative) |
| Style | Monospace terminal | Should be geometric sans |

### Current Visual Effects (ALL MUST GO)
- CRT scanline overlay with flicker animation
- Glitch text animations
- Amber glow effects on text and borders
- Chamfered corners with accent borders
- "Boot sequence" loading animation
- Terminal-style frames with corner decorations
- Typewriter text reveal animations
- Grid background pattern

### Current Components (Need Complete Replacement)
1. **TerminalFrame** - Styled box with corner decorations
2. **TerminalText** - Monospace text with glow option
3. **TypewriterText** - Character-by-character reveal
4. **FrameDecoration** - Corner accent marks
5. **Navigation** - Terminal-style with "AUTH_LEVEL: ADMIN"

---

## TARGET STATE: Anduril Lattice Command & Control

### Target Color Palette
```css
/* Backgrounds */
--bg-black: #000000;
--bg-cream: #f1f0ea;
--bg-charcoal: #2f3234;
--bg-gray-light: #b0b0a9;

/* Text */
--text-black: #010101;
--text-white: #ffffff;
--text-gray: #b0b0a9;
--text-charcoal: #565654;

/* Accent */
--accent-primary: #dff140;  /* Neon yellow-green - USE SPARINGLY */
--accent-error: #ff3535;

/* Borders */
--border-black: #010101;
--border-gray: #b0b0a9;
```

### Target Typography
```css
/* Font Stack */
--font-primary: 'HelveticaNowDisplay', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;

/* Weights */
--weight-regular: 400;  /* Primary weight */
--weight-bold: 700;     /* Headlines */

/* Sizes */
--font-h1: 5rem;        /* 70px */
--font-h2: 4rem;        /* 56px */
--font-h3: 3.5rem;      /* 49px */
--font-body: 1.05rem;   /* 14.7px */
--font-caption: 0.75rem; /* 10.5px */

/* Letter Spacing - TIGHT, not wide */
--letter-spacing-h1: -0.1rem;
--letter-spacing-body: -0.009rem;
```

### Target Visual Characteristics
- **NO** CRT effects, scanlines, or flicker
- **NO** glow effects or text shadows
- **NO** amber/gold colors
- **NO** monospace fonts (except code blocks)
- **NO** terminal metaphors
- **Sharp corners** (border-radius: 0)
- **Flat design** (minimal shadows)
- **High contrast** (black/white/cream)
- **Opacity hover states** (0.6 → 1.0)
- **12-column grid** system
- **Alternating sections** (black/cream)

---

## PAGES TO REDESIGN

### 1. Homepage (`app/page.tsx`)
**Current:** Boot sequence, coordinate trackers, project cards with "ENCRYPTED_PREVIEW_DATA", memory usage panels, terminal frames everywhere.

**Target:** Clean hero with large headline, project grid with real images, minimal UI, professional aesthetic.

### 2. Work/Portfolio (`app/work/page.tsx`)
**Current:** "ARCHIVE_INDEX" with database metaphors, "QUERYING_PORTFOLIO_DATABASE", terminal-style cards.

**Target:** Clean portfolio grid, asymmetric layouts, grayscale images with hover effects.

### 3. About (`app/about/page.tsx`)
**Current:** Already has some CSS module styling but mixed with terminal components.

**Target:** Split hero with portrait, timeline experience, awards grid, testimonials.

### 4. Contact (`app/contact/page.tsx`)
**Current:** "ESTABLISHING_SECURE_UPLINK", "ENCRYPTION_MODE", terminal input styling.

**Target:** Clean contact form, professional copy, minimal decoration.

### 5. Case Studies (`app/work/[slug]/page.tsx`)
**Current:** Terminal-themed case study layouts.

**Target:** Full-bleed images, metrics callouts, clean typography.

---

## COMPONENTS TO BUILD (Clean Slate)

### Core Layout
1. **Container** - Max-width wrapper with responsive padding
2. **Section** - Full-width section with alternating backgrounds
3. **Grid** - 12-column responsive grid system

### Navigation
4. **Navbar** - Sticky nav with logo, centered links, CTA button
5. **MobileMenu** - Hamburger with slide-down panel

### Typography
6. **Heading** - H1-H6 with proper hierarchy
7. **Text** - Body, caption, micro variants
8. **Link** - Styled link with hover underline

### Buttons
9. **Button** - Primary (solid), Secondary (outline), Text variants

### Cards
10. **ProjectCard** - Image, title, category, metrics
11. **TestimonialCard** - Quote, author, role
12. **FeatureCard** - Icon, title, description

### Media
13. **Image** - Responsive with grayscale hover option
14. **ImageGallery** - Grid layout for case studies

### Footer
15. **Footer** - 4-column layout with links

---

## FILES TO DELETE OR COMPLETELY REWRITE

### Delete Entirely
- `site/components/Terminal/` (entire folder)
- `site/app/providers.tsx` (if only for Tamagui)

### Completely Rewrite
- `site/styles/tokens.css` - New Anduril tokens
- `site/styles/globals.css` - Remove all terminal effects
- `site/tamagui.config.ts` - May not need Tamagui at all
- `site/app/layout.tsx` - Remove scanlines, terminal styling
- `site/app/page.tsx` - Complete rebuild
- `site/app/work/page.tsx` - Complete rebuild
- `site/app/contact/page.tsx` - Complete rebuild
- `site/components/Navigation/Navigation.tsx` - Complete rebuild

### Keep Structure, Update Styling
- `site/app/about/page.tsx` - Content is good, styling needs update
- `site/app/work/[slug]/page.tsx` - Structure OK, styling update

---

## TECHNOLOGY DECISIONS

### Remove
- **Tamagui** - Replace with CSS Modules (already partially in use)
- **Share Tech Mono font** - Replace with Helvetica Neue / system sans
- **Framer Motion** - Keep for subtle animations only, no terminal effects

### Keep
- **Next.js 16** with App Router
- **TypeScript**
- **CSS Modules** - Expand usage
- **CSS Custom Properties** - For design tokens

### Add
- **Helvetica Neue** or similar clean sans-serif font
- Possibly **Inter** as web-safe alternative

---

## ANDURIL DESIGN PATTERNS (from anduril-design-system.md)

### Section Pattern: Alternating Backgrounds
```
Hero → Black
Content → Cream
Features → Black
Work → Cream
CTA → Black
Footer → Black
```

### Button Pattern
```css
/* Primary */
background: #010101;
color: #ffffff;
border: none;
padding: 0.5rem 0.7rem;

/* Hover */
background: transparent;
outline: 1px solid #010101;
color: #010101;
```

### Interactive Pattern
```css
/* Default */
opacity: 0.6;

/* Hover */
opacity: 1;
transition: opacity 0.3s ease-out;
```

### Card Pattern
```css
border: 1px solid #010101;
border-radius: 0;
background: transparent;
padding: 2rem;

/* Hover */
border-width: 2px;
```

### Grid Pattern
```css
display: grid;
grid-template-columns: repeat(12, 1fr);
gap: 1.25rem 1.125rem;

/* Mobile */
@media (max-width: 768px) {
  gap: 0.357rem;
}
```

---

## NEXT STEPS

1. **Create new tokens.css** with Anduril colors, typography, spacing
2. **Remove Tamagui** and terminal components
3. **Build core layout components** (Container, Section, Grid)
4. **Build navigation** with Anduril styling
5. **Redesign homepage** from scratch
6. **Propagate to other pages**

---

## SUMMARY

The current site has a completely different visual identity (retro terminal) that must be entirely replaced. This is not a styling update - it's a ground-up visual rebuild while keeping the content and page structure.

**Estimated scope:** Complete redesign of all visual elements, removal of Tamagui dependency, new component library, new design tokens.
