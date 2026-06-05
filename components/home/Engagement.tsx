import { Search, Compass, Rocket, LineChart } from "lucide-react";

interface Props {
  locale: string;
}

/**
 * Bölüm 4 — "A Typical Engagement" / Tipik Bir Çalışma Süreci.
 * Kartsız/kutusuz premium timeline: desktop yatay, mobil dikey; ince bağlantı çizgisi,
 * büyük gold adım numaraları, subtle ikonlar. "Proven Impact" sonrası görsel kontrast yaratır.
 */
export default function Engagement({ locale }: Props) {
  const isTr = locale === "tr";

  const steps = isTr
    ? [
        {
          num: "01",
          time: "1. Hafta",
          title: "Araştırma & Denetim",
          desc: "UX, SEO, analitik, müşteri yolculukları ve iş hedefleri incelenir; sürtünme noktaları, kaçan fırsatlar ve büyüme darboğazları tespit edilir.",
          icon: Search,
        },
        {
          num: "02",
          time: "2. Hafta",
          title: "Strateji Atölyesi",
          desc: "Bulgular net bir yol haritasına dönüşür. İnisiyatifler iş etkisi, efor ve ROI'ye göre önceliklendirilir.",
          icon: Compass,
        },
        {
          num: "03",
          time: "3–6. Hafta",
          title: "Uygulama",
          desc: "Tasarım iyileştirmeleri, SEO uygulaması, reklam optimizasyonu ve AI iş akışı entegrasyonu; gerektiğinde iç ekiplerle birlikte yürütülür.",
          icon: Rocket,
        },
        {
          num: "04",
          time: "2. Ay+",
          title: "Optimizasyon & Büyüme",
          desc: "KPI'lar izlenir, sonuçlar analiz edilir ve sürekli iyileştirilir; kısa vadeli kazanç değil sürdürülebilir büyüme hedeflenir.",
          icon: LineChart,
        },
      ]
    : [
        {
          num: "01",
          time: "Week 1",
          title: "Research & Audit",
          desc: "Analyze UX, SEO, analytics, customer journeys and business objectives — identifying friction points, missed opportunities and growth bottlenecks.",
          icon: Search,
        },
        {
          num: "02",
          time: "Week 2",
          title: "Strategy Workshop",
          desc: "Findings become a clear roadmap. Initiatives are prioritized by business impact, effort and ROI.",
          icon: Compass,
        },
        {
          num: "03",
          time: "Weeks 3–6",
          title: "Execution",
          desc: "Design improvements, SEO execution, advertising optimization and AI workflow integration — collaborating with internal teams when needed.",
          icon: Rocket,
        },
        {
          num: "04",
          time: "Month 2+",
          title: "Optimization & Growth",
          desc: "Track KPIs, analyze outcomes and continuously improve — focused on sustainable growth, not short-term wins.",
          icon: LineChart,
        },
      ];

  return (
    <section id="how-i-work" className="py-14 md:py-24">
      <div className="container-custom">
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400 md:text-sm">
            {isTr ? "Süreç" : "How I Work"}
          </p>
          <h2 className="section-title mx-auto">
            {isTr ? (
              <>
                Nasıl <span className="text-gradient">Çalışıyorum</span>
              </>
            ) : (
              <>
                A Typical <span className="text-gradient">Engagement</span>
              </>
            )}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-primary-300">
            {isTr
              ? "Kullanıcı deneyimini iyileştirmek, organik görünürlüğü artırmak ve ölçülebilir iş büyümesi sağlamak için kanıtlanmış bir çerçeve."
              : "A proven framework used to improve user experience, increase organic visibility, and drive measurable business growth."}
          </p>
        </div>

        {/* Timeline — desktop yatay / mobil dikey, kartsız */}
        <ol className="relative flex flex-col gap-12 lg:flex-row lg:gap-8">
          {/* Desktop yatay bağlantı çizgisi */}
          <span
            aria-hidden
            className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-surface-border to-transparent lg:block"
          />
          {steps.map((s, i) => {
            const Icon = s.icon;
            const isLast = i === steps.length - 1;
            return (
              <li
                key={s.num}
                className="group relative flex flex-1 items-start gap-5 lg:flex-col lg:gap-6"
              >
                {/* Mobil dikey bağlantı çizgisi */}
                {!isLast && (
                  <span
                    aria-hidden
                    className="absolute left-8 top-8 h-[calc(100%+3rem)] w-px -translate-x-1/2 bg-surface-border lg:hidden"
                  />
                )}

                {/* Büyük gold adım numarası (node) */}
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-surface-darker ring-1 ring-surface-border transition-all duration-300 group-hover:ring-accent-500/50">
                  <span className="text-gradient font-display text-xl font-bold">{s.num}</span>
                </div>

                {/* İçerik */}
                <div className="lg:pr-6">
                  <div className="mb-2 flex items-center gap-2">
                    <Icon className="h-4 w-4 text-accent-400 transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">
                      {s.time}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white md:text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-400">{s.desc}</p>
                </div>
              </li>
            );
          })}
        </ol>

        {/* Uyarlanabilirlik cümlesi */}
        <div className="mx-auto mt-16 max-w-2xl text-center md:mt-20">
          <p className="text-lg leading-relaxed text-primary-300 md:text-xl">
            {isTr ? (
              <>
                Her proje farklıdır. Kimi işletmenin UX optimizasyonuna, kiminin SEO büyümesine, kiminin
                AI otomasyonuna ihtiyacı vardır.{" "}
                <span className="font-semibold text-white">
                  Süreç işletmeye uyum sağlar; işletme sürece değil.
                </span>
              </>
            ) : (
              <>
                Every project is different. Some businesses need UX optimization, others SEO growth,
                others AI automation.{" "}
                <span className="font-semibold text-white">
                  The process adapts to the business, not the other way around.
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
