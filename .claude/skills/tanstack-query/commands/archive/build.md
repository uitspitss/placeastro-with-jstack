---
description: Build the project with quality checks
---

# Build Command

Build the project with all quality checks.

**Options:** $ARGUMENTS (optional: "quick", "full", "docker")

## Build Types

### Quick Build
```bash
./gradlew build --warning-mode fail -x test
```
Compile only, skip tests.

### Full Build (Default)
```bash
./gradlew clean build --warning-mode fail
./gradlew spotlessCheck
./gradlew detekt
```
Full build with all quality gates.

### Docker Build
```bash
./gradlew build --warning-mode fail
docker build -t orca-facade:local .
```
Build application and Docker image.

## Expected Actions
1. Run appropriate build command
2. Report any compilation errors
3. Report quality gate failures
4. Suggest fixes for any issues found

Use ci-cd-engineer for build pipeline issues.
