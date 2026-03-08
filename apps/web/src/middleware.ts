import { headers } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';
import { getSession } from './lib/auth-client-server';

export async function middleware(request: NextRequest) {
  const { data: session } = await getSession({
    fetchOptions: {
      headers: await headers(),
    },
  });

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
