import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { offers } from "@/lib/offers";
import type { Locale, OfferKey } from "@/lib/cases";

/**
 * Hizmetler (2026-11) — sayfanın tek AÇIK zeminli bölümü (ritim kırılması).
 * İkonlu kart grid'i yerine numaralı satırlar; AI Otomasyon en üstte siyah "öne çıkan" satır
 * (alt hizmetler + AI Eğitimi linki). Her satırın sağında ilgili gerçek proje görseli (masaüstü).
 * SEO & GEO satırında ayrı GEO linki korunur.
 */
const thumbs: Record<OfferKey, string> = {
  "ai-growth": "/portfolio/251295211.webp",
  "seo-geo": "/portfolio/251295577.webp",
  "ux-conversion": "/portfolio/139240279.webp",
  social: "/portfolio/73081745.webp",
  "ai-ads": "/portfolio/83025685.webp",
};

const tags: Record<OfferKey, { tr: string; en: string }> = {
  "ai-growth": { tr: "", en: "" },
  "seo-geo": { tr: "Teknik SEO · İçerik stratejisi · AI görünürlüğü", en: "Technical SEO · Content strategy · AI visibility" },
  "ux-conversion": { tr: "UX araştırma · Arayüz tasarımı · Dönüşüm optimizasyonu", en: "UX research · Interface design · Conversion optimization" },
  social: { tr: "Strateji · İçerik takvimi · Topluluk yönetimi", en: "Strategy · Content calendar · Community management" },
  "ai-ads": { tr: "Google Ads · Meta Ads · YouTube · Dönüşüm takibi", en: "Google Ads · Meta Ads · YouTube · Conversion tracking" },
};

export default function Offers({ locale }: { locale: string }) {
  const loc = (locale === "tr" ? "tr" : "en") as Locale;
  const isTr = loc === "tr";
  const featured = offers.find((o) => o.featured);
  const rest = offers.filter((o) => !o.featured);
  const geoHref = isTr ? "/hizmetler/geo-optimizasyonu" : "/en/services/geo-optimization";
  const trainingHref = isTr ? "/ai-egitimi" : "/en/ai-training";

  return (
    <section id="services" className="scroll-mt-20 bg-surface-paper py-20 text-primary-950 md:py-28">
      <div className="container-custom">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">{isTr ? "Hizmetler" : "Services"}</h2>
          <p className="max-w-xl text-lg leading-relaxed text-primary-700">
            {isTr
              ? "Ürün, tasarım ve büyümeyi ayrı ajanslara bölmeden tek elden yürütüyorum. Nereden başlayacağımıza ilk görüşmede birlikte karar veririz."
              : "Product, design and growth run from one place instead of being split across agencies. We decide where to start together in the first call."}
          </p>
        </div>

        <div className="border-t border-primary-950">
          {featured && (
            <div className="my-4 grid gap-6 rounded bg-primary-950 p-6 text-primary-100 md:p-9 lg:grid-cols-[56px_1fr_1.15fr_132px] lg:gap-8">
              <span className="pt-1 text-sm font-semibold text-accent-400">01</span>
              <div>
                <p className="mb-2 text-[13px] font-semibold text-accent-400">{isTr ? "Öne çıkan hizmet" : "Featured service"}</p>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-white md:text-[2rem] md:leading-tight">
                  {featured.name[loc]}
                </h3>
                {featured.highlights && (
                  <p className="mt-3 text-sm leading-relaxed text-primary-400">{featured.highlights[loc].join(" · ")}</p>
                )}
              </div>
              <div>
                <p className="text-[17px] leading-relaxed text-primary-300">{featured.value[loc]}</p>
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
                  <Link href={featured.href[loc]} className="inline-flex items-center gap-1.5 border-b border-accent-500 pb-0.5 font-semibold text-white">
                    {isTr ? "AI otomasyon detayı" : "AI automation details"}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href={trainingHref} className="pb-0.5 font-medium text-primary-300 transition-colors hover:text-white">
                    {isTr ? "Ekibiniz için AI eğitimi" : "AI training for your team"}
                  </Link>
                </div>
              </div>
              <div className="relative hidden aspect-[640/501] overflow-hidden rounded lg:block">
                <Image src={thumbs[featured.key]} alt="" fill sizes="132px" className="object-cover" />
              </div>
            </div>
          )}

          {rest.map((o, i) => (
            <div key={o.key} className="group relative grid gap-3 border-b border-primary-200 py-8 lg:grid-cols-[56px_1fr_1.15fr_132px] lg:gap-8">
              <span className="pt-1 text-sm text-primary-600">{String(i + 2).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight">
                  <Link href={o.href[loc]} className="after:absolute after:inset-0 group-hover:text-accent-700">
                    {o.name[loc]}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-600">{tags[o.key][loc]}</p>
              </div>
              <div>
                <p className="text-base leading-relaxed text-primary-700">{o.value[loc]}</p>
                {o.key === "seo-geo" && (
                  <Link href={geoHref} className="relative z-10 mt-3 inline-block text-sm font-medium text-primary-950 underline underline-offset-4 hover:text-accent-700">
                    {isTr ? "GEO optimizasyonu detayı" : "GEO optimization details"}
                  </Link>
                )}
              </div>
              <div className="relative hidden aspect-[640/501] overflow-hidden rounded lg:block">
                <Image src={thumbs[o.key]} alt="" fill sizes="132px" className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
