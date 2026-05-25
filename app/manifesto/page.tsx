import PageLayout from '../components/PageLayout'

const principles = [
  {
    numeral: 'I',
    title: 'DHARMA IS NOT NEGOTIABLE',
    paragraphs: [
      'Dharma is not a religious opinion. It is the cosmic order that underlies all existence — the principle that holds the universe in its proper form, that defines right conduct for every being at every level. It does not need to be updated to feel modern. It does not need to be softened to avoid offense. It does not need your apology.',
      'HJP stands for Dharma in its complete, uncompromising form — as the foundation of individual conduct, family life, and civilizational identity. The moment a Hindu begins to qualify or apologize for Dharma, they have already granted that it requires justification. It does not. Dharma is self-evident to those willing to see clearly.',
      'A Hindu who apologizes for Dharma has already lost something essential — not to an enemy, but to their own uncertainty. The work of HJP begins there: rebuilding the certainty that Dharma deserves no apology.',
    ],
  },
  {
    numeral: 'II',
    title: 'SANSKRIT IS ALIVE',
    paragraphs: [
      'Every major Hindu scripture, ritual, philosophical text, and sacred formula was born in Sanskrit. The Vedas, the Upanishads, the Bhagavad Gita, the Mahabharata, the Ramayana, the Yoga Sutras — all of them. To treat Sanskrit as ancient or dead is to amputate a civilization from its own roots and then wonder why it stumbles.',
      'Sanskrit is Sanatan — it belongs to no era. It was not invented at a point in time; it was refined and preserved across millennia. The Vedas were not composed — they were heard (shruti), received by Rishis in states of profound clarity. Sanskrit is the medium of that reception. It is alive wherever a mantra is recited with understanding.',
      'HJP demands that Sanskrit be taught in every school, honored in every temple, and reclaimed by every Hindu family as their own language — not as a curiosity, not as a ritual decoration, but as the spine of Hindu thought and the medium through which Sanatan wisdom was transmitted across generations.',
    ],
  },
  {
    numeral: 'III',
    title: 'TEMPLES ARE NOT MONUMENTS',
    paragraphs: [
      'Hindu temples are not archaeological sites. They are not cultural artifacts to be preserved behind glass. They are living sacred spaces — centers of Shakti, of seva, of community, of continuity. A temple is not a building. It is a point where the divine and the human meet, maintained through the sustained devotion of those who tend it.',
      'A temple that is neglected is a temple in distress. A temple under government control, managed by bureaucrats who do not bow before the deity, is a temple whose sanctity is being quietly eroded. A temple commercially exploited for tourism revenue is a temple whose purpose has been inverted.',
      'Every Hindu has a responsibility to the temples of this land. Not as a tourist. Not as a cultural observer. As a devotee — one who belongs to this tradition and therefore belongs to its sacred spaces. Clean a temple. Fund a temple. Visit a temple not for the experience but for the seva.',
    ],
  },
  {
    numeral: 'IV',
    title: 'GAU MATA IS MOTHER',
    paragraphs: [
      'This is not a metaphor. Gau Mata holds sacred status in Hindu civilization — in the Rigveda, where she is called Aghnyā (the inviolable), in the Mahabharata, which declares Gaavo vishwasya maatarah — cows are the mothers of the world — in the daily practices of hundreds of millions who have honored her across every generation of this civilization.',
      'Her protection is not a political demand. It is a Dharmic obligation. To permit the slaughter of Gau Mata is to permit the violation of something the tradition has held inviolable from the beginning. That is not a matter of sentiment. It is a matter of civilizational principle.',
      'HJP demands full legal protection and recognition of Gau Mata as India\'s National Animal — with criminal penalties for slaughter that match the gravity of the offense, and state-funded Gau Shalas in every district so that Gau Seva is not left to private charity alone.',
    ],
  },
  {
    numeral: 'V',
    title: 'IDENTITY IS NOT NEGOTIABLE',
    paragraphs: [
      'Hindu identity does not require external validation. It does not need to be diluted to appear acceptable. It does not need to be reframed in someone else\'s vocabulary to earn respect. Hindu identity is complete in itself — rooted in Dharma, shaped by thousands of years of lived tradition, expressed through temple culture, sacred language, family ritual, and philosophical depth unmatched by any civilization on earth.',
      'A Proud Hindu is not an aggressive Hindu. HJP does not advocate for aggression. It advocates for clarity — the clarity of a person who knows exactly what they are, where they come from, and what they stand for, and who carries that knowledge with dignity rather than defensiveness.',
      'Discipline, devotion, and Dharmic living are the marks of Hindu identity — not rage, not politics. The Hindu who wakes early for puja, who studies Sanskrit, who visits the Gau Shala, who knows the Gayatri Mantra — this person is HJP.',
    ],
  },
  {
    numeral: 'VI',
    title: 'THE YOUNG MUST KNOW',
    paragraphs: [
      'Every generation that grows up disconnected from Sanskrit, from temple culture, from Gau Seva, from the true meaning of the Swastika — is a generation that has been severed from its own inheritance. This severance is not accidental. It is the cumulative result of decades of miseducation, cultural embarrassment, and the casual abandonment of tradition by those who should have transmitted it.',
      'The damage is real. But it is reversible. A young Hindu who learns Sanskrit at twenty is not a young Hindu who grew up without it — but they are a Hindu who chose it. That choice is more powerful than inheritance alone, because it is deliberate.',
      'HJP exists to rebuild that thread. Not through indoctrination — through living example, honest explanation, and sacred continuity. The movement is not a lecture. It is a demonstration. This is what Dharma looks like. This is what a Proud Hindu is. This is what you come from. Now decide what you will carry forward.',
    ],
  },
  {
    numeral: 'VII',
    title: 'SEVA IS THE ANSWER',
    paragraphs: [
      'Dharma must be lived, not just believed. Philosophy without action is decoration. A Hindu who knows the principles and does not practice them has the map but will not take the journey. Seva — selfless service — is the practical expression of every principle HJP stands for.',
      'Seva is not grand. It does not require a platform or an audience. It is the discipline of showing up for what matters without expecting recognition. Clean a temple. Learn a Sanskrit shloka and teach it to someone. Visit a Gau Shala. Donate to a temple that is struggling. Fast on Ekadashi and understand why. Light a lamp and mean it.',
      'The movement is built one act of seva at a time. Thousands of Hindus making small, deliberate, Dharmic choices — in their homes, their communities, their inner lives — is the most powerful civilizational force there is. This is how traditions have survived. This is how HJP will succeed.',
    ],
  },
]

