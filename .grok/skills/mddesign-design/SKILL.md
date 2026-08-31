---
name: mddesign-design
description: >
  Run the design loop for a page, section, layout, type, motion, or chrome
  change on martindrexler.com. Use when Martin asks to design, restyle, or
  compose a surface, or runs /mddesign-design. Not for case-study internals
  (/mddesign-case-study) or non-visual bugs (/mddesign-code).
---

# Design loop — mddesign

The site **is** the portfolio. Bar: *would I hire the person who designed this?*

Generic frontend-design advice does **not** override this repo. Inter + IBM Plex Mono, pure white, 1px hairlines, no radius, no accent — those are locks, not defaults to improve.

## Before the first pixel

Read, in this order:

1. `design/BRIEF.md` §§4–5 (principles + anti-patterns)
2. `design/BRIEF.md` §6 (open questions) — if this task depends on an open question, **stop and ask**
3. `site/styles/tokens.css`
4. The relevant slice of `design/SYSTEM.md` (not the whole file unless the surface is new)
5. The live page/module you will change, plus one neighboring example of the same pattern

If the task is a case-study page, stop and use `/mddesign-case-study`.

## Loop (do not skip)

```
orient → frame → check locks → compose → implement → critique → verify → record
```

1. **Frame.** What is this surface's one job? Who is it for (BRIEF §2)? What do they remember?
2. **Check locks.** Covered by BRIEF/SYSTEM/DECISIONS? If not: propose in writing, wait for Martin's call, write the decision into BRIEF (or §6→body) **and** `logs/DECISIONS.md` before implementing.
3. **Compose.** Type, measure, grid, whitespace, hierarchy. Asymmetry over center. Motion only for state, position, or causation. Tokens, not magic numbers.
4. **Implement.** CSS Modules. Smallest diff. No new font, dependency, or page without confirmation.
5. **Critique.** Spawn `design-critic` (`/mddesign-critique`) after meaningful visual work. Fix "Reject unless" before claiming done.
6. **Verify.** Browser, the way a user would. Desktop **and** mobile. Every route that shares the component or chrome you touched. Hunt regressions.
7. **Record.** Update `CLAUDE.md` if the running site grew. Dual-write durable facts.

## Confirm with Martin before

- A new page or major section
- Adding/removing a font or restructuring the type scale
- A new library or dependency
- Touching `docs/archive/`
- Changing a locked signature move (Spline on `/`, View Transitions on `/work`, ⌘K, NavRail)

## Hard rejects (stop and rework)

Hero laptop video. "We craft passionate experiences." Three-column icon grids. Carousels. Logo animation on load. Light/dark toggle as a feature. Spinners. Generic 300ms ease-in-out on everything. Glass cards. Gradient backgrounds. Lucide-in-circles. Centered CTA heroes. `text-balance` on every heading.

## Verify

From `site/`:

```bash
npm run typecheck
npm run build
```

Reduced-motion: the `prefers-reduced-motion` block in `tokens.css` already zeroes durations — extend it if you add motion.

## Do not

- Rebuild the site to "fix" BRIEF/SYSTEM drift (Spline replaced fluid; NavRail replaced ChromeStrip)
- Pattern-match `docs/archive/`
- Invent chroma, a third typeface, or a component library
- Skip the critic on a visual change
