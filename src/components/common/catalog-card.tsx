import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { ActionLink } from '@/components/common/action-link'

export function CatalogCard({
  id,
  to,
  title,
  description,
  image,
  action,
}: {
  id?: string
  to: string
  title: string
  description: string
  image: ReactNode
  action: string
}) {
  return (
    <li id={id} className="flex flex-col overflow-hidden rounded-md border bg-background">
      <Link to={to} aria-label={title} className="block cursor-pointer focus-visible:-outline-offset-2">
        <div className="grid h-36 place-items-center border-b bg-muted px-4 sm:h-40">
          {image}
        </div>
        <h3 className="px-5 pt-5 text-lg font-semibold leading-snug tracking-tight">{title}</h3>
      </Link>
      <div className="flex flex-1 flex-col items-start px-5 pb-5">
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
        <div className="mt-auto pt-4">
          <ActionLink to={to} variant="secondary" arrow={false}>
            {action}<span className="sr-only">: {title}</span>
          </ActionLink>
        </div>
      </div>
    </li>
  )
}
