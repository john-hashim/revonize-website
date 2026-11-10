import { useSearchParams } from 'react-router'
import { IntakeForm } from '@/components/common/intake-form'
import { engineeringForm, serviceOptions } from '@/data/intake-forms'
import { engineeringServices } from '@/data/capabilities'

export function ConsultEngineeringPage() {
  const [params] = useSearchParams()
  const service = engineeringServices.find(({ id }) => id === params.get('service'))
  const selected = service && serviceOptions[service.id as keyof typeof serviceOptions]
  return (
    <IntakeForm
      key={service?.id ?? 'general'}
      eyebrow="Engineering consultation"
      title="Consult Engineering"
      description="Request a quote for engineering and prototyping services. Tell us what you’re building and the specifications we’ll need to review it."
      sections={engineeringForm}
      subject="Engineering & Prototyping Services RFQ"
      reviewLabel="Review project enquiry"
      defaults={selected ? { services_required: selected } : undefined}
      context={service?.title}
    />
  )
}
