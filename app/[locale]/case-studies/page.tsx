import { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import CaseStudiesPage, { caseStudiesMeta } from "@/components/cases/CaseStudiesPage";

type Props = { params: { locale: string } };

export const metadata: Metadata = caseStudiesMeta("en");

export default function Page({ params: { locale } }: Props) {
  if (locale !== "en") notFound();
  setRequestLocale(locale);
  return <CaseStudiesPage locale="en" />;
}
