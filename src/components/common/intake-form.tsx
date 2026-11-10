import { useRef, useState, type FormEvent, type ReactNode } from 'react'
import { Link } from 'react-router'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import type { FormField, FormSection } from '@/data/intake-forms'
import { fieldLimit, validateField } from '@/lib/intake'
import { cn } from '@/lib/utils'

function FieldMarker({ optional }: { optional?: boolean }) {
  return optional
    ? <span className="font-normal text-muted-foreground">(optional)</span>
    : <span aria-hidden="true" className="text-primary">*</span>
}

const borderFocus = 'shadow-none transition-colors focus:border-primary focus-visible:outline-none focus-visible:ring-0'

function Field({ field, error, defaults }: { field: FormField; error?: string; defaults?: string | string[] }) {
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
            <label key={option} className="flex cursor-pointer items-start gap-3 rounded-md border bg-background p-3 text-sm leading-6 transition-colors hover:border-primary/50 has-checked:border-primary has-checked:bg-primary/5 has-focus-visible:border-foreground">
              <input id={index === 0 ? name : `${name}-${index}`} type="checkbox" name={name} value={option}
                defaultChecked={Array.isArray(defaults) && defaults.includes(option)}
                aria-describedby={`${name}-help${error ? ` ${name}-error` : ''}`}
                aria-invalid={Boolean(error) || undefined} className="mt-1 size-4 shrink-0 accent-primary focus-visible:outline-none" />
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
    defaultValue: typeof defaults === 'string' ? defaults : undefined,
    'aria-describedby': describedBy, 'aria-invalid': Boolean(error) || undefined,
  }

  return (
    <div className={cn('min-w-0 space-y-2', (wide || type === 'textarea') && 'sm:col-span-2')}>
      <Label htmlFor={name} className="block leading-5">{label} <FieldMarker optional={optional} /></Label>
      {type === 'select' ? (
        <select {...attrs} defaultValue={attrs.defaultValue ?? ''} className={cn('h-12 w-full min-w-0 truncate rounded-md border border-input bg-background px-3 text-base aria-invalid:border-destructive md:text-sm', borderFocus)}>
          <option value="" disabled={!optional}>{optional ? 'Not specified' : 'Choose an option'}</option>
          {field.options.map((option) => <option key={option}>{option}</option>)}
        </select>
      ) : type === 'textarea' ? (
        <Textarea {...attrs} maxLength={fieldLimit(field)} rows={4} className={cn('min-h-32 resize-y bg-background', borderFocus)} />
      ) : (
        <Input {...attrs} type={type} autoComplete={field.autoComplete} min={field.min} max={field.max}
          maxLength={fieldLimit(field)} className={cn('h-12 bg-background', borderFocus)} />
      )}
      {hint && <p id={`${name}-help`} className="text-sm leading-5 text-muted-foreground">{hint}</p>}
      {error && <p id={`${name}-error`} className="text-sm text-destructive">{error}</p>}
    </div>
  )
}

const formCopy = {
  enquiry: {
    sidebarTitle: 'Your project brief',
    guidance: 'Include all project requirements so we can scope the work and prepare your quote.',
    submitLabel: 'Send enquiry',
    error: 'Check the highlighted fields before sending your enquiry.',
    confirmation: 'Enquiry sent successfully',
    restartLabel: 'Send another enquiry',
  },
  application: {
    sidebarTitle: 'Your application',
    guidance: 'Include your relevant projects, experience and availability so we can assess your application.',
    submitLabel: 'Submit application',
    error: 'Check the highlighted fields before submitting your application.',
    confirmation: 'Application submitted successfully',
    restartLabel: 'Start another application',
  },
}

