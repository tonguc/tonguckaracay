import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Globe, MapPin, Linkedin, Search, MousePointerClick, Cpu, Share2, Megaphone, Sparkles } from "lucide-react";
import { offers } from "@/lib/offers";
import { portfolio } from "@/lib/portfolio";
import { casesPath, type Locale, type OfferKey } from "@/lib/cases";

/**
 * Hakkımda / About — TR ve EN tek bileşen.
 * Uzmanlık alanları lib/offers.ts'ten (güncel 5 hizmet + GEO) gelir; "Çalıştığım Firmalar"
 * Behance kapaklarıyla portfolyo kartı olarak gösterilir (lib/portfolio.ts).
 */
const icons: Record<OfferKey, typeof Search> = {
  "seo-geo": Search,
  "ux-conversion": MousePointerClick,
  "ai-growth": Cpu,
  social: Share2,
  "ai-ads": Megaphone,
};

// Marka portfolyosu — [portfolio id, marka adı]
const brandWork: [string, string][] = [
  ["73080587", "Türk Hava Yolları"],
  ["139240279", "BMW"],
  ["83026455", "BMW Online"],
  ["83025685", "MINI"],
  ["83026773", "Jaguar"],
  ["83025545", "Land Rover"],
  ["83863797", "Borusan Otomotiv"],
  ["73080939", "Galatasaray"],
  ["18576975", "Fotomaç"],
  ["18576093", "Sabah"],
  ["18577009", "ATV"],
  ["18577051", "A Haber"],
  ["130734383", "Hürriyet Bigpara"],
  ["125628811", "Kayseri Cüzdan"],
  ["186196915", "Sigorta 7"],
];

const moreBrands = [
  "Star", "Sabah USA", "A Spor", "Güneş", "Takvim", "Akşam", "Yeni Asır", "24 TV", "360 TV", "Radyo Turkuvaz",
  "Alem FM", "Aktüel", "Ağaoğlu My Life", "Asis", "Burulaş", "LiveDoctor", "Callhealer",
  "Network Hardwares", "Leman", "Eva", "Otohaber",
];

