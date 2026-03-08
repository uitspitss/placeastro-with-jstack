import type { Metadata } from 'next';
import { Providers } from '@/components/providers';

import './globals.css';

export const metadata: Metadata = {
  title: 'placeastro',
  description: 'placeholder images with astro images',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
