import { ArrowUpRight, Code2, MapPin, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-border/50 bg-gradient-to-b from-muted/40 via-background to-background"
    >
      {/* subtle grid pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,theme(colors.border/60)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border/60)_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.35] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_110%)]"
      />
      <Container className="relative grid gap-10 pb-16 pt-10 md:gap-12 md:pb-24 md:pt-16 lg:grid-cols-[1.25fr_0.85fr] lg:items-center lg:pb-28 lg:pt-20">
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-xs font-medium text-brand">
            <span aria-hidden="true" className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-brand" />
            </span>
            Available for select collaborations
            <span className="hidden sm:inline text-brand/60">· Response &lt; 24h</span>
          </div>

          <h1
            id="hero-heading"
            className="mt-6 max-w-3xl text-balance text-[2.7rem] font-semibold leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-[5.2rem]"
          >
            Building the{" "}
            <span className="bg-gradient-to-r from-brand to-foreground/60 bg-clip-text text-transparent">
              quietly powerful.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-[15px] leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            I&apos;m <span className="font-medium text-foreground">Muhammad Salman Al Farizi</span>, known digitally as{" "}
            <span className="font-mono text-sm font-medium text-foreground">Lumiva</span> — software engineer crafting
            dependable products across the web. From Pamulang University to the Lumitalyst team, I turn complex problems
            into useful systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="group h-10 rounded-full px-6">
              <a href="#projects">
                Explore my work{" "}
                <ArrowUpRight
                  aria-hidden="true"
                  data-icon="inline-end"
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-10 rounded-full px-6">
              <a href="#contact">Let&apos;s connect</a>
            </Button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center rounded-full border border-border bg-card px-6 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Download CV
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-border pt-6 text-sm">
            <span className="flex items-center gap-2 text-muted-foreground">
              <MapPin aria-hidden="true" className="size-4 text-brand" /> Tangerang, ID · WIB UTC+7
            </span>
            <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <Sparkles aria-hidden="true" className="size-3.5 text-brand" /> 5 products shipped
            </span>
          </div>
        </div>

        {/* Code profile card */}
        <div className="animate-in fade-in slide-in-from-bottom-3 relative duration-700 delay-150 lg:pl-4">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-5 font-mono text-xs shadow-xl shadow-brand/5 sm:p-6">
            <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
              <span className="flex items-center gap-2 text-muted-foreground">
                <Code2 aria-hidden="true" className="size-4 text-brand" /> profile.ts
              </span>
              <span className="rounded-full bg-muted px-2 py-1 text-[10px] tracking-widest text-muted-foreground">
                01 / 04
              </span>
            </div>

            <div className="space-y-1.5 leading-6 text-muted-foreground">
              <p>
                <span className="text-brand">const</span> engineer = {"{"}
              </p>
              <p className="pl-4">
                name: <span className="text-foreground">&quot;Lumiva&quot;</span>,
              </p>
              <p className="pl-4">
                focus: <span className="text-foreground">&quot;full-stack systems&quot;</span>,
              </p>
              <p className="pl-4">
                base: <span className="text-foreground">&quot;Tangerang, ID&quot;</span>,
              </p>
              <p className="pl-4">
                stack: <span className="text-foreground">[&quot;Next.js&quot;, &quot;Laravel&quot;, &quot;Go&quot;]</span>,
              </p>
              <p className="pl-4">
                status: <span className="text-brand">available</span>
              </p>
              <p>{"}"}</p>
              <p className="pt-2">
                <span className="text-brand">engineer</span>.ship(<span className="text-foreground">ideas</span>)
              </p>
            </div>

            {/* subtle glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-brand/10 blur-2xl"
            />

            <div className="absolute -bottom-2 -right-2 hidden rounded-full border border-brand/20 bg-brand px-3.5 py-1.5 text-xs font-medium text-brand-foreground shadow-lg sm:flex">
              ship &gt; talk
            </div>
          </div>

          {/* stacked behind card */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 translate-x-2 translate-y-2 rounded-2xl border border-border bg-muted/50"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 translate-x-4 translate-y-4 rounded-2xl border border-border/50 bg-muted/30"
          />

          {/* trust row below card */}
          <div className="mt-4 flex items-center justify-between rounded-xl border border-border bg-muted/30 px-4 py-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="size-2 rounded-full bg-emerald-500" aria-hidden="true" />
              All systems operational
            </div>
            <span className="font-mono text-xs text-muted-foreground">lumivax.vercel.app</span>
          </div>
        </div>
      </Container>
    </section>
  )
}
