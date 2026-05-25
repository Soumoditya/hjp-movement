import Link from 'next/link'

const articles = [
  {
    label: 'Manifesto',
    headline: 'What We Stand For',
    excerpt:
      'The complete statement of HJP\'s purpose — why this movement exists, and what it demands of those who belong to it.',
    href: '/manifesto',
  },
  {
    label: 'Dharma',
    headline: 'The 10 Pillars of Dharma',
    excerpt:
      'Not philosophy. Not religion. The practical principles that distinguish a Dharmic life from a drifting one.',
    href: '/dharma',
  },
  {
    label: 'Gau Mata',
    headline: 'Why She Is Mother',
    excerpt:
      'Gau Mata in Vedic tradition, in scripture, and in the present — what her protection demands from us today.',
    href: '/gau-mata',
  },
]

export default function HeritageSection() {
  return (
    <section className="py-20 lg:py-28 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-[10px] uppercase tracking-[0.5em] text-[#d4621a] mb-4">Reading</div>
        <h2 className="font-display text-4xl lg:text-5xl text-[#f5f1ea] mb-14">
          FROM THE ARCHIVE
        </h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group block relative bg-[#0e0e0e] border-l-2 border-[#d4621a]/40 hover:border-[#d4621a] pl-6 pr-6 py-8 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-[9px] uppercase tracking-[0.5em] text-[#d4621a] mb-4 font-medium">
                {article.label}
              </div>
              <h3 className="font-display text-2xl lg:text-3xl text-[#f5f1ea] leading-tight mb-4 group-hover:text-[#d4621a] transition-colors duration-300">
                {article.headline}
              </h3>
              <p className="text-sm text-[#6b6560] leading-relaxed mb-8">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-3 text-[#d4621a]">
                <span className="text-[10px] uppercase tracking-[0.4em]">Read</span>
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
