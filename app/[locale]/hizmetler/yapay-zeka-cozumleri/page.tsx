import { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from 'next-intl/server';
import { ArrowRight, CheckCircle2, Bot, Brain, Zap, MessageSquare, Database, Cpu, FileText, Image, Code, Settings, AlertTriangle, Clock, TrendingUp, Users, Building2, ShoppingCart, Briefcase, HeartPulse, Lightbulb, Workflow } from "lucide-react";

export const metadata: Metadata = {
  title: "Yapay Zeka Çözümleri | AI Otomasyon & ChatGPT Entegrasyonu | Tonguç Karaçay",
  description: "İş süreçlerinizi AI ile dönüştürün. ChatGPT entegrasyonu, AI chatbot, içerik üretimi, süreç otomasyonu. KOBİ'ler için uygun maliyetli yapay zeka danışmanlığı.",
  keywords: ["yapay zeka danışmanlığı", "ChatGPT entegrasyonu", "AI otomasyon", "chatbot geliştirme", "AI içerik üretimi", "süreç otomasyonu", "generative AI"],
  openGraph: {
    title: "Yapay Zeka Çözümleri | AI Otomasyon & ChatGPT Entegrasyonu",
    description: "İş süreçlerinizi AI ile dönüştürün. KOBİ'ler için uygun maliyetli yapay zeka danışmanlığı.",
    type: "website",
  },
  alternates: {
    canonical: 'https://tonguckaracay.com/hizmetler/yapay-zeka-cozumleri',
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
    question: "AI çözümleri için minimum bütçe ne kadar?",
    answer: "Basit bir ChatGPT entegrasyonu veya chatbot için 10.000-25.000 TL arasında başlangıç maliyeti olabilir. Daha kapsamlı otomasyon projeleri için bütçe ihtiyaca göre değişir. İlk görüşmede ihtiyaç analizi yapılıp net fiyat sunulur."
  },
  {
    question: "AI projesi ne kadar sürede tamamlanır?",
    answer: "Basit entegrasyonlar 1-2 hafta, orta ölçekli projeler 4-6 hafta, kapsamlı dönüşüm projeleri 2-3 ay sürebilir. Her proje için net zaman çizelgesi başlangıçta belirlenir."
  },
  {
    question: "Veri güvenliği nasıl sağlanıyor?",
    answer: "Şirket verileriniz OpenAI veya diğer AI sağlayıcılarıyla model eğitimi için paylaşılmaz. API kullanımında veri şifreleme ve güvenli bağlantılar tercih edilir. KVKK uyumlu çözümler sunulur."
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
            <span className="text-white">Yapay Zeka Çözümleri</span>
          </nav>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="text-gradient">Yapay Zeka</span> Çözümleri
              </h1>
              <p className="text-lg md:text-xl text-primary-300 mb-8 leading-relaxed">
                İş süreçlerinizi AI ile dönüştürün. ChatGPT entegrasyonu, özel chatbot'lar, içerik otomasyonu ve veri analizi ile verimliliğinizi artırın. KOBİ'ler için uygun maliyetli, hızlı uygulanabilir yapay zeka çözümleri sunuyorum.
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
                  <span>No-Code Çözümler</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span>Hızlı ROI</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span>KOBİ Dostu</span>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="card p-8">
              <h2 className="text-xl font-semibold text-white mb-6">AI'ın iş dünyasındaki etkisi</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary-300">AI kullanan şirketlerde verimlilik artışı</span>
                    <span className="text-accent-500 font-bold">40%</span>
                  </div>
                  <div className="h-2 bg-surface-border rounded-full overflow-hidden">
                    <div className="h-full bg-accent-500 rounded-full" style={{ width: '80%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary-300">Müşteri hizmetleri maliyet tasarrufu</span>
                    <span className="text-accent-500 font-bold">30%</span>
                  </div>
                  <div className="h-2 bg-surface-border rounded-full overflow-hidden">
                    <div className="h-full bg-accent-500 rounded-full" style={{ width: '60%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary-300">AI içerik üretimi zaman tasarrufu</span>
                    <span className="text-accent-500 font-bold">70%</span>
                  </div>
                  <div className="h-2 bg-surface-border rounded-full overflow-hidden">
                    <div className="h-full bg-accent-500 rounded-full" style={{ width: '90%' }} />
                  </div>
                </div>
              </div>
              <p className="text-xs text-primary-500 mt-4">Kaynak: McKinsey Global AI Survey, IBM AI Adoption Report</p>
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
            "name": "Yapay Zeka Çözümleri",
            "description": "İş süreçlerinizi AI ile dönüştürün. ChatGPT entegrasyonu, AI chatbot, içerik üretimi, süreç otomasyonu.",
            "provider": {
              "@type": "Person",
              "name": "Tonguç Karaçay",
              "url": "https://tonguckaracay.com"
            },
            "areaServed": "TR",
            "serviceType": "AI Consulting"
          })
        }}
      />
    </main>
  );
}
