# Chrome-Devtools - Elements

**Pages:** 20

---

## Animations: Inspect and modify CSS animation effects Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/css/animations

**Contents:**
- Animations: Inspect and modify CSS animation effects Stay organized with collections Save and categorize content based on your preferences.
- Overview
  - What's an animation group?
- Open the Animations panel
- Get familiar with the Animations panel UI
- Inspect animations
  - View animation details
- Modify animations
- Edit @keyframes live
- Edit the ::view-transition pseudo-elements during an animation

Kayce Basques X GitHub Sofia Emelianova GitHub

Inspect and modify animations with the Chrome DevTools Animations drawer tab.

To capture animations, open the Animations panel. It automatically detects animations and sorts them into groups.

The Animations panel has two main purposes:

The Animations panel supports CSS animations, CSS transitions, web animations, and the View Transitions API. requestAnimationFrame animations are not yet supported.

An animation group is a set of animations that appear to be related to each other.

For now, the web has no real concept of a group animation, so motion designers and developers compose and time individual animations to appear as one coherent visual effect. The Animations panel predicts related animations based on start time (excluding delays) and groups them side-by-side.

In other words, the Animations panel groups together animations triggered in the same script block, but if they're asynchronous, they end up in different groups.

There are two ways to open the Animations panel:

Open the Command Menu by pressing one of the following:

Then start typing Show Animations and select the corresponding Drawer panel.

By default, the Animations panel opens up as a tab next to the Console drawer. As a drawer tab, you can use it with any panel or move it to the top of DevTools.

The Animations panel automatically captures ongoing animations when you open it. If an animation is triggered on page load or has already stopped, reload the page with the panel open.

The Animations panel has four main sections:

Overview. Shows captured animation groups of two types marked with icons: mouse scroll-driven and schedule regular (time-based).

Select an animation group here to inspect and modify it in the Details pane.

Timeline. Depending on the type of animation group, the timeline can be:

In the timeline, you can replay Replay an animation, scrub it, or jump to a specific point.

Details. Inspect and modify the selected animation group.

To capture an animation, trigger it while the Animations panel is open.

Once you've captured an animation, there are a few ways to replay it:

Click the Animation speed buttons in the Controls bar to change the preview speed of the selected animation group.

Once you've captured an animation group, click it from the Overview pane to view its details.

In the Details pane, each individual animation gets its own row. To see the entire name of the corresponding element, resize the name column.

Hover over an animation to highlight it in the viewport. Click the animation to select it in the Elements panel.

Some animations repeat indefinitely if their animation-iteration-count property is set to infinite. The Animations panel displays their definitions and iterations.

The leftmost, darker section of an animation is its definition. The right, more faded sections represent iterations.

For example, in the next screenshot, sections two and three represent iterations of section one.

If two elements have the same animation applied to them, the Animations panel assigns them the same color. The color itself is random and has no significance. For example, in the screenshot below the two elements div.eye.left::after and div.eye.right::after have the same animation (eyes) applied to them, as do the div.feet::before and div.feet::after elements.

There are three ways you can modify an animation with the Animations panel:

For this section, suppose that the next screenshot represents the original animation:

To change the duration of an animation, drag the first or last circle.

If the animation defines any keyframe rules, then these are represented as white inner circles. Drag one of these to change the timing of the keyframe.

To add a delay to an animation, click the animation itself, not the circles, then drag it anywhere.

When you modify @keyframes in Styles, you can see the effects in the Animations panel right away.

Try it on this demo page:

With the View Transitions API, you can change the DOM in a single step, while creating an animated transition between the two states. During an animation, the API constructs a pseudo-element tree with the following structure:

To edit this structure in Elements > Styles:

On the page, trigger an animation. The Animations panel captures it and immediately pauses. You can now find the ::view-transition structure in the DOM, on top of the <head> element.

In Elements > Styles, modify the CSS of ::view-transition pseudo-elements.

Resume the animation and Replay it to see the result.

For more information, see Smooth and simple transitions with the View Transitions API.

**Examples:**

Example 1 (unknown):
```unknown
::view-transition
└─ ::view-transition-group(root)
   └─ ::view-transition-image-pair(root)
      ├─ ::view-transition-old(root)
      └─ ::view-transition-new(root)
```

---

## View the properties of DOM objects Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/dom/properties

**Contents:**
- View the properties of DOM objects Stay organized with collections Save and categorize content based on your preferences.
- Open the Properties tab
- Spot own properties
- Find the origin of an inherited property
- Filter properties
- Show all properties
- Understand properties
  - Simple properties
  - Objects and arrays
  - Properties that correspond to DOM nodes

Sofia Emelianova GitHub

Use the Elements > Properties tab to browse and filter properties of DOM objects.

To open the Properties tab, follow these steps:

The Properties tab sorts and displays the object's own properties first and in bold font.

The Properties tab evaluates accessors on built-in elements and displays them on the object as inherited and in regular font.

To find the origin of an inherited property, expand an object, then its [[Prototype]], then the nested [[Prototype]], and so on.

In this example, you can trace where the inherited size property came from by locating the original own (bold) property on the prototype chain together with the corresponding getter.

Additionally, prototype-specific properties are shown only on prototypes, not on objects. This makes it easier to diagnose objects.

To quickly find a property, start typing its name or value in the Filter input box.

By default, the Properties tab doesn't show properties with null and undefined values.

To see all properties, check Show all.

The Elements > Properties tab shows a variety of properties.

Simple properties are pairs of <name>: <value>.

Collapsible (arrow_right) properties are objects {} or arrays [].

For more information on inspecting JavaScript objects, see Inspect object properties.

Properties that correspond to DOM nodes are links. Click a link to select the relevant node in the DOM tree.

Properties in bold font are object's own. They are defined directly on the object.

Properties in regular font are inherited from the prototype chain. To show them to you, DevTools evaluates relevant accessors on built-in HTML elements. DevTools sorts own properties first to make them easier to spot.

Enumerable properties are bright in color. Non-enumerable properties are muted. You can iterate over the enumerable properties with the for … in loop or Object.keys() method.

Methods are marked with an f ().

For more information on functions, see Inspect functions via the Console.

---

## Inspect CSS grid layouts Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/css/grid

**Contents:**
- Inspect CSS grid layouts Stay organized with collections Save and categorize content based on your preferences.
- Discover CSS grids
- Align grid items and their content with the Grid Editor
- Grid viewing options
- Overlay display settings
  - Show line numbers
  - Hide line labels
  - Show line names
  - Show track sizes
  - Show area names

Jecelyn Yeen X GitHub Bluesky Homepage Sofia Emelianova GitHub

This guide shows you how to discover CSS grids on a page, examine them, and debug layout issues in the Elements panel of Chrome DevTools.

The examples shown in the screenshots appearing in this article are from these two web pages: Fruit box and Snack box.

When an HTML element on your page has display: grid or display: inline-grid applied to it, you can see a grid badge next to it in the Elements panel.

Click the badge to toggle the display of a grid overlay on the page. The overlay appears over the element, laid out like a grid to show the position of its grid lines and tracks:

Open the Layout pane. When grids are included on a page, the Layout pane includes a Grid section containing a number of options for viewing those grids.

You can align grid items and their content with a click of a button instead of typing CSS rules.

To align grid items and their content:

In the Elements > Styles pane, click the Grid Editor button next to display: grid.

In the Grid Editor, click the corresponding buttons to set the align-* and justify-* CSS properties for the grid items and their content.

Observe the adjusted grid items and content in the viewport.

The Grid section in the Layout pane contains 2 sub sections:

Let's look into each of these sub sections in detail.

The Overlay display settings consists of two parts:

a. A drop-down menu with the following options:

b. Checkboxes with options within:

Let's examine these settings in more detail.

By default, the positive and negative line numbers are displayed on the grid overlay.

Select Hide line labels to hide the line numbers.

You can select Show line names to view the line names instead of numbers. In this example, we have four lines with names: left, middle1, middle2 and right.

In this demo, the orange element spans from left to right, with CSS grid-column: left / right. Showing line names makes it easier to visualize the start and end position of the element.

Enable the Show track sizes checkbox to view the track sizes of the grid.

DevTools will display [authored size] - [computed size] in each line label: Authored size: The size defined in the stylesheet (omitted if not defined). Computed size: The actual size on the screen.

In this demo, the snack-box column sizes are defined in the CSS grid-template-columns:1fr 2fr;. Therefore, the column line labels show both authored and computed sizes: 1fr - 96.66px and 2fr - 193.32px.

