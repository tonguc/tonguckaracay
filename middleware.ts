import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from './i18n.config';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed' // TR için prefix yok, EN için /en/
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // API routes'u atla
  if (pathname.startsWith('/api')) {
    return NextResponse.next();
  }
  
  // Static files'ı atla
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('/favicon') ||
    pathname.includes('.') // dosya uzantısı varsa
  ) {
    return NextResponse.next();
  }

  // Geo-based locale detection (Vercel header)
  const country = request.geo?.country || request.headers.get('x-vercel-ip-country') || '';
  
  // Türkiye'den gelen kullanıcılar için TR, diğerleri için EN
  const preferredLocale = country === 'TR' ? 'tr' : 'en';
  
  // Cookie'de dil tercihi varsa onu kullan
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  
  // Eğer kullanıcı daha önce dil seçtiyse, cookie'deki değeri kullan
  if (cookieLocale && locales.includes(cookieLocale as any)) {
    return intlMiddleware(request);
  }
  
  // İlk ziyarette geo-based yönlendirme
  // Eğer pathname'de locale yoksa ve kullanıcı Türkiye'den değilse
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (!pathnameHasLocale && preferredLocale === 'en') {
    // İngilizce için yönlendir
    const url = new URL(`/en${pathname}`, request.url);
    const response = NextResponse.redirect(url);
    response.cookies.set('NEXT_LOCALE', 'en', { maxAge: 60 * 60 * 24 * 365 });
    return response;
  }
  
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
