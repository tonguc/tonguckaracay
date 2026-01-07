import { Metadata } from "next";
import Link from "next/link";
import { unstable_setRequestLocale } from 'next-intl/server';
import { ArrowRight, CheckCircle2, Users, Layers, MousePointer2, BarChart3, Sparkles, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "UI/UX Tasarım Hizmeti | 25+ Yıl Deneyim | Tonguç Karaçay",
  description: "25+ yıl deneyimle kullanıcı odaklı, dönüşüm optimizasyonlu arayüz tasarımı. THY, BMW, Galatasaray gibi markalara hizmet.",
};

const services = [
  { icon: Users, title: "Kullanıcı Araştırması", description: "Hedef kitlenizi derinlemesine anlıyorum. Kullanıcı görüşmeleri ve davranış analizleri." },
  { icon: Layers, title: "Wireframe & Prototip", description: "Düşük ve yüksek sadakatli prototipler ile tasarımı kodlamadan önce test ediyorum." },
  { icon: Sparkles, title: "Arayüz Tasarımı (UI)", description: "Markanızı yansıtan, modern ve estetik arayüzler tasarlıyorum." },
  { icon: MousePointer2, title: "Kullanılabilirlik Testi", description: "Tasarımların gerçek kullanıcılarla test edilmesi." },
  { icon: BarChart3, title: "Dönüşüm Optimizasyonu", description: "Sadece güzel değil, dönüşüm sağlayan tasarımlar." },
  { icon: Target, title: "Tasarım Sistemi", description: "Tutarlı ve ölçeklenebilir tasarım sistemleri oluşturuyorum." }
];

type Props = { params: { locale: string } };

export default function UIUXTasarimPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  
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
            <span className="text-white">UI/UX Tasarım</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-gradient">UI/UX Tasarım</span> Hizmeti
          </h1>
          <p className="text-xl text-primary-300 mb-8 max-w-2xl">
            25+ yıl deneyimle kullanıcı odaklı, dönüşüm optimizasyonlu arayüz tasarımı. 
            İşletmenizin dijital varlığını güçlendiriyorum.
          </p>
          <Link href="/iletisim" className="btn-primary group">
            Ücretsiz Danışmanlık
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
          <h2 className="text-3xl font-display font-bold text-white mb-6">Projenizi Konuşalım</h2>
          <p className="text-primary-300 mb-8 max-w-xl mx-auto">Ücretsiz danışmanlık için hemen iletişime geçin.</p>
          <Link href="/iletisim" className="btn-primary">İletişime Geç</Link>
        </div>
      </section>
    </main>
  );
}
