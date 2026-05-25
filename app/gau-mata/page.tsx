import PageLayout from '../components/PageLayout'
import Image from 'next/image'
import Link from 'next/link'

const scriptures = [
  {
    devanagari: 'अघ्न्या यजमानस्य पशून्पाहि',
    transliteration: '"Aghnyā yajamānasya paśūnpāhi"',
    source: 'Rigveda',
    translation:
      '"The inviolable one — protect the cattle of the worshipper." The Rigveda names the cow Aghnyā — she who must not be harmed. Not a recommendation. A principle woven into the foundational scripture of Hindu civilization.',
  },
  {
    devanagari: 'गावो विश्वस्य मातरः',
    transliteration: '"Gāvo viśwasya māṭaraḥ"',
    source: 'Mahabharata',
    translation:
      '"Cows are the mothers of the world." The Mahabharata states this plainly, without qualification. Not mothers of Hindus alone — mothers of the world. The cow\'s status is not sectarian. It is civilizational.',
  },
  {
    devanagari: 'धेनुः सदनं रयीणाम्',
    transliteration: '"Dhenuḥ sadanam rayīṇām"',
    source: 'Atharva Veda',
    translation:
      '"The cow is the seat of all abundance." The Atharva Veda names the cow as the sustainer — the source from which nourishment, wealth, and sacred material flow into human life. To protect the cow is to protect the conditions of abundance itself.',
  },
]

const demands = [
  {
    number: '01',
    demand: 'Recognition as National Animal',
    detail:
      'India\'s current National Animal is the Bengal Tiger. HJP demands that Gau Mata be recognized as India\'s National Animal — a designation that reflects not just ecological concern, but the civilizational and cultural reality of this land.',
  },
  {
    number: '02',
    demand: 'Complete Legal Protection Across All States',
    detail:
      'Cow slaughter laws vary wildly across Indian states. HJP demands uniform, complete legal protection for Gau Mata across every state — with no exceptions, no loopholes, and no state-level discretion to permit what Dharma forbids.',
  },
  {
    number: '03',
    demand: 'State-Funded Gau Shalas in Every District',
    detail:
      'Gau Seva must not be left to private charity alone. The state must fund and maintain Gau Shalas in every district of India — so that aged cows, rescued cows, and those without keepers have shelter, care, and dignity.',
  },
  {
    number: '04',
    demand: 'Criminal Penalties Proportionate to the Offense',
    detail:
      'Current penalties for illegal slaughter are, in most cases, a joke. HJP demands criminal penalties that match the gravity of the offense — deterrent, not token. The protection of Gau Mata must have teeth.',
  },
]

export default function GauMataPage() {
  return (
    <PageLayout
      label="Gau Mata"
      title={'SHE IS\nMOTHER'}
      subtitle="गावो विश्वस्य मातरः — Cows are the mothers of the world."
    >
      {/* Hero image section */}
      <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden border-b border-white/[0.06]">
        <Image
          src="/images/gau-mata.png"
          alt="Gau Mata"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#070707]/70" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 pb-12 lg:pb-16">
            <p className="font-display text-3xl lg:text-5xl text-[#f5f1ea] max-w-2xl leading-tight">
              Gau Mata is not symbolic for us.{' '}
              <span className="text-[#d4621a]">She is mother.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Opening */}
      <section className="py-20 lg:py-28 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-[10px] uppercase tracking-[0.5em] text-[#d4621a] mb-4">The Position</div>
              <h2 className="font-display text-4xl lg:text-5xl text-[#f5f1ea] mb-6 leading-tight">
                NOT SENTIMENT.<br />DHARMIC OBLIGATION.
              </h2>
              <div className="saffron-line" />
            </div>
            <div className="space-y-5 text-[#a09890] text-base leading-8">
              <p>
                In every generation of Hindu civilization, Gau Mata has been honored. Not as a quaint
                custom. Not as a superstition. But as the recognition of something real — the cow as the
                sustainer of life, the source of nutrition, of fuel, of agricultural wealth, of sacred
                material for ritual. The relationship between Hindu civilization and the cow is not
                incidental. It is structural.
              </p>
              <p>
                The Vedas named her Aghnyā — the inviolable one. That name is not a suggestion. It is a
                designation. A declaration that this creature holds a status in the order of things that
                places her beyond the reach of human appetite.
              </p>
              <p>
                HJP does not speak of Gau Mata protection as a political issue. We speak of it as a Dharmic
                one. A civilization that permits the slaughter of its sacred mother has permitted something
                that cannot be undone easily — not just in law, but in its own self-understanding. We are
                asking for what Dharma requires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture section */}
      <section className="py-20 lg:py-28 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-[10px] uppercase tracking-[0.5em] text-[#d4621a] mb-4">Shastra</div>
          <h2 className="font-display text-4xl lg:text-5xl text-[#f5f1ea] mb-14">IN SCRIPTURE</h2>

          <div className="space-y-12">
            {scriptures.map((s, i) => (
              <div
                key={i}
                className="grid lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16 items-start border-t border-white/[0.06] pt-10"
              >
                <div>
                  <div className="font-devanagari text-2xl lg:text-3xl text-[#f5f1ea] leading-snug mb-3">
                    {s.devanagari}
                  </div>
                  <div className="text-sm text-[#d4621a] italic mb-2">{s.transliteration}</div>
                  <div className="text-[10px] uppercase tracking-[0.4em] text-[#6b6560]">
                    — {s.source}
                  </div>
                </div>
                <p className="text-base text-[#a09890] leading-8">{s.translation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Demand */}
      <section className="py-20 lg:py-28 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-[10px] uppercase tracking-[0.5em] text-[#d4621a] mb-4">Demands</div>
          <h2 className="font-display text-4xl lg:text-5xl text-[#f5f1ea] mb-14">WHAT WE DEMAND</h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {demands.map((d, i) => (
              <div
                key={i}
                className="bg-[#0e0e0e] border-l-2 border-[#d4621a]/40 pl-8 pr-6 py-8"
              >
                <div className="font-display text-4xl text-[#d4621a]/20 mb-4">{d.number}</div>
                <div className="font-display text-xl text-[#f5f1ea] mb-4 leading-tight">
                  {d.demand}
                </div>
                <p className="text-sm text-[#6b6560] leading-7">{d.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Petition CTA */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <div className="text-[10px] uppercase tracking-[0.5em] text-[#d4621a] mb-4">Act</div>
            <h2 className="font-display text-4xl lg:text-5xl text-[#f5f1ea] mb-8 leading-tight">
              SIGN THE PETITION
            </h2>
            <p className="text-base text-[#a09890] leading-8 mb-10">
              Tens of thousands of Hindus have already added their names to HJP&apos;s demand for Gau Mata
              protection. A name is a statement. Add yours.
            </p>
            <Link
              href="/#petition"
              className="inline-block bg-[#d4621a] px-10 py-4 text-xs uppercase tracking-[0.3em] text-[#070707] font-bold hover:bg-[#e8721a] transition-all duration-300"
            >
              Sign the Petition
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
