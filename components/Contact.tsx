import { contact, profile } from "@/content";

export default function Contact() {
  const linkClass = "text-muted hover:text-ink";

  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-t border-line py-[72px]">
      <h2
        id="contact-heading"
        className="mb-6 max-w-[16ch] font-serif text-[length:clamp(2.2rem,6vw,4.2rem)] leading-[1.05] font-light"
      >
        {contact.heading}
      </h2>
      <a
        href={`mailto:${profile.email}`}
        className="font-serif text-[length:clamp(1.2rem,3vw,1.8rem)] [overflow-wrap:anywhere] underline decoration-thread underline-offset-[6px]"
      >
        {profile.email}
      </a>
      <ul className="mt-7 flex flex-wrap gap-5">
        <li>
          <a href={profile.links.linkedin} target="_blank" rel="noopener" className={linkClass}>
            {contact.linkedin}
          </a>
        </li>
        <li>
          <a href={profile.links.github} target="_blank" rel="noopener" className={linkClass}>
            {contact.github}
          </a>
        </li>
      </ul>
    </section>
  );
}
