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
        { icon: Award, title: "Kurumsal ve Uluslararası Deneyim", desc: "Medya, otomotiv, ulaşım ve B2B teknoloji alanlarında kurumsal ve uluslararası dijital ürün çalışmaları." },
        { icon: Layers, title: "Ürün ve Ekip Liderliği", desc: "Ürün stratejisi, kullanıcı deneyimi, tasarım sistemleri ve disiplinler arası teslim süreçlerine bütüncül yaklaşım." },
        { icon: Cpu, title: "Uygulanabilir AI Yaklaşımı", desc: "Network Hardwares ve eva.guru deneyimini AI destekli ürün akışları, veri analitiği ve otomasyonla birleştirme." },
      ]
    : [
        { icon: Award, title: "Enterprise & International Experience", desc: "Corporate and international digital product work across media, automotive, mobility and B2B technology." },
        { icon: Layers, title: "Product & Team Leadership", desc: "An integrated approach to product strategy, UX, design systems and cross-functional delivery." },
        { icon: Cpu, title: "Practical AI Experience", desc: "Combining Network Hardwares and eva.guru experience with AI-assisted workflows, analytics and automation." },
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
            {isTr ? "Deneyim ve Yaklaşım" : "Experience & Approach"}
          </p>
          <h2 className="section-title mx-auto">
            {isTr ? "Bir Arada " : "Connecting "}
            <span className="text-gradient">{isTr ? "Ürün, Tasarım ve Teknoloji" : "Product, Design & Technology"}</span>
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
