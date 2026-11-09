import { BadgeCheck } from 'lucide-react'
import gemLogo from '@/assets/images/credentials/gem.svg'
import keralaStartupMissionLogo from '@/assets/images/credentials/kerala-startup-mission.svg'
import msmeLogo from '@/assets/images/credentials/msme.webp'
import startupIndiaLogo from '@/assets/images/credentials/startup-india.png'
import './credentials-section.css'

function CredentialLogos({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul className="credentials-logos" aria-hidden={duplicate || undefined}>
      <li>
        <a href="https://gem.gov.in/" tabIndex={duplicate ? -1 : undefined}>
          <img src={gemLogo} alt="Government e-Marketplace (GeM)" className="h-12 w-32 object-contain" />
        </a>
      </li>
      <li>
        <img src={keralaStartupMissionLogo} alt="Kerala Startup Mission" className="h-14 w-auto" />
      </li>
      <li>
        <img
          src={msmeLogo}
          alt="Ministry of Micro, Small and Medium Enterprises (MSME), Government of India"
          width={256}
          height={251}
          className="h-auto w-[4.5rem]"
        />
      </li>
      <li>
        <span className="flex items-center gap-2.5">
          <BadgeCheck aria-hidden="true" className="size-8 shrink-0 text-primary" strokeWidth={1.6} />
          <span className="flex flex-col">
            <span className="text-sm font-semibold">ISO 9001:2015</span>
            <span className="text-xs text-muted-foreground">Certified</span>
          </span>
        </span>
      </li>
      <li>
        <img src={startupIndiaLogo} alt="Startup India" width={640} height={139} className="h-auto w-44" />
      </li>
    </ul>
  )
}

export function CredentialsSection() {
  return (
    <section aria-labelledby="credentials-heading" className="border-b bg-background">
      <div className="container-shell py-4 sm:py-5">
        <h2 id="credentials-heading" className="eyebrow mb-3 text-center text-muted-foreground">
          Programs &amp; Certifications
        </h2>
        <div className="credentials-viewport">
          <div className="credentials-track">
            <CredentialLogos />
            <CredentialLogos duplicate />
          </div>
        </div>
      </div>
    </section>
  )
}
