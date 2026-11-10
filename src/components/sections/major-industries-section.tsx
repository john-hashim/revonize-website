import { AssetImage } from '@/components/common/asset-image'
import { industries } from '@/data/industries'

export function MajorIndustriesSection() {
  return (
    <section
      id="major-industries"
      aria-labelledby="major-industries-heading"
      className="bg-secondary py-[2.4rem] sm:py-[2.8rem] lg:py-[3.2rem]"
    >
      <div className="container-shell">
        <div className="mb-8 text-center sm:mb-10">
          <h2
            id="major-industries-heading"
            className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.65rem]"
          >
            Major Industries Served
          </h2>
          <p className="body-copy mx-auto mt-3 max-w-2xl">
            We design UAV solutions for defence, agriculture, infrastructure and critical operations.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {industries.map(({ title, image, description }) => (
            <article key={title} className="overflow-hidden rounded-md bg-muted">
              <AssetImage
                {...image}
                sizes="(min-width: 1280px) 276px, (min-width: 640px) calc((100vw - 80px) / 2), calc(100vw - 40px)"
                width={800}
                height={451}
                loading="lazy"
                decoding="async"
                className="aspect-video w-full object-cover"
              />
              <div className="px-5 pt-5 pb-4 sm:px-6">
                <h3 className="text-lg font-semibold leading-snug tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
