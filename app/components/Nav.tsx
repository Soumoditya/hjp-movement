'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Manifesto', href: '/manifesto' },
  { label: 'Dharma', href: '/dharma' },
  { label: 'Gau Mata', href: '/gau-mata' },
  { label: 'Sanskrit', href: '/sanskrit' },
  { label: 'FAQ', href: '/faq' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#070707]/95 backdrop-blur-md border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
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
                <div className="text-[9px] tracking-[0.3em] text-[#d4621a] font-devanagari">
                  एक धर्म • एक राष्ट्र
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-[11px] uppercase tracking-[0.25em] text-[#d6d0c7] hover:text-[#d4621a] transition-colors duration-200"
                >
                  {l.label}
                </Link>
              ))}

              {/* Instagram icon */}
              <a
                href="https://www.instagram.com/hindujanta.party"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d6d0c7] hover:text-[#d4621a] transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              <Link
                href="/#petition"
                className="ml-2 border border-[#d4621a]/60 px-5 py-2.5 text-[11px] uppercase tracking-[0.25em] text-[#d4621a] hover:bg-[#d4621a]/10 transition-all duration-200 whitespace-nowrap"
              >
                Sign Petition
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              <span
                className={`block h-[1px] w-6 bg-[#f5f1ea] transition-all duration-300 ${
                  open ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-[1px] w-6 bg-[#f5f1ea] transition-all duration-300 ${
                  open ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-[1px] w-6 bg-[#f5f1ea] transition-all duration-300 ${
                  open ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-40 bg-[#070707] flex flex-col pt-20">
          <div className="flex-1 overflow-y-auto px-6 py-8 space-y-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-4 border-b border-white/[0.06] font-display text-3xl text-[#f5f1ea] hover:text-[#d4621a] transition-colors duration-200"
              >
                {l.label}
              </Link>
            ))}

            <div className="pt-8 space-y-4">
              <Link
                href="/#petition"
                onClick={() => setOpen(false)}
                className="block bg-[#d4621a] px-6 py-4 text-xs uppercase tracking-[0.3em] text-[#070707] font-bold text-center hover:bg-[#e8721a] transition-all duration-300"
              >
                Sign the Petition
              </Link>

              <a
                href="https://www.instagram.com/hindujanta.party"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-3 border border-white/10 px-6 py-4 text-xs uppercase tracking-[0.3em] text-[#d6d0c7] hover:border-[#d4621a]/40 transition-all duration-300"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                @hindujanta.party
              </a>
            </div>

            <div className="pt-8 font-devanagari text-sm text-[#4a4540] text-center">
              || धर्मो रक्षति रक्षितः ||
            </div>
          </div>
        </div>
      )}
    </>
  )
}
