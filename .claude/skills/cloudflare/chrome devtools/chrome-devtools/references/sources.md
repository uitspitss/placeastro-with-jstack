# Chrome-Devtools - Sources

**Pages:** 6

---

## Remote debug Android devices Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/remote-debugging

**Contents:**
- Remote debug Android devices Stay organized with collections Save and categorize content based on your preferences.
- Step 1: Discover your Android device
  - Troubleshooting: DevTools is not detecting the Android device
- Step 2: Debug content on your Android device from your development machine
  - More actions: pause, focus, reload, or close a tab
  - Inspect elements
  - Screencast your Android screen to your development machine
- Debug manually through Android Debug Bridge (adb)

Kayce Basques X GitHub Sofia Emelianova GitHub

Remote debug live content on an Android device from your Windows, Mac, or Linux computer. This tutorial teaches you how to:

The workflow below works for most users. See Troubleshooting: DevTools is not detecting the Android device for more help.

Make sure Discover USB devices is enabled.

Connect your Android device directly to your development machine using a USB cable.

If you are connecting your device for the first time, the device will show up as "Offline" and pending authentication.

In this case, accept the debugging session prompt on your device's screen.

If you see the model name of your Android device, DevTools has successfully established the connection to your device.

Make sure that your hardware is set up correctly:

Make sure that your software is set up correctly:

If you don't see the Allow USB Debugging prompt on your Android device try:

If you find a solution that is not mentioned in this section or in Chrome DevTools Devices does not detect device when plugged in, please add an answer to that Stack Overflow question, or open an issue in the developer.chrome.com repository!

In chrome://inspect/#devices on your development machine, you see your Android device's model name, followed by its serial number. Below that, you can see the version of Chrome that's running on the device, with the version number in parentheses.

In the Open tab with url text box, enter a URL and then click Open. The page opens in a new tab on your Android device.

Each remote Chrome tab gets its own section in chrome://inspect/#devices. You can interact with that tab from this section. If there are any apps using WebView, you see a section for each of those apps, too. In this example, there's only one tab open.

Click Inspect next to the URL that you just opened. A new DevTools instance opens.

The version of Chrome running on your Android device determines the version of DevTools that opens on your development machine. So, if your Android device is running a very old version of Chrome, the DevTools instance may look very different than what you're used to.

Below the URL you can find a menu to pause, focus, reload or close a tab.

Go to the Elements panel of your DevTools instance, and hover over an element to highlight it in the viewport of your Android device.

You can also tap an element on your Android device screen to select it in the Elements panel. Click Select Element on your DevTools instance, and then tap the element on your Android device screen. Note that Select Element is disabled after the first touch, so you need to re-enable it every time you want to use this feature.

Click Toggle Screencast to view the content of your Android device in your DevTools instance.

You can interact with the screencast in multiple ways:

Some notes on screencasts:

In some rare cases, an alternative method of remote debugging may be useful. For example, you may want to connect directly to the Chrome DevTools Protocol (CDP) of your Chrome on Android.

To do this, you can use the Android Debug Bridge (adb):

Connect the Android device to your development machine through:

In your development machine's command line, run adb devices -l and check if your device is present in the list.

Forward the CDP socket on the device to your machine's local port, for example, 9222. To do this, run:

Once successfully connected, see that:

For troubleshooting, see:

Optionally, you can read older guides:

**Examples:**

Example 1 (unknown):
```unknown
adb forward tcp:9222 localabstract:chrome_devtools_remote
```

---

## AI assistance for sources Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/ai-assistance/sources

**Contents:**
- AI assistance for sources Stay organized with collections Save and categorize content based on your preferences.
- Open the "AI assistance" panel
  - From the Sources panel
  - From the command menu
  - From the "More tools" menu
- Conversation context
- Prompting
  - No answer given
  - Conversation history
    - Start new

Matthias Rohmer X GitHub LinkedIn Bluesky

Use the AI assistance panel for sources to understand files loaded and used by your website.

The AI assistance panel opens in the drawer.

To open AI assistance from the Sources panel, right-click a file and select the Ask AI option.

When you open AI assistance like this, the selected file is pre-selected as context for the conversation.

Alternatively, click the floating button when hovering over a file.

To open AI assistance from the command menu, type AI and then run the Show AI assistance command, which has the Drawer badge next to it.

Alternatively, in the top right corner, select settings More options > More tools > AI assistance.

The selected file is used as context for your conversation with AI assistance. A reference to this file is shown in the bottom left corner of the panel.

Change context by clicking on another file in the Sources panel.

