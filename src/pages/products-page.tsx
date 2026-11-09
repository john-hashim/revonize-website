import { ActionLink } from '@/components/common/action-link'
import { PageIntro } from '@/components/common/page-intro'
import { ProductsSection } from '@/components/sections/products-section'
import { ContactBanner } from '@/components/sections/contact-banner'

export function ProductsPage() {
  return (
    <>
      <PageIntro
        eyebrow="UAV products"
        title="The right platform. For your mission."
        description="Explore Rovonize’s UAV platforms for reconnaissance, surveillance and education. Talk to our team about your application and the appropriate configuration."
      >
        <ActionLink to="/contact?topic=spec-sheet">
          Request a spec sheet
        </ActionLink>
      </PageIntro>
      <ProductsSection standalone />
      <ContactBanner />
    </>
  )
}