export default function AboutPage({ locale }: { locale: Locale }) {
  const isTr = locale === "tr";
  const contactPath = isTr ? "/iletisim" : "/en/contact";
  const homePath = isTr ? "/" : "/en";
  const geoHref = isTr ? "/hizmetler/geo-optimizasyonu" : "/en/services/geo-optimization";

  const stats = [
    { value: "25+", label: isTr ? "Yıl Deneyim" : "Years of Experience" },
    { value: "500+", label: isTr ? "Teslim Edilen Proje" : "Projects Delivered" },
    { value: "100+", label: isTr ? "Marka" : "Brands" },
    { value: "12+", label: isTr ? "Ülke" : "Countries" },
  ];

  const work = brandWork
    .map(([id, brand]) => ({ brand, item: portfolio.find((p) => p.id === id) }))
    .filter((w): w is { brand: string; item: (typeof portfolio)[number] } => Boolean(w.item));

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <nav className="mb-6 flex items-center gap-2 text-sm text-primary-400">
                <Link href={homePath} className="transition-colors hover:text-white">{isTr ? "Ana Sayfa" : "Home"}</Link>
                <span>/</span>
                <span className="text-white">{isTr ? "Hakkımda" : "About"}</span>
              </nav>
              <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-white md:text-5xl">
                {isTr ? "Merhaba, Ben " : "Hi, I'm "}
                <span className="text-gradient">Tonguç Karaçay</span>
              </h1>
              <p className="mb-5 text-lg leading-relaxed text-primary-200 md:text-xl">
                {isTr
                  ? "25 yılı aşkın süredir dijital ürün tasarlıyor ve büyütüyorum. Bugün e-ticaret ve hizmet şirketlerine UX, SEO/GEO ve yapay zekayla trafik ve gelir büyümesi sağlıyorum."
                  : "I've been designing and growing digital products for over 25 years. Today I help e-commerce and service businesses grow traffic and revenue through UX, SEO/GEO and AI."}
              </p>
              <p className="mb-5 leading-relaxed text-primary-300">
                {isTr
                  ? "Kariyerime Türkiye'nin en büyük medya gruplarında, ulusal TV kanalları ve gazete sitelerinin dijital ürünlerini tasarlayarak başladım. Ardından Türk Hava Yolları, BMW, MINI, Jaguar, Land Rover ve Borusan Otomotiv gibi markalarla çalıştım; Türkiye'nin yanı sıra ABD, Kanada ve Almanya'daki firmalara hizmet verdim."
                  : "I started my career at Turkey's largest media groups, designing digital products for national TV channels and newspaper sites. I went on to work with brands such as Turkish Airlines, BMW, MINI, Jaguar, Land Rover and Borusan Otomotiv, serving companies in Turkey as well as the US, Canada and Germany."}
              </p>
              <p className="mb-8 leading-relaxed text-primary-300">
                {isTr
                  ? "Ajans değilim: stratejiyi kuran da, koda, SEO'ya ve reklam hesaplarına bizzat giren de benim. Yapay zekayı vitrin süsü olarak değil, ölçülebilir iş sonucu üreten bir kaldıraç olarak kullanıyorum."
                  : "I'm not an agency: the person who sets the strategy is the same person who gets into the code, the SEO and the ad accounts. I use AI not as decoration but as leverage that produces measurable business results."}
              </p>
              <div className="mb-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-primary-300">
                  <MapPin className="h-5 w-5 text-accent-400" />
                  <span>{isTr ? "İstanbul, Türkiye" : "Istanbul, Turkey"}</span>
                </div>
                <div className="flex items-center gap-2 text-primary-300">
                  <Globe className="h-5 w-5 text-accent-400" />
                  <span>{isTr ? "Uzaktan, dünya genelinde" : "Remote, worldwide"}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href={contactPath} className="btn-primary group">
                  {isTr ? "İletişime Geç" : "Get in Touch"}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a href="https://www.linkedin.com/in/tongu%C3%A7-kara%C3%A7ay-36311040/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
                <a href="https://www.behance.net/tonguc" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  <ArrowUpRight className="mr-2 h-4 w-4" />
                  Behance
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative mx-auto max-w-md">
                <div className="absolute inset-0 rotate-3 transform rounded-2xl bg-gradient-to-br from-accent-500/20 to-indigo-500/20" />
                <div className="absolute inset-0 -rotate-3 transform rounded-2xl border border-surface-border bg-surface-card" />
                <div className="relative overflow-hidden rounded-2xl border border-surface-border">
                  <Image src="/tonguc-karacay.jpg" alt="Tonguç Karaçay" width={500} height={500} className="h-auto w-full object-cover" priority />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-surface-border/60 bg-surface-card/50 p-5 text-center md:p-6">
                <div className="text-gradient font-display text-3xl font-extrabold md:text-5xl">{s.value}</div>
                <div className="mt-2 text-sm font-semibold text-white">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Uzmanlık alanları — güncel hizmetler */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="mb-10 text-center md:mb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400 md:text-sm">{isTr ? "Bugün Ne Yapıyorum" : "What I Do Today"}</p>
            <h2 className="section-title mx-auto">
              {isTr ? "Uzmanlık " : "Areas of "}
              <span className="text-gradient">{isTr ? "Alanlarım" : "Expertise"}</span>
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {offers.map((o) => {
              const Icon = icons[o.key];
              return (
                <Link
                  key={o.key}
                  href={o.href[locale]}
                  className={`card group flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 ${o.featured ? "border-violet-400/25" : ""}`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400 ring-1 ring-accent-500/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{o.name[locale]}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-primary-300">{o.value[locale]}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-400 transition-all group-hover:gap-2.5">
                    {isTr ? "Detay" : "Details"} <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
            <Link href={geoHref} className="card group flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400 ring-1 ring-accent-500/20">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-white">{isTr ? "GEO Optimizasyonu" : "GEO Optimization"}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-primary-300">
                {isTr
                  ? "Markanızın ChatGPT, Gemini ve Perplexity gibi yapay zeka aramalarında kaynak gösterilmesi ve önerilmesi."
                  : "Getting your brand cited and recommended in AI search such as ChatGPT, Gemini and Perplexity."}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-400 transition-all group-hover:gap-2.5">
                {isTr ? "Detay" : "Details"} <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Çalıştığım firmalar — portfolyo */}
      <section className="border-y border-surface-border/40 bg-surface-card/20 py-16 md:py-20">
        <div className="container-custom">
          <div className="mb-10 flex flex-col items-center gap-3 text-center md:flex-row md:items-end md:justify-between md:text-left">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400 md:text-sm">{isTr ? "Portfolyo" : "Portfolio"}</p>
              <h2 className="section-title">
                {isTr ? "Çalıştığım " : "Brands I've "}
                <span className="text-gradient">{isTr ? "Firmalar" : "Worked With"}</span>
              </h2>
            </div>
            <Link href={casesPath(locale)} className="inline-flex items-center gap-2 font-semibold text-accent-400 hover:text-accent-300">
              {isTr ? "Vakalar ve tüm portfolyo" : "Case studies & full portfolio"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {work.map(({ brand, item }) => (
              <li key={item.id}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-xl border border-surface-border/60 bg-surface-card/40 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-500/40"
                >
                  <div className="relative aspect-[404/316] overflow-hidden bg-surface-darker">
                    <Image
                      src={`/portfolio/${item.id}.webp`}
                      alt={`${brand} — ${item.title[locale]}`}
                      fill
                      sizes="(min-width: 1024px) 300px, (min-width: 640px) 33vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-display text-sm font-bold text-white group-hover:text-accent-300 md:text-base">{brand}</h3>
                    <p className="mt-0.5 line-clamp-1 text-[11px] text-primary-400 md:text-xs">{item.title[locale]}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">{isTr ? "ve daha fazlası" : "and more"}</p>
            <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2">
              {moreBrands.map((b) => (
                <span key={b} className="rounded-lg border border-surface-border px-3 py-1.5 text-xs text-primary-300 md:text-sm">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="card mx-auto max-w-3xl px-6 py-10 text-center md:py-12">
            <h2 className="mb-4 font-display text-3xl font-bold text-white md:text-4xl">{isTr ? "Birlikte Çalışalım" : "Let's Work Together"}</h2>
            <p className="mb-8 text-lg text-primary-300">
              {isTr
                ? "Sitenizi SEO, GEO ve dönüşüm açısından ücretsiz inceleyip en büyük fırsatları yazılı olarak iletiyorum."
                : "I'll review your site for SEO, GEO and conversion for free and send you the biggest opportunities in writing."}
            </p>
            <Link href={isTr ? "/iletisim?konu=on-analiz" : "/en/contact?topic=pre-audit"} className="btn-primary group px-8 py-4 text-lg">
              {isTr ? "Ücretsiz Ön Analiz Al" : "Get a Free Pre-Audit"}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
