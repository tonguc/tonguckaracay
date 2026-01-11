"use client";

import Link from "next/link";
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const contactPath = locale === 'tr' ? '/iletisim' : '/en/contact';
  const servicesPath = locale === 'tr' ? '/#hizmetler' : '/en/#services';
  
  return (
    <section className="pt-28 pb-12 md:pt-40 md:pb-28 relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-accent-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-accent-500/10 border border-accent-500/20 rounded-full mb-6 md:mb-8">
            <Sparkles className="w-4 h-4 text-accent-500" />
            <span className="text-xs md:text-sm text-accent-400 font-medium">{t('badge')}</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
            {t('title')}{' '}
            <span className="text-gradient">{t('titleHighlight')}</span>{' '}
            {t('titleEnd')}
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-xl text-primary-300 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto px-4 md:px-0">
            {t('subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-6 md:mb-8 px-4 md:px-0">
            <Link href={contactPath} className="btn-primary group text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
              {t('cta')}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href={servicesPath} className="btn-secondary text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
              {t('ctaSecondary')}
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
            <a 
              href="https://www.linkedin.com/in/tongu%C3%A7-kara%C3%A7ay-36311040/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a 
              href="https://www.instagram.com/tonguckaracay" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              Instagram
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 pt-6 md:pt-8 border-t border-primary-800">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-accent-500" />
              <span className="text-sm md:text-base text-primary-300">25+ {t('experience')}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-accent-500" />
              <span className="text-sm md:text-base text-primary-300">100+ {locale === 'tr' ? 'Marka' : 'Brands'}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-accent-500" />
              <span className="text-sm md:text-base text-primary-300">{t('resultOriented')}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-accent-500" />
              <span className="text-sm md:text-base text-primary-300">{t('personalizedStrategy')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
