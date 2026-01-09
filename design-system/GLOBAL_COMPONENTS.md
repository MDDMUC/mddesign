# Global Components
Martin Drexler Portfolio - Zion Virtual Control Aesthetic

Used across: Homepage, Case Studies, About, Services, Contact

References: `DESIGN_TOKENS.md` for all token values

---

## 1. Footer

**Container**
- Width: 100%
- Background: `surface-alt-2`
- Border-top: `stroke-thin` (1.5px) `stroke-secondary`
- Padding: `space-8` (64px) desktop, `space-6` (32px) mobile

**Inner Container**
- Max-width: `container-lg` (1200px)
- Margin: 0 auto
- Padding-horizontal: `space-8` (64px) desktop, `space-5` (24px) mobile

### Desktop Layout

```
┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│  MARTIN DREXLER              Work  About  Services  Contact        │
│                                                                    │
│  Strategic design partner    hello@martindrexler.com               │
│  for ambitious companies     Munich, Germany                       │
│                                                                    │
│  ─────────────────────────────────────────────────────────────     │
│                                                                    │
│  © 2026 Martin Drexler       [LinkedIn]        Privacy  Imprint    │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

**Grid Layout**
- Display: grid
- Grid: 2 columns (1fr 1fr) desktop, 1 column mobile
- Gap: `space-7` (48px)

### Left Column

**Logo/Wordmark**
- Text: "MARTIN DREXLER"
- Font: `font-mono`
- Size: `text-caption` (13px)
- Weight: 500
- Tracking: 0.12em
- Transform: uppercase
- Color: `text-primary`
- Margin-bottom: `space-4` (16px)

**Tagline**
- Text: "Strategic design partner for ambitious companies"
- Font: `font-body`
- Size: `text-body-sm` (15px)
- Color: `text-secondary`
- Max-width: 280px

### Right Column

**Navigation Links**
- Display: flex
- Gap: `space-5` (24px)
- Margin-bottom: `space-5` (24px)

**Nav Link**
- Font: `font-mono`
- Size: `text-caption` (13px)
- Weight: 500
- Tracking: 0.04em
- Color: `text-secondary`
- Text-decoration: none

**Nav Link States**
| State | Color | Decoration |
|-------|-------|------------|
| Default | `text-secondary` | None |
| Hover | `text-primary` | Underline 1px |
| Focus | `text-primary` | 2px outline offset |

**Contact Info**
- Display: flex
- Flex-direction: column
- Gap: `space-2` (8px)

**Contact Item**
- Font: `font-mono`
- Size: `text-caption` (13px)
- Color: `text-secondary`

**Email Link**
- Color: `text-primary`
- Hover: underline

### Bottom Bar

**Container**
- Margin-top: `space-6` (32px)
- Padding-top: `space-5` (24px)
- Border-top: `stroke-hairline` (1px) `stroke-faint`
- Display: flex
- Justify-content: space-between
- Align-items: center
- Flex-wrap: wrap
- Gap: `space-4` (16px)

**Copyright**
- Text: "© 2026 Martin Drexler Design LLC"
- Font: `font-mono`
- Size: `text-micro` (11px)
- Color: `text-muted`

**Social Links**
- Display: flex
- Gap: `space-4` (16px)

**Social Icon**
- Size: 20px
- Stroke: 1.5px
- Color: `text-secondary`
- Hover: `text-primary`

**Legal Links**
- Display: flex
- Gap: `space-4` (16px)

**Legal Link**
- Font: `font-mono`
- Size: `text-micro` (11px)
- Color: `text-muted`
- Hover: `text-secondary`

### Mobile Layout

**Stack Order**
1. Logo/wordmark
2. Tagline
3. Navigation (2x2 grid)
4. Contact info
5. Divider
6. Copyright + Social + Legal (stacked)

**Mobile Adjustments**
- All text centered or left-aligned (consistent)
- Navigation: 2 columns grid
- Gap reduced to `space-4` (16px)

**Accessibility**
- Footer: `<footer>` semantic tag
- Navigation: `<nav>` with `aria-label="Footer navigation"`
- Social links: `aria-label="LinkedIn profile"` etc.
- Email: `href="mailto:..."`

---

## 2. Form Inputs

### Text Input (Single Line)

**Container**
- Width: 100%
- Position: relative

**Label**
- Font: `font-mono`
- Size: `text-micro` (11px)
- Weight: 500
- Tracking: 0.08em
- Transform: uppercase
- Color: `text-secondary`
- Margin-bottom: `space-2` (8px)
- Display: block

**Input Field**
- Height: 52px
- Width: 100%
- Padding: 0 `space-4` (16px)
- Font: `font-body`
- Size: `text-body` (17px)
- Color: `text-primary`
- Background: `surface-primary`
- Border: `stroke-hairline` (1px) `stroke-secondary`
- Border-radius: 0 (sharp corners)

**Input States**

| State | Border | Background | Text |
|-------|--------|------------|------|
| Default | 1px `stroke-secondary` | `surface-primary` | `text-primary` |
| Hover | 1px `stroke-primary` | `surface-primary` | `text-primary` |
| Focus | 2px `stroke-primary` | `surface-primary` | `text-primary` |
| Filled | 1px `stroke-secondary` | `surface-primary` | `text-primary` |
| Error | 2px `accent-alert` | `surface-primary` | `text-primary` |
| Disabled | 1px `stroke-faint` | `surface-alt-1` | `text-muted` |

**Placeholder**
- Color: `text-muted`
- Font-style: normal

**Transitions**
- Border: `duration-fast` (100ms) `ease-default`

### Textarea (Multi-line)

**Field**
- Min-height: 160px
- Padding: `space-4` (16px)
- Resize: vertical
- Same styling as text input

**Character Count (Optional)**
- Position: absolute
- Bottom: `space-3` (12px)
- Right: `space-4` (16px)
- Font: `font-mono`
- Size: `text-micro` (11px)
- Color: `text-muted`

### Error Message

**Container**
- Margin-top: `space-2` (8px)
- Display: flex
- Align-items: center
- Gap: `space-2` (8px)

**Error Icon**
- Size: 14px
- Color: `accent-alert`

**Error Text**
- Font: `font-body`
- Size: `text-body-sm` (15px)
- Color: `accent-alert`

**Error Messages**
- Name: "Please enter your name"
- Email: "Please enter a valid email address"
- Message: "Please enter a message"

### Success State

**Input Border**
- Color: `stroke-primary` (2px)

**Success Icon (Optional)**
- Position: absolute
- Right: `space-4` (16px)
- Top: 50%
- Transform: translateY(-50%)
- Size: 16px
- Color: `text-primary` (checkmark)

### Required Indicator

**Asterisk**
- Text: "*"
- Color: `text-secondary`
- Margin-left: `space-1` (4px)

**Or Screen Reader Only**
- Visually hidden text: "(required)"

### Form Layout

**Form Container**
- Max-width: 560px
- Display: flex
- Flex-direction: column
- Gap: `space-5` (24px)

**Field Groups (Name + Email Side by Side)**
- Display: grid
- Grid: 2 columns desktop, 1 column mobile
- Gap: `space-5` (24px)

### Submit Button

See Button component (#4) for full spec.

- Text: "Send Message"
- Primary button style
- Full width on mobile
- Min-width: 200px on desktop

**Submit States**
- Default: Ready to submit
- Loading: Show spinner, disable interaction
- Success: Show checkmark, change text to "Message Sent"
- Error: Show error state, allow retry

**Accessibility**
- All inputs: Proper `<label>` with `for` attribute
- Required fields: `aria-required="true"`
- Error states: `aria-invalid="true"`, `aria-describedby` pointing to error message
- Error messages: `role="alert"` or `aria-live="polite"`
- Focus order: Label → Input → Error message
- Visible focus indicators on all inputs

---

## 3. Testimonial Cards

### Single Testimonial (Featured)

**Container**
- Max-width: `container-sm` (640px)
- Margin: 0 auto
- Padding: `space-7` (48px)
- Background: `surface-alt-1`
- Border: `stroke-hairline` (1px) `stroke-faint`
- Text-align: center

**Quote Mark (Decorative)**
- Character: " (open quote)
- Font: `font-heading`
- Size: 72px
- Color: `stroke-faint`
- Line-height: 1
- Margin-bottom: `space-4` (16px)

**Quote Text**
- Font: `font-body`
- Size: `text-h3` (20px)
- Weight: 400
- Font-style: italic
- Line-height: 1.6
- Color: `text-primary`
- Margin-bottom: `space-5` (24px)

**Attribution**

**Name**
- Font: `font-heading`
- Size: `text-body` (17px)
- Weight: 500
- Color: `text-primary`

**Title + Company**
- Font: `font-mono`
- Size: `text-caption` (13px)
- Color: `text-secondary`
- Margin-top: `space-1` (4px)

**Avatar (Optional)**
- Size: 48px
- Border-radius: 0 (square, matching aesthetic)
- Border: `stroke-hairline` (1px) `stroke-faint`
- Filter: grayscale(100%)
- Margin-bottom: `space-3` (12px)

### Testimonial Grid (Multiple)

**Grid Container**
- Display: grid
- Grid: 2 columns desktop, 1 column mobile
- Gap: `space-5` (24px)

### Grid Testimonial Card

**Container**
- Padding: `space-5` (24px)
- Background: `surface-primary`
- Border: `stroke-hairline` (1px) `stroke-faint`

**Quote Text**
- Font: `font-body`
- Size: `text-body-sm` (15px)
- Font-style: italic
- Line-height: 1.6
- Color: `text-secondary`
- Margin-bottom: `space-4` (16px)

**Attribution Row**
- Display: flex
- Align-items: center
- Gap: `space-3` (12px)

**Avatar**
- Size: 40px
- Border: `stroke-hairline` (1px) `stroke-faint`
- Filter: grayscale(100%)

**Text Block**

**Name**
- Font: `font-body`
- Size: `text-body-sm` (15px)
- Weight: 500
- Color: `text-primary`

**Title**
- Font: `font-mono`
- Size: `text-micro` (11px)
- Color: `text-secondary`

### Testimonial Content

**Ryan Cobb - NASA**
- Quote: "Martin is the gold standard for product design leadership..."
- Name: Ryan Cobb
- Title: Program Manager, NASA

**Dr. Tyler Phillips - USAF/JetBlue**
- Quote: "Martin's ability to understand complex problems..."
- Name: Dr. Tyler Phillips
- Title: Former USAF, Director at JetBlue

**Mark Wright - DDS**
- Quote: "Working with Martin transformed our digital presence..."
- Name: Mark Wright
- Title: Founder, DDS

**Joe Murray - Newmont Mining**
- Quote: "Martin brought strategic clarity to our design challenges..."
- Name: Joe Murray
- Title: Executive, Newmont Mining

**Card Hover State (Grid Only)**
- Border: `stroke-secondary`
- Transition: `duration-fast` (100ms)

**Accessibility**
- Testimonials: `<blockquote>` with `<cite>` for attribution
- Avatar images: `alt="[Name]"` or decorative `alt=""`

---

## 4. Buttons (Comprehensive)

### Primary Button

**Dimensions**
- Height: 52px
- Min-width: 160px
- Padding: 0 `space-6` (32px)

**Typography**
- Font: `font-mono`
- Size: `text-caption` (13px)
- Weight: 500
- Tracking: 0.08em
- Transform: uppercase

**Styling**
- Background: transparent
- Border: `stroke-thin` (1.5px) `stroke-primary`
- Color: `text-primary`
- Clip-path: `chamfer-sm` (4px chamfered corners)
- Cursor: pointer

**States**

| State | Background | Border | Color |
|-------|------------|--------|-------|
| Default | transparent | `stroke-primary` | `text-primary` |
| Hover | `fill-hover` (#626262) | `stroke-primary` | `text-inverted` |
| Active | `fill-active` (#4A4A4A) | `stroke-primary` | `text-inverted` |
| Focus | transparent | 2px `stroke-primary` + 2px outline offset | `text-primary` |
| Disabled | transparent | `stroke-faint` | `text-muted` |
| Loading | `fill-hover` | `stroke-primary` | `text-inverted` |

**Transitions**
- All properties: `duration-fast` (100ms) `ease-default`

### Secondary Button

**Dimensions**
- Same as primary

**Styling**
- Background: transparent
- Border: `stroke-hairline` (1px) `stroke-secondary`
- Color: `text-secondary`
- Corners: Sharp (no chamfer)

**States**

| State | Background | Border | Color |
|-------|------------|--------|-------|
| Default | transparent | `stroke-secondary` | `text-secondary` |
| Hover | transparent | `stroke-primary` | `text-primary` |
| Active | `surface-alt-2` | `stroke-primary` | `text-primary` |
| Focus | transparent | 2px `stroke-primary` | `text-primary` |
| Disabled | transparent | `stroke-faint` | `text-muted` |

### Text Link Button

**Dimensions**
- Height: auto
- Padding: `space-2` (8px) 0

**Styling**
- Background: transparent
- Border: none
- Color: `text-primary`
- Text-decoration: underline 1px `stroke-faint`, offset 4px

**States**

| State | Color | Decoration |
|-------|-------|------------|
| Default | `text-primary` | 1px underline `stroke-faint` |
| Hover | `text-primary` | 2px underline `stroke-primary` |
| Active | `text-primary` | 2px underline `stroke-primary` |
| Focus | `text-primary` | 2px outline offset |
| Disabled | `text-muted` | 1px underline `stroke-faint` |

### Button with Icon

**Layout**
- Display: inline-flex
- Align-items: center
- Gap: `space-2` (8px)

**Icon**
- Size: 16px
- Stroke: 1.5px
- Color: inherit

**Icon Position**
- Left: Arrow left, plus icons
- Right: Arrow right, external link icons

**Icon Hover Animation**
- Arrow right: translateX(4px)
- Arrow left: translateX(-4px)
- Transition: `duration-fast` (100ms)

### Size Variants

**Small Button**
- Height: 40px
- Padding: 0 `space-4` (16px)
- Font-size: `text-micro` (11px)
- Min-width: 120px

**Large Button**
- Height: 60px
- Padding: 0 `space-7` (48px)
- Font-size: `text-caption` (13px)
- Min-width: 200px

### Full-Width Button (Mobile)

**Styling**
- Width: 100%
- Justify-content: center

**Accessibility**
- All buttons: Minimum 44x44px touch target
- Focus visible: High contrast outline
- Disabled: `aria-disabled="true"`, cursor: not-allowed
- Loading: `aria-busy="true"`, visually show spinner
- Icon-only: `aria-label` with action description

---

## 5. Callout Panels

### Info Callout

**Container**
- Background: `surface-alt-1`
- Border: `stroke-hairline` (1px) `stroke-faint`
- Padding: `space-5` (24px)
- Margin: `space-6` (32px) 0

**Header (Optional)**
- Font: `font-mono`
- Size: `text-micro` (11px)
- Tracking: 0.08em
- Transform: uppercase
- Color: `text-secondary`
- Margin-bottom: `space-3` (12px)

**Content**
- Font: `font-body`
- Size: `text-body-sm` (15px)
- Line-height: 1.6
- Color: `text-primary`

### Metric Callout

**Container**
- Background: `surface-alt-2`
- Border: `stroke-thin` (1.5px) `stroke-secondary`
- Padding: `space-6` (32px)
- Clip-path: `chamfer-md` (8px chamfer)

**Layout**
- Display: flex
- Align-items: baseline
- Gap: `space-3` (12px)

**Metric Value**
- Font: `font-heading`
- Size: `text-h1` (40px)
- Weight: 500
- Color: `text-primary`

**Metric Label**
- Font: `font-mono`
- Size: `text-caption` (13px)
- Color: `text-secondary`

### Insight Callout (List)

**Container**
- Background: `surface-primary`
- Border-left: `stroke-medium` (2px) `stroke-primary`
- Padding: `space-5` (24px)
- Padding-left: `space-6` (32px)
- Margin: `space-6` (32px) 0

**Header**
- Text: "Key Insights" or custom
- Font: `font-mono`
- Size: `text-micro` (11px)
- Tracking: 0.08em
- Transform: uppercase
- Color: `text-secondary`
- Margin-bottom: `space-4` (16px)

**List**
- Display: flex
- Flex-direction: column
- Gap: `space-3` (12px)

**List Item**
- Font: `font-body`
- Size: `text-body-sm` (15px)
- Color: `text-primary`
- Padding-left: `space-4` (16px)
- Position: relative

**Bullet**
- Width: 8px
- Height: 1px
- Background: `stroke-secondary`
- Position: absolute
- Left: 0
- Top: 10px

### Quote Callout

**Container**
- Background: transparent
- Border-left: `stroke-thin` (1.5px) `stroke-secondary`
- Padding: `space-5` (24px)
- Padding-left: `space-6` (32px)
- Margin: `space-6` (32px) 0

**Quote Text**
- Font: `font-heading`
- Size: `text-h3` (20px)
- Weight: 400
- Font-style: italic
- Line-height: 1.6
- Color: `text-primary`

**Attribution**
- Font: `font-mono`
- Size: `text-caption` (13px)
- Color: `text-secondary`
- Margin-top: `space-4` (16px)

### Technical Callout (Code/Data)

**Container**
- Background: `surface-alt-2`
- Border: `stroke-hairline` (1px) `stroke-faint`
- Padding: `space-5` (24px)
- Font-family: `font-mono`

**Label**
- Font: `font-mono`
- Size: `text-micro` (11px)
- Color: `text-muted`
- Margin-bottom: `space-3` (12px)

**Content**
- Font: `font-mono`
- Size: `text-mono` (14px)
- Line-height: 1.5
- Color: `text-primary`

**Decorative Brackets (Optional)**
- Corner brackets at all four corners
- Stroke: 1px `stroke-faint`
- Size: 12px L-shapes

**Accessibility**
- Semantic markup: `<aside>` or `<div role="note">`
- Lists: Proper `<ul>` markup
- Quotes: `<blockquote>` with `<cite>`

---

## 6. Loading States

### Page Transition

**Overlay**
- Position: fixed
- Inset: 0
- Background: `surface-primary`
- Z-index: `z-overlay` (200)

**Animation**
- Fade out: `duration-normal` (200ms) `ease-out`
- Start: opacity 1
- End: opacity 0, pointer-events none

**Reduced Motion**
- Instant transition (0ms)

### Skeleton Loading (Content)

**Skeleton Block**
- Background: `surface-alt-1`
- Border-radius: 0
- Animation: Pulse (opacity 0.6 → 1 → 0.6)
- Duration: 1.5s
- Timing: ease-in-out
- Iteration: infinite

**Skeleton Variants**

| Type | Height | Width |
|------|--------|-------|
| Heading | 40px | 60% |
| Paragraph | 17px | 100% (multiple lines) |
| Image | Aspect ratio match | 100% |
| Button | 52px | 160px |

**Reduced Motion**
- Static grey block, no animation

### Image Loading

**Container**
- Background: `surface-alt-2`
- Border: `stroke-hairline` (1px) `stroke-faint`
- Position: relative
- Overflow: hidden

**Placeholder**
- Aspect ratio matches final image
- Background: `surface-alt-2`

**Loading Indicator (Optional)**
- Thin line animation at bottom
- Width: 0% → 100%
- Height: 2px
- Color: `stroke-secondary`
- Duration: Variable (based on load progress)

**Image Reveal**
- Opacity: 0 → 1
- Duration: `duration-normal` (200ms)
- Timing: `ease-out`

**Reduced Motion**
- Instant appear (no fade)

### Form Submission

**Button Loading State**
- Background: `fill-hover`
- Color: `text-inverted`
- Cursor: wait
- Pointer-events: none

**Spinner**
- Size: 16px
- Stroke: 2px
- Color: `text-inverted`
- Animation: Rotate 360deg
- Duration: 800ms
- Timing: linear
- Iteration: infinite

**Spinner SVG**
```svg
<svg width="16" height="16" viewBox="0 0 16 16">
  <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor"
          stroke-width="2" stroke-dasharray="28" stroke-dashoffset="7"
          transform="rotate(-90 8 8)"/>
