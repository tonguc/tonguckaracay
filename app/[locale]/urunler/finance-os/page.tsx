import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { setRequestLocale } from 'next-intl/server';
import { ArrowRight, Wallet, TrendingDown, PieChart, Target, ShieldCheck, Download, CheckCircle2 } from "lucide-react";
import { FINANCE_OS_ETSY_URL, FINANCE_OS_DEMO_URL } from "@/lib/products/finance-os";

export const metadata: Metadata = {
  title: "Finance OS — Kişisel Bütçe & Net Değer Takibi | Tonguç Karaçay",
  description: "Bütçe, borç ödeme ve net değerinizi tek dosyalık, tamamen çevrimdışı bir uygulamada takip edin. Hesap gerektirmez, verileriniz cihazınızda kalır.",
  keywords: ["bütçe uygulaması", "kişisel finans", "net değer takibi", "borç ödeme planlayıcı", "çevrimdışı bütçe"],
  openGraph: {
    title: "Finance OS — Kişisel Bütçe & Net Değer Takibi",
    description: "Bütçe, borç ödeme ve net değerinizi tek dosyalık, tamamen çevrimdışı bir uygulamada takip edin.",
    type: "website",
    images: ["/products/finance-os/dashboard.jpg"],
  },
};

const features = [
  {
    icon: Wallet,
    title: "Tek Bakışta Bütçe",
    description: "Bu ay harcanabilir gerçek tutar, nakit akışı ve tasarruf oranı — hepsi tek bir Dashboard'da, elle hesaplama yok."
  },
  {
    icon: TrendingDown,
    title: "Borç Ödeme Planlayıcı",
    description: "Snowball veya Avalanche stratejisiyle otomatik ödeme sırası, gerçek APR'a dayalı tahmini borçtan kurtulma tarihi, kredi kartı limit kullanımı takibi."
  },
  {
    icon: PieChart,
    title: "Tek Bir Net Değer Rakamı",
    description: "Varlıklar ve borçlar otomatik birleşir; her borç ödemesi net değeri yanlışlıkla şişirmeden doğru şekilde yansır."
  },
  {
    icon: Target,
    title: "Hedefler & Kategoriler",
    description: "Birikim hedefleri, kategori bazlı bütçe limitleri, aşan/riskli/güvenli kategoriler otomatik ayrılır."
  },
  {
    icon: ShieldCheck,
    title: "Sakin, Gerçek Tavsiye",
    description: "Her ay 'bu ay ne yapmalıyım' sorusuna düz, oyunlaştırma içermeyen bir dille cevap veren Aylık Değerlendirme."
  },
  {
    icon: Download,
    title: "%100 Yerel, Sıfır Hesap",
    description: "Veriniz sadece cihazınızda — internet bağlantısı, kayıt, abonelik yok. Tek dosya, tarayıcıda çalışır, JSON olarak yedeklenir."
  },
];

const steps = [
  { step: "01", title: "İndir & Aç", description: "Tek bir HTML dosyası — Chrome, Edge veya Safari'de doğrudan açılır, kurulum gerekmez." },
  { step: "02", title: "Hesaplarını Ekle", description: "Banka/kredi kartı hesaplarını, kategorilerini ve varsa mevcut borçlarını gir." },
  { step: "03", title: "İşlemleri Logla", description: "Harcama, gelir, borç ödemesi veya hedef katkısı — her biri ilgili hesabı otomatik günceller." },
  { step: "04", title: "Panoyu Takip Et", description: "Dashboard, Bütçe, Borç ve Raporlar sayfaları her girişte kendini otomatik günceller." },
];

