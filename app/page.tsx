import Link from "next/link";
import Glow from "@/components/Glow";
import SectionHeader from "@/components/SectionHeader";
import { services, projects } from "@/lib/data";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      <section className="relative">
        <Glow />
        <div className="container-px py-20 lg:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
                            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500" />
                Built on logic. Designed to scale.
              </p>

              <h1 className="h1 mt-5">
                We Design &amp; Build Scalable Software That Drives Business Growth
              </h1>

              <p className="mt-5 muted max-w-xl">
                PIONEXUS LABS delivers high-quality development, testing,
                technical documentation, and scalable software architecture for
                startups and enterprises worldwide.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/services" className="btn-secondary">
                  Explore Our Services
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 text-sm text-slate-200/90">
                {[
                  "Senior-level engineers with proven industry experience",
                  "Clean, scalable, and maintainable architecture",
                  "Transparent communication & agile workflow",
                  "End-to-end delivery from idea to deployment"
                ].map((t) => (
                  <div key={t} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-sky-400" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card relative p-6">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-sky-500/15 to-fuchsia-500/10 p-8">
                <div className="text-sm text-slate-200/90">Architecture Snapshot</div>
                <div className="mt-3 text-2xl font-semibold">π + Nexus + Growth</div>
                <p className="mt-2 text-sm text-slate-300/90">
                  Scale-ready systems with clear interfaces, observability, and
                  performance built in.
                </p>
                <div className="mt-6 h-40 rounded-xl border border-white/10 bg-white/5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-px py-20">
        <SectionHeader
          title="Our Services"
          subtitle="High-quality software solutions tailored for your business."
          center
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="card p-6 hover:bg-white/10 transition"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-sky-500/30 to-fuchsia-500/30" />
              <div className="mt-4">
                <div className="h3">{s.title}</div>
                <p className="mt-2 text-sm text-slate-300/90">{s.short}</p>
              </div>
              <div className="mt-5 inline-flex items-center text-sm text-sky-300">
                View details <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/services" className="btn-secondary">View All Services</Link>
        </div>
      </section>

      <section className="container-px pb-20">
        <div className="card p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="h2">Why Choose Us</h2>
              <p className="mt-3 muted">
                PIONEXUS LABS is a team of experienced engineers, architects, and QA specialists
                dedicated to building secure, scalable, and high-performing digital products.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-slate-200/90">
                {[
                  "Senior-level engineers with proven industry experience",
                  "Clean, scalable, and maintainable architecture",
                  "Transparent communication & agile workflow",
                  "End-to-end delivery from idea to deployment",
                  "Long-term technical partnership & support"
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-fuchsia-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex gap-3">
                <Link href="/about" className="btn-secondary">Learn About Us</Link>
                <Link href="/contact" className="btn-primary">Book Consultation</Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { k: "8+", v: "Years Experience" },
                { k: "25+", v: "Engineers" },
                { k: "50+", v: "Projects Delivered" },
                { k: "12+", v: "Countries Served" }
              ].map((m) => (
                <div key={m.v} className="card p-6">
                  <div className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-fuchsia-400 bg-clip-text text-transparent">
                    {m.k}
                  </div>
                  <div className="mt-2 text-sm text-slate-300/90">{m.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-px pb-20">
        <SectionHeader
          title="Our Process"
          subtitle="A clear delivery path from discovery to launch and support."
          center
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "01", t: "Discovery", d: "We analyze your goals, requirements, and technical needs." },
            { n: "02", t: "Architecture", d: "We design scalable and future-proof system structures." },
            { n: "03", t: "Development & Testing", d: "We build, test, and optimize your solution." },
            { n: "04", t: "Launch & Support", d: "We deploy and provide ongoing support." }
          ].map((s) => (
            <div key={s.n} className="card p-6">
              <div className="text-xs text-slate-300/80">{s.n}</div>
              <div className="mt-2 text-lg font-semibold">{s.t}</div>
              <p className="mt-2 text-sm text-slate-300/90">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-px pb-20">
        <SectionHeader
          title="Our Recent Work"
          subtitle="A few examples of systems we’ve engineered and scaled."
          center
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/portfolio/${p.slug}`}
              className="card p-6 hover:bg-white/10 transition"
            >
              <div className="h-40 rounded-xl border border-white/10 bg-white/5" />
              <div className="mt-4 text-xs text-slate-300/80">{p.industry}</div>
              <div className="mt-1 text-lg font-semibold">{p.title}</div>
              <p className="mt-2 text-sm text-slate-300/90">{p.summary}</p>
              <div className="mt-5 inline-flex items-center text-sm text-sky-300">
                View case study <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/portfolio" className="btn-secondary">View All Projects</Link>
        </div>
      </section>

      <section className="relative">
        <div className="container-px pb-24">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-sky-500/15 to-fuchsia-500/15 p-10 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to Turn Your Idea Into a Scalable Product?
            </h2>
            <p className="mt-3 muted mx-auto max-w-2xl">
              Let’s collaborate to design and build software that accelerates your business growth.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <Link href="/contact" className="btn-primary">Start Your Project</Link>
              <Link href="/services" className="btn-secondary">Explore Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}