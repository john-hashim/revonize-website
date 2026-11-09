import { SectionHeading } from '@/components/common/section-heading'
import { leadership } from '@/data/company'

export function LeadershipSection() {
  return (
    <section
      aria-labelledby="leadership-heading"
      className="section-space border-t"
    >
      <div className="container-shell">
        <SectionHeading
          eyebrow="Technical leadership"
          title="The people behind the engineering."
          id="leadership-heading"
        />
        <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {leadership.map((person, index) => (
            <article
              key={person.name}
              className="border-t-2 pt-5"
            >
              <p className="mb-6 text-xs tabular-nums text-muted-foreground">
                0{index + 1} // LEADERSHIP
              </p>
              <h3 className="text-lg font-semibold">{person.name}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {person.role}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
