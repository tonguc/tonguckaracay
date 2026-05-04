import { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from 'next-intl/server';
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
  title: "AI Training | Tonguç Karaçay — Learn to Build AI Systems for Your Business",
  description: "Individual and corporate AI training. Learn to build systems that speed up your content, ads, and operations. Message on WhatsApp.",
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
    title: "AI Training | Learn to Build AI Systems for Your Business — Tonguç Karaçay",
    description: "Not tools — systems. Learn to make your content, ads, and operations semi-automated.",
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
    desc: "Learn to integrate email, CRM, calendar, and messaging using n8n, Make, and Zapier.",
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
    tools: ["ChatGPT", "Claude", "Midjourney", "ElevenLabs", "Canva", "Runway"],
    produce: [
      "Weekly 3–5 social posts (copy + visual)",
      "Patient education video (script + voiceover)",
      "Pre-appointment WhatsApp briefing flow draft",
    ],
    how: "Branding rules → prompt template → content calendar → review process.",
  },
  {
    anchor: "ecommerce",
    icon: ShoppingBag,
    name: "E-commerce SMB",
    tools: ["GPT-5", "Claude", "Midjourney", "Make.com"],
    produce: [
      "Description variants for 100+ SKUs",
      "Ad copy and creative variants",
      "Customer reply drafts (human-reviewed)",
    ],
    how: "Product CSV → prompt template → variant generation → marketplace upload.",
  },
  {
    anchor: "agencies",
    icon: Megaphone,
    name: "Marketing Agencies",
    tools: ["Claude", "Gamma", "AdCreative.ai", "n8n"],
    produce: [
      "Strategy doc draft from brief",
      "Pitch deck draft (Gamma)",
      "5+ creative variants per ad set",
    ],
    how: "Client brief → AI workflow → revision loop → final output.",
  },
];

