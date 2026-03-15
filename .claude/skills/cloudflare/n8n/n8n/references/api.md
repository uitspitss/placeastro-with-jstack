# N8N - Api

**Pages:** 12

---

## Using an API playground

**URL:** llms-txt#using-an-api-playground

**Contents:**
- Documentation playground
- Built-in playground

This documentation site provides a playground to test out calls. Self-hosted users also have access to a built-in playground hosted as part of their instance.

## Documentation playground

You can test API calls from this site's [API reference](../api-reference/). You need to set your server's base URL and instance name, and add an API key.

n8n uses [Scalar's](https://github.com/scalar/scalar) open source API platform to power this functionality.

Exposed API key and data

Use a test API key with limited scopes and test data when using a playground. All calls from the playground are routed through Scalar's proxy servers.

You have access to your live data. This is useful for trying out requests. Be aware you can change or delete real data.

## Built-in playground

The API playground isn't available on Cloud. It's available for all self-hosted pricing tiers.

The n8n API comes with a built-in Swagger UI playground in self-hosted versions. This provides interactive documentation, where you can try out requests. The path to access the playground depends on your hosting.

n8n constructs the path from values set in your environment variables:

The API version number is `1`. There may be multiple versions available in the future.

If you select **Authorize** and enter your API key in the API playground, you have access to your live data. This is useful for trying out requests. Be aware you can change or delete real data.

The API includes built-in documentation about credential formats. This is available using the `credentials` endpoint:

How to find `credentialTypeName`

To find the type, download your workflow as JSON and examine it. For example, for a Google Drive node the `{credentialTypeName}` is `googleDriveOAuth2Api`:

**Examples:**

Example 1 (unknown):
```unknown
N8N_HOST:N8N_PORT/N8N_PATH/api/v<api-version-number>/docs
```

Example 2 (unknown):
```unknown
N8N_HOST:N8N_PORT/N8N_PATH/api/v<api-version-number>/credentials/schema/{credentialTypeName}
```

Example 3 (unknown):
```unknown
{
    ...,
    "credentials": {
        "googleDriveOAuth2Api": {
        "id": "9",
        "name": "Google Drive"
        }
    }
}
```

---

## Configure the Base URL for n8n's front end access

**URL:** llms-txt#configure-the-base-url-for-n8n's-front-end-access

Requires manual UI build

This use case involves configuring the `VUE_APP_URL_BASE_API` environmental variable which requires a manual build of the `n8n-editor-ui` package. You can't use it with the default n8n Docker image where the default setting for this variable is `/`, meaning that it uses the root-domain.

You can configure the Base URL that the front end uses to connect to the back end's REST API. This is relevant when you want to host n8n's front end and back end separately.

Refer to [Environment variables reference](../../environment-variables/deployment/) for more information on this variable.

**Examples:**

Example 1 (unknown):
```unknown
export VUE_APP_URL_BASE_API=https://n8n.example.com/
```

---

## n8n public REST API

**URL:** llms-txt#n8n-public-rest-api

**Contents:**
- Learn about REST APIs

The n8n API isn't available during the free trial. Please upgrade to access this feature.

Using n8n's public [API](../glossary/#api), you can programmatically perform many of the same tasks as you can in the GUI. This section introduces n8n's REST API, including:

- How to [authenticate](authentication/)
- [Paginating](pagination/) results
- Using the [built-in API playground](using-api-playground/) (self-hosted n8n only)
- [Endpoint reference](api-reference/)

n8n provides an [n8n API node](../integrations/builtin/core-nodes/n8n-nodes-base.n8n/) to access the API in your workflows.

## Learn about REST APIs

The API documentation assumes you are familiar with REST APIs. If you're not, these resources may be helpful:

- [KnowledgeOwl's guide to working with APIs](https://support.knowledgeowl.com/help/working-with-apis): a basic introduction, including examples of how to call REST APIs.
- [IBM Cloud Learn Hub - What is an Application Programming Interface (API)](https://www.ibm.com/cloud/learn/api): this gives a general, but technical, introduction to APIs.
- [IBM Cloud Learn Hub - What is a REST API?](https://www.ibm.com/cloud/learn/rest-apis): more detailed information about REST APIs.
- [MDN web docs - An overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview): REST APIs work over HTTP and use HTTP verbs, or methods, to specify the action to perform.

Use the API playground

Trying out the API in the [playground](using-api-playground/) can help you understand how APIs work. If you're worried about changing live data, consider setting up a test workflow, or test n8n instance, to explore safely.

---

## Supported authentication methods

**URL:** llms-txt#supported-authentication-methods

**Contents:**
- Related resources
- Using API key

Refer to [Onfleet's API documentation](https://docs.onfleet.com/reference/introduction) for more information about the service.

To configure this credential, you'll need:

- An **API key**: To create an API key, log into your organization's administrator account. Select **Settings > API & Webhooks**, then select **+** to create a new key. Refer to Onfleet's [Creating an API key documentation](https://support.onfleet.com/hc/en-us/articles/360045763292-API) for more information.

---

## API authentication

**URL:** llms-txt#api-authentication

**Contents:**
- API Scopes
- Create an API key
- Call the API using your key

n8n uses API keys to authenticate API calls.

The n8n API isn't available during the free trial. Please upgrade to access this feature.

Users of [enterprise instances](https://n8n.io/enterprise/) can limit which resources and actions a key can access with scopes. API key scopes allow you specify the exact level of access a key needs for its intended purpose.

Non-enterprise API keys have full access to all the account's resources and capabilities.

1. Log in to n8n.
1. Go to **Settings** > **n8n API**.
1. Select **Create an API key**.
1. Choose a **Label** and set an **Expiration** time for the key.
1. If on an enterprise plan, choose the **Scopes** to give the key.
1. Copy **My API Key** and use this key to authenticate your calls.

## Call the API using your key

Send the API key in your API call as a header named `X-N8N-API-KEY`.

For example, say you want to get all active workflows. Your curl request will look like this:

---

## Monitoring

**URL:** llms-txt#monitoring

**Contents:**
- healthz and healthz/readiness
- metrics
- Enable metrics and healthz for self-hosted n8n

There are three API endpoints you can call to check the status of your instance: `/healthz`, `healthz/readiness`, and `/metrics`.

## healthz and healthz/readiness

The `/healthz` endpoint returns a standard HTTP status code. 200 indicates the instance is reachable. It doesn't indicate DB status. It's available for both self-hosted and Cloud users.

The `/healthz/readiness` endpoint is similar to the `/healthz` endpoint, but it returns a HTTP status code of 200 if the DB is connected and migrated and therefore the instance is ready to accept traffic.

The `/metrics` endpoint provides more detailed information about the current status of the instance.

The `/metrics` endpoint isn't available on n8n Cloud.

## Enable metrics and healthz for self-hosted n8n

The `/metrics` and `/healthz` endpoints are disabled by default. To enable them, configure your n8n instance:

**Examples:**

Example 1 (unknown):
```unknown
<your-instance-url>/healthz
```

Example 2 (unknown):
```unknown
<your-instance-url>/healthz/readiness
```

Example 3 (unknown):
```unknown
<your-instance-url>/metrics
```

---

## The email address to use for the TLS/SSL certificate creation

**URL:** llms-txt#the-email-address-to-use-for-the-tls/ssl-certificate-creation

**Contents:**
- 5. Create local files directory
- 6. Create Docker Compose file
- 7. Start Docker Compose
- 8. Done
- Next steps

SSL_EMAIL=user@example.com

services:
  traefik:
    image: "traefik"
    restart: always
    command:
      - "--api.insecure=true"
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.web.http.redirections.entryPoint.to=websecure"
      - "--entrypoints.web.http.redirections.entrypoint.scheme=https"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.mytlschallenge.acme.tlschallenge=true"
      - "--certificatesresolvers.mytlschallenge.acme.email=${SSL_EMAIL}"
      - "--certificatesresolvers.mytlschallenge.acme.storage=/letsencrypt/acme.json"
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - traefik_data:/letsencrypt
      - /var/run/docker.sock:/var/run/docker.sock:ro

n8n:
    image: docker.n8n.io/n8nio/n8n
    restart: always
    ports:
      - "127.0.0.1:5678:5678"
    labels:
      - traefik.enable=true
      - traefik.http.routers.n8n.rule=Host(`${SUBDOMAIN}.${DOMAIN_NAME}`)
      - traefik.http.routers.n8n.tls=true
      - traefik.http.routers.n8n.entrypoints=web,websecure
      - traefik.http.routers.n8n.tls.certresolver=mytlschallenge
      - traefik.http.middlewares.n8n.headers.SSLRedirect=true
      - traefik.http.middlewares.n8n.headers.STSSeconds=315360000
      - traefik.http.middlewares.n8n.headers.browserXSSFilter=true
      - traefik.http.middlewares.n8n.headers.contentTypeNosniff=true
      - traefik.http.middlewares.n8n.headers.forceSTSHeader=true
      - traefik.http.middlewares.n8n.headers.SSLHost=${DOMAIN_NAME}
      - traefik.http.middlewares.n8n.headers.STSIncludeSubdomains=true
      - traefik.http.middlewares.n8n.headers.STSPreload=true
      - traefik.http.routers.n8n.middlewares=n8n@docker
    environment:
      - N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=true
      - N8N_HOST=${SUBDOMAIN}.${DOMAIN_NAME}
      - N8N_PORT=5678
      - N8N_PROTOCOL=https
      - N8N_RUNNERS_ENABLED=true
      - NODE_ENV=production
      - WEBHOOK_URL=https://${SUBDOMAIN}.${DOMAIN_NAME}/
      - GENERIC_TIMEZONE=${GENERIC_TIMEZONE}
      - TZ=${GENERIC_TIMEZONE}
    volumes:
      - n8n_data:/home/node/.n8n
      - ./local-files:/files

volumes:
  n8n_data:
  traefik_data:

sudo docker compose up -d

sudo docker compose stop
```

You can now reach n8n using the subdomain + domain combination you defined in your `.env` file configuration. The above example would result in `https://n8n.example.com`.

n8n is only accessible using secure HTTPS, not over plain HTTP.

If you have trouble reaching your instance, check your server's firewall settings and your DNS configuration.

- Learn more about [configuring](../../../configuration/environment-variables/) and [scaling](../../../scaling/overview/) n8n.
- Or explore using n8n: try the [Quickstarts](../../../../try-it-out/).

**Examples:**

Example 1 (unknown):
```unknown
## 5. Create local files directory

Inside your project directory, create a directory called `local-files` for sharing files between the n8n instance and the host system (for example, using the [Read/Write Files from Disk node](../../../../integrations/builtin/core-nodes/n8n-nodes-base.readwritefile/)):
```

Example 2 (unknown):
```unknown
The Docker Compose file below can automatically create this directory, but doing it manually ensures that it's created with the right ownership and permissions.

## 6. Create Docker Compose file

Create a `compose.yaml` file. Paste the following in the file:
```

Example 3 (unknown):
```unknown
The Docker Compose file above configures two containers: one for n8n, and one to run [traefik](https://github.com/traefik/traefik), an application proxy to manage TLS/SSL certificates and handle routing.

It also creates and mounts two [Docker Volumes](https://docs.docker.com/engine/storage/volumes/) and mounts the `local-files` directory you created earlier:

| Name            | Type                                                        | Container mount   | Description                                                                                                                         |
| --------------- | ----------------------------------------------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `n8n_data`      | [Volume](https://docs.docker.com/engine/storage/volumes/)   | `/home/node/.n8n` | Where n8n saves its SQLite database file and encryption key.                                                                        |
| `traefik_data`  | [Volume](https://docs.docker.com/engine/storage/volumes/)   | `/letsencrypt`    | Where traefik saves TLS/SSL certificate data.                                                                                       |
| `./local-files` | [Bind](https://docs.docker.com/engine/storage/bind-mounts/) | `/files`          | A local directory shared between the n8n instance and host. In n8n, use the `/files` path to read from and write to this directory. |

## 7. Start Docker Compose

Start n8n by typing:
```

Example 4 (unknown):
```unknown
To stop the containers, type:
```

---

## Handling API rate limits

**URL:** llms-txt#handling-api-rate-limits

**Contents:**
- Identify rate limit issues
- Handle rate limits for integrations
  - Enable Retry On Fail
  - Use Loop Over Items and Wait
- Handle rate limits in the HTTP Request node
  - Batch requests
  - Paginate results

[API](../../../glossary/#api) rate limits are restrictions on request frequency. For example, an API may limit the number of requests you can make per minute, or per day.

APIs can also limits how much data you can send in one request, or how much data the API sends in a single response.

## Identify rate limit issues

When an n8n node hits a rate limit, it errors. n8n displays the error message in the node output panel. This includes the error message from the service.

If n8n received error 429 (too many requests) from the service, the error message is **The service is receiving too many requests from you**.

To check the rate limits for the service you're using, refer to the API documentation for the service.

## Handle rate limits for integrations

There are two ways to handle rate limits in n8n's integrations: using the Retry On Fail setting, or using a combination of the [Loop Over Items](../core-nodes/n8n-nodes-base.splitinbatches/) and [Wait](../core-nodes/n8n-nodes-base.wait/) nodes:

- Retry On Fail adds a pause between API request attempts.
- With Loop Over Items and Wait you can break you request data into smaller chunks, as well as pausing between requests.

### Enable Retry On Fail

When you enable Retry On Fail, the node automatically tries the request again if it fails the first time.

1. Open the node.
1. Select **Settings**.
1. Enable the **Retry On Fail** toggle.
1. Configure the retry settings: if using this to work around rate limits, set **Wait Between Tries (ms)** to more than the rate limit. For example, if the API you're using allows one request per second, set **Wait Between Tries (ms)** to `1000` to allow a 1 second wait.

### Use Loop Over Items and Wait

Use the Loop Over Items node to batch the input items, and the Wait node to introduce a pause between each request.

1. Add the Loop Over Items node before the node that calls the API. Refer to [Loop Over Items](../core-nodes/n8n-nodes-base.splitinbatches/) for information on how to configure the node.
1. Add the Wait node after the node that calls the API, and connect it back to the Loop Over Items node. Refer to [Wait](../core-nodes/n8n-nodes-base.wait/) for information on how to configure the node.

For example, to handle rate limits when using OpenAI:

## Handle rate limits in the HTTP Request node

The HTTP Request node has built-in settings for handling rate limits and large amounts of data.

Use the Batching option to send more than one request, reducing the request size, and introducing a pause between requests. This is the equivalent of using Loop Over Items and Wait.

1. In the HTTP Request node, select **Add Option** > **Batching**.
1. Set **Items per Batch**: this is the number of input items to include in each request.
1. Set **Batch Interval (ms)** to introduce a delay between requests. For example, if the API you're using allows one request per second, set **Wait Between Tries (ms)** to `1000` to allow a 1 second wait.

APIs paginate their results when they need to send more data than they can handle in a single response. For more information on pagination in the HTTP Request node, refer to [HTTP Request node | Pagination](../core-nodes/n8n-nodes-base.httprequest/#pagination).

---

## GraphQL

**URL:** llms-txt#graphql

**Contents:**
- Node parameters
  - Authentication
  - HTTP Request Method
  - Endpoint
  - Ignore SSL Issues
  - Query
  - Response Format
- Headers
- Templates and examples
- Related resources

[GraphQL](https://graphql.org/) is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data. Use the GraphQL node to query a GraphQL endpoint.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

Select the type of authentication to use.

If you select anything other than **None**, the **Credential for** parameter appears for you to select an existing or create a new authentication credential for that authentication type.

### HTTP Request Method

Select the underlying HTTP Request method the node should use. Choose from:

- **GET**
- **POST**: If you select this method, you'll also need to select the **Request Format** the node should use for the query payload. Choose from:
  - **GraphQL (Raw)**
  - **JSON**

Enter the GraphQL Endpoint you'd like to hit.

### Ignore SSL Issues

When you turn on this control, n8n ignores SSL certificate validation failure.

Enter the GraphQL query you want to execute.

Refer to [Related Resources](#related-resources) for information on writing your query.

Select the format you'd like to receive query results in. Choose between:

- **JSON**
- **String**: If you select this format, enter a **Response Data Property Name** to define the property the string is written to.

Enter any **Headers** you want to pass as part of the query as **Name** / **Value** pairs.

## Templates and examples

**Get top 5 products on Product Hunt every hour**

[View template details](https://n8n.io/workflows/1298-get-top-5-products-on-product-hunt-every-hour/)

**API queries data from GraphQL**

[View template details](https://n8n.io/workflows/216-api-queries-data-from-graphql/)

**Bulk Create Shopify Products with Inventory Management from Google Sheets**

[View template details](https://n8n.io/workflows/5664-bulk-create-shopify-products-with-inventory-management-from-google-sheets/)

[Browse GraphQL integration templates](https://n8n.io/integrations/graphql/), or [search all templates](https://n8n.io/workflows/)

To use the GraphQL node, you need to understand GraphQL query language. GraphQL have their own [Introduction to GraphQL](https://graphql.org/learn/) tutorial.

---

## API pagination

**URL:** llms-txt#api-pagination

The default page size is 100 results. You can change the page size limit. The maximum permitted size is 250.

When a response contains more than one page, it includes a cursor, which you can use to request the next pages.

For example, say you want to get all active workflows, 150 at a time.

---

## Disable the public REST API

**URL:** llms-txt#disable-the-public-rest-api

**Contents:**
- Disable the API playground
- Related resources

The [n8n public REST API](../../../api/) allows you to programmatically perform many of the same tasks as you can in the n8n GUI.

If you don't plan on using this API, n8n recommends disabling it to improve the security of your n8n installation.

To disable the [public REST API](../../../api/), set the `N8N_PUBLIC_API_DISABLED` environment variable to `true`, for example:

## Disable the API playground

To disable the [API playground](../../../api/using-api-playground/), set the `N8N_PUBLIC_API_SWAGGERUI_DISABLED` environment variable to `true`, for example:

Refer to [Deployment environment variables](../../configuration/environment-variables/deployment/) for more information on these environment variables.

Refer to [Configuration](../../configuration/configuration-methods/) for more information on setting environment variables.

**Examples:**

Example 1 (unknown):
```unknown
export N8N_PUBLIC_API_DISABLED=true
```

Example 2 (unknown):
```unknown
export N8N_PUBLIC_API_SWAGGERUI_DISABLED=true
```

---

## Endpoints environment variables

**URL:** llms-txt#endpoints-environment-variables

File-based configuration

You can add `_FILE` to individual variables to provide their configuration in a separate file. Refer to [Keeping sensitive data in separate files](../../configuration-methods/#keeping-sensitive-data-in-separate-files) for more details.

This page lists environment variables for customizing endpoints in n8n.

| Variable                                        | Type    | Default           | Description                                                                                                                                               |
| ----------------------------------------------- | ------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `N8N_PAYLOAD_SIZE_MAX`                          | Number  | `16`              | The maximum payload size in MiB.                                                                                                                          |
| `N8N_FORMDATA_FILE_SIZE_MAX`                    | Number  | `200`             | Max payload size for files in form-data webhook payloads in MiB.                                                                                          |
| `N8N_METRICS`                                   | Boolean | `false`           | Whether to enable the `/metrics` endpoint.                                                                                                                |
| `N8N_METRICS_PREFIX`                            | String  | `n8n_`            | Optional prefix for n8n specific metrics names.                                                                                                           |
| `N8N_METRICS_INCLUDE_DEFAULT_METRICS`           | Boolean | `true`            | Whether to expose default system and node.js metrics.                                                                                                     |
| `N8N_METRICS_INCLUDE_CACHE_METRICS`             | Boolean | false             | Whether to include metrics (true) for cache hits and misses, or not include them (false).                                                                 |
| `N8N_METRICS_INCLUDE_MESSAGE_EVENT_BUS_METRICS` | Boolean | `false`           | Whether to include metrics (true) for events, or not include them (false).                                                                                |
| `N8N_METRICS_INCLUDE_WORKFLOW_ID_LABEL`         | Boolean | `false`           | Whether to include a label for the workflow ID on workflow metrics.                                                                                       |
| `N8N_METRICS_INCLUDE_NODE_TYPE_LABEL`           | Boolean | `false`           | Whether to include a label for the node type on node metrics.                                                                                             |
| `N8N_METRICS_INCLUDE_CREDENTIAL_TYPE_LABEL`     | Boolean | `false`           | Whether to include a label for the credential type on credential metrics.                                                                                 |
| `N8N_METRICS_INCLUDE_API_ENDPOINTS`             | Boolean | `false`           | Whether to expose metrics for API endpoints.                                                                                                              |
| `N8N_METRICS_INCLUDE_API_PATH_LABEL`            | Boolean | `false`           | Whether to include a label for the path of API invocations.                                                                                               |
| `N8N_METRICS_INCLUDE_API_METHOD_LABEL`          | Boolean | `false`           | Whether to include a label for the HTTP method (GET, POST, ...) of API invocations.                                                                       |
| `N8N_METRICS_INCLUDE_API_STATUS_CODE_LABEL`     | Boolean | `false`           | Whether to include a label for the HTTP status code (200, 404, ...) of API invocations.                                                                   |
| `N8N_METRICS_INCLUDE_QUEUE_METRICS`             | Boolean | `false`           | Whether to include metrics for jobs in scaling mode. Not supported in multi-main setup.                                                                   |
| `N8N_METRICS_QUEUE_METRICS_INTERVAL`            | Integer | `20`              | How often (in seconds) to update queue metrics.                                                                                                           |
| `N8N_ENDPOINT_REST`                             | String  | `rest`            | The path used for REST endpoint.                                                                                                                          |
| `N8N_ENDPOINT_WEBHOOK`                          | String  | `webhook`         | The path used for webhook endpoint.                                                                                                                       |
| `N8N_ENDPOINT_WEBHOOK_TEST`                     | String  | `webhook-test`    | The path used for test-webhook endpoint.                                                                                                                  |
| `N8N_ENDPOINT_WEBHOOK_WAIT`                     | String  | `webhook-waiting` | The path used for waiting-webhook endpoint.                                                                                                               |
| `WEBHOOK_URL`                                   | String  | -                 | Used to manually provide the Webhook URL when running n8n behind a reverse proxy. See [here](../../configuration-examples/webhook-url/) for more details. |
| `N8N_DISABLE_PRODUCTION_MAIN_PROCESS`           | Boolean | `false`           | Disable production webhooks from main process. This helps ensure no HTTP traffic load to main process when using webhook-specific processes.              |

---
