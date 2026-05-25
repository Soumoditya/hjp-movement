import PageLayout from '../components/PageLayout'

const pillars = [
  {
    devanagari: 'धृति',
    transliteration: 'Dhṛiti',
    english: 'Steadfastness',
    meaning: [
      'The capacity to hold firm when everything around you pulls toward compromise. Steadfastness is not stubbornness — it is rootedness. It is the quality of a person who has decided what they stand for and does not abandon that decision when it becomes inconvenient.',
      'A Dharmic person does not drift. When circumstances change, when pressure mounts, when the easier path opens up — the person of Dhṛiti remains anchored to what they know to be right. Steadfastness is the backbone of Dharmic life. Without it, every other quality eventually collapses.',
    ],
  },
  {
    devanagari: 'क्षमा',
    transliteration: 'Kṣamā',
    english: 'Forgiveness',
    meaning: [
      'Forgiveness is not weakness. It is the strength to release resentment without abandoning justice. Kṣamā does not ask you to pretend harm did not happen, or to excuse what is inexcusable. It asks you to refuse the slow poison of sustained anger.',
      'Forgiveness is practiced inward — it is the refusal to let grievance rot your inner life. The person who forgives does not do so for the offender\'s sake. They do so because carrying hatred is a form of self-harm, and a Dharmic person does not damage themselves needlessly.',
    ],
  },
  {
    devanagari: 'दम',
    transliteration: 'Dama',
    english: 'Self-Restraint',
    meaning: [
      'Dama is control of the mind and senses. A person who is ruled by their impulses — by appetite, by anger, by craving, by distraction — is ruled by their lowest nature. Dama is the practice of choosing the higher response in every situation, not because the lower impulse isn\'t present, but because you are not its slave.',
      'Self-restraint is not suppression. It is sovereignty. The person who practices Dama knows what they desire and chooses what they value. This distinction — between desire and value — is the beginning of Dharmic maturity.',
    ],
  },
  {
    devanagari: 'अस्तेय',
    transliteration: 'Asteya',
    english: 'Non-Stealing',
    meaning: [
      'Asteya means not taking what is not yours — and this extends far beyond physical objects. Not stealing credit for another\'s work. Not taking time you haven\'t been given. Not absorbing opportunities that belong to someone else. Not diminishing another\'s dignity to inflate your own.',
      'Asteya demands radical honesty about what is yours and what belongs to another. It is a principle of internal accounting — a refusal to deceive yourself about where the boundaries are. A person of Asteya does not justify small thefts with clever reasoning. They simply do not take.',
    ],
  },
  {
    devanagari: 'शौच',
    transliteration: 'Śauca',
    english: 'Purity',
    meaning: [
      'Śauca means purity — of body, of space, of speech, of intention. It is not obsession with cleanliness. It is the discipline of maintaining sacred standards in how you live and what you allow into your life. Impurity is not just physical. It is the unexamined life, the careless word, the impure motive dressed in good language.',
      'A person of Śauca treats their body as a sacred instrument, their home as a sacred space, their words as things that matter, and their intentions as the actual measure of their actions. Purity is an ongoing practice — not a state permanently achieved but a standard continuously upheld.',
    ],
  },
  {
    devanagari: 'इन्द्रियनिग्रह',
    transliteration: 'Indriyanigraha',
    english: 'Sense Control',
    meaning: [
      'Indriyanigraha is the practice of not being enslaved by sensation. The senses are powerful — sight, sound, touch, taste, smell — they are the primary channels through which the external world shapes your inner state. Left unchecked, they will run the show. Indriyanigraha does not mean shutting the senses off. It means maintaining awareness of how they operate and retaining the power to direct your attention.',
      'This is not asceticism. It is clear-eyed awareness of what drives your choices. Why did you eat that? Why did you say that? What were you reaching for? The person who practices Indriyanigraha can answer these questions honestly — and change the answer when it reflects poorly on them.',
    ],
  },
  {
    devanagari: 'धी',
    transliteration: 'Dhī',
    english: 'Wisdom',
    meaning: [
      'Dhī is the capacity to discern clearly — between real and false, between Dharma and adharma, between what is essential and what is noise. It is not intelligence in the modern sense. It is a quality of perception that sees through appearances to the actual structure of a situation.',
      'Dhī is sharpened through study, silence, and sustained practice. A person of Dhī does not react to the surface of things. They pause, they perceive, they understand — and then they act from that understanding. In a world that moves fast and rewards the quick take, Dhī is increasingly rare. It is also increasingly necessary.',
    ],
  },
  {
    devanagari: 'विद्या',
    transliteration: 'Vidyā',
    english: 'Knowledge',
    meaning: [
      'Vidyā is sacred knowledge — not information, not data, but the kind of understanding that changes how you live. The Vedas draw a fundamental distinction between para vidyā (higher knowledge, of Brahman, of the Self) and apara vidyā (knowledge of the world, of texts, of craft). Both matter. But higher knowledge is the goal — knowing what you are.',
      'Vidyā is transformative. You cannot genuinely know the Upanishads and remain unchanged. You cannot understand karma with real depth and continue making careless choices. Knowledge in the Hindu sense is not something you collect — it is something that reshapes you from within.',
    ],
  },
  {
    devanagari: 'सत्य',
    transliteration: 'Satya',
    english: 'Truth',
    meaning: [
      'Satya is not just an ethical rule. It is an ontological principle — truth is that which is real, and aligning yourself with truth means aligning yourself with what is real. Speak what is true. Do what you say. Be what you appear. Let the interior and exterior be the same person.',
      'Satya is the refusal to participate in any form of falsehood — including self-deception, which is the most common and most damaging. Many people speak honestly to others while lying constantly to themselves. The practice of Satya begins with complete honesty about your own inner state: your fears, your motives, your actual condition — before you concern yourself with your words to others.',
    ],
  },
  {
    devanagari: 'अक्रोध',
    transliteration: 'Akrodha',
    english: 'Non-Anger',
    meaning: [
      'Akrodha is not the suppression of anger. It is the cultivation of a disposition that does not reach for anger as a first response. Anger has its place — it is information, it signals violation, it can drive necessary action. But a person whose default mode is anger is a person who is not fully in control of themselves. And a person not in control of themselves cannot be fully relied upon.',
      'A Dharmic person acts from clarity, not from heat. They can address injustice without rage, set boundaries without hostility, correct wrongdoing without venom. This is not indifference. It is the far harder discipline of remaining collected — so that when you act, you act from your full capacity rather than from your worst impulse.',
    ],
  },
]

