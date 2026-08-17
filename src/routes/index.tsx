import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTA } from "@/components/site/CTA";
import { Icon } from "@/components/site/Icon";
import { HeroVisual } from "@/components/site/HeroVisual";
import { ArchitectureDiagram } from "@/components/site/ArchitectureDiagram";
import { ProjectCard } from "@/components/site/ProjectCard";
import {
  CAPABILITY_STRIP,
  COMPANY,
  JOURNEY,
  METRICS,
  PROCESS,
  PROJECTS,
  SERVICES,
  TECH_GROUPS,
  WHY_US,
} from "@/data/site";

const title = `${COMPANY.name} — Software Engineering, AI & Automation`;
const description =
  "Custom software development, AI agents, workflow automation, mobile applications, web applications, and complete digital solutions for modern businesses.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: COMPANY.name,
          description,
          email: COMPANY.email,
          sameAs: [COMPANY.linkedin, COMPANY.github],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CapabilityStrip />
        <WhatWeBuild />
        <FeaturedWork />
        <Journey />
        <Architecture />
        <WhyUs />
        <Technology />
        <ProcessSection />
        <Metrics />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-44 md:pb-24">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.28] [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]" />
      <div
        className="glow-orb -top-24 left-1/4 h-[26rem] w-[26rem] float-slow"
        style={{ background: "var(--primary)" }}
      />
      <div
        className="glow-orb right-0 top-32 h-72 w-72 opacity-20 float-slow"
        style={{ background: "var(--cyan)", animationDelay: "2s" }}
      />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <Reveal>
            <p className="label-mono">Software Engineering • AI • Automation</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-[4.1rem]">
              Software that moves your <span className="text-gradient">business forward.</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              We design and build custom software, AI agents, automated workflows, and digital
              products that solve real business problems.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CTA to="/contact">
                Start a Project <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </CTA>
              <CTA to="/work" variant="ghost">
                Explore Our Work
              </CTA>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160} className="relative">
          <div className="surface-card p-4 sm:p-6">
            <HeroVisual />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CapabilityStrip() {
  return (
    <section aria-label="Capabilities" className="border-y border-border bg-surface/40">
      <div className="container-page flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5">
        {CAPABILITY_STRIP.map((c, i) => (
          <span key={c} className="flex items-center gap-8">
            <span className="label-mono">{c}</span>
            {i < CAPABILITY_STRIP.length - 1 ? (
              <span className="hidden h-3 w-px bg-border sm:block" aria-hidden="true" />
            ) : null}
          </span>
        ))}
      </div>
    </section>
  );
}

function WhatWeBuild() {
  return (
    <section id="services" className="container-page py-20 md:py-28">
      <SectionHeading
        label="What we build"
        title="From software products to intelligent workflows."
        subtitle="One partner for the technology behind your next product, platform, or automation."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.slug} delay={(i % 3) * 70}>
            <article className="surface-card hover-lift h-full p-6">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface">
                <Icon name={s.icon} className="h-4.5 w-4.5 text-primary" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2 border-t border-border pt-5">
                {s.examples.map((e) => (
                  <li
                    key={e}
                    className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
                  >
                    {e}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10">
        <CTA to="/services" variant="ghost">
          All services <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </CTA>
      </Reveal>
    </section>
  );
}

function FeaturedWork() {
  return (
    <section id="work" className="border-t border-border py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          label="Featured work"
          title="Work that solves real problems."
          subtitle="Technology is only valuable when it creates measurable business impact."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 70}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          label="One partner, complete solution"
          title="From first idea to production."
          subtitle="Whether you need a new product, an AI capability, or automation around an existing system, we can take ownership from concept through production."
        />
        <ol className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
          {JOURNEY.map((j, i) => (
            <Reveal key={j.n} as="li" delay={i * 50}>
              <div className="surface-card hover-lift relative h-full px-4 py-5">
                <span className="font-mono text-[11px] text-primary">{j.n}</span>
                <p className="mt-2 text-sm font-medium">{j.label}</p>
                {i < JOURNEY.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute right-[-10px] top-1/2 hidden h-px w-4 bg-border lg:block"
                  />
                ) : null}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section className="relative overflow-hidden border-t border-border py-20 md:py-28">
      <div
        className="glow-orb left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 opacity-20"
        style={{ background: "var(--primary)" }}
      />
      <div className="container-page relative">
        <SectionHeading
          align="center"
          label="Solution architecture"
          title="A complete software ecosystem under one roof."
          subtitle="Web, mobile, AI, automation, APIs, data and cloud — designed to work as one system around your business."
        />
        <Reveal className="mx-auto mt-12 max-w-3xl">
          <ArchitectureDiagram />
        </Reveal>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <SectionHeading
          label="Why work with us"
          title="Engineering, not just consulting."
          subtitle="We don't just advise businesses. We design, build, automate, and ship software."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {WHY_US.map((w, i) => (
            <Reveal key={w.title} delay={i * 60}>
              <div className="surface-card hover-lift h-full p-6">
                <h3 className="text-base font-semibold">{w.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {w.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Technology() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          label="Technology"
          title="Built with the right technology for the problem."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TECH_GROUPS.map((g, i) => (
            <Reveal key={g.group} delay={(i % 3) * 60}>
              <div className="surface-card hover-lift h-full p-6">
                <p className="label-mono">{g.group}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((t) => (
                    <li
                      key={t}
                      className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="container-page">
        <SectionHeading label="Process" title="A simple process. Serious engineering." />
        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {PROCESS.map((p, i) => (
            <Reveal key={p.n} as="li" delay={i * 60}>
              <div className="surface-card hover-lift h-full p-6">
                <span className="font-mono text-xs text-primary">{p.n}</span>
                <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="border-t border-border bg-surface/40 py-14">
      <div className="container-page grid grid-cols-2 gap-8 lg:grid-cols-4">
        {METRICS.map((m, i) => (
          <Reveal key={m.label} delay={i * 60}>
            <p className="text-3xl font-semibold tracking-tight sm:text-4xl">{m.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{m.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-border py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.25] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div
        className="glow-orb left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 float-slow"
        style={{ background: "var(--primary)" }}
      />
      <div className="container-page relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold sm:text-4xl md:text-5xl">
            Have a software problem worth solving?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Tell us what you're trying to build, automate, or improve. We'll help you figure out
            the right way to approach it.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <CTA to="/contact">Start a Conversation</CTA>
            <CTA to="/work" variant="ghost">
              View Our Work
            </CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
