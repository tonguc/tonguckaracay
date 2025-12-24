import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Award,
  Briefcase,
  Globe,
  CheckCircle2,
  MapPin,
  Linkedin,
  Megaphone,
  Share2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hakkımda | Tonguç Karaçay - AI-Driven UX & Growth Partner",
  description: "25+ yıllık deneyimle UI/UX tasarım, SEO ve AI çözümleri. THY, BMW, Galatasaray gibi 35+ markaya hizmet. Türkiye ve uluslararası firmalara danışmanlık.",
  keywords: "Tonguç Karaçay, AI-Driven UX, Growth Partner, UI UX tasarımcı, SEO uzmanı",
};

const expertise = [
  {
    icon: Award,
    title: "UI/UX Tasarım",
    description: "Kullanıcı araştırması, wireframe, prototip ve arayüz tasarımı."
  },
  {
    icon: Globe,
    title: "SEO Danışmanlığı",
    description: "Teknik SEO, içerik stratejisi, uluslararası SEO."
  },
  {
    icon: Megaphone,
    title: "Online Reklamcılık",
    description: "Google Ads, Meta Ads, performans pazarlama."
  },
  {
    icon: Briefcase,
    title: "Yapay Zeka Çözümleri",
    description: "AI chatbot, otomasyon, iş süreçleri entegrasyonu."
  },
  {
    icon: Share2,
    title: "Sosyal Medya",
    description: "Strateji, içerik planlaması, organik büyüme."
  }
];

const brands = [
  "THY",
  "BMW",
  "Jaguar",
  "Range Rover",
  "Mini",
  "Borusan Otomotiv",
  "Galatasaray",
  "Sabah",
  "Sabah USA",
  "Star",
  "ATV",
  "A Haber",
  "A Spor",
  "Güneş",
  "Takvim",
  "Fotomaç",
  "Akşam",
  "Yeni Asır",
  "24 TV",
  "360 TV",
  "Turkuvaz Radyo",
  "Alem FM",
  "Aktüel",
  "Ağaoğlu My Life",
  "Asis",
  "Burulaş",
  "LiveDoctor",
  "Callhealer",
  "Sigorta 7",
  "Network Hardwares",
  "E-Wallet",
  "Leman",
  "Eva",
  "Otohaber",
  "Dr. Fatih Akova",
  "Dr. Kemal Tuskan",
  "Dr. Baver Samancı"
];

const stats = [
  { value: "25+", label: "Yıl Deneyim" },
  { value: "3", label: "Ülkede Hizmet" },
  { value: "35+", label: "Marka" },
];

