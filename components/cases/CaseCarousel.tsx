"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { CaseStudy, Locale } from "@/lib/cases";
import CaseCard from "./CaseCard";

interface Props {
  items: CaseStudy[];
  locale: Locale;
  variant?: "compact" | "full";
  /** Geniş ekranda aynı anda görünen kart sayısı (tablet 2, mobil 1). */
  maxPerView?: 2 | 3;
  interval?: number;
}

/**
 * Vaka carousel'ı — projeler kendiliğinden birer birer kayar.
 * Üzerine gelince / odakta durur; prefers-reduced-motion'da otomatik kaymaz.
 */
export default function CaseCarousel({ items, locale, variant = "full", maxPerView = 3, interval = 5000 }: Props) {
  const isTr = locale === "tr";
  const [perView, setPerView] = useState(1);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const md = window.matchMedia("(min-width: 768px)");
    const xl = window.matchMedia("(min-width: 1280px)");
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setPerView(xl.matches ? maxPerView : md.matches ? 2 : 1);
      setReduced(rm.matches);
    };
    update();
    [md, xl, rm].forEach((m) => m.addEventListener("change", update));
    return () => [md, xl, rm].forEach((m) => m.removeEventListener("change", update));
  }, [maxPerView]);

  const positions = Math.max(1, items.length - perView + 1);
  const current = Math.min(index, positions - 1);
  const go = (i: number) => setIndex(((i % positions) + positions) % positions);

  useEffect(() => {
    if (paused || reduced || positions < 2) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % positions), interval);
    return () => clearInterval(t);
  }, [paused, reduced, positions, interval]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <div className="overflow-hidden">
        <ul
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${(current * 100) / perView}%)` }}
        >
          {items.map((c, i) => (
            <li
              key={c.slug}
              className="shrink-0 px-2 md:px-3"
              style={{ width: `${100 / perView}%` }}
              aria-hidden={i < current || i >= current + perView}
            >
              <CaseCard item={c} locale={locale} variant={variant} />
            </li>
          ))}
        </ul>
      </div>

      {positions > 1 && (
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(current - 1)}
            aria-label={isTr ? "Önceki proje" : "Previous project"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-border text-primary-300 transition-colors hover:border-accent-500/60 hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-1.5">
            {Array.from({ length: positions }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                aria-label={`${i + 1} / ${positions}`}
                aria-current={i === current}
                className={`h-2 rounded-full transition-all ${i === current ? "w-6 bg-accent-400" : "w-2 bg-surface-border hover:bg-primary-400"}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(current + 1)}
            aria-label={isTr ? "Sonraki proje" : "Next project"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-border text-primary-300 transition-colors hover:border-accent-500/60 hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}
