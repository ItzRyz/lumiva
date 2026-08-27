import { cn } from "@/lib/utils"

export function Container({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mx-auto max-w-6xl px-5 lg:px-8", className)} {...props} />
}
