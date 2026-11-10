import { Button } from '@/components/ui/button'
import { useInitialLoader } from '@/app/use-initial-loader'

// A stale deployment chunk or offline navigation must offer a way to recover.
export function RouteError() {
  useInitialLoader()
  return (
    <main className="container-shell section-space">
      <h1 className="text-3xl font-semibold tracking-tight">Unable to load this page.</h1>
      <p role="alert" className="body-copy my-5">
        Check your connection and reload to try again.
      </p>
      <Button onClick={() => window.location.reload()}>Reload page</Button>
    </main>
  )
}
