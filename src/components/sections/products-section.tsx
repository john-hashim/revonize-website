import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import { products } from '@/data/products'
import './products-section.css'

const visibleThreshold = 0.35
const platformDescriptions: Record<string, string> = {
  spectra: 'A compact quadrotor for reconnaissance and surveillance. Its four arms fold for transport and unfold for flight.',
  veeksha: 'A fixed-wing UAV for observing an area of interest from the air. Its payload can be configured around the mission’s observation and sensor needs.',
  ibex: 'A helicopter UAV for aerial observation and reconnaissance. Its airframe features a main rotor, tail boom and landing skids.',
  stem: 'An open-frame quadrotor for classrooms and workshops. Learners can see how the motors, propellers and onboard electronics work together.',
}

export function ProductsSection() {
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
      id="uav-platforms"
      aria-labelledby="uav-platforms-heading"
      className="bg-background py-8 sm:py-10 lg:py-12"
    >
      <div
        ref={showcaseRef}
        data-in-view={inView}
        className="uav-showcase container-shell grid items-center gap-5 md:grid-cols-[minmax(0,4fr)_minmax(0,5fr)] md:gap-8 lg:gap-12"
      >
        <div>
          <h2
            id="uav-platforms-heading"
            className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.65rem]"
          >
            UAV Platforms
          </h2>
          <p className="mt-2 mb-4 max-w-md text-base leading-6 font-medium text-muted-foreground sm:text-lg">
            Aircraft for reconnaissance, surveillance and hands-on drone education.
          </p>
          <ol className="grid gap-1">
            {products.map(({ slug, name, description }, index) => {
              const active = index === activeIndex
              const headingId = `uav-platform-${slug}`

              return (
                <li key={slug} className="relative pl-5 sm:pl-6">
                  <span aria-hidden="true" className="absolute inset-y-0.5 left-0 w-0.5 bg-border/70">
                    {active && (
                      <span
                        key={progressRun}
                        className="uav-progress block h-full w-full origin-top bg-primary"
                        onAnimationEnd={() => {
                          setActiveIndex((current) =>
                            current === index ? (current + 1) % products.length : current,
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
                      className={`flex min-h-11 w-full items-center gap-3 rounded-sm text-left text-lg font-semibold tracking-tight transition-colors sm:gap-4 sm:text-xl ${active
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-primary'}`}
                    >
                      <span
                        aria-hidden="true"
                        className={`text-sm font-semibold tabular-nums ${active ? 'text-primary' : ''}`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {name}
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
                      <p className="body-copy max-w-md">{platformDescriptions[slug] ?? description}</p>
                      <Link
                        to={`/products/${slug}`}
                        className="inline-flex min-h-11 items-center gap-1.5 rounded-sm pr-1 text-sm font-semibold text-primary hover:underline focus-visible:-outline-offset-2"
                      >
                        Learn more<span className="sr-only"> about {name}</span>
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
          {products.map(({ slug, name, format, preview }, index) => {
            const active = index === activeIndex

            return (
              <img
                key={slug}
                src={preview}
                alt={active ? `${name} ${format.toLowerCase()} UAV` : ''}
                aria-hidden={!active}
                width={1024}
                height={1024}
                loading="lazy"
                decoding="async"
                className={`absolute inset-0 size-full object-cover p-[7%] motion-safe:transition-opacity motion-safe:duration-300 ${active
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
