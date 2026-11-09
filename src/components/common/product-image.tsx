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
  const { full, small } = product.image

  return (
    <img
      src={full}
      srcSet={`${small} 480w, ${full} 1024w`}
      sizes={sizes}
      width={1024}
      height={1024}
      alt={`${product.name} ${product.format.toLowerCase()} UAV`}
      loading={loading}
      decoding="async"
      className="aspect-[4/3] h-auto w-full rounded-md bg-muted object-cover"
    />
  )
}
