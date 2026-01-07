import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { unstable_setRequestLocale } from 'next-intl/server';
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
  keywords: ["Tonguç Karaçay", "AI-Driven UX", "Growth Partner", "UI UX tasarımcı", "SEO uzmanı"],
  alternates: {
    canonical: 'https://tonguckaracay.com/hakkimda',
    languages: {
      'tr': 'https://tonguckaracay.com/hakkimda',
      'en': 'https://tonguckaracay.com/en/about',
    },
  },
};

const expertise = [
  { icon: Award, title: "UI/UX Tasarım", description: "Kullanıcı araştırması, wireframe, prototip ve arayüz tasarımı." },
  { icon: Globe, title: "SEO Danışmanlığı", description: "Teknik SEO, içerik stratejisi, uluslararası SEO." },
  { icon: Megaphone, title: "Online Reklamcılık", description: "Google Ads, Meta Ads, performans pazarlama." },
  { icon: Briefcase, title: "Yapay Zeka Çözümleri", description: "AI chatbot, otomasyon, iş süreçleri entegrasyonu." },
  { icon: Share2, title: "Sosyal Medya", description: "Strateji, içerik planlaması, organik büyüme." }
];

const brands = [
  "THY", "BMW", "Jaguar", "Range Rover", "Mini", "Borusan Otomotiv", "Galatasaray",
  "Sabah", "Sabah USA", "Star", "ATV", "A Haber", "A Spor", "Güneş", "Takvim",
  "Fotomaç", "Akşam", "Yeni Asır", "24 TV", "360 TV", "Turkuvaz Radyo", "Alem FM",
  "Aktüel", "Ağaoğlu My Life", "Asis", "Burulaş", "LiveDoctor", "Callhealer",
  "Sigorta 7", "Network Hardwares", "E-Wallet", "Leman", "Eva", "Otohaber"
];

const stats = [
  { value: "25+", label: "Yıl Deneyim" },
  { value: "3", label: "Ülkede Hizmet" },
  { value: "35+", label: "Marka" },
];

type Props = {
  params: { locale: string };
};

export default function HakkimdaPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  
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
            <div>
              <nav className="flex items-center gap-2 text-sm text-primary-400 mb-6">
                <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
                <span>/</span>
                <span className="text-white">Hakkımda</span>
              </nav>

              <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Merhaba, ben <span className="text-gradient">Tonguç Karaçay</span>
              </h1>

              <p className="text-xl text-primary-300 mb-6 leading-relaxed">
                25 yılı aşkın süredir UI/UX tasarım, SEO ve growth marketing alanlarında 
                çalışıyorum. Türkiye'nin önde gelen kurumsal şirketlerinin yanı sıra 
                Amerika, Kanada ve Almanya'daki firmalara da hizmet veriyorum.
              </p>

              <p className="text-primary-300 mb-8 leading-relaxed">
                Kariyerime Türkiye'nin en büyük medya gruplarında başladım. Sabah, ATV, Star TV 
                gibi markaların dijital ürünlerini tasarladım.
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
                <a href="https://linkedin.com/in/tonguckaracay" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-indigo-500/20 rounded-2xl transform rotate-3" />
                <div className="absolute inset-0 bg-surface-card border border-surface-border rounded-2xl transform -rotate-3" />
                <div className="relative rounded-2xl overflow-hidden border border-surface-border">
                  <Image src="/tonguc-karacay.jpg" alt="Tonguç Karaçay" width={500} height={500} className="w-full h-auto object-cover" priority />
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
                <div className="text-3xl md:text-4xl font-display font-bold text-accent-400 mb-1">{stat.value}</div>
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
            <h2 className="section-title mb-4">Uzmanlık <span className="text-gradient">Alanlarım</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {expertise.map((item, index) => (
              <div key={index} className="bg-surface-card border border-surface-border rounded-2xl p-5 text-center hover:border-accent-500/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="text-lg font-display font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-primary-300 text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="section-title mb-4">Çalıştığım <span className="text-gradient">Firmalar</span></h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {brands.map((brand, index) => (
              <div key={index} className="px-4 py-2 bg-surface-card border border-surface-border rounded-lg text-primary-300 text-sm hover:border-accent-500/50 hover:text-white transition-all">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-accent-500/10 to-indigo-500/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Birlikte Çalışalım</h2>
            <p className="text-xl text-primary-300 mb-8">Projenizi konuşmak için benimle iletişime geçin. İlk görüşme ücretsiz.</p>
            <Link href="/iletisim" className="btn-primary group text-lg px-8 py-4">
              İletişime Geç
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
