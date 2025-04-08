import { betterFetch } from '@better-fetch/fetch';
import { type NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const { data: session } = await betterFetch('/api/auth/get-session', {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      cookie: request.headers.get('cookie') || '',
    },
  });
  console.log('🚧 | middleware | session:', session);
  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/upload/:path*',
    '/list/:path*',
    // NOTE: ユーザーの新規追加をしないので、 /sign-up は閉じる
    '/sign-up/:path*',
  ],
};
