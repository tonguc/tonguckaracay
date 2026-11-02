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
        "Ürün: kullanıcı deneyimi ve kritik müşteri yolculukları",
        "AI: otomasyon ve karar destek fırsatları",
        "Analitik: ölçüm ve dönüşüm darboğazları",
        "İlk görüşmede önceliklerin belirlenmesi",
      ]
    : [
        "Product: user experience and critical customer journeys",
        "AI: automation and decision-support opportunities",
        "Analytics: measurement gaps and conversion friction",
        "Identifying initial priorities during the discussion",
      ];
  const model = isTr
    ? [
        { step: "1", title: "İlk Değerlendirme", desc: "İhtiyacı kısa bir görüşmeyle netleştirip ilk fırsatları değerlendiriyoruz." },
        { step: "2", title: "Yol Haritası", desc: "Ürün ve iş hedeflerine göre önceliklendirilmiş çalışma kapsamı." },
        { step: "3", title: "Ürün ve Uygulama İş Birliği", desc: "Ürün, UX ve AI uygulamalarının ilgili ekiplerle koordinasyonu." },
      ]
    : [
        { step: "1", title: "Initial Discussion", desc: "A short conversation to understand needs and identify initial opportunities." },
        { step: "2", title: "Roadmap", desc: "A prioritized product roadmap and scope aligned with business needs." },
        { step: "3", title: "Product & Delivery Collaboration", desc: "Coordinating product, UX and AI delivery with relevant teams." },
      ];

  return (
    <section className="py-12 md:py-20">
      <div className="container-custom">
        <div className="card grid gap-8 p-6 md:grid-cols-2 md:gap-12 md:p-10">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 md:text-sm">
              {isTr ? "İlk Görüşme · Taahhütsüz" : "Initial Discussion · No Commitment"}
            </p>
            <h2 className="font-display text-2xl font-bold leading-tight text-white md:text-4xl">
              {isTr ? "Dijital Ürün ve AI " : "Digital Product & AI "}
              <span className="text-gradient">{isTr ? "Ön Değerlendirme" : "Initial Review"}</span>
            </h2>
            <p className="mt-3 leading-relaxed text-primary-300">
              {isTr
                ? "Dijital ürün, kullanıcı deneyimi veya AI dönüşümü ihtiyacınızı paylaşın; uygulanabilir fırsatları birlikte netleştirelim."
                : "Share your digital product, UX or AI needs. We can start by clarifying goals and evaluating practical opportunities together."}
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
              {isTr ? "Ön Değerlendirme Talep Et" : "Request an Initial Review"}
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
