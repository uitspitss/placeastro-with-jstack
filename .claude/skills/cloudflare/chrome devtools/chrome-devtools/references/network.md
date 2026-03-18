# Chrome-Devtools - Network

**Pages:** 13

---

## Network conditions: Override the user agent string Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/device-mode/override-user-agent

**Contents:**
- Network conditions: Override the user agent string Stay organized with collections Save and categorize content based on your preferences.
- Overview
- Open the Network conditions panel
- Override the user agent string
- Edit user-agent client hints
- Throttle the network speed

Kayce Basques X GitHub Dale St. Marthe LinkedIn

Use the Network conditions panel to override the user agent string and emulate different network speeds.

Overriding the user agent string changes how the browser identifies itself to web servers. This means the browser can simulate earlier versions or different browsers entirely, which is useful for testing responsive design, compatibility, and feature detection.

Note that overriding the user agent string does not change how Chrome browser functions internally, it changes content that Chrome is served.

Open Network conditions panel from the Network panel, or manually through DevTools.

To use the Network panel to open the Network conditions panel, follow these steps:

To open Network conditions panel manually:

Open the Command menu by pressing:

Start typing Network conditions, select Show Network conditions, and press Enter. DevTools displays the Network conditions panel at the bottom of your DevTools window.

Alternatively, in the top right corner, select more_vert More options > More tools > Network conditions.

To override the user agent string from the Network conditions panel, follow these steps:

In the User agent section disable the Use browser default checkbox.

Select a user agent string from the list, or enter your own custom string.

Refresh the page to view results.

The Network conditions panel lets you customize the User-Agent Client Hints of a selected user agent string.

To use this feature, follow these steps:

Click the arrow_drop_downUser agent client hints drop-down. A form will appear with the relevant values autofilled.

Edit the form by clicking deletedelete to delete items, and Add brand to add to the User agent and Full version lists.

When done, click the Update button at the bottom of the form.

Refresh the page to view results.

To throttle the network speed from the Network conditions panel click the Network throttling list, then select either Fast 3G, Slow 3G or offline.

Additionally, the Network panel lets you throttle network speed in a similar way, just open the Network panel and select the speed you want from the Throttle list in the action bar.

You can also use the Performance panel to throttle network speed. Open the Performance panel, click settingsSettings and then select Fast 3G or Slow 3G from the Network list.

Set your own custom network throttling parameters by creating a Network Throttling Profile. To learn how, see Throttling.

---

## Profile Node.js performance with the Performance panel Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/performance/nodejs

**Contents:**
- Profile Node.js performance with the Performance panel Stay organized with collections Save and categorize content based on your preferences.
- What's a CPU profile?
- Open DevTools for Node
  - Node.js
  - Deno
- Profile the CPU
- Analyze profiling results
- Profile with the console.profile() command
  - Node.js
  - Deno

Jecelyn Yeen X GitHub Bluesky Homepage Nancy Li LinkedIn Dale St. Marthe LinkedIn

Use the Performance panel to profile the performance of Node.js and Deno applications.

A CPU profile is a report that shows how the CPU was used over a period of time. It can show which programs were using the most CPU time, which processes were running, and how much time was spent in each state. With CPU profiles, you can identify performance bottlenecks and optimize CPU resource utilization.

In the command line, run:

Connect to DevTools for Node in one of the following ways:

In the address bar enter chrome://inspect, then click one of the following:

To profile the CPU, open the Performance panel and click the radio_button_checked Record button two times to start and end profiling.

After you stop the recording, the Performance panel organizes and displays data about the recording in a "profile". Use the following tabs to analyze the profiling data:

Timeline overview. Located at the top under the activity bar. Shows CPU and NET activity charts on a timeline. Use it to identify performance bottlenecks.

Bottom-Up: Use this tab to inspect a selected portion of the recording and see aggregated time spent on individual activities.

Call Tree: This tab displays the root activities of a selected portion of the recording. Root activities also have their call stacks nested. Use this tab to identify which activity is causing the most work.

Event Log: This tab lists activities from a selected portion of the recording in the order that they occurred.

DevTools lets you profile JavaScript CPU performance with the console.profile() command. You can add this command to your code and then run the file, or copy and paste your code into the Console. The Performance panel will show you the results.

To use this command, follow these steps:

Enclose your code with console.profile() and console.profileEnd(), for example:

Run your code in one of two ways:

If you're using the Console, open DevTools for Node, paste your code to the Console, and press Enter.

In the command line, run:

Then open DevTools for Node.

Once the profile is completed, the result will be shown in the Performance panel automatically.

**Examples:**

Example 1 (unknown):
```unknown
node --inspect file-name.js
```

Example 2 (unknown):
```unknown
deno --inspect file-name.js
```

Example 3 (unknown):
```unknown
console.profile( profile ${i} );
// Code to be profiled
doSomething();
console.profileEnd();
```

Example 4 (unknown):
```unknown
node --inspect file-name.js
```

---

## Annotate and share your performance findings Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/performance/annotations

**Contents:**
- Annotate and share your performance findings Stay organized with collections Save and categorize content based on your preferences.
- Overview
- Annotate items in the performance trace
  - Generate annotations for Main track with Gemini
    - When you use this feature for the first time...
  - Remove or hide annotations
- Save and share a recording
- Load a recording

Sofia Emelianova GitHub Barry Pollard X GitHub Mastodon Bluesky Homepage

Once you have recorded a performance trace and analyzed it, you can annotate items (with Gemini), time ranges, and create connections. Then, you can share your findings with your colleagues or upload their annotated traces to inspect.

To annotate a recording, open the Annotations tab in the left_panel_open sidebar on the left of the Performance panel. There are several ways to add an annotation:

In this example, in the Network track, there are two annotated requests, a connection between them, and an annotated time range highlighted in pink. The Annotations tab shows the number of annotations next to its tab name, in this example, 4.

Naming things is hard! DevTools can use Gemini to suggest a label name in the Main track based on the context.

You will see the following screen that explains that AI may not always get things right, that the AI works by sending the necessary trace data to Google to analyse and make the suggestion, and that you can control this feature in the settings tab.

Once that's accepted, you can now ask Gemini to generate a label.

To generate a label, double-click on one of the Main track items in the trace, then click Generate label next to the input field. Gemini can suggest a label based on the stack trace.

You can tweak the suggested text as you see fit.

All generated annotations are added to the Annotations tab.

To delete an annotation, hover over it in the Annotations tab and click the delete Delete button next to it. Alternatively, edit the annotation by double-clicking it and delete the text. Or use the right-click context menu.

To hide annotations from the performance trace, check check_box Hide annotations at the bottom of the Annotations tab.

To save a recording and later share it with your annotated performance findings, in the action bar at the top of the Performance panel, click download Download and select Save trace.

Alternatively, select Save trace without annotations.

To load an annotated (or not) recording, click upload Upload in the action bar at the top of the Performance panel.

The Performance panel will show annotations if they are present in the trace.

---

## Analyze runtime performance Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/performance

**Contents:**
- Analyze runtime performance Stay organized with collections Save and categorize content based on your preferences.
- Get started
  - Simulate a mobile CPU
  - Set up the demo
  - Record runtime performance
- Analyze the results
  - Analyze frames per second
    - Bonus: Open the FPS meter
  - Find the bottleneck
  - Bonus: Analyze the optimized version

Kayce Basques X GitHub

Runtime performance is how your page performs when it is running, as opposed to loading. This tutorial teaches you how to use the Chrome DevTools Performance panel to analyze runtime performance. In terms of the RAIL model, the skills you learn in this tutorial are useful for analyzing the Response, Animation, and Idle phases of your page.

In this tutorial, we will use the Performance panel to find a performance bottleneck on a live page. To begin:

Load the following page in your Incognito window. This is the demo that you're going to profile. The page shows a bunch of little blue squares moving up and down.

https://googlechrome.github.io/devtools-samples/jank/

Press Command+Option+I (Mac) or Control+Shift+I (Windows, Linux) to open DevTools.

Mobile devices have much less CPU power than desktops and laptops. Whenever you profile a page, use CPU Throttling to simulate how your page performs on mobile devices.

For CPU, select 4x slowdown. DevTools throttles your CPU so that it's 4 times slower than usual.

It's hard to create a runtime performance demo that works consistently for all readers of this website. This section lets you customize the demo to ensure that your experience is relatively consistent with the screenshots and descriptions you see in this tutorial, regardless of your particular setup.

Click Optimize. The blue squares should move faster and more smoothly.

Click Un-Optimize. The blue squares move slower and with more jank again.

When you ran the optimized version of the page, the blue squares move faster. Why is that? Both versions are supposed to move each square the same amount of space in the same amount of time. Take a recording in the Performance panel to learn how to detect the performance bottleneck in the un-optimized version.

In DevTools, click Record radio_button_checked. DevTools captures performance metrics as the page runs.

Click Stop. DevTools stops recording, processes the data, then displays the results in the Performance panel.

Wow, that's an overwhelming amount of data. Don't worry, it'll make more sense shortly.

Once you have a performance recording, you can analyze just how poor the page's performance is, and find the cause(s).

The main metric for measuring the performance of any animation is frames per second (FPS). Users are happy when animations run at 60 FPS.

