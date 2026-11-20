import Link from "next/link";
import Image from "next/image";
import { portfolio, marqueeIds, portfolioKindLabel } from "@/lib/portfolio";
import { casesPath, type Locale } from "@/lib/cases";

/**
 * Ana sayfa — Behance portfolyosundan seçilmiş kapakların sürekli akan şeridi (2026-11).
 * Kendi koyu gri bandında, hero'nun hemen altında; kartlar büyük (masaüstü ~4, mobil ~1.5 görünür).
 * Üzerine gelince durur; prefers-reduced-motion'da animasyon kapanır, şerit elle kaydırılabilir.
 * Döngü için liste iki kez render edilir (ikinci kopya ekran okuyuculardan gizli).
 */
export default function PortfolioMarquee({ locale }: { locale: string }) {
  const loc = (locale === "tr" ? "tr" : "en") as Locale;
  const isTr = loc === "tr";
  const items = marqueeIds
    .map((id) => portfolio.find((p) => p.id === id))
    .filter((p): p is (typeof portfolio)[number] => Boolean(p));

  const card = (p: (typeof items)[number], hidden: boolean) => (
    <li key={`${hidden ? "b" : "a"}-${p.id}`} className="w-[250px] shrink-0 sm:w-[300px] lg:w-[340px]" aria-hidden={hidden || undefined}>
      <a href={p.url} target="_blank" rel="noopener noreferrer" tabIndex={hidden ? -1 : undefined} className="group block">
        <div className="relative aspect-[640/501] overflow-hidden rounded bg-surface-darker">
          <Image
            src={`/portfolio/${p.id}.webp`}
            alt={hidden ? "" : p.title[loc]}
            fill
            sizes="340px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <p className="mt-3 truncate text-[15px] font-medium text-white">{p.title[loc]}</p>
        <p className="text-[13px] text-primary-400">{portfolioKindLabel[p.kind][loc]}</p>
      </a>
    </li>
  );

  return (
    <section id="projeler" className="scroll-mt-20 bg-surface-dark py-20 md:py-28">
      <div className="container-custom mb-9 flex flex-wrap items-end justify-between gap-4">
        <h2 className="section-title mb-0">{isTr ? "200+ projeden seçkiler" : "Selected from 200+ projects"}</h2>
        <Link
          href={`${casesPath(loc)}#portfolio-title`}
          className="border-b border-primary-600 pb-0.5 font-medium text-white transition-colors hover:border-accent-400"
        >
          {isTr ? "Tüm projeler" : "All projects"}
        </Link>
      </div>

      <div className="group/marquee overflow-hidden motion-reduce:overflow-x-auto">
        <ul className="flex w-max gap-5 pl-4 animate-marquee group-hover/marquee:[animation-play-state:paused] motion-reduce:animate-none sm:pl-6 lg:pl-8">
          {items.map((p) => card(p, false))}
          {items.map((p) => card(p, true))}
        </ul>
      </div>
    </section>
  );
}
