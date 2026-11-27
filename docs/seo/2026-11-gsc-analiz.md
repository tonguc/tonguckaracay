# GSC Analizi — Kasım 2026

- **Tarih:** 2026-11-27
- **Kaynak:** Search Console export (kullanıcı yükledi) — Web arama türü, son 6 ay (2026-05-26 → 2026-11-25). Sorgu ve sayfa sekmeleri ayrı; **sorgu × sayfa eşleşmesi yok**, bu yüzden "sorgu → sayfa" eşleştirmeleri sitemap'e dayalı tahmindir (R-00 ile doğrulanacak).
- **Ek:** canlı sitemap + repo (`content/blog`, `next.config.js`, `middleware.ts`) incelendi.
- **Ölçülmeyen:** AI görünürlüğü (ChatGPT, Gemini, Perplexity vb. gerçek yanıtları toplanmadı) → **Ölçülmedi**. URL durum kodları canlıda kontrol edilemedi.

## 1. Genel tablo

| Metrik | Değer |
|---|---|
| Tıklama / gösterim | 49 / 6.061 |
| TO / ort. pozisyon | %0,8 / ~23 |
| Cihaz | masaüstü 5.104 gösterim (%84), mobil 941, tablet 16 |
| Ülke | Türkiye 3.902 gösterim (34 tık.), ABD 1.391 (4 tık., TO %0,29) |
| Sorgu satırlarında görünen | 13 tıklama / 3.440 gösterim (gerisini Google anonimleştiriyor — tüm sorgu rakamları alt sınır) |

Aylık trend (gösterim / tıklama): Haz 880/6 · Tem 681/4 · Ağu 659/6 · Eyl 487/3 · Eki 936/5 · **Kas (25 gün) 2.375/24**.

Ana sayfa güçlü (poz. 3,2, TO %10,9). Hizmet sayfaları zayıf: seo-danismanligi 35,7 · ui-ux-tasarim 70 · geo-optimizasyonu 116 · online-reklamcilik 36 · yapay-zeka-cozumleri 33,8 · sosyal-medya-yonetimi 20,3.

## 2. İçeriği olmayan sorgular (gerçek boşluklar)

| Öncelik | Küme | Örnek sorgular (gösterim, poz.) | Toplam | Öneri |
|---|---|---|---|---|
| P1 | AI görünürlük ölçüm araçları | "chatgpt görünürlüğü için geo araçlarını karşılaştır" (4, 3,3) · "rakip benchmark'ı ve prompt düzeyinde içgörü veren platform…" (4, 6,8) · "cmo için markanın ai görünürlük skorunu gösteren panel" (3, 4,3) · "yapay zeka mention takip araçları listesi" (2, 3) · "içeriğimi ai yanıtlarında kaynak gösterilecek hale getiren araç" (1, 12) · "bir otelin ai arama sonuçlarındaki görünürlüğünü hangi araçlar ölçebilir?" (1, 9) | ~20 / poz. 1–12 | Yeni karşılaştırma sayfası TR+EN (R-05) |
| P1 | AI agent VPS alt niyetleri (EN) | "vps vs cloud for ai agents" (53, 18,5) · "ai agent vps requirements" (16, 35) · "host ai agent on vps" (14, 46) · "run ai agent on vps" (13, 36) · "how to deploy ai agent on vps" (6, 39) · "what vps should i use to run ai agents 24/7 without exposing my data?" (10, 9,5) · "ai agent data privacy vps" (7, 26) · "best vps for ai agents" (3, 40) | ~150 | Kurulum + gereksinim rehberi, mevcut yazıya VPS vs cloud bölümü (R-06) |
| P2 | UI / UX kavramı (TR) | "ui ux nedir" (45, 45) · "ux design nedir" (24, 52) · "ux nedir" (23, 48) · "ui designer nedir" (13, 38) · "ui design nedir" (13, 48) · "ux tasarım nedir" · "ui tasarım nedir" (8, 56) · "uı ux designer nasıl olunur" (10, 56) | ~200 | "UI ve UX nedir, farkı" + kariyer bölümü (R-07) |
| P2 | Anahtar kelime süreci | "anahtar kelime analizi" (2, 62) · "seo anahtar kelime çalışması" · "seo anahtar kelime örnekleri" · "keyword sıralama aracı" (2, 5) · "anahtar kelime sıralaması" (6, 48) · "seo difficulty meaning" · "which seo tools offer the most accurate keyword difficulty scores?" | ~40 | Nasıl yapılır rehberi (R-08) |
| P2 | Uizard / AI UI üretici (EN) | "we use uizard but we need to build custom plugins…" (3, 10) · "…generate accessible interfaces by default…" (1, 8) · "what are the benefits of using an ai ui generator?" (3, 8,7) · "how does an ai ui generator compare to manual ui design?" | ~12 / poz. 1–11 | "Uizard alternatives" (R-09) |
| P2 | Mention vs citation | "how to get mentioned by chatgpt" (6, 79,5) · "chatgpt önerilerinde nasıl çıkarım" (1, 1) · "e-ihracat markamın yurt dışı chatgpt önerilerinde görünürlüğü" (1, 4) · "how to get cited in multiple languages by chatgpt" (2, 37) | ~10 | Mevcut yazılara bölüm (R-10) |
| P3 | Küçük EN konular | "perplexity optimization checklist" (4, 67) · "should i use a managed memory service or self-host agent memory?" (4, 9) · "what is the difference between vpc deployment and on-premise deployment for ai agents" (2, 9,5) | ~10 | Bölüm (R-16) |
| ? | Hatay yerel | "hatay seo danışmanı" (19, 46) · "hatay seo danışmanlığı" (14, 43) · "hatay seo" (5, 63) | 38 | Sadece gerçek hizmet varsa (R-18) |

