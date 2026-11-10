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
import printingImage from '@/assets/images/engineering/additive-prototyping.webp'
import printingSmallImage from '@/assets/images/engineering/additive-prototyping-480.webp'
import propellerImage from '@/assets/images/engineering/composite-propellers.webp'
import propellerSmallImage from '@/assets/images/engineering/composite-propellers-480.webp'

const printingAlt = 'Industrial 3D printer with an orange prototype bracket on the print bed'
const propellerAlt = 'Two-blade carbon fibre UAV propeller with a metal-lined mounting hole'

export const engineeringServices = [
  {
    id: 'composite-manufacturing',
    category: 'Composite manufacturing',
    title: 'Composite moulding & tooling',
    image: {
      full: carbonImage,
      small: carbonSmallImage,
      alt: 'Curved carbon fibre panel beside its metal mould',
    },
    preview: {
      src: carbonPreview,
      alt: 'Curved carbon fibre shell beside its aluminium mould',
    },
    summary: 'Fabricate carbon and glass fibre airframes, structural parts and custom mould tooling.',
    description:
      'Develop carbon and glass fibre components around the part geometry, weight and stiffness requirements. Rovonize designs split moulds and master plugs and fabricates laminates, sandwich panels and internal spars.',
    technicalCapabilities: [
      { label: 'Vacuum infusion', value: 'Vacuum-assisted resin transfer moulding (VARTM) and wet layup for composite laminates.' },
      { label: 'Prepreg compression moulding', value: 'Mould pre-impregnated carbon fibre under compression with controlled thermal curing.' },
      { label: 'Sandwich construction', value: 'Produce lightweight panels with honeycomb or ROHACELL foam cores.' },
      { label: 'Pattern and mould tooling', value: 'CNC-machine master plug patterns and make split moulds with high-gloss epoxy tooling.' },
      { label: 'Reinforcements', value: 'Toray 3K and 12K carbon fibre in twill and unidirectional formats, E-glass, S-glass and aramid layers.' },
    ],
    applications: [
      'Monocoque fuselages and high-aspect-ratio wings',
      'Multirotor motor booms and lightweight nacelles',
      'Internal spars and custom structural brackets',
    ],
  },
  {
    id: 'electronics-engineering',
    category: 'Electronics engineering',
    title: 'Embedded avionics & PCB assembly',
    image: {
      full: pcbImage,
      small: pcbSmallImage,
      alt: 'Assembled circuit board beside a bare copper board',
    },
    preview: {
      src: pcbPreview,
      alt: 'Assembled circuit board beside a matching bare board',
    },
    summary: 'Design and assemble custom circuit boards for power distribution, avionics and sensor integration.',
    description:
      'Develop custom power distribution boards, isolated microcontroller modules and sensor interconnects for UAVs and robotics. The layout and assembly account for electrical noise, current loads and heat dissipation.',
    technicalCapabilities: [
      { label: 'High-current board design', value: 'Printed circuit board layouts of up to eight layers with heavy copper pours.' },
      { label: 'Low-noise power regulation', value: 'Regulate power for avionics, GPS/RTK receivers and telemetry modules.' },
      { label: 'Data interfaces', value: 'Design CAN bus, isolated SPI, I²C and UART interfaces.' },
      { label: 'Surface-mount prototyping', value: 'Assemble high-density surface-mount prototypes and design thermal relief into the layout.' },
      { label: 'Power failsafes', value: 'Design redundant power paths and automatic load-shedding circuits.' },
    ],
    applications: [
      'Aerospace power distribution boards',
      'Isolated microcontroller modules',
      'Sensor interconnects and telemetry electronics',
    ],
  },
  {
    id: 'precision-manufacturing',
    category: 'Precision manufacturing',
    title: 'Precision CNC machining & tooling',
    image: {
      full: cncImage,
      small: cncSmallImage,
      alt: 'Machined metal bracket clamped in a vise',
    },
    preview: {
      src: cncPreview,
      alt: 'Milled aluminium bracket with drilled holes',
    },
    summary: 'Machine prototypes, tooling and small batches using three- and five-axis CNC milling.',
    description:
      'Machine parts and tooling directly from STEP or IGES models. Rovonize supports precision prototypes and small batches, with dimensional verification for parts such as structural nodes, propulsion mounts and actuation components.',
    technicalCapabilities: [
      { label: 'CNC milling', value: 'High-speed three-axis and continuous five-axis milling.' },
      { label: 'Positional accuracy', value: '±0.02 mm. Confirm achievable accuracy for the part geometry and material.' },
      { label: 'Surface roughness', value: 'Ra 0.8–1.6 µm as machined, or Ra 0.4 µm with secondary finishing.' },
      { label: 'Metals', value: 'Aluminium 6061-T6 and 7075-T651, stainless steel 304 and 316, and Grade 5 titanium (Ti-6Al-4V).' },
      { label: 'Engineering plastics', value: 'Delrin (POM), PEEK and ultra-high-molecular-weight polyethylene (UHMW-PE).' },
      { label: 'Surface treatments', value: 'Type III hardcoat anodising, chemical film or passivation treatments, and bead blasting.' },
    ],
    applications: [
      'UAV structural nodes and propulsion mounts',
      'Mechanical actuation components',
      'Precision prototypes and small-batch parts',
    ],
  },
  {
    id: 'digital-engineering',
    category: 'Digital engineering',
    title: '3D design & multiphysics simulation',
    image: {
      full: ibexImage,
      small: ibexSmallImage,
      alt: '3D rendering of the Ibex UAV',
    },
    preview: {
      src: simulationPreview,
      alt: 'Illustration of a finite element stress contour on a mounting bracket',
    },
    summary: 'Develop 3D designs and use ANSYS to study aerodynamic, structural, vibration and thermal behaviour.',
    description:
      'Analyse airframes, mechanisms and electronics assemblies before machining or moulding. Rovonize uses ANSYS to evaluate how a design behaves under defined operating conditions and documents the results for engineering review.',
    technicalCapabilities: [
      { label: 'Aerodynamic CFD', value: 'Use ANSYS Fluent or CFX to study transient flow, boundary-layer separation, lift and drag, and rotor downwash.' },
      { label: 'Structural FEA', value: 'Use ANSYS Mechanical to evaluate high-acceleration static loads, stress concentrations, bolted-joint fatigue and factors of safety.' },
      { label: 'Modal and harmonic analysis', value: 'Identify natural frequencies and evaluate vibration from motors and propulsion systems.' },
      { label: 'Thermal analysis', value: 'Evaluate heat dissipation in electronic speed controllers and battery packs under sustained load.' },
      { label: '3D CAD and design for manufacturing', value: 'Model parts and assemblies and refine their geometry for fabrication and assembly.' },
      { label: 'Engineering reports', value: 'Document mesh convergence, stress contours and margins of safety for engineering review.' },
    ],
    applications: [
      'Airfoil and airframe design',
      'Rotor interference and downwash studies',
      'Structural and vibration assessment of mechanical assemblies',
      'Battery and power electronics thermal management',
    ],
  },
  {
    id: 'additive-prototyping',
    category: 'Additive manufacturing',
    title: 'Additive prototyping & industrial 3D printing',
    image: { full: printingImage, small: printingSmallImage, alt: printingAlt },
    preview: { src: printingImage, alt: printingAlt },
    summary: 'Print functional prototypes, test models and custom parts in engineering polymers.',
    description:
      'Develop parts for bench tests, wind-tunnel evaluation and UAV integration. Select rigid or flexible polymers to suit the intended loading, fit and environment.',
    technicalCapabilities: [
      { label: 'Carbon-reinforced polymers', value: 'Carbon fibre-reinforced nylon (PA-CF) and PETG-CF for rigid housings and mounts.' },
      { label: 'Flexible materials', value: 'TPU in 95A or 85A Shore hardness for gaskets, grommets and vibration isolators.' },
      { label: 'Engineering thermoplastics', value: 'ABS, UV-resistant ASA and polycarbonate (PC).' },
    ],
    applications: [
      'Wind-tunnel models and bench-test prototypes',
      'Avionics enclosures and sensor mounts',
      'Landing skid isolators, gaskets and cable grommets',
    ],
  },
  {
    id: 'propeller-design',
    category: 'Aerodynamic engineering',
    title: 'Airfoil design & composite propeller fabrication',
    image: { full: propellerImage, small: propellerSmallImage, alt: propellerAlt },
    preview: { src: propellerImage, alt: propellerAlt },
    summary: 'Design, mould and test carbon fibre propellers for specific thrust, noise and altitude requirements.',
    description:
      'Match blade chord, twist and laminate construction to the motor torque curve and operating density altitude. Rovonize designs and fabricates fixed or folding propellers and characterises their performance on a test stand.',
    technicalCapabilities: [
      { label: 'Aerodynamic modelling', value: 'Use blade element momentum (BEM) and computational fluid dynamics (CFD) to refine blade chord and twist.' },
      { label: 'Noise reduction', value: 'Evaluate blade tip and swept-edge geometries for lower acoustic output.' },
      { label: 'Tooling and fabrication', value: 'Use CNC split moulds, compression moulding and vacuum infusion with Toray 3K carbon fibre.' },
      { label: 'Dynamic validation', value: 'Perform blade balancing, overspeed testing and test-stand sweeps that record thrust, torque, RPM, current and thrust per watt.' },
      { label: 'Deliverables', value: 'Matched clockwise and counterclockwise carbon fibre propellers in fixed or folding configurations.' },
    ],
    applications: [
      'Lower-noise surveillance aircraft',
      'High-speed UAV propulsion',
      'Heavy-lift UAVs operating at altitude',
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
