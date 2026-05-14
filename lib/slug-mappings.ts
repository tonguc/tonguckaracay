// Slug mappings for TR <-> EN translation
// This file is safe to import from both server and client components

export const slugMappingTrToEn: Record<string, string> = {
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
  "geo-nedir-nasil-yapilir": "what-is-geo-generative-engine-optimization",
  "chatgpt-geo-nasil-yapilir": "how-to-get-cited-in-chatgpt",
  "yapay-zeka-ui-tasarim-araclari": "ai-ui-design-tools",
  "google-ads-kampanya-optimizasyonu-rehberi": "google-ads-campaign-optimization-guide",
  "yapay-zeka-araclari-ve-kullanim-alanlari": "ai-tools-and-use-cases-complete-guide",
  "prompt-muhendisligi-ile-para-kazanma": "ai-prompt-engineering-ways-to-make-money",
  "ai-agent-nedir-dijital-pazarlamada-nasil-kullanilir": "what-is-ai-agent-digital-marketing-guide",
  "ai-agent-musteri-hizmetleri-otomasyonu": "ai-agent-customer-service-automation",
  "chatgpt-ile-e-ticaret-urun-aciklamasi-yazma": "chatgpt-ecommerce-product-descriptions-guide",
  "ai-agent-vps-kendi-sunucu-karsilastirmasi": "ai-agent-vps-vs-own-server-comparison",
  "ucretsiz-turkce-yapay-zeka-araclari-e-ticaret": "free-turkish-ai-tools-ecommerce",
  "yerel-seo-e-ticaret-rehberi": "local-seo-for-ecommerce-guide",
  "claude-gpt-4-token-maliyet-karsilastirmasi": "claude-gpt-4-token-cost-comparison",
  "musteri-hizmetleri-chatbotunda-token-maliyetini-dusuren-ayarlamalar": "how-to-reduce-token-costs-in-customer-service-chatbots",
  "instagram-reels-yapay-zeka-trend-analizi-icerik-planlama": "ai-trend-analysis-instagram-reels-content-planning",
};
export const slugMappingEnToTr: Record<string, string> = Object.fromEntries(
  Object.entries(slugMappingTrToEn).map(([tr, en]) => [en, tr])
);

export function getTranslatedSlug(slug: string, fromLocale: 'tr' | 'en', toLocale: 'tr' | 'en'): string {
  if (fromLocale === toLocale) return slug;
  if (fromLocale === 'tr' && toLocale === 'en') {
    return slugMappingTrToEn[slug] || slug;
  }
  if (fromLocale === 'en' && toLocale === 'tr') {
    return slugMappingEnToTr[slug] || slug;
  }
  return slug;
}
