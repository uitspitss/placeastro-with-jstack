'use client';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';
import { Clipboard } from 'lucide-react';
import { useState } from 'react';
import { Gallery } from './components/gallery';

export default function Landing() {
  const [copied, setCopied] = useState<number | null>(null);

  const codeSnippets = [
    'https://placeastro.u7s.dev/m/16',
    'https://placeastro.u7s.dev/m/42?w=720',
    'https://placeastro.u7s.dev/random?w=600&h=480',
  ];
  const galleryUrls = ['/M/1', '/M/2', '/M/3'];

  const handleCopy = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text);
    setCopied(index);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="bg-background min-h-screen flex items-center justify-center">
      <div className="container px-6 flex flex-col lg:flex-row items-center justify-center gap-16">
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
                <TooltipProvider>
                  <Tooltip open={copied === index} delayDuration={0}>
                    <TooltipTrigger asChild>
                      <button
                        type="button"
                        className="cursor-pointer"
                        onClick={() => handleCopy(snippet, index)}
                      >
                        <Clipboard className="h-4 w-4" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent
                      className="bg-muted p-1 rounded border"
                      sideOffset={3}
                    >
                      <p>copied!</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            ))}
          </div>
        </div>
        <Gallery imageUrls={galleryUrls} />
      </div>
    </div>
  );
}
