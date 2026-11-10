import { useEffect } from 'react'

// The HTML shell owns the overlay so it is visible before React or CSS loads.
export function useInitialLoader() {
  useEffect(() => {
    const overlay = document.getElementById('initial-loader')
    const root = document.getElementById('root')
    if (!overlay || !root) return

    const controller = new AbortController()
    const { signal } = controller
    root.inert = true
    let completed = 0
    let finished = false
    let revealTimer: number | undefined
    let removeTimer: number | undefined
    const track = overlay.querySelector<HTMLElement>('[role="progressbar"]')
    const fill = overlay.querySelector<HTMLElement>('.loader-fill')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    function progress(value: number) {
      track?.setAttribute('aria-valuenow', String(value))
      if (fill) fill.style.transform = `scaleX(${value / 100})`
    }

    function reveal() {
      if (signal.aborted || finished) return
      finished = true
      window.clearTimeout(deadline)
      progress(100)
      // Let the completed bar paint before fading the overlay away.
      revealTimer = window.setTimeout(() => {
        document.documentElement.classList.remove('is-loading')
        root!.inert = false
        overlay!.classList.add('is-complete')
        removeTimer = window.setTimeout(() => {
          overlay!.remove()
          // Load the prefetch manifest only after the landing page is revealed.
          void import('@/app/preload-pages')
            .then(({ preloadPages }) => preloadPages())
            .catch(() => {})
        }, reducedMotion ? 0 : 240)
      }, reducedMotion ? 0 : 220)
    }

    function imageReady(image: HTMLImageElement) {
      return new Promise<void>((resolve) => {
        async function settle() {
          image.removeEventListener('load', settle)
          image.removeEventListener('error', settle)
          try { await image.decode() } catch { /* Failed images must not block entry. */ }
          resolve()
        }
        image.addEventListener('load', settle, { once: true, signal })
        image.addEventListener('error', settle, { once: true, signal })
        signal.addEventListener('abort', () => resolve(), { once: true })
        // Include below-the-fold images while preserving responsive srcset selection.
        image.loading = 'eager'
        if (image.complete) void settle()
      })
    }

    const deadline = window.setTimeout(reveal, 20000)
    const pageLoaded = new Promise<void>((resolve) => {
      if (document.readyState === 'complete') resolve()
      else window.addEventListener('load', () => resolve(), { once: true, signal })
      signal.addEventListener('abort', () => resolve(), { once: true })
    })
    const tasks = [
      pageLoaded,
      document.fonts.ready,
      ...Array.from(document.images, imageReady),
    ]
    progress(5)
    void Promise.all(tasks.map(async (task) => {
      await task
      if (signal.aborted || finished) return
      completed += 1
      progress(Math.round(5 + (completed / tasks.length) * 95))
    })).then(reveal)

    return () => {
      controller.abort()
      window.clearTimeout(deadline)
      window.clearTimeout(revealTimer)
      window.clearTimeout(removeTimer)
      root.inert = false
    }
  }, [])
}
