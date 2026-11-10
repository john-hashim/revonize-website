export type FormField = {
  name: string
  label: string
  optional?: boolean
  hint?: string
  wide?: boolean
  maxLength?: number
} & (
  | {
      type?: 'text' | 'email' | 'tel' | 'url' | 'number'
      autoComplete?: string
      min?: number
      max?: number
    }
  | { type: 'select'; options: string[] }
  | { type: 'checkboxes'; options: string[] }
  | { type: 'textarea' }
)

export type FormSection = { title: string; description?: string; fields: FormField[] }

// Share the option labels between the form and service-detail entry points.
export const serviceOptions = {
  'composite-manufacturing': ['Carbon / Glass Fibre Composite Moulding (CFRP/GFRP)'],
  'propeller-design': ['Custom Propeller Design & Dyno Testing'],
  'precision-manufacturing': ['5-Axis Precision CNC Machining'],
  'digital-engineering': ['ANSYS FEA Structural Stress & Dynamic Flutter Analysis', 'ANSYS CFD Aerodynamic & Thermal Simulation'],
  'electronics-engineering': ['Custom Avionics, PDB & Multi-Layer PCBA Design'],
  'additive-prototyping': ['Additive 3D Prototyping (Carbon Nylon / High-Temp Resin)'],
} satisfies Record<string, string[]>

export const engineeringForm: FormSection[] = [
  {
    title: 'Client & entity details',
    description: 'Who should we contact about your project?',
    fields: [
      { name: 'full_name', label: 'Primary contact name', autoComplete: 'name' },
      { name: 'company_name', label: 'Organization, defense entity, university or startup', autoComplete: 'organization' },
      { name: 'work_email', label: 'Corporate or institutional email', type: 'email', autoComplete: 'email' },
      { name: 'phone_number', label: 'Phone / WhatsApp', type: 'tel', autoComplete: 'tel', hint: 'Include your country code.' },
      {
        name: 'nda_required',
        label: 'Do you need an NDA?',
        type: 'select',
        wide: true,
        options: ['Yes (send Rovonize mutual NDA)', 'No (standard inquiry)'],
      },
    ],
  },
  {
    title: 'Project scope & technical services',
    description: 'Choose the support you need. You can select more than one service.',
    fields: [
      {
        name: 'services_required',
        label: 'Services required',
        type: 'checkboxes',
        options: [
          ...Object.values(serviceOptions).flat(),
          'Turnkey Full-Airframe Prototyping',
        ],
      },
      {
        name: 'target_material',
        label: 'Target material',
        optional: true,
        hint: 'For example: Toray 3K Carbon, Al 7075-T651, Delrin, PA-CF, Custom or Unsure.',
      },
      {
        name: 'quantity_type',
        label: 'Quantity or engagement type',
        type: 'select',
        options: [
          'Single Functional Prototype (1 unit)',
          'Testing Batch (2–5 units)',
          'Pre-Production Batch (6–20 units)',
          'Contract R&D Only',
        ],
      },
    ],
  },
  {
    title: 'Engineering parameters & specifications',
    description: 'Help us understand your constraints, schedule and design requirements.',
    fields: [
      {
        name: 'project_timeline',
        label: 'Project timeline',
        type: 'select',
        options: ['Urgent (< 3 weeks)', 'Standard (1–2 months)', 'Quarterly R&D (> 2 months)'],
      },
      {
        name: 'target_budget_bracket',
        label: 'Target budget',
        type: 'select',
        optional: true,
        options: ['< ₹1 lakh', '₹1 lakh – ₹5 lakhs', '₹5 lakhs – ₹15 lakhs', '> ₹15 lakhs', 'Government / Institutional Grant'],
      },
      {
        name: 'design_link',
        label: 'CAD / spec link',
        type: 'url',
        optional: true,
        wide: true,
        hint: 'Share a Google Drive, Dropbox or OneDrive link that our team can open to view your STEP, IGES or PDF files.',
      },
      {
        name: 'project_brief',
        label: 'Technical requirements & critical tolerances',
        type: 'textarea',
        hint: 'Describe load cases, mass limits, target RPM or thrust, or the operating environment.',
      },
    ],
  },
]

export const academyForm: FormSection[] = [
  {
    title: 'Applicant identification',
    description: 'Tell us a little about yourself and how to reach you.',
    fields: [
      { name: 'applicant_name', label: 'Full name', autoComplete: 'name' },
      { name: 'applicant_email', label: 'Email address', type: 'email', autoComplete: 'email' },
      { name: 'phone_number', label: 'Phone / WhatsApp', type: 'tel', autoComplete: 'tel' },
      { name: 'current_city', label: 'Current city', autoComplete: 'address-level2' },
    ],
  },
  {
    title: 'Academic & professional background',
    description: 'Share your current education or professional experience.',
    fields: [
      {
        name: 'applicant_status',
        label: 'Current status',
        type: 'select',
        options: ['Undergraduate Student', 'Recent Graduate', 'Postgraduate / Research Scholar', 'Working Professional'],
      },
      { name: 'institution_name', label: 'College, university or current employer', autoComplete: 'organization' },
      {
        name: 'primary_discipline',
        label: 'Primary discipline',
        type: 'select',
        options: [
          'Aeronautical / Aerospace Engineering',
          'Mechanical / Mechatronics',
          'Electronics & Embedded Systems (ECE/EEE)',
          'Computer Science / Robotics',
          'Other',
        ],
      },
      { name: 'graduation_year', label: 'Year of completion', type: 'number', min: 1900, max: new Date().getFullYear() + 10, hint: 'Enter your actual or expected completion year.' },
    ],
  },
  {
    title: 'Program selection & availability',
    description: 'Choose the program and schedule that suit you.',
    fields: [
      {
        name: 'program_track',
        label: 'Program track',
        type: 'select',
        wide: true,
        options: [
          '1-Year Rapid UAV Systems Fellowship',
          'Extended Integrated UAV Systems & Aerostructures Apprenticeship',
        ],
      },
      {
        name: 'start_availability',
        label: 'When can you start?',
        type: 'select',
        options: ['Immediate (within 2 weeks)', 'Next Month', 'Next Academic Term'],
      },
      {
        name: 'commitment_type',
        label: 'Availability',
        type: 'select',
        options: ['Full-time On-site (Kochi Lab)', 'Part-time / Hybrid'],
      },
    ],
  },
  {
    title: 'Technical validation & portfolio',
    description: 'Show us what you enjoy building and what you want to learn.',
    fields: [
      {
        name: 'primary_interest_areas',
        label: 'Primary interest areas',
        type: 'checkboxes',
        options: [
          'Composite Airframe Layup & Vacuum Moulding',
          'Aero-Propeller Design & Dyno Testing',
          'CAD Modeling & ANSYS Multi-Physics Simulation',
          'Autopilot Tuning (MAVLink/ArduPilot) & Flight Operations',
          'Embedded Hardware & PCB Design',
        ],
      },
      {
        name: 'portfolio_link',
        label: 'Portfolio / profile link',
        type: 'url',
        optional: true,
        wide: true,
        hint: 'Share your LinkedIn, GitHub or a public Google Drive folder of projects.',
      },
      {
        name: 'technical_experience',
        label: 'Relevant hardware / software projects',
        type: 'textarea',
        hint: 'Describe your hands-on experience with CAD, 3D printers, composites, microcontrollers or drone flight testing.',
      },
      {
        name: 'statement_of_purpose',
        label: 'Why Rovonize?',
        type: 'textarea',
        hint: 'What specific systems do you want to build during this program?',
      },
    ],
  },
]
