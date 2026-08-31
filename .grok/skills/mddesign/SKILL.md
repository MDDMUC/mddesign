---
name: mddesign
description: >
  Orient and route work on Martin Drexler's portfolio site. Use when Martin
  asks for project status, what to do next, onboarding, session start, or
  runs /mddesign. Reads protocol, handoff, and memory; points to
  /mddesign-design, /mddesign-case-study, /mddesign-code, or /mddesign-critique.
---

# /mddesign — Project orient

## Steps

1. Read, in order:
   - `memory/SESSION_PROTOCOL.md`
   - last 3–5 entries of `memory/SESSION_LOG.md`
   - `memory/SESSION_HANDOFF.md`
   - `memory/PROJECT_MEMORY.md`
   - `logs/DECISIONS.md` (locks only — do not re-argue)
2. `memory_search` for "mddesign" if memory tools are available.
3. `git status -sb` and note uncommitted work.
4. Summarize in chat (short):
   - Current focus
   - Live vs spec drift that would bite this session
   - Exact next action (from handoff, unless Martin already named a task)
5. Route:
   - New page / section / type / motion / chrome → `/mddesign-design`
   - Case-study page, vignette, photography → `/mddesign-case-study`
   - Bug, form, build, scoped code → `/mddesign-code`
   - "review this" / design critique → `/mddesign-critique`
6. If the user is ending the session, run the Session END checklist from `SESSION_PROTOCOL.md`.

## Do not

- Skip the handoff files
- Change application code from this skill — only orient and route
- Start `/work/archive`, `/journal`, or a site rebuild unprompted
- Treat `design/BRIEF.md` §7 inventory or SYSTEM.md §14 chrome as live without checking `site/app/layout.tsx` and `site/app/page.tsx`
