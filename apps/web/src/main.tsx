import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from '@tanstack/react-router';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ThemeProvider } from '@/components/theme-provider';
import { router } from '@/router';
import './globals.css';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (err) => {
      console.error('Query error:', err);
    },
  }),
});

const rootElement = document.getElementById('root')!;
createRoot(rootElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
      >
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
