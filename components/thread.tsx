"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { Download, FileText, Paperclip, SendHorizontal } from "lucide-react";
import { Avatar } from "@/components/avatar";
import type { Message } from "@/lib/data";

const MAX_LENGTH = 4000;

type ThreadPerson = {
  firstName: string;
  name: string;
  subtitle: string;
  canHelpWith: string[];
};

export function Thread({
  person,
  initialMessages,
  readAt,
}: {
  person: ThreadPerson;
  initialMessages: Message[];
  readAt?: string;
}) {
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages.length]);

  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;
    // Empty: fall back to the one-row CSS height rather than measuring the placeholder.
    if (!draft) {
      input.style.height = "";
      return;
    }
    input.style.height = "auto";
    input.style.height = `${Math.min(input.scrollHeight, 160)}px`;
  }, [draft]);

  function send() {
    const text = draft.trim();
    if (!text) return;
    const time = new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
    setMessages((current) => [
      ...current,
      { id: `local-${Date.now()}`, from: "me", day: "Today", time, text },
    ]);
    setDraft("");
    inputRef.current?.focus();
  }

  function applySuggestion(text: string) {
    setDraft(text);
    inputRef.current?.focus();
  }

  const lastOwnIndex = messages.findLastIndex((message) => message.from === "me");
  const lastOwnIsOriginal = lastOwnIndex >= 0 && lastOwnIndex < initialMessages.length;

  return (
    <>
      <div
        ref={scrollRef}
        role="log"
        aria-live="polite"
        aria-label={`Conversation with ${person.name}`}
        className="flex-1 overflow-y-auto px-4 py-6 md:px-8"
      >
        {messages.length === 0 ? (
          <FirstMessage person={person} onSuggestion={applySuggestion} />
        ) : (
          <ol className="flex flex-col">
            {messages.map((message, index) => {
              const previous = messages[index - 1];
              const next = messages[index + 1];
              const newDay = previous?.day !== message.day;
              const endsGroup = !next || next.from !== message.from || next.day !== message.day;

              return (
                <Fragment key={message.id}>
                  {newDay && <DaySeparator day={message.day} first={index === 0} />}
                  <li
                    className={`flex flex-col ${message.from === "me" ? "items-end" : "items-start"} ${
                      endsGroup ? "mb-4" : "mb-1"
                    }`}
                  >
                    <Bubble message={message} />
                    {endsGroup && (
                      <span className="mt-1 text-label-md font-normal text-ink-secondary tabular-nums">
                        {index === lastOwnIndex
                          ? lastOwnIsOriginal && readAt
                            ? `Read ${readAt}`
                            : `Sent ${message.time}`
                          : message.time}
                      </span>
                    )}
                  </li>
                </Fragment>
              );
            })}
          </ol>
        )}
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          send();
        }}
        className="flex items-end gap-2 border-t border-line bg-white px-4 py-3 md:px-6"
      >
        <button
          type="button"
          aria-label="Attach a file"
          className="flex size-11 shrink-0 items-center justify-center rounded-control text-ink-secondary hover:bg-lagoon-faint hover:text-lagoon"
        >
          <Paperclip aria-hidden="true" className="size-5" />
        </button>
        <label htmlFor="composer" className="sr-only">
          Message {person.firstName}
        </label>
        <textarea
          id="composer"
          ref={inputRef}
          rows={1}
          value={draft}
          maxLength={MAX_LENGTH}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) {
              event.preventDefault();
              send();
            }
          }}
          placeholder={`Message ${person.firstName}`}
          className="input min-h-11 min-w-0 flex-1 resize-none py-2.5 text-body-lg"
        />
        <button
          type="submit"
          aria-label="Send message"
          disabled={!draft.trim()}
          className="flex size-11 shrink-0 items-center justify-center rounded-full bg-lagoon text-white transition-colors hover:bg-lagoon-hover disabled:cursor-not-allowed disabled:opacity-40"
        >
          <SendHorizontal aria-hidden="true" className="size-5" />
        </button>
      </form>
    </>
  );
}

function DaySeparator({ day, first }: { day: string; first: boolean }) {
  return (
    <li className={`flex items-center gap-3 ${first ? "mb-6" : "my-6"}`}>
      <span aria-hidden="true" className="h-px flex-1 bg-line" />
      <span className="text-label-md font-normal text-ink-secondary">{day}</span>
      <span aria-hidden="true" className="h-px flex-1 bg-line" />
    </li>
  );
}

function Bubble({ message }: { message: Message }) {
  const own = message.from === "me";
  const shape = own
    ? "rounded-card rounded-br-[4px] bg-lagoon text-white"
    : "rounded-card rounded-bl-[4px] border border-line bg-white text-ink";

  if (message.attachment) {
    return (
      <div className={`flex w-80 max-w-[75%] items-center gap-3 p-3 ${shape}`}>
        <span className="flex size-10 shrink-0 items-center justify-center rounded-control bg-lagoon-faint text-lagoon">
          <FileText aria-hidden="true" className="size-5" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-body-md font-semibold">{message.attachment.name}</span>
          <span className={`block text-label-md font-normal ${own ? "text-white/75" : "text-ink-secondary"}`}>
            PDF, {message.attachment.size}
          </span>
        </span>
        <button
          type="button"
          aria-label={`Download ${message.attachment.name}`}
          className="flex size-9 shrink-0 items-center justify-center rounded-control text-ink-secondary hover:bg-lagoon-faint hover:text-lagoon"
        >
          <Download aria-hidden="true" className="size-5" />
        </button>
      </div>
    );
  }

  return (
    <p className={`max-w-[min(75%,560px)] px-4 py-2.5 text-body-lg whitespace-pre-wrap ${shape}`}>
      {message.text}
    </p>
  );
}

function FirstMessage({
  person,
  onSuggestion,
}: {
  person: ThreadPerson;
  onSuggestion: (text: string) => void;
}) {
  const [first, second] = person.canHelpWith.map((item) =>
    /^[A-Z]{2}/.test(item) ? item : item.toLowerCase(),
  );
  const suggestions = [
    first && `Hello ${person.firstName}, I'd love to hear about your experience with ${first}.`,
    second && `Could I ask your advice on ${second}?`,
    "Would you be open to a quick call this week?",
  ].filter(Boolean) as string[];

  return (
    <div className="mx-auto flex max-w-md flex-col items-center py-10 text-center">
      <Avatar name={person.name} size={64} />
      <p className="mt-4 font-serif text-display-sm text-ink">{person.name}</p>
      <p className="text-body-md text-ink-secondary">{person.subtitle}</p>
      <p className="mt-6 text-body-lg text-ink">
        Start a conversation with {person.firstName}. Say who you are and why you&rsquo;re reaching out.
      </p>
      <ul className="mt-6 flex w-full flex-col gap-2">
        {suggestions.map((suggestion) => (
          <li key={suggestion}>
            <button
              type="button"
              onClick={() => onSuggestion(suggestion)}
              className="w-full rounded-control border border-line bg-white px-4 py-3 text-left text-body-md text-ink transition-colors hover:border-lagoon hover:bg-lagoon-faint"
            >
              {suggestion}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
