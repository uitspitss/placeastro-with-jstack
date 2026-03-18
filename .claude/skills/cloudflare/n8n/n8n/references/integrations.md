# N8N - Integrations

**Pages:** 242

---

## JWT credentials

**URL:** llms-txt#jwt-credentials

**Contents:**
- Supported authentication methods
- Related resources
- Using Passphrase
- Using private key (PEM key)
- Available algorithms

You can use these credentials to authenticate the following nodes:

- [JWT](../../core-nodes/n8n-nodes-base.jwt/)
- [Webhook](../../core-nodes/n8n-nodes-base.webhook/)

## Supported authentication methods

- Passphrase: Signed with a secret with HMAC algorithm
- Private key (PEM key): For use with [Private Key JWT](https://auth0.com/docs/get-started/authentication-and-authorization-flow/authenticate-with-private-key-jwt) with RSA or ECDSA algorithm

Refer to the [JSON Web Token spec](https://datatracker.ietf.org/doc/html/rfc7519) for more details.

For a more verbose introduction, refer to the [JWT website Introduction to JSON Web Tokens](https://jwt.io/introduction). Refer to [JSON Web Token (JWT) Signing Algorithms Overview](https://auth0.com/blog/json-web-token-signing-algorithms-overview/) for more information on selecting between the two types and the algorithms involved.

To configure this credential:

1. Select the **Key Type** of **Passphrase**.
1. Enter the Passphrase **Secret**
1. Select the **Algorithm** used to sign the assertion. Refer to [Available algorithms](#available-algorithms) below for a list of supported algorithms.

## Using private key (PEM key)

To configure this credential:

1. Select the **Key Type** of **PEM Key**.
1. A **Private Key**: Obtained from generating a Key Pair. Refer to [Generate RSA Key Pair](https://auth0.com/docs/secure/application-credentials/generate-rsa-key-pair) for an example.
1. A **Public Key**: Obtained from generating a Key Pair. Refer to [Generate RSA Key Pair](https://auth0.com/docs/secure/application-credentials/generate-rsa-key-pair) for an example.
1. Select the **Algorithm** used to sign the assertion. Refer to [Available algorithms](#available-algorithms) below for a list of supported algorithms.

## Available algorithms

This n8n credential supports the following algorithms:

- `HS256`
- `HS384`
- `HS512`
- `RS256`
- `RS384`
- `RS512`
- `ES256`
- `ES384`
- `ES512`
- `PS256`
- `PS384`
- `PS512`
- `none`

---

## Cisco Meraki credentials

**URL:** llms-txt#cisco-meraki-credentials

**Contents:**
- Prerequisites
- Authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

- Create a [Cisco DevNet developer account](https://developer.cisco.com).
- Access to a [Cisco Meraki account](https://meraki.cisco.com/).

## Authentication methods

Refer to [Cisco Meraki's API documentation](https://developer.cisco.com/meraki/api-v1/introduction/) for more information about the service.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/cisco-meraki/) on n8n's website.

To configure this credential, you'll need:

- An **API Key**: Refer to the [Cisco Meraki Obtaining your Meraki API Key documentation](https://developer.cisco.com/meraki/api-v1/authorization/#obtaining-your-meraki-api-key) for instructions on getting your API Key.

---

## MSG91 credentials

**URL:** llms-txt#msg91-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key
- IP Security

You can use these credentials to authenticate the following nodes:

- [MSG91](../../app-nodes/n8n-nodes-base.msg91/)

Create a [MSG91](https://msg91.com/) account.

## Supported authentication methods

Refer to [MSG91's API documentation](https://docs.msg91.com/overview) for more information about the service.

To configure this credential, you'll need:

- An **Authentication Key**: To get your Authentication Key, go to the user menu and select **Authkey**. Refer to MSG91's [Where can I find my authentication key? documentation](https://msg91.com/help/api/where-can-i-find-my-authentication-ke) for more information.

MSG91 enables [IP Security](https://msg91.com/help/api/what-do-you-mean-by-api-security) by default for authkeys.

For the n8n credentials to function with this setting enabled, add all the [n8n IP addresses](../../../../manage-cloud/cloud-ip/) as whitelisted IPs in MSG91. You can add them in one of two places, depending on your desired security level:

- To allow any/all authkeys in the account to work with n8n, add the n8n IP addresses in the **Company's whitelisted IPs** section of the **Authkey** page.
- To allow only specific authkeys to work with n8n, add the n8n IP addresses in the **Whitelisted IPs** section of an authkey's details.

---

## CircleCI credentials

**URL:** llms-txt#circleci-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using personal API token

You can use these credentials to authenticate the following nodes:

- [CircleCI](../../app-nodes/n8n-nodes-base.circleci/)

Create a [CircleCI](https://circleci.com/) account.

## Supported authentication methods

Refer to [CircleCI's API documentation](https://circleci.com/docs/api/v2/index.html) for more information about the service.

## Using personal API token

To configure this credential, you'll need:

- A **Personal API Token**: Refer to the [CircleCI Creating a Personal API token documentation](https://circleci.com/docs/managing-api-tokens/#creating-a-personal-api-token) for instructions on creating your token.

---

## Hybrid Analysis credentials

**URL:** llms-txt#hybrid-analysis-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

Create a [Hybrid Analysis](https://www.hybrid-analysis.com/) account.

## Supported authentication methods

Refer to [Hybrid Analysis' API documentation](https://www.hybrid-analysis.com/docs/api/v2) for more information about the service.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/hybrid-analysis/) on n8n's website.

To configure this credential, you'll need:

- An **API Key**: Refer to the [Hybrid Analysis' API documentation](https://www.hybrid-analysis.com/docs/api/v2) for instructions on generating an API key.

---

## Wolfram|Alpha credentials

**URL:** llms-txt#wolfram|alpha-credentials

**Contents:**
- Supported authentication methods
- Related resources
- Using API key
- Resolve Forbidden connection error

You can use these credentials to authenticate the following nodes:

- [Wolfram|Alpha](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.toolwolframalpha/)

## Supported authentication methods

Refer to [Wolfram|Alpha's Simple API documentation](https://products.wolframalpha.com/simple-api/documentation) for more information about the service.

View n8n's [Advanced AI](../../../../advanced-ai/) documentation.

To configure this credential, you'll need a registered [Wolfram ID](https://account.wolfram.com) and:

1. Open the Wolfram|Alpha Developer Portal and go to [**API Access**](https://developer.wolframalpha.com/access).
1. Select **Get an App ID**.
1. Enter a **Name** for your application, like `n8n integration`.
1. Enter a **Description** for your application.
1. Select **Simple API** as the **API**.
1. Select **Submit**.
1. Copy the generated **App ID** and enter it in your n8n credential.

Refer to **Getting Started** in the [Wolfram|Alpha Simple API documentation](https://products.wolframalpha.com/simple-api/documentation) for more information.

## Resolve Forbidden connection error

If you enter your App ID and get an error that the credential is **Forbidden**, make sure that you have verified your email address for your Wolfram ID:

1. Go to your [Wolfram ID Details](https://account.wolfram.com/wolframid).
1. If you don't see the **Verified** label underneath your **Email address**, select the link to **Send a verification email**.
1. You must open the link in that email to verify your email address.

It may take several minutes for the verification to populate to the API, but once it does, retrying the n8n credential should succeed.

---

## Cloudflare credentials

**URL:** llms-txt#cloudflare-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API token

You can use these credentials to authenticate the following nodes:

- [Cloudflare node](../../app-nodes/n8n-nodes-base.cloudflare/)

- Create a [Cloudflare account](https://developers.cloudflare.com/fundamentals/setup/account/).
- [Add a domain](https://developers.cloudflare.com/fundamentals/setup/manage-domains/add-site/).

## Supported authentication methods

Refer to [Cloudflare's API documentation](https://developers.cloudflare.com/fundamentals/api/) for more information about the service.

To configure this credential, you'll need:

- An **API token**: Follow the [Cloudflare documentation to create an API token](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/).

---

## Dropbox credentials

**URL:** llms-txt#dropbox-credentials

**Contents:**
- Supported authentication methods
- Related resources
- Using access token
- Using OAuth2

You can use these credentials to authenticate the following nodes:

- [Dropbox](../../app-nodes/n8n-nodes-base.dropbox/)

## Supported authentication methods

- API access token: Dropbox recommends this method for testing with your user account and granting a limited number of users access.
- OAuth2: Dropbox recommends this method for production or for testing with more than 50 users.

You can transition an app from the API access token to OAuth2 by creating a new credential in n8n for OAuth2 using the same app.

Refer to [Dropbox's Developer documentation](https://www.dropbox.com/developers/documentation) for more information about the service.

## Using access token

To configure this credential, you'll need a [Dropbox](https://www.dropbox.com/developers) developer account and:

- An **Access Token**: Generated once you create a Dropbox app.
- An **App Access Type**

To set up the credential, create a Dropbox app:

1. Open the [App Console](https://www.dropbox.com/developers/apps) within the Dropbox developer portal.
1. Select **Create app**.
1. In **Choose an API**, select **Scoped access**.
1. In **Choose the type of access you need**, choose whichever option best fits your use of the [Dropbox](../../app-nodes/n8n-nodes-base.dropbox/) node:
   - **App Folder** grants access to a single folder created specifically for your app.
   - **Full Dropbox** grants access to all files and folders in your user's Dropbox.
   - Refer to the [DBX Platform developer guide](https://www.dropbox.com/developers/reference/developer-guide) for more information.
1. In **Name your app**, enter a name for your app, like `n8n integration`.
1. Check the box to agree to the **Dropbox API Terms and Conditions**.
1. Select **Create app**. The app's **Settings** open.
1. In the **OAuth 2** section, in **Generated access token**, select **Generate**.
1. Copy the access token and enter it as the **Access Token** in your n8n credential.
1. In n8n, select the same **App Access Type** you selected for your app.

Refer to the [Dropbox App Console Settings documentation](https://www.dropbox.com/developers/reference/getting-started) for more information.

On the **Settings** tab, you can add other users to your app, even with the access token method. Once your app links 50 Dropbox users, you will have two weeks to apply for and receive production status approval before Dropbox freezes your app from linking more users.

Note for n8n Cloud users

Cloud users don't need to provide connection details. Select **Connect my account** to connect through your browser.

Cloud users need to select the **App Access Type**:

- **App Folder** grants access to a single folder created specifically for your app.
- **Full Dropbox** grants access to all files and folders in your user's Dropbox.
- Refer to the [DBX Platform developer guide](https://www.dropbox.com/developers/reference/developer-guide) for more information.

If you're [self-hosting](../../../../hosting/) n8n, you'll need to configure OAuth2 manually:

1. Open the [App Console](https://www.dropbox.com/developers/apps) within the Dropbox developer portal.
1. Select **Create app**.
1. In **Choose an API**, select **Scoped access**.
1. In **Choose the type of access you need**, choose whichever option best fits your use of the [Dropbox](../../app-nodes/n8n-nodes-base.dropbox/) node:
   - **App Folder** grants access to a single folder created specifically for your app.
   - **Full Dropbox** grants access to all files and folders in your user's Dropbox.
   - Refer to the [DBX Platform developer guide](https://www.dropbox.com/developers/reference/developer-guide) for more information.
1. In **Name your app**, enter a name for your app, like `n8n integration`.
1. Check the box to agree to the **Dropbox API Terms and Conditions**.
1. Select **Create app**. The app's **Settings** open.
1. Copy the **App key** and enter it as the **Client ID** in your n8n credential.
1. Copy the **Secret** and enter it as the **Client Secret** in your n8n credential.
1. In n8n, copy the **OAuth Redirect URL** and enter it in the Dropbox **Redirect URIs**.
1. In n8n, select the same **App Access Type** you selected for your app.

Refer to the instructions in the [Dropbox Implementing OAuth documentation](https://developers.dropbox.com/oauth-guide#implementing-oauth) for more information.

For internal tools and limited usage, you can keep your app private. But if you'd like your app to be used by more than 50 users or you want to distribute it, you'll need to complete Dropbox's production approval process. Refer to **Production Approval** in the [DBX Platform developer guide](https://www.dropbox.com/developers/reference/developer-guide) for more information.

On the **Settings** tab, you can add other users to your app. Once your app links 50 Dropbox users, you will have two weeks to apply for and receive production status approval before Dropbox freezes your app from linking more users.

---

## Zep credentials

**URL:** llms-txt#zep-credentials

**Contents:**
- Supported authentication methods
- Related resources
- Using API key
  - Zep Cloud setup
  - Self-hosted Zep Open Source setup

You can use these credentials to authenticate the following nodes:

- [Zep](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.memoryzep/)
- [Zep Vector Store](../../cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstorezep/)

## Supported authentication methods

Refer to [Zep's Cloud SDK documentation](https://help.getzep.com/install-sdks) for more information about the service. Refer to [Zep's REST API documentation](https://getzep.github.io/zep/) for information about the API.

View n8n's [Advanced AI](../../../../advanced-ai/) documentation.

To configure this credential, you'll need a [Zep server](https://www.getzep.com/) with at least one project and:

- An **API URL**
- An **API Key**

Setup depends on whether you're using Zep Cloud or self-hosted Zep Open Source.

Follow these instructions if you're using [Zep Cloud](https://app.getzep.com):

1. In Zep, open the **Project Settings**.
1. In the **Project Keys** section, select **Add Key**.
1. Enter a **Key Name**, like `n8n integration`.
1. Select **Create**.
1. Copy the key and enter it in your n8n integration as the **API Key**.
1. Turn on the **Cloud** toggle.

### Self-hosted Zep Open Source setup

The Zep team [deprecated the open source Zep Community Edition](https://blog.getzep.com/announcing-a-new-direction-for-zeps-open-source-strategy/) in April, 2025. These instructions may not work in the future.

Follow these instructions if you're self-hosting Zep Open Source:

1. Enter the JWT token for your Zep server as the **API Key** in n8n.
1. Make sure the **Cloud** toggle is off.
1. Enter the URL for your Zep server as the **API URL**.

---

## Zoho credentials

**URL:** llms-txt#zoho-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using OAuth2

You can use these credentials to authenticate the following nodes:

- [Zoho CRM](../../app-nodes/n8n-nodes-base.zohocrm/)

Create a [Zoho](https://www.zoho.com/) account.

## Supported authentication methods

Refer to [Zoho's CRM API documentation](https://www.zoho.com/crm/developer/docs/api/v3/) for more information about the service.

To configure this credential, you'll need:

- An **Access Token URL**: Zoho provides region-specific access token URLs. Select the region that best fits your Zoho data center:
  - **AU**: Select this option for Australia data center.
  - **CN**: Select this option for Canada data center.
  - **EU**: Select this option for the European Union data center.
  - **IN**: Select this option for the India data center.
  - **US**: Select this option for the United States data center.

Refer to [Multi DC](https://www.zoho.com/crm/developer/docs/api/v3/multi-dc.html) for more information about selecting a data center.

Note for n8n Cloud users

Cloud users don't need to provide connection details. Select **Connect my account** to connect through your browser.

If you need to configure OAuth2 from scratch, [register an application](https://www.zoho.com/accounts/protocol/oauth-setup.html) with Zoho.

Use these settings for your application:

- Select **Server-based Applications** as the **Client Type**.
- Copy the **OAuth Callback URL** from n8n and enter it in the Zoho **Authorized Redirect URIs** field.
- Copy the **Client ID** and **Client Secret** from the application and enter them in your n8n credential.

---

## SolarWinds Observability SaaS credentials

**URL:** llms-txt#solarwinds-observability-saas-credentials

**Contents:**
- Supported authentication methods
- Related resources
- Using API Token

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

## Supported authentication methods

Refer to [SolarWinds Observability SaaS's API documentation](https://documentation.solarwinds.com/en/success_center/observability/content/api/api-swagger.htm) for more information about the service.

To configure this credential, you'll need a SolarWinds Observability SaaS account and:

- **URL**: The URL you use to access the SolarWinds Observability SaaS platform
- **API Token**: An API token found in the SolarWinds Observability SaaS platform under **Settings > Api Tokens**

Refer to [SolarWinds Observability SaaS's API documentation](https://documentation.solarwinds.com/en/success_center/observability/content/settings/api-tokens.htm) for more information about authenticating to the service.

---

## monday.com credentials

**URL:** llms-txt#monday.com-credentials

**Contents:**
- Supported authentication methods
- Related resources
- Using API token
- Using OAuth2

You can use these credentials to authenticate the following nodes:

- [monday.com](../../app-nodes/n8n-nodes-base.mondaycom/)

Minimum required version

The monday.com node requires n8n version 1.22.6 or above.

## Supported authentication methods

Refer to [monday.com's API documentation](https://developer.monday.com/api-reference/docs/basics) for more information about authenticating with the service.

To configure this credential, you'll need a [monday.com](https://monday.com/) account and:

- An API **Token V2**

1. In your monday.com account, select your profile picture in the top right corner.
1. Select **Developers**. The Developer Center opens in a new tab.
1. In the Developer Center, select **My Access Tokens > Show**.
1. Copy your personal token and enter it in your n8n credential as the **Token V2**.

Refer to [monday.com API Authentication](https://developer.monday.com/api-reference/docs/authentication) for more information.

To configure this credential, you'll need a [monday.com](https://monday.com/) account and:

- A **Client ID**
- A **Client Secret**

To generate both these fields, register a new monday.com application:

1. In your monday.com account, select your profile picture in the top right corner.
1. Select **Developers**. The Developer Center opens in a new tab.
1. In the Developer Center, select **Build app**. The app details open.
1. Enter a **Name** for your app, like `n8n integration`.
1. Copy the **Client ID** and enter it in your n8n credential.
1. **Show** the **Client Secret**, copy it, and enter it in your n8n credential.
1. In the left menu, select **OAuth**.
1. For **Scopes**, select `boards:write` and `boards:read`.
1. Select **Save Scopes**.
1. Select the **Redirect URLs** tab.
1. Copy the **OAuth Redirect URL** from n8n and enter it as the **Redirect URL**.
1. **Save** your changes in monday.com.
1. In n8n, select **Connect my account** to finish the setup.

Refer to [Create an app](https://developer.monday.com/apps/docs/create-an-app) for more information on creating apps.

Refer to [OAuth and permissions](https://developer.monday.com/apps/docs/oauth) for more information on the available scopes and setting up the Redirect URL.

---

## Mindee credentials

**URL:** llms-txt#mindee-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using invoice API key
- Using receipt API key

You can use these credentials to authenticate the following nodes:

- [Mindee](../../app-nodes/n8n-nodes-base.mindee/)

Create a [Mindee](https://mindee.com) account.

## Supported authentication methods

- Invoice API key: For use with the [Invoice OCR API](https://www.mindee.com/product/invoice-ocr-api)
- Receipt API key: For use with the [Receipt OCR API](https://www.mindee.com/product/receipt-ocr-api)

Refer to [Mindee's Invoice OCR API documentation](https://developers.mindee.com/docs/invoice-ocr) and [Mindee's Receipt OCR API documentation](https://developers.mindee.com/docs/receipt-ocr) for more information about each service.

## Using invoice API key

To configure this credential, you'll need:

- An **API Key**: Refer to the Mindee [Create & Manage API Keys documentation](https://developers.mindee.com/docs/create-api-key) for instructions on creating API keys.

## Using receipt API key

To configure this credential, you'll need:

- An **API Key**: Refer to the Mindee [Create & Manage API Keys documentation](https://developers.mindee.com/docs/create-api-key) for instructions on creating API keys.

---

## OpenCTI credentials

**URL:** llms-txt#opencti-credentials

**Contents:**
- Prerequisites
- Authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

Create an [OpenCTI](https://filigran.io/solutions/open-cti/) developer account.

## Authentication methods

Refer to [OpenCTI's documentation](https://docs.opencti.io/latest/) for more information about the service.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/opencti/) on n8n's website.

To configure this credential, you'll need:

- An **API Key**: To get your API key, go to your **Profile > API access**. Refer to the OpenCTI [Integrations Authentication documentation](https://docs.opencti.io/latest/deployment/integrations/#authentication) for more information.

---

## Recorded Future credentials

**URL:** llms-txt#recorded-future-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API access token

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

Create a [Recorded Future](https://www.recordedfuture.com) account.

## Supported authentication methods

Refer to [Recorded Future's documentation](https://api.recordedfuture.com/index.html) for more information about the service. The rest of Recorded Future's help center requires a paid account.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/recorded-future/) on n8n's website.

## Using API access token

To configure this credential, you'll need:

- An API **Access Token**

Refer to the [Recorded Future APIs documentation](https://support.recordedfuture.com/hc/en-us/categories/16372120363539-Recorded-Future-APIs) for more information on getting your API access token.

---

## Vonage credentials

**URL:** llms-txt#vonage-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Vonage](../../app-nodes/n8n-nodes-base.vonage/)

Create a [Vonage developer](https://developer.vonage.com) account.

## Supported authentication methods

Refer to [Vonage's SMS API documentation](https://developer.vonage.com/en/api/sms) for more information about the service.

To configure this credential, you'll need:

- An **API Key**
- An **API Secret**

Get your **API Key** and **API Secret** from your [developer dashboard](https://dashboard.nexmo.com/) **user account > Settings > API Settings**. Refer to [Retrieve your account information](https://developer.vonage.com/en/account/guides/dashboard-management#retrieve-your-account-information) for more information.

---

## Action Network credentials

**URL:** llms-txt#action-network-credentials

**Contents:**
- Supported authentication methods
- Related resources
- Using API key
- Request API access

You can use these credentials to authenticate the following nodes:

- [Action Network](../../app-nodes/n8n-nodes-base.actionnetwork/)

## Supported authentication methods

Refer to [Action Network's API documentation](https://actionnetwork.org/docs/) for more information about working with the service.

To configure this credential, you'll need an [Action Network](https://actionnetwork.org/) account with [API key access enabled](#request-api-access) and:

1. Log in to your Action Network account.
1. From the **Start Organizing** menu, select **Details >** [**API & Sync**](https://actionnetwork.org/apis).
1. Select the list you want to generate an API key for.
1. Generate an API key for that list.
1. Copy the **API Key** and enter it in your n8n credential.

Refer to the [Action Network API Authentication instructions](https://actionnetwork.org/docs/v2/#auth) for more information.

## Request API access

Each user account and group on the Action Network has a separate API key to access that user or group's data.

You must explicitly request API access from Action Network, which you can do in one of two ways:

1. If you're already a paying customer, [contact them](https://actionnetwork.org/contact) to request partner access. Partner access includes API key access.
1. If you're a developer, [request a developer account](https://actionnetwork.org/developers). Once your account request is granted, you'll have API key access.

---

## QRadar credentials

**URL:** llms-txt#qradar-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

Create a [Qradar](https://www.ibm.com/qradar) account.

## Supported authentication methods

Refer to [QRadar's documentation](https://ibmsecuritydocs.github.io/qradar_api_overview/) for more information about the service.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/qradar/) on n8n's website.

To configure this credential, you'll need:

- An **API Key**: Also known as an authorized service token. Use the **Manage Authorized Services** window on the **Admin** tab to create an authentication token. Refer to [Creating an authentication token](https://www.ibm.com/docs/en/qradar-common?topic=forwarding-creating-authentication-token) for more information.

---

## Azure OpenAI credentials

**URL:** llms-txt#azure-openai-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key
- Using Azure Entra ID (OAuth2)
  - Register an application
  - Generate a client secret
- Setting custom scopes

You can use these credentials to authenticate the following nodes:

- [Chat Azure OpenAI](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatazureopenai/)
- [Embeddings Azure OpenAI](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsazureopenai/)

- Create an [Azure](https://azure.microsoft.com) subscription.
- Access to Azure OpenAI within that subscription. You may need to [request access](https://aka.ms/oai/access) if your organization doesn't yet have it.

## Supported authentication methods

- API key
- Azure Entra ID (OAuth2)

Refer to [Azure OpenAI's API documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/reference) for more information about the service.

To configure this credential, you'll need:

- A **Resource Name**: the **Name** you give the resource
- An **API key**: **Key 1** works well. This can be accessed before deployment in **Keys and Endpoint**.
- The **API Version** the credentials should use. See the [Azure OpenAI API preview lifecycle documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/api-version-deprecation) for more information about API versioning in Azure OpenAI.

To get the information above, [create and deploy an Azure OpenAI Service resource](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/create-resource).

Model name for Azure OpenAI nodes

Once you deploy the resource, use the **Deployment name** as the model name for the Azure OpenAI nodes where you're using this credential.

## Using Azure Entra ID (OAuth2)

Note for n8n Cloud users

Cloud users don't need to provide connection details. Select **Connect my account** to connect through your browser.

For self-hosted users, there are two main steps to configure OAuth2 from scratch:

1. [Register an application](#register-an-application) with the Microsoft Identity Platform.
1. [Generate a client secret](#generate-a-client-secret) for that application.

Follow the detailed instructions for each step below. For more detail on the Microsoft OAuth2 web flow, refer to [Microsoft authentication and authorization basics](https://learn.microsoft.com/en-us/graph/auth/auth-concepts).

### Register an application

Register an application with the Microsoft Identity Platform:

1. Open the [Microsoft Application Registration Portal](https://aka.ms/appregistrations).
1. Select **Register an application**.
1. Enter a **Name** for your app.
1. In **Supported account types**, select **Accounts in any organizational directory (Any Azure AD directory - Multi-tenant) and personal Microsoft accounts (for example, Skype, Xbox)**.
1. In **Register an application**:
   1. Copy the **OAuth Callback URL** from your n8n credential.
   1. Paste it into the **Redirect URI (optional)** field.
   1. Select **Select a platform** > **Web**.
1. Select **Register** to finish creating your application.
1. Copy the **Application (client) ID** and paste it into n8n as the **Client ID**.

Refer to [Register an application with the Microsoft Identity Platform](https://learn.microsoft.com/en-us/graph/auth-register-app-v2) for more information.

### Generate a client secret

With your application created, generate a client secret for it:

1. On your Microsoft application page, select **Certificates & secrets** in the left navigation.
1. In **Client secrets**, select **+ New client secret**.
1. Enter a **Description** for your client secret, such as `n8n credential`.
1. Select **Add**.
1. Copy the **Secret** in the **Value** column.
1. Paste it into n8n as the **Client Secret**.
1. Select **Connect my account** in n8n to finish setting up the connection.
1. Log in to your Microsoft account and allow the app to access your info.

Refer to Microsoft's [Add credentials](https://learn.microsoft.com/en-us/graph/auth-register-app-v2#add-credentials) for more information on adding a client secret.

## Setting custom scopes

Azure Entra ID credentials use the following scopes by default:

- [`openid`](https://learn.microsoft.com/en-us/entra/identity-platform/scopes-oidc#the-openid-scope)
- [`offline_access`](https://learn.microsoft.com/en-us/entra/identity-platform/scopes-oidc#the-offline_access-scope)
- [`AccessReview.ReadWrite.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#accessreviewreadwriteall)
- [`Directory.ReadWrite.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#directoryreadwriteall)
- [`NetworkAccessPolicy.ReadWrite.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#networkaccesspolicyreadwriteall)
- [`DelegatedAdminRelationship.ReadWrite.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#delegatedadminrelationshipreadwriteall)
- [`EntitlementManagement.ReadWrite.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#entitlementmanagementreadwriteall)
- [`User.ReadWrite.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#userreadwriteall)
- [`Directory.AccessAsUser.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#directoryaccessasuserall)
- [`Sites.FullControl.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#sitesfullcontrolall)
- [`GroupMember.ReadWrite.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#groupmemberreadwriteall)

To select different scopes for your credentials, enable the **Custom Scopes** slider and edit the **Enabled Scopes** list. Keep in mind that some features may not work as expected with more restrictive scopes.

---

## Rocket.Chat credentials

**URL:** llms-txt#rocket.chat-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API access token

You can use these credentials to authenticate the following nodes:

- [Rocket.Chat](../../app-nodes/n8n-nodes-base.rocketchat/)

- Create a [Rocket.Chat](https://rocket.chat/) account.
- Your account must have the `create-personal-access-tokens` permission to generate personal access tokens.

## Supported authentication methods

Refer to [Rocket.Chat's API documentation](https://developer.rocket.chat/reference/api/rest-api) for more information about the service.

## Using API access token

To configure this credential, you'll need:

- Your **User ID**: Displayed when you generate an access token.
- An **Auth Key**: Your personal access token. To generate an access token, go to your **avatar > Account > Personal Access Tokens**. Copy the token and add it as the n8n **Auth Key**.
- Your Rocket.Chat **Domain**: Also known as your default URL or workspace URL.

Refer to [Personal Access Tokens](https://docs.rocket.chat/docs/manage-your-account-settings#personal-access-tokens) for more information.

---

## Perplexity credentials

**URL:** llms-txt#perplexity-credentials

**Contents:**
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Perplexity](../../app-nodes/n8n-nodes-langchain.perplexity/)

## Supported authentication methods

Refer to [Perplexity's API documentation](https://docs.perplexity.ai/api-reference/) for more information about the service.

To configure this credential, you'll need a [Perplexity account](https://www.perplexity.ai/account) and:

- **a Perplexity API key**: You can find out how to create a Perplexity API key in the [Perplexity API getting started guide](https://docs.perplexity.ai/guides/getting-started).

Refer to [Perplexity's API documentation](https://docs.perplexity.ai/) for more information about authenticating to the service.

---

## QuickBooks credentials

**URL:** llms-txt#quickbooks-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using OAuth2

You can use these credentials to authenticate the following nodes:

- [QuickBooks](../../app-nodes/n8n-nodes-base.quickbooks/)

Create an [Intuit developer](https://developer.intuit.com/) account.

## Supported authentication methods

Refer to [Intuit's API documentation](https://developer.intuit.com/app/developer/qbo/docs/develop) for more information about the service.

To configure this credential, you'll need:

- A **Client ID**: Generated when you create an app.
- A **Client Secret**: Generated when you create an app.
- An **Environment**: Select whether this credential should access your **Production** or **Sandbox** environment.

To generate your **Client ID** and **Client Secret**, [create an app](https://developer.intuit.com/app/developer/qbo/docs/get-started/start-developing-your-app#create-an-app).

Use these settings when creating your app:

- Select appropriate scopes for your app. Refer to [Learn about scopes](https://developer.intuit.com/app/developer/qbo/docs/learn/scopes) for more information.
- Enter the **OAuth Redirect URL** from n8n as a **Redirect URI** in the app's **Development > Keys & OAuth** section.
- Copy the **Client ID** and **Client Secret** from the app's **Development > Keys & OAuth** section to enter in n8n. Refer to [Get the Client ID and Client Secret for your app](https://developer.intuit.com/app/developer/qbo/docs/get-started/get-client-id-and-client-secret) for more information.

Refer to Intuit's [Set up OAuth 2.0 documentation](https://developer.intuit.com/app/developer/qbo/docs/develop/authentication-and-authorization/oauth-2.0) for more information on the entire process.

Environment selection

If you're creating a new app from scratch, start with the **Sandbox** environment. Production apps need to fulfill all Intuit's requirements. Refer to Intuit's [Publish your app documentation](https://developer.intuit.com/app/developer/qbo/docs/go-live/publish-app) for more information.

---

## MySQL credentials

**URL:** llms-txt#mysql-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using database connection

You can use these credentials to authenticate the following nodes:

- [MySQL](../../app-nodes/n8n-nodes-base.mysql/)
- [Agent](../../cluster-nodes/root-nodes/n8n-nodes-langchain.agent/)

The Agent node doesn't support SSH tunnels.

Create a user account on a [MySQL](https://www.mysql.com/) server database.

## Supported authentication methods

- Database connection

Refer to [MySQL's documentation](https://dev.mysql.com/doc/refman/8.3/en/) for more information about the service.

## Using database connection

To configure this credential, you'll need:

- The server **Host**: The database's host name or IP address.
- The **Database** name.
- A **User** name.
- A **Password** for that user.
- The **Port** number used by the MySQL server.
- **Connect Timeout**: The number of milliseconds during the initial database connection before a timeout occurs.
- **SSL**: If your database is using SSL, turn this on and add details for the SSL certificate.
- **SSH Tunnel**: Choose whether to connect over an SSH tunnel. An SSH tunnel lets un-encrypted traffic pass over an encrypted connection and enables authorized remote access to servers protected from outside connections by a firewall.

To set up your database connection credential:

1. Enter your database's hostname as the **Host** in your n8n credential. Run this query to confirm the hostname:

1. Enter your database's name as the **Database** in your n8n credential. Run this query to confirm the database name:

1. Enter the username of a **User** in the database. This user should have appropriate permissions for whatever actions you want n8n to perform.

1. Enter the **Password** for that user.

1. Enter the **Port** number used by the MySQL server (default is `3306`). Run this query to confirm the port number:

1. Enter the **Connect Timeout** you'd like the node to use. The Connect Timeout is the number of milliseconds during the initial database connection the node should wait before timing out. n8n defaults to `10000` which is the default used by MySQL of 10 seconds. If you want to match your database's `connect_timeout`, run this query to get it, then multiply by 1000 before entering it in n8n:

1. If your database uses SSL and you'd like to use **SSL** for the connection, turn this option on in the credential. If you turn it on, enter the information from your MySQL SSL certificate in these fields:

1. Enter the `ca.pem` file contents in the **CA Certificate** field.
   1. Enter the `client-key.pem` file contents in the **Client Private Key** field.
   1. Enter the `client-cert.pem` file contents in the **Client Certificate** field.

1. If you want to use **SSH Tunnel** for the connection, turn this option on in the credential. Otherwise, skip it. If you turn it on:

1. Select the **SSH Authenticate with** to set the SSH Tunnel type to build:
      - Select **Password** if you want to connect to SSH using a password.
      - Select **Private Key** if you want to connect to SSH using an identity file (private key) and a passphrase.
   1. Enter the **SSH Host**. n8n uses this host to create the SSH URI formatted as: `[user@]host:port`.
   1. Enter the **SSH Port**. n8n uses this port to create the SSH URI formatted as: `[user@]host:port`.
   1. Enter the **SSH User** to connect with. n8n uses this user to create the SSH URI formatted as: `[user@]host:port`.
   1. If you selected **Password** for **SSH Authenticate with**, add the **SSH Password**.
   1. If you selected **Private Key** for **SSH Authenticate with**:
      1. Add the contents of the **Private Key** or identity file used for SSH. This is the same as using the `ssh-identity-file` option with the `shell-connect()` command in MySQL.
      1. If the **Private Key** was created with a passphrase, enter that **Passphrase**. This is the same as using the `ssh-identity-pass` option with the `shell-connect()` command in MySQL. If the **Private Key** has no passphrase, leave this field blank.

Refer to [MySQL | Creating SSL and RSA Certificates and Keys](https://dev.mysql.com/doc/refman/8.0/en/creating-ssl-rsa-files.html) for more information on working with SSL certificates in MySQL. Refer to [MySQL | Using an SSH Tunnel](https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-connection-ssh.html) for more information on working with SSH tunnels in MySQL.

**Examples:**

Example 1 (unknown):
```unknown
SHOW VARIABLES WHERE Variable_name = 'hostname';
```

Example 2 (unknown):
```unknown
SHOW DATABASES;
```

Example 3 (unknown):
```unknown
SHOW VARIABLES WHERE Variable_name = 'port';
```

Example 4 (unknown):
```unknown
SHOW VARIABLES WHERE Variable_name = 'connect_timeout';
```

---

## Malcore credentials

**URL:** llms-txt#malcore-credentials

**Contents:**
- Prerequisites
- Related resources
- Using API key

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

Create a [Malcore](https://app.malcore.io/register) account.

Refer to [Malcore's API documentation](https://malcore.readme.io/reference/) for more information about authenticating with the service.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/malcore/) on n8n's website.

To configure this credential, you'll need:

- An **API Key**: Get an API Key from your **Account > API**.

Refer to [Using the Malcore API](https://support.malcore.io/hc/en-au/articles/17711707070617-Using-the-Malcore-API) for more information.

---

## Raindrop credentials

**URL:** llms-txt#raindrop-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using OAuth

You can use these credentials to authenticate the following nodes:

- [Raindrop](../../app-nodes/n8n-nodes-base.raindrop/)

Create a [Raindrop](https://raindrop.io/) account.

## Supported authentication methods

Refer to [Raindrop's API documentation](https://developer.raindrop.io/) for more information about the service.

To configure this credential, you'll need:

- A **Client ID**
- A **Client Secret**

Generate both by creating a Raindrop app.

To create an app, go to **Settings >** [**Integrations**](https://app.raindrop.io/settings/integrations) and select **+ Create new app** in the **For Developers** section.

Use these settings for your app:

- Copy the **OAuth Redirect URL** from n8n and add it as a **Redirect URI** in your app.
- Copy the **Client ID** and **Client Secret** from the Raindrop app and enter them in your n8n credential.

---

## Zoom credentials

**URL:** llms-txt#zoom-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API JWT token
- Using OAuth2

You can use these credentials to authenticate the following nodes:

- [Zoom](../../app-nodes/n8n-nodes-base.zoom/)

Create a [Zoom](https://zoom.us/) account. Your account must have one of the following permissions:

- Account owner
- Account admin
- Zoom for developers role

## Supported authentication methods

- API JWT token
- OAuth2

API JWT token deprecation

Zoom removed support for JWT access tokens in June 2023. You must use OAuth2 for all new credentials.

Refer to [Zoom's API documentation](https://developers.zoom.us/docs/api/) for more information about the service.

## Using API JWT token

This authentication method has been fully deprecated by Zoom. Don't create new credentials with it.

To configure this credential, you'll need:

- A **JWT token**: To create a JWT token, create a new JWT app in the [Zoom App Marketplace](https://marketplace.zoom.us/).

To configure this credential, you'll need:

- A **Client ID**: Generated when you create an OAuth app on the Zoom App Marketplace.
- A **Client Secret**: Generated when you create an OAuth app.

To generate your **Client ID** and **Client Secret**, [create an OAuth app](https://developers.zoom.us/docs/integrations/create/).

Use these settings for your OAuth app:

- Select **User-managed app** for **Select how the app is managed**.
- Copy the **OAuth Callback URL** from n8n and enter it as an **OAuth Redirect URL** in Zoom.
- If your n8n credential displays a **Whitelist URL**, also enter that URL as a an **OAuth Redirect URL**.
- Enter **Scopes** for the scopes you plan to use. For all functionality in the [Zoom](../../app-nodes/n8n-nodes-base.zoom/) node, select:
  - `meeting:read`
  - `meeting:write`
  - Refer to [OAuth scopes | Meeting scopes](https://developers.zoom.us/docs/integrations/oauth-scopes/#meeting-scopes) for more information on meeting scopes.
- Copy the **Client ID** and **Client Secret** provided in the Zoom app and enter them in your n8n credential.

---

## Cortex credentials

**URL:** llms-txt#cortex-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Cortex](../../app-nodes/n8n-nodes-base.cortex/)

Install [Cortex](https://docs.strangebee.com/cortex/installation-and-configuration/) on your server.

## Supported authentication methods

Refer to [Cortex's API documentation](https://docs.strangebee.com/cortex/api/api-guide/) for more information about the service.

To configure this credential, you'll need:

- An **API Key**: Refer to the [Cortex API Authentication documentation](https://docs.strangebee.com/cortex/api/api-guide/#authentication) for detailed instructions on generating API keys.
- The URL/Server Address for your **Cortex Instance** (defaults to `http://<your_server_address>:9001/`)

---

## DeepSeek credentials

**URL:** llms-txt#deepseek-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Chat DeepSeek](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatdeepseek/)

Create a [DeepSeek](https://platform.deepseek.com/sign_up) account.

## Supported authentication methods

Refer to [DeepSeek's API documentation](https://api-docs.deepseek.com/api/deepseek-api) for more information about the service.

To configure this credential, you'll need:

To generate your API Key:

1. Login to your DeepSeek account or [create](https://platform.deepseek.com/sign_up) an account.
1. Open your [API keys](https://platform.deepseek.com/api_keys) page.
1. Select **Create new secret key** to create an API key, optionally naming the key.
1. Copy your key and add it as the **API Key** in n8n.

Refer to the [Your First API Call](https://api-docs.deepseek.com/) page for more information.

---

## Qualys credentials

**URL:** llms-txt#qualys-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using basic auth

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

Create a [Qualys](https://www.qualys.com/) user account with any user role except Contact.

## Supported authentication methods

Refer to [Qualys's documentation](https://qualysguard.qg2.apps.qualys.com/qwebhelp/fo_portal/api_doc/index.htm) for more information about the service.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/qualys/) on n8n's website.

To configure this credential, you'll need:

- A **Username**
- A **Password**
- A **Requested With** string: Enter a user description, like a user agent, or keep the default `n8n application`. This sets the required `X-Requested-With` header.

---

## Harvest credentials

**URL:** llms-txt#harvest-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API Access Token
- Using OAuth2

You can use these credentials to authenticate the following nodes:

- [Harvest](../../app-nodes/n8n-nodes-base.harvest/)

Create a [Harvest](https://www.getharvest.com/) account.

## Supported authentication methods

- API access token
- OAuth2

Refer to [Harvest's API documentation](https://help.getharvest.com/api-v2/) for more information about the service.

## Using API Access Token

To configure this credential, you'll need:

- A Personal **Access Token**: Refer to the [Harvest Personal Access Token Authentication documentation](https://help.getharvest.com/api-v2/authentication-api/authentication/authentication/#personal-access-tokens) for instructions on creating a personal access token.

Note for n8n Cloud users

Cloud users don't need to provide connection details. Select **Connect my account** to connect through your browser.

If you need to configure OAuth2 from scratch or need more detail on what's happening in the OAuth web flow, refer to the instructions in the [Harvest OAuth2 documentation](https://help.getharvest.com/api-v2/authentication-api/authentication/authentication/#oauth2-application) to set up OAuth.

---

## Allows usage of all builtin modules

**URL:** llms-txt#allows-usage-of-all-builtin-modules

export NODE_FUNCTION_ALLOW_BUILTIN=*

---

## Dynatrace credentials

**URL:** llms-txt#dynatrace-credentials

**Contents:**
- Prerequisites
- Related resources
- Using Access Token

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

Create a [Dynatrace](https://www.dynatrace.com/signup/) account.

Refer to [Dynatrace's API documentation](https://docs.dynatrace.com/docs/dynatrace-api) for more information about authenticating with the service.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/dynatrace-api/) on n8n's website.

## Using Access Token

To configure this credential, you'll need:

- An **Access Token**

Refer to [Access Tokens](https://docs.dynatrace.com/docs/manage/identity-access-management/access-tokens-and-oauth-clients/access-tokens) on Dynatrace's website for more information.

---

## xAI credentials

**URL:** llms-txt#xai-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Chat xAI Grok](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatxaigrok/)

Create an [xAI](https://accounts.x.ai/sign-up) account.

## Supported authentication methods

Refer to [xAI's API documentation](https://docs.x.ai/docs/api-reference) for more information about the service.

To configure this credential, you'll need:

- An **API Key**: You can create a new API key on the [xAI Console API Keys page](https://console.x.ai/team/default/api-keys).

Refer to the [The Hitchhiker's Guide to Grok | xAI](https://docs.x.ai/docs/tutorial) for more information.

---

## Mailcheck credentials

**URL:** llms-txt#mailcheck-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API Key

You can use these credentials to authenticate the following nodes:

- [Mailcheck](../../app-nodes/n8n-nodes-base.mailcheck/)

Create a [Mailcheck](https://mailcheck.co/) account.

## Supported authentication methods

Refer to [Mailcheck's API documentation](https://app.mailcheck.co/docs?from=docs) for more information about the service.

To configure this credential, you'll need:

- An **API Key**: Generate an API Key in the API section of your dashboard. Refer to [Mailcheck's How to create an API key documentation](https://mailcheck.co/create-api-key) for detailed instructions.

---

## Ghost credentials

**URL:** llms-txt#ghost-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using Admin API key
- Using Content API key

You can use these credentials to authenticate the following nodes:

- [Ghost](../../app-nodes/n8n-nodes-base.ghost/)

Create a [Ghost](https://ghost.org/) account.

## Supported authentication methods

- Admin API key
- Content API key

The keys are generated following the same steps, but the authorization flows and key format are different, so n8n stores the credentials separately. The Content API uses an API key; the Admin API uses an API key to generate a token for authentication.

Refer to Ghost's [Admin API documentation](https://ghost.org/docs/admin-api/) for more information about the Admin API service. Refer to Ghost's [Content API documentation](https://ghost.org/docs/content-api/) for more information about the Content API service.

## Using Admin API key

To configure this credential, you'll need:

- The **URL** of your Ghost admin domain. Your [admin domain](https://ghost.org/docs/admin-api/#base-url) can be different to your main domain and may include a subdirectory. All Ghost(Pro) blogs have a `*.ghost.io` domain as their admin domain and require https.
- An **API Key**: To generate a new API key, create a new Custom Integration. Refer to the [Ghost Admin API Token Authentication Key documentation](https://ghost.org/docs/admin-api/#token-authentication) for more detailed instructions. Copy the **Admin API Key** and use this as the **API Key** in the Ghost Admin n8n credential.

## Using Content API key

To configure this credential, you'll need:

- The **URL** of your Ghost admin domain. Your [admin domain](https://ghost.org/docs/content-api/#url) can be different to your main domain and may include a subdirectory. All Ghost(Pro) blogs have a `*.ghost.io` domain as their admin domain and require https.
- An **API Key**: To generate a new API key, create a new Custom Integration. Refer to the [Ghost Content API Key documentation](https://ghost.org/docs/content-api/#key) for more detailed instructions. Copy the **Content API Key** and use this as the **API Key** in the Ghost Content n8n credential.

---

## PostHog credentials

**URL:** llms-txt#posthog-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [PostHog](../../app-nodes/n8n-nodes-base.posthog/)

Create a [PostHog](https://posthog.com/) account or host PostHog on your server.

## Supported authentication methods

Refer to [PostHog's API documentation](https://posthog.com/docs/api) for more information about the service.

To configure this credential, you'll need:

- The API **URL**: Enter the correct domain for your API requests:
  - On US Cloud, use `https://us.i.posthog.com` for public POST-only endpoints or `https://us.posthog.com` for private endpoints.
  - On EU Cloud, use `https://eu.i.posthog.com` for public POST-only endpoints or `https://eu.posthog.com` for private endpoints.
  - For self-hosted instances, use your self-hosted domain.
  - Confirm yours by checking your PostHog instance URL.
- An **API Key**: The API key you use depends on whether you're accessing public or private endpoints:
  - For public POST-only endpoints, use a [Project API key](https://app.posthog.com/project/settings) from your project's **General** Settings.
  - For private endpoints, use a [Personal API key](https://app.posthog.com/settings/user-api-keys) from your User account's **Personal API Keys** Settings. Refer to [How to obtain a personal API key](https://posthog.com/docs/api#private-endpoint-authentication) for more information.

---

## Yahoo IMAP credentials

**URL:** llms-txt#yahoo-imap-credentials

**Contents:**
- Prerequisites
- Set up the credential

Follow these steps to configure the IMAP credentials with a Yahoo account.

To follow these instructions, you must first generate an app password:

1. Log in to your Yahoo account [Security page](https://login.yahoo.com/account/security).
1. Select **Generate app password** or **Generate and manage app passwords**.
1. Select **Get Started**.
1. Enter an **App name** for your new app password, like `n8n credential`.
1. Select **Generate password**.
1. Copy the generated app password. You'll use this in your n8n credential.

Refer to Yahoo's [Generate and manage 3rd-party app passwords](https://help.yahoo.com/kb/generate-manage-third-party-passwords-sln15241.html) for more information.

## Set up the credential

To set up the IMAP credential with a Yahoo Mail account, use these settings:

1. Enter your Yahoo email address as the **User**.
1. Enter the app password you generated above as the **Password**.
1. Enter `imap.mail.yahoo.com` as the **Host**.
1. Keep the default **Port** number of `993`. Check with your email administrator if this port doesn't work.
1. Turn on the **SSL/TLS** toggle.
1. Check with your email administrator about whether to **Allow Self-Signed Certificates**.

Refer to [Set up IMAP for Yahoo mail account](https://help.yahoo.com/kb/sln4075.html) for more information.

---

## SearXNG credentials

**URL:** llms-txt#searxng-credentials

**Contents:**
- Supported authentication methods
- Related resources
- Using API URL

You can use these credentials to authenticate the following nodes:

- [SearXNG Tool](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.toolsearxng/)

## Supported authentication methods

Refer to [SearXNG's documentation](https://docs.searxng.org/index.html) for more information about the service.

To configure this credential, you'll need an instance of SearXNG running at an URL that's accessible from n8n:

- **API URL**: The URL of the SearXNG instance you want to connect to.

Refer to [SearXNG's Administrator documentation](https://docs.searxng.org/admin/index.html) for more information about running the service.

---

## WordPress credentials

**URL:** llms-txt#wordpress-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using basic auth
  - Enable two-step authentication
  - Create an application password
  - Set up the credential

You can use these credentials to authenticate the following nodes:

- [WordPress](../../app-nodes/n8n-nodes-base.wordpress/)

- Create a [WordPress](https://wordpress.com/) account or deploy WordPress on a server.

## Supported authentication methods

Refer to [WordPress's API documentation](https://developer.wordpress.com/docs/api/) for more information about the service.

To configure this credential, you'll need:

- Your WordPress **Username**
- A WordPress application **Password**
- Your **WordPress URL**
- Decide whether to **Ignore SSL Issues**

Using this credential involves three steps:

1. [Enable two-step authentication](#enable-two-step-authentication).
1. [Create an application password](#create-an-application-password).
1. [Set up the credential](#set-up-the-credential).

Refer to the detailed instructions below for each step.

### Enable two-step authentication

To generate an application password, you must first enable Two-Step Authentication in WordPress. If you've already done this, [skip to the next section](#create-an-application-password).

1. Open your WordPress [profile](https://wordpress.com/me).
1. Select **Security** from the left menu.
1. Select **Two-Step Authentication**. The **Two-Step Authentication** page opens.
1. If Two-Step Authentication isn't enabled, you must enable it.
1. Choose whether to enable it using an authenticator app or SMS codes and follow the on-screen instructions.

Refer to WordPress's [Enable Two-Step Authentication](https://wordpress.com/support/security/two-step-authentication/) for detailed instructions.

### Create an application password

With Two-Step Authentication enabled, you can now generate an application password:

1. From the WordPress **Security >** [**Two-Step Authentication**](https://wordpress.com/me/security/two-step) page, select **+ Add new application password** in the **Application passwords** section.
1. Enter an **Application name**, like `n8n integration`.
1. Select **Generate Password**.
1. Copy the password it generates. You'll use this in your n8n credential.

### Set up the credential

Congratulations! You're now ready to set up your n8n credential:

1. Enter your WordPress **Username** in your n8n credential.
1. Enter the application password you copied above as the **Password** in your n8n credential.
1. Enter the URL of your WordPress site as the **WordPress URL**.
1. Optional: Use the **Ignore SSL Issues** to choose whether you want the n8n credential to connect even if SSL certificate validation fails (turned on) or whether to respect SSL certificate validation (turned off).

---

## Spotify credentials

**URL:** llms-txt#spotify-credentials

**Contents:**
- Supported authentication methods
- Related resources
- Using OAuth2

You can use these credentials to authenticate the following nodes:

- [Spotify](../../app-nodes/n8n-nodes-base.spotify/)

## Supported authentication methods

Refer to [Spotify's Web API documentation](https://developer.spotify.com/documentation/web-api) for more information about the service.

Note for n8n Cloud users

Cloud users don't need to provide connection details. Select **Connect my account** to connect through your browser.

If you're [self-hosting](../../../../hosting/) n8n, you'll need a [Spotify Developer](https://developer.spotify.com/) account so you can create a Spotify app:

1. Open the [Spotify developer dashboard](https://developer.spotify.com/dashboard).
1. Select **Create an app**.
1. Enter an **App name**, like `n8n integration`.
1. Enter an **App description**.
1. Copy the **OAuth Redirect URL** from n8n and enter it as the **Redirect URI** in your Spotify app.
1. Check the box to agree to the Spotify Terms of Service and Branding Guidelines.
1. Select **Create**. The **App overview** page opens.
1. Copy the **Client ID** and enter it in your n8n credential.
1. Copy the **Client Secret** and enter it in your n8n credential.
1. Select **Connect my account** and follow the on-screen prompts to finish authorizing the credential.

Refer to [Spotify Apps](https://developer.spotify.com/documentation/web-api/concepts/apps) for more information.

---

## Quick Base credentials

**URL:** llms-txt#quick-base-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Quick Base](../../app-nodes/n8n-nodes-base.quickbase/)

Create a [Quick Base](https://www.quickbase.com/) account.

## Supported authentication methods

Refer to [Quick Base's API documentation](https://developer.quickbase.com/auth/) for more information about the service.

To configure this credential, you'll need:

- A **Hostname**: The string of characters located between `https://` and `/db` in your Quick Base URL.
- A **User Token**: To generate a token, select your **Profile > My preferences > My User Information > Manage my user tokens**. Refer to [Creating and using user tokens](https://helpv2.quickbase.com/hc/en-us/articles/4570374095124-Creating-and-using-user-tokens) for detailed instructions.

---

## Sendy credentials

**URL:** llms-txt#sendy-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API Key

You can use these credentials to authenticate the following nodes:

- [Sendy](../../app-nodes/n8n-nodes-base.sendy/)

Host a [Sendy](https://sendy.co/get-started) application.

## Supported authentication methods

Refer to [Sendy's API documentation](https://sendy.co/api) for more information about the service.

To configure this credential, you'll need:

- A **URL**: The URL of your Sendy application.
- An **API Key**: Get your API key from your user profile > **Settings > Your API Key**.

---

## Git credentials

**URL:** llms-txt#git-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using basic auth

You can use these credentials to authenticate the following nodes:

- [Git](../../core-nodes/n8n-nodes-base.git/)

Create an account on [GitHub](https://github.com), [GitLab](https://about.gitlab.com/), or similar platforms for use with [Git](https://git-scm.com).

## Supported authentication methods

Refer to [Git's documentation](https://git-scm.com/doc) for more information about the service.

To configure this credential, you'll need:

- A **Username** for GitHub, GitLab, or a similar platform
- A **Password** for GitHub, GitLab, or a similar platform

---

## npm credentials

**URL:** llms-txt#npm-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API access token

You can use these credentials to authenticate the following nodes:

- [npm](../../app-nodes/n8n-nodes-base.npm/)

Create an [npm](https://www.npmjs.com/) account.

## Supported authentication methods

Refer to [npm's external integrations documentation](https://docs.npmjs.com/integrations/integrating-npm-with-external-services) for more information about the service.

## Using API access token

To configure this credential, you'll need:

- An **Access Token**: Create an access token by selecting **Access Tokens** from your profile menu. Refer to [npm's Creating and viewing access tokens documentation](https://docs.npmjs.com/creating-and-viewing-access-tokens) for more detailed instructions.
- A **Registry URL**: If you're using a custom npm registry, update the **Registry URL** to that custom registry. Otherwise, keep the public registry value.

---

## Pushover credentials

**URL:** llms-txt#pushover-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API Key

You can use these credentials to authenticate the following nodes:

- [Pushover](../../app-nodes/n8n-nodes-base.pushover/)

Create a [Pushover](https://pushover.net) account.

## Supported authentication methods

Refer to [Pushover's API documentation](https://pushover.net/api) for more information about authenticating with the service.

To configure this credential, you'll need:

- An **API Key**: Generated when you [register an application](https://pushover.net/apps/build). Refer to [Application Registration](https://pushover.net/api#registration) for more information.

---

## DHL credentials

**URL:** llms-txt#dhl-credentials

**Contents:**
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [DHL](../../app-nodes/n8n-nodes-base.dhl/)

## Supported authentication methods

Refer to [DHL's Developer documentation](https://support-developer.dhl.com/support/home) for more information about the service.

To configure this credential, you'll need a [DHL Developer](https://developer.dhl.com/user/register) account and:

To get an API key, create an app:

1. In the DHL Developer portal, select the user icon to open your [User Apps](https://developer.dhl.com/user/apps).
1. Select **+ Create App**.
1. Enter an **App name**, like `n8n integration`.
1. Enter a **Machine name**, like `n8n_integration`.
1. In **SELECT APIs**, select **Shipment Tracking - Unified**. The API is added to the **Add API to app** section.
1. In the **Add API to app** section, select the **+** next to the **Shipment Tracking - Unified** API.
1. Select **Create App**. The **Apps** page opens, displaying the app you just created.
1. Select the app you just created to view its details.
1. Select **Show key** next to **API Key**.
1. Copy the **API Key** and enter it in your n8n credential.

Refer to [How to create an app?](https://support-developer.dhl.com/support/solutions/articles/47001177011-how-to-create-an-app-) for more information.

---

## Rapid7 InsightVM credentials

**URL:** llms-txt#rapid7-insightvm-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

Create a [Rapid7 InsightVM](https://www.rapid7.com/products/insightvm/) account.

## Supported authentication methods

Refer to [Rapid7 InsightVM's API documentation](https://help.rapid7.com/insightvm/en-us/api/integrations.html) for more information about the service.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/rapid7-insight-platform/) on n8n's website.

To configure this credential, you'll need a [Rapid7 InsightVM](https://www.rapid7.com/products/insightvm/) account and:

- A **URL**: The API endpoint URL where the resource or data you are requesting lives. You can find more information about the expected format in the [endpoint section of the Rapid7's API overview](https://docs.rapid7.com/insight/api-overview/#endpoint).
- An **API Key**: Refer to [Rapid7's Managing Platform API Keys documentation](https://docs.rapid7.com/insight/managing-platform-api-keys/) to create an API key.

Refer to [Rapid7 InsightVM's API documentation](https://help.rapid7.com/insightvm/en-us/api/integrations.html) for more information about authenticating to the service.

---

## Microsoft credentials

**URL:** llms-txt#microsoft-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using OAuth2
  - Register an application
  - Generate a client secret
  - Service-specific settings
- Common issues
  - Need admin approval

You can use these credentials to authenticate the following nodes:

- [Microsoft Dynamics CRM](../../app-nodes/n8n-nodes-base.microsoftdynamicscrm/)
- [Microsoft Excel](../../app-nodes/n8n-nodes-base.microsoftexcel/)
- [Microsoft Graph Security](../../app-nodes/n8n-nodes-base.microsoftgraphsecurity/)
- [Microsoft OneDrive](../../app-nodes/n8n-nodes-base.microsoftonedrive/)
- [Microsoft Outlook](../../app-nodes/n8n-nodes-base.microsoftoutlook/)
- [Microsoft SharePoint](../../app-nodes/n8n-nodes-base.microsoftsharepoint/)
- [Microsoft Teams](../../app-nodes/n8n-nodes-base.microsoftteams/)
- [Microsoft Teams Trigger](../../trigger-nodes/n8n-nodes-base.microsoftteamstrigger/)
- [Microsoft To Do](../../app-nodes/n8n-nodes-base.microsofttodo/)

- Create a [Microsoft Azure](https://azure.microsoft.com/) account.
- Create at least one user account with access to the appropriate service.
- If a corporate Microsoft Entra account manages the user account, the administrator account has enabled the option “User can consent to apps accessing company data on their behalf” for this user (see the [Microsoft Entra documentation](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/grant-admin-consent)).

## Supported authentication methods

Refer to the linked Microsoft API documentation below for more information about each service's API:

- Dynamics CRM: [Web API](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview)
- Excel: [Graph API](https://learn.microsoft.com/en-us/graph/api/resources/excel)
- Graph Security: [Graph API](https://learn.microsoft.com/en-us/graph/api/overview)
- OneDrive: [Graph API](https://learn.microsoft.com/en-us/onedrive/developer/rest-api/)
- Outlook: [Graph API](https://learn.microsoft.com/en-us/graph/api/resources/mail-api-overview) and [Outlook API](https://learn.microsoft.com/en-us/outlook/rest/reference)
- Teams: [Graph API](https://learn.microsoft.com/en-us/graph/api/resources/teams-api-overview)
- To Do: [Graph API](https://learn.microsoft.com/en-us/graph/todo-concept-overview)

Note for n8n Cloud users

Cloud users don't need to provide connection details. Select **Connect my account** to connect through your browser.

Some Microsoft services require extra information for OAuth2. Refer to [Service-specific settings](#service-specific-settings) for more guidance on those services.

For self-hosted users, there are two main steps to configure OAuth2 from scratch:

1. [Register an application](#register-an-application) with the Microsoft Identity Platform.
1. [Generate a client secret](#generate-a-client-secret) for that application.

Follow the detailed instructions for each step below. For more detail on the Microsoft OAuth2 web flow, refer to [Microsoft authentication and authorization basics](https://learn.microsoft.com/en-us/graph/auth/auth-concepts).

### Register an application

Register an application with the Microsoft Identity Platform:

1. Open the [Microsoft Application Registration Portal](https://aka.ms/appregistrations).
1. Select **Register an application**.
1. Enter a **Name** for your app.
1. In **Supported account types**, select **Accounts in any organizational directory (Any Azure AD directory - Multi-tenant) and personal Microsoft accounts (for example, Skype, Xbox)**.
1. In **Register an application**:
   1. Copy the **OAuth Callback URL** from your n8n credential.
   1. Paste it into the **Redirect URI (optional)** field.
   1. Select **Select a platform** > **Web**.
1. Select **Register** to finish creating your application.
1. Copy the **Application (client) ID** and paste it into n8n as the **Client ID**.

Refer to [Register an application with the Microsoft Identity Platform](https://learn.microsoft.com/en-us/graph/auth-register-app-v2) for more information.

### Generate a client secret

With your application created, generate a client secret for it:

1. On your Microsoft application page, select **Certificates & secrets** in the left navigation.
1. In **Client secrets**, select **+ New client secret**.
1. Enter a **Description** for your client secret, such as `n8n credential`.
1. Select **Add**.
1. Copy the **Secret** in the **Value** column.
1. Paste it into n8n as the **Client Secret**.
1. If you see other fields in the n8n credential, refer to [Service-specific settings](#service-specific-settings) below for guidance on completing those fields.
1. Select **Connect my account** in n8n to finish setting up the connection.
1. Log in to your Microsoft account and allow the app to access your info.

Refer to Microsoft's [Add credentials](https://learn.microsoft.com/en-us/graph/auth-register-app-v2#add-credentials) for more information on adding a client secret.

### Service-specific settings

The following services require extra information for OAuth2:

Dynamics OAuth2 requires information about your Dynamics domain and region. Follow these extra steps to complete the credential:

1. Enter your Dynamics **Domain**.
1. Select the Dynamics data center **Region** you're within.

Refer to the [Microsoft Datacenter regions documentation](https://learn.microsoft.com/en-us/power-platform/admin/new-datacenter-regions) for more information on the region options and corresponding URLs.

#### Microsoft (general)

The general Microsoft OAuth2 also requires you to provide a space-separated list of **Scope**s for this credential.

Refer to [Scopes and permissions in the Microsoft identity platform](https://learn.microsoft.com/en-us/entra/identity-platform/scopes-oidc) for a list of possible scopes.

Outlook OAuth2 supports the credential accessing a user's primary email inbox or a shared inbox. By default, the credential will access a user's primary email inbox. To change this behavior:

1. Turn on **Use Shared Inbox**.
1. Enter the target user's UPN or ID as the **User Principal Name**.

SharePoint OAuth2 requires information about your SharePoint **Subdomain**.

To complete the credential, enter the **Subdomain** part of your SharePoint URL. For example, if your SharePoint URL is `https://tenant123.sharepoint.com`, the subdomain is `tenant123`.

SharePoint requires the following permissions:

Application permissions:

- `Sites.Read.All`
- `Sites.ReadWrite.All`

Delegated permissions:

- `SearchConfiguration.Read.All`
- `SearchConfiguration.ReadWrite.All`

Here are the known common errors and issues with Microsoft OAuth2 credentials.

### Need admin approval

When attempting to add credentials for a Microsoft360 or Microsoft Entra account, users may see a message when following the procedure that this action requires admin approval.

This message will appear when the account attempting to grant permissions for the credential is managed by a Microsoft Entra. In order to issue the credential, the administrator account needs to grant permission to the user (or "tenant") for that application.

The procedure for this is covered in the [Microsoft Entra documentation](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/grant-admin-consent).

---

## Fortinet FortiGate credentials

**URL:** llms-txt#fortinet-fortigate-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API access token

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

Create a [Fortinet FortiGate](https://www.fortinet.com/) account.

## Supported authentication methods

Refer to [Fortinet FortiGate's API documentation](https://docs.fortinet.com/document/fortigate/7.4.3/administration-guide/940602/using-apis) for more information about the service.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/fortinet-fortigate/) on n8n's website.

## Using API access token

To configure this credential, you'll need:

- An API **Access Token**: To generate an access token, create a [REST API administrator](https://docs.fortinet.com/document/fortigate/7.4.3/administration-guide/399023/rest-api-administrator).

Refer to the [Fortinet FortiGate Using APIs documentation](https://docs.fortinet.com/document/fortigate/7.4.3/administration-guide/940602/using-apis) for more information about token-based authentication in FortiGate.

---

## AlienVault credentials

**URL:** llms-txt#alienvault-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

Create an [AlienVault](https://otx.alienvault.com) account.

## Supported authentication methods

Refer to [AlienVault's documentation](https://otx.alienvault.com/api) for more information about the service.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/alienvault/) on n8n's website.

To configure this credential, you'll need:

- An **OTX Key**: Once you have an AlienVault account, the **OTX Key** displays in your **Settings**.

---

## Google Gemini(PaLM) credentials

**URL:** llms-txt#google-gemini(palm)-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using Gemini(PaLM) API key

You can use these credentials to authenticate the following nodes:

- [Embeddings Google Gemini](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsgooglegemini/)
- [Google Gemini](../../app-nodes/n8n-nodes-langchain.googlegemini/)
- [Google Gemini Chat Model](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatgooglegemini/)
- [Embeddings Google PaLM](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsgooglepalm/)

- Create a [Google Cloud](https://cloud.google.com/) account.
- Create a [Google Cloud Platform project](https://developers.google.com/workspace/marketplace/create-gcp-project).

## Supported authentication methods

- Gemini(PaLM) API key

Refer to [Google's Gemini API documentation](https://ai.google.dev/gemini-api/docs) for more information about the service.

View n8n's [Advanced AI](../../../../advanced-ai/) documentation.

## Using Gemini(PaLM) API key

To configure this credential, you'll need:

- The API **Host** URL: Both PaLM and Gemini use the default `https://generativelanguage.googleapis.com`.
- An **API Key**: Create a key in [Google AI Studio](https://aistudio.google.com/apikey).

Custom hosts not supported

The related nodes don't yet support custom hosts or proxies for the API host and must use `https://generativelanguage.googleapis.com`.

To create an API key:

1. Go to the API Key page in Google AI Studio: <https://aistudio.google.com/apikey>.
1. Select **Create API Key**.
1. You can choose whether to **Create API key in new project** or search for an existing Google Cloud project to **Create API key in existing project**.
1. Copy the generated API key and add it to your n8n credential.

---

## BambooHR credentials

**URL:** llms-txt#bamboohr-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API Key

You can use these credentials to authenticate the following node:

- [BambooHR](../../app-nodes/n8n-nodes-base.bamboohr/)

Create a [BambooHR](https://www.bamboohr.com/) account.

## Supported authentication methods

Refer to [BambooHR's API documentation](https://documentation.bamboohr.com/docs/getting-started) for more information about the service.

To configure this credential, you'll need:

- Your BambooHR **Subdomain**: the part between `https://` and `.bamboohr.com`
- A BambooHR **API Key**: Refer to the [Authentication section of BambooHR's Getting Started API documentation](https://documentation.bamboohr.com/docs/getting-started#authentication) for instructions on generating an API key.

---

## Gmail IMAP credentials

**URL:** llms-txt#gmail-imap-credentials

**Contents:**
- Prerequisites
  - Enable 2-step Verification
  - Generate an app password
- Set up the credential

Follow these steps to configure the IMAP credentials with a Gmail account.

To follow these instructions, you must first:

1. [Enable 2-step Verification](#enable-2-step-verification) on your Gmail account.
1. [Generate an app password](#generate-an-app-password).

### Enable 2-step Verification

To enable 2-step Verification:

1. Log in to your [Google Account](https://myaccount.google.com/).
1. Select **Security** from the left navigation.
1. Under **How you sign in to Google**, select **2-Step Verification**.
   - If 2-Step Verification is already enabled, skip to the next section.
1. Select **Get started**.
1. Follow the on-screen steps to configure 2-Step Verification.

Refer to [Turn on 2-step Verification](https://support.google.com/accounts/answer/185839) for more information.

If you can't turn on 2-step Verification, check with your email administrator.

### Generate an app password

To generate an app password:

1. In your Google account, go to [App passwords](https://myaccount.google.com/apppasswords).
1. Enter an **App name** for your new app password, like `n8n credential`.
1. Select **Create**.
1. Copy the generated app password. You'll use this in your n8n credential.

Refer to Google's [Sign in with app passwords documentation](https://support.google.com/accounts/answer/185833?hl=en) for more information.

## Set up the credential

To set up the IMAP credential with a Gmail account, use these settings:

1. Enter your Gmail email address as the **User**.
1. Enter the app password you generated above as the **Password**.
1. Enter `imap.gmail.com` as the **Host**.
1. For the **Port**, keep the default port number of `993`. Check with your email administrator if this port doesn't work.
1. Turn on the **SSL/TLS** toggle.
1. Check with your email administrator about whether to **Allow Self-Signed Certificates**.

Refer to [Add Gmail to another client](https://support.google.com/mail/answer/7126229?hl=en) for more information. You may need to **Enable IMAP** if you're using a personal Google account before June 2024.

---

## IMAP credentials

**URL:** llms-txt#imap-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using user account
  - Provider instructions
  - My provider isn't listed

You can use these credentials to authenticate the following nodes:

- [IMAP Email](../../core-nodes/n8n-nodes-base.emailimap/)

Create an email account on a service with IMAP support.

## Supported authentication methods

Internet Message Access Protocol (IMAP) is a standard protocol for receiving email. Most email providers offer instructions on setting up their service with IMAP; refer to your provider's IMAP instructions.

## Using user account

To configure this credential, you'll need:

- A **User** name: The email address you're retrieving email for.
- A **Password**: Either the password you use to check email or an app password. Your provider will tell you whether to use your own password or to generate an app password.
- A **Host**: The IMAP host address for your email provider, often formatted as `imap.<provider>.com`. Check with your provider.
- A **Port** number: The default is port `993`. Use this port unless your provider or email administrator tells you to use something different.

Choose whether to use **SSL/TLS** and whether to **Allow Self-Signed Certificates**.

### Provider instructions

Refer to the quickstart guides for these common email providers.

Refer to [Gmail](gmail/).

Refer to [Outlook.com](outlook/).

Refer to [Yahoo](yahoo/).

### My provider isn't listed

If your email provider isn't listed here, search for their `IMAP settings` or `IMAP instructions`.

---

## Dropcontact credentials

**URL:** llms-txt#dropcontact-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Dropcontact](../../app-nodes/n8n-nodes-base.dropcontact/)

Create a developer account in [Dropcontact](https://app.dropcontact.com/signup).

## Supported authentication methods

Refer to [Dropcontact's API documentation](https://developer.dropcontact.com/) for more information about the service.

To configure this credential, you'll need:

- An **API Key**: To view your API key in Dropcontact, go to [**API**](https://app.dropcontact.com/api). Refer to the [Dropcontact API key documentation](https://support.dropcontact.com/article/237-how-to-use-the-dropcontact-api-key) for more information.

---

## LDAP credentials

**URL:** llms-txt#ldap-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using LDAP server details

You can use these credentials to authenticate the following nodes:

- [LDAP](../../core-nodes/n8n-nodes-base.ldap/)

Create a server directory using Lightweight Directory Access Protocol (LDAP).

Some common LDAP providers include:

- [Jumpcloud](https://jumpcloud.com/blog/how-to-connect-your-application-to-ldap)
- [Azure ADDS](https://learn.microsoft.com/en-us/azure/active-directory-domain-services/tutorial-configure-ldaps)
- [Okta](https://help.okta.com/en-us/Content/Topics/Directory/LDAP-interface-connection-settings.htm)

## Supported authentication methods

- LDAP server details

Refer to your LDAP provider's own documentation for detailed information.

For general LDAP information, refer to [Basic LDAP concepts](https://ldap.com/basic-ldap-concepts/) for a basic overview and [The LDAP Bind Operation](https://ldap.com/the-ldap-bind-operation/) for information on how the bind operation and authentication work.

## Using LDAP server details

To configure this credential, you'll need:

- The **LDAP Server Address**: Use the IP address or domain of your LDAP server.
- The **LDAP Server Port**: Use the number of the port used to connect to the LDAP server.
- The **Binding DN**: Use the Binding Distinguished Name (Bind DN) for your LDAP server. This is the user account the credential should log in as. If you're using Active Directory, this may look something like `cn=administrator, cn=Users, dc=n8n, dc=io`. Refer to your LDAP provider's documentation for more information on identifying this DN and the related password.
- The **Binding Password**: Use the password for the **Binding DN** user.
- Select the **Connection Security**: Options include:
  - `None`
  - `TLS`
  - `STARTTLS`
- *Optional:* Enter a numeric value in seconds to set a **Connection Timeout**.

---

## Strapi credentials

**URL:** llms-txt#strapi-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API user account
  - Configure a role
  - Create a user account
- Using API token

You can use these credentials to authenticate the following nodes:

- [Strapi](../../app-nodes/n8n-nodes-base.strapi/)

Create a [Strapi](https://strapi.io/) admin account with:

- Access to an existing Strapi project.
- At least one collection type within that project.
- Published data within that collection type.

Refer to the Strapi developer [Quick Start Guide](https://docs.strapi.io/dev-docs/quick-start) for more information.

## Supported authentication methods

- API user account: Requires a user account with appropriate content permissions.
- API token: Requires an admin account.

Refer to [Strapi's documentation](https://docs.strapi.io/dev-docs/api/rest) for more information about the service.

## Using API user account

To configure this credential, you'll need:

- A user **Email**: Must be for a user account, not an admin account. Refer to the more detailed instructions below.
- A user **Password**: Must be for a user account, not an admin account. Refer to the more detailed instructions below.
- The **URL**: Use the public URL of your Strapi server, defined in `./config/server.js` as the `url` parameter. Strapi recommends using an absolute URL.
  - For Strapi Cloud projects, use the URL of your Cloud project, for example: `https://my-strapi-project-name.strapiapp.com`
- The **API Version**: Select the version of the API you want your calls to use. Options include:
  - **Version 3**
  - **Version 4**

In Strapi, the configuration involves two steps:

1. [Configure a role](#configure-a-role).
1. [Create a user account](#create-a-user-account).

Refer to the more detailed instructions below for each step.

For API access, use the Users & Permissions Plugin in **Settings > Users & Permissions Plugin**.

Refer to [Configuring Users & Permissions Plugin](https://docs.strapi.io/user-docs/settings/configuring-users-permissions-plugin-settings) for more information on the plugin. Refer to [Configuring end-user roles](https://docs.strapi.io/user-docs/users-roles-permissions/configuring-end-users-roles) for more information on roles.

For the n8n credential, the user must have a role that grants them API permissions on the collection type. For the role, you can either:

- Update the default **Authenticated** role to include the permissions and assign the user to that role. Refer to [Configuring role's permissions](https://docs.strapi.io/user-docs/users-roles-permissions/configuring-end-users-roles#configuring-roles-permissions) for more information.
- Create a new role to include the permissions and assign the user to that role. Refer to [Creating a new role](https://docs.strapi.io/user-docs/users-roles-permissions/configuring-end-users-roles#creating-a-new-role) for more information.

For either option, once you open the role:

1. Go to the **Permissions** section.
1. Open the section for the relevant collection type.
1. Select the permissions for the collection type that the role should have. Options include:
   - `create` (POST)
   - `find` and `findone` (GET)
   - `update` (PUT)
   - `delete` (DELETE)
1. Repeat for all relevant collection types.
1. Save the role.

Refer to [Endpoints](https://docs.strapi.io/dev-docs/api/rest#endpoints) for more information on the permission options.

### Create a user account

Now that you have an appropriate role, create an end-user account and assign the role to it:

1. Go to **Content Manager > Collection Types > User**.
1. Select **Add new entry**.
1. Fill in the user details. The n8n credential requires these fields, though your Strapi project may have more custom required fields:
   - **Username**: Required for all Strapi users.
   - **Email**: Enter in Strapi and use as the **Email** in the n8n credential.
   - **Password**: Enter in Strapi and use as the **Password** in the n8n credential.
   - **Role**: Select the role you set up in the previous step.

Refer to [Managing end-user accounts](https://docs.strapi.io/user-docs/users-roles-permissions/managing-end-users) for more information.

To configure this credential, you'll need:

- An **API Token**: Create an API token from **Settings > Global Settings > API Tokens**. Refer to Strapi's [Creating a new API token documentation](https://docs.strapi.io/user-docs/settings/API-tokens#creating-a-new-api-token) for more details and information on regenerating API tokens.

API tokens permission

If you don't see the **API tokens** option in **Global settings**, your account doesn't have the **API tokens > Read** permission.

- The **URL**: Use the public URL of your Strapi server, defined in `./config/server.js` as the `url` parameter. Strapi recommends using an absolute URL.

- For Strapi Cloud projects, use the URL of your Cloud project, for example: `https://my-strapi-project-name.strapiapp.com`

- The **API Version**: Select the version of the API you want your calls to use. Options include:

- **Version 3**
  - **Version 4**

---

## Imperva WAF credentials

**URL:** llms-txt#imperva-waf-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

Create an [Imperva WAF](https://www.imperva.com/products/web-application-firewall-waf/) account.

## Supported authentication methods

Refer to [Imperva WAF's documentation](https://docs.imperva.com/bundle/api-docs/page/api/authentication.htm) for more information about the service.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/imperva-waf/) on n8n's website.

To configure this credential, you'll need:

- An **API ID**
- An **API Key**

Refer to [Imperva WAF's API Key Management documentation](https://docs.imperva.com/bundle/cloud-application-security/page/settings/api-keys.htm) for instructions on generating and viewing API Keys and IDs.

---

## TheHive 5 credentials

**URL:** llms-txt#thehive-5-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes with TheHive 5.

- [TheHive 5](../../app-nodes/n8n-nodes-base.thehive5/)

TheHive and TheHive 5

n8n provides two nodes for TheHive. Use these credentials with TheHive 5 node. If you're using TheHive node for TheHive 3 or TheHive 4, use [TheHive credentials](../thehive/).

Install [TheHive 5](https://docs.strangebee.com/thehive/download/) on your server.

## Supported authentication methods

Refer to [TheHive's API documentation](https://docs.strangebee.com/thehive/api-docs/) for more information about the service.

To configure this credential, you'll need:

- An **API Key**: Users with `orgAdmin` and `superAdmin` accounts can generate API keys:
  - `orgAdmin` account: Go to **Organization > Create API Key** for the user you wish to generate a key for.
  - `superAdmin` account: Go to **Users > Create API Key** for the user you wish to generate a key for.
  - Refer to [API Authentication](https://docs.strangebee.com/cortex/api/api-guide/?h=api+key#authentication) for more information.
- A **URL**: The URL of your TheHive server.
- **Ignore SSL Issues**: When turned on, n8n will connect even if SSL certificate validation fails.

---

## Merge

**URL:** llms-txt#merge

**Contents:**
- Node parameters
  - Append
  - Combine
  - SQL Query
  - Choose Branch
- Templates and examples
- Merging data streams with uneven numbers of items
- Branch execution with If and Merge nodes
- Try it out: A step by step example
  - Set up sample data using the Code nodes

Use the Merge node to combine data from multiple streams, once data of all streams is available.

Major changes in 0.194.0

The n8n team overhauled this node in n8n 0.194.0. This document reflects the latest version of the node. If you're using an older version of n8n, you can find the previous version of this document [here](https://github.com/n8n-io/n8n-docs/blob/4ff688642cc9ee7ca7d00987847bf4e4515da59d/docs/integrations/builtin/core-nodes/n8n-nodes-base.merge.md).

Minor changes in 1.49.0

n8n version 1.49.0 introduced the option to add more than two inputs. Older versions only support up to two inputs. If you're running an older version and want to combine multiple inputs in these versions, use the [Code node](https://deploy-preview-2225--n8n-docs.netlify.app/code/code-node/).

The **Mode > SQL Query** feature was also added in n8n version 1.49.0 and isn't available in older versions.

You can specify how the Merge node should combine data from different data streams by choosing a **Mode**:

Keep data from all inputs. Choose a **Number of Inputs** to output items of each input, one after another. The node waits for the execution of all connected inputs.

Append mode inputs and output

Combine data from two inputs. Select an option in **Combine By** to determine how you want to merge the input data.

Compare items by field values. Enter the fields you want to compare in **Fields to Match**.

n8n's default behavior is to keep matching items. You can change this using the **Output Type** setting:

- **Keep Matches**: Merge items that match. This is like an inner join.
- **Keep Non-Matches**: Merge items that don't match.
- **Keep Everything**: Merge items together that do match and include items that don't match. This is like an outer join.
- **Enrich Input 1**: Keep all data from Input 1, and add matching data from Input 2. This is like a left join.
- **Enrich Input 2**: Keep all data from Input 2, and add matching data from Input 1. This is like a right join.

Combine by Matching Fields mode inputs and output

Combine items based on their order. The item at index 0 in Input 1 merges with the item at index 0 in Input 2, and so on.

Combine by Position mode inputs and output

#### All Possible Combinations

Output all possible item combinations, while merging fields with the same name.

Combine by All Possible Combinations mode inputs and output

#### Combine mode options

When merging data by **Mode > Combine**, you can set these **Options**:

- **Clash Handling**: Choose how to merge when data streams clash, or when there are sub-fields. Refer to [Clash handling](#clash-handling) for details.
- **Fuzzy Compare**: Whether to tolerate type differences when comparing fields (enabled), or not (disabled, default). For example, when you enable this, n8n treats `"3"` and `3` as the same.
- **Disable Dot Notation**: This prevents accessing child fields using `parent.child` in the field name.
- **Multiple Matches**: Choose how n8n handles multiple matches when comparing data streams.
  - **Include All Matches**: Output multiple items if there are multiple matches, one for each match.
  - **Include First Match Only**: Keep the first item per match and discard the remaining multiple matches.
- **Include Any Unpaired Items**: Choose whether to keep or discard unpaired items when merging by position. The default behavior is to leave out the items without a match.

If multiple items at an index have a field with the same name, this is a clash. For example, if all items in both Input 1 and Input 2 have a field named `language`, these fields clash. By default, n8n prioritizes Input 2, meaning if `language` has a value in Input 2, n8n uses that value when merging the items.

You can change this behavior by selecting **Options** > **Clash Handling**:

- **When Field Values Clash**: Choose which input to prioritize, or choose **Always Add Input Number to Field Names** to keep all fields and values, with the input number appended to the field name to show which input it came from.
- **Merging Nested Fields**
  - **Deep Merge**: Merge properties at all levels of the items, including nested objects. This is useful when dealing with complex, nested data structures where you need to ensure the merging of all levels of nested properties.
  - **Shallow Merge**: Merge properties at the top level of the items only, without merging nested objects. This is useful when you have flat data structures or when you only need to merge top-level properties without worrying about nested properties.

Write a custom SQL Query to merge the data.

Data from previous nodes are available as tables and you can use them in the SQL query as input1, input2, input3, and so on, based on their order. Refer to [AlaSQL GitHub page](https://github.com/alasql/alasql/wiki/Supported-SQL-statements) for a full list of supported SQL statements.

Choose which input to keep. This option always waits until the data from both inputs is available. You can choose to **Output**:

- The **Input 1 Data**
- The **Input 2 Data**
- **A Single, Empty Item**

The node outputs the data from the chosen input, without changing it.

## Templates and examples

**Scrape and summarize webpages with AI**

[View template details](https://n8n.io/workflows/1951-scrape-and-summarize-webpages-with-ai/)

**Generate AI Viral Videos with Seedance and Upload to TikTok, YouTube & Instagram**

[View template details](https://n8n.io/workflows/5338-generate-ai-viral-videos-with-seedance-and-upload-to-tiktok-youtube-and-instagram/)

**✨🤖Automate Multi-Platform Social Media Content Creation with AI**

[View template details](https://n8n.io/workflows/3066-automate-multi-platform-social-media-content-creation-with-ai/)

[Browse Merge integration templates](https://n8n.io/integrations/merge/), or [search all templates](https://n8n.io/workflows/)

## Merging data streams with uneven numbers of items

The items passed into Input 1 of the Merge node will take precedence. For example, if the Merge node receives five items in Input 1 and 10 items in Input 2, it only processes five items. The remaining five items from Input 2 aren't processed.

## Branch execution with If and Merge nodes

n8n removed this execution behavior in version 1.0. This section applies to workflows using the **v0 (legacy)** workflow execution order. By default, this is all workflows built before version 1.0. You can change the execution order in your [workflow settings](../../../../workflows/settings/).

If you add a Merge node to a workflow containing an If node, it can result in both output data streams of the If node executing.

One data stream triggers the Merge node, which then goes and executes the other data stream.

For example, in the screenshot below there's a workflow containing an Edit Fields node, If node, and Merge node. The standard If node behavior is to execute one data stream (in the screenshot, this is the **true** output). However, due to the Merge node, both data streams execute, despite the If node not sending any data down the **false** data stream.

## Try it out: A step by step example

Create a workflow with some example input data to try out the Merge node.

### Set up sample data using the Code nodes

1. Add a Code node to the canvas and connect it to the Start node.

1. Paste the following JavaScript code snippet in the **JavaScript Code** field:

1. Add a second Code node, and connect it to the Start node.

1. Paste the following JavaScript code snippet in the **JavaScript Code** field:

### Try out different merge modes

Add the Merge node. Connect the first Code node to **Input 1**, and the second Code node to **Input 2**. Run the workflow to load data into the Merge node.

The final workflow should look like this:

[View template details](https://n8n.io/workflows/655-merge-greetings-with-the-users-based-on-the-language/)

Now try different options in **Mode** to see how it affects the output data.

Select **Mode** > **Append**, then select **Execute step**.

Your output in table view should look like this:

| **name** | **language** | **greeting** |
| -------- | ------------ | ------------ |
| Stefan   | de           |              |
| Jim      | en           |              |
| Hans     | de           |              |
|          | en           | Hello        |
|          | de           | Hallo        |

#### Combine by Matching Fields

You can merge these two data inputs so that each person gets the correct greeting for their language.

1. Select **Mode** > **Combine**.
1. Select **Combine by** > **Matching Fields**.
1. In both **Input 1 Field** and **Input 2 Field**, enter `language`. This tells n8n to combine the data by matching the values in the `language` field in each data set.
1. Select **Execute step**.

Your output in table view should look like this:

| **name** | **language** | **greeting** |
| -------- | ------------ | ------------ |
| Stefan   | de           | Hallo        |
| Jim      | en           | Hello        |
| Hans     | de           | Hallo        |

#### Combine by Position

Select **Mode** > **Combine**, **Combine by** > **Position**, then select **Execute step**.

Your output in table view should look like this:

| **name** | **language** | **greeting** |
| -------- | ------------ | ------------ |
| Stefan   | en           | Hello        |
| Jim      | de           | Hallo        |

##### Keep unpaired items

If you want to keep all items, select **Add Option** > **Include Any Unpaired Items**, then turn on **Include Any Unpaired Items**.

Your output in table view should look like this:

| **name** | **language** | **greeting** |
| -------- | ------------ | ------------ |
| Stefan   | en           | Hello        |
| Jim      | de           | Hallo        |
| Hans     | de           |              |

#### Combine by All Possible Combinations

Select **Mode** > **Combine**, **Combine by** > **All Possible Combinations**, then select **Execute step**.

Your output in table view should look like this:

| **name** | **language** | **greeting** |
| -------- | ------------ | ------------ |
| Stefan   | en           | Hello        |
| Stefan   | de           | Hallo        |
| Jim      | en           | Hello        |
| Jim      | de           | Hallo        |
| Hans     | en           | Hello        |
| Hans     | de           | Hallo        |

**Examples:**

Example 1 (unknown):
```unknown
SELECT * FROM input1 LEFT JOIN input2 ON input1.name = input2.id
```

Example 2 (unknown):
```unknown
return [
     {
       json: {
         name: 'Stefan',
         language: 'de',
       }
     },
     {
       json: {
         name: 'Jim',
         language: 'en',
       }
     },
     {
       json: {
         name: 'Hans',
         language: 'de',
       }
     }
   ];
```

Example 3 (unknown):
```unknown
return [
   	  {
       json: {
         greeting: 'Hello',
         language: 'en',
       }
     },
     {
       json: {
         greeting: 'Hallo',
         language: 'de',
       }
     }
   ];
```

---

## Filescan credentials

**URL:** llms-txt#filescan-credentials

**Contents:**
- Prerequisites
- Related resources
- Using API key

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

Create a [Filescan](https://www.filescan.io/auth/signup/) account.

Refer to [Filescan's API documentation](https://www.filescan.io/api/docs) for more information about authenticating with the service.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/filescan/) on n8n's website.

To configure this credential, you'll need:

- An **API Key**: Generate your API key from your [**profile settings**](https://www.filescan.io/users/profile) **> API Key**. Refer to the [Filescan FAQ](https://www.filescan.io/help/faq) for more information.

---

## TOTP credentials

**URL:** llms-txt#totp-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using secret and label

You can use these credentials to authenticate the following nodes:

- [TOTP](../../core-nodes/n8n-nodes-base.totp/)

Generate a TOTP **Secret** and **Label**.

## Supported authentication methods

Time-based One-time Password (TOTP) is an algorithm that generates a one-time password (OTP) using the current time. Refer to [Google Authenticator | Key URI format](https://github.com/google/google-authenticator/wiki/Key-Uri-Format) for more information.

## Using secret and label

To configure this credential, you'll need:

- A **Secret**: The secret key encoded in the QR code during authenticator setup. It's an arbitrary key value encoded in Base32, for example: `BVDRSBXQB2ZEL5HE`. Refer to [Google Authenticator Secret](https://github.com/google/google-authenticator/wiki/Key-Uri-Format#secret) for more information.
- A **Label**: The identifier for the account. It contains an account name as a URI-encoded string. You can include prefixes to identify the provider or service managing the account. If you use prefixes, use a literal or url-encoded colon to separate the issuer prefix and the account name, for example: `GitHub:john-doe`. Refer to [Google Authenticator Label](https://github.com/google/google-authenticator/wiki/Key-Uri-Format#label) for more information.

---

## Adalo credentials

**URL:** llms-txt#adalo-credentials

**Contents:**
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Adalo](../../app-nodes/n8n-nodes-base.adalo/)

You need a Team or Business plan to use the Adalo APIs.

## Supported authentication methods

Refer to [Adalo's API collections documentation](https://help.adalo.com/integrations/the-adalo-api/collections) for more information about working with the service.

To configure this credential, you'll need an [Adalo](https://www.adalo.com/) account and:

- An **API Key**
- An **App ID**

To get these, create an Adalo app:

1. From the app dropdown in the top navigation, select **CREATE NEW APP**.
1. Select the App Layout type that makes sense for you and select **Next**.
   - If you're new to using the product, Adalo recommend using **Mobile Only**.
1. Select a template to get started with or select **Blank**, then select **Next**.
1. Enter an **App Name**, like `n8n integration`.
1. If applicable, select the **Team** for the app.
1. Select branding colors.
1. Select **Create**. The app editor opens.
1. In the left menu, select **Settings** (the gear cog icon).
1. Select **App Access**.
1. In the **API Key** section, select **Generate Key**.
   - If you don't have the correct plan level, you'll see a prompt to upgrade instead.
1. Copy the key and enter it as the **API Key** in your n8n credential.
1. The URL includes the **App ID** after `https://app.adalo.com/apps/`. For example, if the URL for your app is `https://app.adalo.com/apps/b78bdfcf-48dc-4550-a474-dd52c19fc371/app-settings`, `b78bdfcf-48dc-4550-a474-dd52c19fc371` is the App ID. Copy this value and enter it in your n8n credential.

Refer to [Creating an app](https://help.adalo.com/design/designing-your-app/creating-an-app) for more information on creating apps in Adalo. Refer to [The Adalo API](https://help.adalo.com/integrations/the-adalo-api) for more information on generating API keys.

---

## MongoDB credentials

**URL:** llms-txt#mongodb-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using database connection - Connection string
- Using database connection - Values

You can use these credentials to authenticate the following nodes:

- [MongoDB](../../app-nodes/n8n-nodes-base.mongodb/)
- [MongoDB Atlas Vector Store](../../cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoremongodbatlas/)
- [MongoDB Chat Memory](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.memorymongochat/)

- Create a user account with the appropriate permissions on a [MongoDB](https://www.mongodb.com/) server.
- As a Project Owner, add all the [n8n IP addresses](../../../../manage-cloud/cloud-ip/) to the IP Access List Entries in the project's **Network Access**. Refer to [Add IP Access List entries](https://www.mongodb.com/docs/atlas/security/ip-access-list/#add-ip-access-list-entries) for detailed instructions.

If you are setting up MongoDB from scratch, create a cluster and a database. Refer to the [MongoDB Atlas documentation](https://www.mongodb.com/docs/atlas/) for more detailed instructions on these steps.

## Supported authentication methods

- Database connection - Connection string
- Database connection - Values

Refer to the [MongoDBs Atlas documentation](https://www.mongodb.com/docs/atlas/) for more information about the service.

## Using database connection - Connection string

To configure this credential, you'll need the [Prerequisites](#prerequisites) listed above. Then:

1. Select **Connection String** as the **Configuration Type**.
1. Enter your MongoDB **Connection String**. To get your connection string in MongoDB, go to **Database > Connect**.
   1. Select **Drivers**.
   1. Copy the code you see in **Add your connection string into your application code**. It will be something like: `mongodb+srv://yourName:yourPassword@clusterName.mongodb.net/?retryWrites=true&w=majority`.
   1. Replace the `<password>` and `<username>` in the connection string with the database user's credentials you'll be using.
   1. Enter that connection string into n8n.
   1. Refer to [Connection String](https://www.mongodb.com/docs/manual/reference/connection-string/) for information on finding and formatting your connection string.
1. Enter your **Database** name. This is the name of the database that the user whose details you added to the connection string is logging into.
1. Select whether to **Use TLS**: Turn on to use TLS. You must have your MongoDB database configured to use TLS and have an x.509 certificate generated. Add information for these certificate fields in n8n:
   - **CA Certificate**
   - **Public Client Certificate**
   - **Private Client Key**
   - **Passphrase**

Refer to [MongoDB's x.509 documentation](https://www.mongodb.com/docs/manual/core/security-x.509/#std-label-client-x509-certificates-requirements) for more information on working with x.509 certificates.

## Using database connection - Values

To configure this credential, you'll need the [Prerequisites](#prerequisites) listed above. Then:

1. Select **Values** as the **Configuration Type**.
1. Enter the database **Host** name or address.
1. Enter the **Database** name.
1. Enter the **User** you'd like to log in as.
1. Enter the user's **Password**.
1. Enter the **Port** to connect over. This is the port number your server uses to listen for incoming connections.
1. Select whether to **Use TLS**: Turn on to use TLS. You must have your MongoDB database configured to use TLS and have an x.509 certificate generated. Add information for these certificate fields in n8n:
   - **CA Certificate**
   - **Public Client Certificate**
   - **Private Client Key**
   - **Passphrase**

Refer to [MongoDB's x.509 documentation](https://www.mongodb.com/docs/manual/core/security-x.509/#std-label-client-x509-certificates-requirements) for more information on working with x.509 certificates.

---

## Carbon Black credentials

**URL:** llms-txt#carbon-black-credentials

**Contents:**
- Prerequisites
- Authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

- Create a [Carbon Black subscription](https://www.broadcom.com/products/carbon-black/threat-prevention/carbon-black-cloud).
- Create a [Carbon Black developer account](https://developer.carbonblack.com/).

## Authentication methods

Refer to [Carbon Black's documentation](https://developer.carbonblack.com/reference/carbon-black-cloud/cb-defense/latest/rest-api/) for more information about the service.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/carbon-black/) on n8n's website.

To configure this credential, you'll need:

- A **URL**: This URL is determined by the environment/product URL you use. You can find it by looking at the web address of your Carbon Black Cloud console. Refer to [Carbon Black's URL Parts documentation](https://developer.carbonblack.com/reference/carbon-black-cloud/authentication#the-url-parts) for more information.
- An **Access Token**: Refer to the [Carbon Black Create an API key documentation](https://developer.carbonblack.com/reference/carbon-black-cloud/authentication#carbon-black-cloud-manages-identities-and-roles) to create an API key. Add the **API Secret Key** as the **Access Token** in n8n.

---

## Hunter credentials

**URL:** llms-txt#hunter-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Hunter](../../app-nodes/n8n-nodes-base.hunter/)

Create a [Hunter](https://www.hunter.io/) account.

## Supported authentication methods

Refer to [Hunter's API documentation](https://hunter.io/api-documentation/v2) for more information about the service.

To configure this credential, you'll need:

- An **API Key**: Generate an API key from your profile in the [dashboard](https://hunter.io/api-keys). Refer to the [Hunter API Authentication documentation](https://hunter.io/api-documentation/v2#authentication) for more information.

---

## Credentials library

**URL:** llms-txt#credentials-library

This section contains step-by-step information about authenticating the different nodes in n8n.

To learn more about creating, managing, and sharing credentials, refer to [Manage credentials](../../../credentials/).

---

## Segment credentials

**URL:** llms-txt#segment-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Segment](../../app-nodes/n8n-nodes-base.segment/)

Create a [Segment](https://segment.com/) account.

## Supported authentication methods

Refer to [Segment's Sources documentation](https://segment.com/docs/connections/sources/) for more information about the service.

To configure this credential, you'll need:

- A **Write Key**: To get a Write Key, go to **Sources > Add Source**. Add a **Node.js** source and copy that write key to add to your n8n credential.

Refer to [Locate your Write Key](https://segment.com/docs/connections/find-writekey/) for more information.

---

## Todoist credentials

**URL:** llms-txt#todoist-credentials

**Contents:**
- Supported authentication methods
- Related resources
- Using API key
- Using OAuth2

You can use these credentials to authenticate the following nodes:

- [Todoist](../../app-nodes/n8n-nodes-base.todoist/)

## Supported authentication methods

Refer to [Todoist's REST API documentation](https://developer.todoist.com/rest/v2/#overview) for more information about the service.

To configure this credential, you'll need a [Todoist](https://todoist.com/) account and:

To get your **API Key**:

1. In Todoist, open your [**Integration settings**](https://todoist.com/prefs/integrations).
1. Select the **Developer** tab.
1. Copy your **API token** and enter it as the **API Key** in your n8n credential.

Refer to [Find your API token](https://todoist.com/help/articles/find-your-api-token-Jpzx9IIlB) for more information.

Note for n8n Cloud users

Cloud users don't need to provide connection details. Select **Connect my account** to connect through your browser.

If you're [self-hosting](../../../../hosting/) n8n, you'll need a [Todoist](https://todoist.com/) account and:

- A **Client ID**
- A **Client Secret**

Get both by creating an application:

1. Open the Todoist [App Management Console](https://developer.todoist.com/appconsole.html).
1. Select **Create a new app**.
1. Enter an **App name** for your app, like `n8n integration`.
1. Select **Create app**.
1. Copy the n8n **OAuth Redirect URL** and enter it as the **OAuth redirect URL** in Todoist.
1. Copy the **Client ID** from Todoist and enter it in your n8n credential.
1. Copy the **Client Secret** from Todoist and enter it in your n8n credential.
1. Configure the rest of your Todoist app as it makes sense for your use case.

Refer to the Todoist [Authorization Guide](https://developer.todoist.com/guides/#authorization) for more information.

---

## Splunk credentials

**URL:** llms-txt#splunk-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API auth token
- Required capabilities

You can use these credentials to authenticate the following nodes:

- [Splunk](../../app-nodes/n8n-nodes-base.splunk/)

- [Download and install](https://www.splunk.com/en_us/download/splunk-enterprise.html) Splunk Enterprise.
- [Enable token authentication](https://docs.splunk.com/Documentation/Splunk/9.2.1/Security/EnableTokenAuth) in **Settings > Tokens**.

Free trial Splunk Cloud Platform accounts can't access the REST API

Free trial Splunk Cloud Platform accounts don't have access to the REST API. Ensure you have the necessary permissions. Refer to [Access requirements and limitations for the Splunk Cloud Platform REST API](https://docs.splunk.com/Documentation/SplunkCloud/8.2.2203/RESTTUT/RESTandCloud) for more details.

## Supported authentication methods

Refer to [Splunk's Enterprise API documentation](https://docs.splunk.com/Documentation/Splunk/latest/RESTREF/RESTprolog) for more information about the service.

## Using API auth token

To configure this credential, you'll need:

- An **Auth Token**: Once you've enabled token authentication, create an auth token in **Settings > Tokens**. Refer to [Creating authentication tokens](https://docs.splunk.com/Documentation/Splunk/9.2.1/Security/CreateAuthTokens) for more information.
- A **Base URL**: For your Splunk instance. This should include the protocol, domain, and port, for example: `https://localhost:8089`.
- **Allow Self-Signed Certificates**: If turned on, n8n will connect even if SSL validation fails.

## Required capabilities

Your Splunk platform account and role must have certain capabilities to create authentication tokens:

- `edit_tokens_own`: Required if you want to create tokens for yourself.
- `edit_tokens_all`: Required if you want to create tokens for any user on the instance.

Refer to [Define roles on the Splunk platform with capabilities](https://docs.splunk.com/Documentation/Splunk/9.2.1/Security/Rolesandcapabilities) for more information.

---

## Milvus credentials

**URL:** llms-txt#milvus-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using basic auth

You can use these credentials to authenticate the following nodes:

- [Milvus Vector Store](../../cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoremilvus/)

Create and run an [Milvus](https://milvus.io/) instance. Refer to the [Install Milvus](https://milvus.io/docs/install-overview.md) for more information.

## Supported authentication methods

Refer to [Milvus's Authentication documentation](https://milvus.io/docs/authenticate.md?tab=docker#Authenticate-User-Access) for more information about setting up authentication.

View n8n's [Advanced AI](../../../../advanced-ai/) documentation.

To configure this credential, you'll need:

- **Base URL**: The base URL of your Milvus instance. The default is `http://localhost:19530`.
- **Username**: The username to authenticate to your Milvus instance. The default value is `root`.
- **Password**: The password to authenticate to your Milvus instance. The default value is `Milvus`.

---

## MISP credentials

**URL:** llms-txt#misp-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [MISP](../../app-nodes/n8n-nodes-base.misp/)

Install and run a [MISP](https://misp.github.io/MISP/) instance.

## Supported authentication methods

Refer to [MISP's Automation API documentation](https://www.circl.lu/doc/misp/automation) for more information about the service.

To configure this credential, you'll need:

- An **API Key**: In MISP, these are called Automation keys. Get an automation key from **Event Actions > Automation**. Refer to [MISP's automation keys documentation](https://www.circl.lu/doc/misp/automation/#automation-key) for instructions on generating more keys.
- A **Base URL**: Your MISP URL.
- Select whether to **Allow Unauthorized Certificates**: If turned on, the credential will connect even if SSL certificate validation fails.

---

## Grafana credentials

**URL:** llms-txt#grafana-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Grafana](../../app-nodes/n8n-nodes-base.grafana/)

- Create a [Grafana](https://grafana.com/) account.

## Supported authentication methods

Refer to [Grafana's API documentation](https://grafana.com/docs/grafana/latest/developers/http_api/) for more information about authenticating with the service.

To configure this credential, you'll need:

- An **API Key**: Refer to the [Create an API key documentation](https://grafana.com/docs/grafana/latest/administration/api-keys/#create-an-api-key) for detailed instructions on creating an API key.
- The **Base URL** for your Grafana instance, for example: `https://n8n.grafana.net`.

---

## Shuffler credentials

**URL:** llms-txt#shuffler-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

Create a [Shuffler](https://shuffler.io) account on either a cloud or self-hosted instance.

## Supported authentication methods

Refer to [Shuffler's documentation](https://shuffler.io/docs/API#authentication) for more information about the service.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/shuffler/) on n8n's website.

To configure this credential, you'll need:

- An **API Key**: Get your API key from the **Settings** page.

---

## Yourls credentials

**URL:** llms-txt#yourls-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Yourls](../../app-nodes/n8n-nodes-base.yourls/)

Install [Yourls](https://github.com/YOURLS/YOURLS) on your server.

## Supported authentication methods

Refer to [Yourl's documentation](https://yourls.org/docs) for more information about the service.

To configure this credential, you'll need:

- A **Signature** token: Go to **Tools > Secure passwordless API call** to get your **Signature** token. Refer to [Yourl's Passworldess API documentation](https://yourls.org/docs/guide/advanced/passwordless-api) for more information.
- A **URL**: Enter the URL of your Yourls instance.

---

## UpLead credentials

**URL:** llms-txt#uplead-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [UpLead](../../app-nodes/n8n-nodes-base.uplead/)

Create an [UpLead](https://uplead.com/) account.

## Supported authentication methods

Refer to [UpLead's API documentation](https://docs.uplead.com/#overview) for more information about the service.

To configure this credential, you'll need:

- An **API Key**: Go to your **Account > Profiles** to **Generate New API Key**.

---

## Philips Hue credentials

**URL:** llms-txt#philips-hue-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using OAuth2

You can use these credentials to authenticate the following nodes:

- [Philips Hue](../../app-nodes/n8n-nodes-base.philipshue/)

Create a [Philips Hue](https://www.philips-hue.com/en-us) account.

## Supported authentication methods

Refer to [Philips Hue's CLIP API documentation](https://developers.meethue.com/develop/hue-api-v2/api-reference/) for more information about the service.

Note for n8n Cloud users

Cloud users don't need to provide connection details. Select **Connect my account** to connect through your browser.

If you're using the built-in OAuth connection, you don't need to enter an **APP ID**.

If you need to configure OAuth2 from scratch, you'll need a [Philips Hue developer](https://developers.meethue.com/) account

Create a new remote app on the [Add new Hue Remote API app](https://developers.meethue.com/add-new-hue-remote-api-app/) page.

Use these settings for your app:

- Copy the **OAuth Callback URL** from n8n and add it as a **Callback URL**.
- Copy the **AppId**, **ClientId**, and **ClientSecret** and enter these in the corresponding fields in n8n.

---

## uProc credentials

**URL:** llms-txt#uproc-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API Key

You can use these credentials to authenticate the following nodes:

- [uProc](../../app-nodes/n8n-nodes-base.uproc/)

Create a [uProc](https://uproc.io) account.

## Supported authentication methods

Refer to [uProc's API documentation](https://docs.uproc.io/api/) for more information about the service.

To configure this credential, you'll need:

- An **Email** address: Enter the email address you use to log in to uProc. This is also displayed in **Settings > Integrations > API Credentials**.
- An **API Key**: Go to **Settings > Integrations > API Credentials**. Copy the **API Key (real)** from the **API Credentials** section and enter it in your n8n credential.

---

## Hugging Face credentials

**URL:** llms-txt#hugging-face-credentials

**Contents:**
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Hugging Face Inference](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmopenhuggingfaceinference/)
- [Embeddings Hugging Face Inference](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingshuggingfaceinference/)

## Supported authentication methods

Refer to [Hugging Face's documentation](https://huggingface.co/docs/api-inference/quicktour) for more information about the service.

View n8n's [Advanced AI](../../../../advanced-ai/) documentation.

To configure this credential, you'll need a [Hugging Face](https://huggingface.co/) account and:

- An **API Key**: Hugging Face calls these API tokens.

To get your API token:

1. Open your Hugging Face profile and go to the [**Tokens**](https://huggingface.co/settings/tokens) section.
1. Copy the token listed there. It should begin with `hf_`.
1. Enter this API token as your n8n credential **API Key**.

Refer to [Get your API token](https://huggingface.co/docs/api-inference/quicktour#get-your-api-token) for more information.

---

## Trellix ePO credentials

**URL:** llms-txt#trellix-epo-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using basic auth

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

Create a [Trellix ePolicy Orchestrator](https://www.trellix.com/products/epo/) account.

## Supported authentication methods

Refer to [Trellix ePO's documentation](https://docs.trellix.com/bundle/epolicy-orchestrator-web-api-reference-guide/page/GUID-D87A6839-AED2-47B0-BE93-5BF83F710278.html) for more information about the service.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/trellix-epo/) on n8n's website.

To configure this credential, you'll need:

- A **Username** to connect as.
- A **Password** for that user account.

n8n uses These fields to build the `-u` parameter in the format of `-u username:pw`. Refer to [Web API basics](https://docs.trellix.com/bundle/epolicy-orchestrator-web-api-reference-guide/page/GUID-2503B69D-2BCE-4491-9969-041838B39C1F.html) for more information.

---

## Discourse credentials

**URL:** llms-txt#discourse-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Discourse](../../app-nodes/n8n-nodes-base.discourse/)

- Host an instance of [Discourse](https://discourse.org/)
- Create an account on your hosted instance and make sure that you are an admin

## Supported authentication methods

Refer to [Discourse's API documentation](https://docs.discourse.org/) for more information about the service.

To configure this credential, you'll need:

- The **URL** of your Discourse instance, for example `https://community.n8n.io`
- An **API Key**: Create an API key through the Discourse admin panel. Refer to the [Discourse create and configure an API key documentation](https://meta.discourse.org/t/create-and-configure-an-api-key/230124) for instructions on creating an API key and specifying a username.
- A **Username**: Use your own name, `system`, or another user.

Refer to the Authentication section of the [Discourse API documentation](https://docs.discourse.org/) for examples.

---

## Groq credentials

**URL:** llms-txt#groq-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Groq Chat Model](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatgroq/)

Create a [Groq](https://groq.com/) account.

## Supported authentication methods

Refer to [Groq's documentation](https://console.groq.com/docs/quickstart) for more information about the service.

View n8n's [Advanced AI](../../../../advanced-ai/) documentation.

To configure this credential, you'll need:

1. Go to the [API Keys](https://console.groq.com/keys) page of your Groq console.
1. Select **Create API Key**.
1. Enter a **display name** for the key, like `n8n integration`, and select **Submit**.
1. Copy the key and paste it into your n8n credential.

Refer to [Groq's API Keys documentation](https://console.groq.com/docs/quickstart) for more information.

Groq binds API keys to the organization, not the user.

---

## LingvaNex credentials

**URL:** llms-txt#lingvanex-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [LingvaNex](../../app-nodes/n8n-nodes-base.lingvanex/)

Create a [LingvaNex](https://lingvanex.com) account.

## Supported authentication methods

Refer to [Lingvanex's Cloud API documentation](https://docs.lingvanex.com/reference/overview) for more information about the service.

To configure this credential, you'll need:

- An **API Key**: Generate an API key from your **Account** page. Refer to [Where can I get the authorization key?](https://docs.lingvanex.com/reference/translator-service-faq#where-can-i-get-the-authorization-key) for more detailed instructions.

---

## OpenAI credentials

**URL:** llms-txt#openai-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [OpenAI](../../app-nodes/n8n-nodes-langchain.openai/)
- [Chat OpenAI](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatopenai/)
- [Embeddings OpenAI](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsopenai/)
- [LM OpenAI](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatopenai/)

Create an [OpenAI](https://platform.openai.com/signup/) account.

## Supported authentication methods

Refer to [OpenAI's API documentation](https://platform.openai.com/docs/introduction) for more information about the service.

To configure this credential, you'll need:

- An **API Key**
- An **Organization ID**: Required if you belong to multiple organizations; otherwise, leave this blank.

To generate your API Key:

1. Login to your OpenAI account or [create](https://platform.openai.com/signup/) an account.
1. Open your [API keys](https://platform.openai.com/api-keys) page.
1. Select **Create new secret key** to create an API key, optionally naming the key.
1. Copy your key and add it as the **API Key** in n8n.

Refer to the [API Quickstart Account Setup documentation](https://platform.openai.com/docs/quickstart/account-setup) for more information.

To find your Organization ID:

1. Go to your [Organization Settings](https://platform.openai.com/account/organization) page.
1. Copy your Organization ID and add it as the **Organization ID** in n8n.

Refer to [Setting up your organization](https://platform.openai.com/docs/guides/production-best-practices/setting-up-your-organization) for more information. Note that API requests made using an Organization ID will count toward the organization's subscription quota.

---

## Outlook.com Send Email credentials

**URL:** llms-txt#outlook.com-send-email-credentials

**Contents:**
- Set up the credential
- Use an app password
  - Security Info app password

Follow these steps to configure the Send Email credentials with an Outlook.com account.

## Set up the credential

To configure the Send Email credential to use an Outlook.com account:

1. Enter your Outlook.com email address as the **User**.

1. Enter your Outlook.com password as the **Password**.

Outlook.com doesn't require you to use an app password, but if you'd like to for security reasons, refer to [Use an app password](#use-an-app-password).

1. Enter `smtp-mail.outlook.com` as the **Host**.

1. Enter `587` for the **Port**.

1. Turn on the **SSL/TLS** toggle.

Refer to Microsoft's [POP, IMAP, and SMTP settings for Outlook.com](https://support.microsoft.com/en-us/office/pop-imap-and-smtp-settings-for-outlook-com-d088b986-291d-42b8-9564-9c414e2aa040) documentation for more information. If the settings above don't work for you, check with your email administrator.

## Use an app password

If you'd prefer to use an app password instead of your email account password:

1. Log into the [My Account](https://myaccount.microsoft.com/) page.
1. If you have a left navigation option for **Security Info**, jump to [Security Info app password](#security-info-app-password). If you don't have an option for **Security Info**, continue with these instructions.
1. Go to the [Additional security verification page](https://account.activedirectory.windowsazure.com/Proofup.aspx).
1. Select **App passwords** and **Create**.
1. Enter a **Name** for your app password, like `n8n credential`.
1. Use the option to **copy password to clipboard** and enter this as the **Password** in n8n instead of your email account password.

Refer to Outlook's [Manage app passwords for 2-step verification](https://support.microsoft.com/en-us/account-billing/manage-app-passwords-for-two-step-verification-d6dc8c6d-4bf7-4851-ad95-6d07799387e9) page for more information.

### Security Info app password

If you have a left navigation option for **Security Info**:

1. Select **Security Info**. The Security Info page opens.
1. Select **+ Add method**.
1. On the **Add a method** page, select **App password** and then select **Add**.
1. Enter a **Name** for your app password, like `n8n credential`.
1. Copy the **Password** and enter this as the **Password** in n8n instead of your email account password.

Refer to Outlook's [Create app passwords from the Security info (preview)](https://support.microsoft.com/en-us/account-billing/create-app-passwords-from-the-security-info-preview-page-d8bc744a-ce3f-4d4d-89c9-eb38ab9d4137) page for more information.

---

## Drift credentials

**URL:** llms-txt#drift-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API personal access token
- Using OAuth2

You can use these credentials to authenticate the following nodes:

- [Drift](../../app-nodes/n8n-nodes-base.drift/)

- Create a [Drift](https://www.drift.com/) account.
- [Create a Drift app](https://devdocs.drift.com/docs/quick-start#3-install-it-to-your-drift-account-).

## Supported authentication methods

- API personal access token
- OAuth2

Refer to [Drift's API documentation](https://devdocs.drift.com/docs/using-drift-apis) for more information about the service.

## Using API personal access token

To configure this credential, you'll need:

- A **Personal Access Token**: To get a token, [create a Drift app](https://devdocs.drift.com/docs/quick-start#3-install-it-to-your-drift-account-). [Install the app](https://devdocs.drift.com/docs/quick-start#3-install-it-to-your-drift-account-) to generate an OAuth Access token. Add this to the n8n credential as your **Personal Access Token**.

Note for n8n Cloud users

Cloud users don't need to provide connection details. Select **Connect my account** to connect through your browser.

If you need to configure OAuth2 from scratch or need more detail on what's happening in the OAuth web flow, refer to the instructions in the [Drift Authentication and Scopes documentation](https://devdocs.drift.com/docs/authentication-and-scopes) to set up OAuth for your app.

---

## OpenRouter credentials

**URL:** llms-txt#openrouter-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Chat OpenRouter](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatopenrouter/)

Create a [OpenRouter](https://openrouter.ai/) account.

## Supported authentication methods

Refer to [OpenRouter's API documentation](https://openrouter.ai/docs/quick-start) for more information about the service.

To configure this credential, you'll need:

To generate your API Key:

1. Login to your OpenRouter account or [create](https://openrouter.ai/) an account.
1. Open your [API keys](https://openrouter.ai/keys) page.
1. Select **Create new secret key** to create an API key, optionally naming the key.
1. Copy your key and add it as the **API Key** in n8n.

Refer to the [OpenRouter Quick Start](https://openrouter.ai/docs/quick-start) page for more information.

---

## APITemplate.io credentials

**URL:** llms-txt#apitemplate.io-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [APITemplate.io](../../app-nodes/n8n-nodes-base.apitemplateio/)

Create an [APITemplate.io](https://apitemplate.io/) account.

## Supported authentication methods

Refer to [APITemplate.io's API documentation](https://apitemplate.io/apiv2/) for more information about the service.

To configure this credential, you'll need:

- An **API Key**: Once you've created an APITemplate.io account, go to **API Integration** to copy the **API Key**.

---

## CrateDB credentials

**URL:** llms-txt#cratedb-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using account connection

You can use these credentials to authenticate the following nodes:

- [CrateDB](../../app-nodes/n8n-nodes-base.cratedb/)

An available instance of CrateDB.

## Supported authentication methods

Refer to [CrateDB's documentation](https://cratedb.com/docs/crate/reference/en/latest/) for more information about the service.

## Using account connection

To configure this credential, you'll need:

- Your **Host** name
- Your **Database** name
- A **User** name
- A user **Password**
- To set the **SSL** parameter. Refer to the [CrateDB Secured Communications (SSL/TLS) documentation](https://cratedb.com/docs/crate/reference/en/5.7/admin/ssl.html#admin-ssl) for more information. The options n8n supports are:
  - Allow
  - Disable
  - Require
- A **Port** number

Refer to the [Connect to a CrateDB cluster documentation](https://cratedb.com/docs/crate/clients-tools/en/latest/connect/) for detailed instructions on these fields and their default values.

---

## ERPNext credentials

**URL:** llms-txt#erpnext-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key
- How to find the subdomain of an ERPNext cloud-hosted account

You can use these credentials to authenticate the following nodes:

- [ERPNext](../../app-nodes/n8n-nodes-base.erpnext/)

- Create an [ERPNext](https://erpnext.com) account.

## Supported authentication methods

Refer to [ERPNext's documentation](https://docs.erpnext.com/docs/user/manual/en/introduction) for more information about the service.

Refer to [ERPNext's developer documentation](https://frappeframework.com/docs/user/en/introduction) for more information about working with the framework.

To configure this credential, you'll need:

- An **API Key**: Generate this from your own ERPNext user account in **Settings > My Settings > API Access**.
- An **API Secret**: Generated with the API key.
- Your ERPNext **Environment**:
  - For **Cloud-hosted**:
    - Your ERPNext **Subdomain**: Refer to the [FAQs](#how-to-find-the-subdomain-of-an-erpnext-cloud-hosted-account)
    - Your **Domain**: Choose between `erpnext.com` and `frappe.cloud`.
  - For **Self-hosted**:
    - The fully qualified **Domain** where you host ERPNext
- Choose whether to **Ignore SSL Issues**: When selected, n8n will connect even if SSL certificate validation is unavailable.

If you are an ERPNext System Manager, you can also generate API keys and secrets for other users. Refer to the [ERPNext Adding Users documentation](https://docs.erpnext.com/docs/user/manual/en/adding-users) for more information.

## How to find the subdomain of an ERPNext cloud-hosted account

You can find your ERPNext subdomain by reviewing the address bar of your browser. The string between `https://` and either `.erpnext.com` or `frappe.cloud` is your subdomain.

For example, if the URL in the address bar is `https://n8n.erpnext.com`, the subdomain is `n8n`.

---

## Azure Cosmos DB credentials

**URL:** llms-txt#azure-cosmos-db-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API Key
- Common issues
  - Need admin approval

You can use these credentials to authenticate the following nodes:

- [Azure Cosmos DB](../../app-nodes/n8n-nodes-base.azurecosmosdb/)

- Create an [Azure](https://azure.microsoft.com) subscription.
- Create an [Azure Cosmos DB account](https://learn.microsoft.com/en-us/azure/cosmos-db/how-to-manage-database-account).

## Supported authentication methods

Refer to [Azure Cosmos DB's API documentation](https://learn.microsoft.com/en-us/rest/api/cosmos-db/) for more information about the service.

To configure this credential, you'll need:

- An **Account**: The name of your Azure Cosmos DB account.
- A **Key**: A key for your Azure Cosmos DB account. Select **Overview** > **Keys** in the Azure portal for your Azure Cosmos DB. You can use either of the two account keys for this purpose.
- A **Database**: The name of the Azure Cosmos DB database to connect to.

Refer to [Get your primary key | Microsoft](https://learn.microsoft.com/en-us/previous-versions/azure/cosmos-db/how-to-obtain-keys?tabs=azure-portal) for more detailed steps.

Here are the known common errors and issues with Azure Cosmos DB credentials.

### Need admin approval

When attempting to add credentials for a Microsoft360 or Microsoft Entra account, users may see a message when following the procedure that this action requires admin approval.

This message will appear when the account attempting to grant permissions for the credential is managed by a Microsoft Entra. In order to issue the credential, the administrator account needs to grant permission to the user (or "tenant") for that application.

The procedure for this is covered in the [Microsoft Entra documentation](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/grant-admin-consent).

---

## FileMaker credentials

**URL:** llms-txt#filemaker-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using database connection

You can use these credentials to authenticate the following nodes:

- [FileMaker](../../app-nodes/n8n-nodes-base.filemaker/)

- Create a user account on a [FileMaker Server](https://www.claris.com/filemaker/) with the `fmrest` extended privilege to [Access the FileMaker Data API](https://help.claris.com/en/data-api-guide/content/enable-access.html).
- Ensure the FileMaker Server can use the [FileMaker Data API](https://help.claris.com/en/data-api-guide/content/index.html):
  1. Prepare your database for FileMaker Data API access using FileMaker Pro. You can create a database or prepare an existing database.
     - Refer to [Prepare databases for FileMaker Data API access](https://help.claris.com/en/data-api-guide/content/prepare-databases-for-access.html) for more information.
  1. Write code that calls FileMaker Data API methods to find, create, edit, duplicate, and delete records in a hosted database.
     - Refer to [Write FileMaker Data API calls](https://help.claris.com/en/data-api-guide/content/write-data-api-calls.html) for more information.
  1. Host your solution with FileMaker Data API access enabled.
     - Refer to [Host a FileMaker Data API solution](https://help.claris.com/en/data-api-guide/content/host-data-api-app.html) for more information.
  1. Test that FileMaker Data API access is working.
     - Refer to [Test the FileMaker Data API solution](https://help.claris.com/en/data-api-guide/content/test-data-api-app.html) for more information.
  1. Monitor your hosted solution using Admin Console.
     - Refer to [Monitor FileMaker Data API solutions](https://help.claris.com/en/data-api-guide/content/monitor-data-api-app.html) for more information.

## Supported authentication methods

- Database connection

Refer to [FileMaker's Data API Guide](https://help.claris.com/en/data-api-guide/content/index.html) for more information about the service.

## Using database connection

To configure this credential:

1. Enter the **Host** name or IP address of your FileMaker Server.
1. Enter the **Database** name. This should match the database name as it appears in the **Databases** list within FileMaker.
1. Enter the user account **Login** for the account with the `fmrest` extended privilege. Refer to the previous [Prerequisites](#prerequisites) section for more information.
1. Enter the **Password** for that user account.

---

## Processing data with code

**URL:** llms-txt#processing-data-with-code

**Contents:**
- Function

A function is a block of code designed to perform a certain task. In n8n, you can write custom JavaScript or Python code snippets to add, remove, and update the data you receive from a node.

The [Code](../../integrations/builtin/core-nodes/n8n-nodes-base.code/) node gives you access to the incoming data and you can manipulate it. With this node you can create any function you want using JavaScript code.

---

## SolarWinds IPAM credentials

**URL:** llms-txt#solarwinds-ipam-credentials

**Contents:**
- Supported authentication methods
- Related resources
- Using Username & Password

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

## Supported authentication methods

- Username & Password

Refer to [SolarWinds IPAM's API documentation](https://github.com/solarwinds/OrionSDK/wiki/REST) for more information about the service.

## Using Username & Password

To configure this credential, you'll need a SolarWinds IPAM account and:

- **URL**: The base URL of your SolarWinds IPAM server
- **Username**: The username you use to access SolarWinds IPAM
- **Password**: The password you use to access SolarWinds IPAM

Refer to [SolarWinds IPAM's API documentation](https://github.com/solarwinds/OrionSDK/wiki/REST) for more information about authenticating to the service.

---

## DeepL credentials

**URL:** llms-txt#deepl-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [DeepL](../../app-nodes/n8n-nodes-base.deepl/)

Create a [DeepL developer](https://www.deepl.com/pro-api) account. n8n works with both Free and Pro API Plans.

## Supported authentication methods

Refer to [DeepL's API documentation](https://developers.deepl.com/docs) for more information about the service.

To configure this credential, you'll need:

- An **API Key**: Refer to [DeepL's Authentication documentation](https://developers.deepl.com/docs/getting-started/auth#authentication) for more information on getting your API key.
- To identify which **API Plan** you're on. DeepL has different API endpoints for each plan, so be sure you select the correct one:
  - Pro Plan
  - Free Plan

---

## Netscaler ADC credentials

**URL:** llms-txt#netscaler-adc-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using basic auth

You can use these credentials to authenticate the following nodes:

- [Netscaler ADC node](../../app-nodes/n8n-nodes-base.netscaleradc/)

Install a [NetScaler/Citrix ADC appliance](https://docs.netscaler.com/en-us/citrix-adc/current-release/getting-started-with-citrix-adc).

## Supported authentication methods

Refer to [Netscaler ADC's 14.1 NITRO API documentation](https://developer-docs.netscaler.com/en-us/adc-nitro-api/current-release) for more information about the service.

To configure this credential, you'll need:

- A **URL**: Enter the URL of your NetScaler/Citrix ADC instance.
- A **Username**: Enter your NetScaler/Citrix ADC username.
- A **Password**: Enter your NetScaler/Citrix ADC password.

Refer to [Performing Basic Netscaler ADC Operations](https://developer-docs.netscaler.com/en-us/adc-nitro-api/current-release/performing-basic-netscaler-operations) for more information.

---

## PhantomBuster credentials

**URL:** llms-txt#phantombuster-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [PhantomBuster](../../app-nodes/n8n-nodes-base.phantombuster/)

Create a [PhantomBuster](https://www.phantombuster.com/) account.

## Supported authentication methods

Refer to [PhantomBuster's API documentation](https://hub.phantombuster.com/reference) for more information about the service.

To configure this credential, you'll need:

- An **API Key**: To get an API key, go to [**Workspace settings**](https://phantombuster.com/workspace-settings) **> Third party API keys** and select **+ Add API Key**. Refer to [How to find my API key](https://hub.phantombuster.com/docs/api#how-to-find-my-api-key) for more information.

---

## seven credentials

**URL:** llms-txt#seven-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [seven](../../app-nodes/n8n-nodes-base.sms77/)

Create a [seven](https://www.seven.io/en) developer account.

## Supported authentication methods

Refer to [seven's API documentation](https://docs.seven.io/en) for more information about the service.

To configure this credential, you'll need:

- An **API key**: Go to **Account > Developer >** [**API Keys**](https://app.seven.io/developer#create-api-key) to create an API key. Refer to [API First Steps](https://docs.seven.io/en/rest-api/first-steps) for more information.

---

## OpenWeatherMap credentials

**URL:** llms-txt#openweathermap-credentials

**Contents:**
- Supported authentication methods
- Related resources
- Using API access token

You can use these credentials to authenticate the following nodes:

- [OpenWeatherMap](../../app-nodes/n8n-nodes-base.openweathermap/)

## Supported authentication methods

Refer to [OpenWeatherMap's API documentation](https://openweathermap.org/api) for more information about the service.

## Using API access token

To configure this credential, you'll need an [OpenWeatherMap](https://openweathermap.org/) account and:

- An **Access Token**

To get your **Access Token**:

1. After you verify your email address, OpenWeatherMap includes an **API Key** in your welcome email.
1. Copy that key and enter it in your n8n credential.

If you'd prefer to create a new key:

1. To create a new key, go to **Account >** [**API Keys**](https://home.openweathermap.org/api_keys).
1. In the **Create Key** section, enter an **API Key Name**, like `n8n integration`.
1. Select **Generate** to generate your key.
1. Copy the generated key and enter it in your n8n credential.

---

## Metabase credentials

**URL:** llms-txt#metabase-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using basic auth

You can use these credentials to authenticate the following nodes:

- [Metabase node](../../app-nodes/n8n-nodes-base.metabase/)

Create a [Metabase](https://www.metabase.com/) account with access to a Metabase instance.

## Supported authentication methods

Refer to [Metabase's API documentation](https://www.metabase.com/docs/latest/api-documentation) for more information about the service.

To configure this credential, you'll need:

- A **URL**: Enter the base URL of your Metabase instance. If you're using a custom domain, use that URL.
- A **Username**: Enter your Metabase username.
- A **Password**: Enter your Metabase password.

---

## Mist credentials

**URL:** llms-txt#mist-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API token

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

Create a [Mist](https://www.mist.com/) account and organization. Refer to [Create a Mist account and Organization](https://www.mist.com/documentation/create-mist-org/) for detailed instructions.

## Supported authentication methods

Refer to [Mist's documentation](https://www.mist.com/documentation/mist-api-introduction/) for more information about the service. If you're logged in to your Mist account, go to <https://api.mist.com/api/v1/docs/Home> to view the full API documentation.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/mist/) on n8n's website.

To configure this credential, you'll need:

- An **API Token**: You can use either a User API token or an Org API token. Refer to [How to generate a user API token](https://www.mist.com/documentation/using-postman/) for instructions on generating a User API token. Refer to [Org API token](https://www.mist.com/documentation/org-api-token/) for instructions on generating an Org API token.
- Select the **Region** you're in. Options include:
  - **Europe**: Select this option if your cloud environment is in any of the EMEA regions.
  - **Global**: Select this option if your cloud environment is in any of the global regions.

---

## Credential sharing

**URL:** llms-txt#credential-sharing

**Contents:**
- Share a credential
- Remove access to a credential

Available on all Cloud plans, and Enterprise self-hosted plans.

You can share a credential directly with other users to use in their own workflows. Or share a credential in a [project](../../glossary/#project-n8n) for all members of that project to use. Any users using a shared credential won't be able to view or edit the credential details.

Users can share credentials they created and own. Only project admins can share credentials created in and owned by a project. Instance owners and instance admins can view and share all credentials on an instance.

Refer to [Account types](../../user-management/account-types/) for more information about owners and admins.

In [projects](../../user-management/rbac/), a user's role controls how they can interact with the workflows and credentials associated to the projects they're a member of.

## Share a credential

To share a credential:

1. From the left menu, select either **Overview** or a project.
1. Select **Credentials** to see a list of your credentials.
1. Select the credential you want to share.
1. Select **Sharing**.
1. In the **Share with projects or users** dropdown, browse or search for the user or project with which you want to share your credentials.
1. Select a user or project.
1. Select **Save** to apply the changes.

## Remove access to a credential

To unshare a credential:

1. From the left menu, select either **Overview** or a project.
1. Select **Credentials** to see a list of your credentials.
1. Select the credential you want to unshare.
1. Select **Sharing**.
1. Select **trash icon** on the user or project you want to remove from the list of shared users and projects.
1. Select **Save** to apply the changes.

---

## Snowflake credentials

**URL:** llms-txt#snowflake-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using database connection

You can use these credentials to authenticate the following nodes:

- [Snowflake](../../app-nodes/n8n-nodes-base.snowflake/)

Create a [Snowflake](https://www.snowflake.com/en/) account.

## Supported authentication methods

- Database connection

Refer to [Snowflake's API documentation](https://docs.snowflake.com/en/api-reference) and [SQL Command Reference](https://docs.snowflake.com/en/sql-reference-commands) for more information about the service.

## Using database connection

To configure this credential, you'll need:

- An **Account** name: Your account name is the string of characters located between `https://` and `snowflakecomputing.com` in your Snowflake URL. For example, if the URL of your Snowflake account is `https://abc.eu-central-1.snowflakecomputing.com` then the name of your account is `abc.eu-central-1`.
- A **Database**: Enter the name of the [database](https://docs.snowflake.com/en/sql-reference/sql/use-database) the credential should connect to.
- A **Warehouse**: Enter the name of the default virtual [warehouse](https://docs.snowflake.com/en/sql-reference/sql/use-warehouse) to use for the session after connecting. n8n uses this warehouse for performing queries, loading data, and so on.
- A **Username**
- A **Password**
- A **Schema**: Enter the [schema](https://docs.snowflake.com/en/sql-reference/sql/use-schema) you want to use after connecting.
- A **Role**: Enter the security [role](https://docs.snowflake.com/en/sql-reference/sql/use-role) you want to use after connecting.
- **Client Session Keep Alive**: By default, client connections typically time out three or four hours after the most recent query execution. Turning this setting on sets the `clientSessionKeepAlive` parameter to true: the server will keep the client's connection alive indefinitely, even if the connection doesn't execute any queries.

Refer to [Session Commands](https://docs.snowflake.com/en/sql-reference/commands-session) for more information on these settings.

---

## Airtop credentials

**URL:** llms-txt#airtop-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Airtop](../../app-nodes/n8n-nodes-base.airtop/)

Create an [Airtop](https://portal.airtop.ai/sign-up) account.

## Supported authentication methods

Refer to [Airtop's API documentation](https://docs.airtop.ai/api-reference/airtop-api) for more information about the service.

To configure this credential, you'll need an [Airtop](https://portal.airtop.ai/sign-up) account and an **API key**. To generate a new key:

1. Log in to the [Airtop Portal](https://portal.airtop.ai).
1. Go to [API Keys](https://portal.airtop.ai/api-keys).
1. Select the **+ Create new key** button.
1. Enter a name for the API key.
1. Select the generated key to copy the key.
1. Enter this as the **API Key** in your n8n credential.

Refer to [Airtop's Support](https://docs.airtop.ai/guides/misc/support) for assistance if you have any issues creating your API key.

---

## One Simple API credentials

**URL:** llms-txt#one-simple-api-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API token

You can use these credentials to authenticate the following nodes:

- [One Simple API](../../app-nodes/n8n-nodes-base.onesimpleapi/)

Create a [One Simple API](https://onesimpleapi.com/register) account.

## Supported authentication methods

Refer to [One Simple API's documentation](https://onesimpleapi.com/docs) for more information about the service.

To configure this credential, you'll need:

- An **API token**: Create a new API token on the [API Tokens](https://onesimpleapi.com/user/api-tokens) page. Be sure you select appropriate permissions for the token.

You can also access the API Tokens page by selecting your **Profile > API Tokens**.

---

## TimescaleDB credentials

**URL:** llms-txt#timescaledb-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using database connection

You can use these credentials to authenticate the following nodes:

- [TimescaleDB](../../app-nodes/n8n-nodes-base.timescaledb/)

An available instance of [TimescaleDB](https://www.timescale.com/).

## Supported authentication methods

- Database connection

Refer to the [Timescale documentation](https://docs.timescale.com/) for more information about the service.

## Using database connection

To configure this credential, you'll need:

- The **Host**: The fully qualified server name or IP address of your TimescaleDB server.
- The **Database**: The name of the database to connect to.
- A **User**: The user name you want to log in with.
- A **Password**: Enter the password for the database user you are connecting to.
- **Ignore SSL Issues**: If turned on, n8n will connect even if SSL certificate validation fails and you won't see the **SSL** selector.
- **SSL**: This setting controls the `ssl-mode` connection string for the connection. Options include:
  - **Allow**: Sets the `ssl-mode` parameter to `allow`. First try a non-SSL connection; if that fails, try an SSL connection.
  - **Disable**: Sets the `ssl-mode` parameter to `disable`. Only try a non-SSL connection.
  - **Require**: Sets the `ssl-mode` parameter to `require`, which is the default for TimescaleDB connection strings. Only try an SSL connection. If a root CA file is present, verify that a trusted certificate authority (CA) issued the server certificate.
- **Port**: The port number of the TimescaleDB server.

Refer to the [Timescale connection settings documentation](https://docs.tigerdata.com/integrations/latest/find-connection-details/) for more information about the non-SSL fields. Refer to [Connect with a stricter SSL](https://docs.tigerdata.com/use-timescale/latest/security/strict-ssl/) for more information about the SSL options.

---

## SecurityScorecard credentials

**URL:** llms-txt#securityscorecard-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [SecurityScorecard](../../app-nodes/n8n-nodes-base.securityscorecard/)

Create a [SecurityScorecard](https://securityscorecard.com/) account.

## Supported authentication methods

Refer to [SecurityScorecard's Developer documentation](https://securityscorecard.readme.io/docs/integrate-ratings-platform-services) and [API documentation](https://securityscorecard.readme.io/reference/introduction) for more information about the service.

To configure this credential, you'll need:

- An **API Key**: Generate an API key in one of two ways:
  - As a user in [**My Settings > API**](https://platform.securityscorecard.io/#/my-settings/api). Refer to [Get an API key](https://securityscorecard.readme.io/docs/getting-started#step-1-get-an-api-key) for more information.
  - As a bot user: View the bot user and select **create token**. Refer to [Authenticate with a bot user](https://securityscorecard.readme.io/docs/authentication#) for more information.

---

## Ollama credentials

**URL:** llms-txt#ollama-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using instance URL
  - Ollama and self-hosted n8n

You can use these credentials to authenticate the following nodes:

- [Ollama](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmollama/)
- [Chat Ollama](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatollama/)
- [Embeddings Ollama](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsollama/)

Create and run an [Ollama](https://ollama.com/) instance with one user. Refer to the Ollama [Quick Start](https://github.com/ollama/ollama/blob/main/README.md#quickstart) for more information.

## Supported authentication methods

Refer to [Ollama's API documentation](https://github.com/ollama/ollama/blob/main/docs/api.md) for more information about the service.

View n8n's [Advanced AI](../../../../advanced-ai/) documentation.

## Using instance URL

To configure this credential, you'll need:

- The **Base URL** of your Ollama instance or remote authenticated Ollama instances.
- (Optional) The **API Key** for Bearer token authentication if connecting to a remote, authenticated proxy.

The default **Base URL** is `http://localhost:11434`, but if you've set the `OLLAMA_HOST` environment variable, enter that value. If you have issues connecting to a local n8n server, try `127.0.0.1` instead of `localhost`.

If you're connecting to Ollama through authenticated proxy services (such as [Open WebUI](https://docs.openwebui.com/getting-started/api-endpoints/#-ollama-api-proxy-support)) you must include an API key. If you don't need authentication, leave this field empty. When provided, the API key is sent as a Bearer token in the `Authorization` header of the request to the Ollama API.

Refer to [How do I configure Ollama server?](https://github.com/ollama/ollama/blob/main/docs/faq.md#how-do-i-configure-ollama-server) for more information.

### Ollama and self-hosted n8n

If you're self-hosting n8n on the same machine as Ollama, you may run into issues if they're running in different containers.

For this setup, open a specific port for n8n to communicate with Ollama by setting the `OLLAMA_ORIGINS` variable or adjusting `OLLAMA_HOST` to an address the other container can access.

Refer to Ollama's [How can I allow additional web origins to access Ollama?](https://github.com/ollama/ollama/blob/main/docs/faq.md#how-can-i-allow-additional-web-origins-to-access-ollama) for more information.

---

## Freshservice credentials

**URL:** llms-txt#freshservice-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Freshservice](../../app-nodes/n8n-nodes-base.freshservice/)

Create a [Freshservice](https://freshservice.com/) account.

## Supported authentication methods

Refer to [Freshservice's API documentation](https://api.freshservice.com/v2/) for more information about the service.

To configure this credential, you'll need:

- An **API Key**: Refer to the [Freshservice API authenticaton documentation](https://api.freshservice.com/v2/#authentication) for detailed instructions on getting your API key.
- Your Freshservice **Domain**: Use the subdomain of your Freshservice account. This is part of the URL, for example `https://<subdomain>.freshservice.com`. So if you access Freshservice through `https://n8n.freshservice.com`, enter `n8n` as your **Domain**.

---

## S3 credentials

**URL:** llms-txt#s3-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using S3 endpoint
  - Using DigitalOcean Spaces
  - Using Wasabi

You can use these credentials to authenticate the following nodes:

- [S3](../../app-nodes/n8n-nodes-base.s3/)

Create an account on an S3-compatible server. Use the S3 node for generic or non-AWS S3 like:

- [DigitalOcean Spaces](https://www.digitalocean.com/products/spaces)
- [MinIO](https://min.io/)
- [Wasabi](https://wasabi.com/)

## Supported authentication methods

Refer to your S3-compatible provider's documentation for more information on the services. For example, refer to [Wasabi's REST API documentation](https://docs.wasabi.com/docs/rest-api-introduction) or [DigitalOcean's Spaces API Reference Documentation](https://docs.digitalocean.com/reference/api/spaces-api/).

To configure this credential, you'll need:

- An **S3 Endpoint**: Enter the URL endpoint for the S3 storage backend.
- A **Region**: Enter the region for your S3 storage. Some providers call this the "region slug."
- An **Access Key ID**: Enter the S3 access key your S3 provider uses to access the bucket or space. Some providers call this API keys.
- A **Secret Access Key**: Enter the secret access key for the **Access Key ID**.
- **Force Path Style**: When turned on, the connection uses path-style addressing for buckets.
- **Ignore SSL Issues**: When turned on, n8n will connect even if SSL certificate validation fails.

More detailed instructions for DigitalOcean Spaces and Wasabi follow. If you're using a different provider, refer to their documentation for more information.

### Using DigitalOcean Spaces

To configure the credential for use with DigitalOcean spaces:

1. In DigitalOceans, go to the control panel and open **Settings**. Your endpoint should be listed there. Prepend `https://` to that endpoint and enter it as the **S3 Endpoint** in n8n.
   - Your DigitalOceans endpoint depends on the data center region your bucket's in.
1. For the **Region**, enter the region your bucket's located in, for example, `nyc3`.
   - If you plan to use this credential to create new Spaces, enter `us-east-1` instead.
1. From your DigitalOceans control panel, go to [**API**](https://cloud.digitalocean.com/account/api/spaces).
1. Open the **Spaces Keys** tab.
1. Select **Generate New Key**.
1. Enter a **Name** for your key, like `n8n integration` and select the checkmark.
1. Copy the **Key** displayed next to the name and enter this as the **Access Key ID** in n8n.
1. Copy the **Secret** value and enter this as the **Secret Access Key** in n8n.
   - Refer to [Sharing Access to Buckets with Access Keys](https://docs.digitalocean.com/products/spaces/how-to/manage-access/#access-keys) for more information on generating the key and secret.
1. Keep the **Force Path Style** toggle turned off unless you want to use subdomain/virtual calling format.
1. Decide how you want the n8n credential to handle SSL:
   - To respect SSL certificate validation, keep the default of **Ignore SSL Issues** turned off.
   - To connect even if SSL certificate validation fails, turn on **Ignore SSL Issues**.

Refer to DigitalOcean's [Spaces API Reference Documentation](https://docs.digitalocean.com/reference/api/spaces-api/) for more information.

To configure the credential for use with Wasabi:

1. For the **S3 Endpoint**, enter the service URL for your bucket's region. Start it with `https://`.
   - Refer to [Service URLs for Wasabi's Storage Regions](https://docs.wasabi.com/v1/docs/service-urls-for-wasabis-storage-regions) to identify the correct URL.
1. For the **Region**, enter the region slug portion of the service URL. For example, if you entered `https://s3.us-east-2.wasabisys.com` as the **S3 Endpoint**, `us-east-2` is the region.
1. Log into you Wasabi Console as the root user.
1. Open the **Menu** and select **Access Keys**.
1. Select **CREATE NEW ACCESS KEY**.
1. Select whether the key is for the **Root User** or a **Sub-User** and select **CREATE**.
1. Copy the **Access Key** and enter it in n8n as the **Access Key ID**.
1. Copy the **Secret Key** and enter it in n8n as the **Secret Access Key**.
   - Refer to [Creating a New Access Key](https://docs.wasabi.com/v1/docs/creating-a-new-access-key) for more information on generating the key and secret.
1. Wasabi recommends turning on the **Force Path Style** toggle "because the path-style offers the greatest flexibility in bucket names, avoiding domain name issues." Refer to the Wasabi [REST API Introduction](https://docs.wasabi.com/docs/rest-api-introduction) for more information.
1. Decide how you want the n8n credential to handle SSL:
   - To respect SSL certificate validation, keep the default of **Ignore SSL Issues** turned off.
   - To connect even if SSL certificate validation fails, turn on **Ignore SSL Issues**.

---

## Task runner environment variables

**URL:** llms-txt#task-runner-environment-variables

**Contents:**
- n8n instance environment variables
- Task runner launcher environment variables
- Task runner environment variables (all languages)
- Task runner environment variables (JavaScript)
- Task runner environment variables (Python)

File-based configuration

You can add `_FILE` to individual variables to provide their configuration in a separate file. Refer to [Keeping sensitive data in separate files](../../configuration-methods/#keeping-sensitive-data-in-separate-files) for more details.

[Task runners](../../task-runners/) execute code defined by the [Code node](../../../../integrations/builtin/core-nodes/n8n-nodes-base.code/).

## n8n instance environment variables

| Variable                            | Type                                | Default         | Description                                                                                                                                                                    |
| ----------------------------------- | ----------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `N8N_RUNNERS_ENABLED`               | Boolean                             | `false`         | Are task runners enabled.                                                                                                                                                      |
| `N8N_RUNNERS_MODE`                  | Enum string: `internal`, `external` | `internal`      | How to launch and run the task runner. `internal` means n8n will launch a task runner as child process. `external` means an external orchestrator will launch the task runner. |
| `N8N_RUNNERS_AUTH_TOKEN`            | String                              | Random string   | Shared secret used by a task runner to authenticate to n8n. Required when using `external` mode.                                                                               |
| `N8N_RUNNERS_BROKER_PORT`           | Number                              | `5679`          | Port the task broker listens on for task runner connections.                                                                                                                   |
| `N8N_RUNNERS_BROKER_LISTEN_ADDRESS` | String                              | `127.0.0.1`     | Address the task broker listens on.                                                                                                                                            |
| `N8N_RUNNERS_MAX_PAYLOAD`           | Number                              | `1 073 741 824` | Maximum payload size in bytes for communication between a task broker and a task runner.                                                                                       |
| `N8N_RUNNERS_MAX_OLD_SPACE_SIZE`    | String                              |                 | The `--max-old-space-size` option to use for a task runner (in MB). By default, Node.js will set this based on available memory.                                               |
| `N8N_RUNNERS_MAX_CONCURRENCY`       | Number                              | `5`             | The number of concurrent tasks a task runner can execute at a time.                                                                                                            |
| `N8N_RUNNERS_TASK_TIMEOUT`          | Number                              | `60`            | How long (in seconds) a task can take to complete before the task aborts and the runner restarts. Must be greater than 0.                                                      |
| `N8N_RUNNERS_HEARTBEAT_INTERVAL`    | Number                              | `30`            | How often (in seconds) the runner must send a heartbeat to the broker, else the task aborts and the runner restarts. Must be greater than 0.                                   |
| `N8N_RUNNERS_INSECURE_MODE`         | Boolean                             | `false`         | Whether to disable all security measures in the task runner, for compatibility with modules that rely on insecure JS features. **Discouraged for production use.**             |

## Task runner launcher environment variables

| Variable                                 | Type                                          | Default                 | Description                                                                              |
| ---------------------------------------- | --------------------------------------------- | ----------------------- | ---------------------------------------------------------------------------------------- |
| `N8N_RUNNERS_LAUNCHER_LOG_LEVEL`         | Enum string: `debug`, `info`, `warn`, `error` | `info`                  | Which log messages to show.                                                              |
| `N8N_RUNNERS_AUTH_TOKEN`                 | String                                        | -                       | Shared secret used to authenticate to n8n.                                               |
| `N8N_RUNNERS_AUTO_SHUTDOWN_TIMEOUT`      | Number                                        | `15`                    | The number of seconds to wait before shutting down an idle runner.                       |
| `N8N_RUNNERS_TASK_BROKER_URI`            | String                                        | `http://127.0.0.1:5679` | The URI of the task broker server (n8n instance).                                        |
| `N8N_RUNNERS_LAUNCHER_HEALTH_CHECK_PORT` | Number                                        | `5680`                  | Port for the launcher's health check server.                                             |
| `N8N_RUNNERS_MAX_PAYLOAD`                | Number                                        | `1 073 741 824`         | Maximum payload size in bytes for communication between a task broker and a task runner. |
| `N8N_RUNNERS_MAX_CONCURRENCY`            | Number                                        | `5`                     | The number of concurrent tasks a task runner can execute at a time.                      |

## Task runner environment variables (all languages)

| Variable                                 | Type   | Default                 | Description                                                                                                 |
| ---------------------------------------- | ------ | ----------------------- | ----------------------------------------------------------------------------------------------------------- |
| `N8N_RUNNERS_GRANT_TOKEN`                | String | Random string           | Token the runner uses to authenticate with the task broker. This is automatically provided by the launcher. |
| `N8N_RUNNERS_AUTO_SHUTDOWN_TIMEOUT`      | Number | `15`                    | The number of seconds to wait before shutting down an idle runner.                                          |
| `N8N_RUNNERS_TASK_BROKER_URI`            | String | `http://127.0.0.1:5679` | The URI of the task broker server (n8n instance).                                                           |
| `N8N_RUNNERS_LAUNCHER_HEALTH_CHECK_PORT` | Number | `5680`                  | Port for the launcher's health check server.                                                                |
| `N8N_RUNNERS_MAX_PAYLOAD`                | Number | `1 073 741 824`         | Maximum payload size in bytes for communication between a task broker and a task runner.                    |
| `N8N_RUNNERS_MAX_CONCURRENCY`            | Number | `5`                     | The number of concurrent tasks a task runner can execute at a time.                                         |

## Task runner environment variables (JavaScript)

| Variable                               | Type    | Default            | Description                                                                                                                                                                                                          |
| -------------------------------------- | ------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NODE_FUNCTION_ALLOW_BUILTIN`          | String  | -                  | Permit users to import specific built-in modules in the Code node. Use * to allow all. n8n disables importing modules by default.                                                                                    |
| `NODE_FUNCTION_ALLOW_EXTERNAL`         | String  | -                  | Permit users to import specific external modules (from `n8n/node_modules`) in the Code node. n8n disables importing modules by default.                                                                              |
| `N8N_RUNNERS_ALLOW_PROTOTYPE_MUTATION` | Boolean | `false`            | Whether to allow prototype mutation for external libraries. Set to `true` to allow modules that rely on runtime prototype mutation (for example, [`puppeteer`](https://pptr.dev/)) at the cost of relaxing security. |
| `GENERIC_TIMEZONE`                     | \*      | `America/New_York` | The [same default timezone as configured for the n8n instance](../timezone-localization/).                                                                                                                           |
| `NODE_OPTIONS`                         | String  | -                  | [Options](https://nodejs.org/api/cli.html#node_optionsoptions) for Node.js.                                                                                                                                          |
| `N8N_RUNNERS_MAX_OLD_SPACE_SIZE`       | String  |                    | The `--max-old-space-size` option to use for a task runner (in MB). By default, Node.js will set this based on available memory.                                                                                     |

## Task runner environment variables (Python)

| Variable                     | Type   | Default                                                                                                                                  | Description                                                                                                                                                                                                                                                                                                                    |
| ---------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `N8N_RUNNERS_STDLIB_ALLOW`   | String | -                                                                                                                                        | Python standard library modules that you can use in the Code node, including their submodules. Use `*` to allow all stdlib modules. n8n disables all Python standard library imports by default.                                                                                                                               |
| `N8N_RUNNERS_EXTERNAL_ALLOW` | String | -                                                                                                                                        | Third-party Python modules that are allowed to be used in the Code node, including their submodules. Use `*` to allow all external modules. n8n disables all third-party Python modules by default. Third-party Python modules must be [included](../../task-runners/#adding-extra-dependencies) in the `n8nio/runners` image. |
| `N8N_RUNNERS_BUILTINS_DENY`  | String | `eval,exec,compile,open,input,breakpoint,getattr,object,type,vars,setattr,delattr,hasattr,dir,memoryview,__build_class__,globals,locals` | Python built-ins that you can't use in the Code node. Set to an empty string to allow all built-ins.                                                                                                                                                                                                                           |

---

## What's a chain in AI?

**URL:** llms-txt#what's-a-chain-in-ai?

**Contents:**
- Chains in n8n

[Chains](../../../glossary/#ai-chain) bring together different components of AI to create a cohesive system. They set up a sequence of calls between the components. These components can include models and [memory](../../../glossary/#ai-memory) (though note that in n8n chains can't use memory).

n8n provides three chain nodes:

- [Basic LLM Chain](../../../integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainllm/): use to interact with an LLM, without any additional components.
- [Question and Answer Chain](../../../integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainretrievalqa/): can connect to a [vector store](../../../glossary/#ai-vector-store) using a retriever, or to an n8n workflow using the Workflow Retriever node. Use this if you want to create a workflow that supports asking questions about specific documents.
- [Summarization Chain](../../../integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainsummarization/): takes an input and returns a summary.

There's an important difference between chains in n8n and in other tools such as LangChain: none of the chain nodes support memory. This means they can't remember previous user queries. If you use LangChain to code an AI application, you can give your application memory. In n8n, if you need your workflow to support memory, use an agent. This is essential if you want users to be able to have a natural ongoing conversation with your app.

---

## Nextcloud credentials

**URL:** llms-txt#nextcloud-credentials

**Contents:**
- Supported authentication methods
- Related resources
- Using basic auth
- Using OAuth2

You can use these credentials to authenticate the following nodes:

- [Nextcloud](../../app-nodes/n8n-nodes-base.nextcloud/)

## Supported authentication methods

- Basic auth
- OAuth2

Refer to [Nextcloud's API documentation](https://nextcloud-server.netlify.app/) for more information about the service.

Refer to [Nextcloud's user manual](https://docs.nextcloud.com/server/stable/user_manual/en/contents.html) for more information on installing and configuring Nextcloud.

To configure this credential, you'll need a [Nextcloud](https://nextcloud.com/) account and:

- Your **WebDAV URL**
- Your **User** name
- Your **Password** or an app password

1. To create your **WebDAV URL**: If Nextcloud is in the root of your domain: Enter the URL you use to access Nextcloud and add `/remote.php/webdav/`. For example, if you access Nextcloud at `https://cloud.n8n.com`, your WebDAV URL is `https://cloud.n8n.com/remote.php/webdav`.
   - If you have Nextcloud installed in a subdirectory, enter the URL you use to access Nextcloud and add `/<subdirectory>/remote.php/webdav/`. Replace `<subdirectory>` with the subdirectory Nextcloud's installed in.
   - Refer to Nextcloud's [Third-party WebDAV clients](https://docs.nextcloud.com/server/stable/user_manual/en/files/access_webdav.html#third-party-webdav-clients) documentation for more information on constructing your WebDAV URL.
1. Enter your **User** name.
1. For the **Password**, Nextcloud recommends using an app password rather than your user password. To create an app password:
   1. In the Nextcloud Web interface, select your avatar in the top right and select **Personal settings**.
   1. In the left menu, choose **Security**.
   1. Scroll to the bottom to the **App Password** section and create a new app password.
   1. Copy that app password and enter it in n8n as your **Password**.

To configure this credential, you'll need a [Nextcloud](https://nextcloud.com/) account and:

- An **Authorization URL** and **Access Token URL**: These depend on the URL you use to access Nextcloud.
- A **Client ID**: Generated once you add an OAuth2 client application in **Administrator Security Settings**.
- A **Client Secret**: Generated once you add an OAuth2 client application in **Administrator Security Settings**.
- A **WebDAV URL**: This depends on the URL you use to access Nextcloud.

1. In Nextcloud, open your **Administrator Security Settings**.

1. Find the **Add client** section under **OAuth 2.0 clients**.

1. Enter a **Name** for your client, like `n8n integration`.

1. Copy the **OAuth Callback URL** from n8n and enter it as the **Redirection URI**.

1. Then select **Add** in Nextcloud.

1. In n8n, update the **Authorization URL** to replace `https://nextcloud.example.com` with the URL you use to access Nextcloud. For example, if you access Nextcloud at `https://cloud.n8n.com`, the Authorization URL is `https://cloud.n8n.com/apps/oauth2/authorize`.

1. In n8n, update the **Access Token URL** to replace `https://nextcloud.example.com` with the URL you use to access Nextcloud. For example, if you access Nextcloud at `https://cloud.n8n.com`, the Access Token URL is `https://cloud.n8n.com/apps/oauth2/api/v1/token`.

Pretty URL configuration

The **Authorization URL** and **Access Token URL** assume that you've configured Nextcloud to use [Pretty URLs](https://docs.nextcloud.com/server/latest/admin_manual/installation/source_installation.html#pretty-urls). If you haven't, you must add `/index.php/` between your Nextcloud URL and the `/apps/oauth2` portion, for example: `https://cloud.n8n.com/index.php/apps/oauth2/api/v1/token`.

1. Copy the Nextcloud **Client Identifier** for your OAuth2 client and enter it as the **Client ID** in n8n.

1. Copy the Nextcloud **Secret** and enter it as the **Client Secret** in n8n.

1. In n8n, to create your **WebDAV URL**: If Nextcloud is in the root of your domain, enter the URL you use to access Nextcloud and add `/remote.php/webdav/`. For example, if you access Nextcloud at `https://cloud.n8n.com`, your WebDAV URL is `https://cloud.n8n.com/remote.php/webdav`.

- If you have Nextcloud installed in a subdirectory, enter the URL you use to access Nextcloud and add `/<subdirectory>/remote.php/webdav/`. Replace `<subdirectory>` with the subdirectory Nextcloud's installed in.
   - Refer to Nextcloud's [Third-party WebDAV clients](https://docs.nextcloud.com/server/stable/user_manual/en/files/access_webdav.html#third-party-webdav-clients) documentation for more information on constructing your WebDAV URL.

Refer to the Nextcloud [OAuth2 Configuration documentation](https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/oauth2.html) for more detailed instructions.

---

## Agile CRM credentials

**URL:** llms-txt#agile-crm-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Agile CRM](../../app-nodes/n8n-nodes-base.agilecrm/)

Create an [Agile CRM](https://www.agilecrm.com/) account.

## Supported authentication methods

Refer to [Agile CRM's API documentation](https://www.agilecrm.com/api) for more information about working with the service.

To configure this credential, you'll need:

- An **Email Address** registered with AgileCRM
- A REST **API Key**: Access your Agile CRM API key through **Admin Settings > Developers & API >** [**REST API key**](https://github.com/agilecrm/rest-api?tab=readme-ov-file#api-key).
- An Agile CRM **Subdomain** (for example, `n8n`)

---

## urlscan.io credentials

**URL:** llms-txt#urlscan.io-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [urlscan.io](../../app-nodes/n8n-nodes-base.urlscanio/)

Create an [urlscan.io](https://urlscan.io/) account.

## Supported authentication methods

Refer to [urlscan.io's API documentation](https://urlscan.io/docs/api/) for more information about the service.

To configure this credential, you'll need:

- An **API Key**: Get your API key from **Settings & API > API Keys**.

---

## VirusTotal credentials

**URL:** llms-txt#virustotal-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

Create a [VirusTotal](https://www.virustotal.com) account.

## Supported authentication methods

Refer to [VirusTotal's documentation](https://docs.virustotal.com/reference/overview) for more information about the service.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/virustotal/) on n8n's website.

To configure this credential, you'll need:

- An **API Token**: Go to your **user account menu > API key** to get your API key. Enter this as the **API Token** in your n8n credential. Refer to [API authentication](https://docs.virustotal.com/reference/authentication) for more information.

---

## Gmail Send Email credentials

**URL:** llms-txt#gmail-send-email-credentials

**Contents:**
- Prerequisites
  - Enable 2-step Verification
  - Generate an app password
- Set up the credential

Follow these steps to configure the Send Email credentials with a Gmail account.

To follow these instructions, you must first:

1. [Enable 2-step Verification](#enable-2-step-verification) on your Gmail account.
1. [Generate an app password](#generate-an-app-password).

### Enable 2-step Verification

To enable 2-step Verification:

1. Log in to your [Google Account](https://myaccount.google.com/).
1. Select **Security** from the left navigation.
1. Under **How you sign in to Google**, select **2-Step Verification**.
   - If 2-Step Verification is already enabled, skip to the next section.
1. Select **Get started**.
1. Follow the on-screen steps to configure 2-Step Verification.

Refer to [Turn on 2-step Verification](https://support.google.com/accounts/answer/185839) for more information.

If you can't turn on 2-step Verification, check with your email administrator.

### Generate an app password

To generate an app password:

1. In your Google account, go to [App passwords](https://myaccount.google.com/apppasswords).
1. Enter an **App name** for your new app password, like `n8n credential`.
1. Select **Create**.
1. Copy the generated app password. You'll use this in your n8n credential.

Refer to Google's [Sign in with app passwords documentation](https://support.google.com/accounts/answer/185833?hl=en) for more information.

## Set up the credential

To set up the Send Email credential to use Gmail:

1. Enter your Gmail email address as the **User**.
1. Enter the app password you generated above as the **Password**.
1. Enter `smtp.gmail.com` as the **Host**.
1. For the **Port**:
   - Keep the default `465` for SSL or if you're unsure what to use.
   - Enter `587` for TLS.
1. Turn on the **SSL/TLS** toggle.

Refer to the Outgoing Mail (SMTP) Server settings in [Read Gmail messages on other email clients using POP](https://support.google.com/mail/answer/7104828?hl=en) for more information. If the settings above don't work for you, check with your email administrator.

---

## Unleashed Software credentials

**URL:** llms-txt#unleashed-software-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Unleashed Software](../../app-nodes/n8n-nodes-base.unleashedsoftware/)

Create an [Unleashed Software](https://www.unleashedsoftware.com/) account.

## Supported authentication methods

Refer to [Unleashed's API documentation](https://apidocs.unleashedsoftware.com/) for more information about the service.

To configure this credential, you'll need:

- An **API ID**: Go to **Integrations > Unleashed API Access** to find your **API ID**.
- An **API Key**: Go to **Integrations > Unleashed API Access** to find your **API Key**.

Refer to [Unleashed API Access](https://support.unleashedsoftware.com/hc/en-us/articles/4402393233689-Unleashed-API-Access) for more information.

Account owner required

You must log in as an Unleashed account owner to view the API ID and API Key.

---

## Home Assistant credentials

**URL:** llms-txt#home-assistant-credentials

**Contents:**
- Supported authentication methods
- Related resources
- Using API access token

You can use these credentials to authenticate the following nodes:

- [Home Assistant](../../app-nodes/n8n-nodes-base.homeassistant/)

## Supported authentication methods

Refer to [Home Assistant's API documentation](https://developers.home-assistant.io/docs/api/rest) for more information about the service.

## Using API access token

To configure this credential, you'll need to [Install](https://www.home-assistant.io/installation/) Home Assistant, create a [Home Assistant](https://www.home-assistant.io/getting-started/onboarding) account, and have:

- Your **Host**
- The **Port**
- A Long-Lived **Access Token**

To generate an access token and set up the credential:

1. To generate your **Access Token**, log in to Home Assistant and open your [User profile](https://my.home-assistant.io/redirect/profile).
1. In the **Long-Lived Access Tokens** section, generate a new token.
1. Copy this token and enter it in n8n as your **Access Token**.
1. Enter the URL or IP address of your Home Assistant **Host**, without the `http://` or `https://` protocol, for example `your.awesome.home`.
1. For the **Port**, enter the appropriate port:
   - If you've made no port changes and access Home Assistant at `http://`, keep the default of `8123`.
   - If you've made no port changes and access Home Assistant at `https://`, enter `443`.
   - If you've configured Home Assistant to use a specific port, enter that port.
1. If you've enabled SSL in Home Assistant in the [config.yml map key](https://developers.home-assistant.io/docs/add-ons/configuration/?_highlight=ssl#add-on-configuration), turn on the **SSL** toggle in n8n. If you're not sure, it's best to turn this setting on if you access your home assistant UI using `https://` instead of `http://`.

---

## TheHive credentials

**URL:** llms-txt#thehive-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [TheHive](../../app-nodes/n8n-nodes-base.thehive/)

TheHive and TheHive 5

n8n provides two nodes for TheHive. Use these credentials with TheHive node for TheHive 3 or TheHive 4. If you're using TheHive5 node, use [TheHive 5 credentials](../thehive5/).

Install [TheHive](https://docs.strangebee.com/thehive/installation/installation-methods/) on your server.

## Supported authentication methods

Refer to [TheHive 3's API documentation](https://docs.thehive-project.org/thehive/legacy/thehive3/api/) and [TheHive 4's API documentation](https://docs.thehive-project.org/thehive/) for more information about the services.

To configure this credential, you'll need:

- An **API Key**: Create an API key from **Organization > Create API Key**. Refer to [API Authentication](https://docs.thehive-project.org/thehive/legacy/thehive3/api/authentication/) for more information.
- Your **URL**: The URL of your TheHive server.
- An **API Version**: Choose between:
  - **TheHive 3 (api v0)**
  - **TheHive 4 (api v1)**
  - For TheHive 5, use [TheHive 5 credentials](../thehive5/) instead.
- **Ignore SSL Issues**: When turned on, n8n will connect even if SSL certificate validation fails.

---

## Vercel AI Gateway credentials

**URL:** llms-txt#vercel-ai-gateway-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key
- Using OIDC token

You can use these credentials to authenticate the following nodes:

- [Chat Vercel AI Gateway](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatvercel/)

Create a [Vercel](https://vercel.com/) account.

## Supported authentication methods

- API key
- OIDC token

Refer to the [Vercel AI Gateway documentation](https://vercel.com/docs/ai-gateway) for more information about the service.

To configure this credential, you'll need:

To generate your API Key:

1. [Login to Vercel](https://vercel.com/login) or [create an account](https://vercel.com/signup).
1. Go to the Vercel dashboard and select the **AI Gateway** tab.
1. Select **API keys** on the left side bar.
1. Select **Add key** and proceed with **Create key** from the Dialog.
1. Copy your key and add it as the **API Key** in n8n.

To configure this credential, you'll need:

To generate your OIDC token:

1. In local development, link your application to a Vercel project with the `vc link` command.
1. Run the `vercel env pull` command to pull the environment variables from Vercel.
1. Copy your token and add it as the **OIDC TOKEN** in n8n.

---

## Wekan credentials

**URL:** llms-txt#wekan-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using basic auth

You can use these credentials to authenticate the following nodes:

- [Wekan](../../app-nodes/n8n-nodes-base.wekan/)

Install [Wekan](https://github.com/wekan/wekan/wiki) on your server.

## Supported authentication methods

Refer to [Wekan's API documentation](https://github.com/wekan/wekan/wiki/REST-API) for more information about authenticating with the service.

To configure this credential, you'll need:

- A **Username**: Enter your Wekan username.
- A **Password**: Enter your Wekan password.
- A **URL**: Enter your Wekan domain.

---

## Cohere credentials

**URL:** llms-txt#cohere-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Cohere](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmcohere/)
- [Cohere Chat](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatcohere/)
- [Reranker Cohere](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.rerankercohere/)
- [Embeddings Cohere](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingscohere/)

Create a [Cohere account](https://cohere.com/).

You'll need an account with the following access:

- For the Trial API, you need User or Owner permissions.
- For Production API, you need Owner permissions.

Refer to [Cohere Teams and Roles documentation](https://docs.cohere.com/reference/teams-and-roles) for more information.

## Supported authentication methods

Refer to [Cohere's documentation](https://docs.cohere.com/reference/about) for more information about the service.

View n8n's [Advanced AI](../../../../advanced-ai/) documentation.

To configure this credential, you'll need:

- An **API Key**: To generate a Cohere API key, go to the [API Keys section of your Cohere dashboard](https://dashboard.cohere.com/api-keys).

---

## Jina AI credentials

**URL:** llms-txt#jina-ai-credentials

**Contents:**
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Jina AI](../../app-nodes/n8n-nodes-base.jinaai/)

## Supported authentication methods

Refer to [Jina AI's reader API documentation](https://r.jina.ai/docs) and [Jina AI's search API documentation](https://s.jina.ai/docs) for more information about the service.

To configure this credential, you'll need:

- **API key**: A Jina AI API key. You can get your free API key without creating an account by doing the following:
  1. Visit the [Jina AI website](https://jina.ai/).
  1. Select **API** on the page.
  1. Select **API KEY & BILLING** in the API app widget.
  1. Copy the key labeled "This is your unique key. Store it securely!".

Jina AI API keys start with 10 million free tokens that you can use non-commercially. To top up your key or use commercially, scroll on the **API KEY & BILLING** tab of the **API** widget and select the top up option that best fits your needs.

---

## ProfitWell credentials

**URL:** llms-txt#profitwell-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API token

You can use these credentials to authenticate the following nodes:

- [ProfitWell](../../app-nodes/n8n-nodes-base.profitwell/)

Create a [ProfitWell](https://www2.profitwell.com/signup/start) account.

## Supported authentication methods

Refer to [Profitwell's API documentation](https://profitwellapiv2.docs.apiary.io/) for more information about the service.

To configure this credential, you'll need:

- An **API Token**: To get an API key or token, go to **Account Settings > Integrations** and select **ProfitWell API**.

---

## Reddit credentials

**URL:** llms-txt#reddit-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using OAuth2

You can use these credentials to authenticate the following nodes:

- [Reddit](../../app-nodes/n8n-nodes-base.reddit/)

Create a [Reddit](https://reddit.com/) account.

## Supported authentication methods

Refer to [Reddit's developer documentation](https://support.reddithelp.com/hc/en-us/articles/14945211791892-Developer-Platform-Accessing-Reddit-Data) for more information about the service.

To configure this credential, you'll need:

- A **Client ID**
- A **Client Secret**

Reddit's developer program is in a closed beta. The instructions below are for regular Reddit users, not members of the developer platform.

Generate both by creating a [third-party app](https://www.reddit.com/prefs/apps). Visit the previous link or go to your **profile > Settings > Safety & Privacy > Manage third-party app authorization > are you a developer? create an app**.

Use these settings for your app:

- Copy the **OAuth Callback URL** from n8n and use it as your app's **redirect uri**.
- The app's client ID displays underneath your app name. Copy that and add it as your n8n **Client ID**.
- Copy the app's **secret** and add it as your n8n **Client Secret**.

---

## Sekoia credentials

**URL:** llms-txt#sekoia-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

Create a [Sekoia SOC platform](https://www.sekoia.io/en/homepage/) account.

## Supported authentication methods

Refer to [Sekoia's documentation](https://docs.sekoia.io/getting_started/) for more information about the service.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/sekoia/) on n8n's website.

To configure this credential, you'll need:

- An **API Key**: To generate an API key, select **+ API Key**. Refer to [Create an API key](https://docs.sekoia.io/getting_started/manage_api_keys/#create-an-api-key) for more information.

---

## Vero credentials

**URL:** llms-txt#vero-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API auth token

You can use these credentials to authenticate the following nodes:

- [Vero](../../app-nodes/n8n-nodes-base.vero/)

Create a [Vero](https://getvero.com/) account.

## Supported authentication methods

Refer to [Vero's API documentation](https://developers.getvero.com/track-api-reference/#/) for more information about the service.

## Using API auth token

To configure this credential, you'll need:

- An **Auth Token**: Get your auth token from your Vero account [settings](https://app.getvero.com/settings/project). Refer to [API authentication](https://developers.getvero.com/track-api-reference/#/#authentication) for more information.

---

## Twake credentials

**URL:** llms-txt#twake-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using Cloud API key
- Using Server API key

You can use these credentials to authenticate the following nodes:

- [Twake](../../app-nodes/n8n-nodes-base.twake/)

Create a [Twake](https://twake.app/) account.

## Supported authentication methods

- Cloud API key
- Server API key

Refer to [Twake's documentation](https://doc.twake.app/developers-api/api-reference) for more information about the service.

## Using Cloud API key

To configure this credential, you'll need:

- A **Workspace Key**: Generated when you install the **n8n** application to your Twake Cloud environment and select **Configure**. Refer to [How to connect n8n to Twake](https://help.twake.app/en/latest/applications/connectors/index.html#how-to-connect-n8n-to-twake) for more detailed instructions.

## Using Server API key

To configure this credential, you'll need:

- A **Host URL**: The URL of your Twake self-hosted instance.
- A **Public ID**: Generated when you create an app.
- A **Private API Key**: Generated when you create an app.

To generate your **Public ID** and **Private API Key**, [create a Twake application](https://doc.twake.app/developers-api/get-started/create-your-first-application):

1. Go to **Workspace Settings > Applications and connectors > Access your applications and connectors > Create an application**.
1. Enter appropriate details.
1. Once you've created your app, view its **API Details**.
1. Copy the **Public identifier** and add it as the n8n **Public ID**.
1. Copy the **Private key** and add it as the n8n **Private API Key**.

Refer to [API settings](https://doc.twake.app/developers-api/get-started/create-your-first-application#id-3.-api-settings) for more information.

---

## FTP credentials

**URL:** llms-txt#ftp-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using FTP account
- Using SFTP account

You can use these credentials to authenticate the following nodes:

- [FTP](../../core-nodes/n8n-nodes-base.ftp/)

Create an account on a File Transfer Protocol (FTP) server like [JSCAPE](https://mft.jscape.com/lp/ftp-server), [OpenSSH](https://www.openssh.com/), or [FileZilla Server](https://filezilla-project.org/).

## Supported authentication methods

- **FTP account**: Use this method if your FTP server doesn't support SSH tunneling or encrypted connections.
- **SFTP account**: Use this method if your FTP server supports SSH tunneling and encrypted connections.

File Transfer Protocol (FTP) and Secure Shell File Transfer Protocol (SFTP) are protocols for transferring files directly between an FTP/SFTP client and server.

Use this method if your FTP server doesn't support SSH tunneling or encrypted connections.

To configure this credential, you'll need to:

1. Enter the name or IP address of your FTP server's **Host**.
1. Enter the **Port** number the connection should use.
1. Enter the **Username** the credential should connect as.
1. Enter the user's **Password**.

Review your FTP server provider's documentation for instructions on getting the information you need.

## Using SFTP account

Use this method if your FTP server supports SSH tunneling and encrypted connections.

To configure this credential, you'll need to:

1. Enter the name or IP address of your FTP server's **Host**.
1. Enter the **Port** number the connection should use.
1. Enter the **Username** the credential should connect as.
1. Enter the user's **Password**.
1. For the **Private Key**, enter a string for either key-based or host-based user authentication
   - Enter your Private Key in OpenSSH format. This is most often generated using the ssh-keygen `-o` parameter, for example: `ssh-keygen -o -a 100 -t ed25519`.
1. If the **Private Key** is encrypted, enter the **Passphrase** used to decrypt it.
   - If the **Private Key** doesn't use a passphrase, leave this field blank.

Review your FTP server provider's documentation for instructions on getting the information you need.

---

## Microsoft Azure Monitor credentials

**URL:** llms-txt#microsoft-azure-monitor-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using OAuth2

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

- Create a Microsoft Azure account or subscription
- An app registered in Microsoft Entra ID

## Supported authentication methods

Refer to [Microsoft Azure Monitor's API documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/azure-monitor-rest-api-index) for more information about the service.

To configure this credential, you'll need a Microsoft Azure account and:

- A **Client ID**
- A **Client Secret**
- A **Tenant ID**
- The **Resource** you plan to access

Refer to [Microsoft Azure Monitor's API documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/api/access-api?tabs=rest#set-up-authentication) for more information about authenticating to the service.

---

## Send Email credentials

**URL:** llms-txt#send-email-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using SMTP account
  - Provider instructions
  - My provider isn't listed

You can use these credentials to authenticate the following nodes:

- [Send Email](../../core-nodes/n8n-nodes-base.sendemail/)

- Create an email account on a service that supports SMTP.
- Some email providers require that you enable or set up outgoing SMTP or generate an app password. Refer to your provider's documentation to see if there are other required steps.

## Supported authentication methods

Simple Message Transfer Protocol (SMTP) is a standard protocol for sending and receiving email. Most email providers offer instructions on setting up their service with SMTP. Refer to your provider's SMTP instructions.

## Using SMTP account

To configure this credential, you'll need:

- A **User** email address
- A **Password**: This may be the user's password or an app password. Refer to the documentation for your email provider.
- The **Host**: The SMTP host address for your email provider, often formatted as `smtp.<provider>.com`. Check with your provider.
- A **Port** number: The port depends on the encryption method:
- Port `465` for SSL/TLS (implicit encryption)
- Port `587` for STARTTLS (explicit encryption)
- Port `25` for no encryption (not recommended) Check with your email provider for their specific requirements.
- **SSL/TLS**: This toggle controls the encryption method:
- Turn **ON** for port `465` (uses implicit SSL/TLS encryption)
- Turn **OFF** for port `587` (uses STARTTLS explicit encryption)
- Turn **OFF** for port `25` (no encryption)
- **Disable STARTTLS**: When SSL/TLS is disabled, the SMTP server can still try to [upgrade the TCP connection using STARTTLS](https://en.wikipedia.org/wiki/Opportunistic_TLS). Turning this on prevents that behaviour.
- **Client Host Name**: If needed by your provider, add a client host name. This name identifies the client to the server.

### Provider instructions

Refer to the quickstart guides for these common email providers.

Refer to [Gmail](gmail/).

Refer to [Outlook.com](outlook/).

Refer to [Yahoo](yahoo/).

### My provider isn't listed

If your email provider isn't listed here, search for `SMTP settings` to find their instructions. (These instructions may also be included with `IMAP settings` or `POP settings`.)

---

## Miro credentials

**URL:** llms-txt#miro-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using OAuth2

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

Create a [Miro](https://miro.com/) account.

## Supported authentication methods

Refer to [Miro's API documentation](https://developers.miro.com/reference/overview) for more information about the service.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/miro/) on n8n's website.

To configure this credential, you'll need a [Miro](https://miro.com/login/) account and app, as well as:

- A **Client ID**: Generated when you create a new OAuth2 application.
- A **Client Secret**: Generated when you create a new OAuth2 application.

Refer to [Miro's API documentation](https://developers.miro.com/reference/overview) for more information about authenticating to the service.

Note for n8n Cloud users

Cloud users don't need to provide connection details. Select **Connect my account** to connect through your browser.

If you're [self-hosting](../../../../hosting/) n8n, you'll need to [create an app](https://developers.miro.com/docs/rest-api-build-your-first-hello-world-app) to configure OAuth2. Refer to [Miro's OAuth documentation](https://developers.miro.com/docs/getting-started-with-oauth) for more information about setting up OAuth2.

---

## Jenkins credentials

**URL:** llms-txt#jenkins-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API token

You can use these credentials to authenticate the following nodes:

- [Jenkins](../../app-nodes/n8n-nodes-base.jenkins/)

Create an account on a [Jenkins](https://www.jenkins.io/) instance.

## Supported authentication methods

Jenkins doesn't provide public API documentation; API documentation for each page is available from the user interface in the bottom right. Refer to those detailed pages for more information about the service. Refer to [Jenkins Remote Access API](https://www.jenkins.io/doc/book/using/remote-access-api/) for information on the API and API wrappers.

To configure this credential, you'll need:

- The **Jenkins Username**: For the user whom the token belongs to
- A **Personal API Token**: Generate this from the user's **profile details > Configure > Add new token**. Refer to [these Stack Overflow instructions](https://stackoverflow.com/questions/45466090/how-to-get-the-api-token-for-jenkins) for more detail.
- The **Jenkins Instance URL**

Jenkins rebuilt their API token setup in 2018. If you're working with an older Jenkins instance, be sure you're using a non-legacy API token. Refer to [Security Hardening: New API token system in Jenkins 2.129+](https://www.jenkins.io/blog/2018/07/02/new-api-token-system/) for more information.

---

## AWS credentials

**URL:** llms-txt#aws-credentials

**Contents:**
- Supported authentication methods
- Related resources
- Using API access key

You can use these credentials to authenticate the following nodes:

- [AWS Bedrock Chat Model](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatawsbedrock/)
- [AWS Certificate Manager](../../app-nodes/n8n-nodes-base.awscertificatemanager/)
- [AWS Cognito](../../app-nodes/n8n-nodes-base.awscognito/)
- [AWS Comprehend](../../app-nodes/n8n-nodes-base.awscomprehend/)
- [AWS DynamoDB](../../app-nodes/n8n-nodes-base.awsdynamodb/)
- [AWS Elastic Load Balancing](../../app-nodes/n8n-nodes-base.awselb/)
- [AWS IAM](../../app-nodes/n8n-nodes-base.awsiam/)
- [AWS Lambda](../../app-nodes/n8n-nodes-base.awslambda/)
- [AWS Rekognition](../../app-nodes/n8n-nodes-base.awsrekognition/)
- [AWS S3](../../app-nodes/n8n-nodes-base.awss3/)
- [AWS SES](../../app-nodes/n8n-nodes-base.awsses/)
- [AWS SNS](../../app-nodes/n8n-nodes-base.awssns/)
- [AWS SNS Trigger](../../trigger-nodes/n8n-nodes-base.awssnstrigger/)
- [AWS SQS](../../app-nodes/n8n-nodes-base.awssqs/)
- [AWS Textract](../../app-nodes/n8n-nodes-base.awstextract/)
- [AWS Transcribe](../../app-nodes/n8n-nodes-base.awstranscribe/)
- [Embeddings AWS Bedrock](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsawsbedrock/)

## Supported authentication methods

Refer to [AWS's Identity and Access Management documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started.html) for more information about the service.

## Using API access key

To configure this credential, you'll need an [AWS](https://aws.amazon.com/) account and:

- Your AWS **Region**
- The **Access Key ID**: Generated when you create an access key.
- The **Secret Access Key**: Generated when you create an access key.

To create an access key and set up the credential:

1. In your n8n credential, select your AWS **Region**.
1. Log in to the [IAM console](https://console.aws.amazon.com/iam).
1. In the navigation bar on the upper right, select your user name and then select **Security credentials**.
1. In the **Access keys** section, select **Create access key**.
1. On the **Access key best practices & alternatives page**, choose your use case. If it doesn't prompt you to create an access key, select **Other**.
1. Select **Next**.
1. Set a **description** tag value for the access key to make it easier to identify, for example `n8n integration`.
1. Select **Create access key**.
1. Reveal the **Access Key ID** and **Secret Access Key** and enter them in n8n.
1. To use a **Temporary security credential**, turn that option on and add a **Session token**. Refer to the [AWS Temporary security credential documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html) for more information on working with temporary security credentials.
1. If you use [Amazon Virtual Private Cloud (VPC)](https://aws.amazon.com/vpc/) to host n8n, you can establish a connection between your VPC and some apps. Use **Custom Endpoints** to enter relevant custom endpoint(s) for this connection. This setup works with these apps:
   - Rekognition
   - Lambda
   - SNS
   - SES
   - SQS
   - S3

You can also generate access keys through the AWS CLI and AWS API. Refer to the [AWS Managing Access Keys documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) for instructions on generating access keys using these methods.

---

## PagerDuty credentials

**URL:** llms-txt#pagerduty-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API token
- Using OAuth2

You can use these credentials to authenticate the following nodes:

- [PagerDuty](../../app-nodes/n8n-nodes-base.pagerduty/)

Create a [PagerDuty](https://pagerduty.com/) account.

## Supported authentication methods

Refer to [PagerDuty's API documentation](https://developer.pagerduty.com/docs/531092d4c6658-rest-api-v2-overview) for more information about the service.

To configure this credential, you'll need:

- A general access **API Token**: To generate an API token, go to **Integrations > Developer Tools > API Access Keys > Create New API Key**. Refer to [Generate a General Access REST API key](https://support.pagerduty.com/docs/api-access-keys#generate-a-general-access-rest-api-key) for more information.

Note for n8n Cloud users

Cloud users don't need to provide connection details. Select **Connect my account** to connect through your browser.

If you need to configure OAuth2 from scratch, [register a new Pagerduty app](https://developer.pagerduty.com/docs/dd91fbd09a1a1-register-an-app).

Use these settings for registering your app:

- In the **Category** dropdown list, select **Infrastructure Automation**.
- In the **Functionality** section, select **OAuth 2.0**.

Once you **Save** your app, open the app details and [edit your app configuration](https://developer.pagerduty.com/docs/dd91fbd09a1a1-register-an-app#editing-your-app-configuration) to use these settings:

- Within the **OAuth 2.0** section, select **Add**.
- Copy the **OAuth Callback URL** from n8n and paste it into the **Redirect URL** field.
- Copy the **Client ID** and **Client Secret** from PagerDuty and add these to your n8n credentials.
- Select **Read/Write** from the **Set Permission Scopes** dropdown list.

Refer to the instructions in [App functionality](https://developer.pagerduty.com/docs/b25fd1b8acb1b-app-functionality) for more information on available functionality. Refer to the PagerDuty [OAuth Functionality documentation](https://developer.pagerduty.com/docs/f59fdbd94ceab-o-auth-functionality) for more information on the OAuth flow.

---

## F5 Big-IP credentials

**URL:** llms-txt#f5-big-ip-credentials

**Contents:**
- Prerequisites
- Authentication methods
- Related resources
- Using account login

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

Create an [F5 Big-IP](https://www.f5.com/products/big-ip-services) account.

## Authentication methods

Refer to [F5 Big-IP's API documentation](https://clouddocs.f5.com/products/big-iq/mgmt-api/v0.0/) for more information about the service.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/f5-big-ip/) on n8n's website.

## Using account login

To configure this credential, you'll need:

- A **Username**: Use the username you use to log in to F5 Big-IP.
- A **Password**: Use the user password you use to log in to F5 Big-IP.

---

## SSH credentials

**URL:** llms-txt#ssh-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using password
- Using private key

You can use these credentials to authenticate the following nodes:

- [SSH](../../core-nodes/n8n-nodes-base.ssh/)

- Create a remote server with SSH enabled.
- Create a user account that can `ssh` into the server using one of the following:
  - Their own [password](#using-password)
  - An SSH [private key](#using-private-key)

## Supported authentication methods

- [Password](#using-password): Use this method if you have a user account that can `ssh` into the server using their own password.
- [Private key](#using-private-key): Use this method if you have a user account that uses an SSH key for the server or service.

Secure Shell (SSH) protocol is a method for securely sending commands over a network. Refer to [Connecting to GitHub with SSH](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh) for an example of SSH setup.

Use this method if you have a user account that can `ssh` into the server using their own password.

To configure this credential, you'll need to:

1. Enter the IP address of the server you're connecting to as the **Host**.
1. Enter the **Port** to use for the connection. SSH uses port `22` by default.
1. Enter the **Username** for a user account with `ssh` access on the server.
1. Enter the **Password** for that user account.

Use this method if you have a user account that uses an SSH key for the server or service.

To configure this credential, you'll need to:

1. Enter the IP address of the server you're connecting to as the **Host**.
1. Enter the **Port** to use for the connection. SSH uses port `22` by default.
1. Enter the **Username** of the account that generated the private key.
1. Enter the entire contents of your SSH **Private Key**.
1. If you created a **Passphrase** for the **Private Key**, enter the passphrase.
   - If you didn't create a passphrase for the key, leave blank.

---

## Qdrant credentials

**URL:** llms-txt#qdrant-credentials

**Contents:**
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Qdrant Vector Store](../../cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreqdrant/)

## Supported authentication methods

Refer to [Qdrant's documentation](https://qdrant.tech/documentation/) for more information.

View n8n's [Advanced AI](../../../../advanced-ai/) documentation.

To configure this credential, you'll need a [Qdrant cluster](https://qdrant.tech/documentation/cloud/create-cluster/) and:

- An **API Key**
- Your **Qdrant URL**

1. Go to the [Cloud Dashboard](https://qdrant.to/cloud).
1. Select **Access Management** to display available API keys (or go to the **API Keys** section of the **Cluster detail** page).
1. Select **Create**.
1. Select the cluster you want the key to have access to in the dropdown.
1. Select **OK**.
1. Copy the API Key and enter it in your n8n credential.
1. Enter the URL for your Qdrant cluster in the **Qdrant URL**. Refer to [Qdrant Web UI](https://qdrant.tech/documentation/interfaces/web-ui/) for more information.

Refer to [Qdrant's authentication documentation](https://qdrant.tech/documentation/cloud/authentication/) for more information on creating and using API keys.

---

## Iterable credentials

**URL:** llms-txt#iterable-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Iterable](../../app-nodes/n8n-nodes-base.iterable/)

Create an [Iterable](https://iterable.com) account.

## Supported authentication methods

Refer to Iterable's API documentation for more information about the service:

- [US-based Iterable projects](https://api.iterable.com/api/docs)
- [Europe-based Iterable projects](https://api.eu.iterable.com/api/docs)

To configure this credential, you'll need:

- An **API Key**: Refer to [Iterable's Creating API keys documentation](https://support.iterable.com/hc/en-us/articles/360043464871-API-Keys#creating-api-keys) for instructions on creating API keys.

---

## Humantic AI credentials

**URL:** llms-txt#humantic-ai-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Humantic AI](../../app-nodes/n8n-nodes-base.humanticai/)

Create a [Humantic AI](https://humantic.ai/) account.

You can also try out an API key as a free trial at the [Humantic AI API](https://api.humantic.ai/) page.

## Supported authentication methods

Refer to [Humantic AI's API documentation](https://api.humantic.ai) for more information about the service.

To configure this credential, you'll need:

- An **API Key**: Get an API key from the [Humantic AI API](https://api.humantic.ai/) page.

---

## Brandfetch credentials

**URL:** llms-txt#brandfetch-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following node:

- [Brandfetch](../../app-nodes/n8n-nodes-base.brandfetch/)

Create a [Brandfetch developer](https://docs.brandfetch.com/docs/apis#-create-an-account) developer account.

## Supported authentication methods

Refer to [Brandfetch's API documentation](https://docs.brandfetch.com/docs/apis) for more information about the service.

To configure this credential, you'll need:

- An **API Key**: Refer to the [Brandfetch Create an Account documentation](https://docs.brandfetch.com/docs/apis#-create-an-account) to generate an API key.

---

## Zulip credentials

**URL:** llms-txt#zulip-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Zulip](../../app-nodes/n8n-nodes-base.zulip/)

Create a [Zulip](https://zulip.com/) account.

## Supported authentication methods

Refer to [Zulip's API documentation](https://zulip.com/api/) for more information about the service.

To configure this credential, you'll need:

- A **URL**: Enter the URL of your Zulip domain.
- An **Email** address: Enter the email address you use to log in to Zulip.
- An **API Key**: Get your API key in the **Gear cog > Personal Settings > Account & privacy > API Key**. Refer to [API Keys](https://zulip.com/api/api-keys) for more information.

---

## Mattermost credentials

**URL:** llms-txt#mattermost-credentials

**Contents:**
- Supported authentication methods
- Related resources
- Using API access token
- Enable personal access tokens

You can use these credentials to authenticate the following nodes:

- [Mattermost](../../app-nodes/n8n-nodes-base.mattermost/)

## Supported authentication methods

Refer to [Mattermost's API documentation](https://api.mattermost.com/) for more information about the service.

## Using API access token

To configure this credential, you'll need a [Mattermost](https://www.mattermost.com/) account and:

- A personal **Access Token**
- Your Mattermost **Base URL**.

1. In Mattermost, go to **Profile > Security > Personal Access Tokens**.

No Personal Access Tokens option

If you don't see the Personal Access Tokens option, refer to the troubleshooting steps in [Enable personal access tokens](#enable-personal-access-tokens) below.

1. Select **Create Token**.

1. Enter a **Token description**, like `n8n integration`.

1. Copy the **Token ID** and enter it as the **Access Token** in your n8n credential.

1. Enter your Mattermost URL as the **Base URL**.

1. By default, n8n connects only if SSL certificate validation succeeds. To connect even if SSL certificate validation fails, turn on **Ignore SSL Issues**.

Refer to the Mattermost [Personal access tokens documentation](https://developers.mattermost.com/integrate/reference/personal-access-token/) for more information.

## Enable personal access tokens

Not seeing the **Personal Access Tokens** option has two possible causes:

- Mattermost doesn't have the personal access tokens integration enabled.
- You're trying to generate a personal access token as a non-admin user who doesn't have permission to generate personal access tokens.

To identify the root cause and resolve it:

1. Log in to Mattermost as an admin.
1. Go to **System Console > Integrations > Integration Management**.
1. Confirm that **Enable personal access tokens** is set to **true**. If it's not, change.
1. Go to **System Console > User Management > Users**.
1. Search for the user account you want to allow to generate personal access tokens.
1. Select the **Actions** dropdown for the user and select **Manage roles**.
1. Check the box for **Allow this account to generate personal access tokens** and **Save**.

Refer to the Mattermost [Personal access tokens documentation](https://developers.mattermost.com/integrate/reference/personal-access-token/) for more information.

---

## Datadog credentials

**URL:** llms-txt#datadog-credentials

**Contents:**
- Prerequisites
- Related resources
- Using API Key

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

Create a [Datadog](https://app.datadoghq.eu/signup) account.

Refer to [Datadog's API documentation](https://docs.datadoghq.com/api/latest/) for more information about authenticating with the service.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/datadog/) on n8n's website.

To configure this credential, you'll need:

- Your Datadog instance **Host**
- An **API Key**
- An **App Key**

Refer to [Authentication](https://docs.datadoghq.com/api/latest/authentication/) on Datadog's website for more information.

---

## Magento 2 credentials

**URL:** llms-txt#magento-2-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API access token

You can use these credentials to authenticate the following node:

- [Magento 2](../../app-nodes/n8n-nodes-base.magento2/)

- Create a [Magento (Adobe Commerce)](https://business.adobe.com/products/commerce.html) account.
- Set your store to **Allow OAuth Access Tokens to be used as standalone Bearer tokens**.
  - Go to **Admin > Stores > Configuration > Services > OAuth > Consumer Settings**.

- Set the **Allow OAuth Access Tokens to be used as standalone Bearer tokens** option to **Yes**.

- You can also enable this setting from the CLI by running the following command:

This step is necessary until n8n updates the Magento 2 credentials to use OAuth. Refer to [Integration Tokens](https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-token/#integration-tokens) for more information.

## Supported authentication methods

Refer to [Magento's API documentation](https://developer.adobe.com/commerce/docs/) for more information about the service.

## Using API access token

To configure this credential, you'll need:

- A **Host**: Enter the address of your Magento store.
- An **Access Token**: Get an access token from the [**Admin Panel**](https://docs.magento.com/user-guide/stores/admin.html):
  1. Go to **System > Extensions > Integrations**.
  1. Add a new Integration.
  1. Go to the **API** tab and select the Magento resources you'd like the n8n integration to access.
  1. From the **Integrations** page, **Activate** the new integration.
  1. Select **Allow** to display your access token so you can copy it and enter it in n8n.

**Examples:**

Example 1 (unknown):
```unknown
bin/magento config:set oauth/consumer/enable_integration_as_bearer 1
```

---

## Freshworks CRM credentials

**URL:** llms-txt#freshworks-crm-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Freshworks CRM](../../app-nodes/n8n-nodes-base.freshworkscrm/)

Create a [Freshworks CRM](https://www.freshworks.com/freshsales-crm/) account.

## Supported authentication methods

Refer to [Freshworks CRM's API documentation](https://developers.freshworks.com/crm/api/) for more information about the service.

To configure this credential, you'll need:

- An **API Key**: Refer to the [Freshworks CRM API authenticaton documentation](https://developers.freshworks.com/crm/api/#authentication) for detailed instructions on getting your API key.
- Your Freshworks CRM **Domain**: Use the subdomain of your Freshworks CRM account. This is part of the URL, for example `https://<subdomain>.myfreshworks.com`. So if you access Freshworks CRM through `https://n8n.myfreshworks.com`, enter `n8n` as your **Domain**.

---

## Bitly credentials

**URL:** llms-txt#bitly-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API token
- Using OAuth2

You can use these credentials to authenticate the following node:

- [Bitly](../../app-nodes/n8n-nodes-base.bitly/)

Create a [Bitly](https://www.bitly.com/) account.

## Supported authentication methods

Refer to [Bitly's API documentation](https://dev.bitly.com/) for more information about the service.

To configure this credential, you'll need:

- An **Access Token**: Once logged in, visit [Settings > Developer Settings > API](https://app.bitly.com/settings/api/) to generate an Access Token.

Note for n8n Cloud users

Cloud users don't need to provide connection details. Select **Connect my account** to connect through your browser.

If you need to configure OAuth2 from scratch or need more detail on what's happening in the OAuth web flow, refer to the [Bitly API Authentication documentation](https://dev.bitly.com/docs/getting-started/authentication/) for more information.

---

## Pinecone credentials

**URL:** llms-txt#pinecone-credentials

**Contents:**
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Pinecone Vector Store](../../cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstorepinecone/)

## Supported authentication methods

Refer to [Pinecone's documentation](https://docs.pinecone.io/reference/api/introduction) for more information about the service.

View n8n's [Advanced AI](../../../../advanced-ai/) documentation.

To configure this credential, you'll need a [Pinecone](https://www.pinecone.io/) account and:

1. Open your [Pinecone console](https://app.pinecone.io/organizations/-/projects).
1. Select the project you want to create an API key for. If you don't have any existing projects, create one. Refer to Pinecone's [Quickstart](https://docs.pinecone.io/guides/get-started/quickstart) for more information.
1. Go to **API Keys**.
1. Copy the API Key displayed there and enter it in your n8n credential.

Refer to Pinecone's API [Authentication documentation](https://docs.pinecone.io/guides/get-started/authentication) for more information.

---

## HighLevel credentials

**URL:** llms-txt#highlevel-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key
- Using OAuth2

You can use these credentials to authenticate the following nodes:

- [HighLevel node](../../app-nodes/n8n-nodes-base.highlevel/)

Create a [HighLevel developer](https://marketplace.gohighlevel.com/) account.

## Supported authentication methods

- API key: Use with API v1
- OAuth2: Use with API v2

HighLevel deprecated API v1.0 and no longer maintains it. Use OAuth2 to set up new credentials.

Refer to [HighLevel's API 2.0 documentation](https://highlevel.stoplight.io/docs/integrations/0443d7d1a4bd0-overview) for more information about the service.

For existing integrations with the API v1.0, refer to [HighLevel's API 1.0 documentation](https://help.gohighlevel.com/support/solutions/articles/48001060529-highlevel-api).

To configure this credential, you'll need:

- An **API Key**: Refer to the [HighLevel API 1.0 Welcome documentation](https://help.gohighlevel.com/support/solutions/articles/48001060529-highlevel-api) for instructions on getting your API key.

To configure this credential, you'll need:

- A **Client ID**
- A **Client Secret**

To generate both, create an app in **My Apps > Create App**. Use these settings:

1. Set **Distribution Type** to **Sub-Account**.

1. Add these **Scopes**:

- `locations.readonly`
   - `contacts.readonly`
   - `contacts.write`
   - `opportunities.readonly`
   - `opportunities.write`
   - `users.readonly`

1. Copy the **OAuth Redirect URL** from n8n and add it as a **Redirect URL** in your HighLevel app.

1. Copy the **Client ID** and **Client Secret** from HighLevel and add them to your n8n credential.

1. Add the same scopes added above to your n8n credential in a space-separated list. For example:

`locations.readonly contacts.readonly contacts.write opportunities.readonly opportunities.write users.readonly`

Refer to HighLevel's [API Authorization documentation](https://highlevel.stoplight.io/docs/integrations/a04191c0fabf9-authorization) for more details. Refer to HighLevel's [API Scopes documentation](https://highlevel.stoplight.io/docs/integrations/vcctp9t1w8hja-scopes) for more information about available scopes.

---

## Anthropic credentials

**URL:** llms-txt#anthropic-credentials

**Contents:**
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Anthropic](../../app-nodes/n8n-nodes-langchain.anthropic/)
- [Anthropic Chat Model](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatanthropic/)

## Supported authentication methods

Refer to [Anthropic's documentation](https://docs.anthropic.com/claude/reference/getting-started-with-the-api) for more information about the service.

View n8n's [Advanced AI](../../../../advanced-ai/) documentation.

To configure this credential, you'll need an [Anthropic Console account](https://console.anthropic.com) with access to Claude.

1. In the Anthropic Console, open **Settings >** [**API Keys**](https://console.anthropic.com/settings/keys).
1. Select **+ Create Key**.
1. Give your key a **Name**, like `n8n-integration`.
1. Select **Copy Key** to copy the key.
1. Enter this as the **API Key** in your n8n credential.

Refer to Anthropic's [Intro to Claude](https://docs.anthropic.com/en/docs/intro-to-claude) and [Quickstart](https://docs.anthropic.com/en/docs/quickstart) for more information.

---

## Matrix credentials

**URL:** llms-txt#matrix-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API access token

You can use these credentials to authenticate the following nodes:

- [Matrix](../../app-nodes/n8n-nodes-base.matrix/)

Create an account on a [Matrix](https://matrix.org/) server. Refer to [Creating an account](https://matrix.org/docs/chat_basics/matrix-for-im/#creating-a-matrix-account) for more information.

## Supported authentication methods

Refer to the [Matrix Specification](https://spec.matrix.org/latest/) for more information about the service.

Refer to the documentation for the specific client you're using to access the Matrix server.

## Using API access token

To configure this credential, you'll need:

- An **Access Token**: This token is tied to the account you use to log into Matrix with.
- A **Homeserver URL**: This is the URL of the [homeserver](https://matrix.org/docs/matrix-concepts/elements-of-matrix/#homeserver) you entered when you created your account. n8n prepopulates this with matrix.org's own server; adjust this if you're using a server hosted elsewhere.

Instructions for getting these details vary depending on the client you're using to access the server. Both the **Access Token** and the **Homeserver URL** can most commonly be found in **Settings > Help & About > Advanced**, but refer to your client's documentation for more details.

---

## HTML

**URL:** llms-txt#html

**Contents:**
- Operations
- Generate HTML template
- Extract HTML Content
  - Source Data
  - Extraction Values
  - Extract HTML Content options
- Convert to HTML Table
- Templates and examples

The HTML node provides operations to help you work with HTML in n8n.

The HTML node replaces the HTML Extract node from version 0.213.0 on. If you're using an older version of n8n, you can still view the [HTML Extract node documentation](https://github.com/n8n-io/n8n-docs/blob/86fe33b681621e618e3adcab9a27e8605dbc23ad/docs/integrations/builtin/core-nodes/n8n-nodes-base.htmlextract.md).

When using the HTML node to generate an HTML template you can introduce [XSS (cross-site scripting)](https://owasp.org/www-community/attacks/xss/). This is a security risk. Be careful with un-trusted inputs.

- [**Generate HTML template**](#generate-html-template): Use this operation to create an HTML template. This allows you to take data from your workflow and output it as HTML.
- [**Extract HTML content**](#extract-html-content): Extract contents from an HTML-formatted source. The source can be in JSON or a binary file (`.html`).
- [**Convert to HTML Table**](#convert-to-html-table): Convert content to an HTML table.

The node parameters and options depend on the operation you select. Refer to the sections below for more details on configuring each operation.

## Generate HTML template

Create an HTML template. This allows you to take data from your workflow and output it as HTML.

- Standard HTML
- CSS in `<style>` tags.
- JavaScript in `<script>` tags. n8n doesn't execute the JavaScript.
- Expressions, wrapped in `{{}}`.

You can use [Expressions](../../../../code/expressions/) in the template, including n8n's [Built-in methods and variables](../../../../code/builtin/overview/).

## Extract HTML Content

Extract contents from an HTML-formatted source. The source can be in JSON or a binary file (`.html`).

Use these parameters:

Select the source type for your HTML content. Choose between:

- **JSON**: If you select this source data, enter the **JSON Property**: the name of the input containing the HTML you want to extract. The property can contain a string or an array of strings.
- **Binary**: If you select this source data, enter the **Input Binary Field**: the name of the input containing the HTML you want to extract. The property can contain a string or an array of strings.

### Extraction Values

- **Key**: Enter the key to save the extracted value under.
- **CSS Selector**: Enter the CSS selector to search for.
- **Return Value**: Select the type of data to return. Choose from:
  - **Attribute**: Return an attribute value like `class` from an element.
    - If you select this option, enter the name of the **Attribute** to return the value of.
  - **HTML**: Return the HTML that the element contains.
  - **Text**: Return the text content of the element.
    - If you choose this option, you can also enter a comma-separated list of selectors to skip in the **Skip Selectors**.
  - **Value**: Return the value of an input, select, or text area.
- **Return Array**: Choose whether to return multiple extraction values as an array (turned on) or as a single string (turned off).

### Extract HTML Content options

You can also configure this operation with these options:

- **Trim Values**: Controls whether to remove all spaces and newlines from the beginning and end of the values (turned on) or leaves them (turned off).
- **Clean Up Text**: Controls whether to remove leading whitespaces, trailing whitespaces, and line breaks (newlines) and condense multiple consecutive whitespaces into a single space (turned on) or to leave them as-is (turned off).

## Convert to HTML Table

This operation expects data from another node. It has no parameters. It includes these options:

- **Capitalize Headers**: Controls whether to capitalize the table's headers (turned on) or not (turned off).
- **Custom Styling**: Controls whether to use custom styling (turned on) or not (turned off).
- **Caption**: Enter a caption to add to the table.
- **Table Attributes**: Enter any attributes to apply to the `<table>`, such as style attributes.
- **Header Attributes**: Enter any attributes to apply to the table's headers `<th>`.
- **Row Attributes**: Enter any attributes to apply to the table's rows `<tr>`.
- **Cell Attributes**: Enter any attributes to apply to the table's cells `<td>`.

## Templates and examples

**Scrape and summarize webpages with AI**

[View template details](https://n8n.io/workflows/1951-scrape-and-summarize-webpages-with-ai/)

**Pulling data from services that n8n doesn’t have a pre-built integration for**

[View template details](https://n8n.io/workflows/1748-pulling-data-from-services-that-n8n-doesnt-have-a-pre-built-integration-for/)

**Automated Web Scraping: email a CSV, save to Google Sheets & Microsoft Excel**

[View template details](https://n8n.io/workflows/2275-automated-web-scraping-email-a-csv-save-to-google-sheets-and-microsoft-excel/)

[Browse HTML integration templates](https://n8n.io/integrations/html/), or [search all templates](https://n8n.io/workflows/)

---

## Marketstack credentials

**URL:** llms-txt#marketstack-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Marketstack](../../app-nodes/n8n-nodes-base.marketstack/)

Create a [Marketstack](https://marketstack.com/) account.

## Supported authentication methods

Refer to [Marketstack's API documentation](https://marketstack.com/documentation) for more information about the service.

To configure this credential, you'll need:

- An **API Key**: View and generate API keys in your Marketstack [account dashboard](https://marketstack.com/dashboard).
- Select whether to **Use HTTPS**: Make this selection based on your Marketstack account plan level:
  - Free plan: Turn off **Use HTTPS**
  - All other plans: Turn on **Use HTTPS**

---

## QuestDB credentials

**URL:** llms-txt#questdb-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using database connection

You can use these credentials to authenticate the following nodes:

- [QuestDB](../../app-nodes/n8n-nodes-base.questdb/)

Create a user account on an instance of [QuestDB](https://questdb.io/).

## Supported authentication methods

- Database connection

Refer to [QuestDB's documentation](https://questdb.io/docs) for more information about the service.

## Using database connection

To configure this credential, you'll need:

- The **Host**: Enter the host name or IP address for the server.
- The **Database**: Enter the database name, for example `qdb`.
- A **User**: Enter the username for the user account as configured in `pg.user` or `pg.readonly.user` property in `server.conf`. Default value is `admin`.
- A **Password**: Enter the password for the user account as configured in `pg.password` or `pg.readonly.password` property in `server.conf`. Default value is `quest`.
- **SSL**: Select whether the connection should use SSL, which sets the `sslmode` parameter. Options include:
  - **Allow**
  - **Disable**
  - **Require**
- The **Port**: Enter the port number to use for the connection. Default is `8812`.

Refer to [List of supported connection properties](https://questdb.io/docs/reference/api/postgres/#list-of-supported-connection-properties) for more information.

---

## Redis credentials

**URL:** llms-txt#redis-credentials

**Contents:**
- Supported authentication methods
- Related resources
- Using database connection

You can use these credentials to authenticate the following nodes:

- [Redis](../../app-nodes/n8n-nodes-base.redis/)
- [Redis Chat Memory](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.memoryredischat/)

## Supported authentication methods

- Database connection

Refer to [Redis's developer documentation](https://redis.readthedocs.io/en/stable/index.html) for more information about the service.

## Using database connection

You'll need a user account on a [Redis](https://redis.io/) server and:

- A **Password**
- The **Host** name
- The **Port** number
- A **Database Number**
- **SSL**

To configure this credential:

1. Enter your user account **Password**.
1. Enter the **Host** name of the Redis server. The default is `localhost`.
1. Enter the **Port** number the connection should use. The default is `6379`.
   - This number should match the `tcp_port` listed when you run the `INFO` command.
1. Enter the **Database Number**. The default is `0`.
1. If the connection should use SSL, turn on the **SSL** toggle. If this toggle is off, the connection uses TCP only.
1. If you enable **SSL**, you have the option to **disable TLS verification**. Toggle to use self-signed certificates. WARNING: This makes the connection less secure.

Refer to [Connecting to Redis | Generic client](https://redis.readthedocs.io/en/stable/connections.html) for more information.

---

## Credentials file

**URL:** llms-txt#credentials-file

**Contents:**
- Structure of the credentials file
  - Outline structure
- Parameters
  - `name`
  - `displayName`
  - `documentationUrl`
  - `properties`
  - `authenticate`
  - `test`

The credentials file defines the authorization methods for the node. The settings in this file affect what n8n displays in the **Credentials** modal, and must reflect the authentication requirements of the service you're connecting to.

In the credentials file, you can use all the [n8n UI elements](../ui-elements/). n8n encrypts the data that's stored using credentials using an encryption key.

## Structure of the credentials file

The credentials file follows this basic structure:

1. Import statements
1. Create a class for the credentials
1. Within the class, define the properties that control authentication for the node.

### Outline structure

String. The internal name of the object. Used to reference it from other places in the node.

String. The name n8n uses in the GUI.

### `documentationUrl`

String. URL to your credentials documentation.

Each object contains:

- `displayName`: the name n8n uses in the GUI.
- `name`: the internal name of the object. Used to reference it from other places in the node.
- `type`: the data type expected, such as `string`.
- `default`: the URL that n8n should use to test credentials.

- `authenticate`: Object. Contains objects that tell n8n how to inject the authentication data as part of the API request.

String. If you're using an authentication method that sends data in the header, body, or query string, set this to `'generic'`.

Object. Defines the authentication methods. Options are:

- `body`: Object. Sends authentication data in the request body. Can contain nested objects.

- `header`: Object. Send authentication data in the request header.

- `qs`: Object. Stands for "query string." Send authentication data in the request query string.

- `auth`: Object. Used for Basic Auth. Requires `username` and `password` as the key names.

Provide a `request` object containing a URL and authentication type that n8n can use to test the credential.

**Examples:**

Example 1 (unknown):
```unknown
import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class ExampleNode implements ICredentialType {
	name = 'exampleNodeApi';
	displayName = 'Example Node API';
	documentationUrl = '';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
    		// Can be body, header, qs or auth
			qs: {
        		// Use the value from `apiKey` above
				'api_key': '={{$credentials.apiKey}}'
			}

		},
	};
	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials?.domain}}',
			url: '/bearer',
		},
	};
}
```

Example 2 (unknown):
```unknown
authenticate: IAuthenticateGeneric = {
  	type: 'generic',
  	properties: {
  		body: {
  			username: '={{$credentials.username}}',
  			password: '={{$credentials.password}}',
  		},
  	},
  };
```

Example 3 (unknown):
```unknown
authenticate: IAuthenticateGeneric = {
  	type: 'generic',
  	properties: {
  		header: {
  			Authorization: '=Bearer {{$credentials.authToken}}',
  		},
  	},
  };
```

Example 4 (unknown):
```unknown
authenticate: IAuthenticateGeneric = {
  	type: 'generic',
  	properties: {
  		qs: {
  			token: '={{$credentials.token}}',
  		},
  	},
  };
```

---

## HTTP Request credentials

**URL:** llms-txt#http-request-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Using predefined credential type
- Using basic auth
- Using digest auth
- Using header auth
- Using bearer auth
- Using OAuth1
- Using OAuth2
  - Authorization Code grant type

You can use these credentials to authenticate the following nodes:

- [HTTP Request](../../core-nodes/n8n-nodes-base.httprequest/)
- [HTTP Request Tool (legacy)](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.toolhttprequest/)

You must use the authentication method required by the app or service you want to query.

If you need to secure the authentication with an SSL certificate, refer to [Provide an SSL certificate](#provide-an-ssl-certificate) for the information you'll need.

## Supported authentication methods

- Predefined credential type
- Basic auth (generic credential type)
- Custom auth (generic credential type)
- Digest auth (generic credential type)
- Header auth (generic credential type)
- Bearer auth (generic credential type)
- OAuth1 (generic credential type)
- OAuth2 (generic credential type)
- Query auth (generic credential type)

Refer to [HTTP authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication) for more information relating to generic credential types.

Predefined credential types

n8n recommends using predefined credential types whenever there's a credential type available for the service you want to connect to. It offers an easier way to set up and manage credentials, compared to configuring generic credentials.

You can use [Predefined credential types](../../../custom-operations/#predefined-credential-types) to perform custom operations with some APIs where n8n has a node for the platform. For example, n8n has an Asana node, and supports using your Asana credentials in the HTTP Request node. Refer to [Custom operations](../../../custom-operations/) for more information.

## Using predefined credential type

To use a predefined credential type:

1. Open your HTTP Request node, or add a new one to your workflow.
1. In **Authentication**, select **Predefined Credential Type**.
1. In **Credential Type**, select the API you want to use.
1. In **Credential for `<API name>`**, you can:
   1. Select an existing credential for that platform, if available.
   1. Select **Create New** to create a new credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.

Use this generic authentication if your app or service supports basic authentication.

To configure this credential, enter:

- The **Username** you use to access the app or service your HTTP Request is targeting
- The **Password** that goes with that username

Use this generic authentication if your app or service supports digest authentication.

To configure this credential, enter:

- The **Username** you use to access the app or service your HTTP Request is targeting
- The **Password** that goes with that username

Use this generic authentication if your app or service supports header authentication.

To configure this credential, enter:

- The header **Name** you need to pass to the app or service your HTTP request is targeting
- The **Value** for the header

Read more about [HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#authentication)

Use this generic authentication if your app or service supports bearer authentication. This authentication type is actually just header authentication with the `Name` set to `Authorization` and the `Value` set to `Bearer <token>`.

To configure this credential, enter:

- The **Bearer Token** you need to pass to the app or service your HTTP request is targeting

Read more about [bearer authentication](https://swagger.io/docs/specification/v3_0/authentication/bearer-authentication/).

Use this generic authentication if your app or service supports OAuth1 authentication.

To configure this credential, enter:

- An **Authorization URL**: Also known as the Resource Owner Authorization URI. This URL typically ends in `/oauth1/authorize`. The temporary credentials are sent here to prompt a user to complete authorization.
- An **Access Token URL**: This is the URI used for the initial request for temporary credentials. This URL typically ends in `/oauth1/request` or `/oauth1/token`.
- A **Consumer Key**: Also known as the client key, like a username. This specifies the `oauth_consumer_key` to use for the call.
- A **Consumer Secret**: Also known as the client secret, like a password.
- A **Request Token URL**: This is the URI used to switch from temporary credentials to long-lived credentials after authorization. This URL typically ends in `/oauth1/access`.
- Select the **Signature Method** the auth handshake uses. This specifies the `oauth_signature_method` to use for the call. Options include:
  - **HMAC-SHA1**
  - **HMAC-SHA256**
  - **HMAC-SHA512**

For most OAuth1 integrations, you'll need to configure an app, service, or integration to generate the values for most of these fields. Use the **OAuth Redirect URL** in n8n as the redirect URL or redirect URI for such a service.

Read more about [OAuth1](https://oauth.net/1/) and the [OAuth1 authorization flow](https://oauth1.wp-api.org/docs/basics/Auth-Flow.html).

Use this generic authentication if your app or service supports OAuth2 authentication.

Requirements to configure this credential depend on the **Grant Type** selected. Refer to [OAuth Grant Types](https://oauth.net/2/grant-types/) for more information on each grant type.

For most OAuth2 integrations, you'll need to configure an app, service, or integration. Use the **OAuth Redirect URL** in n8n as the redirect URL or redirect URI for such a service.

Read more about [OAuth2](https://oauth.net/2/).

### Authorization Code grant type

Use Authorization Code grant type to exchange an authorization code for an access token. The auth flow uses the redirect URL to return the user to the client. Then the application gets the authorization code from the URL and uses it to request an access token. Refer to [Authorization Code Request](https://www.oauth.com/oauth2-servers/access-tokens/authorization-code-request/) for more information.

To configure this credential, select **Authorization Code** as the **Grant Type**.

- An **Authorization URL**
- An **Access Token URL**
- A **Client ID**: The ID or username to log in with.
- A **Client Secret**: The secret or password used to log in with.
- *Optional:* Enter one or more **Scope**s for the credential. If unspecified, the credential will request all scopes available to the client.
- *Optional:* Some services require more query parameters. If your service does, add them as **Auth URI Query Parameters**.
- An **Authentication** type: Select the option that best suits your use case. Options include:
  - **Header**: Send the credentials as a basic auth header.
  - **Body**: Send the credentials in the body of the request.
- *Optional:* Choose whether to **Ignore SSL Issues**. If turned on, n8n will connect even if SSL validation fails.

### Client Credentials grant type

Use the Client Credentials grant type when applications request an access token to access their own resources, not on behalf of a user. Refer to [Client Credentials](https://www.oauth.com/oauth2-servers/access-tokens/client-credentials/) for more information.

To configure this credential, select **Client Credentials** as the **Grant Type**.

- An **Access Token URL**: The URL to hit to begin the OAuth2 flow. Typically this URL ends in `/token`.
- A **Client ID**: The ID or username to use to log in to the client.
- A **Client Secret**: The secret or password used to log in to the client.
- *Optional:* Enter one or more **Scope**s for the credential. Most services don't support scopes for Client Credentials grant types; only enter scopes here if yours does.
- An **Authentication** type: Select the option that best suits your use case. Options include:
  - **Header**: Send the credentials as a basic auth header.
  - **Body**: Send the credentials in the body of the request.
- *Optional:* Choose whether to **Ignore SSL Issues**. If turned on, n8n will connect even if SSL validation fails.

Proof Key for Code Exchange (PKCE) grant type is an extension to the Authorization Code flow to prevent CSRF and authorization code injection attacks.

To configure this credential, select **PKCE** as the **Grant Type**.

- An **Authorization URL**
- An **Access Token URL**
- A **Client ID**: The ID or username to log in with.
- A **Client Secret**: The secret or password used to log in with.
- *Optional:* Enter one or more **Scope**s for the credential. If unspecified, the credential will request all scopes available to the client.
- *Optional:* Some services require more query parameters. If your service does, add them as **Auth URI Query Parameters**.
- An **Authentication** type: Select the option that best suits your use case. Options include:
  - **Header**: Send the credentials as a basic auth header.
  - **Body**: Send the credentials in the body of the request.
- *Optional:* Choose whether to **Ignore SSL Issues**. If turned on, n8n will connect even if SSL validation fails.

Use this generic authentication if your app or service supports passing authentication as a single key/value query parameter. (For multiple query parameters, use [Custom Auth](#using-custom-auth).)

To configure this credential, enter:

- A query parameter key or **Name**
- A query parameter **Value**

Use this generic authentication if your app or service supports passing authentication as multiple key/value query parameters or you need more flexibility than the other generic auth options.

The **Custom Auth** credential expects JSON data to define your credential. You can use `headers`, `qs`, `body` or a mix. Review the examples below to get started.

### Sending two headers

### Sending header and query string

## Provide an SSL certificate

You can send an SSL certificate with your HTTP request. Create the SSL certificate as a separate credential for use by the node:

1. In the HTTP Request node **Settings**, turn on **SSL Certificates**.
1. On the **Parameters** tab, add an existing SSL Certificate credential to **Credential for SSL Certificates** or create a new one.

To configure your SSL Certificates credential, you'll need to add:

- The Certificate Authority **CA** bundle
- The **Certificate** (CRT): May also appear as a Public Key, depending on who your issuing CA was and how they format the cert
- The **Private Key** (KEY)
- *Optional:* If the **Private Key** is encrypted, enter a **Passphrase** for the private key.

If your SSL certificate is in a single file (such as a `.pfx` file), you'll need to open the file to copy details from it to paste into the appropriate fields:

- Enter the Public Key/CRT as the **Certificate**
- Enter the **Private Key**/KEY in that field

**Examples:**

Example 1 (unknown):
```unknown
{
	"headers": {
		"X-AUTH-USERNAME": "username",
		"X-AUTH-PASSWORD": "password"
	}
}
```

Example 2 (unknown):
```unknown
{
	 "body" : {
		"user": "username",
		"pass": "password"
	}
}
```

Example 3 (unknown):
```unknown
{
	"qs": { 
		"appid": "123456",
		"apikey": "my-api-key"
	}
}
```

Example 4 (unknown):
```unknown
{
	"headers": {
		"api-version": "202404"
	},
	"qs": {
		"apikey": "my-api-key"
	}
}
```

---

## Bitwarden credentials

**URL:** llms-txt#bitwarden-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following node:

- [Bitwarden](../../app-nodes/n8n-nodes-base.bitwarden/)

Create a [Bitwarden](https://vault.bitwarden.com/#/register?org=teams) Teams organization or Enterprise organization account. (Bitwarden only makes the Bitwarden Public API available for these [organization](https://bitwarden.com/help/about-organizations/) plans.)

## Supported authentication methods

Refer to [Bitwarden's Public API documentation](https://bitwarden.com/help/public-api/) for more information about the service.

To configure this credential, you'll need:

- A **Client ID**: Provided when you generate an API key
- A **Client Secret**: Provided when you generate an API key
- The **Environment**:
  - Choose **Cloud-hosted** if you don't self-host Bitwarden. No further configuration required.
  - Choose **Self-hosted** if you host Bitwarden on your own server. Enter your **Self-hosted domain** in the appropriate field.

The Client ID and Client Secret must be for an **Organization API Key**, not a Personal API Key. Refer to the [Bitwarden Public API Authentication documentation](https://bitwarden.com/help/public-api/#authentication) for instructions on generating an Organization API Key.

---

## Kitemaker credentials

**URL:** llms-txt#kitemaker-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API access token

You can use these credentials to authenticate the following nodes:

- [Kitemaker](../../app-nodes/n8n-nodes-base.kitemaker/)

Create a [Kitemaker](https://www.kitemaker.co/) account.

## Supported authentication methods

Refer to [Kitemaker's API documentation](https://kitemakerhq.github.io/rest-docs/) for more information about the service.

## Using API access token

To configure this credential, you'll need:

- A **Personal Access Token**: Generate a personal access token from **Manage > Developer settings**. Refer to [API Authentication](https://kitemakerhq.github.io/rest-docs/#documentationauthentication) for more detailed instructions.

---

## Kibana credentials

**URL:** llms-txt#kibana-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using basic auth

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

- Create an [Elasticsearch](https://www.elastic.co/) account.
- If you're creating a new account to test with, load some sample data into Kibana. Refer to the [Kibana quick start](https://www.elastic.co/guide/en/kibana/current/get-started.html) for more information.

## Supported authentication methods

Refer to [Kibana's API documentation](https://www.elastic.co/guide/en/kibana/current/api.html) for more information about the service.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/kibana/) on n8n's website.

To configure this credential, you'll need:

- The **URL** you use to access Kibana, for example `http://localhost:5601`
- A **Username**: Use the same username that you use to log in to Elastic.
- A **Password**: Use the same password that you use to log in to Elastic.

---

## Stackby credentials

**URL:** llms-txt#stackby-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Stackby](../../app-nodes/n8n-nodes-base.stackby/)

Create a [Stackby](https://stackby.com/) account.

## Supported authentication methods

Refer to [Stackby's API documentation](https://www.postman.com/lively-equinox-180638/stackby-s-public-workspace/overview) for more information about the service.

To configure this credential, you'll need:

- An **API Key**: Go to your [**Account Settings > API**](https://www.stackby.com/account) to create an API Key. Refer to [API Key](https://help.stackby.com/en/articles/124-how-to-get-your-api-key-in-stackby) for more information.

---

## Credentials

**URL:** llms-txt#credentials

[Credentials](../glossary/#credential-n8n) are private pieces of information issued by apps and services to authenticate you as a user and allow you to connect and share information between the app or service and the n8n node.

Access the credentials UI by opening the left menu and selecting **Credentials**. n8n lists credentials you created on the **My credentials** tab. The **All credentials** tab shows all credentials you can use, included credentials shared with you by other users.

- [Create and edit credentials](add-edit-credentials/).
- Learn about [credential sharing](credential-sharing/).
- Find information on setting up credentials for your services in the [credentials library](../integrations/builtin/credentials/).

---

## Transforming data

**URL:** llms-txt#transforming-data

n8n uses a predefined [data structure](../data-structure/) that allows all nodes to process incoming data correctly.

Your incoming data may have a different data structure, in which case you will need to transform it to allow each item to be processed individually.

For example, the image below shows the output of an [HTTP Request](../../integrations/builtin/core-nodes/n8n-nodes-base.httprequest/) node that returns data incompatible with n8n's data structure. The node returns the data and displays that only one item was returned.

To transform this kind of structure into the n8n data structure you can use the data transformation nodes:

- [Aggregate](../../integrations/builtin/core-nodes/n8n-nodes-base.aggregate/): take separate items, or portions of them, and group them together into individual items.
- [Limit](../../integrations/builtin/core-nodes/n8n-nodes-base.limit/): remove items beyond a defined maximum number.
- [Remove Duplicates](../../integrations/builtin/core-nodes/n8n-nodes-base.removeduplicates/): identify and delete items that are identical across all fields or a subset of fields.
- [Sort](../../integrations/builtin/core-nodes/n8n-nodes-base.sort/): organize lists of in a desired ordering, or generate a random selection.
- [Split Out](../../integrations/builtin/core-nodes/n8n-nodes-base.splitout/): separate a single data item containing a list into multiple items.
- [Summarize](../../integrations/builtin/core-nodes/n8n-nodes-base.summarize/): aggregate items together, in a manner similar to Excel pivot tables.

---

## Motorhead credentials

**URL:** llms-txt#motorhead-credentials

**Contents:**
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Motorhead](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.memorymotorhead/)

## Supported authentication methods

Refer to [Motorhead's API documentation](https://docs.getmetal.io/rest-api/introduction) for more information about the service.

View n8n's [Advanced AI](../../../../advanced-ai/) documentation.

To configure this credential, you'll need a [Motorhead](https://www.metal.ai/) account and:

- Your **Host** URL
- An **API Key**
- A **Client ID**

To set it up, you'll generate an API key:

1. If you're self-hosting Motorhead, update the **Host** URL to match your Motorhead URL.
1. In Motorhead, go to **Settings > Organization**.
1. In the **API Keys** section, select **Create**.
1. Enter a **Name** for your API Key, like `n8n integration`.
1. Select **Generate**.
1. Copy the **apiKey** and enter it in your n8n credential.
1. Return to the API key list.
1. Copy the **clientID** for the key and enter it as the **Client ID** in your n8n credential.

Refer to [Generate an API key](https://docs.getmetal.io/guides/misc-get-keys) for more information.

---

## Pushbullet credentials

**URL:** llms-txt#pushbullet-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using OAuth2

You can use these credentials to authenticate the following nodes:

- [Pushbullet](../../app-nodes/n8n-nodes-base.pushbullet/)

Create a [Pushbullet](https://www.pushbullet.com/) account.

## Supported authentication methods

Refer to [Pushbullet's API documentation](https://docs.pushbullet.com/) for more information about the service.

To configure this credential, you'll need:

- A **Client ID**: Generated when you create a Pushbullet app, also known as an OAuth client.
- A **Client Secret**: Generated when you create a Pushbullet app, also known as an OAuth client.

To generate the **Client ID** and **Client Secret**, go to the [create client](https://www.pushbullet.com/create-client) page. Copy the **OAuth Redirect URL** from n8n and add this as your **redirect_uri** for the app/client. Use the **client_id** and **client_secret** from the OAuth Client in your n8n credential.

Refer to Pushbullet's [OAuth2 Guide](https://docs.pushbullet.com/#oauth2) for more information.

Pushbullet OAuth test link

Pushbullet offers a test link during the client creation process described above. This link isn't compatible with n8n. To verify the authentication works, use the **Connect my account** button in n8n.

---

## Gotify credentials

**URL:** llms-txt#gotify-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API token

You can use these credentials to authenticate the following nodes:

- [Gotify](../../app-nodes/n8n-nodes-base.gotify/)

Install [Gotify](https://gotify.net/docs/install) on your server.

## Supported authentication methods

Refer to [Gotify's API documentation](https://gotify.net/api-docs) for more information about the service.

To configure this credential, you'll need:

- An **App API Token**: Only required if you'll use this credential to create messages. To generate an App API token, create an application from the **Apps** menu. Refer to [Gotify's Push messages documentation](https://gotify.net/docs/pushmsg) for more information.
- A **Client API Token**: Required for all actions other than creating messages (such as deleting or retrieving messages). To generate a Client API token, create a client from the **Clients** menu.
- The **URL** of the Gotify host

---

## Webhook credentials

**URL:** llms-txt#webhook-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Using basic auth
- Using header auth
- Using JWT auth

You can use these credentials to authenticate the following nodes:

- [Webhook](../../core-nodes/n8n-nodes-base.webhook/)

You must use the authentication method required by the app or service you want to query.

## Supported authentication methods

- Basic auth
- Header auth
- JWT auth
- None

Use this generic authentication if your app or service supports basic authentication.

To configure this credential, enter:

- The **Username** you use to access the app or service your HTTP Request is targeting
- The **Password** that goes with that username

Use this generic authentication if your app or service supports header authentication.

To configure this credential, enter:

- The header **Name** you need to pass to the app or service your HTTP request is targeting
- The **Value** for the header

Read more about [HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#authentication)

[**JWT Auth**](https://jwt.io/introduction/) is a method of authentication that uses JSON Web Tokens (JWT) to digitally sign data. This authentication method uses the **JWT credential** and can use either a **Passphrase** or **PEM Key** as key type. Refer to [JWT credential](../jwt/) for more information.

---

## MessageBird credentials

**URL:** llms-txt#messagebird-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [MessageBird](../../app-nodes/n8n-nodes-base.messagebird/)

Create a [Bird](https://bird.com/) account.

## Supported authentication methods

Refer to [MessageBird's API documentation](https://docs.bird.com/api) for more information about the service.

To configure this credential, you'll need:

- An **API Key**: To generate an appropriate key, visit the [Access keys](https://app.bird.com/settings/access-keys) page in MessageBird. Refer to the [API authorization documentation](https://docs.bird.com/api/api-access/api-authorization) for detailed instructions.

---

## Grist credentials

**URL:** llms-txt#grist-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Grist](../../app-nodes/n8n-nodes-base.grist/)

Create a [Grist](https://getgrist.com/) account.

## Supported authentication methods

Refer to [Grist's API documentation](https://support.getgrist.com/api/) for more information about the service.

To configure this credential, you'll need:

- An **API Key**: Refer to the [Grist API authentication documentation](https://support.getgrist.com/rest-api/#authentication) for instructions on creating an API key.
- To select your Grist **Plan Type**. Options include:
  - Free
  - Paid: If selected, provide your Grist **Custom Subdomain**. This is the portion that comes before `.getgrist.com`. For example, if our full Grist domain was `n8n.getgrist.com`, we'd enter `n8n` here.
  - Self-Hosted: If selected, provide your Grist **Self-Hosted URL**. This should be the full URL.

---

## Disqus credentials

**URL:** llms-txt#disqus-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API access token

You can use these credentials to authenticate the following nodes:

- [Disqus](../../app-nodes/n8n-nodes-base.disqus/)

- Create a [Disqus](https://www.disqus.com/) account.
- Register an [API application](https://help.disqus.com/en/articles/1717083-how-to-create-an-api-application).

## Supported authentication methods

Refer to [Disqus's API documentation](https://disqus.com/api/docs/) for more information about the service.

## Using API access token

To configure this credential, you'll need:

- An **Access Token**: Once you've registered an API application, copy the **API Key** and add it to n8n as the **Access Token**.

---

## Mistral Cloud credentials

**URL:** llms-txt#mistral-cloud-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Mistral AI](../../app-nodes/n8n-nodes-base.mistralai/)
- [Mistral Cloud](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatmistralcloud/)
- [Embeddings Mistral Cloud](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsmistralcloud/)

- Create a [Mistral](https://mistral.ai/) La Plateforme account.
- You must add payment information in **Workspace >** [**Billing**](https://admin.mistral.ai/organization/billing) and activate payments to enable API keys. Refer to [Account setup](https://docs.mistral.ai/getting-started/quickstart/#account-setup) for more information.

## Supported authentication methods

Refer to [Mistral's API documentation](https://docs.mistral.ai/api/) for more information about the APIs.

View n8n's [Advanced AI](../../../../advanced-ai/) documentation.

To configure this credential, you'll need:

Once you've added payment information to your Mistral Cloud account:

1. Sign in to your [Mistral account](https://console.mistral.ai/home).
1. Go to the **API Keys** page.
1. Select **Create new key**.
1. Copy the API key and enter it in your n8n credential.

Refer to [Account setup](https://docs.mistral.ai/getting-started/quickstart/#account-setup) for more information.

Paid account required

Mistral requires you to add payment information and activate payments to use API keys. Refer to the [Prerequisites](#prerequisites) section above for more information.

---

## X (formerly Twitter) credentials

**URL:** llms-txt#x-(formerly-twitter)-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using OAuth2
- X rate limits

You can use these credentials to authenticate the following nodes:

- [X (formerly Twitter)](../../app-nodes/n8n-nodes-base.twitter/)

- Create an [X developer](https://developer.x.com/en) account.
- Create a [Twitter app](https://developer.x.com/en/docs/apps) or use the default project and app created when you sign up for the developer portal. Refer to each supported authentication method below for more details on the app's configuration.

## Supported authentication methods

n8n used to support an **OAuth** authentication method, which used X's [OAuth 1.0a](https://developer.x.com/en/docs/authentication/oauth-1-0a) authentication method. n8n deprecated this method with the release of V2 of the X node in n8n version [0.236.0](../../../../release-notes/0-x/#n8n02360).

Refer to [X's API documentation](https://developer.x.com/en/docs/twitter-api) for more information about the service. Refer to [X's API authentication documentation](https://developer.x.com/en/docs/authentication/overview) for more information about authenticating with the service.

Refer to [Application-only Authentication](https://developer.twitter.com/en/docs/authentication/oauth-2-0/application-only) for more information about app-only authentication.

Use this method if you're using n8n version 0.236.0 or later.

To configure this credential, you'll need:

- A **Client ID**
- A **Client Secret**

To generate your Client ID and Client Secret:

1. In the Twitter [developer portal](https://developer.x.com/en/portal/dashboard), open your project.
1. On the project's **Overview** tab, find the **Apps** section and select **Add App**.
1. Give your app a **Name** and select **Next**.
1. Go to the **App Settings**.
1. In the **User authentication settings**, select **Set Up**.
1. Set the **App permissions**. Choose **Read and write and Direct message** if you want to use all functions of the n8n X node.
1. In the **Type of app** section, select **Web App, Automated App or Bot**.
1. In n8n, copy the **OAuth Redirect URL**.
1. In your X app, find the **App Info** section and paste that URL in as the **Callback URI / Redirect URL**.
1. Add a **Website URL**.
1. Save your changes.
1. Copy the **Client ID** and **Client Secret** displayed in X and add them to the corresponding fields in your n8n credential.

Refer to X's [OAuth 2.0 Authentication documentation](https://developer.x.com/en/docs/authentication/oauth-2-0) for more information on working with this authentication method.

This credential uses the OAuth 2.0 Bearer Token authentication method, so you'll be subject to app rate limits. Refer to [X rate limits](#x-rate-limits) below for more information.

X has time-based rate limits per endpoint based on your developer access plan level. X calculates app rate limits and user rate limits independently. Refer to [Rate limits](https://developer.x.com/en/docs/twitter-api/rate-limits) for the access plan level rate limits and guidance on avoiding hitting them.

Use the guidance below for calculating rate limits:

- If you're using the deprecated OAuth method, user rate limits apply. You'll have one limit per time window for each set of users' access tokens.
- If you're [Using OAuth2](#using-oauth2), app rate limits apply. You'll have a limit per time window for requests made by your app.

X calculates user rate limits and app rate limits independently.

Refer to X's [Rate limits and authentication methods](https://developer.x.com/en/docs/twitter-api/rate-limits#auth) for more information about these rate limit types.

---

## Rundeck credentials

**URL:** llms-txt#rundeck-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API token

You can use these credentials to authenticate the following nodes:

- [Rundeck](../../app-nodes/n8n-nodes-base.rundeck/)

Create a user account on a [Rundeck](https://www.rundeck.com/) server.

## Supported authentication methods

Refer to [Rundeck's API documentation](https://docs.rundeck.com/docs/api/) for more information about the service.

To configure this credential, you'll need:

- Your **URL**: Enter the base URL of your Rundeck server, for example `http://myserver:4440`. Refer to [URLs](https://docs.rundeck.com/docs/api/#urls) for more information.
- A user API **Token**: To generate a user API token, go to your **Profile > User API Tokens**. Refer to [User API tokens](https://docs.rundeck.com/docs/manual/10-user.html#user-api-tokens) for more information.

---

## Discord credentials

**URL:** llms-txt#discord-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using bot
- Using OAuth2
- Using webhook
- Choose an authentication method

You can use these credentials to authenticate the following nodes:

- [Discord](../../app-nodes/n8n-nodes-base.discord/)

- Create a [Discord](https://www.discord.com/) account.
- For Bot and OAuth2 credentials:
  - [Set up your local developer environment](https://discord.com/developers/docs/quick-start/getting-started#step-0-project-setup).
  - [Create an application and a bot user](https://discord.com/developers/docs/quick-start/getting-started#step-1-creating-an-app).
- For webhook credentials, [create a webhook](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks).

## Supported authentication methods

- Bot
- OAuth2
- Webhook

Not sure which method to use? Refer to [Choose an authentication method](#choose-an-authentication-method) for more guidance.

Refer to [Discord's Developer documentation](https://discord.com/developers/docs/intro) for more information about the service.

Use this method if you want to add the bot to your Discord server using a bot token rather than OAuth2.

To configure this credential, you'll need:

- A **Bot Token**: Generated once you create an application with a bot.

To create an application with a bot and generate the **Bot Token**:

1. If you don't have one already, create an app in the [developer portal](https://discord.com/developers/applications?new_application=true).
1. Enter a **Name** for your app.
1. Select **Create**.
1. Select **Bot** from the left menu.
1. Under **Token**, select **Reset Token** to generate a new bot token.
1. Copy the token and add it to your n8n credential.
1. In **Bot > Privileged Gateway Intents**, add any privileged intents you want your bot to have. Refer to [Configuring your bot](https://discord.com/developers/docs/quick-start/getting-started#configuring-your-bot) for more information on privileged intents.
   - n8n recommends activating **SERVER MEMBERS INTENT: Required for your bot to receive events listed under GUILD_MEMBERS**.
1. In **Installation > Installation Contexts**, select the installation contexts you want your bot to use:
   - Select **Guild Install** for server-installed apps. (Most common for n8n users.)
   - Select **User Install** for user-installed apps. (Less common for n8n users, but may be useful for testing.)
   - Refer to Discord's [Choosing installation contexts](https://discord.com/developers/docs/quick-start/getting-started#choosing-installation-contexts) documentation for more information about these installation contexts.
1. In **Installation > Install Link**, select **Discord Provided Link** if it's not already selected.
1. Still on the **Installation** page, in the **Default Install Settings** section, select `applications.commands` and `bot` scopes. Refer to Discord's [Scopes](https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes) documentation for more information about these and other scopes.
1. Add permissions on the **Bot > Bot Permissions** page. Refer to Discord's [Permissions](https://discord.com/developers/docs/topics/permissions) documentation for more information. n8n recommends selecting these permissions for the [Discord](../../app-nodes/n8n-nodes-base.discord/) node:
   - Manage Roles
   - Manage Channels
   - Read Messages/View Channels
   - Send Messages
   - Create Public Threads
   - Create Private Threads
   - Send Messages in Threads
   - Send TTS Messages
   - Manage Messages
   - Manage Threads
   - Embed Links
   - Attach Files
   - Read Message History
   - Add Reactions
1. Add the app to your server or test server:
   1. Go to **Installation > Install Link** and copy the link listed there.
   1. Paste the link in your browser and hit Enter.
   1. Select **Add to server** in the installation prompt.
   1. Once your app's added to your server, you'll see it in the member list.

These steps outline the basic functionality needed to set up your n8n credential. Refer to the [Discord Creating an App](https://discord.com/developers/docs/quick-start/getting-started#step-1-creating-an-app) guide for more information on creating an app, especially:

- [Fetching your credentials](https://discord.com/developers/docs/quick-start/getting-started#fetching-your-credentials) for getting your app's credentials into your local developer environment.
- [Handling interactivity](https://discord.com/developers/docs/quick-start/getting-started#step-3-handling-interactivity) for information on setting up public endpoints for interactive `/slash` commands.

Use this method if you want to add the bot to Discord servers using the OAuth2 flow, which simplifies the process for those installing your app.

To configure this credential, you'll need:

- A **Client ID**
- A **Client Secret**
- Choose whether to send **Authentication** in the **Header** or **Body**
- A **Bot Token**

For details on creating an application with a bot and generating the token, follow the same steps as in [Using bot](#using-bot) above.

1. Copy the **Bot Token** you generate and add it into the n8n credential.
1. Open the **OAuth2** page in your Discord application to access your **Client ID** and generate a **Client Secret**. Add these to your n8n credential.
1. From n8n, copy the **OAuth Redirect URL** and add it into the Discord application in **OAuth2 > Redirects**. Be sure you save these changes.

To configure this credential, you'll need:

- A **Webhook URL**: Generated once you create a webhook.

To get a Webhook URL, you create a webhook and copy the URL that gets generated:

1. Open your Discord **Server Settings** and open the **Integrations** tab.
1. Select **Create Webhook** to create a new webhook.
1. Give your webhook a **Name** that makes sense.
1. Select the **avatar** next to the **Name** to edit or upload a new avatar.
1. In the **CHANNEL** dropdown, select the channel the webhook should post to.
1. Select **Copy Webhook URL** to copy the Webhook URL. Enter this URL in your n8n credential.

Refer to the [Discord Making a Webhook documentation](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) for more information.

## Choose an authentication method

The simplest installation is a **webhook**. You create and add webhooks to a single channel on a Discord server. Webhooks can post messages to a channel. They don't require a bot user or authentication. But they can't listen or respond to user requests or commands. If you need a straightforward way to send messages to a channel without the need for interaction or feedback, use a webhook.

A **bot** is an interactive step up from a webhook. You add bots to the Discord server (referred to as a `guild` in the Discord API documentation) or to user accounts. Bots added to the server can interact with users on all the server's channels. They can manage channels, send and retrieve messages, retrieve the list of all users, and change their roles. If you need to build an interactive, complex, or multi-step workflow, use a bot.

**OAuth2** is basically a **bot** that uses an OAuth2 flow rather than just the bot token. As with bots, you add these to the Discord server or to user accounts. These credentials offer the same functionalities as bots, but they can simplify the installation of the bot on your server.

---

## DFIR-IRIS credentials

**URL:** llms-txt#dfir-iris-credentials

**Contents:**
- Prerequisites
- Related resources
- Using API Key

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

An accessible instance of [DFIR-IRIS](https://docs.dfir-iris.org/latest/getting_started/).

Refer to [DFIR-IRIS's API documentation](https://docs.dfir-iris.org/operations/api/) for more information about authenticating with the service.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/iris-dfir/) on n8n's website.

To configure this credential, you'll need:

- An **API Key**: Refer to [DFIR-IRIS's API documentation](https://docs.dfir-iris.org/operations/api/) for instructions on getting your API key.
- The **Base URL** of your DFIR-IRIS instance.

---

## Zabbix credentials

**URL:** llms-txt#zabbix-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

Create a [Zabbix Cloud](https://www.zabbix.com/) account or self-host your own Zabbix server.

## Supported authentication methods

Refer to [Zabbix's API documentation](https://www.zabbix.com/documentation/current/en/manual/api) for more information about the service.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/zabbix/) on n8n's website.

To configure this credential, you'll need:

- an **API Token**: An API key for your Zabbix user.
- the **URL**: The URL of your Zabbix server. Don't include `/zabbix` as part of the URL.

Refer to [Zabbix's API documentation](https://www.zabbix.com/documentation/current/en/manual/api#authentication) for more information about authenticating to the service.

---

## Outlook.com IMAP credentials

**URL:** llms-txt#outlook.com-imap-credentials

**Contents:**
- Set up the credentials
- Connection errors
- Use an app password
  - Security Info app password

Follow these steps to configure the IMAP credentials with an Outlook.com account.

## Set up the credentials

To set up the IMAP credential with Outlook.com account, use these settings:

1. Enter your Outlook.com email address as the **User**.

1. Enter your Outlook.com password as the **Password**.

Outlook.com doesn't require you to use an app password, but if you'd like to for security reasons, refer to [Use an app password](#use-an-app-password).

1. Enter `outlook.office365.com` as the **Host**.

1. For the **Port**, keep the default port number of `993`.

1. Turn on the **SSL/TLS** toggle.

1. Check with your email administrator about whether to **Allow Self-Signed Certificates**.

Refer to Microsoft's [POP, IMAP, and SMTP settings for Outlook.com](https://support.microsoft.com/en-us/office/pop-imap-and-smtp-settings-for-outlook-com-d088b986-291d-42b8-9564-9c414e2aa040) documentation for more information.

You may receive a connection error if you configured your Outlook.com account as IMAP in multiple email clients. Microsoft is working on a fix for this. For now, try this workaround:

1. Go to [account.live.com/activity](https://account.live.com/activity) and sign in using the email address and password of the affected account.
1. Under **Recent activity**, find the **Session Type** event that matches the most recent time you received the connection error. Select it to expand the details.
1. Select **This was me** to approve the IMAP connection.
1. Retest your n8n credential.

Refer to [What is the Recent activity page?](https://support.microsoft.com/en-us/account-billing/what-is-the-recent-activity-page-23cf5556-4dbe-70da-82c8-bb3a8d8f8016) for more information on using this page.

The source for these instructions is [Outlook.com IMAP connection errors](https://support.microsoft.com/en-us/office/pop-imap-and-smtp-settings-for-outlook-com-d088b986-291d-42b8-9564-9c414e2aa040). Refer to that documentation for more information.

## Use an app password

If you'd prefer to use an app password instead of your email account password:

1. Log into the [My Account](https://myaccount.microsoft.com/) page.
1. If you have a left navigation option for **Security Info**, jump to [Security Info app password](#security-info-app-password). If you don't have an option for **Security Info**, continue with these instructions.
1. Go to the [Additional security verification page](https://account.activedirectory.windowsazure.com/Proofup.aspx).
1. Select **App passwords** and **Create**.
1. Enter a **Name** for your app password, like `n8n credential`.
1. Use the option to **copy password to clipboard** and enter this as the **Password** in n8n instead of your email account password.

Refer to Outlook's [Manage app passwords for 2-step verification](https://support.microsoft.com/en-us/account-billing/manage-app-passwords-for-two-step-verification-d6dc8c6d-4bf7-4851-ad95-6d07799387e9) page for more information.

### Security Info app password

If you have a left navigation option for **Security Info**:

1. Select **Security Info**. The Security Info page opens.
1. Select **+ Add method**.
1. On the **Add a method** page, select **App password** and then select **Add**.
1. Enter a **Name** for your app password, like `n8n credential`.
1. Copy the **Password** and enter this as the **Password** in n8n instead of your email account password.

Refer to Outlook's [Create app passwords from the Security info (preview)](https://support.microsoft.com/en-us/account-billing/create-app-passwords-from-the-security-info-preview-page-d8bc744a-ce3f-4d4d-89c9-eb38ab9d4137) page for more information.

---

## Medium credentials

**URL:** llms-txt#medium-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API access token
- Using OAuth2

You can use these credentials to authenticate the following nodes:

- [Medium](../../app-nodes/n8n-nodes-base.medium/)

Medium API no longer supported

Medium has stopped supporting the Medium API. These credentials still appear within n8n, but you can't configure new integrations using them.

- Create an account on [Medium](https://www.medium.com/).
- For OAuth2, request access to credentials by emailing [yourfriends@medium.com](mailto:yourfriends@medium.com).

## Supported authentication methods

- API access token
- OAuth2

Refer to [Medium's API documentation](https://github.com/Medium/medium-api-docs) for more information about the service.

## Using API access token

To configure this credential, you'll need:

- An API **Access Token**: Generate a token in **Settings >** [**Security and apps**](https://medium.com/me/settings/security) **> Integration tokens**. Use the integration token this generates as your n8n **Access Token**.

Refer to the Medium API [Self-issued access tokens documentation](https://github.com/Medium/medium-api-docs?tab=readme-ov-file#21-self-issued-access-tokens) for more information.

To configure this credential, you'll need:

- A **Client ID**
- A **Client Secret**

To generate a **Client ID** and **Client Secret**, you'll need access to the **Developers** menu. From there, create a new application to generate the Client ID and Secret.

Use these settings for your new application:

- Select **OAuth 2** as the **Authorization Protocol**
- Copy the **OAuth Callback URL** from n8n and use this as the **Callback URL** in Medium.

---

## Gong credentials

**URL:** llms-txt#gong-credentials

**Contents:**
- Supported authentication methods
- Related resources
- Using API access token
- Using OAuth2

You can use these credentials to authenticate the following nodes:

- [Gong](../../app-nodes/n8n-nodes-base.gong/)

## Supported authentication methods

- API access token
- OAuth2

Refer to [Gong's API documentation](https://gong.app.gong.io/settings/api/documentation) for more information about the service.

## Using API access token

To configure this credential, you'll need a [Gong](https://app.gong.io/welcome/sign-in) account and:

- An **Access Key**
- An **Access Key Secret**

You can create both of these items on the [Gong API Page](https://app.gong.io/company/api) (you must be a technical administrator in Gong to access this resource).

Refer to [Gong's API documentation](https://gong.app.gong.io/settings/api/documentation) for more information about authenticating to the service.

To configure this credential, you'll need a [Gong](https://app.gong.io/welcome/sign-in) account, a [Gong developer](https://gong.partnerfleet.app/application_forms/become-a-gong-technology-partner/partner_applications/new) account and:

- A **Client ID**: Generated when you create an Oauth app for Gong.
- A **Client Secret**: Generated when you create an Oauth app for Gong.

If you're [self-hosting](../../../../hosting/) n8n, you'll need to [create an app](https://help.gong.io/docs/create-an-app-for-gong) to configure OAuth2. Refer to [Gong's OAuth documentation](https://gong.app.gong.io/settings/api/documentation) for more information about setting up OAuth2.

---

## Cisco Umbrella credentials

**URL:** llms-txt#cisco-umbrella-credentials

**Contents:**
- Prerequisites
- Authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

- Create a [Cisco DevNet developer account](https://developer.cisco.com).
- A [Cisco Umbrella user account](https://umbrella.cisco.com/) with **Full Admin** role.

## Authentication methods

Refer to [Cisco Umbrella's API documentation](https://developer.cisco.com/docs/cloud-security/) for more information about the service.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/cisco-umbrella/) on n8n's website.

To configure this credential, you'll need:

- An **API Key**
- A **Secret**: Provided when you generate an API key

Refer to the [Cisco Umbrella Manage API Keys documentation](https://developer.cisco.com/docs/cloud-security/authentication/#manage-api-keys) for instructions on creating an Umbrella API key.

---

## ServiceNow credentials

**URL:** llms-txt#servicenow-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using basic auth
- Using OAuth2

You can use these credentials to authenticate the following nodes:

- [ServiceNow](../../app-nodes/n8n-nodes-base.servicenow/)

Create a [ServiceNow](https://developer.servicenow.com/dev.do#!/reference) developer account.

## Supported authentication methods

- Basic auth
- OAuth2

Refer to [ServiceNow's API documentation](https://developer.servicenow.com/dev.do#!/reference/api/washingtondc/rest/) for more information about the service.

To configure this credential, you'll need:

- A **User** name: Enter your ServiceNow username.
- A **Password**: Enter your ServiceNow password.
- A **Subdomain**: The subdomain for your servicenow instance is in your instance URL: `https://<subdomain>.service-now.com/`. For example, if the full URL is `https://dev99890.service-now.com`, then the subdomain is `dev99890`.

To configure this credential, you'll need:

- A **Client ID**: Generated once you register a new app.
- A **Client Secret**: Generated once you register a new app.
- A **Subdomain**: The subdomain for your servicenow instance is in your instance URL: `https://<subdomain>.service-now.com/`. For example, if the full URL is `https://dev99890.service-now.com`, then the subdomain is `dev99890`.

To generate your **Client ID** and **Client Secret**, register a new app in **System OAuth > Application Registry > New > Create an OAuth API endpoint for external clients**. Use these settings for your app:

- Copy the **Client ID** and add it to your n8n credential.
- Enter a **Client Secret** or leave it blank to automatically generate a random secret. Add this secret to your n8n credential.
- Copy the n8n **OAuth Redirect URL** and add it as a **Redirect URL**.

Refer to [How to setup OAuth2 authentication for RESTMessageV2 integrations](https://www.servicenow.com/community/in-other-news/how-to-setup-oauth2-authentication-for-restmessagev2/ba-p/2271823) for more information.

---

## Peekalink credentials

**URL:** llms-txt#peekalink-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Peekalink](../../app-nodes/n8n-nodes-base.peekalink/)

Create a [Peekalink](https://www.peekalink.io/) account.

## Supported authentication methods

Refer to [Peekalink's API documentation](https://docs.peekalink.io/) for more information about the service.

To configure this credential, you'll need:

- An **API Key**: To get your API key, access your Peekalink [dashboard](https://www.peekalink.io/app/overview) and copy the key in the **Your API Key** section. Refer to [Get your API key](https://docs.peekalink.io/setup#get-your-api-key) for more information.

---

## SyncroMSP credentials

**URL:** llms-txt#syncromsp-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [SyncroMSP](../../app-nodes/n8n-nodes-base.syncromsp/)

Create a [SyncroMSP](https://syncromsp.com/) account.

## Supported authentication methods

Refer to [SyncroMSP's API documentation](https://api-docs.syncromsp.com/) for more information about the service.

To configure this credential, you'll need:

- An **API Key**: Called an **API token** in SyncroMSP. To create an API token, go to your **user menu > Profile/Password > API Tokens** and select the option to **Create New Token**. Select **Custom Permissions** to enter a name for your token and adjust the permissions to match your requirements.
- Your **Subdomain**: Enter your SyncroMSP subdomain. This is visible in the URL of your SyncroMSP, located between `https://` and `.syncromsp.com`. If your full URL is `https://n8n-instance.syncromsp.com`, you'd enter `n8n-instance` as the subdomain.

Refer to [API Tokens](https://docs.syncromsp.com/imported/api-tokens) for more information on creating new tokens.

---

## Microsoft Entra ID credentials

**URL:** llms-txt#microsoft-entra-id-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using OAuth2
  - Register an application
  - Generate a client secret
- Setting custom scopes
- Common issues
  - Need admin approval

You can use these credentials to authenticate the following nodes:

- [Microsoft Entra ID](../../app-nodes/n8n-nodes-base.microsoftentra/)

- Create a Microsoft Entra ID account or subscription.
- If the user account is managed by a corporate Microsoft Entra account, the administrator account has enabled the option “User can consent to apps accessing company data on their behalf” for this user (see the [Microsoft Entra documentation](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/grant-admin-consent)).

Microsoft includes an Entra ID free plan when you create a [Microsoft Azure](https://azure.microsoft.com/) account.

## Supported authentication methods

Refer to [Microsoft Entra ID's documentation](https://www.microsoft.com/en-us/security/business/identity-access/azure-active-directory) for more information about the service.

Note for n8n Cloud users

Cloud users don't need to provide connection details. Select **Connect my account** to connect through your browser.

For self-hosted users, there are two main steps to configure OAuth2 from scratch:

1. [Register an application](#register-an-application) with the Microsoft Identity Platform.
1. [Generate a client secret](#generate-a-client-secret) for that application.

Follow the detailed instructions for each step below. For more detail on the Microsoft OAuth2 web flow, refer to [Microsoft authentication and authorization basics](https://learn.microsoft.com/en-us/graph/auth/auth-concepts).

### Register an application

Register an application with the Microsoft Identity Platform:

1. Open the [Microsoft Application Registration Portal](https://aka.ms/appregistrations).
1. Select **Register an application**.
1. Enter a **Name** for your app.
1. In **Supported account types**, select **Accounts in any organizational directory (Any Azure AD directory - Multi-tenant) and personal Microsoft accounts (for example, Skype, Xbox)**.
1. In **Register an application**:
   1. Copy the **OAuth Callback URL** from your n8n credential.
   1. Paste it into the **Redirect URI (optional)** field.
   1. Select **Select a platform** > **Web**.
1. Select **Register** to finish creating your application.
1. Copy the **Application (client) ID** and paste it into n8n as the **Client ID**.

Refer to [Register an application with the Microsoft Identity Platform](https://learn.microsoft.com/en-us/graph/auth-register-app-v2) for more information.

### Generate a client secret

With your application created, generate a client secret for it:

1. On your Microsoft application page, select **Certificates & secrets** in the left navigation.
1. In **Client secrets**, select **+ New client secret**.
1. Enter a **Description** for your client secret, such as `n8n credential`.
1. Select **Add**.
1. Copy the **Secret** in the **Value** column.
1. Paste it into n8n as the **Client Secret**.
1. Select **Connect my account** in n8n to finish setting up the connection.
1. Log in to your Microsoft account and allow the app to access your info.

Refer to Microsoft's [Add credentials](https://learn.microsoft.com/en-us/graph/auth-register-app-v2#add-credentials) for more information on adding a client secret.

## Setting custom scopes

Microsoft Entra ID credentials use the following scopes by default:

- [`openid`](https://learn.microsoft.com/en-us/entra/identity-platform/scopes-oidc#the-openid-scope)
- [`offline_access`](https://learn.microsoft.com/en-us/entra/identity-platform/scopes-oidc#the-offline_access-scope)
- [`AccessReview.ReadWrite.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#accessreviewreadwriteall)
- [`Directory.ReadWrite.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#directoryreadwriteall)
- [`NetworkAccessPolicy.ReadWrite.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#networkaccesspolicyreadwriteall)
- [`DelegatedAdminRelationship.ReadWrite.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#delegatedadminrelationshipreadwriteall)
- [`EntitlementManagement.ReadWrite.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#entitlementmanagementreadwriteall)
- [`User.ReadWrite.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#userreadwriteall)
- [`Directory.AccessAsUser.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#directoryaccessasuserall)
- [`Sites.FullControl.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#sitesfullcontrolall)
- [`GroupMember.ReadWrite.All`](https://learn.microsoft.com/en-us/graph/permissions-reference#groupmemberreadwriteall)

To select different scopes for your credentials, enable the **Custom Scopes** slider and edit the **Enabled Scopes** list. Keep in mind that some features may not work as expected with more restrictive scopes.

Here are the known common errors and issues with Microsoft Entra credentials.

### Need admin approval

When attempting to add credentials for a Microsoft360 or Microsoft Entra account, users may see a message when following the procedure that this action requires admin approval.

This message will appear when the account attempting to grant permissions for the credential is managed by a Microsoft Entra. In order to issue the credential, the administrator account needs to grant permission to the user (or "tenant") for that application.

The procedure for this is covered in the [Microsoft Entra documentation](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/grant-admin-consent).

---

## Create and edit credentials

**URL:** llms-txt#create-and-edit-credentials

**Contents:**
- Create a credential
- Expressions in credentials
  - Example workflow

Credentials are securely stored authentication information used to connect n8n workflows to external services such as APIs, or databases.

## Create a credential

1. Select the  **Create** button in the upper-left corner of the side menu. Select credential.
1. If your n8n instance supports [projects](../../glossary/#project-n8n), you'll also need to choose whether to create the credential inside your personal space or a specific project you have access to. If you're using the community version, you'll create the credential inside your personal space.
1. Select the app or service you wish to connect to.

1. Using the **Create** button in the upper-right corner from either the **Overview** page or a specific project. Select Credential.
1. If you're doing this from the **Overview** page, you'll create the credential inside your personal space. If you're doing this from inside a project, you'll create the credential inside that specific project.
1. Select the app or service you wish to connect to.

You can also create new credential in the credential drop down when editing a node on the workflow editor.

Once in the credential modal, enter the details required by your service. Refer to your service's page in the [credentials library](../../integrations/builtin/credentials/) for guidance.

When you save a credential, n8n tests it to confirm it works.

n8n names new credentials "*node name* account" by default. You can rename the credentials by clicking on the name, similarly to renaming nodes. It's good practice to give them names that identify the app or service, type, and purpose of the credential. A naming convention makes it easier to keep track of and identify your credentials.

## Expressions in credentials

You can use [expressions](../../glossary/#expression-n8n) to set credentials dynamically as your workflow runs:

1. In your workflow, find the data path containing the credential. This varies depending on the exact parameter names in your data. Make sure that the data containing the credential is available in the workflow when you get to the node that needs it.
1. When creating your credential, hover over the field where you want to use an expression.
1. Toggle **Expression** on.
1. Enter your expression.

[View workflow file](/_workflows/credentials/dynamic_credentials_using_expressions.json)

#### Using the example

To load the template into your n8n instance:

1. Download the workflow JSON file.
1. Open a new workflow in your n8n instance.
1. Copy in the JSON, or select **Workflow menu** > **Import from file...**.

The example workflows use Sticky Notes to guide you:

- Yellow: notes and information.
- Green: instructions to run the workflow.
- Orange: you need to change something to make the workflow work.
- Blue: draws attention to a key feature of the example.

---

## Auth0 Management credentials

**URL:** llms-txt#auth0-management-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API client secret

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

Create an [Auth0](https://auth0.com) account.

## Supported authentication methods

Refer to [Auth0 Management's documentation](https://auth0.com/docs/api/management/v2) for more information about the service.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/auth0-management-api/) on n8n's website.

## Using API client secret

To configure this credential, you'll need:

- An Auth0 **Domain**
- A **Client ID**
- A **Client Secret**

Refer to the [Auth0 Management API Get Access Tokens documentation](https://auth0.com/docs/secure/tokens/access-tokens/get-access-tokens) for instructions on obtaining the Client ID and Client Secret from the application's **Settings** tab.

---

## Serp credentials

**URL:** llms-txt#serp-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Serp](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.toolserpapi/)

Create a [SerpApi](https://serpapi.com/) account.

## Supported authentication methods

Refer to [Serp's API documentation](https://serpapi.com/search-api) for more information about the service.

View n8n's [Advanced AI](../../../../advanced-ai/) documentation.

To configure this credential, you'll need:

1. Go to **Your Account >** [**API Key**](https://serpapi.com/manage-api-key).
1. Copy **Your Private API Key** and enter it as the **API Key** in your n8n credential.

---

## Intercom credentials

**URL:** llms-txt#intercom-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Intercom](../../app-nodes/n8n-nodes-base.intercom/)

- Create an [Intercom](https://www.intercom.com/) developer account.
- [Create an app](https://developers.intercom.com/docs/build-an-integration/learn-more/authentication/) in your developer hub.

## Supported authentication methods

Refer to [Intercom's API documentation](https://developers.intercom.com/docs/references/introduction/) for more information about the service.

To configure this credential, you'll need:

- An **API Key**: Intercom automatically generates an **Access Token** when you [create an app](https://developers.intercom.com/docs/build-an-integration/learn-more/authentication/). Use this **Access Token** as your n8n **API Key**. Refer to [How to get your Access Token](https://developers.intercom.com/docs/build-an-integration/learn-more/authentication/#how-to-get-your-access-token) for more detailed instructions.

---

## Storyblok credentials

**URL:** llms-txt#storyblok-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using Content API key
- Using Management API key

You can use these credentials to authenticate the following nodes:

- [Storyblok](../../app-nodes/n8n-nodes-base.storyblok/)

Create a [Storyblok](https://www.storyblok.com/) account.

## Supported authentication methods

- Content API key: For read-only access
- Management API key: For full CRUD operations

n8n supports Content API v1 only.

Refer to Storyblok's [Content v1 API documentation](https://www.storyblok.com/docs/api/content-delivery/v1) and [Management API documentation](https://www.storyblok.com/docs/api/management/getting-started/introduction) for more information about the services.

## Using Content API key

To configure this credential, you'll need:

- A Content **API Key**: Go to your Storyblok workspace's **Settings > Access Tokens** to get an API key. Choose an **Access Level** of either **Public** (`version=published`) or **Preview** (`version-published` and `version=draft`). Enter this access token as your **API Key**. Refer to [How to retrieve and generate access tokens](https://www.storyblok.com/faq/retrieve-and-generate-access-tokens) for more detailed instructions.

Refer to [Content v1 API Authentication](https://www.storyblok.com/docs/api/content-delivery/v1#topics/authentication) for more information about supported operations with each Access Level.

## Using Management API key

To configure this credential, you'll need:

- A **Personal Access Token**: Go to [**My Account**](https://app.storyblok.com/#!/me/account) **> Personal access tokens** to generate a new access token. Enter this access token as your **Personal Access Token**.

---

## CrowdStrike credentials

**URL:** llms-txt#crowdstrike-credentials

**Contents:**
- Prerequisites
- Authentication methods
- Related resources
- Using OAuth2

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

Create a [CrowdStrike](https://www.crowdstrike.com/en-us/) account.

## Authentication methods

Refer to CrowdStrike's documentation for more information about the service. Their documentation is behind a log in, so you must log in to your account on their website to access the API documentation.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/crowdstrike/) on n8n's website.

To configure this credential, you'll need:

- The **URL** of your CrowdStrike instance
- A **Client ID**: Generated by creating a new API Client in Crowdstrike in **Support > API Clients and Keys**.
- A **Client Secret**: Generated by creating a new API Client in Crowdstrike in **Support > API Clients and Keys**.

When setting up your API client, grant it the `usermgmt:read` scope. n8n relies on this to test that the credential is working.

A broad outline of the appropriate steps is available publicly at the CrowdStrike blog: [Getting Access to the CrowdStrike API](https://www.crowdstrike.com/blog/tech-center/get-access-falcon-apis/). CrowdStrike's full documentation is behind a log in, so you must log in to your account to access the full API documentation.

---

## Beeminder credentials

**URL:** llms-txt#beeminder-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API user token

You can use these credentials to authenticate the following node:

- [Beeminder](../../app-nodes/n8n-nodes-base.beeminder/)

Create a [Beeminder](https://www.beeminder.com/) account.

## Supported authentication methods

Refer to [Beeminder's API documentation](https://api.beeminder.com/#beeminder-api-reference) for more information about the service.

## Using API user token

To configure this credential, you'll need:

- A **User** name: Should match the user who the Auth Token is generated for.
- A personal **Auth Token** for that user. Generate this using either method below:
  - In the GUI: From the [Apps & API](https://help.beeminder.com/article/110-apps-and-api#API-token) option within **Account Settings**
  - In the API: From hitting the [`auth_token` API endpoint](https://api.beeminder.com/#auth)

---

## Baserow credentials

**URL:** llms-txt#baserow-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using basic auth

You can use these credentials to authenticate the following node:

- [Baserow](../../app-nodes/n8n-nodes-base.baserow/)

Create a [Baserow](https://baserow.io/) account on any hosted Baserow instance or a self-hosted instance.

## Supported authentication methods

Refer to [Baserow's documentation](https://baserow.io/docs/index) for more information about the service.

Refer to [Baserow's auto-generated API documentation](https://baserow.io/api-docs) for more information about the API specifically.

To configure this credential, you'll need:

- Your Baserow **Host**
- A **Username** and **Password** to log in with

1. Enter the **Host** for the Baserow instance:
   - For a Baserow-hosted instance: leave as `https://api.baserow.io`.
   - For a self-hosted instance: set to your self-hosted instance API URL.
1. Enter the **Username** for the user account n8n should use.
1. Enter the **Password** for that user account.

Refer to [Baserow's API Authentication documentation](https://baserow.io/docs/apis/rest-api#authentication) for information on creating user accounts.

---

## GoTo Webinar credentials

**URL:** llms-txt#goto-webinar-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using OAuth2

You can use these credentials to authenticate the following nodes:

- [GoToWebinar](../../app-nodes/n8n-nodes-base.gotowebinar/)

Create a [GoToWebinar](https://www.goto.com/webinar) account with [Developer Center](https://developer.goto.com/) access.

## Supported authentication methods

Refer to [GoToWebinar's API documentation](https://developer.goto.com/GoToWebinarV2) for more information about authenticating with the service.

To configure this credential, you'll need:

- A **Client ID**: Provided once you create an OAuth client
- A **Client Secret**: Provided once you create an OAuth client

Refer to the [Create an OAuth client documentation](https://developer.goto.com/guides/Get%20Started/02_HOW_createClient/) for detailed instructions on creating an OAuth client. Copy the **OAuth Callback URL** from n8n to use as the **Redirect URI** in your OAuth client. The Client ID and Client secret are provided once you've finished setting up your client.

---

## Understanding the data structure

**URL:** llms-txt#understanding-the-data-structure

**Contents:**
- Data structure of n8n
- Creating data sets with the Code node
  - Exercise
- Referencing node data with the Code node
  - Exercise
- Transforming data
  - Exercise

In this chapter, you will learn about the data structure of n8n and how to use the [Code node](../../../integrations/builtin/core-nodes/n8n-nodes-base.code/) to transform data and simulate node outputs.

## Data structure of n8n

In a basic sense, n8n nodes function as an Extract, Transform, Load (ETL) tool. The nodes allow you to access (extract) data from multiple disparate sources, modify (transform) that data in a particular way, and pass (load) it along to where it needs to be.

The data that moves along from node to node in your workflow must be in a format (structure) that can be recognized and interpreted by each node. In n8n, this required structure is an array of objects.

About array of objects

An array is a list of values. The array can be empty or contain several elements. Each element is stored at a position (index) in the list, starting at 0, and can be referenced by the index number. For example, in the array `["Leonardo", "Michelangelo", "Donatello", "Raphael"];` the element `Donatello` is stored at index 2.

An object stores key-value pairs, instead of values at numbered indexes as in arrays. The order of the pairs isn't important, as the values can be accessed by referencing the key name. For example, the object below contains two properties (`name` and `color`):

An array of objects is an array that contains one or more objects. For example, the array `turtles` below contains four objects:

You can access the properties of an object using dot notation with the syntax `object.property`. For example, `turtles[1].color` gets the color of the second turtle.

Data sent from one node to another is sent as an array of JSON objects. The elements in this collection are called items.

An n8n node performs its action on each item of incoming data.

*Items in the Customer Datastore node*

## Creating data sets with the Code node

Now that you are familiar with the n8n data structure, you can use it to create your own data sets or simulate node outputs. To do this, use the [Code node](../../../integrations/builtin/core-nodes/n8n-nodes-base.code/) to write JavaScript code defining your array of objects with the following structure:

For example, the array of objects representing the Ninja turtles would look like this in the Code node:

*Array of objects in the Code node*

Notice that this array of objects contains an extra key: `json`. n8n expects you to wrap each object in an array in another object, with the key `json`.

*Illustration of data structure in n8n*

It's good practice to pass the data in the right structure used by n8n. But don't worry if you forget to add the `json` key to an item, n8n (version 0.166.0 and above) adds it automatically.

You can also have nested pairs, for example if you want to define a primary and a secondary color. In this case, you need to further wrap the key-value pairs in curly braces `{}`.

n8n data structure video

[This talk](https://www.youtube.com/watch?v=mQHT3Unn4tY) offers a more detailed explanation of data structure in n8n.

In a Code node, create an array of objects named `myContacts` that contains the properties `name` and `email`, and the `email` property is further split into `personal` and `work`.

In the **Code node**, in the JavaScript Code field you have to write the following code:

When you execute the **Code node**, the result should look like this:

*Result of Code node*

## Referencing node data with the Code node

Just like you can use [expressions](../../../code/expressions/) to reference data from other nodes, you can also use some [methods and variables](../../../code/builtin/overview/) in the **Code node**.

Please make sure you read these pages before continuing to the next exercise.

Let's build on the previous exercise, in which you used the Code node to create a data set of two contacts with their names and emails. Now, connect a second Code node to the first one. In the new node, write code to create a new column named `workEmail` that references the work email of the first contact.

In the **Code node**, in the JavaScript Code field you have to write the following code:

When you execute the **Code node**, the result should look like this:

*Code node reference*

The incoming data from some nodes may have a different data structure than the one used in n8n. In this case, you need to [transform the data](../../../data/transforming-data/), so that each item can be processed individually.

The two most common operations for data transformation are:

- Creating multiple items from one item
- Creating a single item from multiple items

There are several ways to transform data for the purposes mentioned above:

- Use n8n's [data transformation nodes](../../../data/#data-transformation-nodes). Use these nodes to modify the structure of incoming data that contain lists (arrays) without needing to use JavaScript code in the **Code node**:
  - Use the [**Split Out node**](../../../integrations/builtin/core-nodes/n8n-nodes-base.splitout/) to separate a single data item containing a list into multiple items.
  - Use the [**Aggregate node**](../../../integrations/builtin/core-nodes/n8n-nodes-base.aggregate/) to take separate items, or portions of them, and group them together into individual items.
- Use the **Code node** to write JavaScript functions to modify the data structure of incoming data using the **Run Once for All Items** mode:
  - To create multiple items from a single item, you can use JavaScript code like this. This example assumes that the item has a key named `data` set to an array of items in the form of: `[{ "data": [{<item_1>}, {<item_2>}, ...] }]`:

- To create a single item from multiple items, you can use this JavaScript code:

These JavaScript examples assume your entire input is what you want to transform. As in the exercise above, you can also execute either operation on a specific field by identifying that in the items list, for example, if our workEmail example had multiple emails in a single field, we could run some code like this:

1. Use the **HTTP Request node** to make a GET request to the PokéAPI `https://pokeapi.co/api/v2/pokemon`. (This API requires no authentication).
1. Transform the data in the `results` field with the **Split Out node**.
1. Transform the data in the `results` field with the **Code node**.

1. To get the pokemon from the PokéAPI, execute the **HTTP Request node** with the following parameters:

- **Authentication**: None
   - **Request Method**: GET
   - **URL**: https://pokeapi.co/api/v2/pokemon

1. To transform the data with the **Split Out node**, connect this node to the **HTTP Request node** and set the following parameters:

- **Field To Split Out**: results
   - **Include**: No Other Fields

1. To transform the data with the **Code node**, connect this node to the **HTTP Request node** and write the following code in the JavaScript Code field:

**Examples:**

Example 1 (unknown):
```unknown
{
	name: 'Michelangelo',
	color: 'blue',
}
```

Example 2 (unknown):
```unknown
var turtles = [
	{
		name: 'Michelangelo',
		color: 'orange',
	},
	{
		name: 'Donatello',
		color: 'purple',
	},
	{
		name: 'Raphael',
		color: 'red',
	},
	{
		name: 'Leonardo',
		color: 'blue',
	}
];
```

Example 3 (unknown):
```unknown
return [
	{
		json: {
			apple: 'beets',
		}
	}
];
```

Example 4 (unknown):
```unknown
var myContacts = [
	{
		json: {
			name: 'Alice',
			email: {
				personal: 'alice@home.com',
				work: 'alice@wonderland.org'
			},
		}
	},
	{
		json: {
			name: 'Bob',
			email: {
				personal: 'bob@mail.com',
				work: 'contact@thebuilder.com'
				},
		}
	},
];

return myContacts;
```

---

## Elastic Security credentials

**URL:** llms-txt#elastic-security-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using basic auth
- Using API key

You can use these credentials to authenticate the following nodes:

- [Elastic Security](../../app-nodes/n8n-nodes-base.elasticsecurity/)

- Create an [Elastic Security](https://www.elastic.co/security) account.
- [Deploy](https://www.elastic.co/guide/en/cloud/current/ec-create-deployment.html) an application.

## Supported authentication methods

- Basic auth
- API Key

Refer to [Elastic Security's documentation](https://www.elastic.co/guide/en/security/current/es-overview.html) for more information about the service.

To configure this credential, you'll need:

- A **Username**: For the user account you log into Elasticsearch with.

- A **Password**: For the user account you log into Elasticsearch with.

- Your Elasticsearch application's **Base URL** (also known as the Elasticsearch application endpoint):

1. In Elasticsearch, select the option to **Manage this deployment**.
  1. In the **Applications** section, copy the endpoint of the **Elasticsearch** application.
  1. Add this in n8n as the **Base URL**.

Custom endpoint aliases

If you add a [custom endpoint alias](https://www.elastic.co/guide/en/cloud/current/ec-regional-deployment-aliases.html) to a deployment, update your n8n credential **Base URL** with the new endpoint.

To configure this credential, you'll need:

- An **API Key**: For the user account you log into Elasticsearch with. Refer to Elasticsearch's [Create API key documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/security-api-create-api-key.html) for more information.

- Your Elasticsearch application's **Base URL** (also known as the Elasticsearch application endpoint):

1. In Elasticsearch, select the option to **Manage this deployment**.
  1. In the **Applications** section, copy the endpoint of the **Elasticsearch** application.
  1. Add this in n8n as the **Base URL**.

---

## Cisco Secure Endpoint credentials

**URL:** llms-txt#cisco-secure-endpoint-credentials

**Contents:**
- Prerequisites
- Authentication methods
- Related resources
- Using OAuth2

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

- Create a [Cisco DevNet developer account](https://developer.cisco.com).
- Access to a [Cisco Secure Endpoint license](https://www.cisco.com/site/us/en/products/security/endpoint-security/secure-endpoint/index.html).

## Authentication methods

Refer to [Cisco Secure Endpoint's documentation](https://developer.cisco.com/docs/secure-endpoint/introduction/) for more information about the service.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/cisco-secure-endpoint/) on n8n's website.

To configure this credential, you'll need:

- The **Region** for your Cisco Secure Endpoint. Options are:
  - Asia Pacific, Japan, and China
  - Europe
  - North America
- A **Client ID**: Provided when you register a SecureX API Client
- A **Client Secret**: Provided when you register a SecureX API Client

To get a Client ID and Client Secret, you'll need to Register a SecureX API Client. Refer to [Cisco Secure Endpoint's authentication documentation](https://developer.cisco.com/docs/secure-endpoint/authentication/#authentication) for detailed instructions. Use the SecureX **Client Password** as the **Client Secret** within the n8n credential.

---

## Postgres credentials

**URL:** llms-txt#postgres-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using database connection
  - SSH tunnel limitations

You can use these credentials to authenticate the following nodes:

- [Postgres](../../app-nodes/n8n-nodes-base.postgres/)
- [Agent](../../cluster-nodes/root-nodes/n8n-nodes-langchain.agent/)
- [Postgres Chat Memory](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.memorypostgreschat/)
- [PGVector Vector Store](../../cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstorepgvector/)

The Agent node doesn't support SSH tunnels.

[Create a user account](https://www.postgresql.org/docs/current/sql-createuser.html) on a Postgres server.

## Supported authentication methods

- Database connection

Refer to [Postgres's documentation](https://www.postgresql.org/docs/16/index.html) for more information about the service.

## Using database connection

To configure this credential, you'll need:

- The **Host** or domain name for the server.
- The **Database** name.
- A **User** name.
- A user **Password**.
- **Ignore SSL Issues**: Set whether the credential connects if SSL validation fails.
- **SSL**: Choose whether to use SSL in your connection.
- The **Port** number to use for the connection.
- **SSH Tunnel**: Choose if you want to use SSH to encrypt the network connection with the Postgres server.

To set up the database connection:

1. Enter the **Host** or domain name for the Postgres server. You can either run the `/conninfo` command to confirm the host name or run this query:

1. Enter the **Database** name. Run the `/conninfo` command to confirm the database name.

1. Enter the **User** name of the user you wish to connect as.

1. Enter the user's **Password**.

1. **Ignore SSL Issues**: If you turn this on, the credential will connect even if SSL validation fails.

1. **SSL**: Choose whether to use SSL in your connection. Refer to Postgres [SSL Support](https://www.postgresql.org/docs/16/libpq-ssl.html) for more information. Options include:

- **Allow**: Sets the `ssl-mode` parameter to `allow`. First try a non-SSL connection; if that fails, try an SSL connection.
   - **Disable**: Sets the `ssl-mode` parameter to `disable`. Only try a non-SSL connection.
   - **Require**: Sets the `ssl-mode` parameter to `require`. Only try an SSL connection. If a root CA file is present, verify that a trusted certificate authority (CA) issued the server certificate.

1. Enter the **Port** number to use for the connection. You can either run the `/conninfo` command to confirm the host name or run this query:

1. **SSH Tunnel**: Turn this setting on to connect to the database over SSH. Refer to [SSH tunnel limitations](#ssh-tunnel-limitations) for some guidance around using SSH. Once turned on, you'll need:

1. Select **SSH Authenticate with** to set the SSH Tunnel type to build:
      - Select **Password** if you want to connect to SSH using a password.
      - Select **Private Key** if you want to connect to SSH using an identity file (private key) and a passphrase.
   1. Enter the remote bind address you're connecting to as the **SSH Host**.
   1. **SSH Port**: Enter the local port number for the SSH tunnel.
   1. **SSH Postgres Port**: Enter the remote end of the tunnel, the port number the database server is using.
   1. **SSH User**: Enter the username to log in as.
   1. If you selected **Password** for SSH Authenticate with, add the user's **SSH Password**.
   1. If you selected **Private Key** for **SSH Authenticate with**:
      1. Add the contents of the **Private Key** or identity file used for SSH.
      1. If the **Private Key** was created with a passphrase, enter that **Passphrase**. If the **Private Ke**y has no passphrase, leave this field blank.

Refer to [Secure TCP/IP Connections with SSH Tunnels](https://www.postgresql.org/docs/16/ssh-tunnels.html) for more information.

### SSH tunnel limitations

Only use the **SSH Tunnel** setting if:

- You're using the credential with the [Postgres](../../app-nodes/n8n-nodes-base.postgres/) node (Agent node doesn't support SSH tunnels).
- You have an SSH server running on the same machine as the Postgres server.
- You have a user account that can log in using `ssh`.

**Examples:**

Example 1 (unknown):
```unknown
SELECT inet_server_addr();
```

Example 2 (unknown):
```unknown
SELECT inet_server_port();
```

---

## Xata credentials

**URL:** llms-txt#xata-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Xata](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.memoryxata/)

Create a [Xata](https://xata.io/) database or an account on an existing database.

## Supported authentication methods

Refer to [Xata's documentation](https://xata.io/docs/rest-api/authentication) for more information about the service.

View n8n's [Advanced AI](../../../../advanced-ai/) documentation.

To configure this credential, you'll need:

- The **Database Endpoint**: The Workspace API requires that you identify the database you're requesting information from using this format: `https://{workspace-display-name}-{workspace-id}.{region}.xata.sh/db/{dbname}`. Refer to [Workspace API](https://xata.io/docs/rest-api#workspace-api) for more information.
  - `{workspace-display-name}`: The workspace display name is an optional identifier you can include in your Database Endpoint. The API ignores it, but including it can make it easier to figure out which workspace this database is in if you're saving multiple credentials.
  - `{workspace-id}`: The unique ID of the workspace, 6 alphanumeric characters.
  - `{region}`: The hosting region for the database. This value must match the database region configuration.
  - `{dbname}`: The name of the database you're interacting with.
- A **Branch**: Enter the name of the GitHub branch for your database.
- An **API Key**: To generate an API key, go to [**Account Settings**](https://app.xata.io/settings) and select **+ Add a key**. Refer to [Generate an API Key](https://xata.io/docs/rest-api#generate-an-api-key) for more information.

---

## Elasticsearch credentials

**URL:** llms-txt#elasticsearch-credentials

**Contents:**
- Supported authentication methods
- Related resources
- Using basic auth

You can use these credentials to authenticate the following nodes:

- [Elasticsearch](../../app-nodes/n8n-nodes-base.elasticsearch/)

## Supported authentication methods

Refer to [Elasticsearch's documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html) for more information about the service.

To configure this credential, you'll need an [Elasticsearch](https://www.elastic.co/) account with a [deployment](https://www.elastic.co/guide/en/cloud/current/ec-create-deployment.html) and:

- A **Username**
- A **Password**
- Your Elasticsearch application's **Base URL** (also known as the Elasticsearch application endpoint)

To set up the credential:

1. Enter your Elasticsearch **Username**.
1. Enter your Elasticsearch **Password**.
1. In Elasticsearch, go to **Deployments**.
1. Select your deployment.
1. Select **Manage this deployment**.
1. In the **Applications** section, copy the endpoint of the **Elasticsearch** application.
1. Enter this in n8n as the **Base URL**.
1. By default, n8n connects only if SSL certificate validation succeeds. If you'd like to connect even if SSL certificate validation fails, turn on **Ignore SSL Issues**.

Custom endpoint aliases

If you add a [custom endpoint alias](https://www.elastic.co/guide/en/cloud/current/ec-regional-deployment-aliases.html) to a deployment, update your n8n credential **Base URL** with the new endpoint.

---

## Azure Storage credentials

**URL:** llms-txt#azure-storage-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using OAuth2
  - Register an application
  - Generate a client secret
- Using Shared Key
- Common issues
  - Need admin approval

You can use these credentials to authenticate the following nodes:

- [Azure Storage](../../app-nodes/n8n-nodes-base.azurestorage/)

- Create an [Azure](https://azure.microsoft.com) subscription.
- Create an [Azure storage account](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-create).

## Supported authentication methods

- OAuth2
- Shared Key

Refer to [Azure Storage's API documentation](https://learn.microsoft.com/en-us/rest/api/storageservices/) for more information about the service.

Note for n8n Cloud users

Cloud users don't need to provide connection details. Select **Connect my account** to connect through your browser.

For self-hosted users, there are two main steps to configure OAuth2 from scratch:

1. [Register an application](#register-an-application) with the Microsoft Identity Platform.
1. [Generate a client secret](#generate-a-client-secret) for that application.

Follow the detailed instructions for each step below. For more detail on the Microsoft OAuth2 web flow, refer to [Microsoft authentication and authorization basics](https://learn.microsoft.com/en-us/graph/auth/auth-concepts).

### Register an application

Register an application with the Microsoft Identity Platform:

1. Open the [Microsoft Application Registration Portal](https://aka.ms/appregistrations).
1. Select **Register an application**.
1. Enter a **Name** for your app.
1. In **Supported account types**, select **Accounts in any organizational directory (Any Azure AD directory - Multi-tenant) and personal Microsoft accounts (for example, Skype, Xbox)**.
1. In **Register an application**:
   1. Copy the **OAuth Callback URL** from your n8n credential.
   1. Paste it into the **Redirect URI (optional)** field.
   1. Select **Select a platform** > **Web**.
1. Select **Register** to finish creating your application.
1. Copy the **Application (client) ID** and paste it into n8n as the **Client ID**.

Refer to [Register an application with the Microsoft Identity Platform](https://learn.microsoft.com/en-us/graph/auth-register-app-v2) for more information.

### Generate a client secret

With your application created, generate a client secret for it:

1. On your Microsoft application page, select **Certificates & secrets** in the left navigation.
1. In **Client secrets**, select **+ New client secret**.
1. Enter a **Description** for your client secret, such as `n8n credential`.
1. Select **Add**.
1. Copy the **Secret** in the **Value** column.
1. Paste it into n8n as the **Client Secret**.
1. Select **Connect my account** in n8n to finish setting up the connection.
1. Log in to your Microsoft account and allow the app to access your info.

Refer to Microsoft's [Add credentials](https://learn.microsoft.com/en-us/graph/auth-register-app-v2#add-credentials) for more information on adding a client secret.

To configure this credential, you'll need:

- An **Account**: The name of your Azure Storage account.
- A **Key**: A shared key for your Azure Storage account. Select **Security + networking** and then **Access keys**. You can use either of the two account keys for this purpose.

Refer to [Manage storage account access keys | Microsoft](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage) for more detailed steps.

Here are the known common errors and issues with Azure Storage credentials.

### Need admin approval

When attempting to add credentials for a Microsoft360 or Microsoft Entra account, users may see a message when following the procedure that this action requires admin approval.

This message will appear when the account attempting to grant permissions for the credential is managed by a Microsoft Entra. In order to issue the credential, the administrator account needs to grant permission to the user (or "tenant") for that application.

The procedure for this is covered in the [Microsoft Entra documentation](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/grant-admin-consent).

---

## Freshdesk credentials

**URL:** llms-txt#freshdesk-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Freshdesk](../../app-nodes/n8n-nodes-base.freshdesk/)

Create a [Freshdesk](https://freshdesk.com/) account.

## Supported authentication methods

Refer to [Freshdesk's API documentation](https://developers.freshdesk.com/api/) for more information about the service.

To configure this credential, you'll need:

- An **API Key**: Refer to the [Freshdesk API authenticaton documentation](https://developers.freshdesk.com/api/#authentication) for detailed instructions on getting your API key.
- A Freshdesk **Domain**: Use the subdomain of your Freshdesk account. This is part of the URL, for example `https://<subdomain>.freshdesk.com`. So if you access Freshdesk through `https://n8n.freshdesk.com`, enter `n8n` as your **Domain**.

---

## Oura credentials

**URL:** llms-txt#oura-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API access token

You can use these credentials to authenticate the following nodes:

- [Oura](../../app-nodes/n8n-nodes-base.oura/)

Create an [Oura](https://ouraring.com/developer) account.

## Supported authentication methods

Refer to [Oura's API documentation](https://cloud.ouraring.com/v2/docs) for more information about the service.

## Using API access token

To configure this credential, you'll need:

- A **Personal Access Token**: To generate a personal access token, go to the [Personal Access Tokens](https://cloud.ouraring.com/personal-access-tokens) page and select **Create A New Personal Access Token**.

Refer to [How to Generate Personal Access Tokens](https://support.ouraring.com/hc/en-us/articles/4415266939155-The-Oura-API#h_01H5B94SP4P9YHG9ZKN1H69E7Z) for more information.

---

## Coda credentials

**URL:** llms-txt#coda-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API access token

You can use these credentials to authenticate the following nodes:

- [Coda](../../app-nodes/n8n-nodes-base.coda/)

Create a [Coda](https://www.coda.io/) account.

## Supported authentication methods

Refer to [Coda's API documentation](https://coda.io/developers/apis/v1) for more information about the service.

## Using API access token

To configure this credential, you'll need:

- An API **Access Token**: Generate an API access token in your Coda [**Account settings**](https://coda.io/@oleg/getting-started-guide-coda-api/start-here-5#_luxC4).

---

## NASA credentials

**URL:** llms-txt#nasa-credentials

**Contents:**
- Supported authentication methods
- Related resources
- Using an API key

You can use these credentials to authenticate the following nodes:

- [NASA](../../app-nodes/n8n-nodes-base.nasa/)

## Supported authentication methods

Refer to the **Browse APIs** section of the [NASA Open APIs](https://api.nasa.gov/) for more information about the service.

To configure this credential, you'll need:

To generate an API key:

1. Go to the [NASA Open APIs](https://api.nasa.gov/) page.
1. Complete the fields in the **Generate API Key** section.
1. Copy the **API Key** and enter it in your n8n credential.

---

## E-goi credentials

**URL:** llms-txt#e-goi-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [E-goi](../../app-nodes/n8n-nodes-base.egoi/)

Create an [E-goi](https://www.e-goi.com/) account.

## Supported authentication methods

Refer to [E-goi's API documentation](https://developers.e-goi.com/api/v3/) for more information about the service.

To configure this credential, you'll need:

- An **API Key**: Refer to [E-goi's API key documentation](https://helpdesk.e-goi.com/511369-Whats-E-gois-API-and-where-do-I-find-my-API-key) for instructions on generating and viewing an API key.

---

## Microsoft SQL credentials

**URL:** llms-txt#microsoft-sql-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using SQL database connection

You can use these credentials to authenticate the following nodes:

- [Microsoft SQL](../../app-nodes/n8n-nodes-base.microsoftsql/)

Create a user account on a [Microsoft SQL server](https://learn.microsoft.com/en-us/sql/sql-server/what-is-sql-server) database.

## Supported authentication methods

- SQL database connection

Refer to [Microsoft's Connect to SQL Server documentation](https://learn.microsoft.com/en-us/sql/sql-server/connect-to-database-engine?view=sql-server-ver16&tabs=sqldb#connect-to-sql-server) for more information about connecting to the service.

## Using SQL database connection

To configure this credential, you'll need:

- The **Server** name
- The **Database** name
- Your **User** account/ID
- Your **Password**
- The **Port** to use for the connection
- The **Domain** name
- Whether to use **TLS**
- Whether to **Ignore SSL Issues**
- The **Connect Timeout**
- The **Request Timeout**
- The **TDS Version** the connection should use

To set up the database connection:

1. Enter the SQL Server Host Name as the **Server**. In an existing SQL Server connection, the host name comes before the instance name in the format `HOSTNAME\INSTANCENAME`. Find the host name:

- In the **Object Explorer** pane as the top-level object for your database.
   - In the footer of a query window.
   - Viewing the current connection **Properties** and looking for **Name** or **Display Name**.
   - Refer to [Find SQL Server Instance Name | When you're connected to SQL Server](https://learn.microsoft.com/en-us/sql/ssms/tutorials/ssms-tricks?view=sql-server-ver16#when-youre-connected-to-sql-server) for more information. You can also find the information in the [Error logs](https://learn.microsoft.com/en-us/sql/ssms/tutorials/ssms-tricks?view=sql-server-ver16#before-you-connect-to-sql-server).

1. Enter the SQL Server Instance Name as the **Database** name. Find this name using the same steps listed above for finding the host name.

- If you don't see an instance name in any of these places, then your database uses the default `MSSQLSERVER` instance name.

1. Enter your **User** account name or ID.

1. Enter your **Password**.

- SQL Server defaults to `1433`.
   - If you can't connect over port 1433, check the [Error logs](https://learn.microsoft.com/en-us/sql/ssms/tutorials/ssms-tricks?view=sql-server-ver16#before-you-connect-to-sql-server) for the phrase `Server is listening on` to identify the port number you should enter.

1. You only need to enter the **Domain** name if users in multiple domains access your database. Run this SQL query to get the domain name:

1. Select whether to use **TLS**.

1. Select whether to **Ignore SSL Issues**: If turned on, the credential will connect even if SSL certificate validation fails.

1. Enter the number of milliseconds n8n should attempt the initial connection to complete before disconnecting as the **Connect Timeout**. Refer to the [SqlConnection.ConnectionTimeout property documentation](https://learn.microsoft.com/en-us/dotnet/api/system.data.sqlclient.sqlconnection.connectiontimeout) for more information.

- SQL Server stores this timeout as seconds, while n8n stores it as milliseconds. If you're copying your SQL Server defaults, multiple by 100 before entering the number here.

1. Enter the number of milliseconds n8n should wait on a given request before timing out as the **Request Timeout**. This is basically a query timeout parameter. Refer to [Troubleshoot query time-out errors](https://learn.microsoft.com/en-us/troubleshoot/sql/database-engine/performance/troubleshoot-query-timeouts#explanation) for more information.

1. Select the Tabular Data Stream (TDS) protocol to use from the **TDS Version** dropdown. If the server doesn't support the version you select here, the connection uses a negotiated alternate version. Refer to [Appendix A: Product Behavior](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-tds/135d0ebe-5c4c-4a94-99bf-1811eccb9f4a) for a more detailed breakdown of the TDS versions' compatibility with different SQL Server versions and .NET frameworks. Options include:

- **7_4 (SQL Server 2012 ~ 2019)**: TDS version 7.4.
   - **7_3_B (SQL Server 2008R2)**: TDS version 7.3.B.
   - **7_3_A (SQL Server 2008)**: TDS version 7.3.A.
   - **7_2 (SQL Server 2005)**: TDS version 7.2.
   - **7_1 (SQL Server 2000)**: TDS version 7.1.

**Examples:**

Example 1 (unknown):
```unknown
SELECT DEFAULT_DOMAIN()[DomainName];
```

---

## Sysdig Management credentials

**URL:** llms-txt#sysdig-management-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API access key

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

Create a [Sysdig](https://sysdig.com) account or configure a local instance.

## Supported authentication methods

Refer to [Sysdig's documentation](https://docs.sysdig.com/en/docs/developer-tools/sysdig-api/) for more information about the service.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more.

## Using API access key

To configure this credential, you'll need:

Refer to the [Sysdig Agent Access Keys documentation](https://docs.sysdig.com/en/docs/administration/agent_access_key/) for instructions on obtaining the Access Key from the application.

---

## SIGNL4 credentials

**URL:** llms-txt#signl4-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using webhook secret

You can use these credentials to authenticate the following nodes:

- [SIGNL4](../../app-nodes/n8n-nodes-base.signl4/)

Create a [SIGNL4](https://www.signl4.com/) account.

## Supported authentication methods

Refer to [SIGNL4's Inbound Webhook documentation](https://connect.signl4.com/webhook/docs/index.html) for more information about the service.

## Using webhook secret

To configure this credential, you'll need:

- A **Team Secret**: SIGNL4 includes this secret in the "✅ Sign up complete" email as the last part of the webhook URL. If your webhook URL is `https://connect.signl4.com/webhook/helloworld`, your team secret would be `helloworld`.

---

## LinkedIn credentials

**URL:** llms-txt#linkedin-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related Resources
- Using Community Management OAuth2
- Using OAuth2

You can use these credentials to authenticate the following nodes:

- [LinkedIn](../../app-nodes/n8n-nodes-base.linkedin/)

- Create a [LinkedIn](https://www.linkedin.com/) account.
- Create a LinkedIn [Company Page](https://www.linkedin.com/help/linkedin/answer/a543852).

## Supported authentication methods

- **Community Management OAuth2**: Use this method if you're a new LinkedIn user or creating a new LinkedIn app.
- **OAuth2**: Use this method for older LinkedIn apps and user accounts.

Refer to [LinkedIn's Community Management API documentation](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/community-management-overview?view=li-lms-2024-04) for more information about the service.

This credential works with API version `202404`.

## Using Community Management OAuth2

Use this method if you're a new LinkedIn user or creating a new LinkedIn app.

To configure this credential, you'll need a [LinkedIn](https://www.linkedin.com/) account, a LinkedIn [Company Page](https://www.linkedin.com/help/linkedin/answer/a543852), and:

- A **Client ID**: Generated after you create a new developer app.
- A **Client Secret**: Generated after you create a new developer app.

To create a new developer app and set up the credential:

1. Log into LinkedIn and select this link to [create a new developer app](https://www.linkedin.com/developers/apps/new).
1. Enter an **App name** for your app, like `n8n integration`.
1. For the **LinkedIn Page**, enter a LinkedIn [Company Page](https://www.linkedin.com/help/linkedin/answer/a543852) or use the **Create a new LinkedIn Page** link to create one on-the-fly. Refer to [Associate an App with a LinkedIn Page](https://www.linkedin.com/help/linkedin/answer/a548360) for more information.
1. Add an **App logo**.
1. Check the box to agree to the **Legal agreement**.
1. Select **Create app**.
1. This should open the **Products** tab. Select the products/APIs you want to enable for your app. For the LinkedIn node to work properly, you must include and configure:
   - **Share on LinkedIn**
   - **Sign In with LinkedIn using OpenID Connect**
   - **Advertising API** (if using it as an organization account rather than an individual)
1. Once you've requested access to the products you need, open the **Auth** tab.
1. Copy the **Client ID** and enter it in your n8n credential.
1. Select the icon to **Copy** the **Primary Client Secret**. Enter this in your n8n credential as the **Client Secret**.

Posting from organization accounts

To post as an organization, you need to put your app through LinkedIn's [Community Management App Review](https://learn.microsoft.com/en-us/linkedin/marketing/community-management-app-review) process.

Refer to [Getting Access to LinkedIn APIs](https://learn.microsoft.com/en-us/linkedin/shared/authentication/getting-access) for more information on scopes and permissions.

Only use this method for older LinkedIn apps and user accounts.

Note for n8n Cloud users

Cloud users don't need to provide connection details. Select **Connect my account** to connect through your browser.

All users must select:

- **Organization Support**: If turned on, the credential requests permission to post as an organization using the `w_organization_social` scope.
  - To use this option, you must put your app through LinkedIn's [Community Management App Review](https://learn.microsoft.com/en-us/linkedin/marketing/community-management-app-review) process.
- **Legacy**: If turned on, the credential uses legacy scopes for `r_liteprofile` and `r_emailaddress` instead of the newer `profile` and `email` scopes.

If you're [self-hosting](../../../../hosting/) n8n, you'll need to configure OAuth2 from scratch by creating a new developer app:

1. Log into LinkedIn and select this link to [create a new developer app](https://www.linkedin.com/developers/apps/new).
1. Enter an **App name** for your app, like `n8n integration`.
1. For the **LinkedIn Page**, enter a LinkedIn [Company Page](https://www.linkedin.com/help/linkedin/answer/a543852) or use the **Create a new LinkedIn Page** link to create one on-the-fly. Refer to [Associate an App with a LinkedIn Page](https://www.linkedin.com/help/linkedin/answer/a548360) for more information.
1. Add an **App logo**.
1. Check the box to agree to the **Legal agreement**.
1. Select **Create app**.
1. This should open the **Products** tab. Select the products/APIs you want to enable for your app. For the LinkedIn node to work properly, you must include:
   - **Share on LinkedIn**
   - **Sign In with LinkedIn using OpenID Connect**
1. Once you've requested access to the products you need, open the **Auth** tab.
1. Copy the **Client ID** and enter it in your n8n credential.
1. Select the icon to **Copy** the **Primary Client Secret**. Enter this in your n8n credential as the **Client Secret**.

Posting from organization accounts

To post as an organization, you need to put your app through LinkedIn's [Community Management App Review](https://learn.microsoft.com/en-us/linkedin/marketing/community-management-app-review) process.

Refer to [Getting Access to LinkedIn APIs](https://learn.microsoft.com/en-us/linkedin/shared/authentication/getting-access) for more information on scopes and permissions.

---

## Zammad credentials

**URL:** llms-txt#zammad-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using basic auth
- Using token auth

You can use these credentials to authenticate the following nodes:

- [Zammad](../../app-nodes/n8n-nodes-base.zammad/)

- Create a hosted [Zammad](https://zammad.com/) account or set up your own Zammad instance.
- For token authentication, enable **API Token Access** in **Settings > System > API**. Refer to [Setting up a Zammad](https://admin-docs.zammad.org/en/latest/system/integrations/zabbix.html?#setting-up-a-zammad) for more information.

## Supported authentication methods

- Basic auth
- Token auth: Zammad recommends using this authentication method.

Refer to [Zammad's API Authentication documentation](https://docs.zammad.org/en/latest/api/intro.html?#authentication) for more information about authenticating with the service.

To configure this credential, you'll need:

- A **Base URL**: Enter the URL of your Zammad instance.
- An **Email** address: Enter the email address you use to log in to Zammad.
- A **Password**: Enter your Zammad password.
- **Ignore SSL Issues**: When turned on, n8n will connect even if SSL certificate validation fails.

To configure this credential, you'll need:

- A **Base URL**: Enter the URL of your Zammad instance.
- An **Access Token**: Once **API Token Access** is enabled for the Zammad instance, any user with the `user_preferences.access_token` permission can generate an **Access Token** by going to your **avatar > Profile > Token Access** and **Create** a new token.
  - The access token permissions depend on what actions you'd like to complete with this credential. For all functionality within the [Zammad](../../app-nodes/n8n-nodes-base.zammad/) node, select:
    - `admin.group`
    - `admin.organization`
    - `admin.user`
    - `ticket.agent`
    - `ticket.customer`
- **Ignore SSL Issues**: When turned on, n8n will connect even if SSL certificate validation fails.

---

## Sentry.io credentials

**URL:** llms-txt#sentry.io-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API token
- Using OAuth
- Using Server API token

You can use these credentials to authenticate the following nodes:

- [Sentry.io](../../app-nodes/n8n-nodes-base.sentryio/)

Create a [Sentry.io](https://sentry.io/) account.

## Supported authentication methods

- API token
- OAuth2
- Server API token: Use for [self-hosted Sentry](https://develop.sentry.dev/self-hosted/).

Refer to [Sentry.io's API documentation](https://docs.sentry.io/api/) for more information about the service.

To configure this credential, you'll need:

- An API **Token**: Generate a [**User Auth Token**](https://sentry.io/settings/account/api/auth-tokens/) in **Account > Settings > User Auth Tokens**. Refer to [User Auth Tokens](https://docs.sentry.io/account/auth-tokens/#user-auth-tokens) for more information.

Note for n8n Cloud users

Cloud users don't need to provide connection details. Select **Connect my account** to connect through your browser.

If you need to configure OAuth2 from scratch, [create an integration](https://docs.sentry.io/organization/integrations/integration-platform/#creating-an-integration) with these settings:

- Copy the n8n **OAuth Callback URL** and add it as an **Authorized Redirect URI**.
- Copy the **Client ID** and **Client Secret** and add them to your n8n credential.

Refer to [Public integrations](https://docs.sentry.io/organization/integrations/integration-platform/public-integration/) for more information on creating the integration.

## Using Server API token

To configure this credential, you'll need:

- An API **Token**: Generate a [**User Auth Token**](https://sentry.io/settings/account/api/auth-tokens/) in **Account > Settings > User Auth Tokens**. Refer to [User Auth Tokens](https://docs.sentry.io/account/auth-tokens/#user-auth-tokens) for more information.
- The **URL** of your self-hosted Sentry instance.

---

## Mandrill credentials

**URL:** llms-txt#mandrill-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Mandrill](../../app-nodes/n8n-nodes-base.mandrill/)

- Create a Mailchimp [Transactional email account](https://mailchimp.com/features/transactional-email-infrastructure/)
- Log in to [Mandrill](https://mandrillapp.com/login/) with your Mailchimp account.

If you already have a Mailchimp account with a Standard plan or higher, enable [Transactional Emails](https://mailchimp.com/help/add-or-remove-transactional-email) within that account to use Mandrill.

## Supported authentication methods

Refer to [Mailchimp's Transactional API documentation](https://mailchimp.com/developer/transactional/api/) for more information about the service.

To configure this credential, you'll need:

- An **API Key**: Generate an API key from the Mandrill [Settings](https://mandrillapp.com/settings). Refer to Mailchimp's [Generate your API key documentation](https://mailchimp.com/developer/transactional/guides/quick-start/#generate-your-api-key) for more detailed instructions.

---

## Bubble credentials

**URL:** llms-txt#bubble-credentials

**Contents:**
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Bubble](../../app-nodes/n8n-nodes-base.bubble/)

You need a paid plan to access the Bubble APIs.

## Supported authentication methods

Refer to [Bubble's API documentation](https://manual.bubble.io/help-guides/integrations/api) for more information about the service.

To configure this credential, you'll need a paid [Bubble](https://bubble.io) account and:

- An **API Token**
- An **App Name**
- Your **Domain**, if you're using a custom domain

To set it up, you'll need to create an app:

1. Go to the [**Apps**](https://bubble.io/home/apps) page in Bubble.
1. Select **Create an app**.
1. Enter a **Name** for your app, like `n8n-integration`.
1. Select **Get started**. The app's details open.
1. In the left navigation, select **Settings** (the gear cog icon).
1. Select the **API** tab.
1. In the **Public API Endpoints** section, check the box to **Enable Data API**.
1. The page displays the **Data API root URL**, for example: `https://n8n-integration.bubbleapps.io/version-test/api/1.1/obj`.
1. Copy the part of the URL after `https://` and before `.bubbleapps.io` and enter it in n8n as the **App Name**. In the above example, you'd enter `n8n-integration`.
1. Select **Generate a new API token**.
1. Enter an **API Token Label**, like `n8n integration`.
1. Copy the **Private key** and enter it as the **API Token** in your n8n credential.
   - Refer to [Data API | Authentication](https://manual.bubble.io/core-resources/api/the-bubble-api/the-data-api/authentication) for more information on generating API tokens.
1. In n8n, select the **Environment** that best matches your app:
   - Select **Development** for an app that you haven't deployed, accessed at `https://appname.bubbleapps.io/version-test` or `https://www.mydomain.com/version-test`.
   - Select **Live** for an app that you've [deployed](https://manual.bubble.io/help-guides/getting-started/navigating-the-bubble-editor/deploying-your-app), accessed at `https://appname.bubbleapps.io` or `https://www.mydomain.com`.
1. In n8n, select your **Hosting**:
   - If you haven't set up a custom domain, select **Bubble Hosting**.
   - If you've set up a [custom domain](https://manual.bubble.io/help-guides/getting-started/navigating-the-bubble-editor/tabs-and-sections/settings-tab/web-app/custom-domain-and-dns), select **Self Hosted** and enter your custom **Domain**.

Refer to Bubble's [Creating and managing apps](https://manual.bubble.io/help-guides/getting-started/creating-and-managing-apps) documentation for more information.

---

## Mailgun credentials

**URL:** llms-txt#mailgun-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key
- Working with multiple email domains

You can use these credentials to authenticate the following nodes:

- [Mailgun](../../app-nodes/n8n-nodes-base.mailgun/)

- Create a [Mailgun](https://www.mailgun.com/) account.
- [Add and verify a domain](https://help.mailgun.com/hc/en-us/articles/360026833053-Domain-Verification-Setup-Guide) in Mailgun or use the provided sandbox domain for testing.

## Supported authentication methods

Refer to [Mailgun's API documentation](https://documentation.mailgun.com/docs/mailgun/api-reference/api-overview) for more information about the service.

To configure this credential, you'll need:

- An **API Domain**: If your Mailgun account is based in Europe, select **api.eu.mailgun.net**; otherwise, select **api.mailgun.net**. Refer to [Mailgun Base URLs](https://documentation.mailgun.com/docs/mailgun/api-reference/api-overview#base-url) for more information.
- An **Email Domain**: Enter the email sending domain you're working with. If you have multiple sending domains, refer to [Working with multiple email domains](#working-with-multiple-email-domains) for more information.
- An **API Key**: View your API key in **Settings > API Keys**. Refer to [Mailgun's API Authentication documentation](https://documentation.mailgun.com/docs/mailgun/api-reference/mg-auth) for more detailed instructions.

## Working with multiple email domains

If your Mailgun account includes multiple sending domains, create a separate credential for each email domain you're working with.

---

## Okta credentials

**URL:** llms-txt#okta-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using SSWS API access token

You can use these credentials to authenticate the following nodes:

- [Okta](../../app-nodes/n8n-nodes-base.okta/)

Create an [Okta free trial](https://www.okta.com/free-trial/) or create an admin account on an existing Okta org.

## Supported authentication methods

- SSWS API Access token

Refer to [Okta's documentation](https://developer.okta.com/docs/reference/) for more information about the service.

## Using SSWS API access token

To configure this credential, you'll need:

- The **URL**: The base URL of your Okta org, also referred to as your unique subdomain. There are two quick ways to access it:
  1. In the Admin Console, select your **Profile**, hover over the domain listed below your username, and select the **Copy** icon. Paste this into n8n, but be sure to add `https://` before it.
  1. Copy the base URL of your Admin Console URL, for example `https://dev-123456-admin.okta.com`. Paste it into n8n and remove `-admin`, for example: `https://dev-123456.okta.com`.
- An **SSWS Access Token**: Create a token by going to **Security > API > Tokens > Create token**. Refer to [Create Okta API tokens](https://help.okta.com/en-us/content/topics/security/api.htm?cshid=ext-create-api-token#create-okta-api-token) for more information.

---

## Travis CI credentials

**URL:** llms-txt#travis-ci-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API token

You can use these credentials to authenticate the following nodes:

- [Travis CI](../../app-nodes/n8n-nodes-base.travisci/)

Create a [Travis CI](https://travis-ci.com/) account.

## Supported authentication methods

Refer to [Travis CI's API documentation](https://docs.travis-ci.com/user/developer/) for more information about the service.

To configure this credential, you'll need:

- An **API Token**: Get your API token from **Account Settings >** [**API Token**](https://packagecloud.io/api_token) or generate one through the Travis CI [command line client](https://github.com/travis-ci/travis.rb#installation) .

---

## Monica CRM credentials

**URL:** llms-txt#monica-crm-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API token

You can use these credentials to authenticate the following nodes:

- [Monica CRM](../../app-nodes/n8n-nodes-base.monicacrm/)

Sign up for a [Monica CRM](https://www.monicahq.com/) account or self-host an instance.

## Supported authentication methods

Refer to [Monica's API documentation](https://www.monicahq.com/api) for more information about the service.

To configure this credential, you'll need:

- Your **Environment**:
  - Select **Cloud-Hosted** if you access your Monica instance through Monica.
  - Select **Self-Hosted** if you have self-hosted Monica on your own server. Provide your **Self-Hosted Domain**.
- An **API Token**: Generate a token in **Settings > API**.

---

## Demio credentials

**URL:** llms-txt#demio-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Demio](../../app-nodes/n8n-nodes-base.demio/)

Create a [Demio](https://demio.com/) account.

## Supported authentication methods

Refer to [Demio's API documentation](https://publicdemioapi.docs.apiary.io/#) for more information about the service.

To configure this credential, you'll need:

- An **API Key**
- An **API Secret**

You must have Owner status in Demio to generate API keys and secrets. To view and generate API keys and secrets, go to **Account Settings > API**. Refer to the [Demio Account Owner Settings documentation](https://help.demio.com/en/articles/6456716-account-owner-settings) for more detailed steps.

---

## Clearbit credentials

**URL:** llms-txt#clearbit-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following node:

- [Clearbit](../../app-nodes/n8n-nodes-base.clearbit/)

Create a [Clearbit](https://www.clearbit.com/) account.

## Supported authentication methods

Refer to [Clearbit's API documentation](https://dashboard.clearbit.com/docs) for more information about authenticating with the service.

To configure this credential, you'll need:

- An **API Key**: Refer to [Clearbit's API Authentication documentation](https://dashboard.clearbit.com/docs#authentication) for more information on creating and viewing API keys.

---

## Credentials environment variables

**URL:** llms-txt#credentials-environment-variables

File-based configuration

You can add `_FILE` to individual variables to provide their configuration in a separate file. Refer to [Keeping sensitive data in separate files](../../configuration-methods/#keeping-sensitive-data-in-separate-files) for more details.

Enable credential overwrites using the following environment variables. Refer to [Credential overwrites](../../../../embed/configuration/#credential-overwrites) for details.

| Variable                              | Type   | Default          | Description                            |
| ------------------------------------- | ------ | ---------------- | -------------------------------------- |
| `CREDENTIALS_OVERWRITE_DATA` /`_FILE` | \*     | -                | Overwrites for credentials.            |
| `CREDENTIALS_OVERWRITE_ENDPOINT`      | String | -                | The API endpoint to fetch credentials. |
| `CREDENTIALS_DEFAULT_NAME`            | String | `My credentials` | The default name for credentials.      |

---

## Mocean credentials

**URL:** llms-txt#mocean-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Mocean](../../app-nodes/n8n-nodes-base.mocean/)

Create a [Mocean](https://moceanapi.com/) account.

## Supported authentication methods

Refer to [Mocean's API documentation](https://moceanapi.com/docs/) for more information about the service.

To configure this credential, you'll need:

- An **API Key**
- An **API Secret**

Both the key and secret are accessible in your Mocean [Dashboard](https://dashboard.moceanapi.com/). Refer to [API Authentication](https://moceanapi.com/docs/#authentication) for more information.

---

## SendGrid credentials

**URL:** llms-txt#sendgrid-credentials

**Contents:**
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [SendGrid](../../app-nodes/n8n-nodes-base.sendgrid/)

## Supported authentication methods

Refer to [SendGrid's API documentation](https://www.twilio.com/docs/sendgrid/api-reference) for more information about the service.

To configure this credential, you'll need a [SendGrid](https://sendgrid.com) account and:

To create an API key:

1. In the Twilio SendGrid app, go to **Settings >** [**API Keys**](https://app.sendgrid.com/settings/api_keys).
1. Select **Create API Key**.
1. Enter a **Name** for your API key, like `n8n integration`.
1. Select **Full Access**.
1. Select **Create & View**.
1. Copy the key and enter it in your n8n credential.

Refer to [Create API Keys](https://www.twilio.com/docs/sendgrid/api-reference/api-keys/create-api-keys) for more information.

---

## Supabase credentials

**URL:** llms-txt#supabase-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using access token

You can use these credentials to authenticate the following nodes:

- [Supabase](../../app-nodes/n8n-nodes-base.supabase/)
- [Supabase Vector Store](../../cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoresupabase/)

Create a [Supabase](https://supabase.com/dashboard/sign-up) account.

## Supported authentication methods

Refer to [Supabase's API documentation](https://supabase.com/docs/guides/api) for more information about the service.

## Using access token

To configure this credential, you'll need:

- A **Host**
- A **Service Role Secret**

To generate your API Key:

1. In your Supabase account, go to the **Dashboard** and create or select a project for which you want to create an API key.
1. Go to [**Project Settings > API**](https://supabase.com/dashboard/project/_/settings/api) to see the API Settings for your project.
1. Copy the **URL** from the **Project URL** section and enter it as your n8n **Host**. Refer to [API URL and keys](https://supabase.com/docs/guides/api#api-url-and-keys) for more detailed instruction.
1. Reveal and copy the **Project API key** for the `service_role`. Copy that key and enter it as your n8n **Service Role Secret**. Refer to [Understanding API Keys](https://supabase.com/docs/guides/api/api-keys) for more information on the `service_role` privileges.

---

## Line credentials

**URL:** llms-txt#line-credentials

**Contents:**
- Supported authentication methods
- Related resources
- Using Notify OAuth2

Deprecated: End of service

LINE Notify is discontinuing service as of April 1st 2025 and this node will no longer work after that date. View LINE Notify's [end of service announement](https://notify-bot.line.me/closing-announce) for more information.

You can use these credentials to authenticate the following nodes:

- [Line](../../app-nodes/n8n-nodes-base.line/)

## Supported authentication methods

Refer to [Line Notify's API documentation](https://notify-bot.line.me/doc/en/) for more information about the service.

## Using Notify OAuth2

To configure this credential, you'll need a [Line](https://line.me/en/) account and:

- A **Client ID**
- A **Client Secret**

To generate both, connect Line with [Line Notify](https://notify-bot.line.me/en/). Then:

1. Open the Line Notify page to [add a new service](https://notify-bot.line.me/my/services/new).
1. Enter a **Service name**. This name displays when someone tries to connect to the service.
1. Enter a **Service description**.
1. Enter a **Service URL**
1. Enter your **Company/Enterprise**.
1. Select your **Country/region**.
1. Enter your name or team name as the **Representative**.
1. Enter a valid **Email address**. Line will verify this email address before the service is fully registered. Use an email address you have ready access to.
1. Copy the **OAuth Redirect URL** from your n8n credential and enter it as the **Callback URL** in Line Notify.
1. Select **Agree and continue** to agree to the terms of service.
1. Verify the information you entered is correct and select **Add**.
1. Check your email and open the Line Notify Registration URL to verify your email address.
1. Once verification is complete, open [**My services**](https://notify-bot.line.me/my/services/).
1. Select the service you just added.
1. Copy the **Client ID** and enter it in your n8n credential.
1. Select the option to **Display** the **Client Secret**. Copy the **Client Secret** and enter it in your n8n credential.
1. In n8n, select **Connect my account** and follow the on-screen prompts to finish the credential.

Refer to the Authentication section of [Line Notify's API documentation](https://notify-bot.line.me/doc/en/) for more information.

---

## Tapfiliate credentials

**URL:** llms-txt#tapfiliate-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Tapfiliate](../../app-nodes/n8n-nodes-base.tapfiliate/)

Create a [Tapfiliate](https://tapfiliate.com/) account.

## Supported authentication methods

Refer to [Tapfiliate's API documentation](https://tapfiliate.com/docs/rest/) for more information about the service.

To configure this credential, you'll need:

- An **API Key**: Get your API Key from your [**Profile Settings**](https://app.tapfiliate.com/a/profile/) **> API Key**.

Refer to [Your API key](https://support.tapfiliate.com/en/articles/1441950-your-api-key) for more information.

---

## Zscaler ZIA credentials

**URL:** llms-txt#zscaler-zia-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using basic auth and API key combo

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

Create an admin account on a [Zscaler Internet Access (ZIA)](https://www.zscaler.com/products/zscaler-internet-access) cloud instance.

## Supported authentication methods

- Basic auth and API key combo

Refer to [Zscaler ZIA's documentation](https://help.zscaler.com/zia/getting-started-zia-api) for more information about the service.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/zscaler-zia/) on n8n's website.

## Using basic auth and API key combo

To configure this credential, you'll need:

- A **Base URL**: Enter the base URL of your Zscaler ZIA cloud name. To get your base URL, log in to the ZIA Admin Portal and go to **Administration > Cloud Service API Security**. The base URL is displayed in both the **Cloud Service API Key** tab and the **OAuth 2.0 Authorization Servers** tab.
- A **Username**: Enter your ZIA admin username.
- A **Password**: Enter your ZIA admin password.
- An **Api Key**: Get an API key by creating one from **Administration > Cloud Service API Security > Cloud Service API Key**.

Refer to [About Cloud Service API Key](https://help.zscaler.com/zia/about-cloud-service-api-key) for more detailed instructions.

---

## Paddle credentials

**URL:** llms-txt#paddle-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API access token (Classic)

You can use these credentials to authenticate the following nodes:

- [Paddle](../../app-nodes/n8n-nodes-base.paddle/)

Create a [Paddle](https://paddle.com/) account.

## Supported authentication methods

- API access token (Classic)

This credential works with Paddle Classic's API. If you joined Paddle after August 2023, you're using the [Paddle Billing API](https://developer.paddle.com/api-reference/overview) and this credential may not work for you.

Refer to [Paddle Classic's API documentation](https://developer.paddle.com/classic/api-reference/1384a288aca7a-api-reference) for more information about the service.

## Using API access token (Classic)

To configure this credential, you'll need:

- A **Vendor Auth Code**: Created when you generate an API key.
- A **Vendor ID**: Displayed when you generate an API key.
- **Use Sandbox Environment API**: When turned on, nodes using this credential will hit the Sandbox API endpoint instead of the live API endpoint.

To generate an auth code and view your Vendor ID, go to **Paddle > Developer Tools > Authentication > Generate Auth Code**. Select **Reveal Auth Code** to display the Auth Code. Refer to [API Authentication](https://developer.paddle.com/api-reference/about/authentication) for more information.

---

## Task runners

**URL:** llms-txt#task-runners

**Contents:**
- How it works
- Task runner modes
  - Internal mode
  - External mode
- Setting up external mode
  - Configuring n8n container in external mode
  - Configuring runners container in external mode
  - Configuring launcher in runners container in external mode
- Adding extra dependencies
  - 1) JavaScript packages

Task runners are a generic mechanism to execute tasks in a secure and performant way. They're used to execute user-provided JavaScript and Python code in the [Code node](../../../integrations/builtin/core-nodes/n8n-nodes-base.code/).

Task runner support for native Python and the `n8nio/runners` image are in beta. Until this feature is stable, you must use the `N8N_NATIVE_PYTHON_RUNNER=true` environment variable to enable the Python runner.

This document describes how task runners work and how you can configure them.

The task runner feature consists of these components: one or more task runners, a task broker, and a task requester.

Task runners connect to the task broker using a websocket connection. A task requester submits a task request to the broker where an available task runner can pick it up for execution.

The runner executes the task and submits the results to the task requester. The task broker coordinates communication between the runner and the requester.

The n8n instance (main and worker) acts as the broker. The Code node in this case is the task requester.

You can use task runners in two different modes: internal and external.

In internal mode, the n8n instance launches the task runner as a child process. The n8n process monitors and manages the life cycle of the task runner. The task runner process shares the same `uid` and `gid` as n8n. This is **not** recommended for production.

In external mode, a [launcher application](https://github.com/n8n-io/task-runner-launcher) launches task runners on demand and manages their lifecycle. Typically, this means that next to n8n you add a sidecar container running the [`n8nio/runners`](https://hub.docker.com/r/n8nio/runners) image containing the launcher, the JS task runner and the Python task runner. This sidecar container is independent from the n8n instance.

When using [Queue mode](../../scaling/queue-mode/), each worker needs to have its own sidecar container for task runners.

In addition, if you haven't enabled offloading manual executions to workers (if you aren't setting `OFFLOAD_MANUAL_EXECUTIONS_TO_WORKERS=true` in your configuration), then your main instance will run manual executions and needs its own sidecar container for task runners as well. Please note that running n8n with offloading disabled isn't recommended for production.

## Setting up external mode

In external mode, you run the `n8nio/runners` image as a sidecar container next to n8n. Below you will find a docker compose as a reference. Keep in mind that the `n8nio/runners` image version must match that of the `n8nio/n8n` image, and the n8n version must be >=1.111.0.

### Configuring n8n container in external mode

These are the main environment variables that you can set on the n8n container running in external mode:

| Environment variables                                  | Description                                                                                                                                                                   |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `N8N_RUNNERS_ENABLED=true`                             | Enables task runners.                                                                                                                                                         |
| `N8N_RUNNERS_MODE=external`                            | Use task runners in external mode.                                                                                                                                            |
| `N8N_RUNNERS_AUTH_TOKEN=<random secure shared secret>` | A shared secret task runners use to connect to the broker.                                                                                                                    |
| `N8N_RUNNERS_BROKER_LISTEN_ADDRESS=0.0.0.0`            | By default, the task broker only listens to localhost. When using multiple containers (for example, with Docker Compose), it needs to be able to accept external connections. |

For full list of environment variables see [task runner environment variables](../environment-variables/task-runners/).

### Configuring runners container in external mode

These are the main environment variables that you can set on the runners container running in external mode:

| Environment variables                                  | Description                                                                                                                                                                                                                 |
| ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `N8N_RUNNERS_AUTH_TOKEN=<random secure shared secret>` | The shared secret the task runner uses to connect to the broker.                                                                                                                                                            |
| `N8N_RUNNERS_TASK_BROKER_URI=localhost:5679`           | The address of the task broker server within the n8n instance.                                                                                                                                                              |
| `N8N_RUNNERS_AUTO_SHUTDOWN_TIMEOUT=15`                 | Number of seconds of inactivity to wait before shutting down the task runner process. The launcher will automatically start the runner again when there are new tasks to execute. Set to `0` to disable automatic shutdown. |

For full list of environment variables see [task runner environment variables](../environment-variables/task-runners/).

### Configuring launcher in runners container in external mode

The launcher will read environment variables from runners container environment, and will pass them along to each runner as defined in the [default launcher configuration file](https://github.com/n8n-io/n8n/blob/master/docker/images/runners/n8n-task-runners.json), located in the container at `/etc/task-runners.json`. The default launcher configuration file is locked down, but you will likely want to edit this file, for example, to allowlist first- or third-party modules. To customize the launcher configuration file, mount to this path:

For further information about the launcher config file, see [here](https://github.com/n8n-io/task-runner-launcher/blob/main/docs/setup.md#config-file).

## Adding extra dependencies

You can customize the `n8nio/runners` image. To do so, you will find the runners Dockerfile at [this directory](https://github.com/n8n-io/n8n/tree/master/docker/images/runners) in the n8n repository. The manifests referred to below are also found in this directory.

To make additional packages available on the Code node, you can bake extra packages into your custom runners image at build time:

- JavaScript: edit `docker/images/runners/package.json` (package.json manifest used to install runtime-only deps into the JS runner)
- Python (Native): edit `docker/images/runners/extras.txt` (requirements.txt-style list installed into the Python runner venv)

> Important: for security, any external libraries must be explicitly allowed for Code node use. Update `n8n-task-runners.json` to allowlist what you add.

### 1) JavaScript packages

Edit the runtime extras manifest `docker/images/runners/package.json`:

Add any packages you want under `"dependencies"` (pin them for reproducibility), e.g.:

### 2) Python packages

Edit the requirements file `docker/images/runners/extras.txt`:

**Examples:**

Example 1 (unknown):
```unknown
services:
  n8n:
    image: n8nio/n8n:1.111.0
    container_name: n8n-main
    environment:
      - N8N_RUNNERS_ENABLED=true
      - N8N_RUNNERS_MODE=external
      - N8N_RUNNERS_BROKER_LISTEN_ADDRESS=0.0.0.0
      - N8N_RUNNERS_AUTH_TOKEN=your-secret-here
      - N8N_NATIVE_PYTHON_RUNNER=true
    ports:
      - "5678:5678"
    volumes:
      - n8n_data:/home/node/.n8n
    # etc.

  task-runners:
    image: n8nio/runners:1.111.0
    container_name: n8n-runners
    environment:
      - N8N_RUNNERS_TASK_BROKER_URI=http://n8n-main:5679
      - N8N_RUNNERS_AUTH_TOKEN=your-secret-here
      # etc.
    depends_on:
      - n8n

volumes:
  n8n_data:
```

Example 2 (unknown):
```unknown
path/to/n8n-task-runners.json:/etc/n8n-task-runners.json
```

Example 3 (unknown):
```unknown
{
  "name": "task-runner-runtime-extras",
  "description": "Runtime-only deps for the JS task-runner image, installed at image build.",
  "private": true,
  "dependencies": {
    "moment": "2.30.1"
  }
}
```

Example 4 (unknown):
```unknown
"dependencies": {
  "moment": "2.30.1",
  "uuid": "9.0.0"
}
```

---

## Google credentials

**URL:** llms-txt#google-credentials

**Contents:**
- OAuth2 and Service Account
- Compatible nodes

This section contains:

- [OAuth2 single service](oauth-single-service/): Create an OAuth2 credential for a specific service node, such as the Gmail node.
- [OAuth2 generic](oauth-generic/): Create an OAuth2 credential for use with [custom operations](../../../custom-operations/).
- [Service Account](service-account/): Create a [Service Account](https://cloud.google.com/iam/docs/service-account-overview) credential for some specific service nodes.
- [Google PaLM and Gemini](../googleai/): Get a Google Gemini/Google PaLM API key.

## OAuth2 and Service Account

There are two authentication methods available for Google services nodes:

- [OAuth2](https://developers.google.com/identity/protocols/oauth2): Recommended because it's more widely available and easier to set up.
- [Service Account](https://cloud.google.com/iam/docs/understanding-service-accounts): Refer to the [Google documentation: Understanding service accounts](https://cloud.google.com/iam/docs/understanding-service-accounts) for guidance on when you need a service account.

Note for n8n Cloud users

For the following nodes, you can authenticate by selecting **Sign in with Google** in the OAuth section:

- [Google Calendar](../../app-nodes/n8n-nodes-base.googlecalendar/)
- [Google Contacts](../../app-nodes/n8n-nodes-base.googlecontacts/)
- [Google Drive](../../app-nodes/n8n-nodes-base.googledrive/)
- [Google Mail](../../app-nodes/n8n-nodes-base.gmail/)
- [Google Sheets](../../app-nodes/n8n-nodes-base.googlesheets/)
- [Google Sheets Trigger](../../trigger-nodes/n8n-nodes-base.googlesheetstrigger/)
- [Google Tasks](../../app-nodes/n8n-nodes-base.googletasks/)

Once configured, you can use your credentials to authenticate the following nodes. Most nodes are compatible with OAuth2 authentication. Support for Service Account authentication is limited.

| Node                                                                                          | OAuth | Service Account |
| --------------------------------------------------------------------------------------------- | ----- | --------------- |
| [Google Ads](../../app-nodes/n8n-nodes-base.googleads/)                                       |       |                 |
| [Gmail](../../app-nodes/n8n-nodes-base.gmail/)                                                |       |                 |
| [Google Analytics](../../app-nodes/n8n-nodes-base.googleanalytics/)                           |       |                 |
| [Google BigQuery](../../app-nodes/n8n-nodes-base.googlebigquery/)                             |       |                 |
| [Google Books](../../app-nodes/n8n-nodes-base.googlebooks/)                                   |       |                 |
| [Google Calendar](../../app-nodes/n8n-nodes-base.googlecalendar/)                             |       |                 |
| [Google Chat](../../app-nodes/n8n-nodes-base.googlechat/)                                     |       |                 |
| [Google Cloud Storage](../../app-nodes/n8n-nodes-base.googlecloudstorage/)                    |       |                 |
| [Google Contacts](../../app-nodes/n8n-nodes-base.googlecontacts/)                             |       |                 |
| [Google Cloud Firestore](../../app-nodes/n8n-nodes-base.googlecloudfirestore/)                |       |                 |
| [Google Cloud Natural Language](../../app-nodes/n8n-nodes-base.googlecloudnaturallanguage/)   |       |                 |
| [Google Cloud Realtime Database](../../app-nodes/n8n-nodes-base.googlecloudrealtimedatabase/) |       |                 |
| [Google Docs](../../app-nodes/n8n-nodes-base.googledocs/)                                     |       |                 |
| [Google Drive](../../app-nodes/n8n-nodes-base.googledrive/)                                   |       |                 |
| [Google Drive Trigger](../../trigger-nodes/n8n-nodes-base.googledrivetrigger/)                |       |                 |
| [Google Perspective](../../app-nodes/n8n-nodes-base.googleperspective/)                       |       |                 |
| [Google Sheets](../../app-nodes/n8n-nodes-base.googlesheets/)                                 |       |                 |
| [Google Slides](../../app-nodes/n8n-nodes-base.googleslides/)                                 |       |                 |
| [Google Tasks](../../app-nodes/n8n-nodes-base.googletasks/)                                   |       |                 |
| [Google Translate](../../app-nodes/n8n-nodes-base.googletranslate/)                           |       |                 |
| [Google Workspace Admin](../../app-nodes/n8n-nodes-base.gsuiteadmin/)                         |       |                 |
| [YouTube](../../app-nodes/n8n-nodes-base.youtube/)                                            |       |                 |

Gmail and Service Accounts

Google technically supports Service Accounts for use with Gmail, but it requires enabling domain-wide delegation, which Google discourages, and its behavior can be inconsistent.

n8n recommends using OAuth2 with the Gmail node.

---

## Plivo credentials

**URL:** llms-txt#plivo-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using basic auth

You can use these credentials to authenticate the following nodes:

- [Plivo](../../app-nodes/n8n-nodes-base.plivo/)

Create a [Plivo](https://www.plivo.com/) account.

## Supported authentication methods

Refer to [Plivo's API documentation](https://www.plivo.com/docs/voice/api/overview/) for more information about the service.

To configure this credential, you'll need:

- An **Auth ID**: Acts like your username. Copy yours from the **Overview** page of the Plivo [console](https://console.plivo.com/dashboard/).
- An **Auth Token**: Acts like a password. Copy yours from the **Overview** page of the Plivo [console](https://console.plivo.com/dashboard/).

Refer to [How can I change my Auth ID or Auth Token?](https://support.plivo.com/hc/en-us/articles/360041731231-How-can-I-change-my-Auth-ID-or-Auth-Token) for more detailed instructions.

---

## HaloPSA credentials

**URL:** llms-txt#halopsa-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [HaloPSA](../../app-nodes/n8n-nodes-base.halopsa/)

Create a [HaloPSA](https://halopsa.com/) account.

## Supported authentication methods

Refer to [HaloPSA's API documentation](https://usehalo.com/halopsa/guides/1823/) for more information about the service.

To configure this credential, you'll need:

- To select your **Hosting Type**:
  - **On Premise Solution**: Choose this option if you're hosting the Halo application on your own server
  - **Hosted Solution Of Halo**: Choose this option if your application is hosted by Halo. If this option is selected, you'll need to provide your **Tenant**.
- The **HaloPSA Authorisation Server URL**: Your Authorisation Server URL is displayed within HaloPSA in **Configuration > Integrations > Halo API** in [API Details](https://halopsa.com/guides/article/?kbid=1737).
- The **Resource Server** URL: Your Resource Server is displayed within HaloPSA in **Configuration > Integrations > Halo API** in [API Details](https://halopsa.com/guides/article/?kbid=1737).
- A **Client ID**: Obtained by registering the application in the Halo API settings. Refer to [HaloPSA's Authorisation documentation](https://usehalo.com/halopsa/guides/1823/) for detailed instructions. n8n recommends using these settings:
  - Choose `Client Credentials` as your **Authentication Method**.
  - Use the `all` permission.
- A **Client Secret**: Obtained by registering the application in the Halo API settings.
- Your **Tenant** name: If **Hosted Solution of Halo** is selected as the **Hosting Type**, you must provide your tenant name. Your tenant name is displayed within HaloPSA in **Configuration > Integrations > Halo API** in [API Details](https://halopsa.com/guides/article/?kbid=1737).

HaloPSA uses both the application permissions and the agent's permissions to determine API access.

---

## Twist credentials

**URL:** llms-txt#twist-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using OAuth2
  - Local environment redirect URL

You can use these credentials to authenticate the following nodes:

- [Twist](../../app-nodes/n8n-nodes-base.twist/)

- Create a [Twist](https://twist.com/) account.
- [Create a general integration](https://twist.com/app_console/create_app) and configure a valid OAuth Redirect URL. Refer to [Using OAuth2](#using-oauth2) for more information.

## Supported authentication methods

Refer to [Twist's API documentation](https://developer.twist.com/v3/#authorization) for more information about authenticating with the service.

To configure this credential, you'll need:

- A **Client ID**: Generated once you create a general integration.
- A **Client Secret**: Generated once you create a general integration.

To generate your Client ID and Client Secret, [create a general integration](https://twist.com/app_console/create_app).

Use these settings for your integration's **OAuth Authentication**:

- Copy the **OAuth Redirect URL** from n8n and enter it as the **OAuth 2 redirect URL** in Twist.

OAuth Redirect URL for self-hosted n8n

Twist doesn't accept a `localhost` Redirect URL. The Redirect URL should be a URL in your domain, for example: `https://mytemplatemaker.example.com/gr_callback`. If your n8n **OAuth Redirect URL** contains localhost, refer below to [Local environment redirect URL](#local-environment-redirect-url) for generating a URL that Twist will allow.

- Select **Update OAuth settings** to save those changes.

- Copy the **Client ID** and **Client Secret** from Twist and enter them in the appropriate fields in n8n.

### Local environment redirect URL

Twist doesn't accept a localhost callback URL. These steps should allow you to configure the OAuth credentials for the local environment:

1. Use [ngrok](https://ngrok.com/) to expose the local server running on port `5678` to the internet. In your terminal, run the following command:

1. Run the following command in a new terminal. Replace `<YOUR-NGROK-URL>` with the URL that you get from the previous step.

1. Use the generated URL as your **OAuth 2 redirect URL** in Twist.

**Examples:**

Example 1 (unknown):
```unknown
ngrok http 5678
```

Example 2 (unknown):
```unknown
export WEBHOOK_URL=<YOUR-NGROK-URL>
```

---

## NocoDB credentials

**URL:** llms-txt#nocodb-credentials

**Contents:**
- Supported authentication methods
- Related resources
- Using API token
- Using user auth token

You can use these credentials to authenticate the following nodes:

- [NocoDB](../../app-nodes/n8n-nodes-base.nocodb/)

## Supported authentication methods

- API token (recommended)

User auth token deprecation

NocoDB deprecated user auth tokens in v0.205.1. Use [API tokens](#using-api-token) instead.

Refer to [NocoDB's API documentation](https://data-apis-v2.nocodb.com/) for more information about the service.

To configure this credential, you'll need a [NocoDB](https://www.nocodb.com/) instance and:

- An **API Token**
- Your database **Host**

To generate an API token:

1. Log into NocoDB and select the **User menu** in the bottom left sidebar.
1. Select **Account Settings**.
1. Open the **Tokens** tab.
1. Select **Add new API token**.
1. Enter a **Name** for your token, like `n8n integration`.
1. Select **Save**.
1. Copy the **API Token** and enter it in your n8n credential.
1. Enter the **Host** of your NocoDB instance in your n8n credential, for example `http://localhost:8080`.

Refer to the NocoDB [API Tokens documentation](https://docs.nocodb.com/account-settings/api-tokens/) for more detailed instructions.

## Using user auth token

Before NocoDB deprecated it, user auth token was a temporary token designed for quick experiments with the API, valid for a session until the user logs out or for 10 hours.

User auth token deprecation

NocoDB deprecated user auth tokens in v0.205.1. Use [API tokens](#using-api-token) instead.

To configure this credential, you'll need a [NocoDB](https://www.nocodb.com/) instance and:

- A **User Token**
- Your database **Host**

To generate a user auth token:

1. Log into NocoDB and select the **User menu** in the bottom left sidebar.
1. Select **Copy Auth token**.
1. Enter that auth token as the **User Token** in n8n.
1. Enter the **Host** of your NocoDB instance, for example `http://localhost:8080`.

Refer to the NocoDB [Auth Tokens documentation](https://docs.nocodb.com/account-settings/api-tokens/#auth-tokens) for more information.

---

## Salesmate credentials

**URL:** llms-txt#salesmate-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API token

You can use these credentials to authenticate the following nodes:

- [Salesmate](../../app-nodes/n8n-nodes-base.salesmate/)

Create a [Salesmate](https://salesmate.io/) account.

## Supported authentication methods

Refer to [Salesmate's API documentation](https://apidocs.salesmate.io/?version=latest) for more information about the service.

To configure this credential, you'll need:

- A **Session Token**: An **Access Key**. Generate an access key in **My Account > Access Key**. Refer to [Access Rights and Keys](https://apidocs.salesmate.io/?version=latest#ac8296ec-cb44-4937-a860-5ae032397ca0) for more information.
- A **URL**: Your Salesmate domain name/base URL, for example `n8n.salesmate.io`.

---

## Yahoo Send Email credentials

**URL:** llms-txt#yahoo-send-email-credentials

**Contents:**
- Prerequisites
- Set up the credential

Follow these steps to configure the Send Email credentials with a Yahoo account.

To follow these instructions, you must first generate an app password:

1. Log in to your Yahoo account [Security page](https://login.yahoo.com/account/security).
1. Select **Generate app password** or **Generate and manage app passwords**.
1. Select **Get Started**.
1. Enter an **App name** for your new app password, like `n8n credential`.
1. Select **Generate password**.
1. Copy the generated app password. You'll use this in your n8n credential.

Refer to Yahoo's [Generate and manage 3rd-party app passwords](https://help.yahoo.com/kb/generate-manage-third-party-passwords-sln15241.html) for more information.

## Set up the credential

To configure the Send Email credential to use Yahoo Mail:

1. Enter your Yahoo email address as the **User**.
1. Enter the app password you generated above as the **Password**.
1. Enter `smtp.mail.yahoo.com` as the **Host**.
1. For the **Port**:
   - Keep the default `465` for SSL or if you're unsure what to use.
   - Enter `587` for TLS.
1. Turn on the **SSL/TLS** toggle.

Refer to [IMAP server settings for Yahoo Mail](https://help.yahoo.com/kb/sln4075.html) for more information. If the settings above don't work for you, check with your email administrator.

---

## Venafi TLS Protect Datacenter credentials

**URL:** llms-txt#venafi-tls-protect-datacenter-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API integration

You can use these credentials to authenticate the following nodes:

- [Venafi TLS Protect Datacenter node](../../app-nodes/n8n-nodes-base.venafitlsprotectdatacenter/)

- Create a Venafi [TLS Protect Datacenter](https://venafi.com/) account.
- Set the expiration and refresh time for tokens. Refer to [Setting up token authentication](https://docs.venafi.com/Docs/current/TopNav/Content/SDK/AuthSDK/t-SDKa-Setup-OAuth.php) for more information.
- Create an [API integration](https://docs.venafi.com/Docs/current/TopNav/Content/API-ApplicationIntegration/c-APIAppIntegrations-about.php) in **API > Integrations**. Refer to [Integrating other systems with Venafi products](https://docs.venafi.com/Docs/current/TopNav/Content/API-ApplicationIntegration/t-APIAppIntegrations-creating.php) for detailed instructions.
  - Take note of the Client ID for your integration.
  - Choose the scopes needed for the operations you want to perform within n8n. Refer to the scopes table in [Integrating other systems with Venafi products](https://docs.venafi.com/Docs/current/TopNav/Content/API-ApplicationIntegration/t-APIAppIntegrations-creating.php) for more details on available scopes.

## Supported authentication methods

Refer to [Venafi's API integration documentation](https://docs.venafi.com/Docs/currentSDK/TopNav/Content/SDK/WebSDK/c-sdk-AboutThisGuide.php) for more information about the service.

## Using API integration

To configure this credential, you'll need:

- A **Domain**: Enter your Venafi TLS Protect Datacenter domain.
- A **Client ID**: Enter the **Client ID** from your API integration. Refer to the information and links in [Prerequisites](#prerequisites) for more information on creating an API integration.
- A **Username**: Enter your username.
- A **Password**: Enter your password.
- **Allow Self-Signed Certificates**: If turned on, the credential will allow self-signed certificates.

---

## Bannerbear credentials

**URL:** llms-txt#bannerbear-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key

You can use these credentials to authenticate the following nodes:

- [Bannerbear](../../app-nodes/n8n-nodes-base.bannerbear/)

Create a [Bannerbear](https://www.BannerBear.com/) account.

## Supported authentication methods

Refer to [Bannerbear's API documentation](https://developers.bannerbear.com/) for more information about the service.

To configure this credential, you'll need:

- A **Project API Key**: To generate an API key, first create a Bannerbear project. Go to **Settings > API Key** to view the API key. Refer to the [Bannerbear API Authentication documentation](https://developers.bannerbear.com/#authentication) for more detailed steps.

---

## Contentful credentials

**URL:** llms-txt#contentful-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API access token

You can use these credentials to authenticate the following nodes:

- [Contentful](../../app-nodes/n8n-nodes-base.contentful/)

- Create a [Contentful](https://www.contentful.com/) account.
- Create a [Contentful space](https://www.contentful.com/help/getting-started/contentful-101/#step-2-create-a-space).

## Supported authentication methods

Refer to [Contentful's API documentation](https://www.contentful.com/developers/docs/references/) for more information about the service.

## Using API access token

To configure this credential, you'll need:

- Your Contentful **Space ID**: The Space ID displays as you generate the tokens; You can also refer to the [Contentful Find space ID documentation](https://www.contentful.com/help/spaces/find-space-id/) to view the Space ID.
- A **Content Delivery API Access Token**: Required if you want to use the [Content Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/). Leave blank if you don't intend to use this API.
- A **Content Preview API Access Token**: Required if you want to use the [Content Preview API](https://www.contentful.com/developers/docs/references/content-preview-api/). Leave blank if you don't intend to use this API.

View and generate access tokens in Contentful in **Settings > API keys**. Contentful generates tokens for both Content Delivery API and Content Preview API as part of a single key. Refer to the [Contentful API authentication documentation](https://www.contentful.com/developers/docs/references/authentication/) for detailed instructions.

---

## UptimeRobot credentials

**URL:** llms-txt#uptimerobot-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using API key
  - API key types

You can use these credentials to authenticate the following nodes:

- [UptimeRobot](../../app-nodes/n8n-nodes-base.uptimerobot/)

Create an [UptimeRobot](https://uptimerobot.com/) account.

## Supported authentication methods

Refer to [UptimeRobot's API documentation](https://uptimerobot.com/api/) for more information about the service.

To configure this credential, you'll need:

- An **API Key**: Get your API Key from **My Settings > API Settings**. Create a **Main API Key** and enter this key in your n8n credential.

UptimeRobot supports three API key types:

- **Account-specific** (also known as **main**): Pulls data for multiple monitors.
- **Monitor-specific**: Pulls data for a single monitor.
- **Read-only**: Only runs `GET` API calls.

To complete all of the operations in the UptimeRobot node, use the **Main** or **Account-specific** API key type. Refer to [API authentication](https://uptimerobot.com/api/#auth) for more information.

---

## Weaviate credentials

**URL:** llms-txt#weaviate-credentials

**Contents:**
- Supported authentication methods
- Related resources
- Using API key
  - Connection type: Weaviate Cloud
  - Connection type: Custom Connection

You can use these credentials to authenticate the following nodes:

- [Weaviate Vector Store](../../cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreweaviate/)

## Supported authentication methods

Refer to [Weaviate's connection documentation](https://docs.weaviate.io/weaviate/connections)for more information on how to connect to Weaviate.

View n8n's [Advanced AI](../../../../advanced-ai/) documentation.

### Connection type: Weaviate Cloud

Create your [Weaviate Cloud Database](https://docs.weaviate.io/cloud/quickstart) and [follow these instructions get the following parameter values](https://docs.weaviate.io/cloud/quickstart#13-connect-to-your-weaviate-cloud-instance) from your Weaviate Cloud Database:

- **Weaviate Cloud Endpoint**
- **Weaviate Api Key**

Note: Weaviate provides a free sandbox option for testing.

### Connection type: Custom Connection

For this Connection Type, you need to [deploy Weaviate](https://docs.weaviate.io/deploy) on your own server, configured so n8n can access it. Refer to [Weaviate's authentication documentation](https://docs.weaviate.io/deploy/configuration/authentication#api-key-authentication) for information on creating and using API keys.

You can then provide the arguments for your custom connection:

- **Weaviate Api Key**: Your Weaviate API key.
- **Custom Connection HTTP Host**: The domain name or IP address of your Weaviate instance to use for HTTP API calls.
- **Custom Connection HTTP Port**: The port your Weaviate instance is running on for HTTP API calls. By default, this is 8080.
- **Custom Connection HTTP Secure**: Whether to connect to the Weaviate through HTTPS for HTTP API calls.
- **Custom Connection gRPC Host**: The hostname or IP address of your Weaviate instance to use for gRPC.
- **Custom Connection gRPC Port**: The gRPC API port for your Weaviate instance. By default, this is 50051.
- **Custom Connection gRPC Secure**: Whether to connect to the Weaviate through HTTPS for gRPC.

For community support, refer to [Weaviate Forums](https://forum.weaviate.io/).

---

## Xero credentials

**URL:** llms-txt#xero-credentials

**Contents:**
- Prerequisites
- Supported authentication methods
- Related resources
- Using OAuth2

You can use these credentials to authenticate the following nodes:

- [Xero](../../app-nodes/n8n-nodes-base.xero/)

Create a [Xero](https://www.xero.com/) account.

## Supported authentication methods

Refer to [Zero's API documentation](https://developer.xero.com/documentation/api/accounting/overview) for more information about the service.

To configure this credential, you'll need:

- A **Client ID**: Generated when you create a new app for a custom connection.
- A **Client Secret**: Generated when you create a new app for a custom connection.

To generate your Client ID and Client Secret, [create an OAuth2 custom connection app](https://developer.xero.com/documentation/guides/oauth2/custom-connections/) in your Xero developer portal [**My Apps**](https://developer.xero.com/app/manage).

Use these settings for your app:

Xero doesn't support app instances within the Xero Developer Centre that contain `n8n` in their name.

- Select **Web app** as the **Integration Type**.
- For the **Company or Application URL**, enter the URL of your n8n server or reverse proxy address. For cloud users, for example, this is: `https://your-username.app.n8n.cloud/`.
- Copy the **OAuth Redirect URL** from n8n and add it as an **OAuth 2.0 redirect URI** in your app.
- Select appropriate **scopes** for your app. Refer to [OAuth2 Scopes](https://developer.xero.com/documentation/guides/oauth2/scopes/) for more information.
  - To use all functionality in the [Xero](../../app-nodes/n8n-nodes-base.xero/) node, add the `accounting.contacts` and `accounting.transactions` scopes.

Refer to Xero's [OAuth Custom Connections](https://developer.xero.com/documentation/guides/oauth2/custom-connections) documentation for more information.

---
