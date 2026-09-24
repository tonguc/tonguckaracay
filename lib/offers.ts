import type { Locale, OfferKey } from "./cases";

/**
 * 3 ana teklif — konumlandırmanın omurgası. Ana sayfa hizmet kartları,
 * hero etiketleri ve header "Hizmetler" menüsünün üst bölümü buradan beslenir.
 * Diğer hizmetler (reklam, sosyal medya) alt sayfalarda yaşamaya devam eder.
 */
export interface Offer {
  key: OfferKey;
  name: Record<Locale, string>;
  value: Record<Locale, string>;
  href: Record<Locale, string>;
}

export const offers: Offer[] = [
  {
    key: "seo-geo",
    name: { tr: "SEO & GEO Büyüme", en: "SEO & GEO Growth" },
    value: {
      tr: "Google'da ve ChatGPT, Gemini gibi AI aramalarında bulunur olun; nitelikli trafiği kalıcı hale getirin.",
      en: "Get found on Google and in AI search like ChatGPT and Gemini — and make qualified traffic compound.",
    },
    href: { tr: "/hizmetler/seo-danismanligi", en: "/en/services/seo-consulting" },
  },
  {
    key: "ux-conversion",
    name: { tr: "UX & Dönüşüm", en: "UX & Conversion" },
    value: {
      tr: "Mevcut ziyaretçiden daha fazla satış ve talep: sürtünmeyi bulup kaldıran UX ve dönüşüm iyileştirmeleri.",
      en: "More sales and leads from the visitors you already have: UX and CRO work that finds and removes friction.",
    },
    href: { tr: "/hizmetler/ui-ux-tasarim", en: "/en/services/ui-ux-design" },
  },
  {
    key: "ai-growth",
    name: { tr: "AI Büyüme Sistemleri", en: "AI Growth Systems" },
    value: {
      tr: "İçerik, müşteri hizmetleri ve pazarlama iş akışlarını yapay zekayla otomatikleştirip ekibinizin kapasitesini katlayın.",
      en: "Automate content, customer service and marketing workflows with AI and multiply your team's capacity.",
    },
    href: { tr: "/hizmetler/yapay-zeka-cozumleri", en: "/en/services/ai-solutions" },
  },
];

export const preAuditPath = (locale: Locale) =>
  locale === "tr" ? "/iletisim?konu=on-analiz" : "/en/contact?topic=pre-audit";
