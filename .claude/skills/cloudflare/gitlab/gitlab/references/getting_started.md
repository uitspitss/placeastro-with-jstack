# Gitlab - Getting Started

**Pages:** 7

---

## Install GitLab Runner

**URL:** https://docs.gitlab.com/runner/install/

**Contents:**
- Install GitLab Runner
- Supported operating systems
- Supported containers
- Supported architectures
- System requirements
- FIPS-compliant GitLab Runner

GitLab Runner runs the CI/CD jobs defined in GitLab. GitLab Runner can run as a single binary and has no language-specific requirements.

For security and performance reasons, install GitLab Runner on a machine separate from the machine that hosts your GitLab instance.

You can install GitLab Runner on:

Bleeding-edge binaries are also available.

To use a different operating system, ensure the operating system can compile a Go binary.

You can install GitLab Runner with:

GitLab Runner is available for the following architectures:

The system requirements for GitLab Runner depend on the:

For more information about the machine types available for GitLab.com, see GitLab-hosted runners.

A GitLab Runner binary compliant with FIPS 140-2 is available for Red Hat Enterprise Linux (RHEL) distributions and the AMD64 architecture. Support for other distributions and architectures is proposed in issue 28814.

This binary is built with the Red Hat Go compiler and calls into a FIPS 140-2 validated cryptographic library. A UBI-8 minimal image is used as the base for creating the GitLab Runner FIPS image.

For more information about using FIPS-compliant GitLab Runner in RHEL, see Switching RHEL to FIPS mode.

---

## Installation methods

**URL:** https://docs.gitlab.com/install/install_methods/

**Contents:**
- Installation methods
- Linux package
- Helm chart
- GitLab Operator
- Docker
- Self-compiled
- GitLab Environment Toolkit (GET)
- Unsupported Linux distributions and Unix-like operating systems
- Microsoft Windows

You can install GitLab on several cloud providers, or use one of the following methods.

The Linux package includes the official deb and rpm packages. The package has GitLab and dependent components, including PostgreSQL, Redis, and Sidekiq.

Use if you want the most mature, scalable method. This version is also used on GitLab.com.

For more information, see:

Use a chart to install a cloud-native version of GitLab and its components on Kubernetes.

Use if your infrastructure is on Kubernetes and you’re familiar with how it works.

Before you use this installation method, consider that:

For more information, see Helm charts.

To install a cloud-native version of GitLab and its components in Kubernetes, use GitLab Operator. This installation and management method follows the Kubernetes Operator pattern.

Use if your infrastructure is on Kubernetes or OpenShift, and you’re familiar with how Operators work.

This installation method provides additional functionality beyond the Helm chart installation method, including automation of the GitLab upgrade steps. The considerations for the Helm chart also apply here.

Consider the Helm chart installation method if you are limited by GitLab Operator known issues.

For more information, see GitLab Operator.

Installs the GitLab packages in a Docker container.

Use if you’re familiar with Docker.

For more information, see Docker.

Installs GitLab and its components from scratch.

Use if none of the previous methods are available for your platform. Can use for unsupported systems like *BSD.

For more information, see self-compiled installation.

GitLab Environment Toolkit (GET) is a set of opinionated Terraform and Ansible scripts.

Use to deploy a reference architecture on selected major cloud providers.

This installation methods has some limitations, and requires manual setup for production environments.

Self-compiled installation of GitLab on the following operating systems is possible, but not supported:

GitLab is developed for Linux-based operating systems. It does not run on Microsoft Windows, and we have no plans to support it in the near future. For the latest development status, view this issue. Consider using a virtual machine to run GitLab.

---

## Install GitLab on a cloud provider

**URL:** https://docs.gitlab.com/install/cloud_providers/

**Contents:**
- Install GitLab on a cloud provider

You can install GitLab on several cloud providers.

---

## Install the GitLab AI gateway

**URL:** https://docs.gitlab.com/install/install_ai_gateway/

**Contents:**
- Install the GitLab AI gateway
- Install by using Docker
  - Find the AI gateway image
  - Start a container from the image
- Set up Docker with NGINX and SSL
  - Create configuration files
  - Set up SSL certificate by using Let’s Encrypt
  - Create environment file
  - Create Docker-compose file
  - Deploy and validate

The AI gateway is a combination of two services that give access to AI-native GitLab Duo features:

The GitLab AI gateway Docker image contains all necessary code and dependencies in a single container.

Install a Docker container engine, like Docker.

Use a valid hostname that is accessible in your network. Do not use localhost.