Look at the FPS chart. Whenever you see a red bar above FPS, it means that the framerate dropped so low that it's probably harming the user experience.

Below the FPS chart you see the CPU chart. The colors in the CPU chart correspond to the colors in the Summary tab, at the bottom of the Performance panel. The fact that the CPU chart is full of color means that the CPU was maxed out during the recording. Whenever you see the CPU maxed out for long periods, it's a cue to find ways to do less work.

Hover your mouse over the FPS, CPU, or NET charts. DevTools shows a screenshot of the page at that point in time. Move your mouse left and right to replay the recording. This is called scrubbing, and it's useful for manually analyzing the progression of animations.

In the Frames section, hover your mouse over one of the green squares. DevTools shows you the FPS for that particular frame. Each frame is probably well below the target of 60 FPS.

Of course, with this demo, it's pretty obvious that the page is not performing well. But in real scenarios, it may not be so clear, so having all of these tools to make measurements comes in handy.

Another handy tool is the FPS meter, which provides real-time estimates for FPS as the page runs.

In the Rendering panel, enable Show Rendering stats. A new overlay appears in the top-right of your viewport.

Disable the FPS Meter and press Escape to close the Rendering panel. You won't be using it in this tutorial.

Now that you've measured and verified that the animation is not performing well, the next question to answer is: why?

Note the Summary tab. When no events are selected, this tab shows you a breakdown of activity. The page spent most of its time rendering. Since performance is the art of doing less work, your goal is to reduce the amount of time spent doing rendering work.

Expand the Main section. DevTools shows you a flame chart of activity on the main thread, over time. The x-axis represents the recording, over time. Each bar represents an event. A wider bar means that event took longer. The y-axis represents the call stack. When you see events stacked on top of each other, it means the upper events caused the lower events.

There's a lot of data in the recording. Zoom in on a single Animation Frame Fired event by clicking, holding, and dragging your mouse over the Overview, which is the section that includes the FPS, CPU, and NET charts. The Main section and Summary tab only display information for the selected portion of the recording.

Note the red triangle in the top-right of the Task and layout events. Whenever you see a red triangle, it's a warning that there may be an issue related to this event. A red triangle on a Task means that it was a long task.

Click the Animation Frame Fired event. The Summary tab now shows you information about that event. Clicking the link next to Initiated by causes DevTools to highlight the event that initiated the Animation Frame Fired event. Also note the app.update @ link. Clicking that jumps you to the relevant line in the source code.

Under the app.update event, there's a bunch of purple events. If they were wider, it looks as though each one might have a red triangle on it. Click one of the purple Layout events now. DevTools provides more information about the event in the Summary tab. Indeed, there's a warning about forced reflows (another word for layout).

In the Summary tab, click the link next to app.update @ under Animation Frame Requested. DevTools takes you to the line of code that forced the layout.

Phew! That was a lot to take in, but you now have a solid foundation in the basic workflow for analyzing runtime performance. Good job.

Using the workflows and tools that you just learned, click Optimize on the demo to enable the optimized code, take another performance recording, and then analyze the results. From the improved framerate to the reduction in events in the Main section's flame chart, you can see that the optimized version of the app does much less work, resulting in better performance.

The foundation for understanding performance is the RAIL model. This model teaches you the performance metrics that are most important to your users. See Measure Performance With The RAIL Model to learn more.

To get more comfortable with the Performance panel, practice makes perfect. Try profiling your own pages and analyzing the results. If you have any questions about your results, open a Stack Overflow question tagged with google-chrome-devtools. Include screenshots or links to reproducible pages, if possible.

To become an expert in runtime performance, you've got to learn how the browser translates HTML, CSS, and JS into pixels on a screen. The best place to start is the Rendering Performance Overview. The Anatomy Of A Frame dives into even more detail.

Last, there are many ways to improve runtime performance. This tutorial focused on one particular animation bottleneck to give you a focused tour through the Performance panel, but it's only one of many bottlenecks you may encounter. The rest of the Rendering Performance series has a lot of good tips for improving various aspects of runtime performance, such as:

---

## Performance features reference Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/evaluate-performance/reference

**Contents:**
- Performance features reference Stay organized with collections Save and categorize content based on your preferences.
- Record performance
  - Record runtime performance
  - Record load performance
  - Capture screenshots while recording
  - Force garbage collection while recording
  - Show recording settings
  - Disable JavaScript samples
  - Throttle the network while recording
  - Throttle the CPU while recording

Kayce Basques X GitHub Sofia Emelianova GitHub

This page is a comprehensive reference of Chrome DevTools features related to analyzing performance.

See Analyze runtime performance for a guided tutorial on how to analyze a page's performance using Chrome DevTools.

You can record runtime or load performance.

Record runtime performance when you want to analyze the performance of a page as it's running, as opposed to loading.

Interact with the page. DevTools records all page activity that occurs as a result of your interactions.

Click Record again or click Stop to stop recording.

Record load performance when you want to analyze the performance of a page as it's loading, as opposed to running.

Click Start profiling and reload page . DevTools first navigates to about:blank to clear any remaining screenshots and traces. Then DevTools records performance metrics while the page reloads and then automatically stops the recording a couple seconds after the load finishes.

DevTools automatically zooms in on the portion of the recording where most of the activity occurred.

In this example, the Performance panel shows the activity during a page load.

Enable the Screenshots checkbox to capture a screenshot of every frame while recording.

See View a screenshot to learn how to interact with screenshots.

While you are recording a page, click Collect garbage mop to force garbage collection.

Click Capture settings to expose more settings related to how DevTools captures performance recordings.

By default, the Main track of a recording displays detailed call stacks of JavaScript functions that were called during the recording. To disable these call stacks:

The following screenshots show the difference between disabling and enabling JavaScript samples. The Main track of the recording is much shorter when sampling is disabled, because it omits all of the JavaScript call stacks.

This example shows a recording with disabled JS samples.

This example shows a recording with enabled JS samples.

To throttle the network while recording:

In the drop-down menu, the Performance panel may also recommend a default throttling preset or a preset that approximates the experience of your users based on field data.

To throttle the CPU while recording:

Throttling is relative to your computer's capabilities. For example, the 2x slowdown option makes your CPU operate 2 times slower than its usual ability. DevTools can't truly simulate the CPUs of mobile devices, because the architecture of mobile devices is very different from that of desktops and laptops.

In the drop-down menu, the Performance panel may also recommend a default throttling preset or a preset that approximates the experience of your users based on field data.

To view the statistics of your CSS rule selectors during long-running Recalculate Style events:

For more details, see how to Analyze CSS selector performance during Recalculate Style events.

To view detailed paint instrumentation:

To learn how to interact with the paint information, see View layers and View paint profiler.

See Annotate and share your performance findings.

After making a recording, press Clear recording to clear that recording from the Performance panel.

After you record runtime performance or record load performance, the Performance panel provides a lot of data for analyzing the performance of what just happened.

The Performance panel consolidates performance insights from the Lighthouse report and the now deprecated Performance insights panel. These insights can suggest ways to improve performance and provide guided analysis on the following performance issues, including but not limited to:

The insights pass when there's no detected issues. The Insights tab lists them under the collapsed Passed insights section at the bottom. The insights that didn't pass are listed in their own dedicated sections.

To make use of insights:

To help you navigate, as you hover over performance trace, the Performance panel does the following:

To closely inspect your performance recording, you can select a portion of a recording, scroll a long flame chart, zoom in and out, and use breadcrumbs to jump between zoom levels.

To use keyboard shortcuts to quickly navigate the recording, first, choose your preferred style of keyboard navigation.

In the top-right corner of the panel, click help Show shortcuts and select one of the following:

The shortcuts dialog also provides you with a cheatsheet of the available shortcuts.

Under the action bar of the Performance panel and at the top of the recording, you can see the Timeline overview section with the CPU and NET charts.

To select a portion of a recording, click and hold, then drag left or right across the Timeline overview.

To select a portion using the keyboard:

To select a portion using a trackpad:

The Timeline overview lets you create multiple nested breadcrumbs in succession, increasing zoom levels, and then jump freely between zoom levels.

To create and use breadcrumbs:

To remove the childs of a breadcrumb, right-click the parent breadcrumb and select Remove child breadcrumbs.

To scroll a long flame chart in the Main track or any of its neighbors, click and hold, then drag in any direction until what you are looking for comes into view.

To better focus on your code, you can add irrelevant scripts to ignore list.

To ignore scripts, do one of the following:

The panel will automatically collapse excessive nesting for such scripts and mark them as On ignore list (REGULAR_EXPRESSION).

In the compress Show ignore list settings dialog, you can turn the ignore list rules on and off.

To remove a script from ignore list, right-click it in the flame chart and select Remove script from ignore list or hover over it in the compress Show ignore list settings dialog and click delete Remove.

DevTools saves the ignore list rules you add in settings Settings > Ignore list.

Additionally, to focus on first-party scripts only, check check_box Dim 3rd parties. The Performance panel will gray out third-party scripts.

You can search across the activities in the Main track and requests in the Network track.

To open a search box at the bottom of the Performance panel, press:

This example shows a regular expression in the search box at the bottom that finds any activity that begins with E.

