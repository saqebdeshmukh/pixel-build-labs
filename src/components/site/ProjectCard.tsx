import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/site";
import { ProjectPreview } from "./ProjectPreview";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="surface-card hover-lift group relative overflow-hidden p-5 sm:p-6">
      <div className="overflow-hidden rounded-xl">
        <div className="transition-transform duration-700 group-hover:scale-[1.03]">
          <ProjectPreview variant={project.preview} />
        </div>
      </div>

      <div className="mt-6">
        <p className="label-mono">{project.category}</p>
        <h3 className="mt-3 text-xl font-semibold tracking-tight">{project.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li
              key={t}
              className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-[10px] tracking-wide text-muted-foreground"
            >
              {t}
            </li>
          ))}
        </ul>

        <Link
          to="/work/$slug"
          params={{ slug: project.slug }}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
        >
          View Case Study
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          <span className="absolute inset-0" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