</svg>
```

**Loading Text**
- Replace button text with "Sending..." or keep original
- Or hide text and show only spinner

**Reduced Motion**
- Static ellipsis animation: "Sending..." with dots cycling
- Or static "Sending..." text

### Success State

**Button**
- Background: `fill-hover`
- Show checkmark icon
- Text: "Sent" or "Success"
- Duration: Show for 2 seconds, then reset

**Checkmark Animation**
- Draw-on effect
- Duration: `duration-normal` (200ms)
- Stroke-dashoffset animation

**Reduced Motion**
- Instant checkmark appear

### Error State

**Button**
- Reset to default state
- Show error message below form

**Error Message**
- Background: transparent
- Border: `stroke-hairline` (1px) `accent-alert`
- Padding: `space-4` (16px)
- Margin-top: `space-4` (16px)

**Error Icon**
- Size: 16px
- Color: `accent-alert`

**Error Text**
- Font: `font-body`
- Size: `text-body-sm` (15px)
- Color: `accent-alert`

### Progress Indicators

**Determinate Progress Bar**
- Height: 2px
- Background: `stroke-faint`
- Progress fill: `stroke-primary`
- Transition: width `duration-fast` (100ms)

**Indeterminate Progress**
- Height: 2px
- Background: `stroke-faint`
- Animated bar sliding left to right
- Width: 30%
- Duration: 1.5s
- Timing: ease-in-out
- Iteration: infinite

**Reduced Motion**
- Static bar at 50% or pulsing opacity

### Loading Accessibility

**General**
- Loading states: `aria-busy="true"` on container
- Progress: `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`
- Status updates: `aria-live="polite"` region

**Screen Reader Announcements**
- "Loading..."
- "Submitting form..."
- "Message sent successfully"
- "Error: [message]"

---

## Skip Link

**Hidden by Default**
- Position: absolute
- Top: -100px
- Left: `space-4` (16px)
- Z-index: `z-modal` (300)

**Visible on Focus**
- Top: `space-4` (16px)
- Background: `fill-hover`
- Color: `text-inverted`
- Padding: `space-3` (12px) `space-4` (16px)
- Font: `font-mono`
- Size: `text-caption` (13px)
- Text: "Skip to main content"

**Target**
- Links to `#main-content` on `<main>` element

