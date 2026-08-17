const NODES = [
  { id: "business", label: "Business", x: 300, y: 170, r: 46, primary: true },
  { id: "api", label: "API", x: 300, y: 44, r: 30 },
  { id: "ai", label: "AI Agent", x: 452, y: 88, r: 32 },
  { id: "workflow", label: "Workflow", x: 500, y: 210, r: 32 },
  { id: "db", label: "Database", x: 404, y: 300, r: 30 },
  { id: "mobile", label: "Mobile", x: 196, y: 300, r: 30 },
  { id: "web", label: "Web", x: 100, y: 210, r: 30 },
  { id: "cloud", label: "Cloud", x: 148, y: 88, r: 30 },
];

export function HeroVisual() {
  const center = NODES[0]!;
  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 600 360"
        role="img"
        aria-label="Diagram of connected systems: web, mobile, API, AI agent, workflow, database and cloud around a central business node"
        className="w-full"
      >
        <defs>
          <linearGradient id="hv-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--cyan)" stopOpacity="0.7" />
          </linearGradient>
          <radialGradient id="hv-core" cx="50%" cy="40%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.05" />
          </radialGradient>
        </defs>

        {NODES.slice(1).map((n) => (
          <line
            key={`l-${n.id}`}
            x1={center.x}
            y1={center.y}
            x2={n.x}
            y2={n.y}
            stroke="url(#hv-line)"
            strokeWidth="1"
            opacity="0.45"
          />
        ))}
        {NODES.slice(1).map((n, i) => (
          <line
            key={`f-${n.id}`}
            x1={center.x}
            y1={center.y}
            x2={n.x}
            y2={n.y}
            stroke="var(--cyan)"
            strokeWidth="1.4"
            opacity="0.65"
            className="flow-line"
            style={{ animationDelay: `${i * 0.22}s` }}
          />
        ))}

        <circle cx={center.x} cy={center.y} r="120" fill="url(#hv-core)" />

        {NODES.map((n) => (
          <g key={n.id}>
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill="var(--card)"
              stroke={n.primary ? "var(--primary)" : "var(--border)"}
              strokeWidth={n.primary ? 1.5 : 1}
            />
            <text
              x={n.x}
              y={n.y + 3.5}
              textAnchor="middle"
              fill={n.primary ? "var(--foreground)" : "var(--muted-foreground)"}
              fontSize={n.primary ? 12 : 10}
              fontFamily="var(--font-mono)"
              letterSpacing="0.04em"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