To cycle through activities that match your query:

The Performance panel shows a tooltip over the activity selected in the search box.

To modify query settings:

To hide the search box, click Cancel.

To declutter the performance trace, you can change the order of tracks and hide the irrelevant ones in track configuration mode.

To move and hide tracks:

Watch the video to see this workflow in action.

The Performance panel saves track configuration for new traces but not in next DevTools sessions.

Use the Main track to view activity that occurred on the page's main thread.

Click an event to view more information about it in the Summary tab, including but not limited to: duration (and self duration), link to the corresponding line in the source script, origin URL (with an entity name, if known) stack trace, if any, and timings breakdown in a pie chart.

The Performance panel outlines the selected event in blue.

This example shows more information about the get function call event in the Summary tab.

Excessive reliance on third-party party code can negatively impact load performance. The Performance panel can help you visually distinguish between first- and third-party events in the trace, so you may make a more informed decision on reducing or deferring loading of third-party code to prioritize your page's content.

To focus only on the performance of first-party code:

Within a selected range on the Timeline overview and when none of the events are selected, the Summary tab shows a 1st / 3rd party table that lists the respective transfer sizes and main thread times of the following:

To see related events highlighted in the trace and the rest grayed out, hover over the entities in the table. To leave an entity's events highlighted, select it in the table. To remove the highlighting, click any empty space in the trace.

To open activities grouped by this entity in the Bottom-up tab, hover over the entity in the table and click account_tree Bottom-up next to it.

The Performance panel represents main thread activity in a flame chart. The x-axis represents the recording over time. The y-axis represents the call stack. The events on top cause the events below.

This example shows a flame chart in the Main track. A click event caused an anonymous function call. This function, in turn, called onEndpointClick_, which called handleClick_, and so on.

The Performance panel assigns scripts random colors to break up the flame chart and make it more readable. In the earlier example, function calls from one script are colored light blue. Calls from another script are colored light pink. The darker yellow represents scripting activity, and the purple event represents rendering activity. These darker yellow and purple events are consistent across all recordings.

Long tasks are also highlighted with a red triangle, and with the part over 50 milliseconds shaded in red:

In this example, the task took more than 400 milliseconds, so the part representing the last 350 milliseconds is shaded in red, while the initial 50 milliseconds is not.

Additionally, the Main track shows information on CPU profiles started and stopped with profile() and profileEnd() console functions.

To hide the detailed flame chart of JavaScript calls, see Disable JavaScript samples. When JS samples are disabled, you see only the high-level events such as Event (click) and Function Call.

The Main track can show arrows that connect the following initiators and the events they caused:

To see the arrows, find either an initiator or the event it caused in the flame chart and select it.

When selected, the Summary tab shows Initiator for links for initiators and Initiated by links for the events they caused. Click them to jump between the corresponding events.

To declutter the flame chart in the Main thread, you can hide selected functions or their children:

In the Main track, right-click a function and choose one of the following options or press the corresponding shortcut:

A arrow_drop_down drop-down button appears next to the function name with hidden children.

To see the number of hidden children, hover over the arrow_drop_down drop-down button.

To reset a function with hidden children or the whole flame chart, select the function and press U or right-click any function and select Reset trace respectively.

To add a script to the ignore list, right-click a script in the chart and select Add script to ignore list.

The chart collapses ignored scripts, marks them as On ignore list, and adds them to the Custom exclusion rules in settings Settings > Ignore list. Ignored scripts are saved until you remove them either from the trace or from the Custom exclusion rules.

After recording a page, you don't need to rely solely on the Main track to analyze activities. DevTools also provides three tabular views for analyzing activities. Each view gives you a different perspective on the activities:

You can click an item in any of the three tables (and in the 1st / 3rd party table in the Summary tab) to keep the corresponding events highlighted in the trace and dim the rest as you browse the performance trace.

To help you find what you are looking for faster, all three tabs have buttons for advanced filtering next to the Filter bar:

Each tabular view in the Performance panel shows links for activities such as functions calls. To help you debug, DevTools finds the corresponding function declarations in source files. Additionally, if the appropriate source maps are present and enabled, DevTools automatically finds the original files.

Click a link to open a source file in the Sources panel.

Here's an explanation of the root activities concept that's mentioned in the Call tree tab, Bottom-up tab, and Event log sections.

Root activities are those which cause the browser to do some work. For example, when you click a page, the browser fires an Event activity as the root activity. That Event then might cause a handler to execute.

In the Main track's flame chart, root activities are at the top of the chart. In the Call Tree and Event log tabs, root activities are the top-level items.

See The Call Tree tab for an example of root activities.

Use the Call tree tab to view which root activities cause the most work.

The Call tree tab only displays activities during the selected portion of the recording. See Select a portion of a recording to learn how to select portions.

In this example, the top-level of items in the Activity column, such as Event, Paint, and Composite Layers are root activities. The nesting represents the call stack. In this example, the Event caused the Function Call, which caused button.addEventListener, which caused b, and so on.

Self Time represents the time directly spent in that activity. Total Time represents the time spent in that activity or any of its children.

Click Self Time, Total Time, or Activity to sort the table by that column.

Use the Filter box to filter events by activity name.

By default the Grouping menu is set to No Grouping. Use the Grouping menu to sort the activity table based on various criteria.

Use the Bottom-up tab to view which activities directly took up the most time in aggregate.

The Bottom-up tab only displays activities during the selected portion of the recording. See Select a portion of a recording to learn how to select portions.

In the Main track flame chart of this example, you can see that almost all of the time was spent executing the three calls to wait(). Accordingly, the top activity in the Bottom-up tab is wait. In the flame chart, the yellow below the calls to wait are actually thousands of Minor GC calls. Accordingly, you can see that in the Bottom-up tab, the next most expensive activity is Minor GC.

The Self Time column represents the aggregated time spent directly in that activity, across all of its occurrences.

The Total Time column represents aggregated time spent in that activity or any of its children.

On the right side of the Call tree or Bottom-up tabs, click right_panel_open Show heaviest stack to reveal the Heaviest stack table.

This table shows you which children of the selected activity took the longest time to execute. Hover over an item in the table to see the corresponding event highlighted in the Main track and the rest dimmed.

This way, you can visually find in the performance trace the nested activities from the call stack that take the most time.

Use the Event log tab to view activities in the order in which they occurred during the recording.

The Event log tab only displays activities during the selected portion of the recording. See Select a portion of a recording to learn how to select portions.

The Start Time column represents the point at which that activity started, relative to the start of the recording. The start time of 1573.0 ms for the selected item in this example means that activity started 1573 ms after the recording started.

The Self Time column represents the time spent directly in that activity.

The Total Time columns represents time spent directly in that activity or in any of its children.

Click Start Time, Self Time, or Total Time to sort the table by that column.

Use the Filter box to filter activities by name.

Use the Duration menu to filter out any activities that took less than 1 ms or 15 ms. By default the Duration menu is set to All, meaning all activities are shown.

Disable the Loading, Scripting, Rendering, or Painting checkboxes to filter out all activities from those categories.

In an overlay with vertical lines across the performance trace, you can see important performance markers, such as:

Hover over the marker names at the bottom of the trace to see their timestamp.

On the Timings track, view your custom performance markers such as:

Select a marker to see more details in the Summary tab, including its timestamp, total time, self time, and the detail object. For performance.mark() and performance.measure() calls, the tab also shows stack traces.

View user interactions on the Interactions track to track down potential responsiveness issues.

To view interactions:

In this example, the Interactions track shows the Pointer interaction. Interactions have whiskers that indicate input and presentation delays at processing time boundaries. Hover over the interaction to see a tooltip with input delay, processing time, and presentation delay.

The Interactions track also shows Interaction to Next Paint (INP) warnings for interactions longer than 200 milliseconds in the Summary tab and in a tooltip on hover:

The Interactions track marks the interactions over 200 milliseconds with a red triangle in the top right corner.

View layout shifts on the Layout shifts track. Shifts are shown as purple diamonds and are grouped in clusters (purple lines) based on their proximity on the timeline.

To highlight an element that caused a layout shift in the viewport, hover over the corresponding diamond.

To see more information about a layout shift or shifts in the Summary tab with timings, scores, elements, and potential culprits, click the corresponding diamond or cluster.

For more information, see Cumulative Layout Shift (CLS).

View animations on the Animations track. Animations are named as corresponding CSS properties or elements if any, for example, transform or my-element. Non-compositing animations are marked with red triangles in the top right corner.

Select an animation to see more details in the Summary tab, including reasons for compositing failures.

View GPU activity in the GPU section.

View raster activity in the Thread Pool section.

DevTools provides numerous ways to analyze frames per second:

The Frames section tells you exactly how long a particular frame took.

Hover over a frame to view a tooltip with more information about it.

This example shows a tooltip when you hover over a frame.

The Frames section can show four types of frames:

This example shows a tooltip when you hover over a partially presented frame.

Click a frame to view even more information about the frame in the Summary tab. DevTools outlines the selected frame in blue.

Expand the Network section to view a waterfall of network requests that occurred during the performance recording.

Next to the Network track name, there's a legend with color-coded request types.

Render blocking requests are marked with a red triangle in the upper right corner.

