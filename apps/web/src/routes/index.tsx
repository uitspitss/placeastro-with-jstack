import { Gallery } from '@/components/gallery';
import { createFileRoute } from '@tanstack/react-router';
import { Check, Clipboard } from 'lucide-react';
import { useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL ?? '';

export const Route = createFileRoute('/')({
  component: Landing,
});

const endpoints = [
  {
    url: 'https://placeastro.u7s.dev/m/16',
    label: 'Get Messier 16 (Eagle Nebula)',
  },
  {
    url: 'https://placeastro.u7s.dev/m/42?w=720',
    label: 'With width parameter',
  },
  {
    url: 'https://placeastro.u7s.dev/random?w=600&h=480',
    label: 'Random image with dimensions',
  },
  {
    url: 'https://placeastro.u7s.dev/m/74/info',
    label: 'Get image metadata',
  },
];

const catalogs = [
  { range: 'M1–M5', name: 'Crab to Pinwheel' },
  { range: 'M7–M17', name: 'Ptolemy to Omega' },
  { range: 'M19–M20', name: 'to Trifid' },
  { range: 'M22, M27–M28', name: 'Sagittarius to Dumbbell' },
  { range: 'M30–M33', name: 'to Triangulum' },
  { range: 'M42–M45', name: 'Orion to Pleiades' },
  { range: 'M49, M51', name: 'Virgo A & Whirlpool' },
  { range: 'M53–M72', name: 'Globulars & more' },
  { range: 'M74–M92', name: 'Phantom to Hercules' },
  { range: 'M98–M102', name: 'Coma to Spindle' },
  { range: 'M104–M110', name: 'Sombrero to beyond' },
];

function Landing() {
  const [copied, setCopied] = useState<number | null>(null);
  const galleryUrls = [`${API_URL}/m/1`, `${API_URL}/m/2`, `${API_URL}/m/3`];

  const handleCopy = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center px-6 py-20">
        <div className="flex w-full max-w-5xl flex-col items-center gap-20 lg:flex-row lg:items-center lg:justify-between">
          {/* Left: Text content */}
          <div className="flex max-w-lg flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h1 className="font-[family-name:var(--font-display)] text-6xl font-bold italic leading-none tracking-tight sm:text-7xl">
                placeastro
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Placeholder images from the cosmos.{' '}
                <span className="text-foreground/70">
                  Messier & NGC catalog astrophotography, served as responsive
                  images for your projects.
                </span>
              </p>
            </div>

            {/* API Endpoints */}
            <div className="flex flex-col gap-2">
              <h2 className="mb-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Endpoints
              </h2>
              {endpoints.map((endpoint, index) => (
                <div
                  key={endpoint.url}
                  className="code-card group rounded-lg px-4 py-3"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex min-w-0 flex-col gap-1">
                      <code className="font-[family-name:var(--font-mono)] text-sm font-medium text-foreground/90">
                        {endpoint.url}
                      </code>
                      <span className="text-xs text-muted-foreground">
                        {endpoint.label}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(endpoint.url, index)}
                      className="mt-0.5 shrink-0 cursor-pointer rounded p-1 text-muted-foreground transition-colors hover:text-primary"
                      aria-label="Copy URL"
                    >
                      {index === copied ? (
                        <Check className="h-3.5 w-3.5 text-primary" />
                      ) : (
                        <Clipboard className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick usage */}
            <div className="code-card rounded-lg px-4 py-3">
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Usage
              </p>
              <code className="font-[family-name:var(--font-mono)] text-sm leading-relaxed text-primary">
                {'<img src="https://placeastro.u7s.dev/m/42?w=400" />'}
              </code>
            </div>
          </div>

          {/* Right: Gallery */}
          <div className="flex flex-col items-center gap-6">
            <Gallery imageUrls={galleryUrls} />
            <p className="text-center font-[family-name:var(--font-mono)] text-xs text-muted-foreground">
              Auto-rotating Messier catalog
            </p>
          </div>
        </div>
      </section>

      {/* Catalog section */}
      <section className="border-t border-border/50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 flex flex-col gap-2">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold italic tracking-tight">
              Available Catalogs
            </h2>
            <p className="text-sm text-muted-foreground">
              Messier objects currently indexed and served
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {catalogs.map((cat) => (
              <div
                key={cat.range}
                className="code-card flex flex-col gap-1 rounded-lg px-4 py-3"
              >
                <span className="font-[family-name:var(--font-mono)] text-sm font-semibold text-primary">
                  {cat.range}
                </span>
                <span className="text-xs text-muted-foreground">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 px-6 py-8">
        <div className="mx-auto flex max-w-5xl items-center">
          <span className="font-[family-name:var(--font-display)] text-sm italic text-muted-foreground">
            placeastro
          </span>
        </div>
      </footer>
    </div>
  );
}
