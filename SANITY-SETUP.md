# 🎨 Sanity CMS Kurulumu - Blog Yönetim Sistemi

## ✅ Neden Sanity?

- 🎨 **Güzel admin panel** - Kolay kullanım
- 📝 **Rich text editor** - Word gibi yaz
- 🖼️ **Resim yönetimi** - Sürükle bırak
- 📱 **Mobil uyumlu** - Her yerden yönet
- 🚀 **Hızlı** - Anında yayınla
- 🆓 **Ücretsiz** - 3 admin kullanıcı

---

## 🚀 KURULUM (4 Adım - 10 Dakika)

### 1️⃣ Sanity Hesabı Oluştur

**A) Siteye Git:**
👉 https://www.sanity.io/

**B) Sign Up:**
- "Get Started" tıkla
- **GitHub ile giriş yap** (önerilen)
- Ya da Google/Email

**C) İlk Proje:**
- Dashboard açılacak
- "Create new project" göreceksin

---

### 2️⃣ Yeni Proje Oluştur

**A) "Create Project" Tıkla**

**B) Bilgileri Gir:**
```
Project name: tonguckaracay-blog
Dataset: production
```

**C) Template Seç:**
- **"Clean project"** seç
- (Blog template değil, clean!)

**D) Oluştur:**
- "Create project" tıkla
- ✅ Proje oluşturuldu!

---

### 3️⃣ Project ID'yi Al

**A) Dashboard'da Proje Sayfası Açıldı**

**B) Project ID'yi Bul:**
- Sayfanın üstünde göreceksin
- Örnek: `abc12345`
- **Kopyala!**

Ya da:
- Settings → API
- Project ID orada yazıyor

---

### 4️⃣ Environment Variables Ekle

#### **A) Vercel'de:**

1. Vercel Dashboard → tonguckaracay
2. Settings → Environment Variables
3. Add New:

```
Name:  NEXT_PUBLIC_SANITY_PROJECT_ID
Value: abc12345  (kopyaladığın ID)
✅ Production
✅ Preview
✅ Development
```

4. Add New (ikinci variable):

```
Name:  NEXT_PUBLIC_SANITY_DATASET
Value: production
✅ Production
✅ Preview
✅ Development
```

5. **Redeploy Et!**

#### **B) Local'de (.env.local):**

Proje klasöründe `.env.local` dosyası oluştur:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=abc12345
NEXT_PUBLIC_SANITY_DATASET=production
RESEND_API_KEY=re_Lg9GXaDt_8kSzPsRM7C1CDDW98N8b15jt
```

---

## 🎯 CORS Ayarı (ÖNEMLİ!)

Sanity Studio'nun çalışması için domain'i whitelist'e ekle:

### A) Sanity Dashboard → Project Settings

**B) API → CORS Origins**

**C) Add CORS Origin:**

```
Origin: https://tonguckaracay.vercel.app
Allow credentials: ✅

Origin: http://localhost:3000
Allow credentials: ✅
```

**D) Save**

---

## ✅ KURULUM BİTTİ!

Şimdi **Sanity Studio'yu aç**:

👉 **https://tonguckaracay.vercel.app/studio**

Ya da local'de:
👉 **http://localhost:3000/studio**

---

## 🎨 İLK BLOG YAZISI EKLE

### 1) Studio'yu Aç

https://tonguckaracay.vercel.app/studio

### 2) Giriş Yap

Sanity hesabınla giriş yapacak (otomatik)

### 3) Yeni Blog Oluştur

**A) Sol menüden "Blog Yazıları" tıkla**

**B) Sağ üstte "+" (Create) butonu**

**C) Formu Doldur:**

```
Başlık: ChatGPT ile Üretkenlik Artırmanın 10 Yolu

URL (Slug): 
[Generate] butonuna tıkla → otomatik oluşur

Özet:
ChatGPT'yi iş hayatınızda nasıl etkili kullanırsınız? 
İşte 10 pratik öneri ve gerçek örnekler.

Ana Görsel:
[Upload] → Resim seç

Kategori:
Yapay Zeka

Etiketler:
chatgpt, üretkenlik, ai, iş hayatı

Yazar:
Tonguç Karaçay (otomatik gelir)

Yayın Tarihi:
Bugünün tarihi (otomatik gelir)