Bilerek atlananlar: "tonguç ai" / "tonguç b2b" (muhtemelen Tonguç Akademi araması — tahmin), "on page optimizacija" ve benzerleri (Balkan dilleri), "dijital pazarlama stratejileri 2018" (eski + rekabetli, düşük uyum), "fiyat ne kadar", "longbeach sosyal medya yönetimi", "composio nedir" (1 gösterim).

## 3. Sayfası var, hedefi tutturamıyor

- **"ui ux design"** — 882 gösterim, poz. 8,3, 1 tıklama. En büyük tek fırsat. Muhtemel sayfa /ui-ux-designer-nedir-nasil-calisirlar (1.479 gösterim, TO %0,07, poz. 20,7) → R-02.
- **"yapay zeka seo"** (301, poz. 36,8, 8 tık.) · **"yapay zeka arama optimizasyonu"** (110, poz. 63) · "yapay zeka için seo" (83, 46) → /yapay-zeka-seo-uygulama-rehberi (713 gösterim, poz. 42) güçlendirilmeli.
- **"yapay zeka seo hizmeti / hizmetleri"** (47 + 29 + 15) → hizmet niyeti; /hizmetler/geo-optimizasyonu 2 gösterim, poz. 116 → R-04.
- **ChatGPT citation kümesi (EN, ~250 gösterim, poz. 45–58)** → /en/how-to-get-cited-in-chatgpt (220 gösterim, poz. 50). İçerik var, sıralama zayıf.
- **/en/geo-targeted-content-optimization-checklist** (121 gösterim, poz. 36) — "geo-targeted" ifadesi konum hedefleme sorgularını çekiyor ("2. uk-specific keywords geo-targeting", "what features should i look for in a geo-targeted seo tool?", "how does thin or generic location content reduce geo visibility?") → R-11.
- **TR GEO:** "geo nasıl yapılır" (36, 37,8) · /geo-nedir-nasil-yapilir sadece 3 gösterim · /chatgpt-geo-nasil-yapilir 63 → olası çakışma, R-12.
- **H1 / heading kümesi** (~100 gösterim, poz. 37–50) → /heading-tags-nedir-h1-etiketi-nasil-kullanilir (139, 37,8). Mevcut.
- **Anahtar kelime araçları** → /anahtar-kelime-analizi-yapan-seo-araclari (125, poz. 46). Mevcut.
- **İyi gidenler:** /claude-mcp-instagram-icerik-takvimi-otomasyonu (752 gösterim, poz. 7,6, TO %1,3) · /hakkimda (poz. 5,7, TO %10).

