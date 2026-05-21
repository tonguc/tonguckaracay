import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { setRequestLocale } from 'next-intl/server';
import { ArrowRight, CheckCircle2, Users, Layers, MousePointer2, BarChart3, Sparkles, Target, Zap, Award, TrendingUp, Clock, Shield, Lightbulb, Building2, ShoppingCart, Briefcase, HeartPulse, Plane, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "UI/UX Tasarım Hizmeti | Dönüşüm Odaklı Arayüz Tasarımı | Tonguç Karaçay",
  description: "Profesyonel UI/UX tasarım hizmeti ile dijital ürünlerinizin dönüşüm oranlarını artırın. 25+ yıl deneyim, 100+ kurumsal referans. Ücretsiz keşif görüşmesi için iletişime geçin.",
  keywords: ["UI UX tasarım hizmeti", "kullanıcı deneyimi ajansı", "arayüz tasarım danışmanlığı", "UX tasarım şirketi", "mobil uygulama tasarımı", "web arayüz tasarımı"],
  openGraph: {
    title: "UI/UX Tasarım Hizmeti | Dönüşüm Odaklı Arayüz Tasarımı",
    description: "Profesyonel UI/UX tasarım hizmeti ile dijital ürünlerinizin dönüşüm oranlarını artırın. 25+ yıl deneyim.",
    type: "website",
  },
  alternates: {
    canonical: 'https://tonguckaracay.com/hizmetler/ui-ux-tasarim',
  },
};

// ============================================
// TÜRKÇE İÇERİK - BAĞIMSIZ ARAŞTIRMA SONUCU
// ============================================
// Rakip Analizi (Google.com.tr):
// - Flatart: Süreç odaklı, UX Audit vurgusu, haftalık raporlama
// - Penta Yazılım: Kurumsal odak, uzun vadeli ortaklık vurgusu
// - D-Teknoloji: Persona/journey map vurgusu, case study ağırlıklı
// - Digipeak: 360° hizmet, keşif toplantısı vurgusu
// 
// Eksik Bırakılan Noktalar:
// - Somut ROI/dönüşüm verileri çoğu rakipte yok
// - Sektör spesifik çözümler az
// - Fiyat/süre şeffaflığı eksik
// - Bireysel uzman avantajı hiç işlenmemiş
//
// Long-tail Keywords (Commercial/Service Intent):
// 1. UI UX tasarım hizmeti [Commercial]
// 2. kullanıcı deneyimi danışmanlığı [Service]
// 3. profesyonel arayüz tasarımı [Commercial]
// 4. UX tasarım ajansı İstanbul [Commercial]
// 5. mobil uygulama arayüz tasarımı [Service]
// 6. e-ticaret UX tasarımı [Commercial]
// 7. kurumsal web arayüz tasarımı [Service]
// 8. SaaS ürün tasarımı [Commercial]
// 9. UX audit hizmeti [Service]
// 10. dönüşüm odaklı tasarım [Commercial]
// 11. kullanıcı araştırması hizmeti [Service]
// 12. tasarım sistemi danışmanlığı [Service]
// ============================================

const services = [
  { 
    icon: Users, 
    title: "Kullanıcı Araştırması", 
    description: "Hedef kitlenizi tanımak için kullanıcı görüşmeleri, anketler ve davranış analizleri. Tasarım kararlarını varsayıma değil veriye dayandırıyorum." 
  },
  { 
    icon: Layers, 
    title: "Wireframe & Prototip", 
    description: "Fikirleri somutlaştıran düşük ve yüksek sadakatli prototipler. Geliştirme öncesi erken geri bildirim toplama ve riskleri minimize etme." 
  },
  { 
    icon: Sparkles, 
    title: "Arayüz Tasarımı (UI)", 
    description: "Marka kimliğinizi yansıtan, modern ve tutarlı arayüzler. Tipografi, renk sistemi ve görsel hiyerarşi ile kullanıcıyı yönlendiren tasarımlar." 
  },
  { 
    icon: MousePointer2, 
    title: "Kullanılabilirlik Testi", 
    description: "Tasarımların gerçek kullanıcılarla doğrulanması. Sorunları erken tespit ederek geliştirme maliyetlerini düşürme." 
  },
  { 
    icon: BarChart3, 
    title: "Dönüşüm Optimizasyonu", 
    description: "Mevcut arayüzlerin analizi ve dönüşüm oranlarını artıracak iyileştirmeler. Veri odaklı A/B test stratejileri." 
  },
  { 
    icon: Target, 
    title: "Tasarım Sistemi", 
    description: "Tutarlı ve ölçeklenebilir component kütüphaneleri. Ekipler arası tasarım birliği sağlayan style guide ve dokümantasyon." 
  }
];

