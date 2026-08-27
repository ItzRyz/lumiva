'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  Code2,
  ExternalLink,
  Globe2,
  BriefcaseBusiness,
  AtSign,
  Menu,
  Moon,
  Send,
  Sparkles,
  Sun,
  X,
} from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

const projects = [
  { name: 'Glucocare AI', url: 'https://glucocare-ai.vercel.app', type: 'AI / Healthcare', desc: 'An intelligent companion for understanding diabetes care through approachable, data-informed insights.', tags: ['Next.js', 'AI', 'TypeScript'] },
  { name: 'FinSight', url: 'https://app.finsight.space', type: 'Fintech Platform', desc: 'A focused financial workspace that turns personal money data into clearer decisions.', tags: ['React', 'TypeScript', 'PostgreSQL'] },
  { name: 'Insync', url: 'https://insync-orpin.vercel.app', type: 'Productivity', desc: 'A shared space for keeping teams aligned, moving, and in sync.', tags: ['Next.js', 'NestJS', 'MongoDB'] },
  { name: 'Inventaris API', url: 'https://github.com/ItzRyz/inventaris-api', type: 'Open Source', desc: 'Inventory management API designed around clean, predictable backend workflows.', tags: ['Go', 'Fiber', 'PostgreSQL'] },
  { name: 'Licensing API', url: 'https://github.com/ItzRyz/licensing-api', type: 'Open Source', desc: 'A licensing service built to make software access easier to manage and scale.', tags: ['Laravel', 'GraphQL', 'MySQL'] },
]

