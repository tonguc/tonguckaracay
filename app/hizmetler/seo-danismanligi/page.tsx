import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  CheckCircle2, 
  Search,
  FileCode,
  Link2,
  BarChart3,
  Globe,
  Zap,
  Target,
  TrendingUp,
  Settings,
  FileText
} from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Danışmanlığı | Teknik SEO & UX Odaklı | Tonguç Karaçay",
  description: "25+ yıl deneyimli SEO uzmanı. Türkiye ve uluslararası (ABD, Kanada, Almanya) firmalarına teknik SEO, içerik stratejisi ve UX odaklı optimizasyon hizmeti.",
  keywords: "SEO danışmanlığı, SEO uzmanı, teknik SEO, e-ticaret SEO, kurumsal SEO, uluslararası SEO, organik trafik artırma",
  openGraph: {
    title: "SEO Danışmanlığı | Teknik SEO & UX Odaklı | Tonguç Karaçay",
    description: "25+ yıl deneyimli SEO uzmanı. Türkiye ve uluslararası firmalarına SEO danışmanlığı.",
    type: "website",
  },
};

const services = [
  {
    icon: FileCode,
    title: "Teknik SEO",
    description: "Site hızı, Core Web Vitals, crawlability, indexleme sorunları ve teknik altyapı optimizasyonu. Arama motorlarının sitenizi doğru anlamasını sağlıyorum.",
    features: ["Site Hızı Optimizasyonu", "Core Web Vitals", "Schema Markup", "Mobil Uyumluluk"]
  },
  {
    icon: Search,
    title: "Anahtar Kelime Stratejisi",
    description: "Sektörünüze özel anahtar kelime araştırması. Rekabet analizi ve fırsat tespiti ile doğru kelimelere odaklanıyorum.",
    features: ["Anahtar Kelime Araştırması", "Rekabet Analizi", "Search Intent Analizi", "Keyword Mapping"]
  },
  {
    icon: FileText,
    title: "İçerik Stratejisi",
    description: "SEO uyumlu içerik planlaması ve optimizasyonu. Kullanıcı niyetine uygun, dönüşüm sağlayan içerikler oluşturuyorum.",
    features: ["İçerik Planlaması", "On-Page SEO", "Content Gap Analizi", "E-E-A-T Optimizasyonu"]
  },
  {
    icon: Link2,
    title: "Link Building",
    description: "Doğal ve kaliteli backlink stratejisi. Spam olmadan, otorite artıran link profili oluşturuyorum.",
    features: ["Link Profili Analizi", "Digital PR", "Guest Posting", "Broken Link Building"]
  },
  {
    icon: Globe,
    title: "Uluslararası SEO",
    description: "Çok dilli ve çok bölgeli SEO stratejisi. ABD, Kanada, Almanya pazarlarında deneyimli optimizasyon.",
    features: ["Hreflang Yapılandırması", "Lokalizasyon", "Uluslararası Anahtar Kelime", "Bölgesel Strateji"]
  },
  {
    icon: BarChart3,
    title: "SEO Analiz & Raporlama",
    description: "Detaylı SEO analizi ve düzenli raporlama. Google Search Console, Analytics ve üçüncü parti araçlarla kapsamlı takip.",
    features: ["SEO Audit", "Rakip Analizi", "Aylık Raporlama", "KPI Takibi"]
  }
];

const process = [
  {
    step: "01",
    title: "SEO Audit",
    description: "Mevcut sitenizi kapsamlı şekilde analiz ediyorum. Teknik sorunlar, içerik fırsatları ve rekabet durumunu değerlendiriyorum.",
    duration: "1 Hafta"
  },
  {
    step: "02",
    title: "Strateji Geliştirme",
    description: "Audit sonuçlarına göre özelleştirilmiş SEO stratejisi oluşturuyorum. Öncelikleri belirliyor, yol haritası çıkarıyorum.",
    duration: "1 Hafta"
  },
  {
    step: "03",
    title: "Teknik Optimizasyon",
    description: "Site hızı, mobil uyumluluk, indexleme ve teknik SEO sorunlarını çözüyorum. Altyapıyı sağlamlaştırıyorum.",
    duration: "2-4 Hafta"
  },
  {
    step: "04",
    title: "İçerik Optimizasyonu",
    description: "Mevcut içerikleri optimize ediyor, yeni içerik stratejisi uyguluyorum. On-page SEO çalışmalarını tamamlıyorum.",
    duration: "Sürekli"
  },
  {
    step: "05",
    title: "İzleme & İyileştirme",
    description: "Sonuçları düzenli takip ediyorum. Algoritma güncellemelerine göre stratejiyi adapte ediyorum.",
    duration: "Sürekli"
  }
];

const brands = [
  "THY",
  "BMW",
  "Galatasaray",
  "Borusan Otomotiv",
  "Sabah",
  "Sabah USA",
  "ATV",
  "A Haber",
  "Star",
  "Güneş",
  "Takvim",
  "24 TV"
];

