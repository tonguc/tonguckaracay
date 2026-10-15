import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Bot, Sparkles } from "lucide-react";
import { aiProjects, aiProjectHref, type AiProject, type ProjectLocale } from "@/lib/ai-projects";

export function ProjectCover({ item, locale, sizes = "(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw" }: {
  item: AiProject; locale: ProjectLocale; sizes?: string;
}) {
  if (item.image?.startsWith("/")) {
    return <Image src={item.image} alt={item.name} fill sizes={sizes} className="object-cover" />;
  }
  if (item.image) {
    return (
      // Etsy's own listing artwork (or a public project's own OG asset), not a generated mock screenshot.
      <img src={item.image} alt={item.name} loading="lazy" decoding="async" referrerPolicy="no-referrer" className="h-full w-full object-cover" />
    );
  }
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-800 p-5">
      <span className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/20 bg-white/10 font-display text-3xl font-bold text-white shadow-xl">{item.initials}</span>
      <span className="text-center font-display text-lg font-bold text-white">{item.name}</span>
      <span className="text-[11px] text-primary-300">{locale === "tr" ? "Proje kimliği" : "Project identity"}</span>
    </div>
  );
}

export default function AiProjectsGallery({ locale }: { locale: ProjectLocale }) {
  const isTr = locale === "tr";
  const core = aiProjects.filter(p=>p.status==="ai-product");
  const other = aiProjects.filter(p=>p.status==="ai-assisted");
  const card = (p: AiProject) => (
    <li key={p.slug} className="card group flex h-full flex-col overflow-hidden transition-colors hover:border-accent-500/40">
      <Link href={aiProjectHref(locale,p.slug)} className="block" aria-label={p.title[locale]}>
        <div className="relative aspect-[4/3] overflow-hidden bg-surface-darker">
          <ProjectCover item={p} locale={locale} />
          <span className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-surface-darker/90 px-3 py-1 text-xs font-semibold text-accent-200">
            {p.status==="ai-product" ? (isTr?"AI / Agent Ürünü":"AI / Agent Product") : (isTr?"AI ile Geliştirilmiş":"AI-Assisted Build")}
          </span>
        </div>
      </Link>
      <div className="flex flex-1 flex-col px-5 py-5">
        <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-400">{p.name}</span>
        <h3 className="font-display text-lg font-bold leading-snug text-white">
          <Link href={aiProjectHref(locale,p.slug)} className="hover:text-accent-300">{p.title[locale]}</Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-primary-300">{p.summary[locale]}</p>
        <Link href={aiProjectHref(locale,p.slug)} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-400">
          {isTr?"Proje Detayı":"Project Details"} <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </li>
  );
  return (
    <section id="ai-projects" className="mt-16 md:mt-24" aria-labelledby="ai-projects-title">
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">
          {isTr?"AI Ürün Geliştirme":"AI Product Development"}
        </p>
        <h2 id="ai-projects-title" className="section-title">
          {isTr?"AI ile " :"Built with "}<span className="text-gradient">{isTr?"Geliştirdiğim Projeler":"AI-Assisted Workflows"}</span>
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-primary-300 md:text-base">
          {isTr
            ? "Ürün stratejisi, ekip ve proje yönetimi, kullanıcı deneyimi ve yazılım geliştirme süreçlerinde yapay zekayı iş akışına entegre ettiğim seçili projeler. Claude, OpenAI Codex, MiMo, Qwen ve AI agent yaklaşımları genel geliştirme araç setimin parçasıdır."
            : "Selected work integrating AI into product strategy, project delivery, UX and software development. My broader development toolkit includes Claude, OpenAI Codex, MiMo, Qwen and AI agent workflows."}
        </p>
        <p className="mt-2 text-xs leading-relaxed text-primary-400">
          {isTr
            ? "Not: AI ile geliştirilmiş ürünlerin tümü kullanıcıya canlı AI yanıtı sunmaz. Araç isimleri portfolyo genelindeki çalışma biçimini gösterir; her modelin her projede kullanıldığı iddia edilmez."
            : "AI-assisted builds do not necessarily run AI models at runtime. The tool names describe my portfolio-wide workflow, not verified per-project use of every model."}
        </p>
      </div>

      <div className="mb-8 flex items-center gap-2 text-white">
        <Bot className="h-5 w-5 text-accent-400"/>
        <h3 className="font-display text-xl font-semibold">{isTr?"AI & Agent Sistemleri":"AI & Agent Systems"}</h3>
      </div>
      <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{core.map(card)}</ul>

      <div className="mb-8 mt-12 flex items-center gap-2 text-white">
        <Sparkles className="h-5 w-5 text-accent-400"/>
        <h3 className="font-display text-xl font-semibold">{isTr?"AI Destekli Ürün Geliştirme":"AI-Assisted Product Development"}</h3>
      </div>
      <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{other.map(card)}</ul>
    </section>
  );
}
