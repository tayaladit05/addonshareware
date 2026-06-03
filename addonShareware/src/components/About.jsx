const stats = [
  { num: '100+', label: 'Projects Delivered' },
  { num: '50+', label: 'Happy Clients' },
  { num: '8+', label: 'Years Experience' },
  { num: '15', label: 'Team Members' },
]

export default function About() {
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
          <div className="about-stats">
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
