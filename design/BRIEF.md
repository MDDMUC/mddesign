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

**Locked 2026-06-10.** Use the paragraph below verbatim on `/studio` as the page lede. Paula Scher pattern — short sentences, each making one claim.

> Designer working across UI/UX, brand, and product systems. Selected work has scaled a $45T fintech platform (CEPRES), rebuilt a €100m commerce business (Keller Sports), and shaped the visual identity of the Young Champion Ambassador program (Olympic Movement, 25+ cities). 25+ international design awards including D&AD Yellow Pencil, German Brand Award Gold, and Red Dot. Has taught design as business strategy at the University of Denver and the World Trade Center Denver.

**Page hierarchy on `/studio`:** the H1 is **"Martin Drexler"** (the designer's name does the work — it's the page's monumental moment); the mono eyebrow above reads `STUDIO`; the lede sits below the H1 in the same 7/5 header pattern as case studies. The page tells the visitor *who they're considering hiring* in under 60 seconds (BRIEF §1) — a category label as H1 squanders that.

UI/UX-led, brand-fluent — not the inverse. The teaching credential (Daniels College of Business + WTC Denver, 2020–2022) is what makes "design as business strategy" defensible. When future copy ambiguates this, default to the UX/product framing first.

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
8. **The work is the hero.** Case studies dominate. About copy is short. The contact page is one job: make it easy. The homepage does not recite the studio paragraph or a three-link brochure — that copy lives on `/studio`; the work lives on `/work`.
9. **The site IS a piece of software.** Locked 2026-06-10, chrome revised 2026-08-31. ⌘K remains the command palette. Live chrome is a 44px Plex Mono typesetter bar (wordmark / Work / Studio / Contact / ⌘K). The ChromeStrip (version / commit / build / scroll) is retired from the layout. Spline on `/` is the one 3D object. View Transitions on `/work` ↔ `/work/[slug]`. They compound and do not compete.

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

**Closed 2026-06-10** (now in `design/SYSTEM.md §14`):

- ~~Case-study structure.~~ → 8-section template: Header → Hero artifact → Context → Problem → 4–8 Design-decision vignettes → Outcome (optional) → Credits → Pager. Vignettes are the load-bearing section.
- ~~Loading state.~~ → Mono `[STATE]` labels only. `[LOADING]`, `[SENDING]`, `[SENT]`, `[COPIED]`, `[LOADING 01/06]`. No spinners ever.
- ~~Navigation.~~ → ⌘K command menu *and* a persistent typesetter bar (Plex Mono, 44px). Bar carries wordmark / Work / Studio / Contact / ⌘K hint. Revised 2026-08-31: not a boxed product header; not the retired ChromeStrip.
- ~~Footer / mark.~~ → No separate footer block on long-form pages. Wordmark in the bar links home; colophon remains a route.
- ~~Page transition language.~~ → View Transitions API on `/work` ↔ `/work/[slug]` with `view-transition-name` on hero + title. Root crossfade on all other route changes. 400ms `--ease-out`. Disabled under reduced-motion.

**Closed 2026-08-31** (composition push — lane 2):

- ~~Landing job.~~ → Title card: cities + lockup + one Work link over the Spline field. Lockup is **MARTIN DREXLER** (uppercase, `wght` 700) over **Design Studio** (title case, `wght` 400). Reveal is line-rise only — no variable-font weight morph (Inter snaps between masters). No awards logo strip. No studio paragraph on `/`.
- ~~`/work` index.~~ → Display-scale names, dates printed, no logo cells. Typographic ledger, not a catalog of equal 36px rows.
- ~~Case-study covers.~~ → Shared 8-section spine. Each case gets a distinct type cover (geometry, not decoration) until photography lands. Vignette image frames stay hidden rather than showing empty 3:2 boxes.
- ~~Contact headline.~~ → The email is the H1.

**Still open:**

- **Image preparation pipeline.** AVIF + WebP + PNG fallback at what sizes? Manual export or build-step automation? Photography treatment remains option C (1px hairline, no greyscale, no tint) — BRIEF 2026-06-10.

## 7. Page Inventory (locked 2026-06-10)

Order is implementation order, not navigation order.

| Route | Status | Purpose |
|---|---|---|
| `/` | live | Title card over Spline. Cities + name + Work. |
| `/contact` | live | Form. H1 = email. |
| `/system` | live | Internal design-system reference (noindex). |
| `/work/cepres` | live | Case 01. Type cover (software field). Images still to come. |
| `/work/[slug]` | template | 8-section spine; cover geometry varies per case. See `design/SYSTEM.md §14.9`. |
| `/work` | live | Display-scale typographic ledger. Dates printed. No logos. |
| `/work/keller-sports` | live | Case 02. Catalog-strip cover. |
| `/work/yca`, `/work/planetarie` | live | Cases 03–04. Wayfinding / packaging covers. |
| `/work/byte`, `/work/space-for-curiosity` | live | Cases 05–06. Object / letterbox covers. |
| `/studio` | live | About. H1 = Martin Drexler. BRIEF §3 paragraph verbatim. Spline portrait. |
| `/colophon` | live | Plain Plex Mono table. Noindex. |
| `/work/archive` | phase 3 | Text-only ledger of older / smaller work (Fibbers, Neuro Hope, Auto Verbeessen, Plotgrid, Creative Consortium, USA Wrestling, Global Counseling Network, mining, drilling, etc.). |
| `/journal` | optional | Writing. Only ship if there is writing to ship; don't build the page to fill it later. |

**The six case studies (display order on `/work` once it exists):**
1. **CEPRES** — `Martin Drexler Design Studio` — UX / UI / PRODUCT / FINTECH
2. **Keller Sports** — `Keller Sports (Head of Design)` — COMMERCE / UI / BRAND / PRODUCT
3. **YCA** — `Goodvoice Group (Creative Director)` — BRAND / UX / PRODUCT / SPATIAL
4. **Planetarie** — `Goodvoice Group (Creative Director)` — BRAND / PRODUCT / PACKAGING / CPG
5. **byte** — `Haimish Studio (Product Design)` — PRODUCT / PACKAGING / 3D / CONSUMER
6. **Space for Curiosity** — `Haimish Studio` — BRAND / CONTENT / FILM *(conditional)*

NDA blocklist: D&AD Yellow Pencil project, BMW, Red Bull. Can be named in `/studio` prose (clients) but no case studies.

## 8. References

Reference material — what to study, what to avoid — lives in `design/references/` and `design/moodboards/`. The brief shouldn't enumerate them. When studying a reference, note in `design/research/` *what specifically* is worth stealing (typographic detail, layout logic, restraint of palette) rather than the look as a whole.

Designers and studios whose discipline is the standard: Bureau Mirko Borsche, Studio Dumbar, MUTI, Order, Bielke&Yang, Order Design, Karl Nawrot, Daniel Eatock. Tone-setting personal sites: Frank Chimero, Robin Rendle, Tobias van Schneider. These are *frames of reference for craft*, not styles to copy.

## 9. How to Use This Document

- **Before any visual work:** read sections 4, 5, and 6.
- **When making a design decision not yet covered:** propose it, get the user's call, then write the decision into section 6 (or move it out of section 6 into the body of the brief).
- **When the running site contradicts the brief:** either the site is wrong (fix it) or the brief is wrong (update it). Don't let them drift.
- **Don't expand this doc with rationale unless it's load-bearing.** This is a brief, not a manifesto.
