import agricultureImage from '@/assets/images/industries/agriculture.webp'
import defenceImage from '@/assets/images/industries/defence-security.webp'
import infrastructureImage from '@/assets/images/industries/industry-infrastructure.webp'
import logisticsImage from '@/assets/images/industries/logistics-emergency-response.webp'

export const industries = [
  {
    title: 'Defence & Security',
    image: { src: defenceImage, alt: 'Reconnaissance UAV flying over a mountain valley' },
    description:
      'UAVs for reconnaissance, surveillance and border monitoring, plus Ibex for high-altitude cargo delivery.',
  },
  {
    title: 'Agriculture',
    image: { src: agricultureImage, alt: 'Agricultural drone spraying rows of crops' },
    description:
      'Drone applications include crop health monitoring, precision spraying and irrigation assessment. The earlier product catalogue features AgriHawk, whose current availability is unconfirmed.',
  },
  {
    title: 'Industry & Infrastructure',
    image: { src: infrastructureImage, alt: 'Inspection drone hovering beside a steel bridge' },
    description:
      'Custom drones for industrial inspection, aerial mapping and surveying, with support for thermal imaging and aerial data analysis.',
  },
  {
    title: 'Logistics & Emergency Response',
    image: { src: logisticsImage, alt: 'Cargo UAV carrying a supply crate near a rocky coastline' },
    description:
      'Intended uses include cargo delivery for remote or offshore operations, disaster relief, and search and rescue.',
  },
]
