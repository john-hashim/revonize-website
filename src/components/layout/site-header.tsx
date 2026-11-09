import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { Menu, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { navigation } from '@/data/site'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container-shell flex min-h-20 items-center justify-between gap-5">
        <Link to="/" aria-label="Rovonize home" className="shrink-0 py-2">
          <span className="block text-[1.65rem] font-extrabold leading-none tracking-[-0.075em] text-foreground">
            rovonize<span className="text-primary">.</span>
          </span>
          <span className="mt-1.5 block text-[8px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Bridging you & technology
          </span>
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 xl:flex"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  'py-7 text-[12px] font-medium transition-colors hover:text-primary',
                  isActive ? 'text-primary' : 'text-foreground',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="secondary"
            className="hidden h-11 px-4 text-xs sm:inline-flex"
          >
            <Link to="/contact?topic=spec-sheet">Request spec sheet</Link>
          </Button>
          <Button
            asChild
            className="hidden h-11 px-4 text-xs sm:inline-flex"
          >
            <Link to="/contact?topic=engineering">
              Consult engineering <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="size-11 xl:hidden"
                aria-label="Open navigation menu"
              >
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[min(90vw,380px)] overflow-y-auto">
              <SheetHeader className="px-6 pt-8">
                <SheetTitle className="text-xl">Rovonize</SheetTitle>
                <SheetDescription>
                  Engineering. Manufacturing. Learning.
                </SheetDescription>
              </SheetHeader>
              <nav
                aria-label="Mobile navigation"
                className="flex flex-col px-6"
              >
                {[{ label: 'Home', href: '/' }, ...navigation].map((item) => (
                  <SheetClose key={item.href} asChild>
                    <NavLink
                      end={item.href === '/'}
                      to={item.href}
                      className={({ isActive }) =>
                        cn(
                          'border-b py-4 text-base font-medium',
                          isActive && 'text-primary',
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild className="mt-6 min-h-11">
                    <Link to="/contact?topic=engineering">
                      Consult engineering <ArrowUpRight aria-hidden="true" />
                    </Link>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button asChild variant="secondary" className="mt-3 min-h-11">
                    <Link to="/contact?topic=spec-sheet">
                      Request spec sheet
                    </Link>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
