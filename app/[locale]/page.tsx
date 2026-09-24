import { setRequestLocale } from 'next-intl/server';
import ValueProposition from "@/components/home/ValueProposition";
import TrustedBy from "@/components/home/TrustedBy";
import Offers from "@/components/home/Offers";
import CaseHighlights from "@/components/home/CaseHighlights";
import Engagement from "@/components/home/Engagement";
import WhyMe from "@/components/home/WhyMe";
import PreAudit from "@/components/home/PreAudit";
import Testimonials from "@/components/home/Testimonials";
import Insights from "@/components/home/Insights";
import PersonalStory from "@/components/home/PersonalStory";
import FinalCTASection from "@/components/home/FinalCTASection";

type Props = {
  params: { locale: string };
};

export default async function Home({ params: { locale } }: Props) {
  setRequestLocale(locale);

  return (
    <>
      {/* 1 — Hero: persona + vaat + 3 teklif + Ön Analiz / Vakalar CTA (tek H1) */}
      <ValueProposition locale={locale} />
      {/* 2 — Kompakt marka şeridi */}
      <TrustedBy locale={locale} />
      {/* 3 — 3 ana teklif kartı */}
      <Offers locale={locale} />
      {/* 4 — 2 mini vaka (lib/cases.ts featured) */}
      <CaseHighlights locale={locale} />
      {/* 5 — Tipik Çalışma Süreci (Week 1-2-3 — korunur) */}
      <Engagement locale={locale} />
      {/* 6 — Neden Benimle */}
      <WhyMe locale={locale} />
      {/* 7 — Lead magnet + hibrit başlangıç modeli */}
      <PreAudit locale={locale} />
      {/* 8 — Müşteri yorumları (gerçek veri gelene kadar render edilmez) */}
      <Testimonials locale={locale} />
      {/* 9 — İşletme odaklı son yazılar (AI Lab hariç) */}
      <Insights locale={locale} />
      {/* 10 — Kişisel Hikaye */}
      <PersonalStory locale={locale} />
      {/* 11 — Final CTA */}
      <FinalCTASection locale={locale} />
    </>
  );
}
