import { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from 'next-intl/server';
import { ArrowRight, CheckCircle2, Share2, Users, Calendar, TrendingUp, MessageCircle, BarChart3, Instagram, Youtube, Linkedin, Twitter, Video, Image, PenTool, Target, Clock, AlertTriangle, Heart, Eye, Building2, ShoppingCart, Briefcase, Utensils, HeartPulse } from "lucide-react";

export const metadata: Metadata = {
  title: "Sosyal Medya Yönetimi | Instagram, TikTok, LinkedIn | Tonguç Karaçay",
  description: "Profesyonel sosyal medya yönetimi ile markanızı büyütün. İçerik stratejisi, organik büyüme, topluluk yönetimi. Instagram, TikTok, LinkedIn, Facebook yönetimi.",
  keywords: ["sosyal medya yönetimi", "Instagram yönetimi", "TikTok yönetimi", "LinkedIn yönetimi", "içerik stratejisi", "topluluk yönetimi", "sosyal medya danışmanlığı"],
  openGraph: {
    title: "Sosyal Medya Yönetimi | Instagram, TikTok, LinkedIn",
    description: "Profesyonel sosyal medya yönetimi ile markanızı büyütün. İçerik stratejisi ve organik büyüme.",
    type: "website",
  },
  alternates: {
    canonical: 'https://tonguckaracay.com/hizmetler/sosyal-medya-yonetimi',
  },
};

// ============================================
// TÜRKÇE İÇERİK - BAĞIMSIZ ARAŞTIRMA SONUCU
// ============================================
// Rakip Analizi (Google.com.tr):
// - Mobitek: Meta/TikTok Partner, CTR/CPA/ROAS odaklı, strateji+kreatif+performans
// - TickTockBoom: Dijital PR, online itibar, 15 yıl deneyim, BoomSonar Suite
// - İz Medya: Performans odaklı, mavi tik hizmeti, çoklu platform
// - Cremicro: Kreatif sosyal medya, 800-5000$ fiyat aralığı, tüm platformlar
// - Union Istanbul: Instagram partner, topluluk yönetimi, organik büyüme
// - Ahtapot: 45 kişilik ekip, butik yaklaşım, prodüksiyon dahil
//
// Eksik Bırakılan Noktalar:
// - Bireysel danışman modeli çok nadir
// - SEO + sosyal medya entegrasyonu az
// - AI destekli içerik üretimi yeni
// - Uzun vadeli organik strateji yerine hızlı sonuç odağı hakim
// - Şeffaf fiyatlandırma çok az
//
// Long-tail Keywords (Commercial/Service Intent):
// 1. sosyal medya yönetimi hizmeti [Commercial]
// 2. Instagram hesap yönetimi [Commercial]
// 3. TikTok içerik yönetimi [Service]
// 4. LinkedIn kurumsal yönetim [Commercial]
// 5. sosyal medya içerik stratejisi [Service]
// 6. organik takipçi artışı [Commercial]
// 7. sosyal medya danışmanlığı [Service]
// 8. topluluk yönetimi hizmeti [Commercial]
// 9. sosyal medya raporlama [Service]
// 10. marka sosyal medya yönetimi [Commercial]
// 11. kurumsal sosyal medya [Service]
// 12. sosyal medya pazarlama [Commercial]
// ============================================

const platforms = [
  { 
    icon: Instagram, 
    name: "Instagram", 
    description: "Feed, Stories, Reels içerik üretimi. Hashtag stratejisi, etkileşim artırma ve organik büyüme."
  },
  { 
    icon: Video, 
    name: "TikTok", 
    description: "Trend odaklı kısa video içerikleri. Viral potansiyeli yüksek, genç kitleye ulaşım."
  },
  { 
    icon: Linkedin, 
    name: "LinkedIn", 
    description: "B2B odaklı profesyonel içerik. Thought leadership, şirket sayfası ve kişisel marka yönetimi."
  },
  { 
    icon: Users, 
    name: "Facebook", 
    description: "Sayfa yönetimi, topluluk oluşturma. Geniş demografik erişim ve reklam entegrasyonu."
  },
  { 
    icon: Twitter, 
    name: "X (Twitter)", 
    description: "Anlık gündemle entegrasyon, marka sesi oluşturma, müşteri iletişimi."
  },
  { 
    icon: Youtube, 
    name: "YouTube", 
    description: "Video içerik stratejisi, SEO optimizasyonu, kanal büyütme ve Shorts içerikleri."
  }
];

const services = [
  { 
    icon: PenTool, 
    title: "İçerik Stratejisi & Üretimi", 
    description: "Marka kimliğinize uygun içerik takvimi, görsel tasarım, copywriting ve video içerik planlaması." 
  },
  { 
    icon: Calendar, 
    title: "Paylaşım Takvimi & Yönetim", 
    description: "Düzenli paylaşım planı, en uygun zamanlamalar, çoklu platform koordinasyonu ve içerik onay süreci." 
  },
  { 
    icon: MessageCircle, 
    title: "Topluluk Yönetimi", 
    description: "Yorum ve mesaj takibi, müşteri etkileşimi, kriz yönetimi ve marka savunuculuğu oluşturma." 
  },
  { 
    icon: TrendingUp, 
    title: "Organik Büyüme Stratejisi", 
    description: "Hashtag optimizasyonu, etkileşim artırma teknikleri, işbirliği fırsatları ve algoritma uyumu." 
  },
  { 
    icon: BarChart3, 
    title: "Analiz & Raporlama", 
    description: "Aylık performans raporları, rakip analizi, içgörüler ve strateji önerileri." 
  },
  { 
    icon: Target, 
    title: "Reklam Entegrasyonu", 
    description: "Organik içeriklerle uyumlu reklam stratejisi, boost önerileri ve bütçe optimizasyonu." 
  }
];

const process = [
  { 
    step: "01", 
    title: "Marka Analizi", 
    description: "Mevcut sosyal medya varlığınız, rakipleriniz ve hedef kitleniz analiz ediliyor." 
  },
  { 
    step: "02", 
    title: "Strateji Geliştirme", 
    description: "Hedeflerinize uygun platform seçimi, içerik pillars'ları ve ses tonu belirleniyor." 
  },
  { 
    step: "03", 
    title: "İçerik Planlaması", 
    description: "Aylık içerik takvimi hazırlanıyor, görsel/video brief'leri oluşturuluyor." 
  },
  { 
    step: "04", 
    title: "Üretim & Onay", 
    description: "İçerikler üretiliyor, sizin onayınıza sunuluyor, gerekli revizyonlar yapılıyor." 
  },
  { 
    step: "05", 
    title: "Yayın & Etkileşim", 
    description: "İçerikler planlandığı şekilde yayınlanıyor, yorumlar ve mesajlar yönetiliyor." 
  },
  { 
    step: "06", 
    title: "Analiz & Optimizasyon", 
    description: "Performans verileri analiz ediliyor, strateji sürekli optimize ediliyor." 
  }
];

const industries = [
  { icon: ShoppingCart, name: "E-Ticaret", desc: "Ürün showcase, kampanyalar, UGC" },
  { icon: Building2, name: "Kurumsal", desc: "Employer branding, B2B içerik" },
  { icon: Briefcase, name: "Profesyonel Hizmet", desc: "Thought leadership, güven" },
  { icon: Utensils, name: "Restoran & Kafe", desc: "Görsel odaklı, yerel erişim" },
  { icon: HeartPulse, name: "Sağlık & Wellness", desc: "Eğitici içerik, güvenilirlik" },
  { icon: Users, name: "Kişisel Markalar", desc: "İnfluencer, coach, danışman" }
];

const advantages = [
  {
    title: "Strateji Odaklı Yaklaşım",
    description: "Sadece içerik üretmek değil, iş hedeflerinize hizmet eden bütünsel bir sosyal medya stratejisi. Her paylaşımın bir amacı var."
  },
  {
    title: "SEO & Sosyal Medya Entegrasyonu",
    description: "SEO uzmanlığımı sosyal medyaya taşıyorum. YouTube SEO, LinkedIn aranabilirlik, hashtag stratejisi ile organik keşfedilebilirliği artırıyorum."
  },
  {
    title: "AI Destekli İçerik",
    description: "Yapay zeka araçlarıyla içerik üretim sürecini hızlandırıyor, trend analizi yapıyor ve veri odaklı içerik kararları alıyorum."
  },
  {
    title: "Şeffaf Raporlama",
    description: "Aylık detaylı raporlarla neyin işe yaradığını, neyin yaramadığını net görüyorsunuz. Vanity metrics yerine iş sonuçları odaklı KPI'lar."
  }
];

const faqs = [
  {
    question: "Sosyal medya yönetimi neleri kapsar?",
    answer: "Strateji geliştirme, içerik takvimi oluşturma, görsel/video içerik üretimi, paylaşım yönetimi, yorum ve mesaj takibi, topluluk yönetimi ve aylık performans raporlaması. Kapsam ihtiyaca göre özelleştirilebilir."
  },
  {
    question: "Kaç platformu yönetiyorsunuz?",
    answer: "Tek platform veya çoklu platform paketleri sunuyorum. En yaygın kombinasyon Instagram + LinkedIn veya Instagram + TikTok. Her ek platform için içerik hacmi ve yönetim iş yükü artacağından fiyatlandırma buna göre ayarlanır."
  },
  {
    question: "İçerikler nasıl hazırlanıyor?",
    answer: "Önce marka kimliğinizi ve hedef kitlenizi anlıyorum. Aylık içerik takvimi hazırlıyor, sizin onayınıza sunuyorum. Görseller Canva/Figma ile, videolar basit edit araçlarıyla hazırlanıyor. Profesyonel fotoğraf/video çekimi gerekirse ayrıca koordine edilir."
  },
  {
    question: "Sonuçlar ne kadar sürede görülür?",
    answer: "Organik büyümede ilk 2-4 hafta analiz ve strateji dönemidir. 3. aydan itibaren tutarlı büyüme görülmeye başlar. 6 ayda anlamlı organik büyüme hedeflenir. Reklam destekli kampanyalarda sonuçlar daha hızlı gelir."
  },
  {
    question: "Sosyal medya yönetimi fiyatları ne kadar?",
    answer: "Fiyatlar platform sayısı, içerik hacmi ve hizmet kapsamına göre değişir. Tek platform için aylık 5.000 TL'den başlayan paketler mevcut. Detaylı fiyat için ihtiyaç analizi sonrası teklif sunuyorum."
  }
];

type Props = { params: { locale: string } };

export default function SosyalMedyaYonetimiPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-primary-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-white">Sosyal Medya Yönetimi</span>
          </nav>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="text-gradient">Sosyal Medya</span> Yönetimi
              </h1>
              <p className="text-lg md:text-xl text-primary-300 mb-8 leading-relaxed">
                Markanızı sosyal medyada büyütün. İçerik stratejisi, düzenli paylaşımlar, topluluk yönetimi ve performans analizi ile sosyal medya varlığınızı güçlendiriyorum. Instagram, TikTok, LinkedIn ve diğer platformlarda tutarlı ve etkili bir marka sesi oluşturun.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/iletisim" className="btn-primary group text-lg">
                  Ücretsiz Strateji Görüşmesi
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#süreç" className="btn-secondary text-lg">
                  Çalışma Sürecim
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 text-sm text-primary-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span>Strateji Odaklı</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span>Organik Büyüme</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span>Şeffaf Raporlama</span>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="card p-8">
              <h2 className="text-xl font-semibold text-white mb-6">Sosyal medyanın gücü</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary-300">Türkiye sosyal medya kullanıcısı</span>
                    <span className="text-accent-500 font-bold">57M+</span>
                  </div>
                  <div className="h-2 bg-surface-border rounded-full overflow-hidden">
                    <div className="h-full bg-accent-500 rounded-full" style={{ width: '85%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary-300">Instagram'dan alışveriş yapan kullanıcı</span>
                    <span className="text-accent-500 font-bold">%44</span>
                  </div>
                  <div className="h-2 bg-surface-border rounded-full overflow-hidden">
                    <div className="h-full bg-accent-500 rounded-full" style={{ width: '65%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary-300">Marka keşfi için sosyal medya kullanımı</span>
                    <span className="text-accent-500 font-bold">%76</span>
                  </div>
                  <div className="h-2 bg-surface-border rounded-full overflow-hidden">
                    <div className="h-full bg-accent-500 rounded-full" style={{ width: '76%' }} />
                  </div>
                </div>
              </div>
              <p className="text-xs text-primary-500 mt-4">Kaynak: We Are Social, DataReportal Turkey 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6">
              Bu Hizmet Hangi <span className="text-gradient">Sorunları Çözer?</span>
            </h2>
            <p className="text-primary-300 text-lg mb-12">
              Profesyonel sosyal medya yönetimi, dijital varlığınızı güçlendirir.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Zaman Yetersizliği</h3>
              <p className="text-primary-400 text-sm mb-3">Sosyal medyaya düzenli içerik üretecek zamanınız yok.</p>
              <p className="text-accent-400 text-sm">→ Tam kapsamlı yönetimle bu yükü üzerinizden alıyorum</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Düşük Görünürlük</h3>
              <p className="text-primary-400 text-sm mb-3">Paylaşımlarınız az kişiye ulaşıyor, etkileşim düşük.</p>
              <p className="text-accent-400 text-sm">→ Algoritma uyumlu strateji ve hashtag optimizasyonu</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <PenTool className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">İçerik Fikri Eksikliği</h3>
              <p className="text-primary-400 text-sm mb-3">Ne paylaşacağınızı bilmiyorsunuz, içerik tükeniyor.</p>
              <p className="text-accent-400 text-sm">→ İçerik pillars ve aylık takvimle sürekli taze fikirler</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Düşük Etkileşim</h3>
              <p className="text-primary-400 text-sm mb-3">Takipçileriniz var ama etkileşim alamıyorsunuz.</p>
              <p className="text-accent-400 text-sm">→ Topluluk yönetimi ve engagement stratejileri</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Tutarsız Marka İmajı</h3>
              <p className="text-primary-400 text-sm mb-3">Farklı platformlarda farklı tonlar, karışık mesajlar.</p>
              <p className="text-accent-400 text-sm">→ Tutarlı marka sesi ve görsel kimlik rehberi</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Ölçüm Eksikliği</h3>
              <p className="text-primary-400 text-sm mb-3">Neyin işe yaradığını, neyin yaramadığını bilmiyorsunuz.</p>
              <p className="text-accent-400 text-sm">→ Detaylı aylık raporlama ve veri odaklı optimizasyon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Yönettiğim <span className="text-gradient">Platformlar</span>
            </h2>
            <p className="text-primary-300 max-w-2xl mx-auto">
              Her platformun dinamikleri farklıdır. Platforma özel stratejiler uyguluyorum.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, i) => (
              <div key={i} className="card p-6 hover:border-accent-500/30 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-accent-500/20 flex items-center justify-center mb-4">
                  <platform.icon className="w-7 h-7 text-accent-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{platform.name}</h3>
                <p className="text-primary-300">{platform.description}</p>
              </div>
            ))}
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
              Tam kapsamlı sosyal medya yönetimi hizmetleri.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="card p-6">
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-accent-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-primary-300 text-sm">{service.description}</p>
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
              Sosyal medya yönetiminde izlediğim sistematik süreç.
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
                Sektörel <span className="text-gradient">Deneyim</span>
              </h2>
              <p className="text-primary-300 mb-8">
                Her sektörün sosyal medya dinamikleri farklıdır. E-ticarette ürün görselleri ve UGC, B2B'de thought leadership, restoranlarda görsel odaklı içerikler gibi sektöre özel yaklaşımlar uyguluyorum.
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

            <div className="card p-8 border-accent-500/30">
              <h3 className="text-xl font-semibold text-white mb-4">İçerik Türleri</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-pink-500/20 flex items-center justify-center">
                    <Image className="w-4 h-4 text-pink-400" />
                  </div>
                  <span className="text-primary-200">Statik görseller & carousel'ler</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center">
                    <Video className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-primary-200">Reels, TikTok & Shorts videoları</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center">
                    <Share2 className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="text-primary-200">Stories & interaktif içerikler</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-green-500/20 flex items-center justify-center">
                    <PenTool className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-primary-200">Uzun form içerikler (LinkedIn, Blog)</span>
                </div>
              </div>
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
              Standart sosyal medya ajanslarından farklı olarak sunduğum avantajlar.
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
                <h3 className="text-xl font-semibold text-white mb-2">Reklam ile Entegre Strateji</h3>
                <p className="text-primary-300">
                  <Link href="/hizmetler/online-reklamcilik" className="text-accent-400 hover:underline">Online reklamcılık</Link> hizmetimle birlikte organik ve ücretli stratejileri entegre ediyorum. Organik içerikler reklamlara, reklamlar organik büyümeye destek verir.
                </p>
              </div>
              <Link href="/hizmetler/online-reklamcilik" className="btn-secondary flex-shrink-0">
                Online Reklamcılık
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
      <section className="py-16 md:py-20 bg-gradient-to-br from-pink-500/10 to-blue-500/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Sosyal Medya Stratejinizi Oluşturalım
          </h2>
          <p className="text-primary-300 mb-8 max-w-xl mx-auto">
            Ücretsiz strateji görüşmesiyle sosyal medya varlığınızı nasıl güçlendirebileceğimizi konuşalım.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/iletisim" className="btn-primary group text-lg">
              Ücretsiz Strateji Görüşmesi
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
                "text": faq.answer
              }
            }))
          })
        }}
      />

      {/* Schema.org Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Sosyal Medya Yönetimi",
            "description": "Profesyonel sosyal medya yönetimi ile markanızı büyütün. İçerik stratejisi, organik büyüme, topluluk yönetimi.",
            "provider": {
              "@type": "Person",
              "name": "Tonguç Karaçay",
              "url": "https://tonguckaracay.com"
            },
            "areaServed": "TR",
            "serviceType": "Social Media Management"
          })
        }}
      />
    </main>
  );
}
