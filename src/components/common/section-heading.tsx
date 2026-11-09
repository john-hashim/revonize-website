type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  id?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 grid gap-5 lg:mb-12 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-16">
      <div>
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h2
          id={id}
          className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.65rem]"
        >
          {title}
        </h2>
      </div>
      {description && (
        <p className="body-copy max-w-xl">
          {description}
        </p>
      )}
    </div>
  )
}
