import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import About from '@/components/About'
import PreFooterBanner from '@/components/PreFooterBanner'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Addon Shareware',
    'url': 'https://addonshareware.com',
    'logo': 'https://addonshareware.com/logo.png',
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+91-9311435804',
      'contactType': 'customer service',
      'areaServed': 'IN',
      'availableLanguage': ['en', 'hi'],
    },
    'sameAs': [
      'https://x.com',
      'https://www.instagram.com',
      'https://www.linkedin.com/company/addon-shareware-pvt-ltd',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <PreFooterBanner />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
