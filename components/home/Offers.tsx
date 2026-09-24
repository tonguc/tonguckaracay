import Link from "next/link";
import { ArrowRight, Search, MousePointerClick, Cpu } from "lucide-react";
import { offers } from "@/lib/offers";
import type { Locale } from "@/lib/cases";

/**
 * 3 ana teklif kartı. Her kart: tek cümle değer + "Detay →".
 * Diğer hizmetler (reklam, sosyal medya, GEO) alt linkte.
 */
export default function Offers({ locale }: { locale: string }) {
  const loc = (locale === "tr" ? "tr" : "en") as Locale;
  const isTr = loc === "tr";
  const icons = { "seo-geo": Search, "ux-conversion": MousePointerClick, "ai-growth": Cpu };
  const tones = {
    "seo-geo": "bg-accent-500/10 text-accent-400 ring-accent-500/20",
    "ux-conversion": "bg-sky-500/10 text-sky-400 ring-sky-500/20",
    "ai-growth": "bg-violet-500/10 text-violet-400 ring-violet-500/20",
  };
  const other = isTr
    ? [
        { name: "GEO Optimizasyonu", href: "/hizmetler/geo-optimizasyonu" },
        { name: "Online Reklamcılık", href: "/hizmetler/online-reklamcilik" },
        { name: "Sosyal Medya Yönetimi", href: "/hizmetler/sosyal-medya-yonetimi" },
      ]
    : [
        { name: "GEO Optimization", href: "/en/services/geo-optimization" },
        { name: "Online Advertising", href: "/en/services/online-advertising" },
        { name: "Social Media Management", href: "/en/services/social-media-management" },
      ];

  return (
    <section id="services" className="py-12 md:py-20">
      <div className="container-custom">
        <div className="mb-8 text-center md:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400 md:text-sm">
            {isTr ? "Hizmetler" : "Services"}
          </p>
          <h2 className="section-title mx-auto">
            {isTr ? "Nerede " : "Where "}
            <span className="text-gradient">{isTr ? "Takıldınız?" : "Are You Stuck?"}</span>
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {offers.map((o) => {
            const Icon = icons[o.key];
            return (
              <Link
                key={o.key}
                href={o.href[loc]}
                className="card group flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 md:p-7"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ring-1 ${tones[o.key]}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-white">{o.name[loc]}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-primary-300">{o.value[loc]}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-400 transition-all group-hover:gap-2.5">
                  {isTr ? "Detay" : "Details"}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>

        <p className="mt-6 text-center text-sm text-primary-400">
          {isTr ? "Ayrıca: " : "Also: "}
          {other.map((s, i) => (
            <span key={s.href}>
              <Link href={s.href} className="text-primary-300 underline-offset-4 hover:text-accent-400 hover:underline">
                {s.name}
              </Link>
              {i < other.length - 1 && " · "}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
