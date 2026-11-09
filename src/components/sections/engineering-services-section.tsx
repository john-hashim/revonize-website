import { Check } from 'lucide-react'
import { Tabs } from 'radix-ui'
import { ActionLink } from '@/components/common/action-link'
import { engineeringServices } from '@/data/capabilities'

export function EngineeringServicesSection() {
  return (
    <section
      id="capabilities"
      aria-labelledby="engineering-services-heading"
      className="bg-background py-12 sm:py-14 lg:py-16"
    >
      <div className="container-shell">
        <h2
          id="engineering-services-heading"
          className="mb-6 text-center text-3xl font-semibold leading-tight tracking-tight sm:mb-8 sm:text-4xl lg:text-[2.65rem]"
        >
          Our Engineering Services
        </h2>
        <Tabs.Root defaultValue={engineeringServices[0].id}>
          <Tabs.List
            aria-labelledby="engineering-services-heading"
            className="grid grid-cols-2 border-b md:flex md:justify-center"
          >
            {engineeringServices.map(({ id, title }) => (
              <Tabs.Trigger
                key={id}
                value={id}
                className="min-h-12 border-b-2 border-transparent px-2 py-3 text-sm font-semibold text-muted-foreground hover:text-foreground focus-visible:-outline-offset-4 data-[state=active]:border-primary data-[state=active]:text-primary md:px-4 lg:px-6"
              >
                {title}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {engineeringServices.map(({ id, title, description, highlights, preview }) => (
            <Tabs.Content
              key={id}
              value={id}
              className="pt-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:pt-10"
            >
              <div className="grid items-start gap-6 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3 lg:items-center lg:gap-x-10">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h3>
                  <p className="body-copy mt-2 text-sm/6">{description}</p>
                  <ActionLink
                    to={`/engineering/${id}`}
                    variant="secondary"
                    arrow={false}
                    className="mt-5"
                  >
                    Learn more<span className="sr-only"> about {title}</span>
                  </ActionLink>
                </div>
                <ul className="space-y-3">
                  {highlights.map(({ title: highlight }) => (
                    <li key={highlight} className="body-copy flex items-start gap-3 text-sm/6">
                      <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <img
                  {...preview}
                  width={576}
                  height={384}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full max-w-66 justify-self-center sm:col-start-2 sm:row-span-2 sm:row-start-1 sm:self-center lg:col-auto lg:row-auto"
                />
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </section>
  )
}
