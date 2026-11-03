import Image from "next/image";
import { about, profile } from "@/content";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-t border-line py-[72px]">
      <div className="grid gap-8 min-[800px]:grid-cols-[260px_1fr] min-[800px]:gap-10">
        <div>
          <h2 id="about-heading" className="font-serif text-[2rem] leading-[1.15] font-normal">
            {about.heading}
          </h2>
          {profile.portrait && (
            <div className="relative mt-6 aspect-[4/5] overflow-hidden rounded-[140px_140px_8px_8px] bg-surface">
              <Image
                src={profile.portrait}
                alt={profile.portraitAlt}
                fill
                sizes="(min-width: 800px) 260px, 100vw"
                className="object-cover"
              />
            </div>
          )}
        </div>
        <div className="max-w-[62ch] font-serif text-[1.2rem] leading-[1.7]">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mb-[1em]">
              {paragraph}
            </p>
          ))}
          <div className="mt-2 flex flex-wrap gap-7 font-sans text-[.95rem]">
            {about.facts.map((fact) => (
              <div key={fact.value}>
                <b className="block font-bold">{fact.value}</b>
                <span className="text-muted">{fact.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
