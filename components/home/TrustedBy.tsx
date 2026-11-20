interface Props {
  locale: string;
}

/**
 * Trusted By — bilinçli olarak logosuz, tek satırlık sakin bir şerit (2026-11).
 * Sola yaslı etiket + marka adları; ortalanmış büyük harfli "eyebrow" yok.
 */
const featured = ["THY", "BMW", "Jaguar", "Range Rover", "Mini", "Borusan Otomotiv", "Galatasaray", "Sabah", "ATV"];

export default function TrustedBy({ locale }: Props) {
  const isTr = locale === "tr";

  return (
    <section id="trusted-by" className="border-y border-surface-border/70 py-7">
      <div className="container-custom flex flex-col gap-4 md:flex-row md:items-center md:gap-12">
        <p className="shrink-0 text-sm text-primary-400">
          {isTr ? "Birlikte çalıştığım markalar" : "Brands I’ve worked with"}
        </p>
        <ul className="flex flex-wrap gap-x-8 gap-y-2 font-display text-base font-semibold text-primary-500 md:text-lg">
          {featured.map((raw) => {
            const name = raw === "THY" ? (isTr ? "Türk Hava Yolları" : "Turkish Airlines") : raw;
            return (
              <li key={name} className="whitespace-nowrap">
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
