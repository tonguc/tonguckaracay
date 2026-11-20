interface Props {
  locale: string;
}

/**
 * Trusted By — logosuz, iki satırlık marka listesi (2026-11, kullanıcı isteği: çift satır).
 * Satır 1: havayolu + otomotiv. Satır 2: medya + spor.
 * Yalnızca lib/portfolio.ts'te gerçek işi olan markalar yazılır.
 */
const rows: { tr: string; en: string }[][] = [
  [
    { tr: "Türk Hava Yolları", en: "Turkish Airlines" },
    { tr: "BMW", en: "BMW" },
    { tr: "MINI", en: "MINI" },
    { tr: "Jaguar", en: "Jaguar" },
    { tr: "Land Rover", en: "Land Rover" },
    { tr: "Range Rover", en: "Range Rover" },
    { tr: "Borusan Otomotiv", en: "Borusan Otomotiv" },
  ],
  [
    { tr: "Galatasaray", en: "Galatasaray" },
    { tr: "Sabah", en: "Sabah" },
    { tr: "ATV", en: "ATV" },
    { tr: "Fotomaç", en: "Fotomaç" },
    { tr: "Hürriyet Bigpara", en: "Hürriyet Bigpara" },
    { tr: "Star", en: "Star" },
    { tr: "24 TV", en: "24 TV" },
    { tr: "360 TV", en: "360 TV" },
  ],
];

export default function TrustedBy({ locale }: Props) {
  const loc = locale === "tr" ? "tr" : "en";

  return (
    <section id="trusted-by" className="border-y border-surface-border/70 py-8">
      <div className="container-custom flex flex-col gap-4 md:flex-row md:items-start md:gap-12">
        <p className="shrink-0 pt-1 text-sm text-primary-400 md:w-40">
          {loc === "tr" ? "Birlikte çalıştığım markalar" : "Brands I’ve worked with"}
        </p>
        <div className="flex flex-col gap-2 md:gap-3">
          {rows.map((row, i) => (
            <ul key={i} className="flex flex-wrap gap-x-8 gap-y-2 font-display text-base font-semibold text-primary-500 md:text-lg">
              {row.map((b) => (
                <li key={b.tr} className="whitespace-nowrap">
                  {b[loc]}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
