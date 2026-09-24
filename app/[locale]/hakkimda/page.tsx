import { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import AboutPage from "@/components/about/AboutPage";

const title = "Hakkımda | Tonguç Karaçay – SEO ve UX Danışmanı";
const description = "25+ yıldır Türk Hava Yolları, BMW, Borusan ve medya markaları için UX, SEO ve dijital ürün geliştiren bağımsız danışman. Uzmanlık alanları ve seçili çalışmalar.";

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
