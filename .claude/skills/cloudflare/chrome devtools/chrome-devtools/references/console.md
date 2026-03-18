# Chrome-Devtools - Console

**Pages:** 16

---

## Debug JavaScript Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/javascript

**Contents:**
- Debug JavaScript Stay organized with collections Save and categorize content based on your preferences.
- Reproduce the bug
- Get familiar with the Sources panel UI
- Pause the code with a breakpoint
- Step through the code
- Set a line-of-code breakpoint
- Check variable values
  - Method 1: Inspect the Scope
  - Method 2: Watch expressions
  - Method 3: The Console

Kayce Basques X GitHub Sofia Emelianova GitHub

This tutorial teaches you the basic workflow for debugging any JavaScript issue in DevTools. Read on, or watch the video version of this tutorial.

Finding a series of actions that consistently reproduces a bug is always the first step to debugging.

In this example, the result of 5 + 1 is 51. It should be 6.

DevTools provides a lot of different tools for different tasks, such as changing CSS, profiling page load performance, and monitoring network requests. The Sources panel is where you debug JavaScript.

Open DevTools and navigate to the Sources panel.

The Sources panel has three sections:

The Debugger section. Various tools for inspecting the page's JavaScript.

If your DevTools window is wide, by default, the Debugger is to the right of the Code Editor. In this case, the Scope and Watch tabs join Breakpoints, Call stack, and others as collapsible sections.

A common method for debugging a problem like this is to insert a lot of console.log() statements into the code, in order to inspect values as the script executes. For example:

The console.log() method may get the job done, but breakpoints can get it done faster. A breakpoint lets you pause your code in the middle of its execution, and examine all values at that moment in time. Breakpoints have a few advantages over the console.log() method:

In short, breakpoints can help you find and fix bugs faster than the console.log() method.

If you take a step back and think about how the app works, you can make an educated guess that the incorrect sum (5 + 1 = 51) gets computed in the click event listener that's associated to the Add Number 1 and Number 2 button. Therefore, you probably want to pause the code around the time that the click listener executes. Event Listener Breakpoints let you do exactly that:

Check the click checkbox. DevTools is now set up to automatically pause when any click event listener executes.

Back on the demo, click Add Number 1 and Number 2 again. DevTools pauses the demo and highlights a line of code in the Sources panel. DevTools should be paused on this line of code:

If you're paused on a different line of code, press resume Resume Script Execution until you're paused on the correct line.

Event Listener Breakpoints are just one of many types of breakpoints available in DevTools. It's worth exploring all the different types, because each type ultimately helps you debug different scenarios as quickly as possible. See Pause Your Code With Breakpoints to learn when and how to use each type.

One common cause of bugs is when a script executes in the wrong order. Stepping through your code lets you walk through your code's execution, one line at a time, and figure out exactly where it's executing in a different order than you expected. Try it now:

On the Sources panel of DevTools, click step_into Step into next function call to step through the execution of the onClick() function, one line at a time. DevTools highlights the following line of code:

Click step_over Step over next function call.

DevTools executes inputsAreEmpty() without stepping into it. Notice how DevTools skips a few lines of code. This is because inputsAreEmpty() evaluated to false, so the if statement's block of code didn't execute.

That's the basic idea of stepping through code. If you look at the code in get-started.js, you can see that the bug is probably somewhere in the updateLabel() function. Rather than stepping through every line of code, you can use another type of breakpoint to pause the code closer to the probable location of the bug.

Line-of-code breakpoints are the most common type of breakpoint. When you've got a specific line of code that you want to pause on, use a line-of-code breakpoint:

Look at the last line of code in updateLabel():

To the left of the code you can see the line number of this particular line of code, which is 32. Click 32. DevTools puts a blue icon on top of 32. This means that there is a line-of-code breakpoint on this line. DevTools now always pauses before this line of code is executed.

Click resume Resume script execution. The script continues executing until it reaches line 32. On lines 29, 30, and 31, DevTools shows the values of addend1, addend2, and sum inline next to their declarations.

In this example, DevTools pauses on the line-of-code breakpoint on line 32.

The values of addend1, addend2, and sum look suspicious. They're wrapped in quotes, which means that they're strings. This is a good hypothesis for the explaining the cause of the bug. Now it's time to gather more information. DevTools provides a lot of tools for examining variable values.

When you're paused on a line of code, the Scope tab shows you what local and global variables are defined at this point in execution, along with the value of each variable. It also shows closure variables, when applicable. When you're not paused on a line of code, the Scope tab is empty.

Double-click a variable value to edit it.

The Watch tab lets you monitor the values of variables over time. Watch isn't just limited to variables. You can store any valid JavaScript expression in the Watch tab.

This screenshot shows the Watch tab (bottom-right) after creating the typeof sum watch expression.

As suspected, sum is being evaluated as a string, when it should be a number. You've now confirmed that this is the cause of the bug.

In addition to viewing console.log() messages, you can also use the Console to evaluate arbitrary JavaScript statements. In terms of debugging, you can use the Console to test out potential fixes for bugs. Try it now:

This screenshot shows the Console drawer after evaluating parseInt(addend1) + parseInt(addend2).

You've found a fix for the bug. All that's left is to try out your fix by editing the code and re-running the demo. You don't need to leave DevTools to apply the fix. You can edit JavaScript code directly within the DevTools UI. Try it now:

This tutorial only showed you two ways to set breakpoints. DevTools offers many other ways, including:

See Pause Your Code With Breakpoints to learn when and how to use each type.

There's a couple of code stepping controls that weren't explained in this tutorial. See Step over line of code to learn more.

**Examples:**

Example 1 (unknown):
```unknown
function updateLabel() {
  var addend1 = getNumber1();
  console.log('addend1:', addend1);
  var addend2 = getNumber2();
  console.log('addend2:', addend2);
  var sum = addend1 + addend2;
  console.log('sum:', sum);
  label.textContent = addend1 + ' + ' + addend2 + ' = ' + sum;
}
```

Example 2 (unknown):
```unknown
function onClick() {
```

Example 3 (unknown):
```unknown
if (inputsAreEmpty()) {
```

Example 4 (unknown):
```unknown
label.textContent = addend1 + ' + ' + addend2 + ' = ' + sum;
```

---

## Watch JavaScript values in real time with Live Expressions Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/console/live-expressions

**Contents:**
- Watch JavaScript values in real time with Live Expressions Stay organized with collections Save and categorize content based on your preferences.
- Create a live expression
- Add multiple expressions
- Remove expressions

Kayce Basques X GitHub Sofia Emelianova GitHub

If you find yourself typing the same JavaScript expression in the Console repeatedly, you might find it easier to create a Live Expression. With Live Expressions, you type an expression once and then pin it to the top of your Console. The value of the expression updates in near real time.

To pin an expression to the top of the Console:

Click Create Live Expression. The Live Expression text box appears.

Type your expression in the text box. For example, you can use a live expression to track element focus.

Press Enter to save the expression, or click outside of the Live Expression text box.

The value below the pinned expression is its result. The result updates every 250 milliseconds.

To pin multiple expressions in parallel, click the Create Live Expression button as many times as you need.

You can only see several pinned expressions at a time but you can scroll the expressions list to view all of them.

To remove an expression, click the Close button next to it.

---

## Console Utilities API reference Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/console/utilities

**Contents:**
- Console Utilities API reference Stay organized with collections Save and categorize content based on your preferences.
- $_
- $0 - $4
- $(selector [, startNode])
- $$(selector [, startNode])
- $x(path [, startNode])
- clear()
- copy(object)
- debug(function)
- dir(object)

Kayce Basques X GitHub Sofia Emelianova GitHub

The Console Utilities API contains a collection of convenience functions for performing common tasks: selecting and inspecting DOM elements, querying objects, displaying data in readable format, stopping and starting the profiler, monitoring DOM events and function calls, and more.

Looking for console.log(), console.error(), and the rest of the console.* functions? See Console API Reference.

$_ returns the value of the most recently evaluated expression.

In the following example, a simple expression (2 + 2) is evaluated. The $_ property is then evaluated, which contains the same value:

