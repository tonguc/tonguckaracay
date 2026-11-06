import { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from 'next-intl/server';
import { aiProjects, findAiProject, type AiProject } from "@/lib/ai-projects";
import {
  ArrowRight,
  Sparkles,
  Stethoscope,
  Home,
  ShoppingBag,
  Megaphone,
  Scissors,
  Rocket,
  CheckCircle2,
  XCircle,
  Users,
  Building2,
  Brain,
  Workflow,
  Database,
  Shield,
  Target,
  Zap,
  Lightbulb,
} from "lucide-react";

const WHATSAPP_NUMBER = "905323824838";

const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export const metadata: Metadata = {
  title: "Yapay Zeka Eğitimi (Bireysel & Kurumsal) | Tonguç Karaçay",
  description: "İşinize özel yapay zeka eğitimi: ChatGPT, Claude ve otomasyonla içerik, reklam ve operasyonu hızlandıran sistemler kurmayı öğrenin. Kurumsal ve bireysel.",
  keywords: ["AI eğitimi", "yapay zeka eğitimi", "ChatGPT eğitimi", "kurumsal AI eğitimi", "sektörel yapay zeka", "AI sistemi kurmayı öğren"],
  alternates: {
    canonical: 'https://tonguckaracay.com/ai-egitimi',
    languages: {
      'tr': 'https://tonguckaracay.com/ai-egitimi',
      'en': 'https://tonguckaracay.com/en/ai-training',
    },
  },
  openGraph: {
    title: "Yapay Zeka Eğitimi (Bireysel & Kurumsal) | Tonguç Karaçay",
    description: "İşinize özel yapay zeka eğitimi: ChatGPT, Claude ve otomasyonla içerik, reklam ve operasyonu hızlandıran sistemler kurmayı öğrenin. Kurumsal ve bireysel.",
    url: 'https://tonguckaracay.com/ai-egitimi',
    type: 'website',
  },
};

const sectors = [
  {
    icon: Stethoscope,
    name: "Doktorlar & Klinikler",
    output: "Haftalık içerik, hasta eğitim videosu ve görsel üretim sistemleri kurmayı öğren.",
    anchor: "doktorlar",
  },
  {
    icon: Home,
    name: "Emlak & Gayrimenkul",
    output: "İlan metni, sanal staging ve müşteri takip akışlarını yarı-otomatik hale getirmeyi öğren.",
    anchor: "emlak",
  },
  {
    icon: ShoppingBag,
    name: "E-Ticaret KOBİ",
    output: "Ürün açıklaması ve reklam kreatiflerini üretilebilir hale getirmeyi öğren.",
    anchor: "eticaret",
  },
  {
    icon: Megaphone,
    name: "Pazarlama Ajansları",
    output: "Brief'ten kampanyaya, pitch deck'ten varyanta üretim akışı kurmayı öğren.",
    anchor: "ajanslar",
  },
  {
    icon: Scissors,
    name: "Güzellik & Estetik Klinik",
    output: "Before/after kurgu, içerik takvimi ve yorum analiz akışı kurmayı öğren.",
    anchor: "guzellik",
  },
  {
    icon: Rocket,
    name: "SaaS Girişimcileri",
    output: "Landing page metni, blog ve müşteri destek taslaklarını yarı-otomatik üretmeyi öğren.",
    anchor: "saas",
  },
];

const curriculum = [
  {
    icon: Brain,
    title: "AI araçları ve seçim mantığı",
    desc: "ChatGPT, Claude, Gemini, Midjourney, Runway, ElevenLabs — hangi iş için hangi araç.",
  },
  {
    icon: Sparkles,
    title: "İçerik üretim sistemi",
    desc: "Blog, sosyal medya, video script ve görsel üretimini tek akışta toparlamayı öğren.",
  },
  {
    icon: Target,
    title: "Reklam kreatif sistemi",
    desc: "Meta ve Google için reklam metni, görsel ve A/B varyant üretim hattı kurmayı öğren.",
  },
  {
    icon: Workflow,
    title: "Yarı-otomatik iş akışları",
    desc: "AI araçlarını e-posta, CRM, takvim ve mesajlaşma sistemlerine bağlayan akışlar kurmayı öğren.",
  },
  {
    icon: Database,
    title: "Prompt kütüphanesi",
    desc: "Sektörünüze özel, tekrar kullanılabilir prompt sistemleri kurmayı öğren.",
  },
  {
    icon: Shield,
    title: "Veri güvenliği & insan kontrolü",
    desc: "Hangi veri AI'ya verilir, hangi çıktı insan onayından geçer — netleştirmeyi öğren.",
  },
];

const sectorDetails = [
  {
    anchor: "doktorlar",
    icon: Stethoscope,
    name: "Doktorlar & Klinikler",
    produce: [
      "Haftalık 3–5 sosyal medya post'u (metin + görsel)",
      "Hasta bilgilendirme videosu (script + seslendirme taslağı)",
      "Randevu öncesi bilgilendirme mesajı şablonları",
    ],
    how: "Branding kuralları → prompt şablonu → içerik takvimi → onay süreci.",
  },
  {
    anchor: "eticaret",
    icon: ShoppingBag,
    name: "E-Ticaret KOBİ",
    produce: [
      "Çok sayıda ürün için açıklama varyantı",
      "Reklam metin ve kreatif varyantları",
      "Müşteri sorularına yanıt taslağı (insan kontrolünde)",
    ],
    how: "Ürün bilgisi → prompt şablonu → varyant üretimi → düzenleme → yayın.",
  },
  {
    anchor: "ajanslar",
    icon: Megaphone,
    name: "Pazarlama Ajansları",
    produce: [
      "Brief'ten strateji dokümanı taslağı",
      "Sunum ve pitch deck taslağı",
      "Her ad set için birden fazla reklam kreatif varyantı",
    ],
    how: "Müşteri brief → AI ile taslak → insan revizyonu → final çıktı.",
  },
];

// Etsy'de satışta olan, yapay zekâ ile geliştirilmiş ürünlerin tamamı (tek kaynak: lib/ai-projects.ts)
const showcase = aiProjects.filter(
  (p): p is AiProject & { image: string } => p.source === "etsy" && Boolean(p.image),
);

// Öne çıkan klinik projesi — gerçek ekran görüntüsü (hekim adı bulanıklaştırıldı)
const hastaOnay = findAiProject("hastaonay");
const HASTAONAY_IMAGE = "/showcase/hastaonay-dashboard.png";

// Kartları renklendirmek için ton paleti (Tailwind sınıfları statik kalmalı)
const tones = [
  { card: "bg-gradient-to-br from-indigo-500/20 via-indigo-500/5 to-transparent border-indigo-400/30 hover:border-indigo-300/70", icon: "bg-indigo-500/25 text-indigo-200", chip: "bg-indigo-500/15 text-indigo-200 border-indigo-400/30", text: "text-indigo-300" },
  { card: "bg-gradient-to-br from-emerald-500/20 via-emerald-500/5 to-transparent border-emerald-400/30 hover:border-emerald-300/70", icon: "bg-emerald-500/25 text-emerald-200", chip: "bg-emerald-500/15 text-emerald-200 border-emerald-400/30", text: "text-emerald-300" },
  { card: "bg-gradient-to-br from-amber-500/20 via-amber-500/5 to-transparent border-amber-400/30 hover:border-amber-300/70", icon: "bg-amber-500/25 text-amber-200", chip: "bg-amber-500/15 text-amber-200 border-amber-400/30", text: "text-amber-300" },
  { card: "bg-gradient-to-br from-rose-500/20 via-rose-500/5 to-transparent border-rose-400/30 hover:border-rose-300/70", icon: "bg-rose-500/25 text-rose-200", chip: "bg-rose-500/15 text-rose-200 border-rose-400/30", text: "text-rose-300" },
  { card: "bg-gradient-to-br from-sky-500/20 via-sky-500/5 to-transparent border-sky-400/30 hover:border-sky-300/70", icon: "bg-sky-500/25 text-sky-200", chip: "bg-sky-500/15 text-sky-200 border-sky-400/30", text: "text-sky-300" },
  { card: "bg-gradient-to-br from-fuchsia-500/20 via-fuchsia-500/5 to-transparent border-fuchsia-400/30 hover:border-fuchsia-300/70", icon: "bg-fuchsia-500/25 text-fuchsia-200", chip: "bg-fuchsia-500/15 text-fuchsia-200 border-fuchsia-400/30", text: "text-fuchsia-300" },
];
const tone = (i: number) => tones[i % tones.length];

const keyFacts = [
  "4 hafta · toplam 12 saat",
  "Online ya da yüz yüze",
  "Kod bilmen gerekmiyor",
  "İstediğin zaman başla",
];

const faq = [
  {
    q: "Programa katılmak için teknik bilgi gerekiyor mu?",
    a: "Hayır. Sıfırdan başlıyoruz. Bilgisayar kullanabiliyorsanız ve düzenli uygulama yapacaksanız yeterli.",
  },
  {
    q: "Eğitim ne kadar sürüyor?",
    a: "Bireysel program 4 hafta, toplam 12 saat. Oturumların arasında kendi işinize uygulama yapıyorsunuz.",
  },
  {
    q: "Eğitim online mı, yüz yüze mi?",
    a: "İkisi de mümkün; size hangisi uygunsa. Bireysel programda oturumlar canlı yapılır ve kayıt altına alınır. Kurumsal programlarda format şirkete göre planlanır.",
  },
  {
    q: "Ne zaman başlayabilirim?",
    a: "İstediğiniz zaman. Belirli bir dönem başlangıcı yok; başlangıç tarihini birlikte belirliyoruz.",
  },
  {
    q: "Sektörüm listede yok, yine de katılabilir miyim?",
    a: "Evet. Müfredatın temel yapısı sektörden bağımsız. WhatsApp'tan yazın, sektörünüze uygun mu birlikte değerlendirelim.",
  },
  {
    q: "Hangi araçlar için ekstra ücret ödemem gerekecek?",
    a: "Çoğu araç için ücretsiz veya düşük maliyetli plan yeterli. Hangi aboneliğin gerçekten gerektiğini ilk haftada netleştiriyoruz.",
  },
  {
    q: "Şirketime özel program nasıl planlanıyor?",
    a: "WhatsApp'tan kısa bir keşif görüşmesi yapıyoruz. Ekibinizin durumu, hedefiniz ve süreçlerinize göre özel müfredat hazırlıyorum.",
  },
  {
    q: "Program sonunda ne elde ederim?",
    a: "Sektörünüze özel prompt kütüphanesi, çalışan iş akışı taslakları ve uygulama yapabileceğiniz bir sistem altyapısı.",
  },
];

export default function AiEgitimiPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "AI Eğitimi — İşinize AI Sistemi Kurmayı Öğretir",
    description: "Bireysel ve kurumsal AI eğitimi. İçerik, reklam ve operasyon süreçlerinizi yarı-otomatik hale getirmeyi öğrenin.",
    provider: {
      "@type": "Person",
      name: "Tonguç Karaçay",
      url: "https://tonguckaracay.com",
    },
    inLanguage: "tr-TR",
    url: "https://tonguckaracay.com/ai-egitimi",
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />

      {/* HERO */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="flex items-center justify-center gap-2 text-sm text-primary-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
              <span>/</span>
              <span className="text-white">AI Eğitimi</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Bireysel & Kurumsal AI Programları</span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">
              AI ile işinizi büyütün.{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                İçerik, reklam ve operasyon
              </span>{" "}
              süreçlerinizi hızlandırın.
            </h1>

            <p className="text-xl text-primary-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Bu programda sadece araç anlatılmaz. İşinize çalışan sistemler kurmayı öğrenirsiniz.
            </p>

            <ul className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
              {keyFacts.map((fact, i) => (
                <li
                  key={fact}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium ${tone([1, 4, 2, 5][i]).chip}`}
                >
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  {fact}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={waLink("Merhaba, AI Eğitimi hakkında bilgi almak istiyorum.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-green-500/20"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp'tan bilgi al
              </a>
              <Link
                href="#bireysel"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-surface-card border border-surface-border hover:border-indigo-500/50 text-white font-semibold rounded-xl transition-all"
              >
                <Users className="w-5 h-5" />
                Bireysel katılım
              </Link>
              <Link
                href="#kurumsal"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-surface-card border border-surface-border hover:border-violet-500/50 text-white font-semibold rounded-xl transition-all"
              >
                <Building2 className="w-5 h-5" />
                Şirketim için
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CALLOUT — Pozisyonlama */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-indigo-500/10 via-violet-500/5 to-transparent border border-indigo-500/20 rounded-2xl p-8 md:p-10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <Sparkles className="w-5 h-5 text-indigo-300" />
              </div>
              <div className="flex-1">
                <h2 className="font-display text-xl md:text-2xl font-bold text-white mb-3">
                  Bu sadece bir AI eğitimi değil.
                </h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  26 yılı aşkın dijital ürün ve UX deneyimi, SEO, dijital reklam ve AI pratiği bir arada.
                  Araç öğretmek değil — mevcut iş süreçlerinize oturan, gerçekten çalışan sistemler kurmayı öğretmek.
                </p>
                <p className="text-xs font-semibold text-primary-500 uppercase tracking-wider mb-3">
                  Programda kullandığımız araçlar
                </p>
                <div className="flex flex-wrap gap-2">
                  {["ChatGPT", "Claude", "Google Gemini", "Midjourney", "Canva AI"].map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/30 rounded-lg text-xs text-indigo-200 font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KARŞILAŞTIRMA — Sıradan vs Sistem */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Fark nerede?
            </h2>
            <p className="text-lg text-primary-300 max-w-2xl mx-auto">
              Çoğu AI kullanımı araç dener, sonuç görmez. Bu program sistem kurar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-rose-500/15 via-orange-500/5 to-transparent border border-rose-400/25 rounded-2xl p-8">
              <h3 className="font-display text-lg font-bold text-rose-200 mb-6 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-rose-500/25 text-rose-200 flex items-center justify-center text-xs">✕</span>
                Sıradan AI kullanımı
              </h3>
              <ul className="space-y-4">
                {[
                  "Her seferinde sıfırdan prompt yaz",
                  "Çıktılar tutarsız, tone farklı",
                  "Araç öğrenir, işe uyarlamak bilemez",
                  "Merak aşamasında kalır, üretim yok",
                  "Hangi araç ne işe yarar, belli değil",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-primary-200 text-sm">
                    <XCircle className="w-4 h-4 text-rose-300 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/20 via-sky-500/10 to-indigo-500/10 border border-emerald-400/35 rounded-2xl p-8 shadow-lg shadow-emerald-500/10">
              <h3 className="font-display text-lg font-bold text-emerald-200 mb-6 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-500/25 text-emerald-200 flex items-center justify-center text-xs">✓</span>
                Sistem kurma
              </h3>
              <ul className="space-y-4">
                {[
                  "Tekrar kullanılabilir prompt kütüphanesi",
                  "Markana uygun, tutarlı çıktılar",
                  "İş sürecine entegre edilmiş akış",
                  "Haftalık gerçek üretim çıktıları",
                  "Her araç için net kullanım amacı",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-primary-100 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE — Kurduğum sistemler */}
      <section className="py-16 md:py-20 bg-surface-darker">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Gerçek örnekler</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Yapay zekâyla geliştirdiğim ürünler
            </h2>
            <p className="text-lg text-primary-300 max-w-2xl mx-auto">
              Eğitimde anlattığım yöntemlerle geliştirdiğim gerçek ürünler: bir klinik sistemi ve Etsy&apos;de satışta olan dijital ürünlerin tamamı.
            </p>
          </div>

          {hastaOnay && (
            <div className="max-w-6xl mx-auto mb-8 grid lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden border border-emerald-400/30 bg-gradient-to-br from-emerald-500/20 via-sky-500/10 to-indigo-500/10 shadow-xl shadow-emerald-500/10">
              <div className="lg:col-span-3 p-3 sm:p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={HASTAONAY_IMAGE}
                  alt="hastaOnay klinik onay sistemi panel ekran görüntüsü"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-2xl border border-white/10 shadow-lg"
                />
              </div>
              <div className="lg:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                <span className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs font-semibold mb-4">
                  <Stethoscope className="w-3.5 h-3.5" />
                  Klinikler için
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
                  hastaOnay — Dijital hasta onay sistemi
                </h3>
                <p className="text-primary-200 leading-relaxed mb-5">{hastaOnay.summary.tr}</p>
                <ul className="space-y-2 mb-6">
                  {hastaOnay.highlights.tr.slice(0, 2).map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-primary-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-300 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {hastaOnay.stack.map((tool) => (
                    <span key={tool} className="px-2.5 py-1 text-xs bg-emerald-500/15 text-emerald-200 rounded-md border border-emerald-400/30">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {showcase.map((item, i) => (
              <div
                key={item.slug}
                className={`border rounded-2xl overflow-hidden transition-all group ${tone(i).card}`}
              >
                <a
                  href={item.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-[4/3] bg-surface-darker overflow-hidden"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={`${item.name} ekran görüntüsü`}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </a>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-display text-lg font-bold text-white">{item.name}</h3>
                    {item.externalUrl && (
                      <a
                        href={item.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${item.name} — Etsy'de incele`}
                        className={`${tone(i).text} hover:text-white transition-colors flex-shrink-0`}
                      >
                        <ArrowRight className="w-5 h-5 -rotate-45" />
                      </a>
                    )}
                  </div>
                  <p className="text-primary-200 text-sm leading-relaxed mb-4">{item.summary.tr}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.stack.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className={`px-2.5 py-1 text-xs rounded-md border ${tone(i).chip}`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-primary-500 text-sm italic mt-8">
            Bu tür sistemleri kendi sektörünüze nasıl uyarlayacağınızı eğitimde öğrenirsiniz.
          </p>
        </div>
      </section>

      {/* SEKTÖREL GRID */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Hangi sektördesiniz?
            </h2>
            <p className="text-lg text-primary-300 max-w-2xl mx-auto">
              Her sektörün kendi içerik dili, reklam mantığı ve operasyon ritmi farklı. Program sektörünüze uyarlanır.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {sectors.map((sector, i) => {
              const Icon = sector.icon;
              return (
                <Link
                  key={sector.anchor}
                  href={`#${sector.anchor}`}
                  className={`group border rounded-2xl p-6 transition-all ${tone(i).card}`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${tone(i).icon}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">{sector.name}</h3>
                  <p className="text-primary-300 text-sm leading-relaxed">{sector.output}</p>
                </Link>
              );
            })}
          </div>

          <p className="text-center text-primary-500 text-sm italic mt-8">
            Bunlar yapılabileceklerden sadece bazıları. Her sektörün kullanım senaryosu farklıdır.
          </p>
        </div>
      </section>

      {/* SEGMENT AYRIMI */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Size uygun olan hangisi?
            </h2>
            <p className="text-lg text-primary-300 max-w-2xl mx-auto">
              İki ayrı program. İki ayrı kitle. Net hedef.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div id="bireysel" className="bg-gradient-to-br from-indigo-500/25 via-sky-500/10 to-transparent border border-indigo-400/40 rounded-2xl p-8 flex flex-col scroll-mt-24 shadow-lg shadow-indigo-500/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-indigo-300" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">Bireysel</h3>
              </div>
              <p className="text-primary-300 mb-6">
                Tek başına çalışan, freelancer veya kendi işini büyütmek isteyen profesyoneller için.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Freelancer / tek çalışan",
                  "4 hafta · toplam 12 saat",
                  "Online ya da yüz yüze, canlı oturumlar + kayıt erişimi",
                  "İstediğin zaman başla",
                  "Sektöre özel prompt kütüphanesi",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-primary-300">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={waLink("Merhaba, Bireysel AI Eğitimi için yer ayırtmak istiyorum.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp'tan yerini ayırt
              </a>
            </div>

            <div id="kurumsal" className="bg-gradient-to-br from-fuchsia-500/25 via-violet-500/10 to-transparent border border-fuchsia-400/40 rounded-2xl p-8 flex flex-col scroll-mt-24 shadow-lg shadow-fuchsia-500/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-violet-300" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">Kurumsal</h3>
              </div>
              <p className="text-primary-300 mb-6">
                5+ kişilik ekipler için şirkete özel program. Workshop, mentorluk ve sisteme özel kurulum.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "5+ kişilik ekipler",
                  "Workshop + mentorluk",
                  "Şirkete özel sistemler",
                  "İhtiyaca göre özelleştirilmiş müfredat",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-primary-300">
                    <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={waLink("Merhaba, şirketim için Kurumsal AI Eğitimi teklifi almak istiyorum.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp'tan teklif al
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MÜFREDAT */}
      <section className="py-16 md:py-20 bg-surface-darker">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Müfredat
            </h2>
            <p className="text-lg text-primary-300 max-w-2xl mx-auto">
              Araçtan değil, ihtiyaçtan başlayan altı modül.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {curriculum.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className={`border rounded-2xl p-6 transition-all ${tone(idx + 2).card}`}>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${tone(idx + 2).icon}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-primary-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEKTÖREL DETAY */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Sektörel detay
            </h2>
            <p className="text-lg text-primary-300 max-w-2xl mx-auto">
              Üç sektörden somut örnekler. Diğer sektörler için iletişime geçin.
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {sectorDetails.map((detail, i) => {
              const Icon = detail.icon;
              const t = tone([0, 2, 3][i] ?? i);
              return (
                <div
                  key={detail.anchor}
                  id={detail.anchor}
                  className={`border rounded-2xl p-8 scroll-mt-24 ${t.card}`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${t.icon}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">{detail.name}</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-sm font-semibold text-indigo-300 uppercase tracking-wider mb-3">
                        Ne üretilebilir
                      </h4>
                      <ul className="space-y-2">
                        {detail.produce.map((item) => (
                          <li key={item} className="text-primary-300 text-sm flex items-start gap-2">
                            <span className="text-violet-400 flex-shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-indigo-300 uppercase tracking-wider mb-3">
                        Nasıl uygulanır
                      </h4>
                      <p className="text-primary-300 text-sm leading-relaxed">{detail.how}</p>
                    </div>
                  </div>
                  <p className="text-primary-500 text-xs italic mt-6">
                    Bunlar yapılabileceklerden sadece bazıları.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BU PROGRAM NE DEĞİL */}
      <section className="py-16 md:py-20 bg-surface-darker">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Beklentileri <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">baştan netleştirelim</span>
              </h2>
              <p className="text-lg text-primary-300 max-w-2xl mx-auto">
                Doğru beklentiyle başlayan, sonucu da hızlı görür.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-amber-500/20 via-amber-500/5 to-transparent border-amber-400/35 border rounded-2xl p-6">
                <Lightbulb className="w-8 h-8 text-amber-300 mb-3" />
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  Kolay para kazanma yöntemi değil
                </h3>
                <p className="text-primary-200 text-sm">
                  Pasif gelir vaadi yok. Bu, mesleğinizdeki üretim hızınızı artıran bir altyapı kurma programı.
                </p>
              </div>
              <div className="bg-gradient-to-br from-sky-500/20 via-sky-500/5 to-transparent border-sky-400/35 border rounded-2xl p-6">
                <Lightbulb className="w-8 h-8 text-sky-300 mb-3" />
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  Tek tuş çözüm değil
                </h3>
                <p className="text-primary-200 text-sm">
                  AI işinizi tek başına yürütmez. Sistemi siz kurar, siz yönetir, siz onaylarsınız.
                </p>
              </div>
              <div className="bg-gradient-to-br from-emerald-500/20 via-emerald-500/5 to-transparent border-emerald-400/35 border rounded-2xl p-6">
                <Lightbulb className="w-8 h-8 text-emerald-300 mb-3" />
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  Uygulama yapmadan sonuç vermez
                </h3>
                <p className="text-primary-200 text-sm">
                  İzlemekle bitmiyor. Her hafta kendi işinize uyarlama gerekiyor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EĞİTMEN */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-fuchsia-500/15 border border-indigo-400/30 rounded-2xl overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{ backgroundImage: "radial-gradient(circle, #818cf8 1px, transparent 1px)", backgroundSize: "20px 20px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-violet-500/5 pointer-events-none" />

              <div className="relative p-8 md:p-12">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10 pb-10 border-b border-surface-border">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/20">
                    <span className="text-white font-bold text-2xl font-display">TK</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-2xl font-bold text-white">Tonguç Karaçay</h2>
                    <p className="text-indigo-300 text-sm mt-0.5">AI-Driven UX & Growth Partner</p>
                    <p className="text-primary-200 text-sm">İstanbul — Türkiye, Avrupa, ABD, Körfez pazarları</p>
                  </div>
                  <a
                    href={waLink("Merhaba Tonguç, AI Eğitimi hakkında bir sorum var.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all text-sm flex-shrink-0"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    Yaz
                  </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                  {[
                    { stat: "26+", label: "Yıl deneyim" },
                    { stat: "4", label: "Disiplin: UX · SEO · Ads · AI" },
                    { stat: "TR + EN", label: "İçerik pazarları" },
                    { stat: "Global", label: "Müşteri portföyü" },
                  ].map(({ stat, label }, i) => (
                    <div key={label} className={`border rounded-xl p-4 text-center ${tone([0, 1, 2, 5][i]).card}`}>
                      <div className={`font-display text-2xl font-bold mb-1 ${tone([0, 1, 2, 5][i]).text}`}>
                        {stat}
                      </div>
                      <p className="text-primary-200 text-xs leading-snug">{label}</p>
                    </div>
                  ))}
                </div>

                <p className="text-primary-300 leading-relaxed">
                  26 yılı aşkın dijital ürün, UX ve dijital pazarlama deneyimini AI ile birleştiren profesyonel.
                  Türkiye, Avrupa ve ABD pazarlarına yönelik projelerde aktif olarak AI sistemleri kuruyor ve öğretiyor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-surface-darker">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Sık sorulan sorular
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faq.map((item, idx) => (
              <details
                key={idx}
                className="group bg-gradient-to-r from-indigo-500/10 to-violet-500/5 border border-indigo-400/20 open:border-indigo-400/50 open:from-indigo-500/20 rounded-xl overflow-hidden transition-colors"
              >
                <summary className="cursor-pointer px-6 py-4 flex items-center justify-between gap-4 text-white font-medium hover:bg-surface-border/30 transition-colors">
                  <span>{item.q}</span>
                  <ArrowRight className="w-5 h-5 text-indigo-400 flex-shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-5 text-primary-300 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTING ALTERNATIVE */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-sky-500/20 via-sky-500/5 to-transparent border border-sky-400/30 rounded-2xl p-6 md:p-8">
            <h2 className="font-display text-2xl font-bold text-white mb-3">
              Eğitim mi, danışmanlık mı?
            </h2>
            <p className="text-primary-300 leading-relaxed mb-5">
              Ekibiniz sistemi kendi kuracaksa eğitim uygundur. Süreç analizi,
              kontrollü pilot, entegrasyon ve bakımın proje olarak yürütülmesi
              gerekiyorsa AI otomasyon danışmanlığını inceleyin.
            </p>
            <Link href="/hizmetler/yapay-zeka-cozumleri" className="text-indigo-400 font-semibold hover:underline">
              KOBİ'ler için AI otomasyon danışmanlığı
              <ArrowRight className="inline-block ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="py-8">
        <div className="container-custom">
          <p className="max-w-3xl mx-auto text-center text-primary-400 text-sm leading-relaxed border-t border-surface-border pt-8">
            Sonuçlar; sektör, uygulama ve sürekliliğe göre değişir. Bu program size sistemi kurmayı öğretir.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10 border border-indigo-500/30 rounded-3xl p-10 md:p-14">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
              Hazırsan başlayalım
            </h2>
            <p className="text-lg md:text-xl text-primary-300 mb-8 leading-relaxed">
              Yerler sınırlı. Uygun olup olmadığını birlikte netleştirelim.
            </p>
            <a
              href={waLink("Merhaba, AI Eğitimi'ne katılmak istiyorum. Yer ayırtmak için yazıyorum.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl text-lg transition-all shadow-xl shadow-green-500/20"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp'tan yaz ve yerini ayırt
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
