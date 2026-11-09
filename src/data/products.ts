import spectraImage from '@/assets/images/uav/spectra.webp'
import spectraSmallImage from '@/assets/images/uav/spectra-480.webp'
import veekshaImage from '@/assets/images/uav/veeksha.webp'
import veekshaSmallImage from '@/assets/images/uav/veeksha-480.webp'
import ibexImage from '@/assets/images/uav/ibex.webp'
import ibexSmallImage from '@/assets/images/uav/ibex-480.webp'
import stemImage from '@/assets/images/uav/stem.webp'
import stemSmallImage from '@/assets/images/uav/stem-480.webp'

export const products = [
  {
    slug: 'spectra',
    name: 'Spectra',
    image: { full: spectraImage, small: spectraSmallImage },
    format: 'Foldable quad',
    application: 'Reconnaissance',
    description:
      'A foldable quadrotor platform for reconnaissance and surveillance applications.',
    focus: [
      'Foldable airframe',
      'Aerial observation',
      'Mission-led integration',
    ],
  },
  {
    slug: 'veeksha',
    name: 'Veeksha',
    image: { full: veekshaImage, small: veekshaSmallImage },
    format: 'Fixed-wing',
    application: 'Reconnaissance',
    description:
      'A fixed-wing UAV platform for aerial reconnaissance and surveillance missions.',
    focus: [
      'Fixed-wing architecture',
      'Aerial surveillance',
      'Application-specific payloads',
    ],
  },
  {
    slug: 'ibex',
    name: 'IBEX',
    image: { full: ibexImage, small: ibexSmallImage },
    format: 'Helicopter',
    application: 'Reconnaissance',
    description:
      'A helicopter UAV platform developed around reconnaissance applications.',
    focus: [
      'Rotary-wing architecture',
      'Reconnaissance applications',
      'System integration',
    ],
  },
  {
    slug: 'stem',
    name: 'STEM',
    image: { full: stemImage, small: stemSmallImage },
    format: 'Quadrotor',
    application: 'Education',
    description:
      'A quadrotor platform for exploring drone technology through practical learning.',
    focus: [
      'Hands-on learning',
      'Drone fundamentals',
      'Educational applications',
    ],
  },
]
