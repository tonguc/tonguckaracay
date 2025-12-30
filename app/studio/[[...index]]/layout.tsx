export const metadata = {
  title: 'Sanity Studio - Tonguç Karaçay Blog',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
