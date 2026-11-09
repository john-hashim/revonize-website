import { cn } from '@/lib/utils'

export function ResponsiveImage({
  full,
  small,
  alt,
  sizes,
  loading = 'lazy',
  className,
}: {
  full: string
  small: string
  alt: string
  sizes: string
  loading?: 'lazy' | 'eager'
  className?: string
}) {
  return (
    <img
      src={full}
      srcSet={`${small} 480w, ${full} 1024w`}
      sizes={sizes}
      width={1024}
      height={1024}
      alt={alt}
      loading={loading}
      decoding="async"
      className={cn('aspect-[4/3] h-auto w-full rounded-md bg-muted object-cover', className)}
    />
  )
}
