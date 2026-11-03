import Image from "next/image";
import { banner, profile } from "@/content";
import CopyEmailButton from "./CopyEmailButton";

function ContactBar() {
  const mailto = `mailto:${profile.email}`;

  return (
    <div className="mt-[18px] flex max-w-[560px] flex-wrap items-center gap-2.5 rounded-[18px] bg-black/18 p-2.5">
      <a href={mailto} className="min-w-0 flex-auto px-2 font-medium [overflow-wrap:anywhere]">
        {profile.email}
      </a>
      <span className="flex flex-nowrap gap-2">
        <CopyEmailButton email={profile.email} label={banner.copyEmail} copiedLabel={banner.copied} />
        <a
          href={mailto}
          className="rounded-full bg-thread px-4 py-[9px] text-[.9rem] font-medium whitespace-nowrap text-[#1C2027]"
        >
          {banner.email}
        </a>
      </span>
    </div>
  );
}

export default function Banner() {
  const linkClass = "underline underline-offset-4 opacity-85 hover:opacity-100";

  return (
    <header
      aria-labelledby="name-heading"
      className="mt-2 mb-14 overflow-hidden rounded-[28px] bg-banner px-5 py-7 text-base text-on-banner min-[720px]:p-11"
    >
      <div className="grid items-center gap-7 min-[820px]:grid-cols-[260px_1fr] min-[820px]:gap-12">
        {profile.portrait && (
          <Image
            src={profile.portrait}
            alt={profile.portraitAlt}
            width={800}
            height={1000}
            sizes="260px"
            preload
            className="banner-portrait aspect-[4/5] w-full max-w-[260px] rounded-[999px_999px_16px_16px] border-[3px] border-thread object-cover"
          />
        )}
        <div>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-[5px] text-[.86rem] before:size-2 before:shrink-0 before:rounded-full before:bg-thread before:content-['']">
            {profile.status}
          </span>
          <h1
            id="name-heading"
            className="mb-4 font-serif text-[length:clamp(2.3rem,5vw,4rem)] leading-none font-light tracking-[-.02em]"
          >
            {profile.name.first} <em className="block pl-[.9em]">{profile.name.last}</em>
          </h1>
          <p className="mb-1.5 max-w-[32ch] font-serif text-[length:clamp(1.1rem,1.8vw,1.3rem)] leading-[1.45]">
            {profile.lede}
          </p>
          <ContactBar />
          <div className="mt-4 flex flex-wrap gap-5 text-[.95rem]">
            <a href={profile.links.linkedin} target="_blank" rel="noopener" className={linkClass}>
              {banner.linkedin}
            </a>
            <a href={profile.links.github} target="_blank" rel="noopener" className={linkClass}>
              {banner.github}
            </a>
            {profile.cvUrl && (
              <a href={profile.cvUrl} download className={linkClass}>
                {banner.downloadCv}
              </a>
            )}
            <a href={banner.projectsHref} className={linkClass}>
              {banner.seeProjects}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
