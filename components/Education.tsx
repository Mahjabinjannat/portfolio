import { education } from "@/content";
import SectionHead from "./SectionHead";

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="border-t border-line py-[72px]">
      <SectionHead id="education-heading" title={education.heading} intro={education.intro} />
      <div className="grid gap-5 min-[800px]:ml-[300px]">
        <article className="grid gap-5 rounded-[20px] border border-line bg-surface p-7 min-[640px]:grid-cols-[auto_1fr] min-[640px]:gap-8">
          <div className="font-serif text-[2.4rem] leading-none font-light whitespace-nowrap text-teal">
            {education.years}
            <span className="mt-2 block font-sans text-base text-muted">{education.note}</span>
          </div>
          <div>
            <h3 className="mb-1 font-serif text-[1.45rem] leading-[1.25] font-normal">{education.degree}</h3>
            <p className="mb-[18px] text-muted">{education.school}</p>
            <div className="border-l-[3px] border-thread py-0.5 pl-4">
              <b className="block text-[.9rem] font-medium text-muted">{education.thesisLabel}</b>
              <p className="mt-0.5 font-serif text-[1.15rem]">{education.thesis}</p>
            </div>
          </div>
        </article>
        <div className="grid gap-5 min-[640px]:grid-cols-2">
          {education.learning.map((note) => (
            <div key={note.title} className="border-t border-line pt-4">
              <h3 className="mb-1.5 text-base font-bold">{note.title}</h3>
              <p className="text-muted">{note.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