Hover over a request to see a tooltip with:

When you click a request, the Network track draws an arrow from its initiator to the request.

Additionally, the Performance panel shows you the Summary tab with more information about the request, including but not limited to Initial Priority and (final) Priority fields. If their values differ, the fetch priority of the request has changed during the recording. For more information, see Optimizing resource loading with the Fetch Priority API.

The Summary tab also shows a breakdown of the request's timings.

In this example, the request for www.google.com is represented by a line on the left (|–), a bar in the middle with a dark portion and a light portion, and a line on the right (–|).

If present, the Summary tab also shows a breakdown of server timings for network requests that implement server-side rendering technologies. For these requests, the Performance panel takes the data from the Server-Timing response header.

You can find another timings breakdown in the Network tab. Right-click the request in the Network track or its URL in the Summary tab and click Reveal in Network panel. DevTools takes you to the Network panel and selects the corresponding request. Open its Timing tab.

Here's how these two breakdowns map to each other:

Enable the Memory checkbox to view memory metrics from the last recording.

DevTools displays a new Memory chart, above the Summary tab. There's also a new chart below the NET chart, called HEAP. The HEAP chart provides the same information as the JS Heap line in the Memory chart.

This example shows memory metrics above the Summary tab.

The colored lines on the chart map to the colored checkboxes above the chart. Disable a checkbox to hide that category from the chart.

The chart only displays the region of the recording that is selected. In the earlier example, the Memory chart shows only the memory usage for the start of the recording, up to around the 1000ms mark.

When analyzing a section like Network or Main, sometimes you need a more precise estimate of how long certain events took. Hold Shift, click and hold, and drag left or right to select a portion of the recording. At the bottom of your selection, DevTools shows how long that portion took.

In this example, the 488.53ms timestamp at the bottom of the selected portion indicates how long that portion took.

See Capture screenshots while recording to learn how to enable screenshots.

Hover over the Timeline overview to view a screenshot of how the page looked during that moment of the recording. The Timeline overview is the section that contains the CPU, FPS, and NET charts.

You can also view screenshots by clicking a frame in the Frames section. DevTools displays a small version of the screenshot in the Summary tab.

This example shows the screenshot for the 195.5ms frame in the Summary tab when you click it in the Frames section.

Click the thumbnail in the Summary tab to zoom in on the screenshot.

This example shows a zoomed-in screenshot after you click its thumbnail in the Summary tab.

To view advanced layers information about a frame:

Hover over a layer to highlight it in the diagram.

This example shows the layer #39 highlighted as you hover over it.

See layer analysis in action:

To view advanced information about a paint event:

Use the Rendering tab's features to help visualize your page's rendering performance.

Open the Rendering tab.

The Frame rendering stats is an overlay that appears in the top-right corner of your viewport. It provides a real time estimate of FPS as the page runs.

See Frame rendering stats.

Use Paint Flashing to get a real time view of all paint events on the page.

Use Layer Borders to view an overlay of layer borders and tiles on top of the page.

Use Scrolling Performance Issues to identify elements of the page that have event listeners related to scrolling that may harm the performance of the page. DevTools outlines the potentially-problematic elements in teal.

See Scrolling performance issues.

---

## AI assistance for performance Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/ai-assistance/performance

**Contents:**
- AI assistance for performance Stay organized with collections Save and categorize content based on your preferences.
- Open the "AI assistance" panel
  - From the Performance panel
    - Performance insights
    - List of insights you can ask AI about
    - Performance trace view
  - From the command menu
  - From the "More tools" menu
- Conversation context
  - Performance insights

Matthias Rohmer X GitHub LinkedIn Bluesky

Use the AI assistance panel for performance to understand performance profiles recorded in the Performance panel.

The AI assistance panel opens in the drawer.

To open AI assistance from the Performance panel, first record a performance profile. Depending on what you want to investigate, you can either open the AI assistance panel from individual performance insights or for activities in the performance trace view.

In the Insights tab, open an insight, for example, LCP by phase, then click the Ask AI button.

DevTools opens the AI assistance panel with this performance insight pre-selected as context for the conversation.

To open AI assistance from the trace view, right-click an activity and select the Ask AI option.

In this case, this activity is pre-selected as context for the conversation.

To open AI assistance from the command menu, type AI and then run the Show AI assistance command, which has the Drawer badge next to it.

Alternatively, in the top right corner, select settings More options > More tools > AI assistance.

The selected performance activity is used as context for your conversation with AI assistance. A reference to this activity is shown in the bottom left corner of the panel.

If you clicked Ask AI for a specific performance insight, you will see this insight as selected context. You can click Ask AI under other insights to change your selection.

After starting a conversation, expand the Analyzing insight: ... section to see the raw data used by AI assistance.

You can select different items in the performance trace and the context will change accordingly.

AI assistance is using timings from the selected call tree to answer your prompt.

Click the keyboard_arrow_down button in the Analyzing call tree chip after starting a conversation to see the raw data used by AI assistance.

When starting a new conversation, AI assistance for performance offers example prompts to help you get started quickly.

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

## Analyze runtime performance Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/evaluate-performance

**Contents:**
- Analyze runtime performance Stay organized with collections Save and categorize content based on your preferences.
- Get started
  - Simulate a mobile CPU
  - Set up the demo
  - Record runtime performance
- Analyze the results
  - Analyze frames per second
    - Bonus: Open the FPS meter
  - Find the bottleneck
  - Bonus: Analyze the optimized version

Kayce Basques X GitHub

Runtime performance is how your page performs when it is running, as opposed to loading. This tutorial teaches you how to use the Chrome DevTools Performance panel to analyze runtime performance. In terms of the RAIL model, the skills you learn in this tutorial are useful for analyzing the Response, Animation, and Idle phases of your page.

In this tutorial, we will use the Performance panel to find a performance bottleneck on a live page. To begin:

Load the following page in your Incognito window. This is the demo that you're going to profile. The page shows a bunch of little blue squares moving up and down.

https://googlechrome.github.io/devtools-samples/jank/

Press Command+Option+I (Mac) or Control+Shift+I (Windows, Linux) to open DevTools.

Mobile devices have much less CPU power than desktops and laptops. Whenever you profile a page, use CPU Throttling to simulate how your page performs on mobile devices.

For CPU, select 4x slowdown. DevTools throttles your CPU so that it's 4 times slower than usual.

It's hard to create a runtime performance demo that works consistently for all readers of this website. This section lets you customize the demo to ensure that your experience is relatively consistent with the screenshots and descriptions you see in this tutorial, regardless of your particular setup.

Click Optimize. The blue squares should move faster and more smoothly.

Click Un-Optimize. The blue squares move slower and with more jank again.

When you ran the optimized version of the page, the blue squares move faster. Why is that? Both versions are supposed to move each square the same amount of space in the same amount of time. Take a recording in the Performance panel to learn how to detect the performance bottleneck in the un-optimized version.

In DevTools, click Record radio_button_checked. DevTools captures performance metrics as the page runs.

Click Stop. DevTools stops recording, processes the data, then displays the results in the Performance panel.

Wow, that's an overwhelming amount of data. Don't worry, it'll make more sense shortly.

Once you have a performance recording, you can analyze just how poor the page's performance is, and find the cause(s).

The main metric for measuring the performance of any animation is frames per second (FPS). Users are happy when animations run at 60 FPS.

Look at the FPS chart. Whenever you see a red bar above FPS, it means that the framerate dropped so low that it's probably harming the user experience.

Below the FPS chart you see the CPU chart. The colors in the CPU chart correspond to the colors in the Summary tab, at the bottom of the Performance panel. The fact that the CPU chart is full of color means that the CPU was maxed out during the recording. Whenever you see the CPU maxed out for long periods, it's a cue to find ways to do less work.

Hover your mouse over the FPS, CPU, or NET charts. DevTools shows a screenshot of the page at that point in time. Move your mouse left and right to replay the recording. This is called scrubbing, and it's useful for manually analyzing the progression of animations.

In the Frames section, hover your mouse over one of the green squares. DevTools shows you the FPS for that particular frame. Each frame is probably well below the target of 60 FPS.

Of course, with this demo, it's pretty obvious that the page is not performing well. But in real scenarios, it may not be so clear, so having all of these tools to make measurements comes in handy.

Another handy tool is the FPS meter, which provides real-time estimates for FPS as the page runs.

In the Rendering panel, enable Show Rendering stats. A new overlay appears in the top-right of your viewport.

Disable the FPS Meter and press Escape to close the Rendering panel. You won't be using it in this tutorial.

Now that you've measured and verified that the animation is not performing well, the next question to answer is: why?

Note the Summary tab. When no events are selected, this tab shows you a breakdown of activity. The page spent most of its time rendering. Since performance is the art of doing less work, your goal is to reduce the amount of time spent doing rendering work.

Expand the Main section. DevTools shows you a flame chart of activity on the main thread, over time. The x-axis represents the recording, over time. Each bar represents an event. A wider bar means that event took longer. The y-axis represents the call stack. When you see events stacked on top of each other, it means the upper events caused the lower events.

There's a lot of data in the recording. Zoom in on a single Animation Frame Fired event by clicking, holding, and dragging your mouse over the Overview, which is the section that includes the FPS, CPU, and NET charts. The Main section and Summary tab only display information for the selected portion of the recording.

