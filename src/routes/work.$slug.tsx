import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { ProjectPreview } from "@/components/site/ProjectPreview";
import { CTA } from "@/components/site/CTA";
import { PROJECTS, COMPANY } from "@/data/site";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Case study unavailable" }, { name: "robots", content: "noindex" }],
      };
    }
    const t = `${loaderData.project.name} — ${COMPANY.name}`;
    return {
      meta: [
        { title: t },
        { name: "description", content: loaderData.project.description },
        { property: "og:title", content: t },
        { property: "og:description", content: loaderData.project.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/work/${loaderData.project.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/work/${loaderData.project.slug}` }],
    };
  },
  notFoundComponent: CaseStudyNotFound,
  component: CaseStudy,
});

function CaseStudyNotFound() {
  return (
    <>
      <Nav />
      <main className="container-page flex min-h-[60vh] flex-col items-center justify-center pt-32 text-center">
        <h1 className="text-3xl font-semibold">Case study not found</h1>
        <p className="mt-3 text-muted-foreground">This project doesn't exist or was moved.</p>
        <CTA to="/work" className="mt-7">
          Back to work
        </CTA>
      </main>
      <Footer />
    </>
  );
}

function CaseStudy() {
  const { project } = Route.useLoaderData();
  const others = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden border-b border-border pt-32 pb-14 md:pt-40 md:pb-20">
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.2] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
          <div className="container-page relative">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All work
            </Link>
            <p className="label-mono mt-8">{project.category}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {project.description}
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-[10px] tracking-wide text-muted-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="container-page py-14 md:py-20">
          <Reveal>
            <ProjectPreview variant={project.preview} className="p-6" />
            <p className="mt-3 font-mono text-[11px] text-muted-foreground">
              Placeholder preview — replace with real product screenshots.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-12 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-12">
              <Reveal>
                <h2 className="text-2xl font-semibold">Overview</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {project.overview}
                </p>
              </Reveal>
              <Reveal>
                <h2 className="text-2xl font-semibold">The challenge</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {project.challenge}
                </p>
              </Reveal>
              <Reveal>
                <h2 className="text-2xl font-semibold">Our approach</h2>
                <ul className="mt-4 space-y-3">
                  {project.approach.map((a) => (
                    <li key={a} className="flex gap-3 text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="leading-relaxed">{a}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal>
                <h2 className="text-2xl font-semibold">Outcome</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{project.outcome}</p>
              </Reveal>
            </div>

            <Reveal className="lg:sticky lg:top-24 lg:self-start">
              <div className="surface-card p-6">
                <p className="label-mono">Project details</p>
                <dl className="mt-5 space-y-4 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Category</dt>
                    <dd className="mt-1">{project.category}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Technologies</dt>
                    <dd className="mt-1">{project.tags.join(", ")}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Engagement</dt>
                    <dd className="mt-1">End-to-end delivery</dd>
                  </div>
                </dl>
                <CTA to="/contact" className="mt-6 w-full">
                  Discuss a similar project
                </CTA>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-border py-16 md:py-20">
          <div className="container-page">
            <h2 className="text-2xl font-semibold">More work</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to="/work/$slug"
                  params={{ slug: p.slug }}
                  className="surface-card hover-lift group block p-6"
                >
                  <p className="label-mono">{p.category}</p>
                  <h3 className="mt-3 text-lg font-semibold">{p.name}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {p.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
