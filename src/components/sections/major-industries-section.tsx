import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import { industries } from '@/data/industries'

export function MajorIndustriesSection() {
  return (
    <section
      id="major-industries"
      aria-labelledby="major-industries-heading"
      className="bg-secondary py-12 sm:py-14 lg:py-16"
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
          {industries.map(({ title, image, description, learnMore, related }) => (
            <article key={title} className="flex flex-col overflow-hidden rounded-md bg-muted">
              <img
                {...image}
                width={800}
                height={451}
                loading="lazy"
                decoding="async"
                className="aspect-video w-full object-cover"
              />
              <div className="flex grow flex-col px-5 pt-5 pb-3 sm:px-6">
                <h3 className="text-lg font-semibold leading-snug tracking-tight">{title}</h3>
                <p className="mt-2 grow text-sm leading-6 text-muted-foreground">{description}</p>
                <div className="mt-3 flex flex-wrap items-center gap-x-4">
                  <Link
                    to={learnMore.to}
                    className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    Learn more<span className="sr-only"> about {title} from {learnMore.label}</span>
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </Link>
                  {related && (
                    <Link
                      to={related.to}
                      className="inline-flex min-h-11 items-center text-sm font-medium text-primary hover:underline"
                    >
                      {related.label}
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
