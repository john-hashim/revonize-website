import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import type { ComponentProps, ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type ActionLinkProps = {
  to: string
  children: ReactNode
  variant?: ComponentProps<typeof Button>['variant']
  className?: string
  arrow?: boolean
}

export function ActionLink({
  to,
  children,
  variant = 'default',
  className,
  arrow = true,
}: ActionLinkProps) {
  return (
    <Button
      asChild
      variant={variant}
      className={cn(
        'h-auto min-h-11 max-w-full whitespace-normal px-5 py-3 text-left text-sm',
        className,
      )}
    >
      <Link to={to}>
        {children}
        {arrow && <ArrowUpRight aria-hidden="true" className="size-4" />}
      </Link>
    </Button>
  )
}
