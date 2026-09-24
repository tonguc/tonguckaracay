/**
 * Behance portfolyosunun tamamı (behance.net/tonguc) — /vaka-calismalari altındaki portfolyo grid'i.
 * Sıra Behance profilindeki sırayla aynı. Kapaklar public/portfolio/<id>.webp.
 * Yeni proje eklenince: kapağı public/portfolio'ya koy, listeye ekle.
 */
export type PortfolioKind = "web" | "mobile" | "tablet" | "tv" | "product";

export interface PortfolioItem {
  id: string;
  title: { tr: string; en: string };
  kind: PortfolioKind;
  url: string;
}

export const portfolioKindLabel: Record<PortfolioKind, { tr: string; en: string }> = {
  web: { tr: "Web Sitesi", en: "Website" },
  mobile: { tr: "Mobil Uygulama", en: "Mobile App" },
  tablet: { tr: "Tablet Uygulaması", en: "Tablet App" },
  tv: { tr: "Smart TV", en: "Smart TV" },
  product: { tr: "Dijital Ürün", en: "Digital Product" },
};

export const portfolio: PortfolioItem[] = [
  { id: "139240279", title: { tr: "BMW Servis Uygulaması", en: "BMW Service App" }, kind: "mobile", url: "https://www.behance.net/gallery/139240279/BMW-Mobile-Application" },
  { id: "125628811", title: { tr: "Kayseri Cüzdan", en: "Kayseri Wallet" }, kind: "mobile", url: "https://www.behance.net/gallery/125628811/E-Wallet" },
  { id: "186197781", title: { tr: "Network Hardwares — Shopify", en: "Network Hardwares — Shopify" }, kind: "web", url: "https://www.behance.net/gallery/186197781/shopify-ecommerce-design" },
  { id: "251295211", title: { tr: "AuditPro Toolkit", en: "AuditPro Toolkit" }, kind: "product", url: "https://www.behance.net/gallery/251295211/AuditPro-Toolkit" },
  { id: "251295727", title: { tr: "Airbnb HostIQ", en: "Airbnb HostIQ" }, kind: "product", url: "https://www.behance.net/gallery/251295727/Airbnb-HostIQ" },
  { id: "251295577", title: { tr: "AI Visibility Scorecard", en: "AI Visibility Scorecard" }, kind: "product", url: "https://www.behance.net/gallery/251295577/AI-Visibility-Scored" },
  { id: "186196915", title: { tr: "Sigorta 7", en: "Sigorta 7" }, kind: "web", url: "https://www.behance.net/gallery/186196915/Insurance-Company" },
  { id: "68080669", title: { tr: "Alem FM Mobil Uygulama", en: "Alem FM Mobile App" }, kind: "mobile", url: "https://www.behance.net/gallery/68080669/alemfmcom-Radio-Mobile-App" },
  { id: "83025685", title: { tr: "MINI Türkiye", en: "MINI Türkiye" }, kind: "web", url: "https://www.behance.net/gallery/83025685/MINI-Tuerkiye" },
  { id: "18576975", title: { tr: "fotomac.com.tr", en: "fotomac.com.tr" }, kind: "web", url: "https://www.behance.net/gallery/18576975/wwwfotomaccomtr" },
  { id: "139242019", title: { tr: "Ödeme Sistemi", en: "Payment System" }, kind: "mobile", url: "https://www.behance.net/gallery/139242019/Payment-System" },
  { id: "186195331", title: { tr: "LiveDoctor", en: "LiveDoctor" }, kind: "web", url: "https://www.behance.net/gallery/186195331/livedosctor" },
  { id: "104381259", title: { tr: "Belediye Ulaşım Uygulaması", en: "Municipal Transport App" }, kind: "mobile", url: "https://www.behance.net/gallery/104381259/Mmunicipalitys-mobile-transportation-application" },
  { id: "83026455", title: { tr: "BMW Online — Seriler", en: "BMW Online — Series" }, kind: "web", url: "https://www.behance.net/gallery/83026455/httpsyenibmwonlinecomtrseriler" },
  { id: "83863797", title: { tr: "Borusan Otomotiv", en: "Borusan Otomotiv" }, kind: "web", url: "https://www.behance.net/gallery/83863797/Borusan-Otomotiv" },
  { id: "83025545", title: { tr: "Land Rover Türkiye", en: "Land Rover Türkiye" }, kind: "web", url: "https://www.behance.net/gallery/83025545/Land-Rover-Tuerkiye" },
  { id: "68080583", title: { tr: "24 TV", en: "24 TV" }, kind: "web", url: "https://www.behance.net/gallery/68080583/24-TV-Web-Site" },
  { id: "73081745", title: { tr: "24 TV Mobil Uygulama", en: "24 TV Mobile App" }, kind: "mobile", url: "https://www.behance.net/gallery/73081745/yirmidorttv-Mobile-App" },
  { id: "104383401", title: { tr: "Belediye Ulaşım Sitesi", en: "Municipal Transport Website" }, kind: "web", url: "https://www.behance.net/gallery/104383401/Municipals-transportation-web-site" },
  { id: "104383697", title: { tr: "Toplantı Odası Rezervasyonu", en: "Meeting Room Booking App" }, kind: "mobile", url: "https://www.behance.net/gallery/104383697/Meeting-room-reservation-application" },
  { id: "87174227", title: { tr: "Borusan İkinci El", en: "Borusan Pre-Owned" }, kind: "web", url: "https://www.behance.net/gallery/87174227/ikincielborunsanotomotivcom" },
  { id: "73080939", title: { tr: "Galatasaray SK", en: "Galatasaray SK" }, kind: "web", url: "https://www.behance.net/gallery/73080939/Galatasaray-SK-Web-Site" },
  { id: "130734383", title: { tr: "Bigpara (Hürriyet)", en: "Bigpara (Hürriyet)" }, kind: "web", url: "https://www.behance.net/gallery/130734383/httpsbigparahurriyetcomtr" },
  { id: "83026773", title: { tr: "Jaguar Türkiye", en: "Jaguar Türkiye" }, kind: "web", url: "https://www.behance.net/gallery/83026773/httpswwwjaguar-turkiyecom" },
  { id: "38120387", title: { tr: "star.com.tr", en: "star.com.tr" }, kind: "web", url: "https://www.behance.net/gallery/38120387/starcomtr" },
  { id: "73080479", title: { tr: "Leman Dergisi", en: "Leman Magazine" }, kind: "web", url: "https://www.behance.net/gallery/73080479/Leman-Magazine-Web-Site" },
  { id: "72918997", title: { tr: "Star Gazetesi Mobil", en: "Star Newspaper App" }, kind: "mobile", url: "https://www.behance.net/gallery/72918997/star-newspaper-mobile-app" },
  { id: "73079285", title: { tr: "24 TV (v2)", en: "24 TV (v2)" }, kind: "web", url: "https://www.behance.net/gallery/73079285/yirmidorttv-TV-Web-Site-2" },
  { id: "32459173", title: { tr: "Gazete Sitesi", en: "Newspaper Website" }, kind: "web", url: "https://www.behance.net/gallery/32459173/Turkish-newspapers-online-site" },
  { id: "73080355", title: { tr: "Alem Dergisi", en: "Alem Magazine" }, kind: "web", url: "https://www.behance.net/gallery/73080355/Alem-Magazine-Site" },
  { id: "68080403", title: { tr: "gunes.com", en: "gunes.com" }, kind: "web", url: "https://www.behance.net/gallery/68080403/gunescom" },
  { id: "72922751", title: { tr: "Güneş Mobil Uygulama", en: "Güneş Newspaper App" }, kind: "mobile", url: "https://www.behance.net/gallery/72922751/Guenes-Newspaper-Mobile-App" },
  { id: "87337805", title: { tr: "alemfm.com", en: "alemfm.com" }, kind: "web", url: "https://www.behance.net/gallery/87337805/alemfmcom" },
  { id: "84459823", title: { tr: "360 TV", en: "360 TV" }, kind: "web", url: "https://www.behance.net/gallery/84459823/360TV" },
  { id: "73079429", title: { tr: "Seçim Sitesi", en: "Election Site" }, kind: "web", url: "https://www.behance.net/gallery/73079429/Election-Site" },
  { id: "73080587", title: { tr: "THY Lifestyle", en: "THY Lifestyle" }, kind: "web", url: "https://www.behance.net/gallery/73080587/THY-Lifestyle-Web-Site" },
  { id: "73079831", title: { tr: "THY Lifestyle Uygulama", en: "THY Lifestyle App" }, kind: "mobile", url: "https://www.behance.net/gallery/73079831/THY-Lifestyle-app" },
  { id: "18761789", title: { tr: "Dergi Mağazası", en: "Magazine Store" }, kind: "web", url: "https://www.behance.net/gallery/18761789/Magazine-Store" },
  { id: "18761617", title: { tr: "Seçim Sitesi (v1)", en: "Election Website (v1)" }, kind: "web", url: "https://www.behance.net/gallery/18761617/Election-website" },
  { id: "18577051", title: { tr: "A Haber", en: "A Haber" }, kind: "web", url: "https://www.behance.net/gallery/18577051/wwwahabercomtr" },
  { id: "18577085", title: { tr: "Takvim", en: "Takvim" }, kind: "web", url: "https://www.behance.net/gallery/18577085/wwwtakvimcomtr" },
  { id: "18578903", title: { tr: "ATV (eski sürüm)", en: "ATV (legacy)" }, kind: "web", url: "https://www.behance.net/gallery/18578903/wwwatvcomtr-old-version" },
  { id: "18576093", title: { tr: "Sabah", en: "Sabah" }, kind: "web", url: "https://www.behance.net/gallery/18576093/wwwsabahcomtr" },
  { id: "18577009", title: { tr: "ATV", en: "ATV" }, kind: "web", url: "https://www.behance.net/gallery/18577009/wwwatvcomtr" },
  { id: "18578809", title: { tr: "ATV İste ve İzle", en: "ATV On Demand" }, kind: "web", url: "https://www.behance.net/gallery/18578809/atvisteveizle" },
  { id: "18581737", title: { tr: "Fotomaç iPad", en: "Fotomaç iPad" }, kind: "tablet", url: "https://www.behance.net/gallery/18581737/Fotomac-Newspapers-iPad-app" },
  { id: "18581593", title: { tr: "Sabah iPad", en: "Sabah iPad" }, kind: "tablet", url: "https://www.behance.net/gallery/18581593/Sabah-Newspapers-iPad-app" },
  { id: "18581951", title: { tr: "Eylül'ün Hayvanları", en: "Eylül's Animals" }, kind: "mobile", url: "https://www.behance.net/gallery/18581951/Eyluls-animals" },
  { id: "18582213", title: { tr: "ATV iPhone", en: "ATV iPhone" }, kind: "mobile", url: "https://www.behance.net/gallery/18582213/Atvs-iPhone-app" },
  { id: "18582061", title: { tr: "ATV iPad", en: "ATV iPad" }, kind: "tablet", url: "https://www.behance.net/gallery/18582061/Atvs-iPad-App" },
  { id: "18580317", title: { tr: "Sabah Spor", en: "Sabah Spor" }, kind: "web", url: "https://www.behance.net/gallery/18580317/wwwsabahcomtrspor" },
  { id: "18581861", title: { tr: "Mathmatic", en: "Mathmatic" }, kind: "mobile", url: "https://www.behance.net/gallery/18581861/Mathmatic" },
  { id: "18580925", title: { tr: "Ağaoğlu My Life", en: "Ağaoğlu My Life" }, kind: "web", url: "https://www.behance.net/gallery/18580925/wwwmylifecomtr" },
  { id: "18582933", title: { tr: "Yeni Asır", en: "Yeni Asır" }, kind: "web", url: "https://www.behance.net/gallery/18582933/wwwyeniasircomtr" },
  { id: "18580797", title: { tr: "Sabah WebTV", en: "Sabah WebTV" }, kind: "web", url: "https://www.behance.net/gallery/18580797/httpwwwsabahcomtrwebtv" },
  { id: "18580495", title: { tr: "Otohaber", en: "Otohaber" }, kind: "web", url: "https://www.behance.net/gallery/18580495/wwwotohabercomtr" },
  { id: "18579519", title: { tr: "Yeni Aktüel", en: "Yeni Aktüel" }, kind: "web", url: "https://www.behance.net/gallery/18579519/wwwyeniaktuelcomtr" },
  { id: "18579337", title: { tr: "Sabah USA", en: "Sabah USA" }, kind: "web", url: "https://www.behance.net/gallery/18579337/wwwusasabahcom" },
  { id: "18579823", title: { tr: "Radyo Turkuvaz", en: "Radyo Turkuvaz" }, kind: "web", url: "https://www.behance.net/gallery/18579823/wwwradyoturkuvazcomtr" },
  { id: "18582403", title: { tr: "Smart TV Uygulaması", en: "Smart TV App" }, kind: "tv", url: "https://www.behance.net/gallery/18582403/smart-TV-app" },
  { id: "18582569", title: { tr: "Smart TV Uygulaması (2)", en: "Smart TV App (2)" }, kind: "tv", url: "https://www.behance.net/gallery/18582569/smart-TV-app" },
];
