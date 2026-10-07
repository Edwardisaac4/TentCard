import type { Metadata } from "next";
import { MessageSquare } from "lucide-react";
import { EmptyState } from "@/components/empty-state";

export const metadata: Metadata = { title: "Messages" };

export default function MessagesPage() {
  return (
    <div className="hidden flex-1 items-center justify-center md:flex">
      <EmptyState
        icon={MessageSquare}
        title="Choose a conversation"
        body="Pick someone on the left, or find a classmate in the directory to start something new."
        action={{ label: "Open directory", href: "/directory" }}
      />
    </div>
  );
}
