"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

/**
 * Bölüm 6 — Testimonials carousel.
 * NOT: Gerçek müşteri foto/isimleri eklenene kadar PLACEHOLDER.
 * Uydurma kişi adı/fotoğrafı kullanılmaz — rol + sektör etiketi ve baş harf avatarı.
 * Gerçek yorumlar gelince `items` dizisi güncellenecek.
 */
type Item = { quote: string; role: string; initials: string };

export default function Testimonials() {
  const locale = useLocale();
  const isTr = locale === "tr";

  const items: Item[] = isTr
    ? [
        {
          quote:
            "Dönüşüm odaklı bakışı oyunu değiştirdi. Aynı reklam bütçesiyle ölçülebilir şekilde daha fazla nitelikli görüşme almaya başladık.",
          role: "Pazarlama Direktörü · E-Ticaret Markası",
          initials: "ET",
        },
        {
          quote:
            "SEO tarafında yıllardır takıldığımız teknik sorunları haftalar içinde çözdü; organik trafiğimiz istikrarlı şekilde büyüdü.",
          role: "Kurucu · B2B SaaS",
          initials: "SA",
        },
        {
          quote:
            "Yapay zekayı gösteriş için değil, gerçek iş akışlarını otomatikleştirmek için kurdu. Ekip zamanının önemli kısmını geri kazandı.",
          role: "Operasyon Lideri · Hizmet Şirketi",
          initials: "OL",
        },
      ]
    : [
        {
          quote:
            "His conversion-first thinking changed the game. With the same ad budget we now get measurably more qualified consultations.",
          role: "Marketing Director · E-commerce Brand",
          initials: "EB",
        },
        {
          quote:
            "He cleared technical SEO issues we'd been stuck on for years within weeks; our organic traffic grew steadily afterward.",
          role: "Founder · B2B SaaS",
          initials: "SA",
        },
        {
          quote:
            "He built AI for real workflow automation, not for show. Our team reclaimed a meaningful chunk of its time.",
          role: "Operations Lead · Services Company",
          initials: "OL",
        },
      ];

  const [idx, setIdx] = useState(0);
  const total = items.length;
  const go = (d: number) => setIdx((p) => (p + d + total) % total);
  const item = items[idx];

  return (
    <section className="py-14 md:py-24">
      <div className="container-custom">
        <div className="mb-10 text-center md:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400 md:text-sm">
            {isTr ? "Referanslar" : "Testimonials"}
          </p>
          <h2 className="section-title mx-auto">
            {isTr ? "Müşterilerin " : "What Clients "}
            <span className="text-gradient">{isTr ? "Söyledikleri" : "Say"}</span>
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="card relative p-8 md:p-12">
            <Quote className="absolute right-8 top-8 h-12 w-12 text-accent-500/15" />

            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent-500 text-accent-500" />
              ))}
            </div>

            <blockquote className="mt-6 text-lg font-medium leading-relaxed text-primary-100 md:text-2xl">
              “{item.quote}”
            </blockquote>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-500/15 font-display font-bold text-accent-400">
                  {item.initials}
                </div>
                <div className="text-sm text-primary-300 md:text-base">{item.role}</div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label={isTr ? "Önceki" : "Previous"}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-border text-primary-300 transition-colors hover:border-accent-500/50 hover:text-accent-400"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label={isTr ? "Sonraki" : "Next"}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-border text-primary-300 transition-colors hover:border-accent-500/50 hover:text-accent-400"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIdx(i)}
                aria-label={`${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === idx ? "w-6 bg-accent-500" : "w-2 bg-surface-border hover:bg-primary-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
