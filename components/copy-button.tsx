"use client";

import { useState } from "react";
import { Check, Copy, Link as LinkIcon } from "lucide-react";

/** Copies `value` (or the current page URL) and confirms for two seconds. */
export function CopyButton({
  value,
  label,
  copiedLabel = "Copied",
  srLabel,
  icon = "copy",
  className = "btn btn-secondary",
}: {
  value?: string;
  label: string;
  copiedLabel?: string;
  srLabel?: string;
  icon?: "copy" | "link";
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const Icon = copied ? Check : icon === "link" ? LinkIcon : Copy;

  async function copy() {
    try {
      await navigator.clipboard.writeText(value ?? window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (insecure origin, permissions); leave the button as it was.
    }
  }

  return (
    <button type="button" onClick={copy} className={className}>
      <Icon aria-hidden="true" className="size-4" />
      <span aria-live="polite">{copied ? copiedLabel : label}</span>
      {srLabel && !copied && <span className="sr-only"> {srLabel}</span>}
    </button>
  );
}
