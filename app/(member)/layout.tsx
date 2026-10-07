import { Sidebar } from "@/components/sidebar";

export default function MemberLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh">
      <Sidebar />
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}
