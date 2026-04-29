# Anduril Lattice Command & Control Design System

Complete design system extracted from https://www.anduril.com/lattice/command-and-control

## 1. Color Palette

### Background Colors
```css
--bg-black: #000000;
--bg-dark: #010101;
--bg-charcoal-1: #2f3234;
--bg-charcoal-2: #565654;
--bg-olive: #505544;
--bg-gray-dark: #6c6e6b;
--bg-gray-light: #b0b0a9;
--bg-tan: #bdad96;
--bg-cream: #f1f0ea;
--bg-white: #ffffff;
--bg-accent-green: #dff140;
```

### Text Colors
```css
--text-black: #010101;
--text-charcoal: #2f3234;
--text-charcoal-2: #565654;
--text-olive: #505544;
--text-gray: #b0b0a9;
--text-gray-light: #d8d8d4;
--text-cream: #f1f0ea;
--text-off-white: #f5f5f5;
--text-white: #ffffff;
--text-accent-green: #dff140;
--text-accent-green-light: #eff8a0;
--text-error-red: #ff3535;
```

### Border Colors
```css
--border-black: #010101;
```

### Accent Colors
```css
--accent-primary: #dff140; /* Neon yellow-green */
--accent-error: #ff3535; /* Red for errors */
```

### RGBA Values (Opacity Variants)
```css
/* Black overlays with varying opacity */
--overlay-lightest: rgba(1, 1, 1, 0.004);
--overlay-lighter: rgba(1, 1, 1, 0.01);
--overlay-light: rgba(1, 1, 1, 0.1);
--overlay-medium: rgba(1, 1, 1, 0.25);
--overlay-dark: rgba(1, 1, 1, 0.5);
--overlay-darker: rgba(1, 1, 1, 0.6);
--overlay-darkest: rgba(1, 1, 1, 0.945);

/* Dark overlays */
--overlay-black-medium: rgba(0, 0, 0, 0.4);
--overlay-black-dark: rgba(0, 0, 0, 0.7);
```

## 2. Typography

### Font Families
```css
--font-primary: 'HelveticaNowDisplay', 'Helvetica', 'Arial', sans-serif;
--font-secondary: 'Elios', sans-serif;
```

### Font Weights
```css
--weight-hairline: 50;
--weight-thin: 100;
--weight-extra-light: 200;
--weight-light: 300;
--weight-regular: 400;
--weight-medium: 500;
--weight-bold: 700;
--weight-extra-bold: 800;
--weight-black: 900;
--weight-extra-black: 950;
```

### Font Sizes (Base: 14px, scales responsively)

#### Desktop (> 768px)
```css
--font-h1: 5rem;           /* 70px at 14px base */
--font-h2: 4rem;           /* 56px */
--font-h3: 3.5rem;         /* 49px */
--font-h4: 2.5rem;         /* 35px */
--font-h5: 2rem;           /* 28px */
--font-h6: 1.5rem;         /* 21px */
--font-h7: 1.25rem;        /* 17.5px */
--font-body: 1.05rem;      /* 14.7px */
--font-button: 0.875rem;   /* 12.25px */
--font-small: 0.938rem;    /* 13.13px */
--font-caption: 0.75rem;   /* 10.5px */
```

#### Mobile (≤ 768px)
```css
--font-h1-mobile: 2.714rem;    /* 38px */
--font-h2-mobile: 2.571rem;    /* 36px */
--font-h3-mobile: 2.429rem;    /* 34px */
--font-h4-mobile: 2.286rem;    /* 32px */
--font-h5-mobile: 1.929rem;    /* 27px */
--font-h6-mobile: 1.714rem;    /* 24px */
--font-h7-mobile: 1.429rem;    /* 20px */
--font-body-mobile: 1.286rem;  /* 18px */
--font-button-mobile: 1.071rem;/* 15px */
```

### Line Heights
```css
--line-height-h1: 105%;
--line-height-h2: 105%;
--line-height-h3: 110%;
--line-height-h4: 115%;
--line-height-h5: 115%;
--line-height-h6: 115%;
--line-height-h7: 115%;
--line-height-body: 120%;
--line-height-button: 105%;
```

