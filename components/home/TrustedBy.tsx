import Image from "next/image";

interface Props {
  locale: string;
}

/**
 * Bölüm 2 — Trusted By.
 * Tanınır markalar için gerçek logo (public/logos/), geri kalanı stilize
 * "wordmark" (metin) — varsayılan gri/soluk, hover'da accent renk + parlama.
 */
const brands: { name: string; logo?: string }[] = [
  { name: "THY", logo: "/logos/thy.svg" },
  { name: "BMW", logo: "/logos/bmw.svg" },
  { name: "Jaguar", logo: "/logos/jaguar.svg" },
  { name: "Range Rover", logo: "/logos/range-rover.svg" },
  { name: "Mini", logo: "/logos/mini.svg" },
  { name: "Borusan Otomotiv" },
  { name: "Galatasaray", logo: "/logos/galatasaray.svg" },
  { name: "Sabah", logo: "/logos/sabah.png" },
  { name: "Sabah USA" },
  { name: "Star" },
  { name: "ATV", logo: "/logos/atv.svg" },
  { name: "A Haber" },
  { name: "A Spor" },
  { name: "Güneş" },
  { name: "Takvim" },
  { name: "Fotomaç" },
  { name: "Akşam", logo: "/logos/aksam.svg" },
  { name: "Yeni Asır" },
  { name: "24 TV" },
  { name: "360 TV" },
  { name: "Turkuvaz Radyo" },
  { name: "Alem FM" },
  { name: "Aktüel" },
  { name: "Ağaoğlu My Life" },
  { name: "Asis" },
  { name: "Burulaş" },
  { name: "LiveDoctor" },
  { name: "Callheater" },
  { name: "Sigorta 7" },
  { name: "Network Hardwares" },
  { name: "E-Wallet" },
  { name: "Leman" },
  { name: "Eva" },
  { name: "Otohaber" },
];

export default function TrustedBy({ locale }: Props) {
  const isTr = locale === "tr";

  return (
    <section className="border-y border-surface-border/40 bg-surface-card/20 py-14 md:py-20">
      <div className="container-custom">
        <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary-400 md:text-sm">
          {isTr ? "Birlikte Çalıştığım Marka ve Kurumlar" : "Brands & Organizations I've Worked With"}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-12">
          {brands.map(({ name, logo }) =>
            logo ? (
              <div
                key={name}
                className="relative h-7 w-24 shrink-0 grayscale opacity-60 brightness-0 invert transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:brightness-100 hover:invert-0 md:h-8 md:w-28"
              >
                <Image
                  src={logo}
                  alt={name}
                  fill
                  className="object-contain object-center"
                  sizes="112px"
                />
              </div>
            ) : (
              <span
                key={name}
                className="select-none whitespace-nowrap font-display text-base font-semibold tracking-tight text-primary-400/70 md:text-lg"
              >
                {name}
              </span>
            )
          )}
        </div>

        <p className="mt-10 text-center text-xs text-primary-500">
          {isTr
            ? "Otomotiv, medya, kamu ve belediye projeleri dahil 100+ marka."
            : "100+ brands across automotive, media, government and municipal projects."}
        </p>
      </div>
    </section>
  );
}