---

## Focus Management

### Focus Ring Style

**Default Focus Ring**
- Outline: 2px solid `stroke-primary`
- Outline-offset: 2px

**High Contrast Mode**
- Outline: 2px solid currentColor
- Outline-offset: 2px

### Focus Trap (Modals/Menus)

**Behavior**
- Tab cycles within modal/menu
- Escape key closes
- Focus returns to trigger element on close

### Focus Visible

**CSS**
```css
:focus {
  outline: none;
}

:focus-visible {
  outline: 2px solid var(--stroke-primary);
  outline-offset: 2px;
}
```

---

## Responsive Behavior Summary

| Component | Mobile | Desktop |
|-----------|--------|---------|
| Footer | Stacked, centered | 2 columns |
| Form Inputs | Full width | Max 560px |
| Testimonials | Single column | 2 column grid |
| Buttons | Full width option | Fixed width |
| Callouts | Full width | Max-width container |

---

## Accessibility Checklist

- [ ] All form inputs have visible labels
- [ ] Error messages are announced to screen readers
- [ ] Buttons have minimum 44x44px touch targets
- [ ] Focus states are visible on all interactive elements
- [ ] Loading states announce to screen readers
- [ ] Skip link is present and functional
- [ ] Color contrast meets WCAG AA
- [ ] Reduced motion preferences respected
- [ ] Focus trap works in mobile menu
- [ ] All icons have text alternatives

---

*Design Agent - 2026-01-09*
