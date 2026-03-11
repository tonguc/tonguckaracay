import type { Metadata } from 'next'
import { DM_Sans, DM_Mono } from 'next/font/google'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' })
const dmMono = DM_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'auditflow — UX + SEO Intelligence',
  description: 'AI-powered UX and SEO audit tool for freelancers and agencies.',
}

export default function AuditLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${dmSans.variable} ${dmMono.variable}`}>
      <style>{`
        #audit-root *, #audit-root *::before, #audit-root *::after { box-sizing: border-box; }
        :root {
          --af-bg: #0A0E1A;
          --af-surface: #111827;
          --af-surface-hover: #1a2235;
          --af-border: #1e2d45;
          --af-accent: #0EA5E9;
          --af-accent-dim: #0c4a6e;
          --af-green: #10B981;
          --af-amber: #F59E0B;
          --af-red: #EF4444;
          --af-purple: #8B5CF6;
          --af-text: #F0F4FF;
          --af-muted: #6B7A99;
          --af-dim: #3D4F6B;
        }
      `}</style>
      <div id="audit-root" style={{
        minHeight: '100vh',
        background: '#0A0E1A',
        color: '#F0F4FF',
        fontFamily: 'var(--font-sans, DM Sans, sans-serif)',
      }}>
        {children}
      </div>
    </div>
  )
}
