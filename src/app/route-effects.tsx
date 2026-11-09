import { useEffect } from 'react'
import { matchPath, useLocation } from 'react-router'
import { headerPages } from '@/data/site-navigation'

const pageTitles: Record<string, string> = {
  '/': 'Aerospace, Engineering & Technology',
  '/contact': 'Contact',
}

export function RouteEffects() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const page = headerPages.find(({ href }) => matchPath(href, pathname))
    document.title = `${pageTitles[pathname] ?? page?.label ?? 'Page not found'} | Rovonize Systems`
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
