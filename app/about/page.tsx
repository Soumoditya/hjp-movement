import PageLayout from '../components/PageLayout'
import Link from 'next/link'

const whatWeAreNot = [
  'Not a political party.',
  'Not affiliated with any government or political organization.',
  'Not an aggressive or extremist movement.',
  'Not a religious conversion movement.',
  'Not funded by corporate or foreign interests.',
  'Not a social media page dressed as a movement.',
]

const whatWeDo = [
  {
    title: 'Document & Preserve',
    desc: 'Hindu heritage and temple history — from ancient Shaiva and Vaishnava traditions to living temple cultures that risk being forgotten within a generation.',
  },
  {
    title: 'Promote Sanskrit',
    desc: 'As a living sacred language — not a relic, not a ritual decoration, but the spine of Hindu thought and the medium through which Sanatan wisdom was transmitted.',
  },
  {
    title: 'Support Gau Seva',
    desc: 'And push for full legal protection of Gau Mata — recognition as India\'s National Animal, state-funded Gau Shalas, and criminal accountability for slaughter.',
  },
  {
    title: 'Build Dharmic Awareness',
    desc: 'Among young Hindus — not through indoctrination, but through honest, grounded engagement with what Dharma actually asks of us in daily life.',
  },
]

export default function AboutPage() {
  return (
    <PageLayout
      label="Who We Are"
      title={'ABOUT\nHJP'}
      subtitle="A movement of conviction. Not a party, not an NGO, not a campaign."
    >
      {/* Section 1: What HJP Is */}
      <section className="py-20 lg:py-32 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left: Display quote */}
            <div>
              <div className="font-display text-5xl lg:text-7xl text-[#d4621a] leading-[0.9] mb-8">
                A REFUSAL<br />TO FORGET.
              </div>
              <div className="saffron-line" />
            </div>

            {/* Right: Paragraphs */}
            <div className="space-y-6 text-[#a09890] text-base leading-8">
              <p>
                HJP was born from a simple observation: Hindu civilization — one of the oldest and most
                profound on earth — is quietly losing its thread. Not through violence alone, but through
                indifference. Through a generation of Hindus who grew up without Sanskrit, without temple
                seva, without knowing why Gau Mata is sacred or what the Swastika actually means.
              </p>
              <p>
                That loss is not dramatic. It doesn't announce itself. It happens in small surrenders —
                when a family stops doing puja because no one remembers the mantras, when a temple in a
                small town falls into disrepair because no one visits, when a young Hindu feels embarrassed
                to explain their tradition to someone who asks.
              </p>
              <p>
                HJP is not a political party. It has no electoral ambitions. It does not contest elections
                or endorse candidates. It is a civilizational movement — built on the belief that Dharma
                survives only through people who actively practice, protect, and transmit it.
              </p>
              <p>
                We are not building an institution. We are building a posture — the posture of a Hindu who
                knows what they come from, who does not apologize for it, and who takes responsibility for
                carrying it forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What We Are Not */}
      <section className="py-20 lg:py-28 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-[10px] uppercase tracking-[0.5em] text-[#d4621a] mb-4">Clarity</div>
          <h2 className="font-display text-4xl lg:text-5xl text-[#f5f1ea] mb-12">WHAT WE ARE NOT</h2>

          <div className="max-w-2xl space-y-5">
            {whatWeAreNot.map((item, i) => (
              <div key={i} className="flex items-start gap-5">
                <span className="text-[#d4621a] text-lg mt-0.5 flex-shrink-0">—</span>
                <p className="text-[#a09890] text-base leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: What We Do */}
      <section className="py-20 lg:py-28 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-[10px] uppercase tracking-[0.5em] text-[#d4621a] mb-4">Our Work</div>
          <h2 className="font-display text-4xl lg:text-5xl text-[#f5f1ea] mb-12">WHAT WE DO</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatWeDo.map((item, i) => (
              <div key={i} className="border-t border-[#d4621a]/30 pt-6">
                <div className="font-display text-lg text-[#f5f1ea] mb-4 leading-tight">{item.title}</div>
                <p className="text-sm text-[#6b6560] leading-7">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: CTA */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-[10px] uppercase tracking-[0.5em] text-[#d4621a] mb-4">Join</div>
          <h2 className="font-display text-4xl lg:text-5xl text-[#f5f1ea] mb-8">BE PART OF IT</h2>
          <p className="text-base text-[#a09890] max-w-xl leading-8 mb-12">
            The movement doesn't live on a website. It lives in the choices you make — in the temple you
            visit, the mantra you learn, the Gau Mata you protect, the tradition you refuse to abandon.
          </p>
          <div className="flex flex-wrap gap-5">
            <a
              href="https://www.instagram.com/hindujanta.party"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#d4621a]/60 px-8 py-4 text-xs uppercase tracking-[0.3em] text-[#d4621a] hover:bg-[#d4621a]/10 transition-all duration-300"
            >
              Follow on Instagram
            </a>
            <Link
              href="/#petition"
              className="bg-[#d4621a] px-8 py-4 text-xs uppercase tracking-[0.3em] text-[#070707] font-bold hover:bg-[#e8721a] transition-all duration-300"
            >
              Sign the Petition
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
