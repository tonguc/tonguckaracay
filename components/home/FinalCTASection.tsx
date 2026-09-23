import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, CheckCircle2 } from "lucide-react";

interface Props {
  locale: string;
}

/**
 * Bölüm 9 — Büyük premium final CTA.
 * Zenginleştirilmiş: iki aksiyon (görüşme + e-posta), güven satırı,
 * profil imzası ve daha katmanlı arka plan — tek buton + düz metinden
 * daha vurucu, daha kişisel bir kapanış.
 */
export default function FinalCTASection({ locale }: Props) {
  const isTr = locale === "tr";
  const contactPath = isTr ? "/iletisim" : "/en/contact";

  const trustPoints = isTr
    ? ["25+ Yıl Deneyim", "Ücretsiz İlk Görüşme", "Taahhüt Yok"]
    : ["25+ Years Experience", "Free First Consultation", "No Commitment"];

  return (
    <section className="py-14 md:py-24">
      <div className="container-custom">
        <div className="card relative overflow-hidden p-8 text-center md:p-16">
          {/* Katmanlı gradient + blob arka plan */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-500/15 via-transparent to-indigo-500/10" />
          <div className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent-500/10 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] bg-[size:24px_24px]" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <div className="mx-auto mb-6 flex w-fit items-center gap-3 rounded-full border border-surface-border/60 bg-surface-darker/40 py-1.5 pl-1.5 pr-4 backdrop-blur-sm">
              <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full ring-1 ring-accent-500/30">
                <Image
                  src="/tonguckaracay-ux-seo-ai.png"
                  alt="Tonguç Karaçay"
                  fill
                  sizes="32px"
                  className="object-cover"
                  style={{ transform: "scale(1.7)", transformOrigin: "50% 14%" }}
                />
              </div>
              <span className="text-xs font-medium text-primary-300">
                {isTr ? "Tonguç Karaçay ile doğrudan görüşün" : "Talk directly with Tonguç Karaçay"}
              </span>
            </div>

            <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
              {isTr ? "İşinizi " : "Let's Grow "}
              <span className="text-gradient">{isTr ? "Büyütelim" : "Your Business"}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-primary-300 md:text-lg">
              {isTr
                ? "Ücretsiz bir görüşme planlayın; UX, SEO, GEO, sosyal medya, e-ticaret ve yapay zeka alanlarında büyüme fırsatlarınızı birlikte keşfedelim."
                : "Schedule a free consultation and discover growth opportunities across UX, SEO, GEO, social media, e-commerce and AI."}
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={contactPath} className="btn-primary group w-full text-base sm:w-auto md:text-lg">
                {isTr ? "Ücretsiz Görüşme Al" : "Book Free Consultation"}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="mailto:info@tonguckaracay.com"
                className="btn-secondary group w-full text-base sm:w-auto md:text-lg"
              >
                {isTr ? "E-posta Gönder" : "Send an Email"}
                <Mail className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-surface-border/40 pt-6">
              {trustPoints.map((point) => (
                <span key={point} className="inline-flex items-center gap-1.5 text-sm text-primary-400">
                  <CheckCircle2 className="h-4 w-4 text-accent-500" />
                  {point}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
