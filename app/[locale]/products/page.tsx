import { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from 'next-intl/server';
import { ArrowRight, CheckCircle2 } from "lucide-react";
import LaptopMockup from "@/components/LaptopMockup";

export const metadata: Metadata = {
  title: "Products | Tonguç Karaçay",
  description: "Digital products I've built: personal finance, productivity, and business tools.",
  openGraph: {
    title: "Products | Tonguç Karaçay",
    description: "Digital products I've built: personal finance, productivity, and business tools.",
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
            <Link href="/en" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Products</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="text-gradient">Products</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-300 max-w-2xl leading-relaxed">
            Alongside consulting, I build self-contained digital tools designed for real daily use - free to try before you buy.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-custom">
          <Link href="/en/products/finance-os" className="card block p-8 md:p-10 hover:border-accent-500/30 transition-colors group">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-accent-500/10 text-accent-400 text-xs font-semibold tracking-wide mb-4">
                  PERSONAL FINANCE
                </span>
                <h2 className="text-3xl font-display font-bold text-white mb-3">Finance OS</h2>
                <p className="text-primary-300 mb-6 leading-relaxed">
                  See your budget, debt payoff plan, and net worth in one place. No account, no subscription - a single-file app that runs entirely in your browser.
                </p>
                <ul className="space-y-2 mb-6">
                  {["One-time purchase", "Works 100% offline", "No account required"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-primary-200 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent-500 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center text-accent-400 font-semibold text-lg">
                  View Product
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
