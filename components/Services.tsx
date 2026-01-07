"use client";

import Link from "next/link";
import { useLocale, useTranslations } from 'next-intl';
import { Palette, Search, Megaphone, Bot, Share2 } from "lucide-react";
import { useTheme } from './ThemeProvider';

export default function Services() {
  const t = useTranslations('services');
  const locale = useLocale();
  const { theme } = useTheme();
  const isLight = theme === 'light';
  
  const services = [
    { icon: Palette, titleKey: 'uiux', href: locale === 'tr' ? '/hizmetler/ui-ux-tasarim' : '/en/services/ui-ux-design' },
    { icon: Search, titleKey: 'seo', href: locale === 'tr' ? '/hizmetler/seo-danismanligi' : '/en/services/seo-consulting' },
    { icon: Megaphone, titleKey: 'ads', href: locale === 'tr' ? '/hizmetler/online-reklamcilik' : '/en/services/online-advertising' },
    { icon: Bot, titleKey: 'ai', href: locale === 'tr' ? '/hizmetler/yapay-zeka-cozumleri' : '/en/services/ai-solutions' },
    { icon: Share2, titleKey: 'social', href: locale === 'tr' ? '/hizmetler/sosyal-medya-yonetimi' : '/en/services/social-media-management' },
  ];

  return (
    <section id="hizmetler" className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">
            {locale === 'tr' ? 'Uzmanlık ' : 'Expertise '}<span className="text-gradient">{locale === 'tr' ? 'Alanlarım' : 'Areas'}</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const title = t(`${service.titleKey}.title`);
            const description = t(`${service.titleKey}.description`);
            
            return (
              <Link 
                key={service.titleKey} 
                href={service.href}
                className={`card p-6 text-center group hover:shadow-xl transition-all duration-300`}
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl ${isLight ? 'bg-amber-50' : 'bg-amber-500/10'} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-amber-500" />
                </div>
                <h3 className={`font-semibold ${isLight ? 'text-slate-900' : 'text-white'} mb-2 group-hover:text-amber-500 transition-colors`}>
                  {title}
                </h3>
                <p className={`text-sm ${isLight ? 'text-slate-500' : 'text-slate-400'} line-clamp-3`}>
                  {description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
