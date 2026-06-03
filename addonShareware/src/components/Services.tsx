'use client'

import { useEffect, useRef } from 'react'

const services = [
  {
    title: 'Website Development',
    desc: 'High-performance websites built with modern technologies. From marketing sites to full-stack web applications — pixel-perfect, secure, and built to scale.',
    list: ['Custom Web Applications', 'E-commerce Platforms', 'Front-end & Back-end Dev', 'CMS Integrations'],
    tag: 'React · Next.js · Node.js · PHP',
  },
  {
    title: 'App Development',
    desc: 'Native and cross-platform mobile apps delivering smooth, polished experiences on iOS and Android — built with performance and great UX at the core.',
    list: ['iOS & Android Apps', 'Cross-platform Development', 'App Store Deployment', 'API & Database Integration'],
    tag: 'React Native · Flutter · Java · Kotlin',
  },
  {
    title: 'ERP & Software Solutions',
    desc: 'Custom-built enterprise software designed to streamline operations, automate workflows, and maximize business efficiency across domains.',
    list: ['School Management ERP (eduapps)', 'Travel Agency Billing (Reckon)', 'Pharma Inventory Management', 'Custom Workflow Automation'],
    tag: 'Cloud · Java · .NET · SQL',
  },
  {
    title: 'Cloud Computing & DevOps',
    desc: 'Deploy and scale apps securely. We build resilient backend infrastructure, configure CI/CD pipelines, and migrate workloads to the cloud.',
    list: ['Cloud Migration & Setup', 'CI/CD Pipelines', 'Server Maintenance & L1-L3 Support', 'AWS & Azure Management'],
    tag: 'AWS · Azure · Docker · CI/CD',
  },
  {
    title: 'UI/UX & Graphic Design',
    desc: 'Intelligent design systems and attention-grabbing marketing collaterals. We establish strong brand identities that resonate with your users.',
    list: ['Figma UI/UX Design', 'Logos & Brand Identity', 'Brochures, Banners & Flyers', 'Packaging Design'],
    tag: 'Figma · Photoshop · Illustrator',
  },
]

// ─── SVG Illustrations with micro-animations ───

function WebDevIllustration() {
  return (
    <svg className="svc-illustration-svg" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="sphereGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#009db0" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#009db0" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="150" r="120" fill="url(#sphereGlow)" />
      <g className="anim-spin-slow" style={{ transformOrigin: '200px 150px' }}>
        <ellipse cx="200" cy="150" rx="100" ry="40" stroke="rgba(255,255,255,0.12)" strokeWidth="1" transform="rotate(30 200 150)" />
        <ellipse cx="200" cy="150" rx="100" ry="40" stroke="rgba(0, 157, 176, 0.4)" strokeWidth="1.5" transform="rotate(-30 200 150)" />
        <ellipse cx="200" cy="150" rx="100" ry="40" stroke="rgba(255,255,255,0.08)" strokeWidth="1" transform="rotate(90 200 150)" />
      </g>
      <g className="anim-float">
        <path d="M200 65 L250 150 L200 175 L150 150 Z" stroke="#ffffff" strokeWidth="1.5" fill="rgba(255,255,255,0.04)" />
        <path d="M200 235 L250 150 L200 175 L150 150 Z" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="rgba(255,255,255,0.02)" />
        <line x1="200" y1="65" x2="200" y2="235" stroke="#009db0" strokeWidth="1.5" strokeDasharray="4 4" />
      </g>
    </svg>
  )
}

