import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  locale: string;
}

/**
 * Kişisel hikaye (2026-11): gerçek fotoğraf (public/tonguc-karacay-portre.jpg, kesik/cutout değil) + sade liste.
 * Önceki: Bölüm 8 — Kişisel Hikaye. Büyük portre + timeline.
 */
export default function PersonalStory({ locale }: Props) {
  const isTr = locale === "tr";
  const aboutPath = isTr ? "/hakkimda" : "/en/about";

  // Kariyer ve liderlik perspektifi: bağımsız danışmanlık hizmeti teklifi değil, CV odaklı özet.
  const timeline = isTr
    ? [
        { period: "Dijital Ürün & UX Liderliği", desc: "B2B SaaS, e-ticaret ve kurumsal platformlarda kullanıcı deneyimi stratejisi, tasarım sistemleri ve ürün ekiplerine liderlik." },
        { period: "AI Ürünleri & İnovasyon", desc: "AI destekli ürün özellikleri, otomasyonlar ve karmaşık iş akışlarını fikir aşamasından canlı ortama taşıma." },
        { period: "Dijital Büyüme & Analitik", desc: "SEO, GEO, performans pazarlaması ve dönüşüm optimizasyonunu veriyle ve ürün hedefleriyle buluşturma." },
        { period: "Strateji & Ekip Yönetimi", desc: "Disiplinler arası ekiplerin yönetimi, ürün yol haritası, önceliklendirme ve uçtan uca teslim süreçleri." },
      ]
    : [
        { period: "Digital Product & UX Leadership", desc: "Leading user experience strategy, design systems and product teams across B2B SaaS, e-commerce and enterprise platforms." },
        { period: "AI Products & Innovation", desc: "Taking AI-powered product features, automation and complex workflows from concept through production." },
        { period: "Digital Growth & Analytics", desc: "Connecting SEO, GEO, performance marketing and conversion optimization to product goals and measurable insights." },
        { period: "Strategy & Team Leadership", desc: "Leading cross-functional teams, product roadmaps, prioritization and end-to-end delivery." },
      ];

  return (
    <section id="hakkimda" className="bg-surface-dark py-20 md:py-28">
      <div className="container-custom grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded bg-surface-card lg:max-w-none">
          <Image
            src="/tonguc-karacay-portre.jpg"
            alt={isTr ? "Tonguç Karaçay" : "Tonguç Karaçay"}
            fill
            sizes="(max-width: 1024px) 90vw, 520px"
            className="object-cover object-[50%_35%] saturate-[0.85]"
          />
        </div>
        <div>
          <h2 className="section-title">Tonguç Karaçay</h2>
          <p className="max-w-xl text-[17px] leading-relaxed text-primary-300 md:text-lg">
            {isTr
              ? "26 yılı aşkın süredir dijital ürün, UX ve büyüme işlerini yönetiyorum. Türkiye’nin önde gelen kurumsal şirketlerinin yanı sıra ABD, Kanada ve Almanya’daki firmalarla çalıştım. Bugün aynı deneyimi yapay zeka ürünlerine ve otomasyonlarına taşıyorum."
              : "For over 26 years I have led digital product, UX and growth work, for leading Turkish enterprises as well as companies in the US, Canada and Germany. Today I bring the same experience to AI products and automation."}
          </p>
          <ul className="mt-8 border-b border-surface-border">
            {timeline.map((t) => (
              <li key={t.period} className="border-t border-surface-border py-4">
                <h3 className="font-semibold text-white">{t.period}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-primary-300">{t.desc}</p>
              </li>
            ))}
          </ul>
          <Link href={aboutPath} className="mt-7 inline-flex items-center gap-1.5 border-b border-accent-500 pb-0.5 font-semibold text-white">
            {isTr ? "Kariyerimi incele" : "Explore my background"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
