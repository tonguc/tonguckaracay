# tonguckaracay.com — Claude Agent Kılavuzu

Son güncelleme: 2026-06-05

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

## Ana Sayfa (Homepage) — Haziran 2026 Yeniden Tasarım

Ana sayfa premium kişisel-marka / danışmanlık formatında yeniden tasarlandı. **Tüm bölümler `components/home/` altında**; `app/[locale]/page.tsx` bunları sırayla render eder. TR/EN inline `locale` ternary ile yazılır (mevcut desen). Tasarım sistemi: deep-navy bg + amber/gold accent (`accent-*`), glassmorphism (`.card`), `.text-gradient` (sarı→hafif turuncu, `accent-400→accent-500`), Poppins.

### Bölüm sırası (`app/[locale]/page.tsx`)
1. `HeroDynamic` — sol: **otomatik güncellenen "Son Yazı" kartı** (`getAllPosts()[0]` — manuel güncelleme YOK, yeni yazı yayınlanınca kendi değişir) · sağ: **H1 değer önermesi** + müsaitlik rozeti + CTA + istatistik + altta küçük cutout portre
2. `TrustedBy` — 34 markanın wordmark duvarı (kutu/buton DEĞİL, tıklanmaz)
3. `CaseStudies` — 3 temsili sonuç kartı (sözel/nitel vurgu; uydurma kesin rakam YOK) → "Vaka İncele" iletişime
4. `Engagement` — kartsız premium timeline ("A Typical Engagement" / "Nasıl Çalışıyorum"); desktop yatay, mobil dikey
5. `WhyMe` — 3 sütun (anlama göre renkli ikonlar)
6. `Insights` — en yeni 6 blog yazısı grid ("Son Yazılar")
7. `PersonalStory` — büyük cutout portre + timeline ("Hakkımda")
8. `FinalCTASection` — görüşme + mesaj

### Kurallar / notlar
- **Portre görseli:** `public/tonguckaracay-ux-seo-ai.png` = arka planı silinmiş (transparent) cutout; Hero avatarı + PersonalStory bunu kullanır (yumuşak ışık zemini + alta fade, montaj hissi yok). Eski `public/tonguc-karacay.jpg` artık homepage'de kullanılmıyor.
- **Tek H1:** sayfada yalnızca `HeroDynamic` H1'i (değer önermesi); featured kart başlığı `h2`. Layout'a/başka yere ikinci H1 ekleme.
- **Eski component'ler** (`Hero, Services, About, BlogPreview, FinalCTA, Expertise`) artık homepage'de kullanılmıyor; geri dönüş için repoda duruyor (silinmedi).
- **Referanslar/testimonials bölümü YOK** — gerçek müşteri yorumu/foto gelene kadar eklenmedi. **Uydurma referans/metrik yayınlama** (FTC/AB sahte yorum yasağı + itibar riski). Gerçek veri gelince `components/home/` altına eklenir.
- **Vaka metrikleri temsilidir** — gerçek vaka verisiyle güncellenecek.
- Footer logosu: **"Tonguç Karaçay."** (`components/Footer.tsx`).

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
- **KRİTİK — Frontmatter YAML tırnak kuralı:** Çift tırnaklı bir frontmatter değerinin (title, description, faq question/answer) İÇİNDE düz `"` kullanma. YAML çift tırnaklı scalar'da iç tırnak `\"` olarak escape edilmeli (örn. `answer: "... (örn. \"şiddetli ağrım var\") ..."`). Escape edilmezse `gray-matter` parse edemez → **Next.js build'i komple çöker → o yazı yayına çıkamaz + sonraki tüm deploy'lar kilitlenir** (site donar). Alternatif: iç ifadeyi tek tırnakla yaz (`'...'`). Manuel yazımda buna dikkat et; tc-agent zaten otomatik escape ediyor (aşağıya bak).

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
| `content/blog/en/ai-agent-patient-follow-up-appointment-reminders.md` | **Haziran 2026:** FAQ cevabındaki kaçırılmamış iç çift tırnak (`(e.g., "...")`) düzeltildi. Bu bozuk YAML, `gray-matter` parse'ında `YAMLException: a colon is missed` verip Vercel build'ini tamamen düşürmüştü → site son sağlam deploy'da donmuş, EN yazısı yayına çıkamamış, sonraki tüm deploy'lar (agent fix dahil) ERROR olmuştu. Tırnaklar `\"` ile escape edilince build yeşile döndü |
| `tc-agent/agent.py` | **Haziran 2026:** Telegram agent'a `_sanitize_frontmatter` + `_validate_frontmatter` eklendi — ürettiği frontmatter'daki iç tırnakları push'tan önce otomatik escape eder ve PyYAML ile doğrular; geçersizse hata verip **bozuk yazıyı GitHub'a basmaz**. Böylece yukarıdaki build-kilitleyen YAML hatası bir daha oluşamaz. Ayrıca tüm Claude çağrıları geçici 5xx/429 hatalarında retry'lı (`_claude_create`) |
| `tc-agent/agent.py` | **Haziran 2026:** `/fikir` komutu tamamen **SEO-odaklı** yeniden yazıldı — `harvest_keyword_pool` ile gerçek SERP verisi (PAA + ilgili aramalar + rakip başlıkları) madenler (konu verilince 2-aşamalı genişletme = ~4 SERP), öneriler uydurma keyword yerine **gerçek sorgulara** dayanır. Prompt kuralları: kitle-persona dizilim yasağı (çeşitlilik içerik-açısı ekseninde: problem/hata/karşılaştırma/süreç/veri/vaka/tanım/framework), **yıl yasağı**, **keyword cannibalization yasağı**. `_chunk_telegram` ile Telegram 4096 limitinde öneriler kesilmeden bölünür |

