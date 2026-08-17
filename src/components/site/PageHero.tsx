import type { ReactNode } from "react";

export function PageHero({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: ReactNode;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.25] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div
        className="glow-orb left-1/2 top-0 h-72 w-72 -translate-x-1/2"
        style={{ background: "var(--primary)" }}
      />
      <div className="container-page relative">
        <p className="label-mono mb-5">{label}</p>
        <h1 className="max-w-3xl text-4xl font-semibold sm:text-5xl md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
