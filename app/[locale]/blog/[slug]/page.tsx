import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { getPostBySlug, getRelatedPosts, getAllSlugs } from '@/lib/blog';
import MarkdownRenderer from '@/components/MarkdownRenderer';

type Props = {
  params: { locale: string; slug: string };
};

export async function generateStaticParams() {
  const trSlugs = getAllSlugs('tr');
  const enSlugs = getAllSlugs('en');
  
  return [
    ...trSlugs.map(slug => ({ locale: 'tr', slug })),
    ...enSlugs.map(slug => ({ locale: 'en', slug })),
  ];
}

export async function generateMetadata({ params: { locale, slug } }: Props): Promise<Metadata> {
  const post = getPostBySlug(slug, locale);
  
  if (!post) {
    return { title: 'Post Not Found' };
  }

  const baseUrl = 'https://tonguckaracay.com';
  const url = locale === 'tr' ? `${baseUrl}/blog/${slug}` : `${baseUrl}/en/blog/${slug}`;

  return {
    title: `${post.title} | Tonguç Karaçay`,
    description: post.description,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updatedDate,
      authors: ['Tonguç Karaçay'],
      images: [post.image],
      url: url,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function BlogPostPage({ params: { locale, slug } }: Props) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('blog');
  
  const post = getPostBySlug(slug, locale);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, locale, 3);
  
  const formattedDate = new Date(post.updatedDate || post.date).toLocaleDateString(
    locale === 'tr' ? 'tr-TR' : 'en-US',
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }
  );

  const blogPath = locale === 'tr' ? '/blog' : '/en/blog';

  return (
    <article className="pt-28 pb-20">
      <div className="container-custom">
        {/* Back Link */}
        <Link
          href={blogPath}
          className="inline-flex items-center gap-2 text-primary-400 hover:text-accent-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('allPosts')}
        </Link>

        {/* Article Header */}
        <header className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="px-3 py-1 bg-accent-500/10 text-accent-400 text-sm font-medium rounded-full">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-sm text-primary-400">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1 text-sm text-primary-400">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-primary-300">
            {post.description}
          </p>
        </header>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="aspect-video rounded-2xl overflow-hidden border border-surface-border">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
            <MarkdownRenderer content={post.content} />
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-surface-border">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-primary-400" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-surface-card border border-surface-border rounded-full text-sm text-primary-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Box */}
          <div className="mt-12 p-6 bg-surface-card border border-surface-border rounded-2xl">
            <div className="flex items-center gap-4">
              <img
                src="/tonguc-karacay.jpg"
                alt="Tonguç Karaçay"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-display font-semibold text-white">Tonguç Karaçay</h3>
                <p className="text-sm text-primary-400">
                  {locale === 'tr' 
                    ? 'AI-Driven UX & Growth Partner | 25+ Yıl Deneyim' 
                    : 'AI-Driven UX & Growth Partner | 25+ Years Experience'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="max-w-5xl mx-auto mt-20">
            <h2 className="font-display text-2xl font-bold text-white mb-8 text-center">
              {t('relatedPosts')}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={locale === 'tr' ? `/blog/${relatedPost.slug}` : `/en/blog/${relatedPost.slug}`}
                  className="card card-glow group overflow-hidden"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-accent-400 uppercase tracking-wider">
                      {relatedPost.category}
                    </span>
                    <h3 className="font-display font-semibold text-white mt-2 group-hover:text-accent-400 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
