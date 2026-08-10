import { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from 'next-intl/server';
import { ArrowRight, CheckCircle2 } from "lucide-react";
import LaptopMockup from "@/components/LaptopMockup";
import { FINANCE_OS_ETSY_URL, FINANCE_OS_DEMO_URL } from "@/lib/products/finance-os";

export const metadata: Metadata = {
  title: "Finance OS — Kişisel Bütçe & Net Değer Takibi | Tonguç Karaçay",
  description: "Bütçe, borç ödeme ve net değerinizi tek dosyalık, tamamen çevrimdışı bir uygulamada takip edin. Hesap gerektirmez, verileriniz cihazınızda kalır.",
  keywords: ["bütçe uygulaması", "kişisel finans", "net değer takibi", "borç ödeme planlayıcı", "çevrimdışı bütçe"],
  openGraph: {
    title: "Finance OS — Kişisel Bütçe & Net Değer Takibi",
    description: "Bütçe, borç ödeme ve net değerinizi tek dosyalık, tamamen çevrimdışı bir uygulamada takip edin.",
    type: "website",
    images: ["/products/finance-os/mockup-hero.png"],
  },
};

const trustBadges = [
  "Tek seferlik satın alma", "%100 çevrimdışı çalışır", "Hesap gerektirmez", "Verileriniz cihazınızda kalır",
];

const rows = [
  {
    eyebrow: "AKILLI ÖNCELİKLER",
    title: "Ne yapman gerektiğini tahmin etmene gerek yok",
    body: "Action Center, ayın en önemli 3 şeyini önceliğine göre sıralar — bütçeyi aşan bir kategori, borcu aylar önce kapatacak ekstra bir ödeme, ya da sadece iyi gittiğinin onayı. Rozet yok, oyunlaştırma yok — sadece net bir sonraki adım.",
    points: ["Otomatik önceliklendirme", "Rakamları yorumlar, sadece göstermez"],
    img: "/products/finance-os/mockup-action-center.png",
    imgW: 1455, imgH: 814,
  },
  {
    eyebrow: "BORÇ ÖDEME PLANI",
    title: "Borçtan kurtulma tarihinizi gerçek matematikle görün",
    body: "Snowball veya Avalanche stratejisiyle otomatik ödeme sırası, gerçek APR'a dayalı tahmini borçtan kurtulma tarihi, kredi kartı limit kullanımı — hepsi otomatik hesaplanır. Elle takip yok, tahmin yok.",
    points: ["Gerçek APR bileşik faiz hesabı", "Birden fazla borç, otomatik sıralama"],
    img: "/products/finance-os/mockup-debt.png",
    imgW: 1180, imgH: 660,
  },
  {
    eyebrow: "AYLIK DEĞERLENDİRME",
    title: "Her ay ne olduğunu düz bir dille öğrenin",
    body: "Aylık Değerlendirme, o ay gerçekten ne olduğunu anlatır — harcama plana uydu mu, borç azaldı mı, hedefler ilerledi mi. Hiçbir rakip üründe bu yok; sadece sayı göstermek yerine, o sayının ne anlama geldiğini söyler.",
    points: ["\"Bu ay tek bir şey yapacaksan\" önerisi", "Gelecek ay için somut hedef"],
    img: "/products/finance-os/mockup-review.png",
    imgW: 1180, imgH: 660,
  },
];

const miniFeatures = [
  { title: "Hedefler & Kategoriler", description: "Birikim hedefleri ve kategori bazlı bütçe limitleri, aşan/riskli/güvenli olarak otomatik ayrılır." },
  { title: "12 Para Birimi", description: "USD, EUR, GBP, TRY dahil 12 para birimi arasında anında geçiş." },
  { title: "Karanlık Mod", description: "Göz yormayan koyu tema, tek tıkla açılır kapanır." },
  { title: "JSON Yedekleme", description: "Tüm verinizi tek dosya olarak dışa aktarın, istediğiniz cihaza aktarın." },
];

const faqs = [
  { question: "İnternet bağlantısı gerekiyor mu?", answer: "Hayır. Finance OS tamamen tarayıcınızda çalışır, veriniz cihazınızdaki localStorage'da tutulur. Hiçbir veri sunucuya gönderilmez." },
  { question: "Abonelik var mı?", answer: "Hayır — tek seferlik satın alma, sınırsız kullanım. Aylık ücret veya yenileme yok." },
  { question: "Verilerimi kaybetme riski var mı?", answer: "JSON formatında dışa aktarma (Export Backup) ile istediğiniz zaman tam yedek alabilir, başka bir cihaza aynı şekilde içe aktarabilirsiniz." },
  { question: "Google Sheets/Excel şablonlarından farkı ne?", answer: "Formül kırılması, satır kayması veya kurulum derdi yok — gerçek bir uygulama arayüzü, otomatik hesaplamalar ve borç/net değer mantığı built-in geliyor." },
];

type Props = { params: { locale: string } };

export default function FinanceOSPage({ params: { locale } }: Props) {
  setRequestLocale(locale);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-96 bg-accent-500/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-primary-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/urunler" className="hover:text-white transition-colors">Ürünler</Link>
            <span>/</span>
            <span className="text-white">Finance OS</span>
          </nav>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Paranızın nereye gittiğini <span className="text-gradient">tahmin etmeyi bırakın</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-300 mb-8 leading-relaxed">
              Bütçenizi, borç ödeme planınızı ve net değerinizi tek yerde görün. Hesap yok, abonelik yok — sadece tarayıcınızda çalışan bir dosya, verileriniz hiç sizden çıkmaz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-primary-400">
              {trustBadges.map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-500" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <LaptopMockup src="/products/finance-os/mockup-hero.png" alt="Finance OS Dashboard - Safe to Spend, Cash Flow, Net Worth" width={1180} height={660} priority />
          </div>
        </div>
      </section>

      {/* Feature + proof rows, alternating, equal-size mockups */}
      <section className="py-16 md:py-20 bg-surface-card/30">
        <div className="container-custom space-y-24">
          {rows.map((row, i) => (
            <div key={row.title} className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <LaptopMockup src={row.img} alt={row.title} width={row.imgW} height={row.imgH} />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className="text-accent-400 text-sm font-semibold tracking-wide">{row.eyebrow}</span>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mt-2 mb-4">{row.title}</h2>
                <p className="text-primary-300 leading-relaxed mb-5">{row.body}</p>
                <ul className="space-y-2">
                  {row.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-primary-200">
                      <CheckCircle2 className="w-4 h-4 text-accent-500 flex-shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compact everything-else strip */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {miniFeatures.map((f) => (
              <div key={f.title}>
                <h3 className="text-white font-semibold mb-2">{f.title}</h3>
                <p className="text-primary-400 text-sm">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="section-title mb-4">Nasıl <span className="text-gradient">Çalışır?</span></h2>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:divide-x md:divide-surface-border">
            {[
              { n: "01", t: "İndir & Aç", d: "Tek bir HTML dosyası, tarayıcıda doğrudan açılır." },
              { n: "02", t: "Hesaplarını Ekle", d: "Banka/kredi kartı hesapları ve kategoriler." },
              { n: "03", t: "İşlemleri Logla", d: "Her giriş ilgili hesabı otomatik günceller." },
              { n: "04", t: "Panoyu Takip Et", d: "Dashboard her girişte kendini yeniler." },
            ].map((s) => (
              <div key={s.n} className="flex-1 px-0 md:px-6 first:pl-0">
                <div className="text-accent-500/40 text-3xl font-bold mb-2">{s.n}</div>
                <h3 className="text-white font-semibold mb-1">{s.t}</h3>
                <p className="text-primary-400 text-sm">{s.d}</p>
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
