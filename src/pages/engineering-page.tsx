import { BadgeCheck } from 'lucide-react'
import engineeringHero from '@/assets/images/engineering/engineering-services-hero.webp'
import { CatalogCard } from '@/components/common/catalog-card'
import { PageIntro } from '@/components/common/page-intro'
import { engineeringServices } from '@/data/capabilities'

export function EngineeringPage() {
  return (
    <>
      <PageIntro
        compact
        eyebrow="Engineering services"
        title="Engineering Services"
        description="Bring your design from concept to production with 3D modelling and simulation, PCB development, carbon fibre moulding, and precision CNC machining."
        visual={
          <img
            src={engineeringHero}
            alt="Carbon fibre moulding, circuit boards, a machined bracket and a simulated bracket arranged on a single platform"
            width={1200}
            height={800}
            fetchPriority="high"
            className="mx-auto h-auto w-[85%] max-w-[29rem]"
          />
        }
      >
        <div className="inline-flex items-center gap-3 rounded-md border bg-background px-4 py-3">
          <BadgeCheck aria-hidden="true" className="size-7 shrink-0 text-primary" strokeWidth={1.6} />
          <div>
            <p className="text-[0.6125rem]/[0.875rem] font-semibold">ISO 9001:2015</p>
            <p className="mt-0.5 text-[0.525rem]/[0.7rem] text-muted-foreground">Quality management</p>
          </div>
        </div>
      </PageIntro>

      <section aria-labelledby="manufacturing-services-heading" className="bg-background py-12 sm:py-16">
        <div className="container-shell">
          <h2
            id="manufacturing-services-heading"
            className="mb-8 text-center text-3xl font-semibold tracking-tight sm:mb-10 sm:text-4xl"
          >
            Choose a Manufacturing Service
          </h2>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {engineeringServices.map(({ id, title, description, preview }) => (
              <CatalogCard
                key={id}
                id={id}
                to={`/engineering/${id}`}
                title={title}
                description={description}
                action="View service"
                image={
                  <img
                    {...preview}
                    width={576}
                    height={384}
                    loading="lazy"
                    decoding="async"
                    className="h-auto w-full max-w-48"
                  />
                }
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
