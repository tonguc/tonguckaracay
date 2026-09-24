"use client";

import Link from "next/link";
import { useLocale, useTranslations } from 'next-intl';
import { Mail, Linkedin, ExternalLink } from "lucide-react";
import { offers } from "@/lib/offers";

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/tongu%C3%A7-kara%C3%A7ay-36311040/", icon: Linkedin },
  { name: "Instagram", href: "https://www.instagram.com/tonguckaracay", icon: InstagramIcon },
  { name: "Behance", href: "https://behance.net/tonguc", icon: ExternalLink },
];

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  
  const loc = locale === 'tr' ? 'tr' : 'en';
  const services = [
    ...offers.map((o) => ({ name: o.name[loc], href: o.href[loc] })),
    ...(locale === 'tr' ? [
      { name: "GEO Optimizasyonu", href: "/hizmetler/geo-optimizasyonu" },
        ] : [
      { name: "GEO Optimization", href: "/en/services/geo-optimization" },
        ]),
  ];

  // Lab — danışmanlık alıcısının ana yolundan çıkarılan ürünler, eğitim ve teknik AI yazıları
  const labLinks = locale === 'tr' ? [
    { name: "Ürünler", href: "/urunler" },
    { name: "AI Lab Yazıları", href: "/blog?bolum=lab" },
  ] : [
    { name: "Products", href: "/en/products" },
    { name: "AI Lab Articles", href: "/en/blog?section=lab" },
  ];

  const navLinks = locale === 'tr' ? {
    about: '/hakkimda', contact: '/iletisim', home: '/', privacy: '/privacy-policy', terms: '/terms-of-service', cases: '/vaka-calismalari', blog: '/blog'
  } : {
    about: '/en/about', contact: '/en/contact', home: '/en', privacy: '/en/privacy-policy', terms: '/en/terms-of-service', cases: '/en/case-studies', blog: '/en/blog'
  };

  return (
    <footer className="bg-surface-dark border-t border-surface-border">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href={navLinks.home} className="font-display text-2xl font-bold text-white inline-block mb-4">
              Tonguç Karaçay<span className="text-accent-500">.</span>
            </Link>
            <p className="text-primary-400 mb-6 leading-relaxed">{t('tagline')}</p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-surface-card border border-surface-border text-primary-400 flex items-center justify-center hover:text-accent-500 hover:border-accent-500/50 transition-all">
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="font-display font-semibold text-white mb-4">{t('services')}</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-primary-400 hover:text-accent-500 transition-colors">{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Lab</h3>
            <ul className="space-y-3">
              {labLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-primary-400 hover:text-accent-500 transition-colors">{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display font-semibold text-white mb-4">{t('contact')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:tonguckaracay@gmail.com" className="flex items-center gap-2 text-primary-400 hover:text-accent-500 transition-colors">
                  <Mail className="w-4 h-4" />tonguckaracay@gmail.com
                </a>
              </li>
              <li><Link href={navLinks.cases} className="text-primary-400 hover:text-accent-500 transition-colors">{locale === 'tr' ? 'Vaka Çalışmaları' : 'Case Studies'}</Link></li>
              <li><Link href={navLinks.blog} className="text-primary-400 hover:text-accent-500 transition-colors">Blog</Link></li>
              <li><Link href={navLinks.about} className="text-primary-400 hover:text-accent-500 transition-colors">{locale === 'tr' ? 'Hakkımda' : 'About'}</Link></li>
              <li><Link href={navLinks.contact} className="text-primary-400 hover:text-accent-500 transition-colors">{t('contactForm')}</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-surface-border">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-500">
            <p>© {new Date().getFullYear()} Tonguç Karaçay. {t('copyright')}</p>
            <div className="flex items-center gap-6">
              <Link href={navLinks.privacy} className="hover:text-primary-300 transition-colors">{t('privacy')}</Link>
              <Link href={navLinks.terms} className="hover:text-primary-300 transition-colors">{t('terms')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
