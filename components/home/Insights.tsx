import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { getAllPosts } from "@/lib/blog-utils";

interface Props {
  locale: string;
}

/**
 * Bölüm 7 — Insights & Articles. Otorite bölümlerinden SONRA, en yeni 6 yazı grid'i.
 */
export default function Insights({ locale }: Props) {
  const isTr = locale === "tr";
  const posts = getAllPosts(isTr ? "tr" : "en").slice(0, 6);
  const blogPath = isTr ? "/blog" : "/en/blog";

  if (posts.length === 0) return null;

  return (
    <section className="py-14 md:py-24">
      <div className="container-custom">
        <div className="mb-8 flex items-end justify-between md:mb-12">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400 md:text-sm">
              {isTr ? "Blog" : "Insights"}
            </p>
            <h2 className="section-title">
              {isTr ? "Son " : "Latest "}
              <span className="text-gradient">{isTr ? "İçgörüler" : "Insights"}</span>
            </h2>
          </div>
          <Link
            href={blogPath}
            className="hidden items-center gap-2 font-semibold text-accent-400 transition-colors hover:text-accent-300 md:flex"
          >
            {isTr ? "Tümünü Gör" : "View All"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 md:gap-7 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={isTr ? `/${post.slug}` : `/en/${post.slug}`}
              className="card group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-44 overflow-hidden md:h-48">
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                {post.category && (
                  <span className="absolute left-3 top-3 rounded-full bg-surface-darker/80 px-3 py-1.5 text-[13px] font-semibold leading-none text-accent-200 backdrop-blur-sm">
                    {post.category}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <div className="mb-3 flex items-center gap-4 text-xs text-primary-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(post.date).toLocaleDateString(isTr ? "tr-TR" : "en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="line-clamp-2 font-semibold text-white transition-colors group-hover:text-accent-400 md:text-lg">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-2 flex-1 text-sm text-primary-400">{post.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-400">
                  {isTr ? "Devamını Oku" : "Read More"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href={blogPath} className="btn-secondary">
            {isTr ? "Tümünü Gör" : "View All"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
