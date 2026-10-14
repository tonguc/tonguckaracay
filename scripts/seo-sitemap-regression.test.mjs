import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import test from 'node:test';

const sitemap = readFileSync('app/sitemap.ts', 'utf8');
const privacy = readFileSync('app/[locale]/privacy-policy/page.tsx', 'utf8');
const terms = readFileSync('app/[locale]/terms-of-service/page.tsx', 'utf8');
const footer = readFileSync('components/Footer.tsx', 'utf8');

test('legal pages use canonical URLs backed by real routes and footer links', () => {
  for (const [slug, source] of [
    ['privacy-policy', privacy],
    ['terms-of-service', terms],
  ]) {
    assert.ok(existsSync(`app/[locale]/${slug}/page.tsx`));
    assert.match(source, new RegExp(`https://tonguckaracay\\.com/${slug}`));
    assert.match(source, new RegExp(`https://tonguckaracay\\.com/en/${slug}`));
    assert.match(footer, new RegExp(`privacy|terms`));
  }
  assert.doesNotMatch(privacy, /gizlilik-politikasi/);
  assert.doesNotMatch(terms, /kullanim-kosullari/);
});

test('sitemap lists both languages of legal URLs', () => {
  for (const path of ['privacy-policy', 'terms-of-service']) {
    assert.ok(sitemap.includes(`\${baseUrl}/${path}`));
    assert.ok(sitemap.includes(`\${baseUrl}/en/${path}`));
  }
});

test('sitemap derives lastmod from article metadata, not deployment time', () => {
  assert.match(sitemap, /getAllPosts\('tr'\)/);
  assert.match(sitemap, /getAllPosts\('en'\)/);
  assert.match(sitemap, /modifiedDate\(post\.updatedDate \|\| post\.date\)/);
  assert.doesNotMatch(sitemap, /lastModified:\s*now/);
  assert.doesNotMatch(sitemap, /const now\s*=\s*new Date/);
});
