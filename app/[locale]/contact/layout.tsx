import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact & Free SEO Pre-Audit | Tonguç Karaçay",
  description: "Request a free SEO, GEO and conversion pre-audit of your website, or tell me about your project. I reply within 24 hours.",
  alternates: {
    canonical: 'https://tonguckaracay.com/en/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
