'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID  = 'service_tkz36io'
const EMAILJS_TEMPLATE_ID = 'template_jl0xqbq'
const EMAILJS_PUBLIC_KEY  = 's-gjVzpKVUMzyph7s'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError]   = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(false)

    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name:  form.name,
        from_email: form.email,
        service:    form.service || 'Not specified',
        message:    form.message,
        reply_to:   form.email,
      },
      EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setLoading(false)
      setSuccess(true)
      setForm({ name: '', email: '', service: '', message: '' })
      setTimeout(() => setSuccess(false), 6000)
    })
    .catch(() => {
      setLoading(false)
      setError(true)
      setTimeout(() => setError(false), 6000)
    })
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="grid-bg-dark" />
      <div className="container">
        <div className="section-header light">
          <p className="section-label anim-card" data-delay="0">Get in touch</p>
          <h2 className="section-title light anim-card" data-delay="80">
            Let&apos;s build something<br /><strong>great together.</strong>
          </h2>
          <p className="section-sub light anim-card" data-delay="160">
            Have a project in mind? Drop us a message and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="contact-grid">
          {/* Info panel */}
          <div className="contact-info anim-card" data-delay="0">
            <div className="contact-item">
              <div className="contact-icon"><i className="fas fa-envelope" /></div>
              <div>
                <div className="contact-item-label">Email us</div>
                <a href="mailto:info@addonshareware.com" className="contact-item-val">info@addonshareware.com</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><i className="fas fa-phone" /></div>
              <div>
                <div className="contact-item-label">Call us</div>
                <a href="tel:+919311435804" className="contact-item-val">+91 9311435804</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><i className="fas fa-map-marker-alt" /></div>
              <div>
                <div className="contact-item-label">Offices</div>
                <span className="contact-item-val" style={{ fontSize: '12px', display: 'block', marginBottom: '8px', lineHeight: '1.4' }}>
                  <strong>Noida:</strong> C-88, Sector 64, Noida, UP - 201307
                </span>
                <span className="contact-item-val" style={{ fontSize: '12px', display: 'block', marginBottom: '8px', lineHeight: '1.4' }}>
                  <strong>Delhi:</strong> 1403-04, 13th Floor, RG Trade Tower, NSP, Pitampura - 110034
                </span>
                <span className="contact-item-val" style={{ fontSize: '12px', display: 'block', lineHeight: '1.4' }}>
                  <strong>Greater Noida:</strong> B-1210, NX One Tech Zone-4 West - 201009
                </span>
              </div>
            </div>
            <div className="contact-socials">
              {[
                ['fab fa-twitter', 'https://x.com'],
                ['fab fa-instagram', 'https://www.instagram.com'],
                ['fab fa-linkedin-in', 'https://www.linkedin.com/company/addon-shareware-pvt-ltd']
              ].map(([icon, href]) => (
                <a key={icon} href={href} className="social-btn" target="_blank" rel="noreferrer"><i className={icon} /></a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form className="contact-form anim-card" data-delay="150" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" name="name" placeholder="John Doe" value={form.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Your Email</label>
                <input type="email" name="email" placeholder="john@example.com" value={form.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-group">
              <label>Your Message</label>
              <textarea name="message" rows={5} placeholder="Tell us how we may help..." value={form.message} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn-dark btn-full" disabled={loading}>
              {loading ? <><i className="fas fa-spinner fa-spin" /> Sending...</> : <>Send Message <i className="fas fa-paper-plane" /></>}
            </button>
            {success && (
              <div className="form-success show">
                <i className="fas fa-check-circle" /> Thanks! We&apos;ll be in touch soon.
              </div>
            )}
            {error && (
              <div className="form-error show">
                <i className="fas fa-exclamation-circle" /> Something went wrong. Please try again or email us directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
