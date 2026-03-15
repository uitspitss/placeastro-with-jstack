---
name: vercel
description: Vercel deployment platform documentation - use for deploying Next.js apps, serverless functions, edge middleware, and CI/CD workflows
---

# Vercel Skill

Comprehensive assistance with Vercel development, deployments, CLI operations, and serverless functions.

## When to Use This Skill

This skill should be triggered when:
- Deploying projects to Vercel using CLI or CI/CD pipelines
- Configuring Next.js applications for Vercel deployment
- Setting up serverless functions (Node.js, Python, Go, Ruby)
- Implementing Edge Functions and Edge Runtime
- Managing environment variables and project configuration
- Working with Vercel CLI commands (`vercel`, `vercel deploy`, `vercel dev`, etc.)
- Troubleshooting deployment issues or build failures
- Configuring domains, DNS, and SSL certificates
- Setting up preview deployments and production workflows
- Optimizing function performance and cold starts
- Managing team projects and role-based access

## Quick Reference

### Basic Deployment

```bash
# Simple deployment (preview)
vercel

# Production deployment
vercel --prod

# Deploy with logs enabled
vercel deploy --logs

# Force deployment (bypass cache)
vercel --force
```

### Local Development

```bash
# Start local development server
vercel dev

# Link local project to Vercel project
vercel link

# Pull environment variables and configuration
vercel pull
```

### Environment Variables

```bash
# Deploy with build environment variables
vercel --build-env DATABASE_URL=postgres://... --build-env API_KEY=secret123

# Deploy with runtime environment variables
vercel --env NODE_ENV=production --env API_URL=https://api.example.com

# Manage environment variables interactively
vercel env add
vercel env ls
vercel env rm VARIABLE_NAME
```

### CI/CD Deployment

```bash
# Authenticate in CI environment
vercel --token $VERCEL_TOKEN

# Deploy prebuilt project (upload only artifacts)
vercel build
vercel --prebuilt --prod
```

### Next.js API Route (Serverless Function)

```typescript
// app/api/hello/route.ts
export function GET(request: Request) {
  return new Response('Hello from Vercel!', {
    status: 200,
    headers: { 'Content-Type': 'text/plain' }
  });
}
```

### Next.js Edge Function

```typescript
// app/api/edge/route.ts
export const runtime = 'edge';

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name') || 'World';

  return new Response(`Hello, ${name}!`, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
```

### Next.js Middleware (Edge Runtime)

```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const country = request.geo?.country || 'US';
  const response = NextResponse.next();

  // Add custom header
  response.headers.set('x-user-country', country);

  return response;
}

export const config = {
  matcher: '/api/:path*'
};
```

### Regional Deployment

```bash
# Deploy to specific region
vercel --regions sfo1

# Deploy to multiple regions
vercel --regions sfo1,iad1,cdg1
```

### Project Management

```bash
# Initialize new project
vercel init

# List deployments
vercel list

# Inspect deployment details
vercel inspect [deployment-url]

# View deployment logs
vercel logs [deployment-url]

# Rollback to previous deployment
vercel rollback [deployment-url]
```

### Domain Management

```bash
# Add domain to project
vercel domains add example.com

# List project domains
vercel domains ls

# Remove domain
vercel domains rm example.com
```

## Key Concepts

### Serverless Functions
Vercel Functions run server-side code without managing servers. They automatically scale to handle demand and execute close to data sources to reduce latency. Functions support multiple runtimes including Node.js, Python, Go, Ruby, and Edge Runtime.

**Key Characteristics:**
- Automatically create a new function invocation for each request
- Can reuse function instances to optimize performance
- Scale down to zero when no incoming requests
- Execute in a single region by default (configurable for multi-region)

### Edge Runtime vs Node.js Runtime
- **Edge Runtime**: Lightweight, runs globally at the edge, faster cold starts, limited to standard Web APIs
- **Node.js Runtime**: Full Node.js environment, access to all npm packages, runs in specific regions

### Preview vs Production Deployments
- **Preview**: Every push to non-production branches creates a unique preview URL
- **Production**: Deployments to main branch (or via `--prod` flag) update production domain

