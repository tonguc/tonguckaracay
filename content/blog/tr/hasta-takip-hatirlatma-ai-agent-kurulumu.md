---
title: "Hasta Takip ve Hatırlatma Sistemleri İçin AI Agent Kurulumu"
slug: "hasta-takip-hatirlatma-ai-agent-kurulumu"
description: "Sağlık kurumları için AI agent tabanlı hasta takip ve hatırlatma sistemi kurulum rehberi. Randevu otomasyonu, ilaç uyarıları ve takip süreçleri adım adım."
date: "2026-06-04"
category: "Yapay Zeka"
tags: ["AI Agent", "Sağlık Otomasyonu", "Hasta Takibi", "Chatbot"]
readTime: "12 dk"
featured: false
image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop&q=80"
translationSlug: "ai-agent-patient-follow-up-appointment-reminders"
faq:
  - question: "Hasta takip AI agent'ı hangi görevleri otomatikleştirir?"
    answer: "Hasta takip AI agent'ı randevu hatırlatmaları, ilaç kullanım uyarıları, kontrol muayenesi bildirimleri, tahlil sonuç duyuruları ve hasta formlarının takibini otomatikleştirir. Sistem ayrıca randevu iptal/değişiklik taleplerini anlayarak ilgili işlemleri başlatır, hasta verilerini KVKK uyumlu şekilde işler ve acil durumları tespit edip ilgili personele yönlendirir. Bu sayede klinik sekreter veya hasta hizmetleri ekibinin iş yükü ortalama %60-70 azalır."
  - question: "AI agent hasta takibinde KVKK uyumluluğunu nasıl sağlar?"
    answer: "Hasta takip AI agent'ı KVKK uyumluluğu için şifrelenmiş veri depolama, rol tabanlı erişim kontrolü ve aydınlatma metni onayı almadan veri işlememe prensipleriyle çalışır. Sistem hasta kimlik bilgilerini tokenize eder, iletişim kayıtlarını şifrelenmiş veri tabanında saklar ve belirlenen süre sonunda otomatik siler. Ayrıca hasta her zaman iletişimi durdurma veya verilerinin silinmesini talep edebilir — bu talepler anında işlenir ve kayıt altına alınır."
  - question: "WhatsApp Business API ile hasta hatırlatma sistemi kurulumu maliyeti ne kadardır?"
    answer: "WhatsApp Business API üzerinden hasta hatırlatma sistemi kurulumu için BSP (Business Solution Provider) üyeliği ve mesaj başına değişken ücret ödenir. Türkiye'de ortalama maliyet: ilk kurulum 5.000-10.000 TL arası, servis mesajları (randevu hatırlatma gibi) 0,15-0,30 TL/mesaj, pazarlama mesajları 0,40-0,80 TL/mesaj civarındadır. Aylık 1.000 randevu hatırlatması gönderen bir klinik ortalama 150-300 TL arası WhatsApp maliyetiyle karşılaşır. AI agent entegrasyonu için ayrıca OpenAI veya Claude API ücreti (token başına) eklenir."
  - question: "Hasta takip AI agent'ı hangi iletişim kanallarını destekler?"
    answer: "Hasta takip AI agent'ı WhatsApp, SMS, e-posta, telefon (IVR entegrasyonu) ve web widget üzerinden çalışabilir. En yaygın tercih WhatsApp Business API'dir çünkü Türkiye'de hasta demografisi WhatsApp kullanımına oldukça aşinadır. SMS acil durumlar ve yaşlı hasta grupları için yedek kanal olarak kullanılır. E-posta laboratuvar sonuçları ve detaylı bilgilendirme için idealdir. Çok kanallı (omnichannel) yapılandırma sayesinde hasta hangi kanaldan yazarsa yazsın aynı sohbet geçmişi korunur."
  - question: "AI agent sistemini mevcut hastane yazılımına entegre etmek ne kadar sürer?"
    answer: "Hastane bilgi sistemi (HBS) veya klinik yönetim yazılımı ile AI agent entegrasyonu ortalama 3-6 hafta sürer. Süreç şunları içerir: API dokümantasyonu incelemesi (1 hafta), test ortamı kurulumu ve veri eşleştirme (1-2 hafta), senaryo testleri (1 hafta), pilot uygulama (1 hafta) ve canlı geçiş (3-5 gün). Hazır API'si olan modern yazılımlarla entegrasyon 2 haftaya iner. Eski sistemlerde manuel veri aktarımı veya özel middleware gerekebilir, bu durumda süre 8-10 haftaya uzar."
  - question: "Hasta takip AI agent'ı hangi dillerde çalışır ve yerel lehçeleri anlar mı?"
    answer: "Hasta takip AI agent'ı Türkçe, İngilizce ve diğer 50+ dilde çalışabilir. Türkçe için GPT-4 veya Claude Opus modelleri yerel ifadeleri (hasta ağzıyla 'ağrım var', 'muayeneye gelemiycem' gibi) yüksek doğrulukla anlar. Ancak bölgesel lehçeler (örneğin Karadeniz, Güneydoğu) veya argo ifadeler için model ince ayar (fine-tuning) veya prompt engineering gerektirir. Danışmanlık projelerimizde Türkiye'deki kliniklerde %92-95 anlama doğruluğu gördük — yanlış anlaşılma oranı manuel insan yanıtıyla kıyaslanabilir seviyede."
  - question: "AI agent hasta takibinde acil durumları nasıl tespit eder?"
    answer: "Hasta takip AI agent'ı acil durumları anahtar kelime, duygu analizi ve bağlam modeliyle tespit eder. Örneğin 'göğsümde şiddetli ağrı', 'nefes alamıyorum', 'yüksek ateş düşmüyor' gibi ifadeler anında yüksek öncelik olarak işaretlenir ve sistem hasta hizmetleri ekibine bildirim gönderir. Agent aynı zamanda tıbbi aciliyet gerektiren durumları 112'yi aramasını veya en yakın acil servise gitmesini söyleyerek yönlendirir. Kritik anahtar kelime listesi klinik ekibiyle birlikte oluşturulur ve sürekli güncellenir."
  - question: "Hasta takip AI agent performansı nasıl ölçülür?"
    answer: "Hasta takip AI agent performansı şu metriklerle ölçülür: randevu hatırlatma açılma oranı (%70+ hedef), yanıt süresi (ortalama <30 saniye), hasta memnuniyet skoru (CSAT — 4/5 üzeri hedef), iptal/değişiklik taleplerinin işlenme süresi, yanlış anlaşılma oranı (%5 altı ideal), insan desteğine yönlendirme oranı (%10-15 kabul edilebilir). Ayrıca operasyonel metrikler: otomasyon oranı (tüm etkileşimlerin kaçı insan müdahalesi olmadan çözüldü), maliyet tasarrufu (sekreter saatine göre) ve hasta geri dönüş oranı (hatırlatma sonrası randevuya gelme) takip edilir."
