---
title: "Hasta Takip ve Hatırlatma Sistemleri İçin AI Agent Kurulumu"
slug: "hasta-takip-hatirlatma-ai-agent-kurulumu"
description: "Sağlık kurumlarında randevu hatırlatma ve takip iş akışları için ölçümlü, insan onaylı ve veri sınırları tanımlanmış AI agent pilotu kurma rehberi."
date: "2026-06-04"
category: "Yapay Zeka"
tags: ["AI Agent", "Sağlık Otomasyonu", "Hasta Takibi", "KVKK"]
readTime: "9 dk"
featured: false
image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop&q=80"
translationSlug: "ai-agent-patient-follow-up-appointment-reminders"
faq:
  - question: "Hasta takip AI agent'ı hangi görevlerde kullanılabilir?"
    answer: "En güvenli başlangıç alanları randevu hatırlatma, katılım teyidi, onaylı takvimden alternatif saat gösterme, standart hazırlık bilgisini iletme ve çözülemeyen talepleri görevliye aktarmadır. Sistem teşhis koymamalı, tedavi önermemeli veya acil durum kararı vermemelidir."
  - question: "Bir hasta hatırlatma sistemi KVKK uyumlu sayılır mı?"
    answer: "Tek başına ürün veya şifreleme özelliği KVKK uyumu sağlamaz. Sağlık verisi özel nitelikli kişisel veridir. Veri sorumlusu; geçerli işleme şartını, amaç ve veri sınırını, erişim yetkilerini, saklama süresini, aktarımı ve güvenlik önlemlerini proje özelinde belirlemelidir."
  - question: "AI agent acil sağlık mesajlarını kendi başına yönetebilir mi?"
    answer: "Hayır. Acil olabilecek ifadeler otomatik teşhis veya triyaj için kullanılmamalıdır. Sistem önceden onaylanmış güvenlik mesajını göstermeli, kullanıcıyı 112 veya kurumun acil kanalına yönlendirmeli ve yetkili insan ekibe bildirim göndermelidir."
  - question: "Hasta takip otomasyonunun başarısı nasıl ölçülür?"
    answer: "Pilot başlamadan önce mevcut hatırlatma hacmi, teyit oranı, görevli süresi, yanlış yönlendirme ve insan devri ölçülür. Pilot aynı tanımlar ve aynı dönem uzunluğuyla karşılaştırılır. Başarı hedefi kurumun kendi başlangıç değerine göre konur; genel bir yüzde garanti edilmez."
  - question: "Hasta takip AI agent'ı ne kadar sürede kurulur?"
    answer: "Süre; hastane bilgi sisteminin API yeteneğine, kullanılacak kanallara, veri aktarımına, hukuk ve güvenlik incelemesine ve pilot kapsamına bağlıdır. Takvim ancak bu bağımlılıklar doğrulandıktan sonra proje planında verilebilir."
---

> **20 Eylül 2026 güncellemesi:** Doğrulanabilir yöntemi bulunmayan başarı
> yüzdeleri, sabit maliyetler ve koşulsuz KVKK uyumu ifadeleri kaldırıldı. Bu
> rehber artık ölçümlü pilotu, insan onayını ve veri sınırlarını esas alıyor.

## Hasta takip AI agent'ı nedir?

Hasta takip AI agent'ı; randevu hatırlatma, katılım teyidi, standart bilgi
iletimi ve görevliye yönlendirme gibi tanımlı iletişim işlerini yürüten bir
otomasyon katmanıdır. Sistem hastane bilgi sistemi, takvim ve iletişim kanalıyla
yalnız izin verilen alanlarda veri alışverişi yapar.

Bu sistem bir sağlık çalışanı değildir. Teşhis, tedavi önerisi, ilaç dozu,
tahlil yorumu ve acil durum kararı otomasyona bırakılmamalıdır. Klinik karar ve
belirsiz hasta mesajları yetkili insan ekibinde kalmalıdır.

## Hangi hasta takip işleri otomasyona uygundur?

| İş akışı | Otomasyonun yapabileceği | Zorunlu insan sınırı | Pilot metriği |
| --- | --- | --- | --- |
| Randevu hatırlatma | Onaylı şablonu seçilen kanaldan göndermek | Mesaj içeriğini ve zamanlamayı kurum onaylar | Gönderim, teslim ve teyit oranı |
| Katılım teyidi | Evet, hayır veya yeniden planlama yanıtını sınıflandırmak | Belirsiz yanıt görevliye gider | Doğru sınıflandırma ve insan devri |
| Yeniden planlama | Onaylı takvimden uygun saatleri göstermek | Çakışma ve istisnayı görevli çözer | Tamamlanan değişiklik ve hata sayısı |
| Hazırlık bilgisi | Kurumun onayladığı sabit talimatı iletmek | Tıbbi soru klinik ekibe gider | Doğru şablon ve eskalasyon oranı |
| Takip formu | Gerekli alanları güvenli form üzerinden toplamak | Sağlık çalışanı veriyi doğrular | Eksiksiz form ve düzeltme oranı |
| Acil olabilecek mesaj | Sabit güvenlik mesajı ve acil kanal yönlendirmesi göstermek | Triyaj ve klinik karar tamamen insandadır | Bildirim süresi ve kaçırılan olay incelemesi |

## KVKK açısından hangi sınırlar kurulmalı?

