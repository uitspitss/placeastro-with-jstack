# N8N - Getting Started

**Pages:** 8

---

## Odoo credentials

**URL:** llms-txt#odoo-credentials

**Contents:**
- Supported authentication methods
- Related resources
- Using API key
- Using password
- Required plan type

You can use these credentials to authenticate the following nodes:

- [Odoo](../../app-nodes/n8n-nodes-base.odoo/)

## Supported authentication methods

- API key (Recommended)
- Password

Refer to [Odoo's External API documentation](https://www.odoo.com/documentation/17.0/developer/reference/external_api.html) for more information about the service.

Refer to the Odoo [Getting Started tutorial](https://www.odoo.com/slides/getting-started-15) if you're new to Odoo.

To configure this credential, you'll need a user account on an [Odoo](https://www.odoo.com/) database and:

- Your **Site URL**
- Your **Username**
- An **API key**
- Your **Database name**

To set up the credential with an API key:

1. Enter your Odoo server or site URL as the **Site URL**.
1. Enter your **Username** as it's displayed on your **Change password** screen in Odoo.
1. To use an API key, go to **Your Profile > Preferences > Account Security > Developer API Keys**.
   - If you don't have this option, you may need to upgrade your Odoo plan. Refer to [Required plan type](#required-plan-type) for more information.
1. Select **New API Key**.
1. Enter a **Description** for the key, like `n8n integration`.
1. Select **Generate Key**.
1. Copy the key and enter it as the **Password or API key** in your n8n credential.
1. Enter your Odoo **Database name**, also known as the instance name.

Refer to [Odoo API Keys](https://www.odoo.com/documentation/15.0/developer/reference/external_api.html?#api-keys) for more information.

To configure this credential, you'll need a user account on an [Odoo](https://www.odoo.com/) database and:

- Your **Site URL**
- Your **Username**
- Your **Password**
- Your **Database name**

To set up the credential with a password:

1. Enter your Odoo server or site URL as the **Site URL**.
1. Enter your **Username** as it's displayed on your **Change password** screen in Odoo.
1. To use a password, enter your user password in the **Password or API key** field.
1. Enter your Odoo **Database name**, also known as the instance name.

Password compatibility

If you try a password credential and it doesn't work for a specific node function, try switching to an API key. Odoo requires an API key for certain modules or based on certain settings.

## Required plan type

Access to the external API is only available on a **Custom** Odoo plan. (The One App Free or Standard plans won't give you access.)

Refer to [Odoo Pricing Plans](https://www.odoo.com/pricing-plan) for more information.

---

## The very quick quickstart

**URL:** llms-txt#the-very-quick-quickstart

**Contents:**
- Step one: Open a workflow template and sign up for n8n Cloud
- Step two: Run the workflow
- Step three: Add a node
- Next steps

This quickstart gets you started using n8n as quickly as possible. Its allows you to try out the UI and introduces two key features: [workflow templates](../../glossary/#template-n8n) and [expressions](../../glossary/#expression-n8n). It doesn't include detailed explanations or explore concepts in-depth.

In this tutorial, you will:

- Load a [workflow](../../glossary/#workflow-n8n) from the workflow templates library
- Add a node and configure it using expressions
- Run your first workflow

## Step one: Open a workflow template and sign up for n8n Cloud

n8n provides a quickstart template using training nodes. You can use this to work with fake data and avoid setting up [credentials](../../glossary/#credential-n8n).

This quickstart uses [n8n Cloud](../../manage-cloud/overview/). A free trial is available for new users.

1. Go to [Templates | Very quick quickstart](https://n8n.io/workflows/1700-very-quick-quickstart/).
1. Select **Use for free** to view the options for using the template.
1. Select **Get started free with n8n cloud** to sign up for a new Cloud instance.

1. Gets example data from the [Customer Datastore](../../integrations/builtin/app-nodes/n8n-nodes-base.n8ntrainingcustomerdatastore/) node.
1. Uses the [Edit Fields](../../integrations/builtin/core-nodes/n8n-nodes-base.set/) node to extract only the desired data and assigns that data to variables. In this example, you map the customer name, ID, and description.

The individual pieces in an n8n workflow are called [nodes](../../glossary/#node-n8n). Double click a node to explore its settings and how it processes data.

## Step two: Run the workflow

Select **Execute Workflow**. This runs the workflow, loading the data from the Customer Datastore node, then transforming it with Edit Fields. You need this data available in the workflow so that you can work with it in the next step.

## Step three: Add a node

Add a third node to message each customer and tell them their description. Use the Customer Messenger node to send a message to fake recipients.

1. Select the **Add node** connector on the Edit Fields node.
1. Search for **Customer Messenger**. n8n shows a list of nodes that match the search.
1. Select **Customer Messenger (n8n training)** to add the node to the [canvas](../../glossary/#canvas-n8n). n8n opens the node automatically.
1. Use [expressions](../../code/expressions/) to map in the **Customer ID** and create the **Message**:
   1. In the **INPUT** panel select the **Schema** tab.

1. Drag **Edit Fields1** > **customer_id** into the **Customer ID** field in the node settings.

1. Hover over **Message**. Select the **Expression** tab, then select the expand button to open the full expressions editor.

1. Copy this expression into the editor:

1. Close the expressions editor, then close the **Customer Messenger** node by clicking outside the node or selecting **Back to canvas**.
1. Select **Execute Workflow**. n8n runs the workflow.

The complete workflow should look like this:

[View workflow file](/_workflows/try-it-out/quickstart/very-quick-quickstart-workflow.json)

- Read n8n's [longer try it out tutorial](../tutorial-first-workflow/) for a more complex workflow, and an introduction to more features and n8n concepts.
- Take the [text courses](../../courses/) or [video courses](../../video-courses/).

**Examples:**

Example 1 (unknown):
```unknown
Hi {{ $json.customer_name }}. Your description is: {{ $json.customer_description }}
```

---

## Level two: Introduction

**URL:** llms-txt#level-two:-introduction

**Contents:**
- Is this course right for me?
- What will I learn in this course?
- What do I need to get started?
- How long does the course take?
- How do I complete the course?

Welcome to the **n8n Course Level 2**!

## Is this course right for me?

This course is for you if you:

- Want to automate somewhat complex business processes.
- Want to dive deeper into n8n after taking the [Level 1 course](../level-one/).

## What will I learn in this course?

The focus in this course is on working with data. You will learn how to:

- Use the data structure of n8n correctly.
- Process different data types (for example, XML, HTML, date, time, and binary data).
- Merge data from different sources (for example, a database, spreadsheet, or CRM).
- Use functions and JavaScript code in the [Code node](../../integrations/builtin/core-nodes/n8n-nodes-base.code/).
- Deal with error workflows and workflow errors.

You will learn all this by completing short practical exercises after the theoretical explanations and building a business workflow following instructions.

## What do I need to get started?

To follow along this course (at a comfortable pace) you will need the following:

- **n8n set up**: You can use the [self-hosted version](../../hosting/installation/npm/) or [n8n Cloud](../../manage-cloud/overview/).
- **A user ID**: [Sign up here](https://n8n-community.typeform.com/to/HQoQ7nXg) to get your unique ID and other credentials you will need in this course (Level 2). If you're a Level 1 finisher, please sign up again as you'll get different credentials for the Level 2 workflows.
- **Basic n8n skills**: We strongly recommend taking the [Level 1 course](../level-one/) before this one.
- **Basic JavaScript understanding**

## How long does the course take?

Completing the course should take around **two hours**. You don't have to complete it in one go; feel free to take breaks and resume whenever you are ready.

## How do I complete the course?

There are two milestones in this course that test your knowledge of what you have learned in the lessons:

- Building the [main workflow](chapter-5/chapter-5.0/)
- Passing the [quiz](https://n8n-community.typeform.com/to/r9hDbytg) at the end of the course

You can always **check your progress** throughout the course by entering your unique ID [here](https://internal.users.n8n.cloud/webhook/course-level-2/verify).

If you successfully complete the milestones above, you will get [**a badge and an avatar**](https://community.n8n.io/badges/105/completed-n8n-course-level-2) in your forum profile. You can then share your profile and course verification ID to showcase your n8n skills to others.

[Let's get started!](chapter-1/)

---

## Level one: Introduction

**URL:** llms-txt#level-one:-introduction

**Contents:**
- Is this course right for me?
- What will I learn in this course?
- What do I need to get started?
- How long does the course take?
- How do I complete the course?

Welcome to the **n8n Course Level 1**!

## Is this course right for me?

This course introduces you to the fundamental concepts within n8n and develops your low-code automation expertise.

This course is for you if you:

- Are starting to use n8n for the first time.
- Are looking for some extra help creating your first workflow.
- Want to automate processes in your personal or working life.

This course introduces n8n concepts and demonstrates practical workflow building without assuming any prior familiarity with n8n. If you'd like to get a feel for the basics without as much explanation, consult our [quickstart guide](../../try-it-out/tutorial-first-workflow/).

## What will I learn in this course?

We believe in learning by doing. You can expect some theoretical information about the basic concepts and components of n8n, followed by practice of building workflows step by step.

By the end of this course you will know:

- How to set up n8n and navigate the Editor UI.
- How n8n structures data.
- How to configure different node parameters and add credentials.
- When and how to use conditional logic in workflows.
- How to schedule and control workflows.
- How to import, download, and share workflows with others.

You will build two workflows:

- A two-node workflow to get articles from Hacker News
- A seven-node workflow to help your client get records from a data warehouse, filter them, make calculations, and notify team members about the results

## What do I need to get started?

1. **n8n set up**: You can use [n8n Cloud](../../manage-cloud/overview/) (or the [self-hosted version](../../hosting/installation/docker/) if you have experience hosting services).
1. **A course user ID**: [Sign up here](https://n8n-community.typeform.com/to/PDEMrevI) to get your unique ID and other credentials you will need in this course (Level 1).
1. Basic knowledge of JavaScript and [APIs](https://blog.n8n.io/what-are-apis-how-to-use-them-with-no-code/) would be helpful, but isn't necessary.
1. An [account on the n8n community forum](https://community.n8n.io/) if you wish to receive a profile badge and avatar upon successful completion.

## How long does the course take?

Completing the course should take around **two hours**. You don't have to complete it in one go; feel free to take breaks and resume whenever you are ready.

## How do I complete the course?

There are two milestones in this course that test your knowledge of what you have learned in the lessons:

- Building the [main workflow](chapter-5/chapter-5.1/)
- Passing the [quiz](https://n8n-community.typeform.com/to/JMoBXeGA) at the end of the course

You can always **check your progress** throughout the course by entering your unique ID [here](https://internal.users.n8n.cloud/webhook/course-level-1/verify).

If you complete the milestones above, you will get [**a badge and an avatar**](https://community.n8n.io/badges/104/completed-n8n-course-level-1) in your forum profile. You can then share your profile and course verification ID to showcase your n8n skills to others.

[Let's get started!](chapter-1/)

---

## Tutorial: Create environments with source control

**URL:** llms-txt#tutorial:-create-environments-with-source-control

**Contents:**
- Choose your source control pattern
  - Multiple instances, multiple branches
  - Multiple instances, one branch
- Set up your repository
- Connect your n8n instances to your repository
  - Configure Git in n8n
  - Set up a deploy key
  - Connect n8n and configure your instance
- Push work from development
- Pull work to production

- Available on Enterprise.
- You must be an n8n instance owner or instance admin to enable and configure source control.
- Instance owners and instance admins can push changes to and pull changes from the connected repository.
- Project admins can push changes to the connected repository. They can't pull changes from the repository.

This tutorial walks through the process of setting up environments end-to-end. You'll create two environments: development and production. It uses GitHub as the Git provider. The process is similar for other providers.

n8n has built its environments feature on top of Git, a version control software. You link an n8n instance to a Git branch, and use a push-pull pattern to move work between environments. You should have some understanding of environments and Git. If you need more information on these topics, refer to:

- [Environments in n8n](../understand/environments/): the purpose of environments, and how they work in n8n.
- [Git and n8n](../understand/git/): Git concepts and source control in n8n.

## Choose your source control pattern

Before setting up source control and environments, you need to plan your environments, and how they relate to Git branches. n8n supports different [Branch patterns](../understand/patterns/). For environments, you need to choose between two patterns: multi-instance, multi-branch, or multi-instance, single-branch. This tutorial covers both patterns.

Recommendation: don't push and pull to the same n8n instance

You can push work from an instance to a branch, and pull to the same instance. n8n doesn't recommend this. To reduce the risk of merge conflicts and overwriting work, try to create a process where work goes in one direction: either to Git, or from Git, but not both.

### Multiple instances, multiple branches

The advantages of this pattern are:

- An added safety layer to prevent changes getting into your production environment by mistake. You have to do a pull request in GitHub to copy work between environments.
- It supports more than two instances.

The disadvantage is more manual steps to copy work between environments.

### Multiple instances, one branch

The advantage of this pattern is that work is instantly available to other environments when you push from one instance.

The disadvantages are:

- If you push by mistake, there is a risk the work will make it into your production instance. If you [use a GitHub Action to automate pulls](./#optional-use-a-github-action-to-automate-pulls) to production, you must either use the multi-instance, multi-branch pattern, or be careful to never push work that you don't want in production.
- Pushing and pulling to the same instance can cause data loss as changes are overridden when performing these actions. You should set up processes to ensure content flows in one direction.

## Set up your repository

Once you've chosen your pattern, you need to set up your GitHub repository.

1. [Create a new repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository).
   - Make sure the repository is private, unless you want your workflows, tags, and variable and credential stubs exposed to the internet.
   - Create the new repository with a README so you can immediately create branches.
1. Create one branch named `production` and another named `development`. Refer to [Creating and deleting branches within your repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository) for guidance.

[Create a new repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository).

- Make sure the repository is private, unless you want your workflows, tags, and variable and credential stubs exposed to the internet.
- Create the new repository with a README. This creates the `main` branch, which you'll connect to.

## Connect your n8n instances to your repository

Create two n8n instances, one for development, one for production.

### Configure Git in n8n

1. Go to **Settings** > **Environments**.
1. Choose your connection method:
   - **SSH**: In **Git repository URL**, enter the SSH URL for your repository (for example, `git@github.com:username/repo.git`).
   - **HTTPS**: In **Git repository URL** enter the HTTPS URL for your repository (for example, `https://github.com/username/repo.git`).
1. Configure authentication based on your connection method:
   - **For SSH**: n8n supports ED25519 and RSA public key algorithms. ED25519 is the default. Select **RSA** under **SSH Key** if your git host requires RSA. Copy the SSH key.
   - **For HTTPS**: Enter your credentials:
     - **Username**: Your Git provider username.
     - **Token**: Your Personal Access Token (PAT) from your Git provider.

### Set up a deploy key

Set up SSH access by creating a deploy key for the repository using the SSH key from n8n. The key must have write access. Refer to [GitHub | Managing deploy keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys) for guidance.

### Connect n8n and configure your instance

1. In **Settings** > **Environments** in n8n, select **Connect**. n8n connects to your Git repository.

1. Under **Instance settings**, choose which branch you want to use for the current n8n instance. Connect the production branch to the production instance, and the development branch to the development instance.

1. Production instance only: select **Protected instance** to prevent users editing workflows in this instance.

1. Select **Save settings**.

1. In **Settings** > **Environments** in n8n, select **Connect**.

1. Under **Instance settings**, select the main branch.

1. Production instance only: select **Protected instance** to prevent users editing workflows in this instance.

1. Select **Save settings**.

## Push work from development

In your development instance, create a few workflows, tags, variables, and credentials.

1. Select **Push** in the main menu.

Pull and push buttons when menu is closed

Pull and push buttons when menu is open

1. In the **Commit and push changes** modal, select which workflows you want to push. You can filter by status (new, modified, deleted) and search for workflows. n8n automatically pushes tags, and variable and credential stubs.

1. Enter a commit message. This should be a one sentence description of the changes you're making.

1. Select **Commit and Push**. n8n sends the work to Git, and displays a success message on completion.

## Pull work to production

Your work is now in GitHub. If you're using a multi-branch setup, it's on the development branch. If you chose the single-branch setup, it's on main.

1. In GitHub, create a pull request to merge development into production.
1. Merge the pull request.
1. In your production instance, select **Pull** in the main menu.

In your production instance, select **Pull** in the main menu.

Pull and push buttons when menu is closed

Pull and push buttons when menu is open

### Optional: Use a GitHub Action to automate pulls

If you want to avoid logging in to your production instance to pull, you can use a [GitHub Action](https://docs.github.com/en/actions/creating-actions/about-custom-actions) and the [n8n API](../../api/) to automatically pull every time you push new work to your production or main branch.

A GitHub Action example:

- [Environments in n8n](../understand/environments/) and [Git and n8n](../understand/git/)
- [Source control patterns](../understand/patterns/)

**Examples:**

Example 1 (unknown):
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

## Try it out

**URL:** llms-txt#try-it-out

The best way to learn n8n is by using our tutorials to get familiar with the user interface and the many different types of nodes and integrations available. Here is a selection of material to get you started:

- Looking for a quick introduction? Check out the ["First Workflow" tutorial](tutorial-first-workflow/).
- Interested in what you could do with AI? Find out [how to build an AI chat agent with n8n](../advanced-ai/intro-tutorial/).
- Prefer to work through extensive examples? Maybe the [courses](../courses/) are for you.

---

## Docker Installation

**URL:** llms-txt#docker-installation

**Contents:**
- Prerequisites
- Starting n8n
- Using with PostgreSQL
- Updating

n8n recommends using [Docker](https://www.docker.com/) for most self-hosting needs. It provides a clean, isolated environment, avoids operating system and tooling incompatibilities, and makes database and environment management simpler.

You can also use n8n in Docker with [Docker Compose](../server-setups/docker-compose/). You can find Docker Compose configurations for various architectures in the [n8n-hosting repository](https://github.com/n8n-io/n8n-hosting).

Self-hosting knowledge prerequisites

Self-hosting n8n requires technical knowledge, including:

- Setting up and configuring servers and containers
- Managing application resources and scaling
- Securing servers and applications
- Configuring n8n

n8n recommends self-hosting for expert users. Mistakes can lead to data loss, security issues, and downtime. If you aren't experienced at managing servers, n8n recommends [n8n Cloud](https://n8n.io/cloud/).

You can also follow along with our video guide here:

Before proceeding, install Docker:

- [Docker Desktop](https://docs.docker.com/get-docker/) is available for Mac, Windows, and Linux. Docker Desktop includes the Docker Engine and Docker Compose.
- [Docker Engine](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/linux/) are also available as separate packages for Linux. Use this for Linux machines without a graphical environment or when you don't want the Docker Desktop UI.

Latest and Next versions

n8n releases a new minor version most weeks. The `latest` version is for production use. `next` is the most recent release. You should treat `next` as a beta: it may be unstable. To report issues, use the [forum](https://community.n8n.io/c/questions/12).

Current `latest`: 1.116.2\
Current `next`: 1.117.0

From your terminal, run the following commands, replacing the `<YOUR_TIMEZONE>` placeholders with [your timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List):

This command creates a volume to store persistent data, downloads the required n8n image, and starts the container with the following settings:

- Maps and exposes port `5678` on the host.
- Sets the timezone for the container:
  - the `TZ` environment variable sets the system timezone to control what scripts and commands like `date` return.
  - the [`GENERIC_TIMEZONE` environment variable](../../configuration/environment-variables/timezone-localization/) sets the correct timezone for schedule-oriented nodes like the [Schedule Trigger node](../../../integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger/).
- Enforces secure file permissions for the n8n configuration file.
- Enables [task runners](../../configuration/task-runners/), the recommended way of executing tasks in n8n.
- Mounts the `n8n_data` volume to the `/home/node/.n8n` directory to persist your data across container restarts.

Once running, you can access n8n by opening: <http://localhost:5678>

## Using with PostgreSQL

By default, n8n uses SQLite to save [credentials](../../../glossary/#credential-n8n), past executions, and workflows. n8n also supports PostgreSQL, configurable using environment variables as detailed below.

Persisting the `.n8n` directory still recommended

When using PostgreSQL, n8n doesn't need to use the `.n8n` directory for the SQLite database file. However, the directory still contains other important data like encryption keys, instance logs, and source control feature assets. While you can work around some of these requirements, (for example, by setting the [`N8N_ENCRYPTION_KEY` environment variable](../../configuration/environment-variables/deployment/)), it's best to continue mapping a persistent volume for the directory to avoid potential issues.

To use n8n with PostgreSQL, execute the following commands, replacing the placeholders (depicted within angled brackets, for example `<POSTGRES_USER>`) with your actual values:

You can find a complete `docker-compose` file for PostgreSQL in the [n8n hosting repository](https://github.com/n8n-io/n8n-hosting/tree/main/docker-compose/withPostgres).

To update n8n, in Docker Desktop, navigate to the **Images** tab and select **Pull** from the context menu to download the latest n8n image:

You can also use the command line to pull the latest, or a specific version:

**Examples:**

Example 1 (unknown):
```unknown
docker volume create n8n_data

docker run -it --rm \
 --name n8n \
 -p 5678:5678 \
 -e GENERIC_TIMEZONE="<YOUR_TIMEZONE>" \
 -e TZ="<YOUR_TIMEZONE>" \
 -e N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=true \
 -e N8N_RUNNERS_ENABLED=true \
 -v n8n_data:/home/node/.n8n \
 docker.n8n.io/n8nio/n8n
```

Example 2 (unknown):
```unknown
docker volume create n8n_data

docker run -it --rm \
 --name n8n \
 -p 5678:5678 \
 -e GENERIC_TIMEZONE="<YOUR_TIMEZONE>" \
 -e TZ="<YOUR_TIMEZONE>" \
 -e N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=true \
 -e N8N_RUNNERS_ENABLED=true \
 -e DB_TYPE=postgresdb \
 -e DB_POSTGRESDB_DATABASE=<POSTGRES_DATABASE> \
 -e DB_POSTGRESDB_HOST=<POSTGRES_HOST> \
 -e DB_POSTGRESDB_PORT=<POSTGRES_PORT> \
 -e DB_POSTGRESDB_USER=<POSTGRES_USER> \
 -e DB_POSTGRESDB_SCHEMA=<POSTGRES_SCHEMA> \
 -e DB_POSTGRESDB_PASSWORD=<POSTGRES_PASSWORD> \
 -v n8n_data:/home/node/.n8n \
 docker.n8n.io/n8nio/n8n
```

---

## Cockpit credentials

**URL:** llms-txt#cockpit-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API access token

You can use these credentials to authenticate the following nodes:

- [Cockpit](../../app-nodes/n8n-nodes-base.cockpit/)

- Create a [Cockpit](https://getcockpit.com/) account.
- Set up a [self-hosted instance of Cockpit](https://getcockpit.com/documentation/core/quickstart/installation).

## Supported authentication methods

Refer to [Cockpit's API documentation](https://getcockpit.com/documentation/core/api/introduction) for more information about the service.

## Using API access token

To configure this credential, you'll need:

- Your **Cockpit URL**: The URL you use to access your Cockpit instance
- An **Access Token**: Refer to the [Cockpit Managing tokens documentation](https://getcockpit.com/documentation/core/api/authentication/#managing-tokens) for instructions on creating an API token. Use the **API token** as the n8n **Access Token**.

---
