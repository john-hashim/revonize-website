import { AssetImage } from '@/components/common/asset-image'
import { Check } from 'lucide-react'
import { Tabs } from 'radix-ui'
import { ActionLink } from '@/components/common/action-link'
import { products } from '@/data/products'

export function ProductsSection() {
  return (
    <section
      id="uav-platforms"
      aria-labelledby="uav-platforms-heading"
      className="bg-background py-8 sm:py-10 lg:py-12"
    >
      <div className="container-shell">
        <h2
          id="uav-platforms-heading"
          className="text-center text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.65rem]"
        >
          UAV Platforms
        </h2>
        <p className="body-copy mx-auto mt-2 mb-3 max-w-2xl text-center sm:mb-6">
          Explore aircraft for aerial surveys, surveillance, high-altitude cargo delivery and precision agriculture.
        </p>
        <Tabs.Root defaultValue={products[0].slug}>
          <Tabs.List
            aria-labelledby="uav-platforms-heading"
            className="flex justify-center-safe overflow-x-auto border-b sm:gap-2"
          >
            {products.map(({ slug, name }) => (
              <Tabs.Trigger
                key={slug}
                value={slug}
                className="min-h-11 flex-none whitespace-nowrap border-b-2 border-transparent px-1.5 py-2 text-[0.8125rem] font-semibold text-muted-foreground hover:text-foreground focus-visible:underline focus-visible:decoration-2 focus-visible:underline-offset-4 focus-visible:outline-hidden data-[state=active]:border-primary data-[state=active]:text-primary sm:min-h-14 sm:px-4 sm:text-sm lg:px-6"
              >
                {name}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {products.map(({ slug, name, summary, applications, preview }) => (
            <Tabs.Content
              key={slug}
              value={slug}
              className="pt-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:pt-5 lg:pt-6"
            >
              <div className="grid items-start gap-4 sm:grid-cols-[minmax(0,1fr)_19.5rem] sm:gap-x-6 lg:grid-cols-[repeat(2,minmax(0,1fr))_19.5rem] lg:gap-x-8">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{name}</h3>
                  <p className="body-copy mt-2 text-sm/6">{summary}</p>
                  <ActionLink
                    to={`/products/${slug}`}
                    variant="secondary"
                    arrow={false}
                    className="mt-3"
                  >
                    Learn more<span className="sr-only"> about {name}</span>
                  </ActionLink>
                </div>
                <ul className="space-y-2 lg:pt-1">
                  {applications.slice(0, 3).map((application) => (
                    <li key={application} className="body-copy flex items-start gap-3 text-sm/6">
                      <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-primary" />
                      {application}
                    </li>
                  ))}
                </ul>
                <AssetImage
                  src={preview}
                  alt={`Illustration of ${name}`}
                  width={1024}
                  height={1024}
                  sizes="(min-width: 640px) 312px, min(264px, calc(100vw - 40px))"
                  loading="lazy"
                  className="h-auto w-full max-w-66 justify-self-center sm:col-start-2 sm:row-span-2 sm:row-start-1 sm:max-w-none sm:self-center lg:col-auto lg:row-auto lg:h-52 lg:object-cover"
                />
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </section>
  )
}
