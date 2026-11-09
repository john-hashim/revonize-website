import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import ibexHeroImage from '@/assets/images/uav/ibex-hero.webp'
import spectraHeroImage from '@/assets/images/uav/spectra-hero.webp'
import stemHeroImage from '@/assets/images/uav/stem-hero.webp'
import veekshaHeroImage from '@/assets/images/uav/veeksha-hero.webp'
import { ActionLink } from '@/components/common/action-link'
import { AcademySection } from '@/components/sections/academy-section'
import { CapabilitiesSection } from '@/components/sections/capabilities-section'
import { ContactBanner } from '@/components/sections/contact-banner'
import { LeadershipSection } from '@/components/sections/leadership-section'
import { ProductsSection } from '@/components/sections/products-section'
import { ResearchSection } from '@/components/sections/research-section'

const heroHeadlineEndings = [
  'UAVs.',
  'Composite structures.',
  'Custom electronics.',
  'Precision components.',
]

const heroAircraft = [
  { src: spectraHeroImage, caption: 'Spectra · Foldable quadrotor' },
  { src: veekshaHeroImage, caption: 'Veeksha · Fixed-wing UAV' },
  { src: ibexHeroImage, caption: 'IBEX · Helicopter UAV' },
  { src: stemHeroImage, caption: 'STEM · Education quadrotor' },
]

const heroRotationInterval = 2134

export function HomePage() {
  const [rotationStep, setRotationStep] = useState(0)
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

      timer = window.setInterval(() => {
        setRotationStep((step) => step + 1)
      }, heroRotationInterval)
    }

    updateRotation()
    reducedMotion.addEventListener('change', updateRotation)

    return () => {
      window.clearInterval(timer)
      reducedMotion.removeEventListener('change', updateRotation)
    }
  }, [])

  return (
    <>
      <section className="border-b bg-muted">
        <div className="container-shell grid items-center gap-9 py-12 sm:py-16 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-12 lg:py-20 xl:gap-16">
          <div>
            <h1 className="text-[clamp(1.5rem,7vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.045em] sm:text-[clamp(2.75rem,5.4vw,3.75rem)] lg:text-[clamp(2.75rem,4.2vw,3.75rem)]">
              <span className="sr-only">
                We design and build UAVs, composite structures, custom electronics
                and precision components.
              </span>
              <span aria-hidden="true" className="block">
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
            <div className="mt-6 max-w-2xl space-y-3 text-sm leading-6 text-muted-foreground">
              <p>
                At Rovonize Systems, we are redefining the future of aerial technology
                by manufacturing advanced, high-performance drones tailored for diverse
                applications. Based in Kochi, Kerala, we are proud contributors to the
                Make in India initiative, striving to position India as a global leader
                in drone innovation.
              </p>
              <p>
                Our expertise spans industrial, agricultural, defense, and commercial
                drone solutions, offering cutting-edge technology with precision,
                efficiency, and reliability. With a strong focus on research, innovation,
                and sustainability, we are committed to delivering drones that empower
                industries, enhance security, and drive economic growth.
              </p>
            </div>
            <div className="mt-7 flex flex-col flex-wrap gap-3 sm:flex-row">
              <ActionLink to="/products">Explore UAV Products</ActionLink>
              <ActionLink to="/engineering" variant="secondary">
                View Engineering Services
              </ActionLink>
            </div>
            <div className="mt-8 border-t pt-4">
              <Link
                to="/contact"
                aria-label="Ask Rovonize about Certification and Compliance"
                className="text-sm font-medium text-muted-foreground underline underline-offset-4 hover:text-primary"
              >
                Certification + Compliance
              </Link>
            </div>
          </div>
          <figure className="mx-auto w-full max-w-[480px]">
            <div className="relative aspect-[4/3]">
              {heroAircraft.map(({ src }, index) => (
                <img
                  key={src}
                  src={src}
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
      <CapabilitiesSection />
      <ProductsSection />
      <ResearchSection />
      <AcademySection />
      <LeadershipSection />
      <ContactBanner />
    </>
  )
}
