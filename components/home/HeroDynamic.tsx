import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import { getAllPosts } from "@/lib/blog-utils";

interface Props {
  locale: string;
}

/**
 * Bölüm 1 — Hero.
 * Tek akış, tek odak sırası: rozet → H1 (değer önermesi) → alt başlık → CTA →
 * son yazı (küçük, yatay, şık şerit — H1 ile yarışmaz) → istatistik bar → profil.
 * Önceki sürümde yazı önizlemesi + değer önermesi + istatistik yan yana yarışıyordu;
 * şimdi hepsi tek dikey akışta, boyut hiyerarşisiyle sıralı.
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
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {/* Müsaitlik rozeti — site canlı/aktif hissi */}
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-medium text-emerald-300">
              {isTr ? "Yeni danışmanlık projelerine açık" : "Available for consulting"}
            </span>
          </div>

          {/* H1 — değer önermesi */}
          <h1 className="font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl">
            {isTr ? (
              <>
                UX, SEO ve Yapay Zeka ile <span className="text-gradient">Ölçülebilir Büyüme</span>
              </>
            ) : (
              <>
                <span className="text-gradient">Measurable Growth</span> with UX, SEO &amp; AI
              </>
            )}
          </h1>

          {/* Alt başlık */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-300 md:text-lg">
            {isTr
              ? "25+ yıldır işletmelerin trafiğini, dönüşümlerini ve müşteri deneyimini birlikte büyütüyorum."
              : "Helping businesses improve traffic, conversions and customer experience for 25+ years."}
          </p>

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

          {/* Son yazı — küçük, yatay şerit; H1'in altında ikincil öğe olarak */}
          {latest && (
            <Link
              href={postPath!}
              className="card group mt-10 flex w-full items-center gap-4 p-3 text-left transition-all duration-300 hover:-translate-y-0.5 md:p-4"
            >
              {latest.image && (
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg md:h-20 md:w-20">
                  <Image
                    src={latest.image}
                    alt={latest.title}
                    fill
                    sizes="80px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="min-w-0 flex-1">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-accent-400">
                  {isTr ? "Son Yazı" : "Latest Article"}
                </span>
                <h2 className="mt-1 truncate font-display text-sm font-semibold text-white transition-colors group-hover:text-accent-400 md:text-base">
                  {latest.title}
                </h2>
                <span className="mt-1 inline-flex items-center gap-1.5 text-xs text-primary-400">
                  <Clock className="h-3.5 w-3.5" />
                  {latest.readTime || (isTr ? "5 dk okuma" : "5 min read")}
                </span>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-primary-400 transition-transform group-hover:translate-x-1 group-hover:text-accent-400" />
            </Link>
          )}

          {/* İstatistikler — tek bar, bölücülerle ayrılmış */}
          <div className="mt-6 flex h-[100px] w-full items-stretch divide-x divide-surface-border/50 rounded-xl border border-surface-border/50 bg-surface-card/40 backdrop-blur-sm">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-1 flex-col items-center justify-center px-2 text-center">
                <div className="text-gradient font-display text-2xl font-bold md:text-3xl">{s.value}</div>
                <div className="mt-1 text-[11px] leading-tight text-primary-400 md:text-xs">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Altta küçük profil fotoğrafı + isim */}
          <div className="mt-8 flex items-center gap-3 border-t border-surface-border/40 pt-6">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[radial-gradient(circle_at_50%_30%,rgba(219,116,32,0.20),transparent_70%)] ring-1 ring-accent-500/30">
              <Image
                src="/tonguckaracay-ux-seo-ai.png"
                alt="Tonguç Karaçay"
                fill
                sizes="56px"
                className="object-cover"
                style={{ transform: "scale(1.7)", transformOrigin: "50% 14%" }}
              />
            </div>
            <div className="text-left">
              <div className="font-semibold text-white">Tonguç Karaçay</div>
              <div className="text-sm text-primary-400">
                {isTr ? "UX • SEO • AI Büyüme Danışmanı" : "UX • SEO • AI Growth Consultant"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
