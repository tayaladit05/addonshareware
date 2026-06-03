import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isWorks = location.pathname === '/works'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const smoothTo = (e, id) => {
    e.preventDefault()
    closeMenu()
    if (isWorks) {
      // Navigate home then scroll
      window.location.href = '/' + id
      return
    }
    const el = document.querySelector(id)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }

  const navLinks = ['#services', '#projects', '#about', '#contact']

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
          <img src="/logo.png" alt="Addon Shareware Logo" className="nav-logo-img" />
        </Link>

        <ul className="nav-links">
          {navLinks.map((href) => (
            <li key={href}>
              <a href={href} onClick={(e) => smoothTo(e, href)}>
                {href.replace('#', '').charAt(0).toUpperCase() + href.replace('#', '').slice(1)}
              </a>
            </li>
          ))}
          <li>
            <Link to="/works" className={isWorks ? 'active' : ''}>Works</Link>
          </li>
        </ul>

        <div className="nav-right">
          <span className="nav-email">info@addonshareware.com</span>
          <a href="#contact" className="btn-dark" onClick={(e) => smoothTo(e, '#contact')}>
            Get in touch
          </a>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {navLinks.map((href) => (
          <a key={href} href={href} onClick={(e) => smoothTo(e, href)}>
            {href.replace('#', '').charAt(0).toUpperCase() + href.replace('#', '').slice(1)}
          </a>
        ))}
        <Link to="/works" onClick={closeMenu}>Works</Link>
      </div>
    </>
  )
}
