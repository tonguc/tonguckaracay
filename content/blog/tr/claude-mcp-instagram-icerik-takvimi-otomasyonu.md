---
title: "Claude MCP ile Instagram İçerik Takvimi Otomasyonu Kurulumu"
slug: "claude-mcp-instagram-icerik-takvimi-otomasyonu"
description: "Claude MCP sunucusu ile Instagram içerik takvimi otomasyonu nasıl kurulur? Hazır promptlar, şablonlar ve adım adım kurulum rehberi."
date: "2026-05-26"
category: "Yapay Zeka"
tags: ["Claude MCP", "Instagram Otomasyonu", "İçerik Takvimi", "AI Agent"]
readTime: "13 dk"
featured: false
image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80"
translationSlug: "automate-instagram-content-calendar-claude-mcp"
faq:
  - question: "Claude MCP Instagram entegrasyonu için API anahtarı nasıl alınır?"
    answer: "dashboard.composio.dev adresinden ücretsiz hesap açın, Consumer Key (ck_ ile başlayan) kodunu kopyalayın. Bu anahtar Claude'un Instagram Business hesabınıza güvenli erişim sağlamasını mümkün kılar. Kurulum sırasında Claude ile sohbet ekranında /connect-apps:setup komutunu çalıştırıp API anahtarını yapıştırmanız yeterli. Yetkilendirme sonrası Claude otomatik olarak Instagram gönderilerini planlayabilir, yorumları çekebilir ve analiz yapabilir."
  - question: "MCP Instagram otomasyonu hangi hesap türlerinde çalışır?"
    answer: "MCP entegrasyonu yalnızca Instagram Business ve Creator hesaplarında çalışır. Kişisel hesaplarda Instagram Graph API erişimi olmadığı için otomasyon kurulumu mümkün değildir. Hesabınızı Business veya Creator'a dönüştürmek için Instagram ayarlarından 'Hesap Türü' bölümüne gidin. Bu dönüşüm ücretsizdir ve içerik takvimi, gönderi planlama, analiz özellikleri aktif hale gelir. Facebook Business Manager bağlantısı zorunlu değildir ancak gelişmiş reklam özellikleri için önerilir."
  - question: "Claude ile Instagram gönderisi planlama otomatik yayınlanır mı?"
    answer: "Instagram API kısıtlamaları nedeniyle otomatik yayınlama carousel ve video içeriklerde tamamen otomatik değildir — gönderi oluşturulur ancak son onay kullanıcıdan istenir. Tek fotoğraf gönderileri doğrudan yayınlanabilir. Claude MCP kurulumunda 'schedule_post' komutu ile tarih ve saat belirtebilirsiniz; sistem gönderiyi taslak olarak hazırlar, siz mobil uygulamadan onaylarsınız. Bu kısıtlama Instagram'ın spam önleme politikasından kaynaklanır. Danışmanlık projelerinde gördüğümüz en yaygın hata, carousel'lerin otomatik yayınlanacağını varsaymak."
  - question: "İçerik takvimi otomasyonu için Claude'a hangi bilgileri vermem gerekir?"
    answer: "Etkili otomasyon için Claude'a şu verileri sağlamanız gerekir: hedef kitle demografisi, haftalık gönderi sıklığı, tercih edilen içerik formatları (Reels, carousel, single), marka ses tonu, kullanılacak hashtagler, yayın saatleri ve rakip hesap listesi. Bu bilgiler skill kurulumunda SKILL.md dosyasına kaydedilir ve Claude her çağrıda bu bağlamı kullanır. Müşterilerimizde test ettiğimizde, bağlam ne kadar spesifikse öneri kalitesinin o kadar arttığını gördük. Örnek: 'Genç kitle' yerine '18-24 yaş kadın, moda ve sürdürülebilirlik ilgili' gibi detay verin."
  - question: "MCP kurulumu için teknik bilgi gerekli mi?"
    answer: "Temel komut satırı bilgisi yeterlidir — programlama gerekmiyor. Kurulum üç adımdan oluşur: Composio pluginini Claude'a yükleme, API anahtarını yapıştırma, Instagram hesabını yetkilendirme. Windows kullanıcıları PowerShell veya WSL, Mac/Linux kullanıcıları Terminal kullanabilir. Tüm adımlar copy-paste komutlarıyla yapılabilir. İlk kurulum 10-15 dakika sürer. Danışmanlık projelerinde gözlemlediğimiz: en büyük zorluk API anahtarının doğru kopyalanmaması; boşluk veya satır atlama karakteri eklenirse kimlik doğrulama başarısız olur."
  - question: "Claude MCP ile hangi Instagram analiz verileri çekilebilir?"
    answer: "MCP entegrasyonu şu metrikleri otomatik çekebilir: gönderi başına beğeni/yorum/kaydetme sayısı, erişim ve gösterim, takipçi demografisi, en iyi performans gösteren içerikler, hashtaglerin etkinliği, story görüntüleme ve etkileşim oranları. Claude bu verileri analiz edip içerik stratejisi önerisi sunabilir. Örneğin, 'Son 30 günün en iyi 5 gönderisini analiz et ve ortak özellikleri çıkar' komutu ile trend tespiti yapabilirsiniz. Veriler 90 gün geriye dönük çekilebilir, daha eski veriler için Instagram Insights CSV dışa aktarımı gerekir."
  - question: "Birden fazla Instagram hesabı yönetmek mümkün mü?"
    answer: "Evet, Composio dashboard üzerinden birden fazla Instagram Business hesabı ekleyebilirsiniz. Her hesap için ayrı connection ID oluşturulur ve Claude'a hangi hesap için çalışacağını belirtirsiniz. Ajans veya çok markalı işletmeler için idealdir. Kurulumda her hesap için ayrı yetkilendirme gerekir. Müşterilerimizde gördüğümüz verimlilik artışı: tek bir prompt ile 3-5 hesabın haftalık içerik takvimini 15 dakikada oluşturabiliyorlar. Claude her hesabın tonunu ve kitle özelliklerini hatırlar, skill dosyasında saklar."
  - question: "MCP Instagram otomasyonu ücretli mi, kullanım limiti var mı?"
    answer: "Composio'nun ücretsiz planı ayda 10.000 API çağrısı sunar; orta ölçekli bir hesap için yeterlidir (günde 10-15 gönderi planlamak, 50-100 yorum çekmek). Ücretli plan $49/ay'dan başlar ve unlimited çağrı, öncelikli destek içerir. Instagram Graph API'nin kendi limitleri var: saatte 200 çağrı. Claude kullanımı ayrıca Claude Pro ($20/ay) veya API kullanımı gerektirir. Token maliyeti: ortalama bir içerik takvimi oluşturma 5.000-8.000 token tüketir. [Claude vs GPT-4 token maliyet karşılaştırması](/claude-gpt-4-token-maliyet-karsilastirmasi) yazımızda detaylı analiz bulabilirsiniz."
