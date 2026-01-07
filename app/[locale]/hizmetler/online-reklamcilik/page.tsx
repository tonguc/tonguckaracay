import { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from 'next-intl/server';
import { ArrowRight, Target, TrendingUp, DollarSign, Users, BarChart3, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Online Reklamcılık | Google & Meta Ads | Tonguç Karaçay",
  description: "Google Ads ve Meta Ads ile hedef kitlenize ulaşın. ROI odaklı kampanya yönetimi ve performans optimizasyonu.",
};

const services = [
  { icon: Target, title: "Google Ads", description: "Arama ve display reklamları ile potansiyel müşterilere ulaşın." },
  { icon: Users, title: "Meta Ads", description: "Facebook ve Instagram'da hedef kitlenize doğrudan reklam." },
  { icon: RefreshCw, title: "Remarketing", description: "Sitenizi ziyaret edenlere tekrar ulaşarak dönüşüm artışı." },
  { icon: DollarSign, title: "ROI Optimizasyonu", description: "Reklam bütçenizden maksimum verim alın." },
  { icon: BarChart3, title: "Performans Analizi", description: "Detaylı raporlama ve sürekli optimizasyon." },
  { icon: TrendingUp, title: "A/B Testi", description: "En iyi performans gösteren reklamları belirleyin." }
];

type Props = { params: { locale: string } };

export default function OnlineReklamcilikPage({ params: { locale } }: Props) {
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
            <span className="text-white">Online Reklamcılık</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-gradient">Online Reklamcılık</span>
          </h1>
          <p className="text-xl text-primary-300 mb-8 max-w-2xl">
            Google Ads ve Meta Ads ile hedef kitlenize ulaşın. ROI odaklı kampanya yönetimi ve optimizasyon.
          </p>
          <Link href="/iletisim" className="btn-primary group">
            Kampanya Başlat
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
          <h2 className="text-3xl font-display font-bold text-white mb-6">Reklam Kampanyanızı Başlatalım</h2>
          <Link href="/iletisim" className="btn-primary">İletişime Geç</Link>
        </div>
      </section>
    </main>
  );
}
