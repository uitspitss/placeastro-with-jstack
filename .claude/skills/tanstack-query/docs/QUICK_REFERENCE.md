# Multi-Agent Team - Quick Reference

## 🚀 Quick Start

### Activate Team Mode
```
/team Add feature X              → Full team workflow with health checks
```

### Simple Commands
```
"Add feature X"                    → Manager handles everything
"Use tech-researcher to find..."   → Launch specific agent
"Run in parallel: ..."             → Explicit parallel execution
```

### Slash Commands
```
/deploy staging              → Deploy to staging
/test all                    → Run all tests
/review staged               → Review staged changes
/security-audit              → Full security audit
/hotfix <issue>              → Emergency fix workflow
/build docker                → Build Docker image
/investigate <issue>         → Parallel investigation
/new-feature <description>   → Full feature workflow
```

---

## ⚠️ Long-Running Agent Best Practices

Based on Anthropic's research on effective agent harnesses:

### Anti-Patterns to Avoid
| Problem | Symptom | Prevention |
|---------|---------|------------|
| **Over-ambition** | Tries to implement entire project at once | ONE feature per cycle |
| **Premature completion** | Marks done without tests passing | VERIFY phase mandatory |
| **Environmental degradation** | Messy code, unclear progress | Git commits + state file |
| **Skipping health checks** | Starts work with failing tests | Run tests FIRST |

### Session Initialization Protocol
Every session MUST start with:
```
1. git status && git log --oneline -5
2. Run baseline tests (npm test / ./gradlew test)
3. Check for .local/team-state.md (resume if exists)
4. If tests fail → Fix before new work
```

### Feature List Tracking
For complex projects, use `.local/features.json`:
- All features start as `"status": "failing"`
- Only mark `"passing"` after QA verification
- One feature per execution cycle
- Never delete, only update status

---

## 👥 Team Roster (21 Agents)

### Development (7)
| Agent | Model | Role |
|-------|-------|------|
| `senior-backend-dev` | **Opus** | Architecture, complex features |
| `backend-developer` | Sonnet | Standard implementation |
| `api-specialist` | Sonnet | REST/gRPC APIs |
| `database-engineer` | Sonnet | DB schema, migrations, JOOQ |
| `integration-developer` | Sonnet | External services (gRPC) |
| `frontend-developer` | Sonnet | Next.js, React, TypeScript |
| `ui-ux-designer` | Sonnet | Design systems, accessibility |

### QA (5)
| Agent | Model | Role |
|-------|-------|------|
| `senior-qa-engineer` | **Opus** | Test strategy |
| `test-automation-engineer` | Sonnet | Unit/integration tests |
| `e2e-test-engineer` | Sonnet | E2E tests, Playwright |
| `security-tester` | **Opus** | Security, vulnerabilities |
| `code-reviewer` | Sonnet | Code quality review |

### DevOps (5)
| Agent | Model | Role |
|-------|-------|------|
| `infrastructure-engineer` | **Opus** | Docker, observability |
| `kubernetes-specialist` | Sonnet | K8s, Helm |
| `ci-cd-engineer` | Sonnet | Gradle, pipelines |
| `release-engineer` | Sonnet | Deployments, rollbacks |
| `performance-engineer` | Sonnet | Load testing, profiling |

### Product/Research (4)
| Agent | Model | Role |
|-------|-------|------|
| `tech-researcher` | Sonnet | Research, best practices |
| `documentation-specialist` | Sonnet | Documentation |
| `requirements-analyst` | Sonnet | Requirements, edge cases |
| `multi-repo-coordinator` | Sonnet | Cross-repo changes |

---

## 💡 Common Use Cases

### Feature Development
```
/new-feature Add user authentication

→ Manager coordinates:
  1. requirements-analyst + tech-researcher (parallel)
  2. Design architecture
  3. Dev team implements (parallel)
  4. QA tests (parallel)
  5. DevOps deploys
  6. documentation-specialist documents
```

### Bug Fix
```
/investigate Environments stuck in CREATING

→ Manager coordinates:
  1. Investigate (parallel: senior-backend-dev, integration-developer)
  2. Fix bug
  3. Add test
  4. Review & deploy
```

### Code Exploration
```
"How does async task processing work?"

→ Manager launches:
  - senior-backend-dev: Explore code
  - tech-researcher: Research patterns
  - Synthesize explanation
```

### Security Audit
```
/security-audit full

→ Manager launches (parallel):
  - security-tester: OWASP Top 10
  - code-reviewer: Security review
  - kubernetes-specialist: K8s security
  - Compile report & remediate
```

### Cross-Repo Feature
```
"Add API change that affects orca-compute"

→ Manager coordinates:
  - multi-repo-coordinator: Plan changes
  - api-specialist: Design contracts
  - release-engineer: Coordinate deployment
```

---

## 🎯 Model Strategy

