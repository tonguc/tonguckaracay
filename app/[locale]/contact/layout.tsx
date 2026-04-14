import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free SEO Consulting | Contact | Tonguç Karaçay',
  description: 'Request a free consultation for your digital marketing, SEO, or UI/UX project. 25+ years of experience and measurable results. Get in touch today.',
  alternates: {
    canonical: 'https://tonguckaracay.com/en/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
