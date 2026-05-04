"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Linkedin,
  ExternalLink,
  Send,
  CheckCircle2,
  Loader2
} from "lucide-react";

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const topic = params.get('topic');
    if (topic?.startsWith('ai-training')) {
      setFormData(prev => ({ ...prev, service: 'AI Training' }));
    }
  }, []);

  const services = [
    "UI/UX Design",
    "SEO Consulting",
    "Online Advertising",
    "AI Solutions",
    "Social Media Management",
    "AI Training",
    "Other"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
      } else {
        alert(data.error || 'An error occurred while sending the form.');
      }
    } catch (error) {
      alert('An error occurred while sending the form.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-20">
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="flex items-center justify-center gap-2 text-sm text-primary-400 mb-6">
              <Link href="/en" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Contact</span>
            </nav>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              <span className="text-gradient">Get in</span> Touch
            </h1>

            <p className="text-xl text-primary-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Fill out the form below to discuss your project, get a quote, or just say hello. 
              I usually respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-display font-bold text-white mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Email</h3>
                    <a href="mailto:tonguckaracay@gmail.com" className="text-primary-300 hover:text-accent-400 transition-colors">
                      tonguckaracay@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Location</h3>
                    <p className="text-primary-300">Istanbul, Turkey</p>
                    <p className="text-primary-400 text-sm">Available for remote work worldwide</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-white font-medium mb-4">Social Media</h3>
                <div className="flex gap-3">
                  <a href="https://linkedin.com/in/tonguckaracay" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-lg bg-surface-card border border-surface-border flex items-center justify-center text-primary-300 hover:text-accent-400 hover:border-accent-500/50 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/tonguckaracay" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-lg bg-surface-card border border-surface-border flex items-center justify-center text-primary-300 hover:text-accent-400 hover:border-accent-500/50 transition-all">
                    <InstagramIcon />
                  </a>
                  <a href="https://behance.net/tonguc" target="_blank" rel="noopener noreferrer" aria-label="Behance" className="w-10 h-10 rounded-lg bg-surface-card border border-surface-border flex items-center justify-center text-primary-300 hover:text-accent-400 hover:border-accent-500/50 transition-all">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-surface-card border border-surface-border rounded-2xl p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-display font-bold text-white mb-3">Message Sent!</h3>
                    <p className="text-primary-300 mb-6">I'll get back to you as soon as possible.</p>
                    <button onClick={() => setIsSubmitted(false)} className="text-accent-400 hover:text-accent-300 font-medium transition-colors">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-display font-bold text-white mb-6">Share Your Project Details</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-primary-300 mb-2">Full Name *</label>
                          <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-surface-darker border border-surface-border rounded-xl text-white placeholder-primary-500 focus:outline-none focus:border-accent-500 transition-colors" placeholder="Your name" />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-primary-300 mb-2">Email *</label>
                          <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-surface-darker border border-surface-border rounded-xl text-white placeholder-primary-500 focus:outline-none focus:border-accent-500 transition-colors" placeholder="example@email.com" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-primary-300 mb-2">Phone</label>
                          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-surface-darker border border-surface-border rounded-xl text-white placeholder-primary-500 focus:outline-none focus:border-accent-500 transition-colors" placeholder="+1 234 567 8900" />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-primary-300 mb-2">Company</label>
                          <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 bg-surface-darker border border-surface-border rounded-xl text-white placeholder-primary-500 focus:outline-none focus:border-accent-500 transition-colors" placeholder="Company name (optional)" />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-primary-300 mb-2">Service of Interest</label>
                        <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 bg-surface-darker border border-surface-border rounded-xl text-white focus:outline-none focus:border-accent-500 transition-colors">
                          <option value="">Select</option>
                          {services.map((service) => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-primary-300 mb-2">Your Message *</label>
                        <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 bg-surface-darker border border-surface-border rounded-xl text-white placeholder-primary-500 focus:outline-none focus:border-accent-500 transition-colors resize-none" placeholder="Tell me briefly about your project..." />
                      </div>

                      <button type="submit" disabled={isSubmitting} className="w-full btn-primary py-4 text-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                        {isSubmitting ? (
                          <><Loader2 className="w-5 h-5 mr-2 animate-spin" />Sending...</>
                        ) : (
                          <><Send className="w-5 h-5 mr-2" />Send Message</>
                        )}
                      </button>

                      <p className="text-sm text-primary-400 text-center">* Required fields</p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
