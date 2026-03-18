# Chrome-Devtools - Other

**Pages:** 21

---

## Locations Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/settings/locations

**Contents:**
- Locations Stay organized with collections Save and categorize content based on your preferences.

Sofia Emelianova GitHub

Settings > Locations list geolocation presets. You can use these presets to override geolocation in Chrome. You can also populate the list with your own preset that you use frequently.

To add a custom preset:

Specify the following values for the new entry. For example, let's add New York as a new location.

Click Save. Now you can select this preset from the Sensors > Location drop-down list.

To edit or remove an existing preset, click or buttons that appear on hover.

---

## Customize DevTools Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/customize

**Contents:**
- Customize DevTools Stay organized with collections Save and categorize content based on your preferences.
- Settings
- Dark theme
- Dynamic theme
- Drawer
- Change DevTools placement
- Reorder panels, tabs, and panes
- Panel layout
- Change DevTools UI language
- Sync settings

Kayce Basques X GitHub Jecelyn Yeen X GitHub Bluesky Homepage Sofia Emelianova GitHub

This page lists the ways you can customize Chrome DevTools.

settings Settings > Preferences contains many options for customizing DevTools.

See Open Settings and Preferences.

You can enable dark theme in Settings or the Command Menu.

Start typing dark, select the Switch to dark theme command, and then press Enter to run the command.

Alternatively, set your theme in settings Settings > Preferences > Appearance > Themes.

DevTools can automatically match Chrome's color theme.

To turn off dynamic theming, clear settings Settings > Preferences > Appearance > check_box_outline_blank Match Chrome color scheme and reload DevTools.

The Drawer contains many hidden features.

Press Escape to open or close the Drawer.

Click more_vert More Tools to open other Drawer tabs.

By default, DevTools is docked to the right of your viewport. You can also dock to the bottom or left sides or undock DevTools into a separate window.

You can change the placement of DevTools in two ways:

To toggle Restore last dock position with a keyboard shortcut, press:

To change ordering, click and drag left or right any of the following:

Additionally, you can move panels and tabs up and down to and from the Drawer. To do this, right-click the panel or tab and select Move to top or Move to bottom from the drop-down menu.

Your custom tab order persists across DevTools sessions.

By default, DevTools will auto-rearrange your panel layout depending on window size. You can disable the auto-rearrangement. Go to settings Settings > Preferences > Appearance and update the panel layout based on your preference.

For example, the Styles pane in the Elements panel will move from the side to the bottom when screen size is small. If you want the Style pane to always stay on the side, change the panel layout to vertical.

See settings Settings > Preferences > Appearance > Language.

You can sync your DevTools settings across multiple devices.

To enable sync, first turn on Chrome Sync. Once enabled, your DevTools settings are synced by default.

You can enable or disable the DevTools settings sync separately using the settings Settings > Sync > check_box Enable settings sync checkbox.

DevTools syncs most of the settings except those in the Workspace, Experiments, and Devices tabs and a few other general settings. The state of the Enable settings sync checkbox is synced across devices as well.

For example, the following Appearance settings are synced, so you have a consistent experience across devices and don't need to re-define the same settings again.

However, the dock setting isn't synced because developers have different dock preferences when debugging on different sites.

See Settings > Shortcuts.

See Settings > Experiments.

---

## Lighthouse: Optimize your website Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/speed/get-started

**Contents:**
- Lighthouse: Optimize your website Stay organized with collections Save and categorize content based on your preferences.
- Overview
- Lighthouse versus Performance panel
- Lighthouse in DevTools versus other Lighthouse tooling
  - Easier mode setups
  - Device and Category selection
  - Advanced settings
  - Lighthouse is influenced by your setup
  - Post-run options
- Conclusion

Barry Pollard X GitHub Mastodon Bluesky Homepage

Published: August 18, 2018, Last updated: October 15, 2025

Published: August 18, 2018, Last updated: October 15, 2025

Use the Lighthouse panel to run a comprehensive audit of your website. The Lighthouse panel generates a report that gives you details on the following categories on your website:

Each category provides a score and highlights potential issues and suggestions for improvements.

To learn more about the other ways Lighthouse can improve the quality of your website, see our Lighthouse docs.

One of the key uses of Lighthouse is to identify performance problems, but we also have the Performance panel. What are the benefits of each tool, and which should you use?

Previously, the Performance panel was seen as a tool for experts, while Lighthouse offered a high-level overview that required less web performance expertise.

The Performance panel now offers a more approachable view with Live Metrics. Once in the trace view you can see issues tradditionally surfaced by Lighthouse, with shared Performance Insights available in the Insights sidebar.

When using DevTools to debug performance problems, we recommend the Performance panel over Lighthouse for more detailed and in-depth debugging capabilities.

However, Lighthouse is still useful for the other categories (Accessibility, Best Practices, SEO), and we also keep the Performance category here for those that prefer to use that and for consistency with other Lighthouse tooling.

Lighthouse offers some extra features or considerations compared to other Lighthouse tooling, whether that be PageSpeed Insights, Lighthouse CI in automated testing, or other third-party tools.

Some of these are controlled with the options shown on screen before initiating the Lighthouse audit, with some of the more advanced settings hidden by default until the Settings settings button is clicked:

These aren't the full suite of configuration options available to Lighthouse, but do represent the more common options used.

As well as the default Navigation mode (which runs a Lighthouse report on a fresh page load), Lighthouse offers Timespan and Snapshot modes for measuring user flows.

The Timespan mode runs Lighthouse audits over some period of time, which may or may not include a navigation. By using Lighthouse in DevTools you can start a timespan trace in the Lighthouse panel and then interact with the page.

Similarly the Snapshot mode lets you take a Lighthouse audit in the exact state the page is in without reloading it.

These modes can be scripted with Puppeteer, but Lighthouse in DevTools allows easier set up of specific scenarios. Interacting with the page directly is almost always easier than scripting a solution.

Many Lighthouse tools (for example PageSpeed Insights) don't offer the option to choose the device type or audit categories but these can be selected in DevTools.

This can make Lighthouse audits faster if you're only interested in a specific category.

