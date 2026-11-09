import { ActionLink } from '@/components/common/action-link'
import { AcademySection } from '@/components/sections/academy-section'
import { CapabilitiesSection } from '@/components/sections/capabilities-section'
import { ContactBanner } from '@/components/sections/contact-banner'
import { LeadershipSection } from '@/components/sections/leadership-section'
import { ProductsSection } from '@/components/sections/products-section'
import { ResearchSection } from '@/components/sections/research-section'

export function HomePage() {
  return (
    <>
      <section className="border-b bg-muted">
        <div className="container-shell pb-14 pt-16 sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-24">
          <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-medium uppercase tracking-[0.18em] text-primary">
            <span className="flex items-center gap-2">
              <span className="size-1.5 rounded-md bg-primary" />
              Rovonize Systems
            </span>
            <span className="text-muted-foreground">Kochi, Kerala · India</span>
          </div>
          <h1 className="max-w-5xl text-[clamp(2.5rem,5.6vw,4.75rem)] font-semibold uppercase leading-[1.08] tracking-[-0.045em]">
            Engineering the next generation{' '}
            <span className="text-primary">aerospace.</span>
          </h1>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
            <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              At Rovonize Systems, we bring engineering ideas to life through
              advanced UAV platforms, precision manufacturing and hands-on
              technology education.
            </p>
            <p className="max-w-lg text-sm leading-7 text-muted-foreground">
              Based in Kochi, Kerala, we contribute to the Make in India
              initiative through drone innovation for industrial, agricultural,
              defence and commercial applications.
            </p>
          </div>
          <div className="mt-9 flex flex-col gap-3 min-[400px]:flex-row sm:gap-4">
            <ActionLink to="/products">Explore UAV products</ActionLink>
            <ActionLink to="/engineering" variant="secondary">
              Engineering services
            </ActionLink>
          </div>
          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t pt-6 text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground sm:mt-16">
            <span>UAV systems</span>
            <span>Digital engineering</span>
            <span>Precision manufacturing</span>
            <span>Technical education</span>
          </div>
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
