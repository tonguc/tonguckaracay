import { cases, type Locale } from "@/lib/cases";
import CaseCarousel from "./CaseCarousel";
import PortfolioGrid from "./PortfolioGrid";
import AiProjectsGallery from "./AiProjectsGallery";

export const caseStudiesMeta = (locale: Locale) => ({
  title:
    locale === "tr"
      ? "Projeler ve Portfolyo | Tonguç Karaçay"
      : "Case Studies & Portfolio | Tonguç Karaçay",
  description:
    locale === "tr"
      ? "BMW, Türk Hava Yolları ve e-ticaret projelerinde dijital ürün liderliği, ekip yönetimi, proje stratejisi ve uçtan uca teslim deneyimi."
      : "Digital product leadership, team management, project strategy and end-to-end delivery experience across BMW, Turkish Airlines and e-commerce.",
  alternates: {
    canonical: locale === "tr" ? "https://tonguckaracay.com/projeler" : "https://tonguckaracay.com/en/case-studies",
    languages: {
      tr: "https://tonguckaracay.com/projeler",
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
            {isTr ? "Seçili " : "Case "}
            <span className="text-gradient">{isTr ? "Projeler" : "Studies"}</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-primary-300 md:text-lg">
            {isTr
              ? "Otomotiv, e-ticaret, teknoloji ve medya alanlarında; dijital ürün stratejisinden proje planlamasına, disiplinler arası ekiplerin koordinasyonundan canlıya geçişe kadar yönettiğim süreçler ve ortaya çıkan ürünler."
              : "Across automotive, e-commerce, technology and media, these projects reflect my leadership in digital product strategy, project planning, cross-functional team coordination and end-to-end delivery."}
          </p>
        </header>

        <div className="-mx-2 md:-mx-3">
          <CaseCarousel items={cases} locale={locale} variant="compact" />
        </div>

        <AiProjectsGallery locale={locale} />
        <PortfolioGrid locale={locale} />


      </div>
    </main>
  );
}
