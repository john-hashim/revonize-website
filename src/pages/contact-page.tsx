import { Mail, MapPin, Phone } from 'lucide-react'
import { useSearchParams } from 'react-router'
import { IntakeForm } from '@/components/common/intake-form'
import { courses } from '@/data/academy'
import type { FormSection } from '@/data/intake-forms'
import { products } from '@/data/products'
import { company } from '@/data/site'

const topics = [
  { value: 'engineering', label: 'Engineering consultation' },
  { value: 'spec-sheet', label: 'UAV specification sheet' },
  { value: 'academy', label: 'Academy & admissions' },
  { value: 'research', label: 'Research collaboration' },
  { value: 'general', label: 'General enquiry' },
]

const contactForm: FormSection[] = [
  {
    title: 'Your enquiry',
    description: 'Include the details and requirements relevant to your enquiry so our team can help.',
    fields: [
      { name: 'name', label: 'Full name', autoComplete: 'name', maxLength: 100 },
      { name: 'email', label: 'Email address', type: 'email', autoComplete: 'email', maxLength: 254 },
      { name: 'organisation', label: 'Organisation', optional: true, autoComplete: 'organization', maxLength: 150 },
      { name: 'topic', label: 'I’m interested in', type: 'select', options: topics.map(({ label }) => label) },
      { name: 'message', label: 'Your message', type: 'textarea', maxLength: 2000 },
    ],
  },
]

export function ContactPage() {
  const [params] = useSearchParams()
  const topic = topics.find(({ value }) => value === params.get('topic'))?.label ?? 'General enquiry'
  const product = products.find(({ slug }) => slug === params.get('product'))
  const course = courses.find(({ id }) => id === params.get('course'))
  const message = product
    ? `I would like the latest technical specification sheet for ${product.name}.`
    : course
      ? `I would like to enquire about ${course.title} (${course.duration}).`
      : ''

  return (
    <IntakeForm
      key={params.toString()}
      eyebrow="Contact"
      title="Let’s start a conversation."
      description="Tell us about your engineering project, request UAV specifications or explore a course at the Rovonize Engineering Academy."
      sections={contactForm}
      endpoint="https://formspree.io/f/moeegwoe"
      subject="Rovonize contact enquiry"
      kind="enquiry"
      defaults={{ topic, message }}
      sidebar={
        <aside aria-labelledby="direct-enquiries-heading">
          <p className="eyebrow mb-4">Direct enquiries</p>
          <h2 id="direct-enquiries-heading" className="text-2xl font-semibold">Talk to Rovonize.</h2>
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
        </aside>
      }
    />
  )
}