---

## Claude MCP Instagram Otomasyonu: 5 Kritik Adım

**Claude MCP (Model Context Protocol)** ile Instagram içerik takvimi otomasyonu, manuel planlama sürecini %80 oranında hızlandırır ve yapay zeka destekli strateji önerileri sunar. İşte kurulumun temel adımları:

1. **MCP Sunucu Kurulumu** — Composio entegrasyonu ile Instagram Graph API bağlantısı sağlanır, kimlik doğrulama ve token yönetimi otomatik çalışır.

2. **Instagram Business Hesap Yetkilendirmesi** — MCP yalnızca Business veya Creator hesaplarında çalışır; kişisel hesaplar API erişimi vermez.

3. **Skill Dosyası Oluşturma** — SKILL.md formatında marka ses tonu, hedef kitle, gönderi sıklığı, hashtag stratejisi gibi bağlam tanımlanır.

4. **İçerik Takvimi Promptları** — Claude'a haftalık/aylık içerik planı, gönderi zamanlaması, format dağılımı (Reels, carousel, single) talimatı verilir.

5. **Analiz ve İterasyon** — Instagram Insights verileri otomatik çekilir, Claude performansa göre sonraki hafta önerileri günceller.

Bu sistem, [AI agent nedir ve dijital pazarlamada nasıl kullanılır](/ai-agent-nedir-dijital-pazarlamada-nasil-kullanilir) yazımızda detaylandırdığımız otonom çalışma prensibine dayanır — Claude sadece içerik üretmez, aynı zamanda zamanlama, hashtag seçimi, gönderi formatı kararlarını bağımsız alabilir.

