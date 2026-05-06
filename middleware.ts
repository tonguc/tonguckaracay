import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from './i18n.config';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed'
});

// Crawler/bot detection — we must NOT geo-redirect search engine bots,
// otherwise Googlebot (US IP) sees TR canonicals as 301 → /en/... and
// indexing breaks (redirected page / soft 404 / not indexed).
const BOT_UA_REGEX = /(googlebot|bingbot|slurp|duckduckbot|baiduspider|yandex(bot)?|sogou|exabot|facebot|facebookexternalhit|ia_archiver|applebot|petalbot|gptbot|claudebot|claude-web|chatgpt-user|oai-searchbot|perplexitybot|google-extended|ccbot|meta-externalagent|amazonbot|bytespider|mj12bot|ahrefsbot|semrushbot|dotbot|rogerbot|screaming frog|lighthouse|chrome-lighthouse|google page speed|google-inspectiontool|google-read-aloud|googleother|googleweblight|google-site-verification|adsbot-google|mediapartners-google)/i;

function isBot(request: NextRequest): boolean {
  const ua = request.headers.get('user-agent') || '';
  return BOT_UA_REGEX.test(ua);
}

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

  // Bots: never geo-redirect. Serve canonical content so Google sees
  // / and /<tr-slug> as real pages, not as redirects to /en/*.
  if (isBot(request)) {
    return intlMiddleware(request);
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
