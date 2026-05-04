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
  Zap,
  Brain,
  Workflow,
  Database,
  Shield,
  Target,
  Clock,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Training | Tonguç Karaçay — Don't Learn AI, Build Systems",
  description: "Individual cohorts and corporate AI training programs. Vertical playbooks for doctors, real estate, e-commerce, agencies, clinics, and SaaS founders. Optimize content, ad, and operations workflows with AI.",
  keywords: ["AI training", "ChatGPT training", "corporate AI training", "AI for business", "AI workflow automation", "vertical AI training"],
  alternates: {
    canonical: 'https://tonguckaracay.com/en/ai-training',
    languages: {
      'tr': 'https://tonguckaracay.com/ai-egitimi',
      'en': 'https://tonguckaracay.com/en/ai-training',
      'x-default': 'https://tonguckaracay.com/en/ai-training',
    },
  },
  openGraph: {
    title: "AI Training | Don't Learn AI, Build Systems — Tonguç Karaçay",
    description: "This isn't tool training — it's how to build systems that work in your business. Individual cohorts and corporate in-house programs.",
    url: 'https://tonguckaracay.com/en/ai-training',
    type: 'website',
  },
};

const sectors = [
  {
    icon: Stethoscope,
    name: "Doctors & Clinics",
    promise: "Move social content, patient education videos, and visuals onto an AI pipeline.",
    tools: "ChatGPT, Midjourney, ElevenLabs, Runway",
    anchor: "doctors",
  },
  {
    icon: Home,
    name: "Real Estate",
    promise: "Listing copy, drone-video editing, virtual staging, and lead-follow-up bots.",
    tools: "Claude, Runway, Virtual Staging AI, n8n",
    anchor: "realestate",
  },
  {
    icon: ShoppingBag,
    name: "E-commerce SMBs",
    promise: "AI-supported product descriptions, visuals, and ad copy workflows for Shopify, Amazon, eBay.",
    tools: "GPT-5, Midjourney, Make.com",
    anchor: "ecommerce",
  },
  {
    icon: Megaphone,
    name: "Marketing Agencies",
    promise: "From brief to campaign, from pitch deck to ad variants — a semi-automated production pipeline.",
    tools: "Claude, Gamma, AdCreative.ai, n8n",
    anchor: "agencies",
  },
  {
    icon: Scissors,
    name: "Beauty & Aesthetic Clinics",
    promise: "Before/after visuals, booking bots, content calendars, review-mining for service insights.",
    tools: "ChatGPT, Midjourney, ManyChat",
    anchor: "beauty",
  },
  {
    icon: Rocket,
    name: "SaaS Founders",
    promise: "Get to a working prototype on your own with Cursor, Claude, and n8n.",
    tools: "Cursor, Claude Code, n8n, Vercel",
    anchor: "saas",
  },
];

const curriculum = [
  {
    icon: Brain,
    title: "Module 1 — AI Foundations & Picking the Right Model",
    points: ["GPT vs. Claude vs. Gemini differences", "Which model for which job", "Tokens, context, and cost mechanics"],
  },
  {
    icon: Sparkles,
    title: "Module 2 — Advanced Prompt Engineering",
    points: ["Vertical-specific prompt library", "Role / context / format patterns", "Prompt chaining"],
  },
  {
    icon: Workflow,
    title: "Module 3 — Semi-Automated AI Workflows",
    points: ["Workflow pipelines with n8n & Make", "Email, WhatsApp, CRM integration", "Cut repetitive tasks substantially"],
  },
  {
    icon: Database,
    title: "Module 4 — AI on Your Company Data (RAG)",
    points: ["Assistants that talk to your docs", "Client/customer data security", "ChatGPT Custom GPTs & Claude Projects"],
  },
  {
    icon: Target,
    title: "Module 5 — AI for Marketing & Sales",
    points: ["Content, ads, and email automation", "Visual & video production line", "Lead-qualification bots"],
  },
  {
    icon: Shield,
    title: "Module 6 — Ethics, Privacy & Compliance",
    points: ["What data NOT to feed AI", "Corporate AI policy template", "Hallucination & verification"],
  },
];

const individualBenefits = [
  "6-week live cohort (one 2-hour session per week)",
  "Vertical-specific prompt library",
  "5 ready-to-use semi-automated workflow templates (n8n)",
  "Private Discord community",
  "30 days of post-cohort Q&A access",
  "Certificate",
];

