import { type NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/session`, {
    headers: request.headers,
  });
  if (!res.ok) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  const session = await res.json();
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
