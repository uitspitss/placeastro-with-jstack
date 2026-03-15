# Gitlab - Api

**Pages:** 4

---

## OAuth 2.0 identity provider API

**URL:** https://docs.gitlab.com/api/oauth2/

**Contents:**
- OAuth 2.0 identity provider API
- Cross-origin resource sharing
- Supported OAuth 2.0 flows
  - Prevent CSRF attacks
  - Use HTTPS in production
  - Authorization code with Proof Key for Code Exchange (PKCE)
  - Authorization code flow
  - Device authorization grant flow
  - Resource owner password credentials flow
- Access GitLab API with access token

Use this API to allow third-party services to access GitLab resources for a user with the OAuth 2.0 protocol. For more information, see Configure GitLab as an OAuth 2.0 authentication identity provider.

This functionality is based on the doorkeeper Ruby gem.

Many /oauth endpoints support cross-origin resource sharing (CORS). From GitLab 15.1, the following endpoints also support CORS preflight requests:

Only certain headers can be used for preflight requests:

For example, the X-Requested-With header can’t be used for preflight requests.

GitLab supports the following authorization flows:

The draft specification for OAuth 2.1 specifically omits both the Implicit grant and Resource Owner Password Credentials flows.

Refer to the OAuth RFC to find out how all those flows work and pick the right one for your use case.

Authorization code (with or without PKCE) flow requires application to be registered first via the /user_settings/applications page in your user’s account. During registration, by enabling proper scopes, you can limit the range of resources which the application can access. Upon creation, you obtain the application credentials: Application ID and Client Secret. The Client Secret must be kept secure. It is also advantageous to keep the Application ID secret when your application architecture allows.

For a list of scopes in GitLab, see the provider documentation.

To protect redirect-based flows, the OAuth specification recommends the use of “One-time use CSRF tokens carried in the state parameter, which are securely bound to the user agent”, with each request to the /oauth/authorize endpoint. This can prevent CSRF attacks.

For production, use HTTPS for your redirect_uri. For development, GitLab allows insecure HTTP redirect URIs.

As OAuth 2.0 bases its security entirely on the transport layer, you should not use unprotected URIs. For more information, see the OAuth 2.0 RFC and the OAuth 2.0 Threat Model RFC.

In the following sections you can find detailed instructions on how to obtain authorization with each flow.

The PKCE RFC includes a detailed flow description, from authorization request through access token. The following steps describe our implementation of the flow.

The Authorization code with PKCE flow, PKCE for short, makes it possible to securely perform the OAuth exchange of client credentials for access tokens on public clients without requiring access to the Client Secret at all. This makes the PKCE flow advantageous for single page JavaScript applications or other client side apps where keeping secrets from the user is a technical impossibility.

Before starting the flow, generate the STATE, the CODE_VERIFIER and the CODE_CHALLENGE.

Request authorization code. To do that, you should redirect the user to the /oauth/authorize page with the following query parameters:

This page asks the user to approve the request from the app to access their account based on the scopes specified in REQUESTED_SCOPES. The user is then redirected back to the specified REDIRECT_URI. The scope parameter is a space-separated list of scopes associated with the user. For example,scope=read_user+profile requests the read_user and profile scopes. The root_namespace_id is the root namespace ID associated with the project. This optional parameter should be used when SAML SSO is configured for the associated group. The redirect includes the authorization code, for example:

With the authorization code returned from the previous request (denoted as RETURNED_CODE in the following example), you can request an access_token, with any HTTP client. The following example uses Ruby’s rest-client:

To retrieve a new access_token, use the refresh_token parameter. Refresh tokens may be used even after the access_token itself expires. This request:

The redirect_uri must match the redirect_uri used in the original authorization request.

You can now make requests to the API with the access token.

Check the RFC spec for a detailed flow description.

The authorization code flow is essentially the same as authorization code flow with PKCE,

Before starting the flow, generate the STATE. It is a value that can’t be predicted used by the client to maintain state between the request and callback. It should also be used as a CSRF token.

