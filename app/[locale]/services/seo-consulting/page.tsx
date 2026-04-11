import { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from 'next-intl/server';
import { ArrowRight, CheckCircle2, Search, Globe, Link2, BarChart3, FileText, Zap, TrendingUp, Clock, Users, Shield, Target, Layers, AlertTriangle, Building2, ShoppingCart, Briefcase, HeartPulse, Scale, Utensils } from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Consulting Services | Increase Organic Traffic | Tonguç Karaçay",
  description: "Professional SEO consulting to boost your search rankings. Technical SEO, content strategy, link building. 25+ years experience, measurable results. Get your free SEO audit today.",
  keywords: ["SEO consulting", "SEO services", "search engine optimization", "technical SEO", "content strategy", "link building", "Google ranking", "organic traffic"],
  openGraph: {
    title: "SEO Consulting Services | Increase Organic Traffic",
    description: "Professional SEO consulting to boost your search rankings. 25+ years experience, measurable results.",
    type: "website",
  },
};

// ============================================
// ENGLISH CONTENT - INDEPENDENT RESEARCH
// ============================================
// Competitor Analysis (Google.com):
// - Bruce Clay: 1996 pioneer, expert-level consultants (20k+ hours), training focus
// - OuterBox: 20+ years, AI/LLM SEO, 125+ in-house team, site migration specialty
// - Logical Position: Human-driven AI-supported, one-time audit option
// - WebFX: Large team, proprietary tools, comprehensive reporting
// - HigherVisibility: Targeted Growth System™, multi-location focus
//
// Key Differentiators Found:
// - Most agencies are large with big teams
// - AI/LLM optimization is emerging trend (GEO)
// - Expert-level positioning (10+ years experience)
// - Individual consultant model is rare
// - UX + SEO integration uncommon
//
// Long-tail Keywords (Commercial/Service Intent):
// 1. SEO consulting services [Commercial]
// 2. professional SEO agency [Commercial]
// 3. technical SEO consulting [Service]
// 4. ecommerce SEO services [Commercial]
// 5. enterprise SEO consulting [Service]
// 6. improve Google rankings [Commercial]
// 7. increase organic traffic [Commercial]
// 8. SEO audit services [Service]
// 9. content SEO strategy [Service]
// 10. link building services [Commercial]
// 11. local SEO consulting [Service]
// 12. international SEO services [Commercial]
// ============================================

const services = [
  { 
    icon: Search, 
    title: "Technical SEO", 
    description: "Site speed, Core Web Vitals, mobile-friendliness, crawling and indexing optimization. Building a solid foundation that meets Google's technical requirements." 
  },
  { 
    icon: FileText, 
    title: "Content Strategy", 
    description: "Keyword research, content gap analysis, and SEO-aligned content planning. User intent-focused, conversion-driven content that ranks and converts." 
  },
  { 
    icon: Link2, 
    title: "Link Building", 
    description: "Quality, natural backlink strategies to increase domain authority. Sustainable link profile building that avoids spam and penalty risks." 
  },
  { 
    icon: Globe, 
    title: "International SEO", 
    description: "Hreflang configuration for multiple languages and regions, localized content strategy, and global market penetration." 
  },
  { 
    icon: BarChart3, 
    title: "SEO Analytics & Reporting", 
    description: "Google Search Console, Analytics integration. Monthly performance reports, KPI tracking, and actionable recommendations." 
  },
  { 
    icon: Zap, 
    title: "Core Web Vitals & UX", 
    description: "LCP, FID, CLS optimization. Improving page experience scores to satisfy both users and Google's ranking algorithms." 
  }
];

const process = [
  { 
    step: "01", 
    title: "Free SEO Audit", 
    description: "Comprehensive analysis of your site's technical status, competitor landscape, and opportunity areas. No commitment required." 
  },
  { 
    step: "02", 
    title: "Strategy & Roadmap", 
    description: "Customized SEO strategy based on your goals. Prioritized actions, timeline, and expected outcomes clearly defined." 
  },
  { 
    step: "03", 
    title: "Technical Optimization", 
    description: "Resolving site infrastructure, speed, mobile compatibility, and indexing issues. Building solid technical foundations." 
  },
  { 
    step: "04", 
    title: "Content Optimization", 
    description: "Making existing content SEO-friendly, new content production, and on-page SEO implementation across your site." 
  },
  { 
    step: "05", 
    title: "Off-Page & Link Building", 
    description: "Quality backlink acquisition, digital PR, and brand authority building activities that drive rankings." 
  },
  { 
    step: "06", 
    title: "Monitor & Improve", 
    description: "Continuous performance tracking, monthly reporting, and adaptation to algorithm updates. Iterative improvements for long-term success." 
  }
];