In the next example, the evaluated expression initially contains an array of names. Evaluating $_.length to find the length of the array, the value stored in $_ changes to become the latest evaluated expression, 4:

The $0, $1, $2, $3 and $4 commands work as a historical reference to the last five DOM elements inspected within the Elements panel or the last five JavaScript heap objects selected in the Profiles panel. $0 returns the most recently selected element or JavaScript object, $1 returns the second most recently selected one, and so on.

In the following example, an img element is selected in the Elements panel. In the Console drawer, $0 has been evaluated and displays the same element:

The image below shows a different element selected in the same page. The $0 now refers to newly selected element, while $1 returns the previously selected one:

$(selector) returns the reference to the first DOM element with the specified CSS selector. When called with one argument, this function is a shortcut for the document.querySelector() function.

The following example returns a reference to the first <img> element in the document:

Right-click on the returned result and select Reveal in Elements Panel to find it in the DOM, or Scroll in to View to show it on the page.

The following example returns a reference to the currently selected element and displays its src property:

This function also supports a second parameter, startNode, that specifies an 'element' or Node from which to search for elements. The default value of this parameter is document.

The following example returns a reference to the first img element that is a descendant of devsite-header-background, and displays its src property:

$$(selector) returns an array of elements that match the given CSS selector. This command is equivalent to calling Array.from(document.querySelectorAll()).

The following example uses $$() to create an array of all <img> elements in the current document and displays the value of each element's src property:

This function also supports a second parameter, startNode, that specifies an element or Node from which to search for elements. The default value of this parameter is document.

This modified version of the previous example uses $$() to create an array of all <img> elements that appear in the current document after the selected Node:

$x(path) returns an array of DOM elements that match the given XPath expression.

For example, the following returns all the <p> elements on the page:

The following example returns all the <p> elements that contain <a> elements:

Similar to the other selector functions, $x(path) has an optional second parameter, startNode, that specifies an element or Node from which to search for elements.

clear() clears the console of its history.

copy(object) copies a string representation of the specified object to the clipboard.

When the specified function is called, the debugger is invoked and breaks inside the function on the Sources panel allowing to step through the code and debug it.

Use undebug(fn) to stop breaking on the function, or use the UI to disable all breakpoints.

For more information on breakpoints, see Pause Your Code With Breakpoints.

dir(object) displays an object-style listing of all the specified object's properties. This method is a shortcut for the Console API's console.dir() method.

The following example shows the difference between evaluating document.body directly in the command line, and using dir() to display the same element:

For more information, see the console.dir() entry in the Console API.

dirxml(object) prints an XML representation of the specified object, as seen in the Elements panel. This method is equivalent to the console.dirxml() method.

inspect(object/function) opens and selects the specified element or object in the appropriate panel: either the Elements panel for DOM elements or the Profiles panel for JavaScript heap objects.

The following example opens the document.body in the Elements panel:

When passing a function to inspect, the function opens the document up in the Sources panel for you to inspect.

getEventListeners(object) returns the event listeners registered on the specified object. The return value is an object that contains an array for each registered event type (click or keydown, for example). The members of each array are objects that describe the listener registered for each type. For example, the following lists all the event listeners registered on the document object:

If more than one listener is registered on the specified object, then the array contains a member for each listener. In the following example, there are two event listeners registered on the document element for the click event:

You can further expand each of these objects to explore their properties:

For more information, see Inspect object properties.

keys(object) returns an array containing the names of the properties belonging to the specified object. To get the associated values of the same properties, use values().

For example, suppose your application defined the following object:

Assuming player was defined in the global namespace (for simplicity), typing keys(player) and values(player) in the Console results in the following:

When the function specified is called, a message is logged to the console that indicates the function name along with the arguments that are passed to the function when it was called.

Use unmonitor(function) to stop monitoring.

When one of the specified events occurs on the specified object, the Event object is logged to the console. You can specify a single event to monitor, an array of events, or one of the generic events "types" mapped to a predefined collection of events. See examples below.

The following monitors all resize events on the window object.

The following defines an array to monitor both "resize" and "scroll" events on the window object:

You can also specify one of the available event "types", strings that map to predefined sets of events. The table below lists the available event types and their associated event mappings:

For example, the following uses the "key" event type all corresponding key events on an input text field currently selected in the Elements panel.

Below is sample output after typing a characters in the text field:

Use unmonitorEvents(object[, events]) to stop monitoring.

profile() starts a JavaScript CPU profiling session with an optional name. profileEnd() completes the profile and displays the results in the Performance > Main track.

To stop profiling and see the results in the Performance > Main track:

Result in the Performance > Main track:

Profiles can also be nested. For example, this will work in any order:

Call queryObjects(Constructor) from the console to return an array of objects that were created with the specified constructor. For example:

The scope of queryObjects() is the currently-selected execution context in the console.

Log object data with table formatting by passing in a data object in with optional column headings. This is a shortcut for console.table().

For example, to display a list of names using a table in the console, you would do:

undebug(function) stops the debugging of the specified function so that when the function is called, the debugger is no longer invoked. This is used in concert with debug(fn).

unmonitor(function) stops the monitoring of the specified function. This is used in concert with monitor(fn).

unmonitorEvents(object[, events]) stops monitoring events for the specified object and events. For example, the following stops all event monitoring on the window object:

You can also selectively stop monitoring specific events on an object. For example, the following code starts monitoring all mouse events on the currently selected element, and then stops monitoring "mousemove" events (perhaps to reduce noise in the console output):

values(object) returns an array containing the values of all properties belonging to the specified object.

**Examples:**

Example 1 (javascript):
```javascript
let images = $$('img');
for (let each of images) {
  console.log(each.src);
}
```

Example 2 (javascript):
```javascript
let images = $$('img', document.querySelector('.devsite-header-background'));
for (let each of images) {
  console.log(each.src);
}
```

Example 3 (unknown):
```unknown
$x("//p[a]")
```

Example 4 (unknown):
```unknown
debug(getData);
```

---

## Console features reference Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/console/reference

**Contents:**
- Console features reference Stay organized with collections Save and categorize content based on your preferences.
- Open the Console
  - Open the Console panel
  - Open the Console in the Drawer
  - Open Console Settings
  - Open the Console Sidebar
- View messages
  - Disable message grouping
  - View messages from breakpoints
  - View stack traces

Kayce Basques X GitHub Sofia Emelianova GitHub

This page is a reference of features related to the Chrome DevTools Console. It assumes that you're already familiar with using the Console to view logged messages and run JavaScript. If not, see Get Started.

If you're looking for the API reference on functions like console.log() see Console API Reference. For the reference on functions like monitorEvents() see Console Utilities API Reference.

You can open the Console as a panel or as a tab in the Drawer.

Press Control+Shift+J or Command+Option+J (Mac).

To open the Console from the Command Menu, start typing Console and then run the Show Console command that has the Panel badge next to it.

Press Escape or click Customize And Control DevTools and then select Show Console Drawer.

The Drawer pops up at the bottom of your DevTools window, with the Console tab open.

To open the Console tab from the Command Menu, start typing Console and then run the Show Console command that has the Drawer badge next to it.

Click Console Settings in the top-right corner of the Console.

The links below explain each setting:

Click Show Console Sidebar to show the Sidebar, which is useful for filtering.

This section contains features that change how messages are presented in the Console. See View messages for a hands-on walkthrough.

Open Console Settings and disable Group similar to disable the Console's default message grouping behavior. See Log XHR and Fetch requests for an example.

The Console marks messages triggered by breakpoints in the following way:

To jump to the inline breakpoint editor in the Sources panel, click the anchor link next to the breakpoint message.

The Console automatically captures stack traces for errors and warnings. A stack trace is a history of function calls (frames) that led to the error or warning. The Console shows them in reverse order: the latest frame is at the top.

To view a stack trace, click the expand icon next to an error or warning.

The Console can show you chains of error causes in the stack trace, if any.

To make debugging easier, you can specify error causes when catching and rethrowing errors. As the Console walks up the cause chain, it prints each error stack with a Caused by: prefix, so you can find the original error.

