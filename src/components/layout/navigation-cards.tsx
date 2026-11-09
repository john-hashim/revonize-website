import type { KeyboardEvent } from 'react'
import { Link } from 'react-router'
import { ResponsiveImage } from '@/components/common/responsive-image'
import type { NavigationCard } from '@/data/site-navigation'

export function NavigationCards({
  cards,
  onNavigate,
  onCardKeyDown,
}: {
  cards: NavigationCard[]
  onNavigate: () => void
  onCardKeyDown?: (event: KeyboardEvent<HTMLAnchorElement>, index: number) => void
}) {
  return (
    <ul className="grid grid-cols-2 gap-3 pb-4 xl:grid-cols-4 xl:gap-6 xl:py-6">
      {cards.map((card, index) => (
        <li key={card.href}>
          <Link
            to={card.href}
            onClick={onNavigate}
            onKeyDown={onCardKeyDown && ((event) => onCardKeyDown(event, index))}
            className="block h-full rounded-md text-xs font-medium transition-colors hover:text-primary focus-visible:-outline-offset-2 xl:text-sm"
          >
            <ResponsiveImage
              {...card.image}
              alt=""
              sizes="auto, (min-width: 80rem) 280px, 150px"
            />
            <span className="block pt-2">{card.label}</span>
            <span className="mt-0.5 block text-[0.6875rem] font-normal text-muted-foreground xl:text-xs">
              {card.subtitle}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
