import { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from 'next-intl/server';
import { ArrowRight, CheckCircle2, Bot, Brain, Zap, MessageSquare, Database, Cpu, FileText, Image, Code, Settings, AlertTriangle, Clock, TrendingUp, Users, Building2, ShoppingCart, Briefcase, HeartPulse, Lightbulb, Workflow } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Solutions | ChatGPT Integration & Business Automation | Tonguç Karaçay",
  description: "Transform your business with AI. ChatGPT integration, custom chatbots, content automation, workflow optimization. Cost-effective AI consulting for SMBs.",
  keywords: ["AI consulting", "ChatGPT integration", "business automation", "chatbot development", "AI content generation", "workflow automation", "generative AI"],
  openGraph: {
    title: "AI Solutions | ChatGPT Integration & Business Automation",
    description: "Transform your business with AI. Cost-effective AI consulting for SMBs.",
    type: "website",
  },
  alternates: {
    canonical: 'https://tonguckaracay.com/en/services/ai-solutions',
  },
};

// ============================================
// ENGLISH CONTENT - INDEPENDENT RESEARCH
// ============================================
// Competitor Analysis (Google.com):
// - Centric Consulting: Enterprise AI, governance, Microsoft Copilot, COE
// - IBM Consulting: Watsonx, enterprise-scale, agentic AI, industry solutions
// - InData Labs: ChatGPT development, API integration, fine-tuning
// - Master of Code: 50+ ChatGPT cases, CRM/ERP integration, enterprise
// - BotPenguin: Custom GPT, chatbot solutions, API integration
// - Treyworks: Custom GPT consulting, SOP automation, 4-6 week delivery
//
// Key Differentiators Found:
// - Most agencies focus on enterprise/large-scale solutions
// - SMB-focused, affordable AI solutions rare
// - No-code/low-code approaches uncommon
// - UX + AI integration not commonly offered
// - Individual consultant model very rare
//
// Long-tail Keywords (Commercial/Service Intent):
// 1. AI consulting services [Commercial]
// 2. ChatGPT integration services [Commercial]
// 3. custom chatbot development [Service]
// 4. business process automation AI [Commercial]
// 5. generative AI solutions [Service]
// 6. AI content generation [Commercial]
// 7. custom GPT development [Service]
// 8. AI workflow automation [Commercial]
// 9. enterprise AI consulting [Service]
// 10. no-code AI solutions [Commercial]
// 11. AI data analysis [Service]
// 12. LLM integration services [Commercial]
// ============================================

const services = [
  { 
    icon: Bot, 
    title: "AI Chatbot & Assistants", 
    description: "Custom chatbots trained on your company data for 24/7 customer support. Integrates with your website, app, or internal systems." 
  },
  { 
    icon: FileText, 
    title: "AI Content Generation", 
    description: "AI-powered content creation for blogs, product descriptions, social media. Maintain brand voice while scaling content production." 
  },
  { 
    icon: Workflow, 
    title: "Process Automation", 
    description: "Automate repetitive business processes with AI. Email responses, document processing, reporting, and data entry automation." 
  },
  { 
    icon: Code, 
    title: "Custom GPT & API Integration", 
    description: "Build custom GPTs tailored to your business needs. Integrate ChatGPT API into your existing systems and workflows." 
  },
  { 
    icon: Database, 
    title: "AI Data Analysis", 
    description: "Extract meaningful insights from large datasets. Customer behavior analysis, predictive modeling, automated reporting." 
  },
  { 
    icon: Image, 
    title: "Visual AI Solutions", 
    description: "AI image generation (DALL-E, Midjourney), image optimization, and automated visual processing for marketing and products." 
  }
];

const process = [
  { 
    step: "01", 
    title: "Needs Assessment", 
    description: "Analyze your current workflows to identify problems and opportunities where AI can deliver the most value." 
  },
  { 
    step: "02", 
    title: "Solution Design", 
    description: "Select appropriate AI tools and develop a strategy. Create ROI projections and implementation roadmap." 
  },
  { 
    step: "03", 
    title: "Prototype & Testing", 
    description: "Build a quick prototype of the chosen solution and test it with real data to validate the approach." 
  },
  { 
    step: "04", 
    title: "Integration", 
    description: "Integrate the AI solution with your existing systems (CRM, ERP, website, etc.) for seamless operation." 
  },
  { 
    step: "05", 
    title: "Training & Handover", 
    description: "Train your team on using the AI tools effectively. Provide comprehensive documentation for independence." 
  },
  { 
    step: "06", 
    title: "Support & Optimization", 
    description: "Ongoing optimization based on real-world usage and technical support to ensure continued success." 
  }
];

