# Gitlab - Administration

**Pages:** 10

---

## Monitor GitLab

**URL:** https://docs.gitlab.com/administration/monitoring/

**Contents:**
- Monitor GitLab

Explore our features to monitor your GitLab instance:

---

## Reference architectures

**URL:** https://docs.gitlab.com/administration/reference_architectures/

**Contents:**
- Reference architectures
- Available reference architectures
  - GitLab package (Omnibus)
  - Cloud native hybrid
- Before you start
- Deciding which architecture to start with
  - Expected load (RPS or user count)
    - Initial sizing guide
    - If in doubt, start large, monitor, and then scale down
  - Standalone (non-HA)

The GitLab reference architectures are validated, production-ready environment designs for deploying GitLab at scale. Each architecture provides detailed specifications that you can use or adapt based on your requirements.

The following reference architectures are available as recommended starting points for your environment.

The architectures are named in terms of peak load, based on user count or requests per second (RPS). RPS is calculated based on average real data.

Each architecture is designed to be scalable and elastic. They can be adjusted accordingly based on your workload, upwards or downwards. For example, some known heavy scenarios such as using large monorepos or notable additional workloads.

For details about what each reference architecture is tested against, see the Testing Methodology section of each page.

The following is the list of Linux package based reference architectures:

The following is a list of Cloud Native Hybrid reference architectures, where select recommended components can be run in Kubernetes:

First, consider whether a self-managed approach is the right choice for you and your requirements.

Running any application in production is complex, and the same applies for GitLab. While we aim to make this as smooth as possible, there are still the general complexities based on your design. Typically you have to manage all aspects such as hardware, operating systems, networking, storage, security, GitLab itself, and more. This includes both the initial setup of the environment and the longer term maintenance.

You must have a working knowledge of running and maintaining applications in production if you decide to go down this route. If you aren’t in this position, our Professional Services team offers implementation services. Those who want a more managed solution long term, can explore our other offerings such as GitLab SaaS or GitLab Dedicated.

If you are considering using the GitLab Self-Managed approach, we encourage you to read through this page in full, specifically the following sections:

The reference architectures are designed to strike a balance between three important factors: performance, resilience, and cost. They are designed to make it easier to set up GitLab at scale. However, it can still be a challenge to know which one meets your requirements and where to start accordingly.

As a general guide, the more performant and/or resilient you want your environment to be, the more complex it is.

This section explains the things to consider when picking a reference architecture.

The right architecture size depends primarily on your environment’s expected peak load. The most objective measure of this load is through peak Requests per Second (RPS) coming into the environment.

Each architecture is designed to handle specific RPS targets for different types of requests (API, Web, Git). These details are described in the Testing Methodology section on each page.

For comprehensive RPS analysis and data-driven sizing decisions, see reference architecture sizing, which provides:

For quick RPS estimation, some potential options include:

Prometheus queries, such as:

get-rps script from GitLab support.

Other monitoring solutions.

Load balancer statistics.

If you can’t determine your RPS, we provide an alternative sizing method based on equivalent User Count by Load Category. This count is mapped to typical RPS values, considering both manual and automated usage.

To determine which architecture to pick for the expected load, see the following initial sizing guide table:

Before you select an initial architecture, review this section thoroughly. Consider other factors such as High Availability (HA) or use of large monorepos because they may impact the choice beyond just RPS or user count.

If you’re uncertain about the required environment size, consider starting with a larger size, monitoring it, and then scaling down accordingly if the metrics support your situation.

Starting large and then scaling down is a prudent approach when:

For example, if you have 3,000 users but also know that there’s automation at play that would significantly increase the concurrent load, then you could start with a 100 RPS / 5k User class environment, monitor it, and if the metrics support it, scale down all components at once, or one by one.

For environments serving 2,000 or fewer users, it’s generally recommended to follow a standalone approach by deploying a non-HA, single, or multi-node environment. With this approach, you can employ strategies such as automated backups for recovery. These strategies provide a good level of recovery time objective (RTO) or recovery point objective (RPO) while avoiding the complexities that come with HA.

With standalone setups, especially single node environments, various options are available for installation and management. The options include the ability to deploy directly by using select cloud provider marketplaces that reduce the complexity a little further.

