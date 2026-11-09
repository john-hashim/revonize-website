import { capabilities } from '@/data/capabilities'
import { products } from '@/data/products'
import { aeroWeaveImage } from '@/data/research'
import { navigation } from '@/data/site'

export const headerNavigation = [...navigation, { label: 'Careers', href: '/careers' }]
export const requestQuote = { label: 'Request quote', href: '/request-quote' }

export type NavigationCard = {
  label: string
  subtitle: string
  description?: string
  href: string
  image: { full: string; small: string }
}

export const navigationCards: Partial<Record<string, NavigationCard[]>> = {
  '/products': products.map((product) => ({
    label: product.name,
    subtitle: `${product.format} · ${product.application}`,
    href: `/products/${product.slug}`,
    image: product.image,
  })),
  '/engineering': capabilities.flatMap((capability) =>
    capability.image
      ? [{
          label: capability.title,
          subtitle: capability.category,
          href: `/engineering/${capability.id}`,
          image: capability.image,
        }]
      : [],
  ),
  '/research': [{
    label: 'Aerospace composite research',
    subtitle: 'Project AeroWeave',
    description:
      'AeroWeave explores out-of-autoclave carbon prepreg and fabrication methods for lightweight aerospace structures. The project connects materials research and structural simulation with hands-on composite fabrication.',
    href: '/research/aeroweave',
    image: aeroWeaveImage,
  }],
}

export const headerPages = [
  ...headerNavigation,
  ...Object.values(navigationCards).flatMap((cards) => cards ?? []),
  requestQuote,
]
