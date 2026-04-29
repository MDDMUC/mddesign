# About Page Components
Martin Drexler Portfolio - Zion Virtual Control Aesthetic

References: `DESIGN_TOKENS.md`, `GLOBAL_COMPONENTS.md`

---

## 1. About Hero

**Section Container**
- Padding-top: `space-10` (128px)
- Padding-bottom: `space-9` (96px)
- Padding-horizontal: `space-8` (64px) desktop, `space-5` (24px) mobile
- Background: `surface-primary`
- Border-bottom: `stroke-hairline` (1px) `stroke-faint`

**Inner Container**
- Max-width: `container-lg` (1200px)
- Margin: 0 auto
- Display: grid
- Grid: 2 columns (45% / 55%) desktop, 1 column mobile
- Gap: `space-8` (64px)
- Align-items: start

### Portrait Column (Left)

**Image Container**
- Width: 100%
- Max-width: 400px
- Aspect-ratio: 4 / 5
- Border: `stroke-hairline` (1px) `stroke-faint`
- Overflow: hidden
- Position: sticky (desktop only)
- Top: 120px

**Image**
- Width: 100%
- Height: 100%
- Object-fit: cover
- Filter: grayscale(100%)

**Image Hover**
- Filter: grayscale(0%)
- Transition: `duration-slow` (400ms) `ease-out`

### Content Column (Right)

**Page Label**
- Text: "ABOUT"
- Font: `font-mono`
- Size: `text-micro` (11px)
- Tracking: 0.08em
- Transform: uppercase
- Color: `text-secondary`
- Margin-bottom: `space-3` (12px)

**Page Title**
- Text: "About Martin"
- Font: `font-heading`
- Size: `text-display` (56px) desktop, `text-h1` (40px) mobile
- Weight: 500
- Line-height: 1.1
- Tracking: -0.02em
- Color: `text-primary`
- Margin-bottom: `space-6` (32px)

**Introduction Paragraph**
- Font: `font-body`
- Size: `text-body` (17px)
- Line-height: 1.8
- Color: `text-secondary`
- Margin-bottom: `space-6` (32px)
- Max-width: 560px

**Current Roles**

**Roles Container**
- Display: flex
- Flex-direction: column
- Gap: `space-4` (16px)
- Margin-bottom: `space-5` (24px)

**Role Item**
- Display: flex
- Align-items: baseline
- Gap: `space-3` (12px)

**Role Title**
- Font: `font-heading`
- Size: `text-body` (17px)
- Weight: 500
- Color: `text-primary`

**Role Company**
- Font: `font-mono`
- Size: `text-caption` (13px)
- Color: `text-secondary`

**Roles Content**
- Co-Founder at GHOSTSignal
- Partner at Haimish Studio

**Location**
- Text: "Munich, Germany"
- Font: `font-mono`
- Size: `text-caption` (13px)
- Color: `text-secondary`
- Display: flex
- Align-items: center
- Gap: `space-2` (8px)

**Location Icon**
- Size: 14px
- Stroke: 1.5px
- Color: `text-secondary`

**Responsive**
- Mobile: Single column, portrait above content
- Desktop: Two columns, portrait sticky on scroll

---

## 2. Journey/Experience Section

**Section Container**
- Padding: `space-9` (96px) `space-8` (64px)
- Background: `surface-alt-1`
- Border-bottom: `stroke-hairline` (1px) `stroke-faint`

**Inner Container**
- Max-width: `container-md` (960px)
- Margin: 0 auto

**Section Header**
- Text: "Experience"
- Font: `font-heading`
- Size: `text-h2` (28px)
- Weight: 500
- Color: `text-primary`
- Margin-bottom: `space-7` (48px)

### Timeline Layout

**Timeline Container**
- Position: relative
- Padding-left: `space-7` (48px)

**Timeline Line**
- Position: absolute
- Left: 0
- Top: 8px
- Bottom: 8px
- Width: 1px
- Background: `stroke-faint`

### Timeline Item

**Item Container**
- Position: relative
- Padding-bottom: `space-7` (48px)

