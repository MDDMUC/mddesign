# Homepage Component Specifications
Martin Drexler Portfolio - Zion Virtual Control Aesthetic

References: `DESIGN_TOKENS.md` for all token values

---

## 1. Navigation

### Desktop Navigation

**Container**
- Height: 80px
- Width: 100%
- Background: `surface-primary`
- Border-bottom: `stroke-hairline` (1px) `stroke-faint`
- Position: sticky, top: 0
- Z-index: `z-sticky` (100)
- Padding: 0 `space-8` (64px)

**Layout**
```
[Logo]                                    [Work] [About] [Services] [Contact]
```
- Flexbox: justify-content: space-between, align-items: center
- Max-width: `container-xl` (1440px), centered

**Logo/Wordmark**
- Text: "MARTIN DREXLER" or "MD"
- Font: `font-mono`
- Size: `text-caption` (13px)
- Weight: 500
- Tracking: 0.12em
- Transform: uppercase
- Color: `text-primary`
- No hover state (link to home)

**Nav Items**
- Font: `font-mono`
- Size: `text-caption` (13px)
- Weight: 500
- Tracking: 0.08em
- Transform: uppercase
- Color: `text-secondary`
- Gap between items: `space-6` (32px)

**Nav Item States**
| State | Color | Decoration |
|-------|-------|------------|
| Default | `text-secondary` | None |
| Hover | `text-primary` | Underline 2px `stroke-primary`, offset 4px |
| Active (current page) | `text-primary` | Underline 2px `stroke-primary` |
| Focus | `text-primary` | 2px outline, offset 4px |

**Transitions**
- Color: `duration-fast` (100ms) `ease-default`
- Underline: `duration-fast` (100ms) `ease-out`

---

### Mobile Navigation

**Header Bar**
- Height: 64px
- Padding: 0 `space-5` (24px)
- Same styling as desktop

**Hamburger Button**
- Size: 44x44px (touch target)
- Icon: 3 horizontal lines, 18px wide, 1.5px stroke
- Color: `text-primary`
- Background: transparent
- Position: right side

**Hamburger States**
| State | Icon Color | Background |
|-------|------------|------------|
| Default | `text-primary` | transparent |
| Hover | `text-primary` | `surface-alt-1` |
| Active (open) | `text-primary` | `surface-alt-2` |
| Focus | `text-primary` | 2px outline |

**Mobile Menu Panel**
- Position: fixed, top: 64px, left: 0, right: 0
- Background: `surface-primary`
- Border-bottom: `stroke-thin` (1.5px) `stroke-secondary`
- Padding: `space-6` (32px) `space-5` (24px)
- Z-index: `z-overlay` (200)

**Mobile Nav Items**
- Display: flex, flex-direction: column
- Gap: `space-5` (24px)
- Font: `font-heading`
- Size: `text-h3` (20px)
- Weight: 500
- Color: `text-primary`
- Text-transform: none (sentence case)

**Animation**
- Panel: slide down, `duration-normal` (200ms) `ease-out`
- Reduced motion: instant appear

**Accessibility**
- Hamburger: `aria-label="Open menu"`, `aria-expanded="false/true"`
- Menu: `role="navigation"`, `aria-label="Main navigation"`
- Focus trap when open
- Escape key closes menu

---

## 2. Hero Section

**Container**
- Padding-top: `space-10` (128px)
- Padding-bottom: `space-9` (96px)
- Padding-horizontal: `space-8` (64px) desktop, `space-5` (24px) mobile
- Max-width: `container-md` (960px)
- Margin: 0 auto
- Text-align: center

**Headline**
- Text: "Strategic design partner for ambitious companies"
- Font: `font-heading`
- Size: `text-display` (56px) desktop, `text-h1` (40px) tablet, `text-h2` (28px) mobile
- Weight: 500
- Line-height: 1.1
- Tracking: -0.02em
- Color: `text-primary`
- Margin-bottom: `space-5` (24px)

