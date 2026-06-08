# Design Brief — Martin Drexler Portfolio

**Status:** Active (2026-06-08). This is the north-star for visual direction. When the brief and the running site disagree, the site is wrong — but update the brief if a decision has genuinely changed.

**Companion docs:**
- `design/SYSTEM.md` — the design system (Zion) that implements this brief: tokens, type, components, patterns.
- `site/styles/tokens.css` — the runtime source of truth for tokens.
- `logs/DECISIONS.md` — ledger of design + scope decisions.

---

## 1. Mission

Convert a design buyer (creative director, founder, art director, marketing lead) from skeptical visitor into a conversation, in under 60 seconds. The site is itself the strongest portfolio piece. Every choice should answer: *would I hire the person who designed this?*

## 2. Audience

- **Primary:** people commissioning brand, editorial, or identity work — agency creative directors, in-house design leads, founders of brand-conscious startups.
- **Secondary:** peers and other designers (who recommend, not buy). Their respect makes the site shareable.
- **Tertiary:** recruiters, press, juries. They skim; the site has to be legible at a glance.

These three audiences want different things but reject the same things: cliché, vagueness, and visible reliance on templates.

## 3. Positioning

*[To be sharpened by Martin. Drafted as a placeholder — do not treat as final.]*

> Martin Drexler is a graphic designer working at the intersection of brand identity and editorial systems. Work is measured, typographically rigorous, and unafraid of restraint.

**Tone of voice:** specific, plain, confident. No adjectives where a noun will do. No "passionate," "crafted," "bespoke." Sentences end where they should.

## 4. Aesthetic Principles

These are decisions, not preferences. Argue with them in writing before breaking them.

1. **Typography is the visual system.** Body type and display type are chosen deliberately and held to. Sizes follow a documented scale; line-height and tracking are tuned per cut. No system fallback ships.
2. **Whitespace is content.** Margins are generous. A page is allowed to breathe. If a section feels empty, hold the line — it probably means the content next to it is doing more work.
3. **Asymmetry over center alignment.** Centered everything is the visual signature of the templated web. Default to grid-based asymmetry. Center sparingly and on purpose.
4. **The grid is visible in the bones, invisible on the page.** Use a real grid (12 column or modular). Don't draw grid lines decoratively unless they earn their place.
5. **Color is restraint, not palette.** Pick the smallest palette that does the job. One accent at most in the first pass. Add only with evidence.
6. **Motion serves hierarchy, not decoration.** Things move because they need to communicate state, position, or causation — not because motion is available. Reduced-motion is a first-class citizen.
7. **Photography and imagery are part of the system.** Case-study imagery has a consistent treatment (crop, ratio, color, frame). Mixed treatments look amateur.
8. **The work is the hero.** Case studies dominate. About copy is short. The contact page is one job: make it easy.

## 5. Anti-patterns

If the site starts to do any of these, stop and re-evaluate:

- Hero with full-bleed video of someone working on a laptop.
- "We craft passionate experiences" copy.
- Three-column "what I do" grid with stock icons.
- A footer that's bigger than the homepage's primary message.
- Carousels.
- A logo that animates on every page load.
- Light/dark toggle as a feature.
- Loading spinners on a static site.
- Generic ease-in-out + 300ms on everything.
- More than two typefaces (display + body), unless a third has a clear job (mono for code, hand for marks).

## 6. Open Questions

These are unresolved. Each one needs a decision before the page that depends on it ships. Record decisions in `logs/DECISIONS.md`.

**Closed 2026-06-08** (now codified in `design/SYSTEM.md`):

- ~~Type system.~~ → Inter (display + body) + IBM Plex Mono (data / chrome). Both via `next/font/google`.
- ~~Colour palette.~~ → Pure white field + pure ink hairlines. Greyscale ramp for hierarchy only. No accent.
- ~~Motion language.~~ → Durations 80/160/240/400ms; default `--ease-out` cubic-bezier(0.2, 0, 0, 1). Things move on state change, never on scroll.

**Still open:**

- **Case-study structure.** Each case study needs: hero, context, role, process, outcome, imagery. Define the canonical template before building the first one.
- **Photography treatment.** Greyscale or full-colour? Inset frame (on `--ink-05`) or full-bleed within the column? Decide once; apply everywhere.
- **Image preparation pipeline.** AVIF + WebP + PNG fallback at what sizes? Manual export or build-step automation?
- **Navigation.** Persistent rail (top, 56px, see `design/SYSTEM.md §10.2`) or homepage-only? On mobile: collapse, scroll-hide, or stay sticky?
- **Footer.** Currently absent. What goes there when there's more than one page worth linking to? A bottom rail with page coord + counter (per system) is the candidate.
- **Loading state.** No spinners (system rule). Replace with mono `[ LOADING ]` status line? Spike needed.
- **Mark / wordmark.** The crest is a one-off illustration. Does the site also need a wordmark for nav / favicon contexts? Currently the crest stands alone.

## 7. Page Inventory (proposed)

Order is implementation order, not navigation order.

| Route | Status | Purpose |
|---|---|---|
| `/` | live (holding) | Crest + single CTA. Will eventually become a real landing page; design that page once `/work` exists. |
| `/contact` | live | Form. Works. Style needs to align with the rest of the site once direction lands. |
| `/work` | not built | Portfolio index. Selected work, not exhaustive — 6–10 pieces at most in the first pass. |
| `/work/[slug]` | not built | Case study template. Build the template before the first case study. |
| `/studio` | not built | About. Short. One photograph at most. Clients, recognition, contact prompt. |
| `/journal` | optional | Writing. Only ship if there is writing to ship; don't build the page to fill it later. |

## 8. References

Reference material — what to study, what to avoid — lives in `design/references/` and `design/moodboards/`. The brief shouldn't enumerate them. When studying a reference, note in `design/research/` *what specifically* is worth stealing (typographic detail, layout logic, restraint of palette) rather than the look as a whole.

Designers and studios whose discipline is the standard: Bureau Mirko Borsche, Studio Dumbar, MUTI, Order, Bielke&Yang, Order Design, Karl Nawrot, Daniel Eatock. Tone-setting personal sites: Frank Chimero, Robin Rendle, Tobias van Schneider. These are *frames of reference for craft*, not styles to copy.

## 9. How to Use This Document

- **Before any visual work:** read sections 4, 5, and 6.
- **When making a design decision not yet covered:** propose it, get the user's call, then write the decision into section 6 (or move it out of section 6 into the body of the brief).
- **When the running site contradicts the brief:** either the site is wrong (fix it) or the brief is wrong (update it). Don't let them drift.
- **Don't expand this doc with rationale unless it's load-bearing.** This is a brief, not a manifesto.
