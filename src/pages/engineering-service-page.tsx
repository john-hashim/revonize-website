import { useParams } from 'react-router'
import { ActionLink } from '@/components/common/action-link'
import { PageIntro } from '@/components/common/page-intro'
import { engineeringServices } from '@/data/capabilities'
import { NotFoundPage } from '@/pages/not-found-page'

export function EngineeringServicePage() {
  const { serviceId } = useParams()
  const service = engineeringServices.find(({ id }) => id === serviceId)

  if (!service) return <NotFoundPage />

  return (
    <>
      <PageIntro
        compact
        breadcrumbParent={{ label: 'Engineering Services', to: '/engineering' }}
        eyebrow={service.title}
        title={service.title}
        description={service.description}
        visual={
          <img
            {...service.preview}
            width={576}
            height={384}
            fetchPriority="high"
            className="mx-auto h-auto w-[85%] max-w-[29rem]"
          />
        }
      >
        <ActionLink to="/contact?topic=engineering" arrow={false}>
          Discuss your project
        </ActionLink>
      </PageIntro>

      <section aria-labelledby="service-details-heading" className="bg-background py-12 sm:py-16">
        <div className="container-shell">
          <h2
            id="service-details-heading"
            className="mb-8 text-center text-3xl font-semibold tracking-tight sm:mb-10 sm:text-4xl"
          >
            Service Details
          </h2>
          <ul className="grid gap-5 md:grid-cols-3">
            {service.highlights.map(({ title, description }) => (
              <li key={title} className="rounded-md border bg-background p-5 sm:p-6">
                <h3 className="text-lg font-semibold leading-snug tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