The row line labels show only computed sizes: 80px and 80px since there are no row sizes defined in the stylesheet.

To view the area names, enable the Show area names checkbox. In this example, there are three areas in the grid - top, bottom1 and bottom2.

Enable the Extend grid lines checkbox to extend the grid lines to the edge of the viewport along each axis.

The Grid overlays section contains a list of grids that are present on the page, each with a checkbox, along with various options.

You can enable overlay views of multiple grids. In this example, there are two grid overlays enabled - main and div.snack-box, each represented with different colors.

You can customize each grid overlay color by clicking the color picker.

Click the highlight icon to immediately highlight the HTML element, scroll to it in the page and select it in the Elements panel.

---

## Inspect and debug HD and non-HD colors with the Color Picker Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/css/color

**Contents:**
- Inspect and debug HD and non-HD colors with the Color Picker Stay organized with collections Save and categorize content based on your preferences.
- Open the Color Picker and change colors
- Color Picker elements
- Choose a color space
  - Convert colors
- Fix contrast
- Sample a color anywhere with the Eyedropper

Jecelyn Yeen X GitHub Bluesky Homepage Sofia Emelianova GitHub

The Color Picker provides a GUI for changing color and *-color declarations and lets you create, convert, and debug non-HD and HD colors with a click.

For a deep dive on the new color spaces, see High Definition CSS Color Guide.

Use the Color Picker to change color values with a click:

In the Styles pane, find the color or *-color declaration you want to change.

To the left of each color or *-color value, there is a small square icon with a preview of that color.

Note: This example shows two intersected circles next to the color-mix() function: . The intersection is a preview of the resulting color.

To inspect the computed value, use the Computed pane.

Here's a description of each of the UI elements of the Color Picker:

Color palette switcher. Click it to toggle between:

To choose a color space:

Shift-click the preview icon next a color value. A drop-down list opens.

Choose one of the following color spaces:

Or one of the new spaces:

Or a space defined by the color(<color_space> X X X) function.

When you switch between color spaces with the Display value switcher, DevTools automatically converts the values.

Hover over the icon to see the original value.

The next video shows conversions in action.

To fix a contrast issue for a color declaration:

Use the suggested color that complies with a guideline:

To get a list of all contrast issues in one go, follow the Make your website more readable guide.

The Eyedropper can sample colors both from the page and from anywhere on the screen.

To pick a color from anywhere on the screen:

In this example, the Color Picker shows a current color value of rgb(224 255 255 / 15%). This color changes to pink once you click outside Chrome.

---

## View and edit local storage Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/storage/localstorage

**Contents:**
- View and edit local storage Stay organized with collections Save and categorize content based on your preferences.
- View localStorage keys and values
- Filter key-value pairs
- Create a new localStorage key-value pair
- Edit localStorage keys or values
- Delete localStorage key-value pairs
- Interact with localStorage from the Console

Kayce Basques X GitHub Sofia Emelianova GitHub

This guide shows you how to use Chrome DevTools to view, edit, and delete localStorage key-value pairs. Local storage saves data across browser sessions.

Open DevTools on the website you want to inspect.

Navigate to Application > Storage and expand Local Storage. Click a domain to view its key-value pairs.

To preview the value below the table, select a pair.

To manually refresh the key-value pairs, click Refresh in the action bar at the top.

To quickly find a key-value pair you need, type into the filter box at the top a string that either the key or value contains.

Since you can run JavaScript in the Console, and since the Console has access to the page's JavaScript contexts, it's possible to interact with localStorage from the Console.

---

## Get started with viewing and changing the DOM Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/dom

**Contents:**
- Get started with viewing and changing the DOM Stay organized with collections Save and categorize content based on your preferences.
- View DOM nodes
  - Inspect a node
  - Navigate the DOM Tree with a keyboard
  - Scroll into view
  - Show rulers
  - Search for nodes
- Edit the DOM
  - Edit content
  - Edit attributes

Kayce Basques X GitHub Sofia Emelianova GitHub

Watch the video and complete these interactive tutorials to learn the basics of viewing and changing a page's DOM using Chrome DevTools.

This tutorial assumes that you know the difference between the DOM and HTML. See Appendix: HTML versus the DOM for an explanation.

The DOM Tree of the Elements panel is where you do all DOM-related activities in DevTools.

When you're interested in a particular DOM node, Inspect is a fast way to open DevTools and investigate that node.

Click the Tokyo text below.

Now, <li>Tokyo</li> is highlighted in the DOM Tree.

Inspecting a node is also the first step towards viewing and changing a node's styles. See Get Started With Viewing And Changing CSS.

Once you've selected a node in the DOM Tree, you can navigate the DOM Tree with your keyboard.

Right-click Ringo below and select Inspect. <li>Ringo</li> is selected in the DOM Tree.

Press the Up arrow key 2 times. <ul> is selected.

Press the Left arrow key. The <ul> list collapses.

Press the Left arrow key again. The parent of the <ul> node is selected. In this case it's the <li> node containing the instructions for step 1.

Press the Down arrow key 3 times so that you've re-selected the <ul> list that you just collapsed. It should look like this: <ul>...</ul>

Press the Right arrow key. The list expands.

When viewing the DOM Tree, sometimes you'll find yourself interested in a DOM node that's not currently in the viewport. For example, suppose that you scrolled to the bottom of the page, and you're interested in the <h1> node at the top of the page. Scroll into view lets you quickly reposition the viewport so that you can see the node.

Right-click Magritte below and select Inspect.

Go to the Appendix: Scroll into view section at the bottom of this page. The instructions continue there.

After completing the instructions at the bottom of the page you should jump back up to here.

With rulers above and to the left of your viewport, you can measure the width and height of an element when you hover over it in the Elements panel.

Enable the rulers in one of two ways:

The sizing unit of the rulers is pixels.

You can search the DOM Tree by string, CSS selector, or XPath selector.

Type The Moon is a Harsh Mistress. The last sentence is highlighted in the DOM Tree.

As mentioned above, the Search bar also supports CSS and XPath selectors.

The Elements panel selects the first matching result in the DOM tree and rolls it into view in the viewport. By default, this happens as you type. If you always work with long search queries, you can make DevTools run search only when you press Enter.

To avoid unnecessary jumps between nodes, clear the settings Settings > Preferences > Global > Search as you type checkbox.

You can edit the DOM on the fly and see how those changes affect the page.

To edit a node's content, double-click the content in the DOM Tree.

Right-click Michelle below and select Inspect.

In the DOM Tree, double-click Michelle. In other words, double-click the text between <li> and </li>. The text is highlighted blue to indicate that it's selected.

Delete Michelle, type Leela, then press Enter to confirm the change. The text above changes from Michelle to Leela.

To edit attributes, double-click the attribute name or value. Follow the instructions below to learn how to add attributes to a node.

Right-click Howard below and select Inspect.

Double-click <li>. The text is highlighted to indicate that the node is selected.

Press the Right arrow key, add a space, type style="background-color:gold", and then press Enter. The background color of the node changes to gold.

You can also use the Edit attribute right-click option.

To edit a node's type, double-click the type and then type in the new type.

Right-click Hank below and select Inspect.

Double-click <li>. The text li is highlighted.

Delete li, type button, then press Enter. The <li> node changes to a <button> node.

To edit nodes as HTML with syntax highlighting and autocomplete, select Edit as HTML from the node's drop-down menu.

Right-click Leonard below and select Inspect.

In the Elements panel, right-click the current node and select Edit as HTML from the drop-down menu.

Press Enter to start a new line and start typing <l. DevTool highlights HTML syntax and autocompletes tags for you.

Select the li element from the autocomplete menu and type >. DevTools automatically adds the closing </li> tag after the cursor.

Type Sheldon inside the tag and press Control / Command + Enter to apply changes.

You can duplicate an element using the Duplicate element right-click option.

Right-click Nana below and select Inspect.

In the Elements panel, right-click <li>Nana</li> and select Duplicate element from the drop-down menu.

Return to the page. The list item has been instantly duplicated.

You can also use the keyboard shortcuts: Shift + Alt + Down arrow (Windows and Linux) and Shift + Option + Down arrow (MacOS).

You can screenshot any individual node in the DOM Tree using Capture node screenshot.

Right-click any image on this page and select Inspect.

In the Elements panel, right-click the image URL and select Capture node screenshot from the drop-down menu.

The screenshot will be saved to your downloads.

To learn more ways to take screenshots with Devtools, see 4 ways to capture screenshots with DevTools.

Drag nodes to reorder them.

Right-click Elvis Presley below and select Inspect. Notice that it's the last item in the list.