export function IntakeForm({ sections, endpoint, subject, title, description, eyebrow, defaults = {}, context, kind, sidebar }: {
  sections: FormSection[]
  endpoint: string
  subject: string
  title: string
  description: string
  eyebrow: string
  defaults?: Record<string, string | string[]>
  context?: string
  kind: keyof typeof formCopy
  sidebar?: ReactNode
}) {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [activeSection, setActiveSection] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionError, setSubmissionError] = useState('')
  const submittingRef = useRef(false)
  const feedbackRef = useRef<HTMLParagraphElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const copy = formCopy[kind]
  const feedback = submissionError || (Object.keys(errors).length > 0 ? copy.error : '')
  const fields = sections.flatMap(({ fields }) => fields)
  const hasSectionNav = sections.length > 1
  const sectionLinks = hasSectionNav && (
    <ol className="relative grid sm:grid-cols-2 lg:auto-rows-fr lg:grid-cols-1 lg:border-l-2">
      {sections.map(({ title }, index) => (
        <li key={title}>
          {index === 0 && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-0 -left-0.5 hidden w-0.5 bg-primary motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out lg:block"
              style={{ height: `${100 / sections.length}%`, transform: `translateY(${activeSection * 100}%)` }}
            />
          )}
          <a href={`#form-section-${index}`}
            aria-current={activeSection === index ? 'location' : undefined}
            onClick={() => setActiveSection(index)}
            className={cn(
              'flex items-center border-l-2 py-2 pl-3 text-sm leading-5 hover:text-primary motion-safe:transition-colors lg:h-full lg:border-l-0',
              activeSection === index ? 'border-primary font-semibold' : 'text-muted-foreground',
            )}>
            {title}
          </a>
        </li>
      ))}
    </ol>
  )

  function focusFeedback() {
    requestAnimationFrame(() => {
      const feedback = feedbackRef.current
      feedback?.focus({ preventScroll: true })
      feedback?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
        block: 'start',
      })
    })
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (submittingRef.current) return

    setSubmissionError('')
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
    const firstError = Object.keys(nextErrors)[0]
    if (firstError) {
      setActiveSection(sections.findIndex(({ fields }) => fields.some(({ name }) => name === firstError)))
      focusFeedback()
      return
    }

    const emailField = fields.find(({ type }) => type === 'email')
    const email = emailField && data.get(emailField.name)
    if (typeof email === 'string') data.set('email', email.trim())

    submittingRef.current = true
    setIsSubmitting(true)
    const retryMessage = 'We couldn’t submit this form. Please try again.'
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (response.ok) {
        setSubmitted(true)
        requestAnimationFrame(() => headingRef.current?.focus())
      } else {
        setSubmissionError(response.status === 429 ? 'Too many submissions. Please wait a minute and try again.' : retryMessage)
        focusFeedback()
      }
    } catch {
      setSubmissionError(retryMessage)
      focusFeedback()
    } finally {
      submittingRef.current = false
      setIsSubmitting(false)
    }
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
      <div className={cn(
        'container-shell py-10 sm:py-14',
        sidebar && 'grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20',
        !sidebar && !submitted && hasSectionNav && 'grid items-start gap-8 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-12',
      )}>
        {sidebar}
        {!sidebar && !submitted && hasSectionNav && <aside className="hidden lg:sticky lg:top-28 lg:block">
          <p className="eyebrow mb-4">{copy.sidebarTitle}</p>
          <nav aria-label="Form sections">
            {sectionLinks}
          </nav>
          <p className="mt-6 border-t pt-6 text-sm leading-6 text-muted-foreground">{copy.guidance}</p>
        </aside>}
        {submitted ? (
          <section className={cn('rounded-md border bg-background p-6 sm:p-8', !sidebar && 'mx-auto max-w-2xl')}>
            <h2 ref={headingRef} tabIndex={-1} className="text-xl font-semibold">{copy.confirmation}</h2>
            <Button type="button" className="mt-6 min-h-12 px-5" onClick={() => {
              setSubmitted(false)
              setActiveSection(0)
              requestAnimationFrame(() => document.getElementById(fields[0].name)?.focus())
            }}>{copy.restartLabel} <ArrowRight aria-hidden="true" /></Button>
          </section>
        ) : (
          <form aria-label={subject} action={endpoint} method="post" data-smooth-form-sections noValidate onSubmit={handleSubmit}
            onChange={(event) => {
              const input = event.target
              if (!(input instanceof HTMLInputElement || input instanceof HTMLSelectElement || input instanceof HTMLTextAreaElement)) return
              const name = input.name
              setErrors((current) => {
                const next = { ...current }
                delete next[name]
                return next
              })
            }}
            className={cn('min-w-0 space-y-6', !sidebar && !hasSectionNav && 'mx-auto max-w-2xl')}>
            <input type="hidden" name="subject" value={subject} />
            {feedback && (
              <p ref={feedbackRef} role="alert" tabIndex={-1} className="text-sm font-medium text-destructive outline-none">{feedback}</p>
            )}
            {hasSectionNav && <>
              <details className="rounded-md border p-4 lg:hidden">
                <summary className="cursor-pointer text-sm font-medium focus-visible:outline-2 focus-visible:outline-primary">In this form · {sections.length} sections</summary>
                <nav aria-label="Form sections" className="mt-3">{sectionLinks}</nav>
              </details>
              <p className="text-sm leading-6 text-muted-foreground lg:hidden">{copy.guidance}</p>
            </>}
            {context && <p className="rounded-md border border-primary/20 bg-primary/5 px-4 py-3 text-sm leading-6">Enquiring about <strong>{context}</strong>. The relevant services are selected below; you can change them.</p>}
            {sections.map(({ title, description, fields }, index) => (
              <section key={title} id={`form-section-${index}`} aria-labelledby={`form-heading-${index}`}
                onFocus={() => setActiveSection(index)}
                className="rounded-md border bg-background p-5 sm:p-7">
                <div className="mb-6 border-b pb-5">
                  <h2 id={`form-heading-${index}`} className="text-xl font-semibold tracking-tight">{title}</h2>
                  {description && <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>}
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  {fields.map((field) => <Field key={field.name} field={field} error={errors[field.name]} defaults={defaults[field.name]} />)}
                </div>
              </section>
            ))}
            <Button type="submit" disabled={isSubmitting} className="min-h-12 px-5">
              {isSubmitting ? 'Submitting…' : copy.submitLabel} <ArrowRight aria-hidden="true" />
            </Button>
          </form>
        )}
      </div>
    </>
  )
}