const faq = [
  {
    q: "Do I need technical knowledge to join?",
    a: "No. We start from zero. If you can use a computer and commit to consistent practice, you're set.",
  },
  {
    q: "Is the program live or recorded?",
    a: "The individual program runs live with full recordings available. Corporate programs are scheduled around your team.",
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
    a: "We start with a short discovery call on WhatsApp. I shape the curriculum around your team, goal, and existing workflow.",
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

            <p className="text-xl text-primary-300 mb-10 leading-relaxed max-w-2xl mx-auto">
              This program isn't a tool tutorial. You'll learn to build systems that work in your business.
            </p>

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

      {/* WHATSAPP TRIGGER 1 — Not sure? */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/30 rounded-2xl p-8 md:p-10 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
              Not sure?
            </h2>
            <p className="text-primary-300 mb-6 max-w-xl mx-auto">
              Let's figure out if it's the right fit in 2 minutes.
            </p>
            <a
              href={waLink("Hi, I'd like to talk through whether the AI Training is a fit for me.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Message on WhatsApp
            </a>
          </div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <Link
                  key={sector.anchor}
                  href={`#${sector.anchor}`}
                  className="group bg-surface-card border border-surface-border hover:border-indigo-500/50 rounded-2xl p-6 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-indigo-300" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">{sector.name}</h3>
                  <p className="text-primary-300 text-sm leading-relaxed">{sector.output}</p>
                </Link>
              );
            })}
          </div>

          <p className="text-center text-primary-500 text-sm italic mt-8">
            These are just a few of the things you can build. Message on WhatsApp for sector-specific use cases.
          </p>
        </div>
      </section>

      {/* SEGMENT: Individual vs Corporate */}
      <section className="py-16 md:py-20 bg-surface-darker">
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
            {/* INDIVIDUAL */}
            <div id="individual" className="bg-surface-card border border-indigo-500/30 rounded-2xl p-8 flex flex-col">
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
                <li className="flex items-start gap-3 text-primary-300">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>Freelancer / solo operator</span>
                </li>
                <li className="flex items-start gap-3 text-primary-300">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>6-week program</span>
                </li>
                <li className="flex items-start gap-3 text-primary-300">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>Live sessions + full recording access</span>
                </li>
                <li className="flex items-start gap-3 text-primary-300">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>Sector-specific prompt library</span>
                </li>
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

            {/* CORPORATE */}
            <div id="corporate" className="bg-surface-card border border-violet-500/30 rounded-2xl p-8 flex flex-col">
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
                <li className="flex items-start gap-3 text-primary-300">
                  <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span>Teams of 5+</span>
                </li>
                <li className="flex items-start gap-3 text-primary-300">
                  <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span>Workshop + mentoring</span>
                </li>
                <li className="flex items-start gap-3 text-primary-300">
                  <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span>Company-specific systems</span>
                </li>
                <li className="flex items-start gap-3 text-primary-300">
                  <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span>Curriculum tailored to your team</span>
                </li>
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

      {/* WHAT THIS PROGRAM ISN'T */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                What this program <span className="text-amber-400">isn't</span>
              </h2>
              <p className="text-lg text-primary-300 max-w-2xl mx-auto">
                Wrong expectations waste time. Let's be clear.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-surface-card border border-amber-500/30 rounded-2xl p-6">
                <XCircle className="w-8 h-8 text-amber-400 mb-3" />
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  Not a get-rich-quick scheme
                </h3>
                <p className="text-primary-400 text-sm">
                  No passive income promises. This is an infrastructure program that increases the production speed in your craft.
                </p>
              </div>
              <div className="bg-surface-card border border-amber-500/30 rounded-2xl p-6">
                <XCircle className="w-8 h-8 text-amber-400 mb-3" />
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  Not a one-click solution
                </h3>
                <p className="text-primary-400 text-sm">
                  AI doesn't run your business by itself. You build the system, you operate it, you approve outputs. AI is the accelerator.
                </p>
              </div>
              <div className="bg-surface-card border border-amber-500/30 rounded-2xl p-6">
                <XCircle className="w-8 h-8 text-amber-400 mb-3" />
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  Doesn't work without practice
                </h3>
                <p className="text-primary-400 text-sm">
                  Watching alone won't cut it. Weekly application and adapting it to your own business is required.
                </p>
              </div>
            </div>

            <div className="text-center">
              <a
                href={waLink("Hi, I want to ask whether the AI Training is a fit for me.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Right fit? Ask on WhatsApp
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            {curriculum.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-surface-card border border-surface-border rounded-2xl p-6">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-indigo-300" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-primary-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <a
              href={waLink("Hi, I'd like more details about the AI Training curriculum.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Get details on WhatsApp
            </a>
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
              Three sectors — concrete examples. For other sectors, message on WhatsApp.
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {sectorDetails.map((detail) => {
              const Icon = detail.icon;
              return (
                <div
                  key={detail.anchor}
                  id={detail.anchor}
                  className="bg-surface-card border border-surface-border rounded-2xl p-8 scroll-mt-24"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-indigo-300" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">{detail.name}</h3>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-indigo-300 uppercase tracking-wider mb-3">
                        Which tools
                      </h4>
                      <ul className="space-y-2">
                        {detail.tools.map((tool) => (
                          <li key={tool} className="text-primary-300 text-sm">
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>
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
                </div>
              );
            })}
          </div>

          <p className="text-center text-primary-500 text-sm italic mt-8">
            These are just a few of the things you can build.
          </p>
        </div>
      </section>

      {/* INSTRUCTOR */}
      <section className="py-16 md:py-20 bg-surface-darker">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-surface-card border border-surface-border rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
                  Instructor
                </h2>
                <p className="text-primary-300">Who's running this program.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="text-center">
                  <div className="font-display text-3xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-2">
                    25+
                  </div>
                  <p className="text-primary-300 text-sm">Years in UX & digital</p>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-2">
                    UX + SEO + Ads + AI
                  </div>
                  <p className="text-primary-300 text-sm">Four disciplines, one practitioner</p>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-2">
                    Real
                  </div>
                  <p className="text-primary-300 text-sm">Examples from live projects</p>
                </div>
              </div>

              <p className="text-primary-300 leading-relaxed text-center max-w-2xl mx-auto mb-8">
                Tonguç Karaçay. 25+ years in UX, SEO, and digital marketing.
                Builds AI systems daily on his own projects — and teaches you to apply that experience to your business.
              </p>

              <div className="text-center">
                <a
                  href={waLink("Hi Tonguç, I have a question about the AI Training.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Ask me directly on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
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
                className="group bg-surface-card border border-surface-border rounded-xl overflow-hidden"
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
