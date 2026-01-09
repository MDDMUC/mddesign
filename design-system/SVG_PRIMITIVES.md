# SVG Primitives & Zion Elements
Martin Drexler Portfolio - Zion Virtual Control Aesthetic

References: `DESIGN_TOKENS.md`

---

## 1. Icons

### Icon Specifications

**Base Properties**
- Viewbox: `0 0 24 24`
- Size: 24px default (scalable)
- Stroke-width: 1.5px
- Stroke: `currentColor` (inherits from CSS)
- Fill: `none`
- Stroke-linecap: `square` (sharp, not round)
- Stroke-linejoin: `miter`

**Size Variants**
| Size | Dimensions | Stroke |
|------|------------|--------|
| Small | 16px | 1px |
| Default | 24px | 1.5px |
| Large | 32px | 2px |

---

### Navigation Icons

**Menu (Hamburger)**
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square">
  <line x1="4" y1="6" x2="20" y2="6"/>
  <line x1="4" y1="12" x2="20" y2="12"/>
  <line x1="4" y1="18" x2="20" y2="18"/>
</svg>
```

**Close (X)**
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square">
  <line x1="6" y1="6" x2="18" y2="18"/>
  <line x1="18" y1="6" x2="6" y2="18"/>
</svg>
```

**Arrow Right**
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square">
  <line x1="4" y1="12" x2="20" y2="12"/>
  <polyline points="14,6 20,12 14,18"/>
</svg>
```

**Arrow Left**
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square">
  <line x1="20" y1="12" x2="4" y2="12"/>
  <polyline points="10,6 4,12 10,18"/>
</svg>
```

**Arrow Up**
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square">
  <line x1="12" y1="20" x2="12" y2="4"/>
  <polyline points="6,10 12,4 18,10"/>
</svg>
```

**Arrow Down**
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square">
  <line x1="12" y1="4" x2="12" y2="20"/>
  <polyline points="6,14 12,20 18,14"/>
</svg>
```

**Chevron Right**
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square">
  <polyline points="9,6 15,12 9,18"/>
</svg>
```

**Chevron Left**
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square">
  <polyline points="15,6 9,12 15,18"/>
</svg>
```

---

### UI Icons

**External Link**
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square">
  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
  <polyline points="15,3 21,3 21,9"/>
  <line x1="10" y1="14" x2="21" y2="3"/>
</svg>
```

**Download**
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square">
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
  <polyline points="7,10 12,15 17,10"/>
  <line x1="12" y1="15" x2="12" y2="3"/>
</svg>
```

**Play**
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="miter">
  <polygon points="6,4 20,12 6,20"/>
</svg>
```

**Pause**
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square">
  <rect x="6" y="4" width="4" height="16"/>
  <rect x="14" y="4" width="4" height="16"/>
</svg>
```

**Plus**
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square">
  <line x1="12" y1="5" x2="12" y2="19"/>
  <line x1="5" y1="12" x2="19" y2="12"/>
</svg>
```

**Minus**
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square">
  <line x1="5" y1="12" x2="19" y2="12"/>
</svg>
```

**Check**
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square">
  <polyline points="4,12 9,17 20,6"/>
</svg>
```

**Location Pin**
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square">
  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
  <circle cx="12" cy="9" r="2.5"/>
</svg>
```

**Calendar**
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square">
  <rect x="3" y="4" width="18" height="18"/>
  <line x1="16" y1="2" x2="16" y2="6"/>
  <line x1="8" y1="2" x2="8" y2="6"/>
  <line x1="3" y1="10" x2="21" y2="10"/>
</svg>
```

---

### Social Icons

**LinkedIn**
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square">
  <rect x="2" y="2" width="20" height="20"/>
  <line x1="8" y1="11" x2="8" y2="17"/>
  <line x1="8" y1="7" x2="8" y2="7.01"/>
  <path d="M12 17v-6"/>
  <path d="M16 17v-4a2 2 0 0 0-4 0"/>
</svg>
```

**Email/Mail**
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square">
  <rect x="2" y="4" width="20" height="16"/>
  <polyline points="2,4 12,13 22,4"/>
</svg>
```

---

### Service Icons

**Compass (Strategic Leadership)**
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square">
  <circle cx="12" cy="12" r="10"/>
  <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88"/>
</svg>
```

**Grid (Product Design)**
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square">
  <rect x="3" y="3" width="7" height="7"/>
  <rect x="14" y="3" width="7" height="7"/>
  <rect x="3" y="14" width="7" height="7"/>
  <rect x="14" y="14" width="7" height="7"/>
