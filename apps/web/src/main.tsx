import { router } from '@/router';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './globals.css';

if (import.meta.env.DEV) {
  import('react-scan').then(({ scan }) => {
    scan({ enabled: true });
  });
}

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (err) => {
      console.error('Query error:', err);
    },
  }),
});

const rootElement = document.getElementById('root') as HTMLElement;
createRoot(rootElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
