import { createBrowserRouter } from 'react-router'
import { SiteLayout } from '@/app/site-layout'
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
      {
        path: 'products',
        lazy: {
          Component: async () => (await import('@/pages/products-page')).ProductsPage,
        },
      },
      {
        path: 'products/:slug',
        lazy: {
          Component: async () =>
            (await import('@/pages/product-detail-page')).ProductDetailPage,
        },
      },
      {
        path: 'engineering',
        lazy: {
          Component: async () =>
            (await import('@/pages/engineering-page')).EngineeringPage,
        },
      },
      {
        path: 'research',
        lazy: {
          Component: async () => (await import('@/pages/research-page')).ResearchPage,
        },
      },
      {
        path: 'academy',
        lazy: {
          Component: async () => (await import('@/pages/academy-page')).AcademyPage,
        },
      },
      {
        path: 'about',
        lazy: {
          Component: async () => (await import('@/pages/about-page')).AboutPage,
        },
      },
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