const stack = {
  Languages: ['PHP', 'TypeScript', 'Go', 'Python', 'Java'],
  Frameworks: ['Laravel', 'CodeIgniter', 'Spring Boot', 'FastAPI', 'Flask', 'Go Fiber', 'React', 'Next.js', 'NestJS'],
  Data: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'GraphQL'],
  Tools: ['Git', 'VS Code', 'GitHub', 'Jupyter'],
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight"><span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">R</span><span>ryz.dev</span></a>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex"><a href="#about" className="transition-colors hover:text-foreground">About</a><a href="#projects" className="transition-colors hover:text-foreground">Projects</a><a href="#skills" className="transition-colors hover:text-foreground">Skills</a><a href="#contact" className="transition-colors hover:text-foreground">Contact</a></nav>
          <div className="flex items-center gap-2"><Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? <Sun /> : <Moon />}</Button><Button variant="outline" size="icon" className="md:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button></div>
        </div>
        {menuOpen && <nav className="flex flex-col gap-1 border-t border-border px-5 py-3 text-sm md:hidden"><a onClick={() => setMenuOpen(false)} href="#about" className="rounded-md px-3 py-3 hover:bg-muted">About</a><a onClick={() => setMenuOpen(false)} href="#projects" className="rounded-md px-3 py-3 hover:bg-muted">Projects</a><a onClick={() => setMenuOpen(false)} href="#skills" className="rounded-md px-3 py-3 hover:bg-muted">Skills</a><a onClick={() => setMenuOpen(false)} href="#contact" className="rounded-md px-3 py-3 hover:bg-muted">Contact</a></nav>}
      </header>

      <section id="top" className="mx-auto grid max-w-6xl gap-12 px-5 pb-24 pt-20 lg:grid-cols-[1.2fr_.8fr] lg:items-end lg:px-8 lg:pb-32 lg:pt-28">
        <div><div className="mb-7 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary"><span className="size-2 rounded-full bg-primary" />Available for select collaborations</div><h1 className="max-w-3xl text-balance text-5xl font-semibold tracking-[-0.06em] sm:text-7xl lg:text-8xl">Building the <span className="text-muted-foreground">quietly powerful.</span></h1><p className="mt-8 max-w-xl text-pretty text-lg leading-8 text-muted-foreground">I&apos;m Ryz, a software engineer crafting dependable products across the web. From Pamulang University to the Lumitalyst development team, I turn complex problems into useful systems.</p><div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg"><a href="#projects">Explore my work <ArrowUpRight data-icon="inline-end" /></a></Button><Button asChild variant="outline" size="lg"><a href="#contact">Let&apos;s connect</a></Button></div></div>
        <div className="relative min-h-56 rounded-xl border border-border bg-card p-5 font-mono text-xs text-muted-foreground shadow-2xl shadow-primary/5"><div className="mb-8 flex items-center justify-between border-b border-border pb-4"><span className="flex items-center gap-2"><Code2 className="text-primary" /> profile.ts</span><span>01 / 04</span></div><div className="flex flex-col gap-3"><p><span className="text-primary">const</span> engineer = {'{'}</p><p className="pl-4">name: <span className="text-foreground">&quot;Ryz&quot;</span>,</p><p className="pl-4">focus: <span className="text-foreground">&quot;full-stack systems&quot;</span>,</p><p className="pl-4">base: <span className="text-foreground">&quot;Tangerang, ID&quot;</span>,</p><p className="pl-4">status: <span className="text-primary">true</span></p><p>{'}'}</p></div><div className="absolute -bottom-3 -right-3 rounded-md border border-primary/30 bg-primary px-3 py-2 text-primary-foreground">ship &gt; talk</div></div>
      </section>

      <section id="about" className="border-y border-border bg-muted/30"><div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[.7fr_1.3fr] lg:px-8 lg:py-24"><div><p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">/ about</p><h2 className="mt-4 text-3xl font-semibold tracking-tight">Curious by default.</h2></div><div className="max-w-2xl"><p className="text-xl leading-8 text-foreground">I care about the part users don&apos;t see: the architecture, edge cases, and thoughtful details that make a product feel inevitable.</p><p className="mt-5 leading-7 text-muted-foreground">Outside of code, you&apos;ll find me with a cup of coffee, inside a game, or listening to music. I&apos;m currently freelancing with Lumitalyst and always open to a good technical conversation.</p><div className="mt-8 grid gap-5 sm:grid-cols-2"><div className="border-l-2 border-primary pl-4"><p className="font-mono text-xs text-muted-foreground">EDUCATION</p><p className="mt-2 font-medium">Pamulang University</p></div><div className="border-l-2 border-primary pl-4"><p className="font-mono text-xs text-muted-foreground">ACHIEVEMENT</p><p className="mt-2 font-medium">3rd Place · 2025 LKS AI Award, Malang City</p></div></div></div></div></section>

      <section id="projects" className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28"><div className="mb-10 flex items-end justify-between gap-4"><div><p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">/ selected work</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Things I&apos;ve shipped.</h2></div><span className="hidden font-mono text-xs text-muted-foreground sm:block">05 projects</span></div><div className="grid gap-4 lg:grid-cols-2">{projects.map((project, index) => <a key={project.name} href={project.url} target="_blank" rel="noreferrer" className={`group flex min-h-64 flex-col justify-between rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/5 ${index === 0 ? 'lg:col-span-2 lg:min-h-72' : ''}`}><div className="flex items-start justify-between gap-4"><div><p className="font-mono text-xs uppercase tracking-wider text-primary">{project.type}</p><h3 className="mt-3 text-2xl font-semibold tracking-tight">{project.name}</h3></div><ExternalLink className="text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div><div><p className="max-w-2xl leading-7 text-muted-foreground">{project.desc}</p><div className="mt-6 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-md bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground">{tag}</span>)}</div></div></a>)}</div></section>

      <section id="skills" className="border-y border-border bg-card"><div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28"><div className="max-w-xl"><p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">/ toolkit</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">The tools behind the work.</h2></div><div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{Object.entries(stack).map(([category, items]) => <div key={category}><h3 className="flex items-center gap-2 font-mono text-sm text-foreground"><span className="text-primary">//</span>{category}</h3><ul className="mt-5 flex flex-col gap-3 text-muted-foreground">{items.map(item => <li key={item} className="flex items-center gap-2 text-sm"><Check className="size-4 text-primary" />{item}</li>)}</ul></div>)}</div></div></section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28"><div className="rounded-xl border border-border bg-muted/30 p-6 sm:p-10 lg:p-14"><div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">/ contact</p><h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">Have a problem worth solving?</h2><p className="mt-6 max-w-lg leading-7 text-muted-foreground">Tell me what you&apos;re building. I&apos;ll bring curiosity, clarity, and a bias toward shipping.</p></div><Button asChild size="lg"><a href="mailto:hello@ryz.dev">Start a conversation <Send data-icon="inline-end" /></a></Button></div><div className="mt-12 flex flex-wrap gap-3 border-t border-border pt-6"><a className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground" href="https://github.com/ItzRyz" target="_blank" rel="noreferrer"><Globe2 className="size-4" /> GitHub</a><a className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground" href="https://www.linkedin.com" target="_blank" rel="noreferrer"><BriefcaseBusiness className="size-4" /> LinkedIn</a><a className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground" href="https://www.instagram.com" target="_blank" rel="noreferrer"><AtSign className="size-4" /> Instagram</a><span className="ml-auto flex items-center gap-2 font-mono text-xs text-muted-foreground"><Sparkles className="size-4 text-primary" /> open to possibilities</span></div></div></section>
      <footer className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-border px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8"><span>© 2026 Ryz. Built with intention.</span><span className="font-mono">Pamulang · Indonesia</span></footer>
    </main>
  )
}
