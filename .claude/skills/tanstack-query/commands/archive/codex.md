---
description: Run Codex CLI for code analysis or generation tasks
---

# Codex CLI Runner

Run tasks using OpenAI Codex via JetBrains AI staging.

## Configuration

- **Provider**: `jbai-staging` (JetBrains AI Staging)
- **Token**: `GRAZIE_STAGING_TOKEN` environment variable
- **Default Model**: `gpt-4o-2024-11-20`

## Task: $ARGUMENTS

If no task provided, ask what the user wants Codex to do.

## Execution Protocol

1. **Determine task type:**
   - Analysis/read-only → `--sandbox read-only`
   - Code generation/edits → `--sandbox workspace-write --full-auto`

2. **Choose model:**
   - Fast tasks → `gpt-4o-2024-11-20`
   - Complex reasoning → `o3-mini-2025-01-31`

3. **Run command:**

For **read-only analysis**:
```bash
codex exec -c model_provider=jbai-staging --model "gpt-4o-2024-11-20" \
  --sandbox read-only --skip-git-repo-check \
  "$ARGUMENTS" 2>/dev/null
```

For **code generation/edits**:
```bash
codex exec -c model_provider=jbai-staging --model "gpt-4o-2024-11-20" \
  --sandbox workspace-write --full-auto --skip-git-repo-check \
  "$ARGUMENTS" 2>/dev/null
```

4. **Report results** and offer to resume: "Say `/codex resume` to continue this session"

## Resume Previous Session

If user says "resume" or task contains "resume":
```bash
echo "$ARGUMENTS" | codex exec --skip-git-repo-check resume --last 2>/dev/null
```

## Examples

```bash
# Analyze codebase
/codex analyze all REST endpoints and list them

# Generate code
/codex generate unit tests for UserService.kt

# Complex reasoning
/codex review security vulnerabilities in auth module

# Resume
/codex resume - add error handling to the generated tests
```

## Safety

- Default to `read-only` unless edits explicitly needed
- Always use `--skip-git-repo-check`
- Suppress thinking tokens with `2>/dev/null`
- Never use `danger-full-access` without asking
