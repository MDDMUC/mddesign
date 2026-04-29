# Design Brief — Martin Drexler Portfolio

**Direction:** Minimalist + hand-drawn.

A studio site that feels like a designer's sketchbook left open on a clean desk. Generous whitespace. A single warm ink for emphasis. Hand-drawn marks (underlines, arrows, brackets, marginalia) appear sparingly to add personality without becoming kitsch. The grid is disciplined; the linework is human.

## Tone

- **Confident, not loud.** A senior designer's portfolio — work speaks first.
- **Warm, not cute.** Hand-drawn elements are restrained. No doodle borders around every section, no Comic Sans cosplay.
- **Quiet, not cold.** Unlike a pure system-font Swiss minimalist site, the handwriting suggests there's a person behind the work.

## Visual primitives

- **Paper** — the page is off-white, slightly warm. Suggests sketchbook stock, not screen white.
- **Ink** — near-black for type, with one warm accent (terracotta-ish) reserved for hand-drawn marks and rare emphasis.
- **Hairline rules** — pencil-weight dividers, occasionally drawn slightly off-axis for human feel.
- **Hand marks** — short SVG strokes (underlines, arrows, circles, brackets) that look drawn in a single confident gesture. Used to highlight one or two things per section, never as decoration.
- **Grid** — strict 12-column desktop, generous gutters. The grid's restraint is what lets the hand marks read as intentional.

## Typography

- **Display & body**: a warm contemporary serif (Fraunces or similar) — humanist, slightly literary, comfortable at large sizes.
- **UI / labels / captions**: a neutral sans (Inter) — quiet supporting role.
- **Hand marks & accents**: a handwritten script (Caveat) — only for short phrases, signatures, marginal notes. Never body copy.

## What this is not

- Not a retro terminal (we abandoned the amber CRT direction).
- Not a defense-tech blueprint (we abandoned the Anduril direction).
- Not a Matrix homage (we abandoned the Zion direction).
- Not a Notion-template doodle aesthetic. Hand-drawn is a seasoning, not the meal.

## Motion

- Restrained. Fade and translate, never bounce.
- Hand marks may "draw on" once when entering view via `stroke-dashoffset`, but only once and only on the hero / a few hero-like moments.
- Always respect `prefers-reduced-motion`.

## Performance budgets (unchanged)

- LCP < 2.0s, CLS < 0.1, TBT < 200ms.
- WCAG AA accessibility minimum.
