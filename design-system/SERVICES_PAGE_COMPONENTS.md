# Services Page Components
Martin Drexler Portfolio - Zion Virtual Control Aesthetic

References: `DESIGN_TOKENS.md`, `GLOBAL_COMPONENTS.md`

---

## 1. Services Hero

**Section Container**
- Padding-top: `space-10` (128px)
- Padding-bottom: `space-8` (64px)
- Padding-horizontal: `space-8` (64px) desktop, `space-5` (24px) mobile
- Background: `surface-primary`
- Border-bottom: `stroke-hairline` (1px) `stroke-faint`

**Inner Container**
- Max-width: `container-md` (960px)
- Margin: 0 auto
- Text-align: center

**Page Label**
- Text: "SERVICES"
- Font: `font-mono`
- Size: `text-micro` (11px)
- Tracking: 0.08em
- Transform: uppercase
- Color: `text-secondary`
- Margin-bottom: `space-3` (12px)

**Page Title**
- Text: "How I Can Help"
- Font: `font-heading`
- Size: `text-display` (56px) desktop, `text-h1` (40px) mobile
- Weight: 500
- Line-height: 1.1
- Tracking: -0.02em
- Color: `text-primary`
- Margin-bottom: `space-5` (24px)

**Introduction**
- Text: "I partner with ambitious companies at critical inflection points—launches, pivots, scale-ups, and transformations. Whether you need strategic leadership, product design, or brand systems, I bring the same rigor and craft to every engagement."
- Font: `font-body`
- Size: `text-body` (17px)
- Line-height: 1.8
- Color: `text-secondary`
- Max-width: 640px
- Margin: 0 auto

---

## 2. Service Sections

**Services Container**
- Padding: `space-9` (96px) `space-8` (64px)
- Background: alternating `surface-primary` / `surface-alt-1`

**Inner Container**
- Max-width: `container-lg` (1200px)
- Margin: 0 auto

### Service Section Layout

**Grid**
- Display: grid
- Grid: 2 columns (35% / 65%) desktop, 1 column mobile
- Gap: `space-8` (64px)
- Align-items: start

### Left Column (Meta)

**Icon Container**
- Width: 64px
- Height: 64px
- Border: `stroke-thin` (1.5px) `stroke-secondary`
- Display: flex
- Align-items: center
- Justify-content: center
- Margin-bottom: `space-5` (24px)

**Icon**
- Size: 32px
- Stroke: 1.5px
- Color: `stroke-primary`

**Service Number**
- Text: "01", "02", "03"
- Font: `font-mono`
- Size: `text-micro` (11px)
- Color: `text-muted`
- Margin-bottom: `space-3` (12px)

**Service Title**
- Font: `font-heading`
- Size: `text-h2` (28px)
- Weight: 500
- Color: `text-primary`
- Margin-bottom: `space-4` (16px)

**Engagement Details**
- Font: `font-mono`
- Size: `text-caption` (13px)
- Color: `text-secondary`

**Detail Item**
- Display: flex
- Align-items: center
- Gap: `space-2` (8px)
- Margin-bottom: `space-2` (8px)

**Detail Label**
- Color: `text-muted`

**Detail Value**
- Color: `text-primary`

### Right Column (Content)

**Description**
- Font: `font-body`
- Size: `text-body` (17px)
- Line-height: 1.8
- Color: `text-secondary`
- Margin-bottom: `space-6` (32px)

**Subsections**

**Subsection Label**
- Font: `font-mono`
- Size: `text-micro` (11px)
- Tracking: 0.08em
- Transform: uppercase
- Color: `text-secondary`
- Margin-bottom: `space-3` (12px)
- Margin-top: `space-5` (24px)

**Subsection Content**
- Font: `font-body`
- Size: `text-body-sm` (15px)
- Line-height: 1.6
- Color: `text-secondary`

**What You Get List**
- Display: flex
- Flex-direction: column
- Gap: `space-2` (8px)

**List Item**
- Padding-left: `space-4` (16px)
- Position: relative

**List Bullet**
- Width: 8px
- Height: 1px
- Background: `stroke-secondary`
- Position: absolute
- Left: 0
- Top: 10px

### Example Project Link

