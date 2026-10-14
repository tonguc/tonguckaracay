import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const middleware = readFileSync('middleware.ts', 'utf8');
const trContact = readFileSync('app/[locale]/iletisim/layout.tsx', 'utf8');
const enContact = readFileSync('app/[locale]/contact/layout.tsx', 'utf8');
const trAbout = readFileSync('app/[locale]/hakkimda/page.tsx', 'utf8');
const enAbout = readFileSync('app/[locale]/about/page.tsx', 'utf8');

test('canonical locale routes do not geo-redirect based on IP or cookies', () => {
  assert.match(middleware, /localeDetection:\s*false/);
  assert.doesNotMatch(middleware, /x-vercel-ip-country|request\.geo|NEXT_LOCALE/);
  assert.doesNotMatch(middleware, /preferredLocale|BOT_UA_REGEX/);
  assert.match(middleware, /return intlMiddleware\(request\)/);
});

test('existing wrong-language blog slug redirects remain in place', () => {
  assert.match(middleware, /slugMappingTrToEn\[enPrefixed\[1\]\]/);
  assert.match(middleware, /slugMappingEnToTr\[rootSingle\[1\]\]/);
});

test('contact pages have reciprocal language alternatives', () => {
  for (const page of [trContact, enContact]) {
    assert.match(page, /canonical:/);
    assert.match(page, /tr:\s*['"]https:\/\/tonguckaracay\.com\/iletisim['"]/);
    assert.match(page, /en:\s*['"]https:\/\/tonguckaracay\.com\/en\/contact['"]/);
  }
});

test('translated about pages retain separate canonical and locale guards', () => {
  assert.match(trAbout, /canonical:\s*["']https:\/\/tonguckaracay\.com\/hakkimda["']/);
  assert.match(enAbout, /canonical:\s*["']https:\/\/tonguckaracay\.com\/en\/about["']/);
  assert.match(trAbout, /locale !== "tr"/);
  assert.match(enAbout, /locale !== "en"/);
});
