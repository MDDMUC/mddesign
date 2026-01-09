# Chamfered Corner Visual Guide

## The Zion Aesthetic

This guide illustrates the distinctive chamfered corner pattern used throughout Martin Drexler's portfolio website, inspired by the Zion Virtual Control interface.

## Corner Pattern

```
BEFORE (Old - All 4 corners chamfered)          AFTER (New - Only 2 corners chamfered)
┌─────────────┐                                 ┌──────────────╲
│             │                                 │               ╲
│   CONTENT   │                                 │    CONTENT     │
│             │                                 │                │
└─────────────┘                                 ╱────────────────┘

All corners cut = octagon-like                  Only bottom-left & top-right = Zion
(Generic, symmetrical)                          (Distinctive, directional)
```

## Visual Breakdown

```
Top-Left Corner: SHARP (90°)
┌─
│

Top-Right Corner: CHAMFERED (45°)
──╲
   ╲

Bottom-Right Corner: SHARP (90°)
   │
───┘

Bottom-Left Corner: CHAMFERED (45°)
╱───
```

## Size Comparison

### Small (4px)
Used for: Form inputs, secondary buttons, subtle elements
```
┌───────╲
│  INPUT ╲
╱────────┘
```

### Medium (8px)
Used for: Primary buttons, cards, containers
```
┌────────╲
│  BUTTON ╲
│          │
╱──────────┘
```

### Large (12px)
Used for: Callout panels, mobile menu, featured sections
```
┌──────────╲
│  CALLOUT  ╲
│            │
│            │
╱────────────┘
```

### XLarge (16px)
Used for: Hero sections, major panels
```
┌────────────╲
│    HERO     ╲
│              │
│              │
│              │
╱──────────────┘
```

## Component Examples

### Primary Button

**Visual:**
```
┌─── VIEW WORK ───╲
╱─────────────────┘
```

**Properties:**
- Chamfer: 8px (medium)
- Border: 1.5px solid
- Hover: Full invert (black fill, white text)

### Secondary Button

**Visual:**
```
┌── LEARN MORE ──╲
╱────────────────┘
```

**Properties:**
- Chamfer: 4px (small)
- Border: 1px solid
- Hover: Border color change only

### Mobile Menu Panel

**Visual:**
```
┌────────────────╲
│    WORK         │
│    ABOUT        │
│    SERVICES     │
│    CONTACT      │
╱─────────────────┘
```

**Properties:**
- Chamfer: 12px (large)
- Border: 1.5px solid
- Background: Light gray surface
- Floating with left/right spacing

### Service Card

**Visual:**
```
┌─────────────╲
│  [ICON]      │
│              │
│  Product     │
│  Design      │
│              │
│  Transform   │
│  ideas into  │
│  reality     │
╱──────────────┘
```

**Properties:**
- Chamfer: 8px (medium)
- Border: 1px solid
- Hover: Lift and border color change

### Project Card

**Visual:**
```
┌─────────────╲
│ [THUMBNAIL]  │
│              │
│ Project Name │
│ Brief desc   │
│ METRIC       │
╱──────────────┘
```

**Properties:**
- Chamfer: 8px (medium)
- Border: 1px solid
- Hover: Lift and grayscale removal

### Metrics Callout

**Visual:**
```
┌────────────────────╲
│   50%      8x       │
│  Growth   Impact    │
│                     │
│   100+     $5M      │
│  Projects  Revenue  │
╱─────────────────────┘
```

**Properties:**
- Chamfer: 12px (large)
- Border: 2px solid (emphasized)
- Background: Blue tinted surface

### Form Input

**Visual:**
```
┌─── EMAIL ADDRESS ───╲
╱─────────────────────┘
```

**Properties:**
- Chamfer: 4px (small)
- Border: 1px solid
- Focus: Border increases to 2px

### Textarea

**Visual:**
```
┌─── MESSAGE ───╲
│                │
│                │
│                │
╱────────────────┘
```

**Properties:**
- Chamfer: 4px (small)
- Border: 1px solid
- Resizable vertically

## Technical Specifications

### CSS Implementation

All chamfered corners use the CSS `clip-path` property:

