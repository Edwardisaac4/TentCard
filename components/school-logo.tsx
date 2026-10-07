import { cohort } from "@/lib/data";

/**
 * The school's logo in the primary colour, for light backgrounds. The asset is white on
 * transparent (cut for the navy sidebar), so it's used as a mask over a lagoon fill.
 */
export function SchoolLogo({ className = "" }: { className?: string }) {
  const { src, width, height } = cohort.schoolLogo;
  const mask = `url(${src}) center / contain no-repeat`;

  return (
    <div
      role="img"
      aria-label={cohort.school}
      className={`bg-lagoon ${className}`}
      style={{ aspectRatio: `${width} / ${height}`, mask, WebkitMask: mask }}
    />
  );
}
