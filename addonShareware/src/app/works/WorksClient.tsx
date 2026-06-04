'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import Link from 'next/link'

interface WorkItem {
  id: string
  category: string
  year: string
  logo: string
  logoColor: string
  coverGradient: string
  title: string
  company: string
  industry: string
  date: string
  location: string
  stack: string[]
  summary: string
  outcome: string
  link?: string
  slides: string[]
  portrait?: boolean
}

const works: WorkItem[] = [
  {
    id: 'eduapps',
    category: 'ERP & Enterprise',
    year: '2024',
    logo: 'EA',
    logoColor: '#4f46e5',
    coverGradient: 'linear-gradient(135deg,#4f46e5,#3730a3,#2e2a87)',
    title: 'eduapps — School Management ERP',
    company: 'Addon Shareware',
    industry: 'Education ERP',
    date: '2024',
    location: 'India',
    stack: ['React', 'Java', 'Spring Boot', 'PostgreSQL', 'RFID'],
    summary: 'A cloud-based school ERP system designed to reduce administrative overhead. Integrates RFID smart cards, biometric check-ins, online payment gateways, and real-time parent notifications.',
    outcome: 'Successfully deployed in multiple CBSE/ICSE schools across India.',
    link: 'https://addonshareware.com/product.html',
    slides: [],
  },
  {
    id: 'reckon',
    category: 'ERP & Enterprise',
    year: '2023',
    logo: 'RK',
    logoColor: '#0ea5e9',
    coverGradient: 'linear-gradient(135deg,#0ea5e9,#0369a1,#075985)',
    title: 'Reckon — Travel Invoicing & Ops',
    company: 'Addon Shareware',
    industry: 'Travel CRM / SaaS',
    date: '2023',
    location: 'India',
    stack: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'Stripe'],
    summary: 'An administrative and billing tool tailored for travel agencies. Automates invoice creation, calculates agent service fees dynamically, connects to GDS booking engines, and enables batch check printing.',
    outcome: 'Reduced administrative invoicing tasks by 60% for active travel clients.',
    link: 'https://addonshareware.com/product.html',
    slides: [],
  },
  {
    id: 'credvisor',
    category: 'Mobile App',
    year: '2024',
    logo: 'CV',
    logoColor: '#0d1a2e',
    coverGradient: 'linear-gradient(135deg,#0d1a2e,#0f2540,#133358)',
    title: 'Credvisor — Credit Advisory App',
    company: 'Credvisor',
    industry: 'Fintech / Credit',
    date: '2024',
    location: 'India',
    stack: ['Android', 'Java', 'Firebase', 'REST APIs'],
    summary: 'A credit advisory app enabling Indian consumers to track their credit scores, receive personalized action plans for credit enhancement, and check loan eligibility.',
    outcome: 'Live on Google Play Store with active users.',
    link: 'https://play.google.com/store/apps/details?id=com.addonshareware.Credvisor',
    slides: ['/projects/credvisor-1.png', '/projects/credvisor-2.png', '/projects/credvisor-3.png'],
    portrait: false,
  },
  {
    id: 'wheelboard',
    category: 'Mobile App',
    year: '2024',
    logo: 'WB',
    logoColor: '#0d1a0d',
    coverGradient: 'linear-gradient(135deg,#0d1a0d,#102510,#1a3d1a)',
    title: 'Wheelboard — Mobility Platform',
    company: 'Wheelboard',
    industry: 'Mobility & Community',
    date: '2024',
    location: 'India',
    stack: ['Android', 'Kotlin', 'Firebase', 'Google Maps API'],
    summary: 'A community-centric mapping and tracking mobile app for road trip enthusiasts and bike riders. Enables real-time location sharing, custom route plotting, and group riding boards.',
    outcome: 'Shipped to Play Store, supporting over 5,000+ active riders.',
    link: 'https://play.google.com/store/apps/details?id=com.wheelboard.app',
    slides: ['/projects/wheelboard-1.png', '/projects/wheelboard-2.png', '/projects/wheelboard-3.png'],
    portrait: false,
  },
  {
    id: 'pharmaerp',
    category: 'ERP & Enterprise',
    year: '2025',
    logo: 'PE',
    logoColor: '#10b981',
    coverGradient: 'linear-gradient(135deg,#10b981,#047857,#065f46)',
    title: 'Addon Pharma ERP — Stock & Billing',
    company: 'Addon Shareware',
    industry: 'Healthcare ERP',
    date: '2025',
    location: 'India',
    stack: ['Node.js', 'Express', 'React', 'MongoDB', 'Chart.js'],
    summary: 'An inventory and billing automation system built specifically for pharmaceutical wholesale distributors and retail pharmacy networks. Supports batch-expiry tracking and drug inventory forecasting.',
    outcome: 'Deployed in regional pharma distribution hubs, improving billing speed.',
    link: 'https://addonshareware.com/product.html',
    slides: [],
  },
]

const categories = ['All', 'ERP & Enterprise', 'Mobile App']

interface WorksSlideshowProps {
  slides: string[]
  fallbackGradient: string
  logo: string
  logoColor: string
  year: string
  portrait?: boolean
}

