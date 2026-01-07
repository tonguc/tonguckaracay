"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const contactPath = locale === 'tr' ? '/iletisim' : '/en/contact';
  const servicesPath = locale === 'tr' ? '/#hizmetler' : '/en/#services';
  
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500/10 border border-accent-500/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-accent-400 font-medium">{t('badge')}</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t('title')}{' '}
              <span className="text-gradient">{t('titleHighlight')}</span>{' '}
              {t('titleEnd')}
            </h1>

            <p className="text-lg text-primary-300 mb-8 leading-relaxed max-w-xl">
              {t('subtitle')}
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent-500" />
                <span className="text-primary-300 text-sm">25+ {t('experience')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent-500" />
                <span className="text-primary-300 text-sm">{t('resultOriented')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent-500" />
                <span className="text-primary-300 text-sm">{t('personalizedStrategy')}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href={contactPath} className="btn-primary group">
                {t('cta')}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href={servicesPath} className="btn-secondary">
                {t('ctaSecondary')}
              </Link>
            </div>
          </div>

          {/* Right - Photo */}
          <div className="relative">
            <div className="relative max-w-lg mx-auto lg:mx-0">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent-500/20 to-indigo-500/20 rounded-2xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary-800">
                <Image
                  src="/tonguc-karacay.jpg"
                  alt="Tonguç Karaçay"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-surface-card border border-primary-800 rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent-500/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent-500">25+</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t('experience')}</div>
                    <div className="text-primary-400 text-sm">100+ {locale === 'tr' ? 'Marka' : 'Brands'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
