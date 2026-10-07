import type { Metadata } from "next";
import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { AnnouncementCard } from "@/components/announcement-card";
import { Avatar } from "@/components/avatar";
import { Greeting } from "@/components/greeting";
import { PageHeader } from "@/components/page-header";
import {
  announcements,
  boardPosts,
  currentUserId,
  fullName,
  getPerson,
  newThisWeek,
  suggestions,
  type BoardPost,
  type Person,
} from "@/lib/data";

export const metadata: Metadata = { title: "Home" };

export default function HomePage() {
  const me = getPerson(currentUserId)!;
  const pinned = announcements.find((announcement) => announcement.pinned);
  const asks = boardPosts.filter((post) => post.type === "ask").slice(0, 3);

  return (
    <div className="mx-auto max-w-content px-4 py-6 md:p-6 lg:p-8">
      <PageHeader title={<Greeting name={me.firstName} />} />

      <div className="mt-6 grid items-start gap-8 xl:grid-cols-[minmax(0,1fr)_340px]">
        <div className="flex min-w-0 flex-col gap-8">
          {pinned && <AnnouncementCard announcement={pinned} />}

          <section aria-labelledby="new-this-week">
            <SectionHeader id="new-this-week" title="New this week" link={{ href: "/directory", label: "See all", context: "classmates" }} />
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {newThisWeek.map((id) => (
                <CompactNameCard key={id} person={getPerson(id)!} />
              ))}
            </ul>
          </section>

          <section aria-labelledby="open-asks">
            <SectionHeader id="open-asks" title="Open asks" link={{ href: "/board", label: "See all", context: "asks" }} />
            <ul className="divide-y divide-line rounded-card border border-line bg-white">
              {asks.map((post) => (
                <AskRow key={post.id} post={post} />
              ))}
            </ul>
          </section>
        </div>

        <section aria-labelledby="people-to-meet" className="min-w-0">
          <SectionHeader id="people-to-meet" title="People you might want to meet" />
          <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
            {suggestions.map(({ personId, reason }) => (
              <SuggestionCard key={personId} person={getPerson(personId)!} reason={reason} />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

function SectionHeader({
  id,
  title,
  link,
}: {
  id: string;
  title: string;
  link?: { href: string; label: string; context: string };
}) {
  return (
    <div className="mb-4 flex min-h-8 items-center justify-between gap-4">
      <h2 id={id} className="font-serif text-display-sm text-ink">
        {title}
      </h2>
      {link && (
        <Link href={link.href} className="btn btn-tertiary -mr-2 h-8 px-2">
          {link.label}
          <span className="sr-only"> {link.context}</span>
        </Link>
      )}
    </div>
  );
}

function CompactNameCard({ person }: { person: Person }) {
  const name = fullName(person);

  return (
    <li>
      <Link
        href={`/people/${person.id}`}
        className="card card-seminar flex h-full flex-col p-5 transition-colors hover:bg-lagoon-faint"
      >
        <Avatar name={name} size={48} />
        <span className="mt-4 font-serif text-title-card font-medium text-ink">{name}</span>
        <span className="mt-1 text-body-md text-ink">{person.role}</span>
        <span className="text-body-md text-ink-secondary">{person.company}</span>
      </Link>
    </li>
  );
}

function AskRow({ post }: { post: BoardPost }) {
  const author = getPerson(post.authorId)!;

  return (
    <li className="px-5 py-4">
      <div className="flex items-center justify-between gap-4">
        <span className="chip bg-lagoon-tint text-lagoon">Ask</span>
        <span className="text-label-md font-normal text-ink-secondary">{post.posted}</span>
      </div>
      <p className="mt-2 text-title-card text-ink">{post.title}</p>
      <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-body-md text-ink-secondary">
        <Link href={`/people/${author.id}`} className="font-serif text-ink hover:text-lagoon hover:underline">
          {fullName(author)}
        </Link>
        <span className="flex items-center gap-1.5">
          <MessageSquare aria-hidden="true" className="size-4" />
          {post.replies} {post.replies === 1 ? "reply" : "replies"}
        </span>
      </div>
    </li>
  );
}

function SuggestionCard({ person, reason }: { person: Person; reason: string }) {
  const name = fullName(person);

  return (
    <li className="card card-seminar flex flex-col p-5">
      <div className="flex gap-4">
        <Avatar name={name} size={56} />
        <div className="min-w-0">
          <p className="font-serif text-display-sm text-ink">{name}</p>
          <p className="mt-1 text-body-md text-ink">{person.role}</p>
          <p className="text-body-md text-ink-secondary">{person.company}</p>
        </div>
      </div>
      <p className="mt-4 rounded-control bg-lagoon-faint px-3 py-2 text-body-md text-ink-secondary">
        {reason}
      </p>
      <div className="mt-4 flex items-center gap-2">
        <Link href={`/messages/${person.id}`} className="btn btn-secondary">
          <MessageSquare aria-hidden="true" className="size-4" />
          Message<span className="sr-only"> {name}</span>
        </Link>
        <Link href={`/people/${person.id}`} className="btn btn-tertiary">
          View profile<span className="sr-only"> of {name}</span>
        </Link>
      </div>
    </li>
  );
}
