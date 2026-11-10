import type { KeyboardEvent } from 'react'
import { Link } from 'react-router'
import { ResponsiveImage } from '@/components/common/responsive-image'
import type { NavigationCard } from '@/data/site-navigation'
import { cn } from '@/lib/utils'

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
    <ul className="grid grid-cols-2 gap-3 pb-4 xl:grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] xl:gap-6 xl:py-6">
      {cards.map((card, index) => (
        <li
          key={card.href}
          className={cn(card.description && 'col-span-full')}
        >
          <Link
            to={card.href}
            onClick={onNavigate}
            onKeyDown={onCardKeyDown && ((event) => onCardKeyDown(event, index))}
            className={cn(
              'group h-full rounded-md text-xs transition-colors hover:text-primary focus-visible:-outline-offset-2 xl:text-sm',
              card.description
                ? 'grid grid-cols-[36%_minmax(0,1fr)] items-start gap-3 xl:grid-cols-[18%_minmax(0,1fr)] xl:gap-4'
                : 'block',
            )}
          >
            <div className={cn('overflow-hidden rounded-md', !card.description && 'w-3/4')}>
              <ResponsiveImage
                {...card.image}
                alt=""
                sizes="auto, (min-width: 80rem) 215px, 115px"
                className="motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out motion-safe:group-hover:scale-105 motion-safe:group-focus-visible:scale-105"
              />
            </div>
            <div className={cn('max-w-md', !card.description && 'pt-2')}>
              <span className="block font-bold">{card.label}</span>
              <span className="mt-0.5 block text-[0.6875rem] text-muted-foreground xl:text-xs">
                {card.subtitle}
              </span>
              {card.description && (
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              )}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
