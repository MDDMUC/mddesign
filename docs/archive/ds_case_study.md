# Case Study Page Components
Martin Drexler Portfolio - Zion Virtual Control Aesthetic

Template for: CEPRES, YCA Program, Keller Sports

References: `DESIGN_TOKENS.md` for all token values

---

## 1. Case Study Hero

**Section Container**
- Padding-top: `space-10` (128px)
- Padding-bottom: `space-8` (64px)
- Padding-horizontal: `space-8` (64px) desktop, `space-5` (24px) mobile
- Background: `surface-primary`
- Border-bottom: `stroke-hairline` (1px) `stroke-faint`

**Inner Container**
- Max-width: `container-lg` (1200px)
- Margin: 0 auto

### Header Content

**Layout**
- Display: grid
- Grid: 2 columns (60% / 40%) desktop, 1 column mobile
- Gap: `space-7` (48px)
- Align-items: end
- Margin-bottom: `space-8` (64px)

**Left Column (Text)**

**Breadcrumb**
- Text: "Work / [Project Name]"
- Font: `font-mono`
- Size: `text-micro` (11px)
- Tracking: 0.08em
- Transform: uppercase
- Color: `text-secondary`
- Margin-bottom: `space-5` (24px)
- Link color: `text-secondary`, hover: `text-primary`

**Project Title**
- Font: `font-heading`
- Size: `text-display` (56px) desktop, `text-h1` (40px) tablet, `text-h2` (28px) mobile
- Weight: 500
- Line-height: 1.1
- Tracking: -0.02em
- Color: `text-primary`
- Margin-bottom: `space-4` (16px)

**Project Description**
- Font: `font-body`
- Size: `text-body` (17px)
- Line-height: 1.7
- Color: `text-secondary`
- Max-width: 560px
- Margin-bottom: `space-5` (24px)

**Right Column (Meta)**

**Client Logo**
- Max-height: 40px
- Width: auto
- Filter: grayscale(100%)
- Opacity: 0.6
- Margin-bottom: `space-5` (24px)

**Key Metrics Row**
- Display: flex
- Gap: `space-4` (16px)
- Flex-wrap: wrap

**Metric Item**
- Font: `font-mono`
- Size: `text-caption` (13px)
- Weight: 500
- Tracking: 0.04em
- Color: `text-primary`
- Padding-right: `space-4` (16px)
- Border-right: `stroke-hairline` (1px) `stroke-faint` (except last)

**Metric Separator**
- Character: bullet (•) or pipe (|)
- Color: `text-muted`

**Example Metrics**
- CEPRES: "6 Awards • $45T in Assets • 6,000+ Users"
- YCA: "25+ Cities • Acquired by IOA • 3 Years"
- Keller: "13 Awards • Head of Design • 3 Relaunches"

### Hero Image

**Image Container**
- Width: 100%
- Aspect-ratio: 16 / 9
- Background: `surface-alt-2`
- Border: `stroke-hairline` (1px) `stroke-faint`
- Overflow: hidden

**Image**
- Width: 100%
- Height: 100%
- Object-fit: cover

**Image Caption (Optional)**
- Font: `font-mono`
- Size: `text-micro` (11px)
- Tracking: 0.04em
- Color: `text-secondary`
- Margin-top: `space-3` (12px)
- Text-align: right

**Responsive**
- Mobile: Single column, title first, metrics stack vertically
- Tablet: 2 columns, narrower gap
- Desktop: Full layout with generous spacing

**Accessibility**
- Hero image: Descriptive alt text
- Breadcrumb: `nav` with `aria-label="Breadcrumb"`
- Title: `<h1>` semantic tag

---

## 2. Content Sections

Used for: Context, Approach, Design, Results

**Section Container**
- Padding: `space-9` (96px) `space-8` (64px)
- Background: alternates `surface-primary` / `surface-alt-1`
- Border-bottom: `stroke-hairline` (1px) `stroke-faint`

**Inner Container**
- Max-width: `container-md` (960px)
- Margin: 0 auto

### Section Header

**Section Label (Optional)**
- Text: "01", "02", "03", "04" (step number)
- Font: `font-mono`
- Size: `text-micro` (11px)
- Tracking: 0.08em
- Color: `text-muted`
- Margin-bottom: `space-2` (8px)

