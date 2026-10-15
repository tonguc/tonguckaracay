import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3, BookOpen } from "lucide-react";
import { getAllPosts } from "@/lib/blog-utils";
import StatCounter from "./StatCounter";

interface Props {
  locale: string;
}

/**
 * Geçici portfolyo/yayın modu: ticari teklif yerine en yeni blog yazısını öne çıkarır.
 * getAllPosts tarih sırasına göre gelir; yeni yazı yayımlandığında hero da güncellenir.
 */
export default function ValueProposition({ locale }: Props) {
  const isTr = locale === "tr";
  const latest = getAllPosts(isTr ? "tr" : "en")[0];
  const blogPath = isTr ? "/blog" : "/en/blog";
  const articlePath = latest ? (isTr ? "/" : "/en/") + latest.slug : blogPath;

  const stats = [
    { to: 25, short: isTr ? "Yıl" : "Years", label: isTr ? "Yıl Deneyim" : "Years of Experience" },
    { to: 500, short: isTr ? "Proje" : "Projects", label: isTr ? "Proje" : "Projects" },
    { to: 100, short: isTr ? "Marka" : "Brands", label: isTr ? "Marka" : "Brands" },
    { to: 12, short: isTr ? "Ülke" : "Countries", label: isTr ? "Ülke" : "Countries" },
  ];

  return (
    <section className="relative overflow-hidden pt-24 pb-8 md:pt-36 md:pb-12">
      <div className="container-custom relative z-10">
        <div className="card relative overflow-hidden p-6 md:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent-400 md:text-sm">
                {isTr ? "UX, SEO ve Yapay Zeka Üzerine" : "UX, SEO & Artificial Intelligence"}
              </p>
              {latest ? (
                <>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-primary-400">
                    <span className="inline-flex items-center gap-1.5 font-semibold text-accent-300">
                      <BookOpen className="h-4 w-4" />
                      {isTr ? "En Son Blog Yazısı" : "Latest Blog Article"}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {new Date(latest.date).toLocaleDateString(isTr ? "tr-TR" : "en-US", {
                        day: "numeric", month: "long", year: "numeric",
                      })}
                    </span>
                    {latest.readTime && (
                      <span className="inline-flex items-center gap-1">
                        <Clock3 className="h-3.5 w-3.5" />
                        {latest.readTime}
                      </span>
                    )}
                  </div>
                  <h1 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                    <Link href={articlePath} className="transition-colors hover:text-accent-300">
                      {latest.title}
                    </Link>
                  </h1>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-300 md:text-base">
                    {latest.description}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Link href={articlePath} className="btn-primary group">
                      {isTr ? "Yazıyı Oku" : "Read Article"}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link href={blogPath} className="btn-secondary">
                      {isTr ? "Tüm Yazılar" : "All Articles"}
                    </Link>
                  </div>
                </>
              ) : (
                <h1 className="max-w-2xl font-display text-3xl font-bold text-white">
                  {isTr ? "UX, SEO ve Yapay Zeka Üzerine" : "UX, SEO & AI"}
                </h1>
              )}
            </div>
            <div className="relative min-h-[230px] overflow-hidden rounded-2xl border border-surface-border/60 bg-surface-darker/60 sm:min-h-[340px] lg:min-h-[420px]">
              {latest?.image ? (
                <Link href={articlePath} className="group absolute inset-0" aria-label={latest.title}>
                  <Image
                    src={latest.image}
                    alt={latest.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-darker/70 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-surface-darker/80 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                    {latest.category}
                  </span>
                </Link>
              ) : (
                <div className="flex h-full min-h-[230px] items-center justify-center text-accent-400">
                  <BookOpen className="h-16 w-16" />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-4 gap-1.5 sm:gap-2.5 md:mt-6 md:gap-4">
          {stats.map((st) => (
            <div key={st.label} className="relative overflow-hidden rounded-xl border border-surface-border/60 bg-surface-card/50 px-1 py-3 text-center sm:rounded-2xl sm:px-4 md:p-5">
              <p className="text-gradient font-display text-xl font-extrabold leading-none sm:text-3xl md:text-4xl">
                <StatCounter to={st.to} suffix="+" />
              </p>
              <p className="mt-2 text-[10px] font-semibold leading-tight text-white sm:text-xs md:text-base">
                {st.short}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
