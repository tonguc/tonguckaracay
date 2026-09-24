import { Quote } from "lucide-react";
import type { Locale } from "@/lib/cases";

/**
 * Müşteri yorumları. KURAL: sadece gerçek, izinli yorumlar (isim + şirket + sonuç cümlesi).
 * Liste boşken bölüm hiç render edilmez. Uydurma yorum ekleme.
 */
interface Testimonial {
  quote: Record<Locale, string>;
  name: string;
  company: string;
  result?: Record<Locale, string>;
}

const testimonials: Testimonial[] = [];

export default function Testimonials({ locale }: { locale: string }) {
  const loc = (locale === "tr" ? "tr" : "en") as Locale;
  if (testimonials.length === 0) return null;

  return (
    <section className="py-12 md:py-20">
      <div className="container-custom">
        <h2 className="section-title mb-8 text-center md:mb-12">
          {loc === "tr" ? "Müşterilerim " : "What Clients "}
          <span className="text-gradient">{loc === "tr" ? "Ne Diyor" : "Say"}</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="card flex flex-col p-6">
              <Quote className="h-5 w-5 text-accent-500" />
              <blockquote className="mt-3 flex-1 leading-relaxed text-primary-200">{t.quote[loc]}</blockquote>
              {t.result && <p className="mt-4 text-sm font-semibold text-accent-400">{t.result[loc]}</p>}
              <figcaption className="mt-4 text-sm">
                <span className="font-semibold text-white">{t.name}</span>
                <span className="text-primary-400"> · {t.company}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
