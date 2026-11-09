import agricultureImage from '@/assets/images/industries/agriculture.webp'
import defenceImage from '@/assets/images/industries/defence-security.webp'
import infrastructureImage from '@/assets/images/industries/industry-infrastructure.webp'
import logisticsImage from '@/assets/images/industries/logistics-emergency-response.webp'

const ibexUrl = 'https://rovonize.com/products/ibex-high-altitude-logistics-uas/'

export const industries = [
  {
    title: 'Defence & Security',
    image: { src: defenceImage, alt: 'Reconnaissance UAV flying over a mountain valley' },
    description:
      'UAVs for reconnaissance, surveillance and border monitoring, plus the IBEX concept for high-altitude cargo delivery.',
    learnMore: { label: 'IBEX', to: ibexUrl },
    related: { label: 'Veeksha', to: '/products/veeksha' },
  },
  {
    title: 'Agriculture',
    image: { src: agricultureImage, alt: 'Agricultural drone spraying rows of crops' },
    description:
      'Drone applications include crop health monitoring, precision spraying and irrigation assessment. The earlier product catalogue features AgriHawk, whose current availability is unconfirmed.',
    learnMore: { label: 'AgriHawk', to: 'https://rovonize.com/products/agrihawk/' },
  },
  {
    title: 'Industry & Infrastructure',
    image: { src: infrastructureImage, alt: 'Inspection drone hovering beside a steel bridge' },
    description:
      'Custom drones for industrial inspection, aerial mapping and surveying, with support for thermal imaging and aerial data analysis.',
    learnMore: { label: 'Services', to: 'https://rovonize.com/services/' },
  },
  {
    title: 'Logistics & Emergency Response',
    image: { src: logisticsImage, alt: 'Cargo UAV carrying a supply crate near a rocky coastline' },
    description:
      'Intended uses include cargo delivery for remote or offshore operations, disaster relief, and search and rescue.',
    learnMore: { label: 'IBEX', to: ibexUrl },
    related: { label: 'EAGLE PRO', to: 'https://rovonize.com/products/eagle-pro/' },
  },
]
