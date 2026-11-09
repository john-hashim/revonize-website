import { Link } from 'react-router'
import { PageIntro } from '@/components/common/page-intro'
import { ActionLink } from '@/components/common/action-link'
import { AcademySection } from '@/components/sections/academy-section'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { learningAreas } from '@/data/academy'

export function AcademyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Rovonize engineering academy"
        title="Engineering starts with doing."
        description="Hands-on training in robotics, drones, electronics and technology. Develop practical skills through UAV design internships and a diploma in Drone Engineering & Artificial Intelligence."
      >
        <ActionLink to="/contact?topic=academy">
          Enquire about admissions
        </ActionLink>
      </PageIntro>
      <div className="border-b">
        <div className="container-shell flex flex-wrap gap-x-10 gap-y-3 py-6">
          {learningAreas.map((area) => (
            <span
              key={area}
              className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
      <AcademySection standalone />
      <section className="section-space border-t bg-muted">
        <div className="container-shell grid gap-8 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow mb-4">Before you apply</p>
            <h2 className="text-3xl font-semibold tracking-tight">
              A few useful details.
            </h2>
          </div>
          <Accordion type="single" collapsible className="border-t">
            <AccordionItem value="duration">
              <AccordionTrigger className="min-h-14 text-base">
                What course durations are available?
              </AccordionTrigger>
              <AccordionContent className="leading-7 text-muted-foreground">
                The UAV Design & Development internship is available in 3-month
                and 6-month formats. The Diploma in Drone Engineering &
                Artificial Intelligence runs for 1 year.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="training">
              <AccordionTrigger className="min-h-14 text-base">
                What will the training cover?
              </AccordionTrigger>
              <AccordionContent className="leading-7 text-muted-foreground">
                Training covers drone and engineering fundamentals, digital
                design, electronics and practical development. The focus varies
                by course; contact the academy for the detailed syllabus.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="admissions">
              <AccordionTrigger className="min-h-14 text-base">
                How do I find out about eligibility and admissions?
              </AccordionTrigger>
              <AccordionContent className="leading-7 text-muted-foreground">
                <Link
                  to="/contact?topic=academy"
                  className="font-medium text-primary underline underline-offset-4"
                >
                  Contact the academy
                </Link>{' '}
                for eligibility, fees, upcoming intake dates and the application
                process.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  )
}
