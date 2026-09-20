import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const pages = [
  {
    file: 'content/blog/tr/musteri-hizmetleri-chatbotunda-token-maliyetini-dusuren-ayarlamalar.md',
    update: '20 Eylül 2026 güncellemesi',
  },
  {
    file: 'content/blog/en/how-to-reduce-token-costs-in-customer-service-chatbots.md',
    update: 'Updated September 20, 2026',
  },
];

for (const page of pages) {
  const source = readFileSync(resolve(page.file), 'utf8');

  assert.match(source, new RegExp(page.update), `${page.file} must show a material update date`);
  assert.match(source, /https:\/\/developers\.openai\.com\/api\/docs\/models/, `${page.file} must link current OpenAI model pricing`);
  assert.match(source, /https:\/\/platform\.claude\.com\/docs\/en\/about-claude\/pricing/, `${page.file} must link current Anthropic pricing`);
  assert.match(source, /https:\/\/ai\.google\.dev\/gemini-api\/docs\/pricing/, `${page.file} must link current Gemini pricing`);
  assert.ok((source.match(/^\|.+\|$/gm) ?? []).length >= 12, `${page.file} must contain semantic Markdown tables`);
  assert.doesNotMatch(source, /\d+(?:[.,]\d+)?\s?%/, `${page.file} must not publish unsupported percentage claims`);
  assert.doesNotMatch(source, /\$\s?\d|\d[\d.,]*\s?TL\b/, `${page.file} must not freeze unverified prices`);
  assert.doesNotMatch(source, /GPT-4 Turbo|GPT-4o-mini|Claude 3\.5|Gemini 1\.5/, `${page.file} must not retain stale model comparisons`);
}

const tr = readFileSync(resolve(pages[0].file), 'utf8');
assert.match(tr, /tamamlanan görevin toplam maliyeti/i);
assert.doesNotMatch(tr, /Danışmanlık projelerimizde|Müşterilerimizde test ettiğimizde/);

const en = readFileSync(resolve(pages[1].file), 'utf8');
assert.match(en, /total cost per accepted completed task/i);
assert.doesNotMatch(en, /we've seen|one client's|across consulting engagements/i);

console.log('Token-cost content claim-hygiene fixtures passed for TR and EN.');
