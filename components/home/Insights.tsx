import Link from "next/link";
import { getAllPosts } from "@/lib/blog-utils";

interface Props {
  locale: string;
}

/**
 * Insights (2026-11) — kartsız, satır listesi: başlık · kategori/tarih · okuma süresi.
 */
export default function Insights({ locale }: Props) {
  const isTr = locale === "tr";
  // Hero artık yazı sabitlemiyor → filtresiz en yeni 3 yazı (yeni yazı hemen görünür).
  const posts = getAllPosts(isTr ? "tr" : "en").slice(0, 3);
  const blogPath = isTr ? "/blog" : "/en/blog";

  if (posts.length === 0) return null;

  return (
    <section className="py-20 md:py-28">
      <div className="container-custom">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <h2 className="section-title mb-0">{isTr ? "Son yazılar" : "Latest writing"}</h2>
          <Link href={blogPath} className="border-b border-primary-600 pb-0.5 font-medium text-white transition-colors hover:border-accent-400">
            {isTr ? "Tüm yazılar" : "All articles"}
          </Link>
        </div>
        <ul className="border-t border-primary-100">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-surface-border">
              <Link
                href={isTr ? `/${post.slug}` : `/en/${post.slug}`}
                className="group grid gap-1.5 py-6 md:grid-cols-[1fr_200px_70px] md:items-baseline md:gap-8"
              >
                <span className="text-lg font-medium leading-snug text-white transition-colors group-hover:text-accent-300 md:text-xl">
                  {post.title}
                </span>
                <span className="text-sm text-primary-400">
                  {post.category ? `${post.category} · ` : ""}
                  {new Date(post.date).toLocaleDateString(isTr ? "tr-TR" : "en-US", { day: "numeric", month: "short", year: "numeric" })}
                </span>
                <span className="text-sm text-primary-400">{post.readTime}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
