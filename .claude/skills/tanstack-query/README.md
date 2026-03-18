# Dream Team v3.0

**Effective Claude workflows based on official Anthropic patterns and real-world feedback.**

## Philosophy

> *"A single-threaded linear agent maintains continuous context. This simple approach will get you very far."* - [Cognition (Devin team)](https://cognition.ai/blog/dont-build-multi-agents)

**Less ceremony, more results.** Claude works best when it can:
- Build context itself
- Ask questions only when genuinely needed
- Work incrementally
- Self-review before presenting

---

## Quick Start

### Installation

```bash
# Option 1: Plugin (Recommended)
claude plugins add https://github.com/ashchupliak/dream-team

# Option 2: Manual
git clone https://github.com/ashchupliak/dream-team.git
cd dream-team
./install.sh
```

### Usage

```bash
# For 90% of tasks - use /solo
/solo Fix the login bug
/solo Add rate limiting to the API
/solo Why are the tests failing?

# For complex features needing multiple perspectives
/team Add OAuth with Google and GitHub
```

---

## Commands

### `/solo` - Primary Workflow (Recommended)

The main command for most tasks. Claude will:

1. **Build context automatically** - Read CLAUDE.md, explore codebase, find patterns
2. **Assess confidence** - Determine if it has enough info to proceed
3. **Ask only when needed** - No forced questions, no ceremonies
4. **Work incrementally** - Small steps that compile and work
5. **Self-review** - Check own work before presenting

```bash
/solo Fix the login bug
/solo Add rate limiting to the API
/solo Why are the tests failing?
/solo Review my changes in the auth module
/solo Refactor the user service
```

### `/team` - Multi-Agent Workflow

For genuinely complex features where you want:
- Multiple architecture options presented
- Parallel exploration of different aspects
- Explicit user checkpoints

Based on [Anthropic's feature-dev plugin](https://github.com/anthropics/claude-code/tree/main/plugins/feature-dev).

7-phase workflow: Discovery → Exploration → Questions → Architecture → Implementation → Review → Summary

```bash
/team Add OAuth authentication with Google and GitHub
/team Implement real-time notifications system
```

### Legacy Commands

| Command | Description |
|---------|-------------|
| `/team-a` | Original 5-agent with health checks |
| `/team-b` | Original 5-agent standard |
| `/team-c` | Original 3-agent fast |

Kept for comparison. Use `/solo` instead for most tasks.

---

## When To Use What

| Task | Use | Why |
|------|-----|-----|
| Bug fix | `/solo` | Single context, no overhead |
| Small feature | `/solo` | Find patterns, implement, verify |
| Investigation | `/solo` | Explore and report |
| Code review | `/solo` | Read and analyze |
| Refactoring | `/solo` | Incremental changes |
| Complex feature | `/team` | Need multiple architecture options |
| Architecture decisions | `/team` | Want parallel exploration |

**Rule of thumb**: Start with `/solo`. Use `/team` only when you genuinely need multiple perspectives.

---

## Skills

Specialized knowledge Claude can invoke on demand:

| Skill | Domain |
|-------|--------|
| `kotlin-patterns` | Kotlin idioms and patterns |
| `kotlin-spring-boot` | Spring Boot 3.x |
| `nextjs-patterns` | Next.js 15 App Router |
| `prisma-patterns` | Prisma ORM |
| `tanstack-query` | React Query |
| `jooq-patterns` | JOOQ type-safe SQL |
| `flyway-migrations` | Database migrations |
| `api-design` | REST API design |
| `grpc-protobuf` | gRPC and Protocol Buffers |
| `k8s-helm` | Kubernetes and Helm |
| `opentelemetry` | Distributed tracing |
| `systematic-planning` | Feature planning |
| `codex` | Codex CLI delegation |

Just mention the domain in your request.

---

## Agents

Available for `/team` workflows:

| Agent | Role | Model |
|-------|------|-------|
| `analyst` | Requirements, research | Sonnet |
| `architect` | Design, APIs, blueprints | Sonnet |
| `developer` | Implementation | Sonnet |
| `qa` | Testing, review | Sonnet |
| `devops` | Infrastructure | Sonnet |
| `code-reviewer` | Deep code review | Sonnet |
| `security-tester` | Security audit | Sonnet |
| `tech-researcher` | Fast research | Haiku |

---

## Project Setup

For best results, add a `CLAUDE.md` to your project root:

```markdown
# Project Name

## Commands
- Build: npm run build
- Test: npm test
- Lint: npm run lint

## Tech Stack
- Next.js 14, TypeScript, Prisma

## Conventions
- Use server components by default
- API routes in /app/api/
- Database queries through Prisma only

## Current Focus
- Working on user authentication
```

This helps Claude understand your specific project.

---

## Research Behind This

Based on:
- [Anthropic: Claude Code Best Practices](https://www.anthropic.com/engineering/claude-code-best-practices)
- [Anthropic: Multi-Agent Research System](https://www.anthropic.com/engineering/multi-agent-research-system)
- [Cognition: Don't Build Multi-Agents](https://cognition.ai/blog/dont-build-multi-agents)
- [Anthropic: feature-dev Plugin](https://github.com/anthropics/claude-code/tree/main/plugins/feature-dev)

**Key insight**: Multi-agent systems use ~15x more tokens than single agent. Worth it only for breadth-first parallel research, not sequential development tasks.

---

## What's New in v3.0

- **`/solo` command** - Primary workflow for most tasks
- **Simplified approach** - Less ceremony, more results
- **Research-backed** - Based on official Anthropic patterns
- **Better defaults** - Claude builds context automatically
- **Archived old commands** - Kept in `commands/archive/` for reference

---

## Changelog

### v3.0.0 (2025-12-08)

**New:**
- `/solo` command - single-agent workflow that builds context automatically
- Updated `/team` with 7-phase workflow based on Anthropic's feature-dev plugin

**Changed:**
- Philosophy shift: single-agent first, multi-agent only when needed
- Archived specialist commands (codex, parallel-review, quick-fix, etc.)
- Updated README with research and rationale

### v2.0.0 (2025-12-07)

- 8 agents with model optimization
- Codex CLI integration
- Output styles
- Security hooks

### v1.0.0 (2025-12-03)

- Initial release

---

## Feedback

If Claude:
- **Asks too many questions** → Tell it to proceed with assumptions
- **Guesses when it shouldn't** → Tell it to ask more
- **Misses context** → Add to project CLAUDE.md

The workflow improves with feedback.

---

## License

MIT

## Author

Andrii Shchupliak
