import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OptiVitality - Ayurvedic + Nutraceutical Wellness',
  description: 'Premium Indian wellness startup bridging ancient Ayurvedic wisdom with modern clinical nutraceutical science for preventive health solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