AI assistance is using the selected file's name, URL, source map (if available) and content to answer your questions.

Click the keyboard_arrow_down button in the Analyzing file chip after starting a conversation to see the raw data used by AI assistance.

When starting a new conversation, AI assistance for files offers example prompts to help you get started quickly.

Click any of the prompts to prefill the prompt input field at the bottom of the panel.

Alternatively, type your own prompt or question into the input field.

To send a prompt, either press Enter or click the arrow on the right hand side of the input field.

AI assistance might not provide answers due to various reasons.

If you think your prompt is something AI assistance should be able to discuss, file a bug.

Once you start a conversation, every next answer is based on your previous interactions between you and the AI.

AI assistance saves your conversation history between sessions, so you can access your previous chats even after DevTools or Chrome reload.

Use the controls in the top-left corner of the panel to control your conversation history.

To start a new conversation with the currently selected conversation context, click the add button.

To continue a past conversation, click the history button and select it from the context menu.

To delete a conversation from history, click the delete button.

AI assistance is an experimental feature. Therefore we are actively looking for your feedback to learn how we can improve answer quality and the overall experience.

Rate an answer using the thumb_up Thumbs up and thumb_down Thumbs down buttons below the answer.

To report inappropriate content, click the report button next to the voting buttons.

---

## Developer Resources: View and manually load source maps Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/developer-resources

**Contents:**
- Developer Resources: View and manually load source maps Stay organized with collections Save and categorize content based on your preferences.
- Overview
- Open Developer Resources and check status
- Filter resources by URL or Error
- Troubleshoot loading source maps
- Load a source map manually

Sofia Emelianova GitHub

Use the Developer Resources panel to check if DevTools loads source maps successfully. If required, you can load them manually.

When you open DevTools, it attempts to load source maps, if any. In case of failure, the Console logs an error similar to the following.

In the Developer Resources panel, you can view the source map load status and even load source maps manually.

To check the load statuses of source maps:

In the table, check the values in the following columns:

To focus on source maps that interest you, enter text in the textbox at the top to filter out source maps that don't contain this text in URLs or error messages.

By default, DevTools requests source maps rather than the website. Such requests may be treated as cross-origin and might not get through.

To make the website request source maps first, in the top right corner of Developer Resources, check Load through website.

If you still have issues with loading source maps, try to load them manually as described next.

If you encounter load failures or, for example, want to debug your original code on a website in production that lacks source maps, you can load them manually:

Open the deployed (processed) file in Sources, right-click it in the Editor, and select Add source map from the menu.

In the textbox, specify the source map URL and click Add.

Check if the source map appeared in Developer Resources and the original file (mapped from the deployed one) in the file tree.

Proceed to debug your original file.

---

## Debug speculation rules with Chrome DevTools Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/application/debugging-speculation-rules

**Contents:**
- Debug speculation rules with Chrome DevTools Stay organized with collections Save and categorize content based on your preferences.
- Explanation of "pre-" terms
- Speculation rules for prefetch
  - Debug prefetch speculation rules
  - Debug prefetch with the Speculative load tabs
    - Unmatched speculations
- Speculation rules for prerender
  - Debug prerender with the Speculative loads tabs
  - Debug prerender with the other DevTools panels
  - Debug speculation rules on the prerendered page

Barry Pollard X GitHub Mastodon Bluesky Homepage

Speculation rules can be used to prefetch and prerender next page navigations as detailed in the previous post. This can allow for much quicker—or even instant—page loads, greatly improving Core Web Vitals for these additional page navigations.

Debugging speculation rules can be tricky. This is particularly true for prerendered pages, as these pages are rendered in a separate renderer—kind of like a hidden background tab that replaces the current tab when activated. Therefore, the usual DevTools options cannot always be used to debug issues.

The Chrome team has been working hard to enhance DevTools support for speculation rules debugging. In this post, you'll see all the various ways of using these tools to understand a page's speculation rules, why they may not be working, and when developers can use the more familiar DevTools options—and when not.

Prefer video to reading? Check out this DevTools Tips video on debugging speculative navigations for faster page loads for a summary of what's in this document.

There's a lot of "pre-" terms that are confusing, so we'll start with an explanation of these:

Speculation rules can be used to prefetch the next navigation's document. For example, when inserting the following JSON into a page, next.html and next2.html will be prefetched:

Using speculation rules for navigation prefetches has some advantages over the older <link rel="prefetch"> syntax, such as a more expressive API and the results being stored in memory cache rather than the HTTP disk cache.

