import type { AppRouter } from '@/server';
import { createClient } from 'jstack';

/**
 * Your type-safe API client
 * @see https://jstack.app/docs/backend/api-client
 */

export const getClient = () =>
  createClient<AppRouter>({
    baseUrl:
      process.env.NODE_ENV === 'production'
        ? 'https://placeastro-server.fruition-test-u7s.workers.dev/api'
        : `${process.env.NEXT_PUBLIC_API_URL}/api`,
  });
