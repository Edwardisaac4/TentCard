"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Handshake,
  House,
  LayoutDashboard,
  MessageSquare,
  Users,
  type LucideIcon,
} from "lucide-react";

type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  /** Other path prefixes that should light this item up, e.g. profiles under Directory. */
  matches?: string[];
};

const memberItems: NavItem[] = [
  { href: "/home", label: "Home", icon: House },
  { href: "/directory", label: "Directory", icon: Users, matches: ["/people"] },
  { href: "/messages", label: "Messages", icon: MessageSquare },
  { href: "/board", label: "Board", icon: Handshake },
];

const deskItem: NavItem = { href: "/desk", label: "Cohort desk", icon: LayoutDashboard };

function isActive(item: NavItem, pathname: string | null) {
  if (!pathname) return false;
  return [item.href, ...(item.matches ?? [])].some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

export function NavLinks({
  pathname,
  unread,
  showDesk,
}: {
  pathname: string | null;
  unread: number;
  showDesk: boolean;
}) {
  return (
    <nav aria-label="Main" className="flex flex-col gap-1 px-2 lg:px-3">
      {memberItems.map((item) => (
        <NavLink
          key={item.href}
          item={item}
          active={isActive(item, pathname)}
          badge={item.href === "/messages" ? unread : 0}
        />
      ))}
      {showDesk && (
        <>
          <hr className="mx-2 my-3 border-white/10" />
          <NavLink item={deskItem} active={isActive(deskItem, pathname)} />
        </>
      )}
    </nav>
  );
}

export function ActiveNavLinks(props: { unread: number; showDesk: boolean }) {
  return <NavLinks pathname={usePathname()} {...props} />;
}

function NavLink({ item, active, badge = 0 }: { item: NavItem; active: boolean; badge?: number }) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      className={`relative flex flex-col items-center gap-1 rounded-control px-1 py-2 text-label-sm transition-colors lg:h-11 lg:flex-row lg:gap-3 lg:px-3 lg:py-0 lg:text-body-md lg:font-medium ${
        active
          ? "bg-lagoon text-white"
          : "text-white/70 hover:bg-white/5 hover:text-white"
      }`}
    >
      {active && (
        <span aria-hidden="true" className="absolute inset-y-2 left-0 w-[3px] rounded-full bg-brass" />
      )}
      <span className="relative">
        <Icon aria-hidden="true" className="size-6 lg:size-5" />
        {badge > 0 && (
          <span
            aria-hidden="true"
            className="absolute -top-1.5 -right-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-lagoon-tint px-1 text-[11px] leading-none font-semibold text-lagoon-deep tabular-nums lg:hidden"
          >
            {badge}
          </span>
        )}
      </span>
      <span className="text-center lg:flex-1 lg:text-left">{item.label}</span>
      {badge > 0 && (
        <>
          <span className="sr-only">, {badge} unread</span>
          <span
            aria-hidden="true"
            className="hidden h-5 min-w-5 items-center justify-center rounded-full bg-lagoon-tint px-1.5 text-label-sm text-lagoon-deep tabular-nums lg:flex"
          >
            {badge}
          </span>
        </>
      )}
    </Link>
  );
}
