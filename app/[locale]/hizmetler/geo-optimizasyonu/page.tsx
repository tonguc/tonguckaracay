import { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from 'next-intl/server';
import { ArrowRight, CheckCircle2, Sparkles, FileSearch, Quote, ListChecks, ShieldCheck, BarChart3, Clock, Users, AlertTriangle, Building2, ShoppingCart, Briefcase, HeartPulse, Scale, Utensils } from "lucide-react";

export const metadata: Metadata = {
  title: "GEO Danışmanlığı | ChatGPT'de Görünür Olun | Tonguç Karaçay",
  description: "Markanızın ChatGPT, Gemini, Perplexity ve Google AI Overviews'da kaynak gösterilip önerilmesi için GEO danışmanlığı. Yapay zeka SEO'su ile görünürlük.",
  keywords: ["GEO", "Generative Engine Optimization", "AI arama optimizasyonu", "ChatGPT görünürlük", "yapay zeka SEO", "AI Overviews", "Perplexity optimizasyon"],
  alternates: {
    canonical: "https://tonguckaracay.com/hizmetler/geo-optimizasyonu",
    languages: {
      tr: "https://tonguckaracay.com/hizmetler/geo-optimizasyonu",
      en: "https://tonguckaracay.com/en/services/geo-optimization",
      "x-default": "https://tonguckaracay.com/en/services/geo-optimization",
    },
  },
  openGraph: {
    title: "GEO Danışmanlığı | ChatGPT'de Görünür Olun | Tonguç Karaçay",
    description: "Markanızın ChatGPT, Gemini, Perplexity ve Google AI Overviews'da kaynak gösterilip önerilmesi için GEO danışmanlığı. Yapay zeka SEO'su ile görünürlük.",
    type: "website",
    url: "https://tonguckaracay.com/hizmetler/geo-optimizasyonu",
  },
};

const services = [
  {
    icon: FileSearch,
    title: "AI Görünürlük Analizi",
    description: "Markanızın ChatGPT, Perplexity, Google AI Overviews ve Claude'da hangi sorgularda (hiç) göründüğünün tespiti — mevcut durumun net bir fotoğrafı.",
  },
  {
    icon: Quote,
    title: "Kaynak Gösterilebilir İçerik",
    description: "AI modellerinin alıntılamayı sevdiği yapı: net tanımlar, doğrudan cevaplar, kanıt ve kaynak içeren, kolayca özetlenebilir içerik mimarisi.",
  },
  {
    icon: ListChecks,
    title: "Yapılandırılmış Veri & Şema",
    description: "FAQ, HowTo ve Article şemaları ile içeriğin makineler tarafından doğru ayrıştırılması; llms.txt ve AI crawler izinlerinin doğru yapılandırılması.",
  },
  {
    icon: ShieldCheck,
    title: "Varlık & Otorite Sinyalleri",
    description: "Wikipedia, LinkedIn, sektör dizinleri ve tutarlı NAP/varlık bilgisi ile markanızın 'kim olduğunun' AI modelleri için netleştirilmesi.",
  },
  {
    icon: BarChart3,
    title: "AI Bahsi İzleme",
    description: "Markanızın AI sohbet motorlarında ne sıklıkla, hangi bağlamda ve rakiplere kıyasla nasıl anıldığının düzenli takibi ve raporlanması.",
  },
  {
    icon: Sparkles,
    title: "Geleneksel SEO ile Entegrasyon",
    description: "GEO, SEO'nun yerine değil yanına eklenir. Google sıralamalarını koruyarak AI arama motorlarında da görünürlük kazanma stratejisi.",
  },
];

const process = [
  { step: "01", title: "AI Görünürlük Denetimi", description: "Sektörünüzdeki kilit sorgularda hangi markaların AI araçları tarafından öneriliyor olduğunun analizi." },
  { step: "02", title: "Boşluk Analizi", description: "Rakiplerinizin kaynak gösterildiği ama sizin gösterilmediğiniz noktaların tespiti." },
  { step: "03", title: "İçerik & Yapı Optimizasyonu", description: "Net, alıntılanabilir, kanıt destekli içerik yeniden yapılandırması." },
  { step: "04", title: "Teknik & Şema Uygulaması", description: "Structured data, llms.txt ve AI crawler erişim ayarlarının uygulanması." },
  { step: "05", title: "Otorite İnşası", description: "Üçüncü taraf kaynaklarda ve varlık veritabanlarında tutarlı, doğrulanabilir marka varlığı." },
  { step: "06", title: "İzleme & İterasyon", description: "Aylık AI bahis takibi ve modellerin güncellenen davranışına göre strateji revizyonu." },
];

const industries = [
  { icon: ShoppingCart, name: "E-Ticaret", desc: "Ürün karşılaştırma sorgularında önerilme" },
  { icon: Building2, name: "Kurumsal", desc: "Marka otoritesi ve doğru bilgi temsili" },
  { icon: Briefcase, name: "B2B & SaaS", desc: "Araç karşılaştırma ve 'en iyi X' sorguları" },
  { icon: HeartPulse, name: "Sağlık", desc: "Güvenilir kaynak olarak referans gösterilme" },
  { icon: Scale, name: "Hukuk", desc: "Uzmanlık alanı sorularında doğru temsil" },
  { icon: Utensils, name: "Yerel İşletme", desc: "\"Yakınımda X\" tarzı AI sohbet sorguları" },
];

const advantages = [
  {
    title: "Erken Hareket Avantajı",
    description: "GEO henüz yeni bir alan — çoğu rakibiniz bunu hiç düşünmüyor. Şimdi başlamak, rakiplerin fark etmesinden önce kaynak gösterilme alışkanlığı kazanmak demek.",
  },
  {
    title: "Gerçekçi Beklentiler",
    description: "AI motorlarının hangi kaynağı ne zaman göstereceği tam kontrol edilemez. \"Garanti sıralama\" satmıyorum — ölçülebilir görünürlük artışı hedefliyorum.",
  },
  {
    title: "SEO + GEO Bütünlüğü",
    description: "GEO'yu SEO'dan kopararak değil, mevcut arama stratejinize entegre ederek uyguluyorum — ikisi aynı içerik temelinden besleniyor.",
  },
  {
    title: "Ölçülebilir Takip",
    description: "Belirlediğimiz kilit sorgularda markanızın AI cevaplarında görünüp görünmediğini düzenli olarak test edip raporluyorum.",
  },
];

const faqs = [
  {
    question: "GEO (Generative Engine Optimization) nedir?",
    answer: "GEO, markanızın ChatGPT, Perplexity, Google AI Overviews, Claude gibi yapay zeka destekli arama ve sohbet araçlarının verdiği cevaplarda kaynak olarak gösterilmesini veya önerilmesini hedefleyen optimizasyon çalışmasıdır. Geleneksel SEO Google sıralamasını hedeflerken, GEO AI modellerinin 'hangi kaynağı güvenilir bulduğunu' hedefler.",
  },
  {
    question: "GEO, SEO'nun yerini mi alıyor?",
    answer: "Hayır. Google aramaları hâlâ büyük trafik kaynağı ve SEO gerekliliğini korumaya devam ediyor. GEO, aynı içerik temelini AI motorları için de optimize eden ek bir katman — ikisi birlikte, rakip olarak değil, tamamlayıcı olarak çalışıyor.",
  },
  {
    question: "GEO sonuçları nasıl ölçülüyor?",
    answer: "Belirlenen kilit sorguları düzenli aralıklarla ChatGPT, Perplexity ve Google AI Overviews'da test ederek markanızın kaynak gösterilme sıklığını ve bağlamını takip ediyorum. Google Search Console'daki AI Overview görünürlük verileri de bu takibin bir parçası.",
  },
  {
    question: "Her işletme için GEO gerekli mi?",
    answer: "Kullanıcıların satın alma kararı öncesi araştırma yaptığı, karşılaştırma yapılan veya uzmanlık/güven gerektiren sektörlerde (B2B, sağlık, hukuk, teknoloji, e-ticaret) GEO'nun etkisi daha belirgin. Ücretsiz görüşmede sizin sektörünüz için gerçekten öncelik mi yoksa daha sonraya mı bırakılmalı, birlikte değerlendiriyoruz.",
  },
  {
    question: "GEO sonuçları ne kadar sürede görülür?",
    answer: "AI modelleri eğitim ve indeksleme verilerini SEO'dan farklı frekanslarda günceller; bazı değişiklikler haftalar içinde yansırken bazı modellerde daha uzun sürebilir. Genel olarak 2-4 ay içinde ilk görünürlük değişikliklerini takip etmeye başlıyoruz.",
  },
];

type Props = { params: { locale: string } };

export default function GeoOptimizasyonuPage({ params: { locale } }: Props) {
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
            <span className="text-white">GEO Optimizasyonu</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 text-accent-400 text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                Yeni Nesil Görünürlük
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="text-gradient">GEO</span> Danışmanlığı: Yapay Zeka Aramalarında Görünürlük
              </h1>
              <p className="text-lg md:text-xl text-primary-300 mb-8 leading-relaxed">
                ChatGPT, Perplexity, Google AI Overviews ve Claude'a soru sorulduğunda markanız kaynak gösteriliyor mu? Kullanıcılar artık arama yapmadan önce doğrudan yapay zekaya soruyor — Generative Engine Optimization (GEO) ile bu yeni arama katmanında görünür oluyorsunuz.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/iletisim" className="btn-primary group text-lg">
                  Ücretsiz AI Görünürlük Analizi
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#süreç" className="btn-secondary text-lg">
                  Çalışma Sürecim
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-primary-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span>25+ Yıl Deneyim</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span>SEO ile Entegre</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span>Ölçülebilir Takip</span>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <h2 className="text-xl font-semibold text-white mb-4">Neden Şimdi?</h2>
              <p className="text-primary-300 text-sm leading-relaxed mb-4">
                Kullanıcı davranışı hızla değişiyor: birçok arama artık Google kutusu yerine doğrudan bir AI sohbet penceresinde başlıyor. Bu kanalda kaynak gösterilmeyen markalar, o soruyu soran kullanıcı için görünmez kalıyor — rakip Google'da 5. sırada olsa bile.
              </p>
              <p className="text-primary-300 text-sm leading-relaxed">
                GEO henüz yeni bir alan olduğu için çoğu işletme bunu hiç düşünmüyor. Erken başlayanlar, AI modelleri "güvenilir kaynak" alışkanlığını oluştururken bu konumu kazanıyor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Hizmet <span className="text-gradient">Kapsamı</span>
            </h2>
            <p className="text-primary-300 max-w-2xl mx-auto">
              AI görünürlük analizinden içerik yapılandırmasına, uçtan uca GEO çalışması.
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
      <section id="süreç" className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Çalışma <span className="text-gradient">Sürecim</span>
            </h2>
            <p className="text-primary-300 max-w-2xl mx-auto">
              GEO danışmanlığında izlediğim yapılandırılmış süreç.
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">
                Hangi Sektörlerde <span className="text-gradient">Daha Etkili?</span>
              </h2>
              <p className="text-primary-300 mb-8">
                Kullanıcıların karar öncesi araştırma yaptığı, karşılaştırma yaptığı veya uzmanlık aradığı sektörlerde GEO'nun etkisi daha hızlı görünür.
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
              <h3 className="text-xl font-semibold text-white mb-6">Takip Ettiğim AI Platformları</h3>
              <div className="flex flex-wrap gap-3">
                {["ChatGPT", "Perplexity", "Google AI Overviews", "Claude", "Copilot", "Gemini"].map((platform, i) => (
                  <span key={i} className="px-4 py-2 bg-surface-border/50 rounded-full text-primary-200 text-sm">
                    {platform}
                  </span>
                ))}
              </div>
              <p className="text-primary-400 text-sm mt-6">
                Her platformun kaynak seçme davranışı farklı — analiz ve stratejiyi buna göre çeşitlendiriyorum.
              </p>
            </div>
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
              Yeni bir alanda gerçekçi, ölçülebilir bir yaklaşım.
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
                <h3 className="text-xl font-semibold text-white mb-2">SEO ile Birlikte Daha Güçlü</h3>
                <p className="text-primary-300">
                  GEO'yu, mevcut <Link href="/hizmetler/seo-danismanligi" className="text-accent-400 hover:underline">SEO danışmanlığı</Link> çalışmamın üzerine inşa ediyorum. Aynı içerik ve teknik temel, hem Google sıralamalarını hem AI kaynak gösterimini besliyor — ayrı bütçe, ayrı strateji gerekmiyor.
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
      <section className="py-16 md:py-20 bg-gradient-to-br from-accent-500/10 to-indigo-500/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            AI Görünürlüğünüzü Değerlendirelim
          </h2>
          <p className="text-primary-300 mb-8 max-w-xl mx-auto">
            Ücretsiz görüşmede markanızın bugün ChatGPT ve Perplexity gibi araçlarda ne durumda olduğuna birlikte bakalım.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/iletisim" className="btn-primary group text-lg">
              Ücretsiz AI Görünürlük Analizi
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
                "text": faq.answer,
              },
            })),
          }),
        }}
      />

      {/* Schema.org Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "url": "https://tonguckaracay.com/hizmetler/geo-optimizasyonu",
            "name": "GEO Danışmanlığı",
            "description": "ChatGPT, Perplexity, Google AI Overviews ve Claude gibi yapay zeka araçlarında markanızın kaynak gösterilmesi için GEO danışmanlığı.",
            "provider": {
              "@type": "Person",
              "name": "Tonguç Karaçay",
              "url": "https://tonguckaracay.com",
            },
            "areaServed": "TR",
            "serviceType": "Generative Engine Optimization",
          }),
        }}
      />
    </main>
  );
}
