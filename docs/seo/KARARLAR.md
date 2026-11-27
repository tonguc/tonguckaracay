# SEO Kararları

Verilen kararlar ve gerekçeleri. En yeni en üstte. Bir karar değişirse eskisini silme; yeni satır ekle ve eskisine "yerini aldı: K-xx" yaz.

| ID | Tarih | Karar | Gerekçe | Karar veren |
|---|---|---|---|---|
| K-08 | 2026-11-27 | GSC verisi OpenSEO'dan çekilmeyecek; GSC kaynağı tarihli analiz dosyalarıdır (şu an `2026-11-gsc-analiz.md`) | OpenSEO'da proje yok, kullanılmıyor | Tonguç |
| K-07 | 2026-11-27 | R-05 yalnızca title + description değiştirir; SSS (R-22) ve "Updated …" H2 düzeltmesi (R-23) ayrı işler | Title/meta etkisi D+31'de temiz ölçülsün | Tonguç |
| K-06 | 2026-11-27 | VPS yazısının (R-05) title'ı "AI agent hosting" + "VPS vs dedicated server" ifadelerini hedefler; "VPS vs cloud" ve "run AI agent on VPS" R-10'a bırakıldı | Ubersuggest US: "vps vs dedicated server" 320/ay, "ai agent hosting" 50/ay, "vps vs physical server" 10/ay; sayfanın kendi terimi "dedicated"; iki sayfanın aynı sorguda yarışmaması için | Claude (veri) — Tonguç planı onayladı |
| K-05 | 2026-11-27 | Her SEO/GEO analizinde GSC'ye ek olarak Ubersuggest verisi (hacim, zorluk, rank tracking, AI Search Visibility) kullanılacak | Tonguç'un ücretli Ubersuggest planı bağlı; hacim ve sıralama verisi GSC'de yok | Tonguç |
| K-04 | 2026-11-27 | "UI ve UX nedir" için yeni sayfa açılmayacak; mevcut /ui-ux-designer-nedir-nasil-calisirlar güçlendirilecek (R-02) | Ubersuggest'e göre mevcut yazı "ui ux nedir" (38→23), "ux nedir" (27→14), "ux design nedir" (31→3) sorgularında yükseliyor; yeni sayfa trafiği böler | Claude (veri) |
| K-03 | 2026-11-27 | Kopya URL varyantları (sonda "/", /en'siz EN slug vb.) için yeni redirect yazılmayacak; sadece izlenecek (R-17) | `trailingSlash: false`, `next.config.js` redirect'leri ve `middleware.ts` yanlış-locale 301'leri bunları zaten karşılıyor; GSC'deki gösterimler eski kayıt kalıntısı | Claude (repo incelemesi) |
| K-02 | 2026-11-27 | "Yapay zeka SEO hizmeti" niyeti için yeni sayfa açılmayacak; mevcut /hizmetler/geo-optimizasyonu yeniden hedeflenecek (R-04) | Aynı hizmet için ikinci sayfa çakışma yaratır; mevcut sayfa zaten var ama görünmüyor (poz. 116) | Claude (öneri) — Tonguç onayı bekliyor |
| K-01 | 2026-11-27 | SEO işlerinin tek kaydı repoda `docs/seo/` altında tutulacak; sohbet ve kod tarafı buradan okuyup buraya yazacak | Sohbet ile Claude Code oturumları birbirinin hafızasını görmüyor; her iki tarafın da kesin okuduğu yer repo | Tonguç |