const faqs = [
  {
    question: "SEO sonuçları ne kadar sürede görülür?",
    answer: "SEO uzun vadeli bir yatırımdır. Genellikle 3-6 ay içinde kayda değer sonuçlar görülmeye başlar. Ancak bu süre sitenizin mevcut durumu, rekabet düzeyi ve hedeflenen anahtar kelimelere göre değişebilir. İlk aylardan itibaren teknik iyileştirmeler ve indexleme durumunda pozitif değişimler gözlemlenir."
  },
  {
    question: "SEO danışmanlığı hizmeti neleri kapsar?",
    answer: "SEO danışmanlığı hizmetim; teknik SEO audit, anahtar kelime araştırması, içerik stratejisi, on-page optimizasyon, link building stratejisi, rakip analizi ve düzenli raporlamayı kapsar. Projenizin ihtiyaçlarına göre kapsam özelleştirilebilir."
  },
  {
    question: "Google'da ilk sayfa garantisi veriyor musunuz?",
    answer: "Hayır, hiçbir SEO uzmanı Google'da belirli bir sıralama garantisi veremez. Google'ın algoritması sürekli değişir ve 200'den fazla sıralama faktörü vardır. Ancak doğru strateji ve sürekli çalışma ile organik trafiğinizi ve sıralamalarınızı iyileştireceğimizi söyleyebilirim."
  },
  {
    question: "SEO danışmanlığı ücreti nedir?",
    answer: "Ücretlendirme proje kapsamına, site büyüklüğüne ve rekabet düzeyine göre değişir. Aylık retainer modeli veya proje bazlı çalışma seçenekleri sunuyorum. Ücretsiz ön görüşmede projenizi değerlendirip size özel teklif hazırlıyorum."
  },
  {
    question: "Uluslararası SEO konusunda deneyiminiz var mı?",
    answer: "Evet, ABD, Kanada ve Almanya pazarlarında firmalarla çalıştım. Çok dilli site yapılandırması, hreflang implementasyonu, lokalizasyon ve bölgesel anahtar kelime stratejisi konularında deneyimliyim."
  },
  {
    question: "SEO ile birlikte UX danışmanlığı da veriyor musunuz?",
    answer: "Evet, bu benim en güçlü farklarımdan biri. 25+ yıllık UI/UX deneyimimi SEO ile birleştiriyorum. Google artık kullanıcı deneyimini (Core Web Vitals, sayfa deneyimi) sıralama faktörü olarak değerlendiriyor. SEO ve UX'i birlikte optimize etmek çok daha etkili sonuçlar veriyor."
  },
  {
    question: "E-ticaret siteleri için SEO yapıyor musunuz?",
    answer: "Evet, e-ticaret SEO konusunda deneyimliyim. Ürün sayfası optimizasyonu, kategori yapısı, site içi arama, filtreleme ve faceted navigation gibi e-ticarete özel konularda çalışıyorum."
  }
];

const stats = [
  { value: "25+", label: "Yıl Deneyim" },
  { value: "3", label: "Ülkede Hizmet" },
  { value: "100+", label: "SEO Projesi" },
];

