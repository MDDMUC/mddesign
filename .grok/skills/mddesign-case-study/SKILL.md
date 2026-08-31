---
name: mddesign-case-study
description: >
  Design or implement a /work/[slug] case study using the locked 8-section
  template. Use when Martin asks to add, fill, photograph, or edit a case
  study, vignette, or work-index row, or runs /mddesign-case-study.
---

# Case-study pipeline

Canonical structure: `design/SYSTEM.md` §14.9. Shared CSS: `site/components/CaseStudy/CaseStudy.module.css`. Do not fork the module per slug.

## Before writing

1. Read SYSTEM.md §14.9 (template + exclusions + vignette rules)
2. Read the closest shipped sibling under `site/app/work/*/page.tsx`
3. Confirm the project is one of the locked six (BRIEF §7) and **not** on the NDA blocklist
4. Confirm studio attribution (`STUDIO — [name]`) matches the lock — honest about Haimish / Goodvoice / in-house / Design Studio

## Locked six (display order)

| # | Slug | Studio line |
|---|------|-------------|
| 01 | `cepres` | Martin Drexler Design Studio |
| 02 | `keller-sports` | Keller Sports (Head of Design) |
| 03 | `yca` | Goodvoice Group (Creative Director) |
| 04 | `planetarie` | Goodvoice Group (Creative Director) |
| 05 | `byte` | Haimish Studio |
| 06 | `space-for-curiosity` | Haimish Studio |

**NDA — name in `/studio` only, never a case study:** D&AD Yellow Pencil project, BMW, Red Bull.

## Eight sections, in order

| § | Section | Notes |
|---|---------|--------|
| 1 | Header | Title + mono meta (`STUDIO` / `ROLE` / `CLIENT` / `YEAR` / `TEAM` / `STATUS`). `view-transition-name: work-title-{slug}` on the h1 |
| 2 | Hero artifact | 1 image, no caption. `view-transition-name: work-hero-{slug}` |
| 3 | Context | 40–80 words, one paragraph, class `lede` (drop cap lives here **only**) |
| 4 | Problem | 30–60 words, one paragraph |
| 5 | Design decisions | **4–8 vignettes**. Heading ≤6 words + 40–90 words + 1–2 images. Load-bearing |
| 6 | Outcome | 30–60 words, **optional** — skip if no specific number or behaviour change |
| 7 | Credits | Plex Mono list |
| 8 | Pager | `← Index` / `Next →`. No CTA. No contact form |

Layout: §§3, 4, 6, 7 are 5/7 (mono title left, body right). §5 is full-width. **Every vignette leads with text** (5/7 text / image). Do not alternate.

## Photography (locked, option C)

- 1px ink hairline frame (`var(--rule)`)
- No `--ink-05` tint, no greyscale, no shadow
- Vignette ratio 3:2 landscape; if a study is portrait, 4:5 — pick once per case and hold
- Until the image pipeline is locked (BRIEF §6), keep `data-status="placeholder"` rather than inventing crops
- AVIF/WebP + PNG fallback; explicit `width`/`height`; `loading="lazy"` except LCP (`fetchPriority="high"`)

## Copy rules

- Evidence, not marketing. Specific nouns. No "passionate / crafted / bespoke"
- Never fabricate metrics, awards, or role. Gaps stay gaps
- Stacy Cason testimonial is Planetarie-only; no site-wide testimonial wall
- Hard exclusions (critic will reject): bootcamp arc, persona cards, hero quotes from self, awards walls, vague impact, "Let's work together," 3D device mockups, NDA placeholder slides

## `/work` index

A new case must also appear in `site/app/work/page.tsx` in locked order. Logo cells are placeholders until real marks land — do not fake logos.

## After implementing

1. `/mddesign-critique` (meaningful visual or new page)
2. From `site/`: `npm run typecheck` and `npm run build`
3. Browser: `/work` → the case → pager to neighbor. Desktop + mobile. View Transition on title
4. Update `CLAUDE.md` / `memory/PROJECT_MEMORY.md` if a new slug shipped
