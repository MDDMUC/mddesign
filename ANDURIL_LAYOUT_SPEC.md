# Anduril Layout Specification
## Command & Control and Leadership Page Patterns

This document specifies the exact layout patterns extracted from Anduril's design system to be applied to Martin Drexler's portfolio.

---

## GLOBAL LAYOUT PRINCIPLES

### Container System
- **Desktop**: `calc(100% - 4rem)` - 2rem padding on each side
- **Mobile**: `calc(100% - 2.856rem)` - 1.428rem padding on each side
- **Fixed Max-Width**: 1400px for constrained content sections

### Grid System
- **12-Column Grid**: All layouts use a 12-column base grid
- **Grid Gap Desktop**: `1.25rem` row gap, `1.125rem` column gap
- **Grid Gap Mobile**: `0.357rem` uniform gap
- **Responsive Behavior**: Grids collapse to single column on mobile (<768px)

### Section Spacing
- **Vertical Section Padding**: `3rem` minimum between sections
- **Hero Sections**: `4rem - 8rem` top/bottom padding
- **Content Sections**: `3rem - 6rem` top/bottom padding

### Background Treatment
- **Alternating Sections**: Black (#000000) and Cream (#f1f0ea)
- **Full-Bleed Backgrounds**: Sections span full viewport width
- **Content Constraint**: Inner content constrained by container widths

---

## NAVIGATION STRUCTURE

### Desktop Navigation (>1024px)
```
Height: 80px
Position: sticky, top: 0
Background: #000000
Border-bottom: 1px solid #b0b0a9

Layout:
├─ Logo (left) - Uppercase, 12px, letter-spacing: 0.03rem
└─ Nav Links (right) - Gap: 2rem between items

Nav Link Style:
- Font-size: 12px (0.75rem)
- Opacity: 0.6 default, 1.0 on hover
- Underline indicator on hover (2px, accent color)
- Text-transform: capitalize
```

### Mobile Navigation (≤1024px)
```
Height: 64px
Background: #000000

├─ Logo (left)
└─ Hamburger Menu (right)

Mobile Menu:
- Full-width dropdown panel
- Position: fixed, top: 64px
- Black background with white border
- Large text (h3 size: 2.5rem)
- Slide-down animation (300ms ease-out)
```

---

## HERO SECTION LAYOUTS

### Pattern A: Full-Height Hero (Homepage Style)
```
Height: Auto (content-driven), min-height: 70vh
Background: #000000
Text Color: #ffffff

Layout Structure:
┌─────────────────────────────────────┐
│     (Container: max-width 960px)    │
│                                     │
│        Large Headline (4-5rem)      │
│           Text-align: center        │
│                                     │
│        Subheading (1.05rem)         │
│         Max-width: 640px            │
│         Text-align: center          │
│                                     │
│        [CTA Buttons - Centered]     │
│         Gap: 1rem between           │
│                                     │
└─────────────────────────────────────┘

Padding:
- Desktop: 8rem top, 6rem bottom
- Mobile: 6rem top, 4rem bottom
```

### Pattern B: Split Hero (About/Profile Style)
```
Grid: 2 columns (50/50 split on desktop)
Background: #f1f0ea (cream)
Text Color: #010101 (near black)

Desktop Layout (2-column):
┌──────────────┬──────────────────────┐
│              │  LABEL (uppercase)   │
│              │  Page Title (h1)     │
│   Portrait   │  Introduction (p)    │
│   Image      │  Role Items          │
│   (50%)      │  Location            │
│              │                      │
└──────────────┴──────────────────────┘

Mobile Layout (stacked):
┌─────────────────────────────────────┐
│         Portrait Image              │
├─────────────────────────────────────┤
│  LABEL (uppercase)                  │
│  Page Title (h1)                    │
│  Introduction (p)                   │
│  Role Items                         │
│  Location                           │
└─────────────────────────────────────┘

Portrait Treatment:
- Aspect ratio: 4:5 (400x500px reference)
- Object-fit: cover
- No border or special effects
- Grayscale filter optional
```

---

## CONTENT SECTION PATTERNS

### Pattern 1: Text-Only Section (Philosophy/Intro)
```
Container: max-width 960px, centered
Background: Alternating (black or cream)

Layout:
┌─────────────────────────────────────┐
│  Section Header (h2: 3.5rem)        │
│                                     │
│  Lead Paragraph (1.05rem)           │
│  Max-width: 80% on desktop          │
│                                     │
│  Body Paragraphs (1.05rem)          │
│  Line-height: 120%                  │
│  Margin-bottom: 2rem between ¶      │
│                                     │
└─────────────────────────────────────┘

Spacing:
- Padding: 6rem top/bottom (desktop)
- Padding: 4rem top/bottom (mobile)
```

### Pattern 2: Feature Grid (3-Column)
```
Grid: 3 columns on desktop, 1 column on mobile
Gap: 1.25rem rows, 1.125rem columns

Desktop Layout:
┌───────────┬───────────┬───────────┐
│  Card 1   │  Card 2   │  Card 3   │
│           │           │           │
│  Icon     │  Icon     │  Icon     │
│  Title    │  Title    │  Title    │
│  Text     │  Text     │  Text     │
│           │           │           │
└───────────┴───────────┴───────────┘

Card Style:
- Background: transparent (no card bg)
- Border: none (or 1px solid #b0b0a9 optional)
- Padding: 2rem internal
- Text-align: left
```

### Pattern 3: Featured Work Grid (2-Column Asymmetric)
```
Grid: 2 columns, asymmetric widths
Desktop: 60% / 40% or 40% / 60% alternating
Mobile: Stack to single column

Layout Example:
┌──────────────────┬─────────────┐
│                  │             │
│  Large Image     │  Text Block │
│  (60%)           │  (40%)      │
│                  │             │
└──────────────────┴─────────────┘

Next Row (Alternated):
┌─────────────┬──────────────────┐
│             │                  │
│  Text Block │  Large Image     │
│  (40%)      │  (60%)           │
│             │                  │
└─────────────┴──────────────────┘

Image Treatment:
- Full-bleed within grid cell
- Aspect-ratio: 16:9 or 4:3
- Object-fit: cover
- Optional: Grayscale with color on hover
```

### Pattern 4: Timeline/Experience Layout
```
Single column, left-aligned markers

Layout:
┌──────────────────────────────────┐
│ ● Date Range                     │
│ │ Role Title (h3)                │
│ │ Company Name                   │
│ │ Description paragraph          │
│ │                                │
│ ● Date Range                     │
│ │ Role Title (h3)                │
│ │ Company Name                   │
│ │ Description paragraph          │
│ │                                │
│ ○ Date Range (past)              │
│   Role Title (h3)                │
│   Company Name                   │
│   Description paragraph          │
└──────────────────────────────────┘

Timeline Elements:
- Vertical line: 1px solid, color: #b0b0a9
- Current dot: Filled circle, 12px, accent color
- Past dot: Empty circle, 12px, border only
- Spacing: 3rem between items
```

### Pattern 5: Awards/Badges Grid
```
Grid: 4-5 columns on desktop, 2 columns on mobile
Gap: 2rem rows, 1.5rem columns

Layout:
┌─────┬─────┬─────┬─────┬─────┐
│ ★   │ ★   │ ★   │ ★   │ ★   │
│Award│Award│Award│Award│Award│
├─────┼─────┼─────┼─────┼─────┤
│ ★   │ ★   │ ★   │ ★   │ ★   │
│Award│Award│Award│Award│Award│
└─────┴─────┴─────┴─────┴─────┘

Badge Card:
- Text-align: center
- Icon: 48px, stroke-only
- Label: 0.75rem, uppercase, letter-spacing: 0.03rem
- Opacity: 0.6 default, 1.0 on hover
```

### Pattern 6: Testimonials Grid (2-Column)
```
Grid: 2 columns on desktop, 1 column on mobile
Gap: 3rem rows, 2rem columns

Card Layout:
┌─────────────────────────────────┐
│  "Quote text in larger font"    │
│  (1.25rem, line-height: 140%)   │
│                                 │
│  — Author Name                  │
│    Role, Company                │
└─────────────────────────────────┘

Card Style:
- Border: 1px solid #b0b0a9 (optional)
- Padding: 2.5rem
- Background: transparent or subtle contrast
- Quote marks: CSS pseudo-element or omitted
```

---

## IMAGE & MEDIA TREATMENTS

### Full-Bleed Images
```
- Width: 100vw (break out of container)
- Margin: Negative margins to break container
- Aspect-ratio: Maintained via CSS
- Object-fit: cover
```

### Constrained Images (In-Grid)
```
- Max-width: 100% of grid cell
- Aspect-ratio: Defined per use case
- Border: Usually none (sharp corners)
- Hover: Scale 1.02 or grayscale to color transition
```

### Image Overlays
```
- Background: rgba(0, 0, 0, 0.4) for dark overlay
- Text over image: White, high contrast
- Gradient overlays: Optional, subtle
```

---

## FOOTER STRUCTURE

### Desktop Footer (4-Column)
```
Background: #000000
Color: #ffffff
Padding: 4rem top/bottom

Layout:
┌─────────┬─────────┬─────────┬─────────┐
│ About   │ Work    │ Contact │ Social  │
│         │         │         │         │
│ Link 1  │ Link 1  │ Email   │ Link 1  │
│ Link 2  │ Link 2  │ Phone   │ Link 2  │
│ Link 3  │ Link 3  │ Address │ Link 3  │
└─────────┴─────────┴─────────┴─────────┘

Bottom Bar:
├─ Copyright (left)
└─ Legal Links (right)

Footer Links:
- Font-size: 0.75rem
- Opacity: 0.6, hover: 1.0
- Underline: none
- Spacing: 1rem between links
```

### Mobile Footer (Stacked)
```
Single column, centered
Gap: 2rem between sections

Layout:
┌─────────────────────────────────┐
│         About Section           │
│         Work Section            │
│         Contact Section         │
│         Social Links            │
│                                 │
│    Copyright | Legal Links      │
└─────────────────────────────────┘
```

---

## SCROLL & INTERACTION EFFECTS

### Fade-In on Scroll
```
- Elements: Section headers, cards, images
- Trigger: When 10% of element enters viewport
- Animation: Opacity 0 → 1, Transform: translateY(20px) → 0
- Duration: 600ms
- Easing: ease-out
```

### Sticky Navigation
```
- Initial: Sticky from page load
- Scroll behavior: Remains at top (no hide/show)
- Background: Solid black (no transparency change)
- Border: Always visible
```

### Hover States
```
- Links: Opacity 0.6 → 1.0 (300ms)
- Buttons: Background invert + outline (300ms)
- Images: Grayscale 100% → 0% (300ms)
- Cards: Subtle scale 1.0 → 1.02 (300ms)
```

### No Parallax
```
- Anduril style: No parallax scrolling effects
- All elements scroll at same speed
- Focus on clean, direct interactions
```

---

## RESPONSIVE BREAKPOINTS

```
Mobile: < 768px
Tablet: 768px - 1024px
Desktop: 1024px - 1440px
Large Desktop: 1440px - 1920px
XL Desktop: > 1920px

Key Responsive Behaviors:
- Typography: Scales fluidly above 1280px
- Grids: Collapse to single/double column on mobile
- Padding: Reduces from 2rem to 1.428rem on mobile
- Navigation: Switches to hamburger menu below 1024px
- Images: Stack vertically on mobile
```

---

## TYPOGRAPHY HIERARCHY IN SECTIONS

### Hero Section
```
Headline: 4-5rem (--text-display or --text-h1)
Subhead: 1.05rem (--text-body)
CTA: 0.875rem (--text-mono or button text)
```

### Content Sections
```
Section Header: 3.5rem (--text-h2)
Subsection Title: 2.5rem (--text-h3)
Body Text: 1.05rem (--text-body)
Caption/Meta: 0.75rem (--text-caption)
Micro Label: 0.75rem uppercase (--text-micro)
```

### Card Components
```
Card Title: 2rem (--font-h5) or 1.5rem (--font-h6)
Card Body: 0.938rem (--text-body-sm)
Card Meta: 0.75rem (--text-caption)
```

---

## COLOR APPLICATION BY SECTION

### Dark Sections (Black Background)
```
Background: #000000
Text: #ffffff (primary)
Text Muted: #b0b0a9
Links: #ffffff with opacity
Borders: #b0b0a9 or #ffffff
```

### Light Sections (Cream Background)
```
Background: #f1f0ea
Text: #010101 (primary)
Text Muted: #565654 or #6c6e6b
Links: #010101 with opacity
Borders: #010101 or #b0b0a9
```

### Accent Usage
```
Primary Accent: #dff140 (neon yellow-green)
Usage: Sparingly - hover states, highlights, key CTAs
Placement: Underlines, borders, icon fills
```

---

## IMPLEMENTATION PRIORITY

1. Navigation (sticky, responsive hamburger)
2. Hero Section (Pattern A or B depending on page)
3. Content Grids (12-column base, responsive collapse)
4. Section Alternating Backgrounds
5. Typography Scale Application
6. Image Treatments (grayscale, aspect ratios)
7. Footer (4-column, responsive)
8. Hover States and Transitions
9. Scroll Effects (fade-in)
10. Mobile Responsiveness Testing

---

## KEY DESIGN PRINCIPLES

1. **Sharp Corners**: Border-radius: 0 for 95% of elements
2. **Minimal Shadows**: Flat design, avoid box-shadows
3. **High Contrast**: Black/white, minimal grays
4. **Opacity Feedback**: Default 0.6, hover 1.0 for interactive elements
5. **Grid-Based**: Everything aligns to 12-column grid
6. **Generous Spacing**: Ample whitespace between sections
7. **Technical Aesthetic**: Clean, precise, military-inspired
8. **Responsive Typography**: Fluid scaling above 1280px
9. **Performance**: Minimal animations, flat graphics
10. **Accessibility**: High contrast, clear hierarchy, keyboard navigation

---

This specification provides the foundation for a complete Anduril-inspired redesign of Martin Drexler's portfolio website.
