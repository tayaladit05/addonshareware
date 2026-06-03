import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'
import WorksPage from './pages/Works'

function MainSite() {
  const location = useLocation()

  // Re-run intersection observer whenever the route changes back to home
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            const delay = el.dataset.delay || 0
            setTimeout(() => el.classList.add('visible'), parseInt(delay))
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    const targets = document.querySelectorAll('.anim-card')
    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [location.pathname])

  // Stats counter animation
  useEffect(() => {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.stat-num').forEach((num) => {
              const isPlus = num.textContent.includes('+')
              const val = parseInt(num.textContent)
              if (isNaN(val)) return
              let start = 0
              const step = Math.ceil(val / (1200 / 16))
              const timer = setInterval(() => {
                start += step
                if (start >= val) { start = val; clearInterval(timer) }
                num.textContent = start + (isPlus ? '+' : '')
              }, 16)
            })
            statsObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )
    const statsGrid = document.querySelector('.about-stats')
    if (statsGrid) statsObserver.observe(statsGrid)
    return () => statsObserver.disconnect()
  }, [location.pathname])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/works" element={<WorksPage />} />
      </Routes>
    </BrowserRouter>
  )
}