If supported by the framework you are using or when directly using browser scheduling primitives, such as setTimeout, DevTools can trace async operations by linking both parts of the async code together.

In this case, the stack trace shows the "full story" of the async operation.

When source maps include the ignoreList field, by default, the Console hides from stack traces the third-party frames from sources generated by bundlers (for example, webpack) or frameworks (for example, Angular).

To view the full stack trace including third-party frames, click Show N more frames at the bottom of the stack trace.

To always view the full stack trace, disable the Settings > Ignore List > Automatically add known third-party scripts to ignore list setting.

Open Console Settings and enable Log XMLHttpRequests to log all XMLHttpRequest and Fetch requests to the Console as they happen.

The top message in the example above shows the Console's default grouping behavior. The example below shows how the same log looks after disabling message grouping.

By default the Console clears whenever you load a new page. To persist messages across page loads, Open Console Settings and then enable the Preserve Log checkbox.

By default the browser logs network messages to the Console. For example, the top message in the following example represents a 404.

To hide network messages:

The Console can show CORS errors if network requests fail due to Cross-Origin Resource Sharing (CORS).

To show or hide CORS errors:

If the console is set to show CORS errors and you encounter them, you can click the following buttons next to errors:

There are many ways to filter out messages in the Console.

Open the Console Sidebar and click User Messages to only show messages that came from the page's JavaScript.

DevTools assigns most of console.* methods severity levels.

There are four levels:

For example, console.log() is in the Info group, whereas console.error() is in the Error group. The Console API Reference describes the severity level of each applicable method.

Every message that the browser logs to the Console has a severity level too. You can hide any level of messages that you're not interested in. For example, if you're only interested in Error messages, you can hide the other 3 groups.

Click the Log Levels drop-down to enable or disable Verbose, Info, Warning or Error messages.

You can also filter by log level by opening the Console Sidebar and then clicking Errors, Warnings, Info, or Verbose.

Type url: followed by a URL to only view messages that came from that URL. After you type url: DevTools shows all relevant URLs.

Domains also work. For example, if https://example.com/a.js and https://example.com/b.js are logging messages, url:https://example.com enables you to focus on the messages from these 2 scripts.

To hide all messages from a specified URL, type -url: followed by the URL, for example, https://b.wal.co. This is a negative URL filter.

You can also show messages from a single URL by opening the Console Sidebar, expanding the User Messages section, and then clicking the URL of the script containing the messages you want to focus on.

Suppose that you've got an ad on your page. The ad is embedded in an <iframe> and is generating a lot of messages in your Console. Because this ad is in a different JavaScript context, one way to hide its messages is to open Console Settings and enable the Selected Context Only checkbox.

Type a regular expression such as /[foo]\s[bar]/ in the Filter text box to filter out any messages that don't match that pattern. Spaces are not supported, use \s instead. DevTools checks if the pattern is found in the message text or the script that caused the message to be logged.

For example, the following filters out all messages that don't match /[gm][ta][mi]/.

To search for text in log messages:

This section contains features related to running JavaScript in the Console. See Run JavaScript for a hands-on walkthrough.

The console outputs strings as valid JavaScript literals by default. Right-click an output and choose between three copy options:

Press the Up Arrow key to cycle through the history of JavaScript expressions that you ran earlier in the Console. Press Enter to run that expression again.

To clear the console history, right-click an empty space in the Console and select Clear console history from the context menu.

To clear the Console window, do one of the following:

From the context menu, you can also:

If you find yourself typing the same JavaScript expression in the Console repeatedly, you might find it easier to create a Live Expression. With Live Expressions, you type an expression once and then pin it to the top of your Console. The value of the expression updates in near real-time. See Watch JavaScript Expression Values In Real-Time With Live Expressions.

As you type JavaScript expressions in the Console, Eager Evaluation shows a preview of that expression's return value. Open Console Settings and disable the Eager Evaluation checkbox to turn off the return value previews.

User activation is the state of a browsing session that depends on user actions. An "active" state means the user is currently interacting with the page or has interacted since page load.

To trigger user activation with any evaluation, open Console Settings and check Treat code evaluation as user action.

As you type out an expression, the Console's autocomplete popup shows expressions that you ran earlier. These expressions are prepended with the > character. In the following example, DevTools earlier evaluated document.querySelector('a') and document.querySelector('img').

Open Console Settings and disable the Autocomplete From History checkbox to stop showing expressions from your history.

By default the JavaScript Context drop-down is set to top, which represents the main document's browsing context.

Suppose you have an ad on your page embedded in an <iframe>. You want to run JavaScript in order to tweak the ad's DOM. To do this, you first need to select the ad's browsing context from the JavaScript Context drop-down.

The Console can display an interactive list of properties of a JavaScript object you specify.

To browse the list, type the object name into the Console and press Enter.

To inspect the properties of DOM objects, follow the steps in View the properties of DOM objects.

The Console sorts own object properties first and highlights them in bold font.

Properties inherited from the prototype chain are in regular font. The Console displays them on the object itself by evaluating the corresponding native accessors of built-in objects.

By default, DevTools doesn't evaluate accessors you create. To evaluate a custom accessor on an object, click (...).

Enumerable properties are bright in color. Non-enumerable properties are muted. Enumerable properties can be iterated over with the for … in loop or Object.keys() method.

The Console designates private properties of class instances with a # prefix.

The Console can also autocomplete private properties even when you evaluate them ouside the class scope.

Borrowing the ECMAScript notation, the Console encloses some properties internal to JavaScript in double square brackets. You can't interact with such properties in your code. However, it might be useful to inspect them.

You might see the following internal properties on different objects:

In JavaScript, functions are also objects with properties. However, if you type a function name into the Console, DevTools calls it instead of displaying its properties.

To view function properties internal to JavaScript, use the console.dir() command.

Functions have the following properties:

You can use any of the following workflows to clear the Console:

---

## Changes: Track your HTML, CSS, and JavaScript changes Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/changes

**Contents:**
- Changes: Track your HTML, CSS, and JavaScript changes Stay organized with collections Save and categorize content based on your preferences.
- Overview
- Open the Changes panel
- View and understand your changes
- Copy CSS changes
- Revert all changes made to a file

Sofia Emelianova GitHub

Use the Changes panel to track code changes made within DevTools.

With the Changes panel, track the changes you make to:

The Changes panel shows only the changes you make within DevTools. If you reload either DevTools or your page, the changes disappear.

To make DevTools persist changes across page loads, follow the steps in Local overrides.

To make DevTools write changes to your local sources, follow the steps in Edit and save files with Workspaces.

To open the Changes panel:

Press Command+Shift+P (Mac) or Control+Shift+P (Windows, Linux, ChromeOS) to open the Command Menu.

Start typing changes, select Show Changes, and press Enter.

Alternatively, in the upper right corner, click Customize and control DevTools > More tools > Changes.

By default, DevTools displays the Changes panel at the bottom of your DevTools window, in the Drawer.

To view your changes:

Make changes to your sources:

Open the Changes panel and select a file in the right-hand side of the panel.

Observe a diff output that highlights the following:

The Changes panel pretty-prints the diff output automatically, so you don't have to scroll horizontally to see the changes in a single line.

If you made changes to CSS in Elements > Styles, you can copy all of them with a single button:

Open the Changes panel and, in the right-hand side of the panel, select the CSS file you made changes to.

Click the Copy button at the bottom of the Changes panel.

To revert changes made to a file:

---

## JavaScript debugging reference Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/javascript/reference

**Contents:**
- JavaScript debugging reference Stay organized with collections Save and categorize content based on your preferences.
- Pause code with breakpoints
  - Check values when paused
  - Preview class and function properties on hover
- Step through code
  - Step over line of code
  - Step into line of code
  - Step out of line of code
  - Run all code up to a certain line
  - Resume script execution

Kayce Basques X GitHub Sofia Emelianova GitHub

Discover new debugging workflows with this comprehensive reference of Chrome DevTools debugging features.

See Get Started With Debugging JavaScript In Chrome DevTools to learn the basics of debugging.

Set a breakpoint so that you can pause your code in the middle of its execution. To learn how to set breakpoints, see Pause Your Code With Breakpoints.

