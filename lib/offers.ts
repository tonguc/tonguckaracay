import type { Locale, OfferKey } from "./cases";

/**
 * Ana teklifler — ana sayfa hizmet kartları, hero etiketleri, header "Hizmetler"
 * menüsü ve footer buradan beslenir.
 * Ana sayfa düzeni: `featured` olan (AI Otomasyon) üstte tam genişlik, diğer 4'ü altta eşit kutular.
 * GEO Optimizasyonu ayrı sayfa olarak "SEO & GEO" kartından ve header'daki "Diğer" bölümünden bağlanır.
 */
export interface Offer {
  key: OfferKey;
  name: Record<Locale, string>;
  /** Hero etiketlerinde kullanılan kısa ad */
  short: Record<Locale, string>;
  value: Record<Locale, string>;
  href: Record<Locale, string>;
  featured?: boolean;
  /** Öne çıkan kartta gösterilen alt başlıklar (hizmet sayfasındaki başlıklar) */
  highlights?: Record<Locale, string[]>;
}

export const offers: Offer[] = [
  {
    key: "seo-geo",
    name: { tr: "SEO & GEO Büyüme", en: "SEO & GEO Growth" },
    short: { tr: "SEO & GEO", en: "SEO & GEO" },
    value: {
      tr: "Google'da ve ChatGPT, Gemini gibi AI aramalarında bulunur olun; nitelikli trafiği kalıcı hale getirin.",
      en: "Get found on Google and in AI search like ChatGPT and Gemini — and make qualified traffic compound.",
    },
    href: { tr: "/hizmetler/seo-danismanligi", en: "/en/services/seo-consulting" },
  },
  {
    key: "ux-conversion",
    name: { tr: "UX & Dönüşüm", en: "UX & Conversion" },
    short: { tr: "UX & Dönüşüm", en: "UX & Conversion" },
    value: {
      tr: "Mevcut ziyaretçiden daha fazla satış ve talep: sürtünmeyi bulup kaldıran UX ve dönüşüm iyileştirmeleri.",
      en: "More sales and leads from the visitors you already have: UX and CRO work that finds and removes friction.",
    },
    href: { tr: "/hizmetler/ui-ux-tasarim", en: "/en/services/ui-ux-design" },
  },
  {
    key: "ai-growth",
    featured: true,
    name: { tr: "AI Otomasyon Sistemleri", en: "AI Automation Systems" },
    short: { tr: "AI Otomasyon", en: "AI Automation" },
    value: {
      tr: "Müşteri hizmetleri, içerik ve pazarlama iş akışlarını yapay zekayla otomatikleştirip ekibinizin kapasitesini katlayın. Vitrin süsü değil, ölçülen iş sonucu.",
      en: "Automate customer service, content and marketing workflows with AI and multiply your team's capacity. Not a gimmick — measured business outcomes.",
    },
    href: { tr: "/hizmetler/yapay-zeka-cozumleri", en: "/en/services/ai-solutions" },
    highlights: {
      tr: ["AI Chatbot & Asistan", "AI İçerik Üretimi", "Süreç Otomasyonu", "Custom GPT & API Entegrasyonu", "AI Veri Analizi"],
      en: ["AI Chatbots & Assistants", "AI Content Production", "Process Automation", "Custom GPT & API Integration", "AI Data Analysis"],
    },
  },
  {
    key: "social",
    name: { tr: "Sosyal Medya Yönetimi", en: "Social Media Management" },
    short: { tr: "Sosyal Medya", en: "Social Media" },
    value: {
      tr: "Instagram, TikTok ve LinkedIn'de strateji, içerik takvimi ve topluluk yönetimi; organik büyüme düzenli raporlanır.",
      en: "Strategy, content calendar and community management on Instagram, TikTok and LinkedIn — with organic growth reported regularly.",
    },
    href: { tr: "/hizmetler/sosyal-medya-yonetimi", en: "/en/services/social-media-management" },
  },
  {
    key: "ai-ads",
    name: { tr: "AI Destekli Online Reklam", en: "AI-Powered Online Ads" },
    short: { tr: "AI Destekli Reklam", en: "AI-Powered Ads" },
    value: {
      tr: "Google, Meta ve YouTube reklamlarında AI destekli hedefleme ve kreatif testleri; dönüşüm takibiyle her lira ölçülür.",
      en: "AI-assisted targeting and creative testing across Google, Meta and YouTube ads — every dollar tracked to conversions.",
    },
    href: { tr: "/hizmetler/online-reklamcilik", en: "/en/services/online-advertising" },
  },
];

export const preAuditPath = (locale: Locale) =>
  locale === "tr" ? "/iletisim?konu=on-analiz" : "/en/contact?topic=pre-audit";
