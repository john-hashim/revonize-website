import { ActionLink } from '@/components/common/action-link'
import { ResponsiveImage } from '@/components/common/responsive-image'
import { aeroWeaveImage } from '@/data/research'

export function ResearchSection() {
  return (
    <section
      aria-labelledby="research-heading"
      className="bg-background py-8 sm:py-10 lg:py-12"
    >
      <div className="container-shell grid items-center gap-5 sm:grid-cols-[2fr_3fr] sm:gap-8 lg:gap-12">
        <ResponsiveImage
          {...aeroWeaveImage}
          sizes="auto, (min-width: 80rem) 461px, (min-width: 64rem) 37vw, (min-width: 40rem) 35vw, calc(100vw - 2.5rem)"
          className="aspect-[16/10]"
        />
        <div>
          <h2 id="research-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
            Active R&D Programs
          </h2>
          <p className="body-copy mt-2">
            Details on our research and development programs are coming soon.
          </p>
          <ActionLink to="/research" variant="secondary" className="mt-4">
            Explore the R&D lab
          </ActionLink>
        </div>
      </div>
    </section>
  )
}
