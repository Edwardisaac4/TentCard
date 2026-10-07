"use client";

import { useState } from "react";
import { ChevronDown, LayoutGrid, List, Search, SearchX, SlidersHorizontal } from "lucide-react";
import { EmptyState } from "@/components/empty-state";
import { NameCard } from "@/components/name-card";
import { PersonRow } from "@/components/person-row";
import { fullName, type Person } from "@/lib/data";

const filters = ["Industry", "Company", "Location", "Can help with"];

function matches(person: Person, query: string) {
  const haystack = [
    fullName(person),
    person.role,
    person.company,
    person.industry,
    ...person.canHelpWith,
  ]
    .join(" ")
    .toLowerCase();
  return query
    .toLowerCase()
    .split(/\s+/)
    .every((word) => haystack.includes(word));
}

export function DirectoryView({ people }: { people: Person[] }) {
  const [query, setQuery] = useState("");
  const [view, setView] = useState<"cards" | "list">("cards");
  const [ascending, setAscending] = useState(true);

  const results = people
    .filter((person) => matches(person, query.trim()))
    .sort((a, b) => (ascending ? 1 : -1) * fullName(a).localeCompare(fullName(b)));

  return (
    <div className="mt-6">
      <div className="relative w-full max-w-[480px]">
        <label htmlFor="directory-search" className="sr-only">
          Search classmates
        </label>
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-3 size-5 -translate-y-1/2 text-ink-muted"
        />
        <input
          id="directory-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by name, company, role or skill"
          className="input h-11 pl-10 text-body-lg"
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className="flex h-8 items-center gap-1 rounded-control border border-line bg-white pr-2 pl-3 text-body-md text-ink hover:border-lagoon"
          >
            {filter}
            <ChevronDown aria-hidden="true" className="size-4 text-ink-secondary" />
          </button>
        ))}
        <button
          type="button"
          aria-pressed="false"
          className="h-8 rounded-control border border-line bg-white px-3 text-body-md text-ink hover:border-lagoon"
        >
          Joined only
        </button>
        <button type="button" className="btn btn-tertiary h-8 px-2">
          <SlidersHorizontal aria-hidden="true" className="size-4" />
          All filters
        </button>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-body-md text-ink-secondary" aria-live="polite">
          {results.length} {results.length === 1 ? "classmate" : "classmates"}
        </p>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setAscending(!ascending)}
            className="flex h-8 items-center gap-1 rounded-control px-2 text-body-md text-ink hover:bg-lagoon-faint"
          >
            <span className="sr-only">Sort by </span>
            {ascending ? "Name A–Z" : "Name Z–A"}
            <ChevronDown aria-hidden="true" className="size-4 text-ink-secondary" />
          </button>
          <div className="flex rounded-control border border-line bg-white p-0.5">
            <ViewButton
              label="Cards"
              icon={LayoutGrid}
              selected={view === "cards"}
              onClick={() => setView("cards")}
            />
            <ViewButton
              label="List"
              icon={List}
              selected={view === "list"}
              onClick={() => setView("list")}
            />
          </div>
        </div>
      </div>

      <div className="mt-4">
        {results.length === 0 ? (
          <EmptyState
            icon={SearchX}
            title={`No classmates match "${query.trim()}"`}
            body="Try a surname, a company or a skill such as treasury."
            action={{ label: "Clear search", onClick: () => setQuery("") }}
          />
        ) : view === "cards" ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {results.map((person) => (
              <NameCard key={person.id} person={person} />
            ))}
          </div>
        ) : (
          <ul className="divide-y divide-line overflow-hidden rounded-card border border-line bg-white">
            {results.map((person) => (
              <PersonRow key={person.id} person={person} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function ViewButton({
  label,
  icon: Icon,
  selected,
  onClick,
}: {
  label: string;
  icon: typeof List;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`flex h-7 items-center gap-1.5 rounded-[4px] px-2.5 text-label-md transition-colors ${
        selected ? "bg-lagoon-tint text-lagoon" : "text-ink-secondary hover:text-ink"
      }`}
    >
      <Icon aria-hidden="true" className="size-4" />
      {label}
    </button>
  );
}
