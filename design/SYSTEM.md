# Design System — Martin Drexler

**Codename:** Zion. **Authority:** This doc + `site/styles/tokens.css`. If they disagree, the running site is wrong.

The system is small on purpose. It does three things well — type, hairlines, restraint — and refuses everything else.

---

## 1. Premise

The site is an **operator's blueprint that reads as working software**: pure white field, ink hairlines as the structural language, monospace as the voice of the system, sans as the voice of the content. Form is mechanical, content is human. Version stamps, build commits, ISO dates, and a ⌘K command menu announce that this site is a piece of software the designer maintains — not a brochure. Detail in §14.

Three non-negotiables that shape every other decision:

1. **Pure white, pure ink, nothing in between.** No tint, no chroma, no accent.
2. **The 1px hairline is the signature.** Everything that needs an edge, gets a hairline. Filled black is reserved for emphasis (hover, selection, inversion).
3. **The chrome is software.** Mono chrome strip on every page (wordmark / version / commit / build / scroll progress / ⌘K hint) + View Transitions on case-study navigation. The four signature moves in §14 compound; they do not compete.

---

## 2. Color

```
--bg            #ffffff   page surface
--bg-inverse    #000000   inverted moments (hover, selection)

--ink           #000000   hairlines, headlines, primary
--ink-80        #1a1a1a   body text (softer than pure on bright surface)
--ink-70        #404040   secondary text, dimmed label
--ink-50        #737373   placeholder, muted note
--ink-30        #b3b3b3   disabled, subtle hairline
--ink-15        #d9d9d9   faint divider
--ink-05        #f2f2f2   hairline-tinted hover surface
--ink-inverse   #ffffff   text on inverse surface
```

**Usage rules:**

