# Tonguç Karaçay - Personal Portfolio Website (v2.0)

## 🌐 Bilingual Portfolio - Turkish & English

Bu proje, Tonguç Karaçay'ın kişisel portfolio web sitesidir. **Next.js 14**, **TypeScript**, **Tailwind CSS** ve **next-intl** kullanılarak geliştirilmiştir.

### ✨ Yenilikler (v2.0)

- 🌍 **Çift Dil Desteği** - Türkçe (varsayılan) ve İngilizce
- 🌐 **Geo-based Yönlendirme** - Kullanıcı lokasyonuna göre otomatik dil seçimi
- 🔗 **hreflang SEO Tags** - Google için doğru dil işaretlemesi
- 🔄 **Language Switcher** - Header'da dil değiştirme butonu
- 📱 **Responsive Design** - Mobil uyumlu dil seçici

### 📁 URL Yapısı

```
tonguckaracay.com/               → Türkçe Ana Sayfa
tonguckaracay.com/en/            → English Homepage
tonguckaracay.com/blog/          → Türkçe Blog
tonguckaracay.com/en/blog/       → English Blog
tonguckaracay.com/hakkimda/      → Türkçe Hakkımda
tonguckaracay.com/en/about/      → English About
```

### 🛠 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build
```

### 📦 Teknolojiler

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **i18n:** next-intl
- **Icons:** Lucide React
- **Markdown:** react-markdown + remark-gfm
- **Email:** Resend API

### 🌐 Dil Dosyaları

Çeviri dosyaları `messages/` klasöründe:
- `messages/tr.json` - Türkçe
- `messages/en.json` - English

### 📝 Blog Sistemi

Blog yazıları `lib/blog.ts` içinde her iki dil için tanımlanmıştır:
- Türkçe yazılar: `blogPostsTR`
- İngilizce yazılar: `blogPostsEN`

### 🚀 Deploy

Vercel'e deploy için:

```bash
vercel
```

veya GitHub'a push yaparak otomatik deploy.

### 📧 İletişim Formu

Contact form için `.env.local` dosyasına Resend API key ekleyin:

```
RESEND_API_KEY=re_xxxxx
```

### 🔍 SEO

- Her sayfa için ayrı metadata
- hreflang tags ile dil ilişkisi
- Sitemap otomatik oluşturma
- robots.txt

---

**Version:** 2.0.0  
**Author:** Tonguç Karaçay  
**License:** MIT
