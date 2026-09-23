interface Props {
  locale: string;
}

/**
 * Trusted By — bilinçli olarak logosuz.
 * Tanınırlığa göre iki katman: öne çıkan (büyük/parlak) ve geri kalan (küçük/soluk) —
 * hepsi aynı ağırlıkta dizilen düz bir "duvar" yerine kürasyonlu bir liste hissi verir.
 */
const featured = [
  "THY",
  "BMW",
  "Jaguar",
  "Range Rover",
  "Mini",
  "Borusan Otomotiv",
  "Galatasaray",
  "Sabah",
  "ATV",
];

const rest = [
  "A Haber",
  "A Spor",
  "Güneş",
  "Takvim",
  "Fotomaç",
  "Akşam",
  "Yeni Asır",
  "Sabah USA",
  "Star",
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
    <section id="trusted-by" className="border-y border-surface-border/40 bg-surface-card/20 py-14 md:py-20">
      <div className="container-custom">
        <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary-400 md:text-sm">
          {isTr ? "Birlikte Çalıştığım Marka ve Kurumlar" : "Brands & Organizations I've Worked With"}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {featured.map((name) => (
            <span
              key={name}
              className="select-none whitespace-nowrap font-display text-lg font-medium tracking-wide text-primary-200/90 transition-colors duration-300 hover:text-accent-300 md:text-xl"
            >
              {name}
            </span>
          ))}
        </div>

        <div className="mx-auto mt-8 h-px w-16 bg-surface-border/60" />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          {rest.map((name) => (
            <span
              key={name}
              className="select-none whitespace-nowrap text-sm font-normal tracking-wide text-primary-500/70 transition-colors duration-300 hover:text-primary-300"
            >
              {name}
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
