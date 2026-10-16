/**
 * Başka ülkelerde yürütülen / destek verilen projeler.
 * Sayı aynı listeden türetilir; ikamet, ofis veya işveren varlığı iddiası değildir.
 * Şehir, proje türü veya açıklama eklemeyin: yalnızca ülke isimleri.
 */
export const countriesWithProjects = [
  { tr: "Türkiye", en: "Türkiye" },
  { tr: "ABD", en: "United States" },
  { tr: "Kanada", en: "Canada" },
  { tr: "Almanya", en: "Germany" },
  { tr: "Hindistan", en: "India" },
  { tr: "Yunanistan", en: "Greece" },
  { tr: "Bulgaristan", en: "Bulgaria" },
  { tr: "Irak", en: "Iraq" },
  { tr: "Kosova", en: "Kosovo" },
  { tr: "Pakistan", en: "Pakistan" },
  { tr: "Kamerun", en: "Cameroon" },
  { tr: "Tanzanya", en: "Tanzania" },
  { tr: "Ruanda", en: "Rwanda" },
  { tr: "Moldova", en: "Moldova" },
  { tr: "Azerbaycan", en: "Azerbaijan" },
  { tr: "İtalya", en: "Italy" },
  { tr: "Filipinler", en: "Philippines" },
  { tr: "Malezya", en: "Malaysia" },
  { tr: "Türkmenistan", en: "Turkmenistan" },
] as const;

export const countriesWithProjectsCount = countriesWithProjects.length;
