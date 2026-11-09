import { SectionHeading } from '@/components/common/section-heading'
import { ActionLink } from '@/components/common/action-link'
import { ResponsiveImage } from '@/components/common/responsive-image'
import { aeroWeaveImage } from '@/data/research'

export function ResearchSection() {
  return (
    <section
      aria-labelledby="research-heading"
      className="section-space bg-background"
    >
      <div className="container-shell">
        <SectionHeading
          eyebrow="Research & development"
          title="Innovation, built into the process."
          id="research-heading"
          description="Bringing material research, engineering analysis and practical development together to explore the next generation of aerospace solutions."
        />
        <div className="grid gap-8 border-t pt-8 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <div>
            <p className="mb-4 eyebrow">
              Project AeroWeave
            </p>
            <h3 className="max-w-xl text-2xl font-medium leading-snug sm:text-3xl">
              Exploring the possibilities of carbon composites.
            </h3>
            <p className="mt-4 max-w-lg text-base leading-7 text-muted-foreground">
              Research into out-of-autoclave carbon prepreg and composite
              fabrication, connecting material development with lightweight
              structural design.
            </p>
          </div>
          <div className="flex flex-col items-start justify-between gap-6">
            <ResponsiveImage
              {...aeroWeaveImage}
              sizes="auto, (min-width: 64rem) min(40vw, 506px), 95vw"
            />
            <p className="max-w-sm text-base leading-7 text-muted-foreground">
              From digital simulation to physical prototypes, our R&D work
              connects analysis, materials and manufacturing.
            </p>
            <ActionLink to="/research" variant="secondary">
              Explore the R&D lab
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  )
}
