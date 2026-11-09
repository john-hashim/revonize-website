import { ActionLink } from '@/components/common/action-link'

export function NotFoundPage() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <p className="eyebrow mb-4">404 // Page not found</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Let’s get you back on course.
        </h1>
        <p className="body-copy mb-8 mt-5">
          The page you’re looking for could not be found.
        </p>
        <ActionLink to="/">Back to home</ActionLink>
      </div>
    </section>
  )
}
