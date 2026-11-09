"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from "lucide-react";
import { slugMappingTrToEn, slugMappingEnToTr } from '@/lib/slug-mappings';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Header sayfalar arası mount kalır → rota değişince menüleri kapat
  useEffect(() => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Dışarı tıklama / Escape ile Hizmetler dropdown'ını kapat
  useEffect(() => {
    if (!isServicesOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsServicesOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isServicesOpen]);

  const navLinks = locale === 'tr' ? {
    blog: '/blog',
    about: '/hakkimda',
    contact: '/iletisim',
    cases: '/projeler',
    training: '/ai-egitimi',

    home: '/'
  } : {
    blog: '/en/blog',
    about: '/en/about',
    contact: '/en/contact',
    cases: '/en/case-studies',
    training: '/en/ai-training',

    home: '/en'
  };

  const casesLabel = locale === 'tr' ? 'Projeler' : 'Case Studies';
  const servicesLabel = locale === 'tr' ? 'Hizmetler' : 'Services';
  const trainingLabel = locale === 'tr' ? 'AI Eğitimi' : 'AI Training';
  const serviceLinks = locale === 'tr'
    ? [
        { label: 'Yapay Zeka Çözümleri', href: '/hizmetler/yapay-zeka-cozumleri' },
        { label: 'UX / Ürün Deneyimi', href: '/hizmetler/ui-ux-tasarim' },
        { label: 'SEO Danışmanlığı', href: '/hizmetler/seo-danismanligi' },
        { label: 'GEO Optimizasyonu', href: '/hizmetler/geo-optimizasyonu' },
        { label: 'Online Reklamcılık', href: '/hizmetler/online-reklamcilik' },
        { label: 'Sosyal Medya Yönetimi', href: '/hizmetler/sosyal-medya-yonetimi' },
      ]
    : [
        { label: 'AI Solutions', href: '/en/services/ai-solutions' },
        { label: 'UX / Product Experience', href: '/en/services/ui-ux-design' },
        { label: 'SEO Consulting', href: '/en/services/seo-consulting' },
        { label: 'GEO Optimization', href: '/en/services/geo-optimization' },
        { label: 'Online Advertising', href: '/en/services/online-advertising' },
        { label: 'Social Media Management', href: '/en/services/social-media-management' },
      ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLocale = (newLocale: 'tr' | 'en') => {
    if (newLocale === locale) return;
    
    let currentPath = pathname;
    
    // Remove trailing slash
    if (currentPath.endsWith('/') && currentPath.length > 1) {
      currentPath = currentPath.slice(0, -1);
    }
    
    if (currentPath.startsWith('/en/')) {
      currentPath = currentPath.substring(3);
    } else if (currentPath === '/en') {
      currentPath = '/';
    }
    
    const mappings: Record<string, { tr: string; en: string }> = {
      '/': { tr: '/', en: '/en' },
      '/hakkimda': { tr: '/hakkimda', en: '/en/about' },
      '/about': { tr: '/hakkimda', en: '/en/about' },
      '/iletisim': { tr: '/iletisim', en: '/en/contact' },
      '/contact': { tr: '/iletisim', en: '/en/contact' },
      '/blog': { tr: '/blog', en: '/en/blog' },
      '/hizmetler/ui-ux-tasarim': { tr: '/hizmetler/ui-ux-tasarim', en: '/en/services/ui-ux-design' },
      '/services/ui-ux-design': { tr: '/hizmetler/ui-ux-tasarim', en: '/en/services/ui-ux-design' },
      '/hizmetler/seo-danismanligi': { tr: '/hizmetler/seo-danismanligi', en: '/en/services/seo-consulting' },
      '/services/seo-consulting': { tr: '/hizmetler/seo-danismanligi', en: '/en/services/seo-consulting' },
      '/hizmetler/online-reklamcilik': { tr: '/hizmetler/online-reklamcilik', en: '/en/services/online-advertising' },
      '/services/online-advertising': { tr: '/hizmetler/online-reklamcilik', en: '/en/services/online-advertising' },
      '/hizmetler/yapay-zeka-cozumleri': { tr: '/hizmetler/yapay-zeka-cozumleri', en: '/en/services/ai-solutions' },
      '/services/ai-solutions': { tr: '/hizmetler/yapay-zeka-cozumleri', en: '/en/services/ai-solutions' },
      '/hizmetler/sosyal-medya-yonetimi': { tr: '/hizmetler/sosyal-medya-yonetimi', en: '/en/services/social-media-management' },
      '/services/social-media-management': { tr: '/hizmetler/sosyal-medya-yonetimi', en: '/en/services/social-media-management' },
      '/projeler': { tr: '/projeler', en: '/en/case-studies' },
      '/case-studies': { tr: '/projeler', en: '/en/case-studies' },
      '/hizmetler/geo-optimizasyonu': { tr: '/hizmetler/geo-optimizasyonu', en: '/en/services/geo-optimization' },
      '/services/geo-optimization': { tr: '/hizmetler/geo-optimizasyonu', en: '/en/services/geo-optimization' },
      '/ai-egitimi': { tr: '/ai-egitimi', en: '/en/ai-training' },
      '/ai-training': { tr: '/ai-egitimi', en: '/en/ai-training' },
      '/urunler': { tr: '/urunler', en: '/en/products' },
      '/products': { tr: '/urunler', en: '/en/products' },
      '/urunler/finance-os': { tr: '/urunler/finance-os', en: '/en/products/finance-os' },
      '/products/finance-os': { tr: '/urunler/finance-os', en: '/en/products/finance-os' },
    };
    
    let newPath: string;
    
    if (mappings[currentPath]) {
      newPath = mappings[currentPath][newLocale];
    } else {
      // Check for blog post pages (slugs at root level, no /blog/ prefix)
      const slug = currentPath.substring(1); // remove leading /
      if (slugMappingTrToEn[slug]) {
        // Currently on a TR blog post
        newPath = newLocale === 'en' ? `/en/${slugMappingTrToEn[slug]}` : `/${slug}`;
      } else if (slugMappingEnToTr[slug]) {
        // Currently on an EN blog post (after /en/ was stripped)
        newPath = newLocale === 'tr' ? `/${slugMappingEnToTr[slug]}` : `/en/${slug}`;
      } else {
        newPath = newLocale === 'en' ? '/en' : '/';
      }
    }

    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=${60 * 60 * 24 * 365}`;
    window.location.href = newPath;
  };

  return (
    <>
      {/* Top Accent Line */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 via-accent-400 to-accent-500 z-50" />
      
      <header className={`fixed top-1 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-surface-card/90 backdrop-blur-xl border-b border-accent-500/10 shadow-[0_4px_24px_rgba(219,116,32,0.04)] py-3"
          : "bg-surface-darker/70 backdrop-blur-md border-b border-white/5 py-5"
      }`}>
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href={navLinks.home} className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/logo.png"
              alt="Tonguç Karaçay"
              width={50}
              height={50}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link href={navLinks.cases} className="text-primary-200 hover:text-white transition-colors font-medium">
              {casesLabel}
            </Link>

            <div ref={servicesRef} className="relative">
              <button
                type="button"
                onClick={() => setIsServicesOpen((v) => !v)}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                className="flex cursor-pointer items-center gap-1.5 font-medium text-primary-200 transition-colors hover:text-white"
              >
                {servicesLabel}<ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="absolute left-1/2 top-full z-50 mt-4 w-[min(540px,90vw)] -translate-x-1/2 rounded-2xl border border-surface-border bg-surface-card p-3 shadow-2xl shadow-black/30">
                  <div className="grid grid-cols-2 gap-1">
                    {serviceLinks.map((service) => (
                      <Link key={service.href} href={service.href} onClick={() => setIsServicesOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-primary-200 transition-colors hover:bg-accent-500/10 hover:text-white">{service.label}</Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href={navLinks.training} className="whitespace-nowrap font-medium text-primary-200 transition-colors hover:text-white">{trainingLabel}</Link>
            <Link href={navLinks.blog} className="text-primary-200 hover:text-white transition-colors font-medium">
              {t('blog')}
            </Link>

            <Link href={navLinks.about} className="text-primary-200 hover:text-white transition-colors font-medium">
              {t('about')}
            </Link>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-surface-card rounded-full px-1 py-1">
              <button
                onClick={() => switchLocale('tr')}
                aria-label="Türkçe"
                className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all ${
                  locale === 'tr'
                    ? 'bg-accent-500 text-white'
                    : 'text-primary-300 hover:bg-surface-border'
                }`}
              >
                TR
              </button>
              <button
                onClick={() => switchLocale('en')}
                aria-label="English"
                className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all ${
                  locale === 'en'
                    ? 'bg-accent-500 text-white'
                    : 'text-primary-300 hover:bg-surface-border'
                }`}
              >
                EN
              </button>
            </div>

            <Link href={navLinks.contact} className="btn-primary">
              {t('contact')}
            </Link>
          </div>

          {/* Mobile */}
          <div className="flex lg:hidden items-center gap-2">
            <Link href={navLinks.blog} className="text-sm font-medium text-primary-200 hover:text-white transition-colors px-2 py-1">{t('blog')}</Link>
            <Link href={navLinks.contact} className="btn-primary text-sm px-3 py-1.5">{t('contact')}</Link>
            <button
              className="text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            <div className="bg-surface-card/95 backdrop-blur-lg border border-surface-border rounded-xl p-4">
              <div className="pt-4 border-t border-surface-border space-y-2">
                <Link href={navLinks.cases} className="block px-2 py-2 text-primary-200 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>{casesLabel}</Link>
                <div className="px-2 pb-1 pt-3 text-xs font-semibold uppercase tracking-widest text-primary-400">{servicesLabel}</div>
                <div className="grid grid-cols-2 gap-1">
                  {serviceLinks.map((service) => (
                    <Link key={service.href} href={service.href} className="rounded-lg px-2 py-2 text-sm text-primary-200 hover:bg-accent-500/10 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>{service.label}</Link>
                  ))}
                </div>
                <Link href={navLinks.training} className="block px-2 py-2 font-semibold text-accent-300 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>{trainingLabel}</Link>
                <Link href={navLinks.blog} className="block px-2 py-2 text-primary-200 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>{t('blog')}</Link>
                <Link href={navLinks.about} className="block px-2 py-2 text-primary-200 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>{t('about')}</Link>
                
                <div className="flex items-center gap-2 px-2 py-2">
                  <span className="text-primary-400 text-sm">{locale === 'tr' ? 'Dil:' : 'Lang:'}</span>
                  <div className="flex items-center gap-1 bg-surface-border/30 rounded-full px-1 py-1">
                    <button onClick={() => { switchLocale('tr'); setIsMobileMenuOpen(false); }} aria-label="Türkçe" className={`px-3 py-1.5 text-sm font-medium rounded-full ${locale === 'tr' ? 'bg-accent-500 text-white' : 'text-primary-300'}`}>TR</button>
                    <button onClick={() => { switchLocale('en'); setIsMobileMenuOpen(false); }} aria-label="English" className={`px-3 py-1.5 text-sm font-medium rounded-full ${locale === 'en' ? 'bg-accent-500 text-white' : 'text-primary-300'}`}>EN</button>
                  </div>
                </div>
                
                <Link href={navLinks.contact} className="btn-primary w-full text-center mt-4" onClick={() => setIsMobileMenuOpen(false)}>{t('contact')}</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
    </>
  );
}
