import { Link } from 'react-router'
import { ResponsiveImage } from '@/components/common/responsive-image'
import type { NavigationCard } from '@/data/site-navigation'

export function NavigationCards({
  cards,
  onNavigate,
}: {
  cards: NavigationCard[]
  onNavigate: () => void
}) {
  return (
    <ul className="grid grid-cols-2 gap-3 pb-4 xl:grid-cols-4 xl:gap-6 xl:py-6">
      {cards.map((card) => (
        <li key={card.href}>
          <Link
            to={card.href}
            onClick={onNavigate}
            className="block h-full rounded-md border p-1.5 text-xs font-medium transition-colors hover:border-primary hover:text-primary focus-visible:-outline-offset-2 xl:p-2 xl:text-sm"
          >
            <ResponsiveImage
              {...card.image}
              alt=""
              sizes="auto, (min-width: 80rem) 280px, 150px"
            />
            <span className="block px-0.5 pt-2 pb-1">{card.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
