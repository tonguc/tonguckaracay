import { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from 'next-intl/server';
import { ArrowRight, CheckCircle2, Search, Globe, Link2, BarChart3, FileText, Zap, TrendingUp, Clock, Users, Shield, Target, Layers, AlertTriangle, Building2, ShoppingCart, Briefcase, HeartPulse, Scale, Utensils } from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Danışmanlığı Hizmeti | Google'da Üst Sıralara Çıkın | Tonguç Karaçay",
  description: "Profesyonel SEO danışmanlığı ile organik trafiğinizi artırın. Teknik SEO, içerik stratejisi, link building. 25+ yıl deneyim, ölçülebilir sonuçlar. Ücretsiz SEO analizi için iletişime geçin.",
  keywords: ["SEO danışmanlığı", "SEO ajansı", "arama motoru optimizasyonu", "teknik SEO", "içerik stratejisi", "link building", "Google sıralama", "organik trafik"],
  openGraph: {
    title: "SEO Danışmanlığı Hizmeti | Google'da Üst Sıralara Çıkın",
    description: "Profesyonel SEO danışmanlığı ile organik trafiğinizi artırın. 25+ yıl deneyim, ölçülebilir sonuçlar.",
    type: "website",
  },
  alternates: {
    canonical: 'https://tonguckaracay.com/hizmetler/seo-danismanligi',
  },
};

// ============================================
// TÜRKÇE İÇERİK - BAĞIMSIZ ARAŞTIRMA SONUCU
// ============================================
// Rakip Analizi (Google.com.tr):
// - Mobitek: Kurumsal SEO, e-ticaret odaklı, AI/sesli arama vurgusu
// - Work Medya: İlk sayfa garantisi, Ticimax ortaklığı, 30 yıl deneyim
// - Flatart: 360° dijital, haftalık raporlama, dönüşüm odaklı
// - Time SEO: Sözleşme taahhütlü, e-ticaret altyapı ortaklıkları
// - SRC Medya: Ücretsiz analiz vurgusu, 20 yıl deneyim
//
// Eksik Bırakılan Noktalar:
// - Çoğu ajans "garanti" vaat ediyor (gerçekçi değil)
// - Bireysel uzman avantajı hiç yok
// - UX/UI ile SEO entegrasyonu çok az
// - AI/GEO (Generative Engine Optimization) yeni trend
// - Şeffaf fiyatlandırma neredeyse hiç yok
//
// Long-tail Keywords (Commercial/Service Intent):
// 1. SEO danışmanlığı hizmeti [Commercial]
// 2. profesyonel SEO ajansı [Commercial]
// 3. teknik SEO danışmanlığı [Service]
// 4. e-ticaret SEO hizmeti [Commercial]
// 5. kurumsal SEO danışmanlığı [Service]
// 6. Google sıralama yükseltme [Commercial]
// 7. organik trafik artırma [Commercial]
// 8. SEO analiz hizmeti [Service]
// 9. içerik SEO stratejisi [Service]
// 10. link building hizmeti [Commercial]
// 11. yerel SEO danışmanlığı [Service]
// 12. uluslararası SEO hizmeti [Commercial]
// ============================================

const services = [
  { 
    icon: Search, 
    title: "Teknik SEO", 
    description: "Site hızı, Core Web Vitals, mobil uyumluluk, crawling ve indexleme optimizasyonu. Google'ın teknik gereksinimlerini karşılayan sağlam bir altyapı." 
  },
  { 
    icon: FileText, 
    title: "İçerik Stratejisi", 
    description: "Anahtar kelime araştırması, içerik gap analizi ve SEO uyumlu içerik planlaması. Kullanıcı niyetine uygun, dönüşüm odaklı içerikler." 
  },
  { 
    icon: Link2, 
    title: "Link Building", 
    description: "Kaliteli ve doğal backlink stratejileri ile domain otoritesi artışı. Spam linklerden uzak, sürdürülebilir link profili oluşturma." 
  },
  { 
    icon: Globe, 
    title: "Uluslararası SEO", 
    description: "Çoklu dil ve bölge için hreflang yapılandırması, yerelleştirilmiş içerik stratejisi ve global pazar penetrasyonu." 
  },
  { 
    icon: BarChart3, 
    title: "SEO Analitik & Raporlama", 
    description: "Google Search Console, Analytics entegrasyonu. Aylık performans raporları, KPI takibi ve aksiyon önerileri." 
  },
  { 
    icon: Zap, 
    title: "Core Web Vitals & UX", 
    description: "LCP, FID, CLS metriklerinin optimizasyonu. Sayfa deneyimi skorlarını iyileştirerek hem kullanıcıları hem Google'ı memnun etme." 
  }
];

