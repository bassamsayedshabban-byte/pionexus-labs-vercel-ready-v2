import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import PageHero from "@/components/PageHero";

export default function AboutPage() {
  return (
    <div className="container-px py-16">
      
      <div className="mb-10"><PageHero title="About" subtitle="Built on logic. Designed to scale. Meet the team behind PIONEXUS LABS." /></div>
<SectionHeader
        title="About PIONEXUS LABS"
        subtitle="A technology partner focused on reliable software, scalable architecture, and measurable outcomes."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 card p-7">
          <h3 className="h3">About Company</h3>
          <p className="mt-2 text-sm text-slate-300/90">
            PIONEXUS LABS is a technology partner focused on delivering reliable and scalable digital solutions.
            We combine strong engineering principles with business understanding to build software that performs
            and grows with our clients.
          </p>

          <div className="mt-7 grid gap-6 sm:grid-cols-2">
            <div className="card p-6">
              <div className="text-sm font-semibold">Mission</div>
              <p className="mt-2 text-sm text-slate-300/90">
                To build reliable, scalable, and high-quality software that empowers businesses worldwide.
              </p>
            </div>
            <div className="card p-6">
              <div className="text-sm font-semibold">Vision</div>
              <p className="mt-2 text-sm text-slate-300/90">
                To become a trusted global technology partner for ambitious companies.
              </p>
            </div>
          </div>

          <h3 className="h3 mt-8">Core Values</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {[
              { t: "Quality", d: "We prioritize excellence in every line of code." },
              { t: "Transparency", d: "We maintain open and honest communication." },
              { t: "Innovation", d: "We continuously adopt modern technologies and practices." }
            ].map((v) => (
              <div key={v.t} className="card p-6">
                <div className="font-semibold">{v.t}</div>
                <p className="mt-2 text-sm text-slate-300/90">{v.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex gap-3">
            <Link href="/contact" className="btn-primary">Work With Us</Link>
            <Link href="/services" className="btn-secondary">Explore Services</Link>
          </div>
        </div>

        <aside className="space-y-6">
          {[
            { k: "8+", v: "Years Experience" },
            { k: "25+", v: "Engineers" },
            { k: "12+", v: "Countries Served" }
          ].map((x) => (
            <div key={x.v} className="card p-7">
              <div className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-fuchsia-400 bg-clip-text text-transparent">
                {x.k}
              </div>
              <div className="mt-2 text-sm text-slate-300/90">{x.v}</div>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}