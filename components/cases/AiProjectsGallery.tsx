"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Bot, Sparkles } from "lucide-react";
import { aiProjects, aiProjectHref, type AiProject, type ProjectLocale } from "@/lib/ai-projects";

export function ProjectCover({ item, locale, sizes = "(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw" }: {
  item: AiProject; locale: ProjectLocale; sizes?: string;
}) {
  const [imageFailed, setImageFailed] = useState(false);
  useEffect(() => setImageFailed(false), [item.slug, item.image]);
  if (imageFailed || !item.image) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[#0e1726] p-5 text-center">
        <span className="text-xl font-bold text-white">{item.name}</span>
        <span className="text-xs text-primary-300">
          {locale === "tr" ? "Görsel yüklenemedi. Ürün bağlantısından inceleyebilirsiniz." : "Image unavailable. View the original listing."}
        </span>
      </div>
    );
  }
  if (item.source === "etsy") {
    return <img src={item.image} alt={item.name + " Etsy ürün görseli"} loading="lazy"
      decoding="async" referrerPolicy="no-referrer" onError={() => setImageFailed(true)}
      className="h-full w-full object-contain bg-[#121b2b]" />;
  }
  if (item.image.endsWith(".svg")) {
    return <img src={item.image} alt={item.name} loading="lazy" decoding="async"
      onError={() => setImageFailed(true)} className="h-full w-full object-contain bg-[#0b1326]" />;
  }
  return <Image src={item.image} alt={item.name} fill sizes={sizes}
    className="object-contain bg-[#10182a] p-1.5" />;
}

export default function AiProjectsGallery({ locale }: { locale: ProjectLocale }) {
  const isTr = locale === "tr";
  const etsyProducts = aiProjects.filter(p=>p.source==="etsy");
  const other = aiProjects.filter(p=>p.source!=="etsy");
  const card = (p: AiProject) => (
    <li key={p.slug} className="card group flex h-full flex-col overflow-hidden transition-colors hover:border-accent-500/40">
      <Link href={aiProjectHref(locale,p.slug)} className="block" aria-label={p.title[locale]}>
        <div className="relative aspect-[4/3] overflow-hidden bg-surface-darker">
          <ProjectCover item={p} locale={locale} />
          <span className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-surface-darker/90 px-3 py-1 text-xs font-semibold text-accent-200">
            {p.status==="ai-product" ? (isTr?"Yapay Zeka / Ajan Sistemi":"AI / Agent Product") : (isTr?"Yapay Zeka ile Geliştirildi":"AI-Assisted Build")}
          </span>
        </div>
      </Link>
      <div className="flex flex-1 flex-col px-5 py-5">
        <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-400">{p.name}</span>
        <h3 className="font-display text-lg font-bold leading-snug text-white">
          <Link href={aiProjectHref(locale,p.slug)} className="hover:text-accent-300">{p.title[locale]}</Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-primary-300">{p.summary[locale]}</p>
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
          <Link href={aiProjectHref(locale,p.slug)} className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-400">
            {isTr?"Proje Detayı":"Project Details"} <ArrowUpRight className="h-4 w-4" />
          </Link>
          {p.source==="etsy" && p.externalUrl && (
            <a href={p.externalUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-accent-300">
              {isTr?"Etsy'de Ürünü Gör":"View on Etsy"} <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </li>
  );
  return (
    <section id="ai-projects" className="mt-16 md:mt-24" aria-labelledby="ai-projects-title">
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
          {isTr?"Yapay Zeka Ürün Geliştirme":"AI Product Development"}
        </p>
        <h2 id="ai-projects-title" className="section-title">
          {isTr?"Yapay Zeka ile " :"Built with "}<span className="text-gradient">{isTr?"Geliştirdiğim Projeler":"AI-Assisted Workflows"}</span>
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary-300 md:text-base">
          {isTr
            ? "Ürün stratejisi, ekip ve proje yönetimi, kullanıcı deneyimi ve yazılım geliştirme süreçlerinde yapay zekayı iş akışına entegre ettiğim seçili projeler. Claude, OpenAI Codex, MiMo, Qwen ve yapay zeka ajanı yaklaşımları genel geliştirme araç setimin parçasıdır."
            : "Selected work integrating AI into product strategy, project delivery, UX and software development. My broader development toolkit includes Claude, OpenAI Codex, MiMo, Qwen and AI agent workflows."}
        </p>
        <p className="mt-2 text-xs leading-relaxed text-primary-400">
          {isTr
            ? "Etsy kartlarındaki görseller gerçek ilan kapaklarına bağlıdır. Yapay zeka ile geliştirilmiş her ürün kendi içinde canlı bir yapay zeka modeli çalıştırmaz."
            : "AI-assisted builds do not necessarily run AI models at runtime. The tool names describe my portfolio-wide workflow, not verified per-project use of every model."}
        </p>
      </div>

      <div className="mb-8 flex items-center gap-2 text-white">
        <Sparkles className="h-5 w-5 text-accent-400"/>
        <h3 className="font-display text-xl font-semibold">{isTr?"SnapixDesign · Etsy'deki Dijital Ürünler":"SnapixDesign · Etsy Digital Products"}</h3>
      </div>
      <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{etsyProducts.map(card)}</ul>

      <div className="mb-8 mt-12 flex items-center gap-2 text-white">
        <Bot className="h-5 w-5 text-accent-400"/>
        <h3 className="font-display text-xl font-semibold">{isTr?"Diğer Dijital Projeler ve Otomasyonlar":"Other Digital Products & Automations"}</h3>
      </div>
      <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{other.map(card)}</ul>
    </section>
  );
}
