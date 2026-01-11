"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function About() {
  const t = useTranslations('about');
  const locale = useLocale();
  const aboutPath = locale === 'tr' ? '/hakkimda' : '/en/about';

  const stats = [
    { value: "25+", label: locale === 'tr' ? "Yıl Deneyim" : "Years Experience" },
    { value: "100+", label: locale === 'tr' ? "Marka" : "Brands" },
    { value: "500+", label: locale === 'tr' ? "Tamamlanan Proje" : "Completed Projects" },
    { value: "12+", label: locale === 'tr' ? "Ülke" : "Countries" },
  ];

  const brands = [
    "THY", "BMW", "Galatasaray", "Sabah", "ATV", "Star TV", 
    "Hürriyet", "Milliyet", "NTV", "CNN Türk"
  ];

  const highlights = [
    locale === 'tr' ? "Uluslararası deneyim (ABD, Kanada, Almanya)" : "International experience (USA, Canada, Germany)",
    locale === 'tr' ? "Kurumsal ve startup projelerinde uzman" : "Expert in corporate and startup projects",
    locale === 'tr' ? "Veriye dayalı strateji geliştirme" : "Data-driven strategy development",
    locale === 'tr' ? "Uçtan uca dijital çözümler" : "End-to-end digital solutions",
  ];

  return (
    <section id="hakkimda" className="py-12 md:py-20 bg-surface-card/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Sol - Fotoğraf ve İstatistikler */}
          <div className="relative">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/tonguc-karacay.jpg"
                  alt="Tonguç Karaçay"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-4 right-2 md:-bottom-6 md:-right-6 bg-surface-card border border-primary-800 rounded-xl p-3 md:p-4 shadow-xl">
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-accent-500">{stat.value}</div>
                      <div className="text-[10px] md:text-xs text-primary-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sağ - İçerik */}
          <div className="mt-8 lg:mt-0">
            <h2 className="section-title">
              {t('title')} <span className="text-gradient">{t('highlight')}</span>
            </h2>
            
            <p className="text-base md:text-lg text-primary-300 mb-3 md:mb-4 leading-relaxed">
              {t('description')}
            </p>
            
            <p className="text-sm md:text-base text-primary-400 mb-4 md:mb-6">
              {t('subdescription')}
            </p>

            {/* Highlights */}
            <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2 md:gap-3">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-accent-500 flex-shrink-0" />
                  <span className="text-sm md:text-base text-primary-300">{item}</span>
                </div>
              ))}
            </div>

            {/* Çalıştığım Markalar */}
            <div className="mb-6 md:mb-8">
              <h3 className="text-sm font-semibold text-primary-400 mb-3 uppercase tracking-wider">
                {locale === 'tr' ? 'Çalıştığım Markalardan Bazıları' : 'Some Brands I Worked With'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {brands.map((brand, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-primary-800/50 text-primary-300 rounded-full text-sm"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link href={aboutPath} className="btn-primary group">
              {t('moreInfo')}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
