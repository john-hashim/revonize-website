import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { products } from '@/data/products'

const pageTitles: Record<string, string> = {
  '/': 'Aerospace, Engineering & Technology',
  '/products': 'UAV Products',
  '/engineering': 'Engineering Services',
  '/research': 'Research & Development',
  '/academy': 'Engineering Academy',
  '/about': 'About',
  '/careers': 'Careers',
  '/contact': 'Contact',
}

export function RouteEffects() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const product = products.find((item) => pathname === `/products/${item.slug}`)
    document.title = `${pageTitles[pathname] ?? (product ? product.name : 'Page not found')} | Rovonize Systems`
    if (hash) {
      document
        .getElementById(hash.slice(1))
        ?.scrollIntoView({ block: 'start' })
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      document.getElementById('main-content')?.focus({ preventScroll: true })
    }
  }, [pathname, hash])

  return null
}
