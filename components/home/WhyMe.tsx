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
          title: "Türk Hava Yolları'ndan BMW'ye Küresel Marka Deneyimi",
          desc: "Türkiye'nin lider markalarından çok uluslu şirketlere, ABD ve İngiltere'deki projelere kadar 25+ yılda yüzlerce markaya yön verdim.",
        },
        {
          icon: Layers,
          title: "Stratejiden Sonuca Tam Sorumluluk",
          desc: "Sadece rapor yazmıyorum — koda, SEO'ya, reklam hesaplarına kendim giriyorum. Strateji rafta kalmaz, doğrudan gelire dönüşür.",
        },
        {
          icon: Cpu,
          title: "Yapay Zekayı Büyüme Motoruna Çeviriyorum",
          desc: "AI'ı vitrin süsü değil, iş akışlarını otomatikleştirip ölçeği katlayan gerçek bir kaldıraç olarak kuruyorum.",
        },
      ]
    : [
        {
          icon: Award,
          title: "Global Brand Experience, From Turkish Airlines to BMW",
          desc: "From Turkey's leading brands to multinational companies, with projects across the US and UK — 25+ years shaping growth for hundreds of brands.",
        },
        {
          icon: Layers,
          title: "Full Accountability, Strategy to Results",
          desc: "I don't just hand over a report — I get into the code, the SEO, the ad accounts myself. Strategy doesn't sit on a shelf, it turns into revenue.",
        },
        {
          icon: Cpu,
          title: "I Turn AI Into a Growth Engine",
          desc: "I treat AI not as decoration but as real leverage — automating workflows and compounding scale over time.",
        },
      ];

  // Anlamına göre ayrık (discrete) renk tonları — sıra cols ile aynı:
  // Deneyim → amber, Teknik+İş → sky, AI-First → violet
  const tones = [
    "bg-accent-500/10 text-accent-400 ring-1 ring-accent-500/20",
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
            {isTr ? "Neden " : "Why Companies "}
            <span className="text-gradient">{isTr ? "Benimle Çalışıyorlar" : "Choose Me"}</span>
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
