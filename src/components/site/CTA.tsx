import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background min-h-11";

const styles = {
  primary:
    "bg-primary text-primary-foreground shadow-[0_10px_30px_-12px_var(--primary)] hover:brightness-110 hover:-translate-y-0.5",
  ghost:
    "border border-border bg-surface/60 text-foreground hover:border-primary/50 hover:bg-surface hover:-translate-y-0.5",
  quiet: "text-muted-foreground hover:text-foreground",
} as const;

export function CTA({
  to,
  hash,
  children,
  variant = "primary",
  className,
}: {
  to: string;
  hash?: string;
  children: ReactNode;
  variant?: keyof typeof styles;
  className?: string;
}) {
  return (
    <Link
      to={to}
      {...(hash ? { hash } : {})}
      className={cn(base, styles[variant], className)}
    >
      {children}
    </Link>
  );
}

export const ctaClasses = (variant: keyof typeof styles = "primary") =>
  cn(base, styles[variant]);
