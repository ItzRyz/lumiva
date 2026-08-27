import { Container } from '@/components/ui/container'
import { SectionLabel } from '@/components/ui/section-label'
import { experiences } from '@/lib/data'

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="bg-background">
      <Container className="py-16 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionLabel>/ experience</SectionLabel>
            <h2 id="experience-heading" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Where I&apos;ve been.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">
            Small team, real products. I stay close to users and closer to edge cases.
          </p>
        </div>

        <div className="relative mt-12">
          {/* vertical line */}
          <div aria-hidden="true" className="absolute left-3 top-2 hidden h-[calc(100%-16px)] w-px bg-border sm:block lg:left-[11px]" />
          <ol className="flex flex-col gap-6">
            {experiences.map((exp) => (
              <li
                key={exp.org + exp.role}
                className="group relative flex gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:bg-muted/40 sm:gap-6"
              >
                <div
                  aria-hidden="true"
                  className="mt-1 hidden size-2.5 shrink-0 rounded-full bg-brand ring-4 ring-brand/15 sm:block"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold tracking-tight">
                        {exp.role} <span className="font-normal text-muted-foreground">· {exp.org}</span>
                      </h3>
                      <p className="mt-1 font-mono text-xs text-muted-foreground">{exp.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="whitespace-nowrap rounded-full bg-muted px-3 py-1 font-mono text-xs text-muted-foreground">
                        {exp.period}
                      </p>
                      <p className="mt-1.5 font-mono text-xs text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>
                  <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-6 text-muted-foreground marker:text-brand">
                    {exp.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
