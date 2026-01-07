"use client";

import Link from "next/link";
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight, Calendar, Clock, ArrowUpRight } from "lucide-react";
import { getAllPosts, BlogPost } from "@/lib/blog";
import { useTheme } from './ThemeProvider';

export default function BlogPreview() {
  const t = useTranslations('blog');
  const locale = useLocale();
  const { theme } = useTheme();
  
  const allPosts = getAllPosts(locale);
  const latestPosts = allPosts.slice(0, 3);
  const blogPath = locale === 'tr' ? '/blog' : '/en/blog';

  return (
    <section className="py-24 relative">
      <div className="container-custom relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <h2 className="section-title mb-2">
              {locale === 'tr' ? 'Son ' : 'Latest '}<span className="text-gradient">{locale === 'tr' ? 'Yazılar' : 'Posts'}</span>
            </h2>
            <p className="section-subtitle">{t('subtitle')}</p>
          </div>
          <Link href={blogPath} className="inline-flex items-center gap-2 text-accent-500 hover:text-accent-400 font-medium mt-4 sm:mt-0 group">
            {t('allPosts')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} locale={locale} t={t} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCard({ post, index, locale, t, theme }: { post: BlogPost; index: number; locale: string; t: any; theme: string }) {
  const isLight = theme === 'light';
  const formattedDate = new Date(post.updatedDate || post.date).toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' });
  const blogPath = locale === 'tr' ? `/blog/${post.slug}` : `/en/blog/${post.slug}`;

  return (
    <Link href={blogPath}>
      <article className="card card-glow group animate-fade-in-up overflow-hidden h-full" style={{ animationDelay: `${index * 100}ms` }}>
        <div className="aspect-video relative overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-accent-500 uppercase tracking-wider">{post.category}</span>
            <div className={`flex items-center gap-3 text-xs ${isLight ? 'text-slate-500' : 'text-primary-400'}`}>
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{formattedDate}</span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
            </div>
          </div>
          <h3 className={`text-lg font-display font-semibold ${isLight ? 'text-slate-900' : 'text-white'} mb-3 group-hover:text-accent-500 transition-colors line-clamp-2`}>{post.title}</h3>
          <p className={`${isLight ? 'text-slate-600' : 'text-primary-300'} text-sm leading-relaxed mb-4 line-clamp-2`}>{post.description}</p>
          <span className={`inline-flex items-center gap-1 text-sm font-medium ${isLight ? 'text-slate-500' : 'text-primary-300'} group-hover:text-accent-500 transition-colors`}>
            {t('readMore')}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </article>
    </Link>
  );
}
