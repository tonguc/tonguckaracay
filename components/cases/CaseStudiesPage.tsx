import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cases, type Locale } from "@/lib/cases";
import { preAuditPath } from "@/lib/offers";
import CaseCarousel from "./CaseCarousel";
import PortfolioGrid from "./PortfolioGrid";

export const caseStudiesMeta = (locale: Locale) => ({
  title:
    locale === "tr"
      ? "Vaka Çalışmaları ve Portfolyo | Tonguç Karaçay"
      : "Case Studies & Portfolio | Tonguç Karaçay",
  description:
    locale === "tr"
      ? "Türk Hava Yolları, BMW, Borusan Otomotiv, Fotomaç ve e-ticaret markaları için UX ve dijital ürün vakaları: hedef, müdahale ve teslim edilen tasarım."
      : "UX and digital product case studies for Turkish Airlines, BMW, Borusan Otomotiv, Fotomaç and e-commerce brands: goal, intervention and delivered design.",
  alternates: {
    canonical: locale === "tr" ? "https://tonguckaracay.com/vaka-calismalari" : "https://tonguckaracay.com/en/case-studies",
    languages: {
      tr: "https://tonguckaracay.com/vaka-calismalari",
      en: "https://tonguckaracay.com/en/case-studies",
      "x-default": "https://tonguckaracay.com/en/case-studies",
    },
  },
});

export default function CaseStudiesPage({ locale }: { locale: Locale }) {
  const isTr = locale === "tr";

  return (
    <main className="pt-28 pb-20 md:pt-36">
      <div className="container-custom">
        <header className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400 md:text-sm">
            {isTr ? "Portfolyo" : "Portfolio"}
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight text-white md:text-5xl">
            {isTr ? "Vaka " : "Case "}
            <span className="text-gradient">{isTr ? "Çalışmaları" : "Studies"}</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-primary-300 md:text-lg">
            {isTr
              ? "Otomotivden e-ticarete, sigortadan medyaya: her projede hedefi, yaptığım müdahaleyi ve teslim edilen tasarımı görebilirsiniz."
              : "From automotive to e-commerce, insurance to media: for each project you can see the goal, what I did and the delivered design."}
          </p>
        </header>

        <div className="-mx-2 md:-mx-3">
          <CaseCarousel items={cases} locale={locale} />
        </div>

        <PortfolioGrid locale={locale} />

        <div className="card mx-auto mt-14 flex max-w-3xl flex-col items-center gap-4 px-6 py-8 text-center md:py-10">
          <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
            {isTr ? "Sıradaki vaka sizin siteniz olsun" : "Let your site be the next case"}
          </h2>
          <p className="max-w-xl text-primary-300">
            {isTr
              ? "Sitenizi SEO, GEO (ChatGPT, Gemini gibi AI aramalarında görünürlük) ve dönüşüm açısından ücretsiz inceleyip en büyük fırsatları size yazılı olarak iletiyorum."
              : "I'll review your site for SEO, GEO (visibility in AI search like ChatGPT and Gemini) and conversion for free and send you the biggest opportunities in writing."}
          </p>
          <Link href={preAuditPath(locale)} className="btn-primary group">
            {isTr ? "Ücretsiz Ön Analiz Al" : "Get a Free Pre-Audit"}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </main>
  );
}
