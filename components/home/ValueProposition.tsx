import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { offers, preAuditPath } from "@/lib/offers";
import { casesPath } from "@/lib/cases";
import StatCounter from "./StatCounter";

interface Props {
  locale: string;
}

/**
 * Bölüm 1 — Hero / Değer Önermesi (tek H1).
 * Persona: e-ticaret + hizmet şirketleri. 3 ana teklif etiketi, düşük eşikli
 * ilk adım (Ücretsiz Ön Analiz) + vakalar. Mobilde kompakt tutulur.
 * Genişlik diğer bölümlerle (container-custom) birebir aynı.
 */
export default function ValueProposition({ locale }: Props) {
  const isTr = locale === "tr";
  const loc = isTr ? "tr" : "en";
  const skills = offers.map((o) => o.short[loc]);

  // Her rakamın altında kanıt satırı — sadece sitede zaten yer alan bilgiler.
  const stats = [
    { to: 25, short: isTr ? "Yıl" : "Years", label: isTr ? "Yıl Deneyim" : "Years of Experience", proof: isTr ? "Türk Hava Yolları'ndan BMW'ye" : "From Turkish Airlines to BMW" },
    { to: 500, short: isTr ? "Proje" : "Projects", label: isTr ? "Teslim Edilen Proje" : "Projects Delivered", proof: isTr ? "Web, mobil, tablet ve Smart TV" : "Web, mobile, tablet and Smart TV" },
    { to: 100, short: isTr ? "Marka" : "Brands", label: isTr ? "Marka" : "Brands", proof: isTr ? "Medya, otomotiv, fintech, kamu" : "Media, automotive, fintech, public" },
    { to: 12, short: isTr ? "Ülke" : "Countries", label: isTr ? "Ülke" : "Countries", proof: isTr ? "ABD, İngiltere, Almanya, Kanada…" : "US, UK, Germany, Canada…" },
  ];

  return (
    <section className="relative overflow-hidden pt-24 pb-6 md:pt-36 md:pb-10">
      <div className="container-custom relative z-10">
        <div className="card flex flex-col items-center gap-4 px-5 py-5 text-center md:flex-row md:justify-between md:gap-8 md:px-10 md:py-7 md:text-left">
          <div className="flex flex-col items-center md:items-start">
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
                ? "E-ticaret ve hizmet şirketleri için UX, SEO/GEO ve yapay zekayla trafik ve gelir büyümesi. Ajans değil, işin içine bizzat giren kıdemli bir danışman."
                : "Traffic and revenue growth for e-commerce and service businesses through UX, SEO/GEO and AI. Not an agency: one senior consultant who does the work."}
            </p>

            <div className="mt-4 grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto sm:gap-3">
              <Link href={preAuditPath(loc)} className="btn-primary group whitespace-nowrap !px-3 text-[13px] sm:!px-6 sm:text-sm md:text-base">
                <span className="sm:hidden">{isTr ? "Ücretsiz Analiz" : "Free Pre-Audit"}</span>
                <span className="hidden sm:inline">{isTr ? "Ücretsiz Ön Analiz Al" : "Get a Free Pre-Audit"}</span>
                <ArrowRight className="ml-1.5 hidden h-4 w-4 sm:inline transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href={casesPath(loc)} className="btn-secondary group whitespace-nowrap !px-3 text-[13px] sm:!px-6 sm:text-sm md:text-base">
                <span className="sm:hidden">{isTr ? "Vakalar" : "Case Studies"}</span>
                <span className="hidden sm:inline">{isTr ? "Vakaları İncele" : "See Case Studies"}</span>
                <ArrowUpRight className="ml-1.5 hidden h-4 w-4 sm:inline transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Masaüstü: portre + isim (kişisel marka). Mobilde kartın altındaki küçük satır kullanılır. */}
          <div className="relative hidden shrink-0 flex-col items-center md:flex">
            <div className="absolute left-1/2 top-[40%] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(219,116,32,0.22),transparent_68%)] blur-xl" />
            <div className="relative h-44 w-44 overflow-hidden rounded-full ring-1 ring-accent-500/30 lg:h-52 lg:w-52">
              <Image
                src="/tonguckaracay-ux-seo-ai.png"
                alt="Tonguç Karaçay"
                fill
                priority
                sizes="208px"
                className="object-cover"
                style={{ transform: "scale(1.35)", transformOrigin: "50% 20%" }}
              />
            </div>
            <div className="relative mt-3 text-center">
              <div className="font-display font-semibold text-white">Tonguç Karaçay</div>
              <div className="text-xs text-primary-400">{isTr ? "Dijital Büyüme Danışmanı" : "Digital Growth Consultant"}</div>
            </div>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-center gap-3 md:hidden">
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

        {/* İstatistikler — ayrı, büyük rakamlı kutular + kanıt satırı */}
        <div className="mt-3 grid grid-cols-4 gap-1.5 sm:gap-2.5 md:mt-6 md:gap-4">
          {stats.map((st) => (
            <div
              key={st.label}
              className="group relative overflow-hidden rounded-xl border border-surface-border/60 bg-surface-card/50 sm:rounded-2xl px-1 py-2.5 text-center transition-colors hover:border-accent-500/40 sm:px-4 sm:py-3 md:p-6 md:text-left"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent-500/10 blur-2xl transition-colors group-hover:bg-accent-500/25" />
              <p className="text-gradient font-display text-xl font-extrabold leading-none sm:text-3xl md:text-5xl">
                <StatCounter to={st.to} suffix="+" />
              </p>
              <p className="mt-1 text-[10px] font-semibold leading-tight text-white sm:mt-1.5 sm:text-xs md:mt-2 md:text-base"><span className="sm:hidden">{st.short}</span>
                <span className="hidden sm:inline">{st.label}</span>
              </p>
              <p className="mt-1 hidden text-xs leading-snug text-primary-400 sm:block md:text-sm">{st.proof}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
