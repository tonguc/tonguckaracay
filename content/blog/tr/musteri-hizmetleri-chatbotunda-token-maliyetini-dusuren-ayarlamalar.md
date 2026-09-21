---
title: "Müşteri Hizmetleri Chatbotunda Token Maliyetini Düşüren 7 Ayar"
slug: "musteri-hizmetleri-chatbotunda-token-maliyetini-dusuren-ayarlamalar"
description: "Chatbot token maliyetini ölçmek ve kaliteyi bozmadan azaltmak için güncel fiyat bağlantıları, hesap formülü, test protokolü ve yedi teknik ayar."
date: "2026-05-01"
category: "Yapay Zeka"
tags: ["AI Chatbot", "Token Optimizasyonu", "Müşteri Hizmetleri", "LLM Maliyet"]
readTime: "10 dk"
featured: false
image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&auto=format&fit=crop&q=80"
translationSlug: "how-to-reduce-token-costs-in-customer-service-chatbots"
faq:
  - question: "Müşteri hizmetleri chatbotunda token maliyeti nasıl hesaplanır?"
    answer: "Sağlayıcının kullanım kaydındaki önbelleksiz girdi, önbellekli girdi ve çıktı tokenlarını ayrı ayrı ilgili birim fiyatla çarpın. Arama, dosya, kod çalıştırma veya başka ücretli araç çağrılarını ayrıca ekleyin. Aylık tahmin için aynı formülü gerçek trafik hacmiyle uygulayın."
  - question: "En ucuz model müşteri hizmetleri için en doğru seçim midir?"
    answer: "Hayır. Model seçimi yalnız token fiyatına göre yapılmamalıdır. Aynı dondurulmuş konuşma setinde görev tamamlama, politika ihlali, yanlış yönlendirme, insan devri ve toplam görev maliyeti birlikte karşılaştırılmalıdır."
  - question: "Prompt kısaltmak her zaman maliyeti düşürür mü?"
    answer: "Prompt kısalınca girdi tokenı azalır; fakat gerekli politika veya bağlam silinirse hata, tekrar deneme ve insan desteği maliyeti artabilir. Kısa sürüm ancak aynı regresyon setindeki kabul ölçütlerini geçtiğinde kullanılmalıdır."
  - question: "Prompt caching ne zaman işe yarar?"
    answer: "Önbellekleme, uzun ve değişmeyen bir önek çok sayıda istekte aynı biçimde tekrarlandığında işe yarar. Minimum uzunluk, saklama süresi ve ücret çarpanı sağlayıcıya ve modele göre değişir; güncel resmi doküman kontrol edilmelidir."
  - question: "Konuşma geçmişi nasıl sınırlandırılmalıdır?"
    answer: "Sabit bir mesaj sayısı seçmek yerine görevin ihtiyaç duyduğu gerçekleri koruyun. Son mesajlar, doğrulanmış durum alanları ve kısa bir özet birlikte kullanılabilir. Kimlik, sipariş ve taahhüt bilgileri özetlenirken kaybolmamalıdır."
  - question: "Streaming token maliyetini düşürür mü?"
    answer: "Streaming tek başına aynı çıktının token sayısını azaltmaz. Maliyeti ancak uygulama üretimi erken durdurduğunda veya daha kısa kabul edilebilir yanıt ürettiğinde değiştirir. Sağlayıcının faturalandırma kaydı esas alınmalıdır."
  - question: "Türkçe daha fazla token tüketir mi?"
    answer: "Bu sonuç tokenizer, model ve metne göre değişir. Tahmin yürütmek yerine kullanılacak modelin tokenizerı veya API kullanım alanıyla aynı Türkçe ve İngilizce görev seti ölçülmelidir."
---

> **20 Eylül 2026 güncellemesi:** Eski model fiyatları, doğrulanmamış müşteri
> sonuçları ve genel tasarruf yüzdeleri kaldırıldı. Yazı artık sağlayıcıların
> güncel resmi fiyat sayfalarını, yeniden üretilebilir maliyet formülünü ve
> kalite kapılı bir karşılaştırma yöntemini kullanıyor.

## Chatbot token maliyeti nasıl hesaplanır?

Chatbot maliyeti yalnız toplam token sayısı değildir. Girdi, önbellekli girdi,
çıktı, araç çağrısı, depolama ve yeniden deneme kalemleri ayrı tutulmalıdır.
Sağlayıcıların fiyat yapıları ve model adları değişebildiği için bu yazıda sabit
bir fiyat tablosu yayımlanmıyor.

Güncel fiyatı hesap günü şu resmi sayfalardan alın:

