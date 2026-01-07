"use client";

import { useLocale } from 'next-intl';
import { useTheme } from './ThemeProvider';

const brands = [
  "THY", "BMW", "Jaguar", "Range Rover", "Mini", "Borusan Otomotiv", "Galatasaray", "Sabah", "Sabah USA",
  "Star", "ATV", "A Haber", "A Spor", "Güneş", "Takvim", "Fotomaç", "Akşam", "Yeni Asır", "24 TV", "360 TV",
  "Turkuvaz Radyo", "Alem FM", "Aktüel", "Ağaoğlu My Life", "Asis", "Burulaş", "LiveDoctor", "Callheater", "Sigorta 7",
  "Network Hardwares", "E-Wallet", "Leman", "Eva", "Otohaber"
];

export default function Brands() {
  const locale = useLocale();
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section className={`py-20 ${isLight ? 'bg-slate-100' : 'bg-slate-800/50'}`}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">
            {locale === 'tr' ? 'Çalıştığım ' : 'Companies I\'ve '}<span className="text-gradient">{locale === 'tr' ? 'Firmalar' : 'Worked With'}</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {brands.map((brand) => (
            <span 
              key={brand}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all hover:scale-105 ${
                isLight 
                  ? 'bg-white text-slate-700 border border-slate-200 hover:border-amber-500 hover:text-amber-600' 
                  : 'bg-slate-800 text-slate-300 border border-slate-700 hover:border-amber-500 hover:text-amber-400'
              }`}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
