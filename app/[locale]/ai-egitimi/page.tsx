import { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from 'next-intl/server';
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
  title: "AI Eğitimi | Tonguç Karaçay — İşinize AI Sistemi Kurmayı Öğretir",
  description: "Bireysel ve kurumsal AI eğitimi. İçerik, reklam ve operasyon süreçlerinizi hızlandıracak sistemler kurmayı öğrenin. WhatsApp'tan bilgi alın.",
  keywords: ["AI eğitimi", "yapay zeka eğitimi", "ChatGPT eğitimi", "kurumsal AI eğitimi", "sektörel yapay zeka", "AI sistemi kurmayı öğren"],
  alternates: {
    canonical: 'https://tonguckaracay.com/ai-egitimi',
    languages: {
      'tr': 'https://tonguckaracay.com/ai-egitimi',
      'en': 'https://tonguckaracay.com/en/ai-training',
    },
  },
  openGraph: {
    title: "AI Eğitimi | İşinize AI Sistemi Kurmayı Öğretir — Tonguç Karaçay",
    description: "Araç değil sistem. İçerik, reklam ve operasyon süreçlerinizi yarı-otomatik hale getirmeyi öğrenin.",
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
    desc: "n8n, Make ve Zapier ile e-posta, CRM, takvim ve mesajlaşma entegrasyonu kurmayı öğren.",
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
    tools: ["ChatGPT", "Claude", "Midjourney", "ElevenLabs", "Canva", "Runway"],
    produce: [
      "Haftalık 3-5 sosyal medya post'u (metin + görsel)",
      "Hasta bilgilendirme videosu (script + seslendirme)",
      "Randevu öncesi WhatsApp bilgilendirme akışı taslağı",
    ],
    how: "Branding kuralları → prompt şablonu → içerik takvimi → onay süreci.",
  },
  {
    anchor: "eticaret",
    icon: ShoppingBag,
    name: "E-Ticaret KOBİ",
    tools: ["GPT-5", "Claude", "Midjourney", "Make.com"],
    produce: [
      "100+ ürün için açıklama varyantı",
      "Reklam metin ve kreatif varyantları",
      "Müşteri sorularına yanıt taslağı (insan kontrolünde)",
    ],
    how: "Ürün CSV → prompt şablonu → varyant üretimi → marketplace yükleme.",
  },
  {
    anchor: "ajanslar",
    icon: Megaphone,
    name: "Pazarlama Ajansları",
    tools: ["Claude", "Gamma", "AdCreative.ai", "n8n"],
    produce: [
      "Brief'ten strateji dokümanı taslağı",
      "Pitch deck taslağı (Gamma)",
      "Her ad set için 5+ reklam kreatif varyantı",
    ],
    how: "Müşteri brief → AI workflow → revize döngüsü → final çıktı.",
  },
];

