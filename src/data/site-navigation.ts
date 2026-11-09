import { capabilities } from '@/data/capabilities'
import { products } from '@/data/products'
import { aeroWeaveImage } from '@/data/research'

export type NavigationCard = {
  label: string
  subtitle: string
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
          href: `/engineering#${capability.id}`,
          image: capability.image,
        }]
      : [],
  ),
  '/research': [{
    label: 'Aerospace composite research',
    subtitle: 'Project AeroWeave',
    href: '/research',
    image: aeroWeaveImage,
  }],
}