Sağlık verileri özel nitelikli kişisel veridir. KVKK'nın
[özel nitelikli kişisel veriler açıklaması](https://www.kvkk.gov.tr/Icerik/2051/Ozel-Nitelikli-Kisisel-Veriler)
ve Kurumun
[özel nitelikli kişisel verilerin işlenmesi rehberi](https://www.kvkk.gov.tr/Icerik/8184/Ozel-Nitelikli-Kisisel-Verilerin-Islenmesine-Iliskin-Rehber),
işleme şartı ile yeterli idari ve teknik önlemlerin birlikte değerlendirilmesini
gerektirir.

Bir projede en az şu kararlar yazılı olmalıdır:

1. Veri sorumlusu ve veri işleyen rolleri.
2. Her veri alanının amacı ve geçerli işleme şartı.
3. AI sağlayıcısına gönderilmesi yasaklanan alanlar.
4. Yetki matrisi, erişim süresi ve işlem kayıtları.
5. Saklama, silme ve olay müdahale prosedürü.
6. Yurt dışı aktarımının olup olmadığı ve uygulanacak hukuki mekanizma.
7. Hastanın itiraz, insanla görüşme ve iletişimi durdurma yolu.

Bir sağlayıcının “uyumlu” etiketi bu incelemenin yerine geçmez. Hukuki dayanak
ve teknik mimari sağlık kurumu, hukuk danışmanı ve güvenlik sorumlusu tarafından
proje özelinde doğrulanmalıdır.

## Güvenli pilot nasıl kurulur?

### 1. Tek bir düşük riskli iş seçin

İlk pilotu randevu hatırlatma ve katılım teyidiyle sınırlayın. Aynı anda ilaç,
tahlil, ödeme ve klinik danışmanlık akışlarını eklemeyin.

### 2. Başlangıç değerini ölçün

En az bir karşılaştırma dönemi için gönderim sayısını, teyit oranını, görevli
süresini, yanlış yönlendirmeyi ve yeniden planlama süresini kaydedin. Ölçüm
tanımlarını pilot boyunca değiştirmeyin.

### 3. Veri envanteri çıkarın

Agent'ın gerçekten ihtiyaç duyduğu alanları listeleyin. Hatırlatma için teşhis,
tahlil sonucu veya ayrıntılı hasta geçmişi gerekmiyorsa bu verileri sisteme
göndermeyin.

### 4. İnsan devri kurallarını yazın

Serbest metin, öfke, belirsizlik, klinik soru, kimlik uyuşmazlığı ve acil
olabilecek ifade görevliye aktarılmalıdır. Devir sırasında konuşma özeti ve
hangi kuralın tetiklendiği görünmelidir.

### 5. Test verisiyle doğrulayın

Canlı hasta verisinden önce sentetik kayıtlarla izin, kimlik eşleme, takvim
çakışması, yanlış numara, vazgeçme ve insan devri senaryolarını test edin.

### 6. Sınırlı pilot çalıştırın

Pilot grubu, tarih aralığı ve günlük hacim önceden belirlenmelidir. İlk aşamada
tüm mesajlar insan ekip tarafından örneklemle incelenmelidir.

### 7. Kabul veya geri alma kararı verin

Pilot ancak hata sınırı, insan devri, veri güvenliği ve operasyonel fayda kabul
ölçütlerini birlikte karşılıyorsa genişletilir. Güvenlik olayı veya hatalı
klinik yönlendirme görülürse akış durdurulur ve manuel sürece dönülür.

## Pilot ölçüm kartı

| Alan | Kayıt |
| --- | --- |
| İş akışı | Örneğin randevu teyidi |
| Başlangıç dönemi | Tarih ve toplam işlem sayısı |
| Pilot dönemi | Tarih ve toplam işlem sayısı |
| Başarı metriği | Aynı formülle hesaplanan teyit veya tamamlanma oranı |
| Güvenlik metriği | Yanlış kişiye gönderim, yanlış işlem, kaçırılan insan devri |
| İnsan emeği | İşlem başına aktif görevli süresi |
| Sistem kapsamı | Model, kanal, entegrasyon ve sürüm |
| Sınırlama | Örneklem, kanal, hasta grubu ve hariç tutulan senaryolar |
| Karar | Genişlet, düzeltip tekrar dene veya geri al |

Bu kart doldurulmadan “iş yükü şu kadar azaldı” veya “gelme oranı şu kadar
arttı” gibi bir sonuç yayımlanmamalıdır.

## Maliyet nasıl hesaplanır?

Hasta takip otomasyonunda tek bir sabit fiyat yoktur. Toplam maliyet şu
bileşenlerden oluşur:

`kurulum + entegrasyon + mesaj hacmi + model kullanımı + izleme + insan incelemesi + bakım`

Mesaj ve model fiyatları sağlayıcıya, ülkeye, mesaj kategorisine ve tarihe göre
değişir. Teklif hazırlanırken resmi sağlayıcı fiyat sayfaları aynı gün
kontrol edilmeli; hacim ve varsayımlar ayrı satırlarda gösterilmelidir.

## Son karar

Hasta takip AI agent'ı için doğru ilk hedef “insansız hasta iletişimi” değildir.
Doğru hedef; düşük riskli bir süreci ölçmek, gerekli en az veriyi kullanmak,
belirsizliği insana aktarmak ve geri alınabilir bir pilot kurmaktır. Sonuç ancak
kurumun kendi başlangıç verisiyle karşılaştırıldığında anlamlıdır.

Bu içerik teknik ve operasyonel çerçevedir; tıbbi veya hukuki danışmanlık
değildir.
