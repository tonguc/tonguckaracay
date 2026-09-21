---
title: "ChatGPT ile E-ticaret Ürün Açıklaması Yazma Rehberi"
slug: "chatgpt-ile-e-ticaret-urun-aciklamasi-yazma"
description: "Ürün verisini kaynak kabul eden, insan onaylı ve ölçülebilir bir yapay zeka destekli ürün açıklaması iş akışı kurun."
date: "2026-09-20"
category: "Yapay Zeka"
tags: ["ChatGPT", "E-ticaret", "Ürün Açıklaması", "İçerik Kalitesi"]
readTime: "10 dk"
image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&auto=format&fit=crop&q=80"
translationSlug: "chatgpt-ecommerce-product-descriptions-guide"
faq:
  - question: "ChatGPT ürün açıklamasını tek başına yayımlayabilir mi?"
    answer: "Hayır. Yapay zeka bir taslak üretir; ürün özelliklerini, uygunluk iddialarını, garanti koşullarını veya mevzuat gerekliliklerini doğrulamaz. Her metin, ürün veri kaynağıyla karşılaştırılmalı ve yetkili bir insan tarafından onaylanmalıdır."
  - question: "Ürün açıklaması promptuna hangi bilgiler eklenmeli?"
    answer: "SKU, doğrulanmış ürün adı, malzeme, ölçü, uyumluluk, kullanım sınırları, bakım bilgisi, hedef müşteri sorusu, marka tonu ve kanal biçimi eklenmelidir. Bilinmeyen alanlar açıkça bilinmiyor olarak işaretlenmelidir."
  - question: "Yapay zeka içeriği Google'da otomatik olarak sorun yaratır mı?"
    answer: "Üretim yöntemi tek başına belirleyici değildir. Google, kullanıcıya değer katmayan ve sıralamayı manipüle etmek için ölçekli üretilen içeriği spam kapsamında değerlendirebilir. Metin doğru, özgün, yararlı ve insan denetimli olmalıdır."
  - question: "Ürün açıklamalarının başarısı nasıl ölçülür?"
    answer: "Benzer ürünlerden eşleştirilmiş bir örneklem kurun. İlk onay oranını, ürün gerçeği hatalarını, editör süresini, yeniden çalışma sayısını ve kabul edilen açıklama başına toplam maliyeti izleyin. Dönüşüm etkisini ayrıca kontrollü test edin."
  - question: "Hangi ürünlerde daha sıkı inceleme gerekir?"
    answer: "Sağlık, güvenlik, çocuk ürünleri, takviyeler, kozmetik iddiaları, finansal sonuçlar ve mevzuata tabi ürünlerde alan uzmanı veya hukuk onayı gerekir. Modelin ürettiği bir iddia kaynak yerine geçmez."
---

## 20 Eylül 2026 güncellemesi

Bu rehber, doğrulanmamış başarı yüzdelerini ve sabit maliyet vaatlerini kaldıracak şekilde yenilendi. ChatGPT burada **ürün gerçeğinin kaynağı değil, kontrollü taslak yardımcısıdır**. Modelin bilmediği bir özelliği tahmin etmesine izin vermeyen, ölçülebilir ve insan onaylı bir iş akışı aşağıdadır.

## Önce ürün gerçeğini sabitleyin

İyi bir açıklama prompttan önce temiz ürün verisiyle başlar. Ürün bilgi yönetimi sistemi, tedarikçi belgesi veya onaylı katalog kaydı tek doğruluk kaynağı olarak seçilmelidir.

| Alan | Modele verilecek kaynak | Yayın öncesi kontrol |
|---|---|---|
| Kimlik | SKU, marka, model, varyant | SKU ve varyant eşleşiyor mu? |
| Fiziksel özellik | Malzeme, ölçü, ağırlık, renk | Birim ve değer kaynakta var mı? |
| Kullanım | Uyumluluk, bakım, sınırlamalar | Varsayım veya eksik uyarı var mı? |
| Ticari bilgi | Garanti ve teslimat politikası bağlantısı | Metin güncel politikayla uyumlu mu? |
| Dinamik bilgi | Fiyat ve stok sistemi | Kopyaya hızla eskiyecek değer gömülmüş mü? |

Google Merchant Center'ın [ürün verisi spesifikasyonu](https://support.google.com/merchants/answer/14779112?hl=tr), ürün alanlarının biçimini ve doğruluğunu tanımlar. Açıklama, bu yapılandırılmış veriye ters düşmemelidir. Ürün sayfasındaki işaretleme için de [ürün yapılandırılmış veri alanları](https://support.google.com/merchants/answer/6386198?hl=tr) aynı gerçeklerle eşleştirilmelidir.

## Kaynağa bağlı prompt şablonu