**Subhead**
- Text: "I help funded startups and enterprises transform their products, brands, and teams—with the strategic thinking of a consultancy and the craft quality of an award-winning designer."
- Font: `font-body`
- Size: `text-body` (17px) desktop, `text-body-sm` (15px) mobile
- Weight: 400
- Line-height: 1.7
- Color: `text-secondary`
- Max-width: 640px
- Margin: 0 auto `space-7` (48px)

**CTA Container**
- Display: flex
- Gap: `space-4` (16px)
- Justify-content: center
- Flex-wrap: wrap (mobile)

**Primary CTA Button**
- Text: "View Selected Work"
- Height: 52px
- Padding: 0 `space-6` (32px)
- Font: `font-mono`
- Size: `text-caption` (13px)
- Weight: 500
- Tracking: 0.08em
- Transform: uppercase
- Border: `stroke-thin` (1.5px) `stroke-primary`
- Background: transparent
- Color: `text-primary`
- Clip-path: `chamfer-sm` (4px chamfer)

**Primary CTA States**
| State | Background | Border | Color |
|-------|------------|--------|-------|
| Default | transparent | `stroke-primary` | `text-primary` |
| Hover | `fill-hover` (#626262) | `stroke-primary` | `text-inverted` |
| Active | `fill-active` (#4A4A4A) | `stroke-primary` | `text-inverted` |
| Focus | transparent | 2px `stroke-primary` | `text-primary` |

**Secondary CTA Button**
- Text: "Start a Conversation"
- Same dimensions as primary
- Border: `stroke-hairline` (1px) `stroke-secondary`
- Background: transparent
- Color: `text-secondary`

**Secondary CTA States**
| State | Background | Border | Color |
|-------|------------|--------|-------|
| Default | transparent | `stroke-secondary` | `text-secondary` |
| Hover | transparent | `stroke-primary` | `text-primary` |
| Active | `surface-alt-2` | `stroke-primary` | `text-primary` |
| Focus | transparent | 2px `stroke-primary` | `text-primary` |

**Button Transitions**
- All properties: `duration-fast` (100ms) `ease-default`

**Responsive**
- Mobile: Buttons stack vertically, full width
- Tablet: Buttons side by side
- Desktop: Buttons side by side, centered

**Accessibility**
- Buttons: `role="link"` if navigation, proper focus order
- Headline: `<h1>` semantic tag

---

## 3. Proof Section

**Container**
- Padding: `space-9` (96px) `space-8` (64px)
- Background: `surface-alt-1`
- Border-top: `stroke-hairline` (1px) `stroke-faint`
- Border-bottom: `stroke-hairline` (1px) `stroke-faint`

**Section Headline**
- Text: "25+ International Design Awards"
- Font: `font-heading`
- Size: `text-h2` (28px)
- Weight: 500
- Color: `text-primary`
- Text-align: center
- Margin-bottom: `space-7` (48px)

### Award Badge Grid

**Grid Container**
- Display: grid
- Gap: `space-5` (24px)
- Grid: 6 columns desktop, 4 columns tablet, 2 columns mobile
- Max-width: `container-lg` (1200px)
- Margin: 0 auto `space-8` (64px)

**Award Badge Item**
- Aspect-ratio: 1 / 1 (square)
- Max-width: 120px
- Display: flex
- Align-items: center
- Justify-content: center
- Padding: `space-3` (12px)
- Border: `stroke-hairline` (1px) `stroke-faint`
- Background: `surface-primary`

**Badge Image**
- Filter: grayscale(100%)
- Opacity: 0.7
- Object-fit: contain
- Max-width: 80%
- Max-height: 80%

**Badge Hover State**
- Opacity: 1
- Border-color: `stroke-secondary`
- Transition: `duration-fast` (100ms)

### Client Logo Row

**Container**
- Display: flex
- Gap: `space-7` (48px)
- Justify-content: center
- Align-items: center
- Flex-wrap: wrap
- Max-width: `container-lg` (1200px)
- Margin: 0 auto

**Logo Item**
- Height: 32px desktop, 24px mobile
- Width: auto
- Filter: grayscale(100%)
- Opacity: 0.5

**Logo Hover State**
- Opacity: 0.8
- Transition: `duration-fast` (100ms)

**Logo Images**
- BMW, Red Bull, CEPRES, Olympic Museum, Keller Sports, Peak Performance
- All monochrome/greyscale versions
- SVG preferred for crisp rendering

**Accessibility**
- Each logo: `alt="[Company name] logo"`
- Section: `aria-labelledby` pointing to headline

---

## 4. Services Preview Cards

**Section Container**
- Padding: `space-9` (96px) `space-8` (64px)
- Max-width: `container-lg` (1200px)
- Margin: 0 auto

**Section Header**
- Optional micro label: "WHAT I DO"
- Font: `font-mono`, `text-micro` (11px), tracking 0.08em, uppercase
- Color: `text-secondary`
- Margin-bottom: `space-3` (12px)

**Cards Grid**
- Display: grid
- Grid: 3 columns desktop, 1 column mobile
- Gap: `space-6` (32px)

### Service Card

**Card Container**
- Padding: `space-6` (32px)
- Border: `stroke-hairline` (1px) `stroke-faint`
- Background: `surface-primary`
- Min-height: 280px
- Display: flex
- Flex-direction: column

**Icon/Visual Area**
- Size: 48x48px
- Margin-bottom: `space-5` (24px)
- Color: `stroke-secondary`
- Stroke-width: 1.5px
- Icons: Thin line, geometric (compass for Strategic, grid for Product, shapes for Brand)

**Card Title**
- Font: `font-heading`
- Size: `text-h3` (20px)
- Weight: 500
- Color: `text-primary`
- Margin-bottom: `space-3` (12px)

**Card Description**
- Font: `font-body`
- Size: `text-body-sm` (15px)
- Line-height: 1.6
- Color: `text-secondary`
- Flex-grow: 1

**Card Services**
1. Strategic Leadership: "Act as your embedded Head of Design, building teams, processes, and design culture from the inside."
2. Product Design: "Transform complex products from research through launch with systematic UX and polished interfaces."
3. Brand Systems: "Create cohesive brand identities that scale across every touchpoint and channel."

**Card States**
| State | Border | Background |
|-------|--------|------------|
| Default | `stroke-faint` | `surface-primary` |
| Hover | `stroke-secondary` | `surface-primary` |
| Focus-within | `stroke-primary` (2px) | `surface-primary` |

**Card Hover Effects**
- Border transition: `duration-fast` (100ms)
- Icon color shifts to `stroke-primary`
- Optional: Subtle translate Y -2px

**Responsive**
- Mobile: Single column, full width cards
- Tablet: 2 columns (third card spans or stacks)
- Desktop: 3 columns

**Accessibility**
- Cards are not clickable containers (links inside if needed)
- Proper heading hierarchy: `<h3>` for titles

---

## 5. Featured Work Cards

**Section Container**
- Padding: `space-9` (96px) `space-8` (64px)
- Background: `surface-primary`

**Section Header**
- Micro label: "SELECTED WORK"
- Font: `font-mono`, `text-micro` (11px), tracking 0.08em, uppercase
- Color: `text-secondary`
- Margin-bottom: `space-6` (32px)

**Cards Grid**
- Display: grid
- Grid: 3 columns desktop, 2 columns tablet, 1 column mobile
- Gap: `space-6` (32px)
- Max-width: `container-lg` (1200px)
- Margin: 0 auto

### Project Card

**Card Container**
- Border: `stroke-hairline` (1px) `stroke-faint`
- Background: `surface-primary`
- Overflow: hidden
- Cursor: pointer
- Text-decoration: none

**Thumbnail Area**
- Aspect-ratio: 16 / 10
- Background: `surface-alt-2`
- Overflow: hidden
- Position: relative

**Thumbnail Image**
- Width: 100%
- Height: 100%
- Object-fit: cover
- Filter: grayscale(100%)
- Transition: filter `duration-normal` (200ms)

**Client Logo (on thumbnail)**
- Position: absolute
- Bottom: `space-3` (12px)
- Left: `space-3` (12px)
- Height: 20px
- Width: auto
- Filter: brightness(0) invert(1) (white)
- Opacity: 0.8

**Card Content**
- Padding: `space-5` (24px)

**Project Title**
- Font: `font-heading`
- Size: `text-h3` (20px)
- Weight: 500
- Color: `text-primary`
- Margin-bottom: `space-2` (8px)

**Project Description**
- Font: `font-body`
- Size: `text-body-sm` (15px)
- Line-height: 1.5
- Color: `text-secondary`
- Margin-bottom: `space-3` (12px)
- Max 50 characters, single line with ellipsis

**Key Metric**
- Font: `font-mono`
- Size: `text-micro` (11px)
- Weight: 500
- Tracking: 0.08em
- Transform: uppercase
- Color: `text-secondary`

**Featured Projects Content**
1. CEPRES
   - Title: "CEPRES"
   - Description: "Enterprise investment platform"
   - Metric: "6 AWARDS / $45T ASSETS"

2. Young Champion Ambassador
   - Title: "YCA Program"
   - Description: "Olympic youth leadership program"
   - Metric: "25+ CITIES / ACQUIRED BY IOA"

3. Keller Sports
   - Title: "Keller Sports"
   - Description: "Premium sports e-commerce"
   - Metric: "13 AWARDS / HEAD OF DESIGN"

**Card States**
| State | Border | Image Filter | Transform |
|-------|--------|--------------|-----------|
| Default | `stroke-faint` | grayscale(100%) | none |
| Hover | `stroke-secondary` | grayscale(0%) | translateY(-4px) |
| Focus | `stroke-primary` (2px) | grayscale(50%) | none |
| Active | `stroke-primary` | grayscale(0%) | translateY(0) |

**Transitions**
- Border, transform: `duration-fast` (100ms) `ease-default`
- Image filter: `duration-normal` (200ms) `ease-out`

**Responsive**
- Mobile: Single column, full width
- Tablet: 2 columns
- Desktop: 3 columns

**Accessibility**
- Each card: `<a>` wrapping entire card
- Focus visible on whole card
- Alt text for thumbnail: "[Project name] - [brief description]"
- Announce metric as part of accessible name

---

## 6. About Teaser

**Section Container**
- Padding: `space-9` (96px) `space-8` (64px)
- Background: `surface-alt-1`
- Border-top: `stroke-hairline` (1px) `stroke-faint`

**Inner Container**
- Max-width: `container-md` (960px)
- Margin: 0 auto
- Display: grid
- Grid: 2 columns (40% / 60%) desktop, 1 column mobile
- Gap: `space-7` (48px)
- Align-items: center

### Portrait Image

**Image Container**
- Aspect-ratio: 4 / 5
- Max-width: 320px
- Border: `stroke-hairline` (1px) `stroke-faint`
- Overflow: hidden

**Image**
- Width: 100%
- Height: 100%
- Object-fit: cover
- Filter: grayscale(100%)

**Image Hover**
- Filter: grayscale(0%)
- Transition: `duration-slow` (400ms)

### Text Block

**Micro Label**
- Text: "ABOUT"
- Font: `font-mono`
- Size: `text-micro` (11px)
- Tracking: 0.08em
- Transform: uppercase
- Color: `text-secondary`
- Margin-bottom: `space-3` (12px)

**Headline**
- Text: "Martin Drexler"
- Font: `font-heading`
- Size: `text-h2` (28px)
- Weight: 500
- Color: `text-primary`
- Margin-bottom: `space-4` (16px)

**Body Text**
- Text: ~100 words about Martin (from content strategy)
- Font: `font-body`
- Size: `text-body` (17px)
- Line-height: 1.7
- Color: `text-secondary`
- Margin-bottom: `space-5` (24px)

**CTA Link**
- Text: "More about me"
- Font: `font-mono`
- Size: `text-caption` (13px)
- Weight: 500
- Tracking: 0.08em
- Color: `text-primary`
- Text-decoration: underline 1px `stroke-faint`, offset 4px
- Display: inline-flex
- Align-items: center
- Gap: `space-2` (8px)

**Arrow Icon**
- Size: 16px
- Stroke: 1.5px
- Color: `text-primary`
- Transform on hover: translateX(4px)

**CTA Link States**
| State | Color | Underline | Arrow |
|-------|-------|-----------|-------|
| Default | `text-primary` | 1px `stroke-faint` | translateX(0) |
| Hover | `text-primary` | 2px `stroke-primary` | translateX(4px) |
| Focus | `text-primary` | 2px `stroke-primary` | translateX(0) |

**Responsive**
- Mobile: Stack vertically, image first, centered
- Desktop: Side by side, image left

**Accessibility**
- Image: `alt="Martin Drexler, professional portrait"`
- Link: Clear destination text

---

## 7. Contact CTA

**Section Container**
- Padding: `space-10` (128px) `space-8` (64px)
- Background: `surface-primary`
- Border-top: `stroke-hairline` (1px) `stroke-faint`
- Text-align: center

**Inner Container**
- Max-width: `container-sm` (640px)
- Margin: 0 auto

**Headline**
- Text: "Let's talk about your challenge"
- Font: `font-heading`
- Size: `text-h2` (28px) desktop, `text-h3` (20px) mobile
- Weight: 500
- Color: `text-primary`
- Margin-bottom: `space-4` (16px)

**Subhead**
- Text: "I partner with ambitious companies to transform their products, brands, and teams. Let's discuss how I can help."
- Font: `font-body`
- Size: `text-body` (17px)
- Line-height: 1.7
- Color: `text-secondary`
- Margin-bottom: `space-6` (32px)

**CTA Button**
- Text: "Start a Conversation"
- Same styling as Hero Primary CTA
- Height: 52px
- Padding: 0 `space-6` (32px)
- Chamfered corners

**Alternative**
- Small text below button: "or email hello@martindrexler.com"
- Font: `font-mono`
- Size: `text-micro` (11px)
- Color: `text-secondary`
- Margin-top: `space-4` (16px)

**Email Link**
- Color: `text-primary`
- Underline on hover

**Responsive**
- Mobile: Reduce padding, button full width
- Desktop: Centered, generous whitespace

**Accessibility**
- Button: Clear call to action
- Email link: `href="mailto:..."`

---

## Layout Summary

**Full Page Structure (Top to Bottom)**

```
┌─────────────────────────────────────────────────────────┐
│ [Navigation]                                    80px    │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ [Hero Section]                                          │
│ 128px top / 96px bottom padding                         │
│                                                         │
├─────────────────────────────────────────────────────────┤
│ [Proof Section]                              surface-alt│
│ Award badges + Client logos                             │
│ 96px vertical padding                                   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ [Services Preview]                                      │
│ 3 cards, 96px vertical padding                          │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ [Featured Work]                                         │
│ 3 project cards, 96px vertical padding                  │
│                                                         │
├─────────────────────────────────────────────────────────┤
│ [About Teaser]                               surface-alt│
│ Portrait + text, 96px vertical padding                  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ [Contact CTA]                                           │
│ 128px vertical padding                                  │
│                                                         │
├─────────────────────────────────────────────────────────┤
│ [Footer]                                                │
└─────────────────────────────────────────────────────────┘
```

**Section Rhythm**
- Alternating backgrounds: primary → alt → primary → primary → alt → primary
- Consistent 96px section padding (128px for hero/contact)
- Faint 1px borders between sections

---

## Responsive Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | < 768px | Single column, stacked layout, 24px side padding |
| Tablet | 768-1024px | 2 columns where appropriate, 48px side padding |
| Desktop | > 1024px | Full layout, 64px side padding, max-widths apply |

---

## Accessibility Checklist

- [ ] All interactive elements have visible focus states
- [ ] Color contrast meets WCAG AA (4.5:1 body, 3:1 large)
- [ ] Touch targets minimum 44x44px
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] All images have alt text
- [ ] Navigation is keyboard accessible
- [ ] Mobile menu has focus trap
- [ ] Skip link to main content (hidden until focus)
- [ ] Reduced motion respected

---

*Design Agent - 2026-01-09*
