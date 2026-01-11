import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { setRequestLocale } from 'next-intl/server';
import { ArrowRight, CheckCircle2, Users, Layers, MousePointer2, BarChart3, Sparkles, Target, Zap, Award, TrendingUp, Clock, Shield, Lightbulb, Building2, ShoppingCart, Briefcase, HeartPulse, Plane, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "UI/UX Design Services | Conversion-Focused Interface Design | Tonguç Karaçay",
  description: "Professional UI/UX design services to transform your digital products. Research-driven approach, 25+ years experience, proven track record with enterprise clients. Book a free discovery call.",
  keywords: ["UI UX design services", "user experience agency", "interface design consulting", "UX design company", "mobile app design", "web interface design", "SaaS product design"],
  openGraph: {
    title: "UI/UX Design Services | Conversion-Focused Interface Design",
    description: "Professional UI/UX design services to transform your digital products. Research-driven approach, 25+ years experience.",
    type: "website",
  },
};

// ============================================
// ENGLISH CONTENT - INDEPENDENT RESEARCH
// ============================================
// Competitor Analysis (Google.com):
// - Clay: Premium branding + UX, San Francisco focus, Webby nominees
// - Eleken: SaaS-focused, subscription model, free trial approach
// - IDEO: Design thinking pioneers, enterprise focus, educational angle
// - Fuselab: Enterprise apps, data visualization specialty
// - Musemind: Global agency, MVP focus, startup-friendly
//
// Key Differentiators Found:
// - Most agencies lack individual expert positioning
// - Process transparency varies widely
// - Few emphasize SEO + UX integration
// - Enterprise focus dominates, leaving mid-market gap
//
// Long-tail Keywords (Commercial/Service Intent):
// 1. UI UX design services [Commercial]
// 2. user experience consulting [Service]
// 3. professional interface design [Commercial]
// 4. UX design agency [Commercial]
// 5. mobile app interface design [Service]
// 6. e-commerce UX design [Commercial]
// 7. enterprise application design [Service]
// 8. SaaS product design services [Commercial]
// 9. UX audit services [Service]
// 10. conversion-focused design [Commercial]
// 11. user research services [Service]
// 12. design system consulting [Service]
// ============================================

const services = [
  { 
    icon: Users, 
    title: "User Research", 
    description: "Understanding your users through interviews, surveys, and behavioral analysis. Design decisions backed by data, not assumptions." 
  },
  { 
    icon: Layers, 
    title: "Wireframing & Prototyping", 
    description: "Bringing ideas to life with low and high-fidelity prototypes. Early feedback collection and risk minimization before development begins." 
  },
  { 
    icon: Sparkles, 
    title: "Interface Design (UI)", 
    description: "Modern, consistent interfaces that reflect your brand identity. Typography, color systems, and visual hierarchy that guide users naturally." 
  },
  { 
    icon: MousePointer2, 
    title: "Usability Testing", 
    description: "Validating designs with real users. Catching issues early to reduce development costs and ensure product-market fit." 
  },
  { 
    icon: BarChart3, 
    title: "Conversion Optimization", 
    description: "Analyzing existing interfaces and implementing improvements that increase conversion rates. Data-driven A/B testing strategies." 
  },
  { 
    icon: Target, 
    title: "Design Systems", 
    description: "Consistent, scalable component libraries. Style guides and documentation that ensure design unity across teams." 
  }
];

const process = [
  { 
    step: "01", 
    title: "Discovery Call", 
    description: "Understanding your business goals, current situation, and expectations. Together we define project scope and priorities." 
  },
  { 
    step: "02", 
    title: "Research & Analysis", 
    description: "Examining your users, competitors, and industry. If you have an existing product, UX audit to identify pain points." 
  },
  { 
    step: "03", 
    title: "Strategy & Architecture", 
    description: "Creating personas, user flows, and content hierarchy. Laying the strategic foundation for design decisions." 
  },
  { 
    step: "04", 
    title: "Design & Prototype", 
    description: "From wireframes to interactive prototypes, then pixel-perfect UI designs. Feedback at every stage ensures alignment." 
  },
  { 
    step: "05", 
    title: "Test & Iterate", 
    description: "Refining designs through usability tests and stakeholder feedback. Preparing development-ready files after approval." 
  },
  { 
    step: "06", 
    title: "Development Support", 
    description: "Developer handoff, design QA, and post-launch improvement recommendations. Ensuring successful implementation." 
  }
];