**Container**
- Margin-top: `space-6` (32px)
- Padding: `space-4` (16px)
- Background: `surface-alt-1` (or `surface-primary` if section is alt)
- Border: `stroke-hairline` (1px) `stroke-faint`
- Display: flex
- Align-items: center
- Gap: `space-4` (16px)

**Thumbnail**
- Width: 80px
- Aspect-ratio: 16 / 10
- Border: `stroke-hairline` (1px) `stroke-faint`
- Filter: grayscale(100%)

**Text**

**Label**
- Text: "SEE THIS IN ACTION"
- Font: `font-mono`
- Size: `text-micro` (11px)
- Color: `text-muted`

**Project Name**
- Font: `font-heading`
- Size: `text-body-sm` (15px)
- Weight: 500
- Color: `text-primary`

**Arrow**
- Size: 16px
- Stroke: 1.5px
- Color: `text-secondary`
- Margin-left: auto

**Hover State**
- Border: `stroke-secondary`
- Thumbnail: grayscale(0%)
- Arrow: translateX(4px)

---

## 3. Service Content

### Service 1: Strategic Leadership

**Icon:** Compass or direction indicator (thin line)

**Title:** Strategic Leadership

**Engagement:**
- Duration: 6-12 months
- Investment: $20-40K/month retainer

**Description:**
"Act as your embedded Head of Design, building teams, processes, and design culture from the inside. I work alongside your leadership to define design strategy, hire and mentor designers, establish design operations, and ensure design has a seat at the executive table. This is for companies who need senior design leadership but aren't ready for a full-time executive hire."

**Who It's For:**
- Funded startups scaling from seed to Series B
- Enterprises launching new product lines
- Companies without senior design leadership

**What You Get:**
- Design strategy and roadmap
- Team building and hiring support
- Design operations and processes
- Executive stakeholder alignment
- Hands-on design leadership
- Design system foundations

**Example Project:** Keller Sports (Head of Design, 2 years)

---

### Service 2: Product Design

**Icon:** Grid/interface modules (thin line)

**Title:** Product Design

**Engagement:**
- Duration: 2-6 months
- Investment: Project or retainer basis

**Description:**
"Transform complex products from research through launch with systematic UX and polished interfaces. I specialize in enterprise software, data-heavy applications, and products that require deep strategic thinking. Every design decision ties back to user needs and business goals."

**Who It's For:**
- B2B SaaS companies with complex products
- Fintech and data platforms
- Companies redesigning core products

**What You Get:**
- User research and insights
- Information architecture
- UX strategy and flows
- UI design and prototypes
- Design system components
- Developer handoff documentation

**Example Project:** CEPRES (6 awards, $45T platform)

---

### Service 3: Brand Systems

**Icon:** Overlapping shapes/identity marks (thin line)

**Title:** Brand Systems

**Engagement:**
- Duration: 2-4 months
- Investment: Project basis

**Description:**
"Create cohesive brand identities that scale across every touchpoint and channel. I build brand systems, not just logos—complete visual languages with guidelines, templates, and components that grow with your company. From strategy through execution, every element reinforces your market position."

**Who It's For:**
- Startups defining their identity
- Companies rebranding or repositioning
- Organizations scaling their brand

**What You Get:**
- Brand strategy and positioning
- Visual identity system
- Logo and mark design
- Typography and color systems
- Brand guidelines documentation
- Template systems and assets

**Example Project:** YCA Program (acquired by IOA) or Planetarie

---

## 4. How We Work Section

**Section Container**
- Padding: `space-9` (96px) `space-8` (64px)
- Background: `surface-alt-1`
- Border-top: `stroke-hairline` (1px) `stroke-faint`
- Border-bottom: `stroke-hairline` (1px) `stroke-faint`

**Inner Container**
- Max-width: `container-lg` (1200px)
- Margin: 0 auto

**Section Header**
- Text: "How We Work Together"
- Font: `font-heading`
- Size: `text-h2` (28px)
- Weight: 500
- Color: `text-primary`
- Text-align: center
- Margin-bottom: `space-7` (48px)

### Process Timeline

**Timeline Container**
- Display: flex
- Justify-content: space-between
- Position: relative
- Padding: 0 `space-5` (24px)

**Timeline Line**
- Position: absolute
- Top: 24px (center of step numbers)
- Left: `space-7` (48px)
- Right: `space-7` (48px)
- Height: 1px
- Background: `stroke-faint`

