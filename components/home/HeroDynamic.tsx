import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Clock, Sparkles } from "lucide-react";
import { getAllPosts } from "@/lib/blog-utils";

interface Props {
  locale: string;
}

/**
 * Bölüm 1 — Dinamik Hero.
 * Sol: otomatik güncellenen "Latest Insight" kartı (en yeni blog yazısı).
 * Sağ: sabit kişisel tanıtım bloğu + istatistikler + birincil/ikincil CTA.
 */
export default function HeroDynamic({ locale }: Props) {
  const isTr = locale === "tr";
  const latest = getAllPosts(isTr ? "tr" : "en")[0];
  const postPath = latest ? (isTr ? `/${latest.slug}` : `/en/${latest.slug}`) : null;
  const contactPath = isTr ? "/iletisim" : "/en/contact";
  const casesPath = "#case-studies";

  const stats = [
    { value: "25+", label: isTr ? "Yıl Deneyim" : "Years Experience" },
    { value: "500+", label: isTr ? "Proje" : "Projects" },
    { value: "100+", label: isTr ? "Marka" : "Brands" },
    { value: "12+", label: isTr ? "Ülke" : "Countries" },
  ];

  return (
    <section className="relative overflow-hidden pt-28 pb-14 md:pt-36 md:pb-24">
      {/* Arka plan gradient blob'ları */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/4 h-72 w-72 md:h-96 md:w-96 rounded-full bg-accent-500/10 blur-3xl animate-pulse" style={{ animationDuration: "5s" }} />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 md:h-96 md:w-96 rounded-full bg-indigo-500/10 blur-3xl animate-pulse" style={{ animationDuration: "6s", animationDelay: "1s" }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid items-stretch gap-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          {/* SOL — Dinamik öne çıkan yazı */}
          <div className="order-2 lg:order-1">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/10 px-4 py-1.5">
              <Sparkles className="h-4 w-4 text-accent-500" />
              <span className="text-xs font-semibold uppercase tracking-widest text-accent-400">
                {isTr ? "Son İçgörü" : "Latest Insight"}
              </span>
            </div>

            {latest ? (
              <Link
                href={postPath!}
                className="card group flex h-[calc(100%-3.25rem)] flex-col overflow-hidden"
              >
                <div className="relative h-48 w-full overflow-hidden sm:h-56 md:h-64">
                  {latest.image && (
                    <Image
                      src={latest.image}
                      alt={latest.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-darker/90 via-surface-darker/20 to-transparent" />
                  {latest.category && (
                    <span className="absolute left-4 top-4 rounded-full bg-surface-darker/70 px-3 py-1 text-xs font-medium text-accent-300 backdrop-blur-sm">
                      {latest.category}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5 md:p-7">
                  <h2 className="font-display text-xl font-bold leading-snug text-white transition-colors group-hover:text-accent-400 md:text-2xl">
                    {latest.title}
                  </h2>
                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-primary-300 md:text-base">
                    {latest.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs text-primary-400 md:text-sm">
                      <Clock className="h-4 w-4" />
                      {latest.readTime || (isTr ? "5 dk okuma" : "5 min read")}
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-accent-400">
                      {isTr ? "Yazıyı Oku" : "Read Article"}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="card p-8 text-primary-400">
                {isTr ? "Yakında yeni içerikler." : "New content coming soon."}
              </div>
            )}
          </div>

          {/* SAĞ — Sabit kişisel tanıtım */}
          <div className="order-1 flex flex-col justify-center lg:order-2">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl ring-2 ring-accent-500/30 md:h-20 md:w-20">
                <Image src="/tonguc-karacay.jpg" alt="Tonguç Karaçay" fill sizes="80px" className="object-cover" />
              </div>
              <div>
                <h1 className="font-display text-2xl font-bold text-white md:text-3xl">Tonguç Karaçay</h1>
                <p className="mt-1 font-medium text-accent-400">
                  {isTr ? "UX • SEO • AI Büyüme Danışmanı" : "UX • SEO • AI Growth Consultant"}
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-300 md:text-lg">
              {isTr
                ? "İşletmeleri UX optimizasyonu, SEO stratejisi, dijital pazarlama ve yapay zeka destekli sistemlerle büyütüyorum."
                : "Helping businesses grow through UX optimization, SEO strategy, digital marketing and AI-powered systems."}
            </p>

            {/* İstatistikler */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-surface-border/50 bg-surface-card/40 px-3 py-4 text-center backdrop-blur-sm">
                  <div className="font-display text-2xl font-bold text-accent-500 md:text-3xl">{s.value}</div>
                  <div className="mt-1 text-[11px] leading-tight text-primary-400 md:text-xs">{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTA'lar */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={contactPath} className="btn-primary group text-base md:text-lg">
                {isTr ? "Ücretsiz Görüşme Al" : "Book Free Consultation"}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href={casesPath} className="btn-secondary group text-base md:text-lg">
                {isTr ? "Vaka Çalışmaları" : "View Case Studies"}
                <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
