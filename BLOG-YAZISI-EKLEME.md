# 📝 Blog Yazısı Ekleme Rehberi

## Klasör Yapısı

```
content/
  blog/
    tr/                    # Türkçe yazılar
      seo-nedir.md
      ui-ux-tasarim.md
    en/                    # İngilizce yazılar
      what-is-seo.md
      ui-ux-design.md
```

---

## 🆕 Yeni Blog Yazısı Ekleme

### Adım 1: Markdown Dosyası Oluştur

**Türkçe yazı için:** `content/blog/tr/yazi-slug.md`
**İngilizce yazı için:** `content/blog/en/post-slug.md`

### Adım 2: Frontmatter (Üst Bilgi) Ekle

Her `.md` dosyasının başında `---` arasında metadata olmalı:

```markdown
---
title: "Yazı Başlığı Buraya"
slug: "yazi-slug-buraya"
description: "155 karakterlik SEO açıklaması..."
date: "2025-01-15"
updatedDate: "2025-01-20"
category: "SEO"
tags: ["SEO", "Google", "Dijital Pazarlama"]
readTime: "8 dk"
featured: true
image: "https://images.unsplash.com/photo-xxx?w=1200"
translationSlug: "english-post-slug"
---

## İçerik Başlığı

Yazı içeriği buraya...
```

### Adım 3: Çeviri Bağlantısı (İki Dilli Yazılar İçin)

Türkçe ve İngilizce yazıları birbirine bağlamak için:

**Türkçe dosyada:**
```yaml
translationSlug: "english-post-slug"
```

**İngilizce dosyada:**
```yaml
translationSlug: "turkce-yazi-slug"
```

⚠️ **ÖNEMLİ:** Yeni bir yazı çifti eklediğinde `lib/slug-mappings.ts` dosyasına da mapping eklemelisin!

### Adım 4: Slug Mapping Güncelle

`lib/slug-mappings.ts` dosyasına yeni slug'ları ekle:

```typescript
export const slugMappingTrToEn: Record<string, string> = {
  // ... mevcut mapping'ler
  "yeni-turkce-slug": "new-english-slug",  // ← Yeni eklenen
};
```

---

## 📋 Frontmatter Alanları

| Alan | Zorunlu | Açıklama | Örnek |
|------|---------|----------|-------|
| `title` | ✅ | Yazı başlığı | `"SEO Nedir?"` |
| `slug` | ✅ | URL'deki kısa ad | `"seo-nedir"` |
| `description` | ✅ | SEO açıklaması (max 155 karakter) | `"SEO hakkında..."` |
| `date` | ✅ | Yayın tarihi | `"2025-01-15"` |
| `updatedDate` | ❌ | Güncelleme tarihi | `"2025-01-20"` |
| `category` | ✅ | Kategori | `"SEO"`, `"UI-UX"`, `"Dijital Pazarlama"` |
| `tags` | ✅ | Etiketler (array) | `["SEO", "Google"]` |
| `readTime` | ✅ | Okuma süresi | `"8 dk"` / `"8 min"` |
| `featured` | ❌ | Öne çıkan mı? | `true` / `false` |
| `image` | ✅ | Kapak görseli URL | `"https://..."` |
| `translationSlug` | ❌ | Diğer dildeki slug | `"what-is-seo"` |

---

## ✍️ Markdown İçerik Yazımı

### Başlıklar
```markdown
## Ana Başlık (H2)
### Alt Başlık (H3)
#### Daha Alt Başlık (H4)
```

### Listeler
```markdown
- Madde 1
- Madde 2
- Madde 3

1. Numaralı madde
2. Numaralı madde
```

### Kalın ve İtalik
```markdown
**kalın metin**
*italik metin*
***kalın ve italik***
```

### Linkler
```markdown
[Link metni](https://example.com)
[İletişim sayfası](/iletisim)
[Contact page](/contact)
```

### Görseller
```markdown
![Alt metin](https://example.com/image.jpg)
```

### Kod Blokları
```markdown
`tek satır kod`

​```javascript
const x = 1;
console.log(x);
​```
```

---

## 🖼️ Görsel Kaynakları

Ücretsiz yüksek kaliteli görseller için:

1. **Unsplash** - https://unsplash.com
2. **Pexels** - https://pexels.com
3. **Pixabay** - https://pixabay.com

Unsplash URL formatı:
```
https://images.unsplash.com/photo-ID?w=1200&auto=format&fit=crop&q=80
```

---

## 🚀 Yayınlama

1. Markdown dosyasını oluştur
2. `lib/slug-mappings.ts`'i güncelle (çeviri varsa)
3. Git commit & push
4. Vercel otomatik deploy eder

```bash
git add .
git commit -m "Yeni blog: Yazı başlığı"
git push
```

---

## 📁 Örnek Dosya

`content/blog/tr/ornek-yazi.md`:

```markdown
---
title: "Yapay Zeka ile SEO: 2025 Trendleri"
slug: "yapay-zeka-ile-seo-2025"
description: "2025'te yapay zeka SEO stratejilerini nasıl dönüştürüyor? AI-powered SEO araçları ve teknikleri hakkında kapsamlı rehber."
date: "2025-01-15"
category: "SEO"
tags: ["AI", "SEO", "Yapay Zeka", "2025 Trendleri"]
readTime: "10 dk"
featured: true
image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop&q=80"
translationSlug: "ai-powered-seo-2025"
---

## Yapay Zeka SEO'yu Nasıl Değiştiriyor?

2025 yılında yapay zeka, SEO dünyasını kökten değiştiriyor. Bu yazıda...

## AI-Powered SEO Araçları

### 1. İçerik Üretimi
Yapay zeka destekli araçlar...

### 2. Anahtar Kelime Analizi
...

## Sonuç

Profesyonel SEO danışmanlığı için [iletişime geçin](/iletisim).
```

---

## 💡 İpuçları

1. **Slug'lar:** Türkçe karakterler kullanma (ş→s, ğ→g, ü→u)
2. **Görseller:** 1200px genişliğinde kullan
3. **Açıklama:** 155 karakteri geçme (SEO için)
4. **İç Linkler:** Diğer yazılara ve sayfalara link ver
5. **CTA:** Yazı sonunda iletişim sayfasına yönlendir

---

## 🔧 Sorun Giderme

### Yazı görünmüyor?
- Dosya uzantısı `.md` mi?
- Frontmatter `---` ile başlayıp bitiyor mu?
- `slug` alanı dolu mu?

### Çeviri çalışmıyor?
- `translationSlug` doğru mu?
- `lib/slug-mappings.ts`'e eklendi mi?

### Görsel yüklenmiyor?
- URL erişilebilir mi?
- HTTPS kullanılıyor mu?