Note the red triangle in the top-right of the Task and layout events. Whenever you see a red triangle, it's a warning that there may be an issue related to this event. A red triangle on a Task means that it was a long task.

Click the Animation Frame Fired event. The Summary tab now shows you information about that event. Clicking the link next to Initiated by causes DevTools to highlight the event that initiated the Animation Frame Fired event. Also note the app.update @ link. Clicking that jumps you to the relevant line in the source code.

Under the app.update event, there's a bunch of purple events. If they were wider, it looks as though each one might have a red triangle on it. Click one of the purple Layout events now. DevTools provides more information about the event in the Summary tab. Indeed, there's a warning about forced reflows (another word for layout).

In the Summary tab, click the link next to app.update @ under Animation Frame Requested. DevTools takes you to the line of code that forced the layout.

Phew! That was a lot to take in, but you now have a solid foundation in the basic workflow for analyzing runtime performance. Good job.

Using the workflows and tools that you just learned, click Optimize on the demo to enable the optimized code, take another performance recording, and then analyze the results. From the improved framerate to the reduction in events in the Main section's flame chart, you can see that the optimized version of the app does much less work, resulting in better performance.

The foundation for understanding performance is the RAIL model. This model teaches you the performance metrics that are most important to your users. See Measure Performance With The RAIL Model to learn more.

To get more comfortable with the Performance panel, practice makes perfect. Try profiling your own pages and analyzing the results. If you have any questions about your results, open a Stack Overflow question tagged with google-chrome-devtools. Include screenshots or links to reproducible pages, if possible.

To become an expert in runtime performance, you've got to learn how the browser translates HTML, CSS, and JS into pixels on a screen. The best place to start is the Rendering Performance Overview. The Anatomy Of A Frame dives into even more detail.

Last, there are many ways to improve runtime performance. This tutorial focused on one particular animation bottleneck to give you a focused tour through the Performance panel, but it's only one of many bottlenecks you may encounter. The rest of the Rendering Performance series has a lot of good tips for improving various aspects of runtime performance, such as:

---

## Timeline event reference Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/performance/timeline-reference

**Contents:**
- Timeline event reference Stay organized with collections Save and categorize content based on your preferences.
- Common timeline event properties
- Loading events
  - Loading event properties
- Scripting events
  - Scripting event properties
- Rendering events
  - Rendering event properties
- Painting events
  - Painting event properties

Meggin Kearney Flavio Copes

The timeline events mode displays all events triggered while making a recording. Use the timeline event reference to learn more about each timeline event type.

Certain details are present in events of all types, while some only apply to certain event types. This section lists properties common to different event types. Properties specific to certain event types are listed in the references for those event types that follow.

This section lists events that belong to Loading category and their properties.

This section lists events that belong to the Scripting category and their properties.

This section lists events that belong to Rendering category and their properties.

This section lists events that belong to Painting category and their properties.

---

## Network features reference Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/network/reference

**Contents:**
- Network features reference Stay organized with collections Save and categorize content based on your preferences.
- Record network requests
  - Stop recording network requests
  - Clear requests
  - Save requests across page loads
  - Capture screenshots during page load
  - Replay XHR request
- Change loading behavior
  - Emulate a first-time visitor by disabling the browser cache
    - Disable the browser cache from the Network conditions drawer

Kayce Basques X GitHub Sofia Emelianova GitHub

Discover new ways to analyze how your page loads in this comprehensive reference of Chrome DevTools network analysis features.

By default, DevTools records all network requests in the Network panel, so long as DevTools is open.

To stop recording requests:

Click Clear on the Network panel to clear all requests from the Requests table.

To save requests across page loads, check the Preserve log checkbox on the Network panel. DevTools saves all requests until you disable Preserve log.

Capture screenshots to analyze what users see as they wait for your page to load.

To enable screenshots, open Settings inside the Network panel and check Capture screenshots.

Reload the page while the Network panel is in focus to capture screenshots.

Once captured, you can interact with screenshots in the following ways:

To replay an XHR request, do one of the following in the Requests table:

To emulate how a first-time user experiences your site, check the Disable cache checkbox. DevTools disables the browser cache. This more accurately emulates a first-time user's experience, because requests are served from the browser cache on repeat visits.

If you want to disable the cache while working in other DevTools panels, use the Network conditions drawer.

To manually clear the browser cache at any time, right-click anywhere in the Requests table and select Clear browser cache.

There's a new class of web apps, called Progressive Web Apps, which can function offline with the help of service workers. When you're building this type of app, it's useful to be able to quickly simulate a device that has no data connection.

To simulate a completely offline network experience, select Offline from the Network throttling drop-down menu next to the Disable cache checkbox.

DevTools displays a warning icon next to the Network tab to remind you that offline is enabled.

To emulate fast 4G, slow 4G, or 3G, select the corresponding preset from the Throttling drop-down menu in the action bar at the top.

DevTools displays a warning warning icon next to the Network panel to remind you that throttling is enabled.

In addition to presets, such as slow or fast 4G, you can also add your own custom throttling profiles:

Back on the Network panel, select your new profile from the Throttling drop-down menu.

DevTools displays a warning icon next to the Network panel to remind you that throttling is enabled.

In addition to HTTP requests, DevTools throttles WebSocket connections since version 99.

To observe WebSocket throttling:

If you want to throttle the network connection while working in other DevTools panels, use the Network conditions drawer.

To manually clear browser cookies at any time, right-click anywhere in the Requests table and select Clear browser cookies.

See Override files and HTTP response headers locally.

To manually override the user agent:

To search across request headers, payloads, and responses:

Press the following shortcut to open the Search tab on the right:

In the Search tab, enter your query and press Enter. Optionally click match_case or regular_expression to turn on case sensitivity or regular expressions respectively.

Click one of the search results. The Network panel highlights in yellow the request that matched. Additionally, the panel also opens the Headers or Response tab and highlights the string that matched there, if any.

To refresh search results, click refresh Refresh. To clear results, click block Clear.

For more information on all the ways you can search in DevTools, see Search: Find text across all loaded resources.

Use the Filter box to filter requests by properties, such as the domain or size of the request.

If you can't see the box, the Filters bar is probably hidden. See Hide the Filters bar.

To invert your filter, check the Invert checkbox next to the Filter box.

You can use multiple properties simultaneously by separating each property with a space. For example, mime-type:image/gif larger-than:1K displays all GIFs that are larger than one kilobyte. These multi-property filters are equivalent to AND operations. OR operations aren't supported.

Next is a complete list of supported properties.

To filter requests by resource type, click the All, Fetch/XHR, JS, CSS, Img, Media, Font, Doc, WS (WebSocket), Wasm (WebAssembly), Manifest, or Other (any other type not listed here) buttons on the Network panel.

If you can't see these buttons, the Filters action bar is probably hidden. See Hide the Filters bar.

To show resources of multiple types simultaneously, hold Command (Mac) or Control (Windows, Linux) and then click several type filters.

Drag left or right on the Overview timeline to display only the requests that were active during that timeframe. The filter is inclusive. Any request that was active during the highlighted time is shown.

Data URLs are small files embedded into other documents. Any request that you see in the Requests table that starts with data: is a data URL.

To hide these requests, in the Filters action bar, select More filters > check_box Hide data URLs.

The status bar at the bottom displays the number of the shown requests out of the total.

To focus on the code you author, you can filter out irrelevant requests sent by extensions you may have installed in Chrome. Extension requests have URLs that start with chrome-extension://.

To hide extension requests, in the Filters action bar, select More filters > check_box Hide extension URLs.

The status bar at the bottom displays the number of the shown requests out of the total.

To filter out everything except the requests with response cookies blocked for any reason, in the Filters action bar, select More filters > check_box Blocked response cookies. Try it on this demo page.

The status bar at the bottom displays the number of the shown requests out of the total.

To find out the reason why a response cookie was blocked, select the request, open its Cookies tab, and hover over the info information icon.

Additionally, the Network panel shows a warning warning icon next to a request with cookies blocked either because of Chrome flags or configuration. Hover over the icon to see a tooltip with a clue and click it to go to the Issues panel for more information.

To filter out everything except blocked requests, in the Filters action bar, select More filters > check_box Blocked requests. To test this, you can use the Network request blocking tab in the drawer.

The Requests table highlights blocked requests in red. The status bar at the bottom displays the number of the shown requests out of the total.

To filter out everything except the requests with origin that differs from page origin, in the Filters action bar, select More filters > check_box 3rd-party requests. Try it on this demo page.

The status bar at the bottom displays the number of the shown requests out of the total.

By default, the requests in the Requests table are sorted by initiation time, but you can sort the table using other criteria.

Click the header of any column in the Requests table to sort requests by that column.

To change how the Waterfall sorts requests, right-click the header of the Requests table, hover over Waterfall, and select one of the following options:

These descriptions assume that each respective option is ranked from shortest to longest. Clicking on the Waterfall column's header reverses the order.

In this example, the Waterfall is sorted by total duration. The lighter portion of each bar is time spent waiting. The darker portion is time spent downloading bytes.

