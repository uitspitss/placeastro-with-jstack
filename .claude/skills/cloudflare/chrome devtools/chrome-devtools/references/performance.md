# Chrome-Devtools - Performance

**Pages:** 4

---

## Record heap snapshots Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots

**Contents:**
- Record heap snapshots Stay organized with collections Save and categorize content based on your preferences.
- Take a snapshot
- Clear snapshots
- View snapshots
  - Summary view
    - Constructor filters
    - Special entries in Summary
      - (array)
      - (compiled code)
      - (concatenated string)

Meggin Kearney Sofia Emelianova GitHub

Learn how to record heap snapshots with Memory > Profiles > Heap snapshot and find memory leaks.

The heap profiler shows memory distribution by your page's JavaScript objects and related DOM nodes. Use it to take JS heap snapshots, analyze memory graphs, compare snapshots, and find memory leaks. For more information, see Objects retaining tree.

To take a heap snapshot:

When the Memory panel loads and parses the snapshot, it shows the total size of reachable JavaScript objects below the snapshot title in the HEAP SNAPSHOTS section.

Snapshots show only the objects from the memory graph that are reachable from the global object. Taking a snapshot always starts with garbage collection.

To remove all snapshots, click block Clear all profiles:

To inspect snapshots from different perspectives for different purposes, select one of the views from the drop-down menu at the top:

Initially, a heap snapshot opens in the Summary view that lists Constructors in a column. Constructors are named after the JavaScript function that created the object, plain objects names are based on the proper they contain, and some names are special entries. All objects are grouped by their names first, then by the line in the source file they come from, for example, source-file.js:line-number.

You can expand grouped constructors to see the objects they instantiated.

To filter out irrelevant constructors, type a name that you want to inspect in the Class filter at the top of the Summary view.

The numbers next to constructor names indicate the total number of objects created with the constructor. The Summary view also shows the following columns:

When you expand a constructor, the Summary view shows you all of its instances. Each instance gets a breakdown of its shallow and retained sizes in the corresponding columns. The number after the @ character is the object's unique ID. It lets you compare heap snapshots on per-object basis.

Summary view lets you filter constructors based on common cases of inefficient memory usage.

To use these filters, select one of the following options from the rightmost drop-down menu in the action bar:

In addition to grouping by constructors, the Summary view also groups objects by:

This category includes various internal array-like objects that don't directly correspond to objects visible in JavaScript.

For example, the contents of JavaScript Array objects are stored in a secondary internal object named (object elements)[], to allow easier resizing. Similarly, the named properties in JavaScript objects are often stored in secondary internal objects named (object properties)[] that are also listed in the (array) category.

This category includes internal data that V8 needs so that it can run functions defined by JavaScript or WebAssembly. Each function can be represented in a variety of ways, from small and slow to large and fast.

V8 automatically manages memory usage in this category. If a function runs many times, V8 uses more memory for that function so that it can run faster. If a function hasn't run in a while, V8 may clear the internal data for that function.

When V8 concatenates two strings, such as with the JavaScript + operator, it may choose to represent the result internally as a "concatenated string" also known as the Rope data structure.

Rather than copying all of the characters of the two source strings into a new string, V8 allocates a small object with internal fields called first and second, which point to the two source strings. This lets V8 save time and memory. From the perspective of JavaScript code, these are just normal strings, and they behave like any other string.

This category represents objects allocated outside V8, such as C++ objects defined by Blink.

To see C++ class names, use Chrome for Testing and do the following:

As described in Fast Properties in V8, V8 tracks hidden classes (or shapes) so that multiple objects with the same properties in the same order can be represented efficiently. This category contains those hidden classes, called system / Map (unrelated to JavaScript Map), and related data.

When V8 needs to take a substring, such as when JavaScript code calls String.prototype.substring(), V8 may choose to allocate a sliced string object rather than copying all of the relevant characters from the original string. This new object contains a pointer to the original string and describes which range of characters from the original string to use.

From the perspective of JavaScript code, these are just normal strings, and they behave like any other string. If a sliced string is retaining a lot of memory, then the program may have triggered Issue 2869 and might benefit from taking deliberate steps to "flatten" the sliced string.

Internal objects of type system / Context contain local variables from a closure—a JavaScript scope that a nested function can access.

