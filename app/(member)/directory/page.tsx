import type { Metadata } from "next";
import { DirectoryView } from "@/components/directory-view";
import { PageHeader } from "@/components/page-header";
import { classmates } from "@/lib/data";

export const metadata: Metadata = { title: "Directory" };

export default function DirectoryPage() {
  return (
    <div className="mx-auto max-w-content px-4 py-6 md:p-6 lg:p-8">
      <PageHeader title="Directory" />
      <DirectoryView people={classmates()} />
    </div>
  );
}
