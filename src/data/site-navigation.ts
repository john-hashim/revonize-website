import { capabilities } from '@/data/capabilities'
import { products } from '@/data/products'
import { aeroWeaveImage } from '@/data/research'

export type NavigationCard = {
  label: string
  href: string
  image: { full: string; small: string }
}

export const navigationCards: Partial<Record<string, NavigationCard[]>> = {
  '/products': products.map((product) => ({
    label: product.name,
    href: `/products/${product.slug}`,
    image: product.image,
  })),
  '/engineering': capabilities.flatMap((capability) =>
    capability.image
      ? [{
          label: capability.title,
          href: `/engineering#${capability.id}`,
          image: capability.image,
        }]
      : [],
  ),
  '/research': [{
    label: 'Aerospace composite research',
    href: '/research',
    image: aeroWeaveImage,
  }],
}
