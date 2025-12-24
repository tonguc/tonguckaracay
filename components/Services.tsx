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
    icon: Palette,
    title: "UI/UX Tasarım",
    description: "Kullanıcı odaklı, dönüşüm optimizasyonlu tasarımlar. Web sitesi ve uygulama arayüz tasarımı.",
    href: "/hizmetler/ui-ux-tasarim",
    features: ["Kullanıcı Araştırması", "Wireframe & Prototip", "Dönüşüm Optimizasyonu"],
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

        {/* Services Grid - 3 top, 2 bottom centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.slice(3, 5).map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index + 3} />
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
      className={`card card-glow p-6 group block animate-fade-in-up`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-accent-500/20 transition-all duration-300">
        <Icon className="w-6 h-6 text-accent-400" />
      </div>

      {/* Title with Arrow */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-display font-semibold text-white group-hover:text-accent-400 transition-colors">
          {service.title}
        </h3>
        <ArrowUpRight className="w-5 h-5 text-primary-500 group-hover:text-accent-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
      </div>

      {/* Description */}
      <p className="text-primary-300 mb-5 leading-relaxed">
        {service.description}
      </p>

      {/* Features */}
      <div className="flex flex-wrap gap-2">
        {service.features.map((feature) => (
          <span 
            key={feature}
            className="px-3 py-1 text-xs font-medium text-primary-300 bg-surface-border/30 rounded-full"
          >
            {feature}
          </span>
        ))}
      </div>
    </Link>
  );
}
