# Chrome-Devtools - Application

**Pages:** 3

---

## View, add, edit, and delete cookies Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/application/cookies

**Contents:**
- View, add, edit, and delete cookies Stay organized with collections Save and categorize content based on your preferences.
- Open the Cookies pane
- Fields
- Filter cookies
- Add a cookie
- Edit a cookie
- Delete cookies
- Identify and inspect third-party cookies

Kayce Basques X GitHub Sofia Emelianova GitHub

HTTP Cookies are mainly used to manage user sessions, store user personalization preferences, and track user behavior. They are also the cause of all of those annoying "this page uses cookies" consent forms that you see across the web. This guide teaches you how to view, add, edit, and delete a page's cookies with Chrome DevTools.

The Cookies table contains the following fields:

To view a cookie's value, select it in the table. To see the value without percent-encoding, check check_box Show URL-decoded.

Use the Filter box to filter cookies by Name or Value.

Filtering by other fields is not supported. Filter is case-insensitive.

To add an arbitrary cookie:

DevTools populates other required fields automatically. You can edit them as described next.

All the fields are editable except Size that updates automatically.

Double-click a field to edit it.

DevTools highlights cookies with invalid field values in red.

To filter out valid cookies, check check_box Only show cookies with an issue in the top action bar.

To delete a cookie, select it and click delete Delete selected in the top action bar.

Click block Clear all to delete all cookies.

Third-party cookies are those set by a site that's different from the current top-level page. Third-party cookies have the SameSite=None attribute.

DevTools lists such cookies in Application > Storage > Cookies and shows a warning warning icon next to them. Hover over the icon to see a tooltip and click it to go to the Issues panel for more information.

You can also find third-party cookies in Network > click request > Cookies.

The Network panel highlights cookies with issues and shows a warning warning icon next to cookies affected where third-party cookies are not available.

---

## View, add, edit, and delete cookies Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/storage/cookies

**Contents:**
- View, add, edit, and delete cookies Stay organized with collections Save and categorize content based on your preferences.
- Open the Cookies pane
- Fields
- Filter cookies
- Add a cookie
- Edit a cookie
- Delete cookies
- Identify and inspect third-party cookies

Kayce Basques X GitHub Sofia Emelianova GitHub

HTTP Cookies are mainly used to manage user sessions, store user personalization preferences, and track user behavior. They are also the cause of all of those annoying "this page uses cookies" consent forms that you see across the web. This guide teaches you how to view, add, edit, and delete a page's cookies with Chrome DevTools.

The Cookies table contains the following fields:

To view a cookie's value, select it in the table. To see the value without percent-encoding, check check_box Show URL-decoded.

Use the Filter box to filter cookies by Name or Value.

Filtering by other fields is not supported. Filter is case-insensitive.

To add an arbitrary cookie:

DevTools populates other required fields automatically. You can edit them as described next.

All the fields are editable except Size that updates automatically.

Double-click a field to edit it.

DevTools highlights cookies with invalid field values in red.

To filter out valid cookies, check check_box Only show cookies with an issue in the top action bar.

To delete a cookie, select it and click delete Delete selected in the top action bar.

Click block Clear all to delete all cookies.

Third-party cookies are those set by a site that's different from the current top-level page. Third-party cookies have the SameSite=None attribute.

DevTools lists such cookies in Application > Storage > Cookies and shows a warning warning icon next to them. Hover over the icon to see a tooltip and click it to go to the Issues panel for more information.

You can also find third-party cookies in Network > click request > Cookies.

The Network panel highlights cookies with issues and shows a warning warning icon next to cookies affected where third-party cookies are not available.

---

## Debug Progressive Web Apps Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/progressive-web-apps

**Contents:**
- Debug Progressive Web Apps Stay organized with collections Save and categorize content based on your preferences.
- Summary
- Web app manifest
  - View and check maskable icons
  - Trigger installation
  - Inspect shortcuts
  - Inspect screenshots for a richer installation UI
  - Test URL protocol handler registration
- Service workers
- Service worker caches

Kayce Basques X GitHub Sofia Emelianova GitHub

Use the Application panel to inspect, modify, and debug web app manifests, service workers, and service worker caches.

