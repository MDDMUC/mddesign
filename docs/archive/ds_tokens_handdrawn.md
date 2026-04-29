# Design Tokens

Source of truth: `site/styles/tokens.css`. This file documents the intent behind each token group. If they drift, the CSS file wins — update this doc to match.

## Color

| Token | Value | Use |
|---|---|---|
| `--paper` | `#f7f3ec` | Page background. Warm off-white, sketchbook stock. |
| `--paper-deep` | `#efe8dc` | Card / pulled-out panel background. |
| `--ink` | `#1a1a1a` | Primary text and rules. Near-black, never pure black. |
| `--ink-soft` | `#3a3a3a` | Secondary text. |
| `--ink-mute` | `#7a7568` | Tertiary text, captions, metadata. |
| `--ink-faint` | `#cfc7b8` | Hairline dividers, table rules. |
| `--accent` | `#c8553d` | Terracotta — hand-drawn marks, emphasis. **Sparingly.** |
| `--accent-soft` | `rgba(200,85,61,0.12)` | Highlight wash behind hand-marked words. |

## Typography

| Token | Family | Use |
|---|---|---|
| `--font-display` | Fraunces (serif) | Headings, long-form display. |
| `--font-body` | Fraunces (serif) | Body copy. |
| `--font-ui` | Inter (sans) | Nav, buttons, labels, captions. |
| `--font-hand` | Caveat (handwritten) | Hand marks, marginalia, signatures. Never body. |

Type scale unchanged from previous direction (display 64 → micro 10) — proportions still work. Letter-spacing slightly looser on display because Fraunces has more presence than Helvetica did.

## Stroke weights

| Token | Value | Use |
|---|---|---|
| `--stroke-hair` | `1px` | Default rule. |
| `--stroke-pencil` | `1.25px` | Hand-mark default. |
| `--stroke-ink` | `2px` | Heavier hand-mark, drawn-on underlines. |

## Spacing

Unchanged 12-step scale (4px → 256px). Section padding stays generous (96–128px on desktop). Hand-drawn aesthetic depends on whitespace; do not tighten it.

## Motion

- `--duration-fast` 200ms, `--duration-normal` 300ms, `--duration-slow` 500ms.
- `--ease-out` for entries; `--ease-in-out` for state changes.
- Hand-mark draw-on uses `stroke-dashoffset` over `--duration-slow`.

## Hand-mark conventions

Hand marks are SVGs (inline, not images) with:
- `stroke="currentColor"`, color set via `color: var(--accent)` on the parent.
- `stroke-linecap="round"`, `stroke-linejoin="round"`.
- Slight imperfection in the path — never perfectly straight or circular.
- One mark per visual unit max. If you want to mark three things, mark one and let the others stand on their own weight.
