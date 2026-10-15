import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  locale: string;
}

/**
 * Bölüm 8 — Kişisel Hikaye. Büyük portre + timeline.
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
    <section className="overflow-x-clip py-14 md:py-24">
      <div className="container-custom">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Portre — saydam cutout; kutu yok, yumuşak ışık zemini + alta erime (editoryal his) */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            {/* Derinlik için yumuşak ışık zemini (düz siyah kutu yerine) */}
            <div className="absolute left-1/2 top-1/2 h-[120%] w-[118%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_50%_38%,rgba(219,116,32,0.18),rgba(99,102,241,0.06)_45%,transparent_68%)] blur-2xl" />
            <div className="absolute inset-x-8 bottom-4 h-44 rounded-[45%] bg-accent-500/10 blur-3xl" />
            {/* Figür: kareyle letterbox yok, alt kenar sayfaya erir */}
            <div className="relative aspect-square">
              <Image
                src="/tonguckaracay-ux-seo-ai.png"
                alt={isTr ? "Tonguç Karaçay — Dijital Ürün ve UX Liderliği" : "Tonguç Karaçay — Digital Product and UX Leadership"}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-contain object-bottom drop-shadow-2xl"
                style={{
                  WebkitMaskImage: "linear-gradient(to bottom, #000 80%, transparent 100%)",
                  maskImage: "linear-gradient(to bottom, #000 80%, transparent 100%)",
                }}
              />
            </div>
          </div>

          {/* Hikaye + timeline */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400 md:text-sm">
              {isTr ? "Hakkımda" : "About Me"}
            </p>
            <h2 className="section-title">
              {isTr ? "Tonguç " : "Meet Tonguç "}
              <span className="text-gradient">Karaçay</span>
            </h2>
            <p className="mt-3 max-w-xl leading-relaxed text-primary-300">
              {isTr
                ? "26 yılı aşkın deneyimimle kurumsal dijital platformlar, B2B SaaS ve e-ticaret alanlarında ürün, kullanıcı deneyimi ve büyüme stratejilerine liderlik ettim. Tasarımı, analitiği ve yapay zekayı güçlü ekiplerle birlikte ölçülebilir dijital ürünlere dönüştürmeye odaklanıyorum."
                : "With over 26 years of experience, I have led product, UX and growth initiatives across enterprise digital platforms, B2B SaaS and e-commerce. My focus is aligning design, analytics and AI with strong teams to deliver measurable digital product outcomes."}
            </p>

            {/* Timeline */}
            <div className="mt-8 space-y-6 border-l border-surface-border/60 pl-6">
              {timeline.map((t) => (
                <div key={t.period} className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-accent-500 ring-4 ring-surface-darker" />
                  <h3 className="font-display font-semibold text-white">{t.period}</h3>
                  <p className="mt-1 text-sm text-primary-400">{t.desc}</p>
                </div>
              ))}
            </div>

            <Link href={aboutPath} className="btn-primary group mt-9">
              {isTr ? "Kariyerimi İncele" : "Explore My Background"}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
