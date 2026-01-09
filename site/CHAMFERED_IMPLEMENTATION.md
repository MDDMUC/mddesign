# Chamfered Corner System Implementation

## Overview

This document details the complete redesign of the UI component system to match the Zion Virtual Control aesthetic with proper chamfered corners on **bottom-left** and **top-right** corners only.

## What Changed

### Chamfer Pattern

**Before:** All four corners chamfered (octagon-like shape)
**After:** Only bottom-left and top-right corners chamfered (distinctive Zion aesthetic)

```css
/* OLD - All corners chamfered */
clip-path: polygon(
  4px 0,
  calc(100% - 4px) 0,
  100% 4px,
  100% calc(100% - 4px),
  calc(100% - 4px) 100%,
  4px 100%,
  0 calc(100% - 4px),
  0 4px
);

/* NEW - Bottom-left and top-right only */
clip-path: polygon(
  0 0,                              /* top-left (sharp) */
  calc(100% - 4px) 0,               /* top-right start */
  100% 4px,                         /* top-right chamfer */
  100% 100%,                        /* bottom-right (sharp) */
  4px 100%,                         /* bottom-left start */
  0 calc(100% - 4px)                /* bottom-left chamfer */
);
```

## New Files Created

### 1. `site/styles/chamfered.css`

Complete chamfered corner utility system with:
- CSS custom properties for chamfer sizes (4px, 8px, 12px, 16px)
- Utility classes: `.chamfered-small`, `.chamfered-medium`, `.chamfered-large`, `.chamfered-xlarge`
- Border utilities to prevent clipping
- Responsive adjustments for mobile

### 2. `site/components/ZionContainer/`

Flexible container component with variants:
- **default** - Basic container with padding
- **panel** - Floating panel with background
- **card** - Card style with border and padding
- **callout** - Highlighted callout box

Props:
- `variant` - Container style variant
- `chamfer` - Size: small, medium, large, xlarge
- `border` - Enable/disable border
- `as` - Semantic HTML element (div, section, article, aside)

### 3. `site/components/ZionBox/`

Reusable div component with chamfered styling:
- Flexible props for chamfer size, borders, backgrounds, padding
- Can be used for any layout element
- Semantic HTML options (div, section, article, aside, header, footer, nav)

## Files Modified

### Button Component
**File:** `site/components/Button/Button.module.css`

**Changes:**
- Primary button: 8px chamfer (medium), 1.5px border
- Hover: Full invert (white bg → black bg, black text → white text)
- Secondary button: 4px chamfer (small), 1px border
- Text button: No chamfering (unchanged)

### Navigation Component
**File:** `site/components/Navigation/Navigation.module.css`

**Changes:**
- Mobile menu panel: 12px chamfer (large)
- Changed to floating panel with left/right spacing
- Background: `--surface-alt-1`
- Border: 1.5px solid primary

### Form Inputs
**File:** `site/components/FormInput/FormInput.module.css`

**Changes:**
- All inputs: 4px chamfer (small)
- Textareas: 4px chamfer (small)
- Maintains all existing functionality

### Service Cards
**File:** `site/components/homepage/Services/Services.module.css`

**Changes:**
- Service cards: 8px chamfer (medium)
- Maintains hover effects and transitions

### Featured Work Cards
**File:** `site/components/homepage/FeaturedWork/FeaturedWork.module.css`

**Changes:**
- Project cards: 8px chamfer (medium)
- Maintains thumbnail and hover effects

### Metrics Callout
**File:** `site/app/components/case-study/MetricsCallout.module.css`

**Changes:**
- Panel: 12px chamfer (large)
- Background: `--surface-tinted` (blue tint)
- Border: 2px solid primary (emphasized)

### Design Tokens
**File:** `site/styles/tokens.css`

**Changes:**
- Updated `--chamfer-sm`, `--chamfer-md`, `--chamfer-lg` variables
- Changed from 8-point polygon to 6-point polygon (only 2 chamfered corners)

### Global Styles
**File:** `site/styles/globals.css`

**Changes:**
- Updated utility classes to match new chamfer pattern
- Added aliases for consistency (`.chamfered-small` = `.chamfer-sm`)

### Layout
**File:** `site/app/layout.tsx`

**Changes:**
- Added import for `chamfered.css`

## Chamfer Size Guidelines

### Small (4px)
**Use for:** Form inputs, subtle elements, secondary buttons
**Examples:** Text input, textarea, secondary button

### Medium (8px)
**Use for:** Standard buttons, cards, containers
**Examples:** Primary button, service cards, project cards

### Large (12px)
**Use for:** Callout panels, featured sections, mobile menu
**Examples:** Metrics callout, mobile navigation panel

### XLarge (16px)
**Use for:** Hero sections, major panels
**Examples:** Hero background panels, featured callouts

## Border Guidelines

- **1px** - Subtle borders (secondary buttons, form inputs)
- **1.5px** - Standard elements (primary buttons, cards)
- **2px** - Emphasis (callouts, metrics panels)

## Before/After Examples

### Button (Primary)

**Before:**
```css
.primary {
  clip-path: var(--chamfer-sm); /* All corners */
  border: 1.5px solid var(--stroke-primary);
}
.primary:hover {
  background: var(--fill-hover);
}
```

