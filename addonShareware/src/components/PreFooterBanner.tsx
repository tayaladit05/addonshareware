import Link from 'next/link'

export default function PreFooterBanner() {
  return (
    <section className="pre-footer-banner">
      <div className="container banner-inner">
        <div className="banner-left">
          <h2 className="banner-title">Discover<br />Addon Shareware.</h2>
          <Link href="/contact" className="banner-btn">
            LET&apos;S GO <span className="arrow-diag">↗</span>
          </Link>
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
  )
}
