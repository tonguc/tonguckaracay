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

### KRİTİK: Teknik SEO Zorunlulukları

#### Title (Başlık)
- **Uzunluk: 50–60 karakter** (kod `| Tonguç Karaçay` ekliyor, toplam ~70 kr'yi geçmemeli)
- 50 karakterin altı: Google SERP'te zayıf görünüm, keyword fırsatı kaybı
- 60 karakterin üstü: Google tarafından kesiliyor, anlam bozuluyor
- Hedef keyword'ü başa yakın yaz
- Yıl (2024/2025/2026) kullanma — evergreen ol
- Soru formatı veya güçlü fayda ifadesi kullan

#### Description (Meta Açıklama)
- **Uzunluk: 150–160 karakter** (120'nin altı: Google kendi yazar; 165 üstü: kesilir)
- Hedef keyword'ü ilk cümlede kullan
- Açık fayda/CTA içermeli (örn: "Öğren", "Keşfet", "Adım adım rehber")
- Kopya içerik olmamalı, her yazı için özgün

#### Doğrulama Komutu
```bash
# Uzunluk kontrolü
awk 'NR>=1 && NR<=15' content/blog/tr/SLUG.md | grep -E "^title:|^description:"
```

Karakter sayısı:
```bash
echo -n "Başlık metni buraya" | wc -c
```

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

## KRİTİK: Blog Görsel Tekrarı Yasak

Her blog yazısının görseli birbirinden farklı olmalı. Aynı Unsplash foto ID'si birden fazla yazıda kullanılamaz.

### Kural
- `tc-agent/agent.py` içindeki `img_url(kw, slug)` fonksiyonu slug'ı seed olarak kullanır.
  Aynı `image_keyword` kullanan iki yazı, farklı slug'ları sayesinde farklı görseller alır.
- Elle görsel atarken önce mevcut görselleri kontrol et:
  ```bash
  grep -h "^image:" content/blog/tr/*.md | sort | uniq -d
  ```
  Çıktı boşsa tekrar yok demektir.
- Tekrar varsa ilgili dosyalarda `image:` satırını farklı Unsplash ID ile güncelle.

### Görsel Havuzu
Görseller `tc-agent/agent.py` içindeki `IMAGES` dict'inde tutulur.
Her kategori için 4 farklı ID bulunur. Yeni kategori eklenecekse buraya eklenmeli.
