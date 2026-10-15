import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseDetailPath, type CaseStudy, type Locale } from "@/lib/cases";

interface Props {
  item: CaseStudy;
  locale: Locale;
  variant?: "compact" | "full";
}

/**
 * Ana sayfa ve projeler listesindeki kompakt proje kartı.
 * Hedefler, tüm sorumluluklar, teknolojiler ve Behance kaynağı ayrı detay sayfasında.
 */
export default function CaseCard({ item, locale }: Props) {
  const tr = locale === "tr";
  const href = caseDetailPath(locale, item.slug);

  return (
    <article className="card group flex h-full min-h-[475px] flex-col overflow-hidden lg:h-[540px] lg:min-h-0">
      <Link
        href={href}
        className="relative block h-[185px] shrink-0 overflow-hidden bg-surface-darker"
        aria-label={item.shortTitle[locale]}
      >
        <Image
          src={item.image}
          alt={item.title[locale] + " — " + item.client}
          fill
          sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-5 md:px-6 md:pb-6">
        <div className="flex items-center gap-2">
          <span className="truncate text-[11px] font-bold uppercase tracking-[0.11em] text-accent-400">
            {item.client}
          </span>
        </div>
        <h3 className="mt-3 line-clamp-2 font-display text-xl font-bold leading-snug text-white">
          <Link href={href} className="transition-colors hover:text-accent-300">
            {item.shortTitle[locale]}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-primary-300">
          {item.summary[locale]}
        </p>
        <div className="mt-4 border-t border-surface-border/60 pt-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-primary-400">
            {tr ? "Proje kapsamı" : "Project scope"}
          </p>
          <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-primary-200">
            {item.responsibilitySummary[locale]}
          </p>
        </div>
        <Link
          href={href}
          className="mt-auto inline-flex items-center gap-1.5 self-start pt-5 text-sm font-semibold text-accent-400 transition-colors hover:text-accent-300"
        >
          {tr ? "Projeyi İncele" : "View Project"}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
