import { Check } from 'lucide-react'
import { SectionHeading } from '@/components/common/section-heading'
import { ActionLink } from '@/components/common/action-link'
import { Badge } from '@/components/ui/badge'
import { courses } from '@/data/academy'

export function AcademySection({
  standalone = false,
}: {
  standalone?: boolean
}) {
  return (
    <section
      id="courses"
      aria-label="Engineering academy courses"
      className={standalone ? 'section-space bg-muted' : 'bg-muted py-[3.2rem] sm:py-16 lg:py-[4.8rem]'}
    >
      <div className="container-shell">
        {!standalone && (
          <SectionHeading
            title="Engineering & technology courses"
            titleClassName="text-2xl sm:text-[1.8rem] lg:text-[2.12rem]"
            description="Hands-on training in Robotics, Drones, Electronics & Technologies."
          />
        )}
        <div className="grid gap-6 md:grid-cols-2">
          {courses.map((course) => (
            <article
              id={course.id}
              key={course.id}
              className="flex scroll-mt-28 flex-col rounded-md border bg-background p-6 sm:p-9"
            >
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <p className="eyebrow text-[10px]">{course.type}</p>
                <Badge variant="outline">
                  {course.duration}
                </Badge>
              </div>
              <h3 className="max-w-md text-2xl font-semibold tracking-tight sm:text-3xl">
                {course.title}
              </h3>
              <p className="body-copy mt-4">{course.description}</p>
              <ul className="mb-8 mt-7 grow space-y-4">
                {course.topics.map((topic) => (
                  <li key={topic} className="flex gap-3 text-sm leading-6">
                    <Check
                      className="mt-1 size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    {topic}
                  </li>
                ))}
              </ul>
              <ActionLink
                to={`/contact?topic=academy&course=${course.id}`}
                variant="secondary"
                className="w-fit"
              >
                Enquire about this course
              </ActionLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
