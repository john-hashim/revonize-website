import { createBrowserRouter } from 'react-router'
import { SiteLayout } from '@/app/site-layout'
import { headerPages } from '@/data/site-navigation'
import { HomePage } from '@/pages/home-page'

export const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    hydrateFallbackElement: (
      <p role="status" className="container-shell py-16 text-muted-foreground">
        Loading page…
      </p>
    ),
    children: [
      { index: true, element: <HomePage /> },
      ...headerPages.map(({ href, label }) => ({
        path: href,
        element: (
          <h1 className="container-shell section-space text-4xl font-semibold tracking-tight sm:text-5xl">
            Details about {label}
          </h1>
        ),
      })),
      {
        path: 'contact',
        lazy: {
          Component: async () => (await import('@/pages/contact-page')).ContactPage,
        },
      },
      {
        path: '*',
        lazy: {
          Component: async () =>
            (await import('@/pages/not-found-page')).NotFoundPage,
        },
      },
    ],
  },
])
