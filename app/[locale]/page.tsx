import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import ValueProposition from "@/components/home/ValueProposition";
import TrustedBy from "@/components/home/TrustedBy";
import CaseHighlights from "@/components/home/CaseHighlights";
import Insights from "@/components/home/Insights";
import PersonalStory from "@/components/home/PersonalStory";
import Offers from "@/components/home/Offers";
import Engagement from "@/components/home/Engagement";
import PortfolioMarquee from "@/components/home/PortfolioMarquee";
import FinalCTASection from "@/components/home/FinalCTASection";

type Props = {
  params: { locale: string };
};

/** Ana sayfa: ürün liderliği portfolyosu, hizmetler ve iletişim birlikte sunulur. */
export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const isTr = locale === "tr";
  const title = isTr
    ? "Tonguç Karaçay | UX, SEO, Yapay Zeka ve Dijital Ürünler"
    : "Tonguç Karaçay | UX, SEO, AI & Digital Products";
  const description = isTr
    ? "Tonguç Karaçay'ın UX, dijital ürün tasarımı, SEO ve yapay zeka alanlarındaki projeleri, deneyimleri ve teknik yazıları."
    : "Explore Tonguç Karaçay's work, projects and technical writing on UX, digital product design, SEO and AI.";

  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { title, description },
  };
}

export default async function Home({ params: { locale } }: Props) {
  setRequestLocale(locale);

  return (
    <>
      {/* 2026-11 yeniden tasarım: siyah/koyu gri/açık/turuncu bölüm ritmi.
          WhyMe ve PreAudit dosyaları duruyor; içerikleri Engagement ve FinalCTASection'a katıldı. */}
      <ValueProposition locale={locale} />
      <TrustedBy locale={locale} />
      <PortfolioMarquee locale={locale} />
      <CaseHighlights locale={locale} />
      <Offers locale={locale} />
      <Engagement locale={locale} />
      <PersonalStory locale={locale} />
      <Insights locale={locale} />
      <FinalCTASection locale={locale} />
    </>
  );
}
