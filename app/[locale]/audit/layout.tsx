import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'auditflow — UX + SEO Intelligence',
  description: 'AI-powered UX and SEO audit tool for freelancers and agencies.',
  // Placeholder/prototype, not an indexable service landing page.
  robots: { index: false, follow: false },
}

export default function AuditLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
