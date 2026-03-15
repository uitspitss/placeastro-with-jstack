---
name: cloudflare
description: Cloudflare developer platform - Workers, Pages, R2, AI, Zero Trust, CDN
---

# Cloudflare Skill

Comprehensive assistance with Cloudflare's developer platform, including Workers, AI Agents, AI Gateway, Pages, R2 storage, D1 databases, Durable Objects, and AI Search (RAG).

## When to Use This Skill

This skill should be triggered when:
- Building serverless applications with **Cloudflare Workers**
- Creating AI agents using the **Agents SDK** or **Model Context Protocol (MCP)**
- Integrating AI models through **AI Gateway** or **Workers AI**
- Implementing **Retrieval Augmented Generation (RAG)** with **AI Search**
- Deploying static sites with **Cloudflare Pages**
- Working with object storage via **R2**
- Managing serverless databases with **D1**
- Building stateful applications with **Durable Objects**
- Setting up CDN configurations or edge computing
- Implementing **Zero Trust** security patterns
- Troubleshooting Cloudflare API integrations
- Learning Cloudflare best practices and patterns

## Quick Reference

### 1. Basic Cloudflare Worker

```javascript
export default {
  async fetch(request, env, ctx) {
    return new Response('Hello from Cloudflare Workers!', {
      headers: { 'Content-Type': 'text/plain' }
    });
  }
};
```

### 2. Worker with AI Gateway Integration

```javascript
export default {
  async fetch(request, env, ctx) {
    const response = await env.AI_GATEWAY.run('@cf/meta/llama-2-7b-chat-int8', {
      messages: [
        { role: 'user', content: 'What is Cloudflare?' }
      ]
    });

    return Response.json(response);
  }
};
```

### 3. Building an AI Agent with Agents SDK

```javascript
import { Agent } from '@cloudflare/agents-sdk';

export default {
  async fetch(request, env, ctx) {
    const agent = new Agent({
      model: 'gpt-4',
      tools: [
        {
          name: 'get_weather',
          description: 'Get current weather',
          parameters: {
            type: 'object',
            properties: {
              location: { type: 'string' }
            }
          },
          execute: async ({ location }) => {
            // Implementation here
            return `Weather in ${location}: Sunny`;
          }
        }
      ]
    });

    const result = await agent.run(
      'What is the weather in San Francisco?'
    );

    return Response.json(result);
  }
};
```

### 4. MCP Server on Workers

```javascript
import { McpAgent } from '@cloudflare/agents-sdk';

export default {
  async fetch(request, env, ctx) {
    const agent = new McpAgent({
      name: 'my-mcp-server',
      version: '1.0.0',
      tools: [
        {
          name: 'calculate',
          description: 'Perform calculations',
          inputSchema: {
            type: 'object',
            properties: {
              operation: { type: 'string' },
              a: { type: 'number' },
              b: { type: 'number' }
            }
          },
          handler: async ({ operation, a, b }) => {
            if (operation === 'add') return a + b;
            if (operation === 'multiply') return a * b;
            throw new Error('Unknown operation');
          }
        }
      ]
    });

    return agent.handleRequest(request);
  }
};
```

### 5. AI Search (RAG) with Workers Binding

```javascript
export default {
  async fetch(request, env, ctx) {
    const query = 'How do I deploy a Worker?';

    const result = await env.AI_SEARCH.search({
      query,
      top_k: 5,
      include_metadata: true
    });

    return Response.json(result);
  }
};
```

### 6. R2 Storage Integration

```javascript
export default {
  async fetch(request, env, ctx) {
    // Upload file to R2
    await env.MY_BUCKET.put('example.txt', 'Hello R2!');

    // Read file from R2
    const object = await env.MY_BUCKET.get('example.txt');
    const text = await object.text();

    return new Response(text);
  }
};
```

### 7. D1 Database Query

```javascript
export default {
  async fetch(request, env, ctx) {
    const results = await env.DB.prepare(
      'SELECT * FROM users WHERE email = ?'
    ).bind('user@example.com').all();

    return Response.json(results);
  }
};
```

### 8. Durable Objects for Stateful Applications

```javascript
export class Counter {
  constructor(state, env) {
    this.state = state;
  }

  async fetch(request) {
    let count = await this.state.storage.get('count') || 0;
    count++;
    await this.state.storage.put('count', count);

    return new Response(count.toString());
  }
}

export default {
  async fetch(request, env, ctx) {
    const id = env.COUNTER.idFromName('global');
    const obj = env.COUNTER.get(id);
    return obj.fetch(request);
  }
};
```

### 9. AI Gateway with Caching and Rate Limiting

```javascript
const response = await fetch(
  'https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai/chat/completions',
  {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
      'cf-aig-cache-ttl': '3600',
      'cf-aig-skip-cache': 'false'
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [{ role: 'user', content: 'Hello!' }]
    })
  }
);
```

### 10. Human-in-the-Loop Agent Pattern

```javascript
import { Agent } from '@cloudflare/agents-sdk';

export default {
  async fetch(request, env, ctx) {
    const agent = new Agent({
      model: 'gpt-4',
      tools: [
        {
          name: 'send_email',
          description: 'Send email (requires approval)',
          requiresApproval: true,
          execute: async ({ to, subject, body }) => {
            // Wait for human approval
            const approved = await requestApproval({
              action: 'send_email',
              params: { to, subject, body }
            });

            if (!approved) {
              throw new Error('Action not approved');
            }

            // Send email
            return { status: 'sent' };
          }
        }
      ]
    });

    return agent.handleRequest(request);
  }
};
```

## Reference Files

This skill includes comprehensive documentation in `references/`:

