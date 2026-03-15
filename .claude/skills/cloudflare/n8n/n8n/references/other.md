# N8N - Other

**Pages:** 159

---

## White labelling

**URL:** llms-txt#white-labelling

**Contents:**
- Prerequisites
- Theme colors
- Theme logos
- Text localization
  - Window title

Embed requires an embed license. For more information about when to use Embed, as well as costs and licensing processes, refer to [Embed](https://n8n.io/embed/) on the n8n website.

White labelling n8n means customizing the frontend styling and assets to match your brand identity. The process involves changing two packages in n8n's source code [github.com/n8n-io/n8n](https://github.com/n8n-io/n8n):

- [packages/frontend/@n8n/design-system](https://github.com/n8n-io/n8n/tree/master/packages/frontend/@n8n/design-system): n8n's [storybook](https://storybook.js.org/) design system with CSS styles and Vue.js components
- [packages/frontend/editor-ui](https://github.com/n8n-io/n8n/tree/master/packages/frontend/editor-ui): n8n's [Vue.js](https://vuejs.org/) frontend build with [Vite.js](https://vitejs.dev)

You need the following installed on your development machine:

- [git](https://git-scm.com/downloads)
- Node.js and npm. Minimum version Node 18.17.0. You can find instructions on how to install both using nvm (Node Version Manager) for Linux, Mac, and WSL [here](https://github.com/nvm-sh/nvm). For Windows users, refer to Microsoft's guide to [Install NodeJS on Windows](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows).

Create a fork of [n8n's repository](https://github.com/n8n-io/n8n) and clone your new repository.

Install all dependencies, build and start n8n.

Whenever you make changes you need to rebuild and restart n8n. While developing you can use `npm run dev` to automatically rebuild and restart n8n anytime you make code changes.

To customize theme colors open [packages/frontend/@n8n/design-system](https://github.com/n8n-io/n8n/tree/master/packages/frontend/@n8n/design-system) and start with:

- [packages/frontend/@n8n/design-system/src/css/\_tokens.scss](https://github.com/n8n-io/n8n/blob/master/packages/frontend/@n8n/design-system/src/css/_tokens.scss)
- [packages/frontend/@n8n/design-system/src/css/\_tokens.dark.scss](https://github.com/n8n-io/n8n/blob/master/packages/frontend/@n8n/design-system/src/css/_tokens.dark.scss)

At the top of `_tokens.scss` you will find `--color-primary` variables as HSL colors:

In the following example the primary color changes to #0099ff. To convert to HSL you can use a [color converter tool](https://www.w3schools.com/colors/colors_converter.asp).

To change the editor’s logo assets look into [packages/frontend/editor-ui/public](https://github.com/n8n-io/n8n/tree/master/packages/frontend/editor-ui/public) and replace:

- favicon-16x16.png
- favicon-32x32.png
- favicon.ico
- n8n-logo.svg
- n8n-logo-collapsed.svg
- n8n-logo-expanded.svg

Replace these logo assets. n8n uses them in Vue.js components, including:

- [MainSidebar.vue](https://github.com/n8n-io/n8n/blob/master/packages/frontend/editor-ui/src/components/MainSidebar.vue): top/left logo in the main sidebar.
- [Logo.vue](https://github.com/n8n-io/n8n/blob/master/packages/frontend/editor-ui/src/components/Logo/Logo.vue): reused in other components.

In the following example replace `n8n-logo-collapsed.svg` and `n8n-logo-expanded.svg` to update the main sidebar's logo assets.

If your logo assets require different sizing or placement you can customize SCSS styles at the bottom of [MainSidebar.vue](https://github.com/n8n-io/n8n/blob/master/packages/frontend/editor-ui/src/components/MainSidebar.vue).

To change all text occurrences like `n8n` or `n8n.io` to your brand identity you can customize n8n's English internationalization file: [packages/frontend/@n8n/i18n/src/locales/en.json](https://github.com/n8n-io/n8n/blob/master/packages/frontend/@n8n/i18n/src/locales/en.json).

n8n uses the [Vue I18n](https://kazupon.github.io/vue-i18n/) internationalization plugin for Vue.js to translate the majority of UI texts. To search and replace text occurrences inside `en.json` you can use [Linked locale messages](https://kazupon.github.io/vue-i18n/guide/messages.html#linked-locale-messages).

In the following example add the `_brand.name` translation key to white label n8n's [AboutModal.vue](https://github.com/n8n-io/n8n/blob/master/packages/frontend/editor-ui/src/components/AboutModal.vue).

To change n8n's window title to your brand name, edit the following:

- [packages/frontend/editor-ui/index.html](https://github.com/n8n-io/n8n/blob/master/packages/frontend/editor-ui/index.html)
- [packages/frontend/editor-ui/src/composables/useDocumentTitle.ts](https://github.com/n8n-io/n8n/blob/master/packages/frontend/editor-ui/src/composables/useDocumentTitle.ts)

The following example replaces all occurrences of `n8n` and `n8n.io` with `My Brand` in `index.html` and `useDocumentTitle.ts`.

**Examples:**

Example 1 (unknown):
```unknown
git clone https://github.com/<your-organization>/n8n.git n8n
cd n8n
```

Example 2 (unknown):
```unknown
npm install
npm run build
npm run start
```

Example 3 (unknown):
```unknown
@mixin theme {
	--color-primary-h: 6.9;
	--color-primary-s: 100%;
	--color-primary-l: 67.6%;
```

Example 4 (unknown):
```unknown
@mixin theme {
	--color-primary-h: 204;
	--color-primary-s: 100%;
	--color-primary-l: 50%;
```

---

## RBAC role types

**URL:** llms-txt#rbac-role-types

**Contents:**
- Project Admin
- Project Editor
- Project Viewer

- The Project Editor role is available on Pro Cloud and Self-hosted Enterprise plans.
- The Project Viewer role is only available on Self-hosted Enterprise and Cloud Enterprise plans.

Within projects, there are three user roles: Admin, Editor, and Viewer. These roles control what the user can do in a project. A user can have different roles within different projects.

A Project Admin role has the highest level of permissions. Project admins can:

- Manage project settings: Change name, delete project.
- Manage project members: Invite members and remove members, change members' roles.
- View, create, update, and delete any workflows, credentials, or executions within a project.

A Project Editor can view, create, update, and delete any workflows, credentials, or executions within a project.

A Project Viewer is effectively a `read-only` role with access to all workflows, credentials, and executions within a project.

Viewers aren't able to manually execute any workflows that exist in a project.

Role types and account types

Role types and [account types](../../account-types/) are different things. Every account has one type. The account can have different role types for different [projects](../projects/).

| Permission                      | Admin | Editor | Viewer |
| ------------------------------- | ----- | ------ | ------ |
| View workflows in the project   |       |        |        |
| View credentials in the project |       |        |        |
| View executions                 |       |        |        |
| Edit credentials and workflows  |       |        |        |
| Add workflows and credentials   |       |        |        |
| Execute workflows               |       |        |        |
| Manage members                  |       |        |        |
| Modify the project              |       |        |        |

[Variables](../../../code/variables/) and [tags](../../../workflows/tags/) aren't affected by RBAC: they're global across the n8n instance.

---

## Replace 2.1.0 with your version number

**URL:** llms-txt#replace-2.1.0-with-your-version-number

npm install n8n-nodes-nodeName@2.1.0
```

---

## Limit

**URL:** llms-txt#limit

**Contents:**
- Node parameters
  - Max Items
  - Keep
- Templates and examples
- Related resources

Use the Limit node to remove items beyond a defined maximum number. You can choose whether n8n takes the items from the beginning or end of the input data.

Configure this node using the following parameters.

Enter the maximum number of items that n8n should keep. If the input data contains more than this value, n8n removes the items.

If the node has to remove items, select where it keeps the input items from:

- **First Items**: Keeps the **Max Items** number of items from the beginning of the input data.
- **Last Items**: Keeps the **Max Items** number of items from the end of the input data.

## Templates and examples

**Scrape and summarize webpages with AI**

[View template details](https://n8n.io/workflows/1951-scrape-and-summarize-webpages-with-ai/)

**Generate Leads with Google Maps**

[View template details](https://n8n.io/workflows/2605-generate-leads-with-google-maps/)

**Chat with OpenAI Assistant (by adding a memory)**

[View template details](https://n8n.io/workflows/2098-chat-with-openai-assistant-by-adding-a-memory/)

[Browse Limit integration templates](https://n8n.io/integrations/limit/), or [search all templates](https://n8n.io/workflows/)

Learn more about [data structure and data flow](../../../../data/) in n8n workflows.

---

## User management SMTP, and two-factor authentication environment variables

**URL:** llms-txt#user-management-smtp,-and-two-factor-authentication-environment-variables

File-based configuration

You can add `_FILE` to individual variables to provide their configuration in a separate file. Refer to [Keeping sensitive data in separate files](../../configuration-methods/#keeping-sensitive-data-in-separate-files) for more details.

Refer to [User management](../../user-management-self-hosted/) for more information on setting up user management and emails.

| Variable                                        | Type    | Default | Description                                                                                                                                                                                                                                                          |
| ----------------------------------------------- | ------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `N8N_EMAIL_MODE`                                | String  | `smtp`  | Enable emails.                                                                                                                                                                                                                                                       |
| `N8N_SMTP_HOST`                                 | String  | -       | *your_SMTP_server_name*                                                                                                                                                                                                                                              |
| `N8N_SMTP_PORT`                                 | Number  | -       | *your_SMTP_server_port*                                                                                                                                                                                                                                              |
| `N8N_SMTP_USER`                                 | String  | -       | *your_SMTP_username*                                                                                                                                                                                                                                                 |
| `N8N_SMTP_PASS`                                 | String  | -       | *your_SMTP_password*                                                                                                                                                                                                                                                 |
| `N8N_SMTP_OAUTH_SERVICE_CLIENT`                 | String  | -       | If using 2LO with a service account this is your client ID                                                                                                                                                                                                           |
| `N8N_SMTP_OAUTH_PRIVATE_KEY`                    | String  | -       | If using 2LO with a service account this is your private key                                                                                                                                                                                                         |
| `N8N_SMTP_SENDER`                               | String  | -       | Sender email address. You can optionally include the sender name. Example with name: *N8N `<contact@n8n.com>`*                                                                                                                                                       |
| `N8N_SMTP_SSL`                                  | Boolean | `true`  | Whether to use SSL for SMTP (true) or not (false).                                                                                                                                                                                                                   |
| `N8N_SMTP_STARTTLS`                             | Boolean | `true`  | Whether to use STARTTLS for SMTP (true) or not (false).                                                                                                                                                                                                              |
| `N8N_UM_EMAIL_TEMPLATES_INVITE`                 | String  | -       | Full path to your HTML email template. This overrides the default template for invite emails.                                                                                                                                                                        |
| `N8N_UM_EMAIL_TEMPLATES_PWRESET`                | String  | -       | Full path to your HTML email template. This overrides the default template for password reset emails.                                                                                                                                                                |
| `N8N_UM_EMAIL_TEMPLATES_WORKFLOW_SHARED`        | String  | -       | Overrides the default HTML template for notifying users that a workflow was shared. Provide the full path to the template.                                                                                                                                           |
| `N8N_UM_EMAIL_TEMPLATES_CREDENTIALS_SHARED`     | String  | -       | Overrides the default HTML template for notifying users that a credential was shared. Provide the full path to the template.                                                                                                                                         |
| `N8N_UM_EMAIL_TEMPLATES_PROJECT_SHARED`         | String  | -       | Overrides the default HTML template for notifying users that a project was shared. Provide the full path to the template.                                                                                                                                            |
| `N8N_USER_MANAGEMENT_JWT_SECRET`                | String  | -       | Set a specific JWT secret. By default, n8n generates one on start.                                                                                                                                                                                                   |
| `N8N_USER_MANAGEMENT_JWT_DURATION_HOURS`        | Number  | 168     | Set an expiration date for the JWTs in hours.                                                                                                                                                                                                                        |
| `N8N_USER_MANAGEMENT_JWT_REFRESH_TIMEOUT_HOURS` | Number  | 0       | How many hours before the JWT expires to automatically refresh it. 0 means 25% of `N8N_USER_MANAGEMENT_JWT_DURATION_HOURS`. -1 means it will never refresh, which forces users to log in again after the period defined in `N8N_USER_MANAGEMENT_JWT_DURATION_HOURS`. |
| `N8N_MFA_ENABLED`                               | Boolean | `true`  | Whether to enable two-factor authentication (true) or disable (false). n8n ignores this if existing users have 2FA enabled.                                                                                                                                          |
| `N8N_INVITE_LINKS_EMAIL_ONLY`                   | Boolean | `false` | When set to true, n8n will only deliver invite links via email and will not expose them through the API. This option enhances security by preventing invite URLs from being accessible programmatically, or to high priviledged users.                               |

---

## Specify user folder path

**URL:** llms-txt#specify-user-folder-path

n8n saves user-specific data like the encryption key, SQLite database file, and the ID of the tunnel (if used) in the subfolder `.n8n` of the user who started n8n. It's possible to overwrite the user-folder using an environment variable.

Refer to [Environment variables reference](../../environment-variables/deployment/) for more information on this variable.

**Examples:**

Example 1 (unknown):
```unknown
export N8N_USER_FOLDER=/home/jim/n8n
```

---

## Pull latest version

**URL:** llms-txt#pull-latest-version

---

## Release notes

**URL:** llms-txt#release-notes

**Contents:**
- How to update n8n
- Semantic versioning in n8n
- n8n@1.117.0
  - Contributors
- n8n@1.116.2
- n8n@1.115.4
- n8n@1.116.1
- n8n@1.116.0
  - Data migration tool
  - Contributors

New features and bug fixes for n8n.

You can also view the [Releases](https://github.com/n8n-io/n8n/releases) in the GitHub repository.

Latest and Next versions

n8n releases a new minor version most weeks. The `latest` version is for production use. `next` is the most recent release. You should treat `next` as a beta: it may be unstable. To report issues, use the [forum](https://community.n8n.io/c/questions/12).

Current `latest`: 1.116.2\
Current `next`: 1.117.0

The steps to update your n8n depend on which n8n platform you use. Refer to the documentation for your n8n:

- [Cloud](../manage-cloud/update-cloud-version/)
- Self-hosted options:
  - [npm](../hosting/installation/npm/)
  - [Docker](../hosting/installation/docker/)

## Semantic versioning in n8n

n8n uses [semantic versioning](https://semver.org/). All version numbers are in the format `MAJOR.MINOR.PATCH`. Version numbers increment as follows:

- MAJOR version when making incompatible changes which can require user action.
- MINOR version when adding functionality in a backward-compatible manner.
- PATCH version when making backward-compatible bug fixes.

You can find the release notes for older versions of n8n [here](0-x/)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.116.0...n8n@1.117.0) for this version.\
**Release date:** 2025-10-21

This is the `next` version. n8n recommends using the `latest` version. The `next` version may be unstable. To report issues, use the [forum](https://community.n8n.io/c/questions/12).

This release contains bug fixes.

[jackfrancismurphy](https://github.com/jackfrancismurphy)\
[JiriDeJonghe](https://github.com/JiriDeJonghe)\
[ramkrishna2910](https://github.com/ramkrishna2910)\
Oracle and/or its affiliates ([sudarshan12s](https://github.com/sudarshan12s))

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.116.1...n8n@1.116.2) for this version.\
**Release date:** 2025-10-21

This is the `latest` version. n8n recommends using the `latest` version. The `next` version may be unstable. To report issues, use the [forum](https://community.n8n.io/c/questions/12).

This release contains a bug fix.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.115.3...n8n@1.115.4) for this version.\
**Release date:** 2025-10-21

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.116.0...n8n@1.116.1) for this version.\
**Release date:** 2025-10-14

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.115.0...n8n@1.116.0) for this version.\
**Release date:** 2025-10-13

This release contains bug fixes.

### Data migration tool

You can now easily migrate n8n data between different database types. This new tooling currently supports SQLite and Postgres, making the transition to a scaling database choice simpler, allowing you to take your data with you.

The tooling comes in the form of two new CLI commands, `export:entities` and `import:entities`

**`Export`** The new export command lets you export data from your existing n8n database (SQLite / Postgres), producing a set of encrypted files within a compressed directory for you to move around and use with the import commands.

For details, see [Export entities](../hosting/cli-commands/#export-entities)

**`Import`** The new import command allows you to read from a compressed and encrypted set of files generated from the new export command, and import them in to your new database of choice (SQLite / Postgres) to be used with your n8n instance.

For details, see [Import entities](../hosting/cli-commands/#import-entities)

[JHTosas](https://github.com/JHTosas)\
[clesecq](https://github.com/clesecq)\
[Gulianrdgd](https://github.com/Gulianrdgd)\
[tishun](https://github.com/tishun)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.115.0...n8n@1.116.0) for this version.\
**Release date:** 2025-10-13

This release contains bug fixes.

[JHTosas](https://github.com/JHTosas)\
[clesecq](https://github.com/clesecq)\
[Gulianrdgd](https://github.com/Gulianrdgd)\
[tishun](https://github.com/tishun)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.115.2...n8n@1.115.3) for this version.\
**Release date:** 2025-10-14

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.115.1...n8n@1.115.2) for this version.\
**Release date:** 2025-10-10

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.114.3...n8n@1.114.4) for this version.\
**Release date:** 2025-10-07

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.114.0...n8n@1.115.0) for this version.\
**Release date:** 2025-10-06

This release contains bug fixes.

### AI Workflow Builder (Beta)

**AI Workflow Builder** turns your natural language prompts into working automations. Describe what you want to build, and n8n will generate a draft workflow by adding and configuring nodes and wiring up the logic for you. From there, you can refine, expand, or adjust the workflow directly in the editor.

This feature helps you move from idea to implementation faster and without losing technical control. It’s especially helpful when starting from a blank canvas, validating an approach, or exploring new nodes and capabilities. Multi-turn interaction lets you iterate in conversation, turning your ideas into structured, production-ready workflows step by step.

Learn more about how we we’re building this feature in our [forum post](https://community.n8n.io/t/ai-powered-workflow-building-coming-soon/196499).

[](/_video/release-notes/AI_Workflow_Builder.webm)

- This feature is initially going to be available for Cloud users on the 14-day Trial, Starter and Pro plans.
- Availability for Enterprise users on Cloud will follow in a future update.
- We are actively exploring the best way to bring this feature to self-hosted users.

- To ensure the smoothest experience for all users, this feature will be rolled out to users on version 1.115.0 over the course of a week so you may not have access to the feature immediately when you upgrade to 1.115.0.

**Credit limits by plan:** This feature will have monthly credit limits [by plan](https://n8n.io/pricing/).

- Each prompt/interaction with the AI Workflow Builder consumes one credit.
- Trial users have access to 20 credits, Starter plans have 50 per month and Pro plans will have 150 credits per month.
- At this time, there will not be a way to access additional credits within your plan, however we are we are exploring this.

Learn more about AI Workflow Builder in [documentation](https://docs.n8n.io/advanced-ai/ai-workflow-builder/).

### Source Control: Added HTTPS support

You can now connect to Git repositories via HTTPS in addition to SSH, making Source Control usable in environments where SSH is restricted.

HTTPS is now supported as a connection type in Environments.

[baileympearson](https://github.com/baileympearson)\
[h40huynh](https://github.com/h40huynh)\
[Ankit-69k](https://github.com/Ankit-69k)\
[francisfontoura](https://github.com/francisfontoura)\
[iocanel](https://github.com/iocanel)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.114.2...n8n@1.114.3) for this version.\
**Release date:** 2025-10-06

This release contains bug fixes.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.114.1...n8n@1.114.2) for this version.\
**Release date:** 2025-10-02

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.114.0...n8n@1.114.1) for this version.\
**Release date:** 2025-10-02

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.113.0...n8n@1.114.0) for this version.\
**Release date:** 2025-09-29

This release contains core updates, editor improvements, project updates, performance improvements, and bug fixes.

[nealzhu3](https://github.com/nealzhu3)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.113.2...n8n@1.113.3) for this version.\
**Release date:** 2025-09-26

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.112.5...n8n@1.112.6) for this version.\
**Release date:** 2025-09-26

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.113.1...n8n@1.113.2) for this version.\
**Release date:** 2025-09-24

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

### Python task runner

This version introduces the **Python task runner** as a beta feature. This feature secures n8n's Python sandbox and enables users to run real Python modules in n8n workflows. The original Pyodide-based implementation will be phased out.

This is a **breaking change** that replaces Pyodide - see [here](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.code/#python-native-beta) for a list of differences. Any Code node set to the legacy `python` parameter will need to be manually updated to use the new `pythonNative` parameter. Any Code node script set to `python` and relying on Pyodide syntax is likely to need to be manually adjusted to account for breaking changes.

- For self-hosting users, see [here](https://docs.n8n.io/hosting/configuration/task-runners/#setting-up-external-mode) for deployment instructions for task runners going forward and how to install extra dependencies.
- On n8n Cloud, this will be a gradual transition. If in your n8n Cloud instance the Code node offers an option named "Python (Native) (Beta)", then your instance has been transitioned to native Python and you will need to look out for any breaking changes. Imports are disabled for security reasons at this time.

The native Python runner is currently in beta and is subject to change as we find a balance between security and usability. Your feedback is welcome.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.112.4...n8n@1.112.5) for this version.\
**Release date:** 2025-09-24

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.113.0...n8n@1.113.1) for this version.\
**Release date:** 2025-09-23

This release contains bug fixes.

We’re excited to introduce **data tables**, bringing built-in data storage to n8n. You can now store and query structured data directly inside the platform, without relying on external databases for many common automation scenarios. Track workflow state between runs, store tokens or session data, keep product or customer reference tables, or stage intermediate results for multi-step processes.

Previously, persisting data meant provisioning and connecting to an external store such as Redis or Google Sheets. That added credential setup, infrastructure overhead, latency, and constant context switching. **Data tables** eliminate that friction and keeps your data easily editable and close to your workflows.

Data tables are available today on all plans. They currently support numbers, strings, and datetimes with JSON support coming soon. On Cloud, each instance can store up to 50 MB. On self-hosted setups, the default is also 50 MB, but this limit can be adjusted if your infrastructure allows.

[Overview of data tables](https://www.youtube.com/watch?v=ljkiIkt6lZ4)

**Create a data table**

- From the canvas, open the **Create workflow** dropdown and select **Create Data table**.
- Or, go to the **Overview** panel on the left-side navigation bar and open the **Data tables** tab.

**Use a data table in your workflow**

- Add the **Data table node** to your workflow to get, update, insert, upsert, or delete rows.

**Adjust the storage limit** (self-hosted only)

- Change the default 50 MB limit with the environment variable: `N8N_DATA_TABLES_MAX_SIZE_BYTES`. [See configuration docs](https://docs.n8n.io/hosting/configuration/configuration-methods/).

- Data tables don’t currently support foreign keys or default values.
- For now, all data tables are accessible to everyone in a project. More granular permissions and sharing options are planned.

Learn more about [**data tables**](../data/data-tables/) and the [**Data table node**](../integrations/builtin/core-nodes/n8n-nodes-base.datatable/).

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.112.3...n8n@1.112.4) for this version.\
**Release date:** 2025-09-23

This release contains an editor improvement.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.112.0...n8n@1.113.0) for this version.\
**Release date:** 2025-09-22

This release contains core updates, editor improvements, a new node, node updates, and bug fixes.

We’ve made updates to strengthen Single Sign-On (SSO) reliability and security, especially for enterprise and multi-instance setups.

- OIDC and SAML sync in multi-main setups \[version: 1.113.0\]: In multi-main deployments, updates to SSO settings are now synchronized across all instances, ensuring consistent login behavior everywhere.
- Enhanced OIDC integration \[version 1.111.0\]: n8n now supports OIDC providers that enforce state and nonce parameters. These are validated during login, providing smoother and more secure Single Sign-On.

### Filter insights by project

We've added project filtering to insights, enabling more granular reporting and visibility into individual project performance.

[ongdisheng](https://github.com/ongdisheng)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.112.2...n8n@1.112.3) for this version.\
**Release date:** 2025-09-19

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.111.0...n8n@1.111.1) for this version.\
**Release date:** 2025-09-19

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.110.1...n8n@1.110.2) for this version.\
**Release date:** 2025-09-19

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.112.1...n8n@1.112.2) for this version.\
**Release date:** 2025-09-18

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.112.0...n8n@1.112.1) for this version.\
**Release date:** 2025-09-17

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.111.0...n8n@1.112.0) for this version.\
**Release date:** 2025-09-15

This release contains API improvements, core updates, editor improvements, node updates, and bug fixes.

### Additional API Endpoints versions

We’ve made several updates to the Executions API:

- Execution details: `GET /executions` now includes *status* and *workflow_name* in the response.
- Retry execution endpoint: Added new public API endpoints to retry failed executions.
- Additional filters: You can now filter executions by running or canceled status.

### Enhancements to workflow diff

We added a several updates on workflows diffs as well:

- Better view in Code nodes and Stickies: Workflow diffs now highlight changes per line instead of per block, making edits easier to review and understand.
- Enable/Disable sync: You can now enable or disable sync in the viewport, letting you compare a workflow change in one view without affecting the other.

[GuraaseesSingh](https://github.com/GuraaseesSingh)\
[jabbson](https://github.com/jabbson)\
[ongdisheng](https://github.com/ongdisheng)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.110.0...n8n@1.111.0) for this version.\
**Release date:** 2025-09-08

This release contains core updates, API improvements, node updates, and bug fixes.

[abellion](https://github.com/abellion)\
[cesars-gh](https://github.com/cesars-gh)\
[durran](https://github.com/durran)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.110.0...n8n@1.110.1) for this version.\
**Release date:** 2025-09-03

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.109.1...n8n@1.109.2) for this version.\
**Release date:** 2025-09-03

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.109.0...n8n@1.110.0) for this version.\
**Release date:** 2025-09-01

This release contains core updates, editor improvements, node updates, performance improvements, and bug fixes.

[heyxmirko](https://github.com/heyxmirko)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.109.0...n8n@1.109.1) for this version.\
**Release date:** 2025-08-27

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.108.1...n8n@1.108.2) for this version.\
**Release date:** 2025-08-27

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.108.0...n8n@1.109.0) for this version.\
**Release date:** 2025-08-25

This release contains core updates, editor improvements, node updates, performance improvements, and bug fixes.

[naXa777](https://github.com/naXa777)\
[prettycode2022](https://github.com/prettycode2022)\
[oppai](https://github.com/oppai)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.107.3...n8n@1.107.4) for this version.\
**Release date:** 2025-08-20

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.108.0...n8n@1.108.1) for this version.\
**Release date:** 2025-08-20

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.107.2...n8n@1.107.3) for this version.\
**Release date:** 2025-08-18

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.107.0...n8n@1.108.0) for this version.\
**Release date:** 2025-08-18

This release contains a new CLI tool, editor improvements, node updates, performance improvements, and bug fixes.

For teams working across different environments, deployments often involve multiple people making changes at different times. Without a clear view of those changes, it’s easy to miss something important.

[Workflow Diff](../source-control-environments/using/compare-changes/) gives you an easy and visual way to review workflow changes before you deploy them between environments.

- Quickly see what’s been added, changed, or deleted, with clear colour highlights.
- Easily see important settings changes on a workflow.
- Check changes inside each node, and spot connector updates, with a side-by-side view of its settings.
- Get a quick count of all changes to understand the size of a deployment.

Workflow Diff eases the review and approval of changes before deployment, enabling teams to collaborate on workflows without breaking existing automations or disrupting production. It’s one step further in integrating DevOps best practices in n8n.

Now available for Enterprise customers using Environments.

[ManuLasker](https://github.com/ManuLasker)\
[EternalDeiwos](https://github.com/EternalDeiwos)\
[jreyesr](https://github.com/jreyesr)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.107.1...n8n@1.107.2) for this version.\
**Release date:** 2025-08-15

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.107.0...n8n@1.107.1) for this version.\
**Release date:** 2025-08-14

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.106.2...n8n@1.106.3) for this version.\
**Release date:** 2025-08-11

This release contains a backported update.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.106.0...n8n@1.107.0) for this version.\
**Release date:** 2025-08-11

This release contains bug fixes.

[Amsal1](https://github.com/Amsal1)\
[andrewzolotukhin](https://github.com/andrewzolotukhin)\
[DMA902](https://github.com/DMA902)\
[fkowal](https://github.com/fkowal)\
[Gulianrdgd](https://github.com/Gulianrdgd)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.106.1...n8n@1.106.2) for this version.\
**Release date:** 2025-08-08

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.106.0...n8n@1.106.1) for this version.\
**Release date:** 2025-08-07

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.105.3...n8n@1.105.4) for this version.\
**Release date:** 2025-08-07

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.105.2...n8n@1.105.3) for this version.\
**Release date:** 2025-08-05

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.105.0...n8n@1.106.0) for this version.\
**Release date:** 2025-08-04

This release contains performance improvements, core updates, editor improvements, node updates, a new node, and bug fixes.

### **No more limit of active workflows and new self-hosted Business Plan**

We have rolled out a new pricing model to make it easier for builders of all sizes to adopt and scale automation with n8n.

**No more limit of active workflows.**

All n8n plans, from Starter to Enterprise, now include unlimited users, workflows, and steps. Our pricing is based on the volume of executions. Meaning you can build and test as many workflows as you want, including complex, data-heavy, or long-running automations, without worrying about quotas.

**New self-hosted Business Plan for growing teams**

Designed for SMBs and mid-sized companies, the Business Plan includes features such as:

- 6 shared projects
- SSO, SAML and LDAP
- Different environments
- Global variables
- Version control using Git
- 30 days of Insights

Please note that this plan only includes support from our community forum. For dedicated support we recommend upgrading to our Enterprise plan.

**Enterprise pricing now scales with executions**

Enterprise plans no longer use workflow-based pricing, and is now also based on the volume of executions.

***What you need to do***

To ensure these changes apply to your account, update your n8n instance to the latest version.

[Read the blog](https://blog.n8n.io/build-without-limits-everything-you-need-to-know-about-n8ns-new-pricing/) for full details.

[baruchiro](https://github.com/baruchiro)\
[killthekitten](https://github.com/killthekitten)\
[baileympearson](https://github.com/baileympearson)\
[Yingrjimsch](https://github.com/Yingrjimsch)\
[joshualipman123](https://github.com/joshualipman123)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.105.1...n8n@1.105.2) for this version.\
**Release date:** 2025-08-01

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.105.0...n8n@1.105.1) for this version.\
**Release date:** 2025-08-01

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.104.1...n8n@1.104.2) for this version.\
**Release date:** 2025-07-31

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.104.0...n8n@1.105.0) for this version.\
**Release date:** 2025-07-28

This release contains core updates, editor improvements, node updates, and bug fixes.

### **Respond to Chat node**

With the [\*\*Respond to Chat](../integrations/builtin/core-nodes/n8n-nodes-langchain.respondtochat/) node\*\*, you can now access Human-in-the-Loop functionality natively in n8n Chat.

Enable conversational experiences where you can ask for clarification, request approval before taking further action, and get back intermediate results — all within a single workflow execution.

This unlocks multi-turn interactions that feel more natural and reduce the number of executions required. It is ideal for building interactive AI use cases like conversational forms, branched workflows based on user replies, and step-by-step approvals.

- Add a **Chat Trigger** node and select **Using Respond Nodes** for the **Response mode**
- Place the **Respond to Chat** node anywhere in your workflow to send a message into the Chat and optionally wait for the user to input a response before continuing execution of the workflow steps.

[](/_video/release-notes/Respond-to-chat.webm)

[dana-gill](https://github.com/dana-gill)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.104.0...n8n@1.104.1) for this version.\
**Release date:** 2025-07-23

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.103.1...n8n@1.103.2) for this version.\
**Release date:** 2025-07-22

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.103.0...n8n@1.104.0) for this version.\
**Release date:** 2025-07-21

This release contains core updates, editor improvements, a new node, node updates, and bug fixes.

[nunulk](https://github.com/nunulk)\
[iaptsiauri](https://github.com/iaptsiauri)\
[KGuillaume-chaps](https://github.com/KGuillaume-chaps)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.101.2...n8n@1.101.3) for this version.\
**Release date:** 2025-07-18

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.102.3...n8n@1.102.4) for this version.\
**Release date:** 2025-07-17

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.103.0...n8n@1.103.1) for this version.\
**Release date:** 2025-07-17

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.102.2...n8n@1.102.3) for this version.\
**Release date:** 2025-07-14

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.102.0...n8n@1.103.0) for this version.\
**Release date:** 2025-07-14

This release contains core updates, editor improvements, new nodes, node improvements, and bug fixes.

### **Chat streaming**

No more waiting for full responses to load when using the n8n chat interface. **Streaming** now delivers AI-generated text replies word by word so users can read messages as they’re being generated. It feels faster, smoother, and more like what people expect from chat experiences.

Streaming is available in public chat views (hosted or embedded) and can be used in custom apps via webhook.

Configure streaming in the Node Details View of these nodes:

- Chat Trigger node: Options>Add Field>Response Mode>Streaming
- Webhook node: Respond>Streaming
- AI Agent node: Add option> Enable streaming

[](/_video/release-notes/streaming.webm)

### Improved instance user list with more visibility

The instance user list has been updated with a new table layout and additional details to help admins manage access more easily.

- See total users and filter by name or email
- View which projects each user has access to
- Whether a user has enabled 2FA and sort based on that
- See the last active date for each user

This makes it easier to audit user activity, identify inactive accounts, and understand how access is distributed across your instance.

### Webhook HTML responses

Starting with this release, if your workflow sends an HTML response to a webhook, n8n automatically wraps the content in an `<iframe>`. This is a security mechanism to protect the instance users.

This has the following implications:

- HTML renders in a sandboxed iframe instead of directly in the parent document.
- JavaScript code that attempts to access the top-level window or local storage will fail.
- Authentication headers aren't available in the sandboxed iframe (for example, basic auth). You need to use an alternative approach, like embedding a short-lived access token within the HTML.
- Relative URLs (for example, `<form action="/">`) won't work. Use absolute URLs instead.

### Built-in Metrics for AI Evaluations

Using evaluations is a best practice for any AI solution, and a must if reliability and predictability are business-critical. With this release, we’ve made it easier to set up evaluations in n8n by introducing a set of built-in metrics. These metrics can review AI responses and assign scores based on factors like correctness, helpfulness, and more.

You can run regular evaluations and review scores over time as a way to monitor your AI workflow's performance. You can also compare results across different models to help guide model selection, or run evaluations before and after a prompt change to support data-driven, iterative building.

As with all evaluations in n8n, you’ll need a dataset that includes the inputs you want to test. For some evaluations, the dataset must also include expected outputs (ground truth) to compare against. The evaluation workflow runs each input through the portion you're testing to generate a response. The built-in metric scores each response based on the aspect you're measuring, allowing you to compare results before and after changes or track trends over time in the Evaluations tab.

You can still define your own custom metrics, but for common use cases, the built-in options make it much faster to implement.

1. Set up your evaluation as described [here](../advanced-ai/evaluations/metric-based-evaluations/#how-it-works), using an **Evaluation** node as the trigger and another with the **Set Metrics** operation.
1. In the **Set Metrics** node, choose a metric from the dropdown list.
1. Define any additional parameters required for your selected metric. In most cases, this includes mapping the dataset columns to the appropriate fields.

📏 **Available built-in metrics:**

- **Correctness (AI-based):** Compares AI workflow-generated responses to expected answers. Another LLM acts as a judge, scoring the responses based on guidance you provide in the prompt.
- **Helpfulness (AI-based):** Evaluates how helpful a response is in relation to a user query, using an LLM and prompt-defined scoring criteria.
- **String Similarity:** Measures how closely the response matches the expected output by comparing strings. Useful for command generation or when output needs to follow a specific structure.
- **Categorization:** Checks whether a response matches an expected label, such as assigning items to the correct category.
- **Tools Used:** Verifies whether the AI agent called the tools you specified in your dataset. To enable this, make sure **Return Intermediate Steps** is turned on in your agent so the evaluation can access the tools it actually called.

- Registered Community Edition enables analysis of one evaluation in the **Evaluations** tab which allows easy comparison of evaluation runs over time. Pro and Enterprise plans allow unlimited evaluations in the **Evaluations** tab.

[Learn more](../advanced-ai/evaluations/overview/) about setting up and customizing evaluations.

### AI Agent Tool node

With the **AI Agent Tool** node we are introducing a simplified pattern for multi-agent orchestration that can be run in a single execution and stay entirely on one canvas. You can now connect multiple **AI Agent Tool** nodes to a primary **AI Agent** node, allowing it to supervise and delegate work across other specialized agents.

This setup is especially useful for building complex systems that function like real-world teams, where a lead agent assigns parts of a task to specialists. You can even add multiple layers of agents directing other agents, just like you would have in a real multi-tiered organizational structure. It also helps with prompt management by letting you split long, complex instructions into smaller, focused tasks across multiple agents. While similar orchestration was already possible using sub-workflows, AI Agent Tool nodes are a good choice when you want the interaction to happen within a single execution or prefer to manage and debug everything from a single canvas.

- Add an **AI Agent** node to your workflow and click **+** to create a Tools connection.
- Search for and select the **AI Agent Tool** node from the Nodes Panel.
- Name the node clearly so the primary agent can reference it, then add a short description and prompt.
- Connect any LLMs, memory, and tools the agent needs to perform its role.
- Instruct the primary **AI Agent** on when to use the **AI Agent Tool** and to pass along relevant context in its prompt.

- The orchestrating agent does not pass full execution context by default. Any necessary context must be included in the prompt.

**AI Agent Tool** nodes makes it easier to build layered, agent-to-agent workflows without relying on sub-workflows, helping you move faster when building and debugging multi-agent systems.

[ksg97031](https://github.com/ksg97031)\
[israelshenkar](https://github.com/israelshenkar)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.102.1...n8n@1.102.2) for this version.\
**Release date:** 2025-07-11

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.101.1...n8n@1.101.2) for this version.\
**Release date:** 2025-07-11

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.102.0...n8n@1.102.1) for this version.\
**Release date:** 2025-07-09

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.101.0...n8n@1.102.0) for this version.\
**Release date:** 2025-07-07

This release contains core updates, editor improvements, new nodes, node updates, and bug fixes.

### Enforce 2FA across your instance

Enterprise Instance owners can now enforce two-factor authentication (2FA) for all users in their instance.

Once enabled, any user who hasn’t set up 2FA will be redirected to complete the setup before they can continue using n8n. This helps organizations meet internal security policies and ensures stronger protection across the workspace.

This feature is available only on the Enterprise plan.

[marty-sullivan](https://github.com/marty-sullivan)\
[cesars-gh](https://github.com/cesars-gh)\
[dudanogueira](https://github.com/dudanogueira)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.101.0...n8n@1.101.1) for this version.\
**Release date:** 2025-07-03

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.100.0...n8n@1.101.0) for this version.\
**Release date:** 2025-06-30

This release contains core updates, editor improvements, node updates, and bug fixes.

[luka-mimi](https://github.com/luka-mimi)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.100.0...n8n@1.100.1) for this version.\
**Release date:** 2025-06-25

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.99.0...n8n@1.100.0) for this version.\
**Release date:** 2025-06-23

This release contains core updates, editor improvements, a new node, node updates, and bug fixes.

### Model Selector node

The [Model Selector node](../integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.modelselector/) gives you more control when working with multiple LLMs in your workflows.

Use it to determine which connected model should handle a given input, based on conditions like expressions or global variables. This makes it easier to implement model routing strategies, such as switching models based on performance, task type, cost, or availability.

🛠️ **How to:** Connect multiple model nodes to the Model Selector node, then configure routing conditions in the node’s settings.

- Rules are evaluated in order. The first matching rule determines which model is used even if others would also match.
- As a sub-node, expressions behave differently here: they always resolves to the first item rather than resolving for each item in turn.

The Model Selector node is especially useful in evaluation or production scenarios where routing logic between models needs to adapt based on performance, cost, availability, or dataset-specific needs.

### Support for OIDC (OpenID Connect) authentication

You can now use OIDC (OpenID Connect) as an authentication method for Single Sign-On (SSO).

This gives enterprise teams more flexibility to integrate n8n with their existing identity providers using a widely adopted and easy-to-manage standard. OIDC is now available alongside SAML, giving Enterprises the choice to select what best fits their internal needs.

### Project admins can now commit to Git within environments

Project admins now have the ability to commit workflow and credential changes directly to Git through the environments feature. This update streamlines the workflow deployment process by giving project-level admins direct control over committing their changes. It also ensures that the those who know their workflows best can review and commit updates themselves, without needing to involve instance-level admins.

[Learn more about source control environments](../source-control-environments/)

[aliou](https://github.com/aliou)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.99.0...n8n@1.99.1) for this version.\
**Release date:** 2025-06-19

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.98.1...n8n@1.98.2) for this version.\
**Release date:** 2025-06-18

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.98.0...n8n@1.99.0) for this version.\
**Release date:** 2025-06-16

This release contains performance improvements, core updates, editor changes, node updates, and bug fixes.

### Automatically name nodes

Default node names now update automatically based on the resource and operation selected, so you’ll always know what a node does at a glance.

This adds clarity to your canvas and saves time renaming nodes manually.

Don’t worry, automatic naming won’t break references. And, and if you’ve renamed a node yourself, we’ll leave it just the way you wrote it.

[](/_video/release-notes/automatic_node_naming.mp4)

### Support for RAG extended with built-in templates

Retrieval-Augmented Generation (RAG) can improve AI responses by providing language models access to data sources with up-to-date, domain-specific, or proprietary knowledge. RAG workflows typically rely on vector stores to manage and search this data efficiently.

To get the benefits of using vector stores, such as returning results based on semantic meaning rather than just keyword matches, you need a way to upload your data to the vector store and a way to query it.

In n8n, uploading and querying vectors stores happens in two workflows. Now, you have an example to get your started and make implementation easier with the **RAG starter template**.

- The **Load Data** workflow shows how to add data with the appropriate embedding model, split it into chunks with the [Default Data Loader](../integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.documentdefaultdataloader/), and add metadata as desired.
- The **Retriever** workflow for querying data, shows how agents and vector stores work together to help you define highly relevant results and save tokens using the **Question and Answer** tool.

Enable semantic search and the retrieval of unstructured data for increased quality and relevance of AI responses.

- Search for **RAG starter template** in the search bar of the Nodes panel to insert it into your workflow.

Learn more about implementing RAG in n8n [here](../advanced-ai/rag-in-n8n/).

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.98.0...n8n@1.98.1) for this version.\
**Release date:** 2025-06-12

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.97.0...n8n@1.98.0) for this version.\
**Release date:** 2025-06-11

This release contains performance improvements, core updates, editor changes, node updates, a new node, and bug fixes.

[luka-mimi](https://github.com/luka-mimi)\
[Alexandero89](https://github.com/Alexandero89)\
[khoazero123](https://github.com/khoazero123)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.97.0...n8n@1.97.1) for this version.\
**Release date:** 2025-06-04

This release contains backports.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.95.2...n8n@1.95.3) for this version.\
**Release date:** 2025-06-03

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.96.0...n8n@1.97.0) for this version.\
**Release date:** 2025-06-02

This release contains new features, performance improvements and bug fixes.

### Convert to sub-workflow

Large, monolithic workflows can slow things down. They’re harder to maintain, tougher to debug, and more difficult to scale. With sub-workflows, you can take a more modular approach, breaking up big workflows into smaller, manageable parts that are easier to reuse, test, understand, and explain.

Until now, creating sub-workflows required copying and pasting nodes manually, setting up a new workflow from scratch, and reconnecting everything by hand. **Convert to sub-workflow** allows you to simplify this process into a single action, so you can spend more time building and less time restructuring.

[](/_video/release-notes/convert_to_sub-workflow.mp4)

1. Highlight the nodes you want to convert to a sub-workflow. These must:
   - Be fully connected, meaning no missing steps in between them
   - Start from a single starting node
   - End with a single node
1. Right-click to open the context menu and select **Convert to sub-workflow**
   - Or use the shortcut: `Alt + X`
1. n8n will:
   - Open a new tab containing the selected nodes
   - Preserve all node parameters as-is
   - Replace the selected nodes in the original workflow with a **Call My Sub-workflow** node

*Note*: You will need to manually adjust the field types in the Start and Return nodes in the new sub-workflow.

This makes it easier to keep workflows modular, performant, and easier to maintain.

Learn more about [sub-workflows](../flow-logic/subworkflows/).

This release contains performance improvements and bug fixes.

[maatthc](https://github.com/maatthc)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.95.0...n8n@1.96.0) for this version.\
**Release date:** 2025-06-02

This release failed to build. Please use `1.97.0` instead.

This release contains API updates, core changes, editor improvements, node updates, and bug fixes.

### API support for assigning users to projects

You can now use the API to add and update users within projects. This includes:

- Assigning existing or pending users to a project with a specific role
- Updating a user’s role within a project
- Removing users from one or more projects

This update now allows you to use the API to add users to both the instance and specific projects, removing the need to manually assign them in the UI.

### Add pending users to project member assignment

You can now add **pending users,** those who have been invited but haven't completed sign-up, to projects as members.

This change lets you configure a user's project access upfront, without waiting for them to finish setting up their account. It eliminates the back-and-forth of managing access post-sign-up, ensuring users have the right project roles immediately upon joining.

[matthabermehl](https://github.com/matthabermehl)\
[Stamsy](https://github.com/Stamsy)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.95.1...n8n@1.95.2) for this version.\
**Release date:** 2025-05-29

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.95.0...n8n@1.95.1) for this version.\
**Release date:** 2025-05-27

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.94.0...n8n@1.94.1) for this version.\
**Release date:** 2025-05-27

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.94.0...n8n@1.95.0) for this version.\
**Release date:** 2025-05-26

This release contains core updates, editor improvements, node updates, and bug fixes.

### Evaluations for AI workflows

We’ve added a feature to help you iterate, test, and compare changes to your AI automations before pushing them to production so you can achieve more predictability and make better decisions.

When you're building with AI, a small prompt tweak or model swap might improve results with some inputs, while quietly degrading performance with others. But without a way to evaluate performance across many inputs, you’re left guessing whether your AI is actually getting better when you make a change.

By implementing **Evaluations for AI workflows** in n8n, you can assess how your AI performs across a range of inputs by adding a dedicated path in your workflow for running test cases and applying custom metrics to track results. This helps you build viable proof-of-concepts quickly, iterate more effectively, catch regressions early, and make more confident decisions when your AI is in production.

#### Evaluation node and tab

The **Evaluation node** includes several operations that, when used together, enable end-to-end AI evaluation.

- Run your AI logic against a wide range of test cases in the same execution
- Capture the outputs of those test cases
- Score the results using your own metrics or LLM-as-judge logic
- Isolate a testing path to only include the nodes and logic you want to evaluate

The **Evaluations tab** enables you to review test results in the n8n UI, perfect for comparing runs, spotting regressions, and viewing performance over time.

#### 🛠 How evaluations work

The evaluation path runs alongside your normal execution logic and only activates when you want—making it ideal for testing and iteration.

Get started by selecting an AI workflow you want to evaluate that includes one or more LLM or Agent nodes.

1. Add an **Evaluation** node with the **On new Evaluation event** operation. This node will act as an additional trigger you’ll run only when testing. Configure it to read your dataset from Google Sheets, with each row representing a test input.

> 💡 Better datasets mean better evaluations. Craft your dataset from a variety of test cases, including edge cases and typical inputs, to get meaningful feedback on how your AI performs. Learn more and access sample datasets [here](../advanced-ai/evaluations/light-evaluations/#1-create-a-dataset).

1. Add a second **Evaluation** node using the **Set Outputs** operation after the part of the workflow you're testing—typically after an LLM or Agent node. This captures the response and writes it back to your dataset in Google Sheets.

1. To evaluate output quality, add a third **Evaluation** node with the **Set Metrics** operation at a point after you’ve generated the outputs. You can develop workflow logic, custom calculations, or add an LLM-as-Judge to score the outputs. Map these metrics to your dataset in the node’s parameters.

> 💡 Well-defined metrics = smarter decisions. Scoring your outputs based on similarity, correctness, or categorization can help you track whether changes are actually improving performance. Learn more and get links to example templates [here](../advanced-ai/evaluations/metric-based-evaluations/#2-add-metrics-to-workflow).

When the Evaluation trigger node is executed, it runs each input in our dataset through your AI logic. This continues until all test cases are processed, a limit is reached, or you manually stop the execution. Once your evaluation path is set up, you can update your prompt, model, or workflow logic—and re-run the Evaluation trigger node to compare results. If you’ve added metrics, they’ll appear in the Evaluations tab.

In some instances, you may want to isolate your testing path to make iteration faster or to avoid executing downstream logic. In this case, you can add an Evaluation node with the `Check If Evaluating` operation to ensure only the expected nodes run when performing evaluations.

#### Things to keep in mind

Evaluations for AI Workflows are designed to fit into your development flow, with more enhancements on the way. For now, here are a few things to note:

- Test datasets are currently managed through Google Sheets. You’ll need a Google Sheets credential to run evaluations.
- Each workflow supports one evaluation at a time. If you’d like to test multiple segments, consider splitting them into sub-workflows for more flexibility.
- Community Edition supports one single evaluation. Pro and Enterprise plans allow unlimited evaluations.
- AI Evaluations are not enabled for instances in scaling mode at this time.

You can find details, tips, and common troubleshooting info [here](../advanced-ai/evaluations/tips-and-common-issues/).

👉 Learn more about the AI evaluation strategies and practical implementation techniques. [Watch now](https://www.youtube.com/live/QkciQpotQBQ?feature=shared).

[Phiph](https://github.com/Phiph)\
[cesars-gh](https://github.com/cesars-gh)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.93.0...n8n@1.94.0) for this version.\
**Release date:** 2025-05-19

This release contains editor improvements, an API update, node updates, new nodes, and bug fixes.

### Verified community nodes on Cloud

We’ve expanded the n8n ecosystem and unlocked a new level of flexibility for all users including those on n8n Cloud! Now you can access a select set of community nodes and partner integrations without leaving the canvas. This means you install and automate with a wider range of integrations without leaving your workspace. The power of the community is now built-in.

This update focuses on three major improvements:

- **Cloud availability**: Community nodes are no longer just for self-hosted users. A select set of nodes is now available on n8n Cloud.
- **Built-in discovery**: You can find and explore these nodes right from the Nodes panel without leaving the editor or searching on npm.
- **Trust and verification**: Nodes that appear in the editor have been manually vetted for quality and security. These verified nodes are marked with a checkmark.

We’re starting with a selection of around 25 nodes, including some of the most-used community-built packages and partner-supported integrations. For this phase, we focused on nodes that don’t include external package dependencies - helping streamline the review process and ensure a smooth rollout.

This is just the start. We plan to expand the library gradually, bringing even more verified nodes into the editor along with the powerful and creative use cases they unlock. In time, our criteria will evolve, opening the door to a wider range of contributions while keeping quality and security in focus.

Learn more about this update and find out which nodes are already installable from the editor in our [blog](https://blog.n8n.io/community-nodes-available-on-n8n-cloud/) post.

💻 **Use a verified node**

Make sure you're on **n8n version 1.94.0** or later and the instance Owner has enabled verified community nodes. On Cloud, this can be done from the Admin Panel. For self-hosted instances, please refer to [documentation](../hosting/configuration/environment-variables/nodes/). In both cases, verified nodes are enabled by default.

- Open the **Nodes panel** from the editor
- Search for the Node. Verified nodes are indicated by a shield 🛡️
- Select the node and click **Install**

[](/_video/release-notes/Community-nodes-node-panel.mp4)

Once an Owner installs a node, everyone on the instance can start using it—just drag, drop, and connect like any other node in your workflow.

🛠️ **Build a node and get it verified**

Want your node to be verified and discoverable from the editor? Here’s how to get involved:

1. Review the [community node verification guidelines](../integrations/creating-nodes/build/reference/verification-guidelines/).
1. If you’re building something new, follow the recommendations for [creating nodes](../integrations/creating-nodes/overview/).
1. Check your design against the [UX guidelines](../integrations/creating-nodes/build/reference/ux-guidelines/).
1. [Submit your node](../integrations/creating-nodes/deploy/submit-community-nodes/) to npm.
1. Request verification by filling out [this form](https://internal.users.n8n.cloud/form/f0ff9304-f34a-420e-99da-6103a2f8ac5b).

**Already built a node? Raise your hand!**

If you’ve already published a community node and want it considered for verification, make sure it meets the requirements noted above, then let us know by submitting the interest [form](https://internal.users.n8n.cloud/form/f0ff9304-f34a-420e-99da-6103a2f8ac5b). We’re actively curating the next batch and would love to include your work.

### Extended logs view

When workflows get complex, debugging can get... clicky. That’s where an extended **Logs View** comes in. Now you can get a clearer path to trace executions, troubleshoot issues, and understand the behavior of a complete workflow — without bouncing between node detail views.

This update brings a unified, always-accessible panel to the bottom of the canvas, showing you each step of the execution as it happens. Whether you're working with loops, sub-workflows, or AI agents, you’ll see a structured view of everything that ran, in the order it ran—with input, output, and status info right where you need it.

You can jump into node details when you want to dig deeper, or follow a single item through every step it touched. Real-time highlighting shows you which nodes are currently running or have failed, and you’ll see total execution time for any workflow—plus token usage for AI workflows to help monitor performance. And if you're debugging across multiple screens? Just pop the logs out and drag them wherever you’d like.

- Adds a **Logs view** to the bottom of the canvas that can be opened or collapsed. (Chat also appears here if your workflow uses it).
- Displays a **hierarchical list of nodes** in the order they were executed—including expanded views of sub-workflows.
- Allows you to **click a node in hierarchy** to preview inputs and outputs directly, or jump into the full Node Details view with a link.
- Provides ability to **toggle** input and output data on and off.
- Highlights each node **live as it runs**, showing when it starts, completes, or fails.
- Includes **execution history** view to explore past execution data in a similar way.
- Shows **roll-up stats** like total execution time and total AI tokens used (for AI-enabled workflows).
- Includes a **“pop out”** button to open the logs as a floating window—perfect for dragging to another screen while debugging.

To access the expanded logs view, click on the Logs bar at the bottom of the canvas. The view is also opens up when you open the chat window on the bottom of the page.

[Stamsy](https://github.com/Stamsy)\
[feelgood-interface](https://github.com/feelgood-interface)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.92.0...n8n@1.93.0) for this version.\
**Release date:** 2025-05-12

This release contains core updates, editor improvements, new nodes, node updates, and bug fixes.

### Faster ways to open sub-workflows

We’ve added several new ways to navigate your multi-workflow automations faster.

From any workflow with a sub-workflow node:

🖱️ Right-click on a sub-workflow node and select `Open sub-workflow` from the context menu

⌨️ Keyboard shortcuts

- **Windows:** `CTRL + SHIFT + O` or `CTRL + Double Click`
- **Mac:** `CMD + SHIFT + O` or `CMD + Double Click`

These options will bring your sub-workflow up in a new tab.

### Archive workflows

If you’ve ever accidentally removed a workflow, you’ll appreciate the new archiving feature. Instead of permanently deleting workflows with the Remove action, workflows are now archived by default. This allows you to recover them if needed.

- **Archive a workflow** - Select **Archive** from the Editor UI menu. It has replaced the **Remove** action.
- **Find archived workflows** - Archived workflows are hidden by default. To find your archived workflows, select the option for **Show archived workflows** in the workflow filter menu.
- **Permanently delete a workflow** - Once a workflow is archived, you can **Delete** it from the options menu.
- **Recover a workflow** - Select **Unarchive** from the options menu.

- Workflows archival requires the same permissions as required previously for removal.
- You cannot select archived workflows as sub-workflows to execute
- Active workflows are deactivated when they are archived
- Archived workflows can not be edited

[LeaDevelop](https://github.com/LeaDevelop)\
[ayhandoslu](https://github.com/ayhandoslu)\
[valentina98](https://github.com/valentina98)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.92.1...n8n@1.92.2) for this version.\
**Release date:** 2025-05-08

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.91.2...n8n@1.91.3) for this version.\
**Release date:** 2025-05-08

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.92.0...n8n@1.92.1) for this version.\
**Release date:** 2025-05-06

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.91.0...n8n@1.92.0) for this version.\
**Release date:** 2025-05-05

This release contains core updates, editor improvements, node updates, and bug fixes.

### Partial Execution for AI Tools

We’ve made it easier to build and iterate on AI agents in n8n. You can now run and test specific tools without having to execute the entire agent workflow.

Partial execution is especially useful when refining or troubleshooting parts of your agent logic. It allows you to test changes incrementally, without triggering full agent runs, reducing unnecessary AI calls, token usage, and downstream activity. This makes iteration faster, more cost-efficient, and more precise when working with complex or multi-step AI workflows.

Partial execution for AI tools is available now for all tools - making it even easier to build, test, and fine-tune AI agents in n8n.

[](/_video/release-notes/AI-agent-partial-execution.mp4)

To use this feature you can either:

- Click the **Play** button on the tool you want to execute directly from the canvas view.
- Open the tool’s **Node Details View** and select **"Execute Step"** to run it from there.

If you have previously run the workflow, the input and output will be prefilled with data from the last execution. A pop-up form will open where you can manually fill in the parameters before executing your test.

### Extended logs view

When workflows get complex, debugging can get... clicky. That’s where an extended **Logs View** comes in. Now you can get a clearer path to trace executions, troubleshoot issues, and understand the behavior of a complete workflow — without bouncing between node detail views.

This update brings a unified, always-accessible panel to the bottom of the canvas, showing you each step of the execution as it happens. Whether you're working with loops, sub-workflows, or AI agents, you’ll see a structured view of everything that ran, in the order it ran—with input, output, and status info right where you need it.

You can jump into node details when you want to dig deeper, or follow a single item through every step it touched. Real-time highlighting shows you which nodes are currently running or have failed, and you’ll see total execution time for any workflow—plus token usage for AI workflows to help monitor performance. And if you're debugging across multiple screens? Just pop the logs out and drag them wherever you’d like.

- Adds a **Logs view** to the bottom of the canvas that can be opened or collapsed. (Chat also appears here if your workflow uses it).
- Displays a **hierarchical list of nodes** in the order they were executed—including expanded views of sub-workflows.
- Allows you to **click a node in hierarchy** to preview inputs and outputs directly, or jump into the full Node Details view with a link.
- Provides ability to **toggle** input and output data on and off.
- Highlights each node **live as it runs**, showing when it starts, completes, or fails.
- Includes **execution history** view to explore past execution data in a similar way.
- Shows **roll-up stats** like total execution time and total AI tokens used (for AI-enabled workflows).
- Includes a **“pop out”** button to open the logs as a floating window—perfect for dragging to another screen while debugging.

To access the expanded logs view, click on the Logs bar at the bottom of the canvas. The view is also opens up when you open the chat window on the bottom of the page.

### Insights enhancements for Enterprise

Two weeks after the launch of [Insights](../insights/), we’re releasing some enhancements designed for enterprise users.

- **Expanded time ranges**. You can now filter insights over a variety of time periods, from the last 24 hours up to 1 year. Pro users are limited to 7 day and 14 day views.
- **Hourly granularity**. Drill down into the last 24 hours of production executions with hourly granularity, making it easier to analyze workflows and quickly identify issues.

These updates provide deeper visibility into workflow history, helping you uncover trends over longer periods and detect problems sooner with more precise reporting.

[Stamsy](https://github.com/Stamsy)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.91.1...n8n@1.91.2) for this version.\
**Release date:** 2025-05-05

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.90.2...n8n@1.90.3) for this version.\
**Release date:** 2025-05-05

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.91.0...n8n@1.91.1) for this version.\
**Release date:** 2025-05-01

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.90.0...n8n@1.91.0) for this version.\
**Release date:** 2025-04-28

This release contains core updates, editor improvements, node updates, and bug fixes.

### Breadcrumb view from the canvas

We’ve added **breadcrumb navigation directly on the canvas**, so you can quickly navigate to any of a workflow’s parent folders right from the canvas.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.90.1...n8n@1.90.2) for this version.\
**Release date:** 2025-04-25

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.90.0...n8n@1.90.1) for this version.\
**Release date:** 2025-04-22

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.89.0...n8n@1.90.0) for this version.\
**Release date:** 2025-04-22

This release contains core updates, editor updates, node updates, performance improvements, and bug fixes.

### Extended HTTP Request tool functionality

We’ve brought the full power of the HTTP Request node to the HTTP Request tool in AI workflows. That means your AI Agents now have access to all the advanced configuration options—like Pagination, Batching, Timeout, Redirects, Proxy support, and even cURL import.

[](/_video/release-notes/http-request-tool.mp4)

This update also includes support for the `$fromAI` function to dynamically generate the right parameters based on the context of your prompt — making API calls smarter, faster, and more flexible than ever.

- Open your AI Agent node in the canvas.
- Click the **‘+’ icon** to add a new tool connection.
- In the **Tools panel**, select HTTP **Request Tool.**
- Configure it just like you would a regular **HTTP Request node** — including advanced options

👉 Learn more about configuring the [HTTP Request tool](../integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolhttprequest/).

Users on the Enterprise plan can now create API keys with specific scopes to control exactly what each key can access.

Previously, API keys had full read/write access across all endpoints. While sometimes necessary, this level of access can be excessive and too powerful for most use cases. Scoped API keys allow you to limit access to only the resources and actions a service or user actually needs.

When creating a new API key, you can now:

- Select whether the key has read, write, or both types of access.
- Specify which resources the key can interact with.

Supported scopes include:

- Variables — list, create, delete
- Security audit — generate reports
- Projects — list, create, update, delete
- Executions — list, read, delete
- Credentials — list, create, update, delete, move
- Workflows — list, create, update, delete, move, add/remove tags

Scoped API keys give you more control and security. You can limit access to only what’s needed, making it safer to work with third parties and easier to manage internal API usage.

### Drag and Drop in Folders

Folders just got friendlier. With this release, you can now **drag and drop workflows and folders** — making it even easier to keep things tidy.

Need to reorganize? Just select a workflow or folder and drag it into another folder or breadcrumb location. It’s a small change that makes a big difference when managing a growing collection of workflows.

[](/_video/release-notes/Drag-and-drop-folders.mp4)

📁 Folders are available to all [registered](../hosting/community-edition-features/#registered-community-edition) users—jump in and get your workspace in order!

[Zordrak](https://github.com/Zordrak)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.89.1...n8n@1.89.2) for this version.\
**Release date:** 2025-04-16

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.89.0...n8n@1.89.1) for this version.\
**Release date:** 2025-04-15

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.88.0...n8n@1.89.0) for this version.\
**Release date:** 2025-04-14

This release contains API updates, core updates, editor updates, a new node, node updates, and bug fixes.

We're rolling out [Insights](../insights/), a new dashboard to monitor how your workflows are performing over time. It's designed to give admins (and owners) better visibility of their most important workflow metrics and help troubleshoot potential issues and improvements.

In this first release, we’re introducing a summary banner, the insights dashboard, and time saved per execution.

#### 1. Summary banner

A new banner on the overview page that gives instance admins and owners a birds eye view of key metrics over the last 7 days.

Insights summary banner

- Total production executions
- Total failed executions
- Failure rate
- Average runtime of all workflows
- Estimated time saved

This overview is designed to help you stay on top of workflow activity at a glance. It is available for all plans and editions.

#### 2. Insights dashboard

On Pro and Enterprise plans, a new dashboard offers a deeper view into workflow performance and activity.

The dashboard includes:

- Total production executions over time, including a comparison of successful and failed executions
- Per-workflow breakdowns of key metrics
- Comparisons with previous periods to help spot changes in usage or behavior
- Runtime average and failure rate over time

#### 3. Time saved per execution

Within workflow settings, you can now assign a “time saved per execution” value to any workflow. This makes it possible to track the impact of your workflows and make it easier to share this visually with other teams and stakeholders.

This is just the beginning for Insights: the next phase will introduce more advanced filtering and comparisons, custom date ranges, and additional monitoring capabilities.

- We added a credential check for the Salesforce node
- We added SearXNG as a tool for AI agents

You can now search within subfolders, making it easier to find workflows across all folder levels. Just type in the search bar and go.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.87.0...n8n@1.88.0) for this version.\
**Release date:** 2025-04-10

This release contains new features, new nodes, performance improvements, and bug fixes.

### Model Context Protocol (MCP) nodes

MCP aims to standardise how LLMs like Claude, ChatGPT, or Cursor can interact with tools or integrate data for their agents. Many providers - both established or new - are adopting MCP as a standard way to build agentic systems. It is an easy way to either expose your own app as a server, making capabilities available to a model as tools, or as a client that can call on tools outside of your own system.

While it’s still early in the development process, we want to give you access to our new MCP nodes. This will help us understand your requirements better and will also let us converge on a great general solution quicker.

We are adding two new nodes:

- a MCP [Server Trigger](../integrations/builtin/core-nodes/n8n-nodes-langchain.mcptrigger/) for any workflow
- a MCP [Client Tool](../integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolmcp/) for the AI Agent

The MCP Server Trigger turns n8n into an MCP server, providing n8n tools to models running outside of n8n. You can run multiple MCP servers from your n8n instance. The MCP Client Tool connects LLMs - and other intelligent agents - to any MCP-enabled service through a single interface.

Max from our DevRel team created an official walkthrough for you to get started:

[Studio Update #04](https://youtu.be/45WPU7P-1QQ?feature=shared)

### MCP Server Trigger

The MCP Server Trigger turns n8n into an MCP server, providing n8n tools to models running outside of n8n. The node acts as an entry point into n8n for MCP clients. It operates by exposing a URL that MCP clients can interact with to access n8n tools. This means your n8n workflows and integrations are now available to models run elsewhere. Pretty neat.

[Explore the MCP Server Trigger docs](../integrations/builtin/core-nodes/n8n-nodes-langchain.mcptrigger/)

The MCP Client Tool node is a MCP client, allowing you to use the tools exposed by an external MCP server. You can connect the MCP Client Tool node to your models to call external tools with n8n agents. In this regard it is similar to using a n8n tool with your AI agent. One advantage is that the MCP Client Tool can access multiple tools on the MCP server at once, keeping your canvas cleaner and easier to understand.

[Explore the MCP Client Tool docs](../integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolmcp/)

- Added a node for Azure Cosmos DB
- Added a node for Milvus Vector Store
- Updated the Email Trigger (IMAP) node

[adina-hub](https://github.com/adina-hub)\
[umanamente](https://github.com/umanamente)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.87.1...n8n@1.87.2) for this version.\
**Release date:** 2025-04-09

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.86.0...n8n@1.86.1) for this version.\
**Release date:** 2025-04-09

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.87.0...n8n@1.87.1) for this version.\
**Release date:** 2025-04-08

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.86.0...n8n@1.87.0) for this version.\
**Release date:** 2025-04-07

This release contains new nodes, node updates, API updates, core updates, editor updates, and bug fixes.

[cesars-gh](https://github.com/cesars-gh)\
[Stamsy](https://github.com/Stamsy)\
[Pash10g](https://github.com/Pash10g)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.85.0...n8n@1.86.0) for this version.\
**Release date:** 2025-03-31

This release contains API updates, core updates, editor improvements, node updates, and bug fixes.

[Aijeyomah](https://github.com/Aijeyomah)\
[ownerer](https://github.com/ownerer)\
[ulevitsky](https://github.com/ulevitsky)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.85.3...n8n@1.85.4) for this version.\
**Release date:** 2025-03-27

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.84.2...n8n@1.84.3) for this version.\
**Release date:** 2025-03-27

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.84.1...n8n@1.84.2) for this version.\
**Release date:** 2025-03-26

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.85.2...n8n@1.85.3) for this version.\
**Release date:** 2025-03-26

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.85.1...n8n@1.85.2) for this version.\
**Release date:** 2025-03-25

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.85.0...n8n@1.85.1) for this version.\
**Release date:** 2025-03-25

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.84.0...n8n@1.85.0) for this version.\
**Release date:** 2025-03-24

This release contains a new node, a new credential, core updates, editor updates, node updates, and bug fixes.

What can we say about folders? Well, they’re super handy for categorizing just about everything and they’re finally available for your n8n workflows. Tidy up your workspace with unlimited folders and nested folders. Search for workflows within folders. It’s one of the ways we’re making it easier to organize your n8n instances more effectively.

Create and manage folders within your personal space or within projects. You can also create workflows from within a folder. You may need to restart your instance in order to activate folders.

It's a folder alright

Folders are available for all [registered](../hosting/community-edition-features/#registered-community-edition) users so get started with decluttering your workspace now and look for more features (like drag and drop) to organize your instances soon.

### Enhancements to Form Trigger Node

Recent updates to the Form Trigger node have made it a more powerful tool for building business solutions. These enhancements provide more flexibility and customization, enabling teams to create visually engaging and highly functional workflows with forms.

- **HTML customization:** Add custom HTML to forms, including embedded images and videos, for richer user experiences.
- **Custom CSS support**: Apply custom styles to user-facing components to align forms with your brand’s look and feel. Adjust fonts, colors, and spacing for a seamless visual identity.
- **Form previews:** Your form’s description and title will pull into previews of your form when sharing on social media or messaging apps, providing a more polished look.
- **Hidden fields:** Use query parameters to add hidden fields, allowing you to pass data—such as a referral source—without exposing it to the user.
- **New responses options:** Respond to user submissions in multiple ways including text, HTML, or a downloadable file (binary format). This enables forms to display rich webpages or deliver digital assets such as dynamically generated invoices or personalized certificates.

Form with custom CSS applied

These improvements elevate the Form Trigger node beyond a simple workflow trigger, transforming it into a powerful tool for addressing use cases from data collection and order processing to custom content creation.

[Fank](https://github.com/Fank)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.84.0...n8n@1.84.1) for this version.\
**Release date:** 2025-03-18

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.83.0...n8n@1.84.0) for this version.\
**Release date:** 2025-03-17

This release contains a new node, node updates, editor updates, and bug fixes.

[Pash10g](https://github.com/Pash10g)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.83.1...n8n@1.83.2) for this version.\
**Release date:** 2025-03-14

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.82.3...n8n@1.82.4) for this version.\
**Release date:** 2025-03-14

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.82.2...n8n@1.82.3) for this version.\
**Release date:** 2025-03-13

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.83.0...n8n@1.83.1) for this version.\
**Release date:** 2025-03-12

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.82.0...n8n@1.83.0) for this version.\
**Release date:** 2025-03-12

This release contains bug fixes and an editor update.

Schema Preview lets you view and work with a node’s expected output without executing it or adding credentials, keeping you in flow while building.

- **See expected node outputs instantly.** View schemas for over 100+ nodes to help you design workflows efficiently without extra steps.
- **Define workflow logic first, take care of credentials later.** Build your end-to-end workflow without getting sidetracked by credential setup.
- **Avoid unwanted executions when building.** Prevent unnecessary API calls, unwanted data changes, or potential third-party service costs by viewing outputs without executing nodes.

- Add a node with Schema Preview support to your workflow.
- Open the next node in the sequence - Schema Preview data appears in the Node Editor where you would typically find it in the Schema View.
- Use Schema Preview fields just like other schema data - drag and drop them into parameters and settings as needed.

[](/_video/release-notes/Schema_preview.mp4)

Don’t forget to add the required credentials before putting your workflow into production.

[pemontto](https://github.com/pemontto)\
[Haru922](https://github.com/Haru922)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.82.1...n8n@1.82.2) for this version.\
**Release date:** 2025-03-12

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.82.0...n8n@1.82.1) for this version.\
**Release date:** 2025-03-04

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.81.0...n8n@1.82.0) for this version.\
**Release date:** 2025-03-03

This release contains core updates, editor updates, new nodes, node updates, new credentials, credential updates, and bug fixes.

Tidy up instantly aligns nodes, centers stickies, untangles connections, and brings structure to your workflows. Whether you're preparing to share a workflow or just want to improve readability, this feature saves you time and makes your logic easier to follow. Clean, well-organized workflows aren't just nicer to look at—they’re also quicker to understand.

Open the workflow you want to tidy, then choose one of these options:

- Click the **Tidy up** button in the bottom-left corner of the canvas (it looks like a broom 🧹)
- Press **Shift + Alt + T** on your keyboard
- Right-click anywhere on the canvas and select **Tidy up workflow**

Want to tidy up just part of your workflow? Select the specific nodes you want to clean up first - Tidy up will only adjust those, along with any stickies behind them.

[](/_video/release-notes/tidy_up.mp4)

### Multiple API keys

n8n now supports multiple API keys, allowing users to generate and manage separate keys for different workflows or integrations. This improves security by enabling easier key rotation and isolation of credentials. Future updates will introduce more granular controls.

[Rostammahabadi](https://github.com/Rostammahabadi)\
[Lanhild](https://github.com/Lanhild)\
[matthiez](https://github.com/matthiez)\
[feelgood-interface](https://github.com/feelgood-interface)\
[adina-hub](https://github.com/adina-hub)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.81.3...n8n@1.81.4) for this version.\
**Release date:** 2025-03-03

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.81.2...n8n@1.81.3) for this version.\
**Release date:** 2025-03-03

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.81.1...n8n@1.81.2) for this version.\
**Release date:** 2025-02-28

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.80.4...n8n@1.80.5) for this version.\
**Release date:** 2025-02-28

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.80.3...n8n@1.80.4) for this version.\
**Release date:** 2025-02-27

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.81.0...n8n@1.81.1) for this version.\
**Release date:** 2025-02-27

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.80.0...n8n@1.81.0) for this version.\
**Release date:** 2025-02-24

This release contains bug fixes, a core update, editor improvements, and a node update.

### Improved partial executions

The new execution engine for partial executions ensures that testing parts of a workflow in the builder closely mirrors production behaviour. This makes iterating with updated run-data faster and more reliable, particularly for complex workflows.

Before, user would test parts of a workflow in the builder that didn't consistently reflect production behaviour, leading to unexpected results during development.

This update aligns workflow execution in the builder with production behavior.

Here is an example for loops:

[](/_video/release-notes/Partial-execution-loop-before.mp4)

[](/_video/release-notes/Partial-execution-loop-after.mp4)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.80.2...n8n@1.80.3) for this version.\
**Release date:** 2025-02-21

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.79.3...n8n@1.79.4) for this version.\
**Release date:** 2025-02-21

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.80.1...n8n@1.80.2) for this version.\
**Release date:** 2025-02-21

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.79.2...n8n@1.79.3) for this version.\
**Release date:** 2025-02-21

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.80.0...n8n@1.80.1) for this version.\
**Release date:** 2025-02-20

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.79.1...n8n@1.79.2) for this version.\
**Release date:** 2025-02-20

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.79.0...n8n@1.80.0) for this version.\
**Release date:** 2025-02-17

This release contains bug fixes and an editor improvement.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.75.2...n8n@1.75.3) for this version.\
**Release date:** 2025-02-17

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.74.3...n8n@1.74.4) for this version.\
**Release date:** 2025-02-17

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.79.0...n8n@1.79.1) for this version.\
**Release date:** 2025-02-15

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.78.0...n8n@1.78.1) for this version.\
**Release date:** 2025-02-15

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.77.3...n8n@1.77.4) for this version.\
**Release date:** 2025-02-15

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.76.3...n8n@1.76.4) for this version.\
**Release date:** 2025-02-15

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.77.0...n8n@1.78.0) for this version.\
**Release date:** 2025-02-12

This release contains new features, node updates, and bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.77.2...n8n@1.77.3) for this version.\
**Release date:** 2025-02-06

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.77.0...n8n@1.78.0) for this version.\
**Release date:** 2025-02-05

This release contains new features, node updates, and bug fixes.

[mocanew](https://github.com/mocanew)\
[Timtendo12](https://github.com/Timtendo12)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.77.1...n8n@1.77.2) for this version.\
**Release date:** 2025-02-04

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.76.2...n8n@1.76.3) for this version.\
**Release date:** 2025-02-04

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.77.0...n8n@1.77.1) for this version.\
**Release date:** 2025-02-03

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.76.1...n8n@1.76.2) for this version.\
**Release date:** 2025-02-03

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.76.0...n8n@1.77.0) for this version.\
**Release date:** 2025-01-29

This release contains new features, editor updates, new nodes, new credentials, node updates, and bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.76.0...n8n@1.76.1) for this version.\
**Release date:** 2025-01-23

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.75.0...n8n@1.76.0) for this version.\
**Release date:** 2025-01-22

This release contains new features, editor updates, new credentials, node improvements, and bug fixes.

[Stamsy](https://github.com/Stamsy)\
[GKdeVries](https://github.com/GKdeVries)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.75.1...n8n@1.75.2) for this version.\
**Release date:** 2025-01-17

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.74.2...n8n@1.74.3) for this version.\
**Release date:** 2025-01-17

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.75.0...n8n@1.75.1) for this version.\
**Release date:** 2025-01-17

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.74.1...n8n@1.74.2) for this version.\
**Release date:** 2025-01-17

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.74.0...n8n@1.75.0) for this version.\
**Release date:** 2025-01-15

This release contains bug fixes and editor updates.

### Improved consistency across environments

We added new UX and automatic changes improvements resulting in a better consistency between your staging and production instances.

Previously, users faced issues like:

- Lack of visibility into required credential updates when pulling changes
- Incomplete synchronization, where changes — such as deletions — weren’t always applied across environments
- Confusing commit process, making it unclear what was being pushed or pulled

We addressed these by:

- Clearly indicating required credential updates when pulling changes
- Ensuring deletions and other modifications sync correctly across environments
- Improving commit selection to provide better visibility into what’s being pushed

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.74.0...n8n@1.74.1) for this version.\
**Release date:** 2025-01-09

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.73.0...n8n@1.74.0) for this version.\
**Release date:** 2025-01-08

This release contains new features, a new node, node updates, performance improvements and bug fixes.

### Overhauled Code node editing experience

We added a ton of new helpers to the Code node, making edits of your code much faster and more comfortable. You get:

- TypeScript autocomplete
- TypeScript linting
- TypeScript hover tips
- Search and replace
- New keyboard shortcuts based on the VSCode keymap
- Auto-formatting using prettier (Alt+Shift+F)
- Remember folded regions and history after refresh
- Multi cursor
- Type function in the Code node using JSDoc types
- Drag and drop for all Code node modes
- Indentation markers

We build this on a web worker architecture so you won't have to suffer from performance degradation while typing.

To get the full picture, check out our Studio update with Max and Elias, where they discuss and demo the new editing experience. 👇

[Studio Update #04](https://youtu.be/De1E58MPaMQ?t=645)

### New node: Microsoft Entra ID

Microsoft Entra ID (formerly known as Microsoft Azure Active Directory or Azure AD) is used for cloud-based identity and access management. [The new node](../integrations/builtin/app-nodes/n8n-nodes-base.microsoftentra/) supports a wide range of Microsoft Entra ID features, which includes creating, getting, updating, and deleting users and groups, as well as adding users to and removing them from groups.

- [AI Agent](../integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/): Vector stores can now be directly used as tools for the agent
- [Code](../code/builtin/overview/): Tons of new speed and convenience features, see above for details
- [Google Vertex Chat](../integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatgooglevertex/): Added option to specify the GCP region for the Google API credentials
- [HighLevel](../integrations/builtin/app-nodes/n8n-nodes-base.highlevel/): Added support for calendar items

We also added a custom [projects](../user-management/rbac/projects/) icon selector on top of the available emojis. Pretty!

[igatanasov](https://github.com/igatanasov)\
[Stamsy](https://github.com/Stamsy)\
[feelgood-interface](https://github.com/feelgood-interface)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.73.0...n8n@1.73.1) for this version.\
**Release date:** 2024-12-19

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.72.0...n8n@1.73.0) for this version.\
**Release date:** 2024-12-19

This release contains node updates, performance improvements, and bug fixes.

- [AI Agent](../integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/): Updated descriptions for Chat Trigger options
- [Facebook Graph API](../integrations/builtin/app-nodes/n8n-nodes-base.facebookgraphapi/): Updated for API v21.0
- [Gmail](../integrations/builtin/app-nodes/n8n-nodes-base.gmail/): Added two new options for the `Send and wait` operation, free text and custom form
- [Linear Trigger](../integrations/builtin/trigger-nodes/n8n-nodes-base.lineartrigger/): Added support for admin scope
- [MailerLite](../integrations/builtin/app-nodes/n8n-nodes-base.mailerlite/): Now supports the new API
- [Slack](../integrations/builtin/app-nodes/n8n-nodes-base.slack/): Added two new options for the `Send and wait` operation, free text and custom form

We also added credential support for [SolarWinds IPAM](../integrations/builtin/credentials/solarwindsipam/) and [SolarWinds Observability](../integrations/builtin/credentials/solarwindsobservability/).

Last, but not least, we [improved the schema view performance in the node details view by 90%](https://github.com/n8n-io/n8n/pull/12180) and added drag and drop re-ordering to parameters. This comes in very handy in the [If](../integrations/builtin/core-nodes/n8n-nodes-base.if/) or [Edit Fields](../integrations/builtin/core-nodes/n8n-nodes-base.set/) nodes.

[CodeShakingSheep](https://github.com/CodeShakingSheep)\
[mickaelandrieu](https://github.com/mickaelandrieu)\
[Stamsy](https://github.com/Stamsy)\
[pbdco](https://github.com/pbdco)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.72.0...n8n@1.72.1) for this version.\
**Release date:** 2024-12-12

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.71.2...n8n@1.71.3) for this version.\
**Release date:** 2024-12-12

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.71.0...n8n@1.72.0) for this version.\
**Release date:** 2024-12-11

This release contains node updates, usability improvements, and bug fixes.

- [AI Transform](../integrations/builtin/core-nodes/n8n-nodes-base.aitransform/): The `maximum context length` error now retries with reduced payload size
- [Redis](../integrations/builtin/app-nodes/n8n-nodes-base.redis/): Added support for `continue on fail`

### Improved commit modal

We added filters and text search to the commit modal when working with [Environments](../source-control-environments/). This will make committing easier as we provide more information and better visibility. Environments are available on the Enterprise plan.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.71.1...n8n@1.71.2) for this version.\
**Release date:** 2024-12-10

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.70.3...n8n@1.70.4) for this version.\
**Release date:** 2024-12-10

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.71.0...n8n@1.71.1) for this version.\
**Release date:** 2024-12-06

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.70.2...n8n@1.70.3) for this version.\
**Release date:** 2024-12-05

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.70.2...n8n@1.71.0) for this version.\
**Release date:** 2024-12-04

This release contains node updates, performance improvements, and bug fixes.

### Task runners for the Code node in public beta

We're introducing a significant performance upgrade to the Code node with our new Task runner system. This enhancement moves JavaScript code execution to a separate process, improving your workflow execution speed while adding better isolation.

Task runners overview

Our benchmarks show up to 6x improvement in workflow executions using Code nodes - from approximately 6 to 35 executions per second. All these improvements happen under the hood, keeping your Code node experience exactly the same.

The Task runner comes in two modes:

- Internal mode (default): Perfect for getting started, automatically managing task runners as child processes
- External mode: For advanced hosting scenarios requiring maximum isolation and security

Currently, this feature is opt-in and can be enabled using [environment variables](../hosting/configuration/environment-variables/task-runners/). Once stable, it will become the default execution method for Code nodes.

To start using Task runners today, [check out the docs](../hosting/configuration/task-runners/).

- [AI Transform node](../integrations/builtin/core-nodes/n8n-nodes-base.aitransform/): We improved the prompt for code generation to transform data
- [Code node](../integrations/builtin/core-nodes/n8n-nodes-base.code/): We added a warning if `pairedItem` is absent or could not be auto mapped

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.70.1...n8n@1.70.2) for this version.\
**Release date:** 2024-12-04

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.70.0...n8n@1.70.1) for this version.\
**Release date:** 2024-11-29

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.69.0...n8n@1.70.0) for this version.\
**Release date:** 2024-11-27

This release contains node updates, performance improvements and bug fixes.

### New canvas in beta

The new canvas is now the default setting for all users. It should bring significant performance improvements and adds a handy minimap. As it is still a beta version you can still revert to the previous version with the three dot menu.

We're looking forward to your feedback. Should you encounter a bug, you will find a handy button to create an issue at the bottom of the new canvas as well.

- We added credential support for [Zabbix](../integrations/builtin/credentials/zabbix/) to the HTTP request node
- We added new OAuth2 credentials for [Microsoft SharePoint](../integrations/builtin/credentials/microsoft/)
- The [Slack node](../integrations/builtin/app-nodes/n8n-nodes-base.slack/#operations) now uses markdown for the approval message when using the `Send and Wait for Approval` operation

[feelgood-interface](https://github.com/feelgood-interface)\
[adina-hub](https://github.com/adina-hub)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.68.0...n8n@1.68.1) for this version.\
**Release date:** 2024-11-26

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.69.1...n8n@1.69.2) for this version.\
**Release date:** 2024-11-26

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.69.0...n8n@1.69.1) for this version.\
**Release date:** 2024-11-25

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.68.0...n8n@1.69.0) for this version.\
**Release date:** 2024-11-20

This release contains a new feature, node improvements and bug fixes.

### Sub-workflow debugging

We made it much easier to debug sub-workflows by improving their accessibility from the parent workflow.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.67.1...n8n@1.68.0) for this version.\
**Release date:** 2024-11-13

This release contains node updates, performance improvements and many bug fixes.

#### New AI agent canvas chat

We revamped the chat experience for AI agents on the canvas. A neatly organized view instead of a modal hiding the nodes. You can now see the canvas, chat and logs at the same time when testing your workflow.

[](/_video/release-notes/AI-chat-on-canvas.mp4)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.67.0...n8n@1.67.1) for this version.\
**Release date:** 2024-11-07

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.66.0...n8n@1.67.0) for this version.\
**Release date:** 2024-11-06

This release contains node updates and bug fixes.

- [AI Transform](../integrations/builtin/core-nodes/n8n-nodes-base.aitransform/): Improved usability
- [Anthropic Chat Model Node](../integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatanthropic/): Added Haiku 3.5 support
- [Convert to File](../integrations/builtin/core-nodes/n8n-nodes-base.converttofile/): Added delimiter option for writing to CSV
- [Gmail Trigger](../integrations/builtin/trigger-nodes/n8n-nodes-base.gmailtrigger/): Added option to filter for draft messages
- [Intercom](../integrations/builtin/app-nodes/n8n-nodes-base.intercom/): Credential can now be used in the HTTP Request node
- [Rapid7 InsightVM](../integrations/builtin/credentials/rapid7insightvm/): Added credential support

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.65.2...n8n@1.66.0) for this version.\
**Release date:** 2024-10-31

This release contains performance improvements, a node update and bug fixes.

- [Anthropic Chat Model](../integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatanthropic/): Added support for claude-3-5-sonnet-20241022

We made updates to how projects and workflow ownership are displayed making them easier to understand and navigate.

We further improved the performance logic of partial executions, leading to a smoother and more enjoyable building experience.

### New n8n canvas alpha

We have enabled the alpha version of our new canvas. The canvas is the ‘drawing board’ of the n8n editor, and we’re working on a full rewrite. Your feedback and testing will help us improve it. [Read all about it on our community forum](https://community.n8n.io/t/help-us-test-the-new-n8n-canvas-alpha/60070).

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.65.1...n8n@1.65.2) for this version.\
**Release date:** 2024-10-28

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.64.2...n8n@1.64.3) for this version.\
**Release date:** 2024-10-25

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.65.0...n8n@1.65.1) for this version.\
**Release date:** 2024-10-25

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.64.1...n8n@1.65.0) for this version.\
**Release date:** 2024-10-24

[Breaking change](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md)

What changed? Queue polling via the environment variable `QUEUE_RECOVERY_INTERVAL` has been removed.

When is action necessary? If you have set `QUEUE_RECOVERY_INTERVAL`, you can remove it as it no longer has any effect.

This release contains a new features, new nodes, node enhancements, and bug fixes.

### New node: n8n Form

Use the [n8n Form node](../integrations/builtin/core-nodes/n8n-nodes-base.form/) to create user-facing forms with multiple pages. You can add other nodes with custom logic between to process user input. Start the workflow with a [n8n Form Trigger](../integrations/builtin/core-nodes/n8n-nodes-base.formtrigger/).

A multi-page form with branching

Additionally you can:

- Set default selections with query parameters
- Define the form with a JSON array of objects
- Show a completion screen and redirect to another URL

- [Google Business Profile](../integrations/builtin/app-nodes/n8n-nodes-base.googlebusinessprofile/) and [Google Business Profile Trigger](../integrations/builtin/trigger-nodes/n8n-nodes-base.googlebusinessprofiletrigger/): Use these to integrate Google Business Profile reviews and posts with your workflows

- [AI Agent](../integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/): Removed the requirement to add at least one tool
- [GitHub](../integrations/builtin/app-nodes/n8n-nodes-base.github/): Added workflows as a resource operation
- [Structured Output Parser](../integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.outputparserstructured/): Added more user-friendly error messages

For additional security, we improved how we handle multi-factor authentication, hardened config file permissions and introduced JWT for the public API.

For better performance, we improved how partial executions are handled in loops.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

- [Idan Fishman](https://github.com/idanfishman)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.64.1...n8n@1.64.2) for this version.\
**Release date:** 2024-10-24

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.64.0...n8n@1.64.1) for this version.\
**Release date:** 2024-10-21

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.63.4...n8n@1.64.0) for this version.\
**Release date:** 2024-10-16

This release contains a new node, node enhancements, performance improvements and bug fixes.

### Enhanced node: Remove Duplicates

The [Remove Duplicates node](../integrations/builtin/core-nodes/n8n-nodes-base.removeduplicates/) got a major makeover with the addition of two new operations:

- Remove Items Processed in Previous Executions: Compare items in the current input to items from previous executions and remove duplicates
- Clear Deduplication History: Wipe the memory of items from previous executions.

This makes it easier to only process new items from any data source. For example, you can now more easily poll a Google sheet for new entries by `id` or remove duplicate orders from the same customer by comparing their `order date`. The great thing is, you can now do this within **and across** workflow runs.

The new node for [Gong](../integrations/builtin/app-nodes/n8n-nodes-base.gong/) allows you to get users and calls to process them further in n8n. Very useful for sales related workflows.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

- [Sören Uhrbach](https://github.com/soerenuhrbach)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.63.3...n8n@1.63.4) for this version.\
**Release date:** 2024-10-15

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.62.5...n8n@1.62.6) for this version.\
**Release date:** 2024-10-15

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.63.2...n8n@1.63.3) for this version.\
**Release date:** 2024-10-15

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.63.1...n8n@1.63.2) for this version.\
**Release date:** 2024-10-11

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.62.4...n8n@1.62.5) for this version.\
**Release date:** 2024-10-11

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.63.0...n8n@1.63.1) for this version.\
**Release date:** 2024-10-11

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.62.3...n8n@1.62.4) for this version.\
**Release date:** 2024-10-11

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.62.3...n8n@1.63.0) for this version.\
**Release date:** 2024-10-09

[Breaking change](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md)

- The worker server used to bind to IPv6 by default. It now binds to IPv4 by default.
- The worker server's `/healthz` used to report healthy status based on database and Redis checks. It now reports healthy status regardless of database and Redis status, and the database and Redis checks are part of `/healthz/readiness`.

When is action necessary?

- If you experience a port conflict error when starting a worker server using its default port, set a different port for the worker server with `QUEUE_HEALTH_CHECK_PORT`.
- If you are relying on database and Redis checks for worker health status, switch to checking `/healthz/readiness` instead of `/healthz`.

This release contains new features, node enhancements and bug fixes.

- [OpenAI](../integrations/builtin/app-nodes/n8n-nodes-langchain.openai/): Added the option to choose between the default memory connector to provide memory to the assistant or to specify a thread ID
- [Gmail](../integrations/builtin/app-nodes/n8n-nodes-base.gmail/) and [Slack](../integrations/builtin/app-nodes/n8n-nodes-base.slack/): Added custom approval operations to have a human in the loop of a workflow

We have also optimized the [worker health checks](../hosting/logging-monitoring/monitoring/) (see breaking change above).

Each credential now has a seperate url you can link to. This makes sharing much easier.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

[Pemontto](https://github.com/pemontto)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.62.2...n8n@1.62.3) for this version.\
**Release date:** 2024-10-08

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.62.1...n8n@1.62.2) for this version.\
**Release date:** 2024-10-07

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.61.0...n8n@1.62.1) for this version.\
**Release date:** 2024-10-02

This release contains new features, node enhancements and bug fixes.

We skipped 1.62.0 and went straight to 1.62.1 with an additional fix.

#### Additional nodes as tools

We have made additional nodes usable with the [Tools AI Agent node](../integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/tools-agent/).

[](/_video/release-notes/nodes-as-tools.mp4)

Additionally, we have added a `$fromAI()` placeholder function to use with tools, allowing you to dynamically pass information from the models to the connected tools. This function works similarly to placeholders used elsewhere in n8n.

Both of these new features enable you to build even more powerful AI agents by drawing directly from the apps your business uses. This makes integrating LLMs into your business processes even easier than before.

- [Google BigQuery](../integrations/builtin/app-nodes/n8n-nodes-base.googlebigquery/): Added option to return numeric values as integers and not strings
- [HTTP Request](../integrations/builtin/core-nodes/n8n-nodes-base.httprequest/): Added credential support for Sysdig
- [Invoice Ninja](../integrations/builtin/app-nodes/n8n-nodes-base.invoiceninja/): Additional query params for getAll requests
- [Question and Answer Chain](../integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainretrievalqa/): Added the option to use a custom prompt

Drag and drop insertion on cursor position from schema view is now also enabled for code, SQL and Html fields in nodes.

Customers with an enterprise license can now rate, tag and highlight execution data in the executions view. To use highlighting, add an [Execution Data Node](../integrations/builtin/core-nodes/n8n-nodes-base.executiondata/) (or Code node) to the workflow to set [custom executions data](../workflows/executions/custom-executions-data/).

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

[Benjamin Roedell](https://github.com/benrobot)\
[CodeShakingSheep](https://github.com/CodeShakingSheep)\
[manuelbcd](https://github.com/manuelbcd)\
[Miguel Prytoluk](https://github.com/mprytoluk)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.60.1...n8n@1.61.0) for this version.\
**Release date:** 2024-09-25

This release contains new features, node enhancements and bug fixes.

- [Brandfetch](../integrations/builtin/app-nodes/n8n-nodes-base.brandfetch/): Updated to use the new API
- [Slack](../integrations/builtin/app-nodes/n8n-nodes-base.slack/): Made adding or removing the workflow link to a message easier

Big datasets now render faster thanks to virtual scrolling and execution annotations are harder to delete.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.59.3...n8n@1.59.4) for this version.\
**Release date:** 2024-09-20

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.60.0...n8n@1.60.1) for this version.\
**Release date:** 2024-09-20

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.59.3...n8n@1.60.0) for this version.\
**Release date:** 2024-09-18

This release contains new features, node enhancements and bug fixes.

#### Queue metrics for workers

You can now [expose and consume metrics from your workers](../hosting/configuration/configuration-examples/prometheus/). The worker instances have the same metrics available as the main instance(s) and can be configured with [environment variables](../hosting/configuration/environment-variables/endpoints/).

You can now customize the maximum file size when uploading files within forms to webhooks. The [environment variable to set](../hosting/configuration/environment-variables/endpoints/) for this is `N8N_FORMDATA_FILE_SIZE_MAX`. The default setting is 200MiB.

- [Invoice Ninja](../integrations/builtin/app-nodes/n8n-nodes-base.invoiceninja/): Added actions for bank transactions
- [OpenAI](../integrations/builtin/app-nodes/n8n-nodes-langchain.openai/): Added O1 models to the model select

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

[CodeShakingSheep](https://github.com/CodeShakingSheep)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.59.2...n8n@1.59.3) for this version.\
**Release date:** 2024-09-18

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.59.1...n8n@1.59.2) for this version.\
**Release date:** 2024-09-17

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.59.0...n8n@1.59.1) for this version.\
**Release date:** 2024-09-16

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.58.1...n8n@1.58.2) for this version.\
**Release date:** 2024-09-12

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.58.1...n8n@1.59.0) for this version.\
**Release date:** 2024-09-11

If you are using the Chat Trigger in "Embedded Chat" mode, with authentication turned on, you could see errors connecting to n8n if the authentication on the sending/embedded side is mis-configured.

This release contains bug fixes and feature enhancements.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

[oscarpedrero](https://github.com/oscarpedrero)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.58.0...n8n@1.58.1) for this version.\
**Release date:** 2024-09-06

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.57.0...n8n@1.58.0) for this version.\
**Release date:** 2024-09-05

This release contains new features, bug fixes and feature enhancements.

#### New node: PGVector Vector Store

This release adds the PGVector Vector Store node. Use this node to interact with the PGVector tables in your PostgreSQL database. You can insert, get, and retrieve documents from a vector table to provide them to a retriever connected to a chain.

#### See active collaborators on workflows

We added collaborator avatars back to the workflow canvas. You will see other users who are active on the workflow, preventing you from overriding each other's work.

Collaboration avatars

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.56.2...n8n@1.57.0) for this version.\
**Release date:** 2024-08-28

This release contains new features and bug fixes.

#### Improved execution queue handling

We are [exposing new execution queue metrics](../hosting/configuration/configuration-examples/prometheus/) to give users more visibility of the queue length. This helps to inform decisions on horizontal scaling, based on queue status. We have also made querying executions faster.

#### New credentials for the HTTP Request node

We added credential support for Datadog, Dynatrace, Elastic Security, Filescan, Iris, and Malcore to the HTTP Request node making it easier to use existing credentials.

We also made it easier to select workflows as tools when working with AI agents by implementing a new `workflow selector` parameter type.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

[Bram Kn](https://github.com/bramkn)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.56.1...n8n@1.56.2) for this version.\
**Release date:** 2024-08-26

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.56.0...n8n@1.56.1) for this version.\
**Release date:** 2024-08-23

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.55.3...n8n@1.56.0) for this version.\
**Release date:** 2024-08-21

This release contains node updates, security and bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

[CodeShakingSheep](https://github.com/CodeShakingSheep)\
[Oz Weiss](https://github.com/thewizarodofoz)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.55.2...n8n@1.55.3) for this version.\
**Release date:** 2024-08-16

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.55.1...n8n@1.55.2) for this version.\
**Release date:** 2024-08-16

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.55.0...n8n@1.55.1) for this version.\
**Release date:** 2024-08-15

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.54.3...n8n@1.54.4) for this version.\
**Release date:** 2024-08-15

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.54.2...n8n@1.54.3) for this version.\
**Release date:** 2024-08-15

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.54.1...n8n@1.54.2) for this version.\
**Release date:** 2024-08-14

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.54.1...n8n@1.55.0) for this version.\
**Release date:** 2024-08-14

[Breaking change](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md)

The N8N_BLOCK_FILE_ACCESS_TO_N8N_FILES environment variable now also blocks access to n8n's static cache directory at ~/.cache/n8n/public.

If you are writing to or reading from a file at n8n's static cache directory via a node, e.g. Read/Write Files from Disk, please update your node to use a different path.

This release contains a new feature, a new node, a node update and bug fixes.

#### Override the npm registry

This release adds the option to override the npm registry for installing community packages. This is a paid feature.

We now also prevent npm downloading community packages from a compromised npm registry by explicitly using --registry in all npm install commands.

#### New node: AI Transform

This release adds the [AI Transform node](../integrations/builtin/core-nodes/n8n-nodes-base.aitransform/). Use the AI Transform node to generate code snippets based on your prompt. The AI is context-aware, understanding the workflow’s nodes and their data types. The node is only available on [Cloud plans](../manage-cloud/overview/).

This release adds the [Okta node](../integrations/builtin/app-nodes/n8n-nodes-base.okta/). Use the Okta node to automate work in Okta and integrate Okta with other applications. n8n has built-in support for a wide range of Okta features, which includes creating, updating, and deleting users.

- [MySQL](../integrations/builtin/app-nodes/n8n-nodes-base.mysql/)

This release also adds the new schema view for the expression editor modal.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.54.0...n8n@1.54.1) for this version.\
**Release date:** 2024-08-13

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.53.1...n8n@1.53.2) for this version.\
**Release date:** 2024-08-08

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.53.1...n8n@1.54.0) for this version.\
**Release date:** 2024-08-07

This release contains new features, node enhancements, bug fixes and updates to our API.

Our [public REST API](../api/) now supports additional operations:

- Create, delete, and edit roles for users
- Create, read, update and delete projects

Find the details in the [API reference](../api/api-reference/).

[CodeShakingSheep](https://github.com/CodeShakingSheep)\
[Javier Ferrer González](https://github.com/JavierCane)\
[Mickaël Andrieu](https://github.com/mickaelandrieu)\
[Oz Weiss](https://github.com/thewizarodofoz)\
[Pemontto](https://github.com/pemontto)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.45.1...n8n@1.45.2) for this version.\
**Release date:** 2024-08-06

This release contains a bug fix.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.53.0...n8n@1.53.1) for this version.\
**Release date:** 2024-08-02

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.52.2...n8n@1.53.0) for this version.\
**Release date:** 2024-07-31

This release contains new features, new nodes, node enhancements, bug fixes and updates to our API.

#### Added Google Cloud Platform Secrets Manager support

This release adds [Google Cloud Platform Secrets Manager](../external-secrets/) to the list of external secret stores. We already support AWS secrets, Azure Key Vault, Infisical and HashiCorp Vault. External secret stores are available under an enterprise license.

#### New node: Information Extractor

This release adds the [Information Extractor node](../integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.information-extractor/). The node is specifically tailored for information extraction tasks. It uses Structured Output Parser under the hood, but provides a simpler way to extract information from text in a structured JSON form.

#### New node: Sentiment Analysis

This release adds the [Sentiment Analysis node](../integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.sentimentanalysis/). The node leverages LLMs to analyze and categorize the sentiment of input text. Users can easily integrate this node into their workflows to perform sentiment analysis on text data. The node is flexible enough to handle various use cases, from basic positive/negative classification to more nuanced sentiment categories.

- [Calendly Trigger](../integrations/builtin/trigger-nodes/n8n-nodes-base.calendlytrigger/)
- [HTTP Request](../integrations/builtin/core-nodes/n8n-nodes-base.httprequest/)
- [n8n Form Trigger](../integrations/builtin/core-nodes/n8n-nodes-base.formtrigger/)
- [Shopify](../integrations/builtin/app-nodes/n8n-nodes-base.shopify/)

Our [public REST API](../api/) now supports additional operations:

- Create, read, and delete for variables
- Filtering workflows by project
- Transferring workflows

Find the details in the [API reference](../api/api-reference/).

[feelgood-interface](https://github.com/feelgood-interface)\
[Oz Weiss](https://github.com/thewizarodofoz)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.52.1...n8n@1.52.2) for this version.\
**Release date:** 2024-07-31

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.52.0...n8n@1.52.1) for this version.\
**Release date:** 2024-07-26

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.51.1...n8n@1.51.2) for this version.\
**Release date:** 2024-07-26

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.51.1...n8n@1.52.0) for this version.\
**Release date:** 2024-07-25

[Breaking change](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md)

Prometheus metrics enabled via N8N_METRICS_INCLUDE_DEFAULT_METRICS and N8N_METRICS_INCLUDE_API_ENDPOINTS were fixed to include the default n8n\_ prefix.

If you are using Prometheus metrics from these categories and are using a non-empty prefix, please update those metrics to match their new prefixed names.

This release contains new features, node enhancements and bug fixes.

#### Added Azure Key Vault support

This release adds [Azure Key Vault](../external-secrets/) to the list of external secret stores. We already support AWS secrets, Infisical and HashiCorp Vault and are working on Google Secrets Manager. External secret stores are available under an enterprise license.

- [Pinecone Vector Store](../integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstorepinecone/)
- [Supabase Vector Store](../integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoresupabase/)
- [Send Email](../integrations/builtin/core-nodes/n8n-nodes-base.sendemail/)

- OpenAI Model: You can use the OpenAI Chat Model instead
- Google Palm Chat Model: You can use Google Vertex or Gemini instead
- Google Palm Model: You can use Google Vertex or Gemini instead

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.51.0...n8n@1.51.1) for this version.\
**Release date:** 2024-07-23

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.50.1...n8n@1.50.2) for this version.\
**Release date:** 2024-07-23

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.50.1...n8n@1.51.0) for this version.\
**Release date:** 2024-07-18

This release contains new nodes, node enhancements and bug fixes.

#### New node: Text Classifier

This release adds the [Text Classifier node](../integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.text-classifier/).

#### New node: Postgres Chat Memory

This release adds the [Postgres Chat Memory node](../integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorypostgreschat/).

#### New node: Google Vertex Chat Model

This release adds the [Google Vertex Chat Model node](../integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatgooglevertex/).

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

- Enhanced nodes: Asana

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.50.0...n8n@1.50.1) for this version.\
**Release date:** 2024-07-16

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.49.0...n8n@1.50.0) for this version.\
**Release date:** 2024-07-10

This release contains node enhancements and bug fixes.

- Enhanced nodes: Chat Trigger, Google Cloud Firestore, Qdrant Vector Store, Splunk, Telegram
- Deprecated node: Orbit (product shut down)

### Beta Feature Removal

The Ask AI beta feature for the HTTP Request node has been removed from this version

[Stanley Yoshinori Takamatsu](https://github.com/stanleytakamatsu)\
[CodeShakingSheep](https://github.com/CodeShakingSheep)\
[jeanpaul](https://github.com/jeanpaul)\
[adrian-martinez-onestic](https://github.com/adrian-martinez-onestic)\
[Malki Davis](https://github.com/mxdavis)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.48.3...n8n@1.49.0) for this version.\
**Release date:** 2024-07-03

This release contains a new node, node enhancements, and bug fixes.

- New node added: [Vector Store Tool](../integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolvectorstore/) for the AI Agent
- Enhanced nodes: Zep Cloud Memory, Copper, Embeddings Cohere, GitHub, Merge, Zammad

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

[Jochem](https://github.com/jvdweerthof)\
[KhDu](https://github.com/KhDu)\
[Nico Weichbrodt](https://github.com/envy)\
[Pavlo Paliychuk](https://github.com/paul-paliychuk)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.48.2...n8n@1.48.3) for this version.\
**Release date:** 2024-07-03

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.47.2...n8n@1.47.3) for this version.\
**Release date:** 2024-07-03

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.48.1...n8n@1.48.2) for this version.\
**Release date:** 2024-07-01

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.47.1...n8n@1.47.2) for this version.\
**Release date:** 2024-07-01

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.48.0...n8n@1.48.1) for this version.\
**Release date:** 2024-06-27

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.47.1...n8n@1.48.0) for this version.\
**Release date:** 2024-06-27

This release contains bug fixes and feature enhancements.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

[KubeAl](https://github.com/KubeAl)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.47.0...n8n@1.47.1) for this version.\
**Release date:** 2024-06-26

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.46.0...n8n@1.47.0) for this version.\
**Release date:** 2024-06-20

Calling `$(...).last()` (or `(...).first()` or `$(...).all()`) without arguments now returns the last item (or first or all items) of the output that connects two nodes. Previously, it returned the item/items of the first output of that node. Refer to the [breaking changes log](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md#1470) for details.

This release contains bug fixes, feature enhancements, a new node, node enhancements and performance improvements.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

#### New node: HTTP request tool

This release adds the HTTP request tool. You can use it with an AI agent as a tool to collect information from a website or API. Refer to the [HTTP request tool](../integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolhttprequest/) for details.

[Daniel](https://github.com/daniel-alba17)\
[ekadin-mtc](https://github.com/ekadin-mtc)\
[Eric Francis](https://github.com/EricFrancis12)\
[Josh Sorenson](https://github.com/joshsorenson)\
Mohammad Alsmadi [Nikolai T. Jensen](https://github.com/ch0wm3in)\
[n8n-ninja](https://github.com/n8n-ninja)\
[pebosi](https://github.com/pebosi)\
[Taylor Hoffmann](https://github.com/TaylorHo)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.45.0...n8n@1.45.1) for this version.\
**Release date:** 2024-06-12

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.45.0...n8n@1.46.0) for this version.\
**Release date:** 2024-06-12

This release contains feature enhancements, node enhancements, and bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

[Jean Khawand](https://github.com/jeankhawand)\
[pemontto](https://github.com/pemontto)\
[Valentin Coppin](https://github.com/valimero)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.44.1...n8n@1.44.2) for this version.\
**Release date:** 2024-06-12

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.42.1...n8n@1.42.2) for this version.\
**Release date:** 2024-06-10

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.44.1...n8n@1.45.0) for this version.\
**Release date:** 2024-06-06

This release contains new features, node enhancements, and bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.44.0...n8n@1.44.1) for this version.\
**Release date:** 2024-06-03

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.43.1...n8n@1.44.0) for this version.\
**Release date:** 2024-05-30

This release contains new features, node enhancements, and bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.43.0...n8n@1.43.1) for this version.\
**Release date:** 2024-05-28

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.42.1...n8n@1.43.0) for this version.\
**Release date:** 2024-05-22

This release contains new features, node enhancements, and bug fixes.

Although this release doesn't include a breaking change, it is a significant update including database migrations. n8n recommends backing up your data before updating to this version.

Credential sharing required for manual executions

Instance owners and admins: you will see changes if you try to manually execute a workflow where the credentials aren't shared with you. Manual workflow executions now use the same permissions checks as production executions, meaning you can't do a manual execution of a workflow if you don't have access to the credentials. Previously, owners and admins could do manual executions without credentials being shared with them. To resolve this, the credential creator needs to [share the credential](../credentials/credential-sharing/) with you.

#### New feature: Projects

With projects and roles, you can give your team access to collections of workflows and credentials, rather than having to share each workflow and credential individually. Simultaneously, you tighten security by limiting access to people on the relevant team.

Refer to the [RBAC](../user-management/rbac/) documentation for information on creating projects and using roles.

The number of projects and role types vary depending on your plan. Refer to [Pricing](https://n8n.io/pricing/) for details.

[](/_video/release-notes/rbac-glimpse.mp4)

#### New node: Slack Trigger

This release adds a trigger node for Slack. Refer to the [Slack Trigger documentation](../integrations/builtin/trigger-nodes/n8n-nodes-base.slacktrigger/) for details.

- Improved [memory support for OpenAI assistants](../integrations/builtin/app-nodes/n8n-nodes-langchain.openai/).

### Rolling back to a previous version

If you update to this version, then decide you need to role back:

1. Delete any RBAC projects you created.
1. Revert the database migrations using `n8n db:revert`.

Cloud: contact [help@n8n.io](mailto:help@n8n.io).

[Ayato Hayashi](https://github.com/hayashi-ay)\
[Daniil Zobov](https://github.com/ddzobov)\
[Guilherme Barile](https://github.com/GuilhermeBarile)\
[Romain MARTINEAU](https://github.com/RJiraya)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.42.0...n8n@1.42.1) for this version.\
**Release date:** 2024-05-20

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.41.0...n8n@1.41.1) for this version.\
**Release date:** 2024-05-16

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.41.0...n8n@1.42.0) for this version.\
**Release date:** 2024-05-15

This release contains new features, node enhancements, and bug fixes.

Note that this release removes the AI error debugger. We're working on a new and improved version.

#### New feature: Tools Agent

This release adds a new option to the Agent node: the [Tools Agent](../integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/tools-agent/).

This agent has an enhanced ability to work with tools, and can ensure a standard output format. This is now the recommended default agent.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

[Mike Quinlan](https://github.com/mjquinlan2000)\
[guangwu](https://github.com/testwill)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.40.0...n8n@1.41.0) for this version.\
**Release date:** 2024-05-08

This release contains new features, node enhancements, and bug fixes.

Note that this release temporarily disables the AI error helper.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

[Florin Lungu](https://github.com/floryn90)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.39.1...n8n@1.40.0) for this version.\
**Release date:** 2024-05-02

Please note that this version contains a breaking change for instances using a Postgres database. The default value for the DB_POSTGRESDB_USER environment variable was switched from `root` to `postgres`. Refer to the [breaking changes log](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md#1400) for details.

This release contains new features, new nodes, node enhancements, and bug fixes.

#### New feature: Ask AI in the HTTP node

You can now ask AI to help create API requests in the HTTP Request node:

1. In the HTTP Request node, select **Ask AI**.
1. Enter the **Service** and **Request** you want to use. For example, to use the NASA API to get their picture of the day, enter `NASA` in **Service** and `get picture of the day` in **Request**.
1. Check the parameters: the AI tries to fill them out, but you may still need to adjust or correct the configuration.

Self-hosted users need to [enable AI features and provide their own API keys](../hosting/configuration/environment-variables/)

#### New node: Groq Chat Model

This release adds the [Groq Chat Model node](../integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatgroq/).

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

[Alberto Pasqualetto](https://github.com/albertopasqualetto)\
[Bram Kn](https://github.com/bramkn)\
[CodeShakingSheep](https://github.com/CodeShakingSheep)\
[Nicolas-nwb](https://github.com/Nicolas-nwb)\
[pemontto](https://github.com/pemontto)\
[pengqiseven](https://github.com/pengqiseven)\
[webk](https://github.com/webkp)\
[Yoshino-s](https://github.com/Yoshino-s)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.39.0...n8n@1.39.1) for this version.\
**Release date:** 2024-04-25

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.38.1...n8n@1.38.2) for this version.\
**Release date:** 2024-04-25

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.37.3...n8n@1.37.4) for this version.\
**Release date:** 2024-04-25

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.38.1...n8n@1.39.0) for this version.\
**Release date:** 2024-04-24

This release contains new nodes, node enhancements, and bug fixes.

#### New node: WhatsApp Trigger

This release adds the [WhatsApp Trigger node](../integrations/builtin/trigger-nodes/n8n-nodes-base.whatsapptrigger/).

#### Node enhancement: Multiple methods, one Webhook node

The Webhook Trigger node can now handle calls to multiple HTTP methods. Refer to the [Webhook node documentation](../integrations/builtin/core-nodes/n8n-nodes-base.webhook/common-issues/#listen-for-multiple-http-methods) for information on enabling this.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

[Bram Kn](https://github.com/bramkn)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.38.0...n8n@1.38.1) for this version.\
**Release date:** 2024-04-18

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.37.2...n8n@1.37.3) for this version.\
**Release date:** 2024-04-18

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.37.2...n8n@1.38.0) for this version.\
**Release date:** 2024-04-17

This release contains new nodes, bug fixes, and node enhancements.

#### New node: Google Gemini Chat Model

This release adds the [Google Gemini Chat Model sub-node](../integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatgooglegemini/).

#### New node: Embeddings Google Gemini

This release adds the [Google Gemini Embeddings sub-node](../integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsgooglegemini/).

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

[Chengyou Liu](https://github.com/cyliu0)\
[Francesco Mannino](https://github.com/manninofrancesco)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.37.1...n8n@1.37.2) for this version.\
**Release date:** 2024-04-17

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.36.3...n8n@1.36.4) for this version.\
**Release date:** 2024-04-15

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.36.2...n8n@1.36.3) for this version.\
**Release date:** 2024-04-12

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.37.0...n8n@1.37.1) for this version.\
**Release date:** 2024-04-11

Please note that this version contains a breaking change for self-hosted n8n. It removes the `--file` flag for the `execute` CLI command. If you have scripts relying on the `--file` flag, update them to first import the workflow and then execute it using the `--id` flag. Refer to [CLI commands](../hosting/cli-commands/) for more information on CLI options.

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.36.1...n8n@1.36.2) for this version.\
**Release date:** 2024-04-11

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.36.1...n8n@1.37.0) for this version.\
**Release date:** 2024-04-10

Please note that this version contains a breaking change for self-hosted n8n. It removes the `--file` flag for the `execute` CLI command. If you have scripts relying on the `--file` flag, update them to first import the workflow and then execute it using the `--id` flag. Refer to [CLI commands](../hosting/cli-commands/) for more information on CLI options.

This release contains a new node, improvements to error handling and messaging, node enhancements, and bug fixes.

This release adds the [JWT core node](../integrations/builtin/core-nodes/n8n-nodes-base.jwt/).

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

[Miguel Prytoluk](https://github.com/mprytoluk)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.36.0...n8n@1.36.1) for this version.\
**Release date:** 2024-04-04

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.35.0...n8n@1.36.0) for this version.\
**Release date:** 2024-04-03

This release contains new nodes, enhancements and bug fixes.

#### New node: Salesforce Trigger node

This release adds the [Salesforce Trigger node](../integrations/builtin/trigger-nodes/n8n-nodes-base.salesforcetrigger/).

#### New node: Twilio Trigger node

This release adds the [Twilio Trigger node](../integrations/builtin/trigger-nodes/n8n-nodes-base.twiliotrigger/).

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.34.2...n8n@1.35.0) for this version.\
**Release date:** 2024-03-28

This release contains enhancements and bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.34.1...n8n@1.34.2) for this version.\
**Release date:** 2024-03-26

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.34.0...n8n@1.34.1) for this version.\
**Release date:** 2024-03-25

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.33.1...n8n@1.34.0) for this version.\
**Release date:** 2024-03-20

This release contains new features, new nodes, and bug fixes.

#### New node: Microsoft OneDrive Trigger node

This release adds the [Microsoft OneDrive Trigger node](../integrations/builtin/trigger-nodes/n8n-nodes-base.microsoftonedrivetrigger/). You can now trigger workflows on file and folder creation and update events.

#### New data transformation functions

This release introduces new [data transformation functions](../code/builtin/data-transformation-functions/):

[Bram Kn](https://github.com/bramkn)\
[pemontto](https://github.com/pemontto)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.33.0...n8n@1.33.1) for this version.\
**Release date:** 2024-03-15

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.32.1...n8n@1.32.2) for this version.\
**Release date:** 2024-03-15

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.32.1...n8n@1.33.0) for this version.\
**Release date:** 2024-03-13

This release contains new features, node enhancements, and bug fixes.

#### Support for Claude 3

This release adds support for Claude 3 to the [Anthropic Chat Model](../integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatanthropic/) node.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

[gumida](https://github.com/gumida)\
[Ayato Hayashi](https://github.com/hayashi-ay)\
[Jordan](https://github.com/jordanburke)\
[MC Naveen](https://github.com/mcnaveen)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.32.0...n8n@1.32.1) for this version.\
**Release date:** 2024-03-07

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.31.1...n8n@1.31.2) for this version.\
**Release date:** 2024-03-07

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.31.1...n8n@1.32.0) for this version.\
**Release date:** 2024-03-06

This release contains new features, node enhancements, performance improvements, and bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.31.0...n8n@1.31.1) for this version.\
**Release date:** 2024-03-06

Please note that this version contains a breaking change. HTTP connections to the editor will fail on domains other than localhost. You can read more about it [here](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md#1320).

This is a bug fix release and it contains a breaking change.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.30.0...n8n@1.31.0) for this version.\
**Release date:** 2024-02-28

This release contains new features, new nodes, node enhancements and bug fixes.

#### New nodes: Microsoft Outlook trigger and Ollama embeddings

This release adds two new nodes.

- [Microsoft Outlook Trigger](../integrations/builtin/trigger-nodes/n8n-nodes-base.microsoftoutlooktrigger/)
- [Ollama Embeddings](../integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsollama/)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.30.0...n8n@1.30.1) for this version.\
**Release date:** 2024-02-23

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.29.1...n8n@1.30.0) for this version.\
**Release date:** 2024-02-21

This release contains new features, node enhancements, and bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.29.0...n8n@1.29.1) for this version.\
**Release date:** 2024-02-16

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.28.0...n8n@1.29.0) for this version.\
**Release date:** 2024-02-15

This release contains new features, node enhancements, and bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

#### OpenAI node overhaul

This release includes a new version of the [OpenAI node](../integrations/builtin/app-nodes/n8n-nodes-langchain.openai/), adding more operations, including support for working with assistants.

- Support for AI events in [log streaming](../log-streaming/).
- Added support for workflow tags in the [public API](../api/).

[Bruno Inec](https://github.com/sweenu)\
[Jesús Burgers](https://github.com/jburgers-chakray)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.27.2...n8n@1.27.3) for this version.\
**Release date:** 2024-02-15

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.27.2...n8n@1.28.0) for this version.\
**Release date:** 2024-02-07

This release contains new features, new nodes, node enhancements and bug fixes.

#### New nodes: Azure OpenAI chat model and embeddings

This release adds two new nodes to work with [Azure OpenAI](https://azure.microsoft.com/en-gb/products/ai-services/openai-service/) in your advanced AI workflows:

- [Embeddings Azure OpenAI](../integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsazureopenai/)
- [Azure OpenAI Chat Model](../integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatazureopenai/)

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

[Andrea Ascari](https://github.com/ascariandrea)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.27.1...n8n@1.27.2) for this version.\
**Release date:** 2024-02-02

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.26.0...n8n@1.27.1) for this version.\
**Release date:** 2024-01-31

This release contains new features, node enhancements, and bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.26.0...n8n@1.27.0) for this version.\
**Release date:** 2024-01-31

This release removes `own` mode for self-hosted n8n. You must now use `EXECUTIONS_MODE` and set to either `regular` or `queue`. Refer to [Queue mode](../hosting/scaling/queue-mode/) for information on configuring queue mode.

Please upgrade directly to 1.27.1.

This release contains node enhancements and bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.25.1...n8n@1.26.0) for this version.\
**Release date:** 2024-01-24

This release contains new features, node enhancements, and bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

[Daniel Schröder](https://github.com/schroedan)\
[Nihaal Sangha](https://github.com/nihaals)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.25.0...n8n@1.25.1) for this version.\
**Release date:** 2024-01-22

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

[Nihaal Sangha](https://github.com/nihaals)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.24.1...n8n@1.25.0) for this version.\
**Release date:** 2024-01-17

This release contains a new node, feature improvements, and bug fixes.

#### New node: Chat Memory Manager

The [Chat Memory Manager](../integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorymanager/) node replaces the Chat Messages Retriever node. It manages chat message memories within your AI workflows.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.24.0...n8n@1.24.1) for this version.\
**Release date:** 2024-01-16

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.22.5...n8n@1.22.6) for this version.\
**Release date:** 2024-01-10

This is a bug fix release. It includes important fixes for the HTTP Request and monday.com nodes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.23.0...n8n@1.24.0) for this version.\
**Release date:** 2024-01-10

This release contains new nodes for advanced AI, node enhancements, new features, performance enhancements, and bug fixes.

n8n has created a new [Chat Trigger node](../integrations/builtin/core-nodes/n8n-nodes-langchain.chattrigger/). The new node provides a chat interface that you can make publicly available, with customization and authentication options.

#### Mistral Cloud Chat and Embeddings

This release introduces two new nodes to support [Mistral AI](https://mistral.ai/):

- [Mistral Cloud Chat Model](../integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatmistralcloud/)
- [Embeddings Mistral Cloud](../integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsmistralcloud/)

[Anush](https://github.com/Anush008)\
[Eric Koleda](https://github.com/ekoleda-codaio)\
[Mason Geloso](https://github.com/MasonGeloso)\
[vacitbaydarman](https://github.com/vacitbaydarman)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.22.4...n8n@1.22.5) for this version.\
**Release date:** 2024-01-09

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.22.4...n8n@1.23.0) for this version.\
**Release date:** 2024-01-03

This release contains new nodes, node enhancements, new features, and bug fixes.

#### New nodes and improved experience for working with files

This release includes a major overhaul of nodes relating to files (binary data).

There are now three key nodes dedicated to handling binary data files:

- [Read/Write Files from Disk](../integrations/builtin/core-nodes/n8n-nodes-base.readwritefile/) to read and write files from/to the machine where n8n is running.
- [Convert to File](../integrations/builtin/core-nodes/n8n-nodes-base.converttofile/) to take input data and output it as a file.
- [Extract From File](../integrations/builtin/core-nodes/n8n-nodes-base.extractfromfile/) to get data from a binary format and convert it to JSON.

n8n has moved support for iCalendar, PDF, and spreadsheet formats into these nodes, and removed the iCalendar, Read PDF, and Spreadsheet File nodes. There are still standalone nodes for [HTML](../integrations/builtin/core-nodes/n8n-nodes-base.html/) and [XML](../integrations/builtin/core-nodes/n8n-nodes-base.xml/).

#### New node: Qdrant vector store

This release adds support for [Qdrant](https://qdrant.tech/) with the Qdrant vector store node.

Read n8n's [Qdrant vector store node documentation](../integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreqdrant/)

[Aaron Gutierrez](https://github.com/aarongut)\
[Advaith Gundu](https://github.com/geodic)\
[Anush](https://github.com/Anush008)\
[Bin](https://github.com/soulhat)\
[Nihaal Sangha](https://github.com/nihaals)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.22.3...n8n@1.22.4) for this version.\
**Release date:** 2024-01-03

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.22.2...n8n@1.22.3) for this version.\
**Release date:** 2023-12-27

Upgrade directly to 1.22.4

Due to issues with this release, upgrade directly to 1.22.4.

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.22.1...n8n@1.22.2) for this version.\
**Release date:** 2023-12-27

Upgrade directly to 1.22.4

Due to issues with this release, upgrade directly to 1.22.4.

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.22.0...n8n@1.22.1) for this version.\
**Release date:** 2023-12-21

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.21.1...n8n@1.22.0) for this version.\
**Release date:** 2023-12-21

This release contains node enhancements, new features, performance improvements, and bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.18.3...n8n@1.18.4) for this version.\
**Release date:** 2023-12-19

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.20.0...n8n@1.21.1) for this version.\
**Release date:** 2023-12-15

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.18.2...n8n@1.18.3) for this version.\
**Release date:** 2023-12-15

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.20.0...n8n@1.21.0) for this version.\
**Release date:** 2023-12-13

This release contains new features and nodes, node enhancements, and bug fixes.

#### New user role: Admin

This release introduces a third account type: admin. This role is available on pro and enterprise plans. Admins have similar permissions to instance owners.

[Read more about user roles](../user-management/account-types/)

#### New data transformation nodes

This release replaces the Item Lists node with a collection of nodes for data transformation tasks:

- [Aggregate](../integrations/builtin/core-nodes/n8n-nodes-base.aggregate/): take separate items, or portions of them, and group them together into individual items.
- [Limit](../integrations/builtin/core-nodes/n8n-nodes-base.aggregate/): remove items beyond a defined maximum number.
- [Remove Duplicates](../integrations/builtin/core-nodes/n8n-nodes-base.removeduplicates/): identify and delete items that are identical across all fields or a subset of fields.
- [Sort](../integrations/builtin/core-nodes/n8n-nodes-base.sort/): organize lists of in a desired ordering, or generate a random selection.
- [Split Out](../integrations/builtin/core-nodes/n8n-nodes-base.splitout/): separate a single data item containing a list into multiple items.
- [Summarize](../integrations/builtin/core-nodes/n8n-nodes-base.summarize/): aggregate items together, in a manner similar to Excel pivot tables.

#### Increased sharing permissions for owners and admins

Instance owners and users with the admin role can now see and share all workflows and credentials. They can't view sensitive credential information.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.19.5...n8n@1.20.0) for this version.\
**Release date:** 2023-12-06

This release contains bug fixes, node enhancements, and ongoing new feature work.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

[Andrey Starostin](https://github.com/mayorandrew)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.19.4...n8n@1.19.5) for this version.\
**Release date:** 2023-12-05

This is a bug fix release.

This release removes the TensorFlow Embeddings node.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.18.1...n8n@1.18.2) for this version.\
**Release date:** 2023-12-05

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.19.0...n8n@1.19.4) for this version.\
**Release date:** 2023-12-01

Missing ARM v7 support

This version doesn't support ARM v7. n8n is working on fixing this in future releases.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.18.0...n8n@1.19.0) for this version.\
**Release date:** 2023-11-29

Upgrade directly to 1.19.4

Due to issues with this release, upgrade directly to 1.19.4.

This release contains new features, node enhancements, and bug fixes.

#### LangChain general availability

This release adds LangChain support to the main n8n version. Refer to [LangChain](../advanced-ai/langchain/overview/) for more information on how to build AI tools in n8n, the new nodes n8n has introduced, and related learning resources.

#### Show avatars of users working on the same workflow

This release improves the experience of users collaborating on workflows. You can now see who else is editing at the same time as you.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.18.0...n8n@1.18.1) for this version.\
**Release date:** 2023-11-30

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.17.1...n8n@1.18.0) for this version.\
**Release date:** 2023-11-22

This release contains new features and bug fixes.

#### Template creator hub

Built a template you want to share? This release introduces the n8n Creator hub. Refer to the [creator hub Notion doc](https://www.notion.so/n8n-Creator-hub-7bd2cbe0fce0449198ecb23ff4a2f76f) for more information on this project.

#### Node input and output search filter

Cloud Pro and Enterprise users can now search and filter the input and output data in nodes. Refer to [Data filtering](../data/data-filtering/) for more information.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.17.0...n8n@1.17.1) for this version.\
**Release date:** 2023-11-17

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.16.0...n8n@1.17.0) for this version.\
**Release date:** 2023-11-15

This release contains node enhancements and bug fixes.

#### Sticky Note Colors

You can now select background colors for sticky notes.

#### Discord Node Overhaul

An overhaul of the Discord node, improving the UI making it easier to configure, improving error handling, and fixing issues.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

[antondollmaier](https://github.com/antondollmaier)\
[teomane](https://github.com/teomane)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.15.2...n8n@1.16.0) for this version.\
**Release date:** 2023-11-08

This release contains node enhancements and bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.15.1...n8n@1.15.2) for this version.\
**Release date:** 2023-11-07

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.14.2...n8n@1.15.1) for this version.\
**Release date:** 2023-11-02

This release contains new features, node enhancements, and bug fixes.

#### Workflow history

This release introduces workflow history: view and load previous versions of your workflows.

Workflow history is available in Enterprise n8n, and with limited history for Cloud Pro.

Learn more in the [Workflow history](../workflows/history/) documentation.

*Almost* in time for Halloween: this release introduces dark mode.

1. Select **Settings** > **Personal**.
1. Under **Personalisation**, change **Theme** to **Dark theme**.

#### Optional error output for nodes

All nodes apart from sub-nodes and trigger nodes have a new optional output: **Error**. Use this to add steps to handle node errors.

#### Pagination support added to HTTP Request node

The HTTP Request node now supports an pagination. Read the [node docs](../integrations/builtin/core-nodes/n8n-nodes-base.httprequest/) for information and examples.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

[Yoshino-s](https://github.com/Yoshino-s)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.14.1...n8n@1.14.2) for this version.\
**Release date:** 2023-10-26

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.14.0...n8n@1.14.1) for this version.\
**Release date:** 2023-10-26

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.13.0...n8n@1.14.0) for this version.\
**Release date:** 2023-10-25

This release contains node enhancements and bug fixes.

#### Switch node supports more outputs

The [Switch node](../integrations/builtin/core-nodes/n8n-nodes-base.switch/) now supports an unlimited number of outputs.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.12.2...n8n@1.13.0) for this version.\
**Release date:** 2023-10-25

This release contains new features, feature enhancements, and bug fixes.

Upgrade directly to 1.14.0

This release failed to publish to npm. Upgrade directly to 1.14.0.

#### RSS Feed Trigger node

This releases introduces a new node, the [RSS Feed Trigger](../integrations/builtin/core-nodes/n8n-nodes-base.rssfeedreadtrigger/). Use this node to start a workflow when a new RSS feed item is published.

#### Facebook Lead Ads Trigger node

This releases add another new node, the [Facebook Lead Ads Trigger](../integrations/builtin/trigger-nodes/n8n-nodes-base.facebookleadadstrigger/). Use this node to trigger a workflow when you get a new lead.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.12.1...n8n@1.12.2) for this version.\
**Release date:** 2023-10-24

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

[Burak Akgün](https://github.com/mbakgun)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.12.0...n8n@1.12.1) for this version.\
**Release date:** 2023-10-23

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

[Léo Martinez](https://github.com/martinezleoml)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.11.1...n8n@1.11.2) for this version.\
**Release date:** 2023-10-23

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

[Inga](https://github.com/inga-lovinde)\
[pemontto](https://github.com/pemontto)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.11.1...n8n@1.12.0) for this version.\
**Release date:** 2023-10-18

This release contains new features, node enhancements, and bug fixes.

#### Form Trigger node

This releases introduces a new node, the [n8n Form Trigger](../integrations/builtin/core-nodes/n8n-nodes-base.formtrigger/). Use this node to start a workflow based on a user submitting a form. It provides a configurable form interface.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

[Damian Karzon](https://github.com/dkarzon)\
[Inga](https://github.com/inga-lovinde)\
[pemontto](https://github.com/pemontto)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.11.0...n8n@1.11.1) for this version.\
**Release date:** 2023-10-13

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.10.1...n8n@1.11.0) for this version.\
**Release date:** 2023-10-11

This release contains new features and bug fixes.

#### External storage for binary files

Self-hosted users can now use an external service to store binary data. Learn more in [External storage](../hosting/scaling/external-storage/).

If you're using n8n Cloud and are interested in this feature, please [contact n8n](https://n8n-community.typeform.com/to/y9X2YuGa).

#### Item Lists node supports binary data

The Item Lists node now supports splitting and concatenating binary data inputs. This means you no longer need to use code to split a collection of files into multiple items.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.10.0...n8n@1.10.1) for this version.\
**Release date:** 2023-10-11

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.9.2...n8n@1.9.3) for this version.\
**Release date:** 2023-10-10

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.9.1...n8n@1.9.2) for this version.\
**Release date:** 2023-10-09

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.9.1...n8n@1.10.0) for this version.\
**Release date:** 2023-10-05

This release contains bug fixes and preparatory work for new features.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.9.0...n8n@1.9.1) for this version.\
**Release date:** 2023-10-04

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

## LangChain in n8n (beta)

**Release date:** 2023-10-04

This release introduces support for building with LangChain in n8n.

With n8n's LangChain nodes you can build AI-powered functionality within your workflows. The LangChain nodes are configurable, meaning you can choose your preferred agent, LLM, memory, and other components. Alongside the LangChain nodes, you can connect any n8n node as normal: this means you can integrate your LangChain logic with other data sources and services.

- This is a beta release, and not yet available in the main product. Follow the instructions in [Access LangChain in n8n](../advanced-ai/langchain/overview/) to try it out. Self-hosted and Cloud options are available.
- Learn how LangChain concepts map to n8n nodes in [LangChain concepts in n8n](../advanced-ai/langchain/langchain-n8n/).
- Browse n8n's new [Cluster nodes](../integrations/builtin/cluster-nodes/). This is a new set of node types that allows for multiple nodes to work together to configure each other.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.8.2...n8n@1.9.0) for this version.\
**Release date:** 2023-09-28

This release contains new features, performance improvements, and bug fixes.

This releases replaces RiotTmpl, the templating language used in expressions, with n8n's own templating language, [Tournament](https://github.com/n8n-io/tournament). You can now use arrow functions in expressions.

#### `N8N_BINARY_DATA_TTL` and `EXECUTIONS_DATA_PRUNE_TIMEOUT` removed

The environment variables `N8N_BINARY_DATA_TTL` and `EXECUTIONS_DATA_PRUNE_TIMEOUT` no longer have any effect and can be removed. Instead of relying on a TTL system for binary data, n8n cleans up binary data together with executions during pruning.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.8.1...n8n@1.8.2) for this version.\
**Release date:** 2023-09-25

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.8.0...n8n@1.8.1) for this version.\
**Release date:** 2023-09-21

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.7.1...n8n@1.8.0) for this version.\
**Release date:** 2023-09-20

This release contains node enhancements and bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.7.0...n8n@1.7.1) for this version.\
**Release date:** 2023-09-14

This release contains bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.6.1...n8n@1.7.0) for this version.\
**Release date:** 2023-09-13

This release contains node enhancements and bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

[Quang-Linh LE](https://github.com/linktohack)\
[MC Naveen](https://github.com/mcnaveen)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.6.0...n8n@1.6.1) for this version.\
**Release date:** 2023-09-06

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.5.1...n8n@1.6.0) for this version.\
**Release date:** 2023-09-06

This release contains bug fixes, new features, and node enhancements.

Upgrade directly to 1.6.1

Skip this version and upgrade directly to 1.6.1, which contains essential bug fixes.

This release introduces support for TheHive API version 5. This uses a new node and credentials:

- [TheHive 5 node](../integrations/builtin/app-nodes/n8n-nodes-base.thehive5/)
- [TheHive 5 Trigger node](../integrations/builtin/trigger-nodes/n8n-nodes-base.thehive5trigger/)
- [TheHive 5 credentials](../integrations/builtin/credentials/thehive5/)

#### `N8N_PERSISTED_BINARY_DATA_TTL` removed

The environment variables `N8N_PERSISTED_BINARY_DATA_TTL` no longer has any effect and can be removed. This legacy flag was originally introduced to support ephemeral executions (see [details](https://github.com/n8n-io/n8n/pull/7046)), which are no longer supported.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.5.0...n8n@1.5.1) for this version.\
**Release date:** 2023-08-31

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.4.1...n8n@1.5.0) for this version.\
**Release date:** 2023-08-31

This release contains new features, node enhancements, and bug fixes.

Upgrade directly to 1.5.1

Skip this version and upgrade directly to 1.5.1, which contains essential bug fixes.

#### External secrets storage for credentials

Enterprise-tier accounts can now use external secrets vaults to manage credentials in n8n. This allows you to store credential information securely outside your n8n instance. n8n supports Infisical and HashiCorp Vault.

Refer to [External secrets](../external-secrets/) for guidance on enabling and using this feature.

#### Two-factor authentication

n8n now supports two-factor authentication (2FA) for self-hosted instances. n8n is working on bringing support to Cloud. Refer to [Two-factor authentication](../user-management/two-factor-auth/) for guidance on enabling and using it.

#### Debug executions

Users on a paid n8n plan can now load data from previous executions into their current workflow. This is useful when debugging a failed execution.

Refer to [Debug executions](../workflows/executions/debug/) for guidance on using this feature.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.4.0...n8n@1.4.1) for this version.\
**Release date:** 2023-08-29

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.3.1...n8n@1.4.0) for this version.\
**Release date:** 2023-08-23

This release contains new features, node enhancements, and bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

[pemontto](https://github.com/pemontto)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.3.0...n8n@1.3.1) for this version.\
**Release date:** 2023-08-18

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.2.2...n8n@1.3.0) for this version.\
**Release date:** 2023-08-16

This release contains new features and bug fixes.

#### Trial feature: AI support in the Code node

This release introduces limited support for using AI to generate code in the Code node. Initially this feature is only available on Cloud, and will gradually be rolled out, starting with about 20% of users.

Learn how to use the feature, including guidance on writing prompts, in [Generate code with ChatGPT](../code/ai-code/).

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

[Ian Gallagher](https://github.com/craSH)\
[Xavier Calland](https://github.com/xavier-calland)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.2.1...n8n@1.2.2) for this version.\
**Release date:** 2023-08-14

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.2.0...n8n@1.2.1) for this version.\
**Release date:** 2023-08-09

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.1.1...n8n@1.2.0) for this version.\
**Release date:** 2023-08-09

This release contains new features, node enhancements, bug fixes, and performance improvements.

Upgrade directly to 1.2.1

When upgrading, skip this release and go directly to 1.2.1.

#### Credential support for SecOps services

This release introduces support for setting up credentials in n8n for the following services:

- [AlienVault](../integrations/builtin/credentials/alienvault/)
- [Auth0 Management](../integrations/builtin/credentials/auth0management/)
- [Carbon Black API](../integrations/builtin/credentials/carbonblack/)
- [Cisco Meraki API](../integrations/builtin/credentials/ciscomeraki/)
- [Cisco Secure Endpoint](../integrations/builtin/credentials/ciscosecureendpoint/)
- [Cisco Umbrella API](../integrations/builtin/credentials/ciscoumbrella/)
- [CrowdStrike](../integrations/builtin/credentials/crowdstrike/)
- [F5 Big-IP](../integrations/builtin/credentials/f5bigip/)
- [Fortinet FortiGate](../integrations/builtin/credentials/fortigate/)
- [Hybrid Analysis](../integrations/builtin/credentials/hybridanalysis/)
- [Imperva WAF](../integrations/builtin/credentials/impervawaf/)
- [Kibana](../integrations/builtin/credentials/kibana/)
- [Microsoft Entra ID](../integrations/builtin/credentials/microsoftentra/)
- [Mist](../integrations/builtin/credentials/mist/)
- [Okta](../integrations/builtin/credentials/okta/)
- [OpenCTI](../integrations/builtin/credentials/opencti/)
- [QRadar](../integrations/builtin/credentials/qradar/)
- [Qualys](../integrations/builtin/credentials/qualys/)
- [Recorded Future](../integrations/builtin/credentials/recordedfuture/)
- [Sekoia](../integrations/builtin/credentials/sekoia/)
- [Shuffler](../integrations/builtin/credentials/shuffler/)
- [Trellix ePO](../integrations/builtin/credentials/trellixepo/)
- [VirusTotal](../integrations/builtin/credentials/virustotal/)
- [Zscaler ZIA](../integrations/builtin/credentials/zscalerzia/)

This makes it easier to do [Custom operations](../integrations/custom-operations/) with these services, using the [HTTP Request](../integrations/builtin/core-nodes/n8n-nodes-base.httprequest/) node.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.1.0...n8n@1.1.1) for this version.\
**Release date:** 2023-07-27

This is a bug fix release.

Please note that this version contains breaking changes if upgrading from a `0.x.x` version. For full details, refer to the [n8n v1.0 migration guide](../1-0-migration-checklist/).

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.0.5...n8n@1.1.0) for this version.\
**Release date:** 2023-07-26

This release contains new features, bug fixes, and node enhancements.

Please note that this version contains breaking changes if upgrading from a `0.x.x` version. For full details, refer to the [n8n v1.0 migration guide](../1-0-migration-checklist/).

#### Source control and environments

This release introduces source control and environments for enterprise users.

n8n uses Git-based source control to support environments. Linking your n8n instances to a Git repository lets you create multiple n8n environments, backed by Git branches.

Refer to [Source control and environments](../source-control-environments/) to learn more about the features and set up your environments.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

[Adrián Martínez](https://github.com/adrian-martinez-vdshop)\
[Alberto Pasqualetto](https://github.com/albertopasqualetto)\
[Marten Steketee](https://github.com/Marten-S)\
[perseus-algol](https://github.com/perseus-algol)\
[Sandra Ashipala](https://github.com/sandramsc)\
[ZergRael](https://github.com/ZergRael)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.0.4...n8n@1.0.5) for this version.\
**Release date:** 2023-07-24

This is a bug fix release.

Please note that this version contains breaking changes if upgrading from a `0.x.x` version. For full details, refer to the [n8n v1.0 migration guide](../1-0-migration-checklist/).

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.0.3...n8n@1.0.4) for this version.\
**Release date:** 2023-07-19

This is a bug fix release.

Please note that this version contains breaking changes if upgrading from a `0.x.x` version. For full details, refer to the [n8n v1.0 migration guide](../1-0-migration-checklist/).

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

[Romain Dunand](https://github.com/airmoi)\
[noctarius aka Christoph Engelbert](https://github.com/noctarius)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.0.2...n8n@1.0.3) for this version.\
**Release date:** 2023-07-13

This release contains API enhancements and adds support for sending messages to forum threads in the Telegram node.

Please note that this version contains breaking changes if upgrading from a `0.x.x` version. For full details, refer to the [n8n v1.0 migration guide](../1-0-migration-checklist/).

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

[Kirill](https://github.com/chrtkv)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.0.1...n8n@1.0.2) for this version.\
**Release date:** 2023-07-05

This is a bug fix release.

Please note that this version contains breaking changes if upgrading from a `0.x.x` version. For full details, refer to the [n8n v1.0 migration guide](../1-0-migration-checklist/).

[Romain Dunand](https://github.com/airmoi)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@1.0.0...n8n@1.0.1) for this version.\
**Release date:** 2023-07-05

Please note that this version contains breaking changes. For full details, refer to the [n8n v1.0 migration guide](../1-0-migration-checklist/).

This is n8n's version one release.

For full details, refer to the [n8n v1.0 migration guide](../1-0-migration-checklist/).

Although JavaScript remains the default language, you can now also select Python as an option in the [Code node](../code/code-node/) and even make use of [many Python modules](https://pyodide.org/en/stable/usage/packages-in-pyodide.html#packages-in-pyodide). Note that Python is unavailable in Code nodes added to a workflow before v1.0.

[Marten Steketee](https://github.com/Marten-S)

**Examples:**

Example 1 (unknown):
```unknown
toDateTime() //replaces toDate(). toDate() is retained for backwards compatability.
parseJson()
extractUrlPath()
toBoolean()
base64Encode()
base64Decode()
```

Example 2 (unknown):
```unknown
toDateTime()
toBoolean()
```

Example 3 (unknown):
```unknown
toJsonString()
```

Example 4 (unknown):
```unknown
toJsonString()
```

---

## For a self-hosted n8n instance

**URL:** llms-txt#for-a-self-hosted-n8n-instance

curl -X 'GET' \
  '<N8N_HOST>:<N8N_PORT>/<N8N_PATH>/api/v<version-number>/workflows?active=true&limit=150&cursor=MTIzZTQ1NjctZTg5Yi0xMmQzLWE0NTYtNDI2NjE0MTc0MDA' \
  -H 'accept: application/json'

---

## Lightweight Directory Access Protocol (LDAP)

**URL:** llms-txt#lightweight-directory-access-protocol-(ldap)

**Contents:**
- Enable LDAP
- Merging n8n and LDAP accounts
- LDAP user accounts in n8n
- Turn LDAP off

- Available on Self-hosted Enterprise and Cloud Enterprise plans.
- You need access to the n8n instance owner account.

This page tells you how to enable LDAP in n8n. It assumes you're familiar with LDAP, and have an existing LDAP server set up.

LDAP allows users to sign in to n8n with their organization credentials, instead of an n8n login.

1. Log in to n8n as the instance owner.
1. Select **Settings** > **LDAP**.
1. Toggle on **Enable LDAP Login**.
1. Complete the fields with details from your LDAP server.
1. Select **Test connection** to check your connection setup, or **Save connection** to create the connection.

After enabling LDAP, anyone on your LDAP server can sign in to the n8n instance, unless you exclude them using the **User Filter** setting.

You can still create non-LDAP users (email users) on the **Settings** > **Users** page.

## Merging n8n and LDAP accounts

If n8n finds matching accounts (matching emails) for email users and LDAP users, the user must sign in with their LDAP account. n8n instance owner accounts are excluded from this: n8n never converts owner accounts to LDAP users.

## LDAP user accounts in n8n

On first sign in, n8n creates a user account in n8n for the LDAP user.

You must manage user details on the LDAP server, not in n8n. If you update or delete a user on your LDAP server, the n8n account updates at the next scheduled sync, or when the user next tries to log in, whichever happens first.

If you remove a user from your LDAP server, they lose n8n access on the next sync.

1. Log in to n8n as the instance owner.
1. Select **Settings** > **LDAP**.
1. Toggle off **Enable LDAP Login**.

If you turn LDAP off, n8n converts existing LDAP users to email users on their next login. The users must reset their password.

---

## n8n Embed

**URL:** llms-txt#n8n-embed

**Contents:**
- Support
- Russia and Belarus

n8n Embed is part of n8n's paid offering. Using Embed, you can white label n8n, or incorporate it in your software as part of your commercial product.

For more information about when to use Embed, as well as costs and licensing processes, refer to [Embed](https://n8n.io/embed/) on the n8n website.

The [community forum](https://community.n8n.io/) can help with various issues. If you are a current Embed customer, you can also contact n8n support, using the email provided when you bought the license.

## Russia and Belarus

n8n Embed isn't available in Russia and Belarus. Refer to n8n's blog post [Update on n8n cloud accounts in Russia and Belarus](https://blog.n8n.io/update-on-n8n-cloud-accounts-in-russia-and-belarus/) for more information.

---

## Markdown

**URL:** llms-txt#markdown

**Contents:**
- Operations
- Node parameters
- Node options
  - Markdown to HTML options
  - HTML to Markdown options
- Templates and examples
- Parsers

The Markdown node converts between Markdown and HTML formats.

This node's operations are **Modes**:

- **Markdown to HTML**: Use this mode to convert from Markdown to HTML.
- **HTML to Markdown**: Use this mode to convert from HTML to Markdown.

- **HTML** or **Markdown**: Enter the data you want to convert. The field name changes based on which **Mode** you select.
- **Destination Key**: Enter the field you want to put the output in. Specify nested fields using dots, for example `level1.level2.newKey`.

The node's **Options** depend on the **Mode** selected.

Some of the options depend on each other or can interact. We recommend testing out options to confirm the effects are what you want.

### Markdown to HTML options

| Option                                     | Description                                                                                                                                                                                                                                      | Default   |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| **Add Blank To Links**                     | Whether to open links a new window (enabled) or not (disabled).                                                                                                                                                                                  | Disabled  |
| **Automatic Linking To URLs**              | Whether to automatically link to URLs (enabled) or not (disabled). If enabled, n8n converts any string that it identifies as a URL to a link.                                                                                                    | Disabled  |
| **Backslash Escapes HTML Tags**            | Whether to allow backslash escaping of HTML tags (enabled) or not (disabled). When enabled, n8n escapes any `<` or `>` prefaced with `\`. For example, `\<div\>` renders as `&lt;div&gt;`.                                                       | Disabled  |
| **Complete HTML Document**                 | Whether to output a complete HTML document (enabled) or an HTML fragment (disabled). A complete HTML document includes the `<DOCTYPE HTML>` declaration, `<html>` and `<body>` tags, and the `<head>` element.                                   | Disabled  |
| **Customized Header ID**                   | Whether to support custom heading IDs (enabled) or not (disabled). When enabled, you can add custom heading IDs using `{header ID here}` after the heading text.                                                                                 | Disabled  |
| **Emoji Support**                          | Whether to support emojis (enabled) or not (disabled).                                                                                                                                                                                           | Disabled. |
| **Encode Emails**                          | Whether to transform ASCII character emails into their equivalent decimal entities (enabled) or not (disabled).                                                                                                                                  | Enabled   |
| **Exclude Trailing Punctuation From URLs** | Whether to exclude trailing punctuation from automatically linked URLs (enabled) or not (disabled). For use with **Automatic Linking To URLs**.                                                                                                  | Disabled  |
| **GitHub Code Blocks**                     | Whether to enable GitHub Flavored Markdown code blocks (enabled) or not (disabled).                                                                                                                                                              | Enabled   |
| **GitHub Compatible Header IDs**           | Whether to generate GitHub Flavored Markdown heading IDs (enabled) or not (disabled). GitHub Flavored Markdown generates heading IDs with `-` in place of spaces and removes non-alphanumeric characters.                                        | Disabled  |
| **GitHub Mention Link**                    | Change the link used with **GitHub Mentions**.                                                                                                                                                                                                   | Disabled  |
| **GitHub Mentions**                        | Whether to support tagging GitHub users with `@` (enabled) or not (disabled). When enabled, n8n replaces `@name` with `https://github.com/name`.                                                                                                 | Disabled  |
| **GitHub Task Lists**                      | Whether to support GitHub Flavored Markdown task lists (enabled) or not (disabled).                                                                                                                                                              | Disabled  |
| **Header Level Start**                     | Number. Set the start level for headers. For example, changing this field to `2` causes n8n to treat `#` as `<h2>`, `##` as `<h3>`, and so on.                                                                                                   | 1         |
| **Mandatory Space Before Header**          | Whether to make a space between `#` and heading text required (enabled) or not (disabled). When enabled, n8n renders a heading written as `##Some header text` literally (it doesn't turn it into a heading element)                             | Disabled  |
| **Middle Word Asterisks**                  | Whether n8n should treat asterisks in words as Markdown (disabled) or render them as literal asterisks (enabled).                                                                                                                                | Disabled  |
| **Middle Word Underscores**                | Whether n8n should treat underscores in words as Markdown (disabled) or render them as literal underscores (enabled).                                                                                                                            | Disabled  |
| **No Header ID**                           | Disable automatic generation of header IDs (enabled).                                                                                                                                                                                            | Disabled  |
| **Parse Image Dimensions**                 | Support setting maximum image dimensions in Markdown syntax (enabled).                                                                                                                                                                           | Disabled  |
| **Prefix Header ID**                       | Define a prefix to add to header IDs.                                                                                                                                                                                                            | None      |
| **Raw Header ID**                          | Whether to remove spaces, `'`, and `"` from header IDs, including prefixes, replacing them with `-` (enabled) or not (disabled).                                                                                                                 | Disabled  |
| **Raw Prefix Header ID**                   | Whether to prevent n8n from modifying header prefixes (enabled) or not (disabled)                                                                                                                                                                | Disabled  |
| **Simple Line Breaks**                     | Whether to create line breaks without a double space at the end of a line (enabled) or not (disabled).                                                                                                                                           | Disabled  |
| **Smart Indentation Fix**                  | Whether to try to smartly fix indentation problems related to ES6 template strings in indented code blocks (enabled) or not (disabled).                                                                                                          | Disabled  |
| **Spaces Indented Sublists**               | Whether to remove the requirement to indent sublists four spaces (enabled) or not (disabled).                                                                                                                                                    | Disabled  |
| **Split Adjacent Blockquotes**             | Whether to split adjacent blockquote blocks (enabled) or not (disabled). If you don't enable this, n8n treats quotes (indicated by `>` at the start of the line) on separate lines as a single blockquote, even when separated by an empty line. | Disabled  |
| **Strikethrough**                          | Whether to support strikethrough syntax (enabled) or not (disabled). When enabled, you can add a ~~strikethrough~~ effect using `~~` around the word or phrase.                                                                                  | Disabled  |
| **Tables Header ID**                       | Whether to add an ID to table header tags (enabled) or not (disabled).                                                                                                                                                                           | Disabled  |
| **Tables Support**                         | Whether to support tables (enabled) or not (disabled).                                                                                                                                                                                           | Disabled  |

### HTML to Markdown options

| Option                        | Description                                                                                                              | Default  |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------ | -------- |
| **Bullet Marker**             | Specify the character to use for unordered lists.                                                                        | \*       |
| **Code Block Fence**          | Specify the characters to use for code blocks.                                                                           | \`\`\`   |
| **Emphasis Delimiter**        | Specify the character `<em>`.                                                                                            | \_       |
| **Global Escape Pattern**     | Overrides the default character escape settings. You may want to use Text Replacement Pattern instead.                   | None     |
| **Ignored Elements**          | Ignore given HTML elements, and their children.                                                                          | None     |
| **Keep Images With Data**     | Whether to keep images with data (enabled) or not (disabled). Support files up to 1MB.                                   | Disabled |
| **Line Start Escape Pattern** | Overrides the default character escape settings. You may want to use Text Replacement Pattern instead.                   | None     |
| **Max Consecutive New Lines** | Number. Specify the maximum number of consecutive new lines allowed.                                                     | 3        |
| **Place URLs At The Bottom**  | Whether to place URLs at the bottom of the page and format using link reference definitions (enabled) or not (disabled). | Disabled |
| **Strong Delimiter**          | Specify the characters for `<strong>`.                                                                                   | \*\*     |
| **Style For Code Block**      | Specify the styling for code blocks. Options are **Fence** and **Indented**.                                             | Fence    |
| **Text Replacement Pattern**  | Define a text replacement pattern using regex.                                                                           | None     |
| **Treat As Blocks**           | Specify HTML elements to treat as blocks (surround with blank lines)                                                     | None     |

## Templates and examples

**AI agent that can scrape webpages**

[View template details](https://n8n.io/workflows/2006-ai-agent-that-can-scrape-webpages/)

**Autonomous AI crawler**

[View template details](https://n8n.io/workflows/2315-autonomous-ai-crawler/)

**Personalized AI Tech Newsletter Using RSS, OpenAI and Gmail**

[View template details](https://n8n.io/workflows/3986-personalized-ai-tech-newsletter-using-rss-openai-and-gmail/)

[Browse Markdown integration templates](https://n8n.io/integrations/markdown/), or [search all templates](https://n8n.io/workflows/)

n8n uses the following parsers:

- To convert from HTML to Markdown: [node-html-markdown](https://www.npmjs.com/package/node-html-markdown).
- To convert from Markdown to HTML: [Showdown](https://www.npmjs.com/package/showdown). Some options allow you to extend your Markdown with [GitHub Flavored Markdown](https://github.github.com/gfm/).

---

## Data mocking

**URL:** llms-txt#data-mocking

**Contents:**
- Mocking with real data using data pinning
- Generate custom data using the Code or Edit Fields nodes
- Output a sample data set from the Customer Datastore node

Data mocking is simulating or faking data. It's useful when developing a workflow. By mocking data, you can:

- Avoid making repeated calls to your data source. This saves time and costs.
- Work with a small, predictable dataset during initial development.
- Avoid the risk of overwriting live data: in the early stages of building your workflow, you don't need to connect your real data source.

## Mocking with real data using data pinning

Using [data pinning](../data-pinning/), you load real data into your workflow, then pin it in the output panel of a node. Using this approach you have realistic data, with only one call to your data source. You can [edit pinned data](../data-editing/).

Use this approach when you need to configure your workflow to handle the exact data structure and parameters provided by your data source.

To pin data in a node:

1. Run the node to load data.
1. In the **OUTPUT** view, select **Pin data** . When data pinning is active, the button is disabled and a "This data is pinned" banner is displayed in the **OUTPUT** view.

Nodes that output binary data

You can't pin data if the output data includes binary data.

## Generate custom data using the Code or Edit Fields nodes

You can create a custom dataset in your workflow using either the [Code node](../../integrations/builtin/core-nodes/n8n-nodes-base.code/) or the [Edit Fields (Set) node](../../integrations/builtin/core-nodes/n8n-nodes-base.set/).

In the Code node, you can create any data set you want, and return it as the node output. In the Edit Fields node, select **Add fields** to add your custom data.

The Edit Fields node is a good choice for small tests. To create more complex datasets, use the Code node.

## Output a sample data set from the Customer Datastore node

The Customer Datastore node provides a fake dataset to work with. Add and execute the node to explore the data.

Use this approach if you need some test data when exploring n8n, and you don't have a real use-case to work with.

---

## Cloud IP addresses

**URL:** llms-txt#cloud-ip-addresses

Cloud IP addresses change without warning

n8n can't guarantee static source IPs, as Cloud operates in a dynamic cloud provider environment and scales its infrastructure to meet demand. You should use strong authentication and secure transport protocols when connecting into and out of n8n.

Outbound traffic may appear to originate from any of:

- 20.79.227.226/32
- 20.113.47.122/32
- 20.218.202.73/32
- 98.67.233.91/32
- 4.182.111.50/32
- 4.182.129.20/32
- 4.182.88.118/32
- 4.182.212.136/32
- 98.67.244.108/32
- 72.144.128.145/32
- 72.144.83.147/32
- 72.144.69.38/32
- 72.144.111.50/32
- 4.182.128.108/32
- 4.182.190.144/32
- 4.182.191.184/32
- 98.67.233.200/32
- 20.52.126.0/28
- 20.218.238.112/28
- 4.182.64.64/28
- 20.218.174.0/28
- 4.184.78.240/28
- 20.79.32.32/28
- 51.116.119.64/28

---

## Item linking concepts

**URL:** llms-txt#item-linking-concepts

**Contents:**
- n8n's automatic item linking
- Item linking example

Each output item created by a node includes metadata that links them to the input item (or items) that the node used to generate them. This creates a chain of items that you can work back along to access previous items. This can be complicated to understand, especially if the node splits or merges data. You need to understand item linking when building your own programmatic nodes, or in some scenarios using the Code node.

This document provides a conceptual overview of this feature. For usage details, refer to:

- [Item linking for node creators](../item-linking-node-building/), for details on how to handle item linking when building a node.
- [Item linking in the Code node](../item-linking-code-node/), to learn how to handle item linking in the Code node.
- [Item linking errors](../item-linking-errors/), to understand the errors you may encounter in the editor UI.

## n8n's automatic item linking

If a node doesn't control how to link input items to output items, n8n tries to guess how to link the items automatically:

- Single input, single output: the output links to the input.
- Single input, multiple outputs: all outputs link to that input.
- Multiple inputs and outputs:
  - If you keep the input items, but change the order (or remove some but keep others), n8n can automatically add the correct linked item information.
  - If the number of inputs and outputs is equal, n8n links the items in order. This means that output-1 links to input-1, output-2 to input-2, and so on.
  - If the number isn't equal, or you create completely new items, n8n can't automatically link items.

If n8n can't link items automatically, and the node doesn't handle the item linking, n8n displays an error. Refer to [Item linking errors](../item-linking-errors/) for more information.

## Item linking example

In this example, it's possible for n8n to link an item in one node back several steps, despite the item order changing. This means the node that sorts movies alphabetically can access information about the linked item in the node that gets famous movie actors.

The methods for accessing linked items are different depending on whether you're using the UI, expressions, or the code node. Explore the following resources:

- [Mapping in the UI](../../data-mapping-ui/)
- [Mapping in the expressions editor](../../data-mapping-expressions/)
- [Item linking in the Code node](../item-linking-code-node/)
- [Item linking errors](../item-linking-errors/)

---

## Set up SSL

**URL:** llms-txt#set-up-ssl

**Contents:**
- Use a reverse proxy (recommended)
- Pass certificates into n8n directly

There are two methods to support TLS/SSL in n8n.

## Use a reverse proxy (recommended)

Use a reverse proxy like [Traefik](https://doc.traefik.io/traefik/) or a Network Load Balancer (NLB) in front of the n8n instance. This should also take care of certificate renewals.

Refer to [Security | Data encryption](https://n8n.io/legal/#security) for more information.

## Pass certificates into n8n directly

You can also choose to pass certificates into n8n directly. To do so, set the `N8N_SSL_CERT` and `N8N_SSL_KEY` environment variables to point to your generated certificate and key file.

You'll need to make sure the certificate stays renewed and up to date.

Refer to [Deployment environment variables](../../configuration/environment-variables/deployment/) for more information on these variables and [Configuration](../../configuration/configuration-methods/) for more information on setting environment variables.

---

## Update your Cloud version

**URL:** llms-txt#update-your-cloud-version

**Contents:**
- Best practices for updating
- Automatic update

n8n recommends regularly updating your Cloud version. Check the [Release notes](../../release-notes/) to learn more about changes.

Only instance owners can upgrade n8n Cloud versions. Contact your instance owner if you don't have permission to update n8n Cloud.

1. [Log in to the n8n Cloud dashboard](https://app.n8n.cloud/manage)
1. On your dashboard, select **Manage**.
1. Use the **n8n version** dropdown to select your preferred release version:
   - Latest Stable: recommended for most users.
   - Latest Beta: get the newest n8n. This may be unstable.
1. Select **Save Changes** to restart your n8n instance and perform the update.
1. In the confirmation modal, select **Confirm**.

## Best practices for updating

- Update frequently: this avoids having to jump multiple versions at once, reducing the risk of a disruptive update. Try to update at least once a month.
- Check the [Release notes](../../release-notes/) for breaking changes.
- Use [Environments](../../source-control-environments/) to create a test version of your instance. Test the update there first.

n8n automatically updates outdated Cloud instances.

If you don't update you instance for 120 days, n8n emails you to warn you to update. After a further 30 days, n8n automatically updates your instance.

---

## All documentation

**URL:** llms-txt#all-documentation

---

## HELP n8n_scaling_mode_queue_jobs_active Current number of jobs being processed across all workers in scaling mode.

**URL:** llms-txt#help-n8n_scaling_mode_queue_jobs_active-current-number-of-jobs-being-processed-across-all-workers-in-scaling-mode.

---

## Database structure

**URL:** llms-txt#database-structure

**Contents:**
- Database and query technology
- Tables
  - auth_identity
  - auth_provider_sync_history
  - credentials_entity
  - event_destinations
  - execution_data
  - execution_entity
  - execution_metadata
  - installed_nodes

This page describes the purpose of each table in the n8n database.

## Database and query technology

By default, n8n uses SQLite as the database. If you are using another database the structure will be similar, but the data-types may be different depending on the database.

n8n uses [TypeORM](https://github.com/typeorm/typeorm) for queries and migrations.

To inspect the n8n database, you can use [DBeaver](https://dbeaver.io), which is an open-source universal database tool.

These are the tables n8n creates during setup.

Stores details of external authentication providers when using [SAML](../../../user-management/saml/).

### auth_provider_sync_history

Stores the history of a SAML connection.

### credentials_entity

Stores the [credentials](../../../glossary/#credential-n8n) used to authenticate with integrations.

### event_destinations

Contains the destination configurations for [Log streaming](../../../log-streaming/).

Contains the workflow at time of running, and the execution data.

Stores all saved workflow executions. Workflow settings can affect which executions n8n saves.

### execution_metadata

Stores [Custom executions data](../../../workflows/executions/custom-executions-data/).

Lists the [community nodes](../../../integrations/community-nodes/installation/) installed in your n8n instance.

### installed_packages

Details of npm community nodes packages installed in your n8n instance. [installed_nodes](#installed_nodes) lists each individual node. `installed_packages` lists npm packages, which may contain more than one node.

A log of all database migrations. Read more about [Migrations](https://typeorm.io/docs/advanced-topics/migrations/) in TypeORM's documentation.

Lists the [projects](../../../user-management/rbac/projects/) in your instance.

Describes the relationship between a user and a [project](../../../user-management/rbac/projects/), including the user's [role type](../../../user-management/rbac/role-types/).

Not currently used. For use in future work on custom roles.

Records custom instance settings. These are settings that you can't control using environment variables. They include:

- Whether the instance owner is set up
- Whether the user chose to skip owner and user management setup
- Whether certain types of authentication, including SAML and LDAP, are on
- License key

### shared_credentials

Maps credentials to users.

Maps workflows to users.

All workflow tags created in the n8n instance. This table lists the tags. [workflows_tags](#workflows_tags) records which workflows have which tags.

Store [variables](../../../code/variables/).

Records the active webhooks in your n8n instance's workflows. This isn't just webhooks uses in the Webhook node. It includes all active webhooks used by any trigger node.

Your n8n instance's saved workflows.

Store previous versions of workflows.

### workflow_statistics

Counts workflow IDs and their status.

Maps tags to workflows. [tag_entity](#tag_entity) contains tag details.

## Entity Relationship Diagram (ERD)

---

## optional:

**URL:** llms-txt#optional:

**Contents:**
  - Required permissions
  - TLS
- SQLite

export DB_POSTGRESDB_SSL_CA=$(pwd)/ca.crt
export DB_POSTGRESDB_SSL_REJECT_UNAUTHORIZED=false

CREATE DATABASE n8n-db;
CREATE USER n8n-user WITH PASSWORD 'random-password';
GRANT ALL PRIVILEGES ON DATABASE n8n-db TO n8n-user;
```

You can choose between these configurations:

- Not declaring (default): Connect with `SSL=off`
- Declaring only the CA and unauthorized flag: Connect with `SSL=on` and verify the server's signature
- Declaring `_{CERT,KEY}` and the above: Use the certificate and key for client TLS authentication

This is the default database that gets used if nothing is defined.

The database file is located at: `~/.n8n/database.sqlite`

**Examples:**

Example 1 (unknown):
```unknown
### Required permissions

n8n needs to create and modify the schemas of the tables it uses.

Recommended permissions:
```

---

## License Key

**URL:** llms-txt#license-key

**Contents:**
- Add a license key using the UI
- Add a license key using an environment variables
- Allowlist the license server IP addresses

To enable certain licensed features, you must first activate your license. You can do this either through the UI or by setting environment variables.

## Add a license key using the UI

In your n8n instance:

1. Log in as **Admin** or **Owner**.
1. Select **Settings** > **Usage and plan**.
1. Select **Enter activation key**.
1. Paste in your license key.
1. Select **Activate**.

## Add a license key using an environment variables

In your n8n configuration, set `N8N_LICENSE_ACTIVATION_KEY` to your license key. If the instance already has an activated license, this variable will have no effect.

Refer to [Environment variables](../hosting/configuration/configuration-methods/) to learn more about configuring n8n.

## Allowlist the license server IP addresses

n8n uses Cloudflare to host the license server. As the specific IP addresses can change, you need to allowlist the [full range of Cloudflare IP addresses](https://www.cloudflare.com/ips/) to ensure n8n can always reach the license server.

---

## Using source control and environments

**URL:** llms-txt#using-source-control-and-environments

- Available on Enterprise.

- You must be an n8n instance owner or instance admin to enable and configure source control.

- Instance owners and instance admins can push changes to and pull changes from the connected repository.

- Project admins can push changes to the connected repository. They can't pull changes from the repository.

- [Push and pull](push-pull/): Send work to Git, and fetch work from Git to your instance. Understand what gets committed, and how n8n handles merge conflicts.

- [Copy work between environments](copy-work/): How to copy work between different n8n instances.

---

## LDAP

**URL:** llms-txt#ldap

**Contents:**
- Operations
- Compare
- Create
- Delete
- Rename
- Search
  - Search options
- Update
- Templates and examples

This node allows you to interact with your LDAP servers to create, find, and update objects.

You can find authentication information for this node [here](../../credentials/ldap/).

- [**Compare**](#compare) an attribute
- [**Create**](#create) a new entry
- [**Delete**](#delete) an entry
- [**Rename**](#rename) the DN of an existing entry
- [**Search**](#search) LDAP
- [**Update**](#update) attributes

Refer to the sections below for details on configuring the node for each operation.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

Configure this operation using these parameters:

- **Credential to connect with**: Select or create an [LDAP credential](../../credentials/ldap/) to connect with.
- **DN**: Enter the Distinguished Name (DN) of the entry to compare.
- **Attribute ID**: Enter the ID of the attribute to compare.
- **Value**: Enter the value to compare.

Configure this operation using these parameters:

- **Credential to connect with**: Select or create an [LDAP credential](../../credentials/ldap/) to connect with.
- **DN**: Enter the Distinguished Name (DN) of the entry to create.
- **Attributes**: Add the **Attribute ID**/**Value** pairs you'd like to create.

Configure this operation using these parameters:

- **Credential to connect with**: Select or create an [LDAP credential](../../credentials/ldap/) to connect with.
- **DN**: Enter the Distinguished Name (DN) of the entry to be deleted.

Configure this operation using these parameters:

- **Credential to connect with**: Select or create an [LDAP credential](../../credentials/ldap/) to connect with.
- **DN**: Enter the current Distinguished Name (DN) of the entry to rename.
- **New DN**: Enter the new Distinguished Name (DN) for the entry in this field.

Configure this operation using these parameters:

- **Credential to connect with**: Select or create an [LDAP credential](../../credentials/ldap/) to connect with.
- **Base DN**: Enter the Distinguished Name (DN) of the subtree to search in.
- **Search For**: Select the directory object class to search for.
- **Attribute**: Select the attribute to search for.
- **Search Text**: Enter the text to search for. Use `*` for a wildcard.
- **Return All**: When turned on, the node will return all results. When turned off, the node will return results up to the set **Limit**.
- **Limit**: Only available when you turn off **Return All**. Enter the maximum number of results to return.

You can also configure this operation using these options:

- **Attribute Names or IDs**: Enter a comma-separated list of attributes to return. Choose from the list or specify IDs using an expression.
- **Page Size**: Enter the maximum number of results to request at one time. Set to 0 to disable paging.
- **Scopes**: The set of entries at or below the **Base DN** to search for potential matches. Select from:
  - **Base Tree**: Often referred to as subordinateSubtree or just "subordinates," selecting this option will search the subordinates of the **Base DN** entry but not the **Base DN** entry itself.
  - **Single Level**: Often referred to as "one," selecting this option will search only the immediate children of the **Base DN** entry.
  - **Whole Subtree**: Often referred to as "sub," selecting this option will search the **Base DN** entry and all its subordinates to any depth.

Refer to [The LDAP Search Operation](https://ldap.com/the-ldap-search-operation/) for more information on search scopes.

Configure this operation using these parameters:

- **Credential to connect with**: Select or create an [LDAP credential](../../credentials/ldap/) to connect with.
- **DN**: Enter the Distinguished Name (DN) of the entry to update.
- ***Update Attributes*\*: Select whether to** Add **new,** Remove **existing, or** Replace\*\* existing attribute.
- Then enter the **Attribute ID**/**Value** pair you'd like to update.

## Templates and examples

**Adaptive RAG with Google Gemini & Qdrant: Context-Aware Query Answering**

[View template details](https://n8n.io/workflows/4043-adaptive-rag-with-google-gemini-and-qdrant-context-aware-query-answering/)

**Adaptive RAG Strategy with Query Classification & Retrieval (Gemini & Qdrant)**

[View template details](https://n8n.io/workflows/3459-adaptive-rag-strategy-with-query-classification-and-retrieval-gemini-and-qdrant/)

**OpenAI Responses API Adapter for LLM and AI Agent Workflows**

[View template details](https://n8n.io/workflows/4218-openai-responses-api-adapter-for-llm-and-ai-agent-workflows/)

[Browse LDAP integration templates](https://n8n.io/integrations/ldap/), or [search all templates](https://n8n.io/workflows/)

---

## Split Out

**URL:** llms-txt#split-out

**Contents:**
- Node parameters
  - Field to Split Out
  - Include
- Node options
  - Disable Dot Notation
  - Destination Field Name
  - Include Binary
- Templates and examples
- Related resources

Use the Split Out node to separate a single data item containing a list into multiple items. For example, a list of customers, and you want to split them so that you have an item for each customer.

Configure this node using the following parameters.

### Field to Split Out

Enter the field containing the list you want to separate out into individual items.

If you're working with binary data inputs, use `$binary` in an expression to set the field to split out.

Select whether and how you want n8n to keep any other fields from the input data with each new individual item.

- **No Other Fields**: No other fields will be included.
- **All Other Fields**: All other fields will be included.
- **Selected Other Fields**: Only the selected fields will be included.
  - **Fields to Include**: Enter a comma separated list of the fields you want to include.

### Disable Dot Notation

By default, n8n enables dot notation to reference child fields in the format `parent.child`. Use this option to disable dot notation (turned on) or to continue using dot (turned off).

### Destination Field Name

Enter the field in the output where the split field contents should go.

Choose whether to include binary data from the input in the new output (turned on) or not (turned off).

## Templates and examples

**Scrape and summarize webpages with AI**

[View template details](https://n8n.io/workflows/1951-scrape-and-summarize-webpages-with-ai/)

**Scrape business emails from Google Maps without the use of any third party APIs**

[View template details](https://n8n.io/workflows/2567-scrape-business-emails-from-google-maps-without-the-use-of-any-third-party-apis/)

**Automated Web Scraping: email a CSV, save to Google Sheets & Microsoft Excel**

[View template details](https://n8n.io/workflows/2275-automated-web-scraping-email-a-csv-save-to-google-sheets-and-microsoft-excel/)

[Browse Split Out integration templates](https://n8n.io/integrations/split-out/), or [search all templates](https://n8n.io/workflows/)

Learn more about [data structure and data flow](../../../../data/) in n8n workflows.

---

## TYPE n8n_scaling_mode_queue_jobs_active gauge

**URL:** llms-txt#type-n8n_scaling_mode_queue_jobs_active-gauge

n8n_scaling_mode_queue_jobs_active 0

---

## OpenID Connect (OIDC)

**URL:** llms-txt#openid-connect-(oidc)

- Available on Enterprise plans.
- You need to be an instance owner or admin to enable and configure OIDC.

This section covers how to enable and manage OpenID Connect (OIDC) for single sign-on (SSO). You can learn more about how OIDC works by visiting [what is OpenID Connect](https://openid.net/developers/how-connect-works/) by the OpenID Foundation.

- [Set up OIDC](setup/): a general guide to setting up OpenID Connect (OIDC) SSO in n8n.
- [Troubleshooting](troubleshooting/): a list of things to check if you encounter issues with OIDC.

---

## External secrets

**URL:** llms-txt#external-secrets

**Contents:**
- Connect n8n to your secrets store
- Use secrets in n8n credentials
- Using external secrets with n8n environments
- Using external secrets in projects
- Troubleshooting
  - Infisical version changes
  - Only set external secrets on credentials owned by an instance owner or admin

- External secrets are available on Enterprise Self-hosted and Enterprise Cloud plans.
- n8n supports AWS Secrets Manager, Azure Key Vault, GCP Secrets Manager, Infisical and HashiCorp Vault.
- n8n doesn't support [HashiCorp Vault Secrets](https://developer.hashicorp.com/hcp/docs/vault-secrets).

You can use an external secrets store to manage [credentials](../glossary/#credential-n8n) for n8n.

n8n stores all credentials encrypted in its database, and restricts access to them by default. With the external secrets feature, you can store sensitive credential information in an external vault, and have n8n load it in when required. This provides an extra layer of security and allows you to manage credentials used across multiple [n8n environments](../source-control-environments/) in one central place.

## Connect n8n to your secrets store

Your secret names can't contain spaces, hyphens, or other special characters. n8n supports secret names containing alphanumeric characters (`a-z`, `A-Z`, and `0-9`), and underscores. n8n currently only supports plaintext values for secrets, not JSON objects or key-value pairs.

1. In n8n, go to **Settings** > **External Secrets**.

1. Select **Set Up** for your store provider.

1. Enter the credentials for your provider:

- Azure Key Vault: Provide your **vault name**, **tenant ID**, **client ID**, and **client secret**. Refer to the Azure documentation to [register a Microsoft Entra ID app and create a service principal](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal). n8n supports only single-line values for secrets.

- AWS Secrets Manager: provide your **access key ID**, **secret access key**, and **region**. The IAM user must have the `secretsmanager:ListSecrets`, `secretsmanager:BatchGetSecretValue`, and `secretsmanager:GetSecretValue` permissions.

To give n8n access to all secrets in your AWS Secrets Manager, you can attach the following policy to the IAM user:

You can also be more restrictive and give n8n access to select specific AWS Secret Manager secrets. You still need to allow the `secretsmanager:ListSecrets` and `secretsmanager:BatchGetSecretValue` permissions to access all resources. These permissions allow n8n to retrieve ARN-scoped secrets, but don't provide access to the secret values.

Next, you need set the scope for the `secretsmanager:GetSecretValue` permission to the specific Amazon Resource Names (ARNs) for the secrets you wish to share with n8n. Ensure you use the correct region and account ID in each resource ARNs. You can find the ARN details in the AWS dashboard for your secrets.

For example, the following IAM policy only allows access to secrets with a name starting with `n8n` in your specified AWS account and region:

For more IAM permission policy examples, consult the [AWS documentation](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_iam-policies.html#auth-and-access_examples_batch).

- HashiCorp Vault: provide the **Vault URL** for your vault instance, and select your **Authentication Method**. Enter your authentication details. Optionally provide a namespace.

- Refer to the HashiCorp documentation for your authentication method: [Token auth method](https://developer.hashicorp.com/vault/docs/auth/token)\
       [AppRole auth method](https://developer.hashicorp.com/vault/docs/auth/approle)\
       [Userpass auth method](https://developer.hashicorp.com/vault/docs/auth/userpass)
     - If you use vault namespaces, you can enter the namespace n8n should connect to. Refer to [Vault Enterprise namespaces](https://developer.hashicorp.com/vault/docs/enterprise/namespaces) for more information on HashiCorp Vault namespaces.

- Infisical: provide a **Service Token**. Refer to Infisical's [Service token](https://infisical.com/docs/documentation/platform/token) documentation for information on getting your token. If you self-host Infisical, enter the **Site URL**.

Infisical environment

Make sure you select the correct Infisical environment when creating your token. n8n will load secrets from this environment, and won't have access to secrets in other Infisical environments. n8n only support service tokens that have access to a single environment.

n8n doesn't support [Infisical folders](https://infisical.com/docs/documentation/platform/folder).

- Google Cloud Platform: provide a **Service Account Key** (JSON) for a service account that has at least these roles: `Secret Manager Secret Accessor` and `Secret Manager Secret Viewer`. Refer to Google's [service account documentation](https://cloud.google.com/iam/docs/service-account-overview) for more information.

1. **Save** your configuration.

1. Enable the provider using the **Disabled / Enabled** toggle.

## Use secrets in n8n credentials

To use a secret from your store in an n8n credential:

1. Create a new credential, or open an existing one.

1. On the field where you want to use a secret:

1. Hover over the field.
   1. Select **Expression**.

1. In the field where you want to use a secret, enter an [expression](../glossary/#expression-n8n) referencing the secret name:

`<vault-name>` is either `vault` (for HashiCorp) or `infisical` or `awsSecretsManager`. Replace `<secret-name>` with the name as it appears in your vault.

## Using external secrets with n8n environments

n8n's [Source control and environments](../source-control-environments/) feature allows you to create different n8n environments, backed by Git. The feature doesn't support using different credentials in different instances. You can use an external secrets vault to provide different credentials for different environments by connecting each n8n instance to a different vault or project environment.

For example, you have two n8n instances, one for development and one for production. You use Infisical for your vault. In Infisical, create a project with two environments, development and production. Generate a token for each Infisical environment. Use the token for the development environment to connect your development n8n instance, and the token for your production environment to connect your production n8n instance.

## Using external secrets in projects

To use external secrets in an [RBAC project](../user-management/rbac/), you must have an [instance owner or instance admin](../user-management/account-types/) as a member of the project.

### Infisical version changes

Infisical version upgrades can introduce problems connecting to n8n. If your Infisical connection stops working, check if there was a recent version change. If so, report the issue to help@n8n.io.

### Only set external secrets on credentials owned by an instance owner or admin

Due to the permissions that instance owners and admins have, it's possible for owners and admins to update credentials owned by another user with a secrets expression. This will appear to work in preview for an instance owner or admin, but the secret won't resolve when the workflow runs in production.

Only use external secrets for credentials that are owned by an instance admin or owner. This ensures they resolve correctly in production.

AI agents are artificial intelligence systems capable of responding to requests, making decisions, and performing real-world tasks for users. They use large language models (LLMs) to interpret user input and make decisions about how to best process requests using the information and resources they have available.

AI chains allow you to interact with large language models (LLMs) and other resources in sequences of calls to components. AI chains in n8n don't use persistent memory, so you can't use them to reference previous context (use AI agents for this).

Completions are the responses generated by a model like GPT.

Embeddings are numerical representations of data using vectors. They're used by AI to interpret complex data and relationships by mapping values across many dimensions. Vector databases, or vector stores, are databases designed to store and access embeddings.

In AI, and specifically in retrieval-augmented generation (RAG) contexts, groundedness and ungroundedness are measures of how much a model's responses accurately reflect source information. The model uses its source documents to generate grounded responses, while ungrounded responses involve speculation or hallucination unsupported by those same sources.

#### AI hallucination

Hallucination in AI is when an LLM (large language model) mistakenly perceives patterns or objects that don't exist.

Reranking is a technique that refines the order of a list of candidate documents to improve the relevance of search results. Retrieval-Augmented Generation (RAG) and other applications use reranking to prioritize the most relevant information for generation or downstream tasks.

In an AI context, memory allows AI tools to persist message context across interactions. This allows you to have a continuing conversations with AI agents, for example, without submitting ongoing context with each message. In n8n, AI agent nodes can use memory, but AI chains can't.

#### AI retrieval-augmented generation (RAG)

Retrieval-augmented generation, or RAG, is a technique for providing LLMs access to new information from external sources to improve AI responses. RAG systems retrieve relevant documents to ground responses in up-to-date, domain-specific, or proprietary knowledge to supplement their original training data. RAG systems often rely on vector stores to manage and search this external data efficiently.

In an AI context, a tool is an add-on resource that the AI can refer to for specific information or functionality when responding to a request. The AI model can use a tool to interact with external systems or complete specific, focused tasks.

A vector store, or vector database, stores mathematical representations of information. Use with embeddings and retrievers to create a database that your AI can access when answering questions.

APIs, or application programming interfaces, offer programmatic access to a service's data and functionality. APIs make it easier for software to interact with external systems. They're often offered as an alternative to traditional user-focused interfaces accessed through web browsers or UI.

The canvas is the main interface for building workflows in n8n's editor UI. You use the canvas to add and connect nodes to compose workflows.

#### cluster node (n8n)

In n8n, cluster nodes are groups of nodes that work together to provide functionality in a workflow. They consist of a root node and one or more sub nodes that extend the node's functionality.

#### credential (n8n)

In n8n, credentials store authentication information to connect with specific apps and services. After creating credentials with your authentication information (username and password, API key, OAuth secrets, etc.), you can use the associated app node to interact with the service.

#### data pinning (n8n)

Data pinning allows you to temporarily freeze the output data of a node during workflow development. This allows you to develop workflows with predictable data without making repeated requests to external services. Production workflows ignore pinned data and request new data on each execution.

The n8n editor UI allows you to create and manage workflows. The main area is the canvas, where you can compose workflows by adding, configuring, and connecting nodes. The side and top panels allow you to access other areas of the UI like credentials, templates, variables, executions, and more.

#### entitlement (n8n)

In n8n, entitlements grant n8n instances access to plan-restricted features for a specific period of time.

Floating entitlements are a pool of entitlements that you can distribute among various n8n instances. You can re-assign a floating entitlement to transfer its access to a different n8n instance.

#### evaluation (n8n)

In n8n, evaluation allows you to tag and organize execution history and compare it against new executions. You can use this to understand how your workflow performs over time as you make changes. In particular, this is useful while developing AI-centered workflows.

#### expression (n8n)

In n8n, expressions allow you to populate node parameters dynamically by executing JavaScript code. Instead of providing a static value, you can use the n8n expression syntax to define the value using data from previous nodes, other workflows, or your n8n environment.

LangChain is an AI-development framework used to work with large language models (LLMs). LangChain provides a standardized system for working with a wide variety of models and other resources and linking different components together to build complex applications.

#### Large language model (LLM)

Large language models, or LLMs, are AI machine learning models designed to excel in natural language processing (NLP) tasks. They're built by training on large amounts of data to develop probabilistic models of language and other data.

In n8n, nodes are individual components that you compose to create workflows. Nodes define when the workflow should run, allow you to fetch, send, and process data, can define flow control logic, and connect with external services.

n8n projects allow you to separate workflows, variables, and credentials into separate groups for easier management. Projects make it easier for teams to collaborate by sharing and compartmentalizing related resources.

Each n8n cluster node contains a single root nodes that defines the main functionality of the cluster. One or more sub nodes attach to the root node to extend its functionality.

n8n cluster nodes consist of one or more sub nodes connected to a root node. Sub nodes extend the functionality of the root node, providing access to specific services or resources or offering specific types of dedicated processing, like calculator functionality, for example.

n8n templates are pre-built workflows designed by n8n and community members that you can import into your n8n instance. When using templates, you may need to fill in credentials and adjust the configuration to suit your needs.

#### trigger node (n8n)

A trigger node is a special node responsible for executing the workflow in response to certain conditions. All production workflows need at least one trigger to determine when the workflow should run.

An n8n workflow is a collection of nodes that automate a process. Workflows begin execution when a trigger condition occurs and execute sequentially to achieve complex tasks.

**Examples:**

Example 1 (unknown):
```unknown
{
     	"Version": "2012-10-17",
     	"Statement": [
     		{
     			"Sid": "AccessAllSecrets",
     			"Effect": "Allow",
     			"Action": [
     				"secretsmanager:ListSecrets",
     				"secretsmanager:BatchGetSecretValue",
     				"secretsmanager:GetResourcePolicy",
     				"secretsmanager:GetSecretValue",
     				"secretsmanager:DescribeSecret",
     				"secretsmanager:ListSecretVersionIds",
     			],
     			"Resource": "*"
     		}
     	]
     }
```

Example 2 (unknown):
```unknown
{
     	"Version": "2012-10-17",
     	"Statement": [
     		{
     			"Sid": "ListingSecrets",
     			"Effect": "Allow",
     			"Action": [
     				"secretsmanager:ListSecrets",
     				"secretsmanager:BatchGetSecretValue"
     			],
     			"Resource": "*"
     		},
     		{
     			"Sid": "RetrievingSecrets",
     			"Effect": "Allow",
     			"Action": [
     				"secretsmanager:GetSecretValue",
     				"secretsmanager:DescribeSecret"
     			],
     			"Resource": [
     				"arn:aws:secretsmanager:us-west-2:123456789000:secret:n8n*"
     			]
     		}
     	]
     }
```

Example 3 (unknown):
```unknown
{{ $secrets.<vault-name>.<secret-name> }}
```

---

## Queue mode environment variables

**URL:** llms-txt#queue-mode-environment-variables

**Contents:**
- Multi-main setup

File-based configuration

You can add `_FILE` to individual variables to provide their configuration in a separate file. Refer to [Keeping sensitive data in separate files](../../configuration-methods/#keeping-sensitive-data-in-separate-files) for more details.

You can run n8n in different modes depending on your needs. Queue mode provides the best scalability. Refer to [Queue mode](../../../scaling/queue-mode/) for more information.

| Variable                                | Type    | Default     | Description                                                                                                                                                                                                                                                                                                                                       |
| --------------------------------------- | ------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `OFFLOAD_MANUAL_EXECUTIONS_TO_WORKERS`  | Boolean | `false`     | Set to `true` if you want manual executions to run on the worker rather than on main.                                                                                                                                                                                                                                                             |
| `QUEUE_BULL_PREFIX`                     | String  | -           | Prefix to use for all queue keys.                                                                                                                                                                                                                                                                                                                 |
| `QUEUE_BULL_REDIS_DB`                   | Number  | `0`         | The Redis database used.                                                                                                                                                                                                                                                                                                                          |
| `QUEUE_BULL_REDIS_HOST`                 | String  | `localhost` | The Redis host.                                                                                                                                                                                                                                                                                                                                   |
| `QUEUE_BULL_REDIS_PORT`                 | Number  | `6379`      | The Redis port used.                                                                                                                                                                                                                                                                                                                              |
| `QUEUE_BULL_REDIS_USERNAME`             | String  | -           | The Redis username (needs Redis version 6 or above). Don't define it for Redis < 6 compatibility                                                                                                                                                                                                                                                  |
| `QUEUE_BULL_REDIS_PASSWORD`             | String  | -           | The Redis password.                                                                                                                                                                                                                                                                                                                               |
| `QUEUE_BULL_REDIS_TIMEOUT_THRESHOLD`    | Number  | `10000`     | The Redis timeout threshold (in ms).                                                                                                                                                                                                                                                                                                              |
| `QUEUE_BULL_REDIS_CLUSTER_NODES`        | String  | -           | Expects a comma-separated list of Redis Cluster nodes in the format `host:port`, for the Redis client to initially connect to. If running in queue mode (`EXECUTIONS_MODE = queue`), setting this variable will create a Redis Cluster client instead of a Redis client, and n8n will ignore `QUEUE_BULL_REDIS_HOST` and `QUEUE_BULL_REDIS_PORT`. |
| `QUEUE_BULL_REDIS_TLS`                  | Boolean | `false`     | Enable TLS on Redis connections.                                                                                                                                                                                                                                                                                                                  |
| `QUEUE_BULL_REDIS_DUALSTACK`            | Boolean | `false`     | Enable dual-stack support (IPv4 and IPv6) on Redis connections.                                                                                                                                                                                                                                                                                   |
| `QUEUE_WORKER_TIMEOUT` (**deprecated**) | Number  | `30`        | **Deprecated** Use `N8N_GRACEFUL_SHUTDOWN_TIMEOUT` instead. How long should n8n wait (seconds) for running executions before exiting worker process on shutdown.                                                                                                                                                                                  |
| `QUEUE_HEALTH_CHECK_ACTIVE`             | Boolean | `false`     | Whether to enable health checks (true) or disable (false).                                                                                                                                                                                                                                                                                        |
| `QUEUE_HEALTH_CHECK_PORT`               | Number  | 5678        | The port to serve health checks on. If you experience a port conflict error when starting a worker server using its default port, change this.                                                                                                                                                                                                    |
| `QUEUE_WORKER_LOCK_DURATION`            | Number  | `60000`     | How long (in ms) is the lease period for a worker to work on a message.                                                                                                                                                                                                                                                                           |
| `QUEUE_WORKER_LOCK_RENEW_TIME`          | Number  | `10000`     | How frequently (in ms) should a worker renew the lease time.                                                                                                                                                                                                                                                                                      |
| `QUEUE_WORKER_STALLED_INTERVAL`         | Number  | `30000`     | How often should a worker check for stalled jobs (use 0 for never).                                                                                                                                                                                                                                                                               |
| `QUEUE_WORKER_MAX_STALLED_COUNT`        | Number  | `1`         | Maximum amount of times a stalled job will be re-processed.                                                                                                                                                                                                                                                                                       |

Refer to [Configuring multi-main setup](../../../scaling/queue-mode/#configuring-multi-main-setup) for details.

| Variable                              | Type    | Default | Description                                                           |
| ------------------------------------- | ------- | ------- | --------------------------------------------------------------------- |
| `N8N_MULTI_MAIN_SETUP_ENABLED`        | Boolean | `false` | Whether to enable multi-main setup for queue mode (license required). |
| `N8N_MULTI_MAIN_SETUP_KEY_TTL`        | Number  | `10`    | Time to live (in seconds) for leader key in multi-main setup.         |
| `N8N_MULTI_MAIN_SETUP_CHECK_INTERVAL` | Number  | `3`     | Interval (in seconds) for leader check in multi-main setup.           |

---

## Insights

**URL:** llms-txt#insights

**Contents:**
- Insights summary banner
- Insights dashboard
- Insights time periods
- Setting the time saved by a workflow
- Disable or configure insights metrics collection
- Insights FAQs
  - Which executions do n8n use to calculate the values in the insights banner and dashboard?
  - Does n8n use historic execution data when upgrading to a version with insights?

Insights gives instance owners and admins visibility into how workflows perform over time. This feature consists of three parts:

- [**Insights summary banner**](#insights-summary-banner): Shows key metrics about your instance from the last 7 days at the top of the overview space.
- [**Insights dashboard**](#insights-dashboard): A more detailed visual breakdown with per-workflow metrics and historical comparisons.
- [**Time saved (Workflow ROI)**](#setting-the-time-saved-by-a-workflow): For each workflow, you can set the number of minutes of work that each production execution saves you.

The insights summary banner displays activity from the last 7 days for all plans. The insights dashboard is only available on Pro (with limited date ranges) and Enterprise plans.

## Insights summary banner

n8n collects several metrics for both the insights summary banner and dashboard. They include:

- Total production executions (not including sub-workflow executions or manual executions)
- Total failed production executions
- Production execution failure rate
- Time saved (when set on at least one or more active workflows)
- Run time average (including wait time from any wait nodes)

## Insights dashboard

Those on the Pro and Enterprise plans can access the **Insights** section from the side navigation. Each metric from the summary banner is also clickable, taking you to the corresponding chart.

The insights dashboard also has a table showing individual insights from each workflow including total production executions, failed production executions, failure rate, time saved, and run time average.

## Insights time periods

By default, the insights summary banner and dashboard show a rolling 7 day window with a comparison to the previous period to identify increases or decreases for each metric. On the dashboard, paid plans also display data for other date ranges:

- Pro: 7 and 14 days
- Enterprise: 24 hours, 7 days, 14 days, 30 days, 90 days, 6 months, 1 year

## Setting the time saved by a workflow

For each workflow, you can set the number of minutes of work a workflow saves you each time it runs. You can configure this by navigating to the workflow, selecting the three dots menu in the top right and selecting settings. There you can update the **Estimated time saved** value and save.

This setting helps you calculate how much time automating a process saves over time vs the manual effort to complete the same task or process. Once set, n8n calculates the amount of time the workflow saves you based on the number of production executions and displays it on the summary banner and dashboard.

## Disable or configure insights metrics collection

If you self-host n8n, you can disable or configure insights and metrics collection using [environment variables](../hosting/configuration/environment-variables/insights/).

### Which executions do n8n use to calculate the values in the insights banner and dashboard?

n8n insights only collects data from production executions (for example, those from active workflows triggered on a schedule or a webhook) from the main (parent) workflow. This means that it doesn't count manual (test) executions or executions from sub-workflows or error workflows.

### Does n8n use historic execution data when upgrading to a version with insights?

n8n only starts collecting data for insights once you update to the first supported version (1.89.0). This means it only reports on executions from that point forward and you won't see execution data in insights from prior periods.

---

## Manage users with SAML

**URL:** llms-txt#manage-users-with-saml

**Contents:**
- Exempt users from SAML
- Deleting users

- Available on Enterprise plans.
- You need to be an instance owner or admin to enable and configure SAML.

There are some user management tasks that are affected by SAML.

## Exempt users from SAML

You can allow users to log in without using SAML. To do this:

1. Go to **Settings** > **Users**.
1. Select the menu icon by the user you want to exempt from SAML.
1. Select **Allow Manual Login**.

If you remove a user from your IdP, they remain logged in to n8n. You need to manually remove them from n8n as well. Refer to [Manage users](../../manage-users/) for guidance on deleting users.

---

## Okta Workforce Identity SAML setup

**URL:** llms-txt#okta-workforce-identity-saml-setup

**Contents:**
- Prerequisites
- Setup

Set up SAML SSO in n8n with Okta.

Workforce Identity and Customer Identity

This guide covers setting up Workforce Identity. This is the original Okta product. Customer Identity is Okta's name for Auth0, which they've acquired.

You need an Okta Workforce Identity account, and the redirect URL and entity ID from n8n's SAML settings.

Okta Workforce may enforce two factor authentication for users, depending on your Okta configuration.

Read the [Set up SAML](../setup/) guide first.

1. In your Okta admin panel, select **Applications** > **Applications**.

1. Select **Create App Integration**. Okta opens the app creation modal.

1. Select **SAML 2.0**, then select **Next**.

1. On the **General Settings** tab, enter `n8n` as the **App name**.

1. On the **Configure SAML** tab, complete the following **General** fields:

- **Single sign-on URL**: the **Redirect URL** from n8n.
   - **Audience URI (SP Entity ID)**: the **Entity ID** from n8n.
   - **Default RelayState**: leave this empty.
   - **Name ID format**: `EmailAddress`.
   - **Application username**: `Okta username`.
   - **Update application username on**: `Create and update`.

1. Create **Attribute Statements**:

| **Name**                                                             | **Name format** | **Value**      |
   | -------------------------------------------------------------------- | --------------- | -------------- |
   | `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/firstname`    | URI Reference   | user.firstName |
   | `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/lastname`     | URI Reference   | user.lastName  |
   | `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn`          | URI Reference   | user.login     |
   | `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress` | URI Reference   | user.email     |

1. Select **Next**. Okta may prompt you to complete a marketing form, or may take you directly to your new n8n Okta app.

1. Assign the n8n app to people:

1. On the n8n app dashboard in Okta, select **Assignments**.
   1. Select **Assign** > **Assign to People**. Okta displays a modal with a list of available people.
   1. Select **Assign** next to the person you want to add. Okta displays a prompt to confirm the username.
   1. Leave the username as email address. Select **Save and Go Back**.
   1. Select **Done**.

1. Get the metadata XML: on the **Sign On** tab, copy the Metadata URL. Navigate to it, and copy the XML. Paste this into **Identity Provider Settings** in n8n.

1. Select **Save settings**.

1. Select **Test settings**. n8n opens a new tab. If you're not currently logged in, Okta prompts you to sign in. n8n then displays a success message confirming the attributes returned by Okta.

---

## healthz

**URL:** llms-txt#healthz

QUEUE_HEALTH_CHECK_ACTIVE=true
```

Refer to [Configuration methods](../../configuration/configuration-methods/) for more information on how to configure your instance using environment variables.

---

## Incident response

**URL:** llms-txt#incident-response

n8n implements incident response best practices for identifying, documenting, resolving and communicating incidents.

n8n publishes incident notifications to a status page at [n8n Status](https://status.n8n.cloud/).

n8n notifies customers of any data breaches according to the company's [Data Processing Addendum](https://n8n.io/legal/#data).

---

## Item linking errors

**URL:** llms-txt#item-linking-errors

**Contents:**
  - Fix for 'Info for expressions missing from previous node'
  - Fix for 'Multiple matching items for expression'

In n8n you can reference data from any previous node. This doesn't have to be the node just before: it can be any previous node in the chain. When referencing nodes further back, you use the expression syntax `$(node_name).item`.

Diagram of threads for different items. Due to the item linking, you can get the actor for each movie using `$('Get famous movie actors').item`.

Since the previous node can have multiple items in it, n8n needs to know which one to use. When using `.item`, n8n figures this out for you behind the scenes. Refer to [Item linking concepts](../item-linking-concepts/) for detailed information on how this works.

`.item` fails if information is missing. To figure out which item to use, n8n maintains a thread back through the workflow's nodes for each item. For a given item, this thread tells n8n which items in previous nodes generated it. To find the matching item in a given previous node, n8n follows this thread back until it reaches the node in question.

When using `.item`, n8n displays an error when:

- The thread is broken
- The thread points to more than one item in the previous node (as it's unclear which one to use)

To solve these errors, you can either avoid using `.item`, or fix the root cause.

You can avoid `.item` by using `.first()`, `.last()` or `.all()[index]` instead. They require you to know the position of the item that you’re targeting within the target node's output items. Refer to [Built in methods and variables | Output of other nodes](../../../../code/builtin/output-other-nodes/) for more detail on these methods.

The fix for the root cause depends on the exact error.

### Fix for 'Info for expressions missing from previous node'

If you see this error message:

> ERROR: Info for expression missing from previous node

There's a node in the chain that doesn't return pairing information. The solution here depends on the type of the previous node:

- Code nodes: make sure you return which input items the node used to produce each output item. Refer to [Item linking in the code node](../item-linking-code-node/) for more information.
- Custom or community nodes: the node creator needs to update the node to return which input items it uses to produce each output item. Refer to [Item linking for node creators](../item-linking-node-building/) for more information.

### Fix for 'Multiple matching items for expression'

This is the error message:

> ERROR: Multiple matching items for expression

Sometimes n8n uses multiple items to create a single item. Examples include the Summarize, Aggregate, and Merge nodes. These nodes can combine information from multiple items.

When you use `.item` and there are multiple possible matches, n8n doesn't know which one to use. To solve this you can either:

- Use `.first()`, `.last()` or `.all()[index]` instead. Refer to [Built in methods and variables | Output of other nodes](../../../../code/builtin/output-other-nodes/) for more detail on these methods.
- Reference a different node that contains the same information, but doesn't have multiple matching items.

---

## Log streaming

**URL:** llms-txt#log-streaming

**Contents:**
- Set up log streaming
- Events
- Destinations

Log Streaming is available on all Enterprise plans.

Log streaming allows you to send events from n8n to your own logging tools. This allows you to manage your n8n monitoring in your own alerting and logging processes.

## Set up log streaming

To use log streaming, you have to add a streaming destination.

1. Navigate to **Settings** > **Log Streaming**.
1. Select **Add new destination**.
1. Choose your destination type. n8n opens the **New Event Destination** modal.
1. In the **New Event Destination** modal, enter the configuration information for your event destination. These depend on the type of destination you're using.
1. Select **Events** to choose which events to stream.
1. Select **Save**.

If you self-host n8n, you can configure additional log streaming behavior using [Environment variables](../hosting/configuration/environment-variables/logs/#log-streaming).

The following events are available. You can choose which events to stream in **Settings** > **Log Streaming** > **Events**.

- Workflow
  - Started
  - Success
  - Failed
- Node executions
  - Started
  - Finished
- Audit
  - User signed up
  - User updated
  - User deleted
  - User invited
  - User invitation accepted
  - User re-invited
  - User email failed
  - User reset requested
  - User reset
  - User credentials created
  - User credentials shared
  - User credentials updated
  - User credentials deleted
  - User API created
  - User API deleted
  - Package installed
  - Package updated
  - Package deleted
  - Workflow created
  - Workflow deleted
  - Workflow updated
- AI node logs
  - Memory get messages
  - Memory added message
  - Output parser get instructions
  - Output parser parsed
  - Retriever get relevant documents
  - Embeddings embedded document
  - Embeddings embedded query
  - Document processed
  - Text splitter split
  - Tool called
  - Vector store searched
  - LLM generated
  - Vector store populated
- Runner
  - Task requested
  - Response received
- Queue
  - Job enqueued
  - Job dequeued
  - Job completed
  - Job failed
  - Job stalled

n8n supports three destination types:

- A syslog server
- A generic webhook
- A Sentry client

---

## Database environment variables

**URL:** llms-txt#database-environment-variables

**Contents:**
- PostgreSQL
- SQLite

File-based configuration

You can add `_FILE` to individual variables to provide their configuration in a separate file. Refer to [Keeping sensitive data in separate files](../../configuration-methods/#keeping-sensitive-data-in-separate-files) for more details.

By default, n8n uses SQLite. n8n also supports PostgreSQL. n8n [deprecated support for MySQL and MariaDB](../../../../1-0-migration-checklist/#mysql-and-mariadb) in v1.0.

This page outlines environment variables to configure your chosen database for your self-hosted n8n instance.

| Variable                   | Type                                | Default  | Description                                                                                        |
| -------------------------- | ----------------------------------- | -------- | -------------------------------------------------------------------------------------------------- |
| `DB_TYPE` /`_FILE`         | Enum string: `sqlite`, `postgresdb` | `sqlite` | The database to use.                                                                               |
| `DB_TABLE_PREFIX`          | \*                                  | -        | Prefix to use for table names.                                                                     |
| `DB_PING_INTERVAL_SECONDS` | Number                              | `2`      | The interval, in seconds, between pings to the database to check if the connection is still alive. |

| Variable                                         | Type    | Default     | Description                                                                                                                                                              |
| ------------------------------------------------ | ------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `DB_POSTGRESDB_DATABASE` /`_FILE`                | String  | `n8n`       | The name of the PostgreSQL database.                                                                                                                                     |
| `DB_POSTGRESDB_HOST` /`_FILE`                    | String  | `localhost` | The PostgreSQL host.                                                                                                                                                     |
| `DB_POSTGRESDB_PORT` /`_FILE`                    | Number  | `5432`      | The PostgreSQL port.                                                                                                                                                     |
| `DB_POSTGRESDB_USER` /`_FILE`                    | String  | `postgres`  | The PostgreSQL user.                                                                                                                                                     |
| `DB_POSTGRESDB_PASSWORD` /`_FILE`                | String  | -           | The PostgreSQL password.                                                                                                                                                 |
| `DB_POSTGRESDB_POOL_SIZE` /`_FILE`               | Number  | `2`         | Control how many parallel open Postgres connections n8n should have. Increasing it may help with resource utilization, but too many connections may degrade performance. |
| `DB_POSTGRESDB_CONNECTION_TIMEOUT` /`_FILE`      | Number  | `20000`     | Postgres connection timeout (ms).                                                                                                                                        |
| `DB_POSTGRESDB_IDLE_CONNECTION_TIMEOUT` /`_FILE` | Number  | `30000`     | Amount of time before an idle connection is eligible for eviction for being idle.                                                                                        |
| `DB_POSTGRESDB_SCHEMA` /`_FILE`                  | String  | `public`    | The PostgreSQL schema.                                                                                                                                                   |
| `DB_POSTGRESDB_SSL_ENABLED` /`_FILE`             | Boolean | `false`     | Whether to enable SSL. Automatically enabled if `DB_POSTGRESDB_SSL_CA`, `DB_POSTGRESDB_SSL_CERT` or `DB_POSTGRESDB_SSL_KEY` is defined.                                  |
| `DB_POSTGRESDB_SSL_CA` /`_FILE`                  | String  | -           | The PostgreSQL SSL certificate authority.                                                                                                                                |
| `DB_POSTGRESDB_SSL_CERT` /`_FILE`                | String  | -           | The PostgreSQL SSL certificate.                                                                                                                                          |
| `DB_POSTGRESDB_SSL_KEY` /`_FILE`                 | String  | -           | The PostgreSQL SSL key.                                                                                                                                                  |
| `DB_POSTGRESDB_SSL_REJECT_UNAUTHORIZED` /`_FILE` | Boolean | `true`      | If n8n should reject unauthorized SSL connections (true) or not (false).                                                                                                 |

| Variable                      | Type    | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----------------------------- | ------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DB_SQLITE_POOL_SIZE`         | Number  | `0`     | Controls whether to open the SQLite file in [WAL mode](https://www.sqlite.org/wal.html) or [rollback journal mode](https://www.sqlite.org/lockingv3.html#rollback). Uses rollback journal mode when set to zero. When greater than zero, uses WAL mode with the value determining the number of parallel SQL read connections to configure. WAL mode is much more performant and reliable than the rollback journal mode. |
| `DB_SQLITE_VACUUM_ON_STARTUP` | Boolean | `false` | Runs [VACUUM](https://www.sqlite.org/lang_vacuum.html) operation on startup to rebuild the database. Reduces file size and optimizes indexes. This is a long running blocking operation and increases start-up time.                                                                                                                                                                                                      |

---

## Google Sheets

**URL:** llms-txt#google-sheets

**Contents:**
- Operations
- Templates and examples
- Related resources
- Common issues
- What to do if your operation isn't supported

Use the Google Sheets node to automate work in Google Sheets, and integrate Google Sheets with other applications. n8n has built-in support for a wide range of Google Sheets features, including creating, updating, deleting, appending, removing and getting documents.

On this page, you'll find a list of operations the Google Sheets node supports and links to more resources.

Refer to [Google Sheets credentials](../../credentials/google/) for guidance on setting up authentication.

- **Document**
  - [**Create**](document-operations/#create-a-spreadsheet) a spreadsheet.
  - [**Delete**](document-operations/#delete-a-spreadsheet) a spreadsheet.
- **Sheet Within Document**
  - [**Append or Update Row**](sheet-operations/#append-or-update-row): Append a new row, or update the current one if it already exists.
  - [**Append Row**](sheet-operations/#append-row): Create a new row.
  - [**Clear**](sheet-operations/#clear-a-sheet) all data from a sheet.
  - [**Create**](sheet-operations/#create-a-new-sheet) a new sheet.
  - [**Delete**](sheet-operations/#delete-a-sheet) a sheet.
  - [**Delete Rows or Columns**](sheet-operations/#delete-rows-or-columns): Delete columns and rows from a sheet.
  - [**Get Row(s)**](sheet-operations/#get-rows): Read all rows in a sheet.
  - [**Update Row**](sheet-operations/#update-row): Update a row in a sheet.

## Templates and examples

**Generate AI Viral Videos with Seedance and Upload to TikTok, YouTube & Instagram**

[View template details](https://n8n.io/workflows/5338-generate-ai-viral-videos-with-seedance-and-upload-to-tiktok-youtube-and-instagram/)

**Generate AI Videos with Google Veo3, Save to Google Drive and Upload to YouTube**

[View template details](https://n8n.io/workflows/4846-generate-ai-videos-with-google-veo3-save-to-google-drive-and-upload-to-youtube/)

**Scrape business emails from Google Maps without the use of any third party APIs**

[View template details](https://n8n.io/workflows/2567-scrape-business-emails-from-google-maps-without-the-use-of-any-third-party-apis/)

[Browse Google Sheets integration templates](https://n8n.io/integrations/google-sheets/), or [search all templates](https://n8n.io/workflows/)

Refer to [Google Sheet's API documentation](https://developers.google.com/sheets/api) for more information about the service.

For common questions or issues and suggested solutions, refer to [Common issues](common-issues/).

## What to do if your operation isn't supported

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
1. Select the service you want to connect to.
1. Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.

---

## n8n displays "Today's date is <unix timestamp>"

**URL:** llms-txt#n8n-displays-"today's-date-is-<unix-timestamp>"

---

## n8n Docs

**URL:** llms-txt#n8n-docs

> Documentation for n8n, a workflow automation platform.

Documentation for n8n, a workflow automation platform. This file helps LLMs understand and use the documentation more effectively.

---

## add more, one per line, e.g.:

**URL:** llms-txt#add-more,-one-per-line,-e.g.:

---

## Summarize

**URL:** llms-txt#summarize

**Contents:**
- Node parameters
  - Fields to Summarize
  - Fields to Split By
- Node options
  - Continue if Field Not Found
  - Disable Dot Notation
  - Output Format
- Ignore items without valid fields to group by
- Templates and examples
- Related resources

Use the Summarize node to aggregate items together, in a manner similar to Excel pivot tables.

### Fields to Summarize

Use these fields to define how you want to summarize your input data.

- **Aggregation**: Select the aggregation method to use on a given field. Options include:
  - **Append**: Append
    - If you select this option, decide whether you want to **Include Empty Values** or not.
  - **Average**: Calculate the numeric average of your input data.
  - **Concatenate**: Combine together values in your input data.
    - If you select this option, decide whether you want to **Include Empty Values** or not.
    - **Separator**: Select the separator you want to insert between concatenated values.
  - **Count**: Count the total number of values in your input data.
  - **Count Unique**: Count the number of unique values in your input data.
  - **Max**: Find the highest numeric value in your input data.
  - **Min**: Find the lowest numeric value in your input data.
  - **Sum**: Add together the numeric values in your input data.
- **Field**: Enter the name of the field you want to perform the aggregation on.

### Fields to Split By

Enter the name of the input fields that you want to split the summary by (similar to a group by statement). This allows you to get separate summaries based on values in other fields.

For example, if our input data contains columns for `Sales Rep` and `Deal Amount` and we're performing a **Sum** on the `Deal Amount` field, we could split by `Sales Rep` to get a **Sum** total for each Sales Rep.

To enter multiple fields to split by, enter a comma-separated list.

### Continue if Field Not Found

By default, if a **Field to Summarize** isn't in any items, the node throws an error. Use this option to continue and return a single empty item (turned on) instead or keep the default error behavior (turned off).

### Disable Dot Notation

By default, n8n enables dot notation to reference child fields in the format `parent.child`. Use this option to disable dot notation (turned on) or to continue using dot (turned off).

Select the format for your output format. This option is recommended if you're using **Fields to Split By**

- **Each Split in a Separate Item**: Use this option to generate a separate output item for each split out field.
- **All Splits in a Single Item**: Use this option to generate a single item that lists the split out fields.

## Ignore items without valid fields to group by

Set whether to ignore input items that don't contain the **Fields to Split By** (turned on) or not (turned off).

## Templates and examples

**Scrape and summarize webpages with AI**

[View template details](https://n8n.io/workflows/1951-scrape-and-summarize-webpages-with-ai/)

**⚡AI-Powered YouTube Video Summarization & Analysis**

[View template details](https://n8n.io/workflows/2679-ai-powered-youtube-video-summarization-and-analysis/)

**🤖 AI Powered RAG Chatbot for Your Docs + Google Drive + Gemini + Qdrant**

[View template details](https://n8n.io/workflows/2982-ai-powered-rag-chatbot-for-your-docs-google-drive-gemini-qdrant/)

[Browse Summarize integration templates](https://n8n.io/integrations/summarize/), or [search all templates](https://n8n.io/workflows/)

Learn more about [data structure and data flow](../../../../data/) in n8n workflows.

---

## Google Calendar Calendar operations

**URL:** llms-txt#google-calendar-calendar-operations

**Contents:**
- Availability
  - Options

Use this operation to check availability in a calendar in Google Calendar. Refer to [Google Calendar](../) for more information on the Google Calendar node itself.

Use this operation to check if a time-slot is available in a calendar.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [Google Calendar credentials](../../../credentials/google/).
- **Resource**: Select **Calendar**.
- **Operation**: Select **Availability**.
- **Calendar**: Choose a calendar you want to check against. Select **From list** to choose the title from the dropdown list or **By ID** to enter a calendar ID.
- **Start Time**: The start time for the time-slot you want to check. By default, uses an expression evaluating to the current time (`{{ $now }}`).
- **End Time**: The end time for the time-slot you want to check. By default, uses an expression evaluating to an hour from now (`{{ $now.plus(1, 'hour') }}`).

- **Output Format**: Select the format for the availability information:
  - **Availability**: Returns if there are already events overlapping with the given time slot or not.
  - **Booked Slots**: Returns the booked slots.
  - **RAW**: Returns the RAW data from the API.
- **Timezone**: The timezone used in the response. By default, uses the n8n timezone.

Refer to the [Freebusy: query | Google Calendar](https://developers.google.com/calendar/api/v3/reference/freebusy/query) API documentation for more information.

---

## Set up your development environment

**URL:** llms-txt#set-up-your-development-environment

**Contents:**
- Requirements
- Editor setup

This document lists the essential dependencies for developing a node, as well as guidance on setting up your editor.

To build and test a node, you need:

- Node.js and npm. Minimum version Node 18.17.0. You can find instructions on how to install both using nvm (Node Version Manager) for Linux, Mac, and WSL (Windows Subsystem for Linux) [here](https://github.com/nvm-sh/nvm). For Windows users, refer to Microsoft's guide to [Install NodeJS on Windows](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows).
- A local instance of n8n. You can install n8n with `npm install n8n -g`, then follow the steps in [Run your node locally](../../test/run-node-locally/) to test your node.
- When [building verified community nodes](../../../community-nodes/build-community-nodes/), you must use the [`n8n-node` tool](../n8n-node/) to create and test your node.

You should also have [git](https://git-scm.com/) installed. This allows you to clone and use the [n8n-node-starter](https://github.com/n8n-io/n8n-nodes-starter).

n8n recommends using [VS Code](https://code.visualstudio.com/) as your editor.

Install these extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

By using VS Code and these extensions, you get access to the n8n node linter's warnings as you code.

---

## Timezone and localization environment variables

**URL:** llms-txt#timezone-and-localization-environment-variables

File-based configuration

You can add `_FILE` to individual variables to provide their configuration in a separate file. Refer to [Keeping sensitive data in separate files](../../configuration-methods/#keeping-sensitive-data-in-separate-files) for more details.

| Variable             | Type   | Default            | Description                                                                                                                                                                                                                                                                                                                                                    |
| -------------------- | ------ | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GENERIC_TIMEZONE`   | \*     | `America/New_York` | The n8n instance timezone. Important for schedule nodes (such as Cron).                                                                                                                                                                                                                                                                                        |
| `N8N_DEFAULT_LOCALE` | String | `en`               | A locale identifier, compatible with the [Accept-Language header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language). n8n doesn't support regional identifiers, such as `de-AT`. When running in a locale other than the default, n8n displays UI strings in the selected locale, and falls back to `en` for any untranslated strings. |

---

## Release notes pre 1.0

**URL:** llms-txt#release-notes-pre-1.0

**Contents:**
- How to update n8n
- Semantic versioning in n8n
- n8n@0.237.0
  - Contributors
- n8n@0.236.3
  - Contributors
- n8n@0.236.2
- n8n@0.236.1
- n8n@0.236.0
  - New nodes

Features and bug fixes for n8n before the release of 1.0.0.

You can also view the [Releases](https://github.com/n8n-io/n8n/releases) in the GitHub repository.

Latest and Next versions

n8n releases a new minor version most weeks. The `latest` version is for production use. `next` is the most recent release. You should treat `next` as a beta: it may be unstable. To report issues, use the [forum](https://community.n8n.io/c/questions/12).

Current `latest`: 1.116.2\
Current `next`: 1.117.0

The steps to update your n8n depend on which n8n platform you use. Refer to the documentation for your n8n:

- [Cloud](../../manage-cloud/update-cloud-version/)
- Self-hosted options:
  - [npm](../../hosting/installation/npm/)
  - [Docker](../../hosting/installation/docker/)

## Semantic versioning in n8n

n8n uses [semantic versioning](https://semver.org/). All version numbers are in the format `MAJOR.MINOR.PATCH`. Version numbers increment as follows:

- MAJOR version when making incompatible changes which can require user action.
- MINOR version when adding functionality in a backward-compatible manner.
- PATCH version when making backward-compatible bug fixes.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.236.3...n8n@0.237.0) for this version.\
**Release date:** 2023-08-17

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

[Jordan Hall](https://github.com/Jordan-Hall)\
[Xavier Calland](https://github.com/xavier-calland)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.236.2...n8n@0.236.3) for this version.\
**Release date:** 2023-07-18

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

[Romain Dunand](https://github.com/airmoi)\
[noctarius aka Christoph Engelbert](https://github.com/noctarius)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.236.1...n8n@0.236.2) for this version.\
**Release date:** 2023-07-14

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.236.0...n8n@0.236.1) for this version.\
**Release date:** 2023-07-12

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.235.0...n8n@0.236.0) for this version.\
**Release date:** 2023-07-05

This release contains new nodes, node enhancements, and bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

This release includes a [crowd.dev](https://www.crowd.dev/) node and crowd.dev Trigger node. crowd.dev is a tool to help you understand who is engaging with your open source project.

[crowd.dev node documentation](../../integrations/builtin/app-nodes/n8n-nodes-base.crowddev/).

[Alberto Pasqualetto](https://github.com/albertopasqualetto)\
[perseus-algol](https://github.com/perseus-algol)\
[Romeo Balta](https://github.com/romeobalta)\
[ZergRael](https://github.com/ZergRael)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.234.0...n8n@0.234.1) for this version.\
**Release date:** 2023-07-05

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.234.0...n8n@0.235.0) for this version.\
**Release date:** 2023-06-28

This release contains new features, new nodes, node enhancements, and bug fixes.

This version is (as of 4th July 2023) considered unstable. n8n recommends against upgrading.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

[Marten Steketee](https://github.com/Marten-S)\
[Sandra Ashipala](https://github.com/sandramsc)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.233.1...n8n@0.234.0) for this version.\
**Release date:** 2023-06-22

This release contains new features, new nodes, node enhancements, and bug fixes.

This version is (as of 4th July 2023) considered unstable. n8n recommends upgrading directly to 0.234.1.

Irreversible database migration

This version contains a database migration that changes credential and workflow IDs to use nanoId strings, This migration may take a while to complete in some environments. This change doesn't break anything using the older numeric IDs.

If you upgrade to 0.234.0, you can't roll back to an earlier version.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

The Debug Helper node can be used to trigger different error types or generate random datasets to help test n8n workflows.

[Debug Helper node documentation](../../integrations/builtin/core-nodes/n8n-nodes-base.debughelper/).

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.233.0...n8n@0.233.1) for this version.\
**Release date:** 2023-06-19

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.232.0...n8n@0.233.0) for this version.\
**Release date:** 2023-06-14

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.231.1...n8n@0.232.0) for this version.\
**Release date:** 2023-06-07

This release contains new features, new nodes, node enhancements, and bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

This release includes a new trigger node for Postgres, which allows you to listen to events, as well as listen to custom channels. Refer to [Postgres Trigger](../../integrations/builtin/trigger-nodes/n8n-nodes-base.postgrestrigger/) for more information.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.231.2...n8n@0.231.3) for this version.\
**Release date:** 2023-06-17

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.231.1...n8n@0.231.2) for this version.\
**Release date:** 2023-06-14

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.231.0...n8n@0.231.1) for this version.\
**Release date:** 2023-06-06

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.230.2...n8n@0.231.0) for this version.\
**Release date:** 2023-05-31

This release contains bug fixes and new features.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

Notable new features.

#### Resource mapper UI component

This release includes a new UI component, the resource mapper. This component is useful for node creators. If your node does insert, update, or upsert operations, you need to send data from the node in a format supported by the service you're integrating with. Often it's necessary to use a Set node before a node that sends data, to get the data to match the schema of the service you're connecting to. The resource mapper UI component provides a way to get data into the required format directly within the node.

Refer to [Node user interface elements | Resource mapper](../../integrations/creating-nodes/build/reference/ui-elements/#resource-mapper) for guidance for node builders.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.230.2...n8n@0.230.3) for this version.\
**Release date:** 2023-06-05

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.230.1...n8n@0.230.2) for this version.\
**Release date:** 2023-05-25

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.230.0...n8n@0.230.1) for this version.\
**Release date:** 2023-05-25

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.229.0...n8n@0.230.0) for this version.\
**Release date:** 2023-05-24

This release contains new features, new nodes, node enhancements, and bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

Save metadata for workflow executions. You can then search by this data in the **Executions** list.

[Execution Data node documentation](../../integrations/builtin/core-nodes/n8n-nodes-base.executiondata/).

The LDAP node allows you to interact with your LDAP servers from your n8n workflows.

[LDAP node documentation](../../integrations/builtin/core-nodes/n8n-nodes-base.ldap/).

Integrate n8n with [LoneScale](https://www.lonescale.com/), a buying intents data platform.

[LoneScale node documentation](../../integrations/builtin/app-nodes/n8n-nodes-base.lonescale/).

[Bram Kn](https://github.com/bramkn)\
[pemontto](https://github.com/pemontto)\
[Yann Aleman](https://github.com/SanYann)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.228.0...n8n@0.229.0) for this version.\
**Release date:** 2023-05-17

This release contains bug fixes, improves UI copy and error messages in some nodes, and other node enhancements.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

### Node enhancements

The Google Ads node now supports v13.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.228.1...n8n@0.228.2) for this version.\
**Release date:** 2023-05-15

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.228.0...n8n@0.228.1) for this version.\
**Release date:** 2023-05-11

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.227.0...n8n@0.228.0) for this version.\
**Release date:** 2023-05-11

This release contains new features, node enhancements, and bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

This release introduces the [npm](../../integrations/builtin/app-nodes/n8n-nodes-base.npm/) node. This is a new core node. It provides a way to query an npm registry within your workflow.

[Adam Charnock](https://github.com/adamcharnock)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.227.0...n8n@0.227.1) for this version.\
**Release date:** 2023-05-15

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.226.2...n8n@0.227.0) for this version.\
**Release date:** 2023-05-03

This release contains new features, node enhancements, and bug fixes.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

### Node enhancements

- An overhaul of the Microsoft Excel 365 node, improve the UI making it easier to configure, improve error handling, and fix issues.

This release deprecates the following:

- The `EXECUTIONS_PROCESS` environment variable.
- Running n8n in own mode. Main mode is now the default. Use [Queue mode](../../hosting/scaling/queue-mode/) if you need full execution isolation.
- The `WEBHOOK_TUNNEL_URL` flag. Replaced by `WEBHOOK_URL`.
- Support for MySQL and MariaDB as n8n backend databases. n8n will remove support completely in version 1.0. n8n recommends using PostgreSQL instead.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.226.1...n8n@0.226.2) for this version.\
**Release date:** 2023-05-03

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.226.0...n8n@0.226.1) for this version.\
**Release date:** 2023-05-02

This is a bug fix release.

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.225.2...n8n@0.226.0) for this version.\
**Release date:** 2023-04-26

This release contains new features, node enhancements, and bug fixes.

Please note that this version contains a breaking change to `extractDomain` and `isDomain`. You can read more about it [here](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md#02260).

For full release details, refer to [Releases](https://github.com/n8n-io/n8n/releases) on GitHub.

- A new command to get information about licenses for self-hosted users:

### Node enhancements

- Nodes that use SQL, such as the PostgresSQL node, now have a better SQL editor for writing custom queries.
- An overhaul of the Google BigQuery node to support executing queries, improve the UI making it easier to configure, improve error handling, and fix issues.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.225.1...n8n@0.225.2) for this version.\
**Release date:** 2023-04-25

This is a bug fix release.

- Core: Upgrade google-timezones-json to use the correct timezone for Sao Paulo.
- Code Node: Update vm2 to address [CVE-2023-30547](https://github.com/advisories/GHSA-ch3r-j5x3-6q2m).

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.225.0...n8n@0.225.1) for this version.\
**Release date:** 2023-04-20

This is a bug fix release.

- Editor: Clean up demo and template callouts from workflows page.
- Editor: Fix memory leak in Node Detail View by correctly unsubscribing from event buses.
- Editor: Settings sidebar should disconnect from push when navigating away.
- Notion Node: Update credential test to not require user permissions.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.224.1...n8n@0.225.0) for this version.\
**Release date:** 2023-04-19

This release introduces [Variables](../../code/variables/). You can now create variables that allows you to store and reuse values in n8n workflows. This is the first phase of a larger project to support [Environments](../../source-control-environments/) in n8n.

- Core: Add support for Google Service account authentication in the HTTP Request node.
- GitLab Node: Add **Additional Parameters** for the file list operation.
- MySQL Node: This node has been overhauled.

- Core: Fix broken API permissions in public API.
- Core: Fix paired item returning wrong data.
- Core: Improve SAML connection test result views.
- Core: Make getExecutionId available on all nodes types.
- Core: Skip SAML onboarding for users with first- and lastname.
- Editor: Add padding to prepend input.
- Editor: Clean up demo/video experiment.
- Editor: Enterprise features missing with user management.
- Editor: Fix moving canvas on middle click preventing lasso selection.
- Editor: Make sure to redirect to blank canvas after personalisation modal.
- Editor: Fix an issue that was preventing typing certain characters in the UI on devices with touchscreen.
- Editor: Fix n8n-checkbox alignment.
- Code Node: Handle user code returning null and undefined.
- GitHub Trigger Node: Remove content_reference event.
- Google Sheets Trigger Node: Return actual error message.
- HTTP Request Node: Fix `itemIndex` in HTTP Request errors.
- NocoDB Node: Fix for updating or deleting rows with not default primary keys.
- OpenAI Node: Update models to only show those supported.
- OpenAI Node: Update OpenAI Text Moderate input placeholder text.

[Bram Kn](https://github.com/bramkn)\
[Eddy Hernandez](https://github.com/eddywashere)\
[Filipe Dobreira](https://github.com/filp)\
[Jimw383](https://github.com/Jimw383)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.224.2...n8n@0.224.4) for this version.\
**Release date:** 2023-04-24

This is a bug fix release.

- Core: Upgrade google-timezones-json to use the correct timezone for Sao Paulo.
- Code Node: Update vm2 to address [CVE-2023-30547](https://github.com/advisories/GHSA-ch3r-j5x3-6q2m).

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.224.1...n8n@0.224.2) for this version.\
**Release date:** 2023-04-20

This is a bug fix release.

- Core: Fix paired item returning wrong data.
- Core: Make getExecutionId available on all nodes types.
- Editor: Fix memory leak in Node Detail View by correctly unsubscribing from event buses.
- Editor: Fix moving canvas on middle click preventing lasso selection.
- Editor: Settings sidebar should disconnect from push when navigating away.
- Google Sheets Trigger Node: Return actual error message.
- HTTP Request Node: Fix `itemIndex` in HTTP Request errors.
- Notion Node: Update credential test to not require user permissions.

[Filipe Dobreira](https://github.com/filp)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.224.0...n8n@0.224.1) for this version.\
**Release date:** 2023-04-14

This is a bug fix release.

- Core: Fix broken API permissions in public API.
- Editor: Fix an issue that was preventing typing certain characters in the UI on devices with touchscreen.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.223.0...n8n@0.224.0) for this version.\
**Release date:** 2023-04-12

This release contains a new node, updates, and bug fixes.

This release introduces the [TOTP](../../integrations/builtin/core-nodes/n8n-nodes-base.totp/) node. This is a new core node. It provides a way to generate a TOTP (time-based one-time password) within your workflow.

- Code Node: Update vm2 to address CVE-2023-29017.
- Core: App shouldn't crash with a custom REST endpoint.
- Core: Do not execute workflowExecuteBefore hook when resuming executions from a waiting state.
- Core: Fix issue where sub workflows would display as running forever after failure to start.
- Core: Update xml2js to address CVE-2023-0842.
- Editor: Drop mergeDeep in favor of lodash merge.
- HTTP Request Node: Restore detailed error message.

[Loganaden Velvindron](https://github.com/loganaden)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.222.1...n8n@0.223.0) for this version.\
**Release date:** 2023-04-05

This release contains new features and bug fixes.

Please note that this version contains a breaking change. The minimum Node.js version is now v16. You can read more about it [here](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md#02230).

- Core: Convert `eventBus` controller to decorator style and improve permissions.
- Core: Prevent non owners password reset when SAML is enabled (this is preparation for an upcoming feature).
- Core: Read ephemeral license from environment and clean up `ee` flags.
- Editor: Allow tab to accept completion.
- Editor: Enable saving workflow when node details view is open.
- Editor: SSO onboarding (this is preparation for an upcoming feature).
- Editor: SSO setup (this is preparation for an upcoming feature).

### Node enhancements

- Filter Node: Show discarded items.
- HTTP Request Node: Follow redirects by default.
- Postgres Node: Overhaul node.
- ServiceNow Node: Add support for work notes when updating an incident.
- SSH Node: Hide the private key within the SSH credential.

- Add droppable state for booleans when mapping.
- Compare Datasets Node: Fuzzy comparen't comparing keys missing in one of the inputs.
- Compare Datasets Node: Fix support for dot notation in skip fields.
- Core: Deactivate active workflows during import.
- Core: Stop marking duplicates as circular references in `jsonStringify`.
- Core: Stop using `util.types.isProxy` for tracking of augmented objects.
- Core: Fix curl import error when no data.
- Core: Handle Date and RegExp correctly in `jsonStringify`.
- Core: Handle Date and RegExp objects in `augmentObject`.
- Core: Prevent `augmentObject` from creating infinitely deep proxies.
- Core: Service account private key as a password field.
- Core: Update lock file.
- Core: Waiting workflows not stopping.
- Date & Time Node: Add info box at top of date and time explaining expressions.
- Date & Time Node: Convert Luxon DateTime object to ISO.
- Editor: Add `$if`, `$min`, `$max` to root expression autocomplete.
- Editor: Curb overeager item access linting.
- Editor: Disable Grammarly in expression editors.
- Editor: Disable password reset on desktop with no user management.
- Editor: Fix connection lost hover text not showing.
- Editor: Fix issue preventing execution preview loading when in an Iframe.
- Editor: Fix mapping with special characters.
- Editor: Prevent error from showing-up when duplicating unsaved workflow.
- Editor: Prevent NDV schema view pagination.
- Editor: Support backspacing with modifier key.
- Google Sheets Node: Fix insertOrUpdate cell update with object.
- HTML Extract Node: Support for dot notation in JSON property.
- HTTP Request Node: Fix AWS credentials to stop removing URL parameters for STS.
- HTTP Request Node: Refresh token properly on never fail option.
- HTTP Request Node: Support for dot notation in JSON body.
- LinkedIn Node: Update the version of the API.
- Redis Node: Fix issue with hash set not working as expected.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.222.2...n8n@0.222.3) for this version.\
**Release date:** 2023-04-14

This is a bug fix release.

- Core: Fix broken API permissions in public API.
- Editor: Fix an issue that was preventing typing certain characters in the UI on devices with touchscreen.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.222.1...n8n@0.222.2) for this version.\
**Release date:** 2023-04-11

This is a bug fix release.

- Code node: Update vm2 to address CVE-2023-29017.
- Core: Update xml2js to address CVE-2023-0842.

[Loganaden Velvindron](https://github.com/loganaden)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.222.0...n8n@0.222.1) for this version.\
**Release date:** 2023-04-04

This is a bug fix release.

- AWS SNS Node: Fix an issue with messages failing to send if they contain certain characters.
- Core: `augmentObject` should clone Buffer/Uint8Array instead of wrapping them in a proxy.
- Core: `augmentObject` should use existing property descriptors whenever possible.
- Core: Fix the issue of nodes not loading when run using npx.
- Core: Improve Axios error handling in nodes.
- Core: Password reset should pass in the correct values to external hooks.
- Core: Prevent `augmentObject` from creating infinitely deep proxies.
- Core: Use table-prefixes in queries in import commands.
- Editor: Fix focused state in Code node editor.
- Editor: Fix loading executions in long execution list.
- Editor: Show correct status on canceled executions.
- Gmail Node: Gmail Luxon object support, fix for timestamp.
- HTTP Request Node: Detect mime-type from streaming responses.
- HubSpot Trigger Node: Developer API key is required for webhooks.
- Set Node: Convert string to number.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.221.2...n8n@0.222.0) for this version.\
**Release date:** 2023-03-30

This release contains new features, including custom filters for the executions list, and a new node to filter items in your workflows.

Upgrade directly to 0.222.1.

This release introduces improvements to the execution lists. You can now save [Custom execution data](../../workflows/executions/custom-executions-data/), and use it to filter both the [All executions](../../workflows/executions/all-executions/) and [Single workflow executions](../../workflows/executions/single-workflow-executions/) lists.

- Add test overrides.
- Core: Improve LDAP/SAML toggle and tests.
- Core: Limit user invites when SAML is enabled.
- Core: Make OAuth2 error handling consistent with success handling.
- Editor: Fix ResourceLocator dropdown style.

This release introduces the [Filter](../../integrations/builtin/core-nodes/n8n-nodes-base.filter/) node. The node allows you to filter items based on a condition. If the item meets the condition, the Filter node passes it on to the next node in the Filter node output. If the item doesn't meet the condition, the Filter node omits the item from its output.

- Core: Assign `properties.success` earlier to set `executionStatus` correctly.
- Core: Don't mark duplicates as circular references in `jsonStringify`.
- Core: Don't use `util.types.isProxy` for tracking of augmented objects.
- Core: Ensure that all non-lazy-loaded community nodes get post-processed correctly.
- Core: Force-upgrade decode-uri-component to address CVE-2022-38900.
- Core: Force-upgrade http-cache-semantics to address CVE-2022-25881.
- Core: Handle `Date` and `RegExp` correctly in `jsonStringify`.
- Core: Handle `Date` and `RegExp` objects in `augmentObject`.
- Core: Improve Axios error handling in nodes.
- Core: Improve community nodes loading.
- Core: Initialize queue in the webhook server as well.
- Core: Persist `CurrentAuthenticationMethod` setting change.
- Core: Remove circular references from Code and push message.
- Core: Require authentication on icons and nodes/credentials types static files.
- Core: Return SAML service provider URls with configuration.
- Core: Service account private key should display as a password field.
- Core: Upgrade Luxon to address CVE-2023-22467.
- Core: Upgrade simple-git to address CVE-2022-25912.
- Core: Upgrade SQLite3 to address CVE-2022-43441.
- Core: Upgrade Convict to address CVE-2023-0163.
- Core: Waiting workflows not stopping.
- Editor: Fix connection lost hover text not showing.
- Editor: Fix issue preventing execution preview loading when in an iframe.
- Editor: Use credentials when fetching node and credential types.
- Google Sheets Node: Fix `insertOrUpdate` cell update with object.
- HTTP Request Node: Add streaming to binary response.
- HTTP Request Node: Fix AWS credentials to automatically deconstruct the URL.
- HTTP Request Node: Fix AWS credentials to stop removing URL parameters for STS.
- Split In Batches Node: Roll back changes in v1 and create v2.
- Update PostHog no-capture.

[Manish Dhanwal](https://github.com/ManishDhanwal07)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.221.2...n8n@0.221.3) for this version.\
**Release date:** 2023-04-11

This is a bug fix release.

- Code node: Update vm2 to address CVE-2023-29017.
- Core: Update xml2js to address CVE-2023-0842.

[Loganaden Velvindron](https://github.com/loganaden)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.221.1...n8n@0.221.2) for this version.\
**Release date:** 2023-03-24

This is a bug fix release. It fixes an issue with `properties.success` that was causing `executionStatus` to sometimes be incorrect.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.221.0...n8n@0.221.1) for this version.\
**Release date:** 2023-03-23

This is a bug fix release. It ensures the job queue is initiated before starting the webhook server.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.220.1...n8n@0.221.0) for this version.\
**Release date:** 2023-03-23

- Core: n8n now augments data rather than copying it in the Code node. This is a performance improvement.
- Editor: you can now move the canvas by holding `Space` and dragging with the mouse, or by holding the middle mouse button and dragging.
- Editor: add authentication type recommendations in the credentials modal.
- Editor: add the SSO login button.

This release adds a node for [QuickChart](https://quickchart.io/), an open source chart generation tool.

- Core: ensure n8n calls available error workflows in main mode recovery.
- Core: fix telemetry execution status for manual workflows executions.
- Core: return SAML attributes after connection test.
- Editor: disable mapping tooltip for display modes that don't support mapping.
- Editor: fix execution list item selection.
- Editor: fix for large notifications being cut off.
- Editor: fix redo in code and expression editor.
- Editor: fix the canvas node distance when automatically injecting manual trigger.
- HTTP Request Node: fix AWS credentials to automatically deconstruct the URL.
- Split In Batches Node: roll back changes in v1 and create v2.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.220.0...n8n@0.220.1) for this version.\
**Release date:** 2023-03-22

This is a bug fix release. It reverts changes to version 1 of the Split In Batches node, and creates a version 2 containing the updates.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.219.1...n8n@0.220.0) for this version.\
**Release date:** 2023-03-16

This release adds schema view to the node output panel, and includes node enhancements and bug fixes.

- Core: improve SAML connection test.
- Editor: add basic Datatable and Pagination components.
- Editor: add support for schema view in the NDV output.
- Editor: don't show actions panel for single-action nodes.

### Node enhancements

- Item Lists Node: update actions text.
- OpenAI Node: add support for GPT4 on chat completion.
- Split In Batches Node: make it easier to combine processed data.

- Core: initialize license and LDAP in the correct order.
- Editor: display correct error message for `$env` access.
- Editor: fix autocomplete for complex expressions.
- Editor: fix owner set-up checkbox wording.
- Editor: properly handle mapping of dragged expression if it contains hyphen.
- Metabase Node: fix issue with question results not correctly being returned.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.219.0...n8n@0.219.1) for this version.\
**Release date:** 2023-03-10

This is a bug fix release. It resolves an issue with the HTTP Request node by removing the streaming response.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.218.0...n8n@0.219.0) for this version.\
**Release date:** 2023-03-09

- Core: add `advancedFilters` feature flag.
- Core: add SAML post and test endpoints.
- Core: add SAML XML validation.
- Core: limit user changes when SAML is enabled.
- Core: refactor and add SAML preferences for service provider instance.
- Editor: don't automatically add the manual trigger when the user adds another node.
- Editor: redirect users to canvas if they don't have any workflows.

### Node enhancements

- Cal Trigger Node: update to support v2 webhooks.
- HTTP Request Node: move from binary buffer to binary streaming.
- Mattermost Node: add self signed certificate support.
- Microsoft SQL Node: add support for self signed certificates.
- Mindee Node: add support for v4 API.
- Slack Node: move from binary buffer to binary streaming.

- Core: allow serving icons for custom nodes with npm scoped names.
- Core: rename `advancedFilters` to `advancedExecutionFilters`.
- Editor: fix ElButton overrides.
- Editor: only fetch new versions at app launch.
- Fetch credentials on workflows view to include in duplicated workflows.
- Fix color discrepancies for executions list items.
- OpenAI Node: fix issue with expressions not working with chat complete.
- OpenAI Node: simplify code.

[Syed Ali Shahbaz](https://github.com/alishaz-polymath)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.217.2...n8n@0.218.0) for this version.\
**Release date:** 2023-03-02

This release contains node enhancements, bug fixes, and new features that lay groundwork for upcoming releases, along with some UX improvements.

- Add distribution test tracking.
- Add events to enable onboarding checklist.
- Core: add SAML login setup (for upcoming feature).
- Core: add SAML settings and consolidate LDAP under SSO (for upcoming feature).
- Editor: add missing documentation to autocomplete items for inline code editor.
- Editor: Show parameter hint on multiline inputs.

### Node enhancements

- JIRA node: support binary streaming for very large binary files.
- OpenAI node: add support for ChatGPT.
- Telegram node: add parse mode option to Send Document operation.

- Core: fix execution pruning queries.
- Core: fix filtering workflow by tags.
- Core: revert isPending check on the user entity.
- Fix issues with nodes missing in nodes panel.
- Fix mapping paths when appending to empty expression.
- Item Lists Node: tweak item list summarize field naming.
- Prevent executions from displaying as running forever.
- Show Execute Workflow node in the nodes panel.
- Show RabbitMQ node in the nodes panel.
- Stop showing mapping hint after mapping.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.217.1...n8n@0.217.2) for this version.\
**Release date:** 2023-02-27

This is a bug fix release.

- Core: fix issue with execution pruning queries.
- Core: fix for workflow filtering by tag.
- Core: revert isPending check on the user entity.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.217.0...n8n@0.217.1) for this version.\
**Release date:** 2023-02-24

This is a bug fix release.

Prevent executions appearing to run forever.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.216.1...n8n@0.217.0) for this version.\
**Release date:** 2023-02-23

This release contains new features and bug fixes. It includes improvements to the nodes panel and executions list. It also deprecates the Read Binary File node.

- Add new event hooks to support telemetry around the new onboarding experience.
- Update nodes to set required path type.
- Core: add configurable execution history limit. Use this to improve performance when self-hosting. Refer to [Execution Data | Enable data pruning](../../hosting/scaling/execution-data/#enable-executions-pruning) for more information.
- Core: add execution runData recovery and status field. This allows us to show execution statuses on the **Executions** list.
- Core: add SAML feature flag. This is preparatory for an upcoming feature.
- Editor: improvements to the nodes panel search. When searching in root view, n8n now displays results from both trigger and regular nodes. When searching in a category view, n8n shows results from the category, and also suggests results from other categories.
- Hide sensitive value in authentication header credentials and authentication query credentials.
- Support feature flag evaluation server side.
- Deprecate the Read Binary File node. Use the [Read Binary Files](../../integrations/builtin/core-nodes/n8n-nodes-base.readwritefile/) node instead.

- Baserow Node: fix issue with **Get All** not correctly using filters.
- Compare Datasets Node: UI tweaks and fixes.
- Core: don't allow arbitrary path traversal in BinaryDataManager.
- Core: don't allow arbitrary path traversal in the credential-translation endpoint.
- Core: don't explicitly bypass authentication on URLs containing `.svg`.
- Core: don't remove empty output connections arrays in PurgeInvalidWorkflowConnections migration.
- Core: fix execution status filters.
- Core: user update endpoint should only allow updating email, firstName, and lastName.
- Discord Node: fix wrong error message being displayed.
- Discourse Node: fix issue with credential test not working.
- Editor: apply correct IRunExecutionData to finished workflow.
- Editor: fix an issue with zoom and canvas nodes connections.
- Editor: fix unexpected date rendering on front-end.
- Editor: remove `crashed` status from filter.
- Fix typo in error messages when a property doesn't exist.
- Fixes an issue when saving an active workflow without triggers would cause n8n to be stuck.
- Google Calendar Node: fix incorrect labels for start and end times when getting all events.
- Postgres Node: fix for tables containing field named JSON.
- AWS S3 Node: fix issue with get many buckets not outputting data.

The steps to update your n8n depend on which n8n platform you use. Refer to the documentation for your n8n:

- [Cloud](../../manage-cloud/update-cloud-version/)
- Self-hosted options:
  - [npm](../../hosting/installation/npm/)
  - [Docker](../../hosting/installation/docker/)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.216.2...n8n@0.216.3) for this version.\
**Release date:** 2023-03-09

This is a bug fix release. It reverts the `isPending` check on the user entity, resolving an issue with displaying user options when user management is disabled.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.216.1...n8n@0.216.2) for this version.\
**Release date:** 2023-02-23

This is a bug fix release.

Core: don't remove empty output connections arrays in PurgeInvalidWorkflowConnections migration.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.215.3...n8n@0.215.4) for this version.\
**Release date:** 2023-03-14

This is a bug fix release. It reverts the `isPending` check on the user entity, resolving an issue with displaying user options when user management is disabled.

The steps to update your n8n depend on which n8n platform you use. Refer to the documentation for your n8n:

- [Cloud](../../manage-cloud/update-cloud-version/)
- Self-hosted options:
  - [npm](../../hosting/installation/npm/)
  - [Docker](../../hosting/installation/docker/)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.215.2...n8n@0.215.3) for this version.\
**Release date:** 2023-02-23

This is a bug fix release. It contains an important security fix.

- Core: don't allow arbitrary path traversal in BinaryDataManager.
- Core: don't allow arbitrary path traversal in the credential-translation endpoint.
- Core: don't explicitly bypass authentication on URLs containing `.svg`.
- Core: don't remove empty output connections arrays in PurgeInvalidWorkflowConnections migration.
- Core: the user update endpoint should only allow updating email, first name, and last name.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.214.4...n8n@0.214.5) for this version.\
**Release date:** 2023-03-14

This is a bug fix release. It reverts the `isPending` check on the user entity, resolving an issue with displaying user options when user management is disabled.

The steps to update your n8n depend on which n8n platform you use. Refer to the documentation for your n8n:

- [Cloud](../../manage-cloud/update-cloud-version/)
- Self-hosted options:
  - [npm](../../hosting/installation/npm/)
  - [Docker](../../hosting/installation/docker/)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.214.3...n8n@0.214.4) for this version.\
**Release date:** 2023-02-23

This is a bug fix release. It contains an important security fix.

- Core: don't allow arbitrary path traversal in BinaryDataManager.
- Core: don't allow arbitrary path traversal in the credential-translation endpoint.
- Core: don't explicitly bypass authentication on URLs containing `.svg`.
- Core: don't remove empty output connections arrays in PurgeInvalidWorkflowConnections migration.
- Core: the user update endpoint should only allow updating email, first name, and last name.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.216.0...n8n@0.216.1) for this version.\
**Release date:** 2023-02-21

This is a bug fix release.

- Core: don't allow arbitrary path traversal in BinaryDataManager.
- Core: don't allow arbitrary path traversal in the credential-translation endpoint.
- Core: don't explicitly bypass auth on URLs containing `.svg`.
- Core: user update endpoint should only allow updating email, firstName, and lastName.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.215.2...n8n@0.216.0) for this version.\
**Release date:** 2023-02-16

This release contains new features, node enhancements, and bug fixes.

- Add workflow and credential sharing access e2e tests.
- Editor: add correct credential owner contact details for readonly credentials.
- Editor: add most important native properties and methods to autocomplete.
- Editor: update to personalization survey v4.
- Update telemetry API endpoints.

### Node enhancements

- GitHub node: update code to use resource locator component.
- GitHub Trigger node: update code to use resource locator component.
- Notion node: add option to set icons when creating pages or database pages.
- Slack node: add support for manually inputting a channel name for channel operations.

- Core: fix data transformation functions.
- Core: remove unnecessary info from GET `/workflows` response.
- Bubble node: fix pagination issue when returning all objects.
- HTTP Request Node: ignore empty body when auto-detecting JSON.

[feelgood-interface](https://github.com/feelgood-interface)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.215.1...n8n@0.215.2) for this version.\
**Release date:** 2023-02-14

This is a bug fix release. It solves an issue that was causing webhooks to be removed when they shouldn't be.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.215.0...n8n@0.215.1) for this version.\
**Release date:** 2023-02-11

This is a bug fix release.

- Core: fix issue causing worker and webhook service to close on start.
- Core: handle versioned custom nodes correctly.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.214.3...n8n@0.215.0) for this version.\
**Release date:** 2023-02-10

This release contains new features, node enhancements, and bug fixes.

- Refactor the n8n Desktop user management experience.
- Core: add support for WebSockets as an alternative to server-sent events. This introduces a new way for n8n's backend to push changes to the UI. The default is still server-sent events. If you're experiencing issues with the UI not updating, try changing to WebSockets by setting the `N8N_PUSH_BACKEND` environment variable to `websocket`.
- Editor: add autocomplete for objects.
- Editor: add autocomplete for expressions to the HTML editor component.

### Node enhancements

- Edit Image node: add support for WebP image format.
- HubSpot Trigger node: add conversation events.

- Core: disable transactions on SQLite migrations that use PRAGMA foreign_keys.
- Core: ensure expression extension doesn't fail with optional chaining.
- Core: fix import command for workflows with old format (affects workflows created before user management was introduced).
- Core: stop copying icons to cache.
- Editor: prevent creation of input connections for nodes without input slot.
- Error workflow now correctly checks for subworkflow permissions.
- ActiveCampaign Node: fix additional fields not being sent when updating account contacts.
- Linear Node: fix issue with Issue States not loading correctly.
- MySQL migration parses database contents if necessary (fix for MariaDB).

[Kirill](https://github.com/chrtkv)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.214.2...n8n@0.214.3) for this version.\
**Release date:** 2023-02-09

This is a bug fix release.

Editor: prevent creation of input connections for nodes without input slot.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.214.1...n8n@0.214.2) for this version.\
**Release date:** 2023-02-06

This is a bug fix release.

- Editor: correctly show OAuth reconnect button.
- Editor: fix resolvable highlighting for HTML editor.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.214.0...n8n@0.214.1) for this version.\
**Release date:** 2023-02-06

This is a bug fix release. It also contains an overhaul of the Slack node.

### Node enhancements

This release includes an overhaul of the Slack node, adding new operations and a better user interface.

- Editor: fix an issue with mapping to empty expression input.
- Editor: fix merge node connectors.
- Editor: fix multiple-output endpoints success style after connection is detached.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.213.0...n8n@0.214.0) for this version.\
**Release date:** 2023-02-03

This release contains new features, node enhancements, and bug fixes. The expressions editor now supports autocomplete for some [built in data transformation functions](../../code/builtin/data-transformation-functions/). The new features also include two of interest to node builders: a way to allow users to drag and drop data keys, and the new HTML editor component.

Please note that this version contains a breaking change to Luxon. You can read more about it [here](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md#02140).

#### Autocomplete in the Extension editor

[Data transformation functions](../../code/builtin/data-transformation-functions/) now have autocomplete support in the Expression editor.

- Core: export OpenAPI spec for external tools.
- Core: set custom Cache-Control headers for static assets.
- Core: simplify pagination in declarative node design.
- Editor: support mapping keys with drag and drop. Any field with the hint **Enter the field name as text** should now support mapping a data key using drag and drop. Node builders can enable this in their own nodes. Refer to [Creating nodes | UI elements](../../integrations/creating-nodes/build/reference/ui-elements/#support-drag-and-drop-for-data-keys) for more information.
- Editor: add the [HTML editor component](../../integrations/creating-nodes/build/reference/ui-elements/#html) for use in parameters. This means node builders can now use the HTML editor that n8n uses in the HTML node as a UI component.
- Editor: append expressions in fixed values when mapping to string and JSON inputs.
- Editor: continue to show mapping tooltip after dismiss.
- Editor: roll out schema view.

### Node enhancements

- FTP Node: stream binary data for uploads and downloads.
- Notion Node: add support for image blocks.
- OpenAI Node: add **Frequency Penalty** and **Presence Penalty** to the node options for the text resource.
- Salesforce Node: add **Has Opted Out Of Email** field to lead resource options.
- SSH Node: stream binary data for uploads and downloads.
- Write Binary File Node: stream binary data for writes.
- YouTube Node: switch upload operation over to streaming and resumable uploads API.

- Add paired item to the most used nodes.
- Core: fix OAuth2 client credentials not always working.
- Core: fix populating of node custom API call options.
- Core: fix value resolution in declarative node design.
- Core: prevent shared user details being saved alongside execution data.
- Core: revert custom API option injecting.
- Editor: add SMTP info translation link slot.
- Editor: change executions title to match menu.
- Editor: fix JSON field completions while typing.
- Editor: handling router errors when navigation is canceled by user.
- Editor: set max width for executions list.
- Editor: stop unsaved changes popup display when navigating away from an untouched workflow.
- Editor: fix workflow executions view.
- Invoice Ninja Node: fix line items not being correctly set for quotes and invoices.
- Linear Node: fix pagination issue for get all issues.
- Mailchimp Trigger Node: fix webhook recreation.
- Prevent unnecessarily touching `updatedAt` when n8n starts.
- Schedule Trigger Node: change scheduler behaviour for intervals days and hours.
- Set Node: fix behaviour when selecting `continueOnFail` and `pairedItem`.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.212.1...n8n@0.213.0) for this version.\
**Release date:** 2023-01-27

This release introduces LDAP, and a new node for working with HTML in n8n. It also contains node enhancements and bug fixes.

This release introduces support for LDAP on Self-hosted Enterprise and Cloud Enterprise plans. Refer to [LDAP](../../user-management/ldap/) for more information on this feature.

- Simplify the Node Details View by moving authentication details to the Credentials modal.
- Improve workflow list performance.

n8n has a new [HTML node](../../integrations/builtin/core-nodes/n8n-nodes-base.html/). This replaces the HTML Extract node, and adds new functionality to generate HTML templates.

### Node enhancements

- GitLab node: add file resource and operations.
- JIRA Software node: introduce the resource locator component to improve UX.
- Send Email node: this node has been overhauled.

- Core: don't crash express app on unhandled rejected promises.
- Core: handle missing binary metadata in download URLs.
- Core: upsert (update and insert) credentials and workflows in the `import:` commands.
- Core: validate numeric IDs in the public API.
- Editor: don't request workflow data twice when opening a workflow.
- Editor: execution list micro optimization.
- Editor: fix node authentication options ordering and hiding options based on node version.
- Editor: fix save modal appearing after duplicating a workflow.
- Editor: prevent workflow execution list infinite no network error.
- Extension being too eager and making calls when it shouldn't.
- Google Drive Node: use the correct MIME type on converted downloads.
- HelpScout Node: fix tag search not working when getting all conversations.
- Notion (Beta) Node: fix create database page with multiple relation IDs not working.
- Update **Sign in with Google** button to properly match design guidelines.

- [Devin Buhl](https://github.com/onedr0p)
- [Sven Ziegler](https://github.com/svzi)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.212.0...n8n@0.212.1) for this version.\
**Release date:** 2023-01-23

This release includes an overhaul of the Google Analytics node, and bug fixes.

### Node enhancements

This release includes an overhaul of the Google Analytics node. This brings the node's code and components in line with n8n's latest node building styles, and adds support for GA4 properties.

- Add schema to Postgres migrations.
- Core: fix execute-once incoming data handling.
- Core: fix expression extension miss-detection.
- Core: fix onWorkflowPostExecute not being called.
- Core: fix URL in error handling for the error Trigger.
- Core: make pinned data with webhook responding on last node manual-only.
- Editor: making parameter input components label configurable.
- Editor: remove infinite loading in not found workflow level execution.
- Linear Node: fix issue with single item not being returned.
- Notion (Beta) Node: fix create database page fails if relation parameter is empty/undefined.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.211.2...n8n@0.212.0) for this version.\
**Release date:** 2023-01-19

This release contains enhancements to the Item Lists node, and bug fixes.

This release adds experimental support for more Prometheus metrics. Self-hosting users can configure Prometheus using [environment variables](../../hosting/configuration/environment-variables/).

### Node enhancements

The Item Lists node now supports a Summarize operation. This acts similarly to generating pivot tables in Excel, allowing you to aggregate and compare data.

- Core: revert a lint rule `@typescript-eslint/prefer-nullish-coalescing`.
- Editor: allow special characters in node selector completion.
- GitLab Node: update the credential test endpoint.
- Gmail Trigger Node: resolve an issue that was preventing filter by labels from working.
- HTTP Request Node: ensure node enforces the requirement for valid JSON input.
- HTTP Request Node: convert responses to text for all formats, including JSON.

[Sven Ziegler](https://github.com/svzi)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.211.1...n8n@0.211.2) for this version.\
**Release date:** 2023-01-17

This release contains a bug fix for community nodes, and a new trigger node.

#### Google Sheets Trigger node

This release adds a new [Google Sheets Trigger node](../../integrations/builtin/trigger-nodes/n8n-nodes-base.googlesheetstrigger/). You can now start workflows in response to row changes or new rows in a Google Sheet.

Fixes an issue that was preventing users from installing community nodes.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.211.0...n8n@0.211.1) for this version.\
**Release date:** 2023-01-16

This is a bug fix release. It resolves major issues with 0.211.0.

Editor: suppress validation errors for freshly added nodes.

### Node enhancements

- Google Ads node: update the API version to 11.
- Google Drive Trigger node: start using the resource locator component.

- Build CLI to fix Postgres and MySQL test runs.
- Extend date functions clobbering plus/minus.
- Extension deep comparen't quite working for some primitives.
- Upgrade jsonwebtoken to address CVE-2022-23540.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.210.2...n8n@0.211.0) for this version.\
**Release date:** 2023-01-13

Don't use this version

Upgrade directly to 0.211.1.

- Add demo experiment to help users activate.
- Editor: Improvements to the **Executions** page.
- Editor: Remove prevent-ndv-auto-open feature flag.
- Editor: Update callout component design.
- Add the expression extension framework.

- Core: Fixes event message confirmations if no subscribers present.
- Core: Remove threads package, rewrite log writer worker.
- Core: Throw error in UI on expression referencing missing node but don't fail execution.
- DB revert command shouldn't run full migrations before each revert.
- Editor: Disable data pinning on multiple output node types.
- Editor: Don't overwrite `window.onerror` in production.
- Editor: Execution page bug fixes.
- Editor: Fixes event bus test.
- Editor: Hide data pinning discoverability tooltip in execution view.
- Editor: Mapping tooltip dismiss.
- Editor: Recover from unsaved finished execution.
- Editor: Setting NDV session ID.
- First/last being extended on proxy objects.
- Handle memory issues gracefully.
- PayPal Trigger Node: Omit verification in sandbox environment.
- Report app startup and database migration errors to Sentry.
- Run every database migration inside a transaction.
- Upgrade class-validator to address CVE-2019-18413.
- Zoom Node: Add notice about deprecation of Zoom JWT app support.

You may encounter errors when using the [optional chaining operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) in expressions. If this happens, avoid using the operator for now.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.210.1...n8n@0.210.2) for this version.\
**Release date:** 2023-01-09

#### Typeahead for expressions

When using [expressions](../../code/expressions/), n8n will now offer you suggestions as you type.

- Core: fix crash of manual workflow executions for unsaved workflows.
- Editor: omit pairedItem from proxy completions.
- Editor: prevent refresh on submit in credential edit modal.
- Google Sheets Node: fix for auto-range detection.
- Read Binary File Node: don't crash the execution when the source file doesn't exist.
- Remove anonymous ID from tracking calls.
- Stop OOM crashes in Execution Data pruning.
- Update links for user management and SMTP help.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.210.0...n8n@0.210.1) for this version.\
**Release date:** 2023-01-05

This is a bug fix release. It also contains a new feature to support user management without SMTP set up.

#### Invite link for users on self-hosted n8n

In earlier versions of self-hosted n8n, you needed SMTP set up on your n8n instance for user management to work. User management required SMTP to sent invitation emails.

0.210.1 introduces an invite link, which you can copy and send to users manually. n8n still recommends setting up SMTP, as this is needed for password resets.

- Google Sheets node: fix an issue that was causing append and update operations to fail for numeric values.
- Resolve issues with external hooks.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.209.4...n8n@0.210.0) for this version.\
**Release date:** 2023-01-05

This release introduces two major new features: log streaming and security audits. It also contains node enhancements, bug fixes, and performance improvements.

This release introduces [log streaming](../../log-streaming/) for users on Enterprise self-hosted plans and custom Cloud plans. Log streaming allows you to send events from n8n to your own logging tools. This allows you to manage your n8n monitoring in your own alerting and logging processes.

This release adds a [security audit](../../hosting/securing/security-audit/) feature. You can now run a security audit on your n8n instance, to detect common security issues.

- Core: add support for Redis 6+ ACLs system using username in queue mode. Add the `QUEUE_BULL_REDIS_USERNAME` environment variable.

### Node enhancements

- Compare Datasets node: add an option for fuzzy compare.

- Apply credential overwrites recursively. This ensures that overwrites defined for a parent credential type also apply to all credentials extending it.
- Core: enable full manual execution of a workflow using the error trigger.
- Core: fix OAuth credential creation using the API.
- Core: fix an issue with workflow lastUpdated field.
- Editor: clear node creator and scrim on workspace reset.
- Editor: fix an infinite loop while loading executions that aren't on the current executions list.
- Editor: make node title non-editable in executions view.
- Editor: prevent scrim on executable triggers.
- Editor: support tabbing away from inline expression editor.
- Fix executions bulk deletion.
- Google Sheets Node: fix exception when no **Values to Send** are set.
- Respond to Webhook Node: fix issue that caused the content-type header to be overwritten.
- Slack Node: add missing channels:read OAuth2 scope.

### Performance improvements

- Lazy-load public API dependencies to reduce baseline memory usage.
- Lazy-load queue mode and analytics dependencies.

[Thomas S.](https://github.com/intel44)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.209.3...n8n@0.209.4) for this version.\
**Release date:** 2022-12-28

This is primarily a bug fix release.

- Editor: add sticky note without manual trigger.
- Editor: display default missing value in table view as undefined.
- Editor: fix displaying of some trigger nodes in the creator panel.
- Editor: fix trigger node type identification on add to canvas.
- Editor: add the usage and plans page to Desktop.

Editor: pressing **=** in an empty parameter input switches to expression mode.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.209.2...n8n@0.209.3) for this version.\
**Release date:** 2022-12-27

This is primarily a bug fix release.

- Core: don't send credentials to browser console.
- Core: permit a workflow user who isn't the owner to use their own credentials.
- Editor: fix for loading executions that aren't on the current executions list.
- Editor: make the tertiary button on the **Usage** page transparent.
- Editor: update credential owner warning when sharing.

Editor: Improve UX for brace completion in the inline expressions editor.

### Node enhancements

Webhook node: when test the node by selecting **Listen For Test Event** then dispatching a call to the webhook, n8n now only runs the Webhook node. Previously, n8n ran the entire workflow. You can still test the full workflow by selecting **Execute Workflow**, then dispatching a test call.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.209.1...n8n@0.209.2) for this version.\
**Release date:** 2022-12-23

This is a bug fix release.

- Editor: ensure full tree on expression editor parse. This resolves an issue with the expressions editor cutting off results.
- Fix automatic credential selection when credentials are shared.

### Performance improvements

Improvements to the workflows list performance.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.209.0...n8n@0.209.1) for this version.\
**Release date:** 2022-12-22

This is a bug fix release.

- Editor: fix for executions preview scroll load bug and wrong execution being displayed.
- Editor: force parse on long expressions.
- Editor: restore trigger to the nodes panel.
- Nodes: AWS DynamoDB Node Fix issue pagination and simplify issue.
- Nodes: fix DynamoDB node type issues.
- Resolve an issue with credentials and workflows not being matched correctly due to incorrect typing.
- Restore missing tags when retrieving a workflow.

[Nathan Apter](https://github.com/napter)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.208.1...n8n@0.209.0) for this version.\
**Release date:** 2022-12-21

This release introduces workflow sharing, and changes to licensing and payment plans.

#### Workflow sharing

This release introduces workflow sharing for users on some plans. With workflow sharing, users can invite other users on the same n8n instance to use and edit their workflows. Refer to [Workflow sharing](../../workflows/sharing/) for details.

- Editor: Correctly display trigger nodes without actions and with related regular node in the "On App Events" category.
- Fix stickies resize.
- Hide trigger tooltip for nodes with static test output.
- Keep expression when dropping mapped value.
- Prevent keyboard shortcuts in expression editor modal.
- Redirect home to workflows always.
- Update mapping GIFs.
- Upgrade amqplib to address CVE-2022-0686.
- View option for binary-data shouldn't download the file on Chrome/Edge.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.208.0...n8n@0.208.1) for this version.\
**Release date:** 2022-12-19

This is a bug fix release.

- Always retain original errors in the error chain on NodeOperationError.
- BinaryDataManager should store metadata when saving from buffer.
- Editor: fix for wrong execution data displayed in executions preview.
- Pick up credential test functions from versioned nodes.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.207.1...n8n@0.208.0) for this version.\
**Release date:** 2022-12-16

This release introduces a new inline expressions editor, and a new node: OpenAI. It also contains updates and bug fixes.

#### Inline expression editor

You can now quickly write expressions inline in a node parameter. You can still choose to open the full expressions editor.

- Add workflow sharing telemetry.
- Core: allow for hiding page usage with environment variables (for upcoming feature)
- Editor: update UI copy for user management setup when sharing is disabled.
- Editor: hide credentials password values.
- Editor: set **All workflows** view as default view on the **Workflows** page.
- Editor: update UI copy for workflow overwriting message.

This release adds an integration with OpenAI. Refer to the [OpenAI node documentation](../../integrations/builtin/app-nodes/n8n-nodes-langchain.openai/) for details.

### Node enhancements

Send Email node: add support for a "Reply to" email address.

- Core: fix for Google and Microsoft generic OAuth2 credentials.
- Core: fix HTTP Digest Auth for responses without an opaque parameter.
- Disqus node: fix thread parameter for "Get All Threads" operation.
- Don't crash the server when Telemetry is blocked using DNS.
- Editor: allow mapping onto expression editor with selection range.
- Editor: don't show actions dialog for actionless triggers when selected using keyboard.
- Editor: fix an issue where some node actions wouldn't select default parameters correctly.
- Editor: fix typo in retry-button option "Retry with original workflow".
- Update permission for showing workflow caller policy.
- Update pnpm-lock to fix build.

[Daemonxiao](https://github.com/Daemonxiao)\
[Kirill](https://github.com/kirill-chertkov)\
[Ricardo Duarte](https://github.com/rduarte)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.207.0...n8n@0.207.1) for this version.\
**Release date:** 2022-12-13

This is a bug fix release. It resolves an issue with undo.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.206.1...n8n@0.207.0) for this version.\
**Release date:** 2022-12-12

This release adds support for undo/redo actions on the canvas, and includes bug fixes.

You can now undo and redo actions on the canvas.

Use `ctrl`/`cmd` + `z` to undo, `ctrl`/`cmd` + `shift` + `z` to redo.

Currently, n8n supports undo/redo for the following canvas actions:

- Deleting connections

- Import workflow (from file/from URL)

- Disabling/enabling nodes

- App integration actions are now displayed in the nodes pane.

- Add sharing permissions info for workflow sharees.

- Handle sharing features when the user skips instance owner setup.

- Update the credential test error message for credential sharees.

- Core: remove nodeGetter.
- Core: Increase workflow reactivation max timeout to one day.
- Core: Resolve an issue listing executions with Postgres.
- Core: Remove foreign credentials when copying nodes or duplicating workflow.
- Core: upgrade sse-channel to mitigate CVE-2019-10744.
- Core: use license-sdk v1.6.1.
- Editor: avoid adding Manual Trigger node when webhook node is added.
- Editor: fix credential sharing issues handler when no matching ID or name.
- Editor: fix for broken tab navigation.
- Editor: schema view shows checkbox in case of empty data.
- Editor: Stop returning UNKNOWN ERROR in the response if an actual error message is available.
- Editor: update duplicate workflow action.
- Move Binary Data Node: stringify objects before encoding them in MoveBinaryData.
- Split In Batches Node: fix issue with pairedItem.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.206.0...n8n@0.206.1) for this version.\
**Release date:** 2022-12-06

This is a bug fix release.

- Core: make expression resolution improvements.
- Editor: schema unit test stub for Font Awesome icons.
- Remove unnecessary console message.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.205.0...n8n@0.206.0) for this version.\
**Release date:** 2022-12-06

This release contains bug fixes, node enhancements, and a new node input view: schema view.

Schema view is a new node input view. It helps you browse the structure of your data, using the first input item.

- Core: add workflow execution statistics.
- Editor: add the alert design system component.
- Editor: fix checkbox line hight and make checkbox label clickable.
- Nodes: add a message for read-only nodes.
- Nodes: add a prompt to overwrite changes when concurrent editing occurs.

### Node enhancements

KoBo Toolbox node: add support for the media file API.

- Core: fix linter error.
- Core: fix partial execution with pinned data on child node run.
- Core: OAuth2 scopes now save.
- Enable source-maps on WorkflowRunnerProcess in own mode.
- Handle error when workflow doesn'texist or is inaccessible.
- Make nodes.exclude and nodes.include work with lazy-loaded nodes.
- Code Node: restore `pairedItem` to required n8n item keys.
- Execute Workflow Node: update Execute Workflow node info notice text.
- Gmail Trigger Node: trigger node missing some emails.
- Local File Trigger Node: fix issue that causes a crash if the ignore field is empty.

[Marcel](https://github.com/marzn)\
[Yann Jouanique](https://github.com/Yann-J)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.204.0...n8n@0.205.0) for this version.\
**Release date:** 2022-12-02

This release contains an overhaul of the expressions editor, node enhancements, and bug fixes.

#### Expressions editor usability overhaul

This release contains usability enhancements for the expressions editor. The editor now includes color signals to indicate when syntax is valid or invalid, and better error messages and tips.

### Node enhancements

- Facebook Graph APInode: update to support API version 15.
- Google Calendar node: introduce the resource locator component to help users retrieve calendar parameters.
- Postmark Trigger node: update credentials so they can be used with the HTTP Request node (for custom API calls).
- Todoist node: update to use API version 2.

- Core: ensure executions list is properly filtered for all users.
- Core: fix `$items().length` in Execute Once mode.
- Core: mark binary data to be deleted when pruning executions.
- Core: OAuth2 scope saved to database fix.
- Editor: fix slots rendering of NodeCreator's NoResults component.
- Editor: JSON view values can be mapped like keys.
- AWS SNS Node: fix a pagination issue.
- Google Sheets Node: fix exception if no matching rows are found.
- Google Sheets Node: fix for append operation if no empty rows in sheet.
- Microsoft Outlook Node: fix binary attachment upload.
- Pipedrive Node: resolve properties not working.
- Lazy load nodes for credentials testing.
- Credential overwrites should take precedence over credential default values.
- Remove background for resource ownership selector.
- Update padding for resource filters dropdown.
- Update size of select components in filters dropdown.
- Update workflow save button type and design and share button type.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.203.1...n8n@0.204.0) for this version.\
**Release date:** 2022-11-24

This release contains performance enhancements and bug fixes.

- Core: lazy-load nodes and credentials to reduce baseline memory usage.
- Core: use longer stack traces when error reporting is enabled.
- Dev: add credentials E2E test suite and page object.

- Core: fix $items().length behavior in executeOnce mode.
- Core: fix for unused imports.
- Core: use CredentialsOverwrites when testing credentials.
- Core: disable workflow locking due to issues.
- Editor: fix for missing node connections in dev environment.
- Editor: fix missing resource locator component.
- Editor: prevent node-creator tabs from showing when toggled by CanvasAddButton.
- Editor: table view column limit tooltip.
- Editor: fix broken n8n-info-tip slots.
- IF Node: fix "Is Empty" and "Is Not Empty" operation failures for date objects.
- Remove redundant `await` in nodes API request functions without try/catch.
- Schedule Trigger Node: fixes inconsistent behavior with cron and weekly intervals.
- Workflow activation shouldn't crash if one of the credential is invalid.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.203.0...n8n@0.203.1) for this version.\
**Release date:** 2022-11-18

This is a bug fix release. It resolves an issue with the Google Sheets node versioning.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.202.1...n8n@0.203.0) for this version.\
**Release date:** 2022-11-17

This release includes an overhaul of the Google Sheets node, as well as other new features, node enhancements, and bug fixes.

- Add duplicate workflow error handler.
- Add workflow data reset action.
- Add credential runtime checks and prevent tampering during a manual run.

### Node enhancements

- Compare Datasets: UI copy changes to improve usability.
- Google Sheets: n8n has overhauled this node, including improved lookup for document and sheet selection.
- Notion (beta) node: use the resource locator component for database and page parameters.

- Core: deduplicate error handling in nodes.
- Editor: show back mapping hint when parameter is focused.
- Editor: add **Stop execution** button to execution preview.
- Editor: curb direct item access linting.
- Editor: fix expression editor variable selector filter.
- Editor: fix for execution retry dropdown not closing.
- Editor: fix for logging error on user logout.
- Editor: fix zero treated as missing value in resource locator.
- Editor: hide pin data in production executions.
- Editor: skip optional chaining operators in Code Node editor linting.
- Editor: update to **Expression/Fixed** toggle - keep expression when switching to **Fixed**.
- Editor: fix foreign credentials being shown for new nodes.
- Editor: store copy of workflow in `workflowsById` to prevent node data bugs.
- Editor: fix user redirect to signin bug.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.202.0...n8n@0.202.1) for this version.\
**Release date:** 2022-11-10

This is a bug fix release. It removes some error tracking.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.201.0...n8n@0.202.0) for this version.\
**Release date:** 2022-11-10

This release contains core product improvements and bug fixes.

- API: report unhandled app crashes using Sentry.
- API: set up error tracking using Sentry.
- Core: Add ownership, sharing and credential details to `GET /workflows` in n8n's internal API.
- Editor: when building nodes, you can now add a property with type `notice` to your credentials `properties`.This was previously available in nodes but not credentials. Refer to [Node UI elements](../../integrations/creating-nodes/build/reference/ui-elements/) for more information.

- API: Don't use names for type ORM connections.
- Core: Fix manual execution of pinned trigger on main mode.
- Core: Streamline multiple pinned triggers behavior.
- Editor: Curb argument linting for `$input.first()` and `$input.last()`
- Editor: Fix duplicate bug when new workflow is open.
- Editor: Fix for incorrect execution saving indicator in executions view.
- Editor: Fix for OAuth authorization.
- Editor: Fix workflow activation from the Workflows view.
- Editor: Fix workflow back button navigation.
- Editor: Prevent adding of the start node when importing workflow in the demo mode.
- Editor: Show string numbers and null properly in JSON view.
- Editor: Switch CodeNodeEditor linter parser to esprima-next.
- Editor: Tweak dragged mapping state.
- Editor: Update workflow buttons spacings.
- Editor: Use base path in workflow preview component URL.
- HTTP Request Node: Show error cause in the output.
- HTTP Request Node: Use the data in **Put Output in Field** field.
- HubSpot Node: Add notice to HubSpot credentials about API Key Sunset.
- Notion Trigger (Beta) Node: Fix Notion trigger polling strategy.
- Raindrop Node: Update access token URL.
- SendInBlue Trigger Node: Fix typo in credential name.
- Update E2E testing ENV variables.

[feelgood-interface](https://github.com/feelgood-interface)\
[Ugo Bataillard](https://github.com/knshiro)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.200.1...n8n@0.201.0) for this version.\
**Release date:** 2022-11-02

This release contains workflow and node enhancements, and bug fixes.

- Core: reimplement blocking workflow updates on interim changes.
- Editor: block the UI in node details view when the workflow is listening for an event.
- Performance improvements

### Node enhancements

Venafi TLS Protect Cloud node: make issuing template depend on application.

- Core: fix wokflow hashing for MySQL.
- Core: make `deepCopy` backward compatible.
- Editor: ensure `displayOptions` received the value from the resource locator component.
- Editor: disable the settings link in executions view for unsaved workflows.
- Editor: ensure forms reliably save.
- Editor: fix issues with interim updates in executions view.
- Editor: fix for node creator search.
- Editor: limit columns in table view to prevent the UI becoming unresponsive in the node details view.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.200.0...n8n@0.200.1) for this version.\
**Release date:** 2022-10-28

This is a bug fix release.

- API: do not reset the auth cookie on every request to GET `/login`.
- AWS SNS Trigger node: add missing jsonParse import.
- Core: avoid callstack with circular dependencies.
- Editor: resolve issues with the executions list auto-refresh, and with saving new workflows.
- Editor: redirect the outdated `/workflow` path.
- Editor: remove a filter that prevented display of running executions.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.199.0...n8n@0.200.0) for this version.\
**Release date:** 2022-10-27

This release contains improvements to the editor, node enhancements and bug fixes.

- Core, editor: introduce workflow caller policy.
- Core: block workflow update on interim change.
- Editor: add a read-only state for nodes.
- Editor: add execution previews using the new **Executions** tab in the node view.
- Editor: improvements to node panel search.

### Node enhancements

- Airtable Trigger node: add the resource locator component.
- HTTP Request node: add options for raw JSON headers and queries.
- InvoiceNinja node: add support for V5.
- Write Binary File node: add option to append to a file.

- API: validate executions and workflow filter parameters.
- Core: amend typing for `jsonParse()` options.
- Core: fix `predefinedCredentialType` in node graph item.
- Core: fix canvas node execution skipping parent nodes.
- Core: fix single node execution failing in `main` mode.
- Core: set JWT authentication token `sameSite` policy to `lax`.
- Core: update to imports in helpers.
- Editor: curb item method linting in single-item mode.
- Editor: stop rendering expressions as HTML.
- Email Trigger node: backport V2 mark-seen-after processing to V1.
- Email Trigger node: improve connection handling and credentials.
- HTTP Request node: fix sending previously selected credentials.
- TheHive node: small fixes.

[Bram Kn](https://github.com/bramkn)\
[Nicholas Penree](https://github.com/drudge)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.198.2...n8n@0.199.0) for this version.\
**Release date:** 2022-10-21

This release includes new nodes, an improved workflow UI, performance improvements, and bug fixes.

#### New workflow experience

This release brings a collection of UI changes, aimed at improving the workflow experience for users. This includes:

- Removing the Start node, and adding help to guide users to find a trigger node.

- Improved node search.

- New nodes: Manual Trigger and Execute Workflow Trigger.

- Core: block workflow updates on interim changes.

- Core: enable sending client credentials in the body of API calls.

- Editor: add automatic credential selection for new nodes.

The Compare Datasets node helps you compare data from two input streams. You can find documentation for the new node [here](../../integrations/builtin/core-nodes/n8n-nodes-base.comparedatasets/).

#### Execute Workflow Trigger node

The Execute Workflow Trigger starts a workflow in response to another workflow. You can find documentation for the new node [here](../../integrations/builtin/core-nodes/n8n-nodes-base.executeworkflowtrigger/).

#### Manual Trigger node

The Manual Trigger allows you to start a workflow by clicking **Execute Workflow**, without any option to run it automatically. You can find documentation for the new node [here](../../integrations/builtin/core-nodes/n8n-nodes-base.manualworkflowtrigger/).

#### Schedule Trigger node

This release introduces the Schedule Trigger node, replacing the Cron node. You can find documentation for the new node [here](../../integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger/).

### Node enhancements

- HubSpot node: you can now use your HubSpot credentials in the HTTP Request node to make a [custom API call](../../integrations/custom-operations/).
- Rundeck node: you can now use your Rundeck credentials in the HTTP Request node to make a [custom API call](../../integrations/custom-operations/).

- Editor: fix a hover bug in the bottom menu.
- Editor: resolve performance issues when opening a node, or editing a code node, with a large amount of data.
- Editor: ensure workflows always stop when clicking the stop button.
- Editor: fix a bug that was causing text highlighting when mapping data in Firefox.
- Editor: ensure correct linting in the Code node editor.
- Editor: handle null values in table view.
- Elasticsearch node: fix a pagination issue.
- Google Drive node: fix typo.
- HTTP Request node: avoid errors when a response doesn't provide a content type.
- n8n node: fix a bug that was preventing the resource locator component from returning all items.

[AndLLA](https://github.com/AndLLA)\
[Nicholas Penree](https://github.com/drudge)\
[vcrwr](https://github.com/vcrwr)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.198.1...n8n@0.198.2) for this version.\
**Release date:** 2022-10-14

This release fixes a bug affecting scrolling through parameter lists.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.198.0...n8n@0.198.1) for this version.\
**Release date:** 2022-10-14

This is a bug fix release.

- Editor: change the initial position of the Start node.
- Editor: align JSON view properties with their values.
- Editor: fix `BASE_PATH` for Vite dev mode.
- Editor: fix data pinning success source.

[Bram Kn](https://github.com/bramkn)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.197.1...n8n@0.198.0) for this version.\
**Release date:** 2022-10-14

Please note that this version contains breaking changes to the Merge node. You can read more about them [here](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md#01980).

- Editor: update the expressions display.
- Editor: update the n8n-menu component.

This release introduces the Code node. This node replaces both the Function and Function Item nodes. Refer to the [Code node](../../integrations/builtin/core-nodes/n8n-nodes-base.code/) documentation for more information.

#### Venafi TLS Protect Cloud Trigger node

Start a workflow in response to events in your Venafi Cloud service.

### Node enhancements

- Citrix ADC node: add Certificate Install operation.
- Kafka node: add a **Use key** option for messages.
- MySQL node: use the resource locator component for table parameters, making it easier for users to browse and select their database fields from within n8n.

- Core, Editor: prevent overlap between running and pinning data.
- Core: expression evaluation of processes now respects `N8N_BLOCK_ENV_ACCESS_IN_NODE`.
- Editor: ensure the Axios base URL still works when hosted in a subfolder.
- Editor: fixes for horizontal scrollbar rendering.
- Editor: ensure the menu closes promptly when loading a credentials page.
- Editor: menu UI fixes.
- Box node: fix an issue that was causing the Create Folder operation to show extra items.
- GSuite Admin node: resolve issue that was causing the User Update operation to fail.
- GitLab Trigger node: ensure this node activates reliably.
- HTTP Request node: ensure OAuth credentials work properly with predefined credentials.
- KoboToolbox node: fix the hook logs.
- SeaTable node: ensure link items show in response.
- Zoom node: resolve an issue that was causing missing output items.

[Jakob Backlund](https://github.com/jbacklund)\
[Yan Jouanique](https://github.com/Yann-J)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.197.0...n8n@0.197.1) for this version.\
**Release date:** 2022-10-10

This is a bug fix release. It resolves an issue with display width on the resource locator UI component.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.196.0...n8n@0.197.0) for this version.\
**Release date:** 2022-10-10

This release includes six new nodes, focused around infrastructure management. It also adds support for drag and drop data mapping in the JSON input view, and includes bug fixes.

- Core: improve light versioning support in declarative node design.
- Editor UI: data mapping for JSON view. You can now map data using drag and drop from JSON view, as well as table view.

#### AWS Certificate Manager

A new integration with AWS Certificate Manager. You can find the documentation [here](../../integrations/builtin/app-nodes/n8n-nodes-base.awscertificatemanager/).

#### AWS Elastic Load Balancing

Manage your AWS load balancers from your workflow using the new AWS Elastic Load Balancing node. You can find the documentation [here](../../integrations/builtin/app-nodes/n8n-nodes-base.awselb/).

Citrix ADC is an application delivery and load balancing solution for monolithic and microservices-based applications. You can find the documentation [here](../../integrations/builtin/app-nodes/n8n-nodes-base.netscaleradc/).

Cloudflare provides a range of services to manage and protect your websites. This new node allows you to manage zone certificates in Cloudflare from your workflows. You can find the documentation [here](../../integrations/builtin/app-nodes/n8n-nodes-base.cloudflare/).

This release includes two new Venafi nodes, to integrate with their Protect TLS service.

### Node enhancements

Crypto node: add SHA3 support.

- CLI: cache generated assets in a user-writeable directory.
- Core: prevent excess runs when data is pinned in a trigger node.
- Core: ensure hook URLs always added correctly.
- Editor: a fix for an issue affecting linked items in combination with data pinning.
- Editor: resolve a bug with the binary data view.
- GitHub Trigger node: ensure trigger executes reliably.
- Microsoft Excel node: fix pagination issue.
- Microsoft ToDo node: fix pagination issue.

[Stratos Theodorou](https://github.com/eeVoskos)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.195.5...n8n@0.196.0) for this version.\
**Release date:** 2022-09-30

This release includes major new features:

- Better item linking
- New built-in variables and methods
- A redesigned main navigation
- New nodes, as well as an overhaul of the HTTP Request node

It also contains bug fixes and node enhancements.

#### Improved item linking

Introducing improved support for item linking (paired items). Item linking is a key concept in the n8n data flow. Learn more in [Data item linking](../../data/data-mapping/data-item-linking/).

#### Overhauled built-in variables

n8n's [built-in methods and variables](../../code/) have been overhauled, introducing new variables, and providing greater consistency in behavior and naming.

#### Redesigned main navigation

We've redesigned the main navigation (the left hand menu) to create a simpler user experience.

#### Other new features

- Improved error text when loading options in a node.
- On reset, share unshared credentials with the instance owner.

The [n8n node](../../integrations/builtin/core-nodes/n8n-nodes-base.n8n/) allows you to consume the n8n API in your workflows.

#### WhatsApp Business Platform node

The [WhatsApp Business Platform](../../integrations/builtin/app-nodes/n8n-nodes-base.whatsapp/) node allows you to use the WhatsApp Business Platform Cloud API in your workflows.

### Node enhancements

- HTTP Request node: a major overhaul. It's now much simpler to build a custom API request. Refer to the [HTTP Request node documentation](../../integrations/builtin/core-nodes/n8n-nodes-base.httprequest/) for more information.
- RabbitMQ Trigger node: now automatically reconnects on disconnect.
- Slack node: add the 'get many' operation for users.

- Build: add typing for SSE channel.
- Build: fix lint issue.
- CLI: add git to all Docker images
- CLI: disable X-Powered-By: Express header.
- CLI: disable CORS on SSE connections in production.
- Core: remove commented out lines.
- Core: delete unused dependencies.
- Core: fix and harmonize documentation links for nodes.
- Core: remove the --forceExit flag from CLI tests.
- Editor: add missing event handler to accordion component.
- Editor: fix Storybook setup.
- Editor: ensure BASE_URL replacement works correctly on Windows.
- Editor: fix parameter input field focus.
- Editor: make lodash aliases work on case-sensitive file systems.
- Editor: fix an issue affecting copy-pasting workflows into pinned data in the code editor.
- Editor: ensure the run data pagination selector displays when appropriate.
- Editor: ensure the run selector can open.
- Editor: tidy up leftover i18n references in the node view.
- Editor: correct an i18n string.
- Editor: resolve slow loading times for node types, node creators, and push connections in the settings view.
- Nodes: update descriptions in the Merge node
- Nodes: ensure the card ID property displays for completed checklists in the Trello node.
- Nodes: fix authentication for the new verions of WeKan.
- Nodes: ensure form names list correctly in the Wufoo Trigger node.

[Cristobal Schlaubitz Garcia](https://github.com/CxGarcia)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.195.4...n8n@0.195.5) for this version.\
**Release date:** 2022-09-23

This is a bug fix release. It fixes an issue with extracting values in expressions.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.195.3...n8n@0.195.4) for this version.\
**Release date:** 2022-09-22

- Adds the ability to resize the main node panel.
- Resolves an issue with resource locator in expressions.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.195.2...n8n@0.195.3) for this version.\
**Release date:** 2022-09-22

This is a bug fix release.

- Editor: fix an expressions bug affecting numbers and booleans.
- Added support for setting the TDS version in Microsoft SQL credentials.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.195.1...n8n@0.195.2) for this version.\
**Release date:** 2022-09-22

This is a bug fix release. It resolves an issue with MySQL migrations.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.195.0...n8n@0.195.1) for this version.\
**Release date:** 2022-09-21

This is a bug fix release. It resolves an issue with Postgres migrations.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.194.0...n8n@0.195.0) for this version.\
**Release date:** 2022-09-21

This release introduces user management and credential sharing for n8n's Cloud platform. It also contains other enhancements and bug fixes.

#### User management and credential sharing for Cloud

This release adds support for n8n's existing [user management](../../user-management/) functionality to Cloud, and introduces a new feature: [credential sharing](../../credentials/credential-sharing/). Credential sharing is currently only available on Cloud.

Also in this release:

- Added a `resourceLocator` parameter type for nodes, and started upgrading n8n's built-in nodes to use it. This new option helps users who need to specify the ID of a record or item in an external service. For example, when using the Trello node, you can now search for a specific card by ID, URL, or do a free text search for card titles. Node builders can learn more about working with this new UI element in n8n's [UI elements](../../integrations/creating-nodes/build/reference/ui-elements/) documentation.
- Cache npm dependencies to improve performance on self-hosted n8n

- Box node: fix an issue that sometimes prevented response data from being returned.
- CLI: prevent n8n from crashing when it encounters an error in poll method.
- Core: prevent calls to constructor, to forbid arbitrary code execution.
- Editor: fix the output panel for Wait node executions.
- HTTP node: ensure instance doesn't crash when batching enabled.
- Public API: corrections to the OAuth schema.
- Xero node: fix an issue that was causing line amount types to be ignored when creating new invoices.

[Ikko Ashimine](https://github.com/eltociear)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.193.5...n8n@0.194.0) for this version.\
**Release date:** 2022-09-15

This release includes new nodes: a Gmail trigger, Google Cloud Storage, and Adalo. It also contains major overhauls of the Gmail and Merge nodes.

- CLI: load all nodes and credentials code in isolation.
- Core, Editor UI: introduce support for node deprecation.
- Editor: implement HTML sanitization for Notification and Message components.
- Editor: display the input number on multi-input nodes.

Adalo is a low code app builder. Refer to n8n's [Adalo node documentation](../../integrations/builtin/app-nodes/n8n-nodes-base.adalo/) for more information.

#### Google Cloud Storage

n8n now has a [Google Cloud Storage node](../../integrations/builtin/app-nodes/n8n-nodes-base.googlecloudstorage/).

n8n now has a [Gmail Trigger node](../../integrations/builtin/trigger-nodes/n8n-nodes-base.gmailtrigger/). This allows you to trigger workflows in response to a Gmail account receiving an email.

### Node enhancements

- Gmail node: this release includes an overhaul of the [Gmail node](../../integrations/builtin/app-nodes/n8n-nodes-base.gmail/), with updated resources and operations.
- Merge node: a major overhaul. Merge mode's have new names, and have been simplified. Refer to the [Merge node documentation](../../integrations/builtin/core-nodes/n8n-nodes-base.merge/) to learn more.
- MongoDB node: updated the Mongo driver to 4.9.1.

- CLI: core: address Dependabot warnings.
- CLI: avoid scanning unnecessary directories on Windows.
- CLI: load nodes and directories on Windows using the correct file path.
- CLI: ensure password reset triggers internal and external hooks.
- CLI: use absolute paths for loading custom nodes and credentials.
- Core: returnJsonArray helper no longer breaks nodes that return no data.
- Core: fix an issue with node renaming and expressions.
- Core: update OAuth endpoints to use the instance base URL.
- Nodes: resolved an issue that was preventing versioned nodes from loading.
- Public API: better error handling for bad requests.
- AWS nodes: fixed an issue with credentials testing.
- GoogleBigQuery node: fix for empty responses when creating records.
- HubSpot node: correct the node name on the canvas.

[Rhys Williams](https://github.com/rhyswilliamsza)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.193.4...n8n@0.193.5) for this version.\
**Release date:** 2022-09-07

This is a bug fix release.

- Editor: prevent editing in the Function nodes in executions view.
- Editor: ensure button widths are correct.
- Editor: fix a popup title.
- Gmail node: fix an issue introduced due to incorrect automatic data formatting.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.193.3...n8n@0.193.4) for this version.\
**Release date:** 2022-09-06

This release contains new features that lay the groundwork for upcoming releases, and bug fixes.

- It's now possible to configure the stop time for workers.
- CLI: Added external hooks for when members are added or deleted.
- Editor: Use the i18n component for localization (replacing v-html)

- CLI: include "auth-excluded" endpoints on the history middleware as well.
- Core: fix MySQL migration issue with table prefix.
- Correct spelling.
- Fix n8n-square-button import.
- AWS nodes: handle query string and body properly for AWS related requests.
- AWS Lambda node: fix JSON data being sent to AWS Lambda as string.
- Beeminder node: fix request ID not being sent when creating a new data point.
- GitHub node: fix binary data not being returned.
- GraphQL node: fix issue with return items.
- Postgres node: fix issue with Postgres insert and paired item.
- Kafka Trigger node: fix Kafka trigger not working with default max requests value.
- MonicaCrm node: fix pagination when using return all.
- Gmail node: fix bug related to paired items.
- Raindrop node: fix issue refreshing OAuth2 credentials.
- Shopify node: fix pagination when empty fields are sent.

[Aaron Delasy](https://github.com/delasy)\
[ruanjiefeng](https://github.com/ruanjf)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.193.2...n8n@0.193.3) for this version.\
**Release date:** 2022-09-01

This release contains bug fixes and node enhancements.

### Node enhancements

MongoDB node: add credential testing and two new operations.

- CLI: only initialize the mailer if the connection can be verified.
- Core: fix an issue with disabled parent outputs in partial executions.
- Nodes: remove duplicate wrapping of paired item data.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.193.1...n8n@0.193.2) for this version.\
**Release date:** 2022-09-01

This is a bug fix release. It resolves an issue that was causing errors with OAuth2 credentials.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.193.0...n8n@0.193.1) for this version.\
**Release date:** 2022-08-31

This is a bug fix release. It resolves an issue that was preventing column headings from displaying correctly in the editor.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.192.2...n8n@0.193.0) for this version.\
**Release date:** 2022-08-31

This release contains a new node, feature enhancements, and bug fixes.

This release adds an integration for [HighLevel](../../integrations/builtin/app-nodes/n8n-nodes-base.highlevel/), an all-in-one sales and marketing platform.

- Docker: reduce the size of Alpine Docker images.
- Editor: improve mapping tooltip behavior.

- Core: make digest auth work with query parameters.
- Editor: send data as query on DELETE requests.
- Fix credentials_entity table migration for MySQL.
- Improve `.npmignore` to reduce the size of the published packages.

[pemontto](https://github.com/pemontto)\
[Tzachi Shirazi](https://github.com/TzachiSh)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.192.1...n8n@0.192.2) for this version.\
**Release date:** 2022-08-25

This is a bug fix release.

- Editor: fix the feature flag check when PostHog is unavailable.
- Editor: fix for a mapping bug that occured when value is null.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.192.0...n8n@0.192.1) for this version.\
**Release date:** 2022-08-25

This is a bug fix release.

Account for non-array types in `pinData` migration.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.191.1...n8n@0.192.0) for this version.\
**Release date:** 2022-08-24

This release contains new features and enhancements, as well as bug fixes.

#### Map nested fields

n8n@0.187.0 saw the first release of [data mapping](../../data/data-mapping/), allowing you to drag and drop top level data from a node's **INPUT** panel into parameter fields. With this release, you can now drag and drop data from any level.

- Core and editor: support `pairedItem` for pinned data.
- Core and editor: integrate PostHog.
- Core: add a command to scripts making it easier to launch n8n with tunnel.
- CLI: notify external hooks about user profile and password changes.

- Core: account for the enabled state in the first pinned trigger in a workflow.
- Core: fix pinned trigger execution.
- CLI: handle unparseable strings during JSON key migration.
- CLI: fix the excessive instantiation type error for flattened executions.
- CLI: initiate the nodes directory to ensure `npm install` succeeds.
- CLI: ensure tsc build errors also cause Turbeorepo builds to fail.
- Nextcloud node: fix an issue with credential verification.
- Freshdesk node: fix an issue where the getAll operation required non-existant options.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.191.0...n8n@0.191.1) for this version.\
**Release date:** 2022-08-19

This is a bug fix release. It resolves an issue that was causing node connectors to disappear after a user renamed them.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.190.0...n8n@0.191.0) for this version.\
**Release date:** 2022-08-17

This release lays the groundwork for wider community nodes support. It also includes some bug fixes.

- Community nodes are now enabled based on npm availability on the host system. This allows n8n to introduce community nodes to the Desktop edition in a future release.
- Improved in-app guidance on mapping data.

- CLI: fix the community node tests on Postgres and MySQL.
- Core: fix an issue preventing child workflow executions from displaying.
- Editor: handle errors when opening settings and executions.
- Editor: improve expression and parameters performance.
- Public API: fix executions pagination for n8n instances using Postgres and MySQL.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.189.1...n8n@0.190.0) for this version.\
**Release date:** 2022-08-10

This is a bug fix release.

- Core: fix a crash caused by parallel calls to test webhooks.
- Core: fix an issue preventing static data being saved for poll triggers.
- Public API: fix a pagination issue.
- GitHub Trigger: typo fix.

[Nathan Poirier](https://github.com/nathan818fr)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.189.0...n8n@0.189.1) for this version.\
**Release date:** 2022-08-05

This is a bug fix release.

Fixed an issue with MySQL and MariaDB migrations.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.188.0...n8n@0.189.0) for this version.\
**Release date:** 2022-08-03

This release includes a new node, Sendinblue, as well as bug fixes.

[Sendinblue node](../../integrations/builtin/app-nodes/n8n-nodes-base.brevo/) and Sendinblue Trigger node: introducing n8n's [Sendinblue](https://www.sendinblue.com/) integration.

### Node enhancements

[NocoDB node](../../integrations/builtin/app-nodes/n8n-nodes-base.nocodb/): add support for v0.90.0+

- Editor: fix a label cut off.
- Fix an issue with saving workflows when tags are disabled.
- Ensure support for community nodes on Windows.

[mertmit](https://github.com/mertmit)\
[Nicholas Penree](https://github.com/drudge)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.187.2...n8n@0.188.0) for this version.\
**Release date:** 2022-07-27

This release contains a new node for Metabase, bug fixes, and node and product enhancements.

This release includes a new [Metabase node](../../integrations/builtin/app-nodes/n8n-nodes-base.metabase/). [Metabase](https://www.metabase.com/) is a business data analysis tool.

This release includes improvements to n8n's core pairedItems functionality.

### Node enhancements

- Item Lists node: add an operation to create arrays from input items.
- [Kafka Trigger node](../../integrations/builtin/trigger-nodes/n8n-nodes-base.kafkatrigger/): add more option fields.

- Core: add Windows support to `import:credentials --separate`.
- Editor: correct linking buttons color.
- Editor: ensure data pinning works as expected when `pinData` is null.
- Editor: fix a bug with spaces.
- Editor: resolve an issue with sticky note duplication and positioning.
- Editor: restore missing header colors.
- AWS DynamoDB node: fix for errors with expression attribute names.
- Mautic node: fix an authentication issue.
- Rocketchat node: fix an authentication issue.

[Nicholas Penree](https://github.com/drudge)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.187.1...n8n@0.187.2) for this version.\
**Release date:** 2022-07-21

This is a bug fix release.

- Editor: fix for a console issue.
- Editor: fix a login issue for non-admin users.
- Editor: fix problems with the credentials modal that occured when no node is open.
- NocoDB node: fix for an authentication issue.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.187.0...n8n@0.187.1) for this version.\
**Release date:** 2022-07-20

This release fixes a bug that was preventing new nodes from reliably displaying in all browsers.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.186.1...n8n@0.187.0) for this version.\
**Release date:** 2022-07-20

This release includes several major new features, including:

- The community nodes repository: a new way to build and share nodes.
- Data pinning and data mapping: accelerate workflow development with better data manipulation functionality.

#### Community nodes repository

This release introduces the [community node repository](../../integrations/community-nodes/installation/). This allows developers to build and share nodes as npm packages. Users can install community-built nodes directly in n8n.

[Data pinning](../../data/data-pinning/) allows you to freeze and edit data during workflow development. Data pinning means saving the output data of a node, and using the saved data instead of fetching fresh data in future workflow executions. This avoids repeated API calls when developing a workflow, reducing calls to external systems, and speeding up workflow development.

This release introduces a drag and drop interface for [data mapping](../../data/data-mapping/), as a quick way to map data without using expressions.

#### Simplify authentication setup for node creators

This release introduces a simpler way of handling authorization when building a node. All credentials should now contain an `authenticate` property that dictates how the credential is used in a request. n8n has also simplified authentication types: instead of specifying an authentication type and using the correct interface, you can now set the type as `"generic"`, and use the `IAuthenticateGeneric` interface.

You can use this approach for any authentication method where data is sent in the header, body, or query string. This includes methods like bearer and basic auth. You can't use this approach for more complex authentication types that require multiple calls, or for methods that don't pass authentication data. This includes OAuth.

For an example of the new authentication syntax, refer to n8n's [Asana node](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/credentials/AsanaApi.credentials.ts).

#### Other new features

- Added a `preAuthentication` method to credentials.
- Added more credentials tests.
- Introduce automatic fixing for paired item information in some scenarios.

### Node enhancements

- [ERPNext node](../../integrations/builtin/app-nodes/n8n-nodes-base.erpnext/): add credential tests, and add support for unauthorized certs.
- [Google Drive node](../../integrations/builtin/app-nodes/n8n-nodes-base.googledrive/): add support for move to trash.
- [Mindee node](../../integrations/builtin/app-nodes/n8n-nodes-base.mindee/): support new version.
- [Notion node](../../integrations/builtin/app-nodes/n8n-nodes-base.notion/): support ignoring the Notion URL property if empty.
- [Shopify node](../../integrations/builtin/app-nodes/n8n-nodes-base.shopify/): add OAuth support.

- API: add missing node settings parameters.
- API: validate static data value for resource workflow.
- Baserow Node: fix an issue preventing table names from loading.
- Editor: hide the **Execute previous node** button when in read-only mode.
- Editor: hide tabs if there's only one branch.
- Roundup of link fixes in nodes.

[Florian Bachmann](https://github.com/baflo) [Olivier Aygalenq](https://github.com/oaygalenq)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.186.0...n8n@0.186.1) for this version.\
**Release date:** 2022-07-14

This is a bug fix release. It includes a fix for an issue with the Airtable node.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.185.0...n8n@0.186.0) for this version.\
**Release date:** 2022-07-13

This release contains bug fixes and node enhancements.

- Add item information to more node errors.
- Update multiple credentials with tests, and add support for custom operations.

### Node enhancements

- [AWS DynamoDB node](../../integrations/builtin/app-nodes/n8n-nodes-base.awsdynamodb/): improve error handling and add an optional GetAll Scan FilterExpression.
- [Customer.io node](../../integrations/builtin/app-nodes/n8n-nodes-base.customerio/): add support for tracking region selection.
- [Elasticsearch node](../../integrations/builtin/app-nodes/n8n-nodes-base.elasticsearch/): add 'Source Excludes' and 'Source Includes' options to the Document: getAll operation. Add credential tests, index pipelines, and index refresh.
- [Freshworks CRM node](../../integrations/builtin/app-nodes/n8n-nodes-base.freshworkscrm/): add search and lookup functionality.
- [JIRA node](../../integrations/builtin/trigger-nodes/n8n-nodes-base.jiratrigger/): add optional query authentication.
- [Postgres node](../../integrations/builtin/app-nodes/n8n-nodes-base.postgres/): improve handling of large numbers.
- [Redis node](../../integrations/builtin/app-nodes/n8n-nodes-base.redis/): add push and pop operations.
- [Rename node](../../integrations/builtin/core-nodes/n8n-nodes-base.renamekeys/): add regex replace.
- [Spreadsheet file node](../../integrations/builtin/core-nodes/n8n-nodes-base.converttofile/): allow skipping headers when writing spreadsheets.

- Editor: Fix an error that occured after repeated executions.
- [EmailReadImap node](../../integrations/builtin/core-nodes/n8n-nodes-base.emailimap/): improve handling of network problems.
- [Google Drive node](../../integrations/builtin/app-nodes/n8n-nodes-base.googledrive/): process input items using the list operation.
- [Telegram node](../../integrations/builtin/app-nodes/n8n-nodes-base.telegram/): fix for a bug affecting sending binary data (images, documents and so on).

[Bryce Sheehan](https://github.com/ctrl-freak) [h4ux](https://github.com/h4ux) [miguel-mconf](https://github.com/miguel-mconf) [Nicholas Penree](https://github.com/drudge) [pemontto](https://github.com/pemontto) [Yann Jouanique](https://github.com/Yann-J)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.184.0...n8n@0.185.0) for this version.\
**Release date:** 2022-07-05

This release adds a new node, Google Ads. It also contains bug fixes and node enhancements, as well as a small addition to core.

Core: add the `action` parameter to INodePropertyOptions. This parameter is now available when building nodes.

[Google Ads node](../../integrations/builtin/app-nodes/n8n-nodes-base.googleads/): n8n now provides a Google Ads node, allowing you to get data from Google Ad campaigns.

### Node enhancements

- [DeepL node](../../integrations/builtin/app-nodes/n8n-nodes-base.deepl/): Add support for longer text fields, and add credentials tests.
- [Facebook Graph API node](../../integrations/builtin/app-nodes/n8n-nodes-base.facebookgraphapi/): Add support for Facebook Graph API 14.
- [JIRA node](../../integrations/builtin/app-nodes/n8n-nodes-base.jira/): Add support for the simplified option with rendered fields.
- [Webflow Trigger node](../../integrations/builtin/trigger-nodes/n8n-nodes-base.webflowtrigger/): Reduce the chance of webhook duplication. Add a credentials test.
- [WordPress node](../../integrations/builtin/app-nodes/n8n-nodes-base.wordpress/): Add a post template option.

- [HubSpot node](../../integrations/builtin/app-nodes/n8n-nodes-base.hubspot/): Fix for search endpoints.
- [KoboToolbox node](../../integrations/builtin/app-nodes/n8n-nodes-base.kobotoolbox/): Improve attachment matching logic and GeoJSON Polygon format.
- [Odoo node](../../integrations/builtin/app-nodes/n8n-nodes-base.odoo/): Prevent possible issues with some custom fields.
- Sticky note node: Fix an issue that was causing the main header to hide.
- [Todoist node](../../integrations/builtin/app-nodes/n8n-nodes-base.todoist/): Improve multi-item support.

[cgobrech](https://github.com/cgobrech) [pemontto](https://github.com/pemontto) [Yann Jouanique](https://github.com/Yann-J) [Zapfmeister](https://github.com/Zapfmeister)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.183.0...n8n@0.184.0) for this version.\
**Release date:** 2022-06-29

This release includes:

- New core features
- Enhancements to the Clockify node.
- Bug fixes.

- You can now access `getBinaryDataBuffer` in the pre-send method.
- n8n now exposes the item index being processed by a node.
- Migrated the expressions templating engine to [n8n's fork of riot-tmpl](https://github.com/n8n-io/tmpl).

### Node enhancements

[Clockify node](../../integrations/builtin/app-nodes/n8n-nodes-base.clockify/): added three new resources: Client, User, and Workspace. Also added support for custom API calls.

- Core: fixed an error with logging circular links in JSON.
- Editor UI: now display the full text of long error messages.
- Editor UI: fix for an issue with credentials rendering when the node has no parameters.
- [Cortex node](../../integrations/builtin/app-nodes/n8n-nodes-base.cortex/): fix an issue preventing all analyzers being returned.
- [HTTP Request node](../../integrations/builtin/core-nodes/n8n-nodes-base.httprequest/): ensure all OAuth2 credentials work with this node.
- [LinkedIn node](../../integrations/builtin/app-nodes/n8n-nodes-base.linkedin/): fix an issue with image preview.
- [Salesforce node](../../integrations/builtin/app-nodes/n8n-nodes-base.salesforce/): fix an issue that was causing the lead status to not use the new name when name is updated.
- Fixed an issue with required/optional parameters.

[pemontto](https://github.com/pemontto)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.182.1...n8n@0.183.0) for this version.\
**Release date:** 2022-06-21

This release contains node enhancements and bug fixes, as well as an improved trigger nodes panel.

Enhancements to the **Trigger** inputs panel: When using a trigger node, you will now see an **INPUT** view that gives guidance on how to load data into your trigger.

### Node enhancements

- [HubSpot node](../../integrations/builtin/app-nodes/n8n-nodes-base.hubspot/): you can now assign a stage on ticket update.
- [Todoist node](../../integrations/builtin/app-nodes/n8n-nodes-base.todoist/): it's now possible to move tasks between sections.
- [Twake node](../../integrations/builtin/app-nodes/n8n-nodes-base.twake/): updated icon, credential test added, and added support for custom operations.

- Core: don't allow OPTIONS requests from any source.
- Core: GET `/workflows/:id` now returns tags.
- Core: ensure predefined credentials show up in the HTTP Request node.
- Core: return the correct error message on Axios error.
- Core: updates to the expressions allow-list and deny-list.

[Bryce Sheehan](https://github.com/ctrl-freak) [Rahimli Rahim](https://github.com/rahimlis)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.182.0...n8n@0.182.1) for this version.\
**Release date:** 2022-06-16

This is a bug fix release. It resolves an issue with restarting waiting executions.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.181.2...n8n@0.182.0) for this version.\
**Release date:** 2022-06-14

This release contains enhancements to the Twilio and Wise integrations, and adds support for a new grant type for OAuth2. It also includes some bug fixes.

Added support for the client_credentials grant type for OAuth2.

### Node enhancements

- [Twilio node](../../integrations/builtin/app-nodes/n8n-nodes-base.twilio/): added the ability to make a voice call using TTS.
- [Wise node](../../integrations/builtin/app-nodes/n8n-nodes-base.wise/): added support for downloading statements as JSON, CSV, or PDF.

- Core: fixes an issue that was causing parameters to get lost in some edge cases.
- Core: fixes an issue with combined expressions not resolving if one expression was invalid.
- Core: fixed an issue that was causing the public API to fail to build on Windows.
- Editor: ensure errors display correctly.
- [HTTP Request node](../../integrations/builtin/core-nodes/n8n-nodes-base.httprequest/): better handling for requests that return null.
- [Pipedrive node](../../integrations/builtin/app-nodes/n8n-nodes-base.pipedrive/): fixes a limits issue with the GetAll operation on the Lead resource.
- [Postbin node](../../integrations/builtin/app-nodes/n8n-nodes-base.postbin/): remove a false error.

[Albrecht Schmidt](https://github.com/IamDrowsy) [Erick Friis](https://github.com/efriis) [JoLo](https://github.com/jolo-dev) [Shaun](https://github.com/simshaun) Valentin Mocanu

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.181.1...n8n@0.181.2) for this version.\
**Release date:** 2022-06-09

This is a bug fix release. It resolves an issue that was sometimes causing nodes to error when they didn't return data.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.181.0...n8n@0.181.1) for this version.\
**Release date:** 2022-06-09

This is a bug fix release. It fixes two issues with multi-input nodes.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.180.0...n8n@0.181.0) for this version.\
**Release date:** 2022-06-08

This release introduces the public API.

### New feature highlights

#### The n8n public API

This release introduces the n8n public REST API. Using n8n's public API, you can programmatically perform many of the same tasks as you can in the GUI. The API includes a built-in Swagger UI playground. Refer to the [API documentation](../../api/) for more information.

### Other new features

- **Core**: you can now block user access to environment variables using the `N8N_BLOCK_ENV_ACCESS_IN_NODE` variable.

- **Core**: properly resolve expressions in declarative style nodes.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.179.0...n8n@0.180.0) for this version.\
**Release date:** 2022-06-07

This release adds a new node for Cal.com, support for tags in workflow import and export, UI improvements, node enhancements, and bug fixes.

#### Tags in workflow import and export

When importing or exporting a workflow, the JSON can now include workflow tags.

#### Improved handling of activation errors

n8n now supports running an error workflow in response to an activation error.

This release adds a new trigger node for Cal.com. Refer to the [Cal Trigger documentation](../../integrations/builtin/trigger-nodes/n8n-nodes-base.caltrigger/) for more guidance.

### Node enhancements

- [GitHub node](../../integrations/builtin/app-nodes/n8n-nodes-base.github/): add the Get All operation to the Organization resource.
- [QuickBooks node](../../integrations/builtin/app-nodes/n8n-nodes-base.quickbooks/): add a new optional field for tax items.

- Restore support for `window` in expressions.
- Fix to the `user-management:reset` command.
- Resolve crashes in queue mode.
- Correct delete button hover spacing.
- Resolve a bug causing stuck loading states.
- [EmailReadImap node](../../integrations/builtin/core-nodes/n8n-nodes-base.emailimap/): improve error handling.
- [HubSpot node](../../integrations/builtin/app-nodes/n8n-nodes-base.hubspot/): fix contact loading.

[Mark Steve Samson](https://github.com/marksteve) [Syed Ali Shahbaz](https://github.com/alishaz-polymath)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.178.2...n8n@0.179.0) for this version.\
**Release date:** 2022-05-30

This release features a new node for PostBin, as well as various node enhancements and bug fixes.

PostBin serves as a wrapper for standard HTTP libraries which can be used to test arbitrary API/Webhooks by sending requests and providing more advanced ways to analyze the responses.

### Node enhancements

- [RabbitMQ Trigger node](../../integrations/builtin/trigger-nodes/n8n-nodes-base.rabbitmqtrigger/): Made message acknowledgement and parallel processing configurable.
- [ServiceNow node](../../integrations/builtin/app-nodes/n8n-nodes-base.servicenow/): Added support for attachments.
- [Todoist node](../../integrations/builtin/app-nodes/n8n-nodes-base.todoist/): Added support for specifying the parent task when adding and listing tasks.

- **Core**: Fixed migrations on non-public Postgres schema.
- **Core**: Mitigated possible XSS vulnerability when importing workflow templates.
- **Editor UI**: fixed erroneous hover state detection close to the sticky note button.
- **Editor UI**: fixed display behavior of credentials assigned to versioned nodes.
- [Discord node](../../integrations/builtin/app-nodes/n8n-nodes-base.discord/): Fixed rate limit handling.
- [Gmail node](../../integrations/builtin/app-nodes/n8n-nodes-base.gmail/): Fixed sending attachments in filesystem data mode.
- [Google Sheets node](../../integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/): Fixed an error preventing the *Use Header Names as JSON Paths* option from working as expected.
- [Nextcloud node](../../integrations/builtin/app-nodes/n8n-nodes-base.nextcloud/): Updated the node so the list:folder operation works with Nextcloud version 24.
- [YouTube node](../../integrations/builtin/app-nodes/n8n-nodes-base.youtube/): Fixed problem with uploading large files.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.178.1...n8n@0.178.2) for this version.\
**Release date:** 2022-05-25

This is a bug fix release. It solves an issue with loading parameters when making custom operations calls.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.178.0...n8n@0.178.1) for this version.\
**Release date:** 2022-05-24

This is a bug fix release. It solves an issue with setting credentials in the HTTP Request node.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.177.0...n8n@0.178.0) for this version.\
**Release date:** 2022-05-24

This release adds support for reusing existing credentials in the HTTP Request node, making it easier to do custom operation with APIs where n8n already has an integration.

The release also includes improvements to the nodes view, giving better detail about incoming data, as well as some bug fixes.

#### Credential reuse for custom API operations

n8n supplies hundreds of nodes, allowing you to create workflows that link multiple products. However, some nodes don't include all the possible operations supported by a product's API. You can work around this by making a custom API call using the HTTP Request node.

One of the most complex parts of setting up API calls is managing authentication. To simplify this, n8n now provides a way to use existential credential types (credentials associated with n8n nodes) in the HTTP Request node.

For more information, refer to [Custom API operations](../../integrations/custom-operations/).

#### Node details view

An improved node view, showing more detail about node inputs.

### Node enhancements

[Salesforce Node](../../integrations/builtin/app-nodes/n8n-nodes-base.salesforce/): Add the **Country** field.

- **Editor UI**: don't display the dividing line unless necessary.
- **Editor UI**: don't display the 'Welcome' sticky in template workflows.
- [Slack Node](../../integrations/builtin/app-nodes/n8n-nodes-base.slack/): Fix the kick operation for the channel resource.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.176.0...n8n@0.177.0) for this version.\
**Release date:** 2022-05-17

This release contains node enhancements, an improved welcome experience, and bug fixes.

#### Improved welcome experience

A new [introductory video](https://youtu.be/RpjQTGKm-ok), automatically displayed for new users.

#### Automatically convert Luxon dates to strings

n8n now automatically converts Luxon DateTime objects to strings.

### Node enhancements

- [Google Drive Node](../../integrations/builtin/app-nodes/n8n-nodes-base.googledrive/): Drive upload, delete, and share operations now support shared Drives.
- [Microsoft OneDrive](../../integrations/builtin/app-nodes/n8n-nodes-base.microsoftonedrive/): Add the rename operation for files and folders.
- [Trello](../../integrations/builtin/app-nodes/n8n-nodes-base.trello/): Add support for operations relating to board members.

- **core:** Fix call to `/executions-current` with unsaved workflow.
- **core:** Fix issue with fixedCollection having all default values.
- [Edit Image Node](../../integrations/builtin/core-nodes/n8n-nodes-base.editimage/): Fix font selection.
- [Ghost Node](../../integrations/builtin/app-nodes/n8n-nodes-base.ghost/): Fix post tags and add credential tests.
- [Google Calendar Node](../../integrations/builtin/app-nodes/n8n-nodes-base.googlecalendar/): Make it work with public calendars and clean up.
- [KoBoToolbox Node](../../integrations/builtin/app-nodes/n8n-nodes-base.kobotoolbox/): Fix query and sort + use question name in attachments.
- [Mailjet Trigger Node](../../integrations/builtin/app-nodes/n8n-nodes-base.mailjet/): Fix issue that node couldn't get activated.
- [Pipedrive Node](../../integrations/builtin/app-nodes/n8n-nodes-base.pipedrive/): Fix resolve properties when using multi option field.

[Cristobal Schlaubitz Garcia](https://github.com/CxGarcia) [Yann Jouanique](https://github.com/Yann-J)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.175.1...n8n@0.176.0) for this version.\
**Release date:** 2022-05-10

This release contains bug fixes and node enhancements.

### Node enhancements

- [Pipedrive node](../../integrations/builtin/app-nodes/n8n-nodes-base.pipedrive/): adds support for filters to the Organization: Get All operation.
- [Pushover node](../../integrations/builtin/app-nodes/n8n-nodes-base.pushover/): adds an HTML formatting option, and a credential test.
- [UProc node](../../integrations/builtin/app-nodes/n8n-nodes-base.uproc/): adds new tools.

- **core**: a fix for filtering the executions list by waiting status.
- **core**: improved webhook error messages.
- [Edit Image node](../../integrations/builtin/core-nodes/n8n-nodes-base.editimage/): node now works correctly with the binary-data-mode 'filesystem'.

[Albert Kiskorov](https://github.com/Albatrosicks) [Miquel Colomer](https://github.com/mcolomer)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.175.0...n8n@0.175.1) for this version.\
**Release date:** 2022-05-03

This is a bug fix release.

Fixes a bug in the editor UI related to node versioning.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.174.0...n8n@0.175.0) for this version.\
**Release date:** 2022-05-02

This release adds support for node versioning, along with node enhancements and bug fixes.

0.175.0 adds support for a lightweight method of node versioning. One node can contain multiple versions, allowing small version increments without code duplication. To use this feature, change the `version` parameter in your node to an array, and add your version numbers, including your existing version. You can then access the version parameter with `@version` in your `displayOptions` (to control which version n8n displays). You can also query the version in your `execute` function using `const nodeVersion = this.getNode().typeVersion;`.

### Node enhancements

- [Google Sheets node](../../integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/): n8n now handles header names formatted as JSON paths.
- [Microsoft Dynamics CRM node](../../integrations/builtin/app-nodes/n8n-nodes-base.microsoftdynamicscrm/): add support for regions other than North America.
- [Telegram node](../../integrations/builtin/app-nodes/n8n-nodes-base.telegram/): add support for querying chat administrators.

- **core**: fixed an issue that was causing n8n to apply authentication checks, even when user management was disabled.
- **core**: n8n now skips credentials checks for disabled nodes.
- **editor**: fix a bug affecting touchscreen monitors.
- [HubSpot node](../../integrations/builtin/app-nodes/n8n-nodes-base.hubspot/): fix for search operators.
- [SendGrid node](../../integrations/builtin/app-nodes/n8n-nodes-base.sendgrid/): fixed an issue with sending attachments.
- [Wise node](../../integrations/builtin/app-nodes/n8n-nodes-base.wise/): respect the time parameter on `get: exchangeRate`.

[Jack Rudenko](https://github.com/erudenko) [MC Naveen](https://github.com/mcnaveen) [vcrwr](https://github.com/vcrwr)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.173.1...n8n@0.174.0) for this version.\
**Release date:** 2022-04-25

This release adds Sticky Notes, a new feature that allows you to annotate and comment on your workflows. Refer to the [Sticky Notes](../../workflows/components/sticky-notes/) for more information.

- **core**: allow external OAuth connection. This enhancement adds support for connecting OAuth apps without access to n8n.
- All AWS nodes now support AWS temporary credentials.
- [Google Sheets node](../../integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/): Added upsert support.
- [Microsoft Teams node](../../integrations/builtin/app-nodes/n8n-nodes-base.microsoftteams/): adds several enhancements:
  - An option to limit groups to "member of", rather than retrieving the whole directory.
  - An option to get all tasks from a plan instead of just a group member.
  - Autocompletion for plans, buckets, labels, and members in update fields for tasks.
- [MongoDB node](../../integrations/builtin/app-nodes/n8n-nodes-base.mongodb/): you can now parse dates using dot notation.

- [Calendly Trigger node](../../integrations/builtin/trigger-nodes/n8n-nodes-base.calendlytrigger/): updated the logo.
- [Microsoft OneDrive node](../../integrations/builtin/app-nodes/n8n-nodes-base.microsoftonedrive/): fixed an issue that was preventing upload of files with special characters in the file name.
- [QuickBooks node](../../integrations/builtin/app-nodes/n8n-nodes-base.quickbooks/): fixed a pagination issue.

[Basit Ali](https://github.com/BasitAli) [Cody Stamps](https://github.com/crstamps2) [Luiz Eduardo de Oliveira](https://github.com/luizeof) [Oliver Trajceski](https://github.com/SchnapsterDog) [pemontto](https://github.com/pemontto) [Ryan Goggin](https://github.com/Goggin)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.173.0...n8n@0.173.1) for this version.\
**Release date:** 2022-04-19

Fixes a bug with the Discord node icon name.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.172.0...n8n@0.173.0) for this version.\
**Release date:** 2022-04-19

[Markdown node](../../integrations/builtin/core-nodes/n8n-nodes-base.markdown/): added a new Markdown node to convert between Markdown and HTML.

**editor**: you can now drag and drop nodes from the nodes panel onto the canvas.

### Node enhancements

- [Discord node](../../integrations/builtin/app-nodes/n8n-nodes-base.discord/): additional fields now available when sending a message to Discord.
- [GoogleBigQuery](../../integrations/builtin/app-nodes/n8n-nodes-base.googlebigquery/): added support for service account authentication.
- [Google Cloud Realtime Database node](../../integrations/builtin/app-nodes/n8n-nodes-base.googlecloudrealtimedatabase/): you can now select a region.
- [PagerDuty node](../../integrations/builtin/app-nodes/n8n-nodes-base.pagerduty/): now supports more detail in incidents.
- [Slack node](../../integrations/builtin/app-nodes/n8n-nodes-base.slack/): added support for blocks in Slack message update.

- **core**: make the email for user management case insensitive.
- **core**: add `rawBody` for XML requests.
- **editor**: fix a glitch that caused dropdowns to break after adding expressions.
- **editor**: reset text input value when closed with `Esc`.
- [Discourse node](../../integrations/builtin/app-nodes/n8n-nodes-base.discourse/): fix an issue that was causing incomplete results when getting posts. Added a credentials test.
- [Zendesk Trigger node](../../integrations/builtin/trigger-nodes/n8n-nodes-base.zendesktrigger/): remove deprecated targets, replace with webhooks.
- [Zoho node](../../integrations/builtin/app-nodes/n8n-nodes-base.zohocrm/): fix pagination issue.

[Florian Metz](https://github.com/Timeraa) [Francesco Pongiluppi](https://github.com/willywongi) [Mark Steve Samson](https://github.com/marksteve) [Mike Quinlan](https://github.com/mjquinlan2000)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.171.1...n8n@0.172.0) for this version.\
**Release date:** 2022-04-11

- Changes to the data output display in nodes.

### Node enhancements

[Magento 2 Node:](../../integrations/builtin/app-nodes/n8n-nodes-base.magento2/) Added credential tests. [PayPal Node:](../../integrations/builtin/app-nodes/n8n-nodes-base.paypal/) Added credential tests and updated the API URL.

**core**: Luxon now applies the correct timezone. Refer to [Luxon](../../code/cookbook/luxon/) for more information.\
**core**: fixed an issue with localization that was preventing i18n files from loading.\
[Action Network Node:](../../integrations/builtin/app-nodes/n8n-nodes-base.actionnetwork/) Fix a pagination issue and add credentials test.

[Paolo Rechia](https://github.com/paolo-rechia)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n%400.171.0...n8n@0.171.1) for this version.\
**Release date:** 2022-04-06

This is a small bug fix release.

- **core**: fix issue with current executions not displaying.
- **core**: fix an issue causing n8n to falsely skip some authentication.
- [WooCommerce Node:](../../integrations/builtin/app-nodes/n8n-nodes-base.woocommerce/) Fix a pagination issue with the GetAll operation.

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.170.0...n8n@0.171.0) for this version.\
**Release date:** 2022-04-03

Please note that this version contains breaking changes. You can read more about them [here](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md#01710).

This release focuses on bug fixes and node enhancements, with one new feature, and one breaking change to the GraphQL node.

### Breaking change to GraphQL node

The GraphQL node now errors when the response includes an error. If you use this node, you can choose to:

- Do nothing: a GraphQL response containing an error will now cause the workflow to fail.
- Update your GraphQL node settings: set **Continue on Fail** to true to allow the workflow to continue even when the GraphQL response contains an error.

You can now download binary data from individual nodes in your workflow.

- [Emelia Node:](../../integrations/builtin/app-nodes/n8n-nodes-base.emelia/) Add Campaign > Duplicate functionality.
- [FTP Node:](../../integrations/builtin/core-nodes/n8n-nodes-base.ftp/) Add option to recursively create directories on rename.
- [Mautic Node:](../../integrations/builtin/app-nodes/n8n-nodes-base.mautic/) Add credential test and allow trailing slash in host.
- [Microsoft Teams Node:](../../integrations/builtin/app-nodes/n8n-nodes-base.microsoftteams/) Add chat message support.
- [Mocean Node:](../../integrations/builtin/app-nodes/n8n-nodes-base.mocean/) Add 'Delivery Report URL' option and credential tests.
- [ServiceNow Node:](../../integrations/builtin/app-nodes/n8n-nodes-base.servicenow/) Add basicAuth support and fix getColumns loadOptions.
- [Strava Node:](../../integrations/builtin/app-nodes/n8n-nodes-base.strava/) Add 'Get Streams' operation.

- **core:** Fix crash on webhook when last node did not return data
- [EmailReadImap Node:](../../integrations/builtin/core-nodes/n8n-nodes-base.emailimap/) Fix issue that crashed process if node was configured wrong.
- [Google Tasks Node:](../../integrations/builtin/app-nodes/n8n-nodes-base.googletasks/) Fix 'Show Completed' option and hide title field where not needed.
- [NocoDB Node:](../../integrations/builtin/app-nodes/n8n-nodes-base.nocodb/) Fix pagination.
- [Salesforce Node:](../../integrations/builtin/app-nodes/n8n-nodes-base.salesforce/) Fix issue that 'status' did not get used for Case => Create & Update

- [Charles Lecalier](https://github.com/chlec)
- [d3no](https://github.com/d3no)
- [Ketan Somvanshi](https://github.com/KetanSomvanshi)
- [Luis Cipriani](https://github.com/lfcipriani)
- [pemontto](https://github.com/pemontto)
- [Rhys Williams](https://github.com/rhyswilliamsza)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.169.0...n8n@0.170.0) for this version.\
**Release date:** 2022-03-27

This release focuses on bug fixes and adding functionality to existing nodes.

- [Crypto Node:](../../integrations/builtin/core-nodes/n8n-nodes-base.crypto/) Add Generate operation to generate random values.
- [HTTP Request Node:](../../integrations/builtin/core-nodes/n8n-nodes-base.httprequest/) Add support for OPTIONS method.
- [Jira Node:](../../integrations/builtin/app-nodes/n8n-nodes-base.jira/) Add Simplify Output option to Issue > Get.
- [Reddit Node:](../../integrations/builtin/app-nodes/n8n-nodes-base.reddit/) Add possibility to query saved posts.
- [Zendesk Node:](../../integrations/builtin/app-nodes/n8n-nodes-base.zendesk/) Add ticket status On-hold.

- **core:** Add logs and error catches for possible failures in queue mode.
- [AWS Lambda Node:](../../integrations/builtin/app-nodes/n8n-nodes-base.awslambda/) Fix Invocation Type > Continue Workflow.
- [Supabase Node:](../../integrations/builtin/app-nodes/n8n-nodes-base.supabase/) Send token also using Authorization Bearer; fix Row > Get operation.
- [Xero Node:](../../integrations/builtin/app-nodes/n8n-nodes-base.xero/) Fix some operations and add support for setting address and phone number.
- [Wise Node:](../../integrations/builtin/app-nodes/n8n-nodes-base.wise/) Fix issue when executing a transfer.

- [FFTDB](https://github.com/FFTDB)
- [Fred](https://github.com/choudat)
- [Jasper Zonneveld](https://github.com/JaZo)
- [pemontto](https://github.com/pemontto)
- [Sergio](https://github.com/mcmx)
- [TheFSilver](https://github.com/TheFSilver)
- Valentin Mocanu
- [Yassine Fathi](https://github.com/m4tt72)

View the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.168.2...n8n@0.169.0) for this version.\
**Release date:** 2022-03-20

This release includes:

- New functionality for existing nodes
- A new node for Linear
- Bug fixes
- And a license change!

This release changes n8n's license, from [Apache 2.0 with Commons Clause](https://github.com/n8n-io/n8n/blob/181ba3c4e236279b65d102a8a33ae6896f160487/LICENSE.md) to [Sustainable Use License](https://github.com/n8n-io/n8n/blob/master/LICENSE.md).

This change aims to clarify n8n's license terms, and n8n's position as a fair-code project.

Read more about the new license in [License](../../sustainable-use-license/).

- [Linear Node:](../../integrations/builtin/app-nodes/n8n-nodes-base.linear/) Add Linear Node.

- [HTTP Request Node:](../../integrations/builtin/core-nodes/n8n-nodes-base.httprequest/) Allow Delete requests with body.
- [KoBoToolbox Node:](../../integrations/builtin/app-nodes/n8n-nodes-base.kobotoolbox/) Add KoBoToolbox Regular and Trigger Node.
- [Mailjet Node:](../../integrations/builtin/app-nodes/n8n-nodes-base.mailjet/) Add credential tests and support for sandbox, JSON parameters & variables.
- [Mattermost Node:](../../integrations/builtin/app-nodes/n8n-nodes-base.mattermost/) Add support for Channel search.

### Other improvements

- Add support for reading IDs from file with executeBatch command.

- [GitHub node:](../../integrations/builtin/app-nodes/n8n-nodes-base.github/) Fix credential tests and File List operation.
- [Telegram node:](../../integrations/builtin/app-nodes/n8n-nodes-base.telegram/) Fix sending binary data when disable notification is set.

- [Manuel](https://github.com/tennox)
- [Marcin Kozey](https://github.com/marcinkoziej)
- [Matthew Walther](https://github.com/mashiox)
- [Yann Jouanique](https://github.com/Yann-J)

For a comprehensive list of changes, view the [commits](https://github.com/n8n-io/n8n/compare/n8n%400.168.1...n8n@0.168.2) for this version.\
**Release date:** 2022-03-16

This release contains an important bug fix for 0.168.0. Users on 0.168.0 or 0.168.1 should upgrade to this.

For a comprehensive list of changes, view the [commits](https://github.com/n8n-io/n8n/compare/n8n%400.168.0...n8n@0.168.1) for this version.\
**Release date:** 2022-03-15

A bug fix for user management: fixed an issue with email templates that was preventing owners from inviting members.

For a comprehensive list of changes, view the [commits](https://github.com/n8n-io/n8n/compare/n8n%400.167.0...n8n@0.168.0) for this version.\
**Release date:** 2022-03-14

### New feature: user management

User management in n8n allows you to invite people to work in your self-hosted n8n instance. It includes:

- Login and password management
- Adding and removing users
- Two account types: owner and member

Check out the [user management documentation](../../user-management/) for more information.

For a comprehensive list of changes, view the [commits](https://github.com/n8n-io/n8n/compare/n8n%400.166.0...n8n@0.167.0) for this version.\
**Release date:** 2022-03-13

#### Luxon and JMESPath

0.167.0 adds support for two new libraries:

- [Luxon](https://moment.github.io/luxon/#/): a JavaScript library for working with date and time
- [JMESPath](https://jmespath.org/): a query language for JSON

You can use Luxon and JMESPath in the code editor and in expressions.

#### New expressions variables

We've added two new variables to simplify working with date and time in expressions:

- `$now`: a Luxon object containing the current timestamp. Equivalent to DateTime.now().
- `$today`: a Luxon object containing the current timestamp, rounded down to the day. Equivalent to DateTime.now().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).

#### Negative operations in If and Switch nodes

Made it easier to perform negative operations on strings.

This release adds one new operation for numbers:

And the following new operations for strings:

- Not Ends With
- Regex Not Match
- Not Starts With
- Is Not Empty

Additionally, Regex is now labelled Regex Match.

#### New node: Redis Trigger

Added a Redis Trigger node, so you can now start workflows based on a Redis event.

- [Redis Trigger:](../../integrations/builtin/trigger-nodes/n8n-nodes-base.redistrigger/) Added a Redis Trigger node.

### Core functionality

- Added support for [Luxon](https://moment.github.io/luxon/#/) and [JMESPath](https://jmespath.org/).
- Added two new expressions variables, `$now` and `$today`.
- Added more negative operations for numbers and strings.
- Added a link to the course from the help menu.

- [Facebook Graph API:](../../integrations/builtin/app-nodes/n8n-nodes-base.facebookgraphapi/) Added suport for Facebook Graph API 13.
- [HubSpot:](../../integrations/builtin/app-nodes/n8n-nodes-base.hubspot/) Added suport for private app token authentication.
- [MongoDB:](../../integrations/builtin/app-nodes/n8n-nodes-base.mongodb/) Added the aggregate operation.
- [Redis Trigger:](../../integrations/builtin/trigger-nodes/n8n-nodes-base.redistrigger/) Added a Redis Trigger node.
- [Redis:](../../integrations/builtin/app-nodes/n8n-nodes-base.redis/) Added support for publish operations.
- [Strapi:](../../integrations/builtin/app-nodes/n8n-nodes-base.strapi/) Added support for Strapi 4.
- [WordPress:](../../integrations/builtin/app-nodes/n8n-nodes-base.wordpress/) Added status as an option to getAll post requests.

- The Google Calendar node now correctly applies timezones when creating, updating, and scheduling all day events.
- Fixed a bug that occasionally caused n8n to crash, or shut down workflows unexpectedly.
- You can now use long credential type names with Postgres.

- [Luiz Eduardo de Oliveira Fonseca](https://github.com/luizeof)
- [Vitaliy Fratkin](https://github.com/viiy)
- [sol](https://github.com/5pecia1)
- [vcrwr](https://github.com/vcrwr)
- [FFTDB](https://github.com/FFTDB)

For a comprehensive list of changes, view the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.165.1...n8n@0.166.0) for this version.\
**Release date:** 2022-03-08

- [Odoo](../../integrations/builtin/app-nodes/n8n-nodes-base.odoo/)

- [Function:](../../integrations/builtin/core-nodes/n8n-nodes-base.code/) Added support for items without a JSON key.

### Core functionality

- Added new environment variable `N8N_HIRING_BANNER_ENABLED` to enable/disable the hiring banner.
- Fixed a bug preventing keyboard shortcuts from working as expected.
- Fixed a bug causing tooltips to be hidden behind other elements.
- Fixed a bug causing some credentials to be hidden from the credentials list.

- [Baserow:](../../integrations/builtin/app-nodes/n8n-nodes-base.baserow/) Fixed a bug preventing the Sorting option of the Get All operation from working as expected.
- [HTTP Request:](../../integrations/builtin/core-nodes/n8n-nodes-base.httprequest/) Fixed a bug causing Digest Authentication to fail in some scenarios.
- [Wise:](../../integrations/builtin/app-nodes/n8n-nodes-base.wise/) Fixed a bug causing API requests requiring Strong Customer Authentication (SCA) to fail.

[pemontto](https://github.com/pemontto)

For a comprehensive list of changes, view the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.164.1...n8n@0.165.0) for this version.\
**Release date:** 2022-02-28

Please note that this version contains breaking changes. You can read more about them [here](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md#01650).

- [Onfleet](../../integrations/builtin/app-nodes/n8n-nodes-base.onfleet/)

- [Asana:](../../integrations/builtin/app-nodes/n8n-nodes-base.asana/) Added Create operation to the Project resource.
- [Mautic:](../../integrations/builtin/app-nodes/n8n-nodes-base.mautic/) Added Edit Contact Points, Edit Do Not Contact List, Send Email operations to Contact resource. Also added new Segment Email resource.
- [Notion (Beta):](../../integrations/builtin/app-nodes/n8n-nodes-base.notion/) Added support for rollup fields to the Simplify Output option. Also added the Parent ID to the Get All operation of the Block resource.
- [Pipedrive:](../../integrations/builtin/app-nodes/n8n-nodes-base.pipedrive/) Added Marketing Status field to the Create operation of the Person resource, also added User ID field to the Create and Update operations of the Person resource.

### Core functionality

- Added support for workflow templates.
- Fixed a bug causing credentials tests to fail for versioned nodes.
- Fixed a build problem by addind dependencies `@types/lodash.set` to the `workflow` package and `@types/uuid` to the `core` package.
- Fixed an error causing some resources to ignore a non-standard `N8N_PATH` value.
- Fixed an error preventing the placeholder text from being shown when entering credentials.
- Improved error handling for telemetry-related errors.

- Orbit: Fixed a bug causing API requests to use an incorrect workspace identifier.
- [TheHive:](../../integrations/builtin/app-nodes/n8n-nodes-base.thehive/) Fixed a bug causing the Ignore SSL Issues option to be applied incorrectly.

[alexwitkowski](https://github.com/awitkowski0), [Iñaki Breinbauer](https://github.com/quansenB), [lsemaj](https://github.com/jamesliupenn), [Luiz Eduardo de Oliveira Fonseca](https://github.com/luizeof), [Rodrigo Correia](https://github.com/rodrigoscdc), [Santiago Botero Ruiz](https://github.com/yoky-devsavant), [Saurabh Kashyap](https://github.com/saurabharch), [Ugo Bataillard](https://github.com/knshiro)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.164.0...n8n@0.164.1) for this version.\
**Release date:** 2022-02-20

### Core Functionality

- Fixed a bug preventing webhooks from working as expected in some scenarios.

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.163.1...n8n@0.164.0) for this version.\
**Release date:** 2022-02-20

- [Google Chat](../../integrations/builtin/app-nodes/n8n-nodes-base.googlechat/)

- [Grist:](../../integrations/builtin/app-nodes/n8n-nodes-base.grist/) Added support for self-hosted Grist instances.
- [Telegram Trigger:](../../integrations/builtin/trigger-nodes/n8n-nodes-base.telegramtrigger/) Added new Extra Large option to Image Size field.
- [Webhook:](../../integrations/builtin/core-nodes/n8n-nodes-base.webhook/) Added new No Response Body option. Also added support for DELETE, PATCH and PUT methods.

### Core Functionality

- Added new database indices to improve the performance when querying past executions.
- Fixed a bug causing the base portion of a URL not to be prepended as expected in some scenarios.
- Fixed a bug cuasing expressions to resolve incorrectly when referencing non-existent nodes or parameters.

Jhalter5Stones, [Valentina Lilova](https://github.com/valentina98), [thorstenfreitag](https://github.com/thorstenfreitag)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.163.0...n8n@0.163.1) for this version.\
**Release date:** 2022-02-13

### Core Functionality

- Fixed a bug preventing OAuth2 authentication from working as expected in some scenarios.

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.162.0...n8n@0.163.0) for this version.\
**Release date:** 2022-02-13

- [HaloPSA](../../integrations/builtin/app-nodes/n8n-nodes-base.halopsa/)
- [Linear Trigger](../../integrations/builtin/trigger-nodes/n8n-nodes-base.lineartrigger/)
- [Zammad](../../integrations/builtin/app-nodes/n8n-nodes-base.zammad/)

- [GitHub:](../../integrations/builtin/app-nodes/n8n-nodes-base.github/) Added Reference option to the Get operation of the File resource.
- [Twilio:](../../integrations/builtin/app-nodes/n8n-nodes-base.twilio/) Added Status Callbacks option.
- [uProc:](../../integrations/builtin/app-nodes/n8n-nodes-base.uproc/) Sanitized Data Webhook field description.

### Core Functionality

- Added automatic sorting by relative position to the node list inside the expression editor.
- Added new `/workflows/demo` page to allow read-only rendering of workflows inside an iframe.
- Added optional `/healthz` health check endpoint to worker instances.
- Fixed unwanted list autofill behaviour inside the expression editor.
- Improved the GitHub actions used by the nightly Docker image.

- [Function:](../../integrations/builtin/core-nodes/n8n-nodes-base.code/) Fixed a bug leaving the code editor size unchanged after resizing the window.
- [Function Item:](../../integrations/builtin/core-nodes/n8n-nodes-base.code/) Fixed a bug leaving the code editor size unchanged after resizing the window.
- [IF:](../../integrations/builtin/core-nodes/n8n-nodes-base.if/) Removed the empty sections left after removing a condition.
- Item Lists: Fixed an erroneous placeholder text.

[Iñaki Breinbauer](https://github.com/quansenB), [Manuel](https://github.com/tennox), [pemontto](https://github.com/pemontto)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.161.1...n8n@0.162.0) for this version.\
**Release date:** 2022-02-06

- [GitHub:](../../integrations/builtin/app-nodes/n8n-nodes-base.github/) Added new List operation to File resource.

### Core Functionality

- Added configurable debug logging for telemetry.
- Added support for defining nodes through JSON. This functionality is in alpha state and breaking changes to the interface can take place in upcoming versions.
- Added telemetry support to page events occuring before telemetry is initialized.
- Fixed a bug preventing errors in sub-workflows from appearing in parent executions.
- Fixed a bug where node versioning would not work as expected.
- Fixed a bug where remote parameters would not load as expected.
- Fixed a bug where unkown node types would not work as expected.
- Prevented the node details view from opening automatically after duplicating a node.
- Removed dependency `fibers` which is incompatible with the current LTS version 16 of Node.js.

- [XML:](../../integrations/builtin/core-nodes/n8n-nodes-base.xml/) Fixed a bug causing the node to alter incoming data.

[pemontto](https://github.com/pemontto)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.161.0...n8n@0.161.1) for this version.\
**Release date:** 2022-02-01

### Core Functionality

- Added optional debug logging to health check functionality.

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.160.0...n8n@0.161.0) for this version.\
**Release date:** 2022-01-30

### Core Functionality

- Added default polling interval for trigger nodes using polling.
- Added support for additional hints below parameter fields.
- Fixed a bug preventing default values from being used when testing credentials.
- Improved the wording in the *Save your Changes?* dialog.

- [Airtable:](../../integrations/builtin/app-nodes/n8n-nodes-base.airtable/) Improved field description.
- [Airtable Trigger:](../../integrations/builtin/trigger-nodes/n8n-nodes-base.airtabletrigger/) Improved field description.
- [erpNext:](../../integrations/builtin/app-nodes/n8n-nodes-base.erpnext/) Prevented the node from throwing an error when no data is found.
- [Gmail:](../../integrations/builtin/app-nodes/n8n-nodes-base.gmail/) Fixed a bug causing the BCC field to be ignored.
- [Move Binary Data:](../../integrations/builtin/core-nodes/n8n-nodes-base.converttofile/) Fixed a bug causing the binary data to JSON conversion to fail when using filesystem-based binary data handling.
- [Slack:](../../integrations/builtin/app-nodes/n8n-nodes-base.slack/) Fixed a typo in the Type field.

[fabian wohlgemuth](https://github.com/wohfab)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.159.1...n8n@0.160.0) for this version.\
**Release date:** 2022-01-22

- [BambooHR](../../integrations/builtin/app-nodes/n8n-nodes-base.bamboohr/)

### Core Functionality

- Fixed a bug preventing the binary data preview from using the full available height and width.
- Fixed a build problem by pinning chokidar version 3.5.2.
- Prevent workflow activation when no trigger is presentand introduced a modal explaining production data handling.
- Fixed *Filter by tags* placeholder text used in the Open Workflow modal.

- [HTTP Request:](../../integrations/builtin/core-nodes/n8n-nodes-base.httprequest/) Fixed a bug causing custom headers from being ignored.
- [Mautic:](../../integrations/builtin/app-nodes/n8n-nodes-base.mautic/) Fixed a bug preventing all items from being returned in some situations.
- [Microsoft OneDrive:](../../integrations/builtin/app-nodes/n8n-nodes-base.microsoftonedrive/) Fixed a bug preventing more than 200 items from being returned.
- [Spotify:](../../integrations/builtin/app-nodes/n8n-nodes-base.spotify/) Fixed a bug causing the execution to fail if there are more than 1000 search results, also fixed a bug preventing the Get New Releases operation of the Album resource from working as expected.

[fabian wohlgemuth](https://github.com/wohfab)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.159.0...n8n@0.159.1) for this version.\
**Release date:** 2022-01-18

### Core Functionality

- Temporarily removed debug logging for Axios requests.

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.158.0...n8n@0.159.0) for this version.\
**Release date:** 2022-01-16

- [Jenkins](../../integrations/builtin/app-nodes/n8n-nodes-base.jenkins/)

- [GraphQL:](../../integrations/builtin/core-nodes/n8n-nodes-base.graphql/) Added support for additional authentication methods Basic Auth, Digest Auth, OAuth1, OAuth2, and Query Auth.

### Core Functionality

- Added support for executing workflows without an ID through the CLI.
- Fixed a build problem.
- Fixed a bug preventing the tag description from being shown on the canvas.
- Improved build performance by skipping the `node-dev` package during build.

- [Box:](../../integrations/builtin/app-nodes/n8n-nodes-base.box/) Fixed a bug causing some files to be corrupted during download.
- [Philips Hue:](../../integrations/builtin/app-nodes/n8n-nodes-base.philipshue/) Fixed a bug preventing the node from connecting to Philips Hue.
- [Salesforce:](../../integrations/builtin/app-nodes/n8n-nodes-base.salesforce/) Fixed a bug preventing filters on date and datetime fields from working as expected.
- [Supabase:](../../integrations/builtin/app-nodes/n8n-nodes-base.supabase/) Fixed an errorneous documentation link.

[Phil Clifford](https://github.com/philclifford)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.157.1...n8n@0.158.0) for this version.\
**Release date:** 2022-01-09

- [Microsoft Graph Security](../../integrations/builtin/app-nodes/n8n-nodes-base.microsoftgraphsecurity/)
- [SyncroMSP](../../integrations/builtin/app-nodes/n8n-nodes-base.syncromsp/)
- [Supabase](../../integrations/builtin/app-nodes/n8n-nodes-base.supabase/)

- [Edit Image:](../../integrations/builtin/core-nodes/n8n-nodes-base.editimage/) Added Transparent operation.
- [Kafka:](../../integrations/builtin/app-nodes/n8n-nodes-base.kafka/) Added Use Schema Registry option.
- [Kafka Trigger:](../../integrations/builtin/trigger-nodes/n8n-nodes-base.kafkatrigger/) Added Use Schema Registry option.
- [Redis:](../../integrations/builtin/app-nodes/n8n-nodes-base.redis/) Added database field to credentials.
- [Salesforce:](../../integrations/builtin/app-nodes/n8n-nodes-base.salesforce/) Added Account Number field.

### Core Functionality

- Added new external hook when active workflows finished initializing.
- Fixed a bug preventing the personalisation survey from showing up.
- Improved telemetry.

- [Edit Image:](../../integrations/builtin/core-nodes/n8n-nodes-base.editimage/) Fixed a bug causing two items to be returned.
- [iCalendar:](../../integrations/builtin/core-nodes/n8n-nodes-base.converttofile/) Fixed a bug preventing dates in January from working as expected.
- [Merge:](../../integrations/builtin/core-nodes/n8n-nodes-base.merge/) Fixed causing empty binary data to overwrite other binary data on merge.

[Ricardo Georgel](https://github.com/rgeorgel), [Pierre](https://github.com/hnb2), [Vahid Sebto](https://github.com/sebto)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.157.0...n8n@0.157.1) for this version.\
**Release date:** 2022-01-03

### Core Functionality

- Fixed a bug where not all nodes could use the new binary data handling.

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.156.0...n8n@0.157.0) for this version.\
**Release date:** 2022-01-02

- [Function:](../../integrations/builtin/core-nodes/n8n-nodes-base.code/) The node now prevents unsupported data from being returned.
- [Function Item:](../../integrations/builtin/core-nodes/n8n-nodes-base.code/) The node now prevents unsupported data from being returned.
- [HubSpot:](../../integrations/builtin/app-nodes/n8n-nodes-base.hubspot/) Added Engagement resource with Create, Delete, Get, and Get All operations.
- [Notion (Beta):](../../integrations/builtin/app-nodes/n8n-nodes-base.notion/) Upgraded the Notion node: Added Search operation for the Database resource, Get operation for Database Page resource, Archive operation for the Page resource. Also added Simplify Output option and test for credential validity.
- [Wait:](../../integrations/builtin/core-nodes/n8n-nodes-base.wait/) Added new Ignore Bots option.
- [Webhook:](../../integrations/builtin/core-nodes/n8n-nodes-base.webhook/) Added new Ignore Bots option.

### Core Functionality

- Fixed a bug where a wrong number suffix was used after duplicating nodes.

- [HTTP Request:](../../integrations/builtin/core-nodes/n8n-nodes-base.httprequest/) Fixed a bug where using Digest Auth would fail.

[pemontto](https://github.com/pemontto)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.155.2...n8n@0.156.0) for this version.\
**Release date:** 2021-12-25

- [GitLab Trigger:](../../integrations/builtin/trigger-nodes/n8n-nodes-base.gitlabtrigger/) Added new trigger events: Confidential Issue, Confidential Comment, Deployment, Release.
- [Google Drive:](../../integrations/builtin/app-nodes/n8n-nodes-base.googledrive/) Added support for downloading and converting native Google files.
- [Kitemaker:](../../integrations/builtin/app-nodes/n8n-nodes-base.kitemaker/) Added Space ID field to Create operation of Work Item resource.
- [Raindrop:](../../integrations/builtin/app-nodes/n8n-nodes-base.raindrop/) Added Parse Metadata option to Create, Update operations of the Bookmark resource.

### Core Functionality

- Added execution ID to workflow.postExecute hook
- Added response body to UI for failed Axios requests
- Added support for automatically removing new lines from Google Service Account credentials
- Added support for disabling the UI using environment variable
- Fixed a bug causing the wrong expression result to be shown for items from an output other than the first
- Improved binary data management
- Introduced Monaco as new UI code editor

[Arpad Gabor](https://github.com/arpadgabor), [Leo Lou](https://github.com/l4u), [Manuel](https://github.com/tennox)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.154.0...n8n@0.155.2) for this version.\
**Release date:** 2021-12-19

### Core Functionality

- Added support for internationalization (i18n). This functionality is currently in alpha status and breaking changes are to be expected.

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.153.0...n8n@0.154.0) for this version.\
**Release date:** 2021-12-19

- [Plivo:](../../integrations/builtin/app-nodes/n8n-nodes-base.plivo/) Added user agent to all API requests.

### Core Functionality

- Allow deletion of nodes from the canvas using the backspace key
- Fixed an issue causing clicks in the value survey to impact the main view
- Fixed an issue preventing the update panel from closing

- [Todoist:](../../integrations/builtin/app-nodes/n8n-nodes-base.todoist/) Fixed a bug where using the additional field Due Date Time on the Task resource would cause the Create operation to fail.

[Mohammed Huzaif](https://github.com/huzaif-plivo), [Лебедев Иван](https://github.com/X-pech)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.152.0...n8n@0.153.0) for this version.\
**Release date:** 2021-12-11

- [Figma Trigger (Beta)](../../integrations/builtin/trigger-nodes/n8n-nodes-base.figmatrigger/)
- [Workable Trigger](../../integrations/builtin/trigger-nodes/n8n-nodes-base.workabletrigger/)

- [Google Contacts:](../../integrations/builtin/app-nodes/n8n-nodes-base.googlecontacts/) Added Query option to Get All operation, also prevented the node from failing when no contacts are found.
- [HTTP Request:](../../integrations/builtin/core-nodes/n8n-nodes-base.httprequest/) Added support for query-based authentication.
- [Home Assistant:](../../integrations/builtin/app-nodes/n8n-nodes-base.homeassistant/) Added support for loading possible options in the Domain, Service, and Entity ID fields.
- [One Simple API:](../../integrations/builtin/app-nodes/n8n-nodes-base.onesimpleapi/) Added support for Social Profile resources.
- [PagerDuty:](../../integrations/builtin/app-nodes/n8n-nodes-base.pagerduty/) Write scope is now requested upon authentication against the PagerDuty OAuth2 API.

### Core Functionality

- Added frontend for value surveys
- Fixed an issue preventing the recommendation logic from working as expected after selecting a work area
- Fixed an issue where a wrong exit code was sent when running n8n on an unsupported version of Node.js
- Fixed an issue where node options would disappear on hovering when a node isn't selected
- Fixed an issue where the execution id was missing when running n8n in queue mode
- Fixed an issue where execution data was missing when waiting for a webhook in queue mode
- Improved error handling when the n8n port is already in use
- Improved diagnostic events
- Removed toast notification on webhook deletion, added toast notification after node is copied
- Removed default trigger tooltip for polling trigger nodes

- [APITemplate.io:](../../integrations/builtin/app-nodes/n8n-nodes-base.apitemplateio/) Fixed a bug where the Create operation on the Image resource would fail when the Download option isn't enabled.
- [HubSpot:](../../integrations/builtin/app-nodes/n8n-nodes-base.hubspot/) Fixed authentication for new HubSpot applications by using granular scopes when authenticating against the HubSpot OAuth2 API.
- [HubSpot Trigger:](../../integrations/builtin/trigger-nodes/n8n-nodes-base.hubspottrigger/) Fixed authentication for new HubSpot applications by using granular scopes when authenticating against the HubSpot Developer API.
- [Jira Software:](../../integrations/builtin/app-nodes/n8n-nodes-base.jira/) Fixed an issue where the Reporter field would not work as expected on Jira Server instances.
- [Salesforce:](../../integrations/builtin/app-nodes/n8n-nodes-base.salesforce/) Fixed a typo preventing the value in the amount field of from being saved.

[pemontto](https://github.com/pemontto), [Jascha Lülsdorf](https://github.com/buelsenfrucht), [Jonathan Bennetts](https://github.com/Joffcom)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.151.0...n8n@0.152.0) for this version.\
**Release date:** 2021-12-04

- [Google Calendar Trigger](../../integrations/builtin/trigger-nodes/n8n-nodes-base.googlecalendartrigger/)

- [Telegram Trigger:](../../integrations/builtin/trigger-nodes/n8n-nodes-base.telegramtrigger/) Added support for downloading images to channel_post updates.

### Core Functionality

- Added a plus (+) connector to end nodes
- Allowed opening workflows and executions in a new window when using Ctrl + Click
- Enforced type checking for all node parameters
- Fixed a build issue in the custom n8n docker image
- Fixed a memory leak in the UI which could occur when renaming nodes or navigate to another workflow
- Improved stability of internal test workflows
- Improved expression security
- Introduced redirect to a new page and UI error message when trying to open a deleted workflow
- Introduced support for multiple arguments when logging
- Updated the onboarding survey

- [Google BigQuery:](../../integrations/builtin/app-nodes/n8n-nodes-base.googlebigquery/) Fixed a bug preventing pagination from working as expected when the Return All option is enabled.
- [RabbitMQ Trigger:](../../integrations/builtin/trigger-nodes/n8n-nodes-base.rabbitmqtrigger/) Added Trigger to the name of the trigger node.
- [Salesforce:](../../integrations/builtin/app-nodes/n8n-nodes-base.salesforce/) Fixed a typo affecting the Type field of the Opportunity resource.

[Zvonimir Erdelja](https://github.com/zvonimir-ebot7), [m2scared](https://github.com/m2scared)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.150.0...n8n@0.151.0) for this version.\
**Release date:** 2021-11-26

- [DHL](../../integrations/builtin/app-nodes/n8n-nodes-base.dhl/)
- [Grafana](../../integrations/builtin/app-nodes/n8n-nodes-base.grafana/)

### Core Functionality

- Fixed a bug causing connections between nodes to disappear when renaming a newly added node after drawing a connection to its endpoints.
- Fixed a build issue by adding TypeScript definitions for validator.js to CLI package, also fixed a linting issue by removing an unused import.
- Improved the waiting state of trigger nodes to explain when an external event is required.
- Loops are now drawn below their source node.

- [Edit Image:](../../integrations/builtin/core-nodes/n8n-nodes-base.editimage/) Fixed an issue preventing the Composite operation from working correctly in some cases.

[Jonathan Bennetts](https://github.com/Joffcom)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.149.0...n8n@0.150.0) for this version.\
**Release date:** 2021-11-19

- [Jira Software:](../../integrations/builtin/app-nodes/n8n-nodes-base.jira/) Added Components as an additional field.

### Core Functionality

- Fixed a build issue by pinning rudder-sdk-node version 1.0.6 in CLI package.
- Fixed an issue preventing the `n8n import:workflow --separate` CLI command from finding workflows on Windows.
- Further improved the expression security.
- Moved all nodes into separate directories in preparation for internationalization.
- Removing default headers for PUT and PATCH operations when using Axios.
- Revamped the workflow canvas.

- [HTTP Request:](../../integrations/builtin/core-nodes/n8n-nodes-base.httprequest/) Fixed an issue causing the wrong Content-Type header to be set when downloading a file.
- [ServiceNow:](../../integrations/builtin/app-nodes/n8n-nodes-base.servicenow/) Fixed incorrect mapping of incident urgency and impact values.
- [Start:](../../integrations/builtin/core-nodes/n8n-nodes-base.manualworkflowtrigger/) Fixed an issue causing the node to be disabled in a new workflow.
- [Xero:](../../integrations/builtin/app-nodes/n8n-nodes-base.xero/) Fixed an issue causing the node to only fetch the first page when querying the Xero API.

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.148.0...n8n@0.149.0) for this version.\
**Release date:** 2021-11-13

- [One Simple API](../../integrations/builtin/app-nodes/n8n-nodes-base.onesimpleapi/)

- [Edit Image:](../../integrations/builtin/core-nodes/n8n-nodes-base.editimage/) Added Circle Primitive to Draw operation. Also added Composite operation.
- [Zendesk:](../../integrations/builtin/app-nodes/n8n-nodes-base.zendesk/) Added check for API credentials validity.
- [Zulip:](../../integrations/builtin/app-nodes/n8n-nodes-base.zulip/) Added additional field Role to the Update operation of the User resource.

### Core Functionality

- Fixed an issue causing an error message to be thrown when executing a workflow through the CLI.
- Improved expression security by limiting the available process properties.
- Improved the behaviour of internal tests executed through the CLI.
- Updated the owner of the node user's home directory in the custom docker image.

- [Google Tasks:](../../integrations/builtin/app-nodes/n8n-nodes-base.googletasks/) Fixed an issue where the Due Date field had no effect (Update operation) or was unavailable (Create operation).
- [HTTP Request:](../../integrations/builtin/core-nodes/n8n-nodes-base.httprequest/) Fixed an issue where the Content-Length header was not calculated and sent when using the a Body Content Type of Form-Data Multipart.
- [Stripe Trigger:](../../integrations/builtin/trigger-nodes/n8n-nodes-base.stripetrigger/) Fixed an issue preventing the node from being activated when a previously created webhook no longer exists.
- [Toggl Trigger:](../../integrations/builtin/trigger-nodes/n8n-nodes-base.toggltrigger/) Updated the API URL used by the node.

[GeylaniBerk](https://github.com/GeylaniBerk), [Jonathan Bennetts](https://github.com/Joffcom)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.147.1...n8n@0.148.0) for this version.\
**Release date:** 2021-11-05

- [Dropcontact](../../integrations/builtin/app-nodes/n8n-nodes-base.dropcontact/)
- [Respond to Webhook](../../integrations/builtin/core-nodes/n8n-nodes-base.respondtowebhook/)

- [Lemlist:](../../integrations/builtin/app-nodes/n8n-nodes-base.lemlist/) Added additional fields to Create operation of Lead resource.
- [Slack:](../../integrations/builtin/app-nodes/n8n-nodes-base.slack/) Added User Group resource.
- [Todoist:](../../integrations/builtin/app-nodes/n8n-nodes-base.todoist/) Added Update operation to Task resource.
- [Wait:](../../integrations/builtin/core-nodes/n8n-nodes-base.wait/) Improved descriptions of available Respond options.
- [WooCommerce:](../../integrations/builtin/app-nodes/n8n-nodes-base.woocommerce/) Added password field to Crate operation of Customer resource.

### Core Functionality

- Added a hook after workflow creation.
- Fixed a build issue with npm v7 by overriding unwanted behaviour through the .npmrc file.
- Fixed an issue preventing unknown node types from being imported.
- Fixed an issue with the UI falsely indicating a credential can't be selected when using SQLite and multiple credentials with the same name exist.

- [Stripe:](../../integrations/builtin/app-nodes/n8n-nodes-base.stripe/) Fixed an issue where setting additional Metadata fields would not have the expected effect. Also fixed an issue where pagination would not work as expected.
- [Zendesk:](../../integrations/builtin/app-nodes/n8n-nodes-base.zendesk/) Fixed an issue preventing the additional field External ID from being evaulated correctly.

[mizzimizzi](https://github.com/mizzimizzi), [nikozila](https://github.com/nikozila), [Pauline](https://github.com/PaulineDropcontact)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.147.0...n8n@0.147.1) for this version.\
**Release date:** 2021-11-03

### Core Functionality

- Fixed a build issue by moving the `chokidar` dependency to a regular dependency.

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.146.0...n8n@0.147.0) for this version.\
**Release date:** 2021-11-03

- [Local File Trigger](../../integrations/builtin/core-nodes/n8n-nodes-base.localfiletrigger/)

### Core Functionality

- Improved the database migration process to reduce memory footprint.
- Fixed an issue with telemetry by adding an anonymous ID.

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.145.0...n8n@0.146.0) for this version.\
**Release date:** 2021-10-29

- [Microsoft Dynamics CRM](../../integrations/builtin/app-nodes/n8n-nodes-base.microsoftdynamicscrm/)

- [Agile CRM:](../../integrations/builtin/app-nodes/n8n-nodes-base.agilecrm/) Added Filters to Get All operation of Contact and Company resources.
- [Date & Time:](../../integrations/builtin/core-nodes/n8n-nodes-base.datetime/) Ensuring the return values are always of type string.
- [IF:](../../integrations/builtin/core-nodes/n8n-nodes-base.if/) Added support for moment types to Date & Time condition.

### Core Functionality

- Added name and ID of a workflow to its settings.
- Added parameter inputs to be multi-line.
- Fixed an issue with declaring proxies when Axios is used.
- Fixed an issue with serializing arrays and special characters.
- Fixed an issue with updating expressions after renaming a node.

- [HTTP Request:](../../integrations/builtin/core-nodes/n8n-nodes-base.httprequest/) Fixed an issue with the Full Response option not taking effect when used with the Ignore Response Code option.

[Valentina Lilova](https://github.com/valentina98), [Oliver Trajceski](https://github.com/SchnapsterDog)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n%400.144.0...n8n@0.145.0) for this version.\
**Release date:** 2021-10-22

- [AWS Textract](../../integrations/builtin/app-nodes/n8n-nodes-base.awstextract/)
- [Google Drive Trigger](../../integrations/builtin/trigger-nodes/n8n-nodes-base.googledrivetrigger/)

- [Bitbucket Trigger:](../../integrations/builtin/trigger-nodes/n8n-nodes-base.bitbuckettrigger/) Added check for credentials validity. Removed deprecated User and Team resources, and added the Workspace resource.
- [GitHub:](../../integrations/builtin/app-nodes/n8n-nodes-base.github/) Added check for API credentials validity.
- [Home Assistant:](../../integrations/builtin/app-nodes/n8n-nodes-base.homeassistant/) Added check for credentials validity.
- [Jira Software:](../../integrations/builtin/app-nodes/n8n-nodes-base.jira/) Added check for credentials validity.
- [Microsoft OneDrive:](../../integrations/builtin/app-nodes/n8n-nodes-base.microsoftonedrive/) Added functionality to create folder hierarchy automatically upon subfolder creation.
- [Pipedrive:](../../integrations/builtin/app-nodes/n8n-nodes-base.pipedrive/) Added All Users option to Get All operation of Activity resource.
- [Slack:](../../integrations/builtin/app-nodes/n8n-nodes-base.slack/) Increase the Slack default query limit from 5 to 100 in order to reduce number of requests.
- [Twitter:](../../integrations/builtin/app-nodes/n8n-nodes-base.twitter/) Added Tweet Mode additional field to the Search operation of Tweet resource.

### Core Functionality

- Changed `vm2` library version from `3.9.3` to `3.9.5`.
- Fixed an issue with ignoring the response code.
- Fixed an issue with overwriting credentials using environment variables.
- Fixed an issue with using query strings combined with the `x-www-form-urlencoded` content type.
- Introduced telemetry.

- [Jira Software:](../../integrations/builtin/app-nodes/n8n-nodes-base.jira/) Fixed an issue with the Expand option for the Issue resource. Also fixed an issue with using custom fields on Jira Server.
- [Slack:](../../integrations/builtin/app-nodes/n8n-nodes-base.slack/) Fixed an issue with pagination when loading more than 1,000 channels.
- [Strapi:](../../integrations/builtin/app-nodes/n8n-nodes-base.strapi/) Fixed an issue using the Where option of the Get All operation.
- [WooCommerce:](../../integrations/builtin/app-nodes/n8n-nodes-base.woocommerce/) Fixed an issue where a wrong postcode field name was used for the Order resource.

[pemontto](https://github.com/pemontto), [rdd2](https://github.com/rdd2), [robertodamiani](https://github.com/robertodamiani), [Rodrigo Correia](https://github.com/rodrigoscdc)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n%400.143.0...n8n@0.144.0) for this version.\
**Release date:** 2021-10-15

- [Nextcloud:](../../integrations/builtin/app-nodes/n8n-nodes-base.nextcloud/) Added Share operation to the File and Folder resources.
- [Zendesk:](../../integrations/builtin/app-nodes/n8n-nodes-base.zendesk/) Added support for deleting, listing, getting, and recovering suspended tickets. Added the query option for regular tickets. Added assignee emails, internal notes, and public replies options to the update ticket operation.

### Core Functionality

- Improved the autofill behaviour on Google Chrome when entering credentials.

- [Airtable:](../../integrations/builtin/app-nodes/n8n-nodes-base.airtable/) Fixed an issue with the sort field.
- [Cron:](../../integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger/) Set the version of the cron library to 1.7.2.

[Jonathan Bennetts](https://github.com/Joffcom)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n%400.142.0...n8n@0.143.0) for this version.\
**Release date:** 2021-10-14

- [Pipedrive:](../../integrations/builtin/app-nodes/n8n-nodes-base.pipedrive/) Added support for getting activities from deal ID.
- [Facebook Graph API:](../../integrations/builtin/app-nodes/n8n-nodes-base.facebookgraphapi/) Added support for Facebook Graph API versions 11 and 12.

### Core Functionality

- Fixed a build issue affecting a number of AWS nodes.
- Changed workflows to use credential ids primarily (instead of names), allowing users to have different credentials with the same name.

- [FTP:](../../integrations/builtin/core-nodes/n8n-nodes-base.ftp/) Fixed error when opening FTP/SFTP credentials.

[Rodrigo Correia](https://github.com/rodrigoscdc)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n%400.141.1...n8n@0.142.0) for this version.\
**Release date:** 2021-10-07

- [Stop and Error](../../integrations/builtin/core-nodes/n8n-nodes-base.stopanderror/)

### Core Functionality

- Fixed overlapping buttons when viewing on mobile.
- Fixed issue with partial workflow executions when Wait node was last.
- Fixed issue with broken non-JSON requests.
- Node errors now only displayed for executing nodes, not disconnected nodes.
- Automatic save when executing new workflows with Webhook node.
- Fixed an issue with how arrays were serialized for certain nodes.
- Fixed an issue where executions could not be cancelled when running in Main mode.
- Duplicated workflows now open in a new window.

- [HTTP Request:](../../integrations/builtin/core-nodes/n8n-nodes-base.httprequest/) Fixed 'Ignore response code' flag.
- [Rundeck:](../../integrations/builtin/app-nodes/n8n-nodes-base.rundeck/) Fixed issue with async loading of credentials.
- [SeaTable:](../../integrations/builtin/app-nodes/n8n-nodes-base.seatable/) Fixed issue when entering a Baser URI with a trailing slash.

[Günther](https://github.com/erbg), [Tom Klingenberg](https://github.com/ktomk)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n%400.141.0...n8n@0.141.1) for this version.\
**Release date:** 2021-10-01

### Core Functionality

- Fixed issue with body formatting of `x-form-www-urlencoded` requests.

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n%400.140.0...n8n@0.141.0) for this version.\
**Release date:** 2021-09-30

- [Grist](../../integrations/builtin/app-nodes/n8n-nodes-base.grist/)
- [SeaTable](../../integrations/builtin/app-nodes/n8n-nodes-base.seatable/)
- [SeaTable Trigger](../../integrations/builtin/trigger-nodes/n8n-nodes-base.seatabletrigger/)
- [urlscan.io](../../integrations/builtin/app-nodes/n8n-nodes-base.urlscanio/)

### Core Functionality

- Performance improvements in Editor UI
- Improved error reporting

[Alex Hall](https://github.com/alexmojaki), [Tom Klingenberg](https://github.com/ktomk)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n%400.139.1...n8n@0.140.0) for this version.\
**Release date:** 2021-09-29

- [Splunk](../../integrations/builtin/app-nodes/n8n-nodes-base.splunk/)

- [Telegram:](../../integrations/builtin/app-nodes/n8n-nodes-base.telegram/) Added binary data support to the Send Animation, Send Audio, Send Document, Send Photo, Send Video, and Send Sticker operations.

### Core Functionality

- Fixed startup behavior when running n8n in scaled mode (i.e. `skipWebhoooksDeregistrationOnShutdown` is enabled).
- Fixed behavior around handling empty response bodies.
- Fixed an issue with handling of refresh tokens.

[pemontto](https://github.com/pemontto)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n%400.139.0...n8n@0.139.1) for this version.\
**Release date:** 2021-09-23

### Core Functionality

- Bug fixes and improvements for Editor UI.

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n%400.138.0...n8n@0.139.0) for this version.\
**Release date:** 2021-09-22

- [Elastic Security](../../integrations/builtin/app-nodes/n8n-nodes-base.elasticsecurity/)
- [Misp](../../integrations/builtin/app-nodes/n8n-nodes-base.misp/)
- [Netlify](../../integrations/builtin/app-nodes/n8n-nodes-base.netlify/)
- [Netlify Trigger](../../integrations/builtin/trigger-nodes/n8n-nodes-base.netlifytrigger/)

- [HubSpot Trigger:](../../integrations/builtin/trigger-nodes/n8n-nodes-base.hubspottrigger/) Authentication method changed to OAuth2.
- [Wait:](../../integrations/builtin/core-nodes/n8n-nodes-base.wait/) Added improved status messages for Wait behavior.

### Core Functionality

- Updated node design to include support for versioned nodes.

- [SendGrid:](../../integrations/builtin/app-nodes/n8n-nodes-base.sendgrid/) Fixed issue with adding contacts to lists.

[Matías Aguirre](https://github.com/omab)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n%400.137.0...n8n@0.138.0) for this version.\
**Release date:** 2021-09-15

- Item Lists
- [Magento 2](../../integrations/builtin/app-nodes/n8n-nodes-base.magento2/)

- [Baserow:](../../integrations/builtin/app-nodes/n8n-nodes-base.baserow/) Added the following filter options: Contains, Contains Not, Date Before Date, Date After Date, Filename Contains, Is Empty, Is Not Empty, Link Row Has, Link Row Does Not Have, Single Select Equal, and Single Select Not Equal.
- [Pipedrive:](../../integrations/builtin/app-nodes/n8n-nodes-base.pipedrive/) Added support for Notes on Leads.
- [WeKan:](../../integrations/builtin/app-nodes/n8n-nodes-base.wekan/) Added Sort field to the Card resource.

### Core Functionality

- General UX improvements to the Editor UI.
- Fixed an issue with the `PayloadTooLargeError`.

- [Lemlist:](../../integrations/builtin/app-nodes/n8n-nodes-base.lemlist/) Fixed issue where events were not sent in the correct property.
- [Notion:](../../integrations/builtin/app-nodes/n8n-nodes-base.notion/) Fixed issue listed unnamed databases.

[bramknuever](https://github.com/bramknuever), [Chris Magnuson](https://github.com/ChrisMagnuson)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n%400.136.0...n8n@0.137.0) for this version.\
**Release date:** 2021-09-05

- [Freshservice](../../integrations/builtin/app-nodes/n8n-nodes-base.freshservice/)

- [Clockify:](../../integrations/builtin/app-nodes/n8n-nodes-base.clockify/) Added Task resource.
- [HubSpot:](../../integrations/builtin/app-nodes/n8n-nodes-base.hubspot/) Added dropdown selection for Properties and Properties with History filters for Get All Deals operations.
- [Mautic:](../../integrations/builtin/app-nodes/n8n-nodes-base.mautic/) Added Campaign Contact resource.
- [MongoDB:](../../integrations/builtin/app-nodes/n8n-nodes-base.mongodb/) Added ability to query documents by '\_id'.
- [MQTT:](../../integrations/builtin/app-nodes/n8n-nodes-base.mqtt/) Added SSL/TLS support to authentication.
- [MQTT Trigger:](../../integrations/builtin/trigger-nodes/n8n-nodes-base.mqtttrigger/) Added SSL/TLS support to authentication.
- [Salesforce:](../../integrations/builtin/app-nodes/n8n-nodes-base.salesforce/) Added File Extension option to the Document resource. Added Type field to Task resource.
- [Sms77:](../../integrations/builtin/app-nodes/n8n-nodes-base.sms77/) Added Voice Call resource. Added the following options to SMS resource: Debug, Delay, Foreign ID, Flash, Label, No Reload, Performance Tracking, TTL.
- [Zendesk:](../../integrations/builtin/app-nodes/n8n-nodes-base.zendesk/) Added Organization resource. Added Get Organizations and Get Related Data operations to User resource.

### Core Functionality

- Added execution ID to logs of queue processes.
- Added description to operation errors.
- Added ability for webhook processes to wake waiting executions.

- [HubSpot:](../../integrations/builtin/app-nodes/n8n-nodes-base.hubspot/) Fixed issue with 'RequestAllItems' API.
- [WordPress:](../../integrations/builtin/app-nodes/n8n-nodes-base.wordpress/) Fixed issue with 'RequestAllItems' API only returning the first 10 items.

[André Matthies](https://github.com/matthiez), DeskYT, [Frederic Alix](https://github.com/fredericalix), [Jonathan Bennetts](https://github.com/Joffcom), [Ketan Somvanshi](https://github.com/KetanSomvanshi), [Luiz Eduardo de Oliveira Fonseca](https://github.com/luizeof), [TheFSilver](https://github.com/TheFSilver)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n%400.135.3...n8n@0.136.0) for this version.\
**Release date:** 2021-08-30

- [Notion:](../../integrations/builtin/app-nodes/n8n-nodes-base.notion/) Added handling of Rich Text when simplifying data.

### Core Functionality

- General UI design improvements.
- Improved errors messages during debugging of custom nodes.
- All packages upgraded to TypeScript 4.3.5, improved linting and formatting.

- [FTP:](../../integrations/builtin/core-nodes/n8n-nodes-base.ftp/) Fixed issue where incorrect paths were displayed when using the node.
- [Wait:](../../integrations/builtin/core-nodes/n8n-nodes-base.wait/) Fixed issue when receiving multiple files using On Webhook Call operation.
- [Webhook:](../../integrations/builtin/core-nodes/n8n-nodes-base.webhook/) Fixed issue when receiving multiple files.

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n%400.135.2...n8n@0.135.3) for this version.\
**Release date:** 2021-08-27

### Core Functionality

- Fixed Canvas UI inconsistencies when duplicating workflows.
- Added log message during upgrade to indicate database migration has started.
- General improvements to parameter labels and tooltips.

[Kyle Mohr](https://github.com/kylefmohr)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n%400.135.1...n8n@0.135.2) for this version.\
**Release date:** 2021-08-26

### Core Functionality

- Added expression support for credentials.
- Fixed performance issues when loading credentials.

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n%400.135.0...n8n@0.135.1) for this version.\
**Release date:** 2021-08-23

### Core Functionality

- Fixed an issue where if n8n was shutdown during database migration while upgrading versions, errors would result upon next startup.

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n%400.134.0...n8n@0.135.0) for this version.\
**Release date:** 2021-08-22

Please note that this version contains breaking changes. You can read more about it [here](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md#01350). The features that introduced the breaking changes have been flagged below.

- [Form.io Trigger](../../integrations/builtin/trigger-nodes/n8n-nodes-base.formiotrigger/)
- [Formstack Trigger](../../integrations/builtin/trigger-nodes/n8n-nodes-base.formstacktrigger/)
- [Wait](../../integrations/builtin/core-nodes/n8n-nodes-base.wait/)

### Core Functionality

- In-node method for accessing binary data is now asynchronous and a helper function for this has been implemented.
- Credentials are now loaded from the database on-demand.
- Webhook UUIDs are automatically updated when duplicating a workflow.
- Fixed an issue when referencing values before loops.

- [Interval:](../../integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger/) Fixed issue where entering too large a value (> 2147483647ms) resulted in an interval of 1sec being used rather than an error.

[Aniruddha Adhikary](https://github.com/aniruddha-adhikary), [lublak](https://github.com/lublak), [parthibanbalaji](https://github.com/parthibanbalaji)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n%400.133.0...n8n@0.134.0) for this version.\
**Release date:** 2021-08-15

- [AWS DynamoDB:](../../integrations/builtin/app-nodes/n8n-nodes-base.awsdynamodb/) Added Scan option to Item > Get All operation.
- [Google Drive:](../../integrations/builtin/app-nodes/n8n-nodes-base.googledrive/) Added File Name option to File > Update operation.
- [Mautic:](../../integrations/builtin/app-nodes/n8n-nodes-base.mautic/) Added the following fields to Company resource: Address, Annual Revenue, Company Email, Custom Fields, Description, Fax, Industry, Number of Employees, Phone, Website.
- [Notion:](../../integrations/builtin/app-nodes/n8n-nodes-base.notion/) Added Timezone option when inserting Date fields.
- [Pipedrive:](../../integrations/builtin/app-nodes/n8n-nodes-base.pipedrive/) Added the following Filters options to the Deal > Get All operation: Predefined Filter, Stage ID, Status, and User ID.
- [QuickBooks:](../../integrations/builtin/app-nodes/n8n-nodes-base.quickbooks/) Added the Transaction resource and Get Report operation.

### Core Functionality

- Integrated [Nodelinter](../../integrations/creating-nodes/test/node-linter/) in n8n.
- Fix to add a trailing slash (`/`) to all webhook URLs for proper functionality.

- [AWS SES:](../../integrations/builtin/app-nodes/n8n-nodes-base.awsses/) Fixed issue where special characters in the message were not encoded.
- [Baserow:](../../integrations/builtin/app-nodes/n8n-nodes-base.baserow/) Fixed issue where Create operation inserted null values.
- [HubSpot:](../../integrations/builtin/app-nodes/n8n-nodes-base.hubspot/) Fixed issue when sending context parameter.

[calvintwr](https://github.com/calvintwr), [CFarcy](https://github.com/CFarcy), [Jeremie Dokime](https://github.com/dokime7), [Michael Hirschler](https://github.com/mvhirsch), [Rodrigo Correia](https://github.com/rodrigoscdc), [sol](https://github.com/5pecia1)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n%400.132.2...n8n@0.133.0) for this version.\
**Release date:** 2021-08-08

- [Monica CRM](../../integrations/builtin/app-nodes/n8n-nodes-base.monicacrm/)

- [HTTP Request:](../../integrations/builtin/core-nodes/n8n-nodes-base.httprequest/) Added Follow All Redirects option.
- [Salesforce:](../../integrations/builtin/app-nodes/n8n-nodes-base.salesforce/) Added Record Type ID field.

### Core Functionality

- Fixed UI lag when editing large workflows.

- [Nextcloud:](../../integrations/builtin/app-nodes/n8n-nodes-base.nextcloud/) Fixed issue where List operation on an empty Folder returned an error.
- [Spotify:](../../integrations/builtin/app-nodes/n8n-nodes-base.spotify/) Fixed issues with pagination and infinite executions.

[Jacob Burrell](https://github.com/jacobburrell), [Лебедев Иван](https://github.com/X-pech)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.132.1...n8n@0.132.2) for this version.\
**Release date:** 2021-08-02

- [Interval:](../../integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger/) Fixed issue with infinite executions.

[Лебедев Иван](https://github.com/X-pech)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.132.0...n8n@0.132.1) for this version.\
**Release date:** 2021-08-02

### Core Functionality

- Changed TypeORM version to 0.2.34

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.131.0...n8n@0.132.0) for this version.\
**Release date:** 2021-08-01

- [Freshworks CRM](../../integrations/builtin/app-nodes/n8n-nodes-base.freshworkscrm/)
- [Google Perspective](../../integrations/builtin/app-nodes/n8n-nodes-base.googleperspective/)
- [Marketstack](../../integrations/builtin/app-nodes/n8n-nodes-base.marketstack/)
- [NocoDB](../../integrations/builtin/app-nodes/n8n-nodes-base.nocodb/)

- [Facebook Trigger:](../../integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/) Added Fields parameter.
- [Gmail:](../../integrations/builtin/app-nodes/n8n-nodes-base.gmail/) Added Sender Name parameter.
- [Home Assistant:](../../integrations/builtin/app-nodes/n8n-nodes-base.homeassistant/) Added Event resource.
- [Pipedrive:](../../integrations/builtin/app-nodes/n8n-nodes-base.pipedrive/) Added Deal Product resource.
- [Salesforce:](../../integrations/builtin/app-nodes/n8n-nodes-base.salesforce/) Added Document resource with Upload operation.
- [WooCommerce:](../../integrations/builtin/app-nodes/n8n-nodes-base.woocommerce/) Added Customer resource.

### Core Functionality

- Fixed an issue for large internal values.

[Ed Linklater](https://github.com/edlinklater), [Rodrigo Correia](https://github.com/rodrigoscdc)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.130.0...n8n@0.131.0) for this version.\
**Release date:** 2021-07-24

Please note that this version contains a breaking change. You can read more about it [here](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md#01310). The features that introduced the breaking changes have been flagged below.

- [Webex by Cisco](../../integrations/builtin/app-nodes/n8n-nodes-base.ciscowebex/)
- [Webex by Cisco Trigger](../../integrations/builtin/trigger-nodes/n8n-nodes-base.ciscowebextrigger/)

- [Pipedrive:](../../integrations/builtin/app-nodes/n8n-nodes-base.pipedrive/) Added Lead resource. Added Search operation to Organization resource.
- [Taiga Trigger:](../../integrations/builtin/trigger-nodes/n8n-nodes-base.taigatrigger/) Added Resource and Operations filters.

### Core Functionality

- Added Continue-on-fail support to all nodes.
- Added new version notifications.
- Added Refresh List for remote options lists.
- Added `$position` expression variable to return the index of an item within a list.

- [Spreadsheet File:](../../integrations/builtin/core-nodes/n8n-nodes-base.converttofile/) Fixed issue when saving dates.

[Anthr@x](https://github.com/AnthraX1), [Felipe Cecagno](https://github.com/fcecagno)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.129.0...n8n@0.130.0) for this version.\
**Release date:** 2021-07-18

Please note that this version contains a breaking change. You can read more about it \[here\](https://github.com/n8n-io/n8n/ blob/master/packages/cli/BREAKING-CHANGES.md#01300). The features that introduced the breaking changes have been flagged below.

- [AWS DynamoDB](../../integrations/builtin/app-nodes/n8n-nodes-base.awsdynamodb/)
- [Elasticsearch](../../integrations/builtin/app-nodes/n8n-nodes-base.elasticsearch/)
- [ServiceNow](../../integrations/builtin/app-nodes/n8n-nodes-base.servicenow/)

- [Kafka Trigger:](../../integrations/builtin/trigger-nodes/n8n-nodes-base.kafkatrigger/) Added Read Messages From Beginning option.
- [Salesforce:](../../integrations/builtin/app-nodes/n8n-nodes-base.salesforce/) Added Sandbox Environment Type for OAuth2 credentials.
- [Taiga:](../../integrations/builtin/app-nodes/n8n-nodes-base.taiga/) Added Epic, Task, and User Story operations.
- [TheHive:](../../integrations/builtin/app-nodes/n8n-nodes-base.thehive/) Added Custom Fields option to the available Additional Fields.

### Core Functionality

- Fixed an issue where failed workflows were displayed as "running".
- Fixes issues with uncaught errors.

- [Notion:](../../integrations/builtin/app-nodes/n8n-nodes-base.notion/) Fixed issue when filtering field data type.

[Michael Hirschler](https://github.com/mvhirsch), [Mika Luhta](https://github.com/mluhta), [Pierre Lanvin](https://github.com/planvin)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.128.0...n8n@0.129.0) for this version.\
**Release date:** 2021-07-12

- [Baserow](../../integrations/builtin/app-nodes/n8n-nodes-base.baserow/)

- [SSH:](../../integrations/builtin/core-nodes/n8n-nodes-base.ssh/) Fixed issue with access rights when downloading files.

[Jérémie Pardou-Piquemal](https://github.com/jrmi)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.127.0...n8n@0.128.0) for this version.\
**Release date:** 2021-07-11

- [Home Assistant](../../integrations/builtin/app-nodes/n8n-nodes-base.homeassistant/)
- [Stripe](../../integrations/builtin/app-nodes/n8n-nodes-base.stripe/)

- [HTTP Request:](../../integrations/builtin/core-nodes/n8n-nodes-base.httprequest/) Added support for arrays in Querystring. Any parameter appearing multiple times with the same name is grouped into an array.
- [Mautic:](../../integrations/builtin/app-nodes/n8n-nodes-base.mautic/) Added Contact Segment resource.
- [Telegram:](../../integrations/builtin/app-nodes/n8n-nodes-base.telegram/) Added Delete operation to the Message resource.

### Core Functionality

- Performance improvement for loading of historical executions (> 3mil) when using Postgres.
- Fixed error handling for unending workflows and display of "unknown" workflow status.
- Fixed format of Workflow ID when downloading from UI Editor to enable compatibility with importing from CLI.

- [Microsoft SQL:](../../integrations/builtin/app-nodes/n8n-nodes-base.microsoftsql/) Fixed an issue with sending the connectionTimeout parameter, and creating and updating data using columns with spaces.

[Kaito Udagawa](https://github.com/umireon), [Rodrigo Correia](https://github.com/rodrigoscdc)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.126.1...n8n@0.127.0) for this version.\
**Release date:** 2021-07-04

Please note that this version contains a breaking change. You can read more about it [here](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md#01270). The features that introduced the breaking changes have been flagged below.

- [Airtable:](../../integrations/builtin/app-nodes/n8n-nodes-base.airtable/) Added Bulk Size option to all Operations.
- [Box:](../../integrations/builtin/app-nodes/n8n-nodes-base.box/) Added Share operation to File and Folder resources.
- [Salesforce:](../../integrations/builtin/app-nodes/n8n-nodes-base.salesforce/) Added Last Name field to Update operation on Contact resource.
- [Zoho CRM:](../../integrations/builtin/app-nodes/n8n-nodes-base.zohocrm/) Added Account, Contact, Deal, Invoice, Product, Purchase, Quote, Sales Order, and Vendor resources.

### Core Functionality

- Added a workflow testing framework using a new CLI command to execute all desired workflows. Run `n8n executeBatch --help` for details.
- Added support to display binary video content in Editor UI.

- [Google Sheets:](../../integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/) Fixed an issue with handling 0 value that resulted in empty cells.
- [SSH:](../../integrations/builtin/core-nodes/n8n-nodes-base.ssh/) Fixed an issue with setting passphrases.

[flybluewolf](https://github.com/flybluewolf), [Kaito Udagawa](https://github.com/umireon)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.126.0...n8n@0.126.1) for this version.\
**Release date:** 2021-06-29

### Core Functionality

- Fixed issues with keyboard shortcuts when a modal was open.

- [Microsoft SQL:](../../integrations/builtin/app-nodes/n8n-nodes-base.microsoftsql/) Fixed an issue with handling of Boolean values when inserting.
- [Pipedrive:](../../integrations/builtin/app-nodes/n8n-nodes-base.pipedrive/) Fixed an issue with the node icon.

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.125.0...n8n@0.126.0) for this version.\
**Release date:** 2021-06-27

- [Action Network](../../integrations/builtin/app-nodes/n8n-nodes-base.actionnetwork/)
- [Google Docs](../../integrations/builtin/app-nodes/n8n-nodes-base.googledocs/)

- [AWS S3:](../../integrations/builtin/app-nodes/n8n-nodes-base.awss3/) Added Delete operation to the Bucket Resource.
- [Google Analytics:](../../integrations/builtin/app-nodes/n8n-nodes-base.googleanalytics/) Added Dimension Filters to the available Additional Fields.
- [HTTP Request:](../../integrations/builtin/core-nodes/n8n-nodes-base.httprequest/) Added Split Into Items option.
- [MQTT:](../../integrations/builtin/app-nodes/n8n-nodes-base.mqtt/) Added mqqts protocol for MQTT credentials.
- [QuickBooks:](../../integrations/builtin/app-nodes/n8n-nodes-base.quickbooks/) Added Purchase resource with Get and Get All operations.

### Core Functionality

- Templates from the [n8n Workflows](https://n8n.io/workflows) page can now be directly imported by appending `/workflows/templates/<templateId>` to your instance base URL. For example, `localhost:5678/workflows/templates/1142`.
- Added new Editor UI shortcuts. See [Keyboard Shortcuts](../../keyboard-shortcuts/) for details.
- Fixed an issue causing console errors when deleting a node from the canvas.

- [Ghost:](../../integrations/builtin/app-nodes/n8n-nodes-base.ghost/) Fixed an issue with the Get All operation functionality.
- [Google Analytics:](../../integrations/builtin/app-nodes/n8n-nodes-base.googleanalytics/) Fixed an issue that caused an error when attempting to sort with no data present.
- [Microsoft SQL:](../../integrations/builtin/app-nodes/n8n-nodes-base.microsoftsql/) Fixed an issue when escaping single quotes and mapping empty fields.
- [Notion:](../../integrations/builtin/app-nodes/n8n-nodes-base.notion/) Fixed an issue with pagination of databases and users.

[calvintwr](https://github.com/calvintwr), [Jan Baykara](https://github.com/janbaykara)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.124.1...n8n@0.125.0) for this version.\
**Release date:** 2021-06-20

- [Spotify:](../../integrations/builtin/app-nodes/n8n-nodes-base.spotify/) Added Search operation to Album, Artist, Playlist, and Track resources, and Resume and Volume operations to Player resource.

### Core Functionality

- Implemented new design of the Nodes Panel, adding categories and subcategories, along with improved search. For full details, see the [commits](https://github.com/n8n-io/n8n/commit/0470740737c5ee199447a68b7277c43be2042976).

- [MySQL:](../../integrations/builtin/app-nodes/n8n-nodes-base.mysql/) Fixed an issue where n8n was unable to save data due to collation, resulting in workflows ending with Unknown status.

[Amudhan Manivasagam](https://github.com/smamudhan), [Carlos Alexandro Becker](https://github.com/caarlos0), [Kaito Udagawa](https://github.com/umireon)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.124.0...n8n@0.124.1) for this version.\
**Release date:** 2021-06-16

### Core Functionality

- Improved error log messages
- Fixed an issue where the tags got removed when deactivating the workflow or updating settings
- Removed the circular references for the error caused by the request library

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.123.1...n8n@0.124.0) for this version.\
**Release date:** 2021-06-13

- [Google Drive:](../../integrations/builtin/app-nodes/n8n-nodes-base.googledrive/) Added APP Properties and Properties options to the Upload operation of the File resource
- [HTTP Request:](../../integrations/builtin/core-nodes/n8n-nodes-base.httprequest/) Added the functionality to log the request to the browser console for testing
- [Notion:](../../integrations/builtin/app-nodes/n8n-nodes-base.notion/) Added the Include Time parameter date field types
- [Salesforce:](../../integrations/builtin/app-nodes/n8n-nodes-base.salesforce/) Added Upsert operation to Account, Contact, Custom Object, Lead, and Opportunity resources
- [Todoist:](../../integrations/builtin/app-nodes/n8n-nodes-base.todoist/) Added the Description option to the Task resource

### Core Functionality

- Implemented the functionality to display the error details in a toast message for trigger nodes
- Improved error handling by removing circular references from API errors

- [Jira:](../../integrations/builtin/app-nodes/n8n-nodes-base.jira/) Fixed an issues with the API version and fixed an issue with fetching the custom fields for the Issue resource

[Jean M](https://github.com/jemos), [romaincolombo-daily](https://github.com/romaincolombo-daily), [Thomas Jost](https://github.com/Schnouki), [Vincent](https://github.com/vbouchet31)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.123.0...n8n@0.123.1) for this version.\
**Release date:** 2021-06-06

### Core Functionality

- Fixed a build issue for missing node icons

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.122.3...n8n@0.123.0) for this version.\
**Release date:** 2021-06-06

- [Git](../../integrations/builtin/core-nodes/n8n-nodes-base.git/)
- [Microsoft To Do](../../integrations/builtin/app-nodes/n8n-nodes-base.microsofttodo/)

- [Pipedrive:](../../integrations/builtin/app-nodes/n8n-nodes-base.pipedrive/) Added a feature to fetch data from the Pipedrive API, added Search operation to the Deals resource, and added custom fields option
- [Spotify:](../../integrations/builtin/app-nodes/n8n-nodes-base.spotify/) Added My Data resource

### Core Functionality

- Fixed issues with NodeViewNew navigation handling
- Fixed an issue with the view crashing with large requests

- [ASW Transcribe:](../../integrations/builtin/app-nodes/n8n-nodes-base.awstranscribe/) Fixed issues with options

[Rodrigo Correia](https://github.com/rodrigoscdc), [Sam Roquitte](https://github.com/samr28)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.122.2...n8n@0.122.3) for this version.\
**Release date:** 2021-06-04

### Core Functionality

- Fixed error messages for the text area field
- Added the missing `winston` dependency
- Fixed an issue with adding values using the Variable selector. The deleted values don't reappear
- Fixed an issue with the Error Workflows not getting executed in the queue mode

- [Notion:](../../integrations/builtin/app-nodes/n8n-nodes-base.notion/) Fixed an issue with parsing the last edited time

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.122.1...n8n@0.122.2) for this version.\
**Release date:** 2021-05-31

- [Function:](../../integrations/builtin/core-nodes/n8n-nodes-base.code/) Added console.log support for writing to browser console
- [Function Item:](../../integrations/builtin/core-nodes/n8n-nodes-base.code/) Added console.log support for writing to browser console

### Core Functionality

- Fixed an issue that enables clicks on tags
- Fixed an issue with escaping workflow name
- Fixed an issue with selecting variables in the Expression Editor

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.122.0...n8n@0.122.1) for this version.\
**Release date:** 2021-05-30

### Core Functionality

- Fixed an issue with the order in migration rollback

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.121.0...n8n@0.122.0) for this version.\
**Release date:** 2021-05-30

- [AWS Transcribe](../../integrations/builtin/app-nodes/n8n-nodes-base.awstranscribe/)
- [SSH](../../integrations/builtin/core-nodes/n8n-nodes-base.ssh/)
- [UptimeRobot](../../integrations/builtin/app-nodes/n8n-nodes-base.uptimerobot/)

- [DeepL:](../../integrations/builtin/app-nodes/n8n-nodes-base.deepl/) Added support for Free API
- [Function:](../../integrations/builtin/core-nodes/n8n-nodes-base.code/) Added the functionality to log console.log messages to the browser console
- [Function Item:](../../integrations/builtin/core-nodes/n8n-nodes-base.code/) Added the functionality to log console.log messages to the browser console

### Core Functionality

- Changed `bcrypt` library from `@node-rs/bcrypt` to `bcryptjs`
- Fixed an issue with optional parameters that have the same name
- Added the functionality to tag workflows
- Fixed errors in the Expression Editor
- Fixed an issue with nodes that only get connected to the second input. This solves the issue of copying and pasting the workflows where only one output of the IF node gets connected to a node

- [Google Drive:](../../integrations/builtin/app-nodes/n8n-nodes-base.googledrive/) Fixed an issue with the Drive resource
- [Notion:](../../integrations/builtin/app-nodes/n8n-nodes-base.notion/) Fixed an issue with the filtering fields type and fixed an issue with the link option
- [Switch:](../../integrations/builtin/core-nodes/n8n-nodes-base.switch/) Fixed an issue with the Expression mode

[Alexander Mustafin](https://github.com/sashker)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.121.0...n8n@0.121.1) for this version.\
**Release date:** 2021-06-01

### Core Functionality

- Fixed an issue with copying the output values
- Fixed issues with the Expression Editor
- Made improvements to the Expression Editor

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.120.0...n8n@0.121.0) for this version.\
**Release date:** 2021-05-20

- [Notion](../../integrations/builtin/app-nodes/n8n-nodes-base.notion/)
- [Notion Trigger](../../integrations/builtin/trigger-nodes/n8n-nodes-base.notiontrigger/)

- [GraphQL:](../../integrations/builtin/core-nodes/n8n-nodes-base.graphql/) Added Header Auth authentication method
- [Twilio:](../../integrations/builtin/app-nodes/n8n-nodes-base.twilio/) Added API Key authentication method

- [HubSpot:](../../integrations/builtin/app-nodes/n8n-nodes-base.hubspot/) Fixed an issue with pagination for Deals resource
- [Keap:](../../integrations/builtin/app-nodes/n8n-nodes-base.keap/) Fixed an issue with the data type of the Order Title field
- Orbit: Fixed an issue with the activity type in Post operation
- [Slack:](../../integrations/builtin/app-nodes/n8n-nodes-base.slack/) Fixed an issue with the Get Profile operation
- [Strava:](../../integrations/builtin/app-nodes/n8n-nodes-base.strava/) Fixed an issue with the paging parameter

[Jacob Spizziri](https://github.com/jspizziri)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.119.0...n8n@0.120.0) for this version.\
**Release date:** 2021-05-17

- [iCalendar](../../integrations/builtin/core-nodes/n8n-nodes-base.converttofile/)

- [Google Cloud Firestore:](../../integrations/builtin/app-nodes/n8n-nodes-base.googlecloudfirestore/) Added the functionality for GeoPoint parsing and added ISO-8601 format for date validation
- [IMAP Email:](../../integrations/builtin/core-nodes/n8n-nodes-base.emailimap/) Added the Force reconnect option
- [Paddle:](../../integrations/builtin/app-nodes/n8n-nodes-base.paddle/) Added the Use Sandbox environment API parameter
- [Spotify:](../../integrations/builtin/app-nodes/n8n-nodes-base.spotify/) Added the Position parameter to the Add operation of the Playlist resource
- [WooCommerce:](../../integrations/builtin/app-nodes/n8n-nodes-base.woocommerce/) Added the Include Credentials in Query parameter

### Core Functionality

- Added await to hooks to fix issues with the `Unknown` status of the workflows
- Changed the data type of the `credentials_entity` field for MySQL database to fix issues with long credentials
- Fixed an issue with the ordering of the executions when the list is auto-refreshed
- Added the functionality that allows reading sibling parameters

- [Clockify Trigger:](../../integrations/builtin/trigger-nodes/n8n-nodes-base.clockifytrigger/) Fixed an issue that occurred when the node returned an empty array
- [Google Cloud Firestore:](../../integrations/builtin/app-nodes/n8n-nodes-base.googlecloudfirestore/) Fixed an issue with parsing empty document, and an issue with the detection of date
- [HubSpot:](../../integrations/builtin/app-nodes/n8n-nodes-base.hubspot/) Fixed an issue with the Return All option

DeskYT, Daniel Lazaro, [DerEnderKeks](https://github.com/DerEnderKeks), [mdasmendel](https://github.com/mdasmendel)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.118.1...n8n@0.119.0) for this version.\
**Release date:** 2021-05-09

- [AWS Comprehend:](../../integrations/builtin/app-nodes/n8n-nodes-base.awscomprehend/) Added the Detect Entities operation
- [AWS Lambda:](../../integrations/builtin/app-nodes/n8n-nodes-base.awslambda/) Added the ability to list functions recursively if the number of functions exceeds 50
- [Google Analytics:](../../integrations/builtin/app-nodes/n8n-nodes-base.googleanalytics/) Added pagination to the Report resource
- [Mailjet:](../../integrations/builtin/app-nodes/n8n-nodes-base.mailjet/) Added Reply To parameter
- [Redis:](../../integrations/builtin/app-nodes/n8n-nodes-base.redis/) Added the Increment operation
- [Spreadsheet File:](../../integrations/builtin/core-nodes/n8n-nodes-base.converttofile/) Added the Header Row option
- [Webflow Trigger:](../../integrations/builtin/trigger-nodes/n8n-nodes-base.webflowtrigger/) Added Collection Item Created, Collection Item Updated, and Collection Item Deleted events

### Core Functionality

- Implemented timeout for subworkflows
- Removed the deregistration webhooks functionality from the webhook process

- [Google Cloud Firestore:](../../integrations/builtin/app-nodes/n8n-nodes-base.googlecloudfirestore/) Fixed an issue with parsing null value
- [Google Sheets:](../../integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/) Fixed an issue with the Key Row parameter
- [HubSpot:](../../integrations/builtin/app-nodes/n8n-nodes-base.zohocrm/) Fixed an issue with the authentication

[Nikita](https://github.com/Rirush)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.118.0...n8n@0.118.1) for this version.\
**Release date:** 2021-05-05

### Core Functionality

- Fixed an issue with error workflows

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.117.0...n8n@0.118.0) for this version.\
**Release date:** 2021-05-02

Please note that this version contains a breaking change. You can read more about it [here](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md#01180). The features that introduced the breaking changes have been flagged below.

- [Kitemaker](../../integrations/builtin/app-nodes/n8n-nodes-base.kitemaker/)
- [MQTT](../../integrations/builtin/app-nodes/n8n-nodes-base.mqtt/)

- [CrateDB:](../../integrations/builtin/app-nodes/n8n-nodes-base.cratedb/) Added query parameters. The Execute Query operation returns the result from all queries executed instead of just one of the results.
- [ERPNext:](../../integrations/builtin/app-nodes/n8n-nodes-base.erpnext/) Added support for self-hosted ERPNext instances
- [FTP:](../../integrations/builtin/core-nodes/n8n-nodes-base.ftp/) Added the functionality to delete folders
- [Google Calendar:](../../integrations/builtin/app-nodes/n8n-nodes-base.googlecalendar/) Added the Continue on Fail functionality
- [Google Drive:](../../integrations/builtin/app-nodes/n8n-nodes-base.googledrive/) Added the functionality to add file name when downloading files
- [Gmail:](../../integrations/builtin/app-nodes/n8n-nodes-base.gmail/) Added functionality to handle multiple binary properties
- [Microsoft Outlook:](../../integrations/builtin/app-nodes/n8n-nodes-base.microsoftoutlook/) Added Is Read and Move option to the Message resource
- [Postgres:](../../integrations/builtin/app-nodes/n8n-nodes-base.postgres/) Added query parameters. The Execute Query operation returns the result from all queries executed instead of just one of the results.
- [QuestDB:](../../integrations/builtin/app-nodes/n8n-nodes-base.questdb/) Added query parameters. The Execute Query operation returns the result from all queries executed instead of just one of the results.
- [QuickBase:](../../integrations/builtin/app-nodes/n8n-nodes-base.quickbase/) Added option to use Field IDs
- [TimescaleDB:](../../integrations/builtin/app-nodes/n8n-nodes-base.timescaledb/) Added query parameters. The Execute Query operation returns the result from all queries executed instead of just one of the results.
- [Twist:](../../integrations/builtin/app-nodes/n8n-nodes-base.twist/) Added Get, Get All, Delete, and Update operations to the Message Conversation resource. Added Archive, Unarchive, and Delete operations to the Channel resource. Added Thread and Comment resource

### Core Functionality

- Implemented the native `fs/promise` library where possible
- Added the functionality to output logs to the console or a file
- We have updated the minimum required version for Node.js to v14.15. For more details, check out the entry in the [breaking changes](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md#01180) page

- [GetResponse Trigger:](../../integrations/builtin/trigger-nodes/n8n-nodes-base.getresponsetrigger/) Fixed an issue with error handling
- [GitHub Trigger:](../../integrations/builtin/trigger-nodes/n8n-nodes-base.githubtrigger/) Fixed an issue with error handling
- [GitLab Trigger:](../../integrations/builtin/trigger-nodes/n8n-nodes-base.gitlabtrigger/) Fixed an issue with error handling
- [Google Sheets:](../../integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/) Fixed an issue with the Lookup operation for returning empty rows
- Orbit: Fixed issues with the Post resource
- [Redis:](../../integrations/builtin/app-nodes/n8n-nodes-base.redis/) Fixed an issue with the node not returning an error
- [Xero:](../../integrations/builtin/app-nodes/n8n-nodes-base.xero/) Fixed an issue with the Create operation for the Contact resource

[Gustavo Arjones](https://github.com/arjones), [lublak](https://github.com/lublak), [Colton Anglin](https://github.com/Colton), [Mika Luhta](https://github.com/mluhta)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.116.1...n8n@0.117.0) for this version.\
**Release date:** 2021-04-24

Please note that this version contains a breaking change. You can read more about it [here](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md#01170). The features that introduced the breaking changes have been flagged below.

- [Mailcheck](../../integrations/builtin/app-nodes/n8n-nodes-base.mailcheck/)
- [n8n Trigger](../../integrations/builtin/core-nodes/n8n-nodes-base.n8ntrigger/)
- [Workflow Trigger](../../integrations/builtin/core-nodes/n8n-nodes-base.workflowtrigger/)

- [CrateDB:](../../integrations/builtin/app-nodes/n8n-nodes-base.cratedb/) Added the Mode option that allows you to execute queries as transactions
- [Nextcloud:](../../integrations/builtin/app-nodes/n8n-nodes-base.nextcloud/) Added Delete, Get, Get All, and Update operation to the User resource
- [Postgres:](../../integrations/builtin/app-nodes/n8n-nodes-base.postgres/) Added the Mode option that allows you to execute queries as transactions
- [QuestDB:](../../integrations/builtin/app-nodes/n8n-nodes-base.questdb/) Added the Mode option that allows you to execute queries as transactions
- [Salesforce:](../../integrations/builtin/app-nodes/n8n-nodes-base.salesforce/) Added Owner option to the Case and Lead resources. Added custom fields to Create and Update operations of the Case resource
- [Sentry.io:](../../integrations/builtin/app-nodes/n8n-nodes-base.sentryio/) Added Delete and Update operations to Project, Release, and Team resources
- [TimescaleDB:](../../integrations/builtin/app-nodes/n8n-nodes-base.timescaledb/) Added the Mode option that allows you to execute queries as transactions
- [Zendesk Trigger:](../../integrations/builtin/trigger-nodes/n8n-nodes-base.zendesktrigger/) Added support to retrieve custom fields

### Core Functionality

- The Activation Trigger node has been deprecated. It has been replaced by two new nodes - the n8n Trigger and the Workflow Trigger node. For more details, check out the entry in the [breaking changes](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md#01170) page
- Added the functionality to open the New Credentials dropdown by default

- [Google Sheets:](../../integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/) Fixed an issue with the Lookup operation for returning multiple empty rows
- [Intercom:](../../integrations/builtin/app-nodes/n8n-nodes-base.intercom/) Fixed an issue with the User operation in the Company resource
- [Mautic:](../../integrations/builtin/app-nodes/n8n-nodes-base.mautic/) Fixed an issue with sending the lastActive parameter

[Bart Vollebregt](https://github.com/bartvollebregt), [Ivan Timoshenko](https://github.com/bugagashenkj), [Konstantin Nosov](https://github.com/nosovk), [lublak](https://github.com/lublak), [Umair Kamran](https://github.com/UmairKamran),

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.116.0...n8n@0.116.1) for this version.\
**Release date:** 2021-04-20

### Core Functionality

- Fixed a timeout issue with the workflows in the main process

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.115.0...n8n@0.116.0) for this version.\
**Release date:** 2021-04-17

- [Google BigQuery](../../integrations/builtin/app-nodes/n8n-nodes-base.googlebigquery/)
- [Webflow](../../integrations/builtin/app-nodes/n8n-nodes-base.webflow/)

- [Date & Time:](../../integrations/builtin/core-nodes/n8n-nodes-base.datetime/) Added Calculate a Date action that allows you to add or subtract time from a date
- [GitLab:](../../integrations/builtin/app-nodes/n8n-nodes-base.gitlab/) Added Get, Get All, Update, and Delete operations to the Release resource
- [Microsoft OneDrive:](../../integrations/builtin/app-nodes/n8n-nodes-base.microsoftonedrive/) Added Delete operation to the Folder resource
- [Monday:](../../integrations/builtin/app-nodes/n8n-nodes-base.mondaycom/) Added support for OAuth2 authentication
- [MongoDB:](../../integrations/builtin/app-nodes/n8n-nodes-base.mongodb/) Added Limit, Skip, and Sort options to the Find operation and added Upsert parameter to the Update operation. Added the functionality to close the connection after use
- [MySQL:](../../integrations/builtin/app-nodes/n8n-nodes-base.mysql/) Added support for insert modifiers and added support for SSL
- [RabbitMQ:](../../integrations/builtin/app-nodes/n8n-nodes-base.rabbitmq/) Added the functionality to close the connection after use and added support for AMPQS

### Core Functionality

- Changed `bcrypt` library from `bcryptjs` to `@node-rs/bcrypt`
- Improved node error handling. Status codes and error messages in API responses have been standardized
- Added global timeout setting for all HTTP requests (except HTTP Request node)
- Implemented timeout for workers and corrected timeout for sub workflows

- [AWS SQS:](../../integrations/builtin/app-nodes/n8n-nodes-base.awssqs/) Fixed an issue with API version and casing
- [IMAP:](../../integrations/builtin/core-nodes/n8n-nodes-base.emailimap/) Fixed re-connection issue
- [Keap:](../../integrations/builtin/app-nodes/n8n-nodes-base.keap/) Fixed an issue with the Opt In Reason parameter
- [Salesforce:](../../integrations/builtin/app-nodes/n8n-nodes-base.salesforce/) Fixed an issue with loading custom fields

[Allan Daemon](https://github.com/AllanDaemon), [Anton Romanov](https://github.com/theone74), [Bart Vollebregt](https://github.com/bartvollebregt), [Cassiano Vailati](https://github.com/cassvail), [entrailz](https://github.com/entrailz), [Konstantin Nosov](https://github.com/nosovk), [LongYinan](https://github.com/Brooooooklyn)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.114.0...n8n@0.115.0) for this version.\
**Release date:** 2021-04-10

- [Google Slides](../../integrations/builtin/app-nodes/n8n-nodes-base.googleslides/)

- [GitHub:](../../integrations/builtin/app-nodes/n8n-nodes-base.github/) Added Release resource
- [TheHive:](../../integrations/builtin/app-nodes/n8n-nodes-base.thehive/) Added support to fetch observable data types
- [RabbitMQ:](../../integrations/builtin/app-nodes/n8n-nodes-base.rabbitmq/) Added header parameters

### Core Functionality

- Fixed an issue with expressions not being displayed in read-only mode
- Fixed an issue that didn't allow editing JavaScript code in read-only mode
- Added support for configuring the maximum payload size
- Added support to dynamically add menu items

- [Jira:](../../integrations/builtin/app-nodes/n8n-nodes-base.jira/) Fixed an issue with loading issue types with classic project type
- [RabbitMQ Trigger:](../../integrations/builtin/trigger-nodes/n8n-nodes-base.rabbitmqtrigger/) Fixed an issue with the node reusing the same item
- [SendGrid:](../../integrations/builtin/app-nodes/n8n-nodes-base.sendgrid/) Fixed an issue with the dynamic field generation

[Mika Luhta](https://github.com/mluhta), [Loran](https://github.com/loranmutafov), [stwonary](https://github.com/stwonary)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.113.0...n8n@0.114.0) for this version.\
**Release date:** 2021-04-03

- [AWS SQS](../../integrations/builtin/app-nodes/n8n-nodes-base.awssqs/)
- [Copper](../../integrations/builtin/app-nodes/n8n-nodes-base.copper/)
- [ERPNext](../../integrations/builtin/app-nodes/n8n-nodes-base.erpnext/)
- [Oura](../../integrations/builtin/app-nodes/n8n-nodes-base.oura/)

- [Google Drive:](../../integrations/builtin/app-nodes/n8n-nodes-base.googledrive/) Added support for creating folders for shared drives
- [Google Sheets:](../../integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/) Added Create and Remove operation to the Sheet resource
- [Harvest:](../../integrations/builtin/app-nodes/n8n-nodes-base.harvest/) Added Update operation to the Task resource
- [Jira:](../../integrations/builtin/app-nodes/n8n-nodes-base.jira/) Added Reporter field to the Issue resource
- [Postgres:](../../integrations/builtin/app-nodes/n8n-nodes-base.postgres/) Added support for type casting

### Core Functionality

- Fixed an issue with the Redis connection to prevent memory leaks

- [Bitwarden:](../../integrations/builtin/app-nodes/n8n-nodes-base.bitwarden/) Fixed an issue with the Update operation of the Group resource
- [Cortex:](../../integrations/builtin/app-nodes/n8n-nodes-base.cortex/) Fixed an issue where only the last item got returned
- [Invoice Ninja:](../../integrations/builtin/app-nodes/n8n-nodes-base.invoiceninja/) Fixed an issue with the Project parameter
- [Salesforce:](../../integrations/builtin/app-nodes/n8n-nodes-base.salesforce/) Fixed an issue with the Get All operation of the Custom Object resource

[Agata M](https://github.com/curryy), [Allan Daemon](https://github.com/AllanDaemon), [Craig McElroy](https://github.com/camcelroy), [mjysci](https://github.com/mjysci)

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.112.0...n8n@0.113.0) for this version.\
**Release date:** 2021-03-26

- New nodes
- Activation Trigger
- Plivo
- Enhanced nodes
- ClickUp: Added Space Tag, Task List, and Task Tag resource
- GitHub: Added pagination to Get Issues and Get Repositories operations
- Mattermost: Added Reaction resource and Post Ephemeral operation
- Move Binary Data: Added Encoding and Add BOM option to JSON to Binary mode and Strip BOM to Binary to JSON mode
- SendGrid: Added Mail resource
- Spotify: Added Library resource
- Telegram: Added Answer Inline Query operation to the Callback resource
- uProc: Added Get ASIN code by EAN code, Get EAN code by ASIN code, Get Email by Social Profile, Get Email by Full name and Company's domain, and Get Email by Full name and Company's name operations
- Bug fixes
- Clearbit: Fixed an issue with the autocomplete URI
- Dropbox: Fixed an issue with the Dropbox credentials by adding the APP Access Type parameter in the credentials. For more details, check out the entry in the [breaking changes](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md#01130) page
- Spotify: Fixed an issue with the Delete operation of the Playlist resource
- The variable selector now displays empty arrays
- Fixed a permission issue with the Raspberry Pi Docker image

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.111.0...n8n@0.112.0) for this version.\
**Release date:** 2021-03-19

- New nodes
- DeepL
- Enhanced nodes
- TheHive: Added Mark as Read and Mark as Unread operations and added Ignore SSL Issues parameter to the credentials
- Bug fixes
- AWS SES: Fixed an issue to map CC addresses correctly
- Salesforce: Fixed an issue with custom object for Get All operations and fixed an issue with the first name field for the Create and Update operations for the Lead resource
- Strava: Fixed an issue with the access tokens not getting refreshed
- TheHive: Fixed an issue with the case resolution status
- Fixed an issue with importing separate decrypted credentials
- Fixed issues with the sub-workflows not finishing
- Fixed an issue with the sub-workflows running on the main process
- Fixed concurrency issues with sub-workflows

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.110.3...n8n@0.111.0) for this version.\
**Release date:** 2021-03-12

- New nodes
- Autopilot
- Autopilot Trigger
- Wise
- Wise Trigger
- Enhanced nodes
- Box: Added Get operation to the Folder resource
- Dropbox: Added Search operation to the File resource. All operations are now performed relative to the user's root directory. For more details, check out the entry in the [breaking changes](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md#01110) page
- Facebook Graph API: Added new API versions
- Google Drive: Added Update operation to the File resource
- HubSpot: Added the Deal Description option
- Kafka: Added the SASL mechanism
- Monday.com: Added Move operation to Board Item resource
- MongoDB: Added Date field to the Insert and Update operations
- Micrsoft SQL: Added connection timeout parameter to credentials
- Salesforce: Added Mobile Phone field to the Lead resource
- Spotify: Added Create a Playlist operation to Playlist resource and Get New Releases to the Album resource
- Bug fixes
- Airtable: Fixed a bug with updating and deleting records
- Added the functionality to expose metrics to Prometheus. Read more about that [here](../../hosting/configuration/environment-variables/)
- Updated fallback values to match the value type
- Added the functionality to display debugging information for pending workflows on exit
- Fixed an issue with queue mode for the executions that shouldn't be saved
- Fixed an issue with workflows crashing and displaying `Unknown` status in the execution list
- Fixed an issue to prevent crashing while saving execution data when the `data` field has over 64KB in MySQL
- Updated `jws-rsa` to version `1.12.1`

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.110.0...n8n@0.110.3) for this version.\
**Release date:** 2021-03-04

- Bug fixes
- APITemplate.io: Fixed an issue with the naming of the node

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.109.0...n8n@0.110.0) for this version.\
**Release date:** 2021-03-04

- New nodes
- APITemplate.io
- Bubble
- Lemlist
- Lemlist Trigger
- Enhanced nodes
- Microsoft Teams: Added option to reply to a message
- Bug fixes
- Dropbox: Fixed an issue with parsing the response with the Upload operation
- Gmail: Fixed an issue with the scope for the Service Account authentication method and fixed an issue with the label filter
- Google Drive: Fixed an issue with the missing Parent ID field for the Create operation and fixed an issue with the Permissions field
- HelpScout: Fixed an issue with sending tags when creating a conversation
- HTTP Request: Fixed an issue with the raw data and file response
- HubSpot: Fixed an issue with the OAuth2 credentials
- Added support for Date & Time in the IF node and the Switch node
- Fixed an issue with mouse selection when zooming in or out
- Fixed an issue with current executing workflows when using queues for Postgres
- Fixed naming and description for the `N8N_SKIP_WEBHOOK_DEREGISTRATION_SHUTDOWN` environment variable
- Fixed an issue with auto-refresh of the execution list

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.108.0...n8n@0.109.0) for this version.\
**Release date:** 2021-02-22

- New nodes
- Bitwarden
- Emelia
- Emelia Trigger
- GoToWebinar
- Raindrop
- Enhanced nodes
- AWS Rekognition: Added the Detect Text type to the Analyze operation for the Image resource
- Google Calendar: Added RRULE parameter to the Get All operation for the Event resource
- Jira: Added User resource and operations
- Reddit: Added the Search operation for the Post resource
- Telegram: Added the Send Location operation
- Bug fixes
- RocketChat: Fixed error responses
- Fixed the issue which caused the execution history of subworkflows (workflows started using the Execute Workflow node) not to be saved
- Added an option to export the credential data in plain text format using the CLI

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.107.0...n8n@0.108.0) for this version.\
**Release date:** 2021-02-15

- New nodes
- Demio
- PostHog
- QuickBooks
- Enhanced nodes
- Trello: Added Create Checklist Item operation to the Checklist resource
- Webhook: Removed trailing slash in routes and updated logic to select dynamic webhook
- Bug fixes
- Google Drive: Fixed an issue with returning the fields the user selects for the Folder and File resources
- Twitter: Fixed a typo in the description
- Webhook: Fixed logic for static route matching
- Added the functionality to sort the values that you add in the IF node, Rename node, and the Set node
- Added the functionality to optionally save execution data after each node
- Added queue mode to scale workflow execution
- Separated webhook from the core to scale webhook separately
- Fixed an issue with current execution query for unsaved running workflows
- Fixed an issue with the regex that detected node names
- n8n now generates a unified execution ID instead of two separate IDs for currently running and saved executions

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.106.0...n8n@0.107.0) for this version.\
**Release date:** 2021-02-08

- New nodes
- AWS Comprehend
- GetResponse Trigger
- Peekalink
- Stackby
- Enhanced nodes
- AWS SES: Added Custom Verification Email resource
- Microsoft Teams: Added Task resource
- Twitter: Added Delete operation to the Tweet resource
- Bug fixes
- Google Drive: Fixed an issue with the Delete and Share operations
- FileMaker: Fixed an issue with the script list parsing
- Updated Node.js version of Docker images to `14.15`
- Added a shortcut `CTRL + scroll` to zoom

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.105.0...n8n@0.106.0) for this version.\
**Release date:** 2021-02-05

- New nodes
- Reddit
- Tapfiliate
- Enhanced nodes
- Airtable Trigger: Added Download Attachment option
- HubSpot: Added Custom Properties option to the Create and Update operations of the Company resource
- MySQL: Added Connection Timeout parameter to the credentials
- Telegram: Added Pin Chat Message and Unpin Chat Message operations for the Message resource
- Bug fixes
- Typeform: Fixed an issue with the OAuth2 authentication method
- Added support for `s` and `u` flags for regex in the IF node and the Switch node

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.104.2...n8n@0.105.0) for this version.\
**Release date:** 2021-02-01

- New nodes
- Discourse
- SecurityScorecard
- TimescaleDB
- Enhanced nodes
- Affinity: Added List and List Entry resource
- Asana: Added Project IDs option to the Create operation of the Task resource
- HubSpot Trigger: Added support for multiple subscriptions
- Jira: Added Issue Attachment resource and added custom fields to Create and Update operations of the Issue resource
- Todoist: Added Section option
- Bug fixes
- SIGNL4: Fixed an issue with the attachment functionality
- Added variable `$mode` to check the mode in which the workflow is being executed

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.104.1...n8n@0.104.2) for this version.\
**Release date:** 2021-01-27

- Fixed an issue with the credentials parameters that have the same name

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.104.0...n8n@0.104.1) for this version.\
**Release date:** 2021-01-26

- Fixed a bug with expressions in credentials

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.103.1...n8n@0.104.0) for this version.\
**Release date:** 2021-01-26

- New nodes
- Compression
- Enhanced nodes
- GitHub: Added Invite operation to the User resource
- EmailReadImap: Increased the authentication timeout
- Mautic: Added Custom Fields option to the Create and Update operations of the Contact resource. Also, the Mautic OAuth credentials have been updated. Now you don't have to enter the Authorization URL and the Access Token URL
- Nextcloud: Added User resource
- Slack: Added Get Permalink and Delete operations to the Message resource
- Webhook: Added support for request parameters in webhook paths
- Bug fixes
- Google Drive: Fixed the default value for the Send Notification Email option
- Added support for expressions to credentials
- Removed support for MongoDB as a database for n8n. For more details, check out the entry in the [breaking changes](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md#01040) page

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.103.0...n8n@0.103.1) for this version.\
**Release date:** 2021-01-21

- Bug fixes
- Trello: Fixed the icon

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.102.0...n8n@0.103.0) for this version.\
**Release date:** 2021-01-21

- New nodes
- SendGrid
- Enhanced nodes
- AMQP: Added Container ID, Reconnect, and Reconnect limit options
- AMQP Trigger: Added Container ID, Reconnect, and Reconnect Limit options
- GitHub: Added Review resource
- Google Drive: Added Drive resource
- Trello: Added Get All and Get Cards operation to the List resource
- Bug fixes
- AWS Lambda: Fixed an issue with signature
- AWS SNS: Fixed an issue with signature
- Fixed an issue with nodes not executing if two input gets passed and one of them didn't return any data
- The code editor doesn'tget closed when clicked anywhere outside the editor
- Added CLI commands to [export](../../hosting/cli-commands/#export-workflows-and-credentials) and [import](../../hosting/cli-commands/#import-workflows-and-credentials) credentials and workflows
- The title in the browser tab now resets for new workflows

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.101.0...n8n@0.102.0) for this version.\
**Release date:** 2021-01-15

- New nodes
- Beeminder
- Enhanced nodes
- Crypto: Added hash type `SHA384`
- Google Books: Added support for user impersonation
- Google Drive: Added support for user impersonation
- Google Sheets: Added support for user impersonation
- Gmail: Added support for user impersonation
- Microsoft Outlook: Added support for a shared mailbox
- RabbitMQ: Added Exchange mode
- Salesforce: Added filters to all Get All operations
- Slack: Made changes to the properties `As User` and `Ephemeral`. For more details, check out the entry in the [breaking changes](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md#01020) page
- Typeform Trigger: The node now displays the recall information in the question in square brackets. For more details, check out the entry in the [breaking changes](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md#01020) page
- Zendesk: Removed the `Authorization URL` and `Access Token URL` fields from the OAuth2 credentials. The node now uses the subdomain passed by a user to connect to Zendesk.
- Bug fixes
- CoinGecko: Fixed an issue to process multiple input items correctly

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.100.0...n8n@0.101.0) for this version.\
**Release date:** 2021-01-07

- New nodes
- Google Analytics
- PhantomBuster
- Enhanced nodes
- AWS: Added support for custom endpoints
- Gmail: Added an option to send messages formatted as HTML
- Philips Hue: Added Room/Group name to Light name to make it easier to identify lights
- Slack: Added ephemeral message option
- Telegram: Removed the Bot resource as the endpoint is no longer supported
- Bug fixes
- E-goi: Fixed the name of the node
- Edit Image: Fixed an issue with the Border operation
- HTTP Request: Fixed batch sizing to work when `batchSize = 1`
- PayPal: Fixed a typo in the Environment field
- Split In Batches: Fixed a typo in the description
- Telegram: Fixed an issue with the Send Audio operation
- Based on your settings, vacuum runs on SQLite on startup
- Updated Axios to version `0.21.1`

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.99.1...n8n@0.100.0) for this version.\
**Release date:** 2020-12-30

- New nodes
- Microsoft Outlook
- Enhanced nodes
- ActiveCampaign: The node loads more options for the fields
- Asana: Added Subtask resource and Get All operation for the Task resource
- Edit Image: Added Multi Step operation
- HTTP Request: Added Use Querystring option
- IF: Added Ends With and Starts With operations
- Jira: Added Issue Comment resource
- Switch: Added Ends With and Starts With operations
- Telegram: Added File resource
- Bug fixes
- Box Trigger: Fixed a typo in the description
- Edit Image: Fixed an issue with multiple composite operations
- HTTP Request: Fixed an issue with the binary data getting used by multiple nodes
- S3: Fixed an issue with uploading files
- Stripe Trigger: Fixed an issue with the existing webhooks
- Telegram: Fixed an issue with the Send Audio operation
- Binary data stays visible if a node gets re-executed

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.99.0...n8n@0.99.1) for this version.\
**Release date:** 2020-12-24

- Fixed a bug that caused HTML to render in JSON view

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.98.0...n8n@0.99.0) for this version.\
**Release date:** 2020-12-24

- New nodes
- e-goi
- RabbitMQ
- RabbitMQ Trigger
- uProc
- Enhanced nodes
- ActiveCampaign: Added the functionality to load the tags for a user
- FTP: Added Delete and Rename operation
- Google Cloud Firestore: The node now gives the Collection ID in response
- Iterable: Added User List resource
- MessageBird: Added Balance resource
- TheHive Trigger: Added support for the TheHive3 webhook events, and added Log Updated and Log Deleted events
- Bug fixes
- Dropbox: Fixed an issue with the OAuth credentials
- Google Sheets: Fixed an issue with the parameters getting hidden for other operations
- Added functionality to copy the data and the path from the output
- Fixed an issue with the node getting selected after it was duplicated

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.97.0...n8n@0.98.0) for this version.\
**Release date:** 2020-12-16

- New nodes
- Brandfetch
- Pushcut
- Pushcut Trigger
- Enhanced nodes
- Google Sheets: Added Spreadsheet resource
- IF: Added Is Empty option
- Slack: Added Reaction and User resource, and Member operation to the Channel resource
- Spreadsheet File: Added the option Include Empty Cell to display empty cells
- Webhook: Added option to send a custom response body. The node can now also return string data
- Bug fixes
- GitLab: Fixed an issue with GitLab OAuth credentials. You can now specify your GitLab server to configure the credentials
- Mautic: Fixed an issue with the OAuth credentials
- If a workflow is using the Error Trigger node, by default, the workflow will use itself as the Error Workflow
- Fixed a bug that caused the Editor UI to display an incorrect (save) state upon activating or deactivating a workflow

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.96.0...n8n@0.97.0) for this version.\
**Release date:** 2020-12-10

- New nodes
- Ghost
- NASA
- Snowflake
- Twist
- Enhanced nodes
- Automizy: Added options to add and remove tabs for the Update operation of the Contact resource
- Pipedrive: Added label field to Person, Organization, and Deal resources. Also added Update operation for the Organization resource
- Bug fixes
- Fixed a bug that caused OAuth1 requests to break
- Fixed Docker user mount path

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.95.1...n8n@0.96.0) for this version.\
**Release date:** 2020-12-03

- New nodes
- Cortex
- Iterable
- Kafka Trigger
- TheHive
- TheHive Trigger
- Yourls
- Enhanced nodes
- HubSpot: Added Contact List resource and Search operation for the Deal resource
- Google Calendar: You can now add multiple attendees in the Attendees field
- Slack: The node now loads both private and public channels
- Bug Fixes
- MQTT: Fixed an issue with the connection. The node now uses `mqtt@4.2.1`
- Fixed a bug which caused the Trigger-Nodes to require data from the first output
- Added configuration to load only specific nodes

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.95.0...n8n@0.95.1) for this version.\
**Release date:** 2020-11-25

- Bug Fixes
- Airtable Trigger: Fixed the icon of the node

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.94.1...n8n@0.95.0) for this version.\
**Release date:** 2020-11-25

- New nodes
- Airtable Trigger
- LingvaNex
- OpenThesaurus
- ProfitWell
- Quick Base
- Spontit
- Enhanced nodes
- Airtable: The Application ID field has been renamed to Base ID, and the Table ID field has been renamed to Table. The List operation now downloads attachments automatically
- Harvest: Moved the account field from the credentials to the node parameters. For more details, check out the entry in the [breaking changes](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md#0950) page
- Bug Fixes
- Slack: Fixed an issue with creating channels and inviting users to a channel

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.94.0...n8n@0.94.1) for this version.\
**Release date:** 2020-11-20

- Bug Fixes
- GraphQL: Fixed an issue with the variables
- WooCommerce Trigger: Fixed an issue with the webhook. The node now reuses a webhook if it already exists.

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.93.0...n8n@0.94.0) for this version.\
**Release date:** 2020-11-19

- New nodes
- Google Cloud Natural Language
- Google Firebase Cloud Firestore
- Google Firebase Realtime Database
- Humantic AI
- Enhanced nodes
- ActiveCampaign: Added Contact List and List resource
- Edit Image: Added support for drawing, font selection, creating a new image, and added the Composite resource
- FTP: Added Private Key and Passphrase fields to the SFTP credentials and made the directory creation more robust
- IMAP: Increased the timeout
- Matrix: Added option to send notice, emote, and HTML messages
- Segment: Made changes to the properties `traits` and `properties`. For more details, check out the entry in the [breaking changes](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md#0940) page
- Bug Fixes
- GraphQL: Fixed an issue with the variables
- Mailchimp: Fixed an issue with the OAuth credentials. The credentials are now sent with the body instead of the header
- YouTube: Fixed a typo for the Unlisted option
- Added horizontal scrolling

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.92.0...n8n@0.93.0) for this version.\
**Release date:** 2020-11-11

- New nodes
- GetResponse
- Gotify
- Line
- Strapi
- Enhanced nodes
- AMQP: Connection is now closed after a message is sent
- AMQP Trigger: Added Message per Cycle option to retrieve the specified number of messages from the bus for every cycle
- HubSpot: Added Custom Properties for the Deal resource as Additional Fields
- Jira: The node retrieves all the projects for the Project field instead of just 50
- Mattermost: Improved the channel selection
- Microsoft SQL: Added TLS parameter for the credentials
- Pipedrive Trigger: Added OAuth authentication method. For more details, check out the entry in the [breaking changes](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md#0930) page
- Segment: Added Custom Traits option for the Traits field
- Bug Fixes
- Shopify Trigger: Fixed an issue with activating the workflow
- For custom nodes, you can now set custom documentation URLs

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.91.0...n8n@0.92.0) for this version.\
**Release date:** 2020-11-04

- New nodes
- Facebook Trigger
- Google Books
- Orbit
- Storyblok
- Enhanced nodes
- Google Drive: Removed duplicate parameters
- Twitter: Added Direct Message resource
- Bug Fixes
- Gmail: Fixed an issue with the encoding for the subject field
- Improved the Editor UI for the save workflow functionality

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.90.0...n8n@0.91.0) for this version.\
**Release date:** 2020-10-23

- New nodes
- Kafka
- MailerLite
- MailerLite Trigger
- Pushbullet
- Enhanced nodes
- Airtable: Added Ignore Fields option for the Update operation
- AMQP Sender: Added Azure Service Bus support
- Google Calendar: Added Calendar resource and an option to add a conference link
- G Suite Admin: Added Group resource
- HTTP Request: Added Batch Size and Batch Interval option
- Mautic: Added Company resource
- Salesforce: Added OAuth 2.0 JWT authentication method
- Bug Fixes
- IF: Fixed an issue with undefined expression
- Paddle: Fixed an issue with the Return All parameter
- Switch: Fixed an issue with undefined expression
- Added CLI commands to deactivate the workflow
- Added an option to get the full execution data from the server
- The Editor UI gives an alert if you redirect without saving a workflow
- The Editor UI now indicates if a workflow is saved or not
- Improved support for touch devices
- Node properties now load on demand
- Updated the Node.js version for the Docker images

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.89.2...n8n@0.90.0) for this version.\
**Release date:** 2020-10-23

- Added a check for the Node.js version on startup. For more details, check out the entry in the [breaking changes](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md#0900) page
- Bug Fixes
- Google Translate: Fixed an issue with the rendering of the image in n8n.io

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.89.1...n8n@0.89.2) for this version.\
**Release date:** 2020-10-22

- Bug Fixes
- Strava Trigger: Fixed a typo in the node name

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.89.0...n8n@0.89.1) for this version.\
**Release date:** 2020-10-22

- Removed debug messages

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.88.1...n8n@0.89.0) for this version.\
**Release date:** 2020-10-22

- New Nodes
- Pushover
- Strava
- Strava Trigger
- Google Translate
- Bug Fixes
- HTTP Request: Fixed an issue with the POST request method for the 'File' response format
- Fixed issue with displaying non-active workflows as active
- Fixed an issue related to multiple-webhooks

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.88.0...n8n@0.88.1) for this version.\
**Release date:** 2020-10-16

- Bug Fixes
- HTTP Request: Fixed an issue with the Form-Data Multipart and the RAW/Custom Body Content Types

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.87.2...n8n@0.88.0) for this version.\
**Release date:** 2020-10-16

- Enhanced Fixes
- Matrix: Added support for specifying a Matrix Homeserver URL
- Salesforce: Added Custom Object resource and Custom Fields and Sort options
- Bug Fixes
- AWS SES: Fixed an issue with the Send Template operation for the Email resource
- AWS SNS Trigger: Fixed an issue with the Subscriptions topic

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.87.1...n8n@0.87.2) for this version.\
**Release date:** 2020-10-15

- Bug Fixes
- Google Sheets: Fixed an issue with spaces in sheet names
- Automizy: Fixed an issue with the default resource

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.87.0...n8n@0.87.1) for this version.\
**Release date:** 2020-10-15

- Bug Fixes
- Gmail: Fixed an issue with the Message ID
- HTTP Request: Fixed an issue with the GET Request
- Added `HMAC-SHA512` signature method for OAuth 1.0

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.86.1...n8n@0.87.0) for this version.\
**Release date:** 2020-10-14

- New nodes
- Automizy
- AWS Rekognition
- Matrix
- Sendy
- Vonage
- WeKan
- Enhanced nodes
- AWS SES: Added Send Template operation for the Email resource and added the Template resource
- ClickUp: Added Time Entry and Time Entry Tag resources
- Function: The Function field is now called the JavaScript Code field
- Mailchimp: Added Campaign resource
- Mindee: Added currency to the simplified response
- OneDrive: Added Share operation
- OpenWeatherMap: Added Language parameter
- Pipedrive: Added additional parameters to the Get All operation for the Note resource
- Salesforce: Added Flow resource
- Spreadsheet File: Added Range option for the Read from file operation
- Bug Fixes
- ClickUp Trigger: Fixed issue with creating credentials
- Pipedrive Trigger: Fixed issue with adding multiple webhooks to Pipedrive
- The link.fish Scrape node has been removed from n8n. For more details, check out the entry in the [breaking changes](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md#0870) page

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.86.0...n8n@0.86.1) for this version.\
**Release date:** 2020-10-06

- Enhanced nodes
- CoinGecko: Small fixes to the CoinGecko node

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.85.0...n8n@0.86.0) for this version.\
**Release date:** 2020-10-05

- New nodes
- Clockify
- CoinGecko
- G Suite Admin
- Mindee
- Wufoo Trigger
- Enhanced nodes
- Slack: Added User Profile resource
- Mattermost: Added Create and Invite operations for the User resource
- Bug Fixes
- S3: Fixed issue with uploading files
- Webhook ID gets refreshed on node duplication

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.84.4...n8n@0.85.0) for this version.\
**Release date:** 2020-09-30

- Enhanced nodes
- Postgres: Added Schema parameter for the Update operation
- Bug Fixes
- Jira: Fixed a bug with the Issue Type field
- Pipedrive Trigger: Fixed issues with the credentials
- Changed the bcrypt library to `bcrypt.js` to make it compatible with Windows
- The OAuth callback URLs are now generated in the backend

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.84.3...n8n@0.84.4) for this version.\
**Release date:** 2020-09-23

- Bug Fixes
- Google Sheets: Fixed issues with the update and append operations

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.84.2...n8n@0.84.3) for this version.\
**Release date:** 2020-09-23

- Fixed an issue with the build by setting `jwks-rsa` to an older version

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.84.1...n8n@0.84.2) for this version.\
**Release date:** 2020-09-23

- Fixed an issue with the OAuth window. The OAuth window now closes after authentication is complete

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.84.0...n8n@0.84.1) for this version.\
**Release date:** 2020-09-23

- Additional endpoints can be excluded from authentication checks. Multiple endpoints can be added separated by colons

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.83.0...n8n@0.84.0) for this version.\
**Release date:** 2020-09-23

- Enhanced nodes
- Twitter: Added support for auto mention of users in reply tweets
- Bug Fixes
- Google Sheets: Fixed issue with non-Latin sheet names
- HubSpot: Fixed naming of credentials
- Microsoft: Fixed naming of credentials
- Mandrill: Fixed attachments with JSON parameters
- Expressions now use short variables when selecting input data for the current node
- Fixed issue with renaming credentials for active workflows

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.82.1...n8n@0.83.0) for this version.\
**Release date:** 2020-09-18

- New nodes
- LinkedIn
- Taiga
- Taiga Trigger
- Enhanced nodes
- ActiveCampaign: Added multiple functions, read more [here](https://github.com/n8n-io/n8n/commit/a552febab494f8ecc022391f046752f1f9f5a4cc)
- Airtable: Added typecast functionality
- Asana: Added OAuth2 support
- ClickUp: Added OAuth2 support
- Google Drive: Added share operation
- IMAP Email: Added support for custom rules when checking emails
- Sentry.io: Added support for self-hosted version
- Twitter: Added retweet, reply, and like operations
- WordPress: Added author field to the post resource
- Bug Fixes
- Asana Trigger: Webhook validation has been deactivated
- Paddle: Fixed `returnData` format and coupon description
- The ActiveCampaign node has [breaking changes](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md#0830)
- Fixed issues with test-webhook registration

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.82.0...n8n@0.82.1) for this version.\
**Release date:** 2020-09-14

- Speed for basic authentication with hashed password has been improved

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.81.0...n8n@0.82.0) for this version.\
**Release date:** 2020-09-14

- New nodes
- Microsoft Teams
- Enhanced nodes
- Freshdesk: Added Freshdesk contact resource
- HTTP Request: Run parallel requests in HTTP Request Node
- Bug Fixes
- Philips Hue: Added `APP ID` to Philips Hue node credentials
- Postmark Trigger: Fixed parameters for the node
- The default space between nodes has been increased to two units
- Expression support has been added to the credentials
- Passwords for your n8n instance can now be hashed

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.80.0...n8n@0.81.0) for this version.\
**Release date:** 2020-09-09

- New nodes
- Sentry.io
- Enhanced nodes
- Asana
- ClickUp
- Clockify
- Google Contacts
- Salesforce
- Segment
- Telegram
- Telegram Trigger

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.79.0...n8n@0.80.0) for this version.\
**Release date:** 2020-09-02

- New nodes
- Customer.io
- MQTT Trigger
- S3
- Enhanced nodes
- Acuity Scheduling
- AWS S3
- ClickUp
- FTP
- Telegram Trigger
- Zendesk

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.79.2...n8n@0.79.3) for this version.\
**Release date:** 2020-08-30

- The bug that caused the workflows to not get activated correctly has been fixed

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.79.1...n8n@0.79.2) for this version.\
**Release date:** 2020-08-28

- Added missing rawBody for "application/x-www-form-urlencoded"

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.79.0...n8n@0.79.1) for this version.\
**Release date:** 2020-08-28

- Enhanced nodes
- Contentful
- HTTP Request
- Postgres
- Webhook
- Removed Test-Webhook also in case checkExists fails
- HTTP Request node doesn'toverwrite accept header if it's already set
- Add rawBody to every request so that n8n doesn'tgive an error if body is missing

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.79.2...n8n@0.79.3) for this version.\
**Release date:** 2020-08-27

- New nodes
- Contentful
- ConvertKit
- ConvertKit Trigger
- Paddle
- Enhanced nodes
- Airtable
- Coda
- Gmail
- HubSpot
- IMAP Email
- Postgres
- Salesforce
- SIGNL4
- Todoist
- Trello
- YouTube
- The Todoist node has [breaking changes](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md#0790)
- Added dynamic titles on workflow execution
- Nodes will now display a link to associated credential documentation

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.76.0...n8n@0.78.0) for this version.\
**Release date:** 2020-08-18

- New nodes
- Gmail
- Google Contacts
- Unleashed Software
- YouTube
- Enhanced nodes
- AMQP
- AMQP Trigger
- Bitly
- Function Item
- Google Sheets
- Shopify
- Todoist
- Enhanced support for [JWT based authentication](../../integrations/builtin/core-nodes/n8n-nodes-base.jwt/)
- Added an option to execute a node once, using data of only the first item

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.75.0...n8n@0.76.0) for this version.\
**Release date:** 2020-08-05

- New nodes
- Customer.io Trigger
- FTP
- Medium
- Philips Hue
- TravisCI
- Twake
- Enhanced nodes
- CrateDB
- Move Binary Data
- Nodes will now display a link to associated documentation

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.74.0...n8n@0.75.0) for this version.\
**Release date:** 2020-07-26

- New nodes
- Box
- Box Trigger
- CrateDB
- Jira Trigger
- Enhanced nodes
- GitLab
- Nextcloud
- Pipedrive
- QuestDB
- Webhooks now support OPTIONS request

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.73.1...n8n@0.74.0) for this version.\
**Release date:** 2020-07-15

- New nodes
- Hacker News
- QuestDB
- Xero
- Enhanced nodes
- Affinity Trigger
- HTTP Request
- Mailchimp
- MongoDB
- Pipedrive
- Postgres
- UpLead
- Webhook
- Webhook URLs are now handled independently of the workflow ID by `https://{hostname}/webhook/{path}` instead of the older `https://{hostname}/webhook/{workflow_id}/{node_name}/{path}`.

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.73.0...n8n@0.73.1) for this version.\
**Release date:** 2020-07-08

- Enhanced nodes
- Microsoft SQL

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.72.0...n8n@0.73.0) for this version.\
**Release date:** 2020-07-08

- New nodes
- CircleCI
- Microsoft SQL
- Zoom
- Enhanced nodes
- Postmark Trigger
- Salesforce
- It's now possible to set default values for credentials that get prefilled, and the user can't change.

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.71.0...n8n@0.72.0) for this version.\
**Release date:** 2020-07-02

- Enhanced nodes
- Drift
- Eventbrite Trigger
- Facebook Graph API
- Pipedrive
- Fixed credential issue for the Execute Workflow node

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.70.0...n8n@0.71.0) for this version.\
**Release date:** 2020-06-25

- New nodes
- Google Tasks
- SIGNL4
- Spotify
- Enhanced nodes
- HubSpot
- Mailchimp
- Typeform
- Webflow
- Zendesk
- Added Postgres SSL support
- It's now possible to deploy n8n under a subfolder

For a comprehensive list of changes, check out the [commits](https://github.com/n8n-io/n8n/compare/n8n@0.69.1...n8n@0.70.0) for this version.\
**Release date:** 2020-06-13

- Enhanced nodes
- GitHub
- Mautic Trigger
- Monday.com
- MongoDB
- Fixed the issue with multiuser-setup

**Examples:**

Example 1 (unknown):
```unknown
n8n license:info
```

Example 2 (unknown):
```unknown
// in AsanaApi.credentials.ts
import {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class AsanaApi implements ICredentialType {
	name = 'asanaApi';
	displayName = 'Asana API';
	documentationUrl = 'asana';
	properties: INodeProperties[] = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.accessToken}}',
			},
		},
	};
}
```

---

## For example 2022-03-09T14:00:25.058+00:00

**URL:** llms-txt#for-example-2022-03-09t14:00:25.058+00:00

rightNow = "Today's date is " + str(_now)

---

## For example "Today's date is 1646834498755"

**URL:** llms-txt#for-example-"today's-date-is-1646834498755"

**Contents:**
  - Convert JavaScript dates to Luxon
  - Convert date string to Luxon
  - Get n days from today
  - Create human-readable dates
  - Get the time between two dates
  - A longer example: How many days to Christmas?

{{DateTime.fromISO('2019-06-23T00:00:00.00')}}

let luxonDateTime = DateTime.fromISO('2019-06-23T00:00:00.00')

{{DateTime.fromFormat("23-06-2019", "dd-MM-yyyy")}}

let newFormat = DateTime.fromFormat("23-06-2019", "dd-MM-yyyy")

{{$today.minus({days: 7})}}

let sevenDaysAgo = $today.minus({days: 7})

{{$today.minus({days: 7}).toLocaleString()}}

let readableSevenDaysAgo = $today.minus({days: 7}).toLocaleString()

{{$today.minus({days: 7}).toLocaleString({month: 'long', day: 'numeric', year: 'numeric'})}}

let readableSevenDaysAgo = $today.minus({days: 7}).toLocaleString({month: 'long', day: 'numeric', year: 'numeric'})

{{DateTime.fromISO('2019-06-23').diff(DateTime.fromISO('2019-05-23'), 'months').toObject()}}

let monthsBetweenDates = DateTime.fromISO('2019-06-23').diff(DateTime.fromISO('2019-05-23'), 'months').toObject()

{{"There are " + $today.diff(DateTime.fromISO($today.year + '-12-25'), 'days').toObject().days.toString().substring(1) + " days to Christmas!"}}

let daysToChristmas = "There are " + $today.diff(DateTime.fromISO($today.year + '-12-25'), 'days').toObject().days.toString().substring(1) + " days to Christmas!";
```

This outputs `"There are <number of days> days to Christmas!"`. For example, on 9th March, it outputs "There are 291 days to Christmas!".

A detailed explanation of what the code does:

- `"There are "`: a string.
- `+`: used to join two strings.
- `$today.diff()`: This is similar to the example in [Get the time between two dates](#get-the-time-between-two-dates), but it uses n8n's custom `$today` variable.
- `DateTime.fromISO($today.year + '-12-25'), 'days'`: this part gets the current year using `$today.year`, turns it into an ISO string along with the month and date, and then takes the whole ISO string and converts it to a Luxon DateTime data structure. It also tells Luxon that you want the duration in days.
- `toObject()` turns the result of diff() into a more usable object. At this point, the expression returns `[Object: {"days":-<number-of-days>}]`. For example, on 9th March, `[Object: {"days":-291}]`.
- `.days` uses JMESPath syntax to retrieve just the number of days from the object. For more information on using JMESPath with n8n, refer to our [JMESpath](../jmespath/) documentation. This gives you the number of days to Christmas, as a negative number.
- `.toString().substring(1)` turns the number into a string and removes the `-`.
- `+ " days to Christmas!"`: another string, with a `+` to join it to the previous string.

**Examples:**

Example 1 (unknown):
```unknown
n8n provides built-in convenience functions to support data transformation in expressions for dates. Refer to [Data transformation functions | Dates](../../builtin/data-transformation-functions/dates/) for more information.

### Convert JavaScript dates to Luxon

To convert a native JavaScript date to a Luxon date:

- In expressions, use the [`.toDateTime()` method](../../builtin/data-transformation-functions/dates/#date-toDateTime). For example, `{{ (new Date()).ToDateTime() }}`.
- In the Code node, use `DateTime.fromJSDate()`. For example, `let luxondate = DateTime.fromJSDate(new Date())`.

### Convert date string to Luxon

You can convert date strings and other date formats to a Luxon DateTime object. You can convert from standard formats and from arbitrary strings.

A difference between Luxon DateTime and JavaScript Date

With vanilla JavaScript, you can convert a string to a date with `new Date('2019-06-23')`. In Luxon, you must use a function explicitly stating the format, such as `DateTime.fromISO('2019-06-23')` or `DateTime.fromFormat("23-06-2019", "dd-MM-yyyy")`.

#### If you have a date in a supported standard technical format:

Most dates use `fromISO()`. This creates a Luxon DateTime from an ISO 8601 string. For example:
```

Example 2 (unknown):
```unknown

```

Example 3 (unknown):
```unknown
Luxon's API documentation has more information on [fromISO](https://moment.github.io/luxon/api-docs/index.html#datetimefromiso).

Luxon provides functions to handle conversions for a range of formats. Refer to Luxon's guide to [Parsing technical formats](https://moment.github.io/luxon/#/parsing?id=parsing-technical-formats) for details.

#### If you have a date as a string that doesn't use a standard format:

Use Luxon's [Ad-hoc parsing](https://moment.github.io/luxon/#/parsing?id=ad-hoc-parsing). To do this, use the `fromFormat()` function, providing the string and a set of [tokens](https://moment.github.io/luxon/#/parsing?id=table-of-tokens) that describe the format.

For example, you have n8n's founding date, 23rd June 2019, formatted as `23-06-2019`. You want to turn this into a Luxon object:
```

Example 4 (unknown):
```unknown

```

---

## Manage users

**URL:** llms-txt#manage-users

**Contents:**
- Delete a user
- Resend an invitation to a pending user

The **Settings** > **Users** page shows all users, including ones with pending invitations.

1. Open the **three-dot menu** for the user you want to delete and select **Delete user**.
1. Confirm you want to delete them.
1. If they're an active user, choose whether to copy their workflow data and credentials to a new user, or permanently delete their workflows and credentials.

## Resend an invitation to a pending user

Click the menu icon by the user, then click **Resend invite**.

---

## XML

**URL:** llms-txt#xml

**Contents:**
- Node parameters
- Node options
  - JSON to XML options
  - XML to JSON options
- Templates and examples

Use the XML node to convert data from and to XML.

If your XML is within a binary file, use the [Extract from File](../n8n-nodes-base.extractfromfile/) node to convert it to text first.

- **Mode**: The format the data should be converted from and to.
  - **JSON to XML**: Converts data from JSON to XML.
  - **XML to JSON**: Converts data from XML to JSON.
- **Property Name**: Enter the name of the property which contains the data to convert.

These options are available regardless of the **Mode** you select:

- **Attribute Key**: Enter the prefix used to access the attributes. Default is `$`.
- **Character Key**: Enter the prefix used to access the character content. Default is `_`.

All other options depend on the selected **Mode**.

### JSON to XML options

These options only appear if you select **JSON to XML** as the **Mode**:

- **Allow Surrogate Chars**: Set whether to allow using characters from the Unicode surrogate blocks (turned on) or not (turned off).
- **Cdata**: Set whether to wrap text nodes in `<![CDATA[ ... ]]>` instead of escaping when it's required (turned on) or not (turned off).
  - Turning this option on doesn't add `<![CDATA[ ... ]]>` if it's not required.
- **Headless**: Set whether to omit the XML header (turned on) or include it (turned off).
- **Root Name**: Enter the root element name to use.

### XML to JSON options

These options only appear if you select **XML to JSON** as the **Mode**:

- **Explicit Array**: Set whether to put child nodes in an array (turned on) or create an array only if there's more than one child node (turned off).
- **Explicit Root**: Set whether to get the root node in the resulting object (turned on) or not (turned off).
- **Ignore Attributes**: Set whether to ignore all XML attributes and only create text nodes (turned on) or not (turned off).
- **Merge Attributes**: Set whether to merge attributes and child elements as properties of the parent (turned on) or key attributes off a child attribute object (turned off). This option is ignored if **Ignore Attribute** is turned on.
- **Normalize**: Set whether to trim whitespaces inside the text nodes (turned on) or not to trim them (turned off).
- **Normalize Tags**: Set whether to normalize all tag names to lowercase (turned on) or keep tag names as-is (turned off).
- **Trim**: Set whether to trim the whitespace at the beginning and end of text nodes (turned on) or to leave the whitespace as-is (turned off).

## Templates and examples

**Generating Keywords using Google Autosuggest**

[View template details](https://n8n.io/workflows/2155-generating-keywords-using-google-autosuggest/)

**💡🌐 Essential Multipage Website Scraper with Jina.ai**

[View template details](https://n8n.io/workflows/2957-essential-multipage-website-scraper-with-jinaai/)

**Extract Google Trends Keywords & Summarize Articles in Google Sheets**

[View template details](https://n8n.io/workflows/3132-extract-google-trends-keywords-and-summarize-articles-in-google-sheets/)

[Browse XML integration templates](https://n8n.io/integrations/xml/), or [search all templates](https://n8n.io/workflows/)

---

## Common issues and questions

**URL:** llms-txt#common-issues-and-questions

**Contents:**
- Listen for multiple HTTP methods
- Use the HTTP Request node to trigger the Webhook node
- Use curl to trigger the Webhook node
- Send a response of type string
- Test URL versus Production URL
- IP addresses in whitelist are failing to connect
- Only one webhook per path and method
- Timeouts on n8n Cloud

Here are some common issues and questions for the [Webhook node](../) and suggested solutions.

## Listen for multiple HTTP methods

By default, the Webhook node accepts calls that use a single method. For example, it can accept GET or POST requests, but not both. If you want to accept calls using multiple methods:

1. Open the node **Settings**.
1. Turn on **Allow Multiple HTTP Methods**.
1. Return to **Parameters**. By default, the node now accepts GET and POST calls. You can add other methods in the **HTTP Methods** field.

The Webhook node has an output for each method, so you can perform different actions depending on the method.

## Use the HTTP Request node to trigger the Webhook node

The [HTTP Request](../../n8n-nodes-base.httprequest/) node makes HTTP requests to the URL you specify.

1. Create a new workflow.
1. Add the HTTP Request node to the workflow.
1. Select a method from the **Request Method** dropdown list. For example, if you select GET as the **HTTP method** in your Webhook node, select GET as the request method in the HTTP Request node.
1. Copy the URL from the Webhook node, and paste it in the **URL** field in the HTTP Request node.
1. If using the test URL for the webhook node: execute the workflow with the Webhook node.
1. Execute the HTTP Request node.

## Use curl to trigger the Webhook node

You can use [curl](https://curl.se/) to make HTTP requests that trigger the Webhook node.

In the examples, replace `<https://your-n8n.url/webhook/path>` with your webhook URL.\
The examples make GET requests. You can use whichever HTTP method you set in **HTTP Method**.

Make an HTTP request without any parameters:

Make an HTTP request with a body parameter:

Make an HTTP request with header parameter:

Make an HTTP request to send a file:

Replace `/path/to/file` with the path of the file you want to send.

## Send a response of type string

By default, the response format is JSON or an array. To send a response of type string:

1. Select **Response Mode** > **When Last Node Finishes**.
1. Select **Response Data** > **First Entry JSON**.
1. Select **Add Option** > **Property Name**.
1. Enter the name of the property that contains the response. This defaults to `data`.
1. Connect an [Edit Fields node](../../n8n-nodes-base.set/) to the Webhook node.
1. In the Edit Fields node, select **Add Value** > **String**.
1. Enter the name of the property in the **Name** field. The name should match the property name from step 4.
1. Enter the string value in the **Value** field.
1. Toggle **Keep Only Set** to on (green).

When you call the Webhook, it sends the string response from the Edit Fields node.

## Test URL versus Production URL

n8n generates two **Webhook URLs** for each Webhook node: a **Test URL** and a **Production URL**.

While building or testing a workflow, use the **Test URL**. Once you're ready to use your Webhook URL in production, use the **Production URL**.

| **URL type**   | **How to trigger**                                                         | **Listening duration**     | **Data shown in editor UI?** |
| -------------- | -------------------------------------------------------------------------- | -------------------------- | ---------------------------- |
| Test URL       | Select **Listen for test event** and trigger a test event from the source. | 120 seconds                |                              |
| Production URL | Activate the workflow                                                      | Until workflow deactivated |                              |

Refer to [Workflow development](../workflow-development/) for more information.

## IP addresses in whitelist are failing to connect

If you're unable to connect from IP addresses in your IP whitelist, check if you are running n8n behind a reverse proxy.

If so, set the `N8N_PROXY_HOPS` [environment variable](../../../../../hosting/configuration/environment-variables/) to the number of reverse-proxies n8n is running behind.

## Only one webhook per path and method

n8n only permits registering one webhook for each path and HTTP method combination (for example, a `GET` request for `/my-request`). This avoids ambiguity over which webhook should receive requests.

If you receive a message that the path and method you chose are already in use, you can either:

- Deactivate the workflow with the conflicting webhook.
- Change the webhook path and/or method for one of the conflicting webhooks.

## Timeouts on n8n Cloud

n8n Cloud uses Cloudflare to protect against malicious traffic. If your webhook doesn't respond within 100 seconds, the incoming request will fail with a [524 status code](https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-524/).

Because of this, for long-running processes that might exceed this limit, you may need to introduce polling logic by configuring two separate webhooks:

- One webhook to start the long-running process and send an immediate response.
- A second webhook that you can call at intervals to query the status of the process and retrieve the result once it's complete.

**Examples:**

Example 1 (unknown):
```unknown
curl --request GET <https://your-n8n.url/webhook/path>
```

Example 2 (unknown):
```unknown
curl --request GET <https://your-n8n.url/webhook/path> --data 'key=value'
```

Example 3 (unknown):
```unknown
curl --request GET <https://your-n8n.url/webhook/path> --header 'key=value'
```

Example 4 (unknown):
```unknown
curl --request GET <https://your-n8n.url/webhook/path> --from 'key=@/path/to/file'
```

---

## Execute Command

**URL:** llms-txt#execute-command

**Contents:**
- Node parameters
  - Execute Once
  - Command
- Templates and examples
- Common issues

The Execute Command node runs shell commands on the host machine that runs n8n.

Security considerations

The Execute Command node can introduce significant security risks in environments that operate with untrusted users. Because of this, n8n recommends [disabling](../../../../hosting/securing/blocking-nodes/#exclude-nodes) it in such setups.

Which shell runs the command?

This node executes the command in the default shell of the host machine. For example, `cmd` on Windows and `zsh` on macOS.

If you run n8n with Docker, your command will run in the n8n container and not the Docker host.

If you're using [queue mode](../../../../hosting/scaling/queue-mode/), the command runs on the worker that's executing the task in production mode. When running manual executions, it runs on the main instance, unless you set `OFFLOAD_MANUAL_EXECUTIONS_TO_WORKERS` to `true`.

Not available on Cloud

This node isn't available on n8n Cloud.

Configure the node using the following parameters.

Choose whether you want the node to execute only once (turned on) or once for every item it receives as input (turned off).

Enter the command to execute on the host machine. Refer to sections below for examples of running [multiple commands](#run-multiple-commands) and [cURL commands](#run-curl-command).

#### Run multiple commands

Use one of two methods to run multiple commands in one Execute Command node:

- Enter each command on one line separated by `&&`. For example, you can combine the change directory (cd) command with the list (ls) command using `&&`.

- Enter each command on a separate line. For example, you can write the list (ls) command on a new line after the change directory (cd) command.

#### Run cURL command

You can also use the [HTTP Request](../n8n-nodes-base.httprequest/) node to make a cURL request.

If you want to run the curl command in the Execute Command node, you will have to build a Docker image based on the existing n8n image. The default n8n Docker image uses Alpine Linux. You will have to install the curl package.

1. Create a file named `Dockerfile`.

1. Add the below code snippet to the Dockerfile.

1. In the same folder, execute the command below to build the Docker image.

1. Replace the Docker image you used before. For example, replace `docker.n8n.io/n8nio/n8n` with `n8n-curl`.

1. Run the newly created Docker image. You'll now be able to execute ssh using the Execute Command Node.

## Templates and examples

**Scrape and store data from multiple website pages**

[View template details](https://n8n.io/workflows/1073-scrape-and-store-data-from-multiple-website-pages/)

**Git backup of workflows and credentials**

[View template details](https://n8n.io/workflows/1053-git-backup-of-workflows-and-credentials/)

**Track changes of product prices**

[View template details](https://n8n.io/workflows/837-track-changes-of-product-prices/)

[Browse Execute Command integration templates](https://n8n.io/integrations/execute-command/), or [search all templates](https://n8n.io/workflows/)

For common questions or issues and suggested solutions, refer to [Common Issues](common-issues/).

**Examples:**

Example 1 (unknown):
```unknown
cd bin && ls
```

Example 2 (unknown):
```unknown
cd bin
  ls
```

Example 3 (unknown):
```unknown
FROM docker.n8n.io/n8nio/n8n
   USER root
   RUN apk --update add curl
   USER node
```

Example 4 (unknown):
```unknown
docker build -t n8n-curl
```

---

## FTP

**URL:** llms-txt#ftp

**Contents:**
- Operations
- Delete
  - Delete options
- Download
- List
- Rename
  - Rename options
- Upload
- Templates and examples

The FTP node is useful to access and upload files to an FTP or SFTP server.

You can find authentication information for this node [here](../../credentials/ftp/).

To connect to an SFTP server, use an SFTP credential. Refer to [FTP credentials](../../credentials/ftp/) for more information.

- [**Delete**](#delete) a file or folder
- [**Download**](#download) a file
- [**List**](#list) folder content
- [**Rename**](#rename) or move a file or folder
- [**Upload**](#upload) a file

To attach a file for upload, you'll need to use an extra node such as the [Read/Write Files from Disk](../n8n-nodes-base.readwritefile/) node or the [HTTP Request](../n8n-nodes-base.httprequest/) node to pass the file as a data property.

This operation includes one parameter: **Path**. Enter the remote path that you would like to connect to.

The delete operation adds one new option: **Folder**. If you turn this option on, the node can delete both folders and files. This configuration also displays one more option:

- **Recursive**: If you turn this option on and you delete a folder or directory, the node will delete all files and directories within the target directory.

Configure this operation with these parameters:

- **Path**: Enter the remote path that you would like to connect to.
- **Put Output File in Field**: Enter the name of the output binary field to put the file in.

Concurrent Reads with SFTP

When using SFTP, you can enable concurrent reads. This improves download speeds but may not be supported by all SFTP servers.

Configure this operation with these parameters:

- **Path**: Enter the remote path that you would like to connect to.
- **Recursive**: Select whether to return an object representing all directories / objects recursively found within the FTP/SFTP server (turned on) or not (turned off).

Configure this operation with these parameters:

- **Old Path**: Enter the existing path of the file you'd like to rename in this field.
- **New Path**: Enter the new path for the renamed file in this field.

This operation adds one new option: **Create Directories**. If you turn this option on, the node will recursively create the destination directory when renaming an existing file or folder.

Configure this operation with these parameters:

- **Path**: Enter the remote path that you would like to connect to.
- **Binary File**: Select whether you'll upload a binary file (turned on) or enter text content to be uploaded (turned off). Other parameters depend on your selection in this field.
  - **Input Binary Field**: Displayed if you turn on **Binary File**. Enter the name of the input binary field that contains the file you'll upload in this field.
  - **File Content**: Displayed if you turn off **Binary File** Enter the text content of the file you'll upload in this field.

To attach a file for upload, you'll need to use an extra node such as the [Read/Write Files from Disk](../n8n-nodes-base.readwritefile/) node or the [HTTP Request](../n8n-nodes-base.httprequest/) node to pass the file as a data property.

## Templates and examples

**Working with Excel spreadsheet files (xls & xlsx)**

[View template details](https://n8n.io/workflows/1826-working-with-excel-spreadsheet-files-xls-and-xlsx/)

**Download a file and upload it to an FTP Server**

[View template details](https://n8n.io/workflows/663-download-a-file-and-upload-it-to-an-ftp-server/)

**Explore n8n Nodes in a Visual Reference Library**

[View template details](https://n8n.io/workflows/3891-explore-n8n-nodes-in-a-visual-reference-library/)

[Browse FTP integration templates](https://n8n.io/integrations/ftp/), or [search all templates](https://n8n.io/workflows/)

---

## Actions library

**URL:** llms-txt#actions-library

This section provides information about n8n's Actions.

---

## Set a 50 MB maximum size for each log file

**URL:** llms-txt#set-a-50-mb-maximum-size-for-each-log-file

export N8N_LOG_FILE_SIZE_MAX=50

---

## Two-factor authentication (2FA)

**URL:** llms-txt#two-factor-authentication-(2fa)

**Contents:**
- Enable 2FA
- Disable 2FA for your instance

Two-factor authentication (2FA) adds a second authentication method on top of username and password. This increases account security. n8n supports 2FA using an authenticator app.

You need an authenticator app on your phone.

To enable 2FA in n8n:

1. Go to you **Settings** > **Personal**.
1. Select **Enable 2FA**. n8n opens a modal with a QR code.
1. Scan the QR code in your authenticator app.
1. Enter the code from your app in **Code from authenticator app**.
1. Select **Continue**. n8n displays recovery codes.
1. Save the recovery codes. You need these to regain access to your account if you lose your authenticator.

## Disable 2FA for your instance

Self-hosted users can configure their n8n instance to disable 2FA for all users by setting `N8N_MFA_ENABLED` to false. Note that n8n ignores this if existing users have 2FA enabled. Refer to [Configuration methods](../../hosting/configuration/configuration-methods/) for more information on configuring your n8n instance with environment variables.

---

## Rename Keys

**URL:** llms-txt#rename-keys

**Contents:**
- Node parameters
- Node options
- Templates and examples

Use the Rename Keys node to rename the keys of a key-value pair in n8n.

You can rename one or multiple keys using the Rename Keys node. Select the **Add new key** button to rename a key.

For each key, enter the:

- **Current Key Name**: The current name of the key you want to rename.
- **New Key Name**: The new name you want to assign to the key.

Choose whether to use a **Regex** regular expression to identify keys to rename. To use this option, you must also enter:

- The **Regular Expression** you'd like to use.
- **Replace With**: Enter the new name you want to assign to the key(s) that match the **Regular Expression**.
- You can also choose these Regex-specific options:
  - **Case Insensitive**: Set whether the regular expression should match case (turned off) or be case insensitive (turned on).
  - **Max Depth**: Enter the maximum depth to replace keys, using `-1` for unlimited and `0` for top-level only.

Using a regular expression can affect any keys that match the expression, including keys you've already renamed.

## Templates and examples

**Explore n8n Nodes in a Visual Reference Library**

[View template details](https://n8n.io/workflows/3891-explore-n8n-nodes-in-a-visual-reference-library/)

**Create Salesforce accounts based on Google Sheets data**

[View template details](https://n8n.io/workflows/1792-create-salesforce-accounts-based-on-google-sheets-data/)

**Create Salesforce accounts based on Excel 365 data**

[View template details](https://n8n.io/workflows/1793-create-salesforce-accounts-based-on-excel-365-data/)

[Browse Rename Keys integration templates](https://n8n.io/integrations/rename-keys/), or [search all templates](https://n8n.io/workflows/)

---

## Insights environment variables

**URL:** llms-txt#insights-environment-variables

File-based configuration

You can add `_FILE` to individual variables to provide their configuration in a separate file. Refer to [Keeping sensitive data in separate files](../../configuration-methods/#keeping-sensitive-data-in-separate-files) for more details.

Insights gives instance owners and admins visibility into how workflows perform over time. Refer to [Insights](../../../../insights/) for details.

| Variable                                                 | Type   | Default | Description                                                                             |
| -------------------------------------------------------- | ------ | ------- | --------------------------------------------------------------------------------------- |
| `N8N_DISABLED_MODULES`                                   | String | -       | Set to `insights` to disable the feature and metrics collection for an instance.        |
| `N8N_INSIGHTS_COMPACTION_BATCH_SIZE`                     | Number | 500     | The number of raw insights data to compact in a single batch.                           |
| `N8N_INSIGHTS_COMPACTION_DAILY_TO_WEEKLY_THRESHOLD_DAYS` | Number | 180     | The maximum age (in days) of daily insights data to compact.                            |
| `N8N_INSIGHTS_COMPACTION_HOURLY_TO_DAILY_THRESHOLD_DAYS` | Number | 90      | The maximum age (in days) of hourly insights data to compact.                           |
| `N8N_INSIGHTS_COMPACTION_INTERVAL_MINUTES`               | Number | 60      | Interval (in minutes) at which compaction should run.                                   |
| `N8N_INSIGHTS_FLUSH_BATCH_SIZE`                          | Number | 1000    | The maximum number of insights data to keep in the buffer before flushing.              |
| `N8N_INSIGHTS_FLUSH_INTERVAL_SECONDS`                    | Number | 30      | The interval (in seconds) at which the insights data should be flushed to the database. |

---

## Understand source control and environments

**URL:** llms-txt#understand-source-control-and-environments

- Available on Enterprise.

- You must be an n8n instance owner or instance admin to enable and configure source control.

- Instance owners and instance admins can push changes to and pull changes from the connected repository.

- Project admins can push changes to the connected repository. They can't pull changes from the repository.

- [Environments in n8n](environments/): The purpose of environments, and how they work in n8n.

- [Git in n8n](git/): How n8n uses Git.

- [Branch patterns](patterns/): The possible relationships between n8n instances and Git branches.

---

## Source control and environments

**URL:** llms-txt#source-control-and-environments

- Available on Enterprise.
- You must be an n8n instance owner or instance admin to enable and configure source control.
- Instance owners and instance admins can push changes to and pull changes from the connected repository.
- Project admins can push changes to the connected repository. They can't pull changes from the repository.

n8n uses Git-based source control to support environments. Linking your n8n instances to a Git repository lets you create multiple n8n environments, backed by Git branches.

- [Understand](understand/):
  - [Environments in n8n](understand/environments/): The purpose of environments, and how they work in n8n.
  - [Git and n8n](understand/git/): How n8n uses Git.
  - [Branch patterns](understand/patterns/): The possible relationships between n8n instances and Git branches.
- [Set up source control for environments](setup/): How to connect your n8n instance to Git.
- [Using](using/):
  - [Push and pull](using/push-pull/): Send work to Git, and fetch work from Git to your instance.
  - [Copy work between environments](using/copy-work/): How to copy work between different n8n instances.
- [Tutorial: Create environments with source control](create-environments/): An end-to-end tutorial, setting up environments using n8n's recommended configurations.

- [Variables](../code/variables/): reusable values.
- [External secrets](../external-secrets/): manage [credentials](../glossary/#credential-n8n) with an external secrets vault.

---

## Enable Prometheus metrics

**URL:** llms-txt#enable-prometheus-metrics

**Contents:**
- Queue metrics

To collect and expose metrics, n8n uses the [prom-client](https://www.npmjs.com/package/prom-client) library.

The `/metrics` endpoint is disabled by default, but it's possible to enable it using the `N8N_METRICS` environment variable.

Refer to the respective [Environment Variables](../../environment-variables/endpoints/) (`N8N_METRICS_INCLUDE_*`) for configuring which metrics and labels should get exposed.

Both `main` and `worker` instances are able to expose metrics.

To enable queue metrics, set the `N8N_METRICS_INCLUDE_QUEUE_METRICS` env var to `true`. You can adjust the refresh rate with `N8N_METRICS_QUEUE_METRICS_INTERVAL`.

n8n gathers these metrics from Bull and exposes them on the main instances. On multi-main setups, when aggregating queries, you can identify the leader using the `instance_role_leader` gauge, set to `1` for the leader main and `0` otherwise.

**Examples:**

Example 1 (unknown):
```unknown
export N8N_METRICS=true
```

---

## npm

**URL:** llms-txt#npm

---

## Stop and remove older version

**URL:** llms-txt#stop-and-remove-older-version

---

## Architecture

**URL:** llms-txt#architecture

Understanding n8n's underlying architecture is helpful if you need to:

- Embed n8n
- Customize n8n's default databases

This section is a work in progress. If you have questions, please try the [forum](https://community.n8n.io/) and let n8n know which architecture documents would be useful for you.

---

## Role-based access control (RBAC)

**URL:** llms-txt#role-based-access-control-(rbac)

**Contents:**
- Create a project
- Add and remove users in a project
- Delete a project
- Move workflows and credentials between projects or users
- Using external secrets in projects

RBAC is available on all plans except the Community edition. Different plans have different numbers of projects and roles. Refer to n8n's [pricing page](https://n8n.io/pricing/) for plan details.

Role types and account types

Role types and [account types](../account-types/) are different things. Every account has one type. The account can have different role types for different [projects](projects/).

RBAC is a way of managing access to workflows and [credentials](../../glossary/#credential-n8n) based on user roles and projects. You group workflows into projects, and user access depends on the user's project role. This section provides guidance on using RBAC in n8n.

- [Role types](/user-management/rbac/role-types/)
- [Projects](/user-management/rbac/projects/)

RBAC is available on all plans except the Community edition. Different plans have different numbers of projects and roles. Refer to n8n's [pricing page](https://n8n.io/pricing/) for plan details.

n8n uses projects to group workflows and [credentials](../../../glossary/#credential-n8n), and assigns [roles](../role-types/) to users in each project. This means that a single user can have different roles in different projects, giving them different levels of access.

Instance owners and instance admins can create projects.

1. Select **Add project**.
1. Fill out the project settings.
1. Select **Save**.

## Add and remove users in a project

Project admins can add and remove users.

To add a user to a project:

1. Select the project.
1. Select **Project settings**.
1. Under **Project members**, browse for users or search by username or email address.
1. Select the user you want to add.
1. Check the [role type](../role-types/) and change it if needed.
1. Select **Save**.

To remove a user from a project:

1. Select the project.
1. Select **Project settings**.
1. In the **three-dot menu** for the user you want to remove, select **Remove user**.
1. Select **Save**.

1. Select the project.
1. Select **Project settings**.
1. Select **Delete project**.
1. Choose what to do with the workflows and credentials. You can select:
   - **Transfer its workflows and credentials to another project**: n8n prompts you to choose a project to move the data to.
   - **Delete its workflows and credentials**: n8n prompts you to confirm that you want to delete all the data in the project.

## Move workflows and credentials between projects or users

Workflow and credential owners can move workflows or credentials (changing ownership) to other users or projects they have access to.

Moving revokes sharing

Moving workflows or credentials removes all existing sharing. Be aware that this could impact other workflows currently sharing these resources.

1. Select **Workflow menu** or **Credential menu** > **Move**.

Moving workflows with credentials

When moving a workflow with credentials you have permission to share, you can choose to share the credentials as well. This ensures that the workflow continues to have access to the credentials it needs to execute. n8n will note any credentials that can't be moved (credentials you don't have permission to share).

1. Select the project or user you want to move to.

1. Confirm you understand the impact of the move: workflows may stop working if the credentials they need aren't available in the target project, and n8n removes any current individual sharing.

1. Select **Confirm move to new project**.

## Using external secrets in projects

To use [external secrets](../../../external-secrets/) in a project, you must have an [instance owner or instance admin](../../account-types/) as a member of the project.

---

## HELP n8n_scaling_mode_queue_jobs_completed Total number of jobs completed across all workers in scaling mode since instance start.

**URL:** llms-txt#help-n8n_scaling_mode_queue_jobs_completed-total-number-of-jobs-completed-across-all-workers-in-scaling-mode-since-instance-start.

---

## Troubleshooting OIDC SSO

**URL:** llms-txt#troubleshooting-oidc-sso

**Contents:**
- Known issues
  - State parameter not supported
  - PKCE not supported

### State parameter not supported

When using OIDC providers that enforce the use of the `state` CSRF token parameter, authentication fails with the error:

n8n's current OIDC implementation doesn't handle the `state` parameter that some OIDC providers send as a security measure against CSRF attacks.

For now, the only work around is to configure your OIDC provider to disable the `state` parameter if possible.

n8n is working on adding full support for the OIDC `state` parameter in a future release.

### PKCE not supported

OIDC providers that require PKCE (Proof Key for Code Exchange) may fail authentication or reject n8n's authorization requests. n8n's current OIDC implementation doesn't support PKCE.

The only work around is to configure your OIDC provider to not require PKCE for the n8n client if this option is available in your providers settings.

n8n plans on adding PKCE support in a future release

**Examples:**

Example 1 (unknown):
```unknown
{"code":0,"message":"authorization response from the server is an error"}
```

---

## Filter

**URL:** llms-txt#filter

**Contents:**
- Node parameters
  - Combining conditions
- Node options
- Templates and examples
- Available data type comparisons
  - String
  - Number
  - Date & Time
  - Boolean
  - Array

Filter items based on a condition. If the item meets the condition, the Filter node passes it on to the next node in the Filter node output. If the item doesn't meet the condition, the Filter node omits the item from its output.

Create filter comparison **Conditions** to perform your filter.

- Use the data type dropdown to select the data type and comparison operation type for your condition. For example, to filter for dates after a particular date, select **Date & Time > is after**.
- The fields and values to enter into the condition change based on the data type and comparison you select. Refer to [Available data type comparisons](#available-data-type-comparisons) for a full list of all comparisons by data type.

Select **Add condition** to create more conditions.

### Combining conditions

You can choose to keep items:

- When they meet all conditions: Create two or more conditions and select **AND** in the dropdown between them.
- When they meet any of the conditions: Create two or more conditions and select **OR** in the dropdown between them.

You can't create a mix of AND and OR rules.

- **Ignore Case**: Whether to ignore letter case (turned on) or be case sensitive (turned off).
- **Less Strict Type Validation**: Whether you want n8n to attempt to convert value types based on the operator you choose (turned on) or not (turned off). Turn this on when facing a "wrong type:" error in your node.

## Templates and examples

**Scrape business emails from Google Maps without the use of any third party APIs**

[View template details](https://n8n.io/workflows/2567-scrape-business-emails-from-google-maps-without-the-use-of-any-third-party-apis/)

**Build Your First AI Data Analyst Chatbot**

[View template details](https://n8n.io/workflows/3050-build-your-first-ai-data-analyst-chatbot/)

**Generate Leads with Google Maps**

[View template details](https://n8n.io/workflows/2605-generate-leads-with-google-maps/)

[Browse Filter integration templates](https://n8n.io/integrations/filter/), or [search all templates](https://n8n.io/workflows/)

## Available data type comparisons

String data type supports these comparisons:

- exists
- does not exist
- is empty
- is not empty
- is equal to
- is not equal to
- contains
- does not contain
- starts with
- does not start with
- ends with
- does not end with
- matches regex
- does not match regex

Number data type supports these comparisons:

- exists
- does not exist
- is empty
- is not empty
- is equal to
- is not equal to
- is greater than
- is less than
- is greater than or equal to
- is less than or equal to

Date & Time data type supports these comparisons:

- exists
- does not exist
- is empty
- is not empty
- is equal to
- is not equal to
- is after
- is before
- is after or equal to
- is before or equal to

Boolean data type supports these comparisons:

- exists
- does not exist
- is empty
- is not empty
- is true
- is false
- is equal to
- is not equal to

Array data type supports these comparisons:

- exists
- does not exist
- is empty
- is not empty
- contains
- does not contain
- length equal to
- length not equal to
- length greater than
- length less than
- length greater than or equal to
- length less than or equal to

Object data type supports these comparisons:

- exists
- does not exist
- is empty
- is not empty

---

## Custom variables

**URL:** llms-txt#custom-variables

**Contents:**
- Create variables
- Edit and delete variables
- Use variables in workflows

- Available on Self-hosted Enterprise and Pro Cloud plans.
- You need access to the n8n instance owner account to create and edit variables. All users can use existing variables.

Available in version 0.225.0 and above.

Custom variables are read-only variables that you can use to store and reuse values in n8n workflows.

When you create a variable, it's available to everyone on your n8n instance.

To create a new variable:

1. On the **Variables** page, select **Add Variable**.
1. Enter a **Key** and **Value**. The maximum key length is 50 characters, and the maximum value length is 220 characters. n8n limits the characters you can use in the key and value to lowercase and uppercase letters, numbers, and underscores (`A-Z`, `a-z`, `0-9`, `_`).
1. Select **Save**. The variable is now available for use in all workflows in the n8n instance.

## Edit and delete variables

To edit or delete a variable:

1. On the **Variables** page, hover over the variable you want to change.
1. Select **Edit** or **Delete**.

## Use variables in workflows

You can access variables in the Code node and in [expressions](../../glossary/#expression-n8n):

All variables are strings.

During workflow execution, n8n replaces the variables with the variable value. If the variable has no value, n8n treats its value as `undefined`. Workflows don't automatically fail in this case.

Variables are read-only. You must use the UI to change the values. If you need to set and access custom data within your workflow, use [Workflow static data](../cookbook/builtin/get-workflow-static-data/).

**Examples:**

Example 1 (unknown):
```unknown
// Access a variable
$vars.<variable-name>
```

---

## Set up SAML

**URL:** llms-txt#set-up-saml

**Contents:**
- Enable SAML
- Generic IdP setup
- Setup resources for common IdPs

- Available on Enterprise plans.
- You need to be an instance owner or admin to enable and configure SAML.

1. In n8n, go to **Settings** > **SSO**.
1. Make a note of the n8n **Redirect URL** and **Entity ID**.
   1. **Optional**: if your IdP allows you to set up SAML from imported metadata, navigate to the **Entity ID** URL and save the XML.
   1. **Optional**: if you are running n8n behind a load balancer make sure you have `N8N_EDITOR_BASE_URL` configured.
1. Set up SAML with your IdP (identity provider). You need the redirect URL and entity ID. You may also need an email address and name for the IdP user.
1. After completing setup in your IdP, load the metadata XML into n8n. You can use a metadata URL or raw XML:
   1. **Metadata URL**: Copy the metadata URL from your IdP into the **Identity Provider Settings** field in n8n.
   1. **Raw XML**: Download the metadata XML from your IdP, toggle **Identiy Provider Settings** to **XML**, then copy the raw XML into **Identity Provider Settings**.
1. Select **Save settings**.
1. Select **Test settings** to check your SAML setup is working.
1. Set SAML 2.0 to **Activated**.

Please note, n8n currently doesn't support `POST` binding. Please configure your IdP to use `HTTP` request binding instead.

The steps to configure the IdP vary depending on your chosen IdP. These are some common setup tasks:

- Create an app for n8n in your IdP.

- Map n8n attributes to IdP attributes:

| Name                                                                 | Name format   | Value (IdP side) |
  | -------------------------------------------------------------------- | ------------- | ---------------- |
  | `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress` | URI Reference | User email       |
  | `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/firstname`    | URI Reference | User First Name  |
  | `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/lastname`     | URI Reference | User Last Name   |
  | `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn`          | URI Reference | User Email       |

## Setup resources for common IdPs

Documentation links for common IdPs.

| IdP          | Documentation                                                                                                                                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Auth0        | [Configure Auth0 as SAML Identity Provider: Manually configure SSO integrations](https://auth0.com/docs/authenticate/protocols/saml/saml-sso-integrations/configure-auth0-saml-identity-provider#manually-configure-sso-integrations) |
| Authentik    | [Applications](https://goauthentik.io/docs/applications) and the [SAML Provider](https://docs.goauthentik.io/add-secure-apps/providers/saml/)                                                                                         |
| Azure AD     | [SAML authentication with Azure Active Directory](https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/auth-saml)                                                                                                    |
| JumpCloud    | [How to setup SAML (SSO) applications with JumpCloud](https://jumpcloud.com/support/integrate-with-zoom#configuring-the-sso-integration) (using `Zoom` as an example)                                                                 |
| Keycloak     | Choose a [Getting Started](https://www.keycloak.org/guides#getting-started) guide depending on your hosting.                                                                                                                          |
| Okta         | n8n provides a [Workforce Identity setup guide](../okta/)                                                                                                                                                                             |
| PingIdentity | [PingOne SSO](https://docs.pingidentity.com/pingone/getting_started_with_pingone/p1_p1sso_start.html)                                                                                                                                 |

---

## Declarative-style parameters

**URL:** llms-txt#declarative-style-parameters

**Contents:**
- `methods` and `loadOptions`
- `routing`
- `version`

These are the parameters available for [node base file](../) of declarative-style nodes.

This document gives short code snippets to help understand the code structure and concepts. For a full walk-through of building a node, including real-world code examples, refer to [Build a declarative-style node](../../../declarative-style-node/).

Refer to [Standard parameters](../standard-parameters/) for parameters available to all nodes.

## `methods` and `loadOptions`

*Object* | *Optional*

`methods` contains the `loadOptions` object. You can use `loadOptions` to query the service to get user-specific settings, then return them and render them in the GUI so the user can include them in subsequent queries. The object must include routing information for how to query the service, and output settings that define how to handle the returned options. For example:

*Object* | *Required*

`routing` is an object used within an `options` array in operations and input field objects. It contains the details of an API call.

The code example below comes from the [Declarative-style tutorial](../../../declarative-style-node/). It sets up an integration with a NASA API. It shows how to use `requestDefaults` to set up the basic API call details, and `routing` to add information for each operation.

*Number* or *Array* | *Optional*

If you have one version of your node, this can be a number. If you want to support more than one version, turn this into an array, containing numbers for each node version.

n8n supports two methods of node versioning, but declarative-style nodes must use the light versioning approach. Refer to [Node versioning](../../node-versioning/) for more information.

**Examples:**

Example 1 (unknown):
```unknown
methods : {
	loadOptions: {
		routing: {
			request: {
				url: '/webhook/example-option-parameters',
				method: 'GET',
			},
			output: {
				postReceive: [
					{
						// When the returned data is nested under another property
						// Specify that property key
						type: 'rootProperty',
						properties: {
							property: 'responseData',
						},
					},
					{
						type: 'setKeyValue',
						properties: {
							name: '={{$responseItem.key}} ({{$responseItem.value}})',
							value: '={{$responseItem.value}}',
						},
					},
					{
						// If incoming data is an array of objects, sort alphabetically by key
						type: 'sort',
						properties: {
							key: 'name',
						},
					},
				],
			},
		},
	}
},
```

Example 2 (unknown):
```unknown
description: INodeTypeDescription = {
  // Other node info here
  requestDefaults: {
			baseURL: 'https://api.nasa.gov',
			url: '',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
    properties: [
      // Resources here
      {
        displayName: 'Operation'
        // Other operation details
        options: [
          {
            name: 'Get'
            value: 'get',
            description: '',
            routing: {
              request: {
                method: 'GET',
                url: '/planetary/apod'
              }
            }
          }
        ]
      }
    ]
}
```

---

## External hooks environment variables

**URL:** llms-txt#external-hooks-environment-variables

File-based configuration

You can add `_FILE` to individual variables to provide their configuration in a separate file. Refer to [Keeping sensitive data in separate files](../../configuration-methods/#keeping-sensitive-data-in-separate-files) for more details.

You can define external hooks that n8n executes whenever a specific operation runs. Refer to [Backend hooks](../../../../embed/configuration/#backend-hooks) for examples of available hooks and [Hook files](../../../../embed/configuration/#backend-hook-files) for information on file formatting.

| Variable                       | Type   | Description                                                                                                |
| ------------------------------ | ------ | ---------------------------------------------------------------------------------------------------------- |
| `EXTERNAL_HOOK_FILES`          | String | Files containing backend external hooks. Provide multiple files as a colon-separated list ("`:`").         |
| `EXTERNAL_FRONTEND_HOOKS_URLS` | String | URLs to files containing frontend external hooks. Provide multiple URLs as a colon-separated list ("`:`"). |

---

## Securing n8n

**URL:** llms-txt#securing-n8n

Securing your n8n instance can take several forms.

At a high level, you can:

- Conduct a [security audit](../security-audit/) to identify security risks.
- [Set up SSL](../set-up-ssl/) to enforce secure connections.
- [Set up Single Sign-On](../set-up-sso/) for user account management.
- Use [two-factor authentication (2FA)](../../../user-management/two-factor-auth/) for your users.

More granularly, consider blocking or opting out of features or data collection you don't want:

- [Disable the public API](../disable-public-api/) if you aren't using it.
- [Opt out of data collection](../telemetry-opt-out/) of the anonymous data n8n collects automatically.
- [Block certain nodes](../blocking-nodes/) from being available to your users.

---

## Copy work between environments

**URL:** llms-txt#copy-work-between-environments

**Contents:**
- Single branch
- Multiple branches
- Automatically send changes to n8n

The steps to send work from one n8n instance to another are different depending on whether you use a single Git branch or multiple branches.

If you have a single Git branch the steps to copy work are:

1. Push work from one instance to the Git branch.
1. Log in to the other instance to pull the work from Git. You can [automate pulls](#automatically-send-changes-to-n8n).

If you have more than one Git branch, you need to merge the branches in your Git provider to copy work between environments. You can't copy work directly between environments in n8n.

1. Do work in your developments instance.
1. Push the work to the development branch in Git.
1. Merge your development branch into your production branch. Refer to the documentation for your Git provider for guidance on doing this:
   - [GitHub: Creating a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
   - [GitLab: Creating merge requests](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
   - [Git: Basic branching and merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)
1. In your production n8n instance, pull the changes. You can [automate pulls](#automatically-send-changes-to-n8n).

## Automatically send changes to n8n

You can automate parts of the process of copying work, using the `/source-control/pull` API endpoint. Call the API after merging the changes:

This means you can use a GitHub Action or GitLab CI/CD to automatically pull changes to the production instance on merge.

A GitHub Action example:

**Examples:**

Example 1 (unknown):
```unknown
curl --request POST \
	--location '<YOUR-INSTANCE-URL>/api/v1/source-control/pull' \
	--header 'Content-Type: application/json' \
	--header 'X-N8N-API-KEY: <YOUR-API-KEY>' \
	--data '{"force": true}'
```

Example 2 (unknown):
```unknown
name: CI
on:
  # Trigger the workflow on push or pull request events for the "production" branch
  push:
    branches: [ "production" ]
  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:
jobs:
  run-pull:
    runs-on: ubuntu-latest
    steps:
      - name: PULL
				# Use GitHub secrets to protect sensitive information
        run: >
          curl --location '${{ secrets.INSTANCE_URL }}/version-control/pull' --header
          'Content-Type: application/json' --header 'X-N8N-API-KEY: ${{ secrets.INSTANCE_API_KEY }}'
```

---

## Set a save location for the log file

**URL:** llms-txt#set-a-save-location-for-the-log-file

export N8N_LOG_FILE_LOCATION=/home/jim/n8n/logs/n8n.log

---

## Google: OAuth2 generic

**URL:** llms-txt#google:-oauth2-generic

**Contents:**
- Prerequisites
- Set up OAuth
  - Create a Google Cloud Console project
  - Enable APIs
  - Configure your OAuth consent screen
  - Create your Google OAuth client credentials
  - Finish your n8n credential
- Video
- Scopes
- Troubleshooting

This document contains instructions for creating a generic OAuth2 Google credential for use with [custom operations](../../../../custom-operations/).

Note for n8n Cloud users

For the following nodes, you can authenticate by selecting **Sign in with Google** in the OAuth section:

- [Google Calendar](../../../app-nodes/n8n-nodes-base.googlecalendar/)
- [Google Contacts](../../../app-nodes/n8n-nodes-base.googlecontacts/)
- [Google Drive](../../../app-nodes/n8n-nodes-base.googledrive/)
- [Google Mail](../../../app-nodes/n8n-nodes-base.gmail/)
- [Google Sheets](../../../app-nodes/n8n-nodes-base.googlesheets/)
- [Google Sheets Trigger](../../../trigger-nodes/n8n-nodes-base.googlesheetstrigger/)
- [Google Tasks](../../../app-nodes/n8n-nodes-base.googletasks/)

- Create a [Google Cloud](https://cloud.google.com/) account.

There are five steps to connecting your n8n credential to Google services:

1. [Create a Google Cloud Console project](#create-a-google-cloud-console-project).
1. [Enable APIs](#enable-apis).
1. [Configure your OAuth consent screen](#configure-your-oauth-consent-screen).
1. [Create your Google OAuth client credentials](#create-your-google-oauth-client-credentials).
1. [Finish your n8n credential](#finish-your-n8n-credential).

### Create a Google Cloud Console project

First, create a Google Cloud Console project. If you already have a project, jump to the [next section](#enable-apis):

1. Log in to your [Google Cloud Console](https://console.cloud.google.com) using your Google credentials.

1. In the top menu, select the project dropdown in the top navigation and select **New project** or go directly to the [New Project](https://console.cloud.google.com/projectcreate) page.

1. Enter a **Project name** and select the **Location** for your project.

1. Select **Create**.

1. Check the top navigation and make sure the project dropdown has your project selected. If not, select the project you just created.

Check the project dropdown in the Google Cloud top navigation

With your project created, enable the APIs you'll need access to:

1. Access your [Google Cloud Console - Library](https://console.cloud.google.com/apis/library). Make sure you're in the correct project.

Check the project dropdown in the Google Cloud top navigation

1. Go to **APIs & Services > Library**.

1. Search for and select the API(s) you want to enable. For example, for the Gmail node, search for and enable the Gmail API.

1. Some integrations require other APIs or require you to request access:

- Google Perspective: [Request API Access](https://developers.perspectiveapi.com/s/docs-get-started).
   - Google Ads: Get a [Developer Token](https://developers.google.com/google-ads/api/docs/first-call/dev-token).

Google Drive API required

The following integrations require the Google Drive API, as well as their own API:

- Google Docs
   - Google Sheets
   - Google Slides

In addition to the Vertex AI API you will also need to enable the [Cloud Resource Manager API](https://console.cloud.google.com/apis/api/cloudresourcemanager.googleapis.com/).

1. Select **ENABLE**.

### Configure your OAuth consent screen

If you haven't used OAuth in your Google Cloud project before, you'll need to [configure the OAuth consent screen](https://developers.google.com/workspace/guides/configure-oauth-consent):

1. Access your [Google Cloud Console - Library](https://console.cloud.google.com/apis/library). Make sure you're in the correct project.

Check the project dropdown in the Google Cloud top navigation

1. Open the left navigation menu and go to **APIs & Services > OAuth consent screen**. Google will redirect you to the Google Auth Platform overview page.

1. Select **Get started** on the **Overview** tab to begin configuring OAuth consent.

1. Enter an **App name** and **User support email** to include on the Oauth screen. Select **Next** to continue.

1. For the **Audience**, select **Internal** for user access within your organization's Google workspace or **External** for any user with a Google account. Refer to Google's [User type documentation](https://support.google.com/cloud/answer/15549945?sjid=17061891731152303663-EU#user-type) for more information on user types. Select **Next** to continue.

1. Select the **Email addresses** Google should use to contact you about changes to your project. Select **Next** to continue.

1. Read and accept the Google's User Data Policy. Select **Continue** and then select **Create**.

1. In the left-hand menu, select **Branding**.

1. In the **Authorized domains** section, select **Add domain**:

- If you're using n8n's Cloud service, add `n8n.cloud`
   - If you're [self-hosting](../../../../../hosting/), add the domain of your n8n instance.

1. Select **Save** at the bottom of the page.

### Create your Google OAuth client credentials

Next, create the OAuth client credentials in Google:

1. Access your [Google Cloud Console](https://console.cloud.google.com/). Make sure you're in the correct project.
1. In the **APIs & Services** section, select [**Credentials**](https://console.cloud.google.com/apis/credentials).
1. Select **+ Create credentials** > **OAuth client ID**.
1. In the **Application type** dropdown, select **Web application**.
1. Google automatically generates a **Name**. Update the **Name** to something you'll recognize in your console.
1. From your n8n credential, copy the **OAuth Redirect URL**. Paste it into the **Authorized redirect URIs** in Google Console.
1. Select **Create**.

### Finish your n8n credential

With the Google project and credentials fully configured, finish the n8n credential:

1. From Google's **OAuth client created** modal, copy the **Client ID**. Enter this in your n8n credential.

1. From the same Google modal, copy the **Client Secret**. Enter this in your n8n credential.

1. You must provide the scopes for this credential. Refer to [Scopes](#scopes) for more information. Enter multiple scopes in a space-separated list, for example:

1. In n8n, select **Sign in with Google** to complete your Google authentication.

1. **Save** your new credentials.

The following video demonstrates the steps described above:

Google services have one or more possible access scopes. A scope limits what a user can do. Refer to [OAuth 2.0 Scopes for Google APIs](https://developers.google.com/identity/protocols/oauth2/scopes) for a list of scopes for all services.

n8n doesn't support all scopes. When creating a generic Google OAuth2 API credential, you can enter scopes from the **Supported scopes** list below. If you enter a scope that n8n doesn't already support, it won't work.

| Service                           | Available scopes                                                                                                                                                                                                                                                                                                                 |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Gmail                             | - `https://www.googleapis.com/auth/gmail.labels` - `https://www.googleapis.com/auth/gmail.addons.current.action.compose` - `https://www.googleapis.com/auth/gmail.addons.current.message.action` - `https://mail.google.com/` - `https://www.googleapis.com/auth/gmail.modify` - `https://www.googleapis.com/auth/gmail.compose` |
| Google Ads                        | - `https://www.googleapis.com/auth/adwords`                                                                                                                                                                                                                                                                                      |
| Google Analytics                  | - `https://www.googleapis.com/auth/analytics` - `https://www.googleapis.com/auth/analytics.readonly`                                                                                                                                                                                                                             |
| Google BigQuery                   | - `https://www.googleapis.com/auth/bigquery`                                                                                                                                                                                                                                                                                     |
| Google Books                      | - `https://www.googleapis.com/auth/books`                                                                                                                                                                                                                                                                                        |
| Google Calendar                   | - `https://www.googleapis.com/auth/calendar` - `https://www.googleapis.com/auth/calendar.events`                                                                                                                                                                                                                                 |
| Google Cloud Natural Language     | - `https://www.googleapis.com/auth/cloud-language` - `https://www.googleapis.com/auth/cloud-platform`                                                                                                                                                                                                                            |
| Google Cloud Storage              | - `https://www.googleapis.com/auth/cloud-platform` - `https://www.googleapis.com/auth/cloud-platform.read-only` - `https://www.googleapis.com/auth/devstorage.full_control` - `https://www.googleapis.com/auth/devstorage.read_only` - `https://www.googleapis.com/auth/devstorage.read_write`                                   |
| Google Contacts                   | - `https://www.googleapis.com/auth/contacts`                                                                                                                                                                                                                                                                                     |
| Google Docs                       | - `https://www.googleapis.com/auth/documents` - `https://www.googleapis.com/auth/drive` - `https://www.googleapis.com/auth/drive.file`                                                                                                                                                                                           |
| Google Drive                      | - `https://www.googleapis.com/auth/drive` - `https://www.googleapis.com/auth/drive.appdata` - `https://www.googleapis.com/auth/drive.photos.readonly`                                                                                                                                                                            |
| Google Firebase Cloud Firestore   | - `https://www.googleapis.com/auth/datastore` - `https://www.googleapis.com/auth/firebase`                                                                                                                                                                                                                                       |
| Google Firebase Realtime Database | - `https://www.googleapis.com/auth/userinfo.email` - `https://www.googleapis.com/auth/firebase.database` - `https://www.googleapis.com/auth/firebase`                                                                                                                                                                            |
| Google Perspective                | - `https://www.googleapis.com/auth/userinfo.email`                                                                                                                                                                                                                                                                               |
| Google Sheets                     | - `https://www.googleapis.com/auth/drive.file` - `https://www.googleapis.com/auth/spreadsheets`                                                                                                                                                                                                                                  |
| Google Slide                      | - `https://www.googleapis.com/auth/drive.file` - `https://www.googleapis.com/auth/presentations`                                                                                                                                                                                                                                 |
| Google Tasks                      | - `https://www.googleapis.com/auth/tasks`                                                                                                                                                                                                                                                                                        |
| Google Translate                  | - `https://www.googleapis.com/auth/cloud-translation`                                                                                                                                                                                                                                                                            |
| GSuite Admin                      | - `https://www.googleapis.com/auth/admin.directory.group` - `https://www.googleapis.com/auth/admin.directory.user` - `https://www.googleapis.com/auth/admin.directory.domain.readonly` - `https://www.googleapis.com/auth/admin.directory.userschema.readonly`                                                                   |

### Google hasn't verified this app

If using the OAuth authentication method, you might see the warning **Google hasn't verified this app**. To avoid this:

- If your app **User Type** is **Internal**, create OAuth credentials from the same account you want to authenticate.
- If your app **User Type** is **External**, you can add your email to the list of testers for the app: go to the [**Audience**](https://console.cloud.google.com/auth/audience) page and add the email you're signing in with to the list of **Test users**.

If you need to use credentials generated by another account (by a developer or another third party), follow the instructions in [Google Cloud documentation | Authorization errors: Google hasn't verified this app](https://developers.google.com/nest/device-access/reference/errors/authorization#google_hasnt_verified_this_app).

### Google Cloud app becoming unauthorized

For Google Cloud apps with **Publishing status** set to **Testing** and **User type** set to **External**, consent and tokens expire after seven days. Refer to [Google Cloud Platform Console Help | Setting up your OAuth consent screen](https://support.google.com/cloud/answer/10311615?hl=en#zippy=%2Ctesting) for more information. To resolve this, reconnect the app in the n8n credentials modal.

**Examples:**

Example 1 (unknown):
```unknown
https://www.googleapis.com/auth/gmail.labels https://www.googleapis.com/auth/gmail.addons.current.action.compose
```

---

## Data filtering

**URL:** llms-txt#data-filtering

Available on Cloud Pro and Enterprise plans.

Search and filter data in the node **INPUT** and **OUTPUT** panels. Use this to check your node's data.

1. In a node, select **Search** in the **INPUT** or **OUTPUT** panel.
1. Enter your search term.

n8n filters as you type your search, displaying the objects or rows containing the term.

Filtering is purely visual: n8n doesn't change or delete data. The filter resets when you close and reopen the node.

---

## Text courses

**URL:** llms-txt#text-courses

**Contents:**
- Available courses

If you've found your way here, it means you're serious about your interest in automation. Maybe you're tired of manually entering data into the same spreadsheet every day, of clicking through a series of tabs and buttons for that one piece of information you need, of managing tens of different tools and systems.

Whatever the reason, one thing is clear: you shouldn't spend precious time doing things that don't spark joy or contribute to your personal and professional growth.

These tasks can and should be automated! And you don't need advanced technical knowledge or excellent coding skills to do this–with no-code tools like n8n, automation is for everyone.

- [Level 1: Beginner course](level-one/)
- [Level 2: Intermediate course](level-two/)

---

## Push and pull

**URL:** llms-txt#push-and-pull

**Contents:**
- Fetch other people's work
  - Workflow and credential owner may change on pull
  - Pulling may cause brief service interruption
- Send your work to Git
- What gets committed
- Merge behaviors and conflicts
  - Workflows
  - Credentials, variables and workflow tags

If your n8n instance connects to a Git repository, you need to keep your work in sync with Git.

This document assumes some familiarity with Git concepts and terminology. Refer to [Git and n8n](../../understand/git/) for an introduction to how n8n works with Git.

Recommendation: don't push and pull to the same n8n instance

You can push work from an instance to a branch, and pull to the same instance. n8n doesn't recommend this. To reduce the risk of merge conflicts and overwriting work, try to create a process where work goes in one direction: either to Git, or from Git, but not both.

## Fetch other people's work

n8n roles control which users can pull (fetch) changes

You must be an instance owner or instance admin to pull changes from git.

To pull work from Git, select **Pull** in the main menu.

Pull and push buttons when menu is closed

Pull and push buttons when menu is open

n8n may display a warning about overriding local changes. Select **Pull and override** to override your local work with the content in Git.

When the changes include new variable or credential stubs, n8n notifies you that you need to populate the values for the items before using them.

How deleted resources are handled

When workflows, credentials, variables, and tags are deleted from the repository, your local versions of these resources aren't deleted automatically. Instead, when you pull repository changes, n8n notifies you about any outdated resources and asks if you'd like to delete them.

### Workflow and credential owner may change on pull

When you pull from Git to an n8n instance, n8n tries to assign workflows and credentials to a matching user or project.

If the original owner is a user:

If the same owner is available on both instances (matching email), the owner remains the same. If the original owner isn't on the new instance, n8n sets the user performing the pull as the workflow owner.

If the original owner is a [project](../../../user-management/rbac/):

n8n tries to match the original project name to a project name on the new instance. If no matching project exists, n8n creates a new project with the name, assigns the current user as project owner, and imports the workflows and credentials to the project.

### Pulling may cause brief service interruption

If you pull changes to an active workflow, n8n sets the workflow to inactive while pulling, then reactivates it. This may result in a few seconds of downtime for the workflow.

## Send your work to Git

n8n roles control which users can push changes

You must be an instance owner, instance admin, or project admin to push changes to git.

1. Select **Push** in the main menu.

Pull and push buttons when menu is closed

Pull and push buttons when menu is open

1. In the **Commit and push changes** modal, select which workflows you want to push. You can filter by status (new, modified, deleted) and search for workflows. n8n automatically pushes tags, and variable and credential stubs.

1. Enter a commit message. This should be a one sentence description of the changes you're making.

1. Select **Commit and Push**. n8n sends the work to Git, and displays a success message on completion.

## What gets committed

n8n commits the following to Git:

- Workflows, including their tags and the email address of the workflow owner. You can choose which workflows to push.
- Credential stubs (ID, name, type)
- Variable stubs (ID and name)
- Projects
- Folders

## Merge behaviors and conflicts

n8n's implementation of source control is opinionated. It resolves merge conflicts for credentials and variables automatically. n8n can't detect conflicts on workflows.

You have to explicitly tell n8n what to do about workflows when pushing or pulling. The Git repository acts as the source of truth.

When pulling, you might get warned that your local copy of a workflow differs from Git, and if you accept, your local copy would be overridden. Be careful not to lose relevant changes when pulling.

When you push, your local workflow will override what's in Git, so make sure that you have the most up to date version or you risk overriding recent changes.

To prevent the issue described above, you should immediately push your changes to a workflow once you finish working on it. Then it's safe to pull.

To avoid losing data:

- Design your source control setup so that workflows flow in one direction. For example, make edits on a development instance, push to Git, then pull to production. Don't make edits on the production instance and push them.
- Don't push all workflows. Select the ones you need.
- Be cautious about manually editing files in the Git repository.

### Credentials, variables and workflow tags

Credentials and variables can't have merge issues, as n8n chooses the version to keep.

- If the tag, variable or credential doesn't exist, n8n creates it.
- If the tag, variable or credential already exists, n8n doesn't update it, unless:
  - You set the value of a variable using the API or externally. The new value overwrites any existing value.
  - The credential name has changed. n8n uses the version in Git.
  - The name of a tag has changed. n8n updates the tag name. Be careful when renaming tags as tag names are unique and this could cause database issues when it comes to uniqueness during the pull process.

- n8n overwrites the entire variables and tags files.
- If a credential already exists, n8n overwrites it with the changes, but doesn't apply these changes to existing credentials on pull.

Manage credentials with an external secrets vault

If you need different credentials on different n8n environments, use [external secrets](../../../external-secrets/).

---

## Welcome to n8n Docs

**URL:** llms-txt#welcome-to-n8n-docs

**Contents:**
- Where to start
- About n8n

This is the documentation for [n8n](https://n8n.io/), a [fair-code](https://faircode.io) licensed workflow automation tool that combines AI capabilities with business process automation.

It covers everything from setup to usage and development. It's a work in progress and all [contributions](help-community/contributing/) are welcome.

Jump in with n8n's quickstart guides.

[Try it out](try-it-out/)

- **Choose the right n8n for you**

Cloud, npm, self-host . . .

[Options](choose-n8n/)

- **Explore integrations**

Browse n8n's integrations library.

[Find your apps](integrations/)

- **Build AI functionality**

n8n supports building AI functionality and tools.

[Advanced AI](advanced-ai/)

n8n (pronounced n-eight-n) helps you to connect any app with an API with any other, and manipulate its data with little or no code.

- Customizable: highly flexible workflows and the option to build custom nodes.
- Convenient: use the npm or Docker to try out n8n, or the Cloud hosting option if you want us to handle the infrastructure.
- Privacy-focused: self-host n8n for privacy and security.

---

## Cloud concurrency

**URL:** llms-txt#cloud-concurrency

**Contents:**
- Concurrency limits
- Details
- Comparison to queue mode

This document discusses concurrency in n8n Cloud. Read [self-hosted n8n concurrency control](../../hosting/scaling/concurrency-control/) to learn how concurrency works with self-hosted n8n instances.

Too many concurrent executions can cause performance degradation and unresponsiveness. To prevent this and improve instance stability, n8n sets concurrency limits for production executions in regular mode.

Any executions beyond the limits queue for later processing. These executions remain in the queue until concurrency capacity frees up, and are then processed in FIFO order.

## Concurrency limits

n8n limits the number of concurrent executions for Cloud instances according to their plan. Refer to [Pricing](https://n8n.io/pricing/) for details.

You can view the number of active executions and your plan's concurrency limit at the top of a project's or workflow's executions tab.

Some other details about concurrency to keep in mind:

- Concurrency control applies only to production executions: those started from a webhook or trigger node. It doesn't apply to any other kinds, such as manual executions, sub-workflow executions, or error executions.
- [Test evaluations](../../glossary/#evaluation-n8n) don't count towards concurrency limits. Your test evaluation concurrency limit is equal to, but separate from, your plan's regular concurrency limit.
- You can't retry queued executions. Cancelling or deleting a queued execution also removes it from the queue.
- On instance startup, n8n resumes queued executions up to the concurrency limit and re-enqueues the rest.

## Comparison to queue mode

Queue mode is available for Cloud Enterprise plans. To enable it, [contact n8n](https://n8n-community.typeform.com/to/y9X2YuGa).

Concurrency in queue mode is a separate mechanism from concurrency in regular mode. In queue mode, the concurrency settings determine how many jobs each worker can run in parallel. In regular mode, concurrency limits apply to the entire instance.

---

## Get help with n8n

**URL:** llms-txt#get-help-with-n8n

**Contents:**
- Where to get help
  - n8n community forum
  - Email support
- What to include in your message
  - Your n8n instance details
  - Details about your problem

n8n provides different support options depending on your plan and the nature of your problem.

### n8n community forum

n8n provides free community support for all n8n users through the [forum](https://community.n8n.io/).

This is the best source for answers of all kinds, as both the n8n support team and community members can help.

n8n offers email support through the [help@n8n.io](mailto:help@n8n.io) for the following plans:

- [Enterprise plans](https://n8n.io/enterprise/) can use email support with an SLA for technical, account, billing, and other inquiries.
- Other [Cloud plans](https://n8n.io/pricing/) can use email support for admin and billing issues. For technical support, please refer to the forum.

## What to include in your message

When posting to the forum or emailing customer support, you'll get help faster if you provide details in your first message about your n8n instance and the issue you're experiencing.

### Your n8n instance details

To collect basic information about your n8n instance:

1. Open the left-side panel.
1. Select **Help**.
1. Select **About n8n**.
1. The **About n8n** modal opens to display your current information.
1. Select **Copy debug information** to copy your information.
1. Include this information in your forum post or support email.

### Details about your problem

To help resolve your issues more efficiently, here are some things you can include to provide more context:

- **Screenshots or video recordings**: A quick Loom or screen recording that shows what's happening.
- **Relevant documentation**: If you've followed any guides or documentation, include links to them in your message.
- **n8n Cloud workspace (if possible)**: If contacting support, provide the workspace URL for your n8n Cloud instance. It looks something like `https://xxxxx.n8n.app.cloud`.
- **Steps to reproduce the issue**: A simple step-by-step outline of what you did before encountering the issue.
- **Workflow or Configuration files**: Sharing relevant workflows or configuration files can be a huge help.

It may also be helpful to include a [HAR (HTTP Archive) file](<https://en.wikipedia.org/wiki/HAR_(file_format)>) in your message. You can learn how to generate a HAR file in your browser and how to redact sensitive details before posting using the [Har Analizer](https://toolbox.googleapps.com/apps/har_analyzer/).

---

## Troubleshooting SAML SSO

**URL:** llms-txt#troubleshooting-saml-sso

If you get an error when testing your SAML setup, check the following:

- Does the app you created in your IdP support SAML?
- Did you enter the n8n redirect URL and entity ID in the correct fields in your IdP?
- Is the metadata XML correct? Check that the metadata you copied into n8n is formatted correctly.

For more support, use the [forum](https://community.n8n.io/), or contact your support representative if you have a paid support plan.

---

## For example, **/myDirectory/**

**URL:** llms-txt#for-example,-**/mydirectory/**

**Contents:**
- Templates and examples

## Templates and examples

**Breakdown Documents into Study Notes using Templating MistralAI and Qdrant**

[View template details](https://n8n.io/workflows/2339-breakdown-documents-into-study-notes-using-templating-mistralai-and-qdrant/)

**Build a Financial Documents Assistant using Qdrant and Mistral.ai**

[View template details](https://n8n.io/workflows/2335-build-a-financial-documents-assistant-using-qdrant-and-mistralai/)

**Organise Your Local File Directories With AI**

[View template details](https://n8n.io/workflows/2334-organise-your-local-file-directories-with-ai/)

[Browse Local File Trigger integration templates](https://n8n.io/integrations/local-file-trigger/), or [search all templates](https://n8n.io/workflows/)

---

## `vars`

**URL:** llms-txt#`vars`

- Available on Self-hosted Enterprise and Pro and Enterprise Cloud plans.
- You need access to the n8n instance owner account to create variables.

`vars` contains all [Variables](../../../variables/) for the active environment. It's read-only: you can access variables using `vars`, but must set them using the UI.

**Examples:**

Example 1 (unknown):
```unknown
// Access a variable
$vars.<variable-name>
```

---

## Configure n8n to use your own certificate authority or self-signed certificate

**URL:** llms-txt#configure-n8n-to-use-your-own-certificate-authority-or-self-signed-certificate

**Contents:**
- Docker
  - Docker CLI
  - Docker Compose
- Certificate requirements for Custom Trust Store

You can add your own certificate authority (CA) or self-signed certificate to n8n. This means you are able to trust a certain SSL certificate instead of trusting all invalid certificates, which is a potential security risk.

Added in version 1.42.0

This feature is available in version 1.42.0 and above.

To use this feature you need to place your certificates in a folder and mount the folder to `/opt/custom-certificates` in the container. The external path that you map to `/opt/custom-certificates` must be writable by the container.

The examples below assume you have a folder called `pki` that contains your certificates in either the directory you run the command from or next to your docker compose file.

When using the CLI you can use the `-v` flag from the command line:

You should also give the right permissions to the imported certs. You can do this once the container is running (assuming n8n as the container name):

## Certificate requirements for Custom Trust Store

Supported certificate types:

- Root CA Certificates: these are certificates from Certificate Authorities that sign other certificates. Trust these to accept all certificates signed by that CA.
- Self-Signed Certificates: certificates that servers create and sign themselves. Trust these to accept connections to that specific server only.

You must use PEM format:

- Text-based format with BEGIN/END markers
- Supported file extensions: `.pem`, `.crt`, `.cer`
- Contains the public certificate (no private key needed)

The system doesn't accept:

- DER/binary format files
- PKCS#7 (.p7b) files
- PKCS#12 (.pfx, .p12) files
- Private key files
- Convert these formats to PEM before use.

**Examples:**

Example 1 (unknown):
```unknown
docker run -it --rm \
 --name n8n \
 -p 5678:5678 \
 -v ./pki:/opt/custom-certificates \
 docker.n8n.io/n8nio/n8n
```

Example 2 (unknown):
```unknown
name: n8n
services:
    n8n:
        volumes:
            - ./pki:/opt/custom-certificates
        container_name: n8n
        ports:
            - 5678:5678
        image: docker.n8n.io/n8nio/n8n
```

Example 3 (unknown):
```unknown
docker exec --user 0 n8n chown -R 1000:1000 /opt/custom-certificates
```

Example 4 (unknown):
```unknown
-----BEGIN CERTIFICATE-----
MIIDXTCCAkWgAwIBAgIJAKoK/heBjcOuMA0GCSqGSIb3DQEBBQUAMEUxCzAJBgNV
[base64 encoded data]
-----END CERTIFICATE-----
```

---

## Source control environment variables

**URL:** llms-txt#source-control-environment-variables

File-based configuration

You can add `_FILE` to individual variables to provide their configuration in a separate file. Refer to [Keeping sensitive data in separate files](../../configuration-methods/#keeping-sensitive-data-in-separate-files) for more details.

n8n uses Git-based source control to support environments. Refer to [Source control and environments](../../../../source-control-environments/setup/) for more information on how to link a Git repository to an n8n instance and configure your source control.

| Variable                                 | Type   | Default   | Description                                                                                                                   |
| ---------------------------------------- | ------ | --------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `N8N_SOURCECONTROL_DEFAULT_SSH_KEY_TYPE` | String | `ed25519` | Set to `rsa` to make RSA the default SSH key type for [Source control setup](../../../../source-control-environments/setup/). |

---

## Configure n8n webhooks with reverse proxy

**URL:** llms-txt#configure-n8n-webhooks-with-reverse-proxy

n8n creates the webhook URL by combining `N8N_PROTOCOL`, `N8N_HOST` and `N8N_PORT`. If n8n runs behind a reverse proxy, that won't work. That's because n8n runs internally on port 5678 but the reverse proxy exposes it to the web on port 443.

When running n8n behind a reverse proxy, it's important to do the following:

- set the webhook URL manually with the `WEBHOOK_URL` environment variable so that n8n can display it in the editor UI and register the correct webhook URLs with external services.
- Set the `N8N_PROXY_HOPS` environment variable to `1`.
- On the last proxy on the request path, set the following headers to pass on information about the initial request:
  - [`X-Forwarded-For`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Forwarded-For)
  - [`X-Forwarded-Host`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Forwarded-Host)
  - [`X-Forwarded-Proto`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Forwarded-Proto)

Refer to [Environment variables reference](../../environment-variables/endpoints/) for more information on this variable.

**Examples:**

Example 1 (unknown):
```unknown
export WEBHOOK_URL=https://n8n.example.com/
export N8N_PROXY_HOPS=1
```

---

## User management

**URL:** llms-txt#user-management

**Contents:**
- Setup guides

User management in n8n allows you to invite people to work in your n8n instance. It includes:

- Login and password management
- Adding and removing users
- Three [account types](account-types/): **Owner** and **Member** (and **Admin** for Pro & Enterprise plans)

The user management feature doesn't send personal information, such as email or username, to n8n.

This section contains most usage information for user management, and the [Cloud setup guide](cloud-setup/). If you self-host n8n, there are extra steps to configure your n8n instance. Refer to the [Self-hosted guide](../hosting/configuration/user-management-self-hosted/).

This section includes guides to configuring [LDAP](ldap/) and [SAML](saml/) in n8n.

---

## Environments in n8n

**URL:** llms-txt#environments-in-n8n

**Contents:**
- Environments: What and why
- Environments in n8n

n8n has built its environments feature on top of Git, a version control software. This document helps you understand:

- The purpose of environments.
- How environments work in n8n.

## Environments: What and why

In software development, the environment is all the infrastructure and tooling around the code, including the tools that run the software, and the specific configuration of those tools. For a more detailed introduction to environments in software development, refer to [Codecademy | Environments](https://www.codecademy.com/article/environments).

Low-code development in n8n is similar. n8n is where you build and run your workflows. Your instance may have particular configurations: on Cloud, n8n determines the configuration. On self-hosted instances, there are extensive [configuration options](../../../hosting/configuration/configuration-methods/). You may also have made changes to the settings of your instance. This combination of n8n and your instance's specific configuration and settings is the environment your workflows run in.

There are advantages to having more than one environment. A common pattern is to have different environments for development and production:

- Development: do work and make changes.
- Production: the live environment.

A setup like this helps you make changes to workflows without breaking workflows that are in use.

## Environments in n8n

In n8n, an environment comprises two parts, an n8n instance and a Git branch:

- The n8n instance is where you build and run workflows.
- The Git branch stores copies of the workflows, as well as tags, and variable and credential stubs.

n8n doesn't sync credentials and variable values with Git. You must set up the credentials and variable values manually when setting up a new instance. For more information, refer to [Push and pull | What gets committed](../../using/push-pull/#what-gets-committed).

How you copy work between environments depends on your branch and n8n instance configuration:

- Multiple instances, one branch: you can push from one instance to the Git branch, then pull the work to another instance.
- Multiple instances, multiple branches: you need to create a pull request and merge in your Git provider. For example, if you have development, test, and production branches, each linked to their own instance, you need to merge the development branch into test to make the work from the development instance available on the test instance. Refer to [Copy work between environments](../../using/copy-work/) for more information, including steps to partially automate the process.

For detailed guidance on pushing and pulling work, refer to [Push and pull](../../using/push-pull/).

Refer to [Set up source control](../../setup/) to learn more about linking your n8n instance to Git, or follow the [Tutorial: Create environments with source control](../../create-environments/) to set up your environments using one of n8n's recommended configurations.

---

## Set the logging level to 'debug'

**URL:** llms-txt#set-the-logging-level-to-'debug'

export N8N_LOG_LEVEL=debug

---

## n8n Cloud

**URL:** llms-txt#n8n-cloud

n8n Cloud is n8n's hosted solution. It provides:

- No technical set up or maintenance for your n8n instance
- Continual uptime monitoring
- Managed OAuth for authentication
- One-click upgrades to the newest n8n versions

[Sign up for n8n Cloud](https://www.n8n.io/)

n8n Cloud isn't available in Russia and Belarus. Refer to this blog post: [Update on n8n cloud accounts in Russia and Belarus](https://blog.n8n.io/update-on-n8n-cloud-accounts-in-russia-and-belarus/) for more information.

---

## Cloud admin dashboard

**URL:** llms-txt#cloud-admin-dashboard

**Contents:**
- Access the dashboard from the app
- Access the dashboard if the app is offline

Instance owners can access the admin dashboard to manage their Cloud instance. This is where you can upgrade your n8n version and set the timezone.

## Access the dashboard from the app

1. [Log in to n8n](https://app.n8n.cloud/magic-link)
1. Select **Admin Dashboard**. n8n opens the dashboard.

## Access the dashboard if the app is offline

If your instance is down, you can still access the admin dashboard. When you log in to the app, n8n will ask you if you want a magic link to access your dashboard. Select **Send magic link**, then check your email for the link.

---

## Merging and splitting data

**URL:** llms-txt#merging-and-splitting-data

**Contents:**
- Merging data
  - Merge Exercise
- Looping
- Splitting data in batches
  - Loop/Batch Exercise

In this chapter, you will learn how to merge and split data, and in what cases it might be useful to perform these operations.

In some cases, you might need to merge (combine) and process data from different sources.

Merging data can involve:

- Creating one data set from multiple sources.
- Synchronizing data between multiple systems. This could include removing duplicate data or updating data in one system when it changes in another.

One-way vs. two-way sync

In a one-way sync, data is synchronized in one direction. One system serves as the single source of truth. When information changes in that main system, it automatically changes in the secondary system; but if information changes in the secondary system, the changes aren't reflected in the main system.

In a two-way sync, data is synchronized in both directions (between both systems). When information changes in either of the two systems, it automatically changes in the other one as well.

[This blog tutorial](https://blog.n8n.io/how-to-sync-data-between-two-systems/) explains how to sync data one-way and two-way between two CRMs.

In n8n, you can merge data from two different nodes using the [Merge node](../../../integrations/builtin/core-nodes/n8n-nodes-base.merge/), which provides several merging options:

- [Append](../../../integrations/builtin/core-nodes/n8n-nodes-base.merge/#append)
- [Combine](../../../integrations/builtin/core-nodes/n8n-nodes-base.merge/#combine)
  - [Merge by Fields](../../../integrations/builtin/core-nodes/n8n-nodes-base.merge/#combine-by-matching-fields): requires input fields to match on
  - [Merge by Position](../../../integrations/builtin/core-nodes/n8n-nodes-base.merge/#combine-by-position)
  - [Combine all possible combinations](../../../integrations/builtin/core-nodes/n8n-nodes-base.merge/#combine-by-all-possible-combinations)
- [Choose Branch](../../../integrations/builtin/core-nodes/n8n-nodes-base.merge/#choose-branch)

Notice that Combine > Merge by Fields requires you enter input fields to match on. These fields should contain identical values between the data sources so n8n can properly match data together. In the **Merge node**, they're called `Input 1 Field` and `Input 2 Field`.

*Property Input fields in the Merge node*

Property Input in dot notation

If you want to reference nested values in the **Merge node** parameters `Input 1 Field` and `Input 2 Field`, you need to enter the property key in dot-notation format (as text, not as an expression).

You can also find the **Merge node** under the alias Join. This might be more intuitive if you're familiar with SQL joins.

Build a workflow that merges data from the Customer Datastore node and Code node.

1. Add a **Merge node** that takes `Input 1` from a **Customer Datastore node** and `Input 2` from a **Code node**.
1. In the **Customer Datastore node**, run the operation **Get All People**.
1. In the **Code node**, create an array of two objects with three properties: `name`, `language`, and `country`, where the property `country` has two sub-properties `code` and `name`.
   - Fill out the values of these properties with the information of two characters from the Customer Database.
   - For example, Jay Gatsby's language is English and country name is United States.
1. In the **Merge node**, try out different merge options.

The workflow for this exercise looks like this:

*Workflow exercise for merging data*

If you merge data with the option **Keep Matches** using the name as the input fields to match, the result should look like this (note this example only contains Jay Gatsby; yours might look different depending on which characters you selected):

*Output of Merge node with option to keep matches*

To check the configuration of the nodes, you can copy the JSON workflow code below and paste it into your Editor UI:

In some cases, you might need to perform the same operation on each element of an array or each data item (for example sending a message to every contact in your address book). In technical terms, you need to iterate through the data (with loops).

n8n generally handles this repetitive processing automatically, as the nodes run once for each item, so you don't need to build loops into your workflows.

However, there are some [exceptions of nodes and operations](../../../flow-logic/looping/#node-exceptions) that will require you to build a loop into your workflow.

To [create a loop in an n8n workflow](../../../flow-logic/looping/#using-loops-in-n8n), you need to connect the output of one node to the input of a previous node, and add an **If node** to check when to stop the loop.

## Splitting data in batches

If you need to process large volumes of incoming data, execute the **Code node** multiple times, or avoid API rate limits, it's best to split the data into batches (groups) and process these batches.

For these processes, use the [**Loop Over Items node**](../../../integrations/builtin/core-nodes/n8n-nodes-base.splitinbatches/). This node splits input data into a specified batch size and, with each iteration, returns a predefined amount of data.

Execution of Loop Over Items node

The **Loop Over Items node** stops executing after all the incoming items get divided into batches and passed on to the next node in the workflow, so it's not necessary to add an **If node** to stop the loop.

### Loop/Batch Exercise

Build a workflow that reads the RSS feed from Medium and dev.to. The workflow should consist of three nodes:

1. A **Code node** that returns the URLs of the RSS feeds of Medium (`https://medium.com/feed/n8n-io`) and dev.to (`https://dev.to/feed/n8n`).
1. A **Loop Over Items node** with `Batch Size: 1`, that takes in the inputs from the **Code node** and **RSS Read node** and iterates over the items.
1. An **RSS Read node** that gets the URL of the Medium RSS feed, passed as an expression: `{{ $json.url }}`.
   - The **RSS Read node** is one of the [exception nodes](../../../flow-logic/looping/#node-exceptions) which processes only the first item it receives, so the **Loop Over Items node** is necessary for iterating over multiple items.

1. Add a **Code Node**. You can format the code in several ways, one way is:
   - Set **Mode** to `Run Once for All Items`.

- Set **Language** to `JavaScript`.

- Copy the code below and paste it into the JavaScript Code editor:

1. Add a **Loop Over Items node** connected to the **Code node**.
   - Set **Batch Size** to `1`.
1. The **Loop Over Items node** automatically adds a node called "Replace Me". Replace that node with an **RSS Read node**.
   - Set the **URL** to use the url from the Code Node: `{{ $json.url }}`.

The workflow for this exercise looks like this:

*Workflow for getting RSS feeds from two blogs*

To check the configuration of the nodes, you can copy the JSON workflow code below and paste it into your Editor UI:

**Examples:**

Example 1 (unknown):
```unknown
{
"meta": {
	"templateCredsSetupCompleted": true,
	"instanceId": "cb484ba7b742928a2048bf8829668bed5b5ad9787579adea888f05980292a4a7"
},
"nodes": [
	{
	"parameters": {
		"mode": "combine",
		"mergeByFields": {
		"values": [
			{
			"field1": "name",
			"field2": "name"
			}
		]
		},
		"options": {}
	},
	"id": "578365f3-26dd-4fa6-9858-f0a5fdfc413b",
	"name": "Merge",
	"type": "n8n-nodes-base.merge",
	"typeVersion": 2.1,
	"position": [
		720,
		580
	]
	},
	{
	"parameters": {},
	"id": "71aa5aad-afdf-4f8a-bca0-34450eee8acc",
	"name": "When clicking \"Execute workflow\"",
	"type": "n8n-nodes-base.manualTrigger",
	"typeVersion": 1,
	"position": [
		260,
		560
	]
	},
	{
	"parameters": {
		"operation": "getAllPeople"
	},
	"id": "497174fe-3cab-4160-8103-78b44efd038d",
	"name": "Customer Datastore (n8n training)",
	"type": "n8n-nodes-base.n8nTrainingCustomerDatastore",
	"typeVersion": 1,
	"position": [
		500,
		460
	]
	},
	{
	"parameters": {
		"jsCode": "return [\n  {\n    'name': 'Jay Gatsby',\n    'language': 'English',\n    'country': {\n      'code': 'US',\n      'name': 'United States'\n    }\n    \n  }\n  \n];"
	},
	"id": "387e8a1e-e796-4f05-8e75-7ce25c786c5f",
	"name": "Code",
	"type": "n8n-nodes-base.code",
	"typeVersion": 2,
	"position": [
		500,
		720
	]
	}
],
"connections": {
	"When clicking \"Execute workflow\"": {
	"main": [
		[
		{
			"node": "Customer Datastore (n8n training)",
			"type": "main",
			"index": 0
		},
		{
			"node": "Code",
			"type": "main",
			"index": 0
		}
		]
	]
	},
	"Customer Datastore (n8n training)": {
	"main": [
		[
		{
			"node": "Merge",
			"type": "main",
			"index": 0
		}
		]
	]
	},
	"Code": {
	"main": [
		[
		{
			"node": "Merge",
			"type": "main",
			"index": 1
		}
		]
	]
	}
},
"pinData": {}
}
```

Example 2 (unknown):
```unknown
let urls = [
     	{
     		json: {
     		url: 'https://medium.com/feed/n8n-io'
     		}
     	},
     	{
     	json: {
     		url: 'https://dev.to/feed/n8n'
     		} 
     	}
     ]
     return urls;
```

Example 3 (unknown):
```unknown
{
"meta": {
	"templateCredsSetupCompleted": true,
	"instanceId": "cb484ba7b742928a2048bf8829668bed5b5ad9787579adea888f05980292a4a7"
},
"nodes": [
	{
	"parameters": {},
	"id": "ed8dc090-ae8c-4db6-a93b-0fa873015c25",
	"name": "When clicking \"Execute workflow\"",
	"type": "n8n-nodes-base.manualTrigger",
	"typeVersion": 1,
	"position": [
		460,
		460
	]
	},
	{
	"parameters": {
		"jsCode": "let urls = [\n  {\n    json: {\n      url: 'https://medium.com/feed/n8n-io'\n    }\n  },\n  {\n   json: {\n     url: 'https://dev.to/feed/n8n'\n   } \n  }\n]\n\nreturn urls;"
	},
	"id": "1df2a9bf-f970-4e04-b906-92dbbc9e8d3a",
	"name": "Code",
	"type": "n8n-nodes-base.code",
	"typeVersion": 2,
	"position": [
		680,
		460
	]
	},
	{
	"parameters": {
		"options": {}
	},
	"id": "3cce249a-0eab-42e2-90e3-dbdf3684e012",
	"name": "Loop Over Items",
	"type": "n8n-nodes-base.splitInBatches",
	"typeVersion": 3,
	"position": [
		900,
		460
	]
	},
	{
	"parameters": {
		"url": "={{ $json.url }}",
		"options": {}
	},
	"id": "50e1c1dc-9a5d-42d3-b7c0-accc31636aa6",
	"name": "RSS Read",
	"type": "n8n-nodes-base.rssFeedRead",
	"typeVersion": 1,
	"position": [
		1120,
		460
	]
	}
],
"connections": {
	"When clicking \"Execute workflow\"": {
	"main": [
		[
		{
			"node": "Code",
			"type": "main",
			"index": 0
		}
		]
	]
	},
	"Code": {
	"main": [
		[
		{
			"node": "Loop Over Items",
			"type": "main",
			"index": 0
		}
		]
	]
	},
	"Loop Over Items": {
	"main": [
		null,
		[
		{
			"node": "RSS Read",
			"type": "main",
			"index": 0
		}
		]
	]
	},
	"RSS Read": {
	"main": [
		[
		{
			"node": "Loop Over Items",
			"type": "main",
			"index": 0
		}
		]
	]
	}
},
"pinData": {}
}
```

---

## Get the binary data buffer

**URL:** llms-txt#get-the-binary-data-buffer

The binary data buffer contains all the binary file data processed by a workflow. You need to access it if you want to perform operations on the binary data, such as:

- Manipulating the data: for example, adding column headers to a CSV file.
- Using the data in calculations: for example, calculating a hash value based on it.
- Complex HTTP requests: for example, combining file upload with sending other data formats.

Not available in Python

`getBinaryDataBuffer()` isn't supported when using Python.

You can access the buffer using n8n's `getBinaryDataBuffer()` function:

You should always use the `getBinaryDataBuffer()` function, and avoid using older methods of directly accessing the buffer, such as targeting it with expressions like `items[0].binary.data.data`.

**Examples:**

Example 1 (unknown):
```unknown
/* 
* itemIndex: number. The index of the item in the input data.
* binaryPropertyName: string. The name of the binary property. 
* The default in the Read/Write File From Disk node is 'data'. 
*/
let binaryDataBufferItem = await this.helpers.getBinaryDataBuffer(itemIndex, binaryPropertyName);
```

Example 2 (unknown):
```unknown
let binaryDataBufferItem = await this.helpers.getBinaryDataBuffer(0, 'data');
// Returns the data in the binary buffer for the first input item
```

---

## Account types

**URL:** llms-txt#account-types

There are three account types: owner, admin, and member. The account type affects the user permissions and access.

To use admin accounts, you need a pro or enterprise plan.

Account types and role types

Account types and role types are different things. Role types are part of [RBAC](../rbac/).

Every account has one type. The account can have different [role types](../rbac/role-types/) for different [projects](../rbac/projects/).

Create a member-level account for the owner

n8n recommends that owners create a member-level account for themselves. Owners can see and edit all workflows, credentials, and projects. However, there is no way to see who created a particular workflow, so there is a risk of overriding other people's work if you build and edit workflows as an owner.

| Permission                                                          | Owner | Admin | Member |
| ------------------------------------------------------------------- | ----- | ----- | ------ |
| Manage own email and password                                       |       |       |        |
| Manage own workflows                                                |       |       |        |
| View, create, and use tags                                          |       |       |        |
| Delete tags                                                         |       |       |        |
| View and share all workflows                                        |       |       |        |
| View, edit, and share all credentials                               |       |       |        |
| Set up and use [Source control](../../source-control-environments/) |       |       |        |
| Create [projects](../rbac/projects/)                                |       |       |        |
| View all projects                                                   |       |       |        |
| Add and remove users                                                |       |       |        |
| Access the Cloud dashboard                                          |       |       |        |

---

## What you can do

**URL:** llms-txt#what-you-can-do

**Contents:**
- All users
- Self-hosted users
  - GDPR for self-hosted users

It's also your responsibility as a customer to ensure you are securing your code and data. This document lists some steps you can take.

- Report security issues and [terms of service](https://n8n.io/legal/#terms) violations to security@n8n.io.
- If more than one person uses your n8n instance, set up [User management](../../user-management/) and follow the [Best practices](../../user-management/best-practices/).
- Use OAuth to connect integrations whenever possible.

If you self-host n8n, there are additional steps you can take:

- Set up a reverse proxy to handle TLS, ensuring data is encrypted in transit.
- Ensure data is encrypted at rest by using encrypted partitions, or encryption at the hardware level, and ensuring n8n and its database is written to that location.
- Run a [Security audit](../../hosting/securing/security-audit/).
- Be aware of the [Risks](../../integrations/community-nodes/risks/) when installing community nodes, or choose to disable them.
- Make sure users can't import external modules in the Code node. Refer to [Environment variables | Nodes](../../hosting/configuration/environment-variables/nodes/) for more information.
- Choose to exclude certain nodes. For example, you can disable nodes like Execute Command or SSH. Refer to [Environment variables | Nodes](../../hosting/configuration/environment-variables/nodes/) for more information.
- For maximum privacy, you can [Isolate n8n](../../hosting/configuration/configuration-examples/isolation/).

### GDPR for self-hosted users

If you self-host n8n, you are responsible for deleting user data. If you need to delete data on behalf of one of your users, you can delete the respective execution. n8n recommends configuring n8n to prune execution data automatically every few days to avoid effortful GDPR request handling as much as possible. Configure this using the `EXECUTIONS_DATA_MAX_AGE` environment variable. Refer to [Environment variables](../../hosting/configuration/environment-variables/) for more information.

---

## Set up Single Sign-On (SSO)

**URL:** llms-txt#set-up-single-sign-on-(sso)

- Available on Enterprise plans.
- You need to be an instance owner or admin to enable and configure SAML or OIDC.

n8n supports the SAML and OIDC authentication protocols for single sign-on (SSO). See [OIDC vs SAML](https://www.onelogin.com/learn/oidc-vs-saml) for more general information on the two protocols, the differences between them, and their respective benefits.

- [Set up SAML](../../../user-management/saml/setup/): a general guide to setting up SAML in n8n, and links to resources for common identity providers (IdPs).
- [Set up OIDC](../../../user-management/oidc/setup/): a general guide to setting up OpenID Connect (OIDC) SSO in n8n.

---

## Configure self-hosted n8n for user management

**URL:** llms-txt#configure-self-hosted-n8n-for-user-management

**Contents:**
- Setup
  - Step one: SMTP
  - Step two: In-app setup
  - Step three: Invite users

User management in n8n allows you to invite people to work in your n8n instance.

This document describes how to configure your n8n instance to support user management, and the steps to start inviting users.

Refer to the main [User management](../../../user-management/) guide for more information about usage, including:

- [Managing users](../../../user-management/manage-users/)
- [Account types](../../../user-management/account-types/)
- [Best practices](../../../user-management/best-practices/)

For LDAP setup information, refer to [LDAP](../../../user-management/ldap/).

For SAML setup information, refer to [SAML](../../../user-management/saml/).

Basic auth and JWT removed

n8n removed support for basic auth and JWT in version 1.0.

There are three stages to set up user management in n8n:

1. Configure your n8n instance to use your SMTP server.
1. Start n8n and follow the setup steps in the app.
1. Invite users.

n8n recommends setting up an SMTP server, for user invites and password resets.

Optional from 0.210.1

From version 0.210.1 onward, this step is optional. You can choose to manually copy and send invite links instead of setting up SMTP. Note that if you skip this step, users can't reset passwords.

Get the following information from your SMTP provider:

- Server name
- SMTP username
- SMTP password
- SMTP sender name

To set up SMTP with n8n, configure the SMTP environment variables for your n8n instance. For information on how to set environment variables, refer to [Configuration](../configuration-methods/)

| Variable                                    | Type    | Description                                                                                                                  | Required? |
| ------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- | --------- |
| `N8N_EMAIL_MODE`                            | string  | `smtp`                                                                                                                       | Required  |
| `N8N_SMTP_HOST`                             | string  | *your_SMTP_server_name*                                                                                                      | Required  |
| `N8N_SMTP_PORT`                             | number  | *your_SMTP_server_port* Default is `465`.                                                                                    | Optional  |
| `N8N_SMTP_USER`                             | string  | *your_SMTP_username*                                                                                                         | Optional  |
| `N8N_SMTP_PASS`                             | string  | *your_SMTP_password*                                                                                                         | Optional  |
| `N8N_SMTP_OAUTH_SERVICE_CLIENT`             | string  | *your_OAuth_service_client*                                                                                                  | Optional  |
| `N8N_SMTP_OAUTH_PRIVATE_KEY`                | string  | *your_OAuth_private_key*                                                                                                     | Optional  |
| `N8N_SMTP_SENDER`                           | string  | Sender email address. You can optionally include the sender name. Example with name: *N8N `<contact@n8n.com>`*               | Required  |
| `N8N_SMTP_SSL`                              | boolean | Whether to use SSL for SMTP (true) or not (false). Defaults to `true`.                                                       | Optional  |
| `N8N_UM_EMAIL_TEMPLATES_INVITE`             | string  | Full path to your HTML email template. This overrides the default template for invite emails.                                | Optional  |
| `N8N_UM_EMAIL_TEMPLATES_PWRESET`            | string  | Full path to your HTML email template. This overrides the default template for password reset emails.                        | Optional  |
| `N8N_UM_EMAIL_TEMPLATES_WORKFLOW_SHARED`    | String  | Overrides the default HTML template for notifying users that a credential was shared. Provide the full path to the template. | Optional  |
| `N8N_UM_EMAIL_TEMPLATES_CREDENTIALS_SHARED` | String  | Overrides the default HTML template for notifying users that a credential was shared. Provide the full path to the template. | Optional  |
| `N8N_UM_EMAIL_TEMPLATES_PROJECT_SHARED`     | String  | Overrides the default HTML template for notifying users that a project was shared. Provide the full path to the template.    | Optional  |

If your n8n instance is already running, you need to restart it to enable the new SMTP settings.

More configuration options

There are more configuration options available as environment variables. Refer to [Environment variables](../environment-variables/) for a list. These include options to disable tags, workflow templates, and the personalization survey, if you don't want your users to see them.

If you're not familiar with SMTP, this [blog post by SendGrid](https://sendgrid.com/blog/what-is-an-smtp-server/) offers a short introduction, while [Wikipedia's Simple Mail Transfer Protocol article](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol) provides more detailed technical background.

### Step two: In-app setup

When you set up user management for the first time, you create an owner account.

1. Open n8n. The app displays a signup screen.
1. Enter your details. Your password must be at least eight characters, including at least one number and one capital letter.
1. Click **Next**. n8n logs you in with your new owner account.

### Step three: Invite users

You can now invite other people to your n8n instance.

1. Sign into your workspace with your owner account. (If you are in the Admin Panel open your **Workspace** from the Dashboard)
1. Click the three dots next to your user icon at the bottom left and click **Settings**. n8n opens your **Personal settings** page.
1. Click **Users** to go to the **Users** page.
1. Click **Invite**.
1. Enter the new user's email address.
1. Click **Invite user**. n8n sends an email with a link for the new user to join.

---

## Item linking

**URL:** llms-txt#item-linking

Programmatic-style nodes only

This guidance applies to programmatic-style nodes. If you're using declarative style, n8n handles paired items for you automatically.

Use n8n's item linking to access data from items that precede the current item. n8n needs to know which input item a given output item comes from. If this information is missing, expressions in other nodes may break. As a node developer, you must ensure any items returned by your node support this.

This applies to programmatic nodes (including trigger nodes). You don't need to consider item linking when building a declarative-style node. Refer to [Choose your node building approach](../../../plan/choose-node-method/) for more information on node styles.

Start by reading [Item linking concepts](../../../../../data/data-mapping/data-item-linking/item-linking-concepts/), which provides a conceptual overview of item linking, and details of the scenarios where n8n can handle the linking automatically.

If you need to handle item linking manually, do this by setting `pairedItem` on each item your node returns:

**Examples:**

Example 1 (unknown):
```unknown
// Use the pairedItem information of the incoming item
newItem = {
	"json": { . . . },
	"pairedItem": {
		"item": item.pairedItem,
		// Optional: choose the input to use
		// Set this if your node combines multiple inputs
		"input": 0
};

// Or set the index manually
newItem = {
		"json": { . . . }
		"pairedItem": {
			"item": i,
			// Optional: choose the input to use
			// Set this if your node combines multiple inputs
			"input": 0
		},
};
```

---

## Set log output to both console and a log file

**URL:** llms-txt#set-log-output-to-both-console-and-a-log-file

export N8N_LOG_OUTPUT=console,file

---

## Light evaluations

**URL:** llms-txt#light-evaluations

**Contents:**
- What are light evaluations?
- How it works
  - 1. Create a dataset
  - 2. Wire the dataset up to your workflow
  - 3. Write workflow outputs back to dataset
  - 4. Run evaluation

Available on registered community and paid plans

Light evaluations are available to registered community users and on all paid plans.

## What are light evaluations?

When building your workflow, you often want to test it with a handful of examples to get a sense of how it performs and make improvements. At this stage of workflow development, looking over workflow outputs for each example is often enough. The benefits of setting up more [formal scoring or metrics](../metric-based-evaluations/) don't yet justify the effort.

Light evaluation allows you to run the examples in a test dataset through your workflow one-by-one, writing the outputs back to your dataset. You can then examine those outputs next to each other, and visually compare them to the expected outputs (if you have them).

Credentials for Google Sheets

Evaluations use data tables or Google Sheets to store the test dataset. To use Google Sheets as a dataset source, configure a [Google Sheets credential](../../../integrations/builtin/credentials/google/).

Light evaluations take place in the 'Editor' tab of your workflow, although you’ll find instructions on how to set it up in the 'Evaluations' tab.

1. Create a dataset
1. Wire the dataset up to the workflow
1. Write workflow outputs back to dataset
1. Run evaluation

The following explanation will use a sample workflow that assigns a category and priority to incoming support tickets.

### 1. Create a dataset

Create a data table or Google Sheet with a handful of examples for your workflow. Your dataset should contain columns for:

- The workflow input
- (Optional) The expected or correct workflow output
- The actual output

Leave the actual output column or columns blank, since you'll be filling them during the evaluation.

A [sample dataset](https://docs.google.com/spreadsheets/d/1uuPS5cHtSNZ6HNLOi75A2m8nVWZrdBZ_Ivf58osDAS8/edit?gid=294497137#gid=294497137) for the support ticket classification workflow.

### 2. Wire the dataset up to your workflow

#### Insert an evaluation trigger to pull in your dataset

Each time the [evaluation trigger](../../../integrations/builtin/core-nodes/n8n-nodes-base.evaluationtrigger/) runs, it will output a single item representing one row of your dataset.

Clicking the 'Evaluate all' button to the left of the evaluation trigger will run your workflow multiple times in sequence, once for each row in your dataset. This is a special behavior of the evaluation trigger.

While wiring the trigger up, you often only want to run it once. You can do this by either:

- Setting the trigger's 'Max rows to process' to 1
- Clicking on the 'Execute node' button on the trigger (rather than the 'Evaluate all' button)

#### Wire the trigger up to your workflow

You can now connect the evaluation trigger to the rest of your workflow and reference the data that it outputs. At a minimum, you need to use the dataset’s input column(s) later in the workflow.

If you have multiple triggers in your workflow you will need to [merge their branches together](../tips-and-common-issues/#combining-multiple-triggers).

The support ticket classification workflow with the evaluation trigger added in and wired up.

### 3. Write workflow outputs back to dataset

To populate the output column(s) of your dataset when the evaluation runs:

- Insert the 'Set outputs' action of the [evaluation node](../../../integrations/builtin/core-nodes/n8n-nodes-base.evaluation/)
- Wire it up to your workflow at a point after it has produced the outputs you're evaluating
- In the node's parameters, map the workflow outputs into the correct dataset column

The support ticket classification workflow with the 'set outputs' node added in and wired up.

### 4. Run evaluation

Click on the **Execute workflow** button to the left of the evaluation trigger. The workflow will execute multiple times, once for each row of the dataset:

Review the outputs of each execution in the data table or Google Sheet, and examine the execution details using the workflow's 'executions' tab if you need to.

Once your dataset grows past a handful of examples, consider [metric-based evaluation](../metric-based-evaluations/) to get a numerical view of performance. See also [tips and common issues](../tips-and-common-issues/).

---

## Programmatic-style parameters

**URL:** llms-txt#programmatic-style-parameters

**Contents:**
- `defaultVersion`
- `methods` and `loadOptions`
- `version`

These are the parameters available for [node base file](../) of programmatic-style nodes.

This document gives short code snippets to help understand the code structure and concepts. For a full walk-through of building a node, including real-world code examples, refer to [Build a programmatic-style node](../../../programmatic-style-node/).

Programmatic-style nodes also use the `execute()` method. Refer to [Programmatic-style execute method](../programmatic-style-execute-method/) for more information.

Refer to [Standard parameters](../standard-parameters/) for parameters available to all nodes.

*Number* | *Optional*

Use `defaultVersion` when using the full versioning approach.

n8n support two methods of node versioning. Refer to [Node versioning](../../node-versioning/) for more information.

## `methods` and `loadOptions`

*Object* | *Optional*

Contains the `loadOptions` method for programmatic-style nodes. You can use this method to query the service to get user-specific settings (such as getting a user's email labels from Gmail), then return them and render them in the GUI so the user can include them in subsequent queries.

For example, n8n's [Gmail node](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Google/Gmail/Gmail.node.ts) uses `loadOptions` to get all email labels:

*Number* or *Array* | *Optional*

Use `version` when using the light versioning approach.

If you have one version of your node, this can be a number. If you want to support multiple versions, turn this into an array, containing numbers for each node version.

n8n support two methods of node versioning. Programmatic-style nodes can use either. Refer to [Node versioning](../../node-versioning/) for more information.

**Examples:**

Example 1 (unknown):
```unknown
methods = {
		loadOptions: {
			// Get all the labels and display them
			async getLabels(
				this: ILoadOptionsFunctions,
			): Promise<INodePropertyOptions[]> {
				const returnData: INodePropertyOptions[] = [];
				const labels = await googleApiRequestAllItems.call(
					this,
					'labels',
					'GET',
					'/gmail/v1/users/me/labels',
				);
				for (const label of labels) {
					const labelName = label.name;
					const labelId = label.id;
					returnData.push({
						name: labelName,
						value: labelId,
					});
				}
				return returnData;
			},
		},
	};
```

---

## metrics

**URL:** llms-txt#metrics

---

## Troubleshooting

**URL:** llms-txt#troubleshooting

**Contents:**
- Credentials
  - Error message: 'Credentials of type "\*" aren't known'
- Editor UI
  - Error message: 'There was a problem loading init data: API-Server can not be reached. It's probably down'
  - Node icon doesn't show up in the Add Node menu and the Editor UI
  - Node icon doesn't fit
  - Node doesn't show up in the Add Node menu
  - Changes to the description properties don't show in the UI on refreshing
  - Linter incorrectly warning about file name case

### Error message: 'Credentials of type "\*" aren't known'

Check that the name in the credentials array matches the name used in the property name of the credentials' class.

### Error message: 'There was a problem loading init data: API-Server can not be reached. It's probably down'

- Check that the names of the node file, node folder, and class match the path added to `packages/nodes-base/package.json`.
- Check that the names used in the `displayOptions` property are names used by UI elements in the node.

### Node icon doesn't show up in the Add Node menu and the Editor UI

- Check that the icon is in the same folder as the node.
- Check that it's either in PNG or SVG format.
- When the `icon` property references the icon file, check that it includes the logo extension (`.png` or `.svg`) and that it prefixes it with `file:`. For example, `file:friendGrid.png` or `file:friendGrid.svg`.

### Node icon doesn't fit

- If you use an SVG file, make sure the canvas size is square. You can find instructions to change the canvas size of an SVG file using GIMP [here](https://docs.gimp.org/2.10/en/gimp-image-resize.html).
- If you use a PNG file, make sure that it's 60x60 pixels.

### Node doesn't show up in the Add Node menu

Check that you registered the node in the `package.json` file in your project.

### Changes to the description properties don't show in the UI on refreshing

Every time you change the description properties, you have to stop the current n8n process (`ctrl` + `c`) and run it again. You may also need to re-run `npm link`.

### Linter incorrectly warning about file name case

The node linter has rules for file names, including what case they should be. Windows users may encounter an issue when renaming files that causes the linter to continue giving warnings, even after you rename the files. This is due to a [known Windows issue](https://answers.microsoft.com/en-us/windows/forum/all/file-renaming-when-changing-case-doesnt-work/aa15ff7c-dd2d-4ed3-bcce-799ca90d4e58) with changing case when renaming files.

---

## Allows usage of only crypto and fs

**URL:** llms-txt#allows-usage-of-only-crypto-and-fs

export NODE_FUNCTION_ALLOW_BUILTIN=crypto,fs

---

## Pull latest (stable) version

**URL:** llms-txt#pull-latest-(stable)-version

docker pull docker.n8n.io/n8nio/n8n

---

## Git and n8n

**URL:** llms-txt#git-and-n8n

**Contents:**
- Git overview
- Branches: Multiple copies of a project
- Local and remote: Moving work between your machine and a Git provider
- Push, pull, and commit

n8n uses Git to provide source control. To use this feature, it helps to have some knowledge of basic Git concepts. n8n doesn't implement all Git functionality: you shouldn't view n8n's source control as full version control.

New to Git and source control?

If you're new to Git, don't panic. You don't need to learn Git to use n8n. This document explains the concepts you need. You do need some Git knowledge to set up the source control, as this involves work in your Git provider.

Familiar with Git and source control?

If you're familiar with Git, don't rely on behaviors matching exactly. In particular, be aware that source control in n8n doesn't support a pull request-style review and merge process, unless you do this outside n8n in your Git provider.

This page introduces the Git concepts and terminology used in n8n. It doesn't cover everything you need to set up and manage a repository. The person doing the [Setup](../../setup/) should have some familiarity with Git and with their Git hosting provider.

This is a brief introduction

Git is a complex topic. This section provides a brief introduction to the key terms you need when using environments in n8n. If you want to learn about Git in depth, refer to [GitHub | Git and GitHub learning resources](https://docs.github.com/en/get-started/quickstart/git-and-github-learning-resources).

[Git](https://git-scm.com/) is a tool for managing, tracking, and collaborating on multiple versions of documents. It's the basis for widely used platforms such as [GitHub](https://github.com/) and [GitLab](https://about.gitlab.com/).

## Branches: Multiple copies of a project

Git uses branches to maintain multiple copies of a document alongside each other. Every branch has its own version. A common pattern is to have a main branch, and then everyone who wants to contribute to the project works on their own branch (copy). When they finish their work, their branch is merged back into the main branch.

## Local and remote: Moving work between your machine and a Git provider

A common pattern when using Git is to install Git on your own computer, and use a Git provider such as GitHub to work with Git in the cloud. In effect, you have a Git repository (project) on GitHub, and work with copies of it on your local machine.

n8n uses this pattern for source control: you'll work with your workflows on your n8n instance, but send them to your Git provider to store them.

## Push, pull, and commit

n8n uses three key Git processes:

- **Push**: send work from your instance to Git. This saves a copy of your workflows and tags, as well as credential and variable stubs, to Git. You can choose which workflows you want to save.

- **Pull**: get the workflows, tags, and variables from Git and load it into n8n. You will need to populate any credentials or variable stubs included in the refreshed items.

Pulling overwrites your work

If you have made changes to a workflow in n8n, you must push the changes to Git before pulling. When you pull, it overwrites any changes you've made if they aren't stored in Git.

- **Commit**: a commit in n8n is a single occurrence of pushing work to Git. In n8n, commit and push happen at the same time.

Refer to [Push and pull](../../using/push-pull/) for detailed information about how n8n interacts with Git.

---

## How can you contribute?

**URL:** llms-txt#how-can-you-contribute?

**Contents:**
- Share some love: Review us
- Help out the community
- Contribute a workflow template
- Build a node
- Contribute to the code
- Contribute to the docs
- Contribute to community tutorials
  - How to submit a post
- Refer a candidate

There are a several ways in which you can contribute to n8n, depending on your skills and interests. Each form of contribution is valuable to us!

## Share some love: Review us

- Star n8n on [GitHub](https://github.com/n8n-io/n8n) and [Docker Hub](https://hub.docker.com/r/n8nio/n8n).
- Follow us on [Twitter](https://twitter.com/n8n_io), [LinkedIn](https://www.linkedin.com/company/28491094), and [Facebook](https://www.facebook.com/n8nio/).
- Upvote n8n on [AlternativeTo](https://alternativeto.net/software/n8n-io/) and [Alternative.me](https://alternative.me/n8n-io).
- Add n8n to your stack on [Stackshare](https://stackshare.io/n8n).
- Write a review about n8n on [G2](https://www.g2.com/products/n8n/reviews), [Slant](https://www.slant.co/improve/options/37977/~n8n-review), and [Capterra](https://www.capterra.com/p/198028/n8n-io/).

## Help out the community

You can participate in the [forum](https://community.n8n.io/) and help the community members out with their questions.

When sharing workflows in the community forum for debugging, use code blocks. Use triple backticks  ```` to wrap the workflow JSON in a code block.

The following video demonstrates the steps of sharing workflows on the community forum:

## Contribute a workflow template

You can submit your workflows to n8n's template library.

n8n is working on a creator program, and developing a marketplace of templates. This is an ongoing project, and details are likely to change.

Refer to [n8n Creator hub](https://www.notion.so/n8n/n8n-Creator-hub-7bd2cbe0fce0449198ecb23ff4a2f76f) for information on how to submit templates and become a creator.

Create an integration for a third party service. Check out [the node creation docs](../../integrations/creating-nodes/overview/) for guidance on how to create and publish a community node.

## Contribute to the code

There are different ways in which you can contribute to the n8n code base:

- Fix [issues](https://github.com/n8n-io/n8n/issues) reported on GitHub. The [CONTRIBUTING guide](https://github.com/n8n-io/n8n/blob/master/CONTRIBUTING.md) will help you get your development environment ready in minutes.
- Add additional functionality to an existing third party integration.
- Add a new feature to n8n.

## Contribute to the docs

You can contribute to the n8n documentation, for example by documenting nodes or fixing issues.

The repository for the docs is [here](https://github.com/n8n-io/n8n-docs) and the guidelines for contributing to the docs are [here](https://github.com/n8n-io/n8n-docs/blob/master/CONTRIBUTING.md).

## Contribute to community tutorials

Share your own video or written guides on our [community-driven, searchable library of n8n tutorials and training materials](https://community.n8n.io/t/how-to-share-your-tutorials/48398). Tag them for easy discovery, and post in your language’s subcategory. Follow the contribution guidelines to help keep our growing library high-quality and accessible to everyone.

### How to submit a post

n8n appreciates all contributions. Publishing a tutorial on your own site that supports the community is a great contribution. If you want n8n to highlight your post on the blog, follow these steps:

1. Email your idea to [marketing@n8n.io](mailto:marketing@n8n.io) with the subject "Blog contribution: [Your Topic]."
1. Submit your draft:
   - Write your post in a Google Doc following the [style guide](https://www.notion.so/97dc73436a624933b75ddc941a361b70?pvs=21).
   - If your blog post includes example workflows, include the workflow JSON in a separate section at the end.
   - For author credit, provide a second Google Doc with your full name, a short byline, and your image. n8n will use this to create your author page and credit you as the author of the post.
1. Wait for feedback. We will respond if your draft fits with the blog's strategy and requirements. If you don't hear back within 30 days, it means we won't be moving forward with your blog post.

Do you know someone who would be a great fit for one of our [open positions](https://n8n.io/careers)? Refer them to us! In return, we'll pay you €1,000 when the referral successfully passes their probationary period.

Here's how this works:

1. **Search**: Have a look at the description and requirements of each role, and consider if someone you know would be a great fit.
1. **Referral**: Once you've identified a potential candidate, send an email to [Jobs at n8n](mailto:jobs@n8n.io) with the subject line *Employee referral - [job title]* and a short description of the person you're referring (and the reason why). Also, tell your referral to apply for the job through our [careers page](https://n8n.io/careers).
1. **Evaluation**: We'll screen the application and inform you about the next steps of the hiring process.
1. **Reward**: As soon as your referral has successfully finished the probationary period, we'll reward you for your efforts by transferring the €1,000 to your bank account.

---

## Branch patterns

**URL:** llms-txt#branch-patterns

**Contents:**
- Multiple instances, multiple branches
- Multiple instances, one branch
- One instance, multiple branches
- One instance, one branch

The relationship between n8n instances and Git branches is flexible. You can create different setups depending on your needs.

Recommendation: don't push and pull to the same n8n instance

You can push work from an instance to a branch, and pull to the same instance. n8n doesn't recommend this. To reduce the risk of merge conflicts and overwriting work, try to create a process where work goes in one direction: either to Git, or from Git, but not both.

## Multiple instances, multiple branches

This pattern involves having multiple n8n instances, each one linked to its own branch.

You can use this pattern for environments. For example, create two n8n instances, development and production. Link them to their own branches. Push work from your development instance to its branch, do a pull request to move work to the production branch, then pull to the production instance.

The advantages of this pattern are:

- An added safety layer to prevent changes getting into your production environment by mistake. You have to do a pull request in GitHub to copy work between environments.
- It supports more than two instances.

The disadvantage is more manual steps to copy work between environments.

## Multiple instances, one branch

Use this pattern if you want the same workflows, tags, and variables everywhere, but want to use them in different n8n instances.

You can use this pattern for environments. For example, create two n8n instances, development and production. Link them both to the same branch. Push work from development, and pull it into production.

This pattern is also useful when testing a new version of n8n: you can create a new n8n instance with the new version, connect it to the Git branch and test it, while your production instance remains on the older version until you're confident it's safe to upgrade.

The advantage of this pattern is that work is instantly available to other environments when you push from one instance.

The disadvantages are:

- If you push by mistake, there is a risk the work will make it into your production instance. If you [use a GitHub Action to automate pulls](../../create-environments/#optional-use-a-github-action-to-automate-pulls) to production, you must either use the multi-instance, multi-branch pattern, or be careful to never push work that you don't want in production.
- Pushing and pulling to the same instance can cause data loss as changes are overridden when performing these actions. You should set up processes to ensure content flows in one direction.

## One instance, multiple branches

The instance owner can change which Git branch connects to the instance. The full setup in this case is likely to be a [Multiple instances, multiple branches](#multiple-instances-multiple-branches) pattern, but with one instance switching between branches.

This is useful to review work. For example, different users could work on their own instance and push to their own branch. The reviewer could work in a review instance, and switch between branches to load work from different users.

n8n doesn't clean up the existing contents of an instance when changing branches. Switching branches in this pattern results in all the workflows from each branch being in your instance.

## One instance, one branch

This is the simplest pattern.

---

## Sort

**URL:** llms-txt#sort

**Contents:**
- Node parameters
  - Simple
  - Random
  - Code
- Templates and examples
- Related resources

Use the Sort node to organize lists of items in a desired ordering, or generate a random selection.

The Sort operation uses the default JavaScript operation where the elements to be sorted are converted into strings and their values compared. Refer to [Mozilla's guide to Array sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) to learn more.

Configure this node using the **Type** parameter.

Use the dropdown to select how you want to input the sorting from these options.

Performs an ascending or descending sort using the selected fields.

When you select this **Type**:

- Use the **Add Field To Sort By** button to input the **Field Name**.
- Select whether to use **Ascending** or **Descending** order.

When you select **Simple** as the **Type**, you have the option to **Disable Dot Notation**. By default, n8n enables dot notation to reference child fields in the format `parent.child`. Use this option to disable dot notation (turned on) or to continue using dot (turned off).

Creates a random order in the list.

Input custom JavaScript code to perform the sort operation. This is a good option if a simple sort won't meet your needs.

Enter your custom JavaScript code in the **Code** input field.

## Templates and examples

**Automated Web Scraping: email a CSV, save to Google Sheets & Microsoft Excel**

[View template details](https://n8n.io/workflows/2275-automated-web-scraping-email-a-csv-save-to-google-sheets-and-microsoft-excel/)

**Transcribing Bank Statements To Markdown Using Gemini Vision AI**

[View template details](https://n8n.io/workflows/2421-transcribing-bank-statements-to-markdown-using-gemini-vision-ai/)

**Allow Users to Send a Sequence of Messages to an AI Agent in Telegram**

[View template details](https://n8n.io/workflows/2917-allow-users-to-send-a-sequence-of-messages-to-an-ai-agent-in-telegram/)

[Browse Sort integration templates](https://n8n.io/integrations/sort/), or [search all templates](https://n8n.io/workflows/)

Learn more about [data structure and data flow](../../../../data/) in n8n workflows.

---

## Standard parameters

**URL:** llms-txt#standard-parameters

**Contents:**
- `displayName`
- `name`
- `icon`
- `group`
- `description`
- `defaults`
- `forceInputNodeExecution`
- `inputs`
- `outputs`
- `requiredInputs`

These are the standard parameters for the [node base file](../). They're the same for all node types.

*String* | *Required*

This is the name users see in the n8n GUI.

*String* | *Required*

The internal name of the object. Used to reference it from other places in the node.

*String* or *Object* | *Required*

Specifies an icon for a particular node. n8n recommends uploading your own image file.

You can provide the icon file name as a string, or as an object to handle different icons for light and dark modes. If the icon works in both light and dark modes, use a string that starts with `file:`, indicating the path to the icon file. For example:

To provide different icons for light and dark modes, use an object with `light` and `dark` properties. For example:

n8n recommends using an SVG for your node icon, but you can also use PNG. If using PNG, the icon resolution should be 60x60px. Node icons should have a square or near-square aspect ratio.

Don't reference Font Awesome

If you want to use a Font Awesome icon in your node, download and embed the image.

*Array of strings* | *Required*

Tells n8n how the node behaves when the workflow runs. Options are:

- `trigger`: node waits for a trigger.
- `schedule`: node waits for a timer to expire.
- `input`, `output`, `transform`: these currently have no effect.
- An empty array, `[]`. Use this as the default option if you don't need `trigger` or `schedule`.

*String* | *Required*

A short description of the node. n8n uses this in the GUI.

*Object* | *Required*

Contains essential brand and name settings.

The object can include:

- `name`: String. Used as the node name on the canvas if the `displayName` is too long.
- `color`: String. Hex color code. Provide the brand color of the integration for use in n8n.

## `forceInputNodeExecution`

*Boolean* | *Optional*

When building a multi-input node, you can choose to force all preceding nodes on all branches to execute before the node runs. The default is `false` (requiring only one input branch to run).

*Array of strings* | *Required*

Names the input connectors. Controls the number of connectors the node has on the input side. If you need only one connector, use `input: ['main']`.

*Array of strings* | *Required*

Names the output connectors. Controls the number of connectors the node has on the output side. If you need only one connector, use `output: ['main']`.

*Integer* or *Array* | *Optional*

Used for multi-input nodes. Specify inputs by number that must have data (their branches must run) before the node can execute.

*Array of objects* | *Required*

This parameter tells n8n the credential options. Each object defines an authentication type.

The object must include:

- `name`: the credential name. Must match the `name` property in the credential file. For example, `name: 'asanaApi'` in [`Asana.node.ts`](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Asana/Asana.node.ts) links to `name = 'asanaApi'` in [`AsanaApi.credential.ts`](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/credentials/AsanaApi.credentials.ts).
- `required`: Boolean. Specify whether authentication is required to use this node.

*Object* | *Required*

Set up the basic information for the API calls the node makes.

This object must include:

- `baseURL`: The API base URL.

- `headers`: an object describing the API call headers, such as content type.
- `url`: string. Appended to the `baseURL`. You can usually leave this out. It's more common to provide this in the `operations`.

*Array of objects* | *Required*

This contains the resource and operations objects that define node behaviors, as well as objects to set up mandatory and optional fields that can receive user input.

A resource object includes the following parameters:

- `displayName`: String. This should always be `Resource`.
- `name`: String. This should always be `resource`.
- `type`: String. Tells n8n which UI element to use, and what input type to expect. For example, `options` results in n8n adding a dropdown that allows users to choose one option. Refer to [Node UI elements](../../ui-elements/) for more information.
- `noDataExpression`: Boolean. Prevents using an expression for the parameter. Must always be `true` for `resource`.

### Operations objects

The operations object defines the available operations on a resource.

- `displayName`: String. This should always be `Options`.
- `name`: String. This should always be `option`.
- `type`: String. Tells n8n which UI element to use, and what input type to expect. For example, `dateTime` results in n8n adding a date picker. Refer to [Node UI elements](../../ui-elements/) for more information.
- `noDataExpression`: Boolean. Prevents using an expression for the parameter. Must always be `true` for `operation`.
- `options`: Array of objects. Each objects describes an operation's behavior, such as its routing, the REST verb it uses, and so on. An `options` object includes:
  - `name`. String.
  - `value`. String.
  - `action`: String. This parameter combines the resource and operation. You should always include it, as n8n will use it in future versions. For example, given a resource called `"Card"` and an operation `"Get all"`, your action is `"Get all cards"`.
  - `description`: String.
  - `routing`: Object containing request details.

### Additional fields objects

These objects define optional parameters. n8n displays them under **Additional Fields** in the GUI. Users can choose which parameters to set.

The objects must include:

For more information about UI element types, refer to [UI elements](../../ui-elements/).

**Examples:**

Example 1 (unknown):
```unknown
icon: 'file:exampleNodeIcon.svg'
```

Example 2 (unknown):
```unknown
icon: { 
  light: 'file:exampleNodeIcon.svg', 
  dark: 'file:exampleNodeIcon.dark.svg' 
}
```

Example 3 (unknown):
```unknown
displayName: 'Additional Fields',
name: 'additionalFields',
// The UI element type
type: ''
placeholder: 'Add Field',
default: {},
displayOptions: {
  // Set which resources and operations this field is available for
  show: {
    resource: [
      // Resource names
    ],
    operation: [
      // Operation names
    ]
  },
}
```

---

## Logging in n8n

**URL:** llms-txt#logging-in-n8n

**Contents:**
- Setup

Logging is an important feature for debugging. n8n uses the [winston](https://www.npmjs.com/package/winston) logging library.

n8n Self-hosted Enterprise tier includes [Log streaming](../../../log-streaming/), in addition to the logging options described in this document.

To set up logging in n8n, you need to set the following environment variables (you can also set the values in the [configuration file](../../configuration/environment-variables/))

| Setting in the configuration file | Using environment variables | Description                                                                                                                                                                                               |
| --------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| n8n.log.level                     | N8N_LOG_LEVEL               | The log output level. The available options are (from lowest to highest level) are error, warn, info, and debug. The default value is `info`. You can learn more about these options [here](#log-levels). |
| n8n.log.output                    | N8N_LOG_OUTPUT              | Where to output logs. The available options are `console` and `file`. Multiple values can be used separated by a comma (`,`). `console` is used by default.                                               |
| n8n.log.file.location             | N8N_LOG_FILE_LOCATION       | The log file location, used only if log output is set to file. By default, `<n8nFolderPath>/logs/n8n.log` is used.                                                                                        |
| n8n.log.file.fileSizeMax          | N8N_LOG_FILE_SIZE_MAX       | The maximum size (in MB) for each log file. By default, n8n uses 16 MB.                                                                                                                                   |
| n8n.log.file.fileCountMax         | N8N_LOG_FILE_COUNT_MAX      | The maximum number of log files to keep. The default value is 100. This value should be set when using workers.                                                                                           |

---

## Navigating the Editor UI

**URL:** llms-txt#navigating-the-editor-ui

**Contents:**
- Getting started
- Editor UI settings
  - Left-side panel
  - Top bar
  - Canvas
- Nodes
  - Finding nodes
  - Adding nodes
  - Node buttons
- Summary

In this lesson you will learn how to navigate the [Editor UI](../../../glossary/#editor-n8n). We will walk through the [canvas](../../../glossary/#canvas-n8n) and show you what each icon means and where to find things you will need while building workflows in n8n.

This course is based on n8n version 1.82.1. In other versions, some user interfaces might look different, but this shouldn't impact the core functionality.

Begin by setting up n8n.

We recommend starting with [n8n Cloud](https://app.n8n.cloud/register), a hosted solution that doesn't require installation and includes a free trial.

If n8n Cloud isn't a good option for you, you can [self-host with Docker](../../../hosting/installation/docker/). This is an advanced option recommended only for technical users familiar with hosting services, Docker, and the command line.

For more details on the different ways to set up n8n, see our [platforms documentation](../../../choose-n8n/#platforms).

Once you have n8n running, open the Editor UI in a browser window. Log in to your n8n instance. Select **Overview** and then **Create Workflow** to view the main canvas.

It should look like this:

## Editor UI settings

The editor UI is the web interface where you build [workflows](../../../workflows/). You can access all your workflows and [credentials](../../../glossary/#credential-n8n), as well as support pages, from the Editor UI.

On the left side of the **Editor UI**, there is a panel which contains the core functionalities and settings for managing your workflows. Expand and collapse it by selecting the small arrow icon.

The panel contains the following sections:

- **Overview**: Contains all the workflows, credentials, and executions you have access to. During this course, create new workflows here.
- **Personal**: Every user gets a default personal project. If you don’t create a custom project, your workflows and credentials are stored here.
- **Projects**: Projects let you group workflows and credentials together. You can assign [roles](../../../user-management/rbac/role-types/) to users in a project to control what they can do. Projects aren’t available on the Community edition.
- **Admin Panel**: n8n Cloud only. Access your n8n instance usage, billing, and version settings.
- **Templates**: A collection of pre-made workflows. Great place to get started with common use cases.
- **Variables**: Used to store and access fixed data across your workflows. This feature is available on the Pro and Enterprise Plans.
- **Insights**: Provides analytics and insights about your workflows.
- **Help**: Contains resources around n8n product and community.
- **What’s New**: Shows the latest product updates and features.

*Editor UI left-side menu*

The top bar of the **Editor UI** contains the following information:

- **Workflow Name**: By default, n8n names a new workflow as "My workflow", but you can edit the name at any time.
- **+ Add Tag**: Tags help you organise your workflows by category, use case, or whatever is relevant for you. Tags are optional.
- **Inactive/active toggle**: This button activates or deactivates the current workflow. By default, workflows are deactivated.
- **Share**: You can share and collaborate with others on workflows on the Starter, Pro, and Enterprise plans.
- **Save**: This button saves the current workflow.
- **History**: Once you save your workflow, you can view previous versions here.

The **canvas** is the gray dotted grid background in the Editor UI. It displays several icons and a node with different functionalities:

- Buttons to zoom the canvas to fit the screen, zoom in or out of the canvas, reset zoom, and tidy up the nodes on screen.
- A button to **Execute workflow** once you add your first node. When you click on it, n8n executes all nodes on the canvas in sequence.
- A button with a **+** sign inside. This button opens the nodes panel.
- A button with a note icon inside. This button adds a [sticky note](../../../workflows/components/sticky-notes/) to the canvas (visible when hovering on the top right + icon).
- A button labeled **Ask Assistant** appears on the right side of the canvas. You can ask the AI Assistant for help with building workflows.
- A dotted square with the text "Add first step." This is where you add your first node.

You can move the workflow canvas around in three ways:

- Select `Ctrl`+`Left Button` on the canvas and move it around.
- Select `Middle Button` on the canvas and move it around.
- Place two fingers on your touchpad and slide.

Don't worry about workflow execution and activation for now; we'll explain these concepts later on in the course.

You can think of nodes as building blocks that serve different functions that, when put together, make up a functioning machine: an automated workflow.

A node is an individual step in your workflow: one that either (a) loads, (b) processes, or (c) sends data.

Based on their function, n8n classifies nodes into four types:

- **App** or **Action Nodes** add, remove, and edit data; request and send external data; and trigger events in other systems. Refer to the [Action nodes library](../../../integrations/builtin/app-nodes/) for a full list of these nodes.
- **Trigger Nodes** start a workflow and supply the initial data. Refer to the [Trigger nodes library](../../../integrations/builtin/trigger-nodes/) for a list of trigger nodes.
- **Core Nodes** can be trigger or app nodes. Whereas most nodes connect to a specific external service, core nodes provide functionality such as logic, scheduling, or generic API calls. Refer to the [Core Nodes library](../../../integrations/builtin/core-nodes/) for a full list of core nodes.
- **Cluster Nodes** are node groups that work together to provide functionality in a workflow, primarily for AI workflows. Refer to [Cluster nodes](../../../integrations/builtin/cluster-nodes/) for more information.

Refer to [Node types](../../../integrations/builtin/node-types/) for a more detailed explanation of all node types.

You can find all available nodes in the **nodes panel** on the right side of the Editor UI. There are three ways in which you can open the nodes panel:

- Click the **+** icon in the top right corner of the canvas.
- Click the **+** icon on the right side of an existing node on the canvas (the node to which you want to add another one).
- Click the `Tab` key on your keyboard.

In the nodes panel, notice that when adding your first node, you will see the different trigger node categories. After you have added your trigger node, you'll see that the nodes panel changes to show Advanced AI, Actions in an App, Data transformation, Flow, Core, and Human in the loop nodes.

If you want to find a specific node, use the search input at the top of the nodes panel.

There are two ways to add nodes to your canvas:

- Select the node you want in the nodes panel. The new node will automatically connect to the selected node on the canvas.
- Drag and drop the node from the nodes panel to the canvas.

If you hover on a node, you'll notice that three icons appear on top:

- Execute the node (Play icon)
- Deactivate/Activate the node (Power icon)
- Delete the node (Trash icon)

There will also be an ellipsis icon, which opens a context menu containing other [node options](../../../workflows/components/nodes/#node-controls).

To move a workflow around the canvas, select all nodes with your mouse or `Ctrl`+`A`, select and hold on a node, then drag it to any point you want on the canvas.

In this lesson you learned how to navigate the Editor UI, what the icons mean, how to access the left-side and node panels, and how to add nodes to the canvas.

In the next lesson, you will build a mini-workflow to put into practice what you've learned so far.

---

## External secrets environment variables

**URL:** llms-txt#external-secrets-environment-variables

File-based configuration

You can add `_FILE` to individual variables to provide their configuration in a separate file. Refer to [Keeping sensitive data in separate files](../../configuration-methods/#keeping-sensitive-data-in-separate-files) for more details.

You can use an external secrets store to manage credentials for n8n. Refer to [External secrets](../../../../external-secrets/) for details.

| Variable                               | Type   | Default           | Description                                         |
| -------------------------------------- | ------ | ----------------- | --------------------------------------------------- |
| `N8N_EXTERNAL_SECRETS_UPDATE_INTERVAL` | Number | `300` (5 minutes) | How often (in seconds) to check for secret updates. |

---

## or

**URL:** llms-txt#or

**Contents:**
  - Next steps
- Updating
- n8n with tunnel
- Reverting an upgrade
- Windows troubleshooting

npm install -g n8n@next

n8n start --tunnel
```

## Reverting an upgrade

Install the older version that you want to go back to.

If the upgrade involved a database migration:

1. Check the feature documentation and release notes to see if there are any manual changes you need to make.
1. Run `n8n db:revert` on your current version to roll back the database. If you want to revert more than one database migration, you need to repeat this process.

## Windows troubleshooting

If you are experiencing issues running n8n on Windows, make sure your Node.js environment is correctly set up. Follow Microsoft's guide to [Install NodeJS on Windows](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows).

**Examples:**

Example 1 (unknown):
```unknown
### Next steps

Try out n8n using the [Quickstarts](../../../try-it-out/).

## Updating

To update your n8n instance to the `latest` version, run:
```

Example 2 (unknown):
```unknown
To install the `next` version:
```

Example 3 (unknown):
```unknown
## n8n with tunnel

Danger

Use this for local development and testing. It isn't safe to use it in production.

To use webhooks for trigger nodes of external services like GitHub, n8n has to be reachable from the web. n8n runs a [tunnel service](https://github.com/localtunnel/localtunnel) that can redirect requests from n8n's servers to your local n8n instance.

Start n8n with `--tunnel` by running:
```

---

## Allow usage of external npm modules.

**URL:** llms-txt#allow-usage-of-external-npm-modules.

export NODE_FUNCTION_ALLOW_EXTERNAL=moment,lodash
```

If using Task Runners

If n8n instance is setup with [Task Runners](../../task-runners/), add the environment variables to the Task Runners instead to the main n8n node.

Refer to [Environment variables reference](../../environment-variables/nodes/) for more information on these variables.

---

## Privacy

**URL:** llms-txt#privacy

**Contents:**
- GDPR
  - Data processing agreement
  - Submitting a GDPR deletion request
  - Sub-processors
  - GDPR for self-hosted users
- Data collection
  - Data collection in self-hosted n8n
  - Data collection in n8n Cloud
  - AI in n8n
  - Documentation telemetry

This page describes n8n's data privacy practices.

### Data processing agreement

For Cloud versions of n8n, n8n is considered both a Controller and a Processor as defined by the GDPR. As a Processor, n8n implements policies and practices that secure the personal data you send to the platform, and includes a [Data Processing Agreement](https://n8n.io/legal/#data) as part of the company's standard [Terms of Service](https://n8n.io/legal/#terms).

The n8n Data Processing Agreement includes the [Standard Contractual Clauses (SCCs)](https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en). These clarify how n8n handles your data, and they update n8n's GDPR policies to cover the latest standards set by the European Commission.

You can find a list of n8n sub-processors [here](#sub-processors).

For self-hosted versions, n8n is neither a Controller nor a Processor, as we don't manage your data

### Submitting a GDPR deletion request

Email privacy@n8n.io to request data deletion.

This is a list of sub-processors authorized to process customer data for n8n's service. n8n audits each sub-processor's security controls and applicable regulations for the protection of personal data.

| Sub-processor name | Purpose                | Contact details                                                                                                                                         | Geographic location of processing |
| ------------------ | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| Microsoft Azure    | Cloud service provider | Microsoft Azure 1 Microsoft Way Redmond WA 98052 USA Contact information: https://privacy.microsoft.com/en-GB/privacystatement#mainhowtocontactusmodule | Germany (West Central Region)     |
| Hetzner Online     | Cloud service provider | Hetzner Online GmbH Industriestr. 25 91710 Gunzenhausen Germany data-protection@hetzner.com                                                             | Germany                           |
| OpenAI             | AI provider            | 1455 3rd Street San Francisco, CA 94158 United States                                                                                                   | US                                |
| Anthropic          | AI provider            | Anthropic Ireland, Limited 6th Floor South Bank House, Barrow Street, Dublin 4 Ireland                                                                  | US                                |
| Google Vertex AI   | AI provider            | Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, United States                                                                           | EU, US                            |
| LangChain          | AI provider            | LangChain, Inc. Delaware                                                                                                                                | US                                |

Subscribe [here](https://n8n-community.typeform.com/to/FdeRxSkH?typeform-source=n8n.io) to receive updates when n8n adds or changes a sub-processor.

### GDPR for self-hosted users

If you self-host n8n, you are responsible for deleting user data. If you need to delete data on behalf of one of your users, you can delete the respective execution. n8n recommends configuring n8n to prune execution data automatically every few days to avoid effortful GDPR request handling as much as possible. Configure this using the `EXECUTIONS_DATA_MAX_AGE` environment variable. Refer to [Environment variables](../../hosting/configuration/environment-variables/) for more information.

n8n collects selected usage and performance data to help diagnose problems and improve the platform. Read about how n8n stores and processes this information in the [privacy policy](https://n8n.io/legal/#privacy).

The data gathered is different in self-hosted n8n and n8n Cloud.

### Data collection in self-hosted n8n

n8n takes care to keep self-hosted data anonymous and avoids collecting sensitive data.

#### What n8n collects

- Error codes and messages of failed executions (excluding any payload data, and not for custom nodes)
- Error reports for app crashes and API issues
- The graph of a workflow (types of nodes used and how they're connected)
- From node parameters:
  - The 'resource' and 'operation' that a node is set to (if applicable)
  - For HTTP request nodes, the domain, path, and method (with personal data anonymized)
- Data around workflow executions:
  - Status
  - The user ID of the user who ran the execution
  - The first time a workflow loads data from an external source
  - The first successful production (non-manual) workflow execution
- The domain of webhook calls, if specified (excluding subdomain).
- Details on how the UI is used (for example, navigation, nodes panel searches)
- Diagnostic information:
  - n8n version
  - Selected settings:
    - DB_TYPE
    - N8N_VERSION_NOTIFICATIONS_ENABLED
    - N8N_DISABLE_PRODUCTION_MAIN_PROCESS
    - [Execution variables](../../hosting/configuration/environment-variables/executions/)
  - OS, RAM, and CPUs
  - Anonymous instance ID
- IP address

#### What n8n doesn't collect

n8n doesn't collect private or sensitive information, such as:

- Personally identifiable information (except IP address)
- Credential information
- Node parameters (except 'resource' and 'operation')
- Execution data
- Sensitive settings (for example, endpoints, ports, DB connections, username/password)
- Error payloads

#### How collection works

Most data is sent to n8n as events that generate it occur. Workflow execution counts and an instance pulse are sent periodically (every 6 hours).

#### Opting out of telemetry

Telemetry collection is enabled by default. To disable it you can configure the following environment variables.

To opt out of telemetry events:

To opt out of checking for new versions of n8n:

To disable the templates feature (prevents background health check calls):

See [configuration](../../hosting/configuration/configuration-methods/) for more info on how to set environment variables.

### Data collection in n8n Cloud

n8n Cloud collects everything listed in [Data collection in self-hosted n8n](#data-collection-in-self-hosted-n8n).

Additionally, in n8n Cloud, n8n uses [PostHog](https://posthog.com/) to track events and visualise usage, including using session recordings. Session recordings comprise the data seen by a user on screen, with the exception of credential values. n8n's product team uses this data to improve the product. All recordings are deleted after 21 days.

To provide enhanced assistance, n8n integrates AI-powered features that leverage Large Language Models (LLMs).

To assist and improve user experience, n8n may send specific context data to LLMs. This context data is strictly limited to information about the current workflow. n8n does not send any values from credential fields or actual output data to AI services. The data will not be incorporated, used, or retained to train the models of the AI services. Any data will be deleted after 30 days.

#### When n8n shares data

Data is only sent to AI services if workspaces have opted in to use the assistant. The Assistant is enabled by default for n8n Cloud users. When a workspace opts in to use the assistant, node-specific data is transmitted only during direct interactions and active sessions with the AI assistant, ensuring no unnecessary data sharing occurs.

- **General Workflow Information**: This includes details about which nodes are present in your workflow, the number of items currently in the workflow, and whether the workflow is active.
- **Input & Output Schemas of Nodes**: This includes the schema of all nodes with incoming data and the output schema of a node in question. We do not send the actual data value of the schema.
- **Node Configuration**: This includes the operations, options, and settings chosen in the referenced node.
- **Code and Expressions**: This includes any code or expressions in the node in question to help with debugging potential issues and optimizations.

#### What n8n doesn't share

- **Credentials**: Any values of the credential fields of your nodes.
- **Output Data**: The actual data processed by your workflows.
- **Sensitive Information**: Any personally identifiable information or other sensitive data that could compromise your privacy or security that you have not explicitly mentioned in node parameters or your code of a [Code Node](../../integrations/builtin/core-nodes/n8n-nodes-base.code/).

### Documentation telemetry

n8n's documentation (this website) uses cookies to recognize your repeated visits and preferences, as well as to measure the effectiveness of n8n's documentation and whether users find what they're searching for. With your consent, you're helping n8n to make our documentation better. You can control cookie consent using the cookie widget.

## Retention and deletion of personal identifiable data

PID (personal identifiable data) is data that's personal to you and would identify you as an individual.

n8n only retains data for as long as necessary to provide the core service.

For n8n Cloud, n8n stores your workflow code, credentials, and other data indefinitely, until you choose to delete it or close your account. The platform stores execution data according to the retention rules on your account.

n8n deletes most internal application logs and logs tied to subprocessors within 90 days. The company retains a subset of logs for longer periods where required for security investigations.

If you choose to delete your n8n account, n8n deletes all customer data and event data associated with your account. n8n deletes customer data in backups within 90 days.

Self-hosted users should have their own PID policy and data deletion processes. Refer to [What you can do](../what-you-can-do/) for more information.

n8n uses Paddle.com to process payments. When you sign up for a paid plan, Paddle transmits and stores the details of your payment method according to their security policy. n8n stores no information about your payment method.

**Examples:**

Example 1 (unknown):
```unknown
export N8N_DIAGNOSTICS_ENABLED=false
```

Example 2 (unknown):
```unknown
export N8N_VERSION_NOTIFICATIONS_ENABLED=false
```

Example 3 (unknown):
```unknown
export N8N_TEMPLATES_ENABLED=false
```

---

## License environment variables

**URL:** llms-txt#license-environment-variables

File-based configuration

You can add `_FILE` to individual variables to provide their configuration in a separate file. Refer to [Keeping sensitive data in separate files](../../configuration-methods/#keeping-sensitive-data-in-separate-files) for more details.

To enable certain licensed features, you must first activate your license. You can do this either through the UI or by setting environment variables. For more information, see [license key](../../../../license-key/).

| Variable                                  | Type    | Default                        | Description                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------- | ------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `N8N_HIDE_USAGE_PAGE`                     | boolean | `false`                        | Hide the usage and plans page in the app.                                                                                                                                                                                                                                                                                       |
| `N8N_LICENSE_ACTIVATION_KEY`              | String  | `''`                           | Activation key to initialize license. Not applicable if the n8n instance was already activated.                                                                                                                                                                                                                                 |
| `N8N_LICENSE_AUTO_RENEW_ENABLED`          | Boolean | `true`                         | Enables (true) or disables (false) autorenewal for licenses. If disabled, you need to manually renew the license every 10 days by navigating to **Settings** > **Usage and plan**, and pressing `F5`. Failure to renew the license will disable all licensed features.                                                          |
| `N8N_LICENSE_DETACH_FLOATING_ON_SHUTDOWN` | Boolean | `true`                         | Controls whether the instance releases [floating entitlements](../../../../glossary/#entitlement-n8n) back to the pool upon shutdown. Set to `true` to allow other instances to reuse the entitlements, or `false` to retain them. For production instances that must always keep their licensed features, set this to `false`. |
| `N8N_LICENSE_SERVER_URL`                  | String  | `https://license.n8n.io/v1`    | Server URL to retrieve license.                                                                                                                                                                                                                                                                                                 |
| `N8N_LICENSE_TENANT_ID`                   | Number  | `1`                            | Tenant ID associated with the license. Only set this variable if explicitly instructed by n8n.                                                                                                                                                                                                                                  |
| `https_proxy_license_server`              | String  | `https://user:pass@proxy:port` | Proxy server URL for HTTPS requests to retrieve license. This variable name needs to be lowercase.                                                                                                                                                                                                                              |

---

## Google: OAuth2 single service

**URL:** llms-txt#google:-oauth2-single-service

**Contents:**
- Prerequisites
- Set up OAuth
  - Create a Google Cloud Console project
  - Enable APIs
  - Configure your OAuth consent screen
  - Create your Google OAuth client credentials
  - Finish your n8n credential
- Video
- Troubleshooting
  - Google hasn't verified this app

This document contains instructions for creating a Google credential for a single service. They're also available as a [video](#video).

Note for n8n Cloud users

For the following nodes, you can authenticate by selecting **Sign in with Google** in the OAuth section:

- [Google Calendar](../../../app-nodes/n8n-nodes-base.googlecalendar/)
- [Google Contacts](../../../app-nodes/n8n-nodes-base.googlecontacts/)
- [Google Drive](../../../app-nodes/n8n-nodes-base.googledrive/)
- [Google Mail](../../../app-nodes/n8n-nodes-base.gmail/)
- [Google Sheets](../../../app-nodes/n8n-nodes-base.googlesheets/)
- [Google Sheets Trigger](../../../trigger-nodes/n8n-nodes-base.googlesheetstrigger/)
- [Google Tasks](../../../app-nodes/n8n-nodes-base.googletasks/)

- Create a [Google Cloud](https://cloud.google.com/) account.

There are five steps to connecting your n8n credential to Google services:

1. [Create a Google Cloud Console project](#create-a-google-cloud-console-project).
1. [Enable APIs](#enable-apis).
1. [Configure your OAuth consent screen](#configure-your-oauth-consent-screen).
1. [Create your Google OAuth client credentials](#create-your-google-oauth-client-credentials).
1. [Finish your n8n credential](#finish-your-n8n-credential).

### Create a Google Cloud Console project

First, create a Google Cloud Console project. If you already have a project, jump to the [next section](#enable-apis):

1. Log in to your [Google Cloud Console](https://console.cloud.google.com) using your Google credentials.

1. In the top menu, select the project dropdown in the top navigation and select **New project** or go directly to the [New Project](https://console.cloud.google.com/projectcreate) page.

1. Enter a **Project name** and select the **Location** for your project.

1. Select **Create**.

1. Check the top navigation and make sure the project dropdown has your project selected. If not, select the project you just created.

Check the project dropdown in the Google Cloud top navigation

With your project created, enable the APIs you'll need access to:

1. Access your [Google Cloud Console - Library](https://console.cloud.google.com/apis/library). Make sure you're in the correct project.

Check the project dropdown in the Google Cloud top navigation

1. Go to **APIs & Services > Library**.

1. Search for and select the API(s) you want to enable. For example, for the Gmail node, search for and enable the Gmail API.

1. Some integrations require other APIs or require you to request access:

- Google Perspective: [Request API Access](https://developers.perspectiveapi.com/s/docs-get-started).
   - Google Ads: Get a [Developer Token](https://developers.google.com/google-ads/api/docs/first-call/dev-token).

Google Drive API required

The following integrations require the Google Drive API, as well as their own API:

- Google Docs
   - Google Sheets
   - Google Slides

In addition to the Vertex AI API you will also need to enable the [Cloud Resource Manager API](https://console.cloud.google.com/apis/api/cloudresourcemanager.googleapis.com/).

1. Select **ENABLE**.

### Configure your OAuth consent screen

If you haven't used OAuth in your Google Cloud project before, you'll need to [configure the OAuth consent screen](https://developers.google.com/workspace/guides/configure-oauth-consent):

1. Access your [Google Cloud Console - Library](https://console.cloud.google.com/apis/library). Make sure you're in the correct project.

Check the project dropdown in the Google Cloud top navigation

1. Open the left navigation menu and go to **APIs & Services > OAuth consent screen**. Google will redirect you to the Google Auth Platform overview page.

1. Select **Get started** on the **Overview** tab to begin configuring OAuth consent.

1. Enter an **App name** and **User support email** to include on the Oauth screen. Select **Next** to continue.

1. For the **Audience**, select **Internal** for user access within your organization's Google workspace or **External** for any user with a Google account. Refer to Google's [User type documentation](https://support.google.com/cloud/answer/15549945?sjid=17061891731152303663-EU#user-type) for more information on user types. Select **Next** to continue.

1. Select the **Email addresses** Google should use to contact you about changes to your project. Select **Next** to continue.

1. Read and accept the Google's User Data Policy. Select **Continue** and then select **Create**.

1. In the left-hand menu, select **Branding**.

1. In the **Authorized domains** section, select **Add domain**:

- If you're using n8n's Cloud service, add `n8n.cloud`
   - If you're [self-hosting](../../../../../hosting/), add the domain of your n8n instance.

1. Select **Save** at the bottom of the page.

### Create your Google OAuth client credentials

Next, create the OAuth client credentials in Google:

1. Access your [Google Cloud Console](https://console.cloud.google.com/). Make sure you're in the correct project.
1. In the **APIs & Services** section, select [**Credentials**](https://console.cloud.google.com/apis/credentials).
1. Select **+ Create credentials** > **OAuth client ID**.
1. In the **Application type** dropdown, select **Web application**.
1. Google automatically generates a **Name**. Update the **Name** to something you'll recognize in your console.
1. From your n8n credential, copy the **OAuth Redirect URL**. Paste it into the **Authorized redirect URIs** in Google Console.
1. Select **Create**.

### Finish your n8n credential

With the Google project and credentials fully configured, finish the n8n credential:

1. From Google's **OAuth client created** modal, copy the **Client ID**. Enter this in your n8n credential.
1. From the same Google modal, copy the **Client Secret**. Enter this in your n8n credential.
1. In n8n, select **Sign in with Google** to complete your Google authentication.
1. **Save** your new credentials.

### Google hasn't verified this app

If using the OAuth authentication method, you might see the warning **Google hasn't verified this app**. To avoid this:

- If your app **User Type** is **Internal**, create OAuth credentials from the same account you want to authenticate.
- If your app **User Type** is **External**, you can add your email to the list of testers for the app: go to the [**Audience**](https://console.cloud.google.com/auth/audience) page and add the email you're signing in with to the list of **Test users**.

If you need to use credentials generated by another account (by a developer or another third party), follow the instructions in [Google Cloud documentation | Authorization errors: Google hasn't verified this app](https://developers.google.com/nest/device-access/reference/errors/authorization#google_hasnt_verified_this_app).

### Google Cloud app becoming unauthorized

For Google Cloud apps with **Publishing status** set to **Testing** and **User type** set to **External**, consent and tokens expire after seven days. Refer to [Google Cloud Platform Console Help | Setting up your OAuth consent screen](https://support.google.com/cloud/answer/10311615?hl=en#zippy=%2Ctesting) for more information. To resolve this, reconnect the app in the n8n credentials modal.

---

## Security environment variables

**URL:** llms-txt#security-environment-variables

File-based configuration

You can add `_FILE` to individual variables to provide their configuration in a separate file. Refer to [Keeping sensitive data in separate files](../../configuration-methods/#keeping-sensitive-data-in-separate-files) for more details.

| Variable                                     | Type                                 | Default | Description                                                                                                                                                                                                                                                                                     |
| -------------------------------------------- | ------------------------------------ | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `N8N_BLOCK_ENV_ACCESS_IN_NODE`               | Boolean                              | `false` | Whether to allow users to access environment variables in expressions and the Code node (false) or not (true).                                                                                                                                                                                  |
| `N8N_BLOCK_FILE_ACCESS_TO_N8N_FILES`         | Boolean                              | `true`  | Set to `true` to block access to all files in the `.n8n` directory and user defined configuration files.                                                                                                                                                                                        |
| `N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS`      | Boolean                              | `false` | Set to `true` to try to set 0600 permissions for the settings file, giving only the owner read and write access.                                                                                                                                                                                |
| `N8N_RESTRICT_FILE_ACCESS_TO`                | String                               |         | Limits access to files in these directories. Provide multiple files as a colon-separated list ("`:`").                                                                                                                                                                                          |
| `N8N_SECURITY_AUDIT_DAYS_ABANDONED_WORKFLOW` | Number                               | 90      | Number of days to consider a workflow abandoned if it's not executed.                                                                                                                                                                                                                           |
| `N8N_SECURE_COOKIE`                          | Boolean                              | `true`  | Ensures that cookies are only sent over HTTPS, enhancing security.                                                                                                                                                                                                                              |
| `N8N_SAMESITE_COOKIE`                        | Enum string: `strict`, `lax`, `none` | `lax`   | Controls cross-site cookie behavior ([learn more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite)): - `strict`: Sent only for first-party requests. - `lax` (default): Sent with top-level navigation requests. - `none`: Sent in all contexts (requires HTTPS). |
| `N8N_GIT_NODE_DISABLE_BARE_REPOS`            | Boolean                              | `false` | Set to `true` to prevent the [Git node](../../../../integrations/builtin/core-nodes/n8n-nodes-base.git/) from working with bare repositories, enhancing security.                                                                                                                               |

---

## Self-hosted concurrency control

**URL:** llms-txt#self-hosted-concurrency-control

**Contents:**
- Comparison to queue mode

Only for self-hosted n8n

This document is for self-hosted concurrency control. Read [Cloud concurrency](../../../manage-cloud/concurrency/) to learn how concurrency works with n8n Cloud accounts.

In regular mode, n8n doesn't limit how many production executions may run at the same time. This can lead to a scenario where too many concurrent executions thrash the event loop, causing performance degradation and unresponsiveness.

To prevent this, you can set a concurrency limit for production executions in regular mode. Use this to control how many production executions run concurrently, and queue up any concurrent production executions over the limit. These executions remain in the queue until concurrency capacity frees up, and are then processed in FIFO order.

Concurrency control is disabled by default. To enable it:

- Concurrency control applies only to production executions: those started from a webhook or [trigger](../../../glossary/#trigger-node-n8n) node. It doesn't apply to any other kinds, such as manual executions, sub-workflow executions, error executions, or started from CLI.

- You can't retry queued executions. Cancelling or deleting a queued execution also removes it from the queue.

- On instance startup, n8n resumes queued executions up to the concurrency limit and re-enqueues the rest.

- To monitor concurrency control, watch logs for executions being added to the queue and released. In a future version, n8n will show concurrency control in the UI.

When you enable concurrency control, you can view the number of active executions and the configured limit at the top of a project's or workflow's executions tab.

## Comparison to queue mode

In queue mode, you can control how many jobs a worker may run concurrently using the [`--concurrency` flag](../queue-mode/#configure-worker-concurrency).

Concurrency control in queue mode is a separate mechanism from concurrency control in regular mode, but the environment variable `N8N_CONCURRENCY_PRODUCTION_LIMIT` controls both of them. In queue mode, n8n takes the limit from this variable if set to a value other than `-1`, falling back to the `--concurrency` flag or its default.

**Examples:**

Example 1 (unknown):
```unknown
export N8N_CONCURRENCY_PRODUCTION_LIMIT=20
```

---

## Aggregate

**URL:** llms-txt#aggregate

**Contents:**
- Node parameters
  - Individual Fields
  - All Item Data
- Node options
- Templates and examples
- Related resources

Use the Aggregate node to take separate items, or portions of them, and group them together into individual items.

To begin using the node, select the **Aggregate** you'd like to use:

- [**Individual Fields**](#individual-fields): Aggregate individual fields separately.
- [**All Item Data**](#all-item-data): Aggregate all item data into a single list.

### Individual Fields

- **Input Field Name**: Enter the name of the field in the input data to aggregate together.
- **Rename Field**: This toggle controls whether to give the field a different name in the aggregated output data. Turn this on to add a different field name. If you're aggregating multiple fields, you must provide new output field names. You can't leave multiple fields undefined.
  - **Output Field Name**: This field is displayed when you turn on **Rename Field**. Enter the field name for the aggregated output data.

Refer to [Node options](#node-options) for more configuration options.

- **Put Output in Field**: Enter the name of the field to output the data in.
- **Include**: Select which fields to include in the output. Choose from:
  - **All fields**: The output includes data from all fields with no further parameters.
  - **Specified Fields**: If you select this option, enter a comma-separated list of fields the output should include data from in the **Fields To Include** parameter. The output will include only the fields in this list.
  - **All Fields Except**: If you select this option, enter a comma-separated list of fields the output should exclude data from in the **Fields To Exclude** parameter. The output will include all fields not in this list.

Refer to [Node options](#node-options) for more configuration options.

You can further configure this node using these **Options**:

- **Disable Dot Notation**: The node displays this toggle when you select the **Individual Fields** Aggregate. It controls whether to disallow referencing child fields using `parent.child` in the field name (turned on), or allow it (turned off, default).
- **Merge Lists**: The node displays this toggle when you select the **Individual Fields** Aggregate. Turn it on if the field to aggregate is a list and you want to output a single flat list rather than a list of lists.
- **Include Binaries**: The node displays this toggle for both Aggregate types. Turn it on if you want to include binary data from the input in the new output.
- **Keep Missing And Null Values**: The node displays this toggle when you select the **Individual Fields** Aggregate. Turn it on to add a null (empty) entry in the output list when there is a null or missing value in the input. If turned off, the output ignores null or empty values.

## Templates and examples

**✨🤖Automate Multi-Platform Social Media Content Creation with AI**

[View template details](https://n8n.io/workflows/3066-automate-multi-platform-social-media-content-creation-with-ai/)

**Scrape business emails from Google Maps without the use of any third party APIs**

[View template details](https://n8n.io/workflows/2567-scrape-business-emails-from-google-maps-without-the-use-of-any-third-party-apis/)

**Build Your First AI Data Analyst Chatbot**

[View template details](https://n8n.io/workflows/3050-build-your-first-ai-data-analyst-chatbot/)

[Browse Aggregate integration templates](https://n8n.io/integrations/aggregate/), or [search all templates](https://n8n.io/workflows/)

Learn more about [data structure and data flow](../../../../data/) in n8n workflows.

---

## For n8n Cloud

**URL:** llms-txt#for-n8n-cloud

curl -X 'GET' \
  '<your-cloud-instance>/api/v<version-number>/workflows?active=true&limit=150&cursor=MTIzZTQ1NjctZTg5Yi0xMmQzLWE0NTYtNDI2NjE0MTc0MDA' \
  -H 'accept: application/json'
```

---

## Pull next (unstable) version

**URL:** llms-txt#pull-next-(unstable)-version

docker pull docker.n8n.io/n8nio/n8n:next

**Examples:**

Example 1 (unknown):
```unknown
After pulling the updated image, stop your n8n container and start it again. You can also use the command line. Replace `<container_id>` in the commands below with the container ID you find in the first command:
```

---

## Test your knowledge

**URL:** llms-txt#test-your-knowledge

**Contents:**
- What's next?

Congratulations, you finished the n8n Course Level 2!

You've learned a lot about workflow automation and built quite a complex business workflow. Why not showcase your skills?

You can test your knowledge by taking a **quiz**, which consists of questions about the theoretical concepts and workflows covered in this course.

- You need to have at least 80% correct answers to pass the quiz.
- You can take the quiz as many times as you want.
- There's no time limit on answering the quiz questions.

[Take the quiz!](https://n8n-community.typeform.com/to/r9hDbytg)

- Create new workflows for your work or personal use and share them with us. Don't have any ideas? Find inspiration on the [workflows page](https://n8n.io/workflows) and on our [blog](https://n8n.io/blog/).
- Dive deeper into n8n's features by reading the [docs](../../../).

---

## Google Calendar Event operations

**URL:** llms-txt#google-calendar-event-operations

**Contents:**
- Create
  - Options
- Delete
  - Options
- Get
  - Options
- Get Many
  - Options
- Update

Use these operations to create, delete, get, and update events in Google Calendar. Refer to [Google Calendar](../) for more information on the Google Calendar node itself.

Use this operation to add an event to a Google Calendar.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [Google Calendar credentials](../../../credentials/google/).
- **Resource**: Select **Event**.
- **Operation**: Select **Create**.
- **Calendar**: Choose a calendar you want to add an event to. Select **From list** to choose the title from the dropdown list or **By ID** to enter a calendar ID.
- **Start Time**: The start time for the event. By default, uses an expression evaluating to the current time (`{{ $now }}`).
- **End Time**: The end time for the event. By default, this uses an expression evaluating to an hour from now (`{{ $now.plus(1, 'hour') }}`).
- **Use Default Reminders**: Whether to enable default reminders for the event according to the calendar configuration.

- **All Day**: Whether the event is all day or not.

- **Attendees**: Attendees to invite to the event.

- **Color Name or ID**: The color of the event. Choose from the list or specify the ID using an expression.

- **Conference Data**: Creates a conference link (Hangouts, Meet, etc.) and attaches it to the event.

- **Description**: A description for the event.

- **Guests Can Invite Others**: Whether attendees other than the organizer can invite others to the event.

- **Guests Can Modify**: Whether attendees other than the organizer can modify the event.

- **Guests Can See Other Guests**: Whether attendees other than the organizer can see who the event's attendees are.

- **ID**: Opaque identifier of the event.

- **Location**: Geographic location of the event as free-form text.

- **Max Attendees**: The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only returns the participant.

- **Repeat Frequency**: The repetition interval for recurring events.

- **Repeat How Many Times?**: The number of instances to create for recurring events.

- **Repeat Until**: The date at which recurring events should stop.

- **RRULE**: Recurrence rule. When set, ignores the Repeat Frequency, Repeat How Many Times, and Repeat Until parameters.

- **Send Updates**: Whether to send notifications about the creation of the new event.

- **Show Me As**: Whether the event blocks time on the calendar.

- **Summary**: The title of the event.

Refer to the [Events: insert | Google Calendar](https://developers.google.com/calendar/api/v3/reference/events/insert) API documentation for more information.

Use this operation to delete an event from a Google Calendar.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [Google Calendar credentials](../../../credentials/google/).
- **Resource**: Select **Event**.
- **Operation**: Select **Delete**.
- **Calendar**: Choose a calendar you want to delete an event from. Select **From list** to choose the title from the dropdown list or **By ID** to enter a calendar ID.
- **Event ID**: The ID of the event to delete.

- **Send Updates**: Whether to send notifications about the deletion of the event.

Refer to the [Events: delete | Google Calendar](https://developers.google.com/calendar/api/v3/reference/events/delete) API documentation for more information.

Use this operation to retrieve an event from a Google Calendar.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [Google Calendar credentials](../../../credentials/google/).
- **Resource**: Select **Event**.
- **Operation**: Select **Get**.
- **Calendar**: Choose a calendar you want to get an event from. Select **From list** to choose the title from the dropdown list or **By ID** to enter a calendar ID.
- **Event ID**: The ID of the event to get.

- **Max Attendees**: The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only returns the participant.
- **Return Next Instance of Recurrent Event**: Whether to return the next instance of a recurring event instead of the event itself.
- **Timezone**: The timezone used in the response. By default, uses the n8n timezone.

Refer to the [Events: get | Google Calendar](https://developers.google.com/calendar/api/v3/reference/events/get) API documentation for more information.

Use this operation to retrieve more than one event from a Google Calendar.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [Google Calendar credentials](../../../credentials/google/).
- **Resource**: Select **Event**.
- **Operation**: Select **Get Many**.
- **Calendar**: Choose a calendar you want to get an event from. Select **From list** to choose the title from the dropdown list or **By ID** to enter a calendar ID.
- **Return All**: Whether to return all results or only up to a given limit.
- **Limit**: (When "Return All" isn't selected) The maximum number of results to return.
- **After**: Retrieve events that occur after this time. At least part of the event must be after this time. By default, this uses an expression evaluating to the current time (`{{ $now }}`). Switch the field to "fixed" to select a date from a date widget.
- **Before**: Retrieve events that occur before this time. At least part of the event must be before this time. By default, this uses an expression evaluating to the current time plus a week (`{{ $now.plus({ week: 1 }) }}`). Switch the field to "fixed" to select a date from a date widget.

- **Fields**: Specify the fields to return. By default, returns a set of commonly used fields predefined by Google. Use "\*" to return all fields. You can find out more in [Google Calendar's documentation on working with partial resources](https://developers.google.com/calendar/api/guides/performance#partial).

- **iCalUID**: Specifies an event ID (in the iCalendar format) to include in the response.

- **Max Attendees**: The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only returns the participant.

- **Order By**: The order to use for the events in the response.

- **Query**: Free text search terms to find events that match. This searches all fields except for extended properties.

- **Recurring Event Handling**: What to do for recurring events:

- **All Occurrences**: Return all instances of the recurring event for the specified time range.
  - **First Occurrence**: Return the first event of a recurring event within the specified time range.
  - **Next Occurrence**: Return the next instance of a recurring event within the specified time range.

- **Show Deleted**: Whether to include deleted events (with status equal to "cancelled") in the results.

- **Show Hidden Invitations**: Whether to include hidden invitations in the results.

- **Timezone**: The timezone used in the response. By default, uses the n8n timezone.

- **Updated Min**: The lower bounds for an event's last modification time (as an [RFC 3339 timestamp](https://datatracker.ietf.org/doc/html/rfc3339))

Refer to the [Events: list | Google Calendar](https://developers.google.com/calendar/api/v3/reference/events/list) API documentation for more information.

Use this operation to update an event in a Google Calendar.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [Google Calendar credentials](../../../credentials/google/).

- **Resource**: Select **Event**.

- **Operation**: Select **Update**.

- **Calendar**: Choose a calendar you want to add an event to. Select **From list** to choose the title from the dropdown list or **By ID** to enter a calendar ID.

- **Event ID**: The ID of the event to update.

- **Modify**: For recurring events, choose whether to update the recurring event or a specific instance of the recurring event.

- **Use Default Reminders**: Whether to enable default reminders for the event according to the calendar configuration.

- **Update Fields**: The fields of the event to update:

- **All Day**: Whether the event is all day or not.
  - **Attendees**: Attendees to invite to the event. You can choose to either add attendees or replace the existing attendee list.
  - **Color Name or ID**: The color of the event. Choose from the list or specify the ID using an expression.
  - **Description**: A description for the event.
  - **End**: The end time of the event.
  - **Guests Can Invite Others**: Whether attendees other than the organizer can invite others to the event.
  - **Guests Can Modify**: Whether attendees other than the organizer can make changes to the event.
  - **Guests Can See Other Guests**: Whether attendees other than the organizer can see who the event's attendees are.
  - **ID**: Opaque identifier of the event.
  - **Location**: Geographic location of the event as free-form text.
  - **Max Attendees**: The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only returns the participant.
  - **Repeat Frequency**: The repetition interval for recurring events.
  - **Repeat How Many Times?**: The number of instances to create for recurring events.
  - **Repeat Until**: The date at which recurring events should stop.
  - **RRULE**: Recurrence rule. When set, ignores the Repeat Frequency, Repeat How Many Times, and Repeat Until parameters.
  - **Send Updates**: Whether to send notifications about the creation of the new event.
  - **Show Me As**: Whether the event blocks time on the calendar.
  - **Start**: The start time of the event.
  - **Summary**: The title of the event.
  - **Visibility**: The visibility of the event:
    - **Confidential**: The event is private. This value is provided for compatibility.
    - **Default**: Uses the default visibility for events on the calendar.
    - **Public**: The event is public and the event details are visible to all readers of the calendar.
    - **Private**: The event is private and only event attendees may view event details.

Refer to the [Events: update | Google Calendar](https://developers.google.com/calendar/api/v3/reference/events/update) API documentation for more information.

---

## Query JSON with JMESPath

**URL:** llms-txt#query-json-with-jmespath

**Contents:**
- The `jmespath()` method
- Common tasks
  - Apply a JMESPath expression to a collection of elements with projections
  - Select multiple elements and create a new list or object
  - An alternative to arrow functions in expressions

[JMESPath](https://jmespath.org/) is a query language for JSON that you can use to extract and transform elements from a JSON document. For full details of how to use JMESPath, refer to the [JMESPath documentation](https://jmespath.org/tutorial.html).

## The `jmespath()` method

n8n provides a custom method, `jmespath()`. Use this method to perform a search on a JSON object using the JMESPath query language.

To help understand what the method does, here is the equivalent longer JavaScript:

Expressions must be single-line

The longer code example doesn't work in Expressions, as they must be single-line.

`object` is a JSON object, such as the output of a previous node. `searchString` is an expression written in the JMESPath query language. The [JMESPath Specification](https://jmespath.org/specification.html#jmespath-specification) provides a list of supported expressions, while their [Tutorial](https://jmespath.org/tutorial.html) and [Examples](https://jmespath.org/examples.html) provide interactive examples.

Search parameter order

The examples in the [JMESPath Specification](https://jmespath.org/specification.html#jmespath-specification) follow the pattern `search(searchString, object)`. The [JMESPath JavaScript library](https://github.com/jmespath/jmespath.js/), which n8n uses, supports `search(object, searchString)` instead. This means that when using examples from the JMESPath documentation, you may need to change the order of the search function parameters.

This section provides examples for some common operations. More examples, and detailed guidance, are available in [JMESPath's own documentation](https://jmespath.org/tutorial.html).

When trying out these examples, you need to set the Code node **Mode** to **Run Once for Each Item**.

### Apply a JMESPath expression to a collection of elements with projections

From the [JMESPath projections documentation](https://jmespath.org/tutorial.html#projections):

> Projections are one of the key features of JMESPath. Use it to apply an expression to a collection of elements. JMESPath supports five kinds of projections:
>
> - List Projections
> - Slice Projections
> - Object Projections
> - Flatten Projections
> - Filter Projections

The following example shows basic usage of list, slice, and object projections. Refer to the [JMESPath projections documentation](https://jmespath.org/tutorial.html#projections) for detailed explanations of each projection type, and more examples.

Given this JSON from a webhook node:

Retrieve a [list](https://jmespath.org/tutorial.html#list-and-slice-projections) of all the people's first names:

Get a [slice](https://jmespath.org/tutorial.html#list-and-slice-projections) of the first names:

Get a list of the dogs' ages using [object projections](https://jmespath.org/tutorial.html#object-projections):

### Select multiple elements and create a new list or object

Use [Multiselect](https://jmespath.org/tutorial.html#multiselect) to select elements from a JSON object and combine them into a new list or object.

Given this JSON from a webhook node:

Use multiselect list to get the first and last names and create new lists containing both names:

### An alternative to arrow functions in expressions

For example, generate some input data by returning the below code from the Code node:

You could do a search like "find the item with the name Lenovo and tell me their category ID."

**Examples:**

Example 1 (unknown):
```unknown
$jmespath(object, searchString)
```

Example 2 (unknown):
```unknown
_jmespath(object, searchString)
```

Example 3 (unknown):
```unknown
var jmespath = require('jmespath');
jmespath.search(object, searchString);
```

Example 4 (unknown):
```unknown
[
  {
    "headers": {
      "host": "n8n.instance.address",
      ...
    },
    "params": {},
    "query": {},
    "body": {
      "people": [
        {
          "first": "James",
          "last": "Green"
        },
        {
          "first": "Jacob",
          "last": "Jones"
        },
        {
          "first": "Jayden",
          "last": "Smith"
        }
      ],
      "dogs": {
        "Fido": {
          "color": "brown",
          "age": 7
        },
        "Spot": {
          "color": "black and white",
          "age": 5
        }
      }
    }
  }
]
```

---

## Pull specific version

**URL:** llms-txt#pull-specific-version

docker pull docker.n8n.io/n8nio/n8n:1.81.0

---

## In ~/.n8n directory run

**URL:** llms-txt#in-~/.n8n-directory-run

mkdir custom 
cd custom 
npm init
```

---

## Set a custom encryption key

**URL:** llms-txt#set-a-custom-encryption-key

n8n creates a random encryption key automatically on the first launch and saves it in the `~/.n8n` folder. n8n uses that key to encrypt the credentials before they get saved to the database. If the key isn't yet in the settings file, you can set it using an environment variable, so that n8n uses your custom key instead of generating a new one.

In [queue mode](../../../scaling/queue-mode/), you must specify the encryption key environment variable for all workers.

Refer to [Environment variables reference](../../environment-variables/deployment/) for more information on this variable.

**Examples:**

Example 1 (unknown):
```unknown
export N8N_ENCRYPTION_KEY=<SOME RANDOM STRING>
```

---

## For example, **/myfile.txt

**URL:** llms-txt#for-example,-**/myfile.txt

**/<directoryName>/**

**Examples:**

Example 1 (unknown):
```unknown
Ignore a sub-directory of a directory you're watching:
```

---

## Google: Service Account

**URL:** llms-txt#google:-service-account

**Contents:**
- Prerequisites
- Set up Service Account
  - Create a Google Cloud Console project
  - Enable APIs
  - Set up Google Cloud Service Account
  - Finish your n8n credential
- Video
- Troubleshooting
  - Service Account can't access Google Drive files
  - Enable domain-wide delegation

Using service accounts is more complex than OAuth2. Before you begin:

- Check if your node is [compatible](../#compatible-nodes) with Service Account.
- Make sure you need to use Service Account. For most use cases, [OAuth2](../oauth-single-service/) is a better option.
- Read the Google documentation on [Creating and managing service accounts](https://cloud.google.com/iam/docs/creating-managing-service-accounts).

- Create a [Google Cloud](https://cloud.google.com/) account.

## Set up Service Account

There are four steps to connecting your n8n credential to a Google Service Account:

1. [Create a Google Cloud Console project](#create-a-google-cloud-console-project).
1. [Enable APIs](#enable-apis).
1. [Set up Google Cloud Service Account](#set-up-google-cloud-service-account).
1. [Finish your n8n credential](#finish-your-n8n-credential).

### Create a Google Cloud Console project

First, create a Google Cloud Console project. If you already have a project, jump to the next section:

1. Log in to your [Google Cloud Console](https://console.cloud.google.com) using your Google credentials.

1. In the top menu, select the project dropdown in the top navigation and select **New project** or go directly to the [New Project](https://console.cloud.google.com/projectcreate) page.

1. Enter a **Project name** and select the **Location** for your project.

1. Select **Create**.

1. Check the top navigation and make sure the project dropdown has your project selected. If not, select the project you just created.

Check the project dropdown in the Google Cloud top navigation

With your project created, enable the APIs you'll need access to:

1. Access your [Google Cloud Console - Library](https://console.cloud.google.com/apis/library). Make sure you're in the correct project.

Check the project dropdown in the Google Cloud top navigation

1. Go to **APIs & Services > Library**.

1. Search for and select the API(s) you want to enable. For example, for the Gmail node, search for and enable the Gmail API.

1. Some integrations require other APIs or require you to request access:

- Google Perspective: [Request API Access](https://developers.perspectiveapi.com/s/docs-get-started).
   - Google Ads: Get a [Developer Token](https://developers.google.com/google-ads/api/docs/first-call/dev-token).

Google Drive API required

The following integrations require the Google Drive API, as well as their own API:

- Google Docs
   - Google Sheets
   - Google Slides

In addition to the Vertex AI API you will also need to enable the [Cloud Resource Manager API](https://console.cloud.google.com/apis/api/cloudresourcemanager.googleapis.com/).

1. Select **ENABLE**.

### Set up Google Cloud Service Account

1. Access your [Google Cloud Console - Library](https://console.cloud.google.com/apis/library). Make sure you're in the correct project.

Check the project dropdown in the Google Cloud top navigation

1. Open the left navigation menu and go to **APIs & Services > Credentials**. Google takes you to your **Credentials** page.

1. Select **+ Create credentials > Service account**.

1. Enter a name in **Service account name** and an ID in **Service account ID**. Refer to [Creating a service account](https://cloud.google.com/iam/docs/creating-managing-service-accounts?hl=en#creating) for more information.

1. Select **Create and continue**.

1. Based on your use-case, you may want to **Select a role** and **Grant users access to this service account** using the corresponding sections.

1. Select your newly created service account under the **Service Accounts** section. Open the **Keys** tab.

1. Select **Add key > Create new key**.

1. In the modal that appears, select **JSON**, then select **CREATE**. Google saves the file to your computer.

### Finish your n8n credential

With the Google project and credentials fully configured, finish the n8n credential:

1. Open the downloaded JSON file.

1. Copy the `client_email` and enter it in your n8n credential as the **Service Account Email**.

1. Copy the `private_key`. Don't include the surrounding `"` marks. Enter this as the **Private Key** in your n8n credential.

Older versions of n8n

If you're running an n8n version older than 0.156.0, replace all instances of `\n` in the JSON file with new lines.

1. **Optional**: Choose if you want to [**Impersonate a User**](https://developers.google.com/identity/protocols/oauth2/service-account#delegatingauthority) (turned on).

1. To use this option, you must [Enable domain-wide delegation](#enable-domain-wide-delegation) for the service account as a Google Workspace super admin.
   1. Enter the **Email** of the user you want to impersonate.

1. If you plan to use this credential with the [HTTP Request](../../../core-nodes/n8n-nodes-base.httprequest/) node, turn on **Set up for use in HTTP Request node**.

1. With this setting turned on, you'll need to add **Scope(s)** for the node. n8n prepopulates some scopes. Refer to [OAuth 2.0 Scopes for Google APIs](https://developers.google.com/identity/protocols/oauth2/scopes) for more information.

1. **Save** your credentials.

### Service Account can't access Google Drive files

No access to my drive

Google no longer allows Service Accounts created after April 15, 2025 to access `my drive`. Service Accounts now only have access to shared drives.

While not recommended, if you need to use a Service Account to access `my drive`, you can do so by [enabling domain-wide delegation](#enable-domain-wide-delegation). You can learn more in [this post in the community](https://community.n8n.io/t/please-please-help-upload-file-google-drive-node-with-service-account-not-working/147750/15).

A Service Account can't access Google Drive files and folders that weren't shared with its associated user email.

1. Access your [Google Cloud Console](https://console.cloud.google.com) and copy your Service Account email.
1. Access your [Google Drive](https://drive.google.com) and go to the designated file or folder.
1. Right-click on the file or folder and select **Share**.
1. Paste your Service Account email into **Add People and groups**.
1. Select **Editor** for read-write access or **Viewer** for read-only access.

### Enable domain-wide delegation

To impersonate a user with a service account, you must enable domain-wide delegation for the service account.

Google recommends you [avoid using domain-wide delegation](https://cloud.google.com/iam/docs/best-practices-service-accounts#domain-wide-delegation), as it allows impersonation of any user (including super admins) and can pose a security risk.

To delegate domain-wide authority to a service account, you must be a super administrator for the Google Workspace domain. Then:

1. From your Google Workspace domain's [Admin console](https://admin.google.com/), select the hamburger menu, then select **Security > Access and data control > API Controls**.
1. In the **Domain wide delegation** pane, select **Manage Domain Wide Delegation**.
1. Select **Add new**.
1. In the **Client ID** field, enter the service account's **Client ID**. To get the Client ID:
   - Open your Google Cloud Console project, then open the [Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts) page.
   - Copy the **OAuth 2 Client ID** and use this as the **Client ID** for the **Domain Wide Delegation**.
1. In the **OAuth scopes** field, enter a list of comma-separate scopes to grant your application access. For example, if your application needs domain-wide full access to the Google Drive API and the Google Calendar API, enter: `https://www.googleapis.com/auth/drive, https://www.googleapis.com/auth/calendar`.
1. Select **Authorize**.

It can take from 5 minutes up to 24 hours before you can impersonate all users in your Workspace.

---

## External data storage environment variables

**URL:** llms-txt#external-data-storage-environment-variables

File-based configuration

You can add `_FILE` to individual variables to provide their configuration in a separate file. Refer to [Keeping sensitive data in separate files](../../configuration-methods/#keeping-sensitive-data-in-separate-files) for more details.

Refer to [External storage](../../../scaling/external-storage/) for more information on using external storage for binary data.

| Variable                                   | Type    | Default | Description                                                                                                                                                                                                                                                                                     |
| ------------------------------------------ | ------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `N8N_EXTERNAL_STORAGE_S3_HOST`             | String  | -       | Host of the n8n bucket in S3-compatible external storage. For example, `s3.us-east-1.amazonaws.com`                                                                                                                                                                                             |
| `N8N_EXTERNAL_STORAGE_S3_BUCKET_NAME`      | String  | -       | Name of the n8n bucket in S3-compatible external storage.                                                                                                                                                                                                                                       |
| `N8N_EXTERNAL_STORAGE_S3_BUCKET_REGION`    | String  | -       | Region of the n8n bucket in S3-compatible external storage. For example, `us-east-1`                                                                                                                                                                                                            |
| `N8N_EXTERNAL_STORAGE_S3_ACCESS_KEY`       | String  | -       | Access key in S3-compatible external storage                                                                                                                                                                                                                                                    |
| `N8N_EXTERNAL_STORAGE_S3_ACCESS_SECRET`    | String  | -       | Access secret in S3-compatible external storage.                                                                                                                                                                                                                                                |
| `N8N_EXTERNAL_STORAGE_S3_AUTH_AUTO_DETECT` | Boolean | -       | Use automatic credential detection to authenticate S3 calls for external storage. This will ignore the access key and access secret and use the default [credential provider chain](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/setting-credentials-node.html#credchain). |

---

## Respond to Webhook

**URL:** llms-txt#respond-to-webhook

**Contents:**
- How to use Respond to Webhook
- Node parameters
  - Respond With
- Node options
- How n8n secures HTML responses
- Templates and examples
- Workflow behavior
- Output the response sent to the webhook
- Return more than one data item (deprecated)

Use the Respond to Webhook node to control the response to incoming webhooks. This node works with the [Webhook](../n8n-nodes-base.webhook/) node.

Runs once for the first data item

The Respond to Webhook node runs once, using the first incoming data item. Refer to [Return more than one data item](#return-more-than-one-data-item-deprecated) for more information.

## How to use Respond to Webhook

To use the Respond to Webhook node:

1. Add a [Webhook](../n8n-nodes-base.webhook/) node as the trigger node for the workflow.
1. In the Webhook node, set **Respond** to **Using 'Respond to Webhook' node**.
1. Add the Respond to Webhook node anywhere in your workflow. If you want it to return data from other nodes, place it after those nodes.

Configure the node behavior using these parameters.

Choose what data to send in the webhook response.

- **All Incoming Items**: Respond with all the JSON items from the input.
- **Binary File**: Respond with a binary file defined in **Response Data Source**.
- **First Incoming Item**: Respond with the first incoming item's JSON.
- **JSON**: Respond with a JSON object defined in **Response Body**.
- **JWT Token**: Respond with a JSON Web Token (JWT).
- **No Data**: No response payload.
- **Redirect**: Redirect to a URL set in **Redirect URL**.
- **Text**: Respond with text set in **Response Body**. This sends HTML by default (`Content-Type: text/html`).

Select **Add Option** to view and set the options.

- **Response Code**: Set the [response code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) to use.
- **Response Headers**: Define the response headers to send.
- **Put Response in Field**: Available when you respond with **All Incoming Items** or **First Incoming Item**. Set the field name for the field containing the response data.
- **Enable Streaming**: When enabled, sends the data back to the user using streaming. Requires a trigger configured with the **Response mode** **Streaming**.

## How n8n secures HTML responses

Starting with [n8n version 1.103.0](../../../../release-notes/#n8n11030), n8n automatically wraps HTML responses to webhooks in `<iframe>` tags. This is a security mechanism to protect the instance users.

This has the following implications:

- HTML renders in a sandboxed iframe instead of directly in the parent document.
- JavaScript code that attempts to access the top-level window or local storage will fail.
- Authentication headers aren't available in the sandboxed iframe (for example, basic auth). You need to use an alternative approach, like embedding a short-lived access token within the HTML.
- Relative URLs (for example, `<form action="/">`) won't work. Use absolute URLs instead.

## Templates and examples

**Creating an API endpoint**

[View template details](https://n8n.io/workflows/1750-creating-an-api-endpoint/)

**Create a Branded AI-Powered Website Chatbot**

[View template details](https://n8n.io/workflows/2786-create-a-branded-ai-powered-website-chatbot/)

**⚡AI-Powered YouTube Video Summarization & Analysis**

[View template details](https://n8n.io/workflows/2679-ai-powered-youtube-video-summarization-and-analysis/)

[Browse Respond to Webhook integration templates](https://n8n.io/integrations/respond-to-webhook/), or [search all templates](https://n8n.io/workflows/)

When using the Respond to Webhook node, workflows behave as follows:

- The workflow finishes without executing the Respond to Webhook node: it returns a standard message with a 200 status.
- The workflow errors before the first Respond to Webhook node executes: the workflow returns an error message with a 500 status.
- A second Respond to Webhook node executes after the first one: the workflow ignores it.
- A Respond to Webhook node executes but there was no webhook: the workflow ignores the Respond to Webhook node.

## Output the response sent to the webhook

By default, the Respond to Webhook node has a single output branch that contains the node's input data.

You can optionally enable a second output branch containing the response sent to the webhook. To enable this secondary output, open the Respond to Webhook node on the canvas and select the **Settings** tab. Activate the **Enable Response Output Branch** option.

The node will now have two outputs:

- **Input Data**: The original output, passing on the node's input.
- **Response**: The response object sent to the webhook.

## Return more than one data item (deprecated)

n8n 1.22.0 added support for returning all data items using the **All Incoming Items** option. n8n recommends upgrading to the latest version of n8n, instead of using the workarounds described in this section.

The Respond to Webhook node runs once, using the first incoming data item. This includes when using [expressions](../../../../code/expressions/). You can't force looping using the Loop node: the workflow will run, but the webhook response will still only contain the results of the first execution.

If you need to return more than one data item, choose one of these options:

- Instead of using the Respond to Webhook node, use the **When Last Node Finishes** option in **Respond** in the Webhook node. Use this when you want to return the final data that the workflow outputs.
- Use the [Aggregate](../n8n-nodes-base.aggregate/) node to turn multiple items into a single item before passing the data to the Respond to Webhook node. Set **Aggregate** to **All Item Data (Into a Single List)**.

---

## Automating a (Real-world) Use Case

**URL:** llms-txt#automating-a-(real-world)-use-case

**Contents:**
- Understanding the scenario

Meet Nathan 🙋. Nathan works as an Analytics Manager at ABCorp. His job is to support the ABCorp team with reporting and analytics. Being a true jack of all trades, he also handles several miscellaneous initiatives.

Some things that Nathan does are repetitive and mind-numbing. He wants to automate some of these tasks so that he doesn't burn out. As an **Automation Expert**, you are meeting with Nathan today to help him understand how he can offload some of his responsibilities to n8n.

## Understanding the scenario

**You 👩‍🔧:** Nice to meet you, Nathan. Glad to be doing this! What's a repetitive task that's error-prone and that you'd like to get off your plate first?

**Nathan 🙋:** Thanks for coming in! The most annoying one's gotta be the weekly sales reporting.

I have to collect sales data from our legacy data warehouse, which manages data from the main business processes of an organization, such as sales or production. Now, each sales order can have the status Processing or Booked. I have to calculate the sum of all the Booked orders and announce them in the company Discord every Monday. Then I have to create a spreadsheet of all the Processing sales so that the Sales Managers can review them and check if they need to follow up with customers.

This manual work is tough and requires high attention to detail to make sure that all the numbers are right. Inevitably, I lose my focus and mistype a number or I don't get it done on time. I've been criticized once by my manager for miscalculating the data.

**You 👩‍🔧:** Oh no! Doesn't the data warehouse have a way to export the data?

**Nathan 🙋:** The data warehouse was written in-house ages ago. It doesn't have a CSV export but they recently added a couple of API endpoints that expose this data, if that helps.

**You 👩‍🔧:** Perfect! That's a good start. If you have a generic API, we can add some custom code and a couple of services to make an automated workflow. This gig has n8n written all over it. Let's get started!

---

## Set up OIDC

**URL:** llms-txt#set-up-oidc

**Contents:**
- Setting up and enabling OIDC
- Provider-specific OIDC setup
  - Auth0
- Discovery endpoints reference

- Available on Enterprise plans.
- You need to be an instance owner or admin to enable and configure OIDC.

## Setting up and enabling OIDC

1. In n8n, go to **Settings** > **SSO**.

1. Under **Select Authentication Protocol**, choose **OIDC** from the dropdown.

1. Copy the **redirect URL** shown (for example, `https://yourworkspace.app.n8n.cloud/rest/sso/oidc/callback`).

Extra configuration for load balancers or proxies

If you are running n8n behind a load balancer, make sure you set the [`N8N_EDITOR_BASE_URL` environment variable](../../../hosting/configuration/environment-variables/deployment/).

1. Set up OIDC with your identity provider (IdP). You'll need to:

- Create a new OIDC client/application in your IdP.
   - Configure the redirect URL from the previous step.
   - Note down the **Client ID** and **Client Secret** provided by your IdP.

1. In your IdP, locate the **Discovery Endpoint** (also called the well-known configuration endpoint). It typically has the following format:

1. In n8n, complete the OIDC configuration:

- **Discovery Endpoint**: Enter the discovery endpoint URL from your IdP.
   - **Client ID**: Enter the client ID you received when registering your application with your IdP.
   - **Client Secret**: Enter the client secret you received when registering your application with your IdP.

1. Select **Save settings**.

1. Set OIDC to **Activated**.

## Provider-specific OIDC setup

1. **Create an application in Auth0**:
   - Log in to your Auth0 Dashboard.
   - Go to **Applications** > **Applications**.
   - Click **Create Application**.
   - Enter a name (for example, "n8n SSO") and select **Regular Web Applications**.
   - Click **Create**.
1. **Configure the application**:
   - Go to the **Settings** tab of your new application.
   - **Allowed Callback URLs**: Add your n8n redirect URL from **Settings** > **SSO** > **OIDC**.
   - **Allowed Web Origins**: Add your n8n base URL (for example, `https://yourworkspace.app.n8n.cloud`).
   - Click **Save Changes**.
1. **Get your credentials**:
   - **Client ID**: Found in the **Settings** tab.
   - **Client Secret**: Found in the **Settings** tab.
   - **Discovery Endpoint**: `https://{your-auth0-domain}.auth0.com/.well-known/openid-configuration`.
1. **In n8n, complete the OIDC configuration:**
   - **Discovery Endpoint**: Enter the discovery endpoint URL from Auth0.
   - **Client ID**: Enter the client ID you found in your Auth0 settings.
   - **Client Secret**: Enter the client secret you found in your Auth0 settings.
1. Select **Save settings**.
1. Set OIDC to **Activated**.

## Discovery endpoints reference

- **Google discovery endpoint example**:

- **Microsoft Azure AD discovery endpoint example**:

- **Auth0 discovery endpoint example**:

- **Okta discovery endpoint example**:

**Examples:**

Example 1 (unknown):
```unknown
https://your-idp-domain/.well-known/openid-configuration
```

Example 2 (unknown):
```unknown
https://accounts.google.com/.well-known/openid-configuration
```

Example 3 (unknown):
```unknown
https://login.microsoftonline.com/{tenant-id}/v2.0/.well-known/openid-configuration
```

Example 4 (unknown):
```unknown
https://{your-domain}.auth0.com/.well-known/openid-configuration
```

---

## Read/Write Files from Disk

**URL:** llms-txt#read/write-files-from-disk

**Contents:**
- Operations
- Read File(s) From Disk
  - Read File(s) From Disk options
- Write File to Disk
  - Write File to Disk options
- Templates and examples
- File locations

Use the Read/Write Files from Disk node to read and write files from/to the machine where n8n is running.

This node isn't available on n8n Cloud.

- [**Read File(s) From Disk**](#read-files-from-disk): Use this operation to retrieve one or more files from the computer that runs n8n.
- [**Write File to Disk**](#write-file-to-disk): Use this operation to create a binary file on the computer that runs n8n.

Refer to the sections below for more information on configuring the node for each operation.

## Read File(s) From Disk

Configure this operation with these parameters:

- **File(s) Selector**: Enter the path of the file you want to read.
  - To enter multiple files, enter a page path pattern. You can use these characters to define a path pattern:
    - `*`: Matches any character zero or more times, excluding path separators.
    - `**`: Matches any character zero or more times, include path separators.
    - `?`: Matches any character except for path separators one time.
    - `[]`: Matches any characters inside the brackets. For example, `[abc]` would match the characters `a`, `b`, or `c`, and nothing else.

Refer to [Picomatch's Basic globbing](https://github.com/micromatch/picomatch#basic-globbing) documentation for more information on these characters and their expected behavior.

### Read File(s) From Disk options

You can also configure this operation with these **Options**:

- **File Extension**: Enter the extension for the file in the node output.
- **File Name**: Enter the name for the file in the node output.
- **MIME Type**: Enter the file's MIME type in the node output. Refer to [Common MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) for a list of file extensions and their MIME types.
- **Put Output File in Field**: Enter the name of the field in the output data to contain the file.

## Write File to Disk

Configure this operation with these parameters:

- **File Path and Name**: Enter the destination for the file, the file's name, and the file's extension.
- **Input Binary Field**: Enter the name of the field in the node input data that will contain the binary file.

### Write File to Disk options

You can also configure this operation with these **Options**:

This operation includes a single option, whether to **Append** data to an existing file instead of creating a new one (turned on) or to create a new file instead of appending to existing (turned off).

## Templates and examples

**Generate SQL queries from schema only - AI-powered**

[View template details](https://n8n.io/workflows/2508-generate-sql-queries-from-schema-only-ai-powered/)

**Breakdown Documents into Study Notes using Templating MistralAI and Qdrant**

[View template details](https://n8n.io/workflows/2339-breakdown-documents-into-study-notes-using-templating-mistralai-and-qdrant/)

**Talk to your SQLite database with a LangChain AI Agent 🧠💬**

[View template details](https://n8n.io/workflows/2292-talk-to-your-sqlite-database-with-a-langchain-ai-agent/)

[Browse Read/Write Files from Disk integration templates](https://n8n.io/integrations/readwrite-files-from-disk/), or [search all templates](https://n8n.io/workflows/)

If you run n8n in Docker, your command runs in the n8n container and not the Docker host.

This node looks for files relative to the n8n install path. n8n recommends using absolute file paths to prevent any errors.

---

## Set up source control for environments

**URL:** llms-txt#set-up-source-control-for-environments

**Contents:**
- Prerequisites
- Step 1: Set up your repository and branches
- Step 2: Configure Git in n8n
- Step 3: Set up authentication
  - SSH authentication (using deploy keys)
  - HTTPS authentication (using Personal Access Tokens)
- Step 4: Connect n8n and configure your instance

Link a Git repository to an n8n instance and configure your source control.

n8n uses source control to provide environments. Refer to [Environments in n8n](../understand/environments/) for more information.

To use source control with n8n, you need a Git repository with either:

- SSH access (using deploy keys), or
- HTTPS access (using Personal Access Tokens)

This document assumes you are familiar with Git and your Git provider.

## Step 1: Set up your repository and branches

1. Create a new repository for use with n8n.
1. Create the branches you need. For example, if you plan to have different environments for test and production, set up a branch for each.

To help decide what branches you need for your use case, refer to [Branch patterns](../understand/patterns/).

## Step 2: Configure Git in n8n

1. Go to **Settings** > **Environments**.
1. Choose your connection method:
   - **SSH**: In **Git repository URL**, enter the SSH URL for your repository (for example, `git@github.com:username/repo.git`).
   - **HTTPS**: In **Git repository URL** enter the HTTPS URL for your repository (for example, `https://github.com/username/repo.git`).
1. Configure authentication based on your connection method:
   - **For SSH**: n8n supports ED25519 and RSA public key algorithms. ED25519 is the default. Select **RSA** under **SSH Key** if your git host requires RSA. Copy the SSH key.
   - **For HTTPS**: Enter your credentials:
     - **Username**: Your Git provider username.
     - **Token**: Your Personal Access Token (PAT) from your Git provider.

## Step 3: Set up authentication

Configure authentication based on your chosen connection method.

### SSH authentication (using deploy keys)

Set up SSH access by creating a deploy key for the repository using the SSH key from n8n. The key must have write access.

The steps depend on your Git provider. Help links for common providers:

- [GitHub | Managing deploy keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys)
- [GitLab | Deploy keys](https://docs.gitlab.com/ee/user/project/deploy_keys/)

### HTTPS authentication (using Personal Access Tokens)

Create a Personal Access Token (PAT) with repository access permissions.

Help links for creating PATs with common providers:

- [GitHub | Managing personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
- [GitLab | Personal access tokens](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html)
- [Bitbucket | App passwords](https://support.atlassian.com/bitbucket-cloud/docs/app-passwords/)

Required permissions for your token:

- Repository read/write access
- Contents read/write (for GitHub)
- Source code pull/push (for GitLab)

## Step 4: Connect n8n and configure your instance

1. In **Settings** > **Environments** in n8n, select **Connect**. n8n connects to your Git repository.
1. Under **Instance settings**, choose which branch you want to use for the current n8n instance.
1. **Optional**: select **Protected instance** to prevent users editing workflows in this instance. This is useful for protecting production instances.
1. **Optional**: choose a custom color for the instance. This will appear in the menu next to the source control push and pull buttons. It helps users know which instance they're in.
1. Select **Save settings**.

---

## Binary data environment variables

**URL:** llms-txt#binary-data-environment-variables

File-based configuration

You can add `_FILE` to individual variables to provide their configuration in a separate file. Refer to [Keeping sensitive data in separate files](../../configuration-methods/#keeping-sensitive-data-in-separate-files) for more details.

By default, n8n uses memory to store binary data. Enterprise users can choose to use an external service instead. Refer to [External storage](../../../scaling/external-storage/) for more information on using external storage for binary data.

| Variable                          | Type   | Default                      | Description                                                                                                                                                                                                                                                                                                                                                                     |
| --------------------------------- | ------ | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `N8N_AVAILABLE_BINARY_DATA_MODES` | String | `filesystem`                 | A comma separated list of available binary data modes.                                                                                                                                                                                                                                                                                                                          |
| `N8N_BINARY_DATA_STORAGE_PATH`    | String | `N8N_USER_FOLDER/binaryData` | The path where n8n stores binary data.                                                                                                                                                                                                                                                                                                                                          |
| `N8N_DEFAULT_BINARY_DATA_MODE`    | String | `default`                    | The default binary data mode. `default` keeps binary data in memory. Set to `filesystem` to use the filesystem, or `s3` to AWS S3. Note that binary data pruning operates on the active binary data mode. For example, if your instance stored data in S3, and you later switched to filesystem mode, n8n only prunes binary data in the filesystem. This may change in future. |

---

## TYPE n8n_scaling_mode_queue_jobs_completed counter

**URL:** llms-txt#type-n8n_scaling_mode_queue_jobs_completed-counter

n8n_scaling_mode_queue_jobs_completed 0

---

## New York is the default value if not set

**URL:** llms-txt#new-york-is-the-default-value-if-not-set

GENERIC_TIMEZONE=Europe/Berlin

---

## Community Edition Features

**URL:** llms-txt#community-edition-features

**Contents:**
- Registered Community Edition

The community edition includes almost the complete feature set of n8n, except for the features listed here.

The community edition doesn't include these features:

- [Custom Variables](../../code/variables/)
- [Environments](../../source-control-environments/)
- [External secrets](../../external-secrets/)
- [External storage for binary data](../scaling/external-storage/)
- [Log streaming](../../log-streaming/) ([Logging](../logging-monitoring/logging/) *is* included)
- [Multi-main mode](../scaling/queue-mode/#multi-main-setup) ([Queue mode](../scaling/queue-mode/) *is* included)
- [Projects](../../user-management/rbac/projects/)
- SSO ([SAML](../securing/set-up-sso/), [LDAP](../../user-management/ldap/))
- Sharing ([workflows](../../workflows/sharing/), [credentials](../../credentials/credential-sharing/)) (Only the instance owner and the user who creates them can access workflows and credentials)
- [Version control using Git](../../source-control-environments/)
- [Workflow history](../../workflows/history/) (You can get one day of workflow history with the community edition by [registering](#registered-community-edition))

These features are available on the Enterprise Cloud plan, including the self-hosted Enterprise edition. Some of these features are available on the Starter and Pro Cloud plan.

See [pricing](https://n8n.io/pricing/) for reference.

## Registered Community Edition

You can unlock extra features by registering your n8n community edition. You register with your email and receive a license key.

Registering unlocks these features for the community edition:

- [Folders](../../release-notes/#folders): Organize your workflows into tidy folders
- [Debug in editor](../../workflows/executions/debug/): Copy and [pin](../../glossary/#data-pinning-n8n) execution data when working on a workflow
- One day of [workflow history](../../workflows/history/): 24 hours of workflow history so you can revert back to previous workflow versions
- [Custom execution data](../../workflows/executions/custom-executions-data/): Save, find, and annotate execution metadata

To register a new community edition instance, select the option during your initial account creation.

To register an existing community edition instance:

1. Select the **three dots icon** in the lower-left corner.
1. Select **Settings** and then **Usage and plan**.
1. Select **Unlock** to enter your email and then select **Send me a free license key**.
1. Check your email for the account you entered.

Once you have a license key, activate it by clicking the button in the license email or by visiting **Options > Settings > Usage and plan** and selecting **Enter activation key**.

Once activated, your license will not expire. We may change the unlocked features in the future. This will not impact previously unlocked features.

---

## Tags

**URL:** llms-txt#tags

**Contents:**
- Add a tag to a workflow
- Filter by tag
- Manage tags

Workflow tags allow you to label your workflows. You can then filter workflows by tag.

Tags are global. This means when you create a tag, it's available to all users on your n8n instance.

## Add a tag to a workflow

To add a tag to your workflow:

1. In your workflow, select **+ Add tag**.
1. Select an existing tag, or enter a new tag name.
1. Once you select a tag and click away from the tag modal, n8n displays the tag next to the workflow name.

You can add more than one tag.

When browsing the workflows on your instance, you can filter by tag.

1. On the **Workflows** page, select **Filters**.
1. Select **Tags**.
1. Select the tag or tags you want to filter by. n8n lists the workflows with that tag.

You can edit existing tags. Instance owners can delete tags.

1. Select **Manage tags**. This is available from **Filters** > **Tags** on the **Workflows** page, or in the **+ Add tag** modal in your workflow.
1. Hover over the tag you want to change.
1. Select **Edit** to rename it, or **Delete** to delete it.

Tags are global. If you edit or delete a tag, this affects all users of your n8n instance.

---

## Allows usage of only crypto

**URL:** llms-txt#allows-usage-of-only-crypto

export NODE_FUNCTION_ALLOW_BUILTIN=crypto

---

## n8n displays <ISO formatted timestamp>

**URL:** llms-txt#n8n-displays-<iso-formatted-timestamp>

---

## Compare Datasets

**URL:** llms-txt#compare-datasets

**Contents:**
- Node parameters
- Understand item comparison
- Node options
  - Fields to Skip Comparing
  - Disable Dot Notation
  - Multiple Matches
- Understand the output
- Templates and examples

The Compare Datasets node helps you compare data from two input streams.

1. Decide which fields to compare. In **Input A Field**, enter the name of the field you want to use from input stream A. In **Input B Field**, enter the name of the field you want to use from input stream B.
1. **Optional**: You can compare by multiple fields. Select **Add Fields to Match** to set up more comparisons.
1. Choose how to handle differences between the datasets. In **When There Are Differences**, select one of the following:
   - **Use Input A Version** to treat input stream A as the source of truth.
   - **Use Input B Version** to treat input stream B as the source of truth.
   - **Use a Mix of Versions** to use different inputs for different fields.
     - Use **Prefer** to select either **Input A Version** or **Input B Version** as the main source of truth.
     - Enter input fields that are exceptions to **For Everything Except** to pull from the other input source. To add multiple input fields, enter a comma-separated list.
   - **Include Both Versions** to include both input streams in the output, which may make the structure more complex.
1. Decide whether to use **Fuzzy Compare**. When turned on, the comparison will tolerate small type differences when comparing fields. For example, the number 3 and the string `3` are treated as the same with **Fuzzy Compare** turned on, but wouldn't be treated the same with it turned off.

## Understand item comparison

Item comparison is a two stage process:

1. n8n checks if the values of the fields you selected to compare match across both inputs.
1. If the fields to compare match, n8n then compares all fields within the items, to determine if the items are the same or different.

Use the node **Options** to refine your comparison or tweak comparison behavior.

### Fields to Skip Comparing

Enter field names that you want to ignore in the comparison.

For example, if you compare the two datasets below using `person.language` as the **Fields to Match**, n8n returns them as different. If you add `person.name` to **Fields to Skip Comparing**, n8n returns them as matching.

### Disable Dot Notation

Whether to disallow referencing child fields using `parent.child` in the field name (turned on) or allow it (turned off, default).

Choose how to handle duplicate data. The default is **Include All Matches**. You can choose **Include First Match Only**.

For example, given these two datasets:

n8n returns three items in the **Same Branch** tab. The data is the same in both branches.

If you select **Include First Match Only**, n8n returns two items, in the **Same Branch** tab. The data is the same in both branches, but n8n only returns the first occurrence of the matching "apple" items.

## Understand the output

There are four output options:

- **In A only Branch**: Contains data that occurs only in the first input.
- **Same Branch**: Contains data that's the same in both inputs.
- **Different Branch**: Contains data that's different between inputs.
- **In B only Branch**: Contains data that occurs only in the second output.

## Templates and examples

**Intelligent Email Organization with AI-Powered Content Classification for Gmail**

[View template details](https://n8n.io/workflows/4557-intelligent-email-organization-with-ai-powered-content-classification-for-gmail/)

**Two way sync Pipedrive and MySQL**

[View template details](https://n8n.io/workflows/1822-two-way-sync-pipedrive-and-mysql/)

**Sync Google Sheets data with MySQL**

[View template details](https://n8n.io/workflows/1964-sync-google-sheets-data-with-mysql/)

[Browse Compare Datasets integration templates](https://n8n.io/integrations/compare-datasets/), or [search all templates](https://n8n.io/workflows/)

**Examples:**

Example 1 (unknown):
```unknown
// Input 1
	[
		{
			"person":
			{
				"name":	"Stefan",
				"language":	"de"
			}
		},
		{
			"person":
			{
				"name":	"Jim",
				"language":	"en"
			}
		},
		{
			"person":
			{
				"name":	"Hans",
				"language":	"de"
			}
		}
	]
	// Input 2
		[
		{
			"person":
			{
				"name":	"Sara",
				"language":	"de"
			}
		},
		{
			"person":
			{
				"name":	"Jane",
				"language":	"en"
			}
		},
		{
			"person":
			{
				"name":	"Harriet",
				"language":	"de"
			}
		}
	]
```

Example 2 (unknown):
```unknown
// Input 1
	[
		{
			"fruit": {
				"type": "apple",
				"color": "red"
			}
		},
				{
			"fruit": {
				"type": "apple",
				"color": "red"
			}
		},
				{
			"fruit": {
				"type": "banana",
				"color": "yellow"
			}
		}
	]
	// Input 2
	[
		{
			"fruit": {
				"type": "apple",
				"color": "red"
			}
		},
				{
			"fruit": {
				"type": "apple",
				"color": "red"
			}
		},
				{
			"fruit": {
				"type": "banana",
				"color": "yellow"
			}
		}
	]
```

---

## Git

**URL:** llms-txt#git

**Contents:**
- Operations
- Add
- Add Config
  - Add Config options
- Clone
- Commit
  - Commit options
- Fetch
- List Config
- Log

[Git](https://git-scm.com/) is a free and open-source distributed version control system designed to handle everything from small to large projects with speed and efficiency.

You can find authentication information for this node [here](../../credentials/git/).

- [**Add**](#add) a file or folder to commit. Performs a [git add](https://git-scm.com/docs/git-add).
- [**Add Config**](#add-config): Add configuration property. Performs a [git config](https://git-scm.com/docs/git-config) set or add.
- [**Clone**](#clone) a repository: Performs a [git clone](https://git-scm.com/docs/git-clone).
- [**Commit**](#commit) files or folders to git. Performs a [git commit](https://git-scm.com/docs/git-commit).
- [**Fetch**](#fetch) from remote repository. Performs a [git fetch](https://git-scm.com/docs/git-fetch).
- [**List Config**](#list-config): Return current configuration. Performs a [git config](https://git-scm.com/docs/git-config) query.
- [**Log**](#log): Return git commit history. Performs a [git log](https://git-scm.com/docs/git-log).
- [**Pull**](#pull) from remote repository: Performs a [git pull](https://git-scm.com/docs/git-pull).
- [**Push**](#push) to remote repository: Performs a [git push](https://git-scm.com/docs/git-push).
- [**Push Tags**](#push-tags) to remote repository: Performs a [git push --tags](https://git-scm.com/docs/git-push#Documentation/git-push.txt---tags).
- Return [**Status**](#status) of current repository: Performs a [git status](https://git-scm.com/docs/git-status).
- Create a new [**Tag**](#tag): Performs a [git tag](https://git-scm.com/docs/git-tag).
- [**User Setup**](#user-setup): Set the user.

Refer to the sections below for more details on the parameters and options for each operation.

Configure this operation with these parameters:

- **Repository Path**: Enter the local path of the git repository.
- **Paths to Add**: Enter a comma-separated list of paths of files or folders to add in this field. You can use absolute paths or relative paths from the **Repository Path**.

Configure this operation with these parameters:

- **Repository Path**: Enter the local path of the git repository.
- **Key**: Enter the name of the key to set.
- **Value**: Enter the value of the key to set.

### Add Config options

The add config operation adds the **Mode** option. Choose whether to **Set** or **Append** the setting in the local config.

Configure this operation with these parameters:

- **Repository Path**: Enter the local path of the git repository.
- **Authentication**: Select **Authenticate** to pass credentials in. Select **None** to not use authentication.
  - **Credential for Git**: If you select **Authenticate**, you must select or create credentials for the node to use. Refer to [Git credential](../../credentials/git/) for more information.
- **New Repository Path**: Enter the local path where you'd like to locate the cloned repository.
- **Source Repository**: Enter the URL or path of the repository you want to clone.

Configure this operation with these parameters:

- **Repository Path**: Enter the local path of the git repository.
- **Message**: Enter the commit message to use in this field.

The commit operation adds the **Paths to Add** option. To commit all "added" files and folders, leave this field blank. To commit specific "added" files and folders, enter a comma-separated list of paths of files or folders in this field.

You can use absolute paths or relative paths from the **Repository Path**.

This operation only prompts you to enter the local path of the git repository in the **Repository Path** parameter.

This operation only prompts you to enter the local path of the git repository in the **Repository Path** parameter.

Configure this operation with these parameters:

- **Repository Path**: Enter the local path of the git repository.
- **Return All**: When turned on, the node will return all results. When turned off, the node will return results up to the set **Limit**.
- **Limit**: Only available when you turn off **Return All**. Enter the maximum number of results to return.

The log operation adds the **File** option. Enter the path of a file or folder to get the history of in this field.

You can use absolute paths or relative paths from the **Repository Path**.

This operation only prompts you to enter the local path of the git repository in the **Repository Path** parameter.

Configure this operation with these parameters:

- **Repository Path**: Enter the local path of the git repository.
- **Authentication**: Select **Authenticate** to pass credentials in or **None** to not use authentication.
  - If you select **Authenticate**, you must select or create **Credential for Git** for the node to use. Refer to [Git credential](../../credentials/git/) for more information.

The push operation adds the **Target Repository** option. Enter the URL or path of the repository to push to in this field.

This operation only prompts you to enter the local path of the git repository in the **Repository Path** parameter.

This operation only prompts you to enter the local path of the git repository in the **Repository Path** parameter.

Configure this operation with these parameters:

- **Repository Path**: Enter the local path of the git repository.
- **Name**: Enter the name of the tag to create in this field.

This operation only prompts you to enter the local path of the git repository in the **Repository Path** parameter.

## Templates and examples

**Back Up Your n8n Workflows To Github**

[View template details](https://n8n.io/workflows/1534-back-up-your-n8n-workflows-to-github/)

**Building RAG Chatbot for Movie Recommendations with Qdrant and Open AI**

[View template details](https://n8n.io/workflows/2440-building-rag-chatbot-for-movie-recommendations-with-qdrant-and-open-ai/)

**ChatGPT Automatic Code Review in Gitlab MR**

[View template details](https://n8n.io/workflows/2167-chatgpt-automatic-code-review-in-gitlab-mr/)

[Browse Git integration templates](https://n8n.io/integrations/git/), or [search all templates](https://n8n.io/workflows/)

---

## Set up user management on n8n Cloud

**URL:** llms-txt#set-up-user-management-on-n8n-cloud

**Contents:**
- Step one: In-app setup
- Step two: Invite users

To access user management, upgrade to version 0.195.0 or newer.

Once you upgrade your Cloud instance to an n8n version with user management, you can't downgrade your version.

## Step one: In-app setup

When you set up user management for the first time, you create an owner account.

1. Open n8n. The app displays a signup screen.
1. Enter your details. Your password must be at least eight characters, including at least one number and one capital letter.
1. Click **Next**. n8n logs you in with your new owner account.

## Step two: Invite users

You can now invite other people to your n8n instance.

1. Sign into your workspace with your owner account. (If you are in the Admin Panel open your **Workspace** from the Dashboard)
1. Click the three dots next to your user icon at the bottom left and click **Settings**. n8n opens your **Personal settings** page.
1. Click **Users** to go to the **Users** page.
1. Click **Invite**.
1. Enter the new user's email address.
1. Click **Invite user**. n8n sends an email with a link for the new user to join.

---

## Logs environment variables

**URL:** llms-txt#logs-environment-variables

**Contents:**
- n8n logs
- Log streaming

File-based configuration

You can add `_FILE` to individual variables to provide their configuration in a separate file. Refer to [Keeping sensitive data in separate files](../../configuration-methods/#keeping-sensitive-data-in-separate-files) for more details.

This page lists environment variables to set up logging for debugging. Refer to [Logging in n8n](../../../logging-monitoring/logging/) for details.

| Variable                        | Type                                                           | Default                             | Description                                                                                                                                                                                                                     |
| ------------------------------- | -------------------------------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `N8N_LOG_LEVEL`                 | Enum string: `info`, `warn`, `error`, `debug`                  | `info`                              | Log output level. Refer to [Log levels](../../../logging-monitoring/logging/#log-levels) for details.                                                                                                                           |
| `N8N_LOG_OUTPUT`                | Enum string: `console`, `file`                                 | `console`                           | Where to output logs. Provide multiple values as a comma-separated list.                                                                                                                                                        |
| `N8N_LOG_FORMAT`                | Enum string: `text`, `json`                                    | `text`                              | The log format to use. `text` prints human readable messages. `json` prints one JSON object per line containing the message, level, timestamp, and all metadata. This is useful for production monitoring as well as debugging. |
| `N8N_LOG_CRON_ACTIVE_INTERVAL`  | Number                                                         | `0`                                 | Interval in minutes to log currently active cron jobs. Set to `0` to disable.                                                                                                                                                   |
| `N8N_LOG_FILE_COUNT_MAX`        | Number                                                         | `100`                               | Max number of log files to keep.                                                                                                                                                                                                |
| `N8N_LOG_FILE_SIZE_MAX`         | Number                                                         | `16`                                | Max size of each log file in MB.                                                                                                                                                                                                |
| `N8N_LOG_FILE_LOCATION`         | String                                                         | `<n8n-directory-path>/logs/n8n.log` | Log file location. Requires N8N_LOG_OUTPUT set to `file`.                                                                                                                                                                       |
| `DB_LOGGING_ENABLED`            | Boolean                                                        | `false`                             | Whether to enable database-specific logging.                                                                                                                                                                                    |
| `DB_LOGGING_OPTIONS`            | Enum string: `query`, `error`, `schema`, `warn`, `info`, `log` | `error`                             | Database log output level. To enable all logging, specify `all`. Refer to [TypeORM logging options](https://orkhan.gitbook.io/typeorm/docs/docs/advanced-topics/5-logging#logging-options)                                      |
| `DB_LOGGING_MAX_EXECUTION_TIME` | Number                                                         | `1000`                              | Maximum execution time (in milliseconds) before n8n logs a warning. Set to `0` to disable long running query warning.                                                                                                           |
| `CODE_ENABLE_STDOUT`            | Boolean                                                        | `false`                             | Set to `true` to send Code node logs from `console.log` or `print` to the process's stdout, only for production executions.                                                                                                     |
| `NO_COLOR`                      | any                                                            | `undefined`                         | Set to any value to output logs without ANSI colors. For more information, see the [no-color.org website](https://no-color.org/).                                                                                               |

Refer to [Log streaming](../../../../log-streaming/) for more information on this feature.

| Variable                                 | Type    | Default       | Description                                                                                                                     |
| ---------------------------------------- | ------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `N8N_EVENTBUS_CHECKUNSENTINTERVAL`       | Number  | `0`           | How often (in milliseconds) to check for unsent event messages. Can in rare cases send message twice. Set to `0` to disable it. |
| `N8N_EVENTBUS_LOGWRITER_SYNCFILEACCESS`  | Boolean | `false`       | Whether all file access happens synchronously within the thread (true) or not (false).                                          |
| `N8N_EVENTBUS_LOGWRITER_KEEPLOGCOUNT`    | Number  | `3`           | Number of event log files to keep.                                                                                              |
| `N8N_EVENTBUS_LOGWRITER_MAXFILESIZEINKB` | Number  | `10240`       | Maximum size (in kilo-bytes) of an event log file before a new one starts.                                                      |
| `N8N_EVENTBUS_LOGWRITER_LOGBASENAME`     | String  | `n8nEventLog` | Basename of the event log file.                                                                                                 |

---

## The above example serve n8n at: https://n8n.example.com

**URL:** llms-txt#the-above-example-serve-n8n-at:-https://n8n.example.com

---

## Security Assertion Markup Language (SAML)

**URL:** llms-txt#security-assertion-markup-language-(saml)

- Available on Enterprise plans.
- You need to be an instance owner or admin to enable and configure SAML.

This section tells you how to enable SAML SSO (single sign-on) in n8n. It assumes you're familiar with SAML. If you're not, [SAML Explained in Plain English](https://www.onelogin.com/learn/saml) can help you understand how SAML works, and its benefits.

- [Set up SAML](setup/): a general guide to setting up SAML in n8n, and links to resources for common IdPs.
- [Okta Workforce Identity SAML setup](okta/): step-by-step guidance to configuring Okta.
- [Troubleshooting](troubleshooting/): a list of things to check if you encounter issues.
- [Managing users with SAML](managing/): performing user management tasks with SAML enabled.

---

## SSH

**URL:** llms-txt#ssh

**Contents:**
- Operations
  - Execute Command
  - Download File
  - Upload File
- Templates and examples

The SSH node is useful for executing commands using the Secure Shell Protocol.

You can find authentication information for this node [here](../../credentials/ssh/).

- [**Execute** a command](#execute-command)
- [**Download** a file](#download-file)
- [**Upload** a file](#upload-file)

To attach a file for upload, you will need to use an extra node such as the [Read/Write Files from Disk](../n8n-nodes-base.readwritefile/) node or the [HTTP Request](../n8n-nodes-base.httprequest/) node to pass the file as a data property.

Configure this operation with these parameters:

- **Credential to connect with**: Select an existing or create a new [SSH credential](../../credentials/ssh/) to connect with.
- **Command**: Enter the command to execute on the remote device.
- **Working Directory**: Enter the directory where n8n should execute the command.

- **Credential to connect with**: Select an existing or create a new [SSH credential](../../credentials/ssh/) to connect with.
- **Path**: Enter the path for the file you want to download. This path must include the file name. The downloaded file will use this file name. To use a different name, use the **File Name** option. Refer to [Download File options](#download-file-options) for more information.
- **File Property**: Enter the name of the object property that holds the binary data you want to download.

#### Download File options

You can further configure this operation with the **File Name** option. Use this option to override the binary data file name to a name of your choice.

- **Credential to connect with**: Select an existing or create a new [SSH credential](../../credentials/ssh/) to connect with.
- **Input Binary Field**: Enter the name of the input binary field that contains the file you want to upload.
- **Target Directory**: The directory to upload the file to. The name of the file is taken from the binary data file name. To enter a different name, use the **File Name** option. Refer to [Upload File options](#upload-file-options) for more information.

#### Upload File options

You can further configure this operation with the **File Name** option. Use this option to override the binary data file name to a name of your choice.

## Templates and examples

**Send Email if server has upgradable packages**

[View template details](https://n8n.io/workflows/2925-send-email-if-server-has-upgradable-packages/)

**Check VPS resource usage every 15 minutes**

[View template details](https://n8n.io/workflows/2951-check-vps-resource-usage-every-15-minutes/)

**Docker Registry Cleanup Workflow**

[View template details](https://n8n.io/workflows/2835-docker-registry-cleanup-workflow/)

[Browse SSH integration templates](https://n8n.io/integrations/ssh/), or [search all templates](https://n8n.io/workflows/)

---

## Update self-hosted n8n

**URL:** llms-txt#update-self-hosted-n8n

It's important to keep your n8n version up to date. This ensures you get the latest features and fixes.

Some tips when updating:

- Update frequently: this avoids having to jump multiple versions at once, reducing the risk of a disruptive update. Try to update at least once a month.
- Check the [Release notes](../../../release-notes/) for breaking changes.
- Use [Environments](../../../source-control-environments/) to create a test version of your instance. Test the update there first.

For instructions on how to update, refer to the documentation for your installation method:

- [Installed with npm](../npm/#updating)
- [Installed with Docker](../docker/#updating)

---

## Overview

**URL:** llms-txt#overview

**Contents:**
- What are evaluations?
- Why is evaluation needed?
- Two types of evaluation
  - Light evaluation (pre-deployment)
  - Metric-based evaluation (post-deployment)
  - Comparison of evaluation types
- Learn more

## What are evaluations?

Evaluation is a crucial technique for checking that your AI workflow is reliable. It can be the difference between a flaky proof of concept and a solid production workflow. It's important both in the building phase and after deploying to production.

The foundation of evaluation is running a test dataset through your workflow. This dataset contains multiple test cases. Each test case contains a sample input for your workflow, and often includes the expected output(s) too.

Evaluation allows you to:

- **Test your workflow over a range of inputs** so you know how it performs on edge cases
- **Make changes with confidence** without inadvertently making things worse elsewhere
- **Compare performance** across different models or prompts

The following video explains what evaluations are, why they're useful, and how they work:

## Why is evaluation needed?

AI models are fundamentally different than code. Code is deterministic and you can reason about it. This is difficult to do with LLMs, since they're black boxes. Instead, you must *measure* LLM output by running data through them and observing the output.

You can only build confidence that your model performs reliably after you have run it over multiple inputs that accurately reflect all the edge cases that it will have to deal with in production.

## Two types of evaluation

### Light evaluation (pre-deployment)

Building a clean, comprehensive dataset is hard. In the initial building phase, it often makes sense to generate just a handful of examples. These can be enough to iterate the workflow to a releasable state (or a proof of concept). You can visually compare the results to get a sense of the workflow's quality, without setting up formal metrics.

### Metric-based evaluation (post-deployment)

Once you deploy your workflow, it's easier to build a bigger, more representative dataset from production executions. When you discover a bug, you can add the input that caused it to the dataset. When fixing the bug, it's important to run the whole dataset over the workflow again as a [regression test](https://en.wikipedia.org/wiki/Regression_testing) to check that the fix hasn't inadvertently made something else worse.

Since there are too many test cases to check individually, evaluations measure the quality of the outputs using a metric, a numeric value representing a particular characteristic. This also allows you to track quality changes between runs.

### Comparison of evaluation types

|                                                  | Light evaluation (pre-deployment) | Metric-based evaluation (post-deployment) |
| ------------------------------------------------ | --------------------------------- | ----------------------------------------- |
| **Performance improvements with each iteration** | Large                             | Small                                     |
| **Dataset size**                                 | Small                             | Large                                     |
| **Dataset sources**                              | Hand-generated AI-generated Other | Production executions AI-generated Other  |
| **Actual outputs**                               | Required                          | Required                                  |
| **Expected outputs**                             | Optional                          | Required (usually)                        |
| **Evaluation** **metric**                        | Optional                          | Required                                  |

- [Light evaluations](../light-evaluations/): Perfect for evaluating your AI workflows against hand-selected test cases during development.
- [Metric-based evaluations](../metric-based-evaluations/): Advanced evaluations to maintain performance and correctness in production by using scoring and metrics with large datasets.
- [Tips and common issues](../tips-and-common-issues/): Learn how to set up specific evaluation use cases and work around common issues.

---

## Best practices for user management

**URL:** llms-txt#best-practices-for-user-management

**Contents:**
- All platforms
- Self-hosted

This page contains advice on best practices relating to user management in n8n.

- n8n recommends that owners create a member-level account for themselves. Owners can see all workflows, but there is no way to see who created a particular workflow, so there is a risk of overriding other people's work if you build and edit workflows as an owner.
- Users must be careful not to edit the same workflow simultaneously. It's possible to do it, but the users will overwrite each other's changes.
- To move workflows between accounts, export the workflow as JSON, then import it to the new account. Note that this action loses the workflow history.
- Webhook paths must be unique across the entire instance. This means each webhook path must be unique for all workflows and all users. By default, n8n generates a long random value for the webhook path, but users can edit this to their own custom path. If two users set the same path value:
  - The path works for the first workflow that's run or activated.
  - Other workflows will error if they try to run with the same path.

If you run n8n behind a reverse proxy, set the following environment variables so that n8n generates emails with the correct URL:

- `N8N_HOST`
- `N8N_PORT`
- `N8N_PROTOCOL`
- `N8N_EDITOR_BASE_URL`

More information on these variables is available in [Environment variables](../../hosting/configuration/environment-variables/).

---

## Convert to File

**URL:** llms-txt#convert-to-file

**Contents:**
- Operations
  - Convert to CSV
  - Convert to HTML
  - Convert to ICS
  - Convert to JSON
  - Convert to ODS
  - Convert to RTF
  - Convert to Text File
  - Convert to XLS
  - Convert to XLSX

Use the Convert to File node to take input data and output it as a file. This converts the input JSON data into a binary format.

To extract data from a file and convert it to JSON, use the [Extract from File](../n8n-nodes-base.extractfromfile/) node.

- [**Convert to CSV**](#convert-to-csv)
- [**Convert to HTML**](#convert-to-html)
- [**Convert to ICS**](#convert-to-ics)
- [**Convert to JSON**](#convert-to-json)
- [**Convert to ODS**](#convert-to-ods)
- [**Convert to RTF**](#convert-to-rtf)
- [**Convert to Text File**](#convert-to-text-file)
- [**Convert to XLS**](#convert-to-xls)
- [**Convert to XLSX**](#convert-to-xlsx)
- [**Move Base64 String to File**](#move-base64-string-to-file)

Node parameters and options depend on the operation you select.

Configure the node for this operation with the **Put Output File in Field** parameter. Enter the name of the field in the output data to contain the file.

#### Convert to CSV options

You can also configure this operation with these **Options**:

- **File Name**: Enter the file name for the generated output file.
- If the first row of the file contains header names, turn on the **Header Row** option.

Configure the node for this operation with the **Put Output File in Field** parameter. Enter the name of the field in the output data to contain the file.

#### Convert to HTML options

You can also configure this operation with these **Options**:

- **File Name**: Enter the file name for the generated output file.
- If the first row of the file contains header names, turn on the **Header Row** option.

- **Put Output File in Field**. Enter the name of the field in the output data to contain the file.
- **Event Title**: Enter the title for the event.
- **Start**: Enter the date and time the event will start. All-day events ignore the time.
- **End**: Enter the date and time the event will end. All-day events ignore the time. If unset, the node uses the start date.
- **All Day**: Select whether the event is an all day event (turned on) or not (turned off).

#### Convert to ICS options

You can also configure this operation with these **Options**:

- **File Name**: Enter the file name for the generated output file.
- **Attendees**: Use this option to add attendees to the event. For each attendee, add:
  - **Name**
  - **Email**
  - **RSVP**: Select whether the attendee needs to confirm attendance (turned on) or doesn't (turned off).
- **Busy Status**: Use this option to set the busy status for Microsoft applications like Outlook. Choose from:
  - **Busy**
  - **Tentative**
- **Calendar Name**: For Apple and Microsoft calendars, enter the [calendar name](https://learn.microsoft.com/en-us/openspecs/exchange_server_protocols/ms-oxcical/1da58449-b97e-46bd-b018-a1ce576f3e6d) for the event.
- **Description**: Enter an event description.
- **Geolocation**: Enter the **Latitude** and **Longitude** for the event's location.
- **Location**: Enter the event's intended venue/location.
- **Recurrence Rule**: Enter a rule to define the repeat pattern of the event (RRULE). Generate rules using the [iCalendar.org RRULE Tool](https://icalendar.org/rrule-tool.html).
- **Organizer**: Enter the organizer's **Name** and **Email**.
- **Sequence**: If you're sending an update for an event with the same universally unique ID (UID), enter the revision sequence number.
- **Status**: Set the status of the event. Choose from:
  - **Confirmed**
  - **Cancelled**
  - **Tentative**
- **UID**: Enter a universally unique ID (UID) for the event. The UID should be globally unique. The node automatically generates a UID if you don't enter one.
- **URL**: Enter a URL associated with the event.
- **Use Workflow Timezone**: Whether to use UTC time zone (turned off) or the workflow's timezone (turned on). Set the workflow's timezone in the [Workflow Settings](../../../../workflows/settings/).

Choose the best output **Mode** for your needs from these options:

- **All Items to One File**: Send all input items to a single file.
- **Each Item to Separate File**: Create a file for every input item.

#### Convert to JSON options

You can also configure this operation with these **Options**:

- **File Name**: Enter the file name for the generated output file.
- **Format**: Choose whether to format the JSON for easier reading (turned on) or not (turned off).
- **Encoding**: Choose the character set to use to encode the data. The default is **utf8**.

Configure the node for this operation with the **Put Output File in Field** parameter. Enter the name of the field in the output data to contain the file.

#### Convert to ODS options

You can also configure this operation with these **Options**:

- **File Name**: Enter the file name for the generated output file.
- **Compression**: Choose whether to compress and reduce the file's output size.
- **Header Row**: Turn on if the first row of the file contains header names.
- **Sheet Name**: Enter the Sheet Name to create in the spreadsheet.

Configure the node for this operation with the **Put Output File in Field** parameter. Enter the name of the field in the output data to contain the file.

#### Convert to RFT options

You can also configure this operation with these **Options**:

- **File Name**: Enter the file name for the generated output file.
- If the first row of the file contains header names, turn on the **Header Row** option.

### Convert to Text File

Enter the name of the **Text Input Field** that contains a string to convert to a file. Use dot-notation for deep fields, for example `level1.level2.currentKey`.

#### Convert to Text File options

You can also configure this operation with these **Options**:

- **File Name**: Enter the file name for the generated output file.
- **Encoding**: Choose the character set to use to encode the data. The default is **utf8**.

Configure the node for this operation with the **Put Output File in Field** parameter. Enter the name of the field in the output data to contain the file.

#### Convert to XLS options

You can also configure this operation with these **Options**:

- **File Name**: Enter the file name for the generated output file.
- **Header Row**: Turn on if the first row of the file contains header names.
- **Sheet Name**: Enter the Sheet Name to create in the spreadsheet.

Configure the node for this operation with the **Put Output File in Field** parameter. Enter the name of the field in the output data to contain the file.

#### Convert to XLSX options

You can also configure this operation with these **Options**:

- **File Name**: Enter the file name for the generated output file.
- **Compression**: Choose whether to compress and reduce the file's output size.
- **Header Row**: Turn on if the first row of the file contains header names.
- **Sheet Name**: Enter the Sheet Name to create in the spreadsheet.

### Move Base64 String to File

Enter the name of the **Base64 Input Field** that contains the Base64 string to convert to a file. Use dot-notation for deep fields, for example `level1.level2.currentKey`.

#### Move Base64 String to File options

You can also configure this operation with these **Options**:

- **File Name**: Enter the file name for the generated output file.
- **MIME Type**: Enter the MIME type of the output file. Refer to [Common MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) for a list of common MIME types and the file extensions they relate to.

## Templates and examples

**Automated Web Scraping: email a CSV, save to Google Sheets & Microsoft Excel**

[View template details](https://n8n.io/workflows/2275-automated-web-scraping-email-a-csv-save-to-google-sheets-and-microsoft-excel/)

**🤖 Telegram Messaging Agent for Text/Audio/Images**

[View template details](https://n8n.io/workflows/2751-telegram-messaging-agent-for-textaudioimages/)

**Ultimate Scraper Workflow for n8n**

[View template details](https://n8n.io/workflows/2431-ultimate-scraper-workflow-for-n8n/)

[Browse Convert to File integration templates](https://n8n.io/integrations/convert-to-file/), or [search all templates](https://n8n.io/workflows/)

---

## Privacy and security at n8n

**URL:** llms-txt#privacy-and-security-at-n8n

n8n is committed to the privacy and security of your data. This section outlines how n8n handles and secures data. This isn't an exhaustive list of practices, but an overview of key policies and procedures.

If you have any questions related to data privacy, email privacy@n8n.io.

If you have any security-related questions, or if you want to report a suspected vulnerability, email security@n8n.io.

- [Privacy](/privacy-security/privacy/)
- [Security](https://n8n.io/legal/#security)
- [Incident response](/privacy-security/incident-response/)
- [What you can do](/privacy-security/what-you-can-do/)

---

## This is a top-level heading

**URL:** llms-txt#this-is-a-top-level-heading

**Contents:**
- This is a sub-heading
  - This is a smaller sub-heading
- Make images full width
- Embed a YouTube video

## This is a sub-heading
### This is a smaller sub-heading

You can add links:
[Example](https://example.com/)

Create lists with asterisks:

* Item one
* Item two

Or created ordered lists with numbers:

1. Item one
2. Item two

![Source example](https://<IMAGE-URL>/<IMAGE-NAME>.png#full-width)

@[youtube](ZCuL2e4zC_4)
```

To embed your own video, copy the above syntax, replacing `ZCuL2e4zC_4` with your video ID. The YouTube video ID is the string that follows `v=` in the YouTube URL.

**Examples:**

Example 1 (unknown):
```unknown
For a more detailed guide, refer to [CommonMark's help](https://commonmark.org/help/). n8n uses [markdown-it](https://github.com/markdown-it/markdown-it), which implements the CommonMark specification.

## Make images full width

You can force images to be 100% width of the sticky note by appending `#full-width` to the filename:
```

Example 2 (unknown):
```unknown
## Embed a YouTube video

To display a YouTube video in a note, use the `@[youtube](<video-id>)` directive with the video's ID. For this to work, the video's creator must allow embedding.

For example:
```

---
