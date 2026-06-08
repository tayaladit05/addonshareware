'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Project {
  id: string
  num: string
  title: string
  tags: string
  year: string
  preview: string
  link: string
}

const projects: Project[] = [
  {
    id: 'eduapps',
    num: '01',
    title: 'eduapps ERP',
    tags: 'School Management · ERP',
    year: '2024',
    preview: '/projects/eduapps-preview.png',
    link: 'https://addonshareware.com/product.html',
  },
  {
    id: 'reckon',
    num: '02',
    title: 'Reckon Travel',
    tags: 'Travel Invoicing · SaaS',
    year: '2023',
    preview: '/projects/reckon-preview.png',
    link: 'https://addonshareware.com/product.html',
  },
  {
    id: 'credvisor',
    num: '03',
    title: 'Credvisor App',
    tags: 'Credit Advisory · Fintech',
    year: '2024',
    preview: '/projects/credvisor-1.png',
    link: 'https://play.google.com/store/apps/details?id=com.addonshareware.Credvisor',
  },
  {
    id: 'wheelboard',
    num: '04',
    title: 'Wheelboard App',
    tags: 'Mobility Community · Mobile App',
    year: '2024',
    preview: '/projects/wheelboard-1.png',
    link: 'https://play.google.com/store/apps/details?id=com.wheelboard.app',
  },
  {
    id: 'pharmaerp',
    num: '05',
    title: 'Addon Pharma ERP',
    tags: 'Stock & Billing · Enterprise',
    year: '2025',
    preview: '/projects/pharmaerp-preview.png',
    link: 'https://addonshareware.com/product.html',
  },
]

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePos({
      x: e.clientX,
      y: e.clientY,
    })
  }

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        
        {/* Header */}
        <div className="projects-section-header">
          <p className="projects-section-label"> PORTFOLIO / LATEST WORK</p>
          <h2 className="projects-main-title">
            What we&apos;ve <span className="title-accent-italic">built.</span>
          </h2>
        </div>

        <div className="projects-hover-hint" aria-label="Hover to preview projects">
          <span className="projects-hover-hint-dot" aria-hidden="true" />
          <span>Hover a project to preview it</span>
        </div>

        {/* Stacked Row List */}
        <div
          className="projects-list-container"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <div className="projects-divider-line" />
          
          {projects.map((p) => (
            <a
              key={p.id}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-list-row"
              onMouseEnter={(e) => {
                setHoveredProject(p)
                setMousePos({
                  x: e.clientX,
                  y: e.clientY,
                })
              }}
            >
              <div className="project-row-left">
                <span className="project-row-num">{p.num}</span>
                <h3 className="project-row-title">{p.title}</h3>
              </div>
              
              <div className="project-row-right">
                <span className="project-row-tags">{p.tags}</span>
                <span className="project-row-year">{p.year}</span>
                <span className="project-row-arrow">↗</span>
              </div>
            </a>
          ))}

          {/* Floating Hover Reveal Preview */}
          <div
            className={`project-floating-preview ${hoveredProject ? 'active' : ''}`}
            style={{
              left: `${mousePos.x}px`,
              top: `${mousePos.y}px`,
            }}
          >
            {projects.map((p) => (
              <Image
                key={p.id}
                src={p.preview}
                alt={p.title}
                width={320}
                height={200}
                className={`project-preview-img ${hoveredProject?.id === p.id ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="projects-cta-wrapper">
          <Link href="/works" className="btn-dark">
            View all work &amp; case studies <span className="arrow-diag">↗</span>
          </Link>
        </div>

      </div>
    </section>
  )
}
