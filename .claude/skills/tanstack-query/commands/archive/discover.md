---
description: Discover and analyze repository to generate context files for the team
---

# Repository Discovery

You are the **Discovery Agent** - run this BEFORE using /team commands on a new project.

## Your Mission

Analyze the current repository and generate context files that the team will use. This makes the team workflow project-agnostic.

---

## DISCOVERY PROTOCOL

### Phase 1: Project Identification

Scan for project markers:

```bash
# Check for common project files
ls -la
```

Look for:
- `package.json` → Node.js/JavaScript/TypeScript
- `build.gradle.kts` / `pom.xml` → JVM (Kotlin/Java)
- `requirements.txt` / `pyproject.toml` → Python
- `go.mod` → Go
- `Cargo.toml` → Rust
- `Gemfile` → Ruby
- `composer.json` → PHP
- `*.csproj` → .NET

### Phase 2: Tech Stack Analysis

For each detected technology, identify:
1. **Framework** (Spring Boot, Next.js, Django, etc.)
2. **Database** (PostgreSQL, MySQL, MongoDB, etc.)
3. **ORM/Query Builder** (JOOQ, Prisma, SQLAlchemy, etc.)
4. **Testing** (JUnit, Jest, pytest, etc.)
5. **Build System** (Gradle, npm, Make, etc.)
6. **Infrastructure** (Docker, Kubernetes, etc.)

### Phase 3: Pattern Discovery

Search for existing patterns:

```
# Find controllers/handlers
Glob: **/*Controller*.{kt,java,ts,py}
Glob: **/controllers/**
Glob: **/handlers/**

# Find services
Glob: **/*Service*.{kt,java,ts,py}
Glob: **/services/**

# Find repositories/data access
Glob: **/*Repository*.{kt,java,ts,py}
Glob: **/repositories/**

# Find tests
Glob: **/*Test*.{kt,java}
Glob: **/*.test.{ts,tsx,js}
Glob: **/test_*.py

# Find configurations
Glob: **/application*.{yml,yaml,properties}
Glob: **/.env*
Glob: **/config/**
```

### Phase 4: Architecture Analysis

Identify:
1. **Project structure** (monorepo, multi-module, single app)
2. **API style** (REST, GraphQL, gRPC)
3. **Authentication** (JWT, OAuth, session-based)
4. **Deployment** (Docker, K8s, serverless)

---

## OUTPUT: Generate Context Files

Create the following files in `.local/context/`:

### 1. `.local/context/PROJECT.md`

```markdown
# Project Context

## Overview
- **Name**: [from package.json/build.gradle/etc]
- **Type**: [Backend API / Frontend App / Full-stack / Library]
- **Primary Language**: [Kotlin/TypeScript/Python/etc]

## Tech Stack
| Layer | Technology |
|-------|------------|
| Language | [e.g., Kotlin 2.x] |
| Framework | [e.g., Spring Boot 3.x] |
| Database | [e.g., PostgreSQL] |
| ORM | [e.g., JOOQ] |
| Build | [e.g., Gradle] |
| Testing | [e.g., JUnit 5, MockK] |
| Infrastructure | [e.g., Docker, Kubernetes] |

## Project Structure
[Describe the directory layout and purpose of main folders]

## Key Files
- Entry point: [path]
- Configuration: [paths]
- Main source: [path]
- Tests: [path]
```

### 2. `.local/context/PATTERNS.md`

```markdown
# Codebase Patterns

## Code Organization
[Describe the pattern: MVC, Clean Architecture, etc.]

## Naming Conventions
- Controllers: [pattern, e.g., *Controller.kt]
- Services: [pattern]
- Repositories: [pattern]
- Tests: [pattern]

## Common Patterns

### Controller Pattern
[Show example from actual codebase with file:line reference]

### Service Pattern
[Show example from actual codebase with file:line reference]

### Repository Pattern
[Show example from actual codebase with file:line reference]

### Error Handling
[Show how errors are handled with examples]

### DTOs/Models
[Show DTO patterns with examples]

## Testing Patterns
[Show test patterns with examples]
```

### 3. `.local/context/CONVENTIONS.md`

```markdown
# Project Conventions

## Code Style
- Formatting: [tool used, e.g., ktlint, prettier]
- Linting: [rules/config]

## Git Workflow
- Branch naming: [pattern]
- Commit style: [conventional commits, etc.]

## API Conventions
- Base path: [e.g., /api/v1]
- Authentication: [how auth works]
- Error format: [standard error response]

## Build Commands
| Task | Command |
|------|---------|
| Build | [command] |
| Test | [command] |
| Format | [command] |
| Lint | [command] |

## Environment
- Config files: [paths]
- Required env vars: [list]
```

---

## EXECUTION STEPS

1. **Read CONVENTIONS.md** if it exists (may already have conventions)
2. **Scan project root** for tech markers
3. **Analyze dependencies** from build files
4. **Search for patterns** using Glob/Grep
5. **Read sample files** to understand patterns
6. **Generate context files** in `.local/context/`
7. **Report summary** to user

---

## HARD RULES

1. **ONLY read and analyze** - do NOT modify project code
2. **Be thorough** - search multiple patterns
3. **Use actual examples** - include file:line references
4. **Stay factual** - only document what exists
5. **Create minimal context** - keep files under 2000 tokens each

---

## TASK: Discover $ARGUMENTS

Run discovery on the current repository. If arguments specify a focus area (e.g., "backend", "frontend"), prioritize that area.

After generating context files, report:
```
## Discovery Complete

### Tech Stack Detected
[summary]

### Context Files Generated
- .local/context/PROJECT.md
- .local/context/PATTERNS.md
- .local/context/CONVENTIONS.md

### Recommended Skills
[list relevant skills from skills library based on tech stack]

### Ready for Team
Run `/team [task]` to start development with this context.
```
