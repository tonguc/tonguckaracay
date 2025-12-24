import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Layers, 
  MousePointer2, 
  BarChart3,
  Sparkles,
  Target,
  Zap,
  MessageSquare
} from "lucide-react";

export const metadata: Metadata = {
  title: "UI/UX Tasarım Hizmeti | 25+ Yıl Deneyim | Tonguç Karaçay",
  description: "Sabancı, Borusan, MNG gibi Türkiye'nin önde gelen markalarına UI/UX tasarım hizmeti. 25+ yıl deneyimle kullanıcı odaklı, dönüşüm optimizasyonlu arayüz tasarımı.",
  keywords: "UI UX tasarım, kullanıcı deneyimi tasarımı, arayüz tasarımı, UX tasarım danışmanlığı, web sitesi UX, mobil uygulama UI",
  openGraph: {
    title: "UI/UX Tasarım Hizmeti | 25+ Yıl Deneyim | Tonguç Karaçay",
    description: "Sabancı, Borusan, MNG gibi Türkiye'nin önde gelen markalarına UI/UX tasarım hizmeti.",
    type: "website",
  },
};

const services = [
  {
    icon: Users,
    title: "Kullanıcı Araştırması",
    description: "Hedef kitlenizi derinlemesine anlıyorum. Kullanıcı görüşmeleri, anketler ve davranış analizleri ile gerçek ihtiyaçları ortaya çıkarıyorum.",
    features: ["Kullanıcı Görüşmeleri", "Persona Oluşturma", "Kullanıcı Yolculuğu Haritası"]
  },
  {
    icon: Layers,
    title: "Wireframe & Prototip",
    description: "Fikirleri somut hale getiriyorum. Düşük ve yüksek sadakatli prototipler ile tasarımı kodlamadan önce test ediyorum.",
    features: ["Düşük Sadakatli Wireframe", "Yüksek Sadakatli Prototip", "Etkileşimli Demo"]
  },
  {
    icon: Sparkles,
    title: "Arayüz Tasarımı (UI)",
    description: "Markanızı yansıtan, modern ve estetik arayüzler tasarlıyorum. Tipografi, renk ve görsel hiyerarşi ile dikkat çeken tasarımlar.",
    features: ["Görsel Tasarım Sistemi", "Responsive Tasarım", "Marka Uyumu"]
  },
  {
    icon: MousePointer2,
    title: "Kullanılabilirlik Testi",
    description: "Tasarımların gerçek kullanıcılarla test edilmesi. Sorunları erken tespit edip, kullanıcı odaklı iyileştirmeler yapıyorum.",
    features: ["A/B Testleri", "Kullanıcı Testleri", "Heatmap Analizi"]
  },
  {
    icon: BarChart3,
    title: "Dönüşüm Optimizasyonu",
    description: "Sadece güzel değil, dönüşüm sağlayan tasarımlar. CTA yerleşimi, form optimizasyonu ve kullanıcı akışı ile satışlarınızı artırıyorum.",
    features: ["CRO Stratejisi", "Form Optimizasyonu", "Funnel Analizi"]
  },
  {
    icon: Target,
    title: "Tasarım Sistemi",
    description: "Tutarlı ve ölçeklenebilir tasarım sistemleri oluşturuyorum. Bileşen kütüphanesi ve stil rehberi ile geliştirme sürecini hızlandırıyorum.",
    features: ["Component Library", "Style Guide", "Design Tokens"]
  }
];

const process = [
  {
    step: "01",
    title: "Keşif & Analiz",
    description: "İşletmenizi, hedef kitlenizi ve rakiplerinizi analiz ediyorum. Mevcut durumu değerlendirip fırsatları belirliyorum.",
    duration: "1-2 Hafta"
  },
  {
    step: "02",
    title: "Strateji & Planlama",
    description: "Kullanıcı araştırması sonuçlarına göre UX stratejisi oluşturuyorum. Bilgi mimarisi ve kullanıcı akışlarını planlıyorum.",
    duration: "1-2 Hafta"
  },
  {
    step: "03",
    title: "Tasarım & Prototip",
    description: "Wireframe'lerden yüksek sadakatli tasarımlara ilerliyorum. Etkileşimli prototipler ile tasarımı görselleştiriyorum.",
    duration: "2-4 Hafta"
  },
  {
    step: "04",
    title: "Test & İterasyon",
    description: "Tasarımları gerçek kullanıcılarla test ediyorum. Geri bildirimlere göre iyileştirmeler yapıyorum.",
    duration: "1-2 Hafta"
  },
  {
    step: "05",
    title: "Teslim & Destek",
    description: "Geliştirme ekibine detaylı tasarım dosyaları ve dokümantasyon teslim ediyorum. Uygulama sürecinde destek sağlıyorum.",
    duration: "Sürekli"
  }
];

const brands = [
  "Sabancı Holding",
  "Borusan Otomotiv", 
  "MNG Holding",
  "Filli Boya",
  "Sabah",
  "ATV",
  "Star TV",
  "24 TV",
  "Fotomaç",
  "Akşam",
  "Lig Radyo"
];

