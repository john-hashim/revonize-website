import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import { engineeringServices } from '@/data/capabilities'
import './engineering-services-section.css'

const visibleThreshold = 0.35

export function EngineeringServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progressRun, setProgressRun] = useState(0)
  const [inView, setInView] = useState(false)
  const showcaseRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const showcase = showcaseRef.current
    if (!showcase) return

    let intersects = false

    function updateVisibility() {
      setInView(intersects && !document.hidden)
    }

    const observer = new IntersectionObserver(([entry]) => {
      intersects = entry.intersectionRatio >= visibleThreshold
      updateVisibility()
    }, { threshold: visibleThreshold })

    observer.observe(showcase)
    document.addEventListener('visibilitychange', updateVisibility)

    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', updateVisibility)
    }
  }, [])

  return (
    <section
      id="capabilities"
      aria-labelledby="engineering-services-heading"
      className="bg-background py-8 sm:py-10 lg:py-12"
    >
      <div
        ref={showcaseRef}
        data-in-view={inView}
        className="engineering-showcase container-shell grid items-center gap-5 md:grid-cols-[minmax(0,4fr)_minmax(0,5fr)] md:gap-8 lg:gap-12"
      >
        <div>
          <h2
            id="engineering-services-heading"
            className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.65rem]"
          >
            Our Engineering Services
          </h2>
          <p className="mt-2 mb-4 max-w-md text-sm/5 font-medium text-muted-foreground">
            Model and test your design, then build it as a composite, machined or 3D-printed part, an avionics board or a custom propeller.
          </p>
          <ol className="grid gap-3">
            {engineeringServices.map(({ id, title, summary }, index) => {
              const active = index === activeIndex
              const headingId = `engineering-service-${id}`

              return (
                <li key={id} className="relative pl-5 sm:pl-6">
                  <span aria-hidden="true" className="absolute inset-y-0.5 left-0 w-0.5 bg-border/70">
                    {active && (
                      <span
                        key={progressRun}
                        className="engineering-progress block h-full w-full origin-top bg-primary"
                        onAnimationEnd={() => {
                          setActiveIndex((current) =>
                            current === index ? (current + 1) % engineeringServices.length : current,
                          )
                        }}
                      />
                    )}
                  </span>
                  <h3>
                    <button
                      id={headingId}
                      type="button"
                      aria-expanded={active}
                      aria-controls={`${headingId}-details`}
                      onClick={() => {
                        setActiveIndex(index)
                        setProgressRun((run) => run + 1)
                      }}
                      className={`flex min-h-11 w-full items-center gap-3 rounded-sm text-left text-base font-semibold tracking-tight transition-colors sm:gap-4 sm:text-lg ${active
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-primary'}`}
                    >
                      <span
                        aria-hidden="true"
                        className={`text-sm font-semibold tabular-nums ${active ? 'text-primary' : ''}`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {title}
                    </button>
                  </h3>
                  <div
                    id={`${headingId}-details`}
                    aria-hidden={!active}
                    inert={!active}
                    className={`grid motion-safe:transition-[grid-template-rows,opacity] motion-safe:duration-300 ${active
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="body-copy max-w-md">{summary}</p>
                      <Link
                        to={`/engineering/${id}`}
                        className="inline-flex min-h-11 items-center gap-1.5 rounded-sm pr-1 text-sm font-semibold text-primary hover:underline focus-visible:-outline-offset-2"
                      >
                        Learn more<span className="sr-only"> about {title}</span>
                        <ArrowUpRight aria-hidden="true" className="size-4" />
                      </Link>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
        <figure className="relative aspect-[3/2] overflow-hidden rounded-md bg-secondary">
          {engineeringServices.map(({ id, preview }, index) => {
            const active = index === activeIndex

            return (
              <img
                key={id}
                src={preview.src}
                alt={active ? preview.alt : ''}
                aria-hidden={!active}
                width={576}
                height={384}
                loading="lazy"
                decoding="async"
                className={`absolute inset-0 size-full object-contain p-[7%] motion-safe:transition-opacity motion-safe:duration-300 ${active
                  ? 'opacity-100'
                  : 'opacity-0'}`}
              />
            )
          })}
        </figure>
      </div>
    </section>
  )
}
