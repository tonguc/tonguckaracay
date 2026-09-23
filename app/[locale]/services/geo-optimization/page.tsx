import { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from 'next-intl/server';
import { ArrowRight, CheckCircle2, Sparkles, FileSearch, Quote, ListChecks, ShieldCheck, BarChart3, Building2, ShoppingCart, Briefcase, HeartPulse, Scale, Utensils } from "lucide-react";

export const metadata: Metadata = {
  title: "GEO Consulting | Visibility in AI Search | Tonguç Karaçay",
  description: "Generative Engine Optimization (GEO) consulting so your brand gets cited by ChatGPT, Perplexity, Google AI Overviews and Claude. 25+ years of experience.",
  keywords: ["GEO", "Generative Engine Optimization", "AI search optimization", "ChatGPT visibility", "AI SEO", "AI Overviews", "Perplexity optimization"],
  alternates: {
    canonical: "https://tonguckaracay.com/en/services/geo-optimization",
    languages: {
      tr: "https://tonguckaracay.com/hizmetler/geo-optimizasyonu",
      en: "https://tonguckaracay.com/en/services/geo-optimization",
      "x-default": "https://tonguckaracay.com/en/services/geo-optimization",
    },
  },
  openGraph: {
    title: "GEO Consulting | Visibility in AI Search",
    description: "Get your brand cited in ChatGPT, Perplexity and Google AI Overviews.",
    type: "website",
    url: "https://tonguckaracay.com/en/services/geo-optimization",
  },
};

const services = [
  {
    icon: FileSearch,
    title: "AI Visibility Audit",
    description: "Where — if anywhere — your brand currently shows up across ChatGPT, Perplexity, Google AI Overviews and Claude for the queries that matter to you.",
  },
  {
    icon: Quote,
    title: "Citation-Ready Content",
    description: "The structure AI models prefer to quote: clear definitions, direct answers, evidence and sourcing, written to be easily summarized.",
  },
  {
    icon: ListChecks,
    title: "Structured Data & Schema",
    description: "FAQ, HowTo and Article schema so machines parse your content correctly, plus proper llms.txt and AI crawler access configuration.",
  },
  {
    icon: ShieldCheck,
    title: "Entity & Authority Signals",
    description: "Wikipedia, LinkedIn, industry directories and consistent entity data so AI models have a clear, confident answer to 'who is this brand?'",
  },
  {
    icon: BarChart3,
    title: "AI Mention Tracking",
    description: "Ongoing tracking of how often, and in what context, your brand is mentioned by AI chat engines compared to competitors.",
  },
  {
    icon: Sparkles,
    title: "Integrated with SEO",
    description: "GEO doesn't replace SEO, it sits alongside it — a strategy that keeps your Google rankings while adding visibility in AI search.",
  },
];

const process = [
  { step: "01", title: "AI Visibility Audit", description: "Which brands AI tools currently recommend for the queries that matter in your industry." },
  { step: "02", title: "Gap Analysis", description: "Where competitors get cited and you don't." },
  { step: "03", title: "Content & Structure Work", description: "Rewriting content to be clear, quotable and evidence-backed." },
  { step: "04", title: "Technical & Schema Setup", description: "Structured data, llms.txt and AI crawler access settings." },
  { step: "05", title: "Authority Building", description: "Consistent, verifiable brand presence across third-party sources and entity databases." },
  { step: "06", title: "Monitoring & Iteration", description: "Monthly AI mention tracking and strategy adjustments as model behavior changes." },
];

const industries = [
  { icon: ShoppingCart, name: "E-commerce", desc: "Getting recommended in product comparison queries" },
  { icon: Building2, name: "Enterprise", desc: "Brand authority and accurate representation" },
  { icon: Briefcase, name: "B2B & SaaS", desc: "\"Best tool for X\" comparison queries" },
  { icon: HeartPulse, name: "Healthcare", desc: "Being cited as a trustworthy source" },
  { icon: Scale, name: "Legal", desc: "Accurate representation in expertise queries" },
  { icon: Utensils, name: "Local Business", desc: "\"Near me\" style AI chat queries" },
];

const advantages = [
  {
    title: "Early-Mover Advantage",
    description: "GEO is still new — most of your competitors aren't thinking about it yet. Starting now means building citation habits with AI models before the space gets crowded.",
  },
  {
    title: "Realistic Expectations",
    description: "No one fully controls which source an AI model picks, or when. I don't sell \"guaranteed ranking\" — the goal is measurable visibility growth.",
  },
  {
    title: "SEO + GEO Together",
    description: "GEO is built on top of your existing search strategy, not separate from it — both draw from the same content foundation.",
  },
  {
    title: "Measurable Tracking",
    description: "I regularly test whether your brand shows up in AI answers for the queries we've agreed matter most, and report on it.",
  },
];

const faqs = [
  {
    question: "What is GEO (Generative Engine Optimization)?",
    answer: "GEO is the practice of optimizing your brand to be cited or recommended in answers from AI-powered search and chat tools like ChatGPT, Perplexity, Google AI Overviews and Claude. Traditional SEO targets Google rankings; GEO targets which sources AI models consider trustworthy enough to cite.",
  },
  {
    question: "Does GEO replace SEO?",
    answer: "No. Google search still drives significant traffic and SEO remains necessary. GEO is an additional layer that optimizes the same content foundation for AI engines too — the two work together, not against each other.",
  },
  {
    question: "How are GEO results measured?",
    answer: "I regularly test an agreed set of key queries across ChatGPT, Perplexity and Google AI Overviews to track how often and in what context your brand gets cited. AI Overview visibility data in Google Search Console is part of this tracking too.",
  },
  {
    question: "Does every business need GEO?",
    answer: "The impact is more immediate in industries where buyers research and compare before deciding, or where expertise/trust matters — B2B, healthcare, legal, tech, e-commerce. In a free consultation we assess honestly whether it's a priority for your industry now or later.",
  },
  {
    question: "How long until I see GEO results?",
    answer: "AI models update their training and indexing data on different cycles than SEO — some changes show up within weeks, others take longer depending on the model. Generally we start tracking early visibility shifts within 2-4 months.",
  },
];

type Props = { params: { locale: string } };

export default function GeoOptimizationPage({ params: { locale } }: Props) {
  setRequestLocale(locale);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-primary-400 mb-6">
            <Link href="/en" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">GEO Optimization</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 text-accent-400 text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                Next-Generation Visibility
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="text-gradient">GEO</span> Consulting: Visibility in AI Search
              </h1>
              <p className="text-lg md:text-xl text-primary-300 mb-8 leading-relaxed">
                When someone asks ChatGPT, Perplexity, Google AI Overviews or Claude, does your brand get cited? Users increasingly ask AI directly instead of searching — Generative Engine Optimization (GEO) makes you visible in this new layer of search.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/en/contact" className="btn-primary group text-lg">
                  Free AI Visibility Audit
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#process" className="btn-secondary text-lg">
                  My Process
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-primary-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span>25+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span>Integrated with SEO</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span>Measurable Tracking</span>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <h2 className="text-xl font-semibold text-white mb-4">Why Now?</h2>
              <p className="text-primary-300 text-sm leading-relaxed mb-4">
                User behavior is shifting fast: many searches now start in an AI chat window instead of a Google search box. Brands that don't get cited in that channel are invisible to that user — even if a competitor ranks #5 on Google.
              </p>
              <p className="text-primary-300 text-sm leading-relaxed">
                GEO is still new enough that most businesses haven't thought about it at all. Starting early means capturing "trusted source" status with AI models before the field gets crowded.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Scope of <span className="text-gradient">Work</span>
            </h2>
            <p className="text-primary-300 max-w-2xl mx-auto">
              From AI visibility audits to content structuring — end-to-end GEO work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="card p-6 hover:border-accent-500/30 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-accent-500/20 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-accent-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-primary-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              My <span className="text-gradient">Process</span>
            </h2>
            <p className="text-primary-300 max-w-2xl mx-auto">
              A structured process for GEO consulting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, i) => (
              <div key={i} className="card p-6 relative group hover:border-accent-500/30 transition-colors">
                <div className="absolute top-4 right-4 text-5xl font-bold text-accent-500/10 group-hover:text-accent-500/20 transition-colors">{step.step}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-primary-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">
                Where It's <span className="text-gradient">Most Effective</span>
              </h2>
              <p className="text-primary-300 mb-8">
                GEO's impact shows up faster in industries where users research, compare or look for expertise before deciding.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                      <industry.icon className="w-5 h-5 text-accent-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{industry.name}</h4>
                      <p className="text-sm text-primary-400">{industry.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-8">
              <h3 className="text-xl font-semibold text-white mb-6">AI Platforms I Track</h3>
              <div className="flex flex-wrap gap-3">
                {["ChatGPT", "Perplexity", "Google AI Overviews", "Claude", "Copilot", "Gemini"].map((platform, i) => (
                  <span key={i} className="px-4 py-2 bg-surface-border/50 rounded-full text-primary-200 text-sm">
                    {platform}
                  </span>
                ))}
              </div>
              <p className="text-primary-400 text-sm mt-6">
                Each platform picks sources differently — analysis and strategy adapt accordingly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Me */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Why Work <span className="text-gradient">With Me</span>
            </h2>
            <p className="text-primary-300 max-w-2xl mx-auto">
              A realistic, measurable approach to a new field.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((adv, i) => (
              <div key={i} className="card p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{adv.title}</h3>
                <p className="text-primary-300">{adv.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 card p-8 border-accent-500/30">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">Stronger Together With SEO</h3>
                <p className="text-primary-300">
                  I build GEO on top of my existing <Link href="/en/services/seo-consulting" className="text-accent-400 hover:underline">SEO consulting</Link> work. The same content and technical foundation feeds both Google rankings and AI citations — no separate budget, no separate strategy needed.
                </p>
              </div>
              <Link href="/en/services/seo-consulting" className="btn-secondary flex-shrink-0">
                SEO Consulting
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="card p-6 group">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <span className="text-accent-500 group-open:rotate-180 transition-transform flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-primary-300 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-accent-500/10 to-indigo-500/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Let's Assess Your AI Visibility
          </h2>
          <p className="text-primary-300 mb-8 max-w-xl mx-auto">
            In a free consultation, let's look at where your brand stands today in ChatGPT, Perplexity and similar tools.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/en/contact" className="btn-primary group text-lg">
              Free AI Visibility Audit
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="mailto:info@tonguckaracay.com" className="btn-secondary text-lg">
              Send an Email
            </a>
          </div>
        </div>
      </section>

      {/* Schema.org FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          }),
        }}
      />

      {/* Schema.org Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "url": "https://tonguckaracay.com/en/services/geo-optimization",
            "name": "GEO Consulting",
            "description": "Generative Engine Optimization consulting so your brand gets cited by ChatGPT, Perplexity, Google AI Overviews and Claude.",
            "provider": {
              "@type": "Person",
              "name": "Tonguç Karaçay",
              "url": "https://tonguckaracay.com",
            },
            "areaServed": "Worldwide",
            "serviceType": "Generative Engine Optimization",
          }),
        }}
      />
    </main>
  );
}