High Availability ensures every component in the GitLab setup can handle failures through various mechanisms. However, to achieve this is complex, and the environments required can be sizable.

For environments serving 3,000 or more users, we generally recommend using an HA strategy. At this level, outages have a bigger impact against more users. All the architectures in this range have HA built in by design for this reason.

As mentioned previously, achieving HA comes at a cost. The environment requirements are sizable as each component needs to be multiplied, which comes with additional actual and maintenance costs.

For a lot of our customers with fewer than 3,000 users, we’ve found that a backup strategy is sufficient and even preferable. While this does have a slower recovery time, it also means you have a much smaller architecture and less maintenance costs as a result.

As a general guideline, employ HA only in the following scenarios:

If you still need HA for fewer users, you can achieve it with an adjusted 3K architecture.

Zero-downtime upgrades are available for standard environments with HA (Cloud Native Hybrid is not supported). This allows for an environment to stay up during an upgrade. However, this process is more complex as a result and has some limitations as detailed in the documentation.

When going through this process, it’s worth noting that there may still be brief moments of downtime when the HA mechanisms take effect.

In most cases, the downtime required for doing an upgrade shouldn’t be substantial. Use this approach only if it’s a key requirement for you.

As an additional layer of HA resilience, you can deploy select components in Kubernetes, known as a Cloud Native Hybrid reference architecture. For stability reasons, stateful components such as Gitaly cannot be deployed in Kubernetes.

Cloud Native Hybrid is an alternative and more advanced setup compared to a standard reference architecture. Running services in Kubernetes is complex. Use this setup only if you have strong working knowledge and experience in Kubernetes.

With GitLab Geo, you can achieve distributed environments in different regions with a full Disaster Recovery (DR) setup in place. GitLab Geo requires at least two separate environments:

If the primary site becomes unavailable, you can fail over to one of the secondary sites.

Use this advanced and complex setup only if DR is a key requirement for your environment. You must also make additional decisions on how each site is configured. For example, if each secondary site would be the same architecture as the primary or if each site is configured for HA.

Large monorepos or significant additional workloads can affect the performance of the environment notably. Some adjustments may be required depending on the context.

For comprehensive analysis of these factors, see reference architecture sizing, which provides:

If this situation applies to you, reach out to your GitLab representative or our Support team for further guidance.

For all the previously described strategies, you can run select GitLab components on equivalent cloud provider services such as the PostgreSQL database or Redis.

For more information, see the recommended cloud providers and services.

Read through the guidance documented previously in full first before you refer to the following decision tree.

Before implementing a reference architecture, see the following requirements and guidance.

The architectures are designed to be flexible in terms of machine type selection while ensuring consistent performance. While we provide specific machine type examples in each reference architecture, these are not intended to be prescriptive defaults.

You can use any machine types that meet or exceed the specified requirements for each component, such as:

This guidance is also applicable for any Cloud Provider services such as AWS RDS.

Any “burstable” instance types are not recommended due to inconsistent performance.

For details about what machine types we test against and how, refer to validation and test results.

Most standard disk types are expected to work for GitLab. However, be aware of the following specific call-outs:

Other disk types are expected to work with GitLab. Choose based on your requirements such as durability or cost.

GitLab should run on most infrastructures such as reputable cloud providers (AWS, GCP, Azure) and their services, or self-managed (ESXi) that meet both:

However, this does not guarantee compatibility with every potential permutation.

See Recommended cloud providers and services for more information.

Below are the network requirements for running GitLab in a High Availability fashion.

Network latency should be as low as possible to allow for synchronous replication across the GitLab application, such as database replication. Generally this should be lower than 5 ms.

Deploying across availability zones is supported and generally recommended for additional resilience. You should use an odd number of zones to align with GitLab application requirements, as some components use an odd number of nodes for quorum voting.

Deploying across multiple self-hosted data centers is possible but requires careful consideration. This requires synchronous capable latency between centers, robust redundant network links to prevent split-brain scenarios, all centers located in the same geographic region, and deployment across an odd number of centers for proper quorum voting (like availability zones).

It may not be possible for GitLab Support to assist with infrastructure-related issues stemming from multi-data center deployments. Choosing to deploy across centers is generally at your own risk.

