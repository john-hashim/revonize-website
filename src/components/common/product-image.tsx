import { ResponsiveImage } from '@/components/common/responsive-image'
import type { products } from '@/data/products'

export function ProductImage({
  product,
  sizes,
  loading = 'lazy',
}: {
  product: (typeof products)[number]
  sizes: string
  loading?: 'lazy' | 'eager'
}) {
  return (
    <ResponsiveImage
      {...product.image}
      sizes={sizes}
      alt={`${product.name} ${product.format.toLowerCase()} UAV`}
      loading={loading}
    />
  )
}
