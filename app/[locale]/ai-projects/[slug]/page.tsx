import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import AiProjectDetail from "@/components/cases/AiProjectDetail";
import { aiProjects, findAiProject, type ProjectLocale } from "@/lib/ai-projects";

type Props = { params: { locale: string; slug: string } };
export const dynamicParams = false;
export function generateStaticParams() {
  return ["tr","en"].flatMap(locale=>aiProjects.map(p=>({locale,slug:p.slug})));
}
export async function generateMetadata({params:{locale,slug}}:Props):Promise<Metadata>{
  const p=findAiProject(slug);
  if(!p || (locale!=="tr" && locale!=="en"))return {};
  const loc=locale as ProjectLocale;
  const tr="https://tonguckaracay.com/ai-projects/"+slug;
  const en="https://tonguckaracay.com/en/ai-projects/"+slug;
  const description=p.summary[loc];
  return {
    title:p.title[loc]+" | Tonguç Karaçay",
    description,
    alternates: {canonical:locale==="tr"?tr:en,languages:{"tr":tr,"en":en,"x-default":en}},
    openGraph:{title:p.title[loc],description}
  };
}
export default function Page({params:{locale,slug}}:Props){
  if((locale!=="tr" && locale!=="en") || !findAiProject(slug))notFound();
  setRequestLocale(locale);
  return <AiProjectDetail locale={locale as ProjectLocale} slug={slug} />;
}
