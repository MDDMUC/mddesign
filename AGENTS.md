# mddesign — Agent Instructions

Portfolio site for **Martin Drexler**, freelance graphic designer (`hello@martindrexler.com`). Ambition: a world-class design-focused website. The site itself is the strongest portfolio piece.

Grok is the design and development assistant in this repo. Visual direction is owned by [`design/BRIEF.md`](design/BRIEF.md). Tokens live in [`site/styles/tokens.css`](site/styles/tokens.css). Running-site charter: [`CLAUDE.md`](CLAUDE.md).

Hub for current state: [`memory/PROJECT_MEMORY.md`](memory/PROJECT_MEMORY.md). Do **not** add a root `PROJECT.md` — CLAUDE.md forbids extra root-level markdown except operational files.

---

## Rule #1 — Session protocol (never skip)

**Before any work:** read [`memory/SESSION_PROTOCOL.md`](memory/SESSION_PROTOCOL.md) and follow the Session START checklist.

**Before ending a session:** follow the Session END checklist (append `SESSION_LOG.md`, rewrite `SESSION_HANDOFF.md`, dual-write durable facts).

---

## Session start (read order)

1. [`memory/SESSION_PROTOCOL.md`](memory/SESSION_PROTOCOL.md)
2. [`memory/SESSION_LOG.md`](memory/SESSION_LOG.md) — last 3–5 entries
3. [`memory/SESSION_HANDOFF.md`](memory/SESSION_HANDOFF.md)
4. [`memory/PROJECT_MEMORY.md`](memory/PROJECT_MEMORY.md)
5. [`logs/DECISIONS.md`](logs/DECISIONS.md) — locks; never contradict
6. [`CLAUDE.md`](CLAUDE.md) if the task is architecture / routes / chrome
7. [`design/BRIEF.md`](design/BRIEF.md) §§4–5 **before any visual work**
8. Task-specific skill from the table below

Also `memory_search` for "mddesign" when memory tools are available.

---

## Task routing

| Task | Skill | Primary files |
|------|-------|----------------|
| Orient / status / "what next" | `/mddesign` | handoff, PROJECT_MEMORY, CLAUDE.md |
| New page, section, layout, type, motion, chrome | `/mddesign-design` | BRIEF, SYSTEM.md, `site/styles/tokens.css` |
| Case-study page or vignette | `/mddesign-case-study` | SYSTEM.md §14.9, `CaseStudy.module.css` |
| Scoped code / bugfix / form / build | `/mddesign-code` | `site/` neighboring files |
| Design review | `/mddesign-critique` | BRIEF + tokens + the change |

---

## Non-negotiable rules

1. **Brief over taste.** `design/BRIEF.md` is the north-star. If a visual decision isn't covered, flag it — do not guess. Record the call in BRIEF (or §6) and `logs/DECISIONS.md`.
2. **Tokens over one-offs.** New values go in `site/styles/tokens.css`. CSS Modules for components. No Tailwind, no component library, no Tamagui.
3. **Type is Inter + IBM Plex Mono.** Locked. Generic "avoid Inter" frontend advice does **not** apply here.
4. **The work is the hero.** Case studies are evidence, not marketing. No "passionate / crafted / bespoke."
5. **If it looks like a template, delete it.** Bootstrap, Tailwind UI, generic agency landing, glass cards, three-column icon grids — instant reject.
6. **Expansion is incremental.** Do not rebuild the whole site in one pass.
7. **Confirm with Martin** before: a new page or major section; type-system change; a new library/dependency; touching `docs/archive/`; changing a locked signature move.
8. **NDA blocklist:** D&AD Yellow Pencil project, BMW, Red Bull — name in `/studio` prose only; no case studies.
9. **Do not populate** root `agents/`, `tickets/`, `workflow/`, `content/` without explicit direction.
10. **Do not pattern-match** `docs/archive/` (Anduril, Shadow Trader, Zion-era particles, hand-drawn). Frozen history.
11. Dual-write durable facts to in-repo `memory/` and Grok workspace memory.

---

## After making changes

- Visual work: spawn `design-critic` (see `/mddesign-critique`) before claiming done.
- `cd site && npm run typecheck`. Route or visual changes also `npm run build`.
- UI: verify in the browser (desktop + mobile). Related routes too. A screenshot is not verification.
- If the running site grew, update `CLAUDE.md` in the same change.
- **At session end:** append `SESSION_LOG.md` + rewrite `SESSION_HANDOFF.md`.

---

## Commands (from `site/`)

```bash
npm run dev        # port 3000
npm run build
npm run typecheck  # tsc --noEmit
npm run start
```

No ESLint. `tsc` + `next build` are the checks that matter. Production: https://martindrexler.com (Vercel, project root = `site/`). Do not push `main` unless asked.

---

## Grok memory

Cross-session memory is enabled via `~/.grok/config.toml` `[memory] enabled = true`.

In-repo `memory/*` is the human-readable source of truth so progress survives a Grok memory clear. Write durable facts to both:

- Repo: `memory/PROJECT_MEMORY.md`, `SESSION_HANDOFF.md`; locks in `logs/DECISIONS.md`
- Grok workspace: `~/.grok/memory/mddesign-*/MEMORY.md`
