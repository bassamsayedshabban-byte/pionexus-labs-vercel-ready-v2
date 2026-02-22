import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";

export default function PortfolioPage() {
  return (
    <div className="container-px py-16">
      
      <div className="mb-10"><PageHero title="Portfolio" subtitle="Selected work: scalable systems, clean architecture, and measurable outcomes." /></div>
<SectionHeader
        title="Portfolio"
        subtitle="Case studies demonstrating scalable architecture, reliability, and measurable impact."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {projects.map((p) => (
          <Link key={p.slug} href={`/portfolio/${p.slug}`} className="card p-6 hover:bg-white/10 transition">
            <div className="h-40 rounded-xl border border-white/10 bg-white/5" />
            <div className="mt-4 text-xs text-slate-300/80">{p.industry}</div>
            <div className="mt-1 text-lg font-semibold">{p.title}</div>
            <p className="mt-2 text-sm text-slate-300/90">{p.summary}</p>
            <div className="mt-5 inline-flex items-center text-sm text-sky-300">
              View details <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}