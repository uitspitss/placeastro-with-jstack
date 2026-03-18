# Gitlab - User Guide

**Pages:** 56

---

## Deploy tokens

**URL:** https://docs.gitlab.com/user/project/deploy_tokens/

**Contents:**
- Deploy tokens
- Scope
- GitLab deploy token
- Deploy token expiration
  - GitLab deploy token security
  - GitLab public API
- Create a deploy token
- Revoke a deploy token
- Clone a repository
- Pull images from a container registry

Deploy tokens provide secure access to GitLab resources without tying permissions to individual user accounts. Use them with Git operations, container registries, and package registries, giving your deployment automation access to exactly what it needs.

With deploy tokens, you have:

A deploy token is a pair of values:

Deploy tokens do not support SSH authentication.

You can use a deploy token for HTTP authentication to the following endpoints:

You can create deploy tokens at either the project or group level:

By default, a deploy token does not expire. You can optionally set an expiry date when you create it. Expiry occurs at midnight UTC on that date.

You cannot use new or existing deploy tokens for Git operations and package registry operations if external authorization is enabled.

A deploy token’s scope determines the actions it can perform.

A GitLab deploy token is a special type of deploy token. If you create a deploy token named gitlab-deploy-token, the deploy token is automatically exposed to project CI/CD jobs as variables:

For example, to use a GitLab token to sign in to your GitLab container registry:

In GitLab 15.0 and earlier, the special handling for the gitlab-deploy-token deploy token does not work for group deploy tokens. To make a group deploy token available for CI/CD jobs, set the CI_DEPLOY_USER and CI_DEPLOY_PASSWORD CI/CD variables in Settings > CI/CD > Variables to the name and token of the group deploy token.

When gitlab-deploy-token is defined in a group, the CI_DEPLOY_USER and CI_DEPLOY_PASSWORD CI/CD variables are available only to immediate child projects of the group.

The availability of this feature is controlled by a feature flag. For more information, see the history.

Deploy tokens expire on the date you define at 00:00 AM UTC.

GitLab checks every day at 01:00 AM UTC for deploy tokens that are about to expire. Project owners and maintainers are notified by email 60, 30, and 7 days before these tokens expire.

These email notifications are sent only once per interval for active (non-revoked) deploy tokens.

GitLab deploy tokens are long-lived, making them attractive for attackers.

To prevent leaking the deploy token, you should also configure your runners to be secure:

An insecure GitLab Runner configuration increases the risk that someone can steal tokens from other jobs.

Deploy tokens can’t be used with the GitLab public API. However, you can use deploy tokens with some endpoints, such as those from the package registry. You can tell an endpoint belongs to the package registry because the URL has the string packages/<format>. For example: https://gitlab.example.com/api/v4/projects/24/packages/generic/my_package/0.0.1/file.txt. For more information, see Authenticate with the registry.

Create a deploy token to automate deployment tasks that can run independently of a user account.

Record the deploy token’s values. After you leave or refresh the page, you cannot access it again.

Revoke a token when it’s no longer required.

To revoke a deploy token:

You can use a deploy token to clone a repository.

Example of using a deploy token to clone a repository:

You can use a deploy token to pull images from a container registry.

Example of using a deploy token to pull images from a container registry:

You can use a deploy token to push images to a container registry.

Example of using a deploy token to push an image to a container registry:

You can use a deploy token to pull packages from a package registry.

For the package type of your choice, follow the authentication instructions for deploy tokens.

Example of installing a NuGet package from a GitLab registry:

You can use a deploy token to push packages to a GitLab package registry.

For the package type of your choice, follow the authentication instructions for deploy tokens.

Example of publishing a NuGet package to a package registry:

You can use a deploy token to pull images from the dependency proxy.

Follow the dependency proxy authentication instructions.

**Examples:**

Example 1 (unknown):
```unknown
echo "$CI_DEPLOY_PASSWORD" | docker login $CI_REGISTRY -u $CI_DEPLOY_USER --password-stdin
```

Example 2 (unknown):
```unknown
git clone https://<username>:<deploy_token>@gitlab.example.com/tanuki/awesome_project.git
```

Example 3 (unknown):
```unknown
echo "$DEPLOY_TOKEN" | docker login -u <username> --password-stdin registry.example.com
docker pull $CONTAINER_TEST_IMAGE
```

Example 4 (unknown):
```unknown
echo "$DEPLOY_TOKEN" | docker login -u <username> --password-stdin registry.example.com
docker push $CONTAINER_TEST_IMAGE
```

---

## Use GitLab

**URL:** https://docs.gitlab.com/user/

**Contents:**
- Use GitLab

Get to know the GitLab end-to-end workflow. Configure permissions, organize your work, create and secure your application, and analyze its performance. Report on team productivity throughout the process.

---

## Project topics

**URL:** https://docs.gitlab.com/user/project/project_topics/

**Contents:**
- Project topics
- Explore topics
- Filter and sort topics
- Subscribe to a topic
- Assign topics to a project
- Administer topics

Topics are labels that you can assign to projects to help you organize and find them. A topic is typically a short name that describes the content or purpose of a project. You can assign a topic to several projects.

For example, you can create and assign the topics python and hackathon to all projects that use Python and are intended for Hackathon contributions.

Topics assigned to a project are displayed in the Project overview and Projects lists, below the project information description.

Only users with access to the project can see the topics assigned to that project, but everyone (including unauthenticated users) can see the topics available on the GitLab instance. Do not include sensitive information in the name of a topic.

To explore project topics:

On the project topic page, you can filter the list of projects that have that topic by:

You can also sort the projects by:

To filter projects by name, in the search box, enter your search criteria.

To sort projects by other criteria, from the dropdown lists, select an option.

If you want to know when new projects are added to a topic, you can use its RSS feed.

You can do this either from the Explore topics page or a project with topics.

To subscribe to a topic:

From the Explore topics page:

The results are displayed as an RSS feed in Atom format. The URL of the result contains a feed token and the list of projects that have the topic. You can add this URL to your feed reader.

To assign topics to a project:

Instance administrators can administer all project topics from the Admin area’s Topics page.

---

## Import and migrate groups and projects

**URL:** https://docs.gitlab.com/user/project/import/

**Contents:**
- Import and migrate groups and projects
- Migrate from GitLab to GitLab by using direct transfer
- Supported import sources
  - Disable unused import sources
- Other import sources
  - Import repositories from Subversion
- User contribution and membership mapping
  - Requirements
  - Placeholder users
    - Exceptions

Bring your existing work into GitLab and preserve your contribution history. Consolidate projects from multiple platforms or transfer data between GitLab instances.

GitLab offers different methods to:

The best way to copy GitLab groups and projects between GitLab instances, or in the same GitLab instance, is by using direct transfer.

Another option is to move GitLab groups using group transfer.

You can also copy GitLab projects by using a GitLab file export, which is a supported import source.

The import sources that are available to you by default depend on which GitLab you use:

GitLab can import projects from these supported import sources.

After you start a migration, you should not make any changes to imported groups or projects on the source instance because these changes might not be copied to the destination instance.

Only import projects from sources you trust. If you import a project from an untrusted source, an attacker could steal your sensitive data. For example, an imported project with a malicious .gitlab-ci.yml file could allow an attacker to exfiltrate group CI/CD variables.

GitLab Self-Managed administrators can reduce their attack surface by disabling import sources they don’t need:

You can also read information on importing from these other import sources:

GitLab can not automatically migrate Subversion repositories to Git. Converting Subversion repositories to Git can be difficult, but several tools exist including:

The availability of this feature is controlled by feature flags. For more information, see the history.

To leave feedback about this feature, add a comment to issue 502565.

This method of user contribution and membership mapping is available by default for direct transfer, GitHub importer, Bitbucket Server importer, and Gitea importer on GitLab.com and GitLab Self-Managed. For information on the other method available for GitLab Self-Managed with disabled feature flags, see the documentation for each importer.

Any memberships and contributions you import are first mapped to placeholder users. These placeholders are created on the destination instance even if users with the same email addresses exist on the source instance. Until you reassign contributions on the destination instance, all contributions display as associated with placeholders.

Contributions from a deleted user on the source instance are mapped automatically to that user on the destination instance.

After the import has completed, you can:

When you reassign contributions to a user on the destination instance, the user can accept or reject the reassignment. When the user accepts the reassignment:

In GitLab 18.0 and later, if your top-level group has at least one enterprise user, you can reassign contributions only to enterprise users in your organization in the UI or by using a CSV file. This feature is meant to prevent accidental reassignment to users outside your organization.

When you use a supported method to import projects to a personal namespace, user contribution mapping is not supported. When you import to a personal namespace and the user_mapping_to_personal_namespace_owner feature flag is enabled, all contributions are assigned to the personal namespace owner and they cannot be reassigned. When the user_mapping_to_personal_namespace_owner feature flag is disabled, all contributions are assigned to a single non-functional user called Import User and they cannot be reassigned.

Instead of immediately assigning contributions and memberships to users on the destination instance, a placeholder user is created for any active, inactive, or bot user with imported contributions or memberships. For deleted users on the source instance, placeholders are created without all placeholder user attributes. You should keep these users as placeholders. For more information, see issue 506432.

Both contributions and memberships are first assigned to these placeholder users and can be reassigned after import to existing users on the destination instance. Until they are reassigned, contributions display as associated with the placeholder. Placeholder memberships do not display in member lists.

Placeholder users do not count towards license limits.

A placeholder user is created for each user on the source instance, except in the following scenarios:

Placeholder users are different to regular users and cannot:

To maintain a connection with a user on a source instance, placeholder users have:

To preserve historical context, the placeholder user name and username are derived from the source user name and username:

Placeholder users are created on the destination instance while a group or project is imported. To view placeholder users created during imports to a top-level group and its subgroups:

Placeholder users are created on the destination instance while a group or project is imported. To filter for placeholder users created during imports for an entire instance:

Placeholder users are created per import source and per top-level group:

Placeholder users are associated only with the top-level group. When you delete a subgroup or project, their placeholder users no longer reference any contributions in the top-level group. For testing, you should use a designated top-level group. Deleting placeholder users is proposed in issue 519391 and issue 537340.

When a user accepts the reassignment, subsequent imports from the same source instance to the same top-level group or subgroup on the destination instance do not create placeholder users. Instead, contributions are mapped automatically to the user.

When you delete a top-level group that contains placeholder users, these users are automatically scheduled for removal. This process might take some time to complete. However, placeholder users remain in the system if they’re also associated with other projects or groups.

There is no other way to delete placeholder users, but support for improvements is proposed in issue 519391 and issue 537340.

If importing to GitLab.com, placeholder users are limited per top-level group on the destination instance. The limits differ depending on your plan and seat count. Placeholder users do not count towards license limits.

For GitLab Self-Managed and GitLab Dedicated, no placeholder limits apply by default. A GitLab administrator can set a placeholder limit on their instance.

To view your current placeholder user usage and limits:

You cannot determine the number of placeholder users you need in advance.

When the placeholder user limit is reached, all contributions are assigned to a single non-functional user called Import User. Contributions assigned to Import User might be deduplicated, and some contributions might not be created during the import. For example, if multiple approvals from a merge request approver are assigned to Import User, only the first approval is created and the others are ignored. The contributions that might be deduplicated are:

Every change creates a system note, which is not affected by the placeholder user limit.

Users with the Owner role for a top-level group can reassign contributions and memberships from placeholder users to existing active non-bot users. On the destination instance, users with the Owner role for a top-level group can:

On GitLab Self-Managed and GitLab Dedicated, administrators can reassign contributions and memberships to active and inactive non-bot users immediately without their confirmation. For more information, see skip confirmation when administrators reassign placeholder users.

The availability of this feature is controlled by a feature flag. For more information, see the history.

To bypass confirmation for enterprise users when you reassign placeholders:

You can reassign all contributions initially assigned to a single placeholder user to a single active regular user, service accounts, project bots, and group bots on the destination instance. You cannot split contributions assigned to a single placeholder user among multiple users.

You can reassign contributions from multiple placeholder users to the same user on the destination instance if the placeholder users are from:

If an assigned user becomes inactive before accepting the reassignment request, the pending reassignment remains linked to the user until they accept it.

Users that receive a reassignment request can:

When you reassign contributions to service accounts, project bots, and group bots, the reassignment request is automatically approved.

In subsequent imports to the same top-level group, contributions and memberships that belong to the same source user are mapped automatically to the user who previously accepted reassignments for that source user.

On GitLab Self-Managed and GitLab Dedicated, administrators can reassign contributions and memberships to active and inactive non-bot users immediately without their confirmation. For more information, see skip confirmation when administrators reassign placeholder users.

The reassignment process must be fully completed before you:

If the process isn’t complete, contributions still assigned to placeholder users cannot be reassigned to real users and they stay associated with placeholder users.

Contribution and membership reassignment cannot be undone, so check everything carefully before you start.

Reassigning contributions and membership to an incorrect user poses a security threat, because the user becomes a member of your group. They can, therefore, view information they should not be able to see.

Reassigning contributions to users with administrator access is disabled by default, but you can enable it.

Because of the GitLab permissions model, when a group or project is imported into an existing parent group, members of the parent group are granted inherited membership of the imported group or project.

Selecting a user for contribution and membership reassignment who already has an existing inherited membership of the imported group or project can affect how memberships are reassigned to them.

GitLab does not allow a membership in a child project or group to have a lower role than an inherited membership. If an imported membership for an assigned user has a lower role than their existing inherited membership, the imported membership is not reassigned to the user.

This results in their membership for the imported group or project being higher than it was on the source.

You can reassign contributions and memberships in the top-level group. To request reassignment of contributions and memberships:

Contributions of only one placeholder user can be reassigned to an active non-bot user on destination instance.

Before a user accepts the reassignment, you can cancel the request.

On GitLab Self-Managed and GitLab Dedicated, administrators can reassign contributions and memberships to active and inactive non-bot users immediately without their confirmation. For more information, see skip confirmation when administrators reassign placeholder users.

For a large number of placeholder users, you might want to reassign contributions and memberships by using a CSV file. You can download a prefilled CSV template with the following information. For example:

Do not update Source host, Import type, or Source user identifier. This information locates the corresponding database record after you’ve uploaded the completed CSV file. Source user name and Source username identify the source user and are not used after you’ve uploaded the CSV file.

You do not have to update every row of the CSV file. Only rows with GitLab username or GitLab public email are processed. All other rows are skipped.

To request reassignment of contributions and memberships by using a CSV file:

You can assign only contributions from a single placeholder user to each active non-bot user on the destination instance. Users receive an email to review and accept any contributions you’ve reassigned to them. You can cancel the reassignment request before the user reviews it.

On GitLab Self-Managed and GitLab Dedicated, administrators can reassign contributions and memberships to active and inactive non-bot users immediately without their confirmation. For more information, see skip confirmation when administrators reassign placeholder users.

After you reassign contributions, GitLab sends you an email with the number of:

If any rows have not been successfully processed, the email has a CSV file with more detailed results.

To reassign placeholder users in bulk without using the UI, see Group placeholder reassignments API.

You might not want to reassign contributions and memberships to users on the destination instance. For example, you might have former employees that contributed on the source instance, but they do not exist as users on the destination instance.

In these cases, you can keep the contributions assigned to placeholder users. Placeholder users do not keep membership information because they cannot be members of projects or groups.

Because names and usernames of placeholder users resemble names and usernames of source users, you keep a lot of historical context.

You can keep contributions assigned to placeholder users either one at a time or in bulk. When you reassign contributions in bulk, the entire namespace and users with the following reassignment statuses are affected:

To keep placeholder users one at a time:

To keep placeholder users in bulk:

To undo the operation:

Before a user accepts a reassignment request, you can cancel the request:

If a user is not acting on a reassignment request, you can prompt them again by sending another email:

To view the reassignment status of all placeholder users:

In the Awaiting reassignment tab, possible statuses are:

In the Reassigned tab, possible statuses are:

By default, the table is sorted alphabetically by placeholder user name. You can also sort the table by reassignment status.

When Skip confirmation when administrators reassign placeholder users is enabled:

If this setting is not enabled, you can accept or reject the reassignment.

You might receive an email informing you that an import process took place and asking you to confirm reassignment of contributions to yourself.

If you were informed about this import process, you must still review reassignment details very carefully. Details listed in the email are:

If you receive an email asking you to confirm reassignment of contributions to yourself and you don’t recognize or you notice mistakes in this information:

You must review the reassignment details of any reassignment request very carefully. If you were not already informed about this process by a trusted colleague or your manager, take extra care.

Rather than accept any reassignments that you have any doubts about:

Accept reassignments only from the users that you know and trust. Reassignment of contributions is permanent and cannot be undone. Accepting the reassignment might cause contributions to be incorrectly attributed to you.

The contribution reassignment process starts only after you accept the reassignment request by selecting Approve reassignment in GitLab. The process doesn’t start by selecting links in the email.

You can view all project imports created by you. This list includes the following:

To view project import history:

The history also includes projects created from built-in or custom templates. GitLab uses import repository by URL to create a new project from a template.

When importing a project that contains LFS objects, if the project has an .lfsconfig file with a URL host (lfs.url) different from the repository URL host, LFS files are not downloaded.

If you prefer, you can engage GitLab Professional Services to migrate groups and projects to GitLab instead of doing it yourself. For more information, see the Professional Services Full Catalog.

Importers rely heavily on Sidekiq jobs to handle the import and export of groups and projects. Some of these jobs might consume significant resources (CPU and memory) and take a long time to complete, which might affect the execution of other jobs. To resolve this issue, you should route importer jobs to a dedicated Sidekiq queue and assign a dedicated Sidekiq process to handle that queue.

For example, you can use the following configuration:

If your instance has enough resources to support more concurrent jobs, you can configure additional Sidekiq processes to speed up migrations. For example:

With this setup, multiple Sidekiq processes handle import and export jobs concurrently, which speeds up migration as long as the instance has sufficient resources.

For the maximum number of Sidekiq processes, keep the following in mind:

For more information, see running multiple Sidekiq processes and processing specific job classes.

If an imported repository does not contain all branches of the source repository:

The error occurs if you attempt to import a tar.gz file download of a repository’s source code.

Imports require a GitLab export file, not just a repository download file.

If you’re experiencing prolonged delays or failures with file-based imports, especially those using S3, the following may help identify the root cause of the problem:

Check the import status:

Search logs for relevant information:

For GitLab Self-Managed instances:

For GitLab.com (GitLab team members only):

Use Kibana to search the Sidekiq logs with queries like:

Target: pubsub-sidekiq-inf-gprd*

Look for the same fields as mentioned for GitLab Self-Managed instances.

Check the information gathered in Review logs against the following common issues:

**Examples:**

Example 1 (unknown):
```unknown
sidekiq['concurrency'] = 20

sidekiq['routing_rules'] = [
  # Route import and export jobs to the importer queue
  ['feature_category=importers', 'importers'],

  # Route all other jobs to the default queue by using wildcard matching
  ['*', 'default']
]

sidekiq['queue_groups'] = [
  # Run a dedicated process for the importer queue
  'importers',

  # Run a separate process for the default and mailer queues
  'default,mailers'
]
```

Example 2 (unknown):
```unknown
sidekiq['queue_groups'] = [
  # Run three processes for importer jobs
  'importers',
  'importers',
  'importers',

  # Run a separate process for the default and mailer queues
  'default,mailers'
]
```

Example 3 (unknown):
```unknown
json.class: "RepositoryImportWorker" AND json.correlation_id.keyword: "<CORRELATION_ID>"
```

Example 4 (unknown):
```unknown
json.class: "RepositoryImportWorker" AND json.meta.project: "<project.full_path>"
```

---

## Get started organizing work with projects

**URL:** https://docs.gitlab.com/user/get_started/get_started_projects/

**Contents:**
- Get started organizing work with projects
- Step 1: Create a project
- Step 2: Secure and control access to projects
- Step 3: Collaborate and share projects
- Step 4: Enhance project discoverability and recognition
- Step 5: Boost development efficiency and maintain code quality
- Step 6: Migrate projects into GitLab

Projects in GitLab organize all the data for a specific development project. A project is where you work with your team, store your files, and manage your tasks.

Project creation and maintenance is part of a larger workflow:

Start by creating a new project in GitLab to contain your codebase, documentation, and related resources.

A project contains a repository. A repository contains all the files, directories, and data related to your work.

When you create the project, review and configure the following settings to align with your development workflow and collaboration requirements:

For more information, see:

Use the following tools to manage secure access to your projects:

For more information, see:

You can invite multiple projects to a group, sometimes called sharing a project with a group. Each project has its own repository, issues, merge requests, and other features.

With multiple projects in a group, team members can collaborate on individual projects while having a high-level view of all the work done in the group.

