import Image from "next/image";
import { profile, projects, projectsSection, type Project } from "@/content";
import SectionHead from "./SectionHead";

function ProjectCard({ project, flipped }: { project: Project; flipped: boolean }) {
  const { image } = project;
  const linkClass = "font-medium underline decoration-thread underline-offset-4";

  return (
    <article className="grid items-center gap-6 min-[800px]:grid-cols-[1.25fr_1fr] min-[800px]:gap-12">
      <div className={`relative pb-8 ${flipped ? "min-[800px]:order-2" : ""}`}>
        <div className="rounded-[20px] bg-frame p-3.5">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[6px] border border-line bg-surface shadow-[0_10px_30px_rgba(28,32,39,.08)]">
            <Image
              src={image.desktop}
              alt={image.alt}
              fill
              sizes="(min-width: 800px) 500px, 100vw"
              className="object-cover object-top"
            />
          </div>
        </div>
        {image.mobile && (
          <div
            className={`absolute right-3 bottom-0 aspect-[1/2] w-[21%] min-w-[92px] overflow-hidden rounded-[18px] border-4 border-ink bg-surface shadow-[0_12px_28px_rgba(28,32,39,.22)] ${
              flipped ? "min-[800px]:right-auto min-[800px]:-left-[18px]" : "min-[800px]:-right-[18px]"
            }`}
          >
            <Image
              src={image.mobile}
              alt={image.mobileAlt ?? ""}
              fill
              sizes="(min-width: 800px) 112px, 92px"
              className="object-cover object-top"
            />
          </div>
        )}
      </div>
      <div>
        <h3 className="mb-1.5 font-serif text-[1.6rem] font-normal">
          {project.title}
          {project.titleBn && (
            <span lang="bn" className="ml-2 font-bn text-[1.2rem] text-muted">
              {project.titleBn}
            </span>
          )}
        </h3>
        <p className="mb-3.5 text-[.92rem] font-medium text-teal">{project.kind}</p>
        <p className="mb-3.5 max-w-[46ch]">{project.description}</p>
        <ul className="mb-[18px] flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-line px-2.5 py-1 text-[.82rem] text-muted">
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-5">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener" className={linkClass}>
              {projectsSection.visitLive}
            </a>
          )}
          <a href={project.codeUrl} target="_blank" rel="noopener" className={linkClass}>
            {projectsSection.viewCode}
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const { more } = projectsSection;

  return (
    <section id="work" aria-labelledby="work-heading" className="py-[72px]">
      <SectionHead id="work-heading" title={projectsSection.heading} intro={projectsSection.intro} />
      <div className="grid gap-16">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} flipped={index % 2 === 1} />
        ))}
      </div>
      <p className="mt-12 text-muted min-[800px]:ml-[300px]">
        {more.before}
        <a href={profile.links.github} target="_blank" rel="noopener" className="underline">
          {more.link}
        </a>
        {more.after}
      </p>
    </section>
  );
}