The Settings settings button provides access to more settings:

An important consideration is that Lighthouse is influenced by your setup, including other load happening on your device, Chrome extensions, and any device settings you've stored in cookies, local storage, or similar.

It is often recommend to run Lighthouse in incognito mode but even then this may still be subject to these influences.

This also means you cannot directly compare two Lighthouse audits completed on different machines.

By contrast, PageSpeed Insights or CI tools run on separate servers may produce a "cleaner" and more consistent Lighthouse audits that are easier to compare over different runs.

Other features are available after the run has completed in the "three dots" menu option that replaces Settings settings button:

You can choose to Print, Copy, or Save the audit details or Open this outside of DevTools in a separate viewer.

One other option is to view the trace in the Performance panel as a Lighthouse performance audit is basically a form of a Performance panel trace and both share the same trace engine.

The final option lets you toggle Dark mode for the Lighthouse report.

The Lighthouse panel in DevTools provides access run Lighthouse reports for the page you're debugging in Chrome including some features that are easier to use than in other Lighthouse tooling.

We recommend the Performance panel for performance debugging as this provides similar performance insights to Lighthouse but with much more detail, but users may still prefer the familiarity of Lighthouse.

Additionally Lighthouse provides other audits to help identify and improve Accessibility, SEO, and other Best Practices.

---

## Sensors: Emulate device sensors Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/sensors

**Contents:**
- Sensors: Emulate device sensors Stay organized with collections Save and categorize content based on your preferences.
- Overview
- Open the Sensors panel
- Override geolocation
- Simulate device orientation
- Force touch
- Emulate idle detector state
- Emulate hardware concurrency
- Emulate CPU pressure

Kayce Basques X GitHub Sofia Emelianova GitHub

Use the Sensors panel to emulate sensor input of any device.

The Sensors panel lets you do the following:

Depending on your operating system, press the following to open the Command Menu:

Type sensors, select Show Sensors, and press Enter. The Sensors panel opens up at the bottom of your DevTools window.

Many websites take advantage of user location in order to provide a more relevant experience for their users. For example, a weather website might show the local forecast for a user's area, once the user has granted the website permission to access their location.

If you're building a UI that changes depending on where the user is located, you probably want to make sure that the site behaves correctly in different places around the world.

To override your geolocation, open the Sensors panel and, from the Geolocation list select one of the following:

To simulate different device orientations, open the Sensors panel, and, from the Orientation list, select one of the following:

After selecting Custom orientation the alpha, beta, and gamma fields are enabled. See Alpha, Beta, and Gamma to understand how these axes work.

You can also set a custom orientation by dragging the Orientation Model. Hold Shift before dragging to rotate along the alpha axis.

To test touch events on your website, you can force touch instead of click even if you're testing on a device without a touch screen.

To trigger touch events with your pointer:

The Idle Detection API lets you detect inactive users and react on idle state changes. With DevTools, you can emulate idle state changes for both the user state and screen state instead of waiting for the actual idle state to change.

To emulate idle states:

Open the Sensors panel. For this tutorial, you can try it on this demo page.

Enable the checkbox next to Ephemeral and, in the prompt, grant the demo page the idle detection permission. Then, reload the page.

Under the Emulate Idle detector State drop-down, select one of the following:

In this example, DevTools emulates an User idle, screen locked state and, in this case, the demo page starts the 10 second countdown to clear the canvas.

To emulate how your website performs on devices with different numbers of processor cores, you can override the value reported by the navigator.hardwareConcurrency property. Some applications use this property to control the degree of parallelism of their application, for example, to control Emscripten pthread pool size.

To emulate hardware concurrency:

To revert to the default value, click the undo Reset button.

CPU or compute pressure is a set of reported states that give you an idea of how much workload the system's compute is undergoing and whether it's near to the limit or not. This information lets you adapt your real-time application, for example, video conferencing or video game, to take advantage of all the available processing power while keeping the system responsive by adapting the workloads in real time.

The Sensors panel lets you emulate the states that can be reported by the Compute Pressure API.

To emulate CPU pressure on your website:

---

## 

**URL:** https://developer.chrome.com/docs/devtools/

**Contents:**
  - DevTools
  - Get AI assistance
  - Understand performance
  - Inspect resources
  - Analyze network
- AI assistance & console insights
  - Get started
  - Get inspired
  - Understand console messages
- DevTools Tips

---

## Devices Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/settings/devices

**Contents:**
- Devices Stay organized with collections Save and categorize content based on your preferences.
- Add a device to the Devices list
- Add a custom device

Sofia Emelianova GitHub

Settings > Devices list devices and their dimensions. You can select these devices from the Dimensions drop-down list in device mode.

To add a device to the list:

In the Device tab, enable the checkbox next to a device you want to add.

If you don't see a device you want to test, add a custom one:

Specify the device details, for example, as shown on the screenshot:

Click Save. Your device is enabled by default and you can select it from the Dimensions drop-down list in device mode.

To edit or remove a custom device you added, click or buttons that appear on hover.

---

## Experiments Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/settings/experiments

**Contents:**
- Experiments Stay organized with collections Save and categorize content based on your preferences.

Sofia Emelianova GitHub

Settings > Experiments let you enable and disable experimental features of Chrome DevTools.

To enable an experiment:

The next time you open DevTools, the experiment is enabled. To disable an experiment, clear the corresponding checkbox.

---

## Keyboard shortcuts Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/shortcuts

**Contents:**
- Keyboard shortcuts Stay organized with collections Save and categorize content based on your preferences.
- Keyboard shortcuts for opening DevTools
- Global keyboard shortcuts
- Elements panel keyboard shortcuts
  - Styles pane keyboard shortcuts
- Sources panel keyboard shortcuts
  - Code Editor keyboard shortcuts
- Network panel keyboard shortcuts
- Performance panel keyboard shortcuts
- Memory panel keyboard shortcuts

Kayce Basques X GitHub Sofia Emelianova GitHub

This page is a reference of keyboard shortcuts in Chrome DevTools.

You can also find shortcuts in tooltips. Hover over a UI element of DevTools to display its tooltip. If the element has a shortcut, the tooltip includes it.