To further refine access to your projects, you can add subgroups to your group.

For more information, see:

Use the search box to quickly find specific projects, issues, merge requests, or code snippets across your GitLab instance.

To make projects easier to find:

For more information, see:

Use code intelligence features to enhance your productivity and maintain a high-quality codebase, such as:

Code intelligence is a range of tools that help you efficiently explore, analyze, and maintain your codebase.

To quickly locate and go to specific files in your project, use the file finder.

For more information, see:

Use file exports to migrate projects to GitLab from other systems or GitLab instances.

When you migrate a frequently accessed repository to GitLab, you can use a project alias to continue to access it by its original name.

On GitLab.com, you can transfer a project from one namespace to another. A transfer essentially moves a project to another group so its members have access or ownership.

For more information, see:

---

## Manage your infrastructure

**URL:** https://docs.gitlab.com/user/infrastructure/

**Contents:**
- Manage your infrastructure

Use GitLab to speed up and simplify your infrastructure management practices.

---

## Merge request analytics

**URL:** https://docs.gitlab.com/user/analytics/merge_request_analytics/

**Contents:**
- Merge request analytics
- View merge request analytics
- View the number of merge requests in a date range
- View average time between merge request creation and merge

Merge request analytics provide DevOps managers with valuable insights into their team’s code review and merging workflows. Based on the detailed metrics and trends related to merge requests, organizations can monitor and optimize their development processes.

Use merge request analytics to view:

You can use merge request analytics to identify:

These insights can help you make data-driven decisions like:

To view merge request analytics:

To view the number of merge requests merged during a specific date range:

The Throughput chart shows issues closed or merge requests merged (not closed) over a period of time.

The table shows up to 20 merge requests per page, and includes the following information about each merge request:

The number in Mean time to merge shows the average time between when a merge request is created and when it’s merged. Closed and not yet merged merge requests are not included.

To view Mean time to merge:

---

## Secure your application

**URL:** https://docs.gitlab.com/user/application_security/secure_your_application/

**Contents:**
- Secure your application

GitLab can check your applications for security vulnerabilities.

---

## Policies

**URL:** https://docs.gitlab.com/user/application_security/policies/

**Contents:**
- Policies
- Configure the policy scope
- policy_scope keyword
  - Scope examples
- Separation of duties
  - Required permissions
- Policy recommendations
  - Branch names
  - Push rules
  - Security policy projects

Policies provide security and compliance teams with a way to enforce controls globally in their organization.

Security teams can ensure:

Compliance teams can enforce:

The following policy types are available:

Use the policy_scope keyword to enforce the policy on only those groups, projects, compliance frameworks, or a combination, that you specify.

In this example, the scan execution policy enforces a SAST scan in every release pipeline, on every project with the compliance frameworks with an ID either 2 or 11 applied to them.

In this example, the scan execution policy enforces a secret detection and SAST scan on pipelines for the default branch, on all projects in the group with ID 203 (including all descendent subgroups and their projects), excluding the project with ID 64.

Separation of duties is vital to successfully implementing policies. Implement policies that achieve the necessary compliance and security requirements, while allowing development teams to achieve their goals.

Security and compliance teams:

To enforce a security policy project on a group, subgroup, or project, you must have either:

The Owner role and custom roles with the manage_security_policy_link permission follow the standard hierarchy rules across groups, subgroups, and projects:

To create and manage security policies:

If you’re not a group member, you may face limitations in adding or editing policies for your project. The ability to create and manage policies requires permissions to create projects in the group. Make sure you have the required permissions in the group, even when working with project-level policies.

When implementing policies, consider the following recommendations.

When specifying branch names in a policy, use a generic category of protected branches, such as default branch or all protected branches, not individual branch names.

A policy is enforced on a project only if the specified branch exists in that project. For example, if your policy enforces rules on branch main but some projects in scope are using production as their default branch, the policy is not applied for the latter.

In GitLab 17.3 and earlier, if you use push rules to validate branch names ensure they allow creation of branches with the prefix update-policy-. This branch naming prefix is used when a security policy is created or amended. For example, update-policy-1659094451, where 1659094451 is the timestamp. If push rules block the creation of the branch the following error occurs:

In GitLab 17.4 and later, security policy projects are excluded from push rules that enforce branch name validation.

To prevent the exposure of sensitive information that was intended to remain private in your security policy project, when you link security policy projects to other projects:

These recommendations prevent sensitive information exposure for the following reasons:

Project maintainers can create policies for projects that interfere with the execution of policies for groups. To limit who can modify policies for groups and ensure that compliance requirements are being met, when you implement critical security or compliance controls:

The Policies page displays deployed policies for all available environments. You can check a policy’s information (for example, description or enforcement status), and create and edit deployed policies:

A green checkmark in the first column indicates that the policy is enabled and enforced on all groups and projects within its scope. A gray checkmark indicates that the policy is currently not enabled.

Use the policy editor to create, edit, and delete policies:

On the left sidebar, select Search or go to and find your project.

Select Secure > Policies.

The policy editor has two modes:

You can switch between rule mode and YAML mode at any time. If your YAML has errors or unsupported data, rule mode turns off automatically. Fix the YAML first to use rule mode again.

Select Configure with a merge request to save and apply the changes.

The policy’s YAML is validated and any resulting errors are displayed.

Review and merge the resulting merge request.

If you are a project owner and a security policy project is not associated with this project, a security policy project is created and linked to this project when the merge request is created.

To simplify your policy.yml file, GitLab can automatically add comments after IDs, such as project IDs, group IDs, user IDs, or compliance framework IDs. The annotations help users identify the meaning or origin of each ID, which makes the policy.yml file easier to understand and maintain.

To enable this experimental feature, add an annotate_ids section to the experiments section in the .gitlab/security-policies/policy.yml file for your security policy project:

After you enable the option, any change to the security policies made with the GitLab policy editor creates annotation comments next to the IDs in the policy.yml file.

To apply the annotations, you must use the policy editor. If you edit the policy.yml file manually (for example, with a Git commit), the annotations are not applied.

When you apply annotations for the first time, GitLab creates the annotations for all IDs in the policy.yml file, including those in policies that you aren’t editing.

GitLab Security Policy Bot is an internal user that executes security policies across your GitLab instance. This bot is essential for security policies and scheduled pipelines to function properly.

The Security Policy Bot is responsible for:

The Security Policy Bot has the following characteristics:

The Security Policy Bot operates with minimal but essential permissions:

Be aware of the following limitations for the GitLab Security Policy Bot:

Vulnerability with abuse reports: GitLab Security Policy Bot instances can be banned or deleted through the abuse reporting system, which can prevent scheduled pipelines from running. Administrators should be aware that:

To prevent accidental disruption of security policies, administrators should exercise caution when processing abuse reports for internal user accounts.

If you experience issues with Security Policy Bot functionality:

If the scheduled pipelines are not running as configured:

If the policy job are failing:

If container scanning is not triggering as configured:

If the bot account no longer exists:

When working with security policies, consider these troubleshooting tips:

If you are still experiencing issues, you can view recent reported bugs and raise new unreported issues.

If you notice inconsistencies in any of the policies, such as policies that aren’t being enforced or approvals that are incorrect, you can manually force a resynchronization of the policies with the GraphQL resyncSecurityPolicies mutation:

Set fullPath to the path of the project or group to which the security policy project is assigned.

**Examples:**

Example 1 (unknown):
```unknown
---
scan_execution_policy:
- name: Enforce specified scans in every release pipeline
  description: This policy enforces a SAST scan for release branches
  enabled: true
  rules:
  - type: pipeline
    branches:
    - release/*
  actions:
  - scan: sast
  policy_scope:
    compliance_frameworks:
      - id: 2
      - id: 11
```

Example 2 (unknown):
```unknown
- name: Enforce specified scans in every default branch pipeline
  description: This policy enforces Secret Detection and SAST scans for the default branch
  enabled: true
  rules:
  - type: pipeline
    branches:
    - main
  actions:
  - scan: secret_detection
  - scan: sast
  policy_scope:
    groups:
      including:
        - id: 203
    projects:
      excluding:
        - id: 64
```

Example 3 (unknown):
```unknown
Branch name `update-policy-<timestamp>` does not follow the pattern `<branch_name_regex>`.
```

Example 4 (unknown):
```unknown
experiments:
  annotate_ids:
    enabled: true
```

---

## Issue analytics

**URL:** https://docs.gitlab.com/user/group/issues_analytics/

**Contents:**
- Issue analytics
- View issue analytics
  - Enhanced issue analytics

Issue analytics provide insights into the issues created each month in a group or project. A bar chart illustrates the number of issues opened and closed each month. A table displays the top 100 issues based on the global page filters, with the following details about each issue:

To view issue analytics:

On the left sidebar, select Search or go to and find your project or group.

Select Analyze > Issue analytics. To view the total number of issues for a month, hover over a bar.

Optional. To filter the results, in Search or filter results text box, enter your criteria:

Optional. To change the total number of months displayed, append the parameter months_back=n to the URL. For example, https://gitlab.com/groups/gitlab-org/-/issues_analytics?months_back=15 displays a chart with data for 15 months for the GitLab.org group.

You can also access issue analytics from the Value Streams Dashboard through the New issues drill-down report.

Enhanced issue analytics display the additional metric Issues closed, which represents the total number of resolved issues in your group over a selected period. You can use this metric to improve the overall turn-around time and value delivered to your customers.

---

## Deploy keys

**URL:** https://docs.gitlab.com/user/project/deploy_keys/

**Contents:**
- Deploy keys
- Scope
- Permissions
  - Security implications
- View deploy keys
- Create a project deploy key
- Create a public deploy key
- Grant project access to a public deploy key
  - Edit project access permissions of a deploy key
- Revoke project access of a deploy key

Use deploy keys to access repositories that are hosted in GitLab. In most cases, you use deploy keys to access a repository from an external host, like a build server or Continuous Integration (CI) server.

Depending on your needs, you might want to use a deploy token to access a repository instead.

Deploy keys can’t be used for Git operations if external authorization is enabled.

A deploy key has a defined scope when it is created:

You cannot change a deploy key’s scope after creating it.

A deploy key is given a permission level when it is created:

You can change a deploy key’s permission level after creating it. Changing a project deploy key’s permissions only applies for the current project.

If a push that uses a deploy key triggers additional processes, the creator of the key must be authorized. For example:

Deploy keys are meant to facilitate non-human interaction with GitLab. For example, you can use a deploy key to grant permissions to a script that automatically runs on a server in your organization.

You should use a service account, and create the deploy key with the service account. If you use another user account to create deploy keys, that user is granted privileges that persist until the deploy key is revoked.

As with all sensitive information, you should ensure only those who need access to the secret can read it. For human interactions, use credentials tied to users such as personal access tokens.

To help detect a potential secret leak, you can use the audit event feature.

To view the deploy keys available to a project:

The deploy keys available are listed:

The GitLab CLI provides a glab deploy-key list command.

A project deploy key is enabled when it is created. You can modify only a project deploy key’s name and permissions. If the deploy key is enabled in more than one project, you can’t modify the deploy key name.

The GitLab CLI provides a glab deploy-key add command.

To create a public deploy key:

You can modify only a public deploy key’s name.

To grant a public deploy key access to a project:

To edit the project access permissions of a deploy key:

To revoke a deploy key’s access to a project, you can disable it. Any service that relies on a deploy key stops working when the key is disabled.

To disable a deploy key:

What happens to the deploy key when it is disabled depends on the following:

There are a few scenarios where a deploy key fails to push to a protected branch.

This issue occurs because all deploy keys are associated to an account. Because the permissions for an account can change, this might lead to scenarios where a deploy key that was working is suddenly unable to push to a protected branch.

To resolve this issue, you can use the deploy keys API to create deploy keys for project service account users, instead of for your own users:

Create a service account user.

Create a personal access token for that service account user. This token must have at least the api scope.

Invite the service account user to the project.

Use the deploy key API to create a deploy key for the service account user:

If you need to find the keys that belong to a non-member or blocked user, you can use the Rails console to identify unusable deploy keys using a script similar to the following:

Deploy keys belong to a specific user and are deactivated when the user is blocked or removed from the instance. To keep a deploy key working when a user is removed, change its owner to an active user.

If you have the fingerprint of the deploy key, you can change the user associated with a deploy key with the following commands:

**Examples:**

Example 1 (unknown):
```unknown
curl --request POST --header "PRIVATE-TOKEN: <service_account_access_token>" \
  --header "Content-Type: application/json" \
  --data '{"title": "My deploy key", "key": "ssh-rsa AAAA...", "can_push": "true"}' \
  --url "https://gitlab.example.com/api/v4/projects/5/deploy_keys/"
```

Example 2 (unknown):
```unknown
ghost_user_id = Users::Internal.ghost.id

DeployKeysProject.with_write_access.find_each do |deploy_key_mapping|
  project = deploy_key_mapping.project
  deploy_key = deploy_key_mapping.deploy_key
  user = deploy_key.user

  access_checker = Gitlab::DeployKeyAccess.new(deploy_key, container: project)

  # can_push_for_ref? tests if deploy_key can push to default branch, which is likely to be protected
  can_push = access_checker.can_do_action?(:push_code)
  can_push_to_default = access_checker.can_push_for_ref?(project.repository.root_ref)

  next if access_checker.allowed? && can_push && can_push_to_default

  if user.nil? || user.id == ghost_user_id
    username = 'none'
    state = '-'
  else
    username = user.username
    user_state = user.state
  end

  puts "Deploy key: #{deploy_key.id}, Project: #{project.full_path}, Can push?: " + (can_push ? 'YES' : 'NO') +
       ", Can push to default branch #{project.repository.root_ref}?: " + (can_push_to_default ? 'YES' : 'NO') +
       ", User: #{username}, User state: #{user_state}"
end
```

Example 3 (unknown):
```unknown
k = Key.find_by(fingerprint: '5e:51:92:11:27:90:01:b5:83:c3:87:e3:38:82:47:2e')
k.user_id = User.find_by(username: 'anactiveuser').id
k.save()
```

---

## Administer users

**URL:** https://docs.gitlab.com/administration/administer_users/

**Contents:**
- Administer users
- User accounts
- User management

Administer and manage users in GitLab Self-Managed.

---

## Create a project

**URL:** https://docs.gitlab.com/user/project/

**Contents:**
- Create a project
- Create a blank project
- Create a project from a built-in template
  - Create a project from the HIPAA Audit Protocol template
- Create a project from a custom template
- Create a project that uses SHA-256 hashing
  - Why SHA-256?
- Related topics

You have different options to create a project. You can create a blank project, create a project from built-in or custom templates, or create a project with git push.

To create a blank project:

Built-in templates populate a new project with files to help you get started. These templates are sourced from the project-templates and pages groups. Anyone can contribute to built-in project templates.

To create a project from a built-in template:

If a user creates a project from a template, or imports a project, they are shown as the author of the imported items, which retain the original timestamp from the template or import. This can make items appear as if they were created before the user’s account existed.

Imported objects are labeled as By <username> on <timestamp>. Before GitLab 17.1, the label was suffixed with (imported from GitLab).

The HIPAA Audit Protocol template contains issues for audit inquiries in the HIPAA Audit Protocol published by the U.S Department of Health and Human Services.

To create a project from the HIPAA Audit Protocol template:

Custom project templates are available for your instance and group.

To create a project from a custom template:

The availability of this feature is controlled by a feature flag. For more information, see the history. This feature is available for testing, but not ready for production use.

You can select SHA-256 hashing for a project only when you create the project. Git does not support migrating to SHA-256 later, or migrating back to SHA-1.

To create a project that uses SHA-256 hashing:

By default, Git uses the SHA-1 hashing algorithm to generate a 40-character ID for objects such as commits, blobs, trees, and tags. The SHA-1 algorithm was proven to be insecure when Google was able to produce a hash collision. The Git project is not yet impacted by these kinds of attacks because of the way Git stores objects.

In SHA-256 repositories, the algorithm generates a 64-character ID instead of a 40-character ID. The Git project determined that the SHA-256 feature is safe to use when they removed the experimental label.

Federal regulations, such as NIST and CISA guidelines, which FedRamp enforces, have set a due date in 2030 to stop using SHA-1 and encourage agencies to move away from SHA-1 earlier, if possible.

---

## Infrastructure as Code with OpenTofu and GitLab

**URL:** https://docs.gitlab.com/user/infrastructure/iac/

**Contents:**
- Infrastructure as Code with OpenTofu and GitLab
- Terraform and OpenTofu support
- Quickstart an OpenTofu project in pipelines
- Build and host your own Terraform CI/CD templates
- Related topics

To manage your infrastructure with GitLab, you can use the integration with OpenTofu to define resources that you can version, reuse, and share:

Watch a video overview of the features GitLab provides with the integration with OpenTofu.

The following examples primarily use OpenTofu, but they can work with Terraform as well.

GitLab integrates with both Terraform and OpenTofu. Most features are fully compatible, including:

For simplicity, the GitLab documentation refers primarily to OpenTofu. However, differences between the Terraform and OpenTofu integration are documented.

OpenTofu can integrate with all Terraform-specific GitLab features with the GitLab OpenTofu CI/CD component.

You can add a validate, plan, and apply workflow to your pipeline by including the component:

For more information about templates, inputs, and how to use the OpenTofu CI/CD component, see the OpenTofu CI/CD component README.

Although GitLab no longer distributes the Terraform CI/CD templates and terraform-images (the underlying job images, including terraform), you can still use Terraform in GitLab pipelines.

To learn how to build and host your own templates and images, see the Terraform Images project.

**Examples:**

Example 1 (unknown):
```unknown
include:
  - component: gitlab.com/components/opentofu/validate-plan-apply@<VERSION>
    inputs:
      version: <VERSION>
      opentofu_version: <OPENTOFU_VERSION>
      root_dir: terraform/
      state_name: production

stages: [validate, build, deploy]
```

---

## Reserved project and group names

**URL:** https://docs.gitlab.com/user/reserved_names/

**Contents:**
- Reserved project and group names
- Rules for usernames, project and group names, and slugs
- Reserved project names
- Reserved group names

To not conflict with existing routes used by GitLab, some words cannot be used as project or group names. These words are listed in the path_regex.rb file, where:

Usernames must start and end with a letter (a-zA-Z) or a digit (0-9). For example, the following usernames satisfy these criteria:

Additionally, usernames and group names must contain only letters (a-zA-Z), digits (0-9), emoji, underscores (_), dots (.), parentheses (()), dashes (-), or spaces. For example:

Project names must contain only letters (a-zA-Z), digits (0-9), emoji, underscores (_), dots (.), pluses (+), dashes (-), or spaces. For example:

Usernames and project or group slugs:

Valid username slug examples:

Valid project slug examples:

Valid group slug examples:

You cannot create projects with the following names:

You cannot create groups with the following names, because they are reserved for top-level groups:

You cannot create subgroups with the following names:

---

## Remediate

**URL:** https://docs.gitlab.com/user/application_security/remediate/

**Contents:**
- Remediate
- Scope
- Document the vulnerability
- Remediate the vulnerability
- Dismiss the vulnerability

Remediation is the fourth phase of the vulnerability management lifecycle: detect, triage, analyze, remediate.

Remediation is the process of finding the root cause of a vulnerability and fixing the root cause, reducing the risks, or both. Use information contained in each vulnerability’s details page to help you understand the nature of the vulnerability and remediate it.

The objective of the remediation phase is to either resolve or dismiss a vulnerability. A vulnerability is resolved when either you’ve remediated the root cause or it’s no longer present. A vulnerability is dismissed when you’ve decided that no further effort is justified.

For a walkthrough of how GitLab Duo can help you analyze and remediate a vulnerability, see Use GitLab Duo to remediate an SQL injection.

The scope of the remediation phase is all those vulnerabilities that have been through the analysis phase and confirmed as needing further action. To list these vulnerabilities, use the following filter criteria in the vulnerability report:

If you’ve not already, create an issue to document your investigation and remediation work. This documentation provides a reference point if you discover a similar vulnerability, or if the same vulnerability is detected again.

Use the information gathered in the analysis phase to help guide you to remediate the vulnerability. It’s important to understand the root cause of the vulnerability so that remediation is effective.

For some vulnerabilities detected by SAST, GitLab can:

When the root cause of a vulnerability is remediated, resolve the vulnerability.

Change the vulnerability’s status to Resolved.

Document in the issue created for the vulnerability how it was remediated, then close the issue.

If a resolved vulnerability is reintroduced and detected again, its record is reinstated and its status set to Needs triage.

At any point during the remediation phase you might decide to dismiss the vulnerability, possibly because you have decided:

When you dismiss the vulnerability:

Provide a brief comment that states why you’ve dismissed it.

Change the vulnerability’s status to Dismissed.