export default function SEODanismanligiPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-primary-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
              <span>/</span>
              <Link href="/#hizmetler" className="hover:text-white transition-colors">Hizmetler</Link>
              <span>/</span>
              <span className="text-white">SEO Danışmanlığı</span>
            </nav>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-gradient">SEO Danışmanlığı</span>{" "}
              Hizmeti
            </h1>

            <p className="text-xl text-primary-300 mb-8 leading-relaxed">
              25+ yıllık deneyimimle teknik SEO, içerik stratejisi ve UX odaklı optimizasyon sunuyorum. 
              Türkiye'nin yanı sıra ABD, Kanada ve Almanya'daki firmalara uluslararası SEO hizmeti veriyorum.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-2 text-primary-300">
                <CheckCircle2 className="w-5 h-5 text-accent-400" />
                <span>UX + SEO Kombinasyonu</span>
              </div>
              <div className="flex items-center gap-2 text-primary-300">
                <CheckCircle2 className="w-5 h-5 text-accent-400" />
                <span>Uluslararası Deneyim</span>
              </div>
              <div className="flex items-center gap-2 text-primary-300">
                <CheckCircle2 className="w-5 h-5 text-accent-400" />
                <span>AI Destekli Analiz</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/iletisim" className="btn-primary group">
                Ücretsiz SEO Analizi
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#hizmetler" className="btn-secondary">
                Hizmetleri İncele
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-surface-card/30">
        <div className="container-custom">
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-accent-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Value Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title mb-4">
              Neden Farklıyım?
            </h2>
            <p className="text-primary-300 text-lg">
              Çoğu SEO uzmanı sadece teknik optimizasyona odaklanır. Ben ise tasarımcı geçmişimle 
              SEO ve kullanıcı deneyimini birlikte optimize ediyorum.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-surface-card border border-surface-border rounded-2xl p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-accent-500/20 flex items-center justify-center mx-auto mb-4">
                <Target className="w-7 h-7 text-accent-400" />
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-3">UX + SEO</h3>
              <p className="text-primary-300 text-sm">
                Google artık kullanıcı deneyimini sıralama faktörü olarak değerlendiriyor. 
                25 yıllık UX deneyimimi SEO ile birleştiriyorum.
              </p>
            </div>

            <div className="bg-surface-card border border-surface-border rounded-2xl p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-accent-500/20 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-7 h-7 text-accent-400" />
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-3">Global Deneyim</h3>
              <p className="text-primary-300 text-sm">
                Sadece Türkiye değil, ABD, Kanada ve Almanya pazarlarında da çalıştım. 
                Uluslararası SEO konusunda deneyimliyim.
              </p>
            </div>

            <div className="bg-surface-card border border-surface-border rounded-2xl p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-accent-500/20 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-7 h-7 text-accent-400" />
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-3">AI Destekli</h3>
              <p className="text-primary-300 text-sm">
                Modern AI araçlarını SEO süreçlerine entegre ediyorum. 
                Daha hızlı analiz, daha akıllı strateji.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              SEO Danışmanlığı{" "}
              <span className="text-gradient">Hizmetlerim</span>
            </h2>
            <p className="text-primary-300 max-w-2xl mx-auto">
              Teknik SEO'dan içerik stratejisine, uluslararası SEO'dan raporlamaya kadar kapsamlı hizmet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-surface-card border border-surface-border rounded-2xl p-6 hover:border-accent-500/50 transition-all duration-300 group text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center mb-4 group-hover:bg-accent-500/30 transition-colors mx-auto">
                  <service.icon className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-primary-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {service.features.map((feature, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 text-xs text-primary-300 bg-surface-card rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              SEO Çalışma{" "}
              <span className="text-gradient">Sürecim</span>
            </h2>
            <p className="text-primary-300 max-w-2xl mx-auto">
              Sistematik bir yaklaşımla SEO projelerini yönetiyorum.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-accent-500/20 border-2 border-accent-500 flex items-center justify-center">
                    <span className="text-accent-400 font-display font-bold">{item.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="w-0.5 h-full bg-accent-500/20 mx-auto mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-display font-semibold text-white">
                      {item.title}
                    </h3>
                    <span className="px-2 py-0.5 text-xs text-accent-400 bg-accent-500/10 rounded-full">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-primary-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-surface-card/30">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-display font-bold text-white mb-3">
              Çalıştığım ve Destek Verdiğim Firmalar
            </h2>
            <p className="text-primary-300">
              Türkiye ve uluslararası markalara SEO danışmanlığı verdim
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {brands.map((brand, index) => (
              <div 
                key={index}
                className="px-4 py-2 bg-surface-card border border-surface-border rounded-lg text-primary-300 text-sm hover:border-accent-500/50 hover:text-white transition-all"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Sıkça Sorulan{" "}
              <span className="text-gradient">Sorular</span>
            </h2>
            <p className="text-primary-300 max-w-2xl mx-auto">
              SEO danışmanlığı hizmeti hakkında merak edilenler
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details 
                key={index}
                className="group bg-surface-card border border-surface-border rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-surface-card/80 transition-colors">
                  <h3 className="text-white font-medium pr-4">{faq.question}</h3>
                  <span className="flex-shrink-0 w-5 h-5 text-accent-400 group-open:rotate-180 transition-transform">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-primary-300 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent-500/10 to-indigo-500/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ücretsiz SEO Analizi İsteyin
            </h2>
            <p className="text-xl text-primary-300 mb-8">
              Sitenizin SEO durumunu birlikte değerlendirelim. İlk analiz ücretsiz.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/iletisim" className="btn-primary group text-lg px-8 py-4">
                Ücretsiz Analiz Talep Et
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <p className="text-primary-400 text-sm mt-6">
              Genellikle 24 saat içinde yanıt veriyorum
            </p>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "SEO Danışmanlığı Hizmeti",
            "provider": {
              "@type": "Person",
              "name": "Tonguç Karaçay",
              "jobTitle": "SEO Uzmanı & UI/UX Tasarımcı"
            },
            "description": "Teknik SEO, içerik stratejisi, link building ve uluslararası SEO danışmanlığı hizmeti.",
            "areaServed": ["Türkiye", "Amerika", "Kanada", "Almanya"],
            "serviceType": ["Teknik SEO", "İçerik SEO", "Link Building", "Uluslararası SEO", "E-ticaret SEO"]
          })
        }}
      />

      {/* FAQ Schema */}
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
    </main>
  );
}
