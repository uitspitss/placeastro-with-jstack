# Chrome-Devtools - Recorder

**Pages:** 3

---

## Features reference Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/recorder/reference

**Contents:**
- Features reference Stay organized with collections Save and categorize content based on your preferences.
- Learn and customize shortcuts
- Edit user flows
- Share user flows
  - Export a user flow
  - Export in a custom format by installing an extension
  - Import a user flow
  - Replay with external libraries
- Debug user flows
  - Slow down the replay

Sofia Emelianova GitHub Jecelyn Yeen X GitHub Bluesky Homepage

Discover ways to share user flows, edit them and their steps in this comprehensive features reference of the Chrome DevTools Recorder panel.

To learn the basics of working with the Recorder panel, see Record, replay, and measure user flows.

Use shortcuts to navigate the Recorder faster. For a list of default shortcuts, see Recorder panel keyboard shortcuts.

To open a hint that lists all the shortcuts right in the Recorder, click help Show shortcuts in the top right corner.

To customize Recorder shortcuts:

On the top of the Recorder panel, there are options for you to:

Export a recording. To further customize the script or share it for bug reporting purposes, you can export the user flow in one of the following formats:

For more information on the formats, see Export a user flow.

Import a recording. Only in JSON format.

Delete a recording. Delete the selected recording.

You can also edit the recording's name by clicking the edit button next to it.

You can export and import user flows in the Recorder. This is useful for bug reporting because you can share an exact record of the steps that reproduce a bug. You can also export and replay it with external libraries.

To export a user flow:

Click download Export at the top of the Recorder panel.

Select one of the following formats from the drop-down list:

You can do the following with each default export option:

Puppeteer (including Lighthouse analysis). This export option is the same as the previous one but it includes code that generates a Lighthouse analysis.

Run the script and check out the output in a flow.report.html file:

See Recorder extensions.

To import a user flow:

The Puppeteer Replay is an open source library maintained by the Chrome DevTools team. It is built on top of Puppeteer. It is a command line tool, you can replay JSON files with it.

Apart from that, you can transform and replay JSON files with the following 3rd party libraries.

Transform JSON user flows to custom scripts:

Replay JSON user flows:

Like any code, sometimes you have to debug the recorded user flows.

To help you debug, the Recorder panel lets you slow down the replays, set breakpoints, step through the execution, and inspect code in various formats in parallel with steps.

By default, the Recorder replays the user flow as fast as it can. To understand what happens in the recording, you can slow down the replay speed:

To inspect the code of a user flow in various formats:

Expand the format drop-down list to select a format that you use to export user flows.