If you created an issue for the vulnerability, add a comment noting that you dismissed the vulnerability, then close the issue.

A dismissed vulnerability is ignored if it’s detected in subsequent scans.

---

## Project settings

**URL:** https://docs.gitlab.com/user/project/settings/

**Contents:**
- Project settings
- Configure project features and permissions
  - Feature dependencies
- Toggle project features
- Turn off project analytics
- Turn off CVE identifier request in issues
- Turn off project email notifications
  - Turn off diff previews in project email notifications
- Configure merge request settings for a project
  - Delete the source branch on merge by default

To configure features and permissions for a project:

When you turn off a feature, the following additional features are also unavailable:

If you turn off the Issues feature, project users cannot use:

If you turn off Issues and Merge Requests, project users cannot use:

If you turn off Repository, project users cannot access:

The metrics dashboard requires read access to project environments and deployments. Users with access to the metrics dashboard can also access environments and deployments.

Available project features are visible and accessible to project members. You can turn off specific project features, so that they are not visible and accessible to project members, regardless of their role.

To toggle the availability of individual features in a project:

Turning off project analytics only removes the Analyze navigation item, but data is still being computed and available through the respective API endpoints.

By default, project analytics are displayed under the Analyze item in the left sidebar. To turn this feature off and remove the Analyze item from the left sidebar:

In some environments, users can submit a CVE identifier request in an issue.

To turn off the CVE identifier request option in issues in your project:

When you review code in a merge request and comment on a line of code, GitLab includes a few lines of the diff in the email notification to participants. Some organizational policies treat email as a less secure system, or might not control their own infrastructure for email. This can present risks to IP or access control of source code.

To turn off diff previews for a project:

Configure your project’s merge request settings:

In merge requests, you can change the default behavior so that the Delete the source branch checkbox is always selected.

The availability of this feature is controlled by a feature flag. For more information, see the history.

GitLab sends multiple expiry emails and triggers a related webhook before a project token expires. By default, GitLab only triggers these webhooks 7 days before the token expires. When this feature is enabled, GitLab also triggers these webhooks 60 days and 30 days before the token expires.

To enable additional triggers for these webhooks:

---

## Get started administering GitLab

**URL:** https://docs.gitlab.com/administration/get_started/

**Contents:**
- Get started administering GitLab
- Authentication
- Projects and groups
- Import projects
  - Popular project imports
- GitLab instance security
- Monitor GitLab performance
  - Components of monitoring
- Back up your GitLab data
  - Back up an instance

Get started with GitLab administration. Configure your organization and its authentication, then secure, monitor, and back up GitLab.

Authentication is the first step in making your installation secure.

Organize your environment by configuring your groups and projects.

Watch an overview of groups and projects.

You might have to import projects from external sources like GitHub, Bitbucket, or another instance of GitLab. Many external sources can be imported into GitLab.

For assistance with these data types, contact your GitLab account manager or GitLab Support about our professional migration services.

Security is an important part of the onboarding process. Securing your instance protects your work and your organization.

While this isn’t an exhaustive list, following these steps gives you a solid start for securing your instance.

After you’ve established your basic setup, you’re ready to review the GitLab monitoring services. Prometheus is our core performance monitoring tool. Unlike other monitoring solutions (for example, Zabbix or New Relic), Prometheus is tightly integrated with GitLab and has extensive community support.

GitLab provides backup methods to keep your data safe and recoverable. Whether you use a GitLab Self-Managed or a GitLab.com database, it’s crucial to back up your data regularly.

The routine differs, depending on whether you deployed with the Linux package or the Helm chart.

To back up a single-node installation that uses the Linux package, you can use a single Rake task.

Learn about backing up Linux package or Helm variations. This process backs up your entire instance, but does not back up the configuration files. Ensure those are backed up separately. Keep your configuration files and backup archives in a separate location to ensure the encryption keys are not kept with the encrypted data.

You can restore a backup only to the exact same version and type (Community Edition/Enterprise Edition) of GitLab on which it was created.

Backups of our production databases are taken hourly through disk snapshots and every 24 hours through wal-g base backups, with continuous archiving or WAL transaction log files streamed into GCS for point-in-time recovery.

All backups are encrypted. After 90 days, backups are deleted.

You should not use direct transfer or project export files to back up your data. Project export files do not always work for data backups, and not all items are exported.

In some situations the Rake task for backups might not be the most optimal solution. Here are some alternatives to consider if the Rake task does not work for you.

If your GitLab server contains a lot of Git repository data, you might find the GitLab backup script to be too slow. It can be especially slow when backing up to an offsite location.

Slowness typically starts at a Git repository data size of around 200 GB. In this case, you might consider using file system snapshots as part of your backup strategy. For example, consider a GitLab server with the following components:

The EC2 instance meets the requirements for an application data backup by taking an EBS snapshot. The backup includes all repositories, uploads, and PostgreSQL data.

If you’re running GitLab on a virtualized server, you can create VM snapshots of the entire GitLab server. It is common for a VM snapshot to require you to power down the server.

Geo provides local, read-only instances of your GitLab instances.

While GitLab Geo helps remote teams work more efficiently by using a local GitLab node, it can also be used as a disaster recovery solution. Learn more about using Geo as a disaster recovery solution.

Geo replicates your database, your Git repositories, and a few other assets. Learn more about the data types Geo replicates.

GitLab provides support for GitLab Self-Managed through different channels.

To get assistance for GitLab Self-Managed:

GitLab SaaS has 24/7 monitoring. Our full team of site reliability and production engineers is always on. Often, by the time you notice an issue, someone’s already looking into it.

To get assistance for GitLab SaaS:

Rate limits prevent denial-of-service or brute-force attacks. In most cases, you can reduce the load on your application and infrastructure by limiting the rate of requests from a single IP address.

Rate limits also improve the security of your application.

You can make changes to your default rate limits from the Admin area. For more information about configuration, see the Admin area page.

For more information about API and rate limits, see our API page.

Rate limits prevent denial-of-service or brute-force attacks. IP blocks usually happen when GitLab.com receives unusual traffic from a single IP address. The system views unusual traffic as potentially malicious based on rate limit settings.

Rate limits also improve the security of your application.

You can make changes to your default rate limits from the Admin area. For more information about configuration, see the Admin area page.

You can learn more about how to administer GitLab.

---

## Contributor analytics

**URL:** https://docs.gitlab.com/user/analytics/contributor_analytics/

**Contents:**
- Contributor analytics
- View contributor analytics
- View project commit history
- Retrieve project commits as an RSS feed

Contributor analytics give you an overview of the commits made by projects members to a project over time.

The contributor analytics page displays a line chart with the number of commits to the selected project branch over time, and line charts with the number of commits by each project member.

To view contributor analytics for a project:

On the left sidebar, select Search or go to and find your project.

Select Analyze > Contributor analytics.

From the Branches (main) dropdown list, select the branch you want to view commits for.

To view the number of commits made on a specific day, hover over the line chart.

Optional. To display commits only for a specific time period, select the pause icons ( status-paused ) and slide them along the horizontal axis:

To view a list of commits made by project members per day:

On the left sidebar, select Search or go to and find your project.

Select Analyze > Contributor analytics.

From the Branches (main) dropdown list, select the branch you want to view commits for.

To view the number of commits made by the members on a specific day, hover over the line chart.

Optional. Filter the results.

To view the list of commits to the project as an RSS feed in Atom format:

---

## DevOps adoption by group

**URL:** https://docs.gitlab.com/user/group/devops_adoption/

**Contents:**
- DevOps adoption by group
- Feature adoption
- Data processing
- View DevOps adoption for groups
- Add a subgroup to DevOps adoption
- Remove a subgroup from DevOps adoption

DevOps adoption shows you how groups in your organization adopt and use GitLab features. This information is available for groups and instances.

Use DevOps adoption for groups to:

DevOps adoption shows feature adoption for development, security, and operations.

A feature shows as adopted when a group or subgroup has used the feature in a project in the last full calendar month. For example, if an issue was created in a project in a group, the group has adopted issues in that time.

The Overview tab illustrates the:

The Dev, Sec, and Ops tabs illustrate the features adopted in development, security, and operations by subgroup.

The DevOps adoption report excludes:

A weekly task processes data for DevOps adoption. This task is disabled until you access DevOps adoption for a group for the first time.

The data processing task updates the data on the first day of each month. If the monthly update fails, the task tries daily until it succeeds.

DevOps adoption data may take up to a minute to appear while GitLab processes the group’s data.

To view DevOps adoption:

To add a subgroup to the DevOps adoption report:

To remove a subgroup from the DevOps adoption report:

---

## Description templates

**URL:** https://docs.gitlab.com/user/project/description_templates/

**Contents:**
- Description templates
- Create a description template
- Create a merge request template
- Use the templates
  - Supported variables in merge request templates
  - Set instance-level description templates
  - Set group-level description templates
  - Set a default template for merge requests and issues
    - Priority of default description templates
- Example description template

Description templates standardize and automate how issues and merge requests are created in GitLab.

Description templates:

You can define templates to use as descriptions for your:

Projects inherit templates from their group and instance.

Create a new description template as a Markdown (.md) file inside the .gitlab/issue_templates/ directory in your repository.

To create a work item description template:

To check if this has worked correctly:

Similarly to issue templates, create a new Markdown (.md) file inside the .gitlab/merge_request_templates/ directory in your repository. Unlike issue templates, merge requests have additional inheritance rules that depend on the contents of commit messages and branch names. For more information, see creating merge requests.

To create a merge request description template for a project:

To check if this has worked correctly, create a new merge request and see if you can find your description template in the Choose a template dropdown list.

When you create or edit an issue or a merge request, it shows in the Choose a template dropdown list.

When you select a description template, its content is copied to the description text box.

To discard any changes to the description you’ve made after selecting the template: expand the Choose a template dropdown list and select Reset template.

You can create shortcut links to create an issue using a designated template. For example: https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Feature%20proposal. Read more about creating issues using a URL with prefilled values.

This feature is available only for the default template.

When you save a merge request for the first time, GitLab replaces these variables in your merge request template with their values:

You can set a description template at the instance level for issues and merge requests by using an instance template repository. You can also use the instance template repository for file templates.

You might also be interested in project templates that you can use when creating a new project in the instance.

With group-level description templates, you can select a project within the group to store your templates. Then, you can access these templates in other projects in the group. As a result, you can use the same templates in issues and merge requests in all the group’s projects.

To re-use templates you’ve created:

You might also be interested in templates for various file types in groups.

In a project, you can choose a default description template for new issues and merge requests. As a result, every time a new merge request or issue is created, it’s pre-filled with the text you entered in the template.

To set a default description template for merge requests, either:

Create a merge request template named Default.md (case-insensitive) and save it in .gitlab/merge_request_templates/. The Default.md template does not take priority over the default template set in project settings. For more information, see priority of default description templates.

Users on GitLab Premium and Ultimate: set the default template in project settings:

To set a default description template for issues, either:

Create an issue template named Default.md (case-insensitive) and save it in .gitlab/issue_templates/. The Default.md template does not take priority over the default template set in project settings. For more information, see priority of default description templates.

Users on GitLab Premium and Ultimate: set the default template in project settings:

Because GitLab merge request and issues support Markdown, you can use it to format headings, lists, and so on.

You can also provide issues_template and merge_requests_template attributes in the Projects REST API to keep your default issue and merge request templates up to date.

When you set issue description templates in various places, they have the following priorities in a project. The ones higher up override the ones below:

Merge requests have additional inheritance rules that depend on the contents of commit messages and branch names.

We use description templates for issues and merge requests in the .gitlab folder of the GitLab project, which you can refer to for some examples.

It’s possible to use quick actions in description templates to quickly add labels, assignees, and milestones. The quick actions are only executed if the user submitting the issue or merge request has the permissions to perform the relevant actions.

Here is an example of a bug report template:

**Examples:**

Example 1 (unknown):
```unknown
## Summary

<!-- HTML comments are not displayed -->
(Summarize the bug encountered concisely)

## Steps to reproduce

(How one can reproduce the issue - this is very important)

## Example Project

(If possible, create an example project here on GitLab.com that exhibits the problematic
behavior, and link to it here in the bug report.
If you are using an older version of GitLab, this will also determine whether the bug has been fixed
in a more recent version)

## What is the current bug behavior?

(What actually happens)

## What is the expected correct behavior?

(What you should see instead)

## Relevant logs and/or screenshots

(Paste any relevant logs - use code blocks (```) to format console output, logs, and code, as
it's very hard to read otherwise.)

## Possible fixes

(If you can, link to the line of code that might be responsible for the problem)

/label ~bug ~reproduced ~needs-investigation
/cc @project-manager
/assign @qa-tester
```

---

## Create Kubernetes clusters

**URL:** https://docs.gitlab.com/user/clusters/create/

**Contents:**
- Create Kubernetes clusters

You can use Infrastructure as Code (IaC) to create clusters on cloud providers. You connect the clusters to GitLab by using the agent for Kubernetes.

---

## Runbooks

**URL:** https://docs.gitlab.com/user/project/clusters/runbooks/

**Contents:**
- Runbooks
- Executable Runbooks
- Requirements
- Nurtch
- Configure an executable runbook with GitLab

Runbooks are a collection of documented procedures that explain how to carry out a particular process, be it starting, stopping, debugging, or troubleshooting a particular system.

Using Jupyter Notebooks and the Rubix library, users can get started writing their own executable runbooks.

Historically, runbooks took the form of a decision tree or a detailed step-by-step guide depending on the condition or system.

Modern implementations have introduced the concept of an “executable runbooks”, where, along with a well-defined process, operators can execute pre-written code blocks or database queries against a given environment.

The JupyterHub app offered with the GitLab Kubernetes integration now ships with Nurtch’s Rubix library, providing a simple way to create DevOps runbooks. A sample runbook is provided, showcasing common operations. While Rubix makes it simple to create common Kubernetes and AWS workflows, you can also create them manually without Rubix.

Watch this video for an overview of how this is accomplished in GitLab!

To create an executable runbook, you need:

Nurtch is the company behind the Rubix library. Rubix is an open-source Python library that makes it easy to perform common DevOps tasks inside Jupyter Notebooks. Tasks such as plotting Cloudwatch metrics and rolling your ECS/Kubernetes app are simplified down to a couple of lines of code. See the Nurtch Documentation for more information.

Follow this step-by-step guide to configure an executable runbook in GitLab using the components outlined previously and the pre-loaded demo runbook.

Create an OAuth application for JupyterHub.

When installing JupyterHub with Helm, use the following values:

After JupyterHub has been installed successfully, open the Jupyter Hostname in your browser. Select Sign in with GitLab button to sign in to JupyterHub and start the server. Authentication is enabled for any user of the GitLab instance with OAuth2. This button redirects you to a page at GitLab requesting authorization for JupyterHub to use your GitLab account.

Select Authorize, and GitLab redirects you to the JupyterHub application.

Select Start My Server to start the server in a few seconds.

To configure the runbook’s access to your GitLab project, you must enter your GitLab Access Token and your Project ID in the Setup section of the demo runbook:

Select the DevOps-Runbook-Demo folder located on the left panel.

Select the Nurtch-DevOps-Demo.ipynb runbook.

Jupyter displays the runbook’s contents in the right-hand side of the screen. The Setup section displays your PRIVATE_TOKEN and your PROJECT_ID. Enter these values, maintaining the single quotes as follows:

Update the VARIABLE_NAME on the last line of this section to match the name of the variable you’re using for your access token. In this example, our variable name is PRIVATE_TOKEN.

To configure the operation of a runbook, create and configure variables. For this example, we are using the Run SQL queries in Notebook section in the sample runbook to query a PostgreSQL database. The first four lines of the following code block define the variables that are required for this query to function:

Go to Settings > CI/CD > Variables to create the variables in your project.

Select Save variables.

In Jupyter, select the Run SQL queries in Notebook heading, and then select Run. The results are displayed inline as follows:

You can try other operations, such as running shell scripts or interacting with a Kubernetes cluster. Visit the Nurtch Documentation for more information.

**Examples:**

Example 1 (python):
```python
#-----------------------------------------------------------------------------
# The hub.config.GitLabOAuthenticator section must be customized!
#-----------------------------------------------------------------------------

hub:
  config:
    GitLabOAuthenticator:
      # Limit access to members of specific projects or groups or to specific users:
      # allowedGitlabGroups: [ "my-group-1", "my-group-2" ]
      # allowedProjectIds: [ 12345, 6789 ]
      # allowed_users: ["user-1", "user-2"]
      client_id: <Your OAuth Application ID>
      client_secret: <Your OAuth Application ID>
      enable_auth_state: true
      gitlab_url: https://gitlab.example.com
      oauth_callback_url: http://<Jupyter Hostname>/hub/oauth_callback
      scope:
        - read_user
        - read_api
        - openid
        - profile
        - email
    JupyterHub:
      authenticator_class: gitlab
   extraConfig:
     gitlab-config: |
        c.KubeSpawner.cmd = ['jupyter-labhub']
        c.GitLabOAuthenticator.scope = ['api read_repository write_repository']

        async def add_auth_env(spawner):
           '''
           We set user's id, login and access token on single user image to
           enable repository integration for JupyterHub.
           See: https://gitlab.com/gitlab-org/gitlab-foss/-/issues/47138#note_154294790
           '''
           auth_state = await spawner.user.get_auth_state()

           if not auth_state:
              spawner.log.warning("No auth state for %s", spawner.user)
              return

           spawner.environment['GITLAB_ACCESS_TOKEN'] = auth_state['access_token']
           spawner.environment['GITLAB_USER_EMAIL'] = auth_state['gitlab_user']['email']
           spawner.environment['GITLAB_USER_ID'] = str(auth_state['gitlab_user']['id'])
           spawner.environment['GITLAB_USER_LOGIN'] = auth_state['gitlab_user']['username']
           spawner.environment['GITLAB_USER_NAME'] = auth_state['gitlab_user']['name']

        c.KubeSpawner.pre_spawn_hook = add_auth_env

singleuser:
   defaultUrl: "/lab"
   image:
      name: registry.gitlab.com/gitlab-org/jupyterhub-user-image
      tag: latest
   lifecycleHooks:
      postStart:
         exec:
         command:
            - "sh"
            - "-c"
            - >
               git clone https://gitlab.com/gitlab-org/nurtch-demo.git DevOps-Runbook-Demo || true;
               echo "https://oauth2:${GITLAB_ACCESS_TOKEN}@${GITLAB_HOST}" > ~/.git-credentials;
               git config --global credential.helper store;
               git config --global user.email "${GITLAB_USER_EMAIL}";
               git config --global user.name "${GITLAB_USER_NAME}";
               jupyter serverextension enable --py jupyterlab_git

proxy:
   service:
      type: ClusterIP
