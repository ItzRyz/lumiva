'use client'

import * as React from 'react'
import { AtSign, BriefcaseBusiness, Check, Copy, Globe2, Mail, Send, Sparkles } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { SectionLabel } from '@/components/ui/section-label'
import { Button } from '@/components/ui/button'
import { socials } from '@/lib/data'

export function Contact() {
  const [copied, setCopied] = React.useState(false)
  const [formState, setFormState] = React.useState<'idle' | 'sent'>('idle')

  const copyEmail = async () => {
    await navigator.clipboard.writeText(socials.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const name = fd.get('name') as string
    const email = fd.get('email') as string
    const message = fd.get('message') as string
    // honeypot
    if (fd.get('website')) return
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)
    window.location.href = `mailto:${socials.email}?subject=${subject}&body=${body}`
    setFormState('sent')
    setTimeout(() => setFormState('idle'), 3000)
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-background">
      <Container className="py-16 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          {/* left */}
          <div className="rounded-2xl border border-border bg-muted/30 p-6 sm:p-8 lg:p-10">
            <SectionLabel>/ contact</SectionLabel>
            <h2
              id="contact-heading"
              className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl text-balance"
            >
              Have a problem worth solving?
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
              Tell me what you&apos;re building. I&apos;ll bring curiosity, clarity, and a bias toward shipping.
              Response time — usually within a day.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-11 rounded-full px-6">
                <a href={`mailto:${socials.email}`}>
                  Start a conversation <Send aria-hidden="true" data-icon="inline-end" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="h-11 rounded-full px-6" onClick={copyEmail}>
                {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
                {copied ? 'Copied!' : `Copy ${socials.email}`}
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border pt-6 text-sm">
              <a
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground hover:underline underline-offset-4"
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe2 aria-hidden="true" className="size-4" /> GitHub
              </a>
              <a
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground hover:underline underline-offset-4"
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BriefcaseBusiness aria-hidden="true" className="size-4" /> LinkedIn
              </a>
              <a
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground hover:underline underline-offset-4"
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AtSign aria-hidden="true" className="size-4" /> Instagram
              </a>
              <span className="ml-auto inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <Sparkles aria-hidden="true" className="size-4 text-brand" /> open to possibilities
              </span>
            </div>

            <div className="mt-6 rounded-xl border border-border bg-card p-4">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <Mail aria-hidden="true" className="size-3.5" /> Direct
              </div>
              <a href={`mailto:${socials.email}`} className="mt-2 block font-mono text-sm font-medium hover:underline">
                {socials.email}
              </a>
              <p className="mt-1 text-xs text-muted-foreground">{socials.location} · {socials.availability}</p>
            </div>
          </div>

          {/* right - form */}
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
            aria-label="Contact form"
            noValidate
          >
            <h3 className="font-semibold tracking-tight">Send a message</h3>
            <p className="mt-1 text-sm text-muted-foreground">Or email directly — form opens your mail app.</p>

            {/* honeypot */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="What are you building? Timeline & budget help me respond faster..."
                  className="mt-1.5 w-full resize-none rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
                />
              </div>
            </div>

            <Button type="submit" className="mt-6 w-full h-11 rounded-full" disabled={formState === 'sent'}>
              {formState === 'sent' ? (
                <>
                  <Check aria-hidden="true" /> Message ready — check your mail app
                </>
              ) : (
                <>
                  Send message <Send aria-hidden="true" data-icon="inline-end" />
                </>
              )}
            </Button>
            <p className="mt-3 text-center font-mono text-xs text-muted-foreground">
              No spam. No tracking. Just a mailto that respects your inbox.
            </p>
          </form>
        </div>
      </Container>
    </section>
  )
}
