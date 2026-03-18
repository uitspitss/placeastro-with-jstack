---
description: Deploy application to specified environment (staging/prod)
---

# Deploy Command

Deploy the application to the specified environment.

**Target Environment:** $ARGUMENTS (use "staging" or "prod")

## Pre-deployment Checklist
1. Verify all tests pass
2. Check for uncommitted changes
3. Review recent commits since last deployment
4. Verify environment configuration

## Deployment Steps
1. Build the application with `./gradlew build --warning-mode fail`
2. Build and tag Docker image
3. Push image to registry
4. Deploy using Helm to the target environment
5. Verify deployment health
6. Run smoke tests

## Post-deployment
1. Monitor metrics for anomalies
2. Check application logs
3. Verify key functionality

Use the release-engineer agent if you need detailed deployment coordination.
