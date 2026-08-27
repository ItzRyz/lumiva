import { ArrowUpRight, Code2, Globe } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { SectionLabel } from '@/components/ui/section-label'
import { Badge } from '@/components/ui/badge'
import { projects } from '@/lib/data'

export function Projects() {
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" aria-labelledby="projects-heading" className="bg-muted/20">
      <Container className="py-16 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionLabel>/ selected work</SectionLabel>
            <h2 id="projects-heading" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Things I&apos;ve shipped.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
              Real products, real constraints. Each one taught me something about what “done” actually means.
            </p>
          </div>
          <span className="hidden rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground sm:inline-flex">
            {projects.length} projects · 2023—2025
          </span>
        </div>

        {/* Featured */}
        {featured && (
          <a
            href={featured.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-10 flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:flex-row"
          >
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-brand px-2.5 py-1 font-mono text-xs font-medium text-brand-foreground">
                      Featured
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-brand">{featured.type}</span>
                    <span className="text-xs text-muted-foreground">· {featured.year}</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{featured.name}</h3>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">{featured.role}</p>
                </div>
                <span className="flex size-10 items-center justify-center rounded-full border border-border bg-muted transition-colors group-hover:bg-foreground group-hover:text-background">
                  <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
              <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">{featured.longDesc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {featured.tags.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
              <div className="mt-auto flex items-center gap-3 pt-6 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Globe aria-hidden="true" className="size-3.5" /> {featured.status === 'live' ? 'Live' : 'Open Source'}
                </span>
                <span>·</span>
                <span>View project</span>
                <span className="sr-only"> (opens in new tab)</span>
              </div>
            </div>
            {/* visual preview */}
            <div className="relative flex min-h-56 flex-1 items-center justify-center border-t border-border bg-gradient-to-br from-brand/10 via-muted/50 to-background p-6 lg:min-h-[320px] lg:border-l lg:border-t-0">
              <div className="w-full max-w-sm rounded-xl border border-border bg-card p-3 shadow-lg">
                <div className="flex items-center gap-1.5 border-b border-border pb-3">
                  <span className="size-2.5 rounded-full bg-red-400" aria-hidden="true" />
                  <span className="size-2.5 rounded-full bg-yellow-400" aria-hidden="true" />
                  <span className="size-2.5 rounded-full bg-green-400" aria-hidden="true" />
                  <span className="ml-2 flex-1 truncate rounded bg-muted px-2 py-1 text-center font-mono text-[10px] text-muted-foreground">
                    {featured.url.replace('https://', '')}
                  </span>
                </div>
                <div className="space-y-2 pt-3">
                  <div className="h-3 w-3/4 rounded bg-muted" aria-hidden="true" />
                  <div className="h-3 w-1/2 rounded bg-muted" aria-hidden="true" />
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    <div className="h-12 rounded bg-brand/15" aria-hidden="true" />
                    <div className="h-12 rounded bg-muted" aria-hidden="true" />
                    <div className="h-12 rounded bg-muted" aria-hidden="true" />
                  </div>
                </div>
              </div>
              {/* glow */}
              <div aria-hidden="true" className="pointer-events-none absolute -bottom-6 -right-6 size-32 rounded-full bg-brand/15 blur-2xl" />
            </div>
          </a>
        )}

        {/* Grid rest */}
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {rest.map((project) => (
            <li key={project.name}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full min-h-64 flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-mono text-xs uppercase tracking-wider text-brand">{project.type}</p>
                      <span className="text-xs text-border">·</span>
                      <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
                      {project.status === 'open-source' && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                          <Code2 aria-hidden="true" className="size-3" /> OSS
                        </span>
                      )}
                    </div>
                    <h3 className="mt-2 truncate text-xl font-semibold tracking-tight">{project.name}</h3>
                    <p className="font-mono text-xs text-muted-foreground">{project.role}</p>
                  </div>
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border bg-muted text-muted-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                    {project.status === 'open-source' ? (
                      <Code2 aria-hidden="true" className="size-4" />
                    ) : (
                      <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    )}
                  </span>
                </div>
                <div className="mt-6">
                  <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">{project.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} className="px-2 py-0.5 text-[11px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-muted-foreground group-hover:text-foreground">
                    View project <span aria-hidden="true">→</span>
                    <span className="sr-only"> {project.name} (opens in new tab)</span>
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