It is not supported to deploy a single GitLab environment across different regions. Data centers should be in the same region.

The architectures were tested with repositories of varying sizes that follow best practices.

However, large monorepos (several gigabytes or more) can significantly impact the performance of Git and in turn the environment itself. Their presence and how they are used can put a significant strain on the entire system from Gitaly to the underlying infrastructure.

The performance implications are largely software in nature. Additional hardware resources lead to diminishing returns.

If this applies to you, we strongly recommend you follow the linked documentation and reach out to your GitLab representative or our Support team for further guidance.

Large monorepos come with notable cost. If you have such a repository, follow these guidance to ensure good performance and to keep costs in check:

These architectures have been designed and tested for standard GitLab setups based on real data.

However, additional workloads can multiply the impact of operations by triggering follow-up actions. You might have to adjust the suggested specifications to compensate if you use:

Generally, you should have robust monitoring in place to measure the impact of any additional workloads to inform any changes needed to be made. Reach out to your GitLab representative or our Support team for further guidance.

The architectures make use of up to two load balancers depending on the class:

The specifics on which load balancer to use, or its exact configuration is beyond the scope of GitLab documentation. The most common options are to set up load balancers on machine nodes or to use a service such as one offered by cloud providers. If deploying a Cloud Native Hybrid environment, the charts can handle the external load balancer setup by using Kubernetes Ingress.

Each architecture class includes a recommended base machine size to deploy directly on machines. However, they may need adjustment based on factors such as the chosen load balancer and expected workload. Of note machines can have varying network bandwidth that should also be taken into consideration.

The following sections provide additional guidance for load balancers.

To ensure equal spread of calls to the nodes and good performance, use a least-connection-based load balancing algorithm or equivalent wherever possible.

We don’t recommend the use of round-robin algorithms as they are known to not spread connections equally in practice.

The total network bandwidth available to a load balancer when deployed on a machine can vary notably across cloud providers. Some cloud providers, like AWS, may operate on a burst system with credits to determine the bandwidth at any time.

The required network bandwidth for your load balancers depends on factors such as data shape and workload. The recommended base sizes for each architecture class have been selected based on real data. However, in some scenarios such as consistent clones of large monorepos, heavy usage of GitLab Container Registry, large CI artifacts, or any workloads involving frequent transfer of large files, you might have to adjust the sizes accordingly.

Swap is not recommended in the reference architectures. It’s a failsafe that impacts performance greatly. The architectures are designed to have enough memory in most cases to avoid the need for swap.

Praefect requires its own database server. To achieve full HA, a third-party PostgreSQL database solution is required.

We hope to offer a built-in solution for these restrictions in the future. In the meantime, a non-HA PostgreSQL server can be set up using the Linux package as the specifications reflect. For more details, see the following issues:

The following lists are non-exhaustive. Other cloud providers not listed here may work with the same specifications, but they have not been validated. For the cloud provider services not listed here, use caution because each implementation can be notably different. Test thoroughly before using them in production.

The following architectures are recommended for the following cloud providers based on testing and real life usage:

Additionally, the following cloud provider services are recommended for use as part of the architectures:

If you choose to use a third-party external service, use an external database service that runs a standard, performant, and supported PostgreSQL version and take note of the following considerations:

The HA Linux package PostgreSQL setup encompasses PostgreSQL, PgBouncer, and Consul. All of these components are no longer required when using a third party external service.

For optimal performance, enable Database Load Balancing with Read Replicas. Match the node counts to those used in standard Linux package deployments. This approach is particularly important for larger environments (more than 200 requests per second or 10,000+ users).

Database Connection Poolers are not required for this setup as the options vary per service. As a result, you might have to adjust the connection count configuration, depending on the environment size. If Pooling is desired, a third party option must be explored as the GitLab Linux Package bundled PgBouncer is only compatible with the package bundled Postgres. Database Load Balancing can also be used to spread the load accordingly.

The number of nodes required for HA may vary depending on the service. The requirements for one deployment may vary from those for Linux package installations.

To use GitLab Geo, the service should support cross-region replication.

The following database cloud provider services are not recommended due to lack of support or known issues:

