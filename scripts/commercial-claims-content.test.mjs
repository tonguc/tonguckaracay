import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import matter from 'gray-matter';

const tokenPages = [
  'content/blog/tr/claude-gpt-4-token-maliyet-karsilastirmasi.md',
  'content/blog/en/claude-gpt-4-token-cost-comparison.md',
];

const adsPages = [
  'content/blog/tr/google-ads-kampanya-optimizasyonu-rehberi.md',
  'content/blog/en/google-ads-campaign-optimization-guide.md',
];

for (const file of [...tokenPages, ...adsPages]) {
  const source = readFileSync(resolve(file), 'utf8');
  const parsed = matter(source);

  assert.equal(parsed.data.date, '2026-09-21', `${file} must expose the material-update date`);
  assert.ok(Array.isArray(parsed.data.faq) && parsed.data.faq.length >= 5, `${file} must preserve FAQ schema content`);
  assert.ok((source.match(/^\|.+\|$/gm) ?? []).length >= 12, `${file} must contain semantic Markdown tables`);
  assert.match(source, /21 Eylül 2026|September 21, 2026/, `${file} must show the update marker`);
  assert.doesNotMatch(
    source,
    /müşterilerimiz|müşterimizin|müşterimizde|müşteri portföyümüzde|danışmanlık projelerinde|client implementations|consulting engagements|our client work|client accounts|client campaigns|one e-commerce client|when we deployed/i,
    `${file} must not present undocumented first-party outcomes`,
  );
}

for (const file of tokenPages) {
  const source = readFileSync(resolve(file), 'utf8');
  assert.match(source, /https:\/\/developers\.openai\.com\/api\/docs\/pricing/, `${file} must cite official OpenAI pricing`);
  assert.match(source, /https:\/\/platform\.claude\.com\/docs\/en\/about-claude\/pricing/, `${file} must cite official Anthropic pricing`);
  assert.match(source, /https:\/\/ai\.google\.dev\/gemini-api\/docs\/pricing/, `${file} must cite official Gemini pricing`);
  assert.match(source, /kabul edilmiş görev başına|cost per accepted task/i, `${file} must use accepted-task total cost`);
  assert.doesNotMatch(source, /\$\s?\d|\d+(?:[.,]\d+)?\s?%/, `${file} must not freeze volatile prices or unsupported percentages`);
}

for (const file of adsPages) {
  const source = readFileSync(resolve(file), 'utf8');
  assert.match(source, /https:\/\/support\.google\.com\/google-ads\/answer\/9061547/, `${file} must cite optimization-score documentation`);
  assert.match(source, /https:\/\/support\.google\.com\/google-ads\/answer\/7281575/, `${file} must cite Google Ads experiments guidance`);
  assert.match(source, /https:\/\/support\.google\.com\/google-ads\/answer\/11461796/, `${file} must cite primary and secondary conversion guidance`);
  assert.match(source, /tek değişken|one-variable/i, `${file} must isolate the experiment variable`);
  assert.doesNotMatch(source, /\d+(?:[.,]\d+)?\s?%/, `${file} must not publish unsupported performance percentages`);
}

console.log('Commercial claim-hygiene fixtures passed for token-cost and Google Ads TR/EN pairs.');