const process = [
  { 
    step: "01", 
    title: "Ücretsiz SEO Analizi", 
    description: "Mevcut sitenizin teknik durumu, rakip analizi ve fırsat alanlarının belirlenmesi. Herhangi bir taahhüt gerektirmez." 
  },
  { 
    step: "02", 
    title: "Strateji & Yol Haritası", 
    description: "Hedeflerinize göre özelleştirilmiş SEO stratejisi. Öncelikli aksiyonlar, zaman çizelgesi ve beklenen sonuçlar." 
  },
  { 
    step: "03", 
    title: "Teknik Optimizasyon", 
    description: "Site altyapısı, hız, mobil uyumluluk ve indexleme sorunlarının giderilmesi. Sağlam teknik temeller oluşturma." 
  },
  { 
    step: "04", 
    title: "İçerik Optimizasyonu", 
    description: "Mevcut içeriklerin SEO uyumlu hale getirilmesi, yeni içerik üretimi ve on-page SEO çalışmaları." 
  },
  { 
    step: "05", 
    title: "Off-Page & Link Building", 
    description: "Kaliteli backlink kazanımı, dijital PR ve marka otoritesi oluşturma çalışmaları." 
  },
  { 
    step: "06", 
    title: "İzleme & İyileştirme", 
    description: "Sürekli performans takibi, aylık raporlama ve algoritma güncellemelerine uyum. Uzun vadeli başarı için iteratif iyileştirmeler." 
  }
];

const industries = [
  { icon: ShoppingCart, name: "E-Ticaret", desc: "Ürün sayfaları, kategori SEO, schema markup" },
  { icon: Building2, name: "Kurumsal", desc: "Marka görünürlüğü, kurumsal itibar yönetimi" },
  { icon: Briefcase, name: "B2B & SaaS", desc: "Lead generation odaklı içerik stratejisi" },
  { icon: HeartPulse, name: "Sağlık", desc: "YMYL standartları, E-E-A-T optimizasyonu" },
  { icon: Scale, name: "Hukuk", desc: "Yerel SEO, uzmanlık alanı hedeflemesi" },
  { icon: Utensils, name: "Restoran & Otel", desc: "Google Business, yerel arama optimizasyonu" }
];

const brands = ["THY", "BMW", "Galatasaray", "Sabah", "ATV", "Star TV", "Hürriyet", "Milliyet", "NTV", "CNN Türk"];

const advantages = [
  {
    title: "Gerçekçi Beklentiler",
    description: "\"İlk sayfa garantisi\" gibi gerçekçi olmayan vaatler vermiyorum. SEO zaman alan bir süreç. Şeffaf iletişim ve ölçülebilir hedeflerle çalışıyorum."
  },
  {
    title: "Ajans Değil, Uzman",
    description: "Büyük ajanslardaki ekip değişiklikleri ve koordinasyon sorunları yok. 25+ yıl deneyimli tek bir uzmanla doğrudan çalışıyorsunuz."
  },
  {
    title: "UX & SEO Entegrasyonu",
    description: "UI/UX tasarım uzmanlığımla birlikte, hem kullanıcı deneyimini hem de arama motorlarını memnun eden bütünsel çözümler sunuyorum."
  },
  {
    title: "Güncel Bilgi",
    description: "Google algoritma güncellemeleri, AI destekli arama (SGE) ve GEO trendlerini yakından takip ediyorum. Stratejileriniz her zaman güncel kalıyor."
  }
];

