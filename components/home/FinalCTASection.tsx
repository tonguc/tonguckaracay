import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  locale: string;
}

/**
 * Bölüm 9 — Büyük premium final CTA. İki aksiyon: ücretsiz görüşme + mesaj gönder.
 */
export default function FinalCTASection({ locale }: Props) {
  const isTr = locale === "tr";
  const contactPath = isTr ? "/iletisim" : "/en/contact";

  return (
    <section className="py-14 md:py-24">
      <div className="container-custom">
        <div className="card relative overflow-hidden p-8 text-center md:p-16">
          {/* Gradient + blob arka plan */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-500/15 via-transparent to-indigo-500/10" />
          <div className="pointer-events-none absolute -bottom-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent-500/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
              {isTr ? "İşinizi " : "Let's Grow "}
              <span className="text-gradient">{isTr ? "Büyütelim" : "Your Business"}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-primary-300 md:text-lg">
              {isTr
                ? "Ücretsiz bir görüşme planlayın; UX, SEO, yapay zeka ve dijital pazarlamada büyüme fırsatlarınızı birlikte keşfedelim."
                : "Schedule a free consultation and discover growth opportunities in UX, SEO, AI and digital marketing."}
            </p>

            <div className="mt-9 flex justify-center">
              <Link href={contactPath} className="btn-primary group text-base md:text-lg">
                {isTr ? "Ücretsiz Görüşme Al" : "Book Free Consultation"}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
