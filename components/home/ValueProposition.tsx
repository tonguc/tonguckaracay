import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { portfolio, type PortfolioItem } from "@/lib/portfolio";
import { countriesWithProjectsCount } from "@/lib/geography";

interface Props {
  locale: string;
}

/**
 * Hero (2026-11 yeniden tasarım).
 * Sol: tek H1 + değer önermesi + KOBİ satırı + CTA'lar + tek satır kanıt (sayaç kutuları yok).
 * Sağ: gerçek işlerden iki kolonlu, zıt yönde yavaşça kayan kolaj (Behance kapakları).
 * Kolaj fareyle durur, prefers-reduced-motion'da hareket etmez; ikinci kopya ekran okuyucudan gizli.
 * Turuncu yalnızca butonda — başlıkta vurgu/gradient kelime YOK.
 */
const colA = ["139240279", "73080587", "83025545", "68080669", "251295211"];
const colB = ["125628811", "73080939", "83026773", "73081745", "83025685"];

const pick = (ids: string[]) =>
  ids
    .map((id) => portfolio.find((p) => p.id === id))
    .filter((p): p is PortfolioItem => Boolean(p));

function Column({ items, loc, direction }: { items: PortfolioItem[]; loc: "tr" | "en"; direction: "up" | "down" }) {
  const tile = (p: PortfolioItem, hidden: boolean) => (
    <div
      key={`${hidden ? "b" : "a"}-${p.id}`}
      className="relative aspect-[640/501] w-full overflow-hidden rounded bg-surface-card"
      aria-hidden={hidden || undefined}
    >
      <Image src={`/portfolio/${p.id}.webp`} alt={hidden ? "" : p.title[loc]} fill sizes="(max-width: 1024px) 45vw, 260px" className="object-cover" />
    </div>
  );
  return (
    <div className="overflow-hidden">
      <div
        className={`flex flex-col gap-3.5 motion-reduce:animate-none group-hover/collage:[animation-play-state:paused] ${
          direction === "up" ? "animate-tk-up" : "animate-tk-down"
        }`}
      >
        {items.map((p) => tile(p, false))}
        {items.map((p) => tile(p, true))}
      </div>
    </div>
  );
}

export default function ValueProposition({ locale }: Props) {
  const loc = locale === "tr" ? "tr" : "en";
  const isTr = loc === "tr";
  const contactPath = isTr ? "/iletisim" : "/en/contact";

  const facts = [
    { v: "26+", l: isTr ? "yıl" : "years" },
    { v: "200+", l: isTr ? "dijital proje" : "digital projects" },
    { v: "100+", l: isTr ? "marka" : "brands" },
    { v: String(countriesWithProjectsCount), l: isTr ? "ülke" : "countries" },
  ];

  return (
    <section className="pb-16 pt-28 md:pb-24 md:pt-36">
      <div className="container-custom grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <p className="mb-6 text-[15px] text-primary-400">
            {isTr ? "Tonguç Karaçay — dijital ürün, UX ve yapay zeka" : "Tonguç Karaçay — digital product, UX and AI"}
          </p>
          <h1 className="font-display text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl">
            {isTr ? "THY’den BMW’ye 200+ dijital ürün. Şimdi sıra yapay zekada." : "200+ digital products, from Turkish Airlines to BMW. Now it’s AI’s turn."}
          </h1>
          <p className="mt-7 max-w-[34em] text-[17px] leading-relaxed text-primary-300 md:text-lg">
            {isTr
              ? "Ürün stratejisini, kullanıcı deneyimini ve yapay zeka otomasyonunu fikirden yayına taşıyorum. 26 yıldır kurumsal platformlarda; Türkiye, ABD, Kanada ve Almanya’daki ekiplerle."
              : "I take product strategy, user experience and AI automation from idea to launch. 26 years on enterprise platforms, with teams in Türkiye, the US, Canada and Germany."}
          </p>
          <p className="mt-3 max-w-[34em] text-[17px] leading-relaxed text-white md:text-lg">
            {isTr
              ? "Kurumsal markalardan KOBİ’lere, kliniklerden e-ticarete: işinizi anlayan tek bir muhatap."
              : "From global brands to small businesses, clinics to e-commerce: one partner who understands your business."}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link href={contactPath} className="btn-primary group gap-2 text-base">
              {isTr ? "İş birliğini konuşalım" : "Let’s talk about your project"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="#projeler" className="border-b border-primary-600 pb-0.5 font-medium text-white transition-colors hover:border-accent-400">
              {isTr ? "Projeleri incele" : "See the work"}
            </Link>
          </div>
          <p className="mt-12 border-t border-surface-border pt-5 text-[15px] leading-loose text-primary-400">
            {facts.map((f, i) => (
              <span key={f.l}>
                {i > 0 && <span className="mx-2.5 text-primary-600">·</span>}
                <span className="font-semibold text-white">{f.v}</span> {f.l}
              </span>
            ))}
          </p>
        </div>

        <div
          className="group/collage fade-y grid h-[420px] grid-cols-2 gap-3.5 overflow-hidden sm:h-[520px] lg:h-[640px]"
        >
          <Column items={pick(colA)} loc={loc} direction="up" />
          <Column items={pick(colB)} loc={loc} direction="down" />
        </div>
      </div>
    </section>
  );
}