Prefetches triggered by speculation rules can be seen in the Network panel in the same way as other fetches:

The two requests highlighted in red are the prefetched resources, as can be seen by the Type column. These are fetched at Lowest priority as they are for future navigations and Chrome prioritizes the current page's resources.

Clicking on one of the rows also shows the Sec-Purpose: prefetch HTTP header, which is how these requests can be identified on the server side:

A new Speculative loads section has been added in the Application panel of Chrome DevTools, under the Background services section, to help aid in debugging speculation rules:

There are three tabs available in this section:

The Speculations tab is shown in the previous screenshot, and we can see this example page has a single set of speculation rules for prefetching 3 pages. Two of those prefetches succeeded and one failed. The icon besides the Rule set can be clicked to take you to the source of the rule set in the Elements panel. Alternatively, the Status link can be clicked to take you to the Speculations tab filtered to that ruleset.

The Speculations tab lists all the target URLs, along with the action (prefetch or prerender), which rule set they came from (as there may be multiple on a page), and the status of each speculation:

Above the URLs, a drop down can be used to show URLs from all the rule sets, or only URLs from a particular rule set. Beneath that, all the URLs are listed. Clicking on a URL gives you more detailed information.

In this screenshot, we can see the failure reason for the next3.html page (which does not exist and therefore returns a 404, which is a non-2xx HTTP status code).

The summary tab, Speculative loads, shows a Speculative loading status for this page report to show whether a prefetch or prerender was used for this page or not.

For a prefetched page, you should see a successful message when that page is navigated to:

When a navigation happens from a page with speculation rules that does not result in a prefetch or prerender being used, an additional section of the tab will show more details of why the URL did not match any of the speculation URLs. This is useful for spotting typos in your speculation rules.

For example, here we navigated to next4.html, but only next.html, next2.html, or next3.html are prefetches, so we can see this doesn't quite match any of those three rules.

The Speculative loads tabs are very useful for debugging the speculation rules themselves, and finding any syntax errors in the JSON.

As for the prefetches themselves, the Network panel is likely a more familiar place. For the prefetch failure example, you can see the 404 for the prefetch here:

However, the Speculative loads tabs become much more useful for prerendering speculation rules, which are covered next.

Prerender speculation rules follow the same syntax as prefetch speculation rules. For example:

This rule set triggers a full load and render of the specified pages (subject to certain restrictions). This can provide an instant loading experience—albeit with extra resource costs.

Unlike prefetches however, these are not available to be seen in the Network panel, as these are fetched and rendered in a separate rendering process in Chrome. This makes the Speculative loads tabs more important to debug prerender speculation rules.

The same Speculative loads screens can be used for prerender speculation rules as demonstrated with a similar demo page that attempts to prerender, instead of prefetching the three pages:

Here we see again that one of the three URLs failed to prerender, and developers can get the details per URL in the Speculations tab by clicking on the 2 Ready, 1 Failure link.

In Chrome 121 we launched document rules support. This allows the browser to pick these up from same origin links on the page, rather than listing a specific set of URLs:

This example selects all same origin links, except those beginning with /not-safe-to-prerender as prerender candidates.

It also sets the prerender eagerness to moderate which means the navigations are prerendered when the link is hovered, or clicked.

There are similar rules like this on the speculative rules demo site, and using the new Speculative loads section on this site shows the usefulness of this new tab as all the eligible URLs the browser found on the page are listed:

The Status is Not triggered as the prerender process for these has not started. However, as we hold the pointer over the links, we see the status change as each URL is prerendered:

Chrome has set limits on prerenders, including a maximum of 2 prerenders for moderate eagerness, so after hovering over the 3rd link, we see the failure reason for that URL:

Unlike prefetches, pages that have been prerendered won't show up in the current rendering processes in DevTools panels like the Network panel, because they are rendered in their own behind-the-scenes renderer.

However, it is now possible to switch the renderer used by the DevTools panels with the drop down menu in the top right drop down, or by selecting a URL in the top part of the panel and selecting Inspect:

This drop down (and the value selected) is shared across all the other panels too, such as the Network panel, where you can see the page being requested is the prerendered one:

Looking at the HTTP headers for these resources we can see they will all be set with the Sec-Purpose: prefetch;prerender header:

Or the Elements panel, where you can see the page contents, like in following screenshot where we see the <h1> element is for the prerendered page:

Or the Console panel, where you can see console logs emitted by the prerendered page:

The previous sections discuss how to debug prerendered pages on the page which initiates the prerendering. However, it's also possible for the prerendered pages themselves to provide debugging information, either by making analytics calls or logging to the console (which is viewable as described in the previous section).