const faqs = [
  {
    question: "UI ve UX tasarım arasındaki fark nedir?",
    answer: "UI (User Interface) kullanıcı arayüzü tasarımıdır - butonlar, renkler, tipografi gibi görsel öğelerle ilgilenir. UX (User Experience) ise kullanıcı deneyimi tasarımıdır - kullanıcının ürünle nasıl etkileşime girdiği, akışlar ve kullanılabilirlik ile ilgilenir. İkisi birlikte çalışarak başarılı dijital ürünler ortaya çıkarır."
  },
  {
    question: "Bir UI/UX tasarım projesi ne kadar sürer?",
    answer: "Proje kapsamına göre değişir. Basit bir web sitesi yeniden tasarımı 4-6 hafta sürerken, kapsamlı bir mobil uygulama projesi 8-12 hafta sürebilir. İlk görüşmede projenizin kapsamını değerlendirip size net bir zaman çizelgesi sunuyorum."
  },
  {
    question: "UI/UX tasarım hizmeti maliyeti nedir?",
    answer: "Fiyatlandırma proje kapsamına, sayfa/ekran sayısına ve gerekli araştırma derinliğine göre belirlenir. Her proje için özel teklif hazırlıyorum. Ücretsiz ön görüşme ile projenizi değerlendirebiliriz."
  },
  {
    question: "Hangi sektörlere hizmet veriyorsunuz?",
    answer: "25+ yıllık deneyimim boyunca medya, otomotiv, holding, boya/kimya, finans, e-ticaret ve teknoloji sektörlerinde projeler tamamladım. Sektör fark etmeksizin, kullanıcı odaklı tasarım prensipleri her alanda uygulanabilir."
  },
  {
    question: "Tasarım sürecine ne kadar dahil olacağım?",
    answer: "Aktif katılımınız projenin başarısı için çok önemli. Keşif aşamasında detaylı görüşmeler, tasarım aşamasında düzenli geri bildirim toplantıları ve test aşamasında onay süreçleri ile birlikte çalışıyoruz."
  },
  {
    question: "Mevcut web sitem/uygulamamı yeniden tasarlayabilir misiniz?",
    answer: "Evet, mevcut dijital ürünlerinizi analiz edip UX sorunlarını tespit ediyorum. Yeniden tasarım (redesign) projelerinde mevcut kullanıcı verilerini ve geri bildirimleri de değerlendirerek daha başarılı sonuçlar elde ediyoruz."
  },
  {
    question: "Tasarımlar geliştirme ekibime nasıl teslim edilir?",
    answer: "Figma üzerinden organize edilmiş tasarım dosyaları, bileşen kütüphanesi, stil rehberi ve gerekli tüm asset'ler teslim ediyorum. Geliştirme sürecinde ekibinizle doğrudan iletişim kurarak soruları yanıtlıyorum."
  }
];

