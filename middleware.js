import { NextResponse } from 'next/server';

export function middleware(request) {
  console.log(request.url);
  return NextResponse.redirect(new URL('/blog/yayu_middleware', request.url));
}

export const config = {
  matcher: '/blog/yayu',
};