Stevie Wonder Tom Waits Chris Thile Elvis Presley

In the DOM Tree, drag <li>Elvis Presley</li> to the top of the list.

You can force nodes to remain in states like :active, :hover, :focus, :visited, and :focus-within.

Hover over The Lord of the Flies below. The background color becomes orange.

The Lord of the Flies Crime and Punishment Moby Dick

Right-click The Lord of the Flies above and select Inspect.

Right-click <li class="demo--hover">The Lord of the Flies</li> and select Force State > :hover. See Appendix: Missing options if you don't see this option. The background color remains orange even though you're not actually hovering over the node.

Press H to hide a node.

Right-click The Stars My Destination below and select Inspect.

Press the H key. The node is hidden. You can also right-click the node and use the Hide element option.

Press the H key again. The node is shown again.

Press Delete to delete a node.

Right-click Foundation below and select Inspect.

Press the Delete key. The node is deleted. You can also right-click the node and use the Delete element option.

Press Control+Z or Command+Z (Mac). The last action is undone and the node reappears.

DevTools provides a few shortcuts for accessing DOM nodes from the Console, or getting JavaScript references to them.

When you inspect a node, the == $0 text next to the node means that you can reference this node in the Console with the variable $0.

Right-click The Left Hand of Darkness below and select Inspect.

Press the Escape key to open the Console Drawer.

Type $0 and press the Enter key. The result of the expression shows that $0 evaluates to <li>The Left Hand of Darkness</li>.

Hover over the result. The node is highlighted in the viewport.

Click <li>Dune</li> in the DOM Tree, type $0 in the Console again, and then press Enter again. Now, $0 evaluates to <li>Dune</li>.

If you need to refer back to a node many times, store it as a global variable.

Right-click The Big Sleep below and select Inspect.

Right-click <li>The Big Sleep</li> in the DOM Tree and select Store as global variable. See Appendix: Missing options if you don't see this option.

Type temp1 in the Console and then press Enter. The result of the expression shows that the variable evaluates to the node.

Copy the JavaScript path to a node when you need to reference it in an automated test.

Right-click The Brothers Karamazov below and select Inspect.

Right-click <li>The Brothers Karamazov</li> in the DOM Tree and select Copy > Copy JS Path. A document.querySelector() expression that resolves to the node has been copied to your clipboard.

Press Control+V or Command+V (Mac) to paste the expression into the Console.

Press Enter to evaluate the expression.

DevTools allows you to pause a page's JavaScript when the JavaScript modifies the DOM. See DOM change breakpoints.

That covers most of the DOM-related features in DevTools. You can discover the rest of them by right-clicking nodes in the DOM Tree and experimenting with the other options that weren't covered in this tutorial. See also Elements panel keyboard shortcuts.

Check out the Chrome DevTools homepage to discover everything else you can do with DevTools.

See Community if you want to contact the DevTools team or get help from the DevTools community.

This section quickly explains the difference between HTML and the DOM.

When you use a web browser to request a page like https://example.com the server returns HTML like this:

The browser parses the HTML and creates a tree of objects like this:

This tree of objects, or nodes, representing the page's content is called the DOM. Right now it looks the same as the HTML, but suppose that the script referenced at the bottom of the HTML runs this code:

That code removes the h1 node and adds another p node to the DOM. The complete DOM now looks like this:

The page's HTML is now different than its DOM. In other words, HTML represents initial page content, and the DOM represents current page content. When JavaScript adds, removes, or edits nodes, the DOM becomes different than the HTML.

See Introduction to the DOM to learn more.

This is a continuation of the Scroll into view section. Follow the instructions below to complete the section.

Right-click the <li>Magritte</li> node and select Scroll into view. Your viewport scrolls back up so that you can see the Magritte node. See Appendix: Missing options if you can't see the Scroll into view option.

Many of the instructions in this tutorial instruct you to right-click a node in the DOM Tree and then select an option from the context menu that pops up. If you don't see the specified option in the context menu, try right-clicking away from the node text.

**Examples:**

Example 1 (unknown):
```unknown
<!doctype html>
<html>
  <head>
    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is a hypertext document on the World Wide Web.</p>
    <script src="/script.js" async></script>
  </body>
</html>
```

Example 2 (unknown):
```unknown
html
  head
    title
  body
    h1
    p
    script
```

Example 3 (javascript):
```javascript
const h1 = document.querySelector('h1');
h1.parentElement.removeChild(h1);
const p = document.createElement('p');
p.textContent = 'Wildcard!';
document.body.appendChild(p);
```

Example 4 (unknown):
```unknown
html
  head
    title
  body
    p
    script
    p
```

---

## Find invalid, overridden, inactive, and other CSS Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/css/issues

**Contents:**
- Find invalid, overridden, inactive, and other CSS Stay organized with collections Save and categorize content based on your preferences.
- Inspect the CSS you author
- Understand CSS in the Styles pane
  - Matched and unmatched selectors
  - Invalid values and declarations
  - Overridden
  - Inactive
  - Inherited and non-inherited
  - Shorthand
  - Non-editable

Sofia Emelianova GitHub

This guide assumes that you're familiar with inspecting CSS in Chrome DevTools. See View and change CSS to learn the basics.

Suppose that you added some CSS to an element and want to make sure the new styles are applied properly. When you refresh the page, the element looks the same as before. Something is wrong.

The first thing to do is inspect the element and make sure that your new CSS is actually applied to the element.

Sometimes, you'll see your new CSS in the Elements > Styles pane but your new CSS is in pale text, non-editable, crossed out, or has a warning or hint icon next to it.

The Styles pane recognizes many kinds of CSS issues and highlights them in different ways.

The Styles pane shows matched selectors in regular text and unmatched ones in pale text.

The Styles pane crosses out and displays warning icons next to the following:

The Styles pane crosses out properties that are overridden by other properties according to the Cascading order.

In this example, the width: 300px; style attribute on the element overrides width: 100% on the .youtube class.

The Styles pane displays in pale text and puts information icons next to properties that are valid but have no effect because of other properties.

These pale properties are inactive because of CSS logic, not the Cascading order.

In this example, the display: block; property disables justify-content and align-items that control flex or grid layouts.

The Styles pane lists properties in Inherited from <element-name> sections depending on their default inheritance:

Shorthand (concise) properties let you set multiple CSS properties at once and can make your stylesheet more readable. However, due to the short nature of such properties, you may miss a longhand (precise) property that overrides a property implied by the shorthand.

The Styles pane displays shorthand properties as drop-down lists that contain all the properties that are shortened.

In this example, two of four shortened properties are actually overridden.

The Styles pane displays properties that can't be edited in italic text. For example, the CSS from the following sources can't be edited:

user agent stylesheet—Chrome's default stylesheet.

Style-related HTML attributes on the element, for example, height, width, color, etc. You can edit them in the DOM tree and this updates the CSS in the Styles pane, but not the other way around.

In this example, the height="48" attribute on an <svg> element is set to 50. This updates the corresponding property under svg[Attributes Style] in the Styles pane.

To try to find what goes wrong, you may want to check:

The Elements > Styles pane displays the exact set of CSS rules as they are written in various stylesheets. On the other hand, the Elements > Computed pane lists resolved CSS values that Chrome uses to render an element:

The Computed pane also displays various properties differently.

The Computed pane lists the properties declared in any stylesheet in regular font, both element's own and inherited. Click the expand icon next to them to see their source.

To see the declaration in the Styles pane, hover over the expanded property and click the arrow button.

To see the declaration in the Sources pane, click the link to the source file.

For properties with multiple sources, the Computed pane shows the Cascade winner first.

The Computed pane lists property values calculated at runtime in pale text.

In this example, Chrome calculated the following for the <ul> element:

To make the Computed pane show all properties and their values, check Show all. All properties include:

To break this big list into categories, check Group.

This example shows the initial values for non-inherited properties under Animation and custom properties under CSS Variables.

To investigate a specific property and its potential duplicates, type that property name in the Filter textbox. You can do this both in the Styles and Computed panes.

See Search and filter an element's CSS.

See Coverage: Find unused JavaScript and CSS.

---

## Badges reference Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/elements/badges

**Contents:**
- Badges reference Stay organized with collections Save and categorize content based on your preferences.
- Show or hide badges
- Grid
- Subgrid
- Flex
- Ad
- Scroll
- Scroll-snap
- Container
- Slot

Sofia Emelianova GitHub

Toggle various overlays and speed up DOM tree navigation with this comprehensive reference of badges in the Elements panel.

To show or hide certain badges:

The Elements panel shows the selected badges next to the appropriate elements in the DOM tree. The next sections explain every badge.

An HTML element is a grid container if its display CSS property is set to grid or inline-grid. Such elements have grid badges next to them that toggle the corresponding overlays.

Toggle the overlay on the following preview:

The overlay shows columns, rows, their numbers, and gaps.

To learn how to debug grid layout, see Inspect CSS grid.

A subgrid is a nested grid that uses the same tracks as its parent grid. An element is a subgrid container if one or both of its grid-template-columns, grid-template-rows properties are set to subgrid. Such elements have subgrid badges next to them that toggle the corresponding overlays.

Toggle the overlay on the following preview:

The overlay shows columns, rows, their numbers, and gaps of a subgrid.

An HTML element is a flex container if its display CSS property is set to flex or inline-flex. Such elements have flex badges next to them that toggle the corresponding overlays.

Toggle the overlay on the following preview:

The overlay shows child element positions.

To learn how to debug flex layouts, see Inspect and debug CSS flexbox.

DevTools can detect some ad frames and tag them. Such frames have ad badges next to them.

Discover an ad in the following preview:

The ad badge is not clickable but you can use the Rendering tab to highlight ad frames in red.

An HTML element is a scroll container if its overflow CSS property is set to scroll, or auto when there's enough content to cause overflow. Such elements have scroll badges next to them.

Scroll containers can have CSS properties that configure snap points. Such elements have scroll-snap badges next to them that toggle the corresponding overlays.

Toggle the overlay on the following preview:

The overlay shows element positions and snap points.

An HTML element is a container if it has the container-type CSS property. Such elements have container badges next to them that toggle the corresponding overlays.

Toggle the overlay on the following preview:

The overlay shows child element positions.

To learn how to debug container queries, see Inspect and debug CSS container queries.

The <slot> HTML element is a placeholder that you can fill with your own content. Together with the <template> element, <slot> lets you create separate DOM trees and present them together. Slot content elements have ink_selectionslot badges next to them that serve as links to the corresponding slots.

Discover the ink_selectionslot badge in the following preview:

This badge helps you understand the concept of the top layer and visualize it. The top layer renders content on top of all other layers, regardless of z-index. When you open a <dialog> element using the .showModal() method, the browser puts it into the top layer.

To help you visualize top layer elements, the Elements panel adds a #top-layer container to the DOM tree after the closing </html> tag.

Top layer elements have ink_selectiontop-layer (N) badges next to them, where N is the element's index number. The badges are links to the corresponding elements in the #top-layer container.

Discover the ink_selectiontop-layer (N) badge in the following preview:

The media badge is turned off by default. When turned on, it appears next to <audio> and <video> elements. Click this badge to open the Media panel and debug your media.

For more information, see Debug media players with the Media panel.

---

## Memory Inspector: Inspect ArrayBuffer, TypedArray, DataView, and Wasm Memory. Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/memory-inspector

**Contents:**
- Memory Inspector: Inspect ArrayBuffer, TypedArray, DataView, and Wasm Memory. Stay organized with collections Save and categorize content based on your preferences.
- Overview
- Open the Memory Inspector
  - Open from the menu
  - Open during debugging
  - Inspect multiple objects
- The Memory inspector
  - Navigation bar
  - Memory buffer
  - Value inspector

Jecelyn Yeen X GitHub Bluesky Homepage Sofia Emelianova GitHub

Use the Memory inspector to inspect ArrayBuffer, TypedArray, and DataView memory in JavaScript as well as WebAssembly.Memory of Wasm applications written in C++.

The Memory inspector organizes memory content and helps you navigate large arrays quickly. You can view the ASCII values of memory content directly next to the bytes, and select different endianness. Use the Memory inspector while you debug your web app for an efficient workflow.

There are a few ways to open the Memory inspector.

You can open the Memory inspector:

The Memory inspector consists of 3 main areas:

Let's inspect the memory together.

The WebAssembly.Memory object is an ArrayBuffer that holds the raw bytes of object memory. The Memory Inspector panel lets you inspect such objects in Wasm applications written in C++.

To take full advantage of WebAssembly.Memory inspection:

To inspect the WebAssembly.Memory of an object:

Click the icon next to the x: int[10] array.

Alternatively, right-click the array and select Reveal in Memory Inspector panel.

To stop highlighting object memory, in the Memory Inspector panel, hover over the object badge and click the x button.

---

## Analyze CSS selector performance during Recalculate Style events Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/performance/selector-stats

**Contents:**
- Analyze CSS selector performance during Recalculate Style events Stay organized with collections Save and categorize content based on your preferences.
- Record a performance trace with Selector Stats turned on
- View CSS rule selector statistics for a single event
  - Table of CSS selectors in the Selector Stats tab
- View CSS rule selector statistics for multiple events
- View aggregate CSS rule selector statistics for the full recording
- Analyze CSS selector stats

Sofia Emelianova GitHub

The Performance panel marks each long-running task with a red triangle in the upper right corner and a warning in the Summary tab, to indicate work on the main thread that takes a long time to run and has slow performance:

In your performance recordings, some of these long-running tasks may be Recalculate Style events. A Recalculate Style event tracks the time it takes for the browser to do the following:

CSS styles need to be recalculated whenever the applicability of CSS rules may have changed, such as when:

Long-running Recalculate Style events can be problematic for performance, and can be a cause of long presentation delays that affect your website's Interaction to Next Paint (INP). If you find long-running Recalculate Style events, you can use the Selector Stats tab to understand which of your CSS selectors is taking the most time and slowing down performance.

The Selector Stats tab provides statistics about the CSS rule selectors that were involved in one or more Recalculate Style events within a performance recording.

To view the statistics of your CSS rule selectors during long-running Recalculate Style events, record a performance trace with the Selector Stats capture setting turned on.

To record a performance trace with selector statistics:

Open a web page, for example, the Photo Gallery demo page.

Open DevTools and navigate to the Performance panel.

In the Performance panel, click the settings Capture settings button and check check_box Enable CSS selector stats.

Click radio_button_checked Record, run the scenario that you want to improve, then click stop_circle Stop.

Then, view CSS selector statistics, as described in the next sections.

To view the statistics of the CSS rule selectors that are involved in a single Recalculate Style event:

Record a performance trace with Selector Stats turned on.

Find a Recalculate Style event in your performance recording and click it.

In the bottom section of the Performance panel, open the Selector Stats tab.

The Selector Stats tab contains a table of CSS selectors. The table displays the following information for each CSS selector:

When finished, in the Performance panel, open settings Capture settings and clear check_box Enable CSS selector stats.

To view aggregate statistics of the CSS rule selectors that are involved in multiple Recalculate Style events, copy multiple Selector Stats tables into a spreadsheet, as follows:

Record a performance trace with Selector Stats turned on.

Find the first Recalculate Style event you're interested in, and then click it.

In the bottom section of the Performance panel, open the Selector Stats tab.

Right-click the selector stats table and select Copy table.

Paste the table into a spreadsheet, such as Google Sheets.

Repeat the previous steps with the other Recalculate Style events you're interested in.

When finished, in the Performance panel, open settings Capture settings and clear check_box Enable CSS selector stats.

To view aggregate statistics of the CSS rule selectors that are involved in the entire performance recording:

Record a performance trace with Selector Stats turned on.

Click an empty area of the flame chart to deselect any event that may be selected.

Select the entire recording range. To do this, double-click the CPU chart at the top of the Performance panel.

In the bottom section of the Performance panel, open the Selector Stats tab. You will see a new row at the top with data on totals for all selectors.

When finished, in the Performance panel, open settings Capture settings and clear check_box Enable CSS selector stats.

To sort the data in the Selector Stats table in ascending or descending order, click a column header. For example, to see which CSS selectors take up the most time, click the Elapsed (ms) column header.

To try to improve the performance of your web page, focus on the CSS selectors that:

For example, in the previous screenshot:

Therefore, this CSS selector is the first candidate to try to improve.

Try to change your CSS selectors so they require less time to calculate and match fewer elements on the page. How to improve your CSS selectors depends on your particular use case.

Repeat the steps in this tutorial to confirm that your changes helped decrease the Recalculate Style event duration, in the Elapsed (ms) column.

---

## Inspect and debug CSS flexbox layouts Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/css/flexbox

**Contents:**
- Inspect and debug CSS flexbox layouts Stay organized with collections Save and categorize content based on your preferences.
- Discover CSS flexbox
- Modify layouts with the flexbox editor
- Examine the flexbox layout
- Adjust the flexbox overlay color

