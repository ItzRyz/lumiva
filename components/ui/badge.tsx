import { cn } from "@/lib/utils"

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export function BrandBadge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-brand/10 px-3 py-1 font-mono text-xs font-medium text-brand ring-1 ring-brand/20",
        className
      )}
      {...props}
    />
  )
}