const industries = [
  { icon: ShoppingCart, name: "E-Commerce", desc: "Conversion-focused shopping experiences" },
  { icon: Building2, name: "Finance & Fintech", desc: "Secure, user-friendly financial interfaces" },
  { icon: HeartPulse, name: "Healthcare", desc: "Patient and provider portal design" },
  { icon: Briefcase, name: "SaaS & B2B", desc: "Complex workflows simplified into intuitive dashboards" },
  { icon: Plane, name: "Travel & Hospitality", desc: "Booking and experience platforms" },
  { icon: GraduationCap, name: "Education", desc: "Learning management systems and edtech solutions" }
];

const brands = ["Turkish Airlines", "BMW", "Galatasaray", "Sabah Media", "ATV", "Star TV", "Hürriyet", "Milliyet", "NTV", "CNN Türk"];

const advantages = [
  {
    title: "Expert, Not Agency",
    description: "No coordination overhead or team turnover. You work directly with a senior professional with 25+ years of hands-on experience."
  },
  {
    title: "Research-Driven Design",
    description: "Design decisions based on user research and analytics data, not gut feelings. Every recommendation has a rationale."
  },
  {
    title: "SEO Integration",
    description: "UI/UX design alone isn't enough. Combined with my SEO consulting services, I deliver solutions that satisfy both users and search engines."
  },
  {
    title: "Transparent Communication",
    description: "Regular updates throughout the project, clear communication, and no surprise costs. You know what to expect from day one."
  }
];

const faqs = [
  {
    question: "What deliverables are included in UI/UX design services?",
    answer: "Depending on project scope: user research reports, persona definitions, wireframes, interactive prototypes, UI design files (Figma), design system documentation, and development-ready assets. Deliverables are defined clearly before project kickoff."
  },
  {
    question: "How are project timeline and cost determined?",
    answer: "During a free discovery call, we evaluate your project scope together. A simple landing page takes 3-4 weeks, while a comprehensive web application may take 8-12 weeks. Proposals include detailed scope, timeline, and pricing."
  },
  {
    question: "Can you redesign my existing website or application?",
    answer: "Yes. First, I conduct a UX audit of your existing product to identify pain points. Then I offer two approaches: complete redesign or prioritized incremental improvements based on impact."
  },
  {
    question: "Do you also provide development (coding) services?",
    answer: "My focus is design and strategy. However, I can connect you with trusted development partners or work directly with your existing team. I manage the developer handoff process professionally."
  },
  {
    question: "Is remote collaboration possible?",
    answer: "Absolutely. Most of my projects are conducted remotely. Using tools like Figma, Zoom, Slack, and Notion, I ensure a transparent and efficient collaboration process. Clients worldwide are welcome."
  }
];

type Props = { params: { locale: string } };