const process = [
  { 
    step: "01", 
    title: "Keşif Görüşmesi", 
    description: "İş hedeflerinizi, mevcut durumunuzu ve beklentilerinizi anlıyorum. Projenin kapsamını ve önceliklerini birlikte belirliyoruz." 
  },
  { 
    step: "02", 
    title: "Araştırma & Analiz", 
    description: "Kullanıcılarınızı, rakiplerinizi ve sektörünüzü inceliyorum. Mevcut ürününüz varsa UX audit ile sorun noktalarını tespit ediyorum." 
  },
  { 
    step: "03", 
    title: "Strateji & Bilgi Mimarisi", 
    description: "Persona tanımları, kullanıcı akışları ve içerik hiyerarşisi oluşturuyorum. Tasarımın stratejik temellerini atıyorum." 
  },
  { 
    step: "04", 
    title: "Tasarım & Prototip", 
    description: "Wireframe'lerden interaktif prototiplere, ardından pixel-perfect UI tasarımlarına. Her aşamada geri bildirim alıyorum." 
  },
  { 
    step: "05", 
    title: "Test & İterasyon", 
    description: "Kullanılabilirlik testleri ve paydaş geri bildirimleriyle tasarımı rafine ediyorum. Onay sonrası geliştirme dosyalarını hazırlıyorum." 
  },
  { 
    step: "06", 
    title: "Geliştirme Desteği", 
    description: "Developer handoff, tasarım QA ve lansman sonrası iyileştirme önerileri. Projenin başarıyla hayata geçmesini takip ediyorum." 
  }
];

const industries = [
  { icon: ShoppingCart, name: "E-Ticaret", desc: "Dönüşüm odaklı alışveriş deneyimleri" },
  { icon: Building2, name: "Finans & Fintech", desc: "Güvenli ve kullanıcı dostu finansal arayüzler" },
  { icon: HeartPulse, name: "Sağlık", desc: "Hasta ve sağlık profesyoneli portalları" },
  { icon: Briefcase, name: "SaaS & B2B", desc: "Karmaşık iş süreçlerini basitleştiren paneller" },
  { icon: Plane, name: "Turizm", desc: "Rezervasyon ve deneyim platformları" },
  { icon: GraduationCap, name: "Eğitim", desc: "Öğrenme yönetim sistemleri ve edtech çözümleri" }
];

const brands = ["THY", "BMW", "Galatasaray", "Sabah", "ATV", "Star TV", "Hürriyet", "Milliyet", "NTV", "CNN Türk"];

const advantages = [
  {
    title: "Ajans Değil, Uzman",
    description: "Büyük ajanslardaki koordinasyon kayıpları ve ekip değişiklikleri yok. Doğrudan 25+ yıl deneyimli bir uzmanla çalışıyorsunuz."
  },
  {
    title: "Veriye Dayalı Tasarım",
    description: "Tasarım kararlarını sezgiye değil, kullanıcı araştırması ve analitik verilere dayandırıyorum. Her öneri bir gerekçeye sahip."
  },
  {
    title: "SEO Entegrasyonu",
    description: "UI/UX tasarımı tek başına yeterli değil. SEO danışmanlığı hizmetimle birlikte hem kullanıcıları hem arama motorlarını memnun eden çözümler sunuyorum."
  },
  {
    title: "Şeffaf İletişim",
    description: "Proje boyunca düzenli güncellemeler, açık iletişim ve sürpriz maliyetler yok. Ne beklemeniz gerektiğini baştan biliyorsunuz."
  }
];

