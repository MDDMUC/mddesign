# Shadow Trader Design Tokens Applied to MD Design Website

**Date:** January 31, 2026
**Status:** ✅ Complete

---

## Summary

The MD Design website has been restyled with the **Shadow Trader retro amber terminal aesthetic** from the Polymarket Mirror Bot. This brings a cohesive, futuristic-retro visual language to the portfolio site.

---

## Design Changes Applied

### 1. Color System

#### Background Colors (From Shadow Trader)
```
--bg-black:    #1a1b1d  (Very dark charcoal/gray - not pure black)
--bg-dark:     #1a1b1d  (Primary background)
--surface-*:   #232426  (Panels and secondary surfaces)
```

#### Text Colors - Amber Spectrum
```
--text-primary:      #ffb000  (Standard Amber - main text)
--text-highlight:    #ffcc00  (Bright Amber - high intensity)
--text-muted:        #9a8f6d  (Desaturated/dimmed amber-gray)
--text-dark:         #5c5542  (Very dim amber-gray)
```

#### Accents & Functional Colors
```
--accent-primary:    #ffb000  (Amber glow)
--accent-error:      #cc5555  (Vintage alert red)
--green:             #88aa55  (Vintage phosphor green)
--cyan:              #56b6c2  (Muted cyan)
--stroke:            #3a3b3d  (Dark gray borders)
--stroke-active:     #ffb000  (Amber border on focus)
```

---

### 2. Typography System

**Font Family:** Share Tech Mono (from Google Fonts)
- Replaced Helvetica Neue with monospace retro aesthetic
- Applied across all headings, body text, and UI elements

**Text Treatment:**
```
letter-spacing:    0.05em      (80s terminal style)
text-transform:    uppercase   (Retro terminal convention)
font-smoothing:    none        (Pixelated/crisp appearance)
text-shadow:       Amber glow  (For headings h1-h2)
```

**Size Adjustments:**
- Heading scales reduced for better retro proportions
- Body text: 0.875rem (14px) - Shadow Trader's standard
- Micro labels: 0.65rem with 0.1em letter-spacing

---

### 3. Spacing System

**Unified Spacing Scale** (Replaces complex rem system)
```
--padding-xs:   4px      --space-1:   0.25rem
--padding-sm:   8px      --space-2:   0.5rem
--padding-md:   12px     --space-3:   0.75rem
--padding-lg:   16px     --space-4:   1rem
--padding-xl:   24px     --space-5:   1.5rem
--padding-2xl:  32px     --space-6:   2rem
--padding-3xl:  48px     --space-7:   3rem
```

All spacing now uses multiples of 4px base unit for consistency.

---

### 4. Border Radius

**Before:** Mix of 0, 5px, and rounded corners
**After:** Retro boxy aesthetic
```
--border-radius:  2px  (Base)
--radius-sm:      2px
--radius-md:      4px
--radius-full:    1000px (for rare pill-style buttons)
```

---

### 5. Visual Effects

#### CRT Scanline Effect
Added subtle horizontal scanlines overlay (opacity 0.3) for authentic 80s terminal feel:
```css
repeating-linear-gradient(
  0deg,
  rgba(0, 0, 0, 0.1) 1px,
  transparent 2px
)
```

#### Retro Scrollbar
```
Track:       Dark gray with border
Thumb:       Light gray, hovers to muted amber
Width:       12px (boxy/blocky)
```

#### Amber Glow
```
--shadow-glow-accent: 0 0 5px rgba(255, 176, 0, 0.4)
```
Applies to h1, h2, and accent text elements.

---

### 6. Files Modified

1. **`site/styles/tokens.css`**
   - All color tokens replaced with Shadow Trader palette
   - Font families updated to Share Tech Mono
   - Spacing system unified to 4px base
   - Border radius adjusted to retro boxy style

2. **`site/styles/globals.css`**
   - Added body letter-spacing, text-transform, font-smoothing
   - CRT scanline effect overlay (body::after)
   - Retro scrollbar styling (::-webkit-scrollbar)
   - Updated utility classes for new color scheme

3. **`site/styles/typography.css`**
   - All text classes updated with:
     - Share Tech Mono font
     - 0.05em letter-spacing
     - uppercase text-transform
     - Text shadow for headings (h1, h2)
   - Responsive typography adjusted for retro proportions
   - Semantic HTML (h1-h6, p) restyled

4. **`site/app/layout.tsx`**
   - Added Google Fonts import for Share_Tech_Mono
   - Applied font variable to html element

---

## Visual Language

### Aesthetic Profile
- **Era:** 1980s Retro Terminal / Amber CRT Monitor
- **Primary Interaction:** Amber text on dark charcoal background
- **Secondary:** Muted greens, reds, cyans (vintage phosphor palette)
- **Accents:** Glowing amber with scanline texture
- **Typography:** Monospace, uppercase, technical

### Color Psychology
- **Amber (#ffb000)** - Trust, precision, technical expertise
- **Charcoal (#1a1b1d)** - Professional, depth, sophistication
- **Vintage Green/Red** - Nostalgia, authenticity, retro credibility

---

## Design Integration Notes

### What Works Well
✅ Strong visual identity (immediately recognizable)
✅ Monospace typography = technical credibility for designer portfolio
✅ Retro aesthetic differentiates from modern flat design
✅ Amber on dark = excellent contrast and readability
✅ CRT scanlines add authentic texture without being distracting

### Considerations
⚠️ Uppercase text may affect body copy readability on mobile
⚠️ Monospace is less elegant for narrative content than serif fonts
⚠️ Retro aesthetic may feel gimmicky if not balanced with strong content

---

## Next Steps

1. **Test Deployment** - Build and verify on staging
2. **Component Audit** - Check all components render correctly with new tokens
3. **Content Review** - Ensure text hierarchy is maintained with uppercase transformation
4. **Responsive Testing** - Verify mobile experience with new typography
5. **Performance** - Monitor font loading (Share Tech Mono weight)

---

## Shadow Trader Design System Reference

**Source Files:**
- `polymarket-tracker/tamagui.config.ts` - Tamagui token definitions
- `polymarket-tracker/app/globals.css` - Global styles with scanlines
- `polymarket-tracker/components/` - Component implementations

**Key Characteristics:**
- Retro amber terminal palette (intentional, not accidental)
- Monospace typography throughout
- Minimal but precise spacing
- Boxy geometry (2-4px radius)
- CRT scanline texture overlay
- Uppercase typography convention

---

## Tokens Summary Table

| Element | Before | After |
|---------|--------|-------|
| **Background** | Pure black (#000) | Charcoal (#1a1b1d) |
| **Primary Text** | White (#fff) | Amber (#ffb000) |
| **Secondary Text** | Gray (#b0b0a9) | Muted Amber (#9a8f6d) |
| **Accent** | Neon Green (#dff140) | Retro Amber (#ffb000) |
| **Error** | Bright Red (#ff3535) | Vintage Red (#cc5555) |
| **Font** | Helvetica Neue | Share Tech Mono |
| **Letter Spacing** | -0.009rem | 0.05em |
| **Text Transform** | None | UPPERCASE |
| **Border Radius** | 0-5px | 2-4px (boxy) |
| **Effects** | None | CRT Scanlines + Glow |

---

**Integration Complete** ✅
All Shadow Trader design tokens successfully applied to MD Design website.
