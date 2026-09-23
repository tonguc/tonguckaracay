import { Search, Compass, Rocket, LineChart } from "lucide-react";

interface Props {
  locale: string;
}

/**
 * Bölüm 3 — "A Typical Engagement" / Tipik Bir Çalışma Süreci.
 * Güçlü, görsel ağırlıklı kart grid'i: ikon kutuları, büyük hayalet numaralar,
 * dolgun kartlar — önceki ince/minimal timeline yerine. Açıklamalar güncel
 * hizmet kapsamını (UX, SEO, GEO, sosyal medya, e-ticaret, AI, reklam) yansıtıyor.
 */
export default function Engagement({ locale }: Props) {
  const isTr = locale === "tr";

  const steps = isTr
    ? [
        {
          num: "01",
          time: "1. Hafta",
          title: "Araştırma & Denetim",
          desc: "UX, SEO, GEO (AI arama görünürlüğü), sosyal medya ve e-ticaret performansı, analitik ve müşteri yolculukları incelenir; sürtünme noktaları ve büyüme darboğazları tespit edilir.",
          icon: Search,
        },
        {
          num: "02",
          time: "2. Hafta",
          title: "Strateji Atölyesi",
          desc: "Bulgular; UX, SEO/GEO, sosyal medya, e-ticaret ve reklam alanlarında net bir yol haritasına dönüşür. İnisiyatifler iş etkisi, efor ve ROI'ye göre önceliklendirilir.",
          icon: Compass,
        },
        {
          num: "03",
          time: "3–6. Hafta",
          title: "Uygulama",
          desc: "Tasarım iyileştirmeleri, SEO ve GEO uygulaması, sosyal medya içerik/reklam yönetimi, e-ticaret optimizasyonu ve AI iş akışı entegrasyonu; gerektiğinde iç ekiplerle birlikte yürütülür.",
          icon: Rocket,
        },
        {
          num: "04",
          time: "2. Ay+",
          title: "Optimizasyon & Büyüme",
          desc: "SEO, GEO, sosyal medya ve reklam KPI'ları izlenir, sonuçlar analiz edilir ve sürekli iyileştirilir; kısa vadeli kazanç değil sürdürülebilir büyüme hedeflenir.",
          icon: LineChart,
        },
      ]
    : [
        {
          num: "01",
          time: "Week 1",
          title: "Research & Audit",
          desc: "Analyze UX, SEO, GEO (AI search visibility), social media and e-commerce performance, analytics and customer journeys — identifying friction points and growth bottlenecks.",
          icon: Search,
        },
        {
          num: "02",
          time: "Week 2",
          title: "Strategy Workshop",
          desc: "Findings become a clear roadmap across UX, SEO/GEO, social media, e-commerce and advertising. Initiatives are prioritized by business impact, effort and ROI.",
          icon: Compass,
        },
        {
          num: "03",
          time: "Weeks 3–6",
          title: "Execution",
          desc: "Design improvements, SEO and GEO execution, social media content/ad management, e-commerce optimization and AI workflow integration — collaborating with internal teams when needed.",
          icon: Rocket,
        },
        {
          num: "04",
          time: "Month 2+",
          title: "Optimization & Growth",
          desc: "Track SEO, GEO, social media and advertising KPIs, analyze outcomes and continuously improve — focused on sustainable growth, not short-term wins.",
          icon: LineChart,
        },
      ];

  return (
    <section id="how-i-work" className="bg-surface-card/20 py-14 md:py-24">
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
              ? "UX, SEO, GEO, sosyal medya, e-ticaret ve AI otomasyonu dahil — ölçülebilir iş büyümesi sağlamak için kanıtlanmış bir çerçeve."
              : "Covering UX, SEO, GEO, social media, e-commerce and AI automation — a proven framework for driving measurable business growth."}
          </p>
        </div>

        {/* Kart grid — görsel ağırlıklı: dolgun kartlar, ikon kutusu, büyük hayalet numara */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="card group relative flex flex-col overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/30"
              >
                <span
                  aria-hidden
                  className="absolute -right-2 -top-4 font-display text-7xl font-bold text-accent-500/10 transition-colors duration-300 group-hover:text-accent-500/20"
                >
                  {s.num}
                </span>

                <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/20 text-accent-300 ring-1 ring-accent-500/30 transition-all group-hover:bg-accent-500/30 group-hover:text-accent-200">
                  <Icon className="h-6 w-6" strokeWidth={2.25} />
                </div>

                <span className="relative z-10 text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">
                  {s.time}
                </span>
                <h3 className="relative z-10 mt-1 font-display text-lg font-bold text-white md:text-xl">
                  {s.title}
                </h3>
                <p className="relative z-10 mt-2 text-sm leading-relaxed text-primary-400">{s.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Uyarlanabilirlik cümlesi */}
        <div className="mx-auto mt-16 max-w-2xl text-center md:mt-20">
          <p className="text-lg leading-relaxed text-primary-300 md:text-xl">
            {isTr ? (
              <>
                Her proje farklıdır. Kimi işletmenin UX optimizasyonuna, kiminin SEO ve GEO büyümesine,
                kiminin sosyal medya veya e-ticaret performansına, kiminin AI otomasyonuna ihtiyacı vardır.{" "}
                <span className="font-semibold text-white">
                  Süreç işletmeye uyum sağlar; işletme sürece değil.
                </span>
              </>
            ) : (
              <>
                Every project is different. Some businesses need UX optimization, others SEO and GEO growth,
                others social media or e-commerce performance, others AI automation.{" "}
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
