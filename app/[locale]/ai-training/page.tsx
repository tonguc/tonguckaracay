import { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from 'next-intl/server';
import { aiProjects, findAiProject, type AiProject } from "@/lib/ai-projects";
import {
  ArrowRight,
  Sparkles,
  Stethoscope,
  Home,
  ShoppingBag,
  Megaphone,
  Scissors,
  Rocket,
  CheckCircle2,
  XCircle,
  Users,
  Building2,
  Brain,
  Workflow,
  Database,
  Shield,
  Target,
  Lightbulb,
} from "lucide-react";

const WHATSAPP_NUMBER = "905323824838";

const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export const metadata: Metadata = {
  title: "AI Training for Teams & Individuals | Tonguç Karaçay",
  description: "Hands-on AI training for teams and individuals: learn to build ChatGPT, Claude and automation systems that speed up your content, ads and operations.",
  keywords: ["AI training", "ChatGPT training", "corporate AI training", "AI for business", "AI workflow automation", "learn to build AI systems"],
  alternates: {
    canonical: 'https://tonguckaracay.com/en/ai-training',
    languages: {
      'tr': 'https://tonguckaracay.com/ai-egitimi',
      'en': 'https://tonguckaracay.com/en/ai-training',
      'x-default': 'https://tonguckaracay.com/en/ai-training',
    },
  },
  openGraph: {
    title: "AI Training for Teams & Individuals | Tonguç Karaçay",
    description: "Hands-on AI training for teams and individuals: learn to build ChatGPT, Claude and automation systems that speed up your content, ads and operations.",
    url: 'https://tonguckaracay.com/en/ai-training',
    type: 'website',
  },
};

const sectors = [
  {
    icon: Stethoscope,
    name: "Doctors & Clinics",
    output: "Learn to build weekly content, patient education videos, and visual production systems.",
    anchor: "doctors",
  },
  {
    icon: Home,
    name: "Real Estate",
    output: "Learn to make listing copy, virtual staging, and follow-up flows semi-automated.",
    anchor: "real-estate",
  },
  {
    icon: ShoppingBag,
    name: "E-commerce SMB",
    output: "Learn to make product descriptions and ad creatives produceable at scale.",
    anchor: "ecommerce",
  },
  {
    icon: Megaphone,
    name: "Marketing Agencies",
    output: "Learn to build a workflow from brief to campaign, pitch deck to ad variant.",
    anchor: "agencies",
  },
  {
    icon: Scissors,
    name: "Beauty & Aesthetic Clinics",
    output: "Learn to build before/after edits, content calendars, and review analysis flows.",
    anchor: "beauty",
  },
  {
    icon: Rocket,
    name: "SaaS Founders",
    output: "Learn to make landing copy, blog posts, and support drafts semi-automated.",
    anchor: "saas",
  },
];

const curriculum = [
  {
    icon: Brain,
    title: "AI tools and selection logic",
    desc: "ChatGPT, Claude, Gemini, Midjourney, Runway, ElevenLabs — which tool for which job.",
  },
  {
    icon: Sparkles,
    title: "Content production system",
    desc: "Learn to consolidate blog, social, video script, and visual production into one flow.",
  },
  {
    icon: Target,
    title: "Ad creative system",
    desc: "Learn to build a copy, visual, and A/B variant pipeline for Meta and Google.",
  },
  {
    icon: Workflow,
    title: "Semi-automated workflows",
    desc: "Learn to connect AI tools to email, CRM, calendar, and messaging systems.",
  },
  {
    icon: Database,
    title: "Prompt library",
    desc: "Learn to build reusable prompt systems tailored to your sector.",
  },
  {
    icon: Shield,
    title: "Data safety & human review",
    desc: "Learn what data goes to AI and what output needs human approval.",
  },
];

const sectorDetails = [
  {
    anchor: "doctors",
    icon: Stethoscope,
    name: "Doctors & Clinics",
    produce: [
      "Weekly 3–5 social posts (copy + visual)",
      "Patient education video (script + voiceover draft)",
      "Pre-appointment message templates",
    ],
    how: "Branding rules → prompt template → content calendar → review process.",
  },
  {
    anchor: "ecommerce",
    icon: ShoppingBag,
    name: "E-commerce SMB",
    produce: [
      "Description variants for multiple SKUs",
      "Ad copy and creative variants",
      "Customer reply drafts (human-reviewed)",
    ],
    how: "Product info → prompt template → variant generation → edit → publish.",
  },
  {
    anchor: "agencies",
    icon: Megaphone,
    name: "Marketing Agencies",
    produce: [
      "Strategy doc draft from brief",
      "Presentation and pitch deck draft",
      "Multiple creative variants per ad set",
    ],
    how: "Client brief → AI draft → human revision → final output.",
  },
];

// All AI-assisted products sold on Etsy (single source: lib/ai-projects.ts)
const showcase = aiProjects.filter(
  (p): p is AiProject & { image: string } => p.source === "etsy" && Boolean(p.image),
);

// Featured clinic project — real screenshot (clinician name blurred)
const hastaOnay = findAiProject("hastaonay");
const HASTAONAY_IMAGE = "/showcase/hastaonay-dashboard.png";

const keyFacts = [
  "4 weeks · 12 hours total",
  "Online or in person",
  "No coding required",
  "Start anytime",
];

// Color palette for cards (Tailwind classes must stay static)
const tones = [
  { card: "bg-gradient-to-br from-indigo-500/20 via-indigo-500/5 to-transparent border-indigo-400/30 hover:border-indigo-300/70", icon: "bg-indigo-500/25 text-indigo-200", chip: "bg-indigo-500/15 text-indigo-200 border-indigo-400/30", text: "text-indigo-300" },
  { card: "bg-gradient-to-br from-emerald-500/20 via-emerald-500/5 to-transparent border-emerald-400/30 hover:border-emerald-300/70", icon: "bg-emerald-500/25 text-emerald-200", chip: "bg-emerald-500/15 text-emerald-200 border-emerald-400/30", text: "text-emerald-300" },
  { card: "bg-gradient-to-br from-amber-500/20 via-amber-500/5 to-transparent border-amber-400/30 hover:border-amber-300/70", icon: "bg-amber-500/25 text-amber-200", chip: "bg-amber-500/15 text-amber-200 border-amber-400/30", text: "text-amber-300" },
  { card: "bg-gradient-to-br from-rose-500/20 via-rose-500/5 to-transparent border-rose-400/30 hover:border-rose-300/70", icon: "bg-rose-500/25 text-rose-200", chip: "bg-rose-500/15 text-rose-200 border-rose-400/30", text: "text-rose-300" },
  { card: "bg-gradient-to-br from-sky-500/20 via-sky-500/5 to-transparent border-sky-400/30 hover:border-sky-300/70", icon: "bg-sky-500/25 text-sky-200", chip: "bg-sky-500/15 text-sky-200 border-sky-400/30", text: "text-sky-300" },
  { card: "bg-gradient-to-br from-fuchsia-500/20 via-fuchsia-500/5 to-transparent border-fuchsia-400/30 hover:border-fuchsia-300/70", icon: "bg-fuchsia-500/25 text-fuchsia-200", chip: "bg-fuchsia-500/15 text-fuchsia-200 border-fuchsia-400/30", text: "text-fuchsia-300" },
];
const tone = (i: number) => tones[i % tones.length];

const faq = [
  {
    q: "Do I need technical knowledge to join?",
    a: "No. We start from zero. If you can use a computer and commit to consistent practice, you're set.",
  },
  {
    q: "How long is the program?",
    a: "The individual program runs 4 weeks, 12 hours in total. Between sessions you apply what you learn to your own business.",
  },
  {
    q: "Is it online or in person?",
    a: "Either works — whichever suits you. Individual sessions run live and are recorded. Corporate programs are scheduled around your team.",
  },
  {
    q: "When can I start?",
    a: "Anytime. There's no fixed cohort start date; we set your start date together.",
  },
  {
    q: "My sector isn't in the list. Can I still join?",
    a: "Yes. The core curriculum is sector-agnostic. Message on WhatsApp and we'll figure out the fit together.",
  },
  {
    q: "Which tools require paid subscriptions?",
    a: "Most tools work on free or low-cost tiers. We clarify which subscriptions are actually worth it in week one.",
  },
  {
    q: "How is a corporate program planned?",
    a: "We start with a short discovery call. I shape the curriculum around your team, goal, and existing workflow.",
  },
  {
    q: "What do I walk away with?",
    a: "A sector-specific prompt library, working workflow drafts, and a system foundation you can keep building on.",
  },
];

export default function AiTrainingPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "AI Training — Learn to Build AI Systems for Your Business",
    description: "Individual and corporate AI training. Learn to make your content, ads, and operations semi-automated.",
    provider: {
      "@type": "Person",
      name: "Tonguç Karaçay",
      url: "https://tonguckaracay.com",
    },
    inLanguage: "en-US",
    url: "https://tonguckaracay.com/en/ai-training",
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />

      {/* HERO */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="flex items-center justify-center gap-2 text-sm text-primary-400 mb-6">
              <Link href="/en" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">AI Training</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Individual & Corporate AI Programs</span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">
              Grow your business with AI.{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Speed up your content, ads, and operations.
              </span>
            </h1>

            <p className="text-xl text-primary-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              This program isn't a tool tutorial. You'll learn to build systems that work in your business.
            </p>

            <ul className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
              {keyFacts.map((fact, i) => (
                <li
                  key={fact}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium ${tone([1, 4, 2, 5][i]).chip}`}
                >
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  {fact}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={waLink("Hi, I'd like to know more about the AI Training program.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-green-500/20"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Message on WhatsApp
              </a>
              <Link
                href="#individual"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-surface-card border border-surface-border hover:border-indigo-500/50 text-white font-semibold rounded-xl transition-all"
              >
                <Users className="w-5 h-5" />
                Individual
              </Link>
              <Link
                href="#corporate"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-surface-card border border-surface-border hover:border-violet-500/50 text-white font-semibold rounded-xl transition-all"
              >
                <Building2 className="w-5 h-5" />
                For my company
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CALLOUT — Positioning */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-indigo-500/10 via-violet-500/5 to-transparent border border-indigo-500/20 rounded-2xl p-8 md:p-10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <Sparkles className="w-5 h-5 text-indigo-300" />
              </div>
              <div className="flex-1">
                <h2 className="font-display text-xl md:text-2xl font-bold text-white mb-3">
                  This isn't just another AI course.
                </h2>
                <p className="text-primary-300 leading-relaxed mb-6">
                  26 years of UX experience, SEO expertise, digital advertising knowledge, and daily AI practice — in one program.
                  Not teaching tools — teaching you to build systems that actually fit your existing business.
                </p>
                <p className="text-xs font-semibold text-primary-500 uppercase tracking-wider mb-3">
                  Tools we use in the program
                </p>
                <div className="flex flex-wrap gap-2">
                  {["ChatGPT", "Claude", "Google Gemini", "Midjourney", "Canva AI"].map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/30 rounded-lg text-xs text-indigo-200 font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON — Casual use vs System building */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              What's the difference?
            </h2>
            <p className="text-lg text-primary-300 max-w-2xl mx-auto">
              Most AI use stays at the tool level and never produces results. This program builds systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-rose-500/15 via-orange-500/5 to-transparent border border-rose-400/25 rounded-2xl p-8">
              <h3 className="font-display text-lg font-bold text-rose-200 mb-6 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-rose-500/25 text-rose-200 flex items-center justify-center text-xs">✕</span>
                Casual AI use
              </h3>
              <ul className="space-y-4">
                {[
                  "Write prompts from scratch every time",
                  "Inconsistent outputs, shifting tone",
                  "Learns the tool, can't apply it to the job",
                  "Stays in the curiosity phase, no real output",
                  "No clear idea which tool does what",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-primary-200 text-sm">
                    <XCircle className="w-4 h-4 text-rose-300 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/20 via-sky-500/10 to-indigo-500/10 border border-emerald-400/35 rounded-2xl p-8 shadow-lg shadow-emerald-500/10">
              <h3 className="font-display text-lg font-bold text-emerald-200 mb-6 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-500/25 text-emerald-200 flex items-center justify-center text-xs">✓</span>
                Building a system
              </h3>
              <ul className="space-y-4">
                {[
                  "Reusable prompt library built for your work",
                  "Consistent outputs aligned to your brand",
                  "Workflow integrated into your business process",
                  "Real production output every week",
                  "Clear purpose for each tool",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-primary-100 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE — Systems I've built */}
      <section className="py-16 md:py-20 bg-surface-darker">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Real examples</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Products I&apos;ve built with AI
            </h2>
            <p className="text-lg text-primary-300 max-w-2xl mx-auto">
              Real products built with the methods I teach: a clinic system and every digital product I sell on Etsy.
            </p>
          </div>

          {hastaOnay && (
            <div className="max-w-6xl mx-auto mb-8 grid lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden border border-emerald-400/30 bg-gradient-to-br from-emerald-500/20 via-sky-500/10 to-indigo-500/10 shadow-xl shadow-emerald-500/10">
              <div className="lg:col-span-3 p-3 sm:p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={HASTAONAY_IMAGE}
                  alt="hastaOnay clinic consent system dashboard screenshot"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-2xl border border-white/10 shadow-lg"
                />
              </div>
              <div className="lg:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                <span className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs font-semibold mb-4">
                  <Stethoscope className="w-3.5 h-3.5" />
                  For clinics
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
                  hastaOnay — Digital patient consent system
                </h3>
                <p className="text-primary-200 leading-relaxed mb-5">{hastaOnay.summary.en}</p>
                <ul className="space-y-2 mb-6">
                  {hastaOnay.highlights.en.slice(0, 2).map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-primary-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-300 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {hastaOnay.stack.map((tool) => (
                    <span key={tool} className="px-2.5 py-1 text-xs bg-emerald-500/15 text-emerald-200 rounded-md border border-emerald-400/30">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {showcase.map((item, i) => (
              <div
                key={item.slug}
                className={`border rounded-2xl overflow-hidden transition-all group ${tone(i).card}`}
              >
                <a
                  href={item.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-[4/3] bg-surface-darker overflow-hidden"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={`${item.name} screenshot`}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </a>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-display text-lg font-bold text-white">{item.name}</h3>
                    {item.externalUrl && (
                      <a
                        href={item.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${item.name} on Etsy`}
                        className={`${tone(i).text} hover:text-white transition-colors flex-shrink-0`}
                      >
                        <ArrowRight className="w-5 h-5 -rotate-45" />
                      </a>
                    )}
                  </div>
                  <p className="text-primary-200 text-sm leading-relaxed mb-4">{item.summary.en}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.stack.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className={`px-2.5 py-1 text-xs rounded-md border ${tone(i).chip}`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-primary-500 text-sm italic mt-8">
            In the program, you'll learn how to adapt systems like these to your sector.
          </p>
        </div>
      </section>

      {/* SECTOR GRID */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              What sector are you in?
            </h2>
            <p className="text-lg text-primary-300 max-w-2xl mx-auto">
              Every sector has its own content language, ad logic, and operational rhythm. The program adapts to yours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {sectors.map((sector, i) => {
              const Icon = sector.icon;
              return (
                <Link
                  key={sector.anchor}
                  href={`#${sector.anchor}`}
                  className={`group border rounded-2xl p-6 transition-all ${tone(i).card}`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${tone(i).icon}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">{sector.name}</h3>
                  <p className="text-primary-300 text-sm leading-relaxed">{sector.output}</p>
                </Link>
              );
            })}
          </div>

          <p className="text-center text-primary-500 text-sm italic mt-8">
            These are just a few of the things you can build. Every sector's use cases are different.
          </p>
        </div>
      </section>

      {/* SEGMENT: Individual vs Corporate */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Which one fits you?
            </h2>
            <p className="text-lg text-primary-300 max-w-2xl mx-auto">
              Two programs. Two audiences. Clear focus.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div id="individual" className="bg-gradient-to-br from-indigo-500/25 via-sky-500/10 to-transparent border border-indigo-400/40 rounded-2xl p-8 flex flex-col scroll-mt-24 shadow-lg shadow-indigo-500/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-indigo-300" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">Individual</h3>
              </div>
              <p className="text-primary-300 mb-6">
                For freelancers, solo operators, and professionals growing their own business.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Freelancer / solo operator",
                  "4 weeks · 12 hours total",
                  "Online or in person, live sessions + full recording access",
                  "Start anytime",
                  "Sector-specific prompt library",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-primary-300">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={waLink("Hi, I'd like to reserve a spot in the individual AI Training cohort.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Reserve your seat on WhatsApp
              </a>
            </div>

            <div id="corporate" className="bg-gradient-to-br from-fuchsia-500/25 via-violet-500/10 to-transparent border border-fuchsia-400/40 rounded-2xl p-8 flex flex-col scroll-mt-24 shadow-lg shadow-fuchsia-500/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-violet-300" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">Corporate</h3>
              </div>
              <p className="text-primary-300 mb-6">
                Custom programs for teams of 5+. Workshop, mentoring, and systems built for your company.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Teams of 5+",
                  "Workshop + mentoring",
                  "Company-specific systems",
                  "Curriculum tailored to your team",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-primary-300">
                    <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={waLink("Hi, I'd like a quote for corporate AI Training for my company.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Request a quote on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="py-16 md:py-20 bg-surface-darker">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Curriculum
            </h2>
            <p className="text-lg text-primary-300 max-w-2xl mx-auto">
              Six modules — built around needs, not tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {curriculum.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className={`border rounded-2xl p-6 transition-all ${tone(idx + 2).card}`}>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${tone(idx + 2).icon}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-primary-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTOR DETAIL */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Sector deep-dive
            </h2>
            <p className="text-lg text-primary-300 max-w-2xl mx-auto">
              Three sectors — concrete examples. For other sectors, get in touch.
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {sectorDetails.map((detail, i) => {
              const Icon = detail.icon;
              const t = tone([0, 2, 3][i] ?? i);
              return (
                <div
                  key={detail.anchor}
                  id={detail.anchor}
                  className={`border rounded-2xl p-8 scroll-mt-24 ${t.card}`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${t.icon}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">{detail.name}</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-sm font-semibold text-indigo-300 uppercase tracking-wider mb-3">
                        What you can produce
                      </h4>
                      <ul className="space-y-2">
                        {detail.produce.map((item) => (
                          <li key={item} className="text-primary-300 text-sm flex items-start gap-2">
                            <span className="text-violet-400 flex-shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-indigo-300 uppercase tracking-wider mb-3">
                        How it's applied
                      </h4>
                      <p className="text-primary-300 text-sm leading-relaxed">{detail.how}</p>
                    </div>
                  </div>
                  <p className="text-primary-500 text-xs italic mt-6">
                    These are just a few of the things you can build.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT THIS PROGRAM ISN'T */}
      <section className="py-16 md:py-20 bg-surface-darker">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Let&apos;s set <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">clear expectations</span>
              </h2>
              <p className="text-lg text-primary-300 max-w-2xl mx-auto">
                Start with the right expectations and you&apos;ll see results faster.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-amber-500/20 via-amber-500/5 to-transparent border-amber-400/35 border rounded-2xl p-6">
                <Lightbulb className="w-8 h-8 text-amber-300 mb-3" />
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  Not a get-rich-quick scheme
                </h3>
                <p className="text-primary-200 text-sm">
                  No passive income promises. This is an infrastructure program that increases production speed in your craft.
                </p>
              </div>
              <div className="bg-gradient-to-br from-sky-500/20 via-sky-500/5 to-transparent border-sky-400/35 border rounded-2xl p-6">
                <Lightbulb className="w-8 h-8 text-sky-300 mb-3" />
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  Not a one-click solution
                </h3>
                <p className="text-primary-200 text-sm">
                  AI doesn't run your business by itself. You build the system, you operate it, you approve outputs.
                </p>
              </div>
              <div className="bg-gradient-to-br from-emerald-500/20 via-emerald-500/5 to-transparent border-emerald-400/35 border rounded-2xl p-6">
                <Lightbulb className="w-8 h-8 text-emerald-300 mb-3" />
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  Doesn't work without practice
                </h3>
                <p className="text-primary-200 text-sm">
                  Watching alone won't cut it. Weekly application and adapting it to your own business is required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSTRUCTOR */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-fuchsia-500/15 border border-indigo-400/30 rounded-2xl overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{ backgroundImage: "radial-gradient(circle, #818cf8 1px, transparent 1px)", backgroundSize: "20px 20px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-violet-500/5 pointer-events-none" />

              <div className="relative p-8 md:p-12">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10 pb-10 border-b border-surface-border">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/20">
                    <span className="text-white font-bold text-2xl font-display">TK</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-2xl font-bold text-white">Tonguç Karaçay</h2>
                    <p className="text-indigo-300 text-sm mt-0.5">AI-Driven UX & Growth Partner</p>
                    <p className="text-primary-200 text-sm">Istanbul — Turkey, Europe, USA, Gulf markets</p>
                  </div>
                  <a
                    href={waLink("Hi Tonguç, I have a question about the AI Training.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all text-sm flex-shrink-0"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    Message
                  </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                  {[
                    { stat: "26+", label: "Years of experience" },
                    { stat: "4", label: "Disciplines: UX · SEO · Ads · AI" },
                    { stat: "TR + EN", label: "Content markets" },
                    { stat: "Global", label: "Client portfolio" },
                  ].map(({ stat, label }, i) => (
                    <div key={label} className={`border rounded-xl p-4 text-center ${tone([0, 1, 2, 5][i]).card}`}>
                      <div className={`font-display text-2xl font-bold mb-1 ${tone([0, 1, 2, 5][i]).text}`}>
                        {stat}
                      </div>
                      <p className="text-primary-200 text-xs leading-snug">{label}</p>
                    </div>
                  ))}
                </div>

                <p className="text-primary-300 leading-relaxed">
                  Strategist combining 26 years of UX, SEO, and digital marketing with active AI practice.
                  Builds and deploys AI systems across Turkey, Europe, and the US — and teaches you to do the same.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-surface-darker">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently asked questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faq.map((item, idx) => (
              <details
                key={idx}
                className="group bg-gradient-to-r from-indigo-500/10 to-violet-500/5 border border-indigo-400/20 open:border-indigo-400/50 open:from-indigo-500/20 rounded-xl overflow-hidden transition-colors"
              >
                <summary className="cursor-pointer px-6 py-4 flex items-center justify-between gap-4 text-white font-medium hover:bg-surface-border/30 transition-colors">
                  <span>{item.q}</span>
                  <ArrowRight className="w-5 h-5 text-indigo-400 flex-shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-5 text-primary-300 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTING ALTERNATIVE */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-sky-500/20 via-sky-500/5 to-transparent border border-sky-400/30 rounded-2xl p-6 md:p-8">
            <h2 className="font-display text-2xl font-bold text-white mb-3">
              Training or consulting?
            </h2>
            <p className="text-primary-300 leading-relaxed mb-5">
              Training fits teams that will build the system themselves. If you
              need process discovery, a controlled pilot, integration, and
              maintenance delivered as a project, review AI automation
              consulting instead.
            </p>
            <Link href="/en/services/ai-solutions" className="text-indigo-400 font-semibold hover:underline">
              AI automation consulting for SMBs
              <ArrowRight className="inline-block ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="py-8">
        <div className="container-custom">
          <p className="max-w-3xl mx-auto text-center text-primary-400 text-sm leading-relaxed border-t border-surface-border pt-8">
            Results vary by sector, application, and consistency. This program teaches you to build the system.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10 border border-indigo-500/30 rounded-3xl p-10 md:p-14">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
              Ready? Let's start.
            </h2>
            <p className="text-lg md:text-xl text-primary-300 mb-8 leading-relaxed">
              Seats are limited. Let's figure out the fit together.
            </p>
            <a
              href={waLink("Hi, I want to join the AI Training. Writing to reserve a seat.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl text-lg transition-all shadow-xl shadow-green-500/20"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Message on WhatsApp & reserve your seat
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
