import { Pin } from "lucide-react";
import { Avatar } from "@/components/avatar";
import { fullName, getPerson, type Announcement } from "@/lib/data";

/** White card with a 3px brass left border (square on that side), as members see it on Home. */
export function AnnouncementCard({ announcement }: { announcement: Announcement }) {
  const author = getPerson(announcement.authorId)!;
  const authorName = fullName(author);

  return (
    <article className="rounded-r-card border border-l-[3px] border-line border-l-brass bg-white p-6">
      <div className="flex items-start gap-3">
        {announcement.pinned && (
          <>
            <Pin aria-hidden="true" className="mt-1.5 size-4 shrink-0 text-ink-secondary" />
            <span className="sr-only">Pinned announcement:</span>
          </>
        )}
        <div className="min-w-0">
          <h2 className="font-serif text-display-sm text-ink">{announcement.title}</h2>
          <p className="mt-2 max-w-prose text-body-lg text-ink">{announcement.body}</p>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-body-md">
            <Avatar name={authorName} photo={author.photo} size={24} />
            <span className="font-serif text-ink">{authorName}</span>
            {author.isLead && <span className="chip chip-lead">Cohort lead</span>}
            <span className="ml-1 text-ink-secondary">{announcement.posted}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
