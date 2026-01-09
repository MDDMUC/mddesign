# Workflow Contract

Purpose
Align strategy, design, implementation, and QA with explicit gates, budgets, and quality checks for a world-class portfolio site.

Core principles
- Content-first: structure and copy drive the system, not placeholders.
- Whitespace is active: large negative space is intentional.
- No Bootstrap look: if it feels templated, redo.
- Performance is a feature: must hold 60fps even with particles.

Global performance budgets
- 60fps target for animation and particle effects.
- LCP < 2.0s, CLS < 0.1, TBT < 200ms (target; tune during build).
- Particle density tiers must degrade gracefully.
- Respect `prefers-reduced-motion` by defaulting to low motion mode.

Single source of truth
- Design tokens live in the design system documentation.
- All agents update or reference the same token set.
- Token changes require an entry in the decision log.

Workflow gates
1) Content Gate (Strategy)
   - Sitemap + page inventory approved.
   - Real copy and portfolio assets attached.
   - Success metrics and CTA defined.

2) Design Gate (Design)
   - Visual comps for key pages approved.
   - Design tokens drafted (color, type, spacing, stroke, motion).
   - Visual QA: grid, spacing rhythm, type hierarchy, no template vibe.

3) Build Gate (Implementation)
   - System built to spec with token alignment.
   - Performance budgets measured and documented.
   - Reduced motion path implemented.

4) QA Gate (QA)
   - Cross-device and cross-browser checks passed.
   - Accessibility checks passed (WCAG AA baseline).
   - Visual parity check against comps.

Critic loop (mandatory)
- After each gate, run a “mean client” review:
  - What feels cheap or templated?
  - What breaks the Zion aesthetic?
  - What feels slow or janky?
- Findings must be logged and resolved before the next gate.

Ticketing integration
- Each gate is a ticket checkpoint in tickets/INDEX.md.
- Gate completion requires explicit signoff note in the ticket.

Decision log
- All deviations from the brief are recorded in logs/DECISIONS.md.

