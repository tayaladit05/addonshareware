'use client'

import { useEffect, useRef } from 'react'

const stats = [
  { num: '100+', label: 'Projects Delivered' },
  { num: '50+', label: 'Happy Clients' },
  { num: '8+', label: 'Years Experience' },
  { num: '15', label: 'Team Members' },
]

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const statsGrid = statsRef.current
    if (!statsGrid) return

    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.stat-num').forEach((numEl) => {
              const textContent = numEl.textContent || ''
              const isPlus = textContent.includes('+')
              const val = parseInt(textContent)
              if (isNaN(val)) return
              let start = 0
              const step = Math.ceil(val / (1200 / 16))
              const timer = setInterval(() => {
                start += step
                if (start >= val) {
                  start = val
                  clearInterval(timer)
                }
                numEl.textContent = start + (isPlus ? '+' : '')
              }, 16)
            })
            statsObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    statsObserver.observe(statsGrid)
    return () => statsObserver.disconnect()
  }, [])

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-full">
          <p className="section-label anim-card" data-delay="0">Who we are</p>
          <h2 className="about-big-title anim-card" data-delay="80">
            We are{' '}
            <span className="logo-addon">addon</span><span className="logo-shareware">SHAREWARE</span><span className="logo-dot">.</span>
          </h2>
          <div className="about-body">
            <p className="about-desc anim-card" data-delay="160">
              An India-based IT company specializing in high-quality software development, custom ERP solutions, web design, and digital transformation. We help businesses modernize and scale.
            </p>
            <p className="about-desc anim-card" data-delay="240">
              From initial wireframes and system architecture to deployment and support, we are with you at every step. Transparency, agility, and excellence — that&apos;s the Addon Shareware promise.
            </p>
          </div>
          <div className="about-stats" ref={statsRef}>
            {stats.map((s) => (
              <div className="stat anim-card" key={s.label}>
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
