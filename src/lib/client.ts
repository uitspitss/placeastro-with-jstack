import type { AppRouter } from '@/server';
import { createClient } from 'jstack';

/**
 * Your type-safe API client
 * @see https://jstack.app/docs/backend/api-client
 */

export const getClient = () =>
  createClient<AppRouter>({
    baseUrl: '/api',
  });
