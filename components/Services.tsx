"use client";

import Link from "next/link";
import { 
  Search, 
  Megaphone, 
  Palette, 
  Bot, 
  Share2,
  ArrowUpRight 
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Tasarım",
    description: "Kullanıcı odaklı, dönüşüm optimizasyonlu tasarımlar. Web sitesi ve uygulama arayüz tasarımı.",
    href: "/hizmetler/ui-ux-tasarim",
    features: ["Kullanıcı Araştırması", "Wireframe & Prototip", "Dönüşüm Optimizasyonu"],
  },
  {
    icon: Search,
    title: "SEO Danışmanlığı",
    description: "Google'da üst sıralara çıkın. Teknik SEO, içerik stratejisi ve link building ile organik trafiğinizi artırın.",
    href: "/hizmetler/seo-danismanligi",
    features: ["Teknik SEO Analizi", "Anahtar Kelime Stratejisi", "Link Building"],
  },
  {
    icon: Megaphone,
    title: "Online Reklamcılık",
    description: "Google Ads ve Meta Ads ile hedef kitlenize ulaşın. ROI odaklı kampanya yönetimi ve optimizasyon.",
    href: "/hizmetler/online-reklamcilik",
    features: ["Google Ads", "Meta Ads", "Remarketing"],
  },
  {
    icon: Bot,
    title: "Yapay Zeka Çözümleri",
    description: "AI ile iş süreçlerinizi otomatize edin. Chatbot, içerik üretimi ve veri analizi çözümleri.",
    href: "/hizmetler/yapay-zeka-cozumleri",
    features: ["AI Otomasyon", "Chatbot Geliştirme", "Veri Analizi"],
  },
  {
    icon: Share2,
    title: "Sosyal Medya Yönetimi",
    description: "Organik büyüme ve topluluk yönetimi. Strateji, içerik planlaması ve etkileşim artırma.",
    href: "/hizmetler/sosyal-medya-yonetimi",
    features: ["İçerik Stratejisi", "Topluluk Yönetimi", "Analitik & Raporlama"],
  },
];

export default function Services() {
  return (
    <section id="hizmetler" className="py-24 relative">
      {/* Section Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-dark/50 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Nasıl Yardımcı <span className="text-gradient">Olabilirim?</span>
          </h2>
          <p className="section-subtitle mx-auto">
            İşletmenizin dijital varlığını güçlendirmek için kapsamlı çözümler sunuyorum.
          </p>
        </div>

        {/* Services Grid - Eşit genişlikte */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ 
  service, 
  index 
}: { 
  service: typeof services[0]; 
  index: number;
}) {
  const Icon = service.icon;
  
  return (
    <Link 
      href={service.href}
      className={`card card-glow p-5 group block animate-fade-in-up`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div className="w-10 h-10 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent-500/20 transition-all duration-300">
        <Icon className="w-5 h-5 text-accent-400" />
      </div>

      {/* Title with Arrow */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="text-base font-display font-semibold text-white group-hover:text-accent-400 transition-colors leading-tight">
          {service.title}
        </h3>
        <ArrowUpRight className="w-4 h-4 text-primary-500 group-hover:text-accent-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
      </div>

      {/* Description */}
      <p className="text-primary-300 text-sm mb-4 leading-relaxed line-clamp-3">
        {service.description}
      </p>

      {/* Features */}
      <div className="flex flex-wrap gap-1.5">
        {service.features.map((feature) => (
          <span 
            key={feature}
            className="px-2 py-0.5 text-xs font-medium text-primary-400 bg-surface-border/30 rounded-full"
          >
            {feature}
          </span>
        ))}
      </div>
    </Link>
  );
}
