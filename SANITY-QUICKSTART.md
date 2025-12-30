# 🚀 Sanity CMS - Hızlı Başlangıç (10 Dakika)

## ✅ Kurulum Tamamlandı!

Sanity CMS artık projeye entegre. Sadece 3 adım kaldı:

---

## 📋 YAPILACAKLAR LİSTESİ

### ☐ 1. Sanity Hesabı Oluştur (2 dk)
👉 https://www.sanity.io/
- GitHub ile giriş yap
- "Create project" tıkla
- İsim: `tonguckaracay-blog`
- Template: **Clean project**
- Project ID'yi **kopyala** (örn: `abc12345`)

### ☐ 2. Vercel'e Environment Variables Ekle (3 dk)
👉 https://vercel.com
- tonguckaracay projesine git
- Settings → Environment Variables
- Add New:

```
NEXT_PUBLIC_SANITY_PROJECT_ID = abc12345
NEXT_PUBLIC_SANITY_DATASET = production
```

- 3 environment'a da ekle (Production, Preview, Development)
- **Redeploy et!**

### ☐ 3. CORS Ayarı (2 dk)
👉 Sanity Dashboard → Project Settings
- API → CORS Origins
- Add:

```
https://tonguckaracay.vercel.app ✅
http://localhost:3000 ✅
```

---

## 🎉 HAZIR!

### Admin Panel Aç:
👉 **https://tonguckaracay.vercel.app/studio**

### İlk Blog Yazısını Ekle:
1. Studio'yu aç
2. "Blog Yazıları" → "+"
3. Formu doldur
4. "Publish" tıkla
5. **Anında sitede!**

---

## 📖 Detaylı Rehber

Tüm detaylar için:
👉 **SANITY-SETUP.md** dosyasına bak

- Ekran görüntülü adımlar
- Blog yazma ipuçları
- Resim yönetimi
- SEO optimizasyonu
- Mobil kullanım
- Sorun giderme

---

## 🆘 Sorun mu Var?

1. **Studio açılmıyor?**
   - CORS ayarını kontrol et
   - Environment variables doğru mu?

2. **Blog yazıları görünmüyor?**
   - Publish edildi mi?
   - Vercel redeploy edildi mi?

3. **Resim yüklenmiyor?**
   - Dosya boyutu max 10MB
   - Format: JPG, PNG, WebP

---

**Hemen başla! 5 dakikada ilk blog yazını yayınla!** 🚀
