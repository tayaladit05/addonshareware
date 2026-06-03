import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

export default function Footer() {
  const [visible, setVisible] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.15 }
    )

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const smoothTo = (e, id) => {
    e.preventDefault()
    const el = document.querySelector(id)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    alert('Thank you for subscribing!')
  }

  return (
    <div className="footer-wrapper">
      
      {/* ─── 1. Pre-Footer Banner (Bright Yellow CTA) ─── */}
      <section className="pre-footer-banner">
        <div className="container banner-inner">
          <div className="banner-left">
            <h2 className="banner-title">Discover<br />Addon Shareware.</h2>
            <a href="#contact" className="banner-btn" onClick={(e) => smoothTo(e, '#contact')}>
              LET&apos;S GO <span className="arrow-diag">↗</span>
            </a>
          </div>
          
          <div className="banner-right">
            <p className="banner-desc">
              Find out how Addon Shareware&apos;s people-centered designs and robust custom systems can make your business technology more empowering and growth-focused.
            </p>
            
            {/* Rotating Circular Text Badge */}
            <div className="rotating-badge-container">
              <svg className="rotating-text-svg" viewBox="0 0 100 100">
                <defs>
                  <path id="textCirclePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                </defs>
                <text fill="currentColor" fontSize="8" fontWeight="600" letterSpacing="1.2">
                  <textPath href="#textCirclePath" startOffset="0%">
                    • NEW ERA OF SOFTWARE • WEB &amp; APP DEV • ENTERPRISE SOLUTIONS •
                  </textPath>
                </text>
              </svg>
              <div className="badge-arrow">↑</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. Main Footer (Black Section) ─── */}
      <footer className="footer-main-dark">
        <div className="container footer-grid-container">
          
          {/* Left Column: Navigation */}
          <div className="footer-nav-col">
            <h4 className="footer-col-label">Navigation</h4>
            <ul className="footer-link-list">
              <li><a href="#home" onClick={(e) => smoothTo(e, '#home')}>Home</a></li>
              <li><a href="#services" onClick={(e) => smoothTo(e, '#services')}>Services</a></li>
              <li><a href="#projects" onClick={(e) => smoothTo(e, '#projects')}>Projects</a></li>
              <li><a href="#about" onClick={(e) => smoothTo(e, '#about')}>About Us</a></li>
              <li><a href="#contact" onClick={(e) => smoothTo(e, '#contact')}>Contact</a></li>
            </ul>
          </div>
          
          {/* Center Column: Subscription */}
          <div className="footer-subscribe-col">
            <h3 className="subscribe-title">Join our mailing list for the latest updates.</h3>
            <form className="subscribe-form" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Enter your email address..." 
                className="subscribe-input" 
                required 
              />
              <button type="submit" className="subscribe-btn">
                SUBSCRIBE <span className="arrow-diag">↗</span>
              </button>
            </form>
          </div>

          {/* Right Column: Products */}
          <div className="footer-products-col">
            <h4 className="footer-col-label">Products</h4>
            <ul className="footer-link-list">
              <li><a href="https://addonshareware.com/product.html" target="_blank" rel="noreferrer">eduapps ERP</a></li>
              <li><a href="https://addonshareware.com/product.html" target="_blank" rel="noreferrer">Reckon Travel</a></li>
              <li><a href="https://play.google.com/store/apps/details?id=com.addonshareware.Credvisor" target="_blank" rel="noreferrer">Credvisor App</a></li>
              <li><a href="https://play.google.com/store/apps/details?id=com.wheelboard.app" target="_blank" rel="noreferrer">Wheelboard App</a></li>
              <li><a href="https://addonshareware.com/product.html" target="_blank" rel="noreferrer">Pharma ERP</a></li>
            </ul>
          </div>
        </div>

        {/* ─── 3. Giant Branding Overlay Text ─── */}
        <div className="giant-branding-container" ref={containerRef}>
          <div className={`giant-brand-text ${visible ? 'visible' : ''}`}>
            {'addonshareware'.split('').map((char, index) => (
              <span key={index} className="char-wrapper">
                <span className="char-inner" style={{ transitionDelay: `${index * 0.035}s` }}>
                  {char}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* ─── 4. Copyright & Social Bottom Bar ─── */}
        <div className="container footer-bottom-inner">
          <div className="footer-legal-links">
            <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <a href="#terms" onClick={(e) => e.preventDefault()}>Terms of Use</a>
            <a href="#refund" onClick={(e) => e.preventDefault()}>Refund Policy</a>
          </div>
          
          <p className="footer-copyright-text">
            &copy; 2026 Addon Shareware Private Limited. All rights reserved.
          </p>

          <div className="footer-social-icons">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fab fa-instagram" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fab fa-github" /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><i className="fab fa-youtube" /></a>
            <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="Twitter"><i className="fab fa-twitter" /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}
