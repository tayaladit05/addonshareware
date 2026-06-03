import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import PreFooterBanner from '@/components/PreFooterBanner'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Our Services — Addon Shareware',
  description: 'Explore our services including custom Web Development, mobile App Development, custom ERP solutions, DevOps, and UI/UX design.',
  alternates: {
    canonical: '/services',
  },
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 'var(--nav-h)' }}>
        {/* Themed Header Banner */}
        <header className="works-header" style={{ padding: '60px 0 40px' }}>
          <div className="grid-bg-dark" />
          <div className="container works-header-inner">
            <div className="works-hero-text">
              <p className="section-label">Capabilities</p>
              <h1 className="works-big-title">
                What We<br /><strong>Deliver</strong>
              </h1>
              <p className="section-sub light" style={{ margin: '0' }}>
                End-to-end engineering from business wireframes to enterprise scale deployments.
              </p>
            </div>
          </div>
        </header>

        <Services />
        <PreFooterBanner />
      </div>
      <Footer />
    </>
  )
}
