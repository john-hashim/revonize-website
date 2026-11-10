import { useParams } from 'react-router'
import { ActionLink } from '@/components/common/action-link'
import { DetailIntro } from '@/components/common/detail-intro'
import { TechnicalDetails } from '@/components/common/technical-details'
import { engineeringServices } from '@/data/capabilities'
import { requestQuote } from '@/data/site-navigation'
import { NotFoundPage } from '@/pages/not-found-page'

export function EngineeringServicePage() {
  const { serviceId } = useParams()
  const service = engineeringServices.find(({ id }) => id === serviceId)

  if (!service) return <NotFoundPage />
  const enquiryUrl = `${requestQuote.href}?service=${service.id}`

  return (
    <>
      <DetailIntro
        parent={{ label: 'Engineering Services', to: '/engineering' }}
        category={service.category}
        title={service.title}
        description={service.description}
        visual={
          <img
            {...service.preview}
            width={576}
            height={384}
            fetchPriority="high"
            className="mx-auto aspect-[3/2] h-auto w-full max-w-[29rem] object-contain"
          />
        }
      >
        <ActionLink to={enquiryUrl} className="min-h-11 px-4">
          Discuss your project
        </ActionLink>
        <ActionLink to="#technical-details-heading" variant="secondary" arrow={false} className="min-h-11 px-4">
          Explore capabilities
        </ActionLink>
      </DetailIntro>

      <TechnicalDetails
        title="Technical capabilities"
        columns={['Capability', 'Scope of work']}
        rows={service.technicalCapabilities}
        applicationsTitle="Typical applications"
        applications={service.applications}
        action={{ to: enquiryUrl, label: 'Discuss your project', description: 'Share your drawings, materials and project requirements for review.' }}
      />
    </>
  )
}
