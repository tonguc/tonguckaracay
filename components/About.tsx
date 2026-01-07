"use client";

import { useLocale, useTranslations } from 'next-intl';
import { Award, Users, Globe, Zap } from "lucide-react";

export default function About() {
  const t = useTranslations('about');
  const locale = useLocale();

  const highlights = [
    { icon: Award, titleKey: 'experience', valueKey: 'experienceValue' },
    { icon: Users, titleKey: 'clients', valueKey: 'clientsValue' },
    { icon: Globe, titleKey: 'countries', valueKey: 'countriesValue' },
    { icon: Zap, titleKey: 'projects', valueKey: 'projectsValue' },
  ];

  return (
    <section id="hakkimda" className="py-20 bg-surface-card/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">
              {t('title')} <span className="text-gradient">{t('highlight')}</span>
            </h2>
            <p className="section-subtitle mb-6">
              {t('description')}
            </p>
            <p className="text-primary-400 mb-8">
              {t('subdescription')}
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.titleKey} className="card p-4">
                    <Icon className="w-8 h-8 text-accent-500 mb-2" />
                    <div className="text-2xl font-bold text-white">{t(item.valueKey)}</div>
                    <div className="text-sm text-primary-400">{t(item.titleKey)}</div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-white mb-3">{locale === 'tr' ? 'Uzmanlık Alanları' : 'Expertise'}</h3>
              <div className="flex flex-wrap gap-2">
                {['UI/UX Design', 'SEO', 'Growth Marketing', 'AI Solutions', 'Digital Strategy'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-accent-500/10 text-accent-400 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-white mb-3">{locale === 'tr' ? 'Çalışma Yaklaşımı' : 'Work Approach'}</h3>
              <p className="text-primary-300">
                {locale === 'tr' 
                  ? 'Veri odaklı, kullanıcı merkezli ve sonuç getiren stratejiler geliştiriyorum. Her projeye özel çözümler sunuyorum.'
                  : 'I develop data-driven, user-centered strategies that deliver results. I offer customized solutions for each project.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
