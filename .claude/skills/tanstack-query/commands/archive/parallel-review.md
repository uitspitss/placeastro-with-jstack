---
description: Run parallel code review with multiple specialists (code-reviewer + security-tester)
---

# Parallel Review Command

Launch **code-reviewer** and **security-tester** in parallel for comprehensive review.

## Task: $ARGUMENTS

Execute the following in parallel:

### 1. Code Quality Review (code-reviewer agent)
```
Prompt: "Review recent code changes for quality, patterns, and maintainability.
Run git diff to see changes. Focus on:
- Code quality and readability
- Pattern adherence
- Error handling
- Test coverage gaps

Provide structured review with severity levels."
```

### 2. Security Assessment (security-tester agent)
```
Prompt: "Conduct security assessment of recent code changes.
Run git diff to see changes. Focus on:
- OWASP Top 10 vulnerabilities
- Input validation
- Authentication/authorization
- Sensitive data handling

Provide security assessment report."
```

## Expected Output

After both agents complete, synthesize:

```markdown
## Combined Review Results

### Code Quality
[Summary from code-reviewer]
- Critical: [count]
- High: [count]
- Medium: [count]

### Security
[Summary from security-tester]
- Critical: [count]
- High: [count]
- Medium: [count]

### Verdict
[APPROVED / NEEDS CHANGES / BLOCKED]

### Action Items (Priority Order)
1. [Most critical item]
2. [Second item]
...
```

## Usage
```
/parallel-review              # Review HEAD~1
/parallel-review HEAD~5       # Review last 5 commits
/parallel-review feature/x    # Review specific branch
```
