# Chrome-Devtools - Ai

**Pages:** 3

---

## Enable AI assistance in DevTools Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/ai-assistance/get-started

**Contents:**
- Enable AI assistance in DevTools Stay organized with collections Save and categorize content based on your preferences.
- Overview
- Requirements
- How your data is used
- Known issues
  - Wrong explanation
  - Prompt injection
- Control feature availability

Matthias Rohmer X GitHub LinkedIn Bluesky

Use the AI assistance panel to learn more about how your website works with the help of AI.

The AI assistance panel lets you chat with Gemini directly in DevTools. Conversations you start from this panel automatically have context about technical details of the page you are inspecting.

When using the AI assistance panel you can either use provided example prompts or your own questions as a starting point for conversations and continue with as many follow-up questions as needed to solve your task.

Chats in the AI assistance panel can help you to understand more about:

To use the AI assistance panel, make sure that you:

Your location (TW) is supported.

This notice together with our privacy notice describe how AI Innovations in Chrome DevTools handle your data. Read carefully.

Chrome DevTools AI assistance uses any data the inspected page is exposing through Web APIs.

Google collects this input data, generated output, related feature usage information, and your feedback. Google uses this data to provide, improve, and develop Google products and services and machine learning technologies, including Google's enterprise products such as Google Cloud.

To help with quality and improve our products, human reviewers may read, annotate, and process the above-mentioned input data, generated output, related feature usage information, and your feedback. Don't include sensitive (for example, confidential) or personal information that can be used to identify you or others in your prompts or feedback. Your data will be stored in a way where Google cannot tell who provided it and can no longer fulfill any deletion requests and will be retained for up to 18 months. We may not collect data to improve our product if your Google Account is managed by an organization.

As you try AI assistance, here are key things to know:

To use the feature, you need to agree that your use of AI assistance is subject to the Google Terms of Service.

AI assistance uses Google's large language models to generate an explanation. Large language models, or LLMs, are a new and active area of research. The responses that LLMs generate are sometimes questionable or even outright wrong. It is important that you understand that the results may be inaccurate or misleading, so always double check!

LLMs generate content that sounds likely and plausible. In most cases, this content contains truthful and useful insights that can help you understand an error or warning in the relevant context. Modern web development and debugging is a challenging craft with a high level of complexity that requires years of experience to become proficient in. Sometimes, the responses that LLMs produce sound convincing but are actually misleading or meaningless to a human web developer. We are doing our best to continuously improve the quality and correctness of generated responses.

Examples for wrong answers or explanations are:

You can help us by submitting feedback when you encounter wrong explanations.

Many LLM applications are susceptible to a form of abuse known as prompt injection. This feature is no different. It is possible to trick the LLM into accepting instructions that are not intended by the developers.

See the following harmless example:

In managed Chrome environments availability of AI assistance and Console Insights is controlled by the DevToolsGenAiSettings Enterprise policy.

Unmanaged users may use the same policy to disable AI innovations on their machine and remove Ask AI context menu items.

---

## AI innovations Stay organized with collections Save and categorize content based on your preferences.

**URL:** https://developer.chrome.com/docs/devtools/settings/ai-innovations

**Contents:**
- AI innovations Stay organized with collections Save and categorize content based on your preferences.

Meysam Sarabadani Jecelyn Yeen X GitHub Bluesky Homepage

settings Settings > AI innovations lets you manage the list of AI features in DevTools.

To enable an AI feature:

There are two features:

---

## 

**URL:** https://developer.chrome.com/docs/devtools/ai-assistance/quickstart

**Contents:**
  - AI assistance
- … for styling
  - Understands layouts
  - Debugs animations
  - DevTools Hangar
- … for network
  - Demystifies headers
  - Sets timings in perspective
- … for performance
  - Discovers bottlenecks

Explore use cases for AI assistance in Chrome DevTools and learn how it can support your debugging workflow across styling, performance, and more.

Get a detailed explanation of your element's layout and how to modify it with prompts like this:

Is it a flex item? Is it positioned absolutely? Is it part of a grid? AI assistance can summarize the layout of element trees and provide code examples to demonstrate how to modify it.

Got an animation that isn't working? Ask AI assistance about your animated element:

AI assistance will check relevant CSS properties, event listeners and more to find out what might be wrong and provide code examples to fix it.

No project at hand to put AI assistance for styling to the test? Try it in the DevTools Hangar!

Find the right prompts to fix rectangular wheels, broken position lights and a fuming engine to make the DevTools plane fly again.

Request and response headers often contain important information not obvious at a glance. Ask AI assistance to explain them: Does this request have any notable headers?

Ever had a feeling a certain request just takes too long, but not quite sure why? Ask AI assistance to look into it for you:

AI assistance investigates recorded timings and will let you know if anything is off.

Finding the root cause for a sluggish website can be difficult. Can't get behind peaks in your performance profiles? AI assistance can boil down call trees for you:

It's rare you wrote all of the code your website uses - can't understand why a certain resource is loaded and what it's used for? AI assistance can help:

No matter if it's an analytics script, a social widget or a A/B testing library - AI assistance will dig in and find out.

---