**Section Heading**
- Text: "The Challenge" / "The Approach" / "The Design" / "The Results"
- Font: `font-heading`
- Size: `text-h2` (28px)
- Weight: 500
- Color: `text-primary`
- Margin-bottom: `space-6` (32px)
- Position: relative

**Heading Decoration (Optional)**
- Thin horizontal line extending left
- Width: 48px
- Height: 1px
- Color: `stroke-faint`
- Position: absolute, left: -64px, top: 50%
- Desktop only

### Body Content

**Paragraph**
- Font: `font-body`
- Size: `text-body` (17px)
- Line-height: 1.8
- Color: `text-secondary`
- Margin-bottom: `space-5` (24px)
- Max-width: 720px

**Paragraph Spacing**
- Between paragraphs: `space-5` (24px)
- After final paragraph: `space-7` (48px)

**Pull Quote (Optional)**
- Font: `font-heading`
- Size: `text-h3` (20px)
- Weight: 400
- Font-style: italic
- Line-height: 1.6
- Color: `text-primary`
- Padding-left: `space-5` (24px)
- Border-left: `stroke-thin` (1.5px) `stroke-secondary`
- Margin: `space-6` (32px) 0

### Insight List (Optional)

**Container**
- Background: `surface-alt-1` (or `surface-primary` if section is alt)
- Border: `stroke-hairline` (1px) `stroke-faint`
- Padding: `space-5` (24px)
- Margin: `space-6` (32px) 0

**List Heading**
- Text: "Key Insights" or "Findings"
- Font: `font-mono`
- Size: `text-micro` (11px)
- Tracking: 0.08em
- Transform: uppercase
- Color: `text-secondary`
- Margin-bottom: `space-4` (16px)

**List Items**
- Display: flex, flex-direction: column
- Gap: `space-3` (12px)

**List Item**
- Font: `font-body`
- Size: `text-body-sm` (15px)
- Line-height: 1.5
- Color: `text-primary`
- Padding-left: `space-4` (16px)
- Position: relative

**List Bullet**
- Content: thin line or dash
- Width: 8px
- Height: 1px
- Background: `stroke-secondary`
- Position: absolute, left: 0, top: 10px

### Section Content Examples

**Context Section**
- 2-3 paragraphs describing the challenge
- Optional insight list (3-5 problem statements)
- 1 supporting image or diagram

**Approach Section**
- 2-3 paragraphs describing strategy
- Insight list (key strategic decisions)
- Process diagram or user flow image

**Design Section**
- 2 paragraphs introducing design work
- Heavy on images (4-6 screenshots)
- Minimal text, let work speak

