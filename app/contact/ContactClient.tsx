"use client";

import { useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function ContactPage() {
  const params = useSearchParams();
  const router = useRouter();
  const prefilledService = useMemo(() => params.get("service") ?? "", [params]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: prefilledService,
    message: ""
  });

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    router.push("/thank-you");
  }

  return (
    <div>
<div className="mt-10 grid gap-8 lg:grid-cols-3">
        <form onSubmit={submit} className="card p-7 lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name">
              <input
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-sky-500/60"
                placeholder="Your name"
                required
              />
            </Field>

            <Field label="Email">
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-sky-500/60"
                placeholder="you@company.com"
                required
              />
            </Field>

            <Field label="Company">
              <input
                value={form.company}
                onChange={(e) => update("company", e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-sky-500/60"
                placeholder="Company name"
              />
            </Field>

            <Field label="Service">
              <select
                value={form.service}
                onChange={(e) => update("service", e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-sky-500/60"
              >
                <option value="">Select service</option>
                <option>Software Development</option>
                <option>Software Architecture</option>
                <option>Testing & QA Engineering</option>
                <option>Technical Documentation</option>
              </select>
            </Field>
          </div>

          <Field label="Project Description" className="mt-4">
            <textarea
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              className="h-36 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-sky-500/60"
              placeholder="What are you building? Timeline? Key requirements?"
              required
            />
          </Field>

          <div className="mt-6 flex flex-wrap gap-3">
            <button type="submit" className="btn-primary">Send Message</button>
            <button type="button" onClick={() => setForm({ name: "", email: "", company: "", service: prefilledService, message: "" })} className="btn-secondary">
              Reset
            </button>
          </div>
        </form>

        <aside className="space-y-6">
          <div className="card p-7">
            <div className="text-sm font-semibold">Contact</div>
            <div className="mt-3 space-y-2 text-sm text-slate-300/90">
              <div>Email: contact@pionexuslabs.com</div>
              <div>Phone: +1 (555) 123-4567</div>
              <div>Hours: Mon–Fri, 9:00–18:00</div>
            </div>
          </div>

          <div className="card p-7">
            <div className="text-sm font-semibold">What happens next?</div>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-300/90 space-y-1">
              <li>We review your message</li>
              <li>We schedule a short call</li>
              <li>We propose architecture + delivery plan</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <div className="mb-2 text-sm font-medium text-slate-200/90">{label}</div>
      {children}
    </label>
  );
}