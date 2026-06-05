interface Props {
  locale: string;
}

/**
 * Bölüm 2 — Trusted By.
 * Logo dosyası olmadığı için markalar stilize "wordmark" (metin) olarak gösterilir;
 * varsayılan gri/soluk, hover'da accent renk + parlama.
 */
const brands = [
  "THY",
  "BMW",
  "Jaguar",
  "Range Rover",
  "Mini",
  "Borusan Otomotiv",
  "Galatasaray",
  "Sabah",
  "Sabah USA",
  "Star",
  "ATV",
  "A Haber",
  "A Spor",
  "Güneş",
  "Takvim",
  "Fotomaç",
  "Akşam",
  "Yeni Asır",
  "24 TV",
  "360 TV",
  "Turkuvaz Radyo",
  "Alem FM",
  "Aktüel",
  "Ağaoğlu My Life",
  "Asis",
  "Burulaş",
  "LiveDoctor",
  "Callheater",
  "Sigorta 7",
  "Network Hardwares",
  "E-Wallet",
  "Leman",
  "Eva",
  "Otohaber",
];

export default function TrustedBy({ locale }: Props) {
  const isTr = locale === "tr";

  return (
    <section className="border-y border-surface-border/40 bg-surface-card/20 py-14 md:py-20">
      <div className="container-custom">
        <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary-400 md:text-sm">
          {isTr ? "Birlikte Çalıştığım Marka ve Kurumlar" : "Brands & Organizations I've Worked With"}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 md:gap-x-10">
          {brands.map((brand) => (
            <span
              key={brand}
              className="select-none whitespace-nowrap font-display text-base font-semibold tracking-tight text-primary-400/70 md:text-lg"
            >
              {brand}
            </span>
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