**Timeline Dot**
- Position: absolute
- Left: -48px (aligns with line)
- Top: 8px
- Width: 8px
- Height: 8px
- Background: `surface-primary`
- Border: `stroke-thin` (1.5px) `stroke-secondary`

**Active/Current Dot**
- Background: `stroke-primary`
- Border-color: `stroke-primary`

**Date Range**
- Font: `font-mono`
- Size: `text-micro` (11px)
- Tracking: 0.08em
- Color: `text-secondary`
- Margin-bottom: `space-2` (8px)

**Role Title**
- Font: `font-heading`
- Size: `text-h3` (20px)
- Weight: 500
- Color: `text-primary`
- Margin-bottom: `space-1` (4px)

**Company/Location**
- Font: `font-body`
- Size: `text-body-sm` (15px)
- Color: `text-secondary`
- Margin-bottom: `space-3` (12px)

**Description (Optional)**
- Font: `font-body`
- Size: `text-body-sm` (15px)
- Line-height: 1.6
- Color: `text-secondary`
- Max-width: 480px

### Journey Narrative (Alternative)

**Journey Path**
- Text: "Germany → London → Munich → US → Munich"
- Font: `font-mono`
- Size: `text-caption` (13px)
- Tracking: 0.04em
- Color: `text-secondary`
- Margin-bottom: `space-6` (32px)

**Arrow Separator**
- Character: →
- Margin: 0 `space-2` (8px)
- Color: `text-muted`

### Client Logos Grid

**Grid Header**
- Text: "CLIENTS INCLUDE"
- Font: `font-mono`
- Size: `text-micro` (11px)
- Tracking: 0.08em
- Transform: uppercase
- Color: `text-secondary`
- Margin-top: `space-8` (64px)
- Margin-bottom: `space-5` (24px)

**Logo Grid**
- Display: flex
- Flex-wrap: wrap
- Gap: `space-6` (32px)
- Align-items: center

**Logo Item**
- Height: 28px
- Width: auto
- Filter: grayscale(100%)
- Opacity: 0.5

**Logo Hover**
- Opacity: 0.8
- Transition: `duration-fast` (100ms)

**Logos**
- BMW, Red Bull, CEPRES, Olympic Museum, Keller Sports, Peak Performance, Adidas (indirect), Intel (if applicable)

---

## 3. Awards Showcase

**Section Container**
- Padding: `space-9` (96px) `space-8` (64px)
- Background: `surface-primary`
- Border-bottom: `stroke-hairline` (1px) `stroke-faint`

**Inner Container**
- Max-width: `container-lg` (1200px)
- Margin: 0 auto

**Section Header**
- Text: "25+ International Design Awards"
- Font: `font-heading`
- Size: `text-h2` (28px)
- Weight: 500
- Color: `text-primary`
- Text-align: center
- Margin-bottom: `space-7` (48px)

**Subheader (Optional)**
- Text: "Recognition for excellence in design strategy and execution"
- Font: `font-body`
- Size: `text-body` (17px)
- Color: `text-secondary`
- Text-align: center
- Margin-top: -`space-5` (24px)
- Margin-bottom: `space-7` (48px)

### Awards Grid

**Grid Container**
- Display: grid
- Grid: 6 columns desktop, 4 columns tablet, 3 columns mobile
- Gap: `space-4` (16px)

### Award Badge

**Badge Container**
- Aspect-ratio: 1 / 1
- Background: `surface-alt-1`
- Border: `stroke-hairline` (1px) `stroke-faint`
- Padding: `space-4` (16px)
- Display: flex
- Flex-direction: column
- Align-items: center
- Justify-content: center
- Position: relative
- Cursor: default

**Badge Image**
- Max-width: 70%
- Max-height: 60%
- Object-fit: contain
- Filter: grayscale(100%)
- Opacity: 0.6
- Margin-bottom: `space-2` (8px)

**Badge Label**
- Font: `font-mono`
- Size: 9px
- Tracking: 0.04em
- Color: `text-muted`
- Text-align: center
- Max-width: 100%
- Overflow: hidden
- Text-overflow: ellipsis
- White-space: nowrap

**Badge States**
| State | Opacity | Border | Background |
|-------|---------|--------|------------|
| Default | 0.6 | `stroke-faint` | `surface-alt-1` |
| Hover | 1.0 | `stroke-secondary` | `surface-primary` |

