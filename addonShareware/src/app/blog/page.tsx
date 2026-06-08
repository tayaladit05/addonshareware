import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import PreFooterBanner from '@/components/PreFooterBanner'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Blog & Insights — Addon Shareware',
  description: 'Read the latest technology insights, ERP trends, and mobile engineering guides from Addon Shareware.',
  alternates: {
    canonical: '/blog',
  },
}

interface BlogPost {
  id: string
  title: string
  category: string
  date: string
  summary: string
  gradient: string
}

const posts: BlogPost[] = [
  {
    id: 'erp-modernization',
    title: 'Modernizing ERP Software for Schools',
    category: 'Enterprise Software',
    date: 'June 03, 2026',
    summary: 'Discover how cloud-based ERP architectures reduce administrative overhead, improve student safety via smart cards, and automate real-time billing.',
    gradient: 'linear-gradient(135deg,#3b82f6,#1d4ed8)',
  },
  {
    id: 'kotlin-performance',
    title: 'Optimizing Mobile Performance with Kotlin Coroutines',
    category: 'Mobile Engineering',
    date: 'May 18, 2026',
    summary: 'A deep dive into thread safety, state flow management, and resource allocation strategies in Android application cycles.',
    gradient: 'linear-gradient(135deg,#a855f7,#7c3aed)',
  },
  {
    id: 'premium-design-systems',
    title: 'Why Premium Design Systems Drive User Conversion',
    category: 'UI/UX Design',
    date: 'April 22, 2026',
    summary: 'How visual excellence, dynamic micro-interactions, and glassmorphism styling build brand trust and improve user session durations.',
    gradient: 'linear-gradient(135deg,#f43f5e,#e11d48)',
  },
]

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 'var(--nav-h)' }}>
        {/* Themed Header Banner */}
        <header className="works-header" style={{ padding: '60px 0 40px' }}>
          <div className="grid-bg-dark" />
          <div className="container works-header-inner">
            <div className="works-hero-text">
              <p className="section-label hero-anim-1">Our Journal</p>
              <h1 className="works-big-title hero-anim-2">
                Blog &amp;<br /><strong>Insights</strong>
              </h1>
              <p className="section-sub light hero-anim-3" style={{ margin: '0' }}>
                Technical articles, design breakdowns, and insights on scale and modern engineering.
              </p>
            </div>
          </div>
        </header>

        {/* Blog Post Grid */}
        <section className="works-grid-section" style={{ padding: '80px 0' }}>
          <div className="container">
            <div className="works-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
              {posts.map((post, index) => (
                <div key={post.id} className="works-card anim-card" data-delay={`${index * 120}`}>
                  <div 
                    className="works-card-cover" 
                    style={{ 
                      background: post.gradient, 
                      height: '180px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative'
                    }}
                  >
                    <div 
                      style={{ 
                        color: 'rgba(255,255,255,0.7)', 
                        fontSize: '11px', 
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        border: '1px solid rgba(255,255,255,0.2)',
                        padding: '6px 14px',
                        borderRadius: '50px',
                        background: 'rgba(255,255,255,0.05)'
                      }}
                    >
                      {post.category}
                    </div>
                  </div>
                  <div className="works-card-body" style={{ padding: '24px 28px 28px' }}>
                    <div className="works-card-meta-row" style={{ marginBottom: '12px' }}>
                      <span className="works-card-industry">{post.date}</span>
                    </div>
                    <h3 className="works-card-title" style={{ fontSize: '22px', lineHeight: '1.25', marginBottom: '12px' }}>{post.title}</h3>
                    <p className="works-card-summary" style={{ fontSize: '14px', lineHeight: '1.7' }}>{post.summary}</p>
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
