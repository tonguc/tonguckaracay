"use client";

import Link from "next/link";
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight, Calendar, Clock, ArrowUpRight } from "lucide-react";
import { getAllPosts, BlogPost } from "@/lib/blog";

export default function BlogPreview() {
  const t = useTranslations('blog');
  const locale = useLocale();
  
  const allPosts = getAllPosts(locale);
  const latestPosts = allPosts.slice(0, 3);
  
  const blogPath = locale === 'tr' ? '/blog' : '/en/blog';

  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-dark/30 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <h2 className="section-title mb-2">
              {locale === 'tr' ? 'Son ' : 'Latest '}<span className="text-gradient">{locale === 'tr' ? 'Yazılar' : 'Posts'}</span>
            </h2>
            <p className="section-subtitle">
              {t('subtitle')}
            </p>
          </div>
          <Link 
            href={blogPath} 
            className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 font-medium mt-4 sm:mt-0 group"
          >
            {t('allPosts')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} locale={locale} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCard({ 
  post, 
  index,
  locale,
  t
}: { 
  post: BlogPost; 
  index: number;
  locale: string;
  t: any;
}) {
  const formattedDate = new Date(post.updatedDate || post.date).toLocaleDateString(
    locale === 'tr' ? 'tr-TR' : 'en-US', 
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }
  );
  
  const blogPath = locale === 'tr' ? `/blog/${post.slug}` : `/en/blog/${post.slug}`;

  return (
    <Link href={blogPath}>
      <article 
        className="card card-glow group animate-fade-in-up overflow-hidden h-full"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Image */}
        <div className="aspect-video bg-gradient-to-br from-surface-border to-surface-dark relative overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category & Meta */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-accent-400 uppercase tracking-wider">
              {post.category}
            </span>
            <div className="flex items-center gap-3 text-xs text-primary-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg font-display font-semibold text-white mb-3 group-hover:text-accent-400 transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-primary-300 text-sm leading-relaxed mb-4 line-clamp-2">
            {post.description}
          </p>

          {/* Read More */}
          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-300 group-hover:text-accent-400 transition-colors">
            {t('readMore')}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </article>
    </Link>
  );
}
