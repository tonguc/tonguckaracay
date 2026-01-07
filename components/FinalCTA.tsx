"use client";

import Link from "next/link";
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight, Mail } from "lucide-react";

export default function FinalCTA() {
  const t = useTranslations('cta');
  const locale = useLocale();
  const contactPath = locale === 'tr' ? '/iletisim' : '/en/contact';

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="card p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-500/10 via-transparent to-accent-500/10" />
          <div className="relative z-10">
            <Mail className="w-12 h-12 text-accent-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('title')}
            </h2>
            <p className="text-primary-300 mb-8 max-w-2xl mx-auto">
              {t('description')}
            </p>
            <Link href={contactPath} className="btn-primary group">
              {t('button')}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
