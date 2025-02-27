import type { AppRouter } from '@/server';
import { createClient } from 'jstack';

const getBaseUrl = () => {
  console.log('API_URL', process.env.API_URL);
  if (process.env.NODE_ENV === 'production') {
    return process.env.API_URL;
  }

  return `http://${process.env.API_URL}`;
};

/**
 * Your type-safe API client
 * @see https://jstack.app/docs/backend/api-client
 */
export const client = createClient<AppRouter>({
  baseUrl: `${getBaseUrl()}/api`,
});

// export const getClient = async () =>
//   createClient<AppRouter>({
//     baseUrl: `${getBaseUrl()}/api`,
//   });
