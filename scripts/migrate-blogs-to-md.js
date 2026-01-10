/**
 * Migration Script: Convert hardcoded blog posts to Markdown files
 * 
 * Run with: npx ts-node scripts/migrate-blogs-to-md.ts
 * Or: node scripts/migrate-blogs-to-md.js (after compiling)
 */

const fs = require('fs');
const path = require('path');

// Slug mappings for translations
const slugMappingTrToEn = {
  "seo-nedir-nasil-yapilir": "what-is-seo-how-does-it-work",
  "ui-ux-designer-nedir-nasil-calisirlar": "what-is-ui-ux-designer-how-do-they-work",
  "kaliteli-backlink-nedir-nasil-alinir": "what-are-quality-backlinks-how-to-get-them",
  "inbound-marketing-nedir-nasil-yapilir": "what-is-inbound-marketing-how-to-do-it",
  "dijital-pazarlama-stratejileri-ve-araclari": "digital-marketing-strategies-and-tools",
  "kullanmaniz-gereken-seo-araclari": "essential-seo-tools-you-should-use",
  "google-analytics-ile-site-optimizasyonu": "website-optimization-with-google-analytics",
  "site-ici-seo-nasil-yapilir": "on-page-seo-complete-guide",
  "sosyal-medya-yonetimi-ve-online-pazarlama": "social-media-management-and-online-marketing",
  "serp-nedir-google-icin-neden-onemlidir": "what-is-serp-why-it-matters-for-google",
  "heading-tags-nedir-h1-etiketi-nasil-kullanilir": "what-are-heading-tags-how-to-use-h1",
  "seo-ile-organik-trafigi-artirmanin-yontemleri": "how-to-increase-organic-traffic-with-seo",
  "profesyonel-seo-uzmani-nedir-nasil-olunur": "what-is-seo-specialist-how-to-become-one",
  "dropshipping-ile-dijital-pazarlama": "dropshipping-and-digital-marketing",
  "icerik-pazarlamasi-ve-seo-optimizasyonu": "content-marketing-and-seo-optimization",
  "en-etkili-dijital-pazarlama-yontemleri": "most-effective-digital-marketing-methods",
  "kaliteli-ve-ozgun-icerigin-seo-icin-onemi": "importance-of-quality-original-content-for-seo",
  "anahtar-kelime-analizi-yapan-seo-araclari": "best-keyword-research-seo-tools",
};

// Reverse mapping
const slugMappingEnToTr = Object.fromEntries(
  Object.entries(slugMappingTrToEn).map(([tr, en]) => [en, tr])
);

function createMarkdownFile(post, locale, outputDir) {
  const translationSlug = locale === 'tr' 
    ? slugMappingTrToEn[post.slug] 
    : slugMappingEnToTr[post.slug];
  
  const frontmatter = `---
title: "${post.title.replace(/"/g, '\\"')}"
slug: "${post.slug}"
description: "${post.description.replace(/"/g, '\\"')}"
date: "${post.date}"
${post.updatedDate ? `updatedDate: "${post.updatedDate}"` : ''}
category: "${post.category}"
tags: [${post.tags.map(t => `"${t}"`).join(', ')}]
readTime: "${post.readTime}"
featured: ${post.featured || false}
image: "${post.image}"
${translationSlug ? `translationSlug: "${translationSlug}"` : ''}
---
${post.content}`;

  const filePath = path.join(outputDir, `${post.slug}.md`);
  fs.writeFileSync(filePath, frontmatter.trim(), 'utf8');
  console.log(`✓ Created: ${filePath}`);
}

function migrate() {
  // Create directories
  const trDir = path.join(process.cwd(), 'content/blog/tr');
  const enDir = path.join(process.cwd(), 'content/blog/en');
  
  if (!fs.existsSync(trDir)) fs.mkdirSync(trDir, { recursive: true });
  if (!fs.existsSync(enDir)) fs.mkdirSync(enDir, { recursive: true });
  
  // Import posts from existing files
  // Note: This needs to be run after the TypeScript is compiled
  // For now, we'll manually trigger this from the blog files
  
  console.log('Migration script ready.');
  console.log('');
  console.log('To migrate existing posts:');
  console.log('1. Run: npm run build');
  console.log('2. Then use the exported functions from lib/blog.ts and lib/blog-tr.ts');
  console.log('');
  console.log('Or manually copy posts from lib/blog.ts and lib/blog-tr.ts to content/blog/');
}

// Export for use in other scripts
module.exports = { createMarkdownFile, slugMappingTrToEn, slugMappingEnToTr };

// Run if called directly
if (require.main === module) {
  migrate();
}
