"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, Calendar, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 via-transparent to-indigo-500/10" />
        
        {/* Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-500/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent-500/10 border border-accent-500/20 mb-8 animate-glow">
            <Sparkles className="w-8 h-8 text-accent-400" />
          </div>

          {/* Headline */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Projenizi Birlikte{" "}
            <span className="text-gradient">Büyütelim</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-primary-300 mb-10 max-w-xl mx-auto">
            Ücretsiz 30 dakikalık strateji görüşmesiyle işletmenizin dijital potansiyelini keşfedelim. 
            Hedeflerinizi dinleyip, size özel bir yol haritası çıkaralım.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/iletisim" className="btn-primary group text-lg px-8 py-4">
              <MessageCircle className="mr-2 w-5 h-5" />
              İletişime Geç
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-primary-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-accent-400" />
              <span>Hızlı yanıt</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span>Gizlilik garantisi</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              <span>30 dk ücretsiz görüşme</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
