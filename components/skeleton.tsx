/** Grey placeholder block for loading states. Shape it with className; no spinners. */
export function Skeleton({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`rounded-control bg-line motion-safe:animate-pulse ${className}`} />;
}
