import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { Star } from 'lucide-react';

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <div className="relative min-h-screen">
      <div className="star-field" />
      <div className="nebula-glow" />
      <div className="grain-overlay" />

      <nav className="relative z-20 border-b border-border/50">
        <div className="mx-auto flex h-14 max-w-5xl items-center px-6">
          <Link
            to="/"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
          >
            <Star className="h-4 w-4 text-primary" />
            <span className="font-[family-name:var(--font-display)] text-xl font-semibold italic tracking-tight">
              placeastro
            </span>
          </Link>
        </div>
      </nav>

      <main className="relative z-10">
        <Outlet />
      </main>
    </div>
  );
}
