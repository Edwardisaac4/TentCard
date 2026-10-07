import Link from "next/link";
import { ChevronRight, MapPin } from "lucide-react";
import { Avatar } from "@/components/avatar";
import { fullName, type Person } from "@/lib/data";

/** Directory list row: avatar, name, role and company; the whole row opens the profile. */
export function PersonRow({ person }: { person: Person }) {
  const name = fullName(person);

  return (
    <li>
      <Link
        href={`/people/${person.id}`}
        className="flex min-h-16 items-center gap-4 px-4 py-3 transition-colors hover:bg-lagoon-faint"
      >
        <Avatar name={name} photo={person.photo} size={40} />
        <span className="min-w-0 flex-1">
          <span className="block truncate font-serif text-title-card font-medium text-ink">{name}</span>
          <span className="block truncate text-body-md text-ink-secondary">
            {person.role}, {person.company}
          </span>
        </span>
        <span className="hidden items-center gap-2 md:flex">
          <span className="chip bg-lagoon-tint text-lagoon">{person.industry}</span>
          {person.location && (
            <span className="chip border-line text-ink-secondary">
              <MapPin aria-hidden="true" className="size-3.5" />
              {person.location}
            </span>
          )}
        </span>
        <ChevronRight aria-hidden="true" className="size-5 shrink-0 text-ink-muted" />
      </Link>
    </li>
  );
}
