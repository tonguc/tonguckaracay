/**
 * Vaka çalışmaları — tek veri kaynağı (ana sayfa mini vakaları + /projeler).
 *
 * Şablon: Hedef → Müdahale → Sonuç (metrik) → Müşteri yorumu.
 * KURAL: Sadece doğrulanabilir bilgi. Mevcut içerik behance.net/tonguc
 * portfolyosundaki teslim edilmiş işlerden alındı (kapsam + ekranlarda görünen
 * özellikler). `results` ve `testimonial` alanları gerçek, müşteri onaylı veri
 * gelene kadar BOŞ bırakılır — boşken UI'da hiç render edilmez. Uydurma metrik
 * veya yorum ekleme (FTC/AB sahte yorum kuralları + itibar riski).
 */

export type Locale = "tr" | "en";
type L<T = string> = Record<Locale, T>;

export type OfferKey = "seo-geo" | "ux-conversion" | "ai-growth" | "social" | "ai-ads";

export interface CaseResult {
  value: string; // örn. "+38%"
  label: L;      // örn. { tr: "organik trafik (6 ay)", en: "organic traffic (6 mo)" }
}

export interface CaseTestimonial {
  quote: L;
  name: string;
  role: L;
}

export interface CaseStudy {
  slug: string;
  client: string;
  sector: L;
  offer: OfferKey;
  title: L;
  shortTitle: L;
  summary: L;
  responsibilitySummary: L;
  goal: L;
  intervention: L<string[]>;
  tools: string[];
  image: string;
  behanceUrl: string;
  featured?: boolean; // ana sayfada mini vaka olarak gösterilir
  results?: CaseResult[];
  testimonial?: CaseTestimonial;
}