Every function instance contains an internal pointer to the Context in which it executes, so that it can access those variables. Even though Context objects aren't directly visible from JavaScript, you do have direct control over them.

This category contains various internal objects that haven't (yet) been categorized in any more meaningful way.

The Comparison view lets you find leaked objects by comparing multiple snapshots to each other. For example, doing an action and reversing it, like opening a document and closing it, shouldn't leave extra objects behind.

To verify that a certain operation doesn't create leaks:

The Comparison view shows the difference between two snapshots. When expanding a total entry, added and deleted object instances are shown:

The Containment view is a "bird's eye view" of your application's objects structure. It lets you peek inside function closures, observe VM internal objects that together make up your JavaScript objects, and to understand how much memory your application uses at a very low level.

The view provides several entry points:

The Retainers section at the bottom of the Memory panel shows objects that point to the object selected in the view. The Memory panel updates the Retainers section when you select a different objects in any of the views except Statistics.

In this example, the selected string is retained by the x property of an Item instance.

You can hide retainers to find out of any other objects retain the selected one. With this option, you don't have to first remove this retainer from the code and then retake the heap snapshot.

To hide a retainer, right-click and select Ignore this retainer. Ignored retainers are marked as ignored in the Distance column. To stop ignoring all retainers, click playlist_remove Restore ignored retainers in the action bar at the top.

To find an object in the collected heap you can search using Ctrl + F and enter the object ID.

It helps a lot to name the functions so you can distinguish between closures in the snapshot.

For example, the following code doesn't use named functions:

Whilst this example does:

The heap profiler has the ability to reflect bidirectional dependencies between browser-native objects (DOM nodes and CSS rules) and JavaScript objects. This helps discover otherwise invisible leaks happening due to forgotten detached DOM subtrees floating around.

DOM leaks can be bigger than you think. Consider the following example. When is the #tree garbage collected?

#leaf maintains a reference to its parent (parentNode) and recursively up to #tree, so only when leafRef is nullified is the whole tree under #tree a candidate for GC.

**Examples:**

Example 1 (unknown):
```unknown
function createLargeClosure() {
  var largeStr = new Array(1000000).join('x');

  var lC = function() { // this is NOT a named function
    return largeStr;
  };

  return lC;
}
```

Example 2 (unknown):
```unknown
function createLargeClosure() {
  var largeStr = new Array(1000000).join('x');

  var lC = function lC() { // this IS a named function
    return largeStr;
  };

  return lC;
}
```

Example 3 (unknown):
```unknown
var select = document.querySelector;
  var treeRef = select("#tree");
  var leafRef = select("#leaf");
  var body = select("body");

  body.removeChild(treeRef);

  //#tree can't be GC yet due to treeRef
  treeRef = null;

  //#tree can't be GC yet due to indirect
  //reference from leafRef

  leafRef = null;
  //#NOW #tree can be garbage collected
```

---

## Fix memory problems Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/memory-problems

**Contents:**
- Fix memory problems Stay organized with collections Save and categorize content based on your preferences.
- Summary
- Overview
  - Memory bloat: how much is "too much"?
- Monitor memory use in realtime with the Chrome Task Manager
- Visualize memory leaks with Performance recordings
- Discover detached DOM tree memory leaks with Heap Snapshots
- Identify JS heap memory leaks with Allocation Timelines
- Investigate memory allocation by function
- Identify objects retained by JS reference

Kayce Basques X GitHub

Learn how to use Chrome and DevTools to find memory issues that affect page performance, including memory leaks, memory bloat, and frequent garbage collections.

In the spirit of the RAIL performance model, the focus of your performance efforts should be your users.

Memory issues are important because they are often perceivable by users. Users can perceive memory issues in the following ways:

A memory leak is easy to define. If a site is progressively using more and more memory, then you've got a leak. But memory bloat is a bit harder to pin down. What qualifies as "using too much memory"?

There are no hard numbers here, because different devices and browsers have different capabilities. The same page that runs smoothly on a high-end smartphone might crash on a low-end smartphone.

The key here is to use the RAIL model and focus on your users. Find out what devices are popular with your users, and then test out your page on those devices. If the experience is consistently bad, the page may be exceeding the memory capabilities of those devices.

