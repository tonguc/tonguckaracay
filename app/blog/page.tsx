import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { client } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Blog | SEO, UI/UX ve Dijital Pazarlama Yazıları | Tonguç Karaçay",
  description: "SEO, UI/UX tasarım, dijital pazarlama ve yapay zeka hakkında güncel blog yazıları.",
};

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  category: string;
  publishedAt: string;
  featured: boolean;
}

async function getBlogPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    category,
    publishedAt,
    featured
  }`;
  
  try {
    const posts = await client.fetch(query, {}, { next: { revalidate: 60 } });
    return posts || [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export default async function BlogPage() {
  const allPosts = await getBlogPosts();
  const featuredPost = allPosts.find(p => p.featured) || allPosts[0];
  const otherPosts = allPosts.filter(p => p._id !== featuredPost?._id);

  if (allPosts.length === 0) {
    return (
      <main className="pt-20 min-h-screen">
        <section className="py-20">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h1 className="text-4xl font-bold text-white mb-6">Blog</h1>
            <p className="text-xl text-gray-400 mb-8">
              Henüz blog yazısı yok. Sanity Studio'dan ilk yazınızı ekleyin!
            </p>
            <Link
              href="/studio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition"
            >
              Studio'ya Git
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            SEO, UI/UX tasarım, dijital pazarlama ve yapay zeka hakkında güncel içerikler.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-gray-900">
          <div className="container mx-auto px-4 max-w-6xl">
            <Link href={`/blog/${featuredPost.slug.current}`} className="group block">
              <div className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Left - Placeholder */}
                  <div className="relative overflow-hidden md:h-full min-h-[280px] bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center">
                    <div className="text-white/20 text-6xl font-bold">
                      {featuredPost.title.charAt(0)}
                    </div>
                  </div>
                  
                  {/* Right - Content */}
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm font-medium">
                        Öne Çıkan
                      </span>
                      <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors line-clamp-2">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-300 text-sm md:text-base mb-4 line-clamp-2">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.publishedAt).toLocaleDateString('tr-TR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center gap-2 text-indigo-400 font-medium">
                      Devamını Oku
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      {otherPosts.length > 0 && (
        <section className="py-12 bg-gray-900">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPosts.map((post) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug.current}`}
                  className="group bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all"
                >
                  {/* Placeholder */}
                  <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center">
                    <div className="text-white/20 text-5xl font-bold">
                      {post.title.charAt(0)}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-2.5 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        {new Date(post.publishedAt).toLocaleDateString('tr-TR', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                      <span className="text-indigo-400 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                        Oku
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
