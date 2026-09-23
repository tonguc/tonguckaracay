import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface Props {
  locale: string;
}

/**
 * Bölüm 2 — Değer Önermesi.
 * Manşet slider'ın hemen altında: net, jargonsuz başlık + CTA + istatistikler.
 * Genişlik diğer bölümlerle (container-custom) birebir aynı.
 */
export default function ValueProposition({ locale }: Props) {
  const isTr = locale === "tr";
  const contactPath = isTr ? "/iletisim" : "/en/contact";
  const casesPath = "#trusted-by";

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
    <section className="relative overflow-hidden py-8 md:py-10">
      <div className="container-custom relative z-10">
        <div className="card flex flex-col items-center gap-5 px-6 py-6 text-center md:flex-row md:justify-between md:gap-8 md:px-10 md:py-7 md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-medium text-emerald-300">
                {isTr ? "Yeni danışmanlık projelerine açık" : "Available for consulting"}
              </span>
            </div>

            <h1 className="font-display text-xl font-bold leading-snug text-white sm:text-2xl md:text-[26px]">
              {isTr ? (
                <>
                  Web Sitenizi Daha Fazla <span className="text-gradient">Müşteriye ve Satışa</span> Dönüştürüyorum
                </>
              ) : (
                <>
                  I Turn Your Website Into <span className="text-gradient">More Customers and Sales</span>
                </>
              )}
            </h1>

            <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 md:justify-start">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-accent-500/20 bg-accent-500/5 px-2.5 py-0.5 text-[11px] font-medium text-accent-200 md:text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-primary-300 md:text-base">
              {isTr
                ? "25+ yıldır işletmelerin trafiğini, dönüşümlerini ve müşteri deneyimini birlikte büyütüyorum."
                : "Helping businesses improve traffic, conversions and customer experience for 25+ years."}
            </p>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link href={contactPath} className="btn-primary group text-sm md:text-base">
                {isTr ? "Ücretsiz Görüşme Al" : "Book Free Consultation"}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href={casesPath} className="btn-secondary group text-sm md:text-base">
                {isTr ? "Kimlerle Çalıştım" : "Who I've Worked With"}
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          <div className="grid w-full grid-cols-2 gap-4 border-t border-surface-border/40 pt-5 sm:grid-cols-4 md:w-auto md:grid-cols-2 md:gap-x-8 md:gap-y-4 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="text-gradient font-display text-xl font-bold md:text-2xl">{s.value}</div>
                <div className="mt-0.5 text-[11px] text-primary-400 md:text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-3 md:justify-start md:pl-10">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[radial-gradient(circle_at_50%_30%,rgba(219,116,32,0.20),transparent_70%)] ring-1 ring-accent-500/30">
            <Image
              src="/tonguckaracay-ux-seo-ai.png"
              alt="Tonguç Karaçay"
              fill
              sizes="40px"
              className="object-cover"
              style={{ transform: "scale(1.7)", transformOrigin: "50% 14%" }}
            />
          </div>
          <div className="text-left">
            <div className="text-sm font-semibold text-white">Tonguç Karaçay</div>
            <div className="text-xs text-primary-400">
              {isTr ? "Dijital Büyüme Danışmanı" : "Digital Growth Consultant"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