const useCases = [
  { icon: MessageSquare, name: "Customer Service", desc: "AI chatbot for 24/7 support" },
  { icon: FileText, name: "Content Creation", desc: "Blogs, social media, product descriptions" },
  { icon: TrendingUp, name: "Sales & Marketing", desc: "Lead scoring, personalized emails" },
  { icon: Database, name: "Data Analysis", desc: "Reporting, forecasting, insights" },
  { icon: Settings, name: "Operations", desc: "Document processing, email automation" },
  { icon: Users, name: "HR Processes", desc: "CV screening, onboarding automation" }
];

const industries = [
  { icon: ShoppingCart, name: "E-Commerce", desc: "Product descriptions, chatbot, recommendations" },
  { icon: Building2, name: "Enterprise", desc: "Documentation, reporting, internal comms" },
  { icon: Briefcase, name: "B2B & SaaS", desc: "Lead generation, customer segmentation" },
  { icon: HeartPulse, name: "Healthcare", desc: "Appointment assistant, patient info" },
  { icon: Users, name: "Education", desc: "Student support bot, content creation" },
  { icon: Lightbulb, name: "Agencies", desc: "Content generation, brief analysis, reporting" }
];

const tools = ["ChatGPT / GPT-4", "Claude", "DALL-E / Midjourney", "Make / Zapier", "n8n", "LangChain", "OpenAI API", "Custom GPTs"];

const advantages = [
  {
    title: "SMB-Focused Approach",
    description: "Instead of enterprise solutions requiring large budgets, I offer practical AI applications that deliver quick ROI for small and medium businesses."
  },
  {
    title: "No-Code / Low-Code Solutions",
    description: "Get results fast without software development costs. Integration with automation platforms like Make, Zapier, and n8n."
  },
  {
    title: "UX/UI + AI Integration",
    description: "I design AI solutions from a user experience perspective. Complex technology, simple interface—that's the principle."
  },
  {
    title: "Digital Marketing Expertise",
    description: "I combine my SEO, content marketing, and digital advertising experience with AI tools to deliver marketing-focused solutions."
  }
];

const faqs = [
  {
    question: "What's the minimum budget for AI solutions?",
    answer: "A simple ChatGPT integration or chatbot can start from $500-1,500. More comprehensive automation projects vary based on requirements. I provide detailed pricing after the initial needs assessment."
  },
  {
    question: "How long does an AI project take?",
    answer: "Simple integrations take 1-2 weeks, mid-scale projects 4-6 weeks, and comprehensive transformation projects 2-3 months. Every project gets a clear timeline at the start."
  },
  {
    question: "How do you ensure data security?",
    answer: "Your company data is not shared with OpenAI or other providers for model training. I use encrypted API connections and secure data handling practices. GDPR-compliant solutions are available."
  },
  {
    question: "Can I use AI without a technical team?",
    answer: "Yes, with no-code/low-code solutions, you can use AI tools without technical expertise. I provide training and documentation so your team can operate independently."
  },
  {
    question: "What AI tools do you use?",
    answer: "Depending on the project: ChatGPT/GPT-4, Claude for generative AI; DALL-E, Midjourney for images; Make, Zapier, n8n for automation; and LangChain for custom development."
  }
];

type Props = { params: { locale: string } };

