# Session Log

Append-only. Newest entries at the **bottom**.

---

## 2026-08-31 — Grok install (process only)

**Focus:** Set Grok up as design and development assistant. Investigate what the repo already ships. Install skills + in-repo memory + dual-write. Do not redesign the site.

**Investigated:**
- Live site is past the holding page. Rebuild `3065884` (2026-06-10) shipped six case studies, `/studio`, `/colophon`, NavRail + ⌘K, typographic landing + Spline. Follow-up `fe313a3` gates Spline below 720px.
- `CLAUDE.md` (pre-update) still described WebGL2 fluid landing + four-corner chrome + ChromeStrip. Layout actually mounts `NavRail` + `CommandMenu`. Fluid files and `ChromeStrip` exist unmounted.
- All six `/work/[slug]` pages follow SYSTEM §14.9 structurally. Every hero/vignette is `data-status="placeholder"`. `/work` logo cells are `LOGO`.
- Photography treatment locked (option C, 1px hairline). Image pipeline still open in BRIEF §6.
- Design critic already lived at `.claude/agents/design-critic.md`.
- Root `agents/`, `tickets/`, `workflow/`, `content/` remain unused by instruction.

**Shipped (agent install):**
- `AGENTS.md`
- `memory/SESSION_PROTOCOL.md`, `SESSION_HANDOFF.md`, `SESSION_LOG.md`, `PROJECT_MEMORY.md`
- Skills `/mddesign`, `/mddesign-design`, `/mddesign-case-study`, `/mddesign-code`, `/mddesign-critique`
- `.grok/agents/design-critic.md`
- `CLAUDE.md` updated to match the running site
- Dual-write: workspace `mddesign-fed7997e` + global MEMORY.md project block
- `logs/DECISIONS.md` line for the Grok process install

**Open:**
- Case-study photography + `/work` logos
- BRIEF/SYSTEM/colophon drift vs live chrome
- Unmounted FluidCanvas / ChromeStrip (leave until asked)

**Next:** Wait for Martin’s first task.

---

## 2026-08-31 — Composition pass (lane 2) locked

**Focus:** Survey → lane 2 implementation → landing lockup (MARTIN DREXLER / Design Studio) → smooth line-rise → lock, commit, push.

**Shipped:**
- `/` title card: cities, MARTIN DREXLER (caps/bold) + Design Studio (title case), Work link, Spline. No bio, no awards strip.
- Lockup reveal: line-rise at final weight (`--ease-out`). No `wght` 200→700 morph.
- `/work` display-scale ledger, dates printed, no LOGO cells.
- Six type covers (76→7 / €100m / Explore-Discover-Understand / CBDa pack / kit / letterbox).
- Typesetter NavRail (44px Plex Mono). Contact H1 = email.
- Grok process files (`AGENTS.md`, `.grok/skills/`, `memory/`).

**Open:** photography pipeline; Studio still old 7/5; Planetarie `\u2019` glitch.

**Next:** Images.

## 2026-09-04 � Homepage spine (christoph-gey.de structure)

**Focus:** Emulate classmate site structure on `/` � not the Divi look.

**Shipped:**
- Long `/`: hero (Spline contained) ? six case teasers ? news ? competence ? connect ? footer map
- Referrals/essays omitted until real content (critic + BRIEF)
- `site/data/work.ts` + `site/data/home.ts`; `/work` wired to shared data
- BRIEF / DECISIONS / CLAUDE / research note updated
- `npm run typecheck` + `npm run build` clean; HTTP smoke on /, /work, /studio, /contact, /work/cepres

**Open:** photography; referral quotes; essays; interactive browser/mobile pass

**Next:** Martin supplies quotes / images, or photography pipeline lock

## 2026-09-05 � Homepage spine, chrome, cases

**Focus:** Emulate christoph-gey.de structure; polish hero/chrome; expand work.

**Shipped:**
- Long `/`: hero (Spline full-viewport) + awards + client logo marquee + work grid + news + competence + connect
- Retired NavRail bar; `SiteNav` floating Work/Studio/Contact (hide on scroll down, pill on scroll up)
- Client logos from F:\WORK + Wikimedia; Planetarie black PNG; USA Ultimate SVG xxl
- Cases reordered: byte, Creative Consortium, USA Ultimate, Space for Curiosity, then CEPRES�Planetarie
- USA Ultimate case + Vimeo cover `1151639550`; CoverVimeo component; 4:5 cover frames
- Spline watermark disabled via runtime; watermark CSS insufficient (WebGL overlay)
- Docs: BRIEF, DECISIONS, CLAUDE, research note, memory

**Open:** photography pipeline; referrals; essays; mobile visual pass with Martin

**Next:** pull + visual QA; photography; optional self-host USAU video

## 2026-09-07/08 � Keller images, chrome rails, studio portrait, 3D preview

**Focus:** Portfolio PDF ? Keller case; SiteNav rails; /work cover column; studio still; experimental 3D wire preview.

**Shipped:**
- Keller Sports: CoverVideo hero + PDF-extracted vignette images (soft res); case CSS live vignette layout
- SiteNav: left vertical rail on case studies + /studio; top-right on /work index; bar on / + /contact (aligned to pad-page)
- /work: 16:9 landscape covers (video/contain + type fallback); planetarie lowercase
- /studio: white-bg upright still (`martin-portrait-upright.jpg`); Spline portrait removed; left rail
- Homepage: ReturnToTop pill; awards copy tweak; optional portrait plate behind Spline (separate z-layer; no Spline blend hacks)
- Preview: `/preview/martin-3d.html` coarse wire + photo wrap (noindex)
- Docs: CLAUDE, DECISIONS, memory handoff

**Open:** native photo masters for Keller; 3D UV/zoom polish; homepage portrait plate keep/kill; photography pipeline; referrals

**Next:** Martin visual QA after pull; photography masters; decide 3D preview fate
