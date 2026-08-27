import { Check } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { SectionLabel } from '@/components/ui/section-label'
import { stack } from '@/lib/data'

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="border-y border-border bg-card">
      <Container className="py-16 lg:py-24">
        <div className="max-w-2xl">
          <SectionLabel>/ toolkit</SectionLabel>
          <h2 id="skills-heading" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl text-balance">
            The tools behind the work.
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Not a checklist — a lived-in toolkit. Picked because they solve real problems, not hype.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(stack).map(([category, items]) => (
            <div key={category} className="rounded-xl border border-border bg-muted/20 p-5">
              <h3 className="flex items-center gap-2 font-mono text-sm font-medium text-foreground">
                <span aria-hidden="true" className="text-brand">
                  //
                </span>
                {category}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item.name} className="flex items-center justify-between gap-3 text-sm">
                    <span className="flex items-center gap-2 text-foreground">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                        <Check aria-hidden="true" className="size-3" />
                      </span>
                      {item.name}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">{item.years}</span>
                  </li>
                ))}
              </ul>
              {/* level dots */}
              <div className="mt-4 flex gap-1" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-1 flex-1 rounded-full ${i < 4 ? 'bg-brand/40' : 'bg-border'}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2 border-t border-border pt-6 text-xs text-muted-foreground">
          <span className="font-mono uppercase tracking-widest">Also:</span>
          <span>REST · GraphQL · CI/CD · System Design · Clean Architecture · Agile</span>
        </div>
      </Container>
    </section>
  )
}
