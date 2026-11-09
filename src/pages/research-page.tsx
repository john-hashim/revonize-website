import { PageIntro } from '@/components/common/page-intro'
import { ActionLink } from '@/components/common/action-link'
import { ResponsiveImage } from '@/components/common/responsive-image'
import { SectionHeading } from '@/components/common/section-heading'
import { ContactBanner } from '@/components/sections/contact-banner'
import { aeroWeaveImage } from '@/data/research'

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
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <ResponsiveImage
              {...aeroWeaveImage}
              sizes="(min-width: 64rem) min(calc(50vw - 64px), 576px), 95vw"
              loading="eager"
            />
            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1">
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
        </div>
      </section>
      <ContactBanner />
    </>
  )
}
