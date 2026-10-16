import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Globe, MapPin, Linkedin, Layers, Users, Cpu, BarChart3 } from "lucide-react";
import { portfolio } from "@/lib/portfolio";
import { casesPath, type Locale } from "@/lib/cases";
import { countriesWithProjects, countriesWithProjectsCount } from "@/lib/geography";

/**
 * Hakkımda: kişisel kariyer, ürün ve ekip liderliği odaklı portfolyo.
 * Hizmet satışı, danışmanlık vaadi ve ücretsiz ön analiz CTA'sı bilerek yok.
 */
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

const earlyEmployers = ["Sabancı Holding", "MNG Holding", "Filli Boya"];
const laterEmployers = ["Borusan Otomotiv", "Asis", "Network Hardwares", "eva.guru"];

const moreBrands = [
  "Star", "Sabah USA", "A Spor", "Güneş", "Takvim", "Akşam", "Yeni Asır", "24 TV", "360 TV", "Radyo Turkuvaz",
  "Alem FM", "Aktüel", "Ağaoğlu My Life", "Burulaş", "LiveDoctor", "Callhealer",
  "Leman", "Otohaber",
];


const focusAreas = [
  {
    icon: Layers,
    title: { tr: "Dijital Ürün Stratejisi", en: "Digital Product Strategy" },
    description: {
      tr: "Ürün vizyonu, yol haritası, önceliklendirme ve fikirden yayına uzanan geliştirme sürecinin yönetimi.",
      en: "Product vision, roadmaps, prioritization and leading development from concept through launch.",
    },
  },
  {
    icon: Users,
    title: { tr: "UX ve Ekip Liderliği", en: "UX & Team Leadership" },
    description: {
      tr: "Kullanıcı araştırması, deneyim mimarisi ve tasarım sistemlerini disiplinler arası ekiplerle birlikte yönetme.",
      en: "Leading user research, experience architecture and design systems with cross-functional teams.",
    },
  },
  {
    icon: Cpu,
    title: { tr: "Yapay Zeka ve Otomasyon", en: "AI & Automation" },
    description: {
      tr: "AI destekli ürün deneyimleri, agent iş akışları ve iş süreçlerine entegre edilen otomasyon sistemleri.",
      en: "AI-assisted product experiences, agent workflows and automation integrated into business processes.",
    },
  },
  {
    icon: BarChart3,
    title: { tr: "Veri ve Dijital Büyüme", en: "Data & Digital Growth" },
    description: {
      tr: "Ürün analitiği, dönüşüm optimizasyonu ve SEO/GEO bilgisini ürün ve iş hedefleriyle ilişkilendirme.",
      en: "Connecting product analytics, conversion optimization and SEO/GEO knowledge to product and business goals.",
    },
  },
] as const;

