import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname === '/api/hello') {
    console.log('Interceptada /api/hello');
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