### KRİTİK: Telegram Agent (tc-agent) — Slug & Build Güvenliği

Blog yazıları çoğunlukla **Telegram üzerinden tc-agent** ile üretiliyor (`/yazi`, `/fikir` → numara). Agent TR+EN çift yazı üretip GitHub'a push eder, Vercel otomatik deploy alır.

**Bir blog yazısının build'i kırma / yanlış indexlenme riskini önlemek için 3 kural:**
1. **Frontmatter YAML geçerli olmalı** — iç çift tırnaklar escape (`\"`). Agent bunu otomatik yapar; manuel düzenlemede sen dikkat et. Geçersiz YAML = tüm site deploy'u kilitlenir.
2. **translationSlug iki yönlü tutarlı olmalı** — TR yazının `translationSlug`'ı EN slug'a, EN yazının `translationSlug`'ı TR slug'a işaret etmeli. Agent bunu zorla senkronlar; ayrıca `lib/slug-mappings.ts` güncellenmeli (dil switcher + hreflang buna bağlı).
3. **Yıl yok, manuel TOC yok** (yukarıdaki frontmatter kuralları).

**Yeni yazı sonrası kontrol:** Vercel deploy'unun **READY** olduğunu doğrula (ERROR ise build kırılmıştır → site eski deploy'da donar, yeni içerik yayına çıkamaz). Bozulursa build log'undaki `YAMLException` satırına bak, ilgili `content/blog/<lang>/<slug>.md` frontmatter'ını düzelt.

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
app/[locale]/page.tsx           — ANA SAYFA (home bölümlerini sırayla render eder)
components/home/                 — ana sayfa bölümleri (HeroDynamic, TrustedBy, CaseStudies, Engagement, WhyMe, Insights, PersonalStory, FinalCTASection)
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

**Haziran 2026 — tonguckaracay AYRI Vercel hesabına taşındı.**

- **Aktif hesap (yeni):** Vercel slug `tonguckaracay` (Gmail ile açılmış ayrı ücretsiz Hobby hesabı). `tonguckaracay` projesi burada barınıyor.
- **Deploy:** GitHub `tonguc/tonguckaracay` → `main`'e push → yeni hesapta otomatik production deploy. (Telegram bot → GitHub → otomatik deploy akışı korundu.)
- **Domain DNS:** Domain `guzel.net.tr`'de kayıtlı. Nameserver'lar Vercel'den **guzel.net.tr DNS yönetimine** alındı; apex `A @ → 76.76.21.21` + doğrulama için `_vercel TXT (vc-domain-verify=...)`. www CNAME → `cname.vercel-dns.com`. **guzel.net.tr nameserver/DNS'ine dokunma** — site bağlantısı buna bağlı.

### Neden taşındı (geçmiş kayıt)
- **Eski hesap:** "Tonguç's projects" (`team_pPyw9vJKydRnGfBq6llHK68H`, eski proje `prj_yNvFrZGRN2iJAv7jQSkRd84H69fg`). Tek ücretsiz Hobby hesabında **4 proje** vardı: `whattime-city`, `tonguckaracay`, `auditpro`, `agencyos-bot`.
- **Sorun:** Hobby kotası **hesap genelinde** sayılıyor. Bot trafiği ağır olan **whattime-city** serverless sayaçlarını patlattı (ISR Writes 7.5×, Edge Requests/Function Invocations/CPU aşımı — bandwidth değil). Sonuç: **tüm hesap "Paused"** → tonguckaracay da yan hasar olarak kapandı. (Vercel Pro tuzak: kullanım üstü faturalanır; whattime daha önce ~$50-60/ay yapmıştı.)
- **Çözüm:** tonguckaracay'ı kendi ayrı ücretsiz hesabına aldık → whattime'ın kotasından izole, bir daha o yüzden kapanmaz.
- **Not:** Paused hesap domain Move/Delete/DNS-edit'e izin vermediği için domaini eski hesaptan çıkaramadık; bu yüzden DNS'i guzel.net.tr'ye taşıyıp `_vercel` TXT ile yeni hesapta doğruladık.

---

## Sonraki Adımlar

- [ ] 4–6 hafta sonra GSC Coverage raporunu kontrol et
- [ ] "Tarandı ama indexlenmedi" sayısının düşmesini izle
- [ ] keyword-research yazıları pozisyon takibi (şu an pos. 63)
- [ ] heading-tags yazıları pozisyon takibi (şu an pos. 92)
- [ ] Statik sayfaların (hizmetler/services) hreflang kontrolü
- [ ] Yeni blog içerikleri: UI/UX ve AI konuları (EN öncelikli)
- [ ] **Ana sayfa Referanslar bölümü:** gerçek müşteri yorumu / LinkedIn tavsiyesi gelince ekle (uydurma yayınlama)
- [ ] **Ana sayfa vaka çalışması metrikleri:** gerçek verilerle güncelle
- [ ] Kullanılmayan eski homepage component'lerini temizle (Hero/Services/About/BlogPreview/FinalCTA/Expertise) + `claude/homepage-redesign` branch'i sil
- [ ] **whattime-city kalıcı çözüm:** eski hesapta kalan whattime + auditpro + agencyos, ay başı reset olunca whattime'ın bot trafiği yüzünden yine paused olur. whattime'ı kendi ayrı hesabına veya DigitalOcean VPS'ine (`clawdbot`, 134.209.202.253) taşı; metered olmayan yerde bot trafiği faturayı/paused'u tetiklemez. (auditpro/agencyos önemliyse onları da ayır.)
- [ ] tonguckaracay yeni hesabında `RESEND_API_KEY` + `ANTHROPIC_API_KEY` env'lerinin dolu olduğunu ve iletişim formu + /audit'in çalıştığını doğrula
