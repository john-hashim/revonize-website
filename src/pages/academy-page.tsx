import { IntakeForm } from '@/components/common/intake-form'
import { academyForm } from '@/data/intake-forms'

export function AcademyPage() {
  return (
    <IntakeForm
      eyebrow="Academy"
      title="Rovonize Aerospace Academy"
      description="Apply for a UAV systems program. Tell us about your background, what you’ve built and what you’d like to work on."
      sections={academyForm}
      endpoint="https://formspree.io/f/xljjqnyr"
      subject="Rovonize Aerospace Academy Application"
      kind="application"
    />
  )
}
