"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Lock, Search } from "lucide-react";
import { Avatar } from "@/components/avatar";
import type { Channel } from "@/lib/data";

export type ConversationSummary = {
  id: string;
  name: string;
  photo?: string;
  preview: string;
  lastActivity: string;
  unread: number;
  online?: boolean;
};

type Props = { conversations: ConversationSummary[]; channels: Channel[] };

export function ConversationList({ selectedId, conversations, channels }: Props & { selectedId: string | null }) {
  const [segment, setSegment] = useState<"direct" | "channels">("direct");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const visibleConversations = conversations.filter((conversation) =>
    `${conversation.name} ${conversation.preview}`.toLowerCase().includes(q),
  );
  const visibleChannels = channels.filter((channel) =>
    `${channel.name} ${channel.preview}`.toLowerCase().includes(q),
  );

  return (
    // Below 768px the list and the thread take turns filling the screen.
    <div
      className={`${selectedId ? "hidden md:flex" : "flex"} h-dvh w-full shrink-0 flex-col border-r border-line bg-white md:w-[300px] lg:w-[360px]`}
    >
      <div className="flex flex-col gap-4 px-4 pt-6 pb-4 lg:px-5">
        <h1 className="font-serif text-display-md text-ink">Messages</h1>
        <div className="grid grid-cols-2 rounded-control border border-line p-0.5">
          <SegmentButton selected={segment === "direct"} onClick={() => setSegment("direct")}>
            Direct
          </SegmentButton>
          <SegmentButton selected={segment === "channels"} onClick={() => setSegment("channels")}>
            Channels
          </SegmentButton>
        </div>
        <div className="relative">
          <label htmlFor="message-search" className="sr-only">
            Search messages
          </label>
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-ink-muted"
          />
          <input
            id="message-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search messages"
            className="input pl-9"
          />
        </div>
      </div>

      <ul className="flex-1 overflow-y-auto border-t border-line">
        {segment === "direct" &&
          visibleConversations.map((conversation) => (
            <ConversationRow
              key={conversation.id}
              conversation={conversation}
              selected={conversation.id === selectedId}
            />
          ))}
        {segment === "channels" &&
          visibleChannels.map((channel) => <ChannelRow key={channel.name} channel={channel} />)}
        {(segment === "direct" ? visibleConversations : visibleChannels).length === 0 && (
          <li className="px-5 py-8 text-center text-body-md text-ink-secondary">
            Nothing matches &ldquo;{query.trim()}&rdquo;.
          </li>
        )}
      </ul>
    </div>
  );
}

export function ActiveConversationList(props: Props) {
  const params = useParams<{ id?: string }>();
  return <ConversationList selectedId={params.id ?? null} {...props} />;
}

function SegmentButton({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`h-8 rounded-[4px] text-label-md transition-colors ${
        selected ? "bg-lagoon-tint text-lagoon" : "text-ink-secondary hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}

function ConversationRow({
  conversation,
  selected,
}: {
  conversation: ConversationSummary;
  selected: boolean;
}) {
  const unread = conversation.unread > 0;

  return (
    <li>
      <Link
        href={`/messages/${conversation.id}`}
        aria-current={selected ? "page" : undefined}
        className={`flex min-h-[72px] items-center gap-3 px-4 py-3 transition-colors lg:px-5 ${
          selected ? "bg-lagoon-tint" : "hover:bg-lagoon-faint"
        }`}
      >
        <Avatar name={conversation.name} photo={conversation.photo} size={48} online={conversation.online} />
        <span className="min-w-0 flex-1">
          <span className="flex items-baseline justify-between gap-2">
            <span className="truncate font-serif text-title-card font-medium text-ink">
              {conversation.name}
            </span>
            <span className="shrink-0 text-label-md font-normal text-ink-secondary tabular-nums">
              {conversation.lastActivity}
            </span>
          </span>
          <span className="mt-0.5 flex items-center justify-between gap-2">
            <span
              className={`truncate text-body-md ${unread ? "font-medium text-ink" : "text-ink-secondary"}`}
            >
              {conversation.preview}
            </span>
            {unread && (
              <span className="flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-lagoon px-1.5 text-label-sm text-white tabular-nums">
                {conversation.unread}
                <span className="sr-only"> unread</span>
              </span>
            )}
          </span>
        </span>
      </Link>
    </li>
  );
}

function ChannelRow({ channel }: { channel: Channel }) {
  return (
    <li className="flex min-h-[72px] flex-col justify-center px-4 py-3 lg:px-5">
      <span className="flex items-baseline justify-between gap-2">
        <span className="flex min-w-0 items-center gap-1.5">
          <span className="truncate text-title-card text-ink"># {channel.name}</span>
          {channel.leadOnly && <Lock aria-hidden="true" className="size-4 shrink-0 text-ink-secondary" />}
          <span className="shrink-0 text-label-md font-normal text-ink-secondary tabular-nums">
            {channel.members} members
          </span>
        </span>
        <span className="shrink-0 text-label-md font-normal text-ink-secondary tabular-nums">
          {channel.lastActivity}
        </span>
      </span>
      <span className="mt-0.5 flex items-center justify-between gap-2">
        <span className="truncate text-body-md text-ink-secondary">
          {channel.leadOnly ? "Only the cohort lead can post" : channel.preview}
        </span>
        {channel.unread && (
          <span className="flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-lagoon px-1.5 text-label-sm text-white tabular-nums">
            {channel.unread}
            <span className="sr-only"> unread</span>
          </span>
        )}
      </span>
    </li>
  );
}
