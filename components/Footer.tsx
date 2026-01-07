"use client";

import Link from "next/link";
import { useLocale, useTranslations } from 'next-intl';
import { Mail, Linkedin, Twitter, ExternalLink } from "lucide-react";
import { useTheme } from './ThemeProvider';

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/in/tonguckaracay", icon: Linkedin },
  { name: "Behance", href: "https://behance.net/tonguc", icon: ExternalLink },
  { name: "Twitter", href: "https://twitter.com/tonguckaracay", icon: Twitter },
];

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const { theme } = useTheme();
  const isLight = theme === 'light';
  
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

  const blogCategories = locale === 'tr' ? [
    { name: "UI/UX Tasarım", href: "/blog?kategori=ui-ux" },
    { name: "SEO", href: "/blog?kategori=seo" },
    { name: "Dijital Pazarlama", href: "/blog?kategori=dijital-pazarlama" },
    { name: "Yapay Zeka", href: "/blog?kategori=yapay-zeka" },
  ] : [
    { name: "UI/UX Design", href: "/en/blog?category=ui-ux" },
    { name: "SEO", href: "/en/blog?category=seo" },
    { name: "Digital Marketing", href: "/en/blog?category=digital-marketing" },
    { name: "AI", href: "/en/blog?category=ai" },
  ];

  const navLinks = locale === 'tr' ? {
    about: '/hakkimda', contact: '/iletisim', home: '/', privacy: '/gizlilik-politikasi', terms: '/kullanim-sartlari'
  } : {
    about: '/en/about', contact: '/en/contact', home: '/en', privacy: '/en/privacy-policy', terms: '/en/terms-of-service'
  };

  return (
    <footer className={`${isLight ? 'bg-slate-100 border-slate-200' : 'bg-surface-dark border-surface-border'} border-t`}>
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href={navLinks.home} className={`font-display text-2xl font-bold ${isLight ? 'text-slate-900' : 'text-white'} inline-block mb-4`}>
              Tonguç<span className="text-accent-500">.</span>
            </Link>
            <p className={`${isLight ? 'text-slate-600' : 'text-primary-400'} mb-6 leading-relaxed`}>{t('tagline')}</p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-lg ${isLight ? 'bg-white border-slate-200 text-slate-500' : 'bg-surface-card border-surface-border text-primary-400'} border flex items-center justify-center hover:text-accent-500 hover:border-accent-500/50 transition-all`}>
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className={`font-display font-semibold ${isLight ? 'text-slate-900' : 'text-white'} mb-4`}>{t('services')}</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className={`${isLight ? 'text-slate-600' : 'text-primary-400'} hover:text-accent-500 transition-colors`}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={`font-display font-semibold ${isLight ? 'text-slate-900' : 'text-white'} mb-4`}>{t('blog')}</h3>
            <ul className="space-y-3">
              {blogCategories.map((category) => (
                <li key={category.href}>
                  <Link href={category.href} className={`${isLight ? 'text-slate-600' : 'text-primary-400'} hover:text-accent-500 transition-colors`}>{category.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={`font-display font-semibold ${isLight ? 'text-slate-900' : 'text-white'} mb-4`}>{t('contact')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:tonguckaracay@gmail.com" className={`flex items-center gap-2 ${isLight ? 'text-slate-600' : 'text-primary-400'} hover:text-accent-500 transition-colors`}>
                  <Mail className="w-4 h-4" />tonguckaracay@gmail.com
                </a>
              </li>
              <li><Link href={navLinks.about} className={`${isLight ? 'text-slate-600' : 'text-primary-400'} hover:text-accent-500 transition-colors`}>{locale === 'tr' ? 'Hakkımda' : 'About'}</Link></li>
              <li><Link href={navLinks.contact} className={`${isLight ? 'text-slate-600' : 'text-primary-400'} hover:text-accent-500 transition-colors`}>{t('contactForm')}</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`border-t ${isLight ? 'border-slate-200' : 'border-surface-border'}`}>
        <div className="container-custom py-6">
          <div className={`flex flex-col md:flex-row items-center justify-between gap-4 text-sm ${isLight ? 'text-slate-500' : 'text-primary-500'}`}>
            <p>© {new Date().getFullYear()} Tonguç Karaçay. {t('copyright')}</p>
            <div className="flex items-center gap-6">
              <Link href={navLinks.privacy} className={`${isLight ? 'hover:text-slate-700' : 'hover:text-primary-300'} transition-colors`}>{t('privacy')}</Link>
              <Link href={navLinks.terms} className={`${isLight ? 'hover:text-slate-700' : 'hover:text-primary-300'} transition-colors`}>{t('terms')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