- [OpenAI model ve fiyat bilgileri](https://developers.openai.com/api/docs/models)
- [Anthropic Claude fiyatlandırması](https://platform.claude.com/docs/en/about-claude/pricing)
- [Google Gemini API fiyatlandırması](https://ai.google.dev/gemini-api/docs/pricing)

Temel formül:

`toplam maliyet = girdi maliyeti + önbellekli girdi maliyeti + çıktı maliyeti + araç maliyeti + depolama + yeniden denemeler`

Her token kalemi için:

`token maliyeti = ölçülen token / fiyat birimi × güncel birim fiyat`

Para birimi dönüşümü gerekiyorsa kur ve kur tarihi ayrıca kaydedilmelidir.

## Hangi veriler kaydedilmeli?

| Alan | Neden gerekli? | Kayıt kaynağı |
| --- | --- | --- |
| Model kimliği ve sürümü | Fiyat ve davranış sürüme bağlıdır | API isteği ve yanıtı |
| Önbelleksiz girdi tokenı | Tam girdi fiyatına giren kısmı gösterir | Sağlayıcı kullanım alanı |
| Önbellekli girdi tokenı | Ayrı ücret çarpanını doğrular | Sağlayıcı kullanım alanı |
| Çıktı tokenı | Yanıt uzunluğunun maliyetini gösterir | Sağlayıcı kullanım alanı |
| Araç çağrıları | Arama veya dosya kullanımı ek ücret doğurabilir | Tool çağrı kayıtları |
| Başarısız ve tekrarlanan istekler | Görünmeyen tüketimi ortaya çıkarır | Uygulama logu |
| Görev sonucu | Ucuz isteğin işi gerçekten bitirip bitirmediğini gösterir | Değerlendirme kaydı |
| İnsan devri | Toplam görev maliyetini etkiler | Destek sistemi |

Maliyet karşılaştırması istek başına değil, başarıyla tamamlanan görev başına
yapılmalıdır. Ucuz bir model daha çok tekrar veya insan devri üretiyorsa toplam
görev maliyeti yükselir.

## Token maliyetini düşüren 7 ayar

### 1. Önce gerçek kullanımı ölçün

Sağlayıcının döndürdüğü kullanım alanlarını istek kimliğiyle kaydedin. Tahmini
kelime-token dönüşümü yalnız ön planlama içindir; fatura ve optimizasyon kararı
gerçek token kayıtlarına dayanmalıdır.

Kabul ölçütü: Her üretim isteği model, girdi, önbellekli girdi, çıktı, araç ve
sonuç durumuyla eşleşebilmelidir.

### 2. Sistem promptunu görev sınırına göre kısaltın

Tekrarlanan nezaket ifadelerini ve aynı kuralın farklı cümlelerini kaldırın.
Güvenlik, iade, kimlik doğrulama ve insan devri kurallarını koruyun. Prompt
kısaltmasını yalnız aynı test setinde eski sürümle karşılaştırın.

Kabul ölçütü: Yeni prompt daha az girdi tokenı kullanırken politika ihlali,
yanlış işlem ve insan devri sınırlarını aşmamalıdır.

### 3. Konuşma durumunu yapılandırın

Tüm konuşmayı her istekte yeniden göndermek yerine son mesajları, doğrulanmış
durum alanlarını ve kısa özeti birlikte kullanın. Sipariş numarası, verilen söz,
kimlik kontrolü ve çözülmemiş talep gibi karar verici bilgileri koruyun.

Kabul ölçütü: Uzun konuşma testlerinde unutulan taahhüt ve tekrar sorulan bilgi
sayısı başlangıç sürümünden kötü olmamalıdır.

### 4. Yalnız ilgili bilgiyi getirin

Ürün kataloğu veya politika dokümanının tamamını prompta koymayın. Arama katmanı
yalnız soruyla ilgili bölümleri getirmeli; kaynak kimliği ve sürümü yanıt kaydına
eklenmelidir.

Kabul ölçütü: Getirilen bağlam azalırken doğru kaynak kullanımı ve yanıtsız
sorularda insan devri korunmalıdır.

### 5. Görevi uygun model katmanına yönlendirin

Sipariş durumu, sınıflandırma, politika yorumu ve istisna çözümü aynı zorlukta
değildir. Her görev sınıfını dondurulmuş örnek setinde aday modellerle test edin.
Modeli fiyatına göre değil, kabul edilen görev başı toplam maliyete göre seçin.

Kabul ölçütü: Yönlendirme kuralı, hangi görevlerin hangi modele gittiğini ve
hangi durumda daha güçlü modele veya insana geçtiğini açıkça göstermelidir.

### 6. Çıktı biçimini ve bitiş koşulunu sınırlandırın

Kullanıcı kısa durum bilgisi istiyorsa uzun açıklama üretmeyin. Yapılandırılmış
çıktı, alan sınırı ve açık bitiş koşulu gereksiz çıktı tokenını azaltabilir.
Streaming yalnız erken durdurma gerçekten uygulanıyorsa ayrı ölçülmelidir.

Kabul ölçütü: Kısa yanıtlar gerekli bilgiyi, sonraki adımı ve insan destek yolunu
korumalıdır.

### 7. Önbellek ve batch seçeneklerini iş yüküne göre kullanın

Değişmeyen uzun önekler sağlayıcının desteklediği önbelleğe uygun olabilir.
Anlık yanıt gerektirmeyen toplu değerlendirme veya sınıflandırma işleri batch
moduna uygun olabilir. Minimum token, saklama süresi, veri politikası ve fiyat
çarpanı sağlayıcının güncel dokümanından doğrulanmalıdır.

Kabul ölçütü: Önbellek isabeti, ilk yazma maliyeti, saklama maliyeti ve
gecikme birlikte raporlanmalıdır.

## Kalite bozulmadan tasarruf nasıl kanıtlanır?

Bir aday yapılandırmayı mevcut sürümle aynı konuşma setinde çalıştırın. Test seti
normal talepleri, belirsiz mesajları, politika istisnalarını, kimlik kontrolünü,
araç hatasını ve insan devrini kapsamalıdır.

| Ölçüm | Başlangıç | Aday | Kabul sınırı |
| --- | --- | --- | --- |
| Tamamlanan görev başı toplam maliyet | Gerçek kullanım | Gerçek kullanım | Daha düşük olmalı |
| Görev tamamlama | Aynı etiketleme | Aynı etiketleme | Önceden belirlenen sınırın altına düşmemeli |
| Politika ihlali | İnsan incelemesi | İnsan incelemesi | Artmamalı |
| Yanlış araç çağrısı | Log kaydı | Log kaydı | Artmamalı |
| İnsan devri | Destek kaydı | Destek kaydı | Gerekçesiz artmamalı |
| Yanıt süresi | Aynı ortam | Aynı ortam | Ürün hedefini karşılamalı |

Tasarruf oranı ancak iki maliyet aynı kapsam ve para birimindeyse hesaplanır:

`tasarruf oranı = (başlangıç maliyeti - aday maliyeti) / başlangıç maliyeti × 100`

Sonuçla birlikte test tarihi, model sürümü, konuşma sayısı, görev dağılımı ve
kalite sınırları yayımlanmalıdır. Bu alanlar yoksa sonuç örnek hesap olarak
etiketlenmeli, müşteri sonucu gibi sunulmamalıdır.

## Hangi yöntem ne zaman seçilmeli?

| Belirti | Önce denenecek ayar | Dikkat edilecek risk |
| --- | --- | --- |
| Her istekte uzun sabit talimat | Prompt temizliği veya önbellek | Güvenlik kuralının silinmesi |
| Uzayan konuşmalarda maliyet artışı | Durum alanı ve özet | Taahhüt veya kimlik bilgisinin kaybı |
| Tam katalog her istekte gidiyor | Seçici bilgi getirme | Yanlış veya eski belgenin seçilmesi |
| Basit ve zor talepler aynı modelde | Görev yönlendirme | Yanlış düşük model seçimi |
| Yanıtlar gereğinden uzun | Çıktı şeması ve bitiş koşulu | Eksik açıklama veya sert ton |
| Aynı önek tekrar ediyor | Sağlayıcı önbelleği | Düşük isabet ve saklama maliyeti |
| Gecikme kritik değil | Batch işleme | Sonuç gecikmesi |

## Son karar

Token optimizasyonu bir yüzde vaadi değildir. Doğru karar; güncel resmi fiyatı,
gerçek kullanım kaydını, görev başarısını ve insan desteği maliyetini aynı deney
içinde karşılaştırmaktır. En düşük token sayısı değil, kabul edilen kaliteyle
tamamlanan görevin toplam maliyeti optimize edilmelidir.

## Rehberden uygulamaya

Ekibiniz maliyet ve kalite testlerini kendi yürütecekse [AI eğitimi](/ai-egitimi)
uygulamalı bir başlangıç sunar. Mevcut kullanımı ölçmek, aday mimariyi pilotta
karşılaştırmak ve entegrasyonu yürütmek için [KOBİ'ler için AI otomasyon danışmanlığını](/hizmetler/yapay-zeka-cozumleri)
inceleyin.
