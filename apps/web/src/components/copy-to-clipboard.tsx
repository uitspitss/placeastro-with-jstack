'use client';

import { ClipboardIcon } from '@heroicons/react/24/outline';
import { useCopyToClipboard } from 'usehooks-ts';

export const CopyToClipboard = ({ text }: { text: string }) => {
  const [, copy] = useCopyToClipboard();

  return <ClipboardIcon className="size-4" onClick={() => copy(text)} />;
};
