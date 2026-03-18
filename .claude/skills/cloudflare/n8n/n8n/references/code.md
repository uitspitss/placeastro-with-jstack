# N8N - Code

**Pages:** 26

---

## AI coding with GPT

**URL:** llms-txt#ai-coding-with-gpt

**Contents:**
- Use AI in the Code node
- Usage limits
- Feature limits
- Writing good prompts
  - Example prompts
  - Reference incoming node data explicitly
  - Related resources
- Fixing the code

Not available on self-hosted.

Python isn't supported. ///

## Use AI in the Code node

AI assistance in the Code node is available to Cloud users. It isn't available in self-hosted n8n.

AI generated code overwrites your code

If you've already written some code on the **Code** tab, the AI generated code will replace it. n8n recommends using AI as a starting point to create your initial code, then editing it as needed.

To use ChatGPT to generate code in the Code node:

1. In the Code node, set **Language** to **JavaScript**.
1. Select the **Ask AI** tab.
1. Write your query.
1. Select **Generate Code**. n8n sends your query to ChatGPT, then displays the result in the **Code** tab.

During the trial phase there are no usage limits. If n8n makes the feature permanent, there may be usage limits as part of your pricing tier.

The ChatGPT implementation in n8n has the following limitations:

- The AI writes code that manipulates data from the n8n workflow. You can't ask it to pull in data from other sources.
- The AI doesn't know your data, just the schema, so you need to tell it things like how to find the data you want to extract, or how to check for null.
- Nodes before the Code node must execute and deliver data to the Code node before you run your AI query.
- Doesn't work with large incoming data schemas.
- May have issues if there are a lot of nodes before the code node.

## Writing good prompts

Writing good prompts increases the chance of getting useful code back.

- Provide examples: if possible, give a sample expected output. This helps the AI to better understand the transformation or logic you’re aiming for.
- Describe the processing steps: if there are specific processing steps or logic that should apply to the data, list them in sequence. For example: "First, filter out all users under 18. Then, sort the remaining users by their last name."
- Avoid ambiguities: while the AI understands various instructions, being clear and direct ensures you get the most accurate code. Instead of saying "Get the older users," you might say "Filter users who are 60 years and above."
- Be clear about what you expect as the output. Do you want the data transformed, filtered, aggregated, or sorted? Provide as much detail as possible.

And some n8n-specific guidance:

- Think about the input data: make sure ChatGPT knows which pieces of the data you want to access, and what the incoming data represents. You may need to tell ChatGPT about the availability of n8n's built-in methods and variables.
- Declare interactions between nodes: if your logic involves data from multiple nodes, specify how they should interact. "Merge the output of 'Node A' with 'Node B' based on the 'userID' property". if you prefer data to come from certain nodes or to ignore others, be clear: "Only consider data from the 'Purchases' node and ignore the 'Refunds' node."
- Ensure the output is compatible with n8n. Refer to [Data structure](../../data/data-structure/) for more information on the data structure n8n requires.

These examples show a range of possible prompts and tasks.

#### Example 1: Find a piece of data inside a second dataset

To try the example yourself, [download the example workflow](../../_workflows/ai-code/find-a-piece-of-data.json) and import it into n8n.

In the third Code node, enter this prompt:

> The slack data contains only one item. The input data represents all Notion users. Sometimes the person property that holds the email can be null. I want to find the notionId of the Slack user and return it.

Take a look at the code the AI generates.

This is the JavaScript you need:

#### Example 2: Data transformation

To try the example yourself, [download the example workflow](../../_workflows/ai-code/data-transformation.json) and import it into n8n.

In the **Join items** Code node, enter this prompt:

> Return a single line of text that has all usernames listed with a comma. Each username should be enquoted with a double quotation mark.

Take a look at the code the AI generates.

This is the JavaScript you need:

#### Example 3: Summarize data and create a Slack message

To try the example yourself, [download the example workflow](../../_workflows/ai-code/summarize-data.json) and import it into n8n.

In the **Summarize** Code node, enter this prompt:

> Create a markdown text for Slack that counts how many ideas, features and bugs have been submitted. The type of submission is saved in the property_type field. A feature has the property "Feature", a bug has the property "Bug" and an idea has the property "Bug". Also, list the five top submissions by vote in that message. Use "" as markdown for links.

Take a look at the code the AI generates.

This is the JavaScript you need:

### Reference incoming node data explicitly

If your incoming data contains nested fields, using dot notation to reference them can help the AI understand what data you want.

To try the example yourself, [download the example workflow](../../_workflows/ai-code/reference-incoming-data-explicitly.json) and import it into n8n.

In the second Code node, enter this prompt:

> The data in "Mock data" represents a list of people. For each person, return a new item containing personal_info.first_name and work_info.job_title.

This is the JavaScript you need:

### Related resources

