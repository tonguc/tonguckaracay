import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  Target,
  TrendingUp,
  Users,
  BarChart3,
  Repeat,
  DollarSign
} from "lucide-react";

export const metadata: Metadata = {
  title: "Online Reklamcılık | Google & Meta Ads Yönetimi | Tonguç Karaçay",
  description: "ROI odaklı Google Ads ve Meta Ads yönetimi. 25+ yıl dijital pazarlama deneyimiyle performans pazarlama, remarketing ve reklam optimizasyonu hizmeti.",
  keywords: "Google Ads yönetimi, Meta Ads, Facebook reklamları, dijital reklam, performans pazarlama, PPC, remarketing",
};

const services = [
  {
    icon: Target,
    title: "Google Ads Yönetimi",
    description: "Arama ağı, görüntülü reklam ağı, alışveriş ve video kampanyaları. ROI odaklı strateji ve sürekli optimizasyon.",
    features: ["Search Ads", "Display Ads", "Shopping Ads", "YouTube Ads"]
  },
  {
    icon: Users,
    title: "Meta Ads Yönetimi",
    description: "Facebook ve Instagram reklam kampanyaları. Hedef kitle segmentasyonu ve kreatif optimizasyon.",
    features: ["Facebook Ads", "Instagram Ads", "Audience Targeting", "A/B Testing"]
  },
  {
    icon: Repeat,
    title: "Remarketing",
    description: "Sitenizi ziyaret eden kullanıcıları yeniden hedefleyin. Dönüşüm oranlarını artıran remarketing stratejileri.",
    features: ["Google Remarketing", "Meta Retargeting", "Dynamic Ads", "Cross-Platform"]
  },
  {
    icon: BarChart3,
    title: "Performans Analizi",
    description: "Detaylı raporlama ve ROI analizi. Reklam harcamalarınızın her kuruşunu takip edin.",
    features: ["Conversion Tracking", "Attribution Modeling", "ROAS Analizi", "Raporlama"]
  }
];

const faqs = [
  {
    question: "Google Ads ve Meta Ads arasındaki fark nedir?",
    answer: "Google Ads arama niyetine dayalıdır - kullanıcılar bir şey ararken reklamınızı görür. Meta Ads ise ilgi alanlarına dayalıdır - hedef kitlenize sosyal medyada ulaşırsınız. İkisi birlikte kullanıldığında en etkili sonuçlar alınır."
  },
  {
    question: "Minimum reklam bütçesi ne olmalı?",
    answer: "Sektöre ve hedeflere göre değişir. Genel olarak aylık minimum 5.000-10.000 TL reklam bütçesiyle başlanmasını öneriyorum. Daha düşük bütçelerle yeterli veri toplamak ve optimizasyon yapmak zorlaşır."
  },
  {
    question: "Reklam yönetim ücreti nasıl hesaplanır?",
    answer: "Genellikle reklam harcamasının %15-20'si veya sabit aylık ücret şeklinde çalışıyorum. Bütçenize ve proje kapsamına göre en uygun modeli birlikte belirleriz."
  },
  {
    question: "Sonuçları ne zaman görmeye başlarım?",
    answer: "PPC reklamlar SEO'dan farklı olarak hemen sonuç verir. Kampanya açıldığı gün trafik almaya başlarsınız. Ancak optimizasyon ve en iyi performans için 2-4 hafta gerekir."
  }
];

export default function OnlineReklamcilikPage() {
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
            <nav className="flex items-center gap-2 text-sm text-primary-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
              <span>/</span>
              <Link href="/#hizmetler" className="hover:text-white transition-colors">Hizmetler</Link>
              <span>/</span>
              <span className="text-white">Online Reklamcılık</span>
            </nav>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-gradient">Online Reklamcılık</span>{" "}
              Hizmeti
            </h1>

            <p className="text-xl text-primary-300 mb-8 leading-relaxed">
              Google Ads ve Meta Ads ile hedef kitlenize ulaşın. ROI odaklı kampanya yönetimi, 
              sürekli optimizasyon ve şeffaf raporlama ile reklam bütçenizi en verimli şekilde kullanın.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-2 text-primary-300">
                <CheckCircle2 className="w-5 h-5 text-accent-400" />
                <span>ROI Odaklı</span>
              </div>
              <div className="flex items-center gap-2 text-primary-300">
                <CheckCircle2 className="w-5 h-5 text-accent-400" />
                <span>Şeffaf Raporlama</span>
              </div>
              <div className="flex items-center gap-2 text-primary-300">
                <CheckCircle2 className="w-5 h-5 text-accent-400" />
                <span>Sürekli Optimizasyon</span>
              </div>
            </div>

            <Link href="/iletisim" className="btn-primary group">
              Ücretsiz Kampanya Analizi
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Reklam{" "}
              <span className="text-gradient">Hizmetlerim</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-surface-darker/50 border border-surface-border rounded-2xl p-5 hover:border-accent-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="text-lg font-display font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-primary-300 text-sm leading-relaxed mb-3">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {service.features.map((feature, i) => (
                    <span key={i} className="px-2 py-1 text-xs text-primary-300 bg-surface-card rounded-md">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Sıkça Sorulan <span className="text-gradient">Sorular</span></h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-surface-card/50 border border-surface-border rounded-xl overflow-hidden">
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
              Reklam Kampanyanızı Konuşalım
            </h2>
            <p className="text-xl text-primary-300 mb-8">
              Mevcut kampanyalarınızı analiz edeyim veya yeni strateji oluşturalım.
            </p>
            <Link href="/iletisim" className="btn-primary group text-lg px-8 py-4">
              Ücretsiz Görüşme
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Online Reklamcılık Hizmeti",
            "provider": { "@type": "Person", "name": "Tonguç Karaçay" },
            "description": "Google Ads ve Meta Ads yönetimi, performans pazarlama ve remarketing hizmeti.",
            "serviceType": ["Google Ads", "Meta Ads", "PPC", "Remarketing"]
          })
        }}
      />
    </main>
  );
}
