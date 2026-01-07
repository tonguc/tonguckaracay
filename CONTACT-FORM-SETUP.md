# İletişim Formu Kurulum Rehberi

İletişim formunun çalışması için **Resend** servisini kullanıyoruz. Aşağıdaki adımları takip edin:

---

## 🚀 Hızlı Kurulum (5 Dakika)

### Adım 1: Resend'e Kaydol
1. 👉 [resend.com](https://resend.com) adresine git
2. **"Start Building"** butonuna tıkla
3. **GitHub** ile giriş yap (veya email ile kayıt ol)

### Adım 2: API Key Al
1. Dashboard'da sol menüden **"API Keys"** seç
2. **"Create API Key"** butonuna tıkla
3. İsim ver (örn: "Tonguc Website")
4. **API Key'i kopyala** (örn: `re_123abc...`)

### Adım 3: Vercel'de Environment Variable Ekle
1. Vercel dashboard'una git
2. Projenizi seç
3. **Settings** → **Environment Variables**
4. Yeni variable ekle:
   - **Name:** `RESEND_API_KEY`
   - **Value:** Kopyaladığın API key
   - **Environment:** Production, Preview, Development (hepsini seç)
5. **Save** butonuna tıkla

### Adım 4: Redeploy Et
1. Vercel dashboard'da **Deployments** sekmesine git
2. En son deployment'ın yanındaki **⋮** menüsüne tıkla
3. **"Redeploy"** seç

---

## ✅ Test Et

1. Sitenin iletişim sayfasına git
2. Formu doldur ve gönder
3. **tonguckaracay@gmail.com** adresine mail gelecek (5-10 saniye içinde)

---

## 📊 Resend Limitleri

- **Ücretsiz Plan:** 3,000 email/ay, 100 email/gün
- Domain doğrulaması yapmazsan **onboarding@resend.dev** adresinden gider
- Kendi domain'ini doğrularsan **kendi@domainin.com** adresinden gönderebilirsin

---

## 🔧 Domain Doğrulama (Opsiyonel)

Kendi domain'inden mail göndermek istersen:

1. Resend dashboard'da **"Domains"** sekmesine git
2. **"Add Domain"** → **tonguckaracay.com** ekle
3. Gösterilen **DNS kayıtlarını** domain ayarlarına ekle (Vercel/Namecheap/GoDaddy)
4. Doğrulamayı bekle (5-30 dakika)
5. `/app/api/contact/route.ts` dosyasında `from` adresini değiştir:
   ```typescript
   from: 'İletişim Formu <iletisim@tonguckaracay.com>',
   ```

---

## 🆘 Sorun mu var?

### "API key geçersiz" hatası alıyorsanız:
- Vercel'de environment variable'ı doğru eklediniz mi?
- Redeploy ettiniz mi?
- API key'i başında/sonunda boşluk olmadan kopyaladınız mı?

### Mail gelmiyor:
- Spam klasörünü kontrol edin
- Resend dashboard'da **"Logs"** kısmına bakın
- API key'in doğru olduğundan emin olun

---

## 💡 Alternatif: Web3Forms

Resend yerine Web3Forms kullanmak istersen:
1. [web3forms.com](https://web3forms.com) → Access key al
2. `/app/iletisim/page.tsx` dosyasındaki API endpoint'i değiştir

---

Herhangi bir sorun yaşarsan: tonguckaracay@gmail.com
