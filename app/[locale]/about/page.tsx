import { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import AboutPage from "@/components/about/AboutPage";

const title = "About Tonguç Karaçay | SEO, GEO & UX Consultant";
const description = "Independent consultant with 25+ years designing and growing digital products for Turkish Airlines, BMW, Borusan and media brands. Expertise and selected work.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://tonguckaracay.com/en/about",
    languages: {
      tr: "https://tonguckaracay.com/hakkimda",
      en: "https://tonguckaracay.com/en/about",
      "x-default": "https://tonguckaracay.com/en/about",
    },
  },
  openGraph: { title, description, type: "profile" },
};

type Props = { params: { locale: string } };

export default function Page({ params: { locale } }: Props) {
  if (locale !== "en") notFound();
  setRequestLocale(locale);
  return <AboutPage locale="en" />;
}