const faqs = [
  {
    question: "SEO sonuçları ne kadar sürede görülür?",
    answer: "SEO uzun vadeli bir yatırımdır. Rekabet düzeyine ve sitenizin mevcut durumuna bağlı olarak ilk sonuçlar genellikle 3-6 ay içinde görülmeye başlar. Tam etki için 6-12 ay düşünülmeli. Kısa vadeli \"garanti\" vaatleri gerçekçi değildir."
  },
  {
    question: "SEO danışmanlığı neleri kapsar?",
    answer: "Teknik SEO audit, anahtar kelime araştırması, içerik stratejisi, on-page optimizasyon, link building danışmanlığı, rakip analizi ve aylık performans raporlaması. Kapsamı projenize göre özelleştiriyorum."
  },
  {
    question: "Google Ads mı yoksa SEO mu tercih etmeliyim?",
    answer: "İkisi farklı amaçlara hizmet eder. Reklam anlık trafik sağlar ama bütçe bitince durur. SEO uzun vadeli, sürdürülebilir organik trafik getirir. İdeal strateji genellikle ikisinin kombinasyonudur."
  },
  {
    question: "Hangi sektörlere hizmet veriyorsunuz?",
    answer: "E-ticaret, kurumsal siteler, B2B, sağlık, hukuk, turizm dahil pek çok sektöre hizmet veriyorum. Her sektörün kendine özgü SEO dinamikleri var ve stratejimi buna göre uyarlıyorum."
  },
  {
    question: "SEO için ne kadar bütçe ayırmalıyım?",
    answer: "Bütçe, rekabet düzeyine ve hedeflerinize göre değişir. Ücretsiz analiz görüşmesinde sitenizi değerlendirip, ihtiyaçlarınıza uygun paket önerileri sunuyorum. Şeffaf fiyatlandırma prensibiyle çalışıyorum."
  }
];

type Props = { params: { locale: string } };