const industries = [
  { icon: ShoppingCart, name: "E-Commerce", desc: "Product pages, category SEO, schema markup" },
  { icon: Building2, name: "Enterprise", desc: "Brand visibility, corporate reputation management" },
  { icon: Briefcase, name: "B2B & SaaS", desc: "Lead generation-focused content strategy" },
  { icon: HeartPulse, name: "Healthcare", desc: "YMYL standards, E-E-A-T optimization" },
  { icon: Scale, name: "Legal", desc: "Local SEO, practice area targeting" },
  { icon: Utensils, name: "Hospitality", desc: "Google Business, local search optimization" }
];

const brands = ["Turkish Airlines", "BMW", "Galatasaray", "Sabah Media", "ATV", "Star TV", "Hürriyet", "Milliyet", "NTV", "CNN Türk"];

const advantages = [
  {
    title: "Realistic Expectations",
    description: "I don't make unrealistic promises like \"first page guarantee.\" SEO is a long-term process. I work with transparent communication and measurable goals."
  },
  {
    title: "Expert, Not Agency",
    description: "No team turnover or coordination issues common at large agencies. You work directly with a single senior professional with 25+ years of hands-on experience."
  },
  {
    title: "UX & SEO Integration",
    description: "With my UI/UX design expertise, I optimize both user experience and search engine requirements. Holistic solutions that satisfy users and algorithms alike."
  },
  {
    title: "Current Knowledge",
    description: "I closely follow Google algorithm updates, AI-powered search (SGE), and GEO trends. Your strategies stay current in a rapidly evolving landscape."
  }
];

const faqs = [
  {
    question: "How long does it take to see SEO results?",
    answer: "SEO is a long-term investment. Depending on competition level and your site's current state, initial results typically appear within 3-6 months. For full impact, expect 6-12 months. Short-term \"guarantee\" promises are unrealistic."
  },
  {
    question: "What does SEO consulting include?",
    answer: "Technical SEO audit, keyword research, content strategy, on-page optimization, link building guidance, competitor analysis, and monthly performance reporting. Scope is customized to your project needs."
  },
  {
    question: "Should I choose Google Ads or SEO?",
    answer: "They serve different purposes. Ads provide instant traffic but stop when budget runs out. SEO delivers sustainable, long-term organic traffic. The ideal strategy is typically a combination of both."
  },
  {
    question: "Which industries do you serve?",
    answer: "E-commerce, corporate sites, B2B, healthcare, legal, tourism, and more. Each industry has unique SEO dynamics, and I adapt my strategy accordingly."
  },
  {
    question: "How much should I budget for SEO?",
    answer: "Budget varies based on competition level and your goals. During our free audit call, I'll evaluate your site and provide package recommendations suited to your needs. I operate on a transparent pricing principle."
  }
];

type Props = { params: { locale: string } };