To open DevTools, press the following keyboard shortcuts while your cursor is focused on the browser viewport:

The following keyboard shortcuts are available in most, if not all, DevTools panels.

---

## Lighthouse: Optimize your website Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/lighthouse

**Contents:**
- Lighthouse: Optimize your website Stay organized with collections Save and categorize content based on your preferences.
- Overview
- Lighthouse versus Performance panel
- Lighthouse in DevTools versus other Lighthouse tooling
  - Easier mode setups
  - Device and Category selection
  - Advanced settings
  - Lighthouse is influenced by your setup
  - Post-run options
- Conclusion

Barry Pollard X GitHub Mastodon Bluesky Homepage

Published: August 18, 2018, Last updated: October 15, 2025

Published: August 18, 2018, Last updated: October 15, 2025

Use the Lighthouse panel to run a comprehensive audit of your website. The Lighthouse panel generates a report that gives you details on the following categories on your website:

Each category provides a score and highlights potential issues and suggestions for improvements.

To learn more about the other ways Lighthouse can improve the quality of your website, see our Lighthouse docs.

One of the key uses of Lighthouse is to identify performance problems, but we also have the Performance panel. What are the benefits of each tool, and which should you use?

Previously, the Performance panel was seen as a tool for experts, while Lighthouse offered a high-level overview that required less web performance expertise.

The Performance panel now offers a more approachable view with Live Metrics. Once in the trace view you can see issues tradditionally surfaced by Lighthouse, with shared Performance Insights available in the Insights sidebar.

When using DevTools to debug performance problems, we recommend the Performance panel over Lighthouse for more detailed and in-depth debugging capabilities.

However, Lighthouse is still useful for the other categories (Accessibility, Best Practices, SEO), and we also keep the Performance category here for those that prefer to use that and for consistency with other Lighthouse tooling.

Lighthouse offers some extra features or considerations compared to other Lighthouse tooling, whether that be PageSpeed Insights, Lighthouse CI in automated testing, or other third-party tools.

Some of these are controlled with the options shown on screen before initiating the Lighthouse audit, with some of the more advanced settings hidden by default until the Settings settings button is clicked:

These aren't the full suite of configuration options available to Lighthouse, but do represent the more common options used.

As well as the default Navigation mode (which runs a Lighthouse report on a fresh page load), Lighthouse offers Timespan and Snapshot modes for measuring user flows.

The Timespan mode runs Lighthouse audits over some period of time, which may or may not include a navigation. By using Lighthouse in DevTools you can start a timespan trace in the Lighthouse panel and then interact with the page.

Similarly the Snapshot mode lets you take a Lighthouse audit in the exact state the page is in without reloading it.

These modes can be scripted with Puppeteer, but Lighthouse in DevTools allows easier set up of specific scenarios. Interacting with the page directly is almost always easier than scripting a solution.

Many Lighthouse tools (for example PageSpeed Insights) don't offer the option to choose the device type or audit categories but these can be selected in DevTools.

This can make Lighthouse audits faster if you're only interested in a specific category.

The Settings settings button provides access to more settings:

An important consideration is that Lighthouse is influenced by your setup, including other load happening on your device, Chrome extensions, and any device settings you've stored in cookies, local storage, or similar.

It is often recommend to run Lighthouse in incognito mode but even then this may still be subject to these influences.

This also means you cannot directly compare two Lighthouse audits completed on different machines.

By contrast, PageSpeed Insights or CI tools run on separate servers may produce a "cleaner" and more consistent Lighthouse audits that are easier to compare over different runs.

Other features are available after the run has completed in the "three dots" menu option that replaces Settings settings button:

You can choose to Print, Copy, or Save the audit details or Open this outside of DevTools in a separate viewer.

One other option is to view the trace in the Performance panel as a Lighthouse performance audit is basically a form of a Performance panel trace and both share the same trace engine.

The final option lets you toggle Dark mode for the Lighthouse report.

The Lighthouse panel in DevTools provides access run Lighthouse reports for the page you're debugging in Chrome including some features that are easier to use than in other Lighthouse tooling.

We recommend the Performance panel for performance debugging as this provides similar performance insights to Lighthouse but with much more detail, but users may still prefer the familiarity of Lighthouse.

Additionally Lighthouse provides other audits to help identify and improve Accessibility, SEO, and other Best Practices.

---

## Workspace Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/settings/workspace

**Contents:**
- Workspace Stay organized with collections Save and categorize content based on your preferences.
- Customize exclusions
- Manage Workspaces

Sofia Emelianova GitHub

Settings > Workspace lets you save changes that you make within DevTools to source code that's stored on your computer.

To configure your workspaces, open Settings > Workspace.

The Folder exclude pattern is the default global RegEx pattern that lists common and third-party folders and file types that DevTools excludes from workspaces so you can focus only on your code. You can manually add new folders or file types to the pattern. Pattern changes take effect after reloading DevTools.

To change the default global list of excluded folders and files, edit the Settings > Workspace > Folder exclude pattern textbox.

The Workspace tab lists folders you have set up as Workspaces and, for each folder, subfolders you manually excluded. Changes to files in subfolders listed as excluded don't persist. Excluded subfolders are workplace-specific, not global.

To add a new Workspace:

To remove a workspace, click next to the corresponding folder.

---

## Preferences Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/settings/preferences

**Contents:**
- Preferences Stay organized with collections Save and categorize content based on your preferences.
- Appearance
    - Themes sets a color theme for DevTools UI.
    - Panel layout arranges panes in panels.
    - Language sets the locale for DevTools UI.
    - Enable Ctrl/Cmd + 0-9 shortcut to switch panels lets you open panels using the keyboard.
    - Disable paused state overlay hides the Paused in debugger overlay in the viewport when code execution is paused.
    - Show What's New after each update automatically opens the What's New drawer tab after each Chrome update.
- Sources
    - Search in anonymous and content scripts lets you search all loaded JavaScript files, including those in Chrome extensions, using the Search tab.

Sofia Emelianova GitHub

Configure the appearance and behavior of DevTools and its panels using Settings > Preferences. This tab lists both general customization options and panel-specific ones.