export default function UIUXDesignPage({ params: { locale } }: Props) {
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
            <span className="text-white">UI/UX Design Services</span>
          </nav>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="text-gradient">UI/UX Design</span> Services
              </h1>
              <p className="text-lg md:text-xl text-primary-300 mb-8 leading-relaxed">
                Transform your digital products with user-centered design. Research-driven, conversion-focused interface design for websites, mobile apps, and SaaS platforms. Over 25 years of industry experience and 100+ enterprise projects delivering measurable results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/en/contact" className="btn-primary group text-lg">
                  Free Discovery Call
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
                  <span>Remote-First</span>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="card p-8">
              <h2 className="text-xl font-semibold text-white mb-6">The impact of well-designed digital products</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary-300">Conversion rate increase</span>
                    <span className="text-accent-500 font-bold">200-400%</span>
                  </div>
                  <div className="h-2 bg-surface-border rounded-full overflow-hidden">
                    <div className="h-full bg-accent-500 rounded-full" style={{ width: '85%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary-300">UX investment ROI</span>
                    <span className="text-accent-500 font-bold">9,900%</span>
                  </div>
                  <div className="h-2 bg-surface-border rounded-full overflow-hidden">
                    <div className="h-full bg-accent-500 rounded-full" style={{ width: '95%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary-300">Users abandoning due to poor UX</span>
                    <span className="text-accent-500 font-bold">88%</span>
                  </div>
                  <div className="h-2 bg-surface-border rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full" style={{ width: '88%' }} />
                  </div>
                </div>
              </div>
              <p className="text-xs text-primary-500 mt-4">Source: Forrester Research, UXCam industry reports</p>
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
              Common challenges in digital products and how professional UI/UX design addresses them.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Low Conversion Rates</h3>
              <p className="text-primary-400 text-sm mb-3">Visitors come to your site but don't purchase or fill out forms.</p>
              <p className="text-accent-400 text-sm">→ Conversion-focused design and user flow optimization</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">High Bounce Rates</h3>
              <p className="text-primary-400 text-sm mb-3">Users enter your site and leave almost immediately.</p>
              <p className="text-accent-400 text-sm">→ Usability improvements and information architecture restructuring</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Complex User Experience</h3>
              <p className="text-primary-400 text-sm mb-3">Customers can't find what they're looking for, support tickets increase.</p>
              <p className="text-accent-400 text-sm">→ User research and intuitive interface design</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Inconsistent Brand Experience</h3>
              <p className="text-primary-400 text-sm mb-3">Different looks on different pages, weakening brand perception.</p>
              <p className="text-accent-400 text-sm">→ Design system and component library creation</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Development Delays</h3>
              <p className="text-primary-400 text-sm mb-3">Design ambiguities slow down development, budgets overrun.</p>
              <p className="text-accent-400 text-sm">→ Detailed prototypes and developer-ready handoff files</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Falling Behind Competition</h3>
              <p className="text-primary-400 text-sm mb-3">Competitors' digital experience is better than yours.</p>
              <p className="text-accent-400 text-sm">→ Competitive analysis and differentiation strategy</p>
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
              We can work on individual services or the complete end-to-end design process based on your needs.
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
              A structured and transparent process I follow on every project.
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
                Every industry has unique user expectations and business requirements. With over 25 years of experience across different sectors, I deliver solutions tailored to your specific industry context.
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
                Web, mobile, and enterprise application projects for Turkey's leading organizations.
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
              Advantages I offer that differ from large agencies.
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
                <h3 className="text-xl font-semibold text-white mb-2">Integrated SEO Approach</h3>
                <p className="text-primary-300">
                  I offer UI/UX design combined with <Link href="/en/services/seo-consulting" className="text-accent-400 hover:underline">SEO consulting</Link> services. With Google's Core Web Vitals update, user experience is now a direct ranking factor. A well-designed site satisfies both users and search engines.
                </p>
              </div>
              <Link href="/en/services/seo-consulting" className="btn-secondary flex-shrink-0">
                SEO Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
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
            Let's Evaluate Your Project
          </h2>
          <p className="text-primary-300 mb-8 max-w-xl mx-auto">
            In a free, no-obligation discovery call, let's evaluate your project needs together. After a 30-minute conversation, you'll have a clear roadmap.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/en/contact" className="btn-primary group text-lg">
              Schedule a Call
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
            "name": "UI/UX Design Services",
            "description": "Professional UI/UX design services to transform your digital products with research-driven, conversion-focused interface design.",
            "provider": {
              "@type": "Person",
              "name": "Tonguç Karaçay",
              "url": "https://tonguckaracay.com"
            },
            "areaServed": "Worldwide",
            "serviceType": "UI/UX Design"
          })
        }}
      />
    </main>
  );
}
