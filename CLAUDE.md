# tonguckaracay.com - Claude Agent Kılavuzu

## Proje Hakkında

Tonguç Karaçay'ın dijital pazarlama ve SEO danışmanlığı websitesi.
URL: https://tonguckaracay.com

## Tech Stack

- Next.js 14 (App Router)
- TypeScript + Tailwind CSS
- next-intl (TR/EN çift dil)
- Markdown blog sistemi (gray-matter)

## Blog İçerik Kuralları

### Dizin Yapısı
```
content/blog/tr/   ← Türkçe yazılar
content/blog/en/   ← İngilizce yazılar
```

### Frontmatter Şablonu (TR)
```yaml
---
title: "Başlık"
slug: "url-dostu-slug"
description: "150-160 karakter meta açıklama"
date: "YYYY-MM-DD"
category: "SEO | Dijital Pazarlama | Sosyal Medya | UI/UX | Yapay Zeka"
tags: ["tag1", "tag2", "tag3"]
readTime: "X dk"
image: "https://images.unsplash.com/photo-XXXXX?w=1200&auto=format&fit=crop&q=80"
translationSlug: "en-versiyonun-slug'i"
---
```

### Frontmatter Şablonu (EN)
```yaml
---
title: "Title"
slug: "url-friendly-slug"
description: "150-160 char meta description"
date: "YYYY-MM-DD"
category: "SEO | Digital Marketing | Social Media | UI/UX | Artificial Intelligence"
tags: ["tag1", "tag2", "tag3"]
readTime: "X min"
image: "https://images.unsplash.com/photo-XXXXX?w=1200&auto=format&fit=crop&q=80"
translationSlug: "tr-versiyonun-slug'i"
---
```

### İçerik Standartları
- Her yazı 800-1200 kelime
- H2 ve H3 başlıklar kullan
- Pratik, uygulanabilir bilgiler
- Güncel (2025) bilgiler
- Türkçe yazılarda CTA: `Profesyonel danışmanlık için [iletişime geçin](/iletisim).`
- İngilizce yazılarda CTA: `For professional consulting [get in touch](/contact).`

## İzin Verilen Konular

SEO, Dijital Pazarlama, Google Ads, Meta Ads, Sosyal Medya, UI/UX Tasarım,
Yapay Zeka Araçları, E-ticaret Pazarlama, İçerik Pazarlama, Web Analitik

## Çalıştırılabilir Komutlar

```bash
# Site build
npm run build

# Geliştirme
npm run dev

# Lint
npm run lint
```

## Önemli Dosyalar

- `lib/blog-utils.ts` — Blog okuma fonksiyonları
- `app/[locale]/blog/` — Blog sayfaları
- `messages/tr.json` + `messages/en.json` — UI çevirileri
- `middleware.ts` — Geo-tabanlı locale yönlendirme

## KRİTİK: Slug Mapping Zorunluluğu

Her yeni blog yazısı eklendiğinde `lib/slug-mappings.ts` dosyası MUTLAKA güncellenmeli.
Aksi hâlde TR↔EN dil geçişi ve ilgili yazı linkleri 500 hatası verir.

### Kural
`lib/slug-mappings.ts` içindeki `slugMappingTrToEn` nesnesine şu format ile ekle:
```ts
"tr-slug": "en-slug",
```

### Doğrulama
Mapping'teki EN slug değeri, `content/blog/en/` klasöründeki dosyanın frontmatter'ındaki
`slug:` alanıyla **birebir** aynı olmalı. Dosya adıyla değil, frontmatter slug'ıyla eşleşmeli.

Örnek kontrol:
```bash
grep "slug:" content/blog/en/DOSYAADI.md
```
Bu çıktıdaki değer slug-mappings.ts'e yazılmalı.
