import carbonImage from '@/assets/images/engineering/carbon-fibre-moulding.webp'
import carbonSmallImage from '@/assets/images/engineering/carbon-fibre-moulding-480.webp'
import pcbImage from '@/assets/images/engineering/pcb-design.webp'
import pcbSmallImage from '@/assets/images/engineering/pcb-design-480.webp'
import cncImage from '@/assets/images/engineering/cnc-manufacturing.webp'
import cncSmallImage from '@/assets/images/engineering/cnc-manufacturing-480.webp'
import ibexImage from '@/assets/images/uav/ibex.webp'
import ibexSmallImage from '@/assets/images/uav/ibex-480.webp'
import carbonPreview from '@/assets/images/engineering/carbon-fibre-service.webp'
import pcbPreview from '@/assets/images/engineering/pcb-service.webp'
import cncPreview from '@/assets/images/engineering/cnc-service.webp'
import simulationPreview from '@/assets/images/engineering/structural-simulation-service.webp'

export const engineeringServices = [
  {
    id: 'composite-manufacturing',
    category: 'Composite manufacturing',
    title: 'Carbon fibre moulding',
    image: {
      full: carbonImage,
      small: carbonSmallImage,
      alt: 'Curved carbon fibre panel beside its metal mould',
    },
    preview: {
      src: carbonPreview,
      alt: 'Curved carbon fibre shell beside its aluminium mould',
    },
    description:
      'Develop lightweight carbon fibre parts, from the mould to the finished component.',
    highlights: [
      {
        title: 'Mould design and development',
        description: 'Develop tooling around the geometry of the part and how it will release from the mould.',
      },
      {
        title: 'Precision carbon fibre fabrication',
        description: 'Shape carbon fibre into moulded parts for prototypes and structural applications.',
      },
      {
        title: 'Lightweight structural components',
        description: 'Develop components around the weight, stiffness and fit requirements of the assembly.',
      },
    ],
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
    preview: {
      src: pcbPreview,
      alt: 'Assembled circuit board beside a matching bare board',
    },
    description:
      'Turn your circuit design into a working board for your device or system.',
    highlights: [
      {
        title: 'Custom circuit board design',
        description: 'Lay out a circuit board around the schematic, component placement and the space available in the device.',
      },
      {
        title: 'PCB prototyping and fabrication',
        description: 'Fabricate prototype boards so the design can be reviewed and refined before the next revision.',
      },
      {
        title: 'Electronic assembly',
        description: 'Populate fabricated boards with the components needed for an assembled prototype or device.',
      },
    ],
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
    preview: {
      src: cncPreview,
      alt: 'Milled aluminium bracket with drilled holes',
    },
    description:
      'Turn digital designs into precision machined parts for prototyping and development.',
    highlights: [
      {
        title: 'Precision CNC machining',
        description: 'Machine components from digital models and drawings, with dimensions and tolerances defined for the application.',
      },
      {
        title: 'Custom machined components',
        description: 'Produce parts around the geometry and fit of your assembly, from brackets to other custom components.',
      },
      {
        title: 'Rapid prototyping',
        description: 'Make physical prototypes to evaluate fit and assembly and refine the design before committing to production.',
      },
    ],
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
    preview: {
      src: simulationPreview,
      alt: 'Illustration of a finite element stress contour on a mounting bracket',
    },
    description:
      'Model your product and assess how it will behave under load before building a prototype.',
    highlights: [
      {
        title: '3D modelling and product design',
        description: 'Build and refine a digital model of the part or assembly so its geometry can be reviewed before fabrication.',
      },
      {
        title: 'Structural analysis',
        description: 'Assess how the design responds to expected loads and identify areas where stress or deflection needs attention.',
      },
      {
        title: 'Simulation with ANSYS',
        description: 'Compare design options under defined loads and constraints to inform changes before physical prototyping.',
      },
    ],
  },
]

export const capabilities = [
  ...engineeringServices,
  {
    id: 'technical-education',
    category: 'Technical education',
    title: 'Engineering & technology courses',
    image: undefined,
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