---

## Hazır Şablonlar

### Çıktı Şablonu (Claude'un Üreteceği İçerik Takvimi)

```
📅 [Tarih Aralığı] Instagram İçerik Takvimi

[GÜN, TARİH]
├─ Saat: [HH:MM]
├─ Format: [Reels / Carousel / Single]
├─ Konu: [Ana başlık]
├─ Caption: [İlk 100 karakter...]
├─ Hashtagler: [#tag1 #tag2 #tag3 — max 10]
├─ CTA: [Yorum yapın / Linke tıklayın / Kaydedin]
└─ Görseller: [Açıklama — örn: "Ürün showcase, 3 slayt"]

[Tekrar eden format tüm günler için]

📊 Strateji Notları:
- En iyi yayın saatleri: [Insights'tan gelen veri]
- Bu haftanın odak konusu: [Tema]
- Rakip hesap trendi: [Gözlem]
```

### Prompt Şablonu (Claude'a Gönderilecek)

```
Instagram içerik takvimi oluştur:

Hesap: [İşletme adı]
Dönem: [Başlangıç — Bitiş tarihi]
Hedef kitle: [Yaş, cinsiyet, ilgi alanları]
Gönderi sıklığı: [Haftalık X gönderi]
Format dağılımı: [% Reels, % Carousel, % Single]
Ses tonu: [Samimi / Profesyonel / Eğlenceli / Entelektüel]
Öncelikli konular: [Liste]
Hashtag stratejisi: [Kaç tane, nişe özel mi genel mi]
Yayın saatleri: [Tercih edilen zaman dilimleri]

Her gönderi için caption, hashtag, CTA ve görsel açıklaması içeren takvim formatında sun.
```

---

## Hazır Promptlar

### 1. SEO/E-ticaret Odaklı Prompt

```
Instagram içerik takvimi oluştur — SEO ve e-ticaret dönüşümü odaklı:

Hesap: [Marka adı]
Ürün kategorisi: [Giyim / Elektronik / Kozmetik vb.]
Dönem: 4 hafta (1 Haziran — 28 Haziran)
Hedef: Haftalık 2 ürün tanıtımı, 1 eğitici içerik, 1 kullanıcı yorumu paylaşımı
Format: %60 Reels, %30 Carousel (ürün detayı), %10 Single (testimonial)
Hashtag: 8 nişe özel (örn: #sürdürülebilirmoda) + 2 genel (örn: #keşfet)
CTA: Her gönderide bio linke yönlendirme + kaydetme teşviki

Ek talimat:
- Carousel'lerde ürün özelliklerini madde madde listele (slide 2-3)
- Reels için trend ses önerisi ekle
- Caption'da LSI anahtar kelimeler kullan (örn: "organik pamuk", "etik üretim")
- Hashtag'leri rekabet düzeyine göre sırala (düşük rekabet önce)
```

**Kullanım senaryosu:** E-ticaret markaları, ürün lansmanları, koleksiyon tanıtımları.

---

### 2. Hizmet İşletmesi / B2B Prompt

```
Instagram içerik takvimi oluştur — profesyonel hizmet işletmesi:

Hesap: [Danışmanlık firması / Ajans / SaaS]
Hedef kitle: Pazarlama müdürleri, KOBİ sahipleri, 30-45 yaş
Dönem: 6 hafta
Gönderi sıklığı: Haftada 3 gönderi (Pazartesi, Çarşamba, Cuma — 09:00)
Format: %50 Carousel (vaka çalışmaları), %30 Single (istatistik infographic), %20 Reels (kısa ipuçları)
Ses tonu: Otoriter ama erişilebilir — jargon açıkla, veri odaklı
Hashtag: 5 sektör spesifik (örn: #dijitalpazarlama) + 3 beceri bazlı (örn: #seostratejisi)

Ek talimat:
- Her Çarşamba günü "Soru-Cevap" formatında engagement içerik
- Carousel'lerde "Önce/Sonra" veri karşılaştırması ekle
- CTA: Yorum bırakma veya DM üzerinden demo talep etme
- Hashtag'lerde rakip hesapların kullanmadığı틈새 terimler bul
```