```

Example 2 (unknown):
```unknown
PRIVATE_TOKEN = '<your_access_token>'
PROJECT_ID = '1234567'
```

Example 3 (unknown):
```unknown
VARIABLE_VALUE = project.variables.get('PRIVATE_TOKEN').value
```

Example 4 (unknown):
```unknown
%env DB_USER={project.variables.get('DB_USER').value}
%env DB_PASSWORD={project.variables.get('DB_PASSWORD').value}
%env DB_ENDPOINT={project.variables.get('DB_ENDPOINT').value}
%env DB_NAME={project.variables.get('DB_NAME').value}
```

---

## System notes

**URL:** https://docs.gitlab.com/user/project/system_notes/

**Contents:**
- System notes
- Show or filter system notes
  - On an epic
  - On an issue
  - On a merge request
- Privacy considerations
- Related topics

System notes are short descriptions that help you understand the history of events that occur during the lifecycle of a GitLab object, such as:

GitLab logs information about events triggered by Git or the GitLab application in system notes. System notes use the format <Author> <action> <time ago>.

By default, system notes do not display. When displayed, they are shown oldest first. If you change the filter or sort options, your selection is remembered across sections. For all item types except merge requests, the filtering options are:

Merge requests provide more granular filtering options.

On the left sidebar, select Search or go to and find your project.

Select Code > Merge requests and find your merge request.

For Sort or filter, select Show all activity to see all system notes. To narrow the types of system notes returned, select one or more of:

You can see only the system notes linked to objects you can access.

For example, if someone mentions your issue 111 in an issue in their private project:

---

## Roles and permissions

**URL:** https://docs.gitlab.com/user/permissions/

**Contents:**
- Roles and permissions
- Roles
  - Default roles
- Group members permissions
  - Analytics group permissions
  - Application security group permissions
  - CI/CD group permissions
  - Compliance group permissions
  - GitLab Duo group permissions
  - Groups group permissions

Roles define a user’s permissions in a group or project.

Users with administrator access have all permissions and can perform any action.

When you add a user to a group or project, you assign them a role. The role determines their permissions. Assign either a default role or a custom role.

A user can have different roles for each group and project. Users always retain the permissions for their highest role. For example, if a user has:

The user inherits the permissions for their Maintainer role in the project.

To view assigned roles, go to the Members page for a group or project.

The following default roles are available:

By default, all users can create top-level groups and change their usernames. Users with administrator access can change this behavior.

Any user can remove themselves from a group, unless they are the only Owner of the group.

The following table lists group permissions available for each role:

Group permission for analytics features including value streams, product analytics, and insights:

Group permissions for Application Security features including dependency management, security analyzers, security policies, and vulnerability management.

Group permissions for CI/CD features including runners, variables, and protected environments:

Group permissions for compliance features including compliance center, audit events, compliance frameworks, and licenses.

Group permissions for GitLab Duo:

Group permissions for group features:

Group permissions for wikis:

Group permissions for the package and container registry:

Group permissions for package registry:

Group permissions for repository features including merge requests, push rules, and deploy tokens.

Group permissions for user management:

Groups permissions for workspaces:

A user’s role determines what permissions they have on a project. The Owner role provides all permissions but is available only:

Personal namespace owners:

When you configure protected branch settings, selecting a role grants access to users with that role and all higher roles. For example, if you select Maintainers in the protected branch settings, users with both the Maintainer and Owner roles can perform the action.

For more information about how to manage project members, see members of a project.

The following tables list the project permissions available for each role.

Project permissions for analytics features including value streams, usage trends, product analytics, and insights.

Project permissions for application security features including dependency management, security analyzers, security policies, and vulnerability management.

GitLab CI/CD permissions for some roles can be modified by these settings:

Project Owners can perform any listed action, and can delete pipelines:

This table shows granted privileges for jobs triggered by specific roles.

Project Owners can do any listed action, but no users can push source and LFS together. Guest users and members with the Reporter role cannot do any of these actions.

Project permissions for compliance features including compliance center, audit events, compliance frameworks, and licenses.

Project permissions for GitLab Duo:

Project permissions for model registry and model experiments.

Project permissions for monitoring including error tracking and incident management:

Project permissions for issues:

Project permissions for tasks:

Project permissions for OKRs:

Project permissions for wikis:

Project permissions for container registry:

Project permissions for package registry:

Project permissions for project features:

On GitLab Self-Managed, users with the Guest role are able to perform this action only on public and internal projects (not on private projects). External users must be given explicit access (at least the Reporter role) even if the project is internal. Users with the Guest role on GitLab.com are only able to perform this action on public projects because internal visibility is not available.

Applies only to comments on Design Management designs.

Guest users can access GitLab Releases for downloading assets but are not allowed to download the source code nor see repository information like commits and release evidence.

If the tag is protected, this depends on the access given to Developers and Maintainers.

For GitLab Self-Managed, project access tokens are available in all tiers. For GitLab.com, project access tokens are supported in the Premium and Ultimate tier (excluding trial licenses).

A Maintainer or Owner can’t change project features visibility level if project visibility is set to private.

Project permissions for GitLab Pages:

Project permissions for repository features including source code, branches, push rules, and more:

Project permissions for merge requests:

Project permissions for user management.

When you add a member to a subgroup, they inherit the membership and permission level from the parent groups. This model allows access to nested groups if you have membership in one of its parents.

For more information, see subgroup memberships.

Users with the Minimal Access role do not:

Owners must explicitly add these users to the specific subgroups and projects.

You can use the Minimal Access role with SAML SSO for GitLab.com groups to control access to groups and projects in the group hierarchy. You can set the default role to Minimal Access for members automatically added to the top-level group through SSO.

Because of an outstanding issue, when a user with the Minimal Access role:

To work around the issue, give these users at least the Guest role to any project or subgroup in the parent group. Guest users consume a license seat in the Premium tier but do not in the Ultimate tier.

---

## Connecting a Kubernetes cluster with GitLab

**URL:** https://docs.gitlab.com/user/clusters/agent/

**Contents:**
- Connecting a Kubernetes cluster with GitLab
- Supported Kubernetes versions for GitLab features
- Kubernetes deployment workflows
  - GitOps workflow
  - GitLab CI/CD workflow
- Agent connection technical details
- Receptive agents
- Kubernetes integration glossary
- Related topics

You can connect your Kubernetes cluster with GitLab to deploy, manage, and monitor your cloud-native solutions.

To connect a Kubernetes cluster to GitLab, you must first install an agent in your cluster.

The agent runs in the cluster, and you can use it to:

For more details about the agent’s purpose and architecture, see the architecture documentation.

You must deploy a separate agent to every cluster you want to connect to GitLab. The agent was designed with strong multi-tenancy support. To simplify maintenance and operations you should run only one agent per cluster.

An agent is always registered in a GitLab project. After an agent is registered and installed, the agent connection to the cluster can be shared with other projects, groups, and users. This approach means you can manage and configure your agent instances from GitLab itself, and you can scale a single installation to multiple tenants.

GitLab supports the following Kubernetes versions. If you want to run GitLab in a Kubernetes cluster, you might need a different version of Kubernetes:

You can upgrade your Kubernetes version to a supported version at any time:

GitLab aims to support a new minor Kubernetes version three months after its initial release. GitLab supports at least three production-ready Kubernetes minor versions at any given time.

When a new version of Kubernetes is released, we will:

When installing the agent, use a Helm version compatible with your Kubernetes version. Other versions of Helm might not work. For a list of compatible versions, see the Helm version support policy.

Support for deprecated APIs can be removed from the GitLab codebase when we drop support for the Kubernetes version that only supports the deprecated API.

Some GitLab features might work on versions not listed here. This epic tracks support for Kubernetes versions.

You can choose from two primary workflows. The GitOps workflow is recommended.

GitLab recommends using Flux for GitOps. To get started, see Tutorial: Set up Flux for GitOps.

In a CI/CD workflow, you configure GitLab CI/CD to use the Kubernetes API to query and update your cluster.

This workflow is considered push-based, because GitLab pushes requests from GitLab CI/CD to your cluster.

This workflow has a weaker security model. You should not use a CI/CD workflow for production deployments.

The agent opens a bidirectional channel to KAS for communication. This channel is used for all communication between the agent and KAS:

For detailed information about channel routing, see Routing KAS requests in the agent.

Receptive agents allow GitLab to integrate with Kubernetes clusters that cannot establish a network connection to the GitLab instance, but can be connected to by GitLab. For example, this can occur when:

When this feature is enabled, GitLab connects to the agent with the provided URL. You can use agents and receptive agents simultaneously.

This glossary provides definitions for terms related to the GitLab Kubernetes integration.

---

## Use a project as a Go package

**URL:** https://docs.gitlab.com/user/project/use_project_as_go_package/

**Contents:**
- Use a project as a Go package
- Authenticate Go requests to private projects
- Authenticate Git requests
- Disable Go module fetching for private projects
- Authenticate Git requests to private subgroups
  - Workaround: use .git in the module name
- Fetch Go modules from Geo secondary sites
  - Use SSH to access the Geo secondary server
  - Use HTTP to access the Geo secondary

To use a project as a Go package, use the go get and godoc.org discovery requests. You can use the meta tags:

If you make a go get request with invalid HTTP credentials, you receive a 404 error. You can find the HTTP credentials in ~/.netrc (MacOS and Linux) or ~/_netrc (Windows).

To authenticate Go requests, create a .netrc file with the following information:

On Windows, Go reads ~/_netrc instead of ~/.netrc.

The go command does not transmit credentials over insecure connections. It authenticates HTTPS requests made by Go, but does not authenticate requests made through Git.

If Go cannot fetch a module from a proxy, it uses Git. Git uses a .netrc file to authenticate requests, but you can configure other authentication methods.

Configure Git to either:

Embed credentials in the request URL:

Use SSH instead of HTTPS:

To fetch modules or packages, Go uses the environment variables:

If the Go module is located under a private subgroup like gitlab.com/namespace/subgroup/go-module, then the Git authentication doesn’t work. It happens, because go get makes an unauthenticated request to discover the repository path. Without an HTTP authentication by using a .netrc file, GitLab responds with gitlab.com/namespace/subgroup.git to prevent a security risk of exposing the project’s existence for unauthenticated users. As a result, the Go module cannot be downloaded.

Unfortunately, Go doesn’t provide any means of request authentication apart from .netrc. In a future version, Go may add support for arbitrary authentication headers. Follow golang/go#26232 for details.

There is a way to skip go get request and force Go to use a Git authentication directly, but it requires a modification of the module name. From Go documentation:

If the module path has a VCS qualifier (one of .bzr, .fossil, .git, .hg, .svn) at the end of a path component, the go command will use everything up to that path qualifier as the repository URL. For example, for the module example.com/foo.git/bar, the go command downloads the repository at example.com/foo.git using Git, expecting to find the module in the bar subdirectory.

The Go module should be correctly fetched after this change. For example, GOPRIVATE=gitlab.com/namespace/* go mod tidy.

Use Geo to access Git repositories that contain Go modules on secondary Geo servers.

You can use SSH or HTTP to access the Geo secondary server.

To access the Geo secondary server with SSH:

Reconfigure Git on the client to send traffic for the primary to the secondary:

Ensure the client is set up for SSH access to GitLab repositories. You can test this on the primary, and GitLab replicates the public key to the secondary.

The go get request generates HTTP traffic to the primary Geo server. When the module download starts, the insteadOf configuration sends the traffic to the secondary Geo server.

You must use persistent access tokens that replicate to the secondary server. You cannot use CI/CD job tokens to fetch Go modules with HTTP.

To access the Geo secondary server with HTTP:

Add a Git insteadOf redirect on the client:

Generate a personal access token and add the credentials in the client’s ~/.netrc file:

The go get request generates HTTP traffic to the primary Geo server. When the module download starts, the insteadOf configuration sends the traffic to the secondary Geo server.

**Examples:**

Example 1 (unknown):
```unknown
machine gitlab.example.com
login <gitlab_user_name>
password <personal_access_token>
```

Example 2 (unknown):
```unknown
git config --global url."https://${user}:${personal_access_token}@gitlab.example.com".insteadOf "https://gitlab.example.com"
```

Example 3 (unknown):
```unknown
git config --global url."git@gitlab.example.com:".insteadOf "https://gitlab.example.com/"
```

Example 4 (unknown):
```unknown
git config --global url."git@gitlab-secondary.example.com".insteadOf "https://gitlab.example.com"
git config --global url."git@gitlab-secondary.example.com".insteadOf "http://gitlab.example.com"
```

---

## Contribution analytics

**URL:** https://docs.gitlab.com/user/group/contribution_analytics/

**Contents:**
- Contribution analytics
  - Tracking
- View contribution analytics
- Contribution analytics with ClickHouse

Contribution analytics provide an overview of the contribution events your group’s members made in the last week, month, or three months. Interactive bar charts and a detailed table show contribution events (push events, issues, and merge requests) by group member.

Use contribution analytics to get insights into team activity and individual performance, and use this information for:

Contribution analytics are based on push events, because they provide a more reliable view of contributions than unique commits. Counting unique commits may lead to duplication when commits are pushed across multiple branches. By tracking push events instead, GitLab ensures that every contribution is counted accurately.

For example, a user pushes three commits to branch A in one push. Later, the user pushes two of those commits from branch A to branch B. GitLab records five commits, though the user made three unique commits.

To view contribution analytics:

On the left sidebar, select Search or go to and find your group.

Select Analyze > Contribution analytics.

Optional. Filter the results:

Optional. To view a group member’s contributions, either:

To retrieve metrics for user contributions, you can also use the GraphQL API.

On GitLab.com, contribution analytics run through the ClickHouse Cloud cluster. On GitLab Self-Managed, when you configure the ClickHouse integration, the ClickHouse events table is automatically populated from the PostgreSQL events table. This process might take some time for large installations. After the table is fully synchronized, new events become available in ClickHouse with a delay of about three minutes.

For more information, see:

---

## Analyze

**URL:** https://docs.gitlab.com/user/application_security/analyze/

**Contents:**
- Analyze
- Scope
- Risk analysis
- Analysis strategies
  - Prioritize vulnerabilities of highest severity
  - Prioritize vulnerabilities that have a solution available
- Vulnerability details and action

Analysis is the third phase of the vulnerability management lifecycle: detect, triage, analyze, remediate.

Analysis is the process of evaluating the details of a vulnerability to determine if it can and should be remediated. Vulnerabilities can be triaged in bulk but analysis must be done individually. As part of a risk management framework, analysis helps ensure resources are applied where they’re most effective. Use the data contained in the security dashboard and the vulnerability report to prioritize analysis of vulnerabilities according to their severity and associated risk.

The scope of the analysis phase is all those vulnerabilities that have been through the triage phase and confirmed as needing further action.

Filter the vulnerability report to identify vulnerabilities needing analysis:

You should conduct vulnerability analysis according to a risk assessment framework. If you’re not already using a risk assessment framework, consider the following:

Calculating the risk score of a vulnerability depends on criteria that are specific to your organization. A basic risk score formula is:

Risk = Likelihood x Impact

Both the likelihood and impact numbers vary according to the vulnerability and your environment. Determining these numbers and calculating a risk score may require some information not available in GitLab. Instead, you must calculate these according to your risk management framework. After calculating these, record them in the issue you raised for the vulnerability.

Generally, the amount of time and effort spent on a vulnerability should be proportional to its risk. For example, you might choose to analyze only vulnerabilities of critical and high risk and dismiss the rest. You should make this decision according to your risk threshold for vulnerabilities.

Try these strategies to focus on the most important vulnerabilities first.

To help identify vulnerabilities of highest severity:

If you’ve not already done this in the triage phase, use the Vulnerability Prioritizer CI/CD component to help prioritize vulnerabilities for analysis.

For each group, filter the vulnerability report to prioritize vulnerabilities needing analysis:

Prioritize vulnerability analysis of your highest-risk projects - for example, applications deployed to customers.

Some vulnerabilities have a solution available, for example “Upgrade from version 13.2 to 13.8”. This reduces the time taken to analyze and remediate these vulnerabilities. Some solutions are available only if GitLab Duo is enabled.

Filter the vulnerability report to identify vulnerabilities that have a solution available.

Every vulnerability has a vulnerability page which contains details including when it was detected, how it was detected, its severity rating, and a complete log. Use this information to help analyze a vulnerability.

The following tips may also help you analyze a vulnerability:

After analyzing each confirmed vulnerability you should either:

If you confirm a vulnerability:

If you dismiss a vulnerability you must provide a brief comment that states why you’ve dismissed it. Dismissed vulnerabilities are ignored if detected again. Vulnerability records are retained for audit purposes (until they are archived). You can manage their lifecycle by updating their status as needed.

---

## Get started managing your infrastructure

**URL:** https://docs.gitlab.com/user/get_started/get_started_managing_infrastructure/

**Contents:**
- Get started managing your infrastructure
- Step 1: Use code to manage your infrastructure
- Step 2: Interact with Kubernetes clusters
- Step 3: Document procedures with runbooks

With the rise of DevOps and SRE approaches, infrastructure management has become codified and automatable. You can now employ software development best practices in your infrastructure management.

The daily tasks of a classical operations team have changed and are more similar to traditional software development. At the same time, software engineers are more likely to control their whole DevOps lifecycle, including deployments and delivery.

GitLab offers various features to speed up and simplify your infrastructure management practices.

Infrastructure management is part of a larger workflow:

GitLab has deep integrations with Terraform to run Infrastructure as Code pipelines and support various processes. Terraform is considered the standard in cloud infrastructure provisioning. The various GitLab integrations help you:

For more information, see:

The GitLab integration with Kubernetes helps you to install, configure, manage, deploy, and troubleshoot cluster applications. With the GitLab agent for Kubernetes, you can connect clusters behind a firewall, have real-time access to API endpoints, perform pull-based or push-based deployments for production and non-production environments, and much more.

For more information, see:

Runbooks are a collection of documented procedures that explain how to carry out a task, like starting, stopping, debugging, or troubleshooting a system. In GitLab, runbooks are created in Markdown. They can include a variety of elements, including text, code snippets, images, and links.

Runbook in GitLab integrate with other GitLab features, like CI/CD pipelines and issues. You can trigger runbooks automatically based on specific events or conditions, like when a pipeline is successful or an issue is created. In addition, users can link runbooks to issues, merge requests, and other GitLab objects.

For more information, see:

---

## Productivity analytics

**URL:** https://docs.gitlab.com/user/analytics/productivity_analytics/

**Contents:**
- Productivity analytics
- Charts
- View productivity analytics

Productivity analytics display information about merge requests for groups.

Use productivity analytics to identify:

To view merge request data for projects, use merge request analytics.

Productivity analytics display the following charts:

---

## DevOps Research and Assessment (DORA) metrics

**URL:** https://docs.gitlab.com/user/analytics/dora_metrics/

**Contents:**
- DevOps Research and Assessment (DORA) metrics
- Deployment frequency
  - How deployment frequency is calculated
  - How to improve deployment frequency
- Lead time for changes
  - How lead time for changes is calculated
    - Deployments finishing before merge
  - How to improve lead time for changes
- Time to restore service
  - How time to restore service is calculated

DevOps Research and Assessment (DORA) metrics deliver evidence-based insights about your DevOps performance. These four key measurements demonstrate how fast your team delivers changes and how well those changes perform in production. When tracked consistently, DORA metrics highlight improvement opportunities across your software delivery process.

Use DORA metrics for strategic decision-making, to justify process improvement investments to stakeholders, or to compare your team’s performance against industry benchmarks to identify competitive advantages.

The four DORA metrics measure two critical aspects of DevOps:

Velocity metrics track how quickly your organization delivers software:

Stability metrics measure your software’s reliability:

The dual focus on velocity and stability metrics helps leaders find the optimal balance between speed and quality in their delivery workflows.

For a video explanation, see DORA metrics: User analytics and GitLab speed run: DORA metrics.

Deployment frequency is the frequency of successful deployments to production over the given date range (hourly, daily, weekly, monthly, or yearly).

Software leaders can use the deployment frequency metric to understand how often the team successfully deploys software to production, and how quickly the teams can respond to customers’ requests or new market opportunities. High deployment frequency means you can get feedback sooner and iterate faster to deliver improvements and features.

In GitLab, deployment frequency is measured by the average number of deployments per day to a given environment, based on the deployment’s end time (its finished_at property). GitLab calculates the deployment frequency from the number of finished deployments on the given day. Only successful deployments (Deployment.statuses = success) are counted.

The calculation takes into account the production environment tier or the environments named production/prod. The environment must be part of the production deployment tier for its deployment information to appear on the graphs.

You can configure DORA metrics for different environments by specifying other under the environment_tiers parameter in the .gitlab/insights.yml file.

Deployment frequency is calculated as the average (mean), unlike the other DORA metrics that use the median, which is preferred because it provides a more accurate and reliable view of performance. This difference is because deployment frequency was added to GitLab prior to adopting the DORA framework, and the calculation of this metric remained unchanged when it was incorporated into other reports. Issue 499591 proposes offering the option to customize the calculation method for each metric, choosing between mean and median.

The first step is to benchmark the cadence of code releases between groups and projects. Next, you should consider:

Lead time for changes is the amount of time it takes a code change to get into production.

Lead time for changes is not the same as Lead time. In value stream analytics, lead time measures the time it takes for work on an issue to move from the moment it’s requested (Issue created) to the moment it’s fulfilled and delivered (Issue closed).

For software leaders, lead time for changes reflects the efficiency of CI/CD pipelines and visualizes how quickly work is delivered to customers. Over time, the lead time for changes should decrease, while your team’s performance should increase. Low lead time for changes means more efficient CI/CD pipelines.

GitLab calculates lead time for changes based on the number of seconds to successfully deliver a merge request into production: from merge request merge time (when the merge button is clicked) to code successfully running in production, without adding the coding_time to the calculation. Data is aggregated right after the deployment is finished, with a slight delay.

By default, lead time for changes supports measuring only one branch operation with multiple deployment jobs (for example, from development to staging to production on the default branch). When a merge request gets merged on staging, and then on production, GitLab interprets them as two deployed merge requests, not one.

In rare cases, a deployment may finish before its associated merge request is merged.

This scenario can happen when:

In this situation, GitLab uses the formula: GREATEST(0, deployment_finished_at - merge_request_merged_at). The GREATEST function ensures that lead time values are never negative, by returning 0 instead of a negative value. This function prevents database constraint violations while maintaining data integrity.

The first step is to benchmark the CI/CD pipelines’ efficiency between groups and projects. Next, you should consider:

Time to restore service is the amount of time it takes an organization to recover from a failure in production.

For software leaders, time to restore service reflects how long it takes an organization to recover from a failure in production. Low time to restore service means the organization can take risks with new innovative features to drive competitive advantages and increase business results.

In GitLab, time to restore service is measured as the median time an incident was open on a production environment. GitLab calculates the number of seconds an incident was open on a production environment in the given time period. This assumes:

The first step is to benchmark the team response and recover from service interruptions and outages, between groups and projects. Next, you should consider:

Change failure rate is how often a change causes a failure in production.

Software leaders can use the change failure rate metric to gain insights into the quality of the code being shipped. High change failure rate may indicate an inefficient deployment process or insufficient automated testing coverage.

In GitLab, change failure rate is measured as the percentage of deployments that cause an incident in production in a given time period. GitLab calculates change failure rate as the number of incidents divided by the number of deployments to a production environment. This calculation assumes:

For example, if you have 10 deployments (considering one deployment per day) with two incidents on the first day and one incident on the last day, then your change failure rate is 0.3.

The first step is to benchmark the quality and stability, between groups and projects. Next, you should consider:

The availability of this feature is controlled by a feature flag. For more information, see the history.

This feature is an experiment. To join the list of users testing this feature, here is a suggested test flow. If you find a bug, open an issue here. To share your use cases and feedback, comment in epic 11490.

Unlike the default calculation of lead time for changes, this calculation rule allows measuring multi-branch operations with a single deployment job for each operation. For example, from development job on development branch, to staging job on staging branch, to production job on production branch.

This calculation rule has been implemented by updating the dora_configurations table with the target branches that are part of the development flow. This way, GitLab can recognize the branches as one, and filter out other merge requests.

This configuration changes how daily DORA metrics are calculated for the selected project, but doesn’t affect other projects, groups, or users.

This feature supports only project-level propagation.

To do this, in the Rails console run the following command:

To update an existing configuration, run the following command:

Deployment frequency is calculated based on the deployments record, which is created for typical push-based deployments. These deployment records are not created for pull-based deployments, for example when Container Images are connected to GitLab with an agent.

To track DORA metrics in these cases, you can create a deployment record using the Deployments API. You must set the environment name where the deployment tier is configured, because the tier variable is specified for the given environment, not for the deployments. For more information, see how to track deployments of an external deployment tool.

You can measure the time to restore service and change failure rate for incident management.

For PagerDuty, you can set up a webhook to automatically create a GitLab incident for each PagerDuty incident. This configuration requires you to make changes in both PagerDuty and GitLab.

For other incident management tools, you can set up the HTTP integration, and use it to automatically:

DORA metrics are displayed in the following analytics features:

The following table provides an overview of the DORA metrics’ availability in projects and groups.

The following table provides an overview of the DORA metrics’ data aggregation in different charts.

**Examples:**

Example 1 (unknown):
```unknown
my_project = Project.find_by_full_path('group/subgroup/project')
Dora::Configuration.create!(project: my_project, branches_for_lead_time_for_changes: ['master', 'main'])
```

Example 2 (unknown):
```unknown
my_project = Project.find_by_full_path('group/subgroup/project')
record = Dora::Configuration.where(project: my_project).first
record.branches_for_lead_time_for_changes = ['development', 'staging', 'master', 'main']
record.save!
```

---

## Repository analytics for groups

**URL:** https://docs.gitlab.com/user/group/repositories_analytics/

**Contents:**
- Repository analytics for groups
- View group repository analytics
- Coverage metrics
- Download coverage data
- Related topics

Repository analytics for groups provides test coverage data for all projects in a group.

You can use group repository analytics to:

Support for subgroups is proposed in issue 273527.

To view repository analytics for a group:

The group Repository analytics page displays:

Current group code coverage:

Average test coverage: A graph that shows the average test coverage across all projects in your group for the last 30 days.

Latest test coverage results: A list of the most recent coverage data for each project in your group. Select projects from the dropdown list to filter the results.

You can download a CSV file containing historical coverage data for projects in your group.

To download the coverage data:

---

## CVE ID request

**URL:** https://docs.gitlab.com/user/application_security/cve_id_request/

**Contents:**
- CVE ID request
- Prerequisites
- Submit a CVE ID request
- CVE assignment

For any public project, you can request a CVE identifier (ID).

A CVE identifier is assigned to a publicly-disclosed software vulnerability. GitLab is a CVE Numbering Authority (CNA).

Assigning a CVE ID to a vulnerability in your project helps your users stay secure and informed. For example, dependency scanning tools can detect when vulnerable versions of your project are used as a dependency.

A common vulnerability workflow is:

To submit a CVE ID Request the following prerequisites must be met:

To submit a CVE ID request:

Go to the vulnerability’s issue and select Create CVE ID Request. The new issue page of the GitLab CVE project opens.

In the Title box, enter a brief description of the vulnerability.

In the Description box, enter the following details:

GitLab updates your CVE ID request issue when:

After a CVE identifier is assigned, you can reference it as required. Details of the vulnerability submitted in the CVE ID request are published according to your schedule.

---

## Troubleshooting projects

**URL:** https://docs.gitlab.com/user/project/troubleshooting/

**Contents:**
- Troubleshooting projects
- An error occurred while fetching commit data
- Find projects using an SQL query
- Clear a project’s or repository’s cache
- Find projects that are pending deletion
  - Transfer a project using console
- Delete a project using console
- Toggle a feature for all projects within a group

When working with projects, you might encounter the following issues, or require alternate methods to complete specific tasks.

When you visit a project, the message An error occurred while fetching commit data might be displayed if you use an ad blocker in your browser. The solution is to disable your ad blocker for the GitLab instance you are trying to access.

While in a Rails console session, you can find and store an array of projects based on a SQL query:

If a project or repository has been updated but the state is not reflected in the UI, you may need to clear the project’s or repository’s cache. You can do so through a Rails console session and one of the following:

Commands that change data can cause damage if not run correctly or under the right conditions. Always run commands in a test environment first and have a backup instance ready to restore.

If you need to find all projects marked for deletion but that have not yet been deleted, start a Rails console session and run the following:

If transferring a project through the UI or API is not working, you can attempt the transfer in a Rails console session.

If a project cannot be deleted, you can attempt to delete it through Rails console.

Commands that change data can cause damage if not run correctly or under the right conditions. Always run commands in a test environment first and have a backup instance ready to restore.

If this fails, display why it doesn’t work with:

While toggling a feature in a project can be done through the projects API, you may need to do this for a large number of projects.

To toggle a specific feature, you can start a Rails console session and run the following function:

Commands that change data can cause damage if not run correctly or under the right conditions. Always run commands in a test environment first and have a backup instance ready to restore.

To find features that can be toggled, run pp p.project_feature. Available permission levels are listed in concerns/featurable.rb.

**Examples:**

Example 1 (javascript):
```javascript
# Finds projects that end with '%ject'
projects = Project.find_by_sql("SELECT * FROM projects WHERE name LIKE '%ject'")
=> [#<Project id:12 root/my-first-project>>, #<Project id:13 root/my-second-project>>]
```

Example 2 (unknown):
```unknown
## Clear project cache
ProjectCacheWorker.perform_async(project.id)

## Clear repository .exists? cache
project.repository.expire_exists_cache
```

Example 3 (unknown):
```unknown
projects = Project.where(pending_delete: true)
projects.each do |p|
  puts "Project ID: #{p.id}"
  puts "Project name: #{p.name}"
  puts "Repository path: #{p.repository.full_path}"
end
```

Example 4 (unknown):
```unknown
p = Project.find_by_full_path('<project_path>')

# To set the owner of the project
current_user = p.creator

# Namespace where you want this to be moved
namespace = Namespace.find_by_full_path("<new_namespace>")

Projects::TransferService.new(p, current_user).execute(namespace)
```

---

## Badges

**URL:** https://docs.gitlab.com/user/project/badges/

**Contents:**
- Badges
- Available badges
- Pipeline status badges
  - Display only non-skipped status
- Test coverage report badges
  - Test coverage limits and badge colors
  - Change the default limits
- Latest release badges
- Project badges
  - Example project badge: Pipeline Status

Badges are a unified way to present condensed pieces of information about your projects. A badge consists of a small image and a URL that the image points to. In GitLab, badges are displayed on the project overview page, below the project description. You can use badges at the project and group level.

GitLab provides the following pipeline badges:

GitLab also supports adjusting badge style.

The pipeline status badge indicates the status of the latest pipeline in a project. Depending on the status of your pipeline, the badge can have one of the following values:

You can access a pipeline status badge image by using the following link:

To make the pipeline status badge display only the last non-skipped status, use the ?ignore_skipped=true query parameter:

The test coverage report badge indicates the percentage of code that is tested in a project. The value is calculated based on the latest successful pipeline.

You can access a test coverage report badge image by using the following link:

You can define the regular expression for the code coverage that each job log is matched against. This means that each job in the pipeline can have the test coverage percentage value defined.

To get the coverage report from a specific job, add the job=coverage_job_name parameter to the URL. For example, you can use code similar to the following to add the test coverage report badge of the coverage job to a Markdown file:

The following table shows the default test coverage limits and badge colors:

Up to means up to, but not including, the upper bound.

You can override the default limits by passing the following query parameters in the coverage report badge URL:

If you set an invalid boundary, GitLab automatically adjusts it to be valid. For example, if you set min_good to 80 and min_acceptable to 85, GitLab sets min_acceptable to 79 (min_good - 1) because the minimum acceptable value cannot be higher than the minimum good value.

The latest release badge indicates the latest release tag name for your project. If there is no release, it shows none.

You can access a latest release badge image by using the following link:

By default, the badge fetches the release sorted using the released_at time with the ?order_by query parameter.

You can change the width of the release name field by using the value_width parameter (Introduced in GitLab 15.10). The value must be between 1 and 200, and the default value is 54. If you set an out of range value, GitLab automatically adjusts it to the default value.

Badges can be added to a project by Maintainers or Owners, and are visible on the project’s Overview page. If you find that you have to add the same badges to several projects, you may want to add them at the group level.

A common project badge presents the GitLab CI pipeline status.

To add this badge to a project:

Badges can be added to a group by Owners, and are visible on the Overview page of any project that belongs to the group. By adding a badge to a group, you add and enforce a project-level badge for all projects in the group.

While these badges appear as project-level badges in the codebase, they cannot be edited or deleted at the project level.

If you need individual badges for each project, either:

To view badges available in a project or group:

To add a new badge to a project or group:

You can view the exact link for your badges. Then you can use the link to embed the badge in your HTML or Markdown pages.

The pipeline status badge is based on specific Git revisions (branches). Ensure you select the appropriate branch to view the correct pipeline status.

Custom badges allows changing the following attributes:

Colors can be passed as a named color, for example blue or hexadecimal representation like fff or 7bc043 (without leading #).

You can access a latest release badge image by using the following link:

For example, you can use placeholders to create a badge for the latest tag:

You can customize how badges appear in your project:

You can customize the following aspects of all badge types:

Pipeline, coverage, release, and custom badges can be rendered in different styles by adding the style=style_name parameter to the URL. Two styles are available:

The text for the left side on the badge can be customize. For example, to differentiate between multiple coverage jobs that run in the same pipeline.

Customize the badge key text by adding the key_text=custom_text parameter to the URL:

Customize the badge key width by adding the key_width=width parameter to the URL:

Customize the badge value width by adding the value_width=width parameter to the URL:

Custom badges give you complete control over both sides of the badge. Unlike standard badges that show predefined information (like pipeline status), custom badges let you:

In addition to the basic customization options, custom badges support these additional customization options:

You can add a custom badge by using the following link:

For example, you can use placeholders to create a badge for the latest tag:

Placeholders allow badges to expose otherwise-private information, such as the default branch or commit SHA when the project is configured to have a private repository. This behavior is intentional, as badges are intended to be used publicly. Avoid using these placeholders if the information is sensitive.

Customize the text displayed on the right side by adding the value_text=text parameter to the URL:

Customize the background color on the right side by adding the value_color=color parameter to the URL:

Colors can be passed as:

Customize the background color on the left side by adding the value_color=color parameter to the URL:

Colors can be passed as:

To add a custom badge with an image:

On the left sidebar, select Search or go to and find your project or group.

Select Settings > General.

Under Name, enter the name for the badge.

Under Link, enter the URL that the badge should point to.

Under Badge image URL, enter the URL for your custom image. For example, to use an image from your repository:

To use custom images generated through a pipeline, see accessing the latest job artifacts by URL.

To edit a badge in a project or group:

To delete a badge in a project or group:

Badges associated with a group can be edited or deleted only at the group level.

Both the URL a badge points to and the image URL can contain placeholders, which are evaluated when displaying the badge. The following placeholders are available:

Placeholders allow badges to expose otherwise-private information, such as the default branch or commit SHA when the project is configured to have a private repository. This behavior is intentional, as badges are intended to be used publicly. Avoid using these placeholders if the information is sensitive.

**Examples:**

Example 1 (unknown):
```unknown
https://gitlab.example.com/<namespace>/<project>/badges/<branch>/pipeline.svg
```

Example 2 (unknown):
```unknown
https://gitlab.example.com/<namespace>/<project>/badges/<branch>/pipeline.svg?ignore_skipped=true
```

Example 3 (unknown):
```unknown
https://gitlab.example.com/<namespace>/<project>/badges/<branch>/coverage.svg
```

Example 4 (unknown):
```unknown
![coverage](https://gitlab.example.com/<namespace>/<project>/badges/<branch>/coverage.svg?job=coverage)
```

---

## Triage

**URL:** https://docs.gitlab.com/user/application_security/triage/

**Contents:**
- Triage
- Scope
- Risk analysis
- Triage strategies
  - Prioritize vulnerabilities of significant risk
  - Dismiss vulnerabilities of low risk

Triage is the second phase of the vulnerability management lifecycle: detect, triage, analyze, remediate.

Triage is an ongoing process of evaluating each vulnerability to decide which need attention now and which are not as critical. High-risk vulnerabilities are separated from medium or low risk threats. It may not be possible or feasible to analyze and remediate every vulnerability. As part of a risk management framework, triage helps ensure resources are applied where they’re most effective. It’s best to triage vulnerabilities often, so that the number of vulnerabilities per triage cycle is small and manageable.

The objective of the triage phase is to either confirm or dismiss each vulnerability. A confirmed vulnerability continues to the analysis phase but a dismissed vulnerability does not.

Use the data contained in the security dashboard, the security inventory, and the vulnerability report to help triage vulnerabilities efficiently and effectively.

The scope of the triage phase includes all vulnerabilities that have not yet been assessed.

Filter the vulnerability report to identify vulnerabilities needing triage:

You should conduct vulnerability triage according to a risk assessment framework. Depending on your industry or geographical location, compliance with a framework might be required by law. If not, you should use a respected risk assessment framework, for example:

Generally, the amount of time and effort spent on a vulnerability should be proportional to its risk. For example, your triage strategy might be that only vulnerabilities of critical and high risk continue to the analysis phase and the remainder are dismissed. You should make this decision according to your risk threshold for vulnerabilities.

After you triage a vulnerability you should change its status to either:

When you dismiss a vulnerability you must provide a brief comment that states why it has been dismissed. Dismissed vulnerabilities are ignored if detected in subsequent scans. Vulnerability records are permanent but you can change a vulnerability’s status at any time.

Try these strategies to focus on the most important vulnerabilities first.

Prioritize vulnerabilities according to their risk.

Bulk triage low-risk vulnerabilities to focus on the most important ones.

---

## Insights

**URL:** https://docs.gitlab.com/user/project/insights/

**Contents:**
- Insights
- View insights
  - Drill down on charts
  - Create a report deep link
- Configuration
  - Default file
    - Example
  - Parameters
    - title
    - description

Insights are interactive bar charts that display the number of items (for example, bugs created) per month.

Configure insights and create custom reports for your projects and groups to explore data such as:

To view insights for a project or group:

You can drill down into the data of all charts whose query.data_source is issuables.

To view a drill-down report of the data for a specific priority or severity in a month:

You can direct users to a specific report in insights by using the deep-linked URL.

To create a deep link, append the report key to the end of the insights report URL. For example, a GitLab report with the key bugsCharts has the deep link URL https://gitlab.com/gitlab-org/gitlab/insights/#/bugsCharts.

GitLab reads insights from the default configuration file.

Project insights are configured with the .gitlab/insights.yml file in the project. If a project doesn’t have a configuration file, it uses the group configuration.

The .gitlab/insights.yml file is a YAML file where you define:

In the .gitlab/insights.yml file:

The following example shows a single definition that displays a report with one chart:

The following example shows a complete configuration for a .gitlab/insights.yml file that displays three charts:

The following table lists the chart parameters:

Use title to update the chart title. The title displays on the insights report.

Use description to add a description of the chart. The description displays above the chart, below the title.

Use type to define the chart type.

The dora data source supports the bar and line chart types.

Use query to define the data source and filtering conditions for the chart.

The legacy format without the data_source parameter is still supported:

Use data_source to define the data source that exposes the data.

Use query.params.issuable_type to define the type of issuable to create a chart for.

Use query.params.issuable_state to filter by the current state of the queried issuable.

By default, the opened state filter is applied.

Use query.params.filter_labels to filter by labels applied to the queried issuable.

By default, no label filter is applied. All defined labels must be applied to the issuable for it to be selected.

Use query.params.collection_labels to group issuables by the configured labels. Grouping is not applied by default.

Use query.group_by to define the X-axis of the chart.

Use query.period_limit to define how far back in time to query issuables (using the query.period_field).

The unit is related to the value defined in query.group_by. For example, if you defined query.group_by: 'day', and query.period_limit: 365, the chart displays data from the last 365 days.

By default, default values are applied depending on the query.group_by you defined.

Use query.period_field to define the timestamp field by which to group issuables.

The period_field is automatically set to:

Until this bug, is resolved, you may see created_at in place of merged_at. created_at is used instead.

Use DORA-specific queries with the dora data source to create a DORA chart definition.

Use query.metric to define the DORA metrics to query.

Use query.group_by to define the X-axis of your chart.

Use query.period_limit to define how far the metrics are queried in the past (default: 15). The maximum period is 180 days or 6 months.

Use query.environment_tiers to define an array of environments to include the calculation.

Use projects to limit where issuables are queried from:

Use projects.only to specify the projects from which issuables are queried.

Projects listed in this parameter are ignored when:

You can configure insights for projects and groups. After you create a .gitlab/insights.yml file in a project, you can also use it for the project’s group.

A custom .gitlab/insights.yml file overrides the default configuration. To retain the original configuration, copy the content of the default configuration file as a base.

To configure project insights, create a file .gitlab/insights.yml either:

To configure group insights:

**Examples:**

Example 1 (unknown):
```unknown
bugsCharts:
  title: "Charts for bugs"
  charts:
    - title: "Monthly bugs created"
      description: "Open bugs created per month"
      type: bar
      query:
        data_source: issuables
        params:
          issuable_type: issue
          issuable_state: opened
          filter_labels:
            - bug
          group_by: month
          period_limit: 24
```

Example 2 (unknown):
```unknown
.projectsOnly: &projectsOnly
  projects:
    only:
      - 3
      - groupA/projectA
      - groupA/subgroupB/projectC

bugsCharts:
  title: "Charts for bugs"
  charts:
    - title: "Monthly bugs created"
      description: "Open bugs created per month"
      type: bar
      <<: *projectsOnly
      query:
        data_source: issuables
        params:
          issuable_type: issue
          issuable_state: opened
          filter_labels:
            - bug
          group_by: month
          period_limit: 24

    - title: "Weekly bugs by severity"
      type: stacked-bar
      <<: *projectsOnly
      query:
        data_source: issuables
        params:
          issuable_type: issue
          issuable_state: opened
          filter_labels:
            - bug
          collection_labels:
            - S1
            - S2
            - S3
            - S4
          group_by: week
          period_limit: 104

    - title: "Monthly bugs by team"
      type: line
      <<: *projectsOnly
      query:
        data_source: issuables
        params:
          issuable_type: merge_request
          issuable_state: opened
          filter_labels:
            - bug
          collection_labels:
            - Manage
            - Plan
            - Create
          group_by: month
          period_limit: 24
```

Example 3 (unknown):
```unknown
monthlyBugsCreated:
  title: "Monthly bugs created"
```

Example 4 (unknown):
```unknown
monthlyBugsCreated:
  title: "Monthly bugs created"
  description: "Open bugs created per month"
```

---

## Manage projects

**URL:** https://docs.gitlab.com/user/project/working_with_projects/

**Contents:**
- Manage projects
- Project overview
- Find the Project ID
- View projects
  - View all projects on an instance
  - View projects you work with
  - View inactive projects
  - View only projects you own
- View project activity
- Filter projects by language

Most work in GitLab is done in a project. Files and code are saved in projects, and most features are in the scope of projects.

When you select a project, the Project overview page shows the project contents:

For public projects, and members of internal and private projects with permissions to view the project’s code, the project overview page shows:

For users without permission to view the project’s code, the overview page shows:

You can access a project by using its ID instead of its name at https://gitlab.example.com/projects/<id>. For example, if in your personal namespace alex you have a project my-project with the ID 123456, you can access the project either at https://gitlab.example.com/alex/my-project or https://gitlab.example.com/projects/123456.

In GitLab 17.5 and later, you can also use https://gitlab.example.com/-/p/<id> for this endpoint.

You might need the project ID if you want to interact with the project using the GitLab API.

To find the project ID:

Use the Projects list to view:

To view the projects on your GitLab instance:

If you are not authenticated, the list shows public projects only.

To view the projects you have interacted with:

You can also view your starred and personal projects from your personal profile:

A project is inactive when it is either pending deletion or it has been archived.

To view all inactive projects:

Each inactive project in the list displays a badge to indicate that the project is either archived or pending deletion.

If the project is pending deletion, the list also shows:

To view only the projects you are the owner of:

To view the activity of a project:

On the left sidebar, select Search or go to and find your project.

Select Manage > Activity.

Optional. To filter activity by contribution type, select a tab:

GitLab removes project activity events older than three years from the events table for performance reasons.

You can filter projects by the programming language they use. To do this:

A list of projects that use the selected language is displayed.

You can star projects you use frequently to make them easier to find.

When you leave a project:

Use the project general settings to edit your project details.

A project’s repository name defines its URL.

When you change the repository path, users may experience issues if they push to, or pull from, the old URL. For more information on redirect duration and its side-effects, see redirects when renaming repositories.

To rename a repository:

Add a project avatar to help visually identify your project. If you do not add an avatar, GitLab displays the first letter of your project name as the default project avatar.

To add a project avatar, use one of the following methods:

If you haven’t uploaded an avatar to your project settings, GitLab looks for a file named logo in your repository to use as the default project avatar.

To add a logo file to use as your project avatar:

To upload an avatar in your project settings:

By default, when you delete a project for the first time, it enters a pending deletion state. Delete a project again to remove it immediately.

This action adds a background job to mark a project for deletion. On GitLab.com, the project is deleted after 30 days. On GitLab Self-Managed, you can modify the retention period through the instance settings.

If the user who scheduled the project deletion loses access to the project before the deletion occurs (for example, by leaving the project, having their role downgraded, or being banned from the project), the deletion job instead restores the project, and the project is no longer scheduled for deletion.

If the user who scheduled the project deletion regains Owner role or administrator access before the job runs, then the job removes the project permanently.

You can also delete projects using the Rails console.

On GitLab.com and GitLab Dedicated, after a project is deleted, its data is retained for 30 days, and immediate deletion is not available. If you must delete a project immediately on GitLab.com, you can open a support ticket.

If you do not want to wait for the configured retention period to delete a project, you can delete the project immediately.

To immediately delete a project scheduled for deletion:

This action deletes the project and all related resources, including issues and merge requests.

To restore a project pending deletion:

Archive a project to make it read-only and preserve its data for future reference.

When you archive a project:

To archive a project:

To archive a project from the Your work list view directly:

This action is also available on other list pages.

When you unarchive a project:

Projects that were archived as part of group archiving cannot be unarchived individually. You must unarchive the parent group to unarchive all its projects and subgroups.

Deployed Pages are not automatically restored. You must rerun the pipeline to restore Pages.

To unarchive a project:

To unarchive a project from the Your work list view directly:

This action is also available on other list pages.

Transfer a project to move it to a different group. A project transfer includes:

Members with inherited membership in the project lose access unless they are also members of the target group. The project inherits new member permissions from the group you transfer it to.

The project’s path also changes, so make sure to update the URLs to the project components where necessary.

New project-level labels are created for issues and merge requests if matching group labels don’t already exist in the target namespace.

If a project contains issues assigned to an epic, and that epic is not available in the target group, GitLab creates a copy of the epic in the target group. When you transfer multiple projects with issues assigned to the same epic, GitLab creates a separate copy of that epic in the target group for each project.

Errors during the transfer process may lead to data loss of the project’s components or dependencies of end users.

You must have at least the Maintainer role for the group you are transferring to.

You must be the Owner of the project you transfer.

The group must allow creation of new projects.

For projects where the container registry is enabled:

The project must not have a security policy. If a security policy is assigned to the project, it is automatically unassigned during the transfer.

If the root namespace changes, you must remove npm packages that follow the naming convention from the project. After you transfer the project you can either:

To transfer a project:

You are redirected to the project’s new page and GitLab applies a redirect. For more information about repository redirects, see repository path changes.

Administrators can also transfer projects from the Admin area.

When you transfer a project from a namespace licensed for GitLab.com Premium or Ultimate to GitLab Free:

You can view a list of all your projects and manage them with the Actions menu.

To manage projects with the Actions menu:

The following actions are available depending on the state of your project:

You can add compliance frameworks to projects in a group that has a compliance framework.

You can use LDAP to manage group membership.

You cannot use LDAP groups to manage project access, but you can use the following workaround.

GitLab repositories are usually accessed with a namespace and a project name. When migrating frequently accessed repositories to GitLab, however, you can use project aliases to access those repositories with the original name. Accessing repositories through a project alias reduces the risk associated with migrating such repositories.

This feature is only available on Git over SSH. Also, only GitLab administrators can create project aliases, and they can only do so through the API. For more information, see the Project Aliases API documentation.

After an administrator creates an alias for a project, you can use the alias to clone the repository. For example, if an administrator creates the alias gitlab for the project https://gitlab.com/gitlab-org/gitlab, you can clone the project with git clone git@gitlab.com:gitlab.git instead of git clone git@gitlab.com:gitlab-org/gitlab.git.

---

## Value Streams Dashboard

**URL:** https://docs.gitlab.com/user/analytics/value_streams_dashboard/

**Contents:**
- Value Streams Dashboard
- Panels
  - Overview
  - DevSecOps metrics comparison
  - DORA Performers score
    - Filter the panel by project topic
  - Projects by DORA metric
- Enable or disable overview background aggregation
- View the Value Streams Dashboard
  - For groups

The Value Streams Dashboard is a customizable dashboard you can use to identify trends, patterns, and opportunities for digital transformation improvements. The centralized UI in the Value Streams Dashboard acts as the single source of truth (SSOT), where all stakeholders can access and view the same set of metrics that are relevant to the organization. The Value Streams Dashboard includes panels that visualize the following metrics:

With the Value Streams Dashboard, you can:

For a click-through demo, see the Value Stream Management product tour.

To view the Value Streams Dashboard as an analytics dashboard for a group:

Data displayed on the Value Streams Dashboard is continuously collected in the backend. If you upgrade to the Ultimate tier, you get access to historical data, and can view metrics about past GitLab usage and performance.

The Value Streams Dashboard panels have a default configuration, but you can also customize the dashboard panels.

The Overview panel provides a holistic view of the top-level namespace activity by visualizing key DevOps metrics. The panel displays metrics for:

Data displayed in the Overview panel is collected by batch processing. GitLab stores record counts for each subgroup in the database, then aggregates the record counts to provide metrics for the top-level group. Data is aggregated monthly, around the end of the month, on a best-effort basis depending on the load on GitLab systems.

For more information, see epic 10417.

The DevSecOps metrics comparison panels display metrics for a group or project over the past six months. These visualizations help you understand whether the key DevSecOps metrics improve month over month. The Value Stream Dashboard displays three DevSecOps metric comparison panels:

In each comparison panel, you can:

When you hover over a metric, a tooltip displays an explanation of the metric and a link to the related documentation page.

The Change % column also indicates a percentage increase or decrease of the metric value from the previous month, compared to six months prior.

The Trend column displays sparklines to help you identify patterns in metric trends (such as seasonal changes) over time. The sparkline color ranges from blue to green, where green indicates a positive trend, and blue indicates a negative trend.

The DORA Performers score panel is a group-level bar chart that visualizes the status of the organization’s DevOps performance levels across different projects for the last full calendar month.

The chart is a breakdown of your project’s DORA scores, categorized as high, medium, or low. The chart aggregates all the child projects in the group.

The chart bars display the total number of projects per score category, calculated monthly. To exclude data from the chart (for example, Not included), in the legend select the series you want to exclude. Hovering over each bar reveals a dialog that explains the score’s definition.

For example, if a project has a high score for deployment frequency (velocity), it means that the project has one or more deploys to production per day.

To learn more, see the blog post Inside DORA Performers score in GitLab Value Streams Dashboard.

When you customize dashboards with a YAML configuration, you can filter the displayed projects by assigned topics.

If multiple topics are provided, all topics must match for the project to be included in the results.

The Projects by DORA metric panel is a group-level table that lists the status of the organization’s DevOps performance levels across projects.

The table lists all projects with their DORA metrics, aggregating data from child projects in groups and subgroups. The metrics are aggregated for the last full calendar month.

You can sort the projects by metric values, helping you identify high, medium, and low-performing projects. For further investigation, you can select a project name to drill down into that project’s page.

To enable or disable the overview count aggregation for the Value Streams Dashboard:

To retrieve aggregated usage counts in the group, use the GraphQL API.

To view the Value Streams Dashboard for a group:

From Analytics Dashboards:

From Value Stream Analytics:

To view the Value Streams Dashboard as an analytics dashboard for a project:

You can schedule reports using the CI/CD component Value Streams Dashboard Scheduled Reports tool. This tool saves time and effort by eliminating the need to manually search for the right dashboard with the relevant data, so that you can focus on analyzing insights. By scheduling reports, you can ensure that the decision-makers in your organization receive proactive, timely, and relevant information.

The Scheduled Reports tool collects metrics from projects or groups through the public GitLab GraphQL API, then builds a report using GitLab Flavored Markdown, and opens an issue in a specified project. The issue includes a comparison metrics table in Markdown format.

See an example scheduled report. To learn more, see the blog post New Scheduled Reports Generation tool simplifies value stream management.

You can customize the Value Streams Dashboard and configure what subgroups and projects to include in the page.

To customize the default content of the page, you need to create a YAML configuration file in a project of your choice. In this file, you can define various settings and parameters, such as title, description, and number of panels. The file is schema-driven and managed with version control systems like Git. This enables tracking and maintaining a history of configuration changes, reverting to previous versions if necessary, and collaborating effectively with team members. Query parameters can still be used to override the YAML configuration.

Before you customize the dashboard panels, you must select a project to store your YAML configuration file.

After you have set up the project, set up the configuration file:

The filters subfield on the queryOverrides field can be used to customize the data displayed in a panel.

Filters for the ai_impact_table visualization.

Filters for the dora_performers_score visualization.

Filters for the usage_overview visualization.

The dora_chart visualization was deprecated in GitLab 18.5.

Filters for the dora_chart visualization.

The following table provides an overview of the metrics available in the Value Streams Dashboard, along with their descriptions and the name of the drill-down report where they are displayed.

The following metrics do not depend on using Jira:

**Examples:**

Example 1 (unknown):
```unknown
panels:
  - title: 'My dora performers scores'
    visualization: dora_performers_score
    queryOverrides:
      namespace: group/my-custom-group
      filters:
        projectTopics:
          - JavaScript
          - Vue.js
```

Example 2 (unknown):
```unknown
# version - The latest version of the analytics dashboard schema
version: '2'

# title - Change the title of the Value Streams Dashboard.
title: 'Custom Dashboard title'

# description - Change the description of the Value Streams Dashboard. [optional]
description: 'Custom description'

# panels - List of panels that contain panel settings.
#   title - Change the title of the panel.
#   visualization - The type of visualization to be rendered
#   gridAttributes - The size and positioning of the panel
#   queryOverrides.namespace - The Group or Project path to use for the chart panel
#   queryOverrides.filters.excludeMetrics - Hide rows by metric ID from the chart panel.
panels:
  - title: 'Group usage overview'
    visualization: usage_overview
    queryOverrides:
      namespace: group
      filters:
        include:
          - groups
          - projects
    gridAttributes:
      yPos: 1
      xPos: 1
      height: 1
      width: 12
  - title: 'Group dora and issue metrics'
    visualization: ai_impact_table
    queryOverrides:
      namespace: group
      filters:
        excludeMetrics:
          - deployment_frequency
          - deploys
    gridAttributes:
      yPos: 2
      xPos: 1
      height: 12
      width: 12
  - title: 'My dora performers scores'
    visualization: dora_performers_score
    queryOverrides:
      namespace: group/my-project
      filters:
        projectTopics:
          - ruby
          - javascript
    gridAttributes:
      yPos: 26
      xPos: 1
      height: 12
      width: 12
```

---

## Organize work with projects

**URL:** https://docs.gitlab.com/user/project/organize_work_with_projects/

**Contents:**
- Organize work with projects

In GitLab, a project is a broad container for all aspects of your development work. Projects contain a code repository, collaborative tools, project management features, and CI/CD capabilities. Use your project to organize all the data for your development project:

Projects can be available publicly, internally, or privately. GitLab does not limit the number of private projects you can create.

---

## Analyze GitLab usage

**URL:** https://docs.gitlab.com/user/analytics/

**Contents:**
- Analyze GitLab usage
- Analytics features
  - End-to-end insight & visibility analytics
  - Productivity analytics
  - Developer analytics
  - CI/CD analytics
  - Security analytics
- Metric glossary

GitLab provides different types of analytics insights for instances, groups, and projects. Analytics features require different roles and permissions for projects and groups.

Use these features to gain insights into your overall software development lifecycle.

Use these features to gain insights into the productivity of your team on issues and merge requests.

Use these features to gain insights into developer productivity and code coverage.

Use these features to gain insights into CI/CD performance.

Use these features to gain insights into security vulnerabilities and metrics.

The following glossary provides definitions for common development metrics used in analytics features, and explains how they are measured in GitLab.

For more definitions, see also the Value Streams Dashboard metrics and drill-down reports.

---

## Code intelligence

**URL:** https://docs.gitlab.com/user/project/code_intelligence/

**Contents:**
- Code intelligence
- Configure code intelligence
  - With the CI/CD component
  - Add CI/CD jobs for code intelligence
- View code intelligence results
- Find references

Code intelligence adds code navigation features common to interactive development environments (IDE), including:

Code intelligence is built into GitLab and powered by LSIF (Language Server Index Format), a file format for precomputed code intelligence data. GitLab processes one LSIF file per project, and Code intelligence does not support different LSIF files per branch.

SCIP is the next evolution of tooling for indexing source code. You can use it to power code navigation features, such as:

GitLab does not natively support SCIP for code intelligence. However, you can use the SCIP CLI to convert indexes generated with SCIP tooling into a LSIF-compatible file. For discussions on native SCIP support, see issue 412981.

For progress on upcoming code intelligence enhancements, see epic 4212.

To see how your language is best supported, review the indexers recommended by Sourcegraph.

GitLab provides a CI/CD component to configure code intelligence in your .gitlab-ci.yml file. The component supports these languages:

To contribute more languages to the component, open a merge request in the Code intelligence component project.

Add a GitLab CI/CD component to your project’s .gitlab-ci.yml. For example, this job generates the LSIF artifact for golang:

For configuration instructions for the code intelligence component, check the README for each supported language.

For more configuration details, see Use a component.

To enable code intelligence for a project, add GitLab CI/CD jobs to your project’s .gitlab-ci.yml.

Add a job to your .gitlab-ci.yml configuration. This job generates the SCIP index and converts it to LSIF for use in GitLab:

Depending on your CI/CD configuration, you might need to run the job manually, or wait for it to run as part of an existing pipeline.

Add a job (code_navigation) to your .gitlab-ci.yml configuration to generate the index:

Depending on your CI/CD configuration, you might need to run the job manually, or wait for it to run as part of an existing pipeline.

GitLab limits the artifact produced by the code generation jobs to 200 MB by the (ci_max_artifact_size_lsif) artifact application limit. On GitLab Self-Managed instances, an instance administrator can change this value.

After the job succeeds, browse your repository to see code intelligence information:

On the left sidebar, select Search or go to and find your project.

Select Code > Repository.

Go to the file in your repository. If you know the filename, either:

Point to lines of code. Items on that line with information from code intelligence display a dotted line underneath them:

Select the item to learn more information about it.

Use code intelligence to see all uses of an object:

On the left sidebar, select Search or go to and find your project.

Select Code > Repository.

Go to the file in your repository. If you know the filename, either:

Point to the object, then select it.

In the dialog, select:

**Examples:**

Example 1 (unknown):
```unknown
include:
  - component: ${CI_SERVER_FQDN}/components/code-intelligence/golang-code-intel@v0.0.3
    inputs:
      golang_version: ${GO_VERSION}
```

Example 2 (unknown):
```unknown
"code_navigation":
   rules:
   - if: $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH # the job only needs to run against the default branch
   image: node:latest
   stage: test
   allow_failure: true # recommended
   script:
      - npm install -g @sourcegraph/scip-typescript
      - npm install
      - scip-typescript index
      - |
         env \
         TAG="v0.4.0" \
         OS="$(uname -s | tr '[:upper:]' '[:lower:]')" \
         ARCH="$(uname -m | sed -e 's/x86_64/amd64/')" \
         bash -c 'curl --location "https://github.com/sourcegraph/scip/releases/download/$TAG/scip-$OS-$ARCH.tar.gz"' \
         | tar xzf - scip
      - chmod +x scip
      - ./scip convert --from index.scip --to dump.lsif
   artifacts:
      reports:
         lsif: dump.lsif
```

Example 3 (unknown):
```unknown
code_navigation:
   rules:
   - if: $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH # the job only needs to run against the default branch
  image: sourcegraph/lsif-go:v1
  allow_failure: true # recommended
  script:
    - lsif-go
  artifacts:
    reports:
      lsif: dump.lsif
```

---

## Security glossary

**URL:** https://docs.gitlab.com/user/application_security/terminology/

**Contents:**
- Security glossary
- Analyzer
- Attack surface
- Component
- Corpus
- CNA
- CVE
- CVSS
- CWE
- Deduplication

This glossary provides definitions for terms related to security features in GitLab. While some terms may have different meanings elsewhere, these definitions are specific to GitLab.

Software that analyzes a scan target type for security vulnerabilities. Internally, it is responsible for gathering required configuration parameters, performing necessary data transformations to convert the target into a standardized format for the scanner to execute the scan operation. Finally, it produces a report in the format required by the caller.

CI/CD-based analyzers integrate into GitLab using a CI/CD job. The report produced by the CI/CD-based analyzer is published as an artifact after the job completes. GitLab ingests this report, allowing users to visualize and manage found vulnerabilities. The generated reports adhere to the secure report format.

Many GitLab analyzers follow a standard approach using Docker to run a wrapped scanner. For example, the image semgrep is an analyzer that wraps the scanner Semgrep. However, some analyzers run directly within GitLab Rails or other target environments rather than in separate containers.

The different places in an application that are vulnerable to attack. Secure products discover and search the attack surface during scans. Each product defines the attack surface differently. For example, SAST uses files and line numbers, and DAST uses URLs.

A software component that makes up a portion of a software project. Examples include libraries, drivers, data, and many more.

The set of meaningful test cases that are generated while the fuzzer is running. Each meaningful test case produces new coverage in the tested program. You should re-use the corpus and pass it to subsequent runs.

CVE Numbering Authorities (CNAs) are organizations from around the world that are authorized by the Mitre Corporation to assign CVEs to vulnerabilities in products or services within their respective scope. GitLab is a CNA.

Common Vulnerabilities and Exposures (CVE®) is a list of common identifiers for publicly known cybersecurity vulnerabilities. The list is managed by the Mitre Corporation.

The Common Vulnerability Scoring System (CVSS) is a free and open industry standard for assessing the severity of computer system security vulnerabilities.

Common Weakness Enumeration (CWE™) is a community-developed list of common software and hardware weakness types that have security ramifications. Weaknesses are flaws, faults, bugs, vulnerabilities, or other errors in software or hardware implementation, code, design, or architecture. If left unaddressed, weaknesses could result in systems, networks, or hardware being vulnerable to attack. The CWE List and associated classification taxonomy serve as a language that you can use to identify and describe these weaknesses in terms of CWEs.

When a category’s process deems findings to be the same, or if they are similar enough that a noise reduction is required, only one finding is kept and the others are eliminated. Read more about the deduplication process.

A dependency graph export lists the direct and indirect dependencies used by a project and includes the relationships between them. It’s differentiated from a lock file because it may not be required by a package manager during installation like in the case of a pipdeptree graph export.

A legitimate finding that is reported multiple times. This can occur when different scanners discover the same finding, or when a single scan inadvertently reports the same finding more than once.

A finding that doesn’t exist but is incorrectly reported as existing.

An asset that has the potential to be vulnerable, identified in a project by an analyzer. Assets include but are not restricted to source code, binary packages, containers, dependencies, networks, applications, and infrastructure.

Findings are all potential vulnerability items scanners identify in MRs/feature branches. Only after merging to default does a finding become a vulnerability.

You can interact with vulnerability findings in two ways.

A flexible and non-destructive way to visually organize vulnerabilities in groups when there are multiple findings that are likely related but do not qualify for deduplication. For example, you can include findings that should be evaluated together, would be fixed by the same action, or come from the same source.

A legitimate finding that a particular customer doesn’t care about.

A component that matches the requirements for a vulnerability to be exploitable. For example, packageA@1.0.3 matches the name, package type, and one of the affected versions or version ranges of FAKECVE-2023-0001.

A finding’s location fingerprint is a text value that’s unique for each location on the attack surface. Each security product defines this according to its type of attack surface. For example, SAST incorporates file path and line number.

A lock file exhaustively lists both the direct and indirect dependencies of an application to ensure reproducible builds by a package manager. It may also be a dependency graph export like in the case of a Gemfile.lock file, but listing dependency relationships is not a requirement or guaranteed.

A package manager is a system that manages your project dependencies.

The package manager provides a method to install new dependencies (also referred to as “packages”), manage where packages are stored on your file system, and offer capabilities for you to publish your own packages.

Each package manager, platform, type, or ecosystem has its own conventions and protocols to identify, locate, and provision software packages.

The following table is a non-exhaustive list of some of the package managers and types referenced in GitLab documentation and software tools.

A page that displays findings discovered in the associated CI pipeline.

A software component that is possibly affected by vulnerability. For example, when scanning a project for known vulnerabilities, components are first evaluated to see if they match the name and package type. During this stage, they’re possibly affected by the vulnerability, and are only known to be affected after it’s confirmed that they fall in the affected version range.

Post-filters help reduce noise in the scanner results and automate manual tasks. You can specify criteria that updates or modifies vulnerability data based on scanner results. For example, you can flag findings as likely false positives and automatically resolve vulnerabilities that are no longer detected. These are not permanent actions and can be changed.

Support for automatically resolving findings is tracked in epic 7478 and support for cheap scan is proposed in epic 7886.

An irreversible action that is done to filter out targets before analysis occurs. This is usually provided to allow the user to reduce scope and noise and speed up the analysis. This should not be done if a record is needed as GitLab doesn’t store anything related to the skipped/excluded code or assets.

Examples: DS_EXCLUDED_PATHS should Exclude files and directories from the scan based on the paths provided.

A finding’s primary identifier is a value that is unique to each finding. The external type and external ID of the finding’s first identifier combine to create the value.

An example primary identifier is CVE, which is used for Trivy. The identifier must be stable. Subsequent scans must return the same value for the same finding, even if the location has slightly changed.

Software that accepts an input and transforms it according to specified criteria, either by modifying the input data or by attaching additional metadata as an output. Processors exist to support scanner operations and are commonly used in pre-scan and post-scan phases. Unlike filters, processors do not have decision-making capabilities to control workflow continuation or termination based on business logic. Instead, they perform transformations and pass the results forward unconditionally.

Pre-processors typically perform data preparation tasks such as normalizing input formats, enriching scan targets with additional context, applying target-specific transformations, or augmenting configuration parameters. They ensure that the scanner receives properly formatted and enhanced inputs optimized for the scanning operation.

Post-processors apply intelligent analysis to scan results after the scanner completes its operation. Post-processors enhance raw scanner output through operations like vulnerability classification, false positive filtering, severity adjustment, and contextual enrichment. Scanner results can pass through multiple post-processors in sequence before the processed results are returned to the analyzer.

Reachability indicates whether a component listed as a dependency in a project is actually used in the codebase.

A finding that only exists in a report produced by an analyzer, and is yet to be persisted to the database. The report finding becomes a vulnerability finding once it’s imported into the database.

Describes the type of scan. This must be one of the following:

This list is subject to change as scanners are added.

A discrete unit of content or artifact that serves as the scope boundary for running the scan. Each scan target type represents a self-contained entity with defined scanning constraints. A specific instance of a scan target type (such as a particular Git repository or container image) is referred to as a “scan target”. Examples of scan target types include Git repositories, file systems, containers, etc.

Software that scans for security vulnerabilities in a scan target (an instance of a scan target type). It is generally a stateless component that receives necessary scan configuration parameters and scan payloads from the analyzer. The resulting scan report is not necessarily in the Secure report format. A scanner can be a sophisticated component that wraps one or more scan engines with additional processors (for example, the secret detection scanner), or it can be as simple as a standalone scan engine (for example, Trivy).

A group of features related to a specific area of application security with first-class support by GitLab.

Products include container scanning, dependency scanning, dynamic application security testing (DAST), secret detection, static application security testing (SAST), and fuzz testing.

Each of these products typically include one or more analyzers.

A standard report format that Secure products comply with when creating JSON reports. The format is described by a JSON schema.

Provides an overview of all the vulnerabilities for a project, group, or GitLab instance. Vulnerabilities are only created from findings discovered on the project’s default branch.

The set of test cases given as initial input to the fuzz target. This usually speeds up the fuzz target substantially. This can be either manually created test cases or auto-generated with the fuzz target itself from previous runs.

The party maintaining an analyzer. As such, a vendor is responsible for integrating a scanner into GitLab and keeping it compatible as they evolve. A vendor isn’t necessarily the author or maintainer of the scanner, as in the case of using an open core or OSS project as a base solution of an offering. For scanners included as part of a GitLab distribution or GitLab subscription, the vendor is listed as GitLab.

A flaw that has a negative impact on the security of its environment. Vulnerabilities describe the error or weakness, and don’t describe where the error is located (see finding).

Each vulnerability maps to a unique finding.

Vulnerabilities exist in the default branch. Findings (see finding) are all potential vulnerability items scanners identify in MRs/feature branches. Only after merging to default does a finding become a vulnerability.

When a report finding is stored to the database, it becomes a vulnerability finding.

Deals with the responsibility of matching findings across scans so that a finding’s lifecycle can be understood. Engineers and security teams use this information to decide whether to merge code changes, and to see unresolved findings and when they were introduced.

Vulnerabilities are tracked by comparing the location fingerprint, primary identifier, and report type.

Deprecated, see finding.

---

## GitLab advisory database

**URL:** https://docs.gitlab.com/user/application_security/gitlab_advisory_database/

**Contents:**
- GitLab advisory database
- Standardization
- Explore the database
  - Search
- Open source edition
- Integrations
  - How the database can be used
- Maintenance
- Contributing to the vulnerability database
- License

The GitLab advisory database serves as a repository for security advisories related to software dependencies. It is updated on an hourly basis with the latest security advisories.

The database is an essential component of both dependency scanning and container scanning.

A free and open-source version of the GitLab advisory database is also available as GitLab advisory database (open source edition). The open source edition receives the same updates but with a 30-day delay.

In our advisories, we adopt standardized practices to effectively communicate vulnerabilities and their impact.

To view the database content, go to the GitLab advisory database home page. On the home page you can:

Each advisory has a page with the following details:

GitLab provides a free and open-source version of the database, the GitLab advisory database (open source edition).

The open-source version is a time-delayed clone of the GitLab advisory database, MIT-licensed and contains all advisories from the GitLab advisory database that are older than 30 days or with the community-sync flag.

GitLab advisory database terms prohibit the use of data contained in the GitLab advisory database by third-party tools. Third-party integrators can use the MIT-licensed, time-delayed repository clone instead.

As an example, we highlight the use of the database as a source for an advisory ingestion process as part of continuous vulnerability scans.

The Vulnerability Research team is responsible for the maintenance and regular updates of the GitLab advisory database and the GitLab advisory database (open source edition).

Community contributions are accessible in advisories-community via the community-sync flag.

If you know about a vulnerability that is not listed, you can contribute to the GitLab advisory database by either opening an issue or submit the vulnerability.

For more information, see Contribution guidelines.

The GitLab advisory database is freely accessible in accordance with the GitLab advisory database terms.

**Examples:**

Example 1 (unknown):
```unknown
%%{init: { "fontFamily": "GitLab Sans" }}%%
flowchart TB
accTitle: Advisory ingestion process
accDescr: Sequence of actions that make up the advisory ingestion process.

    subgraph Dependency scanning
        A[GitLab advisory database]
    end
    subgraph Container scanning
        C[GitLab advisory database
          open source edition
          integrated into Trivy]
    end
    A --> B{Ingest}
    C --> B
    B --> |store| D{{"Cloud storage
                     (NDJSON format)"}}
    F[\GitLab Instance/] --> |pulls data| D
    F --> |stores| G[(Relational database)]
```

---

## Project and group visibility

**URL:** https://docs.gitlab.com/user/public_access/

**Contents:**
- Project and group visibility
- Private projects and groups
- Internal projects and groups
- Public projects and groups
- Change project visibility
- Change the visibility of individual features in a project
- Change group visibility
- Restrict use of public or internal projects

Projects and groups in GitLab can be private, internal, or public.

The visibility level of the project or group does not affect whether members of the project or group can see each other. Projects and groups are intended for collaborative work. This work is only possible if all members know about each other.

Project or group members can see all members of the project or group they belong to. Project or group members can see the origin of membership (the original project or group) of all members for the projects and groups they have access to.

For private projects, only members of the private project or group can:

Users with the Guest role cannot clone the project.

Private groups can have only private subgroups and projects.

When you share a private group with another group, users who don’t have access to the private group can view a list of users who have access to the inviting group through the endpoint https://gitlab.com/groups/<inviting-group-name>/-/autocomplete_sources/members. However, the name and path of the private group are masked, and the users’ membership source is not displayed.

For internal projects, any authenticated user, including users with the Guest role, can:

Only internal members can view internal content.

External users cannot clone the project.

Internal groups can have internal or private subgroups and projects.

For public projects, any user, including unauthenticated users, can:

Public groups can have public, internal, or private subgroups and projects.

If an administrator restricts the Public visibility level, then the public access directory (/public) is visible only to authenticated users.

You can change the visibility of a project.

You can change the visibility of individual features in a project.

You can change the visibility of all projects in a group.

Administrators can restrict which visibility levels users can choose when they create a project or a snippet. This setting can help prevent users from publicly exposing their repositories by accident.

For more information, see Restrict visibility levels.

---

## Compliance features for users

**URL:** https://docs.gitlab.com/user/compliance/

**Contents:**
- Compliance features for users
- Compliant workflow automation
- Audit management
- Policy management
- Other compliance features
- Related topics

GitLab compliance features for users ensure your GitLab groups and projects meets common compliance standards.

It is important for compliance teams to be confident that their controls and requirements are set up correctly, but also that they stay set up correctly. One way of doing this is manually checking settings periodically, but this is error prone and time consuming. A better approach is to use single-source-of-truth settings and automation to ensure that whatever a compliance team has configured, stays configured and working correctly. These features can help you automate compliance:

An important part of any compliance program is being able to go back and understand what happened, when it happened, and who was responsible. You can use this in audit situations as well as for understanding the root cause of issues when they occur.

It is helpful to have both low-level, raw lists of audit data as well as high-level, summary lists of audit data. Between these two, compliance teams can quickly identify if problems exist and then drill down into the specifics of those issues. These features can help provide visibility into GitLab and audit what is happening:

Organizations have unique policy requirements, either due to organizational standards or mandates from regulatory bodies. The following features help you define rules and policies to adhere to workflow requirements, separation of duties, and secure supply chain best practices:

These features can also help with compliance requirements:

---

## Analytics dashboards

**URL:** https://docs.gitlab.com/user/analytics/analytics_dashboards/

**Contents:**
- Analytics dashboards
- Data sources
- Built-in dashboards
- Custom dashboards
- View project dashboards
- View group dashboards
- Change the location of dashboards
  - Group dashboards
  - Project dashboards
- Create a dashboard by configuration

Analytics dashboards help you visualize collected data on built-in dashboards.

An enhanced dashboard experience is proposed in epic 13801.

A data source is a connection to a database or collection of data which can be used by your dashboard filters and visualizations to query and retrieve results.

To help you get started with analytics, GitLab provides built-in dashboards with predefined visualizations. These dashboards are labeled By GitLab. You cannot edit the built-in dashboards, but you can create custom dashboards with a similar style.

The following built-in dashboards are available:

You can create custom dashboards to visualize the metrics that are most relevant to your case.

Project maintainers can enforce approval rules on dashboard changes with features such as code owners and approval rules. Your dashboard files are versioned in source control with the rest of a project’s code.

To view a list of dashboards (both built-in and custom) for a project:

To view a list of dashboards (both built-in and custom) for a group:

You can change the location of your project or group custom dashboards.

Issue 411572 proposes connecting this feature to group-level dashboards.

To change the location of a group’s custom dashboards:

By default custom dashboards are saved to the current project, because dashboards are usually defined in the project where the analytics data is retrieved from. However, you can also have a separate project for dashboards. This setup is recommended if you want to enforce specific access rules to the dashboard definitions or share dashboards across multiple projects.

You can share dashboards only between projects that are located in the same group.

To change the location of project dashboards:

You can create dashboards manually by configuration.

To define a dashboard:

In .gitlab/analytics/dashboards/, create a directory named like the dashboard.

Each dashboard should have its own directory.

In the new directory, create a .yaml file with the same name as the directory, for example .gitlab/analytics/dashboards/my_dashboard/my_dashboard.yaml.

This file contains the dashboard definition. It must conform to the JSON schema defined in ee/app/validators/json_schemas/analytics_dashboard.json.

Optional. To create new visualizations to add to your dashboard, see defining a chart visualization template.

For example, if you want to create three dashboards (Conversion funnels, Demographic breakdown, and North star metrics) and one visualization (line chart) that applies to all dashboards, the file structure looks like this:

Dashboards support the following filters:

To enable filters, in the .yaml configuration file set the filter’s enabled option to true:

See a complete dashboard configuration example.

You can define different charts and add visualization options to some of them, such as:

Line chart, with the options listed in the ECharts documentation.

Column chart, with the options listed in the ECharts documentation.

Single stat, with the only option to set decimalPlaces (number, default value is 0). This process can also be followed for user-created dashboards. Each visualization must be written with the following required fields:

We recommend using visualization templates sparingly. Visualization templates can lead to long visualization selection lists in the dashboard editor UI if not managed, which may lead to visualizations being missed or duplicated. Generally, visualization templates should be reserved for visualizations that will be used identically across several dashboards.

If you need a visualization to be used by multiple dashboards, you might store them as separate template files. When added to a dashboard, the visualization template will be copied over to the dashboard. Visualization templates copied to dashboards are not updated when the visualization template is updated.

To define a chart visualization template for your dashboards:

For example, to create a line chart that illustrates event count over time, in the visualizations folder create a line_chart.yaml file with the following required fields:

If the dashboard displays a global error message that data could not be loaded, first try reloading the page. If the error persists:

If the dashboard displays a global error message that the configuration is invalid, check that your configurations match the dashboard JSON schema defined in ee/app/validators/json_schemas/analytics_dashboard.json.

If a dashboard panel displays a message that the visualization configuration is invalid, check that your visualization configurations match the visualization JSON schema defined in ee/app/validators/json_schemas/analytics_visualization.json.

If a dashboard panel displays an error message:

**Examples:**

Example 1 (unknown):
```unknown
.gitlab/analytics/dashboards
├── conversion_funnels
│  └── conversion_funnels.yaml
├── demographic_breakdown
│  └── demographic_breakdown.yaml
├── north_star_metrics
|  └── north_star_metrics.yaml
├── visualizations
│  └── example_line_chart.yaml
```

Example 2 (unknown):
```unknown
title: My dashboard
# ...
filters:
  excludeAnonymousUsers:
    enabled: true
  dateRange:
    enabled: true
```

---

## Detect

**URL:** https://docs.gitlab.com/user/application_security/detect/

**Contents:**
- Detect
- Security scanning
  - Triggers
  - Detection coverage
    - Repository scanning
    - Behavioral testing
  - Scanner selection
  - Security scanning process
    - CI/CD security job criteria
- Data privacy

Detect vulnerabilities in your project’s repository and application’s behavior throughout the software development lifecycle.

To help you manage the risk of vulnerabilities during development:

To help manage vulnerabilities outside development:

To get the most from security scanning, it’s important to understand:

Security scanning in a CI/CD pipeline is triggered by default when changes are pushed to a project’s repository.

You can also run security scanning by:

Scan your project’s repository and test your application’s behavior for vulnerabilities:

Your project’s repository may contain source code, dependency declarations, and infrastructure definitions. Repository scanning can detect vulnerabilities in each of these.

Repository scanning tools include:

Behavioral testing requires a deployable application to test for known vulnerabilities and unexpected behavior.

Behavioral testing tools include:

Security scanners are enabled for a project by either:

For more details, see Security configuration.

The security scanning process is:

According to the CI/CD job criteria, those scanners that are enabled and intended to run in a pipeline run as separate jobs.

Each successful job outputs one or more security reports as job artifacts. These reports contain details of all vulnerabilities detected in the branch, regardless of whether they were previously found, dismissed, or new.

Each security report is processed, including validation and deduplication.

When all jobs finish, including manual jobs, you can download or view the results.

For more details on the output of security scanning, see Security scanning results.

Security scanning jobs in a CI/CD pipeline are determined by the following criteria:

Inclusion of security scanning templates

The selection of security scanning jobs is first determined by which templates are included or enforced by a policy or compliance framework.

Security scanning runs by default in branch pipelines. To run security scanning in merge request pipelines you must specifically enable it.

Each template has defined rules which determine if the analyzer is run.

For example, some analyzers run only if files of a specific type are detected in the repository.

If the template’s rules dictate that the job is to be run, a job is created in the pipeline stage specified in the template. However, each analyzer has its own logic which determines if the analyzer itself is to be run.

For example, if dependency scanning doesn’t detect supported files at the default depth, the analyzer is not run and no artifacts are output.

Jobs pass if they complete a scan, even if they don’t find vulnerabilities. The only exception is coverage fuzzing, which fails if it identifies findings. All jobs are permitted to fail so that they don’t fail the entire pipeline. Don’t change the job allow_failure setting because that fails the entire pipeline.

GitLab processes the source code and performs analysis locally on the GitLab Runner. No data is transmitted outside GitLab infrastructure (server and runners).

Security analyzers access the internet only to download the latest sets of signatures, rules, and patches. If you prefer the scanners do not access the internet, consider using an offline environment.

---

## Application security testing

**URL:** https://docs.gitlab.com/user/application_security/

**Contents:**
- Application security testing
- Vulnerability management cycle

GitLab application security testing provides continuous detection of vulnerabilities, during development and after changes are deployed.

Application security testing scans your project’s source code, dependencies, libraries, and container images. Runtime vulnerabilities are detected through simulated attacks and fuzz testing against your deployed application in a test environment.

During development, scans run automatically as part of CI/CD pipelines when code is committed or merge requests are created. Security findings appear directly in merge requests and IDEs, notifying developers before code is merged. This proactive approach reduces the cost and effort of fixing issues later in development.

Outside the development cycle, you can run security scans on demand, or schedule them to run at regular intervals. As vulnerability databases are updated with newly discovered threats and zero-day exploits, new risks to your project’s software libraries and container images are identified. Together, these methods identify risks that weren’t previously known during the original development cycle.

For a click-through demo, see Integrating security to the pipeline.

GitLab enables a comprehensive vulnerability management workflow that helps you continuously improve your application security posture. This workflow is an ongoing cycle of detection, triage, analysis, remediation, and optimization.

Use results from each phase to improve the next cycle. For example, adjust detection rules to reduce false positives identified during analysis.

This cycle repeats with each code change, allowing you to incrementally improve both your application security and your vulnerability management processes. This continuous refinement means your vulnerability management becomes more effective and efficient over time.

**Examples:**

Example 1 (unknown):
```unknown
%%{init: { "fontFamily": "GitLab Sans" }}%%
flowchart LR
    accTitle: Vulnerability management workflow
    accDescr: A circular workflow showing the continuous cycle of vulnerability management in GitLab

    Detect --> Triage
    Triage --> Analyze
    Analyze --> Remediate
    Remediate -->|Optimize| Detect
```

---

## Code review analytics

**URL:** https://docs.gitlab.com/user/analytics/code_review_analytics/

**Contents:**
- Code review analytics
- View code review analytics

Code review analytics displays a table of open merge requests that have at least one non-author comment. The review time is the amount of time since the first comment by a non-author in a merge request.

You can use code review analytics to view review metrics per merge request and improve your code review process.

For a video explanation, see Code review analytics: Faster code review.

To view code review analytics:

The table shows up to 20 merge requests in review per page, and includes the following information about each merge request:

---

## CI/CD analytics

**URL:** https://docs.gitlab.com/user/analytics/ci_cd_analytics/

**Contents:**
- CI/CD analytics
- View CI/CD analytics
- Pipeline metrics
- Filter your results
- Pipeline duration chart
- Pipeline status chart

Use CI/CD analytics to gain insights into your pipeline performance and success rates.

The CI/CD analytics page provides visualizations for critical CI/CD pipeline metrics directly in the GitLab UI. These visualizations can help development teams quickly understand the health and efficiency of their software development process.

To view CI/CD analytics:

You can view the history of your pipeline successes and failures, and how long each pipeline ran. Pipeline statistics are gathered by collecting all available pipelines for the project, regardless of status. The data available for each individual day is based on when the pipeline was created.

CI/CD analytics displays key metrics about your pipelines:

You can filter the analytics data to focus on specific areas:

Filtering allows you to analyze the performance of specific workflow components or compare different branches.

The duration chart shows how your pipeline execution times changed over time. The chart displays:

This visualization helps you identify trends in pipeline duration, which can help you determine your CI/CD process efficiency over time.

The status chart shows the distribution of pipeline statuses over time:

This visualization helps you track the stability of your pipelines and identify periods with higher failure rates.

---

## GitLab Security Dashboards and Security Center

**URL:** https://docs.gitlab.com/user/application_security/security_dashboard/

**Contents:**
- GitLab Security Dashboards and Security Center
- Security Dashboards
- Vulnerability metrics in the Value Streams Dashboard
- Prerequisites
- Viewing the Security Dashboard
  - Project Security Dashboard
    - Downloading the vulnerability chart
  - Group Security Dashboard
- Security Center
  - Viewing the Security Center

Security Dashboards are used to assess the security posture of your applications. GitLab provides you with a collection of metrics, ratings, and charts for the vulnerabilities detected by the security scanners run on your project. The security dashboard provides data such as:

The data provided by the Security Dashboards can be used supply to insight on what decisions can be made to improve your security posture. For example, using the 365 day trend view, you can see on which days a significant number of vulnerabilities were introduced. Then you can examine the code changes performed on those particular days in order perform a root-cause analysis to create better policies for preventing the introduction of vulnerabilities in the future.

For an overview, see Security Dashboard - Advanced Security Testing.

You can view vulnerability metrics also in the Value Streams Dashboard comparison panel, which helps you understand security exposure in the context of your organization’s software delivery workflows.

To view the Security Dashboards, the following is required:

The Security Dashboards show results of scans from the most recent completed pipeline on the default branch. Dashboards are updated with the result of completed pipelines run on the default branch; they do not include vulnerabilities discovered in pipelines from other un-merged branches.

The Security Dashboard can be seen at the project, group, and the Security Center levels. Each dashboard provides a unique viewpoint of your security posture.

The Project Security Dashboard shows the total number of vulnerabilities detected over time, with up to 365 days of historical data for a given project. The dashboard is a historical view of open vulnerabilities in the default branch. Open vulnerabilities are those of only Needs triage or Confirmed status (Dismissed or Resolved vulnerabilities are excluded).

To view a project’s security dashboard:

You can download an image of the vulnerability chart from the Project Security Dashboard to use in documentation, presentations, and so on. To download the image of the vulnerability chart:

You will then be prompted to download the image in SVG format.

The group Security Dashboard provides an overview of vulnerabilities found in the default branches of all projects in a group and its subgroups. The Group Security Dashboard supplies the following:

To view group security dashboard:

On the left sidebar, select Search or go to and find your group.

Select Security > Security dashboard.

Hover over the Vulnerabilities over time chart to get more details about vulnerabilities.

Select the arrows under the Project security status section to see the what projects fall under a particular letter-grade rating:

The Security Center is a configurable personal space where you can view vulnerabilities across all the projects you belong to. You can add up to 1,000 projects to the Security Center, however the Project listing in the Security Center settings page displays a maximum of 100 projects. You can use the search filter to find projects not shown in the first 100 projects.

The Security Center includes:

To view the Security Center:

The Security Center is blank by default. You must add a project which have been configured with at least one security scanner.

After you add projects, the security dashboard and vulnerability report show the vulnerabilities found in those projects’ default branches.

The Security Center displays a maximum of 100 projects, so you may need to use the search function to remove a project. To remove projects:

After you remove projects, the security dashboard and vulnerability report no longer show the vulnerabilities found in those projects’ default branches.

You can export a PDF file that includes details of the vulnerabilities listed in the security dashboard.

Charts in the export include:

To export the details of all vulnerabilities listed in the security dashboard, select Export.

When the exported details are available, GitLab sends you an email. To download the exported details, select the link in the email.

---

## Webhooks

**URL:** https://docs.gitlab.com/user/project/integrations/webhooks/

**Contents:**
- Webhooks
- Webhook events
- Webhook limits
  - Push event limits
- Group webhooks
  - Types of group webhook events
  - Webhooks in both a project and a group
- Configure webhooks
  - Create a webhook
  - Mask sensitive portions of webhook URLs

Webhooks connect GitLab to your other tools and systems through real-time notifications. When important events happen in GitLab, webhooks send that information directly to your external applications. Build automation workflows by reacting to merge requests, code pushes, and issue updates.

With webhooks, your team stays synchronized as changes occur:

Various events in GitLab can trigger webhooks. For example:

GitLab.com enforces webhook limits, including:

For GitLab Self-Managed, administrators can modify these limits.

GitLab limits webhook triggers for push events that include multiple changes:

If you frequently push multiple tags or branches simultaneously and need webhook notifications, contact your GitLab administrator to increase this limit.

Group webhooks are custom HTTP callbacks that send notifications for events across all projects in a group and its subgroups.

You can configure group webhooks to listen for:

If you configure identical webhooks in both a group and a project in that group, both webhooks are triggered for events in that project. This allows for flexible event handling at different levels of your GitLab organization.

Create and configure webhooks in GitLab to integrate with your project’s workflow. Use these features to set up webhooks that meet your specific requirements.

Create a webhook to send notifications about events in your project or group.

The secret token is sent with the webhook request in the X-Gitlab-Token HTTP header. Your webhook endpoint can use this token to verify the legitimacy of the request.

Mask sensitive portions of webhook URLs to enhance security. Masked portions are replaced with configured values when webhooks are executed, are not logged, and are encrypted at rest in the database.

To mask sensitive portions of a webhook URL:

The masked values appear hidden in the UI. For example, if you’ve defined variables path and value, the webhook URL can look like this:

Add custom headers to webhook requests for authentication to external services. You can configure up to 20 custom headers per webhook.

Custom headers show in Recent events with masked values.

Create a custom payload template for your webhook to control the data sent in the request body.

To create a custom webhook template:

Use fields from the payload of an event in your template. For example:

To access nested properties, use periods to separate path segments.

For this custom payload template:

The resulting request payload for a push event is:

Custom webhook templates cannot access properties in arrays. Support for this feature is proposed in issue 463332.

Filter push events sent to your webhook endpoint by the branch name. Use one of these filtering options:

To filter by using a wildcard pattern:

To filter by using a regular expression:

For example, to exclude the main branch, use:

Configure webhooks to support mutual TLS by setting a global client certificate in PEM format.

To configure mutual TLS for webhooks:

Edit /etc/gitlab/gitlab.rb:

Save the file and reconfigure GitLab:

Edit docker-compose.yml:

Save the file and restart GitLab:

Edit /home/git/gitlab/config/gitlab.yml:

Save the file and restart GitLab:

After configuration, GitLab presents this certificate to the server during TLS handshakes for webhook connections.

Configure firewalls for webhook traffic based on how GitLab sends webhooks:

Webhooks are sent synchronously from Rails nodes when you test or retry a webhook in the UI.

When configuring firewalls, ensure both Sidekiq and Rails nodes can send webhook traffic.

Monitor and maintain your configured webhooks in GitLab.

View the history of webhook requests to monitor their performance and troubleshoot issues.

To view the request history for a webhook:

The Recent events section displays all requests made to a webhook in the last two days. The table includes:

Each webhook request in Recent events has a Request details page. This page contains the body and headers of:

To inspect the request and response details of a webhook event:

To send the request again with the same data and the same Idempotency-Key header, select Resend Request. If the webhook URL has changed, you cannot resend the request. You can also resend the request programmatically through the project webhooks API.

Test a webhook to ensure it’s working properly or to re-enable a disabled webhook.

Testing is not supported for some types of events for project and group webhooks. For more information, see issue 379201.

Use this technical reference to:

Implement fast and stable webhook receiver endpoints to ensure reliable webhook delivery.

Slow, unstable, or incorrectly configured receivers might be disabled automatically. Invalid HTTP responses are treated as failed requests.

To optimize your webhook receivers:

The availability of this feature is controlled by a feature flag. For more information, see the history.

GitLab automatically disables project or group webhooks that fail four consecutive times.

To view auto-disabled webhooks:

In the webhook list, auto-disabled webhooks display as:

Webhooks are temporarily disabled if they fail four consecutive times. If webhooks fail 40 consecutive times, they become permanently disabled.

Temporarily disabled webhooks are initially disabled for one minute, with the duration extending on subsequent failures up to 24 hours. After this period has elapsed, these webhooks are automatically re-enabled.

Webhooks are permanently disabled if they fail 40 consecutive times. Unlike temporarily disabled webhooks, these webhooks are not automatically re-enabled.

Webhooks that were permanently disabled in GitLab 17.10 and earlier underwent a data migration. These webhooks might display four failures in Recent events even though the UI might state they have 40 failures.

To re-enable a disabled webhook, send a test request. The webhook is re-enabled if the test request returns a response code in the 2xx range.

GitLab includes the following headers in webhook requests to your endpoint:

GitLab rewrites relative image references to absolute URLs in webhook bodies.

If the original image reference in a merge request, comment, or wiki page is:

The rewritten image reference in the webhook body would be:

This example assumes:

GitLab does not rewrite image URLs when:

**Examples:**

Example 1 (unknown):
```unknown
https://webhook.example.com/{path}?key={value}
```

Example 2 (unknown):
```unknown
{
  "event": "{{object_kind}}",
  "project_name": "{{project.name}}"
}
```

Example 3 (unknown):
```unknown
{
  "event": "push",
  "project_name": "Example"
}
```

Example 4 (unknown):
```unknown
\b(?:m(?!ain\b)|ma(?!in\b)|mai(?!n\b)|[a-l]|[n-z])\w*|\b\w{1,3}\b|\W+
```

---

## Contributions calendar

**URL:** https://docs.gitlab.com/user/profile/contributions_calendar/

**Contents:**
- Contributions calendar
- User contribution events
  - View daily contributions
  - Show private contributions on your user profile page
- User activity
  - Follow a user’s activity
  - Retrieve user activity as a feed
  - Reset the user activity feed token
  - Event time period limit

The contributions calendar displays a user’s events from the past 12 months. This includes contributions made in forked and private repositories.

The gradient color of the tiles represents the number of contributions made per day. The gradient ranges from blank (0 contributions) to dark blue (more than 30 contributions).

The contribution calendar only displays contributions from the last 12 months, but issue 24264 proposes to change this to more than 12 months. General improvements to the user profile are proposed in issue 8488.

For a comprehensive view of all group members’ contribution events, you can use contribution analytics.

GitLab tracks the following contribution events:

To view your daily contributions:

The contributions calendar graph and recent activity list displays your contribution actions to private projects.

To view private contributions:

You can follow users whose activity you’re interested in. In GitLab 15.5 and later, the maximum number of users you can follow is 300.

To follow a user, either:

To view the activity of users you follow:

GitLab provides RSS feeds of user activity. To subscribe to the RSS feed of a user’s activity:

The URL of the result contains both a feed token, and the user’s activity that you’re authorized to view. You can add this URL to your feed reader.

Feed tokens are sensitive and can reveal information from confidential issues. If you think your feed token has been exposed, you should reset it.

To reset your feed token:

A new token is generated.

GitLab removes user activity events older than 3 years from the events table for performance reasons.

---

## Value stream analytics

**URL:** https://docs.gitlab.com/user/group/value_stream_analytics/

**Contents:**
- Value stream analytics
- Value streams
- Value stream stages
- Value stream stage events
- Data aggregation
- Stage measurement
  - Example workflow
  - Cumulative label event duration
    - Reaggregate data after upgrade
- Production environment

Value stream analytics calculates the duration of every stage of your software development process. You can measure how much time it takes to go from an idea to production by tracking merge request or issue events.

Use value stream analytics to identify:

Value stream analytics helps businesses:

For a click-through demo, see the Value Stream Management product tour.

Value stream analytics has a hierarchical structure:

A value stream is the entire work process that delivers value to customers. Value streams are container objects for stages. You can have multiple value streams per group, to focus on different aspects of the DevOps lifecycle.

A stage represents an event pair (start and end events) with additional metadata, such as the name of the stage. You can use value stream analytics with the built-in default stages, which you can reorder and hide. You can also create and add custom stages that align with your specific development workflows.

Events are the building blocks that define when stages start and end. Each event has a start and end time:

GitLab calculates stage duration based on the start and end event times, using this formula: Stage duration = End event time - Start event time

Value stream analytics supports the following events:

You can share your ideas or feedback about stage events in issue 520962.

Value stream analytics uses a backend process to collect and aggregate stage-level data, which ensures it can scale for large groups with a high number of issues and merge requests. Due to this process, there may be a slight delay between when an action is taken (for example, closing an issue) and when the data displays on the value stream analytics page.

It may take up to 10 minutes to process the data and display results. Data collection may take longer than 10 minutes in the following cases:

To view when the data was most recently updated, in the right corner next to Edit, hover over the Last updated badge.

Value stream analytics measures each stage from its start event to its end event. Only items that have reached their end event are included in the stage time calculation.

By default, blocked issues are not included in the lifecycle overview. However, you can use custom labels (for example workflow::blocked) to track them.

You can customize stages in value stream analytics based on pre-defined events. To help you with the configuration, GitLab provides a pre-defined list of stages that you can use as a template. For example, you can define a stage that starts when you add a label to an issue, and ends when you add another label.

The following table gives an overview of the pre-defined stages in value stream analytics.

Value stream analytics works on timestamp data and aggregates only the final start and stop events of the stage. For items that move back and forth between stages multiple times, the stage time is calculated solely from the final events’ timestamps.

This example shows a workflow through all seven stages in one day.

If a stage does not include a start and a stop time, its data is not included in the median time. In this example, milestones have been created and CI/CD for testing and setting environments is configured.

Value stream analytics records the following times for each stage:

Keep in mind the following observations related to this example:

With this feature, value stream analytics measures the duration of repetitive events for label-based stages. You should configure label removal or addition events for both start and end events.

For example, a stage tracks when the in progress label is added and removed, with the following times:

With the original calculation method, the duration is five hours (from 9:00 to 14:00). With cumulative label event duration calculation enabled, the duration is three hours (9:00 to 10:00 and 12:00 to 14:00).

When you upgrade your GitLab version to 16.10 (or to a higher version), existing label-based value stream analytics stages are automatically reaggregated using the background aggregation process.

On large instances, when you upgrade the GitLab version and especially if several minor versions are skipped, the background aggregation processes might last longer. This delay can result in outdated data on the Value Stream Analytics page. To speed up the aggregation process and avoid outdated data, in the rails console you can invoke the synchronous aggregation snippet for a given group:

Value stream analytics identifies production environments by looking for project environments with a name matching any of these patterns:

These patterns are not case-sensitive.

You can change the name of a project environment in your GitLab CI/CD configuration.

To view value stream analytics for your group or project:

Select the Filter results text box.

Select a value or enter text to refine the results.

To view metrics in a particular date range, from the dropdown list select a predefined date range or the Custom option. With the Custom option selected:

The charts and list display workflow items created during the date range.

A badge next to the workflow items table header shows the number of workflow items that completed during the selected stage.

The table shows a list of related workflow items for the selected stage. Based on the stage you select, this can be:

The end date for each predefined date range is the current day, and is included in the number of days selected. For example, the start date for Last 30 days is 29 days prior to the current day for a total of 30 days.

You can filter value stream analytics to view data that matches specific criteria. The following filters are supported:

The Overview page in value stream analytics displays key metrics of the DevSecOps lifecycle performance for projects and groups.

Value stream analytics includes the following lifecycle metrics:

Value stream analytics includes the following DORA metrics:

DORA metrics are calculated based on data from the DORA API.

If you have a GitLab Premium or Ultimate subscription:

To view lifecycle metrics:

To view the Value Streams Dashboard and DORA metrics:

Value stream analytics shows the median time spent by issues or merge requests in each development stage.

To view the median time spent in each stage by a group:

The date range selector filters items by the event time. The event time is when the selected stage finished for the given item.

The Tasks by type chart displays the cumulative number of completed tasks (closed issues and merged merge requests) per day for your group.

The chart uses the global page filters to display data based on the selected group and time frame.

To view tasks by type:

To create a value stream with default stages:

If you have recently upgraded to GitLab Premium, it can take up to 30 minutes for data to collect and display.

To create a value stream with custom stages:

For a video explanation, see Optimizing merge request review process with Value Stream Analytics.

To measure complex workflows, you can use scoped labels. For example, to measure deployment time from a staging environment to production, you could use the following labels:

You can automatically add labels by using GitLab webhook events, so that a label is applied to merge requests or issues when a specific event occurs. Then, you can add label-based stages to track your workflow. To learn more about the implementation, see the blog post Applying GitLab Labels Automatically.

In the previous example, two independent value streams are set up for two teams that are using different development workflows in the Test Group (top-level namespace).

The first value stream uses standard timestamp-based events for defining the stages. The second value stream uses label events.

After you create a value stream, you can customize it to suit your purposes. To edit a value stream:

To delete a custom value stream:

The Total time chart shows the average number of days it takes for development cycles to complete. The chart shows data for the last 500 workflow items.

Access permissions for value stream analytics depend on the project type.

With the VSA GraphQL API, you can request metrics from your configured value streams and value stream stages. This can be useful if you want to export VSA data to an external system or for a report.

The following metrics are available:

First, you must determine which value stream you want to use in the reporting.

To request the configured value streams for a group, run:

Similarly, to request metrics for a project, run:

To request metrics for stages of a value stream, run:

Depending how you want to consume the data, you can request metrics for one specific stage or all stages in your value stream.

Requesting metrics for all stages might be too slow for some installations. The recommended approach is to request metrics stage by stage.

Requesting metrics for the stage:

You should always request metrics with a given time frame. The longest supported time frame is 180 days.

The metrics node supports additional filtering options:

Example request with filters:

Value stream analytics offers different features at the project and group level for FOSS and licensed versions.

It is possible that value stream analytics background jobs strongly impact performance by monopolizing CPU resources.

To recover from this situation:

Disable the feature for all projects in the Rails console, and remove existing jobs:

Configure a Sidekiq routing with for example a single feature_category=value_stream_management and multiple feature_category!=value_stream_management entries. Find other relevant queue metadata in the Enterprise Edition list.

Enable value stream analytics for one project after another. You might need to tweak the Sidekiq routing further according to your performance requirements.

**Examples:**

Example 1 (unknown):
```unknown
group = Group.find(-1) # put your group id here
group_to_aggregate = group.root_ancestor

loop do
  cursor = {}
  context = Analytics::CycleAnalytics::AggregationContext.new(cursor: cursor)
  service_response = Analytics::CycleAnalytics::DataLoaderService.new(group: group_to_aggregate, model: Issue, context: context).execute

  if service_response.success? && service_response.payload[:reason] == :limit_reached
    cursor = service_response.payload[:context].cursor
  elsif service_response.success?
    puts "finished"
    break
  else
    puts "failed"
    break
  end
end

loop do
  cursor = {}
  context = Analytics::CycleAnalytics::AggregationContext.new(cursor: cursor)
  service_response = Analytics::CycleAnalytics::DataLoaderService.new(group: group_to_aggregate, model: MergeRequest, context: context).execute

  if service_response.success? && service_response.payload[:reason] == :limit_reached
    cursor = service_response.payload[:context].cursor
  elsif service_response.success?
    puts "finished"
    break
  else
    puts "failed"
    break
  end
end
```

Example 2 (unknown):
```unknown
group(fullPath: "your-group-path") {
  valueStreams {
    nodes {
      id
      name
    }
  }
}
```

Example 3 (unknown):
```unknown
project(fullPath: "your-project-path") {
  valueStreams {
    nodes {
      id
      name
    }
  }
}
```

Example 4 (unknown):
```unknown
group(fullPath: "your-group-path") {
  valueStreams(id: "your-value-stream-id") {
    nodes {
      stages {
        id
        name
      }
    }
  }
}
```

---
