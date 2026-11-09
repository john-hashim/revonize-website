import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import { ProductImage } from '@/components/common/product-image'
import { SectionHeading } from '@/components/common/section-heading'
import { Badge } from '@/components/ui/badge'
import { products } from '@/data/products'

export function ProductsSection({
  standalone = false,
}: {
  standalone?: boolean
}) {
  return (
    <section
      id="uav-platforms"
      aria-label="UAV platforms"
      className="section-space bg-muted"
    >
      <div className="container-shell">
        {!standalone && (
          <SectionHeading
            eyebrow="UAV platforms"
            title="Engineered for the mission."
            description="Explore our UAV platforms for reconnaissance, surveillance and hands-on drone education."
          />
        )}
        <div className="grid gap-5 md:grid-cols-2">
          {products.map((product, index) => (
            <article
              key={product.slug}
              className="flex flex-col rounded-md border bg-background p-6 sm:p-8"
            >
              <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
                <p className="eyebrow text-[10px] tracking-widest">
                  0{index + 1} // {product.format}
                </p>
                <Badge variant="secondary">
                  {product.application}
                </Badge>
              </div>
              <ProductImage
                product={product}
                sizes="auto, (min-width: 48rem) min(40vw, 524px), 85vw"
              />
              <h3 className="mt-6 text-3xl font-semibold tracking-tight">
                {product.name}
              </h3>
              <p className="body-copy mt-3 max-w-md grow">
                {product.description}
              </p>
              <div className="mt-8 border-t pt-5">
                <Link
                  to={`/products/${product.slug}`}
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  Explore {product.name}{' '}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