- `--ink` is for hairlines, display type, and primary copy headlines. Body text uses `--ink-80` to soften the visual fatigue of pure black on white.
- Greys are for hierarchy *inside a single composition*. Don't grey out a whole page.
- No gradient, no tint, no `rgba(0,0,0,0.5)` shortcut — use the named tokens so the ramp stays coherent.
- Hover surfaces use `--ink-05` (almost invisible — that's the point). No coloured hovers.

---

## 3. Type

### Pairing

| Role | Family | Weight | Use |
|---|---|---|---|
| Display | Inter | 500, 600 | Headlines, hero, case-study titles |
| Body | Inter | 400 | Editorial body, long form |
| Data / chrome | IBM Plex Mono | 400, 500 | Coords, labels, IDs, timestamps, captions, button labels |

Inter is loaded; IBM Plex Mono will be added via `next/font/google`. No third family. If a moment seems to need one, redesign the moment.

### Scale

```
--text-2xs  11px   micro mono chrome
--text-xs   12px   mono label / coord / caption
--text-sm   14px   secondary body
--text-base 16px   body
--text-lg   18px   editorial body / case-study paragraph
--text-xl   22px   subheading
--text-2xl  28px   h2
--text-3xl  36px   h1 small
--text-4xl  48px   display
--text-5xl  72px   large display (hero)
--text-6xl  96px   monumental (used sparingly, max once per route)
```

### Leading + tracking

```
--leading-tight    1.05    display
--leading-snug     1.20    subheadings, large body
--leading-body     1.55    body
--leading-loose    1.70    editorial long-form

--tracking-display -0.02em  display (Inter wants negative tracking at scale)
--tracking-body    0         body
--tracking-mono    0.02em    Plex Mono (open it up slightly for breath)
--tracking-caps    0.14em    ALL CAPS labels
```

### Rules

- Display headlines: Inter 500/600, `--tracking-display`, `--leading-tight`. Never ALL CAPS in display sizes.
- Body: Inter 400, `--leading-body`, max-width ≈ 65ch for readability.
- Mono labels: IBM Plex Mono 400/500, `--text-xs` or `--text-2xs`, `--tracking-mono`. May be ALL CAPS at `--text-2xs` only; otherwise sentence case.
- Italics: discouraged for display (Inter italic is correct but rarely needed in this aesthetic). Use only for genuine emphasis in body, never decoratively.
- No font-stretch tricks. No webkit text-stroke. No outlined text.

---

## 4. Space

4-based scale. Use these tokens; don't invent values between them.

```
--space-0   0
--space-1   4px
--space-2   8px
--space-3   12px
--space-4   16px      default rhythm unit
--space-5   24px
--space-6   32px
--space-7   48px      section vertical spacing
--space-8   64px
--space-9   96px      major section break
--space-10  128px
--space-11  192px     hero / monumental
```

**Rhythm:**

- Inline gaps within a component: `--space-2` or `--space-3`.
- Stack gaps inside a card / form: `--space-4` or `--space-5`.
- Section padding: `--space-9` top/bottom on desktop, `--space-7` on mobile.
- Anything bigger than `--space-9` is a deliberate moment — use it once per page max.

---

## 5. Layout

### Containers

```
--container-narrow   720px    editorial column
--container-max      1280px   default content
--container-wide     1480px   hero, work index, monumental moments
```

### Page padding

```
--pad-page     24px    mobile, tablet
--pad-page-lg  48px    desktop ≥ 1024px
```

### Grid

12-column grid, `--gutter` 24px. Don't draw the grid lines decoratively — they're for structure, not ornament. Asymmetric column spans are encouraged (e.g., 7 + 5, 8 + 4, 5 + 7) — symmetric splits (6 + 6) read as templated.

### Rails

`--rail-h` 56px. The top rail carries nav + brand-mark. The bottom rail (where used) carries page identifier + section counter. Rails are separated from content by a `--rule` hairline.

---

## 6. Rules (hairlines)

```
--rule         1px solid var(--ink)      default — pure black hairline
--rule-mute    1px solid var(--ink-30)   inactive, secondary
--rule-faint   1px solid var(--ink-15)   barely-there structural cue
--radius       0                         hard rule — no rounded corners
```

**Usage:**

- Default to `--rule`. Demote to `--rule-mute` only when the line is informational chrome that competes with content (e.g., disabled state, secondary divider).
- Double-hairlines (border + outline-offset) are the signature focus state — see §9.
- Never use border-radius. Sharp corners only.
- Never use box-shadow as a border substitute.

---

## 7. Motion

Two domains: **state** (hover, focus, form submission — fast, mechanical, `--ease-out`) and **entrance** (page-load reveals — slower, settled, `--ease-reveal`). They use different tokens because they communicate different things.

```
--dur-instant   80ms
--dur-fast      160ms                            state — micro
--dur-base      240ms                            state — default
--dur-slow      400ms                            state — heavy
--dur-reveal    700ms                            entrance — type, blocks
--dur-line      900ms                            entrance — hairline draw

--ease-out      cubic-bezier(0.2, 0, 0, 1)       state default — sharp out
--ease-in       cubic-bezier(0.5, 0, 1, 0.5)
--ease-inout    cubic-bezier(0.7, 0, 0.2, 1)
--ease-reveal   cubic-bezier(0.16, 1, 0.3, 1)    entrance default — gentle settle

--stagger-1     60ms                             child delay step (1×)
--stagger-2     120ms
--stagger-3     200ms
--stagger-4     320ms
--stagger-5     480ms
```

### 7.1 State motion (always-on)

- Default duration `--dur-base`. Default easing `--ease-out`.
- Applies to: hover, focus, form state changes, button presses.
- Always uses `transition`, never `animation`.

### 7.2 Entrance motion (page-load reveals)

Five primitives, in `site/styles/animations.css`. They run **once on mount** as CSS animations — no scroll triggers, no IntersectionObserver. Reduced-motion zeros every duration. Apply them by adding the class to any element.

| Class | Effect | Use |
|---|---|---|
| `.reveal-rise` | translateY(12px) + opacity 0 → 1 | Default body reveal. Subtitles, paragraphs, blocks. |
| `.reveal-fade` | opacity 0 → 1 | Captions, mono labels, fineprint. The lightest touch. |
| `.reveal-mask` | clip-path `inset(0 0 100% 0)` → `inset(0)` | Display headlines. Reads as the text revealing from below. |
| `.reveal-line` | scaleX(0) → scaleX(1), origin left | Hairlines and dividers drawing in. |
| `.reveal-clip` | clip-path `inset(50% 0)` → `inset(0)` | Images and frames. Rectangular wipe from horizontal centre. |

**Stagger:** add `.reveal-stagger-1` through `.reveal-stagger-5` to delay sequential children. Use whole-step delays — don't invent intermediates.

**Recipe — a hero:**
```jsx
<span className="coord reveal-fade">00 — INDEX</span>
<h1 className="reveal-mask reveal-stagger-1">Display headline</h1>
<p className="reveal-rise reveal-stagger-3">Lede paragraph...</p>
```

The coord drops in first (instant fade), the headline rises through its mask 60ms later, the lede follows at 200ms. The sequence reads as deliberate, not decorative — the page assembles itself.

### 7.3 What moves vs. what doesn't

- **Moves on entrance:** display headlines (mask), coords + small chrome (fade), body blocks + buttons (rise), divider hairlines (line), hero images (clip).
- **Moves on state:** hover, focus, form submission feedback.
- **Loops:** only the cursor (§9.7). Nothing else loops.
- **Never moves on scroll.** No scroll-triggered fade-ins. No parallax. No "scroll-reveal" — when you can see the rest of the page when scrolling, the choreography is over.

---

## 8. Iconography

- All custom. 1px stroke. Square corners. Square endpoints. Monoline.
- Sizes: 16px (chrome), 20px (action), 24px (large action), 32px (hero only).
- No filled icons. No coloured icons. No icon libraries (no Lucide, no Heroicons — they have a generic silhouette).
- An icon that needs more than two visual elements probably needs to be a wordmark instead.

---

## 9. Component Primitives

Implementation lives in `site/components/` (folder is currently empty — primitives get added as routes need them). Each primitive has one CSS module + one TSX file.

### 9.1 Button

Three variants. All use `--font-data` (mono) for labels at `--text-xs`, `--tracking-caps`, uppercase.

```
.outline   1px solid var(--ink), bg white,        text ink         — default
.solid     1px solid var(--ink), bg ink,          text white       — primary CTA
.ghost     no border,            bg transparent,  text ink         — tertiary
```

- Padding: `--space-3` vertical, `--space-5` horizontal.
- Hover on `.outline`: inverts to solid (bg ink, text white). Duration `--dur-fast`.
- Hover on `.solid`: inverts to outline (bg white, text ink, same border).
- Hover on `.ghost`: bg `--ink-05`.
- Focus state on all: `outline: 1px solid var(--ink); outline-offset: 3px;` — produces the double-hairline blueprint marker. Never `outline: none` without replacement.

### 9.2 Link

- Inline links: underline always visible at `--ink-30`; on hover the underline becomes `--ink`. Text colour unchanged.
- Standalone link (nav, footer): no underline. Hover gets the underline at `--ink`.
- External links never get an emoji or icon — context, not chrome, marks them.

### 9.3 Field (input / textarea)

- 1px hairline box, `--rule` border at idle.
- Internal padding: `--space-3` vertical, `--space-4` horizontal.
- Label above field: mono, `--text-xs`, uppercase, `--tracking-caps`, `--ink-70`. Required fields get no asterisk — the label tells you.
- Placeholder: sans, `--ink-50`. Use sparingly — the label should already say what's needed.
- Focus: same border + `outline: 1px solid var(--ink); outline-offset: 3px;` → double hairline.
- Error: border stays black; error text appears below in mono `--text-xs` with `[ERROR]` prefix.
- Disabled: border becomes `--rule-mute`; text becomes `--ink-50`.

### 9.4 Card / Frame

A bordered region for grouped content. 1px hairline. Internal padding `--space-5` to `--space-7`. Optional mono section identifier at top-left (see §10.1) — sits on the hairline, with `--space-2` padding so it appears to interrupt the line.

### 9.5 Divider

- Standalone: full-width `--rule`.
- Labelled: full-width `--rule` with a mono caption hugging the left (e.g., `01 — INDEX`). The caption sits inline with the rule, breaking it with white-space padding so the rule appears interrupted.

### 9.6 Coord label

Mono caption that orients the visitor. Lives in chrome positions (rail corners, section heads). Format conventions:

```
01 — INDEX            section identifier
04 / 06               counter (this of total)
HOME / WORK / KELLER  breadcrumb
2026                  date stamp, no slashes
MUC / 48.137 N 11.575 E   coordinate (used at most once per route, as flourish)
```

Always `--font-data`, `--text-xs`, `--tracking-caps`, uppercase, `--ink-70`. Never animates.

### 9.7 Cursor

A single decorative element allowed to loop: a `▮` glyph that blinks at 1.2s cadence, used at the end of a heading or status line to communicate liveness. Respects `prefers-reduced-motion` — when reduced, the cursor is solid (not blinking).

---

## 10. Patterns

### 10.1 Section identifier

Every section in a long-form route gets a mono identifier at top-left of its bounding rule. Format: `## — TITLE` (e.g., `01 — CONTEXT`, `02 — ROLE`). This is the orientation system; it's how a visitor knows where they are without a sticky nav.

### 10.2 Rail

- Top rail: 56px, full-width, with a single `--rule` hairline along the bottom. Contains brand-mark at left, nav at right (mono, `--text-xs`).
- Bottom rail (optional, used on case studies): same height + `--rule` along the top. Contains page coord at left, counter at right.

### 10.3 Asymmetric two-up

Standard case-study layout: 7-column content + 5-column meta (or 8/4 for image-heavy moments). Never 6/6.

### 10.4 Image treatment

- Squared corners. Full-bleed within the column. No drop shadow, no border, no overlay caption.
- Captions sit *below* the image in mono `--text-xs`, left-aligned to the image's left edge. Format: `FIG. 01 — short description`.
- Image ratios are intentional: 3:2 for landscape work, 4:5 for portrait, 1:1 for marks. Don't crop to fit a grid; rebuild the grid for the image.

### 10.5 Status line

A live state communicator that uses mono `--text-xs`. Examples: `[ AVAILABLE ]` on the about page; `[ SENDING ]` on form submission; `[ OK — MESSAGE RECEIVED ]` on form success. Inverted when active (black bg, white text, 4px padding).

---

## 11. Anti-patterns (specific to this aesthetic)

These will trigger a reject from the `design-critic` subagent:

- Border-radius anywhere.
- Greys outside the documented ramp. No `#888`, no `gainsboro`, no `text-muted` invented mid-file.
- Shadow on any element. No drop shadow, no `box-shadow` even subtle.
- Background tint that isn't `--ink-05` for a hover surface.
- Animated icons, especially "pulsing dots" for status. Use the cursor (§9.7).
- Lucide / Heroicons / any third-party icon set. Custom only.
- Centered hero with subhead in `--ink-70`. The default look of every templated landing page. Use asymmetric layout.
- "Glass" / backdrop-blur cards.
- Coloured CTA. The button is ink-on-white or white-on-ink. There is no third option.
- Three-column "what I do" grid. If three things matter, write three sentences.

---

## 12. What's not yet specified

To be filled in as the site grows. When a route needs one of these, decide it and update this doc:

- **Photography treatment.** Greyscale or full-colour? Treated frame (inset on `--ink-05`) or full-bleed? Decision required before the first case study.
- **Loading state.** No spinners. What replaces them? Likely a mono `[ LOADING ]` line.
- **Mobile rail behaviour.** Does the rail collapse, scroll-hide, or stay sticky? Decide once `/work` exists.
- **Form success/error inline visual.** §10.5 sketches this — but the exact mark needs a spike.

Decisions land in `logs/DECISIONS.md` and folded back into this doc.

---

## 13. How to extend this system

1. **A new token? Add it to `tokens.css`** with a one-line comment explaining what it's for.
2. **A new component primitive? Add a §9 entry here** before writing the code.
3. **A new pattern? Add a §10 entry here** before applying it twice.
4. **Tempted to break a rule?** Write the case in the PR description. The brief and this doc are stronger than any single decision but they're not stronger than evidence.

---

## 14. Site identity — the four signature moves

**Locked 2026-06-10.** The thesis is **personal-site-as-software**. Four moves carry it. They compound: the fluid sim and the View Transitions sit on opposite layers (canvas under, route morph over); the ⌘K menu and the chrome strip are typographic — they reinforce the others without competing.

### 14.1 Move A — WebGL2 fluid sim (already shipped)

Lives on `/` only. Crest sampled in the display shader and warped by the velocity field; mouse disturbs both ink trails and crest. Pointer-driven uniforms damped with a JS-side spring (stiffness 320, damping 28, mass 0.8) so the fluid "follows" the cursor with grace rather than 1:1 jitter. **Reduced-motion: stop the rAF loop, render one last frame, leave it on screen as a still image.** Files: `site/app/{FluidCanvas,fluid,shaders}.{tsx,ts}`.

### 14.2 Move B — View Transitions on `/work` ↔ `/work/[slug]`

Native API, enabled via Next.js 16 `experimental.viewTransition` + `@view-transition { navigation: auto }` in `globals.css`.

- Tile cover: `view-transition-name: work-hero-{slug}` on the figure. Hero on the detail page uses the same name → the cover morphs.
- Tile title: `view-transition-name: work-title-{slug}` → title slides into h1 position.
- Mono eyebrow label crossfades root.
- Duration: 400ms `--ease-out`. Reduced-motion: `animation: none !important` on all `::view-transition-*` pseudo-elements.
- Skip naming: global header and the fluid sim canvas — give them `view-transition-name: none` so they don't ghost.

### 14.3 Move C — ⌘K command menu + keyboard hint chrome

Cross-page navigation backbone. White sheet, 1px ink border, no shadow. Backdrop is solid `--bg`, not blurred.

- **Open:** `transform: scale(0.98 → 1)` + `opacity 0 → 1` over 160ms `--ease-out`.
- **Close:** `opacity 1 → 0` over 80ms `--ease-in` (cubic-bezier(0.4, 0, 1, 1)). Asymmetric enter/exit.
- **Backdrop:** solid `--bg`. No translucency, no `mix-blend`, no blur. (Earlier translucent veil rejected by design-critic 2026-06-10 — read as "stuck overlay.")
- **Item focus:** background `--bg → --ink-05` + 2px leading bar in `--ink`. 80ms.
- **Items (v1, five):** Go to Work / Go to Studio / Go to Contact / Open Colophon / Copy email address. Plex Mono shortcuts right-aligned. (Toggle Motion deferred until the reduced-motion override system is built; spec previously listed six items.)
- **Discoverability:** `⌘K` hint in the chrome strip (Mac) / `Ctrl K` (Windows/Linux). Platform-detected via `navigator.userAgentData?.platform`.
- **Keyboard prefixes:** `G W` → `/work`, `G S` → `/studio`, `G C` → `/contact`, `?` → show shortcuts.

Defer: implementation lives in a `site/components/CommandMenu/` primitive when built.

### 14.4 Move D — Persistent mono chrome strip

Bottom of viewport, every page. 10px IBM Plex Mono, ink at 60% opacity (use `--ink-60` token). Tabular figures everywhere. All slots are inline on desktop; the strip wraps to two rows on mobile.

Layout (left → right):

```
MD_DESIGN / v2.4.0 · 0573884 · BUILT 2026-06-10            0.412   ⌘K
```

| Slot | Source | Notes |
|---|---|---|
| Wordmark | static `MD_DESIGN` | Already exists in landing chrome; reuse |
| Version | `package.json` via `process.env.NEXT_PUBLIC_VERSION` | SemVer. Major = new section. Minor = case study. Patch = everything else. |
| Commit short hash | `process.env.VERCEL_GIT_COMMIT_SHA?.slice(0,7)` | Wrap in `<a>` to commit URL if repo public, else plain text |
| Build date | `new Date().toISOString().slice(0,10)` at build time (Server Component constant) | NOT runtime — must be build-time |
| Scroll progress | `scrollY / (scrollHeight - innerHeight)` | Three decimals, tabular. rAF only while scrolling; idle = no work |
| ⌘K hint | platform-detected | Opens the command menu |

The wordmark links to `/colophon` — a plain Plex Mono two-column table (stack / hosting / type / motion / rendering / design / access / source / version / licence). Component lives in `site/components/ChromeStrip/`.

### 14.5 Type extensions (extends §3)

Five upgrades layered on top of the existing scale:

1. **Inter switched to variable** in `next/font` (no static `weight` array). Axis `opsz` exposed via `axes: ['opsz']`. (`slnt` is not exposed by next/font's Inter type — use `font-style: italic` for emphasis instead; Inter has a proper italic cut.) Plex Mono stays static (not variable on Google Fonts).
2. **Display 200 + opsz 144** for case-study hero project name: `font-variation-settings: "wght" 200, "opsz" 144;` at `clamp(72px, 12vw, 184px)`. Tracking `--tracking-display-tight` (-0.04em), leading `--leading-display-tight` (0.92). **Caveat:** Google Fonts' Inter variable exposes `opsz` only across `14–32`; values above 32 clamp silently to the largest optical-size master. Specifying `opsz: 144` requests "the largest cut available" — adequate for now; document if a future self-hosted Inter Display file unlocks a true 144 master.
3. **Non-integer wght 510** for H1/H2/buttons: `font-variation-settings: "wght" 510;`. Linear's signature — looks subtly custom inside Inter.
4. **Italic for emphasis** instead of bold: `em { font-style: italic; }`. Inter's italic cut handles emphasis cleanly; reserve bold for headings, not in-line emphasis.
5. **OpenType features as default body settings** — `ss03` (round quotes), `cv11` (single-story a), `calt` (contextual alternates). Set globally in `:root`. Mono adds `ss02` (slashed zero), `zero`. Tabular contexts add `tnum`.

Plus three editorial moves:
- **Hanging punctuation** — `html { hanging-punctuation: first allow-end last; }`. Two CSS lines, Stripe Press / Khoi Vinh baseline.
- **Drop cap on case-study lede** — `p.lede::first-letter { font-size: 5.6em; line-height: 0.85; float: left; margin: 0.08em 0.08em 0 0; font-variation-settings: "wght" 200, "opsz" 32; }`. **Reserved exclusively for one paragraph per case study** — the Context introduction. Do **not** use `.lede` on `/studio`, `/colophon`, journal posts, or any other route. The drop cap loses its weight if it appears on non-case-study pages, and a 5.6em cap next to a short measure (the 38ch Studio lede) wrecks the right-rag.
- **Mono eyebrow label** — Plex Mono 12px, UPPERCASE, `letter-spacing: 0.08em`, color `--ink-60`. 24px above each project title on `/work` and case-study headers. **Two-line format when discipline tags exceed two tokens:** line 1 is `CASE 0X — YEAR(S)`, line 2 is the slash-separated discipline list (`UX / UI / PRODUCT / FINTECH`). Single line otherwise: `CASE 03 — IDENTITY — 2024`. The slash list never inlines with the case number on the same line — it crams into illegibility.

### 14.6 German bilingual strategy

Default English. German per-page opt-in via `lang="de"` on the case-study root. No language switcher in chrome.

- `:lang(de) { hyphens: auto; quotes: "„" "" "" ""; }` — German compound nouns get auto-hyphenation; round quotes set to the German pair (with `ss03` enabled, both render correctly).
- `:lang(en) { quotes: "" "" "" ""; }` — English typographer's quotes.
- Spaced en-dashes ` – ` for German parentheticals; em-dashes `—` (no spaces) for English.
- Localised numerals via `Intl.NumberFormat`; tabular-nums keeps alignment regardless of locale.

### 14.7 Motion budget — surface-by-surface

Every motion in the table; nothing else is allowed without amending this doc.

| Surface | Trigger | Property | Duration | Easing | Reduced-motion |
|---|---|---|---|---|---|
| Link (body) | hover | `text-underline-offset` 2 → 4px, `text-decoration-thickness` 1 → 2px | 160ms | `--ease-out` | instant |
| Link (nav) | hover | `opacity` 1 → 0.6 | 80ms | `--ease-out` | 0ms |
| Link / button | focus-visible | `outline-offset` 2 → 4px (1px ink outline) | 80ms | `--ease-out` | static 4px |
| Button (primary) | hover | `background-color` invert (ink ↔ paper) | 160ms | `--ease-out` | 0ms |
| Button | active/press | `transform: translateY(0 → 1px)` | 80ms | `--ease-out` | none |
| Image (work tile) | hover | 1px hairline appears under caption, `transform-origin: left`, `scaleX 0 → 1` | 240ms | `--ease-out` | static hairline |
| Image (case figure) | click | open lightbox via same-doc View Transition | 240ms | `--ease-out` | swap, no transition |
| Route `/` → any | navigate | View Transition root crossfade | 160ms | `--ease-out` | disabled |
| Route `/work` ↔ `/work/[slug]` | navigate | View Transition with `view-transition-name` on hero + title | 400ms | `--ease-out` | disabled |
| Command menu | open | scale 0.98 → 1 + opacity | 160ms | `--ease-out` | opacity-only 80ms |
| Command menu | close | opacity 1 → 0 | 80ms | `--ease-in` | 0ms |
| Form field | focus | bottom border 1px → 2px (no colour change) | 160ms | `--ease-out` | static 2px |
| Form submit | submitting | mono label crossfade `[SEND]` → `[SENDING]` → `[SENT]` | 80ms swap | linear | same |
| Copy-email | click | mono label swap `[COPY]` → `[COPIED]` for 1600ms | 80ms swap | `--ease-out` | same |
| Copy-email | hover | `transition-delay: 60ms` before visual state change | 60ms delay + 160ms | `--ease-out` | no delay |
| Hero (`/`) WebGL fluid | continuous | shader uniforms, pointer-driven spring | 60fps loop | — | **STOP loop; hold last frame** |
| Inline async loading | indeterminate | 1px ink hairline grows left→right under input, 800ms linear infinite | 800ms | linear | static |

### 14.8 Loading language — the anti-spinner

Mono `[STATE]` labels only. The label IS the feedback. No spinners ever.

- **Route loading** (Next.js `loading.tsx`): `[LOADING]` in IBM Plex Mono 12px, ink, top-left at content-grid column. Trailing dots cycle `.` → `..` → `...` at 400ms per step. Reserve the title row's height so no layout shift on real content arrival.
- **Image loading:** 1px ink hairline frame (matches rest state). Inside, top-left, `[LOADING]` until decode. On decode, `opacity 0 → 1` over 160ms. LCP gets `fetchPriority="high"` and no loading state.
- **Form submitting:** Submit button label crossfade `[SEND]` → `[SENDING]` → `[SENT]`. While `[SENDING]`, append cycling dots at 400ms. Button disabled, outline turns into the 1px ink focus-ring look. On `[SENT]`, hold 1600ms, then form replaced (root same-doc View Transition, 240ms) with `[MESSAGE RECEIVED — reply within 48h]`.
- **Copy interactions:** `[COPY]` → click → `[COPIED]` for 1600ms → back. 80ms swap.

### 14.9 Case-study canonical template

Eight sections in this order. `view-transition-name` on §2 hero figure + §1 title.

| § | Section | Length | Purpose |
|---|---|---|---|
| 1 | Header | Title + mono metadata block (`STUDIO` / `ROLE` / `CLIENT` / `YEAR` / `TEAM` / `STATUS`) | Credibility gate — reader knows what Martin owned in 5s |
| 2 | Hero artifact | 1 image, no caption | Show the work before any prose |
| 3 | Context | 40–80 words, 1 paragraph | What the surface is, why it mattered |
| 4 | Problem | 30–60 words, 1 paragraph | The design problem in one tight statement |
| 5 | Design decisions | **4–8 vignettes** — heading (≤6 words) + 40–90 words + 1–2 images each | Load-bearing section. Each vignette = one decision and why |
| 6 | Outcome | 30–60 words, optional | Skip entirely if no specific number or behaviour change |
| 7 | Credits | Plex Mono list | `DESIGN — Martin Drexler. ENGINEERING — …. PM — ….` |
| 8 | Pager | `← Index` / `Next →` | Two-word exit. NO CTA. NO contact form. |

**Hard exclusions** (will be rejected by `design-critic`): bootcamp arc visible (Empathize/Define/Ideate), persona cards, hero quotes from self, awards walls, vague impact claims, "Let's work together" CTAs, three-column feature grids, device mockups in 3D perspective, NDA placeholder slides. Launched-feature filter is the NDA strategy — only show what shipped publicly.

**§5 vignette layout rules:**
- The §5 section runs **full-width** (not the 5/7 split that §§3, 4, 6, 7 use). The section title is a single mono eyebrow above the vignettes, no body column alongside it.
- **Every vignette leads with text** — 5/7 text-left, image-right, applied uniformly. Mechanical alternation across 4+ vignettes reads as pattern, not editing (design-critic 2026-06-10). The strongest claim should always lead with the prose; the image follows.
- Use `grid-template-areas` for layout (never `direction: rtl` — foot-gun on logical properties).
- Vignette image ratio is **3:2** (landscape) per §10.4. If a vignette artifact is portrait, use 4:5 — pick once per case study and hold the choice.

**§§3, 4, 6, 7 layout (asymmetric two-up):** the mono section title sits in a **5-column track on the left**, the body content (paragraph or credits list) sits in a **7-column track on the right**. Body always gets the wider column — the title is the meta. Earlier drafts inverted this; do not repeat.

### 14.10 Anti-patterns (extends §11)

Locked 2026-06-10 — these are the cutting-edge-looking moves that BREAK Zion v2:

- Custom cursor as coloured dot or `mix-blend-mode: difference` follower (no chroma, breaks against pure white).
- Magnetic / cursor-gravity buttons (conflict with WCAG focus predictability + rauno's "high-frequency interactions approach zero motion").
- Cursor trail effects (Lusion-school 2022).
- Full-page WebGL loader/intro animation (the fluid sim runs inside the home layout, never as a gatekeeper).
- A second WebGL distortion surface on a non-landing route (two spines = no spine).
- Scroll-triggered word-by-word reveals (banned for the record).
- Two-tone display ("regular SLANTED" swap mid-headline — every AI-startup landing page has this).
- Variable-font axis sliders as a toy.
- Marquee/ticker scrolling display text.
- Skeleton shimmer / spinners / progress arcs (mono `[STATE]` labels only — see §14.8).