So long as DevTools is open, it logs all requests in the Network panel. Use the Network panel to analyze requests.

Use the Requests table to view a log of all requests made while DevTools has been open. Clicking or hovering over requests reveals more information about them.

The Requests table displays the following columns by default:

Status. This column can show the following values:

Type. The MIME type of the requested resource.

Initiator. The following objects or processes can initiate requests:

Size. The combined size of the response headers plus the response body, as delivered by the server.

Time. The total duration, from the start of the request to the receipt of the final byte in the response.

Waterfall. A visual breakdown of each request's activity.

Right-click the header of the Requests table and select an option to hide or show it. The displayed options have check marks next to them.

You can add or remove the following additional columns: Path, URL, Method, Protocol, Scheme, Domain, Remote address, Remote address space, Initiator address space, Cookies, Set cookies, Priority, Connection ID, Has overrides, and Waterfall.

To add a custom column to the Requests table:

If inline frames on a page initiate a lot of requests, you can make the request log friendlier by grouping them.

To group requests by iframes, open Settings inside the Network panel and check check_box Group by frame.

To view a request initiated by an inline frame, expand it in the request log.

Use the Waterfall to view the timing of requests in relation to one another. By default, the Waterfall is organized by the start time of the requests. So, requests that are farther to the left started earlier than those that are farther to the right.

See Sort by activity phase to see the different ways that you can sort the Waterfall.

To view the messages of a WebSocket connection:

To refresh the table, re-click the name of the WebSocket connection under the Name column of the Requests table.

The table contains three columns:

Messages are color-coded according to their type:

To view the events that servers stream through Fetch API, EventSource API, and XHR:

To filter events, specify a regular expression in the filter bar at the top of the EventStream tab.

To clear the list of captured events, click block Clear.

To view a preview of a response body:

This tab is mostly useful for viewing images.

To view the response body to a request:

To view HTTP header data of a request:

In the General section, DevTools shows you human-readable status message next to the received HTTP status code.

In the Response Headers section, you can hover over a header value and click the edit Edit button to override the response header locally.

By default, the Headers tab shows header names alphabetically. To view the HTTP header names in the order they were received:

Sometimes the Headers tab shows the Provisional headers are shown... warning message. This may be due to the following reasons:

The request wasn't sent over the network but was served from a local cache, which doesn't store the original request headers. In this case, you can disable caching to see the full request headers.

The network resource isn't valid. For example, execute fetch("https://jec.fish.com/unknown-url/") in the Console.

DevTools can also display only provisional headers due to security reasons.

To view the request's payload, that is, its query string parameters and form data, select a request from the Requests table and open the Payload tab.

By default, DevTools shows the payload in a human-readable form.

To view the sources of query string parameters and form data, on the Payload tab, click view source next to the Query String Parameters or Form Data sections.

To toggle URL-encoding for arguments, on the Payload tab, click view decoded or view URL-encoded.

To view the cookies sent in a request's HTTP header:

For a description of each of the columns, see Fields.

To modify cookies, see View, edit, and delete cookies.

To view the timing breakdown of a request:

See Preview a timing breakdown for a faster way to access this data.

See Timing breakdown phases explained for more information about each of the phases that you may see in the Timing tab.

To view a preview of the timing breakdown of a request, hover over the request's entry in the Waterfall column of the Requests table.

See View the timing breakdown of a request for a way to access this data that does not require hovering.

Here's more information about each of the phases you may see in the Timing tab:

To view the initiators and dependencies of a request, hold Shift and hover over the request in the Requests table. DevTools colors initiators green, and dependencies red.

When the Requests table is ordered chronologically, the first green request above the request that you're hovering over is the initiator of the dependency. If there's another green request above that, that higher request is the initiator of the initiator. And so on.

DevTools displays the timing of the DOMContentLoaded and load events in multiple places on the Network panel. The DOMContentLoaded event is colored blue, and the load event is red.

The total number of requests is listed in the status bar at the bottom of the Network panel.

DevTools lists the total size of transferred and loaded (uncompressed) resources in the status bar at the bottom of the Network panel.

See View the uncompressed size of a resource to see how large resources are after the browser uncompresses them.

When a JavaScript statement causes a resource to be requested, hover over the Initiator column to view the stack trace leading up to the request.

Check Settings > Big request rows and then look at the bottom value of the Size column.

In this example, the compressed size of the www.google.com document that was sent over the network was 43.8 KB, whereas the uncompressed size was 136 KB.

You can export or copy the list of requests, with filters applied, in several ways described next.

HAR (HTTP Archive) is a file format used by several HTTP session tools to export the captured data. The format is a JSON object with a particular set of fields.

To reduce the chances of accidental leaks of sensitive information, by default you can export the "sanitized" network log in HAR format that excludes sensitive information such as Cookie, Set-Cookie, and Authorization headers. If required, you can also export the log with sensitive data.

To save all network requests to a HAR file, pick one of the two ways:

Right-click any request in the Requests table and select Copy > Save all [listed] as HAR (sanitized) or Save all [listed] as HAR (with sensitive data).

Click download Export HAR (sanitized)... in the action bar at the top of the Network panel.

To export with sensitive data, first, turn on settings Settings > Preferences > Network > check_box Allow to generate HAR with sensitive data, then click the download Export button and select Export HAR (with sensitive data) from the drop-down menu.

Once you have a HAR file, you can import it back into DevTools for analysis in two ways:

Under the Name column of the Requests table, right-click a request, hover over Copy, and select one of the following options.

To copy a single request, its response, or stack trace:

To copy all requests:

To copy a filtered set of requests, apply a filter to the network log, right-click a request, and select:

Expand or collapse sections of the Network panel UI to focus on what's important to you.

By default, DevTools shows the Filters bar at the top of the Network panel. Click filter_alt Filter to hide it.

Use big rows when you want more whitespace in your network requests table. Some columns also provide a little more information when using big rows. For example, the bottom value of the Size column is the uncompressed size of a request and the Priority column shows both the initial (bottom value) and final (top value) fetch priority.

Open Settings and click Big request rows to see big rows.

By default, DevTools shows the Overview track. Open Settings and clear the Show overview checkbox to hide it.

---

## AI assistance for network Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/ai-assistance/network

**Contents:**
- AI assistance for network Stay organized with collections Save and categorize content based on your preferences.
- Open the "AI assistance" panel
  - From the Network panel
  - From the command menu
  - From the "More tools" menu
- Conversation context
- Prompting
  - No answer given
  - Conversation history
    - Start new

Matthias Rohmer X GitHub LinkedIn Bluesky

Use the AI assistance panel for network to understand requests sent by your website.

The AI assistance panel opens in the drawer.

To open AI assistance from the Network panel, right-click a request and select the Ask AI option.

When you open AI assistance like this, the selected network request is pre-selected as context for the conversation.

Alternatively, click the floating button next to the network request that you hover over.

To open AI assistance from the command menu, type AI and then run the Show AI assistance command, which has the Drawer badge next to it.

Alternatively, in the top right corner, select settings More options > More tools > AI assistance.

Chats with AI assistance relate to the network request currently selected in the Network panel request list. A reference to this request is shown in the bottom left corner of the panel.

Change context by clicking on another request in the Network panel.

AI assistance is using the request URL, headers, timings and the request initiator chain to answer your questions.

Click the keyboard_arrow_down Expand button in the Analyzing network data chip after starting a conversation to see the raw data used by AI assistance.

When starting a new conversation, AI assistance for network offers example prompts to help you get started quickly.

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

## Performance features reference Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/performance/reference

**Contents:**
- Performance features reference Stay organized with collections Save and categorize content based on your preferences.
- Record performance
  - Record runtime performance
  - Record load performance
  - Capture screenshots while recording
  - Force garbage collection while recording
  - Show recording settings
  - Disable JavaScript samples
  - Throttle the network while recording
  - Throttle the CPU while recording

Kayce Basques X GitHub Sofia Emelianova GitHub

This page is a comprehensive reference of Chrome DevTools features related to analyzing performance.

See Analyze runtime performance for a guided tutorial on how to analyze a page's performance using Chrome DevTools.

You can record runtime or load performance.

Record runtime performance when you want to analyze the performance of a page as it's running, as opposed to loading.

Interact with the page. DevTools records all page activity that occurs as a result of your interactions.

Click Record again or click Stop to stop recording.

Record load performance when you want to analyze the performance of a page as it's loading, as opposed to running.

Click Start profiling and reload page . DevTools first navigates to about:blank to clear any remaining screenshots and traces. Then DevTools records performance metrics while the page reloads and then automatically stops the recording a couple seconds after the load finishes.

DevTools automatically zooms in on the portion of the recording where most of the activity occurred.

In this example, the Performance panel shows the activity during a page load.

Enable the Screenshots checkbox to capture a screenshot of every frame while recording.

See View a screenshot to learn how to interact with screenshots.

While you are recording a page, click Collect garbage mop to force garbage collection.

Click Capture settings to expose more settings related to how DevTools captures performance recordings.

By default, the Main track of a recording displays detailed call stacks of JavaScript functions that were called during the recording. To disable these call stacks:

The following screenshots show the difference between disabling and enabling JavaScript samples. The Main track of the recording is much shorter when sampling is disabled, because it omits all of the JavaScript call stacks.

