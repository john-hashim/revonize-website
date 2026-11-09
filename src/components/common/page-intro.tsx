import { Link } from 'react-router'
import { ChevronRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function PageIntro({
  eyebrow,
  title,
  description,
  visual,
  breadcrumbParent,
  compact = false,
  children,
}: {
  eyebrow: string
  title: string
  description: string
  visual?: ReactNode
  breadcrumbParent?: { label: string; to: string }
  compact?: boolean
  children?: ReactNode
}) {
  return (
    <section className={cn(
      'bg-muted',
      compact
        ? 'pt-[0.3rem] pb-[0.792rem] sm:pt-[0.4rem] sm:pb-[1.056rem] lg:pt-2 lg:pb-[1.32rem]'
        : 'border-b py-12 sm:py-16 lg:py-20',
    )}>
      <div className="container-shell">
        <div className={visual ? 'grid items-center gap-8 lg:grid-cols-2 lg:gap-12' : undefined}>
          <div>
            <nav
              aria-label="Breadcrumb"
              className={cn(
                'flex flex-wrap items-center gap-x-2 gap-y-1 text-muted-foreground',
                compact ? 'mb-3 text-[0.7875rem]/[1.225rem]' : 'mb-10 text-xs',
              )}
            >
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
              <ChevronRight className="size-3" aria-hidden="true" />
              {breadcrumbParent && (
                <>
                  <Link to={breadcrumbParent.to} className="hover:text-primary">
                    {breadcrumbParent.label}
                  </Link>
                  <ChevronRight className="size-3" aria-hidden="true" />
                </>
              )}
              <span aria-current="page">{eyebrow}</span>
            </nav>
            {eyebrow.toLowerCase() !== title.toLowerCase() && <p className={cn('eyebrow mb-4', compact && 'text-[0.525rem]/[0.7rem]')}>{eyebrow}</p>}
            <h1 className={cn(
              'max-w-4xl font-semibold leading-[1.1] tracking-tight',
              compact ? 'text-[1.575rem] sm:text-[2.1rem] lg:text-[2.625rem]' : 'text-4xl sm:text-5xl lg:text-6xl',
            )}>
              {title}
            </h1>
            <p className={cn('body-copy max-w-2xl', compact ? 'mt-2 text-[0.7875rem]/[1.225rem]' : 'mt-6 text-lg')}>
              {description}
            </p>
            {children && (
              <div className={cn('flex flex-wrap gap-3', compact ? 'mt-3' : 'mt-8')}>{children}</div>
            )}
          </div>
          {visual}
        </div>
      </div>
    </section>
  )
}
