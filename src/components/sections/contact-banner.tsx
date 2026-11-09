import { ActionLink } from '@/components/common/action-link'

export function ContactBanner() {
  return (
    <section className="border-t bg-muted py-12 sm:py-16">
      <div className="container-shell flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
        <div>
          <p className="eyebrow mb-3">Let’s build what comes next</p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Have an engineering challenge in mind?
          </h2>
        </div>
        <ActionLink to="/contact?topic=engineering" className="shrink-0">
          Talk to our team
        </ActionLink>
      </div>
    </section>
  )
}
