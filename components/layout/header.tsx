'use client'

import * as React from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from './theme-toggle'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [active, setActive] = React.useState<string>('#top')
  const [scrolled, setScrolled] = React.useState(false)

  // scroll shadow
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // scrollspy
  React.useEffect(() => {
    const ids = ['top', 'about', 'experience', 'projects', 'skills', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`)
        })
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // close on resize to desktop
  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Esc to close + focus trap return
  const menuBtnRef = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        menuBtnRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  // lock body scroll when menu open
  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70',
        scrolled ? 'border-border shadow-sm' : 'border-transparent'
      )}
    >
      <a
        href="#main-content"
        className="sr-only left-4 top-4 z-50 bg-primary px-4 py-2 text-sm text-primary-foreground focus:not-sr-only focus:fixed focus:rounded-md"
      >
        Skip to content
      </a>

      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-2.5 rounded-md font-mono text-sm font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <span className="flex size-8 items-center justify-center rounded-lg bg-brand text-sm font-bold tracking-tighter text-brand-foreground">
            L
          </span>
          <span>Lumiva</span>
          <span className="hidden text-xs font-normal text-muted-foreground sm:inline">— Salman</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? 'page' : undefined}
              className={cn(
                'rounded-full px-3.5 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                active === item.href
                  ? 'bg-foreground text-background'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button
            ref={menuBtnRef}
            variant="outline"
            size="icon"
            className="md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X aria-hidden="true" className="size-4" /> : <Menu aria-hidden="true" className="size-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu - overlay */}
      {menuOpen && (
        <div className="fixed inset-0 top-[53px] z-40 bg-background/95 backdrop-blur-xl md:hidden">
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="flex h-full flex-col px-5 py-6"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {navItems.map((item, i) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ animationDelay: `${i * 40}ms` }}
                  className={cn(
                    'animate-in fade-in slide-in-from-top-2 flex items-center justify-between rounded-xl border px-4 py-3.5 text-base font-medium transition-colors duration-300',
                    active === item.href
                      ? 'border-foreground bg-foreground text-background'
                      : 'border-border bg-card hover:bg-muted'
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn('text-xs', active === item.href ? 'text-background/70' : 'text-muted-foreground')}
                  >
                    →
                  </span>
                </a>
              ))}
            </nav>
            <div className="mt-auto border-t border-border pt-6">
              <p className="font-mono text-xs text-muted-foreground">© 2026 Lumiva · Pamulang, ID</p>
              <p className="mt-1 text-sm text-muted-foreground">Crafting dependable systems since 2022.</p>
            </div>
          </div>
          {/* click outside to close */}
          <button
            aria-label="Close menu backdrop"
            className="absolute inset-0 -z-10"
            onClick={() => setMenuOpen(false)}
            tabIndex={-1}
          />
        </div>
      )}
    </header>
  )
}
