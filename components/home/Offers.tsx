import Link from "next/link";
import { ArrowRight, Search, MousePointerClick, Cpu, Share2, Megaphone, GraduationCap } from "lucide-react";
import { offers } from "@/lib/offers";
import type { Locale, OfferKey } from "@/lib/cases";

/**
 * Hizmetler — AI Otomasyon üstte tam genişlik (öne çıkan), diğer 4 hizmet altta eşit kutular
 * (masaüstü 4 / tablet 2×2 / mobil alt alta).
 */
const icons: Record<OfferKey, typeof Search> = {
  "seo-geo": Search,
  "ux-conversion": MousePointerClick,
  "ai-growth": Cpu,
  social: Share2,
  "ai-ads": Megaphone,
};
const tones: Record<OfferKey, string> = {
  "seo-geo": "bg-accent-500/10 text-accent-400 ring-accent-500/20",
  "ux-conversion": "bg-sky-500/10 text-sky-400 ring-sky-500/20",
  "ai-growth": "bg-violet-500/15 text-violet-300 ring-violet-400/30",
  social: "bg-pink-500/10 text-pink-400 ring-pink-500/20",
  "ai-ads": "bg-emerald-500/10 text-emerald-400 ring-emerald-500/20",
};

export default function Offers({ locale }: { locale: string }) {
  const loc = (locale === "tr" ? "tr" : "en") as Locale;
  const isTr = loc === "tr";
  const featured = offers.find((o) => o.featured);
  const rest = offers.filter((o) => !o.featured);
  const geoHref = isTr ? "/hizmetler/geo-optimizasyonu" : "/en/services/geo-optimization";
  const trainingHref = isTr ? "/ai-egitimi" : "/en/ai-training";

  return (
    <section id="services" className="py-12 md:py-20">
      <div className="container-custom">
        <div className="mb-8 text-center md:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400 md:text-sm">
            {isTr ? "Hizmetler" : "Services"}
          </p>
          <h2 className="section-title mx-auto">
            {isTr ? "Hangi Alanda " : "Where Do You "}
            <span className="text-gradient">{isTr ? "Büyümek İstiyorsunuz?" : "Want to Grow?"}</span>
          </h2>
        </div>

        {featured && (
          <div className="card relative mb-4 overflow-hidden border-violet-400/25 p-6 md:mb-6 md:p-8">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/15 blur-3xl" />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ring-1 ${tones[featured.key]}`}>
                    <Cpu className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-violet-400/30 bg-violet-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-violet-200">
                    {isTr ? "Öne Çıkan" : "Featured"}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold text-white md:text-3xl">{featured.name[loc]}</h3>
                <p className="mt-2 leading-relaxed text-primary-300 md:text-lg">{featured.value[loc]}</p>
                {featured.highlights && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {featured.highlights[loc].map((h) => (
                      <li key={h} className="rounded-full border border-surface-border bg-surface-darker/60 px-3 py-1 text-xs text-primary-200 md:text-sm">
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
                <Link href={featured.href[loc]} className="btn-primary group">
                  {isTr ? "AI Otomasyon Detayı" : "AI Automation Details"}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href={trainingHref} className="btn-secondary group">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  {isTr ? "Ekibiniz için AI Eğitimi" : "AI Training for Your Team"}
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {rest.map((o) => {
            const Icon = icons[o.key];
            return (
              <div key={o.key} className="card group relative flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ring-1 ${tones[o.key]}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">
                  <Link href={o.href[loc]} className="after:absolute after:inset-0">
                    {o.name[loc]}
                  </Link>
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-primary-300">{o.value[loc]}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-400 transition-all group-hover:gap-2.5">
                    {isTr ? "Detay" : "Details"}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  {o.key === "seo-geo" && (
                    <Link href={geoHref} className="relative z-10 text-xs text-primary-400 underline-offset-4 hover:text-accent-400 hover:underline">
                      {isTr ? "GEO detayı" : "GEO details"}
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