To set preferences, open Settings > Preferences and scroll to one of the sections described next.

To find out what each setting does, search this page for the setting's name and add_circle expand its description.

This reference indicates different settings with the following icons:

To restore default preferences, scroll to the end of the Preferences tab and click Restore defaults and reload.

This section lists options that customize DevTools appearance.

Affects Elements > Styles and sister tabs, and the Sources > Debugger pane. The auto option makes the layout depend on DevTools width.

To apply this setting, reload DevTools.

This video shows how to switch between the tabs using the corresponding keyboard shortcuts.

This section lists options that customize the Sources panel.

This video shows how to search for text in an extension source file.

This video shows how, with this option enabled, the Sources panel selects files in the navigation tree as you switch between tabs.

Requires to reload DevTools.

This video first shows Tab characters inserted with the Tab key. Then when you enable this option and reload DevTools, the Tab key moves focus.

Requires to reload DevTools.

This video first shows the default indentation of eight spaces. Then when you enable this option, it overrides the default indentation to that of the source file.

This video first doesn't show any suggestions. Then when you enable this option, the Editor shows suggestions for command completion.

This video shows typing opening brackets before and after enabling automatic bracket closing.

Requires to reload DevTools.

This video shows how to fold code blocks when you enable this option.

Requires to reload DevTools. Options do the following:

This video first shows the Sources panel out of focus when paused at a breakpoint. Then when you enable this option, DevTools opens the Editor in the Sources panel and shows you the line of code with the breakpoint.

When pretty-printed, the Editor may show a single long code line in multiple lines, preceded by - to indicate that it's a line continuation.

This video shows you how to scroll past the end of file when you enable this option.

If left disabled, DevTools logs to the Console messages similar to the following:

This example shows how to set the default indentation to eight spaces first and then to a Tab character.

This section lists options that customize the Elements panel.

This video first shows that DOM nodes aren't selected in the DOM tree. Then when you enable this option, the Elements panel selects the nodes on hover.

The Learn more link takes you an MDN CSS Reference on the property.

This section lists options that customize the Network panel. Most of the options are the same as in the panel's settings.

This video first shows the requests log refreshed on page reload, then persisted when you enable this option.

This video first shows that the requests aren't blocked. Then, after you enable this option, a pattern in the Network request blocking drawer blocks them.

Sensitive data is the data in Cookie, Set-Cookie, and Authorization headers.

This section lists options that customize the Performance panel.

This example shows both scroll and zoom mouse wheel actions on a flame chart in the Performance panel.

This section lists options that customize the Console. Most of the options are the same as in Console Settings.

This video shows how to hide network messages with this option both in Settings and in Console Settings.

This video shows how to enable this option both in Settings and in Console > Settings and select the context in the Console.

This video shows how to enable this option both in Settings and Console > Settings and log the XHR finished loading messages to the Console.

You can find the same option in Console > Settings.

This video shows what happens when you press Enter before and after enabling this option.

You can find the same option in Console > Settings.

You can find the same option in Console > Settings.

You can find the same option in Console > Settings.

This video shows various output previews.

In other words, it sets navigator.userActivation.isActive to true upon evaluation. You can find the same option in Console > Settings.

This video shows the evaluation result of navigator.userActivation.isActive before and after enabling this option.

You can find the same option in Console > Settings.

This section lists options that customize link handling for Chrome DevTools extensions.

This section lists options that control how DevTools saves the changes you make.

For more information, see Local Overrides.

This section lists options that control the Debugger behavior.

Reload the page to see if and how the page depends on JavaScript while loading.

When JavaScript is disabled, Chrome shows the corresponding icon in the address bar and DevTools shows a warning icon next to Sources.

By default, the Debugger tries to trace async operations if the framework you're using supports such tracing.

For more information, see View async stack traces.

This section lists options that have global effects in DevTools.

This video first shows how to click a link and open a new tab *without* DevTools. Then when you enable this option, a new tab opens *with* DevTools.

This video first shows how DevTools "jumps" as you type a search query. Then when you enable this option, DevTools takes you to the first result when you press Enter.

This section lets you set up the synchronization of settings between devices.

To use this setting, first enable Chrome Sync. For more information, see Sync settings.

---

## Shortcuts Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/settings/shortcuts

**Contents:**
- Shortcuts Stay organized with collections Save and categorize content based on your preferences.
- Customize shortcuts
- Add shortcuts to unassigned actions
- Restore default shortcuts

Sofia Emelianova GitHub

Settings > Shortcuts lists default shortcuts you can use while focused in DevTools to speed up your workflow.

For a full list of default shortcuts, see Keyboard shortcuts.

To customize keyboard shortcuts:

In the Shortcuts tab, hover over any shortcut and click the Edit button.

Put the cursor in the text bar and press any convenient combination of keys (chord). DevTools notifies you if the combination is already in use.

Record a new combination and click the Check button.

To revert or delete changes, click Back or Delete.

By default, DevTools doesn't assign shortcuts to all available actions.

For example, to toggle light and dark theme preference with a keystroke, in the Settings > Shortcuts > Rendering section, set your own shortcut as described in Customize shortcuts.

To bring back defaults, click Restore default shortcuts in the bottom-right corner of the Settings > Shortcuts tab.

---

## WebAuthn: Emulate authenticators Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/webauthn

**Contents:**
- WebAuthn: Emulate authenticators Stay organized with collections Save and categorize content based on your preferences.
- Overview
- Open the WebAuthn panel
- Enable the virtual authenticator environment
- Add a virtual authenticator
  - Register a new credential
  - Export and remove credentials
- Rename an authenticator
- Activate an authenticator
- Remove a virtual authenticator

Fawaz Mohammad GitHub Jecelyn Yeen X GitHub Bluesky Homepage Sofia Emelianova GitHub

Use the WebAuthn panel to create and interact with software-based virtual authenticators.

The WebAuthn panel lets you add, rename, and remove authenticators. Register credentials, which are like users, to an authenticator and monitor IDs, User Handles and Sign Counts as you test.

Alternatively, in the top right corner, click More Options > More tools > WebAuthn to open the WebAuthn panel.