### Letter Spacing
```css
--letter-spacing-h1: -0.1rem;
--letter-spacing-h2: -0.08rem;
--letter-spacing-h3: -0.07rem;
--letter-spacing-h4: -0.05rem;
--letter-spacing-h5: -0.02rem;
--letter-spacing-h6: -0.015rem;
--letter-spacing-h7: -0.013rem;
--letter-spacing-body: -0.009rem;
--letter-spacing-button: -0.009rem;
--letter-spacing-uppercase: 0.03rem; /* For uppercase labels */
```

### Responsive Font Sizing System
```css
/* Base */
html { font-size: 14px; }

/* Breakpoints */
@media (min-width: 400px) {
  html { font-size: 14px; }
}

@media (min-width: 768px) {
  html { font-size: 14px; }
}

@media (min-width: 1280px) {
  html { font-size: calc(1.25vw - 2px); }
}

@media (min-width: 1440px) {
  html { font-size: calc(0.416667vw + 10px); }
}

@media (min-width: 1920px) {
  html { font-size: calc(1.25vw - 6px); }
}

@media (min-width: 2400px) {
  html { font-size: 24px; }
}
```

## 3. Layout & Spacing

### Container Widths
```css
--container-full: calc(100% - 4rem);         /* Desktop */
--container-full-mobile: calc(100% - 2.856rem); /* Mobile */
--container-narrow: 1400px;                  /* Fixed width containers */
```

### Padding Values
```css
--padding-xs: 0.1rem;
--padding-sm: 0.5rem;
--padding-md: 0.8rem;
--padding-lg: 1rem;
--padding-xl: 1.428rem;
--padding-2xl: 2rem;
--padding-3xl: 3rem;
--padding-4xl: 4rem;
--padding-5xl: 5rem;
--padding-6xl: 7rem;

/* Specific component padding */
--padding-button: 0.5rem 0.7rem;
--padding-button-large: 0.8rem 2rem;
--padding-section-desktop: 0 2rem;
--padding-section-mobile: 0 1.428rem;
```

### Gap Values (Grid/Flex spacing)
```css
--gap-xs: 0.1rem;
--gap-sm: 0.25rem;
--gap-md: 0.357rem;
--gap-base: 0.5rem;
--gap-lg: 0.75rem;
--gap-xl: 1rem;
--gap-2xl: 1.25rem;
--gap-3xl: 2rem;
--gap-4xl: 3rem;
--gap-5xl: 4rem;
--gap-6xl: 6rem;
--gap-7xl: 7rem;

/* Grid gap pattern */
--gap-grid: 1.25rem 1.125rem;  /* Row gap, Column gap */
--gap-grid-mobile: 0.357rem;
```

### Margin Values
```css
--margin-section: 3rem 0;
--margin-top-sm: 1rem;
--margin-top-md: 2rem;
--margin-top-lg: 4rem;
--margin-top-xl: 7rem;
--margin-bottom-sm: 1rem;
--margin-bottom-md: 2rem;
--margin-bottom-lg: 4rem;
```

### Grid System
```css
/* 12-column grid */
--grid-columns: repeat(12, 1fr);
--grid-gap: 1.25rem 1.125rem;
--grid-gap-mobile: 0.357rem;
```

## 4. Components

### Buttons

#### Primary Button
```css
.button-primary {
  font-family: var(--font-primary);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 105%;
  letter-spacing: -0.009rem;
  text-transform: capitalize;

  color: #ffffff;
  background: #010101;

  padding: 0.5rem 0.7rem;
  border: none;
  border-radius: 0;

  opacity: 1;
  cursor: pointer;

  transition: all 0.3s ease-out;
}

.button-primary:hover {
  background-color: transparent;
  outline: 1px solid #010101;
  color: #010101;
}
```

#### Secondary Button (Light variant)
```css
.button-secondary-light {
  color: #ffffff;
  background: #010101;

  padding: 0.5rem 0.7rem;
  border: none;

  transition: all 0.3s ease-out;
}

.button-secondary-light:hover {
  background-color: transparent;
  outline: 1px solid #010101;
  color: #010101;
}
```

#### Action Button
```css
.action-button {
  color: inherit;
  opacity: 0.6;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  text-decoration: none;
  cursor: pointer;

  transition: opacity 0.3s ease-out;
}

.action-button:hover {
  opacity: 1;
}
```