export default function SEOConsultingPage({ params: { locale } }: Props) {
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
            <span className="text-white">SEO Consulting</span>
          </nav>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="text-gradient">SEO Consulting</span> Services
              </h1>
              <p className="text-lg md:text-xl text-primary-300 mb-8 leading-relaxed">
                Climb to the top of Google and increase your organic traffic. I strengthen your digital visibility through technical SEO, content strategy, and link building. With over 25 years of experience and enterprise-level references, I deliver data-driven SEO strategies that produce measurable results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/en/contact" className="btn-primary group text-lg">
                  Free SEO Audit
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#process" className="btn-secondary text-lg">
                  My Process
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 text-sm text-primary-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span>25+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span>100+ Enterprise Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span>Measurable Results</span>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="card p-8">
              <h2 className="text-xl font-semibold text-white mb-6">The business impact of SEO</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary-300">Organic search traffic share</span>
                    <span className="text-accent-500 font-bold">53%</span>
                  </div>
                  <div className="h-2 bg-surface-border rounded-full overflow-hidden">
                    <div className="h-full bg-accent-500 rounded-full" style={{ width: '53%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary-300">First page click-through rate</span>
                    <span className="text-accent-500 font-bold">91%</span>
                  </div>
                  <div className="h-2 bg-surface-border rounded-full overflow-hidden">
                    <div className="h-full bg-accent-500 rounded-full" style={{ width: '91%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary-300">Organic vs Paid traffic quality</span>
                    <span className="text-accent-500 font-bold">5.66x</span>
                  </div>
                  <div className="h-2 bg-surface-border rounded-full overflow-hidden">
                    <div className="h-full bg-accent-500 rounded-full" style={{ width: '80%' }} />
                  </div>
                </div>
              </div>
              <p className="text-xs text-primary-500 mt-4">Source: BrightEdge, Search Engine Journal industry research</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6">
              What Problems Does This <span className="text-gradient">Service Solve?</span>
            </h2>
            <p className="text-primary-300 text-lg mb-12">
              How SEO consulting addresses your digital visibility challenges.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Not Visible on Google</h3>
              <p className="text-primary-400 text-sm mb-3">When potential customers search, they find your competitors instead.</p>
              <p className="text-accent-400 text-sm">→ Targeted keyword strategy and on-page optimization</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Ad Dependency</h3>
              <p className="text-primary-400 text-sm mb-3">You're forced to spend continuous ad budget for traffic.</p>
              <p className="text-accent-400 text-sm">→ Sustainable organic traffic strategy</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Technical Issues</h3>
              <p className="text-primary-400 text-sm mb-3">Site is slow, not mobile-friendly, or not being properly indexed by Google.</p>
              <p className="text-accent-400 text-sm">→ Comprehensive technical SEO audit and optimization</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Competitors Outranking You</h3>
              <p className="text-primary-400 text-sm mb-3">Competitors consistently rank above you for the same keywords.</p>
              <p className="text-accent-400 text-sm">→ Competitor analysis and competitive strategy development</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Low Content Performance</h3>
              <p className="text-primary-400 text-sm mb-3">You're publishing blog content but not getting traffic or rankings.</p>
              <p className="text-accent-400 text-sm">→ Data-driven content strategy and optimization</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Algorithm Update Impact</h3>
              <p className="text-primary-400 text-sm mb-3">Your rankings dropped after a Google update.</p>
              <p className="text-accent-400 text-sm">→ Current SEO best practices and recovery strategy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Service <span className="text-gradient">Scope</span>
            </h2>
            <p className="text-primary-300 max-w-2xl mx-auto">
              We can work on a single area or comprehensive SEO consulting based on your needs.
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
      <section id="process" className="py-16 md:py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              My <span className="text-gradient">Process</span>
            </h2>
            <p className="text-primary-300 max-w-2xl mx-auto">
              The structured and transparent process I follow for SEO consulting.
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
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">
                Industry <span className="text-gradient">Experience</span>
              </h2>
              <p className="text-primary-300 mb-8">
                Every industry has different SEO dynamics. From product page optimization in e-commerce to E-E-A-T criteria in healthcare and Google Business profile management for local businesses—I apply industry-specific approaches.
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
              <h3 className="text-xl font-semibold text-white mb-6">Notable Brands I've Worked With</h3>
              <div className="flex flex-wrap gap-3">
                {brands.map((brand, i) => (
                  <span key={i} className="px-4 py-2 bg-surface-border/50 rounded-full text-primary-200 text-sm">
                    {brand}
                  </span>
                ))}
              </div>
              <p className="text-primary-400 text-sm mt-6">
                Developed SEO strategies for Turkey's leading media organizations and corporate brands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Me */}
      <section className="py-16 md:py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Why <span className="text-gradient">Work With Me?</span>
            </h2>
            <p className="text-primary-300 max-w-2xl mx-auto">
              Advantages I offer that differ from typical SEO agencies.
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
                <h3 className="text-xl font-semibold text-white mb-2">Integrated UI/UX & SEO</h3>
                <p className="text-primary-300">
                  With my <Link href="/en/services/ui-ux-design" className="text-accent-400 hover:underline">UI/UX design</Link> expertise, I also optimize Core Web Vitals and user experience metrics. With Google's page experience updates, UX is now a direct ranking factor. I deliver holistic solutions that satisfy both users and search engines.
                </p>
              </div>
              <Link href="/en/services/ui-ux-design" className="btn-secondary flex-shrink-0">
                UI/UX Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GEO Section */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="card p-8 md:p-12 bg-gradient-to-br from-accent-500/5 to-indigo-500/5 border-accent-500/20">
            <div className="max-w-3xl">
              <span className="text-accent-400 text-sm font-medium mb-2 block">Emerging Trend</span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                GEO: Generative Engine Optimization
              </h2>
              <p className="text-primary-300 mb-6">
                ChatGPT, Google SGE, and other AI-powered search engines are changing the game. Beyond traditional SEO, I also implement GEO strategies to ensure your content gets cited as a source by artificial intelligence systems.
              </p>
              <Link href="/en/what-is-geo-generative-engine-optimization" className="text-accent-400 hover:underline inline-flex items-center">
                Learn more about GEO
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
            Let's Build Your SEO Strategy
          </h2>
          <p className="text-primary-300 mb-8 max-w-xl mx-auto">
            Get a free SEO audit to evaluate your site's current status and opportunity areas. This no-commitment consultation provides you with a clear roadmap.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/en/contact" className="btn-primary group text-lg">
              Free SEO Audit
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="mailto:info@tonguckaracay.com" className="btn-secondary text-lg">
              Send Email
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
                "text": faq.answer
              }
            }))
          })
        }}
      />

      {/* Schema.org Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "SEO Consulting Services",
            "description": "Professional SEO consulting to boost your search rankings. Technical SEO, content strategy, link building.",
            "provider": {
              "@type": "Person",
              "name": "Tonguç Karaçay",
              "url": "https://tonguckaracay.com"
            },
            "areaServed": "Worldwide",
            "serviceType": "SEO Consulting"
          })
        }}
      />
    </main>
  );
}