export default function AISolutionsPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-primary-400 mb-6">
            <Link href="/en" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">AI Solutions</span>
          </nav>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="text-gradient">AI Solutions</span> for Business
              </h1>
              <p className="text-lg md:text-xl text-primary-300 mb-8 leading-relaxed">
                Transform your business processes with AI. ChatGPT integration, custom chatbots, content automation, and data analysis to boost your efficiency. Cost-effective, rapidly deployable AI solutions designed for SMBs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/en/contact" className="btn-primary group text-lg">
                  Free AI Consultation
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
                  <span>No-Code Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span>Fast ROI</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span>SMB Friendly</span>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="card p-8">
              <h2 className="text-xl font-semibold text-white mb-6">AI's business impact</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary-300">Productivity increase with AI adoption</span>
                    <span className="text-accent-500 font-bold">40%</span>
                  </div>
                  <div className="h-2 bg-surface-border rounded-full overflow-hidden">
                    <div className="h-full bg-accent-500 rounded-full" style={{ width: '80%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary-300">Customer service cost reduction</span>
                    <span className="text-accent-500 font-bold">30%</span>
                  </div>
                  <div className="h-2 bg-surface-border rounded-full overflow-hidden">
                    <div className="h-full bg-accent-500 rounded-full" style={{ width: '60%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary-300">Time saved on content creation</span>
                    <span className="text-accent-500 font-bold">70%</span>
                  </div>
                  <div className="h-2 bg-surface-border rounded-full overflow-hidden">
                    <div className="h-full bg-accent-500 rounded-full" style={{ width: '90%' }} />
                  </div>
                </div>
              </div>
              <p className="text-xs text-primary-500 mt-4">Source: McKinsey Global AI Survey, IBM AI Adoption Report</p>
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
              When applied correctly, AI can fundamentally transform your business operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Time Drain</h3>
              <p className="text-primary-400 text-sm mb-3">You're spending too much time on repetitive tasks.</p>
              <p className="text-accent-400 text-sm">→ AI automation completes repetitive work in seconds</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Support Limitations</h3>
              <p className="text-primary-400 text-sm mb-3">You can't respond to customer queries quickly; 24/7 support is expensive.</p>
              <p className="text-accent-400 text-sm">→ AI chatbot provides instant 24/7 customer support</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Content Bottleneck</h3>
              <p className="text-primary-400 text-sm mb-3">Writing blogs, social media, and product descriptions takes too long.</p>
              <p className="text-accent-400 text-sm">→ AI-assisted content generation for fast, quality output</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Data Overload</h3>
              <p className="text-primary-400 text-sm mb-3">You have data but can't extract meaningful insights.</p>
              <p className="text-accent-400 text-sm">→ AI-powered data analysis and automated reporting</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Competitive Pressure</h3>
              <p className="text-primary-400 text-sm mb-3">Your competitors are using AI; you're falling behind.</p>
              <p className="text-accent-400 text-sm">→ Quick, affordable AI adoption to stay competitive</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Technical Barriers</h3>
              <p className="text-primary-400 text-sm mb-3">You want to use AI but don't know where to start.</p>
              <p className="text-accent-400 text-sm">→ Step-by-step guidance and training to start your AI journey</p>
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
              Customizable AI solutions tailored to your business needs.
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

      {/* Use Cases */}
      <section className="py-16 md:py-20 bg-surface-card/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">
                AI <span className="text-gradient">Use Cases</span>
              </h2>
              <p className="text-primary-300 mb-8">
                AI solutions can create value across every area of your business. Most common applications:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {useCases.map((useCase, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="w-5 h-5 text-accent-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{useCase.name}</h4>
                      <p className="text-sm text-primary-400">{useCase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-8">
              <h3 className="text-xl font-semibold text-white mb-6">AI Tools I Use</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, i) => (
                  <span key={i} className="px-4 py-2 bg-surface-border/50 rounded-full text-primary-200 text-sm">
                    {tool}
                  </span>
                ))}
              </div>
              <p className="text-primary-400 text-sm mt-6">
                The right AI tools and platforms are selected based on your project requirements.
              </p>
            </div>
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
              The structured and transparent process I follow for AI projects.
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
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Industry <span className="text-gradient">Applications</span>
            </h2>
            <p className="text-primary-300 max-w-2xl mx-auto">
              Every industry has different AI needs. I provide solutions tailored to your sector.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <div key={i} className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                    <industry.icon className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{industry.name}</h3>
                    <p className="text-primary-400 text-sm">{industry.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Me */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Why <span className="text-gradient">Work With Me?</span>
            </h2>
            <p className="text-primary-300 max-w-2xl mx-auto">
              Advantages I offer compared to enterprise AI consulting firms.
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
                <h3 className="text-xl font-semibold text-white mb-2">Digital Marketing + AI Integration</h3>
                <p className="text-primary-300">
                  I combine my <Link href="/en/services/seo-consulting" className="text-accent-400 hover:underline">SEO</Link> and <Link href="/en/services/online-advertising" className="text-accent-400 hover:underline">digital advertising</Link> expertise with AI tools. AI-powered content creation, automated reporting, and marketing automation for comprehensive digital solutions.
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
      <section className="py-16 md:py-20 bg-gradient-to-br from-accent-500/10 to-purple-500/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Start Transforming Your Business with AI
          </h2>
          <p className="text-primary-300 mb-8 max-w-xl mx-auto">
            Discover how AI can add value to your business with a free consultation session.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/en/contact" className="btn-primary group text-lg">
              Free AI Consultation
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
            "name": "AI Solutions",
            "description": "Transform your business with AI. ChatGPT integration, custom chatbots, content automation, workflow optimization.",
            "provider": {
              "@type": "Person",
              "name": "Tonguç Karaçay",
              "url": "https://tonguckaracay.com"
            },
            "areaServed": "Worldwide",
            "serviceType": "AI Consulting"
          })
        }}
      />
    </main>
  );
}