Use the Chrome Task Manager as a starting point to your memory issue investigation. The Task Manager is a real-time monitor that tells you how much memory a page is using.

Press Shift+Esc or go to the Chrome main menu and select More tools > Task manager to open the Task Manager.

Right-click on the table header of the Task Manager and enable JavaScript memory.

These two columns tell you different things about how your page is using memory:

The JavaScript Memory column represents the JS heap. This column contains two values. The value you're interested in is the live number (the number in parentheses). The live number represents how much memory the reachable objects on your page are using. If this number is increasing, either new objects are being created, or the existing objects are growing.

You can also use the Performance panel as another starting point in your investigation. The Performance panel helps you visualize a page's memory use over time.

To demonstrate Performance memory recordings, consider the following code:

Every time that the button referenced in the code is pressed, ten thousand div nodes are appended to the document body, and a string of one million x characters is pushed onto the x array. Running this code produces a Timeline recording like the following screenshot:

First, an explanation of the user interface. The HEAP graph in the Overview pane (below NET) represents the JS heap. Below the Overview pane is the Counter pane. Here you can see memory usage broken down by JS heap (same as HEAP graph in the Overview pane), documents, DOM nodes, listeners, and GPU memory. Disabling a checkbox hides it from the graph.

Now, an analysis of the code compared with the screenshot. If you look at the node counter (the green graph) you can see that it matches up cleanly with the code. The node count increases in discrete steps. You can presume that each increase in the node count is a call to grow(). The JS heap graph (the blue graph) is not as straightforward. In keeping with best practices, the first dip is actually a forced garbage collection (achieved by pressing the collect garbage button). As the recording progresses you can see that the JS heap size spikes. This is natural and expected: the JavaScript code is creating the DOM nodes on every button click and doing a lot of work when it creates the string of one million characters. The key thing here is the fact that the JS heap ends higher than it began (the "beginning" here being the point after the forced garbage collection). In the real world, if you saw this pattern of increasing JS heap size or node size, it would potentially mean a memory leak.

A DOM node can only be garbage collected when there are no references to it from either the page's DOM tree or JavaScript code. A node is said to be "detached" when it's removed from the DOM tree but some JavaScript still references it. Detached DOM nodes are a common cause of memory leaks. This section teaches you how to use DevTools' heap profilers to identify detached nodes.

Here's a simple example of detached DOM nodes.

Clicking the button referenced in the code creates a ul node with ten li children. These nodes are referenced by the code but do not exist in the DOM tree, so they're detached.

Heap snapshots are one way to identify detached nodes. As the name implies, heap snapshots show you how memory is distributed among your page's JS objects and DOM nodes at the point of time of the snapshot.

To create a snapshot, open DevTools and go to the Memory panel, select the Heap Snapshot radio button, and then press the Take snapshot button.

The snapshot may take some time to process and load. Once it's finished, select it from the lefthand panel (named Heap snapshots).

Type Detached in the Class filter input box to search for detached DOM trees.

Expand the carats to investigate a detached tree.

Click a node to investigate it further. In the Objects pane you can see more information about the code that's referencing it. For example, in the following screenshot you can see that the detachedTree variable is referencing the node. To fix this particular memory leak, you would study the code that uses detachedTree and ensure that it removes its reference to the node when it's no longer needed.

The Allocation Timeline is another tool that can help you track down memory leaks in your JS heap.

To demonstrate the Allocation Timeline consider the following code:

Every time that the button referenced in the code is pushed, a string of one million characters is added to the x array.

To record an Allocation Timeline, open DevTools, go to the Memory panel, select the Allocations on timeline radio button, press the radio_button_checked Record button, perform the action that you suspect is causing the memory leak, and then press the Stop recording button when you're done.

As you're recording, notice if any blue bars show up on the Allocation Timeline, like in the following screenshot.

Those blue bars represent new memory allocations. Those new memory allocations are your candidates for memory leaks. You can zoom on a bar to filter the Constructor pane to only show objects that were allocated during the specified timeframe.

Expand the object and click on its value to view more details about it in the Object pane. For example, in the screenshot below, by viewing the details of the object that was newly allocated, you'd be able to see that it was allocated to the x variable in the Window scope.

