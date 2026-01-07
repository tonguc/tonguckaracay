"use client";

import Link from "next/link";
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight, MessageCircle, Calendar, Sparkles } from "lucide-react";
import { useTheme } from './ThemeProvider';

export default function FinalCTA() {
  const t = useTranslations('cta');
  const locale = useLocale();
  const contactPath = locale === 'tr' ? '/iletisim' : '/en/contact';
  const { theme } = useTheme();
  const isLight = theme === 'light';
  
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 via-transparent to-indigo-500/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-500/5 rounded-full blur-3xl" />
        <div 
          className={`absolute inset-0 ${isLight ? 'opacity-[0.05]' : 'opacity-[0.03]'}`}
          style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(100,100,100,0.3) 1px, transparent 0)`, backgroundSize: '40px 40px' }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent-500/10 border border-accent-500/20 mb-8 animate-glow">
            <Sparkles className="w-8 h-8 text-accent-500" />
          </div>
          <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold ${isLight ? 'text-slate-900' : 'text-white'} mb-6`}>
            {t('title')} <span className="text-gradient">{t('titleHighlight')}</span>
          </h2>
          <p className={`text-lg ${isLight ? 'text-slate-600' : 'text-primary-300'} mb-10 max-w-xl mx-auto`}>{t('subtitle')}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href={contactPath} className="btn-primary group text-lg px-8 py-4">
              <MessageCircle className="mr-2 w-5 h-5" />
              {t('button')}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className={`flex flex-wrap items-center justify-center gap-6 text-sm ${isLight ? 'text-slate-500' : 'text-primary-400'}`}>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-accent-500" />
              <span>{t('availability')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
