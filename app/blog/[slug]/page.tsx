import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag, Share2, Linkedin, Twitter } from "lucide-react";
import { getPostBySlug, getAllPosts } from "@/lib/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Yazı Bulunamadı" };
  }

  return {
    title: `${post.title} | Tonguç Karaçay Blog`,
    description: post.description,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedDate,
      authors: ["Tonguç Karaçay"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  // Related posts (same category)
  const relatedPosts = allPosts
    .filter((p) => p.category === post.category && p.slug !== slug)
    .slice(0, 3);

  return (
    <main className="pt-20">
      {/* Article Header */}
      <article>
        <header className="py-12 md:py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-primary-400 mb-6">
                <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                <span>/</span>
                <span className="text-white">{post.category}</span>
              </nav>

              {/* Category & Meta */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-accent-500/20 text-accent-400 rounded-full text-sm font-medium">
                  {post.category}
                </span>
                <span className="text-sm text-primary-400 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {post.updatedDate ? (
                    <>Güncellendi: {new Date(post.updatedDate).toLocaleDateString('tr-TR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</>
                  ) : (
                    new Date(post.date).toLocaleDateString('tr-TR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })
                  )}
                </span>
                <span className="text-sm text-primary-400 flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Description */}
              <p className="text-xl text-primary-300 leading-relaxed mb-8">
                {post.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-surface-card border border-surface-border rounded-lg text-sm text-primary-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="pb-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div 
                className="prose prose-invert prose-lg max-w-none
                  prose-headings:font-display prose-headings:font-bold prose-headings:text-white
                  prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-primary-300 prose-p:leading-relaxed prose-p:mb-6
                  prose-a:text-accent-400 prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-white prose-strong:font-semibold
                  prose-ul:text-primary-300 prose-ol:text-primary-300
                  prose-li:mb-2
                  prose-table:border-collapse prose-table:w-full
                  prose-th:bg-surface-card prose-th:text-white prose-th:p-3 prose-th:text-left prose-th:border prose-th:border-surface-border
                  prose-td:p-3 prose-td:border prose-td:border-surface-border prose-td:text-primary-300
                  prose-code:bg-surface-card prose-code:text-accent-400 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                  prose-pre:bg-surface-darker prose-pre:border prose-pre:border-surface-border prose-pre:rounded-xl
                  prose-blockquote:border-l-accent-500 prose-blockquote:bg-surface-card/50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl
                "
                dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
              />

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-surface-border">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <span className="text-primary-300 flex items-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Bu yazıyı paylaş:
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://tonguckaracay.com/blog/${post.slug}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-surface-card border border-surface-border flex items-center justify-center text-primary-300 hover:text-accent-400 hover:border-accent-500/50 transition-all"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://tonguckaracay.com/blog/${post.slug}`)}&title=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-surface-card border border-surface-border flex items-center justify-center text-primary-300 hover:text-accent-400 hover:border-accent-500/50 transition-all"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Author */}
              <div className="mt-8 p-6 bg-surface-card border border-surface-border rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-accent-500/20 flex items-center justify-center text-accent-400 font-bold text-xl">
                    TK
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-white mb-1">Tonguç Karaçay</h3>
                    <p className="text-sm text-primary-400 mb-3">AI-Driven UX & Growth Partner</p>
                    <p className="text-primary-300 text-sm">
                      25+ yıldır Türkiye'nin önde gelen markaları için UI/UX tasarım, SEO ve dijital pazarlama 
                      stratejileri geliştiriyorum.
                    </p>
                  </div>
                </div>
              </div>

              {/* Prev/Next Navigation */}
              <div className="mt-12 grid md:grid-cols-2 gap-4">
                {prevPost && (
                  <Link
                    href={`/blog/${prevPost.slug}`}
                    className="group p-4 bg-surface-card border border-surface-border rounded-xl hover:border-accent-500/50 transition-all"
                  >
                    <span className="text-sm text-primary-400 flex items-center gap-1 mb-2">
                      <ArrowLeft className="w-4 h-4" />
                      Önceki Yazı
                    </span>
                    <span className="text-white group-hover:text-accent-400 transition-colors line-clamp-1">
                      {prevPost.title}
                    </span>
                  </Link>
                )}
                {nextPost && (
                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="group p-4 bg-surface-card border border-surface-border rounded-xl hover:border-accent-500/50 transition-all md:text-right"
                  >
                    <span className="text-sm text-primary-400 flex items-center justify-end gap-1 mb-2">
                      Sonraki Yazı
                      <ArrowRight className="w-4 h-4" />
                    </span>
                    <span className="text-white group-hover:text-accent-400 transition-colors line-clamp-1">
                      {nextPost.title}
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-surface-card/30">
          <div className="container-custom">
            <h2 className="text-2xl font-display font-bold text-white mb-8">
              Benzer Yazılar
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group bg-surface-card border border-surface-border rounded-xl p-5 hover:border-accent-500/50 transition-all"
                >
                  <span className="text-xs text-primary-400">{relatedPost.category}</span>
                  <h3 className="text-lg font-display font-semibold text-white mt-2 mb-2 group-hover:text-accent-400 transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-primary-300 line-clamp-2">
                    {relatedPost.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-display font-bold text-white mb-4">
            Profesyonel Destek mi Arıyorsunuz?
          </h2>
          <p className="text-primary-300 mb-6 max-w-xl mx-auto">
            SEO, UI/UX ve dijital pazarlama konularında 25 yıllık deneyimimle projenize katkı sağlayabilirim.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white rounded-xl font-medium transition-all"
          >
            Ücretsiz Görüşme
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

// Simple markdown-like formatting
function formatContent(content: string): string {
  return content
    // Headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Unordered lists
    .replace(/^\s*-\s+(.*)$/gim, '<li>$1</li>')
    // Ordered lists
    .replace(/^\s*\d+\.\s+(.*)$/gim, '<li>$1</li>')
    // Tables (basic)
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(cell => cell.trim());
      if (cells.every(cell => cell.trim().match(/^[-:]+$/))) {
        return ''; // Skip separator row
      }
      const isHeader = !match.includes('---');
      const tag = isHeader ? 'th' : 'td';
      const row = cells.map(cell => `<${tag}>${cell.trim()}</${tag}>`).join('');
      return `<tr>${row}</tr>`;
    })
    // Paragraphs
    .replace(/\n\n/g, '</p><p>')
    // Wrap in paragraph
    .replace(/^(.+)$/gim, (match) => {
      if (match.startsWith('<')) return match;
      return `<p>${match}</p>`;
    })
    // Clean up empty paragraphs
    .replace(/<p><\/p>/g, '')
    .replace(/<p>\s*<\/p>/g, '');
}
