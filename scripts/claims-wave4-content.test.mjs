import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import matter from 'gray-matter';

const infrastructurePage = 'content/blog/en/ai-agent-vps-vs-own-server-comparison.md';
const incomePage = 'content/blog/en/ai-prompt-engineering-ways-to-make-money.md';
const localPages = [
  'content/blog/tr/e-ticaret-yerel-seo-rehberi.md',
  'content/blog/en/local-seo-for-ecommerce-guide.md',
];
const toolsPage = 'content/blog/tr/yapay-zeka-araclari-ve-kullanim-alanlari.md';
const pages = [infrastructurePage, incomePage, ...localPages, toolsPage];

for (const file of pages) {
  const source = readFileSync(resolve(file), 'utf8');
  const parsed = matter(source);

  assert.equal(parsed.data.date, '2026-09-21', `${file} must expose the material-update date`);
  assert.ok(Array.isArray(parsed.data.faq) && parsed.data.faq.length >= 5, `${file} must preserve FAQ schema content`);
  assert.ok((source.match(/^\|.+\|$/gm) ?? []).length >= 12, `${file} must contain semantic Markdown tables`);
  assert.match(source, /21 Eylül 2026|September 21, 2026/, `${file} must show the update marker`);
  assert.doesNotMatch(
    source,
    /müşterilerimiz|müşterimizin|müşterimizde|müşteri portföyümüzde|danışmanlık projelerinde|client implementations|consulting engagements|our client work|client accounts|one (?:e-commerce )?client|when we deployed/i,
    `${file} must not present undocumented first-party outcomes`,
  );
  assert.doesNotMatch(source, /\$\s?\d|\d+(?:[.,]\d+)?\s?%/, `${file} must not freeze prices or publish unsupported percentages`);
  assert.doesNotMatch(
    source,
    /\b(?:delve|seamless(?:ly)?|groundbreaking|revolutionary|game-changer|tapestry|plethora|myriad)\b|in conclusion|it is important to note/i,
    `${file} must pass the blocking machine-tell language check`,
  );
}

{
  const source = readFileSync(resolve(infrastructurePage), 'utf8');
  assert.match(source, /OWASP AI Agent Security Cheat Sheet/);
  assert.match(source, /NIST AI Risk Management Framework/);
  assert.match(source, /cost per accepted task/i);
  assert.match(source, /recovery|restore/i);
}

{
  const source = readFileSync(resolve(incomePage), 'utf8');
  assert.match(source, /developers\.openai\.com\/api\/docs\/guides\/prompt-engineering/);
  assert.match(source, /ftc\.gov\/business-guidance\/resources\/selling-work-home/);
  assert.match(source, /income is not guaranteed/i);
  assert.match(source, /evaluation set/i);
}

for (const file of localPages) {
  const source = readFileSync(resolve(file), 'utf8');
  assert.match(source, /support\.google\.com\/business\/answer\/13763036/);
  assert.match(source, /support\.google\.com\/business\/answer\/3038177/);
  assert.match(source, /developers\.google\.com\/search\/docs\/appearance\/structured-data\/merchant-listing/);
  assert.match(source, /online-only|yalnız çevrim içi/i);
}

{
  const source = readFileSync(resolve(toolsPage), 'utf8');
  assert.match(source, /NIST AI Risk Management Framework/);
  assert.match(source, /OWASP AI Agent Security Cheat Sheet/);
  assert.match(source, /kabul edilen görev başı maliyet/i);
  assert.match(source, /sabit test seti/i);
}

console.log('Claim-hygiene wave 4 fixtures passed for infrastructure, income, local SEO and AI tools pages.');