To add a new virtual authenticator:

In the New authenticator section, configure the following options:

Click the Add button.

You can now see a section with your newly-created authenticator.

The Authenticator section includes a Credentials table. The table is empty until a credential is registered to the authenticator.

To register a new credential, you need to have a web page that uses WebAuthn, for example, our demo page.

On the demo page, you can click the Authenticate button multiple times. Observe the Credentials table. The Sign Count of the credential will increase accordingly.

You can export or remove a credential by clicking the Export or Remove buttons.

A newly created authenticator is set to active automatically. DevTools supports only one active virtual authenticator at any point of time.

To deactivate authentication, remove the currently active authenticator.

To activate an authenticator, select its Active radio button.

To remove a virtual authenticator, click its Remove button.

---

## Accessibility features reference Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/accessibility/reference

**Contents:**
- Accessibility features reference Stay organized with collections Save and categorize content based on your preferences.
- Overview of accessibility features in Chrome DevTools
- Audit a page's accessibility
  - See also: aXe extension
- Test content reflow with the Device Toolbar
- The Accessibility tab
  - View an element's position in the accessibility tree
  - (Preview) Explore the full-page accessibility tree
  - View an element's ARIA attributes
  - View the source order of elements on screen

Kayce Basques X GitHub Sofia Emelianova GitHub

This page is a comprehensive reference of accessibility features in Chrome DevTools. It is intended for web developers who:

The purpose of this reference is to help you discover all of the tools available in DevTools that can help you examine a page's accessibility.

See Navigating Chrome DevTools With Assistive Technology if you're looking for help on navigating DevTools with an assistive technology like a screen reader.

See Learn Accessibility if you'd like to learn how to develop accessible websites.

This section explains how DevTools fits into your overall accessibility toolkit.

When determining whether a page is accessible, you need to have 2 general questions in mind:

In general, DevTools can help you fix errors related to question #2, because these errors are easy to detect in an automated fashion. Question #1 is just as important, but unfortunately DevTools can't help you there. The only way to find errors related to question #1 is to try using a page with a keyboard or screen reader yourself. See How To Do An Accessibility Review to learn more.

In general, use the accessibility checks under the Lighthouse panel to determine if:

In DevTools, click the Lighthouse panel. DevTools shows you various configuration options.

For Device, select Mobile if you want to simulate a mobile device. This option changes differently your user agent string and resizes the viewport. If the mobile version of the page displays differently than the desktop version, this option could have a significant effect on the results of your audit.

In the Lighthouse section, make sure that Accessibility is enabled. Disable the other categories if you want to exclude them from your report. Leave them enabled if you want to discover other ways to improve the quality of your page.

The Throttling section lets you throttle the network and CPU, which is useful when analyzing load performance. This option should be irrelevant to your accessibility score, so you can use whatever you prefer.

The Clear Storage checkbox lets you clear all storage before loading the page, or preserve storage between page loads. This option is also probably irrelevant to your accessibility score, so you can use whatever you prefer.

Click Generate Report. After 10 to 30 seconds, DevTools provides a report. Your report gives you various tips on how to improve the page's accessibility.

Click an audit to learn more about it.

Click Learn More to view that audit's documentation.

You may prefer to use the aXe extension or Lighthouse extension rather than the Lighthouse panel that is available by default in Chrome. They generally provide the same information, since aXe is the underlying engine that powers the Lighthouse panel. The aXe extension has a different UI and describes audits slightly differently.

One advantage that the aXe extension has over the Audits panel is that it lets you inspect and highlight failing nodes.

The Web Content Accessibility Guidelines (WCAG) reflow criterion recommends that web content remain viewable without loss of information even when the viewport is resized or changes orientation. By aligning content to a single column, users who use enlarged text are supported. To test how your content reflows, resize the viewport dynamically with the Device toolbar in the Lighthouse panel.

To resize the viewport, drag the handles to whatever dimensions you need. For the specific dimensions to test, see the WCAG reflow success criterion.

The Accessibility tab is where you can view the accessibility tree, ARIA attributes, and computed accessibility properties of DOM nodes.

To open the Accessibility tab:

You can drag the Accessibility tab to the front for quicker access in the future.

The accessibility tree is a subset of the DOM tree. It only contains elements from the DOM tree that are relevant and useful for displaying the page's contents in a screen reader.

Inspect an element's position in the accessibility tree from the Accessibility tab.

This view lets you explore only a single node and its ancestors. To explore the whole accessibility tree, follow the steps below.

The full-page view of the accessibility tree lets you explore the whole tree and helps you better understand how your web content is exposed to assistive technology.

To explore the accessibility tree:

On the action bar at the top, click Reload DevTools.

In the upper right corner of the Elements panel, toggle the accessibility_new Switch to Accessibility Tree view button.

Browse the accessibility tree. You can expand nodes or click to see details under Computed properties.

Select a node and click the accessibility_new Switch to DOM tree view button to toggle back to DOM tree.

The corresponding DOM node is selected now. This is a great way to understand the mapping between the DOM node and its accessibility tree node.

ARIA attributes ensure that screen readers have all of the information that they need in order to properly represent a page's contents.

View an element's ARIA attributes in the Accessibility tab.

The elements on the page don't always appear in the order they are in the source. This might confuse users who depend on assistive technology to navigate the web.

To view and debug the source order on your website:

In the viewport, DevTools outlines nested elements with borders and marks them with numbers corresponding to their source order.

Some accessibility properties are dynamically calculated by the browser. These properties can be viewed in the Computed Properties section of the Accessibility tab.

View an element's computed accessibility properties in the Accessibility tab.

Use the Rendering tab to emulate certain CSS media features without manually specifying them in your code or testing environment. These media features change the appearance of your web page based on the user's device preferences. To test your page's visual accessibility, open the Rendering tab and explore the following options:

DevTools can automatically find low-contrast issues and suggest better colors to help you fix them. See Make your website more readable to learn more.

---

## Make your website more readable Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/accessibility/contrast