Pluralsight offer a short guide on [How to use ChatGPT to write code](https://www.pluralsight.com/blog/software-development/how-use-chatgpt-programming-coding), which includes example prompts.

The AI-generated code may work without any changes, but you may have to edit it. You need to be aware of n8n's [Data structure](../../data/data-structure/). You may also find n8n's built-in methods and variables useful.

**Examples:**

Example 1 (unknown):
```unknown
const slackUser = $("Mock Slack").all()[0];
const notionUsers = $input.all();
const slackUserEmail = slackUser.json.email;

const notionUser = notionUsers.find(
  (user) => user.json.person && user.json.person.email === slackUserEmail
);

return notionUser ? [{ json: { notionId: notionUser.json.id } }] : [];
```

Example 2 (unknown):
```unknown
const items = $input.all();
const usernames = items.map((item) => `"${item.json.username}"`);
const result = usernames.join(", ");
return [{ json: { usernames: result } }];
```

Example 3 (unknown):
```unknown
const submissions = $input.all();

// Count the number of ideas, features, and bugs
let ideaCount = 0;
let featureCount = 0;
let bugCount = 0;

submissions.forEach((submission) => {
  switch (submission.json.property_type[0]) {
    case "Idea":
      ideaCount++;
      break;
    case "Feature":
      featureCount++;
      break;
    case "Bug":
      bugCount++;
      break;
  }
});

// Sort submissions by votes and take the top 5
const topSubmissions = submissions
  .sort((a, b) => b.json.property_votes - a.json.property_votes)
  .slice(0, 5);

let topSubmissionText = "";
topSubmissions.forEach((submission) => {
  topSubmissionText += `<${submission.json.url}|${submission.json.name}> with ${submission.json.property_votes} votes\n`;
});

// Construct the Slack message
const slackMessage = `*Summary of Submissions*\n
Ideas: ${ideaCount}\n
Features: ${featureCount}\n
Bugs: ${bugCount}\n
Top 5 Submissions:\n
${topSubmissionText}`;

return [{ json: { slackMessage } }];
```

Example 4 (unknown):
```unknown
const items = $input.all();
const newItems = items.map((item) => {
  const firstName = item.json.personal_info.first_name;
  const jobTitle = item.json.work_info.job_title;
  return {
    json: {
      firstName,
      jobTitle,
    },
  };
});
return newItems;
```

---

## Data

**URL:** llms-txt#data

**Contents:**
- Related resources
  - Data transformation nodes

Data is the information that n8n nodes receive and process. For basic usage of n8n you don't need to understand data structures and manipulation. However, it becomes important if you want to:

- Create your own node
- Write custom [expressions](../glossary/#expression-n8n)
- Use the Function or Function Item node

- [Data structure](data-structure/)
- [Data flow within nodes](data-flow-nodes/)
- [Transforming data](transforming-data/)
- [Process data using code](code/)
- [Pinning](data-pinning/) and [editing](data-editing/) data during workflow development.
- [Data mapping](data-mapping/) and [Item linking](data-mapping/data-item-linking/): how data items link to each other.

### Data transformation nodes

n8n provides a collection of nodes to transform data:

- [Aggregate](../integrations/builtin/core-nodes/n8n-nodes-base.aggregate/): take separate items, or portions of them, and group them together into individual items.
- [Limit](../integrations/builtin/core-nodes/n8n-nodes-base.aggregate/): remove items beyond a defined maximum number.
- [Remove Duplicates](../integrations/builtin/core-nodes/n8n-nodes-base.removeduplicates/): identify and delete items that are identical across all fields or a subset of fields.
- [Sort](../integrations/builtin/core-nodes/n8n-nodes-base.sort/): organize lists of in a desired ordering, or generate a random selection.
- [Split Out](../integrations/builtin/core-nodes/n8n-nodes-base.splitout/): separate a single data item containing a list into multiple items.
- [Summarize](../integrations/builtin/core-nodes/n8n-nodes-base.summarize/): aggregate items together, in a manner similar to Excel pivot tables.

---

## Expressions cookbook

**URL:** llms-txt#expressions-cookbook

**Contents:**
- Related resources

This section contains examples and recipes for tasks you can do with [expressions](../../../glossary/#expression-n8n).

You can use Python in the Code node. It isn't available in expressions.

- [Check incoming data](/code/cookbook/expressions/check-incoming-data/)
- [Common issues](/code/cookbook/expressions/common-issues/)

- [Built-in methods and variables reference](../../builtin/overview/)
- [Expressions](../../expressions/)

---

## Date and time with Luxon

**URL:** llms-txt#date-and-time-with-luxon

**Contents:**
- Date and time behavior in n8n
- Setting the timezone in n8n
- Common tasks
  - Get the current datetime or date

[Luxon](https://github.com/moment/luxon/) is a JavaScript library that makes it easier to work with date and time. For full details of how to use Luxon, refer to [Luxon's documentation](https://moment.github.io/luxon/#/?id=luxon).

n8n passes dates between nodes as strings, so you need to parse them. Luxon makes this easier.

Luxon is a JavaScript library. The two convenience [variables](#get-the-current-datetime-or-date) created by n8n are available when using Python in the Code node, but their functionality is limited:

- You can't perform Luxon operations on these variables. For example, there is no Python equivalent for `$today.minus(...)`.
- The generic Luxon functionality, such as [Convert date string to Luxon](#convert-date-string-to-luxon), isn't available for Python users.

## Date and time behavior in n8n

Be aware of the following:

- In a workflow, n8n converts dates and times to strings between nodes. Keep this in mind when doing arithmetic on dates and times from other nodes.
- With vanilla JavaScript, you can convert a string to a date with `new Date('2019-06-23')`. In Luxon, you must use a function explicitly stating the format, such as `DateTime.fromISO('2019-06-23')` or `DateTime.fromFormat("23-06-2019", "dd-MM-yyyy")`.

## Setting the timezone in n8n

Luxon uses the n8n timezone. This value is either:

- Default: `America/New York`
- A custom timezone for your n8n instance, set using the `GENERIC_TIMEZONE` environment variable.
- A custom timezone for an individual workflow, configured in workflow settings.

This section provides examples for some common operations. More examples, and detailed guidance, are available in [Luxon's own documentation](https://moment.github.io/luxon/#/?id=luxon).

### Get the current datetime or date

Use the [`$now` and `$today` Luxon objects](../../builtin/date-time/) to get the current time or day:

- `now`: a Luxon object containing the current timestamp. Equivalent to `DateTime.now()`.
- `today`: a Luxon object containing the current timestamp, rounded down to the day. Equivalent to `DateTime.now().set({ hour: 0, minute: 0, second: 0, millisecond: 0 })`.

Note that these variables can return different time formats when cast as a string:

**Examples:**

Example 1 (unknown):
```unknown
{{$now}}
// n8n displays the ISO formatted timestamp
// For example 2022-03-09T14:02:37.065+00:00
{{"Today's date is " + $now}}
// n8n displays "Today's date is <unix timestamp>"
// For example "Today's date is 1646834498755"
```

Example 2 (unknown):
```unknown
$now
// n8n displays <ISO formatted timestamp>
// For example 2022-03-09T14:00:25.058+00:00
let rightNow = "Today's date is " + $now
// n8n displays "Today's date is <unix timestamp>"
// For example "Today's date is 1646834498755"
```

---

## Convenience methods

**URL:** llms-txt#convenience-methods

n8n provides these methods to make it easier to perform common tasks in [expressions](../../../glossary/#expression-n8n).

You can use Python in the Code node. It isn't available in expressions.

| Method                                                        | Description                                                                                                                                                                                                                                                                                                                                                                                 | Available in Code node? |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| `$evaluateExpression(expression: string, itemIndex?: number)` | Evaluates a string as an expression. If you don't provide `itemIndex`, n8n uses the data from item 0 in the Code node.                                                                                                                                                                                                                                                                      |                         |
| `$ifEmpty(value, defaultValue)`                               | The `$ifEmpty()` function takes two parameters, tests the first to check if it's empty, then returns either the parameter (if not empty) or the second parameter (if the first is empty). The first parameter is empty if it's: - `undefined` - `null` - An empty string `''` - An array where `value.length` returns `false` - An object where `Object.keys(value).length` returns `false` |                         |
| `$if()`                                                       | The `$if()` function takes three parameters: a condition, the value to return if true, and the value to return if false.                                                                                                                                                                                                                                                                    |                         |
| `$max()`                                                      | Returns the highest of the provided numbers.                                                                                                                                                                                                                                                                                                                                                |                         |
| `$min()`                                                      | Returns the lowest of the provided numbers.                                                                                                                                                                                                                                                                                                                                                 |                         |

| Method                                                        | Description                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `_evaluateExpression(expression: string, itemIndex?: number)` | Evaluates a string as an expression. If you don't provide `itemIndex`, n8n uses the data from item 0 in the Code node.                                                                                                                                                                                                                                                                      |
| `_ifEmpty(value, defaultValue)`                               | The `_ifEmpty()` function takes two parameters, tests the first to check if it's empty, then returns either the parameter (if not empty) or the second parameter (if the first is empty). The first parameter is empty if it's: - `undefined` - `null` - An empty string `''` - An array where `value.length` returns `false` - An object where `Object.keys(value).length` returns `false` |

---

## Data transformation functions

**URL:** llms-txt#data-transformation-functions

**Contents:**
- Usage

Data transformation functions are helper functions to make data transformation easier in [expressions](../../../glossary/#expression-n8n).

JavaScript in expressions

You can use any JavaScript in expressions. Refer to [Expressions](../../expressions/) for more information.

For a list of available functions, refer to the page for your data type:

- [Arrays](arrays/)
- [Dates](dates/)
- [Numbers](numbers/)
- [Objects](objects/)
- [Strings](strings/)

Data transformation functions are available in the expressions editor.

For example, to check if a string is an email:

**Examples:**

Example 1 (unknown):
```unknown
{{ dataItem.function() }}
```

Example 2 (unknown):
```unknown
{{ "example@example.com".isEmail() }}

// Returns true
```

---

## Data structure

**URL:** llms-txt#data-structure

**Contents:**
- Data item processing

In n8n, all data passed between nodes is an array of objects. It has the following structure:

Skipping the `json` key and array syntax

From 0.166.0 on, when using the Function node or Code node, n8n automatically adds the `json` key if it's missing. It also automatically wraps your items in an array (`[]`) if needed. This is only the case when using the Function or Code nodes. When building your own nodes, you must still make sure the node returns data with the `json` key.

## Data item processing

Nodes can process multiple items.

For example, if you set the Trello node to `Create-Card`, and create an expression that sets `Name` using a property called `name-input-value` from the incoming data, the node creates a card for each item, always choosing the `name-input-value` of the current item.

For example, this input will create two cards. One named `test1` the other one named `test2`:

**Examples:**

Example 1 (unknown):
```unknown
[
	{
		// For most data:
		// Wrap each item in another object, with the key 'json'
		"json": {
			// Example data
			"apple": "beets",
			"carrot": {
				"dill": 1
			}
		},
		// For binary data:
		// Wrap each item in another object, with the key 'binary'
		"binary": {
			// Example data
			"apple-picture": {
				"data": "....", // Base64 encoded binary data (required)
				"mimeType": "image/png", // Best practice to set if possible (optional)
				"fileExtension": "png", // Best practice to set if possible (optional)
				"fileName": "example.png", // Best practice to set if possible (optional)
			}
		}
	},
]
```

Example 2 (unknown):
```unknown
[
	{
		name-input-value: "test1"
	},
	{
		name-input-value: "test2"
	}
]
```

---

## Booleans

**URL:** llms-txt#booleans

**Contents:**
  - toInt(): Number

A reference document listing built-in convenience functions to support data transformation in [expressions](../../../../glossary/#expression-n8n) for arrays.

JavaScript in expressions

You can use any JavaScript in expressions. Refer to [Expressions](../../../expressions/) for more information.

Convert a boolean to a number. `false` converts to `0`, `true` converts to `1`.

______________________________________________________________________

---

## Mapping in the expressions editor

**URL:** llms-txt#mapping-in-the-expressions-editor

**Contents:**
- Access the linked item in a previous node's output
  - Access the linked item in the current node's input

These examples show how to access linked items in the expressions editor. Refer to [expressions](../../../code/expressions/) for more information on expressions, including built in variables and methods.

For information on errors with mapping and linking items, refer to [Item linking errors](../data-item-linking/item-linking-errors/).

## Access the linked item in a previous node's output

When you use this, n8n works back up the item linking chain, to find the parent item in the given node.

As a longer example, consider a scenario where a node earlier in the workflow has the following output data:

To extract the name, use the following expression:

### Access the linked item in the current node's input

In this case, the item linking is within the node: find the input item that the node links to an output item.

As a longer example, consider a scenario where the current node has the following input data:

To extract the name, you'd normally use drag-and-drop [Data mapping](../), but you could also write the following expression:

**Examples:**

Example 1 (unknown):
```unknown
// Returns the linked item
{{$("<node-name>").item}}
```

Example 2 (unknown):
```unknown
[
  {
    "id": "23423532",
    "name": "Jay Gatsby",
  },
  {
    "id": "23423533",
    "name": "José Arcadio Buendía",
  },
  {
    "id": "23423534",
    "name": "Max Sendak",
  },
  {
    "id": "23423535",
    "name": "Zaphod Beeblebrox",
  },
  {
    "id": "23423536",
    "name": "Edmund Pevensie",
  }
]
```

Example 3 (unknown):
```unknown
{{$("<node-name>").item.json.name}}
```

Example 4 (unknown):
```unknown
// Returns the linked item
{{$input.item}}
```

---

## Data mapping

**URL:** llms-txt#data-mapping

Data mapping means referencing data from previous nodes.

This section contains guidance on:

- Mapping data in most scenarios: [Data mapping in the UI](data-mapping-ui/) and [Data mapping in expression](data-mapping-expressions/)
- How to handle [item linking](data-item-linking/) when using the Code node or building your own nodes.

---

## Runtime-only extras for the Python task runner (installed at image build)

**URL:** llms-txt#runtime-only-extras-for-the-python-task-runner-(installed-at-image-build)

---

## JMESPath method

**URL:** llms-txt#jmespath-method

This is an n8n-provided method for working with the [JMESPath](../../cookbook/jmespath/) library.

You can use Python in the Code node. It isn't available in expressions.

| Method        | Description                                       | Available in Code node? |
| ------------- | ------------------------------------------------- | ----------------------- |
| `$jmespath()` | Perform a search on a JSON object using JMESPath. |                         |

| Method        | Description                                       |
| ------------- | ------------------------------------------------- |
| `_jmespath()` | Perform a search on a JSON object using JMESPath. |

---

## Expressions common issues

**URL:** llms-txt#expressions-common-issues

**Contents:**
- The 'JSON Output' in item 0 contains invalid JSON
- Can't get data for expression
- Invalid syntax

Here are some common errors and issues related to [expressions](../../../expressions/) and steps to resolve or troubleshoot them.

## The 'JSON Output' in item 0 contains invalid JSON

This error occurs when you use JSON mode but don't provide a valid JSON object. Depending on the problem with the JSON object, the error sometimes display as `The 'JSON Output' in item 0 does not contain a valid JSON object`.

To resolve this, make sure that the code you provide is valid JSON:

- Check the JSON with a [JSON validator](https://jsonlint.com/).
- Check that your JSON object doesn't reference undefined input data. This may occur if the incoming data doesn't always include the same fields.

## Can't get data for expression

This error occurs when n8n can't retrieve the data referenced by an expression. Often, this happens when the preceding node hasn't been run yet.

Another variation of this may appear as `Referenced node is unexecuted`. In that case, the full text of this error will tell you the exact node that isn't executing in this format:

> An expression references the node '<node-name>', but it hasn’t been executed yet. Either change the expression, or re-wire your workflow to make sure that node executes first.

To begin troubleshooting, test the workflow up to the named node.

For nodes that use JavaScript or other custom code, you can check if a previous node has executed before trying to use its value by checking the following:

As an example, this JSON references the parameters of the input data. This error will display if you test this step without connecting it to another node:

This error occurs when you use an expression that has a syntax error.

For example, the expression in this JSON includes a trailing period, which results in an invalid syntax error:

To resolve this error, check your [expression syntax](../../../expressions/) to make sure they follow the expected format.

**Examples:**

Example 1 (unknown):
```unknown
$("<node-name>").isExecuted
```

Example 2 (unknown):
```unknown
{
  "my_field_1": {{ $input.params }}
}
```

Example 3 (unknown):
```unknown
{
  "my_field_1": "value",
  "my_field_2": {{ $('If').item.json. }}
}
```

---

## LangChain learning resources

**URL:** llms-txt#langchain-learning-resources

You don't need to know details about LangChain to use n8n, but it can be helpful to learn a few concepts. This pages lists some learning resources that people at n8n have found helpful.

The [LangChain documentation](https://docs.langchain.com/docs/) includes introductions to key concepts and possible use cases. Choose the [LangChain | Python](https://python.langchain.com/docs/get_started/introduction) or [LangChain | JavaScript](https://js.langchain.com/docs/get_started/introduction/) documentation for quickstarts, code examples, and API documentation. LangChain also provide [code templates](https://github.com/langchain-ai/langchain/tree/master/cookbook) (Python only), offering ideas for potential use cases and common patterns.

[What Product People Need To Know About LangChain](https://www.commandbar.com/blog/langchain-guide) provides a list of terminology and concepts, explained with helpful metaphors. Aimed at a wide audience.

If you prefer video, this [YouTube series by Greg Kamradt](https://youtu.be/_v_fgW2SkkQ?si=8Z2tfAoXnN3lXU9s) works through the LangChain documentation, providing code examples as it goes.

n8n offers space to discuss LangChain on the [Discord](https://discord.gg/bAt54txhHg). Join to share your projects and discuss ideas with the community.

---

## Arrays

**URL:** llms-txt#arrays

**Contents:**
  - average(): Number
  - chunk(size: Number): Array
  - compact(): Array
  - difference(arr: Array): Array
  - intersection(arr: Array): Array
  - first(): Array item
  - isEmpty(): Boolean
  - isNotEmpty(): Boolean
  - last(): Array item
  - max(): Number

A reference document listing built-in convenience functions to support data transformation in [expressions](../../../../glossary/#expression-n8n) for arrays.

JavaScript in expressions

You can use any JavaScript in expressions. Refer to [Expressions](../../../expressions/) for more information.

### average(): Number

Returns the value of elements in an array

______________________________________________________________________

### chunk(size: Number): Array

Splits arrays into chunks with a length of size

#### Function parameters

The size of each chunk.

______________________________________________________________________

Removes empty values from the array.

______________________________________________________________________

### difference(arr: Array): Array

Compares two arrays. Returns all elements in the base array that aren't present in arr.

#### Function parameters

The array to compare to the base array.

______________________________________________________________________

### intersection(arr: Array): Array

Compares two arrays. Returns all elements in the base array that are present in arr.

#### Function parameters

The array to compare to the base array.

______________________________________________________________________

### first(): Array item

Returns the first element of the array.

______________________________________________________________________

### isEmpty(): Boolean

Checks if the array doesn't have any elements.

______________________________________________________________________

### isNotEmpty(): Boolean

Checks if the array has elements.

______________________________________________________________________

### last(): Array item

Returns the last element of the array.

______________________________________________________________________

Returns the highest value in an array.

______________________________________________________________________

### merge(arr: Array): Array

Merges two Object-arrays into one array by merging the key-value pairs of each element.

#### Function parameters

The array to merge into the base array.

______________________________________________________________________

Gets the minimum value from a number-only array.

______________________________________________________________________

### pluck(fieldName?: String): Array

Returns an array of Objects where keys equal the given field names.

#### Function parameters

fieldNameOptionalString

The key(s) you want to retrieve. You can enter as many keys as you want, as comma-separated strings.

______________________________________________________________________

### randomItem(): Array item

Returns a random element from an array.

______________________________________________________________________

### removeDuplicates(key?: String): Array

Removes duplicates from an array.

#### Function parameters

A key, or comma-separated list of keys, to check for duplicates.

______________________________________________________________________

### renameKeys(from: String, to: String): Array

Renames all matching keys in the array. You can rename more than one key by entering a series of comma separated strings, in the pattern oldKeyName, newKeyName.

#### Function parameters

The key you want to rename.

______________________________________________________________________

### smartJoin(keyField: String, nameField: String): Array

Operates on an array of objects where each object contains key-value pairs. Creates a new object containing key-value pairs, where the key is the value of the first pair, and the value is the value of the second pair. Removes non-matching and empty values and trims any whitespace before joining.

#### Function parameters

keyFieldRequiredString

nameFieldRequiredString

______________________________________________________________________

Returns the total sum all the values in an array of parsable numbers.

______________________________________________________________________

### toJsonString(): String

Convert an array to a JSON string. Equivalent of `JSON.stringify`.

______________________________________________________________________

### union(arr: Array): Array

Concatenates two arrays and then removes duplicate.

#### Function parameters

The array to compare to the base array.

______________________________________________________________________

### unique(key?: String): Array

Remove duplicates from an array.

#### Function parameters

A key, or comma-separated list of keys, to check for duplicates.

______________________________________________________________________

**Examples:**

Example 1 (unknown):
```unknown
// Input
{{ [{"type":"fruit", "name":"apple"},{"type":"vegetable", "name":"carrot"} ].smartJoin("type","name") }}
// Output
[Object: {"fruit":"apple","vegetable":"carrot"}]
```

---

## Objects

**URL:** llms-txt#objects

**Contents:**
  - isEmpty(): Boolean
  - merge(object: Object): Object
  - hasField(fieldName: String): Boolean
  - removeField(key: String): Object
  - removeFieldsContaining(value: String): Object
  - keepFieldsContaining(value: String): Object
  - compact(): Object
  - toJsonString(): String
  - urlEncode(): String

A reference document listing built-in convenience functions to support data transformation in expressions for objects.

JavaScript in expressions

You can use any JavaScript in expressions. Refer to [Expressions](../../../expressions/) for more information.

### isEmpty(): Boolean

Checks if the Object has no key-value pairs.

______________________________________________________________________

### merge(object: Object): Object

Merges two Objects into a single Object using the first as the base Object. If a key exists in both Objects, the key in the base Object takes precedence.

#### Function parameters

The Object to merge with the base Object.

______________________________________________________________________

### hasField(fieldName: String): Boolean

Checks if the Object has a given field. Only top-level keys are supported.

#### Function parameters

fieldNameRequiredString

The field to search for.

______________________________________________________________________

### removeField(key: String): Object

Removes a given field from the Object

#### Function parameters

The field key of the field to remove.

______________________________________________________________________

### removeFieldsContaining(value: String): Object

Removes fields with a given value from the Object.

#### Function parameters

The field value of the field to remove.

______________________________________________________________________

### keepFieldsContaining(value: String): Object

Removes fields that do not match the given value from the Object.

#### Function parameters

The field value of the field to keep.

______________________________________________________________________

### compact(): Object

Removes empty values from an Object.

______________________________________________________________________

### toJsonString(): String

Convert an object to a JSON string. Equivalent of `JSON.stringify`.

______________________________________________________________________

### urlEncode(): String

Transforms an Object into a URL parameter list. Only top-level keys are supported.

______________________________________________________________________

---

## Dates

**URL:** llms-txt#dates

**Contents:**
  - beginningOf(unit?: DurationUnit): Date
  - endOfMonth(): Date
  - extract(datePart?: DurationUnit): Number
  - format(fmt: TimeFormat): String
  - isBetween(date1: Date | DateTime, date2: Date | DateTime): Boolean
  - isDst(): Boolean
  - isInLast(n?: Number, unit?: DurationUnit): Boolean
  - isWeekend(): Boolean
  - minus(n: Number, unit?: DurationUnit): Date
  - plus(n: Number, unit?: DurationUnit): Date

A reference document listing built-in convenience functions to support data transformation in [expressions](../../../../glossary/#expression-n8n) for dates.

JavaScript in expressions

You can use any JavaScript in expressions. Refer to [Expressions](../../../expressions/) for more information.

### beginningOf(unit?: DurationUnit): Date

Transforms a Date to the start of the given time period. Returns either a JavaScript Date or Luxon Date, depending on input.

#### Function parameters

unitOptionalString enum

A valid string specifying the time unit.

One of: `second`, `minute`, `hour`, `day`, `week`, `month`, `year`

______________________________________________________________________

### endOfMonth(): Date

Transforms a Date to the end of the month.

______________________________________________________________________

### extract(datePart?: DurationUnit): Number

Extracts the part defined in datePart from a Date. Returns either a JavaScript Date or Luxon Date, depending on input.

#### Function parameters

datePartOptionalString enum

A valid string specifying the time unit.

One of: `second`, `minute`, `hour`, `day`, `week`, `month`, `year`

______________________________________________________________________

### format(fmt: TimeFormat): String

Formats a Date in the given structure

#### Function parameters

fmtRequiredString enum

A valid string specifying the time format. Refer to [Luxon | Table of tokens](https://moment.github.io/luxon/#/formatting?id=table-of-tokens) for formats.

______________________________________________________________________

### isBetween(date1: Date | DateTime, date2: Date | DateTime): Boolean

Checks if a Date is between two given dates.

#### Function parameters

date1RequiredDate or DateTime

The first date in the range.

date2RequiredDate or DateTime

The last date in the range.

______________________________________________________________________

Checks if a Date is within Daylight Savings Time.

______________________________________________________________________

### isInLast(n?: Number, unit?: DurationUnit): Boolean

Checks if a Date is within a given time period.

#### Function parameters

The number of units. For example, to check if the date is in the last nine weeks, enter 9.

unitOptionalString enum

A valid string specifying the time unit.

One of: `second`, `minute`, `hour`, `day`, `week`, `month`, `year`

______________________________________________________________________

### isWeekend(): Boolean

Checks if the Date falls on a Saturday or Sunday.

______________________________________________________________________

### minus(n: Number, unit?: DurationUnit): Date

Subtracts a given time period from a Date. Returns either a JavaScript Date or Luxon Date, depending on input.

#### Function parameters

The number of units. For example, to subtract nine seconds, enter 9 here.

unitOptionalString enum

A valid string specifying the time unit.

Default: `milliseconds`

One of: `second`, `minute`, `hour`, `day`, `week`, `month`, `year`

______________________________________________________________________

### plus(n: Number, unit?: DurationUnit): Date

Adds a given time period to a Date. Returns either a JavaScript Date or Luxon Date, depending on input.

#### Function parameters

The number of units. For example, to add nine seconds, enter 9 here.

unitOptionalString enum

A valid string specifying the time unit.

Default: `milliseconds`

One of: `second`, `minute`, `hour`, `day`, `week`, `month`, `year`

______________________________________________________________________

### toDateTime(): Date

Converts a JavaScript date to a [Luxon date object](https://docs.n8n.io/code/cookbook/luxon/).

______________________________________________________________________

---

## Numbers

**URL:** llms-txt#numbers

**Contents:**
  - ceil(): Number
  - floor(): Number
  - format(locales?: LanguageCode, options?: FormatOptions): String
  - isEven(): Boolean
  - isOdd(): Boolean
  - round(decimalPlaces?: Number): Number
  - toBoolean(): Boolean
  - toDateTime(format?: String): Date

A reference document listing built-in convenience functions to support data transformation in [expressions](../../../../glossary/#expression-n8n) for numbers.

JavaScript in expressions

You can use any JavaScript in expressions. Refer to [Expressions](../../../expressions/) for more information.

Rounds up a number to a whole number.

______________________________________________________________________

Rounds down a number to a whole number.

______________________________________________________________________

### format(locales?: LanguageCode, options?: FormatOptions): String

This is a wrapper around [Intl.NumberFormat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat). Returns a formatted string of a number based on the given LanguageCode and FormatOptions. When no arguments are given, transforms the number in a like format 1.234.

#### Function parameters

localesOptionalString

An IETF BCP 47 language tag.

optionsOptionalObject

Configure options for number formatting. Refer to [MDN | Intl.NumberFormat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) for more information.

______________________________________________________________________

### isEven(): Boolean

Returns true if the number is even. Only works on whole numbers.

______________________________________________________________________

Returns true if the number is odd. Only works on whole numbers.

______________________________________________________________________

### round(decimalPlaces?: Number): Number

Returns the value of a number rounded to the nearest whole number, unless a decimal place is specified.

#### Function parameters

decimalPlacesOptionalNumber

How many decimal places to round to.

______________________________________________________________________

### toBoolean(): Boolean

Converts a number to a boolean. `0` converts to `false`. All other values convert to `true`.

______________________________________________________________________

### toDateTime(format?: String): Date

Converts a number to a [Luxon date object](https://docs.n8n.io/code/cookbook/luxon/).

#### Function parameters

formatOptionalString enum

Can be `ms` (milliseconds), `s` (seconds), or `excel` (Excel 1900). Defaults to milliseconds.

______________________________________________________________________

---

## pandas==2.2.2

**URL:** llms-txt#pandas==2.2.2

**Contents:**
  - 3) Allowlist packages for the Code node
  - 4) Build your custom image
  - 5) Run it

{
  "task-runners": [
    {
      "runner-type": "javascript",
      "env-overrides": {
        "NODE_FUNCTION_ALLOW_BUILTIN": "crypto",
        "NODE_FUNCTION_ALLOW_EXTERNAL": "moment,uuid",   // <-- add JS packages here
      }
    },
    {
      "runner-type": "python",
      "env-overrides": {
        "PYTHONPATH": "/opt/runners/task-runner-python",
        "N8N_RUNNERS_STDLIB_ALLOW": "json",
        "N8N_RUNNERS_EXTERNAL_ALLOW": "numpy,pandas"     // <-- add Python packages here
      }
    }
  ]
}

docker buildx build \
  -f docker/images/runners/Dockerfile \
  -t n8nio/runners:custom \
  .

docker run --rm -it \
  -e N8N_RUNNERS_AUTH_TOKEN=test \
  -e N8N_RUNNERS_LAUNCHER_LOG_LEVEL=debug \
  -e N8N_RUNNERS_TASK_BROKER_URI=http://host.docker.internal:5679 \
  -p 5680:5680 \
  n8nio/runners:custom
```

**Examples:**

Example 1 (unknown):
```unknown
Pin versions (for example, `==2.3.2`) for deterministic builds.

### 3) Allowlist packages for the Code node

Open `docker/images/runners/n8n-task-runners.json` and add your packages to the env overrides:
```

Example 2 (unknown):
```unknown
- `NODE_FUNCTION_ALLOW_BUILTIN`: comma-separated list of allowed node builtin modules.
- `NODE_FUNCTION_ALLOW_EXTERNAL`: comma-separated list of allowed JS packages.
- `N8N_RUNNERS_STDLIB_ALLOW`: comma-separated list of allowed Python standard library packages.
- `N8N_RUNNERS_EXTERNAL_ALLOW`: comma-separated list of allowed Python packages.

### 4) Build your custom image

For example, from the n8n repository root:
```

Example 3 (unknown):
```unknown
### 5) Run it

For example:
```

---

## Built-in date and time methods

**URL:** llms-txt#built-in-date-and-time-methods

Methods for working with date and time.

You can use Python in the Code node. It isn't available in expressions.

| Method   | Description                                                                                                                                                      | Available in Code node? |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| `$now`   | A Luxon object containing the current timestamp. Equivalent to `DateTime.now()`.                                                                                 |                         |
| `$today` | A Luxon object containing the current timestamp, rounded down to the day. Equivalent to `DateTime.now().set({ hour: 0, minute: 0, second: 0, millisecond: 0 })`. |                         |

| Method   | Description                                                                                                                                                      |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `_now`   | A Luxon object containing the current timestamp. Equivalent to `DateTime.now()`.                                                                                 |
| `_today` | A Luxon object containing the current timestamp, rounded down to the day. Equivalent to `DateTime.now().set({ hour: 0, minute: 0, second: 0, millisecond: 0 })`. |

Don't mix native JavaScript and Luxon dates

While you can use both native JavaScript dates and Luxon dates in n8n, they aren't directly interoperable. It's best to [convert JavaScript dates to Luxon](../../cookbook/luxon/#convert-javascript-dates-to-luxon) to avoid problems.

n8n provides built-in convenience functions to support data transformation in expressions for dates. Refer to [Data transformation functions | Dates](../data-transformation-functions/dates/) for more information.

---

## Check incoming data

**URL:** llms-txt#check-incoming-data

At times, you may want to check the incoming data. If the incoming data doesn't match a condition, you may want to return a different value. For example, you want to check if a variable from the previous node is empty and return a string if it's empty. Use the following code snippet to return `not found` if the variable is empty.

The above expression uses the ternary operator. You can learn more about the ternary operator [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator).

As an alternative, you can use the [nullish coalescing operator (??)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) or the [logical or operator (||)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR):

In either of the above two cases, the value of `$x` will be used if it's set to a non-null, non-false value. The string `default value` is the fallback value.

**Examples:**

Example 1 (unknown):
```unknown
{{$json["variable_name"]? $json["variable_name"] :"not found"}}
```

Example 2 (unknown):
```unknown
{{ $x ?? "default value" }}
{{ $x || "default value" }}
```

---

## Built-in methods and variables

**URL:** llms-txt#built-in-methods-and-variables

n8n provides built-in methods and variables for working with data and accessing n8n data. This section provides a reference of available methods and variables for use in [expressions](../../../glossary/#expression-n8n), with a short description.

Availability in the expressions editor and the Code node

Some methods and variables aren't available in the Code node. These aren't in the documentation.

All data transformation functions are only available in the expressions editor.

The [Cookbook](../../) contains examples for some common tasks, including some [Code node only](../../cookbook/code-node/) functions.

- [Current node input](/code/builtin/current-node-input/)
- [Output of other nodes](/code/builtin/output-other-nodes/)
- [Date and time](/code/builtin/date-time/)
- [JMESPath](/code/builtin/jmespath/)
- [HTTP node](/code/builtin/http-node-variables/)
- [LangChain Code node](/code/builtin/langchain-methods/)
- [n8n metadata](/code/builtin/n8n-metadata/)
- [Convenience methods](/code/builtin/convenience/)
- [Data transformation functions](/code/builtin/data-transformation-functions/)

---

## Code standards

**URL:** llms-txt#code-standards

**Contents:**
- Use the linter
- Use the starter
- Write in TypeScript
- Detailed guidelines for writing a node
  - Resources and operations
  - Reuse internal parameter names
- Detailed guidelines for writing a programmatic-style node
  - Don't change incoming data
  - Use the built in request library

Following defined code standards when building your node makes your code more readable and maintainable, and helps avoid errors. This document provides guidance on good code practices for node building. It focuses on code details. For UI standards and UX guidance, refer to [Node UI design](../../../plan/node-ui-design/).

The n8n node linter provides automatic checking for many of the node-building standards. You should ensure your node passes the linter's checks before publishing it. Refer to the [n8n node linter](../../../test/node-linter/) documentation for more information.

The n8n node starter project includes a recommended setup, dependencies (including the linter), and examples to help you get started. Begin new projects with the [starter](https://github.com/n8n-io/n8n-nodes-starter).

## Write in TypeScript

All n8n code is TypeScript. Writing your nodes in TypeScript can speed up development and reduce bugs.

## Detailed guidelines for writing a node

These guidelines apply to any node you build.

### Resources and operations

If your node can perform several operations, call the parameter that sets the operation `Operation`. If your node can do these operations on more than one resource, create a `Resource` parameter. The following code sample shows a basic resource and operations setup:

### Reuse internal parameter names

All resource and operation fields in an n8n node have two settings: a display name, set using the `name` parameter, and an internal name, set using the `value` parameter. Reusing the internal name for fields allows n8n to preserve user-entered data if a user switches operations.

For example: you're building a node with a resource named 'Order'. This resource has several operations, including Get, Edit, and Delete. Each of these operations uses an order ID to perform the operation on the specified order. You need to display an ID field for the user. This field has a display label, and an internal name. By using the same internal name (set in `value`) for the operation ID field on each resource, a user can enter the ID with the Get operation selected, and not lose it if they switch to Edit.

When reusing the internal name, you must ensure that only one field is visible to the user at a time. You can control this using `displayOptions`.

## Detailed guidelines for writing a programmatic-style node

These guidelines apply when building nodes using the programmatic node-building style. They aren't relevant when using the declarative style. For more information on different node-building styles, refer to [Choose your node building approach](../../../plan/choose-node-method/).

### Don't change incoming data

Never change the incoming data a node receives (data accessible with `this.getInputData()`) as all nodes share it. If you need to add, change, or delete data, clone the incoming data and return the new data. If you don't do this, sibling nodes that execute after the current one will operate on the altered data and process incorrect data.

It's not necessary to always clone all the data. For example, if a node changes the binary data but not the JSON data, you can create a new item that reuses the reference to the JSON item.

### Use the built in request library

Some third-party services have their own libraries on npm, which make it easier to create an integration. The problem with these packages is that you add another dependency (plus all the dependencies of the dependencies). This adds more and more code, which has to be loaded, can introduce security vulnerabilities, bugs, and so on. Instead, use the built-in module:

This uses the npm package [Axios](https://www.npmjs.com/package/axios).

Refer to [HTTP helpers](../http-helpers/) for more information, and for migration instructions for the removed `this.helpers.request`.

**Examples:**

Example 1 (unknown):
```unknown
export const ExampleNode implements INodeType {
    description: {
        displayName: 'Example Node',
        ...
        properties: [
            {
                displayName: 'Resource',
                name: 'resource',
                type: 'options',
                options: [
                    {
                        name: 'Resource One',
                        value: 'resourceOne'
                    },
                    {
                        name: 'Resource Two',
                        value: 'resourceTwo'
                    }
                ],
                default: 'resourceOne'
            },
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                // Only show these operations for Resource One
                displayOptions: {
                    show: {
                        resource: [
                            'resourceOne'
                        ]
                    }
                },
                options: [
                    {
                        name: 'Create',
                        value: 'create',
                        description: 'Create an instance of Resource One'
                    }
                ]
            }
        ]
    }
}
```

Example 2 (unknown):
```unknown
// If no auth needed
const response = await this.helpers.httpRequest(options);

// If auth needed
const response = await this.helpers.httpRequestWithAuthentication.call(
	this, 
	'credentialTypeName', // For example: pipedriveApi
	options,
);
```

---

## Strings

**URL:** llms-txt#strings

**Contents:**
  - base64Encode(): A base64 encoded string.
  - base64Decode(): A plain string.
  - extractDomain(): String
  - extractEmail(): String
  - extractUrl(): String
  - extractUrlPath(): String
  - hash(algo?: Algorithm): String
  - isDomain(): Boolean
  - isEmail(): Boolean
  - isEmpty(): Boolean

A reference document listing built-in convenience functions to support data transformation in [expressions](../../../../glossary/#expression-n8n) for strings.

JavaScript in expressions

You can use any JavaScript in expressions. Refer to [Expressions](../../../expressions/) for more information.

### base64Encode(): A base64 encoded string.

Encode a string as base64.

______________________________________________________________________

### base64Decode(): A plain string.

Convert a base64 encoded string to a normal string.

______________________________________________________________________

### extractDomain(): String

Extracts a domain from a string containing a valid URL. Returns undefined if none is found.

______________________________________________________________________

### extractEmail(): String

Extracts an email from a string. Returns undefined if none is found.

______________________________________________________________________

### extractUrl(): String

Extracts a URL from a string. Returns undefined if none is found.

______________________________________________________________________

### extractUrlPath(): String

Extract the path but not the root domain from a URL. For example, `"https://example.com/orders/1/details".extractUrlPath()` returns `"/orders/1/details/"`.

______________________________________________________________________

### hash(algo?: Algorithm): String

Returns a string hashed with the given algorithm.

#### Function parameters

algoOptionalString enum

Which hashing algorithm to use.

One of: `md5`, `base64`, `sha1`, `sha224`, `sha256`, `sha384`, `sha512`, `sha3`, `ripemd160`

______________________________________________________________________

### isDomain(): Boolean

Checks if a string is a domain.

______________________________________________________________________

### isEmail(): Boolean

Checks if a string is an email.

______________________________________________________________________

### isEmpty(): Boolean

Checks if a string is empty.

______________________________________________________________________

### isNotEmpty(): Boolean

Checks if a string has content.

______________________________________________________________________

### isNumeric(): Boolean

Checks if a string only contains digits.

______________________________________________________________________

Checks if a string is a valid URL.

______________________________________________________________________

### parseJson(): Object

Equivalent of `JSON.parse()`. Parses a string as a JSON object.

______________________________________________________________________

### quote(mark?: String): String

Returns a string wrapped in the quotation marks. Default quotation is `"`.

#### Function parameters

Which quote mark style to use.

______________________________________________________________________

### removeMarkdown(): String

Removes Markdown formatting from a string.

______________________________________________________________________

### replaceSpecialChars(): String

Replaces non-ASCII characters in a string with an ASCII representation.

______________________________________________________________________

### removeTags(): String

Remove tags, such as HTML or XML, from a string.

______________________________________________________________________

### toBoolean(): Boolean

Convert a string to a boolean. `"false"`, `"0"`, `""`, and `"no"` convert to `false`.

______________________________________________________________________

### toDateTime(): Date

Converts a string to a [Luxon date object](https://docs.n8n.io/code/cookbook/luxon/).

______________________________________________________________________

### toDecimalNumber(): Number

See [toFloat](#string-toFloat)

______________________________________________________________________

### toFloat(): Number

Converts a string to a decimal number.

______________________________________________________________________

Converts a string to an integer.

______________________________________________________________________

### toSentenceCase(): String

Formats a string to sentence case.

______________________________________________________________________

### toSnakeCase(): String

Formats a string to snake case.

______________________________________________________________________

### toTitleCase(): String

Formats a string to title case. Will not change already uppercase letters to prevent losing information from acronyms and trademarks such as iPhone or FAANG.

______________________________________________________________________

### toWholeNumber(): Number

Converts a string to a whole number.

______________________________________________________________________

### urlDecode(entireString?: Boolean): String

Decodes a URL-encoded string. It decodes any percent-encoded characters in the input string, and replaces them with their original characters.

#### Function parameters

entireStringOptionalBoolean

Whether to decode characters that are part of the URI syntax (true) or not (false).

______________________________________________________________________

### urlEncode(entireString?: Boolean): String

Encodes a string to be used/included in a URL.

#### Function parameters

entireStringOptionalBoolean

Whether to encode characters that are part of the URI syntax (true) or not (false).

______________________________________________________________________

---

## Keyboard shortcuts when using the Code editor

**URL:** llms-txt#keyboard-shortcuts-when-using-the-code-editor

**Contents:**
- Cursor Movement
- Selection
- Basic Operations
- Delete Operations
- Line Operations
- Autocomplete
- Indentation
- Code Folding
- Multi-cursor
- Formatting

The Code node editing environment supports a range of keyboard shortcuts to speed up and enhance your experience. Select the appropriate tab to see the relevant shortcuts for your operating system.

| Action                    | Shortcut                    |
| ------------------------- | --------------------------- |
| Move cursor left          | `Left`                      |
| Move cursor right         | `Right`                     |
| Move cursor up            | `Up`                        |
| Move cursor down          | `Down`                      |
| Move cursor by word left  | `Ctrl`+`Left`               |
| Move cursor by word right | `Ctrl`+`Right`              |
| Move to line start        | `Home` **or** `Ctrl`+`Left` |
| Move to line end          | `End` or `Ctrl`+`Right`     |
| Move to document start    | `Ctrl`+`Home`               |
| Move to document end      | `Ctrl`+`End`                |
| Move page up              | `Page Up`                   |
| Move page down            | `Page Down`                 |

| Action                    | Shortcut                        |
| ------------------------- | ------------------------------- |
| Move cursor left          | `Left` **or** `Ctrl`+`B`        |
| Move cursor right         | `Right` **or** `Ctrl`+`F`       |
| Move cursor up            | `Up` **or** `Ctrl`+`P`          |
| Move cursor down          | `Down` **or** `Ctrl`+`N`        |
| Move cursor by word left  | `Option`+`Left`                 |
| Move cursor by word right | `Option`+`Right`                |
| Move to line start        | `Cmd`+`Left` **or** `Ctrl`+`A`  |
| Move to line end          | `Cmd`+`Right` **or** `Ctrl`+`E` |
| Move to document start    | `Cmd`+`Up`                      |
| Move to document end      | `Cmd`+`Down`                    |
| Move page up              | `Page Up` **or** `Option`+`V`   |
| Move page down            | `Page Down` **or** `Ctrl`+`V`   |

| Action                    | Shortcut                    |
| ------------------------- | --------------------------- |
| Move cursor left          | `Left`                      |
| Move cursor right         | `Right`                     |
| Move cursor up            | `Up`                        |
| Move cursor down          | `Down`                      |
| Move cursor by word left  | `Ctrl`+`Left`               |
| Move cursor by word right | `Ctrl`+`Right`              |
| Move to line start        | `Home` **or** `Ctrl`+`Left` |
| Move to line end          | `End` or `Ctrl`+`Right`     |
| Move to document start    | `Ctrl`+`Home`               |
| Move to document end      | `Ctrl`+`End`                |
| Move page up              | `Page Up`                   |
| Move page down            | `Page Down`                 |

| Action                          | Shortcut                 |
| ------------------------------- | ------------------------ |
| Selection with any movement key | `Shift` + [Movement Key] |
| Select all                      | `Ctrl`+`A`               |
| Select line                     | `Ctrl`+`L`               |
| Select next occurrence          | `Ctrl`+`D`               |
| Select all occurrences          | `Shift`+`Ctrl`+`L`       |
| Go to matching bracket          | `Shift`+`Ctrl`+`\`       |

| Action                          | Shortcut                 |
| ------------------------------- | ------------------------ |
| Selection with any movement key | `Shift` + [Movement Key] |
| Select all                      | `Cmd`+`A`                |
| Select line                     | `Cmd`+`L`                |
| Select next occurrence          | `Cmd`+`D`                |
| Go to matching bracket          | `Shift`+`Cmd`+`\`        |

| Action                          | Shortcut                 |
| ------------------------------- | ------------------------ |
| Selection with any movement key | `Shift` + [Movement Key] |
| Select all                      | `Ctrl`+`A`               |
| Select line                     | `Ctrl`+`L`               |
| Select next occurrence          | `Ctrl`+`D`               |
| Select all occurrences          | `Shift`+`Ctrl`+`L`       |
| Go to matching bracket          | `Shift`+`Ctrl`+`\`       |

| Action                    | Shortcut                             |
| ------------------------- | ------------------------------------ |
| New line with indentation | `Enter`                              |
| Undo                      | `Ctrl`+`Z`                           |
| Redo                      | `Ctrl`+`Y` **or** `Ctrl`+`Shift`+`Z` |
| Undo selection            | `Ctrl`+`U`                           |
| Copy                      | `Ctrl`+`C`                           |
| Cut                       | `Ctrl`+`X`                           |
| Paste                     | `Ctrl`+`V`                           |

| Action                    | Shortcut                           |
| ------------------------- | ---------------------------------- |
| New line with indentation | `Enter`                            |
| Undo                      | `Cmd`+`Z`                          |
| Redo                      | `Cmd`+`Y` **or** `Cmd`+`Shift`+`Z` |
| Undo selection            | `Cmd`+`U`                          |
| Copy                      | `Cmd`+`C`                          |
| Cut                       | `Cmd`+`X`                          |
| Paste                     | `Cmd`+`V`                          |

| Action                    | Shortcut                             |
| ------------------------- | ------------------------------------ |
| New line with indentation | `Enter`                              |
| Undo                      | `Ctrl`+`Z`                           |
| Redo                      | `Ctrl`+`Y` **or** `Ctrl`+`Shift`+`Z` |
| Undo selection            | `Ctrl`+`U`                           |
| Copy                      | `Ctrl`+`C`                           |
| Cut                       | `Ctrl`+`X`                           |
| Paste                     | `Ctrl`+`V`                           |

| Action                 | Shortcut           |
| ---------------------- | ------------------ |
| Delete character left  | `Backspace`        |
| Delete character right | `Del`              |
| Delete word left       | `Ctrl`+`Backspace` |
| Delete word right      | `Ctrl`+`Del`       |
| Delete line            | `Shift`+`Ctrl`+`K` |

| Action                 | Shortcut                                        |
| ---------------------- | ----------------------------------------------- |
| Delete character left  | `Backspace`                                     |
| Delete character right | `Del`                                           |
| Delete word left       | `Option`+`Backspace` **or** `Ctrl`+`Cmd`+`H`    |
| Delete word right      | `Option`+`Del` **or** `Fn`+`Option`+`Backspace` |
| Delete line            | `Shift`+`Cmd`+`K`                               |
| Delete to line start   | `Cmd`+`Backspace`                               |
| Delete to line end     | `Cmd`+`Del` **or** `Ctrl`+`K`                   |

| Action                 | Shortcut           |
| ---------------------- | ------------------ |
| Delete character left  | `Backspace`        |
| Delete character right | `Del`              |
| Delete word left       | `Ctrl`+`Backspace` |
| Delete word right      | `Ctrl`+`Del`       |
| Delete line            | `Shift`+`Ctrl`+`K` |

| Action               | Shortcut                       |
| -------------------- | ------------------------------ |
| Move line up         | `Alt`+`Up`                     |
| Move line down       | `Alt`+`Down`                   |
| Copy line up         | `Shift`+`Alt`+`Up`             |
| Copy line down       | `Shift`+`Alt`+`Down`           |
| Toggle line comment  | `Ctrl`+`/`                     |
| Add line comment     | `Ctrl`+`K` **then** `Ctrl`+`C` |
| Remove line comment  | `Ctrl`+`K` **then** `Ctrl`+`U` |
| Toggle block comment | `Shift`+`Alt`+`A`              |

| Action               | Shortcut                     |
| -------------------- | ---------------------------- |
| Move line up         | `Option`+`Up`                |
| Move line down       | `Option`+`Down`              |
| Copy line up         | `Shift`+`Option`+`Up`        |
| Copy line down       | `Shift`+`Option`+`Down`      |
| Toggle line comment  | `Cmd`+`/`                    |
| Add line comment     | `Cmd`+`K` **then** `Cmd`+`C` |
| Remove line comment  | `Cmd`+`K` **then** `Cmd`+`U` |
| Toggle block comment | `Shift`+`Option`+`A`         |
| Split line           | `Ctrl`+`O`                   |
| Transpose characters | `Ctrl`+`T`                   |

| Action               | Shortcut                       |
| -------------------- | ------------------------------ |
| Move line up         | `Alt`+`Up`                     |
| Move line down       | `Alt`+`Down`                   |
| Copy line up         | `Shift`+`Alt`+`Up`             |
| Copy line down       | `Shift`+`Alt`+`Down`           |
| Toggle line comment  | `Ctrl`+`/`                     |
| Add line comment     | `Ctrl`+`K` **then** `Ctrl`+`C` |
| Remove line comment  | `Ctrl`+`K` **then** `Ctrl`+`C` |
| Toggle block comment | `Shift`+`Alt`+`A`              |

| Action                      | Shortcut             |
| --------------------------- | -------------------- |
| Start completion            | `Ctrl`+`Space`       |
| Accept completion           | `Enter` **or** `Tab` |
| Close completion            | `Esc`                |
| Navigate completion options | `Up` **or** `Down`   |

| Action                      | Shortcut             |
| --------------------------- | -------------------- |
| Start completion            | `Ctrl`+`Space`       |
| Accept completion           | `Enter` **or** `Tab` |
| Close completion            | `Esc`                |
| Navigate completion options | `Up` **or** `Down`   |

| Action                      | Shortcut             |
| --------------------------- | -------------------- |
| Start completion            | `Ctrl`+`Space`       |
| Accept completion           | `Enter` **or** `Tab` |
| Close completion            | `Esc`                |
| Navigate completion options | `Up` **or** `Down`   |

| Action      | Shortcut                        |
| ----------- | ------------------------------- |
| Indent more | `Tab` **or** `Ctrl`+`]`         |
| Indent less | `Shift`+`Tab` **or** `Ctrl`+`[` |

| Action      | Shortcut  |
| ----------- | --------- |
| Indent more | `Cmd`+`]` |
| Indent less | `Cmd`+`[` |

| Action      | Shortcut                        |
| ----------- | ------------------------------- |
| Indent more | `Tab` **or** `Ctrl`+`]`         |
| Indent less | `Shift`+`Tab` **or** `Ctrl`+`[` |

| Action      | Shortcut                       |
| ----------- | ------------------------------ |
| Fold code   | `Ctrl`+`Shift`+`[`             |
| Unfold code | `Ctrl`+`Shift`+`]`             |
| Fold all    | `Ctrl`+`K` **then** `Ctrl`+`0` |
| Unfold all  | `Ctrl`+`K` **then** `Ctrl`+`J` |

| Action      | Shortcut                     |
| ----------- | ---------------------------- |
| Fold code   | `Cmd`+`Option`+`[`           |
| Unfold code | `Cmd`+`Option`+`]`           |
| Fold all    | `Cmd`+`K` **then** `Cmd`+`0` |
| Unfold all  | `Cmd`+`K` **then** `Cmd`+`J` |

| Action      | Shortcut                       |
| ----------- | ------------------------------ |
| Fold code   | `Ctrl`+`Shift`+`[`             |
| Unfold code | `Ctrl`+`Shift`+`]`             |
| Fold all    | `Ctrl`+`K` **then** `Ctrl`+`0` |
| Unfold all  | `Ctrl`+`K` **then** `Ctrl`+`J` |

| Action                       | Shortcut            |
| ---------------------------- | ------------------- |
| Add cursor at click position | `Alt`+`Left Button` |
| Add cursor above             | `Ctrl`+`Alt`+`Up`   |
| Add cursor below             | `Ctrl`+`Alt`+`Down` |
| Add cursors to line ends     | `Shift`+`Alt`+`I`   |
| Clear multiple cursors       | `Esc`               |

| Action                       | Shortcut               |
| ---------------------------- | ---------------------- |
| Add cursor at click position | `Option`+`Left Button` |
| Add cursor above             | `Ctrl`+`Option`+`Up`   |
| Add cursor below             | `Ctrl`+`Option`+`Down` |
| Add cursors to line ends     | `Shift`+`Option`+`I`   |
| Clear multiple cursors       | `Esc`                  |

| Action                       | Shortcut             |
| ---------------------------- | -------------------- |
| Add cursor at click position | `Alt`+`Left Button`  |
| Add cursor above             | `Shift`+`Alt`+`Up`   |
| Add cursor below             | `Shift`+`Alt`+`Down` |
| Add cursors to line ends     | `Shift`+`Alt`+`I`    |
| Clear multiple cursors       | `Esc`                |

| Action          | Shortcut          |
| --------------- | ----------------- |
| Format document | `Shift`+`Alt`+`F` |

| Action          | Shortcut          |
| --------------- | ----------------- |
| Format document | `Shift`+`Cmd`+`F` |

| Action          | Shortcut           |
| --------------- | ------------------ |
| Format document | `Ctrl`+`Shift`+`I` |

## Search & Navigation

| Action          | Shortcut             |
| --------------- | -------------------- |
| Open Search     | `Ctrl`+`F`           |
| Select All      | `Alt`+`Enter`        |
| Replace All     | `Ctrl`+`Alt`+`Enter` |
| Go To Line      | `Ctrl`+`G`           |
| Next Diagnostic | `F8`                 |
| Previous Diag.  | `Shift`+`F8`         |
| Open Lint Panel | `Ctrl`+`Shift`+`M`   |

| Action          | Shortcut               |
| --------------- | ---------------------- |
| Open Search     | `Cmd`+`F`              |
| Select All      | `Cmd`+`Enter`          |
| Replace All     | `Cmd`+`Option`+`Enter` |
| Go To Line      | `Cmd`+`G`              |
| Next Diagnostic | `F8`                   |
| Previous Diag.  | `Shift`+`F8`           |
| Open Lint Panel | `Cmd`+`Shift`+`M`      |

| Action          | Shortcut             |
| --------------- | -------------------- |
| Open Search     | `Ctrl`+`F`           |
| Select All      | `Alt`+`Enter`        |
| Replace All     | `Ctrl`+`Alt`+`Enter` |
| Go To Line      | `Ctrl`+`G`           |
| Next Diagnostic | `F8`                 |
| Previous Diag.  | `Shift`+`F8`         |
| Open Lint Panel | `Ctrl`+`Shift`+`M`   |

---

## n8n v1.0 migration guide

**URL:** llms-txt#n8n-v1.0-migration-guide

**Contents:**
- New features
  - Python support in the Code node
  - Execution order
- Deprecations
  - MySQL and MariaDB
  - EXECUTIONS_PROCESS and "own" mode
- Breaking changes
  - Docker
  - Workflow failures due to expression errors
  - Mandatory owner account

This document provides a summary of what you should be aware of before updating to version 1.0 of n8n.

The release of n8n 1.0 marks a milestone in n8n's journey to make n8n available for demanding production environments. Version 1.0 represents the hard work invested over the last four years to make n8n the most accessible, powerful, and versatile automation tool. n8n 1.0 is now ready for use in production.

### Python support in the Code node

Although JavaScript remains the default language, you can now also select Python as an option in the [Code node](../code/code-node/) and even make use of [many Python modules](https://pyodide.org/en/stable/usage/packages-in-pyodide.html#packages-in-pyodide). Note that Python is unavailable in Code nodes added to a workflow before v1.0.

[PR #4295](https://github.com/n8n-io/n8n/pull/4295), [PR #6209](https://github.com/n8n-io/n8n/pull/6209)

n8n 1.0 introduces a new execution order for multi-branch workflows:

In multi-branch workflows, n8n needs to determine the order in which to execute nodes on branches. Previously, n8n executed the first node of each branch, then the second of each branch, and so on (breadth-first). The new execution order ensures that each branch executes completely before starting the next one (depth-first). Branches execute based on their position on the canvas, from top to bottom. If two branches are at the same height, the leftmost one executes first.

n8n used to execute multi-input nodes as long as they received data on their first input. Nodes connected to the second input of multi-input nodes automatically executed regardless of whether they received data. The new execution order introduced in n8n 1.0 simplifies this behavior: Nodes are now executed only when they receive data, and multi-input nodes require data on at least one of their inputs to execute.

Your existing workflows will use the legacy order, while new workflows will execute using the v1 order. You can configure the execution order for each workflow in [workflow settings](../workflows/settings/).

[PR #4238](https://github.com/n8n-io/n8n/pull/4238), [PR #6246](https://github.com/n8n-io/n8n/pull/6246), [PR #6507](https://github.com/n8n-io/n8n/pull/6507)

### MySQL and MariaDB

n8n has deprecated support for MySQL and MariaDB as storage backends for n8n. These database systems are used by only a few users, yet they require continuous development and maintenance efforts. n8n recommends migrating to PostgreSQL for better compatibility and long-term support.

[PR #6189](https://github.com/n8n-io/n8n/pull/6189)

### EXECUTIONS_PROCESS and "own" mode

Previously, you could use the `EXECUTIONS_PROCESS` environment variable to specify whether executions should run in the `main` process or in their `own` processes. This option and `own` mode are now deprecated and will be removed in a future version of n8n. This is because it led to increased code complexity while offering marginal benefits. Starting from n8n 1.0, `main` will be the new default.

Note that executions start much faster in `main` mode than in `own` mode. However, if a workflow consumes more memory than is available, it might crash the entire n8n application instead of just the worker thread. To mitigate this, make sure to allocate enough system resources or configure [queue mode](../hosting/scaling/queue-mode/) to distribute executions among multiple workers.

[PR #6196](https://github.com/n8n-io/n8n/pull/6196)

#### Permissions change

When using Docker-based deployments, the n8n process is now run by the user `node` instead of `root`. This change increases security.

If permission errors appear in your n8n container logs when starting n8n, you may need to update the permissions by executing the following command on the Docker host:

We've removed the Debian and RHEL images. If you were using these you need to change the image you use. This shouldn't result in any errors unless you were making a custom image based on one of those images.

#### Entrypoint change

The entrypoint for the container has changed and you no longer need to specify the n8n command. If you were previously running `n8n worker --concurrency=5` it's now `worker --concurrency=5`

[PR #6365](https://github.com/n8n-io/n8n/pull/6365)

### Workflow failures due to expression errors

Workflow executions may fail due to syntax or runtime errors in expressions, such as those that reference non-existent nodes. While expressions already throw errors on the frontend, this change ensures that n8n also throws errors on the backend, where they were previously silently ignored. To receive notifications of failing workflows, n8n recommends setting up an "error workflow" under workflow settings.

[PR #6352](https://github.com/n8n-io/n8n/pull/6352)

### Mandatory owner account

This change makes [User Management](../user-management/) mandatory and removes support for other authentication methods, such as BasicAuth and External JWT. Note that the number of permitted users on [n8n.cloud](https://n8n.cloud/) or custom plans still varies depending on your subscription.

[PR #6362](https://github.com/n8n-io/n8n/pull/6362)

### Directory for installing custom nodes

n8n will no longer load custom nodes from its global `node_modules` directory. Instead, you must install (or link) them to `~/.n8n/custom` (or a directory defined by `N8N_CUSTOM_EXTENSIONS`). Custom nodes that are npm packages will be located in `~/.n8n/nodes`. If you have custom nodes that were linked using `npm link` into the global `node_modules` directory, you need to link them again, into `~/.n8n/nodes` instead.

[PR #6396](https://github.com/n8n-io/n8n/pull/6396)

The `N8N_PUSH_BACKEND` environment variable can be used to configure one of two available methods for pushing updates to the user interface: `sse` and `websocket`. Starting with n8n 1.0, `websocket` is the default method.

[PR #6196](https://github.com/n8n-io/n8n/pull/6196)

### Date transformation functions

n8n provides various transformation functions that operate on dates. These functions may return either a JavaScript `Date` or a Luxon `DateTime` object. With the new behavior, the return type always matches the input. If you call a date transformation function on a `Date`, it returns a `Date`. Similarly, if you call it on a `DateTime` object, it returns a `DateTime` object.

To identify any workflows and nodes that might be impacted by this change, you can use this [utility workflow](https://n8n.io/workflows/1929-v1-helper-find-params-with-affected-expressions/).

For more information about date transformation functions, please refer to the [official documentation](../code/builtin/data-transformation-functions/dates/).

[PR #6435](https://github.com/n8n-io/n8n/pull/6435)

### Execution data retention

Starting from n8n 1.0, all successful, failed, and manual workflow executions will be saved by default. These settings can be modified for each workflow under "Workflow Settings," or globally using the respective environment variables. Additionally, the `EXECUTIONS_DATA_PRUNE` setting will be enabled by default, with `EXECUTIONS_DATA_PRUNE_MAX_COUNT` set to 10,000. These default settings are designed to prevent performance degradation when using SQLite. Make sure to configure them according to your individual requirements and system capacity.

[PR #6577](https://github.com/n8n-io/n8n/pull/6577)

### Removed N8N_USE_DEPRECATED_REQUEST_LIB

The legacy `request` library has been deprecated for some time now. As of n8n 1.0, the ability to fall back to it in the HTTP Request node by setting the `N8N_USE_DEPRECATED_REQUEST_LIB` environment variable has been fully removed. The HTTP Request node will now always use the new `HttpRequest` interface.

If you build custom nodes, refer to [HTTP request helpers](../integrations/creating-nodes/build/reference/http-helpers/) for more information on migrating to the new interface.

[PR #6413](https://github.com/n8n-io/n8n/pull/6413)

### Removed WEBHOOK_TUNNEL_URL

As of version 0.227.0, n8n has renamed the `WEBHOOK_TUNNEL_URL` configuration option to `WEBHOOK_URL`. In n8n 1.0, `WEBHOOK_TUNNEL_URL` has been removed. Update your setup to reflect the new name. For more information about this configuration option, refer to [the docs](../hosting/configuration/configuration-examples/webhook-url/).

[PR #1408](https://github.com/n8n-io/n8n/pull/1408)

### Remove Node 16 support

n8n now requires Node 18.17.0 or above.

## Updating to n8n 1.0

1. Create a full backup of n8n.
1. n8n recommends updating to the latest n8n 0.x release before updating to n8n 1.x. This will allow you to pinpoint any potential issues to the correct release. Once you have verified that n8n 0.x starts up without any issues, proceed to the next step.
1. Carefully read the [Deprecations](#deprecations) and [Breaking Changes](#breaking-changes) sections above to assess how they may affect your setup.
1. Update to n8n 1.0:
   - During beta (before July 24th 2023): If using Docker, pull the `next` Docker image.
   - After July 24th 2023: If using Docker, pull the `latest` Docker image.
1. If you encounter any issues, redeploy the previous n8n version and restore the backup.

If you encounter any issues during the process of updating to n8n 1.0, please seek help in the community [forum](https://community.n8n.io/).

We would like to take a moment to express our gratitude to all of our users for their continued support and feedback. Your contributions are invaluable in helping us make n8n the best possible automation tool. We're excited to continue working with you as we move forward with the release of version 1.0 and beyond. Thank you for being a part of our journey!

**Examples:**

Example 1 (unknown):
```unknown
docker run --rm -it --user root -v ~/.n8n:/home/node/.n8n --entrypoint chown n8nio/base:16 -R node:node /home/node/.n8n
```

---
