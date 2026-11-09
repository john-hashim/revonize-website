import type { ImgHTMLAttributes } from 'react'

const originals = import.meta.glob<string>([
  '/src/assets/images/uav/*-hero*.webp',
  '/src/assets/images/industries/*.webp',
  '/src/assets/images/engineering/engineering-services-hero*.webp',
], {
  eager: true, query: '?url', import: 'default',
})
const variants = new Map(
  Object.entries(originals).flatMap(([path, url]) => {
    const small = originals[path.replace(/\.webp$/, '-480.webp')]
    return small ? [[url, small] as const] : []
  }),
)

// Preserve the existing image layout, while letting the browser choose the payload.
export function AssetImage({ src, width, sizes, srcSet, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const small = src && variants.get(src)
  return (
    <img
      {...props}
      src={src}
      width={width}
      decoding={props.decoding ?? 'async'}
      srcSet={srcSet ?? (small && width ? `${small} 480w, ${src} ${width}w` : undefined)}
      sizes={sizes ?? (small ? '(min-width: 1024px) 480px, (min-width: 640px) 480px, calc(100vw - 40px)' : undefined)}
    />
  )
}
