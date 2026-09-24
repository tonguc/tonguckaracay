"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { portfolio, portfolioKindLabel, type PortfolioKind } from "@/lib/portfolio";

type Locale = "tr" | "en";
type Filter = "all" | PortfolioKind;

/**
 * Behance portfolyosunun tamamı — tür filtresi + 2/3/4 sütunlu grid.
 * Kartlar Behance'teki proje sayfasına yeni sekmede gider.
 */
export default function PortfolioGrid({ locale }: { locale: Locale }) {
  const isTr = locale === "tr";
  const [filter, setFilter] = useState<Filter>("all");

  const kinds = (Object.keys(portfolioKindLabel) as PortfolioKind[]).filter((k) =>
    portfolio.some((p) => p.kind === k)
  );
  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: isTr ? "Tümü" : "All" },
    ...kinds.map((k) => ({
      key: k as Filter,
      label: portfolioKindLabel[k][locale],
    })),
  ];
  const items = filter === "all" ? portfolio : portfolio.filter((p) => p.kind === filter);

  return (
    <section className="mt-16 md:mt-24" aria-labelledby="portfolio-title">
      <div className="mb-8 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400 md:text-sm">Behance</p>
        <h2 id="portfolio-title" className="section-title mx-auto">
          {isTr ? "Seçili " : "Selected "}
          <span className="text-gradient">{isTr ? "Çalışmalar" : "Work"}</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-primary-300">
          {isTr
            ? "25 yılda teslim ettiğim 500+ projeden bir seçki: medya, otomotiv, fintech ve kamu. Her kart Behance'teki proje sayfasını açar."
            : "A selection from 500+ projects delivered over 25 years: media, automotive, fintech and public sector. Each card opens the project on Behance."}
        </p>
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-2" role="group" aria-label={isTr ? "Proje türü" : "Project type"}>
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            aria-pressed={filter === f.key}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              filter === f.key
                ? "border-accent-500 bg-accent-500 text-primary-950"
                : "border-surface-border text-primary-300 hover:border-accent-500/50 hover:text-white"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
        {items.map((p) => (
          <li key={p.id}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-xl border border-surface-border/60 bg-surface-card/40 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-500/40"
            >
              <div className="relative aspect-[404/316] overflow-hidden bg-surface-darker">
                <Image
                  src={`/portfolio/${p.id}.webp`}
                  alt={p.title[locale]}
                  fill
                  sizes="(min-width: 1024px) 300px, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-start justify-between gap-2 p-3">
                <div className="min-w-0">
                  <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-white group-hover:text-accent-300 sm:truncate">{p.title[locale]}</h3>
                  <p className="mt-0.5 text-[11px] text-primary-400">{portfolioKindLabel[p.kind][locale]}</p>
                </div>
                <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-primary-500 transition-colors group-hover:text-accent-400" />
              </div>
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-center">
        <a
          href="https://www.behance.net/tonguc"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-accent-400 hover:text-accent-300"
        >
          {isTr ? "Behance profilime göz atın" : "Visit my Behance profile"}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </p>
    </section>
  );
}