export const cases: CaseStudy[] = [
  {
    slug: "bmw-servis-uygulamasi",
    client: "BMW · Borusan Otomotiv",
    sector: { tr: "Otomotiv · Satış sonrası hizmet", en: "Automotive · After-sales service" },
    offer: "ux-conversion",
    featured: true,
    shortTitle: { tr: "BMW Servis Mobil Uygulaması", en: "BMW Service Mobile App" },
    summary: { tr: "Servis randevusu, yetkili servis seçimi ve araç bilgilerinin tek mobil deneyimde birleşmesi.", en: "A unified mobile experience for service bookings, dealer selection and vehicle information." },
    responsibilitySummary: { tr: "Ürün deneyimi · UX akışları · Mobil ürün", en: "Product experience · UX flows · Mobile product" },
    title: { tr: "BMW Servis Mobil Uygulaması", en: "BMW Service Mobile App" },
    goal: {
      tr: "Servis randevusu, yetkili servis seçimi ve araca ait tüm bilgileri tek bir mobil deneyimde toplamak.",
      en: "Bring service booking, dealer selection and all vehicle information into a single mobile experience.",
    },
    intervention: {
      tr: [
        "Servis ihtiyacı seçiminden randevu saatine kadar adım adım rezervasyon akışı",
        "Harita ve liste görünümüyle yetkili servis bulma",
        "Araç kartı: Teleservices çağrısı, teknik kontrol, JOY Card, kasko ve garanti bilgileri",
      ],
      en: [
        "Step-by-step booking flow from service need to appointment slot",
        "Authorised dealer finder with map and list views",
        "Vehicle hub: Teleservices call, technical check, JOY Card, insurance and warranty details",
      ],
    },
    tools: ["Figma", "Photoshop"],
    image: "/cases/bmw-mobil-uygulama.webp",
    behanceUrl: "https://www.behance.net/gallery/139240279/BMW-Mobile-Application",
  },
  {
    slug: "shopify-e-ticaret",
    client: "Network Hardwares",
    sector: { tr: "E-ticaret · Elektronik", en: "E-commerce · Electronics" },
    offer: "ux-conversion",
    featured: true,
    shortTitle: { tr: "E-ticaret Platformu ve Ekip Yönetimi", en: "E-commerce Platform & Team Leadership" },
    summary: { tr: "Network Hardwares için Shopify tabanlı e-ticaret yapısının kurulumu ve uçtan uca yönetimi.", en: "Leading the Shopify e-commerce platform setup and delivery for Network Hardwares." },
    responsibilitySummary: { tr: "Platform stratejisi · Kurulum · Ekip yönetimi", en: "Platform strategy · Launch · Team leadership" },
    title: { tr: "E-ticaret Platformu Stratejisi, Kurulumu ve Ekip Yönetimi", en: "E-commerce Platform Strategy, Launch & Team Leadership" },
    goal: {
      tr: "Network Hardwares için Shopify tabanlı e-ticaret yapısının kurulumu, mağaza operasyonları, ürün kataloğu ve ekip koordinasyonunu uçtan uca yönetmek.",
      en: "Lead the Shopify e-commerce setup, storefront operations, product catalogue and cross-functional delivery for Network Hardwares.",
    },
    intervention: {
      tr: [
        "Shopify altyapısının kurulumu, mağaza mimarisi ve yayına hazırlık sürecinin yönetimi",
        "Ürün kategorileri, kampanya alanları ve satın alma deneyiminin planlanması",
        "Tasarım, geliştirme ve operasyon süreçlerinde ekip koordinasyonu ve teslim takibi",
      ],
      en: [
        "Leading Shopify setup, storefront architecture and launch preparation",
        "Planning product categories, promotional areas and the purchasing experience",
        "Coordinating design, development and operations teams through delivery",
      ],
    },
    tools: ["Shopify", "E-commerce Operations", "UX", "Team Leadership"],
    image: "/cases/shopify-e-ticaret.webp",
    behanceUrl: "https://www.behance.net/gallery/186197781/shopify-ecommerce-design",
  },
  {
    slug: "auditpro-seo-geo-ux",
    client: "AuditPro",
    sector: { tr: "SaaS · SEO, GEO & UX", en: "SaaS · SEO, GEO & UX" },
    offer: "ai-growth",
    featured: true,
    shortTitle: { tr: "Yapay Zeka ile Geliştirilen AuditPro", en: "AI-Assisted AuditPro Platform" },
    summary: { tr: "Teknik SEO, GEO ve UX kontrollerini ortak raporlama deneyiminde buluşturan dijital ürün.", en: "A digital product unifying technical SEO, GEO and UX assessments in one reporting experience." },
    responsibilitySummary: { tr: "Ürün stratejisi · Denetim akışları · Raporlama", en: "Product strategy · Audit workflows · Reporting" },
    title: { tr: "Yapay Zeka ile Geliştirilen SEO, GEO ve UX Denetim Platformu", en: "AI-Assisted SEO, GEO & UX Audit Platform" },
    goal: {
      tr: "Teknik SEO, yapay zeka arama görünürlüğü ve kullanıcı deneyimi kontrollerini tek bir dijital ürün altında birleştirmek.",
      en: "Unify technical SEO, AI search visibility and user experience assessments in one digital product.",
    },
    intervention: {
      tr: [
        "Ürün kapsamının, denetim kategorilerinin ve kullanıcı akışlarının planlanması",
        "Bulguları önceliklendiren analiz paneli ve raporlama deneyiminin tasarlanması",
        "SEO, GEO ve UX kontrol süreçlerinin entegre bir ürün yapısında birleştirilmesi",
      ],
      en: [
        "Planning product scope, audit categories and end-to-end user flows",
        "Designing the analysis dashboard, finding prioritization and reporting experience",
        "Bringing SEO, GEO and UX assessment workflows into an integrated product",
      ],
    },
    tools: ["Product Strategy", "UX/UI", "Next.js", "SEO", "GEO"],
    image: "/portfolio/251295211.webp",
    behanceUrl: "https://www.behance.net/gallery/251295211/AuditPro-Toolkit",
  },
  {
    slug: "sigorta-sirketi",
    client: "Sigorta 7",
    sector: { tr: "Sigorta · Hizmet", en: "Insurance · Services" },
    offer: "ux-conversion",
    shortTitle: { tr: "Sigorta 7 Dijital Platformu", en: "Sigorta 7 Digital Platform" },
    summary: { tr: "Farklı sigorta ürünlerinin teklif ve başvuru deneyiminde bir araya getirilmesi.", en: "Bringing insurance products together through a clear quotation and application journey." },
    responsibilitySummary: { tr: "Bilgi mimarisi · UX · Başvuru akışları", en: "Information architecture · UX · Application flows" },
    title: { tr: "Sigorta Şirketi Web Sitesi", en: "Insurance Company Website" },
    goal: {
      tr: "Çok sayıda sigorta ürününü sade bir yapıda sunup ziyaretçiyi teklif ve başvuru formuna yönlendirmek.",
      en: "Present many insurance products in a simple structure and route visitors to quote and application forms.",
    },
    intervention: {
      tr: [
        "DASK, trafik, kasko, sağlık, evcil hayvan ve seyahat ürünleri için kart yapısı",
        "Ana sayfada \"Hemen Başvurun\" ve \"Teklif Al\" çağrıları",
        "Müşteri yorumları bölümü ve sayfa içi iletişim formu",
      ],
      en: [
        "Card layout for home, traffic, motor, health, pet and travel products",
        "\"Apply Now\" and \"Get a Quote\" calls to action on the homepage",
        "Customer reviews section and an on-page contact form",
      ],
    },
    tools: ["UI/UX", "Illustration", "Web Design"],
    image: "/cases/sigorta-sirketi.webp",
    behanceUrl: "https://www.behance.net/gallery/186196915/Insurance-Company",
  },
  {
    slug: "borusan-otomotiv",
    client: "Borusan Otomotiv",
    sector: { tr: "Otomotiv · Kurumsal", en: "Automotive · Corporate" },
    offer: "ux-conversion",
    shortTitle: { tr: "Borusan Otomotiv Dijital Platformu", en: "Borusan Otomotiv Digital Platform" },
    summary: { tr: "Otomotiv markalarını, satış ve servis girişlerini bir araya getiren kurumsal dijital deneyim.", en: "A corporate digital experience connecting automotive brands, sales and service journeys." },
    responsibilitySummary: { tr: "Kurumsal platform · UX · Servis akışları", en: "Corporate platform · UX · Service flows" },
    title: { tr: "Borusan Otomotiv Kurumsal Web Sitesi", en: "Borusan Otomotiv Corporate Website" },
    goal: {
      tr: "BMW, MINI, Land Rover ve Jaguar markalarını tek çatı altında toplayan, satış ve servis taleplerine yönlendiren kurumsal site.",
      en: "A corporate site bringing BMW, MINI, Land Rover and Jaguar under one roof and routing to sales and service requests.",
    },
    intervention: {
      tr: [
        "Yetkili satıcı, yetkili servis ve online rezervasyon girişleri",
        "4 adımlı \"Nasıl Çalışıyoruz\" süreç anlatımı",
        "Marka portalları, haberler ve kariyer bölümü",
      ],
      en: [
        "Entry points for authorised dealers, service and online booking",
        "4-step \"How We Work\" process section",
        "Brand portals, news and careers section",
      ],
    },
    tools: ["UI/UX", "Web Design"],
    image: "/cases/borusan-otomotiv.webp",
    behanceUrl: "https://www.behance.net/gallery/83863797/Borusan-Otomotiv",
  },
  {
    slug: "kayseri-cuzdan",
    client: "Kayseri Cüzdan",
    sector: { tr: "Fintech · Belediye", en: "Fintech · Municipal" },
    offer: "ux-conversion",
    shortTitle: { tr: "Dijital Cüzdan Mobil Uygulaması", en: "Digital Wallet Mobile App" },
    summary: { tr: "Bakiye, ödeme ve para transferi süreçlerini sadeleştiren mobil finans deneyimi.", en: "A streamlined mobile finance experience for balances, payments and transfers." },
    responsibilitySummary: { tr: "Ürün deneyimi · Mobil UX · İşlem akışları", en: "Product experience · Mobile UX · Transaction flows" },
    title: { tr: "Dijital Cüzdan Mobil Uygulaması", en: "Digital Wallet Mobile App" },
    goal: {
      tr: "Para yükleme, ödeme ve transfer işlemlerini herkesin kullanabileceği sadelikte bir mobil cüzdana dönüştürmek.",
      en: "Make top-ups, payments and transfers simple enough for anyone in a mobile wallet.",
    },
    intervention: {
      tr: [
        "Bakiye, kartlar ve son işlemleri tek ekranda gösteren cüzdan ana sayfası",
        "Karekod ile para gönderme / kabul etme akışları",
        "Kısa üyelik akışı ve güvenlik ayarları",
      ],
      en: [
        "Wallet home showing balance, cards and recent transactions on one screen",
        "QR-code send / receive money flows",
        "Short sign-up flow and security settings",
      ],
    },
    tools: ["Sketch", "InVision", "Photoshop"],
    image: "/cases/e-cuzdan.webp",
    behanceUrl: "https://www.behance.net/gallery/125628811/E-Wallet",
  },
  {
    slug: "fotomac",
    client: "Fotomaç",
    sector: { tr: "Medya · Spor yayıncılığı", en: "Media · Sports publishing" },
    offer: "ux-conversion",
    shortTitle: { tr: "Fotomaç Dijital Yayın Platformu", en: "Fotomaç Digital Publishing Platform" },
    summary: { tr: "Yüksek trafikli spor yayıncılığı için masaüstü ve mobil haber deneyimi.", en: "Desktop and mobile news experiences for high-traffic sports publishing." },
    responsibilitySummary: { tr: "Dijital yayın · UX · İçerik mimarisi", en: "Digital publishing · UX · Content architecture" },
    title: { tr: "fotomac.com.tr Haber Sitesi", en: "fotomac.com.tr News Site" },
    goal: {
      tr: "Yüksek trafikli bir spor gazetesinin sitesinde manşet ve haber akışını masaüstü ve mobilde okunur kılmak.",
      en: "Make headlines and the news feed readable on desktop and mobile for a high-traffic sports newspaper.",
    },
    intervention: {
      tr: [
        "Büyük manşet alanı ve kulüp bazlı haber blokları",
        "Masaüstü, dizüstü ve mobil için duyarlı yerleşim",
        "Video ve galeri içeriklerinin haber akışına entegrasyonu",
      ],
      en: [
        "Large headline area and club-based news blocks",
        "Responsive layout for desktop, laptop and mobile",
        "Video and gallery content integrated into the news feed",
      ],
    },
    tools: ["Sketch", "InVision"],
    image: "/cases/fotomac.webp",
    behanceUrl: "https://www.behance.net/gallery/18576975/wwwfotomaccomtr",
  },
];

export const featuredCases = cases.filter((c) => c.featured);

export const casesPath = (locale: Locale) => (locale === "tr" ? "/projeler" : "/en/case-studies");

/** Türkçe ve İngilizce vaka detay sayfaları için tek URL kaynağı. */
export const caseDetailPath = (locale: Locale, slug: string) =>
  locale === "tr" ? `/projeler/${slug}` : `/en/case-studies/${slug}`;
