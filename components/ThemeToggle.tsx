"use client";

export default function ThemeToggle({ label }: { label: string }) {
  function toggle() {
    const root = document.documentElement;
    const isDark = root.dataset.theme
      ? root.dataset.theme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    const next = isDark ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage blocked: the choice still applies until the page is reloaded.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="cursor-pointer rounded-full border border-line px-3.5 py-1.5 text-muted"
    >
      {label}
    </button>
  );
}
