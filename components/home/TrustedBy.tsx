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


export default function TrustedBy({ locale }: Props) {
  const isTr = locale === "tr";

  return (
    <section id="trusted-by" className="py-6 md:py-10">
      <div className="container-custom">
        <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-500 md:text-xs">
          {isTr ? "Birlikte Çalıştığım Marka ve Kurumlar" : "Brands & Organizations I've Worked With"}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-10">
          {featured.map((raw) => {
            const name = raw === "THY" ? (isTr ? "Türk Hava Yolları" : "Turkish Airlines") : raw;
            return (
            <span
              key={name}
              className="select-none whitespace-nowrap font-display text-sm font-medium tracking-wide text-primary-300/80 md:text-base"
            >
              {name}
            </span>
            );
          })}
        </div>

        <p className="mt-4 text-center text-[11px] text-primary-500 md:text-xs">
          {isTr
            ? "Otomotiv, medya, kamu ve belediye projeleri dahil 100+ marka."
            : "100+ brands across automotive, media, government and municipal projects."}
        </p>
      </div>
    </section>
  );
}
