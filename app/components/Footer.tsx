import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#070707] py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 mb-12">
          <div>
            <div className="text-xs font-bold tracking-[0.4em] text-[#f5f1ea] mb-2">HJP</div>
            <div className="text-[10px] tracking-[0.3em] text-[#d4621a] font-devanagari mb-4">
              एक धर्म • एक राष्ट्र
            </div>
            <p className="text-xs leading-6 text-[#4a4540]">
              Hindu Janta Party — a Hindu civilizational movement. Not affiliated with any political party.
            </p>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-[#6b6560] mb-4">Movement</div>
            <div className="space-y-3 text-xs text-[#4a4540]">
              {[
                { label: 'About', href: '/about' },
                { label: 'Manifesto', href: '/manifesto' },
                { label: 'Dharma', href: '/dharma' },
                { label: 'Sanskrit', href: '/sanskrit' },
                { label: 'Gau Mata', href: '/gau-mata' },
              ].map((l) => (
                <div key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-[#d4621a] transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-[#6b6560] mb-4">Info</div>
            <div className="space-y-3 text-xs text-[#4a4540]">
              {[
                { label: 'FAQ', href: '/faq' },
                { label: 'Contact', href: '/contact' },
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Sign the Petition', href: '/#petition' },
              ].map((l) => (
                <div key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-[#d4621a] transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-[#6b6560] mb-4">Follow</div>
            <a
              href="https://www.instagram.com/hindujanta.party"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#d4621a] hover:text-[#e8721a] transition-colors"
            >
              @hindujanta.party
            </a>
            <div className="mt-4 font-devanagari text-sm text-[#4a4540]">
              || धर्मो रक्षति रक्षितः ||
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row justify-between gap-4">
          <div className="text-[10px] text-[#3a3530] uppercase tracking-widest">
            © 2025 Hindu Janta Party. All rights reserved.
          </div>
          <div className="font-devanagari text-xs text-[#3a3530]">
            एक धर्म • एक राष्ट्र
          </div>
        </div>
      </div>
    </footer>
  )
}
