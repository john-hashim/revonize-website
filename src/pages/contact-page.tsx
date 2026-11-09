import { useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router'
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react'
import { PageIntro } from '@/components/common/page-intro'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { company } from '@/data/site'
import { products } from '@/data/products'
import { courses } from '@/data/academy'

const topics = [
  { value: 'engineering', label: 'Engineering consultation' },
  { value: 'spec-sheet', label: 'UAV specification sheet' },
  { value: 'academy', label: 'Academy & admissions' },
  { value: 'research', label: 'Research collaboration' },
  { value: 'general', label: 'General enquiry' },
]

export function ContactPage() {
  const [params] = useSearchParams()
  const requestedTopic = params.get('topic')
  const topic = topics.some((item) => item.value === requestedTopic)
    ? requestedTopic!
    : 'general'
  const product = products.find((item) => item.slug === params.get('product'))
  const course = courses.find((item) => item.id === params.get('course'))
  const context = product
    ? `I would like the latest technical specification sheet for ${product.name}.`
    : course
      ? `I would like to enquire about ${course.title} (${course.duration}).`
      : ''
  const [emailPrepared, setEmailPrepared] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = `Rovonize enquiry: ${topics.find((item) => item.value === data.get('topic'))?.label ?? 'General enquiry'}`
    const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nOrganisation: ${data.get('organisation') || 'Not specified'}\n\n${data.get('message')}`
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setEmailPrepared(true)
  }

  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Let’s start a conversation."
        description="Tell us about your engineering project, request UAV specifications or explore a course at the Rovonize Engineering Academy."
      />
      <section className="section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="eyebrow mb-4">Direct enquiries</p>
            <h2 className="text-2xl font-semibold">Talk to Rovonize.</h2>
            <div className="mt-8 space-y-7">
              <div className="flex gap-4">
                <Mail
                  className="mt-1 size-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="mb-2 text-sm font-semibold">Email</h3>
                  <a
                    className="break-all text-sm text-muted-foreground hover:text-primary"
                    href={`mailto:${company.email}`}
                  >
                    {company.email}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone
                  className="mt-1 size-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="mb-2 text-sm font-semibold">Phone</h3>
                  {company.phones.map((phone) => (
                    <a
                      key={phone.href}
                      href={phone.href}
                      className="block py-1 text-sm text-muted-foreground hover:text-primary"
                    >
                      {phone.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin
                  className="mt-1 size-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="mb-2 text-sm font-semibold">
                    Research centre
                  </h3>
                  <address className="max-w-xs text-sm not-italic leading-7 text-muted-foreground">
                    {company.address}
                  </address>
                </div>
              </div>
            </div>
          </div>
          <form
            key={params.toString()}
            onSubmit={handleSubmit}
            onChange={() => setEmailPrepared(false)}
            className="space-y-6 rounded-md border bg-muted p-5 sm:p-8"
          >
            <div>
              <h2 className="text-xl font-semibold">Prepare an enquiry</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                This form opens your email app with a draft. Send the email
                there to reach our team.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Full name <span aria-hidden="true">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={100}
                  className="h-11 bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email address <span aria-hidden="true">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  className="h-11 bg-background"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="organisation">
                Organisation{' '}
                <span className="font-normal text-muted-foreground">
                  (optional)
                </span>
              </Label>
              <Input
                id="organisation"
                name="organisation"
                autoComplete="organization"
                maxLength={150}
                className="h-11 bg-background"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="topic">I’m interested in</Label>
              <select
                id="topic"
                name="topic"
                defaultValue={topic}
                className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm"
              >
                {topics.map((item) => (
                  <option value={item.value} key={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">
                Your message <span aria-hidden="true">*</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                maxLength={2000}
                defaultValue={context}
                rows={5}
                className="min-h-36 resize-y bg-background"
                placeholder="Tell us about your requirements or the course you’re interested in."
              />
            </div>
            <Button type="submit" className="min-h-11">
              Open email draft <ArrowUpRight aria-hidden="true" />
            </Button>
            <p
              role="status"
              className="text-sm leading-6 text-muted-foreground"
            >
              {emailPrepared
                ? `Email draft requested. If your email app didn’t open, email ${company.email} directly.`
                : 'Fields marked * are required. Your enquiry is sent only when you send the email.'}
            </p>
          </form>
        </div>
      </section>
    </>
  )
}