**Contents:**
- Make your website more readable Stay organized with collections Save and categorize content based on your preferences.
- Discover low contrast text
  - Contrast issues in the CSS Overview panel
  - (Preview) Contrast issues in the Issues tab
  - Contrast issues in a Lighthouse report
- Fix low contrast text
- Save the changes
- What's next?

Sofia Emelianova GitHub

Low contrast texts make your website less readable for all users, even more so for users with vision deficiencies. DevTools can automatically find low contrast issues and suggest better colors to help you fix them.

To discover low contrast text:

Get a list of all contrast issues using one of the three panels:

In the Contrast issues table, hover over an element and click the link next to it.

Fix the issue as described in the Fix low contrast text section.

To get a list of issues:

Expand the contrast issues DevTools found, then expand the elements table, and click a link next to the element.

Fix the issue as described in the Fix low contrast text section.

To fix a low contrast issue:

Click Inspect at the top-right corner of DevTools and hover over the element in the viewport. DevTools shows a tooltip for this element.

Notice the warning sign next to the contrast ratio value in the tooltip. The contrast ratio measures the difference in brightness between the foreground (text color) and background colors.

Open the Color Picker next to the color declaration of the element's text and, in the Color Picker, expand the Contrast ratio section.

The Color Picker tells you the contrast ratio doesn't meet the AA or AAA levels of WebAIM guidelines.

Click the Use suggested color button next to the AAA level. The Color Picker applies the text color that complies to the contrast ratio guidelines.

Alternatively, to pick a color manually, you can drag the circle in the shades preview. To stay within the AA or AAA level, pick a color below the top or bottom line respectively.

Similarly, fix all the contrast issues you found with the CSS Overview panel, Issues tab, or Lighthouse report.

To save the changes you made in DevTools:

---

## Ignore List Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/settings/ignore-list

**Contents:**
- Ignore List Stay organized with collections Save and categorize content based on your preferences.
- Ignore Chrome Extensions scripts
- Ignore known third-party scripts
- Ignore a custom list of scripts
- Manage a custom list of ignored scripts

Sofia Emelianova GitHub

Settings > Ignore List lets you configure the list of scripts the debugger ignores.

To enable or disable all ignore listing for the debugger:

With ignore-listing enabled, you can further customize the list of scripts to ignore.

When using the Sources panel of Chrome DevTools to step through code, sometimes you pause on code that you don't recognize. You're probably paused on the code of one of the Chrome Extensions that you've installed.

In Settings > Ignore List, enable two checkboxes:

To make the debugger skip known third-party scripts, check Settings > Ignore List > Automatically add known third-party scripts to ignore list.

DevTools adds third-party scripts to the ignore list based on the ignoreList property in source maps. Frameworks and bundlers need to supply this information.

For example, frameworks like Angular and Nuxt support this feature.

By default, the Debugger ignores scripts from /node_modules/ and /bower_components/. To ignore an additional single script or a custom pattern of scripts:

To enable or disable ignoring of a specific script or pattern of script names, in Settings > Ignore List > Custom exclusion rules, check or clear the checkbox next to the script or pattern.

To edit or remove a script or a pattern of script names, click or buttons that appear on hover.

---

## Navigate Chrome DevTools with assistive technology Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/accessibility/navigation

**Contents:**
- Navigate Chrome DevTools with assistive technology Stay organized with collections Save and categorize content based on your preferences.
- Overview
- Keyboard shortcuts
- Open DevTools
- Navigate between panels
  - Navigate by keyboard
    - Known issues
  - Navigate by Command Menu
- Elements panel
  - Inspect an element on the page

Rob Dodson X GitHub Homepage

This guide aims to help users who primarily rely on assistive technology like screen readers access and use Chrome DevTools. Chrome DevTools is a suite of web developer tools built into the Google Chrome browser. See Accessibility Reference if you're looking for DevTools features related to improving the accessibility of a web page.

The accessibility of DevTools is a work-in-progress. Some panels and tabs work better with assistive technology than others. This guide walks you through the panels which are the most accessible and highlights specific issues you may encounter along the way.

Before starting, it helps to have a mental model of how the DevTools UI is structured. DevTools is divided into a series of panels which are organized into an ARIA tablist. For example:

Within the content area of each panel, there are a number of different tools, often referred to as tabs or panes in the documentation. For instance, the Elements panel contains additional tabs to inspect event listeners, the accessibility tree, and much more. The distinction between tabs and panes is somewhat arbitrary. The only reason you'll see one term or the other is to maintain consistency with the rest of the official DevTools documentation.

The DevTools Keyboard Shortcuts reference is a helpful cheatsheet. Be sure to bookmark it and refer back to it as you explore the different panels.

To get started, read through Open Chrome DevTools. There are a number of ways to open DevTools, either through keyboard shortcuts or menu items.

To focus a specific panel, use the Command Menu:

For example, to open the Elements panel:

Opening a panel this way directs focus to the contents of the panel itself. In the case of the Elements panel, focus moves into the DOM Tree.

The DOM Tree is laid out as an ARIA tree. See Navigate the DOM Tree with a keyboard for an example.

For example, typing h3 and pressing Control+Enter or Command+Enter (Mac) changes the element's start and end tags to h3.

The Elements panel contains additional tabs for inspecting things like the CSS applied to an element or its place in the accessibility tree.

The DOM Tree turns elements with href attributes into focusable links, so you may need to press Tab more than once to reach the Styles pane.

The DOM Breakpoints and Properties tabs are not keyboard accessible.

In the Styles pane you'll find controls for filtering styles, toggling element states (such as :active and :focus), toggling classes, and adding new classes. There is also a powerful style inspection tool to explore and modify styles currently applied to the element that's in focus in the DOM Tree.

The key concept to understand about the Styles pane is that it only shows styles for the currently-selected node in the DOM Tree. For example, suppose you're done inspecting the styles of a <header> node, and now you want to look at the styles for a <footer> node. To do that, you first need to select the <footer> node in the DOM Tree. You might find it faster to use the Inspect workflow to inspect a node that's in the general vicinity of the footer node (such as a link within the footer), which focuses the DOM Tree, and then use your keyboard to navigate to the exact node that you're interested in.

