import { PageIntro } from '@/components/common/page-intro'
import { ActionLink } from '@/components/common/action-link'
import { SectionHeading } from '@/components/common/section-heading'
import { CapabilitiesSection } from '@/components/sections/capabilities-section'
import { ContactBanner } from '@/components/sections/contact-banner'
import { engineeringWorkflow } from '@/data/capabilities'

export function EngineeringPage() {
  return (
    <>
      <PageIntro
        eyebrow="Engineering services"
        title="One engineering continuum."
        description="Connect digital design, structural analysis, electronics and manufacturing through a practical development workflow."
      >
        <ActionLink to="/contact?topic=engineering">
          Discuss your project
        </ActionLink>
      </PageIntro>
      <CapabilitiesSection />
      <section className="section-space bg-muted">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Operational workflow"
            title="From digital design to physical validation."
            description="A connected approach to developing components and systems, with engineering decisions carried through every stage."
          />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {engineeringWorkflow.map((step, i) => (
              <li key={step.title} className="border-t-2 pt-5">
                <span className="text-xs font-medium text-primary">
                  0{i + 1}
                </span>
                <h3 className="mb-3 mt-6 text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="text-sm leading-7 text-muted-foreground">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <ContactBanner />
    </>
  )
}
