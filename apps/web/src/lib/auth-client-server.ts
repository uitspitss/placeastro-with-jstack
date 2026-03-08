import { createAuthClient } from 'better-auth/client';

export const { getSession } = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // the base url of your auth server
});
