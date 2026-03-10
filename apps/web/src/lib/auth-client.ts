import { createAuthClient } from 'better-auth/react';

export const { signUp, signIn, signOut, useSession, getSession } =
  createAuthClient({
    baseURL: import.meta.env.VITE_API_URL ?? '',
  });
