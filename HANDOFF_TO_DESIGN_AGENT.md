# Handoff to Design Agent (Gemini)
Portfolio Website - Martin Drexler Design Studio

**Date:** 2026-01-09
**From:** Project Strategy Agent (Claude Sonnet 4.5)
**To:** Design Agent (Gemini)
**Status:** Content Strategy Complete - Ready for Visual Design

---

## Mission

Create visual comps and design system for a world-class portfolio website with a **Zion Virtual Control (Matrix Reloaded)** aesthetic.

**Client:** Martin Drexler - Award-winning strategic design partner
**Goal:** Attract high-end freelance clients (funded startups + Fortune 500 enterprises)
**Positioning:** Strategic business partner who drives measurable outcomes (not commodity designer)

---

## Quick Context

Martin is an award-winning designer (25+ international awards including German Brand Award Gold, D&AD) with 15+ years experience. Currently Co-Founder at GHOSTSignal, Partner at Haimish Studio, based in Munich, Germany.

**Key Differentiators:**
1. Business outcomes first (companies grow, win awards, get acquired)
2. Full-stack capability (strategy + branding + product)
3. Proven at scale ($45T platforms, Olympic programs, enterprise clients)
4. Speed + quality (3 relaunches in 2 years, 13 awards)

**Pricing Tier:** Premium ($200-300/hr, $20-40K/month retainers)

---

## Design Direction

### Aesthetic: Zion Virtual Control (Matrix Reloaded)

**Reference:** Matrix Reloaded docking scene UI - clinical, precise, blueprint-like

**Key Principles:**
- Monochrome, near-white field with cool grey/blue tint
- Thin linework and technical drawings (blueprint/mechanical aesthetic)
- **Large negative space** - whitespace is an active design element
- Floating panels and overlays, no heavy fills
- No skeuomorphism (no shadows, bevels, chrome, glossy effects)
- Minimal text - rely on shape, position, pattern