#### Pagination Button
```css
.pagination-button {
  cursor: pointer;
  background: transparent;
  border: 1px solid #010101;
  border-radius: 100px;

  padding: 8px;

  display: flex;
  align-items: center;

  transition: background-color 0.5s, border-color 0.5s;
}

.pagination-button:hover {
  background: #010101;
  border-color: #010101;
  color: #ffffff;
}
```

### Cards/Panels
```css
.card {
  background: #f1f0ea;
  border: 1px solid #010101;
  border-radius: 0; /* Sharp corners throughout */

  padding: 1.5rem;

  transition: background 0.3s ease-in-out;
}
```

### Border Radius Values
```css
--radius-none: 0;
--radius-sm: 2px;
--radius-md: 5px;
--radius-round: 50%;
--radius-pill: 100px;
--radius-full: 1000px;

/* Most elements use sharp corners (0) */
/* Circular buttons use 100px or 50% */
```

### Border Widths
```css
--border-thin: 1px;
--border-medium: 2px;
--border-thick: 4px;
```

### Opacity Values
```css
--opacity-hidden: 0;
--opacity-faint: 0.2;
--opacity-light: 0.3;
--opacity-lighter: 0.4;
--opacity-medium: 0.5;
--opacity-semitransparent: 0.6;
--opacity-translucent: 0.7;
--opacity-mostly-opaque: 0.8;
--opacity-visible: 1;
```

## 5. Visual Effects

### Shadows
```css
/* Minimal shadows - design is very flat */
--shadow-glow-accent: 0 0 10px #dff140, 0 0 5px #dff140;
--shadow-viewport: 0 0 0 1vh #000;
```

### Gradients
```css
/* No prominent gradients found - design uses solid colors */
/* Occasional background patterns with grid overlays */
```

### Transitions
```css
/* Standard transitions */
--transition-fast: 0.2s ease-in-out;
--transition-normal: 0.3s ease-out;
--transition-slow: 0.5s;

/* Specific transition patterns */
--transition-opacity: opacity 0.3s ease-out;
--transition-color: color 0.3s ease-out;
--transition-background: background 0.3s ease-in-out;
--transition-transform: transform 0.3s ease-out;
--transition-all: all 0.3s ease-out;

/* Complex transitions */
--transition-button: background-color 0.5s, border-color 0.5s;
--transition-border: border 0.3s ease-out, background-color 0.3s ease-out, color 0.3s ease-out;
```

### Cubic Bezier Easing
```css
--ease-smooth: cubic-bezier(0.215, 0.62, 0.34, 1);
```

### Backdrop Filters
```css
--backdrop-blur: blur(0.5rem);
```

### Animations
```css
/* Drag indicator animation */
@keyframes inView {
  0% { transform: translate(0%); }
  25% { transform: translate(16%); }
  50% { transform: translate(0%); }
  75% { transform: translate(16%); }
}

/* Fade animation */
@keyframes fade {
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
}
```

## 6. Z-Index System
```css
--z-base: 0;
--z-content: 1;
--z-overlay: 2;
--z-dropdown: 100;
--z-header: 1000;
--z-modal: 101;
```

## 7. Breakpoints
```css
--breakpoint-mobile: 768px;
--breakpoint-tablet: 1280px;
--breakpoint-desktop: 1440px;
--breakpoint-large: 1920px;
--breakpoint-xlarge: 2400px;

/* Usage */
@media (max-width: 768px) { /* Mobile */ }
@media (min-width: 769px) { /* Desktop */ }
@media (min-width: 1280px) { /* Large desktop */ }
@media (min-width: 1920px) { /* XL screens */ }
```

## 8. Additional Design Tokens

### Transform Values
```css
--transform-center: translate(-50%, -50%);
--transform-rotate-45: rotate(45deg);
--transform-rotate-neg-45: rotate(-45deg);
```

### Aspect Ratios
```css
/* Various aspect ratios used for media */
aspect-ratio: 1; /* Square */
```

### Image Fit
```css
object-fit: cover; /* Primary image fitting method */
```

### Cursor States
```css
cursor: pointer;      /* Interactive elements */
cursor: default;      /* Non-interactive */
```

## 9. Design Principles