function AppDevIllustration() {
  return (
    <svg className="svc-illustration-svg" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="appGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="150" r="120" fill="url(#appGlow)" />
      <g className="anim-float">
        <rect x="135" y="45" width="130" height="210" rx="20" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="rgba(0,0,0,0.3)" />
        <rect x="143" y="55" width="114" height="190" rx="12" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <circle cx="200" cy="130" r="35" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="5 3" className="anim-spin-slow" style={{ transformOrigin: '200px 130px' }} />
        <circle cx="200" cy="130" r="15" stroke="#ffffff" strokeWidth="1.5" />
        <line x1="165" y1="195" x2="235" y2="195" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
        <line x1="165" y1="210" x2="210" y2="210" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
      </g>
    </svg>
  )
}

function ErpIllustration() {
  return (
    <svg className="svc-illustration-svg" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="erpGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.38" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="150" r="120" fill="url(#erpGlow)" />
      <g className="anim-float">
        <path d="M150 110 L200 80 L250 110 L200 140 Z" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="rgba(255,255,255,0.02)" />
        <path d="M150 190 L200 160 L250 190 L200 220 Z" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="rgba(255,255,255,0.01)" />
        <line x1="150" y1="110" x2="150" y2="190" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="250" y1="110" x2="250" y2="190" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="200" y1="140" x2="200" y2="220" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="200" y1="80" x2="200" y2="160" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        
        <rect x="182" y="122" width="36" height="36" rx="8" stroke="#10b981" strokeWidth="2" fill="rgba(16, 185, 129, 0.15)" />
        <line x1="150" y1="150" x2="182" y2="140" stroke="#10b981" strokeWidth="1.2" strokeDasharray="3 3" />
        <line x1="250" y1="150" x2="218" y2="140" stroke="#10b981" strokeWidth="1.2" strokeDasharray="3 3" />
      </g>
    </svg>
  )
}

function CloudIllustration() {
  return (
    <svg className="svc-illustration-svg" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="cloudGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="150" r="120" fill="url(#cloudGlow)" />
      <g className="anim-float">
        <path d="M150 170 A25 25 0 0 1 175 130 A40 40 0 0 1 240 125 A30 30 0 0 1 265 170 Z" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="rgba(255,255,255,0.01)" />
        <path d="M140 160 C90 210, 100 110, 200 160 C300 210, 310 110, 260 160" stroke="#3b82f6" strokeWidth="2" className="anim-dash-offset" />
        <circle cx="200" cy="160" r="4.5" fill="#ffffff" />
      </g>
    </svg>
  )
}

function DesignIllustration() {
  return (
    <svg className="svc-illustration-svg" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="designGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#f43f5e" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="150" r="120" fill="url(#designGlow)" />
      <g className="anim-float">
        <circle cx="170" cy="140" r="50" stroke="#f43f5e" strokeWidth="1.5" fill="rgba(244, 63, 94, 0.08)" />
        <circle cx="230" cy="140" r="50" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="rgba(255,255,255,0.02)" />
        
        <rect x="195" y="85" width="10" height="10" stroke="#ffffff" strokeWidth="1.5" fill="#f43f5e" />
        <line x1="140" y1="90" x2="260" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <circle cx="140" cy="90" r="4" fill="#ffffff" />
        <circle cx="260" cy="90" r="4" fill="#ffffff" />
        
        <path d="M220 180 L202 102 L245 130 L223 140 Z" fill="#ffffff" stroke="#000000" strokeWidth="1.5" />
      </g>
    </svg>
  )
}

function ServiceIllustration({ type }: { type: string }) {
  if (type === 'Website Development') return <WebDevIllustration />
  if (type === 'App Development') return <AppDevIllustration />
  if (type === 'ERP & Software Solutions') return <ErpIllustration />
  if (type === 'Cloud Computing & DevOps') return <CloudIllustration />
  if (type === 'UI/UX & Graphic Design') return <DesignIllustration />
  return null
}

export default function Services() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent, index: number) => {
      const card = cardsRef.current[index]
      if (!card) return
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      card.style.setProperty('--x', `${x}px`)
      card.style.setProperty('--y', `${y}px`)
    }

    const cards = cardsRef.current
    const cleanupFns: (() => void)[] = []

    cards.forEach((card, index) => {
      if (!card) return
      const mouseMoveListener = (e: MouseEvent) => handleMouseMove(e, index)
      const mouseEnterListener = () => card.classList.add('hovering')
      const mouseLeaveListener = () => card.classList.remove('hovering')

      card.addEventListener('mousemove', mouseMoveListener)
      card.addEventListener('mouseenter', mouseEnterListener)
      card.addEventListener('mouseleave', mouseLeaveListener)

      cleanupFns.push(() => {
        card.removeEventListener('mousemove', mouseMoveListener)
        card.removeEventListener('mouseenter', mouseEnterListener)
        card.removeEventListener('mouseleave', mouseLeaveListener)
      })
    })

    return () => {
      cleanupFns.forEach(fn => fn())
    }
  }, [])

  return (
    <section className="section services-section" id="services">
      <div className="container">
        
        {/* Left-Aligned Header matching design template */}
        <div className="services-section-header">
          <div className="services-section-label">
            <span className="label-line" /> [05] SERVICES / WHAT WE DO
          </div>
          <h2 className="services-main-title">
            From <span className="title-accent-italic">briefing</span> to <span className="title-accent-italic">launch</span>.
          </h2>
        </div>

        {/* Stacking Sticky Cards container */}
        <div className="services-stack">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              ref={(el) => { cardsRef.current[i] = el }}
              className="service-stack-card"
              style={{ top: `calc(110px + ${i * 24}px)` }}
            >
              {/* Left Column: Animated SVGs */}
              <div className="service-card-left">
                <ServiceIllustration type={svc.title} />
              </div>

              {/* Right Column: Text & Capabilities list */}
              <div className="service-card-right">
                <div className="service-card-step">0{i + 1} / 05</div>
                <h3 className="service-card-title">{svc.title}</h3>
                <p className="service-card-desc">{svc.desc}</p>
                <div className="service-card-divider" />
                <ul className="service-card-bullets">
                  {svc.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
