import type { LucideIcon } from 'lucide-react'
import { useLayoutEffect, useRef, type ReactNode } from 'react'
import './framed-page.css'

export function FramedPage({ children }: { children: ReactNode }) {
  const pageRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!pageRef.current || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver((entries) => {
      for (const { target, isIntersecting } of entries) {
        if (!isIntersecting) continue
        target.setAttribute('data-text-reveal', 'visible')
        observer.unobserve(target)
      }
    }, { rootMargin: '0px 0px -24px' })

    for (const group of pageRef.current.querySelectorAll('[data-text-reveal]')) {
      group.setAttribute('data-text-reveal', 'pending')
      observer.observe(group)
    }

    return () => observer.disconnect()
  }, [])

  return <div ref={pageRef} className="framed-page bg-background">{children}</div>
}

export function FramedIntro({ titleId, children }: { titleId: string; children: ReactNode }) {
  return (
    <section aria-labelledby={titleId} className="framed-intro">
      <div className="container-shell">
        <div className="framed-intro-panel px-5 py-10 sm:px-10 sm:py-14 lg:py-18">
          {children}
        </div>
      </div>
    </section>
  )
}

export function WireframeIcon({ icon: Icon, color }: { icon: LucideIcon; color: string }) {
  return (
    <div aria-hidden="true" className="grid place-items-center overflow-hidden border-r border-[var(--frame-line)]">
      <svg viewBox="0 0 160 160" className="w-full" fill="none" focusable="false">
        <g stroke="var(--frame-line)" strokeWidth="1">
          <path d="M0 126 80 80M132 50l28-16M45 160l35-20m52-30 28-16" strokeDasharray="4 3" />
          <path d="M28 50v60l52 30 52-30V50M80 80v60" />
          <path d="m80 20 52 30-52 30-52-30Z" fill="var(--frame-cube-top)" />
        </g>
        <g className={color} transform="matrix(.866 .5 -.866 .5 80 50)">
          <Icon x={-16} y={-16} width={32} height={32} />
        </g>
      </svg>
    </div>
  )
}
