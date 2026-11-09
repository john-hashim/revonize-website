import { Link } from 'react-router'
import { ChevronRight } from 'lucide-react'
import type { ReactNode } from 'react'

export function PageIntro({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: string
  description: string
  children?: ReactNode
}) {
  return (
    <section className="border-b bg-muted py-12 sm:py-16 lg:py-20">
      <div className="container-shell">
        <nav
          aria-label="Breadcrumb"
          className="mb-10 flex items-center gap-2 text-xs text-muted-foreground"
        >
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <ChevronRight className="size-3" aria-hidden="true" />
          <span aria-current="page">{eyebrow}</span>
        </nav>
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="body-copy mt-6 max-w-2xl text-lg">{description}</p>
        {children && (
          <div className="mt-8 flex flex-wrap gap-3">{children}</div>
        )}
      </div>
    </section>
  )
}
