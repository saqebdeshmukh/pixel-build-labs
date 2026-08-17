const RING = [
  "Web",
  "Mobile",
  "AI Agents",
  "Automation",
  "APIs",
  "Database",
  "Cloud",
  "Third-party",
];

export function ArchitectureDiagram() {
  const cx = 320;
  const cy = 220;
  const R = 155;

  return (
    <>
      {/* Desktop / tablet diagram */}
      <svg
        viewBox="0 0 640 440"
        role="img"
        aria-label="Architecture diagram: web, mobile, AI agents, automation, APIs, database, cloud and third-party systems connected to your business"
        className="hidden w-full sm:block"
      >
        <defs>
          <linearGradient id="ad-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--cyan)" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        <circle
          cx={cx}
          cy={cy}
          r={R}
          fill="none"
          stroke="var(--border)"
          strokeDasharray="2 6"
        />

        {RING.map((label, i) => {
          const a = (i / RING.length) * Math.PI * 2 - Math.PI / 2;
          const x = cx + Math.cos(a) * R;
          const y = cy + Math.sin(a) * R;
          return (
            <g key={label}>
              <line
                x1={cx}
                y1={cy}
                x2={x}
                y2={y}
                stroke="url(#ad-line)"
                strokeWidth="1"
                opacity="0.5"
              />
              <line
                x1={cx}
                y1={cy}
                x2={x}
                y2={y}
                stroke="var(--primary)"
                strokeWidth="1.2"
                opacity="0.6"
                className="flow-line"
                style={{ animationDelay: `${i * 0.18}s` }}
              />
              <rect
                x={x - 52}
                y={y - 17}
                width="104"
                height="34"
                rx="10"
                fill="var(--card)"
                stroke="var(--border)"
              />
              <text
                x={x}
                y={y + 4}
                textAnchor="middle"
                fill="var(--muted-foreground)"
                fontSize="11"
                fontFamily="var(--font-mono)"
              >
                {label}
              </text>
            </g>
          );
        })}

        <circle
          cx={cx}
          cy={cy}
          r="66"
          fill="var(--surface)"
          stroke="var(--primary)"
          strokeWidth="1.5"
        />
        <text
          x={cx}
          y={cy - 4}
          textAnchor="middle"
          fill="var(--foreground)"
          fontSize="13"
          fontFamily="var(--font-mono)"
          letterSpacing="0.08em"
        >
          YOUR
        </text>
        <text
          x={cx}
          y={cy + 14}
          textAnchor="middle"
          fill="var(--foreground)"
          fontSize="13"
          fontFamily="var(--font-mono)"
          letterSpacing="0.08em"
        >
          BUSINESS
        </text>
      </svg>

      {/* Mobile simplified layout */}
      <div className="sm:hidden">
        <div className="mx-auto mb-6 w-fit rounded-2xl border border-primary/60 bg-surface px-6 py-4 text-center">
          <span className="label-mono !text-foreground">Your Business</span>
        </div>
        <ul className="grid grid-cols-2 gap-2">
          {RING.map((label) => (
            <li
              key={label}
              className="rounded-xl border border-border bg-card px-3 py-3 text-center font-mono text-[11px] text-muted-foreground"
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
