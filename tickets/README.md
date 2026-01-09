# Ticketing System

Purpose
A lightweight, file-based ticketing system to move work from strategy to design to implementation to QA.

ID and naming
- Format: TKT-0001
- File name: tickets/<type>/TKT-0001-short-title.md
- Types: epic, story, task, bug, spike

Priority and sizing
- Priority scale is chosen per sprint by you and the Strategy agent.
- Ticket size is flexible: a ticket can be a tiny fix or a full pipeline item.
- Keep it simple: if a ticket feels too large, split only when it helps handoffs.

How it works
1. Strategy agent creates a ticket from a template in tickets/templates.
2. Add the ticket to tickets/INDEX.md.
3. Set status to Scoped or Ready for Design when the brief and scope are complete.
4. Design agent adds comps, tokens, and handoff notes, then updates status to Ready for Dev.
5. Implementation agent builds, notes technical details, then updates status to Ready for QA.
6. QA agent validates, files bugs if needed, and moves to Done when criteria pass.

Status updates
- Update the status field inside the ticket.
- Keep tickets/INDEX.md in sync with the latest status and owner.

Handoff rules
- Each agent fills the Handoff notes section before advancing status.
- If blocked, set status to Blocked and describe the blocker clearly.

Logs
- Record key decisions in logs/DECISIONS.md.
- Track summarized defects in logs/DEFECTS.md (bugs still get their own tickets).
