import { Suspense } from "react";
import {
  ActiveConversationList,
  ConversationList,
  type ConversationSummary,
} from "@/components/conversation-list";
import { channels, conversations, fullName, getPerson } from "@/lib/data";

function summaries(): ConversationSummary[] {
  return conversations.map((conversation) => {
    const person = getPerson(conversation.personId)!;
    const last = conversation.messages.at(-1)!;
    const body = last.attachment ? `Sent a file: ${last.attachment.name}` : last.text!;
    return {
      id: person.id,
      name: fullName(person),
      photo: person.photo,
      preview: last.from === "me" ? `You: ${body}` : body,
      lastActivity: conversation.lastActivity,
      unread: conversation.unread,
      online: conversation.online,
    };
  });
}

export default function MessagesLayout({ children }: { children: React.ReactNode }) {
  const listProps = { conversations: summaries(), channels };

  return (
    <div className="flex h-dvh">
      {/* useParams needs a Suspense boundary on routes with params unknown at build time */}
      <Suspense fallback={<ConversationList selectedId={null} {...listProps} />}>
        <ActiveConversationList {...listProps} />
      </Suspense>
      <section className="flex min-w-0 flex-1 flex-col bg-canvas">{children}</section>
    </div>
  );
}
