import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | SEO, UI/UX ve Dijital Pazarlama Yazıları | Tonguç Karaçay",
  description: "SEO, UI/UX tasarım, dijital pazarlama ve yapay zeka hakkında güncel blog yazıları. 25 yıllık deneyimle sektörel içgörüler ve pratik rehberler.",
  keywords: "SEO blog, UI UX blog, dijital pazarlama yazıları, web tasarım blog",
  openGraph: {
    title: "Blog | SEO, UI/UX ve Dijital Pazarlama Yazıları",
    description: "25 yıllık deneyimle SEO, UI/UX ve dijital pazarlama hakkında güncel içerikler.",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Blog
            </h1>
            <p className="text-xl text-primary-300 leading-relaxed">
              SEO, UI/UX tasarım, dijital pazarlama ve yapay zeka hakkında güncel içerikler. 
              25 yıllık deneyimle sektörel içgörüler ve pratik rehberler.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12">
          <div className="container-custom">
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <div className="bg-surface-card border border-surface-border rounded-2xl p-8 md:p-12 hover:border-accent-500/50 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-accent-500/20 text-accent-400 rounded-full text-sm font-medium">
                    Öne Çıkan
                  </span>
                  <span className="px-3 py-1 bg-surface-darker text-primary-300 rounded-full text-sm">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 group-hover:text-accent-400 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-primary-300 text-lg mb-6 line-clamp-2">
                  {featuredPost.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-primary-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {new Date(featuredPost.updatedDate || featuredPost.date).toLocaleDateString('tr-TR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-6 text-accent-400 font-medium">
                  Devamını Oku
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-surface-card border border-surface-border rounded-2xl p-6 hover:border-accent-500/50 transition-all"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2.5 py-1 bg-surface-darker text-primary-300 rounded-full text-xs">
                    {post.category}
                  </span>
                  <span className="text-xs text-primary-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-display font-semibold text-white mb-3 group-hover:text-accent-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-primary-300 text-sm mb-4 line-clamp-3">
                  {post.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-primary-400">
                    {new Date(post.updatedDate || post.date).toLocaleDateString('tr-TR', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                  <span className="text-accent-400 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Oku
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-surface-card/30">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            Dijital Büyüme İçin Destek mi Arıyorsunuz?
          </h2>
          <p className="text-primary-300 mb-8 max-w-2xl mx-auto">
            SEO, UI/UX tasarım ve dijital pazarlama konularında 25 yıllık deneyimimle 
            markanızın online başarısını birlikte planlayalım.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white rounded-xl font-medium transition-all"
          >
            Ücretsiz Görüşme Talep Et
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