Use an external Redis service that runs a standard, performant, and supported version. The service must support:

Redis is primarily single threaded. For environments targeting the 200 RPS / 10,000 users class or larger, separate the instances into cache & persistent data to achieve optimum performance.

Serverless variants of Redis services are not supported at this time.

GitLab has been tested against various object storage providers that are expected to work.

Use a reputable solution that has full S3 compatibility.

The further away you move from the reference architectures, the harder it is to get support. With each deviation, you introduce a layer of complexity that complicates troubleshooting potential issues.

These architectures use the official Linux packages or Helm Charts to install and configure the various components. The components are installed on separate machines (virtualized or Bare Metal). Machine hardware requirements listed in the Configuration column. Equivalent VM standard sizes are listed in the GCP/AWS/Azure columns of each available architecture.

You can run GitLab components on Docker, including Docker Compose. Docker is well supported and provides consistent specifications across environments. However, it is still an additional layer and might add some support complexities. For example, not being able to run strace in containers.

While we try to have a good range of support for GitLab environment designs, certain approaches don’t work effectively. The following sections detail these unsupported approaches.

Running stateful components in Kubernetes, such as Postgres and Redis, is not supported.

You can use other supported cloud provider services, unless specifically called out as unsupported.

Individual Gitaly nodes can be deployed on Kubernetes in limited availability. This provides a non-HA solution where each repository is stored on a single node. For context on Gitaly deployment options and limitations, see Gitaly on Kubernetes.

As a general guidance, only stateless components of GitLab can be run in autoscaling groups, namely GitLab Rails and Sidekiq. Other components that have state, such as Gitaly, are not supported in this fashion. For more information, see issue 2997.

This applies to stateful components such as Postgres and Redis. You can use other supported cloud provider services, unless specifically called out as unsupported.

Cloud Native Hybrid setups are generally preferred over autoscaling groups. Kubernetes better handles components that can only run on one node, such as database migrations and Mailroom.

GitLab does not support deploying a single environment across multiple regions. These setups can result in significant issues, such as excessive network latency or split-brain scenarios if connectivity between regions fails.

Several GitLab components perform synchronous replication or require an odd number of nodes to function correctly, such as Consul, Redis Sentinel, and Praefect. Distributing these components across multiple regions with high latency can severely impact their functionality and the overall system performance.

This limitation applies to all potential GitLab environment setups, including Cloud Native Hybrid alternatives.

For deploying GitLab over multiple data centers or regions, we offer GitLab Geo as a comprehensive solution.

GitLab does regular smoke and performance tests for these architectures to ensure they remain compliant.

Testing is conducted using specific coded workloads derived from sample customer data, utilizing both the GitLab Environment Toolkit (GET) for environment deployment with Terraform and Ansible, and the GitLab Performance Tool (GPT) for performance testing with k6.

Testing is performed primarily on GCP and AWS using their standard compute offerings (n1 series for GCP, m5 series for AWS) as baseline configurations. These machine types were selected as a lowest common denominator target to ensure broad compatibility. Using different or newer machine types that meet the CPU and memory requirements is fully supported - see Supported Machine Types for more information. The architectures are expected to perform similarly on any hardware meeting the specifications, whether on other cloud providers or on-premises.

Each reference architecture is tested against specific throughput targets based on real customer data. For every 1,000 users, we test:

The listed RPS targets were selected based on real customer data of total environmental loads corresponding to the user count, including CI and other workloads.

Network latency between components in test environments was observed at <5 ms but note this is not intended as a hard requirement.

Testing is designed to be effective and provide good coverage for all reference architecture targets. Testing frequency varies by architecture type and size:

Our testing also includes prototype variations of these architectures being explored for potential future inclusion. Test results are publicly available on the Reference Architecture wiki.

Maintaining a reference architecture environment is generally the same as any other GitLab environment.

In this section you can find links to documentation for relevant areas and specific architecture notes.

The reference architectures are designed as a starting point, and are elastic and scalable throughout. You might want to adjust the environment for your specific needs after deployment for reasons such as additional performance capacity or reduced costs. This behavior is expected. Scaling can be done iteratively or wholesale to the next architecture size, if metrics suggest that a component is exhausted.

