import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const tr = readFileSync('app/[locale]/hizmetler/yapay-zeka-cozumleri/page.tsx', 'utf8');
const en = readFileSync('app/[locale]/services/ai-solutions/page.tsx', 'utf8');

for (const [source, required] of [
  [tr, [
    "KOBİ'ler İçin AI Otomasyon Danışmanlığı",
    "Bir süreç otomasyona uygun mu?",
    "Danışmanlık kapsamında",
    "KVKK uyumu tek bir araç özelliğiyle garanti edilemez",
  ]],
  [en, [
    'AI Automation Consulting for SMBs',
    'Is a process ready for automation?',
    'What does the consulting engagement',
    'GDPR compliance cannot be guaranteed by a tool setting alone',
  ]],
]) {
  for (const text of required) {
    assert.ok(source.includes(text), `Missing required consulting content: ${text}`);
  }
}

for (const [source, forbidden] of [
  [tr, ['%72', '~%80', '%60-70', '10.000-25.000 TL', 'KVKK uyumlu çözümler sunulur']],
  [en, ['72%', '~80%', '60-70%', '$500-1,500', 'GDPR-compliant solutions are available']],
]) {
  for (const text of forbidden) {
    assert.ok(!source.includes(text), `Unsupported legacy claim remains: ${text}`);
  }
}

console.log('AI automation consulting content fixtures passed for TR and EN.');
