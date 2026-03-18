---
description: Investigate an issue using multiple specialized agents in parallel
---

# Investigate Command

Launch a parallel investigation into an issue.

**Issue:** $ARGUMENTS (describe the issue to investigate)

## Investigation Strategy

This command launches multiple specialized agents in parallel to investigate the issue from different angles:

### Parallel Investigation Teams

1. **Code Analysis**
   - senior-backend-dev: Analyze code flow and logic
   - integration-developer: Check external service communication

2. **Infrastructure Analysis**
   - infrastructure-engineer: Check metrics, logs, and infrastructure
   - database-engineer: Analyze database queries and data

3. **Test Analysis**
   - e2e-test-engineer: Review related test cases
   - test-automation-engineer: Check test coverage

## Expected Output
1. Synthesize findings from all agents
2. Identify root cause(s)
3. Propose solution options
4. Recommend next steps

## Usage
Describe the issue clearly, including:
- What is happening vs what should happen
- When it started (if known)
- Any error messages or logs
- Steps to reproduce (if known)

The Engineering Manager will coordinate the investigation and synthesize findings.
