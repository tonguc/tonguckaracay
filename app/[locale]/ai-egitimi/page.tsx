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
  Zap,
  Brain,
  Workflow,
  Database,
  Shield,
  Target,
  Clock,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Eğitimi | Tonguç Karaçay — Araç Değil, Sistem Öğret",
  description: "Bireysel ve kurumsal AI eğitimi. Doktor, emlakçı, e-ticaret, ajans, klinik ve SaaS girişimciler için sektörel AI sistemleri. İçerik, reklam ve operasyon süreçlerinizi AI ile optimize edin.",
  keywords: ["AI eğitimi", "yapay zeka eğitimi", "ChatGPT eğitimi", "kurumsal AI eğitimi", "sektörel yapay zeka", "AI sistemi kurma"],
  alternates: {
    canonical: 'https://tonguckaracay.com/ai-egitimi',
    languages: {
      'tr': 'https://tonguckaracay.com/ai-egitimi',
      'en': 'https://tonguckaracay.com/en/ai-training',
    },
  },
  openGraph: {
    title: "AI Eğitimi | Araç Değil, Sistem Öğret — Tonguç Karaçay",
    description: "Bu eğitim araç öğretmez, işinize çalışan sistemler kurmayı öğretir. Bireysel kohort ve kurumsal in-house programlar.",
    url: 'https://tonguckaracay.com/ai-egitimi',
    type: 'website',
  },
};

const sectors = [
  {
    icon: Stethoscope,
    name: "Doktorlar & Klinikler",
    promise: "Sosyal medya içeriği, hasta eğitim videosu ve görsel üretimini AI hattına alın.",
    tools: "ChatGPT, Midjourney, ElevenLabs, Runway",
    anchor: "doktorlar",
  },
  {
    icon: Home,
    name: "Emlak & Gayrimenkul",
    promise: "İlan metni, drone video kurgusu, sanal staging ve müşteri takip botu.",
    tools: "Claude, Runway, Sanal Staging AI, n8n",
    anchor: "emlak",
  },
  {
    icon: ShoppingBag,
    name: "E-Ticaret KOBİ",
    promise: "Trendyol, Hepsiburada, Shopify için ürün açıklaması, görsel ve reklam metni üretim akışları.",
    tools: "GPT-5, Midjourney, Make.com",
    anchor: "eticaret",
  },
  {
    icon: Megaphone,
    name: "Pazarlama Ajansları",
    promise: "Brief'ten kampanyaya, pitch deck'ten reklam varyantına yarı-otomatik üretim akışı.",
    tools: "Claude, Gamma, AdCreative.ai, n8n",
    anchor: "ajanslar",
  },
  {
    icon: Scissors,
    name: "Güzellik & Estetik Klinik",
    promise: "Before/after görseli, randevu botu, içerik takvimi, müşteri yorum analizi.",
    tools: "ChatGPT, Midjourney, ManyChat",
    anchor: "guzellik",
  },
  {
    icon: Rocket,
    name: "SaaS Girişimciler",
    promise: "Cursor, Claude ve n8n ile temel prototipi kendiniz kurabilecek seviyeye gelin.",
    tools: "Cursor, Claude Code, n8n, Vercel",
    anchor: "saas",
  },
];

const curriculum = [
  {
    icon: Brain,
    title: "Modül 1 — AI Temelleri & Doğru Model Seçimi",
    points: ["GPT, Claude, Gemini farkları", "Hangi iş için hangi model", "Token, context, maliyet mantığı"],
  },
  {
    icon: Sparkles,
    title: "Modül 2 — Üst Düzey Prompt Engineering",
    points: ["Sektörüne özel prompt kütüphanesi", "Role, context, format kalıpları", "Zincirleme prompt'lar"],
  },
  {
    icon: Workflow,
    title: "Modül 3 — AI ile Yarı-Otomatik İş Akışları",
    points: ["n8n & Make ile süreç akışları", "Mail, WhatsApp, CRM entegrasyonu", "Tekrarlayan işleri büyük oranda azalt"],
  },
  {
    icon: Database,
    title: "Modül 4 — Şirket Verisiyle Çalışan AI (RAG)",
    points: ["Kendi dokümanlarınla konuşan asistan", "Müvekkil/müşteri verisi güvenliği", "ChatGPT Custom GPT & Claude Projects"],
  },
  {
    icon: Target,
    title: "Modül 5 — Pazarlama & Satış için AI",
    points: ["İçerik, reklam, e-posta otomasyonu", "Görsel & video üretim hattı", "Lead qualification botu"],
  },
  {
    icon: Shield,
    title: "Modül 6 — Etik, Gizlilik & KVKK",
    points: ["Hangi veriyi AI'a verme", "Kurumsal politika şablonu", "Halüsinasyon ve doğrulama"],
  },
];

