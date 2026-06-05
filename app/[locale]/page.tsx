import { setRequestLocale } from 'next-intl/server';
import HeroDynamic from "@/components/home/HeroDynamic";
import TrustedBy from "@/components/home/TrustedBy";
import CaseStudies from "@/components/home/CaseStudies";
import Expertise from "@/components/home/Expertise";
import WhyMe from "@/components/home/WhyMe";
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
      {/* 1 — Dinamik Hero */}
      <HeroDynamic locale={locale} />
      {/* 2 — Trusted By */}
      <TrustedBy locale={locale} />
      {/* 3 — Sonuçlar & Vaka Çalışmaları */}
      <CaseStudies locale={locale} />
      {/* 4 — Uzmanlık */}
      <Expertise locale={locale} />
      {/* 5 — Neden Benimle */}
      <WhyMe locale={locale} />
      {/* 6 — Referanslar */}
      <Testimonials />
      {/* 7 — İçgörüler / Blog */}
      <Insights locale={locale} />
      {/* 8 — Kişisel Hikaye */}
      <PersonalStory locale={locale} />
      {/* 9 — Final CTA */}
      <FinalCTASection locale={locale} />
    </>
  );
}