function WorksSlideshow({ slides, fallbackGradient, logo, logoColor, year, portrait }: WorksSlideshowProps) {
  const [idx, setIdx] = useState(0)
  const total = slides.length
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  const handleEnter = () => {
    if (total < 2) return
    timerRef.current = setInterval(() => setIdx(i => (i + 1) % total), 800)
  }

  const handleLeave = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    setIdx(0)
  }

  if (!total) {
    return (
      <div className="works-card-cover" style={{ background: fallbackGradient }}>
        <div className="works-card-logo" style={{ background: logoColor }}>{logo}</div>
        <span className="works-card-year">{year}</span>
      </div>
    )
  }

  return (
    <div className={`works-card-cover wcs-wrap${portrait ? ' wcs-portrait' : ''}`} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      {slides.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`wcs-slide${i === idx ? ' active' : ''}`}
        />
      ))}
      <span className="works-card-year wcs-year">{year}</span>
      {total > 1 && (
        <div className="wcs-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`wcs-dot${i === idx ? ' active' : ''}`}
              onClick={e => { e.preventDefault(); setIdx(i) }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function WorksClient() {
  const [active, setActive] = useState('All')
  const [visible, setVisible] = useState<string[]>([])
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const filtered = useMemo(() => {
    return active === 'All' ? works : works.filter((w) => w.category === active)
  }, [active])

  // Distribute filtered items into 3 columns for staggered masonry layout
  const columns: WorkItem[][] = [[], [], []]
  filtered.forEach((w, index) => {
    columns[index % 3].push(w)
  })

  useEffect(() => {
    setVisible([])
    const timers = filtered.map((w, i) =>
      setTimeout(() => setVisible((v) => [...v, w.id]), i * 90)
    )
    return () => timers.forEach(clearTimeout)
  }, [active, filtered])

  useEffect(() => {
    window.scrollTo(0, 0)
    const timers = works.map((w, i) =>
      setTimeout(() => setVisible((v) => [...v, w.id]), i * 90)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className="works-page">
      {/* Header */}
      <header className="works-header">
        <div className="grid-bg-dark" />
        <div className="container works-header-inner">
          <div className="works-hero-text">
            <p className="section-label">Our portfolio</p>
            <h1 className="works-big-title">
              Work &amp;<br /><strong>Case Studies</strong>
            </h1>
            <p className="section-sub light">
              Real products built for real businesses — from first concept all the way to launch.
            </p>
          </div>
          <div className="works-header-stat-row">
            {[['250+', 'Projects'], ['1500+', 'Clients'], ['12+', 'Years']].map(([n, l]) => (
              <div key={l} className="works-header-stat">
                <span className="works-stat-num">{n}</span>
                <span className="works-stat-label">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Filter bar */}
      <div className="works-filter-bar">
        <div className="container works-filter-inner">
          {categories.map((c) => (
            <button
              key={c}
              className={`works-filter-btn${active === c ? ' active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="works-grid-section">
        <div className="container">
          <div className={`works-grid-new ${hoveredId ? 'has-hovered' : ''}`}>
            {columns.map((column, colIdx) => (
              <div key={colIdx} className="works-column">
                {column.map((w) => {
                  // Find sequential display index in current filtered list
                  const itemIndex = filtered.findIndex((item) => item.id === w.id)
                  const displayNum = (itemIndex + 1).toString().padStart(2, '0')
                  const isVisible = visible.includes(w.id)
                  
                  // Extract clean short title (e.g. "eduapps" instead of "eduapps — School ERP")
                  const cleanTitle = w.title.split('—')[0].split('-')[0].trim()
                  const isNew = w.year === '2025'

                  return (
                    <Link
                      key={w.id}
                      href={w.id === 'credvisor' ? '/works/credvisor' : '#'}
                      onClick={(e) => { if (w.id !== 'credvisor') e.preventDefault(); }}
                      className={`works-card-new ${isVisible ? 'visible' : ''} ${hoveredId === w.id ? 'focused' : ''} ${hoveredId && hoveredId !== w.id ? 'dimmed' : ''}`}
                      onMouseEnter={() => setHoveredId(w.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      style={{ textDecoration: 'none' }}
                    >
                      {/* Title above Card Image */}
                      <div className="works-card-header">
                        <h3 className="works-card-title">
                          {cleanTitle} {isNew && <span className="works-new-tag">New</span>}
                        </h3>
                      </div>

                      {/* Card Image Wrapper with Hover Snippet Overlay */}
                      <div className="works-card-image-wrap">
                        <WorksSlideshow
                          slides={w.slides}
                          fallbackGradient={w.coverGradient}
                          logo={w.logo}
                          logoColor={w.logoColor}
                          year={w.year}
                          portrait={w.portrait}
                        />

                        {/* Hover Overlay snippet of info */}
                        <div className="works-card-hover-overlay">
                          <p className="works-hover-summary">{w.summary}</p>
                          <div className="works-hover-stack">
                            {w.stack.slice(0, 4).map((s) => (
                              <span key={s}>{s}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Footer with Divider line, number and tags */}
                      <div className="works-card-footer">
                        <div className="works-card-line" />
                        <div className="works-card-meta">
                          <span className="works-card-num">{displayNum}</span>
                          <span className="works-card-tags">{w.category}</span>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="works-footer-cta">
        <div className="container works-cta-inner">
          <h2>Got a project in mind?</h2>
          <p>We&apos;d love to add it to this list soon.</p>
          <Link href="/#contact" className="btn-dark">
            Start a conversation <i className="fas fa-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  )
}
