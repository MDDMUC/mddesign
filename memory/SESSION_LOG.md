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

## 2026-09-08/09 � Hero motion, studio Stations, Space for Curiosity film

**Focus:** Homepage hero entrance + SiteNav align; /studio Stations collage; Space for Curiosity film covers and case page; work ledger order sync.

**Shipped:**
- Homepage: removed hero portrait plate behind Spline; sequenced hero fade/slide (titles ? summary lines ? awards ? delayed SiteNav); summary split into five lines; optical -2px on primary; SiteNav bar uses centered max-width shell (no 100vw scrollbar drift)
- /studio: Stations asymmetric mosaic under first fold (6 sharp teaching/studio masters; soft PDF crops deferred)
- Space for Curiosity: self-hosted muted cover loop on / + /work (public/videos/space-for-curiosity/); case page playable YouTube embed (compact 16:9 in fold) + copy from AF description; CoverYouTube helper retained
- Work order unified: Space for Curiosity ? byte ? Creative Consortium ? USA Ultimate ? CEPRES ? Keller ? YCA ? Planetarie (eaturedWork = workItems.slice(0, 4)); pagers/CASE numbers updated
- Docs: DECISIONS, BRIEF studio inventory, CLAUDE, PROJECT_MEMORY

**Open:** native masters for soft PDF stations/Keller; photography pipeline; referrals/essays; 3D preview fate

**Next:** Visual QA after pull (hero timing, Stations, SFC covers, /work order); photography when ready

## 2026-09-09 — Homepage covers, chrome, mobile hero, resume

**Focus:** Case-study video covers + logos; homepage chrome; mobile portrait hero; Keller City Clash; resume PDF for applications.

**Shipped:**
- Homepage Selected work: all 8 cases; white client marks on video covers (PE Analyzer mark, YCA torch cutout, Creative Consortium, etc.)
- Client marquee: Neurohope, Everhold, Bella smiley, YCA; USA Wrestling mono
- byte case photography from Haimish deck; Keller cover = City Clash (`cover.mp4`/`cover.webm`)
- YCA: Vimeo Impact cover (letterbox zoom, start @45s) + edited mark SVG
- Chrome: hero-absolute Work/Studio/Contact; scroll-up left rail past `#clients`
- Mobile hero: upright portrait field ending above awards; short copy; no hero nav
- Resume at `site/public/documents/MartinDrexler-Resume.pdf`

**Open:** photography pipeline; referrals/essays; native masters; visual QA after deploy

**Next:** Confirm live resume URL + portfolio after Vercel deploy; continue visual QA


## 2026-09-09/10 � Cover logos, YCA timing, Manw� experiments

**Focus:** Homepage Selected work logos; YCA cover start; Byte mark from Haimish PDF; Creative Consortium overlay fix; Manw� homepage band (added then removed); CV Manw� stamp test.

**Shipped:**
- Keller Sports cover overlay: `keller-sports.png` (footer K mark) on City Clash video
- YCA Vimeo cover start `45s` ? `80s` (homepage data + case page)
- Byte: replaced fake Inter SVG with real packaging wordmark PNG extracted from Sonic Cleaner Item PDF (high-res); marquee + cover overlay; cover `scaleFactor: 0.85`
- Creative Consortium overlay: fixed SVG viewBox (paths were outside crop ? invisible); dims 512�159
- Manw� `#manwe` homepage band: built then fully removed per Martin (BRIEF stays Spline-only 3D on `/`)
- High Council preview kept: `/preview/high-council.html` + STLs (noindex)
- Local-only CV test PDF (not committed): Manw� full-height right, pedestal clipped � `site/public/documents/MartinDrexler-Resume-manwe-test.pdf`

**Open:** photography pipeline; referrals/essays; native masters; CV Manw� keep/kill; visual QA after deploy

**Next:** Deploy QA on covers (Byte sharpness, CC visible, Keller K, YCA @1:20); decide Manw�-on-CV; photography when ready


## 2026-11-20 — Studio award index and positioning copy

**Focus:** /studio Index lists award and year only, with a repeated mark per win. Positioning sentence: brand before UI/UX, CEPRES figure, Keller phrasing.

**Shipped:**
- Index: client column removed
- Marks from the homepage awards strip, repeated per win
- Adobe UI and Adobe Xd ribbons from the portfolio PDF, black icons
- Red Dot, German Digital Innovation Award, and CO Cup stay type-only
- Positioning (BRIEF section 3, /studio, homepage, site/data/home.ts): brand, UI/UX, and product systems; CEPRES \+ (CEPRES SuperReturn note, 15 June 2026); Keller Sports as a global e-commerce business

**Open:** source PNGs for Red Dot, German Digital Innovation, CO Cup; photography pipeline

**Next:** Visual QA of the Index on desktop and mobile after deploy

---

## 2026-11-21 — Publish the current Blackwave page at /blackwave

