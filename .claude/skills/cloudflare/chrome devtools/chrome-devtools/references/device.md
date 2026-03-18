# Chrome-Devtools - Device

**Pages:** 2

---

## Sensors: Emulate device sensors Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/device-mode/geolocation

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

## Simulate mobile devices with device mode Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/device-mode

**Contents:**
- Simulate mobile devices with device mode Stay organized with collections Save and categorize content based on your preferences.
- Overview
- Limitations
- Open the device toolbar
- Simulate a mobile viewport
  - Responsive Viewport Mode
  - Show media queries
  - Set device pixel ratio
  - Set the device type
  - Device-specific mode

Kayce Basques X GitHub Sofia Emelianova GitHub

Use device mode to approximate how your page looks and performs on a mobile device.

Device mode is the name for a collection of features in Chrome DevTools that help you simulate mobile devices. These features include:

Think of device mode as a first-order approximation of how your page looks and feels on a mobile device. With device mode you don't actually run your code on a mobile device. You simulate the mobile user experience from your laptop or desktop.

There are some aspects of mobile devices that DevTools will never be able to simulate. For example, the architecture of mobile CPUs is very different than the architecture of laptop or desktop CPUs. When in doubt, your best bet is to actually run your page on a mobile device. Use Remote Debugging to view, change, debug, and profile a page's code from your laptop or desktop while it actually runs on a mobile device.

To open the device toolbar, follow these steps:

By default, the device toolbar opens in viewport with Dimensions set to Responsive. Using the Dimensions drop-down, you can simulate the dimensions of a specific mobile device.

Drag the handles to resize the viewport to whatever dimensions you need. Or, enter specific values in the width and height boxes. In this example, the width is set to 480 and the height is set to 415.

Alternatively, use the width presets bar to set the width with a click to one of the following:

To show media query breakpoints above your viewport, click More options > Show media queries.

DevTools now displays two additional bars above the viewport:

Click between breakpoints to change the viewport's width so that the breakpoint gets triggered.

To find the corresponding @media declaration, right-click between breakpoints and select Reveal in source code. DevTools opens the Sources panel at the corresponding line in the Editor.

Device pixel ratio (DPR) is the ratio between physical pixels on the hardware screen and logical (CSS) pixels. In other words, DPR tells Chrome how many screen pixels to use to draw a CSS pixel. Chrome uses the DPR value when drawing on HiDPI (High Dots Per Inch) displays.

Click More options > Add device pixel ratio.

In the action bar at the top of the viewport, select a DPR value from the new DPR drop-down menu.

Use the Device Type list to simulate a mobile device or desktop device.

If you can't see the list on the action bar at the top, select More options > Add device type.

The next table describes the differences between the options. Rendering method refers to whether Chrome renders the page as a mobile or desktop viewport. Cursor icon refers to what type of cursor you see when you hover over the page. Events fired refers to whether the page fires touch or click events when you interact with the page.

To simulate the dimensions of a specific mobile device, select the device from the Dimensions list.

For more information, see Add a custom mobile device.

Click screen_rotation Rotate to rotate the viewport to landscape orientation.

Note that the Rotate button disappears if your Device toolbar is narrow.

See also Set orientation.

Some devices, for example, Surface Duo, have two screens and two ways to use them: with one or both screens active.

To toggle between dual and single screen, click the devices_fold Toggle dual-screen mode in the toolbar.

Some devices, for example, Asus Zenbook Fold, have foldable screens. Such screens have a posture: continuous or folded. The continuous posture refers to a "flat" position and folded forms an angle between sections of the display.

To set the device posture, select Continuous or Folded from the corresponding drop-down menu in the toolbar.

When simulating the dimensions of a specific mobile device like a Nest Hub, select More options > Show device frame to show the physical device frame around the viewport.

In this example, DevTools shows the frame for the Nest Hub.

To add a custom device:

Click the Device list and then select Edit.

On the Settings settings > Devices tab, either choose a device from the list of supported ones or click Add custom device to add your own.

If you're adding your own, enter a name, width, and height for the device, then click Add.

The device pixel ratio, user agent string, and device type fields are optional. The device type field is the list that is set to Mobile by default.

Back in the viewport, select the newly added device from the Dimensions list.

Click More options > Show rulers to see rulers. The sizing unit of the rulers is pixels.

DevTools shows rulers at the top and to the left of the viewport.

Click the rulers at specific marks to set the viewport's width and height.

Use the Zoom list to zoom in or out.

To capture a screenshot of what you see in the viewport, click More options > Capture screenshot.

To capture a screenshot of the whole page including the content that isn't visible in the viewport, select Capture a full size screenshot from the same menu.

To include a device frame when capturing a screenshot in Device-specific mode, first Show device frame, and then click Capture screenshot as directed previously.

To learn other ways to take screenshots with DevTools, see 4 ways to capture screenshots with DevTools.

To throttle both the network and CPU, select Mid-tier mobile or Low-end mobile from the Throttle list.

Mid-tier mobile simulates fast 3G and throttles your CPU so that it is 4 times slower than normal. Low-end mobile simulates slow 3G and throttles your CPU 6 times slower than normal. Keep in mind that the throttling is relative to the normal capability of your laptop or desktop.

Note that the Throttle list will be hidden if your Device toolbar is narrow.

To throttle the CPU only and not the network, go to the Performance panel, click Capture Settings , and then select 4x slowdown, 6x slowdown, or 20x slowdown from the CPU list.

To throttle the network only and not the CPU, go the Network panel and select Fast 3G or Slow 3G from the Throttle list.

Or press Command+Shift+P (Mac) or Control+Shift+P (Windows, Linux, ChromeOS) to open the Command Menu, type 3G, and select Enable fast 3G throttling or Enable slow 3G throttling.

You can also set network throttling from the Performance panel. Click Capture Settings and then select Fast 3G or Slow 3G from the Network list.

Use the Sensors panel to override geolocation, simulate device orientation, force touch, and emulate idle state.

The next sections provide a quick look on how to override geolocation and set device orientation. For a complete list of features, see Emulate device sensors.

To open the geolocation overriding UI, click Customize and control DevTools and then select More tools > Sensors.

Or press Command+Shift+P (Mac) or Control+Shift+P (Windows, Linux, ChromeOS) to open the Command Menu, type Sensors, and then select Show Sensors.

Select one of the presets from the Location list, or select Other... to enter your own coordinates, or select Location unavailable to test out how your page behaves when geolocation is in an error state.

To open the orientation UI, click Customize and control DevTools and then select More tools > Sensors.

Or press Command+Shift+P (Mac) or Control+Shift+P (Windows, Linux, ChromeOS) to open the Command Menu, type Sensors, and then select Show Sensors.

Select one of the presets from the Orientation list or select Custom orientation to set your own alpha, beta, and gamma values.

---
