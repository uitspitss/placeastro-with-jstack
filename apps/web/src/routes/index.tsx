import { Clipboard } from 'lucide-react';
import { useState } from 'react';
import { Gallery } from '../components/gallery';

export default function Landing() {
  const [copied, setCopied] = useState<number | null>(null);

  const codeSnippets = [
    'https://placeastro.u7s.dev/m/16',
    'https://placeastro.u7s.dev/m/42?w=720',
    'https://placeastro.u7s.dev/random?w=600&h=480',
    'https://placeastro.u7s.dev/m/74/info',
  ];
  const galleryUrls = ['/M/1', '/M/2', '/M/3'];

  const handleCopy = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text);
    setCopied(index);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <main className="min-h-screen w-full bg-black relative flex items-center justify-center">
      {/* Dark White Dotted Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: '#000000',
          backgroundImage: `
        radial-gradient(circle, rgba(255, 255, 255, 0.2) 1.5px, transparent 1.5px)
      `,
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0',
        }}
      />
      {/* Your Content/Components */}
      <div className="container px-6 flex flex-col lg:flex-row items-center justify-center gap-16 z-10">
        <div className="flex flex-col gap-8 max-w-[584px]">
          <div className="flex flex-col gap-5 md:gap-4 items-center">
            <h1 className="text-foreground text-5xl font-bold leading-[48px]">
              placeastro
            </h1>
            <p className="text-muted-foreground text-lg leading-7">
              Placeholder images of astrophotography
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {codeSnippets.map((snippet, index) => (
              <div
                key={snippet}
                className="flex items-center justify-between bg-muted text-foreground rounded px-2 py-1 w-full gap-8"
              >
                <code className="font-bold text-sm">{snippet}</code>
                <button
                  type="button"
                  className="cursor-pointer"
                  onClick={() => handleCopy(snippet, index)}
                >
                  {index === copied ? (
                    <p className="leading-0 text-sm text-accent-foreground animate-in fade-in">
                      Copied!
                    </p>
                  ) : (
                    <Clipboard className="h-4 w-4 animate-in fade-in" />
                  )}
                </button>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold leading-8 text-foreground">
              Added
            </h2>
            <p className="text-base font-normal leading-6 text-foreground">
              ・Messier (M1~5, M7~17, M19~20, M22, M27~28, M30~33, M42~45, M49,
              M51, M53~M72, M74~M92, M98~M102, M104~110)
            </p>
          </div>
        </div>
        <Gallery imageUrls={galleryUrls} />
      </div>
    </main>
  );
}
