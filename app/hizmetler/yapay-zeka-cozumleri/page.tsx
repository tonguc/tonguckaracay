import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  Bot,
  Sparkles,
  Zap,
  FileText,
  MessageSquare,
  Settings
} from "lucide-react";

export const metadata: Metadata = {
  title: "Yapay Zeka Çözümleri | AI Otomasyon & Chatbot | Tonguç Karaçay",
  description: "İşletmeler için pratik yapay zeka çözümleri. AI otomasyon, chatbot geliştirme, içerik üretimi ve iş süreçleri optimizasyonu. Kod bilgisi gerektirmeyen çözümler.",
  keywords: "yapay zeka danışmanlığı, AI otomasyon, chatbot geliştirme, generative AI, iş süreçleri otomasyonu, AI içerik üretimi",
};

const services = [
  {
    icon: Bot,
    title: "AI Chatbot Geliştirme",
    description: "Müşteri hizmetleri ve satış süreçleriniz için akıllı chatbot çözümleri. 7/24 müşteri desteği sağlayın.",
    features: ["Müşteri Hizmetleri Botu", "Satış Asistanı", "FAQ Otomasyonu", "Çok Kanallı Entegrasyon"]
  },
  {
    icon: Sparkles,
    title: "AI İçerik Üretimi",
    description: "Pazarlama içeriklerinizi AI ile hızlandırın. Blog yazıları, sosyal medya içerikleri ve ürün açıklamaları.",
    features: ["Blog İçeriği", "Sosyal Medya", "Ürün Açıklamaları", "E-posta Pazarlama"]
  },
  {
    icon: Zap,
    title: "İş Süreçleri Otomasyonu",
    description: "Tekrarlayan görevleri otomatize edin. No-code araçlarla hızlı implementasyon.",
    features: ["Workflow Otomasyonu", "Veri İşleme", "Raporlama", "Entegrasyonlar"]
  },
  {
    icon: Settings,
    title: "AI Strateji Danışmanlığı",
    description: "İşletmeniz için AI yol haritası oluşturuyorum. Hangi süreçlerde AI kullanılmalı, nasıl başlanmalı?",
    features: ["AI Olgunluk Analizi", "Fırsat Tespiti", "Yol Haritası", "Eğitim"]
  }
];

const useCases = [
  {
    title: "E-ticaret",
    description: "Ürün açıklamaları, müşteri desteği chatbotu, kişiselleştirilmiş öneriler"
  },
  {
    title: "Pazarlama",
    description: "İçerik üretimi, kampanya metinleri, A/B test varyasyonları"
  },
  {
    title: "Müşteri Hizmetleri",
    description: "7/24 chatbot desteği, ticket otomasyonu, FAQ yönetimi"
  },
  {
    title: "İnsan Kaynakları",
    description: "CV tarama, aday ön eleme, onboarding otomasyonu"
  }
];

const faqs = [
  {
    question: "Yapay zeka çözümleri için kod bilgisi gerekli mi?",
    answer: "Hayır, sunduğum çözümlerin çoğu no-code veya low-code araçlarla uygulanıyor. Teknik ekibiniz olmasa bile AI çözümlerinden faydalanabilirsiniz. Kurulum ve eğitim sürecinde tam destek sağlıyorum."
  },
  {
    question: "AI chatbot ne kadar sürede hazır olur?",
    answer: "Basit bir FAQ chatbotu 1-2 haftada, daha kapsamlı bir müşteri hizmetleri botu 3-4 haftada hazır olabilir. Süre, entegrasyon gereksinimleri ve içerik miktarına göre değişir."
  },
  {
    question: "Hangi AI araçlarını kullanıyorsunuz?",
    answer: "OpenAI (GPT-4), Claude, Midjourney gibi lider AI modellerini kullanıyorum. Ayrıca Make, Zapier, n8n gibi otomasyon araçlarıyla entegrasyonlar yapıyorum. İhtiyacınıza en uygun araç kombinasyonunu belirliyoruz."
  },
  {
    question: "AI çözümlerinin maliyeti nedir?",
    answer: "Maliyet proje kapsamına göre değişir. Basit chatbot projeleri 10.000 TL'den başlarken, kapsamlı otomasyon projeleri daha yüksek bütçe gerektirebilir. Ayrıca AI araçlarının aylık kullanım maliyetleri de değerlendirilmeli."
  },
  {
    question: "Mevcut sistemlerimle entegre olabilir mi?",
    answer: "Evet, çoğu CRM, e-ticaret platformu ve iş uygulamasıyla entegrasyon mümkün. Kullandığınız sistemleri değerlendirip en uygun entegrasyon yöntemini belirliyoruz."
  }
];

export default function YapayZekaCozumleriPage() {
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
              <span className="text-white">Yapay Zeka Çözümleri</span>
            </nav>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-gradient">Yapay Zeka</span>{" "}
              Çözümleri
            </h1>

            <p className="text-xl text-primary-300 mb-8 leading-relaxed">
              İşletmeniz için pratik AI çözümleri. Chatbot geliştirme, içerik üretimi ve iş süreçleri 
              otomasyonu ile verimliliğinizi artırın. Kod bilgisi gerektirmeyen, hızlı uygulanabilir çözümler.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-2 text-primary-300">
                <CheckCircle2 className="w-5 h-5 text-accent-400" />
                <span>No-Code Çözümler</span>
              </div>
              <div className="flex items-center gap-2 text-primary-300">
                <CheckCircle2 className="w-5 h-5 text-accent-400" />
                <span>Hızlı Implementasyon</span>
              </div>
              <div className="flex items-center gap-2 text-primary-300">
                <CheckCircle2 className="w-5 h-5 text-accent-400" />
                <span>Tam Destek</span>
              </div>
            </div>

            <Link href="/iletisim" className="btn-primary group">
              AI Fırsatlarını Keşfet
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
              AI{" "}
              <span className="text-gradient">Hizmetlerim</span>
            </h2>
            <p className="text-primary-300 max-w-2xl mx-auto">
              Karmaşık teknolojileri basit, uygulanabilir çözümlere dönüştürüyorum.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-surface-darker/50 border border-surface-border rounded-2xl p-6 hover:border-accent-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-primary-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
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

      {/* Use Cases */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Kullanım{" "}
              <span className="text-gradient">Alanları</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-surface-card/50 border border-surface-border rounded-xl p-5 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-primary-300 text-sm">{useCase.description}</p>
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
              AI ile İşinizi Dönüştürün
            </h2>
            <p className="text-xl text-primary-300 mb-8">
              İşletmeniz için AI fırsatlarını birlikte keşfedelim. İlk görüşme ücretsiz.
            </p>
            <Link href="/iletisim" className="btn-primary group text-lg px-8 py-4">
              Ücretsiz AI Danışmanlığı
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
            "name": "Yapay Zeka Çözümleri",
            "provider": { "@type": "Person", "name": "Tonguç Karaçay" },
            "description": "İşletmeler için AI chatbot, içerik üretimi ve iş süreçleri otomasyon hizmeti.",
            "serviceType": ["AI Chatbot", "AI İçerik Üretimi", "İş Süreçleri Otomasyonu", "AI Danışmanlık"]
          })
        }}
      />
    </main>
  );
}
