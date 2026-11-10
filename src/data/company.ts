import abisonPortrait from '@/assets/images/leadership/abison-varghese.webp'
import arunPortrait from '@/assets/images/leadership/arunkumar-a-r.webp'
import rameshPortrait from '@/assets/images/leadership/p-s-ramesh.webp'
import yogeshPortrait from '@/assets/images/leadership/m-yogesh.webp'

export const mission = {
  title: 'Bridging You & Technology',
  pillars: [
    {
      id: 'build',
      title: 'Build in India',
      description: 'We design and manufacture drones in India to grow local engineering expertise and reduce dependence on imports.',
    },
    {
      id: 'use',
      title: 'Make technology useful',
      description: 'We start with the job people need to do, from monitoring crops to surveying an area, and design the system around it.',
    },
    {
      id: 'learn',
      title: 'Pass on practical skills',
      description: 'We help learners understand how technology works by giving them hands-on experience with drones, robotics and electronics.',
    },
  ],
} as const

export const leadership = [
  {
    name: 'Abison Varghese',
    role: 'Founder & Executive Chairman',
    portrait: abisonPortrait,
    bio: 'Abison Varghese has spent over 20 years building technology ventures, including SecNeural and ThreatsView. He holds a CCIE Security certification and has extensive experience in defence and government. At Rovonize, he leads the development of AI-powered autonomous aerial systems in India for mission-critical applications.',
  },
  {
    name: 'Brig. P S Ramesh (Retd)',
    role: 'Chief Executive Officer',
    portrait: rameshPortrait,
    bio: 'Brig. P S Ramesh (Retd), PhD, has over two decades of experience in uncrewed aerial systems. He holds a doctorate in UAS technology and multiple patents. His work and widely cited research focus on military-grade systems that account for operational tactics, terrain, and technology.',
  },
  {
    name: 'Arunkumar A R',
    role: 'Chief Technology Officer',
    portrait: arunPortrait,
    bio: 'Arunkumar A R has over 16 years of experience across academia and the UAV industry, with a background in aeronautical engineering and aircraft maintenance. He specialises in structural design and composite manufacturing and leads the development of lightweight, high-performance aerial systems at Rovonize.',
  },
  {
    name: 'Dr. M Yogesh',
    role: 'Chief Strategy Officer',
    portrait: yogeshPortrait,
    bio: 'Dr. M Yogesh brings academic leadership and expertise in mechanical engineering and advanced systems research. He holds a PhD and has published internationally. At Rovonize, he leads strategic planning and innovation, connecting emerging technologies with the company’s long-term plans for UAV development.',
  },
]