const corporateBenefits = [
  "1-3 day in-house workshop",
  "Company-specific AI Playbook document",
  "10+ semi-automated workflows customized for your team",
  "4 weeks of implementation mentorship",
  "AI policy & compliance template",
  "Executive strategic summary briefing",
];

const sectorDeepDive = [
  {
    id: "doctors",
    icon: Stethoscope,
    title: "AI System for Doctors",
    intro: "Stay focused on patients — let AI support content and ops.",
    use: [
      "Patient education videos: script (ChatGPT) → visual (Midjourney/Runway) → voiceover (ElevenLabs)",
      "Content calendar and reel template library for Instagram",
      "Custom GPT chatbot for frequently asked patient questions",
      "Medical paper summarizer (PDF → Claude → bullet points)",
      "Pre-appointment WhatsApp briefing workflow (n8n)",
    ],
    output: "Doctor-specific prompt library + 3 semi-automated workflows (content, appointment briefing, patient FAQ).",
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    title: "AI System for E-commerce SMBs",
    intro: "Move product listing, ad copy, and visual generation onto an AI-supported pipeline.",
    use: [
      "Title + description prompt chain for Shopify/Amazon/eBay",
      "Lifestyle visuals from product photos (Midjourney + image-to-image)",
      "Review mining → conversion-driving sales arguments",
      "Ad-variant prompt set for Meta Ads & Google Ads",
      "Stock-price-competitor monitoring workflow (n8n + scrapers)",
    ],
    output: "E-commerce prompt set + ad-variant generator template + product-listing workflow.",
  },
  {
    id: "realestate",
    icon: Home,
    title: "AI System for Real Estate",
    intro: "Tour the property — let AI draft the listing and edit the video.",
    use: [
      "Voice memo → SEO-friendly listing draft (Zillow, Redfin, MLS)",
      "Empty room → fully staged photos (virtual staging)",
      "Short reels edited from drone footage",
      "Lead segmentation and follow-up email workflows",
      "Neighborhood report draft (price, demand, competing listings)",
    ],
    output: "Listing-copy library + lead-follow-up workflow + neighborhood-report template.",
  },
  {
    id: "agencies",
    icon: Megaphone,
    title: "AI System for Agencies",
    intro: "A semi-automated production pipeline from brief to delivery.",
    use: [
      "Brief → strategy → concept → ad copy draft pipeline",
      "Pitch deck draft (Gamma + Claude)",
      "Ad-variant generator (AdCreative.ai + prompt set)",
      "Social plan + visuals + captions production workflow",
      "Client reporting workflow (GA4 → AI summary → PDF draft)",
    ],
    output: "Brief-to-delivery production pipeline + client-reporting template + ad-variant generator.",
  },
  {
    id: "beauty",
    icon: Scissors,
    title: "AI System for Beauty & Clinics",
    intro: "AI-supported booking, content production, and follow-up workflows.",
    use: [
      "Before/after visual generation and social pipeline",
      "WhatsApp booking workflow (ManyChat + n8n)",
      "Review analysis → service-improvement signals",
      "Monthly content calendar via AI (visuals + captions + hashtags)",
      "Post-treatment follow-up message workflow",
    ],
    output: "Monthly content-calendar template + WhatsApp booking workflow + review-analysis prompt.",
  },
  {
    id: "saas",
    icon: Rocket,
    title: "AI System for SaaS Founders",
    intro: "Get to a working prototype on your own and support workflows with AI.",
    use: [
      "Cursor + Claude Code for solo prototyping",
      "Simple backend workflows with n8n (no code)",
      "Landing page + onboarding email draft pipeline",
      "User-interview summarizer",
      "Product analytics → AI insight report draft",
    ],
    output: "Cursor + Claude prompt set + n8n workflow templates + onboarding email kit.",
  },
];

