import Link from "next/link";
import { ArrowRight, TrendingUp, Search, MousePointerClick } from "lucide-react";

interface Props {
  locale: string;
}

/**
 * Bölüm 3 — Sonuçlar & Vaka Çalışmaları.
 * Metrikler temsilidir (gerçek müşteri adı verilmez); "Vaka İncele" iletişime yönlendirir.
 */
export default function CaseStudies({ locale }: Props) {
  const isTr = locale === "tr";
  const contactPath = isTr ? "/iletisim" : "/en/contact";

  const cases = isTr
    ? [
        {
          icon: MousePointerClick,
          industry: "E-Ticaret",
          metric: "+18%",
          metricLabel: "Dönüşüm Oranı",
          challenge: "Yüksek trafik, düşük satış. Ödeme akışında ciddi terk oranı.",
          solution: "UX denetimi + checkout yeniden tasarımı ve A/B testleri.",
          impact: "Sepet terk oranı düştü, aynı trafikle gelir arttı.",
        },
        {
          icon: Search,
          industry: "B2B / SaaS",
          metric: "+83%",
          metricLabel: "Organik Trafik",
          challenge: "Teknik SEO sorunları ve zayıf içerik kümeleri.",
          solution: "Teknik SEO düzeltmeleri + arama niyetine göre içerik mimarisi.",
          impact: "6 ayda organik trafik ve nitelikli lead sayısı arttı.",
        },
        {
          icon: TrendingUp,
          industry: "Hizmet / Yerel",
          metric: "-32%",
          metricLabel: "Edinme Maliyeti",
          challenge: "Google Ads bütçesi verimsiz, müşteri başına maliyet yüksek.",
          solution: "Kampanya yeniden yapılandırma + landing page optimizasyonu.",
          impact: "Daha düşük maliyetle daha fazla görüşme talebi ve elde tutma.",
        },
      ]
    : [
        {
          icon: MousePointerClick,
          industry: "E-commerce",
          metric: "+18%",
          metricLabel: "Conversion Rate",
          challenge: "High traffic but weak sales, with heavy drop-off at checkout.",
          solution: "UX audit + checkout redesign backed by A/B testing.",
          impact: "Cart abandonment dropped; revenue grew on the same traffic.",
        },
        {
          icon: Search,
          industry: "B2B / SaaS",
          metric: "+83%",
          metricLabel: "Organic Traffic",
          challenge: "Technical SEO debt and thin, unstructured content.",
          solution: "Technical fixes + intent-driven content architecture.",
          impact: "Organic traffic and qualified leads grew within 6 months.",
        },
        {
          icon: TrendingUp,
          industry: "Services / Local",
          metric: "-32%",
          metricLabel: "Acquisition Cost",
          challenge: "Inefficient Google Ads spend and high cost per customer.",
          solution: "Campaign restructuring + landing page optimization.",
          impact: "More consultation requests at lower cost, with better retention.",
        },
      ];

  return (
    <section id="case-studies" className="py-14 md:py-24">
      <div className="container-custom">
        <div className="mb-10 text-center md:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400 md:text-sm">
            {isTr ? "Kanıtlanmış Etki" : "Proven Impact"}
          </p>
          <h2 className="section-title mx-auto">
            {isTr ? "Gerçek " : "Real "}
            <span className="text-gradient">{isTr ? "İş Sonuçları" : "Business Results"}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-primary-300">
            {isTr
              ? "Strateji değil, sonuç. Aşağıdaki rakamlar tipik proje etkilerini temsil eder."
              : "Outcomes, not just strategy. The figures below represent typical project impact."}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-7">
          {cases.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.metricLabel} className="card group flex flex-col p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-surface-card/70 px-3 py-1 text-xs font-medium text-primary-300">
                    {c.industry}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500 transition-colors group-hover:bg-accent-500/20">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-6">
                  <div className="font-display text-4xl font-bold text-accent-500 md:text-5xl">{c.metric}</div>
                  <div className="mt-1 text-sm font-medium uppercase tracking-wide text-primary-400">{c.metricLabel}</div>
                </div>

                <dl className="mt-6 space-y-4 text-sm">
                  <div>
                    <dt className="font-semibold text-white">{isTr ? "Zorluk" : "Challenge"}</dt>
                    <dd className="mt-1 text-primary-400">{c.challenge}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-white">{isTr ? "Çözüm" : "Solution"}</dt>
                    <dd className="mt-1 text-primary-400">{c.solution}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-white">{isTr ? "İş Etkisi" : "Business Impact"}</dt>
                    <dd className="mt-1 text-primary-400">{c.impact}</dd>
                  </div>
                </dl>

                <Link
                  href={contactPath}
                  className="mt-7 inline-flex items-center gap-1.5 font-semibold text-accent-400 transition-colors hover:text-accent-300"
                >
                  {isTr ? "Vaka İncele" : "View Case Study"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
