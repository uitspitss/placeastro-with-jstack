# Chrome-Devtools - Rendering

**Pages:** 2

---

## Media: View and debug media players information Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/media-panel

**Contents:**
- Media: View and debug media players information Stay organized with collections Save and categorize content based on your preferences.
- Overview
- Open the Media panel
- View media players information
  - Remote debugging
- Hide and show media players
- Export media player information

Jecelyn Yeen X GitHub Bluesky Homepage Dale St. Marthe LinkedIn

Use the Media Panel in Chrome DevTools to view information and debug the media players per browser tab.

The Media panel is the main place in DevTools for inspecting the media player of a page. Audio and video sources are listed in the left section of the Media panel under Players, and the right section displays various properties and details.

The Media panel lets you do the following:

To open the Media panel:

To view media player information, follow these steps:

You can view the media players information on an Android device from your Windows, Mac, or Linux computer.

Sometimes there might be more than one media player on a page, or you might use the same browser tab browsing different pages, each with media players.

You can choose to show or hide each media player for easier debugging experience.

---

## Apply other effects: enable automatic dark theme, emulate focus, and more Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/rendering/apply-effects

**Contents:**
- Apply other effects: enable automatic dark theme, emulate focus, and more Stay organized with collections Save and categorize content based on your preferences.
- Highlight ad frames
- Emulate a focused page
- Disable local fonts
- Enable automatic dark mode
- Emulate vision deficiencies
- Disable AVIF and WebP image formats

Sofia Emelianova GitHub

Discover useful effects to apply to your page with this reference of the Rendering tab options.

To check if frames are tagged as ads:

If you switch focus from the page to DevTools, some overlay elements automatically hide if they are triggered by focus. For example, drop-down lists, menus, or date pickers. The check_box Emulate a focused page option lets you debug such an element as if it is in focus.

To emulate a focused page:

On the page, open the Rendering tab, then check and clear Emulate a focused page.

You can also find the same option under the :hov button on the action bar in Elements > Styles.

To discover more ways to freeze an element, see Freeze screen and inspect disappearing elements.

Check if the local font alternatives work as expected by disabling local() sources in @font-face rules.

Often, developers and designers use two different copies of the same font during development:

Disabling local fonts makes it easier for you to:

Emulate missing local() sources in @font-face rules:

Inspect the sentence above, open Elements > Computed, scroll all the way down, and, under Rendered Fonts, discover that Chrome found Courier New in local files.

Open the Rendering tab, check Disable local fonts, and refresh reload the page.

Observe the sentence in Roboto found on the web.

See what your site can look like in dark mode even if you didn't implement it.

Chrome 96 introduced an Origin Trial for Auto Dark Theme on Android. With this feature, the browser applies an automatically generated dark theme to light themed sites if the user opted into dark themes in the operating system.

To enable automatic dark mode:

Everyone should be able to access and enjoy the web. Google is committed to making that a reality.

With Chrome DevTools, you can see how people with vision deficiencies see your site, so you can make it better for them. For more information, see Simulating color vision deficiencies.

To emulate vision deficiencies:

Under Emulate vision deficiencies, select one of the following from the drop-down list:

These emulations make it easier for developers to test different image loading scenarios without having to switch browsers.

Suppose you have the following HTML code to serve an image in AVIF and WebP formats for newer browsers, with a fallback PNG image for older browsers.

To disable all AVIF images on a page (or, similarly, WebP images):

Similarly, you can disable WebP images.

**Examples:**

Example 1 (unknown):
```unknown
<picture>
  <source srcset="test.avif" type="image/avif">
  <source srcset="test.webp" type="image/webp">
  <img src="test.png" alt="A test image">
</picture>
```

---