While the execution is paused, the debugger evaluates all variables, constants, and objects within the current function up to a breakpoint. The debugger shows the current values inline next to the corresponding declarations.

You can use the Console to query the evaluated variables, constants, and objects.

While the execution is paused, hover over a class or function name to preview its properties.

Once your code is paused, step through it, one expression at a time, investigating control flow and property values along the way.

When paused on a line of code containing a function that's not relevant to the problem you're debugging, click Step over step_over to execute the function without stepping into it.

For example, suppose you're debugging the following code:

You're paused on A. Once you've pressed step_over, DevTools executes all the code in the function that you're stepping over, which is B and C. DevTools then pauses on D.

When paused on a function call that is related to the problem you're debugging, click Step into to investigate that function.

For example, suppose you're debugging the following code:

You're paused on A. By pressing Step into, DevTools executes this line of code, then pauses on B.

When paused inside of a function that is not related to the problem you're debugging, click step_out to execute the rest of the function's code.

For example, suppose you're debugging the following code:

You're paused on A. By clicking step_out, DevTools executes the rest of the code in getName(), which is just B in this example, and then pauses on C.

When debugging a long function, there may be a lot of code that is not related to the problem you're debugging.

You could step through all the lines, but that can be tedious. You could set a line-of-code breakpoint on the line you're interested in and then press resume, but there's a faster way.

Right-click the line of code that you're interested in, and select Continue to here. DevTools runs all of the code up to that point, and then pauses on that line.

To continue your script's execution after a pause, click resume. DevTools executes the script up until the next breakpoint, if any.

To ignore all breakpoints and force your script to resume execution, click and hold Resume Script Execution resume and then select Force script execution play_arrow.

When working with web workers or service workers, click a context listed in the Threads pane to switch to that context. The blue arrow icon represents which context is selected.

For example, suppose that you're paused on a breakpoint in both your main script and your service worker script. You want to view the local and global properties for the service worker context, but the Sources panel is showing the main script context. By clicking on the service worker entry in the Threads pane, you'd be able to switch to that context.

You can debug minified code by stepping through comma-separated expressions. For example, consider the following code:

When minified, it contains a comma-separated foo(),foo(),42 expression:

The Debugger steps through such expressions just the same.

Therefore, the stepping behavior is identical:

While paused on a line of code, use the Scope pane to view and edit the values of properties and variables in the local, closure, and global scopes.

While paused on a line of code, use the Call Stack pane to view the call stack that got you to this point.

Select an entry to jump to the line of code where that function was called. The blue arrow icon represents which function DevTools is highlighting.

To observe the behavior of a function and re-run it without having to restart the entire debugging flow, you can restart the execution of a single function when this function is paused. In other words, you can restart the function's frame in the call stack.

In the Call Stack pane, right-click a function and select Restart frame from the drop-down menu.

To understand how Restart frame works, consider the following:

The foo() function takes 0 as an argument, logs it, and calls the bar() function. The bar() function, in turn, increments the argument.

Try restarting the frames of both functions as follows:

Copy the example code to a new snippet and run it. The execution stops at the debugger line-of-code breakpoint.

Notice that the debugger shows you the current value next to function declaration: value = 1.

Restart the bar() frame.

Step through the value increment statement by pressing F9. Notice that the current value increases: value = 2.

Optionally, in the Scope pane, double-click the value to edit it and set the desired value.

Try restarting the bar() frame and stepping through the increment statement several more times. The value continues to increase.

Restart the foo() frame in the Call Stack. Notice that the value is 0 again.

Resume script execution (F8) to complete this tutorial.

By default, the Call Stack pane shows only the frames that are relevant to your code and omits any scripts added to settings Settings > Ignore List.

To view the full call stack including third-party frames, enable Show ignore-listed frames under the Call Stack section.

If supported by the framework you are using, DevTools can trace async operations by linking both parts of the async code together.

In this case, the Call Stack shows the entire call history including async call frames.

Key Point DevTools implements this "Async Stack Tagging" feature based on the console.createTask() API method. It's up to frameworks to implement the API. For example, Angular supports this feature.

Right-click anywhere in the Call Stack pane and select Copy stack trace to copy the current call stack to the clipboard.

Here is an example of the output:

Use the Page pane to navigate the file tree.

When developing web applications using frameworks (for example, React or Angular), it can be difficult to navigate sources due to the minified files generated by the build tools (for example, webpack or Vite).

To help you navigate sources, the Sources > Page pane can group the files into two categories:

To enable grouping, click more_vert > Group files by Authored/Deployed option, under the menu at the top of the file tree.

To help you focus only on the code you create, the Sources > Page pane grays out all scripts or directories added to settings Settings > Ignore List by default.

To hide such scripts altogether, select Sources > Page > more_vert > Hide ignore-listed sources .

Ignore a script to skip it while debugging. When ignored, a script is obscured in the Call Stack pane, and you never step into the script's functions when you step through your code.

For example, suppose you're stepping through this code:

A is a third-party library that you trust. If you're confident that the problem you're debugging is not related to the third-party library, then it makes sense to ignore the script.

To ignore an individual script or an entire directory:

If you didn't hide ignore-listed sources, you can select such a source in the file tree and, on the warning warning banner, click Remove from ignored list or Configure.

Otherwise, you can remove hidden and ignored directories and scripts from the list in settings Settings > Ignore List.

To ignore a script from the Editor pane:

You can remove a script from the list of ignored from settings Settings > Ignore List.

To ignore a script from the Call Stack pane:

You can remove a script from the list of ignored from settings Settings > Ignore List.

See settings Settings > Ignore List.

If you find yourself running the same debug code in the Console over and over, consider Snippets. Snippets are executable scripts that you author, store, and run within DevTools.

See Run Snippets of Code From Any Page to learn more.

Use the Watch pane to watch the values of custom expressions. You can watch any valid JavaScript expression.

When you open a script in the Page pane, DevTools shows you its contents in the Editor pane. In the Editor pane, you can browse and edit your code.

Additionally, you can override the contents locally or create a workspace and save the changes you make in DevTools directly to your local sources.

By default, the Sources panel pretty-prints minified files. When pretty-printed, the Editor may show a single long code line in multiple lines, with - to indicate that it's the line continuation.

To see the minified filed as it was loaded, click data_object in the bottom left corner of the Editor.

To fold a code block, hover over the line number in the left column and click arrow_drop_down Collapse.

To unfold the code block, click {...} next to it.

To configure this behavior, see settings Settings > Preferences > Sources.

When fixing a bug, you often want to test out some changes to your JavaScript. You don't need to make the changes in an external browser and then reload the page. You can edit your script in DevTools.

Press Command+S (Mac) or Ctrl+S (Windows, Linux) to save. DevTools patches the entire JavaScript file into Chrome's JavaScript engine.

While the execution is paused, you can edit the current function and apply changes live with the following limitations:

To live-edit a function:

Watch the video to learn this workflow.

In this example, the addend1 and addend2 variables initially have an incorrect string type. So, instead of adding numbers, the strings are concatenated. To fix it, the parseInt() functions are added during live editing.

To search for text in a script:

To replace the text you found:

See Disable JavaScript With Chrome DevTools.

**Examples:**

Example 1 (unknown):
```unknown
function updateHeader() {
  var day = new Date().getDay();
  var name = getName(); // A
  updateName(name); // D
}
function getName() {
  var name = app.first + ' ' + app.last; // B
  return name; // C
}
```

Example 2 (unknown):
```unknown
function updateHeader() {
  var day = new Date().getDay();
  var name = getName(); // A
  updateName(name);
}
function getName() {
  var name = app.first + ' ' + app.last; // B
  return name;
}
```

Example 3 (unknown):
```unknown
function updateHeader() {
  var day = new Date().getDay();
  var name = getName();
  updateName(name); // C
}
function getName() {
  var name = app.first + ' ' + app.last; // A
  return name; // B
}
```

Example 4 (unknown):
```unknown
function foo() {}

function bar() {
  foo();
  foo();
  return 42;
}

bar();
```

---

## Coverage: Find unused JavaScript and CSS Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/coverage

