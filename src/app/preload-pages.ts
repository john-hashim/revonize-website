// Keep this manifest in a separate chunk: it is requested only after entry.
const pages = import.meta.glob([
  '/src/pages/*-page.tsx',
  '!/src/pages/home-page.tsx',
  '!/src/pages/research-page.tsx',
])
const images = import.meta.glob<string>([
  '/src/assets/images/{uav,engineering,leadership,industries}/*.{webp,png,jpg,jpeg,svg}',
], { eager: true, query: '?url', import: 'default' })

type Connection = { saveData?: boolean; effectiveType?: string }

export function canPreloadPages() {
  const connection = (navigator as Navigator & { connection?: Connection }).connection
  return !connection?.saveData && !['slow-2g', '2g'].includes(connection?.effectiveType ?? '')
}

function idle() {
  return new Promise<void>((resolve) => {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => resolve(), { timeout: 2000 })
    } else {
      globalThis.setTimeout(resolve, 200)
    }
  })
}

function warmImage(src: string) {
  return new Promise<void>((resolve) => {
    const image = new Image()
    const finish = () => {
      window.clearTimeout(timeout)
      image.onload = null
      image.onerror = null
      resolve()
    }
    const timeout = window.setTimeout(() => {
      finish()
      image.src = ''
    }, 15000)
    image.fetchPriority = 'low'
    image.decoding = 'async'
    image.onload = finish
    image.onerror = finish
    image.src = src
  })
}

let started = false

export async function preloadPages() {
  if (started || !canPreloadPages()) return
  started = true

  const loadedImages = new Set(
    Array.from(document.images)
      .filter((image) => image.complete && image.naturalWidth > 0)
      .map((image) => image.currentSrc || image.src),
  )
  const tasks: Array<() => Promise<unknown>> = [
    ...Object.values(pages),
    ...[...new Set(Object.values(images))]
      .filter((src) => !loadedImages.has(new URL(src, document.baseURI).href))
      .map((src) => () => warmImage(src)),
  ]

  async function worker() {
    while (tasks.length && canPreloadPages()) {
      await idle()
      // Wait while the visitor is away; resume without another preload run.
      if (document.hidden) {
        await new Promise<void>((resolve) => {
          const resume = () => {
            if (document.hidden) return
            document.removeEventListener('visibilitychange', resume)
            resolve()
          }
          document.addEventListener('visibilitychange', resume)
        })
      }
      if (!canPreloadPages()) return
      const task = tasks.shift()
      // Prefetch failures are harmless; normal navigation can retry the request.
      try { await task?.() } catch { /* Continue warming the remaining pages. */ }
    }
  }

  // Avoid flooding the connection while the visitor uses the current page.
  await Promise.all([worker(), worker()])
}
