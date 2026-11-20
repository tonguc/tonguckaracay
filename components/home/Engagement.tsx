
interface Props {
  locale: string;
}

/**
 * Nasıl çalışıyorum (2026-11): ikonlu kart grid'i yerine numaralı sade liste, sol başlık + açıklama.
 * Eski "Deneyim ve Yaklaşım" (WhyMe) bölümünün mesajı buradaki açıklamaya katıldı.
 * Önceki not — Bölüm 3 — "A Typical Engagement" / Tipik Bir Çalışma Süreci.
 * Güçlü, görsel ağırlıklı kart grid'i: ikon kutuları, büyük hayalet numaralar,
 * dolgun kartlar — önceki ince/minimal timeline yerine. Açıklamalar güncel
 * hizmet kapsamını (UX, SEO, GEO, sosyal medya, e-ticaret, AI, reklam) yansıtıyor.
 */
export default function Engagement({ locale }: Props) {
  const isTr = locale === "tr";

  const steps = isTr
    ? [
        { num: "01", time: "Aşama 1", title: "Keşif ve Ürün Analizi", desc: "Ürün hedefleri, kullanıcı yolculukları ve mevcut sistemler birlikte değerlendirilir." },
        { num: "02", time: "Aşama 2", title: "Strateji ve Önceliklendirme", desc: "Yol haritası; kullanıcı değeri, iş etkisi ve teknik fizibiliteye göre şekillenir." },
        { num: "03", time: "Aşama 3", title: "Tasarım ve Uygulama", desc: "UX, analitik, dijital büyüme ve uygun AI otomasyonlarının teslim süreçleri koordine edilir." },
        { num: "04", time: "Aşama 4", title: "Ölçüm ve İyileştirme", desc: "Ürün ve iş metriklerinden öğrenilenler yeni önceliklere dönüşür." },
      ]
    : [
        { num: "01", time: "Stage 1", title: "Discovery & Product Analysis", desc: "Align product goals, user journeys and the existing technology landscape." },
        { num: "02", time: "Stage 2", title: "Strategy & Prioritization", desc: "Shape roadmaps based on user value, business impact and technical feasibility." },
        { num: "03", time: "Stage 3", title: "Design & Delivery", desc: "Coordinate UX, analytics, digital growth and relevant AI automation through delivery." },
        { num: "04", time: "Stage 4", title: "Measurement & Improvement", desc: "Turn product and business insights into the next priorities." },
      ];

  return (
    <section id="how-i-work" className="py-20 md:py-28">
      <div className="container-custom grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <h2 className="section-title">{isTr ? "Nasıl çalışıyorum" : "How I work"}</h2>
          <p className="max-w-md text-[17px] leading-relaxed text-primary-300">
            {isTr
              ? "Kurumsal ve uluslararası projelerden gelen ürün, tasarım ve teknoloji deneyimini tek süreçte birleştiriyorum. Çalışma modeli ve kapsam, ürünün ihtiyacına ve ekibinizin yapısına göre belirlenir."
              : "I bring product, design and technology experience from enterprise and international projects into one process. The collaboration model and scope adapt to your product and team."}
          </p>
        </div>
        <ol className="border-b border-surface-border">
          {steps.map((s) => (
            <li key={s.num} className="grid grid-cols-[48px_1fr] gap-4 border-t border-surface-border py-6">
              <span className="pt-0.5 text-sm text-primary-400">{s.num}</span>
              <div>
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-primary-300">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
