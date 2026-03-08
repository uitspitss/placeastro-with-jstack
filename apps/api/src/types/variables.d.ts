import type { Auth } from '@/server/lib/auth';

declare module 'hono' {
  interface ContextVariableMap {
    auth: Auth;
    user: Auth['$Infer']['Session']['user'] | null;
    session: Auth['$Infer']['Session']['session'] | null;
  }
}
