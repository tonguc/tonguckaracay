"use client";

import { useState, useEffect } from "react";
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const services = locale === 'tr' ? [
    { name: "UI/UX Tasarım", href: "/hizmetler/ui-ux-tasarim" },
    { name: "SEO Danışmanlığı", href: "/hizmetler/seo-danismanligi" },
    { name: "Online Reklamcılık", href: "/hizmetler/online-reklamcilik" },
    { name: "Yapay Zeka Çözümleri", href: "/hizmetler/yapay-zeka-cozumleri" },
    { name: "Sosyal Medya Yönetimi", href: "/hizmetler/sosyal-medya-yonetimi" },
  ] : [
    { name: "UI/UX Design", href: "/en/services/ui-ux-design" },
    { name: "SEO Consulting", href: "/en/services/seo-consulting" },
    { name: "Online Advertising", href: "/en/services/online-advertising" },
    { name: "AI Solutions", href: "/en/services/ai-solutions" },
    { name: "Social Media Management", href: "/en/services/social-media-management" },
  ];

  const navLinks = locale === 'tr' ? {
    blog: '/blog',
    about: '/hakkimda',
    contact: '/iletisim',
    aiTraining: '/ai-egitimi',
    home: '/'
  } : {
    blog: '/en/blog',
    about: '/en/about',
    contact: '/en/contact',
    aiTraining: '/en/ai-training',
    home: '/en'
  };

  const aiTrainingLabel = locale === 'tr' ? 'AI Eğitimi' : 'AI Training';
  const newBadge = locale === 'tr' ? 'YENİ' : 'NEW';

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
      '/ai-egitimi': { tr: '/ai-egitimi', en: '/en/ai-training' },
      '/ai-training': { tr: '/ai-egitimi', en: '/en/ai-training' },
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
          ? "bg-surface-darker/95 backdrop-blur-xl border-b border-accent-500/10 shadow-[0_4px_24px_rgba(245,158,11,0.04)] py-3"
          : "bg-transparent py-5"
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
          <div className="hidden md:flex items-center gap-6">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-primary-200 hover:text-white transition-colors font-medium">
                {t('services')}
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`} />
              </button>
              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 pt-2 animate-fade-in">
                  <div className="bg-surface-card/95 backdrop-blur-lg border border-surface-border rounded-xl p-2 min-w-[220px] shadow-2xl">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2.5 text-primary-200 hover:text-white hover:bg-surface-border/50 rounded-lg transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href={navLinks.aiTraining}
              className="group relative inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/20 to-violet-500/20 border border-indigo-400/40 text-indigo-100 hover:text-white hover:from-indigo-500/30 hover:to-violet-500/30 hover:border-indigo-300/60 transition-all font-medium text-sm"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-indigo-300"></span>
              </span>
              {aiTrainingLabel}
              <span className="ml-0.5 px-1.5 py-0.5 text-[9px] font-bold leading-none bg-indigo-500 text-white rounded">{newBadge}</span>
            </Link>

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
          <div className="flex md:hidden items-center gap-2">
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
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="bg-surface-card/95 backdrop-blur-lg border border-surface-border rounded-xl p-4">
              <div className="mb-4">
                <p className="text-xs uppercase tracking-wider text-primary-400 mb-2 px-2">{t('services')}</p>
                {services.map((service) => (
                  <Link key={service.href} href={service.href} className="block px-2 py-2 text-primary-200 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
                    {service.name}
                  </Link>
                ))}
              </div>
              <div className="pt-4 border-t border-surface-border space-y-2">
                <Link
                  href={navLinks.aiTraining}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-gradient-to-r from-indigo-500/20 to-violet-500/20 border border-indigo-400/40 text-indigo-100 hover:text-white font-medium"
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-indigo-300"></span>
                  </span>
                  {aiTrainingLabel}
                  <span className="ml-auto px-1.5 py-0.5 text-[9px] font-bold leading-none bg-indigo-500 text-white rounded">{newBadge}</span>
                </Link>
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
