'use client'

import { useEffect, useRef } from 'react'

export default function GlobalMouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let hasMoved = false

    const handleMouseMove = (e: MouseEvent) => {
      const glow = glowRef.current
      if (!glow) return
      
      // Update coordinates
      glow.style.setProperty('--mouse-x', `${e.clientX}px`)
      glow.style.setProperty('--mouse-y', `${e.clientY}px`)

      // Set active on first move
      if (!hasMoved) {
        hasMoved = true
        glow.classList.add('active')
      }
    }

    const handleMouseEnter = () => {
      if (glowRef.current && hasMoved) {
        glowRef.current.classList.add('active')
      }
    }

    const handleMouseLeave = () => {
      if (glowRef.current) {
        glowRef.current.classList.remove('active')
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return <div className="global-mouse-glow" ref={glowRef} />
}
