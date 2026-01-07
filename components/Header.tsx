"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { type Locale } from '@/i18n.config';
import { useTheme } from './ThemeProvider';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Services links based on locale
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

  // Navigation links based on locale
  const navLinks = locale === 'tr' ? {
    blog: '/blog',
    about: '/hakkimda',
    contact: '/iletisim',
    home: '/'
  } : {
    blog: '/en/blog',
    about: '/en/about',
    contact: '/en/contact',
    home: '/en'
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  // Language switch function - robust path detection
  const switchLocale = (newLocale: Locale) => {
    if (newLocale === locale) return;
    
    // Full bidirectional path mapping
    const pathMap: Record<string, Record<string, string>> = {
      // Home pages
      '/': { tr: '/', en: '/en' },
      '/tr': { tr: '/', en: '/en' },
      '/en': { tr: '/', en: '/en' },
      
      // About pages
      '/hakkimda': { tr: '/hakkimda', en: '/en/about' },
      '/tr/hakkimda': { tr: '/hakkimda', en: '/en/about' },
      '/about': { tr: '/hakkimda', en: '/en/about' },
      '/en/about': { tr: '/hakkimda', en: '/en/about' },
      
      // Contact pages
      '/iletisim': { tr: '/iletisim', en: '/en/contact' },
      '/tr/iletisim': { tr: '/iletisim', en: '/en/contact' },
      '/contact': { tr: '/iletisim', en: '/en/contact' },
      '/en/contact': { tr: '/iletisim', en: '/en/contact' },
      
      // Blog pages
      '/blog': { tr: '/blog', en: '/en/blog' },
      '/tr/blog': { tr: '/blog', en: '/en/blog' },
      '/en/blog': { tr: '/blog', en: '/en/blog' },
      
      // Service pages - TR variants
      '/hizmetler/ui-ux-tasarim': { tr: '/hizmetler/ui-ux-tasarim', en: '/en/services/ui-ux-design' },
      '/tr/hizmetler/ui-ux-tasarim': { tr: '/hizmetler/ui-ux-tasarim', en: '/en/services/ui-ux-design' },
      '/hizmetler/seo-danismanligi': { tr: '/hizmetler/seo-danismanligi', en: '/en/services/seo-consulting' },
      '/tr/hizmetler/seo-danismanligi': { tr: '/hizmetler/seo-danismanligi', en: '/en/services/seo-consulting' },
      '/hizmetler/online-reklamcilik': { tr: '/hizmetler/online-reklamcilik', en: '/en/services/online-advertising' },
      '/tr/hizmetler/online-reklamcilik': { tr: '/hizmetler/online-reklamcilik', en: '/en/services/online-advertising' },
      '/hizmetler/yapay-zeka-cozumleri': { tr: '/hizmetler/yapay-zeka-cozumleri', en: '/en/services/ai-solutions' },
      '/tr/hizmetler/yapay-zeka-cozumleri': { tr: '/hizmetler/yapay-zeka-cozumleri', en: '/en/services/ai-solutions' },
      '/hizmetler/sosyal-medya-yonetimi': { tr: '/hizmetler/sosyal-medya-yonetimi', en: '/en/services/social-media-management' },
      '/tr/hizmetler/sosyal-medya-yonetimi': { tr: '/hizmetler/sosyal-medya-yonetimi', en: '/en/services/social-media-management' },
      
      // Service pages - EN variants
      '/services/ui-ux-design': { tr: '/hizmetler/ui-ux-tasarim', en: '/en/services/ui-ux-design' },
      '/en/services/ui-ux-design': { tr: '/hizmetler/ui-ux-tasarim', en: '/en/services/ui-ux-design' },
      '/services/seo-consulting': { tr: '/hizmetler/seo-danismanligi', en: '/en/services/seo-consulting' },
      '/en/services/seo-consulting': { tr: '/hizmetler/seo-danismanligi', en: '/en/services/seo-consulting' },
      '/services/online-advertising': { tr: '/hizmetler/online-reklamcilik', en: '/en/services/online-advertising' },
      '/en/services/online-advertising': { tr: '/hizmetler/online-reklamcilik', en: '/en/services/online-advertising' },
      '/services/ai-solutions': { tr: '/hizmetler/yapay-zeka-cozumleri', en: '/en/services/ai-solutions' },
      '/en/services/ai-solutions': { tr: '/hizmetler/yapay-zeka-cozumleri', en: '/en/services/ai-solutions' },
      '/services/social-media-management': { tr: '/hizmetler/sosyal-medya-yonetimi', en: '/en/services/social-media-management' },
      '/en/services/social-media-management': { tr: '/hizmetler/sosyal-medya-yonetimi', en: '/en/services/social-media-management' },
    };
    
    let newPath: string;
    
    // Check if current pathname is in the map
    if (pathMap[pathname]) {
      newPath = pathMap[pathname][newLocale];
    } 
    // Handle blog post pages
    else if (pathname.includes('/blog/')) {
      const slug = pathname.split('/blog/')[1];
      newPath = newLocale === 'en' ? `/en/blog/${slug}` : `/blog/${slug}`;
    }
    // Default fallback
    else {
      newPath = newLocale === 'en' ? '/en' : '/';
    }
    
    // Set cookie for locale preference
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=${60 * 60 * 24 * 365}`;
    router.push(newPath);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "dark:bg-surface-darker/90 bg-white/90 backdrop-blur-lg border-b dark:border-surface-border/50 border-slate-200 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo - Only Image, No Text */}
          <Link
            href={navLinks.home}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.png"
              alt="Tonguç Karaçay"
              width={50}
              height={50}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* Hizmetler Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("services")}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="flex items-center gap-1 dark:text-primary-200 text-slate-600 dark:hover:text-white hover:text-slate-900 transition-colors font-medium">
                {t('services')}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 pt-2 animate-fade-in">
                  <div className="dark:bg-surface-card/95 bg-white/95 backdrop-blur-lg border dark:border-surface-border border-slate-200 rounded-xl p-2 min-w-[220px] shadow-2xl">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2.5 dark:text-primary-200 text-slate-600 dark:hover:text-white hover:text-slate-900 dark:hover:bg-surface-border/50 hover:bg-slate-100 rounded-lg transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Blog */}
            <Link
              href={navLinks.blog}
              className="dark:text-primary-200 text-slate-600 dark:hover:text-white hover:text-slate-900 transition-colors font-medium"
            >
              {t('blog')}
            </Link>

            {/* About */}
            <Link
              href={navLinks.about}
              className="dark:text-primary-200 text-slate-600 dark:hover:text-white hover:text-slate-900 transition-colors font-medium"
            >
              {t('about')}
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full dark:bg-surface-card/50 bg-slate-100 dark:hover:bg-surface-card hover:bg-slate-200 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-600" />
              )}
            </button>

            {/* Language Switcher - Inline TR | EN */}
            <div className="flex items-center gap-1 dark:bg-surface-card/50 bg-slate-100 rounded-full px-1 py-1">
              <button
                onClick={() => switchLocale('tr')}
                className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all ${
                  locale === 'tr'
                    ? 'bg-accent-500 text-white'
                    : 'dark:text-primary-300 text-slate-500 dark:hover:text-white hover:text-slate-900 dark:hover:bg-surface-border/50 hover:bg-slate-200'
                }`}
              >
                TR
              </button>
              <button
                onClick={() => switchLocale('en')}
                className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all ${
                  locale === 'en'
                    ? 'bg-accent-500 text-white'
                    : 'dark:text-primary-300 text-slate-500 dark:hover:text-white hover:text-slate-900 dark:hover:bg-surface-border/50 hover:bg-slate-200'
                }`}
              >
                EN
              </button>
            </div>

            {/* CTA Button */}
            <Link href={navLinks.contact} className="btn-primary">
              {t('contact')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full dark:bg-surface-card/50 bg-slate-100"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-600" />
              )}
            </button>
            
            <button
              className="dark:text-white text-slate-800 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="dark:bg-surface-card/95 bg-white/95 backdrop-blur-lg border dark:border-surface-border border-slate-200 rounded-xl p-4">
              {/* Mobile Services */}
              <div className="mb-4">
                <p className="text-xs uppercase tracking-wider dark:text-primary-400 text-slate-500 mb-2 px-2">
                  {t('services')}
                </p>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-2 py-2 dark:text-primary-200 text-slate-600 dark:hover:text-white hover:text-slate-900 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Other Links */}
              <div className="pt-4 border-t dark:border-surface-border border-slate-200 space-y-2">
                <Link
                  href={navLinks.blog}
                  className="block px-2 py-2 dark:text-primary-200 text-slate-600 dark:hover:text-white hover:text-slate-900 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('blog')}
                </Link>
                <Link
                  href={navLinks.about}
                  className="block px-2 py-2 dark:text-primary-200 text-slate-600 dark:hover:text-white hover:text-slate-900 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('about')}
                </Link>
                
                {/* Mobile Language Switcher */}
                <div className="flex items-center gap-2 px-2 py-2">
                  <span className="dark:text-primary-400 text-slate-500 text-sm">{locale === 'tr' ? 'Dil:' : 'Lang:'}</span>
                  <div className="flex items-center gap-1 dark:bg-surface-border/30 bg-slate-100 rounded-full px-1 py-1">
                    <button
                      onClick={() => {
                        switchLocale('tr');
                        setIsMobileMenuOpen(false);
                      }}
                      className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all ${
                        locale === 'tr'
                          ? 'bg-accent-500 text-white'
                          : 'dark:text-primary-300 text-slate-500 dark:hover:text-white hover:text-slate-900'
                      }`}
                    >
                      TR
                    </button>
                    <button
                      onClick={() => {
                        switchLocale('en');
                        setIsMobileMenuOpen(false);
                      }}
                      className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all ${
                        locale === 'en'
                          ? 'bg-accent-500 text-white'
                          : 'dark:text-primary-300 text-slate-500 dark:hover:text-white hover:text-slate-900'
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </div>
                
                <Link
                  href={navLinks.contact}
                  className="btn-primary w-full text-center mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('contact')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
