import Link from "next/link";
import { ArrowLeft, Bell } from "lucide-react";
import { Avatar } from "@/components/avatar";
import { currentUserId, fullName, getPerson } from "@/lib/data";

/** Page title (or a back link) on the left; notifications and the member's avatar on the right. */
export function PageHeader({
  title,
  back,
}: {
  title?: React.ReactNode;
  back?: { href: string; label: string };
}) {
  const me = getPerson(currentUserId)!;

  return (
    <header className="flex min-h-11 items-center justify-between gap-4">
      {title && <h1 className="font-serif text-display-md text-ink">{title}</h1>}
      {back && (
        <Link href={back.href} className="btn btn-tertiary -ml-4">
          <ArrowLeft aria-hidden="true" className="size-5" />
          {back.label}
        </Link>
      )}
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Notifications, 2 unread"
          className="relative flex size-10 items-center justify-center rounded-control text-ink-secondary hover:bg-lagoon-faint hover:text-lagoon"
        >
          <Bell aria-hidden="true" className="size-5" />
          <span aria-hidden="true" className="absolute top-2 right-2.5 size-2 rounded-full bg-lagoon" />
        </button>
        <Avatar name={fullName(me)} photo={me.photo} size={36} />
      </div>
    </header>
  );
}
