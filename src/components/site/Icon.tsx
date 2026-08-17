import {
  Code2,
  GitBranch,
  LayoutGrid,
  Plug,
  RefreshCw,
  Rocket,
  Smartphone,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  Code2,
  GitBranch,
  LayoutGrid,
  Plug,
  RefreshCw,
  Rocket,
  Smartphone,
  Sparkles,
  Wrench,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = MAP[name] ?? Sparkles;
  return <Cmp className={className} aria-hidden="true" />;
}
