export const COMPANY = {
  name: "Northstar Labs", // EDITABLE: replace with real company name
  tagline: "Engineering software. Automating work. Building what's next.",
  email: "hello@northstarlabs.dev", // EDITABLE
  linkedin: "https://linkedin.com", // EDITABLE
  github: "https://github.com", // EDITABLE
};

export const NAV_LINKS = [
  { label: "Work", to: "/work" },
  { label: "Services", to: "/services" },
  { label: "Solutions", to: "/solutions" },
  { label: "Process", to: "/about" },
  { label: "About", to: "/about" },
] as const;

export type Service = {
  slug: string;
  icon: string;
  title: string;
  description: string;
  examples: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "web-applications",
    icon: "LayoutGrid",
    title: "Web Applications",
    description:
      "Scalable web applications designed around your business processes, customers, and growth.",
    examples: ["Dashboards", "SaaS platforms", "Customer portals", "Internal tools", "E-commerce"],
  },
  {
    slug: "mobile-applications",
    icon: "Smartphone",
    title: "Mobile Applications",
    description:
      "Fast, intuitive mobile experiences for iOS and Android, connected to reliable backend systems.",
    examples: ["Customer apps", "Business apps", "Field applications", "Mobile commerce"],
  },
  {
    slug: "ai-agents",
    icon: "Sparkles",
    title: "AI Agents",
    description:
      "AI agents that can understand context, make decisions, use tools, and execute real business tasks.",
    examples: [
      "AI assistants",
      "Document processing",
      "Research agents",
      "Customer support",
      "Intelligent operations",
    ],
  },
  {
    slug: "workflow-automation",
    icon: "GitBranch",
    title: "Workflow Automation",
    description:
      "Connect systems and automate repetitive processes so your team can focus on higher-value work.",
    examples: [
      "Approval workflows",
      "Notifications",
      "Data synchronization",
      "Document workflows",
      "Business automation",
    ],
  },
  {
    slug: "apis-integrations",
    icon: "Plug",
    title: "APIs & Integrations",
    description:
      "Connect your existing systems and create reliable data flows across your technology stack.",
    examples: ["Payment gateways", "ERP", "CRM", "E-commerce", "Third-party APIs"],
  },
  {
    slug: "custom-software",
    icon: "Code2",
    title: "Custom Software",
    description:
      "When off-the-shelf software isn't enough, we build exactly what your business needs.",
    examples: [
      "Internal platforms",
      "Enterprise systems",
      "Legacy modernization",
      "Custom business applications",
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  preview: "dashboard" | "agent" | "commerce" | "mobile";
  overview: string;
  challenge: string;
  approach: string[];
  outcome: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "intelligent-invoice-processing",
    name: "Intelligent Invoice Processing",
    category: "AI • OCR • Automation",
    description:
      "An intelligent invoice processing platform that extracts information from documents, validates data, and automates downstream business workflows.",
    tags: ["AI", "OCR", ".NET", "Angular", "Azure", "Enterprise Integration"],
    preview: "dashboard",
    overview:
      "PLACEHOLDER — replace with the real project overview. A document intelligence platform that turns unstructured invoices into validated, structured data feeding finance systems.",
    challenge:
      "PLACEHOLDER — describe the manual, error-prone process the business was running before the platform existed.",
    approach: [
      "Document ingestion pipeline with OCR and layout-aware extraction",
      "Validation rules and human-in-the-loop review for low-confidence fields",
      "Integration with existing finance and ERP systems",
      "Audit trail, monitoring, and reprocessing tooling",
    ],
    outcome:
      "PLACEHOLDER — add measurable outcomes here once they are confirmed with the client.",
  },
  {
    slug: "ai-powered-business-workflows",
    name: "AI-Powered Business Workflows",
    category: "AI • Agents • Automation",
    description:
      "AI-powered agents that connect business systems, understand context, and automate multi-step operational workflows.",
    tags: ["AI Agents", "LLMs", "APIs", "Workflow Automation"],
    preview: "agent",
    overview:
      "PLACEHOLDER — replace with the real project overview. An agent runtime that plans multi-step operations and executes them against internal tools.",
    challenge:
      "PLACEHOLDER — describe the operational bottleneck and the systems involved.",
    approach: [
      "Tool-calling agent architecture with scoped permissions",
      "Deterministic guardrails around every write operation",
      "Observability for every agent decision and tool call",
      "Gradual rollout behind approval workflows",
    ],
    outcome: "PLACEHOLDER — add measurable outcomes once confirmed.",
  },
  {
    slug: "custom-commerce-platform",
    name: "Custom Commerce Platform",
    category: "Web • E-commerce • Integrations",
    description:
      "A complete commerce experience connecting customers, payments, orders, fulfillment, and business operations.",
    tags: ["Web", "E-commerce", "Payments", "APIs", "Automation"],
    preview: "commerce",
    overview:
      "PLACEHOLDER — replace with the real project overview. A storefront and operations layer built around the business's own fulfillment model.",
    challenge: "PLACEHOLDER — describe the commerce and operations problem.",
    approach: [
      "Storefront experience tuned for conversion and speed",
      "Payment gateway and fulfillment integrations",
      "Order operations dashboard for internal teams",
      "Automated notifications and data synchronization",
    ],
    outcome: "PLACEHOLDER — add measurable outcomes once confirmed.",
  },
  {
    slug: "business-mobile-application",
    name: "Business Mobile Application",
    category: "Mobile • API • Cloud",
    description:
      "A mobile-first application designed around real-world business workflows and connected to a scalable backend platform.",
    tags: ["Mobile", "API", "Cloud", "Database"],
    preview: "mobile",
    overview:
      "PLACEHOLDER — replace with the real project overview. A field-ready mobile app backed by a cloud API.",
    challenge: "PLACEHOLDER — describe the field or on-the-go workflow problem.",
    approach: [
      "Offline-tolerant mobile experience",
      "Cloud API with role-based access",
      "Sync engine and conflict handling",
      "Release, crash reporting, and analytics pipeline",
    ],
    outcome: "PLACEHOLDER — add measurable outcomes once confirmed.",
  },
];

