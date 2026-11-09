import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import { SectionHeading } from '@/components/common/section-heading'
import { capabilities } from '@/data/capabilities'

export function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="section-space"
    >
      <div className="container-shell">
        <SectionHeading
          eyebrow="Engineering & technology capabilities"
          title="From concept to real-world solutions."
          id="capabilities-heading"
          description="From digital design to precision manufacturing, we transform engineering concepts into real-world solutions."
        />
        <div className="border-t">
          {capabilities.map((item, index) => (
            <article
              id={item.id}
              key={item.id}
              className="group grid gap-5 border-b py-7 sm:py-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12"
            >
              <div className="flex gap-4 sm:gap-6">
                <span className="pt-1 text-xs font-medium tabular-nums text-muted-foreground">
                  0{index + 1}
                </span>
                <div>
                  <p className="eyebrow mb-2 text-[10px] tracking-[0.12em]">
                    // {item.category}
                  </p>
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    <Link
                      to={index === 4 ? '/academy' : `/engineering#${item.id}`}
                      className="inline-flex items-start gap-2 hover:text-primary"
                    >
                      {item.title}
                      <ArrowUpRight
                        className="mt-1 size-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="pl-8 sm:pl-10 lg:pl-0">
                <p className="body-copy max-w-lg">{item.description}</p>
                {index === 4 && (
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                    <li>
                      3- and 6-month internships in UAV Design & Development
                    </li>
                    <li>
                      1-year Diploma in Drone Engineering & Artificial
                      Intelligence
                    </li>
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-lg font-medium tracking-tight text-foreground sm:text-2xl">
          Design. Simulate. Manufacture. Innovate.{' '}
          <span className="text-primary">Learn.</span>
        </p>
      </div>
    </section>
  )
}
