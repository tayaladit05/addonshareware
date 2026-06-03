import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import PreFooterBanner from '@/components/PreFooterBanner'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Our Team — Addon Shareware',
  description: 'Meet the team behind Addon Shareware. A group of software architects, developers, and designers helping businesses modernize.',
  alternates: {
    canonical: '/team',
  },
}

interface TeamMember {
  name: string
  role: string
  bio: string
  initials: string
  gradient: string
}

const team: TeamMember[] = [
  {
    name: 'Shashvat Singh',
    role: 'Director & Founder',
    bio: 'Guiding the business strategy, digital transformation roadmap, and software product delivery.',
    initials: 'AT',
    gradient: 'linear-gradient(135deg,#009db0,#0ea5e9)',
  },
  {
    name: 'Karan Sharma',
    role: 'Technical Lead',
    bio: 'Architecting robust database structures, cloud infrastructure environments, and core backend endpoints.',
    initials: 'KS',
    gradient: 'linear-gradient(135deg,#4f46e5,#a855f7)',
  },
  {
    name: 'Nisha Patel',
    role: 'Lead UI/UX Architect',
    bio: 'Designing responsive interactive systems and user-centric wireframes aligned to modern aesthetics.',
    initials: 'NP',
    gradient: 'linear-gradient(135deg,#f43f5e,#ec4899)',
  },
  {
    name: 'Rahul Verma',
    role: 'Senior Mobile Engineer',
    bio: 'Deploying high performance native and hybrid apps to the Apple App Store and Google Play Store.',
    initials: 'RV',
    gradient: 'linear-gradient(135deg,#10b981,#059669)',
  },
]

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 'var(--nav-h)' }}>
        {/* Themed Header Banner */}
        <header className="works-header" style={{ padding: '60px 0 40px' }}>
          <div className="grid-bg-dark" />
          <div className="container works-header-inner">
            <div className="works-hero-text">
              <p className="section-label">Team Members</p>
              <h1 className="works-big-title">
                Meet the<br /><strong>Engineers</strong>
              </h1>
              <p className="section-sub light" style={{ margin: '0' }}>
                A multidisciplinary team focused on precision, transparency, and product excellence.
              </p>
            </div>
          </div>
        </header>

        {/* Team Grid */}
        <section className="works-grid-section" style={{ padding: '80px 0' }}>
          <div className="container">
            <div className="works-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
              {team.map((member) => (
                <div key={member.name} className="works-card visible">
                  <div className="works-card-cover" style={{ background: member.gradient, height: '160px' }}>
                    <div 
                      className="works-card-logo" 
                      style={{ 
                        background: 'rgba(255,255,255,0.12)', 
                        color: '#ffffff',
                        fontSize: '24px',
                        width: '64px',
                        height: '64px',
                        borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.15)'
                      }}
                    >
                      {member.initials}
                    </div>
                  </div>
                  <div className="works-card-body" style={{ padding: '20px 24px' }}>
                    <div className="works-card-meta-row" style={{ marginBottom: '8px' }}>
                      <span className="works-card-industry">{member.role}</span>
                    </div>
                    <h3 className="works-card-title" style={{ fontSize: '20px', marginBottom: '8px' }}>{member.name}</h3>
                    <p className="works-card-summary" style={{ fontSize: '13px', lineHeight: '1.6' }}>{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <PreFooterBanner />
      </div>
      <Footer />
    </>
  )
}