const faqs = [
  {
    q: "Is this AI training, or are you actually building a system?",
    a: "Both — but the system is the point. Generic training teaches you to 'use ChatGPT.' We teach you to build systems that work in your business: prompt libraries, semi-automated workflows, an AI playbook. Training ends; the workflows keep running.",
  },
  {
    q: "I have zero technical background. Can I join?",
    a: "Yes. The individual cohort starts from zero. We don't write code; we use no-code tools like ChatGPT, Claude, and n8n. If you can use a computer, you can do this.",
  },
  {
    q: "How does the individual cohort work?",
    a: "6 weeks, one live 2-hour session per week. Homework and hands-on practice after each. Recordings are yours forever. Opening cohort price is $249 (regular $399-$549).",
  },
  {
    q: "How does the corporate program work?",
    a: "We start with a discovery call to assess your team's AI maturity. Then we build a custom curriculum — 1-3 day workshop plus 4 weeks of mentorship. Pricing ranges from $4K to $20K depending on scope.",
  },
  {
    q: "Which industries is this for?",
    a: "Right now: doctors, real estate, e-commerce SMBs, marketing agencies, beauty/aesthetic clinics, and SaaS founders have ready playbooks. Other industries get a custom curriculum as part of the corporate program.",
  },
  {
    q: "Is our data safe?",
    a: "Module 6 is dedicated to this: what data not to feed AI, GDPR/HIPAA-aware usage, corporate AI policy templates. We design systems that protect client/patient/customer data.",
  },
  {
    q: "Is there post-training support?",
    a: "Individual: 30 days of Q&A access plus the Discord community. Corporate: 4 weeks of implementation mentorship plus 3 months of email support.",
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const courseJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'AI Training — Build an AI System for Your Business',
  description: 'Individual and corporate AI training programs with vertical use-cases: prompt engineering, workflow automation, RAG, and AI playbooks.',
  provider: {
    '@type': 'Person',
    name: 'Tonguç Karaçay',
    url: 'https://tonguckaracay.com/en',
  },
  inLanguage: 'en-US',
  offers: [
    {
      '@type': 'Offer',
      name: 'Individual Cohort — Opening Price',
      price: '249',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  ],
};

type Props = { params: { locale: string } };

export default function AiTrainingPage({ params: { locale } }: Props) {
  setRequestLocale(locale);

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

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-primary-400 mb-6">
            <Link href="/en" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">AI Training</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/20 to-violet-500/20 border border-indigo-500/40 text-indigo-200 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              UI/UX + SEO + Ads + AI experience
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Learn to build AI systems{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400">
                that work in your business.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-primary-200 mb-4 leading-relaxed">
              We don't teach tools. We build systems integrated into your{' '}
              <strong className="text-white">content, ad, and operations workflows</strong> — together.
            </p>

            <p className="text-lg text-primary-300 mb-10 leading-relaxed max-w-3xl">
              Doctor, realtor, e-commerce founder, agency lead, clinic owner, or SaaS builder — leave with
              a vertical-specific prompt library, semi-automated workflows, and an AI playbook.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#individual"
                className="group inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold hover:from-indigo-400 hover:to-violet-500 transform hover:scale-[1.02] transition-all shadow-lg shadow-indigo-500/30"
              >
                <Users className="w-5 h-5" />
                For individuals
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#corporate"
                className="group inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-surface-card border border-surface-border text-white font-semibold hover:border-indigo-400/50 hover:bg-surface-card/80 transition-all"
              >
                <Building2 className="w-5 h-5" />
                For my company
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Not a training callout */}
      <section className="py-10 bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10 border-y border-indigo-500/20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg font-semibold text-indigo-200 mb-4">❗ This is not a training course</p>
            <div className="flex flex-wrap justify-center gap-6 text-primary-200">
              <span className="flex items-center gap-2"><span className="text-red-400">✗</span> No tool demos</span>
              <span className="flex items-center gap-2"><span className="text-red-400">✗</span> No generic theory</span>
              <span className="flex items-center gap-2"><span className="text-indigo-300 font-semibold">→</span> We build working systems into your business</span>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-16 bg-surface-card/30">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title text-center mb-12">
              Looking for a <span className="text-gradient">generic AI course?</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-surface-card/60 border border-red-500/20 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="w-6 h-6 text-red-400" />
                  <h3 className="font-display text-xl font-semibold text-white">Generic AI Training</h3>
                </div>
                <ul className="space-y-3 text-primary-300">
                  <li>• Teaches you to "write a ChatGPT prompt"</li>
                  <li>• Generic examples, same content for everyone</li>
                  <li>• Training ends — without practice, you forget</li>
                  <li>• No business-integrated output</li>
                  <li>• A month later you're still staring at ChatGPT</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-indigo-500/40 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-indigo-400" />
                  <h3 className="font-display text-xl font-semibold text-white">Building an AI System</h3>
                </div>
                <ul className="space-y-3 text-primary-200">
                  <li>✓ Vertical-specific prompt library (yours forever)</li>
                  <li>✓ Semi-automated workflow pipelines (n8n, Make)</li>
                  <li>✓ AI assistants on your company data (RAG)</li>
                  <li>✓ AI playbook your team will actually use</li>
                  <li>✓ Training ends, <strong className="text-white">the workflows keep running</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sector grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Built for <span className="text-gradient">your industry</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Not a generic AI course. We show you exactly how to win in your industry — with concrete tools and examples.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {sectors.map((sector) => (
              <Link
                key={sector.anchor}
                href={`#${sector.anchor}`}
                className="group bg-surface-card border border-surface-border rounded-2xl p-6 hover:border-indigo-400/50 hover:bg-surface-card/80 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <sector.icon className="w-6 h-6 text-indigo-300" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-2">{sector.name}</h3>
                <p className="text-primary-300 text-sm leading-relaxed mb-3">{sector.promise}</p>
                <p className="text-xs text-indigo-300/70 font-mono">{sector.tools}</p>
                <div className="flex items-center gap-1 text-indigo-400 text-sm mt-4 group-hover:gap-2 transition-all">
                  See details
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Individual vs Corporate */}
      <section className="py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Which <span className="text-gradient">path is yours?</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Coming as an individual, or transforming an entire team?
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* Individual */}
            <div id="individual" className="bg-gradient-to-br from-indigo-500/10 to-violet-500/5 border border-indigo-500/30 rounded-2xl p-8 scroll-mt-24">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-indigo-300" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">Individual Cohort</h3>
              </div>
              <p className="text-primary-300 mb-6">
                Freelancers, solopreneurs, small business owners, professionals — for yourself.
              </p>

              <ul className="space-y-3 mb-8">
                {individualBenefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-primary-200">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-surface-darker/50 border border-indigo-500/20 rounded-xl p-5 mb-6">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-sm text-primary-400 line-through">$399 - $549</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/30 text-indigo-200 font-medium">First Cohort Special</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl font-bold text-white">$249</span>
                  <span className="text-primary-400 text-sm">/ seat</span>
                </div>
                <p className="text-primary-400 text-xs mt-2">Limited to 12 seats</p>
              </div>

              <Link
                href="/en/contact?topic=ai-training-individual"
                className="group block w-full text-center px-6 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold hover:from-indigo-400 hover:to-violet-500 transition-all"
              >
                Reserve your seat
                <ArrowRight className="ml-2 w-4 h-4 inline group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Corporate */}
            <div id="corporate" className="bg-gradient-to-br from-accent-500/10 to-amber-500/5 border border-accent-500/30 rounded-2xl p-8 scroll-mt-24">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">Corporate Program</h3>
              </div>
              <p className="text-primary-300 mb-6">
                In-house program designed for teams of 5+, departments, and entire companies.
              </p>

              <ul className="space-y-3 mb-8">
                {corporateBenefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-primary-200">
                    <CheckCircle2 className="w-5 h-5 text-accent-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-surface-darker/50 border border-accent-500/20 rounded-xl p-5 mb-6">
                <div className="text-sm text-primary-400 mb-1">Custom proposal</div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl font-bold text-white">$4K — $20K</span>
                </div>
                <p className="text-primary-400 text-xs mt-2">Based on team size, scope, and duration</p>
              </div>

              <Link
                href="/en/contact?topic=ai-training-corporate"
                className="group block w-full text-center px-6 py-4 rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 text-primary-950 font-semibold hover:from-accent-400 hover:to-accent-500 transition-all"
              >
                Book a discovery call
                <ArrowRight className="ml-2 w-4 h-4 inline group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Core <span className="text-gradient">curriculum</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Six modules that ground both the individual and corporate program. Depth varies by industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {curriculum.map((m, i) => (
              <div
                key={i}
                className="bg-surface-card border border-surface-border rounded-2xl p-6 hover:border-indigo-400/40 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/15 flex items-center justify-center mb-4">
                  <m.icon className="w-6 h-6 text-indigo-300" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-3">{m.title}</h3>
                <ul className="space-y-1.5">
                  {m.points.map((p, j) => (
                    <li key={j} className="text-primary-300 text-sm flex items-start gap-2">
                      <span className="text-indigo-400 mt-1">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector deep dive */}
      <section className="py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Vertical <span className="text-gradient">use-cases</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Concrete outcomes for each industry. Here are the ready-to-use scenarios you'll leave with.
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {sectorDeepDive.map((s) => (
              <div
                key={s.id}
                id={s.id}
                className="bg-surface-card border border-surface-border rounded-2xl p-6 md:p-8 scroll-mt-24"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-500/30 flex items-center justify-center shrink-0">
                    <s.icon className="w-6 h-6 text-indigo-300" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-1">{s.title}</h3>
                    <p className="text-primary-300">{s.intro}</p>
                  </div>
                </div>

                <ul className="grid md:grid-cols-2 gap-2.5 mt-4">
                  {s.use.map((u, i) => (
                    <li key={i} className="flex items-start gap-2 text-primary-200 text-sm">
                      <Zap className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{u}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-5 border-t border-indigo-500/20 space-y-2">
                  <p className="text-sm text-primary-300">
                    <span className="font-semibold text-indigo-300">📦 You leave with: </span>
                    {s.output}
                  </p>
                  <p className="text-xs text-primary-500 italic">
                    * These are just some of what's possible — we explore additional use-cases specific to your industry during the program.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-primary-400 mt-10">
            Don't see your industry?{' '}
            <Link href="/en/contact?topic=ai-training-industry" className="text-indigo-300 hover:text-indigo-200 underline underline-offset-4">
              Reach out
            </Link>
            {' '}— corporate programs include custom industry curricula.
          </p>
        </div>
      </section>

      {/* Instructor */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="section-title mb-4">
                Why <span className="text-gradient">work with me</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5 mb-8">
              <div className="bg-surface-card border border-surface-border rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-indigo-300" />
                </div>
                <div className="font-display text-3xl font-bold text-white mb-1">25+</div>
                <div className="text-primary-300 text-sm">years in digital</div>
              </div>
              <div className="bg-surface-card border border-surface-border rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-indigo-300" />
                </div>
                <div className="font-display text-3xl font-bold text-white mb-1">4-in-1</div>
                <div className="text-primary-300 text-sm">UI/UX + SEO + Ads + AI</div>
              </div>
              <div className="bg-surface-card border border-surface-border rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-indigo-300" />
                </div>
                <div className="font-display text-3xl font-bold text-white mb-1">100+</div>
                <div className="text-primary-300 text-sm">brand experience</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-500/10 to-violet-500/5 border border-indigo-500/30 rounded-2xl p-8 text-center">
              <p className="text-lg text-primary-200 leading-relaxed mb-6">
                Unlike most AI trainers, you're learning from someone who has shipped <strong className="text-white">design, SEO, ads, and AI together</strong>.
                Not just AI — outcome-driven systems.
              </p>
              <Link href="/en/about" className="btn-secondary">
                More about Tonguç
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="section-title mb-4">
                Frequently asked <span className="text-gradient">questions</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-surface-card border border-surface-border rounded-xl overflow-hidden"
                >
                  <summary className="cursor-pointer px-6 py-4 font-medium text-white flex items-center justify-between gap-4 hover:bg-surface-card/80 transition-colors">
                    <span>{faq.q}</span>
                    <ArrowRight className="w-4 h-4 text-indigo-400 shrink-0 group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-6 pb-4 text-primary-300 leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8">
        <div className="container-custom">
          <p className="text-center text-sm text-primary-500 max-w-2xl mx-auto">
            Results vary by industry, implementation, and consistency. This program teaches you how to build the system — applying it is up to you.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-500/15 via-violet-500/10 to-fuchsia-500/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Time to make AI part of your business
            </h2>
            <p className="text-xl text-primary-200 mb-10">
              Individual cohort or corporate program — let's spend 30 free minutes figuring out which fits.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/en/contact?topic=ai-training-individual"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold hover:from-indigo-400 hover:to-violet-500 transform hover:scale-[1.02] transition-all shadow-lg shadow-indigo-500/30 text-lg"
              >
                Reserve a seat
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/en/contact?topic=ai-training-corporate"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-surface-card border border-accent-500/40 text-white font-semibold hover:border-accent-400 transition-all text-lg"
              >
                Talk corporate
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
