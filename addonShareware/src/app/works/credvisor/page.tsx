import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Credvisor Case Study — Addon Shareware',
  description: 'How we built a comprehensive credit score advisor app to help Indian consumers manage their credit reports and enhancement roadmap.',
  alternates: {
    canonical: '/works/credvisor',
  },
}

export default function CredvisorCaseStudy() {
  return (
    <>
      <Navbar />
      
      <main className="case-study-page">
        {/* Dynamic decorative grid background */}
        <div className="grid-bg-dark" />

        {/* ─── Hero Section ─── */}
        <section className="case-study-hero">
          <div className="container">
            {/* Back Button */}
            <Link href="/works" className="case-study-back-link">
              <span className="arrow-left">←</span> Back to Portfolio
            </Link>

            <div className="case-study-hero-grid">
              <div className="case-study-hero-main">
                <span className="case-study-tag">Mobile Application</span>
                <h1 className="case-study-title">Credvisor</h1>
                <p className="case-study-subtitle">
                  Empowering Indian consumers with intelligent credit monitoring, score alerts, and actionable score enhancement roadmaps.
                </p>
              </div>

              {/* Stat panel */}
              <div className="case-study-hero-badge-panel">
                <div className="badge-item">
                  <span className="badge-num">10k+</span>
                  <span className="badge-label">Active Users</span>
                </div>
                <div className="badge-item">
                  <span className="badge-num">4.5★</span>
                  <span className="badge-label">Play Store Rating</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Project Metadata Grid ─── */}
        <section className="case-study-meta-section">
          <div className="container">
            <div className="case-study-meta-grid">
              <div className="meta-col">
                <span className="meta-label">Client</span>
                <span className="meta-value">Credvisor</span>
              </div>
              <div className="meta-col">
                <span className="meta-label">Services</span>
                <span className="meta-value">UI/UX Design, Mobile App, Backend API</span>
              </div>
              <div className="meta-col">
                <span className="meta-label">Platforms</span>
                <span className="meta-value">Android (Java)</span>
              </div>
              <div className="meta-col">
                <span className="meta-label">Timeline</span>
                <span className="meta-value">4 Months (2024)</span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Interactive Gallery Carousel ─── */}
        <section className="case-study-gallery-section">
          <div className="container">
            <h2 className="section-title-sm">App Screens &amp; Interface Design</h2>
            <div className="case-study-gallery-grid">
              <div className="gallery-card">
                <div className="gallery-image-wrap">
                  <img src="/projects/credvisor-1.png" alt="Credvisor Welcome Screen" className="gallery-img" />
                </div>
                <span className="gallery-caption">Dashboard Score Analytics</span>
              </div>
              <div className="gallery-card">
                <div className="gallery-image-wrap">
                  <img src="/projects/credvisor-2.png" alt="Credvisor Advisory Screen" className="gallery-img" />
                </div>
                <span className="gallery-caption">Personalized Enhancement Plan</span>
              </div>
              <div className="gallery-card">
                <div className="gallery-image-wrap">
                  <img src="/projects/credvisor-3.png" alt="Credvisor Score Factors Screen" className="gallery-img" />
                </div>
                <span className="gallery-caption">Loan Eligibility Tracker</span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Main Content Layout ─── */}
        <section className="case-study-body-section">
          <div className="container case-study-body-grid">
            
            {/* Sidebar metadata & tags */}
            <aside className="case-study-sidebar">
              <div className="sidebar-card">
                <h3>Technologies Used</h3>
                <div className="tech-tags-list">
                  <span>Android SDK</span>
                  <span>Java Development</span>
                  <span>Firebase Suite</span>
                  <span>REST Integration</span>
                  <span>XML Layouts</span>
                  <span>Lottie Animations</span>
                </div>
              </div>

              <div className="sidebar-card">
                <h3>Live Product</h3>
                <p>Check out the live Android app in the Google Play Store.</p>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.addonshareware.Credvisor" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="sidebar-cta-btn"
                >
                  View on Play Store <span className="arrow-diag">↗</span>
                </a>
              </div>
            </aside>

            {/* Narrative articles */}
            <article className="case-study-article">
              
              {/* Challenge */}
              <div className="article-block">
                <h2>The Challenge</h2>
                <p>
                  For the average consumer in India, credit reports are dense, intimidating documents. While credit bureaus provide raw credit scores, users are rarely given explanations for score changes, nor are they provided with structured guidance on how to fix credit blemishes.
                </p>
                <p>
                  Credvisor commissioned us to design a mobile-first advisory client. The main challenge was converting abstract credit bureau score metrics into simple, step-by-step consumer milestones, ensuring the interface remained accessible to non-technical users while securing sensitive financial history.
                </p>
              </div>

              {/* Solution & Implementation */}
              <div className="article-block">
                <h2>The Solution</h2>
                <p>
                  We built a lightweight, native Android application in Java focused on accessibility and performance. The core application workflow consists of a three-stage credit path:
                </p>
                <ul className="article-list">
                  <li>
                    <strong>Bureau Sync Dashboard:</strong> Retrieves credit profiles using RESTful endpoints and plots history lines inside responsive canvas charts.
                  </li>
                  <li>
                    <strong>Score Analytics Roadmap:</strong> Evaluates active accounts, identifies factors causing score deductions (e.g. late payments or high utilization), and displays targeted credit booster cards.
                  </li>
                  <li>
                    <strong>Secured Data Engine:</strong> Leverages Firebase Realtime Database and Cloud Functions to deliver encrypted score notifications and eligibility alerts.
                  </li>
                </ul>
              </div>

              {/* Design Language */}
              <div className="article-block">
                <h2>Design Language &amp; UX</h2>
                <p>
                  Credvisor uses a premium dark aesthetic with deep sapphire blue shades (`#0d1a2e`) representing security and stability. Accent tones of vibrant green (for credit health) and bright cyan keep the visual hierarchy clear. 
                </p>
                <p>
                  Custom charts and smooth progress bar calculations translate credit utilization statistics into visually clear gauges. Subtle micro-animations guide the user through verification steps, reducing cognitive load and drop-offs.
                </p>
              </div>

              {/* Impact / Results */}
              <div className="article-block highlight">
                <h2>The Outcome</h2>
                <p>
                  Credvisor launched successfully on the Google Play Store. The streamlined verification flow decreased account registration drop-offs by 35%. The personalized recommendation card layout has helped active users achieve average score increases of 45 points within 90 days.
                </p>
              </div>

            </article>

          </div>
        </section>

        {/* ─── Back to Works Footer Banner ─── */}
        <section className="case-study-footer-cta">
          <div className="container">
            <h2>Ready to see more of our work?</h2>
            <p>Explore our other enterprise tools, mobile apps, and custom developments.</p>
            <div className="cta-buttons-row">
              <Link href="/works" className="btn-dark">
                View All Case Studies
              </Link>
              <Link href="/#contact" className="btn-accent">
                Work With Us
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