**Contents:**
- Coverage: Find unused JavaScript and CSS Stay organized with collections Save and categorize content based on your preferences.
- Overview
- Open the Coverage panel
- Record code coverage
- Analyze code coverage

Kayce Basques X GitHub Sofia Emelianova GitHub

The Coverage panel helps you find unused JavaScript and CSS code. Removing unused code can speed up your page load and save the mobile data of your users.

Shipping unused JavaScript or CSS is a common problem in web development. For example, suppose that you want to use Bootstrap's button component on your page. To use the button component you need to add a link to Bootstrap's style sheet in your HTML, like this:

This style sheet doesn't just include the code for the button component. It contains the CSS for all of Bootstrap's components. But you're not using any of the other Bootstrap components. So your page is downloading a bunch of CSS that it doesn't need. This extra CSS is a problem for the following reasons:

The Coverage panel lets you record your page and view a report of the total used and unused bytes of CSS and Javascript resources, and track the code in the Sources panel.

Start typing coverage, select the Show Coverage command, and then press Enter to run the command. The Coverage panel opens in the Drawer.

Alternatively, in the top right corner, select more_vert More options > More tools > Coverage.

To capture code coverage:

To set the coverage scope, in the action bar at the top of the Coverage panel, select Per function or Per block from the drop-down list.

To start the recording, click refresh Start instrumenting coverage and reload page The Coverage panel reloads the page, captures the code needed to load the page, and continues the recording while you interact with the page.

To stop recording code coverage, click stop_circle Stop instrumenting coverage and show results.

The table in the Coverage panel shows you what resources were analyzed, and how much code is used within each resource.

Click a row to open that resource in the Sources panel and see a line-by-line breakdown of used code and unused code. Any unused lines of code are marked with red lines next to column with line numbers on the left.

To filter the report by URL, specify it in the filter in the action bar.

The status bar at the bottom of the Coverage panel shows you the percentage of code used. The status bar takes filtering into account.

Next to the filter bar, from the drop-down list, you can select All, or only CSS or JavaScript to show in your report.

To include extension code into your report, turn on check_box Content scripts.

To export your report, click download Export coverage.

**Examples:**

Example 1 (unknown):
```unknown
...
<head>
  ...
  <link rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous">
  ...
</head>
...
```

---

## Disable JavaScript Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/javascript/disable

**Contents:**
- Disable JavaScript Stay organized with collections Save and categorize content based on your preferences.

Kayce Basques X GitHub Sofia Emelianova GitHub

To see how a web page looks and behaves when JavaScript is disabled:

Depending on your operating system, press one of the following:

The Command Menu opens.

Start typing javascript, select Disable JavaScript, and then press Enter to run the command. JavaScript is now disabled.

To remind you that JavaScript is disabled, Chrome shows the corresponding icon in the address bar and DevTools shows a warning icon next to Sources.

JavaScript will remain disabled in this tab so long as you have DevTools open.

You may want to reload the page to see if and how the page depends on JavaScript while loading.

Alternatively, you can disable JavaScript in Settings.

To re-enable JavaScript:

---

## Format and style messages in the Console Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/console/format-style

**Contents:**
- Format and style messages in the Console Stay organized with collections Save and categorize content based on your preferences.
- Format console messages
  - Apply multiple format specifiers
  - Understand type conversions
- Style console messages
  - Style with format specifier
  - Style with ANSI escape sequences

Jecelyn Yeen X GitHub Bluesky Homepage

This guide shows you how to format and style messages in the Chrome DevTools Console. See Get Started With Logging Messages to learn how to log messages to the Console.

This guide assumes that you understand the fundamentals of web development, such as how to use JavaScript to add interactivity to a page.

You can use the format specifiers to format the console messages.

Format specifiers begin with a percent character (%) and terminate with a "type character" which indicates the type of data (integer, float, etc.).

Enter the following console command.

The command above produces Chrome DevTools is awesome. message.

Here is the list of format specifiers Chrome DevTools support currently.

You can use more than one format specifier in a message.

Enter the following console command.

The command above produces The total weight of 3 apples and 2 oranges is 432.4 grams. message.

The output message will be converted according to the format specifier.

Enter the following console command.

The command above produces I have 2 apples and 3 oranges. message.

Instead of logging 3.5 oranges, the output is 3 oranges. The %d indicates that the value should/will be converted to an integer.

Here is an example of what happens if the type conversion is invalid.

Enter the following console command.

The command above produces Jane has NaN kiwis. message.

The %i indicates that the value should/will be converted to an integer, but the argument is a string. Thus it returns NaN (Not-A-Number).

There are two ways to style console messages in DevTools.

You can use the %c format specifier to style the console messages with CSS.

Enter the following console command.

The command above produces Hooray with CSS styles applied.

You can use the ANSI escape sequences to style console messages.

It is common for Node.js developers to colorize log messages via ANSI escape sequences, often with the help of some styling libraries like chalk, colors, ansi-colors, kleur.

Nevertheless, you can style the message with ANSI escape sequences without using any libraries. Here is the syntax:

Enter the following console command.

The command above produces a Hello message with red background, yellow text and underlined.

Here is a list of color codes supported in DevTools.

Here is a list of styling code supported in DevTools.

Here is another more complex example with multiple stylings.

Enter the following console command.

The command above produces a Hello World message with 3 differnt styles.

**Examples:**

Example 1 (javascript):
```javascript
const tools = 'Chrome DevTools';
console.warn('%s is awesome.', tools);
```

Example 2 (unknown):
```unknown
console.info('The total weight of %i %s and %d %s is %f grams.', 3, 'apples', 2, 'oranges', 432.4);
```

Example 3 (unknown):
```unknown
console.log('I have %i apples and %d oranges.', 2, 3.5);
```

Example 4 (unknown):
```unknown
console.log('Jane has %i kiwis.', 'two');
```

---

## Console API reference Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/console/api

**Contents:**
- Console API reference Stay organized with collections Save and categorize content based on your preferences.
- console.assert(expression, object)
- console.clear()
- console.count([label])
- console.countReset([label])
- console.createTask(name)
- console.debug(object [, object, ...])
- console.dir(object)
- console.dirxml(node)
- console.error(object [, object, ...])

Kayce Basques X GitHub Sofia Emelianova GitHub

Use the Console API to write messages to the Console from your JavaScript. See Get started with logging messages to the Console for an interactive introduction to the topic.

See Console utilities API reference if you're looking for the convenience methods like debug(function) or monitorEvents(node) which are only available from the Console.

Writes an error to the console when expression evaluates to false.

If Preserve Log is enabled, console.clear() is disabled.

Alternatively, you can Clear the Console by clicking the icon.

Writes the number of times that count() has been invoked at the same line and with the same label. Call console.countReset([label]) to reset the count.

Returns a Task instance that associates the current stack trace with the created task object. You can later use this task object to run a function (f in the following example). The task.run(f) executes an arbitrary payload and forwards the return value back to the caller.

The task forms a link between the creation context and the context of the async function. This link lets DevTools show better stack traces for async operations. For more information, see Linked Stack Traces.

Identical to console.log(object [, object, ...]) except different log level.

Prints a JSON representation of the specified object.

Prints an XML representation of the descendants of node.

Prints object to the Console, formats it as an error, and includes a stack trace.

Visually groups messages together until console.groupEnd(label) is called. Use console.groupCollapsed(label) to collapse the group when it's initially logged to the Console.

Additionally, you can nest groups.

Same as console.group(label), except the group is initially collapsed when it's logged to the Console.

Stops visually grouping messages. See console.group.

Identical to console.log(object [, object, ...]).

Prints a message to the Console.

Logs an array of objects as a table.

By default, console.table() logs all table data. To display a single column or a subset of columns, you can use the second optional parameter and specify column name or names as a string or an array of strings. For example:

Starts a new timer. Call console.timeEnd([label]) to stop the timer and print the elapsed time to the Console.

Stops a timer. See console.time().

Prints a stack trace to the Console.

Prints a warning to the Console.

**Examples:**

Example 1 (javascript):
```javascript
const x = 5;
const y = 3;
const reason = 'x is expected to be less than y';
console.assert(x < y, {x, y, reason});
```

