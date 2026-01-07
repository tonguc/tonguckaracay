"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { locales, localeNames, localeFlags, type Locale } from '@/i18n.config';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

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

  // Language switch function
  const switchLocale = (newLocale: Locale) => {
    // Map current path to new locale
    let newPath = pathname;
    
    if (locale === 'tr' && newLocale === 'en') {
      // TR -> EN
      if (pathname === '/') newPath = '/en';
      else if (pathname === '/hakkimda') newPath = '/en/about';
      else if (pathname === '/iletisim') newPath = '/en/contact';
      else if (pathname === '/blog') newPath = '/en/blog';
      else if (pathname.startsWith('/blog/')) newPath = `/en${pathname}`;
      else if (pathname.startsWith('/hizmetler/')) {
        const slug = pathname.replace('/hizmetler/', '');
        const slugMap: Record<string, string> = {
          'ui-ux-tasarim': 'ui-ux-design',
          'seo-danismanligi': 'seo-consulting',
          'online-reklamcilik': 'online-advertising',
          'yapay-zeka-cozumleri': 'ai-solutions',
          'sosyal-medya-yonetimi': 'social-media-management'
        };
        newPath = `/en/services/${slugMap[slug] || slug}`;
      } else {
        newPath = `/en${pathname}`;
      }
    } else if (locale === 'en' && newLocale === 'tr') {
      // EN -> TR
      if (pathname === '/en' || pathname === '/en/') newPath = '/';
      else if (pathname === '/en/about') newPath = '/hakkimda';
      else if (pathname === '/en/contact') newPath = '/iletisim';
      else if (pathname === '/en/blog') newPath = '/blog';
      else if (pathname.startsWith('/en/blog/')) newPath = pathname.replace('/en', '');
      else if (pathname.startsWith('/en/services/')) {
        const slug = pathname.replace('/en/services/', '');
        const slugMap: Record<string, string> = {
          'ui-ux-design': 'ui-ux-tasarim',
          'seo-consulting': 'seo-danismanligi',
          'online-advertising': 'online-reklamcilik',
          'ai-solutions': 'yapay-zeka-cozumleri',
          'social-media-management': 'sosyal-medya-yonetimi'
        };
        newPath = `/hizmetler/${slugMap[slug] || slug}`;
      } else {
        newPath = pathname.replace('/en', '') || '/';
      }
    }
    
    // Set cookie for locale preference
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=${60 * 60 * 24 * 365}`;
    router.push(newPath);
    setLangDropdownOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-surface-darker/90 backdrop-blur-lg border-b border-surface-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href={navLinks.home}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.png"
              alt="Tonguç Karaçay"
              width={60}
              height={60}
            />
            <span className="logo-text text-xl font-bold text-white hidden sm:inline">
              Tonguç Karaçay
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Hizmetler Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("services")}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="flex items-center gap-1 text-primary-200 hover:text-white transition-colors font-medium">
                {t('services')}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
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

            {/* Blog */}
            <Link
              href={navLinks.blog}
              className="text-primary-200 hover:text-white transition-colors font-medium"
            >
              {t('blog')}
            </Link>

            {/* About */}
            <Link
              href={navLinks.about}
              className="text-primary-200 hover:text-white transition-colors font-medium"
            >
              {t('about')}
            </Link>

            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 text-primary-200 hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">{localeFlags[locale as Locale]}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {langDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 bg-surface-card/95 backdrop-blur-lg border border-surface-border rounded-lg p-1 min-w-[120px] shadow-2xl animate-fade-in">
                  {locales.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => switchLocale(loc)}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors ${
                        locale === loc 
                          ? 'bg-accent-500/20 text-accent-400' 
                          : 'text-primary-200 hover:text-white hover:bg-surface-border/50'
                      }`}
                    >
                      <span>{localeFlags[loc]}</span>
                      <span>{localeNames[loc]}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link href={navLinks.contact} className="btn-primary">
              {t('contact')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="bg-surface-card/95 backdrop-blur-lg border border-surface-border rounded-xl p-4">
              {/* Mobile Services */}
              <div className="mb-4">
                <p className="text-xs uppercase tracking-wider text-primary-400 mb-2 px-2">
                  {t('services')}
                </p>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-2 py-2 text-primary-200 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Other Links */}
              <div className="pt-4 border-t border-surface-border space-y-2">
                <Link
                  href={navLinks.blog}
                  className="block px-2 py-2 text-primary-200 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('blog')}
                </Link>
                <Link
                  href={navLinks.about}
                  className="block px-2 py-2 text-primary-200 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('about')}
                </Link>
                
                {/* Mobile Language Switcher */}
                <div className="flex items-center gap-2 px-2 py-2">
                  <Globe className="w-4 h-4 text-primary-400" />
                  {locales.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => {
                        switchLocale(loc);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`px-3 py-1 text-sm rounded-md transition-colors ${
                        locale === loc 
                          ? 'bg-accent-500/20 text-accent-400' 
                          : 'text-primary-300 hover:text-white'
                      }`}
                    >
                      {localeFlags[loc]} {localeNames[loc]}
                    </button>
                  ))}
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
