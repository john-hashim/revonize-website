import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { Menu, ChevronDown } from 'lucide-react'
import { NavigationCards } from '@/components/layout/navigation-cards'
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
import { navigationCards } from '@/data/site-navigation'
import { cn } from '@/lib/utils'

const headerNavigation = [...navigation, { label: 'Careers', href: '/careers' }]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openSection, setOpenSection] = useState<string | null>(null)
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null)

  function closePanel() {
    setOpenSection(null)
  }

  function changeMenuOpen(open: boolean) {
    setMenuOpen(open)
    if (!open) setOpenMobileSection(null)
  }

  return (
    <header
      className="sticky top-0 z-40 border-b bg-background"
      onPointerLeave={(event) => {
        if (event.pointerType === 'mouse') closePanel()
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) closePanel()
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && openSection) {
          event.currentTarget
            .querySelector<HTMLButtonElement>('nav button[aria-expanded="true"]')
            ?.focus()
          closePanel()
        }
      }}
    >
      <div className="container-shell flex min-h-17 items-center justify-between gap-6 xl:grid xl:grid-cols-[1fr_auto_1fr] xl:gap-10">
        <Link
          to="/"
          aria-label="Rovonize home"
          className="shrink-0 justify-self-start py-2"
          onPointerEnter={closePanel}
          onFocus={closePanel}
        >
          <span className="block text-[1.65rem] font-extrabold leading-none tracking-[-0.075em] text-foreground">
            rovonize<span className="text-primary">.</span>
          </span>
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden items-stretch gap-6 self-stretch xl:flex"
        >
          {headerNavigation.map((item) => {
            const isOpen = openSection === item.href
            const cards = navigationCards[item.href]
            const panelId = `desktop-navigation-panel-${item.href.slice(1)}`

            return (
              <div
                key={item.href}
                className="flex items-center gap-0.5"
                onPointerEnter={(event) => {
                  if (event.pointerType === 'mouse') {
                    setOpenSection(cards ? item.href : null)
                  }
                }}
                onFocus={() => {
                  if (!isOpen) closePanel()
                }}
              >
                <NavLink
                  to={item.href}
                  onClick={closePanel}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center self-stretch whitespace-nowrap text-[0.825rem] font-medium transition-colors hover:text-primary',
                      isActive || isOpen ? 'text-primary' : 'text-foreground',
                    )
                  }
                >
                  {item.label}
                </NavLink>
                {cards && (
                  <button
                    type="button"
                    aria-label={`${item.label} submenu`}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="grid size-6 place-items-center rounded-sm hover:text-primary aria-expanded:text-primary"
                    onClick={() => setOpenSection(isOpen ? null : item.href)}
                  >
                    <ChevronDown
                      aria-hidden="true"
                      className={cn(
                        'size-3.5 transition-transform duration-200 motion-reduce:transition-none',
                        isOpen && 'rotate-180',
                      )}
                    />
                  </button>
                )}
                {cards && (
                  <div
                    id={panelId}
                    inert={!isOpen}
                    className={cn(
                      'absolute inset-x-0 top-full grid bg-background transition-[grid-template-rows,opacity] duration-300 ease-in-out motion-reduce:transition-none',
                      isOpen
                        ? 'z-10 grid-rows-[1fr] opacity-100 shadow-lg'
                        : 'pointer-events-none grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="border-y">
                        <div className="container-shell">
                          <NavigationCards cards={cards} onNavigate={closePanel} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </nav>
        <div
          className="flex items-center gap-3 justify-self-end"
          onPointerEnter={closePanel}
          onFocus={closePanel}
        >
          <Button
            asChild
            className="hidden text-xs sm:inline-flex"
          >
            <Link to="/contact?topic=engineering">Consult engineering</Link>
          </Button>
          <Sheet open={menuOpen} onOpenChange={changeMenuOpen}>
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
                {[
                  { label: 'Home', href: '/' },
                  ...headerNavigation,
                ].map((item) => {
                  const isOpen = openMobileSection === item.href
                  const cards = navigationCards[item.href]
                  const panelId = `mobile-navigation-panel-${item.href.slice(1)}`

                  return (
                    <div key={item.href} className="border-b">
                      <div className="flex items-center gap-2">
                        <SheetClose asChild>
                          <NavLink
                            end={item.href === '/'}
                            to={item.href}
                            className={({ isActive }) =>
                              cn(
                                'flex-1 py-4 text-[1.1rem] font-medium',
                                isActive && 'text-primary',
                              )
                            }
                          >
                            {item.label}
                          </NavLink>
                        </SheetClose>
                        {cards && (
                          <button
                            type="button"
                            aria-label={`${item.label} submenu`}
                            aria-expanded={isOpen}
                            aria-controls={panelId}
                            className="grid size-11 shrink-0 place-items-center rounded-sm aria-expanded:text-primary"
                            onClick={() => setOpenMobileSection(isOpen ? null : item.href)}
                          >
                            <ChevronDown
                              aria-hidden="true"
                              className={cn(
                                'size-4 transition-transform duration-200 motion-reduce:transition-none',
                                isOpen && 'rotate-180',
                              )}
                            />
                          </button>
                        )}
                      </div>
                      {cards && (
                        <div
                          id={panelId}
                          inert={!isOpen}
                          className={cn(
                            'grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none',
                            isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                          )}
                        >
                          <div className="min-h-0 overflow-hidden">
                            <NavigationCards
                              cards={cards}
                              onNavigate={() => changeMenuOpen(false)}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
                <SheetClose asChild>
                  <Button asChild className="mt-6 min-h-11">
                    <Link to="/contact?topic=engineering">Consult engineering</Link>
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
