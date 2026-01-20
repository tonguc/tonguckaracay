"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { getFeaturedPosts as getFeaturedPostsEn } from "@/lib/blog";
import { getFeaturedPosts as getFeaturedPostsTr } from "@/lib/blog-tr";

export default function BlogPreview() {
  const t = useTranslations('blog');
  const locale = useLocale();
  
  // Locale'e göre doğru blog verilerini al
  const posts = locale === 'tr' 
    ? getFeaturedPostsTr().slice(0, 3)
    : getFeaturedPostsEn().slice(0, 3);
  
  // Locale'e göre doğru blog path'i
  const blogPath = locale === 'tr' ? '/blog' : '/en/blog';

  return (
    <section className="py-12 md:py-20">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <div>
            <h2 className="section-title">
              {t('title')} <span className="text-gradient">{t('highlight')}</span>
            </h2>
            <p className="section-subtitle">{t('subtitle')}</p>
          </div>
          <Link href={blogPath} className="hidden md:flex items-center gap-2 text-accent-400 hover:text-accent-300 transition-colors">
            {t('viewAll')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`${blogPath}/${post.slug}`} className="card group overflow-hidden hover:shadow-xl hover:shadow-accent-500/10 hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-40 md:h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 md:p-6">
                <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-primary-400 mb-2 md:mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                    {new Date(post.date).toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 md:w-4 md:h-4" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-white mb-2 group-hover:text-accent-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-primary-400 text-xs md:text-sm line-clamp-2">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 md:mt-8 text-center md:hidden">
          <Link href={blogPath} className="btn-secondary">
            {t('viewAll')}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
