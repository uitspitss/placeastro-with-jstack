---
description: Fast 3-agent workflow for quick fixes and small changes (analyst → developer → qa)
---

# Quick Fix Command

**Lightweight 3-agent workflow** for small changes. Faster than full team.

## Task: $ARGUMENTS

## Workflow

```
ANALYZE → IMPLEMENT → VERIFY
   │          │          │
analyst   developer     qa
(quick)    (focused)  (fast)
```

## Execution

### Phase 1: Quick Analysis (analyst)
```
Prompt: "Quick analysis for: $ARGUMENTS

Provide brief output:
- What needs to change (1-3 points)
- Files likely affected
- Any gotchas to watch for

Keep it under 200 words. This is a quick fix, not a feature."
```

### Phase 2: Implementation (developer)
```
Prompt: "Implement the fix based on analyst notes.

Guidelines:
- Minimal changes only
- Follow existing patterns
- Commit when done

This is a quick fix - don't over-engineer."
```

### Phase 3: Quick Verify (qa)
```
Prompt: "Quick verification:
1. Run relevant tests
2. Check the fix works
3. Spot check for obvious issues

Keep review brief - this is a quick fix.

Output: APPROVED or NEEDS WORK with specific issues."
```

## When to Use

✅ **Use Quick Fix for:**
- Bug fixes
- Small config changes
- Minor feature tweaks
- Documentation updates
- Dependency updates

❌ **Use Full Team (/team) for:**
- New features
- API changes
- Database migrations
- Architecture changes

## Output

```markdown
## Quick Fix Complete

**Task**: [what was fixed]
**Files Changed**: [list]
**Tests**: [pass/fail]
**Status**: ✅ DONE / ⚠️ NEEDS ATTENTION

**Changes Summary**:
[1-2 sentences]
```
