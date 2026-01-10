import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { getAllPosts, getAllCategories, BlogPost } from '@/lib/blog-utils';

type Locale = 'tr' | 'en';

type Props = {
  params: { locale: Locale };
  searchParams: { kategori?: string; category?: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'blog' });
  
  return {
    title: locale === 'tr' ? 'Blog | Tonguç Karaçay' : 'Blog | Tonguç Karaçay',
    description: t('subtitle'),
  };
}

export default async function BlogPage({ params: { locale }, searchParams }: Props) {
  setRequestLocale(locale);
  const t = await getTranslations('blog');
  
  // Get posts and categories based on locale
  const allPosts = getAllPosts(locale);
  const categories = getAllCategories(locale);
  
  // Filter by category if provided
  const categoryParam = locale === 'tr' ? searchParams.kategori : searchParams.category;
  const filteredPosts = categoryParam 
    ? allPosts.filter(post => post.category.toLowerCase().replace(/\s+/g, '-') === categoryParam.toLowerCase())
    : allPosts;

  return (
    <div className="pt-28 pb-20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-primary-300 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Link
            href={locale === 'tr' ? '/blog' : '/en/blog'}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              !categoryParam
                ? 'bg-accent-500 text-primary-950'
                : 'bg-surface-card border border-surface-border text-primary-300 hover:text-white'
            }`}
          >
            {t('categories.all')}
          </Link>
          {categories.map((category) => {
            const categorySlug = category.toLowerCase().replace(/\s+/g, '-');
            const isActive = categoryParam === categorySlug;
            const href = locale === 'tr' 
              ? `/blog?kategori=${categorySlug}` 
              : `/en/blog?category=${categorySlug}`;
            
            return (
              <Link
                key={category}
                href={href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-accent-500 text-primary-950'
                    : 'bg-surface-card border border-surface-border text-primary-300 hover:text-white'
                }`}
              >
                {category}
              </Link>
            );
          })}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} locale={locale} t={t} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-primary-400">
              {locale === 'tr' ? 'Bu kategoride henüz yazı bulunmuyor.' : 'No posts found in this category.'}
            </p>
          </div>
        )}
      </div>
    </div>
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
  locale: Locale;
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
        style={{ animationDelay: `${index * 50}ms` }}
      >
        {/* Image */}
        <div className="aspect-video bg-gradient-to-br from-surface-border to-surface-dark relative overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {post.featured && (
            <span className="absolute top-3 left-3 px-2 py-1 bg-accent-500 text-primary-950 text-xs font-semibold rounded">
              {locale === 'tr' ? 'Öne Çıkan' : 'Featured'}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
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

          <h2 className="text-lg font-display font-semibold text-white mb-3 group-hover:text-accent-400 transition-colors line-clamp-2">
            {post.title}
          </h2>

          <p className="text-primary-300 text-sm leading-relaxed mb-4 line-clamp-2">
            {post.description}
          </p>

          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-300 group-hover:text-accent-400 transition-colors">
            {t('readMore')}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </article>
    </Link>
  );
}
