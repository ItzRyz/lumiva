export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
      <div className="h-8 w-32 animate-pulse rounded bg-muted" />
      <div className="mt-6 h-16 w-3/4 animate-pulse rounded bg-muted" />
      <div className="mt-4 h-4 w-1/2 animate-pulse rounded bg-muted" />
    </div>
  )
}
