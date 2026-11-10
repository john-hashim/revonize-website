import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { ChevronRight } from 'lucide-react'

export function DetailIntro({ parent, title, category, description, visual, children }: {
  parent: { label: string; to: string }
  title: string
  category: string
  description: string
  visual: ReactNode
  children: ReactNode
}) {
  return (
    <section className="border-b bg-muted pb-10 pt-6 sm:pb-14 sm:pt-8">
      <div className="container-shell">
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs leading-5 text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight aria-hidden="true" className="size-3" />
          <Link to={parent.to} className="hover:text-primary">{parent.label}</Link>
          <ChevronRight aria-hidden="true" className="size-3" />
          <span aria-current="page">{title}</span>
        </nav>
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <p className="eyebrow mb-4">{category}</p>
            <h1 className="max-w-3xl text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">{title}</h1>
            <p className="body-copy mt-5 max-w-2xl">{description}</p>
            <div className="mt-7 flex flex-wrap gap-3">{children}</div>
          </div>
          <div className="min-w-0">{visual}</div>
        </div>
      </div>
    </section>
  )
}
