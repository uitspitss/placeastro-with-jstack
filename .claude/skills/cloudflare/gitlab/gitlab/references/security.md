# Gitlab - Security

**Pages:** 2

---

## Integrate with GitLab

**URL:** https://docs.gitlab.com/integration/

**Contents:**
- Integrate with GitLab
- Project integrations
- Issue trackers
- Authentication providers
- Security improvements
- Troubleshooting
  - SSL certificate errors
  - Search Sidekiq logs in Kibana
  - Error: Test Failed. Save Anyway

You can integrate GitLab with external applications for enhanced functionality.

Applications like Jenkins, Jira, and Slack are available as project integrations.

You can configure an external issue tracker and use:

You can integrate GitLab with authentication providers like LDAP and SAML.

For more information, see GitLab authentication and authorization.

Solutions like Akismet and reCAPTCHA are available for spam protection.

You can also integrate GitLab with the following security partners:

GitLab can check your application for security vulnerabilities. For more information, see Secure your application.

When working with integrations, you might encounter the following issues.

When you use a self-signed certificate to integrate GitLab with external applications, you might encounter SSL certificate errors in different parts of GitLab.

As a workaround, do one of the following:

Install the self-signed certificate.

Concatenate the self-signed certificate with the GitLab trusted certificate. The self-signed certificate might be overwritten during upgrades.

To locate a specific integration in Kibana, use the following KQL search string:

You can find information in:

When you configure an integration on an uninitialized repository, the integration might fail with a Test Failed. Save Anyway error. This error occurs because the integration uses push data to build the test payload when the project does not have push events.

To resolve this issue, initialize the repository by pushing a test file to the project and configure the integration again.

**Examples:**

Example 1 (unknown):
```unknown
cat jira.pem >> /opt/gitlab/embedded/ssl/certs/cacert.pem
```

Example 2 (unknown):
```unknown
sudo gitlab-ctl restart
```

Example 3 (unknown):
```unknown
`json.integration_class.keyword : "Integrations::Jira" and json.project_path : "path/to/project"`
```

---

## Secure GitLab

**URL:** https://docs.gitlab.com/security/

**Contents:**
- Secure GitLab
- General information
- Recommendations
  - Antivirus software
  - User accounts
  - Data access
  - Platform usage and settings
  - Patching
- Monitoring
  - Logs

This section covers some general information and recommendations regarding the platform.

For more information about improving the security posture of your GitLab environment, see the hardening recommendations.

Generally, running an antivirus software on the GitLab host is not recommended.

However, if you must use one, all of the location of GitLab on the system should be excluded from scanning as it could be quarantined as a false positive.

Specifically, you should exclude the following GitLab directories from scanning:

You can find all those directories listed in the Linux package configuration documentation.

GitLab Self-Managed customers and administrators are responsible for the security of their underlying hosts, and for keeping GitLab itself up to date. It is important to regularly patch GitLab, patch your operating system and its software, and harden your hosts in accordance with vendor guidance.

For information about rate limits, see Rate limits.

---
