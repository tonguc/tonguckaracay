import { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from 'next-intl/server';
import { ArrowRight, Share2, Users, Calendar, TrendingUp, MessageCircle, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Sosyal Medya Yönetimi | Organik Büyüme | Tonguç Karaçay",
  description: "Organik büyüme ve topluluk yönetimi. Strateji, içerik planlaması ve etkileşim artırma.",
};

const services = [
  { icon: Calendar, title: "İçerik Planlaması", description: "Stratejik içerik takvimi ve düzenli paylaşımlar." },
  { icon: Users, title: "Topluluk Yönetimi", description: "Takipçi etkileşimi ve topluluk oluşturma." },
  { icon: TrendingUp, title: "Organik Büyüme", description: "Ücretli reklam olmadan organik takipçi artışı." },
  { icon: MessageCircle, title: "Etkileşim Stratejisi", description: "Yorum ve mesaj yönetimi." },
  { icon: BarChart3, title: "Analitik & Raporlama", description: "Performans takibi ve detaylı raporlar." },
  { icon: Share2, title: "Platform Stratejisi", description: "Her platform için özel strateji." }
];

type Props = { params: { locale: string } };

export default function SosyalMedyaYonetimiPage({ params: { locale } }: Props) {
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
            <span className="text-white">Sosyal Medya Yönetimi</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-gradient">Sosyal Medya</span> Yönetimi
          </h1>
          <p className="text-xl text-primary-300 mb-8 max-w-2xl">
            Organik büyüme ve topluluk yönetimi. Strateji, içerik planlaması ve etkileşim artırma.
          </p>
          <Link href="/iletisim" className="btn-primary group">
            Strateji Görüşmesi
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
          <h2 className="text-3xl font-display font-bold text-white mb-6">Sosyal Medya Stratejinizi Oluşturalım</h2>
          <Link href="/iletisim" className="btn-primary">İletişime Geç</Link>
        </div>
      </section>
    </main>
  );
}
