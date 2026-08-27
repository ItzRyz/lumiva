import { cn } from "@/lib/utils"

export function SectionLabel({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("font-mono text-xs uppercase tracking-[0.2em] text-brand", className)} {...props}>
      {children}
    </p>
  )
}
