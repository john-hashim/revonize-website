import { PageIntro } from '@/components/common/page-intro'
import { ActionLink } from '@/components/common/action-link'
import { SectionHeading } from '@/components/common/section-heading'
import { ContactBanner } from '@/components/sections/contact-banner'

export function ResearchPage() {
  return (
    <>
      <PageIntro
        eyebrow="R&D lab"
        title="Research that connects ideas to engineering."
        description="Explore the relationship between advanced materials, digital simulation and practical aerospace development."
      >
        <ActionLink to="/contact?topic=research">
          Discuss research collaboration
        </ActionLink>
      </PageIntro>
      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Project AeroWeave"
            title="A focus on carbon composites."
            description="Exploring out-of-autoclave carbon prepreg and fabrication approaches for lightweight structural components."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Materials',
                text: 'Carbon fibre composites and the relationship between material selection and structural performance.',
              },
              {
                title: 'Analysis',
                text: '3D modelling and simulation to understand structural behaviour before physical fabrication.',
              },
              {
                title: 'Fabrication',
                text: 'Mould development, composite fabrication and the transition from a digital design to a physical component.',
              },
            ].map((item) => (
              <article className="border-t pt-6" key={item.title}>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="body-copy mt-4">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactBanner />
    </>
  )
}
