"use client";

import Link from "next/link";
import { useLocale, useTranslations } from 'next-intl';
import { Palette, Search, Megaphone, Bot, Share2 } from "lucide-react";

export default function Services() {
  const t = useTranslations('services');
  const locale = useLocale();
  
  const services = [
    { icon: Palette, titleKey: 'uiux', href: locale === 'tr' ? '/hizmetler/ui-ux-tasarim' : '/en/services/ui-ux-design' },
    { icon: Search, titleKey: 'seo', href: locale === 'tr' ? '/hizmetler/seo-danismanligi' : '/en/services/seo-consulting' },
    { icon: Megaphone, titleKey: 'ads', href: locale === 'tr' ? '/hizmetler/online-reklamcilik' : '/en/services/online-advertising' },
    { icon: Bot, titleKey: 'ai', href: locale === 'tr' ? '/hizmetler/yapay-zeka-cozumleri' : '/en/services/ai-solutions' },
    { icon: Share2, titleKey: 'social', href: locale === 'tr' ? '/hizmetler/sosyal-medya-yonetimi' : '/en/services/social-media-management' },
  ];

  return (
    <section id="hizmetler" className="py-12 md:py-20">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="section-title">
            {locale === 'tr' ? 'Uzmanlık ' : 'Expertise '}<span className="text-gradient">{locale === 'tr' ? 'Alanlarım' : 'Areas'}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {services.map((service) => {
            const Icon = service.icon;
            const title = t(`${service.titleKey}.title`);
            const description = t(`${service.titleKey}.description`);
            
            return (
              <Link 
                key={service.titleKey} 
                href={service.href}
                className="card p-5 md:p-6 text-center group hover:shadow-xl hover:shadow-accent-500/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 md:mb-4 rounded-xl bg-amber-500/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-amber-500" />
                </div>
                <h3 className="font-semibold text-white mb-2 group-hover:text-amber-500 transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-primary-400 line-clamp-3">
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
