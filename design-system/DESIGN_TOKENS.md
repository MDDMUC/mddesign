# Design Tokens
Martin Drexler Portfolio - Zion Virtual Control Aesthetic

---

## Color Palette

### Surfaces
| Token | Hex | Usage |
|-------|-----|-------|
| `surface-primary` | `#FFFFFF` | Main background, content areas |
| `surface-tinted` | `#F0F0FF` | Subtle cool tint for hero/sections |
| `surface-alt-1` | `#F6FAFB` | Alternate panels, cards |
| `surface-alt-2` | `#EAEEF1` | Callout boxes, code blocks |

### Strokes & Lines
| Token | Hex | Usage |
|-------|-----|-------|
| `stroke-primary` | `#626262` | Primary borders, active elements |
| `stroke-secondary` | `#949494` | Secondary borders, dividers |
| `stroke-faint` | `#D0D4D7` | Subtle grid lines, separators |

### Text
| Token | Hex | Usage |
|-------|-----|-------|
| `text-primary` | `#626262` | Body text, headings |
| `text-secondary` | `#949494` | Captions, labels, metadata |
| `text-muted` | `#B0B4B7` | Placeholder text, disabled |
| `text-inverted` | `#FFFFFF` | Text on filled buttons |

### Interactive States
| Token | Hex | Usage |
|-------|-----|-------|
| `fill-hover` | `#626262` | Button hover fill |
| `fill-active` | `#4A4A4A` | Button active/pressed |
| `fill-focus` | `#626262` | Focus ring (2px outline) |

### Accent (Use Sparingly)
| Token | Hex | Usage |
|-------|-----|-------|
| `accent-alert` | `#C44536` | Critical errors only |

---

## Typography

### Font Stack
```css
--font-heading: 'DM Sans', 'Inter', system-ui, sans-serif;
--font-body: 'DM Sans', 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', 'SF Mono', 'Consolas', monospace;
```

### Type Scale
| Token | Size | Line Height | Weight | Tracking | Usage |
|-------|------|-------------|--------|----------|-------|
| `text-display` | 56px / 3.5rem | 1.1 | 500 | -0.02em | Hero headlines |
| `text-h1` | 40px / 2.5rem | 1.2 | 500 | -0.01em | Page titles |
| `text-h2` | 28px / 1.75rem | 1.3 | 500 | 0 | Section headings |
| `text-h3` | 20px / 1.25rem | 1.4 | 500 | 0 | Subsections |
| `text-body` | 17px / 1.0625rem | 1.7 | 400 | 0 | Paragraphs |
| `text-body-sm` | 15px / 0.9375rem | 1.6 | 400 | 0 | Secondary text |
| `text-caption` | 13px / 0.8125rem | 1.5 | 400 | 0 | Captions |
| `text-micro` | 11px / 0.6875rem | 1.4 | 500 | 0.08em | Labels (uppercase) |
| `text-mono` | 14px / 0.875rem | 1.5 | 400 | 0 | Data, code |

### Micro Label Style
```css
.micro-label {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-secondary);
}
```

---

## Spacing System

### Base Unit: 8px

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px / 0.25rem | Tight gaps, icon padding |
| `space-2` | 8px / 0.5rem | Small gaps |
| `space-3` | 12px / 0.75rem | Form field gaps |
| `space-4` | 16px / 1rem | Standard gap |
| `space-5` | 24px / 1.5rem | Card padding |
| `space-6` | 32px / 2rem | Section padding (mobile) |
| `space-7` | 48px / 3rem | Section gaps |
| `space-8` | 64px / 4rem | Large section gaps |
| `space-9` | 96px / 6rem | Section margins (desktop) |
| `space-10` | 128px / 8rem | Hero spacing |

### Section Margins
| Context | Value |
|---------|-------|
| Mobile section gap | 64px |
| Tablet section gap | 80px |
| Desktop section gap | 120px |

### Container Widths
| Token | Value | Usage |
|-------|-------|-------|
| `container-sm` | 640px | Narrow content |
| `container-md` | 960px | Standard content |
| `container-lg` | 1200px | Wide content |
| `container-xl` | 1440px | Full-width hero |

### Side Padding
| Breakpoint | Value |
|------------|-------|
| Mobile (<768px) | 24px |
| Tablet (768-1024px) | 48px |
| Desktop (>1024px) | 64px |

---

## Stroke Weights

