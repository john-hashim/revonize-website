import { createBrowserRouter } from 'react-router'
import { RouteError } from '@/app/route-error'
import { SiteLayout } from '@/app/site-layout'
import { headerPages } from '@/data/site-navigation'
import { HomePage } from '@/pages/home-page'

export const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    errorElement: <RouteError />,
    hydrateFallbackElement: (
      <p role="status" className="container-shell py-16 text-muted-foreground">
        Loading page…
      </p>
    ),
    children: [
      { index: true, element: <HomePage /> },
      ...headerPages
        .filter(({ href }) =>
          href !== '/about' && !/^\/(engineering|products)(\/|$)/.test(href),
        )
        .map(({ href, label }) => ({
          path: href,
          element: (
            <h1 className="container-shell section-space text-4xl font-semibold tracking-tight sm:text-5xl">
              Details about {label}
            </h1>
          ),
        })),
      {
        path: 'products',
        lazy: async () => ({
          Component: (await import('@/pages/products-page')).ProductsPage,
        }),
      },
      {
        path: 'products/:slug',
        lazy: async () => ({
          Component: (await import('@/pages/product-detail-page')).ProductDetailPage,
        }),
      },
      {
        path: 'engineering',
        lazy: async () => ({
          Component: (await import('@/pages/engineering-page')).EngineeringPage,
        }),
      },
      {
        path: 'engineering/:serviceId',
        lazy: async () => ({
          Component: (await import('@/pages/engineering-service-page')).EngineeringServicePage,
        }),
      },
      {
        path: 'about',
        lazy: async () => ({
          Component: (await import('@/pages/about-page')).AboutPage,
        }),
      },
      {
        path: 'contact',
        lazy: async () => ({
          Component: (await import('@/pages/contact-page')).ContactPage,
        }),
      },
      {
        path: '*',
        lazy: async () => ({
          Component: (await import('@/pages/not-found-page')).NotFoundPage,
        }),
      },
    ],
  },
])