Use the Allocation sampling profile type in the Memory panel to view memory allocation by JavaScript function.

DevTools shows you a breakdown of memory allocation by function. The default view is Heavy (Bottom Up), which displays the functions that allocated the most memory at the top.

The Detached elements profile shows you detached elements that persist because they are referenced by JavaScript code.

Record a Detached elements profile to view the exact HTML nodes and node count.

If your page appears to pause frequently, then you may have garbage collection issues.

You can use either the Chrome Task Manager or Timeline memory recordings to spot frequent garbage collections. In the Task Manager, frequently rising and falling Memory or JavaScript Memory values represent frequent garbage collections. In Timeline recordings, frequently rising and falling JS heap or node count graphs indicate frequent garbage collections.

Once you've identified the problem, you can use an Allocation Timeline recording to find out where memory is being allocated and which functions are causing the allocations.

**Examples:**

Example 1 (unknown):
```unknown
var x = [];

function grow() {
  for (var i = 0; i < 10000; i++) {
    document.body.appendChild(document.createElement('div'));
  }
  x.push(new Array(1000000).join('x'));
}

document.getElementById('grow').addEventListener('click', grow);
```

Example 2 (unknown):
```unknown
var detachedTree;

function create() {
  var ul = document.createElement('ul');
  for (var i = 0; i < 10; i++) {
    var li = document.createElement('li');
    ul.appendChild(li);
  }
  detachedTree = ul;
}

document.getElementById('create').addEventListener('click', create);
```

Example 3 (unknown):
```unknown
var x = [];

function grow() {
  x.push(new Array(1000000).join('x'));
}

document.getElementById('grow').addEventListener('click', grow);
```

---

## How to Use the Allocation Timeline Tool Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/memory-problems/allocation-profiler

**Contents:**
- How to Use the Allocation Timeline Tool Stay organized with collections Save and categorize content based on your preferences.
- How the tool works
- Record an Allocation timeline report
- Read a heap allocation profile
- View memory allocation by function

Use the Allocation timeline tool to find objects that aren't being properly garbage collected, and continue to retain memory.

An Allocation timeline report combines the detailed snapshot information of the heap profiler with the incremental updating and tracking of the Timeline panel. Similar to these tools, tracking heap allocation involves starting a recording, performing a sequence of actions, then stop the recording for analysis.

The tool takes heap snapshots periodically throughout the recording (as frequently as every 50 ms!) and one final snapshot at the end of the recording.

To begin using the Allocation timeline tool, follow these steps:

The heap allocation profile shows where objects are being created and identifies the retaining path. In the following snapshot, the bars at the top indicate when new objects are found in the heap.

The height of each bar corresponds to the size of the recently allocated objects, and the color of the bars indicate whether or not those objects are still live in the final heap snapshot. Blue bars indicate objects that are still live at the end of the timeline, Gray bars indicate objects that were allocated during the timeline, but have since been garbage collected:

You can zoom in to filter the Constructor pane to only show objects that were allocated during the specified timeframe. To zoom in, drag your mouse across the timeframe you'd like to focus on in the timeline.

Clicking on a specific constructor in the Constructor pane will show its retaining tree in the Retainers pane. Examining the retaining path to the object should give you enough information to understand why the object was not collected, and you can make the necessary code changes to remove the unnecessary reference.

You can also view memory allocation by JavaScript function. See Investigate memory allocation by function for more information.

---

## Memory terminology Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/memory-problems/get-started

**Contents:**
- Memory terminology Stay organized with collections Save and categorize content based on your preferences.
- Object sizes
  - Shallow size
  - Retained size
- Objects retaining tree
- Dominators
- V8 specifics
  - JavaScript object representation
  - Object groups

This section describes common terms used in memory analysis, and is applicable to a variety of memory profiling tools for different languages.

The terms and notions described here refer to the Chrome DevTools Heap Profiler. If you have ever worked with either the Java, .NET, or some other memory profiler, then this may be a refresher.

Think of memory as a graph with primitive types (like numbers and strings) and objects (associative arrays). It might visually be represented as a graph with a number of interconnected points as follows:

An object can hold memory in two ways:

When working with the Heap Profiler in DevTools (a tool for investigating memory issues found in the Memory panel), you will likely find yourself looking at a few different columns of information. Two that stand out are Shallow Size and Retained Size, but what do these represent?