### Process Step

**Step Container**
- Flex: 1
- Text-align: center
- Position: relative
- Max-width: 180px

**Step Number**
- Width: 48px
- Height: 48px
- Border: `stroke-thin` (1.5px) `stroke-secondary`
- Background: `surface-primary`
- Display: flex
- Align-items: center
- Justify-content: center
- Margin: 0 auto `space-4` (16px)
- Position: relative
- Z-index: 1

**Number Text**
- Font: `font-mono`
- Size: `text-caption` (13px)
- Weight: 500
- Color: `text-primary`

**Step Title**
- Font: `font-heading`
- Size: `text-body` (17px)
- Weight: 500
- Color: `text-primary`
- Margin-bottom: `space-2` (8px)

**Step Description**
- Font: `font-body`
- Size: `text-body-sm` (15px)
- Line-height: 1.5
- Color: `text-secondary`

### 5 Process Steps

**Step 1: Discovery**
- "Understand your business, users, and goals through research and stakeholder interviews."

**Step 2: Strategy**
- "Define the approach, prioritize opportunities, and align on success metrics."

**Step 3: Design**
- "Create solutions through iterative design, testing, and refinement."

**Step 4: Build**
- "Partner with engineering to bring designs to life with precision."

**Step 5: Measure**
- "Track outcomes, gather feedback, and optimize for continuous improvement."

### Mobile Timeline

**Mobile Layout**
- Flex-direction: column
- Gap: `space-6` (32px)
- Timeline line: vertical, on left side
- Steps align left with line

**Mobile Step**
- Display: flex
- Gap: `space-4` (16px)
- Text-align: left

---

## 5. Services CTA

**Section Container**
- Padding: `space-10` (128px) `space-8` (64px)
- Background: `surface-primary`
- Text-align: center

**Inner Container**
- Max-width: `container-sm` (640px)
- Margin: 0 auto

**Headline**
- Text: "Ready to start?"
- Font: `font-heading`
- Size: `text-h2` (28px)
- Weight: 500
- Color: `text-primary`
- Margin-bottom: `space-4` (16px)

**Subhead**
- Text: "Every engagement starts with a conversation. Let's discuss your challenges and see if we're a good fit."
- Font: `font-body`
- Size: `text-body` (17px)
- Line-height: 1.6
- Color: `text-secondary`
- Margin-bottom: `space-6` (32px)

**CTA Button**
- Text: "Schedule a Call"
- Primary button style
- Chamfered corners

**Alternative Text**
- Text: "or email hello@martindrexler.com"
- Font: `font-mono`
- Size: `text-micro` (11px)
- Color: `text-secondary`
- Margin-top: `space-4` (16px)

---

## Page Layout Structure

```
┌─────────────────────────────────────────────────────────────────┐
│ [Navigation]                                             80px   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ [Services Hero]                                   surface-primary│
│ Title + Introduction                                            │
│ 128px top / 64px bottom                                         │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ [Service 1: Strategic Leadership]                 surface-alt   │
│ Icon + Title + Description + Example                            │
│ 96px padding                                                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ [Service 2: Product Design]                       surface-primary│
│ Icon + Title + Description + Example                            │
│ 96px padding                                                    │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ [Service 3: Brand Systems]                        surface-alt   │
│ Icon + Title + Description + Example                            │
│ 96px padding                                                    │
├─────────────────────────────────────────────────────────────────┤
│ [How We Work]                                     surface-alt   │
│ 5-step process timeline                                         │
│ 96px padding                                                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ [Services CTA]                                    surface-primary│
│ "Ready to start?" + Button                                      │
│ 128px padding                                                   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ [Footer]                                                        │
└─────────────────────────────────────────────────────────────────┘
```

---

## Responsive Summary

| Component | Mobile | Desktop |
|-----------|--------|---------|
| Hero | Centered, reduced type | Full display size |
| Service Sections | 1 column, stacked | 2 columns (35/65) |
| Process Timeline | Vertical, left-aligned | Horizontal, centered |
| Example Links | Stack thumbnail above | Inline row |

---

## Accessibility

- [ ] Service icons have text alternatives
- [ ] Process steps use ordered list semantics
- [ ] Example project links have clear destinations
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] All interactive elements keyboard accessible

---

*Design Agent - 2026-01-09*
