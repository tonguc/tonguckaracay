type Locale = "tr" | "en";

export const WhatTimeMockup = () => (
  <img
    src="https://image.thum.io/get/width/600/crop/375/https://whattime.city"
    alt="whattime.city screenshot"
    className="absolute inset-0 w-full h-full object-cover pt-7"
    loading="lazy"
  />
);

export const UxSeoMockup = ({ locale = "tr" }: { locale?: Locale }) => {
  const title = locale === "tr" ? "UX SEO Audit Raporu" : "UX SEO Audit Report";
  const items = [
    { label: "Core Web Vitals", ok: true },
    { label: locale === "tr" ? "Mobil UX puanı" : "Mobile UX score", ok: false },
    { label: "Meta description", ok: true },
    { label: "Schema markup", ok: false },
    { label: "H1 hiyerarşisi", ok: true },
  ];
  return (
    <div className="absolute inset-0 pt-7 p-3 space-y-2 overflow-hidden">
      <div className="bg-surface-darker/70 rounded-lg p-2 flex items-center gap-3">
        <div className="flex-1">
          <div className="text-[9px] text-primary-400">tonguckaracay.com</div>
          <div className="h-1 w-full bg-surface-border rounded mt-1">
            <div className="h-1 w-[73%] bg-indigo-500 rounded" />
          </div>
        </div>
        <div className="text-right">
          <div className="font-bold text-xl text-indigo-300 leading-none">73</div>
          <div className="text-[8px] text-primary-500">/100</div>
        </div>
      </div>
      <div className="text-[9px] text-white font-medium px-1">{title}</div>
      <div className="space-y-1">
        {items.map(({ label, ok }) => (
          <div key={label} className="flex items-center gap-2 bg-surface-darker/40 rounded px-2 py-0.5">
            <span className={`text-[10px] flex-shrink-0 ${ok ? "text-green-400" : "text-red-400"}`}>
              {ok ? "✓" : "✗"}
            </span>
            <span className="text-[9px] text-primary-300">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const OnayFormuMockup = ({ locale = "tr" }: { locale?: Locale }) => {
  const title = locale === "tr" ? "Hasta Onay Formu" : "Patient Consent Form";
  const fields =
    locale === "tr"
      ? ["Ad Soyad", "TC Kimlik No", "İşlem Türü"]
      : ["Full Name", "Patient ID", "Procedure Type"];
  const buttonLabel = locale === "tr" ? "Onayla →" : "Submit →";
  const smsLabel = locale === "tr" ? "📱 Otomatik SMS" : "📱 Auto SMS";
  const smsText =
    locale === "tr"
      ? `"Randevunuz yarın 14:00'de onaylandı."`
      : `"Your appointment tomorrow at 2:00 PM is confirmed."`;

  return (
    <div className="absolute inset-0 pt-7 p-3 flex flex-col gap-2 overflow-hidden">
      <div className="bg-surface-darker/70 rounded-lg p-2 flex-1">
        <div className="text-[9px] font-medium text-white mb-2">{title}</div>
        {fields.map((field) => (
          <div key={field} className="mb-1.5">
            <div className="text-[8px] text-primary-400 mb-0.5">{field}</div>
            <div className="h-4 bg-surface-border/60 rounded border border-surface-border" />
          </div>
        ))}
        <div className="mt-2 bg-indigo-500/80 rounded text-center py-1">
          <span className="text-[9px] text-white font-medium">{buttonLabel}</span>
        </div>
      </div>
      <div className="bg-green-900/40 border border-green-500/30 rounded-lg p-2">
        <div className="text-[9px] text-green-300 font-medium mb-0.5">{smsLabel}</div>
        <div className="text-[8px] text-primary-400">{smsText}</div>
      </div>
    </div>
  );
};

export const DijitalTespitMockup = ({ locale = "tr" }: { locale?: Locale }) => {
  const sector = locale === "tr" ? "Emlak sektörü" : "Real estate sector";
  const results = locale === "tr" ? "47 sonuç" : "47 results";
  const companies =
    locale === "tr"
      ? ["Ahmet Emlak", "İstanbul Konut", "Metropol GYO", "Marmara Yapı", "Deniz GYO"]
      : ["Apex Realty", "Bay Property", "Metro Housing", "Harbor Homes", "Peak Estate"];
  const scores = [23, 31, 18, 27, 15];

  return (
    <div className="absolute inset-0 pt-7 p-3 overflow-hidden">
      <div className="flex items-center justify-between mb-2">
        <div className="text-[9px] text-primary-400">{sector}</div>
        <div className="text-[9px] text-indigo-300 bg-indigo-500/10 px-1.5 py-0.5 rounded">
          {results}
        </div>
      </div>
      <div className="space-y-1">
        {companies.map((name, i) => {
          const score = scores[i];
          const color = score < 25 ? "text-red-400" : "text-orange-400";
          return (
            <div key={name} className="flex items-center gap-2 bg-surface-darker/40 rounded px-2 py-1">
              <div className="flex-1 text-[9px] text-primary-200 truncate">{name}</div>
              <div className={`text-[9px] font-bold flex-shrink-0 ${color}`}>{score}/100</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
