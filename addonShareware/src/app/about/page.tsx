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
        {/* Themed Header Banner */}
        <header className="works-header" style={{ padding: '60px 0 40px' }}>
          <div className="grid-bg-dark" />
          <div className="container works-header-inner">
            <div className="works-hero-text">
              <p className="section-label">Who We Are</p>
              <h1 className="works-big-title">
                About Our<br /><strong>Company</strong>
              </h1>
              <p className="section-sub light" style={{ margin: '0' }}>
                Creating empowering software architectures and user interfaces built to scale.
              </p>
            </div>
          </div>
        </header>
        
        <About />
        <PreFooterBanner />
      </div>
      <Footer />
    </>
  )
}