Request authorization code. To do that, you should redirect the user to the /oauth/authorize page with the following query parameters:

This page asks the user to approve the request from the app to access their account based on the scopes specified in REQUESTED_SCOPES. The user is then redirected back to the specified REDIRECT_URI. The scope parameter is a space-separated list of scopes associated with the user. For example,scope=read_user+profile requests the read_user and profile scopes. The root_namespace_id is the root namespace ID associated with the project. This optional parameter should be used when SAML SSO is configured for the associated group. The redirect includes the authorization code, for example:

With the authorization code returned from the previous request (shown as RETURNED_CODE in the following example), you can request an access_token, with any HTTP client. The following example uses Ruby’s rest-client:

To retrieve a new access_token, use the refresh_token parameter. Refresh tokens may be used even after the access_token itself expires. This request:

The redirect_uri must match the redirect_uri used in the original authorization request.

You can now make requests to the API with the access token returned.

Check the RFC spec for a detailed description of the device authorization grant flow, from device authorization request to token response from the browser login.

The device authorization grant flow makes it possible to securely authenticate your GitLab identity from input constrained devices where browser interactions are not an option.

This makes the device authorization grant flow ideal for users attempting to use GitLab services from headless servers or other devices with no, or limited, UI.

To request device authorization, a request is sent from the input-limited device client to https://gitlab.example.com/oauth/authorize_device. For example:

After a successful request, a response containing a verification_uri is returned to the user. For example:

The device client displays the user_code and verification_uri from the response to the requesting user. That user then, on a secondary device with browser access:

Immediately after displaying the verification_uri and user_code, the device client begins polling the token endpoint with the associated device_code returned in the initial response:

The device client receives a response from the token endpoint. If the authorization was successful, a success response is returned, otherwise, an error response is returned. Potential error responses are categorized by either of the following:

On receipt of this response, the device client continues polling.

If the polling interval is too short, a slow down error response is returned. For example:

On receipt of this response, the device client reduces its polling rate and continues polling at the new rate.

If the device code expires before authentication is complete, an expired token error response is returned. For example:

At that point, the device-client should stop and initiate a new device authorization request.

If the authorization request was denied, an access denied error response is returned. For example:

The authentication request has been rejected. The user should verify their credentials or contact their system administrator

After the user successfully authenticates, a success response is returned:

At this point, the device authentication flow is complete. The returned access_token can be provided to GitLab to authenticate the user identity when accessing GitLab resources, such as when cloning over HTTPS or accessing the API.

A sample application that implements the client side device flow can be found at: https://gitlab.com/johnwparent/git-auth-over-https.

Check the RFC spec for a detailed flow description.

Resource owner password credentials are disabled for users with two-factor authentication turned on and enterprise users with password authentication disabled for their group. These users can access the API using personal access tokens instead.

Ensure the Allow password authentication for Git over HTTP(S) checkbox is selected for the GitLab instance to support the password credentials flow.

In this flow, a token is requested in exchange for the resource owner credentials (username and password).

The credentials should only be used when:

Never store the user’s credentials and only use this grant type when your client is deployed to a trusted environment, in 99% of cases personal access tokens are a better choice.

Even though this grant type requires direct client access to the resource owner credentials, the resource owner credentials are used for a single request and are exchanged for an access token. This grant type can eliminate the need for the client to store the resource owner credentials for future use, by exchanging the credentials with a long-lived access token or refresh token.

To request an access token, you must make a POST request to /oauth/token with the following parameters:

Example cURL request:

You can also use this grant flow with registered OAuth applications, by using HTTP Basic Authentication with the application’s client_id and client_secret:

Then, you receive a response containing the access token:

By default, the scope of the access token is api, which provides complete read/write access.

For testing, you can use the oauth2 Ruby gem:

The access token allows you to make requests to the API on behalf of a user. You can pass the token either as GET parameter:

or you can put the token to the Authorization header:

A token with scope read_repository or write_repository can access Git over HTTPS. Use the token as the password. You can set the username to any string value. You should use oauth2:

Alternatively, you can use a Git credential helper to authenticate to GitLab with OAuth. This handles OAuth token refresh automatically.

To verify the details of a token, use the token/info endpoint provided by the Doorkeeper gem. For more information, see /oauth/token/info.

You must supply the access token, either:

In the Authorization header:

The following is an example response:

The fields scopes and expires_in_seconds are included in the response but are now deprecated. The scopes field is an alias for scope, and the expires_in_seconds field is an alias for expires_in. For more information, see Doorkeeper API changes.

To revoke a token, use the revoke endpoint. The API returns a 200 response code and an empty JSON hash to indicate success.

Standard OAuth 2.0 tokens support different degrees of access to GitLab registries, as they:

**Examples:**

Example 1 (unknown):
```unknown
https://gitlab.example.com/oauth/authorize?client_id=APP_ID&redirect_uri=REDIRECT_URI&response_type=code&state=STATE&scope=REQUESTED_SCOPES&code_challenge=CODE_CHALLENGE&code_challenge_method=S256&root_namespace_id=ROOT_NAMESPACE_ID
```

Example 2 (unknown):
```unknown
https://example.com/oauth/redirect?code=1234567890&state=STATE
```

Example 3 (unknown):
```unknown
parameters = 'client_id=APP_ID&code=RETURNED_CODE&grant_type=authorization_code&redirect_uri=REDIRECT_URI&code_verifier=CODE_VERIFIER'
RestClient.post 'https://gitlab.example.com/oauth/token', parameters
```

Example 4 (unknown):
```unknown
{
 "access_token": "de6780bc506a0446309bd9362820ba8aed28aa506c71eedbe1c5c4f9dd350e54",
 "token_type": "bearer",
 "expires_in": 7200,
 "refresh_token": "8257e65c97202ed1726cf9571600918f3bffb2544b26e00a61df9897668c33a1",
 "created_at": 1607635748
}
```

---

## GraphQL API

**URL:** https://docs.gitlab.com/api/graphql/

**Contents:**
- GraphQL API
- Getting started
  - Interactive GraphQL explorer
  - View GraphQL examples
  - Authentication
    - Token authentication
      - Header authentication
      - Parameter authentication
      - Token scopes
    - Session cookie authentication

GraphQL is a query language for APIs. You can use it to request the exact data you need, and therefore limit the number of requests you need.

GraphQL data is arranged in types, so your client can use client-side GraphQL libraries to consume the API and avoid manual parsing.

The GraphQL API is versionless.

If you’re new to the GitLab GraphQL API, see Get started with GitLab GraphQL API.

You can view the available resources in the GraphQL API reference.

The GitLab GraphQL API endpoint is located at /api/graphql.

Explore the GraphQL API using the interactive GraphQL explorer, either:

For more information, see GraphiQL.

You can work with sample queries that pull data from public projects on GitLab.com:

The get started page includes different methods to customize GraphQL queries.

You can access some queries without authentication, but others require authentication. Mutations always require authentication.

You can authenticate by using either a:

If the authentication information is not valid, GitLab returns an error message with a status code of 401:

Use any of the following tokens to authenticate with the GraphQL API:

Authenticate with a token by passing it through in a request header or as a parameter.

Tokens require the correct scope.

Example of token authentication using an Authorization: Bearer <token> request header:

Example of using an OAuth 2.0 token in the access_token parameter:

You can pass in personal, project, or group access tokens using the private_token parameter:

Tokens must have the correct scope to access the GraphQL API, either:

Signing in to the main GitLab application sets a _gitlab_session session cookie.

The interactive GraphQL explorer and the web frontend of GitLab itself use this method of authentication.

The GitLab GraphQL API uses a mix of identifiers.

