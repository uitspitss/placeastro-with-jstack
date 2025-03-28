import type { Auth } from '@/server/lib/auth';

declare module 'hono' {
  interface ContextVariableMap {
    auth: Auth;
  }
}
