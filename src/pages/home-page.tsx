import { AssetImage } from '@/components/common/asset-image'
import { useEffect, useRef, useState } from 'react'
import { ActionLink } from '@/components/common/action-link'
import { AcademySection } from '@/components/sections/academy-section'
import { ContactBanner } from '@/components/sections/contact-banner'
import { CredentialsSection } from '@/components/sections/credentials-section'
import { EngineeringServicesSection } from '@/components/sections/engineering-services-section'
import { MajorIndustriesSection } from '@/components/sections/major-industries-section'
import { MissionSection } from '@/components/sections/mission-section'
import { ProductsSection } from '@/components/sections/products-section'
// import { ResearchSection } from '@/components/sections/research-section'
import { products } from '@/data/products'

const heroHeadlineEndings = [
  'UAVs.',
  'Composite structures.',
  'Custom electronics.',
  'Precision components.',
]

const heroAircraft = products.map(({ name, format, preview }) => ({
  src: preview,
  caption: `${name} · ${format}`,
}))

const heroRotationInterval = 2134

export function HomePage() {
  const [rotationStep, setRotationStep] = useState(0)
  const readyAircraft = useRef(new Set<number>())
  const headlineIndex = rotationStep % heroHeadlineEndings.length
  const aircraftIndex = rotationStep % heroAircraft.length

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let timer: number | undefined

    function updateRotation() {
      window.clearInterval(timer)

      if (reducedMotion.matches) {
        setRotationStep(0)
        return
      }

      if (document.hidden) return

      timer = window.setInterval(() => {
        setRotationStep((step) =>
          readyAircraft.current.has((step + 1) % heroAircraft.length) ? step + 1 : step,
        )
      }, heroRotationInterval)
    }

    updateRotation()
    reducedMotion.addEventListener('change', updateRotation)
    document.addEventListener('visibilitychange', updateRotation)

    return () => {
      window.clearInterval(timer)
      reducedMotion.removeEventListener('change', updateRotation)
      document.removeEventListener('visibilitychange', updateRotation)
    }
  }, [])

  return (
    <div className="[&>section]:border-y-0 [&>section:nth-of-type(odd)]:bg-secondary [&>section:nth-of-type(even)]:bg-background">
      <section className="bg-muted">
        <div className="container-shell grid items-center gap-9 py-12 sm:py-16 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-12 lg:py-20 xl:gap-16">
          <div>
            <h1 className="text-[clamp(2rem,10vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.045em] max-sm:text-center sm:text-[clamp(2.75rem,5.4vw,3.75rem)] lg:text-[clamp(2.75rem,4.2vw,3.75rem)]">
              <span className="sr-only">
                We design and build UAVs, composite structures, custom electronics
                and precision components.
              </span>
              <span aria-hidden="true" className="block max-sm:text-balance">
                We design and build
              </span>
              <span aria-hidden="true" className="grid overflow-hidden text-primary">
                {heroHeadlineEndings.map((ending, index) => (
                  <span
                    key={ending}
                    className={`col-start-1 row-start-1 ${index === headlineIndex
                      ? 'motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-top-4 motion-safe:duration-350'
                      : 'invisible'}`}
                  >
                    {ending}
                  </span>
                ))}
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground max-sm:text-center sm:mt-6">
              From Kochi, we develop UAVs for mapping, surveillance, high-altitude logistics and precision agriculture.
              We also help teams model, simulate and manufacture parts and electronics.
            </p>
            <div className="mt-7 flex flex-col flex-wrap gap-3 sm:flex-row">
              <ActionLink to="/products">Explore UAV Products</ActionLink>
              <ActionLink to="/engineering" variant="secondary">
                View Engineering Services
              </ActionLink>
            </div>
          </div>
          <figure className="mx-auto w-full max-w-[480px]">
            <div className="relative aspect-[4/3]">
              {heroAircraft.map(({ src }, index) => (
                <AssetImage
                  key={src}
                  src={src}
                  onLoad={(event) => {
                    const image = event.currentTarget
                    void image.decode().then(() => readyAircraft.current.add(index)).catch(() => {})
                  }}
                  alt=""
                  width={1024}
                  height={1024}
                  fetchPriority={index === 0 ? 'high' : 'low'}
                  decoding="async"
                  className={`absolute inset-0 size-full object-cover ${index === aircraftIndex
                    ? 'z-10 motion-safe:animate-hero-aircraft-in'
                    : 'opacity-0 motion-safe:transition-opacity motion-safe:duration-250'}`}
                />
              ))}
            </div>
            <figcaption className="text-center text-xs leading-5 text-muted-foreground">
              {heroAircraft[aircraftIndex].caption}
            </figcaption>
          </figure>
        </div>
      </section>
      <CredentialsSection />
      <ProductsSection />
      <EngineeringServicesSection />
      <MissionSection />
      <MajorIndustriesSection />
      {/* <ResearchSection /> */}
      <AcademySection />
      <ContactBanner />
    </div>
  )
}
