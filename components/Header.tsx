"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, ChevronDown } from "lucide-react";
import { type Locale } from '@/i18n.config';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  
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

  // Language switch function - improved path detection
  const switchLocale = (newLocale: Locale) => {
    if (newLocale === locale) return;
    
    // Get the path without locale prefix
    let cleanPath = pathname;
    if (pathname.startsWith('/tr/')) {
      cleanPath = pathname.substring(3);
    } else if (pathname.startsWith('/en/')) {
      cleanPath = pathname.substring(3);
    } else if (pathname === '/tr') {
      cleanPath = '/';
    } else if (pathname === '/en') {
      cleanPath = '/';
    }
    
    let newPath = '/';
    
    // Service pages mapping
    const trToEnServices: Record<string, string> = {
      '/hizmetler/ui-ux-tasarim': '/en/services/ui-ux-design',
      '/hizmetler/seo-danismanligi': '/en/services/seo-consulting',
      '/hizmetler/online-reklamcilik': '/en/services/online-advertising',
      '/hizmetler/yapay-zeka-cozumleri': '/en/services/ai-solutions',
      '/hizmetler/sosyal-medya-yonetimi': '/en/services/social-media-management',
    };
    
    const enToTrServices: Record<string, string> = {
      '/services/ui-ux-design': '/hizmetler/ui-ux-tasarim',
      '/services/seo-consulting': '/hizmetler/seo-danismanligi',
      '/services/online-advertising': '/hizmetler/online-reklamcilik',
      '/services/ai-solutions': '/hizmetler/yapay-zeka-cozumleri',
      '/services/social-media-management': '/hizmetler/sosyal-medya-yonetimi',
    };
    
    // Other pages mapping
    const trToEnPages: Record<string, string> = {
      '/': '/en',
      '/hakkimda': '/en/about',
      '/iletisim': '/en/contact',
      '/blog': '/en/blog',
    };
    
    const enToTrPages: Record<string, string> = {
      '/': '/',
      '/about': '/hakkimda',
      '/contact': '/iletisim',
      '/blog': '/blog',
    };
    
    if (newLocale === 'en') {
      // TR -> EN
      if (trToEnServices[cleanPath]) {
        newPath = trToEnServices[cleanPath];
      } else if (trToEnPages[cleanPath]) {
        newPath = trToEnPages[cleanPath];
      } else if (cleanPath.startsWith('/blog/')) {
        // Blog posts - keep same slug, add /en prefix
        newPath = `/en${cleanPath}`;
      } else {
        newPath = '/en';
      }
    } else {
      // EN -> TR
      if (enToTrServices[cleanPath]) {
        newPath = enToTrServices[cleanPath];
      } else if (enToTrPages[cleanPath]) {
        newPath = enToTrPages[cleanPath];
      } else if (cleanPath.startsWith('/blog/')) {
        // Blog posts - remove /en prefix if present
        newPath = cleanPath;
      } else {
        newPath = '/';
      }
    }
    
    // Set cookie for locale preference
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=${60 * 60 * 24 * 365}`;
    router.push(newPath);
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

            {/* Language Switcher - Inline TR | EN */}
            <div className="flex items-center gap-1 bg-surface-card/50 rounded-full px-1 py-1">
              <button
                onClick={() => switchLocale('tr')}
                className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all ${
                  locale === 'tr'
                    ? 'bg-accent-500 text-white'
                    : 'text-primary-300 hover:text-white hover:bg-surface-border/50'
                }`}
              >
                TR
              </button>
              <button
                onClick={() => switchLocale('en')}
                className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all ${
                  locale === 'en'
                    ? 'bg-accent-500 text-white'
                    : 'text-primary-300 hover:text-white hover:bg-surface-border/50'
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
                
                {/* Mobile Language Switcher - Inline TR | EN */}
                <div className="flex items-center gap-2 px-2 py-2">
                  <span className="text-primary-400 text-sm">Dil:</span>
                  <div className="flex items-center gap-1 bg-surface-border/30 rounded-full px-1 py-1">
                    <button
                      onClick={() => {
                        switchLocale('tr');
                        setIsMobileMenuOpen(false);
                      }}
                      className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all ${
                        locale === 'tr'
                          ? 'bg-accent-500 text-white'
                          : 'text-primary-300 hover:text-white'
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
                          : 'text-primary-300 hover:text-white'
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
