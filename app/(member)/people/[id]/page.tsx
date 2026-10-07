import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Mail, MapPin, MessageCircle, MessageSquare, Phone } from "lucide-react";
import { Avatar } from "@/components/avatar";
import { CopyButton } from "@/components/copy-button";
import { PageHeader } from "@/components/page-header";
import { Skeleton } from "@/components/skeleton";
import { fullName, getPerson, people, type Person } from "@/lib/data";

export function generateStaticParams() {
  return people.map((person) => ({ id: person.id }));
}

export async function generateMetadata({ params }: PageProps<"/people/[id]">): Promise<Metadata> {
  const person = getPerson((await params).id);
  return { title: person ? fullName(person) : "Profile" };
}

const columns = "mt-6 grid items-start gap-10 lg:grid-cols-[360px_minmax(0,680px)] xl:gap-16";

// The header is the same for every profile; only the profile itself depends on the URL,
// so it streams in behind a skeleton and the shell stays instant.
export default function ProfilePage({ params }: PageProps<"/people/[id]">) {
  return (
    <div className="mx-auto max-w-content px-4 py-6 md:p-6 lg:p-8">
      <PageHeader back={{ href: "/directory", label: "Directory" }} />
      <Suspense fallback={<ProfileSkeleton />}>
        <Profile params={params} />
      </Suspense>
    </div>
  );
}

function ProfileSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading profile" className={columns}>
      <div className="card card-seminar p-8">
        <Skeleton className="size-32 rounded-full" />
        <Skeleton className="mt-6 h-10 w-3/4" />
        <Skeleton className="mt-4 h-4 w-2/3" />
        <Skeleton className="mt-2 h-4 w-1/2" />
        <Skeleton className="mt-8 h-12" />
        <Skeleton className="mt-3 h-12" />
      </div>
      <div className="flex flex-col gap-10 lg:pt-2">
        {[0, 1, 2].map((section) => (
          <div key={section} className="space-y-3">
            <Skeleton className="h-6 w-36" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        ))}
      </div>
    </div>
  );
}

async function Profile({ params }: Pick<PageProps<"/people/[id]">, "params">) {
  const person = getPerson((await params).id);
  if (!person) notFound();

  const name = fullName(person);

  return (
    <div className={columns}>
      <section aria-label={name} className="card card-seminar p-8 lg:sticky lg:top-8">
        <Avatar name={name} photo={person.photo} size={128} />
        <h1 className="mt-6 font-serif text-display-lg text-ink">{name}</h1>
        {person.isLead && <span className="chip chip-lead mt-2">Cohort lead</span>}
        <p className="mt-2 text-body-lg text-ink">{person.role}</p>
        <p className="text-body-lg text-ink-secondary">{person.company}</p>
        {person.location && (
          <p className="mt-2 flex items-center gap-1.5 text-body-md text-ink-secondary">
            <MapPin aria-hidden="true" className="size-4" />
            {person.location}
          </p>
        )}
        <div className="mt-8 flex flex-col gap-3">
          <Link href={`/messages/${person.id}`} className="btn btn-primary h-12 text-body-lg">
            <MessageSquare aria-hidden="true" className="size-5" />
            Message
          </Link>
          <CopyButton label="Copy profile link" copiedLabel="Link copied" icon="link" className="btn btn-secondary h-12" />
        </div>
      </section>

      <div className="flex flex-col gap-10 lg:pt-2">
        {person.bio && (
          <Section title="About">
            <p className="max-w-prose text-body-lg text-ink">{person.bio}</p>
          </Section>
        )}

        {person.canHelpWith.length > 0 && (
          <Section title="Can help with">
            <ChipList items={person.canHelpWith} className="bg-lagoon-tint text-lagoon" />
          </Section>
        )}

        {person.lookingFor.length > 0 && (
          <Section title="Looking for">
            <ChipList items={person.lookingFor} className="border-line bg-white text-ink" />
          </Section>
        )}

        <Section title="Work">
          <dl className="divide-y divide-line rounded-card border border-line bg-white">
            <WorkRow label="Company" value={person.company} />
            <WorkRow label="Industry" value={person.industry} />
            <WorkRow label="Role" value={person.role} />
          </dl>
        </Section>

        {(person.phone || person.email) && (
          <Section title="Contact">
            <ContactRows person={person} />
          </Section>
        )}

        {person.channels.length > 0 && (
          <Section title="Shared with you">
            <ChipList
              items={person.channels.map((channel) => `# ${channel}`)}
              className="border-line bg-white text-ink-secondary"
            />
          </Section>
        )}
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-4 font-serif text-display-sm text-ink">{title}</h2>
      {children}
    </section>
  );
}

function ChipList({ items, className }: { items: string[]; className: string }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className={`flex h-8 items-center rounded-control border border-transparent px-3 text-body-md ${className}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function WorkRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-5 py-4">
      <dt className="text-label-md text-ink-secondary">{label}</dt>
      <dd className="mt-1 text-body-lg text-ink">{value}</dd>
    </div>
  );
}

function ContactRows({ person }: { person: Person }) {
  return (
    <ul className="divide-y divide-line rounded-card border border-line bg-white">
      {person.phone && (
        <li className="flex flex-wrap items-center gap-3 px-5 py-4">
          <Phone aria-hidden="true" className="size-5 text-ink-secondary" />
          <span className="sr-only">Phone</span>
          <span className="flex-1 text-body-lg text-ink tabular-nums">{person.phone}</span>
          <a href={`tel:${person.phone.replace(/\s/g, "")}`} className="btn btn-secondary h-9">
            <Phone aria-hidden="true" className="size-4" />
            Call
          </a>
          <a
            href={`https://wa.me/${person.phone.replace(/\D/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary h-9"
          >
            <MessageCircle aria-hidden="true" className="size-4" />
            WhatsApp
          </a>
        </li>
      )}
      {person.email && (
        <li className="flex flex-wrap items-center gap-3 px-5 py-4">
          <Mail aria-hidden="true" className="size-5 text-ink-secondary" />
          <span className="sr-only">Email</span>
          <span className="min-w-0 flex-1 truncate text-body-lg text-ink">{person.email}</span>
          <CopyButton value={person.email} label="Copy" srLabel="email address" className="btn btn-tertiary h-9" />
        </li>
      )}
    </ul>
  );
}