export const CAPABILITY_STRIP = [
  "Web Applications",
  "Mobile Apps",
  "AI Agents",
  "Automation",
  "APIs & Integrations",
  "Cloud Systems",
];

export const JOURNEY = [
  { n: "01", label: "Discover" },
  { n: "02", label: "Design" },
  { n: "03", label: "Build" },
  { n: "04", label: "Integrate" },
  { n: "05", label: "Automate" },
  { n: "06", label: "Deploy" },
  { n: "07", label: "Improve" },
];

export const PROCESS = [
  {
    n: "01",
    title: "Understand",
    body: "Understand the business, users, existing systems, and actual problem.",
  },
  {
    n: "02",
    title: "Architect",
    body: "Define the right technical architecture, integrations, and delivery approach.",
  },
  {
    n: "03",
    title: "Build",
    body: "Design and develop the product using modern engineering practices.",
  },
  {
    n: "04",
    title: "Launch",
    body: "Deploy, test, monitor, and make the system production-ready.",
  },
  {
    n: "05",
    title: "Evolve",
    body: "Improve the product continuously based on business needs and real-world usage.",
  },
];

export const WHY_US = [
  {
    title: "Business-first thinking",
    body: "We start with the problem, not the technology.",
  },
  {
    title: "Production-ready engineering",
    body: "Solutions are designed to be reliable, maintainable, secure, and scalable.",
  },
  {
    title: "AI where it actually matters",
    body: "We use AI to create measurable improvements—not just to add an AI label.",
  },
  {
    title: "One team from idea to delivery",
    body: "Strategy, architecture, development, integrations, automation, and deployment under one roof.",
  },
];

export const TECH_GROUPS = [
  { group: "Frontend", items: ["Angular", "React", "HTML", "CSS", "JavaScript"] },
  { group: "Backend", items: [".NET", "C#", "Node.js", "REST APIs"] },
  { group: "Data", items: ["SQL Server", "PostgreSQL", "Azure Storage"] },
  { group: "Cloud", items: ["Microsoft Azure", "Cloud APIs", "CI/CD"] },
  {
    group: "AI",
    items: ["LLMs", "AI Agents", "OCR", "AI Workflows", "Document Intelligence"],
  },
  {
    group: "Commerce & Integrations",
    items: ["WooCommerce", "Payment Gateways", "ERP", "CRM", "Third-party APIs"],
  },
];

export const METRICS = [
  { value: "8+", label: "Years of Engineering Experience" },
  { value: "20+", label: "Projects Delivered" },
  { value: "Multiple", label: "Industries & Use Cases" },
  { value: "End-to-End", label: "Software Delivery" },
];

