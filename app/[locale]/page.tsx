import { setRequestLocale } from 'next-intl/server';
import HeroSlider from "@/components/home/HeroSlider";
import ValueProposition from "@/components/home/ValueProposition";
import TrustedBy from "@/components/home/TrustedBy";
import CaseStudies from "@/components/home/CaseStudies";
import Engagement from "@/components/home/Engagement";
import WhyMe from "@/components/home/WhyMe";
import Insights from "@/components/home/Insights";
import PersonalStory from "@/components/home/PersonalStory";
import FinalCTASection from "@/components/home/FinalCTASection";
import { getAllPosts } from "@/lib/blog-utils";

type Props = {
  params: { locale: string };
};

export default async function Home({ params: { locale } }: Props) {
  setRequestLocale(locale);

  const isTr = locale === "tr";
  const sliderPosts = getAllPosts(isTr ? "tr" : "en")
    .slice(0, 5)
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      description: p.description,
      category: p.category,
      image: p.image,
    }));

  return (
    <>
      {/* 1 — Hero Manşet Slider (en yeni yazılar) */}
      <HeroSlider locale={locale} posts={sliderPosts} />
      {/* 2 — Değer Önermesi (kim, ne, CTA, istatistikler) */}
      <ValueProposition locale={locale} />
      {/* 3 — Tipik Çalışma Süreci (timeline) */}
      <Engagement locale={locale} />
      {/* 4 — Neden Benimle */}
      <WhyMe locale={locale} />
      {/* 5 — Trusted By (sonuçlardan hemen önce, "kiminle çalıştım" bağlamı) */}
      <TrustedBy locale={locale} />
      {/* 6 — Sonuçlar & Vaka Çalışmaları */}
      <CaseStudies locale={locale} />
      {/* 7 — İçgörüler / Blog (Referanslar gerçek yorum gelince eklenecek) */}
      <Insights locale={locale} />
      {/* 8 — Kişisel Hikaye */}
      <PersonalStory locale={locale} />
      {/* 9 — Final CTA */}
      <FinalCTASection locale={locale} />
    </>
  );
}
