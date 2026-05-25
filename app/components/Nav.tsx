'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { label: 'Manifesto', href: '#manifesto' },
    { label: 'Dharma', href: '#dharma' },
    { label: 'Gau Mata', href: '#gau-mata' },
    { label: 'Support', href: '#petition' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#070707]/95 backdrop-blur-md border-b border-white/[0.06]' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-3">
            <div className="relative h-9 w-9">
              <Image
                src="/images/hjp-flag-logo.png"
                alt="HJP"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <div className="text-xs font-bold tracking-[0.4em] text-[#f5f1ea]">HJP</div>
              <div className="text-[9px] tracking-[0.3em] text-[#d4621a] font-devanagari">एक धर्म • एक राष्ट्र</div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs uppercase tracking-[0.25em] text-[#d6d0c7] hover:text-[#d4621a] transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#petition"
              className="ml-4 border border-[#d4621a]/60 px-5 py-2.5 text-[11px] uppercase tracking-[0.25em] text-[#d4621a] hover:bg-[#d4621a]/10 transition-all duration-200"
            >
              Sign the Petition
            </a>
          </div>

          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className={`block h-[1px] w-6 bg-[#f5f1ea] transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-[1px] w-6 bg-[#f5f1ea] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-[1px] w-6 bg-[#f5f1ea] transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0a0a0a] border-t border-white/[0.06] px-6 py-6 space-y-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm uppercase tracking-[0.25em] text-[#d6d0c7] hover:text-[#d4621a] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#petition"
            onClick={() => setOpen(false)}
            className="block border border-[#d4621a]/60 px-5 py-3 text-xs uppercase tracking-[0.25em] text-[#d4621a] text-center"
          >
            Sign the Petition
          </a>
        </div>
      )}
    </nav>
  )
}
