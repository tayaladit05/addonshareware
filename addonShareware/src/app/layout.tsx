import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import '@/index.css'
import AnimateObserver from '@/components/AnimateObserver'
import GlobalMouseGlow from '@/components/GlobalMouseGlow'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Addon Shareware — Web, App & Software Development Agency',
  description: 'An India-based IT company specializing in high-quality software development, custom ERP solutions, web design, and digital transformation. We help businesses modernize and scale.',
  metadataBase: new URL('https://addonshareware.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Addon Shareware — Web, App & Software Development Agency',
    description: 'An India-based IT company specializing in high-quality software development, custom ERP solutions, web design, and digital transformation. We help businesses modernize and scale.',
    url: 'https://addonshareware.com',
    siteName: 'Addon Shareware',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Addon Shareware Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
    },
  twitter: {
    card: 'summary_large_image',
    title: 'Addon Shareware — Web, App & Software Development Agency',
    description: 'An India-based IT company specializing in high-quality software development, custom ERP solutions, web design, and digital transformation. We help businesses modernize and scale.',
    images: ['/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var saved = localStorage.getItem('theme');
                if (saved) {
                  document.documentElement.setAttribute('data-theme', saved);
                } else {
                  var systemTheme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) ? 'light' : 'dark';
                  document.documentElement.setAttribute('data-theme', systemTheme);
                }
              })()
            `,
          }}
        />
      </head>
      <body className={`${plusJakarta.variable} ${inter.variable}`}>
        <AnimateObserver />
        <GlobalMouseGlow />
        {children}
        <a href="tel:+919311435804" className="floating-phone-widget">
          <i className="fas fa-phone-alt floating-phone-icon" />
          <span>+91 9311435804</span>
        </a>
      </body>
    </html>
  )
}
