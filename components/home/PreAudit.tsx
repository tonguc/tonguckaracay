import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { preAuditPath } from "@/lib/offers";
import type { Locale } from "@/lib/cases";

/**
 * Lead magnet (SEO + GEO + Dönüşüm) + hibrit iş modeli: Ücretsiz Ön Analiz → Yol Haritası → Aylık danışmanlık.
 * Güven eşiğini düşüren ilk adım; fiyat yerine başlangıç modeli anlatılır.
 */
export default function PreAudit({ locale }: { locale: string }) {
  const loc = (locale === "tr" ? "tr" : "en") as Locale;
  const isTr = loc === "tr";

  const includes = isTr
    ? [
        "SEO: Google'da sizi geri tutan teknik ve içerik sorunları",
        "GEO: ChatGPT, Gemini ve Perplexity'nin markanızı önerip önermediği",
        "Dönüşüm: ziyaretçiyi kaçıran en büyük 3 UX sürtünmesi",
        "Önceliklendirilmiş, yazılı fırsat listesi",
      ]
    : [
        "SEO: the technical and content issues holding you back on Google",
        "GEO: whether ChatGPT, Gemini and Perplexity recommend your brand",
        "Conversion: the 3 biggest UX frictions losing you visitors",
        "A prioritised, written list of opportunities",
      ];

  const model = isTr
    ? [
        { step: "1", title: "Ücretsiz Ön Analiz", desc: "SEO, GEO ve dönüşüm tarafında sitenizi inceliyorum, en büyük fırsatları yazılı iletiyorum. Taahhüt yok." },
        { step: "2", title: "Yol Haritası", desc: "Sabit kapsamlı denetim ve strateji: neyi, hangi sırayla, hangi etkiyle yapacağımız." },
        { step: "3", title: "Aylık Büyüme Ortaklığı", desc: "Uygulama ve optimizasyonu bizzat yürütüyorum; kapsam ihtiyaca göre belirlenir." },
      ]
    : [
        { step: "1", title: "Free Pre-Audit", desc: "I review your site across SEO, GEO and conversion and send the biggest opportunities in writing. No commitment." },
        { step: "2", title: "Roadmap", desc: "Fixed-scope audit and strategy: what we do, in what order, with what impact." },
        { step: "3", title: "Monthly Growth Partnership", desc: "I run implementation and optimisation myself; scope is tailored to your needs." },
      ];

  return (
    <section className="py-12 md:py-20">
      <div className="container-custom">
        <div className="card grid gap-8 p-6 md:grid-cols-2 md:gap-12 md:p-10">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 md:text-sm">
              {isTr ? "Ücretsiz · Taahhütsüz" : "Free · No commitment"}
            </p>
            <h2 className="font-display text-2xl font-bold leading-tight text-white md:text-4xl">
              {isTr ? "SEO + GEO + Dönüşüm " : "SEO + GEO + Conversion "}
              <span className="text-gradient">{isTr ? "Ön Analizi" : "Pre-Audit"}</span>
            </h2>
            <p className="mt-3 leading-relaxed text-primary-300">
              {isTr
                ? "Müşterileriniz artık yalnızca Google'da değil, yapay zekaya sorarak da arıyor. Sitenizin adresini gönderin; üç cephede de nerede kaybettiğinizi birkaç iş günü içinde yazılı iletiyorum."
                : "Your customers no longer search only on Google — they ask AI too. Send your site address and within a few business days I'll show you, in writing, where you're losing on all three fronts."}
            </p>
            <ul className="mt-5 space-y-2.5">
              {includes.map((i) => (
                <li key={i} className="flex gap-2.5 text-primary-200">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                  {i}
                </li>
              ))}
            </ul>
            <Link href={preAuditPath(loc)} className="btn-primary group mt-7 w-full sm:w-auto">
              {isTr ? "Ücretsiz Ön Analiz Al" : "Get a Free Pre-Audit"}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="border-t border-surface-border/40 pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">
              {isTr ? "Nasıl Başlıyoruz" : "How We Start"}
            </p>
            <ol className="mt-5 space-y-6">
              {model.map((m) => (
                <li key={m.step} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-500/10 font-display font-bold text-accent-400 ring-1 ring-accent-500/30">
                    {m.step}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-white">{m.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-primary-300">{m.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
