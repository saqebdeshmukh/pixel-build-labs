import { useState, type FormEvent } from "react";
import { Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ctaClasses } from "./CTA";

const PROJECT_TYPES = [
  "Web Application",
  "Mobile Application",
  "AI Agent",
  "AI Automation",
  "Workflow Automation",
  "API / Integration",
  "Custom Software",
  "Other",
];

const BUDGETS = ["Not sure yet", "< $10k", "$10k – $25k", "$25k – $50k", "$50k+"];

type Values = {
  name: string;
  email: string;
  company: string;
  phone: string;
  goal: string;
  projectType: string;
  budget: string;
  message: string;
};

const EMPTY: Values = {
  name: "",
  email: "",
  company: "",
  phone: "",
  goal: "",
  projectType: "",
  budget: "",
  message: "",
};

const fieldCls =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/25 min-h-11";

export function ContactForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const set = (k: keyof Values) => (v: string) => {
    setValues((prev) => ({ ...prev, [k]: v }));
    setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<keyof Values, string>> = {};
    if (values.name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      e.email = "Please enter a valid work email.";
    if (!values.company.trim()) e.company = "Please enter your company.";
    if (!values.projectType) e.projectType = "Please select a project type.";
    if (values.message.trim().length < 20)
      e.message = "A little more detail helps — at least 20 characters.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    // NOTE: No backend configured. Connect an email service or backend here.
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
    setValues(EMPTY);
  };

  if (status === "success") {
    return (
      <div className="surface-card p-8 text-center" role="status" aria-live="polite">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-primary/50 bg-primary/10">
          <Check className="h-5 w-5 text-primary" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-xl font-semibold">Thanks — your inquiry is ready to send.</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          This form is not connected to a backend yet, so nothing was transmitted. Connect an
          email service to start receiving submissions.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className={cn(ctaClasses("ghost"), "mt-6")}
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  const Err = ({ k }: { k: keyof Values }) =>
    errors[k] ? (
      <p id={`${k}-error`} className="mt-1.5 text-xs text-destructive">
        {errors[k]}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className="surface-card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label-mono mb-2 block">
            Name
          </label>
          <input
            id="name"
            className={fieldCls}
            value={values.name}
            onChange={(e) => set("name")(e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            placeholder="Jane Doe"
          />
          <Err k="name" />
        </div>

        <div>
          <label htmlFor="email" className="label-mono mb-2 block">
            Work Email
          </label>
          <input
            id="email"
            type="email"
            className={fieldCls}
            value={values.email}
            onChange={(e) => set("email")(e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            placeholder="jane@company.com"
          />
          <Err k="email" />
        </div>

        <div>
          <label htmlFor="company" className="label-mono mb-2 block">
            Company
          </label>
          <input
            id="company"
            className={fieldCls}
            value={values.company}
            onChange={(e) => set("company")(e.target.value)}
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? "company-error" : undefined}
            placeholder="Company name"
          />
          <Err k="company" />
        </div>

        <div>
          <label htmlFor="phone" className="label-mono mb-2 block">
            Phone (optional)
          </label>
          <input
            id="phone"
            type="tel"
            className={fieldCls}
            value={values.phone}
            onChange={(e) => set("phone")(e.target.value)}
            placeholder="+1 555 000 0000"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="goal" className="label-mono mb-2 block">
            What are you looking to build?
          </label>
          <input
            id="goal"
            className={fieldCls}
            value={values.goal}
            onChange={(e) => set("goal")(e.target.value)}
            placeholder="e.g. an AI agent that processes supplier invoices"
          />
        </div>

        <div>
          <label htmlFor="projectType" className="label-mono mb-2 block">
            Project type
          </label>
          <select
            id="projectType"
            className={fieldCls}
            value={values.projectType}
            onChange={(e) => set("projectType")(e.target.value)}
            aria-invalid={!!errors.projectType}
            aria-describedby={errors.projectType ? "projectType-error" : undefined}
          >
            <option value="">Select a type</option>
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <Err k="projectType" />
        </div>

        <div>
          <label htmlFor="budget" className="label-mono mb-2 block">
            Estimated budget (optional)
          </label>
          <select
            id="budget"
            className={fieldCls}
            value={values.budget}
            onChange={(e) => set("budget")(e.target.value)}
          >
            <option value="">Select a range</option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="label-mono mb-2 block">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className={cn(fieldCls, "resize-y")}
            value={values.message}
            onChange={(e) => set("message")(e.target.value)}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            placeholder="Tell us about the problem, the systems involved, and your timeline."
          />
          <Err k="message" />
        </div>
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-5 text-sm text-destructive">
          Please fix the highlighted fields and try again.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className={cn(ctaClasses("primary"), "mt-7 w-full sm:w-auto disabled:opacity-70")}
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending
          </>
        ) : (
          "Send Inquiry"
        )}
      </button>
    </form>
  );
}
