import type { Project } from "@/data/site";
import { cn } from "@/lib/utils";

function Bar({ w, tone = "muted" }: { w: string; tone?: "muted" | "accent" | "cyan" }) {
  return (
    <span
      className={cn(
        "block h-2 rounded-full",
        tone === "muted" && "bg-muted-foreground/25",
        tone === "accent" && "bg-primary/70",
        tone === "cyan" && "bg-cyan/60",
      )}
      style={{ width: w }}
    />
  );
}

/** Abstract, editable product UI mockup — replace with real screenshots later. */
export function ProjectPreview({
  variant,
  className,
}: {
  variant: Project["preview"];
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative overflow-hidden rounded-xl border border-border bg-surface p-4",
        className,
      )}
    >
      <div
        className="glow-orb -right-10 -top-16 h-40 w-40"
        style={{ background: "var(--primary)" }}
      />
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
        <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
        <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
      </div>

      {variant === "dashboard" && (
        <div className="grid grid-cols-3 gap-3">
          <div className="space-y-2 rounded-lg border border-border bg-card p-3">
            <Bar w="60%" tone="accent" />
            <Bar w="90%" />
            <Bar w="70%" />
          </div>
          <div className="col-span-2 space-y-2 rounded-lg border border-border bg-card p-3">
            <Bar w="40%" tone="cyan" />
            <div className="flex items-end gap-1.5 pt-2">
              {[40, 65, 30, 80, 55, 70, 45].map((h, i) => (
                <span
                  key={i}
                  className="w-full rounded-sm bg-primary/40"
                  style={{ height: `${h * 0.5}px` }}
                />
              ))}
            </div>
          </div>
          <div className="col-span-3 space-y-2 rounded-lg border border-border bg-card p-3">
            <Bar w="85%" />
            <Bar w="65%" />
            <Bar w="45%" tone="accent" />
          </div>
        </div>
      )}

      {variant === "agent" && (
        <div className="space-y-2.5">
          {["Plan", "Call tool: crm.lookup", "Validate", "Execute", "Report"].map(
            (step, i) => (
              <div
                key={step}
                className="flex items-center gap-3 rounded-lg border border-border bg-card px-3 py-2.5"
              >
                <span className="font-mono text-[10px] text-primary">0{i + 1}</span>
                <span className="font-mono text-[11px] text-muted-foreground">{step}</span>
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-cyan/70" />
              </div>
            ),
          )}
        </div>
      )}

      {variant === "commerce" && (
        <div className="grid grid-cols-3 gap-3">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="space-y-2 rounded-lg border border-border bg-card p-3">
              <span className="block h-10 rounded-md bg-muted-foreground/10" />
              <Bar w="80%" />
              <Bar w="45%" tone={i % 3 === 0 ? "accent" : "muted"} />
            </div>
          ))}
        </div>
      )}

      {variant === "mobile" && (
        <div className="flex justify-center gap-3">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="w-24 space-y-2 rounded-xl border border-border bg-card p-2.5"
            >
              <span className="mx-auto block h-1 w-8 rounded-full bg-muted-foreground/30" />
              <span className="block h-12 rounded-md bg-primary/15" />
              <Bar w="90%" />
              <Bar w="60%" tone="cyan" />
              <Bar w="75%" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
