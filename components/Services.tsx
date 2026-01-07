"use client";

import Link from "next/link";
import { useLocale, useTranslations } from 'next-intl';
import { Search, Megaphone, Palette, Bot, Share2, ArrowUpRight } from "lucide-react";
import { useTheme } from './ThemeProvider';

export default function Services() {
  const t = useTranslations('services');
  const locale = useLocale();
  const { theme } = useTheme();
  
  const services = [
    { icon: Palette, titleKey: 'uiux', href: locale === 'tr' ? '/hizmetler/ui-ux-tasarim' : '/en/services/ui-ux-design' },
    { icon: Search, titleKey: 'seo', href: locale === 'tr' ? '/hizmetler/seo-danismanligi' : '/en/services/seo-consulting' },
    { icon: Megaphone, titleKey: 'ads', href: locale === 'tr' ? '/hizmetler/online-reklamcilik' : '/en/services/online-advertising' },
    { icon: Bot, titleKey: 'ai', href: locale === 'tr' ? '/hizmetler/yapay-zeka-cozumleri' : '/en/services/ai-solutions' },
    { icon: Share2, titleKey: 'social', href: locale === 'tr' ? '/hizmetler/sosyal-medya-yonetimi' : '/en/services/social-media-management' },
  ];

  return (
    <section id="hizmetler" className="py-24 relative">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            {t('sectionTitle')} <span className="text-gradient">{t('sectionTitleHighlight')}</span>
          </h2>
          <p className="section-subtitle mx-auto">
            {t('sectionSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.titleKey} service={service} index={index} t={t} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index, t, theme }: { service: any; index: number; t: any; theme: string }) {
  const Icon = service.icon;
  const title = t(`${service.titleKey}.title`);
  const description = t(`${service.titleKey}.description`);
  const features = t.raw(`${service.titleKey}.features`) as string[];
  const isLight = theme === 'light';
  
  return (
    <Link href={service.href} className="card card-glow p-5 group block animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
      <div className="w-10 h-10 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent-500/20 transition-all duration-300">
        <Icon className="w-5 h-5 text-accent-500" />
      </div>
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className={`text-base font-display font-semibold ${isLight ? 'text-slate-900' : 'text-white'} group-hover:text-accent-500 transition-colors leading-tight`}>
          {title}
        </h3>
        <ArrowUpRight className={`w-4 h-4 ${isLight ? 'text-slate-400' : 'text-primary-500'} group-hover:text-accent-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0`} />
      </div>
      <p className={`${isLight ? 'text-slate-600' : 'text-primary-300'} text-sm mb-4 leading-relaxed line-clamp-3`}>
        {description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {features.map((feature: string) => (
          <span key={feature} className={`px-2 py-0.5 text-xs font-medium ${isLight ? 'text-slate-500 bg-slate-100' : 'text-primary-400 bg-surface-border/30'} rounded-full`}>
            {feature}
          </span>
        ))}
      </div>
    </Link>
  );
}
