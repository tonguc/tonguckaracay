import assert from 'node:assert/strict';
import {readFileSync, existsSync} from 'node:fs';
import test from 'node:test';

const pairs = JSON.parse(readFileSync('lib/locale-route-pairs.json', 'utf8'));
const middleware = readFileSync('middleware.ts', 'utf8');
const robots = readFileSync('public/robots.txt', 'utf8');

test('Googlebot can fetch Next.js static render assets', () => {
  assert.doesNotMatch(robots, /Disallow:\s*\/_next\//);
  assert.match(robots, /Sitemap:\s*https:\/\/tonguckaracay\.com\/sitemap\.xml/);
  assert.match(robots, /Disallow:\s*\/api\//);
});

test('all locale route pairs exist and aliases cannot collide or loop', () => {
  const canonical = new Set();
  const aliases = new Map();
  assert.ok(pairs.length >= 12, 'Expected all bilingual service and core page pairs');
  for (const [tr, en] of pairs) {
    assert.match(tr, /^\/(?!en\/)[a-z0-9/-]+$/);
    assert.match(en, /^\/en\/[a-z0-9/-]+$/);
    assert.notEqual(tr, en.slice(3));
    assert.ok(existsSync(`app/[locale]/${tr.slice(1)}/page.tsx`), `Missing TR page: ${tr}`);
    assert.ok(existsSync(`app/[locale]/${en.slice(4)}/page.tsx`), `Missing EN page: ${en}`);
    assert.ok(!canonical.has(tr) && !canonical.has(en), `Duplicate canonical ${tr} / ${en}`);
    canonical.add(tr);
    canonical.add(en);
    for (const [wrong, correct] of [[`/en${tr}`, en], [en.slice(3), tr]]) {
      assert.ok(!aliases.has(wrong), `Duplicate alias: ${wrong}`);
      assert.notEqual(wrong, correct);
      aliases.set(wrong, correct);
    }
  }
  for (const [wrong, correct] of aliases) {
    assert.ok(!canonical.has(wrong), `Alias collides with canonical: ${wrong}`);
    assert.ok(!aliases.has(correct), `Redirect chain/cycle: ${wrong} -> ${correct}`);
  }
  assert.equal(aliases.get('/en/hakkimda'), '/en/about');
  assert.equal(aliases.get('/about'), '/hakkimda');
  assert.equal(aliases.get('/en/hizmetler/seo-danismanligi'), '/en/services/seo-consulting');
  assert.equal(aliases.get('/services/seo-consulting'), '/hizmetler/seo-danismanligi');
  assert.equal(aliases.get('/en/ai-egitimi'), '/en/ai-training');
});

test('middleware keeps existing blog slug redirects and stable locale routing', () => {
  assert.match(middleware, /import localeRoutePairs from/);
  assert.match(middleware, /target\.pathname = destination/);
  assert.match(middleware, /NextResponse\.redirect\(target, \{ status: 301 \}\)/);
  assert.match(middleware, /slugMappingTrToEn/);
  assert.match(middleware, /slugMappingEnToTr/);
  assert.match(middleware, /localeDetection:\s*false/);
});
