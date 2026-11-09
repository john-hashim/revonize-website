import { Link } from 'react-router'
import socialIcons from '@/assets/social-icons.svg?no-inline'
import { mission } from '@/data/company'
import { company, navigation } from '@/data/site'
import { products } from '@/data/products'

const copyrightYear = new Date().getFullYear()

export function SiteFooter() {
  return (
    <footer className="border-t bg-background text-foreground">
      <div className="container-shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.25fr] lg:gap-12 lg:py-20">
        <div>
          <Link to="/" className="text-2xl font-extrabold tracking-[-0.06em]">
            rovonize<span className="text-primary">.</span>
          </Link>
          <ul aria-label="Social media" className="mt-3 flex flex-wrap gap-1">
            {company.socialLinks.map(({ label, icon, href }) => (
              <li key={icon}>
                <a
                  href={href}
                  aria-label={`Rovonize on ${label}`}
                  className="grid size-11 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                >
                  <svg className="size-4.5 fill-current" aria-hidden="true">
                    <use href={`${socialIcons}#${icon}`} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-5 max-w-xs text-sm leading-7 text-muted-foreground">
            UAV development, precision manufacturing, aerospace research and
            hands-on technical education in Kerala, India.
          </p>
          <p className="mt-5 text-xs uppercase tracking-widest text-primary">
            {mission.title}
          </p>
        </div>
        <div>
          <h2 className="mb-5 text-xs font-semibold uppercase tracking-widest text-primary">
            UAV platforms
          </h2>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {products.map((product) => (
              <li key={product.slug}>
                <Link
                  className="transition-colors hover:text-primary-hover"
                  to={`/products/${product.slug}`}
                >
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-5 text-xs font-semibold uppercase tracking-widest text-primary">
            Explore Rovonize
          </h2>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {navigation.slice(1).map((item) => (
              <li key={item.href}>
                <Link
                  className="transition-colors hover:text-primary-hover"
                  to={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="hover:text-primary-hover">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-5 text-xs font-semibold uppercase tracking-widest text-primary">
            Direct enquiries
          </h2>
          <address className="space-y-4 text-sm not-italic leading-6 text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground">Head office</p>
              <p>{company.headOfficeAddress}</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Research centre</p>
              <p>{company.address}</p>
            </div>
            <div>
              {company.phones.map((phone) => (
                <a
                  className="block w-fit py-1 hover:text-primary-hover"
                  key={phone.href}
                  href={phone.href}
                >
                  {phone.label}
                </a>
              ))}
            </div>
            <a
              className="inline-block break-all text-primary hover:underline"
              href={`mailto:${company.email}`}
            >
              {company.email}
            </a>
          </address>
        </div>
      </div>
      <div className="border-t">
        <div className="container-shell flex flex-col justify-between gap-3 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {copyrightYear} {company.name}. All rights reserved.
          </p>
          <p>Design. Simulate. Manufacture. Innovate. Learn.</p>
        </div>
      </div>
    </footer>
  )
}
