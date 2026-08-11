import { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from 'next-intl/server';
import { ArrowRight, CheckCircle2 } from "lucide-react";
import LaptopMockup from "@/components/LaptopMockup";

export const metadata: Metadata = {
  title: "Ürünler | Tonguç Karaçay",
  description: "Geliştirdiğim dijital ürünler: kişisel finans, üretkenlik ve iş araçları.",
  openGraph: {
    title: "Ürünler | Tonguç Karaçay",
    description: "Geliştirdiğim dijital ürünler: kişisel finans, üretkenlik ve iş araçları.",
    type: "website",
  },
};

type Props = { params: { locale: string } };

export default function ProductsPage({ params: { locale } }: Props) {
  setRequestLocale(locale);

  return (
    <main className="pt-20">
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-primary-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-white">Ürünler</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="text-gradient">Ürünlerim</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-300 max-w-2xl leading-relaxed">
            Danışmanlık işimin yanı sıra geliştirdiğim, kendi kendine yeten dijital araçlar — gerçek kullanım için tasarlandı, denemesi ücretsiz.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-custom">
          <Link href="/urunler/finance-os" className="card block p-8 md:p-10 hover:border-accent-500/30 transition-colors group">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-accent-500/10 text-accent-400 text-xs font-semibold tracking-wide mb-4">
                  KİŞİSEL FİNANS
                </span>
                <h2 className="text-3xl font-display font-bold text-white mb-3">Finance OS</h2>
                <p className="text-primary-300 mb-6 leading-relaxed">
                  Bütçenizi, borç ödeme planınızı ve net değerinizi tek yerde görün. Hesap yok, abonelik yok — tek dosyalık bir uygulama, tamamen tarayıcınızda çalışır.
                </p>
                <ul className="space-y-2 mb-6">
                  {["Tek seferlik satın alma", "%100 çevrimdışı çalışır", "Hesap gerektirmez"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-primary-200 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent-500 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center text-accent-400 font-semibold text-lg">
                  Ürünü İncele
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
              <div className="pointer-events-none">
                <LaptopMockup src="/products/finance-os/mockup-hero.png" alt="Finance OS Dashboard" width={1180} height={660} />
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
