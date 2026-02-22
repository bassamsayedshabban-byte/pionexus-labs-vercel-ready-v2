import Link from "next/link";
import { notFound } from "next/navigation";
import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/lib/data";
import PageHero from "@/components/PageHero";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  return (
    <div className="container-px py-16">
      
      <div className="mb-10"><PageHero title="Case Study" subtitle="A deeper look at the problem, solution, stack, and results." /></div>
<div className="text-sm text-slate-300/80">
        <Link href="/" className="hover:text-white">Home</Link> /{" "}
        <Link href="/portfolio" className="hover:text-white">Portfolio</Link> /{" "}
        <span className="text-slate-100">{p.title}</span>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SectionHeader title={p.title} subtitle={p.summary} />
          <div className="mt-8 card p-7">
            <div className="h-56 rounded-2xl border border-white/10 bg-white/5" />

            <div className="mt-7 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="h3">Problem</h3>
                <p className="mt-2 text-sm text-slate-300/90">{p.problem}</p>
              </div>
              <div>
                <h3 className="h3">Solution</h3>
                <p className="mt-2 text-sm text-slate-300/90">{p.solution}</p>
              </div>
            </div>

            <h3 className="h3 mt-7">Tech Stack</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/90">{t}</span>
              ))}
            </div>

            <h3 className="h3 mt-7">Results</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-200/90 space-y-1">
              {p.results.map((r) => (<li key={r}>{r}</li>))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">Start Similar Project</Link>
              <Link href="/portfolio" className="btn-secondary">Back to Portfolio</Link>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="card p-7">
            <h3 className="h3">Industry</h3>
            <p className="mt-2 text-sm text-slate-300/90">{p.industry}</p>
          </div>

          <div className="card p-7">
            <h3 className="h3">Want a Case Study Like This?</h3>
            <p className="mt-2 text-sm text-slate-300/90">
              Share your project goals—we’ll propose an architecture and delivery plan.
            </p>
            <Link href="/contact" className="btn-primary mt-5 w-full">Book Consultation</Link>
          </div>
        </aside>
      </div>
    </div>
  );
}