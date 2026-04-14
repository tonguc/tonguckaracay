import { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Hash } from 'lucide-react';
import { getPostBySlug, getRelatedPosts, getAllSlugs, getAllPosts } from '@/lib/blog-utils';
import { slugMappingTrToEn, slugMappingEnToTr } from '@/lib/slug-mappings';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import FAQ from '@/components/FAQ';
import ReadingProgress from '@/components/ReadingProgress';
import TableOfContents, { type Heading } from '@/components/TableOfContents';

function extractHeadings(content: string): Heading[] {
  const regex = /^(#{2,3})\s+(.+)$/gm;
  const headings: Heading[] = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    const text = match[2].trim();
    headings.push({
      level: match[1].length,
      text,
      id: text.toLowerCase().replace(/[^a-z0-9\s]/gi, '').trim().replace(/\s+/g, '-'),
    });
  }
  return headings;
}

type Locale = 'tr' | 'en';
type Props = { params: { locale: Locale; slug: string } };

export async function generateStaticParams() {
  const trSlugs = getAllSlugs('tr');
  const enSlugs = getAllSlugs('en');
  return [
    ...trSlugs.map(slug => ({ locale: 'tr', slug })),
    ...enSlugs.map(slug => ({ locale: 'en', slug })),
  ];
}

export async function generateMetadata({ params: { locale, slug } }: Props): Promise<Metadata> {
  let post = getPostBySlug(slug, locale);

  if (!post) {
    if (locale === 'en' && slugMappingTrToEn[slug]) {
      post = getPostBySlug(slugMappingTrToEn[slug], locale);
    } else if (locale === 'tr' && slugMappingEnToTr[slug]) {
      post = getPostBySlug(slugMappingEnToTr[slug], locale);
    }
  }

  if (!post) return { title: 'Post Not Found' };

  const baseUrl = 'https://tonguckaracay.com';
  const url = locale === 'tr' ? `${baseUrl}/${slug}` : `${baseUrl}/en/${slug}`;

  return {
    title: `${post.title} | Tonguç Karaçay`,
    description: post.description,
    keywords: post.tags,
    openGraph: { title: post.title, description: post.description, type: 'article', publishedTime: post.date, modifiedTime: post.updatedDate, authors: ['Tonguç Karaçay'], images: [post.image], url },
    twitter: { card: 'summary_large_image', title: post.title, description: post.description, images: [post.image] },
    alternates: { canonical: url },
  };
}

