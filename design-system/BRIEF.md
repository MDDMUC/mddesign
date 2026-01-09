# Design System Brief
# Zion Virtual Control UI (Matrix Reloaded)

Author: Project Strategy Agent (Codex)  
Date: 2026-01-09  
Status: Brief only (no system build)

Purpose
Define the design system direction for the MDDesign portfolio site based on the Matrix Reloaded Zion docking scene UI. This brief consolidates all research and sets constraints, principles, and deliverables for the Design Agent.

Research inputs (sources of truth)
- design/research/RESEARCH_CODEX_MATRIX_RELOADED_UI.md
- design/references/ZION_UI_RESEARCH_GEMINI.md
- research/IMPLEMENTATION_ENGINEER_ZION_UI_RESEARCH.md
- Client pack: C:\Users\heyma\OneDrive\Desktop\martins research
  - matrix_reloaded_flats.jpg (flat artwork sheet)
  - matrix_reloaded_01/02/03.jpg (scene stills)
  - tokens.json (derived palette references)

Goals
- Build a distinctive, world-class UI language for a freelance graphic design portfolio site.
- Match the Zion Virtual Control aesthetic: clinical, precise, blueprint-like, and expert-first.
- Maintain excellent readability and accessibility without breaking the visual reference.

Non-goals
- Do not design or implement the final system yet.
- Do not choose a technical stack in this brief.
- Do not introduce a colorful or neon sci-fi aesthetic.

Brand alignment
The clinical, technical look is intentional and aligned with the brand philosophy of data-driven efficiency and results. Keep it stark and confident, not warm or playful.

Visual direction (high level)
- Monochrome, near-white field with cool grey/blue tint.
- Thin linework and technical drawings (blueprint/mechanical aesthetic).
- Large negative space; dense UI only where interaction occurs.
- Floating panels and overlays, no heavy fills.
- No skeuomorphism: avoid shadows, bevels, chrome, or glossy UI.
- Minimal text; rely on shape, position, and pattern for meaning.

Reference palette ranges (not final tokens)
- Surface: #FFFFFF to #F0F0FF
- Alt surfaces: #F6FAFB / #EAEEF1 (from client pack)
- Stroke: mid cool greys around #949494 to #626262
- Faint lines: #D0D4D7 range
- Text: match stroke (grey, not pure black), with darker text for legibility if needed
- Accent: avoid; if used, reserve for critical alerts only

Typography direction (not final fonts)
- Technical, compact, and clean.
- Monospace for data/microtext; geometric or technical sans for headings.
- Mostly uppercase micro labels with increased tracking.
- Small sizes are expected; ensure legibility and spacing.

Shape language
- Thin outlines, mostly 1-2px at common web scales.
- Sharp corners or chamfered corners (no rounded radii).
- Rectilinear tile clusters, bracket marks, ticks, and leader lines.
- Circular arcs, partial rings, and concentric guides as anchors.

Motion and interaction
- Subtle "draw on" or snap-in reveals for linework.
- Hover and active states use invert or fill (black on white).
- Gestural feel (drag, snap to grid) without excessive animation.
- Respect prefers-reduced-motion; no flashing or heavy blur.

Accessibility constraints
- All controls must be keyboard accessible.
- Icon-only controls need text alternatives (hover/focus labels or ARIA labels).
- Contrast must meet WCAG AA (monochrome is naturally high contrast).
- Motion must have reduced-motion fallbacks.

Components to define (Design Agent scope)
- Core layout grid and spacing scale.
- Panels/frames and floating windows.
- Buttons, toggles, and tile clusters (unlabeled defaults + label-on-focus).
- Navigation patterns (expert-first but accessible).
- Data modules: timelines, lists, tables, status strips, ring/radar visuals.
- Portfolio modules: case study header, image galleries, project cards.
- Iconography: thin line icons and diagrammatic marks.

Design system deliverables (expected from Design Agent)
- Visual comps for key pages (Home, Portfolio, Case Study, About, Contact).
- Component library with states and interaction notes.
- Draft token tables for color, type, spacing, stroke, shape, motion.
- SVG primitives drawn from matrix_reloaded_flats.jpg (chamfered tiles, arcs, brackets).

Success criteria
- Strong visual fidelity to Zion Virtual Control aesthetic.
- Clear hierarchy and readability with minimal text.
- Consistent geometry and spacing across pages.
- Accessible interactions without diluting the aesthetic.

Open questions (need answers before system build)
- Should we allow any transparency/glass effects, or keep purely flat linework?
- How aggressive should motion be (instant, subtle, or slightly animated)?
- How should labels appear for accessibility (hover-only vs. persistent microtext)?
- Any accent color use for CTA or alerts, or full monochrome?

