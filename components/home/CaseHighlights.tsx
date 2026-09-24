import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredCases, casesPath, type Locale } from "@/lib/cases";
import CaseCard from "@/components/cases/CaseCard";

/**
 * Ana sayfa — 2 mini vaka (lib/cases.ts içinde featured: true olanlar).
 */
export default function CaseHighlights({ locale }: { locale: string }) {
  const loc = (locale === "tr" ? "tr" : "en") as Locale;
  const isTr = loc === "tr";
  if (featuredCases.length === 0) return null;

  return (
    <section id="case-studies" className="border-y border-surface-border/40 bg-surface-card/20 py-12 md:py-20">
      <div className="container-custom">
        <div className="mb-8 flex flex-col items-center gap-3 text-center md:mb-12 md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400 md:text-sm">
              {isTr ? "Vakalar" : "Case Studies"}
            </p>
            <h2 className="section-title">
              {isTr ? "Teslim Edilmiş " : "Delivered "}
              <span className="text-gradient">{isTr ? "İşlerden Örnekler" : "Work"}</span>
            </h2>
          </div>
          <Link
            href={casesPath(loc)}
            className="inline-flex items-center gap-2 font-semibold text-accent-400 transition-colors hover:text-accent-300"
          >
            {isTr ? "Tüm Vakalar" : "All Case Studies"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {featuredCases.slice(0, 2).map((c) => (
            <CaseCard key={c.slug} item={c} locale={loc} variant="compact" />
          ))}
        </div>
      </div>
    </section>
  );
}