Jecelyn Yeen X GitHub Bluesky Homepage

This guide shows you how to discover flexbox elements on a page, as well as inspect and modify the flexbox layouts in the Elements panel.

The screenshots appearing in this article are from this web page: Centering a text element with Flexbox.

When an HTML element on your page has display: flex or display: inline-flex applied to it, you can see a flex badge next to it in the Elements panel.

You can modify flexbox layouts visually with the flexbox editor. For example, here is how you can center the text <h1> of this demo page within its container <div class="container">.

You can hover over the flexbox element in the Elements panel to visualize the layout. The overlay appears over the element, laid out with dotted lines to show the position of its content and items.

Alternatively, you can click on the badge to toggle the display of the flexbox overlay.

Try changing the value to justify-content: flex-end. The overlay is changed accordingly.

The icons in the flex editor are context-aware. It will change according to the layout direction. For example, when you change the flex-direction to column, the icons in the flex editor are rotated accordingly. The overlay is updated immediately too.

Open the Layout pane and scroll down to the Flexbox section. You can view all the flexbox elements of the page here.

You can toggle the overlay of each flexbox element with the checkbox next to it. It is the same as you click on the badge in the DOM tree.

Apart from that, you can change the color of the overlay by clicking on the color icon next to it. For example, the color of the container overlay is changed to black.

To navigate to a flexbox element in the DOM tree, you can click on the selector icon next to it.

---

## View and change CSS Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/css

**Contents:**
- View and change CSS Stay organized with collections Save and categorize content based on your preferences.
- View an element's CSS
- Add a CSS declaration to an element
- Add a CSS class to an element
- Add a pseudostate to a class
- Change the dimensions of an element

Kayce Basques X GitHub Sofia Emelianova GitHub

Complete these interactive tutorials to learn the basics of viewing and changing a page's CSS using Chrome DevTools.

Right-click the Inspect me! text below and select Inspect. The Elements panel of DevTools opens.

Observe the Inspect me! element highlighted blue in the DOM Tree.

In the DOM Tree, find the value of the data-message attribute for the Inspect me! element.

Enter the attribute's value in the text box below.

In the Elements > Styles tab, find the aloha class rule.

The Styles tab lists the CSS rules being applied to whatever element is selected in the DOM Tree, which should still be the Inspect me! element.

The aloha class is declaring a value for padding. Enter this value and its unit without spaces in the text box below.

If you'd like to dock your DevTools window to the right of your viewport, like on the screenshot in step one, see Change DevTools placement.

Use the Styles tab when you want to change or add CSS declarations to an element.

Right-click the Add a background color to me! text below and select Inspect.

Add a background color to me!

Click element.style near the top of the Styles tab.

Type background-color and press Enter.

Type honeydew and press Enter. In the DOM tree, you can see that an inline style declaration was applied to the element.

Use the Styles tab to see how an element looks when a CSS class is applied to or removed from an element.

Right-click the Add a class to me! element below and select Inspect.

Click .cls. DevTools reveals a text box where you can add classes to the selected element.

Type color_me in the Add new class text box and then press Enter. A checkbox appears below the Add new class text box, where you can toggle the class on and off. If the Add a class to me! element had any other classes applied to it, you'd also be able to toggle them from here.

Use the Styles tab to apply a CSS pseudostate to an element.

Hover over the Hover over me! text below. The background color changes.

Right-click the Hover over me! text and select Inspect.

In the Styles tab, click :hov.

Check the :hover checkbox. The background color changes like before, even though you're not actually hovering over the element.

For more information, see Toggle a pseudo-class.

Use the Box Model interactive diagram in the Styles tab to change the width, height, padding, margin, or border length of an element.

Right-click the Change my margin! element below and select Inspect.

To see the Box Model, click the Show sidebar button in the action bar on the Styles tab.

In the Box Model diagram in the Styles tab, hover over padding. The element's padding is highlighted in the viewport.

Double-click the left margin in the Box Model. The element currently doesn't have margins, so the margin-left has a value of -.

Type 100 and press Enter.

The Box Model defaults to pixels, but it also accepts other values, such as 25%, or 10vw.

---

## Inspect and debug CSS container queries Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/css/container-queries

**Contents:**
- Inspect and debug CSS container queries Stay organized with collections Save and categorize content based on your preferences.
- Discover containers and their descendants
- Inspect container queries
- Find container elements
- Modify container queries

Sofia Emelianova GitHub Jecelyn Yeen X GitHub Bluesky Homepage

This guide shows you how to inspect and debug CSS container queries in the Elements panel in Chrome DevTools.

CSS container queries allow you to manipulate the element's styles based on its parent container properties. This capability shifts the concept of responsive web design from page-based to container-based.

The screenshots in this guide are taken from this demo page.

Every element defined as a query container has a container badge next to it in the Elements panel. The badge toggles a dotted-line overlay of the container and its descendants.

To toggle the overlay:

In this example, the container-type: inline-size property defines the container element. The descendants can query its inline dimension (horizontal axis) and change their styles based on the width of the container.

The Elements panel shows @container query declarations when they are applied to a descendant element, that is, when the container fulfills the query's condition.

To understand when you can inspect @container declarations on this demo page, examine the following code sample:

In this example, if the container's width exceeds the following number of pixels, the corresponding styles apply:

To inspect the first @container declaration:

Select the p element. In the Styles pane, you can see the @container declaration along with a link to the parent container article.card.

Set the width to more than 600px, then select any of the affected elements. Observe @container declarations that implement a horizontal layout.

To find and select a container element that caused the query to take effect, hover over and click the element name above the @container declaration.

When hovered over, the name turns into a link to the element in the Elements panel and the Styles pane displays the queried property and its current value.

To debug a query, you can modify it as any other CSS declaration in the Styles pane as described in View and change CSS.

In this example, the container's width is 500px. The paragraph (p) element appears on the page.

**Examples:**

Example 1 (unknown):
```unknown
@container (inline-size > 400px) {
  .coffee p {
    display: block;
  }
}

@container (inline-size > 600px) {
  .coffee {
    display: grid;
    grid-template-columns: 280px auto;
  }

  .coffee h1 {
    grid-column: 1/3;
  }

  .coffee img {
    grid-row: 2/4;
  }
```

---

## Inspect network activity Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/network

**Contents:**
- Inspect network activity Stay organized with collections Save and categorize content based on your preferences.
- When to use the Network panel
- Open the Network panel
- Log network activity
- Show more information
- Simulate a slower network connection
- Capture screenshots
- Inspect a resource's details
- Search network headers and responses
- Filter resources

Kayce Basques X GitHub

This is a hands-on tutorial of some of the most commonly-used DevTools features related to inspecting a page's network activity.

See Network Reference if you'd like to browse features instead.

Read on, or watch the video version of this tutorial:

In general, use the Network panel when you need to make sure that resources are being downloaded or uploaded as expected. The most common use cases for the Network panel are:

If you're looking for ways to improve page load performance, don't start with the Network panel. There are many types of load performance issues that aren't related to network activity. Start with the Lighthouse panel because it gives you targeted suggestions on how to improve your page. See Optimize Website Speed.

To get the most out of this tutorial, open up the demo and try out the features on the demo page.

Open the Get Started Demo.

You might prefer to move the demo to a separate window.

Open DevTools by pressing Control+Shift+J or Command+Option+J (Mac). The Console panel opens.

You might prefer to dock DevTools to the bottom of your window.

Click the Network tab. The Network panel opens.

Right now the Network panel is empty. That's because DevTools only logs network activity while it's open and no network activity has occurred since you opened DevTools.

To view the network activity that a page causes:

Reload the page. The Network panel logs all network activity in the Network Log.

Each row of the Network Log represents a resource. By default the resources are listed chronologically. The top resource is usually the main HTML document. The bottom resource is whatever was requested last.

Each column represents information about a resource. The default columns are:

So long as you've got DevTools open, it will record network activity in the Network Log. To demonstrate this, first look at the bottom of the Network Log and take note of the last activity.

Now, click the Get Data button in the demo.

Look at the bottom of the Network Log again. There's a new resource called getstarted.json. Clicking the Get Data button caused the page to request this file.

The columns of the Network Log are configurable. You can hide columns that you're not using. There are also many columns that are hidden by default which you may find useful.

Right-click the header of the Network Log table and select Domain. The domain of each resource is now shown.

The network connection of the computer that you use to build sites is probably faster than the network connections of the mobile devices of your users. By throttling the page you can get a better idea of how long a page takes to load on a mobile device.

Click the Throttling drop-down, which is set to No throttling by default.

