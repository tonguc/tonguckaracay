"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight, Award } from "lucide-react";
import { useTheme } from './ThemeProvider';

const brands = ["THY", "BMW", "Jaguar", "Galatasaray", "Sabah", "ATV", "A Haber", "Borusan Otomotiv"];

export default function About() {
  const t = useTranslations('about');
  const locale = useLocale();
  const aboutPath = locale === 'tr' ? '/hakkimda' : '/en/about';
  const { theme } = useTheme();
  const isLight = theme === 'light';
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-500/5 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-9 lg:gap-12 items-center">
          <div className="relative">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-indigo-500/20 rounded-2xl transform rotate-3" />
              <div className={`absolute inset-0 ${isLight ? 'bg-white border-slate-200' : 'bg-surface-card border-surface-border'} border rounded-2xl transform -rotate-3`} />
              <div className={`relative rounded-2xl overflow-hidden border ${isLight ? 'border-slate-200' : 'border-surface-border'}`}>
                <Image src="/tonguc-karacay.jpg" alt="Tonguç Karaçay" width={500} height={500} className="w-full h-auto object-cover" />
              </div>
              <div className={`absolute -bottom-6 -right-6 ${isLight ? 'bg-white/90 border-slate-200' : 'bg-surface-card/90 border-surface-border'} backdrop-blur-lg border rounded-xl p-4 shadow-2xl animate-float`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-500/20 flex items-center justify-center">
                    <Award className="w-5 h-5 text-accent-500" />
                  </div>
                  <div>
                    <p className={`text-2xl font-display font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>25+</p>
                    <p className={`text-xs ${isLight ? 'text-slate-500' : 'text-primary-400'}`}>{t('yearsExperience')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="section-title mb-6">
              {t('title')} <span className="text-gradient">{t('name')}</span>
            </h2>
            <div className={`space-y-4 ${isLight ? 'text-slate-600' : 'text-primary-300'} leading-relaxed mb-8`}>
              <p>{t('description1')}</p>
              <p>{t('description2')}</p>
              <p>{t('description3')}</p>
            </div>
            <div className="mb-8">
              <p className={`text-sm ${isLight ? 'text-slate-500' : 'text-primary-400'} mb-3`}>{t('brandsTitle')}</p>
              <div className="flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <span key={brand} className={`px-3 py-1.5 text-sm ${isLight ? 'text-slate-600 bg-slate-100 border-slate-200' : 'text-primary-300 bg-surface-card/50 border-surface-border/50'} border rounded-lg`}>
                    {brand}
                  </span>
                ))}
              </div>
            </div>
            <Link href={aboutPath} className="inline-flex items-center gap-2 text-accent-500 hover:text-accent-400 font-medium group">
              {t('moreInfo')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
