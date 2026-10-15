import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import ValueProposition from "@/components/home/ValueProposition";
import TrustedBy from "@/components/home/TrustedBy";
import CaseHighlights from "@/components/home/CaseHighlights";
import Insights from "@/components/home/Insights";
import PersonalStory from "@/components/home/PersonalStory";

type Props = {
  params: { locale: string };
};

/**
 * Geçici işe başvuru / portfolyo modu.
 * Ticari bölümler (Offers, Engagement, WhyMe, PreAudit, FinalCTASection)
 * silinmedi; components/home içinde duruyor ve ileride geri açılabilir.
 */
export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const isTr = locale === "tr";
  const title = isTr
    ? "Tonguç Karaçay | UX, SEO, Yapay Zekâ ve Dijital Ürünler"
    : "Tonguç Karaçay | UX, SEO, AI & Digital Products";
  const description = isTr
    ? "Tonguç Karaçay'ın UX, dijital ürün tasarımı, SEO ve yapay zekâ alanlarındaki projeleri, deneyimleri ve teknik yazıları."
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
      <ValueProposition locale={locale} />
      <TrustedBy locale={locale} />
      <CaseHighlights locale={locale} />
      <Insights locale={locale} />
      <PersonalStory locale={locale} />
    </>
  );
}
