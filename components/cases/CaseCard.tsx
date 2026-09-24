import CaseSlider from "./CaseSlider";
import { ArrowUpRight, Quote } from "lucide-react";
import type { CaseStudy, Locale } from "@/lib/cases";

interface Props {
  item: CaseStudy;
  locale: Locale;
  /** compact = ana sayfa mini vaka; full = /vaka-calismalari */
  variant?: "compact" | "full";
  /** Slayt başlangıç gecikmesi — kartlar aynı anda değişmesin */
  index?: number;
}

/**
 * Vaka şablonu: Hedef → Müdahale → Sonuç → Müşteri yorumu.
 * Sonuç ve yorum sadece gerçek veri varsa render edilir (lib/cases.ts kuralı).
 */
export default function CaseCard({ item, locale, variant = "full", index = 0 }: Props) {
  const isTr = locale === "tr";
  const compact = variant === "compact";
  const steps = compact ? item.intervention[locale].slice(0, 2) : item.intervention[locale];

  return (
    <article className="card flex h-full flex-col overflow-hidden">
      <CaseSlider
        images={item.gallery && item.gallery.length > 0 ? item.gallery : [item.image]}
        alt={`${item.title[locale]} — ${item.client}`}
        offset={index * 700}
      />

      <div className="flex flex-1 flex-col p-5 md:p-7">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
          <span className="font-semibold uppercase tracking-[0.15em] text-accent-400">{item.client}</span>
          <span className="text-primary-500">{item.sector[locale]}</span>
        </div>
        <h3 className="mt-2 font-display text-xl font-bold text-white md:text-2xl">{item.title[locale]}</h3>

        <dl className="mt-5 space-y-4 text-sm">
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-widest text-primary-400">
              {isTr ? "Hedef" : "Goal"}
            </dt>
            <dd className="mt-1 leading-relaxed text-primary-200">{item.goal[locale]}</dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-widest text-primary-400">
              {isTr ? "Müdahale" : "What I did"}
            </dt>
            <dd className="mt-1">
              <ul className="space-y-1.5">
                {steps.map((s) => (
                  <li key={s} className="flex gap-2 leading-relaxed text-primary-300">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                    {s}
                  </li>
                ))}
              </ul>
            </dd>
          </div>

          {item.results && item.results.length > 0 && (
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-widest text-primary-400">
                {isTr ? "Sonuç" : "Result"}
              </dt>
              <dd className="mt-2 flex flex-wrap gap-5">
                {item.results.map((r) => (
                  <div key={r.label[locale]}>
                    <div className="text-gradient font-display text-2xl font-bold">{r.value}</div>
                    <div className="text-xs text-primary-400">{r.label[locale]}</div>
                  </div>
                ))}
              </dd>
            </div>
          )}
        </dl>

        {!compact && item.testimonial && (
          <figure className="mt-5 rounded-xl border border-surface-border/60 bg-surface-darker/60 p-4">
            <Quote className="h-4 w-4 text-accent-500" />
            <blockquote className="mt-2 text-sm italic leading-relaxed text-primary-200">
              {item.testimonial.quote[locale]}
            </blockquote>
            <figcaption className="mt-2 text-xs text-primary-400">
              {item.testimonial.name} · {item.testimonial.role[locale]}
            </figcaption>
          </figure>
        )}

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
          {!compact && (
            <div className="flex flex-wrap gap-1.5">
              {item.tools.map((t) => (
                <span key={t} className="rounded-full border border-surface-border px-2.5 py-0.5 text-[11px] text-primary-400">
                  {t}
                </span>
              ))}
            </div>
          )}
          <a
            href={item.behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-accent-400 transition-colors hover:text-accent-300"
          >
            {isTr ? "Tasarımı Behance'te gör" : "See the design on Behance"}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