## 4. GEO / AI görünürlük

- AI görünürlüğü **Ölçülmedi**. "Görünmüyorsun" denemez.
- **Sinyal (tahmin):** "context: location: united states (not for language)… question: …" gibi uzun, şablonlu sorgular AI araçlarının / ajanların Google'a attığı otomatik sorgulara benziyor. Bunların birkaçında poz. 1–10'dayız. Bu sayfalarda soruya ilk paragrafta doğrudan cevap veren bölümler eklemek en olası kaldıraç (prompt–içerik uyumu, gözlemsel araştırmalarda atıfla en güçlü ilişkili özellik).
- Kontrol: Search Console "Search generative AI" ayarı (R-01); generative AI gösterim raporu ve Bing Webmaster AI Performance (R-15).
- **Marka/entity:** "Tonguç Karaçay" tam adıyla arama neredeyse yok; "Tonguç" tek başına başka markayla karışıyor. Tam adın tutarlı kullanımı + Person schema sameAs.

## 5. Hiç gösterim almayan yazılar (6 ay)

**TR (13 / 43):** ai-agent-nedir-dijital-pazarlamada-nasil-kullanilir · e-ticaret-yerel-seo-rehberi · google-ads-kampanya-optimizasyonu-rehberi · google-analytics-ile-site-optimizasyonu · icerik-pazarlamasi-ve-seo-optimizasyonu · instagram-reels-yapay-zeka-trend-analizi-icerik-planlama · kaliteli-backlink-nedir-nasil-alinir · kaliteli-ve-ozgun-icerigin-seo-icin-onemi · kullanmaniz-gereken-seo-araclari · serp-nedir-google-icin-neden-onemlidir · sosyal-medya-yonetimi-ve-online-pazarlama · ucretsiz-turkce-yapay-zeka-araclari-e-ticaret · yapay-zeka-kullanici-arastirmasi-otomasyonu

**EN (16 / 43):** ai-agent-customer-service-automation · ai-tools-and-use-cases-complete-guide · ai-user-research-automation-tools · chatgpt-ecommerce-product-descriptions-guide · claude-gpt-4-token-cost-comparison · digital-marketing-strategies-and-tools · google-ads-campaign-optimization-guide · how-to-reduce-token-costs-in-customer-service-chatbots · local-seo-for-ecommerce-guide · most-effective-digital-marketing-methods · social-media-management-and-online-marketing · what-are-heading-tags-how-to-use-h1 · what-is-geo-generative-engine-optimization · what-is-inbound-marketing-how-to-do-it · what-is-seo-how-does-it-work · what-is-seo-specialist-how-to-become-one

Not: bazı EN yazıların gösterimi eski kök URL varyantında görünüyor (ör. /what-is-seo-specialist-how-to-become-one, 1 gösterim). Sonraki adım: GSC → Sayfa dizine ekleme nedenleri (R-13).

## 6. Teknik

- GSC'de sitemap dışı ~25 URL varyantı var (sonda "/", /en'siz EN slug, /vaka-calismalari, /en/blog/*, /services/ai-solutions, parametreli /blog). **Kodda zaten yönlendiriliyor:** `trailingSlash: false`, `next.config.js` redirect'leri, `middleware.ts` yanlış-locale 301'leri. Bunlar eski kayıt kalıntısı → yalnızca izle (R-17). (İlk analizde P1 yazılmıştı; repo incelenince düzeltildi.)
- TR /ai-projects/* sayfaları poz. 150–300, EN karşılıkları 2–10 → TR sürümler ince veya EN'nin kopyası olabilir (tahmin).
