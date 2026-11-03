"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  email: string;
  label: string;
  copiedLabel: string;
};

export default function CopyEmailButton({ email, label, copiedLabel }: Props) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      return; // Clipboard unavailable: the address stays visible and selectable.
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="cursor-pointer rounded-full border border-white/35 px-4 py-[9px] whitespace-nowrap text-[.9rem] font-medium"
    >
      <span aria-live="polite">{copied ? copiedLabel : label}</span>
    </button>
  );
}
