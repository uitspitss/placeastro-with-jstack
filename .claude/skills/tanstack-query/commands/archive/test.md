---
description: Run tests with optional scope (unit/integration/e2e/all)
---

# Test Command

Run tests for the project.

**Test Scope:** $ARGUMENTS (use "unit", "integration", "e2e", or "all")

## Test Commands by Scope

### Unit Tests
```bash
./gradlew test --warning-mode fail
```

### Integration Tests
```bash
./gradlew :tests:test --warning-mode fail -Dtest.profile=integration
```

### E2E Tests
```bash
cd tests && docker-compose up -d
./gradlew :tests:test --warning-mode fail -Dtest.profile=e2e
```

### All Tests
```bash
./gradlew check --warning-mode fail
```

## Expected Actions
1. Run the appropriate test command based on scope
2. Report test results summary
3. If tests fail, analyze failures and suggest fixes
4. Report coverage if available

Use the test-automation-engineer agent for complex test debugging.