export default function DharmaPage() {
  return (
    <PageLayout
      label="Sanatana Dharma"
      title={'THE 10\nPILLARS\nOF DHARMA'}
      subtitle="From Manusmriti — not as ancient rules, but as living principles for a Dharmic life."
    >
      {/* Intro */}
      <section className="py-16 lg:py-20 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-base lg:text-lg text-[#a09890] leading-8">
              Manusmriti defines Dharma through 10 characteristics — Dharmasya tattvam. These are not
              commandments handed down from above, not rules imposed by authority. They are qualities
              cultivated inward — the marks of a person who has chosen Dharma as their way of moving
              through the world. Study them not as a list to memorize, but as a mirror.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      {pillars.map((pillar, i) => (
        <section
          key={i}
          className={`py-16 lg:py-24 border-b border-white/[0.06]`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid lg:grid-cols-[320px_1fr] gap-10 lg:gap-20 items-start">
              {/* Left: Sanskrit */}
              <div>
                <div className="font-display text-3xl text-[#d4621a]/30 mb-2 leading-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="font-devanagari text-5xl lg:text-6xl text-[#f5f1ea] leading-tight mb-3">
                  {pillar.devanagari}
                </div>
                <div className="text-sm text-[#d4621a] tracking-widest uppercase mb-1">
                  {pillar.transliteration}
                </div>
                <div className="text-xs text-[#6b6560] tracking-[0.4em] uppercase">
                  {pillar.english}
                </div>
              </div>

              {/* Right: Meaning */}
              <div className="space-y-5">
                <div className="saffron-line mb-6" />
                {pillar.meaning.map((para, j) => (
                  <p key={j} className="text-base text-[#a09890] leading-8">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Closing */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-base text-[#a09890] leading-8 mb-10">
              These ten qualities are not a checklist. They are a direction of travel — a standard to
              orient toward, knowing that falling short is part of the practice. The Dharmic life is not
              the life of a person who has arrived. It is the life of a person who keeps moving in the
              right direction.
            </p>
            <div className="font-devanagari text-2xl text-[#d4621a]">
              || धर्मो रक्षति रक्षितः ||
            </div>
            <p className="text-xs text-[#6b6560] tracking-widest uppercase mt-3">
              Dharma protects those who protect it.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
