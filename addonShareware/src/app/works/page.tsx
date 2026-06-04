import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WorksClient from './WorksClient'

export const metadata: Metadata = {
  title: 'Our Works & Case Studies — Addon Shareware',
  description: 'Explore our portfolio of custom software, enterprise ERP solutions, and mobile applications built for real business needs.',
  alternates: {
    canonical: '/works',
  },
  openGraph: {
    title: 'Our Works & Case Studies — Addon Shareware',
    description: 'Explore our portfolio of custom software, enterprise ERP solutions, and mobile applications built for real business needs.',
    url: 'https://addonshareware.com/works',
    type: 'website',
  },
}

export default function WorksPage() {
  return (
    <>
      <Navbar />
      <WorksClient />
      <Footer />
    </>
  )
}
