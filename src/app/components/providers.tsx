'use client';

import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { HTTPException } from 'hono/http-exception';
import { type PropsWithChildren, useState } from 'react';

export const Providers = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: (err) => {
            if (err instanceof HTTPException) {
              // global error handling, e.g. toast notification ...
              console.error('HTTP error:', err);
            }
            if (err instanceof Error) {
              // global error handling, e.g. toast notification ...
              console.error('Error:', err);
            }
          },
        }),
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
