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
    <section className="relative overflow-hidden py-6 md:py-10">
      <div className="container-custom relative z-10">
        <div className="card flex flex-col items-center gap-4 px-5 py-5 text-center md:flex-row md:justify-between md:gap-8 md:px-10 md:py-7 md:text-left">
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

            <h1 className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl md:text-[32px]">
              {isTr ? (
                <>
                  Daha Fazla Trafik, <span className="text-gradient">Daha Fazla Gelir</span>
                </>
              ) : (
                <>
                  More Traffic, <span className="text-gradient">More Revenue</span>
                </>
              )}
            </h1>

            <div className="mt-3 hidden flex-wrap items-center justify-center gap-1.5 sm:flex md:justify-start">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-accent-500/20 bg-accent-500/5 px-2.5 py-0.5 text-[11px] font-medium text-accent-200 md:text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>

            <p className="mt-2 max-w-md text-sm leading-relaxed text-primary-300 md:mt-3 md:text-base">
              {isTr
                ? "UX, SEO ve yapay zekayla sitenize daha fazla ziyaretçi çekiyor, o ziyaretçiyi gelire dönüştürüyorum."
                : "With UX, SEO and AI, I bring more visitors to your site and turn them into revenue."}
            </p>

            <div className="mt-4 grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto sm:gap-3">
              <Link href={contactPath} className="btn-primary group whitespace-nowrap !px-3 text-[13px] sm:!px-6 sm:text-sm md:text-base">
                <span className="sm:hidden">{isTr ? "Ücretsiz Görüşme" : "Free Consultation"}</span>
                <span className="hidden sm:inline">{isTr ? "Ücretsiz Görüşme Al" : "Book Free Consultation"}</span>
                <ArrowRight className="ml-1.5 hidden h-4 w-4 sm:inline transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href={casesPath} className="btn-secondary group whitespace-nowrap !px-3 text-[13px] sm:!px-6 sm:text-sm md:text-base">
                <span className="sm:hidden">{isTr ? "Referanslar" : "My Clients"}</span>
                <span className="hidden sm:inline">{isTr ? "Kimlerle Çalıştım" : "Who I've Worked With"}</span>
                <ArrowUpRight className="ml-1.5 hidden h-4 w-4 sm:inline transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          <div className="grid w-full grid-cols-4 gap-2 border-t border-surface-border/40 pt-4 sm:gap-4 sm:pt-5 md:w-auto md:grid-cols-2 md:gap-x-8 md:gap-y-4 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="text-gradient font-display text-lg font-bold md:text-2xl">{s.value}</div>
                <div className="mt-0.5 text-[10px] leading-tight text-primary-400 sm:text-[11px] md:text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 flex items-center justify-center gap-3 md:mt-4 md:justify-start md:pl-10">
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