Because all of the style tools connect in one way or another back to the Styles pane, it makes sense to become an expert in this tool first.

Be sure to read through the Styles pane keyboard reference for additional shortcuts.

To toggle an element's state, such as :active or :focus:

Adjacent to the Toggle Element State button is the Element Classes button. Move focus to it by pressing Tab then Enter. Focus moves into an edit text field labeled Add New Class.

The Element Classes button is primarily used for adding existing classes to an element. For example, if your stylesheet contained a helper class named .clearfix you could press . inside of the edit text field to see a suggestion list of classes and use the Down Arrow to find the .clearfix suggestion. Or type the class name out yourself and press Enter to apply it.

Adjacent to the Element Classes button is the New Style Rule button. Move focus to it by pressing Tab and press Enter. Focus moves into an editable text field inside of the style inspector. The initial text content of the field is the tag name of the element that is selected in the DOM Tree. You may type any class name you want into this field and then press Tab to assign CSS properties to it.

With focus on the Computed tab, press Tab to move focus inside and explore its contents. Within the Computed tab there are controls for exploring which CSS properties are actually applied to an element in order of specificity.

Press Tab until you reach the collection of computed styles. These are presented as an ARIA tree. Expanding a listbox reveals which CSS selectors are applying the computed style. These selectors are organized by specificity. A screen reader announces the computed value, which CSS selector is currently matching, the filename of the stylesheet that contains the selector, and the line number for the selector.

From within the Elements panel you may inspect the event listeners applied to an element using the Event Listeners tab. With focus on the Styles pane, press the Right Arrow to navigate to the Event Listeners tab.

Event listeners are presented as an ARIA tree. You may use the arrow keys to navigate them. A screen reader announces the name of the DOM object that the event listener is attached to, as well as the file name where the event listener is defined and its line number.

With focus on the Accessibility pane, press Tab to move focus inside and explore its contents. Within the Accessibility pane there are controls for exploring the accessibility tree, the ARIA attributes applied to an element, and its computed accessibility properties.

The Accessibility Tree is presented as an ARIA tree where each treeitem corresponds to an element in the DOM. The tree announces the computed role for the selected node. Generic elements like div and span are announced as "GenericContainer" in the tree. Use the arrow keys to traverse the tree and explore parent-child relationships.

The Audits panel let's you run a series of tests against a site to check for common issues related to performance, accessibility, SEO, and a number of other categories.

The audit report is organized into sections that correspond with each of the audit categories. The report opens with a list of scores for each category. These scores are also links which can be used to skip to the relevant sections. Within each section are expandable details elements, which contain information relating to passed or failed audits. By default, only failing audits are shown. Each section ends with a final details element which contains all of the passed audits.

To run a new audit, use Shift+Tab to exit the report and look for the Perform An Audit button.

---

## Track element focus Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/accessibility/focus

**Contents:**
- Track element focus Stay organized with collections Save and categorize content based on your preferences.

Kayce Basques X GitHub

Suppose that you're testing the keyboard navigation accessibility of a page. When navigating the page with the Tab key, the focus ring sometimes disappears because the element that has focus is hidden. To track the focused element in DevTools:

Click Create Live Expression .

For more information, see Watch JavaScript values in real-time with Live Expressions.

Type document.activeElement.

Click outside of the Live Expression UI to save.

The value that you see below document.activeElement is the result of the expression. Since that expression always represents the focused element, you now have a way to always keep track of which element has focus.

---

## Run commands in the Command Menu Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/command-menu

**Contents:**
- Run commands in the Command Menu Stay organized with collections Save and categorize content based on your preferences.
- Open the Command Menu
- Open files
  - Open ignore-listed files
- Capture area screenshots
- See other available actions

Kayce Basques X GitHub Sofia Emelianova GitHub

The Command Menu provides a fast way to navigate the Chrome DevTools UI and accomplish common tasks, such as disabling JavaScript. You may be familiar with a similar feature in Visual Studio Code called the Command Palette, which was the original inspiration for the Command Menu.

To open the Command Menu:

If you use the workflow outlined in Open the Command Menu, the Command Menu opens with a Run > prepended in the text box.

To open a file instead, delete the > character and start typing a filename.

The Run prepend changes to Open and DevTools searches for relevant files instead.

Alternatively, you can go straight to the Open File menu in one of the following ways:

By default, DevTools hides the files of known third-parties. To open such files from the menu, disable the Hide ignore-listed sources option in the Sources panel.

The Command Menu lets you capture area screenshots of your website, much like the snipping tool.

To take an area screenshot, follow these steps:

To discover more ways to take screenshots with DevTools, see 4 ways to capture screenshots with DevTools.

To see other actions available from the Command Menu, delete the > character and type ?.

---

## Set up workspaces to save changes to source files Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/workspaces

**Contents:**
- Set up workspaces to save changes to source files Stay organized with collections Save and categorize content based on your preferences.
- Overview
- Generate metadata for a connection
- Connect a workspace folder
- Save a change back to source folder
  - Save changes to CSS
  - Save changes to HTML
    - Why can't you change HTML from the Elements panel?
  - Save changes to JavaScript
- Remove a workspace folder connection

Kayce Basques X GitHub Sofia Emelianova GitHub

Save changes you make in DevTools back to source files on your computer by setting up a workspace. You can automatically connect a workspace folder to DevTools by serving a configuration file, or you can manually add a workspace location in the Sources panel.

An automatic (or manual) connection to a workspace folder lets you save a change that you make in DevTools to a local copy of the same file on your computer. For example, suppose:

With a workspace folder connected, the changes that you make in the Sources panel to CSS, HTML, and JavaScript files are saved to the source code on your computer. However, DevTools doesn't save changes to DOM that you make in the Elements panel.

Moreover, DevTools is usually able to map the optimized code back to your original source code with the help of source maps.

To let DevTools discover your workspace folder automatically, generate a random version 4 UUID and put it in the following JSON file:

Then place the JSON file in path/to/project/root/folder/.well-known/appspecific/com.chrome.devtools.json.

Lastly, run your local HTTP server and make sure to serve the JSON file too.

Alternatively, you can skip this step and manually set up a folder connection.

