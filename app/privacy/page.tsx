import PageLayout from '../components/PageLayout'
import Link from 'next/link'

const sections = [
  {
    title: 'What We Collect',
    content: [
      'When you sign the Gau Mata petition, we collect your name, your city, and optionally your phone number. That is all. We do not ask for your date of birth, your address, your national ID, or any financial information. We do not run advertising pixels, behavioral trackers, or third-party analytics on this site.',
      'If you use the contact form, we receive the name, email, subject, and message you submit. This information is not stored in a database — it is transmitted to us for the purpose of responding to your inquiry.',
    ],
  },
  {
    title: 'How We Use It',
    content: [
      'Your name and city, if you sign the petition, appear in our petition supporter count and contribute to the total we report publicly. We do not display your full name publicly without permission.',
      'Your phone number, if provided when signing the petition, is stored but is not used for marketing, is not shared externally, and is not used to contact you without your explicit request. It is held in case we need to verify the authenticity of petition submissions.',
      'We do not sell your data. We do not trade it. We do not use it for any purpose other than what is described here.',
    ],
  },
  {
    title: 'Data Storage',
    content: [
      'Petition data is stored in a secure Redis database hosted on Upstash, a cloud infrastructure provider. Data is encrypted in transit and at rest. We do not store data on local machines, shared servers, or any infrastructure that is not properly secured.',
      'Contact form submissions are not stored in a database. They are transmitted to us by email and handled as correspondence.',
    ],
  },
  {
    title: 'Third Parties',
    content: [
      'We do not sell or share your data with any political party, advertiser, corporate entity, or third-party commercial service.',
      'We use Instagram (Meta) for our social media presence. If you interact with us on Instagram, Meta\'s privacy policy applies to that interaction independently of this policy. We have no control over what Meta does with data generated on their platform.',
      'We use Upstash for petition data storage. Their privacy policy governs their handling of data at the infrastructure level.',
    ],
  },
  {
    title: 'Your Rights',
    content: [
      'You can request the deletion of your petition entry at any time. To do so, contact us via Instagram @hindujanta.party with the name and city you used when you signed. We will remove your entry from the database within 7 days of your request.',
      'You can also request to know exactly what data we hold about you. We will respond within 14 days.',
    ],
  },
  {
    title: 'Changes to This Policy',
    content: [
      'We may update this privacy policy as the site changes. The date at the bottom of this page reflects the most recent version. We will not significantly change how we use your data without updating this policy and, where appropriate, notifying you.',
      'Continued use of this site after a policy update constitutes acceptance of the updated policy.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <PageLayout
      label="Legal"
      title={'PRIVACY\nPOLICY'}
      subtitle="What we collect, why, and how we protect it."
    >
      {/* Intro */}
      <section className="py-16 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-base text-[#a09890] leading-8">
              HJP is a movement, not a corporation. We collect as little data as necessary. We use it
              only for what we say we use it for. We do not monetize it. This policy is written in plain
              language because you deserve to understand it without a legal degree.
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl space-y-0">
            {sections.map((section, i) => (
              <div key={i} className="border-b border-white/[0.06] py-12">
                <h2 className="font-display text-2xl lg:text-3xl text-[#f5f1ea] mb-6">
                  {section.title.toUpperCase()}
                </h2>
                <div className="space-y-5">
                  {section.content.map((para, j) => (
                    <p key={j} className="text-base text-[#a09890] leading-8">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Last updated */}
          <div className="max-w-3xl mt-12 pt-8 border-t border-white/[0.06]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <div className="text-[10px] uppercase tracking-[0.5em] text-[#6b6560] mb-1">Last Updated</div>
                <div className="text-sm text-[#a09890]">May 2025</div>
              </div>
              <Link
                href="/contact"
                className="inline-block border border-[#d4621a]/60 px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#d4621a] hover:bg-[#d4621a]/10 transition-all duration-300"
              >
                Questions? Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
