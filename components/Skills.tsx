import { skills, skillsHeading } from "@/content";
import SectionHead from "./SectionHead";

export default function Skills() {
  return (
    <section aria-labelledby="skills-heading" className="border-t border-line py-[72px]">
      <SectionHead id="skills-heading" title={skillsHeading} />
      <div className="grid gap-7 min-[800px]:ml-[300px] min-[800px]:grid-cols-3">
        {skills.map((skill) => (
          <div key={skill.group}>
            <h3 className="mb-2.5 text-base font-bold">{skill.group}</h3>
            <ul className="text-muted">
              {skill.items.map((item) => (
                <li key={item} className="py-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
