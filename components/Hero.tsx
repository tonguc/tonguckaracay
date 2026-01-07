"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const contactPath = locale === 'tr' ? '/iletisim' : '/en/contact';
  
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div>
            <p className="text-sm text-primary-400 mb-2">
              {locale === 'tr' ? 'Ana Sayfa' : 'Home'} /
            </p>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {locale === 'tr' ? 'Merhaba, ben ' : "Hi, I'm "}
              <span className="text-gradient">Tonguç Karaçay</span>
            </h1>

            <p className="text-lg text-primary-300 mb-6 leading-relaxed">
              {locale === 'tr' 
                ? '25 yılı aşkın süredir UI/UX tasarım, SEO ve growth marketing alanlarında çalışıyorum. Türkiye\'nin önde gelen kurumsal şirketlerinin yanı sıra Amerika, Kanada ve Almanya\'daki firmalara da hizmet veriyorum.'
                : "With over 25 years of experience in UI/UX design, SEO, and growth marketing. I serve leading corporate companies in Turkey as well as firms in the USA, Canada, and Germany."}
            </p>

            <p className="text-base text-primary-400 mb-8">
              {locale === 'tr'
                ? 'Kariyerime Türkiye\'nin en büyük medya gruplarında başladım. Sabah, ATV, Star TV gibi markaların dijital ürünlerini tasarladım.'
                : 'I started my career in Turkey\'s largest media groups. I designed digital products for brands like Sabah, ATV, and Star TV.'}
            </p>

            {/* Location Tags */}
            <div className="flex items-center gap-4 mb-8">
              <span className="flex items-center gap-2 text-sm">
                <span className="text-green-500">📍</span>
                <span className="text-primary-300">İstanbul, Türkiye</span>
              </span>
              <span className="flex items-center gap-2 text-sm">
                <span className="text-blue-500">🌐</span>
                <span className="text-primary-300">{locale === 'tr' ? 'Uzaktan Çalışma' : 'Remote Work'}</span>
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href={contactPath} className="btn-primary group">
                {locale === 'tr' ? 'İletişime Geç' : 'Get in Touch'}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="https://linkedin.com/in/tonguckaracay" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right - Photo */}
          <div className="relative">
            <div className="relative max-w-lg mx-auto lg:mx-0">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/tonguc-karacay.jpg"
                  alt="Tonguç Karaçay"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
