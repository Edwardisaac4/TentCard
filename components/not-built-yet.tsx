import { Hammer } from "lucide-react";
import { EmptyState } from "@/components/empty-state";
import { PageHeader } from "@/components/page-header";

/** Stand-in for nav destinations whose screens haven't been built yet. */
export function NotBuiltYet({ title }: { title: string }) {
  return (
    <div className="mx-auto max-w-content px-4 py-6 md:p-6 lg:p-8">
      <PageHeader title={title} />
      <EmptyState
        icon={Hammer}
        title={`${title} hasn't been built yet`}
        body="The directory, messages and profiles are ready to try."
        action={{ label: "Go to directory", href: "/directory" }}
      />
    </div>
  );
}