const faq = [
  {
    q: "Programa katılmak için teknik bilgi gerekiyor mu?",
    a: "Hayır. Sıfırdan başlıyoruz. Bilgisayar kullanabiliyorsanız ve düzenli uygulama yapacaksanız yeterli.",
  },
  {
    q: "Eğitim canlı mı kayıttan mı?",
    a: "Bireysel programda canlı oturumlar var ve hepsi kayıt altına alınıyor. Kurumsal programlarda format şirkete göre planlanır.",
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

            <p className="text-xl text-primary-300 mb-10 leading-relaxed max-w-2xl mx-auto">
              Bu programda sadece araç anlatılmaz. İşinize çalışan sistemler kurmayı öğrenirsiniz.
            </p>

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

      {/* WHATSAPP TRIGGER 1 — Kararsız mısınız? */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/30 rounded-2xl p-8 md:p-10 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
              Kararsız mısınız?
            </h2>
            <p className="text-primary-300 mb-6 max-w-xl mx-auto">
              Size uygun olup olmadığını 2 dakika içinde birlikte netleştirelim.
            </p>
            <a
              href={waLink("Merhaba, AI Eğitimi'nin bana uygun olup olmadığını konuşmak istiyorum.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp'tan yaz
            </a>
          </div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <Link
                  key={sector.anchor}
                  href={`#${sector.anchor}`}
                  className="group bg-surface-card border border-surface-border hover:border-indigo-500/50 rounded-2xl p-6 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-indigo-300" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">{sector.name}</h3>
                  <p className="text-primary-300 text-sm leading-relaxed">{sector.output}</p>
                </Link>
              );
            })}
          </div>

          <p className="text-center text-primary-500 text-sm italic mt-8">
            Bunlar yapılabileceklerden sadece bazıları. Sektörünüze özgü ihtiyaçları WhatsApp'ta konuşalım.
          </p>
        </div>
      </section>

      {/* SEGMENT AYRIMI: Bireysel vs Kurumsal */}
      <section className="py-16 md:py-20 bg-surface-darker">
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
            {/* BİREYSEL */}
            <div id="bireysel" className="bg-surface-card border border-indigo-500/30 rounded-2xl p-8 flex flex-col">
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
                <li className="flex items-start gap-3 text-primary-300">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>Freelancer / tek çalışan</span>
                </li>
                <li className="flex items-start gap-3 text-primary-300">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>6 haftalık program</span>
                </li>
                <li className="flex items-start gap-3 text-primary-300">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>Canlı oturumlar + kayıt erişimi</span>
                </li>
                <li className="flex items-start gap-3 text-primary-300">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>Sektöre özel prompt kütüphanesi</span>
                </li>
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

            {/* KURUMSAL */}
            <div id="kurumsal" className="bg-surface-card border border-violet-500/30 rounded-2xl p-8 flex flex-col">
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
                <li className="flex items-start gap-3 text-primary-300">
                  <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span>5+ kişilik ekipler</span>
                </li>
                <li className="flex items-start gap-3 text-primary-300">
                  <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span>Workshop + mentorluk</span>
                </li>
                <li className="flex items-start gap-3 text-primary-300">
                  <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span>Şirkete özel sistemler</span>
                </li>
                <li className="flex items-start gap-3 text-primary-300">
                  <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span>İhtiyaca göre özelleştirilmiş müfredat</span>
                </li>
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

      {/* BU PROGRAM NE DEĞİL */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Bu program <span className="text-amber-400">ne değil?</span>
              </h2>
              <p className="text-lg text-primary-300 max-w-2xl mx-auto">
                Yanlış beklentiyle başlamak zaman kaybıdır. Net olalım.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-surface-card border border-amber-500/30 rounded-2xl p-6">
                <XCircle className="w-8 h-8 text-amber-400 mb-3" />
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  Kolay para kazanma yöntemi değil
                </h3>
                <p className="text-primary-400 text-sm">
                  Pasif gelir vaadi yok. Bu, mesleğinizdeki üretim hızınızı artıran bir altyapı kurma programı.
                </p>
              </div>
              <div className="bg-surface-card border border-amber-500/30 rounded-2xl p-6">
                <XCircle className="w-8 h-8 text-amber-400 mb-3" />
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  Tek tuş çözüm değil
                </h3>
                <p className="text-primary-400 text-sm">
                  AI işinizi tek başına yürütmez. Sistemi siz kurar, siz yönetir, siz onaylarsınız. AI hızlandırıcıdır.
                </p>
              </div>
              <div className="bg-surface-card border border-amber-500/30 rounded-2xl p-6">
                <XCircle className="w-8 h-8 text-amber-400 mb-3" />
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  Uygulama yapmadan sonuç vermez
                </h3>
                <p className="text-primary-400 text-sm">
                  İzlemekle bitmiyor. Her hafta uygulama, her hafta kendi işinize uyarlama gerekiyor.
                </p>
              </div>
            </div>

            <div className="text-center">
              <a
                href={waLink("Merhaba, AI Eğitimi'nin bana uygun olup olmadığını sormak istiyorum.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Uygun mu? WhatsApp'tan sor
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            {curriculum.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-surface-card border border-surface-border rounded-2xl p-6">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-indigo-300" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-primary-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <a
              href={waLink("Merhaba, AI Eğitimi müfredatı hakkında detaylı bilgi almak istiyorum.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Detaylı bilgi için yaz
            </a>
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
              Üç sektörden somut örnekler. Diğer sektörler için WhatsApp'tan yazın.
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {sectorDetails.map((detail) => {
              const Icon = detail.icon;
              return (
                <div
                  key={detail.anchor}
                  id={detail.anchor}
                  className="bg-surface-card border border-surface-border rounded-2xl p-8 scroll-mt-24"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-indigo-300" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">{detail.name}</h3>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-indigo-300 uppercase tracking-wider mb-3">
                        Hangi araçlar
                      </h4>
                      <ul className="space-y-2">
                        {detail.tools.map((tool) => (
                          <li key={tool} className="text-primary-300 text-sm">
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>
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
                </div>
              );
            })}
          </div>

          <p className="text-center text-primary-500 text-sm italic mt-8">
            Bunlar yapılabileceklerden sadece bazıları.
          </p>
        </div>
      </section>

      {/* EĞİTMEN */}
      <section className="py-16 md:py-20 bg-surface-darker">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-surface-card border border-surface-border rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
                  Eğitmen
                </h2>
                <p className="text-primary-300">Bu programı veren kişi.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="text-center">
                  <div className="font-display text-3xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-2">
                    25+
                  </div>
                  <p className="text-primary-300 text-sm">UX & dijital deneyim</p>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-2">
                    UX + SEO + Ads + AI
                  </div>
                  <p className="text-primary-300 text-sm">Dört disiplin tek elde</p>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-2">
                    Gerçek
                  </div>
                  <p className="text-primary-300 text-sm">Yaşayan projelerden örnekler</p>
                </div>
              </div>

              <p className="text-primary-300 leading-relaxed text-center max-w-2xl mx-auto mb-8">
                Tonguç Karaçay. 25 yılı aşkın UX, SEO ve dijital pazarlama deneyimi.
                Kendi projelerinde günlük olarak AI sistemleri kuruyor — ve bu deneyimi sizin işinize taşımayı öğretiyor.
              </p>

              <div className="text-center">
                <a
                  href={waLink("Merhaba Tonguç, AI Eğitimi hakkında bir sorum var.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Sorunu direkt bana yaz
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
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
                className="group bg-surface-card border border-surface-border rounded-xl overflow-hidden"
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
