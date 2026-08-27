import { Container } from '@/components/ui/container'
import { siteConfig, socials } from '@/lib/data'

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/20">
      <Container className="py-10">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <a href="#top" className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight">
              <span className="flex size-7 items-center justify-center rounded-md bg-brand text-xs font-bold text-brand-foreground">
                L
              </span>
              Lumiva
            </a>
            <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
              {siteConfig.description.slice(0, 98)}.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Navigate</p>
              <ul className="mt-3 flex flex-col gap-2 text-muted-foreground">
                <li>
                  <a className="hover:text-foreground hover:underline underline-offset-4" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="hover:text-foreground hover:underline underline-offset-4" href="#projects">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="hover:text-foreground hover:underline underline-offset-4" href="#skills">
                    Skills
                  </a>
                </li>
                <li>
                  <a className="hover:text-foreground hover:underline underline-offset-4" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Connect</p>
              <ul className="mt-3 flex flex-col gap-2 text-muted-foreground">
                <li>
                  <a href={socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a href={`mailto:${socials.email}`} className="hover:text-foreground">
                    {socials.email}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Colophon</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Built with Next.js 16, Tailwind 4 & shadcn. Type set in Inter + JetBrains Mono. Deployed on Vercel.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Lumiva — Muhammad Salman Al Farizi. Built with intention.</span>
          <span className="font-mono">{socials.location}</span>
        </div>
      </Container>
    </footer>
  )
}
