import { Outlet, useNavigation } from 'react-router'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { RouteEffects } from '@/app/route-effects'

export function SiteLayout() {
  const navigation = useNavigation()

  return (
    <>
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[100] rounded-md bg-background p-4 font-medium text-primary shadow-lg focus:not-sr-only"
      >
        Skip to content
      </a>
      <SiteHeader />
      <p role="status" className="sr-only">
        {navigation.state === 'loading' ? 'Loading page…' : ''}
      </p>
      <main
        id="main-content"
        aria-busy={navigation.state === 'loading'}
        tabIndex={-1}
        className="min-h-[60vh] outline-none"
      >
        <Outlet />
      </main>
      <SiteFooter />
      <RouteEffects />
    </>
  )
}
