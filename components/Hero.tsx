"use client";

import Link from "next/link";
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight, Zap } from "lucide-react";
import { useTheme } from './ThemeProvider';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const contactPath = locale === 'tr' ? '/iletisim' : '/en/contact';
  const { theme } = useTheme();
  const isLight = theme === 'light';
  
  return (
    <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float animation-delay-300" />
        <div 
          className={`absolute inset-0 ${isLight ? 'opacity-[0.05]' : 'opacity-[0.02]'}`}
          style={{
            backgroundImage: `linear-gradient(rgba(100,100,100,0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(100,100,100,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 ${isLight ? 'bg-white/80 border-slate-200' : 'bg-surface-card/50 border-surface-border'} border rounded-full mb-6 animate-fade-in shadow-sm`}>
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className={`text-sm ${isLight ? 'text-slate-600' : 'text-primary-300'}`}>
              {t('badge')}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${isLight ? 'text-slate-900' : 'text-white'} mb-4 leading-tight animate-fade-in-up`}>
            {t('title')}{" "}
            <span className="text-gradient">{t('titleHighlight')}</span>{" "}
            {t('titleEnd')}
          </h1>

          {/* Subheadline */}
          <p className={`text-base md:text-lg ${isLight ? 'text-slate-600' : 'text-primary-300'} mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-100`}>
            {t('subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-in-up animation-delay-200">
            <Link href={contactPath} className="btn-primary group">
              {t('cta')}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#hizmetler" className="btn-secondary group">
              {t('ctaSecondary')}
              <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>
          </div>

          {/* Social Proof */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm animate-fade-in-up animation-delay-300 ${isLight ? 'text-slate-600' : 'text-primary-300'}`}>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent-500" />
              <span><strong className={isLight ? 'text-slate-900' : 'text-white'}>25+</strong> {t('experience')}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent-500 rounded-full" />
              <span>{t('resultOriented')}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent-500 rounded-full" />
              <span>{t('personalizedStrategy')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