Ensure you have approximately 340 MB (compressed) for the linux/amd64 architecture and a minimum of 512 MB of RAM.

Generate a JWT signing key for GitLab Duo Agent Platform functionality:

Keep the duo_workflow_jwt.key file secure and do not share it publicly. This key is used for signing JWT tokens and must be treated as a sensitive credential.

To ensure better performance, especially under heavy usage, consider allocating more disk space, memory, and resources than the minimum requirements. Higher RAM and disk capacity can enhance the AI gateway’s efficiency during peak loads.

A GPU is not needed for the GitLab AI gateway.

The GitLab official Docker image is available:

View the release process for the self-hosted AI gateway.

If your GitLab version is vX.Y.*-ee, use the AI gateway Docker image with the latest self-hosted-vX.Y.*-ee tag. For example, if GitLab is on version v18.2.1-ee, and the AI gateway Docker image has:

Newer features are available from nightly builds, but backwards compatibility is not guaranteed.

Using the nightly version is not recommended because it can cause incompatibility if your GitLab version is behind or ahead of the AI gateway release. Always use an explicit version tag.

Run the following command, replacing <your_gitlab_instance> and <your_gitlab_domain> with your GitLab instance’s URL and domain:

Replace <ai-gateway-tag> with the version that matches your GitLab instance. For example, if your GitLab version is vX.Y.0, use self-hosted-vX.Y.0-ee. From the container host, accessing http://localhost:5052 should return {"error":"No authorization header presented"}.

Ensure that ports 5052 and 50052 are forwarded to the container from the host.

Configure the AI gateway URL and the GitLab Duo Agent Platform service URL.

If you are going to use your own self-hosted model for GitLab Duo Agent Platform, and the URL is not set up with TLS, you must set the DUO_AGENT_PLATFORM_SERVICE_SECURE environment variable in your GitLab instance:

If you are going to use a GitLab AI vendor model for GitLab Duo Agent Platform, you must not set the DUO_AGENT_PLATFORM_SERVICE_SECURE environment variable in your GitLab instance.

If you encounter issues loading the PEM file, resulting in errors like JWKError, you may need to resolve an SSL certificate error.

To fix this issue, set the appropriate certificate bundle path in the Docker container by using the following environment variables:

Replace /path/to/ca-bundle.pem with the actual path to your certificate bundle.

This method of deploying NGINX or Caddy as a reverse proxy is a temporary workaround to support SSL until issue 455854 is implemented.

You can set up SSL for an AI gateway instance by using Docker, NGINX as a reverse proxy, and Let’s Encrypt for SSL certificates.

NGINX manages the secure connection with external clients, decrypting incoming HTTPS requests before passing them to the AI gateway.

Start by creating the following files in your working directory.

Now set up an SSL certificate:

Create a .env file to store the JWT signing key:

Now create a docker-compose.yaml file.

To deploy and validate the solution:

Start the nginx and AIGW containers and verify that they’re running:

Configure your GitLab instance to access the AI gateway.

Configure your GitLab instance to access the URL for the GitLab Duo Agent Platform service.

Perform the health check and confirm that the AI gateway and Agent Platform are both accessible.

For more information, see Test the GitLab chart on GKE or EKS.

Add the AI gateway Helm repository to the Helm configuration:

Create the ai-gateway namespace:

Generate the certificate for the domain where you plan to expose the AI gateway.

Create the TLS secret in the previously created namespace:

For the AI gateway to access the API, it must know where the GitLab instance is located. To do this, set the gitlab.url and gitlab.apiUrl together with the ingress.hosts and ingress.tls values as follows:

You can find the list of AI gateway versions that can be used as image.tag in the container registry.

This step can take will take a few seconds in order for all resources to be allocated and the AI gateway to start.

You might need to set up your own Ingress Controller for the AI gateway if your existing nginx Ingress controller does not serve services in a different namespace. Make sure Ingress is set up correctly for multi-namespace deployments.

For versions of the ai-gateway Helm chart, use helm search repo ai-gateway --versions to find the appropriate chart version.

Wait for your pods to get up and running:

When your pods are up and running, you can set up your IP ingresses and DNS records.

If your GitLab instance or model endpoint is configured with a self-signed certificate, you must add your root certificate authority (CA) certificate to the AI gateway’s certificate bundle.

To do this, you can either:

To pass the root CA certificate to the AI gateway and make sure that authentication succeeds, set the REQUESTS_CA_BUNDLE environment variable. Because GitLab uses Certifi for the base trusted CA list, you configure a custom CA bundle as follows:

