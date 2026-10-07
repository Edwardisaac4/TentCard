import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Ellipsis, UserRound } from "lucide-react";
import { Avatar } from "@/components/avatar";
import { Skeleton } from "@/components/skeleton";
import { Thread } from "@/components/thread";
import { classmates, fullName, getConversation, getPerson } from "@/lib/data";

export function generateStaticParams() {
  return classmates().map((person) => ({ id: person.id }));
}

export async function generateMetadata({ params }: PageProps<"/messages/[id]">): Promise<Metadata> {
  const person = getPerson((await params).id);
  return { title: person ? `Messages with ${fullName(person)}` : "Messages" };
}

// Everything here depends on the URL, so it streams in behind the skeleton and the
// shared shell (sidebar, conversation list) stays instant.
export default function ConversationPage({ params }: PageProps<"/messages/[id]">) {
  return (
    <Suspense fallback={<ConversationSkeleton />}>
      <Conversation params={params} />
    </Suspense>
  );
}

function ConversationSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading conversation" className="flex flex-1 flex-col">
      <div className="flex items-center gap-3 border-b border-line bg-white px-4 py-3 md:px-6">
        <Skeleton className="size-10 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-3 w-64 max-w-full" />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 px-4 py-6 md:px-8">
        <Skeleton className="h-14 w-2/3 max-w-[560px] rounded-card" />
        <Skeleton className="ml-auto h-10 w-1/2 max-w-[420px] rounded-card" />
        <Skeleton className="h-14 w-3/5 max-w-[500px] rounded-card" />
      </div>
      <div className="border-t border-line bg-white px-4 py-3 md:px-6">
        <Skeleton className="h-11" />
      </div>
    </div>
  );
}

async function Conversation({ params }: Pick<PageProps<"/messages/[id]">, "params">) {
  const { id } = await params;
  const person = getPerson(id);
  if (!person) notFound();

  const conversation = getConversation(id);
  const name = fullName(person);
  const subtitle = `${person.role}, ${person.company}`;

  return (
    <>
      <header className="flex items-center gap-3 border-b border-line bg-white px-4 py-3 md:px-6">
        <Link
          href="/messages"
          aria-label="All messages"
          className="-ml-2 flex size-10 items-center justify-center rounded-control text-ink-secondary hover:bg-lagoon-faint md:hidden"
        >
          <ArrowLeft aria-hidden="true" className="size-5" />
        </Link>
        <Avatar name={name} photo={person.photo} size={40} online={conversation?.online} />
        <div className="min-w-0 flex-1">
          <h2 className="truncate font-serif text-title-card font-medium text-ink">{name}</h2>
          <p className="truncate text-label-md font-normal text-ink-secondary">{subtitle}</p>
        </div>
        <Link href={`/people/${person.id}`} className="btn btn-secondary">
          <UserRound aria-hidden="true" className="size-4" />
          <span className="hidden sm:inline">View profile</span>
          <span className="sr-only sm:hidden">View profile</span>
        </Link>
        <button
          type="button"
          aria-label="Conversation options"
          className="flex size-10 items-center justify-center rounded-control text-ink-secondary hover:bg-lagoon-faint hover:text-lagoon"
        >
          <Ellipsis aria-hidden="true" className="size-5" />
        </button>
      </header>

      <Thread
        key={person.id}
        person={{
          firstName: person.firstName,
          name,
          photo: person.photo,
          subtitle,
          canHelpWith: person.canHelpWith,
        }}
        initialMessages={conversation?.messages ?? []}
        readAt={conversation?.readAt}
      />
    </>
  );
}
