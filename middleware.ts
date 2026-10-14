import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from './i18n.config';
import { slugMappingTrToEn, slugMappingEnToTr } from './lib/slug-mappings';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
  localeDetection: false,
  // Disable next-intl's automatic HTTP Link hreflang header. It naively
  // copies the same slug into /en/, which is wrong for translated blog
  // posts (e.g. /seo-nedir-nasil-yapilir → /en/seo-nedir-nasil-yapilir
  // does not exist; the real EN slug is /en/what-is-seo-how-does-it-work).
  // Hreflang is emitted per-page from generateMetadata using slug-mappings.
  alternateLinks: false,
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  if (pathname.startsWith('/audit')) {
    return NextResponse.next();
  }

  // Raw static demo apps under public/demos/* must be served as-is, same
  // reasoning as /audit above - the intl middleware's geo-redirect would
  // otherwise rewrite e.g. /demos/finance-os/ to /en/demos/finance-os/,
  // which has no matching file and 404s (found live via curl testing).
  if (pathname.startsWith('/demos')) {
    return NextResponse.next();
  }

  if (
    pathname.startsWith('/_next') ||
    pathname.includes('/favicon') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Defense in depth: if a request lands on the wrong-locale URL for a
  // translated blog post (e.g. /en/<tr-slug> or /<en-slug>), 301 to the
  // correct localized slug. Handles stale backlinks and any leftover
  // crawler artifacts from when middleware emitted broken hreflang.
  const enPrefixed = pathname.match(/^\/en\/([^/]+)$/);
  if (enPrefixed && slugMappingTrToEn[enPrefixed[1]]) {
    return NextResponse.redirect(
      new URL(`/en/${slugMappingTrToEn[enPrefixed[1]]}`, request.url),
      { status: 301 }
    );
  }
  const rootSingle = pathname.match(/^\/([^/]+)$/);
  if (rootSingle && slugMappingEnToTr[rootSingle[1]]) {
    return NextResponse.redirect(
      new URL(`/${slugMappingEnToTr[rootSingle[1]]}`, request.url),
      { status: 301 }
    );
  }

  // Stable URLs: TR is unprefixed, EN is explicitly /en/.
  // Disable locale detection so geography, Accept-Language and cookies
  // never change an existing canonical URL.
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