const individualBenefits = [
  "6 hafta canlı kohort (haftada 1 oturum, 2 saat)",
  "Sektörüne özel prompt kütüphanesi",
  "5 hazır yarı-otomatik akış şablonu (n8n)",
  "Özel Discord topluluğu",
  "Kohort sonrası 30 gün soru-cevap erişimi",
  "Sertifika",
];

const corporateBenefits = [
  "1-3 günlük şirket içi (in-house) workshop",
  "Şirkete özel AI Playbook dokümanı",
  "Ekibiniz için 10+ özelleştirilmiş yarı-otomatik akış",
  "4 hafta uygulama mentorluğu",
  "AI politikası & KVKK uyum şablonu",
  "Yönetici stratejik özet sunumu",
];

const sectorDeepDive = [
  {
    id: "doktorlar",
    icon: Stethoscope,
    title: "Doktorlar için AI Sistemi",
    intro: "Hasta görmeye odaklan, içerik ve operasyon AI destekli aksın.",
    use: [
      "Hasta eğitim videoları: senaryo (ChatGPT) → görsel (Midjourney/Runway) → seslendirme (ElevenLabs)",
      "Instagram reel için içerik takvimi ve şablon kütüphanesi",
      "Hasta sıkça sorulan sorular için Custom GPT chatbot",
      "Tıbbi makale özetleyici (PDF → Claude → maddeli özet)",
      "Randevu öncesi WhatsApp bilgilendirme akışı (n8n)",
    ],
    output: "Doktor pratiğinize özel prompt kütüphanesi + 3 yarı-otomatik akış (içerik üretimi, randevu bilgilendirme, hasta SSS).",
  },
  {
    id: "eticaret",
    icon: ShoppingBag,
    title: "E-Ticaret KOBİ için AI Sistemi",
    intro: "Ürün listeleme, reklam metni ve görsel üretimini AI destekli hale getirin.",
    use: [
      "Trendyol/Hepsiburada/Shopify için ürün başlığı + açıklama prompt zinciri",
      "Ürün fotoğrafından life-style görsel (Midjourney + image-to-image)",
      "Yorum analizi → satış argümanı çıkartma",
      "Meta Ads & Google Ads için reklam varyantı üretici prompt seti",
      "Stok-fiyat-rakip takip akışı (n8n + scraper)",
    ],
    output: "E-ticaret prompt seti + reklam varyantı üretici şablonu + ürün listeleme akışı.",
  },
  {
    id: "emlak",
    icon: Home,
    title: "Emlakçılar için AI Sistemi",
    intro: "Mülkü gez, ilan taslağını AI yazsın, video AI ile kurgu.",
    use: [
      "Sesli not → SEO uyumlu ilan metni taslağı (sahibinden, hepsiemlak)",
      "Boş daireden döşenmiş görsel (sanal staging)",
      "Drone footage'tan kısa reels kurgu",
      "Müşteri segmentasyonu ve takip e-postası akışları",
      "Bölge analizi raporu taslağı (fiyat, talep, rakip ilan)",
    ],
    output: "İlan metni kütüphanesi + lead takip akışı + bölge analiz raporu şablonu.",
  },
  {
    id: "ajanslar",
    icon: Megaphone,
    title: "Ajanslar için AI Sistemi",
    intro: "Brief'ten teslimata yarı-otomatik üretim akışı.",
    use: [
      "Brief → strateji → konsept → reklam metni taslak akışı",
      "Pitch deck taslağı (Gamma + Claude)",
      "Reklam varyantı üretici (AdCreative.ai + prompt set)",
      "Sosyal medya planı + görsel + caption üretim akışı",
      "Müşteri raporlama akışı (GA4 → AI özet → PDF taslak)",
    ],
    output: "Brief→teslim üretim akışı + müşteri raporlama şablonu + reklam varyantı üretici.",
  },
  {
    id: "guzellik",
    icon: Scissors,
    title: "Güzellik & Klinik için AI Sistemi",
    intro: "Randevu yönetimi, içerik üretimi ve takip süreçleri AI destekli.",
    use: [
      "Before/after görsel üretimi ve sosyal medya akışı",
      "WhatsApp randevu akışı (ManyChat + n8n)",
      "Müşteri yorum analizi → hizmet iyileştirme sinyalleri",
      "Aylık içerik takvimi AI ile (görsel + caption + hashtag)",
      "Tedavi sonrası takip mesajı akışı",
    ],
    output: "Aylık içerik takvimi şablonu + WhatsApp randevu akışı + yorum analiz prompt'u.",
  },
  {
    id: "saas",
    icon: Rocket,
    title: "SaaS Girişimciler için AI Sistemi",
    intro: "Temel prototipi kurabilecek seviyeye gelin, akışlarınızı AI ile destekleyin.",
    use: [
      "Cursor + Claude Code ile temel prototip kurma",
      "n8n ile basit backend akışları (no-code)",
      "Landing page + onboarding maili taslak akışı",
      "Kullanıcı görüşmesi özetleyici",
      "Product analytics → AI insight rapor taslağı",
    ],
    output: "Cursor + Claude prompt seti + n8n akış şablonları + onboarding mail kiti.",
  },
];

