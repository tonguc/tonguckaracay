import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { setRequestLocale } from 'next-intl/server';
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
  { value: "12+", label: "Ülkede Hizmet" },
  { value: "100+", label: "Marka" },
];

type Props = {
  params: { locale: string };
};

export default function HakkimdaPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  
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
                Merhaba, Ben <span className="text-gradient">Tonguç Karaçay</span>
              </h1>

              <p className="text-xl text-primary-300 mb-6 leading-relaxed">
                25 yılı aşkın süredir UI/UX tasarım, SEO ve growth marketing alanlarında 
                çalışıyorum. Türkiye'nin önde gelen kurumsal şirketlerinin yanı sıra 
                Amerika, Kanada ve Almanya'daki firmalara da hizmet veriyorum.
              </p>

              <p className="text-primary-300 mb-8 leading-relaxed">
                Kariyerime Türkiye'nin en büyük medya gruplarında başladım. Ulusal TV kanalları 
                ve gazete sitelerinin dijital ürünlerini tasarladım.
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
                <a href="https://www.linkedin.com/in/tongu%C3%A7-kara%C3%A7ay-36311040/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
                <a href="https://www.instagram.com/tonguckaracay" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  Instagram
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