Long-press Reload refresh and then select Empty Cache And Hard Reload.

On repeat visits, the browser usually serves some files from its cache, which speeds up the page load. Empty Cache And Hard Reload forces the browser to go to the network for all resources. This is helpful when you want to see how a first-time visitor experiences a page load.

Screenshots capture how your page looks at different times while it loads, and reports what resources are loaded at each interval.

To capture screenshots, follow these steps:

Click Network Settings settings.

Enable the Screenshots check_box checkbox.

Reload the page again using the Empty Cache And Hard Reload workflow. See Simulate a slower connection if you need a reminder on how to do this. The Screenshots tab provides thumbnails of how the page looked at various points during the loading process.

Click the first thumbnail. DevTools shows you what network activity was occurring at that moment in time.

Toggle the Screenshots checkbox to close the Screenshots tab.

Reload the page again.

Click a resource to learn more information about it. Try it now:

Click getstarted.html. The Headers tab is shown. Use this tab to inspect HTTP headers.

Click the Preview tab to view a basic HTML rendering.

This tab is helpful when an API returns an error code in HTML and it's easier to read the rendered HTML than the HTML source code, or when inspecting images.

Click the Response tab to view the HTML source code.

Click the Initiator tab to view a tree that maps the request initiator chain.

Click the Timing tab to view a breakdown of the network activity for this resource.

Click Close close to view the Network Log again.

Use the Search tab when you need to search the HTTP headers and responses of all resources for a certain string or regular expression.

For example, suppose you want to check if your resources are using reasonable cache policies.

Click Search search. The Search tab opens to the left of the Network log.

Type Cache-Control and press Enter. The Search tab lists all instances of Cache-Control that it finds in resource headers or content.

Click a result to view it. If the query was found in a header, the Headers tab opens. If the query was found in content, the Response tab opens.

Close the Search tab and the Headers tab.

DevTools provides numerous workflows for filtering out resources that aren't relevant to the task at hand.

The Filters toolbar should be enabled by default. If not:

The Filter input box supports many different types of filtering.

Type png into the Filter input box. Only the files that contain the text png are shown. In this case the only files that match the filter are the PNG images.

Type /.*\.[cj]s+$/. DevTools filters out any resource with a filename that doesn't end with a j or a c followed by 1 or more s characters.

Type -main.css. DevTools filters out main.css. If any other file matched the pattern they would also be filtered out.

Type domain:raw.githubusercontent.com into the Filter text box. DevTools filters out any resource with a URL that does not match this domain.

See Filter requests by properties for the full list of filterable properties.

Clear the Filter input box of any text.

To focus in on a certain type of file, such as stylesheets:

Click CSS. All other file types are filtered out.

To also see scripts, hold Control or Command (Mac) and then click JS.

Click All to remove the filters and see all resources again.

See Filter requests for other filtering workflows.

How does a page look and behave when some of its resources aren't available? Does it fail completely, or is it still somewhat functional? Block requests to find out:

Press Control+Shift+P or Command+Shift+P (Mac) to open the Command Menu.

Type block, select Show Request Blocking, and press Enter.

Click the Add Pattern button.

Reload the page. As expected, the page's styling is slightly messed up because its main style sheet has been blocked. Note the main.css row in the Network Log. The red text means that the resource is blocked.

Clear the Enable request blocking checkbox.

To discover more DevTools features related to inspecting network activity, check out the Network Reference.

---

## Network requests: Test your site by blocking network requests Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/network-request-blocking

**Contents:**
- Network requests: Test your site by blocking network requests Stay organized with collections Save and categorize content based on your preferences.
- Overview
- Open the Network request blocking panel
- Block a network request
- Remove a network request blocking pattern
- Modify a network blocking request pattern
- Toggle network request blocking

Dale St. Marthe LinkedIn

Use the Network request blocking panel to test how your page behaves if certain resources, such as images or stylesheets, are prevented from loading.

The Network request blocking panel lets you block multiple resources or "patterns" at the same time and toggle them from a list. You can also block network request domains or URLs from the Network panel and the respective patterns will appear in the Network request blocking panel.

The Network request blocking panel lets you:

Closing DevTools disables network request blocking. You have to open the panel and enable blocking again. However, DevTools saves the patterns even after the browser is closed.

To open the Network request blocking panel:

Alternatively, in the top right corner, select more_vert More options > More tools > Network request blocking.

There are two ways to block a network request. First:

In the Network request blocking panel, click add Add pattern. An input box appears prompting you to enter a "Text pattern to block matching requests."

You can enter any of the following:

Click Add and make sure the Enable network request blocking checkbox is checked.

Reload the page. The Network request blocking panel shows the number of requests blocked next to the pattern.

Secondly, you can block network requests from the Network panel in DevTools.

The number of blocked requests may update as more requests are made. Refreshing the page resets the numbers.

To remove a specific network request blocking pattern from the list:

To remove all network request blocking patterns, in the activity bar, click the block Remove all network blocking patterns button.

To modify a pattern, in the Network request blocking panel, click the edit Edit button next to the pattern, edit it, and click Save.

The check_box Enable network request blocking checkbox lets you enable and disable network request blocking for all patterns at once.

---

## Emulate CSS media features Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/rendering/emulate-css

**Contents:**
- Emulate CSS media features Stay organized with collections Save and categorize content based on your preferences.
- Emulate CSS media feature prefers-color-scheme
- Emulate CSS media type (Enable print preview)
- Emulate CSS media feature forced-colors
- Emulate CSS media feature prefers-contrast
- Emulate CSS media feature prefers-reduced-motion
- Emulate CSS media feature prefers-reduced-transparency
- Emulate CSS media feature color-gamut

Sofia Emelianova GitHub

Emulate various CSS media features with this reference of emulation options on the Rendering tab.

The prefers-color-scheme CSS media feature indicates if the user prefers light or dark color scheme.

To emulate this condition:

Under the Emulate CSS media feature prefers-color-scheme, select one of the following from the drop-down list:

refresh Reload the page. For example:

The print media query controls how your page looks when printed.

To force your page into print preview mode:

Open the Rendering tab and under Emulate CSS media type select print.

From here, you can view and change your CSS, like any other web page. See Get Started With Viewing And Changing CSS.

The forced-colors CSS media feature indicates if the user agent enabled a forced colors mode. An example of a forced colors mode is Windows High Contrast.

To emulate this condition:

Under the Emulate CSS media feature forced-colors, select one of the following from the drop-down list:

With forced-colors:active emulated:

The prefers-contrast CSS media feature indicates if the user requested the web content to present with a higher, lower, or specific contrast value.

To emulate this condition:

Under the Emulate CSS media feature prefers-contrast, select one of the following from the drop-down list:

The prefers-reduced-motion CSS media feature indicates if the user has requested to minimize the amount of motion on a page.

To emulate this condition:

The prefers-reduced-transparency CSS media feature indicates if the user requested to reduce the transparent or translucent layer effects used on the device.

The prefers-reduced-transparency feature is available from Chrome 118 and lets you adapt web content to user-selected preference for reduced transparency in the OS, such as the Reduce transparency setting on macOS.

To emulate this condition:

The color-gamut CSS media feature indicates which range of colors the user agent and the output device support.

To emulate this condition:

Under the Emulate CSS media feature color-gamut, select one of the following from the drop-down list:

---

## CSS features reference Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/css/reference

**Contents:**
- CSS features reference Stay organized with collections Save and categorize content based on your preferences.
- Select an element
- View CSS
  - Navigate with links
  - View tooltips with CSS documentation, specificity, and custom property values
    - View CSS documentation
    - View selector specificity
    - View the values of custom properties
  - View invalid, overridden, inactive, and other CSS
  - View only the CSS that's actually applied to an element

Kayce Basques X GitHub Jecelyn Yeen X GitHub Bluesky Homepage Sofia Emelianova GitHub

Discover new workflows in this comprehensive reference of Chrome DevTools features related to viewing and changing CSS.

See View and change CSS to learn the basics.

The Elements panel of DevTools lets you view or change the CSS of one element at a time.

On the screenshot, the h1 element that's highlighted blue in the DOM Tree is the selected element. To the right, the element's styles are shown in the Styles tab. To the left, the element is highlighted in the viewport, but only because the mouse is hovering over it in the DOM Tree.

See View an element's CSS for a tutorial.

There are many ways to select an element:

Use the Elements > Styles and Computed tabs to view CSS rules and diagnose CSS issues.

The Styles tab displays links in various places to various other places, including but not limited to:

Here are some of them highlighted:

Links may be styled differently. If you're not sure if something is a link, try clicking it to find out.

