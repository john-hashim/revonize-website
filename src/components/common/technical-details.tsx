import { Check } from 'lucide-react'
import { ActionLink } from '@/components/common/action-link'

export function TechnicalDetails({
  title,
  columns,
  rows,
  applicationsTitle,
  applications,
  note,
  action,
}: {
  title: string
  columns: [string, string]
  rows: readonly { label: string; value: string }[]
  applicationsTitle: string
  applications: readonly string[]
  note?: string
  action?: { to: string; label: string; description: string }
}) {
  return (
    <section aria-labelledby="technical-details-heading" className="bg-background py-12 sm:py-16">
      <div className="container-shell grid items-start gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-12">
        <div className="min-w-0">
          <h2 id="technical-details-heading" className="mb-5 text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          <div className="overflow-hidden rounded-md border">
            <table aria-labelledby="technical-details-heading" className="w-full table-fixed text-left text-sm leading-6 [overflow-wrap:anywhere]">
              <thead className="border-b bg-secondary">
                <tr>
                  <th scope="col" className="w-[45%] px-3 py-3 font-semibold sm:w-[35%] sm:px-5">{columns[0]}</th>
                  <th scope="col" className="px-3 py-2.5 font-semibold sm:px-5">{columns[1]}</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {rows.map(({ label, value }) => (
                  <tr key={label} className="align-top even:bg-muted/50">
                    <th scope="row" className="px-3 py-3 font-medium sm:px-5">{label}</th>
                    <td className="px-3 py-3 text-muted-foreground sm:px-5">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {note && <p className="mt-3 text-sm leading-6 text-muted-foreground">{note}</p>}
        </div>

        <aside aria-labelledby="technical-applications-heading" className="rounded-md border border-t-2 border-t-primary bg-secondary p-5 sm:p-6 lg:sticky lg:top-28">
          <h2 id="technical-applications-heading" className="text-xl font-semibold tracking-tight">
            {applicationsTitle}
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
            {applications.map((application) => (
              <li key={application} className="flex items-start gap-3">
                <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-primary" />
                {application}
              </li>
            ))}
          </ul>
          {action && (
            <div className="mt-6 border-t pt-6">
              <p className="mb-4 text-sm leading-6 text-muted-foreground">{action.description}</p>
              <ActionLink to={action.to} className="min-h-11 w-full px-4">{action.label}</ActionLink>
            </div>
          )}
        </aside>
      </div>
    </section>
  )
}
