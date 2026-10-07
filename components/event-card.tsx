import Image from "next/image";
import { CalendarDays, Clock, MapPin, Shirt, UtensilsCrossed, type LucideIcon } from "lucide-react";
import type { CohortEvent } from "@/lib/data";

/** A class get-together: group photo, a big serif headline, then the practical details. */
export function EventCard({ event }: { event: CohortEvent }) {
  const details: { icon: LucideIcon; label: string; value: string }[] = [
    { icon: CalendarDays, label: "Date", value: event.date },
    { icon: Clock, label: "Time", value: event.time },
    { icon: MapPin, label: "Venue", value: event.venue },
    { icon: Shirt, label: "Dress code", value: event.dressCode },
    { icon: UtensilsCrossed, label: "Food and drinks", value: event.food },
  ];

  return (
    <article aria-labelledby={event.id} className="overflow-hidden rounded-card border border-line bg-white">
      <Image
        src={event.photo.src}
        alt={event.photo.alt}
        width={event.photo.width}
        height={event.photo.height}
        sizes="(min-width: 1280px) 640px, 100vw"
        className="aspect-[2/1] w-full object-cover"
      />
      <div className="p-6">
        <span className="chip bg-lagoon-tint text-lagoon">{event.name}</span>
        <h3 id={event.id} className="mt-3 font-serif text-display-lg text-lagoon">
          {event.title}
        </h3>
        <p className="mt-2 max-w-prose text-body-lg text-ink">{event.body}</p>

        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          {details.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-lagoon-faint text-lagoon">
                <Icon aria-hidden="true" className="size-5" />
              </span>
              <div>
                <dt className="text-label-md font-normal text-ink-secondary">{label}</dt>
                <dd className="text-body-lg font-medium text-ink">{value}</dd>
              </div>
            </div>
          ))}
        </dl>

        <p className="mt-6 rounded-control bg-lagoon-faint px-4 py-3 text-body-md text-ink">
          <span className="font-semibold">RSVP:</span> {event.rsvp}
        </p>
      </div>
    </article>
  );
}
