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
    format: 'Survey multirotor',
    application: 'Multispectral mapping',
    summary: 'A multispectral survey UAV for mapping terrain, assessing vegetation and measuring stockpile volumes.',
    description:
      'Spectra captures aerial imagery for orthomosaics, vegetation health mapping and volumetric surveys. A stabilised three-axis gimbal supports interchangeable RGB and multispectral survey payloads.',
    specifications: [
      { label: 'Configuration', value: 'Quadrotor or hexarotor' },
      { label: 'Maximum take-off weight (MTOW)', value: '6.8 kg' },
      { label: 'Payload capacity', value: '1.8 kg in the standard payload bay' },
      { label: 'Flight endurance', value: '50–58 min with payload active' },
      { label: 'Survey coverage', value: '1.5 km² per flight at 120 m above ground level (AGL)' },
      { label: 'Ground sampling distance', value: '1.2 cm/pixel for RGB imagery at 100 m. 4.5 cm/pixel for multispectral imagery.' },
      { label: 'Imaging payload', value: '45 MP full-frame photogrammetry sensor and a five-band multispectral imager (blue, green, red, red edge and near infrared) with a downwelling light sensor.' },
      { label: 'Positioning', value: 'Multi-constellation RTK/PPK GNSS with specified horizontal accuracy under 2 cm.' },
      { label: 'Telemetry link', value: 'Encrypted 2.4 GHz and 5.8 GHz point-to-point link, up to 12 km with line of sight.' },
    ],
    applications: [
      'Orthomosaic mapping and topographic surveys',
      'Vegetation health mapping using NDVI',
      'Mining and stockpile volume surveys',
      'Infrastructure corridor inspection',
    ],
  },
  {
    slug: 'veeksha',
    name: 'Veeksha',
    image: { full: veekshaImage, small: veekshaSmallImage },
    preview: veekshaPreview,
    format: 'Surveillance UAV',
    application: 'Day and night surveillance',
    summary: 'A day and night surveillance UAV with zoom and thermal imaging for perimeter patrol and search and rescue.',
    description:
      'Veeksha is designed for rapid deployment on border, maritime and search-and-rescue missions. It combines daylight and thermal imaging with onboard processing that can classify people and vehicles and track their positions.',
    specifications: [
      { label: 'Maximum take-off weight (MTOW)', value: '9.2 kg' },
      { label: 'Flight endurance', value: '65–75 min of continuous station-keeping' },
      { label: 'Secure datalink range', value: '20 km' },
      { label: 'Maximum operating altitude', value: '3,500 m above mean sea level (AMSL)' },
      { label: 'Daylight optics', value: 'Electro-optical sensor with 30× optical zoom' },
      { label: 'Thermal imaging', value: '640 × 512 cooled long-wave infrared (LWIR) imager' },
      { label: 'Laser rangefinder', value: 'Integrated eye-safe rangefinder, up to 2,500 m' },
      { label: 'Onboard processing', value: 'Low-latency classification and tracking of people and vehicles' },
      { label: 'Communications', value: 'AES-256 encrypted command and control and video downlink, with mesh network integration' },
      { label: 'Noise reduction', value: 'Low-noise propeller profiles' },
    ],
    applications: [
      'Border and perimeter monitoring',
      'Maritime patrol',
      'Day and night aerial reconnaissance',
      'Disaster response and search and rescue',
    ],
  },
  {
    slug: 'ibex',
    name: 'Ibex',
    image: { full: ibexImage, small: ibexSmallImage },
    preview: ibexPreview,
    format: 'Coaxial heavy-lift UAV',
    application: 'High-altitude logistics',
    summary: 'An autonomous heavy-lift UAV for high-altitude resupply and medical deliveries.',
    description:
      'Ibex delivers supplies to high-altitude sites that are difficult to reach by ground. It uses a coaxial electric powertrain with brushless motors and vacuum-infused carbon fibre trusses. Cargo can be released after landing or lowered by winch from a hover.',
    specifications: [
      { label: 'Maximum take-off weight (MTOW)', value: '48.0 kg' },
      { label: 'Payload capacity', value: '12–15 kg via quick-release cargo bay or tethered winch' },
      { label: 'Take-off and operating ceiling', value: '4,500+ m above mean sea level (AMSL)' },
      { label: 'Mission radius', value: '25 km for a round-trip mission with full payload drop' },
      { label: 'Wind resistance limit', value: '18 m/s' },
      { label: 'Operating temperature', value: '−20 °C to +50 °C, with a self-heating battery enclosure' },
      { label: 'Cargo delivery', value: 'Automated touchdown release or tethered hoist release without landing' },
      { label: 'Flight redundancy', value: 'Triple-redundant inertial measurement units (IMUs), dual compasses, dual GNSS and a ballistic recovery parachute' },
    ],
    applications: [
      'High-altitude cargo delivery and forward-base resupply',
      'Medical supply drops in remote terrain',
      'Logistics where ground routes are inaccessible',
    ],
  },
  {
    slug: 'stem',
    name: 'ROV-STEM',
    image: { full: stemImage, small: stemSmallImage },
    preview: stemPreview,
    format: 'Quadrotor',
    application: 'Surveillance & perimeter scans',
    summary: 'A compact quadrotor for aerial surveillance, perimeter scans and object tracking.',
    description:
      'ROV-STEM is a compact surveillance quadrotor for perimeter scanning, aerial mapping and object tracking. It can support law enforcement teams that need an overhead view of an area.',
    specifications: [
      { label: 'Configuration', value: 'Quadrotor' },
      { label: 'Airframe', value: 'Carbon fibre' },
      { label: 'Propulsion', value: 'Electric motors' },
      { label: 'Maximum take-off weight (MTOW)', value: '1.3 kg' },
      { label: 'Empty weight', value: '750 g' },
      { label: 'Cruise speed', value: '18 m/s' },
      { label: 'Maximum speed', value: '100 km/h' },
      { label: 'Operational range', value: '5 km' },
      { label: 'Flight endurance', value: '18 min' },
    ],
    applications: [
      'Perimeter scanning and surveillance',
      'Object tracking',
      'Aerial mapping',
      'Law enforcement support',
    ],
  },
]
