import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import CaseDetail from "@/components/cases/CaseDetail";
import { cases, type Locale } from "@/lib/cases";

type Props = { params: { locale: string; slug: string } };
export const dynamicParams = false;

export function generateStaticParams() {
  return cases.map((item) => ({ locale: "tr", slug: item.slug }));
}

export function generateMetadata({ params: { locale, slug } }: Props): Metadata {
  const item = cases.find((candidate) => candidate.slug === slug);
  if (!item || locale !== "tr") return {};
  const tr = "https://tonguckaracay.com/projeler/" + slug;
  const en = "https://tonguckaracay.com/en/case-studies/" + slug;
  const title = item.title["tr"] + " | Tonguç Karaçay";
  return {
    title,
    description: item.summary["tr"],
    alternates: {
      canonical: "tr" === "tr" ? tr : en,
      languages: { tr, en, "x-default": en },
    },
    openGraph: { title, description: item.summary["tr"] },
  };
}

export default function Page({ params: { locale, slug } }: Props) {
  const item = cases.find((candidate) => candidate.slug === slug);
  if (locale !== "tr" || !item) notFound();
  setRequestLocale(locale);
  return <CaseDetail item={item} locale={locale as Locale} />;
}