Global IDs, full paths, and internal IDs (IIDs) are all used as arguments in the GitLab GraphQL API, but often a particular part of schema does not accept all of these at the same time.

Although the GitLab GraphQL API has historically not been consistent on this, in general you can expect:

For example, finding a project by its full path "gitlab-org/gitlab":

Another example, locking an issue by its project’s full path "gitlab-org/gitlab" and the issue’s IID "1":

An example of finding a CI runner by its Global ID:

Historically, the GitLab GraphQL API has been inconsistent with typing of full path and IID fields and arguments, but generally:

In the GitLab GraphQL API, a field or argument named id is nearly always a Global ID and never a database primary key ID. A Global ID in the GitLab GraphQL API begins with "gid://gitlab/". For example, "gid://gitlab/Issue/123".

Global IDs are a convention used for caching and fetching in some client-side libraries.

GitLab Global IDs are subject to change. If changed, the use of the old Global ID as an argument is deprecated and supported according to the deprecation and breaking change process. You should not expect that a cached Global ID will be valid beyond the time of a GitLab GraphQL deprecation cycle.

The top-level entry points for all queries are defined in the Query type in the GraphQL reference.

GitLab supports batching queries into a single request. For more information, see Multiplex.

The GitLab GraphQL API is versionless and changes to the API are primarily backward-compatible.

However, GitLab sometimes changes the GraphQL API in a way that is not backward-compatible. These changes are considered breaking changes, and can include removing or renaming fields, arguments, or other parts of the schema. When creating a breaking change, GitLab follows a deprecation and removal process.

To avoid having a breaking change affect your integrations, you should:

For GitLab Self-Managed, reverting from an EE instance to CE causes breaking changes.

Schema items labeled as experiments in the GraphQL API reference are exempt from the deprecation process. These items can be removed or changed at any time without notice.

Fields behind a feature flag and disabled by default do not follow the deprecation and removal process. These fields can be removed at any time without notice.

GitLab makes all attempts to follow the deprecation and removal process. GitLab might make immediate breaking changes to the GraphQL API to patch critical security or performance concerns if the deprecation process would pose significant risk.

You can make calls against the GraphQL API as if all deprecated items were already removed. This way, you can verify API calls ahead of a breaking-change release before the items are actually removed from the schema.

To make these calls, add a remove_deprecated=true query parameter to the GraphQL API endpoint. For example, https://gitlab.com/api/graphql?remove_deprecated=true for GraphQL on GitLab.com.

Parts of the schema marked for removal from the GitLab GraphQL API are first deprecated but still available for at least six releases. They are then removed entirely during the next XX.0 major release.

Items are marked as deprecated in:

The deprecation message provides an alternative for the deprecated schema item, if applicable.

To avoid experiencing breaking changes, you should remove the deprecated schema from your GraphQL API calls as soon as possible. You should verify your API calls against the schema without the deprecated schema items.

The following fields are deprecated in different minor releases, but both removed in GitLab 17.0:

View the list of items removed in previous releases.

The following limits apply to the GitLab GraphQL API.

The GitLab GraphQL API scores the complexity of a query. Generally, larger queries have a higher complexity score. This limit is designed to protecting the API from performing queries that could negatively impact its overall performance.

You can query the complexity score of a query and the limit for the request.

If a query exceeds the complexity limit, an error message response is returned.

In general, each field in a query adds 1 to the complexity score, although this can be higher or lower for particular fields. Sometimes, adding certain arguments may also increase the complexity of a query.

GraphQL mutations can be detected as spam. If a mutation is detected as spam and:

A CAPTCHA service is not configured, a GraphQL top-level error is raised. For example:

A CAPTCHA service is configured, you receive a response with:

Use the captchaSiteKey to obtain a CAPTCHA response value using the appropriate CAPTCHA API. Only Google reCAPTCHA v2 is supported.

Resubmit the request with the X-GitLab-Captcha-Response and X-GitLab-Spam-Log-Id headers set.

