"use client";

import Link from "next/link";
import { useLocale } from 'next-intl';
import { ArrowRight } from "lucide-react";
import { useTheme } from './ThemeProvider';

export default function FinalCTA() {
  const locale = useLocale();
  const contactPath = locale === 'tr' ? '/iletisim' : '/en/contact';
  const { theme } = useTheme();
  const isLight = theme === 'light';
  
  return (
    <section className={`py-20 ${isLight ? 'bg-gradient-to-br from-amber-50 via-white to-amber-50' : 'bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800'}`}>
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className={`font-display text-3xl md:text-4xl font-bold ${isLight ? 'text-slate-900' : 'text-white'} mb-4`}>
            {locale === 'tr' ? 'Birlikte ' : "Let's Work "}<span className="text-gradient">{locale === 'tr' ? 'Çalışalım' : 'Together'}</span>
          </h2>
          
          <p className={`text-lg ${isLight ? 'text-slate-600' : 'text-slate-300'} mb-8`}>
            {locale === 'tr' 
              ? 'Projenizi konuşmak için benimle iletişime geçin. İlk görüşme ücretsiz.'
              : "Contact me to discuss your project. First consultation is free."}
          </p>

          <Link href={contactPath} className="btn-primary group text-lg px-8 py-4">
            {locale === 'tr' ? 'İletişime Geç' : 'Get in Touch'}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
