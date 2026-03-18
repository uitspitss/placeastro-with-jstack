import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './globals.css';
import { routeTree } from './routeTree.gen';

if (import.meta.env.DEV) {
  import('react-scan').then(({ scan }) => {
    scan({ enabled: true });
  });
}

const basepath = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';
const router = createRouter({ routeTree, basepath });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
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