export default function HakkimdaPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <nav className="flex items-center gap-2 text-sm text-primary-400 mb-6">
                <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
                <span>/</span>
                <span className="text-white">Hakkımda</span>
              </nav>

              <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Merhaba, ben{" "}
                <span className="text-gradient">Tonguç Karaçay</span>
              </h1>

              <p className="text-xl text-primary-300 mb-6 leading-relaxed">
                25 yılı aşkın süredir UI/UX tasarım, SEO ve dijital pazarlama alanlarında 
                çalışıyorum. Türkiye'nin önde gelen kurumsal şirketlerinin yanı sıra 
                Amerika, Kanada ve Almanya'daki firmalara da hizmet veriyorum.
              </p>

              <p className="text-primary-300 mb-8 leading-relaxed">
                Kariyerime Türkiye'nin en büyük medya gruplarında başladım. Sabah, ATV, Star TV 
                gibi markaların dijital ürünlerini tasarladım. Sonraki yıllarda Sabancı Holding, 
                Borusan Otomotiv, MNG Holding gibi kurumsal şirketlere danışmanlık verdim.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-primary-300">
                  <MapPin className="w-5 h-5 text-accent-400" />
                  <span>İstanbul, Türkiye</span>
                </div>
                <div className="flex items-center gap-2 text-primary-300">
                  <Globe className="w-5 h-5 text-accent-400" />
                  <span>Uzaktan Çalışma</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/iletisim" className="btn-primary group">
                  İletişime Geç
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a 
                  href="https://linkedin.com/in/tonguckaracay" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-indigo-500/20 rounded-2xl transform rotate-3" />
                <div className="absolute inset-0 bg-surface-card border border-surface-border rounded-2xl transform -rotate-3" />
                <div className="relative rounded-2xl overflow-hidden border border-surface-border">
                  <Image
                    src="/tonguc-karacay.jpg"
                    alt="Tonguç Karaçay - UI/UX Tasarımcı ve SEO Uzmanı"
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-surface-card/30">
        <div className="container-custom">
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-accent-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Uzmanlık{" "}
              <span className="text-gradient">Alanlarım</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {expertise.map((item, index) => (
              <div 
                key={index}
                className="bg-surface-card/50 border border-surface-border rounded-2xl p-5 text-center hover:border-accent-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="text-lg font-display font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-primary-300 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-surface-card/30">
        <div className="container-custom">
          <h2 className="section-title mb-8">
            Hikayem
          </h2>

          <div className="space-y-6 text-primary-300 leading-relaxed">
              <p>
                Dijital dünyaya olan tutkum 90'lı yılların sonlarında başladı. O dönemde Türkiye'de 
                internet henüz yeni yayılıyordu ve ben bu yeni mecranın potansiyelini gördüm. 
                İlk web sitelerimi HTML ve CSS ile kodladım, tasarımdan geliştirmeye kadar her şeyi 
                kendim yapıyordum.
              </p>

              <p>
                2000'li yılların başında Türkiye'nin en büyük medya gruplarında çalışmaya başladım. 
                <strong className="text-white"> Sabah, ATV, Star, A Haber, Güneş, Takvim, Fotomaç </strong> 
                gibi markaların dijital ürünlerini tasarladım. Bu deneyim bana yüksek trafikli, 
                büyük ölçekli projelerde çalışma fırsatı verdi.
              </p>

              <p>
                Zamanla odak noktam tasarımdan kullanıcı deneyimine (UX) kaydı. Güzel görünen 
                değil, <strong className="text-white">iş hedeflerine ulaşan</strong> tasarımlar 
                yapmaya başladım. Bu süreçte SEO'yu da öğrendim çünkü en iyi tasarım bile 
                bulunamazsa değersizdir.
              </p>

              <p>
                Son yıllarda <strong className="text-white">THY, BMW, Jaguar, Range Rover, 
                Galatasaray, Borusan Otomotiv</strong> gibi Türkiye ve uluslararasının önde gelen 
                markalarına danışmanlık verdim. Aynı zamanda <strong className="text-white">Amerika, Kanada ve 
                Almanya</strong>'daki firmalara uluslararası SEO hizmeti sundum.
              </p>

              <p>
                Bugün UI/UX tasarım, SEO ve yapay zeka çözümlerini bir arada sunarak müşterilerime 
                uçtan uca dijital danışmanlık hizmeti veriyorum. 25+ yıllık deneyimimi her projede 
                kullanıyorum.
              </p>
            </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="section-title mb-4">
              Çalıştığım ve Destek Verdiğim{" "}
              <span className="text-gradient">Firmalar</span>
            </h2>
            <p className="text-primary-300">
              Türkiye ve uluslararası markalar
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {brands.map((brand, index) => (
              <div 
                key={index}
                className="px-4 py-2 bg-surface-card/50 border border-surface-border rounded-lg text-primary-300 text-sm hover:border-accent-500/50 hover:text-white transition-all"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-8 text-center">
              Çalışma{" "}
              <span className="text-gradient">Prensiplerim</span>
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Kullanıcı Odaklı</h3>
                  <p className="text-primary-300">Her kararın merkezinde kullanıcı var. Güzel görünen değil, işe yarayan tasarımlar yapıyorum.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Sonuç Odaklı</h3>
                  <p className="text-primary-300">Metrikler ve verilerle çalışıyorum. Her projenin ölçülebilir hedefleri olmalı.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Şeffaf İletişim</h3>
                  <p className="text-primary-300">Doğrudan ve net iletişim. Ne yapıyorum, neden yapıyorum, sonuçlar ne - her şey açık.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Sürekli Öğrenme</h3>
                  <p className="text-primary-300">Dijital dünya hızla değişiyor. Yeni teknolojileri ve trendleri sürekli takip ediyorum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-accent-500/10 to-indigo-500/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Birlikte Çalışalım
            </h2>
            <p className="text-xl text-primary-300 mb-8">
              Projenizi konuşmak için benimle iletişime geçin. İlk görüşme ücretsiz.
            </p>
            <Link href="/iletisim" className="btn-primary group text-lg px-8 py-4">
              İletişime Geç
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
            "@type": "Person",
            "name": "Tonguç Karaçay",
            "jobTitle": "AI-Driven UX & Growth Partner",
            "description": "25+ yıllık deneyimle UI/UX tasarım, SEO ve AI çözümleri. THY, BMW, Galatasaray gibi 35+ markaya hizmet.",
            "url": "https://tonguckaracay.com/hakkimda",
            "image": "https://tonguckaracay.com/tonguc-karacay.jpg",
            "sameAs": [
              "https://linkedin.com/in/tonguckaracay",
              "https://behance.net/tonguc"
            ],
            "knowsAbout": ["UI/UX Design", "SEO", "Growth Hacking", "Artificial Intelligence", "Digital Marketing"],
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance"
            }
          })
        }}
      />
    </main>
  );
}
