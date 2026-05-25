import Nav from './Nav'
import ShlokMarquee from './ShlokMarquee'
import Footer from './Footer'

interface PageLayoutProps {
  label: string
  title: string
  subtitle?: string
  children: React.ReactNode
}

export default function PageLayout({ label, title, subtitle, children }: PageLayoutProps) {
  const titleLines = title.split('\n')

  return (
    <main className="bg-[#070707] text-[#f5f1ea] overflow-x-hidden">
      <Nav />

      {/* Page Header */}
      <div className="w-full pt-32 pb-16 lg:pt-40 lg:pb-20 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-[10px] uppercase tracking-[0.5em] text-[#d4621a] mb-6 font-medium">
            {label}
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl leading-[0.95] text-[#f5f1ea] mb-6">
            {titleLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
          <div className="saffron-line mb-6" />
          {subtitle && (
            <p className="text-base lg:text-lg text-[#a09890] max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <ShlokMarquee />

      <div className="bg-[#070707]">{children}</div>

      <Footer />
    </main>
  )
}
