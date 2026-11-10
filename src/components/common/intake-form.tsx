import { useRef, useState, type FormEvent } from 'react'
import { Link } from 'react-router'
import { ArrowRight, ArrowUpRight, ChevronRight, Copy, Download, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import type { FormField, FormSection } from '@/data/intake-forms'
import { company } from '@/data/site'
import { buildIntakeDraft, fieldLimit, validateField } from '@/lib/intake'
import { cn } from '@/lib/utils'

function FieldMarker({ optional }: { optional?: boolean }) {
  return optional
    ? <span className="font-normal text-muted-foreground">(optional)</span>
    : <span aria-hidden="true" className="text-primary">*</span>
}

function Field({ field, error, defaults }: { field: FormField; error?: string; defaults?: string[] }) {
  const { name, label, type, optional, hint, wide } = field
  const describedBy = [hint && `${name}-help`, error && `${name}-error`].filter(Boolean).join(' ') || undefined

  if (type === 'checkboxes') {
    return (
      <fieldset className="min-w-0 sm:col-span-2" aria-describedby={`${name}-help`}>
        <legend className="text-sm font-medium">{label} <FieldMarker optional={optional} /></legend>
        <p id={`${name}-help`} className="mt-1 text-sm text-muted-foreground">
          {optional ? 'Select all that apply.' : 'Select at least one option.'}
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {field.options.map((option, index) => (
            <label key={option} className="flex cursor-pointer items-start gap-3 rounded-md border bg-background p-3 text-sm leading-6 transition-colors hover:border-primary/50 has-checked:border-primary has-checked:bg-primary/5 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-primary">
              <input id={index === 0 ? name : `${name}-${index}`} type="checkbox" name={name} value={option}
                defaultChecked={defaults?.includes(option)}
                aria-describedby={`${name}-help${error ? ` ${name}-error` : ''}`}
                aria-invalid={Boolean(error) || undefined} className="mt-1 size-4 shrink-0 accent-primary" />
              {option}
            </label>
          ))}
        </div>
        {error && <p id={`${name}-error`} className="mt-2 text-sm text-destructive">{error}</p>}
      </fieldset>
    )
  }

  const attrs = {
    id: name, name, required: !optional,
    'aria-describedby': describedBy, 'aria-invalid': Boolean(error) || undefined,
  }

  return (
    <div className={cn('min-w-0 space-y-2', (wide || type === 'textarea') && 'sm:col-span-2')}>
      <Label htmlFor={name} className="block leading-5">{label} <FieldMarker optional={optional} /></Label>
      {type === 'select' ? (
        <select {...attrs} defaultValue="" className="h-12 w-full min-w-0 truncate rounded-md border border-input bg-background px-3 text-base aria-invalid:border-destructive md:text-sm">
          <option value="" disabled={!optional}>{optional ? 'Not specified' : 'Choose an option'}</option>
          {field.options.map((option) => <option key={option}>{option}</option>)}
        </select>
      ) : type === 'textarea' ? (
        <Textarea {...attrs} maxLength={fieldLimit(field)} rows={4} className="min-h-32 resize-y bg-background" />
      ) : (
        <Input {...attrs} type={type} autoComplete={field.autoComplete} min={field.min} max={field.max}
          maxLength={fieldLimit(field)} className="h-12 bg-background" />
      )}
      {hint && <p id={`${name}-help`} className="text-sm leading-5 text-muted-foreground">{hint}</p>}
      {error && <p id={`${name}-error`} className="text-sm text-destructive">{error}</p>}
    </div>
  )
}

export function IntakeForm({ sections, subject, title, description, eyebrow, reviewLabel, defaults = {}, context }: {
  sections: FormSection[]
  subject: string
  title: string
  description: string
  eyebrow: string
  reviewLabel: string
  defaults?: Record<string, string[]>
  context?: string
}) {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [draft, setDraft] = useState<string>()
  const [status, setStatus] = useState('')
  const draftRef = useRef<HTMLTextAreaElement>(null)
  const fields = sections.flatMap(({ fields }) => fields)
  const draftText = draft === undefined ? '' : `To: ${company.email}\r\nSubject: ${subject}\r\n\r\n${draft}`
  const sectionLinks = (
    <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
      {sections.map(({ title }, index) => (
        <li key={title}>
          <a href={`#form-section-${index}`} className="group flex items-center gap-3 rounded-md py-2 text-sm leading-5 hover:text-primary">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full border bg-muted text-xs font-medium group-hover:border-primary">{String(index + 1).padStart(2, '0')}</span>
            {title}
          </a>
        </li>
      ))}
    </ol>
  )

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const nextErrors: Record<string, string> = {}
    for (const field of fields) {
      const control = form.elements.namedItem(field.name)
      const nativeError = control instanceof HTMLInputElement || control instanceof HTMLSelectElement || control instanceof HTMLTextAreaElement
        ? control.validationMessage : ''
      const error = validateField(field, data.getAll(field.name).map(String), nativeError)
      if (error) nextErrors[field.name] = error
    }
    setErrors(nextErrors)
    setStatus('')
    if (Object.keys(nextErrors).length) {
      setDraft(undefined)
      document.getElementById(Object.keys(nextErrors)[0])?.focus()
      return
    }
    setDraft(buildIntakeDraft(sections, data))
    requestAnimationFrame(() => draftRef.current?.focus())
  }

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(draftText)
      setStatus('Draft copied. Paste it into an email to send to our team.')
    } catch {
      draftRef.current?.focus()
      draftRef.current?.select()
      setStatus('Select and copy the draft below, then paste it into your email app.')
    }
  }

  function downloadDraft() {
    const url = URL.createObjectURL(new Blob([draftText], { type: 'text/plain;charset=utf-8' }))
    const link = document.createElement('a')
    link.href = url
    link.download = `${eyebrow.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-enquiry.txt`
    link.click()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
    setStatus('Draft downloaded. Send its contents to our team by email.')
  }

  return (
    <>
      <section className="border-b bg-muted py-8 sm:py-12">
        <div className="container-shell">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight aria-hidden="true" className="size-3" />
            <span aria-current="page">{eyebrow}</span>
          </nav>
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h1 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">{title}</h1>
          <p className="body-copy mt-4 max-w-2xl">{description}</p>
        </div>
      </section>
      <div className="container-shell grid items-start gap-8 py-10 sm:py-14 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-12">
        <aside className="hidden lg:sticky lg:top-28 lg:block">
          <p className="eyebrow mb-4">Your {eyebrow === 'Academy' ? 'application' : 'project brief'}</p>
          <nav aria-label="Form sections">
            {sectionLinks}
          </nav>
          <div className="mt-6 border-t pt-6 text-sm leading-6 text-muted-foreground">
            <p className="mb-2 flex items-center gap-2 font-medium text-foreground"><Mail aria-hidden="true" className="size-4 text-primary" /> Review, then send</p>
            <p>Review your draft before opening your email app. Your enquiry reaches us only when you send the email.</p>
            <a href={`mailto:${company.email}`} className="mt-3 inline-block break-all text-primary underline underline-offset-4">{company.email}</a>
          </div>
        </aside>
        <form aria-label={subject} noValidate onSubmit={handleSubmit}
          onChange={(event) => {
            setDraft(undefined)
            setStatus('')
            const input = event.target
            if (!(input instanceof HTMLInputElement || input instanceof HTMLSelectElement || input instanceof HTMLTextAreaElement)) return
            const name = input.name
            setErrors((current) => {
              const next = { ...current }
              delete next[name]
              return next
            })
          }}
          className="min-w-0 space-y-6">
          <details className="rounded-md border p-4 lg:hidden">
            <summary className="cursor-pointer text-sm font-medium focus-visible:outline-2 focus-visible:outline-primary">In this form · {sections.length} sections</summary>
            <nav aria-label="Form sections" className="mt-3">{sectionLinks}</nav>
          </details>
          <p className="text-sm leading-6 text-muted-foreground lg:hidden">Review your draft, then send it from your email app. Nothing is sent by this website.</p>
          <p className="text-sm leading-6 text-muted-foreground">Fields marked <span className="text-primary">*</span> are required.</p>
          {context && <p className="rounded-md border border-primary/20 bg-primary/5 px-4 py-3 text-sm leading-6">Enquiring about <strong>{context}</strong>. The relevant services are selected below; you can change them.</p>}
          {Object.keys(errors).length > 0 && <p role="alert" className="rounded-md border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">Please check {Object.keys(errors).length} {Object.keys(errors).length === 1 ? 'field' : 'fields'} below before reviewing your draft.</p>}
          {sections.map(({ title, description, fields }, index) => (
            <section key={title} id={`form-section-${index}`} aria-labelledby={`form-heading-${index}`} className="scroll-mt-28 rounded-md border bg-background p-5 sm:p-7">
              <div className="mb-6 border-b pb-5">
                <p className="eyebrow mb-2">Section {String(index + 1).padStart(2, '0')}</p>
                <h2 id={`form-heading-${index}`} className="text-xl font-semibold tracking-tight">{title}</h2>
                {description && <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>}
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {fields.map((field) => <Field key={field.name} field={field} error={errors[field.name]} defaults={defaults[field.name]} />)}
              </div>
            </section>
          ))}
          <div className="flex flex-wrap items-center gap-4">
            <Button type="submit" className="min-h-12 px-5">{reviewLabel} <ArrowRight aria-hidden="true" /></Button>
            <p className="text-sm text-muted-foreground">Nothing is sent at this step.</p>
          </div>
          {draft !== undefined && (
            <section aria-labelledby="draft-heading" className="rounded-md border border-primary/30 bg-muted p-5 sm:p-7">
              <h2 id="draft-heading" className="text-xl font-semibold">Your email draft is ready</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">Review the details below, then send from your email app. If the app doesn’t open or the message is cut short, copy or download the complete draft.</p>
              <Label htmlFor="email-draft" className="mb-2 mt-5 block">Email draft</Label>
              <Textarea id="email-draft" ref={draftRef} readOnly value={draftText} className="h-64 field-sizing-fixed resize-y bg-background text-sm leading-6" />
              <div className="mt-5 flex flex-wrap gap-3">
                <Button asChild className="min-h-11 px-4">
                  <a href={`mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(draft)}`} onClick={() => setStatus('Send the draft from your email app to finish. Nothing has been sent by this website.')}>Open email draft <ArrowUpRight aria-hidden="true" /></a>
                </Button>
                <Button type="button" variant="secondary" onClick={copyDraft} className="min-h-11 px-4"><Copy aria-hidden="true" /> Copy draft</Button>
                <Button type="button" variant="secondary" onClick={downloadDraft} className="min-h-11 px-4"><Download aria-hidden="true" /> Download draft</Button>
              </div>
            </section>
          )}
          <p role="status" className="text-sm leading-6 text-muted-foreground">{status}</p>
        </form>
      </div>
    </>
  )
}
