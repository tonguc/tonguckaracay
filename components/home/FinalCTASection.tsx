import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { preAuditPath } from "@/lib/offers";
import type { Locale } from "@/lib/cases";

interface Props {
  locale: string;
}

/**
 * Final CTA (2026-11) — sayfanın tek tam turuncu bandı, siyah metin.
 * Eski PreAudit bölümünün "ilk görüşmede konuştuklarımız" maddeleri buraya taşındı
 * (iletişim öncesi kaygıyı azaltır). Birincil aksiyon: taahhütsüz ön değerlendirme (preAuditPath).
 * WhatsApp: layout'taki yüzen buton (WhatsAppFloat) ile aynı numara.
 */
export default function FinalCTASection({ locale }: Props) {
  const loc = (locale === "tr" ? "tr" : "en") as Locale;
  const isTr = loc === "tr";
  const waText = isTr ? "Merhaba Tonguç, web siteniz üzerinden yazıyorum." : "Hi Tonguç, I'm reaching out from your website.";
  const waHref = `https://wa.me/905323824838?text=${encodeURIComponent(waText)}`;

  const includes = isTr
    ? [
        "Ürün ve kullanıcı deneyimindeki kritik müşteri yolculukları",
        "Yapay zeka ile otomasyon ve karar destek fırsatları",
        "Analitik, ölçüm ve dönüşüm darboğazları",
        "Önceliklerin belirlenmesi ve ilk adımlar",
      ]
    : [
        "Critical customer journeys in your product and user experience",
        "AI automation and decision-support opportunities",
        "Analytics, measurement gaps and conversion friction",
        "Agreeing on priorities and first steps",
      ];

  return (
    <section className="bg-accent-500 py-20 text-primary-950 md:py-28">
      <div className="container-custom flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-5xl font-semibold leading-[1] tracking-[-0.04em] md:text-7xl">
            {isTr ? "Projenizi konuşalım." : "Let’s talk about your project."}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-900">
            {isTr
              ? "İlk görüşme taahhütsüz. Ürününüzü, hedefinizi ve önceliklerinizi dinler, nereden başlamanın mantıklı olduğunu konuşuruz. Genellikle 24 saat içinde yanıt veriyorum."
              : "The first call comes with no commitment. I listen to your product, goals and priorities, and we work out where it makes sense to start. I usually reply within 24 hours."}
          </p>
          <p className="mb-3 mt-8 text-[15px] font-semibold">{isTr ? "İlk görüşmede konuştuklarımız" : "What we cover in the first call"}</p>
          <ul className="border-b border-primary-950/25 text-base leading-normal text-primary-900">
            {includes.map((i) => (
              <li key={i} className="border-t border-primary-950/25 py-3">
                {i}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href={preAuditPath(loc)}
            className="inline-flex min-h-[56px] items-center gap-2 rounded bg-primary-950 px-7 font-semibold text-primary-100 transition-colors hover:bg-primary-800"
          >
            {isTr ? "Ön değerlendirme talep et" : "Request an initial review"}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="mailto:tonguckaracay@gmail.com"
            className="inline-flex min-h-[56px] items-center rounded border-[1.5px] border-primary-950 px-6 font-semibold transition-colors hover:bg-primary-950/10"
          >
            {isTr ? "E-posta gönder" : "Send an email"}
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[56px] items-center rounded border-[1.5px] border-primary-950 px-6 font-semibold transition-colors hover:bg-primary-950/10"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
