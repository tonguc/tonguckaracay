import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cases, casesPath, type Locale } from "@/lib/cases";
import CaseCarousel from "@/components/cases/CaseCarousel";
import PortfolioMarquee from "./PortfolioMarquee";

/**
 * Ana sayfa — 6 vaka carousel'ı (projeler kayar) + altında 500+ projeden kayan portfolyo şeridi.
 */
export default function CaseHighlights({ locale }: { locale: string }) {
  const loc = (locale === "tr" ? "tr" : "en") as Locale;
  const isTr = loc === "tr";
  if (cases.length === 0) return null;

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

        <div className="-mx-2 md:-mx-3">
          <CaseCarousel items={cases} locale={loc} variant="compact" />
        </div>
      </div>

      <PortfolioMarquee locale={loc} />
    </section>
  );
}
