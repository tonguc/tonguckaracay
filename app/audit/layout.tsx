import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'auditflow — UX + SEO Intelligence',
  description: 'AI-powered UX and SEO audit tool for freelancers and agencies.',
}

export default function AuditLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
