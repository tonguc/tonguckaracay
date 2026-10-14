import assert from 'node:assert/strict';
import {readFileSync, readdirSync} from 'node:fs';
import test from 'node:test';
import matter from 'gray-matter';

const mappingsSource = readFileSync('lib/slug-mappings.ts', 'utf8');
const pairs = [...mappingsSource.matchAll(/^\s*"([^"]+)": "([^"]+)",?$/gm)]
  .map((match) => [match[1], match[2]]);
const trToEn = new Map(pairs);
const enToTr = new Map(pairs.map(([tr, en]) => [en, tr]));

function posts(locale) {
  const path = `content/blog/${locale}`;
  return new Map(readdirSync(path)
    .filter((name) => name.endsWith('.md'))
    .map((name) => {
      const {data} = matter(readFileSync(`${path}/${name}`, 'utf8'));
      return [data.slug || name.slice(0, -3), data];
    }));
}

test('each TR/EN translation has an existing, reciprocal post', () => {
  const tr = posts('tr');
  const en = posts('en');
  assert.equal(trToEn.size, pairs.length, 'Duplicate Turkish slug key');
  assert.equal(enToTr.size, pairs.length, 'Duplicate English slug target');
  for (const [trSlug, enSlug] of pairs) {
    assert.ok(tr.has(trSlug), `Missing TR post: ${trSlug}`);
    assert.ok(en.has(enSlug), `Missing EN post: ${enSlug}`);
    assert.equal(tr.get(trSlug).translationSlug, enSlug, `Bad TR translation metadata: ${trSlug}`);
    assert.equal(en.get(enSlug).translationSlug, trSlug, `Bad EN translation metadata: ${enSlug}`);
  }
  for (const slug of tr.keys()) assert.ok(trToEn.has(slug), `Unmapped TR post: ${slug}`);
  for (const slug of en.keys()) assert.ok(enToTr.has(slug), `Unmapped EN post: ${slug}`);
});

test('blog root listings expose reciprocal locale metadata', () => {
  const blog = readFileSync('app/[locale]/blog/page.tsx', 'utf8');
  assert.match(blog, /view === 'all' && currentPage === 1/);
  assert.match(blog, /tr:\s*'https:\/\/tonguckaracay\.com\/blog'/);
  assert.match(blog, /en:\s*'https:\/\/tonguckaracay\.com\/en\/blog'/);
});

test('unmapped article slugs never become invented hreflang URLs', () => {
  const article = readFileSync('app/[locale]/[slug]/page.tsx', 'utf8');
  assert.match(article, /slugMappingTrToEn\[slug\] \?\? null/);
  assert.match(article, /slugMappingEnToTr\[slug\] \?\? null/);
  assert.doesNotMatch(article, /slugMappingTrToEn\[slug\] \?\? slug/);
  assert.doesNotMatch(article, /slugMappingEnToTr\[slug\] \?\? slug/);
});
