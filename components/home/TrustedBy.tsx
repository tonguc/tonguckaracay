interface Props {
  locale: string;
}

/**
 * Bölüm 2 — Trusted By.
 * Logo dosyası olmadığı için markalar stilize "wordmark" (metin) olarak gösterilir;
 * varsayılan gri/soluk, hover'da accent renk + parlama.
 */
const brands = [
  "BMW",
  "Jaguar",
  "Range Rover",
  "Mini",
  "THY",
  "Borusan Otomotiv",
  "Galatasaray",
  "Sabah",
  "ATV",
  "A Haber",
  "Turkuvaz Medya",
  "Burulaş",
  "Network Hardwares",
  "Ağaoğlu",
];

export default function TrustedBy({ locale }: Props) {
  const isTr = locale === "tr";

  return (
    <section className="border-y border-surface-border/40 bg-surface-card/20 py-14 md:py-20">
      <div className="container-custom">
        <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary-400 md:text-sm">
          {isTr ? "Birlikte Çalıştığım Marka ve Kurumlar" : "Brands & Organizations I've Worked With"}
        </p>

        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {brands.map((brand) => (
            <div
              key={brand}
              className="group flex items-center justify-center"
            >
              <span className="select-none font-display text-lg font-bold tracking-tight text-primary-500 grayscale transition-all duration-300 group-hover:text-accent-400 group-hover:[text-shadow:0_0_18px_rgba(245,158,11,0.35)] md:text-xl">
                {brand}
              </span>
            </div>
          ))}
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
