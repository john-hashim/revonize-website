import { AssetImage } from '@/components/common/asset-image'
import uavLineup from '@/assets/images/uav/uav-lineup-hero.webp'
import { ActionLink } from '@/components/common/action-link'
import { CatalogCard } from '@/components/common/catalog-card'
import { PageIntro } from '@/components/common/page-intro'
import { products } from '@/data/products'

export function ProductsPage() {
  return (
    <>
      <PageIntro
        compact
        eyebrow="UAV products"
        title="UAV Products"
        description="Compare UAV platforms for aerial mapping, inspection, surveillance, high-altitude logistics and precision agriculture."
        visual={
          <AssetImage
            src={uavLineup}
            alt="Illustration of Spectra, Veeksha, Ibex and ROV-STEM in flight"
            width={1200}
            height={800}
            fetchPriority="high"
            className="mx-auto h-auto w-[85%] max-w-[29rem]"
          />
        }
      >
        <ActionLink to="/contact?topic=spec-sheet" arrow={false}>
          Request a spec sheet
        </ActionLink>
      </PageIntro>

      <section aria-labelledby="uav-products-heading" className="bg-background py-12 sm:py-16">
        <div className="container-shell">
          <h2
            id="uav-products-heading"
            className="mb-8 text-center text-3xl font-semibold tracking-tight sm:mb-10 sm:text-4xl"
          >
            Choose a UAV Platform
          </h2>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {products.map(({ slug, name, summary, preview }) => (
              <CatalogCard
                key={slug}
                to={`/products/${slug}`}
                title={name}
                description={summary}
                action="View product"
                image={
                  <AssetImage
                    src={preview}
                    sizes="192px"
                    alt={`Illustration of ${name}`}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                    className="h-full max-h-36 w-full max-w-48 object-contain"
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