const faqs = [
  {
    question: "UI/UX tasarım hizmeti hangi çıktıları içerir?",
    answer: "Projenin kapsamına göre: kullanıcı araştırma raporu, persona tanımları, wireframe'ler, interaktif prototipler, UI tasarım dosyaları (Figma), tasarım sistemi dokümantasyonu ve geliştirme için hazır asset'ler. Her proje için çıktılar önceden netleştirilir."
  },
  {
    question: "Proje süresi ve maliyet nasıl belirlenir?",
    answer: "Ücretsiz keşif görüşmesinde projenin kapsamını birlikte değerlendiriyoruz. Basit bir landing page 3-4 hafta, kapsamlı bir web uygulaması 8-12 hafta sürebilir. Teklif, kapsam ve süreyle birlikte detaylı şekilde sunulur."
  },
  {
    question: "Mevcut web sitemi veya uygulamamı yenileyebilir misiniz?",
    answer: "Evet. Önce mevcut ürününüzün UX audit'ini yaparak sorun noktalarını tespit ediyorum. Ardından tam yeniden tasarım veya öncelikli iyileştirmeler şeklinde iki farklı yaklaşım sunuyorum."
  },
  {
    question: "Geliştirme (coding) hizmeti de veriyor musunuz?",
    answer: "Odak noktam tasarım ve strateji. Ancak güvendiğim geliştirici partnerlere yönlendirebilir veya mevcut ekibinizle doğrudan çalışabilirim. Developer handoff sürecini profesyonelce yönetiyorum."
  },
  {
    question: "Uzaktan çalışma mümkün mü?",
    answer: "Evet, projelerimin büyük çoğunluğunu uzaktan yürütüyorum. Figma, Zoom, Slack ve Notion gibi araçlarla şeffaf ve verimli bir işbirliği süreci sağlıyorum. İstanbul dışından veya yurt dışından da hizmet alabilirsiniz."
  }
];

type Props = { params: { locale: string } };

