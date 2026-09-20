import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const productPages = [
  'content/blog/tr/chatgpt-ile-e-ticaret-urun-aciklamasi-yazma.md',
  'content/blog/en/chatgpt-ecommerce-product-descriptions-guide.md',
];

const reelsPages = [
  'content/blog/tr/instagram-reels-yapay-zeka-trend-analizi-icerik-planlama.md',
  'content/blog/en/ai-trend-analysis-instagram-reels-content-planning.md',
];

const pages = [...productPages, ...reelsPages];

for (const file of pages) {
  const source = readFileSync(resolve(file), 'utf8');
  assert.match(source, /20 Eylül 2026|September 20, 2026/, `${file} must show the material-update date`);
  assert.match(source, /insan onay|human approv|insan doğrula|human verif/i, `${file} must define accountable human review`);
  assert.match(source, /maliyet|cost/i, `${file} must define full-cost measurement`);
  assert.ok((source.match(/^\|.+\|$/gm) ?? []).length >= 12, `${file} must contain semantic Markdown tables`);
  assert.doesNotMatch(source, /müşterilerimiz|danışmanlık projelerinde|client implementations|consulting engagements|we've seen|we have seen/i, `${file} must not present undocumented client results`);
  assert.doesNotMatch(source, /%\s?\d|\d+(?:[.,]\d+)?\s?%|\$\s?\d/, `${file} must not publish unsupported percentage or fixed-price claims`);
}

for (const file of productPages) {
  const source = readFileSync(resolve(file), 'utf8');
  assert.match(source, /https:\/\/support\.google\.com\/merchants\/answer\/14779112/, `${file} must cite the official product-data specification`);
  assert.match(source, /https:\/\/developers\.google\.com\/search\/docs\/fundamentals\/using-gen-ai-content/, `${file} must cite Google's AI-content guidance`);
  assert.match(source, /https:\/\/developers\.google\.com\/search\/docs\/essentials\/spam-policies/, `${file} must cite Google's spam policies`);
  assert.match(source, /SKU/, `${file} must ground copy in SKU-level product data`);
}

for (const file of reelsPages) {
  const source = readFileSync(resolve(file), 'utf8');
  assert.match(source, /https:\/\/developers\.facebook\.com\/docs\/instagram-platform\/instagram-graph-api\/reference\/ig-media\/insights\//, `${file} must cite official Instagram Insights documentation`);
  assert.match(source, /https:\/\/developers\.facebook\.com\/docs\/instagram-platform\/content-publishing\//, `${file} must cite official publishing documentation`);
  assert.match(source, /kaynak URL|source URL/i, `${file} must preserve source provenance`);
  assert.doesNotMatch(source, /Apify|Octoparse|Needle|ReelTrends|Memories\.ai|shadowban/i, `${file} must not recommend unverified scraping or vendor claims`);
}

console.log('Ecommerce and Reels claim-hygiene fixtures passed for two TR/EN page pairs.');
