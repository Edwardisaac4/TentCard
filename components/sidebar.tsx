import { Suspense } from "react";
import Image from "next/image";
import { Ellipsis } from "lucide-react";
import { Avatar } from "@/components/avatar";
import { ActiveNavLinks, NavLinks } from "@/components/nav-links";
import { cohort, currentUserId, fullName, getPerson, unreadMessageCount } from "@/lib/data";

/** Deep lagoon rail: 248px from 1024px, an 80px icon rail below that. */
export function Sidebar() {
  const me = getPerson(currentUserId)!;
  const navProps = { unread: unreadMessageCount(), showDesk: Boolean(me.isLead) };

  return (
    <aside className="sticky top-0 flex h-dvh w-20 shrink-0 flex-col bg-lagoon-deep py-6 text-white lg:w-rail">
      <div className="mb-8 px-3 lg:px-6">
        <Image {...cohort.schoolCrest} alt={cohort.school} loading="eager" className="mx-auto h-10 w-auto lg:hidden" />
        <Image {...cohort.schoolLogo} alt={cohort.school} loading="eager" className="hidden h-16 w-auto lg:block" />
      </div>

      {/* usePathname needs a Suspense boundary on routes with params unknown at build time */}
      <Suspense fallback={<NavLinks pathname={null} {...navProps} />}>
        <ActiveNavLinks {...navProps} />
      </Suspense>

      <div className="mt-auto flex flex-col items-center gap-3 border-t border-white/10 px-3 pt-4 lg:flex-row lg:px-6">
        <Avatar name={fullName(me)} photo={me.photo} size={36} />
        <span className="sr-only lg:not-sr-only lg:min-w-0 lg:flex-1 lg:truncate lg:font-serif lg:text-body-lg lg:font-medium">
          {fullName(me)}
        </span>
        <button
          type="button"
          aria-label="Account options"
          className="flex size-9 items-center justify-center rounded-control text-white/70 hover:bg-white/5 hover:text-white"
        >
          <Ellipsis aria-hidden="true" className="size-5" />
        </button>
      </div>
    </aside>
  );
}
