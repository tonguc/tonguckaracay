import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  locale: string;
}

/**
 * Bölüm 8 — Kişisel Hikaye. Büyük portre + timeline.
 */
export default function PersonalStory({ locale }: Props) {
  const isTr = locale === "tr";
  const aboutPath = isTr ? "/hakkimda" : "/en/about";

  const timeline = isTr
    ? [
        { period: "UX & Tasarım", desc: "25+ yıl kullanıcı deneyimi tasarımı ve ürün düşüncesi." },
        { period: "Dijital Pazarlama", desc: "Marka ve performans pazarlamasında liderlik." },
        { period: "SEO Danışmanlığı", desc: "Teknik SEO ve içerik stratejisiyle organik büyüme." },
        { period: "AI Dönüşümü", desc: "İşletmeler için yapay zeka benimseme ve otomasyon danışmanlığı." },
      ]
    : [
        { period: "UX & Design", desc: "25+ years of user experience design and product thinking." },
        { period: "Digital Marketing", desc: "Leadership across brand and performance marketing." },
        { period: "SEO Consulting", desc: "Organic growth through technical SEO and content strategy." },
        { period: "AI Transformation", desc: "AI adoption and automation consulting for businesses." },
      ];

  return (
    <section className="py-14 md:py-24">
      <div className="container-custom">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Portre — arka planı silinmiş cutout, düz siyah zeminde */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="absolute -inset-3 rounded-3xl bg-accent-500/10 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-white/10">
              <Image
                src="/tonguckaracay-ux-seo-ai.png"
                alt="Tonguç Karaçay — UX, SEO & AI Danışmanı"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* Hikaye + timeline */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400 md:text-sm">
              {isTr ? "Tanışalım" : "Get to Know Me"}
            </p>
            <h2 className="section-title">
              {isTr ? "Tonguç " : "Meet Tonguç "}
              <span className="text-gradient">Karaçay</span>
            </h2>
            <p className="mt-3 max-w-xl leading-relaxed text-primary-300">
              {isTr
                ? "Türkiye, ABD, Almanya ve Kanada'da; otomotivden medyaya, kamudan startup'a kadar uzanan 25+ yıllık bir yolculuk. UX, dijital pazarlama, SEO ve yapay zeka dönüşümünü tek bir büyüme bakışında birleştiriyorum."
                : "A 25+ year journey across Turkey, the USA, Germany and Canada — from automotive and media to government and startups. I combine UX, digital marketing, SEO and AI transformation into a single growth lens."}
            </p>

            {/* Timeline */}
            <div className="mt-8 space-y-6 border-l border-surface-border/60 pl-6">
              {timeline.map((t) => (
                <div key={t.period} className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-accent-500 ring-4 ring-surface-darker" />
                  <h3 className="font-display font-semibold text-white">{t.period}</h3>
                  <p className="mt-1 text-sm text-primary-400">{t.desc}</p>
                </div>
              ))}
            </div>

            <Link href={aboutPath} className="btn-primary group mt-9">
              {isTr ? "Hakkımda Daha Fazla" : "More About Me"}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
