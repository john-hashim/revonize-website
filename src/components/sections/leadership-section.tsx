import { AssetImage } from '@/components/common/asset-image'
import { leadership } from '@/data/company'

export function LeadershipSection() {
  return (
    <section aria-labelledby="leadership-heading">
      <div className="container-shell">
        <div className="section-space relative isolate border border-[var(--frame-line)] px-3 sm:px-8 lg:px-12">
          <svg aria-hidden="true" focusable="false" viewBox="0 0 180 240" className="pointer-events-none absolute top-0 left-0 -z-10 hidden w-32 fill-none sm:block lg:w-44">
            <path d="M0 30 30 0l30 30-30 30ZM60 30 90 0l30 30-30 30ZM0 90l30-30 30 30-30 30ZM60 90l30-30 30 30-30 30ZM120 90l30-30 30 30-30 30ZM60 150l30-30 30 30-30 30ZM0 210l30-30 30 30-30 30ZM60 210l30-30 30 30-30 30ZM120 210l30-30 30 30-30 30Z" stroke="var(--frame-line)" />
            <path d="m30 27 3 3-3 3-3-3Zm120 60 3 3-3 3-3-3Zm-60 60 3 3-3 3-3-3Z" fill="var(--frame-line)" />
          </svg>
          <svg aria-hidden="true" focusable="false" viewBox="0 0 120 120" className="pointer-events-none absolute right-0 bottom-0 -z-10 w-24 fill-none sm:w-32">
            <path d="m60 30 30-30 30 30-30 30ZM0 90l30-30 30 30-30 30Zm60 0 30-30 30 30-30 30Z" stroke="var(--frame-line)" />
          </svg>
          <header data-text-reveal="" className="mx-auto max-w-3xl px-2 text-center">
            <p className="eyebrow mb-3">Meet our team</p>
            <h2 id="leadership-heading" className="text-3xl font-semibold tracking-tight sm:text-5xl">
              No individual can win a game by himself.
            </h2>
          </header>
          <ul className="mt-9 grid gap-4 sm:mt-12 md:grid-cols-2 lg:gap-5">
            {leadership.map(({ name, role, portrait, bio }) => (
              <li key={name} className="border border-[var(--frame-line)] bg-background">
                <div className="flex justify-center border-b border-[var(--frame-line)] bg-muted/70 px-3 pt-3">
                  <AssetImage
                    src={portrait}
                    alt=""
                    width={400}
                    height={450}
                    loading="lazy"
                    className="h-auto w-48 max-w-full sm:w-56 lg:w-64"
                  />
                </div>
                <div className="p-5 sm:p-7">
                  <div data-text-reveal="" className="border-l-2 border-primary pl-3 sm:pl-4">
                    <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{role}</p>
                  </div>
                  <p className="body-copy mt-5">{bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
