# SEO / GEO Yol Haritası — tonguckaracay.com

> **Bu dosya tek doğru kaynaktır.** Sohbet (claude.ai Project) ve kod tarafı (Claude Code) bu dosyayı okur ve günceller.
> Bir işe başlamadan önce oku; işi bitirince **Durum** ve **Tarih** sütununu güncelle, gerekirse `KARARLAR.md`'ye satır ekle.
> Kaynak analiz: [`2026-11-gsc-analiz.md`](./2026-11-gsc-analiz.md) (GSC + Ubersuggest, 2026-11-27)

**Durum değerleri:** `bekliyor` · `engelli (neden)` · `devam` · `hazır (PR #)` · `yayında (tarih)` · `ölçülüyor` · `kapandı` · `iptal (neden)`

**Kurallar**
- Her analizde **GSC + Ubersuggest** birlikte kullanılır (Ubersuggest MCP, proje: tonguckaracay.com). Hacim = Ubersuggest (TR locId 2792, US 2840); gerçek performans = GSC.
- Yeni yazı = TR + EN dosya çifti + iki yönlü `lib/slug-mappings.ts` kaydı (bkz. `CLAUDE.md`).
- Yeni sayfa açmadan önce aynı sorguyu alan mevcut bir sayfa var mı kontrol et (GSC sorgu × sayfa, R-00; Ubersuggest rank tracking hangi URL'nin sıralandığını da gösterir). Varsa yeni sayfa değil, mevcut sayfayı güçlendir.
- `main`'e push = production. Her değişiklik önce branch + Vercel preview.
- Yayına alınan her değişiklik için yayın tarihini yaz; ölçüm D+31 (title/meta) ve D+37 / D+65 (içerik) günlerinde yapılır.

## Açık işler

| ID | Öncelik | İş | URL | Kanıt | Bağımlı | Durum | Tarih |
|---|---|---|---|---|---|---|---|
| R-00 | P1 | GSC sorgu × sayfa verisi çek (OpenSEO GSC bağlantısı veya "Search Analytics for Sheets", Group By: Query + Page, son 6 ay, Web) | — | — | — | bekliyor | |
| R-01 | P1 | Search Console → Ayarlar → "Search generative AI" ayarı **Include** mı? Exclude ise AI Overviews/AI Mode'dan çıkarılırsın | GSC mülkü | — | — | bekliyor (Tonguç) | |
| R-02 | **P1** | **UI/UX yazısını güçlendir (yeni sayfa açma):** title/meta "UI UX design / UI UX nedir" niyetine; giriş bölümüne net "UI nedir / UX nedir / farkı" tanımları; "nasıl olunur" bölümü | /ui-ux-designer-nedir-nasil-calisirlar | GSC: "ui ux design" 882 gösterim poz. 8,3, 1 tık.; sayfa 1.479 gösterim TO %0,07 · Ubersuggest: "ui ux design" TR 9.900/ay SD 34 · "ui ux nedir" 1.600/ay poz. 38→23 · "ux nedir" 880/ay poz. 27→14 · "ux design nedir" poz. 31→3 | — | bekliyor | |
| R-03 | **P1** | **GEO nedir sayfalarını güçlendir:** TR /geo-nedir-nasil-yapilir GSC'de sadece 3 gösterim; EN /en/what-is-geo-generative-engine-optimization **0 gösterim** | TR + EN GEO nedir yazıları | Ubersuggest: "geo nedir" TR 1.000/ay SD 8 (390→1.900 yükseliş) · "generative engine optimization" US 4.400/ay SD 10. ⚠ "geo nedir" niyeti karışık olabilir — önce SERP'e bak | R-12 | bekliyor | |
| R-04 | **P1** | **SEO danışmanlığı hizmet sayfası:** "seo danışmanlığı / seo danışmanı / seo uzmanı" için ilk 100'de bile değiliz | /hizmetler/seo-danismanligi (+ /en/services/seo-consulting) | Ubersuggest: seo danışmanlığı 1.300/ay SD 22 · seo danışmanı 1.300/ay SD 15 · seo uzmanı 1.900/ay SD 26 · istanbul seo uzmanı 320/ay SD 10 — hepsi sıralama yok · GSC: sayfa poz. 35,7 | — | bekliyor | |
| R-05 | P1 | Title/meta: "how do i choose vps of physical ai for my business?" 81 gösterim, poz. 6, 0 tıklama | /en/ai-agent-vps-vs-own-server-comparison | GSC: sayfa 796 gösterim TO %0,38 | — | bekliyor | |
| R-06 | P1 | **ChatGPT citation yazısını güçlendir** + "mention vs citation" bölümü | /en/how-to-get-cited-in-chatgpt | Ubersuggest: "how to get cited by chatgpt" US 110/ay SD 12 (Tem'de 590) · GSC: küme ~250 gösterim, poz. 45–58 | — | bekliyor | |
| R-07 | P1 | **GEO hizmet sayfasını yeniden hedefle:** "yapay zeka SEO" + GEO | /hizmetler/geo-optimizasyonu (+ /en/services/geo-optimization) | Ubersuggest: "yapay zeka seo" 210/ay SD 8 · "yapay zeka seo hizmeti" raporlanan 0 (eşik altı; GSC'de 91 gösterim) · GSC: sayfa 2 gösterim poz. 116 | — | bekliyor | |
| R-08 | P1 | **Ubersuggest ayarlarını düzelt** (Tonguç onayıyla — hesabında değişiklik): (a) AI görünürlük prompt'ları "H1 etiketi hizmeti" gibi kimsenin aramadığı konular → gerçek hizmetlere göre yeniden yaz; (b) marka adı "Tonguckaracay" → "Tonguç Karaçay" + takma adlar; (c) rank tracking'e US lokasyonu + yeni kümeler (geo nedir, generative engine optimization, yapay zeka seo, seo danışmanlığı, ui ux design, how to get cited by chatgpt); (d) AI yanıtlarında çıkan rakipleri ekle (WTR Ajans, Agenzia, Magna Dijital) | Ubersuggest projesi | Mevcut AI görünürlük %6,67 = sadece marka adını içeren 1 prompt'tan; markasız 28 yanıtta 0 | onay | bekliyor | |
| R-09 | P2 | **Yeni:** AI görünürlük ölçüm araçları karşılaştırması — önce TR (rekabet yok), sonra EN | yeni TR + EN | GSC: ~20 gösterim, poz. 1–12 · Ubersuggest: "ai visibility tools" US 880/ay ama SD 57 (zor) · TR hacim raporlanmıyor | R-00 | bekliyor | |
| R-10 | P2 | **Yeni (EN):** "How to run an AI agent on a VPS" + mevcut yazıya "VPS vs cloud" bölümü | yeni /en/… + /en/ai-agent-vps-vs-own-server-comparison | GSC: ~150 gösterim · Ubersuggest: "vps for ai agents" US 10/ay (CPC $58) — hacim küçük, uzun kuyruk | R-00 | bekliyor | |
| R-11 | P2 | Başlığı "Generative Engine Optimization checklist" olarak netleştir — "geo-targeted" konum hedefleme sorgularını çekiyor | /en/geo-targeted-content-optimization-checklist | Ubersuggest: "geo checklist" US 40/ay SD 13 | — | bekliyor | |
| R-12 | P2 | TR GEO çakışma kontrolü: /geo-nedir-nasil-yapilir (3 gösterim) vs /chatgpt-geo-nasil-yapilir (63) | iki TR GEO yazısı | GSC: "geo nasıl yapılır" 36 gösterim poz. 37,8 | R-00 | bekliyor | |
| R-13 | P2 | 6 ayda **0 gösterim** alan 13 TR + 16 EN yazı: GSC → Sayfa dizine ekleme nedenleri; birleştir / güçlendir / bırak | liste: analiz §5 | Ubersuggest: backlink nedir 880/ay, inbound nedir 480/ay, serp nedir 210/ay — ilk 100'de değiliz | — | bekliyor | |
| R-14 | P2 | **Yeni (EN):** "Uizard alternatives" + AI UI generator vs manuel tasarım | yeni /en/… | Ubersuggest: US 30/ay SD 14 · GSC: poz. 1–11 uzun kuyruk | R-00 | bekliyor | |
| R-15 | P2 | Diğer hizmet sayfaları: ui-ux-tasarim (poz. 70), online-reklamcilik (36), yapay-zeka-cozumleri (34), sosyal-medya-yonetimi (20) | /hizmetler/* + /en/services/* | GSC | — | bekliyor | |
| R-16 | P2 | AI tarafı için birinci el veri: GSC generative AI gösterim raporu + Bing Webmaster AI Performance — başlangıç değerlerini kaydet | GSC / Bing WMT | — | — | bekliyor | |
| R-17 | P3 | Anahtar kelime analizi nasıl yapılır rehberi | yeni TR | Ubersuggest: 10/ay — düşük | R-00 | bekliyor | |
| R-18 | P3 | Küçük bölümler: Perplexity checklist, managed vs self-host agent memory, VPC vs on-premise | ilgili EN yazılar | GSC uzun kuyruk | — | bekliyor | |
| R-19 | P3 | Eski URL varyantlarının GSC'den düşmesini izle (kodda zaten 301 var) | analiz §7 | — | — | bekliyor | |
| R-20 | P3 | Hatay SEO yerel sayfası — **önerim: açma** | — | Ubersuggest: "hatay seo" 10/ay · GSC 38 gösterim · doorway riski | Tonguç kararı | karar bekliyor | |
| R-21 | izle | "ui designer nedir" 4 → 76'ya düştü (Ubersuggest, 29.10 → 26.11); R-02 sonrası tekrar bak | /ui-ux-designer-nedir-nasil-calisirlar | Ubersuggest | R-02 | bekliyor | |

## Tamamlananlar

| ID | İş | Yayın tarihi | Ölçüm tarihleri | Sonuç |
|---|---|---|---|---|
| — | | | | |
