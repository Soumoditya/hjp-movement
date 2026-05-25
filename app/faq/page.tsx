import PageLayout from '../components/PageLayout'
import Link from 'next/link'

const faqs = [
  {
    question: 'Is HJP a political party?',
    answer:
      'No. HJP does not contest elections, endorse political candidates, or affiliate with any political party. It is a Hindu civilizational and cultural movement. The name includes "Party" in a classical sense — a party of people who share a conviction — not in the electoral sense. HJP has no interest in political power. It is interested in civilizational continuity.',
  },
  {
    question: 'Who runs HJP?',
    answer:
      'HJP is run by a group of committed Hindus who believe in Dharma, seva, and civilizational continuity. We do not seek recognition or publicity for ourselves. The movement is the message. Those who run it are less important than what it stands for — and what it calls others to do.',
  },
  {
    question: 'How can I get involved?',
    answer:
      'Follow @hindujanta.party on Instagram. Sign the Gau Mata petition. Practice Dharma in your daily life — temple seva, Sanskrit study, Gau Seva. Share what matters to you. Getting involved does not require joining anything or registering anywhere. It requires making choices — about how you live, what you practice, and what you refuse to let go of.',
  },
  {
    question: 'Is HJP affiliated with RSS, BJP, VHP, or any other organization?',
    answer:
      'No. HJP is completely independent. It is not affiliated with, funded by, endorsed by, or organizationally connected to any political party or political organization — including RSS, BJP, VHP, or any other. Our position is that Dharma transcends politics, and HJP will not be made a tool of any political agenda.',
  },
  {
    question: 'What is the Gau Mata petition?',
    answer:
      'A public demand for the recognition of Gau Mata as India\'s National Animal, full legal protection from slaughter across all states, and state-funded Gau Shalas in every district of India. It is a formal statement of Dharmic obligation — not a political campaign. Signing it is an act of public commitment to a principle that Hindu civilization has upheld from its beginning.',
  },
  {
    question: 'Does HJP promote violence or hatred toward any community?',
    answer:
      'No. HJP\'s position is grounded in Dharma — which has no room for unprovoked violence or hatred toward any community. We do not target any religion, ethnicity, or group. We stand for something, not against someone. A Hindu who practices Dharma with discipline, devotion, and clarity has no need for aggression. Our strength comes from what we are, not from what others are not.',
  },
  {
    question: 'How is HJP funded?',
    answer:
      'HJP operates without corporate funding, foreign funding, or political funding. It is a volunteer-driven movement sustained by the time, effort, and commitment of those who believe in it. This is intentional. External funding creates obligations — and HJP has no intention of owing anything to anyone outside the movement itself.',
  },
  {
    question: 'Is HJP registered as an organization?',
    answer:
      'HJP operates as a movement, not a registered legal entity. Registration does not determine the legitimacy of a cause. Dharma itself is not registered. The movements that have mattered most in history often began without legal sanction — they began with people who believed something deeply enough to act on it.',
  },
  {
    question: 'What does HJP believe about Hinduism and other religions?',
    answer:
      'HJP\'s focus is on Hindu civilization, Dharma, and Hindu self-respect. It does not engage in anti-other-religion rhetoric. Hinduism does not require the diminishment of others to stand tall. A Hindu who needs to attack another religion to feel confident in their own has not yet found that confidence. HJP is not about tearing down. It is about building up — a Dharmic culture, a generation that knows its roots, a civilization that refuses to disappear.',
  },
  {
    question: 'How do I contact HJP?',
    answer:
      'Through Instagram @hindujanta.party or the contact form on this website. We read everything. We do not always respond quickly — but we do respond. If you\'re reaching out to support the movement, we see you.',
  },
]

export default function FAQPage() {
  return (
    <PageLayout
      label="Questions"
      title="FAQ"
      subtitle="Answers to what people actually ask."
    >
      <section className="py-16 lg:py-20 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-base text-[#a09890] leading-8">
              These are the questions we receive most. We have answered them honestly, without spin and
              without defensiveness. If your question isn&apos;t here,{' '}
              <Link href="/contact" className="text-[#d4621a] hover:underline">
                reach out
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl space-y-0">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border-b border-white/[0.06] py-10"
              >
                <div className="flex items-start gap-6">
                  <div className="font-display text-2xl text-[#d4621a]/30 mt-1 flex-shrink-0 select-none">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#f5f1ea] mb-4 leading-snug">
                      {faq.question}
                    </h3>
                    <p className="text-base text-[#a09890] leading-8">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="max-w-3xl mt-16 pt-12 border-t border-white/[0.06]">
            <div className="text-[10px] uppercase tracking-[0.5em] text-[#d4621a] mb-4">More</div>
            <p className="text-base text-[#a09890] leading-8 mb-8">
              If you have a question that isn&apos;t here — or you disagree with something we&apos;ve
              said — reach out. We are not interested in echo chambers. We are interested in honest
              engagement.
            </p>
            <Link
              href="/contact"
              className="inline-block border border-[#d4621a]/60 px-8 py-4 text-xs uppercase tracking-[0.3em] text-[#d4621a] hover:bg-[#d4621a]/10 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