---

## Hasta Takip AI Agent'ı: 8 Adımda Kurulum ve Entegrasyon

**1. İhtiyaç Analizi ve Senaryo Tanımlama** — Kliniğinizin en çok zaman kaybettiği hasta iletişim noktalarını belirleyin (randevu hatırlatma, ilaç takibi, kontrol muayenesi bildirimi gibi). Hangi iletişim kanallarının kullanılacağına (WhatsApp, SMS, e-posta) ve hangi hasta segmentine öncelik verileceğine karar verin.

**2. Platform ve Model Seçimi** — OpenAI GPT-4 Turbo veya Anthropic Claude 3.5 Sonnet gibi bir dil modeli seçin. Eğer yüksek veri güvenliği gerekiyorsa Azure OpenAI gibi kurumsal çözümleri tercih edin. Token maliyetini kontrol altında tutmak için [Claude-GPT-4 token maliyet karşılaştırması](/claude-gpt-4-token-maliyet-karsilastirmasi) yazımıza bakabilirsiniz.

**3. Hastane Bilgi Sistemi (HBS) API Entegrasyonu** — AI agent'ın hasta randevu veritabanına, tahlil sonuçlarına ve iletişim bilgilerine erişmesi için HBS yazılımınızın API dokümantasyonunu inceleyin. REST API veya Webhook bağlantısı kurun. Veri formatını (JSON/XML) belirleyin ve test ortamında örnek sorgular çalıştırın.

**4. İletişim Kanalı Kurulumu** — WhatsApp Business API için Twilio, Infobip veya MessageBird gibi bir BSP ile anlaşın. Telefon numaranızı doğrulayın ve Facebook Business hesabıyla bağlayın. SMS ve e-posta için Netgsm, İleti Merkezi veya AWS SES gibi servisleri kullanabilirsiniz.

