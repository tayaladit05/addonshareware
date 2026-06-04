import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import PreFooterBanner from '@/components/PreFooterBanner'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Us — Addon Shareware',
  description: 'Learn about Addon Shareware, our mission, values, and our journey in delivering custom software, ERP systems, and digital agency services.',
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 'var(--nav-h)' }}>

        <About />
        <PreFooterBanner />
      </div>
      <Footer />
    </>
  )
}