Example 2 (unknown):
```unknown
console.clear();
```

Example 3 (unknown):
```unknown
console.count();
console.count('coffee');
console.count();
console.count();
```

Example 4 (unknown):
```unknown
console.countReset();
console.countReset('coffee');
```

---

## Understand errors and warnings better with console insights Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/console/understand-messages

**Contents:**
- Understand errors and warnings better with console insights Stay organized with collections Save and categorize content based on your preferences.
- Requirements
- Turn on console insights
- Get explanations for console messages
- How your data is used
- Known issues
  - Wrong explanation
  - Prompt injection

Yang Guo X GitHub LinkedIn Sofia Emelianova GitHub Jecelyn Yeen X GitHub Bluesky Homepage

Ask Gemini to provide insights right in the DevTools Console, so you can better understand errors and warnings.

See also How your data is used and Known issues.

To use the console insights feature, make sure that you:

Your location (TW) is supported.

If you haven't yet turned on the console insights, the first time you use the feature, it will prompt you to do so and provide a link to settings Settings > AI innovations. Expand the Console Insights section, read the considerations, and turn on the corresponding toggle.

If you can't turn on the toggle, make sure to sign in to Chrome with your Google Account.

To get an explanation, do the following in Chrome:

On the demo page, click inside the search box. The drop-down menu fails to fetch and the Console shows an error.

Hover over the CORS error message. An Understand this error button appears to the right of the error message.

To get an explanation of the error, click Understand this error.

If you are launching console insights for the first time, it will prompt you to turn on the feature in settings.

After a few seconds, an explanation will appear below the console error.

To see a list of links to sources and related content that Gemini used to generate the answer, expand the Sources and related content section.

To see what data Gemini used to generate an explanation, expand the Data used to understand this message section.

If you don't think the explanation is satisfactory, you can click Use search instead to open a new tab with search results for the error.

This notice and our privacy notice describe how Chrome DevTools handles your data. Read them carefully.

Chrome DevTools uses the console message, associated stack trace, related source code, and the associated network headers as input data. When you use Understand this message, Google collects this input data, generated output, related feature usage information, and your feedback. Google uses this data to provide, improve, and develop Google products and services and machine learning technologies, including Google's enterprise products such as Google Cloud.

To help with quality and improve our products, human reviewers may read, annotate, and process the above-mentioned input data, generated output, related feature usage information, and your feedback. Don't include sensitive (for example, confidential) or personal information that can be used to identify you or others in your prompts or feedback. Your data will be stored in a way where Google cannot tell who provided it and can no longer fulfill any deletion requests and will be retained for up to 18 months. We may not collect data to improve our product if your Google Account is managed by an organization.

As you try Understand this message, here are key things to know:

To use the feature, you need to agree that your use of Understand this message is subject to the Google Terms of Service.

Chrome DevTools uses Google's large language models to generate an explanation. Large language models, or LLMs, are a new and active area of research. The responses that LLMs generate are sometimes questionable or even outright wrong. It is important that you understand that the results may be inaccurate or misleading, so always double check!

LLMs generate content that sounds likely and plausible. In most cases, this content contains truthful and useful insights that can help you understand an error or warning in the relevant context. Modern web development and debugging is a challenging craft with a high level of complexity that requires years of experience to become proficient in. Sometimes, the responses that LLMs produce sound convincing but are actually misleading or meaningless to a human web developer. We are doing our best to continuously improve the quality and correctness of generated insights. You can help us by submitting feedback when you encounter wrong explanations.

Many of LLM applications are susceptible to a form of abuse known as prompt injection. This feature is no different. It is possible to trick the LLM into accepting instructions that are not intended by the developers.

See the following harmless example:

---

## Run snippets of JavaScript Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/javascript/snippets

**Contents:**
- Run snippets of JavaScript Stay organized with collections Save and categorize content based on your preferences.
- Open the Snippets pane
- Create snippets
  - Create a snippet in the Sources panel
  - Create a snippet from the Command Menu
- Edit snippets
- Run snippets
  - Run a snippet in the Sources panel
  - Run a snippet from the Command Menu
- Rename snippets

Kayce Basques X GitHub Sofia Emelianova GitHub

If you find yourself running the same code in the Console repeatedly, consider saving the code as a snippet instead. Snippets have access to the page's JavaScript context. They are an alternative to bookmarklets.

You can author snippets in the Sources panel and run them on any page and in incognito mode.

For example, the screenshot below shows the DevTools documentation homepage on the left and some snippet source code in the Sources > Snippets pane on the right.

Here's the snippet source code that logs some message and replaces the homepage's HTML body with a <p> element that contains the message:

When you click the Run button, the Console drawer pops up to display the Hello, Snippets! message that the snippet logs, and the page's content changes.

The Snippets pane lists your snippets. To edit a snippet, open it in one of two ways:

Navigate to Sources > > Snippets.

From the Command Menu:

The Sources>Snippets pane shows you a list of snippets you saved, empty in this example.

You can create snippets in the Snippets pane or by running the corresponding command from the Command Menu anywhere in DevTools.

The Snippets pane sorts your snippets in alphabetical order.

Enter a name for your snippet and press Enter to save.

Start typing Snippet, select Create new snippet, then press Enter to run the command.

See Rename snippets if you'd like to give your new snippet a custom name.

In the Snippets pane, click the name of the snippet that you want to edit. The Sources panel opens it in the Code Editor.

Use the Code Editor to edit code in your snippet. An asterisk next to the snippet name means that you haven't saved your changes yet.

Press Control+S (Windows/Linux) or Command+S (Mac) to save.

Similar to creating a snippet, you can run it both in the Snippets pane and from the Command Menu.

Click Run in the action bar at the bottom of the editor, or press Control+Enter (Windows/Linux) or Command+Enter (Mac).

Type the ! character followed by the name of the snippet that you want to run.

Press Enter to run the snippet.

**Examples:**

Example 1 (javascript):
```javascript
console.log('Hello, Snippets!');
document.body.innerHTML = '';
const p = document.createElement('p');
p.textContent = 'Hello, Snippets!';
document.body.appendChild(p);
```

---

## Log messages in the Console Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/console/log

**Contents:**
- Log messages in the Console Stay organized with collections Save and categorize content based on your preferences.
- Set up the demo and DevTools
- View messages logged from JavaScript
- View messages logged by the browser
- Filter messages
  - Filter by log level
  - Filter by text
  - Filter by regular expression
  - Filter by message source
  - Filter by user messages

Kayce Basques X GitHub

This interactive tutorial shows you how to log and filter messages in the Chrome DevTools Console.

This tutorial is intended to be completed in order. It assumes that you understand the fundamentals of web development, such as how to use JavaScript to add interactivity to a page.

This tutorial is designed so that you can open up the demo and try all the workflows yourself. When you physically follow along, you're more likely to remember the workflows later.

Optional: Move the demo to a separate window. In this example, the tutorial is on the left, and the demo is on the right.

Focus the demo and then press Control+Shift+J or Command+Option+J (Mac) to open DevTools. By default DevTools opens to the right of the demo.

Optional: Dock DevTools to the bottom of the window or undock it into a separate window.

DevTools docked to the bottom of the demo:

DevTools undocked in a separate window:

Most messages that you see in the Console come from the web developers who wrote the page's JavaScript. The goal of this section is to introduce you to the different message types that you're likely to see in the Console, and explain how you can log each message type yourself from your own JavaScript.

Click the Log Info button in the demo. Hello, Console! gets logged to the Console.

Next to the Hello, Console! message in the Console, click log.js:2. The Sources panel opens and highlights the line of code that caused the message to get logged to the Console.

The message was logged when the page's JavaScript called console.log('Hello, Console!').

Navigate back to the Console using any of the following workflows:

Click the Log Warning button in the demo. Abandon Hope All Ye Who Enter gets logged to the Console.

Messages formatted like this are warnings.

Optional: Click log.js:12 to view the code that caused the message to get formatted like this, and then navigate back to Console when you're finished. Do this whenever you want to see the code that caused a message to get logged a certain way.