```css
clip-path: polygon(
  0 0,                    /* 1. Start at top-left (sharp) */
  calc(100% - 8px) 0,     /* 2. Move right, leaving space for chamfer */
  100% 8px,               /* 3. Cut diagonally down (top-right chamfer) */
  100% 100%,              /* 4. Move to bottom-right (sharp) */
  8px 100%,               /* 5. Move left, leaving space for chamfer */
  0 calc(100% - 8px)      /* 6. Cut diagonally up (bottom-left chamfer) */
);
```

### The 6-Point Polygon

```
        (2)────────────(3)
         /              \
        /                \
      (1)                (4)
       │                  │
       │                  │
      (6)                (5)
       \                /
        \              /
```

Points:
1. Top-left corner (sharp)
2. Top-right start (pre-chamfer)
3. Top-right end (post-chamfer)
4. Bottom-right corner (sharp)
5. Bottom-left start (pre-chamfer)
6. Bottom-left end (post-chamfer)

## Why This Pattern Works

### 1. Directional Flow
The bottom-left and top-right chamfers create a diagonal axis that guides the eye from lower-left to upper-right, creating natural reading flow and visual movement.

### 2. Technical Aesthetic
Unlike rounded corners (which feel soft and consumer-friendly), chamfered corners feel precise, technical, and engineered - perfect for a design professional's portfolio.

### 3. Distinctive Identity
While many sites use rounded corners, the asymmetric chamfering is unique and memorable, reinforcing brand identity.

### 4. Functional Clarity
The sharp corners (top-left, bottom-right) provide stable anchor points for alignment, while the chamfered corners add visual interest without sacrificing usability.

### 5. Consistent Application
By using the same chamfer pattern across all UI elements (buttons, cards, panels, inputs), the design feels cohesive and intentional.

## Hover States

### Buttons
```
NORMAL STATE:                    HOVER STATE:
┌─── TEXT ───╲                  ┌─── TEXT ───╲
│  (outline)  │                 │  (filled)   │
╱─────────────┘                 ╱─────────────┘
Border only, no fill            Full black fill, white text
```

### Cards
```
NORMAL STATE:                    HOVER STATE:
┌──────────╲                    ┌──────────╲ ← Lifts 4px up
│  CONTENT  │                   │  CONTENT  │
│            │                  │            │
╱────────────┘                  ╱────────────┘
Border: light gray              Border: medium gray
```

## Responsive Behavior

### Desktop (1024px+)
- Small: 4px
- Medium: 8px
- Large: 12px
- XLarge: 16px

### Mobile (< 768px)
- Small: 4px (unchanged)
- Medium: 6px (reduced)
- Large: 10px (reduced)
- XLarge: 14px (reduced)

## Accessibility Considerations

### Focus States
All interactive chamfered elements maintain visible focus outlines:
```
┌─── FOCUSED ───╲
│                │ ← 2px outline, 2px offset
╱────────────────┘
```

### Touch Targets
Minimum 44px height ensures mobile usability:
```
┌─── BUTTON (52px height) ───╲
│      Easy to tap            │
╱─────────────────────────────┘
```

### Content Clipping
Chamfered corners never clip text or important content. Adequate padding prevents any content from being cut off at the diagonal edges.

## Common Mistakes to Avoid

### ❌ Wrong: All 4 corners chamfered
```
╱────────╲
│        │
╱────────╲
```
This creates an octagon, not the Zion aesthetic.

### ❌ Wrong: Wrong corners chamfered (top-left & bottom-right)
```
╲────────┐
│        │
└────────╱
```
This feels unbalanced and goes against the design system.

### ❌ Wrong: Inconsistent chamfer sizes
```
┌──╲  ┌────╲  ┌╲
│   │ │     │ ││
╱──┘  ╱────┘  ╱┘
4px   8px     2px (inconsistent!)
```
Always use the defined sizes (4px, 8px, 12px, 16px).

### ✅ Correct: Bottom-left & top-right only
```
┌────────╲
│         │
╱─────────┘
```
This is the proper Zion aesthetic.

## Design Philosophy

The chamfered corner system embodies three key principles:

1. **Precision** - Every corner is intentionally designed, not rounded by default
2. **Technical Excellence** - The angular cuts reflect engineering and craftsmanship
3. **Visual Harmony** - Consistent application creates a unified design language

## Summary

The distinctive bottom-left and top-right chamfered corners create a unique, technical aesthetic that sets Martin Drexler's portfolio apart. By consistently applying this pattern across all UI elements with appropriate sizes, the design achieves both visual interest and functional clarity.
