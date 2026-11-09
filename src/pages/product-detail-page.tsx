import { useParams } from 'react-router'
import { Check } from 'lucide-react'
import { ActionLink } from '@/components/common/action-link'
import { PageIntro } from '@/components/common/page-intro'
import { ProductImage } from '@/components/common/product-image'
import { products } from '@/data/products'
import { NotFoundPage } from '@/pages/not-found-page'

export function ProductDetailPage() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)
  if (!product) return <NotFoundPage />

  return (
    <>
      <PageIntro
        eyebrow={`UAV products / ${product.name}`}
        title={product.name}
        description={product.description}
      >
        <ActionLink to={`/contact?topic=spec-sheet&product=${product.slug}`}>
          Request {product.name} spec sheet
        </ActionLink>
        <ActionLink to="/products" variant="secondary" arrow={false}>
          All UAV platforms
        </ActionLink>
      </PageIntro>
      <section className="section-space">
        <div className="container-shell grid items-start gap-10 lg:grid-cols-2 lg:gap-20">
          <ProductImage
            product={product}
            sizes="(min-width: 64rem) min(calc(50vw - 80px), 560px), 95vw"
            loading="eager"
          />
          <div className="space-y-8">
            <div>
              <p className="eyebrow mb-4">Platform overview</p>
              <h2 className="text-3xl font-semibold tracking-tight">
                {product.format}. {product.application}.
              </h2>
              <ul className="mt-7 space-y-4">
                {product.focus.map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground">
                    <Check
                      className="size-5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-md border bg-muted p-6 sm:p-8">
              <h2 className="text-xl font-semibold">
                Let’s discuss the details.
              </h2>
              <p className="body-copy mt-4">
                Our team can help with platform specifications, payload
                requirements, operating conditions and configuration options for
                your application.
              </p>
              <p className="body-copy mt-4">
                Request the latest technical information for {product.name}{' '}
                directly from Rovonize.
              </p>
              <ActionLink
                to={`/contact?topic=spec-sheet&product=${product.slug}`}
                className="mt-6"
              >
                Contact the engineering team
              </ActionLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
