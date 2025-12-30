"use client";

import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float animation-delay-300" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-card/50 border border-surface-border rounded-full mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-primary-300">
              Yeni projeler için müsaitim
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-fade-in-up">
            UI/UX, SEO ve Yapay Zeka ile{" "}
            <span className="text-gradient">Dijitalde Gerçek Büyüme</span>{" "}
            Sağlıyorum
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-primary-300 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            Trafik, dönüşüm ve marka algısını birlikte artıran uçtan uca dijital çözümler.
            İşletmenizi bir sonraki seviyeye taşıyalım.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-in-up animation-delay-200">
            <Link href="/iletisim" className="btn-primary group">
              Ücretsiz Görüşme
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#hizmetler" className="btn-secondary group">
              Hizmetleri Gör
              <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm animate-fade-in-up animation-delay-300">
            <div className="flex items-center gap-2 text-primary-300">
              <Zap className="w-5 h-5 text-accent-400" />
              <span><strong className="text-white">25+</strong> Yıl Deneyim</span>
            </div>
            <div className="flex items-center gap-2 text-primary-300">
              <span className="w-1.5 h-1.5 bg-accent-400 rounded-full" />
              <span>Sonuç Odaklı</span>
            </div>
            <div className="flex items-center gap-2 text-primary-300">
              <span className="w-1.5 h-1.5 bg-accent-400 rounded-full" />
              <span>Kişiselleştirilmiş Strateji</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
