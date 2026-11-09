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
        description="Explore Rovonize’s foldable quadrotor, fixed-wing and helicopter UAVs for reconnaissance and surveillance, plus a quadrotor for hands-on drone education."
        visual={
          <img
            src={uavLineup}
            alt="Illustration of Spectra, Veeksha, IBEX and STEM in flight"
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
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map(({ slug, name, format, description, preview }) => (
              <CatalogCard
                key={slug}
                to={`/products/${slug}`}
                title={name}
                description={description}
                action="View product"
                image={
                  <img
                    src={preview}
                    alt={`${name} ${format.toLowerCase()} UAV`}
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