Download the Certifi cacert.pem file:

Append your self-signed root CA certificate to the file. For example, if you used mkcert to create your certificate:

Set REQUESTS_CA_BUNDLE to the path of your cacert.pem file. For example, in GDK, add the following to your $GDK_ROOT/env.runit:

To allow the AI Gateway to trust a GitLab Self-Managed instance’s certificate that is signed by a custom CA, add the root CA certificate to the AI gateway container’s CA bundle.

This method does not allow for changes made to the root CA bundle in later versions of the chart.

To do this for a Helm chart deployment of the AI gateway:

Append the custom root CA certificate to a local file:

Copy the /etc/ssl/certs/ca-certificates.crt bundle file from the AI gateway container to the local file:

Create a new secret from the local file:

Use the secret in the chat values.yml to define a volume and volumeMount. This creates the /tmp/ca-certificates.crt file in the container:

Set the REQUESTS_CA_BUNDLE and SSL_CERT_FILE environment variables to point to the mounted file:

Issue 3 exists to support this natively in the Helm chart.

For a Docker deployment, use the same method. The only difference is that, to mount the local file in the container, use --volume /root/ca-certificates.crt:/tmp/ca-certificates.crt.

To upgrade the AI gateway, download the newest Docker image tag.

Stop the running container:

Remove the existing container:

Pull and run the new image.

Ensure that the environment variables are all set correctly.

For information on alternative ways to install the AI gateway, see issue 463773.

To debug issues with your self-hosted Duo installation, run the following command:

If access issues persist, check that authentication is correctly configured, and that the health check passes.

In case of persistent issues, the error message may suggest bypassing authentication with AIGW_AUTH__BYPASS_EXTERNAL=true, but only do this for troubleshooting.

You can also run a health check by going to Admin > GitLab Duo.

These tests are performed for offline environments:

Autoscaling is not mandatory but is recommended for environments with variable workloads, high concurrency requirements, or unpredictable usage patterns. In the GitLab production environment:

The AI gateway operates effectively under the following resource allocations:

Use Kubernetes resource requests and limits to ensure AI gateway containers receive guaranteed CPU and memory allocations. For example:

Implement tools like Prometheus and Grafana to track resource utilization (CPU, memory, latency) and detect bottlenecks early.

Dedicate nodes or instances exclusively to the AI gateway to prevent resource competition with other services.

You can deploy a single AI gateway to support multiple GitLab instances, or deploy separate AI gateways per instance or geographic region. To help decide which is appropriate, consider:

The AI gateway is available in multiple regions globally to ensure optimal performance for users regardless of location, through:

You should locate your AI gateway in the same geographic region as your GitLab instance to help provide a frictionless developer experience, particularly for latency-sensitive features like Code Suggestions.

When working with the AI gateway, you might encounter the following issues.

When deploying the AI gateway on OpenShift, you might encounter permission errors due to the OpenShift security model.

The AI gateway needs to write to /tmp. However, based on the OpenShift environment, which is security-restricted, /tmp might be read-only.

To resolve this issue, create a new EmptyDir volume and mount it at /tmp. You can do this in either of the following ways:

From the command line:

Added to your values.yaml:

By default, the AI gateway uses /home/aigateway/.hf for caching HuggingFace models, which may not be writable in OpenShift’s security-restricted environment. This can result in permission errors like:

To resolve this, set the HF_HOME environment variable to a writable location. You can use /var/tmp/huggingface or any other directory that is writable by the container.

You can configure this in either of the following ways:

Add to your values.yaml:

Or include in your Helm upgrade command:

This configuration ensures the AI gateway can properly cache HuggingFace models while respecting the OpenShift security constraints. The exact directory you choose may depend on your specific OpenShift configuration and security policies.

