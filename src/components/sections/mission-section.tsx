import { Crosshair, Factory, Wrench } from 'lucide-react'
import { ActionLink } from '@/components/common/action-link'
import { mission } from '@/data/company'

const pillarIcons = {
  build: Factory,
  use: Crosshair,
  learn: Wrench,
}

export function MissionSection() {
  return (
    <section aria-labelledby="mission-heading" className="border-b bg-secondary py-16.25 sm:py-19.5">
      <div className="container-shell">
        <h2
          id="mission-heading"
          className="mb-8 text-center text-3xl font-semibold leading-tight tracking-tight sm:mb-10 sm:text-4xl lg:text-[2.65rem]"
        >
          {mission.title}
        </h2>
        <div className="grid divide-y border-y md:grid-cols-3 md:divide-x md:divide-y-0">
          {mission.pillars.map(({ id, title, description }) => {
            const Icon = pillarIcons[id]

            return (
              <article key={id} className="py-5 md:px-5 md:first:pl-0 md:last:pr-0 lg:px-7 lg:py-6">
                <h3 className="flex items-start gap-3 text-base font-semibold tracking-tight lg:text-lg">
                  <Icon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.75} />
                  <span>{title}</span>
                </h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">{description}</p>
              </article>
            )
          })}
        </div>
        <div className="mt-7 flex justify-center sm:mt-8">
          <ActionLink to="/about" variant="secondary" arrow={false}>
            About Rovonize
          </ActionLink>
        </div>
      </div>
    </section>
  )
}
