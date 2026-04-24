import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from './i18n.config';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed'
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  if (pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  if (pathname.startsWith('/audit')) {
    return NextResponse.next();
  }
  
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('/favicon') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  const country = request.geo?.country || request.headers.get('x-vercel-ip-country') || '';
  const preferredLocale = country === 'TR' ? 'tr' : 'en';
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  
  if (cookieLocale && locales.includes(cookieLocale as any)) {
    return intlMiddleware(request);
  }
  
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (!pathnameHasLocale && preferredLocale === 'en') {
    const url = new URL(`/en${pathname}`, request.url);
    const response = NextResponse.redirect(url, { status: 301 });
    response.cookies.set('NEXT_LOCALE', 'en', { maxAge: 60 * 60 * 24 * 365 });
    return response;
  }
  
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