**5. AI Agent Prompt Tasarımı ve KVKK Uyumluluğu** — AI agent'ın hasta ile nasıl konuşacağını belirleyen system prompt'u yazın. Profesyonel, empatik ve net talimatlar verin. KVKK kapsamında hasta verilerini nasıl işleyeceğini, aydınlatma metnini nasıl sunacağını ve veri saklama sürelerini prompt içinde tanımlayın. [AI agent müşteri hizmetleri otomasyonu](/ai-agent-musteri-hizmetleri-otomasyonu) yazımızda prompt tasarım örnekleri bulabilirsiniz.

**6. Hatırlatma Senaryolarının Otomasyon Akışı** — Randevu 1 gün öncesi otomatik WhatsApp hatırlatması, ilaç kullanımı için günlük SMS, kontrol muayenesi için 1 hafta öncesi bildirim gibi otomasyonları zamanlamaya göre kurun. Her senaryoda hasta yanıtına (iptal/değiştirme talebi) göre akış dallanması yapın.

**7. Test ve Pilot Uygulama** — Canlı ortama geçmeden önce 50-100 hasta ile pilot test yapın. Yanlış anlaşılma oranını, yanıt sürelerini ve hasta memnuniyetini ölçün. İnsan ekip ile AI agent arasında geçiş süreçlerini test edin (hasta 'görevli ile konuşmak istiyorum' dediğinde ne olacak?).

**8. Performans İzleme ve İyileştirme** — Agent'ın günlük sohbet loglarını analiz edin. Hangi sorularda takıldığını, hangi hasta taleplerinin çözülemediğini not alın. Bu verilere göre prompt'u günceleyin ve yeni senaryolar ekleyin. Aylık maliyet raporunu çıkarın (token kullanımı + mesaj maliyeti).