</svg>
```

**Shapes (Brand Systems)**
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square">
  <circle cx="12" cy="8" r="5"/>
  <rect x="4" y="14" width="7" height="7"/>
  <polygon points="17,14 21,21 13,21"/>
</svg>
```

---

## 2. Decorative Elements

### Bracket Marks

**Corner Bracket - Top Left**
```svg
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1">
  <polyline points="0,16 0,0 16,0"/>
</svg>
```

**Corner Bracket - Top Right**
```svg
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1">
  <polyline points="0,0 16,0 16,16"/>
</svg>
```

**Corner Bracket - Bottom Left**
```svg
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1">
  <polyline points="0,0 0,16 16,16"/>
</svg>
```

**Corner Bracket - Bottom Right**
```svg
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1">
  <polyline points="16,0 16,16 0,16"/>
</svg>
```

**Full Corner Set (CSS Background)**
```css
.bracketed-panel {
  position: relative;
}
.bracketed-panel::before,
.bracketed-panel::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  border: 1px solid var(--stroke-faint);
}
.bracketed-panel::before {
  top: -1px;
  left: -1px;
  border-right: none;
  border-bottom: none;
}
.bracketed-panel::after {
  bottom: -1px;
  right: -1px;
  border-left: none;
  border-top: none;
}
```

---

### Leader Lines and Ticks

**Horizontal Leader Line**
```svg
<svg width="48" height="8" viewBox="0 0 48 8" fill="none" stroke="currentColor" stroke-width="1">
  <line x1="0" y1="4" x2="40" y2="4"/>
  <line x1="40" y1="0" x2="40" y2="8"/>
</svg>
```

**Vertical Tick**
```svg
<svg width="8" height="16" viewBox="0 0 8 16" fill="none" stroke="currentColor" stroke-width="1">
  <line x1="4" y1="0" x2="4" y2="16"/>
  <line x1="0" y1="8" x2="8" y2="8"/>
</svg>
```

**Scale Ticks (Horizontal)**
```svg
<svg width="200" height="16" viewBox="0 0 200 16" fill="none" stroke="currentColor" stroke-width="1">
  <line x1="0" y1="8" x2="200" y2="8"/>
  <line x1="0" y1="4" x2="0" y2="12"/>
  <line x1="50" y1="6" x2="50" y2="10"/>
  <line x1="100" y1="4" x2="100" y2="12"/>
  <line x1="150" y1="6" x2="150" y2="10"/>
  <line x1="200" y1="4" x2="200" y2="12"/>
</svg>
```

**Callout Line (Angled)**
```svg
<svg width="48" height="32" viewBox="0 0 48 32" fill="none" stroke="currentColor" stroke-width="1">
  <polyline points="0,32 16,16 48,16"/>
  <circle cx="0" cy="32" r="2" fill="currentColor"/>
</svg>
```

---

### Partial Rings and Arcs

**Quarter Arc - Top Right**
```svg
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1">
  <path d="M 0 48 A 48 48 0 0 1 48 0"/>
</svg>
```

**Half Ring - Top**
```svg
<svg width="96" height="48" viewBox="0 0 96 48" fill="none" stroke="currentColor" stroke-width="1">
  <path d="M 0 48 A 48 48 0 0 1 96 48"/>
</svg>
```

**Three-Quarter Ring**
```svg
<svg width="96" height="96" viewBox="0 0 96 96" fill="none" stroke="currentColor" stroke-width="1.5">
  <path d="M 48 0 A 48 48 0 1 1 0 48"/>
</svg>
```

**Concentric Partial Rings**
```svg
<svg width="120" height="120" viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1">
  <path d="M 60 10 A 50 50 0 0 1 110 60" opacity="0.3"/>
  <path d="M 60 20 A 40 40 0 0 1 100 60" opacity="0.5"/>
  <path d="M 60 30 A 30 30 0 0 1 90 60" opacity="0.7"/>
  <path d="M 60 40 A 20 20 0 0 1 80 60" opacity="1"/>
</svg>
```

---

### Concentric Circles/Guides

**Target Circles**
```svg
<svg width="120" height="120" viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1">
  <circle cx="60" cy="60" r="55" opacity="0.2"/>
  <circle cx="60" cy="60" r="40" opacity="0.4"/>
  <circle cx="60" cy="60" r="25" opacity="0.6"/>
  <circle cx="60" cy="60" r="10" opacity="0.8"/>
  <circle cx="60" cy="60" r="2" fill="currentColor"/>
</svg>
```