export default function UIUXTasarimPage() {
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
              <span className="text-white">UI/UX Tasarım</span>
            </nav>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Kullanıcı Odaklı{" "}
              <span className="text-gradient">UI/UX Tasarım</span>{" "}
              Hizmeti
            </h1>

            <p className="text-xl text-primary-300 mb-8 leading-relaxed">
              25+ yıllık deneyimimle Türkiye'nin önde gelen markalarına arayüz tasarımı ve 
              kullanıcı deneyimi danışmanlığı sunuyorum. Sadece güzel değil, dönüşüm sağlayan 
              tasarımlar yapıyorum.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-2 text-primary-300">
                <CheckCircle2 className="w-5 h-5 text-accent-400" />
                <span>25+ Yıl Deneyim</span>
              </div>
              <div className="flex items-center gap-2 text-primary-300">
                <CheckCircle2 className="w-5 h-5 text-accent-400" />
                <span>Kurumsal Referanslar</span>
              </div>
              <div className="flex items-center gap-2 text-primary-300">
                <CheckCircle2 className="w-5 h-5 text-accent-400" />
                <span>Dönüşüm Odaklı</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/iletisim" className="btn-primary group">
                Ücretsiz Görüşme
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#süreç" className="btn-secondary">
                Çalışma Sürecini Gör
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-surface-card/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
              Web Siteniz veya Uygulamanız Dönüşüm Sağlamıyor mu?
            </h2>
            <p className="text-primary-300 text-lg leading-relaxed mb-8">
              Ziyaretçiler sitenize geliyor ama hemen çıkıyor. Formlar doldurulmuyor. 
              Satış funnel'ı tamamlanmıyor. Bunların hepsi kötü kullanıcı deneyiminin belirtileri. 
              İyi bir UI/UX tasarımı ile bu sorunları çözebiliriz.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-surface-card/50 border border-surface-border rounded-xl p-5">
                <div className="text-3xl font-bold text-accent-400 mb-2">%70</div>
                <p className="text-primary-300 text-sm">Kullanıcıların kötü UX nedeniyle siteleri terk etme oranı</p>
              </div>
              <div className="bg-surface-card/50 border border-surface-border rounded-xl p-5">
                <div className="text-3xl font-bold text-accent-400 mb-2">5 sn</div>
                <p className="text-primary-300 text-sm">Kullanıcıların siteniz hakkında karar vermesi için geçen süre</p>
              </div>
              <div className="bg-surface-card/50 border border-surface-border rounded-xl p-5">
                <div className="text-3xl font-bold text-accent-400 mb-2">%400</div>
                <p className="text-primary-300 text-sm">İyi UX tasarımının dönüşüm oranına potansiyel etkisi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              UI/UX Tasarım{" "}
              <span className="text-gradient">Hizmetlerim</span>
            </h2>
            <p className="text-primary-300 max-w-2xl mx-auto">
              Araştırmadan tasarıma, testten teslime kadar uçtan uca UI/UX hizmeti sunuyorum.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-surface-card/50 border border-surface-border rounded-2xl p-6 hover:border-accent-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center mb-4 group-hover:bg-accent-500/30 transition-colors">
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
                    <span 
                      key={i}
                      className="px-2 py-1 text-xs text-primary-300 bg-surface-darker rounded-md"
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
      <section id="süreç" className="py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Çalışma{" "}
              <span className="text-gradient">Sürecim</span>
            </h2>
            <p className="text-primary-300 max-w-2xl mx-auto">
              Her projeyi sistematik bir süreçle yürütüyorum. Böylece sonuçlar öngörülebilir ve başarılı oluyor.
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

      {/* Why Me Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">
                Neden{" "}
                <span className="text-gradient">Benimle Çalışmalısınız?</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-500/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">25+ Yıl Sektör Deneyimi</h3>
                    <p className="text-primary-300 text-sm">
                      Türkiye'nin en büyük medya grupları ve kurumsal şirketlerinde edindiğim deneyimi sizin projenize taşıyorum.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-500/20 flex items-center justify-center">
                    <Target className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">UX + SEO Kombinasyonu</h3>
                    <p className="text-primary-300 text-sm">
                      Hem tasarımcı hem SEO uzmanı olarak, arama motorlarında da iyi performans gösteren kullanıcı deneyimleri tasarlıyorum.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-500/20 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Dönüşüm Odaklı Yaklaşım</h3>
                    <p className="text-primary-300 text-sm">
                      Sadece güzel tasarımlar değil, iş hedeflerinize ulaşmanızı sağlayan, ölçülebilir sonuçlar üreten tasarımlar yapıyorum.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-500/20 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Doğrudan İletişim</h3>
                    <p className="text-primary-300 text-sm">
                      Ajans değilim, bireysel çalışıyorum. Projenizle bizzat ben ilgileniyorum. Aracı yok, doğrudan iletişim var.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-surface-card border border-surface-border rounded-2xl p-8">
                <Image
                  src="/tonguc-karacay.jpg"
                  alt="Tonguç Karaçay - UI/UX Tasarımcı"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-xl mb-6"
                />
                <div className="text-center">
                  <h3 className="text-xl font-display font-bold text-white mb-1">Tonguç Karaçay</h3>
                  <p className="text-accent-400 mb-4">UI/UX Tasarımcı & SEO Uzmanı</p>
                  <p className="text-primary-300 text-sm">
                    "Her tasarımın arkasında bir kullanıcı var. Onların ihtiyaçlarını anlamak, başarılı tasarımın temelidir."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-surface-card/30">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-display font-bold text-white mb-3">
              Çalıştığım Markalar
            </h2>
            <p className="text-primary-300">
              Türkiye'nin önde gelen kurumsal şirketlerine tasarım hizmeti verdim
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((brand, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-surface-card/50 border border-surface-border rounded-lg text-primary-300 hover:border-accent-500/50 hover:text-white transition-all"
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
              UI/UX tasarım hizmeti hakkında merak edilenler
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details 
                key={index}
                className="group bg-surface-card/50 border border-surface-border rounded-xl overflow-hidden"
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
              Projenizi Konuşalım
            </h2>
            <p className="text-xl text-primary-300 mb-8">
              UI/UX tasarım ihtiyacınızı değerlendirelim. İlk görüşme ücretsiz.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/iletisim" className="btn-primary group text-lg px-8 py-4">
                Ücretsiz Görüşme Talep Et
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
            "name": "UI/UX Tasarım Hizmeti",
            "provider": {
              "@type": "Person",
              "name": "Tonguç Karaçay",
              "jobTitle": "UI/UX Tasarımcı & SEO Uzmanı"
            },
            "description": "Kullanıcı odaklı UI/UX tasarım hizmeti. Wireframe, prototip, kullanıcı araştırması, arayüz tasarımı ve dönüşüm optimizasyonu.",
            "areaServed": ["Türkiye", "Amerika", "Kanada", "Almanya"],
            "serviceType": ["UI Tasarım", "UX Tasarım", "Kullanıcı Araştırması", "Prototipleme", "Dönüşüm Optimizasyonu"]
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
