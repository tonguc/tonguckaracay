"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Clock, ArrowUpRight } from "lucide-react";

// Bu veri daha sonra CMS veya API'den gelecek
const blogPosts = [
  {
    title: "Profesyonel SEO Uzmanı Nedir, Nasıl Olunur?",
    excerpt: "SEO uzmanı çalışmasına başlarken, ilk olarak siteyi analiz eder. Çalışma için gerekli stratejileri belirler...",
    slug: "profesyonel-seo-uzmani-nedir-nasil-olunur",
    category: "SEO",
    categorySlug: "/seo",
    date: "13 Ekim 2020",
    readTime: "8 dk",
  },
  {
    title: "UI – UX Designer Nedir, Nasıl Çalışırlar?",
    excerpt: "UI/UX Designer hakkında ince bir çizgi olmasına rağmen aralarında önemli teknik farklılıklar da mevcuttur...",
    slug: "ui-ux-designer-nedir-nasil-calisirlar",
    category: "UI/UX Tasarım",
    categorySlug: "/ui-ux-tasarim",
    date: "23 Eylül 2020",
    readTime: "6 dk",
  },
  {
    title: "SEO ile Organik Trafiği Artırmanın Yöntemleri",
    excerpt: "İngilizce Search Engine Optimization kelimelerinin baş harfleri ile ifade edilen SEO, arama motoru optimizasyonu...",
    slug: "seo-ile-organik-trafigi-artirmanin-yontemleri",
    category: "SEO",
    categorySlug: "/seo",
    date: "22 Eylül 2020",
    readTime: "10 dk",
  },
];

export default function BlogPreview() {
  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-dark/30 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <h2 className="section-title mb-2">
              Son <span className="text-gradient">Yazılar</span>
            </h2>
            <p className="section-subtitle">
              SEO, dijital pazarlama ve yapay zeka hakkında güncel içerikler.
            </p>
          </div>
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 font-medium mt-4 sm:mt-0 group"
          >
            Tüm yazılar
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCard({ 
  post, 
  index 
}: { 
  post: typeof blogPosts[0]; 
  index: number;
}) {
  return (
    <article 
      className="card card-glow group animate-fade-in-up overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Placeholder */}
      <div className="aspect-video bg-gradient-to-br from-surface-border to-surface-dark relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center">
            <span className="font-display text-xl font-bold text-accent-400">TK</span>
          </div>
        </div>
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category & Meta */}
        <div className="flex items-center justify-between mb-3">
          <Link 
            href={post.categorySlug}
            className="text-xs font-medium text-accent-400 hover:text-accent-300 uppercase tracking-wider"
          >
            {post.category}
          </Link>
          <div className="flex items-center gap-3 text-xs text-primary-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Title */}
        <Link href={`/${post.slug}`}>
          <h3 className="text-lg font-display font-semibold text-white mb-3 group-hover:text-accent-400 transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-primary-300 text-sm leading-relaxed mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Read More */}
        <Link 
          href={`/${post.slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary-300 hover:text-accent-400 transition-colors group/link"
        >
          Devamını oku
          <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
