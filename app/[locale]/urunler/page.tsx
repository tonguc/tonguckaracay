import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { setRequestLocale } from 'next-intl/server';
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Ürünler | Tonguç Karaçay",
  description: "Geliştirdiğim dijital ürünler: kişisel finans, üretkenlik ve iş araçları.",
  openGraph: {
    title: "Ürünler | Tonguç Karaçay",
    description: "Geliştirdiğim dijital ürünler: kişisel finans, üretkenlik ve iş araçları.",
    type: "website",
  },
};

const products = [
  {
    slug: "finance-os",
    name: "Finance OS",
    tagline: "Kişisel bütçe, borç ve net değer takibi — tek dosya, tamamen çevrimdışı.",
    image: "/products/finance-os/dashboard.jpg",
  },
];

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
            Danışmanlık işimin yanı sıra geliştirdiğim, kendi kendine yeten dijital araçlar.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/urunler/${product.slug}`}
                className="card overflow-hidden hover:border-accent-500/30 transition-colors group"
              >
                <div className="relative aspect-video bg-surface-border">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white mb-2">{product.name}</h2>
                  <p className="text-primary-300 mb-4">{product.tagline}</p>
                  <span className="inline-flex items-center text-accent-400 font-medium">
                    İncele
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
