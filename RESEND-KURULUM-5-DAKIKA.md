# 📧 İletişim Formu - Resend Kurulumu (5 Dakika!)

## ✅ Neden Resend?

- ✅ **3,000 email/ay ücretsiz** (100/gün)
- ✅ **Kredi kartı gerektirmiyor**
- ✅ **5 dakikada kurulum**
- ✅ **Gmail'e %99.9 teslimat**
- ✅ **Vercel'in resmi önerisi**
- ✅ **FormSubmit gibi yönlendirme yok**

---

## 🚀 Kurulum (3 Adım)

### 1️⃣ Resend Hesabı Oluştur (1 dakika)

**A) Siteye Git:**
👉 https://resend.com/signup

**B) Gmail ile Kaydol:**
- "Sign up with Google" butonuna tıkla
- **tonguckaracay@gmail.com** ile giriş yap
- ✅ Kredi kartı istemiyor!

**C) Email Doğrula:**
- Gmail'e gelen "Verify your email" mailine tıkla
- ✅ Hesap aktif!

---

### 2️⃣ API Key Oluştur (1 dakika)

**A) Dashboard'a Git:**
- Giriş yaptıktan sonra otomatik açılır
- Sol menüden **"API Keys"** sekmesine tıkla

**B) Yeni Key Oluştur:**
- **"Create API Key"** butonuna tıkla
- İsim: `tonguckaracay-website` (ya da istediğin)
- Permission: **"Sending access"** (varsayılan)
- **"Create"** butonuna tıkla

**C) Key'i Kopyala:**
```
re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```
- 🚨 **Sadece 1 kez gösterilir!** Şimdi kopyala!
- Bir yere (notepad) yapıştır

---

### 3️⃣ Vercel'de Environment Variable Ekle (2 dakika)

**A) Vercel Dashboard'a Git:**
👉 https://vercel.com

**B) Projeyi Seç:**
- **tonguckaracay** projesine tıkla

**C) Settings → Environment Variables:**
1. Sol menüden **"Settings"** tıkla
2. **"Environment Variables"** sekmesine tıkla
3. **"Add"** butonuna tıkla

**D) Variable Ekle:**
```
Name:  RESEND_API_KEY
Value: re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
       (kopyaladığın key'i yapıştır)
```

**E) Environment Seç:**
- ✅ **Production** (işaretle)
- ✅ **Preview** (işaretle)
- ✅ **Development** (işaretle)

**F) Kaydet:**
- **"Save"** butonuna tıkla
- ✅ Kaydedildi!

---

### 4️⃣ Yeniden Deploy Et (30 saniye)

**Seçenek 1 - Vercel'de:**
- Projene git
- Sağ üstte **"Redeploy"** butonuna tıkla
- ✅ Bitti!

**Seçenek 2 - Git ile:**
```bash
git add .
git commit -m "add resend api key" --allow-empty
git push
```

---

## ✅ TEST ET!

### 1. Siteye Git
👉 https://tonguckaracay.vercel.app/iletisim

### 2. Formu Doldur
- Ad Soyad: Test
- Email: test@example.com
- Mesaj: Deneme mesajı

### 3. Gönder
- ⏳ "Gönderiliyor..." spinner görünür
- ✅ "Mesajınız Gönderildi!" mesajı

### 4. Gmail'i Kontrol Et
- 📧 **tonguckaracay@gmail.com** aç
- 5-10 saniye içinde mail gelecek
- Konu: "İletişim Formu - Test"
- ✅ Güzel formatlanmış email!

---

## 📧 Gelen Email Formatı

```
─────────────────────────────────────
  Yeni İletişim Formu Mesajı
─────────────────────────────────────

Ad Soyad:  Ahmet Yılmaz
E-posta:   ahmet@example.com
Telefon:   0555 123 45 67
Şirket:    ABC Ltd.
İlgilendiği Hizmet: UI/UX Tasarım

─────────────────────────────────────
Mesaj:
─────────────────────────────────────
Merhaba, proje hakkında bilgi almak
istiyorum...

─────────────────────────────────────
Bu mesaj tonguckaracay.com iletişim 
formundan gönderildi.
```

---

## 🔥 Bonus: Custom Domain (Opsiyonel)

Şu an emailler `onboarding@resend.dev` adresinden geliyor.

**İstersen:** `iletisim@tonguckaracay.com` yapabilirsin
- Resend Dashboard → Domains
- Domain ekle (DNS ayarları)
- 15 dakika kurulum

Ama **şimdilik gerek yok** - varsayılan adres mükemmel çalışıyor!

---

## 🐛 Sorun Çözme

### Email Gelmiyor?
1. **Vercel Environment Variables:**
   - RESEND_API_KEY doğru yazılmış mı?
   - Boşluk var mı başta/sonda?
   - 3 environment'a da eklendi mi?

2. **Vercel Logs:**
   - Vercel Dashboard → Project → Logs
   - Hatayı göster bana

3. **Gmail Spam:**
   - Spam klasörüne bak
   - İlk email spam'e düşebilir

### API Key Çalışmıyor?
- Resend Dashboard → API Keys
- Key aktif mi kontrol et
- Gerekirse yeni key oluştur

---

## 💰 Ücretsiz Limitler

✅ **3,000 email/ay**  
✅ **100 email/gün**  
✅ **Kredi kartı yok**  
✅ **Sınırsız domain**  

**Yeterince fazla!** İletişim formu için ideal.

---

## 📊 Özet

| Özellik | FormSubmit | Resend |
|---------|------------|--------|
| Kurulum | 0 dakika | 5 dakika |
| UX | Kötü (yönlendirme) | Mükemmel (AJAX) |
| Email Formatı | Basic | HTML/Güzel |
| Limit | Sınırsız | 3000/ay |
| Teslimat | %70 | %99.9 |
| **Tavsiye** | ❌ | ✅ |

---

## 🚀 ÖNEMLİ: HEMEN KOPYALA!

API Key'i **Resend Dashboard'da sadece 1 kez** gösterilir!

Hemen kopyala → Vercel'e yapıştır → Deploy et!

**5 dakika sonra çalışıyor olacak!** 🎉
