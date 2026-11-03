"use client";

import { useEffect, useRef, useState } from "react";
import { nav, profile } from "@/content";

const sectionIds = nav.links.map((link) => link.href.slice(1));
const clickLockMs = 900;

type LinksProps = {
  active: string | null;
  onSelect: (id: string) => void;
  linkClassName: string;
};

function SectionLinks({ active, onSelect, linkClassName }: LinksProps) {
  const groupRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);

  // The observer also catches font loading and this group being shown or hidden.
  useEffect(() => {
    const group = groupRef.current;
    const pill = pillRef.current;
    if (!group || !pill) return;

    function placePill() {
      const link = group?.querySelector<HTMLElement>("a[aria-current]");
      if (!pill) return;
      if (!link || !link.offsetWidth) {
        pill.style.opacity = "0";
        return;
      }
      pill.style.width = `${link.offsetWidth}px`;
      pill.style.transform = `translateX(${link.offsetLeft}px)`;
      pill.style.opacity = "1";
    }

    placePill();
    const observer = new ResizeObserver(placePill);
    observer.observe(group);
    return () => observer.disconnect();
  }, [active]);

  return (
    <div ref={groupRef} className="relative flex gap-1 rounded-full p-1">
      <span
        ref={pillRef}
        aria-hidden="true"
        className="absolute top-1 left-0 h-[calc(100%-8px)] w-0 rounded-full bg-surface opacity-0 shadow-[0_1px_2px_rgba(28,32,39,.08),0_0_0_1px_var(--line)] transition-[transform,width,opacity] duration-[350ms] ease-[cubic-bezier(.2,.7,.2,1)] motion-reduce:transition-none"
      />
      {nav.links.map((link) => {
        const id = link.href.slice(1);
        const isActive = id === active;
        return (
          <a
            key={link.href}
            href={link.href}
            aria-current={isActive ? "true" : undefined}
            onClick={() => onSelect(id)}
            className={`relative z-[1] rounded-full whitespace-nowrap transition-colors motion-reduce:transition-none ${linkClassName} ${
              isActive ? "font-medium text-teal" : "text-muted hover:text-ink"
            }`}
          >
            {link.label}
          </a>
        );
      })}
    </div>
  );
}

export default function Nav() {
  const [stuck, setStuck] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const clickLock = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function onScroll() {
      setStuck(window.scrollY > 8);
      if (clickLock.current) return;

      let current: string | null = null;
      if (window.scrollY > 8) {
        const line = window.innerHeight * 0.35;
        for (const id of sectionIds) {
          const section = document.getElementById(id);
          if (section && section.getBoundingClientRect().top <= line) current = id;
        }
        const atBottom =
          window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
        if (atBottom) current = sectionIds[sectionIds.length - 1];
      }
      setActive(current);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (clickLock.current) clearTimeout(clickLock.current);
    };
  }, []);

  function select(id: string | null) {
    setActive(id);
    if (clickLock.current) clearTimeout(clickLock.current);
    clickLock.current = setTimeout(() => {
      clickLock.current = null;
    }, clickLockMs);
  }

  const parts = nav.monogram.split(".");

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-[250ms] motion-reduce:transition-none ${
          stuck
            ? "border-line bg-[color-mix(in_srgb,var(--paper)_82%,transparent)] shadow-[0_6px_24px_rgba(28,32,39,.06)] backdrop-blur-[14px]"
            : "border-transparent"
        }`}
      >
        <nav
          aria-label={nav.ariaLabel}
          className={`mx-auto flex max-w-[1080px] items-center gap-4 px-4 transition-[height] duration-[250ms] motion-reduce:transition-none min-[720px]:px-10 ${
            stuck ? "h-[60px] max-[720px]:h-14" : "h-[76px] max-[720px]:h-16"
          }`}
        >
          <a href="#top" onClick={() => select(null)} className="mr-auto font-serif text-[1.3rem]">
            {parts.map((part, index) => (
              <span key={part}>
                {index > 0 && <span className="text-teal">.</span>}
                {part}
              </span>
            ))}
          </a>
          <div
            className={`rounded-full transition-colors duration-[250ms] motion-reduce:transition-none max-[720px]:hidden ${
              stuck ? "bg-[color-mix(in_srgb,var(--teal)_6%,transparent)]" : ""
            }`}
          >
            <SectionLinks active={active} onSelect={select} linkClassName="px-3.5 py-[7px] text-[.94rem]" />
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-banner px-4 py-2 text-[.92rem] font-medium whitespace-nowrap text-on-banner hover:brightness-110"
          >
            {nav.email}
          </a>
        </nav>
      </header>
      {/* Holds the nav's space at a constant height. If the nav shrank in the page
          flow, the browser's scroll correction would flip the stuck state on and off. */}
      <div aria-hidden="true" className="h-[76px] max-[720px]:h-16" />
      <nav
        aria-label={nav.tabBarLabel}
        className="fixed bottom-[max(14px,env(safe-area-inset-bottom))] left-1/2 z-[60] -translate-x-1/2 rounded-full bg-[color-mix(in_srgb,var(--paper)_88%,transparent)] shadow-[0_8px_28px_rgba(28,32,39,.16),0_0_0_1px_var(--line)] backdrop-blur-[14px] min-[721px]:hidden"
      >
        <SectionLinks active={active} onSelect={select} linkClassName="px-[13px] py-[9px] text-[.88rem]" />
      </nav>
    </>
  );
}
