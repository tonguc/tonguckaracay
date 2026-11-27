# SEO / GEO Yol Haritası — tonguckaracay.com

> **Bu dosya tek doğru kaynaktır.** Sohbet (claude.ai Project) ve kod tarafı (Claude Code) bu dosyayı okur ve günceller.
> Bir işe başlamadan önce oku; işi bitirince **Durum** ve **Tarih** sütununu güncelle, gerekirse `KARARLAR.md`'ye satır ekle.
> Kaynak analiz: [`2026-11-gsc-analiz.md`](./2026-11-gsc-analiz.md)

**Durum değerleri:** `bekliyor` · `engelli (neden)` · `devam` · `hazır (PR #)` · `yayında (tarih)` · `ölçülüyor` · `kapandı` · `iptal (neden)`

**Kurallar**
- Yeni yazı = TR + EN dosya çifti + iki yönlü `lib/slug-mappings.ts` kaydı (bkz. `CLAUDE.md`).
- Yeni sayfa açmadan önce aynı sorguyu alan mevcut bir sayfa var mı kontrol et (sorgu × sayfa verisi, R-00). Varsa yeni sayfa değil, mevcut sayfayı güçlendir.
- `main`'e push = production. Her değişiklik önce branch + Vercel preview.
- Yayına alınan her değişiklik için bu tabloda yayın tarihini yaz; ölçüm D+31 (title/meta) ve D+37 / D+65 (içerik) günlerinde yapılır.

## Açık işler

| ID | Öncelik | İş | URL | Tür | Bağımlı | Durum | Tarih |
|---|---|---|---|---|---|---|---|
| R-00 | P1 | Sorgu × sayfa verisi çek (OpenSEO GSC bağlantısı veya "Search Analytics for Sheets", Group By: Query + Page, son 6 ay, Web) | — | veri | — | bekliyor | |
| R-01 | P1 | Search Console → Ayarlar → "Search generative AI" ayarı **Include** mı? Exclude ise AI Overviews/AI Mode'dan çıkarılırsın | GSC mülkü | kontrol (Tonguç) | — | bekliyor | |
| R-02 | P1 | Title/meta yeniden yaz: "ui ux design" 882 gösterim, poz. 8,3, 1 tıklama; sayfa 1.479 gösterim, TO %0,07 | /ui-ux-designer-nedir-nasil-calisirlar | title/meta | R-00 (sorgu bu sayfaya mı düşüyor) | bekliyor | |
| R-03 | P1 | Title/meta: "how do i choose vps of physical ai for my business?" 81 gösterim, poz. 6, 0 tıklama; sayfa 796 gösterim, TO %0,38 | /en/ai-agent-vps-vs-own-server-comparison | title/meta | — | bekliyor | |
| R-04 | P1 | GEO hizmet sayfasını "yapay zeka SEO hizmeti / hizmetleri" niyetine yeniden hedefle (91 gösterim, poz. 37–52; sayfa şu an 2 gösterim, poz. 116) | /hizmetler/geo-optimizasyonu (+ /en/services/geo-optimization) | içerik revizyonu | — | bekliyor | |
| R-05 | P1 | **Yeni:** AI görünürlük ölçüm araçları karşılaştırması (prompt düzeyi takip, rakip benchmark, mention takibi, CMO paneli) — Povlex'e doğal bağlantı | yeni TR + EN | yeni içerik | R-00 | bekliyor | |
| R-06 | P1 | **Yeni (EN):** "How to run an AI agent on a VPS" — gereksinimler/spec, kurulum, veri gizliliği. Mevcut karşılaştırmaya "VPS vs cloud" bölümü ekle | yeni /en/… + /en/ai-agent-vps-vs-own-server-comparison | yeni içerik + bölüm | R-00 | bekliyor | |
| R-07 | P2 | **Yeni (TR):** "UI ve UX nedir, farkı ne?" (kavram niyeti; mevcut yazı meslek odaklı). "UI UX designer nasıl olunur" ayrı bölüm/yazı | yeni TR + EN | yeni içerik | R-00 (designer yazısıyla çakışma) | bekliyor | |
| R-08 | P2 | **Yeni (TR):** "Anahtar kelime analizi nasıl yapılır" + keyword difficulty + sıralama takibi (mevcut sayfa araç listesi) | yeni TR + EN | yeni içerik | R-00 | bekliyor | |
| R-09 | P2 | **Yeni (EN):** "Uizard alternatives" + AI UI generator vs manuel tasarım | yeni /en/… (karşılaştırma kısmı /en/ai-ui-design-tools'a bölüm olabilir) | yeni içerik | R-00 | bekliyor | |
| R-10 | P2 | "Mention vs citation" bölümü ekle (how to get mentioned by chatgpt, çok dilli görünürlük, "chatgpt önerilerinde nasıl çıkarım") | /en/how-to-get-cited-in-chatgpt + /chatgpt-geo-nasil-yapilir | bölüm | — | bekliyor | |
| R-11 | P2 | Başlığı "Generative Engine Optimization checklist" olarak netleştir — "geo-targeted" konum hedefleme sorgularını çekiyor | /en/geo-targeted-content-optimization-checklist | title/H1 | — | bekliyor | |
| R-12 | P2 | TR GEO çakışma kontrolü: "geo nasıl yapılır" (36 gösterim) hangi sayfaya gidiyor? /geo-nedir-nasil-yapilir 3 gösterim, /chatgpt-geo-nasil-yapilir 63 | iki TR GEO yazısı | analiz | R-00 | bekliyor | |
| R-13 | P2 | 6 ayda **0 gösterim** alan 13 TR + 16 EN yazıya GSC → Sayfa dizine ekleme raporunda bak (neden: tarandı-indexlenmedi, kopya vb.); birleştir / güçlendir / bırak kararı | liste: analiz dosyası §5 | teknik + içerik | — | bekliyor | |
| R-14 | P2 | Hizmet sayfalarını güçlendir: seo-danismanligi (poz. 36), ui-ux-tasarim (70), online-reklamcilik (36), yapay-zeka-cozumleri (34), sosyal-medya-yonetimi (20) | /hizmetler/* + /en/services/* | içerik revizyonu | — | bekliyor | |
| R-15 | P2 | AI tarafı için birinci el veri: GSC generative AI gösterim raporu + Bing Webmaster AI Performance — başlangıç (baseline) değerlerini kaydet | GSC / Bing WMT | ölçüm | — | bekliyor | |
| R-16 | P3 | Küçük bölümler: Perplexity checklist, managed vs self-host agent memory, VPC vs on-premise | ilgili EN yazılar | bölüm | — | bekliyor | |
| R-17 | P3 | Eski URL varyantlarının GSC'den düşmesini izle (kodda zaten 301 var: trailing slash, /en'siz EN slug, /vaka-calismalari, /en/blog/*) | analiz §6 | izleme | — | bekliyor | |
| R-18 | ? | Hatay SEO yerel sayfası (38 gösterim, poz. 42–62) — **yalnızca Hatay'da gerçek hizmet varsa**; yoksa açma (doorway riski) | — | karar (Tonguç) | — | karar bekliyor | |

## Tamamlananlar

| ID | İş | Yayın tarihi | Ölçüm tarihleri | Sonuç |
|---|---|---|---|---|
| — | | | | |