Click the Expand icon in front of Abandon Hope All Ye Who Enter. DevTools shows the stack trace leading up to the call.

The stack trace is telling you that a function named logWarning was called, which in turn called a function named quoteDante. In other words, the call that happened first is at the bottom of the stack trace. You can log stack traces at any time by calling console.trace().

Click Log Error. The following error message gets logged: I'm sorry, Dave. I'm afraid I can't do that.

Click Log Table. A table about famous artists gets logged to the Console.

Note how the birthday column is only populated for one row. Check the code to figure out why that is.

Click Log Group. The names of 4 famous, crime-fighting turtles are grouped under the Adolescent Irradiated Espionage Tortoises label.

Click Log Custom. A message with a red border and blue background gets logged to the Console.

The main idea here is that when you want to log messages to the Console from your JavaScript, you use one of the console methods. Each method formats messages differently.

There are even more methods than what has been demonstrated in this section. At the end of the tutorial you'll learn how to explore the rest of the methods.

The browser logs messages to the Console, too. This usually happens when there's a problem with the page.

Click Cause 404. The browser logs a 404 network error because the page's JavaScript tried to fetch a file that doesn't exist.

Click Cause Error. The browser logs an uncaught TypeError because the JavaScript is trying to update a DOM node that doesn't exist.

Click the Log Levels drop-down and enable the Verbose option if it's disabled. You'll learn more about filtering in the next section. You need to do this to make sure that the next message you log is visible. Note: If the Default Levels drop-down is disabled, you may need to close the Console Sidebar. Filter by Message Source below for more information about the Console Sidebar.

Click Cause Violation. The page becomes unresponsive for a few seconds and then the browser logs the message [Violation] 'click' handler took 3000ms to the Console. The exact duration may vary.

On some pages you'll see the Console get flooded with messages. DevTools provides many different ways to filter out messages that aren't relevant to the task at hand.

Each console.* method is assigned a severity level: Verbose, Info, Warning, or Error. For example, console.log() is an Info-level message, whereas console.error() is an Error-level message.

To filter by log level:

Click the Log Levels drop-down and disable Errors. A level is disabled when there is no longer a checkmark next to it. The Error-level messages disappear.

Click the Log Levels drop-down again and re-enable Errors. The Error-level messages reappear.

When you want to only view messages that include an exact string, type that string into the Filter text box.

Type Dave into the Filter text box. All messages that do not include the string Dave are hidden. You might also see the Adolescent Irradiated Espionage Tortoises label. That's a bug.

Delete Dave from the Filter text box. All the messages reappear.

When you want to show all messages that include a pattern of text, rather than a specific string, use a regular expression.

Type /^[AH]/ into the Filter text box. Type this pattern into RegExr for an explanation of what it's doing.

Delete /^[AH]/ from the Filter text box. All messages are visible again.

When you want to only view the messages that came from a certain URL, use the Sidebar.

Click Show Console Sidebar .

Click the Expand icon next to 12 Messages. The Sidebar shows a list of URLs that caused messages to be logged. For example, log.js caused 11 messages.

Earlier, when you clicked Log Info, a script called console.log('Hello, Console!') in order to log the message to the Console. Messages logged from JavaScript like this are called user messages. In contrast, when you clicked Cause 404, the browser logged an Error-level message stating that the requested resource could not be found. Messages like that are considered browser messages. You can use the Sidebar to filter out browser messages and only show user messages.

Click 9 User Messages. The browser messages are hidden.

Click 12 Messages to show all messages again.

What if you're editing styles, but you need to quickly check the Console log for something? Use the Drawer.

Press Escape. The Console tab of the Drawer opens. It has all of the features of the Console that you've been using throughout this tutorial.

Congratulations, you have completed the tutorial. Click Dispense Trophy to receive your trophy.

---

## Debug your original code instead of deployed with source maps Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/javascript/source-maps

**Contents:**
- Debug your original code instead of deployed with source maps Stay organized with collections Save and categorize content based on your preferences.
- Get started with preprocessors
  - Use a supported preprocessor
- Enable source maps in Settings
- Check if source maps loaded successfully
- Debugging with source maps
- Name eval() calls with #sourceURL

Meggin Kearney Paul Bakaus X Homepage Sofia Emelianova GitHub

Keep your client-side code readable and debuggable even after you've combined, minified or compiled it. Use source maps to map your source code to your compiled code in the Sources panel.

Source maps from preprocessors cause DevTools to load your original files in addition to your minified ones.

Chrome will actually run your minified code but the Sources panel will show you the code you author. You can set breakpoints and step through code in source files and all the errors, logs, and breakpoints will automatically map.

This gives you the appearance of debugging the code as you wrote it, as opposed to code that is served by your development server and executed by the browser.

To use source maps in the Sources panel:

Common preprocessors used in combination with source maps include but aren't limited to:

For an extended list, see Source maps: Languages, tools, and other info.

In Settings > Preferences > Sources, make sure to check JavaScript source maps.

See Developer Resources: View and load source maps manually.

With source maps ready and enabled, you can do the following:

To focus only on the code you author, group authored and deployed files in the file tree. Then expand the Authored section and open your original source file in the Editor.

Set a breakpoint as you normally would. For example, a logpoint. Then run the code.

Notice that the Editor puts a link to the deployed file in the status bar at the bottom. Similarly, it does so for deployed CSS files.

Open the Console drawer. In this example, next to the logpoint's message, the Console shows a link to the original file, not the deployed one.

Change the breakpoint type to a regular one and run the code again. The execution pauses this time.

Notice that the Call Stack pane shows the name of the original file and not the deployed one.

In the status bar at the bottom of the Editor, click the link to the deployed file. The Sources panel takes you to the corresponding file.

When you open any deployed file, DevTools notifies you if it found the //# sourceMappingURL comment and the associated original file.

Notice that the Editor automatically pretty-printed the deployed file. In reality, it contains all the code in a single line, except for the //# sourceMappingURL comment.

The #sourceURL lets you simplify debugging when dealing with eval() calls. This helper looks very similar to the //# sourceMappingURL property. For more information, see the Source Map V3 specification.

The //# sourceURL=/path/to/source.file comment tells the browser to look for the source file when you use eval(). This helps you name your evaluations and inline scripts and styles.

Test it on this demo page:

---

## Pause your code with breakpoints Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/javascript/breakpoints

**Contents:**
- Pause your code with breakpoints Stay organized with collections Save and categorize content based on your preferences.
- Overview of when to use each breakpoint type
- Line-of-code breakpoints
  - Line-of-code breakpoints in your code
  - Conditional line-of-code breakpoints
  - Log line-of-code breakpoints
  - Edit line-of-code breakpoints
    - Edit groups of breakpoints
    - Edit breakpoints
  - Skip breakpoints with 'Never pause here'

Kayce Basques X GitHub Sofia Emelianova GitHub

Use breakpoints to pause your JavaScript code. This guide explains each type of breakpoint that's available in DevTools, as well as when to use and how to set each type. For an interactive tutorial of the debugging process, see Get Started with Debugging JavaScript in Chrome DevTools.

The most well-known type of breakpoint is line-of-code. But line-of-code breakpoints can be inefficient to set, especially if you don't know exactly where to look, or if you are working with a large codebase. You can save yourself time when debugging by knowing how and when to use the other types of breakpoints.

Use a line-of-code breakpoint when you know the exact region of code that you need to investigate. DevTools always pauses before this line of code is executed.

To set a line-of-code breakpoint in DevTools:

This example shows a line-of-code breakpoint set on line 29.

Call debugger from your code to pause on that line. This is equivalent to a line-of-code breakpoint, except that the breakpoint is set in your code, not in the DevTools UI.

Use a conditional line-of-code breakpoint when you want to stop the execution but only when some condition is true.

Such breakpoints are useful when you want to skip breaks that are irrelevant to your case, especially in a loop.

To set a conditional line-of-code breakpoint:

This example shows a conditional line-of-code breakpoint that fired only when the x exceeded 10 in a loop at iteration i=6.

Use log line-of-code breakpoints (logpoints) to log messages to the Console without pausing the execution and without cluttering up your code with console.log() calls.