This is the size of memory that is held by the object itself.

Typical JavaScript objects have some memory reserved for their description and for storing immediate values. Usually, only arrays and strings can have a significant shallow size. However, strings and external arrays often have their main storage in renderer memory, exposing only a small wrapper object on the JavaScript heap.

Renderer memory is all memory of the process where an inspected page is rendered: native memory + JS heap memory of the page + JS heap memory of all dedicated workers started by the page. Nevertheless, even a small object can hold a large amount of memory indirectly, by preventing other objects from being disposed of by the automatic garbage collection process.

This is the size of memory that is freed once the object itself is deleted along with its dependent objects that were made unreachable from GC roots.

GC roots are made up of handles that are created (either local or global) when making a reference from native code to a JavaScript object outside of V8. All such handles can be found within a heap snapshot under GC roots > Handle scope and GC roots > Global handles. Describing the handles in this documentation without diving into details of the browser implementation may be confusing. Both GC roots and the handles are not something you need to worry about.

There are lots of internal GC roots most of which are not interesting for the users. From the applications standpoint there are following kinds of roots:

The memory graph starts with a root, which may be the window object of the browser or the Global object of a Node.js module. You don't control how this root object is GC'd.

Whatever is not reachable from the root gets GC.

The heap is a network of interconnected objects. In the mathematical world, this structure is called a graph or memory graph. A graph is constructed from nodes connected by means of edges, both of which are given labels.

Learn how to record a profile using the Heap Profiler. Some of the eye-catching things we can see in the following Heap Profiler recording include distance: the distance from the GC root. If almost all the objects of the same type are at the same distance, and a few are at a bigger distance, that's something worth investigating.

Dominator objects are comprised of a tree structure because each object has exactly one immediate dominator. A dominator of an object may lack direct references to an object it dominates; that is, the dominator's tree is not a spanning tree of the graph.

In the following diagram:

In the following example, nodes #7, #3, and GC are dominators of #10 because they exist in every path from the root (GC) to #10. Specifically, #7 is the immediate dominator of #10 as it's the closest dominator on the path from GC to #10.

When profiling memory, it is helpful to understand why heap snapshots look a certain way. This section describes some memory-related topics specifically corresponding to the V8 JavaScript virtual machine (V8 VM or VM).

There are three primitive types:

They cannot reference other values and are always leafs or terminating nodes.

Numbers can be stored as either:

Strings can be stored in either:

Memory for new JavaScript objects is allocated from a dedicated JavaScript heap (or VM heap). These objects are managed by V8's garbage collector and therefore, will stay alive as long as there is at least one strong reference to them.

Native objects are everything else which is not in the JavaScript heap. Native object, in contrast to heap object, is not managed by the V8 garbage collector throughout its lifetime, and can only be accessed from JavaScript using its JavaScript wrapper object.

Cons string is an object that consists of pairs of strings stored then joined, and is a result of concatenation. The joining of the cons string contents occurs only as needed. An example would be when a substring of a joined string needs to be constructed.

For example, if you concatenate a and b, you get a string (a, b) which represents the result of concatenation. If you later concatenated d with that result, you get another cons string ((a, b), d).

Arrays - An Array is an Object with numeric keys. They are used extensively in the V8 VM for storing large amounts of data. Sets of key-value pairs used like dictionaries are backed up by arrays.

A typical JavaScript object can be one of two array types used for storing:

In cases where there is a very small number of properties, they can be stored internally in the JavaScript object itself.

Map-an object that describes the kind of object and its layout. For example, maps are used to describe implicit object hierarchies for fast property access.

Each native objects group is made up of objects that hold mutual references to each other. Consider, for example, a DOM subtree where every node has a link to its parent and links to the next child and next sibling, thus forming a connected graph. Note that native objects are not represented in the JavaScript heap—that's why they have zero size. Instead, wrapper objects are created.

Each wrapper object holds a reference to the corresponding native object, for redirecting commands to it. In its own turn, an object group holds wrapper objects. However, this doesn't create an uncollectable cycle, as GC is smart enough to release object groups whose wrappers are no longer referenced. But forgetting to release a single wrapper will hold the whole group and associated wrappers.

---
