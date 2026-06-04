'use client'

import { useState, useEffect, useRef } from 'react'

export default function Hero() {
  const [stage, setStage] = useState<0 | 1 | 2 | 3 | 4>(0) // 0: Blank, 1: Drawing Logo, 2: Revealing Page, 3: Staggering Content, 4: Done
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Prevent scrolling while preloading
    if (stage < 4) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [stage])

  useEffect(() => {
    // Stage 1: Blank to Logo Drawing (after 50ms)
    const t1 = setTimeout(() => setStage(1), 50)

    // Stage 2: Logo Drawing to Revealing Page (after 1450ms)
    const t2 = setTimeout(() => setStage(2), 1450)

    // Stage 3: Revealing to Content Entrance (after 2150ms)
    const t3 = setTimeout(() => setStage(3), 2150)

    // Stage 4: Animation completely finished (remove preloader)
    const t4 = setTimeout(() => setStage(4), 3150)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const hero = heroRef.current
      if (!hero) return
      const rect = hero.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      hero.style.setProperty('--mouse-x', `${x}px`)
      hero.style.setProperty('--mouse-y', `${y}px`)
    }

    const hero = heroRef.current
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [stage])

  const smoothTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.querySelector(id)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }

  return (
    <>
      {/* ── PRELOADER OVERLAY (Stage 0 to 3) ── */}
      {stage < 4 && (
        <div className={`hero-preloader-overlay stage-${stage}`}>
          {/* We keep the overlay background styling purely in CSS */}
        </div>
      )}

      {/* ── HERO SECTION ── */}
      <section className={`hero-new stage-${stage}`} id="home" ref={heroRef}>
        <div className="hero-bg-dots" />
        <div className="hero-mouse-glow" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />

        {/* Decorative background stars */}
        <div className="hero-decor-star star-1"><i className="fas fa-plus" /></div>
        <div className="hero-decor-star star-2"><i className="fas fa-plus" /></div>
        <div className="hero-decor-star star-3"><i className="fas fa-plus" /></div>

        {/* Seamlessly transitioning brand image mark */}
        <img 
          src="/hero-logo.png" 
          alt="Addon Shareware Monogram" 
          className={`hero-monogram-img stage-${stage}`} 
        />

        <div className="container hero-new-inner">
          <div className="hero-new-content">
            
            {/* Subtitle */}
            <p className="hero-new-subtitle">
              WE ARE ADDON SHAREWARE
            </p>

            {/* Main Headline */}
            <h1 className="hero-new-title">
              A software agency<br />
              focused on <strong>digital scale.</strong>
            </h1>

            {/* Description */}
            <p className="hero-new-desc">
              We are a dedicated team of engineers, architects, and designers building 
              high-performance custom software, school management ERPs, and elevated digital products.
            </p>

            {/* CTA Button */}
            <div className="hero-new-cta">
              <a href="#services" className="hero-pill-btn" onClick={(e) => smoothTo(e, '#services')}>
                GET TO KNOW US <span className="btn-plus">+</span>
              </a>
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <a href="#services" className="scroll-indicator-new" onClick={(e) => smoothTo(e, '#services')}>
          <span className="scroll-label">scroll</span>
          <div className="scroll-track"><div className="scroll-thumb" /></div>
          <i className="fas fa-chevron-down scroll-chevron" />
        </a>
      </section>
    </>
  )
}
