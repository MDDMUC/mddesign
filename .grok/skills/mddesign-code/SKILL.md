---
name: mddesign-code
description: >
  Make a scoped code change in the Next.js portfolio without redesigning it.
  Use when Martin asks for a bugfix, form, build, performance, or
  /mddesign-code. Visual composition belongs on /mddesign-design; case-study
  pages on /mddesign-case-study.
---

# Scoped coding — mddesign

Smallest diff that matches neighboring files. The architecture is established; extend it.

## Before the first edit

Read, in this order:

1. `CLAUDE.md` — routes, stack, confirm-gates
2. The files you will change, plus one neighboring example of the same pattern
3. `site/styles/tokens.css` if the change touches colour, type, space, or motion

If the task is a new page, a layout, or a visual restyle, stop and use `/mddesign-design`.
If it is a case-study slug, stop and use `/mddesign-case-study`.

## How to write here

- **App Router** under `site/app/`. Client components only when they need state, effects, or the browser.
- **CSS Modules** next to the component. Tokens from `tokens.css` — promote one-off values up, do not inline a second palette.
- **Type:** Inter variable via `--font-sans-loaded` / `--font-display` / `--font-body`. Plex Mono via `--font-data`. OpenType via `--ot-*` tokens.
- **Motion:** durations 80/160/240/400ms (plus reveal tokens). Never invent a new duration without SYSTEM.md. Respect `prefers-reduced-motion`.
- **Loading language:** mono `[STATE]` labels. No spinners.
- **Images:** explicit width/height; lazy except LCP.
- **Comments:** short, factual, only for non-obvious constraints.

## Do not

- Add Tailwind, a UI kit, Framer Motion, Three.js, or GSAP unless Martin confirms
- Re-mount `ChromeStrip` or the fluid sim "because SYSTEM.md still lists them"
- Delete unmounted `ChromeStrip` / `FluidCanvas` without asking
- Populate root `agents/`, `tickets/`, `workflow/`, `content/`
- Touch `docs/archive/`
- Commit `.env.local` or SMTP secrets
- Push `main` unless asked (Vercel deploys https://martindrexler.com)

## Contact form

`site/app/contact/page.tsx` POSTs to `site/app/api/contact/route.ts` (nodemailer). Honeypot field is `company_url`. Env: `SMTP_HOST/PORT/USER/PASS`, `MAIL_FROM`, `MAIL_TO`. Do not reintroduce `mailto:` as the primary path.

## Spline

`SplineBackground` (`/`) and `SplinePortrait` (`/studio`) skip mount at `max-width: 720px`. Do not remove that gate. Dynamic import, `ssr: false`.

## Validate

From `site/`:

```bash
npm run typecheck
```

Route, API, or visual changes also:

```bash
npm run build
```

UI: exercise the feature in the browser (desktop + mobile). Visit every route that shares the component or state you touched.

## Ship shape

- Smallest diff. Match the file's naming and comment style.
- Prefer a branch unless the change is a one-file copy/CSS fix.
- If the running site grew, update `CLAUDE.md` in the same change.
- Session log at end: outcomes, files, validation, open items.