Additionally, once a prerendered page is activated by the user navigating to it, the Speculative loads tab will show this status, and whether it was successfully prerendered or not. If it couldn't be prerendered an explanation as to why that was the case is provided:

Additionally—as is the case for prefetches—navigating from a page with speculation rules that did not match the current page will attempt to show you why the URLs did not match those covered in the previous page's speculation rules in the Speculative loads tab:

In this post, we have shown the various ways developers can debug prefetch and prerender speculation rules. The team is continuing to work on tooling for speculation rules, and we would love to hear suggestions from the developers as to what other ways would be helpful for debugging this exciting new API. We encourage developers to raise an issue on the Chrome issue tracker for any feature requests or bugs spotted.

Thumbail image by Nubelson Fernandes on Unsplash.

**Examples:**

Example 1 (unknown):
```unknown
<script type="speculationrules">
  {
    "prefetch": [
      {
        "source": "list",
        "urls": ["next.html", "next2.html"],
        "tag": "rule-set-tag-1"
      }
    ]
  }
</script>
```

Example 2 (unknown):
```unknown
<script type="speculationrules">
  {
    "prerender": [
      {
        "source": "list",
        "urls": ["next.html", "next2.html"],
        "tag": "rule-set-tag-1"
      }
    ]
  }
</script>
```

Example 3 (unknown):
```unknown
<script type="speculationrules">
{
  "prerender": [
    {
      "source": "document",
      "where": {
        "and": [
          {"href_matches": "/*"},
          {"not": { "href_matches": "/not-safe-to-prerender/*"}}
        ]
      },
      "eagerness": "moderate"
    }
  ]
}
</script>
```

---

## Search: Find text across all loaded resources Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/search

**Contents:**
- Search: Find text across all loaded resources Stay organized with collections Save and categorize content based on your preferences.
- Overview
- Open the Search panel
- Search for text across all loaded resources
  - Rerun a query, expand, and clear results
- Search for text in a specific tool

Sofia Emelianova GitHub

Use the Search panel to find text across all loaded resources.

Alternatively, use built-in search bars to find text in a resource opened in a specific tool.

The Search panel lets you find text across all loaded resources with the option to use regular expressions or case-sensitivity. Once you find the text, you can view its source in the Sources panel.

You can open the Search panel in several ways. First, open DevTools, then do one of the following:

To search for text across all loaded resources, in the search bar on the Search panel, type your query and press Enter.

When DevTools finds several matches in a single line, the search results list all of them with the same line number. Click a search result and DevTools opens the line in Sources and scrolls the match into view.

To make your query case-sensitive, toggle the match_case Match case button.

To search for text that matches a regular expression, toggle the regular_expression Regular expression button.

To rerun your search query, click Refresh.

To expand all search results:

To clear your search results, click Clear.

To narrow your search scope to a resource opened in a specific tool, you can use a built-in search bar if the tool supports it.

Search bars have up and down buttons to jump to previous and next search results.

To open a built-in search bar in a specific tool, press Command+F (Mac) or Control+F (Windows/Linux).

Not all DevTools panels and tabs have a built-in search bar but those that do, often provide tool-specific features. Below is a list of tools with search bars and their features.

---

## 

**URL:** https://developer.chrome.com/docs/devtools/ai-assistance

**Contents:**
  - AI assistance
- Run first prompts
- What can AI assistance help you with
  - Fix styling bugs
  - Analyze network requests
  - Understand source files
  - Investigate page performance
- See AI assistance in action
  - Hangar
  - Overflow

Supercharge your development workflow with Gemini integrated directly into Chrome DevTools. Streamline debugging with AI assistance for styling, performance, network and sources.

Get the feeling of Gemini in Chrome DevTools by running the example prompts in the interactive tutorial below.

Styling issues can be difficult to debug. Get a detailed explanation of your element's styles and get help in fixing layout and styling bugs:

Request and response headers often contain important information not obvious at a glance. Use AI assistance to dig in:

It's rare you wrote all the code on your website - not sure what a certain script is used for? AI assistance can help:

Poor core web vitals? Finding the root cause for a sluggish website can be difficult. AI assistance can investigate and propose solutions for you:

One of the images is not cropped the same way as the others?

Element is not visible?

To learn more about security headers of a given resource...

Something went wrong? Quickly create a detailed bug report.

This feature is experimental and subject to future changes. It may generate inaccurate or offensive information that doesn't represent Google's views. Vote on the responses to help us improve it and keep the feedback coming!

---
