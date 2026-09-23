import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface Props {
  locale: string;
}

/**
 * Bölüm 2 — Değer Önermesi.
 * Manşet slider'ın hemen altında: kim olduğu, ne yaptığı, CTA + istatistikler.
 * Tek büyük panel — H1, alt başlık, servis etiketleri, CTA ve istatistikler
 * birlikte, ayrı yüzen kutular değil.
 */
export default function ValueProposition({ locale }: Props) {
  const isTr = locale === "tr";
  const contactPath = isTr ? "/iletisim" : "/en/contact";
  const casesPath = "#case-studies";

  const skills = isTr
    ? ["UX Tasarım", "SEO", "GEO (AI Arama)", "Yapay Zeka", "Reklam Yönetimi"]
    : ["UX Design", "SEO", "GEO (AI Search)", "AI Automation", "Ad Management"];

  const stats = [
    { value: "25+", label: isTr ? "Yıl Deneyim" : "Years Experience" },
    { value: "500+", label: isTr ? "Proje" : "Projects" },
    { value: "100+", label: isTr ? "Marka" : "Brands" },
    { value: "12+", label: isTr ? "Ülke" : "Countries" },
  ];

  return (
    <section className="relative overflow-hidden py-14 md:py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/4 h-72 w-72 md:h-96 md:w-96 rounded-full bg-accent-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 md:h-96 md:w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-4xl">
          <div className="card flex flex-col items-center px-6 py-12 text-center md:px-14 md:py-16">
            <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-medium text-emerald-300">
                {isTr ? "Yeni danışmanlık projelerine açık" : "Available for consulting"}
              </span>
            </div>

            <h1 className="font-display text-3xl font-bold leading-[1.1] text-white sm:text-4xl md:text-5xl">
              {isTr ? (
                <>
                  UX, SEO ve Yapay Zeka ile <span className="text-gradient">Ölçülebilir Büyüme</span>
                </>
              ) : (
                <>
                  <span className="text-gradient">Measurable Growth</span> with UX, SEO &amp; AI
                </>
              )}
            </h1>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-accent-500/20 bg-accent-500/5 px-3 py-1 text-xs font-medium text-accent-200 md:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-300 md:text-lg">
              {isTr
                ? "25+ yıldır işletmelerin trafiğini, dönüşümlerini ve müşteri deneyimini birlikte büyütüyorum."
                : "Helping businesses improve traffic, conversions and customer experience for 25+ years."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={contactPath} className="btn-primary group text-base md:text-lg">
                {isTr ? "Ücretsiz Görüşme Al" : "Book Free Consultation"}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href={casesPath} className="btn-secondary group text-base md:text-lg">
                {isTr ? "Vaka Çalışmaları" : "View Case Studies"}
                <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <div className="mt-10 grid w-full grid-cols-2 gap-6 border-t border-surface-border/40 pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-gradient font-display text-3xl font-bold md:text-4xl">{s.value}</div>
                  <div className="mt-1 text-xs text-primary-400 md:text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[radial-gradient(circle_at_50%_30%,rgba(219,116,32,0.20),transparent_70%)] ring-1 ring-accent-500/30">
              <Image
                src="/tonguckaracay-ux-seo-ai.png"
                alt="Tonguç Karaçay"
                fill
                sizes="56px"
                className="object-cover"
                style={{ transform: "scale(1.7)", transformOrigin: "50% 14%" }}
              />
            </div>
            <div className="text-left">
              <div className="font-semibold text-white">Tonguç Karaçay</div>
              <div className="text-sm text-primary-400">
                {isTr ? "UX • SEO • AI Büyüme Danışmanı" : "UX • SEO • AI Growth Consultant"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