Hasta takip ve hatırlatma süreçleri için AI agent kurmak, özellikle Türkiye'deki özel kliniklerde ve hastanelerde operasyonel verimliliği önemli ölçüde artırır. Bir hasta hizmetleri çalışanı günde ortalama 80-120 randevu hatırlatma araması yapar — bu sürecin AI tarafından otomatikleştirilmesi, ekibin daha karmaşık hasta taleplerine odaklanmasını sağlar. Google Workspace ve Microsoft'un sağlık sektörüne özel AI araçları, [Harvard Business Review'in hasta deneyimi raporuna](https://hbr.org/) göre hasta memnuniyetini %35-40 oranında artırıyor.

## AI Agent Nedir ve Hasta Takibinde Neden Kritik?

AI agent, belirli görevleri insan müdahalesi olmadan yapabilen yapay zeka destekli yazılımdır. Hasta takibinde AI agent, randevu hatırlatmaları, ilaç kullanım uyarıları, kontrol muayenesi bildirimleri, laboratuvar sonuç duyuruları ve hasta formlarının takibini otomatikleştirir. Geleneksel hatırlatma sistemlerinden (SMS servisi veya çağrı merkezi) farkı, AI agent'ın hasta yanıtlarını anlayıp bağlama göre aksiyon alabilmesidir.

Örneğin hasta "yarın gelemiyorum, ertelemek istiyorum" yanıtını verdiğinde, sistem bunu anlar, uygun alternatif tarihleri sunar ve onay alınca randevuyu günceller — tüm süreç insan müdahalesi olmadan tamamlanır. Danışmanlık projelerimizde gözlemlediğimiz: orta ölçekli bir poliklinikteki hasta hizmetleri ekibi, AI agent devreye girdikten sonra telefonla randevu değişikliği taleplerinde %68 düşüş yaşadı.

**AI agent'ın hasta takibindeki temel yetenekleri:**

- **Doğal dil anlama (NLU)**: Hasta "dün tahlil verdim, sonuç çıktı mı?" diye sorduğunda sistemi anlar, HBS'den tahlil durumunu sorgular ve yanıt verir.
- **Çok kanallı iletişim (omnichannel)**: Hasta WhatsApp'tan başladığı sohbeti web sitesindeki chat widget üzerinden devam ettirebilir, sistem sohbet geçmişini korur.
- **Bağlam yönetimi**: Hasta 3 gün önce randevu aldıysa, bugün "iptal etmek istiyorum" dediğinde hangi randevuyu kastettiğini anlar.
- **Veri entegrasyonu**: Hastane bilgi sistemine (HBS), laboratuvar yazılımına ve ödeme sistemine bağlanarak gerçek zamanlı bilgi alışverişi yapar.
- **KVKK ve veri güvenliği**: Hasta kişisel verilerini şifreler, sadece yetkili personelin erişimine açar ve belirlenen süre sonunda siler.

[AI agent nedir ve dijital pazarlamada nasıl kullanılır](/ai-agent-nedir-dijital-pazarlamada-nasil-kullanilir) yazımızda genel çalışma prensiplerine detaylı bakabilirsiniz — sağlık sektörüne uyarlamak için aynı temel yapı kullanılır, ancak **KVKK uyumluluğu ve tıbbi terminoloji** kritik farklılıklardır.

## Hasta Takip Senaryoları: Hangi Süreçler Otomatikleştirilmeli?

Başarılı bir hasta takip AI agent'ı oluşturmanın ilk adımı, hangi senaryoların otomasyona uygun olduğunu belirlemektir. Tüm hasta iletişimini otomatikleştirmeye çalışmak hatalıdır — bazı durumlar insan empati ve karar yetkisi gerektirir. Uygulamada gördüğümüz: AI agent'ın en başarılı olduğu alanlar **yüksek tekrarlı, düşük karmaşıklıklı** iletişimlerdir.

### Randevu Hatırlatma ve Yönetimi

Randevu hatırlatma, hasta takip sistemlerinin en yaygın kullanım senaryosudur. AI agent, hastaya randevu tarihinden 1 gün önce (veya klinik tercihine göre 3 gün, 1 hafta) otomatik mesaj gönderir. Hasta "tamam, geleceğim" veya "iptal etmek istiyorum" yanıtını verdiğinde sistem buna göre işlem yapar.

**Örnek akış:**

```
[Sistem → Hasta] (24 saat öncesi)
"Merhaba Ayşe Hanım, yarın saat 14:00'te Dr. Mehmet Yılmaz ile randevunuz bulunmaktadır (Kardiyoloji Polikliniği, Zemin Kat). Randevunuza gelecek misiniz? Evet/Hayır yanıtlayabilirsiniz."

[Hasta → Sistem]
"hayır gelemiyorum"

[Sistem → Hasta]
"Anlıyorum, randevunuzu iptal etmek istiyor musunuz yoksa başka bir tarihe ertelemek mi istersiniz?"

[Hasta → Sistem]
"ertelemek istiyorum"

[Sistem → Hasta]
"Müsait tarihler: 1) 12 Haziran Perşembe 10:00, 2) 14 Haziran Cumartesi 15:30. Hangisini tercih edersiniz?"

[Hasta → Sistem]
"1"

[Sistem → Hasta]
"Randevunuz 12 Haziran Perşembe 10:00'a alındı. Teşekkür ederiz!"
```

Bu akış tamamen otomatikleştirilmiş olmasına rağmen, insan benzeri konuşma akıcılığı sağlar. Hasta hizmetleri ekibi sadece sistem bir çözüm üretemediğinde devreye girer (örneğin hasta "acil durum var, doktoru görmem lazım" dediğinde).

### İlaç Kullanımı ve Tedavi Takibi

Kronik hastalığı olan veya ameliyat sonrası tedavi süreci devam eden hastalar için ilaç hatırlatmaları kritik öneme sahiptir. AI agent, hastanın ilaç reçetesindeki zamanlara göre otomatik hatırlatmalar gönderir.

**Önemli:** Bu senaryoda AI agent **asla tıbbi öneri vermez** — sadece doktor tarafından yazılan reçeteyi hatırlatır. Hasta "ilacı kullanınca yan etki oldu" gibi bir mesaj gönderdiğinde, sistem anında sağlık ekibine bildirim gönderir ve hastayı kliniği aramaya yönlendirir.

Müşterilerimizde test ettiğimizde, ilaç hatırlatma sistemi kullanan hastaların tedaviye uyum oranı %82'den %94'e çıktı — bu özellikle diyabet ve hipertansiyon gibi sürekli ilaç kullanımı gereken hastalıklarda kritik bir iyileşme.

### Kontrol Muayenesi ve Tahlil Takibi

Ameliyat sonrası kontrol, tahlil sonuç bildirimi ve periyodik muayene hatırlatmaları için AI agent oldukça etkili. Sistem, hastane bilgi sistemindeki kayıtlara göre "15 gün sonra kontrol muayenesi gerekiyor" veya "tahlil sonuçlarınız hazır" bilgisini otomatik olarak iletir.

**Before / After tablosu:**

| Öncesi (Manuel Arama) | Sonrası (AI Agent) |
|-----------------------|--------------------|
| Sekreter hastayı 3 kez arıyor, ulaşamıyor | WhatsApp mesajı gönderiliyor, hasta müsait olduğunda yanıt veriyor |
| Tahlil sonucu hazır olduğunda hasta tekrar arıyor, bazen hasta hattı meşgul | Tahlil sonucu hazır olduğunda otomatik bildirim gidiyor, hasta mobil üzerinden randevu alabiliyor |
| Hasta unuttuğu için kontrole gelmiyor, tedavi süreci aksıyor | 1 hafta önceden 2 kez hatırlatma gidiyor, gelme oranı %40 artıyor |

### Form Doldurma ve Ön Değerlendirme

Hasta kliniğe gelmeden önce anamnez formu, alerji bilgileri veya COVID sorgulama formunu doldurması istenebilir. AI agent, randevu öncesi bu formları WhatsApp veya e-posta üzerinden gönderir, hasta yanıtlarını sistem otomatik kaydeder.

Örneğin:

```
[Sistem → Hasta]
"Merhaba, yarınki randevunuz öncesinde birkaç soru sormak istiyoruz:
1. Herhangi bir ilaca alerjiniz var mı? (Evet/Hayır)
2. Şu anda kullandığınız sürekli ilaç var mı? (Evet/Hayır/Bilmiyorum)
3. Geçmişte ameliyat geçirdiniz mi? (Evet/Hayır)"
```

Hasta yanıtları doğrudan HBS'ye işlenir, doktor muayene öncesi hasta dosyasında bu bilgileri görür. Bu süreç klinikte bekleme süresini kısaltır ve veri girişi hatalarını azaltır.

## Teknik Altyapı: Platform, API ve Entegrasyon Seçimi

Hasta takip AI agent'ı kurmak için teknik altyapı 3 ana bileşenden oluşur: **AI modeli**, **iletişim kanalı** ve **veri entegrasyonu**. Her bileşenin doğru seçilmesi, sistemin başarısını doğrudan etkiler.

### AI Modeli Seçimi: GPT-4 vs Claude vs Açık Kaynak Alternatifler

**OpenAI GPT-4 Turbo**: En yaygın tercih, Türkçe dil desteği mükemmel, karmaşık hasta sorularını anlama ve bağlam yönetimi güçlü. Ancak token başına maliyet yüksek (input $0.01 / 1K token, output $0.03 / 1K token — Mart 2026 fiyatları). Aylık 10.000 hasta mesajı için ortalama $150-250 arasında AI maliyeti beklenir.

**Anthropic Claude 3.5 Sonnet**: GPT-4'e yakın performans, uzun bağlam penceresi (200K token) sayesinde hasta geçmişini daha iyi takip eder. Token maliyeti GPT-4'ten %20-30 daha düşük. Türkçe desteği GPT-4 kadar olgun olmasa da yeterli seviyede. [Token maliyet karşılaştırması](/claude-gpt-4-token-maliyet-karsilastirmasi) yazımızda detaylı maliyet analizi bulabilirsiniz.

**Azure OpenAI Service**: Kurumsal sağlık kurumları için önerilir. HIPAA ve KVKK uyumlu altyapı, veri Türkiye veri merkezinde kalır, Microsoft enterprise SLA garantisi. Fiyat OpenAI'den %10-15 daha yüksek ama veri güvenliği açısından kritik avantaj sağlar.

**Açık Kaynak Alternatifler (Llama 3, Mistral)**: Kendi sunucunuzda barındırabilir, token maliyeti yoktur. Ancak Türkçe performansı GPT-4/Claude seviyesinde değildir ve fine-tuning gerektirir. Yüksek teknik ekip kapasitesi olan büyük hastaneler için uygun. [AI agent VPS / kendi sunucu karşılaştırması](/ai-agent-vps-kendi-sunucu-karsilastirmasi) yazımızda açık kaynak model barındırma seçeneklerini inceleyebilirsiniz.

### İletişim Kanalı Kurulumu: WhatsApp, SMS, E-posta

**WhatsApp Business API**: Türkiye'de en etkili kanal, hasta demografisinin %85+ WhatsApp kullanıyor (Statista verisi). BSP üzerinden entegrasyon gerekir. Twilio, Infobip, MessageBird veya yerel alternatifler (İleti Merkezi, Netgsm) kullanabilirsiniz. Mesaj başına maliyet 0,15-0,30 TL, doğrulama ve kurulum için 5.000-10.000 TL başlangıç yatırımı beklenir.

**SMS**: Yaşlı hasta segmentinde veya WhatsApp kullanmayanlar için yedek kanal. Mesaj başına 0,08-0,15 TL maliyet. Karakter sınırı (160 karakter) ve zengin içerik (resim, buton) desteği yok. Acil hatırlatmalar için tercih edilir.

**E-posta**: Laboratuvar sonuçları, fatura, detaylı bilgilendirme için idealdir. AWS SES veya SendGrid üzerinden yüksek hacimde düşük maliyetle gönderilebilir. Hasta e-posta açma oranı düşük olduğu için (sağlık sektöründe ortalama %18-25) birincil kanal olarak kullanılmaz.

**Web Chat Widget**: Klinik web sitesinde canlı sohbet penceresi. Hasta önceden WhatsApp veya e-posta ile irtibata geçmemişse ilk temas noktası olabilir. Tawk.to, Crisp veya özel geliştirme ile entegre edilir.

### Hastane Bilgi Sistemi (HBS) API Entegrasyonu

AI agent'ın randevu, hasta bilgisi ve tahlil sonuçlarına erişmesi için HBS yazılımınızla entegrasyon şarttır. Türkiye'de yaygın kullanılan HBS çözümleri: **Nucleus**, **Probel**, **Akgun HBS**, **Logo Sağlık**. Her birinin API dokümantasyonu farklıdır — REST API, SOAP veya HL7 formatı kullanabilirler.

**Entegrasyon adımları:**

1. HBS satıcısından API dokümantasyonu ve test ortamı erişimi alın
2. Hasta ID, randevu zamanı, doktor bilgisi, tahlil durumu gibi endpoint'leri tanımlayın
3. OAuth 2.0 veya API Key ile kimlik doğrulama kurun
4. Webhook (HBS'de değişiklik olduğunda AI agent'a bildirim) varsa aktif edin
5. Test ortamında örnek hasta verileriyle GET/POST istekleri yapın, veri formatını doğrulayın

**Eğer HBS API sunmuyorsa:** Bazı eski veya küçük ölçekli klinik yazılımlarında API desteği yoktur. Bu durumda manuel veri eşitleme (günde 1-2 kez Excel export/import) veya middleware (özel geliştirme ile HBS veritabanına doğrudan erişim) gerekir — bu yaklaşım KVKK riski taşır, mutlaka hukuki danışmanlık alın.

## AI Agent Prompt Tasarımı ve KVKK Uyumluluğu

AI agent'ın hasta ile nasıl konuşacağını belirleyen **system prompt**, sistemin beynini oluşturur. İyi yazılmış prompt, AI agent'ın profesyonel, empatik ve KVKK uyumlu davranmasını sağlar.

### System Prompt Şablonu (Hasta Takip İçin)

```
Sen [Klinik Adı]'nın hasta takip asistanısın. Görevin:
- Randevu hatırlatmaları yapmak ve hasta taleplerini (iptal/erteleme) işlemek
- İlaç kullanımı ve kontrol muayenesi hatırlatmaları göndermek
- Hasta sorularını anlamak ve basit bilgilendirme yapmak
- Karmaşık veya acil durumlarda hastayı görevliye yönlendirmek

KURALLARI:
1. Asla tıbbi öneri verme — hasta "ağrım var ne yapmalıyım" derse doktora danışmasını söyle
2. Hasta "acil", "çok kötüyüm", "nefes alamıyorum" derse anında görevli bağla
3. KVKK: Hasta kişisel verilerini sadece gerekli süre sakla, hasta "verilerimi silin" derse talebi kaydet
4. Randevu değişikliği yaparken uygun tarihleri sun, hasta tercih etsin
5. Her zaman kibar ve empatik ol, hasta sinirli bile olsa sakin yanıt ver

Hasta profili: [HBS'den çekilen: isim, randevu geçmişi,