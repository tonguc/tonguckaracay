import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const pages = [
  {
    file: 'content/blog/tr/hasta-takip-hatirlatma-ai-agent-kurulumu.md',
    update: '20 Eylül 2026 güncellemesi',
  },
  {
    file: 'content/blog/en/ai-agent-patient-follow-up-appointment-reminders.md',
    update: 'Updated September 20, 2026',
  },
];

for (const page of pages) {
  const source = readFileSync(resolve(page.file), 'utf8');

  assert.match(source, new RegExp(page.update), `${page.file} must show its material update date`);
  assert.match(source, /\|[^\n]+\|[^\n]+\|[^\n]+\|/, `${page.file} must use a real Markdown table`);
  assert.match(source, /https:\/\/www\.kvkk\.gov\.tr\/Icerik\/2051\//, `${page.file} must link the official health-data classification`);
  assert.match(source, /https:\/\/www\.kvkk\.gov\.tr\/Icerik\/8184\//, `${page.file} must link the official processing guide`);
  assert.doesNotMatch(source, /\d+(?:[.,]\d+)?\s?%/, `${page.file} must not publish unsupported outcome percentages`);
  assert.doesNotMatch(source, /\$\s?\d|\d[\d.,]*\s?TL\b/, `${page.file} must not publish unverified fixed prices`);
}

const tr = readFileSync(resolve(pages[0].file), 'utf8');
assert.match(tr, /tıbbi veya hukuki danışmanlık\s+değildir/i);
assert.match(tr, /Teşhis, tedavi önerisi, ilaç dozu/);

const en = readFileSync(resolve(pages[1].file), 'utf8');
assert.match(en, /not medical or\s+legal advice/i);
assert.match(en, /Diagnosis, treatment advice, medication changes/);
assert.doesNotMatch(en, /NextLevel\.ai|Archiz Solutions|Beam\.ai|Droidal\.ai/);

console.log('Healthcare content claim-hygiene fixtures passed for TR and EN.');