**Transition**
- All: `duration-fast` (100ms)

### Featured Awards (Larger)

**Featured Row**
- Display: grid
- Grid: 3 columns
- Gap: `space-5` (24px)
- Margin-bottom: `space-6` (32px)

**Featured Badge**
- Same as regular but:
- Padding: `space-5` (24px)
- Aspect-ratio: 4 / 3

**Featured Awards List**
1. German Brand Award Gold
2. D&AD
3. Private Equity Wire (x6 can be grouped)

### Award Categories (Optional Grouping)

**Category Label**
- Font: `font-mono`
- Size: `text-micro` (11px)
- Tracking: 0.08em
- Transform: uppercase
- Color: `text-secondary`
- Margin-bottom: `space-4` (16px)
- Margin-top: `space-6` (32px)

**Categories**
- Brand & Identity
- Product Design
- Industry Recognition

### Full Awards List

- German Brand Award Gold (Keller Sports)
- German Brand Award (multiple)
- D&AD
- Private Equity Wire Award (x6 - CEPRES)
- Adobe Design Achievement Award
- Red Dot (if applicable)
- iF Design Award (if applicable)
- Additional awards as provided

**Accessibility**
- Each badge: `alt="[Award Name] - [Year if known]"`
- Grid: Semantic list or grid role
- Hover info accessible via focus

---

## 4. Philosophy/Approach Section

**Section Container**
- Padding: `space-9` (96px) `space-8` (64px)
- Background: `surface-alt-1`
- Border-bottom: `stroke-hairline` (1px) `stroke-faint`

**Inner Container**
- Max-width: `container-md` (960px)
- Margin: 0 auto

**Section Header**
- Text: "How I Work"
- Font: `font-heading`
- Size: `text-h2` (28px)
- Weight: 500
- Color: `text-primary`
- Margin-bottom: `space-6` (32px)

### Philosophy Statement

**Lead Paragraph**
- Text: "Design is business strategy, not decoration."
- Font: `font-heading`
- Size: `text-h3` (20px)
- Weight: 500
- Line-height: 1.4
- Color: `text-primary`
- Margin-bottom: `space-5` (24px)

**Body Paragraphs**
- Font: `font-body`
- Size: `text-body` (17px)
- Line-height: 1.8
- Color: `text-secondary`
- Margin-bottom: `space-5` (24px)

### Core Principles

**Principles Container**
- Display: grid
- Grid: 3 columns desktop, 1 column mobile
- Gap: `space-6` (32px)
- Margin-top: `space-7` (48px)

**Principle Card**
- Padding: `space-5` (24px)
- Background: `surface-primary`
- Border: `stroke-hairline` (1px) `stroke-faint`

**Principle Number**
- Font: `font-mono`
- Size: `text-micro` (11px)
- Color: `text-muted`
- Margin-bottom: `space-3` (12px)

**Principle Title**
- Font: `font-heading`
- Size: `text-body` (17px)
- Weight: 500
- Color: `text-primary`
- Margin-bottom: `space-2` (8px)

**Principle Description**
- Font: `font-body`
- Size: `text-body-sm` (15px)
- Line-height: 1.6
- Color: `text-secondary`

**Principles Content**
1. **Outcomes Over Output** - "Every design decision ties to business metrics. I measure success by growth, not deliverables."
2. **Systems Thinking** - "I build scalable foundations, not one-off solutions. Design systems that grow with you."
3. **Strategic Partnership** - "I embed with your team, understand your business, and become an extension of your organization."

### Process Diagram (Optional)

**Diagram Container**
- Margin-top: `space-8` (64px)
- Padding: `space-6` (32px)
- Background: `surface-primary`
- Border: `stroke-hairline` (1px) `stroke-faint`

**Process Steps**
- Display: flex
- Justify-content: space-between
- Align-items: flex-start
- Gap: `space-4` (16px)

**Step**
- Flex: 1
- Text-align: center

**Step Number**
- Width: 32px
- Height: 32px
- Border: `stroke-thin` (1.5px) `stroke-secondary`
- Display: flex
- Align-items: center
- Justify-content: center
- Font: `font-mono`
- Size: `text-caption` (13px)
- Color: `text-primary`
- Margin: 0 auto `space-3` (12px)

