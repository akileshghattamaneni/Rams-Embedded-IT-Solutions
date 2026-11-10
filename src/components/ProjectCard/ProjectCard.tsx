import { useState } from "react";
import type { ProjectDomain } from "../../data/projects";
import { whatsappHref, whatsappMessages } from "../../lib/whatsapp";
import { Button } from "../Button/Button";

export function ProjectCard({ project }: { project: ProjectDomain }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white shadow-(--shadow-card)">
      <img
        src={project.image}
        alt={project.imageAlt}
        width={700}
        height={500}
        loading="lazy"
        className="aspect-[16/10] w-full object-cover"
      />
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Project domain
        </p>
        <h3 className="mt-3 font-heading text-xl font-semibold text-navy">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-ink">{project.shortDescription}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.topics.map((topic) => (
            <li
              key={topic}
              className="rounded-full bg-paper px-3 py-1 text-xs font-medium text-navy-2"
            >
              {topic}
            </li>
          ))}
        </ul>
        {open ? (
          <p className="mt-4 text-sm leading-6 text-ink">{project.detail}</p>
        ) : null}
        <div className="mt-6 flex flex-wrap gap-3">
          <Button
            type="button"
            variant="navy"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
          >
            {open ? "Hide details" : "Learn More"}
          </Button>
          <Button
            href={whatsappHref(whatsappMessages.project(project.title))}
            variant="outline"
          >
            Enquire Now
          </Button>
        </div>
      </div>
    </article>
  );
}