### llms.md
Complete Cloudflare developer documentation covering:
- **Agents**: Build AI agents with tools, workflows, and MCP integration
- **AI Search**: Fully-managed RAG applications with retrieval-augmented generation
- **AI Gateway**: Control, monitor, and optimize AI API usage with caching, rate limiting, and observability
- **Workers AI**: Run AI models on Cloudflare's edge network
- **Browser Rendering**: Automate browsers at the edge
- **Constellation**: ML inference at the edge
- **Containers**: Deploy containerized applications

### other.md
Additional platform documentation including:
- **D1**: Serverless SQL database
- **Durable Objects**: Stateful serverless compute
- **R2**: Object storage with S3-compatible API
- **Pages**: Static site hosting with edge functions
- **Zero Trust**: Security and access control
- **CDN**: Content delivery and optimization

Use the reference files when you need:
- Detailed API specifications
- Advanced configuration options
- Platform limits and pricing details
- Step-by-step tutorials
- Best practices and design patterns

## Working with This Skill

### For Beginners

Start with these core concepts:
1. **Workers Basics**: Understand the fetch handler pattern and edge computing
2. **Bindings**: Learn how to connect Workers to R2, D1, Durable Objects, and AI services
3. **Getting Started Guides**: Follow the tutorials in the reference docs for hands-on learning
4. **Local Development**: Use Wrangler CLI for local testing and deployment

Key resources:
- Getting started guides for Workers, Pages, and AI
- Simple examples above (#1, #6, #7)

### For Building AI Applications

Focus on these areas:
1. **Agents SDK**: Build AI agents with tool calling and workflows
2. **AI Gateway**: Route and optimize LLM requests
3. **AI Search (RAG)**: Implement retrieval-augmented generation for context-aware responses
4. **MCP Integration**: Create or consume Model Context Protocol servers
5. **Workers AI**: Run AI models directly on the edge

Key resources:
- Examples #2-5, #9-10
- Agent patterns and MCP documentation in llms.md

### For Advanced Features

Explore these capabilities:
1. **Durable Objects**: Build stateful applications with strong consistency
2. **Dynamic Routing**: Implement intelligent request routing in AI Gateway
3. **Guardrails & DLP**: Add content filtering and data loss prevention
4. **Human-in-the-Loop**: Implement approval workflows for sensitive operations
5. **Evaluation Frameworks**: Test and improve AI agent performance
6. **Custom Costs**: Track and optimize AI API spending

Key resources:
- Advanced examples (#8, #10)
- Platform-specific documentation in both reference files

## Key Concepts

### Workers
Serverless JavaScript/TypeScript runtime running on Cloudflare's edge network. Workers handle HTTP requests using the `fetch` event handler.

### Bindings
Connections between Workers and other Cloudflare services (R2, D1, AI Gateway, etc.). Configured in `wrangler.toml` and accessed via the `env` parameter.

### Agents SDK
Framework for building AI agents with:
- **Tools**: Functions that agents can call
- **Workflows**: Multi-step agent orchestrations
- **MCP Support**: Standard protocol for AI tool integration

### Model Context Protocol (MCP)
Open standard for connecting AI systems to data sources and tools. Cloudflare supports both MCP clients and servers.

### AI Gateway
Unified interface for accessing multiple AI providers with:
- Request routing and fallbacks
- Caching for cost optimization
- Rate limiting and access control
- Observability and analytics
- DLP and guardrails

### AI Search (RAG)
Fully-managed retrieval-augmented generation system that:
- Indexes documents from R2, websites, or APIs
- Performs semantic search using embeddings
- Generates context-aware responses
- Handles chunking, query rewriting, and caching

### Durable Objects
Stateful serverless compute primitives that provide:
- Strong consistency guarantees
- Persistent storage per object
- Global uniqueness and routing
- WebSocket support

### Edge Computing
Running code at Cloudflare's edge locations (300+ cities worldwide) for:
- Lower latency (closer to users)
- Higher performance
- Global distribution
- Cost efficiency

## Best Practices

### Workers
- Keep Workers lightweight (< 1MB after compression)
- Use async/await for all I/O operations
- Leverage caching with Cache API
- Handle errors gracefully with try/catch

### AI Agents
- Define clear, concise tool descriptions
- Implement proper error handling in tools
- Use structured outputs for consistency
- Test agents thoroughly before production
- Implement rate limiting for external API calls

### AI Gateway
- Enable caching for repeated queries
- Set appropriate rate limits
- Use custom metadata for tracking
- Monitor costs and usage patterns
- Implement fallback providers

### Security
- Never hardcode API keys (use environment variables)
- Validate all user inputs
- Use AI Gateway authentication
- Implement guardrails for sensitive operations
- Enable DLP for PII protection

## Resources

### Official Documentation
- [Cloudflare Developers](https://developers.cloudflare.com/)
- [Agents SDK Docs](https://developers.cloudflare.com/agents/)
- [AI Gateway Docs](https://developers.cloudflare.com/ai-gateway/)
- [Workers Docs](https://developers.cloudflare.com/workers/)

### Developer Tools
- **Wrangler CLI**: Local development and deployment
- **Dashboard**: Web-based management console
- **API**: Programmatic resource management

### Community
- Discord: Cloudflare Developers community
- GitHub: Official examples and templates
- Blog: Product updates and tutorials

## Notes

- This skill was automatically generated from official documentation
- Reference files preserve the structure and examples from source docs
- Code examples include language detection for syntax highlighting
- All examples use modern JavaScript/TypeScript patterns
- Workers runtime is V8-based with Web Standards APIs

## Updating

To refresh this skill with updated documentation:
1. Re-run the scraper with the same configuration
2. The skill will be rebuilt with the latest information
3. Check changelog for breaking changes or new features