**Results Section**
- Metrics callout panel (see component #3)
- 2 paragraphs on business impact
- Award badge grid
- Optional testimonial

**Responsive**
- Mobile: Full width, reduced padding
- Desktop: Centered content with max-width

**Accessibility**
- Headings: `<h2>` semantic tags
- Lists: Proper `<ul>` or `<ol>` markup
- Quotes: `<blockquote>` with citation

---

## 3. Metrics Callout Panel

**Panel Container**
- Background: `surface-alt-2`
- Border: `stroke-thin` (1.5px) `stroke-secondary`
- Padding: `space-7` (48px)
- Margin: `space-7` (48px) 0
- Clip-path: `chamfer-md` (8px chamfer on corners)

**Inner Layout**
- Display: grid
- Grid: 3-5 columns desktop, 2 columns tablet, 1 column mobile
- Gap: `space-6` (32px)
- Text-align: center

### Metric Item

**Metric Value**
- Font: `font-heading`
- Size: `text-display` (56px) desktop, `text-h1` (40px) mobile
- Weight: 500
- Line-height: 1
- Color: `text-primary`
- Margin-bottom: `space-2` (8px)

**Metric Label**
- Font: `font-mono`
- Size: `text-micro` (11px)
- Tracking: 0.08em
- Transform: uppercase
- Color: `text-secondary`

**Example Metrics**

CEPRES:
| Value | Label |
|-------|-------|
| 6 | Awards Won |
| $45T | Assets on Platform |
| 6,000+ | LPs and GPs |
| 15→120 | Team Growth |

YCA:
| Value | Label |
|-------|-------|
| 25+ | Cities Worldwide |
| 1→IOA | Program Acquired |
| 3 | Years to Scale |

Keller Sports:
| Value | Label |
|-------|-------|
| 13 | Design Awards |
| 3 | Full Relaunches |
| 2 | Years as Head |

**Decorative Elements (Optional)**
- Thin bracket marks at panel corners
- Stroke: 1px `stroke-faint`
- Size: 16px x 16px L-shapes

**Responsive**
- Mobile: 1 column, stacked vertically
- Tablet: 2 columns
- Desktop: 3-5 columns based on count

**Accessibility**
- Use `<dl>`, `<dt>`, `<dd>` for semantic metric pairs
- Or `aria-label` on container describing all metrics

---

## 4. Image Gallery/Showcase

### Full-Width Image

**Container**
- Width: 100vw (break out of content container)
- Margin-left: calc(-50vw + 50%)
- Padding: 0 `space-8` (64px)
- Margin-top: `space-7` (48px)
- Margin-bottom: `space-7` (48px)

**Image Wrapper**
- Max-width: `container-xl` (1440px)
- Margin: 0 auto
- Border: `stroke-hairline` (1px) `stroke-faint`
- Background: `surface-alt-2`

**Image**
- Width: 100%
- Height: auto
- Display: block

**Caption**
- Font: `font-mono`
- Size: `text-micro` (11px)
- Color: `text-secondary`
- Margin-top: `space-3` (12px)
- Text-align: center

### Half-Width Side-by-Side

**Container**
- Display: grid
- Grid: 2 columns, gap `space-5` (24px)
- Margin: `space-7` (48px) 0

**Image Wrapper**
- Border: `stroke-hairline` (1px) `stroke-faint`
- Background: `surface-alt-2`
- Aspect-ratio: 4 / 3

**Image**
- Width: 100%
- Height: 100%
- Object-fit: cover

**Responsive**
- Mobile: Stack vertically, full width
- Desktop: Side by side

### Before/After Comparison

**Container**
- Display: grid
- Grid: 2 columns, gap `space-5` (24px)
- Margin: `space-7` (48px) 0
- Align-items: start

**Column**
- Position: relative

**Label**
- Position: absolute
- Top: `space-3` (12px)
- Left: `space-3` (12px)
- Font: `font-mono`
- Size: `text-micro` (11px)
- Tracking: 0.08em
- Transform: uppercase
- Color: `text-inverted`
- Background: `fill-hover` (#626262)
- Padding: `space-1` (4px) `space-2` (8px)

**Before Label**
- Text: "BEFORE"

**After Label**
- Text: "AFTER"

**Image Wrapper**
- Border: `stroke-hairline` (1px) `stroke-faint`
- Aspect-ratio: 16 / 10

**Alternative: Slider Comparison**
- Single container with both images overlaid
- Draggable divider line
- Stroke: 2px `stroke-primary`
- Handle: 32px circle, border 2px, background `surface-primary`

### Process Diagram

**Container**
- Background: `surface-alt-1`
- Border: `stroke-hairline` (1px) `stroke-faint`
- Padding: `space-6` (32px)
- Margin: `space-7` (48px) 0

**Diagram Style**
- Match Zion aesthetic: thin lines, technical look
- Stroke: 1.5px `stroke-secondary`
- Text: `font-mono`, `text-micro` (11px)
- Background elements: `stroke-faint`
- Accent lines: `stroke-primary`

**Diagram Types**
- User flow diagrams
- Information architecture
- Process timelines
- Persona consolidation charts

### Image Grid (3+ Images)

**Container**
- Display: grid
- Gap: `space-4` (16px)
- Margin: `space-7` (48px) 0

**Grid Variations**
- 3 images: 3 columns equal
- 4 images: 2x2 grid
- 5 images: 3 columns, 2 rows (last row 2 items centered)
- 6 images: 3x2 or 2x3

**Image Wrapper**
- Border: `stroke-hairline` (1px) `stroke-faint`
- Background: `surface-alt-2`
- Overflow: hidden

**Hover State**
- Border-color: `stroke-secondary`
- Optional: Scale 1.02 with overflow visible
- Transition: `duration-fast` (100ms)

**Responsive**
- Mobile: 1 column, stacked
- Tablet: 2 columns
- Desktop: Full grid layout

**Accessibility**
- All images: Descriptive alt text
- Before/after: Announce both states
- Slider: Keyboard accessible, aria-valuenow

---

## 5. Award Badge Grid

**Container**
- Margin: `space-7` (48px) 0
- Padding: `space-6` (32px)
- Background: `surface-alt-1`
- Border: `stroke-hairline` (1px) `stroke-faint`

**Header**
- Text: "Awards & Recognition"
- Font: `font-mono`
- Size: `text-micro` (11px)
- Tracking: 0.08em
- Transform: uppercase
- Color: `text-secondary`
- Margin-bottom: `space-5` (24px)

**Grid**
- Display: grid
- Grid: 4 columns desktop, 3 columns tablet, 2 columns mobile
- Gap: `space-4` (16px)

### Badge Item

**Container**
- Aspect-ratio: 1 / 1
- Background: `surface-primary`
- Border: `stroke-hairline` (1px) `stroke-faint`
- Display: flex
- Align-items: center
- Justify-content: center
- Padding: `space-3` (12px)

**Badge Image**
- Max-width: 80%
- Max-height: 80%
- Object-fit: contain
- Filter: grayscale(100%)
- Opacity: 0.6

**Badge States**
| State | Opacity | Border |
|-------|---------|--------|
| Default | 0.6 | `stroke-faint` |
| Hover | 1.0 | `stroke-secondary` |

**Transition**
- Opacity, border: `duration-fast` (100ms)

**Badge Tooltip (Optional)**
- On hover: Show award name and year
- Position: Above badge
- Background: `fill-hover`
- Color: `text-inverted`
- Font: `font-mono`, `text-micro`
- Padding: `space-2` (8px)
- Arrow pointing down

**Project-Specific Badges**

CEPRES:
- Private Equity Wire Award (x6)
- German Brand Award
- Other applicable awards

YCA:
- Any program recognition awards

Keller Sports:
- German Brand Award Gold
- German Brand Award (multiple)
- D&AD
- Adobe Design Achievement
- Red Dot (if applicable)
- 13 total awards

**Accessibility**
- Each badge: `alt="[Award Name] - [Year]"`
- Grid: `role="list"`, items `role="listitem"`

---

## 6. Case Study Navigation

**Container**
- Padding: `space-9` (96px) `space-8` (64px)
- Background: `surface-primary`
- Border-top: `stroke-thin` (1.5px) `stroke-secondary`

**Inner Container**
- Max-width: `container-lg` (1200px)
- Margin: 0 auto
- Display: flex
- Justify-content: space-between
- Align-items: center

### Back Link (Left)

**Link**
- Text: "← Back to Work"
- Font: `font-mono`
- Size: `text-caption` (13px)
- Weight: 500
- Tracking: 0.04em
- Color: `text-secondary`
- Text-decoration: none

**Arrow**
- Character: ← or SVG arrow
- Margin-right: `space-2` (8px)
- Transform on hover: translateX(-4px)

**States**
| State | Color | Arrow |
|-------|-------|-------|
| Default | `text-secondary` | translateX(0) |
| Hover | `text-primary` | translateX(-4px) |
| Focus | `text-primary` | 2px outline |

### Next Project (Right)

**Container**
- Display: flex
- Align-items: center
- Gap: `space-5` (24px)

**Text Block**
- Text-align: right

**Label**
- Text: "NEXT PROJECT"
- Font: `font-mono`
- Size: `text-micro` (11px)
- Tracking: 0.08em
- Transform: uppercase
- Color: `text-secondary`
- Margin-bottom: `space-1` (4px)

**Project Title**
- Font: `font-heading`
- Size: `text-h3` (20px)
- Weight: 500
- Color: `text-primary`

**Thumbnail (Optional)**
- Width: 120px
- Aspect-ratio: 16 / 10
- Border: `stroke-hairline` (1px) `stroke-faint`
- Filter: grayscale(100%)
- Opacity: 0.8

**Arrow**
- Size: 24px
- Stroke: 1.5px
- Color: `text-primary`
- Transform on hover: translateX(4px)

**Hover States**
- Thumbnail: grayscale(0%), opacity 1
- Arrow: translateX(4px)
- Title: underline 1px

**Link Wrapper**
- Entire right section is clickable
- `<a>` wrapping container

**Project Sequence**
1. CEPRES → Next: YCA
2. YCA → Next: Keller Sports
3. Keller Sports → Next: CEPRES (loop)

**Responsive**
- Mobile: Stack vertically, back link top, next project below
- Desktop: Side by side

**Accessibility**
- Back link: Clear destination
- Next project: `aria-label="Next project: [Project Name]"`
- Focus visible on entire clickable area

---

## Overall Page Layout Structure

```
┌─────────────────────────────────────────────────────────────────┐
│ [Navigation Bar]                                         80px   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ [Case Study Hero]                                               │
│ Breadcrumb, Title, Description, Metrics                         │
│ Hero Image (full-width)                                         │
│ 128px top / 64px bottom                                         │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ [Context Section]                                 surface-alt   │
│ "The Challenge"                                                 │
│ 2-3 paragraphs + supporting image                               │
│ 96px padding                                                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ [Approach Section]                                surface-primary│
│ "The Approach"                                                  │
│ Paragraphs + insight list + process diagram                     │
│ 96px padding                                                    │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ [Design Section]                                  surface-alt   │
│ "The Design"                                                    │
│ Minimal text, heavy images                                      │
│ Full-width + grid galleries                                     │
│ 96px padding                                                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ [Results Section]                                 surface-primary│
│ "The Results"                                                   │
│ Metrics Callout Panel (chamfered)                               │
│ Paragraphs + Award Badge Grid                                   │
│ 96px padding                                                    │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ [Case Study Navigation]                                         │
│ ← Back to Work                    Next Project: [Name] →        │
│ 96px padding                                                    │
├─────────────────────────────────────────────────────────────────┤
│ [Footer]                                                        │
└─────────────────────────────────────────────────────────────────┘
```

**Section Background Pattern**
- Hero: `surface-primary`
- Context: `surface-alt-1`
- Approach: `surface-primary`
- Design: `surface-alt-1`
- Results: `surface-primary`
- Navigation: `surface-primary`

**Visual Rhythm**
- Alternating backgrounds create visual separation
- Consistent 96px vertical padding
- 1px faint borders between all sections
- Full-width images break the rhythm intentionally

---

## Content Guidelines by Project

### CEPRES

**Hero**
- Title: "CEPRES"
- Description: "The world's leading private market investment platform"
- Metrics: "6 Awards • $45T in Assets • 6,000+ Users"

**Context Focus**
- 76 user personas problem
- 125,000 filter options complexity
- Enterprise scale challenges

**Approach Focus**
- Consolidated to 7 use cases
- Iterative design process
- 7 platform iterations

**Design Focus**
- Dashboard redesigns
- Data visualization
- Complex filtering UI
- Before/after comparisons

**Results Focus**
- 6 Private Equity Wire Awards
- Company growth 15→120 employees
- Industry leadership

---

### YCA Program

**Hero**
- Title: "Young Champion Ambassador"
- Description: "A global youth leadership program built from scratch"
- Metrics: "25+ Cities • Acquired by IOA • 3 Years"

**Context Focus**
- Olympic values activation
- Youth engagement challenge
- Starting from zero

**Approach Focus**
- User persona development
- Experiential curriculum design
- Expert workshop structure

**Design Focus**
- Complete brand identity
- Program materials
- Event/space design
- Digital touchpoints

**Results Focus**
- Global expansion
- Acquisition by International Olympic Academy
- Lasting impact

---

### Keller Sports

**Hero**
- Title: "Keller Sports"
- Description: "Transformed a premium sports e-commerce platform as Head of Design"
- Metrics: "13 Awards • 3 Relaunches • 2 Years"

**Context Focus**
- Premium positioning challenge
- Avoiding template aesthetic
- E-commerce complexity

**Approach Focus**
- Built internal team
- Photography studio creation
- Rapid iteration cycles

**Design Focus**
- UI/UX redesign
- Custom photography
- Mobile experience
- Marketing materials

**Results Focus**
- 13 international awards
- German Brand Award Gold
- Influenced Adidas globally

---

## Responsive Summary

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| Hero Title | 28px | 40px | 56px |
| Hero Layout | 1 col | 2 col | 2 col |
| Section Padding | 64px | 80px | 96px |
| Image Grid | 1 col | 2 col | 3 col |
| Metrics Panel | 1 col | 2 col | 3-5 col |
| Badge Grid | 2 col | 3 col | 4 col |
| Navigation | Stacked | Side by side | Side by side |

---

## Accessibility Checklist

- [ ] Hero image has descriptive alt text
- [ ] All section headings use proper H2 tags
- [ ] Images in galleries have alt text
- [ ] Before/after clearly labeled for screen readers
- [ ] Metrics use semantic markup (dl/dt/dd)
- [ ] Award badges have alt text with award name
- [ ] Navigation links have clear destinations
- [ ] Focus states visible on all interactive elements
- [ ] Tab order follows visual layout
- [ ] Reduced motion respected for any animations

---

*Design Agent - 2026-01-09*
