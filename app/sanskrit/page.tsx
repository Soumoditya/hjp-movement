import PageLayout from '../components/PageLayout'

const categories = [
  {
    title: 'Vedas & Upanishads',
    desc: 'The Rigveda, Samaveda, Yajurveda, and Atharvaveda — and the 108 Upanishads that form the philosophical core of Hindu civilization. These are shruti: that which was heard, not authored.',
  },
  {
    title: 'Puranas & Itihasas',
    desc: 'The Ramayana, the Mahabharata (the longest epic in human history), and the 18 Mahapuranas — Bhagavata, Vishnu, Shiva, Devi Bhagavata and more. The living mythology of a civilization.',
  },
  {
    title: 'Shastra & Sutra',
    desc: 'Panini\'s Ashtadhyayi (the most sophisticated grammar ever written), Charaka Samhita (Ayurveda), Arthashastra (statecraft), Natya Shastra (aesthetics), Yoga Sutras, Brahma Sutras. Systematic knowledge in every domain.',
  },
]

const shlokas = [
  {
    devanagari: 'ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं\nभर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्',
    transliteration: 'Oṃ bhūr bhuvaḥ svaḥ tat saviturvareṇyaṃ\nbhargo devasya dhīmahi dhiyo yo naḥ pracodayāt',
    name: 'Gayatri Mantra',
    source: 'Rigveda 3.62.10',
    meaning:
      'We meditate upon the divine radiance of the Sun — that supreme light which illuminates all realms. May that divine intelligence guide our intellect toward enlightenment. The Gayatri is the mother of all mantras — a prayer for clarity of mind, recited at dawn, noon, and dusk by Hindus for generations beyond counting.',
  },
  {
    devanagari: 'वसुधैव कुटुम्बकम्',
    transliteration: 'Vasudhaiva Kuṭumbakam',
    name: 'Maha Upanishad',
    source: 'Maha Upanishad 6.71',
    meaning:
      'The world is one family. This is one of the most quoted shlokas in the world — and one of the most misunderstood. It is not naive cosmopolitanism. It is the statement of a civilization confident enough in its own identity to extend kinship to all of humanity. You cannot say "the world is one family" if you have abandoned your own family first.',
  },
  {
    devanagari: 'धर्मो रक्षति रक्षितः',
    transliteration: 'Dharmo rakṣati rakṣitaḥ',
    name: 'Manusmriti',
    source: 'Manusmriti 8.15',
    meaning:
      'Dharma protects those who protect it. The principle that animates HJP. When you uphold Dharma — in your conduct, your choices, your daily life — Dharma upholds you. When you abandon it for convenience or comfort, you lose the protection of the very order that sustains you.',
  },
  {
    devanagari: 'सत्यं वद धर्मं चर',
    transliteration: 'Satyaṃ vada dharmaṃ cara',
    name: 'Taittiriya Upanishad',
    source: 'Taittiriya Upanishad 1.11.1',
    meaning:
      'Speak truth. Walk Dharma. This instruction — given by a teacher to graduating students as the most essential advice for their lives — is perhaps the shortest complete manual for a Dharmic life ever written. Two commands. Both active. Neither passive, neither philosophical — they are directives for behavior.',
  },
  {
    devanagari: 'ॐ तत् सत्',
    transliteration: 'Oṃ tat sat',
    name: 'Bhagavad Gita',
    source: 'Bhagavad Gita 17.23',
    meaning:
      '"Om — That — Truth." The threefold name of Brahman — the absolute reality. Om is the primordial sound from which existence arises. Tat is "that" — the inexpressible absolute. Sat is truth, being, existence. Together they name what cannot fully be named: the ground of all reality, the Sanatan that underlies all that appears and disappears.',
  },
]

const reasons = [
  'To understand what you\'re saying when you recite a mantra — not just the sound, but the meaning.',
  'To read a shloka and feel it rather than just hear it repeated.',
  'To access the Vedas, Upanishads, and Gita in the language they were composed in.',
  'To understand the roots of Indian classical music, dance, drama, medicine, and mathematics.',
  'To participate in temple ritual with full awareness of what is being said and why.',
  'Because your ancestors preserved this language across thousands of years — and that preservation was not effortless.',
  'Because every generation that loses Sanskrit loses a dimension of access to its own tradition.',
  'Not for show. Not for ritual performance. For understanding. For depth. For connection.',
]