This example shows a recording with disabled JS samples.

This example shows a recording with enabled JS samples.

To throttle the network while recording:

In the drop-down menu, the Performance panel may also recommend a default throttling preset or a preset that approximates the experience of your users based on field data.

To throttle the CPU while recording:

Throttling is relative to your computer's capabilities. For example, the 2x slowdown option makes your CPU operate 2 times slower than its usual ability. DevTools can't truly simulate the CPUs of mobile devices, because the architecture of mobile devices is very different from that of desktops and laptops.

In the drop-down menu, the Performance panel may also recommend a default throttling preset or a preset that approximates the experience of your users based on field data.

To view the statistics of your CSS rule selectors during long-running Recalculate Style events:

For more details, see how to Analyze CSS selector performance during Recalculate Style events.

To view detailed paint instrumentation:

To learn how to interact with the paint information, see View layers and View paint profiler.

See Annotate and share your performance findings.

After making a recording, press Clear recording to clear that recording from the Performance panel.

After you record runtime performance or record load performance, the Performance panel provides a lot of data for analyzing the performance of what just happened.

The Performance panel consolidates performance insights from the Lighthouse report and the now deprecated Performance insights panel. These insights can suggest ways to improve performance and provide guided analysis on the following performance issues, including but not limited to:

The insights pass when there's no detected issues. The Insights tab lists them under the collapsed Passed insights section at the bottom. The insights that didn't pass are listed in their own dedicated sections.

To make use of insights:

To help you navigate, as you hover over performance trace, the Performance panel does the following:

To closely inspect your performance recording, you can select a portion of a recording, scroll a long flame chart, zoom in and out, and use breadcrumbs to jump between zoom levels.

To use keyboard shortcuts to quickly navigate the recording, first, choose your preferred style of keyboard navigation.

In the top-right corner of the panel, click help Show shortcuts and select one of the following:

The shortcuts dialog also provides you with a cheatsheet of the available shortcuts.

Under the action bar of the Performance panel and at the top of the recording, you can see the Timeline overview section with the CPU and NET charts.

To select a portion of a recording, click and hold, then drag left or right across the Timeline overview.

To select a portion using the keyboard:

To select a portion using a trackpad:

The Timeline overview lets you create multiple nested breadcrumbs in succession, increasing zoom levels, and then jump freely between zoom levels.

To create and use breadcrumbs:

To remove the childs of a breadcrumb, right-click the parent breadcrumb and select Remove child breadcrumbs.

To scroll a long flame chart in the Main track or any of its neighbors, click and hold, then drag in any direction until what you are looking for comes into view.

To better focus on your code, you can add irrelevant scripts to ignore list.

To ignore scripts, do one of the following:

The panel will automatically collapse excessive nesting for such scripts and mark them as On ignore list (REGULAR_EXPRESSION).

In the compress Show ignore list settings dialog, you can turn the ignore list rules on and off.

To remove a script from ignore list, right-click it in the flame chart and select Remove script from ignore list or hover over it in the compress Show ignore list settings dialog and click delete Remove.

DevTools saves the ignore list rules you add in settings Settings > Ignore list.

Additionally, to focus on first-party scripts only, check check_box Dim 3rd parties. The Performance panel will gray out third-party scripts.

You can search across the activities in the Main track and requests in the Network track.

To open a search box at the bottom of the Performance panel, press:

This example shows a regular expression in the search box at the bottom that finds any activity that begins with E.

To cycle through activities that match your query:

The Performance panel shows a tooltip over the activity selected in the search box.

To modify query settings:

To hide the search box, click Cancel.

To declutter the performance trace, you can change the order of tracks and hide the irrelevant ones in track configuration mode.

To move and hide tracks:

Watch the video to see this workflow in action.

The Performance panel saves track configuration for new traces but not in next DevTools sessions.

Use the Main track to view activity that occurred on the page's main thread.

Click an event to view more information about it in the Summary tab, including but not limited to: duration (and self duration), link to the corresponding line in the source script, origin URL (with an entity name, if known) stack trace, if any, and timings breakdown in a pie chart.

The Performance panel outlines the selected event in blue.

This example shows more information about the get function call event in the Summary tab.

Excessive reliance on third-party party code can negatively impact load performance. The Performance panel can help you visually distinguish between first- and third-party events in the trace, so you may make a more informed decision on reducing or deferring loading of third-party code to prioritize your page's content.

To focus only on the performance of first-party code:

Within a selected range on the Timeline overview and when none of the events are selected, the Summary tab shows a 1st / 3rd party table that lists the respective transfer sizes and main thread times of the following:

To see related events highlighted in the trace and the rest grayed out, hover over the entities in the table. To leave an entity's events highlighted, select it in the table. To remove the highlighting, click any empty space in the trace.

To open activities grouped by this entity in the Bottom-up tab, hover over the entity in the table and click account_tree Bottom-up next to it.

The Performance panel represents main thread activity in a flame chart. The x-axis represents the recording over time. The y-axis represents the call stack. The events on top cause the events below.

This example shows a flame chart in the Main track. A click event caused an anonymous function call. This function, in turn, called onEndpointClick_, which called handleClick_, and so on.

The Performance panel assigns scripts random colors to break up the flame chart and make it more readable. In the earlier example, function calls from one script are colored light blue. Calls from another script are colored light pink. The darker yellow represents scripting activity, and the purple event represents rendering activity. These darker yellow and purple events are consistent across all recordings.

Long tasks are also highlighted with a red triangle, and with the part over 50 milliseconds shaded in red:

In this example, the task took more than 400 milliseconds, so the part representing the last 350 milliseconds is shaded in red, while the initial 50 milliseconds is not.

Additionally, the Main track shows information on CPU profiles started and stopped with profile() and profileEnd() console functions.

To hide the detailed flame chart of JavaScript calls, see Disable JavaScript samples. When JS samples are disabled, you see only the high-level events such as Event (click) and Function Call.

The Main track can show arrows that connect the following initiators and the events they caused:

To see the arrows, find either an initiator or the event it caused in the flame chart and select it.

When selected, the Summary tab shows Initiator for links for initiators and Initiated by links for the events they caused. Click them to jump between the corresponding events.

To declutter the flame chart in the Main thread, you can hide selected functions or their children:

In the Main track, right-click a function and choose one of the following options or press the corresponding shortcut:

A arrow_drop_down drop-down button appears next to the function name with hidden children.

To see the number of hidden children, hover over the arrow_drop_down drop-down button.

To reset a function with hidden children or the whole flame chart, select the function and press U or right-click any function and select Reset trace respectively.

To add a script to the ignore list, right-click a script in the chart and select Add script to ignore list.

The chart collapses ignored scripts, marks them as On ignore list, and adds them to the Custom exclusion rules in settings Settings > Ignore list. Ignored scripts are saved until you remove them either from the trace or from the Custom exclusion rules.

After recording a page, you don't need to rely solely on the Main track to analyze activities. DevTools also provides three tabular views for analyzing activities. Each view gives you a different perspective on the activities:

You can click an item in any of the three tables (and in the 1st / 3rd party table in the Summary tab) to keep the corresponding events highlighted in the trace and dim the rest as you browse the performance trace.

To help you find what you are looking for faster, all three tabs have buttons for advanced filtering next to the Filter bar:

Each tabular view in the Performance panel shows links for activities such as functions calls. To help you debug, DevTools finds the corresponding function declarations in source files. Additionally, if the appropriate source maps are present and enabled, DevTools automatically finds the original files.

Click a link to open a source file in the Sources panel.

Here's an explanation of the root activities concept that's mentioned in the Call tree tab, Bottom-up tab, and Event log sections.

Root activities are those which cause the browser to do some work. For example, when you click a page, the browser fires an Event activity as the root activity. That Event then might cause a handler to execute.

In the Main track's flame chart, root activities are at the top of the chart. In the Call Tree and Event log tabs, root activities are the top-level items.

See The Call Tree tab for an example of root activities.

Use the Call tree tab to view which root activities cause the most work.

The Call tree tab only displays activities during the selected portion of the recording. See Select a portion of a recording to learn how to select portions.

In this example, the top-level of items in the Activity column, such as Event, Paint, and Composite Layers are root activities. The nesting represents the call stack. In this example, the Event caused the Function Call, which caused button.addEventListener, which caused b, and so on.

Self Time represents the time directly spent in that activity. Total Time represents the time spent in that activity or any of its children.

Click Self Time, Total Time, or Activity to sort the table by that column.

Use the Filter box to filter events by activity name.

By default the Grouping menu is set to No Grouping. Use the Grouping menu to sort the activity table based on various criteria.

Use the Bottom-up tab to view which activities directly took up the most time in aggregate.

The Bottom-up tab only displays activities during the selected portion of the recording. See Select a portion of a recording to learn how to select portions.

In the Main track flame chart of this example, you can see that almost all of the time was spent executing the three calls to wait(). Accordingly, the top activity in the Bottom-up tab is wait. In the flame chart, the yellow below the calls to wait are actually thousands of Minor GC calls. Accordingly, you can see that in the Bottom-up tab, the next most expensive activity is Minor GC.