### Environment Variables
Three types of environment variables in Vercel:
1. **Build-time**: Available during build process
2. **Runtime**: Available to serverless functions at runtime
3. **Development**: Used only in local development

## Working with This Skill

### For Beginners
Start with basic deployment workflow:
1. Install CLI: `npm i -g vercel`
2. Login: `vercel login`
3. Deploy: `vercel` (from project directory)
4. Review the preview URL provided

### For Intermediate Users
Focus on:
- Setting up environment variables for different environments
- Configuring `vercel.json` for custom build settings
- Using `vercel dev` for local development that mirrors production
- Managing preview deployments and production workflows

### For Advanced Users
Explore:
- Custom build processes with `vercel build` and `--prebuilt`
- Edge Functions for global, low-latency responses
- Multi-region deployments for optimal performance
- CI/CD integration with GitHub Actions or other providers
- Monorepo deployments and advanced routing configurations

## Reference Files

This skill includes comprehensive documentation in `references/`:

- **cli.md** - Complete CLI command reference with all available commands and options

Use the `Read` tool to access specific reference files when detailed information is needed.

## Common Patterns

### Authentication Check in Middleware
```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token');

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/dashboard/:path*'
};
```

### Streaming Response
```typescript
// app/api/stream/route.ts
export async function GET() {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      for (let i = 0; i < 10; i++) {
        controller.enqueue(encoder.encode(`Data chunk ${i}\n`));
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      controller.close();
    }
  });

  return new Response(stream, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
```

### Geolocation-Based Routing
```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const country = request.geo?.country || 'US';
  const url = request.nextUrl.clone();

  // Redirect based on country
  if (country === 'FR' && !url.pathname.startsWith('/fr')) {
    url.pathname = `/fr${url.pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
```

## CLI Command Reference

### Essential Commands
- `vercel` - Deploy project (preview)
- `vercel --prod` - Deploy to production
- `vercel dev` - Start local development
- `vercel env` - Manage environment variables
- `vercel logs` - View deployment logs
- `vercel link` - Link local project to Vercel
- `vercel pull` - Download project settings
- `vercel list` - List all deployments
- `vercel rollback` - Rollback deployment
- `vercel inspect` - Inspect deployment details

### Advanced Commands
- `vercel build` - Build project locally
- `vercel --prebuilt` - Deploy prebuilt artifacts
- `vercel bisect` - Troubleshoot deployment issues
- `vercel promote` - Promote deployment
- `vercel redeploy` - Redeploy previous deployment
- `vercel domains` - Manage domains
- `vercel certs` - Manage SSL certificates
- `vercel teams` - Manage teams
- `vercel projects` - Manage projects

## Best Practices

### Performance Optimization
- Use Edge Functions for global, low-latency responses
- Implement proper caching strategies
- Minimize cold starts by keeping functions warm
- Use streaming responses for large data sets

### Security
- Never commit `.env` files or secrets
- Use Vercel environment variables for sensitive data
- Implement proper authentication in middleware
- Use environment-specific variables (preview vs production)

### Development Workflow
- Use `vercel dev` to replicate production environment locally
- Test with `vercel --prod` in staging before production
- Review preview deployments before merging to main
- Use `vercel pull` to sync environment variables

## Resources

### Official Documentation
- [Vercel CLI Documentation](https://vercel.com/docs/cli)
- [Vercel Functions](https://vercel.com/docs/functions)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Edge Functions](https://vercel.com/docs/functions/edge-functions)

### Quick Links
- Install CLI: `npm i -g vercel` or `pnpm i -g vercel`
- Update CLI: `pnpm i -g vercel@latest`
- Check version: `vercel --version`
- Get help: `vercel help` or `vercel [command] --help`

## Notes

- This skill was enhanced with official Vercel documentation (2025)
- Code examples follow current Vercel and Next.js best practices
- All commands are compatible with the latest Vercel CLI
- Edge Runtime examples use standard Web APIs
- Serverless function examples support multiple runtimes

## Updating

To refresh this skill with updated documentation:
1. Re-run the scraper with the same configuration
2. The skill will be rebuilt with the latest information
3. Verify examples against current Vercel documentation
