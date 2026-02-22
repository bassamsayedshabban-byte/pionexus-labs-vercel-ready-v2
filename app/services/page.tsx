import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { services } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";

export default function ServicesPage() {
  return (
    <div className="container-px py-16">
      
      <div className="mb-10"><PageHero title="Services" subtitle="Development, testing, documentation, and architecture — delivered with senior engineering standards." /></div>
<SectionHeader
        title="Services"
        subtitle="Comprehensive software solutions from planning to deployment."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <div key={s.slug} className="card p-7">
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="h3">{s.title}</div>
                <p className="mt-2 text-sm text-slate-300/90">{s.short}</p>
              </div>
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-sky-500/30 to-fuchsia-500/30" />
            </div>

            <ul className="mt-5 list-disc pl-5 text-sm text-slate-200/90 space-y-1">
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {s.tech.slice(0, 6).map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/90">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={`/services/${s.slug}`} className="btn-primary">
                View Details <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href={`/contact?service=${encodeURIComponent(s.title)}`} className="btn-secondary">
                {s.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}