**After:**
```css
.primary {
  clip-path: polygon(
    0 0, calc(100% - 8px) 0, 100% 8px,
    100% 100%, 8px 100%, 0 calc(100% - 8px)
  ); /* Only bottom-left and top-right */
  border: 1.5px solid var(--stroke-primary);
}
.primary:hover {
  background: var(--text-primary); /* Full black */
  color: var(--surface-primary); /* White text */
}
```

### Mobile Menu

**Before:**
```css
.mobileMenu {
  left: 0;
  right: 0;
  background: var(--surface-primary);
  border-bottom: 1.5px solid var(--stroke-secondary);
}
```

**After:**
```css
.mobileMenu {
  left: var(--space-5);
  right: var(--space-5);
  background: var(--surface-alt-1);
  border: 1.5px solid var(--stroke-primary);
  clip-path: polygon(
    0 0, calc(100% - 12px) 0, 100% 12px,
    100% 100%, 12px 100%, 0 calc(100% - 12px)
  );
}
```

### Metrics Callout

**Before:**
```css
.panel {
  background: var(--surface-alt-2);
  border: 1.5px solid var(--stroke-secondary);
  clip-path: var(--chamfer-md); /* All corners */
}
```

**After:**
```css
.panel {
  background: var(--surface-tinted); /* Blue tint */
  border: 2px solid var(--stroke-primary); /* Thicker */
  clip-path: polygon(
    0 0, calc(100% - 12px) 0, 100% 12px,
    100% 100%, 12px 100%, 0 calc(100% - 12px)
  );
}
```

## Usage Examples

### Using ZionContainer

```tsx
import ZionContainer from '@/components/ZionContainer'

// Basic container
<ZionContainer variant="default" chamfer="medium">
  Content here
</ZionContainer>

// Panel with large chamfer
<ZionContainer variant="panel" chamfer="large" border>
  Panel content
</ZionContainer>

// Card without border
<ZionContainer variant="card" chamfer="medium" border={false}>
  Card content
</ZionContainer>

// Callout section
<ZionContainer variant="callout" chamfer="large" as="section">
  Important information
</ZionContainer>
```

### Using ZionBox

```tsx
import ZionBox from '@/components/ZionBox'

// Simple chamfered div
<ZionBox chamfer="medium" border borderWeight="thin">
  Content
</ZionBox>

// Background and padding
<ZionBox
  chamfer="large"
  background="alt-1"
  padding="large"
>
  Padded content
</ZionBox>

// Semantic HTML with chamfering
<ZionBox
  as="section"
  chamfer="xlarge"
  background="tinted"
  padding="large"
>
  Hero section content
</ZionBox>
```

### Using Utility Classes

```tsx
// In any component
<div className="chamfered-medium" style={{
  border: '1.5px solid var(--stroke-primary)',
  padding: 'var(--space-6)'
}}>
  Custom chamfered element
</div>

// Multiple sizes
<div className="chamfered-small">Small chamfer</div>
<div className="chamfered-large">Large chamfer</div>
```

## Browser Compatibility

The `clip-path` CSS property is supported in:
- Chrome/Edge: 55+
- Firefox: 54+
- Safari: 9.1+
- All modern mobile browsers

## Responsive Behavior

On mobile devices (< 768px):
- Medium chamfer: 8px → 6px
- Large chamfer: 12px → 10px
- XLarge chamfer: 16px → 14px
- Small chamfer: Remains 4px

## Testing Checklist

- [x] Build succeeds without errors
- [x] All chamfered corners render correctly
- [x] Button hover states work with chamfered shapes
- [x] Mobile menu displays correctly
- [x] Form inputs maintain functionality
- [x] Card hover effects work
- [x] Metrics callout displays properly
- [x] No content clipping at chamfered corners
- [x] Responsive chamfer sizes work on mobile

## Technical Notes

### Why clip-path instead of border-radius?

`clip-path` allows for precise control over corner shapes, enabling the distinctive 45° chamfered cuts that define the Zion aesthetic. Traditional `border-radius` can only create rounded corners, not the angular, technical aesthetic required.

### Border Clipping Prevention

Some components may need slight padding adjustments to prevent borders from being clipped at chamfered corners. The `chamfered.css` file includes border utilities that add 1-2px padding when needed.

### Animation Considerations

Transitions and transforms work seamlessly with `clip-path`. However, animating the `clip-path` itself can be performance-intensive. For best results, animate other properties like `transform`, `opacity`, or `background-color`.

## Future Enhancements

Potential additions to the chamfered system:
- Hero section wrapper with xlarge chamfers
- Badge component with small chamfers
- Modal/dialog with large chamfers
- Tooltip with small chamfers
- Card hover effect that increases chamfer size
- Animated entrance where chamfer "cuts in"

## Maintenance

When adding new components:
1. Determine appropriate chamfer size based on element type
2. Use ZionContainer or ZionBox if possible
3. If custom styling needed, copy clip-path from chamfered.css
4. Follow border weight guidelines
5. Test on mobile for responsive behavior

## Summary

The chamfered corner system provides a consistent, Zion-inspired aesthetic across all UI components. The distinctive bottom-left and top-right chamfering creates a technical, precise appearance that differentiates the design from generic rounded corners while maintaining excellent usability and accessibility.
