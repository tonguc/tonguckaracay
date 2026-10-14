import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import test from 'node:test';

const localeLayout = readFileSync('app/[locale]/layout.tsx', 'utf8');
const auditLayout = readFileSync('app/[locale]/audit/layout.tsx', 'utf8');
const auditPage = readFileSync('app/[locale]/audit/page.tsx', 'utf8');
const blogPage = readFileSync('app/[locale]/blog/page.tsx', 'utf8');
const sitemap = readFileSync('app/sitemap.ts', 'utf8');

test('structured data never advertises a nonfunctional blog search', () => {
  assert.doesNotMatch(localeLayout, /\"@type\": \"SearchAction\"|search_term_string|urlTemplate/);
  assert.match(localeLayout, /"@type": "WebSite"/);
  assert.doesNotMatch(blogPage, /searchParams\.q|searchParams\['q'\]/);
});

test('placeholder audit screen is explicitly not indexable', () => {
  assert.match(auditPage, /auditflow ✓/);
  assert.match(auditLayout, /robots:\s*\{\s*index:\s*false,\s*follow:\s*false\s*\}/);
  assert.doesNotMatch(sitemap, /\${baseUrl}\/audit/);
  assert.doesNotMatch(sitemap, /\${baseUrl}\/en\/audit/);
});