**Step Title**
- Font: `font-mono`
- Size: `text-micro` (11px)
- Tracking: 0.08em
- Transform: uppercase
- Color: `text-primary`

**Step Connector**
- Thin line between steps
- Height: 1px
- Background: `stroke-faint`
- Position: absolute
- Top: 16px (center of number)

**Process Steps Content**
1. Discovery
2. Strategy
3. Design
4. Build
5. Measure

**Mobile**
- Steps stack vertically
- Connector becomes vertical line on left

---

## 5. Teaching/Speaking Section

**Section Container**
- Padding: `space-8` (64px) `space-8` (64px)
- Background: `surface-primary`
- Border-bottom: `stroke-hairline` (1px) `stroke-faint`

**Inner Container**
- Max-width: `container-md` (960px)
- Margin: 0 auto
- Display: grid
- Grid: 2 columns (40% / 60%) desktop, 1 column mobile
- Gap: `space-7` (48px)
- Align-items: center

### Left Column

**Section Label**
- Text: "TEACHING & SPEAKING"
- Font: `font-mono`
- Size: `text-micro` (11px)
- Tracking: 0.08em
- Transform: uppercase
- Color: `text-secondary`
- Margin-bottom: `space-3` (12px)

**Section Title**
- Text: "Sharing Knowledge"
- Font: `font-heading`
- Size: `text-h3` (20px)
- Weight: 500
- Color: `text-primary`
- Margin-bottom: `space-4` (16px)

**Description**
- Font: `font-body`
- Size: `text-body-sm` (15px)
- Line-height: 1.6
- Color: `text-secondary`

**Description Content**
- "Previously taught design and strategy at Denver University and the World Trade Center Denver. Passionate about developing the next generation of strategic designers."

### Right Column (Institution Logos)

**Logo Row**
- Display: flex
- Gap: `space-7` (48px)
- Align-items: center

**Institution Logo**
- Height: 48px
- Width: auto
- Filter: grayscale(100%)
- Opacity: 0.5

**Logo Label (Below)**
- Font: `font-mono`
- Size: `text-micro` (11px)
- Color: `text-muted`
- Margin-top: `space-2` (8px)

**Institutions**
- Denver University
- World Trade Center Denver

---

## 6. Testimonials Section

**Section Container**
- Padding: `space-9` (96px) `space-8` (64px)
- Background: `surface-alt-1`
- Border-bottom: `stroke-hairline` (1px) `stroke-faint`

**Inner Container**
- Max-width: `container-lg` (1200px)
- Margin: 0 auto

**Section Header**
- Text: "What Clients Say"
- Font: `font-heading`
- Size: `text-h2` (28px)
- Weight: 500
- Color: `text-primary`
- Text-align: center
- Margin-bottom: `space-7` (48px)

### Testimonials Grid

Uses Testimonial Cards from `GLOBAL_COMPONENTS.md`

**Grid**
- Display: grid
- Grid: 2 columns desktop, 1 column mobile
- Gap: `space-5` (24px)

**Display 4 Testimonials**
1. Ryan Cobb - NASA
2. Dr. Tyler Phillips - USAF/JetBlue
3. Mark Wright - DDS
4. Joe Murray - Newmont Mining

### Alternative: Featured Single + Grid

**Featured Testimonial**
- Full-width single testimonial card (centered, larger)
- Most impactful quote (Ryan Cobb/NASA)
- Margin-bottom: `space-6` (32px)

**Supporting Grid**
- 3 columns with remaining testimonials
- Smaller card variant

---

## 7. Personal Touch Section

**Section Container**
- Padding: `space-8` (64px) `space-8` (64px)
- Background: `surface-primary`
- Border-bottom: `stroke-hairline` (1px) `stroke-faint`

**Inner Container**
- Max-width: `container-sm` (640px)
- Margin: 0 auto
- Text-align: center

**Section Label**
- Text: "BEYOND WORK"
- Font: `font-mono`
- Size: `text-micro` (11px)
- Tracking: 0.08em
- Transform: uppercase
- Color: `text-secondary`
- Margin-bottom: `space-4` (16px)

