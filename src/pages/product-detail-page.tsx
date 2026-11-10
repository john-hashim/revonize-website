import { AssetImage } from '@/components/common/asset-image'
import { useParams } from 'react-router'
import { ActionLink } from '@/components/common/action-link'
import { DetailIntro } from '@/components/common/detail-intro'
import { TechnicalDetails } from '@/components/common/technical-details'
import { products } from '@/data/products'
import { NotFoundPage } from '@/pages/not-found-page'

export function ProductDetailPage() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)

  if (!product) return <NotFoundPage />

  return (
    <>
      <DetailIntro
        parent={{ label: 'UAV Products', to: '/products' }}
        category={product.application}
        title={product.name}
        description={product.description}
        visual={
          <AssetImage
            src={product.preview}
            alt={`Illustration of ${product.name}`}
            width={1024}
            height={1024}
            fetchPriority="high"
            className="mx-auto h-64 w-full max-w-[26rem] object-contain sm:h-80"
          />
        }
      >
        <ActionLink to={`/contact?topic=spec-sheet&product=${product.slug}`} className="min-h-11 px-4">
          Request {product.name} spec sheet
        </ActionLink>
        <ActionLink to="#technical-details-heading" variant="secondary" arrow={false} className="min-h-11 px-4">
          View specifications
        </ActionLink>
      </DetailIntro>

      <TechnicalDetails
        title="Technical specifications"
        columns={['Parameter', 'Specification']}
        rows={product.specifications}
        applicationsTitle="Mission applications"
        applications={product.applications}
        note={product.specificationsNote ?? 'Request a spec sheet for the operating limits and payload options for your configuration.'}
        action={{ to: `/contact?topic=spec-sheet&product=${product.slug}`, label: 'Discuss this platform', description: 'Tell us about your mission and payload requirements.' }}
      />
    </>
  )
}
