import Link from "next/link";
import type { LucideIcon } from "lucide-react";

/** 32px outline icon, a one-line title, one sentence of guidance and one button. */
export function EmptyState({
  icon: Icon,
  title,
  body,
  action,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
  action?: { label: string; href?: string; onClick?: () => void };
}) {
  return (
    <div className="mx-auto flex max-w-sm flex-col items-center px-6 py-16 text-center">
      <Icon aria-hidden="true" className="size-8 text-ink-secondary" />
      <h2 className="mt-4 text-title-card text-ink">{title}</h2>
      <p className="mt-2 text-body-lg text-ink-secondary">{body}</p>
      {action?.href && (
        <Link href={action.href} className="btn btn-secondary mt-6">
          {action.label}
        </Link>
      )}
      {action?.onClick && (
        <button type="button" onClick={action.onClick} className="btn btn-secondary mt-6">
          {action.label}
        </button>
      )}
    </div>
  );
}