İçerik:
[Buraya blog yazısını yaz]
- Başlıklar için H2, H3 kullan
- Bold, italic, link ekle
- Resim ekle (drag & drop)
- Code blok ekle
```

**D) SEO Ayarları:**
```
Meta Başlık: ChatGPT ile Üretkenlik: 10 Pratik Yöntem
Meta Açıklama: ChatGPT ile iş süreçlerinizi optimize edin...
Odak Anahtar Kelime: chatgpt üretkenlik
```

**E) Öne Çıkan:**
- Toggle'ı aç (ana sayfada gösterilecek)

**F) Publish:**
- Sağ altta **"Publish"** butonu
- Tıkla!

### 4) Sonuç

**Blog yazısı anında sitede!**

👉 https://tonguckaracay.vercel.app/blog

---

## 📝 BLOG YAZMA İPUÇLARI

### Rich Text Editor

**Başlıklar:**
- H1: Sayfa başlığı (otomatik)
- H2: Ana bölümler
- H3: Alt bölümler

**Formatlar:**
- **Bold**: Önemli kelimeler
- *Italic*: Vurgu
- `Code`: Kod snippet
- > Quote: Alıntı

**Link Ekle:**
1. Metni seç
2. 🔗 link ikonuna tıkla
3. URL yapıştır

**Resim Ekle:**
- İçeriğe resim ekle butonu
- Ya da drag & drop
- Alt text yaz (SEO için)

**Kod Bloğu:**
- Code block ekle
- Dil seç (JavaScript, Python, etc.)
- Kodu yapıştır

---

## 🖼️ RESIM YÖNETİMİ

### Optimum Resim Boyutları:

```
Ana Görsel (Featured): 1200x630px
İçerik Resimleri: 800-1200px genişlik
Thumbnail: 400x300px
```

### Resim Formatı:
- ✅ JPG (fotoğraflar)
- ✅ PNG (grafikler, şeffaflık)
- ✅ WebP (en iyi sıkıştırma)

### Dosya Boyutu:
- Ana görsel: Max 500KB
- İçerik: Max 300KB

**Sanity otomatik optimize eder!**

---

## 🔄 GÜNCELLEMELER

### Taslak → Yayın:

1. Yazıyı yaz
2. **"Save"** (sağ alt) → Taslak olarak kaydeder
3. Hazır olunca **"Publish"**

### Yayında Değişiklik:

1. Blog yazısını aç
2. Değiştir
3. **"Publish"** → Güncelleme yayınlanır

### Unpublish:

1. Blog aç
2. Sağ üst **•••** (3 nokta)
3. **"Unpublish"**

---

## 📱 MOBİL KULLANIM

Sanity Studio mobil uyumlu!

**Tarayıcıdan:**
- https://tonguckaracay.vercel.app/studio
- Telefon/tablet'ten aç
- Giriş yap
- Yaz, düzenle, yayınla!

**App yok ama tarayıcı mükemmel çalışıyor.**

---

## 👥 EKİP YÖNETİMİ

### Yeni Admin Ekle:

1. Sanity Dashboard
2. Project → Members
3. **"Invite members"**
4. Email gir
5. Role seç:
   - **Administrator**: Tam yetki
   - **Editor**: Sadece içerik
   - **Viewer**: Sadece görüntüleme

**Ücretsiz 3 admin!**

---

## 🐛 SORUN GİDERME

### Studio Açılmıyor

**Çözüm 1: CORS Kontrol**
- Sanity Dashboard → API → CORS
- Domain eklenmiş mi?

**Çözüm 2: Environment Variables**
- Vercel'de SANITY_PROJECT_ID var mı?
- Doğru yazılmış mı?
- Redeploy edildi mi?

**Çözüm 3: Cache Temizle**
- Browser cache temizle
- Hard refresh (Ctrl+Shift+R)

### Blog Yazıları Görünmüyor

**Çözüm 1: Publish Edildi mi?**
- Studio'da "Published" status'ü kontrol et

**Çözüm 2: Dataset Doğru mu?**
- `production` olmalı

**Çözüm 3: Vercel Rebuild**
- Yeni deploy et

---

## 💡 PRO İPUÇLARI

### 1. Scheduled Publishing

**Gelecekte Yayınla:**
- Yayın Tarihi → Gelecek tarih seç
- Publish → O tarihte otomatik yayınlanır

### 2. Drafts

**Taslak Sistemi:**
- Henüz hazır değilse "Save" yap
- "Publish" yapana kadar taslak kalır
- İstediğin zaman devam et

### 3. Revisions

**Geçmiş Versiyonlar:**
- Sağ üst **•••** → "Revision history"
- Eski versiyonları gör
- İstersen geri dön

### 4. Bulk Operations

**Toplu İşlemler:**
- Birden çok yazı seç
- Toplu unpublish
- Toplu kategori değiştir

### 5. Search

**Hızlı Arama:**
- Üstte arama kutusu
- Başlık/slug ile ara
- Hızlıca bul

---

## 📊 SANITY vs DİĞERLERİ

| Özellik | Sanity | WordPress | Notion |
|---------|--------|-----------|--------|
| Kurulum | 10 dk | 30 dk | 30 dk |
| UI Kalitesi | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| Hız | ⚡⚡⚡ | ⚡ | ⚡⚡ |
| Özelleştirme | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| Mobil | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Ücretsiz Limit | 3 admin | Limitsiz | 10 sayfa |
| **Tavsiye** | ✅✅✅ | ⭐ | ⭐⭐ |

---

## 🎉 ÖZET

### Ne Yaptık?
✅ Sanity CMS kuruldu  
✅ Blog schema oluşturuldu  
✅ Studio sayfası hazır  
✅ Resim yönetimi aktif  
✅ SEO alanları eklendi  

### Nasıl Kullanılır?
1. https://tonguckaracay.vercel.app/studio
2. Giriş yap
3. Blog Yazıları → +
4. Yaz, resim ekle, publish!

### Sonuç?
🎨 **Profesyonel admin panel**  
📝 **Kolay blog yazma**  
🚀 **Anında yayınlama**  

**Haftada 1-2 blog artık 5 dakika!** 🎉