It can be one of the three default formats (JSON, @puppeteer/replay, Puppeteer script or a format provided by an extension.

Proceed to debug your recording by editing step parameters and values. The code view isn't editable but it updates accordingly as you make changes to steps on the left.

To set a breakpoint and execute step by step:

You can edit any step in the recording by clicking the button next to it, both during the recording and after.

You can also add missing steps and remove accidentally recorded ones.

Sometimes, you may need to add steps manually. For example, the Recorder doesn't automatically capture hover events because this pollutes the recording and not all such events are useful. However, UI elements such as drop-down menus can appear only on hover. You can manually add hover steps to user flows that depend on such elements.

To manually add a step:

During recording, you can assert, for example, HTML attributes and JavaScript properties. To add an assertion:

The Recorder creates a configurable waitForElement step.

Specify selectors for this step.

Configure the step but don't change its waitForElement type. For example, you can specify:

Proceed to record the rest of the user flow and then stop the recording.

Click Replay. If an assertion fails, the Recorder displays an error after a timeout.

Watch the following video to see this workflow in action.

Instead of exporting the entire user flow, you can copy a single step to the clipboard:

You can copy steps in various formats: JSON, Puppeteer, @puppeteer/replay, and those provided by extensions.

To remove an accidentally recorded step, right-click the step or click the three-dot icon next to it and select Remove step.

Additionally, the Recorder automatically adds two separate steps to the start of every recording:

To perform in-page automation without reloading the page, remove the navigation step as described above.

Specify its type: click, doubleClick, hover, (input) change, keyUp, keyDown, scroll, close, navigate (to a page), waitForElement, waitForExpression, or setViewport.

Other properties depend on the type value.

Specify the required properties below the type.

Click the corresponding buttons to add optional type-specific properties and specify them.

For a list of available properties, see Step properties.

To remove an optional property, click the Remove button next to it.

To add or remove an element to or from an array property, click the + or - buttons next to the element.

Each step can have the following optional properties:

Other common properties available for most of the step types are:

Type-specific properties are:

There are two properties that make the replay pause:

The waitForElement property makes the step wait for the presence (or absence) of a number of elements identified by a selector. For example, the following step waits for less than three elements to be on the page that match the selector .my-class.

The waitForExpression property makes the step wait for a JavaScript expression to resolve to true. For example, the following step pauses for two seconds and then resolves to true allowing the replay to continue.

In case your page has slow network requests or lengthy animations, the replay can fail on steps that exceed the default timeout of 5000 milliseconds.

To avoid this problem, you can adjust the default timeout for each step at once or set separate timeouts for specific steps. Timeouts on specific steps overwrite the default.

To adjust the default timeout for each step at once:

Click Replay settings to make the Timeout box editable.

In the Timeout box, set the timeout value in milliseconds.

Click Replay to see the adjusted default timeout in action.

To overwrite the default timeout on a specific step:

Expand the step and click Add timeout.

Click on the timeout: <value> and set the value in milliseconds.

Click Replay to see the step with the timeout in action.

To remove a timeout overwrite on a step, click the Delete button next to it.

When you start a new recording, you can configure the following:

In the Selector types to record set of checkboxes, choose the types of selectors to detect automatically:

For simple webpages, id attributes and CSS class attributes are sufficient for the Recorder to detect the selectors. However, that might not always be the case because:

For example, the CSS class values might be auto-generated for applications developed with modern JavaScript frameworks (for example, React, Angular, Vue) and CSS frameworks.

In these cases, you can use data-* attributes to create more resilient tests. There are already some common data-* selectors that developers use for automation. The Recorder supports them as well.

If you have the following common test selectors defined on your website, the Recorder automatically detects and uses them first:

For example, inspect the "Cappuccino" element on this demo page and see the test attributes:

Record a click on "Cappuccino", expand the corresponding step in the recording, and check the detected selectors:

You can customize the selector of a recording if the common test selectors don't work for you.

For example, this demo page uses the data-automate attribute as the selector. Start a new recording and enter the data-automate as the selector attribute.

Fill in an email address and observe the selector value ([data-automate=email-address]).

The Recorder looks for selectors in the following order depending on if you specified a custom CSS selector attribute:

There can be multiple regular CSS, XPath, and Pierce selectors. The Recorder captures:

**Examples:**

Example 1 (unknown):
```unknown
# npm i puppeteer lighthouse
node your_export.js
```

Example 2 (unknown):
```unknown
"type": "waitForElement",
  "selectors": [".my-class"],
  "operator": "<=",
  "count": 2,
```

Example 3 (javascript):
```javascript
"type": "waitForExpression",
  "expression": "new Promise(resolve => setTimeout(() => resolve(true), 2000))",
```

---

## Record, replay, and measure user flows Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/recorder

**Contents:**
- Record, replay, and measure user flows Stay organized with collections Save and categorize content based on your preferences.
- Open the Recorder panel
- Introduction
- Record a user flow
- Replay a user flow
  - Simulate slow network
- Measure a user flow
- Edit steps
  - Expand steps
  - Add and remove selectors from a step

Jecelyn Yeen X GitHub Bluesky Homepage Sofia Emelianova GitHub

Take a glance at the new Recorder panel (preview feature) with the video below.

Complete this tutorial to learn how to use the Recorder panel to record, replay, and measure user flows.

For more information on how to share the recorded user flows, edit them and their steps, see the Recorder features reference.

Click on More options > More tools > Recorder.

Alternatively, use the Command Menu to open the Recorder panel.

We will be using this coffee ordering demo page. Checkout is a common user flow among shopping websites.

In the next sections, we will walk you through how to record, replay and audit the following checkout flow with the Recorder panel:

After recording a user flow, you can replay it by clicking on the Replay button.

You can see the user flow replay on the page. The replay progress is shown in the Recorder panel as well.

If you made a misclick during recording or something doesn't work, you can debug your user flow: slow down its replay, set a breakpoint, and execute it step by step.

You can simulate a slow network connection by configuring the Replay settings. For example, expand the Replay settings, select Slow 3G in the Network drop-down.

More settings might be supported in the future. Share with us the replay settings you would like to have!

You can measure the performance of a user flow by clicking on the Measure performance button. For example, checkout is a critical user flow of a shopping website. With the Recorder panel, you can record the checkout flow once and measure it regularly.

Clicking on the Measure performance button will first trigger a replay of the user flow, then open the performance trace in the Performance panel.

Learn how to analyze your page's runtime performance with the Performance panel. You can enable the Web Vitals checkbox in the Performance panel, to view the Web Vitals metrics, identify opportunities to improve your user browsing experience.

Let's walk through the basic options to edit the steps within the recorded workflow.

For a comprehensive list of editing options, see Edit steps in features reference.

Expand each step to see the details of the action. For example, expand the Click Element "Cappuccino" step.

The step above shows two selectors. For more information, see Understand the recording's selector.

When replaying the user flow, the Recorder tries to query the element with one of the selectors by sequence. For example, if the Recorder successfully queries the element with the first selector, it will skip the second selector and proceed to the next step.

You can add or remove any selectors. For example, you can remove the selector #2 because just aria/Cappuccino is sufficient in this case. Hover over the selector #2 and click on - to remove it.

The selector is editable too. For example, if you want to select Mocha instead of Cappuccino, you can:

Edit the selector value to aria/Mocha instead.

Alternatively, click the Select button and then click Mocha on the page.

Replay the flow now, it should select Mocha instead of Cappuccino.

Try to edit other step properties such as type, target, value and more.

There are options to add and remove steps too. This is useful if you want to add an extra step or remove an accidentally added step. Instead of re-recording the user flow, you can just edit it:

Right-click the step you want to edit or click the three-dot icon next to it.

You can select Remove step to remove it. For example, the Scroll event after the Mocha step is not necessary.

Say, you want to wait until the 9 coffees display on the page before performing any steps. In the Mocha step menu, select Add step before.

In Assert Element, edit the new step with the following details:

Replay the flow now to see the changes.

Congratulations, you have completed the tutorial!

To explore more features and workflows (for example, import and export) related to the Recorder, see the Recorder features reference.

---

## Customize the Recorder with extensions Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/recorder/extensions

**Contents:**
- Customize the Recorder with extensions Stay organized with collections Save and categorize content based on your preferences.
- Install extensions
- Troubleshooting
- Build your own extension

Sofia Emelianova GitHub Jecelyn Yeen X GitHub Bluesky Homepage

You can customize the Recorder and integrate it into your workflow by installing third-party extensions that suit the tools you use.

Check out the collection of extensions.

To integrate the Recorder with your tools, install extensions:

This screenshot shows custom export and replay options provided by the extensions.

If you don't see export or replay options after installing an extension, check or do the following:

To further customize the Recorder to your needs, you can build your own extension:

---
