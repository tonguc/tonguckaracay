---
title: "Claude ve OpenAI API Token Maliyeti Nasıl Karşılaştırılır?"
slug: "claude-gpt-4-token-maliyet-karsilastirmasi"
description: "AI API maliyetini girdi, çıktı, önbellek, araç ve insan emeğiyle birlikte karşılaştıran yeniden üretilebilir yöntem."
date: "2026-09-21"
category: "Yapay Zeka"
tags: ["AI API", "token maliyeti", "Claude", "OpenAI", "Gemini", "maliyet analizi"]
readTime: "11 dk"
featured: false
image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80"
translationSlug: "claude-gpt-4-token-cost-comparison"
faq:
  - question: "En ucuz AI modeli hangisi?"
    answer: "Tek bir evrensel yanıt yoktur. Görevin girdi ve çıktı uzunluğu, önbellek kullanımı, araç çağrıları, yeniden denemeler ve insan incelemesi toplam maliyeti değiştirir. Aynı sabit görev kümesini güncel resmî fiyatlarla ölçün."
  - question: "Token maliyeti nasıl hesaplanır?"
    answer: "Her istek için normal girdi, önbelleğe yazılan girdi, önbellekten okunan girdi, çıktı ve varsa araç kullanımını ayrı kaydedin. Sağlayıcının güncel birim fiyatlarını uygulayıp insan inceleme ve yeniden çalışma maliyetini ekleyin."
  - question: "Fiyat tablosunu neden yazıya sabitlemiyorsunuz?"
    answer: "Model adları, fiyatlar, bağlam eşikleri ve indirim koşulları değişebilir. Bu nedenle tarihli kaynak kaydı tutulur ve hesap çalıştırılacağı gün resmî fiyat sayfasından yenilenir."
  - question: "Daha ucuz model her zaman daha ekonomik midir?"
    answer: "Hayır. Daha fazla yeniden deneme, daha uzun çıktı, daha fazla editör süresi veya düşük kabul oranı birim fiyat avantajını silebilir. Kararı kabul edilen görev başına toplam maliyetle verin."
  - question: "Model karşılaştırmasında kalite nasıl korunur?"
    answer: "Aynı anonimleştirilmiş görevleri, aynı kabul rubriğini ve kör insan değerlendirmesini kullanın. Güvenlik veya doğruluk kapısını geçmeyen çıktıyı ucuz olduğu için kabul etmeyin."
---

## 21 Eylül 2026 güncellemesi

Bu rehberdeki eski model fiyatları, sabit döviz kuru, belgesiz müşteri sonuçları ve genellenebilir tasarruf yüzdeleri kaldırıldı. Amaç, belirli bir modeli kazanan ilan etmek değil; aynı iş yükünü güncel resmî fiyatlarla yeniden hesaplayabileceğiniz bir karar sistemi kurmaktır.

## Kısa cevap

Model etiket fiyatı tek başına satın alma kararı değildir. Normal girdi, önbellek, çıktı, araç çağrısı, yeniden deneme, gecikme ve insan incelemesi birlikte ölçülmelidir. En sağlıklı metrik, kalite kapısını geçen **kabul edilmiş görev başına toplam maliyettir**.

## Fiyat kaynağını tarihli kaydedin

Hesap tablosuna elle kopyalanmış eski fiyatlar yerine her koşuda resmî kaynağı açın:

- [OpenAI API fiyatlandırması](https://developers.openai.com/api/docs/pricing)
- [Anthropic Claude fiyatlandırması](https://platform.claude.com/docs/en/about-claude/pricing)
- [Google Gemini API fiyatlandırması](https://ai.google.dev/gemini-api/docs/pricing)

| Kayıt alanı | Saklanacak değer | Neden gerekli |
|---|---|---|
| Sağlayıcı ve model kimliği | API yanıtındaki tam model adı | Pazarlama adıyla sürümü karıştırmayı önler |
| Fiyat kaynağı | Resmî URL ve erişim tarihi | Hesabın hangi tarifeye dayandığını gösterir |
| Birim | Para birimi ve token birimi | Bin ve milyon token hatalarını önler |
| Koşul | Standart, batch, önbellek veya uzun bağlam | İndirim ve eşiklerin yanlış uygulanmasını önler |
| Hariç kalemler | Arama, görsel, ses veya diğer araçlar | Token dışı faturayı görünür kılar |

Fiyat sayfasındaki bir rakamı sonraki aylara garanti olarak taşımayın. Kaynak anını ve hesaplama dosyasını birlikte sürümleyin.

## Tam maliyet formülü

```text
API maliyeti =
  normal_girdi_tokeni × normal_girdi_birim_fiyatı
  + cache_yazma_tokeni × cache_yazma_birim_fiyatı
  + cache_okuma_tokeni × cache_okuma_birim_fiyatı
  + cikti_tokeni × cikti_birim_fiyatı
  + arac_cagrisi_maliyeti

Toplam iş maliyeti =
  API maliyeti
  + inceleme_suresi × saatlik_emek_maliyeti
  + yeniden_calisma_maliyeti
  + altyapi_ve_gozlemleme_payi

Kabul edilen görev başına maliyet =
  tum_gorevlerin_toplam_maliyeti / kabul_edilen_gorev_sayisi
```

| Maliyet kalemi | Kanıt kaynağı | Kontrol |
|---|---|---|
| Token kullanımı | API usage alanları | Tahmin yerine gerçek sayaç kullanıldı mı? |
| Araç kullanımı | Çağrı logu ve sağlayıcı tarifesi | Arama ve medya ayrı mı? |
| Yeniden deneme | İstek kimliği ve hata kodu | Başarısız denemeler dahil mi? |
| İnsan emeği | Zaman kaydı | İnceleme ve düzeltme ayrı mı? |
| Kabul | Önceden yazılmış rubrik | Kalite eşiği koşudan sonra değiştirildi mi? |

## Aynı görev kümesiyle karşılaştırın

Karşılaştırma kümesi gerçek iş dağılımını temsil etmeli, fakat kişisel veya gizli verilerden arındırılmalıdır. Her modele aynı girdi, aynı araç yetkisi, aynı çıktı şeması ve aynı zaman aşımı uygulanmalıdır.

| Boyut | Ölçüm | Yayın kapısı |
|---|---|---|
| Doğruluk | Kaynağa aykırı ifade sayısı | Kritik hata yok |
| Görev tamamlama | Zorunlu alanların karşılanması | Rubrikteki tüm zorunlu alanlar var |
| Güvenlik | Politika ve veri sınırı ihlali | İhlal yok |
| İnsan emeği | İnceleme ve düzeltme süresi | Kabul edilen operasyon sınırında |
| Gecikme | Uçtan uca tamamlanma süresi | Kullanım senaryosu hedefinde |
| Maliyet | Kabul edilen görev başına toplam | Bütçe sınırında |

Değerlendirici, mümkünse model adını görmemelidir. Bir modelin ilk koşusu başarısızsa, diğer modellere tanınmayan ek prompt iyileştirmesi vermeyin. Ayrı bir optimizasyon turu yapılacaksa tüm adaylara aynı hak tanıyın.

## Önbellek, batch ve yönlendirme kararları

Önbellek ancak tekrar eden ve sürümü sabit sistem bağlamında anlamlıdır. Batch ancak gecikmeye toleranslı işlerde değerlendirilmelidir. Çok modelli yönlendirme ise basit görevleri ucuz modele vermekten ibaret değildir; yanlış sınıflandırma, ikinci model çağrısı ve inceleme maliyeti de kayda girmelidir.

| Karar | Uygun olduğu durum | Kaydedilecek risk |
|---|---|---|
| Önbellek | Büyük ve tekrar eden sabit bağlam | Eski talimatın yeniden kullanılması |
| Batch | Anında yanıt gerektirmeyen toplu iş | Kuyruk gecikmesi ve kısmi hata |
| Model yönlendirme | Görev türleri açıkça ayrılabiliyorsa | Yanlış rota ve çift çağrı |
| Çıktı sınırı | Beklenen şema ve uzunluk belliyse | Eksik cevap ve yeniden deneme |

## Yayınlanabilir sonuç kaydı

Bir model veya mimari için tasarruf iddiası yayımlamadan önce görev kümesini, tarih aralığını, model kimliklerini, fiyat kaynağını, token sayaçlarını, kabul rubriğini, insan emeğini ve hariç tutulan kalemleri açıklayın. Tek bir pilotu bütün KOBİ'lere veya sektörlere genellemeyin.

Doğru karar, en düşük fiyat etiketini bulmak değil; kaynakları izlenebilir, kalitesi kabul edilmiş ve toplam maliyeti yeniden hesaplanabilir iş akışını seçmektir.