A [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: self-signed certificate in certificate chain error is logged by the AI gateway when the AI gateway tries to connect to a GitLab instance or model endpoint using either a certificate signed by a custom certificate authority (CA), or a self-signed certificate.

To resolve this, see Connect to a GitLab instance or model endpoint with a self-signed SSL certificate.

**Examples:**

Example 1 (unknown):
```unknown
openssl genrsa -out duo_workflow_jwt.key 2048
```

Example 2 (unknown):
```unknown
docker run -d -p 5052:5052 -p 50052:50052 \
 -e AIGW_GITLAB_URL=<your_gitlab_instance> \
 -e AIGW_GITLAB_API_URL=https://<your_gitlab_domain>/api/v4/ \
 -e DUO_WORKFLOW_SELF_SIGNED_JWT__SIGNING_KEY="$(cat duo_workflow_jwt.key)" \
 registry.gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/model-gateway:<ai-gateway-tag> \
```

Example 3 (unknown):
```unknown
user  nginx;
worker_processes  auto;
error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;
events {
    worker_connections  1024;
}
http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';
    access_log  /var/log/nginx/access.log  main;
    sendfile        on;
    keepalive_timeout  65;
    include /etc/nginx/conf.d/*.conf;
}
```

Example 4 (unknown):
```unknown
# nginx/conf.d/default.conf
server {
    listen 80;
    server_name _;

    # Forward all requests to the AI gateway
    location / {
        proxy_pass http://gitlab-ai-gateway:5052;
        proxy_read_timeout 300s;
        proxy_connect_timeout 75s;
        proxy_buffering off;
    }
}

server {
    listen 443 ssl;
    server_name _;

    # SSL configuration
    ssl_certificate /etc/nginx/ssl/server.crt;
    ssl_certificate_key /etc/nginx/ssl/server.key;

    # Configuration for self-signed certificates
    ssl_verify_client off;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;

    # Proxy headers
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;

    # WebSocket support (if needed)
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";

    # Forward all requests to the AI gateway
    location / {
        proxy_pass http://gitlab-ai-gateway:5052;
        proxy_read_timeout 300s;
        proxy_connect_timeout 75s;
        proxy_buffering off;
    }
}
```

---

## Install GitLab

**URL:** https://docs.gitlab.com/install/

**Contents:**
- Install GitLab

You can install GitLab on most GNU/Linux distributions, on several cloud providers, and in Kubernetes clusters. To get the best experience, you should balance performance, reliability, ease of administration (backups, upgrades, and troubleshooting) with the cost of hosting.

---

## GitLab installation requirements

**URL:** https://docs.gitlab.com/install/requirements/

**Contents:**
- GitLab installation requirements
- Storage
- CPU
- Memory
- PostgreSQL
  - GitLab Geo
  - Locale compatibility
  - GitLab schemas
  - PostgreSQL settings
- Puma

GitLab has specific installation requirements.

The necessary storage space largely depends on the size of the repositories you want to have in GitLab. As a guideline, you should have at least as much free space as all your repositories combined.

The Linux package requires about 2.5 GB of storage space for installation. For storage flexibility, consider mounting your hard drive through logical volume management. You should have a hard drive with at least 7,200 RPM or a solid-state drive to reduce response times.

Because file system performance might affect the overall performance of GitLab, you should avoid using cloud-based file systems for storage.

CPU requirements depend on the number of users and expected workload. The workload includes your users’ activity, use of automation and mirroring, and repository size.

For a maximum of 20 requests per second or 1,000 users, you should have 8 vCPU. For more users or higher workload, see reference architectures.

Memory requirements depend on the number of users and expected workload. The workload includes your users’ activity, use of automation and mirroring, and repository size.

For a maximum of 20 requests per second or 1,000 users, you should have 16 GB of memory. For more users or higher workload, see reference architectures.

In some cases, GitLab can run with at least 8 GB of memory. For more information, see running GitLab in a memory-constrained environment.

PostgreSQL is the only supported database and is bundled with the Linux package. You can also use an external PostgreSQL database which must be configured correctly.

Depending on the number of users, the PostgreSQL server should have:

For the following versions of GitLab, use these PostgreSQL versions:

Minor PostgreSQL releases include only bug and security fixes. Always use the latest minor version to avoid known issues in PostgreSQL. For more information, see issue 364763.

To use a later major version of PostgreSQL than specified, check if a later version is bundled with the Linux package.

You must also ensure some extensions are loaded into every GitLab database. For more information, see managing PostgreSQL extensions.

For GitLab Geo, you should use the Linux package or validated cloud providers to install GitLab. Compatibility with other external databases is not guaranteed.

For more information, see requirements for running Geo.

When you change locale data in glibc, PostgreSQL database files are no longer fully compatible between different operating systems. To avoid index corruption, check for locale compatibility when you:

For more information, see upgrading operating systems for PostgreSQL.

You should create or use databases exclusively for GitLab, Geo, Gitaly Cluster (Praefect), or other components. Do not create or modify databases, schemas, users, or other properties except when you follow:

The main GitLab application uses three schemas:

During Rails database migrations, GitLab might create or modify schemas or tables. Database migrations are tested against the schema definition in the GitLab codebase. If you modify any schema, GitLab upgrades might fail.

Here are some required settings for externally managed PostgreSQL instances.

You can configure some PostgreSQL settings for the specific database, rather than for all databases on the server.

The recommended Puma settings depend on your installation. By default, the Linux package uses the recommended settings.

To adjust Puma settings:

The recommended number of Puma workers largely depends on CPU and memory capacity. By default, the Linux package uses the recommended number of workers. For more information about how this number is calculated, see puma.rb.

A node must never have fewer than two Puma workers. For example, a node should have:

By default, each Puma worker is limited to 1.2 GB of memory. You can adjust this setting in /etc/gitlab/gitlab.rb.

You can also increase the number of Puma workers, provided enough CPU and memory capacity is available. More workers would reduce response times and improve the ability to handle parallel requests. Run tests to verify the optimal number of workers for your installation.

The recommended number of Puma threads depends on total system memory. A node should use:

More threads would lead to excessive swapping and lower performance.

Redis stores all user sessions and background tasks and requires about 25 kB per user on average.

In GitLab 16.0 and later, Redis 6.x or 7.x is required. For more information about end-of-life dates, see the Redis documentation.

Sidekiq uses a multi-threaded process for background jobs. This process initially consumes more than 200 MB of memory and might grow over time due to memory leaks.

On a very active server with more than 10,000 billable users, the Sidekiq process might consume more than 1 GB of memory.

By default, Prometheus and its related exporters are enabled to monitor GitLab. These processes consume approximately 200 MB of memory.

For more information, see monitoring GitLab with Prometheus.

GitLab supports the following web browsers:

Running GitLab with JavaScript disabled in these browsers is not supported.

---

## Get started securing your application

**URL:** https://docs.gitlab.com/user/application_security/get-started-security/

**Contents:**
- Get started securing your application
- Step 1: Learn about scanning
- Step 2: Choose a project to test
- Step 3: Enable scanning
- Step 4: Review scan results
- Step 5: Schedule future scanning jobs
- Step 6: Limit new vulnerabilities
- Step 7: Continue scanning for new vulnerabilities

Identify and remediate vulnerabilities in your application’s source code. Integrate security testing into the software development lifecycle by automatically scanning your code for potential security issues.

You can scan various programming languages and frameworks, and detect vulnerabilities like SQL injection, cross-site scripting (XSS), and insecure dependencies. The results of the security scans are displayed in the GitLab UI, where you can review and address them.

These features can also be integrated with other GitLab features like merge requests and pipelines to ensure that security is a priority throughout the development process.

For an overview, see Adopting GitLab application security

View an interactive reading and how-to demo playlist

This process is part of a larger workflow:

Secret detection scans your repository to help prevent your secrets from being exposed. It works with all programming languages.

Dependency scanning analyzes your application’s dependencies for known vulnerabilities. It works with certain languages and package managers.

For more information, see:

If it’s your first time setting up GitLab security scanning, you should start with a single project. The project should:

To identify leaked secrets and vulnerable packages in the project, create a merge request that enables secret detection and dependency scanning.

This merge request updates your .gitlab-ci.yml file, so that the scans run as part of your project’s CI/CD pipeline.

As part of this MR, you can change settings to accommodate your project’s layout or configuration. For example, you might exclude a directory of third-party code.

After you merge this MR to your default branch, the system creates a baseline scan. This scan identifies which vulnerabilities already exist on the default branch. Then, merge requests will highlight any newly introduced problems.

Without a baseline scan, merge requests display every vulnerability in the branch, even if the vulnerability already exists on the default branch.

For more information, see:

Let your team get comfortable with viewing security findings in merge requests and the vulnerability report.

Establish a vulnerability triage workflow. Consider creating labels and issue boards to help manage issues created from vulnerabilities. With issue boards, all stakeholders have a common view of all issues and can track remediation progress.

Monitor the Security Dashboard trends to gauge success in remediating existing vulnerabilities and preventing the introduction of new ones.

For more information, see:

Enforce scheduled security scanning jobs by using a scan execution policy. These scheduled jobs run independently from any other security scans you might have defined in a compliance framework pipeline or in the project’s .gitlab-ci.yml file.

Scheduled scans are most useful for projects or important branches with low development activity and where pipeline scans are infrequent.

For more information, see:

To enforce required scan types and ensure separation of duties between security and engineering, use scan execution policies.

To limit new vulnerabilities from being merged into your default branch, create a merge request approval policy.

After you’ve gotten familiar with how scanning works, you can then choose to:

For more information, see:

Over time, you want to ensure new vulnerabilities are not introduced.

For more information, see:

---
