import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  Share2,
  Calendar,
  Users,
  BarChart3,
  MessageCircle,
  TrendingUp
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sosyal Medya Danışmanlığı | Strateji & Organik Büyüme | Tonguç Karaçay",
  description: "Sosyal medya stratejisi, içerik planlaması ve organik büyüme danışmanlığı. 25+ yıl dijital pazarlama deneyimiyle marka bilinirliğinizi artırın.",
  keywords: "sosyal medya yönetimi, sosyal medya danışmanlığı, sosyal medya stratejisi, içerik stratejisi, topluluk yönetimi, organik büyüme",
};

const services = [
  {
    icon: Calendar,
    title: "Strateji & Planlama",
    description: "Markanıza özel sosyal medya stratejisi. Hedef kitle analizi, kanal seçimi ve içerik planlaması.",
    features: ["Strateji Geliştirme", "İçerik Takvimi", "Kanal Analizi", "Rakip Analizi"]
  },
  {
    icon: Share2,
    title: "İçerik Stratejisi",
    description: "Etkileşim yaratan içerik planları. Metin, görsel ve video içerik önerileri.",
    features: ["İçerik Planlaması", "Görsel Öneriler", "Hashtag Stratejisi", "Trend Takibi"]
  },
  {
    icon: Users,
    title: "Topluluk Yönetimi",
    description: "Takipçilerinizle etkileşim stratejisi. Yorum yönetimi ve kriz iletişimi.",
    features: ["Etkileşim Yönetimi", "Yorum Moderasyonu", "Kriz Yönetimi", "Influencer İlişkileri"]
  },
  {
    icon: BarChart3,
    title: "Analiz & Raporlama",
    description: "Performans takibi ve düzenli raporlama. Veriye dayalı optimizasyon önerileri.",
    features: ["Performans Analizi", "Aylık Raporlar", "KPI Takibi", "Optimizasyon"]
  }
];

const platforms = [
  "Instagram",
  "LinkedIn", 
  "Facebook",
  "Twitter/X",
  "YouTube",
  "TikTok"
];

const faqs = [
  {
    question: "Hangi sosyal medya platformlarında çalışıyorsunuz?",
    answer: "Instagram, LinkedIn, Facebook, Twitter/X, YouTube ve TikTok platformlarında strateji ve danışmanlık hizmeti veriyorum. İşletmenizin hedef kitlesine göre en uygun platformları belirliyoruz."
  },
  {
    question: "İçerik üretimi de yapıyor musunuz?",
    answer: "Danışmanlık odaklı çalışıyorum. İçerik stratejisi, planlama ve yönlendirme yapıyorum. İçerik üretimi için ekibinize rehberlik ediyorum veya güvendiğim içerik üreticileriyle bağlantı kuruyorum."
  },
  {
    question: "Sosyal medya yönetimi ücreti nedir?",
    answer: "Aylık danışmanlık ücretleri platform sayısı ve hizmet kapsamına göre değişir. Strateji + aylık danışmanlık paketleri veya tek seferlik strateji çalışması seçenekleri sunuyorum."
  },
  {
    question: "Organik büyüme ne kadar sürede gerçekleşir?",
    answer: "Organik sosyal medya büyümesi sabır gerektirir. Tutarlı içerik ve strateji ile 3-6 ay içinde kayda değer büyüme görülür. Reklam ile desteklendiğinde sonuçlar hızlanır."
  }
];

export default function SosyalMedyaYonetimiPage() {
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
              <span className="text-white">Sosyal Medya Yönetimi</span>
            </nav>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-gradient">Sosyal Medya</span>{" "}
              Danışmanlığı
            </h1>

            <p className="text-xl text-primary-300 mb-8 leading-relaxed">
              Sosyal medya stratejisi, içerik planlaması ve organik büyüme danışmanlığı. 
              Marka bilinirliğinizi artırın, hedef kitlenizle anlamlı bağlar kurun.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-2 text-primary-300">
                <CheckCircle2 className="w-5 h-5 text-accent-400" />
                <span>Strateji Odaklı</span>
              </div>
              <div className="flex items-center gap-2 text-primary-300">
                <CheckCircle2 className="w-5 h-5 text-accent-400" />
                <span>Organik Büyüme</span>
              </div>
              <div className="flex items-center gap-2 text-primary-300">
                <CheckCircle2 className="w-5 h-5 text-accent-400" />
                <span>Veriye Dayalı</span>
              </div>
            </div>

            <Link href="/iletisim" className="btn-primary group">
              Strateji Görüşmesi
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-12 bg-surface-card/30">
        <div className="container-custom">
          <div className="text-center mb-6">
            <p className="text-primary-300">Çalıştığım Platformlar</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform, index) => (
              <div key={index} className="px-5 py-2 bg-surface-card/50 border border-surface-border rounded-lg text-white">
                {platform}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Sosyal Medya{" "}
              <span className="text-gradient">Hizmetlerim</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-surface-darker/50 border border-surface-border rounded-2xl p-6 hover:border-accent-500/50 transition-all text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center mb-4 mx-auto">
                  <service.icon className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="text-lg font-display font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-primary-300 text-sm leading-relaxed mb-3">
                  {service.description}
                </p>
                <div className="flex flex-wrap justify-center gap-1.5">
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
      <section className="py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Sıkça Sorulan <span className="text-gradient">Sorular</span></h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-surface-darker/50 border border-surface-border rounded-xl overflow-hidden">
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
              Sosyal Medya Stratejinizi Konuşalım
            </h2>
            <p className="text-xl text-primary-300 mb-8">
              Markanız için etkili sosyal medya stratejisi oluşturalım.
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
            "name": "Sosyal Medya Danışmanlığı",
            "provider": { "@type": "Person", "name": "Tonguç Karaçay" },
            "description": "Sosyal medya stratejisi, içerik planlaması ve organik büyüme danışmanlığı hizmeti.",
            "serviceType": ["Sosyal Medya Stratejisi", "İçerik Planlaması", "Topluluk Yönetimi", "Sosyal Medya Analizi"]
          })
        }}
      />
    </main>
  );
}
