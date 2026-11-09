import carbonImage from '@/assets/images/engineering/carbon-fibre-moulding.webp'
import carbonSmallImage from '@/assets/images/engineering/carbon-fibre-moulding-480.webp'
import pcbImage from '@/assets/images/engineering/pcb-design.webp'
import pcbSmallImage from '@/assets/images/engineering/pcb-design-480.webp'
import cncImage from '@/assets/images/engineering/cnc-manufacturing.webp'
import cncSmallImage from '@/assets/images/engineering/cnc-manufacturing-480.webp'
import ibexImage from '@/assets/images/uav/ibex.webp'
import ibexSmallImage from '@/assets/images/uav/ibex-480.webp'

export const capabilities = [
  {
    id: 'composite-manufacturing',
    category: 'Composite manufacturing',
    title: 'Carbon fibre moulding',
    image: {
      full: carbonImage,
      small: carbonSmallImage,
      alt: 'Curved carbon fibre panel beside its metal mould',
    },
    description:
      'Precision composite fabrication, mould development and lightweight structural components.',
  },
  {
    id: 'electronics-engineering',
    category: 'Electronics engineering',
    title: 'PCB design & manufacturing',
    image: {
      full: pcbImage,
      small: pcbSmallImage,
      alt: 'Assembled circuit board beside a bare copper board',
    },
    description:
      'Custom PCB design, prototyping, fabrication and electronic assembly.',
  },
  {
    id: 'precision-manufacturing',
    category: 'Precision manufacturing',
    title: 'CNC manufacturing',
    image: {
      full: cncImage,
      small: cncSmallImage,
      alt: 'Machined metal bracket clamped in a vise',
    },
    description:
      'Precision machining, custom components and rapid prototyping.',
  },
  {
    id: 'digital-engineering',
    category: 'Digital engineering',
    title: '3D design & ANSYS simulation',
    image: {
      full: ibexImage,
      small: ibexSmallImage,
      alt: '3D rendering of the IBEX helicopter UAV',
    },
    description:
      'Advanced 3D modelling, product design, structural analysis and simulation.',
  },
  {
    id: 'technical-education',
    category: 'Technical education',
    title: 'Engineering & technology courses',
    description:
      'Hands-on training in robotics, drones, electronics and technology.',
  },
]

export const engineeringWorkflow = [
  {
    title: 'Define & design',
    description:
      'Translate the application into a clear engineering brief and a digital design.',
  },
  {
    title: 'Analyse & simulate',
    description:
      'Explore structural behaviour and refine the design through simulation.',
  },
  {
    title: 'Prototype & manufacture',
    description:
      'Bring the design into the physical world with composites, electronics and precision machining.',
  },
  {
    title: 'Integrate & validate',
    description:
      'Bring subsystems together and evaluate the complete engineering solution.',
  },
]