export default function SEODanismanligiPage({ params: { locale } }: Props) {
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
            <span className="text-white">SEO Danışmanlığı</span>
          </nav>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="text-gradient">SEO Danışmanlığı</span> Hizmeti
              </h1>
              <p className="text-lg md:text-xl text-primary-300 mb-8 leading-relaxed">
                Google'da üst sıralara çıkın, organik trafiğinizi artırın. Teknik SEO, içerik stratejisi ve link building ile dijital görünürlüğünüzü güçlendiriyorum. 25 yılı aşkın deneyim ve kurumsal referanslarla, veriye dayalı SEO stratejileri sunuyorum.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/iletisim" className="btn-primary group text-lg">
                  Ücretsiz SEO Analizi
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
                  <span>Ölçülebilir Sonuçlar</span>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="card p-8">
              <h2 className="text-xl font-semibold text-white mb-6">SEO'nun iş sonuçlarına etkisi</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary-300">Organik arama trafik payı</span>
                    <span className="text-accent-500 font-bold">%53</span>
                  </div>
                  <div className="h-2 bg-surface-border rounded-full overflow-hidden">
                    <div className="h-full bg-accent-500 rounded-full" style={{ width: '53%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary-300">İlk sayfa tıklama oranı</span>
                    <span className="text-accent-500 font-bold">%91</span>
                  </div>
                  <div className="h-2 bg-surface-border rounded-full overflow-hidden">
                    <div className="h-full bg-accent-500 rounded-full" style={{ width: '91%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary-300">Organik vs Paid trafik kalitesi</span>
                    <span className="text-accent-500 font-bold">5.66x</span>
                  </div>
                  <div className="h-2 bg-surface-border rounded-full overflow-hidden">
                    <div className="h-full bg-accent-500 rounded-full" style={{ width: '80%' }} />
                  </div>
                </div>
              </div>
              <p className="text-xs text-primary-500 mt-4">Kaynak: BrightEdge, Search Engine Journal sektör araştırmaları</p>
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
              Dijital görünürlük sorunlarınızı SEO danışmanlığı ile nasıl çözüyorum.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Google'da Görünmüyorsunuz</h3>
              <p className="text-primary-400 text-sm mb-3">Potansiyel müşteriler sizi aradığında rakiplerinizi buluyor.</p>
              <p className="text-accent-400 text-sm">→ Hedefli anahtar kelime stratejisi ve on-page optimizasyon</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Reklama Bağımlılık</h3>
              <p className="text-primary-400 text-sm mb-3">Trafik için sürekli reklam bütçesi harcamak zorunda kalıyorsunuz.</p>
              <p className="text-accent-400 text-sm">→ Sürdürülebilir organik trafik stratejisi</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Teknik Sorunlar</h3>
              <p className="text-primary-400 text-sm mb-3">Site yavaş, mobil uyumsuz veya Google tarafından düzgün indexlenmiyor.</p>
              <p className="text-accent-400 text-sm">→ Kapsamlı teknik SEO audit ve optimizasyon</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Rakipler Önde</h3>
              <p className="text-primary-400 text-sm mb-3">Aynı anahtar kelimelerde rakipleriniz sürekli üst sıralarda.</p>
              <p className="text-accent-400 text-sm">→ Rakip analizi ve rekabetçi strateji geliştirme</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">İçerik Performansı Düşük</h3>
              <p className="text-primary-400 text-sm mb-3">Blog yazıyorsunuz ama trafik gelmiyor, sıralama almıyor.</p>
              <p className="text-accent-400 text-sm">→ Veri odaklı içerik stratejisi ve optimizasyon</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Algoritma Güncellemeleri</h3>
              <p className="text-primary-400 text-sm mb-3">Google güncellemelerinden sonra sıralamalarınız düştü.</p>
              <p className="text-accent-400 text-sm">→ Güncel SEO pratikleri ve recovery stratejisi</p>
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
              İhtiyacınıza göre tek bir alan veya kapsamlı SEO danışmanlığı şeklinde çalışabiliriz.
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
              SEO danışmanlığında izlediğim yapılandırılmış ve şeffaf süreç.
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
                Her sektörün SEO dinamikleri farklıdır. E-ticarette ürün sayfası optimizasyonu, sağlık sektöründe E-E-A-T kriterleri, yerel işletmelerde Google Business profil yönetimi gibi sektöre özel yaklaşımlar uyguluyorum.
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
                Türkiye'nin önde gelen medya kuruluşları ve kurumsal markalar için SEO stratejileri geliştirdim.
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
              Piyasadaki SEO ajanslarından farklı olarak sunduğum avantajlar.
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
                <h3 className="text-xl font-semibold text-white mb-2">UI/UX ile Entegre SEO</h3>
                <p className="text-primary-300">
                  <Link href="/hizmetler/ui-ux-tasarim" className="text-accent-400 hover:underline">UI/UX tasarım</Link> uzmanlığımla birlikte, Core Web Vitals ve kullanıcı deneyimi metriklerini de optimize ediyorum. Google'ın sayfa deneyimi güncellemeleriyle UX artık doğrudan sıralama faktörü. Hem kullanıcıları hem arama motorlarını memnun eden bütünsel çözümler sunuyorum.
                </p>
              </div>
              <Link href="/hizmetler/ui-ux-tasarim" className="btn-secondary flex-shrink-0">
                UI/UX Hizmeti
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GEO Section */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="card p-8 md:p-12 bg-gradient-to-br from-accent-500/5 to-indigo-500/5 border-accent-500/20">
            <div className="max-w-3xl">
              <span className="text-accent-400 text-sm font-medium mb-2 block">Yeni Trend</span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                GEO: Generative Engine Optimization
              </h2>
              <p className="text-primary-300 mb-6">
                ChatGPT, Google SGE ve diğer AI destekli arama motorları oyunun kurallarını değiştiriyor. Geleneksel SEO'nun yanı sıra, içeriklerinizin yapay zeka tarafından kaynak gösterilmesi için GEO stratejileri de uyguluyorum.
              </p>
              <Link href="/geo-nedir-nasil-yapilir" className="text-accent-400 hover:underline inline-flex items-center">
                GEO hakkında daha fazla bilgi
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
      <section className="py-16 md:py-20 bg-gradient-to-br from-accent-500/10 to-indigo-500/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            SEO Stratejinizi Oluşturalım
          </h2>
          <p className="text-primary-300 mb-8 max-w-xl mx-auto">
            Ücretsiz SEO analizi ile sitenizin mevcut durumunu ve fırsat alanlarını değerlendirelim. Herhangi bir taahhüt gerektirmeyen bu görüşmede, net bir yol haritası sunuyorum.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/iletisim" className="btn-primary group text-lg">
              Ücretsiz SEO Analizi
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
            "name": "SEO Danışmanlığı Hizmeti",
            "description": "Profesyonel SEO danışmanlığı ile organik trafiğinizi artırın. Teknik SEO, içerik stratejisi, link building.",
            "provider": {
              "@type": "Person",
              "name": "Tonguç Karaçay",
              "url": "https://tonguckaracay.com"
            },
            "areaServed": "TR",
            "serviceType": "SEO Consulting"
          })
        }}
      />
    </main>
  );
}