The GitLab GraphiQL implementation doesn’t permit passing of headers, so we must write this as a cURL query. --data-binary is used to properly handle escaped double quotes in the JSON-embedded query.

**Examples:**

Example 1 (unknown):
```unknown
{"errors":[{"message":"Invalid token"}]}
```

Example 2 (unknown):
```unknown
curl --request POST \
  --url "https://gitlab.com/api/graphql" \
  --header "Authorization: Bearer <token>" \
  --header "Content-Type: application/json" \
  --data "{\"query\": \"query {currentUser {name}}\"}"
```

Example 3 (unknown):
```unknown
curl --request POST \
  --url "https://gitlab.com/api/graphql?access_token=<oauth_token>" \
  --header "Content-Type: application/json" \
  --data "{\"query\": \"query {currentUser {name}}\"}"
```

Example 4 (unknown):
```unknown
curl --request POST \
  --url "https://gitlab.com/api/graphql?private_token=<access_token>" \
  --header "Content-Type: application/json" \
  --data "{\"query\": \"query {currentUser {name}}\"}"
```

---

## Extend with GitLab

**URL:** https://docs.gitlab.com/api/

**Contents:**
- Extend with GitLab

Connect GitLab to your tools and workflows to build a customized development environment. Integrate directly with your existing systems, set up automated responses to events, and build custom applications on top of GitLab. Whether you want to automate processes or build integrations, these extensibility features give you control over your development processes.

---

## REST API

**URL:** https://docs.gitlab.com/api/rest/

**Contents:**
- REST API
- Make a REST API request
- Rate limits
- Response format
- Request requirements
  - Request payload
  - Path parameters
  - id vs iid
  - Encoding
    - Namespaced paths

Automate your workflows and build integrations with the GitLab REST API:

The REST API uses standard HTTP methods and JSON data formats for compatibility with your existing tools and systems.

To make a REST API request:

A REST API request must start with the root endpoint and the path.

In the following example, the API request retrieves the list of all projects on GitLab host gitlab.example.com:

Access to some endpoints require authentication. For more information, see Authentication.

REST API requests are subject to rate limit settings. These settings reduce the risk of a GitLab instance being overloaded.

REST API responses are returned in JSON format. Some API endpoints also support plain text format. To confirm which content type an endpoint supports, see the REST API resources.

Some REST API requests have specific requirements, including the data format and encoding used.

API requests can use parameters sent as query strings or as a payload body. GET requests usually send a query string, while PUT or POST requests usually send the payload body:

Request payload (JSON):

URL-encoded query strings have a length limitation. Requests that are too large result in a 414 Request-URI Too Large error message. This can be resolved by using a payload body instead.

If an endpoint has path parameters, the documentation displays them with a preceding colon.

The :id path parameter needs to be replaced with the project ID, and the :group_id needs to be replaced with the ID of the group. The colons : shouldn’t be included.

The resulting cURL request for a project with ID 5 and a group ID of 17 is then:

Path parameters that are required to be URL-encoded must be followed. If not, it doesn’t match an API endpoint and responds with a 404. If there’s something in front of the API (for example, Apache), ensure that it doesn’t decode the URL-encoded path parameters.

Some API resources have two similarly-named fields. For example, issues, merge requests, and project milestones. The fields are:

If a resource has both the iid field and the id field, the iid field is usually used instead of id to fetch the resource.

For example, suppose a project with id: 42 has an issue with id: 46 and iid: 5. In this case:

Not all resources with the iid field are fetched by iid. For guidance regarding which field to use, see the documentation for the specific resource.

When making a REST API request, some content must be encoded to account for special characters and data structures.

If using namespaced API requests, make sure that the NAMESPACE/PROJECT_PATH is URL-encoded.

For example, / is represented by %2F:

A project’s path isn’t necessarily the same as its name. A project’s path is found in the project’s URL or in the project’s settings, under General > Advanced > Change path.

If a file path, branch or tag contains a /, make sure it is URL-encoded.

