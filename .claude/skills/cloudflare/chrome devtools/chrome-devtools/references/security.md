# Chrome-Devtools - Security

**Pages:** 2

---

## Privacy and security panel Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/security

**Contents:**
- Privacy and security panel Stay organized with collections Save and categorize content based on your preferences.
- Overview
- Open the 'Privacy and security' panel
- Privacy: Control and inspect third-party cookies
  - Limit third-party cookies
  - Inspect third-party cookies
- Security: Find common problems
  - Non-secure main origins
  - Broken HTTPS
  - Mixed content

Kayce Basques X GitHub Sofia Emelianova GitHub

Use the Privacy and security panel in Chrome DevTools to inspect and control third-party cookies and check HTTPS protection.

The Privacy and security panel is divided into two corresponding sections:

Security, where you can see your page's origins that includes HTTP security warnings, origin details and certificates.

See Why HTTPS Matters to learn why every website should be protected with HTTPS, even sites that don't handle sensitive user data.

To open the Security panel, follow these steps:

Start typing privacy, select Show privacy and security, and press Enter.

Alternatively, in the top right corner, select more_vert Customize and control DevTools > More tools > Privacy and security.

The Privacy section lets you inspect and limit third-party cookies while DevTools is open.

To test how a website behaves when third-party cookies are limited in Chrome, do the following:

Turn on the following exceptions, if required:

To apply the changes, click refresh Reload in a prompt at the top of DevTools.

You can now test how the website bahaves and inspect third-party cookies and their issues as described next.

With third-party cookies temporarily limited (with or without exceptions), inspect them in the Privacy > Third-party cookies section.

When no third-party cookies are found, you'll see the Not a crumb left message.

Alternatively, depending on exceptions, some third-party cookies may be allowed and others blocked. The Third-party cookies section lists them in a table that includes information about cookie status and a recommendation.

By status, select a status value at the top: All, Allowed, or Blocked.

By name or domain, start typing a query into the filter box.

To sort the table, click a column name.

The Security section of the panel may display issues described next.

When the main origin of a page is not secure, the Security > Overview says This page is not secure.

This problem occurs when the URL that you visited was requested over HTTP. To make it secure you need to request it over HTTPS. For example, if you look at the URL in your address bar, it probably looks similar to http://example.com. To make it secure the URL should be https://example.com.

If you've already got HTTPS set up on your server, all you need to do to fix this problem is configure your server to redirect all HTTP requests to HTTPS.

If you don't have HTTPS set up on your server, Let's Encrypt provides a free and relatively-easy way to start the process. Or, you might consider hosting your site on a CDN. Most major CDNs host sites on HTTPS by default now.

If there's a problem with HTTPS, the Security > Overview tells you what went wrong.

In this case, the page is missing a valid certificate because it expired.

Mixed content means that the main origin of a page is secure, but the page interacts with resources from non-secure origins. Mixed content pages are only partially protected because the HTTP content is accessible to sniffers and vulnerable to man-in-the-middle attacks.

Open the Security > Non-secure origins section and click View requests in Network panel.

DevTools takes you to the Network panel and applies relevant filters so that the network log only shows non-secure resources.

You can view certificate and origin details as described next.

From the Security > Overview click View certificate to quickly inspect the main origin's certificate.

Click one of the entries in the Security section to view the origin's details. From the details page you can view connection and certificate information. Certificate transparency information is also shown when available.

---

## Issues: Find and fix problems Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/issues

**Contents:**
- Issues: Find and fix problems Stay organized with collections Save and categorize content based on your preferences.
- Overview
- Open the Issues panel
- View items in the Issues panel
  - Group issues by kind
  - Include third-party issues
  - Hide issues
- View issues in context

Sam Dutton X GitHub Mastodon Bluesky Homepage Sofia Emelianova GitHub

Use the Issues panel to find solutions to problems detected by the browser, such as cookie issues and mixed content.

By collecting and grouping common problems, the Issues panel reduces notification fatigue and clutter in the Console.

As of now, the Issues panel reports:

Future versions of Chrome will support more issue types.

Click the Open Issues button next to Settings in the right corner of the action bar at the top. Depending on issue severity, the button can have a red , yellow , or blue icon.

Alternatively, select Issues from the More tools menu.

Once you're on the Issues panel, you might want to reload the page to catch even more issues, this time occurring during page load.

The Console might also show you issues reported by the browser. However, you'll notice that such issues (like the cookie warning in the screenshot below) are hard to understand. It's not clear what you need to do to fix it.

On the other hand, the Issues panel provides you with actionable insights.

The Issues panel presents warnings from the browser in a structured, aggregated, and actionable way.

Click an item in the Issues panel to expand the issue and get guidance on how to fix it and find affected resources.

Each item has four components:

Click the items in AFFECTED RESOURCES to view issues in context.

The Issues panel counts the number of affected resources for each issue and shows it next to their headlines. Additionally, you can organize the issues by their severity in three group kinds:

To group issues, check Group by kind in the action bar at the top of the Issues panel.

The Issues panel shows third-party cookies issues by default.

You can find third-party cookie issues in the AFFECTED RESOURCES section missing a link.

To hide such issues, clear Include third-party cookie issues in the action bar at the top of the Issues panel.

To hide an issue, select Hide issues like this from the three-dot menu next to the issue.

To see the list of hidden issues, scroll down to the Hidden issues section and expand it.

To reveal all issues, click Unhide all. To reveal a specific issue, select Unhide issues like this from the three-dot menu next to the issue.

Additionally, with grouping enabled, you can hide entire groups of issues using the same three-dot menu next to a group.

To investigate an issue:

In the AFFECTED RESOURCES section, click a resource link to view the item in the appropriate context within DevTools. In this example, click samesite-sandbox.glitch.me to show the cookies attached to that request. The link takes you to the Network panel.

Scroll to view the item with a problem: in this case, the cookie ck02. Hover over the information icon on the right to see the problem and how to fix it.

---
