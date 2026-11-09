import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react'
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
import { headerNavigation, navigationCards, requestQuote } from '@/data/site-navigation'
import { cn } from '@/lib/utils'

const desktopSlides = headerNavigation.flatMap((item, index) => {
  const cards = navigationCards[item.href]
  return cards ? [{ index, id: `desktop-navigation-panel-${item.href.slice(1)}`, cards }] : []
})

export function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [desktopPanel, setDesktopPanel] = useState<{
    index: number
    previousIndex: number | null
    open: boolean
  }>({ index: 0, previousIndex: null, open: false })
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null)

  const closePanel = useCallback(() => {
    setDesktopPanel((current) =>
      current.open ? { ...current, open: false, previousIndex: null } : current,
    )
  }, [])

  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    function handlePointerLeave(event: PointerEvent) {
      if (event.pointerType === 'mouse') closePanel()
    }

    const handleFocusOut = (event: FocusEvent) => {
      if (!(event.relatedTarget instanceof Node) || !header.contains(event.relatedTarget)) {
        closePanel()
      }
    }

    // Dismiss only when the pointer or focus leaves the entire header and panel.
    header.addEventListener('pointerleave', handlePointerLeave)
    header.addEventListener('focusout', handleFocusOut)
    return () => {
      header.removeEventListener('pointerleave', handlePointerLeave)
      header.removeEventListener('focusout', handleFocusOut)
    }
  }, [closePanel])

  function openPanel(index: number) {
    setDesktopPanel((current) =>
      current.open && current.index === index
        ? current
        : { index, previousIndex: current.open ? current.index : null, open: true },
    )
  }

  function dismissPanel(event: KeyboardEvent<HTMLAnchorElement | HTMLButtonElement>) {
    if (event.key !== 'Escape' || !desktopPanel.open) return

    event.currentTarget
      .closest('nav')
      ?.querySelector<HTMLButtonElement>('button[aria-expanded="true"]')
      ?.focus()
    closePanel()
  }

  function changeMenuOpen(open: boolean) {
    setMenuOpen(open)
    if (!open) setOpenMobileSection(null)
  }

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 border-b bg-background"
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
          {headerNavigation.map((item, index) => {
            const isOpen = desktopPanel.open && desktopPanel.index === index
            const cards = navigationCards[item.href]
            const panelId = `desktop-navigation-panel-${item.href.slice(1)}`

            function handlePointerEnter(event: ReactPointerEvent<HTMLAnchorElement | HTMLButtonElement>) {
              if (event.pointerType !== 'mouse') return
              if (cards) openPanel(index)
              else closePanel()
            }

            function handleFocus() {
              if (!isOpen) closePanel()
            }

            return (
              <div key={item.href} className="flex items-center gap-0.5">
                <NavLink
                  to={item.href}
                  onClick={closePanel}
                  onPointerEnter={handlePointerEnter}
                  onFocus={handleFocus}
                  onKeyDown={dismissPanel}
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
                    onClick={() => (isOpen ? closePanel() : openPanel(index))}
                    onPointerEnter={handlePointerEnter}
                    onFocus={handleFocus}
                    onKeyDown={(event) => {
                      dismissPanel(event)
                      if (!isOpen || event.key !== 'Tab' || event.shiftKey) return
                      const firstCard = document.getElementById(panelId)?.querySelector('a')
                      if (firstCard) {
                        event.preventDefault()
                        firstCard.focus()
                      }
                    }}
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
              </div>
            )
          })}
          <div
            inert={!desktopPanel.open}
            className={cn(
              'absolute inset-x-0 top-full grid bg-background transition-[grid-template-rows,opacity] duration-300 ease-in-out motion-reduce:transition-none',
              desktopPanel.open
                ? 'grid-rows-[1fr] opacity-100 shadow-lg'
                : 'pointer-events-none grid-rows-[0fr] opacity-0',
            )}
          >
            <div className="min-h-0 overflow-hidden">
              <div className="grid border-y">
                {desktopSlides.map((slide) => (
                  <div
                    key={slide.id}
                    id={slide.id}
                    inert={desktopPanel.index !== slide.index}
                    className={cn(
                      'col-start-1 row-start-1',
                      desktopPanel.previousIndex !== null &&
                        'transition-transform duration-300 ease-in-out motion-reduce:transition-none',
                      slide.index !== desktopPanel.index &&
                        slide.index !== desktopPanel.previousIndex && 'invisible',
                      slide.index < desktopPanel.index && '-translate-x-full',
                      slide.index > desktopPanel.index && 'translate-x-full',
                    )}
                  >
                    <div className="container-shell">
                      <NavigationCards
                        cards={slide.cards}
                        onNavigate={closePanel}
                        onCardKeyDown={(event, index) => {
                          dismissPanel(event)
                          if (event.key !== 'Tab') return

                          // Keep tab order aligned with the trigger despite the shared panel.
                          const nextItem = headerNavigation[slide.index + 1]
                          let selector: string
                          if (event.shiftKey && index === 0) {
                            selector = `button[aria-controls="${slide.id}"]`
                          } else if (!event.shiftKey && index === slide.cards.length - 1 && nextItem) {
                            selector = `a[href="${nextItem.href}"]`
                          } else {
                            return
                          }

                          const target = event.currentTarget.closest('nav')?.querySelector<HTMLElement>(selector)
                          if (target) {
                            event.preventDefault()
                            target.focus()
                          }
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </nav>
        <div className="flex items-center gap-3 justify-self-end">
          <Button
            asChild
            className="hidden text-xs sm:inline-flex"
          >
            <Link
              to={requestQuote.href}
              onPointerEnter={closePanel}
              onFocus={closePanel}
            >
              Consult engineering
            </Link>
          </Button>
          <Sheet open={menuOpen} onOpenChange={changeMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="size-11 xl:hidden"
                aria-label="Open navigation menu"
                onPointerEnter={closePanel}
                onFocus={closePanel}
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
                    <Link to={requestQuote.href}>Consult engineering</Link>
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
