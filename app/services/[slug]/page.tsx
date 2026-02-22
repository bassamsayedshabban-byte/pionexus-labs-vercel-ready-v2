import Link from "next/link";
import { notFound } from "next/navigation";
import SectionHeader from "@/components/SectionHeader";
import { services } from "@/lib/data";
import PageHero from "@/components/PageHero";

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) return notFound();

  return (
    <div className="container-px py-16">
      
      <div className="mb-10"><PageHero title="Service Details" subtitle="Explore deliverables, benefits, and technologies for this service." /></div>
<div className="text-sm text-slate-300/80">
        <Link href="/" className="hover:text-white">Home</Link> /{" "}
        <Link href="/services" className="hover:text-white">Services</Link> /{" "}
        <span className="text-slate-100">{s.title}</span>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SectionHeader title={s.title} subtitle={s.short} />
          <div className="mt-8 card p-7">
            <h3 className="h3">Overview</h3>
            <p className="mt-2 text-sm text-slate-300/90">
              We deliver {s.title.toLowerCase()} with an architecture-first approach—focusing on scalability,
              maintainability, and business outcomes.
            </p>

            <h3 className="h3 mt-7">Key Benefits</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-200/90 space-y-1">
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <h3 className="h3 mt-7">Technologies</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {s.tech.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/90">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href={`/contact?service=${encodeURIComponent(s.title)}`} className="btn-primary">
                Start a Project
              </Link>
              <Link href="/services" className="btn-secondary">Back to Services</Link>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="card p-7">
            <h3 className="h3">Typical Deliverables</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-200/90">
              {["Requirement clarification", "Solution design", "Implementation plan", "Testing & validation", "Documentation & handover"].map((x) => (
                <li key={x} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">{x}</li>
              ))}
            </ul>
          </div>

          <div className="card p-7">
            <h3 className="h3">Need Guidance?</h3>
            <p className="mt-2 text-sm text-slate-300/90">
              Tell us your goal and timeline—we’ll recommend the right approach.
            </p>
            <Link href="/contact" className="btn-primary mt-5 w-full">Book Consultation</Link>
          </div>
        </aside>
      </div>
    </div>
  );
}