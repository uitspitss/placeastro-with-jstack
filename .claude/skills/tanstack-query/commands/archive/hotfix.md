---
description: Emergency hotfix workflow for production issues
---

# Hotfix Command

Emergency hotfix workflow for production issues.

**Issue:** $ARGUMENTS (description of the issue or ticket number)

## Hotfix Process

### 1. Assessment (Immediate)
- Understand the issue severity
- Identify affected components
- Determine root cause
- Assess blast radius

### 2. Quick Fix Strategy
- Minimum viable fix (not perfect, just working)
- Rollback plan ready
- Testing approach (smoke tests)

### 3. Implementation
- Create hotfix branch from production
- Make minimal, focused changes
- Add regression test
- Code review (expedited)

### 4. Deployment
- Deploy to staging first
- Quick verification
- Deploy to production
- Monitor closely for 30 minutes

### 5. Follow-up
- Document the incident
- Create follow-up tickets for proper fix
- Post-mortem if needed

## Emergency Contacts
- Use release-engineer for deployment
- Use infrastructure-engineer for metrics/logs
- Use senior-backend-dev for complex issues

**CRITICAL**: Focus on stability, not perfection. We can refactor later.
