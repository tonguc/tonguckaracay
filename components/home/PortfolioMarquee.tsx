import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { portfolio, marqueeIds, portfolioKindLabel } from "@/lib/portfolio";
import { casesPath, type Locale } from "@/lib/cases";

/**
 * Ana sayfa — Behance portfolyosundan seçilmiş kapakların sürekli akan şeridi.
 * Masaüstünde ~5, mobilde ~2 kart görünür. Üzerine gelince durur;
 * prefers-reduced-motion'da animasyon kapanır, şerit elle kaydırılabilir.
 * Döngü için liste iki kez render edilir (ikinci kopya ekran okuyuculardan gizli).
 */
export default function PortfolioMarquee({ locale }: { locale: string }) {
  const loc = (locale === "tr" ? "tr" : "en") as Locale;
  const isTr = loc === "tr";
  const items = marqueeIds
    .map((id) => portfolio.find((p) => p.id === id))
    .filter((p): p is (typeof portfolio)[number] => Boolean(p));

  const card = (p: (typeof items)[number], hidden: boolean) => (
    <li key={`${hidden ? "b" : "a"}-${p.id}`} className="w-[200px] shrink-0 sm:w-[240px] lg:w-[260px]" aria-hidden={hidden || undefined}>
      <a
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={hidden ? -1 : undefined}
        className="group block overflow-hidden rounded-xl border border-surface-border/60 bg-surface-card/40 transition-colors hover:border-accent-500/40"
      >
        <div className="relative aspect-[404/316] overflow-hidden bg-surface-darker">
          <Image
            src={`/portfolio/${p.id}.webp`}
            alt={hidden ? "" : p.title[loc]}
            fill
            sizes="260px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="px-3 py-2.5">
          <p className="truncate text-sm font-semibold text-white group-hover:text-accent-300">{p.title[loc]}</p>
          <p className="text-[11px] text-primary-400">{portfolioKindLabel[p.kind][loc]}</p>
        </div>
      </a>
    </li>
  );

  return (
    <div className="mt-10 md:mt-14">
      <div className="container-custom mb-4 flex items-end justify-between gap-4">
        <p className="text-sm text-primary-300">
          {isTr ? "500+ projeden seçili çalışmalar" : "Selected work from 500+ projects"}
        </p>
        <Link
          href={`${casesPath(loc)}#portfolio-title`}
          className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-accent-400 hover:text-accent-300"
        >
          {isTr ? "Tümünü Gör" : "View All"}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="group/marquee relative overflow-hidden motion-reduce:overflow-x-auto">
        {/* Kenar solması */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-surface-darker to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-surface-darker to-transparent md:w-24" />
        <ul className="flex w-max gap-4 animate-marquee group-hover/marquee:[animation-play-state:paused] motion-reduce:animate-none">
          {items.map((p) => card(p, false))}
          {items.map((p) => card(p, true))}
        </ul>
      </div>
    </div>
  );
}