### Color Usage
- **Primary Background**: Black (#000) with cream sections (#f1f0ea)
- **Text on Dark**: White (#fff) or cream (#f1f0ea)
- **Text on Light**: Near-black (#010101)
- **Accent**: Neon yellow-green (#dff140) used sparingly for emphasis
- **Neutral Grays**: Multiple shades of warm grays and tans for depth

### Typography Rules
- **Font Stack**: HelveticaNowDisplay with extensive weight range (50-950)
- **Tight Letter Spacing**: Negative letter spacing on all headings
- **Responsive Scaling**: Font sizes scale with viewport width above 1280px
- **Text Transform**: Capitalize for buttons, uppercase for labels

### Spacing System
- **12-Column Grid**: Desktop layouts use 12-column grid
- **Consistent Gaps**: 1.25rem row gap, 1.125rem column gap
- **Mobile Collapse**: Grid items stack on mobile with 0.357rem gaps
- **Section Padding**: 2rem desktop, 1.428rem mobile

### Component Style
- **Sharp Corners**: border-radius: 0 for most elements
- **Minimal Shadows**: Very flat design with rare shadow usage
- **Outline Borders**: 1px solid borders, often with hover state changes
- **Smooth Transitions**: 0.3s ease-out for most interactions

### Interaction Patterns
- **Opacity Feedback**: Elements use opacity: 0.6 default, 1 on hover
- **Background Transitions**: Buttons transition from solid to transparent with outline
- **Color Inversion**: Dark buttons invert to light background with dark outline on hover

## 10. CSS Variables Implementation

```css
:root {
  /* Colors */
  --color-bg-primary: #000000;
  --color-bg-secondary: #f1f0ea;
  --color-text-primary: #ffffff;
  --color-text-secondary: #010101;
  --color-accent: #dff140;
  --color-error: #ff3535;

  /* Typography */
  --font-family: 'HelveticaNowDisplay', 'Helvetica', 'Arial', sans-serif;
  --font-size-base: 1rem;
  --font-weight-regular: 400;
  --font-weight-bold: 700;
  --line-height-base: 120%;
  --letter-spacing-base: -0.009rem;

  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
  --spacing-xl: 4rem;

  /* Layout */
  --container-padding: 2rem;
  --grid-columns: 12;
  --grid-gap: 1.25rem 1.125rem;

  /* Effects */
  --transition-speed: 0.3s;
  --border-width: 1px;
  --border-radius: 0;
}

@media (max-width: 768px) {
  :root {
    --container-padding: 1.428rem;
    --grid-gap: 0.357rem;
  }
}
```

## 11. Usage Examples

### Hero Section
```css
.hero {
  background: var(--color-bg-primary);
  color: var(--color-text-primary);
  padding: var(--spacing-xl) var(--container-padding);
}

.hero h1 {
  font-family: var(--font-family);
  font-size: 5rem;
  font-weight: 700;
  line-height: 105%;
  letter-spacing: -0.1rem;
  margin-bottom: var(--spacing-lg);
}
```

### Interactive Button
```css
.cta-button {
  font-family: var(--font-family);
  font-size: 0.875rem;
  font-weight: 400;

  background: #010101;
  color: #ffffff;

  padding: 0.5rem 0.7rem;
  border: none;
  border-radius: 0;

  transition: all 0.3s ease-out;
  cursor: pointer;
}

.cta-button:hover {
  background: transparent;
  outline: 1px solid #010101;
  color: #010101;
}
```

### Grid Layout
```css
.grid-section {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.25rem 1.125rem;

  width: calc(100% - 4rem);
  margin: 0 auto;
  padding: 3rem 0;
}

@media (max-width: 768px) {
  .grid-section {
    gap: 0.357rem;
    width: calc(100% - 2.856rem);
  }
}
```

---

## Notes

This design system emphasizes:
- **Military/Technical Aesthetic**: Sharp corners, high contrast, minimal decoration
- **Performance**: Flat design with minimal shadows and effects
- **Responsive Typography**: Fluid font scaling with multiple breakpoints
- **Systematic Spacing**: Grid-based layout with consistent gaps
- **Subtle Interactions**: Opacity and outline changes rather than heavy animations
- **Accessibility**: High contrast ratios, clear hierarchy

The Anduril Lattice design system creates a modern, technical, and commanding presence suitable for defense technology and command & control interfaces.
