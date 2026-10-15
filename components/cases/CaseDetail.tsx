import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { caseDetailPath, casesPath, type CaseStudy, type Locale } from "@/lib/cases";

export default function CaseDetail({ item, locale }: { item: CaseStudy; locale: Locale }) {
  const tr = locale === "tr";
  const back = casesPath(locale);
  return (
    <main className="container-custom pb-20 pt-28 md:pt-36">
      <Link href={back} className="inline-flex items-center gap-2 text-sm font-semibold text-accent-400 hover:text-accent-300">
        <ArrowLeft className="h-4 w-4" /> {tr ? "Projelere Dön" : "Back to Projects"}
      </Link>
      <div className="mt-8 max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-400">{item.client}</p>
        <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-white md:text-5xl">
          {item.title[locale]}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-primary-300 md:text-lg">
          {item.summary[locale]}
        </p>
      </div>

      <div className="relative mt-9 aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-2xl border border-surface-border bg-surface-darker">
        <Image
          src={item.image}
          alt={item.title[locale] + " — " + item.client}
          fill
          priority
          sizes="(min-width: 1024px) 1100px, 100vw"
          className="object-contain"
        />
      </div>

      <div className="mt-10 grid max-w-5xl gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:gap-12">
        <div className="space-y-9">
          <section>
            <h2 className="font-display text-2xl font-bold text-white">{tr ? "Proje Hedefi" : "Project Goal"}</h2>
            <p className="mt-3 leading-relaxed text-primary-300">{item.goal[locale]}</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-white">{tr ? "Sorumluluklar ve Kapsam" : "Responsibilities & Scope"}</h2>
            <ul className="mt-5 space-y-4">
              {item.intervention[locale].map((step) => (
                <li key={step} className="flex items-start gap-3 text-primary-300">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" />
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </section>
          {item.results && item.results.length > 0 && (
            <section>
              <h2 className="font-display text-2xl font-bold text-white">{tr ? "Doğrulanmış Sonuçlar" : "Verified Outcomes"}</h2>
              <div className="mt-4 flex flex-wrap gap-8">
                {item.results.map((result) => (
                  <div key={result.value + result.label[locale]}>
                    <p className="text-gradient font-display text-3xl font-extrabold">{result.value}</p>
                    <p className="mt-1 text-sm text-primary-300">{result.label[locale]}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          {item.testimonial && (
            <blockquote className="rounded-2xl border border-surface-border bg-surface-card/50 p-6 text-primary-200">
              <p className="italic">{item.testimonial.quote[locale]}</p>
              <footer className="mt-3 text-sm text-primary-400">{item.testimonial.name} · {item.testimonial.role[locale]}</footer>
            </blockquote>
          )}
        </div>
        <aside>
          <div className="card p-6">
            <h2 className="font-display text-lg font-bold text-white">{tr ? "Proje Özeti" : "Project Overview"}</h2>
            <p className="mt-3 text-sm leading-relaxed text-primary-300">{item.responsibilitySummary[locale]}</p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-primary-400">{tr ? "Teknolojiler" : "Technologies"}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tools.map((tool) => (
                <span key={tool} className="rounded-full border border-surface-border px-2.5 py-1 text-xs text-primary-300">{tool}</span>
              ))}
            </div>
            <a
              href={item.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent-400 hover:text-accent-300"
            >
              {tr ? "Orijinal Portfolyo Kaynağı" : "Original Portfolio Source"}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}