export default function SanskritPage() {
  return (
    <PageLayout
      label="Sacred Language"
      title={'WHY\nSANSKRIT\nMATTERS'}
      subtitle="Not ancient. Not dead. The living root of how this civilization thinks."
    >
      {/* Section 1: Sanskrit is Sanatan */}
      <section className="py-20 lg:py-28 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <div className="text-[10px] uppercase tracking-[0.5em] text-[#d4621a] mb-4">Nature</div>
              <h2 className="font-display text-4xl lg:text-5xl text-[#f5f1ea] mb-6 leading-tight">
                SANSKRIT IS<br />SANATAN
              </h2>
              <div className="saffron-line" />
              <div className="mt-10 font-devanagari text-3xl text-[#d4621a]/40 leading-snug">
                ॐ
              </div>
            </div>
            <div className="space-y-6 text-[#a09890] text-base leading-8">
              <p>
                Sanskrit was not invented at a point in time. It was refined, clarified, and systematized
                over generations by Rishis and grammarians — the most famous being Panini, whose
                Ashtadhyayi is the most rigorous grammar ever constructed for any language in human
                history. But it was not created. It was heard.
              </p>
              <p>
                The Vedas are shruti — that which was received. Not authored by humans. Not composed by
                poets drawing on their imagination. Heard by Rishis in states of profound concentration,
                in the silence between thought and word. Sanskrit is the language in which that hearing
                was preserved and transmitted. It is eternal not because it is old, but because it is
                the medium of eternal knowledge.
              </p>
              <p>
                To call Sanskrit ancient is to misunderstand its nature entirely. It is not ancient. It
                is Sanatan — without beginning, without end. It continues to be spoken, recited, composed
                in, and lived through by millions of Hindus today. The language through which the Rishis
                heard the cosmos is still alive. The question is whether you will engage with it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What Sanskrit Contains */}
      <section className="py-20 lg:py-28 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-[10px] uppercase tracking-[0.5em] text-[#d4621a] mb-4">Scope</div>
          <h2 className="font-display text-4xl lg:text-5xl text-[#f5f1ea] mb-14">WHAT SANSKRIT CONTAINS</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="border-t border-[#d4621a]/30 pt-6">
                <div className="font-display text-xl text-[#f5f1ea] mb-4 leading-tight">{cat.title}</div>
                <p className="text-sm text-[#6b6560] leading-7">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Famous Shlokas */}
      <section className="py-20 lg:py-28 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-[10px] uppercase tracking-[0.5em] text-[#d4621a] mb-4">Shlokas</div>
          <h2 className="font-display text-4xl lg:text-5xl text-[#f5f1ea] mb-14">FIVE SHLOKAS TO KNOW</h2>

          <div className="space-y-16">
            {shlokas.map((s, i) => (
              <div
                key={i}
                className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start border-t border-white/[0.06] pt-12"
              >
                <div>
                  <div className="font-devanagari text-2xl lg:text-3xl text-[#f5f1ea] leading-snug mb-4 whitespace-pre-line">
                    {s.devanagari}
                  </div>
                  <div className="text-sm text-[#d4621a] italic leading-snug mb-2">{s.transliteration}</div>
                  <div className="text-[9px] uppercase tracking-[0.4em] text-[#6b6560] mt-3">
                    {s.name} — {s.source}
                  </div>
                </div>
                <div>
                  <div className="saffron-line mb-6" />
                  <p className="text-base text-[#a09890] leading-8">{s.meaning}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Why You Should Learn */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-[10px] uppercase tracking-[0.5em] text-[#d4621a] mb-4">Action</div>
          <h2 className="font-display text-4xl lg:text-5xl text-[#f5f1ea] mb-14">WHY YOU SHOULD LEARN</h2>

          <div className="max-w-3xl">
            <div className="space-y-6">
              {reasons.map((reason, i) => (
                <div key={i} className="flex items-start gap-5">
                  <span className="text-[#d4621a] mt-1 flex-shrink-0">—</span>
                  <p className="text-base text-[#a09890] leading-7">{reason}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 border-t border-white/[0.06] pt-12">
              <p className="text-sm text-[#6b6560] leading-7 mb-6">
                Start small. One mantra. One shloka. Learn it, understand it, recite it. That single act
                of engagement is worth more than years of passive respect.
              </p>
              <div className="font-devanagari text-2xl text-[#d4621a]">
                || सत्यं वद धर्मं चर ||
              </div>
              <p className="text-xs text-[#6b6560] tracking-widest uppercase mt-3">
                Speak truth. Walk Dharma.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