For example, / is represented by %2F:

You can request the API with array and hash types parameters:

import_sources is a parameter of type array:

override_params is a parameter of type hash:

variables is a parameter of type array containing hash key/value pairs [{ 'key': 'UPLOAD_TO_S3', 'value': 'true' }]:

If you need to include a + in a query parameter, you may need to use %2B instead, due to a W3 recommendation that causes a + to be interpreted as a space. For example, in an ISO 8601 date, you may want to include a specific time in ISO 8601 format, such as:

The correct encoding for the query parameter would be:

In some circumstances the API response may not be as you expect. Issues can include null values and redirection. If you receive a numeric status code in the response, see Status codes.

In API responses, some boolean fields can have null values. A null boolean has no default value and is neither true nor false. GitLab treats null values in boolean fields the same as false.

In boolean arguments, you should only set true or false values (not null).

After path changes the REST API might respond with a message noting that the endpoint has moved. When this happens, use the endpoint specified in the Location header.

Example of a project moved to a different path:

GitLab supports the following pagination methods:

For large collections, you should use keyset pagination (when available) instead of offset pagination, for performance reasons.

Sometimes, the returned result spans many pages. When listing resources, you can pass the following parameters:

In the following example, we list 50 namespaces per page:

There is a max offset allowed limit for offset pagination. You can change the limit in GitLab Self-Managed instances.

Link headers are returned with each response. They have rel set to prev, next, first, or last and contain the relevant URL. Be sure to use these links instead of generating your own URLs.

For GitLab.com users, some pagination headers may not be returned.

In the following cURL example, we limit the output to three items per page (per_page=3) and we request the second page (page=2) of comments of the issue with ID 8 which belongs to the project with ID 9:

GitLab also returns the following additional pagination headers:

For GitLab.com users, some pagination headers may not be returned.

Keyset-pagination allows for more efficient retrieval of pages and - in contrast to offset-based pagination - runtime is independent of the size of the collection.

This method is controlled by the following parameters. order_by and sort are both mandatory.

In the following example, we list 50 projects per page, ordered by id ascending.

The response header includes a link to the next page. For example:

The link to the next page contains an additional filter id_after=42 that excludes already-retrieved records.

As another example, the following request lists 50 groups per page ordered by name ascending using keyset pagination:

The response header includes a link to the next page:

The link to the next page contains an additional filter cursor=eyJuYW1lIjoiRmxpZ2h0anMiLCJpZCI6IjI2IiwiX2tkIjoibiJ9 that excludes already-retrieved records.

The type of filter depends on the order_by option used, and we can have more than one additional filter.

The Links header was removed to be aligned with the W3C Link specification. The Link header should be used instead.

When the end of the collection is reached and there are no additional records to retrieve, the Link header is absent and the resulting array is empty.

You should use only the given link to retrieve the next page instead of building your own URL. Apart from the headers shown, we don’t expose additional pagination headers.

Keyset-based pagination is supported only for selected resources and ordering options:

For performance reasons, if a query returns more than 10,000 records, GitLab doesn’t return the following headers:

The REST API version complies with the semantic versioning specification. The major version number is 4. Backward-incompatible changes require this version number to change.

The following are excluded from the deprecation process and can be removed at any time without notice:

For GitLab Self-Managed, reverting from an EE instance to CE causes breaking changes.

**Examples:**

Example 1 (unknown):
```unknown
curl --request GET \
  --url "https://gitlab.example.com/api/v4/projects"
```

Example 2 (unknown):
```unknown
curl --request POST \
  --url "https://gitlab.example.com/api/v4/projects?name=<example-name>&description=<example-description>"
```

Example 3 (unknown):
```unknown
curl --request POST \
  --header "Content-Type: application/json" \
  --data '{"name":"<example-name>", "description":"<example-description>"}' "https://gitlab.example.com/api/v4/projects"
```

Example 4 (unknown):
```unknown
DELETE /projects/:id/share/:group_id
```

---
