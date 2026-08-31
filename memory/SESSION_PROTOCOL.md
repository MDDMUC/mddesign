# Session Protocol — READ FIRST

> **Rule #1 for every assistant, every session.** Read this file before any mddesign work.
> Do not skip even if the user jumps straight into a task.

---

## 1. Session START (mandatory read order)

Read these **in order** before writing, designing, or editing:

| Step | File | Why |
|------|------|-----|
| 1 | **This file** (`memory/SESSION_PROTOCOL.md`) | How we work |
| 2 | [`SESSION_LOG.md`](SESSION_LOG.md) | Recent sessions — last 3–5 entries |
| 3 | [`SESSION_HANDOFF.md`](SESSION_HANDOFF.md) | Where we left off |
| 4 | [`PROJECT_MEMORY.md`](PROJECT_MEMORY.md) | Durable project state |
| 5 | [`../logs/DECISIONS.md`](../logs/DECISIONS.md) | Locks — never contradict |

**Then by task type:**

| Task | Also read |
|------|-----------|
| Visual / layout / type / motion | `design/BRIEF.md` §§4–5 · `design/SYSTEM.md` · `site/styles/tokens.css` |
| Case study | `design/SYSTEM.md` §14.9 · `site/components/CaseStudy/CaseStudy.module.css` · a shipped sibling page |
| Code / bug / form / build | `CLAUDE.md` · the files you will change + one neighbor |
| Critique | BRIEF + tokens + the changed files (or live route) |
| Architecture / chrome / routes | `CLAUDE.md` then live `site/app/layout.tsx` — docs can lag the site |

**Then load skill:** `/mddesign`, `/mddesign-design`, `/mddesign-case-study`, `/mddesign-code`, or `/mddesign-critique`.

Also `memory_search` for "mddesign" if memory tools are available.

---

## 2. Current project state (pointers)

Do not guess — read live files:

| Area | Status file |
|------|-------------|
| Open focus | `SESSION_HANDOFF.md` |
| Durable facts | `PROJECT_MEMORY.md` |
| Locks | `logs/DECISIONS.md` |
| Design north-star | `design/BRIEF.md` |
| Design system spec | `design/SYSTEM.md` |
| Runtime tokens | `site/styles/tokens.css` |
| Running-site charter | `CLAUDE.md` (update if it lags the site) |
| Uncommitted work | `git status` |

---

## 3. How we do things

### Design loop

```
orient → frame the job → check locks → compose → implement → critique → verify → record
```

- Brief over taste. Uncovered decisions get proposed in writing, then locked in BRIEF + `logs/DECISIONS.md` **before** they ship.
- Compose with type, measure, grid, and whitespace — not with cards and kits.
- Smallest diff. Incremental expansion. No whole-site rebuilds.
- Spawn `design-critic` after meaningful visual work. Copy edits and dependency bumps skip the critic.

### Coding

- Next.js 16 App Router, React 19, TypeScript, CSS Modules.
- Commands from `site/`. No ESLint; `tsc` + `next build` matter.
- Confirm before new pages, type-system changes, dependencies, `docs/archive/`, or locked-move changes.
- UI: verify in the browser, desktop + mobile, related routes too.

### Memory dual-write

When something durable changes (routes, chrome, locks, open work, photography rules):

1. Update repo memory (`PROJECT_MEMORY.md`; `logs/DECISIONS.md` if a lock)
2. Update Grok workspace memory (`~/.grok/memory/mddesign-*/MEMORY.md`) if tools are available
3. Mention it in the session-end log

---

## 4. Session END (mandatory)

Before closing or switching projects:

1. **Append** one entry to [`SESSION_LOG.md`](SESSION_LOG.md): date, focus, what shipped, open questions, next action
2. **Rewrite** [`SESSION_HANDOFF.md`](SESSION_HANDOFF.md) so the next session can start cold
3. Update [`PROJECT_MEMORY.md`](PROJECT_MEMORY.md) if durable state changed
4. If Grok memory is on: ensure critical facts are searchable in workspace MEMORY.md

Do **not** leave progress only in chat.

---

## 5. Safety and craft

- Never fabricate clients, awards, metrics, or roles. NDA work is named, not shown.
- `.env.local` is gitignored. Never commit SMTP secrets.
- `prefers-reduced-motion` is first-class. WCAG AA floor.
- The site is the portfolio. "Does it render" is not the bar. "Would I hire the person who designed this?" is.
