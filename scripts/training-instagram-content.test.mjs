import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const trainingPages = [
  'content/blog/tr/kobi-yapay-zeka-egitim-programi.md',
  'content/blog/en/ai-tools-small-business-owners-training.md',
];

const instagramPages = [
  'content/blog/tr/claude-mcp-instagram-icerik-takvimi-otomasyonu.md',
  'content/blog/en/automate-instagram-content-calendar-claude-mcp.md',
];

for (const file of trainingPages) {
  const source = readFileSync(resolve(file), 'utf8');
  assert.match(source, /20 Eylül 2026|September 20, 2026/, `${file} must show a material update date`);
  assert.match(source, /NIST AI Risk Management Framework/, `${file} must cite a primary risk framework`);
  assert.match(source, /başlangıç medyanı|baseline median/, `${file} must contain a reproducible time formula`);
  assert.match(source, /İnsan düzeltme süresi|Human editing time/, `${file} must count human review effort`);
  assert.ok((source.match(/^\|.+\|$/gm) ?? []).length >= 10, `${file} must contain semantic Markdown tables`);
  assert.doesNotMatch(source, /%68|68%|%40-60|40-60%|%55|55%/, `${file} must not retain unsupported performance claims`);
  assert.doesNotMatch(source, /Müşterilerimizde|danışmanlık projelerinde|we've observed|consulting projects/i, `${file} must not present undocumented client results`);
}

for (const file of instagramPages) {
  const source = readFileSync(resolve(file), 'utf8');
  assert.match(source, /20 Eylül 2026|September 20, 2026/, `${file} must show a material update date`);
  assert.match(source, /https:\/\/modelcontextprotocol\.io\/docs\/getting-started\/intro/, `${file} must cite official MCP documentation`);
  assert.match(source, /https:\/\/code\.claude\.com\/docs\/en\/mcp/, `${file} must cite official Claude MCP documentation`);
  assert.match(source, /https:\/\/developers\.facebook\.com\/docs\/instagram-platform\/content-publishing\//, `${file} must cite official Meta publishing documentation`);
  assert.match(source, /model kullanımı \+ MCP\/sunucu|model usage \+ MCP\/server/, `${file} must contain a complete cost formula`);
  assert.match(source, /insan onayı|human approval/i, `${file} must require human approval`);
  assert.ok((source.match(/^\|.+\|$/gm) ?? []).length >= 15, `${file} must contain semantic Markdown tables`);
  assert.doesNotMatch(source, /%60-80|60-80%|%70-80|70-80%|%80|80%|\$\s?\d/, `${file} must not retain unsupported savings or fixed prices`);
  assert.doesNotMatch(source, /Müşterilerimizde|danışmanlık projelerinde|client implementations|consulting implementations/i, `${file} must not present undocumented client results`);
}

console.log('Training and Instagram claim-hygiene fixtures passed for TR and EN.');
