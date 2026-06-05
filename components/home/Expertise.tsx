import Link from "next/link";
import { ArrowRight, Palette, Search, Megaphone, Bot } from "lucide-react";

interface Props {
  locale: string;
}

/**
 * Bölüm 4 — Uzmanlık. 4 büyük servis kartı, hizmet değil SONUÇ odaklı.
 */
export default function Expertise({ locale }: Props) {
  const isTr = locale === "tr";

  const cards = isTr
    ? [
        {
          icon: Palette,
          title: "UX & CRO",
          outcome: "Kullanıcı yolculuklarını ve dönüşüm oranlarını iyileştirin.",
          href: "/hizmetler/ui-ux-tasarim",
        },
        {
          icon: Search,
          title: "SEO & İçerik Stratejisi",
          outcome: "Sürdürülebilir, bileşik büyüyen organik trafik üretin.",
          href: "/hizmetler/seo-danismanligi",
        },
        {
          icon: Megaphone,
          title: "Dijital Reklamcılık",
          outcome: "Google Ads ve ölçeklenebilir ücretli edinme sistemleri kurun.",
          href: "/hizmetler/online-reklamcilik",
        },
        {
          icon: Bot,
          title: "AI İş Sistemleri",
          outcome: "İş akışlarını otomatikleştirin, verimliliği ve marjı artırın.",
          href: "/hizmetler/yapay-zeka-cozumleri",
        },
      ]
    : [
        {
          icon: Palette,
          title: "UX & CRO",
          outcome: "Improve user journeys and lift conversion rates.",
          href: "/en/services/ui-ux-design",
        },
        {
          icon: Search,
          title: "SEO & Content Strategy",
          outcome: "Generate sustainable, compounding organic growth.",
          href: "/en/services/seo-consulting",
        },
        {
          icon: Megaphone,
          title: "Digital Advertising",
          outcome: "Build Google Ads and scalable paid acquisition systems.",
          href: "/en/services/online-advertising",
        },
        {
          icon: Bot,
          title: "AI Business Systems",
          outcome: "Automate workflows and increase efficiency and margin.",
          href: "/en/services/ai-solutions",
        },
      ];

  return (
    <section id="expertise" className="py-14 md:py-24">
      <div className="container-custom">
        <div className="mb-10 text-center md:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400 md:text-sm">
            {isTr ? "Uzmanlık" : "Expertise"}
          </p>
          <h2 className="section-title mx-auto">
            {isTr ? "Şirketleri Nasıl " : "How I Help "}
            <span className="text-gradient">{isTr ? "Büyütüyorum" : "Companies Grow"}</span>
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:gap-7">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <Link
                key={c.title}
                href={c.href}
                className="card group relative flex flex-col overflow-hidden p-7 md:p-9"
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-500/5 blur-2xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-0" />
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent-500/20">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="relative z-10 mt-5 font-display text-xl font-bold text-white transition-colors group-hover:text-accent-400 md:text-2xl">
                  {c.title}
                </h3>
                <p className="relative z-10 mt-3 flex-1 text-primary-300">{c.outcome}</p>
                <span className="relative z-10 mt-6 inline-flex items-center gap-1.5 font-semibold text-accent-400">
                  {isTr ? "Detaylar" : "Learn more"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
