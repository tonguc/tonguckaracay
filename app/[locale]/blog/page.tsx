import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { Calendar, Clock, ArrowUpRight, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { getAllPosts, BlogPost } from '@/lib/blog-utils';

type Locale = 'tr' | 'en';

const POSTS_PER_PAGE = 12;

type Props = {
  params: { locale: Locale };
  searchParams: { page?: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'blog' });
  
  return {
    title: locale === 'tr'
      ? 'SEO ve Dijital Pazarlama Blogu | Tonguç Karaçay'
      : 'SEO, Digital Marketing & AI Blog | Tonguç Karaçay',
    description: t('subtitle'),
  };
}

export default async function BlogPage({ params: { locale }, searchParams }: Props) {
  setRequestLocale(locale);
  const t = await getTranslations('blog');
  
  const allPosts = getAllPosts(locale);
  
  // Pagination
  const currentPage = Math.max(1, parseInt(searchParams.page || '1', 10));
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = allPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

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

        {/* Featured Post — sadece 1. sayfada */}
        {currentPage === 1 && paginatedPosts.length > 0 && (
          <FeaturedPost post={paginatedPosts[0]} locale={locale} t={t} />
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(currentPage === 1 ? paginatedPosts.slice(1) : paginatedPosts).map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} locale={locale} t={t} />
          ))}
        </div>

        {paginatedPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-primary-400">
              {locale === 'tr' ? 'Henüz yazı bulunmuyor.' : 'No posts found.'}
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            locale={locale} 
          />
        )}
      </div>
    </div>
  );
}

function FeaturedPost({ post, locale, t }: { post: BlogPost; locale: Locale; t: any }) {
  const blogPath = locale === 'tr' ? `/${post.slug}` : `/en/${post.slug}`;
  const formattedDate = new Date(post.updatedDate || post.date).toLocaleDateString(
    locale === 'tr' ? 'tr-TR' : 'en-US',
    { day: 'numeric', month: 'long', year: 'numeric' }
  );

  return (
    <Link href={blogPath} className="group block mb-10">
      <article className="relative rounded-2xl overflow-hidden border border-surface-border hover:border-accent-500/40 transition-all duration-300 bg-surface-card/30">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="aspect-video md:aspect-auto md:h-80 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              width={1200}
              height={675}
            />
          </div>
          {/* Content */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-accent-500/20 text-accent-400 text-xs font-semibold rounded-full uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-xs text-primary-500 flex items-center gap-1">
                <BookOpen className="w-3 h-3" /> {post.readTime}
              </span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-accent-400 transition-colors leading-tight">
              {post.title}
            </h2>
            <p className="text-primary-300 leading-relaxed mb-6 line-clamp-3">
              {post.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-primary-500 flex items-center gap-1">
                <Calendar className="w-3 h-3" /> {formattedDate}
              </span>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-400 group-hover:gap-2 transition-all">
                {t('readMore')} <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
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
  
  const blogPath = locale === 'tr' ? `/${post.slug}` : `/en/${post.slug}`;

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
            width={1200}
            height={675}
          />
          <div className="absolute inset-0 bg-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-3 text-xs text-primary-400 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
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

function Pagination({ 
  currentPage, 
  totalPages, 
  locale 
}: { 
  currentPage: number; 
  totalPages: number; 
  locale: Locale;
}) {
  const basePath = locale === 'tr' ? '/blog' : '/en/blog';
  
  const getPageUrl = (page: number) => {
    if (page === 1) return basePath;
    return `${basePath}?page=${page}`;
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <nav className="flex items-center justify-center gap-2 mt-12" aria-label="Pagination">
      {/* Previous */}
      {currentPage > 1 ? (
        <Link
          href={getPageUrl(currentPage - 1)}
          className="flex items-center gap-1 px-3 py-2 text-sm text-primary-300 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">{locale === 'tr' ? 'Önceki' : 'Previous'}</span>
        </Link>
      ) : (
        <span className="flex items-center gap-1 px-3 py-2 text-sm text-primary-500 cursor-not-allowed">
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">{locale === 'tr' ? 'Önceki' : 'Previous'}</span>
        </span>
      )}

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {pages.map((page) => (
          <Link
            key={page}
            href={getPageUrl(page)}
            className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
              page === currentPage
                ? 'bg-accent-500 text-primary-950'
                : 'text-primary-300 hover:text-white hover:bg-surface-card'
            }`}
          >
            {page}
          </Link>
        ))}
      </div>

      {/* Next */}
      {currentPage < totalPages ? (
        <Link
          href={getPageUrl(currentPage + 1)}
          className="flex items-center gap-1 px-3 py-2 text-sm text-primary-300 hover:text-white transition-colors"
        >
          <span className="hidden sm:inline">{locale === 'tr' ? 'Sonraki' : 'Next'}</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      ) : (
        <span className="flex items-center gap-1 px-3 py-2 text-sm text-primary-500 cursor-not-allowed">
          <span className="hidden sm:inline">{locale === 'tr' ? 'Sonraki' : 'Next'}</span>
          <ChevronRight className="w-4 h-4" />
        </span>
      )}
    </nav>
  );
}