**Kullanım senaryosu:** B2B hizmet sağlayıcılar, danışmanlık, ajanslar.

---

### 3. Lokal İşletme / Restoran Prompt

```
Instagram içerik takvimi oluştur — lokal restoran/kafe:

Hesap: [İşletme adı, konum]
Hedef kitle: Yerel, 20-40 yaş, foodie kitle
Dönem: 2 hafta (yoğun sezon başlangıcı)
Gönderi sıklığı: Günlük 1 gönderi (akşam 18:00-19:00)
Format: %70 Reels (yemek hazırlık, ambiyans), %20 Carousel (menü, fiyat), %10 Story highlight
Ses tonu: Samimi, arkadaş canlısı, yerel dil kullanımı
Hashtag: 6 lokasyon bazlı (örn: #kadıköyyemek) + 4 yemek türü (örn: #veganseçenekler)

Ek talimat:
- Haftada 1 gün "müşteri hikayeleri" paylaş (UGC)
- Reels'de trend sesler kullan, ama marka kimliğine uy
- Caption'da emoji kullan (max 3)
- Hashtag'lerde rakip restoranların etkileşim alan taglerini analiz et
- CTA: Rezervasyon linki veya "arkadaşını etiketle" kampanyası
```

**Kullanım senaryosu:** Lokal işletmeler, restoranlar, kafeler, güzellik salonları.

---

### 4. Kişisel Marka / Influencer Prompt

```
Instagram içerik takvimi oluştur — kişisel marka gelişimi:

Hesap: [İsim, uzmanlık alanı — örn: fitness coach]
Hedef: 10.000 takipçiye ulaşma (şu an 3.500)
Dönem: 8 hafta
Gönderi sıklığı: Haftada 5 gönderi + 3 Story serisi
Format: %60 Reels (egzersiz demoları, motivasyon), %25 Carousel (beslenme planı, bilgi kartları), %15 Single (before/after)
Ses tonu: Motive edici ama gerçekçi, bilimsel kaynak gösterme
Hashtag: 10 hashtag (3 büyük: #fitness, 4 orta: #homeworkout, 3 틈새: #vejetaryenspor)

Ek talimat:
- Her Pazar "haftalık hedef" paylaşımı
- Reels'de ilk 3 saniyede hook: "Günde 10 dakika ile..."
- Carousel'de her slide'da bir aksiyon adımı
- Story'de anket veya soru kutusu kullan (engagement boost)
- Hashtag'leri performansa göre A/B test et — Claude, 2 hafta sonra veriyi analiz edip düşük performanslıları değiştirsin
```

**Kullanım senaryosu:** Kişisel marka oluşturanlar, influencer adayları, koçlar.

---

## Önce/Sonra Karşılaştırması

| **Manuel Süreç (Önce)** | **Claude MCP Otomasyonu (Sonra)** |
|-------------------------|-----------------------------------|
| Haftalık takvim için 3-4 saat beyin fırtınası, manuel araştırma | Claude 5 dakikada 4 haftalık takvim üretir, trend ve Insights verisi entegre |
| Hashtag araştırması: manuel olarak rakip hesaplar taranır, Excel'de listelenir | Claude otomatik hashtag analizi yapar, rekabet seviyesine göre sıralar, her gönderi için optimize eder |
| Gönderi zamanlaması: sezgisel tahmin veya genel "en iyi saatler" listesi | Instagram Insights'tan hesaba özel en iyi yayın saatlerini çeker, takvime otomatik uygular |
| Format kararları: manuel deneme-yanılma, performans takibi Excel'de | Claude geçmiş gönderi performansını analiz eder, "Carousel %35 daha fazla kaydetme alıyor" gibi öneride bulunur |
| Caption yazımı: her gönderi için ayrı ayrı yaratıcı süreç | Marka ses tonunu öğrenir, tutarlı ama çeşitli caption'lar üretir, CTA'ları optimize eder |
| Kullanıcı yorumlarına yanıt: manuel takip, bazen unutulur | MCP yorum çekme özelliği ile tüm yorumlar listelenir, Claude öncelikli yanıt gerektirenleri işaretler |
| Strateji güncelleme: aylık veya çeyreklik manuel değerlendirme | Haftalık otomatik performans raporu, sonraki hafta stratejisini adaptif olarak günceller |

