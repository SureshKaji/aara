import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Redirect all requests to root ('/') to '/home'
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/home', request.url))
  }

  // Redirect any requests that contain '/admin' to '/admin/login'
  // if (pathname.startsWith('/admin')) {
  //   return NextResponse.redirect(new URL('/login', request.url))
  // }

  // Continue with the next middleware or return the response for non-matching paths
  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/admin'],
}
