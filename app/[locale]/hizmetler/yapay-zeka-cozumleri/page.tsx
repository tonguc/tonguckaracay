import { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from 'next-intl/server';
import { ArrowRight, CheckCircle2, Bot, Brain, Zap, MessageSquare, Database, Cpu, FileText, Image, Code, Settings, AlertTriangle, Clock, TrendingUp, Users, Building2, ShoppingCart, Briefcase, HeartPulse, Lightbulb, Workflow } from "lucide-react";

export const metadata: Metadata = {
  title: "KOBİ'ler İçin AI Otomasyon Danışmanlığı | Tonguç Karaçay",
  description: "KOBİ'ler için ihtiyaç analizi, ölçümlü pilot, CRM ve iş akışı entegrasyonu, ekip eğitimi ve bakım odaklı yapay zeka otomasyon danışmanlığı.",
  keywords: ["yapay zeka danışmanlığı", "ChatGPT entegrasyonu", "AI otomasyon", "chatbot geliştirme", "AI içerik üretimi", "süreç otomasyonu", "generative AI"],
  alternates: {
    canonical: "https://tonguckaracay.com/hizmetler/yapay-zeka-cozumleri",
    languages: {
      tr: "https://tonguckaracay.com/hizmetler/yapay-zeka-cozumleri",
      en: "https://tonguckaracay.com/en/services/ai-solutions",
      "x-default": "https://tonguckaracay.com/en/services/ai-solutions",
    },
  },
  openGraph: {
    title: "KOBİ'ler İçin AI Otomasyon Danışmanlığı",
    description: "İhtiyaç analizinden ölçümlü pilota, entegrasyondan ekip eğitimine kadar insan onaylı AI iş akışları.",
    type: "website",
    url: "https://tonguckaracay.com/hizmetler/yapay-zeka-cozumleri",
  },
};

// ============================================
// TÜRKÇE İÇERİK - BAĞIMSIZ ARAŞTIRMA SONUCU
// ============================================
// Rakip Analizi (Google.com.tr):
// - EY Türkiye: Kurumsal AI dönüşümü, robotik, otomasyon (büyük şirket odaklı)
// - ROIBLE: Generative AI, no-code/low-code, ChatGPT danışmanlığı, SEO kökenli
// - CottGroup: LLM eğitimi, makine öğrenimi, AI ajanları, veri yönetimi
// - Skalla: SAP AI çözümleri, kurumsal odak, üretken AI eğitimi
// - SANShine: RPA, IoT, yazılım geliştirme, kurumsal çözümler
// - D2C Soft: Yazılım geliştirme, AI/ML uzmanlığı, bulut çözümleri
//
// Eksik Bırakılan Noktalar:
// - KOBİ odaklı, uygun maliyetli AI çözümleri çok az
// - No-code/low-code yaklaşım sınırlı
// - Pratik, hızlı uygulanabilir çözümler yetersiz
// - UX/UI + AI entegrasyonu yok
// - Bireysel danışman modeli nadir
//
// Long-tail Keywords (Commercial/Service Intent):
// 1. yapay zeka danışmanlığı hizmeti [Commercial]
// 2. ChatGPT entegrasyonu [Commercial]
// 3. AI chatbot geliştirme [Service]
// 4. iş süreçleri otomasyonu [Commercial]
// 5. generative AI çözümleri [Service]
// 6. yapay zeka içerik üretimi [Commercial]
// 7. custom GPT oluşturma [Service]
// 8. AI workflow otomasyonu [Commercial]
// 9. kurumsal AI danışmanlığı [Service]
// 10. no-code AI çözümleri [Commercial]
// 11. AI veri analizi [Service]
// 12. LLM entegrasyonu [Commercial]
// ============================================

const services = [
  { 
    icon: Bot, 
    title: "AI Chatbot & Asistan", 
    description: "7/24 müşteri hizmeti sunan, şirket verilerinizle eğitilmiş özel chatbot çözümleri. Web sitenize veya uygulamanıza entegre edilebilir." 
  },
  { 
    icon: FileText, 
    title: "AI İçerik Üretimi", 
    description: "Blog yazıları, ürün açıklamaları, sosyal medya içerikleri için yapay zeka destekli içerik üretimi ve optimizasyonu." 
  },
  { 
    icon: Workflow, 
    title: "Süreç Otomasyonu", 
    description: "Tekrarlayan iş süreçlerini AI ile otomatize edin. E-posta yanıtlama, belge işleme, raporlama otomasyonu." 
  },
  { 
    icon: Code, 
    title: "Custom GPT & API Entegrasyonu", 
    description: "Şirketinize özel Custom GPT oluşturma ve mevcut sistemlerinize ChatGPT API entegrasyonu." 
  },
  { 
    icon: Database, 
    title: "AI Veri Analizi", 
    description: "Büyük veri setlerinden anlamlı içgörüler çıkarma. Müşteri davranış analizi, tahminleme modelleri." 
  },
  { 
    icon: Image, 
    title: "Görsel AI Çözümleri", 
    description: "AI ile görsel üretimi (DALL-E, Midjourney), görsel optimizasyonu ve otomatik görsel işleme." 
  }
];

const process = [
  { 
    step: "01", 
    title: "İhtiyaç Analizi", 
    description: "Mevcut iş süreçlerinizi analiz ediyor, AI ile çözülebilecek sorunları ve fırsatları belirliyorum." 
  },
  { 
    step: "02", 
    title: "Çözüm Tasarımı", 
    description: "İhtiyaçlarınıza uygun AI araçları ve stratejisi belirleniyor. ROI tahmini ve yol haritası oluşturuluyor." 
  },
  { 
    step: "03", 
    title: "Prototip & Test", 
    description: "Seçilen çözümün hızlı prototipi oluşturuluyor ve gerçek verilerle test ediliyor." 
  },
  { 
    step: "04", 
    title: "Entegrasyon", 
    description: "AI çözümü mevcut sistemlerinize (CRM, ERP, web sitesi vb.) entegre ediliyor." 
  },
  { 
    step: "05", 
    title: "Eğitim & Devir", 
    description: "Ekibinize AI araçlarının kullanımı konusunda eğitim veriliyor, dokümantasyon hazırlanıyor." 
  },
  { 
    step: "06", 
    title: "Destek & Optimizasyon", 
    description: "Canlı kullanım sonrası sürekli optimizasyon ve teknik destek sağlanıyor." 
  }
];

const deliverables = [
  { phase: "Keşif", output: "Süreç haritası, veri sınıflandırması ve risk sicili", acceptance: "Pilot süreci, başlangıç metriği, insan onayı ve kapsam dışı işler yazılıdır." },
  { phase: "Pilot", output: "Sınırlandırılmış çalışan prototip ve test senaryoları", acceptance: "Kalite, süre, hata ve maliyet sonuçları başlangıç değeriyle karşılaştırılır." },
  { phase: "Entegrasyon", output: "Onaylı sistem bağlantıları, erişim rolleri ve hata akışı", acceptance: "Normal akış, insan devri ve geri alma senaryoları kullanıcı kabulünden geçer." },
  { phase: "Devir ve bakım", output: "Kullanım dokümanı, ekip eğitimi ve izleme planı", acceptance: "Sorumlular, maliyet limiti, saklama/silme ve değişiklik süreci bellidir." },
];

const useCases = [
  { icon: MessageSquare, name: "Müşteri Hizmetleri", desc: "AI chatbot ile 7/24 destek" },
  { icon: FileText, name: "İçerik Üretimi", desc: "Blog, sosyal medya, ürün açıklamaları" },
  { icon: TrendingUp, name: "Satış & Pazarlama", desc: "Lead skorlama, kişiselleştirilmiş e-posta" },
  { icon: Database, name: "Veri Analizi", desc: "Raporlama, tahminleme, içgörü" },
  { icon: Settings, name: "Operasyonlar", desc: "Belge işleme, e-posta otomasyonu" },
  { icon: Users, name: "İK Süreçleri", desc: "CV tarama, onboarding otomasyonu" }
];

const industries = [
  { icon: ShoppingCart, name: "E-Ticaret", desc: "Ürün açıklamaları, chatbot, öneri sistemi" },
  { icon: Building2, name: "Kurumsal", desc: "Dokümantasyon, raporlama, iç iletişim" },
  { icon: Briefcase, name: "B2B & SaaS", desc: "Lead generation, müşteri segmentasyonu" },
  { icon: HeartPulse, name: "Sağlık", desc: "Randevu asistanı, hasta bilgilendirme" },
  { icon: Users, name: "Eğitim", desc: "Öğrenci destek botu, içerik oluşturma" },
  { icon: Lightbulb, name: "Ajanslar", desc: "İçerik üretimi, brief analizi, raporlama" }
];

const tools = ["ChatGPT / GPT-4", "Claude", "DALL-E / Midjourney", "Make / Zapier", "n8n", "LangChain", "OpenAI API", "Custom GPTs"];

const advantages = [
  {
    title: "KOBİ Odaklı Yaklaşım",
    description: "Kurumsal bütçeler gerektiren çözümler yerine, KOBİ'lerin bütçesine uygun, hızlı ROI sağlayan pratik AI uygulamaları."
  },
  {
    title: "No-Code / Low-Code Çözümler",
    description: "Yazılım geliştirme maliyeti olmadan, hazır araçlarla hızlı sonuç. Make, Zapier, n8n gibi otomasyon platformları ile entegrasyon."
  },
  {
    title: "UX/UI + AI Entegrasyonu",
    description: "AI çözümlerini kullanıcı deneyimi perspektifinden tasarlıyorum. Karmaşık teknoloji, basit arayüz prensibiyle."
  },
  {
    title: "Dijital Pazarlama Bilgisi",
    description: "SEO, içerik pazarlaması ve dijital reklam deneyimimi AI araçlarıyla birleştirerek pazarlama odaklı çözümler sunuyorum."
  }
];

const faqs = [
  {
    question: "AI otomasyon projesinin bütçesi nasıl belirlenir?",
    answer: "Bütçe; otomasyona alınacak süreç sayısı, işlem hacmi, veri hassasiyeti, entegrasyonlar, insan onayı ve bakım ihtiyacına göre belirlenir. Keşif görüşmesinden sonra önce sınırları ve başarı metriği belli küçük bir pilot kapsamı çıkarılır; fiyat bu kapsama göre şeffaf biçimde sunulur."
  },
  {
    question: "AI projesi ne kadar sürede tamamlanır?",
    answer: "Dar kapsamlı bir pilot çoğu zaman birkaç hafta içinde tasarlanıp test edilebilir; üretim süresi veri hazırlığına, entegrasyonlara, güvenlik kontrollerine ve kullanıcı kabulüne bağlıdır. Takvim, keşif sonunda aşama ve kabul koşullarıyla birlikte verilir."
  },
  {
    question: "Veri güvenliği nasıl sağlanıyor?",
    answer: "Önce işlenecek veri sınıflandırılır ve gereksiz kişisel veri akışın dışında bırakılır. Sağlayıcı, hesap ve saklama ayarları proje özelinde doğrulanır; erişim, şifreleme, kayıt, silme ve insan onayı kontrolleri tasarlanır. KVKK uyumu tek bir araç özelliğiyle garanti edilemez; veri sorumlusu yükümlülükleri ve gerektiğinde hukuk uzmanı incelemesi ayrıca yürütülmelidir."
  },
  {
    question: "Teknik ekibim olmadan AI kullanabilir miyim?",
    answer: "Evet, no-code/low-code çözümlerle teknik bilgi gerektirmeden AI araçlarını kullanabilirsiniz. Eğitim ve dokümantasyon sağlıyorum, ekibiniz bağımsız olarak devam edebilir."
  },
  {
    question: "Hangi AI araçlarını kullanıyorsunuz?",
    answer: "Projeye göre ChatGPT/GPT-4, Claude, DALL-E, Midjourney gibi üretken AI araçları; Make, Zapier, n8n gibi otomasyon platformları; LangChain gibi geliştirme framework'leri kullanıyorum."
  }
];

type Props = { params: { locale: string } };

export default function YapayZekaCozumleriPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-primary-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-white">AI Otomasyon Danışmanlığı</span>
          </nav>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                KOBİ'ler için <span className="text-gradient">AI Otomasyon Danışmanlığı</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-300 mb-8 leading-relaxed">
                Tekrarlayan satış, müşteri hizmetleri, içerik ve operasyon süreçlerinizi analiz ediyor; küçük bir pilotla başlayıp CRM, e-posta, WhatsApp, takvim veya raporlama sistemlerine insan onaylı AI iş akışları kuruyorum. Hizmet; ihtiyaç analizi, risk ve veri sınıflandırması, prototip, entegrasyon, ekip eğitimi ve ölçüm planını kapsar.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/iletisim" className="btn-primary group text-lg">
                  Ücretsiz AI Danışmanlığı
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#süreç" className="btn-secondary text-lg">
                  Çalışma Sürecim
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 text-sm text-primary-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span>İnsan Onaylı Akışlar</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span>Ölçümlü Pilot</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span>KOBİ Dostu</span>
                </div>
              </div>
            </div>

            {/* Pilot readiness card */}
            <div className="card p-8">
              <h2 className="text-xl font-semibold text-white mb-6">Bir süreç otomasyona uygun mu?</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-white mb-2">Tekrarlı ve ölçülebilir</h3>
                  <p className="text-primary-300">Girdi, beklenen çıktı, işlem hacmi ve mevcut süre biliniyorsa pilot için başlangıç metriği kurulabilir.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">İnsan onayı tanımlı</h3>
                  <p className="text-primary-300">Finansal, hukuki, sağlık veya itibar riski taşıyan kararlar otomatik bırakılmaz; devir ve onay noktaları baştan belirlenir.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Veri sınırı kurulabilir</h3>
                  <p className="text-primary-300">Yalnız gerekli veri işlenir; erişim, saklama, silme, maliyet limiti ve hata durumunda geri alma yöntemi belgelenir.</p>
                </div>
              </div>
              <p className="text-xs text-primary-500 mt-6">Bu üç koşul net değilse önce otomasyon değil, süreç ve veri hazırlığı yapılır.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6">
              Bu Hizmet Hangi <span className="text-gradient">Sorunları Çözer?</span>
            </h2>
            <p className="text-primary-300 text-lg mb-12">
              AI, doğru uygulandığında iş süreçlerinizi kökten değiştirebilir.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Zaman Kaybı</h3>
              <p className="text-primary-400 text-sm mb-3">Tekrarlayan görevlere çok fazla zaman harcıyorsunuz.</p>
              <p className="text-accent-400 text-sm">→ AI otomasyonu ile tekrarlayan işleri saniyeler içinde tamamlayın</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Yetersiz Müşteri Desteği</h3>
              <p className="text-primary-400 text-sm mb-3">Müşteri sorularına hızlı yanıt veremiyorsunuz, 7/24 destek maliyetli.</p>
              <p className="text-accent-400 text-sm">→ AI chatbot ile 7/24 anında müşteri desteği sağlayın</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">İçerik Üretim Zorluğu</h3>
              <p className="text-primary-400 text-sm mb-3">Blog, sosyal medya, ürün açıklaması yazmak çok zaman alıyor.</p>
              <p className="text-accent-400 text-sm">→ AI destekli içerik üretimi ile hızlı ve kaliteli içerik</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Veri Karmaşası</h3>
              <p className="text-primary-400 text-sm mb-3">Verileriniz var ama anlamlı içgörüler çıkaramıyorsunuz.</p>
              <p className="text-accent-400 text-sm">→ AI ile veri analizi ve otomatik raporlama</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Rekabet Baskısı</h3>
              <p className="text-primary-400 text-sm mb-3">Rakipleriniz AI kullanıyor, siz geride kalıyorsunuz.</p>
              <p className="text-accent-400 text-sm">→ Hızlı ve uygun maliyetli AI adaptasyonu ile rekabete katılın</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Teknik Bilgi Eksikliği</h3>
              <p className="text-primary-400 text-sm mb-3">AI kullanmak istiyorsunuz ama nereden başlayacağınızı bilmiyorsunuz.</p>
              <p className="text-accent-400 text-sm">→ Adım adım rehberlik ve eğitim ile AI yolculuğunuza başlayın</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Hizmet <span className="text-gradient">Kapsamı</span>
            </h2>
            <p className="text-primary-300 max-w-2xl mx-auto">
              İşletmenizin ihtiyaçlarına göre özelleştirilebilir AI çözümleri.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="card p-6 hover:border-accent-500/30 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-accent-500/20 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-accent-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-primary-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 md:py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">
                AI <span className="text-gradient">Kullanım Alanları</span>
              </h2>
              <p className="text-primary-300 mb-8">
                AI çözümleri işletmenizin her alanında değer yaratabilir. En yaygın kullanım alanları:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {useCases.map((useCase, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="w-5 h-5 text-accent-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{useCase.name}</h4>
                      <p className="text-sm text-primary-400">{useCase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Kullandığım AI Araçları</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, i) => (
                  <span key={i} className="px-4 py-2 bg-surface-border/50 rounded-full text-primary-200 text-sm">
                    {tool}
                  </span>
                ))}
              </div>
              <p className="text-primary-400 text-sm mt-6">
                Projenizin ihtiyacına göre en uygun AI araçları ve platformları seçiliyor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 md:py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="max-w-3xl mb-10">
            <h2 className="section-title mb-4">Danışmanlık kapsamında <span className="text-gradient">ne teslim edilir?</span></h2>
            <p className="text-primary-300 text-lg">Her aşama yalnız faaliyet listesiyle değil, müşteri tarafından doğrulanabilir bir çıktı ve kabul koşuluyla kapanır.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-surface-border">
            <table className="w-full min-w-[760px] text-left">
              <thead className="bg-surface-card">
                <tr>
                  <th className="p-4 text-white font-semibold">Aşama</th>
                  <th className="p-4 text-white font-semibold">Teslim edilen çıktı</th>
                  <th className="p-4 text-white font-semibold">Kabul kanıtı</th>
                </tr>
              </thead>
              <tbody>
                {deliverables.map((item) => (
                  <tr key={item.phase} className="border-t border-surface-border align-top">
                    <th scope="row" className="p-4 text-accent-400 font-medium">{item.phase}</th>
                    <td className="p-4 text-primary-200">{item.output}</td>
                    <td className="p-4 text-primary-300">{item.acceptance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="süreç" className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Çalışma <span className="text-gradient">Sürecim</span>
            </h2>
            <p className="text-primary-300 max-w-2xl mx-auto">
              AI projeleri için izlediğim yapılandırılmış ve şeffaf süreç.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, i) => (
              <div key={i} className="card p-6 relative group hover:border-accent-500/30 transition-colors">
                <div className="absolute top-4 right-4 text-5xl font-bold text-accent-500/10 group-hover:text-accent-500/20 transition-colors">{step.step}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-primary-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Sektörel <span className="text-gradient">Uygulamalar</span>
            </h2>
            <p className="text-primary-300 max-w-2xl mx-auto">
              Her sektörün AI ihtiyaçları farklıdır. Sektörünüze özel çözümler sunuyorum.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <div key={i} className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                    <industry.icon className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{industry.name}</h3>
                    <p className="text-primary-400 text-sm">{industry.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Me */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Neden <span className="text-gradient">Benimle Çalışmalısınız?</span>
            </h2>
            <p className="text-primary-300 max-w-2xl mx-auto">
              Kurumsal AI danışmanlık firmalarından farklı olarak sunduğum avantajlar.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((adv, i) => (
              <div key={i} className="card p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{adv.title}</h3>
                <p className="text-primary-300">{adv.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 card p-8 border-accent-500/30">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">Dijital Pazarlama ile AI Entegrasyonu</h3>
                <p className="text-primary-300">
                  <Link href="/hizmetler/seo-danismanligi" className="text-accent-400 hover:underline">SEO</Link> ve <Link href="/hizmetler/online-reklamcilik" className="text-accent-400 hover:underline">dijital reklam</Link> uzmanlığımı AI araçlarıyla birleştiriyorum. AI destekli içerik üretimi, otomatik raporlama ve pazarlama otomasyonu ile tam kapsamlı dijital çözümler sunuyorum.
                </p>
              </div>
              <Link href="/hizmetler/seo-danismanligi" className="btn-secondary flex-shrink-0">
                SEO Hizmeti
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING ALTERNATIVE */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto card p-6 md:p-8">
            <h2 className="text-2xl font-display font-bold text-white mb-3">
              Danışmanlık mı, AI eğitimi mi?
            </h2>
            <p className="text-primary-300 leading-relaxed mb-5">
              Süreç analizi, pilot, entegrasyon ve bakımı birlikte yürütmek
              istiyorsanız bu danışmanlık hizmeti uygundur. Ekibiniz sistemi
              kendi kuracak ve öncelikle uygulamalı yetkinlik kazanacaksa AI
              eğitimi daha doğru başlangıçtır.
            </p>
            <Link href="/ai-egitimi" className="text-accent-400 font-semibold hover:underline">
              Bireysel ve kurumsal AI eğitimini inceleyin
              <ArrowRight className="inline-block ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Sıkça Sorulan <span className="text-gradient">Sorular</span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="card p-6 group">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <span className="text-accent-500 group-open:rotate-180 transition-transform flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-primary-300 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-accent-500/10 to-purple-500/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            AI ile İşinizi Dönüştürmeye Başlayın
          </h2>
          <p className="text-primary-300 mb-8 max-w-xl mx-auto">
            Ücretsiz danışmanlık görüşmesiyle AI'ın işletmenize nasıl değer katabileceğini keşfedin.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/iletisim" className="btn-primary group text-lg">
              Ücretsiz AI Danışmanlığı
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="mailto:info@tonguckaracay.com" className="btn-secondary text-lg">
              E-posta Gönder
            </a>
          </div>
        </div>
      </section>

      {/* Schema.org FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      {/* Schema.org Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "url": "https://tonguckaracay.com/hizmetler/yapay-zeka-cozumleri",
            "name": "KOBİ'ler İçin AI Otomasyon Danışmanlığı",
            "description": "KOBİ'ler için ihtiyaç analizi, ölçümlü pilot, iş akışı entegrasyonu, ekip eğitimi ve bakım odaklı yapay zeka otomasyon danışmanlığı.",
            "provider": {
              "@type": "Person",
              "name": "Tonguç Karaçay",
              "url": "https://tonguckaracay.com"
            },
            "areaServed": "TR",
            "serviceType": "AI Otomasyon Danışmanlığı"
          })
        }}
      />
    </main>
  );
}