Enter your log message in the dialog. You can use the same syntax as you would with a console.log(message) call.

For example, you can log:

In this case, the logged message is:

Press Enter to activate the breakpoint. A pink icon with two dots appears on top of the line number column.

This example shows a logpoint at line 30 that logs a string and a variable value to the Console.

Use the Breakpoints section to disable, edit, or remove line-of-code breakpoints.

The Breakpoints section groups the breakpoints by file and orders them by line and column numbers. You can do the following with groups:

This video shows how to collapse groups and disable or enable breakpoints one by one or by groups. When you disable a breakpoint, the Sources panel makes its marker next to the line number transparent.

Groups have context menus. In the Breakpoints section, right-click a group and choose:

To edit a breakpoint:

When editing a breakpoint, change its type from the drop-down list in the inline editor.

Right-click a breakpoint to see its context menu and choose one of the options:

Watch the video to see various breakpoint edits in action: disable, remove, edit condition, reveal location from the menu, and change type.

Use a Never pause here line-of-code breakpoint to skip pauses that would happen for other reasons. This can be useful when you have turned on exception breakpoints but the debugger keeps stopping on a particularly noisy exception that you are not interested in debugging.

To mute a break location:

You can also mute breakpoint while the execution is paused. Watch the next video to learn the workflow.

With Never pause here, you can mute debugger statements and every other breakpoint type except line-of-code breakpoints and Event listener breakpoints.

Never pause here may fail on a line with multiple statements if the statement that shouldn't pause is different from the statement that causes the pause. In source mapped code, not every breakpoint location corresponds to the original statement that causes the break.

Use a DOM change breakpoint when you want to pause on the code that changes a DOM node or its children.

To set a DOM change breakpoint:

This example shows the context menu for creating a DOM change breakpoint.

You can find a list of DOM change breakpoints in:

Use an XHR/fetch breakpoint when you want to break when the request URL of an XHR contains a specified string. DevTools pauses on the line of code where the XHR calls send().

One example of when this is helpful is when you see that your page is requesting an incorrect URL, and you want to quickly find the AJAX or Fetch source code that is causing the incorrect request.

To set an XHR/fetch breakpoint:

This example shows how to create an XHR/fetch breakpoint in the XHR/fetch Breakpoints for any request that contains org in the URL.

Use event listener breakpoints when you want to pause on the event listener code that runs after an event is fired. You can select specific events, such as click, or categories of events, such as all mouse events.

This example shows how to create an event listener breakpoint for deviceorientation.

Additionally, the Debugger pauses on events that happen in web workers or worklets of any type, including the Shared Storage Worklets.

This example shows the Debugger paused on a setTimer event that happened in a service worker.

You can also find a list of event listeners in the Elements > Event Listeners pane.

Use exception breakpoints when you want to pause on the line of code that's throwing a caught or uncaught exception. You can pause on both such exceptions independently in any debug session other than Node.js.

In the Breakpoints section of the Sources panel, enable one of the following options or both, then execute the code:

Check Pause on uncaught exceptions.

In this example, the execution is paused on an uncaught exception.

Check Pause on caught exceptions.

In this example, the execution is paused on a caught exception.

With either or both caught and uncaught checkboxes turned on, the Debugger attempts to pause on the corresponding exceptions in both synchronous and asynchronous calls. In the asynchronous case, the Debugger looks for rejection handlers across promises to determine when to stop.

With Ignore List turned on, the Debugger pauses on exceptions caught either in non-ignored frames or passing through such a frame in the call stack.

The next example shows the Debugger paused on a caught exception thrown by the ignored library.js that passes through non-ignored mycode.js.

To learn more about Debugger behavior in edge cases, test a collection of scenarios on this demo page.

Call debug(functionName), where functionName is the function you want to debug, when you want to pause whenever a specific function is called. You can insert debug() into your code (like a console.log() statement) or call it from the DevTools Console. debug() is equivalent to setting a line-of-code breakpoint on the first line of the function.

DevTools throws a ReferenceError if the function you want to debug is not in scope.

Ensuring the target function is in scope can be tricky if you're calling debug() from the DevTools Console. Here's one strategy:

The Trusted Type API provides protection against security exploits known as cross-site scripting (XSS) attacks.

In the Breakpoints section of the Sources panel, go to the CSP Violation Breakpoints section and enable one of the following options or both, then execute the code:

Check Sink Violations.

In this example, the execution is paused on a sink violation.

Check Policy Violations.

In this example, the execution is paused on a policy violation. Trusted Type policies are set up using trustedTypes.createPolicy.

You can find more information about using the API:

**Examples:**

Example 1 (unknown):
```unknown
console.log('a');
console.log('b');
debugger;
console.log('c');
```

Example 2 (unknown):
```unknown
"A string " + num, str.length > 1, str.toUpperCase(), obj
```

Example 3 (unknown):
```unknown
// str = "test"
// num = 42
// obj = {attr: "x"}
A string 42 true TEST {attr: 'x'}
```

Example 4 (javascript):
```javascript
function sum(a, b) {
  let result = a + b; // DevTools pauses on this line.
  return result;
}
debug(sum); // Pass the function object, not a string.
sum();
```

---

## Run JavaScript in the Console Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/console/javascript

**Contents:**
- Run JavaScript in the Console Stay organized with collections Save and categorize content based on your preferences.
- Overview
- Set up DevTools
- View and change the page's JavaScript or DOM
- Run arbitrary JavaScript that's not related to the page
- Next steps

Kayce Basques X GitHub

This interactive tutorial shows you how to run JavaScript in the Chrome DevTools Console. See Get Started With Logging Messages to learn how to log messages to the Console. See Get Started With Debugging JavaScript to learn how to pause JavaScript code and step through it one line at a time.

Figure 1. The Console.

The Console is a REPL, which stands for Read, Evaluate, Print, and Loop. It reads the JavaScript that you type into it, evaluates your code, prints out the result of your expression, and then loops back to the first step.

This tutorial is designed so that you can open up the demo and try all the workflows yourself. When you physically follow along, you're more likely to remember the workflows later.

Press Command+Option+J (Mac) or Control+Shift+J (Windows, Linux, ChromeOS) to open the Console, right here on this very page.

Figure 2. This tutorial on the left, and DevTools on the right.

When building or debugging a page, it's often useful to run statements in the Console in order to change how the page looks or runs.

Notice the text in the button below.

Type document.getElementById('hello').textContent = 'Hello, Console!' in the Console and then press Enter to evaluate the expression. Notice how the text inside the button changes.

Figure 3. How the Console looks after evaluating the expression above.

Below the code that you evaluated you see "Hello, Console!". Recall the 4 steps of REPL: read, evaluate, print, loop. After evaluating your code, a REPL prints the result of the expression. So "Hello, Console!" must be the result of evaluating document.getElementById('hello').textContent = 'Hello, Console!'.

Sometimes, you just want a code playground where you can test some code, or try out new JavaScript features you're not familiar with. The Console is a perfect place for these kinds of experiments.

Type the following code into the Console. Try typing it out, character-by-character, rather than copy-pasting it.

See define default values for function arguments if you're unfamiliar with the b=20 syntax.

Now, call the function that you just defined.

Figure 4. How the Console looks after evaluating the expressions above.

add(25) evaluates to 45 because when the add function is called without a second argument, b defaults to 20.

You will not be able to run any code in this console session until your function has returned. If that takes too long, you can use the Task Manager to cancel the time-intensive computation; however, it will also cause the current page to fail and all data you have entered will be lost.

See Run JavaScript to explore more features related to running JavaScript in the Console.

DevTools lets you pause a script in the middle of its execution. While you're paused, you can use the Console to view and change the page's window or DOM at that moment in time. This makes for a powerful debugging workflow. See Get Started With Debugging JavaScript for an interactive tutorial.

The Console also supports a set of format specifiers. See Format and style messages in the Console to explore all the method to format and style console messages.

Apart from that, the Console also has a set of convenience functions that make it easier to interact with a page. For example:

See Console Utilities API Reference to explore all the convenience functions.

**Examples:**

Example 1 (unknown):
```unknown
function add(a, b=20) {
  return a + b;
}
```

---