export default function ManifestoPage() {
  return (
    <PageLayout
      label="Our Declaration"
      title={'THE\nMANIFESTO'}
      subtitle="This is what we believe, what we stand for, and what we refuse to accept."
    >
      {/* Intro */}
      <section className="py-16 lg:py-20 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-base lg:text-lg text-[#a09890] leading-8">
              What follows is not a list of grievances. It is a declaration of position — seven principles
              that define what HJP is, what it stands for, and what it refuses to compromise on. Read it
              slowly. If you find yourself agreeing — not because it sounds good, but because it is true —
              then you are already part of this movement.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      {principles.map((p, i) => (
        <section
          key={i}
          className="py-20 lg:py-28 border-b border-white/[0.06]"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid lg:grid-cols-[200px_1fr] gap-10 lg:gap-20">
              {/* Left: Numeral */}
              <div className="flex flex-col">
                <div className="font-display text-7xl lg:text-9xl text-[#d4621a]/20 leading-none select-none">
                  {p.numeral}
                </div>
              </div>

              {/* Right: Content */}
              <div>
                <div className="font-display text-3xl lg:text-4xl text-[#f5f1ea] mb-8 leading-tight">
                  {p.title}
                </div>
                <div className="saffron-line mb-8" />
                <div className="space-y-5">
                  {p.paragraphs.map((para, j) => (
                    <p key={j} className="text-base text-[#a09890] leading-8">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Closing shloka */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <div className="font-devanagari text-3xl lg:text-4xl text-[#d4621a] mb-4">
            || धर्मो रक्षति रक्षितः ||
          </div>
          <p className="text-sm text-[#6b6560] tracking-widest uppercase mt-4">
            Dharma protects those who protect it.
          </p>
        </div>
      </section>
    </PageLayout>
  )
}