**Radar/Compass Guide**
```svg
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="1">
  <!-- Circles -->
  <circle cx="100" cy="100" r="90" opacity="0.2"/>
  <circle cx="100" cy="100" r="60" opacity="0.3"/>
  <circle cx="100" cy="100" r="30" opacity="0.4"/>
  <!-- Cross lines -->
  <line x1="100" y1="5" x2="100" y2="195" opacity="0.2"/>
  <line x1="5" y1="100" x2="195" y2="100" opacity="0.2"/>
  <!-- Diagonal lines -->
  <line x1="27" y1="27" x2="173" y2="173" opacity="0.1"/>
  <line x1="173" y1="27" x2="27" y2="173" opacity="0.1"/>
</svg>
```

---

### Technical Diagram Elements

**Data Point Marker**
```svg
<svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1">
  <rect x="2" y="2" width="8" height="8" transform="rotate(45 6 6)"/>
</svg>
```

**Connection Node**
```svg
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1">
  <circle cx="8" cy="8" r="6"/>
  <circle cx="8" cy="8" r="2" fill="currentColor"/>
</svg>
```

**Flow Arrow**
```svg
<svg width="32" height="16" viewBox="0 0 32 16" fill="none" stroke="currentColor" stroke-width="1">
  <line x1="0" y1="8" x2="24" y2="8"/>
  <polyline points="20,4 24,8 20,12"/>
</svg>
```

**Process Connector**
```svg
<svg width="64" height="32" viewBox="0 0 64 32" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 2">
  <path d="M 0 16 Q 32 16 32 0"/>
  <path d="M 32 0 Q 32 16 64 16"/>
</svg>
```

---

## 3. Chamfered Corner Clip-paths

### CSS Clip-path Values

**Small Chamfer (4px)**
```css
--chamfer-sm: polygon(
  4px 0,
  calc(100% - 4px) 0,
  100% 4px,
  100% calc(100% - 4px),
  calc(100% - 4px) 100%,
  4px 100%,
  0 calc(100% - 4px),
  0 4px
);
```

**Medium Chamfer (8px)**
```css
--chamfer-md: polygon(
  8px 0,
  calc(100% - 8px) 0,
  100% 8px,
  100% calc(100% - 8px),
  calc(100% - 8px) 100%,
  8px 100%,
  0 calc(100% - 8px),
  0 8px
);
```

**Large Chamfer (12px)**
```css
--chamfer-lg: polygon(
  12px 0,
  calc(100% - 12px) 0,
  100% 12px,
  100% calc(100% - 12px),
  calc(100% - 12px) 100%,
  12px 100%,
  0 calc(100% - 12px),
  0 12px
);
```

**Top Corners Only**
```css
--chamfer-top: polygon(
  8px 0,
  calc(100% - 8px) 0,
  100% 8px,
  100% 100%,
  0 100%,
  0 8px
);
```

**Bottom Corners Only**
```css
--chamfer-bottom: polygon(
  0 0,
  100% 0,
  100% calc(100% - 8px),
  calc(100% - 8px) 100%,
  8px 100%,
  0 calc(100% - 8px)
);
```

**Single Corner (Top-Right)**
```css
--chamfer-tr: polygon(
  0 0,
  calc(100% - 8px) 0,
  100% 8px,
  100% 100%,
  0 100%
);
```

### Usage Example

```css
.btn-primary {
  clip-path: var(--chamfer-sm);
}

.metric-panel {
  clip-path: var(--chamfer-md);
}

.hero-image {
  clip-path: var(--chamfer-lg);
}
```

### SVG Chamfered Border (for visible border)

```svg
<svg width="200" height="60" viewBox="0 0 200 60" fill="none">
  <path
    d="M 8 0 L 192 0 L 200 8 L 200 52 L 192 60 L 8 60 L 0 52 L 0 8 Z"
    stroke="currentColor"
    stroke-width="1.5"
    fill="none"
  />
</svg>
```

---

## 4. Grid/Pattern Backgrounds

### Technical Grid (Subtle)

**CSS Grid Pattern**
```css
.grid-bg {
  background-image:
    linear-gradient(to right, var(--stroke-faint) 1px, transparent 1px),
    linear-gradient(to bottom, var(--stroke-faint) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: center center;
}
```

**Fine Grid**
```css
.grid-bg-fine {
  background-image:
    linear-gradient(to right, var(--stroke-faint) 1px, transparent 1px),
    linear-gradient(to bottom, var(--stroke-faint) 1px, transparent 1px);
  background-size: 8px 8px;
  opacity: 0.3;
}
```

### Blueprint Grid SVG