const faqs = [
  {
    q: "AI eğitimi mi alıyorum, sistem mi kuruyorsunuz?",
    a: "İkisi bir arada. Sıradan eğitim 'ChatGPT kullanmayı öğretir'; biz işinize çalışan sistemler kurmayı öğretiyoruz: prompt kütüphanesi, yarı-otomatik akışlar, AI playbook. Eğitim biter ama akışlar çalışmaya devam eder.",
  },
  {
    q: "Hiç teknik bilgim yok, katılabilir miyim?",
    a: "Evet. Bireysel kohort sıfırdan başlıyor. Kod yazmıyoruz; ChatGPT, Claude, n8n gibi no-code araçlar kullanıyoruz. Bilgisayar kullanabiliyorsanız yeterli.",
  },
  {
    q: "Bireysel kohort nasıl ilerliyor?",
    a: "6 hafta, haftada 1 canlı oturum (2 saat). Her oturum sonrası ödev ve uygulama. Kayıtlar size kalıyor. Açılış kohort fiyatı 6.900 TL (normal fiyat 8.000–15.000 TL).",
  },
  {
    q: "Kurumsal program nasıl çalışıyor?",
    a: "Önce keşif görüşmesi yapıyoruz, ekibinizin AI olgunluk seviyesini ölçüyoruz. Sonra şirkete özel müfredatla 1-3 günlük workshop + 4 hafta mentorluk. Fiyat 30.000-150.000 TL bandında, kapsama göre değişir.",
  },
  {
    q: "Hangi sektörler için uygun?",
    a: "Şu an doktorlar, emlakçılar, e-ticaret KOBİ'leri, pazarlama ajansları, güzellik/klinik ve SaaS girişimciler için hazır müfredat var. Diğer sektörler için kurumsal program özelinde içerik tasarlıyoruz.",
  },
  {
    q: "Verilerimiz güvende mi?",
    a: "Modül 6 tamamen bu konu: hangi veriyi AI'a vermemeli, KVKK uyumlu kullanım, kurumsal AI politika şablonu. Müvekkil/hasta/müşteri verisini koruyacak şekilde sistem kuruyoruz.",
  },
  {
    q: "Eğitim sonrası destek var mı?",
    a: "Bireysel: 30 gün soru-cevap erişimi + Discord topluluğu. Kurumsal: 4 hafta uygulama mentorluğu + 3 ay e-posta desteği.",
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const courseJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'AI Eğitimi — İşine AI Sistemi Kur',
  description: 'Bireysel ve kurumsal AI eğitimi. Sektörel use-case\'lerle prompt engineering, workflow otomasyonu, RAG ve AI playbook.',
  provider: {
    '@type': 'Person',
    name: 'Tonguç Karaçay',
    url: 'https://tonguckaracay.com',
  },
  inLanguage: 'tr-TR',
  offers: [
    {
      '@type': 'Offer',
      name: 'Bireysel Kohort — Açılış Fiyatı',
      price: '6900',
      priceCurrency: 'TRY',
      availability: 'https://schema.org/InStock',
    },
  ],
};

type Props = { params: { locale: string } };

export default function AiEgitimiPage({ params: { locale } }: Props) {
  setRequestLocale(locale);

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

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-primary-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-white">AI Eğitimi</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/20 to-violet-500/20 border border-indigo-500/40 text-indigo-200 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              UI/UX + SEO + Ads + AI deneyimi
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              AI ile çalışan sistemler{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400">
                kurmayı öğrenin.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-primary-200 mb-4 leading-relaxed">
              Araç öğretmiyoruz. <strong className="text-white">İçerik, reklam ve operasyon süreçlerinize</strong> entegre olan sistemleri birlikte kuruyoruz.
            </p>

            <p className="text-lg text-primary-300 mb-10 leading-relaxed max-w-3xl">
              Doktor, emlakçı, e-ticaretçi, ajans, klinik veya SaaS girişimci — sektörünüze özel
              prompt kütüphanesi, yarı-otomatik akışlar ve AI playbook ile çıkın.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#bireysel"
                className="group inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold hover:from-indigo-400 hover:to-violet-500 transform hover:scale-[1.02] transition-all shadow-lg shadow-indigo-500/30"
              >
                <Users className="w-5 h-5" />
                Bireysel için
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#kurumsal"
                className="group inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-surface-card border border-surface-border text-white font-semibold hover:border-indigo-400/50 hover:bg-surface-card/80 transition-all"
              >
                <Building2 className="w-5 h-5" />
                Şirketim için
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bu eğitim değil callout */}
      <section className="py-10 bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10 border-y border-indigo-500/20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg font-semibold text-indigo-200 mb-4">❗ Bu bir eğitim değil</p>
            <div className="flex flex-wrap justify-center gap-6 text-primary-200">
              <span className="flex items-center gap-2"><span className="text-red-400">✗</span> Araç öğretilmez</span>
              <span className="flex items-center gap-2"><span className="text-red-400">✗</span> Teori anlatılmaz</span>
              <span className="flex items-center gap-2"><span className="text-indigo-300 font-semibold">→</span> İşinize çalışan sistemler kurulur</span>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning — eğitim vs sistem */}
      <section className="py-16 bg-surface-card/30">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title text-center mb-12">
              Sıradan AI eğitimi mi <span className="text-gradient">arıyorsunuz?</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-surface-card/60 border border-red-500/20 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="w-6 h-6 text-red-400" />
                  <h3 className="font-display text-xl font-semibold text-white">Sıradan AI Eğitimi</h3>
                </div>
                <ul className="space-y-3 text-primary-300">
                  <li>• "ChatGPT'ye prompt yazmayı" öğretir</li>
                  <li>• Genel örnekler, herkese aynı içerik</li>
                  <li>• Eğitim biter, kullanmazsanız unutursunuz</li>
                  <li>• İşinize entegre çıktı yok</li>
                  <li>• 1 ay sonra hâlâ ChatGPT açıp ne yazacağını düşünüyorsunuz</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-indigo-500/40 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-indigo-400" />
                  <h3 className="font-display text-xl font-semibold text-white">İşine AI Sistemi Kurma</h3>
                </div>
                <ul className="space-y-3 text-primary-200">
                  <li>✓ Sektörüne özel prompt kütüphanesi (kalıcı)</li>
                  <li>✓ Yarı-otomatik workflow akışları (n8n, Make)</li>
                  <li>✓ Şirket verisiyle çalışan AI asistan (RAG)</li>
                  <li>✓ Ekibinin kullanacağı AI playbook</li>
                  <li>✓ Eğitim biter, <strong className="text-white">akışlar çalışmaya devam eder</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sektörel grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Sektörünüze <span className="text-gradient">özel</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Genel AI kursu değil. Sizin sektörünüzde nasıl kazanç sağlayacağınızı somut araç ve örneklerle gösteriyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {sectors.map((sector) => (
              <Link
                key={sector.anchor}
                href={`#${sector.anchor}`}
                className="group bg-surface-card border border-surface-border rounded-2xl p-6 hover:border-indigo-400/50 hover:bg-surface-card/80 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <sector.icon className="w-6 h-6 text-indigo-300" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-2">{sector.name}</h3>
                <p className="text-primary-300 text-sm leading-relaxed mb-3">{sector.promise}</p>
                <p className="text-xs text-indigo-300/70 font-mono">{sector.tools}</p>
                <div className="flex items-center gap-1 text-indigo-400 text-sm mt-4 group-hover:gap-2 transition-all">
                  Detayları gör
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bireysel vs Kurumsal */}
      <section className="py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Hangi <span className="text-gradient">yoldasın?</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Bireysel olarak mı geleceksin, yoksa şirketinin tamamını mı dönüştürmek istiyorsun?
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* Bireysel */}
            <div id="bireysel" className="bg-gradient-to-br from-indigo-500/10 to-violet-500/5 border border-indigo-500/30 rounded-2xl p-8 scroll-mt-24">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-indigo-300" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">Bireysel Kohort</h3>
              </div>
              <p className="text-primary-300 mb-6">
                Serbest çalışan, freelancer, KOBİ sahibi, profesyonel — kendin için.
              </p>

              <ul className="space-y-3 mb-8">
                {individualBenefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-primary-200">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-surface-darker/50 border border-indigo-500/20 rounded-xl p-5 mb-6">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-sm text-primary-400 line-through">8.000 - 15.000 TL</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/30 text-indigo-200 font-medium">İlk Kohort Özel</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl font-bold text-white">6.900 TL</span>
                  <span className="text-primary-400 text-sm">/ kişi</span>
                </div>
                <p className="text-primary-400 text-xs mt-2">Sınırlı kontenjan — 12 kişi</p>
              </div>

              <Link
                href="/iletisim?konu=ai-egitimi-bireysel"
                className="group block w-full text-center px-6 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold hover:from-indigo-400 hover:to-violet-500 transition-all"
              >
                Hemen kayıt ol
                <ArrowRight className="ml-2 w-4 h-4 inline group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Kurumsal */}
            <div id="kurumsal" className="bg-gradient-to-br from-accent-500/10 to-amber-500/5 border border-accent-500/30 rounded-2xl p-8 scroll-mt-24">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">Kurumsal Program</h3>
              </div>
              <p className="text-primary-300 mb-6">
                5+ kişilik ekipler, departmanlar, şirketler için tasarlanmış in-house program.
              </p>

              <ul className="space-y-3 mb-8">
                {corporateBenefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-primary-200">
                    <CheckCircle2 className="w-5 h-5 text-accent-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-surface-darker/50 border border-accent-500/20 rounded-xl p-5 mb-6">
                <div className="text-sm text-primary-400 mb-1">Şirkete özel teklif</div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl font-bold text-white">30.000 — 150.000 TL</span>
                </div>
                <p className="text-primary-400 text-xs mt-2">Ekip büyüklüğü, kapsam ve süreye göre</p>
              </div>

              <Link
                href="/iletisim?konu=ai-egitimi-kurumsal"
                className="group block w-full text-center px-6 py-4 rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 text-primary-950 font-semibold hover:from-accent-400 hover:to-accent-500 transition-all"
              >
                Keşif görüşmesi al
                <ArrowRight className="ml-2 w-4 h-4 inline group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Müfredat çekirdeği */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Müfredat <span className="text-gradient">çekirdeği</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Hem bireysel hem kurumsal programda öğretilen 6 modül. Sektöre göre derinlik değişir.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {curriculum.map((m, i) => (
              <div
                key={i}
                className="bg-surface-card border border-surface-border rounded-2xl p-6 hover:border-indigo-400/40 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/15 flex items-center justify-center mb-4">
                  <m.icon className="w-6 h-6 text-indigo-300" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-3">{m.title}</h3>
                <ul className="space-y-1.5">
                  {m.points.map((p, j) => (
                    <li key={j} className="text-primary-300 text-sm flex items-start gap-2">
                      <span className="text-indigo-400 mt-1">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sektörel deep dive */}
      <section className="py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Sektörel <span className="text-gradient">use-case'ler</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Eğitim sonunda elinizde ne olacağı somut. İşte birkaç sektör için hazır kullanım senaryoları.
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {sectorDeepDive.map((s) => (
              <div
                key={s.id}
                id={s.id}
                className="bg-surface-card border border-surface-border rounded-2xl p-6 md:p-8 scroll-mt-24"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-500/30 flex items-center justify-center shrink-0">
                    <s.icon className="w-6 h-6 text-indigo-300" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-1">{s.title}</h3>
                    <p className="text-primary-300">{s.intro}</p>
                  </div>
                </div>

                <ul className="grid md:grid-cols-2 gap-2.5 mt-4">
                  {s.use.map((u, i) => (
                    <li key={i} className="flex items-start gap-2 text-primary-200 text-sm">
                      <Zap className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{u}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-5 border-t border-indigo-500/20 space-y-2">
                  <p className="text-sm text-primary-300">
                    <span className="font-semibold text-indigo-300">📦 Eğitim çıktısı: </span>
                    {s.output}
                  </p>
                  <p className="text-xs text-primary-500 italic">
                    * Bunlar yapabileceklerimizden yalnızca bir kısmı — eğitim sürecinde sektörünüze özgü ek senaryolar da keşfediyoruz.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-primary-400 mt-10">
            Sektörünüz listede yok mu?{' '}
            <Link href="/iletisim?konu=ai-egitimi-sektor" className="text-indigo-300 hover:text-indigo-200 underline underline-offset-4">
              Bize yazın
            </Link>
            , kurumsal program özelinde içerik tasarlıyoruz.
          </p>
        </div>
      </section>

      {/* Eğitmen */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="section-title mb-4">
                Neden <span className="text-gradient">benimle?</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5 mb-8">
              <div className="bg-surface-card border border-surface-border rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-indigo-300" />
                </div>
                <div className="font-display text-3xl font-bold text-white mb-1">25+</div>
                <div className="text-primary-300 text-sm">yıl dijital deneyim</div>
              </div>
              <div className="bg-surface-card border border-surface-border rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-indigo-300" />
                </div>
                <div className="font-display text-3xl font-bold text-white mb-1">4-in-1</div>
                <div className="text-primary-300 text-sm">UI/UX + SEO + Ads + AI</div>
              </div>
              <div className="bg-surface-card border border-surface-border rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-indigo-300" />
                </div>
                <div className="font-display text-3xl font-bold text-white mb-1">100+</div>
                <div className="text-primary-300 text-sm">marka deneyimi</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-500/10 to-violet-500/5 border border-indigo-500/30 rounded-2xl p-8 text-center">
              <p className="text-lg text-primary-200 leading-relaxed mb-6">
                Diğer AI eğitimcilerinden farklı olarak <strong className="text-white">tasarım, SEO, reklam ve AI'ı bir arada</strong> kullanmış birinden öğreniyorsunuz.
                Sadece AI değil; sonuç odaklı sistem kuruyoruz.
              </p>
              <Link href="/hakkimda" className="btn-secondary">
                Tonguç hakkında daha fazlası
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="section-title mb-4">
                Sıkça sorulan <span className="text-gradient">sorular</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-surface-card border border-surface-border rounded-xl overflow-hidden"
                >
                  <summary className="cursor-pointer px-6 py-4 font-medium text-white flex items-center justify-between gap-4 hover:bg-surface-card/80 transition-colors">
                    <span>{faq.q}</span>
                    <ArrowRight className="w-4 h-4 text-indigo-400 shrink-0 group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-6 pb-4 text-primary-300 leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8">
        <div className="container-custom">
          <p className="text-center text-sm text-primary-500 max-w-2xl mx-auto">
            Sonuçlar; sektör, uygulama ve sürekliliğe göre değişir. Bu program size sistemi kurmayı öğretir — uygulamak sizin elinizde.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-500/15 via-violet-500/10 to-fuchsia-500/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              AI'ı işinizin parçası yapma vakti
            </h2>
            <p className="text-xl text-primary-200 mb-10">
              Bireysel kohort veya kurumsal program — hangisi size uygun, 30 dakikalık ücretsiz görüşmede konuşalım.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/iletisim?konu=ai-egitimi-bireysel"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold hover:from-indigo-400 hover:to-violet-500 transform hover:scale-[1.02] transition-all shadow-lg shadow-indigo-500/30 text-lg"
              >
                Bireysel için kayıt
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/iletisim?konu=ai-egitimi-kurumsal"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-surface-card border border-accent-500/40 text-white font-semibold hover:border-accent-400 transition-all text-lg"
              >
                Kurumsal görüşme
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
