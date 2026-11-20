import Link from "next/link";
import Image from "next/image";
import { featuredCases, caseDetailPath, type Locale } from "@/lib/cases";

/**
 * Ana sayfa — öne çıkan vakalar (2026-11).
 * Carousel yerine büyük görselli, sağlı-sollu satırlar: müşteri · sektör, başlık, özet,
 * "neler yaptım" maddeleri (lib/cases.ts → intervention, en fazla 3), sorumluluk özeti, vaka linki.
 * Akan portfolyo şeridi artık ayrı bölüm (PortfolioMarquee) ve bunun üstünde render edilir.
 */
export default function CaseHighlights({ locale }: { locale: string }) {
  const loc = (locale === "tr" ? "tr" : "en") as Locale;
  const isTr = loc === "tr";
  const items = featuredCases.slice(0, 3);
  if (items.length === 0) return null;

  return (
    <section id="case-studies" className="py-20 md:py-28">
      <div className="container-custom">
        <div className="mb-6 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
          <h2 className="section-title mb-0">{isTr ? "Öne çıkan projeler" : "Featured projects"}</h2>
          <p className="max-w-xl text-lg leading-relaxed text-primary-300">
            {isTr
              ? "Üç farklı sektör, üç farklı problem: kurumsal mobil ürün, e-ticaret operasyonu ve yapay zeka ile geliştirilen bir SaaS."
              : "Three sectors, three different problems: an enterprise mobile product, an e-commerce operation and an AI-built SaaS."}
          </p>
        </div>

        {items.map((c, i) => {
          const href = caseDetailPath(loc, c.slug);
          return (
            <article key={c.slug} className="grid items-center gap-8 border-t border-surface-border py-12 md:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
              <Link href={href} className={`group block ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[3/2] overflow-hidden rounded bg-surface-card">
                  <Image
                    src={c.image}
                    alt={c.title[loc]}
                    fill
                    sizes="(max-width: 1024px) 100vw, 680px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </Link>
              <div>
                <p className="text-sm text-primary-400">
                  {c.client} <span className="mx-1.5 text-primary-600">·</span> {c.sector[loc]}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-tight text-white md:text-[2rem]">
                  <Link href={href} className="transition-colors hover:text-accent-300">
                    {c.shortTitle[loc]}
                  </Link>
                </h3>
                <p className="mt-4 text-[17px] leading-relaxed text-primary-300">{c.summary[loc]}</p>
                <ul className="mt-7 border-b border-surface-border text-[15px] leading-normal text-primary-300">
                  {c.intervention[loc].slice(0, 3).map((x) => (
                    <li key={x} className="border-t border-surface-border py-2.5">
                      {x}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-sm text-primary-400">{c.responsibilitySummary[loc]}</span>
                  <Link href={href} className="border-b border-accent-500 pb-0.5 font-semibold text-white">
                    {isTr ? "Projeyi incele" : "View project"}
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
