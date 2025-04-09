import { cn } from '@/lib/utils';
import Image from 'next/image';
import { CopyToClipboard } from './components/copy-to-clipboard';

export default async function Home() {
  return (
    <main className="flex min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 flex-col items-center justify-center relative isolate">
      <div className="absolute inset-0 -z-10 opacity-50 mix-blend-soft-light bg-[url('/noise.svg')] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />
      <div className="container flex flex-col items-center justify-center gap-6 px-4 py-16">
        <div className="flex-col justify-start items-center flex">
          <h1 className="text-[#dcd879] text-5xl font-bold font-['Nunito']">
            PLACEASTRO
          </h1>
          <div className="text-white text-base font-bold font-['Nunito']">
            Placeholder images of astrophotography
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-3 flex">
          <div className="flex-col justify-start items-start gap-1 flex">
            <div className="text-white text-xl font-bold">🗒️ Examples</div>
            <ul className={cn('text-white text-xs font-normal space-y-1')}>
              <li className="bg-gray-950 px-4 py-1 rounded flex items-center justify-between">
                <span>https://placeastro.u7s.dev/m/16</span>
                <CopyToClipboard text="https://placeastro.u7s.dev/m/16" />
              </li>
              <li className="bg-gray-950 px-4 py-1 rounded flex items-center justify-between">
                <span>https://placeastro.u7s.dev/m/42?w=720</span>
                <CopyToClipboard text="https://placeastro.u7s.dev/m/42?w=720" />
              </li>
              <li className="bg-gray-950 px-4 py-1 rounded flex items-center justify-between">
                <span>https://placeastro.u7s.dev/random?w=600&h=480</span>
                <CopyToClipboard text="https://placeastro.u7s.dev/random?w=600&h=480" />
              </li>
            </ul>
          </div>
          <div className="flex-col justify-start items-start flex gap-1">
            <div className="text-white text-xl font-bold">✅ Done</div>
            <div className="w-72 h-11 text-white text-sm font-bold">
              Messier (M1~5, M7~17, M19~20, M22, M27~28, M30~33, M42~45, M49,
              M51, M53~M72, M74~M92, M98~M102, M104~110)
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/M/1?w=400&h=400"
        alt="place image example"
        width={400}
        height={400}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lPAAAAABJRU5ErkJggg=="
      />
    </main>
  );
}