**Focus:** The live `/blackwave` route was still the 15 November vessel study.

**Shipped:** `site/public/blackwave-static/` now matches the application page. `/blackwave` iframes `index.html` instead of the old `explode.html`. Styles `parts.css?v=57`. Script `explode.js?v=144`. The page stays `noindex`. Other uncommitted studio work was left out of this commit.

**Next:** Confirm https://martindrexler.com/blackwave after the Vercel deploy.

---

## 2026-11-21 — Case images committed, day closed

**Focus:** Commit the remaining case-study work and leave the local-only files on disk.

**Shipped:** CEPRES, YCA, and Planetarie case pages now use their image sets. YCA plays Vimeo `444288343` from a poster, with no autoplay until the control. Work covers can play on hover. Soft PDF rasters stay marked as such.

**Left local:** `.tmp-shots/`. `MartinDrexler-Resume-manwe-test.pdf`. `images/clients/_pe-analyzer-src.pdf`. `images/hero/martin-portrait - small.jpg`. `videos/yca/yca-impact.mp4` (about 198MB; the page uses Vimeo).

**Next:** Visual QA of `/studio`, `/work/cepres`, `/work/yca`, and `/work/planetarie` after deploy. Manwë resume test is still undecided. Photography masters are still open.

---

## 2026-11-22 — Hero lockup and studio Index years

**Focus:** Homepage hero title and the `/studio` awards index.

**Shipped:**
- Hero H1 is `Designer`. The subline is `brand · product · systems · UI/UX` (`site/data/home.ts`). `UI/UX` is one item so no middot splits it.
- `/studio` Index no longer prints the year in front of each award. The year strings stay in the awards data. The row grid is name + marks.

**Left local:** `.tmp-shots/`, Manwë resume PDF, `_pe-analyzer-src.pdf`, `martin-portrait - small.jpg`, `videos/yca/`.

**Open:** Browser tab title is still `Designer · UI/UX, brand, product systems`. Martin did not ask to change it.

**Next:** Visual QA of `/` and `/studio` after deploy.

---

## 2026-11-22 — Blackwave visit log

**Focus:** Record who opens `/blackwave` and show it on a private page.

**Shipped:** `track.js` posts an open, each chapter that enters the viewport, and link clicks to `/api/blackwave`. `/blackwave/visits` lists those sessions after the read key. A `?ref=` on `/blackwave` is the name on the row. Storage is the Vercel Upstash store `blackwave-visits` (`KV_REST_API_URL` / `KV_REST_API_TOKEN`). The read key is in Vercel Production and Development, and in local `.env.local`. It is not in the repo.

**Next:** Open `/blackwave/visits` after the deploy. Send marked links as `/blackwave?ref=name`.

---

## 2026-11-22 — Blackwave open email

**Focus:** Clear the twelve sample visits. Email Martin when a real session opens the page.

**Shipped:** Sample events removed from `blackwave-visits`. The first `open` in a session sends one mail to `MAIL_TO` through the existing SMTP settings. Later chapters in that session do not send another mail. A local test open returned in about two seconds with no SMTP error, then that test row was deleted.

**Next:** Watch the inbox after the deploy. The visits page should be empty until a real open.

---

## 2026-11-22 — Session close

**Focus:** Close the day. The feature commits were already on `main`. This entry is the full record.

**Shipped, already pushed:**
- `db4781a` — Homepage hero is `Designer`, with `UI/UX` after `systems` on the subline. `/studio` Index no longer shows award years. Years remain in the data.
- `e292983` — `/blackwave` records an open, each chapter that enters the viewport, and link clicks. `/blackwave/visits` lists those sessions. A plain `/blackwave` link is tracked. `?ref=` only names the row.
- `8c379f8` — The first open in a browser session emails `MAIL_TO` through the existing SMTP settings. Twelve sample sessions were written for a layout check, then deleted.

**Infrastructure, not in git:** Vercel account `hello-6738`, project `mddmucs-projects/mddesign`. Upstash Redis `blackwave-visits` is free, in Frankfurt, with auto-upgrade off. Env on the project: `KV_REST_API_URL`, `KV_REST_API_TOKEN`, and `BLACKWAVE_READ_KEY` for Production and Development. The key is also in `site/.env.local`. Preview does not have the read key.

**Checked:** Local POST stored a visit and the list API returned it. A later open took about two seconds and logged no SMTP error. Those test rows were deleted.

**Left untracked on purpose:** `.tmp-shots/`, Manwë resume PDF, `_pe-analyzer-src.pdf`, `martin-portrait - small.jpg`, `videos/yca/`.

**Open:** Browser tab title still leads with UI/UX. Manwë resume test is undecided. Photography masters are still open. Confirm one real visit after the `8c379f8` deploy.

**Next:** Open `/blackwave` after deploy and confirm the email plus one row on `/blackwave/visits`.
