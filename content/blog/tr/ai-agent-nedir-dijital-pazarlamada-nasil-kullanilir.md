---
title: "Dijital Pazarlamada AI Agent Nedir? Yetki ve Ölçüm Rehberi"
slug: "ai-agent-nedir-dijital-pazarlamada-nasil-kullanilir"
description: "Dijital pazarlama AI agent'ını görev, araç yetkisi, insan onayı, deney tasarımı ve maliyet ölçümüyle kontrollü biçimde kurma rehberi."
date: "2026-04-11"
category: "Yapay Zeka"
tags: ["ai agent", "yapay zeka ajanı", "dijital pazarlama", "otomasyon", "makine öğrenmesi"]
readTime: "9 dk"
image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=1200&auto=format&fit=crop&q=80"
translationSlug: "what-is-ai-agent-digital-marketing-guide"
faq:
  - question: "Dijital pazarlamada AI agent nedir?"
    answer: "Dijital pazarlama AI agent'ı, belirli bir hedef için veri okuyabilen, plan önerebilen ve izin verilen pazarlama araçlarını çağırabilen yazılımdır. Agent'ın otonomisi görev ve bütçe sınırlarıyla kısıtlanmalıdır."
  - question: "AI agent ile klasik pazarlama otomasyonu arasındaki fark nedir?"
    answer: "Klasik otomasyon önceden yazılmış koşulları uygular. AI agent, girdiye göre adım ve araç seçebilir. Bu esneklik daha geniş test gerektirir; sonuçları kendi kendine öğrenip daima iyileşeceği varsayılmamalıdır."
  - question: "AI agent reklam bütçesini tek başına değiştirmeli mi?"
    answer: "İlk pilotta hayır. Agent bütçe değişikliği önerebilir, fakat hesap, kampanya ve günlük değişim sınırı belirlenmeden üretim hesabında yazma yetkisi almamalıdır. Geri alınabilir düşük riskli işlemlerle başlanmalıdır."
  - question: "Dijital pazarlama AI agent performansı nasıl ölçülür?"
    answer: "Aynı kampanya ve dönem için karar doğruluğu, politika ihlali, insan düzeltmesi, geri alma, dönüşüm verisi kalitesi ve toplam maliyet ölçülür. Gelir veya ROAS farkı ancak karşılaştırılabilir kontrol düzeni varsa agent'a bağlanabilir."
  - question: "Küçük işletme AI agent'a nasıl başlamalı?"
    answer: "Önce salt-okunur raporlama veya taslak üretimi seçin. Tek veri kaynağı, tek çıktı ve isimlendirilmiş bir onaylayan kullanın. Pilot geçmeden kampanya yayımlama veya bütçe değiştirme yetkisi vermeyin."
---

**20 Eylül 2026 itibarıyla:** dijital pazarlama AI agent'ı, hedef doğrultusunda veri okuyup araç çağırabilen bir iş akışıdır; kendi başına başarı veya ROAS artışı garantisi değildir. Performans, aynı kapsamda kaydedilen manuel taban ve kontrollü pilotla ölçülmelidir.

> **Bu güncellemede ne değişti?** Belgesiz müşteri sonuçları, sabit fiyat ve süreler, genel otomasyon yüzdeleri ve “insan onayı olmadan sürekli iyileşir” ifadeleri kaldırıldı. Yetki merdiveni, deney kartı, yayın kapısı ve resmi teknik kaynaklar eklendi.

## Dijital pazarlama AI agent'ı nasıl çalışır?

Dijital pazarlama AI agent'ı bir model, talimatlar, veri kaynakları ve araçlardan oluşur. Agent; rapor okuyabilir, değişiklik taslağı hazırlayabilir veya izin verilirse bir API işlemi yapabilir. [OpenAI agent belgeleri](https://developers.openai.com/api/docs/guides/agents) bu bileşenleri ve değerlendirme ihtiyacını teknik düzeyde açıklar.

Agent'ın kullandığı model ile iş akışının tamamı aynı şey değildir. Başarı; kaynak verinin doğruluğuna, araç çıktısına, yetki sınırına ve insan kararına bağlıdır.

## Pazarlama görevlerinde hangi otonomi seviyesi uygundur?

Otonomi tek bir aç/kapat ayarı değildir. Her görev için ayrı seviye seçilmelidir.

| Seviye | Agent'ın yaptığı | Örnek | Onay |
| --- | --- | --- | --- |
| 0: Oku | Veriyi özetler | Haftalık kampanya raporu | Yayın yok |
| 1: Öner | Değişiklik taslağı hazırlar | Negatif anahtar kelime önerisi | Uzman inceler |
| 2: Hazırla | Araçta taslak oluşturur | Reklam metni taslağı | Yayından önce zorunlu |
| 3: Sınırlı uygula | Geri alınabilir işlemi uygular | Etiket veya rapor güncelleme | Eşik ve kayıt zorunlu |
| 4: Yüksek etkili işlem | Bütçe, hedefleme veya yayın değiştirir | Canlı kampanya mutasyonu | İlk pilot için uygun değil |

## İlk kullanım senaryosu nasıl seçilir?

