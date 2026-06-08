# Project Start

Read this file first. It is the shared context for every agent.

Project goal
Build a world-class portfolio website for a freelance graphic design business with a Zion Virtual Control (Matrix Reloaded) aesthetic.

Current phase
Strategy and content planning. Do not build the design system yet.

Workflow (strict order)
1) Project Strategy Agent: merge research and create design system brief.
2) Design Agent: create visual comps and design tokens from the brief.
3) Implementation Engineer: build the system to spec.
4) QA Agent: validate everything works.

Global rules
- Whitespace is an active design element; use it aggressively.
- If it looks like a Bootstrap template, delete it and start over.
- Performance is a feature; the site must hold 60fps even with particles.

Agent roles and models (primary)
- Project Strategy Agent: Claude Sonnet 4.5
- Design Agent: Gemini
- Implementation Engineer: Claude 3.5 Sonnet
- QA and Testing Agent: Codex

Source of truth files
- Design system brief: design-system/BRIEF.md
- Research: design/research/RESEARCH_CODEX_MATRIX_RELOADED_UI.md, design/references/ZION_UI_RESEARCH_GEMINI.md, research/IMPLEMENTATION_ENGINEER_ZION_UI_RESEARCH.md
- Workflow contract: workflow/WORKFLOW_CONTRACT.md
- Ticketing: tickets/README.md and tickets/INDEX.md
- Model guidance: MODEL_SELECTION.md
- Agent rules: agents/*.md

How to start new work
1) Create or update a ticket using tickets/templates.
2) Add it to tickets/INDEX.md.
3) Follow gate order and the critic loop in workflow/WORKFLOW_CONTRACT.md.

