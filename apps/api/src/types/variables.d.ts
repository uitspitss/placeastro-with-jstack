import type { Auth } from '../lib/auth';

declare module 'hono' {
  interface ContextVariableMap {
    auth: Auth;
    user: Auth['$Infer']['Session']['user'] | null;
    session: Auth['$Infer']['Session']['session'] | null;
  }
}
