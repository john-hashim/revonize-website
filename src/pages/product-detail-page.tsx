import { useParams } from 'react-router'
import { ActionLink } from '@/components/common/action-link'
import { PageIntro } from '@/components/common/page-intro'
import { products } from '@/data/products'
import { NotFoundPage } from '@/pages/not-found-page'

export function ProductDetailPage() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)

  if (!product) return <NotFoundPage />

  return (
    <>
      <PageIntro
        compact
        breadcrumbParent={{ label: 'UAV Products', to: '/products' }}
        eyebrow={product.name}
        title={product.name}
        description={product.description}
        visual={
          <img
            src={product.preview}
            alt={`${product.name} ${product.format.toLowerCase()} UAV`}
            width={1024}
            height={1024}
            fetchPriority="high"
            className="mx-auto aspect-[3/2] h-auto w-[85%] max-w-[29rem] object-cover"
          />
        }
      >
        <ActionLink to={`/contact?topic=spec-sheet&product=${product.slug}`} arrow={false}>
          Request {product.name} spec sheet
        </ActionLink>
      </PageIntro>

      <section aria-labelledby="product-details-heading" className="bg-background py-12 sm:py-16">
        <div className="container-shell">
          <h2
            id="product-details-heading"
            className="mb-8 text-center text-3xl font-semibold tracking-tight sm:mb-10 sm:text-4xl"
          >
            Product Details
          </h2>
          <ul className="grid gap-5 md:grid-cols-3">
            {product.details.map(({ title, description }) => (
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
