---
description: Run comprehensive security audit on the codebase
---

# Security Audit Command

Perform a comprehensive security audit.

**Scope:** $ARGUMENTS (optional: "full", "deps", "code", or specific path)

## Security Audit Areas

### 1. Dependency Scanning
```bash
./gradlew dependencyCheckAnalyze
```
Check for CVEs in dependencies.

### 2. Code Security Review
- OWASP Top 10 vulnerabilities
- SQL/Command injection risks
- Sensitive data exposure
- Authentication/authorization issues
- Input validation gaps

### 3. Infrastructure Security
- Kubernetes security contexts
- Secret management
- Network policies
- Container security

### 4. Configuration Security
- Exposed secrets in code/config
- Insecure default settings
- Missing security headers

## Output
1. List all findings by severity (Critical, High, Medium, Low)
2. Provide remediation recommendations
3. Highlight quick wins

Use the security-tester agent for detailed vulnerability analysis.