If a component is continuously exhausting its given resources, reach out to our Support team before performing any significant scaling.

For most components, vertical and horizontal scaling can be applied as usual. However, before doing so, be aware of the following caveats:

Conversely, if you have robust metrics in place that show the environment is over-provisioned, you can scale downwards. You should take an iterative approach when scaling downwards, to ensure there are no issues.

In some cases, scaling a component significantly may result in knock on effects for downstream components, impacting performance. The architectures are designed with balance in mind to ensure components that depend on each other are congruent in terms of specifications. Notably scaling a component may result in additional throughput being passed to the other components it depends on. As a result, you could have to scale these other dependent components as well. To determine this, monitor the saturation metrics of all dependent services before scaling. If multiple interdependent components show saturation, they should be scaled together in a coordinated manner rather than sequentially, preventing bottlenecks from simply shifting between components.

The architectures have been designed to have elasticity to accommodate an upstream component being scaled. However, reach out to our Support team before you make any significant changes to your environment to be safe.

The following components can impact others when they have been significantly scaled:

In most cases, vertical scaling is only required to increase an environment’s resources. However, if you are moving to an HA environment, additional steps are required for the following components to switch over to their HA forms.

For more information, see the following documentation:

Upgrading a reference architecture environment is the same as any other GitLab environment. For more information, see upgrade GitLab. Zero-downtime upgrades are also available.

You should upgrade a reference architecture in the same order as you created it.

You can monitor your infrastructure and GitLab using various options. See the selected monitoring solution’s documentation for more information.

GitLab application is bundled with Prometheus and various Prometheus compatible exporters that could be hooked into your solution.

The following is a history of notable updates for reference architectures (2021-01-01 onward, ascending order). We aim to update it at least once per quarter.

You can find a full history of changes on the GitLab project.

**Examples:**

Example 1 (unknown):
```unknown
sum(irate(gitlab_transaction_duration_seconds_count{controller!~'HealthController|MetricsController'}[1m])) by (controller, action)
```

Example 2 (unknown):
```unknown
%%{init: { "fontFamily": "GitLab Sans" }}%%
graph TD
    accTitle: Decision tree for reference architecture selection
    accDescr: Key considerations for selecting architecture including expected load, HA requirements, and additional workload factors.

   L0A(<b>What Reference Architecture should I use?</b>)
   L1A(<b>What is your <a href=#expected-load-rps--user-count>expected load</a>?</b>)

   L2A("60 RPS / 3,000 users or more?")
   L2B("40 RPS / 2,000 users or less?")

   L3A("<a href=#do-you-need-high-availability-ha>Do you need HA?</a><br>(or zero-downtime upgrades)")
   L3B[Do you have experience with<br/>and want additional resilience<br/>with select components in Kubernetes?]

   L4A><b>Recommendation</b><br><br>60 RPS / 3,000 user architecture with HA<br>and supported reductions]
   L4B><b>Recommendation</b><br><br>Architecture closest to <a href=#expected-load-rps--user-count>expected load</a> with HA]
   L4C><b>Recommendation</b><br><br>Cloud Native Hybrid architecture<br>closest to <a href=#expected-load-rps--user-count>expected load</a>]
   L4D>"<b>Recommendation</b><br><br>Standalone 20 RPS / 1,000 user or 40 RPS / 2,000 user<br/>architecture with Backups"]

   L0A --> L1A
   L1A --> L2A
   L1A --> L2B
   L2A -->|Yes| L3B
   L3B -->|Yes| L4C
   L3B -->|No| L4B

   L2B --> L3A
   L3A -->|Yes| L4A
   L3A -->|No| L4D
   L5A("<a href=#gitlab-geo-cross-regional-distribution--disaster-recovery>Do you need cross regional distribution</br> or disaster recovery?"</a>) --> |Yes| L6A><b>Additional Recommendation</b><br><br> GitLab Geo]
   L4A ~~~ L5A
   L4B ~~~ L5A
   L4C ~~~ L5A
   L4D ~~~ L5A

   L5B("Do you have <a href=#large-monorepos>Large Monorepos</a> or expect</br> to have substantial <a href=#additional-workloads>additional workloads</a>?") --> |Yes| L6B><b>Additional Recommendations</b><br><br><a href=#if-in-doubt---start-large-monitor-and-scale-down>Start large, monitor and scale down</a><br><br> Contact GitLab representative or Support]
   L4A ~~~ L5B
   L4B ~~~ L5B
   L4C ~~~ L5B
   L4D ~~~ L5B

classDef default fill:#FCA326
linkStyle default fill:none,stroke:#7759C2
```

