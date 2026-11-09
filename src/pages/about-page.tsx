import { PageIntro } from '@/components/common/page-intro'
import { LeadershipSection } from '@/components/sections/leadership-section'
import { ContactBanner } from '@/components/sections/contact-banner'

export function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Rovonize"
        title="Bridging you & technology."
        description="Based in Kochi, Kerala, Rovonize Systems brings together aerospace development, engineering services, precision manufacturing and technical education."
      />
      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow mb-4">Built around engineering</p>
            <h2 className="max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">
              Ideas become useful when they become real.
            </h2>
          </div>
          <div className="space-y-5">
            <p className="body-copy">
              Our work spans industrial, agricultural, defence and commercial
              drone applications. We connect digital engineering with
              composites, electronics and precision manufacturing to turn
              concepts into practical systems.
            </p>
            <p className="body-copy">
              As contributors to the Make in India initiative, we focus on
              research, innovation and the development of engineering capability
              in India.
            </p>
            <p className="body-copy">
              Through the Rovonize Engineering Academy, we connect this work
              with hands-on learning in robotics, drones, electronics and
              technology.
            </p>
          </div>
        </div>
      </section>
      <LeadershipSection />
      <ContactBanner />
    </>
  )
}
