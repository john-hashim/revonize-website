import spectraImage from '@/assets/images/uav/spectra.webp'
import spectraSmallImage from '@/assets/images/uav/spectra-480.webp'
import veekshaImage from '@/assets/images/uav/veeksha.webp'
import veekshaSmallImage from '@/assets/images/uav/veeksha-480.webp'
import ibexImage from '@/assets/images/uav/ibex.webp'
import ibexSmallImage from '@/assets/images/uav/ibex-480.webp'
import stemImage from '@/assets/images/uav/stem.webp'
import stemSmallImage from '@/assets/images/uav/stem-480.webp'
import spectraPreview from '@/assets/images/uav/spectra-hero.webp'
import veekshaPreview from '@/assets/images/uav/veeksha-hero.webp'
import ibexPreview from '@/assets/images/uav/ibex-hero.webp'
import stemPreview from '@/assets/images/uav/stem-hero.webp'

export const products = [
  {
    slug: 'spectra',
    name: 'Spectra',
    image: { full: spectraImage, small: spectraSmallImage },
    preview: spectraPreview,
    format: 'Foldable quad',
    application: 'Reconnaissance',
    description:
      'A foldable quadrotor platform for reconnaissance and surveillance applications.',
    details: [
      {
        title: 'Foldable quadrotor',
        description:
          'The four arms fold for transport and open into the flight position for deployment.',
      },
      {
        title: 'Aerial observation',
        description:
          'Designed for reconnaissance and surveillance where a compact quadrotor suits the task.',
      },
      {
        title: 'Mission integration',
        description:
          'Discuss the observation task and payload requirements with Rovonize to identify a suitable configuration.',
      },
    ],
  },
  {
    slug: 'veeksha',
    name: 'Veeksha',
    image: { full: veekshaImage, small: veekshaSmallImage },
    preview: veekshaPreview,
    format: 'Fixed-wing',
    application: 'Reconnaissance',
    description:
      'A fixed-wing UAV platform for aerial reconnaissance and surveillance missions.',
    details: [
      {
        title: 'Fixed-wing airframe',
        description:
          'A fixed-wing UAV designed for reconnaissance and surveillance over an area of interest.',
      },
      {
        title: 'Reconnaissance and surveillance',
        description:
          'Intended for aerial observation where the mission calls for a fixed-wing platform.',
      },
      {
        title: 'Payload configuration',
        description:
          'Share your observation and sensor requirements so the team can advise on the appropriate configuration.',
      },
    ],
  },
  {
    slug: 'ibex',
    name: 'IBEX',
    image: { full: ibexImage, small: ibexSmallImage },
    preview: ibexPreview,
    format: 'Helicopter',
    application: 'Reconnaissance',
    description:
      'A helicopter UAV platform developed around reconnaissance applications.',
    details: [
      {
        title: 'Helicopter airframe',
        description:
          'A rotary-wing UAV built around a helicopter layout, with a main rotor, tail boom and landing skids in the illustrated configuration.',
      },
      {
        title: 'Reconnaissance role',
        description:
          'Designed for aerial observation and reconnaissance missions that call for a helicopter UAV.',
      },
      {
        title: 'System integration',
        description:
          'Discuss mission requirements and observation equipment with the team to determine the right configuration.',
      },
    ],
  },
  {
    slug: 'stem',
    name: 'STEM',
    image: { full: stemImage, small: stemSmallImage },
    preview: stemPreview,
    format: 'Quadrotor',
    application: 'Education',
    description:
      'A quadrotor platform for exploring drone technology through practical learning.',
    details: [
      {
        title: 'Hands-on drone education',
        description:
          'A practical platform for exploring how a quadrotor is built and how its major components work together.',
      },
      {
        title: 'Flight-system fundamentals',
        description:
          'Use the open-frame design to see the motors, propellers and onboard electronics that make up a quadrotor.',
      },
      {
        title: 'Classroom and workshop use',
        description:
          'Designed to support practical learning in drone technology, with the activities tailored to the learners and setting.',
      },
    ],
  },
]
