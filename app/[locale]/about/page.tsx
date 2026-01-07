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
  title: "About | Tonguç Karaçay - AI-Driven UX & Growth Partner",
  description: "25+ years of experience in UI/UX design, SEO, and AI solutions. Serving 35+ brands including Turkish Airlines, BMW, Galatasaray. International consulting services.",
  keywords: ["Tonguç Karaçay", "AI-Driven UX", "Growth Partner", "UI UX designer", "SEO expert"],
  alternates: {
    canonical: 'https://tonguckaracay.com/en/about',
    languages: {
      'tr': 'https://tonguckaracay.com/hakkimda',
      'en': 'https://tonguckaracay.com/en/about',
    },
  },
};

const expertise = [
  { icon: Award, title: "UI/UX Design", description: "User research, wireframes, prototypes, and interface design." },
  { icon: Globe, title: "SEO Consulting", description: "Technical SEO, content strategy, international SEO." },
  { icon: Megaphone, title: "Online Advertising", description: "Google Ads, Meta Ads, performance marketing." },
  { icon: Briefcase, title: "AI Solutions", description: "AI chatbots, automation, business process integration." },
  { icon: Share2, title: "Social Media", description: "Strategy, content planning, organic growth." }
];

const brands = [
  "Turkish Airlines", "BMW", "Jaguar", "Range Rover", "Mini", "Borusan Automotive", "Galatasaray",
  "Sabah", "Sabah USA", "Star", "ATV", "A Haber", "A Spor", "Güneş", "Takvim",
  "Fotomaç", "Akşam", "Yeni Asır", "24 TV", "360 TV", "Turkuvaz Radio", "Alem FM",
  "Aktüel", "Ağaoğlu My Life", "Asis", "Burulaş", "LiveDoctor", "Callhealer",
  "Sigorta 7", "Network Hardwares", "E-Wallet", "Leman", "Eva", "Otohaber"
];

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "3", label: "Countries Served" },
  { value: "35+", label: "Brands" },
];

type Props = {
  params: { locale: string };
};

export default function AboutPage({ params: { locale } }: Props) {
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
                <Link href="/en" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <span className="text-white">About</span>
              </nav>

              <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Hello, I'm <span className="text-gradient">Tonguç Karaçay</span>
              </h1>

              <p className="text-xl text-primary-300 mb-6 leading-relaxed">
                For over 25 years, I've been working in UI/UX design, SEO, and growth marketing. 
                I serve leading corporate companies in Turkey as well as firms in the USA, 
                Canada, and Germany.
              </p>

              <p className="text-primary-300 mb-8 leading-relaxed">
                I started my career at Turkey's largest media groups, designing digital products 
                for brands like Sabah, ATV, and Star TV.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-primary-300">
                  <MapPin className="w-5 h-5 text-accent-400" />
                  <span>Istanbul, Turkey</span>
                </div>
                <div className="flex items-center gap-2 text-primary-300">
                  <Globe className="w-5 h-5 text-accent-400" />
                  <span>Remote Work</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/en/contact" className="btn-primary group">
                  Get in Touch
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
            <h2 className="section-title mb-4">Areas of <span className="text-gradient">Expertise</span></h2>
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
            <h2 className="section-title mb-4">Brands I've <span className="text-gradient">Worked With</span></h2>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Let's Work Together</h2>
            <p className="text-xl text-primary-300 mb-8">Get in touch to discuss your project. First consultation is free.</p>
            <Link href="/en/contact" className="btn-primary group text-lg px-8 py-4">
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
