# Reference study — christoph-gey.de (homepage)

**Date:** 2026-09-04  
**Subject:** Christoph Gey — former London classmate (not a colleague). Freelance Creative & Art Director, Germany.  
**URL:** https://christoph-gey.de/  
**Purpose:** What the long-scroll landing *does structurally*, and what is worth stealing for martindrexler.com vs what conflicts with locked BRIEF direction.

**Status (2026-09-04):** Structure **adopted** on `/` (see `logs/DECISIONS.md`). Craft remains Zion — not a Divi/visual copy.

**Pass 2 (same day):** Tightened fidelity — awards strip in hero, full-width client banner after hero, featured work as **4-column media+copy cards** (not a vertical text list). Client strip is typographic until a real logo lockup exists.

---

## Stack (how it’s built)

| Layer | What |
|-------|------|
| CMS | WordPress 6.9.x |
| Builder | Divi (Elegant Themes) + child theme `cg` |
| Motion | GSAP via `divi-page-transitions` plugin |
| SEO | Rank Math |
| Other | Cookie Notice, Google Site Kit |
| Type | Mix of Google fonts (Raleway, Source Serif Pro, Barlow Condensed / Semi Condensed, Cormorant Garamond, PT Sans, Yeseva One) — not a tight system |

This is a **marketing-site homepage assembled in Divi’s visual builder**, not a custom Next app. Sections are `et_pb_section_0` … `_12`. Do **not** copy the stack; copy information architecture and persuasion rhythm if anything.

---

## Site IA (global nav)

1. **HOME** → `/`
2. **ABOUT** → `/profile-creative-director-germany/`
3. **WORK** → `/creative-director-portfolio/`
4. **ESSAYS** → `/brand-design-strategy/`
5. **CONTACT** → `/contact-5/`

Secondary deep links: per-project `/project/...`, expertise page, availability CTA.

---

## Homepage section spine (top → bottom)

Parsed from live HTML (Divi sections) + rendered content:

| # | Job | Content pattern |
|---|-----|-----------------|
| 0–1 | **Hero / positioning** | Title: “Freelance Creative & Art Director.” Positioning line (corporate design + digital products UI/UX/AI). Availability badge (“Available End September 2026”). Fullwidth / video-backed field (`rev-slider-top` class on section 1). |
| 2–3 | **Featured case stack** | Vertical sequence of selected projects: Milk Pod → A Bola → Ca Go → 1. FC Köln → Audi. Each block = name + one-line promise + short paragraph + `CASE STUDY` link. Image/video heavy. |
| ~ | **Latest News** | Dated updates (availability, commissions, launches). Soft editorial + CTA (“LET’S TALK”). |
| 4–6 | **Referrals / social proof** | Rotating / stacked testimonials (Sagmeister, Strichpunkt MD, Dyn CEO, DFL product/engineering leads). Portrait thumbs + quote + role. Link out to About. |
| 7–8 | **Core Competence** | Three pillars (Corporate Design / UI·UX / Conceptual Art Direction) + longer positioning essay + service chips (Logos, Design Systems, Web/App/Watch, Concepts, Prototypes) with supporting images. Link to `/expertise/`. |
| 9–10 | **Latest Essays** | Three essay cards (title + deck + “read more”). |
| 11–12 | **Close + footer map** | “Let’s Connect” CTA → contact. Footer-style tiles: Work / About / Essays with short blurbs + MORE. |

**Persuasion order:** claim who you are → show proof (cases) → signal liveness (news) → borrow trust (referrals) → name the offer (competence) → show thinking (essays) → ask for the conversation.

---

## What works (steal *logic*, not look)

1. **Homepage is a conversion funnel, not a title card.** Work is *on* `/`, not only behind a Work link. A buyer can skim five case teasers without navigating away.
2. **Case teaser formula is clear:** brand name → one-line outcome/promise → short evidence paragraph → single CTA. No “passionate experiences.”
3. **Availability as a product signal.** Dated capacity (“Available End September 2026”) makes freelancing feel real and scarce.
4. **News as a pulse.** Proves the practice is active without rebuilding the whole site.
5. **Referrals sit mid-page, after work.** Trust after evidence, not before.
6. **Essays as secondary proof of taste/thinking** — only if writing exists (BRIEF already gates `/journal` the same way).
7. **Nav is five words.** Home / About / Work / Essays / Contact — close to MDDS Work / Studio / Contact, with Essays as the extra.

---

## What conflicts with mddesign locks

| Christoph move | mddesign lock |
|----------------|---------------|
| Long multi-section homepage | BRIEF §4.8 + closed 2026-08-31: `/` is a **title card** (cities + lockup + Work) over Spline. Studio copy stays on `/studio`; work on `/work`. |
| Hero video / slider energy | BRIEF §5 anti-pattern: hero laptop video / decorative motion. Live signature is Spline, not Divi video. |
| Testimonials carousel / quote wall | Easy to read as agency template; BRIEF rejects template smells. Only consider if quotes are real, sparse, and typographically owned. |
| “Core Competence” service grid + image tiles | Risks three-column “what I do” anti-pattern (§5) unless rebuilt as typographic index, not icon/blurb grid. |
| Essays on home | `/journal` is optional and only if writing ships. |
| WordPress/Divi/GSAP plugin stack | Wrong substrate. Site stays Next + CSS Modules + tokens. |
| Multi-family display mix (serif display + condensed + Raleway…) | Type lock: **Inter + IBM Plex Mono only**. |

---

## Vs current martindrexler.com `/`

| | Christoph | Martin (live) |
|--|-----------|---------------|
| `/` job | Full brochure funnel | Title card → exit to `/work` |
| Work | Embedded case teasers | Separate `/work` ledger + case routes |
| About | Linked + mid-page referrals | `/studio` |
| Contact | Mid + end CTAs | `/contact` form, email as H1 |
| Chrome | Classic WP header menu | 44px Plex Mono typesetter bar + ⌘K |
| Motion | GSAP page transitions, video hero | Spline + line-rise; View Transitions on work |

---

## Emulation options (for Martin to choose)

Do **not** implement until one lane is locked in BRIEF + `logs/DECISIONS.md`.

**A — Keep title-card `/`; steal teaser rhythm on `/work` only**  
Work index rows become richer (one-line promise under each name) without turning `/` into a brochure. Lowest conflict with locks.

**B — Hybrid `/`: title card, then a short selected-work strip, then exit**  
One viewport of identity + 3–5 case teasers + link to full ledger. Biggest IA change; needs explicit unlock of “landing job.”

**C — Full Christoph spine on `/`**  
News + referrals + competence + essays. Highest conflict; likely template risk; needs photography and real quotes first.

**Recommended default to discuss:** **A**, or a tightly edited **B** (no news/competence/essay blocks until content exists). Photography pipeline remains the blocking dependency for any image-led teaser strip.

---

## Open questions for Martin

1. Is the desire mainly **IA** (work on the first scroll) or **tone** (positioning + availability + referrals)?
2. Any real referrals worth putting on the site (names that can be published)?
3. Is there writing for Essays/Journal, or skip that lane?
4. Should availability / “open for projects” ever appear in chrome or on `/`?