Elements > Styles shows tooltips with useful information when you hover over specific elements.

To see a tooltip with a short CSS description, hover over the property name in the Styles tab.

Click Learn more to go to an MDN CSS Reference on this property.

To turn the tooltips off, check Don't show.

To turn them back on, check Settings > Preferences > Elements > Show CSS documentation tooltip.

Hover over a selector to see a tooltip with its specificity weight.

Hover over a --custom-property to see its value in a tooltip.

The Styles tab recognizes many kinds of CSS issues and highlights them in different ways.

See Understand CSS in the Styles tab.

The Styles tab shows you all of the rules that apply to an element, including declarations that have been overridden. When you're not interested in overridden declarations, use the Computed tab to view only the CSS that's actually being applied to an element.

Check the Show All checkbox to see all properties.

See Understand CSS in the Computed tab.

Use the Computed tab. See View only the CSS that's actually applied to an element.

Check the Show All checkbox in the Computed tab. See View only the CSS that's actually applied to an element.

Alternatively, scroll the Styles tab and find sections named Inherited from <element_name>.

At-rules are CSS statements that let you control CSS behavior. Elements > Styles shows the following at-rules in dedicated sections:

The @property CSS at-rule lets you define CSS custom properties explicitly and register them in a style sheet without running any JavaScript.

Hover over the name of such property in the Styles tab, to see a tooltip with the property's value, descriptors, and a link to its registration in the collapsible @property section at the bottom of the Styles tab.

To edit an @property rule, double-click its name or value.

The Styles tab shows you the @supports CSS at-rules if they are applied to an element. For example, inspect the following element:

If your browser supports the lab() function, the element is green, otherwise it's purple.

The Styles tab shows you CSS @scope at-rules if they are applied to an element.

The new @scope at-rules are a part of the CSS Cascading and Inheritance Level 6 specification. These rules allow you to scope CSS styles, in other words, explicitly apply styles to specific elements.

View the @scope rule in the following preview:

In this example, the @scope rule overrides the global CSS background-color declaration for all <p> elements inside elements with a card class.

To edit the @scope rule, double-click it.

The @font-palette-values CSS at-rule lets you customize the default values of the font-palette property. Elements > Styles shows this at-rule in a dedicated section.

View the @font-palette-values section in the next preview:

In this example, the --New font palette values override the default ones of the colored font.

To edit your custom values, double-click them.

The @position-try CSS rule along with the position-try-options property lets you define alternative anchor positions for elements. To learn more, see Introducing the CSS anchor positioning API.

Elements > Styles resolves and links the following:

Inspect the position-try-options values and @position-try sections in the next preview:

To edit values, double-click them.

To view the box model of an element, go to the Styles tab and click the Show sidebar button in the action bar.

To change a value, double-click on it.

Use the Filter box on the Styles and Computed tabs to search for specific CSS properties or values.

To also search inherited properties in the Computed tab, check the Show All checkbox.

To navigate the Computed tab, group the filtered properties in collapsible categories by checking Group.

If you switch focus from the page to DevTools, some overlay elements automatically hide if they are triggered by focus. For example, drop-down lists, menus, or date pickers. The check_box Emulate a focused page option lets you debug such an element as if it is in focus.

Try emulating a focused page on this demo page:

You can also find the same option on the Rendering panel.

To discover more ways to freeze an element, see Freeze screen and inspect disappearing elements.

To toggle a pseudo-class:

In this example, you can see that DevTools applies the background-color declaration to the element, even though the element is not actually hovered over.

The Styles tab shows the following pseudo-classes for all elements:

Additionally, some elements may have their own pseudo-classes. When you select such an element, the Styles tab shows a Force specific element state section that you can expand and turn on pseudo-classes specific to the element.

See Add a pseudostate to a class for an interactive tutorial.

Pseudo-elements let you style specific parts of elements. Highlight pseudo-elements are document portions with a "selected" status and they are styled as "highlighted" to indicate this status to the user. For example, such pseudo-elements are ::selection, ::spelling-error, ::grammar-error, and ::highlight.

As mentioned in the specification, when multiple styles conflict, cascade determines the winning style.

To better understand the inheritance and priority of the rules, you can view the inherited highlight pseudo-elements:

Inspect the text below.

Select a portion of the text above.

In the Styles tab, scroll down to find the Inherited from ::selection pseudo of... section.

Cascade layers enable more explicit control of your CSS files to prevent style-specificity conflicts. This is useful for large codebases, design systems, and when managing third-party styles in applications.

To view cascade layers, inspect the next element and open Elements > Styles.

In the Styles tab, view the 3 cascade layers and their styles: page, component and base.

To view the layer order, click the layer name or the Toggle CSS layers view button.

The page layer has the highest specificity, therefore the element's background is green.

To view a page in print mode:

The Coverage tab shows you what CSS a page actually uses.

Start typing coverage.

Select Show Coverage. The Coverage tab appears.

Click Reload. The page reloads and the Coverage tab provides an overview of how much CSS (and JavaScript) is used from each file that the browser loads.

Green represents used CSS. Red represents unused CSS.

Click a CSS file to see a line-by-line breakdown of what CSS it uses in the preview above.

On the screenshot, lines 55 to 57 and 65 to 67 of devsite-google-blue.css are unused, whereas lines 59 to 63 are used.

See Force DevTools Into Print Preview Mode.

From a single drop-down menu in the Styles tab, you can copy separate CSS rules, declarations, properties, values

Additionally, you can copy CSS properties in JavaScript syntax. This option is handy if you're using CSS-in-JS libraries.

Select one of the following options from the drop-down menu:

