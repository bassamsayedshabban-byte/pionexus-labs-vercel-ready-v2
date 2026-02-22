import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container-px py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-lg font-semibold">PIONEXUS LABS</div>
            <p className="mt-3 text-sm text-slate-300/90">
              Built on logic. Designed to scale. We deliver development, testing,
              documentation, and architecture for modern businesses.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold">Services</div>
            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-300/90">
              <Link href="/services/development" className="hover:text-white">Development</Link>
              <Link href="/services/architecture" className="hover:text-white">Architecture</Link>
              <Link href="/services/testing" className="hover:text-white">Testing & QA</Link>
              <Link href="/services/documentation" className="hover:text-white">Documentation</Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold">Company</div>
            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-300/90">
              <Link href="/about" className="hover:text-white">About</Link>
              <Link href="/portfolio" className="hover:text-white">Portfolio</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold">Contact</div>
            <div className="mt-3 space-y-2 text-sm text-slate-300/90">
              <div>Email: contact@pionexuslabs.com</div>
              <div>Hours: Mon–Fri, 9:00–18:00</div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs text-slate-400/80">
          © {new Date().getFullYear()} PIONEXUS LABS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
