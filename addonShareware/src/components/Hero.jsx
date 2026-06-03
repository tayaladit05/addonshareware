export default function Hero() {
  const smoothTo = (e, id) => {
    e.preventDefault()
    const el = document.querySelector(id)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      <div className="hero-bg-dots" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      <div className="hero-inner">

        {/* ── Left: Agency Card ── */}
        <div className="hero-sidebar hero-anim-1">
          <div className="agency-card">
            <div className="agency-avatar">
              <img src="/logo.png" alt="addonSHAREWARE logo" className="agency-logo-img" />
            </div>
            <div className="agency-divider" />
            <div className="agency-meta">
              <span className="agency-tagline">Software &amp; Digital Agency</span>
              <span className="agency-location"><i className="fas fa-map-marker-alt" /> Noida &middot; Delhi NCR, India</span>
            </div>
            <div className="agency-stat-row">
              <div className="agency-stat"><span className="agency-stat-num">100+</span><span className="agency-stat-label">Projects</span></div>
              <div className="agency-stat"><span className="agency-stat-num">50+</span><span className="agency-stat-label">Clients</span></div>
              <div className="agency-stat"><span className="agency-stat-num">8+</span><span className="agency-stat-label">Years</span></div>
            </div>
            <div className="agency-divider" />
            <div className="agency-socials">
              <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="Twitter"><i className="fab fa-twitter" /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fab fa-instagram" /></a>
              <a href="https://www.linkedin.com/company/addon-shareware-pvt-ltd" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin" /></a>
            </div>
          </div>
        </div>

        {/* ── Right: Headline ── */}
        <div className="hero-content">
          <div className="available-badge hero-anim-2">
            <span className="dot" /> Available for new projects
          </div>
          <h1 className="hero-headline hero-anim-3">
            Hi! We&apos;re{' '}
            <span className="pill-light">
              <span className="logo-addon">addon</span><span className="logo-shareware">SHAREWARE</span><span className="logo-dot">.</span>
            </span><br />
            a <span className="pill-dark">Software Agency</span><br />
            building high performance<br />
            digital products &mdash; from<br />
            <strong>strategy to <span className="accent-word">interface.</span></strong>
          </h1>
        </div>

      </div>

      <a href="#services" className="scroll-indicator" onClick={(e) => smoothTo(e, '#services')}>
        <span className="scroll-label">scroll</span>
        <div className="scroll-track"><div className="scroll-thumb" /></div>
        <i className="fas fa-chevron-down scroll-chevron" />
      </a>
    </section>
  )
}