İlk kullanım; sık tekrarlanan, çıktısı doğrulanabilir ve hatası geri alınabilir bir görev olmalıdır. Haftalık rapor özeti, UTM kontrolü veya onaylı brief'ten reklam metni taslağı iyi adaylardır. Canlı bütçe dağıtımı, hassas kitle oluşturma ve kriz iletişimi ilk pilot için uygun değildir.

| Aday görev | Veri riski | İşlem riski | İlk pilot kararı |
| --- | --- | --- | --- |
| Raporu özetlemek | Düşük/orta | Düşük | Uygun |
| UTM ve kırık bağlantı kontrolü | Düşük | Düşük | Uygun |
| Reklam metni taslağı | Orta | Orta | İnsan onayıyla |
| Kitle segmenti oluşturmak | Yüksek | Orta/yüksek | Veri incelemesi sonrası |
| Bütçeyi otomatik taşımak | Orta | Yüksek | İlk pilotta uygun değil |
| Kriz yanıtını yayımlamak | Yüksek | Yüksek | Uygun değil |

## Reklam hesabında güvenli pilot nasıl yapılır?

Üretim hesabında yazma yetkisinden önce test hesabı veya salt-okunur bağlantı kullanılmalıdır. [Google Ads API iyi uygulama rehberi](https://developers.google.com/google-ads/api/docs/best-practices/overview), geliştirme sırasında test hesaplarının kullanılmasını ve hataların kaydedilmesini önerir.

Her araç çağrısında kullanıcı, hesap, kampanya, eski değer, önerilen değer, gerekçe, zaman ve onaylayan kaydedilmelidir. Geri alma işlemi pilot başlamadan denenmelidir.

## AI agent deneyi nasıl ölçülür?

Manuel ve agent destekli turlar aynı brief, aynı veri kesiti ve aynı değerlendirme rubriğini kullanmalıdır.

| Ölçüm | Manuel tur | Agent destekli tur | Kabul kapısı |
| --- | --- | --- | --- |
| Hazırlık süresi | Dakika | Dakika | Kalite düşmeden azalır |
| Maddi hata | Adet ve tür | Adet ve tür | Eşiği aşmaz |
| İnsan düzeltmesi | Dakika | Dakika | Toplam süreye dahil |
| Politika ihlali | Adet | Adet | Sıfır kritik ihlal |
| Geri alınan işlem | Adet ve neden | Adet ve neden | İncelenir |
| İlk kontrolde kabul | Evet/hayır | Evet/hayır | Korunur veya artar |

`Net görev süresi = hazırlık + insan düzeltmesi + onay + geri alma süresi`

`Kabul edilen görev başı maliyet = model + araç + altyapı + insan emeği + hata maliyeti / kabul edilen görevler`

ROAS veya dönüşüm farkı, ancak eş zamanlı ve karşılaştırılabilir kontrol düzeni varsa agent'a bağlanmalıdır. Mevsim, teklif, fiyat, kreatif ve medya bütçesi değiştiyse tek nedenli sonuç iddiası kurulamaz.

## İnsan onayı hangi işlemlerde zorunludur?

Bütçe, hedefleme, kişisel veri, yayımlanan iddia, marka güvenliği veya geri alınması zor müşteri iletişimi etkileniyorsa insan onayı zorunludur. Onaylayan kişi agent'ın gerekçesini değil, dayanak veriyi ve beklenen değişikliği görmelidir.

## Veri ve risk yönetimi nasıl kurulmalıdır?

Müşteri listesi, dönüşüm verisi ve CRM kayıtları kişisel veri içerebilir. [KVKK'nın üretken yapay zekâ rehberi](https://www.kvkk.gov.tr/Icerik/8547/uretken-yapay-zeka-ve-kisisel-verilerin-korunmasi-rehberi-15-soruda), amaç ve yaşam döngüsü boyunca veri işleme değerlendirmesi için resmi bir başlangıç sağlar. [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) ise risklerin yönetilmesi, ölçülmesi ve izlenmesi için genel bir yapı sunar.

Bu kaynaklar otomatik uygunluk belgesi değildir. Kullanılan veri, araç ve ülkeye göre hukuk, bilgi güvenliği ve platform politikası incelemesi gerekir.

## Ne zaman üretime geçilir?

Agent yalnız şu koşullarda bir üst yetki seviyesine geçmelidir: kabul ölçütü iki ayrı turda karşılanmış, kritik olay yaşanmamış, geri alma testi çalışmış ve sorumlu kişi kayıtları incelemiş olmalıdır. Başarısız pilotta yeni bir başarı yüzdesi tahmin edilmez; görev daraltılır veya agent yalnız öneri modunda tutulur.

## Rehberden uygulamaya

Ekibiniz agent iş akışını kendi kuracaksa [AI eğitimi](/ai-egitimi)
uygulamalı bir başlangıç sunar. Yetki sınırı, kontrollü pilot,
entegrasyon ve bakımı proje olarak yürütmek için [KOBİ'ler için AI
otomasyon danışmanlığını](/hizmetler/yapay-zeka-cozumleri) inceleyin.