export default async function BlogPostPage({ params: { locale, slug } }: Props) {
  setRequestLocale(locale);
  const t = await getTranslations('blog');
  let post = getPostBySlug(slug, locale);

  if (!post) {
    if (locale === 'en' && slugMappingTrToEn[slug]) {
      redirect(`/en/${slugMappingTrToEn[slug]}`);
    } else if (locale === 'tr' && slugMappingEnToTr[slug]) {
      redirect(`/${slugMappingEnToTr[slug]}`);
    }
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, locale, 3);
  const relatedSlugs = new Set([slug, ...relatedPosts.map(p => p.slug)]);
  const latestPosts = getAllPosts(locale)
    .filter(p => !relatedSlugs.has(p.slug))
    .slice(0, 6);
  const headings = extractHeadings(post.content);
  const formattedDate = new Date(post.updatedDate || post.date).toLocaleDateString(
    locale === 'tr' ? 'tr-TR' : 'en-US',
    { day: 'numeric', month: 'long', year: 'numeric' }
  );
  const blogPath = locale === 'tr' ? '/blog' : '/en/blog';

  return (
    <article className="pt-28 pb-20">
      <ReadingProgress />
      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.description,
            "image": post.image,
            "author": {
              "@type": "Person",
              "name": "Tonguç Karaçay",
              "url": "https://tonguckaracay.com",
              "image": "https://tonguckaracay.com/tonguc-karacay.jpg",
              "jobTitle": "AI-Driven UX & Growth Consultant",
              "sameAs": [
                "https://www.linkedin.com/in/tonguckaracay",
                "https://twitter.com/tonguckaracay"
              ]
            },
            "publisher": {
              "@type": "Organization",
              "name": "Tonguç Karaçay",
              "logo": {
                "@type": "ImageObject",
                "url": "https://tonguckaracay.com/logo.png"
              }
            },
            "datePublished": post.date,
            "dateModified": post.updatedDate || post.date,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": locale === 'tr'
                ? `https://tonguckaracay.com/${post.slug}`
                : `https://tonguckaracay.com/en/${post.slug}`
            }
          })
        }}
      />

      {post.faq && post.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": post.faq.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.answer
                }
              }))
            })
          }}
        />
      )}

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": locale === 'tr' ? 'Ana Sayfa' : 'Home',
                "item": locale === 'tr' ? 'https://tonguckaracay.com' : 'https://tonguckaracay.com/en'
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": locale === 'tr' ? 'https://tonguckaracay.com/blog' : 'https://tonguckaracay.com/en/blog'
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": locale === 'tr'
                  ? `https://tonguckaracay.com/${post.slug}`
                  : `https://tonguckaracay.com/en/${post.slug}`
              }
            ]
          })
        }}
      />

      <div className="container-custom">
        <Link href={blogPath} className="inline-flex items-center gap-2 text-primary-400 hover:text-accent-500 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          {t('allPosts')}
        </Link>

        <header className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
            <span className="flex items-center gap-1 text-sm text-primary-400"><Calendar className="w-4 h-4" />{formattedDate}</span>
            <span className="flex items-center gap-1 text-sm text-primary-400"><Clock className="w-4 h-4" />{post.readTime}</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>
          <p className="text-lg text-primary-300">{post.description}</p>
        </header>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="aspect-video rounded-2xl overflow-hidden border border-surface-border">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" width={1200} height={675} />
          </div>
        </div>

        <div className="flex gap-12 justify-center">
          <div className="w-full max-w-3xl min-w-0">
            <div className="xl:hidden mb-8">
              <TableOfContents headings={headings} locale={locale} variant="mobile" />
            </div>

            <div className="prose prose-lg max-w-none">
              <MarkdownRenderer content={post.content} />
            </div>

            <div className="mt-12 pt-8 border-t border-surface-border">
              <div className="flex items-center gap-2 flex-wrap">
                <Hash className="w-4 h-4 text-primary-400" />
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-surface-card border border-surface-border rounded-full text-sm text-primary-300">{tag}</span>
                ))}
              </div>
            </div>

            <div className="mt-12 p-6 bg-surface-card border border-surface-border rounded-2xl">
              <div className="flex items-center gap-4">
                <img src="/tonguc-karacay.jpg" alt="Tonguç Karaçay" className="w-16 h-16 rounded-full object-cover" width={64} height={64} />
                <div>
                  <h3 className="font-display font-semibold text-white">Tonguç Karaçay</h3>
                  <p className="text-sm text-primary-400">{locale === 'tr' ? 'AI-Driven UX & Growth Partner | 25+ Yıl Deneyim' : 'AI-Driven UX & Growth Partner | 25+ Years Experience'}</p>
                </div>
              </div>
            </div>

            {post.faq && post.faq.length > 0 && (
              <FAQ
                items={post.faq}
                title={locale === 'tr' ? 'Sıkça Sorulan Sorular' : 'Frequently Asked Questions'}
              />
            )}
          </div>

          <div className="hidden xl:block">
            <TableOfContents headings={headings} locale={locale} variant="desktop" />
          </div>
        </div>

        {relatedPosts.length >= 2 && (
          <div className="max-w-5xl mx-auto mt-20">
            <h2 className="font-display text-2xl font-bold text-white mb-8 text-center">{t('relatedPosts')}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={locale === 'tr' ? `/${relatedPost.slug}` : `/en/${relatedPost.slug}`}
                  className="group bg-surface-card/50 border border-surface-border rounded-2xl overflow-hidden hover:border-accent-500/30 transition-all"
                >
                  <div className="aspect-video overflow-hidden">
                    <img src={relatedPost.image} alt={relatedPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" width={1200} height={675} />
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-accent-500 uppercase tracking-wider">{relatedPost.category}</span>
                    <h3 className="font-display font-semibold text-white mt-2 group-hover:text-accent-500 transition-colors line-clamp-2">{relatedPost.title}</h3>
                  </div>
                </Link>
              ))}
            </div>

            {latestPosts.length > 0 && (
              <div className="mt-10 pt-8 border-t border-surface-border">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-primary-400 mb-4">
                  {locale === 'tr' ? 'Son Yazılar' : 'Latest Posts'}
                </h3>
                <ul className="space-y-2">
                  {latestPosts.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={locale === 'tr' ? `/${p.slug}` : `/en/${p.slug}`}
                        className="flex items-center justify-between gap-4 py-2 border-b border-surface-border/50 group"
                      >
                        <span className="text-sm text-primary-300 group-hover:text-white transition-colors line-clamp-1">{p.title}</span>
                        <span className="text-xs text-primary-500 shrink-0">{p.category}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
