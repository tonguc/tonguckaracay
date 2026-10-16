import { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import AboutPage from "@/components/about/AboutPage";

const title = "About | Digital Product & UX Leadership – Tonguç Karaçay";
const description = "26+ years in digital product development, UX and cross-functional team leadership across enterprise, B2B SaaS, e-commerce and AI products.";

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
