import type { AppRouter } from '@placeastro/api';
import { createClient } from 'jstack';

/**
 * Your type-safe API client
 * @see https://jstack.app/docs/backend/api-client
 */

export const getClient = () =>
  createClient<AppRouter>({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  });