```text
Rolün: e-ticaret içerik editörüne taslak hazırlayan yardımcı.

Yalnızca aşağıdaki ONAYLI ÜRÜN VERİSİNİ kullan.
Bir alan eksikse tahmin etme; [DOĞRULAMA GEREKİYOR] yaz.
Sağlık, güvenlik, performans, garanti veya karşılaştırma iddiası ekleme.

ONAYLI ÜRÜN VERİSİ
SKU: [değer]
Ürün adı: [değer]
Malzeme ve ölçü: [değer]
Uyumluluk: [değer]
Kullanım ve bakım: [değer]
Sınırlamalar/uyarılar: [değer]

MÜŞTERİ VE KANAL
Yanıtlanacak müşteri sorusu: [değer]
Marka tonu: [değer]
Kanal biçimi: [başlık, kısa açıklama, özellik listesi]

ÇIKTI
1. Kaynak alanlarına dayalı taslak
2. Kullandığın kaynak alanlarının listesi
3. Doğrulama gereken noktalar
```

Bu yapı, modelden ikna edici ama kaynaksız vaatler istemek yerine, her cümleyi onaylı veriyle ilişkilendirir. Anahtar kelime yoğunluğu gibi mekanik hedefler vermeyin; müşterinin gerçek sorusunu açık ve doğal dille yanıtlayın.

## İnsan onay kapısı

| Kontrol | Kabul ölçütü | Sorumlu |
|---|---|---|
| Ürün doğruluğu | Her özellik onaylı kayıtta bulunuyor | Ürün yöneticisi |
| Riskli iddialar | Sağlık, çevre, performans ve karşılaştırma iddiaları belgeli | Alan uzmanı/hukuk |
| Marka ve dil | Ton, terimler ve yerelleştirme kılavuzla uyumlu | Editör |
| Arama kalitesi | Sayfa müşterinin sorusunu özgün biçimde yanıtlıyor | SEO editörü |
| Kanal uyumu | Zorunlu alanlar ve güncel kanal kuralları karşılanıyor | E-ticaret operasyonu |

Google'ın [üretken yapay zeka içerik rehberi](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content) doğruluk, kalite ve kullanıcı değerini öne çıkarır. [Spam politikaları](https://developers.google.com/search/docs/essentials/spam-policies) ise kullanıcıya değer katmadan sıralama amacıyla çok sayıda sayfa üretmenin, kullanılan araçtan bağımsız olarak, ölçekli içerik kötüye kullanımına girebileceğini açıklar.

## Küçük bir pilotla ölçün

Aynı kategori ve benzer trafik düzeyindeki SKU'ları eşleştirin. Bir grupta mevcut insan sürecini, diğerinde yapay zeka destekli taslak ve aynı insan onayını kullanın. Deney sırasında fiyat, kampanya ve sayfa yerleşimi gibi başka değişkenleri sabit tutun.

| Ölçüm | Nasıl hesaplanır | Neden önemlidir |
|---|---|---|
| İlk geçişte kabul | Düzenleme gerektirmeden onaylanan taslak / incelenen taslak | Taslak kalitesini gösterir |
| Ürün gerçeği hatası | Kaynağa aykırı cümle / incelenen cümle | Güvenlik ve doğruluk riskini gösterir |
| Editör süresi | İnceleme ve düzeltme dakikalarının toplamı | Otomasyonun gerçek iş yükünü gösterir |
| Kabul edilen iş maliyeti | Model + insan + araç + yeniden çalışma maliyeti / kabul edilen açıklama | Sağlıklı maliyet karşılaştırması sağlar |

Dönüşüm, organik görünürlük veya gelir artışı evrensel bir sonuç değildir. Yeterli örneklem ve gözlem süresiyle ayrı bir kontrollü test gerekir; sonuçları kategori, tarih aralığı ve örneklem büyüklüğüyle birlikte raporlayın.

## Yayın ve bakım

Ürün gerçeği değiştiğinde açıklamayı yeniden inceleyecek bir tetikleyici kurun. Fiyat ve stok gibi sık değişen verileri serbest metin yerine ticaret sisteminden gösterin. Kayıt altında prompt sürümü, kaynak kaydı, model çıktısı, editör değişikliği ve onaylayan kişi bulunsun. Böylece hatalı bir iddianın nerede eklendiği izlenebilir.

Özetle: hız vaadiyle yüzlerce taslağı doğrudan yayımlamak yerine, önce kaynak şemasını, ardından insan onayını ve ölçümü kurun. İyi sonuç, daha çok metin değil; doğru ürün gerçeğiyle daha az yeniden çalışmadır.

## Rehberden uygulamaya

Ekibiniz kaynak şemasını ve onay akışını kendi kuracaksa [AI eğitimi](/ai-egitimi)
uygulamalı bir başlangıç sunar. Ürün verisi, taslak üretimi, insan onayı ve
ticaret sistemi entegrasyonunu pilot olarak yürütmek için [KOBİ'ler için AI otomasyon danışmanlığını](/hizmetler/yapay-zeka-cozumleri)
inceleyin.
