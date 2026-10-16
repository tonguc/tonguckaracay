import { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import AboutPage from "@/components/about/AboutPage";

const title = "Hakkımda | Dijital Ürün ve UX Liderliği – Tonguç Karaçay";
const description = "26+ yıllık dijital ürün, UX ve ekip liderliği deneyimi. Kurumsal platformlar, B2B SaaS, e-ticaret ve yapay zeka projeleri.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://tonguckaracay.com/hakkimda",
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
  if (locale !== "tr") notFound();
  setRequestLocale(locale);
  return <AboutPage locale="tr" />;
}
