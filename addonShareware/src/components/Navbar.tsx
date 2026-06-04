'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.setAttribute('data-theme', savedTheme)
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light')
      document.documentElement.setAttribute('data-theme', 'light')
    } else {
      setTheme('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    const doc = document as any

    if (!doc.startViewTransition) {
      setTheme(nextTheme)
      localStorage.setItem('theme', nextTheme)
      document.documentElement.setAttribute('data-theme', nextTheme)
      return
    }

    const x = event.clientX
    const y = event.clientY
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )

    const transition = doc.startViewTransition(() => {
      setTheme(nextTheme)
      localStorage.setItem('theme', nextTheme)
      document.documentElement.setAttribute('data-theme', nextTheme)
    })

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`
          ]
        },
        {
          duration: 650,
          easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
          pseudoElement: '::view-transition-new(root)'
        }
      )
    })
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const navLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Case Studies', href: '/works' },
    { label: 'About', href: '/about' },
    { label: 'Team', href: '/team' },
    { label: 'Blog', href: '/blog' },
  ]

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <Link href="/" className="nav-logo" style={{ textDecoration: 'none' }}>
          <Image 
            src="/logo.png" 
            alt="Addon Shareware Logo" 
            width={180} 
            height={70} 
            className="nav-logo-img" 
            priority
          />
        </Link>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className={pathname === link.href ? 'active' : ''}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <span className="nav-email">info@addonshareware.com</span>
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme">
            {theme === 'dark' ? <i className="fas fa-sun" /> : <i className="fas fa-moon" />}
          </button>
          <Link href="/contact" className="btn-dark">
            Get in touch
          </Link>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {navLinks.map((link) => (
          <Link 
            key={link.href} 
            href={link.href} 
            className={pathname === link.href ? 'active' : ''}
            onClick={closeMenu}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  )
}