```svg
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Major grid -->
  <line x1="0" y1="0" x2="48" y2="0" stroke="#D0D4D7" stroke-width="0.5"/>
  <line x1="0" y1="0" x2="0" y2="48" stroke="#D0D4D7" stroke-width="0.5"/>
  <!-- Minor grid -->
  <line x1="0" y1="24" x2="48" y2="24" stroke="#D0D4D7" stroke-width="0.25" opacity="0.5"/>
  <line x1="24" y1="0" x2="24" y2="48" stroke="#D0D4D7" stroke-width="0.25" opacity="0.5"/>
</svg>
```

**As CSS Background**
```css
.blueprint-bg {
  background-image: url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='48' y2='0' stroke='%23D0D4D7' stroke-width='0.5'/%3E%3Cline x1='0' y1='0' x2='0' y2='48' stroke='%23D0D4D7' stroke-width='0.5'/%3E%3Cline x1='0' y1='24' x2='48' y2='24' stroke='%23D0D4D7' stroke-width='0.25' opacity='0.5'/%3E%3Cline x1='24' y1='0' x2='24' y2='48' stroke='%23D0D4D7' stroke-width='0.25' opacity='0.5'/%3E%3C/svg%3E");
  background-repeat: repeat;
}
```

### Dot Grid

**SVG Pattern**
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="12" r="0.75" fill="#D0D4D7"/>
</svg>
```

**CSS Version**
```css
.dot-grid {
  background-image: radial-gradient(circle, var(--stroke-faint) 1px, transparent 1px);
  background-size: 24px 24px;
}
```

### Isometric Grid (Optional)

```css
.iso-grid {
  background-image:
    linear-gradient(30deg, var(--stroke-faint) 1px, transparent 1px),
    linear-gradient(150deg, var(--stroke-faint) 1px, transparent 1px);
  background-size: 24px 42px;
  opacity: 0.2;
}
```

### Usage Guidelines

**When to Use Grid Backgrounds**
- Hero sections (very subtle, 10-20% opacity)
- Technical diagram areas
- Empty state placeholders
- Never on text-heavy sections

**Opacity Recommendations**
- Hero backgrounds: 0.1 - 0.2
- Diagram areas: 0.2 - 0.3
- Interactive areas: Avoid or very subtle

**Performance Note**
- Use CSS gradients over SVG patterns when possible
- Avoid animating grid backgrounds
- Consider removing on mobile for performance

---

## 5. Animation Primitives

### Draw-On Effect (SVG Lines)

```css
.draw-on {
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: draw 0.6s ease-out forwards;
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}
```

### Fade-In Reveal

```css
.fade-reveal {
  opacity: 0;
  transform: translateY(8px);
  animation: fadeReveal 0.4s ease-out forwards;
}

@keyframes fadeReveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Pulse (Loading Indicator)

```css
.pulse {
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
}
```

### Spin (Loading Spinner)

```css
.spin {
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  .draw-on,
  .fade-reveal,
  .pulse,
  .spin {
    animation: none;
    opacity: 1;
    transform: none;
    stroke-dashoffset: 0;
  }
}
```

---

## Icon Sprite Usage

### Inline SVG (Recommended)

```html
<svg class="icon" aria-hidden="true">
  <use href="/icons.svg#arrow-right"/>
</svg>
```

### Icon Sprite File Structure

```svg
<!-- icons.svg -->
<svg xmlns="http://www.w3.org/2000/svg">
  <defs>
    <symbol id="arrow-right" viewBox="0 0 24 24">
      <line x1="4" y1="12" x2="20" y2="12"/>
      <polyline points="14,6 20,12 14,18"/>
    </symbol>
    <symbol id="arrow-left" viewBox="0 0 24 24">
      <line x1="20" y1="12" x2="4" y2="12"/>
      <polyline points="10,6 4,12 10,18"/>
    </symbol>
    <!-- Additional icons... -->
  </defs>
</svg>
```

### Icon CSS

```css
.icon {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 1.5px;
  fill: none;
  stroke-linecap: square;
  stroke-linejoin: miter;
}

.icon-sm { width: 16px; height: 16px; stroke-width: 1px; }
.icon-lg { width: 32px; height: 32px; stroke-width: 2px; }
```

---

## Accessibility

- All icons used for function need `aria-label` or visible text
- Decorative icons: `aria-hidden="true"`
- Interactive elements with icons: Minimum 44x44px touch target
- Ensure sufficient contrast for all strokes
- Provide text alternatives for technical diagrams

---

*Design Agent - 2026-01-09*
