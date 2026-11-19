---
name: cloudemem
description: Persistent cross-session agent memory and context system. Retains project architecture, design choices, user preferences, and previous solutions across conversations. Use when user asks "did we solve this?", "remember X", or needs historical session context.
---

# ClaudeMem - Persistent Agent Memory

ClaudeMem provides long-term context retention and memory indexing across sessions.

## Commands & Workflows

1. **`mem-search`**: Search historical observations, decisions, and past tool calls.
   - `search(query)`: Search indexed memory with relevance scores.
   - `timeline(anchor=ID)`: Retrieve surrounding session context.
   - `get_observations(ids=[...])`: Read synthesized knowledge summaries.
2. **Session Context Injection**:
   - Maintains architecture decisions.
   - Remembers user constraints, style guidelines, and established patterns.
   - Avoids repetitive onboarding across chat resets.
