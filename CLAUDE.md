# tonguckaracay.com — Claude Agent Kılavuzu

Son güncelleme: 2026-04-25

---

## Proje Hakkında

Tonguç Karaçay'ın kişisel markası ve dijital danışmanlık websitesi.
URL: https://tonguckaracay.com
GitHub: tonguc/tonguckaracay (main branch)
Deploy: Vercel (otomatik — main'e push = production)

---

## Tech Stack

- Next.js 15 (App Router, TypeScript)
- Tailwind CSS
- next-intl (TR/EN çift dil)
- Markdown blog sistemi (gray-matter)
- Resend API (iletişim formu)

---

## URL Yapısı (KRİTİK)

**Final canonical yapı:**
- TR: https://tonguckaracay.com/slug
- EN: https://tonguckaracay.com/en/slug
- Blog listing TR: https://tonguckaracay.com/blog
- Blog listing EN: https://tonguckaracay.com/en/blog

**Redirect'ler (next.config.js):**
- /blog/:slug → /:slug (301)
- /en/blog/:slug → /en/:slug (301)

**trailingSlash: false** — canonical ve gerçek URL aynı, trailing slash tutarsızlığı yok.

---

## Hreflang Yapısı (KRİTİK)

Tüm blog yazılarında `app/[locale]/[slug]/page.tsx` içinde:

```ts
const languages: Record<string, string> = {};
if (trSlug) languages['tr'] = `https://tonguckaracay.com/${trSlug}`;
if (enSlug) {
  languages['en'] = `https://tonguckaracay.com/en/${enSlug}`;
  languages['x-default'] = `https://tonguckaracay.com/en/${enSlug}`;
}
```

x-default → EN (hedef kitle: yurt dışı, ABD ağırlıklı)

---

## Blog Sistemi

### Dizin Yapısı
```
content/blog/tr/   ← Türkçe yazılar
content/blog/en/   ← İngilizce yazılar
lib/slug-mappings.ts  ← TR↔EN dil geçişi (KRİTİK)
lib/blog-utils.ts     ← Blog listeleme
```

### KRİTİK: Slug Mapping

Her yeni blog yazısında `lib/slug-mappings.ts` MUTLAKA güncellenmeli.
Dil switcher buna bağlı — güncellenmezse dil geçişi kırılır.

```ts
// slugMappingTrToEn
"tr-slug": "en-slug",
// slugMappingEnToTr
"en-slug": "tr-slug",
```

### Blog Frontmatter Şablonu

```yaml
---
title: "Başlık"
slug: "url-dostu-slug"
description: "150-160 karakter meta açıklama"
date: "YYYY-MM-DD"
category: "SEO"
tags: ["tag1", "tag2"]
readTime: "X dk"
featured: false
image: "https://images.unsplash.com/photo-XXXXX?w=1200&auto=format&fit=crop&q=80"
translationSlug: "karsi-dilin-slug"
faq:
  - question: "Soru?"
    answer: "Cevap."
---
```

**Kurallar:**
- `featured: false` — her zaman
- `updatedDate` kullanma — `date`'i override eder, karışıklık yaratır
- Her yazı TR + EN çift olarak yazılır, asla tek başına
- **TR ve EN birbirinin çevirisi DEĞİL** — her dil kendi kitlesi için özgün yazılır. TR: Türkiye pazarı (TL fiyat, Trendyol/Hepsiburada gibi yerel platformlar, KOBİ örnekleri). EN: ABD/UK ağırlıklı uluslararası kitle (USD fiyat, Shopify/Amazon gibi global platformlar, Batı pazarı vakaları). H2 sırası, örnekler, istatistikler her dilde bağımsız tasarlanır.
- Kelime sayısı hedefi: 1.200–1.800 kelime
- Her yazıda "Quick Answer / Kısa Cevap" bloku olmalı (GEO/AEO için)
- Her yazıda `faq` frontmatter ile FAQ schema olmalı
- Görsel: her yazı için farklı Unsplash ID
- **"## İçindekiler" / "## Table of Contents" YAZMA** — site zaten otomatik TOC üretir (mobilde yazı üstünde, desktop'ta sağ sidebar). Manuel TOC eklenirse renderer'ın slugify'ı ile uyuşmaz (Türkçe karakterleri ve `-` siler), linkler kırılır.

### İçerik Kalite Standartları

- Minimum 1.200 kelime (ideal 1.500–1.800)
- H2/H3 hiyerarşisi
- Karşılaştırma tablosu (uygunsa)
- Checklist veya pratik liste
- GEO bölümü (yapay zeka araması için)
- CTA: TR → /iletisim, EN → /en/contact

---

## Teknik SEO Durumu (Nisan 2026)

### Tamamlananlar ✅

| Dosya | Değişiklik |
|-------|-----------|
| `next.config.js` | trailingSlash: false |
| `next.config.js` | /blog/:slug → /:slug redirect (301) |
| `middleware.ts` | Geo redirect 307 → 301 |
| `app/[locale]/[slug]/page.tsx` | hreflang + x-default tüm blog yazıları |
| `app/sitemap.ts` | canonical URL'ler, privacy/terms eklendi |
| `public/robots.txt` | GPTBot, ClaudeBot, PerplexityBot izinleri |
| `public/llms.txt` | AI crawler rehberi |
| `app/[locale]/privacy-policy/page.tsx` | Yeni sayfa |
| `app/[locale]/terms-of-service/page.tsx` | Yeni sayfa |
| `lib/slug-mappings.ts` | Eksik slug'lar eklendi |
| `app/[locale]/layout.tsx` | **Mayıs 2026:** Hardcoded `<link rel=alternate>` 3 satırı silindi — her sayfada anasayfaya işaret ediyordu, page.tsx'in doğru hreflang'iyle çelişiyordu |
| `middleware.ts` | **Mayıs 2026:** `alternateLinks: false` eklendi — next-intl'in `/en/<aynı-slug>` üreten broken HTTP Link header'ı kapatıldı; ayrıca yanlış-locale slug'ları (örn. `/en/<tr-slug>`) için 301 defense redirect |
| `next.config.js` | **Mayıs 2026:** `/tr/:path*` → `/:path*` 301 (next-intl'in 307'sini geçer) |
| `app/[locale]/blog/page.tsx` | **Mayıs 2026:** SEO intro bloğu kaldırıldı — subtitle aynı mesajı veriyordu (duplicate); ayrıca 30+ post kartı (başlık + 150-160 karakter açıklama) zaten yeterli unique metin sağlıyor, "thin content fix" gerekçesi artık geçerli değil |

### KRİTİK: Hreflang Tek Kaynak Kuralı

Hreflang **sadece** `app/[locale]/[slug]/page.tsx` ve diğer per-page `generateMetadata`'lardan üretilir. Layout'a veya middleware'e hreflang **EKLEME** — çoklu kaynak Google için broken cluster anlamına gelir, indexlemeyi durdurur.

### GSC Durumu (Nisan 2026)

- 3 ayda 2 tıklama, 1.304 gösterim, %0 TO
- Ortalama pozisyon: 70–95
- USA: 833 gösterim, 0 tıklama
- 46 "Tarandı ama indexlenmedi" → hreflang fix ile çözülmesi bekleniyor
- Sitemap GSC'ye yeniden gönderildi

### Güçlendirilen İçerikler

| Yazı | Öncesi | Sonrası |
|------|--------|---------|
| heading-tags EN | ~350w | 1.678w |
| heading-tags TR | ~350w | 1.494w |
| keyword-research EN | ~350w | 1.678w |
| keyword-research TR | ~350w | 1.686w |

---

## Önemli Dosyalar

```
app/[locale]/[slug]/page.tsx    — hreflang, canonical, schema
app/[locale]/blog/page.tsx      — blog listing, pagination
app/sitemap.ts                  — sitemap üretimi
middleware.ts                   — geo redirect, locale
next.config.js                  — trailingSlash, redirects, headers
lib/slug-mappings.ts            — TR↔EN dil geçişi (KRİTİK)
lib/blog-utils.ts               — blog okuma fonksiyonları
public/robots.txt               — crawler izinleri
public/llms.txt                 — AI crawler rehberi
messages/tr.json                — TR UI metinleri
messages/en.json                — EN UI metinleri
```

---

## GitHub Commit Yöntemi

Browser MCP + GitHub web editor (CodeMirror 6):

```js
// Yeni dosya: github.com/tonguc/tonguckaracay/new/main/content/blog/tr
// Düzenleme: github.com/tonguc/tonguckaracay/edit/main/[dosya-yolu]

const cm = document.querySelector('.cm-content');
cm.focus();
document.execCommand('selectAll');
document.execCommand('delete');
document.execCommand('insertText', false, content);
```

---

## Vercel

- Team: team_pPyw9vJKydRnGfBq6llHK68H
- Project: prj_yNvFrZGRN2iJAv7jQSkRd84H69fg
- Deploy: main branch'e push → otomatik production

---

## Sonraki Adımlar

- [ ] 4–6 hafta sonra GSC Coverage raporunu kontrol et
- [ ] "Tarandı ama indexlenmedi" sayısının düşmesini izle
- [ ] keyword-research yazıları pozisyon takibi (şu an pos. 63)
- [ ] heading-tags yazıları pozisyon takibi (şu an pos. 92)
- [ ] Statik sayfaların (hizmetler/services) hreflang kontrolü
- [ ] Yeni blog içerikleri: UI/UX ve AI konuları (EN öncelikli)
