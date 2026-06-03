import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact Us — Addon Shareware',
  description: 'Get in touch with Addon Shareware. Send us a message about your project or call us directly. Offices in Noida and Delhi, India.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 'var(--nav-h)' }}>
        {/* Themed Header Banner */}
        <header className="works-header" style={{ padding: '60px 0 40px' }}>
          <div className="grid-bg-dark" />
          <div className="container works-header-inner">
            <div className="works-hero-text">
              <p className="section-label">Get In Touch</p>
              <h1 className="works-big-title">
                Start a<br /><strong>Conversation</strong>
              </h1>
              <p className="section-sub light" style={{ margin: '0' }}>
                We respond within 24 hours to help map your software specifications.
              </p>
            </div>
          </div>
        </header>

        <Contact />
      </div>
      <Footer />
    </>
  )
}
