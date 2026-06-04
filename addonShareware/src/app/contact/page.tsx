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
        <Contact />
      </div>
      <Footer />
    </>
  )
}
