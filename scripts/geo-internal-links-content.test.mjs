import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const read = (file) => readFileSync(resolve(file), 'utf8');

const serviceTrainingPairs = [
  {
    service: 'app/[locale]/hizmetler/yapay-zeka-cozumleri/page.tsx',
    training: 'app/[locale]/ai-egitimi/page.tsx',
    servicePath: '/hizmetler/yapay-zeka-cozumleri',
    trainingPath: '/ai-egitimi',
    decisionCopy: /Danışmanlık mı, AI eğitimi mi\?|Eğitim mi, danışmanlık mı\?/,
  },
  {
    service: 'app/[locale]/services/ai-solutions/page.tsx',
    training: 'app/[locale]/ai-training/page.tsx',
    servicePath: '/en/services/ai-solutions',
    trainingPath: '/en/ai-training',
    decisionCopy: /Consulting or AI training\?|Training or consulting\?/,
  },
];

for (const pair of serviceTrainingPairs) {
  const service = read(pair.service);
  const training = read(pair.training);

  assert.ok(service.includes(`href="${pair.trainingPath}"`), `${pair.service} must link directly to training`);
  assert.ok(training.includes(`href="${pair.servicePath}"`), `${pair.training} must link directly to consulting`);
  assert.match(service, pair.decisionCopy, `${pair.service} must explain the choice`);
  assert.match(training, pair.decisionCopy, `${pair.training} must explain the choice`);
}

const articlePairs = [
  ['content/blog/tr/ai-agent-musteri-hizmetleri-otomasyonu.md', '/hizmetler/yapay-zeka-cozumleri', '/ai-egitimi'],
  ['content/blog/en/ai-agent-customer-service-automation.md', '/en/services/ai-solutions', '/en/ai-training'],
  ['content/blog/tr/hasta-takip-hatirlatma-ai-agent-kurulumu.md', '/hizmetler/yapay-zeka-cozumleri', '/ai-egitimi'],
  ['content/blog/en/ai-agent-patient-follow-up-appointment-reminders.md', '/en/services/ai-solutions', '/en/ai-training'],
  ['content/blog/tr/musteri-hizmetleri-chatbotunda-token-maliyetini-dusuren-ayarlamalar.md', '/hizmetler/yapay-zeka-cozumleri', '/ai-egitimi'],
  ['content/blog/en/how-to-reduce-token-costs-in-customer-service-chatbots.md', '/en/services/ai-solutions', '/en/ai-training'],
  ['content/blog/tr/chatgpt-ile-e-ticaret-urun-aciklamasi-yazma.md', '/hizmetler/yapay-zeka-cozumleri', '/ai-egitimi'],
  ['content/blog/en/chatgpt-ecommerce-product-descriptions-guide.md', '/en/services/ai-solutions', '/en/ai-training'],
];

for (const [file, servicePath, trainingPath] of articlePairs) {
  const source = read(file);
  assert.ok(source.includes(`](${servicePath})`), `${file} must link to the locale-matched consulting page`);
  assert.ok(source.includes(`](${trainingPath})`), `${file} must link to the locale-matched training page`);
  assert.match(source, /Rehberden uygulamaya|From guide to implementation/, `${file} must expose a visible decision block`);
  assert.doesNotMatch(
    source,
    /\b(?:delve|seamless(?:ly)?|groundbreaking|revolutionary|game-changer|tapestry|plethora|myriad)\b|in conclusion|it is important to note/i,
    `${file} must pass the blocking machine-tell language check`,
  );
}

console.log('GEO internal-link fixtures passed for consulting, training, and four matched use-case pairs.');
