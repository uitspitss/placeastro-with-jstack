---
description: Perform code review on recent changes or specified PR
---

# Code Review Command

Perform a thorough code review.

**Target:** $ARGUMENTS (PR number, branch name, or "staged" for staged changes)

## Review Process

1. **Gather Changes**
   - If PR number: Fetch PR diff from GitHub
   - If branch: Compare against main/master
   - If "staged": Review staged git changes

2. **Review Checklist**
   - Code style and formatting (Kotlin guidelines)
   - Best practices (no `!!`, proper null handling)
   - Architecture and design patterns
   - Error handling and edge cases
   - Test coverage
   - Security considerations
   - Performance implications
   - Documentation completeness

3. **Provide Feedback**
   - Categorize by severity (critical, suggestion, nitpick)
   - Include line references
   - Suggest specific improvements
   - Acknowledge good patterns

Use the code-reviewer agent for in-depth reviews.
