import { Analytics } from '@vercel/analytics/next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import { siteConfig } from '@/lib/data'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  fallback: ['system-ui', 'Arial'],
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Lumiva — Muhammad Salman Al Farizi | Software Engineer',
    template: '%s | Lumiva',
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
  creator: siteConfig.fullName,
  publisher: siteConfig.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_ID',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'Lumiva — Muhammad Salman Al Farizi | Software Engineer',
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary',
    title: 'Lumiva — Muhammad Salman Al Farizi | Software Engineer',
    description: siteConfig.description,
    creator: '@ItzRyz',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // add google: '...' when Search Console ready
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: siteConfig.fullName,
      alternateName: siteConfig.name,
      url: siteConfig.url,
      jobTitle: 'Software Engineer',
      description: siteConfig.description,
      sameAs: ['https://github.com/ItzRyz', 'https://www.linkedin.com/in/salmanafz', 'https://www.instagram.com/slmvaax'],
      knowsAbout: ['Next.js', 'React', 'Laravel', 'Go', 'PostgreSQL', 'TypeScript'],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pamulang',
        addressCountry: 'ID',
      },
    },
    {
      '@type': 'WebSite',
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      inLanguage: 'en',
      author: { '@type': 'Person', name: siteConfig.fullName },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn('bg-background font-sans antialiased', inter.variable, jetbrains.variable)}
    >
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  )
}
