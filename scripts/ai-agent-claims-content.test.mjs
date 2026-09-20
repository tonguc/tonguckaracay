import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const pages = [
  'content/blog/tr/ai-agent-musteri-hizmetleri-otomasyonu.md',
  'content/blog/en/ai-agent-customer-service-automation.md',
  'content/blog/tr/ai-agent-nedir-dijital-pazarlamada-nasil-kullanilir.md',
  'content/blog/en/what-is-ai-agent-digital-marketing-guide.md',
];

for (const file of pages) {
  const source = readFileSync(resolve(file), 'utf8');
  assert.match(source, /20 Eylül 2026|September 20, 2026/, `${file} must contain a visible material-update date`);
  assert.match(source, /https:\/\/developers\.openai\.com\/api\/docs\/guides\/agents/, `${file} must cite current official agent documentation`);
  assert.match(source, /https:\/\/www\.nist\.gov\/itl\/ai-risk-management-framework/, `${file} must cite an official risk framework`);
  assert.match(source, /https:\/\/www\.kvkk\.gov\.tr\/Icerik\/8547\//, `${file} must cite the current official KVKK guide`);
  assert.match(source, /insan (devri|onayı)|human (handoff|approval)/i, `${file} must define a human control`);
  assert.match(source, /görev başı|per accepted task|cost per accepted task/i, `${file} must define task-level cost measurement`);
  assert.ok((source.match(/^\|.+\|$/gm) ?? []).length >= 12, `${file} must contain semantic Markdown tables`);
  assert.doesNotMatch(source, /Müşterilerimizde|müşterilerimiz için|danışmanlık projelerinde|client implementations|consulting projects|we've observed|we've found/i, `${file} must not present undocumented client results`);
  assert.doesNotMatch(source, /%\s?\d|\d+(?:[.,]\d+)?\s?%|\$\s?\d/, `${file} must not publish unsupported percentage or fixed-price claims`);
}

const marketing = pages.slice(2).map((file) => readFileSync(resolve(file), 'utf8'));
for (const source of marketing) {
  assert.match(source, /https:\/\/developers\.google\.com\/google-ads\/api\/docs\/best-practices\/overview/, 'Marketing guide must cite official Google Ads test guidance');
}

console.log('AI-agent claim-hygiene fixtures passed for two TR/EN page pairs.');
