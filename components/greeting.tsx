"use client";

import { useId, useSyncExternalStore } from "react";
import { InlineScript } from "@/components/inline-script";

const noSubscription = () => () => {};

function timeOfDay() {
  const hour = new Date().getHours();
  return hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
}

/**
 * "Good morning, Tunde" in the member's own time zone. The server can't know the local time,
 * so it renders a neutral greeting and the inline script corrects it before first paint;
 * client-side navigations read the clock directly.
 */
export function Greeting({ name }: { name: string }) {
  const id = useId();
  const salutation = useSyncExternalStore(noSubscription, timeOfDay, () => null);

  return (
    <>
      <span id={id} suppressHydrationWarning>
        {salutation ? `${salutation}, ${name}` : `Welcome back, ${name}`}
      </span>
      <InlineScript
        html={`{var n=document.getElementById(${JSON.stringify(id)});if(n){var h=new Date().getHours();n.textContent=(h<12?"Good morning":h<17?"Good afternoon":"Good evening")+", "+${JSON.stringify(name)}}}`}
      />
    </>
  );
}
