import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const pairs = [
  {
    trFile: 'app/[locale]/hizmetler/yapay-zeka-cozumleri/page.tsx',
    enFile: 'app/[locale]/services/ai-solutions/page.tsx',
    trUrl: 'https://tonguckaracay.com/hizmetler/yapay-zeka-cozumleri',
    enUrl: 'https://tonguckaracay.com/en/services/ai-solutions',
  },
  {
    trFile: 'app/[locale]/hizmetler/seo-danismanligi/page.tsx',
    enFile: 'app/[locale]/services/seo-consulting/page.tsx',
    trUrl: 'https://tonguckaracay.com/hizmetler/seo-danismanligi',
    enUrl: 'https://tonguckaracay.com/en/services/seo-consulting',
  },
  {
    trFile: 'app/[locale]/hizmetler/online-reklamcilik/page.tsx',
    enFile: 'app/[locale]/services/online-advertising/page.tsx',
    trUrl: 'https://tonguckaracay.com/hizmetler/online-reklamcilik',
    enUrl: 'https://tonguckaracay.com/en/services/online-advertising',
  },
  {
    trFile: 'app/[locale]/hizmetler/sosyal-medya-yonetimi/page.tsx',
    enFile: 'app/[locale]/services/social-media-management/page.tsx',
    trUrl: 'https://tonguckaracay.com/hizmetler/sosyal-medya-yonetimi',
    enUrl: 'https://tonguckaracay.com/en/services/social-media-management',
  },
  {
    trFile: 'app/[locale]/hizmetler/ui-ux-tasarim/page.tsx',
    enFile: 'app/[locale]/services/ui-ux-design/page.tsx',
    trUrl: 'https://tonguckaracay.com/hizmetler/ui-ux-tasarim',
    enUrl: 'https://tonguckaracay.com/en/services/ui-ux-design',
  },
];

function quoted(value) {
  return `"${value}"`;
}

function verifyPage(file, canonicalUrl, trUrl, enUrl) {
  const source = readFileSync(resolve(file), 'utf8');

  assert.match(
    source,
    new RegExp(`canonical:\\s*${quoted(canonicalUrl)}`),
    `${file} must declare its self-canonical URL`,
  );
  assert.match(
    source,
    new RegExp(`tr:\\s*${quoted(trUrl)}`),
    `${file} must declare the Turkish alternate`,
  );
  assert.match(
    source,
    new RegExp(`en:\\s*${quoted(enUrl)}`),
    `${file} must declare the English alternate`,
  );
  assert.match(
    source,
    new RegExp(`"x-default":\\s*${quoted(enUrl)}`),
    `${file} must use the English service page as x-default`,
  );

  const urlOccurrences = source.split(quoted(canonicalUrl)).length - 1;
  assert.ok(
    urlOccurrences >= 4,
    `${file} must align canonical, hreflang, Open Graph, and Service schema URLs`,
  );
}

for (const pair of pairs) {
  verifyPage(pair.trFile, pair.trUrl, pair.trUrl, pair.enUrl);
  verifyPage(pair.enFile, pair.enUrl, pair.trUrl, pair.enUrl);
}

const llms = readFileSync(resolve('public/llms.txt'), 'utf8');
assert.match(
  llms,
  /https:\/\/tonguckaracay\.com\/hizmetler\/yapay-zeka-cozumleri/,
  'llms.txt must list the Turkish AI automation consulting page',
);
assert.match(
  llms,
  /https:\/\/tonguckaracay\.com\/en\/services\/ai-solutions/,
  'llms.txt must list the English AI automation consulting page',
);
assert.match(
  llms,
  /Last updated: September 2026/,
  'llms.txt must carry the current publication month',
);

console.log(`Service metadata fixtures passed for ${pairs.length * 2} pages.`);
