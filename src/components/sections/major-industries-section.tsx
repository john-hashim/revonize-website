import { AssetImage } from '@/components/common/asset-image'
import { Link } from 'react-router'
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
          {industries.map(({ title, image, description, related }) => (
            <article key={title} className="flex flex-col overflow-hidden rounded-md bg-muted">
              <AssetImage
                {...image}
                sizes="(min-width: 1280px) 276px, (min-width: 640px) calc((100vw - 80px) / 2), calc(100vw - 40px)"
                width={800}
                height={451}
                loading="lazy"
                decoding="async"
                className="aspect-video w-full object-cover"
              />
              <div className="flex grow flex-col px-5 py-5 sm:px-6">
                <h3 className="text-lg font-semibold leading-snug tracking-tight">{title}</h3>
                <p className="mt-2 grow text-sm leading-6 text-muted-foreground">{description}</p>
                {related && (
                  <Link
                    to={related.to}
                    className="mt-3 inline-flex min-h-11 items-center self-start text-sm font-medium text-primary hover:underline"
                  >
                    {related.label}
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