| Token | Value | Usage |
|-------|-------|-------|
| `stroke-hairline` | 1px | Subtle dividers, grid lines |
| `stroke-thin` | 1.5px | Primary borders, panels |
| `stroke-medium` | 2px | Active states, focus rings |
| `stroke-emphasis` | 3px | Selected states, underlines |

### Border Styles
```css
--border-default: 1.5px solid var(--stroke-secondary);
--border-subtle: 1px solid var(--stroke-faint);
--border-focus: 2px solid var(--stroke-primary);
```

---

## Corner Styles

### No Border Radius
All corners are sharp (0px radius) by default.

### Chamfered Corners (Optional)
For special elements (CTAs, feature cards), use 45-degree chamfers:
```css
/* Chamfered corner using clip-path */
--chamfer-sm: polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px);
--chamfer-md: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
```

### Usage Guidelines
- **Default:** Sharp corners (border-radius: 0)
- **Buttons:** Sharp or chamfered (4px chamfer)
- **Cards:** Sharp corners
- **Form inputs:** Sharp corners
- **Never:** Rounded corners (no border-radius > 0)

---

## Motion & Timing

### Duration Tokens
| Token | Value | Usage |
|-------|-------|-------|
| `duration-instant` | 0ms | Immediate state changes |
| `duration-fast` | 100ms | Micro-interactions, hover |
| `duration-normal` | 200ms | Standard transitions |
| `duration-slow` | 400ms | Page transitions, reveals |
| `duration-draw` | 600ms | Line drawing animations |

### Easing Functions
| Token | Value | Usage |
|-------|-------|-------|
| `ease-default` | cubic-bezier(0.4, 0, 0.2, 1) | General purpose |
| `ease-in` | cubic-bezier(0.4, 0, 1, 1) | Exit animations |
| `ease-out` | cubic-bezier(0, 0, 0.2, 1) | Enter animations |
| `ease-snap` | cubic-bezier(0.2, 0, 0, 1) | Snappy interactions |

### Animation Patterns
```css
/* Hover state transition */
--transition-hover: color var(--duration-fast) var(--ease-default),
                    background-color var(--duration-fast) var(--ease-default);

/* Draw-on line reveal */
--transition-draw: stroke-dashoffset var(--duration-draw) var(--ease-out);

/* Fade in */
--transition-fade: opacity var(--duration-normal) var(--ease-out);

/* Panel slide */
--transition-slide: transform var(--duration-slow) var(--ease-out);
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Performance Target
- All animations: 60fps minimum
- No layout thrashing (avoid animating width/height)
- Use transform and opacity for GPU acceleration
- Avoid blur effects (performance heavy)

---

## Z-Index Scale

| Token | Value | Usage |
|-------|-------|-------|
| `z-base` | 0 | Default layer |
| `z-elevated` | 10 | Cards, dropdowns |
| `z-sticky` | 100 | Sticky header |
| `z-overlay` | 200 | Modal backdrops |
| `z-modal` | 300 | Modal content |
| `z-toast` | 400 | Notifications |

---

## Interactive States

### Button States
| State | Background | Border | Text |
|-------|------------|--------|------|
| Default | transparent | `stroke-primary` (1.5px) | `text-primary` |
| Hover | `fill-hover` | `stroke-primary` | `text-inverted` |
| Active | `fill-active` | `stroke-primary` | `text-inverted` |
| Focus | transparent | `stroke-primary` (2px) | `text-primary` |
| Disabled | transparent | `stroke-faint` | `text-muted` |

### Link States
| State | Color | Decoration |
|-------|-------|------------|
| Default | `text-primary` | Underline (1px, stroke-faint) |
| Hover | `text-primary` | Underline (2px, stroke-primary) |
| Focus | `text-primary` | 2px outline offset |
| Visited | `text-secondary` | Underline (1px) |

### Form Input States
| State | Border | Background |
|-------|--------|------------|
| Default | `stroke-secondary` (1px) | `surface-primary` |
| Focus | `stroke-primary` (2px) | `surface-primary` |
| Error | `accent-alert` (2px) | `surface-primary` |
| Disabled | `stroke-faint` (1px) | `surface-alt-1` |

---

## Summary

This token system enforces the Zion Virtual Control aesthetic:

- **Monochrome palette:** Cool greys on white, no color accents
- **Technical typography:** Geometric sans with monospace for data
- **Generous spacing:** Large section margins (96-128px desktop)
- **Thin strokes:** 1-2px lines, sharp or chamfered corners
- **Subtle motion:** Fast, snappy transitions respecting reduced-motion
- **60fps target:** GPU-accelerated transforms only

---

*Design Agent - 2026-01-09*
