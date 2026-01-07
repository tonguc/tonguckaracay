"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { getFeaturedPosts } from "@/lib/blog";

export default function BlogPreview() {
  const t = useTranslations('blog');
  const locale = useLocale();
  const posts = getFeaturedPosts(locale).slice(0, 3);
  const blogPath = locale === 'tr' ? '/blog' : '/en/blog';

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-12">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`${blogPath}/${post.slug}`} className="card group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent-500/90 text-primary-950 text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-primary-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-primary-400 text-sm line-clamp-2">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href={blogPath} className="btn-secondary">
            {t('viewAll')}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