---

## All feature flags in GitLab

**URL:** https://docs.gitlab.com/administration/feature_flags/list/

**Contents:**
- All feature flags in GitLab
- Available feature flags
  - GitLab Community Edition and Enterprise Edition
  - GitLab Enterprise Edition only
- Number of flags per development group
- Number of flags per milestone

GitLab provides feature flags to turn specific features on or off. This page contains a list of all feature flags provided by GitLab. In GitLab Self-Managed, GitLab administrators can change the state of these feature flags.

For help developing custom feature flags, see Create a feature flag.

The feature flags available to you depend on:

Number of feature flags available: 407

Number of feature flags available: 240

Count of feature flags introduced or maintained by each engineering group:

Count of feature flags introduced in each milestone:

---

## Maintain GitLab

**URL:** https://docs.gitlab.com/administration/operations/

**Contents:**
- Maintain GitLab

Keep your GitLab instance up and running.

---

## Usage trends

**URL:** https://docs.gitlab.com/administration/analytics/usage_trends/

**Contents:**
- Usage trends
- View usage trends

Usage trends give you an overview of how much data your instance contains, and how quickly this volume is changing over time.

The usage trends page displays:

Usage trends data refreshes daily.

To view usage trends:

---

## Configure GitLab

**URL:** https://docs.gitlab.com/administration/configure/

**Contents:**
- Configure GitLab

Customize and configure GitLab Self-Managed.

---

## Administer GitLab Dedicated

**URL:** https://docs.gitlab.com/administration/dedicated/

**Contents:**
- Administer GitLab Dedicated
- Architecture overview
- Configure infrastructure
- Secure your instance
- Set up networking
- Use platform tools
- Manage daily operations
- Get started

Use GitLab Dedicated to run GitLab on a fully-managed, single-tenant instance hosted on AWS. You maintain control over your instance configuration through Switchboard, the GitLab Dedicated management portal, while GitLab manages the underlying infrastructure.

For more information about this offering, see the subscription page.

GitLab Dedicated runs on a secure infrastructure that provides:

To learn more, see GitLab Dedicated architecture.

To get started with GitLab Dedicated:

---

## Update your Admin area settings

**URL:** https://docs.gitlab.com/administration/settings/

**Contents:**
- Update your Admin area settings
- Access the Admin area

As an instance administrator, you can manage the behavior of your deployment.

Use Settings to control settings across the instance.

To access the Admin area:

---

## DevOps adoption by instance

**URL:** https://docs.gitlab.com/administration/analytics/devops_adoption/

**Contents:**
- DevOps adoption by instance
- DevOps score
- View DevOps adoption
- Add a group to DevOps adoption
- Remove a group from DevOps adoption

DevOps adoption gives you an overview of your entire instance’s adoption of development, security, and operations features, along with a DevOps score.

For more information about this feature, see also DevOps adoption by group.

To view the DevOps score, you must activate your GitLab instance’s Service Ping. DevOps Score is a comparative tool, so your score data must be centrally processed by GitLab Inc. first. If Service Ping is not activated, the DevOps score value is 0.

You can use the DevOps score to compare your DevOps status to other organizations.

The DevOps Score displays usage of major GitLab features on your instance over the last 30 days, averaged over the number of billable users in that time period.

Service Ping data is aggregated on GitLab servers for analysis. Your usage information is not sent to any other GitLab instances. If you have just started using GitLab, it might take a few weeks for data to be collected before this feature becomes available.

To view DevOps adoption for your instance:

To add a group to DevOps adoption:

To remove a group from DevOps adoption:

---

## Administer GitLab

**URL:** https://docs.gitlab.com/administration/

**Contents:**
- Administer GitLab

Learn how to administer GitLab Self-Managed.

Only GitLab team members have access to administration tools and settings on GitLab.com.

---