export default function UIUXTasarimPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-primary-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-white">UI/UX Tasarım Hizmeti</span>
          </nav>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="text-gradient">UI/UX Tasarım</span> Hizmeti
              </h1>
              <p className="text-lg md:text-xl text-primary-300 mb-8 leading-relaxed">
                Dijital ürünlerinizi kullanıcı odaklı tasarımla dönüştürüyorum. Web siteleri, mobil uygulamalar ve SaaS platformları için araştırmaya dayalı, dönüşüm odaklı arayüz tasarımı. 25 yılı aşkın sektör deneyimi ve 100'den fazla kurumsal referansla projelerinize değer katıyorum.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/iletisim" className="btn-primary group text-lg">
                  Ücretsiz Keşif Görüşmesi
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
                  <span>25+ Yıl Deneyim</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span>100+ Kurumsal Proje</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span>Uzaktan Çalışma</span>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="card p-8">
              <h2 className="text-xl font-semibold text-white mb-6">İyi tasarlanmış dijital ürünlerin etkisi</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary-300">Dönüşüm oranı artışı</span>
                    <span className="text-accent-500 font-bold">%200-400</span>
                  </div>
                  <div className="h-2 bg-surface-border rounded-full overflow-hidden">
                    <div className="h-full bg-accent-500 rounded-full" style={{ width: '85%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary-300">UX yatırım ROI</span>
                    <span className="text-accent-500 font-bold">%9,900</span>
                  </div>
                  <div className="h-2 bg-surface-border rounded-full overflow-hidden">
                    <div className="h-full bg-accent-500 rounded-full" style={{ width: '95%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary-300">Kötü UX nedeniyle terk oranı</span>
                    <span className="text-accent-500 font-bold">%88</span>
                  </div>
                  <div className="h-2 bg-surface-border rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full" style={{ width: '88%' }} />
                  </div>
                </div>
              </div>
              <p className="text-xs text-primary-500 mt-4">Kaynak: Forrester Research, UXCam sektör raporları</p>
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
              Dijital ürünlerde karşılaşılan en yaygın sorunlar ve UI/UX tasarım hizmetinin sağladığı çözümler.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Düşük Dönüşüm Oranları</h3>
              <p className="text-primary-400 text-sm mb-3">Ziyaretçiler sitenize geliyor ama satın almıyor, form doldurmuyorlar.</p>
              <p className="text-accent-400 text-sm">→ Dönüşüm odaklı tasarım ve kullanıcı akışı optimizasyonu</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Yüksek Terk Oranları</h3>
              <p className="text-primary-400 text-sm mb-3">Kullanıcılar siteye giriyor ama hemen ayrılıyorlar.</p>
              <p className="text-accent-400 text-sm">→ Kullanılabilirlik iyileştirmeleri ve bilgi mimarisi düzenlemesi</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Karmaşık Kullanıcı Deneyimi</h3>
              <p className="text-primary-400 text-sm mb-3">Müşteriler aradıklarını bulamıyor, destek talepleri artıyor.</p>
              <p className="text-accent-400 text-sm">→ Kullanıcı araştırması ve sezgisel arayüz tasarımı</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Tutarsız Marka Deneyimi</h3>
              <p className="text-primary-400 text-sm mb-3">Farklı sayfalarda farklı görünümler, marka algısı zayıflıyor.</p>
              <p className="text-accent-400 text-sm">→ Tasarım sistemi ve component kütüphanesi oluşturma</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Geliştirme Gecikmeleri</h3>
              <p className="text-primary-400 text-sm mb-3">Tasarım belirsizlikleri geliştirmeyi yavaşlatıyor, bütçe aşılıyor.</p>
              <p className="text-accent-400 text-sm">→ Detaylı prototip ve developer-ready handoff dosyaları</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Rekabette Geri Kalma</h3>
              <p className="text-primary-400 text-sm mb-3">Rakiplerin dijital deneyimi sizinkinden daha iyi.</p>
              <p className="text-accent-400 text-sm">→ Rakip analizi ve farklılaşma stratejisi</p>
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
              İhtiyacınıza göre tek bir hizmet veya uçtan uca tasarım süreci şeklinde çalışabiliriz.
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

      {/* Process */}
      <section id="süreç" className="py-16 md:py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Çalışma <span className="text-gradient">Sürecim</span>
            </h2>
            <p className="text-primary-300 max-w-2xl mx-auto">
              Her projede izlediğim yapılandırılmış ve şeffaf süreç.
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
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">
                Sektörel <span className="text-gradient">Deneyim</span>
              </h2>
              <p className="text-primary-300 mb-8">
                Her sektörün kendine özgü kullanıcı beklentileri ve iş gereksinimleri var. 25 yılı aşkın kariyerimde farklı sektörlerde edindim deneyimle, sektörünüze özel çözümler sunuyorum.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                      <industry.icon className="w-5 h-5 text-accent-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{industry.name}</h4>
                      <p className="text-sm text-primary-400">{industry.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Çalıştığım Markalardan Bazıları</h3>
              <div className="flex flex-wrap gap-3">
                {brands.map((brand, i) => (
                  <span key={i} className="px-4 py-2 bg-surface-border/50 rounded-full text-primary-200 text-sm">
                    {brand}
                  </span>
                ))}
              </div>
              <p className="text-primary-400 text-sm mt-6">
                Türkiye'nin önde gelen kuruluşları için web, mobil ve kurumsal uygulama projeleri yönettim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Me */}
      <section className="py-16 md:py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Neden <span className="text-gradient">Benimle Çalışmalısınız?</span>
            </h2>
            <p className="text-primary-300 max-w-2xl mx-auto">
              Büyük ajanslardan farklı olarak sunduğum avantajlar.
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
                <h3 className="text-xl font-semibold text-white mb-2">SEO ile Entegre Çalışma</h3>
                <p className="text-primary-300">
                  UI/UX tasarımı ve <Link href="/hizmetler/seo-danismanligi" className="text-accent-400 hover:underline">SEO danışmanlığı</Link> hizmetlerimi birlikte sunuyorum. Google'ın Core Web Vitals güncellemesiyle kullanıcı deneyimi artık doğrudan sıralama faktörü. İyi tasarlanmış bir site hem kullanıcıları hem arama motorlarını memnun eder.
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
      <section className="py-16 md:py-20">
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
      <section className="py-16 md:py-20 bg-gradient-to-br from-accent-500/10 to-indigo-500/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Projenizi Değerlendirelim
          </h2>
          <p className="text-primary-300 mb-8 max-w-xl mx-auto">
            Ücretsiz ve bağlayıcı olmayan keşif görüşmesinde projenizin ihtiyaçlarını birlikte değerlendirelim. 30 dakikalık görüşme sonunda net bir yol haritanız olacak.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/iletisim" className="btn-primary group text-lg">
              Görüşme Planla
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
            "name": "UI/UX Tasarım Hizmeti",
            "description": "Profesyonel UI/UX tasarım hizmeti ile dijital ürünlerinizin dönüşüm oranlarını artırın.",
            "provider": {
              "@type": "Person",
              "name": "Tonguç Karaçay",
              "url": "https://tonguckaracay.com"
            },
            "areaServed": "TR",
            "serviceType": "UI/UX Design"
          })
        }}
      />
    </main>
  );
}