Progressive Web Apps (PWAs) are modern, high quality applications built using web technology. PWAs offer similar capabilities to iOS, Android, and desktop apps. They are:

This guide only discusses the Progressive Web App features of the Application panel. If you're looking for help on the other panes, check out the last section of this guide, Other Application panel guides.

If you want your users to be able to add your app to their the Applications folder on Mac OS X, the Start menu on Windows, and the home screen on Android and iOS, you need a web app manifest. The manifest defines how the app appears on the home screen, where to direct the user when launching from home screen, and what the app looks like on launch.

Once you've got your manifest set up, you can use the Manifest tab of the Application panel to inspect it.

In addition, if DevTools encounters an error, such as an icon that cannot be loaded, the Manifest tab displays an Installability section describing the error.

The Icons section of the Manifest tab displays all the icons of your application. In this section, you can also check safe areas for maskable icons, the format of icons that adapt to platforms.

To trim the icons so that only the minimum safe area is visible, check Show only the minimum safe area for maskable icons.

If your entire logo is visible in the safe area, you're good to go.

Chrome makes it possible for you to enable and promote the installation of your PWA directly within its user interface. Learn How to provide your own in-app installation experience.

To trigger the installation flow of your PWA:

On the right side of the address bar at the top, click Install.

Follow the on-screen instructions.

The Install app feature cannot simulate the workflow for mobile devices. Notice how the desktop Chrome browser displays the installation button in the address bar, even though DevTools is in Device Mode. However, if you can successfully add your app to your desktop, then it'll work for mobile, too.

If you want to test out the genuine mobile experience, you can connect a real mobile device to DevTools via remote debugging. To trigger the installation on the connected mobile device, open the three-dot menu and click Install app.

App shortcuts let you to provide quick access to a handful of common actions that users need frequently.

To inspect the shortcuts you defined in your manifest file, scroll to the Shortcut #N sections of the Manifest tab.

When you add a description and a set of screenshots to your manifest file, your app gets a richer installation dialog.

To inspect the screenshots, scroll to the Screenshot #N sections of the Manifest tab.

PWAs can handle links that use a specific protocol for a more integrated experience. To learn how to create a handler, see URL protocol handler registration for PWAs.

To test your handler:

If the handler successfully processes the link, you'll see an image of a coffee cup opened in the app.

Service workers are a fundamental technology in the future web platform. They are scripts that the browser runs in the background, separate from a web page. These scripts enable you to access features that don't need a web page or user interaction, like push notifications, background sync, and offline experiences.

The Service Workers tab in the Application panel is the main place in DevTools to inspect and debug service workers.

The Update Cycle table shows you the service worker's activities and their elapsed times, such as install, wait, and activate. To see the exact timestamp of each activity, click the Expand buttons.

For more information, see The service worker lifecycle.

If the service worker causes any errors, the Service Workers tab shows an Error icon with the number of errors next to the Source line. The link with the number takes you to the Console with all the logged errors.

To see information on all service workers, click See all registrations at the bottom of the Service Workers tab. This link takes to chrome://serviceworker-internals/?devtools where you can further debug your service workers.

The Cache Storage tab provides a read-only list of resources that have been cached using the (service worker) Cache API.

Note that the first time you open a cache and add a resource to it, DevTools might not detect the change. Reload the page and you should see the cache.

If you've got two or more caches open, you'll see them listed below the Cache Storage drop-down.

Some responses within the Cache Storage tab may be flagged as being "opaque". This refers to a response retrieved from a different origin, like from a CDN or remote API, when CORS is not enabled.

In order to avoid leakage of cross-domain information, there's significant padding added to the size of an opaque response used for calculating storage quota limits (i.e. whether a QuotaExceeded exception is thrown) and reported by the navigator.storage API.

The details of this padding vary from browser to browser, but for Google Chrome, this means that the minimum size that any single cached opaque response contributes to the overall storage usage is approximately 7 megabytes. You should keep this in mind when determining how many opaque responses you want to cache, since you could easily exceeded storage quota limitations much sooner than you'd otherwise expect based on the actual size of the opaque resources.

The Clear Storage tab is a very useful feature when developing progressive web apps. This tab lets you unregister service workers and clear all caches and storage with a single button click. Check out the section below to learn more.

Check out the guides below for more help on the other panes of the Application panel.

---
