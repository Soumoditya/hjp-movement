'use client'

import PageLayout from '../components/PageLayout'
import { useState } from 'react'

const subjectOptions = [
  'General inquiry',
  'Press',
  'Partnership',
  'Report an issue',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General inquiry',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In production, wire this to a formspree endpoint or API route
    setSubmitted(true)
  }

  return (
    <PageLayout
      label="Reach Us"
      title="CONTACT"
      subtitle="We read everything. We don't always respond quickly — but we do respond."
    >
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-16 lg:gap-24 items-start">

            {/* Left: Form */}
            <div>
              {submitted ? (
                <div className="py-16">
                  <div className="saffron-line mb-8" />
                  <div className="font-display text-4xl lg:text-5xl text-[#f5f1ea] mb-6 leading-tight">
                    YOUR MESSAGE<br />
                    <span className="text-[#d4621a]">HAS REACHED US.</span>
                  </div>
                  <p className="text-base text-[#a09890] leading-8 mb-6">
                    Jai Dharm.
                  </p>
                  <p className="text-sm text-[#6b6560] leading-7">
                    We typically respond within 3–7 days. If your inquiry is urgent, you can
                    also reach us on Instagram{' '}
                    <a
                      href="https://www.instagram.com/hindujanta.party"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#d4621a] hover:underline"
                    >
                      @hindujanta.party
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.4em] text-[#6b6560] mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="input-dark"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.4em] text-[#6b6560] mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="input-dark"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.4em] text-[#6b6560] mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="input-dark appearance-none cursor-pointer"
                      style={{ backgroundImage: 'none' }}
                    >
                      {subjectOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#0e0e0e]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.4em] text-[#6b6560] mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      rows={7}
                      className="input-dark resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-[#d4621a] px-10 py-4 text-xs uppercase tracking-[0.3em] text-[#070707] font-bold hover:bg-[#e8721a] transition-all duration-300 w-full sm:w-auto"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Right: Info */}
            <div className="space-y-10">
              {/* Instagram */}
              <div className="border-t border-white/[0.06] pt-8">
                <div className="text-[10px] uppercase tracking-[0.5em] text-[#d4621a] mb-3">Instagram</div>
                <a
                  href="https://www.instagram.com/hindujanta.party"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-[#f5f1ea] hover:text-[#d4621a] transition-colors duration-200"
                >
                  @hindujanta.party
                </a>
                <p className="text-sm text-[#6b6560] leading-7 mt-2">
                  For faster communication, reach us via DM on Instagram. We check it daily.
                </p>
              </div>

              {/* Response time */}
              <div className="border-t border-white/[0.06] pt-8">
                <div className="text-[10px] uppercase tracking-[0.5em] text-[#d4621a] mb-3">Response Time</div>
                <p className="text-base text-[#f5f1ea] mb-2">3–7 days</p>
                <p className="text-sm text-[#6b6560] leading-7">
                  We are a volunteer-driven movement. We do not have a dedicated inbox team.
                  Every message is read by a human being who cares about the same things you do.
                  We will respond — with attention, not a template.
                </p>
              </div>

              {/* Shloka */}
              <div className="border-t border-white/[0.06] pt-8">
                <div className="font-devanagari text-2xl text-[#d4621a] mb-2">
                  || सर्वे भवन्तु सुखिनः ||
                </div>
                <p className="text-xs text-[#6b6560] tracking-widest uppercase">
                  May all beings be happy.
                </p>
              </div>

              {/* Statement */}
              <div className="border-t border-white/[0.06] pt-8">
                <p className="text-sm text-[#a09890] leading-7 italic">
                  &ldquo;If you&apos;re reaching out to support the movement — we see you.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
