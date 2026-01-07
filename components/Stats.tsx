"use client";

import { useLocale } from 'next-intl';
import { useTheme } from './ThemeProvider';

export default function Stats() {
  const locale = useLocale();
  const { theme } = useTheme();
  const isLight = theme === 'light';
  
  const stats = locale === 'tr' ? [
    { value: '25+', label: 'Yıl Deneyim' },
    { value: '3', label: 'Ülke Pazarı' },
    { value: '35+', label: 'Marka' },
  ] : [
    { value: '25+', label: 'Years Experience' },
    { value: '3', label: 'Country Markets' },
    { value: '35+', label: 'Brands' },
  ];

  return (
    <section className={`py-12 ${isLight ? 'bg-gradient-to-r from-slate-100 via-amber-50/50 to-slate-100' : 'bg-slate-800'}`}>
      <div className="container-custom">
        <div className="flex justify-center items-center gap-16 md:gap-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-amber-500 mb-1">{stat.value}</p>
              <p className={`text-sm ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
