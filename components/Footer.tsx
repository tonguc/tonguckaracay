"use client";

import Link from "next/link";
import { useLocale, useTranslations } from 'next-intl';
import { Mail, Linkedin, Twitter, ExternalLink } from "lucide-react";

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/in/tonguckaracay", icon: Linkedin },
  { name: "Behance", href: "https://behance.net/tonguc", icon: ExternalLink },
  { name: "Twitter", href: "https://twitter.com/tonguckaracay", icon: Twitter },
];

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  
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
    about: '/hakkimda',
    contact: '/iletisim',
    home: '/',
    privacy: '/gizlilik-politikasi',
    terms: '/kullanim-sartlari'
  } : {
    about: '/en/about',
    contact: '/en/contact',
    home: '/en',
    privacy: '/en/privacy-policy',
    terms: '/en/terms-of-service'
  };

  return (
    <footer className="dark:bg-surface-dark bg-slate-100 border-t dark:border-surface-border border-slate-200">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href={navLinks.home} className="font-display text-2xl font-bold dark:text-white text-slate-900 inline-block mb-4">
              Tonguç<span className="text-accent-500">.</span>
            </Link>
            <p className="dark:text-primary-400 text-slate-600 mb-6 leading-relaxed">
              {t('tagline')}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg dark:bg-surface-card bg-white border dark:border-surface-border border-slate-200 flex items-center justify-center dark:text-primary-400 text-slate-500 hover:text-accent-500 dark:hover:border-accent-500/30 hover:border-accent-500/50 transition-all"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-display font-semibold dark:text-white text-slate-900 mb-4">{t('services')}</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="dark:text-primary-400 text-slate-600 hover:text-accent-500 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog Column */}
          <div>
            <h3 className="font-display font-semibold dark:text-white text-slate-900 mb-4">{t('blog')}</h3>
            <ul className="space-y-3">
              {blogCategories.map((category) => (
                <li key={category.href}>
                  <Link
                    href={category.href}
                    className="dark:text-primary-400 text-slate-600 hover:text-accent-500 transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-display font-semibold dark:text-white text-slate-900 mb-4">{t('contact')}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:tonguckaracay@gmail.com"
                  className="flex items-center gap-2 dark:text-primary-400 text-slate-600 hover:text-accent-500 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  tonguckaracay@gmail.com
                </a>
              </li>
              <li>
                <Link
                  href={navLinks.about}
                  className="dark:text-primary-400 text-slate-600 hover:text-accent-500 transition-colors"
                >
                  {locale === 'tr' ? 'Hakkımda' : 'About'}
                </Link>
              </li>
              <li>
                <Link
                  href={navLinks.contact}
                  className="dark:text-primary-400 text-slate-600 hover:text-accent-500 transition-colors"
                >
                  {t('contactForm')}
                </Link>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm dark:text-primary-400 text-slate-600 mb-3">
                {t('newsletter')}
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder={t('emailPlaceholder')}
                  className="flex-1 px-4 py-2 dark:bg-surface-card bg-white border dark:border-surface-border border-slate-200 rounded-lg text-sm dark:text-primary-200 text-slate-700 dark:placeholder:text-primary-500 placeholder:text-slate-400 focus:outline-none focus:border-accent-500/50"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-accent-500 hover:bg-accent-600 text-white font-medium text-sm rounded-lg transition-colors"
                >
                  {t('subscribe')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t dark:border-surface-border border-slate-200">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm dark:text-primary-500 text-slate-500">
            <p>© {new Date().getFullYear()} Tonguç Karaçay. {t('copyright')}</p>
            <div className="flex items-center gap-6">
              <Link href={navLinks.privacy} className="dark:hover:text-primary-300 hover:text-slate-700 transition-colors">
                {t('privacy')}
              </Link>
              <Link href={navLinks.terms} className="dark:hover:text-primary-300 hover:text-slate-700 transition-colors">
                {t('terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
