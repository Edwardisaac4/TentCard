import Link from "next/link";
import { MapPin, MessageSquare } from "lucide-react";
import { Avatar } from "@/components/avatar";
import { fullName, toSentenceList, type Person } from "@/lib/data";

/** The folded tent card: white, 3px brass rule along the top edge. */
export function NameCard({ person }: { person: Person }) {
  const name = fullName(person);

  return (
    <article className="card card-seminar flex flex-col p-5">
      <div className="flex gap-4">
        <Avatar name={name} photo={person.photo} size={56} />
        <div className="min-w-0">
          <h2 className="font-serif text-display-sm text-ink">{name}</h2>
          {person.isLead && <span className="chip chip-lead mt-1">Cohort lead</span>}
          <p className="mt-1 text-body-lg text-ink">{person.role}</p>
          <p className="text-body-lg text-ink-secondary">{person.company}</p>
        </div>
      </div>

      <hr className="my-4" />

      <div className="flex flex-wrap gap-2">
        <span className="chip bg-lagoon-tint text-lagoon">{person.industry}</span>
        {person.location && (
          <span className="chip border-line text-ink-secondary">
            <MapPin aria-hidden="true" className="size-3.5" />
            {person.location}
          </span>
        )}
      </div>

      {person.canHelpWith.length > 0 && (
        <p className="mt-3 text-body-md text-ink-secondary">
          <span className="font-medium text-ink">Can help with:</span>{" "}
          {toSentenceList(person.canHelpWith)}
        </p>
      )}

      <div className="mt-auto flex items-center gap-2 pt-5">
        <Link href={`/messages/${person.id}`} className="btn btn-secondary">
          <MessageSquare aria-hidden="true" className="size-4" />
          Message<span className="sr-only"> {name}</span>
        </Link>
        <Link href={`/people/${person.id}`} className="btn btn-tertiary">
          View profile<span className="sr-only"> of {name}</span>
        </Link>
      </div>
    </article>
  );
}
