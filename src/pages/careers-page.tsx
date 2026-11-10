import { BriefcaseBusiness, ChevronRight, Crosshair, Factory, Wrench } from 'lucide-react'
import { Link } from 'react-router'
import engineeringHero from '@/assets/images/engineering/engineering-services-hero.webp'
import { AssetImage } from '@/components/common/asset-image'
import { FramedIntro, FramedPage, WireframeIcon } from '@/components/common/framed-page'
import { Button } from '@/components/ui/button'
import { openings } from '@/data/careers'
import { mission } from '@/data/company'
import { company } from '@/data/site'

const valueCards = {
  build: { Icon: Factory, summary: 'Grow local expertise', color: 'text-amber-700' },
  use: { Icon: Crosshair, summary: 'Solve real problems', color: 'text-primary' },
  learn: { Icon: Wrench, summary: 'Learn by doing', color: 'text-emerald-700' },
}

export function CareersPage() {
  return (
    <FramedPage>
      <FramedIntro titleId="careers-title">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div data-text-reveal="">
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
              <Link to="/" className="hover:text-primary">Home</Link>
              <ChevronRight aria-hidden="true" className="size-3" />
              <span aria-current="page">Careers</span>
            </nav>
            <p className="eyebrow mb-3">Careers</p>
            <h1 id="careers-title" className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Careers at Rovonize
            </h1>
            <p className="body-copy mt-5 max-w-xl">
              Join our team in Kochi and help build practical technology for aerospace, manufacturing and education.
            </p>
            <Button asChild variant="secondary" className="mt-6 px-4 sm:mt-8">
              <a href="#openings">View open roles</a>
            </Button>
          </div>
          <AssetImage
            src={engineeringHero}
            alt="Carbon fibre parts, circuit boards and a machined bracket"
            width={1200}
            height={800}
            sizes="(min-width: 80rem) 536px, (min-width: 64rem) calc(50vw - 106px), (min-width: 40rem) calc(100vw - 146px), calc(100vw - 82px)"
            fetchPriority="high"
            className="h-auto w-full border border-[var(--frame-line)]"
          />
        </div>
      </FramedIntro>

      <section aria-labelledby="values-heading">
        <div className="container-shell">
          <div className="border-x border-[var(--frame-line)] px-3 py-12 sm:px-8 sm:py-16 lg:px-12">
            <header data-text-reveal="" className="mb-8 text-center sm:mb-10">
              <h2 id="values-heading" className="text-3xl font-semibold tracking-tight sm:text-5xl">
                Our values
              </h2>
            </header>
            <ul className="grid gap-4 lg:grid-cols-3 lg:gap-5">
              {mission.pillars.map(({ id, title }) => {
                const { Icon, summary, color } = valueCards[id]

                return (
                  <li key={id} className="grid grid-cols-[4rem_minmax(0,1fr)] border border-[var(--frame-line)] sm:grid-cols-[6rem_minmax(0,1fr)]">
                    <WireframeIcon icon={Icon} color={color} />
                    <div data-text-reveal="" className="self-center p-4 sm:p-5">
                      <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{summary}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>

      <section id="openings" aria-labelledby="openings-heading" data-smooth-section-scroll>
        <div className="container-shell">
          <div className="border-x border-t border-[var(--frame-line)] px-3 py-12 sm:px-8 sm:py-16 lg:px-12">
            <header data-text-reveal="" className="mb-8 text-center sm:mb-10">
              <h2 id="openings-heading" className="text-3xl font-semibold tracking-tight sm:text-5xl">
                Current openings
              </h2>
            </header>
            <ul className="grid gap-4 lg:gap-5">
              {openings.map(({ title, location, workplace, schedule }) => (
                <li key={title}>
                  <a
                    href={`mailto:${company.email}?subject=${encodeURIComponent(`Application for ${title}`)}`}
                    aria-label={`Apply now for ${title}`}
                    className="group grid grid-cols-[4rem_minmax(0,1fr)] border border-[var(--frame-line)] hover:border-primary focus-visible:border-primary motion-safe:transition-colors sm:grid-cols-[6rem_minmax(0,1fr)]"
                  >
                    <WireframeIcon icon={BriefcaseBusiness} color="text-primary" />
                    <div className="flex flex-col justify-between gap-4 p-4 sm:flex-row sm:items-center sm:p-5">
                      <div data-text-reveal="">
                        <h3 className="text-lg font-semibold leading-tight tracking-tight sm:text-xl">{title}</h3>
                        <p className="mt-2 text-sm leading-5 text-muted-foreground">
                          {location} ({workplace}) · {schedule}
                        </p>
                      </div>
                      <span className="inline-flex min-h-11 shrink-0 items-center justify-center self-start border border-primary/30 px-4 text-sm font-medium text-primary group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-focus-visible:border-primary group-focus-visible:bg-primary group-focus-visible:text-primary-foreground motion-safe:transition-colors sm:self-center">
                        Apply now
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </FramedPage>
  )
}
