import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface Props {
  locale: string;
}

/**
 * Bölüm 1 — Hero.
 * Tek odak: değer önermesi + CTA. "Son İçgörü" kartı buradan çıkarıldı
 * (Insights bölümünde zaten en yeni yazı olarak görünüyor) — hero artık
 * tek bir mesaja odaklanıyor, farklı öğelerin (yazı önizleme + değer
 * önermesi + istatistik) yan yana yarıştığı parçalı görünüm kalkıyor.
 */
export default function HeroDynamic({ locale }: Props) {
  const isTr = locale === "tr";
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

          {/* İstatistikler — tek bar, bölücülerle ayrılmış */}
          <div className="mt-10 flex h-[100px] w-full items-stretch divide-x divide-surface-border/50 rounded-xl border border-surface-border/50 bg-surface-card/40 backdrop-blur-sm">
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
