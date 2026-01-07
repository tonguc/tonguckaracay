import { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from 'next-intl/server';
import { ArrowRight, Bot, Brain, Zap, MessageSquare, Database, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Yapay Zeka Çözümleri | AI Otomasyon | Tonguç Karaçay",
  description: "AI ile iş süreçlerinizi otomatize edin. Chatbot, içerik üretimi ve veri analizi çözümleri.",
};

const services = [
  { icon: Bot, title: "AI Chatbot", description: "7/24 müşteri hizmeti sunan akıllı chatbot çözümleri." },
  { icon: Brain, title: "AI İçerik Üretimi", description: "Yapay zeka destekli içerik oluşturma ve optimizasyon." },
  { icon: Database, title: "Veri Analizi", description: "Büyük veri analizi ve içgörü çıkarma." },
  { icon: Zap, title: "Süreç Otomasyonu", description: "Tekrarlayan işleri otomatikleştirin." },
  { icon: MessageSquare, title: "NLP Çözümleri", description: "Doğal dil işleme ile metin analizi." },
  { icon: Cpu, title: "AI Entegrasyonu", description: "Mevcut sistemlerinize AI entegrasyonu." }
];

type Props = { params: { locale: string } };

export default function YapayZekaCozumleriPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  
  return (
    <main className="pt-20">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-primary-400 mb-6">
            <Link href="/" className="hover:text-white">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-white">Yapay Zeka Çözümleri</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-gradient">Yapay Zeka</span> Çözümleri
          </h1>
          <p className="text-xl text-primary-300 mb-8 max-w-2xl">
            AI ile iş süreçlerinizi otomatize edin. Chatbot, içerik üretimi ve veri analizi çözümleri.
          </p>
          <Link href="/iletisim" className="btn-primary group">
            AI Danışmanlığı Al
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <h2 className="section-title mb-12 text-center">Hizmet <span className="text-gradient">Kapsamı</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="card p-6">
                <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-primary-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-accent-500/10 to-indigo-500/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-6">AI ile İşinizi Dönüştürün</h2>
          <Link href="/iletisim" className="btn-primary">İletişime Geç</Link>
        </div>
      </section>
    </main>
  );
}
