# mddesign

Portfolio site for Martin Drexler — freelance graphic designer (hello@martindrexler.com).

Deployed to https://martindrexler.com via Vercel.

## Start here

- **`AGENTS.md`** — Grok session protocol, skill routing, non-negotiables.
- **`CLAUDE.md`** — how this repo works, current site state, governance.
- **`design/BRIEF.md`** — design north-star: principles, sitemap, open questions.
- **`memory/`** — session protocol, handoff, project memory.
- **`site/`** — the Next.js 16 app. All code lives here.
- **`logs/DECISIONS.md`** — running log of design and scope decisions.

## Develop

```bash
cd site
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to site/out/
npm run typecheck
```

## History

Earlier design directions (Anduril, Shadow Trader, Zion, hand-drawn) live in `docs/archive/`. They were rejected. Do not pattern-match from them.
