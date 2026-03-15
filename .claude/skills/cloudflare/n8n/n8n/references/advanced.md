# N8N - Advanced

**Pages:** 39

---

## RAG in n8n

**URL:** llms-txt#rag-in-n8n

**Contents:**
- What is RAG
- What is a vector store?
- How to use RAG in n8n
  - Inserting data into your vector store
  - Querying your data
  - Using agents
  - Using the node directly
- FAQs
  - How do I choose the right embedding model?
  - What is the best text splitting for my use case?

[Retrieval-Augmented Generation (RAG)](../../glossary/#ai-retrieval-augmented-generation-rag) is a technique that improves AI responses by combining language models with external data sources. Instead of relying solely on the model's internal training data, RAG systems retrieve relevant documents to [ground](../../glossary/#ai-groundedness) responses in up-to-date, domain-specific, or proprietary knowledge. RAG workflows typically rely on vector stores to manage and search this external data efficiently.

## What is a vector store?

A [vector store](../../glossary/#ai-vector-store) is a special database designed to store and search high-dimensional vectors: numerical representations of text, images, or other data. When you upload a document, the vector store splits it into chunks and converts each chunk into a vector using an [embedding model](../../glossary/#ai-embedding).

You can query these vectors using similarity searches, which construct results based on *semantic meaning*, rather than keyword matches. This makes vector stores a powerful foundation for RAG and other AI systems that need to retrieve and reason over large sets of knowledge.

## How to use RAG in n8n

Start with a RAG template

👉 Try out RAG in n8n with the [RAG Starter Template](https://n8n.io/workflows/5010-rag-starter-template-using-simple-vector-stores-form-trigger-and-openai). The template includes two ready-made workflows: one for uploading files and one for querying them.

### Inserting data into your vector store

Before your agent can access custom knowledge, you need to upload that data to a vector store:

1. Add the nodes needed to fetch your source data.
1. Insert a **Vector Store** node (e.g. the [Simple Vector Store](../../integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreinmemory/)) and choose the **Insert Documents** operation.
1. Select an **embedding model**, which converts your text into vector embeddings. Consult the FAQ for more information on [choosing the right embedding model](#how-do-i-choose-the-right-embedding-model).
1. Add a [Default Data Loader](../../integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.documentdefaultdataloader/) node, which splits your content into chunks. You can use the default settings or define your own chunking strategy:
   - **Character Text Splitter:** splits by character length.
   - **Recursive Character Text Splitter:** recursively splits by Markdown, HTML, code blocks or simple characters (recommended for most use cases).
   - **Token Text Splitter:** splits by token count.
1. (Optional) Add **metadata** to each chunk to enrich the context and allow better filtering later.

### Querying your data

You can query the data in two main ways: using an agent or directly through a node.

1. Add an [agent](../../integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/) to your workflow.
1. Add the vector store as a **tool** and give it a **description** to help the agent understand when to use it:
   - Set the **limit** to define how many chunks to return.
   - Enable **Include Metadata** to provide extra context for each chunk.
1. Add the same **embedding model** you used when inserting the data.

To save tokens on an expensive model, you can first use the [Vector Store Question Answer tool](../../integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolvectorstore/) to retrieve relevant data, and only then pass the result to the Agent. To see this in action, check out [this template](https://n8n.io/workflows/5011-save-costs-in-rag-workflows-using-the-qanda-tool-with-multiple-models).

### Using the node directly

1. Add your vector store node to the canvas and choose the **Get Many** operation.
1. Enter a query or prompt:
   - Set a **limit** for how many chunks to return.
   - Enable **Include Metadata** if needed.

### How do I choose the right embedding model?

The right embedding model differs from case to case.

In general, smaller models (for example, `text-embedding-ada-002`) are faster and cheaper and thus ideal for short, general-purpose documents or lightweight RAG workflows. Larger models (for example, `text-embedding-3-large`) offer better semantic understanding. These are best for long documents, complex topics, or when accuracy is critical.

### What is the best text splitting for my use case?

This again depends a lot on your data:

- Small chunks (for example, 200 to 500 tokens) are good for fine-grained retrieval.
- Large chunks may carry more context but can become diluted or noisy.

Using the right overlap size is important for the AI to understand the context of the chunk. That's also why using the Markdown or Code Block splitting can often help to make chunks better.

Another good approach is to add more context to it (for example, about the document where the chunk came from). If you want you can read more about this, you can check out [this great article from Anthropic](https://www.anthropic.com/news/contextual-retrieval).

---

## OpenAI File operations

**URL:** llms-txt#openai-file-operations

**Contents:**
- Delete a File
- List Files
  - Options
- Upload a File
  - Options
- Common issues

Use this operation to create, delete, list, message, or update a file in OpenAI. Refer to [OpenAI](../) for more information on the OpenAI node itself.

Use this operation to delete a file from the server.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [OpenAI credential](../../../credentials/openai/).
- **Resource**: Select **File**.
- **Operation**: Select **Delete a File**.
- **File**: Enter the ID of the file to use for this operation or select the file name from the dropdown.

Refer to [Delete file | OpenAI](https://platform.openai.com/docs/api-reference/files/delete) documentation for more information.

Use this operation to list files that belong to the user's organization.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [OpenAI credential](../../../credentials/openai/).
- **Resource**: Select **File**.
- **Operation**: Select **List Files**.

- **Purpose**: Use this to only return files with the given purpose. Use **Assistants** to return only files related to Assistants and Message operations. Use **Fine-Tune** for files related to [Fine-tuning](https://platform.openai.com/docs/api-reference/fine-tuning).

Refer to [List files | OpenAI](https://platform.openai.com/docs/api-reference/files/list) documentation for more information.

Use this operation to upload a file. This can be used across various operations.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [OpenAI credential](../../../credentials/openai/).
- **Resource**: Select **File**.
- **Operation**: Select **Upload a File**.
- **Input Data Field Name**: Defaults to `data`. Enter the name of the binary property which contains the file. The size of individual files can be a maximum of 512 MB or 2 million tokens for Assistants.

- **Purpose**: Enter the intended purpose of the uploaded file. Use **Assistants** for files associated with Assistants and Message operations. Use **Fine-Tune** for [Fine-tuning](https://platform.openai.com/docs/api-reference/fine-tuning).

Refer to [Upload file | OpenAI](https://platform.openai.com/docs/api-reference/files/create) documentation for more information.

For common errors or issues and suggested resolution steps, refer to [Common Issues](../common-issues/).

---

## OpenAI Conversation operations

**URL:** llms-txt#openai-conversation-operations

**Contents:**
- Create a Conversation
  - Options
- Get a Conversation
- Remove a Conversation
- Update a Conversation
  - Options

Use this operation to create, get, update, or remove a conversation in OpenAI. Refer to [OpenAI](../) for more information on the OpenAI node itself.

## Create a Conversation

Use this operation to create a new conversation.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [OpenAI credential](../../../credentials/openai/).
- **Resource**: Select **Conversation**.
- **Operation**: Select **Create a Conversation**.
- **Messages**: A message input to the model. Messages with the `system` role take precedence over instructions given with the `user` role. Messages with the `assistant` role will be assumed to have been generated by the model in previous interactions.

- **Metadata**: A set of key-value pairs for storing structured information. You can attach up to 16 pairs to an object, which is useful for adding custom data that can be used for searching via the API or in the dashboard.

Refer to [Conversations | OpenAI](https://platform.openai.com/docs/api-reference/conversations/create) documentation for more information.

## Get a Conversation

Use this operation to retrieve an existing conversation.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [OpenAI credential](../../../credentials/openai/).
- **Resource**: Select **Conversation**.
- **Operation**: Select **Get Conversation**.
- **Conversation ID**: The ID of the conversation to retrieve.

Refer to [Conversations | OpenAI](https://platform.openai.com/docs/api-reference/conversations/create) documentation for more information.

## Remove a Conversation

Use this operation to remove an existing conversation.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [OpenAI credential](../../../credentials/openai/).
- **Resource**: Select **Conversation**.
- **Operation**: Select **Remove Conversation**.
- **Conversation ID**: The ID of the conversation to remove.

Refer to [Conversations | OpenAI](https://platform.openai.com/docs/api-reference/conversations/create) documentation for more information.

## Update a Conversation

Use this operation to update an existing conversation.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [OpenAI credential](../../../credentials/openai/).
- **Resource**: Select **Conversation**.
- **Operation**: Select **Update a Conversation**.
- **Conversation ID**: The ID of the conversation to update.

- **Metadata**: A set of key-value pairs for storing structured information. You can attach up to 16 pairs to an object, which is useful for adding custom data that can be used for searching via the API or in the dashboard.

Refer to [Conversations | OpenAI](https://platform.openai.com/docs/api-reference/conversations/create) documentation for more information.

---

## What's a tool in AI?

**URL:** llms-txt#what's-a-tool-in-ai?

**Contents:**
- AI tools in n8n

In AI, 'tools' has a specific meaning. Tools act like addons that your AI can use to access extra context or resources.

Here are a couple of other ways of expressing it:

> Tools are interfaces that an agent can use to interact with the world ([source](https://langchain-ai.github.io/langgraphjs/how-tos/tool-calling/))

> We can think of these tools as being almost like functions that your AI model can call ([source](https://www.udemy.com/course/chatgpt-and-langchain-the-complete-developers-masterclass/))

n8n provides tool [sub-nodes](../../../glossary/#sub-node-n8n) that you can connect to your [AI agent](../../../glossary/#ai-agent). As well as providing some popular tools, such as [Wikipedia](../../../integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolwikipedia/) and [SerpAPI](../../../integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolserpapi/), n8n provides three especially powerful tools:

- [Call n8n Workflow Tool](../../../integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolworkflow/): use this to load any n8n workflow as a tool.
- [Custom Code Tool](../../../integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolcode/): write code that your agent can run.
- [HTTP Request Tool](../../../integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolhttprequest/): make calls to fetch a website or data from an API.

The next three examples highlight the Call n8n Workflow Tool:

- [Chat with Google Sheets](../data-google-sheets/)
- [Call an API to fetch data](../api-workflow-tool/)
- [Set up a human fallback](../human-fallback/)

You can also learn how to [let AI dynamically specify parameters for tools with the `$fromAI()` function](../using-the-fromai-function/).

---

## OpenAI Text operations

**URL:** llms-txt#openai-text-operations

**Contents:**
- Generate a Chat Completion
  - Options
- Generate a Model Response
  - Built-in Tools
  - Options
- Classify Text for Violations
  - Options
- Common issues

Use this operation to message a model or classify text for violations in OpenAI. Refer to [OpenAI](../) for more information on the OpenAI node itself.

Previous node versions

n8n version 1.117.0 introduces the OpenAI node V2 that supports the OpenAI Responses API. It renames the 'Message a Model' operation to 'Generate a Chat Completion' to clarify its association with the Chat Completions API and introduces a separate 'Generate a Model Response' operation that uses the Responses API.

## Generate a Chat Completion

Use this operation to send a message or prompt to an OpenAI model - using the Chat Completions API - and receive a response.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [OpenAI credential](../../../credentials/openai/).
- **Resource**: Select **Text**.
- **Operation**: Select **Generate a Chat Completion**.
- **Model**: Select the model you want to use. If you’re not sure which model to use, try `gpt-4o` if you need high intelligence or `gpt-4o-mini` if you need the fastest speed and lowest cost. Refer to [Models overview | OpenAI Platform](https://platform.openai.com/docs/models) for more information.
- **Messages**: Enter a **Text** prompt and assign a **Role** that the model will use to generate responses. Refer to [Prompt engineering | OpenAI](https://platform.openai.com/docs/guides/prompt-engineering) for more information on how to write a better prompt by using these roles. Choose from one of these roles:
  - **User**: Sends a message as a user and gets a response from the model.
  - **Assistant**: Tells the model to adopt a specific tone or personality.
  - **System**: By default, there is no system message. You can define instructions in the user message, but the instructions set in the system message are more effective. You can set more than one system message per conversation. Use this to set the model's behavior or context for the next user message.
- **Simplify Output**: Turn on to return a simplified version of the response instead of the raw data.
- **Output Content as JSON**: Turn on to attempt to return the response in JSON format. Compatible with `GPT-4 Turbo` and all `GPT-3.5 Turbo` models newer than `gpt-3.5-turbo-1106`.

- **Frequency Penalty**: Apply a penalty to reduce the model's tendency to repeat similar lines. The range is between `0.0` and `2.0`.
- **Maximum Number of Tokens**: Set the maximum number of tokens for the response. One token is roughly four characters for standard English text. Use this to limit the length of the output.
- **Number of Completions**: Defaults to 1. Set the number of completions you want to generate for each prompt. Use carefully since setting a high number will quickly consume your tokens.
- **Presence Penalty**: Apply a penalty to influence the model to discuss new topics. The range is between `0.0` and `2.0`.
- **Output Randomness (Temperature)**: Adjust the randomness of the response. The range is between `0.0` (deterministic) and `1.0` (maximum randomness). We recommend altering this or **Output Randomness (Top P)** but not both. Start with a medium temperature (around `0.7`) and adjust based on the outputs you observe. If the responses are too repetitive or rigid, increase the temperature. If they’re too chaotic or off-track, decrease it. Defaults to `1.0`.
- **Output Randomness (Top P)**: Adjust the Top P setting to control the diversity of the assistant's responses. For example, `0.5` means half of all likelihood-weighted options are considered. We recommend altering this or **Output Randomness (Temperature)** but not both. Defaults to `1.0`.

Refer to [Chat Completions | OpenAI](https://platform.openai.com/docs/api-reference/chat) documentation for more information.

## Generate a Model Response

Use this operation to send a message or prompt to an OpenAI model - using the Responses API - and receive a response.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [OpenAI credential](../../../credentials/openai/).
- **Resource**: Select **Text**.
- **Operation**: Select **Generate a Model Response**.
- **Model**: Select the model you want to use. Refer to [Models overview | OpenAI Platform](https://platform.openai.com/docs/models) for an overview.
- **Messages**: Choose from one of these a **Message Types**:
  - **Text**: Enter a **Text** prompt and assign a **Role** that the model will use to generate responses. Refer to [Prompt engineering | OpenAI](https://platform.openai.com/docs/guides/prompt-engineering) for more information on how to write a better prompt by using these roles.
  - **Image**: Provide an **Image** either through an Image URL, a File ID (using the [OpenAI Files API](https://platform.openai.com/docs/api-reference/files)) or by passing binary data from an earlier node in your workflow.
  - **File**: Provide a **File** in a supported format (currently: PDF only), either through a File URL, a File ID (using the [OpenAI Files API](https://platform.openai.com/docs/api-reference/files)) or by passing binary data from an earlier node in your workflow.
  - For any message type, you can choose from one of these roles:
    - **User**: Sends a message as a user and gets a response from the model.
    - **Assistant**: Tells the model to adopt a specific tone or personality.
    - **System**: By default, the system message is `"You are a helpful assistant"`. You can define instructions in the user message, but the instructions set in the system message are more effective. You can only set one system message per conversation. Use this to set the model's behavior or context for the next user message.
- **Simplify Output**: Turn on to return a simplified version of the response instead of the raw data.

The OpenAI Responses API provides a range of [built-in tools](https://platform.openai.com/docs/guides/tools) to enrich the model's response:

- **Web Search**: Allows models to search the web for the latest information before generating a response.
- **MCP Servers**: Allows models to connect to remote MCP servers. Find out more about using remote MCP servers as tools [here](https://platform.openai.com/docs/guides/tools-connectors-mcp).
- **File Search**: Allow models to search your knowledgebase from previously uploaded files for relevant information before generating a response. Refer to the [OpenAI documentation](https://platform.openai.com/docs/guides/tools-file-search) for more information.
- **Code Interpreter**: Allows models to write and run Python code in a sandboxed environment.

- **Maximum Number of Tokens**: Set the maximum number of tokens for the response. One token is roughly four characters for standard English text. Use this to limit the length of the output.
- **Output Randomness (Temperature)**: Adjust the randomness of the response. The range is between `0.0` (deterministic) and `1.0` (maximum randomness). We recommend altering this or **Output Randomness (Top P)** but not both. Start with a medium temperature (around `0.7`) and adjust based on the outputs you observe. If the responses are too repetitive or rigid, increase the temperature. If they’re too chaotic or off-track, decrease it. Defaults to `1.0`.
- **Output Randomness (Top P)**: Adjust the Top P setting to control the diversity of the assistant's responses. For example, `0.5` means half of all likelihood-weighted options are considered. We recommend altering this or **Output Randomness (Temperature)** but not both. Defaults to `1.0`.
- **Conversation ID**: The conversation that this response belongs to. Input items and output items from this response are automatically added to this conversation after this response completes.
- **Previous Response ID**: The ID of the previous response to continue from. Can't be used in conjunction with Conversation ID.
- **Reasoning**: The level of reasoning effort the model should spend to generate the response. Includes the ability to return a **Summary** of the reasoning performed by the model (for example, for debugging purposes).
- **Store**: Whether to store the generated model response for later retrieval via API. Defaults to `true`.
- **Output Format**: Whether to return the response as **Text**, in a specified **JSON Schema** or as a **JSON Object**.
- **Background**: Whether to run the model in [background mode](https://platform.openai.com/docs/guides/background). This allows executing long-running tasks more reliably.

Refer to [Responses | OpenAI](https://platform.openai.com/docs/api-reference/responses/create) documentation for more information.

## Classify Text for Violations

Use this operation to identify and flag content that might be harmful. OpenAI model will analyze the text and return a response containing:

- `flagged`: A boolean field indicating if the content is potentially harmful.
- `categories`: A list of category-specific violation flags.
- `category_scores`: Scores for each category.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [OpenAI credential](../../../credentials/openai/).
- **Resource**: Select **Text**.
- **Operation**: Select **Classify Text for Violations**.
- **Text Input**: Enter text to classify if it violates the moderation policy.
- **Simplify Output**: Turn on to return a simplified version of the response instead of the raw data.

- **Use Stable Model**: Turn on to use the stable version of the model instead of the latest version, accuracy may be slightly lower.

Refer to [Moderations | OpenAI](https://platform.openai.com/docs/api-reference/moderations) documentation for more information.

For common errors or issues and suggested resolution steps, refer to [Common Issues](../common-issues/).

---

## HELP n8n_scaling_mode_queue_jobs_failed Total number of jobs failed across all workers in scaling mode since instance start.

**URL:** llms-txt#help-n8n_scaling_mode_queue_jobs_failed-total-number-of-jobs-failed-across-all-workers-in-scaling-mode-since-instance-start.

---

## LangChain in n8n

**URL:** llms-txt#langchain-in-n8n

n8n provides a collection of nodes that implement LangChain's functionality. The LangChain nodes are configurable, meaning you can choose your preferred agent, LLM, memory, and so on. Alongside the LangChain nodes, you can connect any n8n node as normal: this means you can integrate your LangChain logic with other data sources and services.

- [Learning resources](../langchain-learning-resources/): n8n's documentation for LangChain assumes you're familiar with AI and LangChain concepts. This page provides links to learning resources.
- [LangChain concepts and features in n8n](../langchain-n8n/): how n8n represents LangChain concepts and features.

---

## Find your container ID

**URL:** llms-txt#find-your-container-id

---

## The subdomain to serve from

**URL:** llms-txt#the-subdomain-to-serve-from

---

## Sustainable Use License

**URL:** llms-txt#sustainable-use-license

**Contents:**
- License FAQs
  - What license do you use?
  - What source code is covered by the Sustainable Use License?
  - What is the Sustainable Use License?
  - What is and isn't allowed under the license in the context of n8n's product?
  - What if I want to use n8n for something that's not permitted by the license?
  - Why don't you use an open source license?
  - Why did you create a license?
  - My company has a policy against using code that restricts commercial use – can I still use n8n?
  - What happens to the code I contribute to n8n in light of the Sustainable Use License?

Proprietary licenses for Enterprise

Proprietary licenses are available for enterprise customers. [Get in touch](mailto:license@n8n.io) for more information.

n8n's [Sustainable Use License](https://github.com/n8n-io/n8n/blob/master/LICENSE.md) and [n8n Enterprise License](https://github.com/n8n-io/n8n/blob/master/LICENSE_EE.md) are based on the [fair-code](https://faircode.io/) model.

### What license do you use?

n8n uses the [Sustainable Use License](https://github.com/n8n-io/n8n/blob/master/LICENSE.md) and [n8n Enterprise License](https://github.com/n8n-io/n8n/blob/master/LICENSE_EE.md). These licenses are based on the [fair-code](https://faircode.io/) model.

### What source code is covered by the Sustainable Use License?

The [Sustainable Use License](https://github.com/n8n-io/n8n/blob/master/LICENSE.md) applies to all our source code hosted in our [main GitHub repository](https://github.com/n8n-io/n8n) except:

- Content of branches other than master.
- Source code files that contain `.ee.` in their file name. These are licensed under the [n8n Enterprise License](https://github.com/n8n-io/n8n/blob/master/LICENSE_EE.md).

### What is the Sustainable Use License?

The Sustainable Use License is a fair-code software license created by n8n in 2022. You can read more about why we did this [here](#why-did-you-create-a-license). The license allows you the free right to use, modify, create derivative works, and redistribute, with three limitations:

- You may use or modify the software only for your own internal business purposes or for non-commercial or personal use.
- You may distribute the software or provide it to others only if you do so free of charge for non-commercial purposes.
- You may not alter, remove, or obscure any licensing, copyright, or other notices of the licensor in the software. Any use of the licensor's trademarks is subject to applicable law.

We encourage anyone who wants to use the Sustainable Use License. If you are building something out in the open, it makes sense to think about licensing earlier in order to avoid problems later. Contact us at [license@n8n.io](mailto:license@n8n.io) if you would like to ask any questions about it.

### What is and isn't allowed under the license in the context of n8n's product?

Our license restricts use to "internal business purposes". In practice this means all use is allowed unless you are selling a product, service, or module in which the value derives entirely or substantially from n8n functionality. Here are some examples that wouldn't be allowed:

- White-labeling n8n and offering it to your customers for money.
- Hosting n8n and charging people money to access it.

All of the following examples are allowed under our license:

- Using n8n to sync the data you control as a company, for example from a CRM to an internal database.
- Creating an n8n node for your product or any other integration between your product and n8n.
- Providing consulting services related to n8n, for example building workflows, custom features closely connect to n8n, or code that gets executed by n8n.
- Supporting n8n, for example by setting it up or maintaining it on an internal company server.

#### Can I use n8n to act as the back-end to power a feature in my app?

Usually yes, as long as the back-end process doesn't use users' own credentials to access their data.

Here are two examples to clarify:

##### Example 1: Sync ACME app with HubSpot

Bob sets up n8n to collect a user's HubSpot credentials to sync data in the ACME app with data in HubSpot.

**NOT ALLOWED** under the Sustainable Use License. This use case collects the user's own HubSpot credentials to pull information to feed into the ACME app.

##### Example 2: Embed AI chatbot in ACME app

Bob sets up n8n to embed an AI chatbot within the ACME app. The AI chatbot's credentials in n8n use Bob's company credentials. ACME app end-users only enter their questions or queries to the chatbot.

**ALLOWED** under the Sustainable Use License. No user credentials are being collected.

### What if I want to use n8n for something that's not permitted by the license?

You must sign a separate commercial agreement with us. We actively encourage software creators to embed n8n within their products; we just ask them to sign an agreement laying out the terms of use, and the fees owed to n8n for using the product in this way. We call this mode of use n8n Embed. You can learn more, and contact us about it [here](https://n8n.io/embed).

If you are unsure whether the use case you have in mind constitutes an internal business purpose or not, take a look at [the examples](#what-is-and-isnt-allowed-under-the-license-in-the-context-of-n8ns-product), and if you're still unclear, email us at [license@n8n.io](mailto:license@n8n.io).

### Why don't you use an open source license?

n8n's mission is to give everyone who uses a computer technical superpowers. We've decided the best way for us to achieve this mission is to make n8n as widely and freely available as possible for users, while ensuring we can build a sustainable, viable business. By making our product free to use, easy to distribute, and source-available we help everyone access the product. By operating as a business, we can continue to release features, fix bugs, and provide reliable software at scale long-term.

### Why did you create a license?

Creating a license was our least favorite option. We only went down this path after reviewing the possible existing licenses and deciding nothing fit our specific needs. There are two ways in which we try to mitigate the pain and friction of using a proprietary license:

1. By using plain English, and keeping it as short as possible.
1. By promoting [fair-code](https://faircode.io/) with the goal of making it a well-known umbrella term to describe software models like ours.

Our goals when we created the Sustainable Use License were:

1. To be as permissive as possible.
1. Safeguarding our ability to build a business.
1. Being as clear as possible what use was permitted or not.

### My company has a policy against using code that restricts commercial use – can I still use n8n?

Provided you are using n8n for internal business purposes, and not making n8n available to your customers for them to connect their accounts and build workflows, you should be able to use n8n. If you are unsure whether the use case you have in mind constitutes an internal business purpose or not, take a look at [the examples](#what-is-and-isnt-allowed-under-the-license-in-the-context-of-n8ns-product), and if you're still unclear, email us at [license@n8n.io](mailto:license@n8n.io).

### What happens to the code I contribute to n8n in light of the Sustainable Use License?

Any code you contribute on GitHub is subject to GitHub's [terms of use](https://docs.github.com/en/site-policy/github-terms/github-terms-of-service#d-user-generated-content). In simple terms, this means you own, and are responsible for, anything you contribute, but that you grant other GitHub users certain rights to use this code. When you contribute code to a repository containing notice of a license, you license the code under the same terms.

n8n asks every contributor to sign our [Contributor License Agreement](https://github.com/n8n-io/n8n/blob/master/CONTRIBUTOR_LICENSE_AGREEMENT.md). In addition to the above, this gives n8n the ability to change its license without seeking additional permission. It also means you aren't liable for your contributions (e.g. in case they cause damage to someone else's business).

It's easy to get started contributing code to n8n [here](https://github.com/n8n-io), and we've listed broader ways of participating in our community [here](../help-community/contributing/).

### Why did you switch to the Sustainable Use License from your previous license arrangement (Apache 2.0 with Commons Clause)?

n8n was licensed under Apache 2.0 with Commons Clause until 17 March 2022. Commons Clause was initiated by various software companies wanting to protect their rights against cloud providers. The concept involved adding a commercial restriction on top of an existing open source license.

However, the use of the Commons Clause as an additional condition to an open source license, as well as the use of wording that's open to interpretation, created some confusion and uncertainty regarding the terms of use. The Commons Clause also restricted people's ability to offer consulting and support services: we realized these services are critical in enabling people to get value from n8n, so we wanted to remove this restriction.

We created the Sustainable Use License to be more permissive and more clear about what use is allowed, while continuing to ensure n8n gets the funding needed to build and improve our product.

### What are the main differences between the Sustainable Use License and your previous license arrangement (Apache 2.0 with Commons Clause)?

There are two main differences between the Sustainable Use License and our previous license arrangement. The first is that we have tightened the definition of how you can use the software. Previously the Commons Clause restricted users ability to "sell" the software; we have redefined this to restrict use to internal business purposes. The second difference is that our previous license restricted people's ability to charge fees for consulting or support services related to the software: we have lifted that restriction altogether.

That means you are now free to offer commercial consulting or support services (e.g. building n8n workflows) without the need for a separate license agreement with us. If you are interested in joining our community of n8n experts providing these services, you can learn more here.

### Is n8n open source?

Although n8n's source code is available under the Sustainable Use License, according to the [Open Source Initiative](https://opensource.org/) (OSI), open source licenses can't include limitations on use, so we do not call ourselves open source. In practice, n8n offers most users many of the same benefits as OSI-approved open source.

We coined the term ['fair-code'](https://faircode.io/) as a way of describing our licensing model, and the model of other companies who are source-available, but restrict commercial use of their source code.

### What is fair-code, and how does the Sustainable Use License relate to it?

Fair-code isn't a software license. It describes a software model where software:

- Is generally free to use and can be distributed by anybody.
- Has its source code openly available.
- Can be extended by anybody in public and private communities.
- Is commercially restricted by its authors.

The Sustainable Use License is a fair-code license. You can read more about it and see other examples of fair-code licenses [here](https://faircode.io/).

We're always excited to talk about software licenses, fair-code, and other principles around sharing code with interested parties. To get in touch to chat, email [license@n8n.io](mailto:license@n8n.io).

### Can I use n8n's Sustainable Use License for my own project?

Yes! We're excited to see more software use the Sustainable Use License. We'd love to hear about your project if you're using our license: [license@n8n.io](mailto:license@n8n.io).

---

## Stop the container with the `<container_id>`

**URL:** llms-txt#stop-the-container-with-the-`<container_id>`

docker stop <container_id>

---

## HELP n8n_scaling_mode_queue_jobs_waiting Current number of enqueued jobs waiting for pickup in scaling mode.

**URL:** llms-txt#help-n8n_scaling_mode_queue_jobs_waiting-current-number-of-enqueued-jobs-waiting-for-pickup-in-scaling-mode.

---

## OpenAI Assistant operations

**URL:** llms-txt#openai-assistant-operations

**Contents:**
- Create an Assistant
  - Options
- Delete an Assistant
- List Assistants
  - Options
- Message an Assistant
  - Options
- Update an Assistant
  - Options
- Common issues

Use this operation to create, delete, list, message, or update an assistant in OpenAI. Refer to [OpenAI](../) for more information on the OpenAI node itself.

Assistant operations deprecated in OpenAI node V2

n8n version 1.117.0 introduces V2 of the OpenAI node that supports the OpenAI Responses API and removes support for the [to-be-deprecated Assistants API](https://platform.openai.com/docs/assistants/migration).

## Create an Assistant

Use this operation to create a new assistant.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [OpenAI credential](../../../credentials/openai/).

- **Resource**: Select **Assistant**.

- **Operation**: Select **Create an Assistant**.

- **Model**: Select the model that the assistant will use. If you’re not sure which model to use, try `gpt-4o` if you need high intelligence or `gpt-4o-mini` if you need the fastest speed and lowest cost. Refer to [Models overview | OpenAI Platform](https://platform.openai.com/docs/models) for more information.

- **Name**: Enter the name of the assistant. The maximum length is 256 characters.

- **Description**: Enter the description of the assistant. The maximum length is 512 characters.

- **Instructions**: Enter the system instructions that the assistant uses. The maximum length is 32,768 characters. Use this to specify the persona used by the model in its replies.

- **Code Interpreter**: Turn on to enable the code interpreter for the assistant, where it can write and execute code in a sandbox environment. Enable this tool for tasks that require computations, data analysis, or any logic-based processing.

- **Knowledge Retrieval**: Turn on to enable knowledge retrieval for the assistant, allowing it to access external sources or a connected knowledge base. Refer to [File Search | OpenAI Platform](https://platform.openai.com/docs/assistants/tools/file-search) for more information.

- **Files**: Select a file to upload for your external knowledge source. Use **Upload a File** operation to add more files.

- **Output Randomness (Temperature)**: Adjust the randomness of the response. The range is between `0.0` (deterministic) and `1.0` (maximum randomness). We recommend altering this or **Output Randomness (Top P)** but not both. Start with a medium temperature (around 0.7) and adjust based on the outputs you observe. If the responses are too repetitive or rigid, increase the temperature. If they’re too chaotic or off-track, decrease it. Defaults to `1.0`.
- **Output Randomness (Top P)**: Adjust the Top P setting to control the diversity of the assistant's responses. For example, `0.5` means half of all likelihood-weighted options are considered. We recommend altering this or **Output Randomness (Temperature)** but not both. Defaults to `1.0`.
- **Fail if Assistant Already Exists**: If enabled, the operation will fail if an assistant with the same name already exists.

Refer to [Create assistant | OpenAI](https://platform.openai.com/docs/api-reference/assistants/createAssistant) documentation for more information.

## Delete an Assistant

Use this operation to delete an existing assistant from your account.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [OpenAI credential](../../../credentials/openai/).
- **Resource**: Select **Assistant**.
- **Operation**: Select **Delete an Assistant**.
- **Assistant**: Select the assistant you want to delete **From list** or **By ID**.

Refer to [Delete assistant | OpenAI](https://platform.openai.com/docs/api-reference/assistants/deleteAssistant) documentation for more information.

Use this operation to retrieve a list of assistants in your organization.

- **Credential to connect with**: Create or select an existing [OpenAI credential](../../../credentials/openai/).
- **Resource**: Select **Assistant**.
- **Operation**: Select **List Assistants**.

- **Simplify Output**: Turn on to return a simplified version of the response instead of the raw data. This option is enabled by default.

Refer to [List assistants | OpenAI](https://platform.openai.com/docs/api-reference/assistants/listAssistants) documentation for more information.

## Message an Assistant

Use this operation to send a message to an assistant and receive a response.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [OpenAI credential](../../../credentials/openai/).
- **Resource**: Select **Assistant**.
- **Operation**: Select **Message an Assistant**.
- **Assistant**: Select the assistant you want to message.
- **Prompt**: Enter the text prompt or message that you want to send to the assistant.
  - **Connected Chat Trigger Node**: Automatically use the input from a previous node's `chatInput` field.
  - **Define Below**: Manually define the prompt by entering static text or using an expression to reference data from previous nodes.

- **Base URL**: Enter the base URL that the assistant should use for making API requests. This option is useful for directing the assistant to use endpoints provided by other LLM providers that offer an OpenAI-compatible API.
- **Max Retries**: Specify the number of times the assistant should retry an operation in case of failure.
- **Timeout**: Set the maximum amount of time in milliseconds, that the assistant should wait for a response before timing out. Use this option to prevent long waits during operations.
- **Preserve Original Tools**: Turn off to remove the original tools associated with the assistant. Use this if you want to temporarily remove tools for this specific operation.

Refer to [Assistants | OpenAI](https://platform.openai.com/docs/api-reference/assistants) documentation for more information.

## Update an Assistant

Use this operation to update the details of an existing assistant.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [OpenAI credential](../../../credentials/openai/).
- **Resource**: Select **Assistant**.
- **Operation**: Select **Update an Assistant**.
- **Assistant**: Select the assistant you want to update.

- **Code Interpreter**: Turn on to enable the code interpreter for the assistant, where it can write and execute code in a sandbox environment. Enable this tool for tasks that require computations, data analysis, or any logic-based processing.

- **Description**: Enter the description of the assistant. The maximum length is 512 characters.

- **Instructions**: Enter the system instructions that the assistant uses. The maximum length is 32,768 characters. Use this to specify the persona used by the model in its replies.

- **Knowledge Retrieval**: Turn on to enable knowledge retrieval for the assistant, allowing it to access external sources or a connected knowledge base. Refer to [File Search | OpenAI Platform](https://platform.openai.com/docs/assistants/tools/file-search) for more information.

- **Files**: Select a file to upload for your external knowledge source. Use [**Upload a File**](../file-operations/#upload-a-file) operation to add more files. Note that this only updates the [Code Interpreter](https://platform.openai.com/docs/assistants/tools/code-interpreter) tool, not the [File Search](https://platform.openai.com/docs/assistants/tools/file-search) tool.

- **Model**: Select the model that the assistant will use. If you’re not sure which model to use, try `gpt-4o` if you need high intelligence or `gpt-4o-mini` if you need the fastest speed and lowest cost. Refer to [Models overview | OpenAI Platform](https://platform.openai.com/docs/models) for more information.

- **Name**: Enter the name of the assistant. The maximum length is 256 characters.

- **Remove All Custom Tools (Functions)**: Turn on to remove all custom tools (functions) from the assistant.

- **Output Randomness (Temperature)**: Adjust the randomness of the response. The range is between `0.0` (deterministic) and `1.0` (maximum randomness). We recommend altering this or **Output Randomness (Top P)** but not both. Start with a medium temperature (around 0.7) and adjust based on the outputs you observe. If the responses are too repetitive or rigid, increase the temperature. If they’re too chaotic or off-track, decrease it. Defaults to `1.0`.

- **Output Randomness (Top P)**: Adjust the Top P setting to control the diversity of the assistant's responses. For example, `0.5` means half of all likelihood-weighted options are considered. We recommend altering this or **Output Randomness (Temperature)** but not both. Defaults to `1.0`.

Refer to [Modify assistant | OpenAI](https://platform.openai.com/docs/api-reference/assistants/modifyAssistant) documentation for more information.

For common errors or issues and suggested resolution steps, refer to [Common Issues](../common-issues/).

**Examples:**

Example 1 (unknown):
```unknown
A virtual assistant that helps users with daily tasks, including setting reminders, answering general questions, and providing quick information.
```

Example 2 (unknown):
```unknown
Always respond in a friendly and engaging manner. When a user asks a question, provide a concise answer first, followed by a brief explanation or additional context if necessary. If the question is open-ended, offer a suggestion or ask a clarifying question to guide the conversation. Keep the tone positive and supportive, and avoid technical jargon unless specifically requested by the user.
```

Example 3 (unknown):
```unknown
A virtual assistant that helps users with daily tasks, including setting reminders, answering general questions, and providing quick information.
```

Example 4 (unknown):
```unknown
Always respond in a friendly and engaging manner. When a user asks a question, provide a concise answer first, followed by a brief explanation or additional context if necessary. If the question is open-ended, offer a suggestion or ask a clarifying question to guide the conversation. Keep the tone positive and supportive, and avoid technical jargon unless specifically requested by the user.
```

---

## Google Drive Shared Drive operations

**URL:** llms-txt#google-drive-shared-drive-operations

**Contents:**
- Create a shared drive
  - Options
- Delete a shared drive
- Get a shared drive
  - Options
- Get many shared drives
  - Options
- Update a shared drive
  - Update Fields

Use this operation to create, delete, get, and update shared drives in Google Drive. Refer to [Google Drive](../) for more information on the Google Drive node itself.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../../advanced-ai/examples/using-the-fromai-function/).

## Create a shared drive

Use this operation to create a new shared drive.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [Google Drive credentials](../../../credentials/google/).
- **Resource**: Select **Shared Drive**.
- **Operation**: Select **Create**.
- **Name**: The name to use for the new shared drive.

- **Capabilities**: The capabilities to set for the new shared drive (see [REST Resources: drives | Google Drive](https://developers.google.com/drive/api/reference/rest/v3/drives) for more details):
  - **Can Add Children**: Whether the current user can add children to folders in this shared drive.
  - **Can Change Copy Requires Writer Permission Restriction**: Whether the current user can change the `copyRequiresWriterPermission` restriction on this shared drive.
  - **Can Change Domain Users Only Restriction**: Whether the current user can change the `domainUsersOnly` restriction on this shared drive.
  - **Can Change Drive Background**: Whether the current user can change the background on this shared drive.
  - **Can Change Drive Members Only Restriction**: Whether the current user can change the `driveMembersOnly` restriction on this shared drive.
  - **Can Comment**: Whether the current user can comment on files in this shared drive.
  - **Can Copy**: Whether the current user can copy files in this shared drive.
  - **Can Delete Children**: Whether the current user can delete children from folders in this shared drive.
  - **Can Delete Drive**: Whether the current user can delete this shared drive. This operation may still fail if there are items not in the trash in the shared drive.
  - **Can Download**: Whether the current user can download files from this shared drive.
  - **Can Edit**: Whether the current user can edit files from this shared drive.
  - **Can List Children**: Whether the current user can list the children of folders in this shared drive.
  - **Can Manage Members**: Whether the current user can add, remove, or change the role of members of this shared drive.
  - **Can Read Revisions**: Whether the current user can read the revisions resource of files in this shared drive.
  - **Can Rename Drive**: Whether the current user can rename this shared drive.
  - **Can Share**: Whether the current user can share files or folders in this shared drive.
  - **Can Trash Children**: Whether the current user can trash children from folders in this shared drive.
- **Color RGB**: The color of this shared drive as an RGB hex string.
- **Hidden**: Whether to hide this shared drive in the default view.
- **Restrictions**: Restrictions to add to this shared drive (see [REST Resources: drives | Google Drive](https://developers.google.com/drive/api/reference/rest/v3/drives) for more details):
  - **Admin Managed Restrictions**: When enabled, restrictions here will override the similarly named fields to true for any file inside of this shared drive.
  - **Copy Requires Writer Permission**: Whether the options to copy, print, or download files inside this shared drive should be disabled for readers and commenters.
  - **Domain Users Only**: Whether to restrict access to this shared drive and items inside this shared drive to users of the domain to which this shared drive belongs.
  - **Drive Members Only**: Whether to restrict access to items inside this shared drive to its members.

Refer to the [Method: drives.insert | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/drives/insert) API documentation for more information.

## Delete a shared drive

Use this operation to delete a shared drive.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [Google Drive credentials](../../../credentials/google/).
- **Resource**: Select **Shared Drive**.
- **Operation**: Select **Delete**.
- **Shared Drive**: Choose the shared drive want to delete.
  - Select **From list** to choose the title from the dropdown list, **By URL** to enter the URL of the drive, or **By ID** to enter the `driveId`.
  - You can find the `driveId` in the URL for the shared Google Drive: `https://drive.google.com/drive/u/0/folders/driveID`.

Refer to the [Method: drives.delete | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/drives/delete) API documentation for more information.

## Get a shared drive

Use this operation to get a shared drive.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [Google Drive credentials](../../../credentials/google/).
- **Resource**: Select **Shared Drive**.
- **Operation**: Select **Get**.
- **Shared Drive**: Choose the shared drive want to get.
  - Select **From list** to choose the title from the dropdown list, **By URL** to enter the URL of the drive, or **By ID** to enter the `driveId`.
  - You can find the `driveId` in the URL for the shared Google Drive: `https://drive.google.com/drive/u/0/folders/driveID`.

- **Use Domain Admin Access**: Whether to issue the request as a domain administrator. When enabled, grants the requester access if they're an administrator of the domain to which the shared drive belongs.

Refer to the [Method: drives.get | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/drives/get) API documentation for more information.

## Get many shared drives

Use this operation to get many shared drives.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [Google Drive credentials](../../../credentials/google/).
- **Resource**: Select **Shared Drive**.
- **Operation**: Select **Get Many**.
- **Return All**: Choose whether to return all results or only up to a given limit.
- **Limit**: The maximum number of items to return when **Return All** is disabled.
- **Shared Drive**: Choose the shared drive want to get.
  - Select **From list** to choose the title from the dropdown list, **By URL** to enter the URL of the drive, or **By ID** to enter the `driveId`.
  - You can find the `driveId` in the URL for the shared Google Drive: `https://drive.google.com/drive/u/0/folders/driveID`.

- **Query**: The query string to use to search for shared drives. See [Search for shared drives | Google Drive](https://developers.google.com/drive/api/guides/search-shareddrives) for more information.
- **Use Domain Admin Access**: Whether to issue the request as a domain administrator. When enabled, grants the requester access if they're an administrator of the domain to which the shared drive belongs.

Refer to the [Method: drives.get | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/drives/get) API documentation for more information.

## Update a shared drive

Use this operation to update a shared drive.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [Google Drive credentials](../../../credentials/google/).
- **Resource**: Select **Shared Drive**.
- **Operation**: Select **Update**.
- **Shared Drive**: Choose the shared drive you want to update.
  - Select **From list** to choose the drive from the dropdown list, **By URL** to enter the URL of the drive, or **By ID** to enter the `driveId`.
  - You can find the `driveId` in the URL for the shared Google Drive: `https://drive.google.com/drive/u/0/folders/driveID`.

- **Color RGB**: The color of this shared drive as an RGB hex string.
- **Name**: The updated name for the shared drive.
- **Restrictions**: Restrictions for this shared drive (see [REST Resources: drives | Google Drive](https://developers.google.com/drive/api/reference/rest/v3/drives) for more details):
  - **Admin Managed Restrictions**: When enabled, restrictions here will override the similarly named fields to true for any file inside of this shared drive.
  - **Copy Requires Writer Permission**: Whether the options to copy, print, or download files inside this shared drive should be disabled for readers and commenters.
  - **Domain Users Only**: Whether to restrict access to this shared drive and items inside this shared drive to users of the domain to which this shared drive belongs.
  - **Drive Members Only**: Whether to restrict access to items inside this shared drive to its members.

Refer to the [Method: drives.update | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/drives/update) API documentation for more information.

---

## Google Sheets Sheet Within Document operations

**URL:** llms-txt#google-sheets-sheet-within-document-operations

**Contents:**
- Append or Update Row
  - Options
- Append Row
  - Options
- Clear a sheet
- Create a new sheet
  - Options
- Delete a sheet
- Delete Rows or Columns
- Get Row(s)

Use this operation to create, update, clear or delete a sheet in a Google spreadsheet from Google Sheets. Refer to [Google Sheets](../) for more information on the Google Sheets node itself.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../../advanced-ai/examples/using-the-fromai-function/).

## Append or Update Row

Use this operation to update an existing row or add a new row at the end of the data if a matching entry isn't found in a sheet.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [Google Sheets credentials](../../../credentials/google/).
- **Resource**: Select **Sheet Within Document**.
- **Operation**: Select **Append or Update Row**.
- **Document**: Choose a spreadsheet that contains the sheet you want to append or update row(s) to.
  - Select **From list** to choose the spreadsheet title from the dropdown list, **By URL** to enter the url of the spreadsheet, or **By ID** to enter the `spreadsheetId`.
  - You can find the `spreadsheetId` in a Google Sheets URL: `https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=0`.
- **Sheet**: Choose a sheet you want to append or update row(s) to.
  - Select **From list** to choose the sheet title from the dropdown list, **By URL** to enter the url of the sheet, **By ID** to enter the `sheetId`, or **By Name** to enter the sheet title.
  - You can find the `sheetId` in a Google Sheets URL: `https://docs.google.com/spreadsheets/d/aBC-123_xYz/edit#gid=sheetId`.
- **Mapping Column Mode**:
  - **Map Each Column Manually**: Enter **Values to Send** for each column.
  - **Map Automatically**: n8n looks for incoming data that matches the columns in Google Sheets automatically. In this mode, make sure the incoming data fields are the same as the columns in Google Sheets. (Use an [Edit Fields](../../../core-nodes/n8n-nodes-base.set/) node before this node to change them if required.)
  - **Nothing**: Don't map any data.

- **Cell Format**: Use this option to choose how to format the data in cells. Refer to [Google Sheets API | CellFormat](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/cells#CellFormat) for more information.
  - **Let Google Sheets format** (default): n8n formats text and numbers in the cells according to Google Sheets' default settings.
  - **Let n8n format**: New cells in your sheet will have the same data types as the input data provided by n8n.
- **Data Location on Sheet**: Use this option when you need to specify the data range on your sheet.
  - **Header Row**: Specify the row index that contains the column headers.
  - **First Data Row**: Specify the row index where the actual data starts.
- **Handling extra fields in input**: When using **Mapping Column Mode > Map Automatically**, use this option to decide how to handle fields in the input data that don't match any existing columns in the sheet.
  - **Insert in New Column(s)** (default): Adds new columns for any extra data.
  - **Ignore Them**: Ignores extra data that don't match the existing columns.
  - **Error**: Throws an error and stops execution.
- **Use Append**: Turn on this option to use the [Google API append endpoint](https://developers.google.com/sheets/api/guides/values#append_values) for adding new data rows.
  - By default, n8n appends empty rows or columns and then adds the new data. This approach can ensure data alignment but may be less efficient. Using the append endpoint can lead to better performance by minimizing the number of API calls and simplifying the process. But if the existing sheet data has inconsistencies such as gaps or breaks between rows and columns, n8n may add the new data in the wrong place, leading to misalignment issues.
  - Use this option when performance is a priority and the data structure in the sheet is consistent without gaps.

Refer to the [Method: spreadsheets.values.update | Google Sheets](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/update) API documentation for more information.

Use this operation to append a new row at the end of the data in a sheet.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [Google Sheets credentials](../../../credentials/google/).
- **Resource**: Select **Sheet Within Document**.
- **Operation**: Select **Append Row**.
- **Document**: Choose a spreadsheet with the sheet you want to append a row to.
  - Select **From list** to choose the spreadsheet title from the dropdown list, **By URL** to enter the url of the spreadsheet, or **By ID** to enter the `spreadsheetId`.
  - You can find the `spreadsheetId` in a Google Sheets URL: `https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=0`.
- **Sheet**: Choose a sheet you want to append a row to.
  - Select **From list** to choose the sheet title from the dropdown list, **By URL** to enter the url of the sheet, **By ID** to enter the `sheetId`, or **By Name** to enter the sheet title.
  - You can find the `sheetId` in a Google Sheets URL: `https://docs.google.com/spreadsheets/d/aBC-123_xYz/edit#gid=sheetId`.
- **Mapping Column Mode**:
  - **Map Each Column Manually**: Select the **Column to Match On** when finding the rows to update. Enter **Values to Send** for each column.
  - **Map Automatically**: n8n looks for incoming data that matches the columns in Google Sheets automatically. In this mode, make sure the incoming data fields are the same as the columns in Google Sheets. (Use an [Edit Fields](../../../core-nodes/n8n-nodes-base.set/) node before this node to change them if required.)
  - **Nothing**: Don't map any data.

- **Cell Format**: Use this option to choose how to format the data in cells. Refer to [Google Sheets API | CellFormat](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/cells#CellFormat) for more information.
  - **Let Google Sheets format** (default): n8n formats text and numbers in the cells according to Google Sheets' default settings.
  - **Let n8n format**: New cells in your sheet will have the same data types as the input data provided by n8n.
- **Data Location on Sheet**: Use this option when you need to specify the data range on your sheet.
  - **Header Row**: Specify the row index that contains the column headers.
  - **First Data Row**: Specify the row index where the actual data starts.
- **Handling extra fields in input**: When using **Mapping Column Mode > Map Automatically**, use this option to decide how to handle fields in the input data that don't match any existing columns in the sheet.
  - **Insert in New Column(s)** (default): Adds new columns for any extra data.
  - **Ignore Them**: Ignores extra data that don't match the existing columns.
  - **Error**: Throws an error and stops execution.
- **Use Append**: Turn on this option to use the [Google API append endpoint](https://developers.google.com/sheets/api/guides/values#append_values) for adding new data rows.
  - By default, n8n appends empty rows or columns and then adds the new data. This approach can ensure data alignment but may be less efficient. Using the append endpoint can lead to better performance by minimizing the number of API calls and simplifying the process. But if the existing sheet data has inconsistencies such as gaps or breaks between rows and columns, n8n may add the new data in the wrong place, leading to misalignment issues.
  - Use this option when performance is a priority and the data structure in the sheet is consistent without gaps.

Refer to the [Method: spreadsheets.values.append | Google Sheets](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/append) API documentation for more information.

Use this operation to clear all data from a sheet.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [Google Sheets credentials](../../../credentials/google/).
- **Resource**: Select **Sheet Within Document**.
- **Operation**: Select **Clear**.
- **Document**: Choose a spreadsheet with the sheet you want to clear data from.
  - Select **From list** to choose the spreadsheet title from the dropdown list, **By URL** to enter the url of the spreadsheet, or **By ID** to enter the `spreadsheetId`.
  - You can find the `spreadsheetId` in a Google Sheets URL: `https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=0`.
- **Sheet**: Choose a sheet you want to clear data from.
  - Select **From list** to choose the sheet title from the dropdown list, **By URL** to enter the url of the sheet, **By ID** to enter the `sheetId`, or **By Name** to enter the sheet title.
  - You can find the `sheetId` in a Google Sheets URL: `https://docs.google.com/spreadsheets/d/aBC-123_xYz/edit#gid=sheetId`.
- **Clear**: Select what data you want cleared from the sheet.
  - **Whole Sheet**: Clear the entire sheet's data. Turn on **Keep First Row** to keep the first row of the sheet.
  - **Specific Rows**: Clear data from specific rows. Also enter:
    - **Start Row Number**: Enter the first row number you want to clear.
    - **Number of Rows to Delete**: Enter the number of rows to clear. `1` clears data only the row in the **Start Row Number**.
  - **Specific Columns**: Clear data from specific columns. Also enter:
    - **Start Column**: Enter the first column you want to clear using the letter notation.
    - **Number of Columns to Delete**: Enter the number of columns to clear. `1` clears data only in the **Start Column**.
  - **Specific Range**: Enter the table range to clear data from, in [A1 notation](https://developers.google.com/sheets/api/guides/concepts#cell).

Refer to the [Method: spreadsheets.values.clear | Google Sheets](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/clear) API documentation for more information.

## Create a new sheet

Use this operation to create a new sheet.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [Google Sheets credentials](../../../credentials/google/).
- **Resource**: Select **Sheet Within Document**.
- **Operation**: Select **Create**.
- **Document**: Choose a spreadsheet in which you want to create a new sheet.
  - Select **From list** to choose the spreadsheet title from the dropdown list, **By URL** to enter the url of the spreadsheet, or **By ID** to enter the `spreadsheetId`.
  - You can find the `spreadsheetId` in a Google Sheets URL: `https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=0`.
- **Title**: Enter the title for your new sheet.

- **Hidden**: Turn on this option to keep the sheet hidden in the UI.
- **Right To Left**: Turn on this option to use RTL sheet instead of an LTR sheet.
- **Sheet ID**: Enter the ID of the sheet.
  - You can find the `sheetId` in a Google Sheets URL: `https://docs.google.com/spreadsheets/d/aBC-123_xYz/edit#gid=sheetId`
- **Sheet Index**: By default, the new sheet is the last sheet in the spreadsheet. To override this behavior, enter the index you want the new sheet to use. When you add a sheet at a given index, Google increments the indices for all following sheets. Refer to [Sheets | SheetProperties](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/sheets#SheetProperties) documentation for more information.
- **Tab Color**: Enter the color as hex code or use the color picker to set the color of the tab in the UI.

Refer to the [Method: spreadsheets.batchUpdate | Google Sheets](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/batchUpdate) API documentation for more information.

Use this operation to permanently delete a sheet.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [Google Sheets credentials](../../../credentials/google/).
- **Resource**: Select **Sheet Within Document**.
- **Operation**: Select **Delete**.
- **Document**: Choose a spreadsheet that contains the sheet you want to delete.
  - Select **From list** to choose the spreadsheet title from the dropdown list, **By URL** to enter the url of the spreadsheet, or **By ID** to enter the `spreadsheetId`.
  - You can find the `spreadsheetId` in a Google Sheets URL: `https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=0`.
- **Sheet**: Choose the sheet you want to delete.
  - Select **From list** to choose the sheet title from the dropdown list, **By URL** to enter the url of the sheet, **By ID** to enter the `sheetId`, or **By Name** to enter the name of the sheet.
  - You can find the `sheetId` in a Google Sheets URL: `https://docs.google.com/spreadsheets/d/aBC-123_xYz/edit#gid=sheetId`.

Refer to the [Method: spreadsheets.batchUpdate | Google Sheets](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/batchUpdate) API documentation for more information.

## Delete Rows or Columns

Use this operation to delete rows or columns in a sheet.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [Google Sheets credentials](../../../credentials/google/).
- **Resource**: Select **Sheet Within Document**.
- **Operation**: Select **Delete Rows or Columns**.
- **Document**: Choose a spreadsheet that contains the sheet you want to delete rows or columns from.
  - Select **From list** to choose the spreadsheet title from the dropdown list, **By URL** to enter the url of the spreadsheet, or **By ID** to enter the `spreadsheetId`.
  - You can find the `spreadsheetId` in a Google Sheets URL: `https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=0`.
- **Sheet**: Choose the sheet in which you want to delete rows or columns.
  - Select **From list** to choose the sheet title from the dropdown list, **By URL** to enter the url of the sheet, **By ID** to enter the `sheetId`, or **By Name** to enter the name of the sheet.
  - You can find the `sheetId` in a Google Sheets URL: `https://docs.google.com/spreadsheets/d/aBC-123_xYz/edit#gid=sheetId`.
- **Start Row Number** or **Start Column**: Enter the row number or column letter to start deleting.
- **Number of Rows to Delete** or **Number of Columns to delete**: Enter the number of rows or columns to delete.

Refer to the [Method: spreadsheets.batchUpdate | Google Sheets](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/batchUpdate) API documentation for more information.

Use this operation to read one or more rows from a sheet.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [Google Sheets credentials](../../../credentials/google/).
- **Resource**: Select **Sheet Within Document**.
- **Operation**: Select **Get Row(s)**.
- **Document**: Choose a spreadsheet that contains the sheet you want to get rows from.
  - Select **From list** to choose the spreadsheet title from the dropdown list, **By URL** to enter the url of the spreadsheet, or **By ID** to enter the `spreadsheetId`.
  - You can find the `spreadsheetId` in a Google Sheets URL: `https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=0`.
- **Sheet**: Choose a sheet you want to read rows from.
  - Select **From list** to choose the sheet title from the dropdown list, **By URL** to enter the url of the sheet, **By ID** to enter the `sheetId`, or **By Name** to enter the name of the sheet.
  - You can find the `sheetId` in a Google Sheets URL: `https://docs.google.com/spreadsheets/d/aBC-123_xYz/edit#gid=sheetId`.
- **Filters**: By default, the node returns all rows in the sheet. Set filters to return a limited set of results:
  - **Column**: Select the column in your sheet to search against.
  - **Value**: Enter a cell value to search for. You can drag input data parameters here. If your filter matches multiple rows, n8n returns the first result. If you want all matching rows:
    1. Under **Options**, select **Add Option** > **When Filter Has Multiple Matches**.
    1. Change **When Filter Has Multiple Matches** to **Return All Matches**.

- **Data Location on Sheet**: Use this option to specify a data range. By default, n8n will detect the range automatically until the last row in the sheet.
- **Output Formatting**: Use this option to choose how n8n formats the data returned by Google Sheets.
- **General Formatting**:
  - **Values (unformatted)** (default): n8n removes currency signs and other special formatting. Data type remains as number.
  - **Values (formatted)**: n8n displays the values as they appear in Google Sheets (for example, retaining commas or currency signs) by converting the data type from number to string.
  - **Formulas**: n8n returns the formula. It doesn't calculate the formula output. For example, if a cell B2 has the formula `=A2`, n8n returns B2's value as `=A2` (in text). Refer to [About date & time values | Google Sheets](https://developers.google.com/sheets/api/guides/formats#about_date_time_values) for more information.
- **Date Formatting**: Refer to [DateTimeRenderOption | Google Sheets](https://developers.google.com/sheets/api/reference/rest/v4/DateTimeRenderOption) for more information.
  - **Formatted Text** (default): As displayed in Google Sheets, which depends on the spreadsheet locale. For example `01/01/2024`.
  - **Serial Number**: Number of days since December 30th 1899.
- **When Filter Has Multiple Matches**: Set to **Return All Matches** to get multiple matches. By default only the first result gets returned.

n8n treats the first row in a Google Sheet as a heading row, and doesn't return it when reading all rows. If you want to read the first row, use the **Options** to set **Data Location on Sheet**.

Refer to the [Method: spreadsheets.batchUpdate | Google Sheets](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/batchUpdate) API documentation for more information.

Use this operation to update existing row in a sheet. This operation only updates existing rows. To append rows when a matching entry isn't found in a sheet, use **Append or Update Row** operation instead.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [Google Sheets credentials](../../../credentials/google/).
- **Resource**: Select **Sheet Within Document**.
- **Operation**: Select **Update Row**.
- **Document**: Choose a spreadsheet with the sheet you want to update.
  - Select **From list** to choose the spreadsheet title from the dropdown list, **By URL** to enter the url of the spreadsheet, or **By ID** to enter the `spreadsheetId`.
  - You can find the `spreadsheetId` in a Google Sheets URL: `https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=0`.
- **Sheet**: Choose a sheet you want to update.
  - Select **From list** to choose the sheet title from the dropdown list, **By URL** to enter the url of the sheet, **By ID** to enter the `sheetId`, or **By Name** to enter the sheet title.
  - You can find the `sheetId` in a Google Sheets URL: `https://docs.google.com/spreadsheets/d/aBC-123_xYz/edit#gid=sheetId`.
- **Mapping Column Mode**:
  - **Map Each Column Manually**: Enter **Values to Send** for each column.
  - **Map Automatically**: n8n looks for incoming data that matches the columns in Google Sheets automatically. In this mode, make sure the incoming data fields are the same as the columns in Google Sheets. (Use an [Edit Fields](../../../core-nodes/n8n-nodes-base.set/) node before this node to change them if required.)
  - **Nothing**: Don't map any data.

- **Cell Format**: Use this option to choose how to format the data in cells. Refer to [Google Sheets API | CellFormat](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/cells#CellFormat) for more information.
  - **Let Google Sheets format** (default): n8n formats text and numbers in the cells according to Google Sheets' default settings.
  - **Let n8n format**: New cells in your sheet will have the same data types as the input data provided by n8n.
- **Data Location on Sheet**: Use this option when you need to specify where the data range on your sheet.
  - **Header Row**: Specify the row index that contains the column headers.
  - **First Data Row**: Specify the row index where the actual data starts.

Refer to the [Method: spreadsheets.batchUpdate | Google Sheets](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/batchUpdate) API documentation for more information.

---

## Google Sheets Document operations

**URL:** llms-txt#google-sheets-document-operations

**Contents:**
- Create a spreadsheet
  - Options
- Delete a spreadsheet

Use this operation to create or delete a Google spreadsheet from Google Sheets. Refer to [Google Sheets](../) for more information on the Google Sheets node itself.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../../advanced-ai/examples/using-the-fromai-function/).

## Create a spreadsheet

Use this operation to create a new spreadsheet.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [Google Sheets credentials](../../../credentials/google/).
- **Resource**: Select **Document**.
- **Operation**: Select **Create**.
- **Title**: Enter the title of the new spreadsheet you want to create.
- **Sheets**: Add the **Title(s)** of the sheet(s) you want to create within the spreadsheet.

- **Locale**: Enter the locale of the spreadsheet. This affects formatting details such as functions, dates, and currency. Use one of the following formats:
  - `en` (639-1)
  - `fil` (639-2 if no 639-1 format exists)
  - `en_US` (combination of ISO language and country).
  - Refer to [List of ISO 639 language codes](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) and [List of ISO 3166 country codes](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) for language and country codes. Note that Google doesn't support all locales/languages.
- **Recalculation Interval**: Enter the desired recalculation interval for the spreadsheet functions. This affects how often `NOW`, `TODAY`, `RAND`, and `RANDBETWEEN` are updated. Select **On Change** for recalculating whenever there is a change in the spreadsheet, **Minute** for recalculating every minute, or **Hour** for recalculating every hour. Refer to [Set a spreadsheet’s location & calculation settings](https://support.google.com/docs/answer/58515) for more information about these options.

Refer to the [Method: spreadsheets.create | Google Sheets](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/create) API documentation for more information.

## Delete a spreadsheet

Use this operation to delete an existing spreadsheet.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [Google Sheets credentials](../../../credentials/google/).
- **Resource**: Select **Document**.
- **Operation**: Select **Delete**.
- **Document**: Choose a spreadsheet you want to delete.
  - Select **From list** to choose the title from the dropdown list, **By URL** to enter the url of the spreadsheet, or **By ID** to enter the `spreadsheetId`.
  - You can find the `spreadsheetId` in a Google Sheets URL: `https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=0`.

Refer to the [Method: files.delete | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/files/delete) API documentation for more information.

---

## Build an AI chat agent with n8n

**URL:** llms-txt#build-an-ai-chat-agent-with-n8n

**Contents:**
  - What you will need
  - What you will learn
- AI concepts in n8n
- 1. Create a new workflow
- 2. Add a trigger node
- 3. Add an AI Agent Node
- 4. Configure the node
- 5. Add credentials (if needed)
- 6. Test the node
- 7. Changing the prompt

Welcome to the introductory tutorial for building AI workflows with n8n. Whether you have used n8n before, or this is your first time, we will show you how the building blocks of AI workflows fit together and construct a working AI-powered chat agent which you can easily customize for your own purposes.

Many people find it easier to take in new information in video format. This tutorial is based on one of n8n's popular videos, linked below. Watch the video or read the steps here, or both!

### What you will need

- **n8n**: For this tutorial we recommend using the [n8n cloud](../../manage-cloud/overview/) service - there is a free trial for new users! For a self hosted service, refer to the [installation pages](../../hosting/installation/docker/).
- **Credentials for a chat model**: This tutorial uses OpenAI, but you can easily use DeepSeek, Google Gemini, Groq, Azure, and others (see the [sub-nodes documentation](../../integrations/builtin/cluster-nodes/sub-nodes/) for more).

### What you will learn

- AI concepts in n8n
- How to use the AI Agent node
- Working with Chat input
- Connecting with AI models
- Customising input
- Observing the conversation
- Adding persistence

## AI concepts in n8n

If you're already familiar with AI, feel free to skip this section. This is a basic introduction to AI concepts and how they can be used in n8n workflows.

An [AI agent](../../glossary/#ai-agent) builds on [Large Language Models (LLMs)](../../glossary/#large-language-model-llm), which generate text based on input by predicting the next word. While LLMs only process input to produce output, AI agents add goal-oriented functionality. They can use [tools](../../glossary/#ai-tool), process their outputs, and make decisions to complete tasks and solve problems.

In n8n, the AI agent is represented as a node with some extra connections.

| Feature             | LLM                        | AI Agent                           |
| ------------------- | -------------------------- | ---------------------------------- |
| Core Capability     | Text generation            | Goal-oriented task completion      |
| Decision-Making     | None                       | Yes                                |
| Uses Tools/APIs     | No                         | Yes                                |
| Workflow Complexity | Single-step                | Multi-step                         |
| Scope               | Generates language         | Performs complex, real-world tasks |
| Example             | LLM generating a paragraph | An agent scheduling an appointment |

By incorporating the AI agent as a node, n8n can combine AI-driven steps with traditional programming for efficient, real-world workflows. For instance, simpler tasks, like validating an email address, do not require AI, whereas a complex tasks, like processing the *content* of an email or dealing with multimodal inputs (e.g., images, audio), are excellent uses of an AI agent.

## 1. Create a new workflow

When you open n8n, you'll see either:

- An empty workflow: if you have no workflows and you're logging in for the first time. Use this workflow.
- The **Workflows** list on the **Overview** page. Select the **button** to create a new workflow.

## 2. Add a trigger node

Every workflow needs somewhere to start. In n8n these are called ['trigger nodes'](../../glossary/#trigger-node-n8n). For this workflow, we want to start with a chat node.

1. Select **Add first step** or press `Tab` to open the node menu.
1. Search for **Chat Trigger**. n8n shows a list of nodes that match the search.
1. Select **Chat Trigger** to add the node to the canvas. n8n opens the node.
1. Close the node details view (Select **Back to canvas**) to return to the canvas.

More about the Chat Trigger node...

The trigger node generates output when there is an event causing it to trigger. In this case we want to be able to type in text to cause the workflow to run. In production, this trigger can be hooked up to a public chat interface as provided by n8n or embedded into another website. To start this simple workflow we will just use the built-in local chat interface to communicate, so no further setup is required.

[View workflow file](/_workflows//advanced-ai/tutorials/chat_01.json)

## 3. Add an AI Agent Node

The AI Agent node is the core of adding AI to your workflows.

1. Select the **Add node** connector on the trigger node to bring up the node search.
1. Start typing "AI" and choose the **AI agent** node to add it.
1. The editing view of the **AI agent** will now be displayed.
1. There are some fields which can be changed. As we're using the **Chat Trigger** node, the default setting for the source and specification of the prompt don't need to be changed.

[View workflow file](/_workflows//advanced-ai/tutorials/chat_02.json)

## 4. Configure the node

AI agents require a chat model to be attached to process the incoming prompts.

1. Add a chat model by clicking the plus button underneath the **Chat Model** connection on the **AI Agent** node (it's the first connection along the bottom of the node).
1. The search dialog will appear, filtered on 'Language Models'. These are the models with built-in support in n8n. For this tutorial we will use **OpenAI Chat Model**.
1. Selecting the **OpenAI Chat model** from the list will attach it to the **AI Agent** node and open the node editor. One of the parameters which can be changed is the 'Model'. Note that for the basic OpenAI accounts, only the 'gpt-4o-mini' model is allowed.

As mentioned earlier, the LLM is the component which generates the text according to a prompt it is given. LLMs have to be created and trained, usually an intensive process. Different LLMS may have different capabilities or specialties, depending on the data they were trained with.

## 5. Add credentials (if needed)

In order for n8n to communicate with the chat model, it will need some [credentials](../../credentials/) (login data giving it access to an account on a different online service). If you already have credentials set up for OpenAI, these should appear by default in the credentials selector. Otherwise you can use the Credentials selector to help you add a new credential.

1. To add a new credential, click on the text which says 'Select credential'. An option to add a new credential will appear
1. This credential just needs an API key. When adding credentials of any type, check the text to the right-hand side. In this case it has a handy link to take you straight to your OpenAI account to retrieve the API key.
1. The API key is just one long string. That's all you need for this particular credential. Copy it from the OpenAI website and paste it into the **API key** section.

Keeping your credentials safe

Credentials are private pieces of information issued by apps and services to authenticate you as a user and allow you to connect and share information between the app or service and the n8n node. The type of information required varies depending on the app/service concerned. You should be careful about sharing or revealing the credentials outside of n8n.

Now that the node is connected to the **Chat Trigger** and a chat model, we can test this part of the workflow.

1. Click on the 'Chat' button near the bottom of the canvas. This opens up a local chat window on the left and the AI agent logs on the right.
1. Type in a message and press `Enter`. You will now see the response from the chat model appear below your message.
1. The log window displays the inputs to and outputs from the AI Agent.

Accessing the logs...

You can access the logs for the AI node even when you aren't using the chat interface. Open up the **AI Agent** node and click on the **Logs** tab in the right hand panel.

## 7. Changing the prompt

The logs in the previous step reveal some extra data - the system prompt. This is the default message that the **AI Agent** primes the chat model with. From the log you can see this is set to "You are a helpful assistant". We can however change this prompt to alter the behavior of the chat model.

1. Open the **AI Agent** node. In the bottom of the panel is a section labeled 'Options' and a selector labeled 'Add Option'. Use this to select 'System message'
1. The system message is now displayed. This is the same priming prompt we noticed before in the logs. Change the prompt to something else to prime the chat model in a different way. You could try something like "You are a brilliant poet who always replies in rhyming couplets" for example.
1. Close the node and return to the chat window. Repeat your message and notice how the output has changed.

## 8. Adding persistence

The chat model is now giving us useful output, but there is something wrong with it which will become apparent when you try to have a conversation.

1. Use the chat and tell the chat model your name, for example "Hi there, my name is Nick".
1. Wait for the response, then type the message "What's my name?". The AI will not be able to tell you, however apologetic it may seem. The reason for this is we are not saving the context. The AI Agent has no [memory](../../glossary/#ai-memory).
1. In order to remember what has happened in the conversation, the AI Agent needs to preserve context. We can do this by adding memory to the **AI Agent** node. On the canvas click on the on the bottom of the **AI Agent** node labeled "Memory".
1. From the panel which appears, select "Simple Memory". This will use the memory from the instance running n8n, and is usually sufficient for simple usage. The default value of 5 interactions should be sufficient here, but remember where this option is if you may want to change it later.
1. Repeat the exercise of having a conversation above, and see that the AI Agent now remembers your name.

## 9. Saving the workflow

Before we leave the workflow editor, remember to save the workflow or all your changes will be lost.

1. Click on the "Save" button in the top right of the editor window. Your workflow will now be saved and you can return to it later to chat again or add new features.

You have taken your first steps in building useful and effective workflows with AI. In this tutorial we have investigated the basic building blocks of an AI workflow, added an **AI Agent** and a chat model, and adjusted the prompt to get the kind of output we wanted. We also added memory so the chat could retain context between messages.

[View workflow file](/_workflows//advanced-ai/tutorials/chat_complete.json)

Now you have seen how to create a basic AI workflow, there are plenty of resources to build on that knowledge and plenty of examples to give you ideas of where to go next:

- Learn more about AI concepts and view examples in [Examples and concepts](../examples/introduction/).
- Browse AI [Workflow templates](https://n8n.io/workflows/?categories=25).
- Find out how to [enhance the AI agent with tools](../examples/understand-tools/).

---

## Google Drive Folder operations

**URL:** llms-txt#google-drive-folder-operations

**Contents:**
- Create a folder
  - Options
- Delete a folder
  - Options
- Share a folder
  - Options

Use this operation to create, delete, and share folders in Google Drive. Refer to [Google Drive](../) for more information on the Google Drive node itself.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../../advanced-ai/examples/using-the-fromai-function/).

Use this operation to create a new folder in a drive.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [Google Drive credentials](../../../credentials/google/).
- **Resource**: Select **Folder**.
- **Operation**: Select **Create**.
- **Folder Name**: The name to use for the new folder.
- **Parent Drive**: Select **From list** to choose the drive from the dropdown list, **By URL** to enter the URL of the drive, or **By ID** to enter the `driveId`.
- **Parent Folder**: Select **From list** to choose the folder from the dropdown list, **By URL** to enter the URL of the folder, or **By ID** to enter the `folderId`.

You can find the `driveId` and `folderID` by visiting the shared drive or folder in your browser and copying the last URL component: `https://drive.google.com/drive/u/1/folders/driveId`.

- **Simplify Output**: Choose whether to return a simplified version of the response instead of including all fields.
- **Folder Color**: The color of the folder as an RGB hex string.

Refer to the [Method: files.insert | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/files/insert) API documentation for more information.

Use this operation to delete a folder from a drive.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [Google Drive credentials](../../../credentials/google/).
- **Resource**: Select **Folder**.
- **Operation**: Select **Delete**.
- **Folder**: Choose a folder you want to delete.
  - Select **From list** to choose the folder from the dropdown list, **By URL** to enter the URL of the folder, or **By ID** to enter the `folderId`.
  - You can find the `folderId` in a Google Drive folder URL: `https://drive.google.com/drive/u/0/folders/folderID`.

- **Delete Permanently**: Choose whether to delete the folder now instead of moving it to the trash.

Refer to the [Method: files.delete | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/files/delete) API documentation for more information.

Use this operation to add sharing permissions to a folder.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [Google Drive credentials](../../../credentials/google/).
- **Resource**: Select **Folder**.
- **Operation**: Select **Share**.
- **Folder**: Choose a file you want to move.
  - Select **From list** to choose the folder from the dropdown list, **By URL** to enter the URL of the folder, or **By ID** to enter the `folderId`.
  - You can find the `folderId` in a Google Drive folder URL: `https://drive.google.com/drive/u/0/folders/folderID`.
- **Permissions**: The permissions to add to the folder:
  - **Role**: Select what users can do with the folder. Can be one of **Commenter**, **File Organizer**, **Organizer**, **Owner**, **Reader**, **Writer**.
  - **Type**: Select the scope of the new permission:
    - **User**: Grant permission to a specific user, defined by entering their **Email Address**.
    - **Group**: Grant permission to a specific group, defined by entering its **Email Address**.
    - **Domain**: Grant permission to a complete domain, defined by the **Domain**.
    - **Anyone**: Grant permission to anyone. Can optionally **Allow File Discovery** to make the file discoverable through search.

- **Email Message**: A plain text custom message to include in the notification email.

- **Move to New Owners Root**: Available when trying to transfer ownership while sharing an item not in a shared drive. When enabled, moves the folder to the new owner's My Drive root folder.

- **Send Notification Email**: Whether to send a notification email when sharing to users or groups.

- **Transfer Ownership**: Whether to transfer ownership to the specified user and downgrade the current owner to writer permissions.

- **Use Domain Admin Access**: Whether to perform the action as a domain administrator.

Refer to the [REST Resources: files | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/files) API documentation for more information.

---

## The top level domain to serve from

**URL:** llms-txt#the-top-level-domain-to-serve-from

DOMAIN_NAME=example.com

---

## Compression

**URL:** llms-txt#compression

**Contents:**
- Node parameters
  - Compress
  - Decompress
- Templates and examples

Use the Compression node to compress and decompress files. Supports Zip and Gzip formats.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

The node parameters depend on which **Operation** you select. Choose to:

- **Compress**: Create a compressed file from your input data.
- **Decompress**: Decompress an existing compressed file.

Refer to the sections below for parameters specific to each **Operation**.

- **Input Binary Field(s)**: Enter the name of the fields in the input data that contain the binary files you want to compress. To compress more than one file, use a comma-separated list.
- **Output Format**: Choose whether to format the compressed output as **Zip** or **Gzip**.
- **File Name**: Enter the name of the zip file the node creates.
- **Put Output File in Field**: Enter the name of the field in the output data to contain the file.

- **Put Output File in Field**: Enter the name of the fields in the input data that contain the binary files you want to decompress. To decompress more than one file, use a comma-separated list.
- **Output Prefix**: Enter a prefix to add to the output file name.

## Templates and examples

**Talk to your SQLite database with a LangChain AI Agent 🧠💬**

[View template details](https://n8n.io/workflows/2292-talk-to-your-sqlite-database-with-a-langchain-ai-agent/)

**Transcribing Bank Statements To Markdown Using Gemini Vision AI**

[View template details](https://n8n.io/workflows/2421-transcribing-bank-statements-to-markdown-using-gemini-vision-ai/)

**Build a Tax Code Assistant with Qdrant, Mistral.ai and OpenAI**

[View template details](https://n8n.io/workflows/2341-build-a-tax-code-assistant-with-qdrant-mistralai-and-openai/)

[Browse Compression integration templates](https://n8n.io/integrations/compression/), or [search all templates](https://n8n.io/workflows/)

---

## Self-hosted AI Starter Kit

**URL:** llms-txt#self-hosted-ai-starter-kit

**Contents:**
- What’s included
- What you can build
- Get the kit

The Self-hosted AI Starter Kit is an open, docker compose template that bootstraps a fully featured Local AI and Low Code development environment.

Curated by [n8n](https://github.com/n8n-io), it combines the self-hosted n8n platform with a list of compatible AI products and components to get you started building self-hosted AI workflows.

✅ [**Self-hosted n8n**](../../): Low-code platform with over 400 integrations and advanced AI components.

✅ [**Ollama**](https://ollama.com/): Cross-platform LLM platform to install and run the latest local LLMs.

✅ [**Qdrant**](https://qdrant.tech/): Open-source, high performance vector store with a comprehensive API.

✅ [**PostgreSQL**](https://www.postgresql.org/): The workhorse of the Data Engineering world, handles large amounts of data safely.

## What you can build

⭐️ [AI Agents](../../../glossary/#ai-agent) that can schedule appointments

⭐️ Summaries of company PDFs without leaking data

⭐️ Smarter Slackbots for company communications and IT-ops

⭐️ Private, low-cost analyses of financial documents

Head to [the GitHub repository](https://github.com/n8n-io/self-hosted-ai-starter-kit) to clone the repo and get started!

n8n designed this kit to help you get started with self-hosted AI workflows. While it’s not fully optimized for production environments, it combines robust components that work well together for proof-of-concept projects. Customize it to meet your needs. Secure and harden it before using in production.

---

## TYPE n8n_scaling_mode_queue_jobs_failed counter

**URL:** llms-txt#type-n8n_scaling_mode_queue_jobs_failed-counter

n8n_scaling_mode_queue_jobs_failed 0

---

## OpenAI Audio operations

**URL:** llms-txt#openai-audio-operations

**Contents:**
- Generate Audio
  - Options
- Transcribe a Recording
  - Options
- Translate a Recording
  - Options
- Common issues

Use this operation to generate an audio, or transcribe or translate a recording in OpenAI. Refer to [OpenAI](../) for more information on the OpenAI node itself.

Use this operation to create audio from a text prompt.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [OpenAI credential](../../../credentials/openai/).
- **Resource**: Select **Audio**.
- **Operation**: Select **Generate Audio**.
- **Model**: Select the model you want to use to generate the audio. Refer to [TTS | OpenAI](https://platform.openai.com/docs/models/tts) for more information.
  - **TTS-1**: Use this to optimize for speed.
  - **TTS-1-HD**: Use this to optimize for quality.
- **Text Input**: Enter the text to generate the audio for. The maximum length is 4096 characters.
- **Voice**: Select a voice to use when generating the audio. Listen to the previews of the voices in [Text to speech guide | OpenAI](https://platform.openai.com/docs/guides/text-to-speech/quickstart).

- **Response Format**: Select the format for the audio response. Choose from **MP3** (default), **OPUS**, **AAC**, **FLAC**, **WAV**, and **PCM**.
- **Audio Speed**: Enter the speed for the generated audio from a value from `0.25` to `4.0`. Defaults to `1`.
- **Put Output in Field**: Defaults to `data`. Enter the name of the output field to put the binary file data in.

Refer to [Create speech | OpenAI](https://platform.openai.com/docs/api-reference/audio/createSpeech) documentation for more information.

## Transcribe a Recording

Use this operation to transcribe audio into text. OpenAI API limits the size of the audio file to 25 MB. OpenAI will use the `whisper-1` model by default.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [OpenAI credential](../../../credentials/openai/).
- **Resource**: Select **Audio**.
- **Operation**: Select **Transcribe a Recording**.
- **Input Data Field Name**: Defaults to `data`. Enter the name of the binary property that contains the audio file in one of these formats: `.flac`, `.mp3`, `.mp4`, `.mpeg`, `.mpga`, `.m4a`, `.ogg`, `.wav`, or `.webm`.

- **Language of the Audio File**: Enter the language of the input audio in [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes). Use this option to improve accuracy and latency.
- **Output Randomness (Temperature)**: Defaults to `1.0`. Adjust the randomness of the response. The range is between `0.0` (deterministic) and `1.0` (maximum randomness). We recommend altering this or **Output Randomness (Top P)** but not both. Start with a medium temperature (around 0.7) and adjust based on the outputs you observe. If the responses are too repetitive or rigid, increase the temperature. If they’re too chaotic or off-track, decrease it.

Refer to [Create transcription | OpenAI](https://platform.openai.com/docs/api-reference/audio/createTranscription) documentation for more information.

## Translate a Recording

Use this operation to translate audio into English. OpenAI API limits the size of the audio file to 25 MB. OpenAI will use the `whisper-1` model by default.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [OpenAI credential](../../../credentials/openai/).
- **Resource**: Select **Audio**.
- **Operation**: Select **Translate a Recording**.
- **Input Data Field Name**: Defaults to `data`. Enter the name of the binary property that contains the audio file in one of these formats: `.flac`, `.mp3`, `.mp4`, `.mpeg`, `.mpga`, `.m4a`, `.ogg`, `.wav`, or `.webm`.

- **Output Randomness (Temperature)**: Defaults to `1.0`. Adjust the randomness of the response. The range is between `0.0` (deterministic) and `1.0` (maximum randomness). We recommend altering this or **Output Randomness (Top P)** but not both. Start with a medium temperature (around 0.7) and adjust based on the outputs you observe. If the responses are too repetitive or rigid, increase the temperature. If they’re too chaotic or off-track, decrease it.

Refer to [Create transcription | OpenAI](https://platform.openai.com/docs/api-reference/audio/createTranscription) documentation for more information.

For common errors or issues and suggested resolution steps, refer to [Common Issues](../common-issues/).

---

## Let AI specify the tool parameters

**URL:** llms-txt#let-ai-specify-the-tool-parameters

**Contents:**
- Let the model fill in the parameter
- Use the `$fromAI()` function
  - Parameters
  - Examples
  - Templates

When configuring [tools](../../../glossary/#ai-tool) connected to the Tools Agent, many parameters can be filled in by the AI model itself. The AI model will use the context from the task and information from other connected tools to fill in the appropriate details.

There are two ways to do this, and you can switch between them.

## Let the model fill in the parameter

Each appropriate parameter field in the tool's editing dialog has an extra button at the end:

On activating this button, the [AI Agent](../../../glossary/#ai-agent) will fill in the expression for you, with no need for any further user input. The field itself is filled in with a message indicating that the parameter has been defined automatically by the model.

If you want to define the parameter yourself, click on the 'X' in this box to revert to user-defined values. Note that the 'expression' field will now contain the expression generated by this feature, though you can now edit it further to add extra details as described in the following section.

Activating this feature will overwrite any manual definition you may have already added.

## Use the `$fromAI()` function

The `$fromAI()` function uses AI to dynamically fill in parameters for tools connected to the [Tools AI agent](../../../integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/tools-agent/).

The `$fromAI()` function is only available for tools connected to the AI Agent node. The `$fromAI()` function doesn't work with the [Code](../../../integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolcode/) tool or with [other non-tool cluster sub-nodes](../../../integrations/builtin/cluster-nodes/sub-nodes/).

To use the `$fromAI()` function, call it with the required `key` parameter:

The `key` parameter and other arguments to the `$fromAI()` function aren't references to existing values. Instead, think of these arguments as hints that the AI model will use to populate the right data.

For instance, if you choose a key called `email`, the AI Model will look for an email address in its context, other tools, and input data. In chat workflows, it may ask the user for an email address if it can't find one elsewhere. You can optionally pass other parameters like `description` to give extra context to the AI model.

The `$fromAI()` function accepts the following parameters:

| Parameter      | Type   | Required? | Description                                                                                                                                                                                             |
| -------------- | ------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `key`          | string |           | A string representing the key or name of the argument. This must be between 1 and 64 characters in length and can only contain lowercase letters, uppercase letters, numbers, underscores, and hyphens. |
| `description`  | string |           | A string describing the argument.                                                                                                                                                                       |
| `type`         | string |           | A string specifying the data type. Can be string, number, boolean, or json (defaults to string).                                                                                                        |
| `defaultValue` | any    |           | The default value to use for the argument.                                                                                                                                                              |

As an example, you could use the following `$fromAI()` expression to dynamically populate a field with a name:

If you don't need the optional parameters, you could simplify this as:

To dynamically populate the number of items you have in stock, you could use a `$fromAI()` expression like this:

If you only want to fill in parts of a field with a dynamic value from the model, you can use it in a normal expression as well. For example, if you want the model to fill out the `subject` parameter for an e-mail, but always pre-fix the generated value with the string 'Generated by AI:', you could use the following expression:

You can see the `$fromAI()` function in action in the following [templates](../../../glossary/#template-n8n):

- [Angie, Personal AI Assistant with Telegram Voice and Text](https://n8n.io/workflows/2462-angie-personal-ai-assistant-with-telegram-voice-and-text/)
- [Automate Customer Support Issue Resolution using AI Text Classifier](https://n8n.io/workflows/2468-automate-customer-support-issue-resolution-using-ai-text-classifier/)
- [Scale Deal Flow with a Pitch Deck AI Vision, Chatbot and QDrant Vector Store](https://n8n.io/workflows/2464-scale-deal-flow-with-a-pitch-deck-ai-vision-chatbot-and-qdrant-vector-store/)

**Examples:**

Example 1 (unknown):
```unknown
{{ $fromAI('email') }}
```

Example 2 (unknown):
```unknown
$fromAI("name", "The commenter's name", "string", "Jane Doe")
```

Example 3 (unknown):
```unknown
$fromAI("name")
```

Example 4 (unknown):
```unknown
$fromAI("numItemsInStock", "Number of items in stock", "number", 5)
```

---

## Remove the container with the `<container_id>`

**URL:** llms-txt#remove-the-container-with-the-`<container_id>`

docker rm <container_id>

---

## TOTP

**URL:** llms-txt#totp

**Contents:**
- Node parameters
  - Credential to connect with
  - Operation
- Node options
  - Algorithm
  - Digits
  - Period
- Templates and examples

The TOTP node provides a way to generate a TOTP (time-based one-time password).

Refer to [TOTP credentials](../../credentials/totp/) for guidance on setting up authentication.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

Configure this node with these parameters.

### Credential to connect with

Select or create a [TOTP credential](../../credentials/totp/) for the node to use.

**Generate Secret** is the only operation currently supported.

Use these **Options** to further configure the node.

Select the HMAC hashing algorithm to use. Default is SHA1.

Enter the number of digits in the generated code. Default is `6`.

Enter how many seconds the TOTP is valid for. Default is `30`.

## Templates and examples

[Browse TOTP integration templates](https://n8n.io/integrations/totp/), or [search all templates](https://n8n.io/workflows/)

---

## Google Drive File and Folder operations

**URL:** llms-txt#google-drive-file-and-folder-operations

**Contents:**
- Search files and folders
  - Options

Use this operation to search for files and folders in Google Drive. Refer to [Google Drive](../) for more information on the Google Drive node itself.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../../advanced-ai/examples/using-the-fromai-function/).

## Search files and folders

Use this operation to search for files and folders in a drive.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [Google Drive credentials](../../../credentials/google/).
- **Resource**: Select **File/Folder**.
- **Operation**: Select **Search**.
- **Search Method**: Choose how you want to search:
  - **Search File/Folder Name**: Fill out the **Search Query** with the name of the file or folder you want to search for. Returns files and folders that are partial matches for the query as well.
  - **Advanced Search**: Fill out the **Query String** to search for files and folders using [Google query string syntax](https://developers.google.com/drive/api/guides/search-files).
- **Return All**: Choose whether to return all results or only up to a given limit.
- **Limit**: The maximum number of items to return when **Return All** is disabled.
- **Filter**: Choose whether to limit the scope of your search:
  - **Drive**: The drive you want to search in. By default, uses your personal "My Drive". Select **From list** to choose the drive from the dropdown list, **By URL** to enter the URL of the drive, or **By ID** to enter the `driveId`.
    - You can find the `driveId` by visiting the shared drive in your browser and copying the last URL component: `https://drive.google.com/drive/u/1/folders/driveId`.
  - **Folder**: The folder to search in. Select **From list** to choose the folder from the dropdown list, **By URL** to enter the URL of the folder, or **By ID** to enter the `folderId`.
    - You can find the `folderId` by visiting the shared folder in your browser and copying the last URL component: `https://drive.google.com/drive/u/1/folders/folderId`.
  - **What to Search**: Whether to search for **Files and Folders**, **Files**, or **Folders**.
  - **Include Trashed Items**: Whether to also return items in the Drive's trash.

- **Fields**: Select the fields to return. Can be one or more of the following: **[All]**, **explicitlyTrashed**, **exportLinks**, **hasThumbnail**, **iconLink**, **ID**, **Kind**, **mimeType**, **Name**, **Permissions**, **Shared**, **Spaces**, **Starred**, **thumbnailLink**, **Trashed**, **Version**, or **webViewLink**.

Refer to the [Method: files.list | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/files/list) API documentation for more information.

---

## OpenAI Video operations

**URL:** llms-txt#openai-video-operations

**Contents:**
- Generate Video
  - Options

Use this operation to generate a video in OpenAI. Refer to [OpenAI](../) for more information on the OpenAI node itself.

Use this operation to generate a video from a text prompt.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [OpenAI credential](../../../credentials/openai/).
- **Resource**: Select **Video**.
- **Operation**: Select **Generate Video**.
- **Model**: Select the model you want to use to generate a video. Currently supports `sora-2` and `sora-2-pro`.
- **Prompt**: The prompt to generate a video from.
- **Seconds**: Clip duration in seconds (up to 25).
- **Size**: Output resolution formatted as width x height. 1024x1792 and 1792x1024 are only supported by Sora 2 Pro.

- **Reference**: Optional image reference that guides generation. Has to be passed in as a binary item.
- **Wait Timeout**: Time to wait for the video to be generated in seconds. Defaults to 300.
- **Output Field Name**: The name of the output field to put the binary file data in. Defaults to `data`.

Refer to [Video Generation | OpenAI](https://platform.openai.com/docs/guides/video-generation) for more information.

---

## Google Drive File operations

**URL:** llms-txt#google-drive-file-operations

**Contents:**
- Copy a file
  - Options
- Create from text
  - Options
- Delete a file
  - Options
- Download a file
  - Options
- Move a file
- Share a file

Use this operation to create, delete, change, and manage files in Google Drive. Refer to [Google Drive](../) for more information on the Google Drive node itself.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../../advanced-ai/examples/using-the-fromai-function/).

Use this operation to copy a file to a drive.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [Google Drive credentials](../../../credentials/google/).
- **Resource**: Select **File**.
- **Operation**: Select **Copy**.
- **File**: Choose a file you want to copy.
  - Select **From list** to choose the title from the dropdown list, **By URL** to enter the URL of the file, or **By ID** to enter the `fileId`.
  - You can find the `fileId` in a shareable Google Drive file URL: `https://docs.google.com/document/d/fileId/edit#gid=0`. In your Google Drive, select **Share > Copy link** to get the shareable file URL.
- **File Name**: The name to use for the new copy of the file.
- **Copy In The Same Folder**: Choose whether to copy the file to the same folder. If disabled, set the following:
  - **Parent Drive**: Select **From list** to choose the drive from the dropdown list, **By URL** to enter the URL of the drive, or **By ID** to enter the `driveId`.
  - **Parent Folder**: Select **From list** to choose the folder from the dropdown list, **By URL** to enter the URL of the folder, or **By ID** to enter the `folderId`.
  - You can find the `driveId` and `folderID` by visiting the shared drive or folder in your browser and copying the last URL component: `https://drive.google.com/drive/u/1/folders/driveId`.

- **Copy Requires Writer Permissions**: Select whether to enable readers and commenters to copy, print, or download the new file.
- **Description**: A short description of the file.

Refer to the [Method: files.copy | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/files/copy) API documentation for more information.

Use this operation to create a new file in a drive from provided text.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [Google Drive credentials](../../../credentials/google/).
- **Resource**: Select **File**.
- **Operation**: Select **Create From Text**.
- **File Content**: Enter the file content to use to create the new file.
- **File Name**: The name to use for the new file.
- **Parent Drive**: Select **From list** to choose the drive from the dropdown list, **By URL** to enter the URL of the drive, or **By ID** to enter the `driveId`.
- **Parent Folder**: Select **From list** to choose the folder from the dropdown list, **By URL** to enter the URL of the folder, or **By ID** to enter the `folderId`.

You can find the `driveId` and `folderID` by visiting the shared drive or folder in your browser and copying the last URL component: `https://drive.google.com/drive/u/1/folders/driveId`.

- **APP Properties**: A bundle of arbitrary key-value pairs which are private to the requesting app.

- **Properties**: A bundle of arbitrary key-value pairs which are visible to all apps.

- **Keep Revision Forever**: Choose whether to set the `keepForever` field in the new head revision. This only applies to files with binary content. You can keep a maximum of 200 revisions, after which you must delete the pinned revisions.

- **OCR Language**: An [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) language code to help the OCR interpret the content during import.

- **Use Content As Indexable Text**: Choose whether to mark the uploaded content as indexable text.

- **Convert to Google Document**: Choose whether to create a Google Document instead of the default `.txt` format. You must enable the Google Docs API in the [Google API Console](https://console.cloud.google.com/apis/library/docs.googleapis.com) for this to work.

Refer to the [Method: files.insert | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/files/insert) API documentation for more information.

Use this operation to delete a file from a drive.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [Google Drive credentials](../../../credentials/google/).
- **Resource**: Select **File**.
- **Operation**: Select **Delete**.
- **File**: Choose a file you want to delete.
  - Select **From list** to choose the title from the dropdown list, **By URL** to enter the URL of the file, or **By ID** to enter the `fileId`.
  - You can find the `fileId` in a shareable Google Drive file URL: `https://docs.google.com/document/d/fileId/edit#gid=0`. In your Google Drive, select **Share > Copy link** to get the shareable file URL.

- **Delete Permanently**: Choose whether to delete the file now instead of moving it to the trash.

Refer to the [Method: files.delete | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/files/delete) API documentation for more information.

Use this operation to download a file from a drive.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [Google Drive credentials](../../../credentials/google/).
- **Resource**: Select **File**.
- **Operation**: Select **Download**.
- **File**: Choose a file you want to download.
  - Select **From list** to choose the title from the dropdown list, **By URL** to enter the URL of the file, or **By ID** to enter the `fileId`.
  - You can find the `fileId` in a shareable Google Drive file URL: `https://docs.google.com/document/d/fileId/edit#gid=0`. In your Google Drive, select **Share > Copy link** to get the shareable file URL.

- **Put Output File in Field**: Choose the field name to place the binary file contents to make it available to following nodes.
- **Google File Conversion**: Choose the formats to export as when downloading Google Files:
  - **Google Docs**: Choose the export format to use when downloading Google Docs files: **HTML**, **MS Word Document**, **Open Office Document**, **PDF**, **Rich Text (rtf)**, or **Text (txt)**.
  - **Google Drawings**: Choose the export format to use when downloading Google Drawing files: **JPEG**, **PDF**, **PNG**, or **SVG**.
  - **Google Slides**: Choose the export format to use when downloading Google Slides files: **MS PowerPoint**, **OpenOffice Presentation**, or **PDF**.
  - **Google Sheets**: Choose the export format to use when downloading Google Sheets files: **CSV**, **MS Excel**, **Open Office Sheet**, or **PDF**.
- **File Name**: The name to use for the downloaded file.

Refer to the [Method: files.get | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/files/get) API documentation for more information.

Use this operation to move a file to a different location in a drive.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [Google Drive credentials](../../../credentials/google/).
- **Resource**: Select **File**.
- **Operation**: Select **Move**.
- **File**: Choose a file you want to move.
  - Select **From list** to choose the title from the dropdown list, **By URL** to enter the URL of the file, or **By ID** to enter the `fileId`.
  - You can find the `fileId` in a shareable Google Drive file URL: `https://docs.google.com/document/d/fileId/edit#gid=0`. In your Google Drive, select **Share > Copy link** to get the shareable file URL.
- **Parent Drive**: Select **From list** to choose the drive from the dropdown list, **By URL** to enter the URL of the drive, or **By ID** to enter the `driveId`.
- **Parent Folder**: Select **From list** to choose the folder from the dropdown list, **By URL** to enter the URL of the folder, or **By ID** to enter the `folderId`.

You can find the `driveId` and `folderID` by visiting the shared drive or folder in your browser and copying the last URL component: `https://drive.google.com/drive/u/1/folders/driveId`.

Refer to the [Method: parents.insert | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/parents/insert) API documentation for more information.

Use this operation to add sharing permissions to a file.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [Google Drive credentials](../../../credentials/google/).
- **Resource**: Select **File**.
- **Operation**: Select **Share**.
- **File**: Choose a file you want to share.
  - Select **From list** to choose the title from the dropdown list, **By URL** to enter the URL of the file, or **By ID** to enter the `fileId`.
  - You can find the `fileId` in a shareable Google Drive file URL: `https://docs.google.com/document/d/fileId/edit#gid=0`. In your Google Drive, select **Share > Copy link** to get the shareable file URL.
- **Permissions**: The permissions to add to the file:
  - **Role**: Select what users can do with the file. Can be one of **Commenter**, **File Organizer**, **Organizer**, **Owner**, **Reader**, **Writer**.
  - **Type**: Select the scope of the new permission:
    - **User**: Grant permission to a specific user, defined by entering their **Email Address**.
    - **Group**: Grant permission to a specific group, defined by entering its **Email Address**.
    - **Domain**: Grant permission to a complete domain, defined by the **Domain**.
    - **Anyone**: Grant permission to anyone. Can optionally **Allow File Discovery** to make the file discoverable through search.

- **Email Message**: A plain text custom message to include in the notification email.

- **Move to New Owners Root**: Available when trying to transfer ownership while sharing an item not in a shared drive. When enabled, moves the file to the new owner's My Drive root folder.

- **Send Notification Email**: Whether to send a notification email when sharing to users or groups.

- **Transfer Ownership**: Whether to transfer ownership to the specified user and downgrade the current owner to writer permissions.

- **Use Domain Admin Access**: Whether to perform the action as a domain administrator.

Refer to the [REST Resources: files | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/files) API documentation for more information.

Use this operation to update a file.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [Google Drive credentials](../../../credentials/google/).
- **Resource**: Select **File**.
- **Operation**: Select **Update**.
- **File to Update**: Choose a file you want to update.
  - Select **From list** to choose the title from the dropdown list, **By URL** to enter the URL of the file, or **By ID** to enter the `fileId`.
  - You can find the `fileId` in a shareable Google Drive file URL: `https://docs.google.com/document/d/fileId/edit#gid=0`. In your Google Drive, select **Share > Copy link** to get the shareable file URL.
- **Change File Content**: Choose whether to send new binary data to replace the existing file content. If enabled, fill in the following:
  - **Input Data Field Name**: The name of the input field that contains the binary file data you wish to use.
- **New Updated File Name**: A new name for the file if you want to update the filename.

- **APP Properties**: A bundle of arbitrary key-value pairs which are private to the requesting app.

- **Properties**: A bundle of arbitrary key-value pairs which are visible to all apps.

- **Keep Revision Forever**: Choose whether to set the `keepForever` field in the new head revision. This only applies to files with binary content. You can keep a maximum of 200 revisions, after which you must delete the pinned revisions.

- **OCR Language**: An [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) language code to help the OCR interpret the content during import.

- **Use Content As Indexable Text**: Choose whether to mark the uploaded content as indexable text.

- **Move to Trash**: Whether to move the file to the trash. Only possible for the file owner.

- **Return Fields**: Return metadata fields about the file. Can be one or more of the following: **[All]**, **explicitlyTrashed**, **exportLinks**, **hasThumbnail**, **iconLink**, **ID**, **Kind**, **mimeType**, **Name**, **Permissions**, **Shared**, **Spaces**, **Starred**, **thumbnailLink**, **Trashed**, **Version**, or **webViewLink**.

Refer to the [Method: files.update | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/files/update) API documentation for more information.

Use this operation to upload a file.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [Google Drive credentials](../../../credentials/google/).
- **Resource**: Select **File**.
- **Operation**: Select **Upload**.
- **Input Data Field Name**: The name of the input field that contains the binary file data you wish to use.
- **File Name**: The name to use for the new file.
- **Parent Drive**: Select **From list** to choose the drive from the dropdown list, **By URL** to enter the URL of the drive, or **By ID** to enter the `driveId`.
- **Parent Folder**: Select **From list** to choose the folder from the dropdown list, **By URL** to enter the URL of the folder, or **By ID** to enter the `folderId`.

You can find the `driveId` and `folderID` by visiting the shared drive or folder in your browser and copying the last URL component: `https://drive.google.com/drive/u/1/folders/driveId`.

- **APP Properties**: A bundle of arbitrary key-value pairs which are private to the requesting app.

- **Properties**: A bundle of arbitrary key-value pairs which are visible to all apps.

- **Keep Revision Forever**: Choose whether to set the `keepForever` field in the new head revision. This only applies to files with binary content. You can keep a maximum of 200 revisions, after which you must delete the pinned revisions.

- **OCR Language**: An [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) language code to help the OCR interpret the content during import.

- **Use Content As Indexable Text**: Choose whether to mark the uploaded content as indexable text.

- **Simplify Output**: Choose whether to return a simplified version of the response instead of including all fields.

Refer to the [Method: files.insert | Google Drive](https://developers.google.com/drive/api/reference/rest/v2/files/insert) API documentation for more information.

---

## Use LangSmith with n8n

**URL:** llms-txt#use-langsmith-with-n8n

**Contents:**
- Connect your n8n instance to LangSmith

[LangSmith](https://www.langchain.com/langsmith) is a developer platform created by the LangChain team. You can connect your n8n instance to LangSmith to record and monitor runs in n8n, just as you can in a LangChain application.

Self-hosted n8n only.

## Connect your n8n instance to LangSmith

1. [Log in to LangSmith](https://smith.langchain.com/settings) and get your API key.

1. Set the LangSmith environment variables:

| Variable             | Value                               |
   | -------------------- | ----------------------------------- |
   | LANGCHAIN_ENDPOINT   | `"https://api.smith.langchain.com"` |
   | LANGCHAIN_TRACING_V2 | `true`                              |
   | LANGCHAIN_API_KEY    | Set this to your API key            |

Set the variables so that they're available globally in the environment where you host your n8n instance. You can do this in the same way as the rest of your general configuration.

For information on using LangSmith, refer to [LangSmith's documentation](https://docs.smith.langchain.com/).

---

## Advanced AI examples and concepts

**URL:** llms-txt#advanced-ai-examples-and-concepts

This section provides explanations of important AI concepts, and workflow templates that highlight those concepts, with explanations and configuration guides. The examples cover common use cases and highlight different features of advanced AI in n8n.

- **Agents and chains**

Learn about [agents](../../../glossary/#ai-agent) and [chains](../../../glossary/#ai-chain) in AI, including exploring key differences using the example workflow.

[What's a chain in AI?](../understand-chains/)\
  [What's an agent in AI?](../understand-agents/)\
  [Demonstration of key differences between agents and chains](../agent-chain-comparison/)

- **Call n8n Workflow Tool**

Learn about [tools](../../../glossary/#ai-tool) in AI, then explore examples that use n8n workflows as custom tools to give your AI workflow access to more data.

[What's a tool in AI?](../understand-tools/)\
  [Chat with Google Sheets](../data-google-sheets/)\
  [Call an API to fetch data](../api-workflow-tool/)\
  [Set up a human fallback](../human-fallback/)\
  [Let AI specify tool parameters with `$fromAI()`](../using-the-fromai-function/)

- **Vector databases**

Learn about [vector databases](../../../glossary/#ai-vector-store) in AI, along with related concepts including [embeddings](../../../glossary/#ai-embedding) and retrievers.

[What's a vector database?](../understand-vector-databases/)\
  [Populate a Pinecone vector database from a website](../vector-store-website/)

Learn about [memory](../../../glossary/#ai-memory) in AI.

[What's memory in AI?](../understand-memory/)

- **AI workflow templates**

You can browse AI templates, included community contributions, on the n8n website.

[Browse all AI templates](https://n8n.io/workflows/?categories=25)

---

## Send Email

**URL:** llms-txt#send-email

**Contents:**
- Node parameters
  - Credential to connect with
  - Operation
  - From Email
  - To Email
  - Subject
  - Email Format
- Node options
  - Append n8n Attribution
  - Attachments

The Send Email node sends emails using an SMTP email server.

You can find authentication information for this node [here](../../credentials/sendemail/).

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

Configure this node using the following parameters.

### Credential to connect with

Select or create an [SMTP account credential](../../credentials/sendemail/) for the node to use.

The Send Email node supports the following operations:

- **Send**: Send an email.
- **Send and Wait for Response**: Send an email and wait for a response from the receiver. This operation pauses the workflow execution until the user submits a response.

Choosing **Send and Wait for Response** will activate parameters and options as discussed in [waiting for a response](#waiting-for-a-response).

Enter the email address you want to send the email from. You can also include a name using this format: `Name Name <email@sample.com>`, for example: `Nathan Doe <nate@n8n.io>`.

Enter the email address you want to send the email to. You can also include a name using this format: `Name Name <email@sample.com>`, for example: `Nathan Doe <nate@n8n.io>`. Use a comma to separate multiple email addresses: `first@sample.com, "Name" <second@sample.com>`.

This email format also applies to the CC and BCC fields.

Enter the subject line for the email.

Select the format to send the email in. This parameter is available when using the **Send** operation. Choose from:

- **Text**: Send the email in plain-text format.
- **HTML**: Send the email in HTML format.
- **Both**: Send the email in both formats. If you choose this option, the email recipient's client will set which format to display.

Use these **Options** to further refine the node's behavior.

### Append n8n Attribution

Set whether to include the phrase `This email was sent automatically with n8n` at the end of the email (turned on) or not (turned off).

Enter the name of the binary properties that contain data to add as an attachment. Some tips on using this option:

- Use the [Read/Write Files from Disk](../n8n-nodes-base.readwritefile/) node or the [HTTP Request](../n8n-nodes-base.httprequest/) node to upload the file to your workflow.
- Add multiple attachments by entering a comma-separated list of binary properties.
- Reference embedded images or other content within the body of an email message, for example `<img src="cid:image_1">`.

Enter an email address for the `cc:` field.

Enter an email address for the `bcc:` field.

### Ignore SSL Issues

Set whether n8n should ignore failures with TLS/SSL certificate validation (turned on) or enforce them (turned off).

Enter an email address for the Reply To field.

## Waiting for a response

By choosing the **Send and Wait for a Response** operation, you can send an email message and pause the workflow execution until a person confirms the action or provides more information.

You can choose between the following types of waiting and approval actions:

- **Approval**: Users can approve or disapprove from within the message.
- **Free Text**: Users can submit a response with a form.
- **Custom Form**: Users can submit a response with a custom form.

Different options are available depending on which type you choose.

### Approval parameters and options

When using the Approval response type, the following options are available:

- **Type of Approval**: Whether to present only an approval button or both an approval and disapproval buttons.
- **Button Label**: The label for the approval or disapproval button. The default choice is `Approve` and `Decline` for approval and disapproval actions respectively.
- **Button Style**: The style (primary or secondary) for the button.

This mode also offers the following options:

- **Limit Wait Time**: Whether the workflow will automatically resume execution after a specified time limit. This can be an interval or a specific wall time.
- **Append n8n Attribution**: Set whether to include the phrase `This email was sent automatically with n8n` at the end of the email (turned on) or not (turned off).

### Free Text parameters and options

When using the Free Text response type, the following options are available:

- **Message Button Label**: The label to use for message button. The default choice is `Respond`.
- **Response Form Title**: The title of the form where users provide their response.
- **Response Form Description**: A description for the form where users provide their response.
- **Response Form Button Label**: The label for the button on the form to submit their response. The default choice is `Submit`.
- **Limit Wait Time**: Whether the workflow will automatically resume execution after a specified time limit. This can be an interval or a specific wall time.
- **Append n8n Attribution**: Set whether to include the phrase `This email was sent automatically with n8n` at the end of the email (turned on) or not (turned off).

### Custom Form parameters and options

When using the Custom Form response type, you build a form using the fields and options you want.

You can customize each form element with the settings outlined in the [n8n Form trigger's form elements](../n8n-nodes-base.formtrigger/#form-elements). To add more fields, select the **Add Form Element** button.

The following options are also available:

- **Message Button Label**: The label to use for message button. The default choice is `Respond`.
- **Response Form Title**: The title of the form where users provide their response.
- **Response Form Description**: A description for the form where users provide their response.
- **Response Form Button Label**: The label for the button on the form to submit their response. The default choice is `Submit`.
- **Limit Wait Time**: Whether the workflow will automatically resume execution after a specified time limit. This can be an interval or a specific wall time.
- **Append n8n Attribution**: Set whether to include the phrase `This email was sent automatically with n8n` at the end of the email (turned on) or not (turned off).

## Templates and examples

**Personalize marketing emails using customer data and AI**

[View template details](https://n8n.io/workflows/1978-personalize-marketing-emails-using-customer-data-and-ai/)

**Automated Stock Analysis Reports with Technical & News Sentiment using GPT-4o**

[View template details](https://n8n.io/workflows/3790-automated-stock-analysis-reports-with-technical-and-news-sentiment-using-gpt-4o/)

**AI marketing report (Google Analytics & Ads, Meta Ads), sent via email/Telegram**

by Friedemann Schuetz

[View template details](https://n8n.io/workflows/2783-ai-marketing-report-google-analytics-and-ads-meta-ads-sent-via-emailtelegram/)

[Browse Send Email integration templates](https://n8n.io/integrations/send-email/), or [search all templates](https://n8n.io/workflows/)

---

## What are vector databases?

**URL:** llms-txt#what-are-vector-databases?

**Contents:**
- A simplified example
- Demonstrating the power of similarity search
- Embeddings, retrievers, text splitters, and document loaders

Vector databases store information as numbers:

> A vector database is a type of database that stores data as high-dimensional vectors, which are mathematical representations of features or attributes. ([source](https://learn.microsoft.com/en-us/semantic-kernel/memories/vector-db))

This enables fast and accurate similarity searches. With a vector database, instead of using conventional database queries, you can search for relevant data based on semantic and contextual meaning.

## A simplified example

A vector database could store the sentence "n8n is a source-available automation tool that you can self-host", but instead of storing it as text, the vector database stores an array of dimensions (numbers between 0 and 1) that represent its features. This doesn't mean turning each letter in the sentence into a number. Instead, the vectors in the vector database describe the sentence.

Suppose that in a vector store `0.1` represents `automation tool`, `0.2` represents `source available`, and `0.3` represents `can be self-hosted`. You could end up with the following vectors:

| Sentence                                                         | Vector (array of dimensions) |
| ---------------------------------------------------------------- | ---------------------------- |
| n8n is a source-available automation tool that you can self-host | [0.1, 0.2, 0.3]              |
| Zapier is an automation tool                                     | [0.1]                        |
| Make is an automation tool                                       | [0.1]                        |
| Confluence is a wiki tool that you can self-host                 | [0.3]                        |

This example is very simplified

In practice, vectors are far more complex. A vector can range in size from tens to thousands of dimensions. The dimensions don't have a one-to-one relationship to a single feature, so you can't translate individual dimensions directly into single concepts. This example gives an approximate mental model, not a true technical understanding.

## Demonstrating the power of similarity search

Qdrant provides [vector search demos](https://qdrant.tech/demo/) to help users understand the power of vector databases. The [food discovery demo](https://food-discovery.qdrant.tech/) shows how a vector store can help match pictures based on visual similarities.

> This demo uses data from Delivery Service. Users may like or dislike the photo of a dish, and the app will recommend more similar meals based on how they look. It's also possible to choose to view results from the restaurants within the delivery radius. ([source](https://qdrant.tech/demo/))

For full technical details, refer to the [Qdrant demo-food-discovery GitHub repository](https://github.com/qdrant/demo-food-discovery).

## Embeddings, retrievers, text splitters, and document loaders

Vector databases require other tools to function:

- Document loaders and text splitters: document loaders pull in documents and data, and prepare them for [embedding](../../../glossary/#ai-embedding). Document loaders can use text splitters to break documents into chunks.
- Embeddings: these are the tools that turn the data (text, images, and so on) into vectors, and back into raw data. Note that n8n only supports text embeddings.
- Retrievers: retrievers fetch documents from vector databases. You need to pair them with an embedding to translate the vectors back into data.

---

## OpenAI Image operations

**URL:** llms-txt#openai-image-operations

**Contents:**
- Analyze Image
  - Options
- Generate an Image
  - Options
- Edit an Image
  - Options
- Common issues

Use this operation to analyze or generate an image in OpenAI. Refer to [OpenAI](../) for more information on the OpenAI node itself.

Use this operation to take in images and answer questions about them.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [OpenAI credential](../../../credentials/openai/).
- **Resource**: Select **Image**.
- **Operation**: Select **Analayze Image**.
- **Model**: Select the model you want to use to analyze an image.
- **Text Input**: Ask a question about the image.
- **Input Type**: Select how you'd like to input the image. Options include:
  - **Image URL(s)**: Enter the **URL(s)** of the image(s) to analyze. Add multiple URLs in a comma-separated list.
  - **Binary File(s)**: Enter the name of the binary property which contains the image(s) in the **Input Data Field Name**.

- **Detail**: Specify the balance between response time versus token usage.
- **Length of Description (Max Tokens)**: Defaults to 300. Fewer tokens will result in shorter, less detailed image description.

Refer to [Images | OpenAI](https://platform.openai.com/docs/api-reference/images) documentation for more information.

Use this operation to create an image from a text prompt.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [OpenAI credential](../../../credentials/openai/).
- **Resource**: Select **Image**.
- **Operation**: Select **Generate an Image**.
- **Model**: Select the model you want to use to generate an image.
- **Prompt**: Enter the text description of the desired image(s). The maximum length is 1000 characters for `dall-e-2` and 4000 characters for `dall-e-3`.

- **Quality**: The quality of the image you generate. **HD** creates images with finer details and greater consistency across the image. This option is only supported for `dall-e-3`. Otherwise, choose **Standard**.
- **Resolution**: Select the resolution of the generated images. Select **1024x1024** for `dall-e-2`. Select one of **1024x1024**, **1792x1024**, or **1024x1792** for `dall-e-3` models.
- **Style**: Select the style of the generated images. This option is only supported for `dall-e-3`.
  - **Natural**: Use this to produce more natural looking images.
  - **Vivid**: Use this to produce hyper-real and dramatic images.
- **Respond with image URL(s)**: Whether to return image URL(s) instead of binary file(s).
- **Put Output in Field**: Defaults to `data`. Enter the name of the output field to put the binary file data in. Only available if **Respond with image URL(s)** is turned off.

Refer to [Create image | OpenAI](https://platform.openai.com/docs/api-reference/images/create) documentation for more information.

Use this operation to edit an image from a text prompt.

Enter these parameters:

- **Credential to connect with**: Create or select an existing [OpenAI credential](../../../credentials/openai/).
- **Resource**: Select **Image**.
- **Operation**: Select **Edit Image**.
- **Model**: Select the model you want to use to generate an image. Supports `dall-e-2` and `gpt-image-1`.
- **Prompt**: Enter the text description of the desired edits to the input image(s).
- **Image(s)**: Add one or more binary fields to include images with your prompt. Each image should be a png, webp, or jpg file less than 50MB. You can provide up to 16 images.
- **Number of Images**: The number of images to generate. Must be between 1 and 10.
- **Size**: The size and dimensions of the generated images (in px).
- **Quality**: The quality of the image that will be generated (auto, low, medium, high, standard). Only supported for `gpt-image-1`.
- **Output Format**: The format in which the generated images are returned (png, webp, or jpg). Only supported for gpt-image-1.
- **Output Compression**: The compression level (0-100%) for the generated images. Only supported for `gpt-image-1` with webp or jpeg output formats.

- **Background**: Allows to set transparency for the background of the generated image(s). Only supported for `gpt-image-1`.
- **Input Fidelity**: Control how much effort the model will exert to match the style and features of input images. Only supported for `gpt-image-1`.
- **Image Mask**: Name of the binary property that contains the image. A second image whose fully transparent areas (for example, where alpha is zero) shows where the image should be edited. If there are multiple images provided, the mask will be applied on the first image. Must be a valid PNG file, less than 4MB, and have the same dimensions as image.
- **User**: A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse.

For common errors or issues and suggested resolution steps, refer to [Common Issues](../common-issues/).

---

## Reranker Cohere

**URL:** llms-txt#reranker-cohere

**Contents:**
- Node parameters
  - Model
- Templates and examples
- Related resources

The Reranker Cohere node allows you to [rerank](../../../../../glossary/#ai-reranking) the resulting chunks from a [vector store](../../../../../glossary/#ai-vector-store). You can connect this node to a vector store.

The reranker reorders the list of documents retrieved from a vector store for a given query in order of descending relevance.

On this page, you'll find the node parameters for the Reranker Cohere node, and links to more resources.

You can find authentication information for this node [here](../../../credentials/cohere/).

Parameter resolution in sub-nodes

Sub-nodes behave differently to other nodes when processing multiple items using an expression.

Most nodes, including root nodes, take any number of items as input, process these items, and output the results. You can use expressions to refer to input items, and the node resolves the expression for each item in turn. For example, given an input of five `name` values, the expression `{{ $json.name }}` resolves to each name in turn.

In sub-nodes, the expression always resolves to the first item. For example, given an input of five `name` values, the expression `{{ $json.name }}` always resolves to the first name.

Choose the reranking model to use. You can find out more about the available models in [Cohere's model documentation](https://docs.cohere.com/docs/models#rerank).

## Templates and examples

**Automate Sales Cold Calling Pipeline with Apify, GPT-4o, and WhatsApp**

[View template details](https://n8n.io/workflows/5449-automate-sales-cold-calling-pipeline-with-apify-gpt-4o-and-whatsapp/)

**Create a Multi-Modal Telegram Support Bot with GPT-4 and Supabase RAG**

by Ezema Kingsley Chibuzo

[View template details](https://n8n.io/workflows/5589-create-a-multi-modal-telegram-support-bot-with-gpt-4-and-supabase-rag/)

**Build an All-Source Knowledge Assistant with Claude, RAG, Perplexity, and Drive**

[View template details](https://n8n.io/workflows/6542-build-an-all-source-knowledge-assistant-with-claude-rag-perplexity-and-drive/)

[Browse Reranker Cohere integration templates](https://n8n.io/integrations/reranker-cohere/), or [search all templates](https://n8n.io/workflows/)

View n8n's [Advanced AI](../../../../../advanced-ai/) documentation.

---

## Advanced AI

**URL:** llms-txt#advanced-ai

**Contents:**
- Related resources
  - Node types
  - Workflow templates
  - Chat trigger
  - Chatbot widget

Build AI functionality using n8n: from creating your own chat bot, to using AI to process documents and data from other sources.

This feature is available on Cloud and self-hosted n8n, in version 1.19.4 and above.

Work through the short tutorial to learn the basics of building AI workflows in n8n.

[Tutorial](intro-tutorial/)

- **Use a Starter Kit**

Try n8n's Self-hosted AI Starter Kit to quickly start building AI workflows.

[Self-hosted AI Starter Kit](../hosting/starter-kits/ai-starter-kit/)

- **Explore examples and concepts**

Browse examples and workflow templates to help you build. Includes explanations of important AI concepts.

[Examples](examples/introduction/)

- **How n8n uses LangChain**

Learn more about how n8n builds on LangChain.

[LangChain in n8n](langchain/overview/)

- **Browse AI templates**

Explore a wide range of AI workflow templates on the n8n website.

[AI workflows on n8n.io](https://n8n.io/workflows/?categories=25)

Related documentation and tools.

This feature uses [Cluster nodes](../integrations/builtin/cluster-nodes/): groups of [root](../integrations/builtin/cluster-nodes/root-nodes/) and [sub](../integrations/builtin/cluster-nodes/sub-nodes/) nodes that work together.

[Cluster nodes](../glossary/#cluster-node-n8n) are node groups that work together to provide functionality in an n8n workflow. Instead of using a single node, you use a [root node](../glossary/#root-node-n8n) and one or more [sub-nodes](../glossary/#sub-node-n8n) that extend the functionality of the node.

### Workflow templates

You can browse [workflow templates](../glossary/#template-n8n) in-app or on the n8n website [Workflows](https://n8n.io/workflows/?categories=25,26) page.

Refer to [Templates](../workflows/templates/) for information on accessing templates in-app.

Use the [n8n Chat Trigger](../integrations/builtin/core-nodes/n8n-nodes-langchain.chattrigger/) to trigger a workflow based on chat interactions.

n8n provides a chatbot widget that you can use as a frontend for AI-powered chat workflows. Refer to the [@n8n/chat npm page](https://www.npmjs.com/package/@n8n/chat) for usage information.

---

## DOMAIN_NAME and SUBDOMAIN together determine where n8n will be reachable from

**URL:** llms-txt#domain_name-and-subdomain-together-determine-where-n8n-will-be-reachable-from

---

## TYPE n8n_scaling_mode_queue_jobs_waiting gauge

**URL:** llms-txt#type-n8n_scaling_mode_queue_jobs_waiting-gauge

n8n_scaling_mode_queue_jobs_waiting 0
```

---

## What's an agent in AI?

**URL:** llms-txt#what's-an-agent-in-ai?

**Contents:**
- Agents in n8n

One way to think of an [agent](../../../glossary/#ai-agent) is as a [chain](../understand-chains/) that knows how to make decisions. Where a chain follows a predetermined sequence of calls to different AI components, an agent uses a language model to determine which actions to take.

Agents are the part of AI that act as decision-makers. They can interact with other agents and [tools](../../../glossary/#ai-tool). When you send a query to an agent, it tries to choose the best tools to use to answer. Agents adapt to your specific queries, as well as the prompts that configure their behavior.

n8n provides one Agent node, which can act as different types of agent depending on the settings you choose. Refer to the [Agent node documentation](../../../integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/) for details on the available agent types.

When you execute a workflow containing an agent, the agent runs multiple times. For example, it may do an initial setup, followed by a run to call a tool, then another run to evaluate the tool response and respond to the user.

---
