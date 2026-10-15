import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Bot, CheckCircle2 } from "lucide-react";
import { ProjectCover } from "@/components/cases/AiProjectsGallery";
import { aiProjects, aiProjectHref, findAiProject, type ProjectLocale } from "@/lib/ai-projects";

export default function AiProjectDetail({ locale, slug }: { locale: ProjectLocale; slug: string }) {
  const p = findAiProject(slug);
  if (!p) return null;
  const isTr = locale === "tr";
  const back = isTr?"/projeler#ai-projects":"/en/case-studies#ai-projects";
  return (
    <main className="container-custom pb-20 pt-28 md:pt-36">
      <Link href={back} className="inline-flex items-center gap-2 text-sm font-semibold text-accent-400 hover:text-accent-300">
        <ArrowLeft className="h-4 w-4" />{isTr?"Tüm Projelere Dön":"Back to Projects"}
      </Link>
      <header className="mt-8 max-w-4xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">{p.name} · {isTr?"Ürün Liderliği":"Product Leadership"}</p>
        <h1 className="font-display text-3xl font-bold leading-tight text-white md:text-5xl">{p.title[locale]}</h1>
        <p className="mt-5 text-lg leading-relaxed text-primary-300">{p.summary[locale]}</p>
      </header>

      <div className="relative mt-8 aspect-[16/9] max-w-5xl overflow-hidden rounded-2xl border border-surface-border bg-surface-darker">
        <ProjectCover item={p} locale={locale} sizes="(min-width: 1024px) 1100px, 100vw" />
      </div>
      <p className="mt-2 max-w-5xl text-xs text-primary-400">
        {p.image?.endsWith(".svg") && p.slug !== "whattime-city"
          ? (isTr ? "Görsel, proje akışını anlatan temsili bir diyagramdır; gerçek uygulama ekran görüntüsü değildir." : "This is a conceptual project workflow diagram, not a live application screenshot.")
          : (isTr ? "Görsel, projeye ait portfolyo veya uygulama dosyalarından alınmıştır." : "Visual from existing portfolio or project files.")}
      </p>

      <div className="mt-12 grid max-w-5xl gap-8 lg:grid-cols-[1fr_0.65fr]">
        <div>
          <h2 className="font-display text-2xl font-bold text-white">{isTr?"Proje ve Liderlik Kapsamı":"Project & Leadership Scope"}</h2>
          <p className="mt-4 leading-relaxed text-primary-300">{p.responsibility[locale]}</p>
          <ul className="mt-6 space-y-4">
            {p.highlights[locale].map((line)=>(
              <li key={line} className="flex gap-3 text-primary-200">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
        <aside className="space-y-6">
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-white">{isTr?"Teknolojiler ve Uzmanlıklar":"Technology & Expertise"}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map(t=><span key={t} className="rounded-full border border-surface-border px-3 py-1 text-xs text-primary-200">{t}</span>)}
            </div>
          </div>
          <div className="card p-6">
            <div className="flex items-center gap-2 text-white"><Bot className="h-5 w-5 text-accent-400"/><h2 className="text-lg font-semibold">{isTr?"Yapay Zeka ile Geliştirme":"AI-Assisted Development"}</h2></div>
            <p className="mt-3 text-sm leading-relaxed text-primary-300">
              {isTr
                ? "Genel geliştirme ekosistemim: Claude, OpenAI Codex, MiMo, Qwen ve görev odaklı yapay zeka ajanı iş akışları. Araştırma, prototipleme, kod geliştirme ve bağımsız kontrol süreçlerinde farklı araçlardan yararlanıyorum."
                : "My wider development toolkit includes Claude, OpenAI Codex, MiMo, Qwen and task-oriented AI agent workflows for research, prototyping, implementation and review."}
            </p>
            {p.confirmedAiTools && <p className="mt-3 text-xs font-semibold text-accent-300">{isTr?"Bu projede doğrulanan araç":"Tool confirmed on this project"}: {p.confirmedAiTools.join(", ")}</p>}
            <p className="mt-3 text-xs leading-relaxed text-primary-400">
              {isTr?"Not: Liste tüm araçların bu projede ayrı ayrı kullanıldığı anlamına gelmez.":"The toolkit list does not claim every tool was used in this particular project."}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-primary-400">
              {p.status==="ai-assisted"
                ? (isTr?"Yapay zeka geliştirme sürecine katkı sağladı; ürünün kendisinin canlı yapay zeka modeli çalıştırdığı iddia edilmez.":"AI supported development; this does not imply the end product runs a live AI model.")
                : (isTr?"Yapay zeka ve ajan işlevlerinin kapsamı proje açıklamasında belirtilmiştir.":"AI or agent functionality is described within this project's scope.")}
            </p>
          </div>
          {p.externalUrl && p.source !== "etsy" && (
            <a href={p.externalUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-accent-400 hover:text-accent-300">
              {isTr?"Proje Kaynağını Gör":"View Project Source"} <ArrowUpRight className="h-4 w-4"/>
            </a>
          )}
        </aside>
      </div>

      <div className="mt-12 max-w-5xl border-t border-surface-border pt-8">
        <Link href={back} className="inline-flex items-center gap-2 font-semibold text-accent-400"><ArrowLeft className="h-4 w-4"/>{isTr?"Projelere Dön":"Back to Projects"}</Link>
      </div>
    </main>
  );
}