**Personal Note**
- Font: `font-body`
- Size: `text-body` (17px)
- Line-height: 1.8
- Color: `text-secondary`
- Margin-bottom: `space-6` (32px)

**Personal Note Content**
- "When I'm not designing, you'll find me training for my next Ironman or volunteering with Olympic youth programs. I bring the same dedication and discipline to every project I take on."

### Lifestyle Image (Optional)

**Image Container**
- Max-width: 480px
- Margin: 0 auto
- Aspect-ratio: 16 / 9
- Border: `stroke-hairline` (1px) `stroke-faint`
- Overflow: hidden

**Image**
- Width: 100%
- Height: 100%
- Object-fit: cover
- Filter: grayscale(100%)

**Image Caption**
- Font: `font-mono`
- Size: `text-micro` (11px)
- Color: `text-muted`
- Margin-top: `space-3` (12px)

---

## 8. About CTA

**Section Container**
- Padding: `space-10` (128px) `space-8` (64px)
- Background: `surface-alt-1`
- Text-align: center

**Inner Container**
- Max-width: `container-sm` (640px)
- Margin: 0 auto

**Headline**
- Text: "Ready to work together?"
- Font: `font-heading`
- Size: `text-h2` (28px)
- Weight: 500
- Color: `text-primary`
- Margin-bottom: `space-4` (16px)

**Subhead**
- Text: "Let's discuss how strategic design can help your company grow."
- Font: `font-body`
- Size: `text-body` (17px)
- Line-height: 1.6
- Color: `text-secondary`
- Margin-bottom: `space-6` (32px)

**CTA Button**
- Text: "Start a Conversation"
- Primary button style (see `GLOBAL_COMPONENTS.md`)
- Chamfered corners
- Links to Contact page

---

## Page Layout Structure

```
┌─────────────────────────────────────────────────────────────────┐
│ [Navigation]                                             80px   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ [About Hero]                                      surface-primary│
│ Portrait (sticky) + Title + Intro + Roles                       │
│ 128px top / 96px bottom                                         │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ [Experience Section]                              surface-alt   │
│ Timeline + Client Logos                                         │
│ 96px padding                                                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ [Awards Showcase]                                 surface-primary│
│ "25+ Awards" + Badge Grid                                       │
│ 96px padding                                                    │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ [Philosophy Section]                              surface-alt   │
│ "How I Work" + Principles + Process                             │
│ 96px padding                                                    │
├─────────────────────────────────────────────────────────────────┤
│ [Teaching Section]                                surface-primary│
│ Description + Institution Logos                                 │
│ 64px padding (smaller section)                                  │
├─────────────────────────────────────────────────────────────────┤
│ [Testimonials]                                    surface-alt   │
│ 4 testimonial cards in grid                                     │
│ 96px padding                                                    │
├─────────────────────────────────────────────────────────────────┤
│ [Personal Touch]                                  surface-primary│
│ Personal note + optional image                                  │
│ 64px padding                                                    │
├─────────────────────────────────────────────────────────────────┤
│ [About CTA]                                       surface-alt   │
│ "Ready to work together?" + Button                              │
│ 128px padding                                                   │
├─────────────────────────────────────────────────────────────────┤
│ [Footer]                                                        │
└─────────────────────────────────────────────────────────────────┘
```

---

## Responsive Summary

| Component | Mobile | Desktop |
|-----------|--------|---------|
| Hero | 1 col, portrait top | 2 col, portrait sticky |
| Timeline | Compact, vertical | Full timeline |
| Awards Grid | 3 columns | 6 columns |
| Principles | Stacked | 3 columns |
| Process | Vertical | Horizontal |
| Teaching | Stacked | 2 columns |
| Testimonials | 1 column | 2 columns |

---

## Accessibility

- [ ] Portrait image has descriptive alt text
- [ ] Timeline uses semantic markup (list or description list)
- [ ] Award badges have alt text with award names
- [ ] Process diagram has text alternative
- [ ] Testimonials use blockquote semantics
- [ ] All interactive elements keyboard accessible
- [ ] Proper heading hierarchy maintained

---

*Design Agent - 2026-01-09*
