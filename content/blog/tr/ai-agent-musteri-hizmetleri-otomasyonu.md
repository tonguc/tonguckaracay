---
title: "Müşteri Hizmetlerinde AI Agent: Kontrollü Pilot ve Ölçüm Rehberi"
slug: "ai-agent-musteri-hizmetleri-otomasyonu"
description: "Müşteri hizmetleri AI agent pilotunu kapsam, insan devri, KVKK veri sınırı, kalite ölçümü ve görev başı maliyetle planlama rehberi."
date: "2026-04-11"
category: "Yapay Zeka"
tags: ["ai agent", "müşteri hizmetleri", "chatbot", "otomasyon", "yapay zeka"]
readTime: "9 dk"
image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&auto=format&fit=crop&q=80"
translationSlug: "ai-agent-customer-service-automation"
faq:
  - question: "Müşteri hizmetleri AI agent'ı nedir?"
    answer: "Müşteri hizmetleri AI agent'ı, bir destek talebini sınıflandırabilen, izin verilen bilgi kaynaklarını kullanabilen ve tanımlı araçları çağırabilen yazılımdır. Agent'ın hangi işlemleri tek başına yapabileceği şirket tarafından sınırlandırılmalıdır."
  - question: "AI agent müşteri temsilcisinin yerini alır mı?"
    answer: "AI agent, dar ve geri alınabilir görevlerde temsilciye yardımcı olabilir; şikâyet, istisna, ödeme, kimlik, sağlık, hukuk veya duygusal gerilim içeren görüşmelerde sorumlu insan temsilciye devir gerekir. Yer değiştirme iddiası ancak iş gücü ve kalite verisiyle ayrıca değerlendirilir."
  - question: "AI agent başarısı nasıl ölçülür?"
    answer: "Çözülmüş talep tanımı önceden yazılır; ilk kontrolde doğru yanıt, doğru devir, maddi hata, müşteri yeniden başvurusu, insan düzeltme süresi ve görev başı toplam maliyet birlikte ölçülür. Hız tek başına başarı değildir."
  - question: "AI agent için müşteri verisi kullanılabilir mi?"
    answer: "Yalnızca belirlenmiş amaç ve yetki kapsamında gerekli veri kullanılmalıdır. Pilot verisi mümkünse anonimleştirilmeli; kimlik bilgisi, ödeme verisi, özel nitelikli kişisel veri ve erişim sırları onaysız modele gönderilmemelidir."
  - question: "Müşteri hizmetleri AI agent maliyeti nasıl hesaplanır?"
    answer: "Model, araç çağrısı, arama, depolama, entegrasyon, insan incelemesi, bakım, başarısız görev ve olay müdahalesi maliyetleri toplanır. Sonuç kabul edilen tamamlanmış görev sayısına bölünür."
---

**20 Eylül 2026 itibarıyla:** müşteri hizmetlerinde AI agent için geçerli tek bir çözüm oranı, kurulum süresi veya geri ödeme süresi yoktur. Sonuç; talep türüne, bilgi kalitesine, araç yetkisine, devir kuralına ve kabul eşiğine göre pilotta ölçülmelidir.

> **Bu güncellemede ne değişti?** Kaynağı olmayan çözüm, tasarruf ve müşteri sonucu yüzdeleri; sabit fiyatlar; koşulsuz otonomi ve KVKK uyumu ifadeleri kaldırıldı. Yerine görev kapsamı, insan devri, ölçüm kartı, maliyet formülü ve durdurma kuralları eklendi.

## Müşteri hizmetleri AI agent'ı ne yapar?