The Self Time column represents the aggregated time spent directly in that activity, across all of its occurrences.

The Total Time column represents aggregated time spent in that activity or any of its children.

On the right side of the Call tree or Bottom-up tabs, click right_panel_open Show heaviest stack to reveal the Heaviest stack table.

This table shows you which children of the selected activity took the longest time to execute. Hover over an item in the table to see the corresponding event highlighted in the Main track and the rest dimmed.

This way, you can visually find in the performance trace the nested activities from the call stack that take the most time.

Use the Event log tab to view activities in the order in which they occurred during the recording.

The Event log tab only displays activities during the selected portion of the recording. See Select a portion of a recording to learn how to select portions.

The Start Time column represents the point at which that activity started, relative to the start of the recording. The start time of 1573.0 ms for the selected item in this example means that activity started 1573 ms after the recording started.

The Self Time column represents the time spent directly in that activity.

The Total Time columns represents time spent directly in that activity or in any of its children.

Click Start Time, Self Time, or Total Time to sort the table by that column.

Use the Filter box to filter activities by name.

Use the Duration menu to filter out any activities that took less than 1 ms or 15 ms. By default the Duration menu is set to All, meaning all activities are shown.

Disable the Loading, Scripting, Rendering, or Painting checkboxes to filter out all activities from those categories.

In an overlay with vertical lines across the performance trace, you can see important performance markers, such as:

Hover over the marker names at the bottom of the trace to see their timestamp.

On the Timings track, view your custom performance markers such as:

Select a marker to see more details in the Summary tab, including its timestamp, total time, self time, and the detail object. For performance.mark() and performance.measure() calls, the tab also shows stack traces.

View user interactions on the Interactions track to track down potential responsiveness issues.

To view interactions:

In this example, the Interactions track shows the Pointer interaction. Interactions have whiskers that indicate input and presentation delays at processing time boundaries. Hover over the interaction to see a tooltip with input delay, processing time, and presentation delay.

The Interactions track also shows Interaction to Next Paint (INP) warnings for interactions longer than 200 milliseconds in the Summary tab and in a tooltip on hover:

The Interactions track marks the interactions over 200 milliseconds with a red triangle in the top right corner.

View layout shifts on the Layout shifts track. Shifts are shown as purple diamonds and are grouped in clusters (purple lines) based on their proximity on the timeline.

To highlight an element that caused a layout shift in the viewport, hover over the corresponding diamond.

To see more information about a layout shift or shifts in the Summary tab with timings, scores, elements, and potential culprits, click the corresponding diamond or cluster.

For more information, see Cumulative Layout Shift (CLS).

View animations on the Animations track. Animations are named as corresponding CSS properties or elements if any, for example, transform or my-element. Non-compositing animations are marked with red triangles in the top right corner.

Select an animation to see more details in the Summary tab, including reasons for compositing failures.

View GPU activity in the GPU section.

View raster activity in the Thread Pool section.

DevTools provides numerous ways to analyze frames per second:

The Frames section tells you exactly how long a particular frame took.

Hover over a frame to view a tooltip with more information about it.

This example shows a tooltip when you hover over a frame.

The Frames section can show four types of frames:

This example shows a tooltip when you hover over a partially presented frame.

Click a frame to view even more information about the frame in the Summary tab. DevTools outlines the selected frame in blue.

Expand the Network section to view a waterfall of network requests that occurred during the performance recording.

Next to the Network track name, there's a legend with color-coded request types.

Render blocking requests are marked with a red triangle in the upper right corner.

Hover over a request to see a tooltip with:

When you click a request, the Network track draws an arrow from its initiator to the request.

Additionally, the Performance panel shows you the Summary tab with more information about the request, including but not limited to Initial Priority and (final) Priority fields. If their values differ, the fetch priority of the request has changed during the recording. For more information, see Optimizing resource loading with the Fetch Priority API.

The Summary tab also shows a breakdown of the request's timings.

In this example, the request for www.google.com is represented by a line on the left (|–), a bar in the middle with a dark portion and a light portion, and a line on the right (–|).

If present, the Summary tab also shows a breakdown of server timings for network requests that implement server-side rendering technologies. For these requests, the Performance panel takes the data from the Server-Timing response header.

You can find another timings breakdown in the Network tab. Right-click the request in the Network track or its URL in the Summary tab and click Reveal in Network panel. DevTools takes you to the Network panel and selects the corresponding request. Open its Timing tab.

Here's how these two breakdowns map to each other:

Enable the Memory checkbox to view memory metrics from the last recording.

DevTools displays a new Memory chart, above the Summary tab. There's also a new chart below the NET chart, called HEAP. The HEAP chart provides the same information as the JS Heap line in the Memory chart.

This example shows memory metrics above the Summary tab.

The colored lines on the chart map to the colored checkboxes above the chart. Disable a checkbox to hide that category from the chart.

The chart only displays the region of the recording that is selected. In the earlier example, the Memory chart shows only the memory usage for the start of the recording, up to around the 1000ms mark.

When analyzing a section like Network or Main, sometimes you need a more precise estimate of how long certain events took. Hold Shift, click and hold, and drag left or right to select a portion of the recording. At the bottom of your selection, DevTools shows how long that portion took.

In this example, the 488.53ms timestamp at the bottom of the selected portion indicates how long that portion took.

See Capture screenshots while recording to learn how to enable screenshots.

Hover over the Timeline overview to view a screenshot of how the page looked during that moment of the recording. The Timeline overview is the section that contains the CPU, FPS, and NET charts.

You can also view screenshots by clicking a frame in the Frames section. DevTools displays a small version of the screenshot in the Summary tab.

This example shows the screenshot for the 195.5ms frame in the Summary tab when you click it in the Frames section.

Click the thumbnail in the Summary tab to zoom in on the screenshot.

This example shows a zoomed-in screenshot after you click its thumbnail in the Summary tab.

To view advanced layers information about a frame:

Hover over a layer to highlight it in the diagram.

This example shows the layer #39 highlighted as you hover over it.

See layer analysis in action:

To view advanced information about a paint event:

Use the Rendering tab's features to help visualize your page's rendering performance.

Open the Rendering tab.

The Frame rendering stats is an overlay that appears in the top-right corner of your viewport. It provides a real time estimate of FPS as the page runs.

See Frame rendering stats.

Use Paint Flashing to get a real time view of all paint events on the page.

Use Layer Borders to view an overlay of layer borders and tiles on top of the page.

Use Scrolling Performance Issues to identify elements of the page that have event listeners related to scrolling that may harm the performance of the page. DevTools outlines the potentially-problematic elements in teal.

See Scrolling performance issues.

---

## Discover issues with rendering performance Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/rendering/performance

**Contents:**
- Discover issues with rendering performance Stay organized with collections Save and categorize content based on your preferences.
- Highlight repainted areas with paint flashing
- Highlight layout shift regions
- View layers and tiles with layer borders
- View frames per second in real time with frame rendering stats
- Identify scrolling performance issues
- View Core Web Vitals

Sofia Emelianova GitHub Kayce Basques X GitHub

Discover rendering performance issues with this reference of performance-related options on the Rendering tab.

With this option switched on, Chrome flashes the screen green whenever repainting happens.

To view areas that are being repainted:

If, on another page, you see the whole screen flash green or areas of the screen that you didn't think should be painted, consider investigating further.

Layout shifts cause unexpected repaints and can be not only annoying but harmful.

To view the location and timing of the layout shifts on a page:

Open the Rendering tab and check Layout Shift Regions.

refresh Refresh the page. Areas of layout shift are briefly highlighted in purple.

Use Layer Borders to view an overlay of layer borders and tiles on top of the page.

To enable layer borders:

See the comments in debug_colors.cc for an explanation of the color-codings.

The Frame rendering stats is an overlay that appears in the top-right corner of your viewport.

To open the Frame rendering stats:

The Frame rendering stats overlay shows:

Use Scrolling Performance Issues to identify elements of the page that have event listeners related to scrolling that may harm the performance of the page.

To view the potentially problematic elements:

Web Vitals is an initiative by Google to provide unified guidance for quality signals that are essential to delivering a great user experience on the web.

Core Web Vitals are the subset of Web Vitals that apply to all web pages. Each of the Core Web Vitals represents a distinct facet of the user experience, is measurable in the field, and reflects the real-world experience of a critical user-centric outcome. The Core Web Vitals are:

Use the Web Vitals Chrome extension to view your page's Core Web Vitals values.

---

## Throttling Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/settings/throttling

**Contents:**
- Throttling Stay organized with collections Save and categorize content based on your preferences.
- Calibrate CPU throttling presets
- Set up custom network throttling profile

Sofia Emelianova GitHub

In Settings > Throttling, you can:

To calibrate CPU throttling presets:

The Throttling tab will show the CPU throttling rates that you can apply to your device to get an idea of how your page performs on low- and mid-tier mobile devices.

With presets calibrated, you can find them in Performance > Environment settings > CPU and in Performance > Capture settings drop-down menus.

To add a custom network throttling profile:

Specify the following optional parameter values for the new entry:

Packed-related parameters:

Click Add to save the new profile. You can now select it from the throttling drop-down list in the Network panel.

To edit or remove an existing profile, click or buttons that appear on hover.

---