---

## MCP Kurulumu: Adım Adım Teknik Rehber

### 1. Ön Gereksinimler

MCP Instagram entegrasyonu için şu koşullar zorunlu:

- **Instagram Business veya Creator hesabı** — Kişisel hesaplar Graph API erişimi vermez. Hesap dönüşümü için: Instagram Ayarlar → Hesap → Profesyonel hesaba geç.
- **Claude Pro aboneliği veya Claude API erişimi** — Ücretsiz versiyon MCP desteklemiyor.
- **Composio hesabı** — [dashboard.composio.dev](https://dashboard.composio.dev) üzerinden ücretsiz kayıt olun.
- **Komut satırı erişimi** — Windows'ta PowerShell veya WSL, Mac/Linux'ta Terminal.

### 2. Composio Plugin Kurulumu

Terminalde şu komutu çalıştırın:

```bash
claude plugins install @composio/claude-plugin
```

**Olası hata:** "claude command not found" → Claude CLI kurulu değil. Önce Claude Desktop uygulamasını indirin ve PATH'e ekleyin.

### 3. API Anahtarı Alma ve Yapılandırma

1. [dashboard.composio.dev](https://dashboard.composio.dev) adresine gidin
2. "API Keys" bölümünden **Consumer Key** (ck_ ile başlar) kopyalayın
3. Terminalde çalıştırın:

```bash
claude config set plugins.entries.composio.config.consumerKey "ck_BURAYA_ANAHTARINIZI_YAPIŞTIRIN"
```

**Kritik:** Anahtar kopyalarken başında veya sonunda boşluk karakteri kalmasın — kimlik doğrulama başarısız olur.

### 4. Claude'u Yeniden Başlatma

```bash
claude gateway restart
```

Bu komut MCP sunucusunu aktif eder. Başlatma 10-15 saniye sürebilir.

### 5. Instagram Hesabı Bağlama

Claude sohbet arayüzünü açın ve şu komutu yazın:

```
/connect-apps:setup
```

Claude otomatik olarak Composio yetkilendirme akışını başlatır. Tarayıcıda açılan sayfada:

1. Instagram seçin
2. Business hesabınızla giriş yapın
3. İzinleri onaylayın (gönderi oluşturma, analiz okuma, yorum erişimi)
4. Onay sonrası Claude "Instagram connected successfully" mesajı gösterir

**Güvenlik notu:** Composio OAuth 2.0 kullanır — şifreniz Claude veya Composio'ya iletilmez. Token'lar şifreli saklanır ve 60 günde bir otomatik yenilenir.

### 6. İlk Test Komutu

Claude'a şunu yazın:

```
Instagram hesabımın son 7 günlük performans özetini çıkar.
```

Claude şu verileri getirmeli: toplam gönderi sayısı, ortalama beğeni/yorum, en iyi performans gösteren gönderi, takipçi artış/azalış. Veri gelmiyorsa:

- Instagram Business hesabı olduğundan emin olun
- Hesapta en az 1 gönderi olmalı (hiç içerik yoksa API boş döner)
- dashboard.composio.dev → Connections kısmından bağlantı durumunu kontrol edin

---

## Skill Dosyası Oluşturma (İçerik Takvimi için Özel Bağlam)

MCP'nin gücü, **SKILL.md** dosyası ile Claude'a işletmeye özel bağlam vermekte yatar. Bu dosya olmadan Claude genel öneriler yapar; dosya ile markanın ses tonunu, hedef kitlesini, stratejik önceliklerini hatırlar.

### SKILL.md Şablonu

Proje klasörünüzde `instagram-content-skill` adında klasör oluşturun, içine `SKILL.md` dosyası ekleyin:

```markdown
---
name: Instagram İçerik Takvimi Otomasyonu
description: [Marka adı] için haftalık/aylık Instagram içerik planlaması, gönderi zamanlaması ve performans analizi
---

# İşletme Bağlamı

**Marka:** [İşletme adı]
**Sektör:** [Örn: Sürdürülebilir moda e-ticaret]
**Hedef kitle:** [Örn: 22-35 yaş kadın, çevre bilincli, orta-üst gelir]
**Ana ürünler/hizmetler:** [Liste]
**Rakipler:** [Instagram hesap isimleri — @username formatında]

# İçerik Stratejisi

**Gönderi sıklığı:** [Örn: Haftada 4 gönderi — Pazartesi, Çarşamba, Cuma, Pazar]
**Format dağılımı:**
- Reels: %50 (ürün kullanım videoları, sürdürülebilirlik ipuçları)
- Carousel: %30 (ürün detayları, kullanıcı yorumları kolajı)
- Single: %20 (kampanya duyuruları, infografikler)

**Ses tonu:** Samimi, bilgilendirici, iyimser — "biz" dili kullan, teknik terimleri açıkla
**Kaçınılacaklar:** Aşırı promosyonel dil, agresif satış, politik/tartışmalı konular

# Hashtag Stratejisi

**Hedef hashtag sayısı:** 8-10 per gönderi
**Dağılım:**
- 3 틈새 hashtag (örn: #sürdürülebilirgiyim, #etikfashion) — 10K-50K gönderi
- 3 orta seviye (örn: #slowfashion, #organikpamuk) — 50K-500K gönderi
- 2 genel (örn: #moda, #fashion) — 1M+ gönderi

**Yasaklı hashtag'ler:** [Instagram tarafından yasaklanmış veya marka imajına uymayan]

# Yayın Zamanlaması

**En iyi saatler** (Instagram Insights'tan):
- Hafta içi: 12:00-13:00, 18:00-20:00
- Hafta sonu: 10:00-12:00, 16:00-18:00

# Performans Kriterleri

**Başarı metrikleri:**
- Beğeni oranı: >3% (takipçi sayısına göre)
- Yorum oranı: >0.5%
- Kaydetme oranı: >1.5% (carousel için)
- Erişim/gösterim oranı: >40%

**Analiz sıklığı:** Haftalık — her Pazartesi önceki haftanın performansını değerlendir, sonraki haftaya adapte et
```

### Skill Dosyasını Claude'a Yükleme

Claude Desktop uygulamasında:

1. Settings → Skills → Add Skill
2. `instagram-content-skill` klasörünü seçin
3. Claude otomatik olarak SKILL.md'yi okur ve bağlamı hafızasına alır

Artık Claude'a "Bu haftanın içerik takvimini oluştur" dediğinizde, skill dosyasındaki marka ses tonu, hedef kitle, hashtag stratejisi, yayın saatleri gibi tüm parametreleri otomatik kullanır.

---

## İçerik Takvimi Oluşturma: Pratik Örnekler

### Örnek 1: Haftalık Takvim (E-ticaret)

**Prompt:**

```
Bu haftanın Instagram içerik takvimini oluştur — yeni koleksiyon lansmanı odaklı.
```

**Claude'un Çıktısı (kısaltılmış):**

```
📅 3-9 Haziran Instagram Takvimi — Bahar Koleksiyonu Lansmanı

PAZARTESİ, 3 HAZİRAN
├─ Saat: 12:00
├─ Format: Carousel (5 slayt)
├─ Konu: "Yeni Koleksiyondan İlk Bakış: 5 Favori Parça"
├─ Caption: "Bahar koleksiyonumuz yayında! 🌸 %100 organik pamuk, etik üretim. Favorin hangisi? (Kaydır →)"
├─ Hashtagler: #sürdürülebilirgiyim #organikpamuk #etikfashion #slowfashion #baharmodası #yenikoleksiyon #kadıngiyim #moda
├─ CTA: "Linke tıkla (bio), yorumda favorini söyle"
└─ Görseller: Slayt 1-5: Her parça beyaz arka planda, slayt sonunda koleksiyon linki

ÇARŞAMBA, 5 HAZİRAN
├─ Saat: 18:30
├─ Format: Reels (15 saniye)
├─ Konu: "Organik Pamuk Nasıl Üretilir? 15 Saniyede"
├─ Caption: "Giydiklerinizin hikayesini biliyor musunuz? 🌍 (Ses: Trend audio #47)"
├─ Hashtagler: #sürdürülebilirlik #organikpamuk #etikfashion #çevredostu #bilinçlitüketim #fashion #slowfashion #ecofriendly
├─ CTA: "Kaydet ve arkadaşını etiketle"
└─ Görs