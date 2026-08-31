---
name: mddesign-critique
description: >
  Run the design-critic pass on a proposed or shipped visual change. Use when
  Martin asks for a design review, after finishing a page/hero/type/motion/
  layout change, or runs /mddesign-critique. Catches generic-AI-aesthetic
  regressions before claiming done.
---

# Design critique

The critic does not write code. You spawn it, then you fix what it rejects.

## When to run

**Do:** new page, hero, type-system change, motion, layout, case-study template, chrome.

**Skip:** copy typos, dependency bumps, env, one-line bugfixes with no visual delta.

## How to run

Spawn a `design-critic` subagent. Point it at:

- The files or git diff that changed
- The live route(s) if a dev server is up (`site/` → `npm run dev`, port 3000)
- Instruction: read `design/BRIEF.md`, `CLAUDE.md`, and `site/styles/tokens.css` before judging. Critique against the brief, not taste. Use the report format in `.grok/agents/design-critic.md`.

Do not ask the critic to implement fixes.

## After the report

1. Fix every **Reject unless fixed** item, or get Martin's explicit waiver (then log it in `logs/DECISIONS.md`).
2. Fix **Should fix** unless it contradicts a lock — if it does, say so.
3. Park **Note for later** on the handoff; do not expand scope.
4. If **Gaps in the brief** appear, propose the lock to Martin before inventing a one-off.
5. Re-verify in the browser after fixes. Re-run the critic only if the visual change was large.

## Verdicts

| Critic verdict | You do |
|----------------|--------|
| ship | Verify in browser, then claim done |
| fix-then-ship | Fix, re-verify, then claim done |
| rework | Do not ship. Return to `/mddesign-design` with the reject list |

A long review of a small change is padding — if the critic ramble, extract the rejects and ignore the rest.
