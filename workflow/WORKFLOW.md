# Workflow and Ticketing System

Objective
Maintain a single source of truth for scope, decisions, and progress while enabling clean handoffs between strategy, design, implementation, and QA.

Tooling
Use a tracker like GitHub Projects, Linear, or Trello. If you want a local flow, use the file-based tickets in tickets/ with tickets/INDEX.md as the source of truth.

Ticket types
- Epic: large outcomes (e.g., Brand Story, Portfolio, Contact).
- Story: user facing slices within an epic.
- Task: implementation or design work required for a story.
- Bug: defects found in QA or review.
- Spike: research to reduce uncertainty.

Required fields
- Title, type, owner, priority, status
- Goal and user story
- Scope and out of scope
- Acceptance criteria (testable)
- Dependencies and risks
- Design links and asset links
- QA notes and test plan references

Status flow
- Intake
- Scoped
- Ready for Design
- In Design
- Design Review
- Ready for Dev
- In Dev
- Code Review
- Ready for QA
- In QA
- Done
- Blocked (interrupt state)

Local ticket flow
1. Strategy agent creates a ticket from tickets/templates and adds it to tickets/INDEX.md.
2. Strategy agent scopes the work and moves status to Ready for Design.
3. Design agent adds comps, tokens, and handoff notes, then moves status to Ready for Dev.
4. Implementation agent builds and notes technical details, then moves status to Ready for QA.
5. QA agent validates, files bug tickets if needed, and moves status to Done.

Handoffs and gates
- Strategy -> Design: brief, sitemap, content outline, success metrics.
- Design -> Implementation: approved comps, tokens, assets, interaction notes.
- Implementation -> QA: preview build, change log, test notes.

Definitions
- Ready for Design: scope clear, assets identified, acceptance criteria written.
- Ready for Dev: design approved, assets available, dependencies resolved.
- Ready for QA: feature complete, code reviewed, test notes attached.
- Done: acceptance criteria met and QA signoff recorded.

Sizing and priority
- The Strategy agent and you set the priority scale for each sprint.
- A ticket can be a tiny fix or a full pipeline item, as long as acceptance criteria are clear.
- Keep the system lightweight; split tickets only when it improves handoffs.

Cadence
- Weekly planning: prioritize backlog and update epics.
- Design review: approve or revise comps before dev starts.
- Dev review: confirm alignment with design and requirements.
- QA review: triage bugs and confirm fixes.
- Daily async updates: each agent posts progress, blockers, and next steps.

Bug severity
- Critical: blocks core flows or site unusable.
- High: major visual or functional break on target devices.
- Medium: noticeable issues with workaround.
- Low: polish or minor copy issues.

Reporting
- Strategy agent maintains a decision log and scope change notes in logs/DECISIONS.md.
- QA agent maintains a defect log and test coverage notes in logs/DEFECTS.md.