Müşteri hizmetleri AI agent'ı, dil modeli ile tanımlı araçları bir araya getirerek destek talebini yorumlar ve izin verilen adımları uygular. [OpenAI'ın agent rehberi](https://developers.openai.com/api/docs/guides/agents), agent iş akışlarını model, araç, bilgi ve kontrol bileşenleri üzerinden açıklar. Bu teknik yetenek, agent'a sınırsız işlem yetkisi verilmesi gerektiği anlamına gelmez.

| Görev | İlk pilotta izin | Zorunlu kontrol |
| --- | --- | --- |
| SSS kaynağından taslak yanıt | Uygun | Kaynak ve güncellik |
| Sipariş durumunu okumak | Koşullu | Kimlik ve en az veri |
| Talebi doğru kuyruğa yönlendirmek | Uygun | Devir nedeni |
| İade uygunluğunu ön değerlendirmek | Koşullu | Politika ve insan onayı |
| Para iadesi veya hesap değişikliği | İlk pilotta uygun değil | Yetkili insan kararı |
| Şikâyet, tehdit veya kriz görüşmesi | Uygun değil | Derhal insan devri |

## Chatbot ile AI agent arasındaki fark nedir?

Chatbot çoğunlukla metin üretir veya bir karar ağacını izler. AI agent ise araç çağırabilir ve sistemde durum değiştirebilir. Risk, metin kalitesinden çok işlem yetkisinde büyür. Bir agent yanlış yanıt verdiğinde düzeltme gerekir; yanlış iade veya hesap değişikliği yaptığında finansal ve hukuki sonuç oluşabilir.

Bu nedenle her araç için okuma, taslak oluşturma ve yazma izinleri ayrı tanımlanmalıdır. Pilot, yalnızca okuma ve taslak yetkisiyle başlamalıdır.

## İlk pilot nasıl sınırlandırılır?

İlk pilot tek kanal, tek dil ve en fazla üç talep türüyle yürütülmelidir. Gerçek müşteri trafiğinin küçük bir bölümü gölgede çalıştırılabilir: agent öneri üretir, ancak yanıtı temsilci gönderir. Bu aşama, müşteriyi riske atmadan hata sınıflarını gösterir.

Pilot kartı şu alanları içermelidir:

| Alan | Kaydedilecek değer | Kabul ölçütü |
| --- | --- | --- |
| Talep türü | Sipariş, iade, ürün bilgisi gibi | Kapsam içinde |
| Kaynak sürümü | Bilgi bankası tarihi | Güncel sürüm |
| İlk yanıtta doğruluk | Evet/hayır ve hata türü | Önceden belirlenen eşik |
| Doğru insan devri | Evet/hayır | Kritik olaylarda zorunlu |
| İnsan düzeltme süresi | Dakika | Toplam iş yüküne dahil |
| Yeniden başvuru | Aynı konu tekrar açıldı mı? | Manuel tabanla karşılaştırılır |
| Olay | Gizlilik, yanlış işlem, erişim | Kritik olay sıfır |

İlk tur başlangıç değeridir. Aynı kapsam ve kabul rubriğiyle ikinci tur yapılmadan kalıcı iyileşme iddiası kurulamaz.

## İnsan devri hangi durumlarda zorunludur?

Agent güven düzeyi düşükse, müşteri insan isterse, politika istisnası gerekiyorsa veya işlem geri alınamıyorsa görüşme insana devredilmelidir. Devir yalnızca bağlantı aktarmak değildir; görüşme özeti, kullanılan kaynak, önerilen işlem ve devir nedeni temsilciye birlikte ulaşmalıdır.

Şu olaylardan biri pilotu durdurur:

- Yanlış müşterinin verisi gösterildi.
- Agent gerçekte olmayan politika veya kaynak üretti.
- Agent yetkisi dışındaki bir işlemi başlattı.
- Acil, hukuki veya güvenlik konusu normal kuyruğa bırakıldı.
- Olay kaydı veya geri alma yolu çalışmadı.

## KVKK açısından hangi veri sınırları gerekir?

Kişisel veri kullanan agent için amaç, veri kategorisi, saklama süresi, aktarım ve erişim rolü yazılı olmalıdır. [KVKK'nın üretken yapay zekâ rehberi](https://www.kvkk.gov.tr/Icerik/8547/uretken-yapay-zeka-ve-kisisel-verilerin-korunmasi-rehberi-15-soruda) yaşam döngüsü boyunca kişisel veri işleme faaliyetlerinin değerlendirilmesini ele alır. Bu sayfa hukuki uygunluk garantisi vermez; somut sistem için hukuk ve güvenlik incelemesi gerekir.

## AI agent performansı nasıl ölçülür?

“Agent çözdü” ifadesi, müşteri tekrar başvurmadı ve kalite kontrolü geçti anlamına gelmelidir. Yalnızca konuşmanın botta kapanması çözüm sayılmamalıdır.

`Kabul edilen çözüm oranı = kalite kontrolünü geçen ve yeniden açılmayan kapsam içi talepler / tüm kapsam içi talepler`

`Doğru devir oranı = doğru zamanda insana devredilen talepler / devir gerektiren talepler`

`Görev başı toplam maliyet = tüm model + araç + altyapı + insan incelemesi + hata maliyeti / kabul edilen görev sayısı`

Metrikler manuel süreçle aynı talep karışımı ve dönem koşullarında karşılaştırılmalıdır.

## Üretime geçiş kararı nasıl verilir?

Üretime geçiş için üç koşul birlikte sağlanmalıdır: kalite eşiği geçmeli, kritik olay yaşanmamalı ve insan incelemesi dahil görev başı maliyet kabul edilebilir olmalıdır. [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework), yönetişim, ölçüm ve risk yönetimini sistem yaşam döngüsü boyunca ele almak için kullanılabilir.

Başarılı pilotun çıktısı “AI agent her şeyi çözer” değildir. Doğru çıktı; hangi talep türünün, hangi kaynak ve yetkiyle, hangi insan devri altında kabul edilebilir sonuç verdiğinin kayıtlı olmasıdır.