In Sources > Workspace, click Connect next to your folder.

When prompted, click Edit files to allow DevTools access to your folder.

Once connected, you can open the folder in the Workspaces tab.

The Workspace tab shows you a green dot next to HTML, CSS, and JavaScript files. These green dots mean that DevTools has established a mapping between the network resources of the page, and the files in the folder.

You can save changes to any CSS, HTML, and JavaScript files in the connected workspace folder.

To save changes to CSS:

Make a change to your CSS.

Save the change, for example, by pressing Ctrl / Cmd + S and see the applied change back in your source file. The Sources panel shows you a green dot next to the filename.

To learn the workflow, watch the video:

To save changes to HTML:

Make a change to your HTML.

Save the change, for example, by pressing Ctrl / Cmd + S and see the applied change back in your source file. The Sources panel shows you a green dot next to the filename.

Reload the page to see the change take effect.

To learn the workflow, watch the video:

In short, the DOM Tree !== HTML.

To save changes to JavaScript:

Make a change to your JavaScript.

Save the change, for example, by pressing Ctrl / Cmd + S and see the applied change back in your source file. The Sources panel shows you a green dot next to the filename.

If your local HTTP server listens for live source file changes and reloads the page automatically, you'll see the changes applied once you save them in DevTools. Otherwise, redeploy your local server.

To learn the workflow, watch the video:

To remove a workspace folder connection, in Sources > Workspace, right-click the folder, select Remove from workspace from the drop-down menu, and click Remove.

Open DevTools on your locally-hosted page.

In Sources > Workspace, click Add folder manually. Then select a folder with your source files.

Then follow step 3 and 4 in Connect a workspace folder.

If you're using a modern framework, it probably transforms your source code from a format that's easy for you to maintain into a format that's optimized to run as quickly as possible. A workspace folder connection is usually able to map the optimized code back to your original source code with the help of source maps.

The DevTools community works to support the capabilities provided by source maps across a variety of frameworks and tools. If you run into issues while using a workspace with your framework of choice, or you get it working after some custom configuration, start a thread in the mailing list or ask a question on Stack Overflow to share your knowledge with the rest of the DevTools community.

All the already set up folders you can manage under Settings > Workspace.

Next, learn how to use DevTools to change CSS and debug JavaScript.

Local overrides is another DevTools somewhat similar feature that lets you mock web content or request headers. This way, you freely experiment with changes to a page without waiting for backend to catch up. With local overrides, the changes persist across page loads but don't map to your page's source code.

**Examples:**

Example 1 (unknown):
```unknown
{
  "workspace": {
    "uuid": "UUID",
    "root": "path/to/project/root/folder"
  }
}
```

---

## Override web content and HTTP response headers locally Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/overrides

**Contents:**
- Override web content and HTTP response headers locally Stay organized with collections Save and categorize content based on your preferences.
- How it works
- Limitations
- Set up local overrides
- Override web content
  - Override XHR or fetch requests to mock remote resources
  - Track your local changes
- Override HTTP response headers
  - Edit all response header overrides

Sofia Emelianova GitHub

With local overrides, you can unblock your workflow by prototyping and testing changes and fixes without waiting for the backend, third-parties, or APIs to support them.

Use local overrides to mock remote resources even if you don't have access to them. You can mock responses to requests and various files, for example, HTTP response headers and web content, including XHR and fetch requests.

For example, local overrides can help in the following use cases:

Local overrides also lets you keep the changes you make in DevTools across page loads.

You can also save your changes directly to source files. See Edit and save files with Workspaces.

Local overrides work for network response headers and for most file types, including XHR and fetch requests, with a couple of exceptions:

Instead, you can edit HTML files in the Sources panel.

You can override web content or response headers right away in the Network panel:

Once local overrides are set up and enabled, depending on what you are about to override, DevTools takes you to:

To temporarily disable local overrides or delete all the override files, navigate to Sources > Overrides and clear the check_box_outline_blank Enable Local Overrides checkbox or click block Clear respectively.

To delete a single override file or all overrides in a folder, right-click the file or folder in Sources > Overrides, select Delete, then click OK in the dialog. This action can't be undone and you will have to manually recreate the deleted overrides.

To quickly see all overrides, in the Network panel, right-click a request and select Show all overrides. DevTools will take you to Sources > Overrides.

To override web content:

For example, you can edit files in Sources or CSS in Elements > Styles, unless the CSS lives in HTML files.

DevTools saves the modified files, lists them in Sources > Overrides, and shows you the icon next to the overridden files in the relevant panels and panes: Elements > Styles, Network, and Sources > Overrides.

Additionally, the Network panel shows a purple dot icon with a tooltip next to the Response tab of a request with overridden web content.

With local overrides, you don't need access to the backend and don't have to wait for it to support your changes. Mock and experiment on the fly:

To learn this workflow, watch the following video:

You can keep track of all the changes you make to web content in one place—the Changes drawer tab.

Additionally, in Sources > Overrides, you can right-click the saved file and select Open in containing folder from the context menu. This opens the folder you selected during overrides setup. There, you can modify the files with your favorite code editor.

From the Network panel, you can override HTTP response headers without access to the web server.

With response header overrides, you can locally prototype fixes for various headers, including but not limited to:

To override a response header:

Hover over a response header value and place a cursor there.

Alternatively, to enable the Response Headers editor, hover over a response header value and click edit Edit.

Modify or add a new header.

The Network panel highlights modified headers in green and removed overrides in red and crossed out. Additionally, the Headers tab shows a purple dot icon with a tooltip to let you know that headers are overridden.

refresh Refresh the page to apply the changes.

To edit all header overrides in one place:

Click .headers next to the Response Headers section.

DevTools takes you to the corresponding .headers file in Sources > Overrides.

Edit the .headers file:

To add a new override rule, click Add override rule. A rule here is a set of headers and values and a single or multiple request to apply them to.

To add a header-value pair to a rule, hover over another pair and click add.

To revert a header value, remove an added header or a rule, hover over it and click delete.

Save the .headers file with Command / Control + S.

refresh Refresh the page to apply the changes.

---