export const SOLUTIONS = [
  {
    title: "Automate Manual Operations",
    body: "Replace repetitive manual processes with intelligent workflows.",
    icon: "GitBranch",
    points: [
      "Map the current process and its real cost",
      "Automate approvals, notifications, and handoffs",
      "Keep humans in the loop where judgement matters",
    ],
  },
  {
    title: "Build a Digital Product",
    body: "Turn your idea into a scalable web or mobile application.",
    icon: "Rocket",
    points: [
      "Scope a focused first release",
      "Design and build the product end to end",
      "Ship to production with monitoring in place",
    ],
  },
  {
    title: "Add AI to Your Business",
    body: "Introduce practical AI capabilities into existing systems.",
    icon: "Sparkles",
    points: [
      "Identify where AI creates measurable value",
      "Build agents and document intelligence pipelines",
      "Guardrails, evaluation, and observability",
    ],
  },
  {
    title: "Connect Your Systems",
    body: "Create reliable integrations between your business platforms.",
    icon: "Plug",
    points: [
      "Integrate ERP, CRM, commerce, and payments",
      "Design resilient sync and retry behaviour",
      "Make data flows observable and debuggable",
    ],
  },
  {
    title: "Modernize Legacy Software",
    body: "Improve old systems without unnecessarily rebuilding everything.",
    icon: "RefreshCw",
    points: [
      "Assess what to keep, wrap, or replace",
      "Incremental modernization, not a big-bang rewrite",
      "Reduce risk while improving delivery speed",
    ],
  },
  {
    title: "Build Internal Tools",
    body: "Give your teams software designed specifically around how they work.",
    icon: "Wrench",
    points: [
      "Operational dashboards and admin platforms",
      "Role-based access and audit trails",
      "Tools your team actually wants to use",
    ],
  },
];

export const SERVICE_DETAILS = [
  {
    title: "Software Consulting",
    body: "Technical direction for teams deciding what to build, how to build it, and what to avoid.",
    useCases: ["Architecture review", "Technology selection", "Delivery planning"],
    tech: ["Architecture", "Discovery", "Roadmapping"],
  },
  {
    title: "Product Development",
    body: "End-to-end product delivery from first concept through a production release.",
    useCases: ["MVPs", "New platforms", "Product rebuilds"],
    tech: ["React", "Angular", ".NET", "Azure"],
  },
  {
    title: "Web Development",
    body: "Web applications built around real business processes, not template layouts.",
    useCases: ["Dashboards", "Portals", "SaaS platforms"],
    tech: ["Angular", "React", "TypeScript", "REST APIs"],
  },
  {
    title: "Mobile Development",
    body: "Mobile apps for iOS and Android connected to reliable backend systems.",
    useCases: ["Customer apps", "Field operations", "Mobile commerce"],
    tech: ["Mobile", "APIs", "Cloud"],
  },
  {
    title: "AI Development",
    body: "Applied AI features embedded into products and business systems.",
    useCases: ["Document intelligence", "Search", "Classification"],
    tech: ["LLMs", "OCR", "Embeddings"],
  },
  {
    title: "AI Agents",
    body: "Agents that use tools, follow business rules, and complete real tasks.",
    useCases: ["Operations agents", "Support agents", "Research agents"],
    tech: ["Tool calling", "Guardrails", "Evaluation"],
  },
  {
    title: "Workflow Automation",
    body: "Automation across systems so repetitive work stops consuming your team.",
    useCases: ["Approvals", "Data sync", "Document workflows"],
    tech: ["Workflow engines", "Webhooks", "Queues"],
  },
  {
    title: "API Development",
    body: "Well-designed APIs that other systems and teams can build on safely.",
    useCases: ["Public APIs", "Internal services", "Partner integrations"],
    tech: ["REST", ".NET", "Node.js"],
  },
  {
    title: "Cloud & DevOps",
    body: "Cloud infrastructure and delivery pipelines that make releases boring.",
    useCases: ["CI/CD", "Environments", "Monitoring"],
    tech: ["Microsoft Azure", "CI/CD", "Observability"],
  },
  {
    title: "System Integration",
    body: "Connect the platforms your business already depends on.",
    useCases: ["ERP", "CRM", "Payments"],
    tech: ["Third-party APIs", "Middleware", "ETL"],
  },
  {
    title: "Legacy Modernization",
    body: "Modernize old systems incrementally while keeping the business running.",
    useCases: ["Re-platforming", "API wrapping", "UI modernization"],
    tech: [".NET", "SQL Server", "Cloud migration"],
  },
  {
    title: "Maintenance & Optimization",
    body: "Ongoing engineering support to keep systems fast, secure, and current.",
    useCases: ["Performance work", "Security updates", "Cost optimization"],
    tech: ["Profiling", "Monitoring", "Refactoring"],
  },
];
