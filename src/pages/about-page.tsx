import { Blocks, Crosshair, MapPin, ScanLine } from 'lucide-react'
import { ActionLink } from '@/components/common/action-link'
import { FramedIntro, FramedPage, WireframeIcon } from '@/components/common/framed-page'
import { LeadershipSection } from '@/components/sections/leadership-section'

const differentiators = [
  {
    title: 'Complete Drone Solutions',
    description:
      'Unlike traditional drone manufacturers, Rovonize Systems takes a holistic approach, offering complete solutions that integrate hardware, software, and tailored applications.',
    icon: Blocks,
    color: 'text-amber-700',
  },
  {
    title: 'Made in India',
    description:
      'We are proud to manufacture all our drones in India, ensuring top-notch quality, local support, and innovation.',
    icon: MapPin,
    color: 'text-orange-700',
  },
  {
    title: 'User-Focused Design',
    description:
      'Our drones are built with the end-user in mind, ensuring ease of use, reliability, and seamless integration into various industries.',
    icon: ScanLine,
    color: 'text-primary',
  },
  {
    title: 'Sector-Specific Applications',
    description:
      'Whether it’s enhancing agricultural productivity, providing advanced defense surveillance, or supporting R&D projects, our drones offer versatile and efficient solutions across multiple domains.',
    icon: Crosshair,
    color: 'text-emerald-700',
  },
]

export function AboutPage() {
  return (
    <FramedPage>
      <FramedIntro titleId="about-title">
        <div data-text-reveal="" className="mx-auto max-w-3xl">
          <header className="text-center">
            <p className="eyebrow mb-3">Who we are</p>
            <h1 id="about-title" className="text-4xl font-semibold tracking-tight sm:text-5xl">
              About Us
            </h1>
          </header>
          <div className="mt-7 space-y-4 sm:mt-10">
            <p className="body-copy">
              Rovonize Systems is a pioneering Indian company at the forefront of drone
              technology, specializing in the design, development, and manufacture of
              cutting-edge drone solutions. Our mission is to revolutionize industries
              with innovative, reliable, and fully integrated drone systems that are
              100% Made in India.
            </p>
            <p className="body-copy">
              At Rovonize, we are dedicated to creating unique, user-friendly drone
              applications tailored to meet the specific needs of various sectors,
              including agriculture, defense, and research &amp; development (R&amp;D).
              Our in-house prepared, state-of-the-art drones are engineered with
              precision to deliver outstanding performance, whether it’s for crop
              monitoring, surveillance, or advanced R&amp;D projects.
            </p>
          </div>
          <ActionLink to="/contact" variant="secondary" className="mt-6 px-4 sm:mt-8">
            Get in touch
          </ActionLink>
        </div>
      </FramedIntro>
      <section aria-labelledby="about-difference-title">
        <div className="container-shell">
          <div className="section-space border-x border-[var(--frame-line)] px-3 sm:px-8 lg:px-12">
            <header data-text-reveal="" className="mx-auto max-w-3xl px-2 text-center">
              <h2 id="about-difference-title" className="text-3xl font-semibold tracking-tight sm:text-5xl">
                What Sets Us Apart
              </h2>
              <p className="body-copy mt-5">
                We believe in empowering industries with the latest in drone technology,
                enabling our clients to achieve greater efficiency and precision in their
                operations. With a commitment to quality and innovation, Rovonize is setting
                new standards for what is possible with drones in India and beyond.
              </p>
            </header>
            <ul className="mt-9 grid gap-4 sm:mt-12 lg:grid-cols-2 lg:gap-5">
              {differentiators.map(({ title, description, icon: Icon, color }) => (
                <li key={title} className="grid grid-cols-[4rem_1fr] border border-[var(--frame-line)] sm:grid-cols-[1fr_2fr]">
                  <WireframeIcon icon={Icon} color={color} />
                  <div data-text-reveal="" className="self-center p-4 sm:px-6 sm:py-7">
                    <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <LeadershipSection />
    </FramedPage>
  )
}
