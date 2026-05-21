import { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from 'next-intl/server';
import { ArrowRight, CheckCircle2, Target, TrendingUp, DollarSign, Users, BarChart3, RefreshCw, Search, Play, ShoppingCart, Smartphone, Clock, AlertTriangle, Eye, Zap, Building2, Briefcase, HeartPulse, Scale, Utensils, MousePointer } from "lucide-react";

export const metadata: Metadata = {
  title: "Online Reklamcılık Hizmeti | Google Ads & Meta Ads Yönetimi | Tonguç Karaçay",
  description: "Profesyonel Google Ads ve Meta Ads yönetimi ile reklam bütçenizden maksimum verim alın. ROAS odaklı kampanya yönetimi, A/B testi, remarketing. 25+ yıl deneyim.",
  keywords: ["Google Ads yönetimi", "Meta Ads", "dijital reklam", "PPC", "performans pazarlama", "remarketing", "ROAS optimizasyonu", "reklam danışmanlığı"],
  openGraph: {
    title: "Online Reklamcılık Hizmeti | Google Ads & Meta Ads Yönetimi",
    description: "Profesyonel Google Ads ve Meta Ads yönetimi ile reklam bütçenizden maksimum verim alın. 25+ yıl deneyim.",
    type: "website",
  },
  alternates: {
    canonical: 'https://tonguckaracay.com/hizmetler/online-reklamcilik',
  },
};

// ============================================
// TÜRKÇE İÇERİK - BAĞIMSIZ ARAŞTIRMA SONUCU
// ============================================
// Rakip Analizi (Google.com.tr):
// - Longway Media: Google Partner, dönüşüm odaklı, SEO entegrasyonu
// - Zeymedya: ROAS/CPA optimizasyonu, negatif anahtar kelime yönetimi
// - Great Ads: Google resmi iş ortağı, e-ticaret/B2B/SaaS odak
// - 51.com.tr: 21 kişilik ekip, garantili yönetim vaadi
// - Modd Group: Kreatif + performans birleşimi, data odaklı
//
// Eksik Bırakılan Noktalar:
// - Bireysel uzman avantajı neredeyse hiç yok
// - SEO + PPC entegrasyonu az vurgulanıyor
// - Şeffaf maliyet yapısı eksik
// - AI destekli optimizasyon yeni trend
// - Landing page optimizasyonu ayrı tutulmuş
//
// Long-tail Keywords (Commercial/Service Intent):
// 1. Google Ads yönetimi hizmeti [Commercial]
// 2. dijital reklam ajansı [Commercial]
// 3. Google reklam danışmanlığı [Service]
// 4. Meta Ads yönetimi [Commercial]
// 5. performans pazarlama hizmeti [Service]
// 6. PPC reklam yönetimi [Commercial]
// 7. remarketing kampanyası [Service]
// 8. e-ticaret reklam yönetimi [Commercial]
// 9. YouTube reklam hizmeti [Service]
// 10. dönüşüm optimizasyonu [Commercial]
// 11. reklam bütçesi optimizasyonu [Service]
// 12. ROAS optimizasyonu [Commercial]
// ============================================

const services = [
  { 
    icon: Search, 
    title: "Google Arama Ağı Reklamları", 
    description: "Potansiyel müşterileriniz tam aradıkları anda karşılarına çıkın. Anahtar kelime stratejisi, reklam metni optimizasyonu ve teklif yönetimi." 
  },
  { 
    icon: ShoppingCart, 
    title: "Google Shopping & Performance Max", 
    description: "E-ticaret siteleri için ürün feed optimizasyonu, Shopping kampanyaları ve AI destekli Performance Max yönetimi." 
  },
  { 
    icon: Users, 
    title: "Meta Ads (Facebook & Instagram)", 
    description: "Detaylı hedef kitle segmentasyonu, görsel/video reklamlar ve dönüşüm odaklı kampanyalar. Retargeting dahil." 
  },
  { 
    icon: Play, 
    title: "YouTube & Video Reklamlar", 
    description: "YouTube pre-roll, in-stream ve discovery reklamları. Video içerik stratejisi ve görüntüleme optimizasyonu." 
  },
  { 
    icon: RefreshCw, 
    title: "Remarketing & Retargeting", 
    description: "Sitenizi ziyaret edenlere tekrar ulaşın. Dinamik remarketing, kitle listeleri ve cross-platform retargeting." 
  },
  { 
    icon: BarChart3, 
    title: "Dönüşüm Takibi & Raporlama", 
    description: "Google Analytics 4, conversion tracking kurulumu. Haftalık/aylık performans raporları ve ROAS analizi." 
  }
];

const process = [
  { 
    step: "01", 
    title: "Hedef & Bütçe Analizi", 
    description: "İş hedeflerinizi, hedef kitlenizi ve reklam bütçenizi analiz ediyorum. Gerçekçi KPI'lar belirliyoruz." 
  },
  { 
    step: "02", 
    title: "Hesap Yapısı & Strateji", 
    description: "Kampanya yapısı, anahtar kelime araştırması, hedef kitle segmentasyonu ve teklif stratejisi belirleme." 
  },
  { 
    step: "03", 
    title: "Reklam Oluşturma", 
    description: "Dönüşüm odaklı reklam metinleri, görseller ve landing page önerileri. A/B test senaryoları hazırlama." 
  },
  { 
    step: "04", 
    title: "Kampanya Başlatma", 
    description: "Tracking kurulumu, kampanyaların aktifleştirilmesi ve ilk hafta yoğun izleme dönemi." 
  },
  { 
    step: "05", 
    title: "Optimizasyon & Test", 
    description: "Sürekli A/B testi, negatif anahtar kelime yönetimi, teklif optimizasyonu ve kitle refinement." 
  },
  { 
    step: "06", 
    title: "Raporlama & Ölçekleme", 
    description: "Detaylı performans raporları, insight paylaşımı ve başarılı kampanyaların ölçeklenmesi." 
  }
];

const industries = [
  { icon: ShoppingCart, name: "E-Ticaret", desc: "Shopping, PMAX, dinamik remarketing" },
  { icon: Building2, name: "B2B & Kurumsal", desc: "LinkedIn Ads, lead generation" },
  { icon: Briefcase, name: "SaaS & Teknoloji", desc: "Free trial, demo kampanyaları" },
  { icon: HeartPulse, name: "Sağlık", desc: "Yerel hedefleme, randevu kampanyaları" },
  { icon: Scale, name: "Hukuk", desc: "Arama ağı, yerel SEO entegrasyonu" },
  { icon: Utensils, name: "Restoran & Otel", desc: "Yerel kampanyalar, rezervasyon odaklı" }
];

const brands = ["THY", "BMW", "Galatasaray", "Sabah", "ATV", "Star TV", "Hürriyet", "Milliyet", "NTV", "CNN Türk"];

const advantages = [
  {
    title: "Şeffaf Raporlama",
    description: "Reklam harcamalarınızı, tıklama maliyetlerinizi ve dönüşümlerinizi gerçek zamanlı takip edebilirsiniz. Gizli komisyon veya ek ücret yok."
  },
  {
    title: "Ajans Değil, Uzman",
    description: "Hesabınız junior çalışanlara devredilmez. 25+ yıl deneyimli tek bir uzmanla doğrudan çalışırsınız. Daha hızlı karar, daha az koordinasyon."
  },
  {
    title: "SEO & PPC Entegrasyonu",
    description: "Reklam ve organik stratejileri birlikte yönetiyorum. Reklam verileriyle SEO'yu, SEO insight'larıyla reklamları güçlendiriyorum."
  },
  {
    title: "Landing Page Odağı",
    description: "UI/UX uzmanlığımla reklam landing page'lerinizi de optimize ediyorum. Trafik almak yetmez, dönüşüm de şart."
  }
];

const faqs = [
  {
    question: "Google Ads için minimum ne kadar bütçe gerekir?",
    answer: "Minimum bütçe sektöre ve rekabet düzeyine göre değişir. Genel olarak anlamlı veri toplamak için aylık minimum 3.000-5.000 TL reklam bütçesi öneriyorum. Daha düşük bütçelerle başlanabilir ancak optimizasyon için yeterli veri toplanması zaman alır."
  },
  {
    question: "Reklam sonuçları ne kadar sürede görülür?",
    answer: "Google Ads'te ilk sonuçlar birkaç gün içinde görülür. Ancak kampanyaların optimize edilmesi ve gerçek performansın anlaşılması için en az 2-4 hafta gerekir. İlk 3 ay öğrenme ve optimizasyon dönemidir."
  },
  {
    question: "Google Ads mı Meta Ads mi tercih etmeliyim?",
    answer: "Hedeflerinize bağlı. Google Ads aktif arama yapan kullanıcılara ulaşır (yüksek niyet). Meta Ads ise geniş kitlelere ulaşıp farkındalık yaratır. İdeal strateji genellikle ikisinin kombinasyonudur."
  },
  {
    question: "ROAS ne anlama gelir, hedef ne olmalı?",
    answer: "ROAS (Return on Ad Spend) reklam harcamasının getirisidir. 1 TL harcama için 4 TL satış = 4x ROAS. Hedef sektöre göre değişir; e-ticarette genellikle 3-5x ROAS iyi kabul edilir."
  },
  {
    question: "Yönetim ücreti nasıl hesaplanır?",
    answer: "Yönetim ücreti genellikle reklam bütçesinin %10-20'si veya sabit aylık ücret şeklinde olabilir. Bütçe ve kapsama göre size özel teklif sunuyorum. İlk görüşmede detaylı bilgi alabilirsiniz."
  }
];

type Props = { params: { locale: string } };

export default function OnlineReklamcilikPage({ params: { locale } }: Props) {
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
            <span className="text-white">Online Reklamcılık</span>
          </nav>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="text-gradient">Online Reklamcılık</span> Hizmeti
              </h1>
              <p className="text-lg md:text-xl text-primary-300 mb-8 leading-relaxed">
                Google Ads ve Meta Ads ile hedef kitlenize anında ulaşın. ROAS odaklı kampanya yönetimi, sürekli optimizasyon ve şeffaf raporlama ile reklam bütçenizden maksimum verim alın. 25 yılı aşkın dijital pazarlama deneyimiyle, veriye dayalı stratejiler sunuyorum.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/iletisim" className="btn-primary group text-lg">
                  Ücretsiz Reklam Analizi
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
                  <span>ROAS Odaklı</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span>Şeffaf Raporlama</span>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="card p-8">
              <h2 className="text-xl font-semibold text-white mb-6">Dijital reklamcılığın gücü</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary-300">Google günlük arama sayısı</span>
                    <span className="text-accent-500 font-bold">8.5 Milyar</span>
                  </div>
                  <div className="h-2 bg-surface-border rounded-full overflow-hidden">
                    <div className="h-full bg-accent-500 rounded-full" style={{ width: '90%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary-300">Ortalama Google Ads ROI</span>
                    <span className="text-accent-500 font-bold">200%</span>
                  </div>
                  <div className="h-2 bg-surface-border rounded-full overflow-hidden">
                    <div className="h-full bg-accent-500 rounded-full" style={{ width: '70%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary-300">Arama reklamları tıklama oranı</span>
                    <span className="text-accent-500 font-bold">%3-5</span>
                  </div>
                  <div className="h-2 bg-surface-border rounded-full overflow-hidden">
                    <div className="h-full bg-accent-500 rounded-full" style={{ width: '50%' }} />
                  </div>
                </div>
              </div>
              <p className="text-xs text-primary-500 mt-4">Kaynak: Google Economic Impact Report, WordStream Industry Benchmarks</p>
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
              Reklam bütçenizi boşa harcamamak için profesyonel yönetim şart.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Bütçe İsrafı</h3>
              <p className="text-primary-400 text-sm mb-3">Reklam harcıyorsunuz ama dönüşüm gelmiyor, para boşa gidiyor.</p>
              <p className="text-accent-400 text-sm">→ Dönüşüm odaklı kampanya yapısı ve sürekli optimizasyon</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Yanlış Hedefleme</h3>
              <p className="text-primary-400 text-sm mb-3">Reklamlarınız doğru kitleye ulaşmıyor, alakasız tıklamalar alıyorsunuz.</p>
              <p className="text-accent-400 text-sm">→ Detaylı hedef kitle analizi ve negatif anahtar kelime yönetimi</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Rakipler Önde</h3>
              <p className="text-primary-400 text-sm mb-3">Rakipleriniz sürekli üst sıralarda, siz görünmüyorsunuz.</p>
              <p className="text-accent-400 text-sm">→ Rekabet analizi ve akıllı teklif stratejileri</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <MousePointer className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Düşük Dönüşüm Oranı</h3>
              <p className="text-primary-400 text-sm mb-3">Tıklama alıyorsunuz ama satış/lead gelmiyor.</p>
              <p className="text-accent-400 text-sm">→ Landing page optimizasyonu ve conversion tracking</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Zaman Yetersizliği</h3>
              <p className="text-primary-400 text-sm mb-3">Kampanyaları yönetecek ve optimize edecek zamanınız yok.</p>
              <p className="text-accent-400 text-sm">→ Tam kapsamlı yönetim ve düzenli raporlama</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Ölçüm Eksikliği</h3>
              <p className="text-primary-400 text-sm mb-3">Hangi kampanya işe yarıyor, hangisi yaramıyor bilmiyorsunuz.</p>
              <p className="text-accent-400 text-sm">→ GA4 kurulumu, conversion tracking ve detaylı raporlama</p>
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
              Google, Meta ve diğer platformlarda kapsamlı reklam yönetimi hizmeti.
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
              Reklam yönetiminde izlediğim yapılandırılmış ve şeffaf süreç.
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
                Her sektörün reklam dinamikleri farklıdır. E-ticarette Shopping kampanyaları, B2B'de LinkedIn Ads ve lead generation, yerel işletmelerde konum bazlı hedefleme gibi sektöre özel yaklaşımlar uyguluyorum.
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
                Türkiye'nin önde gelen medya kuruluşları ve kurumsal markalar için dijital reklam kampanyaları yönettim.
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
              Piyasadaki reklam ajanslarından farklı olarak sunduğum avantajlar.
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
                <h3 className="text-xl font-semibold text-white mb-2">SEO ile Entegre Reklam Stratejisi</h3>
                <p className="text-primary-300">
                  <Link href="/hizmetler/seo-danismanligi" className="text-accent-400 hover:underline">SEO danışmanlığı</Link> uzmanlığımla birlikte, reklam ve organik stratejileri entegre ediyorum. Reklam verilerini SEO'ya, SEO insight'larını reklamlara yansıtarak bütünsel bir dijital strateji oluşturuyorum.
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

      {/* Platform Comparison */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Platform <span className="text-gradient">Karşılaştırması</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <Search className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Google Ads</h3>
              </div>
              <ul className="space-y-3 text-primary-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span>Aktif arama yapan kullanıcılara ulaşır (yüksek niyet)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span>Arama, Shopping, YouTube, Display ağları</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span>Dönüşüm odaklı, ölçülebilir ROI</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span>E-ticaret ve B2B için ideal</span>
                </li>
              </ul>
            </div>

            <div className="card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Meta Ads</h3>
              </div>
              <ul className="space-y-3 text-primary-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span>Geniş kitlelere ulaşır, farkındalık yaratır</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span>Facebook, Instagram, Messenger, WhatsApp</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span>Detaylı demografik ve ilgi alanı hedefleme</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span>D2C, lifestyle ve marka kampanyaları için ideal</span>
                </li>
              </ul>
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
      <section className="py-16 md:py-20 bg-gradient-to-br from-accent-500/10 to-indigo-500/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Reklam Stratejinizi Oluşturalım
          </h2>
          <p className="text-primary-300 mb-8 max-w-xl mx-auto">
            Ücretsiz reklam analizi ile mevcut kampanyalarınızı değerlendirelim veya yeni bir strateji için yol haritası çizelim.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/iletisim" className="btn-primary group text-lg">
              Ücretsiz Reklam Analizi
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
            "name": "Online Reklamcılık Hizmeti",
            "description": "Profesyonel Google Ads ve Meta Ads yönetimi ile reklam bütçenizden maksimum verim alın.",
            "provider": {
              "@type": "Person",
              "name": "Tonguç Karaçay",
              "url": "https://tonguckaracay.com"
            },
            "areaServed": "TR",
            "serviceType": "Digital Advertising"
          })
        }}
      />
    </main>
  );
}
