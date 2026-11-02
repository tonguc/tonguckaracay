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
        { num: "01", time: "Aşama 1", title: "Keşif ve Ürün Analizi", desc: "Ürün hedefleri, kullanıcı yolculukları ve mevcut sistemler birlikte değerlendirilir.", icon: Search },
        { num: "02", time: "Aşama 2", title: "Strateji ve Önceliklendirme", desc: "Yol haritası; kullanıcı değeri, iş etkisi ve teknik fizibiliteye göre şekillenir.", icon: Compass },
        { num: "03", time: "Aşama 3", title: "Tasarım ve Uygulama", desc: "UX, analitik, dijital büyüme ve uygun AI otomasyonlarının teslim süreçleri koordine edilir.", icon: Rocket },
        { num: "04", time: "Aşama 4", title: "Ölçüm ve İyileştirme", desc: "Ürün ve iş metriklerinden öğrenilenler yeni önceliklere dönüşür.", icon: LineChart },
      ]
    : [
        { num: "01", time: "Stage 1", title: "Discovery & Product Analysis", desc: "Align product goals, user journeys and the existing technology landscape.", icon: Search },
        { num: "02", time: "Stage 2", title: "Strategy & Prioritization", desc: "Shape roadmaps based on user value, business impact and technical feasibility.", icon: Compass },
        { num: "03", time: "Stage 3", title: "Design & Delivery", desc: "Coordinate UX, analytics, digital growth and relevant AI automation through delivery.", icon: Rocket },
        { num: "04", time: "Stage 4", title: "Measurement & Improvement", desc: "Turn product and business insights into the next priorities.", icon: LineChart },
      ];

  return (
    <section id="how-i-work" className="bg-surface-card/20 py-14 md:py-24">
      <div className="container-custom">
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400 md:text-sm">
            {isTr ? "Ürün ve İş Birliği Süreci" : "Product & Collaboration Process"}
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
              ? "Ürün stratejisini, UX süreçlerini ve uygulamayı ekiplerle birlikte yönetmek için kullandığım yaklaşım."
              : "My approach to aligning product strategy, UX and delivery with cross-functional teams."}
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

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-primary-300 md:text-base">
          {isTr ? "Çalışma modeli ve kapsam, ürünün ihtiyaçlarına ve ekibin yapısına göre belirlenir." : "The collaboration model and scope adapt to the product's needs and team structure."}
        </p>
      </div>
    </section>
  );
}
