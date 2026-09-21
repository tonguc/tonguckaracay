import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import matter from 'gray-matter';

const pages = [
  'content/blog/en/geo-targeted-content-optimization-checklist.md',
  'content/blog/tr/geo-checklist-turkce-icerik-optimizasyonu.md',
];

for (const file of pages) {
  const source = readFileSync(resolve(file), 'utf8');
  const parsed = matter(source);

  assert.equal(parsed.data.date, '2026-09-21', `${file} must expose the material-update date`);
  assert.ok(Array.isArray(parsed.data.faq) && parsed.data.faq.length >= 5, `${file} must preserve FAQ schema content`);
  assert.ok((source.match(/^\|.+\|$/gm) ?? []).length >= 20, `${file} must contain semantic Markdown tables`);
  assert.match(source, /21 Eylül 2026|September 21, 2026/, `${file} must show the review marker`);

  for (const primarySource of [
    'developers.google.com/search/docs/appearance/ai-features',
    'developers.google.com/search/docs/fundamentals/ai-optimization-guide',
    'developers.openai.com/api/docs/bots',
    'docs.perplexity.ai/docs/resources/perplexity-crawlers',
    'arxiv.org/abs/2311.09735',
  ]) {
    assert.match(source, new RegExp(primarySource.replaceAll('.', '\\.')), `${file} must link ${primarySource}`);
  }

  assert.match(source, /baseline/i, `${file} must disclose the baseline requirement`);
  assert.match(source, /guarantee|garanti/i, `${file} must state the non-guarantee boundary`);
  assert.match(source, /initial HTML|ilk HTML/i, `${file} must require server-visible core content`);
  assert.doesNotMatch(
    source,
    /müşterilerimiz|müşterimizin|müşterimizde|danışmanlık projelerinde|client implementations|consulting engagements|our client work|client accounts|when we deployed/i,
    `${file} must not present undocumented first-party outcomes`,
  );
  assert.doesNotMatch(source, /\$\s?\d|\d+(?:[.,]\d+)?\s?%/, `${file} must not publish unsupported prices or percentages`);
  assert.doesNotMatch(
    source,
    /quarterly at minimum|every 3-6 months|her 3-6 ay|ideal (?:length|uzunluk)|1[,.]?200\s*(?:-|to)\s*2[,.]?000|50\+ geo-queries|50\+ coğrafi/i,
    `${file} must not impose unsupported universal cadence, length, or prompt-count rules`,
  );
  assert.doesNotMatch(
    source,
    /\b(?:delve|seamless(?:ly)?|groundbreaking|revolutionary|game-changer|tapestry|plethora|myriad)\b|in conclusion|it is important to note/i,
    `${file} must pass the blocking machine-tell language check`,
  );
}

console.log('Claim-hygiene fixtures passed for the matched English and Turkish GEO checklist pages.');