Copy all declarations as JS. Copies all properties and their values in JavaScript syntax: ```js propertyInCamelCase: 'value', propertyInCamelCase: 'value', ...

Copy all CSS changes. Copies the changes you make in the Styles tab across all declarations.

View computed value. Takes you to the Computed tab.

This section lists all the ways you can change CSS in Elements > Styles.

Additionally, you can:

Since the order of declarations affects how an element is styled, you can add declarations in different ways:

What workflow should you use? For most scenarios, you probably want to use the inline declaration workflow. Inline declarations have higher specificity than external ones, so the inline workflow ensures that the changes take effect in the element as you'd expect. See Selector Types for more on specificity.

If you're debugging an element's styles and you need to specifically test what happens when a declaration is defined in different places, use the other workflow.

To add an inline declaration:

Enter a valid value for that property and press Enter. In the DOM Tree, you can see that a style attribute has been added to the element.

On the screenshot, the margin-top and background-color properties have been applied to the selected element. In the DOM Tree you can see the declarations reflected in the element's style attribute.

To add a declaration to an existing style rule:

On the screenshot, a style rule gets the new border-bottom-style:groove declaration.

Double-click a declaration's name or value to change it. See Change enumerable values with keyboard shortcuts for shortcuts for quickly incrementing or decrementing a value by 0.1, 1, 10, or 100 units.

While editing an enumerable value of a declaration, for example, font-size, you can use the following keyboard shortcuts to increment the value by a fixed amount:

Decrementing also works. Just replace each instance of Up mentioned earlier with Down.

You can use your pointer to change any property with length, such as width, height, padding, margin, or border.

To change the length unit:

Click the unit name to select a unit from the drop-down.

To change the length value:

Drag horizontally to increase or decrease the value.

To adjust the value by 10, hold Shift when dragging.

To add a class to an element:

To toggle automatic dark mode or emulate the user's preference of light or dark themes:

Select one of the following from the drop-down list:

This drop-down is a shortcut for Emulate CSS media feature prefers-color-scheme and Enable automatic dark mode options of the Rendering tab.

To enable or disable a class on an element:

To add a new style rule:

On the screenshot, DevTools adds the h1.devsite-page-title style rule after clicking New Style Rule.

When adding a new style rule, click and hold New Style Rule to choose which style sheet to add the style rule to.

To toggle a single declaration on or off:

On the screenshot, the color property for the currently-selected element is toggled off.

See the corresponding section in Animations.

For more information, see Smooth and simple transitions with the View Transitions API.

See the corresponding section in Inspect CSS grid.

See Inspect and debug HD and non-HD colors with the Color Picker.

The Angle Clock provides a GUI for changing <angle>s in CSS property values.

To open the Angle Clock:

In the Styles tab, find the transform or background declaration that you want to change. Click the Angle Preview box next to the angle value.

The small clocks to the left of -5deg and 0.25turn are the angle previews.

Click the preview to open the Angle Clock.

Change the angle value by clicking on the Angle Clock circle or scroll your mouse to increase / decrease the angle value by 1.

There are more keyboard shortcuts to change the angle value. Find out more in the Styles pane keyboard shortcuts.

The Shadow Editor provides a GUI for changing text-shadow and box-shadow CSS declarations.

To change shadows with the Shadow Editor:

Select an element with a shadow declaration. For example, select the next element.

In the Styles tab, find a shadow icon next to the text-shadow or box-shadow declaration.

Click the shadow icon to open the Shadow editor.

Change the shadow properties:

Observe the changes applied to the element.

The Easing Editor provides a GUI for changing the values of transition-timing-function and animation-timing-function.

To open the Easing Editor:

To adjust timings with a click, use the presets in the Easing Editor:

In the Presets switcher, click or buttons to pick one of the following presets:

To set custom values for timing functions, use the control points on the lines:

For linear functions, click anywhere on the line to add a control point and drag it. Double-click to remove the point.

For Cubic Bezier functions, drag one of the control points.

Any change triggers a ball animation in the Preview at the top of editor.

With this experiment enabled, the Styles tab highlights your CSS changes in green.

To copy a single CSS declaration change, hover over the highlighted declaration and click the Copy button.

To copy all CSS changes across declarations at once, right-click on any declaration and select Copy all CSS changes.

Additionally, you can track changes you make with the Changes tab.

---

## AI assistance for styling Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/ai-assistance/styling

**Contents:**
- AI assistance for styling Stay organized with collections Save and categorize content based on your preferences.
- Open the "AI assistance" panel
  - From the Elements panel
  - From the command menu
  - From the "More tools" menu
- Conversation context
- Prompting
- Conversation flow
  - Paused conversations
  - Save changes to your workspace

Matthias Rohmer X GitHub LinkedIn Bluesky Sofia Emelianova GitHub

Use the AI assistance panel for styling to understand a website's overall layout, specific element styles and to get AI generated fixes for CSS bugs.

The AI assistance panel opens in the drawer.

To open AI assistance from the Elements panel, when inspecting a DOM node, right-click the node and select the Ask AI option.

When you open AI assistance like this, the inspected DOM element is already pre-selected as a context element for the conversation.

Alternatively, click the floating button attached to a hovered DOM node.

To open AI assistance from the command menu, type AI and then run the Show AI assistance command, which has the Drawer badge next to it.

Alternatively, in the top right corner, select settings More options > More tools > AI assistance.

Chats with AI assistance always relate to the currently inspected element, which is the last element selected in the Elements panel DOM tree. A reference to this element is shown in the bottom left corner of the panel.

Change the context using the element picker next to the current element or by selecting from the Elements panel DOM tree.

With the context selected, you can capture a screenshot of the viewport and submit it to your chat. Click the photo_camera Take screenshot button next to the chat input field.

You can use screenshots to provide additional visual context to your prompts, for example, to check if all visible buttons have the same spacing.

While the currently inspected element is the foundation of the conversation, AI assistance has access to all web APIs to gather more information from the inspected page. This includes querying other elements with document.querySelector or evaluating computed styles.

When starting a new conversation, AI assistance for styling offers example prompts to help you get started quickly.

Click any of the prompts to prefill the prompt input field at the bottom of the panel.

Alternatively, type your own prompt or question into the input field.

To send a prompt, either press Enter or click the arrow on the right side of the input field.

Sending a prompt starts the conversation with the styling agent. To get the information required to answer your prompt best, the agent generates and executes JavaScript that calls web APIs. Agent progress is shown in steps. The initial step status is Investigating….

The step label updates as the agent executes more specific actions to solve your question.

Once the agent comes to a final answer, the answer is displayed below the investigation steps, including suggestions for follow-up prompts.

Click any of the suggested prompts to continue the conversation. Click the keyboard_arrow_down

of an investigation step to get a better understanding of what AI assistance did behind the scenes.

When you expand a progress chip, you see the code the agent has executed, together with its return value. Copy the executed code for further use, like executing it with the Console panel.

AI assistance might generate code with side effects. When that happens, the conversation is paused before the code is executed.

When the conversation pauses, review the code proposed by the agent. Click play_arrow Continue to proceed or Cancel to prevent execution.

With a connected workspace folder, you can save style changes suggested by AI assistance back to CSS source files on your computer.

First, generate a metadata file and connect a workspace folder.

Alternatively, you can add a folder manually.

Start a chat from the Elements panel.

Prompt AI assistance to modify your CSS.

AI assistance may generate code and pause execution. Review the code and click Continue to test changes live.

Expand the Unsaved changes section and click Apply to workspace.

Review the changes in a diff and click Save all.

To learn this workflow, see:

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

## View page resources Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/resources

**Contents:**
- View page resources Stay organized with collections Save and categorize content based on your preferences.
- Open resources
  - Open resources in the Network panel
  - Reveal resources in the Network panel from other panels
- Browse resources
  - Browse resources in the Network panel
  - Browse by directory
  - Browse by filename
  - Browse by file type
    - Browse files by type in the Network panel

Kayce Basques X GitHub

This guide teaches you how to use Chrome DevTools to view a web page's resources. Resources are the files that a page needs in order to display correctly. Examples of resources include CSS, JavaScript, and HTML files, as well as images.

This guide assumes that you're familiar with the basics of web development and Chrome DevTools.

When you know the name of the resource that you want to inspect, the Command Menu provides a fast way of opening the resource.

Press Control+P or Command+P (Mac). The Open File dialog opens.

Figure 1. The Open File dialog

Select the file from the dropdown, or start typing the filename and press Enter once the correct file is highlighted in the autocomplete box.

Figure 2. Typing a filename in the Open File dialog

See Inspect a resource's details.

Figure 3. Inspecting a resource in the Network panel

The Browse resources section below shows you how to view resources from various parts of the DevTools UI. If you ever want to inspect a resource in the Network panel, right-click the resource and select Reveal in Network panel.

Figure 4. The Reveal in Network panel option

See Log network activity.

Figure 5. Page resources in the Network Log

To view a page's resources organized by directory:

Click the Page tab to show the page's resources. The Page pane opens.

Figure 6. The Page pane

Here's a breakdown of the non-obvious items in Figure 6:

Click a resource to view it in the Editor.

Figure 7. Viewing a file in the Editor

By default the Page pane groups resources by directory. To disable this grouping and view each domain's resources as a flat list:

Click More Options and disable Group By Folder.

Figure 8. The Group By Folder option

Resources are organized by file type. Within each file type the resources are organized alphabetically.

Figure 9. The Page pane after disabling Group By Folder

To group resources together based on their file type:

Click the Application tab. The Application panel opens. By default the Manifest pane usually opens first.

Figure 10. The Application panel

Scroll down to the Frames pane.

Figure 11. The Frames pane

Expand the sections that you're interested in.

Click a resource to view it.

Figure 11. Viewing a resource in the Application panel

See Filter by resource type.

Figure 12. Filtering for CSS in the Network Log

---

## Autofill: Inspect and debug saved addresses Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/autofill

**Contents:**
- Autofill: Inspect and debug saved addresses Stay organized with collections Save and categorize content based on your preferences.
- Overview
- Save address info to Chrome
- Open the Autofill panel
- Inspect autofill data
  - Use test address data
- Data and its mapping

Sofia Emelianova GitHub

Use the Autofill panel to inspect and debug address info saved to Chrome.

Chrome Autofill provides a convenient way to automatically fill forms on websites with saved addresses. The Autofill panel in DevTools lets you inspect the mapping between your form fields, predicted autofill values, and saved data.

By default, Chrome prompts you to save address info you entered into a web form when you submit it.

If there's no such prompt, in Chrome's top right corner, navigate to more_vert Customize and control Google Chrome > key Password and Autofill > location_on Addresses and more and turn on toggle_on Save and fill addresses. You can also add new addresses here.

If you don't have address data saved and don't want to save it, you can use test address data provided by the Autofill panel.

By default, the Autofill panel automatically opens if DevTools is open and when you autofill a form on a website. To turn this off, open the panel manually and clear the check_box_outline_blank Automatically open this panel checkbox.

To manually open the Autofill panel:

Open the Command menu by pressing:

Start typing autofill, select Show Autofill, and press Enter.

DevTools opens the panel in the Drawer at the bottom of your DevTools window by default. You can also move it to the top.

Alternatively, you can open the Autofill panel in the following ways:

To inspect autofill data:

If you don't have address data saved and don't want to save it, you can use test data that the Autofill panel provides.

To use the test data:

The Autofill panel shows the data it inserted in the form fields and a table with mapping between the following:

---