const faqs = [
  {
    question: "İnternet bağlantısı gerekiyor mu?",
    answer: "Hayır. Finance OS tamamen tarayıcınızda çalışır, veriniz cihazınızdaki localStorage'da tutulur. Hiçbir veri sunucuya gönderilmez."
  },
  {
    question: "Abonelik var mı?",
    answer: "Hayır — tek seferlik satın alma, sınırsız kullanım. Aylık ücret veya yenileme yok."
  },
  {
    question: "Verilerimi kaybetme riski var mı?",
    answer: "JSON formatında dışa aktarma (Export Backup) ile istediğiniz zaman tam yedek alabilir, başka bir cihaza aynı şekilde içe aktarabilirsiniz."
  },
  {
    question: "Google Sheets/Excel şablonlarından farkı ne?",
    answer: "Formül kırılması, satır kayması veya kurulum derdi yok — gerçek bir uygulama arayüzü, otomatik hesaplamalar ve borç/net değer mantığı built-in geliyor."
  },
];

type Props = { params: { locale: string } };

export default function FinanceOSPage({ params: { locale } }: Props) {
  setRequestLocale(locale);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-primary-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/urunler" className="hover:text-white transition-colors">Ürünler</Link>
            <span>/</span>
            <span className="text-white">Finance OS</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="text-gradient">Finance OS</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-300 mb-8 leading-relaxed">
                Bütçenizi, borç ödeme planınızı ve net değerinizi tek bir yerde takip edin — hesap yok, abonelik yok, verileriniz sadece sizde kalır.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href={FINANCE_OS_DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn-primary group text-lg">
                  Ücretsiz Demoyu Dene
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                {FINANCE_OS_ETSY_URL ? (
                  <a href={FINANCE_OS_ETSY_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary text-lg">
                    Etsy'de Satın Al
                  </a>
                ) : (
                  <span className="btn-secondary text-lg opacity-50 cursor-not-allowed select-none" aria-disabled="true">
                    Etsy'de Satın Al — Yakında
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-primary-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span>Tek seferlik satın alma</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span>%100 çevrimdışı çalışır</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span>Hesap gerektirmez</span>
                </div>
              </div>
            </div>

            <div className="card overflow-hidden p-0">
              <div className="relative aspect-video">
                <Image src="/products/finance-os/dashboard.jpg" alt="Finance OS Dashboard" fill className="object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots gallery */}
      <section className="py-16 md:py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Uygulamadan <span className="text-gradient">Görüntüler</span></h2>
            <p className="text-primary-300 max-w-2xl mx-auto">Örnek verilerle - gerçek uygulama arayüzünden alınmış ekran görüntüleri.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card overflow-hidden p-0">
              <div className="relative aspect-video">
                <Image src="/products/finance-os/debt.jpg" alt="Finance OS Borç Takibi" fill className="object-cover object-top" />
              </div>
            </div>
            <div className="card overflow-hidden p-0">
              <div className="relative aspect-video">
                <Image src="/products/finance-os/reports.jpg" alt="Finance OS Aylık Değerlendirme" fill className="object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Neler <span className="text-gradient">Yapabilirsiniz?</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="card p-6 hover:border-accent-500/30 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-accent-500/20 flex items-center justify-center mb-4">
                  <f.icon className="w-7 h-7 text-accent-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{f.title}</h3>
                <p className="text-primary-300">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Nasıl <span className="text-gradient">Çalışır?</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="card p-6 relative group hover:border-accent-500/30 transition-colors">
                <div className="absolute top-4 right-4 text-5xl font-bold text-accent-500/10 group-hover:text-accent-500/20 transition-colors">{s.step}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-primary-300">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Sıkça Sorulan <span className="text-gradient">Sorular</span></h2>
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
            Bütçenizi Bugün Kontrol Altına Alın
          </h2>
          <p className="text-primary-300 mb-8 max-w-xl mx-auto">
            Kayıt olmadan, hemen tarayıcınızda deneyin.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={FINANCE_OS_DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn-primary group text-lg">
              Ücretsiz Demoyu Dene
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          })
        }}
      />

      {/* Schema.org Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Finance OS",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "Web Browser",
            "description": "Kişisel bütçe, borç ödeme ve net değer takibi için tek dosyalık, çevrimdışı çalışan uygulama.",
            "offers": FINANCE_OS_ETSY_URL ? { "@type": "Offer", "url": FINANCE_OS_ETSY_URL } : undefined,
          })
        }}
      />
    </main>
  );
}
