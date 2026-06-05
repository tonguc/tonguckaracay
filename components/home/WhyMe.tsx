import { Award, Layers, Cpu } from "lucide-react";

interface Props {
  locale: string;
}

/**
 * Bölüm 5 — Neden Benimle Çalışmalı. 3 sütun, destekleyici açıklamalarla.
 */
export default function WhyMe({ locale }: Props) {
  const isTr = locale === "tr";

  const cols = isTr
    ? [
        {
          icon: Award,
          title: "25+ Yıl Deneyim",
          desc: "Çeyrek asırlık saha deneyimi: otomotivden medyaya, kamudan startup'a yüzlerce projeyle test edilmiş yargı.",
        },
        {
          icon: Layers,
          title: "Teknik + İş Zihniyeti",
          desc: "Hem kodu/SEO'yu/analitiği hem de gelir, marj ve büyüme dilini konuşuyorum — strateji ile uygulama arasındaki köprü.",
        },
        {
          icon: Cpu,
          title: "AI-First Yaklaşım",
          desc: "Yapay zekayı süs olarak değil, iş akışlarını otomatikleştiren ve ölçek kazandıran bir kaldıraç olarak kuruyorum.",
        },
      ]
    : [
        {
          icon: Award,
          title: "25+ Years Experience",
          desc: "A quarter-century in the field — judgment tested across hundreds of projects, from automotive and media to government and startups.",
        },
        {
          icon: Layers,
          title: "Technical + Business Mindset",
          desc: "I speak code, SEO and analytics as fluently as revenue, margin and growth — the bridge between strategy and execution.",
        },
        {
          icon: Cpu,
          title: "AI-First Approach",
          desc: "I treat AI not as decoration but as leverage: automating workflows and unlocking scale that compounds over time.",
        },
      ];

  // Anlamına göre ayrık (discrete) renk tonları — sıra cols ile aynı:
  // Deneyim → amber, Teknik+İş → sky, AI-First → violet
  const tones = [
    "bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/20",
    "bg-sky-500/10 text-sky-400 ring-1 ring-sky-500/20",
    "bg-violet-500/10 text-violet-400 ring-1 ring-violet-500/20",
  ];

  return (
    <section className="border-y border-surface-border/40 bg-surface-card/20 py-14 md:py-24">
      <div className="container-custom">
        <div className="mb-10 text-center md:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400 md:text-sm">
            {isTr ? "Fark" : "The Difference"}
          </p>
          <h2 className="section-title mx-auto">
            {isTr ? "Şirketler Neden " : "Why Companies "}
            <span className="text-gradient">{isTr ? "Beni Seçiyor" : "Choose Me"}</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {cols.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="text-center md:text-left">
                <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl md:mx-0 ${tones[i]}`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-white">{c.title}</h3>
                <p className="mt-3 leading-relaxed text-primary-300">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