**Opus (4 agents)** - Complex reasoning:
- senior-backend-dev
- senior-qa-engineer
- infrastructure-engineer
- security-tester

**Sonnet (17 agents)** - Fast, efficient:
- All other agents

**Savings**: 60-80% cost reduction vs all-Opus

---

## 📋 Workflow Template

```
0. 🔍 HEALTH CHECK (MANDATORY)
   - Run git status & git log
   - Run baseline tests
   - Check for existing state file
   - If tests fail → FIX FIRST

1. 📥 RECEIVE REQUEST
   User describes desired outcome

2. 🧠 ANALYZE & PLAN
   Manager: Break into SINGLE feature per cycle
   Create .local/features.json
   Create .local/team-state.md

3. 🔍 DISCOVER (analyst agent)
   - requirements-analyst: Clarify requirements
   - Return structured requirements

4. 📋 DESIGN (architect agent)
   - architect: Technical design
   - Return implementation steps

5. 🛠️ DO (developer agent)
   - developer: Implement ONE feature
   - Git commit after each change
   - Run unit tests

6. 🧪 VERIFY (qa agent) - MANDATORY
   - qa: Unit tests + E2E tests
   - code-reviewer: Security review
   - Only mark passing if ALL tests pass

7. 📊 UPDATE TRACKING
   - Update features.json status
   - Create summary commit
   - If more features → goto step 2

8. ✅ COMPLETE
   Manager: All features verified
```

---

## 🔧 Commands Reference

### Slash Commands
| Command | Args | Description |
|---------|------|-------------|
| `/team` | task description | **Primary**: Full team workflow with health checks |
| `/deploy` | staging/prod | Deploy application |
| `/test` | unit/integration/e2e/all | Run tests |
| `/review` | PR#/branch/staged | Code review |
| `/security-audit` | full/deps/code | Security scan |
| `/hotfix` | issue description | Emergency fix |
| `/build` | quick/full/docker | Build project |
| `/investigate` | issue description | Parallel investigation |
| `/new-feature` | feature description | Full feature workflow |

### Manager Instructions
```
"Explain your coordination strategy"
"Show team structure"
"What's the best approach for X?"
"Use [agent] to do Y"
"Run these agents in parallel: ..."
```

---

## 📁 File Locations

```
~/.local/
├── settings.json              # Global settings
├── agents/                    # 21 agent definitions
│   ├── senior-backend-dev.md
│   ├── frontend-developer.md  ← NEW
│   ├── ui-ux-designer.md      ← NEW
│   ├── performance-engineer.md ← NEW
│   ├── multi-repo-coordinator.md ← NEW
│   └── ...
├── commands/                  # Slash commands
│   ├── deploy.md
│   ├── test.md
│   ├── review.md
│   └── ...
├── AGENT_TEAM.md             # Full documentation
└── QUICK_REFERENCE.md        # This file
```

---

## 🔌 MCP Servers (Recommended)

```bash
# GitHub (PRs, issues, CI)
ai mcp add github --scope user

# Kubernetes (cluster management)
ai mcp add kubernetes -- npx mcp-server-kubernetes

# Docker (container operations)
ai mcp add docker
```

---

## 💪 Power Moves

### Maximum Parallelism
```
"Coordinate parallel investigation of:
1. Authentication implementation
2. Database schema
3. API design
4. Security considerations"

→ Launches 4+ agents simultaneously
```

### Full Feature Pipeline
```
/new-feature Implement rate limiting

→ Manager orchestrates entire pipeline:
   Research → Design → Implement → Test → Deploy → Document
```

### Emergency Response
```
/hotfix Production environments stuck

→ Immediate parallel investigation + quick fix + deploy
```

### Cross-Repo Coordination
```
"Add API change affecting all services"

→ multi-repo-coordinator plans, Dev implements, Release deploys in order
```

---

## 🎓 Key Settings

```json
{
  "alwaysThinkingEnabled": true,    // Extended reasoning
  "model": "opus",                   // Manager uses Opus
  "hooks": { ... }                   // Post-edit logging
}
```

---

## 📁 State Files

| File | Purpose |
|------|---------|
| `.local/team-state.md` | Current phase, progress, recovery info |
| `.local/features.json` | Feature list with status tracking |

---

## 🔑 10 Hard Rules

1. **ONE feature per cycle** - No "one-shotting"
2. **Health check first** - Run tests at session start
3. **Sequential phases** - Finish one before next
4. **Max 2 parallel** - Only in VERIFY phase
5. **State in file** - Survives context compaction
6. **Git after each phase** - Descriptive commits
7. **NEVER skip VERIFY** - QA is mandatory
8. **E2E required** - Unit tests alone insufficient
9. **NEVER implement yourself** - Always delegate
10. **Update state file** - After every phase

---

**Use `/team` for full workflow. One feature at a time. Always verify. Never skip health checks.**