**Colors:**
- Surface: #FFFFFF to #F0F0FF
- Alt surfaces: #F6FAFB / #EAEEF1
- Stroke: mid cool greys (#949494 to #626262)
- Faint lines: #D0D4D7
- Text: match stroke (grey, not pure black)
- Accent: avoid or minimal (critical alerts only)

**Typography:**
- Technical, compact, clean
- Monospace for data/microtext
- Geometric or technical sans for headings
- Mostly uppercase micro labels with increased tracking

**Shape Language:**
- Thin outlines (1-2px)
- Sharp or chamfered corners (no rounded radii)
- Rectilinear tile clusters, bracket marks, ticks, leader lines
- Circular arcs, partial rings, concentric guides

**Motion:**
- Subtle "draw on" or snap-in reveals for linework
- Hover/active states use invert or fill (black on white)
- Respect prefers-reduced-motion
- Target: 60fps performance

**Global Rules:**
- If it looks like a Bootstrap template, delete it and start over
- Performance is a feature (must hold 60fps even with particles)
- Whitespace is an active design element, use aggressively

---

## Site Structure

```
Home
├── Work (Portfolio)
│   ├── CEPRES (Featured - Hero #1)
│   ├── Young Champion Ambassador (Featured - Hero #2)
│   ├── Keller Sports (Featured - Hero #3)
│   ├── Planetarie (Supporting)
│   └── Other projects (byte, etc.)
├── About
│   ├── About Martin
│   ├── Experience & Awards
│   ├── Approach/Process
│   └── Testimonials
├── Services
│   ├── Strategic Leadership
│   ├── Product Design
│   └── Brand Systems
└── Contact
    └── Contact Form + Calendar link
```

---

## Pages to Design (Priority Order)

### 1. Homepage (PRIORITY 1)

**Goal:** Visitor understands value proposition in <5 seconds

**Sections:**

**Hero:**
- Headline: "Strategic design partner for ambitious companies"
- Subhead: "I help funded startups and enterprises transform their products, brands, and teams—with the strategic thinking of a consultancy and the craft quality of an award-winning designer."
- CTAs: "View Selected Work" (primary), "Start a Conversation" (secondary)

**Proof:**
- "25+ International Design Awards"
- Award badges: German Brand Award Gold, D&AD, Private Equity Wire x6, Adobe, etc.
- Client logos: CEPRES, Olympic Museum, Keller Sports, BMW, Red Bull, Peak Performance

**Services Preview (3 cards):**
1. Strategic Leadership: "Act as your embedded Head of Design..."
2. Product Design: "Transform complex products from research through launch..."
3. Brand Systems: "Create cohesive brand identities that scale..."

**Featured Work (3 hero projects):**
1. CEPRES: "Designed the world's leading private market investment platform. 6 awards, $45T in assets."
2. YCA: "Built a global youth leadership program from scratch. Now in 25+ cities, acquired by International Olympic Academy."
3. Keller Sports: "Transformed a premium sports e-commerce platform. 13 awards, 3 full relaunches in 2 years."

**About Teaser:**
- Professional portrait
- Short paragraph (100 words)
- "More about me" CTA

**Contact CTA:**
- "Let's talk about your challenge"
- CTA button

**Content Density:** Spacious, confident, minimal text

---

### 2. CEPRES Case Study (PRIORITY 1)

**Goal:** Demonstrate ability to handle complex enterprise products

**Structure:**

**Hero:**
- "The world's leading private market investment platform"
- "$45 Trillion in assets • 6,000 LPs and GPs • 6 Private Equity Wire Awards"
- Hero image

**Context (Problem):**
- Heading: "The Challenge"
- 2-3 paragraphs: 76 user personas, 125,000 filter options, unusable complexity
- Supporting diagram

**Approach (Strategy):**
- Heading: "The Approach"
- 2-3 paragraphs: Consolidated to 7 use cases, iterative design, 7 platform iterations
- Strategic diagrams (user persona consolidation, process flow)

**Design (Execution):**
- Heading: "The Design"
- 2-3 paragraphs
- Large showcase images: dashboards, before/after, components
- Let images breathe with whitespace

**Results (Outcomes):**
- Heading: "The Results"
- Metrics callout panel:
  - "6 Awards"
  - "$45T Assets"
  - "15 → 120+ Employees"
- Award badges
- 2-3 paragraphs about business impact

**Visual Requirements:**
- Hero image (dashboard)
- 2-3 strategic diagrams
- 4-6 product screenshots
- Award badges

---

### 3. YCA Case Study (PRIORITY 1)

**Goal:** Show strategic thinking from scratch, entrepreneurial mindset

**Structure:** Same as CEPRES template

**Hero:**
- "A global youth leadership program built from scratch"
- "Now in 25+ cities worldwide • Acquired by International Olympic Academy"

**Key Content:**
- Context: Activate students as Olympic ambassadors
- Approach: User personas, experiential curriculum, expert workshops
- Design: Complete brand identity, program curriculum, space design
- Results: Started with 1 cohort → 25+ cities → Acquired by IOA

**Visual Requirements:**
- Brand identity showcase
- Event photography
- Program materials
- Global expansion visual

---

### 4. Keller Sports Case Study (PRIORITY 1)

**Goal:** Show leadership capability, speed + quality

**Structure:** Same template

**Hero:**
- "Transformed a premium sports e-commerce platform as Head of Design"
- "13 International Design Awards • 3 Full Relaunches in 2 Years"

**Key Content:**
- Context: Position as premium, avoid template look
- Approach: Built team + photography studio, 3 relaunches
- Design: UI/UX redesign, custom photography, marketing
- Results: 13 awards (German Brand Award Gold + more), influenced Adidas globally

**Visual Requirements:**
- Before/after screenshots
- Desktop + mobile layouts
- Product photography examples
- Team/studio photos
- 13 award badges

---

### 5. About Page (PRIORITY 2)

**Sections:**

**Introduction:**
- Headline: "About Martin"
- Professional portrait (client-provided high-res image)
- Opening paragraph (150-200 words)
- Journey: Germany → London → Munich → US → Munich
- Current: Co-Founder at GHOSTSignal, Partner at Haimish Studio

**Experience:**
- Timeline or list of key roles
- Client logos repeated

**Awards (showcase all 25+):**
- "25+ International Design Awards"
- Grid of award badges (client-provided images)

**Philosophy/Approach:**
- "How I Work" section
- 2-3 paragraphs
- Optional: Process diagram (4-5 steps)

**Testimonials:**
- 4 testimonials with high-credibility sources:
  - Ryan Cobb (NASA)
  - Dr. Tyler Phillips (USAF/JetBlue)
  - Mark Wright (DDS)
  - Joe Murray (Newmont Mining)

**Personal:**
- Brief note (50-100 words)
- Previous teaching (DU, WTC)

**CTA:**
- "Ready to work together?" + button

---

### 6. Services Page (PRIORITY 2)

**Overview:**
- Headline: "Services"
- Opening paragraph (100 words)

**3 Service Sections:**

1. **Strategic Leadership**
   - Icon/visual
   - Description (200 words)
   - Example: Keller Sports
   - Typical: 6-12 months, $20-40K/month

2. **Product Design**
   - Icon/visual
   - Description (200 words)
   - Example: CEPRES
   - Typical: 2-6 months project/retainer

3. **Brand Systems**
   - Icon/visual
   - Description (200 words)
   - Example: Planetarie
   - Typical: 2-4 months

**How We Work:**
- 5-step process
- Optional: Visual timeline

**CTA:**
- "Ready to start?" + button

---

### 7. Contact Page (PRIORITY 3)

**Minimal, focused:**

**Form:**
- Name (required)
- Email (required)
- Company/role (optional)
- Message (required)
- Submit: "Send message"

**Alternative:**
- "Schedule a call" button (calendar link)

**What to expect:**
- Small text: "I'll respond within 24 hours..."

**Design:** Clean, simple, no friction

---

## Components to Design

### Navigation
- Logo/wordmark
- Main nav: Work, About, Services, Contact
- Mobile: Hamburger menu (technical, minimal)
- States: Default, hover, active, focus

### Buttons/CTAs
- Primary: Large, prominent
- Secondary: Subtle
- States: Default, hover, active, focus
- Min size: 44x44px (touch target)

### Project Cards (Work Grid)
- Thumbnail image
- Client logo (small)
- Project title
- One-line description
- Key metric
- Hover state: Reveal more info

### Case Study Layouts
- Hero section
- Text sections with headings
- Image showcases (full/half width)
- Callout panels (metrics, insights)
- Before/after comparisons
- Navigation (next project, back)

### Forms
- Text inputs
- Textarea
- States: Default, focus, error, success
- Labels: Visible (not placeholder-only)
- Error messages: Inline, helpful

### Testimonial Cards
- Quote text
- Attribution (name, title, company)
- Optional: Small avatar or logo

### Award Badges
- Grid layout
- Consistent sizing
- Monochrome versions preferred

---

## Assets Available

### Provided by Client
- ✅ Professional portrait (high-res)
- ✅ Award badges (25+ images: German Brand Award Gold, D&AD, Private Equity Wire, Adobe, etc.)
- ✅ Portfolio project images (from PDF)
- ✅ Consulting/context images (available if needed for About page)
- ✅ 4 testimonials (short, website-ready)

### From Portfolio PDF
- All case study images (CEPRES, YCA, Keller Sports, Planetarie, byte)
- Process documentation
- Team photos
- Event photography

---

## Typography Requirements

### Heading Hierarchy

**H1 (Page title):**
- Homepage hero headline
- About: "About Martin"
- Services: "Services"
- Large, primary attention

**H2 (Section headings):**
- "25+ International Design Awards"
- "Context", "Approach", "Results"
- "Experience", "Awards"
- 3-6 times per page

**H3 (Subsections):**
- Service names
- Project titles in grid

**Body Text:**
- 16-18px equivalent
- Readable, not tiny
- Grey (matching stroke), not pure black

**Microcopy:**
- Uppercase, increased tracking
- Very small
- Technical/monospace feel

### Spacing
- Generous line-height (1.6-1.8 for body)
- Large margins between sections (80-120px)
- Paragraph spacing (1.5-2em)

---

## Responsive Considerations

### Mobile (320-768px)
- Stack vertically
- Maintain generous spacing
- Hamburger menu
- Full-width CTAs

### Tablet (769-1024px)
- 2-column layouts where appropriate
- Larger images and text

### Desktop (1025px+)
- Full layout with maximum whitespace
- Large hero images
- Multi-column grids
- Floating panels (Zion aesthetic)

---

## Accessibility Requirements

**Must Meet WCAG AA:**
- Text contrast: 4.5:1 (body), 3:1 (large text)
- All interactive elements keyboard accessible
- Logical tab order
- Visible focus indicators
- Alt text for all images
- Proper semantic heading hierarchy (H1 → H2 → H3)
- Form labels clear and visible
- Icon-only buttons need text alternatives (ARIA or visible on focus)

**Motion:**
- Respect prefers-reduced-motion
- No flashing or heavy blur
- Subtle animations only

---

## Tone & Voice (for UI Copy)

**Overall:** Confident + Direct (executive communication)

**Avoid:**
- Overly warm or casual
- Flowery language
- Generic claims ("passionate", "guru")

**Use:**
- Transform, strategic, outcomes, partner
- Proven, measurable, results
- System, framework, foundation

**Example Good Copy:**
- "Strategic design partner for ambitious companies"
- "Companies I work with grow, win awards, and get acquired"

**Example Bad Copy:**
- "I'm passionate about creating beautiful experiences"
- "Let's make something amazing together"

---

## Success Criteria

### Visual
- Strong fidelity to Zion Virtual Control aesthetic
- Clear hierarchy with minimal text
- Consistent geometry and spacing
- Doesn't look like a Bootstrap template
- Distinctive and memorable

### Functional
- Accessible interactions without diluting aesthetic
- 60fps performance target
- Responsive across all devices
- Clear CTAs and user flow

### Strategic
- Communicates premium positioning
- Differentiates from commodity designers
- Business-first messaging (outcomes > aesthetics)
- Builds trust and credibility

---

## Deliverables Expected

### Visual Comps
- Homepage (desktop + mobile)
- CEPRES case study page
- YCA case study page
- Keller Sports case study page
- About page
- Services page
- Contact page

### Component Library
- Navigation (desktop + mobile)
- Buttons (all states)
- Form elements (all states)
- Project cards
- Testimonial cards
- Award badge layouts
- Callout panels
- Case study templates

### Design Tokens
- Color palette (finalized)
- Typography scale and hierarchy
- Spacing system
- Stroke weights
- Corner radii (sharp/chamfered)
- Motion/interaction patterns

### SVG Primitives (Zion Aesthetic)
- Thin line icons
- Technical diagrams
- Blueprint-style elements
- Floating panels
- Bracket marks, ticks, leader lines
- Circular arcs, partial rings

---

## Reference Documents

All strategy documents in `C:\Users\heyma\mddesign\content\`:

**Read These First:**
1. **`CONTENT_TO_DESIGN_BRIEF.md`** - Technical requirements for you (START HERE)
2. **`CONTENT_STRATEGY.md`** - Complete content strategy
3. **`EXECUTIVE_SUMMARY.md`** - Quick reference

**Supporting:**
4. **`CURRENT_SITE_ANALYSIS.md`** - Analysis of existing site
5. **`TESTIMONIALS.md`** - All 4 testimonials ready to use

**Visual Direction:**
6. **`design-system/BRIEF.md`** - Zion Matrix aesthetic details

**Assets:**
- Portrait: Client-provided image
- Awards: Client-provided badges
- Portfolio images: From PDF in project folder
- Consulting images: `F:\WORK\Martin Drexler Design LLC\...\consulting`

---

## Open Questions for Design Agent

These need to be decided during design:

1. **Transparency/Glass Effects:** Allow any, or keep purely flat linework?
2. **Motion Aggression:** Instant, subtle, or slightly animated?
3. **Accessibility Labels:** Hover-only vs. persistent microtext?
4. **Accent Color for CTAs:** Any accent color or full monochrome?
5. **Consulting Images:** Use on About page or not needed?

---

## Next Steps

1. Review this handoff document
2. Review `CONTENT_TO_DESIGN_BRIEF.md` (page-by-page specs)
3. Review `design-system/BRIEF.md` (Zion aesthetic)
4. Answer open questions above
5. Create visual comps for Homepage first (get approval)
6. Then create remaining pages
7. Build component library
8. Document design tokens
9. Hand off to Implementation Engineer (Claude 3.5 Sonnet)

---

## Contact Points

**For Questions:**
- Content strategy: See `CONTENT_STRATEGY.md`
- Visual direction: See `design-system/BRIEF.md`
- Technical specs: See `CONTENT_TO_DESIGN_BRIEF.md`

**Client Approval:**
- Show Homepage comp first (most critical)
- Then case study pages
- Then About/Services/Contact

**Timeline Estimate:**
- 3-5 sessions for complete visual system
- Iterate based on feedback

---

**Status: Ready for Design Phase**
**Good luck! 🚀**