export default function AboutPage({ locale }: { locale: Locale }) {
  const isTr = locale === "tr";
  const homePath = isTr ? "/" : "/en";
  const projectPath = casesPath(locale);

  const stats = [
    { value: "26+", label: isTr ? "Yıl Deneyim" : "Years of Experience" },
    { value: "200+", label: isTr ? "Dijital Proje" : "Digital Projects" },
    { value: "100+", label: isTr ? "Marka" : "Brands" },
    { value: String(countriesWithProjectsCount), label: isTr ? "Ülke" : "Countries" },
  ];

  const work = brandWork
    .map(([id, brand]) => ({ brand, item: portfolio.find((p) => p.id === id) }))
    .filter((w): w is { brand: string; item: (typeof portfolio)[number] } => Boolean(w.item));

  return (
    <main className="pt-20">
      {/* Kariyer ve liderlik odaklı giriş */}
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

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-400 md:text-sm">
                {isTr ? "Dijital Ürün · UX · Yapay Zeka" : "Digital Product · UX · AI"}
              </p>
              <h1 className="mb-4 font-display text-4xl font-bold leading-tight text-white md:text-5xl">
                <span className="text-gradient">Tonguç Karaçay</span>
              </h1>
              <h2 className="mb-6 max-w-xl font-display text-xl font-semibold leading-snug text-white md:text-2xl">
                {isTr ? "Dijital ürün geliştirme, deneyim tasarımı ve ekip liderliği" : "Digital product development, experience design & team leadership"}
              </h2>

              <p className="mb-5 text-base leading-relaxed text-primary-200 md:text-lg">
                {isTr
                  ? "26 yılı aşkın kariyerimde dijital ürünlerin yalnızca tasarımına değil; stratejisine, ekiplerin koordinasyonuna ve fikirden canlı ürüne uzanan geliştirme sürecine odaklandım. Yüksek trafikli medya platformlarından kurumsal uygulamalara, e-ticaretten B2B SaaS ürünlerine kadar farklı ölçeklerde sorumluluk üstlendim."
                  : "Over more than 26 years, my work has extended beyond interface design to product strategy, cross-functional coordination and taking digital products from concept to launch. My experience spans high-traffic media, enterprise platforms, e-commerce and B2B SaaS."}
              </p>
              <p className="mb-5 leading-relaxed text-primary-300">
                {isTr
                  ? "Profesyonel kariyerime sırasıyla Sabancı Holding, MNG Holding ve Filli Boya'da başladım. Medya sektöründe, Sabah gazetesi, ATV, Fotomaç ve Takvim başta olmak üzere Turkuvaz Medya'nın tüm dijital yayın projelerinde görev aldım. Star, Akşam, Güneş, 24 TV ve 360 TV gibi diğer medya markalarının projelerinde de çalıştım. Bu dönemde web, mobil ve Smart TV ürünlerinin planlama, kullanıcı deneyimi, geliştirme ve ekip koordinasyonu süreçlerinde sorumluluk üstlendim."
                  : "My professional career began at Sabancı Holding, followed by MNG Holding and Filli Boya. In media, I worked across Turkuvaz Media's digital publishing projects, including Sabah newspaper, ATV, Fotomaç and Takvim, as well as projects for other media brands such as Star, Akşam, Güneş, 24 TV and 360 TV. My responsibilities covered product planning, UX, development delivery and team coordination across web, mobile and Smart TV platforms."}
              </p>
              <p className="mb-5 leading-relaxed text-primary-300">
                {isTr
                  ? "Medya alanındaki deneyimimin ardından Türk Hava Yolları, BMW, MINI, Jaguar, Land Rover ve Borusan Otomotiv'in web ve mobil ürün projelerinde görev aldım. Borusan Otomotiv sonrasında Asis'te uluslararası dijital ürün ve teknoloji projelerinin planlama, kullanıcı deneyimi ve geliştirme süreçlerinde çalıştım."
                  : "After my media experience, I worked on web and mobile product projects for Turkish Airlines, BMW, MINI, Jaguar, Land Rover and Borusan Otomotiv. Following Borusan Otomotiv, I joined Asis, working on the planning, UX and development processes of international digital product and technology projects."}
              </p>
              <p className="mb-8 leading-relaxed text-primary-300">
                {isTr
                  ? "Asis'in ardından ABD merkezli iki teknoloji şirketinde çalıştım. Network Hardwares'ta e-ticaret platformunun stratejisi, kurulumu ve ekip koordinasyonunun yanı sıra AI destekli akıllı ürün bulma, ürün seçimi ve görsel üretim iş akışları üzerinde çalıştım. eva.guru'da ise AI destekli Amazon reklam otomasyonu platformunun UX/UI süreçlerine liderlik ederek teklif optimizasyonu, kampanya analitiği ve karar destek ekranlarına odaklandım."
                  : "After Asis, I worked at two US-based technology companies. At Network Hardwares, I combined e-commerce platform strategy, launch and team coordination with AI-assisted product discovery, intelligent product selection and image-generation workflows. At eva.guru, I led UX/UI work on an AI-powered Amazon advertising automation platform, focusing on bidding optimization, campaign analytics and decision-support interfaces."}
              </p>

              <div className="mb-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-primary-300">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent-400" />
                  <span>{isTr ? "İstanbul, Türkiye" : "Istanbul, Turkey"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-accent-400" />
                  <span>{isTr ? "Uluslararası ürün ve ekip deneyimi" : "International product & team experience"}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href={projectPath} className="btn-primary group">
                  {isTr ? "Projelerimi İncele" : "Explore Projects"}
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

      {/* Projelerde destek verilen ülkeler — şehir veya operasyon detayı gösterilmez */}
      <section className="pb-8" aria-labelledby="global-projects-title">
        <div className="container-custom">
          <div className="rounded-2xl border border-surface-border/60 bg-surface-card/30 p-6 md:p-8">
            <h2 id="global-projects-title" className="font-display text-xl font-bold text-white md:text-2xl">
              {isTr ? "Uluslararası Proje Deneyimi" : "International Project Experience"}
            </h2>
            <p className="mt-2 text-sm text-primary-300">
              {isTr ? "Projelerde destek verdiğim ülkeler" : "Countries supported through project work"}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {countriesWithProjects.map((country) => (
                <li key={country.en} className="rounded-lg border border-surface-border bg-surface-darker/50 px-3 py-1.5 text-sm text-primary-200">
                  {country[locale]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Hizmet satışı değil, ürün ve liderlik yetkinlikleri */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="mb-10 text-center md:mb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400 md:text-sm">
              {isTr ? "Çalışma Alanları" : "Focus Areas"}
            </p>
            <h2 className="section-title mx-auto">
              {isTr ? "Ürün ve " : "Product & "}
              <span className="text-gradient">{isTr ? "Liderlik Yetkinlikleri" : "Leadership Expertise"}</span>
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <article key={area.title.tr} className="card flex flex-col p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400 ring-1 ring-accent-500/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{area.title[locale]}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-primary-300">{area.description[locale]}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Kariyer boyunca yer alınan marka ve projeler */}
      <section className="border-y border-surface-border/40 bg-surface-card/20 py-16 md:py-20">
        <div className="container-custom">
          <div className="mb-10 flex flex-col items-center gap-3 text-center md:flex-row md:items-end md:justify-between md:text-left">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400 md:text-sm">{isTr ? "Kariyer ve Portfolyo" : "Career & Portfolio"}</p>
              <h2 className="section-title">
                {isTr ? "Seçili Marka ve " : "Selected Brands & "}
                <span className="text-gradient">{isTr ? "Proje Deneyimi" : "Projects"}</span>
              </h2>
            </div>
            <Link href={projectPath} className="inline-flex items-center gap-2 font-semibold text-accent-400 hover:text-accent-300">
              {isTr ? "Tüm projeler" : "Explore all projects"}
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
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">{isTr ? "İlk Kurumsal Deneyimler" : "Early Corporate Experience"}</p>
            <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2">
              {earlyEmployers.map((employer) => (
                <span key={employer} className="rounded-lg border border-accent-500/30 bg-accent-500/5 px-3 py-1.5 text-sm font-medium text-primary-200">
                  {employer}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">{isTr ? "Sonraki Kurumsal Deneyimler" : "Later Corporate Experience"}</p>
            <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2">
              {laterEmployers.map((employer) => (
                <span key={employer} className="rounded-lg border border-accent-500/30 bg-accent-500/5 px-3 py-1.5 text-sm font-medium text-primary-200">
                  {employer}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-10 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">{isTr ? "Diğer projelerden markalar" : "More brands from past projects"}</p>
            <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2">
              {moreBrands.map((brand) => (
                <span key={brand} className="rounded-lg border border-surface-border px-3 py-1.5 text-xs text-primary-300 md:text-sm">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
