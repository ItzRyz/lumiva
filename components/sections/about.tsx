import { Coffee, Gamepad2, GraduationCap, Music2, Trophy } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { SectionLabel } from '@/components/ui/section-label'

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-y border-border bg-muted/30">
      <Container className="grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-24">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <SectionLabel>/ about</SectionLabel>
          <h2
            id="about-heading"
            className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl text-balance"
          >
            Curious by default.
            <br />
            <span className="text-muted-foreground">Calm by design.</span>
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground">
              <Coffee aria-hidden="true" className="size-3.5" /> Coffee-driven
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground">
              <Gamepad2 aria-hidden="true" className="size-3.5" /> Gamer
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground">
              <Music2 aria-hidden="true" className="size-3.5" /> Music
            </span>
          </div>
        </div>

        <div className="max-w-2xl">
          <p className="text-xl leading-8 text-foreground">
            I care about the part users don&apos;t see: the architecture, edge cases, and thoughtful details that make a
            product feel inevitable.
          </p>
          <p className="mt-5 leading-7 text-muted-foreground">
            Outside of code, you&apos;ll find me with a cup of coffee, inside a game, or listening to music. I&apos;m
            currently freelancing with Lumitalyst — a small product team — and always open to a good technical
            conversation. I bias toward shipping: small, useful iterations over big reveals.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <GraduationCap aria-hidden="true" className="size-4 text-brand" /> Education
              </div>
              <p className="mt-3 font-medium">Pamulang University</p>
              <p className="text-sm text-muted-foreground">S1 Informatics Engineering · 2025 — Present</p>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                Focus: software engineering, databases, AI.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <Trophy aria-hidden="true" className="size-4 text-brand" /> Achievement
              </div>
              <p className="mt-3 font-medium">3rd Place · LKS AI 2025</p>
              <p className="text-sm text-muted-foreground">Malang City — City level</p>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">Applied AI problem solving under time constraints.</p>
            </div>
          </div>

          <blockquote className="mt-8 border-l-2 border-brand pl-4 text-sm leading-6 text-muted-foreground">
            &ldquo;Ship &gt; talk. The best interface is the one that disappears and lets people get work done.&rdquo;
          </blockquote>
        </div>
      </Container>
    </section>
  )
}
