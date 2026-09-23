import { setRequestLocale } from 'next-intl/server';
import HeroDynamic from "@/components/home/HeroDynamic";
import TrustedBy from "@/components/home/TrustedBy";
import CaseStudies from "@/components/home/CaseStudies";
import Engagement from "@/components/home/Engagement";
import WhyMe from "@/components/home/WhyMe";
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
      {/* 1 — Dinamik Hero */}
      <HeroDynamic locale={locale} />
      {/* 2 — Tipik Çalışma Süreci (timeline) */}
      <Engagement locale={locale} />
      {/* 3 — Neden Benimle */}
      <WhyMe locale={locale} />
      {/* 4 — Trusted By (sonuçlardan hemen önce, "kiminle çalıştım" bağlamı) */}
      <TrustedBy locale={locale} />
      {/* 5 — Sonuçlar & Vaka Çalışmaları */}
      <CaseStudies locale={locale} />
      {/* 6 — İçgörüler / Blog (Referanslar gerçek yorum gelince eklenecek) */}
      <Insights locale={locale} />
      {/* 8 — Kişisel Hikaye */}
      <PersonalStory locale={locale} />
      {/* 9 — Final CTA */}
      <FinalCTASection locale={locale} />
    </>
  );
}
